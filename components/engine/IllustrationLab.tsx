"use client";

import { useCallback, useState } from "react";
import type { PYQExam } from "@/lib/pyq";

// ─────────────────────────────────────────────────────────────────────────────
// Illustration Lab — Solved Illustrations (basic/intermediate/advanced),
// Miscellaneous mixed-concept Examples (easy→challenge) and the Innovation Lab
// (new-pattern questions, explicitly NOT PYQs). All AI-on-demand via
// /api/engine/generate; honest errors, no placeholders.
// ─────────────────────────────────────────────────────────────────────────────

type Mode = "illustration" | "misc" | "innovation";

const LEVELS: Record<Mode, { key: string; label: string }[]> = {
  illustration: [
    { key: "basic", label: "Basic" },
    { key: "intermediate", label: "Intermediate" },
    { key: "advanced", label: "Advanced" },
  ],
  misc: [
    { key: "easy", label: "Easy" },
    { key: "medium", label: "Medium" },
    { key: "hard", label: "Hard" },
    { key: "challenge", label: "Challenge" },
  ],
  innovation: [
    { key: "concept-combination", label: "Concept Combination" },
    { key: "multi-chapter", label: "Multi Chapter" },
    { key: "examiner", label: "Examiner Style" },
    { key: "surprise", label: "Surprise Pattern" },
  ],
};

interface Illustration {
  question: string; thinking: string; solution: string;
  fastMethod: string; alternateMethod: string; commonMistakes: string[];
}
interface Innovation { question: string; answer: string; explanation: string; conceptsTested?: string[] }

function Block({ label, tone, children }: { label: string; tone: string; children: React.ReactNode }) {
  return (
    <div className={`rounded-xl border p-3 text-sm ${tone}`}>
      <div className="mb-1 text-[11px] font-bold uppercase tracking-wider opacity-80">{label}</div>
      <div className="whitespace-pre-wrap text-white/80">{children}</div>
    </div>
  );
}

export default function IllustrationLab({
  mode, exam, chapterTitle, topics,
}: { mode: Mode; exam: PYQExam; chapterTitle: string; topics: string[] }) {
  const levels = LEVELS[mode];
  const [level, setLevel] = useState(levels[0].key);
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [item, setItem] = useState<Illustration | Innovation | null>(null);

  const generate = useCallback(async () => {
    setLoading(true); setError(null); setItem(null);
    try {
      const payload =
        mode === "innovation"
          ? { kind: "innovation", pattern: level, exam, chapter: chapterTitle, topic }
          : { kind: mode, level, exam, chapter: chapterTitle, topic };
      const res = await fetch("/api/engine/generate", {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error ?? "Generation failed."); return; }
      setItem(data);
    } catch { setError("Could not reach the generator."); }
    finally { setLoading(false); }
  }, [mode, level, exam, chapterTitle, topic]);

  const isIll = item && "solution" in item;

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-2">
        {levels.map((l) => (
          <button key={l.key} onClick={() => setLevel(l.key)}
            className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition ${
              level === l.key ? "border-cyan-400/50 bg-cyan-500/15 text-white" : "border-white/10 bg-white/[0.03] text-white/60 hover:text-white/85"
            }`}>
            {l.label}
          </button>
        ))}
        {topics.length > 0 && (
          <select value={topic} onChange={(e) => setTopic(e.target.value)}
            className="rounded-lg border border-white/10 bg-[#0B1220] px-2 py-1.5 text-xs text-white/80">
            <option value="">Whole chapter</option>
            {topics.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        )}
        <button onClick={generate} disabled={loading}
          className="rounded-lg bg-gradient-to-r from-cyan-400 to-sky-500 px-4 py-1.5 text-xs font-black text-black disabled:opacity-60">
          {loading ? "Generating…" : "Generate"}
        </button>
      </div>

      {error && <p className="rounded-xl border border-rose-500/30 bg-rose-500/[0.06] p-3 text-sm text-rose-300">{error}</p>}

      {item && (
        <div className="space-y-2.5 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
          <p className="whitespace-pre-wrap font-medium leading-relaxed text-white">{item.question}</p>
          {isIll ? (
            <>
              <Block label="Thinking process" tone="border-cyan-500/20 bg-cyan-500/[0.04] text-cyan-200">{(item as Illustration).thinking}</Block>
              <Block label="Full solution" tone="border-white/10 bg-white/[0.02] text-white">{(item as Illustration).solution}</Block>
              {(item as Illustration).fastMethod && <Block label="Fast method" tone="border-emerald-500/20 bg-emerald-500/[0.04] text-emerald-200">{(item as Illustration).fastMethod}</Block>}
              {(item as Illustration).alternateMethod && <Block label="Alternate method" tone="border-indigo-500/20 bg-indigo-500/[0.04] text-indigo-200">{(item as Illustration).alternateMethod}</Block>}
              {(item as Illustration).commonMistakes?.length > 0 && (
                <Block label="Common mistakes" tone="border-rose-500/20 bg-rose-500/[0.04] text-rose-200">
                  {(item as Illustration).commonMistakes.map((m) => `• ${m}`).join("\n")}
                </Block>
              )}
            </>
          ) : (
            <>
              <details>
                <summary className="cursor-pointer text-sm font-bold text-cyan-300">Reveal answer & explanation</summary>
                <div className="mt-2 space-y-2">
                  <Block label="Answer" tone="border-emerald-500/20 bg-emerald-500/[0.04] text-emerald-200">{(item as Innovation).answer}</Block>
                  <Block label="Explanation" tone="border-white/10 bg-white/[0.02] text-white">{(item as Innovation).explanation}</Block>
                </div>
              </details>
              {(item as Innovation).conceptsTested && (item as Innovation).conceptsTested!.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {(item as Innovation).conceptsTested!.map((c) => (
                    <span key={c} className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] font-semibold text-white/55">{c}</span>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      )}
      <p className="text-xs text-white/40">AI-generated on demand (Gemini, production key required) — never recycled PYQs, never placeholders.</p>
    </div>
  );
}
