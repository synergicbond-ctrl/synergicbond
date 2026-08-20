"use client";

import { type ReactNode } from "react";
import { DIPOLE_MOMENT_PARTS } from "./part-metadata";
import { DIPOLE_STRUCTURES } from "./dipole-structures";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

/**
 * Dipole Moment — JEE Advanced / Chemical Bonding
 *
 * Shared shell + content primitives for the 9-part rebuild. Mirrors the
 * PartShell/ConceptCard/FormulaCard/WorkedExample/ExamTrap/DataTable pattern
 * established in chemical-kinetics-shared.tsx and surface-chemistry-shared.tsx
 * so this chapter matches its siblings instead of being a one-off page.
 *
 * Color rule (deliberately restrictive): gold/amber is reserved for KeyIdea,
 * rose is reserved for ExamTrap, green only appears inside structures/tables
 * to mark a chemically real reinforcing direction. There is no automatic
 * keyword highlighter — emphasis in prose is a manual <strong>, never a
 * color keyed off a regex match.
 */

type CardTone = "navy" | "cyan" | "violet" | "amber" | "emerald" | "rose";

type ConceptCardProps = {
  title: string;
  tone?: CardTone;
  eyebrow?: string;
  children: ReactNode;
};

type WorkedExampleProps = {
  number: number;
  title: string;
  difficulty?: "Foundation" | "JEE Main+" | "JEE Advanced";
  concept: string;
  question: ReactNode;
  solution: ReactNode;
  answer: ReactNode;
};

type ChapterSectionProps = {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  intro: ReactNode;
  children: ReactNode;
};

const toneClass: Record<CardTone, string> = {
  navy: "border-slate-700/80 bg-slate-950/70",
  cyan: "border-cyan-400/25 bg-cyan-400/[0.055]",
  violet: "border-violet-400/25 bg-violet-400/[0.055]",
  amber: "border-amber-400/25 bg-amber-400/[0.055]",
  emerald: "border-emerald-400/25 bg-emerald-400/[0.055]",
  rose: "border-rose-400/25 bg-rose-400/[0.055]",
};

const badgeClass: Record<CardTone, string> = {
  navy: "border-slate-600 bg-slate-900 text-slate-300",
  cyan: "border-cyan-400/25 bg-cyan-400/10 text-cyan-200",
  violet: "border-violet-400/25 bg-violet-400/10 text-violet-200",
  amber: "border-amber-400/25 bg-amber-400/10 text-amber-200",
  emerald: "border-emerald-400/25 bg-emerald-400/10 text-emerald-200",
  rose: "border-rose-400/25 bg-rose-400/10 text-rose-200",
};

function K({ children }: { children: string }) {
  return <InlineMath math={children} />;
}

function KB({ children }: { children: string }) {
  return <BlockMath math={children} />;
}

function ConceptCard({ title, tone = "navy", eyebrow, children }: ConceptCardProps) {
  return (
    <article className={`rounded-lg border p-5 shadow-[0_18px_70px_-40px_rgba(0,0,0,0.85)] backdrop-blur-sm sm:p-6 ${toneClass[tone]}`}>
      {eyebrow ? (
        <div className={`mb-3 inline-flex rounded-full border px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.17em] ${badgeClass[tone]}`}>
          {eyebrow}
        </div>
      ) : null}
      <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">{title}</h3>
      <div className="mt-3 space-y-3 text-[15px] leading-7 text-slate-300">{children}</div>
    </article>
  );
}

function FormulaCard({ title, children, note }: { title: string; children: ReactNode; note?: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-lg border border-cyan-300/20 bg-gradient-to-br from-cyan-300/[0.08] via-slate-950/80 to-violet-400/[0.08] shadow-[0_24px_80px_-48px_rgba(34,211,238,0.5)]">
      <div className="border-b border-white/10 px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">{title}</div>
      <div className="formula-scroll overflow-x-auto px-4 py-5 text-slate-100 sm:px-6">{children}</div>
      {note ? <div className="border-t border-white/10 px-5 py-3 text-sm leading-6 text-slate-400">{note}</div> : null}
    </div>
  );
}

