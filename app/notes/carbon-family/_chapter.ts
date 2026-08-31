import type { ChapterTab, LessonRef } from "@/components/notes/canonical";
import { CARBON_FAMILY_PARTS, type CarbonFamilyPartDef } from "./parts";

export const carbonFamilyHref = (number: number) => `/notes/carbon-family/part${number}`;

export const sectionLabel = (part: CarbonFamilyPartDef) => `Section ${part.section}`;

export function carbonFamilyLessonRef(number: number): LessonRef | undefined {
  const part = CARBON_FAMILY_PARTS.find((item) => item.number === number);
  return part
    ? { href: carbonFamilyHref(part.number), number: `Lesson ${part.number}`, title: part.title, meta: sectionLabel(part) }
    : undefined;
}

const CARBON_FAMILY_NAV_GROUPS = [
  { label: "Trends & anomaly", first: 1, last: 2 },
  { label: "Elements & carbides", first: 3, last: 5 },
  { label: "Carbon C/O/S chemistry", first: 6, last: 6 },
  { label: "Silicon & silicates", first: 7, last: 9 },
  { label: "Hydrides, halides, complexes", first: 10, last: 11 },
  { label: "Tin & lead", first: 12, last: 13 },
  { label: "Revision & maps", first: 14, last: 18 },
] as const;

export function carbonFamilyTabs(currentPart?: number): ChapterTab[] {
  return [
    { label: "All 18 lessons", href: "/notes/carbon-family", active: currentPart === undefined },
    ...CARBON_FAMILY_NAV_GROUPS.map((group) => ({
      label: group.label,
      href: carbonFamilyHref(group.first),
      active: currentPart !== undefined && currentPart >= group.first && currentPart <= group.last,
    })),
  ];
}
