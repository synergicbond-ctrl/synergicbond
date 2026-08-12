import Link from "next/link";
import {
  Trophy, Flame, Target, TrendingUp, Clock, BookOpen,
  Sparkles, ArrowRight, Lock,
} from "lucide-react";

const stats = [
  { icon: Target, label: "Questions Solved", value: "1,248", sub: "84% accuracy", accent: "#00F5D4" },
  { icon: Flame, label: "Day Streak", value: "23", sub: "Personal best: 31", accent: "#00BBF9" },
  { icon: TrendingUp, label: "XP / Level", value: "Lvl 7", sub: "8,420 XP · Catalyst", accent: "#9B5DE5" },
  { icon: Trophy, label: "Est. National Rank", value: "#2,140", sub: "after full mock", accent: "#FFD700" },
];

const recentTests = [
  { name: "JEE Advanced — Full Mock #4", score: "168 / 180", date: "2 days ago", pct: 93 },
  { name: "Organic Chemistry — Unit Test", score: "72 / 80", date: "5 days ago", pct: 90 },
  { name: "NEET — Inorganic Drill", score: "61 / 80", date: "1 week ago", pct: 76 },
];

const weak = ["Chemical Kinetics", "Coordination Compounds", "Thermodynamics (Entropy)", "GOC — Resonance"];

const activity = [
  { icon: BookOpen, text: "Read “Coordination Compounds” in Knowledge Vault", time: "1h ago" },
  { icon: Sparkles, text: "Solved a doubt via AI Doubt Solver", time: "3h ago" },
  { icon: Target, text: "Completed Daily Challenge — correct ✓", time: "Yesterday" },
  { icon: Clock, text: "2h 15m focused study time logged", time: "Yesterday" },
];

export default function GuestDashboardPreview() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <div className="mx-auto max-w-6xl px-6 py-10">

        {/* Preview banner */}
        <div className="mb-8 rounded-2xl border border-cyan-400/25 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-cyan-500/15">
              <Lock className="h-5 w-5 text-cyan-400" />
            </span>
            <div>
              <h2 className="text-base font-bold text-white">This is a preview with sample data</h2>
              <p className="text-sm text-white/60 mt-0.5">Sign up free to start tracking <span className="text-cyan-300 font-semibold">your</span> real progress, rank and weak topics.</p>
            </div>
          </div>
          <Link href="/auth/signup" className="flex-shrink-0 flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-5 py-2.5 text-sm font-bold text-black transition hover:-translate-y-0.5">
            Create Free Account <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Greeting */}
        <div className="mb-6">
          <h1 className="text-3xl font-black">Welcome, Future Ranker 👋</h1>
          <p className="text-white/50 text-sm mt-1">Here&apos;s what your Chemistry OS dashboard looks like.</p>
        </div>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4 mb-8">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="rounded-2xl bg-[#111827] border border-white/[0.06] p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl mb-3" style={{ background: `${s.accent}1a` }}>
                  <Icon className="h-5 w-5" style={{ color: s.accent }} />
                </div>
                <p className="text-2xl font-black text-white">{s.value}</p>
                <p className="text-sm font-semibold text-white/80 mt-0.5">{s.label}</p>
                <p className="text-xs text-white/40 mt-0.5">{s.sub}</p>
              </div>
            );
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          {/* Recent tests */}
          <div className="rounded-2xl bg-[#111827] border border-white/[0.06] p-6">
            <h3 className="text-sm font-bold text-white mb-4">Recent Mock Tests</h3>
            <div className="space-y-3">
              {recentTests.map((t) => (
                <div key={t.name} className="flex items-center gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-white truncate">{t.name}</p>
                    <p className="text-xs text-white/40">{t.date}</p>
                  </div>
                  <div className="w-28 hidden sm:block">
                    <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-sky-500" style={{ width: `${t.pct}%` }} />
                    </div>
                  </div>
                  <span className="text-sm font-bold text-cyan-300 w-20 text-right">{t.score}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Weak topics + activity */}
          <div className="space-y-6">
            <div className="rounded-2xl bg-[#111827] border border-white/[0.06] p-6">
              <h3 className="text-sm font-bold text-white mb-3">Focus Areas</h3>
              <div className="flex flex-wrap gap-2">
                {weak.map((w) => (
                  <span key={w} className="text-xs font-medium text-red-300 bg-red-500/10 border border-red-500/20 px-2.5 py-1 rounded-full">{w}</span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-[#111827] border border-white/[0.06] p-6">
              <h3 className="text-sm font-bold text-white mb-3">Recent Activity</h3>
              <div className="space-y-3">
                {activity.map((a, i) => {
                  const Icon = a.icon;
                  return (
                    <div key={i} className="flex items-start gap-2.5">
                      <Icon className="h-4 w-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <div className="min-w-0">
                        <p className="text-xs text-white/70 leading-snug">{a.text}</p>
                        <p className="text-[10px] text-white/35">{a.time}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 text-center">
          <Link href="/auth/signup" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-6 py-3 text-sm font-bold text-black transition hover:-translate-y-0.5">
            Start Tracking My Progress <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
