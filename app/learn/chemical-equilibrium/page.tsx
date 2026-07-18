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
    <main className="sbnMain">
      <p style={{ margin: "4px 0 6px", maxWidth: 860, color: "#c3d1dd", fontSize: 14.5, lineHeight: 1.7 }}>
        A dedicated JEE Advanced Physical Chemistry chapter in eighteen continuous parts, covering all
        instructional pages, derivations, equilibrium algebra, Le Chatelier applications, phase equilibria,
        and numerical methods.
      </p>
      <ChapterLessonGroups groups={groups} />
    </main>
  );
}
