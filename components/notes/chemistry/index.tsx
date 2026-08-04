"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, CircleHelp, FlaskConical, Lightbulb, TriangleAlert } from "lucide-react";

export { ChemistryTable } from "@/components/notes/ChemistryTable";

// ─────────────────────────────────────────────────────────────────────────────
// Chemistry Notes Shared Design System (SSOT) - Dark Branded Theme
// Minimal container approach, one page background, transparent & borderless cards
// ─────────────────────────────────────────────────────────────────────────────

export interface NumberedSectionItem {
  id: number;
  title: string;
}

export function ChemistryNotesShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0a1622] pt-10 sm:pt-14 pb-16 px-4 sm:px-6 lg:px-8 text-slate-200 font-sans selection:bg-cyan-500/20 selection:text-cyan-200">
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
    <header
      className="rounded-2xl p-6 sm:p-8 space-y-5"
      style={{ border: "1px solid #24405c", background: "linear-gradient(180deg, #182b3e, #0a1622)" }}
    >
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs sm:text-sm font-semibold" style={{ color: "#91a9bc" }}>
        <Link href="/notes" className="hover:text-white transition-colors">
          Notes Hub
        </Link>
        <span>/</span>
        <Link href="/notes/redox-reactions" className="hover:text-white transition-colors">
          Redox Reactions
        </Link>
        <span>/</span>
        <span style={{ color: "#eef3f8" }}>{title}</span>
      </nav>

      {/* Title & Description */}
      <div className="space-y-2.5">
        <span
          className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider"
          style={{ border: "1px solid rgba(95,212,234,.4)", background: "rgba(95,212,234,.1)", color: "#5fd4ea" }}
        >
          {category}
        </span>
        <h1
          className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white"
          style={{ fontFamily: "Georgia, 'Iowan Old Style', 'Times New Roman', serif" }}
        >
          {title}
        </h1>
        <p className="text-sm sm:text-base leading-relaxed max-w-3xl" style={{ color: "#c3d1dd" }}>
          {description}
        </p>
      </div>

      {/* Section tabs */}
      <div className="pt-4" style={{ borderTop: "1px solid #24405c" }}>
        <div
          className="mb-3 text-xs font-black uppercase"
          style={{ color: "#e8b84b", letterSpacing: ".1em", fontFamily: "'SFMono-Regular',Consolas,'Liberation Mono',monospace" }}
        >
          Top chapter navigation
        </div>
        <NumberedSectionNav
          sections={sections}
          activeSection={activeSection}
          onSelectSection={onSelectSection}
        />
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
    <div className="flex flex-nowrap items-stretch gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible">
      {sections.map((sec) => {
        const isActive = activeSection === sec.id;
        return (
          <button
            key={sec.id}
            onClick={() => onSelectSection(sec.id)}
            aria-current={isActive ? "true" : undefined}
            className="shrink-0 text-left transition-all"
            style={{
              border: `1px solid ${isActive ? "#e8b84b" : "#24405c"}`,
              borderLeft: `4px solid ${isActive ? "#e8b84b" : "#5fd4ea"}`,
              borderRadius: 13,
              padding: "10px 13px",
              background: isActive ? "rgba(232,184,75,.15)" : "rgba(18,34,50,.9)",
              color: isActive ? "#e8b84b" : "#c3d1dd",
              fontSize: "clamp(.8rem, 1.1vw, .93rem)",
              fontWeight: isActive ? 900 : 700,
              lineHeight: 1.25,
              cursor: "pointer",
              boxShadow: isActive ? "0 8px 24px rgba(232,184,75,.12)" : "none",
            }}
          >
            {sec.id}. {sec.title}
          </button>
        );
      })}
    </div>
  );
}

/**
 * Canonical bottom pager for numbered-section chapters: previous/next cards
 * with REAL section titles (cyan/gold, Periodic-Table language) plus a centre
 * hub link. Falls back to `endLink` after the final section.
 */
