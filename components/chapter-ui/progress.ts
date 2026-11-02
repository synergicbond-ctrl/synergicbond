"use client";

import { useSyncExternalStore } from "react";
import { createLocalStore } from "./store";

/**
 * Per-chapter reading progress, kept on this device.
 *  - done / saved / last: topic numbers, for chapters that have numbered topics
 *  - pages: lesson pages the student marked as done (works for every chapter)
 */
export interface ChapterProgress {
  done: number[];
  saved: number[];
  last: number | null;
  pages: string[];
}

const EMPTY: ChapterProgress = { done: [], saved: [], last: null, pages: [] };
const stores = new Map<string, ReturnType<typeof makeStore>>();

function ints(v: unknown): number[] {
  return Array.isArray(v) ? v.filter((n): n is number => Number.isInteger(n) && n > 0 && n < 100000) : [];
}
function paths(v: unknown): string[] {
  return Array.isArray(v) ? v.filter((p): p is string => typeof p === "string" && p.startsWith("/") && p.length < 300) : [];
}

function makeStore(chapterId: string) {
  return createLocalStore<ChapterProgress>(`sb:progress:${chapterId}:v1`, EMPTY, (raw) => ({
    done: ints(raw.done),
    saved: ints(raw.saved),
    last: Number.isInteger(raw.last) && (raw.last as number) > 0 ? (raw.last as number) : null,
    pages: paths(raw.pages),
  }));
}

export function progressStore(chapterId: string) {
  let s = stores.get(chapterId);
  if (!s) {
    s = makeStore(chapterId);
    stores.set(chapterId, s);
  }
  return s;
}

export function useProgress(chapterId: string): ChapterProgress {
  const s = progressStore(chapterId);
  return useSyncExternalStore(s.subscribe, s.getSnapshot, s.getServerSnapshot);
}

function toggle<T>(list: T[], v: T): T[] {
  return list.includes(v) ? list.filter((x) => x !== v) : [...list, v];
}

export function toggleDone(chapterId: string, topic: number) {
  progressStore(chapterId).set((cur) => ({ done: toggle(cur.done, topic) }));
}
export function toggleSaved(chapterId: string, topic: number) {
  progressStore(chapterId).set((cur) => ({ saved: toggle(cur.saved, topic) }));
}
export function togglePageDone(chapterId: string, path: string) {
  progressStore(chapterId).set((cur) => ({ pages: toggle(cur.pages, path) }));
}
export function setLast(chapterId: string, topic: number) {
  const s = progressStore(chapterId);
  if (s.getSnapshot().last !== topic) s.set({ last: topic });
}
