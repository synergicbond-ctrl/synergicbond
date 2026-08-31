import type { ChapterTab, LessonRef } from "@/components/notes/canonical";
import { CARBON_FAMILY_PARTS, type CarbonFamilyPartDef } from "./parts";

export const carbonFamilyHref = (number: number) => `/notes/carbon-family/part${number}`;

export const sectionLabel = (part: CarbonFamilyPartDef) =>
  part.section === "qbank" ? "Question bank" : `Section ${part.section}`;

export function carbonFamilyLessonRef(number: number): LessonRef | undefined {
  const part = CARBON_FAMILY_PARTS.find((item) => item.number === number);
  return part
    ? { href: carbonFamilyHref(part.number), number: `Lesson ${part.number}`, title: part.title, meta: sectionLabel(part) }
    : undefined;
}

const CARBON_FAMILY_NAV_GROUPS = [
  { label: "Trends & anomaly", first: 1, last: 3 },
  { label: "Carbon: allotropes & carbides", first: 4, last: 6 },
  { label: "Oxides of carbon, CS₂", first: 7, last: 8 },
  { label: "Silicon, silica, silicates", first: 9, last: 11 },
  { label: "Glass, silicones, hydrides", first: 12, last: 14 },
  { label: "Halides, complexes, pπ–dπ", first: 15, last: 16 },
  { label: "Tin & lead", first: 17, last: 18 },
  { label: "Maps & revision", first: 19, last: 23 },
  { label: "Question bank", first: 24, last: 24 },
] as const;

export function carbonFamilyTabs(currentPart?: number): ChapterTab[] {
  return [
    { label: "All 24 lessons", href: "/notes/carbon-family", active: currentPart === undefined },
    ...CARBON_FAMILY_NAV_GROUPS.map((group) => ({
      label: group.label,
      href: carbonFamilyHref(group.first),
      active: currentPart !== undefined && currentPart >= group.first && currentPart <= group.last,
    })),
  ];
}
