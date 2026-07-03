import { review, isDue, type CardState, type Grade } from "./sm2";
import type { RecallCard } from "./decks";

// ─────────────────────────────────────────────────────────────────────────────
// Memory review store (Roadmap V2 · Week 5) — V1 persistence.
//
// Device-local (localStorage) per-card SM-2 state. This is intentionally a thin,
// swappable layer: when a `memory_cards` Supabase table is provisioned (see
// supabase/migrations/011_memory_cards.sql), only this module changes — decks,
// SM-2 and UI stay put. Honest V1 limitation: state is per-device, not synced.
// SSR-safe: every access guards `typeof window`.
// ─────────────────────────────────────────────────────────────────────────────

const KEY = "sb-memory-sm2-v1";

type StateMap = Record<string, CardState>;

function load(): StateMap {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as StateMap) : {};
  } catch {
    return {};
  }
}

function save(map: StateMap): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(map));
  } catch {
    /* quota / privacy mode — reviews just won't persist this session */
  }
}

export function getState(cardId: string): CardState | undefined {
  return load()[cardId];
}

/** Record a grade for a card and persist. Returns the new state. */
export function recordReview(cardId: string, grade: Grade): CardState {
  const map = load();
  const next = review(map[cardId], grade);
  map[cardId] = next;
  save(map);
  return next;
}

export interface DeckProgress {
  total: number;
  due: number;
  seen: number;
}

/** Cards due now (never-seen count as due), stable order. */
export function dueCards(cards: RecallCard[], now = new Date()): RecallCard[] {
  const map = load();
  return cards.filter((c) => isDue(map[c.id], now));
}

export function progress(cards: RecallCard[], now = new Date()): DeckProgress {
  const map = load();
  let due = 0;
  let seen = 0;
  for (const c of cards) {
    if (map[c.id]) seen += 1;
    if (isDue(map[c.id], now)) due += 1;
  }
  return { total: cards.length, due, seen };
}
