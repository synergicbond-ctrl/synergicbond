import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { isFreeChapter } from "@/lib/freeChapters";
import { getUserEntitlements } from "@/lib/access/entitlements";
import { masterSyllabus } from "@/lib/masterSyllabus/all";
import { getProgram } from "@/lib/programs";
import { ALL_PYQ_QUESTIONS, getChapterStats } from "@/lib/pyq";
import type { PYQChapter } from "@/lib/pyq";
import { getAllUserAnswers } from "@/lib/attempts/store";
import { buildMistakeJournal } from "@/lib/attempts/mistakes";
import {
  ENGINE_PROGRAMS, isEngineSlug, CHAPTER_PYQ_MAP, AUTHORED_NOTES,
} from "@/lib/engine/programSpec";
import { buildNcertIntel, type Importance } from "@/lib/engine/ncertIntel";
import { buildChapterMastery } from "@/lib/engine/mastery";
import EngineQuestionBank from "@/components/engine/EngineQuestionBank";
import IllustrationLab from "@/components/engine/IllustrationLab";
import TutorActions from "@/components/engine/TutorActions";
import QuestionCard from "@/components/pyq/QuestionCard";
import NotesRenderer from "@/components/premiumNotes/NotesRenderer";
import { getPremiumNotes } from "@/lib/premiumNotes";

// ─────────────────────────────────────────────────────────────────────────────
// /programs/[slug]/chapter/[id] — the premium Chapter Experience (learning
// engine). Program-locked (NEET / JEE Main / JEE Advanced — no mixing) and
// chapter-scoped. Eleven sections, all real or honestly AI-on-demand:
//   Mastery · Learn · NCERT Intelligence · Solved Illustrations · Misc
//   Examples · Question Bank · Innovation Lab · PYQ Center · Mock Tests ·
//   Error Analysis · AI Tutor.
// Dashboards (program hubs) are untouched — this is the layer beneath them.
// ─────────────────────────────────────────────────────────────────────────────

export const dynamic = "force-dynamic";

interface DirChapter {
  id: string;
  title: string;
  category: string;
  difficulty: number;
  estimatedHours: number;
  exams: string[];
  concepts: { id: string; title: string; description?: string }[];
}
const CHAPTERS = masterSyllabus as unknown as DirChapter[];

export async function generateMetadata({ params }: { params: Promise<{ slug: string; id: string }> }) {
  const { slug, id } = await params;
  const ch = CHAPTERS.find((c) => c.id === id);
  const p = isEngineSlug(slug) ? ENGINE_PROGRAMS[slug] : undefined;
  return ch && p ? { title: `${ch.title} — ${p.name} Chapter Engine` } : {};
}

const IMPORTANCE_TONE: Record<Importance, string> = {
  high: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  medium: "border-amber-400/30 bg-amber-400/10 text-amber-300",
  low: "border-white/10 bg-white/[0.04] text-white/45",
};

const SECTIONS = [
  { id: "mastery", label: "Mastery" },
  { id: "learn", label: "Learn" },
  { id: "ncert", label: "NCERT" },
  { id: "illustrations", label: "Illustrations" },
  { id: "misc", label: "Misc Examples" },
  { id: "question-bank", label: "Question Bank" },
  { id: "innovation", label: "Innovation Lab" },
  { id: "pyq", label: "PYQ Center" },
  { id: "tests", label: "Mock Tests" },
  { id: "errors", label: "Error Analysis" },
  { id: "tutor", label: "AI Tutor" },
];

