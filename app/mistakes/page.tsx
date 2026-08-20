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
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="border-b border-[var(--border)] bg-[var(--surface)] px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-[var(--text-muted)]">Learn from every miss</p>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl">Mistake Journal</h1>
          <p className="mt-2 max-w-2xl text-[var(--text-muted)]">
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
        <div className="rounded-lg border border-white/10 bg-white/[0.02] p-8 text-center">
          <h2 className="text-lg font-bold">Sign in to see your Mistake Journal</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-[var(--text-muted)]">Your wrong questions are collected automatically from tests and practice.</p>
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
          The Mistake Journal is unavailable right now — try again shortly.
        </p>
      </Shell>
    );
  }

  const journal = buildMistakeJournal(answers);

  if (journal.total === 0) {
    return (
      <Shell>
        <div className="rounded-lg border border-white/10 bg-white/[0.02] p-8 text-center">
          <h2 className="text-lg font-bold">No mistakes logged yet</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-zinc-400">
            {journal.unmappedWrong > 0
              ? "Your recent wrong answers came from AI-generated papers, which aren't in the reattempt bank. "
              : ""}
            Take a{" "}
            <Link href="/tests" className="font-bold text-[var(--accent)] hover:underline">practice test</Link> or{" "}
            <Link href="/pyq" className="font-bold text-[var(--accent)] hover:underline">PYQ</Link> set — wrong questions land here automatically.
          </p>
        </div>
      </Shell>
    );
  }

  return (
    <Shell>
      <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4 text-center">
          <div className="text-2xl font-black text-[var(--foreground)]">{journal.total}</div>
          <div className="mt-1 text-xs text-[var(--text-muted)]">Open mistakes</div>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4 text-center">
          <div className="text-2xl font-black text-[var(--foreground)]">{journal.categoryCounts.Concept}</div>
          <div className="mt-1 text-xs text-[var(--text-muted)]">Concept</div>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4 text-center">
          <div className="text-2xl font-black text-[var(--foreground)]">{journal.categoryCounts.Calculation}</div>
          <div className="mt-1 text-xs text-[var(--text-muted)]">Calculation</div>
        </div>
        <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4 text-center">
          <div className="text-2xl font-black text-[var(--foreground)]">{journal.categoryCounts.Memory}</div>
          <div className="mt-1 text-xs text-[var(--text-muted)]">Memory</div>
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
