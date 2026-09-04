import type { ChapterTab, LessonRef } from "@/components/notes/canonical";
import { HALOGEN_FAMILY_PARTS, type HalogenFamilyPartDef } from "./parts";

export const halogenFamilyHref = (number: number) => `/notes/halogen-family/part${number}`;

export const sectionLabel = (part: HalogenFamilyPartDef) => `Section ${part.section}`;

export function halogenFamilyLessonRef(number: number): LessonRef | undefined {
  const part = HALOGEN_FAMILY_PARTS.find((item) => item.number === number);
  return part
    ? { href: halogenFamilyHref(part.number), number: `Lesson ${part.number}`, title: part.title, meta: sectionLabel(part) }
    : undefined;
}

const HALOGEN_FAMILY_NAV_GROUPS = [
  { label: "Trends & anomaly", first: 1, last: 5 },
  { label: "Reactivity & preparation", first: 6, last: 7 },
  { label: "Chlorine & bleaching powder", first: 8, last: 9 },
  { label: "Oxoacids & hydrogen halides", first: 10, last: 11 },
  { label: "Interhalogens & pseudohalogens", first: 12, last: 13 },
  { label: "Uses", first: 14, last: 14 },
  { label: "Maps, traps, revision", first: 15, last: 19 },
  { label: "NCERT & question-bank layer", first: 20, last: 21 },
] as const;

export function halogenFamilyTabs(currentPart?: number): ChapterTab[] {
  return [
    { label: "All 21 lessons", href: "/notes/halogen-family", active: currentPart === undefined },
    ...HALOGEN_FAMILY_NAV_GROUPS.map((group) => ({
      label: group.label,
      href: halogenFamilyHref(group.first),
      active: currentPart !== undefined && currentPart >= group.first && currentPart <= group.last,
    })),
  ];
}