function ExamTrap({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg border border-rose-400/25 bg-rose-400/[0.065] px-4 py-3 text-sm leading-6 text-rose-100">
      <span className="mr-2 font-black uppercase tracking-[0.13em] text-rose-300">Warning / limitation</span>
      {children}
    </div>
  );
}

function KeyIdea({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg border border-amber-300/25 bg-amber-300/[0.06] px-4 py-3 text-sm leading-6 text-amber-50">
      <span className="mr-2 font-black uppercase tracking-[0.13em] text-amber-200">JEE key idea</span>
      {children}
    </div>
  );
}

function DataTable({ headers, rows }: { headers: ReactNode[]; rows: ReactNode[][] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-white/10">
      <table className="min-w-full border-collapse text-left text-sm">
        <thead className="bg-white/[0.055] text-slate-200">
          <tr>{headers.map((header, i) => <th key={i} className="border-b border-white/10 px-4 py-3 font-semibold">{header}</th>)}</tr>
        </thead>
        <tbody className="divide-y divide-white/[0.075] text-slate-300">
          {rows.map((row, r) => (
            <tr key={r} className="transition hover:bg-white/[0.025]">
              {row.map((cell, c) => <td key={c} className="px-4 py-3 align-top">{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FigureFrame({ title, caption, children }: { title: string; caption: ReactNode; children: ReactNode }) {
  return (
    <figure className="overflow-hidden rounded-lg border border-white/10 bg-slate-950/75">
      <div className="border-b border-white/10 px-5 py-3 text-sm font-semibold text-slate-200">{title}</div>
      <div className="overflow-x-auto p-3 sm:p-5">{children}</div>
      <figcaption className="border-t border-white/10 px-5 py-3 text-sm leading-6 text-slate-400">{caption}</figcaption>
    </figure>
  );
}

const structureSizeClass: Record<"sm" | "md" | "lg", string> = {
  sm: "max-w-[320px]",
  md: "max-w-[560px]",
  lg: "max-w-[820px]",
};

function DipoleStructureFigure({ id }: { id: string }) {
  const entry = DIPOLE_STRUCTURES[id];
  if (!entry) return null;

  return (
    <figure
      className={`mx-auto w-full overflow-hidden rounded-lg border border-white/10 bg-slate-950/75 ${structureSizeClass[entry.size ?? "md"]}`}
    >
      <div className="p-3 sm:p-5" dangerouslySetInnerHTML={{ __html: entry.svg }} />
      <figcaption className="border-t border-white/10 px-5 py-3 text-sm leading-6 text-slate-400">{entry.caption}</figcaption>
    </figure>
  );
}

function ChapterSection({ id, index, eyebrow, title, intro, children }: ChapterSectionProps) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-white/[0.08] py-14 sm:py-18">
      <div className="mb-8 grid gap-4 lg:grid-cols-[92px_1fr] lg:gap-7">
        <div className="text-5xl font-black tracking-[-0.06em] text-white/[0.12] sm:text-6xl">{index}</div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">{eyebrow}</p>
          <h2 className="mt-2 bg-gradient-to-r from-[#67e4ef] via-[#92baff] to-[#c6a6f7] bg-clip-text text-3xl font-bold tracking-[-0.035em] text-transparent sm:text-4xl">
            {title}
          </h2>
          <div className="mt-4 max-w-4xl text-base leading-8 text-slate-300">{intro}</div>
        </div>
      </div>
      <div className="space-y-6">{children}</div>
    </section>
  );
}

/** Heavier tier for Part D's six factor subsections — visually above ChapterSection's
 * plain sub-content but below the part H2, so a reader can tell "one of six core
 * factors" apart from a one-off worked-example label at a glance. */
function FactorHeading({ symbol, title }: { symbol: string; title: string }) {
  return (
    <h3 className="mt-2 flex items-center gap-3 text-2xl font-bold tracking-[-0.02em] text-white sm:text-[26px]">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-violet-300/30 bg-violet-400/10 text-base font-black text-violet-200">
        {symbol}
      </span>
      {title}
    </h3>
  );
}

function WorkedExample({ number, title, difficulty = "JEE Advanced", concept, question, solution, answer }: WorkedExampleProps) {
  const difficultyClass = difficulty === "Foundation"
    ? "border-emerald-400/25 bg-emerald-400/10 text-emerald-200"
    : difficulty === "JEE Main+"
      ? "border-amber-400/25 bg-amber-400/10 text-amber-100"
      : "border-violet-400/25 bg-violet-400/10 text-violet-100";

  return (
    <details className="group overflow-hidden rounded-lg border border-white/10 bg-slate-950/70 shadow-[0_24px_100px_-60px_rgba(139,92,246,0.8)]" open={number <= 1}>
      <summary className="cursor-pointer list-none px-5 py-5 transition hover:bg-white/[0.025] sm:px-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex min-w-0 gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-violet-300/20 bg-violet-400/10 font-bold text-violet-200">{number}</div>
            <div>
              <h3 className="text-lg font-semibold text-white sm:text-xl">{title}</h3>
              <p className="mt-1 text-sm leading-6 text-slate-400">{concept}</p>
            </div>
          </div>
          <span className={`rounded-full border px-3 py-1 text-xs font-bold ${difficultyClass}`}>{difficulty}</span>
        </div>
        <div className="mt-4 text-[15px] leading-7 text-slate-200">{question}</div>
        <div className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-cyan-300 group-open:hidden">Open full solution</div>
      </summary>
      <div className="border-t border-white/10 px-5 py-5 sm:px-6">
        <div className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-violet-300">Solution</div>
        <div className="space-y-3 text-[15px] leading-7 text-slate-300">{solution}</div>
        <div className="mt-5 rounded-lg border border-emerald-400/25 bg-emerald-400/[0.065] px-4 py-3 text-[15px] leading-7 text-emerald-100">
          <span className="mr-2 font-black uppercase tracking-[0.14em] text-emerald-300">Answer</span>
          {answer}
        </div>
      </div>
    </details>
  );
}

function PartShell({
  part,
  title,
  description,
  children,
}: {
  part: number;
  title: string;
  description: string;
  children: ReactNode;
}) {
  const previous = DIPOLE_MOMENT_PARTS[part - 2];
  const next = DIPOLE_MOMENT_PARTS[part];

  return (
    <main className="dipole-page min-h-screen overflow-x-hidden bg-[#03070b] text-slate-100 antialiased selection:bg-cyan-300/25 selection:text-white">
      <style>{`
        .dipole-page {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif;
          background-image:
            radial-gradient(circle at 8% 3%, rgba(34,211,238,.10), transparent 30rem),
            radial-gradient(circle at 93% 9%, rgba(139,92,246,.10), transparent 32rem);
        }
        .dipole-page .katex { font-size: 1.05em; }
        .dipole-page .katex-display { margin: .35rem 0; }
        .dipole-page summary::-webkit-details-marker { display: none; }
        .dipole-page .formula-scroll::-webkit-scrollbar { height: 7px; }
        .dipole-page .formula-scroll::-webkit-scrollbar-thumb { background: rgba(148,163,184,.35); border-radius: 999px; }
        .dipole-page :target { scroll-margin-top: 6rem; }
        @media print {
          .dipole-page { background: #03070b !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .textbook-sheet { break-after: page; page-break-after: always; min-height: 94vh; }
          .part-navigation { display: none !important; }
          header.site-navbar { display: none !important; }
        }
      `}</style>

      <header className="border-b border-white/[0.08]">
        <div className="mx-auto max-w-[1320px] px-4 py-10 sm:px-7 sm:py-14 lg:px-10">
          <a href="/learn/jee-advanced/chemical-bonding/dipole-moment" className="text-sm font-semibold text-cyan-200 transition hover:text-cyan-100">
            ← Dipole Moment index
          </a>
          <div className="mt-6 grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="inline-flex rounded-full border border-violet-300/25 bg-violet-300/[0.07] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-violet-200">
                JEE Advanced · Part {String(part).padStart(2, "0")} of {DIPOLE_MOMENT_PARTS.length}
              </div>
              <h1 className="mt-5 bg-gradient-to-r from-[#68e2ed] via-[#8fb9f5] to-[#c2a5f3] bg-clip-text text-4xl font-black tracking-[-0.045em] text-transparent sm:text-5xl lg:text-6xl">
                {title}
              </h1>
              <p className="mt-4 max-w-4xl text-base leading-8 text-slate-300 sm:text-lg">{description}</p>
            </div>
            <div className="rounded-lg border border-cyan-300/20 bg-cyan-300/[0.055] p-4 text-sm leading-6 text-cyan-50">
              <div className="font-semibold text-cyan-200">Dipole Moment</div>
              <div className="mt-1 text-slate-300">Chemical Bonding · JEE Advanced</div>
            </div>
          </div>
        </div>
      </header>

      <nav className="part-navigation sticky top-0 z-30 overflow-x-auto border-b border-white/10 bg-[#03070b]/92 px-4 py-3 backdrop-blur-xl sm:px-7">
        <div className="mx-auto flex w-max max-w-[1320px] gap-2">
          {DIPOLE_MOMENT_PARTS.map((item) => (
            <a
              key={item.part}
              href={`/learn/jee-advanced/chemical-bonding/dipole-moment/parts/${item.slug}`}
              aria-current={item.part === part ? "page" : undefined}
              title={item.title}
              className={item.part === part
                ? "rounded-full border border-cyan-300/35 bg-cyan-300/15 px-3 py-1.5 text-xs font-bold text-cyan-100"
                : "rounded-full border border-white/10 bg-slate-900/80 px-3 py-1.5 text-xs text-slate-400 transition hover:text-white"}
            >
              {String(item.part).padStart(2, "0")}
            </a>
          ))}
        </div>
      </nav>

      <div className="mx-auto max-w-[1320px] px-4 pb-20 sm:px-7 lg:px-10">
        {children}

        <div className="part-navigation mt-14 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-2">
          {previous ? (
            <a href={`/learn/jee-advanced/chemical-bonding/dipole-moment/parts/${previous.slug}`} className="rounded-lg border border-white/10 bg-slate-950/70 p-5 transition hover:border-cyan-300/25 hover:bg-white/[0.035]">
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Previous part</div>
              <div className="mt-2 font-semibold text-white">{String(previous.part).padStart(2, "0")} · {previous.title}</div>
            </a>
          ) : <div />}
          {next ? (
            <a href={`/learn/jee-advanced/chemical-bonding/dipole-moment/parts/${next.slug}`} className="rounded-lg border border-cyan-300/20 bg-cyan-300/[0.055] p-5 text-right transition hover:bg-cyan-300/[0.09]">
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">Next part</div>
              <div className="mt-2 font-semibold text-white">{String(next.part).padStart(2, "0")} · {next.title}</div>
            </a>
          ) : (
            <a href="/learn/jee-advanced/chemical-bonding/dipole-moment" className="rounded-lg border border-emerald-300/20 bg-emerald-300/[0.055] p-5 text-right transition hover:bg-emerald-300/[0.09]">
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">Chapter complete</div>
              <div className="mt-2 font-semibold text-white">Return to the 9-part index</div>
            </a>
          )}
        </div>
      </div>
    </main>
  );
}

export {
  ChapterSection,
  ConceptCard,
  DataTable,
  DipoleStructureFigure,
  ExamTrap,
  FactorHeading,
  FigureFrame,
  FormulaCard,
  K,
  KB,
  KeyIdea,
  PartShell,
  WorkedExample,
};
