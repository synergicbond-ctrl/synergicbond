"use client";

import { useEffect, useState } from "react";

type LeaderboardEntry = {
  rank: number;
  userId: string;
  name: string;
  examTarget: string;
  xp: number;
  level: number;
  streak: number;
  isCurrentUser: boolean;
};

const LEVEL_TITLES: Record<number, string> = {
  1: "Atom", 2: "Molecule", 3: "Compound", 4: "Reaction",
  5: "Catalyst", 6: "Equilibrium", 7: "Orbital", 8: "Quantum",
  9: "Nucleus", 10: "Element",
};

function getLevelTitle(level: number): string {
  return LEVEL_TITLES[Math.min(level, 10)] || "Grandmaster";
}

function getRankBadge(rank: number) {
  if (rank === 1) return "🥇";
  if (rank === 2) return "🥈";
  if (rank === 3) return "🥉";
  return `#${rank}`;
}

export default function LeaderboardPage() {
  const [data, setData] = useState<LeaderboardEntry[]>([]);
  const [currentUserRank, setCurrentUserRank] = useState<LeaderboardEntry | null>(null);
  const [scope, setScope] = useState<"global" | "weekly">("global");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetch(`/api/leaderboard?scope=${scope}&limit=50`)
      .then((r) => r.json())
      .then((d) => {
        if (cancelled) return;
        setData(d.leaderboard || []);
        setCurrentUserRank(d.currentUserRank || null);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [scope]);

  return (
    <main className="min-h-screen bg-black text-white p-6 max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Leaderboard</h1>
        <p className="text-zinc-400">Top students ranked by XP earned through quizzes, exams, and daily study.</p>
      </div>

      {/* Scope Toggle */}
      <div className="flex gap-2 mb-6">
        {(["global", "weekly"] as const).map((s) => (
          <button
            key={s}
            onClick={() => {
              setLoading(true);
              setScope(s);
            }}
            className={`px-5 py-2 rounded-xl text-sm font-medium border capitalize transition ${
              scope === s
                ? "bg-cyan-500 border-cyan-500 text-black"
                : "border-zinc-700 text-zinc-400 hover:border-zinc-500"
            }`}
          >
            {s === "global" ? "All Time" : "This Week"}
          </button>
        ))}
      </div>

      {/* Current user's rank if outside top 50 */}
      {currentUserRank && (
        <div className="bg-cyan-950 border border-cyan-700 rounded-2xl p-4 mb-6 flex items-center justify-between">
          <div>
            <div className="text-xs text-cyan-400 font-medium mb-1">YOUR RANK</div>
            <div className="text-white font-bold">{getRankBadge(currentUserRank.rank)} {currentUserRank.name}</div>
            <div className="text-zinc-400 text-sm">{currentUserRank.examTarget}</div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-cyan-400">{currentUserRank.xp} XP</div>
            <div className="text-zinc-400 text-sm">Level {currentUserRank.level} — {getLevelTitle(currentUserRank.level)}</div>
            <div className="text-violet-400 text-sm">🔥 {currentUserRank.streak} day streak</div>
          </div>
        </div>
      )}

      {loading ? (
        <div className="text-center py-20 text-zinc-500">Loading leaderboard...</div>
      ) : data.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-4xl mb-4">🏆</div>
          <div className="text-zinc-400">No data yet. Be the first to earn XP!</div>
          <a href="/quiz" className="inline-block mt-4 bg-cyan-500 text-black px-6 py-2 rounded-xl font-semibold">Start a Quiz</a>
        </div>
      ) : (
        <div className="space-y-2">
          {data.map((entry) => (
            <div
              key={entry.userId}
              className={`flex items-center gap-4 p-4 rounded-2xl border transition ${
                entry.isCurrentUser
                  ? "bg-cyan-950 border-cyan-700"
                  : entry.rank <= 3
                  ? "bg-zinc-900 border-zinc-700"
                  : "bg-zinc-950 border-zinc-800 hover:border-zinc-700"
              }`}
            >
              {/* Rank */}
              <div className="w-10 text-center font-bold text-lg">
                {getRankBadge(entry.rank)}
              </div>

              {/* Avatar */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center font-bold text-sm flex-shrink-0">
                {entry.name.charAt(0).toUpperCase()}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-white truncate">
                  {entry.name}
                  {entry.isCurrentUser && <span className="text-xs text-cyan-400 ml-2">(You)</span>}
                </div>
                <div className="text-xs text-zinc-500">
                  {entry.examTarget} · Level {entry.level} {getLevelTitle(entry.level)}
                </div>
              </div>

              {/* Streak */}
              <div className="text-violet-400 text-sm hidden sm:block">
                🔥 {entry.streak}d
              </div>

              {/* XP */}
              <div className="text-right flex-shrink-0">
                <div className="font-bold text-cyan-400">{entry.xp.toLocaleString()}</div>
                <div className="text-xs text-zinc-500">XP</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* XP Guide */}
      <div className="mt-8 bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
        <div className="text-sm font-semibold text-zinc-300 mb-3">How to Earn XP</div>
        <div className="grid grid-cols-2 gap-2 text-sm text-zinc-400">
          <div>✅ Quiz complete → +20 XP</div>
          <div>🎯 Perfect score → +50 XP</div>
          <div>📖 Read a chapter → +10 XP</div>
          <div>🔖 Save chapter → +5 XP</div>
          <div>🔥 Daily streak → +15 XP/day</div>
          <div>💬 AI tutor session → +8 XP</div>
        </div>
      </div>
    </main>
  );
}
