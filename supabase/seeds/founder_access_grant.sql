-- founder_access_grant.sql — OWNER / FOUNDER content-access grant (MANUAL).
-- ═══════════════════════════════════════════════════════════════════════════
-- Purpose: give the founder's OWN signed-in account full access to every paid
-- program for content development / QA — WITHOUT faking a payment and WITHOUT
-- weakening any public security.
--
-- This is NOT a schema migration and NOT auto-run. Run it by hand in the
-- Supabase SQL editor after replacing <OWNER_EMAIL> with your account email.
--
-- Safety properties (do not remove):
--   • Grants ONLY the single user matching <OWNER_EMAIL>. No one else.
--   • No RLS policy changes — writes here happen with the SQL editor's
--     service role, exactly like the Razorpay webhook. Students still cannot
--     write these tables (select-own policies unchanged).
--   • No guest access, no public bypass, Razorpay flow untouched.
--   • The grant is labelled: subscriptions.plan = 'founder' and every
--     user_program_entitlements row uses source = 'grant'. razorpay_payment_id
--     stays NULL, so it can never be mistaken for a real purchase.
--
-- Prerequisites: migrations 003 (subscriptions) and 013 (user_program_
-- entitlements) must already be applied.
-- ═══════════════════════════════════════════════════════════════════════════


-- ── 1. FIND YOUR USER ID (sanity check — should return exactly one row) ──────
select id, email, created_at
from auth.users
where email = '<OWNER_EMAIL>';


-- ── 2. GRANT: active all-access Pro (subscriptions) ─────────────────────────
-- isProActive() requires status='active' AND expires_at >= now(), so we use a
-- far-future date (effectively lifetime) rather than NULL.
insert into public.subscriptions (user_id, plan, status, expires_at, updated_at)
select u.id, 'founder', 'active', timestamptz '2999-12-31 00:00:00+00', now()
from auth.users u
where u.email = '<OWNER_EMAIL>'
on conflict (user_id) do update
  set plan       = excluded.plan,
      status     = excluded.status,
      expires_at = excluded.expires_at,
      updated_at = now();


-- ── 3. GRANT: every program entitlement, source = 'grant', lifetime ─────────
-- These 11 keys are the complete ALL_PROGRAM_KEYS set (lib/access/entitlements).
-- expires_at = NULL means lifetime for entitlements (the app treats NULL as
-- never-expiring). An active Pro above already unlocks all programs; these rows
-- make each program show explicitly (and grant-labelled) on the dashboard.
insert into public.user_program_entitlements
  (user_id, program_key, source, status, expires_at, updated_at)
select u.id, k.program_key, 'grant', 'active', null, now()
from auth.users u
cross join (values
  ('neet'), ('jee-main'), ('jee-advanced'),
  ('cbse:class-11'),         ('cbse:class-12'),
  ('icse:class-11'),         ('icse:class-12'),
  ('state-boards:class-11'), ('state-boards:class-12'),
  ('isc:class-11'),          ('isc:class-12')
) as k(program_key)
where u.email = '<OWNER_EMAIL>'
on conflict (user_id, program_key) do update
  set source     = 'grant',
      status     = 'active',
      expires_at = null,
      updated_at = now();


-- ── 4. VERIFY ───────────────────────────────────────────────────────────────
-- Pro row (expect plan='founder', status='active', far-future expiry):
select s.plan, s.status, s.expires_at, s.razorpay_payment_id
from public.subscriptions s
join auth.users u on u.id = s.user_id
where u.email = '<OWNER_EMAIL>';

-- Entitlements (expect 11 rows, all source='grant', status='active', expiry NULL):
select e.program_key, e.source, e.status, e.expires_at
from public.user_program_entitlements e
join auth.users u on u.id = e.user_id
where u.email = '<OWNER_EMAIL>'
order by e.program_key;

-- Count check (expect 11):
select count(*) as granted_programs
from public.user_program_entitlements e
join auth.users u on u.id = e.user_id
where u.email = '<OWNER_EMAIL>' and e.source = 'grant' and e.status = 'active';


-- ── 5. ROLLBACK (revoke founder access) ─────────────────────────────────────
-- Remove the granted entitlements:
delete from public.user_program_entitlements
where source = 'grant'
  and user_id = (select id from auth.users where email = '<OWNER_EMAIL>');

-- Deactivate the founder Pro row (keeps an audit trail):
update public.subscriptions
   set status = 'inactive', updated_at = now()
 where plan = 'founder'
   and user_id = (select id from auth.users where email = '<OWNER_EMAIL>');

-- ...or delete it outright instead of deactivating:
-- delete from public.subscriptions
-- where plan = 'founder'
--   and user_id = (select id from auth.users where email = '<OWNER_EMAIL>');
