import type { Program } from "./programs";

// ─────────────────────────────────────────────────────────────────────────────
// Program Hub SSOT (Program Hub Scaffold pass).
//
// One source of truth for the 7-section hub shown on /programs/[slug]:
//   Learn · Memory System · Practice · Testing · Revision · Analytics ·
//   Intelligence / Premium.
//
// Sections/cards are derived from the program (slug drives program-scoped
// hrefs). Every `available` card points at a REAL existing route; unbuilt
// features are `coming-soon` (no href) — never a fake page. `iconKey` is a
// string mapped to a lucide icon in the hub page, so this file stays a pure
// data module with no React imports.
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
  "memory",
  "practice",
  "testing",
  "revision",
  "analytics",
  "intelligence",
] as const;

export function getProgramSections(program: Program): HubSection[] {
  const base = `/programs/${program.slug}`;

  return [
    {
      key: "learn",
      label: "Learn",
      iconKey: "book",
      blurb: "Chapters, notes, formulas and the verified concept library.",
      cards: [
        { title: "Program Learn Hub", description: "Chapters + modules scoped to this program.", status: "available", href: `${base}/learn`, iconKey: "book" },
        { title: "Chapter Notes", description: "Verified exam notes with solved examples.", status: "available", href: "/learn", iconKey: "notes" },
        { title: "Formula Cards", description: "Physical-chemistry formulas with units & PYQ links.", status: "available", href: "/formula-cards", iconKey: "sigma" },
        { title: "Knowledge Vault", description: "Saved concepts, exceptions and quick facts.", status: "available", href: "/vault", iconKey: "vault" },
        { title: "Periodic Table", description: "Interactive element data and trends.", status: "available", href: "/periodic-table", iconKey: "table" },
      ],
    },
    {
      key: "memory",
      label: "Memory System",
      iconKey: "brain",
      blurb: "Active-recall decks scheduled with SM-2 spaced repetition.",
      cards: [
        { title: "Daily Revision Queue", description: "Every card due today, across all decks.", status: "available", href: "/memory?deck=daily", iconKey: "repeat" },
        { title: "Formula Recall", description: "Rapid drill on expressions, variables and units.", status: "available", href: "/memory?deck=formula", iconKey: "sigma" },
        { title: "Reagent Recall", description: "What each reagent does, and its selectivity.", status: "available", href: "/memory?deck=reagent", iconKey: "flask" },
        { title: "Fact & Order Recall", description: "NCERT exceptions and verified ranking orders.", status: "available", href: "/memory?deck=fact", iconKey: "brain" },
        { title: "Reaction Recall", description: "Mechanism recall decks — building next.", status: "coming-soon", iconKey: "reaction" },
      ],
    },
    {
      key: "practice",
      label: "Practice",
      iconKey: "target",
      blurb: "Previous-year questions with chapter, topic and difficulty filters.",
      cards: [
        { title: "Program Practice", description: "PYQs filtered to this program's exam.", status: "available", href: `${base}/practice`, iconKey: "target" },
        { title: "PYQ Center", description: "Full previous-year intelligence and search.", status: "available", href: "/pyq", iconKey: "target" },
        { title: "Snap & Solve", description: "Photo a question → verified step-by-step solution.", status: "available", href: "/snap-solve", iconKey: "camera" },
      ],
    },
    {
      key: "testing",
      label: "Testing",
      iconKey: "clipboard",
      blurb: "Chapter, topic and full-paper tests with saved attempts.",
      cards: [
        { title: "Program Tests", description: "Chapter · topic · full-paper tests for this program.", status: "available", href: `${base}/tests`, iconKey: "clipboard" },
        { title: "Mock Exam", description: "Real-pattern mock papers with scoring & review.", status: "available", href: "/exam", iconKey: "clipboard" },
        { title: "Quiz", description: "Quick chapter quizzes for fast practice.", status: "available", href: "/quiz", iconKey: "quiz" },
        { title: "Custom Test Builder", description: "Pick chapters, difficulty and length.", status: "coming-soon", iconKey: "sliders" },
      ],
    },
    {
      key: "revision",
      label: "Revision",
      iconKey: "history",
      blurb: "Saved attempts, targeted revision and mistake review.",
      cards: [
        { title: "Revision Engine", description: "High-yield revision sessions.", status: "available", href: "/revision", iconKey: "history" },
        { title: "Saved Attempts", description: "Reopen and review any submitted exam or test.", status: "available", href: "/revision", iconKey: "history" },
        { title: "Mistake Journal", description: "Auto-collected wrong questions with reattempt queue.", status: "available", href: "/mistakes", iconKey: "alert" },
      ],
    },
    {
      key: "analytics",
      label: "Analytics",
      iconKey: "activity",
      blurb: "Performance signals and exam-readiness — from real attempts only.",
      cards: [
        { title: "Performance", description: "Accuracy and weak-topic breakdown.", status: "available", href: "/performance", iconKey: "activity" },
        { title: "Exam Predictor", description: "Likely high-yield topics from PYQ trends.", status: "available", href: "/exam-predictor", iconKey: "predict" },
        { title: "Syllabus Mastery Map", description: "Chapter-by-chapter R/Y/G mastery from your attempts.", status: "available", href: "/analytics", iconKey: "gauge" },
        { title: "NCERT Blind Spots", description: "Line-level NCERT coverage — mastered, weak and unseen.", status: "available", href: "/ncert", iconKey: "predict" },
        { title: "Readiness Report", description: "One explainable readiness score with what to fix next.", status: "available", href: "/readiness", iconKey: "gauge" },
      ],
    },
    {
      key: "intelligence",
      label: "Intelligence / Premium",
      iconKey: "sparkles",
      blurb: "AI tutoring, planning and the personalised study twin.",
      cards: [
        { title: "AI Tutor", description: "Step-by-step conceptual doubt solving.", status: "available", href: "/tutor", iconKey: "bot" },
        { title: "AI Notes", description: "Generate exam-focused notes for any topic.", status: "available", href: "/ai-lab/notes", iconKey: "notes" },
        { title: "AI Board Examiner", description: "Grade a written answer to the marking scheme.", status: "available", href: "/board-examiner", iconKey: "clipboard" },
        { title: "Study Planner", description: "Week-by-week syllabus plan in the AI Lab.", status: "available", href: "/ai-lab", iconKey: "calendar" },
        { title: "Digital Twin", description: "A personalised model of your prep that adapts your plan.", status: "premium", iconKey: "sparkles" },
      ],
    },
  ];
}
