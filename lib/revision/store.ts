// ─────────────────────────────────────────────────────────────────────────────
// One-Tap Revision store (Roadmap V2 · Week 7) — V1 persistence.
//
// Device-local (localStorage) list of items the student tapped "Add to
// Revision" on, from anywhere in the product (PYQs, notes, tests, AI answers).
// Thin, swappable layer — when a `revision_items` Supabase table is provisioned
// (see supabase/migrations/012_revision_items.sql), only this module changes.
// SSR-safe: every access guards `typeof window`.
// ─────────────────────────────────────────────────────────────────────────────

export type RevisionItemType = "pyq" | "note" | "test" | "ai" | "formula" | "reaction" | "fact";

export interface RevisionItem {
  /** Stable, source-unique id (e.g. "pyq:jm-2023-14"). */
  id: string;
  type: RevisionItemType;
  title: string;
  subtitle?: string;
  href: string;
  addedAt: string;
}

const KEY = "sb-revision-items-v1";
/** Fired after any change so open components can re-read (same-tab). */
export const REVISION_EVENT = "sb-revision-changed";

function read(): RevisionItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as RevisionItem[]) : [];
  } catch {
    return [];
  }
}

function write(items: RevisionItem[]): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(items));
    window.dispatchEvent(new Event(REVISION_EVENT));
  } catch {
    /* quota / privacy mode */
  }
}

export function listRevision(): RevisionItem[] {
  return read().sort((a, b) => (a.addedAt < b.addedAt ? 1 : -1));
}

export function hasRevision(id: string): boolean {
  return read().some((i) => i.id === id);
}

export function addRevision(item: Omit<RevisionItem, "addedAt">): void {
  const items = read();
  if (items.some((i) => i.id === item.id)) return;
  items.push({ ...item, addedAt: new Date().toISOString() });
  write(items);
}

export function removeRevision(id: string): void {
  write(read().filter((i) => i.id !== id));
}

/** Add if absent, remove if present. Returns the new saved state. */
export function toggleRevision(item: Omit<RevisionItem, "addedAt">): boolean {
  if (hasRevision(item.id)) {
    removeRevision(item.id);
    return false;
  }
  addRevision(item);
  return true;
}

export function revisionCount(): number {
  return read().length;
}
