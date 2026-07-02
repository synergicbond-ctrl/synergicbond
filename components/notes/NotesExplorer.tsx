"use client";

import { useState } from "react";
import Link from "next/link";
import {
  NOTES_CHAPTERS,
  NOTE_SECTIONS,
  NOTES_ENGINE_STATS,
  type NotesChapter,
  type NoteSectionKey,
  type NoteLink,
} from "@/lib/notesEngine";
import { masterSyllabus } from "@/lib/masterSyllabus/all";
import { isFreeChapter } from "@/lib/freeChapters";
import { useUnlocked } from "@/components/monetization/useUnlocked";
import UnlockBanner from "@/components/monetization/UnlockBanner";

// ─────────────────────────────────────────────────────────────────────────────
// Notes Explorer — mobile-first reader for the curated Notes Engine (SSOT).
// Chapter pills → horizontally-scrollable section nav → section content.
// ─────────────────────────────────────────────────────────────────────────────

const CATEGORY_STYLE: Record<NotesChapter["category"], string> = {
  physical: "text-cyan-300 border-cyan-400/30 bg-cyan-500/10",
  inorganic: "text-blue-300 border-blue-400/30 bg-blue-500/10",
  organic: "text-purple-300 border-purple-400/30 bg-purple-500/10",
};

