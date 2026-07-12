export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

const BADGES = [
  { id: "first_quiz", name: "Quiz Starter", icon: "🧪", description: "Complete your first quiz", xpRequired: 0, condition: "quiz_count >= 1" },
  { id: "mole_master", name: "Mole Master", icon: "⚗️", description: "Score 100% on Mole Concept", xpRequired: 100, condition: "topic_perfect:mole-concept" },
  { id: "organic_genius", name: "Organic Genius", icon: "🔬", description: "Complete 10 Organic Chemistry quizzes", xpRequired: 200, condition: "quiz_count >= 10" },
  { id: "periodic_pro", name: "Periodic Pro", icon: "🧲", description: "Master Periodic Table chapter", xpRequired: 150, condition: "topic_perfect:periodic-table" },
  { id: "streak_3", name: "3-Day Streak", icon: "🔥", description: "Study 3 days in a row", xpRequired: 0, condition: "streak >= 3" },
  { id: "streak_7", name: "Week Warrior", icon: "🗓️", description: "Study 7 days in a row", xpRequired: 0, condition: "streak >= 7" },
  { id: "streak_30", name: "Month Master", icon: "🏅", description: "Study 30 days in a row", xpRequired: 0, condition: "streak >= 30" },
  { id: "xp_500", name: "XP Hunter", icon: "⭐", description: "Earn 500 XP total", xpRequired: 500, condition: "xp >= 500" },
  { id: "xp_1000", name: "XP Legend", icon: "🌟", description: "Earn 1000 XP total", xpRequired: 1000, condition: "xp >= 1000" },
  { id: "notes_master", name: "Note Taker", icon: "📘", description: "Generate 10 AI notes", xpRequired: 50, condition: "notes_count >= 10" },
  { id: "snap_solver", name: "Snap Solver", icon: "📸", description: "Solve 5 problems with Snap & Solve", xpRequired: 0, condition: "snap_count >= 5" },
  { id: "olympiad_ready", name: "Olympiad Ready", icon: "🏆", description: "Complete an IChO level quiz", xpRequired: 300, condition: "icho_quiz >= 1" },
  { id: "multilingual", name: "Multilingual", icon: "🌍", description: "Use Hindi or Hinglish mode", xpRequired: 0, condition: "used_hindi >= 1" },
  { id: "jee_warrior", name: "JEE Warrior", icon: "⚡", description: "Complete 5 JEE Advanced quizzes", xpRequired: 250, condition: "jee_advanced_count >= 5" },
  { id: "top_10", name: "Top 10", icon: "🥇", description: "Reach top 10 on leaderboard", xpRequired: 500, condition: "rank <= 10" },
];

const LEVELS = [
  { level: 1, name: "Atom", minXP: 0, maxXP: 99, color: "#6B7280" },
  { level: 2, name: "Ion", minXP: 100, maxXP: 249, color: "#3B82F6" },
  { level: 3, name: "Molecule", minXP: 250, maxXP: 499, color: "#10B981" },
  { level: 4, name: "Compound", minXP: 500, maxXP: 999, color: "#F59E0B" },
  { level: 5, name: "Element", minXP: 1000, maxXP: 1999, color: "#EF4444" },
  { level: 6, name: "Reaction", minXP: 2000, maxXP: 3999, color: "#8B5CF6" },
  { level: 7, name: "Catalyst", minXP: 4000, maxXP: 7999, color: "#EC4899" },
  { level: 8, name: "Chemist", minXP: 8000, maxXP: 15999, color: "#F97316" },
  { level: 9, name: "Professor", minXP: 16000, maxXP: 31999, color: "#06B6D4" },
  { level: 10, name: "Nobel Laureate", minXP: 32000, maxXP: Infinity, color: "#FFD700" },
];

function getLevelInfo(xp: number) {
  return LEVELS.find(l => xp >= l.minXP && xp <= l.maxXP) || LEVELS[0];
}

function getEarnedBadges(xp: number, streak: number) {
  const earned: typeof BADGES = [];
  if (xp >= 0) earned.push(BADGES[0]); // first_quiz always
  if (streak >= 3) earned.push(BADGES.find(b => b.id === "streak_3")!);
  if (streak >= 7) earned.push(BADGES.find(b => b.id === "streak_7")!);
  if (streak >= 30) earned.push(BADGES.find(b => b.id === "streak_30")!);
  if (xp >= 500) earned.push(BADGES.find(b => b.id === "xp_500")!);
  if (xp >= 1000) earned.push(BADGES.find(b => b.id === "xp_1000")!);
  return earned.filter(Boolean);
}

export async function GET() {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ badges: BADGES, earned: [], levels: LEVELS });
    }

    const { data: xpData } = await supabase
      .from("user_xp").select("xp, streak").eq("user_id", user.id).single();

    const xp = xpData?.xp || 0;
    const streak = xpData?.streak || 0;
    const levelInfo = getLevelInfo(xp);
    const earned = getEarnedBadges(xp, streak);

    return NextResponse.json({ badges: BADGES, earned, levels: LEVELS, currentLevel: levelInfo, xp, streak });
  } catch {
    return NextResponse.json({ badges: BADGES, earned: [], levels: LEVELS });
  }
}
