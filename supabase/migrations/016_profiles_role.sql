-- 016_profiles_role.sql — Role-based access control on profiles.
--
-- Adds a `role` column to public.profiles that is the SINGLE SOURCE OF TRUTH for
-- privileged access (see lib/auth/access.ts). Replaces the temporary email-based
-- founder bypass. Roles: owner | admin | mentor | student (default student).
--
-- SECURITY: profiles already has a "profiles_update_own" RLS policy that lets a
-- user update their own row. Without protection a student could self-escalate to
-- role='owner'. The BEFORE UPDATE trigger below pins `role` to its old value for
-- any non-service-role writer, so role can ONLY be changed with the service-role
-- key (Supabase SQL editor / admin tooling), never from the app.
--
-- RUN MANUALLY in the Supabase SQL editor (this environment has no service-role
-- key). Idempotent — safe to re-run.

-- 1) Column + allowed values -------------------------------------------------
alter table public.profiles
  add column if not exists role text not null default 'student';

do $$
begin
  if not exists (
    select 1 from pg_constraint where conname = 'profiles_role_check'
  ) then
    alter table public.profiles
      add constraint profiles_role_check
      check (role in ('owner', 'admin', 'mentor', 'student'));
  end if;
end$$;

-- 2) Anti-escalation trigger -------------------------------------------------
-- Preserve the existing role on UPDATE unless the writer is the service role.
create or replace function public.prevent_role_self_escalation()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.role is distinct from old.role
     and coalesce(auth.role(), '') <> 'service_role' then
    new.role := old.role;
  end if;
  return new;
end;
$$;

drop trigger if exists profiles_prevent_role_escalation on public.profiles;
create trigger profiles_prevent_role_escalation
  before update on public.profiles
  for each row
  execute function public.prevent_role_self_escalation();

-- 3) Seed the owner account --------------------------------------------------
-- One-time data seed (not app logic). Change the email here if the owner
-- account differs. Runs as service role in the SQL editor, so it is allowed.
update public.profiles
  set role = 'owner'
  where lower(email) = 'synergicbond@gmail.com';

-- ROLLBACK (run manually):
-- drop trigger if exists profiles_prevent_role_escalation on public.profiles;
-- drop function if exists public.prevent_role_self_escalation();
-- alter table public.profiles drop constraint if exists profiles_role_check;
-- alter table public.profiles drop column if exists role;
