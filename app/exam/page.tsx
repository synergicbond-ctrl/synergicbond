"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import SponsoredMock from "@/components/SponsoredMock";
import { EXAM_BLUEPRINTS } from "@/lib/examBlueprints";
import { submitAttempt, stampNow, bankElapsed, elapsedMs } from "@/lib/attempts/client";
import { renderChemistry } from "@/lib/renderChemistry";
import type { PYQExam } from "@/lib/pyq";

// ─────────────────────────────────────────────────────────────────────────────
// /exam — real-pattern mock exam (Week 5A rebuild).
//
// Real paper sizes from lib/examBlueprints (NEET 45 · JEE Main 25 · JEE Adv
// 18, MCQ-only honestly). One question at a time, tappable options with a
// strong selected state, question navigator, sticky action bar, math via
// renderChemistry. Review unlocks only after submit; the submission persists
// through the Attempt Layer (attempts + attempt_answers).
// ─────────────────────────────────────────────────────────────────────────────

interface PaperQuestion {
  id: string;
  question: string;
  options: Record<string, string>;
  correct: string;
  explanation: string;
  difficulty: string;
  chapter: string;
  topic?: string;
  questionId?: string;
}

interface Paper {
  exam: PYQExam;
  markingScheme: string;
  marksCorrect: number;
  marksWrong: number;
  note: string | null;
  totalQuestions: number;
  questions: PaperQuestion[];
}

type Phase = "setup" | "loading" | "running" | "submitting" | "review";

const EXAM_ACCENT: Record<PYQExam, string> = {
  NEET: "border-emerald-700 hover:border-emerald-500 text-emerald-300",
  "JEE Main": "border-cyan-700 hover:border-cyan-500 text-cyan-300",
  "JEE Advanced": "border-sky-700 hover:border-sky-500 text-sky-300",
};

