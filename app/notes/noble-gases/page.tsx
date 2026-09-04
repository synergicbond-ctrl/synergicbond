import { AppShell } from "@/components/AppShell";
import { ChapterLessonGrid } from "@/components/notes/canonical";
import { NOBLE_GASES_PARTS } from "./parts";
import { nobleGasesHref, nobleGasesTabs, sectionLabel } from "./_chapter";

export const metadata = {
  title: "The Noble Gases — JEE Advanced Notes | SYNERGIC BOND",
  description:
    "Group 18 (He, Ne, Ar, Kr, Xe, Rn) for JEE Advanced: why the noble gases are unreactive, the isolation of the noble gases, clathrate compounds, Bartlett's discovery, the xenon fluorides and oxofluorides with full VSEPR, xenon–oxygen compounds and perxenates, compounds of krypton and radon, the uses of every noble gas, an NCERT ledger and an extended question-bank reaction set — with structure and apparatus figures throughout.",
};
export const dynamic = "force-dynamic";

export default function NobleGasesHub() {
  return (
    <AppShell
      discipline="JEE Advanced Inorganic Chemistry"
      chapterTitle="The Noble Gases"
      chapterSlug="noble-gases"
      description="A concept-first route through Group 18: periodic trends and the first-member anomaly, the elements and their allotropes, the hydrides, oxides and oxoacids, the industrial processes, and the extended reaction sets — with schematic structure and apparatus figures on every lesson."
      free={false}
      tabs={nobleGasesTabs()}
    >
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="flex flex-wrap gap-3 text-xs font-bold text-[var(--text-muted)]">
          <span className="rounded-xl bg-[var(--surface)] px-3 py-2">14 lessons · Group 18</span>
          <span className="rounded-xl bg-[var(--surface)] px-3 py-2">He · Ne · Ar · Kr · Xe · Rn</span>
          <span className="rounded-xl bg-[var(--surface)] px-3 py-2">order blocks · structure &amp; apparatus figures · NCERT ledger · question-bank reaction set</span>
        </div>
        <ChapterLessonGrid
          lessons={NOBLE_GASES_PARTS.map((part) => ({
            href: nobleGasesHref(part.number),
            number: `Lesson ${part.number}`,
            title: part.title,
            meta: sectionLabel(part),
          }))}
        />
      </div>
    </AppShell>
  );
}
