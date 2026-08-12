import Link from "next/link";
import { notFound } from "next/navigation";
import { BOARDS, CLASSES, getBoard, getClass } from "@/lib/boardDashboard";
import { getAllUserAnswers, getUserAttempts } from "@/lib/attempts/store";
import { buildAnalytics } from "@/lib/attempts/analytics";
import { buildBoardScore, scopeAnswersToClass } from "@/lib/cbse/boardScore";

// /dashboard/[board]/[class]/analytics — Board Performance Analytics.
// Reads the user's real attempt_answers (existing table), scopes them to this
// class's chapters, and renders accuracy · topic/chapter accuracy · weak areas
// · suggested revision · predicted board score · attempt history. No fabricated
// numbers — an honest empty state shows until real attempts exist.

export function generateStaticParams() {
  return BOARDS.flatMap((b) => CLASSES.map((c) => ({ board: b.slug, class: c.slug })));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ board: string; class: string }> }) {
  const { board, class: cls } = await params;
  const b = getBoard(board); const c = getClass(cls);
  return b && c ? { title: `${b.name} ${c.name} — Performance Analytics` } : {};
}

function Shell({ children, crumb }: { children: React.ReactNode; crumb: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#0B1220] text-white">
      <div className="border-b border-white/10 bg-gradient-to-b from-amber-950/20 to-[#0B1220] px-6 py-10">
        <div className="mx-auto max-w-5xl">
          <nav className="mb-4 text-sm text-white/45">{crumb}</nav>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl">Performance Analytics</h1>
          <p className="mt-2 max-w-2xl text-white/55">Accuracy, weak areas, suggested revision and your predicted board score — computed only from questions you&apos;ve actually attempted.</p>
        </div>
      </div>
      <div className="mx-auto max-w-5xl px-6 py-8">{children}</div>
    </main>
  );
}

