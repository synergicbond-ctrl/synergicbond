import type { ChapterTab, LessonRef } from "@/components/notes/canonical";
import { HYDROLYSIS_PARTS, type HydrolysisPartDef } from "./parts";

export const hydrolysisHref = (number: number) => `/notes/hydrolysis/part${number}`;

export const sectionLabel = (part: HydrolysisPartDef) => `Section ${part.section}`;

export function hydrolysisLessonRef(number: number): LessonRef | undefined {
  const part = HYDROLYSIS_PARTS.find((item) => item.number === number);
  return part
    ? { href: hydrolysisHref(part.number), number: `Lesson ${part.number}`, title: part.title, meta: sectionLabel(part) }
    : undefined;
}

const HYDROLYSIS_NAV_GROUPS = [
  { label: "Mental model & MO view", first: 1, last: 2 },
  { label: "Mechanism families", first: 3, last: 3 },
  { label: "Groups 13–18, ions & salts", first: 4, last: 4 },
  { label: "Tables & traps", first: 5, last: 6 },
  { label: "Worked & practice", first: 7, last: 8 },
] as const;

export function hydrolysisTabs(currentPart?: number): ChapterTab[] {
  return [
    { label: "All 8 lessons", href: "/notes/hydrolysis", active: currentPart === undefined },
    ...HYDROLYSIS_NAV_GROUPS.map((group) => ({
      label: group.label,
      href: hydrolysisHref(group.first),
      active: currentPart !== undefined && currentPart >= group.first && currentPart <= group.last,
    })),
  ];
}
