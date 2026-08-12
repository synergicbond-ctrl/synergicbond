"use client";

import { useState } from "react";
import Link from "next/link";

// ─────────────────────────────────────────────────────────────────────────────
// /board-examiner — AI Board Examiner (Roadmap V2 · Week 11).
//
// Paste a board question + your written answer → AI grades it to the marking
// scheme with marks, missing keywords and improvements. Client UI over
// /api/board-examiner (Gemini). No fabricated marks — errors surface honestly.
// ─────────────────────────────────────────────────────────────────────────────

interface BoardResult {
  marksAwarded: number;
  maxMarks: number;
  verdict?: string;
  missingKeywords?: string[];
  strengths?: string[];
  improvements?: string[];
  modelPoints?: string[];
}

const EXAMS = ["CBSE", "ICSE", "State Board"];
const MARKS = [1, 2, 3, 5];

function List({ title, items, tone }: { title: string; items?: string[]; tone: string }) {
  if (!items || items.length === 0) return null;
  return (
    <div>
      <h3 className={`text-sm font-bold ${tone}`}>{title}</h3>
      <ul className="mt-1.5 space-y-1 text-sm text-white/75">
        {items.map((it, i) => <li key={i} className="flex gap-2"><span className="text-white/30">•</span>{it}</li>)}
      </ul>
    </div>
  );
}

export default function BoardExaminerPage() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [maxMarks, setMaxMarks] = useState(3);
  const [exam, setExam] = useState("CBSE");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [needsSignIn, setNeedsSignIn] = useState(false);
  const [result, setResult] = useState<BoardResult | null>(null);

  const submit = async () => {
    setLoading(true); setError(""); setNeedsSignIn(false); setResult(null);
    try {
      const res = await fetch("/api/board-examiner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, answer, maxMarks, exam }),
      });
      const data = await res.json();
      if (res.status === 401) { setNeedsSignIn(true); return; }
      if (!res.ok) throw new Error(data.error || "Evaluation failed");
      setResult(data.result);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Evaluation failed.");
    } finally {
      setLoading(false);
    }
  };

  const pct = result ? Math.round((result.marksAwarded / result.maxMarks) * 100) : 0;

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="border-b border-white/10 bg-gradient-to-b from-amber-950/20 to-black px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-amber-300">Boards score what you write</p>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl">AI Board Examiner</h1>
          <p className="mt-2 max-w-2xl text-zinc-400">
            Paste a board question and your written answer. The examiner marks it to the scheme, flags the keywords you
            missed, and shows a full-marks model answer.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-10 space-y-5">
        <div className="flex flex-wrap gap-3">
          <select value={exam} onChange={(e) => setExam(e.target.value)} className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-semibold">
            {EXAMS.map((x) => <option key={x} className="bg-slate-900">{x}</option>)}
          </select>
          <select value={maxMarks} onChange={(e) => setMaxMarks(Number(e.target.value))} className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-semibold">
            {MARKS.map((m) => <option key={m} value={m} className="bg-slate-900">{m} marks</option>)}
          </select>
        </div>

        <textarea value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Paste the board question…" rows={2}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm placeholder:text-white/40 focus:border-amber-400 focus:outline-none" />
        <textarea value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="Type or paste your written answer…" rows={6}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm placeholder:text-white/40 focus:border-amber-400 focus:outline-none" />

        {needsSignIn && (
          <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 text-sm text-amber-200">
            Sign in to grade answers. <Link href="/auth/signin" className="font-bold underline">Sign in →</Link>
          </div>
        )}
        {error && <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-sm text-rose-200">{error}</div>}

        <button onClick={submit} disabled={loading || !question.trim() || !answer.trim()}
          className="w-full rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 py-3.5 text-sm font-black text-black transition hover:-translate-y-0.5 disabled:opacity-50">
          {loading ? "Examiner is marking…" : "Evaluate my answer"}
        </button>

        {result && (
          <div className="space-y-5 rounded-2xl border border-white/[0.08] bg-[#111827] p-5">
            <div className="flex items-center gap-4">
              <div className="text-4xl font-black text-amber-300">{result.marksAwarded}<span className="text-lg text-white/40">/{result.maxMarks}</span></div>
              <div className="flex-1">
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                  <div className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500" style={{ width: `${pct}%` }} />
                </div>
                {result.verdict && <p className="mt-1.5 text-xs text-white/55">{result.verdict}</p>}
              </div>
            </div>
            <List title="⚠️ Missing keywords (cost you marks)" items={result.missingKeywords} tone="text-rose-300" />
            <List title="✓ What you did well" items={result.strengths} tone="text-emerald-300" />
            <List title="↗ How to improve" items={result.improvements} tone="text-amber-300" />
            <List title="📋 Full-marks model points" items={result.modelPoints} tone="text-cyan-300" />
          </div>
        )}

        <p className="text-xs text-white/35">Grading is AI-assisted guidance to the marking scheme — always cross-check with your teacher.</p>
      </div>
    </main>
  );
}
