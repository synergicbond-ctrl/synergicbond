-- 005_payment_events.sql — Razorpay webhook idempotency log.
-- Written/read ONLY by the service role (webhook). RLS stays on with no
-- policies, so anon/authenticated clients are denied by default.

create table if not exists public.payment_events (
  id         uuid primary key default gen_random_uuid(),
  event_id   text unique not null,
  payload    jsonb,
  created_at timestamptz default now()
);

alter table public.payment_events enable row level security;

-- ROLLBACK (run manually):
-- DROP TABLE IF EXISTS public.payment_events;
