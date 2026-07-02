// ─────────────────────────────────────────────────────────────────────────────
// Week 12 — Preview Mode (Roadmap Phase 8)
//
// Free users see a real slice of each reference library; Pro unlocks the rest.
// Counts shown in the UI are ALWAYS computed from the actual catalogue being
// rendered (`slicePreview` returns real totals) — never hard-coded, never fake.
// Client-safe: no server imports.
// ─────────────────────────────────────────────────────────────────────────────

/** How many items of each library are visible without Pro. */
export const PREVIEW_LIMITS = {
  formulas: 25,
  reagents: 12,
  orders: 12,
  colours: 15,
} as const;

export interface PreviewSlice<T> {
  /** The items a locked user may see (all items when unlocked). */
  visible: T[];
  /** Real catalogue size. */
  total: number;
  /** How many items are behind the paywall right now (0 when unlocked). */
  locked: number;
}

export function slicePreview<T>(items: T[], limit: number, unlocked: boolean): PreviewSlice<T> {
  if (unlocked || items.length <= limit) {
    return { visible: items, total: items.length, locked: 0 };
  }
  return { visible: items.slice(0, limit), total: items.length, locked: items.length - limit };
}
