# SUBSCRIPTION_LIVE_VERIFICATION

| Check | Status | Evidence | Blocker |
| --- | --- | --- | --- |
| Payment/order maps to user | PASS | `app/api/payment/create-order/route.ts` sends Razorpay `notes: { user_id: user.id, plan }`; webhook reads notes from payment/order payload. | None |
| Subscription row created or updated | NOT TESTED | Webhook code upserts `public.subscriptions`, but production DB rows are not accessible locally. | Requires production Supabase query |
| Plan/status/expiry correct | NOT TESTED | Code writes `plan`, `status: "active"`, and `expires_at = now + PLANS[plan].days`; live row is not accessible locally. | Requires production Supabase query for paid user |
| Supabase table schema matches code | PASS | `003_subscriptions.sql` creates/adds `plan`, `status`, `expires_at`, `razorpay_payment_id`, `updated_at`, and unique index on `user_id`. | None |
| Missing columns/errors | NOT TESTED | No production logs or schema introspection available locally. | Requires Supabase production schema/log access |

Manual SQL required:

```sql
select user_id, plan, status, expires_at, razorpay_payment_id, updated_at
from public.subscriptions
order by updated_at desc
limit 10;
```

Expected live paid row:
- `plan = pro_monthly`
- `status = active`
- `expires_at > now()`
- `razorpay_payment_id` equals the captured payment id

