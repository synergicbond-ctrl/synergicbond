import { AppShell } from "@/components/AppShell";
import { ChapterLessonGrid } from "@/components/notes/canonical";
import { HYDROLYSIS_PARTS } from "./parts";
import { hydrolysisHref, hydrolysisTabs, sectionLabel } from "./_chapter";

export const metadata = {
  title: "Hydrolysis — Concept, Mechanism and JEE Traps | SYNERGIC BOND",
  description:
    "A complete mechanistic route through hydrolysis for JEE Advanced inorganic chemistry: the master mental model, MO/Lewis-structure view, every mechanism family (A/D/I, addition–elimination, push–pull, redox), full curly-arrow mechanisms and structures for Groups 13–18, aqua-ion and salt hydrolysis, master tables, forty high-yield traps, worked examples and a full practice set.",
};
export const dynamic = "force-dynamic";

export default function HydrolysisHub() {
  return (
    <AppShell
      discipline="JEE Inorganic Chemistry"
      chapterTitle="Hydrolysis"
      chapterSlug="hydrolysis"
      description="Concept, mechanism and JEE traps: a single mental model for predicting hydrolysis, full curly-arrow mechanisms and structures for every reaction family across Groups 13–18, aqua-ion and salt hydrolysis, master tables, forty high-yield traps, worked examples and a complete practice set."
      free={false}
      tabs={hydrolysisTabs()}
    >
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="flex flex-wrap gap-3 text-xs font-bold text-[var(--text-muted)]">
          <span className="rounded-xl bg-[var(--surface)] px-3 py-2">8 lessons · Groups 13–18</span>
          <span className="rounded-xl bg-[var(--surface)] px-3 py-2">Full curly-arrow mechanisms</span>
          <span className="rounded-xl bg-[var(--surface)] px-3 py-2">40 traps + worked examples + practice</span>
        </div>
        <ChapterLessonGrid
          lessons={HYDROLYSIS_PARTS.map((part) => ({
            href: hydrolysisHref(part.number),
            number: `Lesson ${part.number}`,
            title: part.title,
            meta: sectionLabel(part),
          }))}
        />
      </div>
    </AppShell>
  );
}
