# WEBHOOK_LIVE_VERIFICATION

| Check | Status | Evidence | Blocker |
| --- | --- | --- | --- |
| Razorpay webhook route exists | PASS | `app/api/payment/webhook/route.ts` exports `POST`; build route is `/api/payment/webhook`. | None |
| Expected production webhook URL | PARTIAL | `.env.example` sets `NEXT_PUBLIC_SITE_URL=https://synergicbond.vercel.app`; expected URL is `https://synergicbond.vercel.app/api/payment/webhook`. | Razorpay dashboard webhook URL not visible locally |
| Required Razorpay events | PASS | Webhook processes `payment.captured` and `order.paid` in `app/api/payment/webhook/route.ts`. | None |
| Signature validation | PASS | Route reads `x-razorpay-signature`, computes HMAC-SHA256 over raw body using `RAZORPAY_WEBHOOK_SECRET`, and rejects invalid signatures. | None |
| Idempotency | PASS | Route checks and inserts `public.payment_events.event_id`; migration `005_payment_events.sql` defines `event_id text unique not null`. | None |
| Latest live payment event received | NOT TESTED | No production Razorpay delivery log, Vercel function log, or Supabase production row is available in this workspace. | Requires Razorpay dashboard, Vercel logs, or production Supabase query |

Manual evidence required:

```sql
select event_id, payload->>'event' as event_type, created_at
from public.payment_events
order by created_at desc
limit 10;
```

Required dashboard checks:
- Razorpay webhook URL equals `https://synergicbond.vercel.app/api/payment/webhook`.
- Events include `payment.captured` or `order.paid`.
- Latest live payment delivery has HTTP 200.

