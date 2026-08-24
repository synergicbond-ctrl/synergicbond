import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { ChapterLessonGrid } from "@/components/notes/canonical";
import { HYDROGEN_PARTS } from "./parts";
import { hydrogenTabs } from "./_chapter";

export const metadata = {
  title: "Hydrogen Notes — SYNERGIC BOND",
  description: "Hydrogen chemistry notes, lessons, and study materials.",
};

export default function HydrogenPage() {
  return (
    <AppShell
      discipline="Physical Chemistry · Inorganic Chemistry"
      chapterTitle="Hydrogen"
      chapterSlug="hydrogen"
      description="Complete guide to hydrogen: elemental state, isotopes, reactions, hydrides, and compounds."
      free={true}
      tabs={hydrogenTabs(0)}
    >
      <div className="mx-auto max-w-3xl">
        <ChapterLessonGrid
          lessons={HYDROGEN_PARTS.map((lesson: any) => ({
            href: `/notes/hydrogen/${lesson.slug}`,
            number: `Lesson ${lesson.number}`,
            title: lesson.title,
            meta: lesson.topics?.join(" · "),
          }))}
        />
      </div>
    </AppShell>
  );
}
