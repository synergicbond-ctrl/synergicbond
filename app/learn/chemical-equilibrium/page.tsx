import { AppShell } from "@/components/AppShell";
import { ChapterLessonGroups, type LessonGroup } from "@/components/notes/canonical";
import { CE_GROUPS, CE_LESSONS, ceHref } from "./_components/meta";

export default function ChemicalEquilibriumIndex() {
  const groups: LessonGroup[] = CE_GROUPS.map((group) => ({
    label: group.label,
    lessons: CE_LESSONS
      .filter((lesson) => Number(lesson.part) >= group.from && Number(lesson.part) <= group.to)
      .map((lesson) => ({
        href: ceHref(lesson.part),
        number: `Part ${lesson.part}`,
        title: lesson.title,
      })),
  }));

  return (
    <AppShell
      discipline="JEE Physical Chemistry"
      chapterTitle="Chemical Equilibrium"
      chapterSlug="chemical-equilibrium"
      description="A dedicated JEE Advanced Physical Chemistry chapter in eighteen continuous parts, covering all instructional pages, derivations, equilibrium algebra, Le Chatelier applications, phase equilibria, and numerical methods."
      free={false}
    >
      <div className="mx-auto max-w-3xl">
        <ChapterLessonGroups groups={groups} />
      </div>
    </AppShell>
  );
}
