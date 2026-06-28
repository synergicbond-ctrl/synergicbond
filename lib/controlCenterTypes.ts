// Client-safe types + constants for the Control Center.
// Kept separate from controlCenterData.ts so client components can import these
// without pulling in the server-only supabase client (next/headers).

export interface CoreProgress {
  pct: number;
  last: string;
}

export interface ExamReadiness {
  readiness: number;
  weak: string[];
}

export type ActionIcon = "revise" | "quiz" | "mock" | "learn" | "streak" | "tutor";

export interface NextAction {
  label: string;
  reason: string;
  href: string;
  icon: ActionIcon;
  tone: string; // hex accent
}

export interface ControlCenterProgress {
  name: string;
  learn: CoreProgress;
  practice: CoreProgress;
  aiLab: CoreProgress;
  /** keyed by exam id: "neet" | "jee" | "olympiad" | "gate" */
  exams: Record<string, ExamReadiness>;
  /** ranked "what should I do next" — first item is the primary/highlighted action */
  nextActions: NextAction[];
}

// Default actions shown to guests (not logged in) — mirrors the engine's tone.
export const GUEST_NEXT_ACTIONS: NextAction[] = [
  { label: "Take a diagnostic quiz", reason: "10 questions to map your weak spots", href: "/quiz", icon: "quiz", tone: "#00BBF9" },
  { label: "Explore the Periodic Table", reason: "Your navigation brain for chemistry", href: "/periodic-table", icon: "learn", tone: "#00F5D4" },
  { label: "Ask the AI Tutor a doubt", reason: "Instant step-by-step solutions", href: "/doubt-solver", icon: "tutor", tone: "#9B5DE5" },
  { label: "Start a 15-min mock", reason: "Feel real exam pressure", href: "/exam", icon: "mock", tone: "#C084FC" },
];
