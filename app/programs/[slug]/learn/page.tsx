import Link from "next/link";
import { notFound } from "next/navigation";
import ProgramPageHeader from "@/components/programs/ProgramPageHeader";
import { examChapters } from "@/components/syllabus/ExamSyllabus";
import { getProgram, PROGRAMS } from "@/lib/programs";
import { formulaCards } from "@/lib/chemistry/formulas";

// ─────────────────────────────────────────────────────────────────────────────
// /programs/[slug]/learn — Learn Engine V1 (Roadmap V2 · Week 2).
//
// Program-scoped learn hub wiring the EXISTING learn ecosystem — nothing is
// rebuilt: chapters come from the master-syllabus SSOT (same filter as
// ExamSyllabus), modules link to the live /notes, /formula-cards, /vault and
// /molecule routes (NCERT highlights ship inside chapter notes). Programs
// without verified syllabus data get an honest mapping-in-progress state.
// Server component, zero client JS.
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
    title: `${program.name} Learn — SYNERGIC BOND`,
    description: `${program.name} chemistry learning hub — chapters, notes, formula cards, knowledge vault, molecule explorer and NCERT highlights.`,
  };
}

// Existing learn ecosystem modules — every href is a live global route.
const LEARN_MODULES = [
  { href: "/notes", icon: "📖", title: "Chapter Notes", desc: "Verified exam notes with solved examples, derivations and common mistakes.", metric: "Verified" },
  { href: "/formula-cards", icon: "🧮", title: "Formula Cards", desc: "Physical chemistry formulas with variables, units and PYQ links.", metric: `${formulaCards.length} cards` },
  { href: "/vault", icon: "🏛️", title: "Knowledge Vault", desc: "Saved concepts, formula vault, exceptions and quick facts.", metric: "Memory bank" },
  { href: "/molecule", icon: "⚛️", title: "Molecule Explorer", desc: "Look up structures, properties and exam relevance of any compound.", metric: "Explorer" },
  { href: "/notes", icon: "📗", title: "NCERT Highlights", desc: "Line-by-line NCERT highlight blocks inside every chapter's notes.", metric: "In notes" },
] as const;

const BRANCH_LABEL: Record<string, string> = {
  physical: "⚗️ Physical",
  organic: "🧬 Organic",
  inorganic: "🧪 Inorganic",
};

const FEATURED_CHEMISTRY_NOTES: Record<string, Array<{
  href: string;
  branch: string;
  title: string;
  desc: string;
  metrics: string[];
}>> = {
  "jee-main": [
    {
      href: "/notes/mole-concept",
      branch: "Physical Chemistry",
      title: "Some Basic Concepts of Chemistry — Mole Concept",
      desc: "Full JEE Main web notes with mole conversions, stoichiometry, limiting reagent, POAC, formula cards, solved examples, revision, and MCQs.",
      metrics: ["24 sections", "Formula cards", "Practice MCQs"],
    },
  ],
};

export default async function ProgramLearnPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) notFound();

  const { name, examTags, accent } = program;
  const chapters = examTags.length > 0 ? examChapters(examTags) : [];

  return (
    <main className="min-h-screen bg-black text-white">
      <ProgramPageHeader
        program={program}
        section="Learn"
        blurb={`Chapters, notes, formula cards, the knowledge vault, molecule explorer and NCERT highlights — the verified library, scoped to ${name}.`}
      />

      <div className="mx-auto max-w-6xl px-6 py-12">
        <section className="mb-12">
          <h2 className="mb-2 text-2xl font-bold">Learn Modules</h2>
          <p className="mb-6 text-zinc-500">Verified systems already connected to search, PYQs and tests</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {LEARN_MODULES.map((mod) => (
              <Link
                key={mod.title}
                href={mod.href}
                className={`group flex flex-col rounded-2xl border bg-white/[0.02] p-5 transition hover:-translate-y-0.5 hover:bg-white/[0.04] ${accent.card}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-2xl">{mod.icon}</span>
                  <span className="rounded-md bg-white/[0.06] px-2 py-1 text-[11px] font-bold text-white/55">{mod.metric}</span>
                </div>
                <div className="mt-3 font-bold text-white">{mod.title}</div>
                <div className="mt-1 flex-1 text-sm text-zinc-400">{mod.desc}</div>
                <div className={`mt-3 text-sm font-semibold ${accent.text}`}>
                  Open <span className="inline-block transition group-hover:translate-x-1">→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {FEATURED_CHEMISTRY_NOTES[slug]?.length ? (
          <section className="mb-12">
            <h2 className="mb-2 text-2xl font-bold">Chemistry Notes</h2>
            <p className="mb-6 text-zinc-500">Program-linked chapter notes ready for {name}</p>
            <div className="grid gap-4 lg:grid-cols-2">
              {FEATURED_CHEMISTRY_NOTES[slug].map((note) => (
                <Link
                  key={note.href}
                  href={note.href}
                  className={`group rounded-2xl border bg-white/[0.02] p-5 transition hover:-translate-y-0.5 hover:bg-white/[0.04] ${accent.card}`}
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`rounded-full border px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.18em] ${accent.chip}`}>
                      {note.branch}
                    </span>
                    {note.metrics.map((metric) => (
                      <span key={metric} className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-semibold text-white/50">
                        {metric}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-4 text-lg font-black tracking-normal text-white">{note.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{note.desc}</p>
                  <div className={`mt-4 text-sm font-semibold ${accent.text}`}>
                    Open notes <span className="inline-block transition group-hover:translate-x-1">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <section>
          <h2 className="mb-2 text-2xl font-bold">Chapters</h2>
          {chapters.length > 0 ? (
            <>
              <p className="mb-6 text-zinc-500">
                {chapters.length} chapters from the verified {name} syllabus — open any chapter for notes, formulas and PYQs
              </p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {chapters.map((chapter) => (
                  <Link
                    key={chapter.id}
                    href={`/chapter/${chapter.id}`}
                    className={`group rounded-xl border bg-white/[0.02] p-4 transition hover:bg-white/[0.04] ${accent.card}`}
                  >
                    <div className="text-[11px] font-bold uppercase tracking-wider text-white/40">
                      {BRANCH_LABEL[chapter.category] ?? chapter.category}
                    </div>
                    <div className="mt-1.5 text-sm font-bold text-white">{chapter.title}</div>
                    <div className="mt-1 text-xs text-white/45">
                      D{chapter.difficulty} · ~{chapter.estimatedHours}h · {chapter.concepts.length} syllabus points
                    </div>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center">
              <h3 className="text-lg font-bold">Verified chapter mapping in progress</h3>
              <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-zinc-400">
                The chapter-by-chapter {name} syllabus is being mapped from official sources — no
                unverified content ships here. The learn modules above are fully available and cover
                the core Class 11–12 chemistry this program builds on.
              </p>
            </div>
          )}
        </section>

        <div className="mt-12 text-center">
          <Link href={`/programs/${slug}`} className="text-sm text-zinc-500 transition hover:text-white">
            ← Back to {name} program
          </Link>
        </div>
      </div>
    </main>
  );
}