export default async function ChapterEnginePage({ params }: { params: Promise<{ slug: string; id: string }> }) {
  const { slug, id } = await params;
  if (!isEngineSlug(slug)) notFound();
  const engine = ENGINE_PROGRAMS[slug];
  const program = getProgram(slug);
  const chapter = CHAPTERS.find((c) => c.id === id);
  if (!chapter || !program) notFound();
  // Program lock: the chapter must belong to this program's verified syllabus.
  if (!chapter.exams.includes(engine.examTag)) notFound();

  // Access gate — mirrors /chapter/[id]: free flagship chapters pass through;
  // premium chapters need Pro or a purchased-program entitlement. Server
  // redirect means zero premium content reaches unauthorized clients.
  if (!isFreeChapter(id)) {
    const { hasUser, keys } = await getUserEntitlements();
    if (!hasUser) redirect(`/auth/signin?next=/programs/${slug}/chapter/${id}`);
    if (!keys.has(slug)) redirect("/pricing");
  }

  const base = `/programs/${slug}`;
  const pyqChapters: PYQChapter[] = CHAPTER_PYQ_MAP[id] ?? [];
  const scope = new Set<string>(pyqChapters);
  const examPool = ALL_PYQ_QUESTIONS.filter((q) => scope.has(q.chapter) && q.exam === engine.exam);
  const ncert = buildNcertIntel(pyqChapters);
  const topics = chapter.concepts.map((c) => c.title).slice(0, 10);
  const authoredHref = AUTHORED_NOTES[id];
  const premiumNotes = getPremiumNotes(id);

  // Per-user layers (route is auth-protected; degrade gracefully regardless).
  const { data: answers } = await getAllUserAnswers();
  const mastery = buildChapterMastery(answers ?? [], pyqChapters, engine.exam);
  const journal = buildMistakeJournal(answers ?? []);
  const chapterMistakes = journal.reattemptQueue.filter((m) => scope.has(m.chapter));
  const catCounts = { Concept: 0, Calculation: 0, Memory: 0 } as Record<string, number>;
  for (const m of chapterMistakes) catCounts[m.category] += 1;
  // Recovery questions: fresh bank questions on this chapter's weak topics.
  const weakTopics = new Set(journal.weakConcepts.filter((w) => scope.has(w.chapter)).map((w) => w.topic));
  const wrongIds = new Set(chapterMistakes.map((m) => m.questionId));
  const recovery = examPool.filter((q) => weakTopics.has(q.subtopic) && !wrongIds.has(q.id)).slice(0, 3);

  // PYQ Center stats — real counts from the verified bank, SCOPED to THIS
  // program's exam (examPool) so counts never mix in other programs' questions.
  const stats = pyqChapters.map((c) => getChapterStats(examPool, c));

  const bandTone = mastery.band === "strong" ? "text-emerald-300" : mastery.band === "onTrack" ? "text-amber-300" : "text-white/60";

  return (
    <main className="min-h-screen bg-[#0B1220] text-white">
      {/* Header */}
      <div className="border-b border-white/10 bg-gradient-to-b from-cyan-950/20 to-[#0B1220] px-4 py-8 sm:px-6 sm:py-10">
        <div className="mx-auto max-w-5xl">
          <nav className="mb-3 text-sm text-white/45">
            <Link href={base} className="hover:text-white">{engine.name}</Link>
            <span className="mx-1.5">/</span>
            <Link href={`${base}/learn`} className="hover:text-white">Learn</Link>
            <span className="mx-1.5">/</span><span className="text-white/80">{chapter.title}</span>
          </nav>
          <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-cyan-300/80">{engine.name} · Chapter Engine</div>
          <h1 className="mt-1 text-2xl font-black tracking-tight sm:text-4xl">{chapter.title}</h1>
          <div className="mt-2 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 font-semibold text-white/60 capitalize">{chapter.category}</span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 font-semibold text-white/60">Difficulty {chapter.difficulty}/5</span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 font-semibold text-white/60">~{chapter.estimatedHours}h</span>
            <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2 py-0.5 font-semibold text-cyan-300">{examPool.length} verified {engine.name} PYQs</span>
          </div>
        </div>
      </div>

      {/* Section nav (mobile-first horizontal scroll) */}
      <div className="sticky top-0 z-10 border-b border-white/10 bg-[#0B1220]/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl gap-1.5 overflow-x-auto px-4 py-2 sm:px-6">
          {SECTIONS.map((s) => (
            <a key={s.id} href={`#${s.id}`}
              className="shrink-0 whitespace-nowrap rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-semibold text-white/60 hover:text-white">
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-5xl space-y-10 px-4 py-8 sm:px-6">
        {/* 11 · Chapter Mastery (surfaced first — it frames everything) */}
        <section id="mastery" className="scroll-mt-16">
          <h2 className="mb-3 text-lg font-black">Chapter Mastery</h2>
          {!mastery.hasData ? (
            <p className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-sm text-white/55">
              No attempts on this chapter yet — answer questions below and every mastery component builds from your real activity.
            </p>
          ) : (
            <div className="grid gap-3 sm:grid-cols-5">
              <div className="rounded-2xl border border-cyan-500/25 bg-cyan-500/[0.05] p-4 text-center">
                <div className={`text-3xl font-black ${bandTone}`}>{mastery.overall}%</div>
                <div className="mt-1 text-xs text-white/50">Overall Mastery</div>
              </div>
              {mastery.components.map((c) => (
                <div key={c.key} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
                  <div className="text-2xl font-black text-white/85">{c.building ? "—" : `${c.value}%`}</div>
                  <div className="mt-1 text-xs font-bold text-white/60">{c.label}</div>
                  <div className="mt-0.5 text-[10px] text-white/35">{c.building ? "building" : c.detail}</div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* 1 · Learn — Premium Notes Engine when authored, syllabus grid otherwise */}
        <section id="learn" className="scroll-mt-16">
          <h2 className="mb-1 text-lg font-black">Learn</h2>
          {premiumNotes ? (
            <>
              <p className="mb-3 text-sm text-white/50">
                Full premium notes — topic → subtopic with detailed & visual notes, focus points, exam traps, mistakes, exceptions, memory tricks, solved illustrations, misc examples and revision sheets, scoped to {engine.name}.
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {authoredHref && (
                  <Link href={authoredHref} className="rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white/80 hover:bg-white/[0.08]">Visual summary page →</Link>
                )}
                <Link href={`/chapter/${id}`} className="rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white/80 hover:bg-white/[0.08]">Chapter workspace →</Link>
                {id === "mole-concept" && (
                  <>
                    <Link href="/notes/mole-concept" className="rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-bold text-cyan-300 hover:bg-cyan-500/20">Transcribed Notes Hub →</Link>
                    <Link href="/notes/mole-concept/part1" className="rounded-xl border border-lime-400/30 bg-lime-500/10 px-4 py-2 text-sm font-semibold text-lime-300 hover:bg-lime-500/20">Mole Concept Part 1 →</Link>
                    <Link href="/notes/concentration-terms" className="rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-300 hover:bg-red-500/20">Concentration Terms (Parts 1–3) →</Link>
                    <Link href="/notes/stoichiometry" className="rounded-xl border border-amber-400/30 bg-amber-500/10 px-4 py-2 text-sm font-semibold text-amber-300 hover:bg-amber-500/20">Stoichiometry Part 1 →</Link>
                  </>
                )}
              </div>
              <NotesRenderer notes={premiumNotes} exam={engine.exam} />
            </>
          ) : (
            <>
              <p className="mb-3 text-sm text-white/50">Topics & subtopics from the official syllabus. Full premium notes (the Chemical Bonding template) are being authored chapter by chapter.</p>
              <div className="mb-3 flex flex-wrap gap-2">
                {authoredHref ? (
                  <Link href={authoredHref} className="rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-4 py-2 text-sm font-black text-black">Open premium visual notes →</Link>
                ) : (
                  <span className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/50">Premium notes for this chapter are being authored — the official syllabus and full question layer below are live.</span>
                )}
                <Link href={`/chapter/${id}`} className="rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white/80 hover:bg-white/[0.08]">Chapter workspace →</Link>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                {chapter.concepts.map((c) => (
                  <div key={c.id} className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-3">
                    <div className="text-sm font-bold text-white/90">{c.title}</div>
                    {c.description && <p className="mt-0.5 text-xs text-white/50">{c.description}</p>}
                  </div>
                ))}
              </div>
            </>
          )}
        </section>

        {/* 2 · NCERT Intelligence */}
        <section id="ncert" className="scroll-mt-16">
          <h2 className="mb-1 text-lg font-black">NCERT Intelligence</h2>
          <p className="mb-3 text-sm text-white/50">
            Every NCERT line the verified bank&apos;s questions cite for this chapter, with importance derived from real question counts per exam — plus {ncert.ncertDirect.length} NCERT-direct questions. (Universe: lines cited by the verified bank; full line-by-line NCERT text is not fabricated.)
          </p>
          {ncert.lines.length === 0 ? (
            <p className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-sm text-white/55">No NCERT citations tagged for this chapter&apos;s bank questions yet.</p>
          ) : (
            <div className="space-y-2">
              {ncert.lines.map((l) => (
                <div key={l.line} className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-white/[0.08] bg-white/[0.02] p-3">
                  <span className="min-w-0 text-sm font-semibold text-white/85">{l.line}</span>
                  {/* Program isolation: only THIS program's importance is shown. */}
                  <span className="flex shrink-0 gap-1.5 text-[10px] font-bold">
                    {engine.exam === "NEET" && <span className={`rounded-full border px-2 py-0.5 ${IMPORTANCE_TONE[l.importance.neet]}`}>{l.byExam.neet} question{l.byExam.neet === 1 ? "" : "s"}</span>}
                    {engine.exam === "JEE Main" && <span className={`rounded-full border px-2 py-0.5 ${IMPORTANCE_TONE[l.importance.jeeMain]}`}>{l.byExam.jeeMain} question{l.byExam.jeeMain === 1 ? "" : "s"}</span>}
                    {engine.exam === "JEE Advanced" && <span className={`rounded-full border px-2 py-0.5 ${IMPORTANCE_TONE[l.importance.jeeAdvanced]}`}>{l.byExam.jeeAdvanced} question{l.byExam.jeeAdvanced === 1 ? "" : "s"}</span>}
                  </span>
                </div>
              ))}
              <p className="text-xs text-white/35">Counts = real questions citing each line · <Link href="/ncert" className="text-cyan-300 hover:underline">full NCERT blind-spot report →</Link></p>
            </div>
          )}
        </section>

        {/* 3 · Solved Illustrations */}
        <section id="illustrations" className="scroll-mt-16">
          <h2 className="mb-1 text-lg font-black">Solved Illustrations</h2>
          <p className="mb-3 text-sm text-white/50">Worked examples with the thinking process, full solution, fast method, alternate method and common mistakes.</p>
          <IllustrationLab mode="illustration" exam={engine.exam} chapterTitle={chapter.title} topics={topics} />
        </section>

        {/* 4 · Miscellaneous Examples */}
        <section id="misc" className="scroll-mt-16">
          <h2 className="mb-1 text-lg font-black">Miscellaneous Examples</h2>
          <p className="mb-3 text-sm text-white/50">Mixed-concept examples — Easy · Medium · Hard · Challenge.</p>
          <IllustrationLab mode="misc" exam={engine.exam} chapterTitle={chapter.title} topics={topics} />
        </section>

        {/* 5 · Question Bank */}
        <section id="question-bank" className="scroll-mt-16">
          <h2 className="mb-1 text-lg font-black">Question Bank</h2>
          <p className="mb-3 text-sm text-white/50">{engine.name} formats only — verified bank types are auto-graded and feed your analytics; AI formats are labelled by source.</p>
          <EngineQuestionBank slug={slug} chapters={pyqChapters} chapterTitle={chapter.title} />
        </section>

        {/* 6 · Innovation Lab */}
        <section id="innovation" className="scroll-mt-16">
          <h2 className="mb-1 text-lg font-black">Innovation Lab</h2>
          <p className="mb-3 text-sm text-white/50">Brand-new pattern questions — concept combinations, multi-chapter links, examiner-style and surprise framings. Explicitly not PYQs.</p>
          <IllustrationLab mode="innovation" exam={engine.exam} chapterTitle={chapter.title} topics={topics} />
        </section>

        {/* 7 · PYQ Center */}
        <section id="pyq" className="scroll-mt-16">
          <h2 className="mb-1 text-lg font-black">PYQ Center</h2>
          <p className="mb-3 text-sm text-white/50">Real frequency, trend and concept data from the verified bank. Practise them in the Question Bank above (SCQ / A–R tabs) — attempts are recorded.</p>
          {stats.length === 0 ? (
            <p className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-sm text-white/55">No PYQ-bank mapping for this chapter yet — honest gap, nothing faked.</p>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2">
              {stats.map((s) => (
                <div key={s.chapter} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-baseline justify-between">
                    <span className="font-black text-white/90">{s.chapter}</span>
                    <span className={`text-xs font-bold ${s.trend === "Increasing" ? "text-emerald-300" : s.trend === "Decreasing" ? "text-rose-300" : "text-white/50"}`}>{s.trend}</span>
                  </div>
                  <div className="mt-2 grid grid-cols-3 gap-2 text-center text-xs">
                    <div><div className="text-lg font-black text-white/85">{s.totalQuestions}</div><div className="text-white/40">questions</div></div>
                    <div><div className="text-lg font-black text-white/85">{s.lastAsked}</div><div className="text-white/40">last asked</div></div>
                    <div><div className="text-lg font-black text-white/85">{s.avgDifficulty.toFixed(1)}</div><div className="text-white/40">avg difficulty</div></div>
                  </div>
                  {s.topConcepts.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {s.topConcepts.slice(0, 4).map((c) => (
                        <span key={c.concept} className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] text-white/55">{c.concept} ·{c.count}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
          <p className="mt-2 text-xs text-white/35"><Link href={`${base}/practice`} className="text-cyan-300 hover:underline">Full {engine.name} PYQ practice with filters →</Link></p>
        </section>

        {/* 8 · Mock Tests */}
        <section id="tests" className="scroll-mt-16">
          <h2 className="mb-1 text-lg font-black">Mock Tests</h2>
          <div className="grid gap-2 sm:grid-cols-3">
            <Link href={`${base}/tests`} className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-3 text-sm font-semibold text-white/90 hover:border-cyan-400/40">Chapter & topic tests <span className="text-cyan-400">→</span></Link>
            <Link href="/exam" className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-3 text-sm font-semibold text-white/90 hover:border-cyan-400/40">Full {engine.name} paper (real size & marking) <span className="text-cyan-400">→</span></Link>
            <Link href="/revision" className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-3 text-sm font-semibold text-white/90 hover:border-cyan-400/40">Review past attempts <span className="text-cyan-400">→</span></Link>
          </div>
        </section>

        {/* 9 · Error Analysis */}
        <section id="errors" className="scroll-mt-16">
          <h2 className="mb-1 text-lg font-black">Error Analysis</h2>
          {chapterMistakes.length === 0 ? (
            <p className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-sm text-white/55">No wrong answers recorded on this chapter — your error profile builds automatically as you practise.</p>
          ) : (
            <>
              <div className="mb-3 grid grid-cols-3 gap-2">
                {(["Concept", "Calculation", "Memory"] as const).map((c) => (
                  <div key={c} className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center">
                    <div className="text-xl font-black text-rose-300">{catCounts[c]}</div>
                    <div className="text-xs text-white/50">{c} errors</div>
                  </div>
                ))}
              </div>
              {recovery.length > 0 && (
                <>
                  <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-white/40">Recovery questions (fresh, on your weak topics)</h3>
                  <div className="space-y-3">
                    {recovery.map((q) => <QuestionCard key={q.id} question={q} attemptSource="practice" examScope={engine.exam} />)}
                  </div>
                </>
              )}
              <p className="mt-3 text-xs text-white/35"><Link href="/mistakes" className="text-cyan-300 hover:underline">Full Mistake Journal with reattempts →</Link></p>
            </>
          )}
        </section>

        {/* 10 · AI Tutor */}
        <section id="tutor" className="scroll-mt-16">
          <h2 className="mb-1 text-lg font-black">AI Tutor</h2>
          <p className="mb-3 text-sm text-white/50">One-tap actions on this chapter — explain again, simpler, advanced, similar questions, revision notes, formula sheet.</p>
          <TutorActions chapterId={id} chapterTitle={chapter.title} />
        </section>

        <div className="pt-2"><Link href={`${base}/learn`} className="text-sm text-white/45 hover:text-white">← {engine.name} chapters</Link></div>
      </div>
    </main>
  );
}
