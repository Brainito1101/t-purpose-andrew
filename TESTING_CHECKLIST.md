# Testing Checklist - Stripe + GHL Integration

## ✅ Pre-Testing Setup

- [ ] Installed Stripe package: `npm install stripe --legacy-peer-deps`
- [ ] Created `.env.local` with all required keys
- [ ] Stripe CLI installed: https://stripe.com/docs/stripe-cli
- [ ] Stripe CLI logged in: `stripe login`
- [ ] Webhook forwarding started: `stripe listen --forward-to localhost:3000/api/webhooks/stripe`
- [ ] Copied webhook secret from CLI to `.env.local`
- [ ] GHL API Key obtained and added to `.env.local`
- [ ] GHL Location ID obtained and added to `.env.local`
- [ ] Development server running: `npm run dev`

## 🎯 Frontend Flow Testing

### Workshop Confirmation Step
- [ ] Navigate to `/upgrade`
- [ ] See Workshop Confirmation page
- [ ] Price shows $197
- [ ] Click "Confirm My Spot — $197"
- [ ] Advances to VIP Upgrade page

### VIP Upgrade Step
- [ ] See VIP benefits listed
- [ ] Price shows $297
- [ ] Click "Yes! Upgrade to VIP" → marks VIP as selected
- [ ] Click "No thanks" → skips VIP
- [ ] Advances to Coaching Addons page

### Coaching Addons Step
- [ ] See all 4 coaching options
- [ ] Click to select 1-Hour Consultation → checkbox appears
- [ ] Click to select 3-Month Coaching → checkbox appears
- [ ] Click 12-Month Full → checkbox appears
- [ ] Click 12-Month Monthly → checkbox appears (12-Month Full unchecks)
- [ ] Total price updates dynamically
- [ ] Click "Add to My Order" (if selections made)
- [ ] Click "Continue without add-ons" (if no selections)
- [ ] Advances to Payment Checkout page

### Payment Checkout Step
- [ ] See order summary with all selected items
- [ ] See name and email input fields
- [ ] Try submitting without name → shows error
- [ ] Try submitting without email → shows error
- [ ] Try submitting with invalid email → shows error
- [ ] Enter valid name and email
- [ ] Click "Proceed to Payment"
- [ ] Button shows "Processing..." with spinner
- [ ] Redirects to Stripe Checkout page

## 💳 Stripe Checkout Testing

### Stripe Hosted Checkout
- [ ] Stripe checkout page loads
- [ ] Correct total amount displayed
- [ ] All line items visible
- [ ] Email is pre-filled
- [ ] Use test card: `4242 4242 4242 4242`
- [ ] Expiry: Any future date (e.g., `12/34`)
- [ ] CVC: Any 3 digits (e.g., `123`)
- [ ] ZIP: Any 5 digits (e.g., `12345`)
- [ ] Click "Pay"
- [ ] Payment processes successfully
- [ ] Redirects to `/upgrade/success?session_id=cs_test_...`

### Success Page
- [ ] See "Payment Successful!" message
- [ ] See "Check Your Email" card
- [ ] See "Save the Date" card
- [ ] See Order ID (session_id) at bottom
- [ ] "Visit True Purpose" button is clickable

## 🔔 Webhook Testing

### Stripe CLI Logs
- [ ] Check Stripe CLI terminal
- [ ] See `checkout.session.completed` event received
- [ ] See "200 OK" response
- [ ] No errors in webhook processing

### Server Logs
Check your Next.js dev server console for:
- [ ] "Processing payment for: { email, name, service, addons }"
- [ ] "Successfully saved payment to GHL" OR GHL error messages
- [ ] NO "Webhook signature verification failed" errors
- [ ] NO 500 errors

## 🏢 GoHighLevel Verification

### Contact Created/Updated
- [ ] Open GHL Dashboard → Contacts
- [ ] Search for test email
- [ ] Contact exists (created or updated)
- [ ] Name matches what was entered

### Tags Applied
Check contact has these tags:
- [ ] `Paid Customer`
- [ ] `Service: Workshop 2day`
- [ ] `Addon: Vip Upgrade` (if selected)
- [ ] `Addon: Consultation 1hour` (if selected)
- [ ] `Addon: Coaching 3month` (if selected)
- [ ] `Addon: Coaching 12month Full` or `Addon: Coaching 12month Monthly` (if selected)

