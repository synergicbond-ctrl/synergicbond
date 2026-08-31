import { AppShell } from "@/components/AppShell";
import { ChapterLessonGrid } from "@/components/notes/canonical";
import { CARBON_FAMILY_PARTS } from "./parts";
import { carbonFamilyHref, carbonFamilyTabs, sectionLabel } from "./_chapter";
import { CarbonFamilyVisual } from "./visuals";

export const metadata = {
  title: "The Carbon Family — JEE Advanced Notes | SYNERGIC BOND",
  description:
    "Group 14 (C, Si, Ge, Sn, Pb) for JEE Advanced: periodic trends and the inert-pair effect, carbon anomaly and catenation, allotropes and fullerenes, carbides, CO/CO₂ and carbonyls, silicon extraction, silica and the seven silicate classes, zeolites, glass, silicones, silanes, halides and complexes, and tin/lead redox chemistry.",
};
export const dynamic = "force-dynamic";

export default function CarbonFamilyHub() {
  return (
    <AppShell
      discipline="JEE Advanced Inorganic Chemistry"
      chapterTitle="The Carbon Family"
      chapterSlug="carbon-family"
      description="A concept-first route through Group 14: trends and the carbon anomaly, allotropes and fullerenes, carbides, carbon oxide/sulphur chemistry and carbonyls, silicon extraction, silica and the full seven-class silicate structural system, zeolites, glass and silicones, hydrides, halides and complexes, and tin/lead redox chemistry."
      free={false}
      tabs={carbonFamilyTabs()}
    >
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="flex flex-wrap gap-3 text-xs font-bold text-[var(--text-muted)]">
          <span className="rounded-xl bg-[var(--surface)] px-3 py-2">29 lessons · Group 14</span>
          <span className="rounded-xl bg-[var(--surface)] px-3 py-2">C · Si · Ge · Sn · Pb</span>
          <span className="rounded-xl bg-[var(--surface)] px-3 py-2">NCERT-first · MOT lenses · reaction &amp; structure atlas · 60+ questions</span>
        </div>
        <CarbonFamilyVisual part={7} heroOnly />
        <ChapterLessonGrid
          lessons={CARBON_FAMILY_PARTS.map((part) => ({
            href: carbonFamilyHref(part.number),
            number: `Lesson ${part.number}`,
            title: part.title,
            meta: sectionLabel(part),
          }))}
        />
      </div>
    </AppShell>
  );
}
