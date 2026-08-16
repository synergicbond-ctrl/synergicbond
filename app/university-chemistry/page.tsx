import Link from "next/link";
import { Eyebrow } from "@/components/design";
import { UNIVERSITY_CURRICULUM, availablePapers, totalPapers } from "@/lib/university/curriculum";

export const metadata = {
  title: "University Chemistry | Synergic Bond",
  description:
    "B.Sc. Chemistry, Years 1-3 — undergraduate-depth Inorganic, Organic and Physical Chemistry, structured Year → Semester → Paper → Unit → Topic on the UGC CBCS model curriculum.",
};

export default function UniversityChemistryPage() {
  return (
    <main className="px-5 py-10 sm:px-8 lg:px-12 xl:px-16">
      <article className="mx-auto max-w-[1400px]">
        <header className="pb-14 pt-5 sm:pt-10" style={{ borderBottom: "1px solid var(--border)" }}>
          <Eyebrow>Undergraduate Chemistry</Eyebrow>
          <h1 className="font-display mt-5 max-w-[20ch] text-[44px] font-semibold leading-[1.04] tracking-[-0.03em] text-[var(--foreground)] sm:text-[64px] lg:text-[72px]">
            University Chemistry
          </h1>
          <p className="mt-6 max-w-[var(--measure)] text-[18px] leading-[1.7] text-[var(--text-body)] sm:text-[20px]">
            B.Sc. Chemistry, Years 1 through 3 — kept entirely separate from the school, NEET
            and JEE material elsewhere on Synergic Bond. Structured Year → Semester → Paper →
            Unit → Topic on the UGC CBCS model curriculum (14 Core papers across Inorganic,
            Organic and Physical Chemistry, plus Discipline Specific Electives from Year 3),
            at genuine undergraduate depth — full derivations and primary reasoning, not a
            repackaged JEE Advanced chapter.
          </p>
          <p className="mt-6 max-w-[var(--measure)] text-[14px] leading-[1.6] text-[var(--text-muted)]">
            {availablePapers()} of {totalPapers()} papers have authored content so far; the
            rest are scaffolded and marked honestly as under construction — nothing here is a
            placeholder pretending to be finished.
          </p>
        </header>

        <div className="grid gap-6 py-14 sm:grid-cols-3">
          {UNIVERSITY_CURRICULUM.map((year) => {
            const paperCount = year.semesters.flatMap((s) => s.papers).length;
            const available = year.semesters.flatMap((s) => s.papers).filter((p) => p.status === "available").length;
            return (
              <Link
                key={year.slug}
                href={`/university-chemistry/${year.slug}`}
                className="block rounded-[var(--radius)] p-6 transition-colors"
                style={{ border: "1px solid var(--border)", background: "var(--surface)" }}
              >
                <Eyebrow>Year {year.number}</Eyebrow>
                <h2 className="font-display mt-3 text-[24px] font-semibold text-[var(--foreground)]">{year.title}</h2>
                <p className="mt-3 text-[14px] text-[var(--text-muted)]">
                  Semesters {year.semesters.map((s) => s.number).join(" & ")} · {paperCount} papers
                  {available > 0 ? ` · ${available} available` : ""}
                </p>
              </Link>
            );
          })}
        </div>
      </article>
    </main>
  );
}
