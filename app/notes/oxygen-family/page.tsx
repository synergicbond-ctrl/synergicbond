import { AppShell } from "@/components/AppShell";
import { ChapterLessonGrid } from "@/components/notes/canonical";
import { OXYGEN_FAMILY_PARTS } from "./parts";
import { oxygenFamilyHref, oxygenFamilyTabs, sectionLabel } from "./_chapter";

export const metadata = {
  title: "The Oxygen Family — JEE Advanced Notes | SYNERGIC BOND",
  description:
    "Group 16 (O, S, Se, Te, Po) for JEE Advanced: periodic trends and the O-vs-S anomalies, the MO picture of O₂, ozone, the hydrides H₂E, the classification of oxides, hydrogen peroxide, allotropes of sulphur, sulphur dioxide, the oxoacids of sulphur, sulphuric acid and the Contact process, the halides SF₆/SF₄, selenium/tellurium/polonium, reaction networks, an NCERT ledger and an extended question-bank reaction set — with structure and apparatus figures throughout.",
};
export const dynamic = "force-dynamic";

export default function OxygenFamilyHub() {
  return (
    <AppShell
      discipline="JEE Advanced Inorganic Chemistry"
      chapterTitle="The Oxygen Family"
      chapterSlug="oxygen-family"
      description="A concept-first route through Group 16: periodic trends and the first-member anomaly, the elements and their allotropes, the hydrides, oxides and oxoacids, the industrial processes, and the extended reaction sets — with schematic structure and apparatus figures on every lesson."
      free={false}
      tabs={oxygenFamilyTabs()}
    >
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="flex flex-wrap gap-3 text-xs font-bold text-[var(--text-muted)]">
          <span className="rounded-xl bg-[var(--surface)] px-3 py-2">25 lessons · Group 16</span>
          <span className="rounded-xl bg-[var(--surface)] px-3 py-2">O · S · Se · Te · Po</span>
          <span className="rounded-xl bg-[var(--surface)] px-3 py-2">order blocks · structure &amp; apparatus figures · NCERT ledger · question-bank reaction set</span>
        </div>
        <ChapterLessonGrid
          lessons={OXYGEN_FAMILY_PARTS.map((part) => ({
            href: oxygenFamilyHref(part.number),
            number: `Lesson ${part.number}`,
            title: part.title,
            meta: sectionLabel(part),
          }))}
        />
      </div>
    </AppShell>
  );
}
