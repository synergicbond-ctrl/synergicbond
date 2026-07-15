"use client";

import Link from "next/link";
import { ACCENT_BADGE, type ChapterAccent } from "@/lib/notes/chapterAccent";

export interface ChapterPartNavLink {
  href: string;
  label: string;
}

export interface ChapterPartNavProps {
  /** Link back to the gated /programs chapter-engine view for this topic. */
  engineHref: string;
  engineLabel?: string;
  /** Link back to this chapter's own /notes hub (index) page. */
  hubHref: string;
  hubLabel: string;
  /** e.g. "Topic 3 of 6" */
  badgeLabel: string;
  accent?: ChapterAccent;
  prev?: ChapterPartNavLink;
  next?: ChapterPartNavLink;
}

/**
 * Shared sticky part-navigation header for /notes/*\/partN pages.
 * Replaces the near-identical hand-written header that was copy-pasted into
 * every part page across concentration-terms, eudiometry, mole-concept and
 * stoichiometry (~36 near-duplicate copies) — same structure, per-chapter
 * accent only.
 */
export default function ChapterPartNav({
  engineHref,
  engineLabel = "← Back to Chapter Engine",
  hubHref,
  hubLabel,
  badgeLabel,
  accent = "cyan",
  prev,
  next,
}: ChapterPartNavProps) {
  const badgeClass = ACCENT_BADGE[accent];

  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/95 px-4 py-3 text-white backdrop-blur md:px-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 text-sm">
        <div className="flex items-center gap-4">
          <Link href={engineHref} className="font-semibold text-cyan-400 hover:underline">
            {engineLabel}
          </Link>
          <span className="text-slate-500">|</span>
          <Link href={hubHref} className="text-slate-300 hover:text-white">
            {hubLabel}
          </Link>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {prev && (
            <Link
              href={prev.href}
              className="rounded-full bg-slate-800 px-3 py-1 text-xs font-bold text-slate-300 hover:bg-slate-700"
            >
              {prev.label}
            </Link>
          )}
          <span className={`rounded-full border px-3 py-1 text-xs font-bold ${badgeClass}`}>{badgeLabel}</span>
          {next && (
            <Link
              href={next.href}
              className="rounded-full bg-slate-800 px-3 py-1 text-xs font-bold text-lime-300 hover:bg-slate-700"
            >
              {next.label}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
