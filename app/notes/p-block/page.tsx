import { AppShell } from "@/components/AppShell";
import { ChapterLessonGrid } from "@/components/notes/canonical";
import { P_BLOCK_PARTS } from "./parts";
import { pBlockHref, pBlockTabs, sectionRangeLabel } from "./_chapter";

export const metadata = { title: "P-block Elements — JEE Advanced Notes | SYNERGIC BOND", description: "P-block hub for JEE Advanced: block-wide trends, a final decision-tree/trap-bank synthesis, and direct links into the six dedicated Group 13–18 deep-dive chapters." };
export const dynamic = "force-dynamic";

// Each group's full, detailed treatment lives in exactly one place — its own
// dedicated chapter. This hub only carries the two lessons unique to the
// whole-block view (the intro/trends map and the final cross-group
// synthesis); everything group-specific below links straight to its
// canonical chapter rather than re-hosting a second copy on a p-block URL.
const GROUPS = [
  { href: "/notes/boron-family", label: "Group 13", title: "Boron Family", meta: "13 lessons + question bank" },
  { href: "/notes/carbon-family", label: "Group 14", title: "Carbon Family", meta: "29 lessons" },
  { href: "/notes/nitrogen-family", label: "Group 15", title: "Nitrogen Family", meta: "28 lessons" },
  { href: "/notes/oxygen-family", label: "Group 16", title: "Oxygen Family", meta: "25 lessons" },
  { href: "/notes/halogen-family", label: "Group 17", title: "Halogen Family", meta: "21 lessons" },
  { href: "/notes/noble-gases", label: "Group 18", title: "Noble Gases", meta: "14 lessons" },
] as const;

export default function PBlockHub() {
  const intro = P_BLOCK_PARTS.find((part) => part.number === 1)!;
  const synthesis = P_BLOCK_PARTS.find((part) => part.number === 20)!;
  return (
    <AppShell
      discipline="JEE Inorganic Chemistry"
      chapterTitle="P-block Elements"
      chapterSlug="p-block"
      description="Block-wide trends and a final cross-group synthesis, with the detailed chemistry of every group in its own dedicated chapter."
      free={false}
      tabs={pBlockTabs()}
    >
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="flex flex-wrap gap-3 text-xs font-bold text-[var(--text-muted)]">
          <span className="rounded-xl bg-[var(--surface)] px-3 py-2">Groups 13–18</span>
          <span className="rounded-xl bg-[var(--surface)] px-3 py-2">One canonical chapter per group</span>
          <span className="rounded-xl bg-[var(--surface)] px-3 py-2">Structure + reaction decision trees</span>
        </div>
        <ChapterLessonGrid
          lessons={[
            { href: pBlockHref(intro.number), number: `Lesson ${intro.number}`, title: intro.title, meta: sectionRangeLabel(intro) },
            ...GROUPS.map((group) => ({
              href: group.href,
              number: group.label,
              title: `${group.title} — full deep dive`,
              meta: `${group.meta} →`,
            })),
            { href: pBlockHref(synthesis.number), number: `Lesson ${synthesis.number}`, title: synthesis.title, meta: sectionRangeLabel(synthesis) },
          ]}
        />
      </div>
    </AppShell>
  );
}