export default async function BoardAnalyticsPage({ params }: { params: Promise<{ board: string; class: string }> }) {
  const { board, class: cls } = await params;
  const b = getBoard(board); const c = getClass(cls);
  if (!b || !c) notFound();

  const base = `/dashboard/${b.slug}/${c.slug}`;
  const crumb = (
    <>
      <Link href={base} className="hover:text-white">{b.name} {c.name}</Link>
      <span className="mx-1.5">/</span><span className="text-white/80">Analytics</span>
    </>
  );

  const { data: answers, error } = await getAllUserAnswers();

  if (error === "Unauthorized") {
    return (
      <Shell crumb={crumb}>
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center">
          <h2 className="text-lg font-bold">Sign in to see your analytics</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-white/55">Your board readiness is built automatically from tests and practice.</p>
          <Link href={`/auth/signin?next=${base}/analytics`} className="mt-5 inline-block rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-5 py-2.5 text-sm font-black text-black">Sign in →</Link>
        </div>
      </Shell>
    );
  }
  if (error || !answers) {
    return <Shell crumb={crumb}><p className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center text-sm text-white/55">Analytics is unavailable right now — try again shortly.</p></Shell>;
  }

  const scoped = scopeAnswersToClass(answers, c.slug);
  const analytics = buildAnalytics(scoped);
  const boardScore = buildBoardScore(answers, c.slug);
  const { data: attempts } = await getUserAttempts({ limit: 10 });

  if (!analytics.hasData) {
    return (
      <Shell crumb={crumb}>
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center">
          <h2 className="text-lg font-bold">No {c.name} attempts yet</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-white/55">
            Answer questions in <Link href={`${base}/practice`} className="font-bold text-cyan-400 hover:underline">Practice</Link> or a{" "}
            <Link href={`${base}/custom-test`} className="font-bold text-cyan-400 hover:underline">Custom Test</Link> — your predicted board score and weak areas build automatically.
          </p>
        </div>
      </Shell>
    );
  }

  const weakChapters = boardScore.chapters.filter((c2) => c2.answered >= 3 && c2.accuracy < 75).slice(0, 6);
  const bandColor = boardScore.band === "strong" ? "text-emerald-300" : boardScore.band === "onTrack" ? "text-amber-300" : "text-rose-300";

  return (
    <Shell crumb={crumb}>
      {/* Predicted board score */}
      <section className="mb-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-cyan-500/25 bg-cyan-500/[0.05] p-5 sm:col-span-1">
          <div className="text-xs font-bold uppercase tracking-wider text-cyan-300">Predicted board score</div>
          <div className="mt-2 flex items-end gap-2">
            <span className={`text-5xl font-black ${bandColor}`}>{boardScore.projectedMarks}</span>
            <span className="mb-1 text-lg font-bold text-white/50">/ 70</span>
          </div>
          <div className="mt-1 text-sm text-white/60">{boardScore.projectedPct}% · Grade {boardScore.grade}</div>
          {!boardScore.confident && <div className="mt-2 text-[11px] text-amber-300/80">Low confidence — attempt more questions ({boardScore.answeredOnClass}/30) to sharpen this.</div>}
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:col-span-2">
          <div className="text-xs font-bold uppercase tracking-wider text-white/40">How it&apos;s computed (transparent)</div>
          <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
            <div><div className="text-2xl font-black text-white/85">{boardScore.accuracy}%</div><div className="text-xs text-white/50">Accuracy · weight 0.75</div></div>
            <div><div className="text-2xl font-black text-white/85">{boardScore.syllabusCoverage}%</div><div className="text-xs text-white/50">Syllabus coverage · weight 0.25</div></div>
          </div>
          <p className="mt-3 text-xs text-white/40">Projection of the 70-mark theory paper from your MCQ accuracy and how much of the {boardScore.chaptersTotal}-chapter syllabus you&apos;ve practised. Not a guarantee.</p>
        </div>
      </section>

      {/* Top stats */}
      <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center"><div className="text-2xl font-black text-white/85">{analytics.overall.accuracy}%</div><div className="mt-1 text-xs text-white/50">Accuracy</div></div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center"><div className="text-2xl font-black text-white/85">{analytics.questionsAnswered}</div><div className="mt-1 text-xs text-white/50">Answered</div></div>
        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.05] p-4 text-center"><div className="text-2xl font-black text-emerald-300">{boardScore.chaptersAttempted}/{boardScore.chaptersTotal}</div><div className="mt-1 text-xs text-white/50">Chapters covered</div></div>
        <div className="rounded-2xl border border-rose-500/20 bg-rose-500/[0.05] p-4 text-center"><div className="text-2xl font-black text-rose-300">{analytics.bandCounts.red}</div><div className="mt-1 text-xs text-white/50">Weak chapters</div></div>
      </div>

      {/* Chapter accuracy */}
      <section className="mb-8">
        <h2 className="mb-3 text-lg font-bold">Chapter Accuracy</h2>
        <div className="grid gap-2 sm:grid-cols-2">
          {boardScore.chapters.map((ch) => {
            const tone = ch.answered < 3 ? "text-white/45" : ch.accuracy >= 75 ? "text-emerald-300" : ch.accuracy >= 50 ? "text-amber-300" : "text-rose-300";
            return (
              <div key={ch.chapter} className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.02] p-3">
                <span className="min-w-0 truncate text-sm font-semibold text-white/90">{ch.chapter}</span>
                <span className={`shrink-0 text-sm font-black ${tone}`}>{ch.answered < 3 ? "Building" : `${ch.accuracy}%`}<span className="ml-1 text-xs font-normal text-white/40">({ch.answered})</span></span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Weak areas + suggested revision */}
      <section className="mb-8 grid gap-6 lg:grid-cols-2">
        <div>
          <h2 className="mb-3 text-lg font-bold">Weak Areas</h2>
          {weakChapters.length === 0 && analytics.weakTopics.length === 0 ? (
            <p className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm text-white/55">Nothing below 75% with enough attempts yet.</p>
          ) : (
            <div className="space-y-2">
              {weakChapters.map((ch) => (
                <div key={ch.chapter} className="flex items-center justify-between rounded-xl border border-rose-500/20 bg-rose-500/[0.04] p-3">
                  <span className="text-sm font-semibold text-white">{ch.chapter}</span>
                  <span className="text-sm font-black text-rose-300">{ch.accuracy}%</span>
                </div>
              ))}
              {analytics.weakTopics.slice(0, 4).map((t) => (
                <div key={t.topic} className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.02] p-3">
                  <span className="text-sm text-white/80">{t.topic}</span>
                  <span className="text-sm font-black text-rose-300/80">{t.accuracy}%</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          <h2 className="mb-3 text-lg font-bold">Suggested Revision</h2>
          <div className="space-y-2">
            {weakChapters.slice(0, 3).map((ch) => {
              const chId = ch.chapter; // pyq chapter name; practice supports chapter filter by cbse id, so link to practice hub
              return (
                <Link key={chId} href={`${base}/practice`} className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.02] p-3 hover:border-cyan-400/40">
                  <span className="text-sm font-semibold text-white/90">Practise {ch.chapter}</span>
                  <span className="text-cyan-400">→</span>
                </Link>
              );
            })}
            <Link href="/mistakes" className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.02] p-3 hover:border-cyan-400/40"><span className="text-sm font-semibold text-white/90">Review your Mistake Journal</span><span className="text-cyan-400">→</span></Link>
            <Link href="/memory?deck=daily" className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.02] p-3 hover:border-cyan-400/40"><span className="text-sm font-semibold text-white/90">Run your Daily Revision Queue</span><span className="text-cyan-400">→</span></Link>
          </div>
        </div>
      </section>

      {/* Attempt history */}
      <section>
        <h2 className="mb-3 text-lg font-bold">Attempt History</h2>
        {!attempts || attempts.length === 0 ? (
          <p className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm text-white/55">No saved sessions yet.</p>
        ) : (
          <div className="space-y-2">
            {attempts.map((a) => (
              <div key={a.attemptId} className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.02] p-3 text-sm">
                <div className="min-w-0">
                  <div className="truncate font-semibold text-white/90">{a.title ?? `${a.exam} · ${a.source}`}</div>
                  <div className="text-xs text-white/40">{new Date(a.submittedAt).toLocaleDateString()} · {a.totalQuestions} Q · {a.accuracy}% accuracy</div>
                </div>
                <span className="shrink-0 font-black text-cyan-300">{a.score}/{a.maxScore}</span>
              </div>
            ))}
          </div>
        )}
      </section>
    </Shell>
  );
}
