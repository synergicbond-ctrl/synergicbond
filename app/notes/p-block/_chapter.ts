import type { ChapterTab, LessonRef } from "@/components/notes/canonical";
import { P_BLOCK_PARTS, type PBlockPartDef } from "./parts";
export const pBlockHref = (number: number) => `/notes/p-block/part${number}`;
export const sectionRangeLabel = (part: PBlockPartDef) =>
  part.number === 2 || part.number === 3
    ? `Boron Family · §${part.fromSection}–${part.toSection}`
    : part.fromSection === part.toSection
      ? `Section ${part.fromSection}`
      : `Sections ${part.fromSection}–${part.toSection}`;
export function pBlockLessonRef(number: number): LessonRef | undefined { const part = P_BLOCK_PARTS.find((item) => item.number === number); return part ? { href: pBlockHref(part.number), number: `Lesson ${part.number}`, title: part.title, meta: sectionRangeLabel(part) } : undefined; }

// Grouped top-nav tabs (matches the s-block/redox-reactions convention for
// chapters with many parts): one tab per real topic group, not per lesson —
// 20 individual lesson pills would otherwise wrap across 6-7 rows and push
// all page content below the fold.
const P_BLOCK_NAV_GROUPS = [
  { label: "Intro & trends", first: 1, last: 1 },
  { label: "Group 13 — Boron family", first: 2, last: 3 },
  { label: "Group 14 — Carbon family", first: 4, last: 6 },
  { label: "Group 15 — Nitrogen family", first: 7, last: 10 },
  { label: "Group 16 — Oxygen family", first: 11, last: 14 },
  { label: "Group 17 — Halogens", first: 15, last: 17 },
  { label: "Group 18 — Noble gases", first: 18, last: 19 },
  { label: "JEE synthesis & revision", first: 20, last: 20 },
] as const;

export function pBlockTabs(currentPart?: number): ChapterTab[] {
  return [
    { label: "All 20 lessons", href: "/notes/p-block", active: currentPart === undefined },
    ...P_BLOCK_NAV_GROUPS.map((group) => ({
      label: group.label,
      href: pBlockHref(group.first),
      active: currentPart !== undefined && currentPart >= group.first && currentPart <= group.last,
    })),
  ];
}
