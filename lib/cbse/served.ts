import { getAllUserAnswers } from "@/lib/attempts/store";

// ─────────────────────────────────────────────────────────────────────────────
// Served-question derivation (non-repetition) — SERVER-ONLY.
//
// "Don't repeat previously served questions" is derived from the REAL
// attempt_answers table: every objective question a student answers is already
// persisted there with its PYQ id. The served set is therefore free — no new
// table, no fabricated tracking. `resetAfterIso` lets a student reset the
// non-repetition window (their device stores the reset timestamp); questions
// answered before that instant are no longer treated as served.
// ─────────────────────────────────────────────────────────────────────────────

export interface ServedResult {
  ids: string[];
  hasUser: boolean;
}

export async function getServedQuestionIds(resetAfterIso?: string): Promise<ServedResult> {
  const { data, error } = await getAllUserAnswers(5000);
  if (error || !data) return { ids: [], hasUser: false };

  const cutoff = resetAfterIso ? new Date(resetAfterIso).getTime() : 0;
  const ids = new Set<string>();
  for (const a of data) {
    if (!a.questionId) continue;
    if (cutoff && new Date(a.answeredAt).getTime() <= cutoff) continue;
    ids.add(a.questionId);
  }
  return { ids: [...ids], hasUser: true };
}
