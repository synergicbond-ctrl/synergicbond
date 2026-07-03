import MemoryReview from "@/components/memory/MemoryReview";
import type { DeckKey } from "@/lib/memory/decks";

// ─────────────────────────────────────────────────────────────────────────────
// /memory — Memory Engine V1 (Roadmap V2 · Week 5).
//
// Spaced-repetition recall over verified content (formulas, reagents,
// exceptions, orders) with SM-2 scheduling. V1 persistence is device-local
// (localStorage) — no new table required, works for guests. Server shell +
// client review runner.
// ─────────────────────────────────────────────────────────────────────────────

export const metadata = {
  title: "Memory Engine — SYNERGIC BOND",
  description: "Spaced-repetition recall decks — formulas, reagents, exceptions and orders — scheduled with SM-2.",
};

const VALID: DeckKey[] = ["formula", "reagent", "fact", "order"];

export default async function MemoryPage({ searchParams }: { searchParams: Promise<{ deck?: string }> }) {
  const { deck } = await searchParams;
  const initialDeck = deck === "daily" ? "daily" : VALID.includes(deck as DeckKey) ? (deck as DeckKey) : undefined;

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="border-b border-white/10 bg-gradient-to-b from-purple-950/20 to-black px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-purple-300">Remember it for the exam</p>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl">Memory Engine</h1>
          <p className="mt-2 max-w-2xl text-zinc-400">
            Active-recall decks scheduled with SM-2 spaced repetition. Grade each card and the engine decides when you
            see it next — so weak cards come back sooner.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-6 py-10">
        <MemoryReview initialDeck={initialDeck} />
      </div>
    </main>
  );
}
