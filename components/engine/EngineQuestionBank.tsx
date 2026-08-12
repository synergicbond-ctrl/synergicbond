"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import QuestionCard from "@/components/pyq/QuestionCard";
import { ALL_PYQ_QUESTIONS } from "@/lib/pyq";
import type { PYQChapter, PYQDifficulty, PYQQuestion } from "@/lib/pyq";
import { ENGINE_PROGRAMS, filterBankType, type EngineSlug, type EngineQType } from "@/lib/engine/programSpec";

// ─────────────────────────────────────────────────────────────────────────────
// Engine Question Bank — program-locked, chapter-scoped.
//   bank types       → REAL verified questions (QuestionCard, attempts recorded,
//                      non-repetition via /api/board/served — same derivation
//                      the board layer uses, shared not duplicated)
//   ai-numeric types → AI-generated numeric questions, auto-graded with
//                      tolerance; the graded attempt IS recorded (schema
//                      supports AI questions with a known correct answer)
//   ai-self types    → AI-generated exotic formats (matrix/list/paragraph…);
//                      model answer revealed, SELF-graded and honestly NOT
//                      recorded into analytics (a self-claim is not a
//                      verified answer)
// ─────────────────────────────────────────────────────────────────────────────

const BATCH = 6;
const DIFFS: (PYQDifficulty | "All")[] = ["All", "Easy", "Moderate", "Hard", "Olympiad"];

