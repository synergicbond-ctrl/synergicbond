// ─────────────────────────────────────────────────────────────────────────────
// Premium Notes Engine — content schema (SSOT).
//
// Topic → Subtopic → typed blocks. This is the CONTENT layer the chapter
// engine renders inside its Learn section — pure data, no React, so chapters
// are authored as .ts files under lib/premiumNotes/content/ and rendered by
// one reusable renderer (components/premiumNotes/NotesRenderer.tsx).
//
// Ten block kinds (the full premium contract):
//   detailed · visual · focus · trap · mistake · exception · trick ·
//   illustration · misc · revision
//
// Exam scoping: every block/subtopic/topic may carry `exams` — absent means
// ALL programs. The renderer filters by the active program, so ONE authored
// chapter serves NEET, JEE Main and JEE Advanced without duplication.
//
// Visuals are registry keys (strings) resolved to hand-built SVG server
// components per chapter — data stays serialisable, graphics stay real.
//
// Chemistry text uses Unicode directly (H₂O, sp³, 104.5°) — same convention
// as lib/cbse/practicals.ts and the masterSyllabus content.
// ─────────────────────────────────────────────────────────────────────────────

export type NotesExam = "NEET" | "JEE Main" | "JEE Advanced";

interface BaseBlock {
  /** Absent = shown to every program. */
  exams?: NotesExam[];
}

/** 1 · Detailed Notes — the core prose + point-wise teaching block. */
export interface DetailedBlock extends BaseBlock {
  kind: "detailed";
  heading?: string;
  paras?: string[];
  points?: string[];
}

/** 2 · Visual Notes — a registered SVG/diagram with caption. */
export interface VisualBlock extends BaseBlock {
  kind: "visual";
  title: string;
  /** Key into the chapter's visual registry. */
  visual: string;
  caption?: string;
}

/** 3 · Focus Points — what the examiner actually tests. */
export interface FocusBlock extends BaseBlock {
  kind: "focus";
  title?: string;
  points: string[];
}

/** 4 · Exam Traps — the misleading framing vs the reality. */
export interface TrapBlock extends BaseBlock {
  kind: "trap";
  items: { trap: string; reality: string }[];
}

/** 5 · Common Mistakes — wrong habit vs correction. */
export interface MistakeBlock extends BaseBlock {
  kind: "mistake";
  items: { wrong: string; right: string }[];
}

/** 6 · Exceptions — statements that break the general rule, with the why. */
export interface ExceptionBlock extends BaseBlock {
  kind: "exception";
  items: { statement: string; why?: string }[];
}

/** 7 · Memory Tricks — mnemonic + what it recalls. */
export interface TrickBlock extends BaseBlock {
  kind: "trick";
  items: { trick: string; recall: string }[];
}

/** 8 · Solved Illustrations — same contract as the AI illustration lab. */
export interface IllustrationBlock extends BaseBlock {
  kind: "illustration";
  level: "basic" | "intermediate" | "advanced";
  question: string;
  thinking: string;
  solution: string;
  fastMethod?: string;
  alternateMethod?: string;
  commonMistakes?: string[];
}

/** 9 · Misc Examples — quick mixed-concept applications. */
export interface MiscBlock extends BaseBlock {
  kind: "misc";
  level: "easy" | "medium" | "hard" | "challenge";
  question: string;
  answer: string;
  explanation: string;
}

/** 10 · Revision Notes — one-screen compressed recall. */
export interface RevisionBlock extends BaseBlock {
  kind: "revision";
  title?: string;
  points: string[];
}

export type NoteBlock =
  | DetailedBlock
  | VisualBlock
  | FocusBlock
  | TrapBlock
  | MistakeBlock
  | ExceptionBlock
  | TrickBlock
  | IllustrationBlock
  | MiscBlock
  | RevisionBlock;

export interface NoteSubtopic {
  id: string;
  title: string;
  exams?: NotesExam[];
  blocks: NoteBlock[];
}

export interface NoteTopic {
  id: string;
  title: string;
  /** One-line orientation shown under the topic title. */
  intro?: string;
  exams?: NotesExam[];
  subtopics: NoteSubtopic[];
}

export interface PremiumChapterNotes {
  /** masterSyllabus (dir) chapter id — the chapter engine's id. */
  chapterId: string;
  title: string;
  tagline: string;
  topics: NoteTopic[];
  /** Chapter-end one-screen revision sheet. */
  chapterRevision: string[];
}

// ── Filtering helpers (pure) ─────────────────────────────────────────────────

function forExam<T extends { exams?: NotesExam[] }>(item: T, exam: NotesExam): boolean {
  return !item.exams || item.exams.includes(exam);
}

/** Chapter scoped to one program: topics/subtopics/blocks the exam should see. */
export function filterNotesForExam(notes: PremiumChapterNotes, exam: NotesExam): PremiumChapterNotes {
  return {
    ...notes,
    topics: notes.topics
      .filter((t) => forExam(t, exam))
      .map((t) => ({
        ...t,
        subtopics: t.subtopics
          .filter((st) => forExam(st, exam))
          .map((st) => ({ ...st, blocks: st.blocks.filter((b) => forExam(b, exam)) }))
          .filter((st) => st.blocks.length > 0),
      }))
      .filter((t) => t.subtopics.length > 0),
  };
}

/** Derived counts (never hardcode in UI). */
export function notesStats(notes: PremiumChapterNotes) {
  const subtopics = notes.topics.reduce((s, t) => s + t.subtopics.length, 0);
  const blocks = notes.topics.reduce((s, t) => s + t.subtopics.reduce((x, st) => x + st.blocks.length, 0), 0);
  const byKind = new Map<string, number>();
  for (const t of notes.topics) for (const st of t.subtopics) for (const b of st.blocks) {
    byKind.set(b.kind, (byKind.get(b.kind) ?? 0) + 1);
  }
  return { topics: notes.topics.length, subtopics, blocks, byKind };
}
