import { ALL_PYQ_QUESTIONS } from "@/lib/pyq";
import type { PYQChapter, PYQExam } from "@/lib/pyq";
import type { AttemptAnswerRecord } from "@/lib/attempts/schema";

// ─────────────────────────────────────────────────────────────────────────────
// Chapter Mastery — pure reducer over attempt_answers, scoped to one chapter
// (its PYQ-bank chapter names) and one exam. Every component is real and its
// definition is shown in the UI:
//   theoryMastery   = accuracy on NCERT-direct questions (theory-recall proxy)
//   questionMastery = accuracy on all answered chapter questions
//   ncertCoverage   = chapter NCERT lines touched / lines cited by the bank
//   pyqCoverage     = distinct bank questions attempted / bank pool size
//   overall         = 0.4·question + 0.2·theory + 0.2·ncert + 0.2·pyq
// Components without enough signal are "building", never coloured or faked.
// ─────────────────────────────────────────────────────────────────────────────

const MIN_SIGNAL = 3;

export interface MasteryComponent {
  key: "theory" | "question" | "ncert" | "pyq";
  label: string;
  value: number; // 0–100
  detail: string;
  building: boolean;
}

export interface ChapterMastery {
  hasData: boolean;
  answered: number;
  components: MasteryComponent[];
  overall: number;
  band: "strong" | "onTrack" | "early";
}

export function buildChapterMastery(
  answers: AttemptAnswerRecord[],
  chapters: PYQChapter[],
  exam: PYQExam
): ChapterMastery {
  const scope = new Set<string>(chapters);
  const pool = ALL_PYQ_QUESTIONS.filter((q) => scope.has(q.chapter) && q.exam === exam);
  const poolIds = new Set(pool.map((q) => q.id));
  const directIds = new Set(pool.filter((q) => q.ncertDirect).map((q) => q.id));

  const chapterLines = new Set<string>();
  for (const q of pool) for (const l of q.ncertLines ?? []) chapterLines.add(l);

  const scoped = answers.filter((a) => a.selectedAnswer !== null && a.chapter && scope.has(a.chapter));
  const onBank = scoped.filter((a) => a.questionId && poolIds.has(a.questionId));

  const attemptedIds = new Set(onBank.map((a) => a.questionId as string));
  const touchedLines = new Set<string>();
  const byId = new Map(pool.map((q) => [q.id, q]));
  for (const id of attemptedIds) for (const l of byId.get(id)?.ncertLines ?? []) touchedLines.add(l);

  const acc = (rows: AttemptAnswerRecord[]) =>
    rows.length === 0 ? 0 : Math.round((rows.filter((a) => a.isCorrect).length / rows.length) * 100);

  const theoryRows = onBank.filter((a) => directIds.has(a.questionId as string));
  const questionAcc = acc(scoped);
  const theoryAcc = acc(theoryRows);
  const ncertCov = chapterLines.size === 0 ? 0 : Math.round((touchedLines.size / chapterLines.size) * 100);
  const pyqCov = pool.length === 0 ? 0 : Math.round((attemptedIds.size / pool.length) * 100);

  const components: MasteryComponent[] = [
    { key: "question", label: "Question Mastery", value: questionAcc, detail: `${scoped.filter((a) => a.isCorrect).length}/${scoped.length} correct`, building: scoped.length < MIN_SIGNAL },
    { key: "theory", label: "Theory Mastery", value: theoryAcc, detail: `NCERT-direct accuracy (${theoryRows.length} answered)`, building: theoryRows.length < MIN_SIGNAL },
    { key: "ncert", label: "NCERT Coverage", value: ncertCov, detail: `${touchedLines.size}/${chapterLines.size} cited lines touched`, building: chapterLines.size === 0 },
    { key: "pyq", label: "PYQ Coverage", value: pyqCov, detail: `${attemptedIds.size}/${pool.length} bank questions attempted`, building: pool.length === 0 },
  ];

  const overall = Math.round(0.4 * questionAcc + 0.2 * theoryAcc + 0.2 * ncertCov + 0.2 * pyqCov);

  return {
    hasData: scoped.length > 0,
    answered: scoped.length,
    components,
    overall,
    band: overall >= 70 ? "strong" : overall >= 40 ? "onTrack" : "early",
  };
}
