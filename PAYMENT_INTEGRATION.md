# Stripe + GoHighLevel Payment Integration

Complete dynamic payment system for the True Purpose workshop with automatic CRM integration.

## 🎯 Overview

This system allows users to:
1. Select a base workshop + multiple add-ons
2. Pay via Stripe Checkout (secure, hosted)
3. Automatically get saved in GoHighLevel with tags, custom fields, and opportunities

**NO static payment links required!**

## 📁 File Structure

```
├── lib/
│   ├── pricing.ts          # Server-side pricing logic (BASE_PRICES, ADDON_PRICES)
│   ├── stripe.ts            # Stripe client initialization
│   └── ghl.ts               # GoHighLevel API integration
│
├── app/api/
│   ├── checkout/route.ts    # Create Stripe Checkout Session
│   └── webhooks/
│       └── stripe/route.ts  # Stripe webhook handler (saves to GHL)
│
├── app/upgrade/
│   ├── page.tsx             # Main upgrade flow entry
│   └── success/page.tsx     # Success page after payment
│
└── components/
    ├── UpsellFlow.tsx       # Main flow orchestrator
    ├── WorkshopConfirmation.tsx
    ├── VIPUpgrade.tsx
    ├── CoachingAddons.tsx
    ├── PaymentCheckout.tsx  # Contact form + order summary
    └── SuccessScreen.tsx
```

## 🔧 Environment Variables

Add these to `.env.local`:

```bash
# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_YOUR_KEY
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_KEY
STRIPE_WEBHOOK_SECRET=whsec_YOUR_WEBHOOK_SECRET

# GoHighLevel Configuration
GHL_API_KEY=YOUR_GHL_API_KEY
GHL_LOCATION_ID=YOUR_GHL_LOCATION_ID

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Where to get these values:

**Stripe Keys:**
1. Go to [Stripe Dashboard](https://dashboard.stripe.com/test/apikeys)
2. Copy **Publishable key** → `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
3. Copy **Secret key** → `STRIPE_SECRET_KEY`

**Stripe Webhook Secret:**
- For **local testing**: Run `stripe listen --forward-to localhost:3000/api/webhooks/stripe`
- For **production**: Create webhook endpoint in Stripe Dashboard → Developers → Webhooks

**GoHighLevel Keys:**
1. Go to GHL Settings → API
2. Create API Key → Copy to `GHL_API_KEY`
3. Find your Location ID → Copy to `GHL_LOCATION_ID`

## 💰 Pricing Configuration

All pricing is defined server-side in `lib/pricing.ts`:

```typescript
export const BASE_PRICES = {
  workshop_2day: 19700, // $197 in cents
  vip_upgrade: 29700,   // $297 in cents
};

export const ADDON_PRICES = {
  consultation_1hour: 49500,           // $495
  coaching_3month: 187500,             // $1,875
  coaching_12month_full: 749500,       // $7,495
  coaching_12month_monthly: 64900,     // $649/month
};
```

**To modify prices:** Edit these values (amounts in cents).

## 🔄 Payment Flow

1. **User selects options** → Workshop, VIP, Addons
2. **User enters contact info** → Name + Email
3. **Clicks "Proceed to Payment"** → Calls `/api/checkout`
4. **Backend validates** → Checks pricing integrity
5. **Creates Stripe session** → With metadata (service, addons, email, etc.)
6. **Redirects to Stripe** → Secure hosted checkout
7. **Payment succeeds** → Stripe sends webhook to `/api/webhooks/stripe`
8. **Webhook verified** → Using signature
9. **Data saved to GHL** →
   - Creates/updates contact
   - Adds tags: `Paid Customer`, `Service: Workshop 2day`, `Addon: VIP Upgrade`, etc.
   - Sets custom fields: `purchased_service`, `addons_purchased`, `total_amount_paid`, etc.
   - Creates opportunity in pipeline
10. **User redirected** → `/upgrade/success?session_id=...`

## 🏷️ GoHighLevel Integration

