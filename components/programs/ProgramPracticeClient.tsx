"use client";

import { useMemo, useState } from "react";
import {
  ALL_PYQ_QUESTIONS,
  getByExam,
  getAllChapterStats,
  getDifficultyDistribution,
  searchPYQ,
  filterPYQ,
} from "@/lib/pyq";
import type { PYQExam, PYQChapter, PYQDifficulty, PYQFilter } from "@/lib/pyq";
import QuestionCard from "@/components/pyq/QuestionCard";

// ─────────────────────────────────────────────────────────────────────────────
// Program-scoped practice (Roadmap V2 · Week 3) — wires the EXISTING lib/pyq
// engine (getByExam / searchPYQ / filterPYQ / analytics) and the existing
// QuestionCard into a program UI locked to one exam. No new schemas, no new
// question data; every count is derived from the PYQ SSOT.
// ─────────────────────────────────────────────────────────────────────────────

const DIFFICULTIES: PYQDifficulty[] = ["Easy", "Moderate", "Hard", "Olympiad"];
const RESULT_CAP = 30;

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`shrink-0 whitespace-nowrap rounded-lg border px-3 py-1.5 text-xs font-semibold transition ${
        active
          ? "border-cyan-400/50 bg-cyan-500/15 text-white"
          : "border-white/10 bg-white/[0.03] text-white/60 hover:text-white/85"
      }`}
    >
      {children}
    </button>
  );
}

export default function ProgramPracticeClient({ exam }: { exam: PYQExam }) {
  const [query, setQuery] = useState("");
  const [chapter, setChapter] = useState<PYQChapter | null>(null);
  const [subtopic, setSubtopic] = useState<string | null>(null);
  const [difficulty, setDifficulty] = useState<PYQDifficulty | null>(null);

  const examQuestions = useMemo(() => getByExam(ALL_PYQ_QUESTIONS, exam), [exam]);

  // Basic question analytics — real counts from the exam's question pool.
  const chapterStats = useMemo(() => getAllChapterStats(examQuestions), [examQuestions]);
  const difficultyDist = useMemo(() => getDifficultyDistribution(examQuestions), [examQuestions]);
  const subtopics = useMemo(() => {
    const counts = new Map<string, number>();
    const source = chapter ? examQuestions.filter((q) => q.chapter === chapter) : examQuestions;
    for (const q of source) counts.set(q.subtopic, (counts.get(q.subtopic) ?? 0) + 1);
    return [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 12);
  }, [examQuestions, chapter]);

  const filter: PYQFilter = useMemo(() => {
    const f: PYQFilter = { exam };
    if (chapter) f.chapter = chapter;
    if (subtopic) f.subtopic = subtopic;
    if (difficulty) f.difficulty = difficulty;
    return f;
  }, [exam, chapter, subtopic, difficulty]);

  const results = useMemo(() => {
    if (query.trim()) {
      return searchPYQ(ALL_PYQ_QUESTIONS, query, filter, RESULT_CAP).map((r) => r.question);
    }
    return filterPYQ(ALL_PYQ_QUESTIONS, filter);
  }, [query, filter]);

  const shown = results.slice(0, RESULT_CAP);
  const hasRefinement = Boolean(query.trim() || chapter || subtopic || difficulty);

  const clearAll = () => {
    setQuery("");
    setChapter(null);
    setSubtopic(null);
    setDifficulty(null);
  };

  return (
    <div className="space-y-8">
      {/* Basic analytics — most-asked chapters for this exam */}
      <section>
        <h2 className="mb-2 text-lg font-bold">Most asked chapters</h2>
        <p className="mb-4 text-sm text-zinc-500">
          {examQuestions.length} verified {exam} PYQs across {chapterStats.length} chapters
        </p>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {chapterStats.slice(0, 6).map((s) => (
            <button
              key={s.chapter}
              onClick={() => setChapter((prev) => (prev === s.chapter ? null : s.chapter))}
              className={`rounded-xl border p-3 text-left transition ${
                chapter === s.chapter
                  ? "border-cyan-400/50 bg-cyan-500/10"
                  : "border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04]"
              }`}
            >
              <div className="text-sm font-bold text-white">{s.chapter}</div>
              <div className="mt-0.5 text-xs text-white/45">{s.totalQuestions} questions</div>
            </button>
          ))}
        </div>
      </section>

      {/* Filters */}
      <section className="space-y-4">
        <input
          type="text"
          placeholder="Search by concept, reaction, reagent, exception…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 transition focus:border-cyan-500 focus:outline-none"
        />

        <div>
          <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-white/40">Chapter practice</p>
          <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 md:flex-wrap">
            {chapterStats.map((s) => (
              <Chip
                key={s.chapter}
                active={chapter === s.chapter}
                onClick={() => {
                  setChapter((prev) => (prev === s.chapter ? null : s.chapter));
                  setSubtopic(null);
                }}
              >
                {s.chapter} <span className="text-white/40">{s.totalQuestions}</span>
              </Chip>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-white/40">Topic practice</p>
          <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 md:flex-wrap">
            {subtopics.map(([topic, count]) => (
              <Chip key={topic} active={subtopic === topic} onClick={() => setSubtopic((p) => (p === topic ? null : topic))}>
                {topic} <span className="text-white/40">{count}</span>
              </Chip>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 text-[11px] font-bold uppercase tracking-wider text-white/40">Difficulty</p>
          <div className="flex flex-wrap gap-2">
            {DIFFICULTIES.filter((d) => difficultyDist[d] > 0).map((d) => (
              <Chip key={d} active={difficulty === d} onClick={() => setDifficulty((p) => (p === d ? null : d))}>
                {d} <span className="text-white/40">{difficultyDist[d]}</span>
              </Chip>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-xs text-white/50">
            {results.length} question{results.length === 1 ? "" : "s"}
            {results.length > RESULT_CAP ? ` — showing first ${RESULT_CAP}` : ""}
          </p>
          {hasRefinement && (
            <button onClick={clearAll} className="text-xs text-cyan-400 transition hover:text-cyan-300">
              Clear all filters
            </button>
          )}
        </div>
      </section>

      {/* Results */}
      {shown.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-white/12 bg-white/[0.02] p-8 text-center">
          <p className="text-sm font-semibold text-white/60">No questions match these filters.</p>
          <p className="mt-1 text-xs text-white/35">Try clearing a filter — only verified {exam} PYQs are shown.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {shown.map((q) => (
            <QuestionCard key={q.id} question={q} attemptSource="practice" />
          ))}
        </div>
      )}
    </div>
  );
}
