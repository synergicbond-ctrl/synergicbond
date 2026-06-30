# PAYMENT E2E TEST PLAN

## Preconditions

- Production or test Vercel deployment URL: `https://<domain>`.
- Supabase migrations applied.
- Vercel env vars set from `.env.example`.
- Razorpay webhook registered: `https://<domain>/api/payment/webhook`.

## Test Checklist

| Test | Status | Procedure | Expected Evidence |
| --- | --- | --- | --- |
| New signup | NOT TESTED | Open `https://<domain>/auth/signup`; create new user. | Supabase `auth.users` row and `profiles` row for the same user ID. Screenshot of logged-in state. |
| Free user limit | NOT TESTED | Call Snap Solve 5 times as free user, then a 6th time. | First 5 allowed; 6th returns 402; `snap_usage.count = 5`. |
| Checkout open | NOT TESTED | Open `/pricing`, select monthly/annual, click Upgrade. | Razorpay modal opens with expected amount and currency. Screenshot required. |
| Razorpay order creation | NOT TESTED | In browser devtools/network, inspect `POST /api/payment/create-order`. | `200` JSON with `orderId`, server logs with no Razorpay error. Razorpay dashboard order exists. |
| Successful payment | NOT TESTED | Complete Razorpay test/live payment. | Razorpay payment captured; checkout success handler fires; webhook delivery appears in Razorpay dashboard. |
| Webhook received | NOT TESTED | Inspect Razorpay webhook dashboard and server logs. | `POST /api/payment/webhook` returns 200; no HMAC error. |
| Subscription row | NOT TESTED | Query Supabase after captured payment. | `subscriptions.user_id`, `plan`, `status='active'`, future `expires_at`, `razorpay_payment_id`. |
| Premium unlock | NOT TESTED | Visit a paid `/chapter/<id>` as the paid user. | Page content visible; no `/pricing` redirect. Screenshot required. |
| Failed payment | NOT TESTED | Trigger failed Razorpay payment/test card. | No active subscription created; `payment_events` row recorded if signed webhook delivered. |
| Cancelled payment | NOT TESTED | Open Checkout and dismiss modal. | UI returns to non-processing state; no active subscription created. |
| Renewal event | NOT TESTED | Deliver a verified renewal/subscription event if Razorpay subscription product exists. | Expected behavior must be defined before PASS; current code has no Razorpay subscription IDs. |
| Replayed webhook | NOT TESTED | Resend the exact same signed webhook event from Razorpay dashboard. | Second response returns `{ ok: true, duplicate: true }`; no duplicate `payment_events` row. |
| Fake webhook signature | NOT TESTED | Run command below with invalid signature. | HTTP 400 and no DB writes. |

## Exact Commands

Invalid signature smoke test:

```bash
curl -i -X POST https://<domain>/api/payment/webhook \
  -H 'Content-Type: application/json' \
  -H 'x-razorpay-signature: bad-signature' \
  --data '{"id":"evt_fake","event":"payment.captured","payload":{}}'
```

Supabase row checks:

```sql
select * from public.payment_events order by created_at desc limit 5;
select * from public.subscriptions where user_id = '<paid-user-id>';
select * from public.snap_usage where user_id = '<free-user-id>' order by day desc;
```

Production route checks:

```bash
curl -I https://<domain>/
curl -I https://<domain>/pricing
curl -I https://<domain>/api/payment/create-order
```

## Evidence Required For Week 1 PASS

- Screenshots: signup, checkout, payment success, premium unlock.
- Razorpay dashboard: order, payment, webhook delivery.
- Supabase SQL screenshots/results: `profiles`, `payment_events`, `subscriptions`, `snap_usage`.
- Server logs: create-order success, webhook success, duplicate replay response.
