import { NOTES_CHAPTERS } from "@/lib/notesEngine";
import { masterFormulas } from "@/lib/masterSyllabus/formulas";
import { ALL_PYQ_QUESTIONS } from "@/lib/pyq";
import { CHAPTER_TESTS } from "@/lib/tests/testEngine";

// ─────────────────────────────────────────────────────────────────────────────
// Week 10–11 — Knowledge Graph helpers (preparation layer, no visualization)
//
// Lightweight LINKING helpers over the existing SSOT catalogues:
//
//   Chapter → Notes → Formula → PYQ → Test → Snap & Solve
//
// This module defines NO new schemas and stores NO new content. Every node
// references an existing id (NotesChapter.id, masterFormulas key, PYQChapter
// enum value, TestDefinition.id) and an existing route. Counts are real counts
// from the source catalogues — nothing is fabricated. Chapters without a link
// in some system simply omit that node.
// ─────────────────────────────────────────────────────────────────────────────

export type KnowledgeNodeKind =
  | "notes"
  | "formula"
  | "pyq"
  | "test"
  | "snap-solve";

export interface KnowledgeNode {
  kind: KnowledgeNodeKind;
  /** The id of the linked entry in ITS OWN SSOT (notes id, formula key, PYQ chapter, test id). */
  refId: string;
  label: string;
  href: string;
  /** Real count of items behind this node (formulas / questions / test questions). */
  count?: number;
}

export interface ChapterKnowledgeGraph {
  /** Anchor id — the NotesChapter.id from the Notes Engine SSOT. */
  chapterId: string;
  title: string;
  /** Ordered chain: notes → formula → pyq → test → snap-solve. */
  nodes: KnowledgeNode[];
}

// Id-alignment map (same pattern as the Snap & Solve resolution layer): aligns
// a notes chapter id with its key in masterFormulas and its PYQChapter name.
// This is an alignment of EXISTING ids, not a new schema.
const CHAPTER_ALIGNMENT: Record<string, { formulaKey?: string; pyqChapter?: string }> = {
  "mole-concept": { formulaKey: "mole-concept", pyqChapter: "Some Basic Concepts" },
  "periodic-table": { pyqChapter: "Periodic Table" },
  "general-organic-chemistry": { pyqChapter: "General Organic Chemistry" },
};

function buildChapterGraph(chapterId: string): ChapterKnowledgeGraph | null {
  const notes = NOTES_CHAPTERS.find((c) => c.id === chapterId);
  if (!notes) return null;

  const align = CHAPTER_ALIGNMENT[chapterId] ?? {};
  const nodes: KnowledgeNode[] = [];

  // Notes — the chapter's verified notes (always present for an anchor chapter)
  nodes.push({
    kind: "notes",
    refId: notes.id,
    label: `${notes.title} — notes`,
    href: "/notes",
  });

  // Formula cards — only when the chapter has a real formula-vault entry
  if (align.formulaKey && masterFormulas[align.formulaKey]) {
    nodes.push({
      kind: "formula",
      refId: align.formulaKey,
      label: `${notes.title} — formula cards`,
      href: "/vault/formulas",
      count: masterFormulas[align.formulaKey].length,
    });
  }

  // PYQ — real question count from the PYQ SSOT
  if (align.pyqChapter) {
    const pyqCount = ALL_PYQ_QUESTIONS.filter((q) => q.chapter === align.pyqChapter).length;
    if (pyqCount > 0) {
      nodes.push({
        kind: "pyq",
        refId: align.pyqChapter,
        label: `${align.pyqChapter} — previous-year questions`,
        href: "/pyq",
        count: pyqCount,
      });
    }

    // Test — the chapter test the Test Engine already built from those PYQs
    const test = CHAPTER_TESTS.find((d) => d.title === align.pyqChapter);
    if (test) {
      nodes.push({
        kind: "test",
        refId: test.id,
        label: `${test.title} — chapter test`,
        href: "/tests",
        count: test.count,
      });
    }
  }

  // Snap & Solve — its own resolution layer detects these chapters (read-only link)
  nodes.push({
    kind: "snap-solve",
    refId: chapterId,
    label: "Snap & Solve a problem from this chapter",
    href: "/snap-solve",
  });

  return { chapterId, title: notes.title, nodes };
}

/** Full graph for every Notes-Engine chapter (the anchor SSOT). Built once. */
export const KNOWLEDGE_GRAPH: ChapterKnowledgeGraph[] = NOTES_CHAPTERS
  .map((c) => buildChapterGraph(c.id))
  .filter((g): g is ChapterKnowledgeGraph => g !== null);

export function getChapterGraph(chapterId: string): ChapterKnowledgeGraph | undefined {
  return KNOWLEDGE_GRAPH.find((g) => g.chapterId === chapterId);
}

/** Real, transparent counts — used by /performance "linked chapters available". */
export const KNOWLEDGE_GRAPH_STATS = {
  linkedChapters: KNOWLEDGE_GRAPH.length,
  totalNodes: KNOWLEDGE_GRAPH.reduce((s, g) => s + g.nodes.length, 0),
} as const;
