"use client";

import { useState, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import type { SnapSolveResponse, SnapSolveClassification } from "@/lib/snapSolveTypes";

// Presentational lookups only — no data transformation in this view.
const CLASS_STYLE: Record<SnapSolveClassification, { cls: string; emoji: string }> = {
  Organic:    { cls: "bg-emerald-500/15 text-emerald-300 border-emerald-500/25", emoji: "🧬" },
  Inorganic:  { cls: "bg-cyan-500/15 text-cyan-300 border-cyan-500/25", emoji: "⚗️" },
  Physical:   { cls: "bg-violet-500/15 text-violet-300 border-violet-500/25", emoji: "📐" },
  Analytical: { cls: "bg-amber-500/15 text-amber-300 border-amber-500/25", emoji: "🔬" },
  General:    { cls: "bg-slate-500/15 text-slate-300 border-slate-500/25", emoji: "🧪" },
};

function confidenceTone(c: number): string {
  if (c >= 0.75) return "#34D399";
  if (c >= 0.45) return "#FBBF24";
  return "#F87171";
}

function Md({ children }: { children: string }) {
  return (
    <div className="prose prose-invert prose-sm max-w-none">
      <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
        {children}
      </ReactMarkdown>
    </div>
  );
}

export default function SnapSolvePage() {
  const [image, setImage] = useState<string | null>(null);
  const [result, setResult] = useState<SnapSolveResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [language, setLanguage] = useState("english");
  const fileRef = useRef<HTMLInputElement>(null);

  function handleFile(file: File) {
    const reader = new FileReader();
    reader.onload = (e) => setImage(e.target?.result as string);
    reader.readAsDataURL(file);
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }

  async function handleSolve() {
    if (!image) return;
    setLoading(true);
    setResult(null);
    setError("");
    try {
      const res = await fetch("/api/snap-solve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageBase64: image, language }),
      });
      const data = await res.json();
      if (data.error) setError(data.error);
      else setResult(data as SnapSolveResponse);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight">📸 Snap &amp; Solve</h1>
          <p className="mt-2 text-white/60">Photo of any chemistry/physics problem → AI solves step by step</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Upload */}
          <div className="space-y-4">
            <div
              onClick={() => fileRef.current?.click()}
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              className="flex min-h-64 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-white/20 bg-white/[0.03] p-8 text-center transition hover:border-cyan-500/50 hover:bg-white/[0.05]"
            >
              {image ? (
                <img src={image} alt="Problem" className="max-h-60 rounded-xl object-contain" />
              ) : (
                <>
                  <div className="mb-4 text-5xl">📷</div>
                  <p className="text-white/70">Click or drag &amp; drop</p>
                  <p className="mt-1 text-sm text-white/40">Photo of handwritten or printed problem</p>
                </>
              )}
              <input ref={fileRef} type="file" accept="image/*" className="hidden"
                onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])} />
            </div>

            {/* Language */}
            <div className="flex gap-2">
              {["english", "hinglish", "hindi"].map((l) => (
                <button key={l} onClick={() => setLanguage(l)}
                  className={`flex-1 rounded-xl py-2 text-sm font-semibold capitalize transition ${language === l ? "bg-cyan-500 text-black" : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/10"}`}>
                  {l === "hindi" ? "हिंदी" : l}
                </button>
              ))}
            </div>

            <button onClick={handleSolve} disabled={!image || loading}
              className="w-full rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 py-4 font-bold text-black disabled:opacity-40 transition">
              {loading ? "🤔 Solving..." : "⚡ Solve This Problem"}
            </button>

            {image && (
              <button onClick={() => { setImage(null); setResult(null); setError(""); }}
                className="w-full rounded-xl border border-white/10 py-2 text-sm text-white/50 hover:text-white transition">
                Clear &amp; try another
              </button>
            )}
          </div>

          {/* Solution */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 min-h-64">
            {error && <p className="text-red-400">{error}</p>}

            {loading && (
              <div className="flex flex-col items-center justify-center h-full gap-3 text-white/40">
                <div className="text-4xl animate-pulse">🧪</div>
                <p>AI is solving your problem...</p>
              </div>
            )}

            {result && !loading && <SolutionView data={result} />}

            {!result && !loading && !error && (
              <div className="flex flex-col items-center justify-center h-full text-white/20 gap-2">
                <div className="text-4xl">💡</div>
                <p>Solution will appear here</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

function SolutionView({ data }: { data: SnapSolveResponse }) {
  const cls = CLASS_STYLE[data.classification];
  const confPct = Math.round(data.ocrConfidence * 100);

  return (
    <div className="space-y-5">
      {/* meta: classification + OCR confidence */}
      <div className="flex flex-wrap items-center gap-3">
        <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-bold ${cls.cls}`}>
          {cls.emoji} {data.classification}
        </span>
        <div className="flex items-center gap-2 text-xs text-white/45">
          <span>OCR confidence</span>
          <span className="inline-block h-1.5 w-20 overflow-hidden rounded-full bg-white/10">
            <span className="block h-full rounded-full" style={{ width: `${confPct}%`, background: confidenceTone(data.ocrConfidence) }} />
          </span>
          <span className="tabular-nums font-semibold" style={{ color: confidenceTone(data.ocrConfidence) }}>{confPct}%</span>
        </div>
      </div>

      {/* fallback notice */}
      {data.fallbackTriggered && (
        <div className="rounded-xl border border-amber-500/25 bg-amber-500/[0.08] px-4 py-3 text-sm text-amber-200">
          ⚠️ Low-confidence read — please double-check this answer or retake the photo for an accurate solution.
        </div>
      )}

      {/* parsed problem */}
      <div>
        <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-white/40">Problem identified</p>
        <Md>{data.parsedProblem}</Md>
      </div>

      {/* steps */}
      {data.solution.steps.length > 0 && (
        <div>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-white/40">Step-by-step solution</p>
          <ol className="space-y-3">
            {data.solution.steps.map((s) => (
              <li key={s.stepNumber} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-[11px] font-black text-cyan-300">{s.stepNumber}</span>
                  <h4 className="text-sm font-bold text-white">{s.title}</h4>
                </div>
                {s.equation && (
                  <div className="mt-2 overflow-x-auto rounded-lg bg-slate-950 px-3 py-2 text-rose-300">
                    <Md>{`$$${s.equation}$$`}</Md>
                  </div>
                )}
                <div className="mt-1.5 text-white/70">
                  <Md>{s.explanation}</Md>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* exception flag */}
      {data.solution.exceptionFlag && (
        <div className="rounded-xl border border-rose-500/25 bg-rose-500/[0.08] px-4 py-3">
          <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-rose-300">⚡ High-yield exception</p>
          <div className="text-sm text-rose-100"><Md>{data.solution.exceptionFlag}</Md></div>
        </div>
      )}

      {/* core answer */}
      <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/[0.08] px-4 py-3">
        <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-emerald-300">✅ Final answer</p>
        <div className="text-base font-semibold text-emerald-100"><Md>{data.solution.coreAnswer}</Md></div>
      </div>

      {/* recommended practice */}
      {data.recommendedPractice.length > 0 && (
        <div>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-white/40">🎯 Practice next</p>
          <div className="flex flex-wrap gap-1.5">
            {data.recommendedPractice.map((t) => (
              <span key={t} className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-white/70">{t}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
