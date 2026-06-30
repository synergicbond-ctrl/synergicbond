"use client";

import { useEffect, useState } from "react";

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
  { level: 10, name: "Nobel Laureate", minXP: 32000, maxXP: 999999, color: "#FFD700" },
];

const ALL_BADGES = [
  { id: "first_quiz", name: "Quiz Starter", icon: "🧪", description: "Complete your first quiz" },
  { id: "mole_master", name: "Mole Master", icon: "⚗️", description: "Score 100% on Mole Concept" },
  { id: "organic_genius", name: "Organic Genius", icon: "🔬", description: "Complete 10 Organic Chemistry quizzes" },
  { id: "periodic_pro", name: "Periodic Pro", icon: "🧲", description: "Master Periodic Table chapter" },
  { id: "streak_3", name: "3-Day Streak", icon: "🔥", description: "Study 3 days in a row" },
  { id: "streak_7", name: "Week Warrior", icon: "🗓️", description: "Study 7 days in a row" },
  { id: "streak_30", name: "Month Master", icon: "🏅", description: "Study 30 days in a row" },
  { id: "xp_500", name: "XP Hunter", icon: "⭐", description: "Earn 500 XP total" },
  { id: "xp_1000", name: "XP Legend", icon: "🌟", description: "Earn 1000 XP total" },
  { id: "notes_master", name: "Note Taker", icon: "📘", description: "Generate 10 AI notes" },
  { id: "snap_solver", name: "Snap Solver", icon: "📸", description: "Solve 5 problems with Snap & Solve" },
  { id: "olympiad_ready", name: "Olympiad Ready", icon: "🏆", description: "Complete an IChO level quiz" },
  { id: "multilingual", name: "Multilingual", icon: "🌍", description: "Use Hindi or Hinglish mode" },
  { id: "jee_warrior", name: "JEE Warrior", icon: "⚡", description: "Complete 5 JEE Advanced quizzes" },
  { id: "top_10", name: "Top 10", icon: "🥇", description: "Reach top 10 on leaderboard" },
];

type XpData = {
  xp?: number;
  streak?: number;
};

type EarnedBadge = {
  id: string;
};

export default function AchievementsPage() {
  const [xpData, setXpData] = useState<XpData | null>(null);
  const [earned, setEarned] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const [xpRes, badgeRes] = await Promise.all([
          fetch("/api/xp"),
          fetch("/api/badges"),
        ]);
        const xp = await xpRes.json();
        const badges = await badgeRes.json();
        setXpData(xp);
        setEarned((badges.earned as EarnedBadge[] | undefined)?.map((b) => b.id) || []);
      } catch {}
      setLoading(false);
    }
    load();
  }, []);

  const xp = xpData?.xp || 0;
  const streak = xpData?.streak || 0;
  const currentLevel = LEVELS.find(l => xp >= l.minXP && xp <= l.maxXP) || LEVELS[0];
  const nextLevel = LEVELS[currentLevel.level] || currentLevel;
  const progress = currentLevel.maxXP < 999999
    ? Math.round(((xp - currentLevel.minXP) / (currentLevel.maxXP - currentLevel.minXP)) * 100)
    : 100;

  const HOW_TO_EARN = [
    { action: "Complete a Quiz", xp: "+20 XP" },
    { action: "Perfect Quiz Score", xp: "+50 XP" },
    { action: "Daily Challenge", xp: "+50 XP" },
    { action: "Generate Notes", xp: "+10 XP" },
    { action: "AI Tutor Session", xp: "+8 XP" },
    { action: "Daily Login Streak", xp: "+15 XP/day" },
    { action: "Snap & Solve", xp: "+15 XP" },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight">🎮 Achievements</h1>
          <p className="mt-2 text-white/60">Your chemistry journey — XP, levels, badges and streaks</p>
        </div>

        {loading ? (
          <div className="text-center py-20 text-white/40 animate-pulse">Loading your achievements...</div>
        ) : (
          <div className="space-y-8">
            {/* XP Card */}
            <div className="rounded-2xl border p-6" style={{ borderColor: currentLevel.color + "40", background: currentLevel.color + "10" }}>
              <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
                <div>
                  <p className="text-white/50 text-sm">Current Level</p>
                  <p className="text-4xl font-black" style={{ color: currentLevel.color }}>{currentLevel.name}</p>
                  <p className="text-white/40 text-sm">Level {currentLevel.level} of 10</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold">{xp.toLocaleString()} XP</p>
                  <p className="text-white/50 text-sm mt-1">🔥 {streak} day streak</p>
                </div>
              </div>
              {/* Progress bar */}
              <div className="mb-2 flex justify-between text-xs text-white/40">
                <span>{currentLevel.minXP} XP</span>
                <span>{progress}% to {nextLevel.name}</span>
                <span>{currentLevel.maxXP < 999999 ? currentLevel.maxXP : "∞"} XP</span>
              </div>
              <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${progress}%`, background: currentLevel.color }} />
              </div>
            </div>

            {/* Level roadmap */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="font-bold text-lg mb-4">🗺️ Level Roadmap</h3>
              <div className="grid gap-2 sm:grid-cols-2">
                {LEVELS.map((l) => (
                  <div key={l.level}
                    className={`flex items-center gap-3 rounded-xl p-3 ${xp >= l.minXP ? "bg-white/10" : "bg-white/[0.02] opacity-40"}`}>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{ background: l.color + "30", color: l.color }}>
                      {l.level}
                    </div>
                    <div>
                      <p className="font-semibold" style={{ color: xp >= l.minXP ? l.color : "white" }}>{l.name}</p>
                      <p className="text-xs text-white/40">{l.minXP.toLocaleString()} XP</p>
                    </div>
                    {xp >= l.minXP && <span className="ml-auto text-green-400 text-sm">✓</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* Badges */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="font-bold text-lg mb-4">🏅 Badges ({earned.length}/{ALL_BADGES.length} earned)</h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {ALL_BADGES.map((badge) => {
                  const isEarned = earned.includes(badge.id);
                  return (
                    <div key={badge.id}
                      className={`rounded-xl p-4 border transition ${isEarned ? "border-violet-500/30 bg-violet-950/20" : "border-white/5 bg-white/[0.02] opacity-40"}`}>
                      <div className="text-3xl mb-2">{badge.icon}</div>
                      <p className="font-semibold text-sm">{badge.name}</p>
                      <p className="text-xs text-white/50 mt-0.5">{badge.description}</p>
                      {isEarned && <p className="text-xs text-violet-400 mt-1">✓ Earned</p>}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* How to earn XP */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="font-bold text-lg mb-4">💡 How to Earn XP</h3>
              <div className="space-y-2">
                {HOW_TO_EARN.map(({ action, xp: x }) => (
                  <div key={action} className="flex justify-between items-center rounded-xl bg-white/5 px-4 py-2">
                    <span className="text-white/80 text-sm">{action}</span>
                    <span className="text-cyan-400 font-bold text-sm">{x}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
