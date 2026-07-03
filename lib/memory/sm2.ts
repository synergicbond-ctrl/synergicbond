// ─────────────────────────────────────────────────────────────────────────────
// SM-2 spaced-repetition scheduler (Roadmap V2 · Week 5). Pure functions — the
// classic SuperMemo-2 algorithm, no I/O. The roadmap says "use FSRS or SM-2";
// SM-2 is chosen for V1 (well-understood, tiny, no training data needed). A
// custom decay engine is explicitly out of scope.
// ─────────────────────────────────────────────────────────────────────────────

export type Grade = "again" | "hard" | "good" | "easy";

/** SM-2 quality (0–5) for each button. */
const QUALITY: Record<Grade, number> = { again: 2, hard: 3, good: 4, easy: 5 };

export interface CardState {
  /** Successful reviews in a row. */
  reps: number;
  /** Ease factor (≥1.3). */
  ease: number;
  /** Current interval in days. */
  intervalDays: number;
  /** ISO date-time the card is next due. */
  dueAt: string;
  /** ISO date-time of the last review. */
  lastReviewed: string;
}

export function initialState(now = new Date()): CardState {
  return { reps: 0, ease: 2.5, intervalDays: 0, dueAt: now.toISOString(), lastReviewed: now.toISOString() };
}

function addDays(from: Date, days: number): string {
  const d = new Date(from);
  d.setDate(d.getDate() + days);
  return d.toISOString();
}

/** Apply one review to a card's state. */
export function review(prev: CardState | undefined, grade: Grade, now = new Date()): CardState {
  const s = prev ?? initialState(now);
  const q = QUALITY[grade];

  let { reps, ease, intervalDays } = s;

  if (q < 3) {
    // Lapse — relearn from a short interval, keep some ease penalty.
    reps = 0;
    intervalDays = 1;
  } else {
    reps += 1;
    if (reps === 1) intervalDays = 1;
    else if (reps === 2) intervalDays = 6;
    else intervalDays = Math.round(intervalDays * ease);
  }

  // SM-2 ease update, floored at 1.3.
  ease = Math.max(1.3, Math.round((ease + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))) * 100) / 100);

  return {
    reps,
    ease,
    intervalDays,
    dueAt: addDays(now, intervalDays),
    lastReviewed: now.toISOString(),
  };
}

/** True when the card is due for review at `now`. */
export function isDue(state: CardState | undefined, now = new Date()): boolean {
  if (!state) return true; // never seen → due
  return new Date(state.dueAt).getTime() <= now.getTime();
}
