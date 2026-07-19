import type { ChapterTab, LessonRef } from "@/components/notes/canonical";
import { HYDROGEN_PARTS, type HydrogenPartDef } from "./parts";

// Canonical chapter chrome metadata for Hydrogen — derived from the lesson
// registry (single source of truth, no duplicated titles). Presentation only.

export function hydrogenHref(number: number): string {
  return `/notes/hydrogen/part${number}`;
}

export function hydrogenLessonRef(number: number): LessonRef | undefined {
  const part = HYDROGEN_PARTS.find((item) => item.number === number);
  if (!part) return undefined;
  return {
    href: hydrogenHref(part.number),
    number: `Lesson ${part.number}`,
    title: part.title,
    meta: sectionRangeLabel(part),
  };
}

export function sectionRangeLabel(part: HydrogenPartDef): string {
  return part.fromSection === part.toSection
    ? `Section ${part.fromSection}`
    : `Sections ${part.fromSection}–${part.toSection}`;
}

export function hydrogenTabs(currentPart?: number): ChapterTab[] {
  return [
    { label: "All 8 lessons", href: "/notes/hydrogen", active: currentPart === undefined },
    ...HYDROGEN_PARTS.map((part) => ({
      label: `${part.number}. ${part.title}`,
      href: hydrogenHref(part.number),
      active: currentPart === part.number,
    })),
  ];
}
