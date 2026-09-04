import type { ChapterTab, LessonRef } from "@/components/notes/canonical";
import { P_BLOCK_PARTS, type PBlockPartDef } from "./parts";
export const pBlockHref = (number: number) => `/notes/p-block/part${number}`;
export const sectionRangeLabel = (part: PBlockPartDef) =>
  part.number === 2 || part.number === 3
    ? `Boron Family · §${part.fromSection}–${part.toSection}`
    : part.fromSection === part.toSection
      ? `Section ${part.fromSection}`
      : `Sections ${part.fromSection}–${part.toSection}`;
// Groups 14–18 each live in a dedicated deep-dive chapter; the p-block survey's
// prev/next chain and nav tabs point straight there.
const DEEP_DIVE_RANGES: { first: number; last: number; href: string; label: string; title: string }[] = [
  { first: 4, last: 6, href: "/notes/carbon-family", label: "Carbon Family", title: "Group 14 — the full 29-lesson deep dive" },
  { first: 7, last: 10, href: "/notes/nitrogen-family", label: "Nitrogen Family", title: "Group 15 — the full 28-lesson deep dive" },
  { first: 11, last: 14, href: "/notes/oxygen-family", label: "Oxygen Family", title: "Group 16 — the full 25-lesson deep dive" },
  { first: 15, last: 17, href: "/notes/halogen-family", label: "Halogen Family", title: "Group 17 — the full 21-lesson deep dive" },
  { first: 18, last: 19, href: "/notes/noble-gases", label: "Noble Gases", title: "Group 18 — the full 14-lesson deep dive" },
];

export function deepDiveFor(number: number) {
  return DEEP_DIVE_RANGES.find((range) => number >= range.first && number <= range.last);
}

export function pBlockLessonRef(number: number): LessonRef | undefined {
  const deep = deepDiveFor(number);
  if (deep) {
    return { href: deep.href, number: deep.label, title: deep.title, meta: "Dedicated chapter" };
  }
  const part = P_BLOCK_PARTS.find((item) => item.number === number);
  return part ? { href: pBlockHref(part.number), number: `Lesson ${part.number}`, title: part.title, meta: sectionRangeLabel(part) } : undefined;
}

// Grouped top-nav tabs (matches the s-block/redox-reactions convention for
// chapters with many parts): one tab per real topic group, not per lesson —
// 20 individual lesson pills would otherwise wrap across 6-7 rows and push
// all page content below the fold.
const P_BLOCK_NAV_GROUPS = [
  { label: "Intro & trends", first: 1, last: 1 },
  { label: "Group 13 — Boron family", first: 2, last: 3 },
  // Groups 14–18 each have their own deep-dive chapter; the survey lessons in
  // those ranges redirect there, and these tabs point straight at them.
  { label: "Group 14 — Carbon family", first: 4, last: 6, href: "/notes/carbon-family" },
  { label: "Group 15 — Nitrogen family", first: 7, last: 10, href: "/notes/nitrogen-family" },
  { label: "Group 16 — Oxygen family", first: 11, last: 14, href: "/notes/oxygen-family" },
  { label: "Group 17 — Halogens", first: 15, last: 17, href: "/notes/halogen-family" },
  { label: "Group 18 — Noble gases", first: 18, last: 19, href: "/notes/noble-gases" },
  { label: "JEE synthesis & revision", first: 20, last: 20 },
] as const;

export function pBlockTabs(currentPart?: number): ChapterTab[] {
  return [
    { label: "All 20 lessons", href: "/notes/p-block", active: currentPart === undefined },
    ...P_BLOCK_NAV_GROUPS.map((group) => ({
      label: group.label,
      href: "href" in group ? group.href : pBlockHref(group.first),
      active: currentPart !== undefined && currentPart >= group.first && currentPart <= group.last,
    })),
  ];
}
