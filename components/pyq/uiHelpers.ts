import type { PYQDifficulty } from "@/lib/pyq";

export const DIFFICULTY_BADGE: Record<PYQDifficulty, string> = {
  Easy: "bg-green-900/40 text-green-400",
  Moderate: "bg-yellow-900/40 text-yellow-400",
  Hard: "bg-orange-900/40 text-orange-400",
  Olympiad: "bg-red-900/40 text-red-400",
};

export const DIFFICULTY_BAR: Record<PYQDifficulty, string> = {
  Easy: "bg-green-500",
  Moderate: "bg-yellow-500",
  Hard: "bg-orange-500",
  Olympiad: "bg-red-500",
};

export const EXAM_BADGE: Record<string, string> = {
  "JEE Main": "bg-sky-900/40 text-sky-300",
  "JEE Advanced": "bg-violet-900/40 text-violet-300",
  NEET: "bg-emerald-900/40 text-emerald-300",
};

export function trendBadgeClass(trend: "Increasing" | "Stable" | "Decreasing"): string {
  if (trend === "Increasing") return "bg-cyan-900/40 text-cyan-300";
  if (trend === "Decreasing") return "bg-red-900/40 text-red-300";
  return "bg-white/10 text-white/60";
}

export function probabilityBand(score: number): "High" | "Medium" | "Low" {
  if (score >= 70) return "High";
  if (score >= 40) return "Medium";
  return "Low";
}

export const PROBABILITY_STYLE: Record<"High" | "Medium" | "Low", { badge: string; bar: string }> = {
  High: { badge: "bg-cyan-900/40 text-cyan-300", bar: "bg-cyan-500" },
  Medium: { badge: "bg-yellow-900/40 text-yellow-300", bar: "bg-yellow-500" },
  Low: { badge: "bg-white/10 text-white/50", bar: "bg-white/30" },
};
