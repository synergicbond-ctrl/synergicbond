"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Circle, MessageSquare, Search, Sparkles, UserCheck, Users } from "lucide-react";

type BetaAnalytics = {
  days: number;
  totals: {
    totalUsers: number;
    activeUsers: number;
    returningUsers: number;
    totalSolves: number;
    aiSolves: number;
    searches: number;
    sessions: number;
    feedbackCount: number;
    paidConversions: number;
  };
};

const targets = [
  { key: "totalUsers", label: "Students onboarded", target: 5, icon: Users },
  { key: "totalSolves", label: "Solves completed", target: 100, icon: Sparkles },
  { key: "aiSolves", label: "AI solves", target: 25, icon: Sparkles },
  { key: "searches", label: "Searches completed", target: 50, icon: Search },
  { key: "returningUsers", label: "Returning users", target: 5, icon: UserCheck },
  { key: "feedbackCount", label: "Feedback received", target: 10, icon: MessageSquare },
  { key: "paidConversions", label: "Paid users", target: 1, icon: UserCheck },
] as const;

function progress(value: number, target: number) {
  return Math.min(100, Math.round((value / target) * 100));
}

export default function BetaProofPage() {
  const [data, setData] = useState<BetaAnalytics | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      setError("");
      try {
        const res = await fetch("/api/beta/analytics?days=30", { cache: "no-store" });
        const json = await res.json().catch(() => null);
        if (!res.ok) throw new Error(json?.error || "Could not load beta proof.");
        if (!cancelled) setData(json as BetaAnalytics);
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : "Could not load beta proof.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const totals = data?.totals;
  const completed = targets.filter((item) => (totals?.[item.key] ?? 0) >= item.target).length;

  return (
    <main className="min-h-screen bg-black px-4 py-8 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="border-b border-white/10 pb-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">Week 2</p>
          <h1 className="mt-2 text-3xl font-black tracking-tight">Beta Usage Proof</h1>
          <p className="mt-2 max-w-2xl text-sm text-white/55">
            Real production usage against beta success criteria. No mock data is displayed here.
          </p>
        </header>

        {error && (
          <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-100">
            {error}
          </div>
        )}

        <section className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-bold">Certification Progress</p>
              <p className="mt-1 text-xs text-white/45">30-day production window</p>
            </div>
            <div className="text-2xl font-black">{loading ? "..." : `${completed}/${targets.length}`}</div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          {targets.map((item) => {
            const Icon = item.icon;
            const value = totals?.[item.key] ?? 0;
            const done = value >= item.target;
            return (
              <div key={item.key} className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Icon className="h-4 w-4 text-cyan-300" />
                    <p className="text-sm font-bold">{item.label}</p>
                  </div>
                  {done ? <CheckCircle2 className="h-5 w-5 text-emerald-300" /> : <Circle className="h-5 w-5 text-white/25" />}
                </div>
                <div className="mt-5 flex items-end justify-between gap-4">
                  <p className="text-3xl font-black">{loading ? "..." : value}</p>
                  <p className="text-xs font-semibold text-white/45">Target {item.target}</p>
                </div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-cyan-300" style={{ width: `${progress(value, item.target)}%` }} />
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </main>
  );
}
