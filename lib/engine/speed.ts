import { ALL_PYQ_QUESTIONS } from "@/lib/pyq";
import type { PYQDifficulty, PYQExam } from "@/lib/pyq";
import type { AttemptAnswerRecord } from "@/lib/attempts/schema";
import { EXPECTED_SECONDS, expectedSeconds } from "./programSpec";

// ─────────────────────────────────────────────────────────────────────────────
// Speed Analysis (JEE Main / Advanced) — pure reducer over time-hydrated
// attempt_answers. Only answers with a REAL recorded timeSpentMs are counted;
// untimed rows are excluded, and the timed/total split is shown honestly.
// "Expected" times are the EXPECTED_SECONDS heuristic and are labelled as a
// benchmark, not exam data.
// ─────────────────────────────────────────────────────────────────────────────

const DIFFS: PYQDifficulty[] = ["Easy", "Moderate", "Hard", "Olympiad"];

export interface SpeedBucket {
  difficulty: PYQDifficulty;
  answered: number;
  avgSeconds: number;
  expectedSeconds: number;
  verdict: "fast" | "onPace" | "slow";
  accuracy: number;
}

export interface SlowChapter {
  chapter: string;
  avgSeconds: number;
  answered: number;
}

export interface SpeedReport {
  hasData: boolean;
  timed: number;
  untimed: number;
  avgSeconds: number;
  buckets: SpeedBucket[];
  slowChapters: SlowChapter[];
  /** Rushing = wrong answers finished far under expected time. */
  rushedWrong: number;
}

const DIFF_BY_ID = new Map(ALL_PYQ_QUESTIONS.map((q) => [q.id, q.difficulty]));

function verdict(avg: number, expected: number): SpeedBucket["verdict"] {
  if (avg <= expected * 0.8) return "fast";
  if (avg <= expected * 1.2) return "onPace";
  return "slow";
}

export function buildSpeedReport(answers: AttemptAnswerRecord[], exam?: PYQExam): SpeedReport {
  const answered = answers.filter((a) => a.selectedAnswer !== null);
  const examScoped = exam
    ? answered.filter((a) => {
        if (!a.questionId) return true; // AI questions carry the session exam already
        const q = ALL_PYQ_QUESTIONS.find((x) => x.id === a.questionId);
        return !q || q.exam === exam;
      })
    : answered;

  const timedRows = examScoped.filter((a) => a.timeSpentMs > 0 && a.timeSpentMs < 30 * 60_000);
  const untimed = examScoped.length - timedRows.length;

  const sec = (a: AttemptAnswerRecord) => a.timeSpentMs / 1000;
  const avg = (rows: AttemptAnswerRecord[]) =>
    rows.length === 0 ? 0 : Math.round(rows.reduce((s, a) => s + sec(a), 0) / rows.length);

  const diffOf = (a: AttemptAnswerRecord): PYQDifficulty =>
    (a.questionId ? DIFF_BY_ID.get(a.questionId) : undefined) ?? (a.difficulty as PYQDifficulty) ?? "Moderate";

  const buckets: SpeedBucket[] = DIFFS.map((d) => {
    const rows = timedRows.filter((a) => diffOf(a) === d);
    const avgS = avg(rows);
    const exp = EXPECTED_SECONDS[d];
    return {
      difficulty: d,
      answered: rows.length,
      avgSeconds: avgS,
      expectedSeconds: exp,
      verdict: rows.length === 0 ? "onPace" : verdict(avgS, exp),
      accuracy: rows.length === 0 ? 0 : Math.round((rows.filter((a) => a.isCorrect).length / rows.length) * 100),
    };
  }).filter((b) => b.answered > 0);

  const byChapter = new Map<string, AttemptAnswerRecord[]>();
  for (const a of timedRows) {
    if (!a.chapter) continue;
    const arr = byChapter.get(a.chapter) ?? [];
    arr.push(a);
    byChapter.set(a.chapter, arr);
  }
  const slowChapters: SlowChapter[] = [...byChapter.entries()]
    .filter(([, rows]) => rows.length >= 3)
    .map(([chapter, rows]) => ({ chapter, avgSeconds: avg(rows), answered: rows.length }))
    .sort((a, b) => b.avgSeconds - a.avgSeconds)
    .slice(0, 6);

  const rushedWrong = timedRows.filter(
    (a) => !a.isCorrect && sec(a) < expectedSeconds(diffOf(a)) * 0.4
  ).length;

  return {
    hasData: timedRows.length > 0,
    timed: timedRows.length,
    untimed,
    avgSeconds: avg(timedRows),
    buckets,
    slowChapters,
    rushedWrong,
  };
}
