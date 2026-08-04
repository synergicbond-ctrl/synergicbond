import { ChapterHero, ChapterLessonGroups, ChapterShell } from "@/components/notes/canonical";
import { ChemistryTable } from "@/components/notes/ChemistryTable";
import { getNotesChapter } from "@/lib/notesEngine";
import { REDOX_GROUPS, REDOX_LESSONS, redoxLessonGroups, redoxTabs } from "./_chapter";

export const metadata = {
  title: "Redox Reactions — SYNERGIC BOND",
  description:
    "Master electron transfer dynamics, equivalent weight determination, and volumetric titration analysis with verified interactive notes and solved examples.",
};

export default function RedoxReactionsHubPage() {
  const chapter = getNotesChapter("redox-reactions");
  const lessonGroups = redoxLessonGroups();
  const structureRows = REDOX_GROUPS.map((group) => [
    group.label,
    `${group.to - group.from + 1} lessons`,
    `${REDOX_LESSONS.filter((lesson) => lesson.number >= group.from && lesson.number <= group.to)
      .reduce((total, lesson) => total + lesson.sections.length, 0)} sections`,
  ]);

  return (
    <ChapterShell kicker="JEE Physical Chemistry" subtitle="Redox Reactions" tabs={redoxTabs()}>
      <div className="mx-auto max-w-5xl space-y-10">
        <ChapterHero
          title="Redox Reactions"
          meta="Chapter 2 · Physical Chemistry"
          description="Complete foundation covering oxidation-reduction dynamics, equivalent concept (`n`-factor calculations across all functional groups), and volumetric titration analysis."
          breadcrumbs={[
            { href: "/notes", label: "Notes Hub" },
            { label: "Physical Chemistry" },
            { label: "Redox Reactions" },
          ]}
          badges={[
            { label: "JEE & NEET Core", tone: "cyan" },
            { label: `${REDOX_LESSONS.length} verified lessons`, tone: "gold" },
          ]}
        />

        <section aria-labelledby="redox-lessons-heading">
          <div className="flex flex-col gap-3 border-b border-[var(--sb-border)] pb-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="sb-eyebrow">Reading Sequence</p>
              <h2 id="redox-lessons-heading" className="mt-2 font-[family-name:var(--sb-font-display)] text-2xl font-semibold text-[var(--sb-text)] sm:text-3xl">
                Chapter Lessons
              </h2>
            </div>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-[var(--sb-text-muted)]">
              10 lessons · 2 units
            </span>
          </div>
          <ChapterLessonGroups groups={lessonGroups} />
        </section>

        <section aria-labelledby="redox-structure-heading" className="sb-surface p-5 sm:p-7">
          <p className="sb-eyebrow">At a Glance</p>
          <h2 id="redox-structure-heading" className="mt-2 font-[family-name:var(--sb-font-display)] text-2xl font-semibold text-[var(--sb-text)]">
            Chapter structure
          </h2>
          <p className="sb-body mt-3 max-w-2xl text-sm">The existing lesson and source-section coverage, grouped by the chapter’s two verified units.</p>
          <ChemistryTable headers={["Unit", "Lessons", "Source sections"]} rows={structureRows} />
        </section>

        {chapter && (
          <section className="sb-surface overflow-hidden" aria-labelledby="redox-summary-heading">
            <div className="border-b border-[var(--sb-border)] p-5 sm:p-7">
              <p className="sb-eyebrow">Syllabus Reference</p>
              <h2 id="redox-summary-heading" className="mt-2 font-[family-name:var(--sb-font-display)] text-2xl font-semibold text-[var(--sb-text)]">
                Chapter Knowledge Summary
              </h2>
            </div>
            <div className="grid gap-0 md:grid-cols-2">
              <div className="border-b border-[var(--sb-border)] p-5 sm:p-7 md:border-b-0 md:border-r">
                <h3 className="font-mono text-xs font-bold uppercase tracking-[0.1em] text-[var(--sb-cyan)]">Core Concepts Covered</h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--sb-text-body)]">
                  {chapter.syllabus.map((topic: string) => <li key={topic}>{topic}</li>)}
                </ul>
              </div>
              <div className="p-5 sm:p-7">
                <h3 className="font-mono text-xs font-bold uppercase tracking-[0.1em] text-[var(--sb-gold)]">Common Student Traps to Avoid</h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--sb-text-body)]">
                  {chapter.commonMistakes.map((mistake: string) => <li key={mistake}>{mistake}</li>)}
                </ul>
              </div>
            </div>
          </section>
        )}
      </div>
    </ChapterShell>
  );
}
