import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BOARDS, CLASSES, getBoard, getClass, CLASS_DASHBOARD_SECTIONS, TEST_QUESTION_TYPES, SECTION_ROUTES,
} from "@/lib/boardDashboard";
import { getBoardChapters } from "@/lib/boards";

// /dashboard/[board]/[class] — Class Dashboard (six sections). Board-aware and
// board-separated. Available items reuse the live platform; new sub-systems are
// honest coming-soon. Chapter-Wise Learning is kept separate from Full Syllabus.

export function generateStaticParams() {
  return BOARDS.flatMap((b) => CLASSES.map((c) => ({ board: b.slug, class: c.slug })));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ board: string; class: string }> }) {
  const { board, class: cls } = await params;
  const b = getBoard(board); const c = getClass(cls);
  return b && c ? { title: `${b.name} ${c.name} Chemistry — SYNERGIC BOND` } : {};
}

export default async function ClassDashboard({ params }: { params: Promise<{ board: string; class: string }> }) {
  const { board, class: cls } = await params;
  const b = getBoard(board); const c = getClass(cls);
  if (!b || !c) notFound();

  const base = `/dashboard/${b.slug}/${c.slug}`;
  const basicConcepts = getBoardChapters(b.slug, c.slug).find((chapter) => chapter.id === "some-basic-concepts");

  // Program isolation: keep board quick-links inside board-scoped surfaces.
  // Global entrance routes (/pyq, /tests, /ncert, /performance, /analytics,
  // /mistakes, /readiness) carry JEE/NEET content & tags, so they are remapped
  // to this board/class's own practice, custom-test and analytics pages.
  // Chemistry-reference and generic tools (notes, formulas, memory, vault,
  // tutor, board-examiner, support, …) are program-neutral and pass through.
  const BOARD_SCOPE_REMAP: Record<string, string> = {
    "/pyq": `${base}/practice`,
    "/tests": `${base}/custom-test`,
    "/ncert": `${base}/analytics`,
    "/performance": `${base}/analytics`,
    "/analytics": `${base}/analytics`,
    "/mistakes": `${base}/analytics`,
    "/readiness": `${base}/analytics`,
  };
  const scopedHref = (href: string) => BOARD_SCOPE_REMAP[href] ?? href;

  return (
    <main className="min-h-screen bg-[#0B1220] text-white">
      <div className="border-b border-white/10 bg-gradient-to-b from-amber-950/20 to-[#0B1220] px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <nav className="mb-4 text-sm text-white/45">
            <Link href="/dashboard/boards" className="hover:text-white">School Boards</Link>
            <span className="mx-1.5">/</span>
            <Link href={`/dashboard/${b.slug}`} className="hover:text-white">{b.name}</Link>
            <span className="mx-1.5">/</span><span className="text-white/80">{c.name}</span>
          </nav>
          <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-amber-300/80">{b.name} · {b.desc}</div>
          <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">{c.label}</h1>
          <p className="mt-2 max-w-2xl text-white/55">Your {b.name} {c.name} class dashboard — learning, tests, projects, practicals, progress and mentorship.</p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl space-y-6 px-6 py-10">
        {/* Primary entry — the Full Syllabus Dashboard hub */}
        <Link href={`${base}/full-syllabus`}
          className="flex items-center justify-between rounded-2xl border border-cyan-400/30 bg-gradient-to-r from-cyan-500/[0.08] to-transparent p-5 transition hover:border-cyan-400/60">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-cyan-300">Start here</div>
            <div className="mt-0.5 text-lg font-black text-white">Full Syllabus Dashboard</div>
            <p className="text-sm text-white/55">Notes, practice, PYQs, mock tests, custom test generator & analytics — all chapters.</p>
          </div>
          <span className="text-2xl text-cyan-300">→</span>
        </Link>

        {basicConcepts?.learnHref && (
          <Link
            href={basicConcepts.learnHref}
            className="flex items-center justify-between rounded-2xl border border-amber-400/30 bg-gradient-to-r from-amber-500/[0.08] to-transparent p-5 transition hover:border-amber-400/60"
          >
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-300">Class 11 chapter notes</div>
              <div className="mt-0.5 text-lg font-black text-white">{basicConcepts.title}</div>
              <p className="text-sm text-white/55">Open the complete theory dashboard and 50-question searchable answer key.</p>
            </div>
            <span className="text-2xl text-amber-300">→</span>
          </Link>
        )}

        {CLASS_DASHBOARD_SECTIONS.map((section) => {
          const route = SECTION_ROUTES[section.key]?.(base);
          return (
          <section key={section.key} className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
            <div className="mb-3 flex items-start justify-between gap-3">
              <div>
                <h2 className="text-lg font-black text-white">{section.label}</h2>
                <p className="mt-0.5 text-sm text-white/50">{section.blurb}</p>
              </div>
              {route && <Link href={route} className="shrink-0 rounded-lg border border-cyan-400/40 bg-cyan-500/10 px-3 py-1.5 text-xs font-bold text-cyan-300 hover:bg-cyan-500/20">Open →</Link>}
            </div>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {section.items.map((it) =>
                it.status === "available" && it.href ? (
                  <Link key={it.label} href={scopedHref(it.href)}
                    className="flex items-center justify-between rounded-lg border border-white/[0.08] bg-[#0B1220] px-3 py-2.5 text-sm font-semibold text-white/85 transition hover:border-cyan-400/40 hover:text-cyan-200">
                    {it.label}<span className="text-cyan-400">→</span>
                  </Link>
                ) : (
                  <div key={it.label} className="flex items-center justify-between rounded-lg border border-white/[0.05] bg-white/[0.01] px-3 py-2.5 text-sm text-white/40">
                    {it.label}
                    <span className="rounded-full border border-white/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white/35">Soon</span>
                  </div>
                )
              )}
            </div>

            {/* Custom Test Paper Generator — now live under Full Syllabus */}
            {section.key === "full-syllabus" && (
              <Link href={`${base}/custom-test`} className="mt-3 block rounded-xl border border-cyan-400/25 bg-cyan-500/[0.06] p-3 transition hover:border-cyan-400/50">
                <p className="text-[11px] font-bold uppercase tracking-wider text-cyan-300">Custom Test Paper Generator — live →</p>
                <p className="mt-1 text-xs text-white/60">
                  Pick chapters · difficulty · count, add an AI subjective section, and get a board-style paper with per-student
                  non-repetition and a live performance report. Question types:
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {TEST_QUESTION_TYPES.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] font-semibold text-white/55">{t}</span>
                  ))}
                </div>
              </Link>
            )}
          </section>
          );
        })}

        <div className="pt-2"><Link href={`/dashboard/${b.slug}`} className="text-sm text-white/45 hover:text-white">← {b.name} classes</Link></div>
      </div>
    </main>
  );
}
