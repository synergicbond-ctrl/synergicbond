-- 012_revision_items.sql — One-Tap Revision cross-device sync (Roadmap V2 · Week 7).
-- OPTIONAL / FUTURE: One-Tap Revision ships V1 with device-local (localStorage)
-- items and needs no table to work. Provision this only when you want the saved
-- list synced across devices; then swap lib/revision/store.ts to read/write here
-- (the AddToRevision button and SavedRevisionList are unchanged).
--
-- Run in the Supabase SQL editor when ready.

create table if not exists public.revision_items (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references auth.users(id) on delete cascade,
  item_id    text not null,            -- source-unique, e.g. "pyq:jm-as-001"
  type       text not null,            -- pyq | note | test | ai | formula | reaction | fact
  title      text not null,
  subtitle   text,
  href       text not null,
  added_at   timestamptz not null default now(),
  unique (user_id, item_id)
);

create index if not exists revision_items_user_idx on public.revision_items(user_id, added_at desc);

alter table public.revision_items enable row level security;

drop policy if exists "revision_items_own" on public.revision_items;
create policy "revision_items_own"
  on public.revision_items for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- ROLLBACK (run manually):
-- DROP TABLE IF EXISTS public.revision_items;
