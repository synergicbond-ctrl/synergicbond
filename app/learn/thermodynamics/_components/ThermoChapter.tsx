import {
  type ChapterTab,
  type LessonRef,
} from "@/components/notes/canonical";
import { THERMO_GROUPS, THERMO_LESSONS, thermoHref } from "../parts/meta";

// Tab and lesson-ref helpers for Thermodynamics, consumed by AppShell via
// _lesson-helper.tsx. Chrome itself lives in AppShell, not here.

export function thermoLessonRef(index: number): LessonRef | undefined {
  const lesson = THERMO_LESSONS[index];
  if (!lesson) return undefined;
  return {
    href: thermoHref(lesson.part),
    number: `Part ${lesson.part}`,
    title: lesson.title,
  };
}

export function thermoTabs(currentPart?: number): ChapterTab[] {
  const groupTabs = THERMO_GROUPS.map((group, index) => ({
    label: group.label,
    href: `/learn/thermodynamics#group-${index + 1}`,
    active: currentPart !== undefined && currentPart >= group.from && currentPart <= group.to,
  }));
  return [
    { label: "All 30 lessons", href: "/learn/thermodynamics", active: currentPart === undefined },
    ...groupTabs,
  ];
}

