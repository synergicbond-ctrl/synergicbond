import { AppShell } from "@/components/AppShell";
import { ChapterLessonGrid } from "@/components/notes/canonical";
import { POC_PARTS } from "./parts";
import { pocHref, pocTabs, sectionLabel } from "./_chapter";

export const metadata = {
  title: "Purification and Characterisation of Organic Compounds | SYNERGIC BOND",
  description:
    "The practical organic chemistry block for JEE and NEET: carbon's tetravalence, hybridisation, sigma and pi bonds and the shapes of organic molecules; allotropes of carbon; the five classical purification methods (sublimation, crystallisation, distillation, differential extraction, chromatography); qualitative analysis (Lassaigne's test for N, S, halogens, P); quantitative analysis (Liebig, Dumas, Kjeldahl, Carius); and the calculation of empirical and molecular formulae — with worked examples, JEE traps and a practice set.",
};
export const dynamic = "force-dynamic";

export default function PocHub() {
  return (
    <AppShell
      discipline="JEE / NEET Organic Chemistry"
      chapterTitle="Purification and Characterisation of Organic Compounds"
      chapterSlug="purification-characterisation"
      description="Bonding, shape and allotropes of carbon; the five classical methods of purification; qualitative analysis by Lassaigne's test; quantitative estimation of C, H, N, halogens, S, P and O by the Liebig, Dumas, Kjeldahl and Carius methods; and empirical and molecular formula calculation — with worked examples, JEE traps and a full practice set."
      free={false}
      tabs={pocTabs()}
    >
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="flex flex-wrap gap-3 text-xs font-bold text-[var(--text-muted)]">
          <span className="rounded-xl bg-[var(--surface)] px-3 py-2">15 lessons · practical organic chemistry</span>
          <span className="rounded-xl bg-[var(--surface)] px-3 py-2">Sublimation · crystallisation · distillation · extraction · chromatography</span>
          <span className="rounded-xl bg-[var(--surface)] px-3 py-2">Lassaigne · Liebig · Dumas · Kjeldahl · Carius</span>
          <span className="rounded-xl bg-[var(--surface)] px-3 py-2">Worked numericals · JEE traps · practice set</span>
        </div>
        <ChapterLessonGrid
          lessons={POC_PARTS.map((part) => ({
            href: pocHref(part.number),
            number: `Lesson ${part.number}`,
            title: part.title,
            meta: sectionLabel(part),
          }))}
        />
      </div>
    </AppShell>
  );
}
