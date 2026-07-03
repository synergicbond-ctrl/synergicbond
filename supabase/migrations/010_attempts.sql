-- 010_attempts.sql — Attempt Layer foundation (Roadmap V2 · Week 5A).
-- Documents the AS-BUILT shape of public.attempts / public.attempt_answers,
-- which already exist in the production Supabase project (verified 2026-07-03
-- via authenticated inserts). Run in the SQL editor only on a fresh database.
--
-- attempts        — one row per attempt session (exam paper submission, test
--                   run answer, or practice answer). Extra dimensions without
--                   dedicated columns (duration, max score, per-answer topic/
--                   options/time) ride in `metadata` jsonb.
-- attempt_answers — one row per question inside a session, with a snapshot of
--                   the question. selected_answer '' means skipped (column is
--                   NOT NULL in the live schema).
-- This is the SSOT consumed by Memory Engine, Mistake Journal, Analytics,
-- Readiness Reports, and Revision. The legacy `mistakes` / `exam_results`
-- tables (AI-quiz flow) stay untouched.

create table if not exists public.attempts (
  id             uuid primary key default gen_random_uuid(),
  user_id        uuid not null references auth.users(id) on delete cascade,
  kind           text not null check (kind in ('test', 'practice')),
  title          text,
  source         text not null,
  chapter_id     text,
  exam           text not null,
  status         text not null default 'completed',
  score          numeric not null default 0,
  total          integer not null default 0,
  correct_count  integer not null default 0,
  question_count integer not null default 0,
  accuracy       numeric not null default 0,
  metadata       jsonb not null default '{}'::jsonb,
  completed_at   timestamptz,
  created_at     timestamptz not null default now()
);

create index if not exists attempts_user_idx on public.attempts(user_id, created_at desc);

alter table public.attempts enable row level security;

drop policy if exists "attempts_own" on public.attempts;
create policy "attempts_own"
  on public.attempts for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create table if not exists public.attempt_answers (
  id              uuid primary key default gen_random_uuid(),
  attempt_id      uuid not null references public.attempts(id) on delete cascade,
  user_id         uuid not null references auth.users(id) on delete cascade,
  question_order  integer not null,
  question_id     text,
  chapter_id      text,
  question_text   text not null,
  selected_answer text not null default '',
  correct_answer  text not null,
  is_correct      boolean not null,
  awarded_marks   numeric not null default 0,
  max_marks       numeric not null default 1,
  negative_marks  numeric not null default 0,
  difficulty      text,
  explanation     text,
  created_at      timestamptz not null default now()
);

create index if not exists attempt_answers_attempt_idx  on public.attempt_answers(attempt_id, question_order);
create index if not exists attempt_answers_question_idx on public.attempt_answers(user_id, question_id);

alter table public.attempt_answers enable row level security;

drop policy if exists "attempt_answers_own" on public.attempt_answers;
create policy "attempt_answers_own"
  on public.attempt_answers for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- ROLLBACK (run manually):
-- DROP TABLE IF EXISTS public.attempt_answers;
-- DROP TABLE IF EXISTS public.attempts;