function shuffle<T>(arr: T[], seed: number): T[] {
  const a = [...arr];
  let s = seed || 1;
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    const j = s % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function VirtualNumericalKeyboard({
  value,
  onChange,
  disabled,
}: {
  value: string;
  onChange: (val: string) => void;
  disabled: boolean;
}) {
  const keys = [
    "1", "2", "3",
    "4", "5", "6",
    "7", "8", "9",
    "-", "0", ".",
  ];

  const handleKeyPress = (key: string) => {
    if (disabled) return;
    onChange(value + key);
  };

  const handleBackspace = () => {
    if (disabled) return;
    onChange(value.slice(0, -1));
  };

  const handleClear = () => {
    if (disabled) return;
    onChange("");
  };

  return (
    <div className="mt-3 p-3 bg-white/[0.02] border border-white/10 rounded-xl w-64 space-y-2 select-none">
      <p className="text-[10px] uppercase font-bold tracking-wider text-white/40 mb-1">JEE Virtual Keyboard</p>
      <div className="grid grid-cols-3 gap-1.5">
        {keys.map((k) => (
          <button
            key={k}
            type="button"
            disabled={disabled}
            onClick={() => handleKeyPress(k)}
            className="flex h-10 items-center justify-center rounded-lg bg-[#111827] border border-white/10 text-sm font-bold text-white hover:bg-white/[0.1] active:scale-95 transition disabled:opacity-50"
          >
            {k}
          </button>
        ))}
        <button
          type="button"
          disabled={disabled}
          onClick={handleClear}
          className="col-span-1 flex h-10 items-center justify-center rounded-lg bg-rose-500/10 border border-rose-500/20 text-xs font-black text-rose-300 hover:bg-rose-500/20 active:scale-95 transition disabled:opacity-50"
        >
          CLEAR
        </button>
        <button
          type="button"
          disabled={disabled}
          onClick={handleBackspace}
          className="col-span-2 flex h-10 items-center justify-center rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs font-black text-amber-300 hover:bg-amber-500/20 active:scale-95 transition disabled:opacity-50"
        >
          BACKSPACE
        </button>
      </div>
    </div>
  );
}

/** Parse "42", "3.25", "6.02e23", "6.02×10^23", "6.02x10^23". */
function parseNumeric(s: string): number | null {
  const t = s.trim().replace(/×/g, "x").replace(/\s+/g, "");
  const sci = t.match(/^(-?\d+(?:\.\d+)?)(?:e|x10\^?)(-?\d+)$/i);
  if (sci) return Number(sci[1]) * Math.pow(10, Number(sci[2]));
  const n = Number(t);
  return Number.isFinite(n) ? n : null;
}

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

interface NumericItem { question: string; answer: string; unit: string; solution: string; tolerancePct?: number }
interface SelfItem { question: string; modelAnswer: string; explanation: string }

export default function EngineQuestionBank({
  slug, chapters, chapterTitle,
}: { slug: EngineSlug; chapters: PYQChapter[]; chapterTitle: string }) {
  const program = ENGINE_PROGRAMS[slug];
  const [typeKey, setTypeKey] = useState(program.questionTypes[0].key);
  const [difficulty, setDifficulty] = useState<PYQDifficulty | "All">("All");
  const activeType: EngineQType = useMemo(
    () => program.questionTypes.find((t) => t.key === typeKey) ?? program.questionTypes[0],
    [program, typeKey]
  );

  // ── bank path ───────────────────────────────────────────────────────────────
  const scope = useMemo(() => new Set<string>(chapters), [chapters]);
  const pool = useMemo(
    () => ALL_PYQ_QUESTIONS.filter((q) => scope.has(q.chapter) && q.exam === program.exam),
    [scope, program.exam]
  );

  const [servedIds, setServedIds] = useState<Set<string>>(new Set());
  const [sessionServed, setSessionServed] = useState<Set<string>>(new Set());
  const [signedIn, setSignedIn] = useState<boolean | null>(null);
  const resetKey = `sb_engine_reset_${slug}`;

  useEffect(() => {
    const t = setTimeout(async () => {
      try {
        const resetAfter = window.localStorage.getItem(resetKey);
        const res = await fetch(`/api/board/served${resetAfter ? `?resetAfter=${encodeURIComponent(resetAfter)}` : ""}`);
        if (res.status === 401) { setSignedIn(false); return; }
        setSignedIn(true);
        const data = await res.json();
        setServedIds(new Set<string>(Array.isArray(data.ids) ? data.ids : []));
      } catch { /* keep empty served set */ }
    }, 0);
    return () => clearTimeout(t);
  }, [resetKey]);

  const [batchSeed, setBatchSeed] = useState(1);
  const bankBatch: { questions: PYQQuestion[]; poolSize: number; exhausted: boolean } = useMemo(() => {
    if (activeType.source !== "bank") return { questions: [], poolSize: 0, exhausted: false };
    let typed = filterBankType(pool, activeType);
    if (difficulty !== "All") typed = typed.filter((q) => q.difficulty === difficulty);
    const fresh = typed.filter((q) => !servedIds.has(q.id) && !sessionServed.has(q.id));
    return {
      questions: shuffle(fresh, typed.length + batchSeed).slice(0, BATCH),
      poolSize: typed.length,
      exhausted: fresh.length === 0 && typed.length > 0,
    };
  }, [activeType, pool, difficulty, servedIds, sessionServed, batchSeed]);

  const onAnswered = useCallback((q: PYQQuestion) => {
    setSessionServed((prev) => new Set(prev).add(q.id));
  }, []);
  const doReset = useCallback(() => {
    window.localStorage.setItem(resetKey, new Date().toISOString());
    setServedIds(new Set());
    setSessionServed(new Set());
  }, [resetKey]);

  // ── AI paths (numeric + self-graded) ────────────────────────────────────────
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);
  const [numeric, setNumeric] = useState<NumericItem | null>(null);
  const [numericInput, setNumericInput] = useState("");
  const [numericResult, setNumericResult] = useState<"correct" | "wrong" | null>(null);
  const [selfItem, setSelfItem] = useState<SelfItem | null>(null);
  const [selfRevealed, setSelfRevealed] = useState(false);

  const generateAI = useCallback(async () => {
    setAiLoading(true); setAiError(null);
    setNumeric(null); setNumericInput(""); setNumericResult(null);
    setSelfItem(null); setSelfRevealed(false);
    try {
      const payload =
        activeType.source === "ai-numeric"
          ? { kind: "numeric", format: activeType.format, exam: program.exam, chapter: chapterTitle }
          : { kind: "advanced", pattern: activeType.pattern, exam: program.exam, chapter: chapterTitle };
      const res = await fetch("/api/engine/generate", {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) { setAiError(data.error ?? "Generation failed."); return; }
      if (activeType.source === "ai-numeric") setNumeric({ tolerancePct: 1, unit: "", ...data });
      else setSelfItem(data);
    } catch { setAiError("Could not reach the generator."); }
    finally { setAiLoading(false); }
  }, [activeType, program.exam, chapterTitle]);

  const gradeNumeric = useCallback(() => {
    if (!numeric) return;
    const given = parseNumeric(numericInput);
    const expected = parseNumeric(numeric.answer);
    if (given === null || expected === null) { setNumericResult("wrong"); return; }
    const tol = Math.max((numeric.tolerancePct ?? 1) / 100, 0.005);
    const ok =
      activeType.format === "integer"
        ? Math.round(given) === Math.round(expected)
        : Math.abs(given - expected) <= Math.abs(expected) * tol + 1e-12;
    setNumericResult(ok ? "correct" : "wrong");
    // Record the graded attempt (AI question with a known correct answer).
    void fetch("/api/attempts", {
      method: "POST", headers: { "Content-Type": "application/json" }, keepalive: true,
      body: JSON.stringify({
        source: "practice", exam: program.exam, durationMs: 0,
        answers: [{
          questionText: numeric.question,
          selectedAnswer: ok ? numeric.answer : numericInput.trim() || "-",
          correctAnswer: numeric.answer,
          explanation: numeric.solution,
          chapter: chapters[0],
          difficulty: "Moderate",
          timeSpentMs: 0,
        }],
      }),
    }).catch(() => {});
  }, [numeric, numericInput, activeType.format, program.exam, chapters]);

  return (
    <div className="space-y-4">
      {/* Type chips */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {program.questionTypes.map((t) => (
          <Chip key={t.key} active={typeKey === t.key} onClick={() => setTypeKey(t.key)}>
            {t.label}{t.source !== "bank" ? " · AI" : ""}
          </Chip>
        ))}
      </div>
      <p className="text-sm text-white/50">{activeType.blurb}</p>

      {activeType.source === "bank" ? (
        <>
          <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/[0.02] p-3 text-xs">
            <div className="flex gap-1.5">
              {DIFFS.map((d) => <Chip key={d} active={difficulty === d} onClick={() => setDifficulty(d)}>{d}</Chip>)}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white/50">{bankBatch.poolSize} in pool{signedIn === false ? " · sign in to save progress" : ""}</span>
              <button onClick={() => setBatchSeed((s) => s + 1)} className="rounded-lg border border-cyan-400/40 bg-cyan-500/10 px-3 py-1.5 font-bold text-cyan-300 hover:bg-cyan-500/20">Next →</button>
              <button onClick={doReset} className="rounded-lg border border-white/15 bg-white/[0.04] px-3 py-1.5 font-semibold text-white/70 hover:bg-white/[0.08]">Reset served</button>
            </div>
          </div>
          {bankBatch.questions.length === 0 ? (
            <p className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center text-sm text-white/55">
              {bankBatch.poolSize === 0
                ? "No verified questions of this type for this chapter yet."
                : bankBatch.exhausted
                  ? "You've seen every question in this pool — hit Reset served to run it again."
                  : "Loading…"}
            </p>
          ) : (
            <div className="space-y-3">
              {bankBatch.questions.map((q) => <QuestionCard key={q.id} question={q} attemptSource="practice" onAnswered={onAnswered} examScope={program.exam} />)}
            </div>
          )}
        </>
      ) : (
        <div className="space-y-3">
          <button onClick={generateAI} disabled={aiLoading}
            className="rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-5 py-2.5 text-sm font-black text-black disabled:opacity-60">
            {aiLoading ? "Generating…" : `Generate ${activeType.label} question`}
          </button>
          {aiError && <p className="rounded-xl border border-rose-500/30 bg-rose-500/[0.06] p-3 text-sm text-rose-300">{aiError}</p>}

          {numeric && (
            <div className="space-y-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
              <p className="font-medium leading-relaxed text-white">{numeric.question}</p>
              <div className="flex flex-wrap items-center gap-2">
                <input value={numericInput} onChange={(e) => setNumericInput(e.target.value)}
                  placeholder={activeType.format === "scientific" ? "e.g. 6.02e23 or 6.02×10^23" : "Your answer"}
                  className="w-56 rounded-lg border border-white/10 bg-[#0B1220] px-3 py-2 text-sm text-white/90 outline-none focus:border-cyan-400/40" />
                {numeric.unit && <span className="text-sm text-white/50">{numeric.unit}</span>}
                <button onClick={gradeNumeric} disabled={!numericInput.trim() || numericResult !== null}
                  className="rounded-lg border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-bold text-cyan-300 disabled:opacity-50">Check</button>
              </div>
              <VirtualNumericalKeyboard value={numericInput} onChange={setNumericInput} disabled={numericResult !== null} />
              {numericResult && (
                <div className={`rounded-xl border p-3 text-sm ${numericResult === "correct" ? "border-emerald-500/25 bg-emerald-500/[0.05]" : "border-rose-500/25 bg-rose-500/[0.05]"}`}>
                  <p className={`font-black ${numericResult === "correct" ? "text-emerald-300" : "text-rose-300"}`}>
                    {numericResult === "correct" ? "✅ Correct" : `❌ Incorrect — answer: ${numeric.answer}${numeric.unit ? " " + numeric.unit : ""}`}
                  </p>
                  <p className="mt-2 whitespace-pre-wrap text-white/70">{numeric.solution}</p>
                </div>
              )}
            </div>
          )}

          {selfItem && (
            <div className="space-y-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
              <p className="whitespace-pre-wrap font-medium leading-relaxed text-white">{selfItem.question}</p>
              {!selfRevealed ? (
                <button onClick={() => setSelfRevealed(true)} className="rounded-lg border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-bold text-cyan-300">Reveal model answer</button>
              ) : (
                <div className="rounded-xl border border-indigo-500/25 bg-indigo-500/[0.05] p-3 text-sm">
                  <p className="font-black text-indigo-300">Model answer: <span className="text-white/90">{selfItem.modelAnswer}</span></p>
                  <p className="mt-2 whitespace-pre-wrap text-white/70">{selfItem.explanation}</p>
                  <p className="mt-2 text-[11px] text-white/40">Self-graded format — this attempt is not added to your analytics.</p>
                </div>
              )}
            </div>
          )}
          <p className="text-xs text-white/40">AI generation needs the Gemini key (production). Nothing is faked — on failure you see the error, not a placeholder.</p>
        </div>
      )}
    </div>
  );
}
