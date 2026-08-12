import Link from "next/link";
import { notFound } from "next/navigation";
import ProgramPageHeader from "@/components/programs/ProgramPageHeader";
import ProgressTabs, { type ProgressTab } from "@/components/progress/ProgressTabs";
import PerformanceView, { GuestPerformanceView } from "@/components/performance/PerformanceView";
import { getProgram } from "@/lib/programs";
import { fetchPerformanceData } from "@/lib/performance/performanceEngine";
import type { PlatformStats } from "@/lib/performance/types";
import { NOTES_ENGINE_STATS } from "@/lib/notesEngine";
import { TEST_ENGINE_STATS } from "@/lib/tests/testEngine";
import { KNOWLEDGE_GRAPH_STATS } from "@/lib/knowledge/graph";
import { getAllUserAnswers, getAllUserAnswersWithTime } from "@/lib/attempts/store";
import { buildAnalytics, type MasteryBand } from "@/lib/attempts/analytics";
import { buildReadiness } from "@/lib/attempts/readiness";
import { buildNcertReport, type NcertStatus } from "@/lib/attempts/ncert";
import { buildSpeedReport } from "@/lib/engine/speed";
import { ENGINE_PROGRAMS, isEngineSlug } from "@/lib/engine/programSpec";

// ─────────────────────────────────────────────────────────────────────────────
// /programs/[slug]/progress — Progress Dashboard (Dashboard Simplification
// pass). Consolidates six former nav destinations — Performance, Exam
// Predictor, Syllabus Mastery Map, NCERT Blind Spots, Readiness Report and
// Speed Analysis — into one page with five internal tabs: Overview, Mastery,
// Readiness, Speed, NCERT Gaps.
//
// Every number here comes from the SAME calculation functions the original
// standalone pages used (buildAnalytics, buildReadiness, buildNcertReport,
// buildSpeedReport, fetchPerformanceData) — no calculations were removed or
// re-derived, only the navigation was consolidated. Those standalone routes
// (/analytics, /performance, /exam-predictor, /ncert, /readiness,
// /programs/[slug]/speed) still resolve directly; they're just no longer
// linked from primary navigation.
// ─────────────────────────────────────────────────────────────────────────────

// Per-request dynamic (auth-scoped attempt data) — same pattern as
// /programs/[slug]/speed, which this dashboard's Speed tab is built from.
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProgram(slug);
  return p ? { title: `${p.name} — Progress Dashboard` } : {};
}

const BAND_META: Record<MasteryBand, { label: string; dot: string; text: string; ring: string }> = {
  green: { label: "Strong", dot: "bg-emerald-400", text: "text-emerald-300", ring: "border-emerald-500/30 bg-emerald-500/[0.06]" },
  yellow: { label: "Shaky", dot: "bg-amber-400", text: "text-amber-300", ring: "border-amber-500/30 bg-amber-500/[0.06]" },
  red: { label: "Weak", dot: "bg-rose-400", text: "text-rose-300", ring: "border-rose-500/30 bg-rose-500/[0.06]" },
  building: { label: "Building", dot: "bg-white/30", text: "text-white/50", ring: "border-white/10 bg-white/[0.02]" },
};

const NCERT_META: Record<NcertStatus, { label: string; dot: string; text: string; ring: string }> = {
  mastered: { label: "Mastered", dot: "bg-emerald-400", text: "text-emerald-300", ring: "border-emerald-500/30 bg-emerald-500/[0.06]" },
  weak: { label: "Weak", dot: "bg-rose-400", text: "text-rose-300", ring: "border-rose-500/30 bg-rose-500/[0.06]" },
  unseen: { label: "Not seen", dot: "bg-white/30", text: "text-white/50", ring: "border-white/10 bg-white/[0.02]" },
};

const READINESS_BAND_META = {
  strong: { label: "Exam-ready", text: "text-emerald-300", ring: "border-emerald-500/30 bg-emerald-500/[0.06]" },
  onTrack: { label: "On track", text: "text-amber-300", ring: "border-amber-500/30 bg-amber-500/[0.06]" },
  early: { label: "Early days", text: "text-rose-300", ring: "border-rose-500/30 bg-rose-500/[0.06]" },
} as const;

function fmtSeconds(s: number): string {
  return s >= 60 ? `${Math.floor(s / 60)}m ${s % 60}s` : `${s}s`;
}

function SignInPrompt({ label }: { label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center">
      <h3 className="text-lg font-bold">Sign in to see your {label}</h3>
      <Link href="/auth/signin" className="mt-4 inline-block rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-5 py-2.5 text-sm font-black text-black">
        Sign in →
      </Link>
    </div>
  );
}

