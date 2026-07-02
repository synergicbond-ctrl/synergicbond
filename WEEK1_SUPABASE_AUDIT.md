# WEEK 1 SUPABASE AUDIT

## Status

PARTIAL

## Repository Evidence

| Requirement | Status | Evidence |
| --- | --- | --- |
| Profiles/users table | PASS | `supabase/migrations/006_profiles.sql` creates `profiles`, references `auth.users(id)`, enables RLS, and adds own-row select/insert/update policies. |
| Subscriptions table | PASS | `supabase/migrations/003_subscriptions.sql` creates `subscriptions`, adds `plan`, `status`, `expires_at`, `razorpay_payment_id`, unique `user_id`, enables RLS, and only allows own-row select. |
| Payment/webhook event table | PASS | `supabase/migrations/005_payment_events.sql` creates `payment_events` with unique `event_id`, enables RLS, and intentionally exposes no client policies. |
| Snap Solve usage table | PASS | `supabase/migrations/004_snap_usage.sql` creates `snap_usage`, primary key `(user_id, day)`, and own-row select/insert/update RLS policies. |
| Runtime progress tables | PASS | `supabase/migrations/001_progress_tracking.sql` and `007_progress_runtime_tables.sql` create/update `study_sessions`, `user_xp`, `exam_results`, `mistakes`, and `saved_chapters` with RLS. |
| Service role usage server-only | PASS | `SUPABASE_SERVICE_ROLE_KEY` appears only in `lib/supabase/admin.ts`; `createAdminClient()` is imported only by `app/api/payment/webhook/route.ts`. |
| Production DB applied | NOT TESTED | No Supabase dashboard/API credentials available in repository. |

## Required Manual Verification

Run in Supabase SQL editor or CLI against production:

```sql
select table_name
from information_schema.tables
where table_schema = 'public'
  and table_name in ('profiles','subscriptions','payment_events','snap_usage','study_sessions','user_xp','exam_results','mistakes','saved_chapters');

select tablename, policyname, cmd, qual, with_check
from pg_policies
where schemaname = 'public'
  and tablename in ('profiles','subscriptions','payment_events','snap_usage','study_sessions','user_xp','exam_results','mistakes','saved_chapters')
order by tablename, policyname;
```

## Blockers

- Production Supabase credentials/dashboard access required to mark production DB readiness PASS.
