import type { Program } from "./programs";

// ─────────────────────────────────────────────────────────────────────────────
// Program Hub SSOT (Dashboard Simplification pass).
//
// One source of truth for the 6-section hub shown on /programs/[slug]:
//   Learn · Practice · Tests · Revision · Progress · AI Tools.
//
// Every card's `status` is honest: "available" cards point at a REAL existing
// route; "coming-soon" cards are filtered out of the rendered nav entirely
// (ProgramHubSections drops them) so unfinished features never show as dead
// cards in the main student workflow. "premium" cards render but gate on
// entitlement — premium is an access status, not a navigation category, so it
// never gets its own top-level section.
//
// Six destinations, one obvious canonical entry point per feature:
//   - Learn: Chapter Notes · Syllabus · Formula Cards · Chemistry Tools
//   - Practice: PYQ Center · Topic Practice · Snap & Solve
//   - Tests: Chapter & Topic Tests · Mock Exams · Test History
//   - Revision: Revision Queue (merged Memory System + Revision Engine) ·
//     Recall Decks · Mistake Journal
//   - Progress: one Progress Dashboard (replaces 6 separate analytics cards)
//   - AI Tools: AI Tutor · AI Notes · AI Board Examiner · Study Planner
// ─────────────────────────────────────────────────────────────────────────────

export type CardStatus = "available" | "coming-soon" | "premium";

export interface HubCard {
  title: string;
  description: string;
  status: CardStatus;
  /** Present only for available/premium cards that link somewhere real. */
  href?: string;
  iconKey: string;
}

export interface HubSection {
  /** Stable id used for the tab + deep-link hash. */
  key: string;
  label: string;
  iconKey: string;
  blurb: string;
  cards: HubCard[];
}

export const HUB_SECTION_KEYS = [
  "learn",
  "practice",
  "tests",
  "revision",
  "progress",
  "ai-tools",
] as const;

export function getProgramSections(program: Program): HubSection[] {
  const base = `/programs/${program.slug}`;
  return buildBaseSections(program, base);
}

function buildBaseSections(program: Program, base: string): HubSection[] {
  const { pyqExam } = program;
  const pyqCenterHref = pyqExam ? `/pyq?exam=${encodeURIComponent(pyqExam)}` : "/pyq";

  return [
    {
      key: "learn",
      label: "Learn",
      iconKey: "book",
      blurb: "Chapters, the official syllabus, formula cards and chemistry tools.",
      cards: [
        { title: "Chapter Notes", description: "Verified exam notes, chapter browsing, exam filters and access badges.", status: "available", href: `${base}/learn`, iconKey: "notes" },
        { title: "Syllabus", description: "The complete official syllabus — every unit, topic and question format.", status: "available", href: `${base}/syllabus`, iconKey: "book" },
        { title: "Formula Cards", description: "Physical-chemistry formulas with units & PYQ links.", status: "available", href: "/formula-cards", iconKey: "sigma" },
        { title: "Chemistry Tools", description: "Periodic table, knowledge vault, molecule explorer, reagents, orders and colours.", status: "available", href: "/chemistry-tools", iconKey: "flask" },
      ],
    },
    {
      key: "practice",
      label: "Practice",
      iconKey: "target",
      blurb: "Previous-year questions with chapter, topic and difficulty filters.",
      cards: [
        { title: "PYQ Center", description: `Full previous-year intelligence and search${pyqExam ? `, filtered to ${pyqExam}` : ""}.`, status: "available", href: pyqCenterHref, iconKey: "target" },
        { title: "Topic Practice", description: pyqExam ? `PYQs filtered to this program's exam, by chapter and topic.` : "Question practice by chapter and topic.", status: "available", href: `${base}/practice`, iconKey: "repeat" },
        { title: "Snap & Solve", description: "Photo a question → verified step-by-step solution.", status: "available", href: "/snap-solve", iconKey: "camera" },
      ],
    },
    {
      key: "tests",
      label: "Tests",
      iconKey: "clipboard",
      blurb: "Chapter, topic and mock tests, plus every attempt you've submitted.",
      cards: [
        { title: "Chapter & Topic Tests", description: "Chapter and topic tests for this program, built from real PYQs.", status: "available", href: `${base}/tests`, iconKey: "clipboard" },
        { title: "Mock Exams", description: "Real-pattern mock papers with scoring & review.", status: "available", href: "/exam", iconKey: "clipboard" },
        { title: "Test History", description: "Reopen and review any submitted exam or test.", status: "available", href: "/tests/history", iconKey: "history" },
      ],
    },
    {
      key: "revision",
      label: "Revision",
      iconKey: "history",
      blurb: "Scheduled recall and your mistake queue — memory decks and revision sessions, merged.",
      cards: [
        { title: "Revision Queue", description: "Daily spaced-repetition due cards plus high-yield revision sessions, in one place.", status: "available", href: `${base}/revision`, iconKey: "repeat" },
        { title: "Recall Decks", description: "Formula, reagent and fact/order recall — pick a deck inside.", status: "available", href: "/memory", iconKey: "brain" },
        { title: "Mistake Journal", description: "Auto-collected wrong questions with reattempt queue.", status: "available", href: "/mistakes", iconKey: "alert" },
      ],
    },
    {
      key: "progress",
      label: "Progress",
      iconKey: "activity",
      blurb: "Every performance signal in one dashboard — from real attempts only.",
      cards: [
        { title: "Progress Dashboard", description: "Overview, mastery map, readiness score, speed analysis and NCERT gaps — one dashboard.", status: "available", href: `${base}/progress`, iconKey: "gauge" },
      ],
    },
    {
      key: "ai-tools",
      label: "AI Tools",
      iconKey: "sparkles",
      blurb: "AI tutoring, notes, grading and planning.",
      cards: [
        { title: "AI Tutor", description: "Step-by-step conceptual doubt solving.", status: "available", href: "/tutor", iconKey: "bot" },
        { title: "AI Notes", description: "Generate exam-focused notes for any topic.", status: "available", href: "/ai-lab/notes", iconKey: "notes" },
        { title: "AI Board Examiner", description: "Grade a written answer to the marking scheme.", status: "available", href: "/board-examiner", iconKey: "clipboard" },
        { title: "Study Planner", description: "Week-by-week syllabus plan in the AI Lab.", status: "available", href: "/ai-lab", iconKey: "calendar" },
      ],
    },
  ];
}
