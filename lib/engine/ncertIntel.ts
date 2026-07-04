import { ALL_PYQ_QUESTIONS } from "@/lib/pyq";
import type { PYQChapter, PYQQuestion } from "@/lib/pyq";

// ─────────────────────────────────────────────────────────────────────────────
// NCERT Intelligence — chapter-scoped reducer over the verified PYQ bank.
//
// "Integrated, not separate notes": for a chapter it surfaces every NCERT line
// the bank's questions actually cite, with per-exam importance DERIVED from
// how many real questions of each exam touch that line — never hand-waved
// stars. Also surfaces the chapter's NCERT-direct questions. The universe is
// honestly the lines tagged on the verified bank (the lines exams actually
// draw from), and the UI says so — full line-by-line NCERT text is not
// fabricated.
// ─────────────────────────────────────────────────────────────────────────────

export type Importance = "high" | "medium" | "low";

export interface NcertIntelLine {
  line: string;
  total: number;
  byExam: { neet: number; jeeMain: number; jeeAdvanced: number };
  importance: { neet: Importance; jeeMain: Importance; jeeAdvanced: Importance };
  questionIds: string[];
}

export interface NcertIntelReport {
  lines: NcertIntelLine[];
  ncertDirect: PYQQuestion[];
  totalLines: number;
  totalCitations: number;
}

function grade(count: number): Importance {
  if (count >= 2) return "high";
  if (count === 1) return "medium";
  return "low";
}

export function buildNcertIntel(chapters: PYQChapter[]): NcertIntelReport {
  const scope = new Set<string>(chapters);
  const pool = ALL_PYQ_QUESTIONS.filter((q) => scope.has(q.chapter));

  const byLine = new Map<string, { ids: string[]; neet: number; jeeMain: number; jeeAdvanced: number }>();
  for (const q of pool) {
    for (const line of q.ncertLines ?? []) {
      const e = byLine.get(line) ?? { ids: [], neet: 0, jeeMain: 0, jeeAdvanced: 0 };
      e.ids.push(q.id);
      if (q.exam === "NEET") e.neet += 1;
      else if (q.exam === "JEE Main") e.jeeMain += 1;
      else e.jeeAdvanced += 1;
      byLine.set(line, e);
    }
  }

  const lines: NcertIntelLine[] = [...byLine.entries()]
    .map(([line, e]) => ({
      line,
      total: e.ids.length,
      byExam: { neet: e.neet, jeeMain: e.jeeMain, jeeAdvanced: e.jeeAdvanced },
      importance: { neet: grade(e.neet), jeeMain: grade(e.jeeMain), jeeAdvanced: grade(e.jeeAdvanced) },
      questionIds: e.ids,
    }))
    .sort((a, b) => b.total - a.total);

  return {
    lines,
    ncertDirect: pool.filter((q) => q.ncertDirect),
    totalLines: lines.length,
    totalCitations: lines.reduce((s, l) => s + l.total, 0),
  };
}
