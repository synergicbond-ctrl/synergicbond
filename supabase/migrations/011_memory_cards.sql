-- 011_memory_cards.sql — Memory Engine cross-device sync (Roadmap V2 · Week 5).
-- OPTIONAL / FUTURE: the Memory Engine ships V1 with device-local (localStorage)
-- SM-2 state and needs no table to work. Provision this only when you want
-- review progress synced across devices; then swap lib/memory/store.ts to read
-- and write here (decks, SM-2 and UI are unchanged).
--
-- Run in the Supabase SQL editor when ready.

create table if not exists public.memory_cards (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid not null references auth.users(id) on delete cascade,
  card_id       text not null,             -- e.g. "formula:sf-01", "reagent:lah"
  deck          text not null,             -- formula | reagent | fact | order
  reps          integer not null default 0,
  ease          numeric not null default 2.5,
  interval_days integer not null default 0,
  due_at        timestamptz not null default now(),
  last_reviewed timestamptz not null default now(),
  unique (user_id, card_id)
);

create index if not exists memory_cards_due_idx on public.memory_cards(user_id, due_at);

alter table public.memory_cards enable row level security;

drop policy if exists "memory_cards_own" on public.memory_cards;
create policy "memory_cards_own"
  on public.memory_cards for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- ROLLBACK (run manually):
-- DROP TABLE IF EXISTS public.memory_cards;
