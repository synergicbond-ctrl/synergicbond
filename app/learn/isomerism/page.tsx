import { ChapterLessonGroups, ChapterShell, type LessonGroup } from "@/components/notes/canonical";
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
    <ChapterShell
      kicker="JEE Organic Chemistry"
      subtitle="Isomerism"
      headerTag="40-part premium course"
      tabs={isomerismTabs()}
    >
      <p style={{ margin: "4px 0 6px", maxWidth: 860, color: "#c3d1dd", fontSize: 14.5, lineHeight: 1.7 }}>
        A 40-part premium route from constitutional isomerism to conformations, chirality, optical
        activity, R/S assignment and special stereochemical cases.
      </p>
      <ChapterLessonGroups groups={groups} />
    </ChapterShell>
  );
}
