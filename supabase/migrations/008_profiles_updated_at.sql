-- 008_profiles_updated_at.sql - Repair production profiles created before
-- 006_profiles.sql included updated_at.

alter table public.profiles
add column if not exists updated_at timestamptz;

update public.profiles
set updated_at = now()
where updated_at is null;

alter table public.profiles
alter column updated_at set default now();

notify pgrst, 'reload schema';

-- ROLLBACK (run manually):
-- ALTER TABLE public.profiles DROP COLUMN IF EXISTS updated_at;
