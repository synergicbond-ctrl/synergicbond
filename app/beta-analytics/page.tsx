"use client";

import { useEffect, useState } from "react";
import { Activity, Clock, MessageSquare, RefreshCw, Search, Sparkles, Users } from "lucide-react";

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
    averageSessionDurationSeconds: number;
    feedbackCount: number;
    paidConversions: number;
  };
  eventCounts: Record<string, number>;
  recentFeedback: Array<{ id: string; rating: number; created_at: string }>;
};

const filters = [
  { label: "Today", days: 1 },
  { label: "7 days", days: 7 },
  { label: "30 days", days: 30 },
];

function formatDuration(seconds: number) {
  if (!seconds) return "0m";
  const minutes = Math.round(seconds / 60);
  return minutes < 1 ? `${seconds}s` : `${minutes}m`;
}

export default function BetaAnalyticsPage() {
  const [days, setDays] = useState(7);
  const [data, setData] = useState<BetaAnalytics | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(`/api/beta/analytics?days=${days}`, { cache: "no-store" });
        const json = await res.json().catch(() => null);
        if (!res.ok) throw new Error(json?.error || "Could not load analytics.");
        if (!cancelled) setData(json as BetaAnalytics);
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : "Could not load analytics.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [days]);

  const totals = data?.totals;
  const cards = [
    { label: "Total users", value: totals?.totalUsers ?? 0, icon: Users },
    { label: "Active users", value: totals?.activeUsers ?? 0, icon: Activity },
    { label: "Returning users", value: totals?.returningUsers ?? 0, icon: RefreshCw },
    { label: "Total solves", value: totals?.totalSolves ?? 0, icon: Sparkles },
    { label: "AI solves", value: totals?.aiSolves ?? 0, icon: Sparkles },
    { label: "Searches", value: totals?.searches ?? 0, icon: Search },
    { label: "Sessions", value: totals?.sessions ?? 0, icon: Clock },
    { label: "Avg session", value: formatDuration(totals?.averageSessionDurationSeconds ?? 0), icon: Clock },
    { label: "Feedback", value: totals?.feedbackCount ?? 0, icon: MessageSquare },
    { label: "Paid conversions", value: totals?.paidConversions ?? 0, icon: Users },
  ];

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl space-y-8">
        <header className="flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Internal</p>
            <h1 className="mt-2 text-3xl font-black tracking-tight">Beta Proof Dashboard</h1>
          </div>
          <div className="flex rounded-lg border border-white/10 bg-white/[0.03] p-1">
            {filters.map((filter) => (
              <button
                key={filter.days}
                type="button"
                onClick={() => setDays(filter.days)}
                className={`rounded-md px-3 py-2 text-xs font-bold transition ${
                  days === filter.days ? "bg-cyan-400 text-black" : "text-white/60 hover:text-white"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </header>

        {error && (
          <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-100">
            {error}
          </div>
        )}

        <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.label} className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-semibold text-white/50">{card.label}</p>
                  <Icon className="h-4 w-4 text-cyan-300" />
                </div>
                <p className="mt-3 text-2xl font-black">{loading ? "..." : card.value}</p>
              </div>
            );
          })}
        </section>

        <section className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
            <h2 className="text-sm font-bold">Event Counts</h2>
            <div className="mt-4 divide-y divide-white/10">
              {Object.entries(data?.eventCounts ?? {}).length ? (
                Object.entries(data?.eventCounts ?? {}).map(([name, count]) => (
                  <div key={name} className="flex items-center justify-between py-3 text-sm">
                    <span className="text-white/70">{name}</span>
                    <span className="font-bold">{count}</span>
                  </div>
                ))
              ) : (
                <p className="py-6 text-sm text-white/45">No events recorded for this window.</p>
              )}
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
            <h2 className="text-sm font-bold">Recent Feedback</h2>
            <div className="mt-4 space-y-3">
              {(data?.recentFeedback ?? []).length ? (
                data?.recentFeedback.map((feedback) => (
                  <div key={feedback.id} className="rounded-lg bg-black/30 p-3 text-sm">
                    <div className="flex justify-between gap-3">
                      <span className="font-bold">{feedback.rating}/5</span>
                      <span className="text-xs text-white/45">{new Date(feedback.created_at).toLocaleString()}</span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="py-6 text-sm text-white/45">No feedback recorded for this window.</p>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