function Unavailable() {
  return (
    <p className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center text-sm text-white/55">
      This section is unavailable right now — try again shortly.
    </p>
  );
}

export default async function ProgressDashboardPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) notFound();
  const { name } = program;

  // One shared fetch — Mastery, Readiness and NCERT Gaps all read the same
  // attempt_answers rows, so this consolidation actually fetches LESS than
  // the three separate pages it replaces did.
  const { data: answers, error: answersError } = await getAllUserAnswers();

  // ── Overview (Performance) ────────────────────────────────────────────────
  const perfData = await fetchPerformanceData();
  const stats: PlatformStats = {
    notesChapters: NOTES_ENGINE_STATS.chapters,
    totalTests: TEST_ENGINE_STATS.totalTests,
    pyqQuestions: TEST_ENGINE_STATS.questionPool,
    linkedChapters: KNOWLEDGE_GRAPH_STATS.linkedChapters,
  };
  const overviewContent = (
    <div className="space-y-4">
      {perfData ? <PerformanceView data={perfData} stats={stats} /> : <GuestPerformanceView stats={stats} />}
      <Link
        href="/exam-predictor"
        className="flex items-center justify-between gap-4 rounded-2xl border border-purple-500/20 bg-purple-500/[0.05] p-5 transition hover:border-purple-400/40"
      >
        <div>
          <h3 className="font-bold text-purple-200">Exam Predictor →</h3>
          <p className="mt-1 text-xs text-white/50">AI-estimated rank and score from your recent quiz performance.</p>
        </div>
        <span className="text-2xl">🔮</span>
      </Link>
    </div>
  );

  // ── Mastery (Syllabus Mastery Map) ───────────────────────────────────────
  let masteryContent: React.ReactNode;
  if (answersError === "Unauthorized") {
    masteryContent = <SignInPrompt label="Mastery Map" />;
  } else if (answersError || !answers) {
    masteryContent = <Unavailable />;
  } else {
    const report = buildAnalytics(answers);
    masteryContent = !report.hasData ? (
      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center">
        <h3 className="text-lg font-bold">No attempts yet</h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-zinc-400">
          Answer questions in a <Link href="/tests" className="font-bold text-cyan-400 hover:underline">practice test</Link>,{" "}
          <Link href="/pyq" className="font-bold text-cyan-400 hover:underline">PYQ</Link> set or{" "}
          <Link href="/exam" className="font-bold text-cyan-400 hover:underline">mock exam</Link> — your mastery map builds automatically.
        </p>
      </div>
    ) : (
      <div className="space-y-8">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/[0.05] p-4 text-center">
            <div className="text-2xl font-black text-cyan-300">{report.overall.accuracy}%</div>
            <div className="mt-1 text-xs text-white/50">Overall accuracy</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
            <div className="text-2xl font-black text-white/80">{report.questionsAnswered}</div>
            <div className="mt-1 text-xs text-white/50">Questions answered</div>
          </div>
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.05] p-4 text-center">
            <div className="text-2xl font-black text-emerald-300">{report.bandCounts.green}</div>
            <div className="mt-1 text-xs text-white/50">Strong chapters</div>
          </div>
          <div className="rounded-2xl border border-rose-500/20 bg-rose-500/[0.05] p-4 text-center">
            <div className="text-2xl font-black text-rose-300">{report.bandCounts.red}</div>
            <div className="mt-1 text-xs text-white/50">Weak chapters</div>
          </div>
        </div>
        <section>
          <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
            <div>
              <h3 className="text-lg font-bold">Syllabus Mastery Map</h3>
              <p className="mt-1 text-sm text-zinc-500">
                {report.coverage.attemptedChapters} of {report.coverage.totalChapters} chapters attempted — weakest first.
              </p>
            </div>
          </div>
          <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {report.masteryMap.map((c) => {
              const m = BAND_META[c.band];
              return (
                <div key={c.chapter} className={`rounded-xl border p-3.5 ${m.ring}`}>
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-sm font-bold text-white">{c.chapter}</span>
                    <span className={`inline-flex shrink-0 items-center gap-1 text-[11px] font-bold ${m.text}`}>
                      <span className={`h-2 w-2 rounded-full ${m.dot}`} />
                      {c.band === "building" ? "Building" : `${c.accuracy}%`}
                    </span>
                  </div>
                  <div className="mt-1 text-xs text-white/45">{c.correct}/{c.answered} correct</div>
                </div>
              );
            })}
          </div>
        </section>
        <section>
          <h3 className="mb-1 text-lg font-bold">Weakest Topics</h3>
          {report.weakTopics.length === 0 ? (
            <p className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center text-sm text-white/55">
              No weak topics yet — nothing below 75% with enough attempts.
            </p>
          ) : (
            <div className="space-y-2">
              {report.weakTopics.map((t) => (
                <div key={t.topic} className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] p-3">
                  <span className="flex-1 text-sm font-semibold text-white">{t.topic}</span>
                  <span className="text-xs text-white/45">{t.answered} attempted</span>
                  <span className="w-14 text-right text-sm font-black text-rose-300">{t.accuracy}%</span>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    );
  }

  // ── Readiness ──────────────────────────────────────────────────────────────
  let readinessContent: React.ReactNode;
  if (answersError === "Unauthorized") {
    readinessContent = <SignInPrompt label="Readiness Report" />;
  } else if (answersError || !answers) {
    readinessContent = <Unavailable />;
  } else {
    const report = buildReadiness(answers);
    if (!report.hasData) {
      readinessContent = (
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center">
          <h3 className="text-lg font-bold">No readiness score yet</h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-zinc-400">
            Attempt a <Link href="/tests" className="font-bold text-cyan-400 hover:underline">test</Link> or{" "}
            <Link href="/pyq" className="font-bold text-cyan-400 hover:underline">PYQ</Link> set — your readiness score builds automatically.
          </p>
        </div>
      );
    } else {
      const m = READINESS_BAND_META[report.band];
      readinessContent = (
        <div className="space-y-8">
          <div className={`flex flex-col items-center gap-3 rounded-2xl border p-8 text-center ${m.ring}`}>
            <div className="text-6xl font-black text-white">{report.score}<span className="text-2xl text-white/40">/100</span></div>
            <div className={`text-sm font-bold uppercase tracking-wider ${m.text}`}>{m.label}</div>
            {!report.confident && (
              <p className="max-w-md text-xs text-white/45">
                Low confidence — based on {report.questionsAnswered} question{report.questionsAnswered === 1 ? "" : "s"}.
              </p>
            )}
          </div>
          <section>
            <h3 className="mb-3 text-lg font-bold">How it&apos;s calculated</h3>
            <div className="space-y-2.5">
              {report.components.map((c) => (
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
          <section className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04] p-4">
              <h4 className="text-sm font-bold text-emerald-300">Strong chapters</h4>
              {report.strongChapters.length === 0 ? (
                <p className="mt-2 text-xs text-white/45">None at ≥75% yet.</p>
              ) : (
                <ul className="mt-2 space-y-1 text-sm text-white/75">{report.strongChapters.map((c) => <li key={c}>✓ {c}</li>)}</ul>
              )}
            </div>
            <div className="rounded-2xl border border-rose-500/20 bg-rose-500/[0.04] p-4">
              <h4 className="text-sm font-bold text-rose-300">Weak chapters</h4>
              {report.weakChapters.length === 0 ? (
                <p className="mt-2 text-xs text-white/45">No chapters below 50% with enough attempts.</p>
              ) : (
                <ul className="mt-2 space-y-1 text-sm text-white/75">{report.weakChapters.map((c) => <li key={c}>• {c}</li>)}</ul>
              )}
            </div>
          </section>
          <section>
            <h3 className="mb-3 text-lg font-bold">Suggested next</h3>
            <div className="space-y-2">
              {report.suggested.map((s) => (
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
        </div>
      );
    }
  }

  // ── NCERT Gaps ─────────────────────────────────────────────────────────────
  let ncertContent: React.ReactNode;
  if (answersError === "Unauthorized") {
    ncertContent = <SignInPrompt label="NCERT coverage" />;
  } else if (answersError || !answers) {
    ncertContent = <Unavailable />;
  } else {
    const report = buildNcertReport(answers);
    ncertContent = !report.hasData ? (
      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center">
        <h3 className="text-lg font-bold">No coverage yet</h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-zinc-400">
          Answer NCERT-linked questions in a <Link href="/pyq" className="font-bold text-cyan-400 hover:underline">PYQ</Link> set or{" "}
          <Link href="/tests" className="font-bold text-cyan-400 hover:underline">test</Link> — your NCERT map builds automatically across {report.totalLines} tracked lines.
        </p>
      </div>
    ) : (
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/[0.05] p-4 text-center">
            <div className="text-2xl font-black text-cyan-300">{report.coveragePct}%</div>
            <div className="mt-1 text-xs text-white/50">Coverage ({report.covered}/{report.totalLines})</div>
          </div>
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.05] p-4 text-center">
            <div className="text-2xl font-black text-emerald-300">{report.mastered}</div>
            <div className="mt-1 text-xs text-white/50">Mastered</div>
          </div>
          <div className="rounded-2xl border border-rose-500/20 bg-rose-500/[0.05] p-4 text-center">
            <div className="text-2xl font-black text-rose-300">{report.weak}</div>
            <div className="mt-1 text-xs text-white/50">Weak</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
            <div className="text-2xl font-black text-white/70">{report.unseen}</div>
            <div className="mt-1 text-xs text-white/50">Not seen</div>
          </div>
        </div>
        <div className="space-y-4">
          {report.chapters.map((ch) => (
            <div key={ch.chapterKey} className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <span className="text-sm font-bold text-white">{ch.chapterKey}</span>
                <span className="text-xs text-white/45">
                  <span className="text-emerald-300">{ch.mastered} mastered</span> ·{" "}
                  <span className="text-rose-300">{ch.weak} weak</span> ·{" "}
                  <span className="text-white/50">{ch.unseen} not seen</span>
                </span>
              </div>
              <div className="grid gap-1.5 sm:grid-cols-2">
                {ch.lines.map((l) => {
                  const m = NCERT_META[l.status];
                  return (
                    <div key={l.line} className={`flex items-start gap-2 rounded-lg border px-2.5 py-1.5 text-xs ${m.ring}`}>
                      <span className={`mt-1 h-2 w-2 shrink-0 rounded-full ${m.dot}`} />
                      <span className="text-white/75">{l.line.replace(/^Class\s*\d+\s*Ch\.?\s*\d+\s*[—-]?\s*/i, "")}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ── Speed (JEE-engine layer only) ──────────────────────────────────────────
  let speedContent: React.ReactNode | null = null;
  const engine = isEngineSlug(slug) ? ENGINE_PROGRAMS[slug] : undefined;
  if (engine?.hasSpeedAnalysis) {
    const { data: timedAnswers, error: speedError } = await getAllUserAnswersWithTime();
    if (speedError === "Unauthorized") {
      speedContent = <SignInPrompt label="Speed Analysis" />;
    } else if (speedError || !timedAnswers) {
      speedContent = <Unavailable />;
    } else {
      const report = buildSpeedReport(timedAnswers, engine.exam);
      speedContent = !report.hasData ? (
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center">
          <h3 className="text-lg font-bold">No timed attempts yet</h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-white/55">
            Answer questions in <Link href={`/programs/${slug}/practice`} className="font-bold text-cyan-400 hover:underline">Practice</Link> — per-question time is recorded automatically.
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/[0.05] p-4 text-center">
              <div className="text-2xl font-black text-cyan-300">{fmtSeconds(report.avgSeconds)}</div>
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
          <section>
            <h3 className="mb-1 text-lg font-bold">Pace by difficulty</h3>
            <div className="space-y-2">
              {report.buckets.map((b) => (
                <div key={b.difficulty} className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-white/[0.08] bg-white/[0.02] p-3">
                  <div className="flex items-center gap-3">
                    <span className="w-20 text-sm font-bold text-white/90">{b.difficulty}</span>
                    <span className="text-xs text-white/45">{b.answered} answered · {b.accuracy}% accuracy</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="font-black text-white/85">{fmtSeconds(b.avgSeconds)}</span>
                    <span className="text-xs text-white/40">vs {fmtSeconds(b.expectedSeconds)}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
          {report.slowChapters.length > 0 && (
            <section>
              <h3 className="mb-3 text-lg font-bold">Slowest chapters</h3>
              <div className="grid gap-2 sm:grid-cols-2">
                {report.slowChapters.map((c) => (
                  <div key={c.chapter} className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.02] p-3">
                    <span className="min-w-0 truncate text-sm font-semibold text-white/90">{c.chapter}</span>
                    <span className="shrink-0 text-sm font-black text-amber-300">{fmtSeconds(c.avgSeconds)}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      );
    }
  }

  const tabs: ProgressTab[] = [
    { key: "overview", label: "Overview", content: overviewContent },
    { key: "mastery", label: "Mastery", content: masteryContent },
    { key: "readiness", label: "Readiness", content: readinessContent },
    ...(speedContent ? [{ key: "speed", label: "Speed", content: speedContent }] : []),
    { key: "ncert", label: "NCERT Gaps", content: ncertContent },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <ProgramPageHeader
        program={program}
        section="Progress"
        blurb={`Every performance signal for ${name} in one dashboard — computed only from your real attempts.`}
      />
      <div className="mx-auto max-w-5xl px-6 py-12">
        <ProgressTabs tabs={tabs} />
        <div className="mt-12 text-center">
          <Link href={`/programs/${slug}`} className="text-sm text-zinc-500 transition hover:text-white">
            ← Back to {name} program
          </Link>
        </div>
      </div>
    </main>
  );
}
