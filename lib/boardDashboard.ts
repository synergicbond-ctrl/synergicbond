// ─────────────────────────────────────────────────────────────────────────────
// Board Exam Dashboard SSOT — flow: Board → Purchased Class → Class Dashboard.
//
// Matches the live School Boards UI (CBSE / ICSE / State Boards). One source of
// truth for the board/class catalogue and the six class-dashboard sections.
// Every `available` item points at a REAL existing route (no placeholders,
// no duplicate schemas); genuinely-new sub-systems are honest coming-soon.
// Boards are kept strictly separate — content is never mixed across boards.
// ─────────────────────────────────────────────────────────────────────────────

export type BoardSlug = "cbse" | "icse" | "state-boards";
export type ClassSlug = "class-11" | "class-12";
export type ItemStatus = "available" | "coming-soon";

export interface Board {
  slug: BoardSlug;
  name: string;
  desc: string; // matches the live board-card subtitle
}

export const BOARDS: Board[] = [
  { slug: "cbse", name: "CBSE", desc: "Class 11–12 · NCERT first" },
  { slug: "icse", name: "ICSE", desc: "ISC Class 11–12" },
  { slug: "state-boards", name: "State Boards", desc: "State curricula tracks" },
];

export const CLASSES: { slug: ClassSlug; name: string; label: string }[] = [
  { slug: "class-11", name: "Class 11", label: "Class 11 Chemistry" },
  { slug: "class-12", name: "Class 12", label: "Class 12 Chemistry" },
];

export function getBoard(slug: string): Board | undefined {
  return BOARDS.find((b) => b.slug === slug);
}
export function getClass(slug: string) {
  return CLASSES.find((c) => c.slug === slug);
}

export interface DashItem {
  label: string;
  status: ItemStatus;
  href?: string; // present for available
}
export interface DashSection {
  key: string;
  label: string;
  blurb: string;
  icon: string;
  /** Chapter-Wise Learning is intentionally SEPARATE from Full Syllabus. */
  items: DashItem[];
}

// Available items reuse the live platform; coming-soon = genuinely new work.
const A = (label: string, href: string): DashItem => ({ label, status: "available", href });
const S = (label: string): DashItem => ({ label, status: "coming-soon" });

export const CLASS_DASHBOARD_SECTIONS: DashSection[] = [
  {
    key: "chapter-learning",
    label: "Chapter-Wise Learning",
    blurb: "Syllabus → Topic → Subtopic → Chapter. Everything for one chapter, in depth.",
    icon: "book",
    items: [
      A("Detailed Notes", "/learn"),
      A("Practice Problems", "/pyq"),
      A("PYQs", "/pyq"),
      A("Answer Evaluation", "/board-examiner"),
      A("Study Planner", "/ai-lab"),
      A("Short Notes", "/notes"),
      A("Memory Tips", "/memory"),
      A("Important Formulae", "/formula-cards"),
      A("Important Reactions", "/name-reactions"),
      A("Common Mistakes", "/learn"),
      S("NCERT Exercise"),
      S("NCERT Exemplar"),
      S("Important Definitions"),
      S("Important Diagrams"),
      S("Student Help"),
    ],
  },
  {
    key: "full-syllabus",
    label: "Full Syllabus Dashboard",
    blurb: "Whole-course tools across every chapter at once.",
    icon: "layout",
    items: [
      A("Short Notes", "/notes"),
      A("Practice Problems", "/pyq"),
      A("Full Syllabus Mock Tests", "/tests"),
      A("PYQ Bank", "/pyq"),
      A("NCERT Hub", "/notes"),
      A("AI Tutor", "/tutor"),
      A("Knowledge Vault", "/vault"),
      A("Answer Evaluation", "/board-examiner"),
      A("Smart Revision Hub", "/revision"),
      S("Custom Test Paper Generator"),
    ],
  },
  {
    key: "project-journal",
    label: "Project & Journal Hub",
    blurb: "Investigatory projects, practical journals and lab records — export-ready.",
    icon: "folder",
    items: [
      S("Investigatory Projects"), S("Practical Journals"), S("Lab Records"),
      S("Cover Page Generator"), S("Certificate & Acknowledgement"), S("Index & Bibliography"), S("PDF Export"),
    ],
  },
  {
    key: "practical-lab",
    label: "Practical / Lab Experiment Hub",
    blurb: "Full experiment write-ups with viva and simulations.",
    icon: "flask",
    items: [
      S("Aim · Theory · Apparatus"), S("Procedure & Observation Table"), S("Calculations & Result"),
      S("Precautions & Common Mistakes"), S("Viva Questions"), S("Lab Simulation"),
    ],
  },
  {
    key: "profile-progress",
    label: "Student Profile & Progress",
    blurb: "Your program, progress, tests and evaluations in one place.",
    icon: "user",
    items: [
      A("Chapter Progress", "/performance"),
      A("Test History & Analytics", "/analytics"),
      A("Weak Chapters", "/ncert"),
      A("Readiness Report", "/readiness"),
      A("Mistake Journal", "/mistakes"),
      A("AI Evaluation Reports", "/board-examiner"),
      S("School & Target Details"),
      S("Uploaded Answer Sheets"),
    ],
  },
  {
    key: "mentorship",
    label: "Mentorship",
    blurb: "Human guidance for doubts, strategy and answer-writing.",
    icon: "compass",
    items: [
      A("Ask a Mentor", "/support"),
      S("Book a Doubt Session"), S("Study Strategy"), S("Answer-Writing Improvement"),
      S("Practical / Project Guidance"), S("Weak-Chapter Recovery"), S("Exam Roadmap"),
    ],
  },
];

// ── Custom Test Paper Generator config (SSOT for the future generator) ────────
export const TEST_QUESTION_TYPES = ["1 Mark", "2 Mark", "3 Mark", "5 Mark", "Case-Based", "Assertion–Reason", "Competency-Based", "HOTS"] as const;

// ── Section → scoped hub route ────────────────────────────────────────────────
// Each section that now has a real, class-scoped hub maps here. `base` is
// `/dashboard/{board}/{class}`. Sections without an entry keep their item links.
export const SECTION_ROUTES: Record<string, (base: string) => string> = {
  "chapter-learning": (base) => `${base}/full-syllabus`,
  "full-syllabus": (base) => `${base}/full-syllabus`,
  "project-journal": (base) => `${base}/projects`,
  "practical-lab": (base) => `${base}/practical`,
  "profile-progress": (base) => `${base}/analytics`,
  "mentorship": (base) => `${base}/mentorship`,
};

// ── Purchase gating ───────────────────────────────────────────────────────────
// A purchased program is a real (board, class) entitlement. There is NO
// board-class purchase table yet, so this returns [] — the UI then shows the
// full catalogue as browsable preview and NEVER fabricates "purchased" badges.
// Wiring real entitlements later is a one-function change here.
export interface PurchasedProgram { board: BoardSlug; class: ClassSlug }

export async function getPurchasedPrograms(): Promise<PurchasedProgram[]> {
  // TODO: read from real entitlements (Razorpay subscription → board/class map)
  // once a purchases table exists. Never returns fabricated data.
  return [];
}
