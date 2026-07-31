import type { ChapterTab, LessonRef } from "@/components/notes/canonical";
import { S_BLOCK_PARTS, type SBlockPartDef } from "./parts";

export const sBlockHref = (number: number) => `/notes/s-block/part${number}`;

export const sectionRangeLabel = (part: SBlockPartDef) =>
  `Sections ${part.fromSection}–${part.toSection}`;

export function sBlockLessonRef(number: number): LessonRef | undefined {
  const part = S_BLOCK_PARTS.find((item) => item.number === number);

  return part
    ? {
        href: sBlockHref(part.number),
        number: `Part ${part.number}`,
        title: part.title,
        meta: part.focus,
      }
    : undefined;
}

const S_BLOCK_NAV_GROUPS = [
  { label: "Fundamentals and trends", first: 1, last: 4 },
  { label: "Anomalies and reactions", first: 5, last: 8 },
  { label: "Salts and industrial chemistry", first: 9, last: 13 },
  { label: "Applications and JEE practice", first: 14, last: 15 },
] as const;

export function sBlockTabs(currentPart?: number): ChapterTab[] {
  return [
    {
      label: "All 15 parts",
      href: "/notes/s-block",
      active: currentPart === undefined,
    },
    ...S_BLOCK_NAV_GROUPS.map((group) => ({
      label: group.label,
      href: sBlockHref(group.first),
      active:
        currentPart !== undefined &&
        currentPart >= group.first &&
        currentPart <= group.last,
    })),
  ];
}
