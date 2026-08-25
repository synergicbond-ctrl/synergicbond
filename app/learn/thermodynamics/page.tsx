import type { Metadata } from "next";
import { AppShell } from "@/components/AppShell";
import { ChapterLessonGroups, type LessonGroup } from "@/components/notes/canonical";
import { THERMO_GROUPS, THERMO_LESSONS, thermoHref } from "./parts/meta";
import { thermoTabs } from "./_components/ThermoChapter";

export const metadata: Metadata = { title: "Thermodynamics — 30-Part Course | Synergic Bond", description: "Complete 30-part Thermodynamics course with visual theory, derivations, graphs, tables, worked examples, and solutions." };

export default function ThermodynamicsPage() {
  const groups: LessonGroup[] = THERMO_GROUPS.map((group) => ({
    label: group.label,
    lessons: THERMO_LESSONS
      .filter((lesson) => Number(lesson.part) >= group.from && Number(lesson.part) <= group.to)
      .map((lesson) => ({
        href: thermoHref(lesson.part),
        number: `Part ${lesson.part}`,
        title: lesson.title,
      })),
  }));

  return (
    <AppShell
      discipline="JEE Physical Chemistry"
      chapterTitle="Thermodynamics"
      chapterSlug="thermodynamics"
      description="Build the complete picture of energy, heat, work, entropy and spontaneity through 30 connected visual lessons, derivations, graphs, tables, worked examples and solutions."
      free={false}
      tabs={thermoTabs()}
    >
      <div className="mx-auto max-w-3xl">
        <ChapterLessonGroups groups={groups} />
      </div>
    </AppShell>
  );
}
