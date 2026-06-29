-- 003_subscriptions.sql — Pro subscription state (idempotent; tolerant of a
-- pre-existing `subscriptions` table referenced by /api/content/access).

create table if not exists public.subscriptions (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users(id) on delete cascade,
  plan        text,
  status      text not null default 'inactive',
  expires_at  timestamptz,
  razorpay_payment_id text,
  created_at  timestamptz default now(),
  updated_at  timestamptz default now()
);

-- Defensive column adds (in case the table already exists with a leaner shape).
alter table public.subscriptions add column if not exists plan text;
alter table public.subscriptions add column if not exists status text default 'inactive';
alter table public.subscriptions add column if not exists expires_at timestamptz;
alter table public.subscriptions add column if not exists razorpay_payment_id text;
alter table public.subscriptions add column if not exists updated_at timestamptz default now();

-- One subscription row per user (upsert target for the webhook).
create unique index if not exists subscriptions_user_id_key on public.subscriptions(user_id);

alter table public.subscriptions enable row level security;

-- Users may READ their own subscription. Writes happen only via the service
-- role (Razorpay webhook), so there are intentionally no insert/update policies.
drop policy if exists "subscriptions_select_own" on public.subscriptions;
create policy "subscriptions_select_own"
  on public.subscriptions for select
  using (auth.uid() = user_id);
