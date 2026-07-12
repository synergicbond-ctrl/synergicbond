import Link from "next/link";
import { notFound } from "next/navigation";
import ProgramPageHeader from "@/components/programs/ProgramPageHeader";
import { examChapters } from "@/components/syllabus/ExamSyllabus";
import { getProgram, PROGRAMS } from "@/lib/programs";
import { formulaCards } from "@/lib/chemistry/formulas";
import { isEngineSlug } from "@/lib/engine/programSpec";

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

export default async function ProgramLearnPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) notFound();

  const { name, examTags, accent } = program;
  const chapters = examTags.length > 0 ? examChapters(examTags) : [];
  const displayedChapters = slug === "jee-advanced"
    ? chapters.filter((chapter) => chapter.id !== "thermodynamics")
    : chapters;

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

        <section>
          <h2 className="mb-2 text-2xl font-bold">Chapters</h2>
          {slug === "jee-advanced" && (
            <div className="mb-6">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-cyan-300">Physical Chemistry</p>
              <Link
                href="/programs/jee-advanced/chapter/thermodynamics"
                className={`group block rounded-xl border bg-white/[0.02] p-4 transition hover:bg-white/[0.04] ${accent.card}`}
              >
                <div className="text-[11px] font-bold uppercase tracking-wider text-white/40">⚗️ Physical</div>
                <div className="mt-1.5 text-sm font-bold text-white">Thermodynamics</div>
                <div className="mt-1 text-xs text-white/45">Complete 30-part visual theory, derivations, graphs, tables, worked examples, and solutions.</div>
                <div className={`mt-3 text-sm font-semibold ${accent.text}`}>Explore Lessons <span className="inline-block transition group-hover:translate-x-1">→</span></div>
              </Link>
            </div>
          )}
          {displayedChapters.length > 0 ? (
            <>
              <p className="mb-6 text-zinc-500">
                {chapters.length} chapters from the verified {name} syllabus — open any chapter for notes, formulas and PYQs
              </p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {displayedChapters.map((chapter) => (
                  <Link
                    key={chapter.id}
                    // Engine programs open the full 11-section Chapter Engine;
                    // others keep the classic chapter workspace.
                    href={slug === "jee-advanced" && chapter.id === "atomic-structure"
                      ? "/learn/atomic-structure"
                      : isEngineSlug(slug) ? `/programs/${slug}/chapter/${chapter.id}` : `/chapter/${chapter.id}`}
                    className={`group rounded-xl border bg-white/[0.02] p-4 transition hover:bg-white/[0.04] ${accent.card}`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-white/40">
                        {BRANCH_LABEL[chapter.category] ?? chapter.category}
                      </div>
                      {isEngineSlug(slug) && (
                        <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-1.5 py-0.5 text-[9px] font-bold uppercase text-cyan-300">Engine</span>
                      )}
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
