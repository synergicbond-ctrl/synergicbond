import type { ChapterTab, LessonRef } from "@/components/notes/canonical";
import { OXYGEN_FAMILY_PARTS, type OxygenFamilyPartDef } from "./parts";

export const oxygenFamilyHref = (number: number) => `/notes/oxygen-family/part${number}`;

export const sectionLabel = (part: OxygenFamilyPartDef) => `Section ${part.section}`;

export function oxygenFamilyLessonRef(number: number): LessonRef | undefined {
  const part = OXYGEN_FAMILY_PARTS.find((item) => item.number === number);
  return part
    ? { href: oxygenFamilyHref(part.number), number: `Lesson ${part.number}`, title: part.title, meta: sectionLabel(part) }
    : undefined;
}

const OXYGEN_FAMILY_NAV_GROUPS = [
  { label: "Trends & anomaly", first: 1, last: 5 },
  { label: "Reactivity, allotropes", first: 6, last: 7 },
  { label: "Dioxygen & ozone", first: 8, last: 9 },
  { label: "Hydrides · oxides · H₂O₂", first: 10, last: 12 },
  { label: "SO₂ · S oxoacids · H₂SO₄", first: 13, last: 15 },
  { label: "Halides · Se/Te/Po · uses", first: 16, last: 18 },
  { label: "Maps, traps, revision", first: 19, last: 23 },
  { label: "NCERT & question-bank layer", first: 24, last: 25 },
] as const;

export function oxygenFamilyTabs(currentPart?: number): ChapterTab[] {
  return [
    { label: "All 25 lessons", href: "/notes/oxygen-family", active: currentPart === undefined },
    ...OXYGEN_FAMILY_NAV_GROUPS.map((group) => ({
      label: group.label,
      href: oxygenFamilyHref(group.first),
      active: currentPart !== undefined && currentPart >= group.first && currentPart <= group.last,
    })),
  ];
}