function LinkRow({ links }: { links: NoteLink[] }) {
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

function SectionBody({ chapter, section }: { chapter: NotesChapter; section: NoteSectionKey }) {
  switch (section) {
    case "syllabus":
      return <Bullets items={chapter.syllabus} />;

    case "subtopics":
      return (
        <div className="flex flex-wrap gap-2">
          {chapter.subtopics.map((s, i) => (
            <span key={i} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[13px] text-white/80">
              {i + 1}. {s}
            </span>
          ))}
        </div>
      );

    case "detailedNotes":
      return (
        <div className="space-y-5">
          {chapter.detailedNotes.map((b, i) => (
            <div key={i} className="rounded-2xl border border-white/[0.07] bg-[#111827] p-4">
              <h4 className="mb-3 text-sm font-black text-white">{b.heading}</h4>
              <Bullets items={b.points} />
            </div>
          ))}
        </div>
      );

    case "shortNotes":
    case "revisionNotes":
      return <Bullets items={section === "shortNotes" ? chapter.shortNotes : chapter.revisionNotes} />;

    case "ncertHighlights":
      return (
        <div className="rounded-2xl border border-purple-400/20 bg-purple-500/[0.06] p-4">
          <Bullets items={chapter.ncertHighlights} />
        </div>
      );

    case "commonMistakes":
      return (
        <ul className="space-y-2.5">
          {chapter.commonMistakes.map((t, i) => (
            <li key={i} className="flex gap-2.5 rounded-xl border border-rose-400/15 bg-rose-500/[0.06] p-3 text-[13.5px] leading-relaxed text-rose-100/85">
              <span className="shrink-0">⚠️</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      );

    case "solvedExamples":
      return (
        <div className="space-y-4">
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
      );

    case "derivations":
      return (
        <div className="space-y-4">
          {chapter.derivations.map((d, i) => (
            <div key={i} className="rounded-2xl border border-white/[0.07] bg-[#111827] p-4">
              <h4 className="mb-3 text-sm font-black text-white">📐 {d.title}</h4>
              <ol className="space-y-1.5">
                {d.steps.map((s, j) => (
                  <li key={j} className="flex gap-2 text-[13px] leading-relaxed text-white/65">
                    <span className="font-mono text-white/35">{j + 1}.</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-3 rounded-lg bg-cyan-500/[0.08] px-3 py-2 text-[13px] font-semibold text-cyan-200">
                = {d.result}
              </p>
            </div>
          ))}
        </div>
      );

    case "formulaLinks":
      return <LinkRow links={chapter.formulaLinks} />;
    case "pyqLinks":
      return <LinkRow links={chapter.pyqLinks} />;
    case "learnLinks":
      return <LinkRow links={chapter.learnLinks} />;

    case "tests":
      return (
        <div className="space-y-2.5">
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

// ── Syllabus integration: every master-syllabus chapter is browsable here.
// Authored chapters render the full 13-section Notes Engine content; chapters
// without authored notes show an honest syllabus-only state (official syllabus
// points from the SSOT — notes are never fabricated).

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

// Id alignment between the syllabus SSOT and authored Notes Engine ids.
const NOTES_ID_FOR_SYLLABUS: Record<string, string> = { goc: "general-organic-chemistry" };

function authoredFor(syllabusId: string): NotesChapter | undefined {
  const notesId = NOTES_ID_FOR_SYLLABUS[syllabusId] ?? syllabusId;
  return NOTES_CHAPTERS.find((c) => c.id === notesId);
}

export default function NotesExplorer() {
  const [chapterId, setChapterId] = useState<string>(SYLLABUS_CHAPTERS[0].id);
  const [section, setSection] = useState<NoteSectionKey>("syllabus");
  const unlocked = useUnlocked();

  const syllabusChapter = SYLLABUS_CHAPTERS.find((c) => c.id === chapterId) ?? SYLLABUS_CHAPTERS[0];
  const chapter = authoredFor(syllabusChapter.id);
  const activeSection = NOTE_SECTIONS.find((s) => s.key === section) ?? NOTE_SECTIONS[0];
  const authoredCount = SYLLABUS_CHAPTERS.filter((c) => authoredFor(c.id)).length;

  // Preview Mode: free-chapter notes stay fully open. Premium authored chapters
  // show an unlock prompt instead of content. (Official syllabus points are
  // public exam information — never gated.)
  const chapterLocked = !!chapter && !unlocked && !isFreeChapter(chapter.id);
  const freeCount = NOTES_CHAPTERS.filter((c) => isFreeChapter(c.id)).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.4em] text-cyan-300">Notes Engine</p>
        <h1 className="text-3xl font-black md:text-4xl">Chapter Notes</h1>
        <p className="mt-2 text-sm text-white/55">
          {authoredCount} of {SYLLABUS_CHAPTERS.length} chapters have full verified notes
          ({NOTES_ENGINE_STATS.sections} sections each) — every chapter shows its official syllabus.
        </p>
      </div>

      {/* Chapter selector — full master syllabus, authored chapters marked */}
      <div className="flex flex-wrap gap-2">
        {SYLLABUS_CHAPTERS.map((c) => {
          const active = c.id === chapterId;
          const authored = authoredFor(c.id);
          return (
            <button
              key={c.id}
              onClick={() => { setChapterId(c.id); setSection("syllabus"); }}
              className={`rounded-xl border px-3.5 py-2 text-left transition ${
                active
                  ? "border-cyan-400/50 bg-cyan-500/10"
                  : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]"
              }`}
            >
              <span className={`block text-[13px] font-bold ${active ? "text-white" : "text-white/80"}`}>
                {c.title}
                {authored && !unlocked && !isFreeChapter(authored.id) && <span className="ml-1.5 text-[11px]" title="Pro chapter">🔒</span>}
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

          {/* Section nav — horizontal scroll on mobile */}
          <div className="-mx-4 overflow-x-auto px-4 md:mx-0 md:px-0">
            <div className="flex gap-2 md:flex-wrap">
              {NOTE_SECTIONS.map((s) => {
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

          {/* Active section (or unlock prompt for premium chapters) */}
          <section className="min-h-[200px]">
            {chapterLocked ? (
              <UnlockBanner available={freeCount} total={NOTES_ENGINE_STATS.chapters} itemLabel="notes chapters" />
            ) : (
              <>
                <h2 className="mb-4 flex items-center gap-2 text-lg font-black text-white">
                  <span>{activeSection.icon}</span> {activeSection.label}
                </h2>
                <SectionBody chapter={chapter} section={section} />
              </>
            )}
          </section>
        </>
      ) : (
        /* Syllabus-only state — no authored notes yet, never fabricated */
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
