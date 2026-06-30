# PAYMENT VERIFICATION

## Status Table

| Area | Status | Repository Evidence | Exact Evidence Required For PASS |
| --- | --- | --- | --- |
| Razorpay integration | PARTIAL | `app/api/payment/create-order/route.ts` checks `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET`, requires an authenticated user, validates `plan`, posts to `https://api.razorpay.com/v1/orders`, and returns `orderId`, `amount`, `currency`, `keyId`, `plan`, `label`, and `email`. | Successful production/test Razorpay order creation with real keys; captured request/response showing expected `order_id`, amount, currency, and plan notes. |
| Subscription activation | PARTIAL | `app/api/payment/webhook/route.ts` handles `payment.captured` and `order.paid`, validates `notes.user_id` and `notes.plan`, and upserts `subscriptions` with `status: active`, `expires_at`, `plan`, and `razorpay_payment_id`. `supabase/migrations/003_subscriptions.sql` defines the table and own-row read policy. | Database evidence after a real payment: `subscriptions` row for the paying user with correct plan, active status, future `expires_at`, and matching Razorpay payment ID. |
| Premium gating | PARTIAL | `app/chapter/[id]/page.tsx` server-redirects unauthenticated premium chapter access to `/auth/signin?next=...` and non-Pro users to `/pricing`. `app/api/content/access/route.ts` checks free chapters and active subscriptions. | Browser/runtime evidence for guest, free, expired, and active Pro users showing correct redirects/access against production Supabase data. |
| Snap Solve limits | PARTIAL | `lib/snapQuota.ts` blocks guests, allows Pro unlimited access, limits free users to `SNAP_FREE_DAILY_LIMIT = 5`, upserts `snap_usage`, and fails closed on quota errors. `app/api/snap-solve/route.ts` calls `checkAndConsumeSnapQuota()` before solving. `supabase/migrations/004_snap_usage.sql` defines the quota table and RLS policies. | Runtime evidence for guest 401, free user first 5 solves allowed, sixth solve 402, Pro user unlimited, and `snap_usage` count updates. |
| Webhook flow | PARTIAL | `app/api/payment/webhook/route.ts` reads the raw body, verifies `x-razorpay-signature` via HMAC SHA-256 and `crypto.timingSafeEqual`, requires `RAZORPAY_WEBHOOK_SECRET`, requires service-role Supabase, checks `payment_events` idempotency, and inserts processed events. `supabase/migrations/005_payment_events.sql` defines `payment_events` with unique `event_id`. | Razorpay webhook dashboard delivery evidence, valid-signature success, invalid-signature rejection, duplicate event idempotency response, `payment_events` row insert, and subscription activation from the same event. |

## Blockers

- External credentials required: `RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET`, `RAZORPAY_WEBHOOK_SECRET`, Supabase URL, Supabase anon key, Supabase service-role key.
- External systems required: Razorpay checkout/webhook dashboard and migrated Supabase project.

## Current Verification Result

Revenue readiness is PARTIAL. Source implementation exists, but live payment execution, webhook delivery, subscription writes, premium access, and quota behavior are NOT TESTED in this repository state.
