// Client-safe types for the Performance System.
// Kept separate from performanceEngine.ts (same split as controlCenterTypes /
// controlCenterData) so components can import types without pulling in the
// server-only supabase client.

export interface ReadinessEntry {
  /** Display name, e.g. "NEET", "JEE". */
  exam: string;
  /** Average accuracy % across REAL exam_results rows — null when no tests match. */
  accuracy: number | null;
  testsTaken: number;
}

export interface WeakTopic {
  chapter: string;
  /** Real count of recorded mistakes in this chapter. */
  mistakes: number;
}

export interface StrongTopic {
  chapter: string;
  /** Real count of study sessions logged with zero recorded mistakes. */
  sessions: number;
}

export interface RevisionItem {
  chapter: string;
  /** ISO timestamp of the most recent mistake in this chapter. */
  lastMistakeAt: string;
}

export interface ActivityItem {
  kind: "test" | "study";
  label: string;
  detail: string;
  /** ISO timestamp. */
  at: string;
}

export interface ProgressSummary {
  chaptersStudied: number;
  totalChapters: number;
  testsCompleted: number;
  studyMinutes: number;
  /** null = attempts are not tracked yet (no table records them) — shown honestly. */
  pyqsAttempted: number | null;
}

export interface PerformanceData {
  name: string;
  readiness: ReadinessEntry[];
  weakTopics: WeakTopic[];
  strongTopics: StrongTopic[];
  revisionQueue: RevisionItem[];
  recentActivity: ActivityItem[];
  summary: ProgressSummary;
}

/** Static platform-wide counts derived from the SSOT catalogues (guest-visible). */
export interface PlatformStats {
  notesChapters: number;
  totalTests: number;
  pyqQuestions: number;
  linkedChapters: number;
}