### Tags Applied:
- `Paid Customer`
- `Service: {{service_name}}`
- `Addon: {{addon_name}}` (one per addon)

### Custom Fields:
- `purchased_service`: e.g., "workshop_2day"
- `addons_purchased`: e.g., "vip_upgrade, coaching_3month"
- `total_amount_paid`: e.g., 2369 (in dollars)
- `payment_source`: "Stripe"
- `stripe_session_id`: Stripe Session ID

### Opportunity:
- **Pipeline**: Default (or configured)
- **Stage**: Won
- **Value**: Total amount paid
- **Name**: "workshop_2day - 2/2/2026"

## 🧪 Testing

### Local Testing with Stripe CLI

1. Install Stripe CLI: https://stripe.com/docs/stripe-cli
2. Login: `stripe login`
3. Forward webhooks:
   ```bash
   stripe listen --forward-to localhost:3000/api/webhooks/stripe
   ```
4. Copy the webhook signing secret to `.env.local`
5. Run your Next.js app: `npm run dev`
6. Use test card: `4242 4242 4242 4242`, any future date, any CVC

### Test Cards:
- **Success**: `4242 4242 4242 4242`
- **Decline**: `4000 0000 0000 0002`
- **3D Secure**: `4000 0025 0000 3155`

## 🚀 Production Deployment

1. **Update environment variables** with production keys
2. **Create Stripe webhook endpoint**:
   - URL: `https://yourdomain.com/api/webhooks/stripe`
   - Events: `checkout.session.completed`
3. **Test end-to-end** with a real card in test mode
4. **Switch to live mode** when ready

## 🔒 Security Features

✅ **Server-side pricing** - Frontend cannot manipulate prices  
✅ **Webhook signature verification** - Prevents fake webhook calls  
✅ **Idempotency protection** - Prevents duplicate processing  
✅ **Input validation** - Validates service and addon selections  
✅ **HTTPS only** - Stripe requires HTTPS in production  

## 🐛 Troubleshooting

**Webhook not firing?**
- Check Stripe CLI is running: `stripe listen`
- Verify `STRIPE_WEBHOOK_SECRET` matches CLI output
- Check webhook logs in Stripe Dashboard

**Contact not appearing in GHL?**
- Verify `GHL_API_KEY` and `GHL_LOCATION_ID` are correct
- Check server logs for GHL API errors
- Ensure custom fields exist in GHL settings

**Payment failing?**
- Check Stripe logs in Dashboard
- Verify all line items have valid amounts (>= $0.50)
- Ensure mode is correct (payment vs subscription)

## 📊 Monitoring

**Check webhook status:**
- Stripe Dashboard → Developers → Webhooks → View logs

**Check GHL contacts:**
- GHL Dashboard → Contacts → Search by email

**Server logs:**
```bash
npm run dev
# Watch for console.log messages about GHL saves
```

## 🎨 Customization

**Change workshop details:**
- Edit `WorkshopConfirmation.tsx`

**Add/remove addons:**
1. Update `ADDON_PRICES` in `lib/pricing.ts`
2. Update `CoachingAddons.tsx` to show new option
3. Update checkout logic in `app/api/checkout/route.ts`

**Modify GHL tags:**
- Edit `lib/ghl.ts` → `savePaymentToGHL` function

## 📝 API Endpoints

### `POST /api/checkout`
Creates Stripe Checkout Session

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "service": "workshop_2day",
  "addons": ["vip_upgrade", "coaching_3month"]
}
```

**Response:**
```json
{
  "url": "https://checkout.stripe.com/c/pay/cs_test_..."
}
```

### `POST /api/webhooks/stripe`
Handles Stripe webhook events

**Headers:**
- `Stripe-Signature`: Required for verification

**Events:**
- `checkout.session.completed` → Saves to GHL

## 🆘 Support

For issues or questions:
- Check server logs first
- Verify all environment variables
- Test with Stripe test mode
- Check GHL API documentation

## 📜 License

Private - True Purpose Workshop System
