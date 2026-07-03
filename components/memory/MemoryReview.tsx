"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { renderChemistry } from "@/lib/renderChemistry";
import { DECKS, deckCards, allCards, DECK_COUNTS, type DeckKey, type RecallCard } from "@/lib/memory/decks";
import { dueCards, progress, recordReview } from "@/lib/memory/store";
import type { Grade } from "@/lib/memory/sm2";

type Mode = DeckKey | "daily";

const GRADES: { key: Grade; label: string; cls: string }[] = [
  { key: "again", label: "Again", cls: "border-rose-500/40 bg-rose-500/10 text-rose-300 hover:bg-rose-500/20" },
  { key: "hard", label: "Hard", cls: "border-amber-500/40 bg-amber-500/10 text-amber-300 hover:bg-amber-500/20" },
  { key: "good", label: "Good", cls: "border-emerald-500/40 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20" },
  { key: "easy", label: "Easy", cls: "border-cyan-500/40 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20" },
];

function cardsFor(mode: Mode): RecallCard[] {
  return mode === "daily" ? allCards() : deckCards(mode);
}

export default function MemoryReview({ initialDeck }: { initialDeck?: Mode }) {
  const [mode, setMode] = useState<Mode | null>(initialDeck ?? null);
  const [queue, setQueue] = useState<RecallCard[]>([]);
  const [idx, setIdx] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [reviewed, setReviewed] = useState(0);

  // Per-deck due counts (localStorage + clock read — client-only, post-mount).
  const [counts, setCounts] = useState<Record<string, { due: number; total: number }>>({});
  const refreshCounts = () => {
    const next: Record<string, { due: number; total: number }> = {};
    for (const d of DECKS) {
      const p = progress(deckCards(d.key));
      next[d.key] = { due: p.due, total: p.total };
    }
    const daily = progress(allCards());
    next.daily = { due: daily.due, total: daily.total };
    setCounts(next);
  };

  // Select a mode and build its due queue together (no effect → no cascade).
  const pick = (m: Mode) => {
    setMode(m);
    setQueue(dueCards(cardsFor(m)));
    setIdx(0);
    setRevealed(false);
    setReviewed(0);
  };

  // Post-mount only: read localStorage for counts + any URL-selected deck.
  // Deferred so the setState is not synchronous inside the effect.
  useEffect(() => {
    const t = setTimeout(() => {
      refreshCounts();
      if (initialDeck) setQueue(dueCards(cardsFor(initialDeck)));
    }, 0);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const current = queue[idx];
  const modeLabel = useMemo(
    () => (mode === "daily" ? "Daily Revision Queue" : DECKS.find((d) => d.key === mode)?.label ?? ""),
    [mode]
  );

  const grade = (g: Grade) => {
    if (!current) return;
    recordReview(current.id, g);
    setReviewed((n) => n + 1);
    setRevealed(false);
    setIdx((i) => i + 1);
  };

  const exit = () => {
    setMode(null);
    refreshCounts();
  };

  // ── Deck picker ──────────────────────────────────────────────────────────
  if (!mode) {
    const daily = counts.daily;
    return (
      <div className="space-y-6">
        <button
          onClick={() => pick("daily")}
          className="flex w-full items-center justify-between rounded-2xl border border-cyan-400/30 bg-gradient-to-r from-cyan-500/15 to-purple-500/10 p-5 text-left transition hover:from-cyan-500/20"
        >
          <div>
            <div className="text-lg font-black text-white">🔁 Daily Revision Queue</div>
            <div className="mt-1 text-sm text-white/60">Every card due today, across all decks.</div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-black text-cyan-300">{daily ? daily.due : "—"}</div>
            <div className="text-[11px] text-white/45">due now</div>
          </div>
        </button>

        <div className="grid gap-3 sm:grid-cols-2">
          {DECKS.map((d) => {
            const c = counts[d.key];
            return (
              <button
                key={d.key}
                onClick={() => pick(d.key)}
                className="flex items-center justify-between rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 text-left transition hover:-translate-y-0.5 hover:bg-white/[0.04]"
              >
                <div className="min-w-0">
                  <div className="font-bold text-white">{d.icon} {d.label}</div>
                  <div className="mt-0.5 text-sm text-white/55">{d.blurb}</div>
                  <div className="mt-1 text-[11px] text-white/35">{DECK_COUNTS[d.key]} cards</div>
                </div>
                <div className="ml-3 shrink-0 text-right">
                  <div className="text-xl font-black text-cyan-300">{c ? c.due : "—"}</div>
                  <div className="text-[11px] text-white/45">due</div>
                </div>
              </button>
            );
          })}
        </div>
        <p className="text-xs text-white/35">
          Reviews are scheduled with SM-2 spaced repetition and saved on this device.
        </p>
      </div>
    );
  }

  // ── Session complete ─────────────────────────────────────────────────────
  if (!current) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center">
        <div className="text-3xl">✅</div>
        <h2 className="mt-2 text-xl font-black">
          {reviewed > 0 ? `${modeLabel} done for now` : "Nothing due right now"}
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-white/55">
          {reviewed > 0
            ? `You reviewed ${reviewed} card${reviewed === 1 ? "" : "s"}. Come back when they're due again.`
            : "Every card in this deck is scheduled for later. Try another deck."}
        </p>
        <button
          onClick={exit}
          className="mt-5 rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-5 py-2.5 text-sm font-bold text-cyan-300 transition hover:bg-cyan-500/20"
        >
          ← Back to decks
        </button>
      </div>
    );
  }

  // ── Review card ──────────────────────────────────────────────────────────
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-sm">
        <button onClick={exit} className="text-white/50 transition hover:text-white">← Decks</button>
        <span className="font-semibold text-white/70">
          {modeLabel} · {idx + 1} of {queue.length}
        </span>
      </div>

      <div className="min-h-[16rem] rounded-2xl border border-white/[0.08] bg-[#111827] p-6">
        {current.hint && <div className="mb-3 text-[11px] font-bold uppercase tracking-wider text-white/35">{current.hint}</div>}
        <div className="text-lg font-bold leading-relaxed text-white">
          {current.render ? renderChemistry(current.front) : current.front}
        </div>

        {revealed ? (
          <div className="mt-5 border-t border-white/[0.08] pt-5">
            <div className="whitespace-pre-line text-[15px] leading-relaxed text-white/80">
              {current.render ? renderChemistry(current.back) : current.back}
            </div>
          </div>
        ) : (
          <button
            onClick={() => setRevealed(true)}
            className="mt-6 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-5 py-2.5 text-sm font-black text-black transition hover:-translate-y-0.5"
          >
            Show answer
          </button>
        )}
      </div>

      {revealed && (
        <div className="grid grid-cols-4 gap-2">
          {GRADES.map((g) => (
            <button
              key={g.key}
              onClick={() => grade(g.key)}
              className={`rounded-xl border py-3 text-sm font-bold transition ${g.cls}`}
            >
              {g.label}
            </button>
          ))}
        </div>
      )}

      <p className="text-center text-[11px] text-white/30">
        Reviewed {reviewed} this session ·{" "}
        <Link href="/analytics" className="hover:text-white/60">see analytics</Link>
      </p>
    </div>
  );
}
