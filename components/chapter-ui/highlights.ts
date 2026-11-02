"use client";

import { useSyncExternalStore } from "react";
import { createLocalStore } from "./store";

export type PenColor = "y" | "g" | "p" | "b";

/** Four pens with a meaning each, so a student's highlights double as a revision list. */
export const PENS: Record<PenColor, { label: string; hex: string }> = {
  y: { label: "Important", hex: "#f2d54a" },
  g: { label: "Understood", hex: "#4cc38a" },
  p: { label: "Doubt", hex: "#ff7ab6" },
  b: { label: "Revise", hex: "#5aa9ff" },
};

export interface Highlight {
  id: string;
  /** pathname of the page the highlight is on */
  page: string;
  /** ordinal of the [data-topic] section it is in ("t3" = the 4th one on the page), or "" for the whole reading column */
  anchor: string;
  /** id to link to (e.g. "topic-62"), or "" */
  hash: string;
  color: PenColor;
  text: string;
  /** character offsets into the anchor section's text content */
  start: number;
  end: number;
}
interface HighlightState {
  items: Highlight[];
}

const stores = new Map<string, ReturnType<typeof makeStore>>();

function valid(h: unknown): h is Highlight {
  const x = h as Highlight;
  return (
    !!x &&
    typeof x.id === "string" &&
    typeof x.page === "string" &&
    typeof x.anchor === "string" &&
    typeof x.hash === "string" &&
    x.color in PENS &&
    typeof x.text === "string" &&
    Number.isInteger(x.start) &&
    Number.isInteger(x.end) &&
    x.end > x.start
  );
}

function makeStore(chapterId: string) {
  return createLocalStore<HighlightState>(`sb:highlights:${chapterId}:v2`, { items: [] }, (raw) => ({
    items: Array.isArray(raw.items) ? raw.items.filter(valid) : [],
  }));
}

export function highlightStore(chapterId: string) {
  let s = stores.get(chapterId);
  if (!s) {
    s = makeStore(chapterId);
    stores.set(chapterId, s);
  }
  return s;
}

export function useHighlights(chapterId: string): Highlight[] {
  const s = highlightStore(chapterId);
  return useSyncExternalStore(s.subscribe, s.getSnapshot, s.getServerSnapshot).items;
}

export function addHighlight(chapterId: string, h: Omit<Highlight, "id">) {
  const id = `${h.anchor || "page"}-${h.start}-${h.end}-${Date.now().toString(36)}`;
  highlightStore(chapterId).set((cur) => ({ items: [...cur.items, { ...h, id }].slice(-500) }));
}
export function removeHighlight(chapterId: string, id: string) {
  highlightStore(chapterId).set((cur) => ({ items: cur.items.filter((h) => h.id !== id) }));
}
