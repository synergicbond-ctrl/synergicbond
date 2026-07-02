export interface ProgressSummary {
  chaptersCompleted: number;
  totalChapters: number;
  dailyStreak: number;
  averageAccuracy: number;
  totalStudyHours: number;
}

export interface WeakTopic {
  topic: string;
  category: "physical" | "organic" | "inorganic";
  accuracy: number;
}

export interface DashboardPayload {
  summary: ProgressSummary;
  weakTopics: WeakTopic[];
  recentTests: { id: string; name: string; score: number; date: string }[];
}

export function fetchStudentDashboardData(): DashboardPayload {
  return {
    summary: {
      chaptersCompleted: 12,
      totalChapters: 30,
      dailyStreak: 7,
      averageAccuracy: 76,
      totalStudyHours: 42,
    },
    weakTopics: [
      { topic: "Ionic Equilibrium (pH & Buffer)", category: "physical", accuracy: 52 },
      { topic: "Aldol & Cannizzaro Condensations", category: "organic", accuracy: 64 },
      { topic: "Coordination Compounds (CFT Splitting)", category: "inorganic", accuracy: 58 }
    ],
    recentTests: [
      { id: "t-1", name: "Physical Chemistry Full Mock", score: 82, date: "2026-06-20" },
      { id: "t-2", name: "Organic GOC & Hydrocarbons", score: 68, date: "2026-06-22" }
    ]
  };
}
