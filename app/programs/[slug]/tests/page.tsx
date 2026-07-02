import Link from "next/link";
import { notFound } from "next/navigation";
import ProgramPageHeader from "@/components/programs/ProgramPageHeader";
import TestEngine from "@/components/tests/TestEngine";
import { getProgram, PROGRAMS } from "@/lib/programs";
import { TESTS_BY_CATEGORY, type TestCategory } from "@/lib/tests/testEngine";
import type { PYQExam } from "@/lib/pyq";

// ─────────────────────────────────────────────────────────────────────────────
// /programs/[slug]/tests — Test Engine (Roadmap V2 · Week 4).
//
// Server shell around the EXISTING TestEngine, locked to this program's exam
// tag. Category overview shows the five required test types with counts
// derived from the real test definitions — Unit and Custom tests don't exist
// in the engine yet and are shown honestly as coming soon. Programs without
// a verified exam mapping get an honest mapping-in-progress state.
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
    title: `${program.name} Tests — SYNERGIC BOND`,
    description: `${program.name} chemistry tests — topic, chapter and full-paper tests built from real previous-year questions.`,
  };
}

function countFor(category: TestCategory, exam: PYQExam): number {
  return TESTS_BY_CATEGORY[category].filter((d) => d.exams.includes(exam)).length;
}

export default async function ProgramTestsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) notFound();

  const { name, pyqExam, accent } = program;

  // The five required test types — counts are real, from the test-definition
  // SSOT; categories the engine doesn't build yet are honest placeholders.
  const overview = pyqExam
    ? [
        { label: "Topic Tests", icon: "🎯", detail: `${countFor("topic", pyqExam)} available` },
        { label: "Chapter Tests", icon: "📚", detail: `${countFor("chapter", pyqExam)} available` },
        { label: "Unit Tests", icon: "🧩", detail: "Coming soon" },
        { label: "Custom Tests", icon: "🛠️", detail: "Coming soon" },
        { label: "Full Syllabus Tests", icon: "🗓️", detail: `${countFor("previous-paper", pyqExam)} full papers` },
      ]
    : [];

  return (
    <main className="min-h-screen bg-black text-white">
      <ProgramPageHeader
        program={program}
        section="Tests"
        blurb={
          pyqExam
            ? `Topic, chapter and full-paper ${pyqExam} tests built from real previous-year questions — attempt them right here.`
            : `Tests for ${name} — verified test mapping is in progress.`
        }
      />

      <div className="mx-auto max-w-6xl px-6 py-12">
        {pyqExam ? (
          <>
            <section className="mb-10">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                {overview.map((item) => (
                  <div key={item.label} className={`rounded-xl border bg-white/[0.02] p-4 text-center ${accent.card}`}>
                    <div className="text-xl">{item.icon}</div>
                    <div className="mt-1.5 text-sm font-bold text-white">{item.label}</div>
                    <div className={`mt-0.5 text-xs ${item.detail === "Coming soon" ? "text-white/35" : accent.text}`}>
                      {item.detail}
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <TestEngine exam={pyqExam} />
          </>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center">
            <h2 className="text-xl font-bold">{name} test mapping in progress</h2>
            <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-zinc-400">
              Tests here are built only from verified previous-year questions — nothing is
              fabricated. The {name} question bank is being mapped from official sources.
              Meanwhile the global Test Engine covers JEE Main, JEE Advanced and NEET.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Link
                href="/tests"
                className="rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-500/20"
              >
                Open Test Engine →
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
