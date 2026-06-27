-- Run this in your Supabase SQL editor to enable progress tracking

-- Add chapter_id to study_sessions (if column doesn't exist)
ALTER TABLE study_sessions
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
