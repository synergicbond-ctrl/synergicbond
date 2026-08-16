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
      <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <h1 className="text-2xl font-black">Sign in to review attempts</h1>
          <p className="mt-2 text-sm text-[var(--text-body)]">Attempt reviews are private to your account.</p>
          <Link href="/auth/signin" className="mt-6 inline-block rounded-[var(--radius)] bg-[var(--accent)] px-5 py-2.5 text-sm font-black text-black hover:opacity-90">
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
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <nav className="mb-6 text-sm text-[var(--text-muted)]">
          <Link href="/revision" className="transition hover:text-[var(--foreground)]">Revision</Link>
          <span className="mx-1.5">/</span>
          <span className="text-[var(--text-body)]">Attempt review</span>
        </nav>

        <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em]" style={{ color: "var(--chem-bond)" }}>{attempt.source} · {attempt.exam}</p>
        <h1 className="text-3xl font-black">{attempt.title ?? `${attempt.exam} attempt`}</h1>
        <p className="mt-1 text-sm text-[var(--text-body)]">
          {new Date(attempt.submittedAt).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })}
          {attempt.durationMs > 0 && ` · ${Math.round(attempt.durationMs / 60000)} min`}
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4 text-center">
            <div className="text-2xl font-black" style={{ color: "var(--chem-bond)" }}>{attempt.score}</div>
            <div className="mt-1 text-xs text-[var(--text-muted)]">Score / {attempt.maxScore}</div>
          </div>
          <div className="rounded-[var(--radius)] border p-4 text-center" style={{ borderColor: "color-mix(in srgb, var(--chem-rule) 32%, transparent)", background: "color-mix(in srgb, var(--chem-rule) 8%, transparent)" }}>
            <div className="text-2xl font-black" style={{ color: "var(--chem-rule)" }}>{attempt.correctCount}</div>
            <div className="mt-1 text-xs text-[var(--text-muted)]">Correct</div>
          </div>
          <div className="rounded-[var(--radius)] border p-4 text-center" style={{ borderColor: "color-mix(in srgb, var(--chem-trap) 32%, transparent)", background: "color-mix(in srgb, var(--chem-trap) 8%, transparent)" }}>
            <div className="text-2xl font-black" style={{ color: "var(--chem-trap)" }}>{attempt.incorrectCount}</div>
            <div className="mt-1 text-xs text-[var(--text-muted)]">Incorrect</div>
          </div>
          <div className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4 text-center">
            <div className="text-2xl font-black" style={{ color: "var(--accent)" }}>{summary.accuracy}%</div>
            <div className="mt-1 text-xs text-[var(--text-muted)]">Accuracy</div>
          </div>
        </div>

        <h2 className="mt-10 mb-4 text-xl font-bold">Questions</h2>
        <div className="space-y-4">
          {answers.map((a) => (
            <div key={a.answerId} className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-4">
              <div className="mb-2 flex flex-wrap items-center gap-2 text-[11px]">
                <span className="font-bold" style={{ color: "var(--chem-bond)" }}>Q{a.position}</span>
                {a.chapter && <span className="rounded bg-[var(--surface-hover)] px-2 py-0.5 text-[var(--text-body)]">{a.chapter}</span>}
                {a.selectedAnswer === null ? (
                  <span className="rounded bg-[var(--surface-hover)] px-2 py-0.5 font-bold text-[var(--text-muted)]">Skipped</span>
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
                          : "border-[var(--border)] bg-[var(--surface)] text-[var(--text-body)]";
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
                <div className="mt-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-3 text-sm text-[var(--text-body)]">
                  <span className="font-semibold" style={{ color: "var(--chem-orbital)" }}>Explanation: </span>
                  {renderChemistry(a.explanation)}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/revision" className="text-sm text-[var(--text-muted)] transition hover:text-[var(--foreground)]">← Back to Revision</Link>
        </div>
      </div>
    </main>
  );
}
