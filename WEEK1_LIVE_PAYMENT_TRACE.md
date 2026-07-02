# WEEK1_LIVE_PAYMENT_TRACE

| Step | Status | Evidence | Blocker | Next Action |
| --- | --- | --- | --- | --- |
| Payment captured | PARTIAL | User reported live INR 149 payment captured. Local code creates INR order in `app/api/payment/create-order/route.ts`. | No Razorpay payment id or dashboard evidence in workspace. | Verify captured payment in Razorpay Dashboard. |
| Webhook URL reachable | PASS | `curl -i -X POST https://synergicbond.vercel.app/api/payment/webhook` returned `x-matched-path: /api/payment/webhook`. | None. | None. |
| Webhook secret configured | FAIL | Same production POST returned HTTP 503. Route returns 503 before signature check only when `RAZORPAY_WEBHOOK_SECRET` is missing. | Vercel production env access required. | Add `RAZORPAY_WEBHOOK_SECRET` to Vercel Production env and redeploy. |
| Signature verified | NOT TESTED | Code verifies HMAC over raw body in `app/api/payment/webhook/route.ts`. Production secret missing blocks live verification. | Razorpay/Vercel logs required after env fix. | Retry Razorpay webhook delivery. |
| Event processed | NOT TESTED | Code inserts into `public.payment_events`; migration `005_payment_events.sql` exists. | Supabase production DB access required. | Query `payment_events`. |
| Subscription updated | NOT TESTED | Code upserts `public.subscriptions` for `payment.captured` / `order.paid`. | Supabase production DB access required. | Query `subscriptions`. |
| Premium unlocked | NOT TESTED | Premium logic reads active unexpired row from `subscriptions`. | Paid-user runtime check required. | Log in as paid user after subscription row exists. |

Route files:
- `app/api/payment/create-order/route.ts`
- `app/api/payment/verify-payment/route.ts`
- `app/api/payment/webhook/route.ts`
- `lib/subscription.ts`
- `lib/snapQuota.ts`

Webhook URL:

```text
https://synergicbond.vercel.app/api/payment/webhook
```

Required Razorpay events:

```text
payment.captured
order.paid
```

DB tables touched:
- `public.payment_events`
- `public.subscriptions`

Exact SQL to verify:

```sql
select event_id, payload->>'event' as event_type, created_at
from public.payment_events
order by created_at desc
limit 10;

select user_id, plan, status, expires_at, razorpay_payment_id, updated_at
from public.subscriptions
order by updated_at desc
limit 10;
```

Exact logs to inspect:
- Vercel function logs for `/api/payment/webhook`
- Razorpay Dashboard webhook delivery logs for latest INR 149 payment
- Supabase production rows in `payment_events` and `subscriptions`

