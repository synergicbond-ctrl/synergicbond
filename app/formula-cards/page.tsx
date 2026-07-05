"use client";

import { Suspense, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  getFormulaChapterSummaries,
  queryFormulaCards,
  type FormulaSearchResult,
} from "@/lib/chemistry/formulas";
import { PREVIEW_LIMITS, slicePreview } from "@/lib/monetization/preview";
import { useUnlocked } from "@/components/monetization/useUnlocked";
import UnlockBanner from "@/components/monetization/UnlockBanner";

const chapters = getFormulaChapterSummaries();
const totalFormulaCount = chapters.reduce((sum, chapter) => sum + chapter.count, 0);

function FormulaCardView({ card }: { card: FormulaSearchResult }) {
  return (
    <article className="flex h-full min-w-0 flex-col rounded-2xl border border-white/[0.08] bg-[#111827] p-5 shadow-sm hover:border-white/15 transition duration-200">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="break-words text-[11px] font-bold uppercase tracking-wide text-cyan-400">{card.topic}</p>
          <h2 className="mt-1 break-words text-lg font-black leading-tight text-white">{card.name}</h2>
        </div>
        <span className="rounded-md bg-white/[0.06] px-2 py-1 text-[11px] font-bold text-white/60">
          Class {card.ncertReference.class}
        </span>
      </div>

      <div className="mt-4 overflow-x-auto rounded-xl border border-cyan-500/20 bg-cyan-950/20 p-3.5 font-mono text-sm font-bold text-cyan-300">
        {card.formula}
      </div>

      <div className="mt-4 grid gap-3 text-sm text-white/70">
        <div>
          <p className="text-[10px] font-black uppercase tracking-wide text-white/40">Variables</p>
          <ul className="mt-1 list-inside list-disc space-y-1 text-xs">
            {card.variables.map((variable) => (
              <li key={variable} className="break-words text-white/60">{variable}</li>
            ))}
          </ul>
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          <div className="rounded-xl bg-white/[0.03] p-3 border border-white/[0.05]">
            <p className="text-[10px] font-black uppercase tracking-wide text-white/40">Units</p>
            <p className="mt-1 break-words font-semibold text-white/80 text-xs">{card.units}</p>
          </div>
          <div className="rounded-xl bg-white/[0.03] p-3 border border-white/[0.05]">
            <p className="text-[10px] font-black uppercase tracking-wide text-white/40">NCERT</p>
            <p className="mt-1 break-words font-semibold text-white/80 text-xs">
              {card.ncertReference.chapter}
            </p>
          </div>
        </div>

        <div>
          <p className="text-[10px] font-black uppercase tracking-wide text-white/40">Derivation</p>
          <p className="mt-1 break-words leading-relaxed text-xs text-white/60">{card.derivation}</p>
        </div>

        {card.exceptions.length > 0 && (
          <div className="rounded-xl border border-amber-500/20 bg-amber-500/[0.06] p-3 text-amber-200 text-xs">
            <p className="text-[10px] font-black uppercase tracking-wide text-amber-400">Exceptions</p>
            <p className="mt-1 break-words leading-relaxed">{card.exceptions.join("; ")}</p>
          </div>
        )}
      </div>

      <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
        {card.relatedPYQ.map((pyqId) => (
          <Link
            key={pyqId}
            href={`/pyq?pyq=${encodeURIComponent(pyqId)}`}
            className="max-w-full break-words rounded-md border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1 text-xs font-bold text-cyan-300 transition hover:border-cyan-400/50"
          >
            PYQ {pyqId}
          </Link>
        ))}
      </div>
    </article>
  );
}

function FormulaCardsContent() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(() => searchParams.get("id") || searchParams.get("q") || "");
  const [chapter, setChapter] = useState(() => searchParams.get("chapter") || "");
  const [pyqId, setPyqId] = useState(() => searchParams.get("pyq") || searchParams.get("pyqId") || "");

  const unlocked = useUnlocked();
  const allMatches = useMemo(
    () => queryFormulaCards({ query, chapter, pyqId, limit: 200 }),
    [query, chapter, pyqId]
  );
  // Preview Mode: free users browse a real slice; Pro sees everything.
  const { visible: formulas, locked } = slicePreview(allMatches, PREVIEW_LIMITS.formulas, unlocked);

  return (
    <main className="min-h-screen bg-[#0B0F19] text-white px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <header className="flex flex-col gap-4 border-b border-white/[0.08] pb-5 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl font-black tracking-tight sm:text-4xl">Formula Cards</h1>
            <p className="mt-2 text-sm font-medium text-white/50">
              {formulas.length} of {totalFormulaCount} verified cards
            </p>
          </div>
          <Link href="/vault/formulas" className="w-fit rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-bold text-white/80 hover:bg-white/[0.08] transition">
            Vault
          </Link>
        </header>

        <section className="grid gap-3 rounded-2xl border border-white/[0.08] bg-[#111827] p-3 shadow-sm md:grid-cols-[1fr_280px]">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search formula, variable, unit, PYQ, or NCERT topic"
            className="min-h-11 rounded-xl border border-white/10 bg-black/20 px-3 text-sm font-semibold text-white outline-none focus:border-cyan-400/40 placeholder:text-white/30"
          />
          <select
            value={chapter}
            onChange={(event) => setChapter(event.target.value)}
            className="min-h-11 rounded-xl border border-white/10 bg-black/20 px-3 text-sm font-semibold text-white/80 outline-none focus:border-cyan-400/40"
          >
            <option value="" className="bg-[#111827]">All chapters</option>
            {chapters.map((item) => (
              <option key={item.chapter} value={item.chapter} className="bg-[#111827]">
                {item.chapter} ({item.count})
              </option>
            ))}
          </select>
          {pyqId && (
            <div className="flex items-center justify-between rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-3 py-2 text-sm font-bold text-cyan-300 md:col-span-2">
              <span>PYQ {pyqId}</span>
              <button onClick={() => setPyqId("")} className="rounded-lg px-2 py-1 text-xs hover:bg-cyan-500/20">
                Clear
              </button>
            </div>
          )}
        </section>

        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setChapter("")}
            className={`shrink-0 rounded-xl border px-3 py-2 text-xs font-black transition ${chapter ? "border-white/10 bg-white/[0.03] text-white/60" : "border-cyan-400/40 bg-cyan-500/15 text-cyan-300"}`}
          >
            All
          </button>
          {chapters.map((item) => (
            <button
              key={item.chapter}
              onClick={() => setChapter(item.chapter)}
              className={`shrink-0 rounded-xl border px-3 py-2 text-xs font-black transition ${chapter === item.chapter ? "border-cyan-400/40 bg-cyan-500/15 text-cyan-300" : "border-white/10 bg-white/[0.03] text-white/60"}`}
            >
              {item.chapter}
            </button>
          ))}
        </div>

        {formulas.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-white/10 bg-[#111827] p-10 text-center text-sm font-bold text-white/40">
            No formula cards match this filter.
          </div>
        ) : (
          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {formulas.map((card) => (
              <FormulaCardView key={card.id} card={card} />
            ))}
          </section>
        )}

        {locked > 0 && (
          <UnlockBanner available={PREVIEW_LIMITS.formulas} total={totalFormulaCount} itemLabel="formula cards" />
        )}
      </div>
    </main>
  );
}

export default function FormulaCardsPage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-[#0B0F19]" />}>
      <FormulaCardsContent />
    </Suspense>
  );
}
