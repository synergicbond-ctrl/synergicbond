"use client";

import { useEffect, useMemo, useState } from "react";
import { Bookmark, CheckCircle2, ChevronLeft, ChevronRight, Flag, RotateCcw, Search, ShieldCheck } from "lucide-react";
import {
  NEET_CHEMISTRY_PYQ_STATS,
  VERIFIED_NEET_CHEMISTRY_QUESTIONS,
} from "@/lib/pyq/neetChemistryDataset";
import { NEET_CHEMISTRY_CHAPTERS } from "@/lib/pyq/neetChemistryChapters";
import type { NEETChemistryPYQQuestion } from "@/lib/pyq/neetChemistry";

type AttemptState = {
  selectedOptionId?: string;
  submitted: boolean;
  marked: boolean;
  bookmarked: boolean;
  reported: boolean;
};

type FilterState = {
  year: string;
  classLevel: string;
  domain: string;
  chapterId: string;
  topic: string;
  difficulty: string;
  search: string;
};

const DEFAULT_FILTERS: FilterState = {
  year: "",
  classLevel: "",
  domain: "",
  chapterId: "",
  topic: "",
  difficulty: "",
  search: "",
};

const DOMAIN_LABEL: Record<string, string> = {
  "physical-chemistry": "Physical",
  "inorganic-chemistry": "Inorganic",
  "organic-chemistry": "Organic",
};

function readFiltersFromUrl(): FilterState {
  if (typeof window === "undefined") return DEFAULT_FILTERS;
  const params = new URLSearchParams(window.location.search);
  return {
    year: params.get("year") || "",
    classLevel: params.get("class") || "",
    domain: params.get("domain") || "",
    chapterId: params.get("chapter") || "",
    topic: params.get("topic") || "",
    difficulty: params.get("difficulty") || "",
    search: params.get("q") || "",
  };
}

function writeFiltersToUrl(filters: FilterState) {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  params.set("program", "neet");
  for (const [key, value] of [
    ["year", filters.year],
    ["class", filters.classLevel],
    ["domain", filters.domain],
    ["chapter", filters.chapterId],
    ["topic", filters.topic],
    ["difficulty", filters.difficulty],
    ["q", filters.search],
  ]) {
    if (value) params.set(key, value);
    else params.delete(key);
  }
  const next = `${window.location.pathname}?${params.toString()}`;
  window.history.replaceState(null, "", next);
}

function applyFilters(questions: NEETChemistryPYQQuestion[], filters: FilterState) {
  const query = filters.search.trim().toLowerCase();
  const topic = filters.topic.trim().toLowerCase();
  return questions.filter((question) => {
    if (question.program !== "neet" && question.program !== "aipmt") return false;
    if (question.subject !== "chemistry") return false;
    if (filters.year && String(question.examYear) !== filters.year) return false;
    if (filters.classLevel && question.classLevel !== filters.classLevel) return false;
    if (filters.domain && question.domain !== filters.domain) return false;
    if (filters.chapterId && question.chapterId !== filters.chapterId) return false;
    if (filters.difficulty && question.difficulty !== filters.difficulty) return false;
    if (topic && !(question.topicName || "").toLowerCase().includes(topic)) return false;
    if (query) {
      const haystack = [
        question.questionText,
        question.examName,
        question.chapterName,
        question.topicName || "",
        ...question.options.map((option) => option.text),
      ].join(" ").toLowerCase();
      if (!haystack.includes(query)) return false;
    }
    return true;
  });
}

function TextWithLatex({ text, latex }: { text: string; latex?: string }) {
  if (latex) {
    return <span>{text}</span>;
  }
  return <span>{text}</span>;
}

function EmptyOfficialState() {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6 md:p-8">
      <div className="flex max-w-3xl flex-col gap-3">
        <div className="flex items-center gap-2 text-emerald-300">
          <ShieldCheck className="h-5 w-5" aria-hidden="true" />
          <span className="text-sm font-semibold uppercase tracking-wide">Verified official dataset</span>
        </div>
        <h2 className="text-2xl font-bold text-white">No verified NEET Chemistry PYQs are published yet.</h2>
        <p className="text-sm leading-6 text-white/65">
          The engine is ready, but the production list remains empty until each question is matched to an official
          examination-authority paper and answer key. Unverified staging material and commercial-book-derived records are
          intentionally excluded from this student-facing official PYQ surface.
        </p>
      </div>
    </div>
  );
}

