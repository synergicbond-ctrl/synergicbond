-- 014_profiles_student_details.sql — Add student detail columns to profiles.
--
-- ⚠️ Run manually in the Supabase SQL editor.
-- Adds phone, class_standard, and board_program columns to the existing
-- profiles table so student details can be collected before payment.

alter table public.profiles
  add column if not exists phone          text,
  add column if not exists class_standard text,
  add column if not exists board_program  text;

-- ROLLBACK (run manually):
-- ALTER TABLE public.profiles DROP COLUMN IF EXISTS phone;
-- ALTER TABLE public.profiles DROP COLUMN IF EXISTS class_standard;
-- ALTER TABLE public.profiles DROP COLUMN IF EXISTS board_program;
