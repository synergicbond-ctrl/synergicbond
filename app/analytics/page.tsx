import Link from "next/link";
import { getAllUserAnswers } from "@/lib/attempts/store";
import { buildAnalytics, type MasteryBand } from "@/lib/attempts/analytics";

// ─────────────────────────────────────────────────────────────────────────────
// /analytics — Analytics Engine V1 (Roadmap V2 · Week 8).
//
// Server component. Reads the user's attempt_answers (existing table, no new
// pipeline) and renders overall accuracy, a Syllabus Mastery Map (R/Y/G),
// weak topics and honest coverage. No fabricated numbers — an empty state
// shows until real attempts exist.
// ─────────────────────────────────────────────────────────────────────────────

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Analytics — SYNERGIC BOND",
  description: "Your accuracy, syllabus mastery map and weak topics — computed only from your real attempts.",
};

const BAND_META: Record<MasteryBand, { label: string; dot: string; text: string; ring: string }> = {
  green: { label: "Strong", dot: "bg-emerald-400", text: "text-[var(--foreground)]", ring: "border-[var(--border)] bg-[var(--surface-2)]" },
  yellow: { label: "Shaky", dot: "bg-amber-400", text: "text-[var(--foreground)]", ring: "border-[var(--border)] bg-[var(--surface-2)]" },
  red: { label: "Weak", dot: "bg-rose-400", text: "text-[var(--foreground)]", ring: "border-[var(--border)] bg-[var(--surface-2)]" },
  building: { label: "Building", dot: "bg-white/30", text: "text-[var(--text-muted)]", ring: "border-[var(--border)] bg-[var(--surface-2)]" },
};

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="border-b border-[var(--border)] bg-[var(--surface)] px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent)]">Your real performance</p>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl">Analytics</h1>
          <p className="mt-2 max-w-2xl text-[var(--text-muted)]">
            Accuracy, a chapter-by-chapter mastery map and your weakest topics — computed only from questions you&apos;ve actually attempted.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-5xl px-6 py-10">{children}</div>
    </main>
  );
}

export default async function AnalyticsPage() {
  const { data: answers, error } = await getAllUserAnswers();

  if (error === "Unauthorized") {
    return (
      <Shell>
        <div className="rounded-lg border border-white/10 bg-white/[0.02] p-8 text-center">
          <h2 className="text-lg font-bold">Sign in to see your Analytics</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-[var(--text-muted)]">Your mastery map is built automatically from tests and practice.</p>
          <Link href="/auth/signin" className="mt-5 inline-block rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-black text-[var(--background)]">
            Sign in →
          </Link>
        </div>
      </Shell>
    );
  }

  if (error || !answers) {
    return (
      <Shell>
        <p className="rounded-lg border border-white/10 bg-white/[0.02] p-8 text-center text-sm text-white/55">
          Analytics is unavailable right now — try again shortly.
        </p>
      </Shell>
    );
  }

  const report = buildAnalytics(answers);

  if (!report.hasData) {
    return (
      <Shell>
        <div className="rounded-lg border border-white/10 bg-white/[0.02] p-8 text-center">
          <h2 className="text-lg font-bold">No attempts yet</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-[var(--text-muted)]">
            Answer questions in a{" "}
            <Link href="/tests" className="font-bold text-[var(--accent)] hover:underline">practice test</Link>,{" "}
            <Link href="/pyq" className="font-bold text-[var(--accent)] hover:underline">PYQ</Link> set or{" "}
            <Link href="/exam" className="font-bold text-[var(--accent)] hover:underline">mock exam</Link> — your mastery map and weak topics build automatically.
          </p>
        </div>
      </Shell>
    );
  }

  const { overall, questionsAnswered, masteryMap, bandCounts, weakTopics, coverage } = report;

  return (
    <Shell>
      {/* Top stats */}
      <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-lg border border-[var(--accent)]/30 bg-[var(--accent)]/10[0.05] p-4 text-center">
          <div className="text-2xl font-black text-[var(--accent)]">{overall.accuracy}%</div>
          <div className="mt-1 text-xs text-white/50">Overall accuracy</div>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4 text-center">
          <div className="text-2xl font-black text-white/80">{questionsAnswered}</div>
          <div className="mt-1 text-xs text-white/50">Questions answered</div>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4 text-center">
          <div className="text-2xl font-black text-[var(--foreground)]">{bandCounts.green}</div>
          <div className="mt-1 text-xs text-[var(--text-muted)]">Strong chapters</div>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4 text-center">
          <div className="text-2xl font-black text-[var(--foreground)]">{bandCounts.red}</div>
          <div className="mt-1 text-xs text-[var(--text-muted)]">Weak chapters</div>
        </div>
      </div>

      {/* Syllabus Mastery Map */}
      <section className="mb-10">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
          <div>
            <h2 className="text-xl font-bold">Syllabus Mastery Map</h2>
            <p className="mt-1 text-sm text-[var(--text-muted)]">
              {coverage.attemptedChapters} of {coverage.totalChapters} syllabus chapters attempted — weakest first.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-[11px] text-white/50">
            {(["green", "yellow", "red", "building"] as MasteryBand[]).map((b) => (
              <span key={b} className="inline-flex items-center gap-1.5">
                <span className={`h-2.5 w-2.5 rounded-full ${BAND_META[b].dot}`} />
                {BAND_META[b].label}
              </span>
            ))}
          </div>
        </div>
        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {masteryMap.map((c) => {
            const m = BAND_META[c.band];
            return (
              <div key={c.chapter} className={`rounded-lg border p-3.5 ${m.ring}`}>
                <div className="flex items-start justify-between gap-2">
                  <span className="text-sm font-bold text-white">{c.chapter}</span>
                  <span className={`inline-flex shrink-0 items-center gap-1 text-[11px] font-bold ${m.text}`}>
                    <span className={`h-2 w-2 rounded-full ${m.dot}`} />
                    {c.band === "building" ? "Building" : `${c.accuracy}%`}
                  </span>
                </div>
                <div className="mt-1 text-xs text-white/45">
                  {c.correct}/{c.answered} correct
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Weak topics */}
      <section>
        <h2 className="mb-1 text-xl font-bold">Weakest Topics</h2>
        <p className="mb-4 text-sm text-[var(--text-muted)]">Subtopics with your lowest accuracy — practice these first.</p>
        {weakTopics.length === 0 ? (
          <p className="rounded-lg border border-white/10 bg-white/[0.02] p-6 text-center text-sm text-white/55">
            No weak topics yet — nothing below 75% with enough attempts. Keep practising to sharpen the signal.
          </p>
        ) : (
          <div className="space-y-2">
            {weakTopics.map((t) => (
              <div key={t.topic} className="flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-3">
                <span className="flex-1 text-sm font-semibold text-[var(--foreground)]">{t.topic}</span>
                <span className="text-xs text-[var(--text-muted)]">{t.answered} attempted</span>
                <span className="w-14 text-right text-sm font-black text-[var(--foreground)]">{t.accuracy}%</span>
              </div>
            ))}
          </div>
        )}
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/mistakes" className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] px-4 py-2 text-sm font-semibold text-[var(--foreground)] transition hover:bg-[var(--surface-hover)]">
            Review mistakes →
          </Link>
          <Link href="/pyq" className="rounded-lg border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-4 py-2 text-sm font-semibold text-[var(--accent)] transition hover:bg-[var(--accent)]/10">
            Practise weak topics →
          </Link>
        </div>
      </section>
    </Shell>
  );
}
