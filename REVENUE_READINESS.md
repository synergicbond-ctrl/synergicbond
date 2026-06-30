# REVENUE READINESS

## Verification

| Area | Status | Evidence |
| --- | --- | --- |
| Razorpay configuration | PARTIAL | `app/api/payment/create-order/route.ts` requires `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET`, validates plan IDs, creates Razorpay orders with `user_id` and `plan` notes, and returns 503 when keys are missing. Live key values were not verified. |
| Webhook requirements | PARTIAL | `app/api/payment/webhook/route.ts` requires `RAZORPAY_WEBHOOK_SECRET`, verifies raw-body HMAC with `x-razorpay-signature`, uses service-role Supabase, and records `payment_events` idempotency. Live webhook delivery was not verified. |
| Subscription flow | PARTIAL | `lib/subscription.ts` defines `pro_monthly` and `pro_annual`; webhook upserts `subscriptions` on `payment.captured` or `order.paid`; `supabase/migrations/003_subscriptions.sql` and `005_payment_events.sql` exist. End-to-end payment execution was not verified. |
| Premium gating | PARTIAL | `app/chapter/[id]/page.tsx` server-redirects unauthenticated premium users to sign-in and non-Pro users to `/pricing`; `app/api/content/access/route.ts` checks active subscriptions. Authenticated runtime execution was not verified. |
| Snap Solve limits | PARTIAL | `lib/snapQuota.ts` blocks guests, allows Pro, limits free users to 5/day, fails closed on quota errors; `app/api/snap-solve/route.ts` enforces quota before solve; `supabase/migrations/004_snap_usage.sql` exists. Database execution was not verified. |

## Blockers

- External credentials required: Razorpay key ID, Razorpay key secret, Razorpay webhook secret, Supabase URL/anon key/service-role key.
- Production verification required: live checkout, live webhook delivery, subscription row creation, premium gate with real users, Snap Solve quota with migrated database.
