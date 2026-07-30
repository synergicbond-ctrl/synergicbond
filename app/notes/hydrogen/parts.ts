import "server-only";

import { HYDROGEN_MASTER_MARKDOWN } from "./content";

// The master markdown is the single source of truth. This registry partitions
// all 24 top-level textbook chapters into eight balanced website lessons.
export interface HydrogenPartDef {
  slug: string;
  number: number;
  title: string;
  /** Inclusive range of top-level "# N." chapters carried by this lesson. */
  fromSection: number;
  toSection: number;
}

export const HYDROGEN_PARTS: HydrogenPartDef[] = [
  { slug: "part1", number: 1, title: "Identity, Position, Occurrence & Isotopes", fromSection: 1, toSection: 4 },
  { slug: "part2", number: 2, title: "Forms, Ortho–Para Hydrogen & Dihydrogen Preparation", fromSection: 5, toSection: 7 },
  { slug: "part3", number: 3, title: "Dihydrogen Chemistry, Fuel Economy & Hydrides", fromSection: 8, toSection: 10 },
  { slug: "part4", number: 4, title: "Hydrated Proton, Hydrogen Bonding, Water & Heavy Water", fromSection: 11, toSection: 14 },
  { slug: "part5", number: 5, title: "Hydrogen Peroxide & Water-Softening Chemistry", fromSection: 15, toSection: 17 },
  { slug: "part6", number: 6, title: "Acid–Base Bridge, Master Reactions & JEE Traps", fromSection: 18, toSection: 20 },
  { slug: "part7", number: 7, title: "High-Yield Focus & Reaction-Sequence Problems", fromSection: 21, toSection: 22 },
  { slug: "part8", number: 8, title: "Visual Blueprints & Complete Source Audit", fromSection: 23, toSection: 24 },
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
