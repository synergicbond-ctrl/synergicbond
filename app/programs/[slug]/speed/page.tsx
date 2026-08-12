import Link from "next/link";
import { notFound } from "next/navigation";
import { getProgram } from "@/lib/programs";
import { getAllUserAnswersWithTime } from "@/lib/attempts/store";
import { buildSpeedReport } from "@/lib/engine/speed";
import { ENGINE_PROGRAMS, isEngineSlug } from "@/lib/engine/programSpec";

// ─────────────────────────────────────────────────────────────────────────────
// /programs/[slug]/speed — Speed Analysis (JEE Main / JEE Advanced layer).
// Pure reducer over time-hydrated attempt_answers: only REAL recorded
// per-question times count; the timed/untimed split is shown honestly and the
// expected-time benchmark is labelled as a heuristic. NEET programs 404 here
// (speed is a JEE-layer feature per the program spec — no mixing).
// ─────────────────────────────────────────────────────────────────────────────

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = isEngineSlug(slug) ? ENGINE_PROGRAMS[slug] : undefined;
  return p ? { title: `${p.name} — Speed Analysis` } : {};
}

function fmt(s: number): string {
  return s >= 60 ? `${Math.floor(s / 60)}m ${s % 60}s` : `${s}s`;
}

export default async function SpeedPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!isEngineSlug(slug)) notFound();
  const engine = ENGINE_PROGRAMS[slug];
  const program = getProgram(slug);
  if (!program || !engine.hasSpeedAnalysis) notFound();

  const base = `/programs/${slug}`;
  const { data: answers, error } = await getAllUserAnswersWithTime();

  const shell = (children: React.ReactNode) => (
    <main className="min-h-screen bg-[#0B1220] text-white">
      <div className="border-b border-white/10 bg-gradient-to-b from-cyan-950/20 to-[#0B1220] px-4 py-8 sm:px-6 sm:py-10">
        <div className="mx-auto max-w-4xl">
          <nav className="mb-3 text-sm text-white/45">
            <Link href={base} className="hover:text-white">{engine.name}</Link>
            <span className="mx-1.5">/</span><span className="text-white/80">Speed Analysis</span>
          </nav>
          <h1 className="text-2xl font-black tracking-tight sm:text-4xl">Speed Analysis</h1>
          <p className="mt-2 max-w-2xl text-white/55">
            Your real per-question times against a difficulty benchmark — pace, rushing and slow chapters. Only questions with recorded timing count.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">{children}</div>
    </main>
  );

  if (error === "Unauthorized") {
    return shell(
      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center">
        <h2 className="text-lg font-bold">Sign in to see your Speed Analysis</h2>
        <Link href={`/auth/signin?next=${base}/speed`} className="mt-4 inline-block rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-5 py-2.5 text-sm font-black text-black">Sign in →</Link>
      </div>
    );
  }
  if (error || !answers) {
    return shell(<p className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center text-sm text-white/55">Speed Analysis is unavailable right now — try again shortly.</p>);
  }

  const report = buildSpeedReport(answers, engine.exam);

  if (!report.hasData) {
    return shell(
      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center">
        <h2 className="text-lg font-bold">No timed attempts yet</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-white/55">
          Answer questions in <Link href={`${base}/practice`} className="font-bold text-cyan-400 hover:underline">Practice</Link> or the chapter Question Banks — per-question time is recorded automatically and your pace profile builds from it.
        </p>
      </div>
    );
  }

  const verdictTone = { fast: "text-emerald-300", onPace: "text-white/70", slow: "text-rose-300" } as const;
  const verdictLabel = { fast: "Fast", onPace: "On pace", slow: "Slow" } as const;

  return shell(
    <>
      <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/[0.05] p-4 text-center">
          <div className="text-2xl font-black text-cyan-300">{fmt(report.avgSeconds)}</div>
          <div className="mt-1 text-xs text-white/50">Avg per question</div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
          <div className="text-2xl font-black text-white/85">{report.timed}</div>
          <div className="mt-1 text-xs text-white/50">Timed answers</div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
          <div className="text-2xl font-black text-white/60">{report.untimed}</div>
          <div className="mt-1 text-xs text-white/50">Untimed (excluded)</div>
        </div>
        <div className="rounded-2xl border border-rose-500/20 bg-rose-500/[0.05] p-4 text-center">
          <div className="text-2xl font-black text-rose-300">{report.rushedWrong}</div>
          <div className="mt-1 text-xs text-white/50">Rushed & wrong</div>
        </div>
      </div>

      <section className="mb-8">
        <h2 className="mb-1 text-lg font-bold">Pace by difficulty</h2>
        <p className="mb-3 text-xs text-white/40">Benchmark: Easy 45s · Moderate 90s · Hard 150s · Olympiad 240s (heuristic, not exam data).</p>
        <div className="space-y-2">
          {report.buckets.map((b) => (
            <div key={b.difficulty} className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-white/[0.08] bg-white/[0.02] p-3">
              <div className="flex items-center gap-3">
                <span className="w-20 text-sm font-bold text-white/90">{b.difficulty}</span>
                <span className="text-xs text-white/45">{b.answered} answered · {b.accuracy}% accuracy</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="font-black text-white/85">{fmt(b.avgSeconds)}</span>
                <span className="text-xs text-white/40">vs {fmt(b.expectedSeconds)}</span>
                <span className={`w-16 text-right text-xs font-black ${verdictTone[b.verdict]}`}>{verdictLabel[b.verdict]}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {report.slowChapters.length > 0 && (
        <section className="mb-8">
          <h2 className="mb-3 text-lg font-bold">Slowest chapters</h2>
          <div className="grid gap-2 sm:grid-cols-2">
            {report.slowChapters.map((c) => (
              <div key={c.chapter} className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.02] p-3">
                <span className="min-w-0 truncate text-sm font-semibold text-white/90">{c.chapter}</span>
                <span className="shrink-0 text-sm font-black text-amber-300">{fmt(c.avgSeconds)}<span className="ml-1 text-xs font-normal text-white/40">({c.answered})</span></span>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="flex flex-wrap gap-3">
        <Link href={`${base}/practice`} className="rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300 hover:bg-cyan-500/20">Practise for pace →</Link>
        <Link href="/timers" className="rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white/80 hover:bg-white/[0.08]">Exam-simulation timer →</Link>
      </div>
    </>
  );
}
