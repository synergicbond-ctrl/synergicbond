import Link from "next/link";
import { notFound } from "next/navigation";
import { Eyebrow } from "@/components/design";
import { UNIVERSITY_CURRICULUM, findPaper, findSemester, findYear } from "@/lib/university/curriculum";

// This is the fallback for every paper that does not yet have real content —
// Next.js resolves a more specific static route (like
// bsc-1/semester-1/inorganic-chemistry-1) ahead of this dynamic catch-all
// whenever one exists, so a paper only ever lands here if it is genuinely
// still under construction. This page must never fabricate content — it
// states plainly that the paper isn't written yet.

export function generateStaticParams() {
  return UNIVERSITY_CURRICULUM.flatMap((year) =>
    year.semesters.flatMap((semester) =>
      semester.papers
        .filter((paper) => paper.status === "coming-soon")
        .map((paper) => ({ year: year.slug, semester: semester.slug, paper: paper.slug }))
    )
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ year: string; semester: string; paper: string }>;
}) {
  const { year, semester, paper } = await params;
  const found = findPaper(year, semester, paper);
  return { title: found ? `${found.title} | University Chemistry` : "University Chemistry" };
}

export default async function UniversityPaperPage({
  params,
}: {
  params: Promise<{ year: string; semester: string; paper: string }>;
}) {
  const { year: yearSlug, semester: semesterSlug, paper: paperSlug } = await params;
  const year = findYear(yearSlug);
  const semester = findSemester(yearSlug, semesterSlug);
  const paper = findPaper(yearSlug, semesterSlug, paperSlug);
  if (!year || !semester || !paper) notFound();

  return (
    <main className="px-5 py-10 sm:px-8 lg:px-12 xl:px-16">
      <article className="mx-auto max-w-[900px]">
        <Link href={`/university-chemistry/${year.slug}`} className="block text-sm font-medium" style={{ color: "var(--accent)" }}>
          ← {year.title}
        </Link>
        <div className="mt-6">
          <Eyebrow>
            {year.title} · Semester {semester.number} · {paper.code}
          </Eyebrow>
        </div>
        <h1 className="font-display mt-5 text-[36px] font-semibold leading-[1.08] tracking-[-0.02em] text-[var(--foreground)] sm:text-[48px]">
          {paper.title}
        </h1>
        <div
          className="mt-8 rounded-[var(--radius)] p-6"
          style={{ border: "1px solid var(--border)", background: "var(--surface)" }}
        >
          <span className="font-data text-[11px] uppercase tracking-[0.14em]" style={{ color: "var(--accent)" }}>
            Under construction
          </span>
          <p className="mt-3 text-[16px] leading-[1.7] text-[var(--text-body)]">
            This paper is scaffolded in the University Chemistry curriculum but not yet
            authored. Rather than show placeholder or generated filler, this page says so
            plainly — check back as the {paper.branch} Chemistry track is built out semester
            by semester.
          </p>
        </div>
      </article>
    </main>
  );
}
