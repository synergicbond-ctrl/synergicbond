"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import QuestionCard from "@/components/pyq/QuestionCard";
import type { PYQDifficulty, PYQQuestion } from "@/lib/pyq";
import { selectObjective } from "@/lib/cbse/practice";
import type { BoardChapter } from "@/lib/boards";
import type { ClassSlug } from "@/lib/boardDashboard";

// ─────────────────────────────────────────────────────────────────────────────
// Custom Test Paper Generator (Board Exam Engine). Builds a real board-style
// paper: the objective section is drawn from the VERIFIED bank scoped to the
// chosen chapters, with per-student non-repetition; an optional AI subjective
// section is generated on demand. A live scoreboard is the performance report;
// every answer is captured (attemptSource="test") so it flows into analytics
// and the predicted board score. Nothing is fabricated.
// ─────────────────────────────────────────────────────────────────────────────

const DIFFICULTIES: (PYQDifficulty | "All")[] = ["All", "Easy", "Moderate", "Hard"];

function num(n: number) { return Math.max(0, Math.round(n)); }

export default function CustomTestClient({
  base, cls, chapters, boardName = "CBSE",
}: { base: string; cls: ClassSlug; chapters: BoardChapter[]; boardName?: string }) {
  const resetKey = `sb_practice_reset_${base}`; // share the practice non-repetition window

  // config
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [difficulty, setDifficulty] = useState<PYQDifficulty | "All">("All");
  const [count, setCount] = useState(10);
  const [includeAR, setIncludeAR] = useState(true);
  const [subjective, setSubjective] = useState(false);

  const [servedIds, setServedIds] = useState<Set<string>>(new Set());
  const [signedIn, setSignedIn] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const resetAfter = window.localStorage.getItem(resetKey);
        const res = await fetch(`/api/board/served${resetAfter ? `?resetAfter=${encodeURIComponent(resetAfter)}` : ""}`);
        if (res.status === 401) { setSignedIn(false); return; }
        setSignedIn(true);
        const data = await res.json();
        setServedIds(new Set<string>(Array.isArray(data.ids) ? data.ids : []));
      } catch { /* ignore */ }
    })();
  }, [resetKey]);

  const chapterPyq = useMemo(() => {
    const ids = selected.size > 0 ? chapters.filter((c) => selected.has(c.id)) : chapters;
    return [...new Set(ids.flatMap((c) => c.pyqChapters))];
  }, [selected, chapters]);

  const [paper, setPaper] = useState<PYQQuestion[] | null>(null);
  const [answered, setAnswered] = useState<Record<string, boolean>>({});

  // subjective section (AI) — declared before generate() so it can trigger it.
  const [subQs, setSubQs] = useState<{ typeKey: string; label: string; question: string; markingScheme: string[]; modelAnswer: string }[]>([]);
  const [subLoading, setSubLoading] = useState(false);
  const [subError, setSubError] = useState<string | null>(null);

  const genSubjective = useCallback(async () => {
    setSubLoading(true); setSubError(null);
    const wanted = [{ key: "sa-3", label: "3 Mark", marks: 3 }, { key: "case-based", label: "Case-Based", marks: 4 }, { key: "la-5", label: "5 Mark", marks: 5 }];
    const chapterTitle = selected.size > 0 ? chapters.find((c) => selected.has(c.id))?.title : undefined;
    try {
      const out: typeof subQs = [];
      for (const w of wanted) {
        const res = await fetch("/api/board-practice", {
          method: "POST", headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ classNumber: cls === "class-12" ? 12 : 11, chapter: chapterTitle, typeKey: w.key, marks: w.marks, board: boardName }),
        });
        const data = await res.json();
        if (res.ok) out.push({ typeKey: w.key, label: w.label, question: data.question, markingScheme: data.markingScheme, modelAnswer: data.modelAnswer });
        else { setSubError(data.error ?? "AI section unavailable."); break; }
      }
      setSubQs(out);
    } catch { setSubError("Could not reach the generator."); }
    finally { setSubLoading(false); }
  }, [selected, chapters, cls, boardName]);

  const generate = useCallback(() => {
    const exclude = new Set(servedIds);
    const mcq = selectObjective({ cls, chapterPyq, pyqType: "MCQ-Single", difficulty: difficulty === "All" ? null : difficulty, count, excludeIds: exclude });
    let picked = mcq.questions;
    if (includeAR) {
      const ar = selectObjective({ cls, chapterPyq, pyqType: "Assertion-Reason", difficulty: difficulty === "All" ? null : difficulty, count: Math.max(2, num(count / 3)), excludeIds: exclude });
      picked = [...picked, ...ar.questions];
    }
    setPaper(picked);
    setAnswered({});
    setSubQs([]);
    if (subjective) void genSubjective();
  }, [servedIds, cls, chapterPyq, difficulty, count, includeAR, subjective, genSubjective]);

  const onAnswered = useCallback((q: PYQQuestion, _k: string, correct: boolean) => {
    setAnswered((prev) => (q.id in prev ? prev : { ...prev, [q.id]: correct }));
  }, []);

  const score = useMemo(() => {
    const done = Object.values(answered);
    return { answered: done.length, correct: done.filter(Boolean).length };
  }, [answered]);

  const toggle = (id: string) => setSelected((prev) => {
    const n = new Set(prev);
    if (n.has(id)) n.delete(id); else n.add(id);
    return n;
  });

  return (
    <div className="space-y-6">
      {/* Config */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 space-y-4">
        <div>
          <div className="mb-2 text-sm font-bold text-white/70">Chapters <span className="font-normal text-white/40">({selected.size === 0 ? "all" : selected.size} selected)</span></div>
          <div className="flex flex-wrap gap-1.5">
            {chapters.map((c) => (
              <button key={c.id} onClick={() => toggle(c.id)}
                className={`rounded-lg border px-2.5 py-1 text-xs font-semibold transition ${selected.has(c.id) ? "border-cyan-400/50 bg-cyan-500/15 text-white" : "border-white/10 bg-white/[0.03] text-white/55 hover:text-white/85"}`}>
                {c.title}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <label className="flex items-center gap-2 text-sm text-white/70">Objective Qs
            <input type="number" min={1} max={30} value={count} onChange={(e) => setCount(Math.min(30, Math.max(1, Number(e.target.value) || 1)))}
              className="w-16 rounded-lg border border-white/10 bg-[#0B1220] px-2 py-1 text-white/90" />
          </label>
          <div className="flex items-center gap-1.5">
            {DIFFICULTIES.map((d) => (
              <button key={d} onClick={() => setDifficulty(d)} className={`rounded-lg border px-2.5 py-1 text-xs font-semibold ${difficulty === d ? "border-cyan-400/50 bg-cyan-500/15 text-white" : "border-white/10 bg-white/[0.03] text-white/60"}`}>{d}</button>
            ))}
          </div>
          <label className="flex items-center gap-2 text-sm text-white/70"><input type="checkbox" checked={includeAR} onChange={(e) => setIncludeAR(e.target.checked)} /> Assertion–Reason</label>
          <label className="flex items-center gap-2 text-sm text-white/70"><input type="checkbox" checked={subjective} onChange={(e) => setSubjective(e.target.checked)} /> AI subjective section</label>
        </div>
        <button onClick={generate} className="rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-5 py-2.5 text-sm font-black text-black">Generate paper →</button>
        {signedIn === false && <p className="text-xs text-amber-300/80">Sign in so your answers are scored, saved, and excluded from future papers.</p>}
      </div>

      {/* Paper */}
      {paper && (
        <>
          {/* Live scoreboard = performance report */}
          <div className="sticky top-2 z-10 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-cyan-400/25 bg-[#0B1220]/95 p-4 backdrop-blur">
            <div className="flex gap-5 text-sm">
              <div><span className="text-2xl font-black text-white">{paper.length}</span><span className="ml-1 text-white/50">Qs</span></div>
              <div><span className="text-2xl font-black text-cyan-300">{score.answered}</span><span className="ml-1 text-white/50">answered</span></div>
              <div><span className="text-2xl font-black text-emerald-300">{score.correct}</span><span className="ml-1 text-white/50">correct</span></div>
              <div><span className="text-2xl font-black text-white/85">{score.answered ? Math.round((score.correct / score.answered) * 100) : 0}%</span><span className="ml-1 text-white/50">accuracy</span></div>
            </div>
            <a href={`${base}/analytics`} className="rounded-lg border border-white/15 bg-white/[0.05] px-3 py-1.5 text-sm font-semibold text-white/80 hover:bg-white/[0.1]">Full report →</a>
          </div>

          {paper.length === 0 ? (
            <p className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 text-center text-sm text-white/55">No fresh verified questions for this selection — widen the chapters/difficulty, or reset served in Practice.</p>
          ) : (
            <div className="space-y-3">
              <h2 className="text-sm font-bold uppercase tracking-wider text-white/40">Section A · Objective (verified bank)</h2>
              {paper.map((q) => <QuestionCard key={q.id} question={q} attemptSource="test" onAnswered={onAnswered} />)}
            </div>
          )}

          {/* Subjective section */}
          {subjective && (
            <div className="space-y-3">
              <h2 className="text-sm font-bold uppercase tracking-wider text-white/40">Section B · Subjective (AI-generated)</h2>
              {subLoading && <p className="text-sm text-white/50">Generating subjective questions…</p>}
              {subError && <p className="rounded-xl border border-rose-500/30 bg-rose-500/[0.06] p-3 text-sm text-rose-300">{subError}</p>}
              {subQs.map((s, i) => (
                <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <div className="mb-1 text-xs font-bold uppercase tracking-wide text-cyan-300/70">{s.label}</div>
                  <p className="font-medium text-white">{s.question}</p>
                  <details className="mt-2 text-sm">
                    <summary className="cursor-pointer font-semibold text-white/60">Model answer & marking scheme</summary>
                    <div className="mt-2 space-y-2 text-white/70">
                      {s.markingScheme?.length > 0 && <ul className="list-disc space-y-0.5 pl-5">{s.markingScheme.map((m, j) => <li key={j}>{m}</li>)}</ul>}
                      <p className="whitespace-pre-wrap">{s.modelAnswer}</p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