export default function ExamPage() {
  const [phase, setPhase] = useState<Phase>("setup");
  const [paper, setPaper] = useState<Paper | null>(null);
  const [fallbackNote, setFallbackNote] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [needsSignIn, setNeedsSignIn] = useState(false);

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [confirmSubmit, setConfirmSubmit] = useState(false);
  const [attemptId, setAttemptId] = useState<string | null>(null);
  const [saveFailed, setSaveFailed] = useState(false);

  const startedAt = useRef(0);
  const questionShownAt = useRef(0);
  const timeSpent = useRef<Record<number, number>>({});

  // Stamp per-question focus time when leaving a question.
  const bankTime = (index: number) => bankElapsed(questionShownAt, timeSpent.current, index);

  const startExam = async (exam: PYQExam) => {
    setPhase("loading");
    setError("");
    setNeedsSignIn(false);
    setFallbackNote(null);
    try {
      const res = await fetch("/api/exam", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ exam }),
      });
      const data = await res.json();
      if (res.status === 401) {
        setNeedsSignIn(true);
        setPhase("setup");
        return;
      }
      if (!res.ok) throw new Error(data.error || "Generation failed");
      setPaper(data.paper);
      setFallbackNote(data.fallbackNote ?? null);
      setAnswers({});
      timeSpent.current = {};
      setCurrent(0);
      setAttemptId(null);
      setSaveFailed(false);
      setConfirmSubmit(false);
      stampNow(startedAt, questionShownAt);
      setPhase("running");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to generate the paper.");
      setPhase("setup");
    }
  };

  const goTo = (index: number) => {
    if (!paper || index < 0 || index >= paper.questions.length) return;
    bankTime(current);
    setCurrent(index);
  };

  const pick = (key: string) => {
    setAnswers((p) => ({ ...p, [current]: p[current] === key ? undefined : key } as Record<number, string>));
  };

  const doSubmit = async () => {
    if (!paper) return;
    bankTime(current);
    setPhase("submitting");
    const result = await submitAttempt({
      source: "exam",
      exam: paper.exam,
      title: `${paper.exam} Mock Paper`,
      durationMs: elapsedMs(startedAt.current),
      answers: paper.questions.map((q, i) => ({
        questionId: q.questionId,
        questionText: q.question,
        options: q.options,
        selectedAnswer: answers[i] ?? null,
        correctAnswer: q.correct,
        explanation: q.explanation || undefined,
        chapter: q.chapter,
        topic: q.topic,
        difficulty: q.difficulty,
        timeSpentMs: Math.round(timeSpent.current[i] ?? 0),
      })),
    });
    if (result) setAttemptId(result.attemptId);
    else setSaveFailed(true);
    setPhase("review");
  };

  // Result numbers — computed locally from the paper (review is post-submit only).
  const graded = paper
    ? paper.questions.map((q, i) => {
        const selected = answers[i] ?? null;
        return { q, i, selected, isCorrect: selected !== null && selected === q.correct };
      })
    : [];
  const answeredCount = graded.filter((g) => g.selected !== null).length;
  const correctCount = graded.filter((g) => g.isCorrect).length;
  const score = paper
    ? graded.reduce((s, g) => (g.selected === null ? s : s + (g.isCorrect ? paper.marksCorrect : paper.marksWrong)), 0)
    : 0;

  // ── Setup ──────────────────────────────────────────────────────────────────
  if (phase === "setup" || phase === "loading") {
    return (
      <main className="min-h-screen bg-black text-white">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">Exam Center</p>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl">Mock Exam</h1>
          <p className="mt-2 text-sm text-white/55">
            Real paper pattern and marking. AI-generated at exam standard — if AI is slow or unavailable,
            the paper is built instantly from verified PYQs instead.
          </p>

          {needsSignIn && (
            <div className="mt-6 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-amber-200">
              Sign in to take an exam — attempts are saved to your account for revision.{" "}
              <Link href="/auth/signin" className="font-bold underline underline-offset-4">Sign in →</Link>
            </div>
          )}
          {error && (
            <div className="mt-6 rounded-2xl border border-rose-500/30 bg-rose-500/10 p-4 text-sm text-rose-200">{error}</div>
          )}

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {Object.values(EXAM_BLUEPRINTS).map((bp) => (
              <button
                key={bp.exam}
                disabled={phase === "loading"}
                onClick={() => startExam(bp.exam)}
                className={`rounded-2xl border bg-white/[0.02] p-5 text-left transition hover:-translate-y-0.5 hover:bg-white/[0.04] disabled:opacity-50 ${EXAM_ACCENT[bp.exam]}`}
              >
                <div className="text-lg font-black text-white">{bp.exam}</div>
                <div className="mt-1 text-2xl font-black">{bp.totalQuestions} Qs</div>
                <div className="mt-1 text-xs text-white/50">{bp.markingLabel}</div>
                {bp.note && <div className="mt-2 text-[11px] leading-snug text-white/35">{bp.note}</div>}
              </button>
            ))}
          </div>

          {phase === "loading" && (
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center">
              <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-cyan-400 border-t-transparent" />
              <p className="mt-3 text-sm font-semibold text-white/70">Building your paper…</p>
              <p className="mt-1 text-xs text-white/40">
                Takes up to ~20s with AI — falls back to verified PYQs automatically if AI is slow.
              </p>
            </div>
          )}

          <p className="mt-8 text-xs text-white/35">
            Looking for short drills instead? Use{" "}
            <Link href="/quiz" className="text-cyan-400 hover:underline">Quiz</Link> or{" "}
            <Link href="/tests" className="text-cyan-400 hover:underline">Practice Tests</Link>.
          </p>

          <div className="mt-8"><SponsoredMock /></div>
        </div>
      </main>
    );
  }

  if (!paper) return null;

  // ── Review (post-submit only) ──────────────────────────────────────────────
  if (phase === "review" || phase === "submitting") {
    return (
      <main className="min-h-screen bg-black text-white">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">Result</p>
          <h1 className="text-3xl font-black">{paper.exam} Mock Paper</h1>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
              <div className="text-2xl font-black text-cyan-300">{score}</div>
              <div className="mt-1 text-xs text-white/50">Score / {paper.questions.length * paper.marksCorrect}</div>
            </div>
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-center">
              <div className="text-2xl font-black text-emerald-300">{correctCount}</div>
              <div className="mt-1 text-xs text-white/50">Correct</div>
            </div>
            <div className="rounded-2xl border border-rose-500/20 bg-rose-500/5 p-4 text-center">
              <div className="text-2xl font-black text-rose-300">{answeredCount - correctCount}</div>
              <div className="mt-1 text-xs text-white/50">Incorrect</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
              <div className="text-2xl font-black text-white/70">{paper.questions.length - answeredCount}</div>
              <div className="mt-1 text-xs text-white/50">Unanswered</div>
            </div>
          </div>

          <div className="mt-4 text-sm">
            {phase === "submitting" ? (
              <p className="text-white/50">Saving your attempt…</p>
            ) : saveFailed ? (
              <p className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 text-amber-200">
                Result shown above, but the attempt could not be saved (are you signed in?).
              </p>
            ) : attemptId ? (
              <p className="text-emerald-300/80">
                ✓ Attempt saved —{" "}
                <Link href="/revision" className="font-bold underline underline-offset-4">review anytime in Revision</Link>
              </p>
            ) : null}
          </div>

          <h2 className="mt-10 mb-4 text-xl font-bold">Review</h2>
          <div className="space-y-4">
            {graded.map(({ q, i, selected, isCorrect }) => (
              <div key={q.id} className="rounded-2xl border border-white/[0.08] bg-[#111827] p-4">
                <div className="mb-2 flex flex-wrap items-center gap-2 text-[11px]">
                  <span className="font-bold text-cyan-300">Q{i + 1}</span>
                  <span className="rounded bg-white/5 px-2 py-0.5 text-white/60">{q.chapter}</span>
                  {selected === null ? (
                    <span className="rounded bg-white/10 px-2 py-0.5 font-bold text-white/50">Skipped</span>
                  ) : (
                    <span className={`rounded px-2 py-0.5 font-bold ${isCorrect ? "bg-emerald-500/15 text-emerald-300" : "bg-rose-500/15 text-rose-300"}`}>
                      {isCorrect ? `✓ +${paper.marksCorrect}` : `✗ ${paper.marksWrong}`}
                    </span>
                  )}
                </div>
                <p className="text-sm font-medium leading-relaxed">{renderChemistry(q.question)}</p>
                <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {Object.entries(q.options).map(([k, v]) => {
                    const tone =
                      k === q.correct
                        ? "border-emerald-500/50 bg-emerald-500/10 text-emerald-200 font-semibold"
                        : k === selected
                          ? "border-rose-500/50 bg-rose-500/10 text-rose-200 font-semibold"
                          : "border-white/10 bg-white/[0.03] text-white/60";
                    return (
                      <div key={k} className={`rounded-lg border p-2.5 text-sm ${tone}`}>
                        <span className="mr-2 font-bold">{k}.</span>
                        {renderChemistry(v)}
                        {k === selected && <span className="ml-2 text-[10px] uppercase tracking-wide opacity-70">your answer</span>}
                      </div>
                    );
                  })}
                </div>
                {q.explanation && (
                  <div className="mt-3 rounded-xl border border-white/[0.08] bg-white/[0.03] p-3 text-sm text-white/65">
                    <span className="font-semibold text-indigo-300">Explanation: </span>
                    {renderChemistry(q.explanation)}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => { setPaper(null); setPhase("setup"); }}
              className="rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-500/20"
            >
              New exam
            </button>
            <Link href="/revision" className="rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white/80 transition hover:bg-white/[0.08]">
              Revision →
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // ── Runner ─────────────────────────────────────────────────────────────────
  const q = paper.questions[current];
  const selected = answers[current];

  return (
    <main className="min-h-screen bg-black pb-28 text-white">
      <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h1 className="text-lg font-black">{paper.exam} Mock Paper</h1>
            <p className="text-xs text-white/45">{paper.totalQuestions} questions · {paper.markingScheme}</p>
          </div>
          <span className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-xs font-bold text-white/80">
            {answeredCount}/{paper.questions.length} answered
          </span>
        </div>

        {fallbackNote && (
          <p className="mt-3 rounded-xl border border-amber-500/25 bg-amber-500/[0.07] p-3 text-xs leading-snug text-amber-200/90">
            {fallbackNote}
          </p>
        )}

        {/* Question navigator */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {paper.questions.map((_, i) => {
            const state =
              i === current
                ? "border-cyan-400 bg-cyan-500/20 text-white"
                : answers[i]
                  ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-300"
                  : "border-white/10 bg-white/[0.03] text-white/50";
            return (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-8 w-8 rounded-lg border text-xs font-bold transition ${state}`}
                aria-label={`Question ${i + 1}${answers[i] ? " (answered)" : ""}`}
              >
                {i + 1}
              </button>
            );
          })}
        </div>

        {/* Question */}
        <div className="mt-5 rounded-2xl border border-white/[0.08] bg-[#111827] p-4 sm:p-5">
          <div className="mb-2 flex flex-wrap items-center gap-2 text-[11px]">
            <span className="font-bold text-cyan-300">Q{current + 1} of {paper.questions.length}</span>
            <span className="rounded bg-white/5 px-2 py-0.5 text-white/60">{q.chapter}</span>
            <span className="rounded bg-white/5 px-2 py-0.5 capitalize text-white/60">{q.difficulty}</span>
          </div>
          <p className="text-base font-medium leading-relaxed">{renderChemistry(q.question)}</p>

          <div className="mt-4 grid grid-cols-1 gap-2.5" role="radiogroup" aria-label="Answer options">
            {Object.entries(q.options).map(([k, v]) => {
              const isSelected = selected === k;
              return (
                <button
                  key={k}
                  role="radio"
                  aria-checked={isSelected}
                  onClick={() => pick(k)}
                  className={`flex w-full items-start gap-3 rounded-xl border p-3.5 text-left text-sm transition ${
                    isSelected
                      ? "border-cyan-400 bg-cyan-500/15 text-white ring-2 ring-cyan-400/60"
                      : "border-white/10 bg-white/[0.03] text-white/75 hover:border-cyan-400/40 hover:bg-white/[0.06]"
                  }`}
                >
                  <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-black ${
                    isSelected ? "border-cyan-300 bg-cyan-400 text-black" : "border-white/25 text-white/60"
                  }`}>
                    {k}
                  </span>
                  <span className="pt-0.5">{renderChemistry(v)}</span>
                </button>
              );
            })}
          </div>
          <p className="mt-3 text-[11px] text-white/35">Tap again to clear your selection. Answers reveal only after submit.</p>
        </div>
      </div>

      {/* Sticky action bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#0B0F19]/95 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center gap-2 px-4 py-3 sm:px-6">
          <button
            onClick={() => goTo(current - 1)}
            disabled={current === 0}
            className="rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-white/80 transition hover:bg-white/[0.08] disabled:opacity-35"
          >
            ← Prev
          </button>
          <button
            onClick={() => goTo(current + 1)}
            disabled={current === paper.questions.length - 1}
            className="rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-white/80 transition hover:bg-white/[0.08] disabled:opacity-35"
          >
            Next →
          </button>
          <div className="flex-1" />
          {confirmSubmit ? (
            <>
              <span className="hidden text-xs text-white/50 sm:block">
                {paper.questions.length - answeredCount} unanswered — submit?
              </span>
              <button onClick={() => setConfirmSubmit(false)} className="rounded-xl border border-white/15 px-3 py-2.5 text-sm font-semibold text-white/70">
                Back
              </button>
              <button onClick={doSubmit} className="rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-5 py-2.5 text-sm font-black text-black transition hover:-translate-y-0.5">
                Confirm Submit
              </button>
            </>
          ) : (
            <button
              onClick={() => (answeredCount < paper.questions.length ? setConfirmSubmit(true) : doSubmit())}
              className="rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-6 py-2.5 text-sm font-black text-black shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5"
            >
              Submit Exam
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
