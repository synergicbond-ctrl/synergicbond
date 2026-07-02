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
    <article className="flex h-full min-w-0 flex-col rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="break-words text-[11px] font-bold uppercase tracking-wide text-indigo-600">{card.topic}</p>
          <h2 className="mt-1 break-words text-lg font-black leading-tight text-slate-950">{card.name}</h2>
        </div>
        <span className="rounded-md bg-slate-100 px-2 py-1 text-[11px] font-bold text-slate-600">
          Class {card.ncertReference.class}
        </span>
      </div>

      <div className="mt-4 overflow-x-auto rounded-lg border border-indigo-100 bg-indigo-50 p-3 font-mono text-sm font-bold text-indigo-950">
        {card.formula}
      </div>

      <div className="mt-4 grid gap-3 text-sm text-slate-700">
        <div>
          <p className="text-[11px] font-black uppercase tracking-wide text-slate-400">Variables</p>
          <ul className="mt-1 list-inside list-disc space-y-1">
            {card.variables.map((variable) => (
              <li key={variable} className="break-words">{variable}</li>
            ))}
          </ul>
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          <div className="rounded-md bg-slate-50 p-3">
            <p className="text-[11px] font-black uppercase tracking-wide text-slate-400">Units</p>
            <p className="mt-1 break-words font-semibold text-slate-800">{card.units}</p>
          </div>
          <div className="rounded-md bg-slate-50 p-3">
            <p className="text-[11px] font-black uppercase tracking-wide text-slate-400">NCERT</p>
            <p className="mt-1 break-words font-semibold text-slate-800">
              {card.ncertReference.chapter}
            </p>
          </div>
        </div>

        <div>
          <p className="text-[11px] font-black uppercase tracking-wide text-slate-400">Derivation</p>
          <p className="mt-1 break-words leading-relaxed">{card.derivation}</p>
        </div>

        {card.exceptions.length > 0 && (
          <div className="rounded-md border border-amber-200 bg-amber-50 p-3 text-amber-900">
            <p className="text-[11px] font-black uppercase tracking-wide text-amber-600">Exceptions</p>
            <p className="mt-1 break-words">{card.exceptions.join("; ")}</p>
          </div>
        )}
      </div>

      <div className="mt-auto flex flex-wrap gap-2 pt-4">
        {card.relatedPYQ.map((pyqId) => (
          <Link
            key={pyqId}
            href={`/pyq?pyq=${encodeURIComponent(pyqId)}`}
            className="max-w-full break-words rounded-md border border-cyan-200 bg-cyan-50 px-2.5 py-1 text-xs font-bold text-cyan-800 transition hover:border-cyan-400"
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
    <main className="min-h-screen bg-slate-50 px-4 py-6 text-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <header className="flex flex-col gap-4 border-b border-slate-200 pb-5 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl font-black tracking-tight sm:text-4xl">Formula Cards</h1>
            <p className="mt-2 text-sm font-medium text-slate-500">
              {formulas.length} of {totalFormulaCount} verified cards
            </p>
          </div>
          <Link href="/vault/formulas" className="w-fit rounded-md border border-slate-300 px-3 py-2 text-sm font-bold text-slate-700 hover:bg-white">
            Vault
          </Link>
        </header>

        <section className="grid gap-3 rounded-lg border border-slate-200 bg-white p-3 shadow-sm md:grid-cols-[1fr_280px]">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search formula, variable, unit, PYQ, or NCERT topic"
            className="min-h-11 rounded-md border border-slate-200 px-3 text-sm font-semibold outline-none focus:border-indigo-500"
          />
          <select
            value={chapter}
            onChange={(event) => setChapter(event.target.value)}
            className="min-h-11 rounded-md border border-slate-200 px-3 text-sm font-semibold outline-none focus:border-indigo-500"
          >
            <option value="">All chapters</option>
            {chapters.map((item) => (
              <option key={item.chapter} value={item.chapter}>
                {item.chapter} ({item.count})
              </option>
            ))}
          </select>
          {pyqId && (
            <div className="flex items-center justify-between rounded-md border border-cyan-200 bg-cyan-50 px-3 py-2 text-sm font-bold text-cyan-900 md:col-span-2">
              <span>PYQ {pyqId}</span>
              <button onClick={() => setPyqId("")} className="rounded-md px-2 py-1 text-xs hover:bg-cyan-100">
                Clear
              </button>
            </div>
          )}
        </section>

        <div className="flex gap-2 overflow-x-auto pb-1">
          <button
            onClick={() => setChapter("")}
            className={`shrink-0 rounded-md border px-3 py-2 text-xs font-black ${chapter ? "border-slate-200 bg-white text-slate-600" : "border-indigo-600 bg-indigo-600 text-white"}`}
          >
            All
          </button>
          {chapters.map((item) => (
            <button
              key={item.chapter}
              onClick={() => setChapter(item.chapter)}
            className={`shrink-0 rounded-md border px-3 py-2 text-xs font-black ${chapter === item.chapter ? "border-indigo-600 bg-indigo-600 text-white" : "border-slate-200 bg-white text-slate-600"}`}
            >
              {item.chapter}
            </button>
          ))}
        </div>

        {formulas.length === 0 ? (
          <div className="rounded-lg border border-dashed border-slate-300 bg-white p-10 text-center text-sm font-bold text-slate-500">
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
    <Suspense fallback={<main className="min-h-screen bg-slate-50" />}>
      <FormulaCardsContent />
    </Suspense>
  );
}
