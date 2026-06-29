-- 004_snap_usage.sql — per-user daily Snap & Solve counter (free-tier limit).

create table if not exists public.snap_usage (
  user_id    uuid not null references auth.users(id) on delete cascade,
  day        date not null default current_date,
  count      int  not null default 0,
  updated_at timestamptz default now(),
  primary key (user_id, day)
);

alter table public.snap_usage enable row level security;

-- Own-row policies: the signed-in user reads/writes only their own counter.
drop policy if exists "snap_usage_select_own" on public.snap_usage;
create policy "snap_usage_select_own"
  on public.snap_usage for select using (auth.uid() = user_id);

drop policy if exists "snap_usage_insert_own" on public.snap_usage;
create policy "snap_usage_insert_own"
  on public.snap_usage for insert with check (auth.uid() = user_id);

drop policy if exists "snap_usage_update_own" on public.snap_usage;
create policy "snap_usage_update_own"
  on public.snap_usage for update using (auth.uid() = user_id);
