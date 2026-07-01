-- 009_beta_usage_analytics.sql - Week 2 beta usage proof events and feedback.

create table if not exists public.beta_events (
  id           uuid primary key default gen_random_uuid(),
  user_id      uuid references auth.users(id) on delete set null,
  anonymous_id text not null,
  session_id   text not null,
  event_name   text not null,
  route        text,
  metadata     jsonb not null default '{}'::jsonb,
  created_at   timestamptz default now()
);

create index if not exists beta_events_created_at_idx on public.beta_events(created_at desc);
create index if not exists beta_events_event_name_idx on public.beta_events(event_name);
create index if not exists beta_events_user_id_idx on public.beta_events(user_id);
create index if not exists beta_events_session_id_idx on public.beta_events(session_id);

alter table public.beta_events enable row level security;

drop policy if exists "beta_events_insert_any" on public.beta_events;
create policy "beta_events_insert_any"
  on public.beta_events for insert
  with check (true);

create table if not exists public.beta_feedback (
  id                  uuid primary key default gen_random_uuid(),
  user_id             uuid references auth.users(id) on delete set null,
  anonymous_id        text not null,
  session_id          text not null,
  rating              integer not null check (rating between 1 and 5),
  most_useful_feature text,
  biggest_issue       text,
  would_recommend     boolean not null,
  trigger_reason      text,
  created_at          timestamptz default now()
);

create index if not exists beta_feedback_created_at_idx on public.beta_feedback(created_at desc);
create index if not exists beta_feedback_user_id_idx on public.beta_feedback(user_id);
create unique index if not exists beta_feedback_anonymous_id_key on public.beta_feedback(anonymous_id);

alter table public.beta_feedback enable row level security;

drop policy if exists "beta_feedback_insert_any" on public.beta_feedback;
create policy "beta_feedback_insert_any"
  on public.beta_feedback for insert
  with check (true);

-- ROLLBACK (run manually):
-- DROP TABLE IF EXISTS public.beta_feedback;
-- DROP TABLE IF EXISTS public.beta_events;
