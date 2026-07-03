import { buildAnalytics } from "./analytics";
import { buildNcertReport } from "./ncert";
import type { AttemptAnswerRecord } from "./schema";

// ─────────────────────────────────────────────────────────────────────────────
// Readiness Report (Roadmap V2 · Week 10). Composes the analytics + NCERT
// reducers into ONE explainable readiness score — the scoped-down replacement
// for the "Digital Twin" concept. Pure reducer over attempt_answers; every
// component is real and the weighting is shown, so the score is never a black
// box and never fabricated.
//
// Score = 0.45·accuracy + 0.25·chapterCoverage + 0.20·ncertCoverage
//       + 0.10·volume(→target). Confidence is low until enough questions are
// attempted, and that is surfaced honestly rather than hidden.
// ─────────────────────────────────────────────────────────────────────────────

const VOLUME_TARGET = 150; // questions answered for a "confident" read
const CONFIDENCE_MIN = 40; // below this many answers, flag low confidence

export interface ReadinessComponent {
  key: "accuracy" | "chapterCoverage" | "ncertCoverage" | "volume";
  label: string;
  value: number; // 0–100
  weight: number; // 0–1
}

export interface ReadinessReport {
  hasData: boolean;
  score: number; // 0–100
  band: "strong" | "onTrack" | "early";
  confident: boolean;
  questionsAnswered: number;
  components: ReadinessComponent[];
  strongChapters: string[];
  weakChapters: string[];
  suggested: { label: string; href: string; reason: string }[];
}

export function buildReadiness(answers: AttemptAnswerRecord[]): ReadinessReport {
  const analytics = buildAnalytics(answers);
  const ncert = buildNcertReport(answers);
  const answered = analytics.questionsAnswered;

  const chapterCoverage =
    analytics.coverage.totalChapters === 0
      ? 0
      : Math.round((analytics.coverage.attemptedChapters / analytics.coverage.totalChapters) * 1000) / 10;
  const volume = Math.min(100, Math.round((answered / VOLUME_TARGET) * 1000) / 10);

  const components: ReadinessComponent[] = [
    { key: "accuracy", label: "Accuracy", value: analytics.overall.accuracy, weight: 0.45 },
    { key: "chapterCoverage", label: "Syllabus coverage", value: chapterCoverage, weight: 0.25 },
    { key: "ncertCoverage", label: "NCERT coverage", value: ncert.coveragePct, weight: 0.2 },
    { key: "volume", label: "Practice volume", value: volume, weight: 0.1 },
  ];

  const score = Math.round(components.reduce((s, c) => s + c.value * c.weight, 0));
  const band: ReadinessReport["band"] = score >= 70 ? "strong" : score >= 40 ? "onTrack" : "early";

  const strongChapters = analytics.masteryMap.filter((c) => c.band === "green").map((c) => c.chapter);
  const weakChapters = analytics.masteryMap.filter((c) => c.band === "red").map((c) => c.chapter);

  const suggested: ReadinessReport["suggested"] = [];
  if (weakChapters.length > 0) {
    suggested.push({ label: `Practise ${weakChapters.length} weak chapter${weakChapters.length === 1 ? "" : "s"}`, href: "/pyq", reason: weakChapters.slice(0, 3).join(", ") });
  }
  if (analytics.weakTopics.length > 0) {
    suggested.push({ label: "Review your Mistake Journal", href: "/mistakes", reason: `${analytics.weakTopics.length} weak topics` });
  }
  if (ncert.unseen > 0) {
    suggested.push({ label: `Close ${ncert.unseen} NCERT blind spots`, href: "/ncert", reason: `${ncert.coveragePct}% covered` });
  }
  suggested.push({ label: "Run your Daily Revision Queue", href: "/memory?deck=daily", reason: "Spaced recall" });

  return {
    hasData: analytics.hasData,
    score,
    band,
    confident: answered >= CONFIDENCE_MIN,
    questionsAnswered: answered,
    components,
    strongChapters,
    weakChapters,
    suggested,
  };
}
