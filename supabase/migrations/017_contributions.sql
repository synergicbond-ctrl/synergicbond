-- 017_contributions.sql — Records student & supporter contributions.
-- Written/read by the service role (verify-payment and webhook routes).

create table if not exists public.contributions (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  email       text,
  message     text,
  amount      integer not null,
  payment_id  text,
  order_id    text unique not null,
  status      text not null default 'paid',
  created_at  timestamptz default now(),
  updated_at  timestamptz default now()
);

alter table public.contributions enable row level security;

-- ROLLBACK (run manually):
-- DROP TABLE IF EXISTS public.contributions;
