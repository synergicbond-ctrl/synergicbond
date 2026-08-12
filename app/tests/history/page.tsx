import Link from "next/link";
import { getUserAttempts } from "@/lib/attempts/store";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Test History — SYNERGIC BOND",
  description: "Submitted chemistry tests with scores, accuracy, timing and question review.",
};

function formatDuration(milliseconds: number): string {
  const minutes = Math.max(0, Math.round(milliseconds / 60_000));
  return minutes < 60 ? `${minutes} min` : `${Math.floor(minutes / 60)} hr ${minutes % 60} min`;
}

export default async function TestHistoryPage() {
  const result = await getUserAttempts({ limit: 50 });
  const attempts = result.data ?? [];

  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <header className="mb-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Tests</p>
          <h1 className="mt-2 text-3xl font-black sm:text-4xl">Test History</h1>
          <p className="mt-2 text-sm text-white/50">Every real submitted attempt, ready for review.</p>
        </header>

        {result.error === "Unauthorized" ? (
          <section className="rounded-2xl border border-white/[0.08] bg-[#111827] p-8 text-center">
            <h2 className="font-black">Sign in to save test history</h2>
            <Link href="/auth/signin?next=/tests/history" className="mt-4 inline-block rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-black text-slate-950">Sign in</Link>
          </section>
        ) : result.error ? (
          <section className="rounded-2xl border border-rose-400/20 bg-rose-500/[0.06] p-6 text-sm text-rose-200">Test history is temporarily unavailable.</section>
        ) : attempts.length === 0 ? (
          <section className="rounded-2xl border border-dashed border-white/12 bg-white/[0.02] p-8 text-center">
            <h2 className="font-black text-white/75">No completed tests yet</h2>
            <p className="mt-1 text-sm text-white/40">Start with the 10-minute Quick Test.</p>
            <Link href="/tests" className="mt-4 inline-block rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-black text-slate-950">Open Tests</Link>
          </section>
        ) : (
          <section className="space-y-3">
            {attempts.map((attempt) => (
              <Link key={attempt.attemptId} href={`/revision/attempt/${attempt.attemptId}`} className="flex flex-wrap items-center gap-4 rounded-2xl border border-white/[0.08] bg-[#111827] p-4 transition hover:border-cyan-400/30 hover:bg-white/[0.04] sm:p-5">
                <div className="min-w-0 flex-1">
                  <h2 className="truncate font-black text-white">{attempt.title ?? `${attempt.exam} Test`}</h2>
                  <p className="mt-1 text-xs text-white/40">{new Date(attempt.submittedAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })} · {attempt.totalQuestions} questions · {formatDuration(attempt.durationMs)}</p>
                </div>
                <div className="grid grid-cols-2 gap-x-5 text-right">
                  <div><p className="font-black text-cyan-300">{attempt.score}/{attempt.maxScore}</p><p className="text-[10px] text-white/35">Score</p></div>
                  <div><p className="font-black text-emerald-300">{attempt.accuracy}%</p><p className="text-[10px] text-white/35">Accuracy</p></div>
                </div>
                <span className="text-sm font-bold text-cyan-300">Review →</span>
              </Link>
            ))}
          </section>
        )}

        <div className="mt-8 text-center"><Link href="/tests" className="text-sm text-white/40 hover:text-white">← Back to Tests</Link></div>
      </div>
    </main>
  );
}
