import { AppShell } from "@/components/AppShell";
import { ChapterLessonGrid } from "@/components/notes/canonical";
import { REDOX_LESSONS, redoxHref, redoxTabs } from "./_chapter";

export const metadata = {
  title: "Redox Reactions Notes — SYNERGIC BOND",
  description: "Redox reactions notes and study materials.",
};

export default function RedoxReactionsPage() {
  return (
    <AppShell
      discipline="Physical Chemistry · Inorganic Chemistry"
      chapterTitle="Redox Reactions"
      chapterSlug="redox-reactions"
      description="Complete guide to redox reactions, oxidation states, balancing, and electron transfer."
      free={true}
      tabs={redoxTabs(0)}
    >
      <div className="mx-auto max-w-3xl">
        <ChapterLessonGrid
          lessons={REDOX_LESSONS.map((lesson) => ({
            href: redoxHref(lesson.number),
            number: `Lesson ${lesson.number}`,
            title: lesson.title,
          }))}
        />
      </div>
    </AppShell>
  );
}
