import type { ReactNode } from "react";
import {
  ChapterShell,
  ChapterLessonPager,
  ChapterPartStrip,
  type ChapterTab,
  type LessonRef,
} from "@/components/notes/canonical";
import { THERMO_GROUPS, THERMO_LESSONS, thermoHref } from "../parts/meta";

// Canonical chapter chrome for Thermodynamics — shell, topic-group tabs and
// lesson pager shared by the hub and all 30 part pages. Lesson content stays
// untouched inside the frame.

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

export function ThermoPartFrame({ part, children }: { part: number; children: ReactNode }) {
  const index = part - 1;
  const lesson = THERMO_LESSONS[index];

  return (
    <ChapterShell
      bleed
      kicker="JEE Physical Chemistry"
      subtitle="Thermodynamics"
      tabs={thermoTabs(part)}
    >
      <div className="sbnPartChrome">
        <ChapterPartStrip
          hubHref="/learn/thermodynamics"
          hubLabel="Thermodynamics — all lessons"
          positionLabel={`Lesson ${lesson?.part ?? String(part).padStart(2, "0")} of ${THERMO_LESSONS.length}`}
        />
      </div>
      {children}
      <div className="sbnPartChrome">
        <ChapterLessonPager
          prev={thermoLessonRef(index - 1)}
          next={thermoLessonRef(index + 1)}
          hubHref="/learn/thermodynamics"
          hubLabel="All lessons"
        />
      </div>
    </ChapterShell>
  );
}