export function NumberedSectionFooter({
  sections,
  activeSection,
  onSelectSection,
  hubHref,
  hubLabel,
  endLink,
}: {
  sections: NumberedSectionItem[];
  activeSection: number;
  onSelectSection: (id: number) => void;
  hubHref: string;
  hubLabel: string;
  endLink?: { href: string; label: string };
}) {
  const prev = sections.find((s) => s.id === activeSection - 1);
  const next = sections.find((s) => s.id === activeSection + 1);
  const cardBase: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    minWidth: 0,
    justifyContent: "center",
    borderRadius: 12,
    padding: "12px 15px",
    background: "linear-gradient(135deg, #182b3e, #122232)",
    boxShadow: "0 10px 28px rgba(0,0,0,.18)",
    cursor: "pointer",
    textAlign: "left" as const,
  };
  const labelBase: React.CSSProperties = {
    fontFamily: "'SFMono-Regular',Consolas,'Liberation Mono',monospace",
    fontSize: 11,
    fontWeight: 900,
    letterSpacing: ".12em",
    textTransform: "uppercase" as const,
  };
  const titleBase: React.CSSProperties = {
    color: "#eef3f8",
    fontSize: 13.5,
    fontWeight: 800,
    lineHeight: 1.35,
  };

  return (
    <footer
      className="grid gap-3 sm:grid-cols-[1fr_auto_1fr]"
      style={{ borderTop: "1px solid #24405c", paddingTop: 22 }}
      aria-label="Section navigation"
    >
      {prev ? (
        <button
          onClick={() => onSelectSection(prev.id)}
          style={{ ...cardBase, border: "1px solid rgba(95,212,234,.5)" }}
        >
          <span style={{ ...labelBase, color: "#5fd4ea" }}>← Previous · Section {prev.id}</span>
          <span style={titleBase}>{prev.title}</span>
        </button>
      ) : (
        <span aria-hidden className="hidden sm:block" style={{ border: "1px dashed #1c3049", borderRadius: 12, opacity: 0.35 }} />
      )}
      <Link
        href={hubHref}
        className="flex items-center justify-center"
        style={{
          border: "1px solid #24405c",
          borderRadius: 12,
          padding: "12px 15px",
          background: "linear-gradient(135deg, #182b3e, #122232)",
          color: "#eef3f8",
          fontSize: 13,
          fontWeight: 800,
          textDecoration: "none",
          boxShadow: "0 10px 28px rgba(0,0,0,.18)",
        }}
      >
        {hubLabel}
      </Link>
      {next ? (
        <button
          onClick={() => onSelectSection(next.id)}
          style={{ ...cardBase, border: "1px solid rgba(232,184,75,.5)", textAlign: "right" }}
        >
          <span style={{ ...labelBase, color: "#e8b84b" }}>Next · Section {next.id} →</span>
          <span style={titleBase}>{next.title}</span>
        </button>
      ) : endLink ? (
        <Link
          href={endLink.href}
          style={{ ...cardBase, border: "1px solid rgba(232,184,75,.5)", textAlign: "right", textDecoration: "none" }}
        >
          <span style={{ ...labelBase, color: "#e8b84b" }}>Continue →</span>
          <span style={titleBase}>{endLink.label}</span>
        </Link>
      ) : (
        <span aria-hidden className="hidden sm:block" style={{ border: "1px dashed #1c3049", borderRadius: 12, opacity: 0.35 }} />
      )}
    </footer>
  );
}

