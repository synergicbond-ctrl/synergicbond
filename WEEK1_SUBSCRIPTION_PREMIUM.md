# WEEK1_SUBSCRIPTION_PREMIUM

| Check | Status | Evidence | Blocker | Next Action |
| --- | --- | --- | --- | --- |
| Payment maps to correct user | PARTIAL | Create order writes `notes: { user_id: user.id, plan }`; webhook reads payment/order notes. | Live webhook blocked by missing production secret. | Fix Vercel `RAZORPAY_WEBHOOK_SECRET`, retry delivery. |
| `subscriptions` table exists in repo migrations | PASS | `003_subscriptions.sql` creates `public.subscriptions`. | Production DB not introspected. | Verify migration applied in Supabase. |
| Required columns exist in repo migrations | PASS | Migration defines/adds `user_id`, `plan`, `status`, `expires_at`, `razorpay_payment_id`, `updated_at`. | Production DB not introspected. | Run schema query in Supabase. |
| Active status saved | NOT TESTED | Webhook code writes `status: "active"`. | Production webhook currently returns 503 before processing. | Retry after env fix. |
| Expiry/plan correct | NOT TESTED | Webhook computes expiry from `PLANS[plan].days`; live row unavailable. | Supabase production DB access required. | Query paid user's subscription row. |
| Premium logic reads same source | PASS | `isProActive` reads `subscriptions.status` and `subscriptions.expires_at`; chapter gate and Snap quota use it. | None. | None. |
| Premium persists after refresh/logout/login | NOT TESTED | Persistence depends on durable `subscriptions` row. | Live row/user session not available locally. | Browser test as paid user after webhook succeeds. |

Schema verification SQL:

```sql
select column_name, data_type
from information_schema.columns
where table_schema = 'public'
  and table_name = 'subscriptions'
order by ordinal_position;
```

Paid-user verification SQL:

```sql
select user_id, plan, status, expires_at, razorpay_payment_id, updated_at
from public.subscriptions
where status = 'active'
order by updated_at desc
limit 10;
```

