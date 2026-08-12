import Link from "next/link";
import { notFound } from "next/navigation";
import { getAttemptWithAnswers } from "@/lib/attempts/store";
import { summarizeAnswers } from "@/lib/attempts/scoring";
import { renderChemistry } from "@/lib/renderChemistry";

// ─────────────────────────────────────────────────────────────────────────────
// /revision/attempt/[id] — review a saved attempt (Week 5A Attempt Layer).
// Server component; RLS + explicit user filter mean users can only ever open
// their own attempts. Renders from the stored question snapshots, so AI-paper
// and PYQ questions review identically.
// ─────────────────────────────────────────────────────────────────────────────

export const dynamic = "force-dynamic";

export default async function AttemptReviewPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { data, error } = await getAttemptWithAnswers(id);

  if (error === "Unauthorized") {
    return (
      <main className="min-h-screen bg-black text-white">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <h1 className="text-2xl font-black">Sign in to review attempts</h1>
          <p className="mt-2 text-sm text-white/55">Attempt reviews are private to your account.</p>
          <Link href="/auth/signin" className="mt-6 inline-block rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-5 py-2.5 text-sm font-black text-black">
            Sign in →
          </Link>
        </div>
      </main>
    );
  }
  if (error || !data) notFound();

  const { attempt, answers } = data;
  const summary = summarizeAnswers(answers);

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <nav className="mb-6 text-sm text-zinc-500">
          <Link href="/revision" className="transition hover:text-white">Revision</Link>
          <span className="mx-1.5">/</span>
          <span className="text-zinc-300">Attempt review</span>
        </nav>

        <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">{attempt.source} · {attempt.exam}</p>
        <h1 className="text-3xl font-black">{attempt.title ?? `${attempt.exam} attempt`}</h1>
        <p className="mt-1 text-sm text-white/45">
          {new Date(attempt.submittedAt).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })}
          {attempt.durationMs > 0 && ` · ${Math.round(attempt.durationMs / 60000)} min`}
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
            <div className="text-2xl font-black text-cyan-300">{attempt.score}</div>
            <div className="mt-1 text-xs text-white/50">Score / {attempt.maxScore}</div>
          </div>
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-center">
            <div className="text-2xl font-black text-emerald-300">{attempt.correctCount}</div>
            <div className="mt-1 text-xs text-white/50">Correct</div>
          </div>
          <div className="rounded-2xl border border-rose-500/20 bg-rose-500/5 p-4 text-center">
            <div className="text-2xl font-black text-rose-300">{attempt.incorrectCount}</div>
            <div className="mt-1 text-xs text-white/50">Incorrect</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
            <div className="text-2xl font-black text-white/70">{summary.accuracy}%</div>
            <div className="mt-1 text-xs text-white/50">Accuracy</div>
          </div>
        </div>

        <h2 className="mt-10 mb-4 text-xl font-bold">Questions</h2>
        <div className="space-y-4">
          {answers.map((a) => (
            <div key={a.answerId} className="rounded-2xl border border-white/[0.08] bg-[#111827] p-4">
              <div className="mb-2 flex flex-wrap items-center gap-2 text-[11px]">
                <span className="font-bold text-cyan-300">Q{a.position}</span>
                {a.chapter && <span className="rounded bg-white/5 px-2 py-0.5 text-white/60">{a.chapter}</span>}
                {a.selectedAnswer === null ? (
                  <span className="rounded bg-white/10 px-2 py-0.5 font-bold text-white/50">Skipped</span>
                ) : (
                  <span className={`rounded px-2 py-0.5 font-bold ${a.isCorrect ? "bg-emerald-500/15 text-emerald-300" : "bg-rose-500/15 text-rose-300"}`}>
                    {a.isCorrect ? `✓ +${a.marksAwarded}` : `✗ ${a.marksAwarded}`}
                  </span>
                )}
              </div>
              <p className="text-sm font-medium leading-relaxed">{renderChemistry(a.questionText)}</p>

              {a.options && (
                <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {Object.entries(a.options).map(([k, v]) => {
                    const tone =
                      k === a.correctAnswer
                        ? "border-emerald-500/50 bg-emerald-500/10 text-emerald-200 font-semibold"
                        : k === a.selectedAnswer
                          ? "border-rose-500/50 bg-rose-500/10 text-rose-200 font-semibold"
                          : "border-white/10 bg-white/[0.03] text-white/60";
                    return (
                      <div key={k} className={`rounded-lg border p-2.5 text-sm ${tone}`}>
                        <span className="mr-2 font-bold">{k}.</span>
                        {renderChemistry(v)}
                        {k === a.selectedAnswer && <span className="ml-2 text-[10px] uppercase tracking-wide opacity-70">your answer</span>}
                      </div>
                    );
                  })}
                </div>
              )}

              {a.explanation && (
                <div className="mt-3 rounded-xl border border-white/[0.08] bg-white/[0.03] p-3 text-sm text-white/65">
                  <span className="font-semibold text-indigo-300">Explanation: </span>
                  {renderChemistry(a.explanation)}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/revision" className="text-sm text-zinc-500 transition hover:text-white">← Back to Revision</Link>
        </div>
      </div>
    </main>
  );
}
