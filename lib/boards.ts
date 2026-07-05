import type { PYQChapter } from "@/lib/pyq";
import type { BoardSlug, ClassSlug } from "@/lib/boardDashboard";
import { getCbseChapters } from "@/lib/cbse/syllabus";
import { getIscUnits } from "@/lib/isc/syllabus";

// ─────────────────────────────────────────────────────────────────────────────
// Board syllabus resolver — the SINGLE point the board dashboard pages use to
// get a class's chapters, so boards are never mixed:
//   cbse         → lib/cbse (official CBSE units)
//   icse         → lib/isc (official ISC 2026 units; Class 11 honestly empty)
//   state-boards → the NCERT-aligned common core (CBSE-derived, labelled as
//                  such — the honest existing behaviour until a specific
//                  state's official syllabus is uploaded)
// ─────────────────────────────────────────────────────────────────────────────

export interface BoardChapter {
  id: string;
  unit: number;
  title: string;
  class: 11 | 12;
  category: "physical" | "inorganic" | "organic";
  masterId?: string;
  pyqChapters: PYQChapter[];
  learnHref?: string;
  topics?: string[];
}

export function getBoardChapters(board: BoardSlug, cls: ClassSlug): BoardChapter[] {
  if (board === "icse") {
    return getIscUnits(cls).map((u) => ({
      id: u.id, unit: u.unit, title: u.title, class: u.class,
      category: u.category, masterId: u.masterId, pyqChapters: u.pyqChapters, topics: u.topics,
    }));
  }
  // cbse + state-boards (NCERT-aligned common core)
  return getCbseChapters(cls).map((c) => ({ ...c }));
}

/** The board's exam name for prompts/labels — never another board's name. */
export function boardExamName(board: BoardSlug): "CBSE" | "ISC" | "State Board" {
  if (board === "icse") return "ISC";
  if (board === "state-boards") return "State Board";
  return "CBSE";
}

/** Honest label when a board runs on the NCERT-aligned common core. */
export function boardCoreNote(board: BoardSlug): string | null {
  return board === "state-boards"
    ? "State Boards run on the NCERT-aligned common core until a specific state's official syllabus is uploaded."
    : null;
}
