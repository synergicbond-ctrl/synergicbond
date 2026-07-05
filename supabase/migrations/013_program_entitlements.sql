-- 013_program_entitlements.sql — granular purchased-program entitlements.
--
-- ⚠️ Run manually in the Supabase SQL editor (agent env has no service-role
-- key — same as 011/012). The app reads this table defensively and degrades
-- to "no granular entitlements" until it exists.
--
-- Model: the LIVE all-access product is the Pro subscription (subscriptions
-- table, 003) — an active Pro is treated as entitled to every program at the
-- application layer. THIS table adds per-program purchases (e.g. a single
-- board class or one entrance program) for future Razorpay wiring. Rows are
-- written ONLY by the service role (payment webhook) — never by clients — so
-- an entitlement always corresponds to a real payment or an explicit founder
-- grant. No fabricated ownership, ever.

create table if not exists public.user_program_entitlements (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users(id) on delete cascade,
  -- Program key, one of:
  --   entrance engine:  'neet' | 'jee-main' | 'jee-advanced'
  --   board class:      '<board>:<class>'  e.g. 'cbse:class-12', 'icse:class-11'
  program_key text not null,
  -- 'purchase' = paid via Razorpay · 'grant' = founder/manual grant
  source      text not null default 'purchase' check (source in ('purchase', 'grant')),
  razorpay_payment_id text,
  status      text not null default 'active' check (status in ('active', 'revoked')),
  expires_at  timestamptz,          -- null = lifetime for the program
  created_at  timestamptz default now(),
  updated_at  timestamptz default now()
);

-- One active entitlement per (user, program).
create unique index if not exists user_program_entitlements_user_program_key
  on public.user_program_entitlements(user_id, program_key);

alter table public.user_program_entitlements enable row level security;

-- Users may READ their own entitlements. Writes happen only via the service
-- role (webhook / SQL editor), so there are intentionally no insert/update
-- policies — mirroring 003_subscriptions.sql.
drop policy if exists "entitlements_select_own" on public.user_program_entitlements;
create policy "entitlements_select_own"
  on public.user_program_entitlements for select
  using (auth.uid() = user_id);

-- ROLLBACK (run manually):
-- DROP TABLE IF EXISTS public.user_program_entitlements;