function QuestionAttemptCard({
  question,
  number,
  total,
  attempt,
  onAttempt,
  onPrevious,
  onNext,
}: {
  question: NEETChemistryPYQQuestion;
  number: number;
  total: number;
  attempt: AttemptState;
  onAttempt: (next: AttemptState) => void;
  onPrevious: () => void;
  onNext: () => void;
}) {
  const submitted = attempt.submitted;
  const correct = submitted && attempt.selectedOptionId === question.correctOptionId;

  return (
    <article className="space-y-5 rounded-lg border border-white/10 bg-white/[0.025] p-4 md:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="space-y-2">
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="rounded bg-emerald-500/15 px-2 py-1 font-semibold text-emerald-300">Official verified</span>
            <span className="rounded bg-white/5 px-2 py-1 text-white/70">{question.examName}</span>
            <span className="rounded bg-white/5 px-2 py-1 text-white/70">{question.examYear}</span>
            <span className="rounded bg-white/5 px-2 py-1 text-white/70">{question.chapterName}</span>
            {question.topicName && <span className="rounded bg-white/5 px-2 py-1 text-white/70">{question.topicName}</span>}
            {question.difficulty && <span className="rounded bg-cyan-500/15 px-2 py-1 text-cyan-200">{question.difficulty}</span>}
          </div>
          <p className="text-sm text-white/50">
            Question {number} of {total}
          </p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => onAttempt({ ...attempt, marked: !attempt.marked })}
            className={`rounded-md border px-3 py-2 text-xs font-semibold transition ${
              attempt.marked ? "border-amber-400/50 bg-amber-400/15 text-amber-200" : "border-white/10 bg-white/5 text-white/60"
            }`}
          >
            <Flag className="mr-1 inline h-3.5 w-3.5" aria-hidden="true" />
            Review
          </button>
          <button
            type="button"
            onClick={() => onAttempt({ ...attempt, bookmarked: !attempt.bookmarked })}
            className={`rounded-md border px-3 py-2 text-xs font-semibold transition ${
              attempt.bookmarked ? "border-cyan-400/50 bg-cyan-400/15 text-cyan-200" : "border-white/10 bg-white/5 text-white/60"
            }`}
          >
            <Bookmark className="mr-1 inline h-3.5 w-3.5" aria-hidden="true" />
            Save
          </button>
        </div>
      </div>

      <p className="text-base font-medium leading-7 text-white md:text-lg">
        <TextWithLatex text={question.questionText} latex={question.questionLatex} />
      </p>

      <div className="grid gap-2">
        {question.options.map((option) => {
          const selected = attempt.selectedOptionId === option.id;
          const isCorrect = submitted && option.id === question.correctOptionId;
          const isWrong = submitted && selected && option.id !== question.correctOptionId;
          const tone = isCorrect
            ? "border-emerald-500 bg-emerald-500/15 text-emerald-100"
            : isWrong
              ? "border-rose-500 bg-rose-500/15 text-rose-100"
              : selected
                ? "border-cyan-400 bg-cyan-400/10 text-white"
                : "border-white/10 bg-black/20 text-white/75 hover:border-cyan-400/40";
          return (
            <button
              key={option.id}
              type="button"
              disabled={submitted}
              onClick={() => onAttempt({ ...attempt, selectedOptionId: option.id })}
              className={`min-h-12 rounded-lg border px-4 py-3 text-left text-sm transition ${tone}`}
            >
              <span className="mr-2 font-bold">{option.label}.</span>
              <TextWithLatex text={option.text} latex={option.latex} />
            </button>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          disabled={!attempt.selectedOptionId || submitted}
          onClick={() => onAttempt({ ...attempt, submitted: true })}
          className="rounded-md bg-cyan-500 px-4 py-2 text-sm font-bold text-black transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-white/35"
        >
          Submit Answer
        </button>
        {submitted && (
          <span className={`text-sm font-semibold ${correct ? "text-emerald-300" : "text-rose-300"}`}>
            {correct ? "Correct" : "Incorrect"}
          </span>
        )}
      </div>

      {submitted && (
        <div className="space-y-4 rounded-lg border border-indigo-400/20 bg-indigo-500/10 p-4">
          <div>
            <div className="flex items-center gap-2 text-sm font-bold text-indigo-200">
              <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
              Synergic Bond explanation
            </div>
            <p className="mt-2 text-sm leading-6 text-white/75">
              <TextWithLatex text={question.explanation} latex={question.explanationLatex} />
            </p>
          </div>
          <details className="rounded-md border border-white/10 bg-black/20 p-3 text-sm text-white/70">
            <summary className="cursor-pointer font-semibold text-white">Source details</summary>
            <dl className="mt-3 grid gap-2 md:grid-cols-2">
              <div><dt className="text-white/40">Authority</dt><dd>{question.officialSource.authority}</dd></div>
              <div><dt className="text-white/40">Document</dt><dd>{question.officialSource.documentTitle}</dd></div>
              <div><dt className="text-white/40">Exam</dt><dd>{question.examName} {question.examYear}</dd></div>
              <div><dt className="text-white/40">Paper code</dt><dd>{question.paperCode || question.officialSource.officialPaperCode || "Not recorded"}</dd></div>
              <div><dt className="text-white/40">Official question no.</dt><dd>{question.officialSource.questionNumber || "Not recorded"}</dd></div>
              <div><dt className="text-white/40">Verified</dt><dd>{question.officialSource.verifiedAt || "Verification notes recorded"}</dd></div>
            </dl>
          </details>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
        <button
          type="button"
          onClick={() => onAttempt({ ...attempt, reported: true })}
          className="text-xs font-semibold text-white/45 transition hover:text-amber-200"
        >
          {attempt.reported ? "Error report noted locally" : "Report an issue"}
        </button>
        <div className="flex gap-2">
          <button type="button" onClick={onPrevious} className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/70">
            <ChevronLeft className="inline h-4 w-4" aria-hidden="true" />
            Previous
          </button>
          <button type="button" onClick={onNext} className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/70">
            Next
            <ChevronRight className="inline h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
}

export default function NEETChemistryPYQEngine() {
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [attempts, setAttempts] = useState<Record<string, AttemptState>>({});

  useEffect(() => {
    setFilters(readFiltersFromUrl());
  }, []);

  useEffect(() => {
    writeFiltersToUrl(filters);
    setCurrentIndex(0);
  }, [filters]);

  const questions = useMemo(() => applyFilters(VERIFIED_NEET_CHEMISTRY_QUESTIONS, filters), [filters]);
  const years = useMemo(
    () => Array.from(new Set(VERIFIED_NEET_CHEMISTRY_QUESTIONS.map((question) => question.examYear))).sort((a, b) => b - a),
    [],
  );
  const topics = useMemo(
    () => Array.from(new Set(VERIFIED_NEET_CHEMISTRY_QUESTIONS.map((question) => question.topicName).filter(Boolean))).sort() as string[],
    [],
  );
  const current = questions[currentIndex];
  const attemptedCount = Object.values(attempts).filter((attempt) => attempt.submitted).length;
  const correctCount = questions.filter((question) => attempts[question.id]?.submitted && attempts[question.id]?.selectedOptionId === question.correctOptionId).length;

  const updateFilter = (key: keyof FilterState, value: string) => setFilters((prev) => ({ ...prev, [key]: value }));
  const resetFilters = () => setFilters(DEFAULT_FILTERS);

  return (
    <section className="space-y-6" aria-label="NEET Chemistry verified PYQ engine">
      <div className="grid gap-3 md:grid-cols-4">
        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs uppercase text-white/40">Verified questions</p>
          <p className="mt-1 text-2xl font-bold text-white">{NEET_CHEMISTRY_PYQ_STATS.verifiedOfficial}</p>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs uppercase text-white/40">Pending</p>
          <p className="mt-1 text-2xl font-bold text-white">{NEET_CHEMISTRY_PYQ_STATS.pending}</p>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs uppercase text-white/40">Rejected</p>
          <p className="mt-1 text-2xl font-bold text-white">{NEET_CHEMISTRY_PYQ_STATS.rejected}</p>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs uppercase text-white/40">Attempted here</p>
          <p className="mt-1 text-2xl font-bold text-white">{attemptedCount}/{questions.length}</p>
        </div>
      </div>

      <div className="rounded-lg border border-amber-400/20 bg-amber-400/10 p-4 text-sm leading-6 text-amber-100">
        Synergic Bond is an independent educational platform and is not affiliated with NTA, CBSE, NEET, AIPMT,
        JEE, or any commercial publisher. Questions identified as official PYQs appear here only after
        examination-authority source verification. Explanations are independently written by Synergic Bond.
      </div>

      <div className="space-y-3 rounded-lg border border-white/10 bg-white/[0.025] p-4">
        <div className="grid gap-2 md:grid-cols-4">
          <select value={filters.year} onChange={(event) => updateFilter("year", event.target.value)} className="rounded-md border border-white/10 bg-black px-3 py-2 text-sm text-white">
            <option value="">All years</option>
            {years.map((year) => <option key={year} value={year}>{year}</option>)}
          </select>
          <select value={filters.classLevel} onChange={(event) => updateFilter("classLevel", event.target.value)} className="rounded-md border border-white/10 bg-black px-3 py-2 text-sm text-white">
            <option value="">Class 11 + 12</option>
            <option value="11">Class 11</option>
            <option value="12">Class 12</option>
          </select>
          <select value={filters.domain} onChange={(event) => updateFilter("domain", event.target.value)} className="rounded-md border border-white/10 bg-black px-3 py-2 text-sm text-white">
            <option value="">All domains</option>
            {Object.entries(DOMAIN_LABEL).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
          </select>
          <select value={filters.difficulty} onChange={(event) => updateFilter("difficulty", event.target.value)} className="rounded-md border border-white/10 bg-black px-3 py-2 text-sm text-white">
            <option value="">All difficulty</option>
            <option value="easy">Easy</option>
            <option value="moderate">Moderate</option>
            <option value="difficult">Difficult</option>
          </select>
        </div>
        <div className="grid gap-2 md:grid-cols-[1fr_1fr_140px]">
          <select value={filters.chapterId} onChange={(event) => updateFilter("chapterId", event.target.value)} className="rounded-md border border-white/10 bg-black px-3 py-2 text-sm text-white">
            <option value="">All chapters</option>
            {NEET_CHEMISTRY_CHAPTERS.map((chapter) => (
              <option key={chapter.id} value={chapter.id}>{chapter.name}</option>
            ))}
          </select>
          <select value={filters.topic} onChange={(event) => updateFilter("topic", event.target.value)} className="rounded-md border border-white/10 bg-black px-3 py-2 text-sm text-white">
            <option value="">All topics</option>
            {topics.map((topic) => <option key={topic} value={topic}>{topic}</option>)}
          </select>
          <button type="button" onClick={resetFilters} className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white/70">
            <RotateCcw className="mr-1 inline h-4 w-4" aria-hidden="true" />
            Reset
          </button>
        </div>
        <label className="relative block">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-white/35" aria-hidden="true" />
          <input
            type="search"
            value={filters.search}
            onChange={(event) => updateFilter("search", event.target.value)}
            placeholder="Search verified question text"
            className="w-full rounded-md border border-white/10 bg-black py-2 pl-9 pr-3 text-sm text-white placeholder:text-white/35"
          />
        </label>
      </div>

      {questions.length === 0 ? (
        <EmptyOfficialState />
      ) : current ? (
        <div className="space-y-4">
          <QuestionAttemptCard
            question={current}
            number={currentIndex + 1}
            total={questions.length}
            attempt={attempts[current.id] || { submitted: false, marked: false, bookmarked: false, reported: false }}
            onAttempt={(next) => setAttempts((prev) => ({ ...prev, [current.id]: next }))}
            onPrevious={() => setCurrentIndex((index) => Math.max(0, index - 1))}
            onNext={() => setCurrentIndex((index) => Math.min(questions.length - 1, index + 1))}
          />
          <div className="flex flex-wrap gap-2">
            {questions.map((question, index) => {
              const attempt = attempts[question.id];
              const tone = attempt?.submitted
                ? attempt.selectedOptionId === question.correctOptionId
                  ? "border-emerald-400 bg-emerald-400/15 text-emerald-100"
                  : "border-rose-400 bg-rose-400/15 text-rose-100"
                : attempt?.marked
                  ? "border-amber-400 bg-amber-400/15 text-amber-100"
                  : "border-white/10 bg-white/5 text-white/60";
              return (
                <button key={question.id} type="button" onClick={() => setCurrentIndex(index)} className={`h-9 w-9 rounded-md border text-sm font-bold ${tone}`}>
                  {index + 1}
                </button>
              );
            })}
          </div>
          <p className="text-xs text-white/45">Correct in this filtered set: {correctCount}</p>
        </div>
      ) : null}
    </section>
  );
}
