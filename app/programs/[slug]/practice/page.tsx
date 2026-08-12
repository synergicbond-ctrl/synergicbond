import Link from "next/link";
import { notFound } from "next/navigation";
import ProgramPageHeader from "@/components/programs/ProgramPageHeader";
import ProgramPracticeClient from "@/components/programs/ProgramPracticeClient";
import { getProgram, PROGRAMS } from "@/lib/programs";

// ─────────────────────────────────────────────────────────────────────────────
// /programs/[slug]/practice — PYQ + Practice Engine (Roadmap V2 · Week 3).
//
// Server shell around ProgramPracticeClient, which wires the existing lib/pyq
// engine locked to this program's exam tag. Programs without a verified PYQ
// mapping (Olympiad, boards) get an honest empty state — no fake questions,
// no fake counts.
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
    title: `${program.name} Practice — SYNERGIC BOND`,
    description: `${program.name} chemistry practice — previous-year questions with chapter, topic and difficulty filters.`,
  };
}

export default async function ProgramPracticePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) notFound();

  const { name, pyqExam } = program;

  return (
    <main className="min-h-screen bg-black text-white">
      <ProgramPageHeader
        program={program}
        section="Practice"
        blurb={
          pyqExam
            ? `Verified ${pyqExam} previous-year questions — practice by chapter, topic and difficulty, with answers and explanations.`
            : `Question practice for ${name} — verified question mapping is in progress.`
        }
      />

      <div className="mx-auto max-w-6xl px-6 py-12">
        {pyqExam ? (
          <ProgramPracticeClient exam={pyqExam} />
        ) : (
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center">
            <h2 className="text-xl font-bold">No verified {name} questions mapped yet</h2>
            <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-zinc-400">
              Only verified previous-year questions ship on this platform — nothing is fabricated.
              The {name} question bank is being mapped from official sources. Meanwhile the global
              PYQ Center covers JEE Main, JEE Advanced and NEET questions on the same core chemistry.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Link
                href="/pyq"
                className="rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-500/20"
              >
                Open PYQ Center →
              </Link>
              <Link
                href={`/programs/${slug}/learn`}
                className="rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/[0.08]"
              >
                {name} Learn →
              </Link>
            </div>
          </div>
        )}

        <div className="mt-12 text-center">
          <Link href={`/programs/${slug}`} className="text-sm text-zinc-500 transition hover:text-white">
            ← Back to {name} program
          </Link>
        </div>
      </div>
    </main>
  );
}
