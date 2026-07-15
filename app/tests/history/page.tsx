import Link from "next/link";
import { getUserAttempts } from "@/lib/attempts/store";

// ─────────────────────────────────────────────────────────────────────────────
// /tests/history — Tests → Test History (Dashboard Simplification pass).
//
// Moved from /revision (was "Saved Attempts") — same getUserAttempts call,
// same attempt list and review links, just relocated under Tests where it
// belongs alongside Chapter & Topic Tests and Mock Exams.
// ─────────────────────────────────────────────────────────────────────────────

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Test History — SYNERGIC BOND",
  description: "Every exam and test you've submitted — open any attempt to review every question.",
};

export default async function TestHistoryPage() {
  const result = await getUserAttempts({ limit: 50 });
  const error = result.error;
  const attempts = result.data ?? [];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <header className="mb-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Test History</h1>
          <p className="mt-1 text-slate-600">
            Your submitted exams and test answers — open any attempt to review every question.
          </p>
        </header>

        <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          {error === "Unauthorized" ? (
            <p className="text-sm text-slate-600">
              <Link href="/auth/signin" className="font-bold text-indigo-600 hover:underline">Sign in</Link>{" "}
              to save and review your attempts.
            </p>
          ) : error ? (
            <p className="text-sm text-slate-500">Attempts are unavailable right now — try again shortly.</p>
          ) : attempts.length === 0 ? (
            <p className="text-sm text-slate-600">
              No attempts yet — take a{" "}
              <Link href="/exam" className="font-bold text-indigo-600 hover:underline">mock exam</Link> or a{" "}
              <Link href="/tests" className="font-bold text-indigo-600 hover:underline">practice test</Link> to start.
            </p>
          ) : (
            <ul className="divide-y divide-slate-100">
              {attempts.map((a) => (
                <li key={a.attemptId}>
                  <Link
                    href={`/revision/attempt/${a.attemptId}`}
                    className="flex flex-wrap items-center gap-x-4 gap-y-1 rounded-lg px-2 py-3 -mx-2 transition hover:bg-slate-50"
                  >
                    <span className="font-bold text-slate-900">{a.title ?? `${a.exam} ${a.source}`}</span>
                    <span className="text-xs uppercase tracking-wide text-slate-400">{a.source}</span>
                    <span className="text-sm text-slate-600">
                      {a.correctCount}/{a.totalQuestions} correct · score {a.score}/{a.maxScore}
                    </span>
                    <span className="ml-auto text-xs text-slate-400">
                      {new Date(a.submittedAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                    </span>
                    <span className="text-sm font-semibold text-indigo-600">Review →</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>

        <div className="mt-8 text-center">
          <Link href="/tests" className="text-sm text-slate-500 transition hover:text-slate-900">
            ← Back to Tests
          </Link>
        </div>
      </div>
    </main>
  );
}
