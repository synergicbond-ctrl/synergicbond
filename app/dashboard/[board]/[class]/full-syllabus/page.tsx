import Link from "next/link";
import { notFound } from "next/navigation";
import { BOARDS, CLASSES, getBoard, getClass } from "@/lib/boardDashboard";
import { CATEGORY_LABEL, type CbseCategory } from "@/lib/cbse/syllabus";
import { ALL_PYQ_QUESTIONS } from "@/lib/pyq";
import { getBoardChapters, boardExamName, boardCoreNote } from "@/lib/boards";

// /dashboard/[board]/[class]/full-syllabus — Full Syllabus Dashboard.
// Whole-course tools across every chapter at once (Full Syllabus) kept distinct
// from per-chapter deep study (Chapter Wise). Every tool links to a REAL route
// scoped to this class. No fabricated content.

export function generateStaticParams() {
  return BOARDS.flatMap((b) => CLASSES.map((c) => ({ board: b.slug, class: c.slug })));
}
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ board: string; class: string }> }) {
  const { board, class: cls } = await params;
  const b = getBoard(board); const c = getClass(cls);
  return b && c ? { title: `${b.name} ${c.name} — Full Syllabus Dashboard` } : {};
}

const CAT_ORDER: CbseCategory[] = ["physical", "inorganic", "organic"];

export default async function FullSyllabusPage({ params }: { params: Promise<{ board: string; class: string }> }) {
  const { board, class: cls } = await params;
  const b = getBoard(board); const c = getClass(cls);
  if (!b || !c) notFound();

  const base = `/dashboard/${b.slug}/${c.slug}`;
  const chapters = getBoardChapters(b.slug, c.slug);
  const examName = boardExamName(b.slug);
  const coreNote = boardCoreNote(b.slug);
  // Real objective inventory over THIS board's chapters only.
  const scope = new Set(chapters.flatMap((ch) => ch.pyqChapters));
  const objectiveCount = ALL_PYQ_QUESTIONS.filter((q) => scope.has(q.chapter) && q.options).length;

  // Full-syllabus tools — all wired to real, class-scoped routes.
  const tools = [
    { label: "Short Notes", desc: "Concise revision notes across every chapter.", href: "/notes", tag: "Live" },
    { label: "Practice Problems", desc: objectiveCount > 0 ? `${objectiveCount} verified objective questions + AI subjective, all 8 board types.` : `AI subjective practice, all board types — a verified ${examName} objective bank is being sourced.`, href: `${base}/practice`, tag: "Live" },
    { label: "PYQ Bank", desc: "Previous-year questions, chapter-filtered.", href: "/pyq", tag: "Live" },
    { label: "Mock Tests", desc: "Full-syllabus mock papers with instant scoring.", href: "/tests", tag: "Live" },
    { label: "Custom Test Generator", desc: "Build a board-style paper: chapters · types · marks · difficulty.", href: `${base}/custom-test`, tag: "Live" },
    { label: "Performance Analytics", desc: "Accuracy, weak areas, predicted board score, attempt history.", href: `${base}/analytics`, tag: "Live" },
  ];

  const byCat = CAT_ORDER.map((cat) => ({ cat, list: chapters.filter((ch) => ch.category === cat) })).filter((g) => g.list.length > 0);

  return (
    <main className="min-h-screen bg-[#0B1220] text-white">
      <div className="border-b border-white/10 bg-gradient-to-b from-amber-950/20 to-[#0B1220] px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <nav className="mb-4 text-sm text-white/45">
            <Link href="/dashboard/boards" className="hover:text-white">School Boards</Link>
            <span className="mx-1.5">/</span>
            <Link href={`/dashboard/${b.slug}`} className="hover:text-white">{b.name}</Link>
            <span className="mx-1.5">/</span>
            <Link href={base} className="hover:text-white">{c.name}</Link>
            <span className="mx-1.5">/</span><span className="text-white/80">Full Syllabus</span>
          </nav>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl">Full Syllabus Dashboard</h1>
          <p className="mt-2 max-w-2xl text-white/55">
            {b.name} {c.name} Chemistry{chapters.length > 0 ? ` · ${chapters.length} official units` : ""}. Whole-course tools on the left; go chapter-by-chapter below.
          </p>
          {coreNote && <p className="mt-1 max-w-2xl text-xs text-white/40">{coreNote}</p>}
        </div>
      </div>

      <div className="mx-auto max-w-5xl space-y-8 px-6 py-10">
        {/* Full-syllabus tools */}
        <section>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-white/40">Full Syllabus Tools</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((t) => (
              <Link key={t.label} href={t.href}
                className="group flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 transition hover:-translate-y-0.5 hover:border-cyan-400/40">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-black text-white">{t.label}</span>
                    <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-1.5 py-0.5 text-[9px] font-bold uppercase text-emerald-300">{t.tag}</span>
                  </div>
                  <p className="mt-1.5 text-sm text-white/55">{t.desc}</p>
                </div>
                <span className="mt-4 text-sm font-bold text-cyan-300">Open →</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Chapter-wise */}
        <section>
          <div className="mb-3 flex items-baseline justify-between">
            <h2 className="text-sm font-bold uppercase tracking-wider text-white/40">Chapter Wise</h2>
            <span className="text-xs text-white/35">Syllabus → Chapter → deep study</span>
          </div>
          {chapters.length === 0 && (
            <p className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-sm text-white/55">
              The official {examName} {c.name} unit list ships as soon as its Council document is uploaded — units are never invented. The whole-course tools above are live.
            </p>
          )}
          <div className="space-y-5">
            {byCat.map(({ cat, list }) => (
              <div key={cat}>
                <h3 className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300/70">{CATEGORY_LABEL[cat]}</h3>
                <div className="grid gap-2 sm:grid-cols-2">
                  {list.map((ch) => (
                    <div key={ch.id} className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-3">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <div className="text-[10px] font-bold uppercase tracking-wide text-white/35">Unit {ch.unit}</div>
                          <div className="truncate font-bold text-white/90">{ch.title}</div>
                        </div>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1.5 text-xs">
                        {(ch.learnHref || ch.masterId) && (
                          <Link href={ch.learnHref ?? `/chapter/${ch.masterId}`} className="rounded-md border border-white/10 bg-[#0B1220] px-2 py-1 font-semibold text-white/80 hover:border-cyan-400/40 hover:text-cyan-200">
                            {ch.learnHref ? "Premium Notes" : "Chapter"}
                          </Link>
                        )}
                        <Link href={`${base}/practice?chapter=${ch.id}`} className="rounded-md border border-white/10 bg-[#0B1220] px-2 py-1 font-semibold text-white/80 hover:border-cyan-400/40 hover:text-cyan-200">Practice</Link>
                        {ch.masterId && (
                          <Link href={`/chapter/${ch.masterId}`} className="rounded-md border border-white/10 bg-[#0B1220] px-2 py-1 font-semibold text-white/60 hover:border-cyan-400/40 hover:text-cyan-200">Deep study</Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="pt-2"><Link href={base} className="text-sm text-white/45 hover:text-white">← Class dashboard</Link></div>
      </div>
    </main>
  );
}
