import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { PAYMENT_LINKS } from '@/lib/payment-links';
import { calculateTotalPrice, validatePricing, BaseService, Addon } from '@/lib/pricing';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, service, addons } = body;

        // Validation
        if (!name || !email || !service) {
            return NextResponse.json(
                { error: 'Missing required fields: name, email, service' },
                { status: 400 }
            );
        }

        if (!Array.isArray(addons)) {
            return NextResponse.json(
                { error: 'Addons must be an array' },
                { status: 400 }
            );
        }

        // Validate pricing (prevent tampering)
        const validation = validatePricing(service, addons);
        if (!validation.valid) {
            return NextResponse.json(
                { error: validation.error },
                { status: 400 }
            );
        }

        // Determine which payment link to use
        let key = "workshop_only";
        const isVip = service === 'vip_upgrade' || addons.includes('vip_upgrade');
        const isConsult = addons.includes('consultation_1hour');
        const is3Month = addons.includes('coaching_3month');
        const is12MonthFull = addons.includes('coaching_12month_full');
        const is12MonthMonthly = addons.includes('coaching_12month_monthly');

        // Logic to build the key
        if (is12MonthFull) {
            // Group 2
            if (isVip && isConsult && is3Month) key = "workshop_vip_consult_3month_12month_full";
            else if (!isVip && isConsult && is3Month) key = "workshop_consult_3month_12month_full";
            else if (isVip && !isConsult && is3Month) key = "workshop_vip_3month_12month_full";
            else if (isVip && isConsult && !is3Month) key = "workshop_vip_consult_12month_full";
            else if (!isVip && !isConsult && is3Month) key = "workshop_3month_12month_full";
            else if (!isVip && isConsult && !is3Month) key = "workshop_consult_12month_full";
            else if (isVip && !isConsult && !is3Month) key = "workshop_vip_12month_full";
            else key = "workshop_12month_full";
        } else if (is12MonthMonthly) {
            // Group 3
            if (isVip && isConsult && is3Month) key = "workshop_vip_consult_3month_12month_monthly";
            else if (!isVip && isConsult && is3Month) key = "workshop_consult_3month_12month_monthly";
            else if (isVip && !isConsult && is3Month) key = "workshop_vip_3month_12month_monthly";
            else if (isVip && isConsult && !is3Month) key = "workshop_vip_consult_12month_monthly";
            else if (!isVip && !isConsult && is3Month) key = "workshop_3month_12month_monthly";
            else if (!isVip && isConsult && !is3Month) key = "workshop_consult_12month_monthly";
            else if (isVip && !isConsult && !is3Month) key = "workshop_vip_12month_monthly";
            else key = "workshop_12month_monthly";
        } else {
            // Group 1
            if (isVip && isConsult && is3Month) key = "workshop_vip_consult_3month";
            else if (!isVip && isConsult && is3Month) key = "workshop_consult_3month";
            else if (isVip && !isConsult && is3Month) key = "workshop_vip_3month";
            else if (isVip && isConsult && !is3Month) key = "workshop_vip_consult";
            else if (!isVip && !isConsult && is3Month) key = "workshop_3month";
            else if (!isVip && isConsult && !is3Month) key = "workshop_consult";
            else if (isVip && !isConsult && !is3Month) key = "workshop_vip";
            else key = "workshop_only";
        }

        const checkoutUrl = PAYMENT_LINKS[key as keyof typeof PAYMENT_LINKS];

        if (!checkoutUrl) {
            return NextResponse.json(
                { error: "Payment link not found for this combination" },
                { status: 400 }
            );
        }

        // NOTE: Since we are using static links, we cannot pass metadata dynamically to Stripe via API.
        // However, if the payment provider allows query params to prefill data, we could append them.
        // For now, we just return the static URL.
        return NextResponse.json({ url: checkoutUrl });

        /* 
        // Commenting out dynamic Stripe creation for now
        // Calculate total on server-side
        const totalAmount = calculateTotalPrice(service as BaseService, addons as Addon[]);
    
        // Create line items for Stripe Checkout
        const lineItems: any[] = [];
    
        // Always include base service (Workshop)
        lineItems.push({
            price_data: {
                currency: 'usd',
                product_data: {
                    name: '2-Day Transformation Workshop',
                    description: service.replace(/_/g, ' '),
                },
                unit_amount: 19700, // Base workshop price
            },
            quantity: 1,
        });
    
        // Add VIP if selected
        if (service === 'vip_upgrade' || addons.includes('vip_upgrade')) {
            lineItems.push({
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'VIP Upgrade',
                        description: 'Extra day, recordings, materials, and extended Q&A',
                    },
                    unit_amount: 29700,
                },
                quantity: 1,
            });
        }
    
        // Add consultation if selected
        if (addons.includes('consultation_1hour')) {
            lineItems.push({
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: '1-Hour Deep Dive Consultation',
                        description: 'Personalized strategy session',
                    },
                    unit_amount: 49500,
                },
                quantity: 1,
            });
        }
    
        // Add 3-month coaching if selected
        if (addons.includes('coaching_3month')) {
            lineItems.push({
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: '3-Month Coaching Program',
                        description: 'Bi-weekly sessions for 3 months',
                    },
                    unit_amount: 187500,
                },
                quantity: 1,
            });
        }
    
        // Add 12-month coaching (full payment) if selected
        if (addons.includes('coaching_12month_full')) {
            lineItems.push({
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: '12-Month Transformation Journey',
                        description: 'Complete year of coaching (Save $1,293)',
                    },
                    unit_amount: 749500,
                },
                quantity: 1,
            });
        }
    
        // Determine session mode (payment or subscription)
        let mode: 'payment' | 'subscription' = 'payment';
    
        // If 12-month monthly is selected, use subscription mode
        if (addons.includes('coaching_12month_monthly')) {
            mode = 'subscription';
            lineItems.push({
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: '12-Month Transformation Journey (Monthly)',
                        description: '12 monthly payments of $649',
                    },
                    unit_amount: 64900,
                    recurring: {
                        interval: 'month',
                        interval_count: 1,
                    },
                },
                quantity: 1,
            });
        }
    
        // Create metadata to pass to webhook
        const metadata = {
            customer_name: name,
            customer_email: email,
            service: service,
            addons: JSON.stringify(addons),
            total_amount: totalAmount.toString(),
        };
    
        // Create Stripe Checkout Session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode,
            customer_email: email,
            metadata,
            success_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/upgrade/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/upgrade`,
        });
    
        return NextResponse.json({ url: session.url });
        */
    } catch (error: any) {
        console.error('Error creating checkout session:', error);
        return NextResponse.json(
            { error: error.message || 'Internal server error' },
            { status: 500 }
        );
    }
}
