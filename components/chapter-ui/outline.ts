"use client";

import { useSyncExternalStore } from "react";

/**
 * What the reader knows about the page it is showing, discovered from the DOM so it works for
 * every chapter without per-chapter code: the headings (for "On this page"), the heading in view,
 * and whether the page uses typed content blocks (Skim/Exam only make sense then).
 */
export interface OutlineItem {
  id: string;
  text: string;
  level: 2 | 3;
}
interface OutlineState {
  items: OutlineItem[];
  current: string | null;
  hasBlocks: boolean;
}

const EMPTY: OutlineState = { items: [], current: null, hasBlocks: false };
let state: OutlineState = EMPTY;
const listeners = new Set<() => void>();

function commit(next: OutlineState) {
  if (
    next.current === state.current &&
    next.hasBlocks === state.hasBlocks &&
    next.items.length === state.items.length &&
    next.items.every((it, i) => it.id === state.items[i].id && it.text === state.items[i].text)
  ) {
    return;
  }
  state = next;
  listeners.forEach((l) => l());
}

export function setOutline(items: OutlineItem[], hasBlocks: boolean) {
  commit({ ...state, items, hasBlocks });
}
export function setCurrentHeading(id: string | null) {
  commit({ ...state, current: id });
}
export function resetOutline() {
  commit(EMPTY);
}

export function useOutline(): OutlineState {
  return useSyncExternalStore(
    (l) => {
      listeners.add(l);
      return () => {
        listeners.delete(l);
      };
    },
    () => state,
    () => EMPTY,
  );
}
