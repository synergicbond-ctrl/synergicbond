# WEEK 1 RAZORPAY AUDIT

## Status

PARTIAL

## Verification

| Requirement | Status | Evidence |
| --- | --- | --- |
| Order creation route | PASS | `app/api/payment/create-order/route.ts` uses `RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET`, authenticated Supabase user, `isValidPlan()`, and Razorpay Orders API. |
| Checkout client flow | PASS | `components/PaymentGateway.tsx` posts `{ plan }` to `/api/payment/create-order`, loads `https://checkout.razorpay.com/v1/checkout.js`, opens Checkout with `key`, `amount`, `currency`, `order_id`, and user email. |
| Payment verification route | PARTIAL | No separate client payment verification route exists. Server trust boundary is the HMAC-verified webhook only. |
| Webhook route | PASS | `app/api/payment/webhook/route.ts` exists and is `nodejs` runtime. |
| HMAC signature validation | PASS | Webhook computes HMAC SHA-256 over raw body and compares `x-razorpay-signature` with `crypto.timingSafeEqual`. |
| Idempotency | PASS | Webhook checks `payment_events.event_id` before processing and inserts processed event IDs. |
| Subscription activation logic | PASS | Webhook activates on `payment.captured` or `order.paid`, validates `notes.user_id` and `notes.plan`, and upserts `subscriptions`. |
| Failure handling | PARTIAL | Checkout script load/order failures return user-facing errors; webhook records signed non-success events but does not update subscription state for `payment.failed`, cancellation, refund, or renewal semantics. |
| Amount tampering protection | PASS | Client sends only `plan`; server derives amount from `PLANS` in `lib/subscription.ts`. |
| Live Razorpay keys | NOT TESTED | No dashboard/API credentials available. |
| Live webhook registration | NOT TESTED | No Razorpay dashboard access available. |

## Code Gaps Not Fixed

- Renewal/cancellation/refund subscription semantics are not implemented because the current product model uses fixed-duration plans (`PLANS[plan].days`) and no verified Razorpay subscription product IDs exist in code.

## Blockers

- Razorpay production/test keys required.
- Razorpay webhook dashboard access required.
- Real checkout/webhook event evidence required.
