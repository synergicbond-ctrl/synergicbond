"use client";

import React from "react";
import Link from "next/link";
import { InlineMath, BlockMath } from "@/components/math/react-katex";

// ─────────────────────────────────────────────────────────────────────────────
// Chemistry Notes Shared Design System (SSOT) - Dark Branded Theme
// Premium Synergic Bond dark chemistry aesthetic, gradients, depth, and brand colours.
// ─────────────────────────────────────────────────────────────────────────────

export interface NumberedSectionItem {
  id: number;
  title: string;
}

export function ChemistryNotesShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0B0F19] pt-20 sm:pt-24 pb-16 px-4 sm:px-6 lg:px-8 text-slate-200 font-sans selection:bg-purple-500/20 selection:text-purple-300">
      <div className="mx-auto max-w-5xl space-y-8">{children}</div>
    </div>
  );
}

export function NotesChapterHeader({
  category = "Physical Chemistry",
  title,
  description,
  sections,
  activeSection,
  onSelectSection,
}: {
  category?: string;
  title: string;
  description: string;
  sections: NumberedSectionItem[];
  activeSection: number;
  onSelectSection: (id: number) => void;
}) {
  return (
    <header className="rounded-2xl border border-purple-500/20 bg-slate-900/60 p-6 sm:p-8 shadow-xl space-y-5 backdrop-blur-md relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-purple-500/10 blur-2xl pointer-events-none" />

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-400">
        <Link href="/notes" className="hover:text-purple-400 transition-colors">
          Notes Hub
        </Link>
        <span>/</span>
        <Link href="/notes/redox-reactions" className="hover:text-purple-400 transition-colors">
          Redox Reactions
        </Link>
        <span>/</span>
        <span className="text-slate-200">{title}</span>
      </nav>

      {/* Title & Description */}
      <div className="space-y-2.5">
        <span className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-purple-300">
          {category}
        </span>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
          {title}
        </h1>
        <p className="text-sm sm:text-base leading-relaxed text-slate-300 max-w-3xl">
          {description}
        </p>
      </div>

      {/* Numbered Selector Nav */}
      <div className="pt-4 border-t border-slate-800">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Select Section:
          </span>
          <NumberedSectionNav
            sections={sections}
            activeSection={activeSection}
            onSelectSection={onSelectSection}
          />
        </div>
      </div>
    </header>
  );
}

export function NumberedSectionNav({
  sections,
  activeSection,
  onSelectSection,
}: {
  sections: NumberedSectionItem[];
  activeSection: number;
  onSelectSection: (id: number) => void;
}) {
  return (
    <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
      {sections.map((sec) => {
        const isActive = activeSection === sec.id;
        return (
          <button
            key={sec.id}
            onClick={() => onSelectSection(sec.id)}
            title={sec.title}
            className={`flex shrink-0 h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl font-bold text-base transition-all ${
              isActive
                ? "bg-purple-600 border border-purple-500 text-white shadow-lg ring-2 ring-purple-600/20 scale-105"
                : "bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 text-slate-300"
            }`}
          >
            {sec.id}
          </button>
        );
      })}
    </div>
  );
}

export function NumberedSectionHeader({ number, title }: { number: number; title: string }) {
  return (
    <div className="scroll-mt-28 flex items-center gap-3.5 border-b border-slate-800 pb-4 mb-6">
      <span className="flex shrink-0 h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-purple-600 text-white font-black text-lg shadow-sm border border-purple-500/20">
        {number}
      </span>
      <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
        {title}
      </h2>
    </div>
  );
}

export function NotesContentCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 shadow-xl space-y-6 text-[15px] sm:text-base leading-relaxed text-slate-300 backdrop-blur-sm ${className}`}>
      {children}
    </div>
  );
}

export function ConceptCard({
  title,
  children,
  className = "",
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`rounded-xl border border-slate-800 bg-slate-950/40 p-5 sm:p-6 shadow-md space-y-4 my-4 text-slate-300 ${className}`}>
      {title && (
        <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-2.5 mb-3">
          {title}
        </h3>
      )}
      <div className="space-y-3.5 leading-relaxed">{children}</div>
    </section>
  );
}

export function FormulaCard({
  title,
  children,
  className = "",
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-xl border border-blue-500/20 bg-blue-950/20 p-5 my-4 space-y-3 text-blue-200 text-center sm:text-left overflow-x-auto font-medium ${className}`}>
      {title && <div className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">{title}</div>}
      <div className="text-slate-100 space-y-2">{children}</div>
    </div>
  );
}

