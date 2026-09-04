import { AppShell } from "@/components/AppShell";
import { ChapterLessonGrid } from "@/components/notes/canonical";
import { NITROGEN_FAMILY_PARTS } from "./parts";
import { nitrogenFamilyHref, nitrogenFamilyTabs, sectionLabel } from "./_chapter";

export const metadata = {
  title: "The Nitrogen Family — JEE Advanced Notes | SYNERGIC BOND",
  description:
    "Group 15 (N, P, As, Sb, Bi) for JEE Advanced: periodic trends and the inert-pair effect, the nitrogen anomaly and pπ–pπ bonding, allotropes of phosphorus, nitrides and phosphides, dinitrogen and the Haber process, ammonia, hydrazine / hydroxylamine / azides, the oxides and oxoacids of nitrogen, nitric acid and the Ostwald process, phosphine, phosphorus halides, the oxides and oxoacids of phosphorus, arsenic / antimony / bismuth, reaction networks, an NCERT ledger and an extended question-bank reaction set — with structure and apparatus figures throughout.",
};
export const dynamic = "force-dynamic";

export default function NitrogenFamilyHub() {
  return (
    <AppShell
      discipline="JEE Advanced Inorganic Chemistry"
      chapterTitle="The Nitrogen Family"
      chapterSlug="nitrogen-family"
      description="A concept-first route through Group 15: periodic trends and the first-member anomaly, the elements and their allotropes, the hydrides, oxides and oxoacids, the industrial processes, and the extended reaction sets — with schematic structure and apparatus figures on every lesson."
      free={false}
      tabs={nitrogenFamilyTabs()}
    >
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="flex flex-wrap gap-3 text-xs font-bold text-[var(--text-muted)]">
          <span className="rounded-xl bg-[var(--surface)] px-3 py-2">28 lessons · Group 15</span>
          <span className="rounded-xl bg-[var(--surface)] px-3 py-2">N · P · As · Sb · Bi</span>
          <span className="rounded-xl bg-[var(--surface)] px-3 py-2">order blocks · structure &amp; apparatus figures · NCERT ledger · question-bank reaction set</span>
        </div>
        <ChapterLessonGrid
          lessons={NITROGEN_FAMILY_PARTS.map((part) => ({
            href: nitrogenFamilyHref(part.number),
            number: `Lesson ${part.number}`,
            title: part.title,
            meta: sectionLabel(part),
          }))}
        />
      </div>
    </AppShell>
  );
}
