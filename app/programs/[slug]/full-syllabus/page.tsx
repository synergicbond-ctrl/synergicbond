import Link from "next/link";
import { notFound } from "next/navigation";
import { getProgram } from "@/lib/programs";
import { ENGINE_PROGRAMS, ENGINE_SLUGS, isEngineSlug } from "@/lib/engine/programSpec";
import ExamCountdown from "@/components/engine/ExamCountdown";

// ─────────────────────────────────────────────────────────────────────────────
// /programs/[slug]/full-syllabus — the program Full Syllabus Dashboard
// (learning-engine layer). Every tool links to a REAL live route; program-
// locked, no mixing. The hub dashboard itself is untouched — this is the
// whole-course tool layer the hub links into. Static shell; the countdown is
// device-local client state.
// ─────────────────────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return ENGINE_SLUGS.map((slug) => ({ slug }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = isEngineSlug(slug) ? ENGINE_PROGRAMS[slug] : undefined;
  return p ? { title: `${p.name} — Full Syllabus Dashboard` } : {};
}

export default async function ProgramFullSyllabusPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!isEngineSlug(slug)) notFound();
  const engine = ENGINE_PROGRAMS[slug];
  const program = getProgram(slug);
  if (!program) notFound();

  const base = `/programs/${slug}`;

  const tools: { label: string; desc: string; href: string }[] = [
    { label: "Full Syllabus Notes", desc: "Every chapter's notes — authored premium chapters plus official syllabus for the rest.", href: "/notes" },
    { label: "NCERT Revision", desc: "NCERT blind-spot detector across the whole syllabus.", href: "/ncert" },
    { label: "Formula Book", desc: "The verified formula vault, chapter by chapter.", href: "/vault/formulas" },
    { label: "Exception Book", desc: "Every verified exception, in one place.", href: "/vault/exceptions" },
    { label: "Trick Book", desc: "Ranking orders + spaced-recall memory decks.", href: "/important-orders" },
    { label: "Question Bank", desc: `Per-chapter ${engine.name} engine banks — every format.`, href: `${base}/learn` },
    { label: "Full Syllabus PYQs", desc: "The verified PYQ bank with chapter/topic/difficulty filters.", href: `${base}/practice` },
    { label: "Mock Tests", desc: "Chapter, topic and category tests.", href: `${base}/tests` },
    { label: "Custom Test Generator", desc: `Real ${engine.name}-size papers (verified + AI fallback) with actual marking.`, href: "/exam" },
    { label: "Error Analysis Center", desc: "Mistake journal — concept/calculation/memory errors with reattempts.", href: "/mistakes" },
    { label: "AI Mentor", desc: "Chapter-aware AI tutor, weak-topic aware.", href: "/tutor" },
    { label: "Revision Planner", desc: "Saved revision items + SM-2 daily queue.", href: "/revision" },
    { label: "Smart Timers", desc: "Pomodoro · deep work · exam simulation · custom.", href: "/timers" },
    { label: "Rank Prediction", desc: "Exam readiness & predictor tools.", href: "/exam-predictor" },
    ...(engine.hasSpeedAnalysis
      ? [{ label: "Speed Analysis", desc: "Your real pace vs difficulty benchmarks — rushing & slow chapters.", href: `${base}/speed` }]
      : []),
  ];

  return (
    <main className="min-h-screen bg-[#0B1220] text-white">
      <div className="border-b border-white/10 bg-gradient-to-b from-cyan-950/20 to-[#0B1220] px-4 py-8 sm:px-6 sm:py-10">
        <div className="mx-auto max-w-5xl">
          <nav className="mb-3 text-sm text-white/45">
            <Link href={base} className="hover:text-white">{engine.name}</Link>
            <span className="mx-1.5">/</span><span className="text-white/80">Full Syllabus</span>
          </nav>
          <h1 className="text-2xl font-black tracking-tight sm:text-4xl">Full Syllabus Dashboard</h1>
          <p className="mt-2 max-w-2xl text-white/55">Whole-course {engine.name} tools — notes, NCERT, formula/exception/trick books, question banks, tests, error analysis, mentor, planner, timers and prediction.</p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl space-y-6 px-4 py-8 sm:px-6">
        <ExamCountdown storageKey={`sb_exam_date_${slug}`} examName={engine.name} />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((t) => (
            <Link key={t.label} href={t.href}
              className="group flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 transition hover:-translate-y-0.5 hover:border-cyan-400/40">
              <div>
                <div className="font-black text-white">{t.label}</div>
                <p className="mt-1 text-sm text-white/55">{t.desc}</p>
              </div>
              <span className="mt-3 text-sm font-bold text-cyan-300">Open →</span>
            </Link>
          ))}
        </div>

        <div className="pt-2"><Link href={base} className="text-sm text-white/45 hover:text-white">← {engine.name} hub</Link></div>
      </div>
    </main>
  );
}
