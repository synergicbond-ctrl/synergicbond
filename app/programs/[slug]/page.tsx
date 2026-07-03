import Link from "next/link";
import { notFound } from "next/navigation";
import ExamSyllabus from "@/components/syllabus/ExamSyllabus";
import ProgramHubSections from "@/components/programs/ProgramHubSections";
import { getProgram, PROGRAMS } from "@/lib/programs";
import { getProgramSections } from "@/lib/programHubData";

// ─────────────────────────────────────────────────────────────────────────────
// /programs/[slug] — Program hub (Program Hub Scaffold pass).
//
// One dynamic hub for every program, driven by the programs SSOT + the
// programHubData SSOT (7 sections: Learn · Memory · Practice · Testing ·
// Revision · Analytics · Intelligence). Available cards link to real routes;
// unbuilt features render as honest coming-soon. Programs with verified
// master-syllabus data (NEET / JEE Main / JEE Advanced) also render the
// official syllabus; the rest stay honest structure-only until mapped.
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

  const { name, kicker, tagline, chips, examTags, syllabusHeading, syllabusBlurb, legacyHub, accent } = program;
  const sections = getProgramSections(program);

  return (
    <main className="min-h-screen bg-black text-white">
      <div className={`border-b border-white/10 bg-gradient-to-b ${accent.gradient} to-black px-6 py-14 text-center`}>
        <div className={`mb-3 text-xs font-bold uppercase tracking-widest ${accent.text}`}>{kicker}</div>
        <h1 className="mb-4 text-4xl font-black tracking-tight sm:text-5xl">{name} Chemistry</h1>
        <p className="mx-auto max-w-xl text-lg text-zinc-400">{tagline}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {chips.map((chip) => (
            <span key={chip} className={`rounded-full border px-3 py-1 text-sm ${accent.chip}`}>
              {chip}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href={`/programs/${slug}/learn`} className={`rounded-xl border px-5 py-2.5 text-sm font-bold ${accent.chip} transition hover:bg-white/[0.06]`}>
            Start Learning
          </Link>
          <Link href={`/programs/${slug}/tests`} className="rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-5 py-2.5 text-sm font-black text-black transition hover:-translate-y-0.5">
            Take a Test →
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Readiness placeholder — real analytics wire in later; no fabricated numbers. */}
        <div className="mb-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-white/40">Exam Readiness</p>
              <p className="mt-1 text-sm text-zinc-400">
                Your {name} readiness score appears here once you attempt tests — no simulated numbers.
              </p>
            </div>
            <Link href={`/programs/${slug}/practice`} className={`shrink-0 text-sm font-semibold ${accent.text} hover:underline`}>
              Start practising →
            </Link>
          </div>
          <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/[0.06]">
            <div className="h-full w-0 rounded-full bg-white/20" />
          </div>
        </div>

        <div className="mb-12">
          <ProgramHubSections sections={sections} accentText={accent.text} accentCard={accent.card} />
          <p className="mt-6 text-sm text-zinc-500">
            Global library:{" "}
            <Link href="/learn" className="underline-offset-4 hover:underline hover:text-white">Learn</Link>
            {" · "}
            <Link href="/pyq" className="underline-offset-4 hover:underline hover:text-white">PYQ Center</Link>
            {" · "}
            <Link href="/tests" className="underline-offset-4 hover:underline hover:text-white">Tests</Link>
            {legacyHub && (
              <>
                {" — or the AI toolset: "}
                <Link href={legacyHub.href} className={`font-semibold underline-offset-4 hover:underline ${accent.text}`}>
                  {legacyHub.label} →
                </Link>
              </>
            )}
          </p>
        </div>

        {examTags.length > 0 && syllabusHeading ? (
          <ExamSyllabus exams={examTags} heading={syllabusHeading} blurb={syllabusBlurb ?? ""} />
        ) : (
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center">
            <h2 className="text-xl font-bold">Verified syllabus mapping in progress</h2>
            <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-zinc-400">
              The chapter-by-chapter {name} syllabus is being mapped from official sources — no
              unverified content ships here. Meanwhile the full chemistry library above covers the
              core Class 11–12 concepts this program builds on.
            </p>
          </div>
        )}

        <div className="mt-12 text-center">
          <Link href="/programs" className="text-sm text-zinc-500 transition hover:text-white">
            ← All programs
          </Link>
        </div>
      </div>
    </main>
  );
}
