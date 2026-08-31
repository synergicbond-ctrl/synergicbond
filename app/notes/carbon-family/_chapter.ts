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
  { label: "Trends & anomaly", first: 1, last: 5 },
  { label: "Reactivity, allotropes, carbides", first: 6, last: 8 },
  { label: "Oxides of carbon, CS₂", first: 9, last: 11 },
  { label: "Silicon, silica, silicates", first: 12, last: 14 },
  { label: "Glass, silicones, hydrides", first: 15, last: 17 },
  { label: "Halides, complexes, pπ–dπ", first: 18, last: 19 },
  { label: "Tin & lead", first: 20, last: 21 },
  { label: "Uses & p-block map", first: 22, last: 23 },
  { label: "Maps, traps, revision", first: 24, last: 27 },
] as const;

export function carbonFamilyTabs(currentPart?: number): ChapterTab[] {
  return [
    { label: "All 27 lessons", href: "/notes/carbon-family", active: currentPart === undefined },
    ...CARBON_FAMILY_NAV_GROUPS.map((group) => ({
      label: group.label,
      href: carbonFamilyHref(group.first),
      active: currentPart !== undefined && currentPart >= group.first && currentPart <= group.last,
    })),
  ];
}
