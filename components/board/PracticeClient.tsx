"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import QuestionCard from "@/components/pyq/QuestionCard";
import type { PYQDifficulty, PYQQuestion } from "@/lib/pyq";
import { BOARD_QUESTION_TYPES, selectObjective, type BoardQuestionType } from "@/lib/cbse/practice";
import type { CbseChapter } from "@/lib/cbse/syllabus";
import type { ClassSlug } from "@/lib/boardDashboard";

// ─────────────────────────────────────────────────────────────────────────────
// Board Practice — objective types serve REAL verified questions with
// per-student non-repetition (served ids come from attempt_answers via
// /api/board/served, resettable). Subjective types are generated on demand by
// Gemini via /api/board-practice and graded by /api/board-examiner. Nothing is
// fabricated: on AI failure the UI shows the honest error, not a fake question.
// ─────────────────────────────────────────────────────────────────────────────

const DIFFICULTIES: (PYQDifficulty | "All")[] = ["All", "Easy", "Moderate", "Hard"];
const BATCH = 8;

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick}
      className={`shrink-0 whitespace-nowrap rounded-lg border px-3 py-1.5 text-xs font-semibold transition ${
        active ? "border-cyan-400/50 bg-cyan-500/15 text-white" : "border-white/10 bg-white/[0.03] text-white/60 hover:text-white/85"
      }`}>
      {children}
    </button>
  );
}

