"use client";

import { useEffect, useMemo, useRef, useState, type ChangeEvent } from "react";
import Link from "next/link";
import AddToRevision from "@/components/revision/AddToRevision";
import { submitAttempt } from "@/lib/attempts/client";
import type { AttemptRecord } from "@/lib/attempts/schema";
import {
  ALL_PYQ_QUESTIONS,
  type PYQDifficulty,
  type PYQExam,
  type PYQQuestion,
} from "@/lib/pyq";
import { renderChemistry } from "@/lib/renderChemistry";

type TestMode = "exam" | "practice";
type BuilderKind = "chapter" | "pyq" | "custom";
type SubmitState = "idle" | "saving" | "saved" | "local";
type DifficultyChoice = "Mixed" | PYQDifficulty;
type QuestionTypeChoice = "All" | PYQQuestion["questionType"];

type TestSession = {
  id: string;
  title: string;
  questions: PYQQuestion[];
  timerMinutes: number;
  mode: TestMode;
};

type PersistedRun = {
  session: TestSession;
  answers: Record<string, string>;
  marked: Record<string, boolean>;
  current: number;
  startedAtMs: number;
  endAtMs: number | null;
  timeByQuestion: Record<number, number>;
};

type BuilderConfig = {
  exam: PYQExam | "All";
  chapter: string;
  chapters: string[];
  difficulty: DifficultyChoice;
  count: number;
  timerMinutes: number;
  yearFrom: number;
  yearTo: number;
  questionType: QuestionTypeChoice;
  ncertOnly: boolean;
  trendingOnly: boolean;
  mode: TestMode;
};

const ACTIVE_RUN_KEY = "sb_active_test_v2";
const EXAMS: PYQExam[] = ["JEE Main", "JEE Advanced", "NEET"];
const DIFFICULTIES: DifficultyChoice[] = ["Mixed", "Easy", "Moderate", "Hard", "Olympiad"];
const QUESTION_TYPES: QuestionTypeChoice[] = [
  "All",
  "MCQ-Single",
  "MCQ-Multiple",
  "Integer",
  "Numerical",
  "Assertion-Reason",
];
const COUNTS = [10, 20, 30, 45];
const TIMERS = [0, 10, 20, 30, 60];

function unique<T>(items: T[]): T[] {
  return [...new Set(items)];
}

function shuffle<T>(items: T[]): T[] {
  const out = [...items];
  for (let index = out.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(Math.random() * (index + 1));
    [out[index], out[swap]] = [out[swap], out[index]];
  }
  return out;
}

function formatDuration(milliseconds: number): string {
  const seconds = Math.max(0, Math.round(milliseconds / 1000));
  const minutes = Math.floor(seconds / 60);
  const remaining = seconds % 60;
  if (minutes >= 60) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours} hr${mins ? ` ${mins} min` : ""}`;
  }
  return `${minutes}:${String(remaining).padStart(2, "0")}`;
}

function formatTimer(seconds: number): string {
  const safe = Math.max(0, seconds);
  return `${Math.floor(safe / 60)}:${String(safe % 60).padStart(2, "0")}`;
}

function normalizeOptionAnswer(value: string): string {
  const compact = value.trim().toUpperCase().replace(/[\s;|/]+/g, ",");
  const tokens = compact.includes(",")
    ? compact.split(",")
    : /^[A-Z]{2,4}$/.test(compact)
      ? compact.split("")
      : [compact];
  return tokens.filter(Boolean).sort().join(",");
}

function isCorrect(question: PYQQuestion, selected: string | undefined): boolean {
  if (!selected) return false;
  if (question.options) {
    return normalizeOptionAnswer(selected) === normalizeOptionAnswer(question.answer);
  }
  return selected.trim().toLowerCase() === question.answer.trim().toLowerCase();
}

function questionSupported(question: PYQQuestion): boolean {
  return Boolean(question.question && question.answer);
}

function filterQuestions(pool: PYQQuestion[], config: BuilderConfig): PYQQuestion[] {
  const selectedChapters = config.chapters.length > 0 ? config.chapters : config.chapter ? [config.chapter] : [];
  return pool.filter((question) => {
    if (!questionSupported(question)) return false;
    if (config.exam !== "All" && question.exam !== config.exam) return false;
    if (selectedChapters.length > 0 && !selectedChapters.includes(question.chapter)) return false;
    if (config.difficulty !== "Mixed" && question.difficulty !== config.difficulty) return false;
    if (question.year < config.yearFrom || question.year > config.yearTo) return false;
    if (config.questionType !== "All" && question.questionType !== config.questionType) return false;
    if (config.ncertOnly && !question.ncertDirect) return false;
    if (config.trendingOnly && !question.trending) return false;
    return true;
  });
}

function selectQuestions(pool: PYQQuestion[], config: BuilderConfig): PYQQuestion[] {
  return shuffle(filterQuestions(pool, config)).slice(0, config.count);
}

function createSession(title: string, questions: PYQQuestion[], timerMinutes: number, mode: TestMode): TestSession {
  return {
    id: `test-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    title,
    questions,
    timerMinutes,
    mode,
  };
}

