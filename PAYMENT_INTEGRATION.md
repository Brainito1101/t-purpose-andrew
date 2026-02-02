# Payment Integration - Static Links (FastPayDirect)

Since Stripe access is not yet available, we are using 24 static FastPayDirect payment links. The system automatically detects the user's selected combination (Workshop, VIP, Addons) and redirects them to the correct pre-generated payment page.

## 📂 File Structure

```
├── lib/
│   ├── payment-links.ts     # Mapping of ALL 24 static payment URLs
│   ├── pricing.ts           # Pricing constants (still good for reference)
│
├── app/api/
│   ├── checkout/route.ts    # Determines which link to use based on selection
│
├── app/upgrade/
│   ├── page.tsx             # Main upgrade flow entry
│
└── components/
    ├── UpsellFlow.tsx
    ├── PaymentCheckout.tsx  # User enters email -> Redirects to Link
```

## 🔄 Payment Flow

1. **User selects options** → Workshop, VIP, Addons
2. **User enters contact info** → Name + Email
3. **Clicks "Proceed to Payment"** → POST /api/checkout
4. **Backend logic** (`app/api/checkout/route.ts`) checks the combination
5. **Returns URL** from `lib/payment-links.ts`
6. **Frontend redirects** user to FastPayDirect

## ⚠️ Important Notes

- **No automatic GHL sync** currently (Code for webhook handler was removed).
- **No Stripe API** calls.
- **Manual Verification Needed**: Since there's no webhook callback to our app, you must check FastPayDirect/GHL manually to confirm payment before manually handling any post-purchase logic if needed (or rely on FastPayDirect's native integration with GHL).
- **Updates**: If you change a price, you must generate a new link in GHL and update `lib/payment-links.ts`.

## 📝 Editing Links

To update a payment link, edit `lib/payment-links.ts`:

```typescript
export const PAYMENT_LINKS = {
    workshop_only: "NEW_URL_HERE",
    // ...
};
```

## 🧪 Testing

1. Go to `/upgrade`.
2. Select any combination.
3. Click Proceed.
4. Verify you land on the correct FastPayDirect page with the correct price.