export default function PracticeClient({
  base, cls, chapters, initialChapterId,
}: { base: string; cls: ClassSlug; chapters: CbseChapter[]; initialChapterId?: string }) {
  const resetKey = `sb_practice_reset_${base}`;

  const [typeKey, setTypeKey] = useState<string>(BOARD_QUESTION_TYPES[0].key);
  const [chapterId, setChapterId] = useState<string>(initialChapterId && chapters.some((c) => c.id === initialChapterId) ? initialChapterId : "all");
  const [difficulty, setDifficulty] = useState<PYQDifficulty | "All">("All");

  const [servedIds, setServedIds] = useState<Set<string>>(new Set());
  const [sessionServed, setSessionServed] = useState<Set<string>>(new Set());
  const [loadingServed, setLoadingServed] = useState(true);
  const [signedIn, setSignedIn] = useState<boolean | null>(null);

  const activeType: BoardQuestionType = useMemo(() => BOARD_QUESTION_TYPES.find((t) => t.key === typeKey)!, [typeKey]);
  const chapterPyq = useMemo(() => {
    if (chapterId === "all") return undefined;
    return chapters.find((c) => c.id === chapterId)?.pyqChapters;
  }, [chapterId, chapters]);

  // Fetch served question ids (non-repetition), honouring the device reset window.
  const fetchServed = useCallback(async () => {
    setLoadingServed(true);
    try {
      const resetAfter = typeof window !== "undefined" ? window.localStorage.getItem(resetKey) : null;
      const qs = resetAfter ? `?resetAfter=${encodeURIComponent(resetAfter)}` : "";
      const res = await fetch(`/api/board/served${qs}`);
      if (res.status === 401) { setSignedIn(false); setServedIds(new Set()); return; }
      setSignedIn(true);
      const data = await res.json();
      setServedIds(new Set<string>(Array.isArray(data.ids) ? data.ids : []));
    } catch { setServedIds(new Set()); }
    finally { setLoadingServed(false); }
  }, [resetKey]);

  useEffect(() => {
    const t = setTimeout(() => { void fetchServed(); }, 0);
    return () => clearTimeout(t);
  }, [fetchServed]);

  // Objective batch — real questions, excluding served + this session's served.
  const [batch, setBatch] = useState<PYQQuestion[]>([]);
  const [result, setResult] = useState<{ poolSize: number; servedInPool: number; exhausted: boolean } | null>(null);

  const loadBatch = useCallback(() => {
    if (activeType.kind !== "objective" || !activeType.pyqType) return;
    const exclude = new Set<string>([...servedIds, ...sessionServed]);
    const r = selectObjective({ cls, chapterPyq, pyqType: activeType.pyqType, difficulty: difficulty === "All" ? null : difficulty, count: BATCH, excludeIds: exclude });
    setBatch(r.questions);
    setResult({ poolSize: r.poolSize, servedInPool: r.servedInPool, exhausted: r.exhausted });
  }, [activeType, cls, chapterPyq, difficulty, servedIds, sessionServed]);

  useEffect(() => {
    if (activeType.kind !== "objective" || loadingServed) return;
    const t = setTimeout(() => loadBatch(), 0);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeKey, chapterId, difficulty, loadingServed]);

  const onAnswered = useCallback((q: PYQQuestion) => {
    setSessionServed((prev) => new Set(prev).add(q.id));
  }, []);

  const doReset = useCallback(async () => {
    if (typeof window !== "undefined") window.localStorage.setItem(resetKey, new Date().toISOString());
    setSessionServed(new Set());
    await fetchServed();
  }, [resetKey, fetchServed]);

  // ── Subjective (AI) state ───────────────────────────────────────────────────
  const [subLoading, setSubLoading] = useState(false);
  const [subError, setSubError] = useState<string | null>(null);
  const [subQ, setSubQ] = useState<{ question: string; markingScheme: string[]; modelAnswer: string } | null>(null);
  const [answer, setAnswer] = useState("");
  const [grade, setGrade] = useState<{ marksAwarded: number; maxMarks: number; verdict: string; missingKeywords: string[]; strengths: string[] } | null>(null);
  const [gradeLoading, setGradeLoading] = useState(false);

  const generateSubjective = useCallback(async () => {
    setSubLoading(true); setSubError(null); setSubQ(null); setGrade(null); setAnswer("");
    try {
      const chapterTitle = chapterId === "all" ? undefined : chapters.find((c) => c.id === chapterId)?.title;
      const res = await fetch("/api/board-practice", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ classNumber: cls === "class-12" ? 12 : 11, chapter: chapterTitle, typeKey, marks: activeType.marks }),
      });
      const data = await res.json();
      if (!res.ok) { setSubError(data.error ?? "Could not generate a question right now."); return; }
      setSubQ(data);
    } catch { setSubError("Could not reach the question generator."); }
    finally { setSubLoading(false); }
  }, [chapterId, chapters, cls, typeKey, activeType.marks]);

  const evaluate = useCallback(async () => {
    if (!subQ || !answer.trim()) return;
    setGradeLoading(true); setGrade(null);
    try {
      const res = await fetch("/api/board-examiner", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: subQ.question, answer, maxMarks: activeType.marks, exam: "CBSE" }),
      });
      const data = await res.json();
      if (res.ok && data.result) setGrade(data.result);
      else setSubError(data.error ?? "Evaluation failed.");
    } catch { setSubError("Could not reach the examiner."); }
    finally { setGradeLoading(false); }
  }, [subQ, answer, activeType.marks]);

  return (
    <div className="space-y-5">
      {/* Type tabs */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {BOARD_QUESTION_TYPES.map((t) => (
          <Chip key={t.key} active={typeKey === t.key} onClick={() => setTypeKey(t.key)}>
            {t.label}{t.kind === "subjective" ? " · AI" : ""}
          </Chip>
        ))}
      </div>

      {/* Chapter + difficulty filters */}
      <div className="flex flex-wrap items-center gap-3">
        <select value={chapterId} onChange={(e) => setChapterId(e.target.value)}
          className="rounded-lg border border-white/10 bg-[#0B1220] px-3 py-2 text-sm text-white/85">
          <option value="all">All chapters</option>
          {chapters.map((c) => <option key={c.id} value={c.id}>Unit {c.unit}: {c.title}</option>)}
        </select>
        {activeType.kind === "objective" && (
          <div className="flex gap-1.5">
            {DIFFICULTIES.map((d) => <Chip key={d} active={difficulty === d} onClick={() => setDifficulty(d)}>{d}</Chip>)}
          </div>
        )}
      </div>

      <p className="text-sm text-white/50">{activeType.blurb}</p>

      {activeType.kind === "objective" ? (
        <>
          {/* Non-repetition status */}
          <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/[0.02] p-3 text-xs">
            <span className="text-white/55">
              {loadingServed ? "Checking your history…" :
                result ? <>{result.poolSize} in pool · {servedIds.size + sessionServed.size} already served{result.exhausted ? " · pool exhausted" : ""}</> : null}
              {signedIn === false && " · sign in to save progress & avoid repeats"}
            </span>
            <div className="flex gap-2">
              <button onClick={loadBatch} className="rounded-lg border border-cyan-400/40 bg-cyan-500/10 px-3 py-1.5 font-bold text-cyan-300 hover:bg-cyan-500/20">Next batch →</button>
              <button onClick={doReset} className="rounded-lg border border-white/15 bg-white/[0.04] px-3 py-1.5 font-semibold text-white/70 hover:bg-white/[0.08]">Reset served</button>
            </div>
          </div>

          {batch.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center text-sm text-white/55">
              {result && result.poolSize === 0
                ? "No verified questions of this type for the selected chapter yet — try another chapter or type."
                : result?.exhausted
                  ? "You've seen every question in this pool. Hit “Reset served” to practise them again."
                  : "Loading questions…"}
            </div>
          ) : (
            <div className="space-y-3">
              {batch.map((q) => <QuestionCard key={q.id} question={q} attemptSource="practice" onAnswered={onAnswered} />)}
            </div>
          )}
        </>
      ) : (
        /* Subjective (AI) */
        <div className="space-y-4">
          <button onClick={generateSubjective} disabled={subLoading}
            className="rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-5 py-2.5 text-sm font-black text-black disabled:opacity-60">
            {subLoading ? "Generating…" : `Generate ${activeType.label} question`}
          </button>
          {subError && <p className="rounded-xl border border-rose-500/30 bg-rose-500/[0.06] p-3 text-sm text-rose-300">{subError}</p>}
          {subQ && (
            <div className="space-y-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
              <p className="font-medium leading-relaxed text-white">{subQ.question}</p>
              <textarea value={answer} onChange={(e) => setAnswer(e.target.value)} rows={5}
                placeholder="Write your answer as you would in the board exam…"
                className="w-full rounded-lg border border-white/10 bg-[#0B1220] p-3 text-sm text-white/90 outline-none focus:border-cyan-400/40" />
              <div className="flex flex-wrap gap-2">
                <button onClick={evaluate} disabled={gradeLoading || !answer.trim()}
                  className="rounded-lg border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-bold text-cyan-300 disabled:opacity-50">
                  {gradeLoading ? "Evaluating…" : "Evaluate my answer"}
                </button>
              </div>
              {grade && (
                <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/[0.05] p-3 text-sm">
                  <div className="font-black text-emerald-300">{grade.marksAwarded} / {grade.maxMarks} marks</div>
                  <p className="mt-1 text-white/75">{grade.verdict}</p>
                  {grade.missingKeywords?.length > 0 && <p className="mt-2 text-rose-300"><span className="font-bold">Missing:</span> {grade.missingKeywords.join(", ")}</p>}
                  {grade.strengths?.length > 0 && <p className="mt-1 text-emerald-200/80"><span className="font-bold">Good:</span> {grade.strengths.join(", ")}</p>}
                </div>
              )}
              <details className="text-sm">
                <summary className="cursor-pointer font-semibold text-white/60">Model answer & marking scheme</summary>
                <div className="mt-2 space-y-2 text-white/70">
                  {subQ.markingScheme?.length > 0 && (
                    <ul className="list-disc space-y-0.5 pl-5">{subQ.markingScheme.map((m, i) => <li key={i}>{m}</li>)}</ul>
                  )}
                  <p className="whitespace-pre-wrap">{subQ.modelAnswer}</p>
                </div>
              </details>
            </div>
          )}
          <p className="text-xs text-white/40">AI subjective questions need the Gemini key configured (production). Marks are AI-graded to the board scheme — never fabricated.</p>
        </div>
      )}
    </div>
  );
}
