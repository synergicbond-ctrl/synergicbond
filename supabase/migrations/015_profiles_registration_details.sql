-- 015_profiles_registration_details.sql — Extend profiles with full registration fields.
--
-- ⚠️ Run manually in the Supabase SQL editor.
-- Builds on 014 (phone, class_standard, board_program) by adding the remaining
-- student-registration fields collected before payment: date of birth, how the
-- student discovered Synergic Bond, and a security question/answer pair used for
-- account recovery.

alter table public.profiles
  add column if not exists date_of_birth     date,
  add column if not exists discovery_source  text,
  add column if not exists security_question text,
  add column if not exists security_answer   text;

-- ROLLBACK (run manually):
-- ALTER TABLE public.profiles DROP COLUMN IF EXISTS date_of_birth;
-- ALTER TABLE public.profiles DROP COLUMN IF EXISTS discovery_source;
-- ALTER TABLE public.profiles DROP COLUMN IF EXISTS security_question;
-- ALTER TABLE public.profiles DROP COLUMN IF EXISTS security_answer;
