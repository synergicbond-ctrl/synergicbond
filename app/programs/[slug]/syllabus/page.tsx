import Link from "next/link";
import { notFound } from "next/navigation";
import ProgramPageHeader from "@/components/programs/ProgramPageHeader";
import ProgramSyllabusTree from "@/components/programs/ProgramSyllabusTree";
import { getProgram, PROGRAMS } from "@/lib/programs";
import { getProgramSyllabus, HUB_SYLLABUS_MAP } from "@/lib/programSyllabus";

// ─────────────────────────────────────────────────────────────────────────────
// /programs/[slug]/syllabus — Learn → Syllabus (Dashboard Simplification pass).
//
// The ONLY place the complete official syllabus renders. Moved here from the
// program hub landing page, where it used to render beneath every hub tab.
// Same ProgramSyllabusTree component, same programSyllabus SSOT — no new
// data, no duplicate content. Programs without a verified official syllabus
// mapping get the same honest "mapping in progress" state used elsewhere.
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
    title: `${program.name} Syllabus — SYNERGIC BOND`,
    description: `The complete official ${program.name} chemistry syllabus — units, topics and question formats, with source attribution.`,
  };
}

export default async function ProgramSyllabusPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) notFound();

  const { name } = program;
  // Program-isolated official syllabus trees (never another program's names).
  const syllabuses = (HUB_SYLLABUS_MAP[slug] ?? [])
    .map((id) => getProgramSyllabus(id))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <main className="min-h-screen bg-black text-white">
      <ProgramPageHeader
        program={program}
        section="Syllabus"
        blurb={`The complete official ${name} chemistry syllabus — every unit, topic and question format, with source attribution.`}
      />

      <div className="mx-auto max-w-6xl px-6 py-12">
        {syllabuses.length > 0 ? (
          <div className="space-y-6">
            {syllabuses.map((s) => <ProgramSyllabusTree key={s.programId} syllabus={s} />)}
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center">
            <h2 className="text-xl font-bold">Verified syllabus mapping in progress</h2>
            <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-zinc-400">
              The chapter-by-chapter {name} syllabus is being mapped from official sources — no
              unverified content ships here. Meanwhile Chapter Notes covers the core Class 11–12
              concepts this program builds on.
            </p>
            <Link
              href={`/programs/${slug}/learn`}
              className="mt-5 inline-block rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/[0.08]"
            >
              Chapter Notes →
            </Link>
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
