"use client";

import { useState } from "react";
import Link from "next/link";
import {
  type NotesChapter,
  type NoteLink,
} from "@/lib/notesEngine";
import { masterSyllabus } from "@/lib/masterSyllabus/all";
import { AUTHORED_COURSES, COURSE_GROUP_CARDS, coursesForSyllabusChapter, groupLessonTotal, type AuthoredCourse } from "@/lib/notes/chapterCatalog";
import UnlockBanner from "@/components/monetization/UnlockBanner";

// ─────────────────────────────────────────────────────────────────────────────
// Notes Explorer — uniform chapter card system.
//
// ONE canonical card component for every JEE chapter: chapters with authored
// full-notes courses, premium chapters (visible, badge + gated route) and
// syllabus-only chapters all share identical card geometry. Card data comes
// from the safe metadata catalog (lib/notes/chapterCatalog) + masterSyllabus;
// premium note BODIES are never serialized here — the server page only passes
// authorized notesEngine chapters.
//
// Detail tabs (per selected chapter):
// 1. Detailed Notes 2. Short Notes 3. Formula Sheets 4. PYQ Section
// 5. Practice Section 6. Mock Tests
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

// ─────────────────────────────────────────────────────────────────────────────
// Uniform chapter card
// ─────────────────────────────────────────────────────────────────────────────

const CATEGORY_LABEL: Record<SyllabusLite["category"], string> = {
  physical: "Physical Chemistry",
  organic: "Organic Chemistry",
  inorganic: "Inorganic Chemistry",
};

interface ChapterCardData {
  key: string;
  syllabusId: string;
  title: string;
  category: SyllabusLite["category"];
  /** Shown above the title when a syllabus chapter has several courses. */
  groupLabel?: string;
  sectionLabel?: string;
  description: string;
  status: "full" | "full-inline" | "syllabus";
  statusLine: string;
  premium: boolean;
  /** True when a chapter's sections mix free and premium access. */
  mixedAccess?: boolean;
  /** Authored course route (server-gated when premium). */
  href?: string;
}

function PremiumBadge() {
  return (
    <span className="shrink-0 rounded-full border border-[#e8b84b66] bg-[#e8b84b1f] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#e8b84b]">
      Premium
    </span>
  );
}

function MixedBadge() {
  return (
    <span className="shrink-0 rounded-full border border-[#e8b84b66] bg-[#e8b84b14] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#c3d1dd]">
      Free + Premium
    </span>
  );
}

function FreeBadge() {
  return (
    <span className="shrink-0 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-emerald-300">
      Free
    </span>
  );
}

/** ONE canonical chapter card — identical geometry for every state. */
function ChapterCard({
  card,
  selected,
  onSelect,
}: {
  card: ChapterCardData;
  selected: boolean;
  onSelect: () => void;
}) {
  const statusTone =
    card.status === "syllabus" ? "text-[#91a9bc]" : "text-[#5fd4ea]";

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => {
        if (card.href) {
          window.location.assign(card.href);
          return;
        }
        onSelect();
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          if (card.href) {
            window.location.assign(card.href);
            return;
          }
          onSelect();
        }
      }}
      aria-pressed={selected}
      className={`group flex min-h-[190px] cursor-pointer flex-col rounded-[13px] border p-5 text-left transition ${
        selected
          ? "border-[#e8b84b] bg-[#e8b84b1f] shadow-[0_8px_24px_rgba(232,184,75,0.12)]"
          : "border-[#24405c] bg-[#122232] hover:border-[#5fd4ea] hover:bg-[#182b3e]"
      } border-l-4 ${selected ? "border-l-[#e8b84b]" : "border-l-[#5fd4ea]"}`}
    >
      <div className="flex items-start justify-between gap-2">
        <span className="min-w-0 text-[10.5px] font-black uppercase tracking-[0.16em] text-[#91a9bc]">
          {card.groupLabel ? `${card.groupLabel}${card.sectionLabel ? ` · ${card.sectionLabel}` : ""}` : CATEGORY_LABEL[card.category]}
        </span>
        {card.mixedAccess ? <MixedBadge /> : card.premium ? <PremiumBadge /> : card.status !== "syllabus" ? <FreeBadge /> : null}
      </div>
      <h3 className={`mt-2 text-base font-black leading-snug ${selected ? "text-[#e8b84b]" : "text-[#eef3f8]"}`}>
        {card.title}
      </h3>
      <p className="mt-1.5 line-clamp-3 flex-1 text-xs leading-relaxed text-[#c3d1dd]/90">
        {card.description}
      </p>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-[#24405c]/70 pt-3">
        <span className={`text-[11px] font-bold ${statusTone}`}>{card.statusLine}</span>
        {card.href ? (
          <Link
            href={card.href}
            onClick={(e) => e.stopPropagation()}
            className="text-xs font-black text-[#5fd4ea] transition group-hover:translate-x-0.5 hover:text-[#e8b84b]"
          >
            Explore lessons →
          </Link>
        ) : (
          <span className="text-xs font-black text-[#91a9bc]">
            {card.status === "syllabus" ? "View syllabus ↓" : "Open notes ↓"}
          </span>
        )}
      </div>
    </div>
  );
}

