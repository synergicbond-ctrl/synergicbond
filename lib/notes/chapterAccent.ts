// Shared chapter-accent design token for the /notes/* part-routed chapters.
// One accent per chapter (per requirement: "only accent colours may vary").
// Individual topic cards on a chapter hub may still pick a distinct hue from
// this same palette for visual scannability, but the chapter's own chrome
// (ChapterPartNav badge, ChapterHero eyebrow) always uses its assigned accent.

export type ChapterAccent =
  | "rose" | "amber" | "cyan" | "emerald" | "violet" | "pink" | "blue" | "lime";

export const ACCENT_BADGE: Record<ChapterAccent, string> = {
  rose: "bg-rose-500/20 text-rose-300 border-rose-500/30",
  amber: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  cyan: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  emerald: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  violet: "bg-violet-500/20 text-violet-300 border-violet-500/30",
  pink: "bg-pink-500/20 text-pink-300 border-pink-500/30",
  blue: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  lime: "bg-lime-500/20 text-lime-300 border-lime-500/30",
};

export const ACCENT_TEXT: Record<ChapterAccent, string> = {
  rose: "text-rose-400 group-hover:text-rose-300",
  amber: "text-amber-400 group-hover:text-amber-300",
  cyan: "text-cyan-400 group-hover:text-cyan-300",
  emerald: "text-emerald-400 group-hover:text-emerald-300",
  violet: "text-violet-400 group-hover:text-violet-300",
  pink: "text-pink-400 group-hover:text-pink-300",
  blue: "text-blue-400 group-hover:text-blue-300",
  lime: "text-lime-400 group-hover:text-lime-300",
};

export const ACCENT_HOVER: Record<ChapterAccent, string> = {
  rose: "hover:border-rose-400/50 hover:shadow-rose-500/10",
  amber: "hover:border-amber-400/50 hover:shadow-amber-500/10",
  cyan: "hover:border-cyan-400/50 hover:shadow-cyan-500/10",
  emerald: "hover:border-emerald-400/50 hover:shadow-emerald-500/10",
  violet: "hover:border-violet-400/50 hover:shadow-violet-500/10",
  pink: "hover:border-pink-400/50 hover:shadow-pink-500/10",
  blue: "hover:border-blue-400/50 hover:shadow-blue-500/10",
  lime: "hover:border-lime-400/50 hover:shadow-lime-500/10",
};

// Per-chapter default accent — one row per chapter as they're migrated onto
// the shared chrome. Add a line here when a new chapter adopts it.
export const CHAPTER_DEFAULT_ACCENT: Record<string, ChapterAccent> = {
  "mole-concept": "cyan",
  "concentration-terms": "rose",
};
