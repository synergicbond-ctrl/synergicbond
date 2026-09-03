import { AppShell } from "@/components/AppShell";
import { ChapterLessonGrid } from "@/components/notes/canonical";
import { P_BLOCK_PARTS } from "./parts";
import { pBlockHref, pBlockTabs, sectionRangeLabel } from "./_chapter";

export const metadata = { title: "P-block Elements — JEE Advanced Notes | SYNERGIC BOND", description: "P-block notes for JEE Advanced: Groups 13–18, structures, oxoacids, redox logic, interhalogens and xenon compounds." };
export const dynamic = "force-dynamic";

export default function PBlockHub() {
  return (
    <AppShell
      discipline="JEE Inorganic Chemistry"
      chapterTitle="P-block Elements"
      chapterSlug="p-block"
      description="A concept-first route through Groups 13–18: trends, structures, oxoacids, redox, named reactions and the comparison traps that dominate multi-concept JEE Advanced questions."
      free={false}
      tabs={pBlockTabs()}
    >
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="flex flex-wrap gap-3 text-xs font-bold text-[var(--text-muted)]">
          <span className="rounded-xl bg-[var(--surface)] px-3 py-2">20 lessons · Groups 13–18</span>
          <span className="rounded-xl bg-[var(--surface)] px-3 py-2">Structures, oxoacids & redox logic</span>
          <span className="rounded-xl bg-[var(--surface)] px-3 py-2">Structure + reaction decision trees</span>
        </div>
        <ChapterLessonGrid
          lessons={[
            ...P_BLOCK_PARTS.filter((part) => part.number < 4).map((part) => ({
              href: pBlockHref(part.number),
              number: `Lesson ${part.number}`,
              title: part.title,
              meta: sectionRangeLabel(part),
            })),
            {
              href: "/notes/carbon-family",
              number: "Lessons 4–6",
              title: "Group 14 — Carbon family (full 29-lesson deep dive)",
              meta: "Dedicated chapter →",
            },
            ...P_BLOCK_PARTS.filter((part) => part.number > 6).map((part) => ({
              href: pBlockHref(part.number),
              number: `Lesson ${part.number}`,
              title: part.title,
              meta: sectionRangeLabel(part),
            })),
          ]}
        />
      </div>
    </AppShell>
  );
}
