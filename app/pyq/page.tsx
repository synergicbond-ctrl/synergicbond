"use client";

import { Suspense, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { physical } from "@/lib/masterSyllabus/physical";
import { organic } from "@/lib/masterSyllabus/organic";
import { inorganic } from "@/lib/masterSyllabus/inorganic";
import { pyqDatabase, type PYQQuestion } from "@/lib/pyqDatabase";
import { getPYQGraph } from "@/lib/chemistry/graph";

type ExamKey = "neet" | "jeeMain" | "jeeAdvanced";

const masterSyllabus = [...physical, ...organic, ...inorganic];
const allQuestionEntries = Object.entries(pyqDatabase).flatMap(([chapterId, questions]) =>
  questions.map((question) => ({ chapterId, question }))
);

const exams: { key: ExamKey; title: string }[] = [
  { key: "neet", title: "NEET" },
  { key: "jeeMain", title: "JEE Main" },
  { key: "jeeAdvanced", title: "JEE Advanced" },
];

function examMatches(examsForChapter: string[], activeExam: ExamKey) {
  const normalized = examsForChapter.map((exam) => exam.toLowerCase().replace(/[\s_-]/g, ""));
  return normalized.includes(activeExam.toLowerCase());
}

function examKeyFromQuestion(exam: PYQQuestion["exam"]): ExamKey {
  if (exam === "NEET") return "neet";
  if (exam === "JEE ADVANCED") return "jeeAdvanced";
  return "jeeMain";
}

function normalize(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function PYQContent() {
  const searchParams = useSearchParams();
  const targetPYQ = searchParams.get("pyq") || searchParams.get("question") || "";
  const initialMatch = allQuestionEntries.find(({ question }) => question.id === targetPYQ);
  const [activeChapter, setActiveChapter] = useState<string | null>(() => initialMatch?.chapterId ?? null);
  const [activeExam, setActiveExam] = useState<ExamKey>(() =>
    initialMatch ? examKeyFromQuestion(initialMatch.question.exam) : "jeeMain"
  );
  const [chapterQuery, setChapterQuery] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("");
  const [topicFilter, setTopicFilter] = useState("");
  const [query, setQuery] = useState(() => targetPYQ);
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  const chapters = masterSyllabus.filter((chapter) => examMatches(chapter.exams, activeExam));
  const visibleChapters = chapters.filter((chapter) => {
    const q = normalize(chapterQuery);
    const difficultyMatches = !difficultyFilter || String(chapter.difficulty) === difficultyFilter;
    const chapterText = normalize([chapter.id, chapter.title, chapter.category, chapter.pyqTags.join(" ")].join(" "));
    return difficultyMatches && (!q || chapterText.includes(q));
  });
  const questions: PYQQuestion[] = useMemo(
    () => (activeChapter ? [...(pyqDatabase[activeChapter] ?? [])] : []),
    [activeChapter]
  );
  const activeChapterMeta = masterSyllabus.find((chapter) => chapter.id === activeChapter) ?? null;
  const topics = Array.from(new Set(questions.map((question) => question.topic))).sort();
  const graphByQuestionId = useMemo(
    () => new Map(questions.map((question) => [question.id, getPYQGraph(question.id)])),
    [questions]
  );

  const filteredQuestions = useMemo(() => {
    const q = normalize(query);
    return questions.filter((question) => {
      const topicMatches = !topicFilter || question.topic === topicFilter;
      const haystack = normalize([question.id, question.year, question.exam, question.topic, question.question].join(" "));
      return topicMatches && (!q || haystack.includes(q));
    });
  }, [questions, query, topicFilter]);

  const chapterIntelligence = useMemo(() => {
    const topicCounts = new Map<string, number>();
    const linkedReactionIds = new Set<string>();
    const linkedFormulaIds = new Set<string>();
    const ncertRefs = new Set<string>();
    const unsupportedTopics = new Set<string>();

    for (const question of questions) {
      topicCounts.set(question.topic, (topicCounts.get(question.topic) ?? 0) + 1);
      const graph = graphByQuestionId.get(question.id);
      graph?.reactions.forEach((reaction) => linkedReactionIds.add(reaction.id));
      graph?.formulas.forEach((formula) => linkedFormulaIds.add(formula.id));
      graph?.ncertLinks.forEach((link) => ncertRefs.add(`${link.ncertReference.class}:${link.ncertReference.chapter}:${link.ncertReference.topic}`));
      if ((graph?.reactions.length ?? 0) === 0 && (graph?.formulas.length ?? 0) === 0) {
        unsupportedTopics.add(question.topic);
      }
    }

    const topTopic = Array.from(topicCounts.entries()).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))[0] ?? null;

    return {
      totalPYQs: questions.length,
      topicCount: topicCounts.size,
      topTopic,
      linkedReactions: linkedReactionIds.size,
      linkedFormulas: linkedFormulaIds.size,
      ncertRefs: ncertRefs.size,
      unsupportedTopics: Array.from(unsupportedTopics),
    };
  }, [questions, graphByQuestionId]);

  const toggleReveal = (id: string) =>
    setRevealed((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-4 border-b border-white/10 pb-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="text-3xl font-black tracking-tight sm:text-5xl">Previous Year Questions</h1>
            <p className="mt-2 text-sm font-medium text-white/55">
              {allQuestionEntries.length} verified questions across {Object.keys(pyqDatabase).length} chapters
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {exams.map((exam) => (
              <button
                key={exam.key}
                onClick={() => {
                  setActiveExam(exam.key);
                  setActiveChapter(null);
                  setChapterQuery("");
                  setDifficultyFilter("");
                  setTopicFilter("");
                  setQuery("");
                }}
                className={`rounded-md border px-4 py-2 text-sm font-black transition ${
                  activeExam === exam.key
                    ? "border-white bg-white text-black"
                    : "border-white/15 text-white/60 hover:border-white/35"
                }`}
              >
                {exam.title}
              </button>
            ))}
          </div>
        </header>

        {!activeChapter && (
          <section className="space-y-4">
            <div className="grid gap-2 rounded-lg border border-white/10 bg-white/[0.03] p-3 sm:grid-cols-[1fr_220px]">
              <input
                value={chapterQuery}
                onChange={(event) => setChapterQuery(event.target.value)}
                placeholder="Filter chapters, category, or PYQ tags"
                className="min-h-11 rounded-md border border-white/10 bg-black/30 px-3 text-sm font-semibold text-white outline-none placeholder:text-white/30 focus:border-cyan-400"
              />
              <select
                value={difficultyFilter}
                onChange={(event) => setDifficultyFilter(event.target.value)}
                className="min-h-11 rounded-md border border-white/10 bg-black px-3 text-sm font-semibold text-white outline-none focus:border-cyan-400"
              >
                <option value="">All difficulty</option>
                {[1, 2, 3, 4, 5].map((difficulty) => (
                  <option key={difficulty} value={difficulty}>Difficulty {difficulty}</option>
                ))}
              </select>
            </div>

            {visibleChapters.length === 0 ? (
              <div className="rounded-lg border border-dashed border-white/15 p-10 text-center text-sm font-bold text-white/40">
                No chapters match this filter.
              </div>
            ) : (
              <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-4">
                {visibleChapters.map((chapter) => {
                  const count = (pyqDatabase[chapter.id] ?? []).length;
                  return (
                    <button
                      key={chapter.id}
                      onClick={() => setActiveChapter(chapter.id)}
                      className="rounded-lg border border-white/10 bg-white/[0.03] p-5 text-left transition hover:border-cyan-400/50"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h2 className="text-base font-black">{chapter.title}</h2>
                          <p className="mt-1 text-xs font-semibold capitalize text-white/40">{chapter.category}</p>
                        </div>
                        <span className={`rounded-md px-2 py-1 text-xs font-black ${
                          count > 0 ? "bg-cyan-950 text-cyan-300" : "bg-white/5 text-white/30"
                        }`}>
                          {count}
                        </span>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="rounded-md bg-fuchsia-950/70 px-2 py-1 text-[11px] font-bold text-fuchsia-200">
                          Difficulty {chapter.difficulty}
                        </span>
                        {chapter.pyqTags.slice(0, 3).map((tag) => (
                          <span key={tag} className="rounded-md bg-white/5 px-2 py-1 text-[11px] font-bold text-white/45">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </section>
        )}

        {activeChapter && activeChapterMeta && (
          <section className="space-y-6">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setActiveChapter(null);
                    setChapterQuery("");
                    setDifficultyFilter("");
                    setTopicFilter("");
                    setQuery("");
                  }}
                  className="rounded-md border border-white/10 px-3 py-2 text-sm font-bold text-white/60 hover:text-white"
                >
                  Back
                </button>
                <div>
                  <h2 className="text-2xl font-black">{activeChapterMeta.title}</h2>
                  <p className="text-xs font-semibold capitalize text-white/40">{activeChapterMeta.category}</p>
                </div>
              </div>
              <div className="grid gap-2 sm:grid-cols-[1fr_220px] lg:w-[560px]">
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search ID, topic, year, or question"
                  className="min-h-11 rounded-md border border-white/10 bg-white/[0.04] px-3 text-sm font-semibold text-white outline-none placeholder:text-white/30 focus:border-cyan-400"
                />
                <select
                  value={topicFilter}
                  onChange={(event) => setTopicFilter(event.target.value)}
                  className="min-h-11 rounded-md border border-white/10 bg-black px-3 text-sm font-semibold text-white outline-none focus:border-cyan-400"
                >
                  <option value="">All topics</option>
                  {topics.map((topic) => (
                    <option key={topic} value={topic}>{topic}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                <p className="text-xs font-black uppercase tracking-wide text-cyan-300">Chapter Intelligence</p>
                <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                  <span className="rounded-md bg-black/25 p-3"><b>{chapterIntelligence.totalPYQs}</b><br />PYQs</span>
                  <span className="rounded-md bg-black/25 p-3"><b>{chapterIntelligence.topicCount}</b><br />Topics</span>
                  <span className="rounded-md bg-black/25 p-3"><b>{chapterIntelligence.linkedReactions}</b><br />Reactions</span>
                  <span className="rounded-md bg-black/25 p-3"><b>{chapterIntelligence.linkedFormulas}</b><br />Formulas</span>
                </div>
              </div>

              <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                <p className="text-xs font-black uppercase tracking-wide text-fuchsia-300">Prediction Signals</p>
                <p className="mt-3 text-sm font-semibold text-white/80">
                  {chapterIntelligence.topTopic
                    ? `${chapterIntelligence.topTopic[0]} appears in ${chapterIntelligence.topTopic[1]} verified PYQ(s).`
                    : "No PYQs available for this chapter."}
                </p>
                <p className="mt-2 text-xs text-white/45">{activeChapterMeta.pyqTags.slice(0, 4).join(" | ")}</p>
              </div>

              <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                <p className="text-xs font-black uppercase tracking-wide text-amber-300">Weak Area Signals</p>
                {chapterIntelligence.unsupportedTopics.length > 0 ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {chapterIntelligence.unsupportedTopics.slice(0, 4).map((topic) => (
                      <span key={topic} className="rounded-md bg-amber-950/60 px-2 py-1 text-xs font-bold text-amber-200">
                        {topic}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="mt-3 text-sm font-semibold text-white/70">No unsupported topic in current verified links.</p>
                )}
              </div>
            </div>

            {filteredQuestions.length === 0 ? (
              <div className="rounded-lg border border-dashed border-white/15 p-10 text-center text-sm font-bold text-white/40">
                No PYQs match this filter.
              </div>
            ) : (
              <div className="space-y-5">
                {filteredQuestions.map((question) => {
                  const graph = graphByQuestionId.get(question.id);
                  const ncertLink = graph?.ncertLinks[0];
                  return (
                    <article key={question.id} className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-white/50">
                        <span className="rounded-md bg-white/5 px-2 py-1">{question.id}</span>
                        <span className="rounded-md bg-white/5 px-2 py-1">{question.year}</span>
                        <span className="rounded-md bg-white/5 px-2 py-1">{question.exam}</span>
                        <span className="rounded-md bg-indigo-950 px-2 py-1 text-indigo-300">{question.topic}</span>
                      </div>

                      <p className="mt-4 text-base font-semibold leading-relaxed text-white">{question.question}</p>

                      <div className="mt-4 grid gap-2 md:grid-cols-2">
                        {Object.entries(question.options).map(([key, value]) => {
                          const isCorrect = revealed[question.id] && key === question.answer;
                          return (
                            <div key={key} className={`rounded-md border p-3 text-sm ${
                              isCorrect
                                ? "border-green-500 bg-green-950/40 text-green-200"
                                : "border-white/10 bg-black/20 text-white/70"
                            }`}>
                              <span className="mr-2 font-black">{key}.</span>{value}
                            </div>
                          );
                        })}
                      </div>

                      <div className="mt-4 grid gap-3 lg:grid-cols-3">
                        <div className="rounded-lg border border-cyan-400/15 bg-cyan-950/20 p-3">
                          <p className="text-[11px] font-black uppercase tracking-wide text-cyan-300">Linked Reactions</p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {graph?.reactions.length ? graph.reactions.map((reaction) => (
                              <span key={reaction.id} className="rounded-md bg-cyan-500/10 px-2 py-1 text-xs font-bold text-cyan-200">
                                {reaction.name}
                              </span>
                            )) : <span className="text-xs font-semibold text-white/35">0 verified links</span>}
                          </div>
                        </div>

                        <div className="rounded-lg border border-emerald-400/15 bg-emerald-950/20 p-3">
                          <p className="text-[11px] font-black uppercase tracking-wide text-emerald-300">Linked Formulas</p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {graph?.formulas.length ? graph.formulas.slice(0, 4).map((formula) => (
                              <Link key={formula.id} href={`/formula-cards?id=${encodeURIComponent(formula.id)}`} className="rounded-md bg-emerald-500/10 px-2 py-1 text-xs font-bold text-emerald-200">
                                {formula.name}
                              </Link>
                            )) : <span className="text-xs font-semibold text-white/35">0 verified links</span>}
                          </div>
                        </div>

                        <div className="rounded-lg border border-sky-400/15 bg-sky-950/20 p-3">
                          <p className="text-[11px] font-black uppercase tracking-wide text-sky-300">NCERT Reference</p>
                          {ncertLink ? (
                            <p className="mt-2 text-xs font-semibold leading-relaxed text-sky-100">
                              Class {ncertLink.ncertReference.class} | {ncertLink.ncertReference.chapter} | {ncertLink.ncertReference.topic}
                            </p>
                          ) : (
                            <p className="mt-2 text-xs font-semibold text-white/35">No mapped reference</p>
                          )}
                        </div>
                      </div>

                      {revealed[question.id] && (
                        <div className="mt-4 rounded-lg border border-indigo-500/30 bg-indigo-950/40 p-4 text-sm text-slate-200">
                          <span className="font-black text-indigo-300">Answer {question.answer}: </span>
                          {question.explanation}
                        </div>
                      )}

                      <button
                        onClick={() => toggleReveal(question.id)}
                        className="mt-4 rounded-md border border-white/10 px-3 py-2 text-sm font-black text-cyan-300 hover:border-cyan-400/50"
                      >
                        {revealed[question.id] ? "Hide Answer" : "Reveal Answer"}
                      </button>
                    </article>
                  );
                })}
              </div>
            )}
          </section>
        )}
      </div>
    </main>
  );
}

export default function PYQPage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-black" />}>
      <PYQContent />
    </Suspense>
  );
}
