import { AppShell } from "@/components/AppShell";
import { ChapterLessonGroups, type LessonGroup } from "@/components/notes/canonical";
import { ISOMERISM_GROUPS, isomerismParts, isomerismTabs } from "./parts";

export const metadata = { title: "Isomerism | Synergic Bond", description: "Premium JEE Main and JEE Advanced Isomerism course." };

export default function IsomerismPage() {
  const groups: LessonGroup[] = ISOMERISM_GROUPS.map((group) => ({
    label: group.label,
    lessons: isomerismParts
      .filter((part) => part.number >= group.from && part.number <= group.to)
      .map((part) => ({
        href: `/learn/isomerism/${part.number}`,
        number: `Part ${part.number}`,
        title: part.title,
        meta: part.topics.join(" · "),
      })),
  }));

  return (
    <AppShell
      discipline="JEE Organic Chemistry"
      chapterTitle="Isomerism"
      chapterSlug="isomerism"
      description="A 40-part premium route from constitutional isomerism to conformations, chirality, optical activity, R/S assignment and special stereochemical cases."
      free={false}
      tabs={isomerismTabs()}
    >
      <div className="mx-auto max-w-3xl">
        <ChapterLessonGroups groups={groups} />
      </div>
    </AppShell>
  );
}
