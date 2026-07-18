import type { ChapterTab, LessonGroup, LessonRef } from "@/components/notes/canonical";
import { electroParts } from "./parts";

// Canonical chapter chrome metadata for Electrochemistry — derived at runtime
// from the authored electroParts registry (single source of truth, no
// duplicated titles). Presentation only.

export interface ElectroGroupSpec {
  label: string;
  from: number;
  to: number;
}

export const ELECTRO_GROUPS: ElectroGroupSpec[] = [
  { label: "Cells, Electrodes & Potentials", from: 1, to: 5 },
  { label: "EMF, Nernst & the Electrochemical Series", from: 6, to: 11 },
  { label: "Commercial Cells & Electrolysis", from: 12, to: 17 },
  { label: "Conductance, Kohlrausch & Titrations", from: 18, to: 24 },
];

export function electroHref(number: number): string {
  return `/notes/electrochemistry/part${number}`;
}

export function electroLessonRef(number: number): LessonRef | undefined {
  const part = electroParts.find((item) => item.number === number);
  if (!part) return undefined;
  return {
    href: electroHref(part.number),
    number: `Lesson ${part.number}`,
    title: part.title,
  };
}

export function electroTabs(currentPart?: number): ChapterTab[] {
  return [
    { label: "All 24 lessons", href: "/notes/electrochemistry", active: currentPart === undefined },
    ...ELECTRO_GROUPS.map((group, index) => ({
      label: group.label,
      href: `/notes/electrochemistry#group-${index + 1}`,
      active: currentPart !== undefined && currentPart >= group.from && currentPart <= group.to,
    })),
  ];
}

export function electroLessonGroups(): LessonGroup[] {
  return ELECTRO_GROUPS.map((group) => ({
    label: group.label,
    lessons: electroParts
      .filter((part) => part.number >= group.from && part.number <= group.to)
      .map((part) => ({
        href: electroHref(part.number),
        number: `Lesson ${part.number}`,
        title: part.title,
      })),
  }));
}
