-- Reaction mechanism cache (public chemistry content).
-- Generated once per (slug, language, schema_version) and reused forever.

create table if not exists public.reaction_mechanisms (
  slug           text        not null,
  language       text        not null default 'english',
  schema_version integer     not null default 1,
  data           jsonb       not null,
  created_at     timestamptz not null default now(),
  primary key (slug, language, schema_version)
);

alter table public.reaction_mechanisms enable row level security;

-- Public, non-sensitive content cache: anyone may read; first visitor may seed.
drop policy if exists "reaction_mechanisms read" on public.reaction_mechanisms;
create policy "reaction_mechanisms read"
  on public.reaction_mechanisms for select using (true);

drop policy if exists "reaction_mechanisms insert" on public.reaction_mechanisms;
create policy "reaction_mechanisms insert"
  on public.reaction_mechanisms for insert with check (true);

drop policy if exists "reaction_mechanisms update" on public.reaction_mechanisms;
create policy "reaction_mechanisms update"
  on public.reaction_mechanisms for update using (true) with check (true);
