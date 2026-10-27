"use client";

import { useSyncExternalStore } from "react";

/** The topic currently under the reader's eye. In-memory only (not persisted). */
let current: number | null = null;
const listeners = new Set<() => void>();

export function setCurrentTopic(n: number | null) {
  if (current === n) return;
  current = n;
  listeners.forEach((l) => l());
}

export function useCurrentTopic(): number | null {
  return useSyncExternalStore(
    (l) => {
      listeners.add(l);
      return () => {
        listeners.delete(l);
      };
    },
    () => current,
    () => null,
  );
}
