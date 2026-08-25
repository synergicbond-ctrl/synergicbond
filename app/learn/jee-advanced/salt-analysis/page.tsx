import { AppShell } from "@/components/AppShell";
import { ChapterLessonGrid } from "@/components/notes/canonical";
import { saltAnalysisParts } from "./index";

export const metadata = {
  title: "Salt Analysis - JEE Advanced | Synergic Bond",
  description:
    "Comprehensive salt analysis notes with reactions, tests, separation schemes, solubility charts, JEE traps and visual explanations.",
};

export default function SaltAnalysisPage() {
  return (
    <AppShell
      discipline="JEE Advanced · Inorganic Chemistry"
      chapterTitle="Salt Analysis / Qualitative Analysis"
      chapterSlug="salt-analysis"
      description="A complete JEE Advanced chapter on systematic separation, selective reactions, confirmatory tests, ionic equilibria and analytical reasoning."
      free={false}
    >
      <div className="mx-auto max-w-3xl">
        <div className="mb-9 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-5 py-4 text-sm leading-7 text-[var(--text-muted)] sm:text-base">
          <strong className="text-[var(--foreground)]">Scope:</strong> preliminary
          examination, dry and wet tests, anion analysis, cation group
          separation, interfering radicals, solubility logic, complexes,
          exceptions, worked examples and final revision.
        </div>

        <ChapterLessonGrid
          lessons={saltAnalysisParts.map((part) => ({
            href: part.href,
            number: `Lesson ${String(part.id).padStart(2, "0")}`,
            title: part.title,
          }))}
        />
      </div>
    </AppShell>
  );
}
