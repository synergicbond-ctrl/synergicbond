import Link from "next/link";
import { notFound } from "next/navigation";
import ProgramHubSections from "@/components/programs/ProgramHubSections";
import { getProgram, PROGRAMS } from "@/lib/programs";
import { getProgramSections } from "@/lib/programHubData";
import { HUB_SYLLABUS_MAP } from "@/lib/programSyllabus";

// ─────────────────────────────────────────────────────────────────────────────
// /programs/[slug] — Program hub (Dashboard Simplification pass).
//
// One dynamic hub for every program, driven by the programs SSOT + the
// programHubData SSOT (6 sections: Learn · Practice · Tests · Revision ·
// Progress · AI Tools). Available cards link to real routes; unbuilt features
// never render in primary nav. The complete official syllabus lives only at
// Learn → Syllabus — this page shows at most a small link to it.
// ─────────────────────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return PROGRAMS.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) return {};
  return {
    title: `${program.name} Chemistry Program — SYNERGIC BOND`,
    description: program.tagline,
  };
}

export default async function ProgramHubPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) notFound();

  const { name, kicker, tagline, chips, accent } = program;
  const sections = getProgramSections(program);
  const hasSyllabus = (HUB_SYLLABUS_MAP[slug] ?? []).length > 0;

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="border-b border-[var(--border)] bg-[var(--surface)] px-6 py-14 text-center">
        <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">{kicker}</div>
        <h1 className="mb-4 text-4xl font-black tracking-tight sm:text-5xl">{name} Chemistry</h1>
        <p className="mx-auto max-w-xl text-lg text-[var(--text-muted)]">{tagline}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {chips.map((chip) => (
            <span key={chip} className="rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-3 py-1 text-sm text-[var(--text-muted)]">
              {chip}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href={`/programs/${slug}/learn`} className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] px-5 py-2.5 text-sm font-bold text-[var(--foreground)] transition hover:bg-white/[0.06]">
            Start Learning
          </Link>
          <Link href={`/programs/${slug}/tests`} className="rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-black text-[var(--background)] transition hover:-translate-y-0.5">
            Take a Test →
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Readiness placeholder — real analytics wire in later; no fabricated numbers. */}
        <div className="mb-8 rounded-lg border border-white/[0.08] bg-white/[0.02] p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-white/40">Exam Readiness</p>
              <p className="mt-1 text-sm text-[var(--text-muted)]">
                Your {name} readiness score appears here once you attempt tests — no simulated numbers.
              </p>
            </div>
            <Link href={`/programs/${slug}/practice`} className="shrink-0 text-sm font-semibold text-[var(--accent)] hover:underline">
              Start practising →
            </Link>
          </div>
          <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/[0.06]">
            <div className="h-full w-0 rounded-full bg-white/20" />
          </div>
        </div>

        {/* JEE_ADVANCED_PREMIUM_NOTES_VISIBLE */}
        {slug === "jee-advanced" && (
          <section className="mb-10">
            <div className="mb-5">
              <div className="text-xs font-black uppercase tracking-[0.25em] text-[var(--text-muted)]">
                JEE Advanced Premium Notes
              </div>
              <h2 className="mt-1 text-2xl font-black text-white">
                Advanced Inorganic Chemistry Notes
              </h2>
              <p className="mt-2 text-sm text-[var(--text-muted)]">
                Complete authored notes arranged as separate JEE Advanced chapters.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Link
                href="/programs/jee-advanced/chapter/p-block-elements#learn"
                className="rounded-lg border border-[var(--accent)]/30 bg-[var(--accent)]/[0.08] p-5 transition hover:border-[var(--accent)]/30 hover:bg-[var(--accent)]/[0.13]"
              >
                <div className="text-[10px] font-black uppercase tracking-[0.22em] text-[var(--accent)]">
                  Full Notes · Separate Chapter
                </div>
                <h3 className="mt-2 text-xl font-black text-white">P-Block Elements</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                  Groups 13 to 18 — trends, structures, preparations,
                  reactions, exceptions and comparison orders.
                </p>
                <div className="mt-4 font-bold text-[var(--accent)]">Open P-Block Notes →</div>
              </Link>

              <Link
                href="/programs/jee-advanced/chapter/qualitative-analysis#learn"
                className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 transition hover:border-[var(--border-strong)]"
              >
                <div className="text-[10px] font-black uppercase tracking-[0.22em] text-[var(--text-muted)]">
                  Full Notes · Separate Chapter
                </div>
                <h3 className="mt-2 text-xl font-black text-white">
                  Salt Analysis / Qualitative Analysis
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                  Dry tests, anion analysis, cation groups, confirmatory tests,
                  interfering radicals and mixture analysis.
                </p>
                <div className="mt-4 font-bold text-[var(--text-muted)]">
                  Open Qualitative Analysis Notes →
                </div>
              </Link>
            </div>
          </section>
        )}

        <div className="mb-12">
          <ProgramHubSections sections={sections} accentText={accent.text} accentCard={accent.card} />
          {hasSyllabus && (
            <p className="mt-6 text-sm text-[var(--text-muted)]">
              <Link href={`/programs/${slug}/syllabus`} className="font-semibold underline-offset-4 hover:underline text-[var(--accent)]">
                View official syllabus →
              </Link>
            </p>
          )}
        </div>

        <div className="mt-12 text-center">
          <Link href="/programs" className="text-sm text-[var(--text-muted)] transition hover:text-white">
            ← All programs
          </Link>
        </div>
      </div>
    </main>
  );
}
