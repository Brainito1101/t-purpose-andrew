import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { stripe } from '@/lib/stripe';
import { savePaymentToGHL } from '@/lib/ghl';
import Stripe from 'stripe';

// Track processed events to prevent duplicate processing
const processedEvents = new Set<string>();

export async function POST(req: Request) {
    const body = await req.text();
    const headersList = await headers();
    const signature = headersList.get('Stripe-Signature');

    if (!signature) {
        return NextResponse.json(
            { error: 'Missing Stripe signature' },
            { status: 400 }
        );
    }

    let event: Stripe.Event;

    try {
        // Verify webhook signature
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET!
        );
    } catch (error: any) {
        console.error('Webhook signature verification failed:', error.message);
        return NextResponse.json(
            { error: `Webhook Error: ${error.message}` },
            { status: 400 }
        );
    }

    // Idempotency: Check if event already processed
    if (processedEvents.has(event.id)) {
        console.log(`Event ${event.id} already processed, skipping`);
        return NextResponse.json({ received: true, skipped: true });
    }

    // Handle checkout.session.completed event
    if (event.type === 'checkout.session.completed') {
        const session = event.data.object as Stripe.Checkout.Session;

        try {
            // Extract metadata
            const metadata = session.metadata;
            const email = metadata?.customer_email || session.customer_details?.email;
            const name = metadata?.customer_name || session.customer_details?.name;
            const service = metadata?.service;
            const addonsStr = metadata?.addons;
            const totalAmount = session.amount_total || 0;

            // Validation
            if (!email || !name || !service) {
                console.error('Missing required data in webhook metadata');
                return NextResponse.json(
                    { error: 'Missing required metadata' },
                    { status: 400 }
                );
            }

            // Parse addons
            let addons: string[] = [];
            try {
                addons = addonsStr ? JSON.parse(addonsStr) : [];
            } catch (e) {
                console.error('Failed to parse addons:', e);
            }

            console.log('Processing payment for:', {
                email,
                name,
                service,
                addons,
                totalAmount,
            });

            // Save to GoHighLevel
            const success = await savePaymentToGHL({
                email,
                name,
                service,
                addons,
                totalAmount,
                stripeSessionId: session.id,
            });

            if (!success) {
                console.error('Failed to save payment to GHL');
                // Don't return error to Stripe, but log it
            } else {
                console.log('Successfully processed payment and saved to GHL');
            }

            // Mark event as processed
            processedEvents.add(event.id);

            // Clean up old processed events (keep last 100)
            if (processedEvents.size > 100) {
                const toDelete = Array.from(processedEvents).slice(0, processedEvents.size - 100);
                toDelete.forEach((id) => processedEvents.delete(id));
            }
        } catch (error: any) {
            console.error('Error processing webhook:', error);
            return NextResponse.json(
                { error: error.message },
                { status: 500 }
            );
        }
    }

    return NextResponse.json({ received: true });
}
