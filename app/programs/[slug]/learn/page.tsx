import Link from "next/link";
import { notFound } from "next/navigation";
import ProgramPageHeader from "@/components/programs/ProgramPageHeader";
import { examChapters } from "@/components/syllabus/ExamSyllabus";
import { getProgram, PROGRAMS } from "@/lib/programs";
import { formulaCards } from "@/lib/chemistry/formulas";
import { isEngineSlug, AUTHORED_NOTES, ENGINE_PROGRAMS } from "@/lib/engine/programSpec";
import { getPremiumNotesForExam } from "@/lib/premiumNotes";

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
    description: `${program.name} chemistry learning hub — chapters, notes, formula cards, knowledge vault, molecule explorer and NCERT intelligence.`,
  };
}

// Supporting tools — every href is a live global route.
// Chapter Notes (/notes) is not included here: the chapter grid on this page
// already IS the program's note library. A secondary link appears below.
const SUPPORTING_TOOLS = [
  { href: "/formula-cards", icon: "🧮", title: "Formula Cards", desc: "Physical chemistry formulas with variables, units and PYQ links.", metric: `${formulaCards.length} cards` },
  { href: "/vault", icon: "🏛️", title: "Knowledge Vault", desc: "Saved concepts, formula vault, exceptions and quick facts.", metric: "Memory bank" },
  { href: "/molecule", icon: "⚛️", title: "Molecule Explorer", desc: "Look up structures, properties and exam relevance of any compound.", metric: "Explorer" },
  { href: "/ncert", icon: "📗", title: "NCERT Intelligence", desc: "Chapter-level NCERT blind-spot analysis and gap identification.", metric: "Intelligence" },
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

  return (
    <main className="min-h-screen bg-[var(--background)] text-white">
      <ProgramPageHeader
        program={program}
        section="Learn"
        blurb={`Chapters, formula cards, the knowledge vault, molecule explorer and NCERT intelligence — the verified library, scoped to ${name}.`}
      />

      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* ── Chapters — primary content ── */}
        <section className="mb-14">
          <h2 className="mb-2 text-2xl font-bold">Chapters</h2>
          {chapters.length > 0 ? (
            <>
              <p className="mb-6 text-[var(--text-muted)]">
                {chapters.length} chapters from the verified {name} syllabus — authored chapters open their full
                notes; every chapter keeps its Chapter Engine (mastery, PYQs, tests, error analysis, AI tutor)
              </p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {chapters.map((chapter) => {
                  // Authored chapters open the canonical full-notes experience;
                  // the Chapter Engine stays one tap away. Others open the
                  // engine (engine programs) or the classic chapter workspace.
                  const notesHref = chapter.id === "solid-state" && slug === "jee-advanced"
                    ? "/learn/solid-state"
                    : AUTHORED_NOTES[chapter.id];
                  const inlineNotes = isEngineSlug(slug)
                    ? getPremiumNotesForExam(chapter.id, ENGINE_PROGRAMS[slug].exam)
                    : undefined;
                  const hasFullNotes = Boolean(notesHref || inlineNotes);
                  const engineHref = isEngineSlug(slug)
                    ? `/programs/${slug}/chapter/${chapter.id}`
                    : `/chapter/${chapter.id}`;
                  const primaryHref = notesHref ?? (inlineNotes ? `${engineHref}#learn` : engineHref);
                  return (
                    <div
                      key={chapter.id}
                      className={`group relative flex flex-col rounded-lg border bg-white/[0.02] p-4 transition hover:bg-white/[0.04] ${accent.card}`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-white/40">
                          {BRANCH_LABEL[chapter.category] ?? chapter.category}
                        </div>
                        {hasFullNotes ? (
                          <span className="rounded-full border border-[#e8b84b4d] bg-[#e8b84b1a] px-1.5 py-0.5 text-[9px] font-bold uppercase text-[#e8b84b]">Full Notes</span>
                        ) : isEngineSlug(slug) ? (
                          <span className="rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-1.5 py-0.5 text-[9px] font-bold uppercase text-[var(--accent)]">Engine</span>
                        ) : null}
                      </div>
                      <Link href={primaryHref} className="mt-1.5 flex-1 after:absolute after:inset-0">
                        <span className="text-sm font-bold text-white">{chapter.title}</span>
                        <span className="mt-1 block text-xs text-white/45">
                          D{chapter.difficulty} · ~{chapter.estimatedHours}h · {chapter.concepts.length} syllabus points
                        </span>
                      </Link>
                      <div className="mt-3 flex items-center justify-between gap-2">
                        <span className={`text-sm font-semibold ${accent.text}`}>
                          {notesHref ? "Explore lessons" : inlineNotes ? "Open full notes" : "Open chapter"}{" "}
                          <span className="inline-block transition group-hover:translate-x-1">→</span>
                        </span>
                        {hasFullNotes && (
                          <Link
                            href={engineHref}
                            className="relative z-10 rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white/55 transition hover:border-[var(--accent)]/30 hover:text-[var(--accent)]"
                          >
                            Chapter Engine
                          </Link>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="rounded-lg border border-white/10 bg-white/[0.02] p-8 text-center">
              <h3 className="text-lg font-bold">Verified chapter mapping in progress</h3>
              <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-[var(--text-muted)]">
                The chapter-by-chapter {name} syllabus is being mapped from official sources — no
                unverified content ships here. The supporting tools below are fully available and cover
                the core Class 11–12 chemistry this program builds on.
              </p>
            </div>
          )}
        </section>

        {/* ── Supporting Tools ── */}
        <section className="mb-10">
          <h2 className="mb-2 text-2xl font-bold">Supporting Tools</h2>
          <p className="mb-6 text-[var(--text-muted)]">Verified systems connected to search, PYQs and tests</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SUPPORTING_TOOLS.map((mod) => (
              <Link
                key={mod.title}
                href={mod.href}
                className={`group flex flex-col rounded-lg border bg-white/[0.02] p-5 transition hover:-translate-y-0.5 hover:bg-white/[0.04] ${accent.card}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-2xl">{mod.icon}</span>
                  <span className="rounded-md bg-white/[0.06] px-2 py-1 text-[11px] font-bold text-white/55">{mod.metric}</span>
                </div>
                <div className="mt-3 font-bold text-white">{mod.title}</div>
                <div className="mt-1 flex-1 text-sm text-[var(--text-muted)]">{mod.desc}</div>
                <div className={`mt-3 text-sm font-semibold ${accent.text}`}>
                  Open <span className="inline-block transition group-hover:translate-x-1">→</span>
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-4 text-sm text-[var(--text-muted)]">
            Looking for the full library?{" "}
            <Link href="/notes" className="underline transition hover:text-white">All Notes Library →</Link>
          </p>
        </section>

        <div className="mt-8 text-center">
          <Link href={`/programs/${slug}`} className="text-sm text-[var(--text-muted)] transition hover:text-white">
            ← Back to {name} program
          </Link>
        </div>
      </div>
    </main>
  );
}
