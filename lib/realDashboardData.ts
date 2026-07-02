import { supabase } from "@/lib/supabase";

export async function fetchRealDashboardData(userId: string) {
  const [{ data: xp, error: xpError }, { data: sessions, error: sessionsError }] =
    await Promise.all([
      supabase
        .from("user_xp")
        .select("xp, xp_level, streak, last_active")
        .eq("user_id", userId)
        .maybeSingle(),
      supabase
        .from("study_sessions")
        .select("id, chapter_id, started_at, ended_at, duration")
        .eq("user_id", userId)
        .order("started_at", { ascending: false }),
    ]);

  if (xpError || sessionsError) {
    console.error("Error fetching dashboard data:", xpError || sessionsError);
    return null;
  }

  return {
    xp: xp ?? { xp: 0, xp_level: 1, streak: 0, last_active: null },
    sessions: sessions ?? [],
  };
}