### Custom Fields
Check custom fields are populated:
- [ ] `purchased_service` = "workshop_2day"
- [ ] `addons_purchased` = comma-separated list
- [ ] `total_amount_paid` = correct dollar amount
- [ ] `payment_source` = "Stripe"
- [ ] `stripe_session_id` = starts with "cs_test_"

### Opportunity Created
- [ ] Check Opportunities section
- [ ] New opportunity exists for this contact
- [ ] Stage = "Won" or similar
- [ ] Value = Total amount paid
- [ ] Name = "workshop_2day - [date]"

## 🧪 Edge Case Testing

### Payment Failures
- [ ] Use failed card: `4000 0000 0000 0002`
- [ ] Payment declines
- [ ] No GHL contact created
- [ ] User can retry

### Duplicate Webhooks
- [ ] Trigger same event twice (using Stripe CLI: `stripe trigger checkout.session.completed`)
- [ ] Check logs show "already processed, skipping"
- [ ] No duplicate GHL entries

### Invalid Data
- [ ] Try manipulating API call (if testing directly)
- [ ] Server returns 400 error for invalid service
- [ ] Server returns 400 error for invalid addon

### Back Navigation
- [ ] From Payment page, click "Go Back"
- [ ] Returns to Coaching Addons
- [ ] Selections are preserved

## 🎭 Different Pricing Scenarios

Test these combinations:

### Scenario 1: Workshop Only
- [ ] No VIP, no addons
- [ ] Total: $197
- [ ] GHL tags: Only `Paid Customer` and `Service: Workshop 2day`

### Scenario 2: Workshop + VIP
- [ ] VIP selected
- [ ] Total: $494 ($197 + $297)
- [ ] GHL tags include: `Addon: Vip Upgrade`

### Scenario 3: Full Stack
- [ ] VIP + Consultation + 3-Month Coaching
- [ ] Total: $2,864
- [ ] All addons appear as tags

### Scenario 4: Monthly Subscription
- [ ] Workshop + 12-Month Monthly
- [ ] Total: $846 for first month
- [ ] Stripe shows subscription mode
- [ ] Recurring charge setup

## 📊 Monitoring & Logs

### Stripe Dashboard
- [ ] Open Stripe Dashboard → Payments
- [ ] See test payment listed
- [ ] Amount matches expected
- [ ] Status = "Succeeded"
- [ ] Metadata includes service, addons, email

### Stripe Webhooks Log
- [ ] Open Stripe Dashboard → Developers → Webhooks
- [ ] See recent webhook events
- [ ] `checkout.session.completed` shows 200 response
- [ ] No errors in webhook logs

### Server Performance
- [ ] Checkout API responds within 500ms
- [ ] Webhook processes within 1-2 seconds
- [ ] No memory leaks during repeated tests

## ✅ Final Verification

- [ ] End-to-end flow works smoothly
- [ ] All prices calculate correctly
- [ ] Stripe integration is secure (webhook verified)
- [ ] GHL receives all customer data
- [ ] No errors in any logs
- [ ] UI/UX is clean and professional
- [ ] Success page displays correctly

## 🚀 Production Readiness

Before going live:
- [ ] Replace test Stripe keys with live keys
- [ ] Create production webhook in Stripe Dashboard
- [ ] Update `NEXT_PUBLIC_SITE_URL` to production URL
- [ ] Test with real card in test mode first
- [ ] Verify GHL custom fields are created in settings
- [ ] Confirm GHL pipeline/stage IDs if using specific pipeline
- [ ] Set up error monitoring (Sentry, LogRocket, etc.)
- [ ] Enable Stripe email receipts
- [ ] Test refund process
- [ ] Create internal documentation for support team

## 🐛 Common Issues

**Webhook not firing:**
- Verify Stripe CLI is running
- Check `STRIPE_WEBHOOK_SECRET` matches CLI output
- Ensure dev server is on port 3000

**GHL contact not created:**
- Verify `GHL_API_KEY` is correct
- Check `GHL_LOCATION_ID` matches your location
- Look for error messages in server logs
- Ensure GHL custom fields exist

**Payment fails:**
- Check card number is valid test card
- Verify Stripe keys are test mode keys
- Check line items have amounts >= $0.50
- Look in Stripe Dashboard → Logs

---

**Test completed:** __________ (date)
**Tested by:** __________
**Result:** PASS / FAIL
**Notes:** __________
