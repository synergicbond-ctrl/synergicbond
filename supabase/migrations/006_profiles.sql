-- 006_profiles.sql — User profile row, created at signup.
-- The signup page (app/auth/signup/page.tsx) upserts here immediately after
-- supabase.auth.signUp(). Without this table the first signup fails with
-- "relation \"profiles\" does not exist".

create table if not exists public.profiles (
  id          uuid primary key references auth.users(id) on delete cascade,
  full_name   text,
  email       text,
  avatar_url  text,
  created_at  timestamptz default now(),
  updated_at  timestamptz default now()
);

alter table public.profiles enable row level security;

-- Users may read and write only their own profile row.
drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own"
  on public.profiles for select
  using (auth.uid() = id);

drop policy if exists "profiles_insert_own" on public.profiles;
create policy "profiles_insert_own"
  on public.profiles for insert
  with check (auth.uid() = id);

drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own"
  on public.profiles for update
  using (auth.uid() = id);

-- ROLLBACK (run manually):
-- DROP TABLE IF EXISTS public.profiles;
