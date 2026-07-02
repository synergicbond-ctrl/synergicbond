-- 007_progress_runtime_tables.sql — tables/columns used by dashboard, coach,
-- quiz/exam result saving, mistake tracking, and Control Center runtime paths.

alter table public.profiles add column if not exists exam_target text;

alter table public.study_sessions add column if not exists minutes integer;
alter table public.study_sessions add column if not exists created_at timestamptz default now();

create table if not exists public.exam_results (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references auth.users(id) on delete cascade,
  exam_name  text,
  score      numeric not null default 0,
  total      numeric not null default 0,
  created_at timestamptz default now()
);

alter table public.exam_results enable row level security;

drop policy if exists "exam_results_own" on public.exam_results;
create policy "exam_results_own"
  on public.exam_results for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create table if not exists public.mistakes (
  id              uuid primary key default gen_random_uuid(),
  user_id         uuid not null references auth.users(id) on delete cascade,
  chapter_id      text,
  question        text,
  selected_answer text,
  correct_answer  text,
  created_at      timestamptz default now()
);

alter table public.mistakes enable row level security;

drop policy if exists "mistakes_own" on public.mistakes;
create policy "mistakes_own"
  on public.mistakes for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create table if not exists public.saved_chapters (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references auth.users(id) on delete cascade,
  chapter_id text not null,
  created_at timestamptz default now()
);

create unique index if not exists saved_chapters_user_chapter_key
  on public.saved_chapters(user_id, chapter_id);

alter table public.saved_chapters enable row level security;

drop policy if exists "saved_chapters_own" on public.saved_chapters;
create policy "saved_chapters_own"
  on public.saved_chapters for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- ROLLBACK (run manually):
-- ALTER TABLE public.profiles DROP COLUMN IF EXISTS exam_target;
-- ALTER TABLE public.study_sessions DROP COLUMN IF EXISTS minutes;
-- ALTER TABLE public.study_sessions DROP COLUMN IF EXISTS created_at;
-- DROP TABLE IF EXISTS public.saved_chapters;
-- DROP TABLE IF EXISTS public.mistakes;
-- DROP TABLE IF EXISTS public.exam_results;
