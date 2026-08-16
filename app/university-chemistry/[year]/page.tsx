import Link from "next/link";
import { notFound } from "next/navigation";
import { Eyebrow } from "@/components/design";
import { UNIVERSITY_CURRICULUM, findYear } from "@/lib/university/curriculum";

export function generateStaticParams() {
  return UNIVERSITY_CURRICULUM.map((y) => ({ year: y.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ year: string }> }) {
  const { year: yearSlug } = await params;
  const year = findYear(yearSlug);
  return { title: year ? `${year.title} | University Chemistry` : "University Chemistry" };
}

const branchColor: Record<string, string> = {
  Inorganic: "var(--chem-bond)",
  Organic: "var(--chem-trap)",
  Physical: "var(--chem-orbital)",
};

export default async function UniversityYearPage({ params }: { params: Promise<{ year: string }> }) {
  const { year: yearSlug } = await params;
  const year = findYear(yearSlug);
  if (!year) notFound();

  return (
    <main className="px-5 py-10 sm:px-8 lg:px-12 xl:px-16">
      <article className="mx-auto max-w-[1400px]">
        <header className="pb-14 pt-5 sm:pt-10" style={{ borderBottom: "1px solid var(--border)" }}>
          <Link href="/university-chemistry" className="block text-sm font-medium" style={{ color: "var(--accent)" }}>
            ← University Chemistry
          </Link>
          <div className="mt-6">
            <Eyebrow>University Chemistry · Year {year.number}</Eyebrow>
          </div>
          <h1 className="font-display mt-5 max-w-[20ch] text-[40px] font-semibold leading-[1.06] tracking-[-0.03em] text-[var(--foreground)] sm:text-[56px]">
            {year.title}
          </h1>
        </header>

        <div className="grid gap-14 py-14">
          {year.semesters.map((semester) => (
            <section key={semester.slug}>
              <div className="flex items-center gap-3">
                <span aria-hidden className="h-[5px] w-[5px] shrink-0 rotate-45" style={{ background: "var(--accent)" }} />
                <Eyebrow>Semester {semester.number}</Eyebrow>
                <span aria-hidden className="h-px flex-1" style={{ background: "var(--border)" }} />
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {semester.papers.map((paper) => (
                  <Link
                    key={paper.slug}
                    href={`/university-chemistry/${year.slug}/${semester.slug}/${paper.slug}`}
                    className="block rounded-[var(--radius)] p-5 transition-colors"
                    style={{ border: "1px solid var(--border)", background: "var(--surface)" }}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-data text-[11px] uppercase tracking-[0.14em]" style={{ color: branchColor[paper.branch] }}>
                        {paper.code} · {paper.branch}
                      </span>
                      {paper.status === "coming-soon" ? (
                        <span className="font-data text-[10px] uppercase tracking-[0.12em] text-[var(--text-muted)]">Coming soon</span>
                      ) : (
                        <span className="font-data text-[10px] uppercase tracking-[0.12em]" style={{ color: "var(--chem-rule)" }}>Available</span>
                      )}
                    </div>
                    <h3 className="font-display mt-3 text-[18px] font-semibold text-[var(--foreground)]">{paper.title}</h3>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
