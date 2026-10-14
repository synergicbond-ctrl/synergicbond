import type { ChapterTab, LessonRef } from "@/components/notes/canonical";
import { POC_PARTS, type PocPartDef } from "./parts";

export const pocHref = (number: number) => `/notes/purification-characterisation/part${number}`;

export const sectionLabel = (part: PocPartDef) => `Section ${part.section}`;

export function pocLessonRef(number: number): LessonRef | undefined {
  const part = POC_PARTS.find((item) => item.number === number);
  return part
    ? { href: pocHref(part.number), number: `Lesson ${part.number}`, title: part.title, meta: sectionLabel(part) }
    : undefined;
}

const POC_NAV_GROUPS = [
  { label: "Bonding & shapes", first: 1, last: 2 },
  { label: "Purity & purification", first: 3, last: 4 },
  { label: "Distillation", first: 5, last: 6 },
  { label: "Extraction & chromatography", first: 7, last: 8 },
  { label: "Detection of elements", first: 9, last: 10 },
  { label: "Estimation of elements", first: 11, last: 12 },
  { label: "Formulae, traps & practice", first: 13, last: 15 },
] as const;

export function pocTabs(currentPart?: number): ChapterTab[] {
  return [
    { label: "All 15 lessons", href: "/notes/purification-characterisation", active: currentPart === undefined },
    ...POC_NAV_GROUPS.map((group) => ({
      label: group.label,
      href: pocHref(group.first),
      active: currentPart !== undefined && currentPart >= group.first && currentPart <= group.last,
    })),
  ];
}
