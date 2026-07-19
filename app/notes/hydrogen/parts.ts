import "server-only";

import { HYDROGEN_MASTER_MARKDOWN } from "./content";

// ─────────────────────────────────────────────────────────────────────────────
// Hydrogen lesson registry — presentation only.
//
// The master markdown (content.ts) stays the byte-identical single source of
// truth. This module only PARTITIONS it into 8 lessons at existing top-level
// "# N." heading boundaries; nothing is rewritten, reordered or dropped. The
// preamble before "# 1." (title block + chapter map) opens Lesson 1.
// ─────────────────────────────────────────────────────────────────────────────

export interface HydrogenPartDef {
  slug: string;
  number: number;
  title: string;
  /** Inclusive range of top-level "# N." sections carried by this lesson. */
  fromSection: number;
  toSection: number;
}

export const HYDROGEN_PARTS: HydrogenPartDef[] = [
  { slug: "part1", number: 1, title: "Introduction, Position, Occurrence & Isotopes", fromSection: 1, toSection: 6 },
  { slug: "part2", number: 2, title: "Dihydrogen — Preparation, Properties & Uses", fromSection: 7, toSection: 13 },
  { slug: "part3", number: 3, title: "Special Forms, Ortho–Para Hydrogen & Hydrides", fromSection: 14, toSection: 24 },
  { slug: "part4", number: 4, title: "Hydrogen Bonding, Water, Ice & Their Chemistry", fromSection: 25, toSection: 33 },
  { slug: "part5", number: 5, title: "Hard & Soft Water, Softening & Heavy Water", fromSection: 34, toSection: 39 },
  { slug: "part6", number: 6, title: "Hydrogen Peroxide — Complete Treatment", fromSection: 40, toSection: 53 },
  { slug: "part7", number: 7, title: "Hydrogen Economy, JEE Traps & High-Yield Revision", fromSection: 54, toSection: 61 },
  { slug: "part8", number: 8, title: "Source-Restored NCERT Data & Advanced Additions", fromSection: 62, toSection: 72 },
];

interface SplitMarkdown {
  preamble: string;
  sections: { num: number; text: string }[];
}

let cached: SplitMarkdown | null = null;

function splitMaster(): SplitMarkdown {
  if (cached) return cached;
  const lines = HYDROGEN_MASTER_MARKDOWN.split("\n");
  const sections: { num: number; text: string }[] = [];
  const preambleLines: string[] = [];
  let current: { num: number; lines: string[] } | null = null;
  for (const line of lines) {
    const heading = /^# (\d+)\./.exec(line);
    if (heading) {
      if (current) sections.push({ num: current.num, text: current.lines.join("\n") });
      current = { num: Number(heading[1]), lines: [line] };
    } else if (current) {
      current.lines.push(line);
    } else {
      preambleLines.push(line);
    }
  }
  if (current) sections.push({ num: current.num, text: current.lines.join("\n") });
  cached = { preamble: preambleLines.join("\n"), sections };
  return cached;
}

/** Markdown for one lesson — an untouched contiguous slice of the master notes. */
export function hydrogenPartMarkdown(part: HydrogenPartDef): string {
  const { preamble, sections } = splitMaster();
  const body = sections
    .filter((section) => section.num >= part.fromSection && section.num <= part.toSection)
    .map((section) => section.text)
    .join("\n");
  return part.number === 1 && preamble.trim() ? `${preamble}\n${body}` : body;
}

export function hydrogenPartBySlug(slug: string): HydrogenPartDef | undefined {
  return HYDROGEN_PARTS.find((part) => part.slug === slug);
}