function buildCards(
  chapters: readonly NotesChapter[],
  restrictedChapterIds: readonly string[],
): ChapterCardData[] {
  const cards: ChapterCardData[] = [];
  for (const syllabusChapter of SYLLABUS_CHAPTERS) {
    const courses = coursesForSyllabusChapter(syllabusChapter.id);
    if (courses.length > 1) {
      // Sections of ONE chapter (e.g. Some Basic Concepts) → one chapter card.
      const group = COURSE_GROUP_CARDS[syllabusChapter.id];
      const lessonTotal = groupLessonTotal(courses);
      cards.push({
        key: syllabusChapter.id,
        syllabusId: syllabusChapter.id,
        title: syllabusChapter.title,
        category: syllabusChapter.category,
        description: group?.description ?? courses.map((course) => course.title).join(" · "),
        status: "full",
        statusLine: `Full notes · ${courses.length} sections${lessonTotal > 0 ? ` · ${lessonTotal} lessons` : ""}`,
        premium: courses.every((course) => course.premium),
        mixedAccess: courses.some((course) => course.premium) && courses.some((course) => !course.premium),
        href: group?.href ?? courses[0].href,
      });
      continue;
    }
    if (courses.length === 1) {
      const course = courses[0];
      cards.push({
        key: course.id,
        syllabusId: syllabusChapter.id,
        title: course.title,
        category: syllabusChapter.category,
        description: course.description,
        status: "full",
        statusLine: `Full notes · ${course.lessonLabel}`,
        premium: course.premium,
        href: course.href,
      });
      continue;
    }
    const authored = authoredFor(syllabusChapter.id, chapters);
    const locked = !authored && restrictedChapterIds.includes(notesIdFor(syllabusChapter.id));
    cards.push({
      key: syllabusChapter.id,
      syllabusId: syllabusChapter.id,
      title: syllabusChapter.title,
      category: syllabusChapter.category,
      description: `${syllabusChapter.concepts.length} syllabus topics · difficulty ${syllabusChapter.difficulty} · ~${syllabusChapter.estimatedHours}h of study.`,
      status: authored ? "full-inline" : "syllabus",
      statusLine: authored
        ? "Full notes · in-page"
        : locked
          ? "Full notes · Premium"
          : "Syllabus only",
      premium: locked,
    });
  }
  return cards;
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
  const chapterCourses = coursesForSyllabusChapter(syllabusChapter.id);
  const chapterLocked =
    !chapter && chapterCourses.length === 0 && restrictedChapterIds.includes(notesIdFor(syllabusChapter.id));
  const activeSection = STRICT_NOTE_SECTIONS.find((s) => s.key === section) ?? STRICT_NOTE_SECTIONS[0];

  const cards = buildCards(chapters, restrictedChapterIds);
  const fullCardCount = cards.filter((c) => c.status !== "syllabus").length;

  const selectChapter = (syllabusId: string) => {
    setChapterId(syllabusId);
    setSection("detailed");
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.4em] text-cyan-300">Notes Engine</p>
        <h1 className="text-3xl font-black md:text-4xl">Chapter Notes Explorer</h1>
        <p className="mt-2 text-sm text-white/55">
          {AUTHORED_COURSES.length} authored full-notes courses across the JEE syllabus — {fullCardCount} chapter
          cards with verified full notes, every other chapter with its official syllabus. Premium chapters stay
          visible; their content unlocks with your plan.
        </p>
      </div>

      {/* Uniform chapter card system, grouped by branch */}
      {(["physical", "organic", "inorganic"] as const).map((category) => {
        const categoryCards = cards.filter((c) => c.category === category);
        if (categoryCards.length === 0) return null;
        return (
          <section key={category}>
            <h2 className="mb-3 border-b-2 border-[#24405c] pb-2 font-serif text-xl font-bold text-[#e8b84b]">
              {CATEGORY_LABEL[category]}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categoryCards.map((card) => (
                <ChapterCard
                  key={card.key}
                  card={card}
                  selected={card.syllabusId === chapterId}
                  onSelect={() => selectChapter(card.syllabusId)}
                />
              ))}
            </div>
          </section>
        );
      })}

      {/* Selected chapter detail */}
      <div className="border-t border-[#24405c] pt-6">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#91a9bc]">
          Selected chapter · {syllabusChapter.title}
        </p>

        {/* Authored course shortcuts for the selected chapter */}
        {chapterCourses.length > 0 && (
          <div className="mb-5 flex flex-wrap gap-2">
            {chapterCourses.map((course: AuthoredCourse) => (
              <Link
                key={course.id}
                href={course.href}
                className="rounded-[13px] border border-[#24405c] border-l-4 border-l-[#5fd4ea] bg-[#122232] px-3.5 py-2 text-[13px] font-bold text-[#c3d1dd] transition hover:border-[#5fd4ea] hover:text-white"
              >
                {course.title} · {course.lessonLabel}
                {course.premium && <span className="ml-1.5 text-[10px] font-black uppercase text-[#e8b84b]">Premium</span>}
              </Link>
            ))}
          </div>
        )}

        {chapter ? (
          <div className="space-y-6">
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
          </div>
        ) : chapterLocked ? (
          <section className="min-h-[200px]">
            <UnlockBanner available={freeNoteCount} total={totalNoteCount} itemLabel="notes chapters" />
          </section>
        ) : (
          /* Syllabus state (also shown under authored-course chapters without inline notes) */
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
                {chapterCourses.length > 0
                  ? "Open the full authored course above — the official syllabus is listed below."
                  : "Detailed notes not added yet. Official syllabus available below."}
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
    </div>
  );
}
