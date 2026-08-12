import Link from "next/link";
import type { PerformanceData, PlatformStats } from "@/lib/performance/types";

// ─────────────────────────────────────────────────────────────────────────────
// Performance View (server component — no client JS needed, all data is
// precomputed by the Performance Engine). Every section renders an honest
// empty state when the underlying signal has no rows. Mobile-first.
// ─────────────────────────────────────────────────────────────────────────────

function Section({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-white/[0.08] bg-[#111827] p-4 md:p-5">
      <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-white/70">
        <span className="mr-1.5">{icon}</span>{title}
      </h2>
      {children}
    </section>
  );
}

function EmptyState({ message, hint, cta }: { message: string; hint?: string; cta?: { label: string; href: string } }) {
  return (
    <div className="rounded-xl border border-dashed border-white/12 bg-white/[0.02] p-5 text-center">
      <p className="text-sm font-semibold text-white/60">{message}</p>
      {hint && <p className="mt-1 text-xs text-white/35">{hint}</p>}
      {cta && (
        <Link href={cta.href} className="mt-3 inline-block rounded-lg border border-cyan-400/30 bg-cyan-500/10 px-3 py-1.5 text-xs font-bold text-cyan-300 transition hover:bg-cyan-500/20">
          {cta.label}
        </Link>
      )}
    </div>
  );
}

function timeAgo(iso: string): string {
  const ms = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(ms / 60000);
  if (mins < 60) return `${Math.max(mins, 0)}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}

// ── Guest view — platform stats only, no fabricated personal numbers ──────────

export function GuestPerformanceView({ stats }: { stats: PlatformStats }) {
  const tiles = [
    { label: "Notes chapters", value: stats.notesChapters, href: "/notes" },
    { label: "Practice tests", value: stats.totalTests, href: "/tests" },
    { label: "Real PYQs", value: stats.pyqQuestions, href: "/pyq" },
    { label: "Linked chapters", value: stats.linkedChapters, href: "/notes" },
  ];
  return (
    <div className="space-y-5">
      <EmptyState
        message="No activity yet."
        hint="Sign in and complete tests to unlock personal insights — readiness, weak topics and your revision queue."
        cta={{ label: "Sign in to start tracking", href: "/auth/signin" }}
      />
      <Section title="What's on the platform" icon="🧭">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {tiles.map((t) => (
            <Link key={t.label} href={t.href} className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-3 text-center transition hover:border-cyan-400/40">
              <p className="text-2xl font-black text-cyan-300">{t.value}</p>
              <p className="mt-0.5 text-[11px] text-white/50">{t.label}</p>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}

// ── Signed-in view ─────────────────────────────────────────────────────────────

export default function PerformanceView({ data, stats }: { data: PerformanceData; stats: PlatformStats }) {
  const { readiness, weakTopics, strongTopics, revisionQueue, recentActivity, summary } = data;
  const hasTests = summary.testsCompleted > 0;

  const summaryTiles = [
    { label: "Chapters studied", value: `${summary.chaptersStudied}/${summary.totalChapters}` },
    { label: "Tests completed", value: String(summary.testsCompleted) },
    { label: "Study minutes", value: String(summary.studyMinutes) },
    {
      label: "PYQs attempted",
      value: summary.pyqsAttempted === null ? "—" : String(summary.pyqsAttempted),
      note: summary.pyqsAttempted === null ? "Tracking coming soon" : undefined,
    },
    { label: "Linked chapters available", value: String(stats.linkedChapters) },
  ];

  return (
    <div className="space-y-5">
      {/* 6 — Progress Summary (leads on mobile: the at-a-glance row) */}
      <Section title="Progress Summary" icon="📊">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {summaryTiles.map((t) => (
            <div key={t.label} className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-3 text-center">
              <p className="text-xl font-black text-cyan-300">{t.value}</p>
              <p className="mt-0.5 text-[11px] leading-tight text-white/50">{t.label}</p>
              {t.note && <p className="mt-0.5 text-[10px] text-white/30">{t.note}</p>}
            </div>
          ))}
        </div>
      </Section>

      {/* 1 — Exam Readiness */}
      <Section title="Exam Readiness" icon="🎯">
        {!hasTests ? (
          <EmptyState
            message="Complete tests to unlock insights."
            hint="Readiness is the average accuracy of your real test results — nothing is estimated."
            cta={{ label: "Take a practice test", href: "/tests" }}
          />
        ) : (
          <div className="space-y-3">
            {readiness.map((r) => (
              <div key={r.exam}>
                <div className="mb-1 flex items-center justify-between text-xs">
                  <span className="font-bold text-white">{r.exam}</span>
                  <span className="text-white/50">
                    {r.accuracy === null ? "No tests yet" : `${r.accuracy}% · ${r.testsTaken} test${r.testsTaken === 1 ? "" : "s"}`}
                  </span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
                  {r.accuracy !== null && (
                    <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" style={{ width: `${r.accuracy}%` }} />
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </Section>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* 2 — Weak Topics */}
        <Section title="Weak Topics" icon="⚠️">
          {weakTopics.length === 0 ? (
            <EmptyState message="No activity yet." hint="Weak topics appear once mistakes are recorded from quizzes and tests." />
          ) : (
            <ul className="space-y-2">
              {weakTopics.map((t) => (
                <li key={t.chapter} className="flex items-center justify-between rounded-xl border border-rose-500/15 bg-rose-500/[0.05] px-3 py-2">
                  <span className="text-sm font-semibold text-white">{t.chapter}</span>
                  <span className="text-xs text-rose-300">{t.mistakes} mistake{t.mistakes === 1 ? "" : "s"}</span>
                </li>
              ))}
            </ul>
          )}
        </Section>

        {/* 3 — Strong Topics */}
        <Section title="Strong Topics" icon="💪">
          {strongTopics.length === 0 ? (
            <EmptyState message="No activity yet." hint="Chapters you've studied with zero recorded mistakes show up here." />
          ) : (
            <ul className="space-y-2">
              {strongTopics.map((t) => (
                <li key={t.chapter} className="flex items-center justify-between rounded-xl border border-emerald-500/15 bg-emerald-500/[0.05] px-3 py-2">
                  <span className="text-sm font-semibold text-white">{t.chapter}</span>
                  <span className="text-xs text-emerald-300">{t.sessions} session{t.sessions === 1 ? "" : "s"} · 0 mistakes</span>
                </li>
              ))}
            </ul>
          )}
        </Section>
      </div>

      {/* 4 — Revision Queue */}
      <Section title="Revision Queue" icon="🔁">
        {revisionQueue.length === 0 ? (
          <EmptyState message="No activity yet." hint="Chapters with recorded mistakes queue up here, most recent first." cta={{ label: "Browse revision tests", href: "/tests" }} />
        ) : (
          <ul className="space-y-2">
            {revisionQueue.map((r) => (
              <li key={r.chapter} className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2">
                <span className="text-sm font-semibold text-white">{r.chapter}</span>
                <span className="text-xs text-white/45">last mistake {timeAgo(r.lastMistakeAt)}</span>
              </li>
            ))}
          </ul>
        )}
      </Section>

      {/* 5 — Recent Activity */}
      <Section title="Recent Activity" icon="🕒">
        {recentActivity.length === 0 ? (
          <EmptyState message="No activity yet." hint="Tests and study sessions appear here as you complete them." />
        ) : (
          <ul className="space-y-2">
            {recentActivity.map((a, i) => (
              <li key={`${a.at}-${i}`} className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2">
                <span className="text-base">{a.kind === "test" ? "🧪" : "📖"}</span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-semibold text-white">{a.label}</span>
                  <span className="block text-xs text-white/50">{a.detail}</span>
                </span>
                <span className="shrink-0 text-[11px] text-white/40">{timeAgo(a.at)}</span>
              </li>
            ))}
          </ul>
        )}
      </Section>
    </div>
  );
}
