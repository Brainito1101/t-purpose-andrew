import { NextResponse } from 'next/server';
import { PAYMENT_LINKS } from '@/lib/payment-links';
import { validatePricing } from '@/lib/pricing';

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

    } catch (error: any) {
        console.error('Error creating checkout session:', error);
        return NextResponse.json(
            { error: error.message || 'Internal server error' },
            { status: 500 }
        );
    }
}
