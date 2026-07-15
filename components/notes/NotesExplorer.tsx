"use client";

import { useState } from "react";
import Link from "next/link";
import {
  type NotesChapter,
  type NoteLink,
} from "@/lib/notesEngine";
import { masterSyllabus } from "@/lib/masterSyllabus/all";
import UnlockBanner from "@/components/monetization/UnlockBanner";

// ─────────────────────────────────────────────────────────────────────────────
// Notes Explorer — strict separation architecture.
// Tab split:
// 1. Detailed Notes (full theory, examples, derivations, exceptions & NCERT highlights)
// 2. Short Notes (revision summary only)
// 3. Formula Sheets (equations only)
// 4. PYQ Section (questions only)
// 5. Practice Section (practice only)
// 6. Mock Tests (tests only)
// ─────────────────────────────────────────────────────────────────────────────

export const STRICT_NOTE_SECTIONS = [
  { key: "detailed", label: "Detailed Notes", icon: "📖", description: "Full theory, examples, derivations & NCERT highlights" },
  { key: "short", label: "Short Notes", icon: "⚡", description: "Quick 2-5 page revision summaries" },
  { key: "formulas", label: "Formula Sheets", icon: "🧮", description: "Pure mathematical equations & constants only" },
  { key: "pyqs", label: "PYQ Section", icon: "🎯", description: "Previous year questions for target exams" },
  { key: "practice", label: "Practice Section", icon: "✍️", description: "Chapter-wise concept practice & question banks" },
  { key: "mocks", label: "Mock Tests", icon: "🧪", description: "Timed examination simulations" },
] as const;

export type StrictNoteSectionKey = (typeof STRICT_NOTE_SECTIONS)[number]["key"];

const CATEGORY_STYLE: Record<NotesChapter["category"], string> = {
  physical: "text-cyan-300 border-cyan-400/30 bg-cyan-500/10",
  inorganic: "text-blue-300 border-blue-400/30 bg-blue-500/10",
  organic: "text-purple-300 border-purple-400/30 bg-purple-500/10",
};

