import { AppShell } from "@/components/AppShell";
import { ChapterLessonGrid } from "@/components/notes/canonical";
import { HALOGEN_FAMILY_PARTS } from "./parts";
import { halogenFamilyHref, halogenFamilyTabs, sectionLabel } from "./_chapter";

export const metadata = {
  title: "The Halogen Family — JEE Advanced Notes | SYNERGIC BOND",
  description:
    "Group 17 (F, Cl, Br, I, At) for JEE Advanced: periodic trends and the fluorine anomaly, oxidising power and the thermochemical cycle, preparation of the halogens, chlorine and bleaching powder, the oxoacids of the halogens, the hydrogen halides, interhalogen compounds, pseudohalogens, reaction networks, an NCERT ledger and an extended question-bank reaction set — with structure and apparatus figures throughout.",
};
export const dynamic = "force-dynamic";

export default function HalogenFamilyHub() {
  return (
    <AppShell
      discipline="JEE Advanced Inorganic Chemistry"
      chapterTitle="The Halogen Family"
      chapterSlug="halogen-family"
      description="A concept-first route through Group 17: periodic trends and the first-member anomaly, the elements and their allotropes, the hydrides, oxides and oxoacids, the industrial processes, and the extended reaction sets — with schematic structure and apparatus figures on every lesson."
      free={false}
      tabs={halogenFamilyTabs()}
    >
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="flex flex-wrap gap-3 text-xs font-bold text-[var(--text-muted)]">
          <span className="rounded-xl bg-[var(--surface)] px-3 py-2">21 lessons · Group 17</span>
          <span className="rounded-xl bg-[var(--surface)] px-3 py-2">F · Cl · Br · I · At</span>
          <span className="rounded-xl bg-[var(--surface)] px-3 py-2">order blocks · structure &amp; apparatus figures · NCERT ledger · question-bank reaction set</span>
        </div>
        <ChapterLessonGrid
          lessons={HALOGEN_FAMILY_PARTS.map((part) => ({
            href: halogenFamilyHref(part.number),
            number: `Lesson ${part.number}`,
            title: part.title,
            meta: sectionLabel(part),
          }))}
        />
      </div>
    </AppShell>
  );
}
