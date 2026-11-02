"use client";

import { useSyncExternalStore } from "react";
import { createLocalStore } from "./store";

export type Theme = "standard" | "deep" | "contrast";
export type TextSize = "sm" | "md" | "lg" | "xl";
export type Spacing = "normal" | "roomy";
export type ReadFont = "serif" | "sans" | "easy";
export type StudyMode = "read" | "skim" | "exam";

export interface ReaderSettings {
  theme: Theme;
  size: TextSize;
  space: Spacing;
  font: ReadFont;
  cvd: boolean;
  mode: StudyMode;
}

export const DEFAULT_SETTINGS: ReaderSettings = {
  theme: "standard",
  size: "md",
  space: "normal",
  font: "serif",
  cvd: false,
  mode: "read",
};

const ALLOWED: { [K in keyof ReaderSettings]: readonly ReaderSettings[K][] } = {
  theme: ["standard", "deep", "contrast"],
  size: ["sm", "md", "lg", "xl"],
  space: ["normal", "roomy"],
  font: ["serif", "sans", "easy"],
  cvd: [true, false],
  mode: ["read", "skim", "exam"],
};

/** Drop any stored value that is not one of the allowed options (e.g. an old or edited entry). */
function sanitize(raw: Partial<ReaderSettings>): Partial<ReaderSettings> {
  const out: Record<string, unknown> = {};
  for (const k of Object.keys(ALLOWED) as (keyof ReaderSettings)[]) {
    if ((ALLOWED[k] as readonly unknown[]).includes(raw[k])) out[k] = raw[k];
  }
  return out as Partial<ReaderSettings>;
}

export const settingsStore = createLocalStore<ReaderSettings>("sb:reader:v1", DEFAULT_SETTINGS, sanitize);

export function useSettings(): ReaderSettings {
  return useSyncExternalStore(settingsStore.subscribe, settingsStore.getSnapshot, settingsStore.getServerSnapshot);
}