function LinkRow({ links }: { links: NoteLink[] }) {
  if (!links || links.length === 0) {
    return <p className="text-xs text-white/40">No external links configured for this section.</p>;
  }
  return (
    <div className="space-y-2.5">
      {links.map((l, i) => (
        <Link
          key={i}
          href={l.href}
          className="group flex items-center justify-between gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] p-3.5 transition hover:border-cyan-400/40 hover:bg-white/[0.06]"
        >
          <span className="min-w-0">
            <span className="block text-sm font-semibold text-white group-hover:text-cyan-300">{l.label}</span>
            {l.note && <span className="mt-0.5 block truncate text-xs text-white/50">{l.note}</span>}
          </span>
          <span className="shrink-0 text-white/40 transition group-hover:translate-x-0.5 group-hover:text-cyan-300">→</span>
        </Link>
      ))}
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((t, i) => (
        <li key={i} className="flex gap-2.5 text-[13.5px] leading-relaxed text-white/75">
          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/70" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

function StrictSectionBody({ chapter, section }: { chapter: NotesChapter; section: StrictNoteSectionKey }) {
  switch (section) {
    case "detailed":
      return (
        <div className="space-y-6">
          {/* Syllabus Scope */}
          <div className="p-4 rounded-2xl border border-white/[0.06] bg-black/25">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-2">📋 Syllabus Scope</h4>
            <Bullets items={chapter.syllabus} />
          </div>

          {/* Core Theory Note Blocks */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/40">📖 Core Theory &amp; Concepts</h4>
            {chapter.detailedNotes.map((b, i) => (
              <div key={i} className="rounded-2xl border border-white/[0.07] bg-[#111827] p-4 space-y-2">
                <h5 className="text-sm font-black text-white">{b.heading}</h5>
                <Bullets items={b.points} />
              </div>
            ))}
          </div>

          {/* NCERT Highlights */}
          {chapter.ncertHighlights && chapter.ncertHighlights.length > 0 && (
            <div className="rounded-2xl border border-purple-400/20 bg-purple-500/[0.06] p-4 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-purple-300">📕 NCERT Highlights &amp; Core Lines</h4>
              <Bullets items={chapter.ncertHighlights} />
            </div>
          )}

          {/* Derivations */}
          {chapter.derivations && chapter.derivations.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white/40">📐 Essential Derivations</h4>
              {chapter.derivations.map((d, i) => (
                <div key={i} className="rounded-2xl border border-white/[0.07] bg-[#111827] p-4">
                  <h5 className="mb-2 text-sm font-black text-white">{d.title}</h5>
                  <ol className="space-y-1.5">
                    {d.steps.map((s, j) => (
                      <li key={j} className="flex gap-2 text-[13px] leading-relaxed text-white/65">
                        <span className="font-mono text-white/35">{j + 1}.</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ol>
                  <p className="mt-3 rounded-lg bg-cyan-500/[0.08] px-3 py-2 text-[13px] font-semibold text-cyan-200">
                    Result: {d.result}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Exceptions & Common Mistakes */}
          {chapter.commonMistakes && chapter.commonMistakes.length > 0 && (
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white/40">⚠️ Critical Exceptions &amp; Pitfalls</h4>
              <ul className="space-y-2.5">
                {chapter.commonMistakes.map((t, i) => (
                  <li key={i} className="flex gap-2.5 rounded-xl border border-rose-400/15 bg-rose-500/[0.06] p-3 text-[13.5px] leading-relaxed text-rose-100/85">
                    <span className="shrink-0">⚠️</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Solved Examples */}
          {chapter.solvedExamples && chapter.solvedExamples.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white/40">✍️ Solved Conceptual Examples</h4>
              {chapter.solvedExamples.map((ex, i) => (
                <div key={i} className="rounded-2xl border border-white/[0.07] bg-[#111827] p-4">
                  <div className="mb-2 flex items-start justify-between gap-3">
                    <p className="text-sm font-semibold text-white">Q{i + 1}. {ex.q}</p>
                    {ex.tag && (
                      <span className="shrink-0 rounded-full border border-cyan-400/25 bg-cyan-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-cyan-200">
                        {ex.tag}
                      </span>
                    )}
                  </div>
                  <ol className="mt-2 space-y-1.5">
                    {ex.steps.map((s, j) => (
                      <li key={j} className="flex gap-2 text-[13px] leading-relaxed text-white/65">
                        <span className="font-mono text-white/35">{j + 1}.</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ol>
                  <p className="mt-3 rounded-lg bg-emerald-500/[0.08] px-3 py-2 text-[13px] font-semibold text-emerald-200">
                    ✓ {ex.answer}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      );

    case "short":
      return (
        <div className="space-y-4">
          <div className="p-4 rounded-2xl border border-white/[0.06] bg-black/25">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-2">⚡ Quick-Recall Revision Summary</h4>
            <Bullets items={[...chapter.shortNotes, ...chapter.revisionNotes]} />
          </div>
        </div>
      );

    case "formulas":
      return (
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white/40">🧮 Formula Cards &amp; Equations</h4>
          <LinkRow links={chapter.formulaLinks} />
        </div>
      );

    case "pyqs":
      return (
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white/40">🎯 PYQ Practice Questions</h4>
          <LinkRow links={chapter.pyqLinks} />
        </div>
      );

    case "practice":
      return (
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white/40">✍️ Concept-wise Practice Problems</h4>
          <LinkRow links={chapter.learnLinks} />
        </div>
      );

    case "mocks":
      return (
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white/40">🧪 Mocks &amp; Timed Tests</h4>
          {chapter.tests.map((t, i) => (
            <div key={i} className="flex items-center justify-between gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] p-3.5">
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-white">{t.label}</span>
                <span className="mt-0.5 block text-xs text-white/50">{t.questions} questions</span>
              </span>
              <span className="shrink-0 rounded-full border border-white/15 bg-white/[0.06] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white/60">
                Coming soon
              </span>
            </div>
          ))}
        </div>
      );

    default:
      return null;
  }
}

interface SyllabusLite {
  id: string;
  title: string;
  category: "physical" | "organic" | "inorganic";
  difficulty: number;
  estimatedHours: number;
  exams: string[];
  concepts: { id: string; title: string; description?: string }[];
}

const SYLLABUS_CHAPTERS = masterSyllabus as unknown as SyllabusLite[];
const NOTES_ID_FOR_SYLLABUS: Record<string, string> = { goc: "general-organic-chemistry" };

function notesIdFor(syllabusId: string): string {
  return NOTES_ID_FOR_SYLLABUS[syllabusId] ?? syllabusId;
}

function authoredFor(syllabusId: string, chapters: readonly NotesChapter[]): NotesChapter | undefined {
  return chapters.find((chapter) => chapter.id === notesIdFor(syllabusId));
}

interface NotesExplorerProps {
  /** Server-authorized note payload only; never the full registry for free users. */
  chapters: NotesChapter[];
  /** IDs may be shown as locked, but their note bodies are never sent here. */
  restrictedChapterIds: string[];
  freeNoteCount: number;
  totalNoteCount: number;
}

export default function NotesExplorer({
  chapters,
  restrictedChapterIds,
  freeNoteCount,
  totalNoteCount,
}: NotesExplorerProps) {
  const [chapterId, setChapterId] = useState<string>(SYLLABUS_CHAPTERS[0].id);
  const [section, setSection] = useState<StrictNoteSectionKey>("detailed");

  const syllabusChapter = SYLLABUS_CHAPTERS.find((c) => c.id === chapterId) ?? SYLLABUS_CHAPTERS[0];
  const chapter = authoredFor(syllabusChapter.id, chapters);
  const chapterLocked = !chapter && restrictedChapterIds.includes(notesIdFor(syllabusChapter.id));
  const activeSection = STRICT_NOTE_SECTIONS.find((s) => s.key === section) ?? STRICT_NOTE_SECTIONS[0];
  const authoredCount = SYLLABUS_CHAPTERS.filter((c) => authoredFor(c.id, chapters)).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.4em] text-cyan-300">Notes Engine</p>
        <h1 className="text-3xl font-black md:text-4xl">Chapter Notes Explorer</h1>
        <p className="mt-2 text-sm text-white/55">
          {authoredCount} of {SYLLABUS_CHAPTERS.length} chapters have full verified notes available to you
          ({STRICT_NOTE_SECTIONS.length} strict categories each) — every chapter shows its official syllabus.
        </p>
      </div>

      {/* Chapter 1: Some Basic Concepts of Chemistry */}
      <div className="rounded-3xl border border-cyan-400/30 bg-slate-900/90 p-6 shadow-2xl space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-cyan-300">
            1. Some Basic Concepts of Chemistry
          </span>
          <span className="text-xs font-bold text-slate-400">Physical Chemistry Core</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            href="/notes/mole-concept"
            className="group flex flex-col justify-between rounded-2xl border border-lime-400/30 bg-slate-950 p-4 transition hover:border-lime-400 hover:shadow-lg hover:shadow-lime-500/10"
          >
            <div>
              <span className="rounded-full bg-lime-500/20 px-2.5 py-0.5 text-[10px] font-bold text-lime-300">Section 1</span>
              <h3 className="mt-2 text-base font-black text-white group-hover:text-lime-300 transition">Mole Concept</h3>
              <p className="mt-1 text-xs text-slate-400">Complete 15-topic foundation course.</p>
            </div>
            <span className="mt-4 text-xs font-bold text-lime-400 group-hover:translate-x-1 transition-transform">Explore Topics →</span>
          </Link>

          <Link
            href="/notes/stoichiometry"
            className="group flex flex-col justify-between rounded-2xl border border-amber-400/30 bg-slate-950 p-4 transition hover:border-amber-400 hover:shadow-lg hover:shadow-amber-500/10"
          >
            <div>
              <span className="rounded-full bg-amber-500/20 px-2.5 py-0.5 text-[10px] font-bold text-amber-300">Section 2</span>
              <h3 className="mt-2 text-base font-black text-white group-hover:text-amber-300 transition">Stoichiometry</h3>
              <p className="mt-1 text-xs text-slate-400">Complete 9-part reaction analysis course.</p>
            </div>
            <span className="mt-4 text-xs font-bold text-amber-400 group-hover:translate-x-1 transition-transform">Explore Lessons →</span>
          </Link>

          <Link
            href="/notes/concentration-terms"
            className="group flex flex-col justify-between rounded-2xl border border-red-400/30 bg-slate-950 p-4 transition hover:border-red-400 hover:shadow-lg hover:shadow-red-500/10"
          >
            <div>
              <span className="rounded-full bg-red-500/20 px-2.5 py-0.5 text-[10px] font-bold text-red-300">Section 3</span>
              <h3 className="mt-2 text-base font-black text-white group-hover:text-red-300 transition">Concentration Terms</h3>
              <p className="mt-1 text-xs text-slate-400">Complete 6-part solution analysis course.</p>
            </div>
            <span className="mt-4 text-xs font-bold text-red-400 group-hover:translate-x-1 transition-transform">Explore Lessons →</span>
          </Link>

          <Link
            href="/notes/eudiometry"
            className="group flex flex-col justify-between rounded-2xl border border-cyan-400/30 bg-slate-950 p-4 transition hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10"
          >
            <div>
              <span className="rounded-full bg-cyan-500/20 px-2.5 py-0.5 text-[10px] font-bold text-cyan-300">Section 4</span>
              <h3 className="mt-2 text-base font-black text-white group-hover:text-cyan-300 transition">Eudiometry</h3>
              <p className="mt-1 text-xs text-slate-400">Complete 6-part gas volume course.</p>
            </div>
            <span className="mt-4 text-xs font-bold text-cyan-400 group-hover:translate-x-1 transition-transform">Explore Lessons →</span>
          </Link>
        </div>
      </div>

      {/* Chapter 2: Redox Reactions */}
      <div className="rounded-3xl border border-purple-400/30 bg-slate-900/90 p-6 shadow-2xl space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <Link href="/notes/redox-reactions" className="rounded-full bg-purple-500/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-purple-300 hover:bg-purple-500/30 transition">
            2. Redox Reactions
          </Link>
          <Link href="/notes/redox-reactions" className="text-xs font-bold text-slate-400 hover:text-purple-300 transition">
            Chapter Hub →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href="/notes/redox-reactions/equivalent-weight"
            className="group flex flex-col justify-between rounded-2xl border border-pink-400/30 bg-slate-950 p-4 transition hover:border-pink-400 hover:shadow-lg hover:shadow-pink-500/10"
          >
            <div>
              <span className="rounded-full bg-pink-500/20 px-2.5 py-0.5 text-[10px] font-bold text-pink-300">Section 1</span>
              <h3 className="mt-2 text-base font-black text-white group-hover:text-pink-300 transition">Equivalent Weight</h3>
              <p className="mt-1 text-xs text-slate-400">Equivalent concept, n-factor & redox changes.</p>
            </div>
            <span className="mt-4 text-xs font-bold text-pink-400 group-hover:translate-x-1 transition-transform">Open Section →</span>
          </Link>

          <Link
            href="/notes/redox-reactions/titration"
            className="group flex flex-col justify-between rounded-2xl border border-blue-400/30 bg-slate-950 p-4 transition hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10"
          >
            <div>
              <span className="rounded-full bg-blue-500/20 px-2.5 py-0.5 text-[10px] font-bold text-blue-300">Section 2</span>
              <h3 className="mt-2 text-base font-black text-white group-hover:text-blue-300 transition">Titration</h3>
              <p className="mt-1 text-xs text-slate-400">Volumetric analysis, indicators & calculations.</p>
            </div>
            <span className="mt-4 text-xs font-bold text-blue-400 group-hover:translate-x-1 transition-transform">Open Section →</span>
          </Link>
        </div>
      </div>

      <div className="rounded-3xl border border-cyan-400/30 bg-slate-900/90 p-6 shadow-2xl space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-cyan-300">
            Thermodynamics
          </span>
          <span className="text-xs font-bold text-slate-400">Physical Chemistry Core</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href="/learn/thermodynamics"
            className="group flex flex-col justify-between rounded-2xl border border-cyan-400/30 bg-slate-950 p-4 transition hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10"
          >
            <div>
              <span className="rounded-full bg-cyan-500/20 px-2.5 py-0.5 text-[10px] font-bold text-cyan-300">30 Parts</span>
              <h3 className="mt-2 text-base font-black text-white transition group-hover:text-cyan-300">Thermodynamics</h3>
              <p className="mt-1 text-xs text-slate-400">Complete 30-part visual theory, derivations, graphs, tables, worked examples, and solutions.</p>
            </div>
            <span className="mt-4 text-xs font-bold text-cyan-400 transition-transform group-hover:translate-x-1">Explore Lessons →</span>
          </Link>
        </div>
      </div>

      <div className="rounded-3xl border border-cyan-400/30 bg-slate-900/90 p-6 shadow-2xl space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <Link href="/notes/electrochemistry" className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-cyan-300 hover:bg-cyan-500/30 transition">
            5. Electrochemistry
          </Link>
          <Link href="/notes/electrochemistry" className="text-xs font-bold text-slate-400 hover:text-cyan-300 transition">
            Chapter Hub →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href="/notes/electrochemistry"
            className="group flex flex-col justify-between rounded-2xl border border-cyan-400/30 bg-slate-950 p-4 transition hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10"
          >
            <div>
              <span className="rounded-full bg-cyan-500/20 px-2.5 py-0.5 text-[10px] font-bold text-cyan-300">Section 1</span>
              <h3 className="mt-2 text-base font-black text-white group-hover:text-cyan-300 transition">Galvanic Cells & Nernst Equation</h3>
              <p className="mt-1 text-xs text-slate-400">Electrochemical series, EMF & thermodynamics.</p>
            </div>
            <span className="mt-4 text-xs font-bold text-cyan-400 group-hover:translate-x-1 transition-transform">Open Section →</span>
          </Link>

          <Link
            href="/notes/electrochemistry"
            className="group flex flex-col justify-between rounded-2xl border border-lime-400/30 bg-slate-950 p-4 transition hover:border-lime-400 hover:shadow-lg hover:shadow-lime-500/10"
          >
            <div>
              <span className="rounded-full bg-lime-500/20 px-2.5 py-0.5 text-[10px] font-bold text-lime-300">Section 2</span>
              <h3 className="mt-2 text-base font-black text-white group-hover:text-lime-300 transition">Conductance & Kohlrausch&apos;s Law</h3>
              <p className="mt-1 text-xs text-slate-400">Molar conductivity & Faraday electrolysis laws.</p>
            </div>
            <span className="mt-4 text-xs font-bold text-lime-400 group-hover:translate-x-1 transition-transform">Open Section →</span>
          </Link>
        </div>
      </div>

      {/* Chapter selector */}
      <div className="flex flex-wrap gap-2">
        {SYLLABUS_CHAPTERS.map((c) => {
          const active = c.id === chapterId;
          const authored = authoredFor(c.id, chapters);
          const locked = !authored && restrictedChapterIds.includes(notesIdFor(c.id));
          return (
            <button
              key={c.id}
              onClick={() => { setChapterId(c.id); setSection("detailed"); }}
              className={`rounded-xl border px-3.5 py-2 text-left transition ${
                active
                  ? "border-cyan-400/50 bg-cyan-500/10"
                  : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]"
              }`}
            >
              <span className={`block text-[13px] font-bold ${active ? "text-white" : "text-white/80"}`}>
                {c.title}
                {locked && <span className="ml-1.5 text-[11px]" title="Pro chapter">🔒</span>}
              </span>
              <span className="mt-0.5 block text-[10px] capitalize text-white/45">
                {c.category} · {authored ? "✓ full notes" : "syllabus"}
              </span>
            </button>
          );
        })}
      </div>

      {chapter ? (
        <>
          {/* Chapter meta */}
          <div className="rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.05] to-transparent p-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`rounded-full border px-2.5 py-0.5 text-[11px] font-bold capitalize ${CATEGORY_STYLE[chapter.category]}`}>
                {chapter.category}
              </span>
              {chapter.exams.map((e) => (
                <span key={e} className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-0.5 text-[11px] font-semibold text-white/70">
                  {e === "jeeMain" ? "JEE Main" : e === "jeeAdvanced" ? "JEE Advanced" : "NEET"}
                </span>
              ))}
            </div>
            <p className="mt-2.5 text-[13.5px] text-white/70">{chapter.tagline}</p>
          </div>

          {/* Section nav */}
          <div className="-mx-4 overflow-x-auto px-4 md:mx-0 md:px-0">
            <div className="flex gap-2 md:flex-wrap">
              {STRICT_NOTE_SECTIONS.map((s) => {
                const active = s.key === section;
                return (
                  <button
                    key={s.key}
                    onClick={() => setSection(s.key)}
                    className={`shrink-0 whitespace-nowrap rounded-lg border px-3 py-2 text-xs font-semibold transition ${
                      active
                        ? "border-cyan-400/50 bg-cyan-500/15 text-white"
                        : "border-white/10 bg-white/[0.03] text-white/60 hover:text-white/85"
                    }`}
                  >
                    <span className="mr-1">{s.icon}</span>{s.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active section */}
          <section className="min-h-[200px]">
            <div className="space-y-4">
              <div className="border-b border-white/[0.06] pb-3">
                <h2 className="flex items-center gap-2 text-lg font-black text-white">
                  <span>{activeSection.icon}</span> {activeSection.label}
                </h2>
                <p className="text-xs text-white/45 mt-1">{activeSection.description}</p>
              </div>
              <StrictSectionBody chapter={chapter} section={section} />
            </div>
          </section>
        </>
      ) : chapterLocked ? (
        <section className="min-h-[200px]">
          <UnlockBanner available={freeNoteCount} total={totalNoteCount} itemLabel="notes chapters" />
        </section>
      ) : (
        /* Syllabus-only state */
        <section className="min-h-[200px] space-y-4">
          <div className="rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.05] to-transparent p-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`rounded-full border px-2.5 py-0.5 text-[11px] font-bold capitalize ${CATEGORY_STYLE[syllabusChapter.category]}`}>
                {syllabusChapter.category}
              </span>
              {syllabusChapter.exams.map((e) => (
                <span key={e} className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-0.5 text-[11px] font-semibold text-white/70">
                  {e}
                </span>
              ))}
              <span className="text-[11px] text-white/40">D{syllabusChapter.difficulty} · ~{syllabusChapter.estimatedHours}h</span>
            </div>
            <p className="mt-2.5 text-[13.5px] text-white/60">
              Detailed notes not added yet. Official syllabus available below.
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-[#111827] p-4">
            <h2 className="mb-3 flex items-center gap-2 text-lg font-black text-white">📋 Official Syllabus</h2>
            <ul className="space-y-2.5">
              {syllabusChapter.concepts.map((c) => (
                <li key={c.id} className="text-sm leading-relaxed">
                  <span className="font-semibold text-white/90">{c.title}</span>
                  {c.description && <span className="text-white/55"> — {c.description}</span>}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
              <Link href={`/chapter/${syllabusChapter.id}`} className="rounded-lg border border-cyan-400/30 bg-cyan-500/10 px-2.5 py-1 font-bold text-cyan-300 transition hover:bg-cyan-500/20">Open chapter page →</Link>
              <Link href="/pyq" className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-white/60 transition hover:border-cyan-400/40 hover:text-cyan-300">🎯 PYQs</Link>
              <Link href="/tests" className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-white/60 transition hover:border-cyan-400/40 hover:text-cyan-300">🧪 Tests</Link>
              <Link href="/snap-solve" className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-white/60 transition hover:border-cyan-400/40 hover:text-cyan-300">📸 Snap & Solve</Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}