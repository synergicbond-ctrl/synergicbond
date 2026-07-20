"use client";

import { useEffect, useMemo, useState, type ChangeEvent, type MouseEvent as ReactMouseEvent } from "react";
import Link from "next/link";
import { renderChemistry } from "@/lib/renderChemistry";
import {
  ALL_RECALL_CARDS,
  RECALL_DECKS,
  type RecallCard,
  type RecallDeckKey,
} from "@/lib/recall/generatedDecks";

type CardResult = "got" | "practice";
type SavedProgress = Record<string, { result: CardResult; updatedAt: number }>;

const STORAGE_KEY = "sb_recall_progress_v2";

function loadProgress(): SavedProgress {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as SavedProgress) : {};
  } catch {
    return {};
  }
}

function saveProgress(progress: SavedProgress): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // Device storage is optional; the current session still works.
  }
}

function DeckProgress({ cards, progress }: { cards: RecallCard[]; progress: SavedProgress }) {
  const got = cards.filter((card) => progress[card.id]?.result === "got").length;
  const practice = cards.filter((card) => progress[card.id]?.result === "practice").length;
  const seen = got + practice;
  const percentage = cards.length > 0 ? Math.round((got / cards.length) * 100) : 0;
  return (
    <div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.07]"><div className="h-full rounded-full bg-emerald-400 transition-[width]" style={{ width: `${percentage}%` }} /></div>
      <div className="mt-2 flex items-center justify-between text-[11px] text-white/40">
        <span>{seen === 0 ? "Not started" : `${got} known · ${practice} to practise`}</span>
        <span className="font-bold text-emerald-300">{percentage}%</span>
      </div>
    </div>
  );
}

function CardPalette({ cards, current, progress, sessionResults, onJump, onClose }: { cards: RecallCard[]; current: number; progress: SavedProgress; sessionResults: Record<string, CardResult>; onJump: (index: number) => void; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-end bg-black/65 p-0 sm:items-center sm:justify-center sm:p-6" onMouseDown={(event: ReactMouseEvent<HTMLDivElement>) => { if (event.currentTarget === event.target) onClose(); }}>
      <div className="max-h-[82vh] w-full overflow-y-auto rounded-t-3xl border border-white/10 bg-[#111827] p-5 shadow-2xl sm:max-w-xl sm:rounded-3xl">
        <div className="flex items-center justify-between"><div><h3 className="font-black text-white">All cards</h3><p className="mt-1 text-xs text-white/40">Jump directly to any card.</p></div><button type="button" onClick={onClose} className="rounded-lg border border-white/10 px-3 py-1.5 text-sm text-white/60">Close</button></div>
        <div className="mt-4 grid grid-cols-6 gap-2 sm:grid-cols-10">
          {cards.map((card, index) => {
            const status = sessionResults[card.id] ?? progress[card.id]?.result;
            const tone = index === current ? "border-cyan-300 bg-cyan-500/20 text-white" : status === "got" ? "border-emerald-400/45 bg-emerald-500/10 text-emerald-200" : status === "practice" ? "border-rose-400/45 bg-rose-500/10 text-rose-200" : "border-white/10 bg-white/[0.03] text-white/45";
            return <button type="button" key={card.id} onClick={() => { onJump(index); onClose(); }} className={`aspect-square rounded-lg border text-xs font-bold ${tone}`}>{index + 1}</button>;
          })}
        </div>
      </div>
    </div>
  );
}

