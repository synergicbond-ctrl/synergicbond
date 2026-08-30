import { AppShell } from "@/components/AppShell";
import { ChapterLessonGrid } from "@/components/notes/canonical";
import { BORON_FAMILY_PARTS } from "./parts";
import { boronFamilyHref, boronFamilyTabs, sectionLabel } from "./_chapter";

export const metadata = {
  title: "The Boron Family — JEE Advanced Notes | SYNERGIC BOND",
  description:
    "Group 13 (B, Al, Ga, In, Tl) for JEE Advanced: periodic trends, inert-pair effect, electron-deficient bonding, boranes, borazine, borax, boric acid, aluminium chemistry and a full question bank.",
};
export const dynamic = "force-dynamic";

export default function BoronFamilyHub() {
  return (
    <AppShell
      discipline="JEE Inorganic Chemistry"
      chapterTitle="The Boron Family"
      chapterSlug="boron-family"
      description="A complete concept-first route through Group 13: trends and anomalies, the inert-pair effect, electron-deficient and multicentre bonding, boron–oxygen chemistry, halides, boranes and borazine, aluminium compounds, and an integrated JEE question bank."
      free={false}
      tabs={boronFamilyTabs()}
    >
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="flex flex-wrap gap-3 text-xs font-bold text-[var(--text-muted)]">
          <span className="rounded-xl bg-[var(--surface)] px-3 py-2">14 lessons · Group 13</span>
          <span className="rounded-xl bg-[var(--surface)] px-3 py-2">B · Al · Ga · In · Tl</span>
          <span className="rounded-xl bg-[var(--surface)] px-3 py-2">Q1–Q90 + reactions + answer key</span>
        </div>
        <ChapterLessonGrid
          lessons={BORON_FAMILY_PARTS.map((part) => ({
            href: boronFamilyHref(part.number),
            number: `Lesson ${part.number}`,
            title: part.title,
            meta: sectionLabel(part),
          }))}
        />
      </div>
    </AppShell>
  );
}