export function ExampleCard({
  title,
  children,
  className = "",
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-xl border border-slate-800 bg-slate-900/30 p-5 my-4 space-y-3 text-slate-300 ${className}`}>
      {title && <div className="font-bold text-white">{title}</div>}
      <div className="space-y-2">{children}</div>
    </div>
  );
}

export function QuestionCard({
  title = "Question",
  children,
  className = "",
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-xl border border-rose-500/20 bg-rose-950/20 p-5 my-4 space-y-3 text-rose-200 ${className}`}>
      <div className="font-bold text-rose-300 text-sm uppercase tracking-wider">{title}</div>
      <div className="space-y-2.5 font-medium leading-relaxed">{children}</div>
    </div>
  );
}

export function SolutionSteps({
  title = "Calculation & Solution Steps",
  children,
  className = "",
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-xl border border-slate-800 bg-slate-950/50 p-4 sm:p-5 my-3 space-y-2.5 text-slate-300 ${className}`}>
      {title && <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">{title}</div>}
      <div className="space-y-2 font-normal leading-relaxed">{children}</div>
    </div>
  );
}

export function FinalAnswerCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-xl border border-emerald-500/20 bg-emerald-950/20 p-4 sm:p-5 my-3.5 font-bold text-emerald-300 flex items-start sm:items-center gap-2.5 ${className}`}>
      <span className="flex shrink-0 h-6 w-6 rounded-full bg-emerald-600 text-white items-center justify-center text-xs font-extrabold">✓</span>
      <div className="flex-1 text-[15px] sm:text-base">{children}</div>
    </div>
  );
}

export function ImportantNoteCard({
  title = "Important Note",
  children,
  className = "",
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-xl border border-amber-500/20 bg-amber-950/20 p-5 my-4 space-y-2.5 text-amber-200 ${className}`}>
      {title && (
        <div className="font-bold text-amber-300 flex items-center gap-1.5 text-sm uppercase tracking-wider">
          <span>★</span> {title}
        </div>
      )}
      <div className="space-y-2 leading-relaxed">{children}</div>
    </div>
  );
}

export function WarningCard({
  title = "Important Distinction",
  children,
  className = "",
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-xl border border-red-500/20 bg-red-950/20 p-5 my-4 space-y-2.5 text-red-200 ${className}`}>
      {title && (
        <div className="font-bold text-red-300 flex items-center gap-1.5 text-sm uppercase tracking-wider">
          <span>⚠️</span> {title}
        </div>
      )}
      <div className="space-y-2 leading-relaxed">{children}</div>
    </div>
  );
}

