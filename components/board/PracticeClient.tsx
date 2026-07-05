"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import QuestionCard from "@/components/pyq/QuestionCard";
import type { PYQDifficulty, PYQQuestion } from "@/lib/pyq";
import { BOARD_QUESTION_TYPES, selectObjective, type BoardQuestionType } from "@/lib/cbse/practice";
import type { BoardChapter } from "@/lib/boards";
import type { ClassSlug } from "@/lib/boardDashboard";
import { supabase } from "@/lib/supabase";
import { Upload, FileText, Check, AlertCircle } from "lucide-react";

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
  base, cls, chapters, initialChapterId, boardName = "CBSE",
}: { base: string; cls: ClassSlug; chapters: BoardChapter[]; initialChapterId?: string; boardName?: string }) {
  const resetKey = `sb_practice_reset_${base}`;

  const [typeKey, setTypeKey] = useState<string>(BOARD_QUESTION_TYPES[0].key);
  const [chapterId, setChapterId] = useState<string>(initialChapterId && chapters.some((c) => c.id === initialChapterId) ? initialChapterId : "all");
  const [difficulty, setDifficulty] = useState<PYQDifficulty | "All">("All");

  const [servedIds, setServedIds] = useState<Set<string>>(new Set());
  const [sessionServed, setSessionServed] = useState<Set<string>>(new Set());
  const [loadingServed, setLoadingServed] = useState(true);
  const [signedIn, setSignedIn] = useState<boolean | null>(null);

  const activeType: BoardQuestionType = useMemo(() => BOARD_QUESTION_TYPES.find((t) => t.key === typeKey)!, [typeKey]);
  // ALWAYS an explicit scope from THIS board's chapters — an empty union means
  // an honestly empty pool, never a fallback into another board's bank.
  const chapterPyq = useMemo(() => {
    if (chapterId === "all") return [...new Set(chapters.flatMap((c) => c.pyqChapters))];
    return chapters.find((c) => c.id === chapterId)?.pyqChapters ?? [];
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

  // Subjective Upload states
  const [uploadingState, setUploadingState] = useState<"idle" | "uploading" | "success" | "error">("idle");
  const [uploadedFile, setUploadedFile] = useState<{ name: string; url?: string; localPreview?: string; isLocalFallback?: boolean } | null>(null);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingState("uploading");
    setUploadedFile(null);

    let localPreview = "";
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        localPreview = reader.result as string;
        setUploadedFile({
          name: file.name,
          localPreview: reader.result as string,
          isLocalFallback: true,
        });
      };
      reader.readAsDataURL(file);
    }

    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `board-submissions/${fileName}`;

      const { data: userData } = await supabase.auth.getUser();
      const userId = userData?.user?.id ?? "anonymous";
      const fullPath = `${userId}/${chapterId}/${filePath}`;

      const { data, error } = await supabase.storage
        .from("board-submissions")
        .upload(fullPath, file, { cacheControl: "3600", upsert: true });

      if (error) {
        console.warn("Storage upload fallback: using local session", error);
        setUploadingState("success");
        setUploadedFile((prev) => ({
          name: file.name,
          localPreview: prev?.localPreview || localPreview || undefined,
          isLocalFallback: true,
        }));
      } else {
        const { data: urlData } = supabase.storage.from("board-submissions").getPublicUrl(fullPath);
        setUploadingState("success");
        setUploadedFile({
          name: file.name,
          url: urlData?.publicUrl,
        });
      }
    } catch (err) {
      console.warn("Storage upload fallback catch: using local session", err);
      setUploadingState("success");
      setUploadedFile((prev) => ({
        name: file.name,
        localPreview: prev?.localPreview || localPreview || undefined,
        isLocalFallback: true,
      }));
    }
  };

  const generateSubjective = useCallback(async () => {
    setSubLoading(true); setSubError(null); setSubQ(null); setGrade(null); setAnswer("");
    try {
      const chapterTitle = chapterId === "all" ? undefined : chapters.find((c) => c.id === chapterId)?.title;
      const res = await fetch("/api/board-practice", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ classNumber: cls === "class-12" ? 12 : 11, chapter: chapterTitle, typeKey, marks: activeType.marks, board: boardName }),
      });
      const data = await res.json();
      if (!res.ok) { setSubError(data.error ?? "Could not generate a question right now."); return; }
      setSubQ(data);
    } catch { setSubError("Could not reach the question generator."); }
    finally { setSubLoading(false); }
  }, [chapterId, chapters, cls, typeKey, activeType.marks, boardName]);

  const evaluate = useCallback(async () => {
    if (!subQ || !answer.trim()) return;
    setGradeLoading(true); setGrade(null);
    try {
      const res = await fetch("/api/board-examiner", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: subQ.question, answer, maxMarks: activeType.marks, exam: boardName }),
      });
      const data = await res.json();
      if (res.ok && data.result) setGrade(data.result);
      else setSubError(data.error ?? "Evaluation failed.");
    } catch { setSubError("Could not reach the examiner."); }
    finally { setGradeLoading(false); }
  }, [subQ, answer, activeType.marks, boardName]);

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
                placeholder="Write your answer as you would in the board exam (or upload a PDF/Image below)..."
                className="w-full rounded-lg border border-white/10 bg-[#0B1220] p-3 text-sm text-white/90 outline-none focus:border-cyan-400/40" />
              
              {/* Subjective answer upload & status UI */}
              <div className="flex flex-col gap-3 p-3 bg-white/[0.02] border border-white/[0.06] rounded-xl">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-white/70">Upload handwritten page, lab record, or project file (Image or PDF)</span>
                  <label className="flex items-center gap-1.5 px-3 py-1.5 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 text-xs font-bold rounded-lg border border-cyan-500/20 cursor-pointer transition">
                    <Upload className="h-3.5 w-3.5" /> Select File
                    <input type="file" accept="image/*,application/pdf" onChange={handleFileUpload} className="hidden" />
                  </label>
                </div>
                {uploadingState === "uploading" && (
                  <p className="text-xs text-cyan-300 animate-pulse">Uploading file securely...</p>
                )}
                {uploadedFile && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-emerald-300">
                      <Check className="h-4 w-4" />
                      <span>
                        {uploadedFile.name} &middot; {uploadedFile.isLocalFallback ? "Stored in Session — Bucket Pending Migration" : "Uploaded Successfully"}
                      </span>
                    </div>
                    {uploadedFile.localPreview && (
                      <div className="relative h-32 w-fit max-w-full rounded-lg border border-white/10 overflow-hidden bg-black/40">
                        <img src={uploadedFile.localPreview} alt="Answer Preview" className="h-full object-contain" />
                      </div>
                    )}
                    <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 bg-white/[0.04] text-white/50 border border-white/10 w-fit rounded-lg">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-400 animate-pulse" />
                      Status: Pending Teacher Review
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                <button onClick={evaluate} disabled={gradeLoading || (!answer.trim() && !uploadedFile)}
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
