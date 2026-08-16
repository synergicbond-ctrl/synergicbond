import "server-only";

import { HYDROGEN_MASTER_MARKDOWN } from "./content";

export interface HydrogenPartDef {
  slug: string;
  number: number;
  title: string;
  /** Inclusive range of top-level "# N." chapters carried by this lesson. */
  fromSection: number;
  toSection: number;
}

/**
 * Eight coherent textbook lessons. Each lesson follows one conceptual arc,
 * instead of splitting the chapter only by equal section counts.
 */
export const HYDROGEN_PARTS: HydrogenPartDef[] = [
  { slug: "part1", number: 1, title: "Foundations, Position, Isotopes & H₂ Molecular Orbitals", fromSection: 1, toSection: 4 },
  { slug: "part2", number: 2, title: "Reactive Forms, Ortho–Para Hydrogen & Preparation", fromSection: 5, toSection: 7 },
  { slug: "part3", number: 3, title: "Dihydrogen Reactivity, Catalysis, Fuel & Storage", fromSection: 8, toSection: 9 },
  { slug: "part4", number: 4, title: "Hydrides, Diborane, 3c–2e Bonding & Hydride Transfer", fromSection: 10, toSection: 10 },
  { slug: "part5", number: 5, title: "Hydrated Proton, Hydrogen Bonding, Water & Heavy Water", fromSection: 11, toSection: 14 },
  { slug: "part6", number: 6, title: "Hydrogen Peroxide, Hard Water & Acid–Base Connections", fromSection: 15, toSection: 18 },
  { slug: "part7", number: 7, title: "Complete Reaction Atlas, Mechanisms & Exceptions", fromSection: 19, toSection: 20 },
  { slug: "part8", number: 8, title: "High-Yield Revision & Advanced Reaction Problems", fromSection: 21, toSection: 22 },
  { slug: "part9", number: 9, title: "JEE Question Bank: 76 Questions Across Every Exam Format", fromSection: 23, toSection: 23 },
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

/**
 * Images are rendered in a curated four-visual gallery for every lesson.
 * Removing inline image markdown prevents repetition and keeps the flow clean.
 */
function removeInlineImages(markdown: string): string {
  return markdown
    .replace(/^\s*!\[[^\]]*\]\([^\n)]+\)\s*$/gm, "")
    .replace(/\n{3,}/g, "\n\n");
}

export function hydrogenPartMarkdown(part: HydrogenPartDef): string {
  const { preamble, sections } = splitMaster();
  const body = sections
    .filter((section) => section.num >= part.fromSection && section.num <= part.toSection)
    .map((section) => section.text)
    .join("\n");

  const combined = part.number === 1 && preamble.trim() ? `${preamble}\n${body}` : body;
  return removeInlineImages(combined);
}

export function hydrogenPartBySlug(slug: string): HydrogenPartDef | undefined {
  return HYDROGEN_PARTS.find((part) => part.slug === slug);
}