export function NumberedSectionHeader({ number, title }: { number: number; title: string }) {
  return (
    <div className="scroll-mt-28 mb-6 flex items-center gap-3.5 border-b border-[var(--sb-border)] pb-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--sb-radius-sm)] border border-[var(--sb-border-strong)] bg-[var(--sb-cyan-soft)] font-mono text-sm font-black text-[var(--sb-cyan)]">
        {String(number).padStart(2, "0")}
      </span>
      <h2 className="font-[family-name:var(--sb-font-display)] text-xl font-semibold tracking-tight text-[var(--sb-text)] sm:text-2xl">
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
    <section className={`sb-notes-reading space-y-8 rounded-[var(--sb-radius-lg)] border border-[var(--sb-border)] bg-[var(--sb-surface-1)] p-5 text-[15px] shadow-[var(--sb-shadow)] sm:p-8 sm:text-base ${className}`}>
      {children}
    </section>
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
    <section className={`space-y-3.5 border-t border-[var(--sb-border)] py-5 text-[var(--sb-text-body)] first:border-t-0 ${className}`}>
      {title && (
        <h3 className="mb-2 border-b border-[var(--sb-border)] pb-2 font-[family-name:var(--sb-font-display)] text-lg font-semibold text-[var(--sb-text)]">
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
    <div className={`sb-equation-block my-4 space-y-2 rounded-r-[var(--sb-radius)] border border-l-4 border-[var(--sb-border)] border-l-[var(--sb-cyan)] bg-[var(--sb-cyan-soft)] px-5 py-4 font-medium text-[var(--sb-text-body)] ${className}`}>
      {title && <div className="mb-1 font-mono text-xs font-bold uppercase tracking-wider text-[var(--sb-cyan)]">{title}</div>}
      <div className="space-y-1.5 text-[var(--sb-text)]">{children}</div>
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
    <div className={`my-4 space-y-3 rounded-r-[var(--sb-radius)] border border-l-4 border-[var(--sb-border)] border-l-[var(--sb-violet)] bg-[var(--sb-surface-2)] p-5 text-[var(--sb-text-body)] ${className}`}>
      {title && <div className="flex items-center gap-2 font-semibold text-[var(--sb-text)]"><FlaskConical className="h-4 w-4 text-[var(--sb-violet)]" aria-hidden="true" />{title}</div>}
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
    <div className={`my-4 space-y-2 rounded-r-[var(--sb-radius)] border border-l-4 border-[var(--sb-border)] border-l-[var(--sb-violet)] bg-[var(--sb-surface-2)] p-5 text-[var(--sb-text)] ${className}`}>
      <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--sb-violet)]"><CircleHelp className="h-4 w-4" aria-hidden="true" />{title}</div>
      <div className="space-y-2 font-medium leading-relaxed">{children}</div>
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
    <div className={`mt-3 space-y-2.5 border-t border-[var(--sb-border)] py-3 text-[var(--sb-text-body)] ${className}`}>
      {title && <div className="mb-1 font-mono text-xs font-bold uppercase tracking-wider text-[var(--sb-text-muted)]">{title}</div>}
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
    <div className={`my-3.5 flex items-start gap-2.5 rounded-r-[var(--sb-radius)] border border-l-4 border-[var(--sb-border)] border-l-[var(--sb-success)] bg-[color-mix(in_srgb,var(--sb-success)_10%,transparent)] p-4 font-bold text-[var(--sb-text)] sm:items-center ${className}`}>
      <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--sb-success)]" aria-hidden="true" />
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
    <aside className={`my-4 space-y-2.5 rounded-r-[var(--sb-radius)] border border-l-4 border-[var(--sb-border)] border-l-[var(--sb-gold)] bg-[var(--sb-gold-soft)] p-5 text-[var(--sb-text-body)] ${className}`}>
      {title && (
        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--sb-gold)]">
          <Lightbulb className="h-4 w-4" aria-hidden="true" /> {title}
        </div>
      )}
      <div className="space-y-2 leading-relaxed">{children}</div>
    </aside>
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
    <aside className={`my-4 space-y-2.5 rounded-r-[var(--sb-radius)] border border-l-4 border-[var(--sb-border)] border-l-[var(--sb-warning)] bg-[color-mix(in_srgb,var(--sb-warning)_9%,transparent)] p-5 text-[var(--sb-text-body)] ${className}`}>
      {title && (
        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[var(--sb-warning)]">
          <TriangleAlert className="h-4 w-4" aria-hidden="true" /> {title}
        </div>
      )}
      <div className="space-y-2 leading-relaxed">{children}</div>
    </aside>
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
    <div className={`sb-equation-block my-4 space-y-3 py-4 text-center ${className}`}>
      {title && <div className="mb-2 font-mono text-xs font-bold uppercase tracking-widest text-[var(--sb-violet)]">{title}</div>}
      <div className="flex flex-col items-center justify-center gap-3 text-[var(--sb-text-body)]">{children}</div>
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

export function SourceNote(props: { children?: React.ReactNode }) {
  void props;
  return null; // Strict Rule 6: Remove student-facing source-file and PDF-page wording
}
