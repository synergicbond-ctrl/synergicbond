import type { ChapterTab, LessonRef } from "@/components/notes/canonical";
import { NITROGEN_FAMILY_PARTS, type NitrogenFamilyPartDef } from "./parts";

export const nitrogenFamilyHref = (number: number) => `/notes/nitrogen-family/part${number}`;

export const sectionLabel = (part: NitrogenFamilyPartDef) => `Section ${part.section}`;

export function nitrogenFamilyLessonRef(number: number): LessonRef | undefined {
  const part = NITROGEN_FAMILY_PARTS.find((item) => item.number === number);
  return part
    ? { href: nitrogenFamilyHref(part.number), number: `Lesson ${part.number}`, title: part.title, meta: sectionLabel(part) }
    : undefined;
}

const NITROGEN_FAMILY_NAV_GROUPS = [
  { label: "Trends & anomaly", first: 1, last: 5 },
  { label: "Reactivity, allotropes, nitrides", first: 6, last: 8 },
  { label: "Dinitrogen & ammonia", first: 9, last: 11 },
  { label: "Hydrazine · oxides · nitric acid", first: 12, last: 14 },
  { label: "Phosphine · P halides · P oxoacids", first: 15, last: 18 },
  { label: "As/Sb/Bi & uses", first: 19, last: 21 },
  { label: "Maps, traps, revision", first: 22, last: 26 },
  { label: "NCERT & question-bank layer", first: 27, last: 28 },
] as const;

export function nitrogenFamilyTabs(currentPart?: number): ChapterTab[] {
  return [
    { label: "All 28 lessons", href: "/notes/nitrogen-family", active: currentPart === undefined },
    ...NITROGEN_FAMILY_NAV_GROUPS.map((group) => ({
      label: group.label,
      href: nitrogenFamilyHref(group.first),
      active: currentPart !== undefined && currentPart >= group.first && currentPart <= group.last,
    })),
  ];
}
