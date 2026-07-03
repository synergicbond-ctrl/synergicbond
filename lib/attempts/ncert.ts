import { ALL_PYQ_QUESTIONS } from "@/lib/pyq";
import type { AttemptAnswerRecord } from "./schema";

// ─────────────────────────────────────────────────────────────────────────────
// NCERT Blind Spot Detector (Roadmap V2 · Week 9). Pure reducer over
// attempt_answers — no new table, no fabrication. The "universe" of NCERT
// lines is every line tagged on the verified PYQ bank (the lines exams actually
// draw from). For each line we classify the student's standing from their
// LATEST answer on the questions that touch it:
//   mastered — attempted, and the latest answer on every touched question was
//              correct
//   weak     — attempted, but the latest answer on ≥1 touched question was wrong
//   unseen   — no touched question attempted yet (the real blind spots)
// ─────────────────────────────────────────────────────────────────────────────

export type NcertStatus = "mastered" | "weak" | "unseen";

export interface NcertLine {
  line: string;
  chapterKey: string; // e.g. "Class 11 Ch. 2"
  status: NcertStatus;
  questionIds: string[];
  attempted: number;
}

export interface NcertChapter {
  chapterKey: string;
  total: number;
  mastered: number;
  weak: number;
  unseen: number;
  lines: NcertLine[];
}

export interface NcertReport {
  hasData: boolean;
  totalLines: number;
  covered: number; // mastered + weak (i.e. attempted at least once)
  mastered: number;
  weak: number;
  unseen: number;
  coveragePct: number;
  chapters: NcertChapter[];
  /** Blind spots surfaced first: unseen, then weak. */
  blindSpots: NcertLine[];
}

// line → question ids that reference it (built once from the SSOT).
const LINE_INDEX = (() => {
  const m = new Map<string, string[]>();
  for (const q of ALL_PYQ_QUESTIONS) {
    for (const line of q.ncertLines ?? []) {
      const arr = m.get(line) ?? [];
      arr.push(q.id);
      m.set(line, arr);
    }
  }
  return m;
})();

function chapterKeyOf(line: string): string {
  return line.match(/^(Class\s*\d+\s*Ch\.?\s*\d+)/i)?.[1].replace(/\s+/g, " ") ?? "Other";
}

/** `answers` must be newest-first (getAllUserAnswers order). */
export function buildNcertReport(answers: AttemptAnswerRecord[]): NcertReport {
  // latest result per question id (first seen = latest, since desc order)
  const latest = new Map<string, boolean>(); // questionId → isCorrect
  for (const a of answers) {
    if (a.selectedAnswer === null || !a.questionId) continue;
    if (!latest.has(a.questionId)) latest.set(a.questionId, a.isCorrect);
  }

  const lines: NcertLine[] = [];
  for (const [line, qIds] of LINE_INDEX) {
    const results = qIds.filter((id) => latest.has(id)).map((id) => latest.get(id)!);
    let status: NcertStatus;
    if (results.length === 0) status = "unseen";
    else if (results.every((ok) => ok)) status = "mastered";
    else status = "weak";
    lines.push({ line, chapterKey: chapterKeyOf(line), status, questionIds: qIds, attempted: results.length });
  }

  const byChapter = new Map<string, NcertChapter>();
  for (const l of lines) {
    const ch = byChapter.get(l.chapterKey) ?? { chapterKey: l.chapterKey, total: 0, mastered: 0, weak: 0, unseen: 0, lines: [] };
    ch.total += 1;
    ch[l.status] += 1;
    ch.lines.push(l);
    byChapter.set(l.chapterKey, ch);
  }
  const chapters = [...byChapter.values()].sort(
    (a, b) => b.unseen + b.weak - (a.unseen + a.weak) || a.chapterKey.localeCompare(b.chapterKey)
  );

  const mastered = lines.filter((l) => l.status === "mastered").length;
  const weak = lines.filter((l) => l.status === "weak").length;
  const unseen = lines.filter((l) => l.status === "unseen").length;
  const covered = mastered + weak;

  const rank: Record<NcertStatus, number> = { unseen: 0, weak: 1, mastered: 2 };
  const blindSpots = lines
    .filter((l) => l.status !== "mastered")
    .sort((a, b) => rank[a.status] - rank[b.status])
    .slice(0, 30);

  return {
    hasData: latest.size > 0,
    totalLines: lines.length,
    covered,
    mastered,
    weak,
    unseen,
    coveragePct: lines.length === 0 ? 0 : Math.round((covered / lines.length) * 1000) / 10,
    chapters,
    blindSpots,
  };
}