function loadPersistedRun(): PersistedRun | null {
  try {
    const raw = window.localStorage.getItem(ACTIVE_RUN_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as PersistedRun;
    if (!parsed?.session?.questions?.length) return null;
    return parsed;
  } catch {
    return null;
  }
}

function savePersistedRun(run: PersistedRun): void {
  try {
    window.localStorage.setItem(ACTIVE_RUN_KEY, JSON.stringify(run));
  } catch {
    // Storage can be unavailable in strict privacy mode; the test still works.
  }
}

function clearPersistedRun(): void {
  try {
    window.localStorage.removeItem(ACTIVE_RUN_KEY);
  } catch {
    // No-op.
  }
}

function EmptyState({ title, message }: { title: string; message: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-white/12 bg-white/[0.02] p-8 text-center">
      <p className="font-bold text-white/70">{title}</p>
      <p className="mt-1 text-sm text-white/40">{message}</p>
    </div>
  );
}

function ChoiceCard({
  eyebrow,
  title,
  description,
  meta,
  primary = false,
  onClick,
}: {
  eyebrow: string;
  title: string;
  description: string;
  meta: string;
  primary?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group w-full rounded-2xl border p-5 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 ${
        primary
          ? "border-cyan-400/30 bg-gradient-to-br from-cyan-500/15 via-cyan-500/[0.06] to-violet-500/10 hover:border-cyan-300/55"
          : "border-white/[0.09] bg-[#111827] hover:border-white/20 hover:bg-white/[0.045]"
      }`}
    >
      <p className={`text-[11px] font-bold uppercase tracking-[0.18em] ${primary ? "text-cyan-300" : "text-white/45"}`}>{eyebrow}</p>
      <div className="mt-3 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-black text-white">{title}</h2>
          <p className="mt-1.5 max-w-xl text-sm leading-6 text-white/55">{description}</p>
        </div>
        <span className="mt-1 text-xl text-white/35 transition group-hover:translate-x-0.5 group-hover:text-cyan-300">→</span>
      </div>
      <p className="mt-4 text-xs font-semibold text-white/45">{meta}</p>
    </button>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <span className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-white/45">{children}</span>;
}

function SelectField({ value, onChange, children, ariaLabel }: { value: string | number; onChange: (value: string) => void; children: React.ReactNode; ariaLabel: string }) {
  return (
    <select
      aria-label={ariaLabel}
      value={value}
      onChange={(event: ChangeEvent<HTMLSelectElement>) => onChange(event.target.value)}
      className="w-full rounded-xl border border-white/10 bg-[#0B1220] px-3 py-3 text-sm font-semibold text-white outline-none transition focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/15"
    >
      {children}
    </select>
  );
}

function TestBuilder({
  kind,
  pool,
  lockedExam,
  onBack,
  onStart,
}: {
  kind: BuilderKind;
  pool: PYQQuestion[];
  lockedExam?: PYQExam;
  onBack: () => void;
  onStart: (session: TestSession) => void;
}) {
  const years = useMemo(() => pool.map((question) => question.year), [pool]);
  const minYear = years.length ? Math.min(...years) : 2005;
  const maxYear = years.length ? Math.max(...years) : 2026;
  const chapters = useMemo(() => unique(pool.map((question) => question.chapter)).sort(), [pool]);
  const defaultChapter = chapters[0] ?? "";
  const [moreOptions, setMoreOptions] = useState(kind === "custom");
  const [config, setConfig] = useState<BuilderConfig>({
    exam: lockedExam ?? (kind === "pyq" ? "JEE Main" : "All"),
    chapter: defaultChapter,
    chapters: [],
    difficulty: "Mixed",
    count: 20,
    timerMinutes: 20,
    yearFrom: minYear,
    yearTo: maxYear,
    questionType: "All",
    ncertOnly: false,
    trendingOnly: false,
    mode: "exam",
  });

  const available = useMemo(() => filterQuestions(pool, config).length, [pool, config]);

  const update = <K extends keyof BuilderConfig>(key: K, value: BuilderConfig[K]) => {
    setConfig((previous) => ({ ...previous, [key]: value }));
  };

  const toggleChapter = (chapter: string) => {
    setConfig((previous) => ({
      ...previous,
      chapter: "",
      chapters: previous.chapters.includes(chapter)
        ? previous.chapters.filter((item) => item !== chapter)
        : [...previous.chapters, chapter],
    }));
  };

  const start = () => {
    const questions = selectQuestions(pool, config);
    if (questions.length === 0) return;
    const label = kind === "chapter"
      ? `${config.chapter || config.chapters.join(", ")} Test`
      : kind === "pyq"
        ? `${config.exam === "All" ? "Chemistry" : config.exam} PYQ Test`
        : "Custom Chemistry Test";
    onStart(createSession(label, questions, config.timerMinutes, config.mode));
  };

  return (
    <div className="space-y-5">
      <button type="button" onClick={onBack} className="text-sm font-semibold text-white/55 transition hover:text-white">← Tests home</button>
      <header>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Simple setup</p>
        <h1 className="mt-2 text-3xl font-black text-white">
          {kind === "chapter" ? "Chapter Test" : kind === "pyq" ? "PYQ Test" : "Custom Test"}
        </h1>
        <p className="mt-2 text-sm text-white/50">Choose the essentials. Extra filters stay hidden until you need them.</p>
      </header>

      <section className="rounded-2xl border border-white/[0.08] bg-[#111827] p-4 sm:p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          {!lockedExam && (
            <label>
              <FieldLabel>Exam</FieldLabel>
              <SelectField value={config.exam} ariaLabel="Exam" onChange={(value) => update("exam", value as BuilderConfig["exam"])}>
                <option value="All">All exams</option>
                {EXAMS.map((exam) => <option key={exam} value={exam}>{exam}</option>)}
              </SelectField>
            </label>
          )}

          <label className={!lockedExam ? "" : "sm:col-span-2"}>
            <FieldLabel>{kind === "custom" ? "Main chapter" : "Chapter"}</FieldLabel>
            <SelectField value={config.chapter} ariaLabel="Chapter" onChange={(value) => update("chapter", value)}>
              {kind !== "chapter" && <option value="">All chapters</option>}
              {chapters.map((chapter) => <option key={chapter} value={chapter}>{chapter}</option>)}
            </SelectField>
          </label>

          <label>
            <FieldLabel>Questions</FieldLabel>
            <SelectField value={config.count} ariaLabel="Question count" onChange={(value) => update("count", Number(value))}>
              {COUNTS.map((count) => <option key={count} value={count}>{count} questions</option>)}
            </SelectField>
          </label>

          <label>
            <FieldLabel>Difficulty</FieldLabel>
            <SelectField value={config.difficulty} ariaLabel="Difficulty" onChange={(value) => update("difficulty", value as DifficultyChoice)}>
              {DIFFICULTIES.map((difficulty) => <option key={difficulty} value={difficulty}>{difficulty}</option>)}
            </SelectField>
          </label>

          <label>
            <FieldLabel>Timer</FieldLabel>
            <SelectField value={config.timerMinutes} ariaLabel="Timer" onChange={(value) => update("timerMinutes", Number(value))}>
              {TIMERS.map((minutes) => <option key={minutes} value={minutes}>{minutes === 0 ? "Untimed" : `${minutes} minutes`}</option>)}
            </SelectField>
          </label>

          <label>
            <FieldLabel>Test behaviour</FieldLabel>
            <SelectField value={config.mode} ariaLabel="Test behaviour" onChange={(value) => update("mode", value as TestMode)}>
              <option value="exam">Exam mode — solutions after submit</option>
              <option value="practice">Practice mode — feedback after answer</option>
            </SelectField>
          </label>
        </div>

        <button
          type="button"
          onClick={() => setMoreOptions((value) => !value)}
          className="mt-5 text-sm font-bold text-cyan-300 transition hover:text-cyan-200"
        >
          {moreOptions ? "Hide extra filters ↑" : "More options ↓"}
        </button>

        {moreOptions && (
          <div className="mt-5 space-y-5 border-t border-white/[0.07] pt-5">
            {kind === "custom" && (
              <div>
                <FieldLabel>Multiple chapters</FieldLabel>
                <div className="max-h-48 overflow-y-auto rounded-xl border border-white/[0.08] bg-black/15 p-3">
                  <div className="grid gap-2 sm:grid-cols-2">
                    {chapters.map((chapter) => (
                      <label key={chapter} className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-white/65 hover:bg-white/[0.04]">
                        <input type="checkbox" checked={config.chapters.includes(chapter)} onChange={() => toggleChapter(chapter)} className="accent-cyan-400" />
                        <span>{chapter}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="grid gap-4 sm:grid-cols-3">
              <label>
                <FieldLabel>Question type</FieldLabel>
                <SelectField value={config.questionType} ariaLabel="Question type" onChange={(value) => update("questionType", value as QuestionTypeChoice)}>
                  {QUESTION_TYPES.map((type) => <option key={type} value={type}>{type}</option>)}
                </SelectField>
              </label>
              <label>
                <FieldLabel>From year</FieldLabel>
                <SelectField value={config.yearFrom} ariaLabel="From year" onChange={(value) => update("yearFrom", Number(value))}>
                  {Array.from({ length: maxYear - minYear + 1 }, (_, index) => minYear + index).map((year) => <option key={year} value={year}>{year}</option>)}
                </SelectField>
              </label>
              <label>
                <FieldLabel>To year</FieldLabel>
                <SelectField value={config.yearTo} ariaLabel="To year" onChange={(value) => update("yearTo", Number(value))}>
                  {Array.from({ length: maxYear - minYear + 1 }, (_, index) => maxYear - index).map((year) => <option key={year} value={year}>{year}</option>)}
                </SelectField>
              </label>
            </div>

            <div className="flex flex-wrap gap-3">
              <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-3 py-2 text-sm text-white/65">
                <input type="checkbox" checked={config.ncertOnly} onChange={(event: ChangeEvent<HTMLInputElement>) => update("ncertOnly", event.target.checked)} className="accent-cyan-400" />
                NCERT-direct only
              </label>
              <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-3 py-2 text-sm text-white/65">
                <input type="checkbox" checked={config.trendingOnly} onChange={(event: ChangeEvent<HTMLInputElement>) => update("trendingOnly", event.target.checked)} className="accent-cyan-400" />
                High-frequency/trending only
              </label>
            </div>
          </div>
        )}

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/[0.07] bg-black/15 p-3">
          <p className="text-sm text-white/50">
            <strong className="text-white/80">{available}</strong> matching questions available. The test will use up to {config.count}.
          </p>
          <button
            type="button"
            onClick={start}
            disabled={available === 0}
            className="rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-black text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Start Test
          </button>
        </div>
      </section>
    </div>
  );
}

function QuestionPalette({
  questions,
  current,
  answers,
  marked,
  onJump,
}: {
  questions: PYQQuestion[];
  current: number;
  answers: Record<string, string>;
  marked: Record<string, boolean>;
  onJump: (index: number) => void;
}) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/45">Questions</p>
      <div className="mt-3 grid grid-cols-5 gap-2 sm:grid-cols-8 lg:grid-cols-5">
        {questions.map((question, index) => {
          const active = index === current;
          const answered = Boolean(answers[question.id]);
          const flagged = Boolean(marked[question.id]);
          const tone = active
            ? "border-cyan-300 bg-cyan-500/20 text-white ring-2 ring-cyan-300/20"
            : flagged && answered
              ? "border-violet-400/55 bg-violet-500/12 text-violet-200"
              : flagged
                ? "border-amber-400/55 bg-amber-500/12 text-amber-200"
                : answered
                  ? "border-emerald-400/45 bg-emerald-500/12 text-emerald-200"
                  : "border-white/10 bg-white/[0.035] text-white/50 hover:border-white/25 hover:text-white";
          return (
            <button type="button" key={question.id} onClick={() => onJump(index)} aria-label={`Go to question ${index + 1}`} className={`aspect-square rounded-lg border text-xs font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 ${tone}`}>
              {index + 1}
            </button>
          );
        })}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2 text-[10px] text-white/45">
        <span><i className="mr-1.5 inline-block h-2 w-2 rounded-full bg-emerald-400" />Answered</span>
        <span><i className="mr-1.5 inline-block h-2 w-2 rounded-full bg-amber-400" />Marked</span>
        <span><i className="mr-1.5 inline-block h-2 w-2 rounded-full bg-violet-400" />Answered + marked</span>
        <span><i className="mr-1.5 inline-block h-2 w-2 rounded-full bg-cyan-300" />Current</span>
      </div>
    </div>
  );
}

function ResultScreen({
  session,
  answers,
  durationMs,
  submitState,
  onBack,
  onRetry,
}: {
  session: TestSession;
  answers: Record<string, string>;
  durationMs: number;
  submitState: SubmitState;
  onBack: () => void;
  onRetry: (questions: PYQQuestion[], title: string) => void;
}) {
  const { questions } = session;
  const correct = questions.filter((question) => isCorrect(question, answers[question.id])).length;
  const answered = questions.filter((question) => Boolean(answers[question.id])).length;
  const incorrect = answered - correct;
  const unanswered = questions.length - answered;
  const accuracy = answered > 0 ? Math.round((correct / answered) * 100) : 0;
  const maxScore = questions.reduce((total, question) => total + (question.marks ?? 4), 0);
  const score = questions.reduce((total, question) => {
    const selected = answers[question.id];
    if (!selected) return total;
    return isCorrect(question, selected) ? total + (question.marks ?? 4) : total - (question.negMarks ?? 0);
  }, 0);
  const retryQuestions = questions.filter((question) => !answers[question.id] || !isCorrect(question, answers[question.id]));
  const chapterRows = useMemo(() => {
    const map = new Map<string, { total: number; correct: number; answered: number }>();
    for (const question of questions) {
      const row = map.get(question.chapter) ?? { total: 0, correct: 0, answered: 0 };
      row.total += 1;
      if (answers[question.id]) row.answered += 1;
      if (isCorrect(question, answers[question.id])) row.correct += 1;
      map.set(question.chapter, row);
    }
    return [...map.entries()].sort((a, b) => (a[1].correct / a[1].total) - (b[1].correct / b[1].total));
  }, [questions, answers]);

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/12 via-white/[0.025] to-violet-500/10 p-5 sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Test complete</p>
        <div className="mt-3 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-black text-white sm:text-3xl">{session.title}</h2>
            <p className="mt-2 text-sm text-white/55">
              {submitState === "saving" && "Saving your attempt…"}
              {submitState === "saved" && "Attempt saved to your account."}
              {submitState === "local" && "Result is ready. Sign in to save future attempts."}
              {submitState === "idle" && "Your result is ready."}
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/15 px-5 py-3 text-center">
            <p className="text-3xl font-black text-white">{score}<span className="text-base text-white/35">/{maxScore}</span></p>
            <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wide text-white/40">Score</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
        {[
          ["Correct", String(correct), "text-emerald-300"],
          ["Incorrect", String(incorrect), "text-rose-300"],
          ["Unanswered", String(unanswered), "text-amber-200"],
          ["Accuracy", `${accuracy}%`, "text-cyan-300"],
          ["Time", formatDuration(durationMs), "text-violet-300"],
        ].map(([label, value, tone]) => (
          <div key={label} className="rounded-2xl border border-white/[0.08] bg-[#111827] p-4">
            <p className={`text-xl font-black ${tone}`}>{value}</p>
            <p className="mt-1 text-xs font-semibold text-white/40">{label}</p>
          </div>
        ))}
      </div>

      <section className="rounded-2xl border border-white/[0.08] bg-[#111827] p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="font-black text-white">What should you do next?</h3>
            <p className="mt-1 text-xs text-white/40">Retry only the questions that still need work.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {retryQuestions.length > 0 && (
              <button type="button" onClick={() => onRetry(retryQuestions, `${session.title} — Retry`)} className="rounded-xl border border-rose-400/25 bg-rose-500/10 px-4 py-2 text-sm font-bold text-rose-200 transition hover:bg-rose-500/15">
                Retry incorrect + skipped ({retryQuestions.length})
              </button>
            )}
            <button type="button" onClick={() => onRetry(questions, session.title)} className="rounded-xl border border-white/12 bg-white/[0.05] px-4 py-2 text-sm font-bold text-white/75 transition hover:border-white/25 hover:text-white">Retry full test</button>
            <button type="button" onClick={onBack} className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-black text-slate-950 transition hover:bg-cyan-300">Tests home</button>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 sm:p-5">
        <h3 className="font-black text-white">Chapter breakdown</h3>
        <div className="mt-3 space-y-2">
          {chapterRows.map(([chapter, row]) => {
            const pct = row.answered > 0 ? Math.round((row.correct / row.answered) * 100) : 0;
            return (
              <div key={chapter} className="flex flex-wrap items-center gap-3 rounded-xl border border-white/[0.07] bg-black/10 p-3">
                <span className="min-w-0 flex-1 text-sm font-semibold text-white/80">{chapter}</span>
                <span className="text-xs text-white/40">{row.correct}/{row.total} correct</span>
                <span className={`w-12 text-right text-sm font-black ${pct >= 75 ? "text-emerald-300" : pct >= 50 ? "text-amber-200" : "text-rose-300"}`}>{pct}%</span>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
          <div>
            <h3 className="text-lg font-black text-white">Question review</h3>
            <p className="mt-1 text-xs text-white/40">Solutions appear only after submission.</p>
          </div>
          <Link href="/mistakes" className="text-xs font-bold text-cyan-300 hover:text-cyan-200">Open Mistake Journal →</Link>
        </div>
        <div className="space-y-3">
          {questions.map((question, index) => {
            const selected = answers[question.id];
            const correctAnswer = isCorrect(question, selected);
            return (
              <article key={question.id} className="rounded-2xl border border-white/[0.08] bg-[#111827] p-4 sm:p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2 text-[11px]">
                    <span className="font-black text-cyan-300">Q{index + 1}</span>
                    <span className="rounded bg-white/[0.05] px-2 py-1 text-white/50">{question.exam} {question.year}</span>
                    <span className="rounded bg-white/[0.05] px-2 py-1 text-white/50">{question.chapter}</span>
                  </div>
                  <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${!selected ? "bg-amber-500/12 text-amber-200" : correctAnswer ? "bg-emerald-500/12 text-emerald-300" : "bg-rose-500/12 text-rose-300"}`}>
                    {!selected ? "Unanswered" : correctAnswer ? "Correct" : "Incorrect"}
                  </span>
                </div>
                <div className="mt-3 text-sm font-medium leading-7 text-white">{renderChemistry(question.question)}</div>
                <div className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
                  <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3 text-white/55">Your answer: <strong className="text-white/85">{selected || "Not answered"}</strong></div>
                  <div className="rounded-xl border border-emerald-400/15 bg-emerald-500/[0.055] p-3 text-emerald-100/80">Correct answer: <strong className="text-emerald-200">{question.answer}</strong></div>
                </div>
                {question.explanation && <div className="mt-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3 text-sm leading-6 text-white/60">{renderChemistry(question.explanation)}</div>}
                <div className="mt-3 flex justify-end">
                  <AddToRevision item={{ id: `pyq:${question.id}`, type: "pyq", title: question.question.slice(0, 90), subtitle: `${question.exam} ${question.year} · ${question.chapter}`, href: "/tests" }} />
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function TestRunner({ session, restore, onExit, onRestart }: { session: TestSession; restore?: PersistedRun; onExit: () => void; onRestart: (session: TestSession) => void }) {
  const { questions } = session;
  const [current, setCurrent] = useState(() => Math.min(restore?.current ?? 0, Math.max(0, questions.length - 1)));
  const [answers, setAnswers] = useState<Record<string, string>>(() => restore?.answers ?? {});
  const [marked, setMarked] = useState<Record<string, boolean>>(() => restore?.marked ?? {});
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [finished, setFinished] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [finalDuration, setFinalDuration] = useState(0);
  const [remainingSeconds, setRemainingSeconds] = useState(() => session.timerMinutes * 60);
  const startedAtRef = useRef(restore?.startedAtMs ?? 0);
  const endAtRef = useRef<number | null>(restore?.endAtMs ?? null);
  const shownAtRef = useRef(0);
  const timeByQuestion = useRef<Record<number, number>>(restore?.timeByQuestion ?? {});
  const finishRef = useRef<(force?: boolean) => void>(() => undefined);

  useEffect(() => {
    if (startedAtRef.current === 0) startedAtRef.current = Date.now();
    if (shownAtRef.current === 0) shownAtRef.current = Date.now();
    if (session.timerMinutes > 0 && endAtRef.current === null) endAtRef.current = Date.now() + session.timerMinutes * 60_000;
  }, [session.timerMinutes]);

  useEffect(() => {
    if (session.timerMinutes <= 0 || finished) return;
    const updateTimer = () => {
      const end = endAtRef.current;
      if (!end) return;
      const remaining = Math.max(0, Math.ceil((end - Date.now()) / 1000));
      setRemainingSeconds(remaining);
      if (remaining <= 0) finishRef.current(true);
    };
    updateTimer();
    const id = window.setInterval(updateTimer, 1000);
    return () => window.clearInterval(id);
  }, [session.timerMinutes, finished]);

  useEffect(() => {
    if (finished || startedAtRef.current === 0) return;
    savePersistedRun({
      session,
      answers,
      marked,
      current,
      startedAtMs: startedAtRef.current,
      endAtMs: endAtRef.current,
      timeByQuestion: timeByQuestion.current,
    });
  }, [session, answers, marked, current, finished]);

  // Latest-ref pattern: keeps the timer interval calling the current
  // finishTest (hoisted declaration below) without touching the ref in render.
  useEffect(() => {
    finishRef.current = (force?: boolean) => { void finishTest(Boolean(force)); };
  });

  if (questions.length === 0) return <EmptyState title="No questions available" message="Return to Tests and change the filters." />;

  const question = questions[current];
  const answeredCount = questions.filter((item) => Boolean(answers[item.id])).length;
  const unansweredCount = questions.length - answeredCount;
  const progress = Math.round(((current + 1) / questions.length) * 100);
  const practiceRevealed = session.mode === "practice" && Boolean(answers[question.id]);

  const bankCurrent = () => {
    const now = Date.now();
    if (shownAtRef.current > 0) timeByQuestion.current[current] = (timeByQuestion.current[current] ?? 0) + (now - shownAtRef.current);
    shownAtRef.current = now;
  };

  const jumpTo = (index: number) => {
    if (index === current || index < 0 || index >= questions.length) return;
    bankCurrent();
    setCurrent(index);
    setPaletteOpen(false);
  };

  const toggleOption = (key: string) => {
    setAnswers((previous) => {
      if (question.questionType !== "MCQ-Multiple") return { ...previous, [question.id]: key };
      const currentKeys = normalizeOptionAnswer(previous[question.id] ?? "").split(",").filter(Boolean);
      const nextKeys = currentKeys.includes(key) ? currentKeys.filter((item) => item !== key) : [...currentKeys, key];
      const next = { ...previous };
      if (nextKeys.length === 0) delete next[question.id];
      else next[question.id] = nextKeys.sort().join(",");
      return next;
    });
  };

  async function finishTest(force = false) {
    if (finished) return;
    if (!force && unansweredCount > 0 && !window.confirm(`${unansweredCount} question${unansweredCount === 1 ? " is" : "s are"} unanswered. Submit the test?`)) return;
    bankCurrent();
    const durationMs = Math.max(0, Date.now() - startedAtRef.current);
    setFinalDuration(durationMs);
    setFinished(true);
    setSubmitState("saving");
    clearPersistedRun();

    const result = await submitAttempt({
      source: "test",
      exam: questions[0]?.exam ?? "Chemistry",
      title: session.title,
      durationMs,
      answers: questions.map((item, index) => ({
        questionId: item.id,
        questionText: item.question,
        options: item.options,
        selectedAnswer: answers[item.id] || null,
        correctAnswer: item.answer,
        explanation: item.explanation,
        chapter: item.chapter,
        topic: item.subtopic,
        difficulty: item.difficulty,
        timeSpentMs: timeByQuestion.current[index] ?? 0,
      })),
    });
    setSubmitState(result ? "saved" : "local");
  }

  if (finished) {
    return (
      <ResultScreen
        session={session}
        answers={answers}
        durationMs={finalDuration}
        submitState={submitState}
        onBack={onExit}
        onRetry={(retryQuestions, title) => onRestart(createSession(title, shuffle(retryQuestions), session.timerMinutes, session.mode))}
      />
    );
  }

  return (
    <div className="space-y-4">
      <header className="sticky top-0 z-20 -mx-4 border-b border-white/[0.07] bg-[#0B0F19]/95 px-4 py-3 backdrop-blur sm:static sm:mx-0 sm:rounded-2xl sm:border sm:bg-[#111827] sm:px-5">
        <div className="flex items-center justify-between gap-3">
          <button type="button" onClick={onExit} className="shrink-0 text-sm font-semibold text-white/55 transition hover:text-white">← Exit</button>
          <div className="min-w-0 flex-1 text-center sm:text-left">
            <h1 className="truncate text-sm font-black text-white sm:text-base">{session.title}</h1>
            <p className="mt-0.5 text-[11px] text-white/40">Answered {answeredCount}/{questions.length} · {session.mode === "exam" ? "Exam mode" : "Practice mode"}</p>
          </div>
          {session.timerMinutes > 0 && (
            <div className={`shrink-0 rounded-lg border px-3 py-2 font-mono text-sm font-black ${remainingSeconds <= 60 ? "border-rose-400/40 bg-rose-500/10 text-rose-300" : "border-white/10 bg-white/[0.04] text-white/80"}`}>
              {formatTimer(remainingSeconds)}
            </div>
          )}
          <button type="button" onClick={() => void finishTest()} className="shrink-0 rounded-lg bg-cyan-400 px-3 py-2 text-xs font-black text-slate-950 transition hover:bg-cyan-300 sm:px-4">Submit</button>
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.07]"><div className="h-full rounded-full bg-cyan-400 transition-[width]" style={{ width: `${progress}%` }} /></div>
      </header>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_250px]">
        <main className="min-w-0 rounded-2xl border border-white/[0.08] bg-[#111827] p-4 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2 text-[11px]">
              <span className="font-black text-cyan-300">Question {current + 1} of {questions.length}</span>
              <span className="rounded bg-white/[0.05] px-2 py-1 text-white/45">{question.exam} {question.year}</span>
              <span className="rounded bg-white/[0.05] px-2 py-1 text-white/45">{question.difficulty}</span>
              <span className="rounded bg-white/[0.05] px-2 py-1 text-white/45">{question.questionType}</span>
            </div>
            <button type="button" onClick={() => setPaletteOpen((value) => !value)} className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs font-semibold text-white/60 lg:hidden">Questions</button>
          </div>

          {paletteOpen && <div className="mt-4 rounded-xl border border-white/[0.08] bg-black/15 p-4 lg:hidden"><QuestionPalette questions={questions} current={current} answers={answers} marked={marked} onJump={jumpTo} /></div>}

          <div className="mt-6 text-[15px] font-medium leading-8 text-white sm:text-base">{renderChemistry(question.question)}</div>
          {question.questionType === "MCQ-Multiple" && <p className="mt-3 text-xs font-semibold text-amber-200/80">Select all correct options.</p>}

          {question.options ? (
            <div className="mt-6 grid gap-3">
              {Object.entries(question.options).map(([key, value]) => {
                const selectedKeys = normalizeOptionAnswer(answers[question.id] ?? "").split(",");
                const selected = selectedKeys.includes(key);
                const showCorrect = practiceRevealed && normalizeOptionAnswer(question.answer).split(",").includes(key);
                const showWrong = practiceRevealed && selected && !showCorrect;
                return (
                  <button
                    type="button"
                    key={key}
                    onClick={() => toggleOption(key)}
                    className={`rounded-xl border p-3.5 text-left text-sm leading-6 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 ${
                      showCorrect ? "border-emerald-400/60 bg-emerald-500/10 text-emerald-100" : showWrong ? "border-rose-400/60 bg-rose-500/10 text-rose-100" : selected ? "border-cyan-300/70 bg-cyan-500/12 text-white" : "border-white/10 bg-white/[0.025] text-white/70 hover:border-white/25 hover:bg-white/[0.045]"
                    }`}
                  >
                    <span className={`mr-3 inline-flex h-7 w-7 items-center justify-center rounded-full border text-xs font-black ${selected ? "border-cyan-300 bg-cyan-400 text-slate-950" : "border-white/15 text-white/50"}`}>{key}</span>
                    {renderChemistry(value)}
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="mt-6">
              <label htmlFor={`answer-${question.id}`} className="text-xs font-bold uppercase tracking-wide text-white/45">Your numerical answer</label>
              <input id={`answer-${question.id}`} value={answers[question.id] ?? ""} onChange={(event: ChangeEvent<HTMLInputElement>) => setAnswers((previous) => ({ ...previous, [question.id]: event.target.value }))} inputMode="decimal" placeholder="Enter answer" className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-base text-white outline-none transition placeholder:text-white/25 focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/15" />
            </div>
          )}

          {practiceRevealed && (
            <div className={`mt-4 rounded-xl border p-4 ${isCorrect(question, answers[question.id]) ? "border-emerald-400/25 bg-emerald-500/[0.07]" : "border-rose-400/25 bg-rose-500/[0.07]"}`}>
              <p className={`text-sm font-black ${isCorrect(question, answers[question.id]) ? "text-emerald-300" : "text-rose-300"}`}>{isCorrect(question, answers[question.id]) ? "Correct" : `Correct answer: ${question.answer}`}</p>
              {question.explanation && <div className="mt-2 text-sm leading-6 text-white/65">{renderChemistry(question.explanation)}</div>}
            </div>
          )}

          <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.07] pt-4">
            <div className="flex gap-2">
              <button type="button" onClick={() => jumpTo(current - 1)} disabled={current === 0} className="rounded-xl border border-white/10 px-3 py-2 text-sm font-bold text-white/60 transition hover:border-white/25 hover:text-white disabled:cursor-not-allowed disabled:opacity-30">Previous</button>
              <button type="button" onClick={() => setAnswers((previous) => { const next = { ...previous }; delete next[question.id]; return next; })} disabled={!answers[question.id]} className="rounded-xl border border-white/10 px-3 py-2 text-sm font-bold text-white/50 transition hover:border-white/25 hover:text-white disabled:cursor-not-allowed disabled:opacity-30">Clear</button>
            </div>
            <div className="flex gap-2">
              <button type="button" onClick={() => { setMarked((previous) => ({ ...previous, [question.id]: !previous[question.id] })); if (current < questions.length - 1) jumpTo(current + 1); }} className={`rounded-xl border px-3 py-2 text-sm font-bold transition ${marked[question.id] ? "border-amber-400/45 bg-amber-500/10 text-amber-200" : "border-white/10 text-white/60 hover:border-amber-400/35 hover:text-amber-200"}`}>{marked[question.id] ? "Unmark" : "Mark"} & Next</button>
              {current < questions.length - 1 ? <button type="button" onClick={() => jumpTo(current + 1)} className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-black text-slate-950 transition hover:bg-cyan-300">Save & Next</button> : <button type="button" onClick={() => void finishTest()} className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-black text-slate-950 transition hover:bg-cyan-300">Finish Test</button>}
            </div>
          </div>
        </main>

        <aside className="hidden self-start rounded-2xl border border-white/[0.08] bg-[#111827] p-4 lg:block">
          <QuestionPalette questions={questions} current={current} answers={answers} marked={marked} onJump={jumpTo} />
          <div className="mt-5 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3 text-xs leading-5 text-white/45">{session.mode === "exam" ? "Answers and solutions remain hidden until submission." : "Practice mode gives feedback after each answer."}</div>
        </aside>
      </div>
    </div>
  );
}

function RecentAttempts({ exam }: { exam?: PYQExam }) {
  const [attempts, setAttempts] = useState<AttemptRecord[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let active = true;
    const examQuery = exam ? `&exam=${encodeURIComponent(exam)}` : "";
    void fetch(`/api/attempts?source=test&limit=4${examQuery}`)
      .then(async (response) => response.ok ? (await response.json())?.attempts ?? [] : [])
      .then((items: AttemptRecord[]) => { if (active) setAttempts(items); })
      .catch(() => undefined)
      .finally(() => { if (active) setLoaded(true); });
    return () => { active = false; };
  }, [exam]);

  return (
    <section className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <div><h2 className="text-base font-black text-white">Recent Tests</h2><p className="mt-1 text-xs text-white/40">Only your real submitted attempts appear here.</p></div>
        <Link href="/tests/history" className="text-xs font-bold text-cyan-300 hover:text-cyan-200">View history →</Link>
      </div>
      {!loaded ? <p className="mt-4 text-sm text-white/35">Loading attempts…</p> : attempts.length === 0 ? (
        <div className="mt-4 rounded-xl border border-dashed border-white/10 px-4 py-5 text-center"><p className="text-sm font-semibold text-white/55">No completed tests yet.</p><p className="mt-1 text-xs text-white/35">Start with the Quick Test.</p></div>
      ) : (
        <div className="mt-4 divide-y divide-white/[0.07]">
          {attempts.map((attempt) => (
            <Link href={`/revision/attempt/${attempt.attemptId}`} key={attempt.attemptId} className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0 hover:bg-white/[0.02]">
              <div className="min-w-0"><p className="truncate text-sm font-bold text-white/80">{attempt.title || `${attempt.exam} Test`}</p><p className="mt-1 text-[11px] text-white/35">{attempt.totalQuestions} questions · {formatDuration(attempt.durationMs)}</p></div>
              <div className="shrink-0 text-right"><p className="text-sm font-black text-cyan-300">{attempt.score}/{attempt.maxScore}</p><p className="mt-1 text-[10px] font-semibold text-white/35">{attempt.accuracy}% accuracy</p></div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

export default function CompleteTestExperience({ exam }: { exam?: PYQExam } = {}) {
  const pool = useMemo(() => ALL_PYQ_QUESTIONS.filter((question) => (!exam || question.exam === exam) && questionSupported(question)), [exam]);
  const [builder, setBuilder] = useState<BuilderKind | null>(null);
  const [run, setRun] = useState<{ session: TestSession; restore?: PersistedRun } | null>(null);
  const [resume, setResume] = useState<PersistedRun | null>(null);

  useEffect(() => {
    // Deferred so hydration paints the server markup before the client-only
    // persisted run is read from localStorage.
    const id = window.setTimeout(() => setResume(loadPersistedRun()), 0);
    return () => window.clearTimeout(id);
  }, []);

  const startQuick = () => {
    const questions = shuffle(pool.filter((question) => question.authenticityStatus !== "NEEDS_MANUAL_REVIEW")).slice(0, 10);
    if (questions.length > 0) setRun({ session: createSession("10-Minute Quick Test", questions, 10, "exam") });
  };

  if (run) {
    return <TestRunner session={run.session} restore={run.restore} onExit={() => { setRun(null); setResume(loadPersistedRun()); }} onRestart={(session) => setRun({ session })} />;
  }

  if (builder) {
    return <TestBuilder kind={builder} pool={pool} lockedExam={exam} onBack={() => setBuilder(null)} onStart={(session) => setRun({ session })} />;
  }

  return (
    <div className="space-y-6">
      <header>
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">Tests</p>
        <h1 className="mt-2 text-3xl font-black text-white sm:text-4xl">Choose one and begin</h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-white/50">The main choices stay simple. Advanced filters appear only inside Custom Test.{exam ? ` Showing ${exam} chemistry only.` : ""}</p>
      </header>

      {resume && (
        <button type="button" onClick={() => setRun({ session: resume.session, restore: resume })} className="flex w-full flex-wrap items-center justify-between gap-3 rounded-2xl border border-violet-400/30 bg-violet-500/10 p-4 text-left transition hover:bg-violet-500/15">
          <div><p className="text-xs font-bold uppercase tracking-[0.15em] text-violet-300">Continue Test</p><h2 className="mt-1 font-black text-white">{resume.session.title}</h2><p className="mt-1 text-xs text-white/45">Resume from question {resume.current + 1} of {resume.session.questions.length}.</p></div>
          <span className="text-sm font-black text-violet-200">Resume →</span>
        </button>
      )}

      <ChoiceCard eyebrow="One tap" title="Quick Test" description="Start immediately with 10 mixed chemistry questions. The timer and question set are prepared automatically." meta="10 questions · 10 minutes · exam mode" primary onClick={startQuick} />

      <div className="grid gap-3 md:grid-cols-2">
        <ChoiceCard eyebrow="Choose a chapter" title="Chapter Test" description="Select one chapter, question count, difficulty and timer." meta="Simple four-field setup" onClick={() => setBuilder("chapter")} />
        <ChoiceCard eyebrow="Previous years" title="PYQ Test" description="Filter verified previous-year questions by exam, chapter and year range." meta="Exam-focused practice" onClick={() => setBuilder("pyq")} />
        <ChoiceCard eyebrow="Flexible" title="Custom Test" description="Use the same simple setup, then open extra filters only when needed." meta="Multiple chapters · types · NCERT · trends" onClick={() => setBuilder("custom")} />
        <ChoiceCard eyebrow="Recall" title="Recall Decks" description="Review formulas, reagents, facts, reactions and inorganic NCERT cards." meta="Got it · Need practice · retry missed" onClick={() => { window.location.href = "/revision/recall-decks"; }} />
      </div>

      <RecentAttempts exam={exam} />
    </div>
  );
}
