import type { Metadata } from "next";
import { ChapterShell, ChapterLessonGroups, type LessonGroup } from "@/components/notes/canonical";
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
    <ChapterShell
      kicker="JEE Physical Chemistry"
      subtitle="Thermodynamics"
      tabs={thermoTabs()}
    >
      <p style={{ margin: "4px 0 6px", maxWidth: 860, color: "#c3d1dd", fontSize: 14.5, lineHeight: 1.7 }}>
        Build the complete picture of energy, heat, work, entropy and spontaneity through 30 connected visual
        lessons, derivations, graphs, tables, worked examples and solutions. Start at Part 01 or continue where
        you left off.
      </p>
      <ChapterLessonGroups groups={groups} />
    </ChapterShell>
  );
}
