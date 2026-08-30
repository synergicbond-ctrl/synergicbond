import type { ChapterTab, LessonRef } from "@/components/notes/canonical";
import { BORON_FAMILY_PARTS, type BoronFamilyPartDef } from "./parts";

export const boronFamilyHref = (number: number) => `/notes/boron-family/part${number}`;

export const sectionLabel = (part: BoronFamilyPartDef) =>
  part.section === "qbank" ? "Question bank" : `Section ${part.section}`;

export function boronFamilyLessonRef(number: number): LessonRef | undefined {
  const part = BORON_FAMILY_PARTS.find((item) => item.number === number);
  return part
    ? { href: boronFamilyHref(part.number), number: `Lesson ${part.number}`, title: part.title, meta: sectionLabel(part) }
    : undefined;
}

const BORON_FAMILY_NAV_GROUPS = [
  { label: "Trends & periodicity", first: 1, last: 3 },
  { label: "Bonding & reactivity", first: 4, last: 6 },
  { label: "Elemental boron & B–O", first: 7, last: 8 },
  { label: "Halides & boranes", first: 9, last: 10 },
  { label: "Aluminium & uses", first: 11, last: 13 },
  { label: "Question bank", first: 14, last: 14 },
] as const;

export function boronFamilyTabs(currentPart?: number): ChapterTab[] {
  return [
    { label: "All 14 lessons", href: "/notes/boron-family", active: currentPart === undefined },
    ...BORON_FAMILY_NAV_GROUPS.map((group) => ({
      label: group.label,
      href: boronFamilyHref(group.first),
      active: currentPart !== undefined && currentPart >= group.first && currentPart <= group.last,
    })),
  ];
}
