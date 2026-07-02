import Link from "next/link";
import { notFound } from "next/navigation";
import ExamSyllabus from "@/components/syllabus/ExamSyllabus";
import { getProgram, PROGRAMS, PROGRAM_TOOLS } from "@/lib/programs";

// ─────────────────────────────────────────────────────────────────────────────
// /programs/[slug] — Program hub (Roadmap V2 · Week 1).
//
// One dynamic hub for all seven programs, driven by the programs SSOT.
// Programs with verified master-syllabus data (NEET / JEE Main / JEE Advanced)
// render the official syllabus via ExamSyllabus; the rest stay honest
// structure-only hubs until verified content is mapped. Learn / Practice /
// Tests cards link to the existing global routes — the program-scoped
// versions replace those hrefs in Weeks 2–3.
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

  return (
    <main className="min-h-screen bg-black text-white">
      <div className={`border-b border-white/10 bg-gradient-to-b ${accent.gradient} to-black px-6 py-16 text-center`}>
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
      </div>

      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-12">
          <h2 className="mb-2 text-2xl font-bold">Start Here</h2>
          <p className="mb-6 text-zinc-500">Learn, practice and test from the verified chemistry library</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {PROGRAM_TOOLS.map((tool) => (
              <Link
                key={tool.label}
                href={tool.href}
                className={`group rounded-2xl border bg-white/[0.02] p-5 transition hover:-translate-y-0.5 hover:bg-white/[0.04] ${accent.card}`}
              >
                <div className="text-2xl">{tool.icon}</div>
                <div className="mt-2 font-bold text-white">{tool.label}</div>
                <div className="mt-1 text-sm text-zinc-400">{tool.desc}</div>
                <div className={`mt-3 text-sm font-semibold ${accent.text}`}>
                  Open <span className="inline-block transition group-hover:translate-x-1">→</span>
                </div>
              </Link>
            ))}
          </div>
          {legacyHub && (
            <p className="mt-4 text-sm text-zinc-500">
              Looking for the AI toolset?{" "}
              <Link href={legacyHub.href} className={`font-semibold underline-offset-4 hover:underline ${accent.text}`}>
                {legacyHub.label} →
              </Link>
            </p>
          )}
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