export function DiagramPanel({
  title,
  children,
  className = "",
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl border border-slate-800 bg-slate-950/30 p-6 my-6 text-center shadow-sm space-y-4 overflow-x-auto ${className}`}>
      {title && <div className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-2">{title}</div>}
      <div className="text-slate-200 flex flex-col items-center justify-center gap-3">{children}</div>
    </div>
  );
}

export function ChemistryTable({
  headers,
  rows,
  className = "",
}: {
  headers: string[];
  rows: (string | React.ReactNode)[][];
  className?: string;
}) {
  return (
    <div className={`my-6 w-full overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/20 shadow-sm ${className}`}>
      <table className="w-full min-w-[360px] border-collapse text-left text-sm text-slate-300">
        <thead>
          <tr className="border-b border-slate-800 bg-slate-900/60 text-white font-semibold">
            {headers.map((h, i) => (
              <th key={i} className="px-4 py-3.5">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rIdx) => (
            <tr key={rIdx} className="border-b border-slate-800 last:border-none even:bg-slate-950/40 hover:bg-slate-900/40 transition-colors">
              {row.map((cell, cIdx) => (
                <td key={cIdx} className="px-4 py-3 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── Drop-in aliases for legacy component names inside notes files ──
export function PageCard({ title, children }: { title?: string; children: React.ReactNode }) {
  if (title === "Cover Page") return null; // Suppress legacy Cover Page
  return <ConceptCard title={title}>{children}</ConceptCard>;
}

export function FormulaBox({ children }: { children: React.ReactNode }) {
  return <FormulaCard>{children}</FormulaCard>;
}

export function WorkingLine({ children }: { children: React.ReactNode }) {
  return <SolutionSteps title="">{children}</SolutionSteps>;
}

export function DiagramBox({ title, children }: { title?: string; children: React.ReactNode }) {
  return <DiagramPanel title={title}>{children}</DiagramPanel>;
}

export function Highlight({ children }: { children: React.ReactNode }) {
  return <ConceptCard className="border-purple-500/20 bg-purple-950/20">{children}</ConceptCard>;
}

export function NoteBox({ children }: { children: React.ReactNode }) {
  return <ConceptCard className="border-slate-800 bg-slate-900/30">{children}</ConceptCard>;
}

export function PinkBox({ children }: { children: React.ReactNode }) {
  return <ConceptCard className="border-rose-500/20 bg-rose-950/20">{children}</ConceptCard>;
}

export function PinkQuestion({ children }: { children: React.ReactNode }) {
  return <QuestionCard>{children}</QuestionCard>;
}

export function QuestionBox({ children }: { children: React.ReactNode }) {
  return <QuestionCard>{children}</QuestionCard>;
}

export function ReactionBox({ children }: { children: React.ReactNode }) {
  return <FormulaCard>{children}</FormulaCard>;
}

export function ReactionCard({ children }: { children: React.ReactNode }) {
  return <FormulaCard>{children}</FormulaCard>;
}

export function RedNote({ children }: { children: React.ReactNode }) {
  return <WarningCard>{children}</WarningCard>;
}

export function RuleBox({ children }: { children: React.ReactNode }) {
  return <ImportantNoteCard title="Rule">{children}</ImportantNoteCard>;
}

export function WarningBox({ children }: { children: React.ReactNode }) {
  return <WarningCard>{children}</WarningCard>;
}

export function YellowNote({ children }: { children: React.ReactNode }) {
  return <ImportantNoteCard>{children}</ImportantNoteCard>;
}

export function ChecklistItem({ checked = true, children }: { checked?: boolean; done?: boolean; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2.5 my-2 text-slate-300">
      <span className={`flex shrink-0 h-5 w-5 rounded-full items-center justify-center text-xs font-bold mt-0.5 ${checked ? "bg-emerald-600 text-white border border-emerald-500/20" : "bg-slate-800 text-slate-400 border border-slate-700/60"}`}>
        {checked ? "✓" : "•"}
      </span>
      <span className="flex-1">{children}</span>
    </div>
  );
}

export function StatusBadge({ status }: { status: string }) {
  return (
    <span className="inline-flex items-center rounded-md bg-purple-500/10 px-2.5 py-1 text-xs font-semibold text-purple-300 border border-purple-500/30">
      {status}
    </span>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md bg-slate-800 px-2.5 py-1 text-xs font-semibold text-slate-300 border border-slate-700/60">
      {children}
    </span>
  );
}

export function LabelPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300 border border-slate-700/60">
      {children}
    </span>
  );
}

export function CrossedOut({ children }: { children: React.ReactNode }) {
  return <div className="my-2 p-3 rounded-lg bg-slate-900/40 border border-slate-800 text-slate-500 line-through text-sm">{children}</div>;
}

export function CrossedRelation({ children }: { children: React.ReactNode }) {
  return <div className="my-2 p-3 rounded-lg bg-slate-900/40 border border-slate-800 text-slate-500 line-through text-sm">{children}</div>;
}

export function MiniStructure({ title, children }: { title?: string; children: React.ReactNode }) {
  return <DiagramPanel title={title}>{children}</DiagramPanel>;
}

export function SourceNote({ children }: { children?: React.ReactNode }) {
  return null; // Strict Rule 6: Remove student-facing source-file and PDF-page wording
}
