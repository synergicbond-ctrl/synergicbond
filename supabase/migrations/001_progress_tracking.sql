-- Run this in your Supabase SQL editor to enable progress tracking

-- Ensure study_sessions exists before ALTER TABLE — required for a fresh-DB
-- run. The table was previously assumed to pre-exist from an undocumented step.
CREATE TABLE IF NOT EXISTS public.study_sessions (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id    UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  chapter_id TEXT,
  started_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  ended_at   TIMESTAMPTZ,
  duration   INTEGER
);

ALTER TABLE public.study_sessions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "study_sessions_own" ON public.study_sessions;
CREATE POLICY "study_sessions_own"
  ON public.study_sessions FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Add chapter_id to study_sessions (if column doesn't exist)
ALTER TABLE public.study_sessions
  ADD COLUMN IF NOT EXISTS chapter_id TEXT;

-- XP and gamification table
CREATE TABLE IF NOT EXISTS user_xp (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id     UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  xp          INTEGER DEFAULT 0 NOT NULL,
  xp_level    INTEGER DEFAULT 1 NOT NULL,
  streak      INTEGER DEFAULT 0 NOT NULL,
  last_active DATE,
  created_at  TIMESTAMPTZ DEFAULT now()
);

-- Row-level security
ALTER TABLE user_xp ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own XP"
  ON user_xp FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own XP"
  ON user_xp FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own XP"
  ON user_xp FOR UPDATE
  USING (auth.uid() = user_id);

-- Enable Google OAuth: go to Supabase dashboard → Authentication → Providers → Google
-- Set your Google OAuth Client ID and Secret from console.cloud.google.com
-- Add authorized redirect URI: https://<your-project>.supabase.co/auth/v1/callback

-- ROLLBACK (run manually; Supabase migrations have no automatic DOWN):
-- DROP TABLE IF EXISTS public.user_xp;
-- DROP TABLE IF EXISTS public.study_sessions;
