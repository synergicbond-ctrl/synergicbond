import Link from "next/link";
import { getAllUserAnswers } from "@/lib/attempts/store";
import { buildReadiness } from "@/lib/attempts/readiness";

// ─────────────────────────────────────────────────────────────────────────────
// /readiness — Readiness Report (Roadmap V2 · Week 10).
//
// Server component. Composes accuracy + syllabus coverage + NCERT coverage +
// practice volume into one explainable readiness score (the scoped-down
// replacement for "Digital Twin"). Reads attempt_answers only — no new table,
// no fabricated numbers, honest low-confidence flag until enough attempts.
// ─────────────────────────────────────────────────────────────────────────────

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Readiness Report — SYNERGIC BOND",
  description: "One explainable exam-readiness score from your real accuracy, coverage and practice — with strong chapters, weak chapters and suggested revision.",
};

const BAND_META = {
  strong: { label: "Exam-ready", text: "text-emerald-300", ring: "border-emerald-500/30 bg-emerald-500/[0.06]" },
  onTrack: { label: "On track", text: "text-amber-300", ring: "border-amber-500/30 bg-amber-500/[0.06]" },
  early: { label: "Early days", text: "text-rose-300", ring: "border-rose-500/30 bg-rose-500/[0.06]" },
} as const;

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="border-b border-white/10 bg-gradient-to-b from-sky-950/20 to-black px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-sky-300">Where you stand</p>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl">Readiness Report</h1>
          <p className="mt-2 max-w-2xl text-zinc-400">
            One score from your real accuracy, coverage and practice — with exactly what to fix next. No black box: the
            components and weights are shown.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-4xl px-6 py-10">{children}</div>
    </main>
  );
}

export default async function ReadinessPage() {
  const { data: answers, error } = await getAllUserAnswers();

  if (error === "Unauthorized") {
    return (
      <Shell>
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center">
          <h2 className="text-lg font-bold">Sign in to see your Readiness Report</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-zinc-400">Your score is built automatically from tests and practice.</p>
          <Link href="/auth/signin" className="mt-5 inline-block rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-5 py-2.5 text-sm font-black text-black">
            Sign in →
          </Link>
        </div>
      </Shell>
    );
  }

  if (error || !answers) {
    return (
      <Shell>
        <p className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center text-sm text-white/55">
          The Readiness Report is unavailable right now — try again shortly.
        </p>
      </Shell>
    );
  }

  const report = buildReadiness(answers);

  if (!report.hasData) {
    return (
      <Shell>
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center">
          <h2 className="text-lg font-bold">No readiness score yet</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-zinc-400">
            Attempt a{" "}
            <Link href="/tests" className="font-bold text-cyan-400 hover:underline">test</Link> or{" "}
            <Link href="/pyq" className="font-bold text-cyan-400 hover:underline">PYQ</Link> set — your readiness score builds automatically.
          </p>
        </div>
      </Shell>
    );
  }

  const { score, band, confident, questionsAnswered, components, strongChapters, weakChapters, suggested } = report;
  const m = BAND_META[band];

  return (
    <Shell>
      <div className={`mb-8 flex flex-col items-center gap-3 rounded-2xl border p-8 text-center ${m.ring}`}>
        <div className="text-6xl font-black text-white">{score}<span className="text-2xl text-white/40">/100</span></div>
        <div className={`text-sm font-bold uppercase tracking-wider ${m.text}`}>{m.label}</div>
        {!confident && (
          <p className="max-w-md text-xs text-white/45">
            Low confidence — based on {questionsAnswered} question{questionsAnswered === 1 ? "" : "s"}. The score sharpens as you attempt more.
          </p>
        )}
      </div>

      {/* Component breakdown */}
      <section className="mb-8">
        <h2 className="mb-3 text-lg font-bold">How it&apos;s calculated</h2>
        <div className="space-y-2.5">
          {components.map((c) => (
            <div key={c.key} className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-3">
              <div className="mb-1.5 flex items-center justify-between text-sm">
                <span className="font-semibold text-white">{c.label}</span>
                <span className="text-white/60">{c.value}% <span className="text-white/35">× {Math.round(c.weight * 100)}%</span></span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-white/[0.06]">
                <div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-sky-500" style={{ width: `${c.value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Strong / weak */}
      <section className="mb-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04] p-4">
          <h3 className="text-sm font-bold text-emerald-300">Strong chapters</h3>
          {strongChapters.length === 0 ? (
            <p className="mt-2 text-xs text-white/45">None at ≥75% yet — keep practising.</p>
          ) : (
            <ul className="mt-2 space-y-1 text-sm text-white/75">{strongChapters.map((c) => <li key={c}>✓ {c}</li>)}</ul>
          )}
        </div>
        <div className="rounded-2xl border border-rose-500/20 bg-rose-500/[0.04] p-4">
          <h3 className="text-sm font-bold text-rose-300">Weak chapters</h3>
          {weakChapters.length === 0 ? (
            <p className="mt-2 text-xs text-white/45">No chapters below 50% with enough attempts.</p>
          ) : (
            <ul className="mt-2 space-y-1 text-sm text-white/75">{weakChapters.map((c) => <li key={c}>• {c}</li>)}</ul>
          )}
        </div>
      </section>

      {/* Suggested revision */}
      <section>
        <h2 className="mb-3 text-lg font-bold">Suggested next</h2>
        <div className="space-y-2">
          {suggested.map((s) => (
            <Link key={s.label} href={s.href} className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.02] p-3.5 transition hover:bg-white/[0.04]">
              <div>
                <div className="text-sm font-semibold text-white">{s.label}</div>
                <div className="text-xs text-white/45">{s.reason}</div>
              </div>
              <span className="text-sm font-semibold text-cyan-300">→</span>
            </Link>
          ))}
        </div>
      </section>
    </Shell>
  );
}
