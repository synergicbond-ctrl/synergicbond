import Link from "next/link";
import { getAllUserAnswers } from "@/lib/attempts/store";
import { buildMistakeJournal } from "@/lib/attempts/mistakes";
import MistakeJournalClient from "@/components/mistakes/MistakeJournalClient";

// ─────────────────────────────────────────────────────────────────────────────
// /mistakes — Mistake Journal (Roadmap V2 · Week 6).
//
// Server component. Reads the user's attempt_answers (existing table, no new
// pipeline), reduces to latest-wrong-per-question, and renders the categorised
// journal + reattempt queue. Questions leave the journal automatically once
// reattempted correctly.
// ─────────────────────────────────────────────────────────────────────────────

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Mistake Journal — SYNERGIC BOND",
  description: "Every question you got wrong, categorised, with a one-tap reattempt queue and weak-concept rollup.",
};

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="border-b border-white/10 bg-gradient-to-b from-rose-950/20 to-black px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-rose-300">Learn from every miss</p>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl">Mistake Journal</h1>
          <p className="mt-2 max-w-2xl text-zinc-400">
            Every question you answered wrong — grouped by what it tests, with a reattempt queue. Fix one and it leaves the journal.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-5xl px-6 py-10">{children}</div>
    </main>
  );
}

export default async function MistakesPage() {
  const { data: answers, error } = await getAllUserAnswers();

  if (error === "Unauthorized") {
    return (
      <Shell>
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center">
          <h2 className="text-lg font-bold">Sign in to see your Mistake Journal</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-zinc-400">Your wrong questions are collected automatically from tests and practice.</p>
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
          The Mistake Journal is unavailable right now — try again shortly.
        </p>
      </Shell>
    );
  }

  const journal = buildMistakeJournal(answers);

  if (journal.total === 0) {
    return (
      <Shell>
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center">
          <h2 className="text-lg font-bold">No mistakes logged yet</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-zinc-400">
            {journal.unmappedWrong > 0
              ? "Your recent wrong answers came from AI-generated papers, which aren't in the reattempt bank. "
              : ""}
            Take a{" "}
            <Link href="/tests" className="font-bold text-cyan-400 hover:underline">practice test</Link> or{" "}
            <Link href="/pyq" className="font-bold text-cyan-400 hover:underline">PYQ</Link> set — wrong questions land here automatically.
          </p>
        </div>
      </Shell>
    );
  }

  return (
    <Shell>
      <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-2xl border border-rose-500/20 bg-rose-500/5 p-4 text-center">
          <div className="text-2xl font-black text-rose-300">{journal.total}</div>
          <div className="mt-1 text-xs text-white/50">Open mistakes</div>
        </div>
        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-4 text-center">
          <div className="text-2xl font-black text-cyan-300">{journal.categoryCounts.Concept}</div>
          <div className="mt-1 text-xs text-white/50">Concept</div>
        </div>
        <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-4 text-center">
          <div className="text-2xl font-black text-amber-300">{journal.categoryCounts.Calculation}</div>
          <div className="mt-1 text-xs text-white/50">Calculation</div>
        </div>
        <div className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-4 text-center">
          <div className="text-2xl font-black text-violet-300">{journal.categoryCounts.Memory}</div>
          <div className="mt-1 text-xs text-white/50">Memory</div>
        </div>
      </div>

      <MistakeJournalClient
        items={journal.reattemptQueue}
        categoryCounts={journal.categoryCounts}
        weakConcepts={journal.weakConcepts}
      />

      <div className="mt-10 text-center">
        <Link href="/revision" className="text-sm text-zinc-500 transition hover:text-white">← Back to Revision</Link>
      </div>
    </Shell>
  );
}
