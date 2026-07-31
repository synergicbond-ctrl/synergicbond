import type { ChapterTab, LessonRef } from "@/components/notes/canonical";
import { S_BLOCK_PARTS, type SBlockPartDef } from "./parts";

export const sBlockHref = (number: number) => `/notes/s-block/part${number}`;

export const sectionRangeLabel = (part: SBlockPartDef) =>
  part.fromSection === part.toSection
    ? `Section ${part.fromSection}`
    : `Sections ${part.fromSection}–${part.toSection}`;

export function sBlockLessonRef(number: number): LessonRef | undefined {
  const part = S_BLOCK_PARTS.find((item) => item.number === number);
  return part
    ? {
        href: sBlockHref(part.number),
        number: `Lesson ${part.number}`,
        title: part.title,
        meta: part.focus,
      }
    : undefined;
}

const S_BLOCK_NAV_GROUPS = [
  { label: "Foundations and periodic trends", first: 1, last: 8 },
  { label: "Lithium and beryllium anomalies", first: 9, last: 12 },
  { label: "Reactions and compounds", first: 13, last: 21 },
  { label: "Industrial salts and processes", first: 22, last: 27 },
  { label: "Biology, uses and safety", first: 28, last: 28 },
  { label: "JEE traps and worked problems", first: 29, last: 30 },
] as const;

export function sBlockTabs(currentPart?: number): ChapterTab[] {
  return [
    {
      label: `All ${S_BLOCK_PARTS.length} lessons`,
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
