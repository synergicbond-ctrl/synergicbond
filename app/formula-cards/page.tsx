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
    <article className="flex h-full min-w-0 flex-col rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 hover:border-[var(--accent)]/30 transition duration-200">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="break-words text-[11px] font-bold uppercase tracking-wide text-[var(--text-muted)]">{card.topic}</p>
          <h2 className="mt-1 break-words text-lg font-black leading-tight text-[var(--foreground)]">{card.name}</h2>
        </div>
        <span className="rounded bg-[var(--surface-2)] px-2 py-1 text-[11px] font-bold text-[var(--text-muted)]">
          Class {card.ncertReference.class}
        </span>
      </div>

      <div className="mt-4 overflow-x-auto rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-3.5 font-mono text-sm font-bold text-[var(--foreground)]">
        {card.formula}
      </div>

      <div className="mt-4 grid gap-3 text-sm text-[var(--text-muted)]">
        <div>
          <p className="text-[10px] font-black uppercase tracking-wide text-[var(--text-muted)]">Variables</p>
          <ul className="mt-1 list-inside list-disc space-y-1 text-xs">
            {card.variables.map((variable) => (
              <li key={variable} className="break-words text-[var(--text-muted)]">{variable}</li>
            ))}
          </ul>
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          <div className="rounded-lg bg-[var(--surface-2)] p-3 border border-[var(--border)]">
            <p className="text-[10px] font-black uppercase tracking-wide text-[var(--text-muted)]">Units</p>
            <p className="mt-1 break-words font-semibold text-[var(--foreground)] text-xs">{card.units}</p>
          </div>
          <div className="rounded-lg bg-[var(--surface-2)] p-3 border border-[var(--border)]">
            <p className="text-[10px] font-black uppercase tracking-wide text-[var(--text-muted)]">NCERT</p>
            <p className="mt-1 break-words font-semibold text-[var(--foreground)] text-xs">
              {card.ncertReference.chapter}
            </p>
          </div>
        </div>

        <div>
          <p className="text-[10px] font-black uppercase tracking-wide text-[var(--text-muted)]">Derivation</p>
          <p className="mt-1 break-words leading-relaxed text-xs text-[var(--text-muted)]">{card.derivation}</p>
        </div>

        {card.exceptions.length > 0 && (
          <div className="rounded-lg border border-amber-500/20 bg-amber-500/[0.06] p-3 text-amber-200 text-xs">
            <p className="text-[10px] font-black uppercase tracking-wide text-amber-400">Exceptions</p>
            <p className="mt-1 break-words leading-relaxed">{card.exceptions.join("; ")}</p>
          </div>
        )}
      </div>

      <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-[var(--border)]">
        {card.relatedPYQ.map((pyqId) => (
          <Link
            key={pyqId}
            href={`/pyq?pyq=${encodeURIComponent(pyqId)}`}
            className="max-w-full break-words rounded border border-[var(--border)] bg-[var(--surface-2)] px-2.5 py-1 text-xs font-bold text-[var(--accent)] transition hover:border-[var(--accent)]/50"
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
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <header className="flex flex-col gap-4 border-b border-[var(--border)] pb-5 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl font-black tracking-tight sm:text-4xl">Formula Cards</h1>
            <p className="mt-2 text-sm font-medium text-[var(--text-muted)]">
              {formulas.length} of {totalFormulaCount} verified cards
            </p>
          </div>
          <Link href="/vault/formulas" className="w-fit rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-bold text-[var(--text-muted)] hover:border-[var(--accent)]/40 transition">
            Vault
          </Link>
        </header>

        <section className="grid gap-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-3 md:grid-cols-[1fr_280px]">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search formula, variable, unit, PYQ, or NCERT topic"
            className="min-h-11 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] px-3 text-sm font-semibold text-[var(--foreground)] outline-none focus:border-[var(--accent)] placeholder:text-[var(--text-muted)]"
          />
          <select
            value={chapter}
            onChange={(event) => setChapter(event.target.value)}
            className="min-h-11 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] px-3 text-sm font-semibold text-[var(--text-muted)] outline-none focus:border-[var(--accent)]"
          >
            <option value="" className="bg-[var(--surface-2)]">All chapters</option>
            {chapters.map((item) => (
              <option key={item.chapter} value={item.chapter} className="bg-[var(--surface-2)]">
                {item.chapter} ({item.count})
              </option>
            ))}
          </select>
          {pyqId && (
            <div className="flex items-center justify-between rounded-lg border border-[var(--border)] bg-[var(--surface-2)] px-3 py-2 text-sm font-bold text-[var(--text-muted)] md:col-span-2">
              <span>PYQ {pyqId}</span>
              <button onClick={() => setPyqId("")} className="rounded px-2 py-1 text-xs hover:bg-[var(--surface)]">
                Clear
              </button>
            </div>
          )}
        </section>

        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setChapter("")}
            className={`shrink-0 rounded-lg border px-3 py-2 text-xs font-black transition ${chapter ? "border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)]" : "border-[var(--accent)]/40 bg-[var(--accent)]/10 text-[var(--accent)]"}`}
          >
            All
          </button>
          {chapters.map((item) => (
            <button
              key={item.chapter}
              onClick={() => setChapter(item.chapter)}
              className={`shrink-0 rounded-lg border px-3 py-2 text-xs font-black transition ${chapter === item.chapter ? "border-[var(--accent)]/40 bg-[var(--accent)]/10 text-[var(--accent)]" : "border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)]"}`}
            >
              {item.chapter}
            </button>
          ))}
        </div>

        {formulas.length === 0 ? (
          <div className="rounded-lg border border-dashed border-[var(--border)] bg-[var(--surface)] p-10 text-center text-sm font-bold text-[var(--text-muted)]">
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
    <Suspense fallback={<main className="min-h-screen bg-[var(--background)]" />}>
      <FormulaCardsContent />
    </Suspense>
  );
}