export default function RecallDecksExperience() {
  const [progress, setProgress] = useState<SavedProgress>({});
  const [selectedDeck, setSelectedDeck] = useState<RecallDeckKey | null>(null);
  const [search, setSearch] = useState("");
  const [importantOnly, setImportantOnly] = useState(false);
  const [rapidMode, setRapidMode] = useState(false);
  const [sessionCards, setSessionCards] = useState<RecallCard[]>([]);
  const [current, setCurrent] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [sessionResults, setSessionResults] = useState<Record<string, CardResult>>({});
  const [missed, setMissed] = useState<RecallCard[]>([]);
  const [done, setDone] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    // Deferred so hydration paints the server markup before the client-only
    // localStorage/URL state is applied.
    const id = window.setTimeout(() => {
      setProgress(loadProgress());
      const rawDeck = new URLSearchParams(window.location.search).get("deck");
      const found = RECALL_DECKS.find((deck) => deck.key === rawDeck);
      if (found) setSelectedDeck(found.key);
    }, 0);
    return () => window.clearTimeout(id);
  }, []);

  const searchMatches = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return [];
    return ALL_RECALL_CARDS.filter((card) => [card.front, card.back, card.chapter, ...card.tags].some((value) => value.toLowerCase().includes(query))).slice(0, 30);
  }, [search]);

  const startCards = (cards: RecallCard[]) => {
    const filtered = importantOnly ? cards.filter((card) => card.important) : cards;
    setSessionCards(filtered);
    setCurrent(0);
    setFlipped(rapidMode);
    setSessionResults({});
    setMissed([]);
    setDone(false);
  };

  const startDeck = (deck: RecallDeckKey) => {
    setSelectedDeck(deck);
    startCards(ALL_RECALL_CARDS.filter((card) => card.deck === deck));
  };

  const grade = (result: CardResult) => {
    const card = sessionCards[current];
    if (!card) return;
    const nextProgress = { ...progress, [card.id]: { result, updatedAt: Date.now() } };
    setProgress(nextProgress);
    saveProgress(nextProgress);
    setSessionResults((previous) => ({ ...previous, [card.id]: result }));
    if (result === "practice") setMissed((previous) => previous.some((item) => item.id === card.id) ? previous : [...previous, card]);
    if (current >= sessionCards.length - 1) {
      setDone(true);
      setFlipped(false);
    } else {
      setCurrent((value) => value + 1);
      setFlipped(rapidMode);
    }
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement || event.target instanceof HTMLSelectElement) return;
      if (paletteOpen && event.key === "Escape") { setPaletteOpen(false); return; }
      if (sessionCards.length === 0 || done) return;
      if (event.key === " " && !flipped) { event.preventDefault(); setFlipped(true); }
      if ((event.key === "g" || event.key === "G") && flipped) grade("got");
      if ((event.key === "n" || event.key === "N") && flipped) grade("practice");
      if (event.key === "ArrowLeft") { event.preventDefault(); setCurrent((value) => Math.max(0, value - 1)); setFlipped(rapidMode); }
      if (event.key === "ArrowRight") { event.preventDefault(); setCurrent((value) => Math.min(sessionCards.length - 1, value + 1)); setFlipped(rapidMode); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const card = sessionCards[current];
  const gotThisSession = Object.values(sessionResults).filter((result) => result === "got").length;
  const practiseThisSession = Object.values(sessionResults).filter((result) => result === "practice").length;

  if (sessionCards.length > 0) {
    if (done) {
      return (
        <div className="space-y-5">
          <button type="button" onClick={() => { setSessionCards([]); setDone(false); }} className="text-sm font-semibold text-white/55 hover:text-white">← Recall Decks</button>
          <section className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/12 to-violet-500/10 p-7 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">Deck complete</p>
            <h1 className="mt-3 text-3xl font-black text-white">{gotThisSession}/{sessionCards.length} remembered</h1>
            <p className="mt-2 text-sm text-white/50">{missed.length > 0 ? "Run the missed cards once more while the correction is fresh." : "Strong recall. Move to another deck or review again later."}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {missed.length > 0 && <button type="button" onClick={() => startCards(missed)} className="rounded-xl bg-rose-400 px-4 py-2 text-sm font-black text-slate-950">Practise missed ({missed.length})</button>}
              <button type="button" onClick={() => startCards(sessionCards)} className="rounded-xl border border-white/12 bg-white/[0.05] px-4 py-2 text-sm font-bold text-white/75">Restart deck</button>
              <button type="button" onClick={() => { setSessionCards([]); setDone(false); }} className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-black text-slate-950">All decks</button>
            </div>
          </section>
        </div>
      );
    }

    if (!card) return <div />;
    const percentage = Math.round(((current + 1) / sessionCards.length) * 100);
    return (
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <button type="button" onClick={() => setSessionCards([])} className="text-sm font-semibold text-white/55 hover:text-white">← All decks</button>
          <div className="flex flex-wrap items-center gap-2">
            <label className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-bold text-white/60"><span>⚡ Rapid mode</span><input type="checkbox" checked={rapidMode} onChange={(event: ChangeEvent<HTMLInputElement>) => { setRapidMode(event.target.checked); if (event.target.checked) setFlipped(true); }} className="accent-cyan-400" /></label>
            <button type="button" onClick={() => setPaletteOpen(true)} className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-bold text-white/60">All cards</button>
          </div>
        </div>

        <div className="rounded-2xl border border-white/[0.08] bg-[#111827] p-4">
          <div className="flex items-center justify-between text-xs text-white/45"><span>Got: <strong className="text-emerald-300">{gotThisSession}</strong> · Practice: <strong className="text-rose-300">{practiseThisSession}</strong></span><span>{current + 1}/{sessionCards.length}</span></div>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.07]"><div className="h-full rounded-full bg-cyan-400" style={{ width: `${percentage}%` }} /></div>
        </div>

        <button type="button" onClick={() => { if (!flipped) setFlipped(true); }} className="block min-h-[360px] w-full rounded-3xl border border-white/[0.1] bg-[#111827] p-6 text-left shadow-2xl shadow-black/20 transition hover:border-cyan-400/25 sm:min-h-[430px] sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-[11px] font-bold text-cyan-300">{RECALL_DECKS.find((deck) => deck.key === card.deck)?.title}</span>
            <span className="text-[11px] text-white/35">{card.chapter}{card.important ? " · Important" : ""}</span>
          </div>
          <div className="flex min-h-[250px] flex-col items-center justify-center text-center sm:min-h-[310px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/35">{flipped ? "Answer / key point" : "Recall prompt"}</p>
            <div className="mt-5 max-w-3xl text-lg font-bold leading-8 text-white sm:text-2xl sm:leading-10">{renderChemistry(flipped ? card.back : card.front)}</div>
            {flipped && card.note && <div className="mt-5 max-w-3xl rounded-xl border border-white/[0.07] bg-white/[0.025] p-3 text-sm leading-6 text-white/55">{renderChemistry(card.note)}</div>}
            {!flipped && <p className="mt-7 text-xs text-white/30">Tap card or press Space to reveal</p>}
          </div>
        </button>

        {!flipped ? (
          <button type="button" onClick={() => setFlipped(true)} className="w-full rounded-xl bg-cyan-400 px-5 py-3 text-sm font-black text-slate-950">Reveal answer</button>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            <button type="button" onClick={() => grade("practice")} className="rounded-xl border border-rose-400/30 bg-rose-500/10 px-5 py-3 text-sm font-black text-rose-200">Need practice</button>
            <button type="button" onClick={() => grade("got")} className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 px-5 py-3 text-sm font-black text-emerald-200">Got it ✓</button>
          </div>
        )}

        <div className="flex items-center justify-between text-xs text-white/35"><button type="button" disabled={current === 0} onClick={() => { setCurrent((value) => Math.max(0, value - 1)); setFlipped(rapidMode); }} className="disabled:opacity-30">← Previous</button><span className="hidden sm:inline">Space = reveal · G = got it · N = need practice · ← → = navigate</span><button type="button" disabled={current >= sessionCards.length - 1} onClick={() => { setCurrent((value) => Math.min(sessionCards.length - 1, value + 1)); setFlipped(rapidMode); }} className="disabled:opacity-30">Next →</button></div>
        {paletteOpen && <CardPalette cards={sessionCards} current={current} progress={progress} sessionResults={sessionResults} onJump={(index) => { setCurrent(index); setFlipped(rapidMode); }} onClose={() => setPaletteOpen(false)} />}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <header>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-300">Revision</p>
        <h1 className="mt-2 text-3xl font-black text-white sm:text-4xl">Recall Decks</h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-white/50">Active recall for formulas, reagents, facts, reactions and inorganic NCERT. Progress is saved on this device.</p>
      </header>

      <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto]">
        <label className="relative"><span className="pointer-events-none absolute left-4 top-3.5 text-white/30">⌕</span><input value={search} onChange={(event: ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)} placeholder="Search cards, chapters, reagents or reactions…" className="w-full rounded-xl border border-white/10 bg-[#111827] py-3 pl-10 pr-4 text-sm text-white outline-none placeholder:text-white/25 focus:border-cyan-300/50" /></label>
        <label className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-[#111827] px-4 py-3 text-sm font-bold text-white/60"><input type="checkbox" checked={importantOnly} onChange={(event: ChangeEvent<HTMLInputElement>) => setImportantOnly(event.target.checked)} className="accent-amber-400" /> Important only</label>
      </div>

      {search.trim() ? (
        <section>
          <div className="mb-3 flex items-center justify-between"><h2 className="font-black text-white">Search results</h2><span className="text-xs text-white/35">{searchMatches.length} shown</span></div>
          {searchMatches.length === 0 ? <div className="rounded-2xl border border-dashed border-white/10 p-8 text-center text-sm text-white/45">No matching recall cards.</div> : (
            <div className="grid gap-2 md:grid-cols-2">
              {searchMatches.map((card) => <button type="button" key={card.id} onClick={() => startCards([card, ...ALL_RECALL_CARDS.filter((item) => item.deck === card.deck && item.id !== card.id)])} className="rounded-xl border border-white/[0.08] bg-[#111827] p-4 text-left transition hover:border-cyan-400/30"><p className="text-xs font-bold text-cyan-300">{card.chapter}</p><div className="mt-2 line-clamp-2 text-sm font-semibold leading-6 text-white/75">{renderChemistry(card.front)}</div></button>)}
            </div>
          )}
        </section>
      ) : (
        <div className="grid gap-3 md:grid-cols-2">
          {RECALL_DECKS.map((deck) => {
            const cards = ALL_RECALL_CARDS.filter((card) => card.deck === deck.key);
            const visible = importantOnly ? cards.filter((card) => card.important) : cards;
            return (
              <button type="button" key={deck.key} onClick={() => startDeck(deck.key)} disabled={visible.length === 0} className="rounded-2xl border border-white/[0.08] bg-[#111827] p-5 text-left transition hover:-translate-y-0.5 hover:border-cyan-400/30 disabled:cursor-not-allowed disabled:opacity-45">
                <div className="flex items-start justify-between gap-3"><div className="flex items-start gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-lg text-cyan-300">{deck.icon}</span><div><h2 className="font-black text-white">{deck.title}</h2><p className="mt-1 text-xs leading-5 text-white/45">{deck.description}</p></div></div><span className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-bold text-white/50">{visible.length} cards</span></div>
                <div className="mt-5"><DeckProgress cards={visible} progress={progress} /></div>
              </button>
            );
          })}
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 text-sm text-white/45">
        <span>{ALL_RECALL_CARDS.length} source-derived recall cards available.</span>
        <div className="flex gap-3"><Link href="/revision" className="font-bold text-cyan-300">Revision Queue</Link><button type="button" onClick={() => { if (window.confirm("Clear all saved recall progress on this device?")) { saveProgress({}); setProgress({}); } }} className="font-semibold text-white/40 hover:text-rose-300">Clear progress</button></div>
      </div>
    </div>
  );
}
