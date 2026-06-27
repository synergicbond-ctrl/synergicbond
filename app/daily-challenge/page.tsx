"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export default function DailyChallengePage() {
  const [challenge, setChallenge] = useState<any>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [loading, setLoading] = useState(true);
  const [exam, setExam] = useState("JEE Main");

  async function loadChallenge(examType = exam) {
    setLoading(true);
    setSelected(null);
    setSubmitted(false);
    setShowHint(false);
    try {
      const res = await fetch(`/api/daily-challenge?exam=${encodeURIComponent(examType)}`);
      const data = await res.json();
      setChallenge(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { loadChallenge(); }, []);

  const today = new Date().toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long" });
  const isCorrect = submitted && selected === challenge?.answer;

  return (
    <main className="min-h-screen bg-black text-white px-4 py-12">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-8 flex items-start justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">🎯 Daily Challenge</h1>
            <p className="mt-1 text-white/50">{today}</p>
          </div>
          <div className="flex gap-2">
            {["NEET", "JEE Main", "JEE Advanced"].map((e) => (
              <button key={e} onClick={() => { setExam(e); loadChallenge(e); }}
                className={`rounded-xl px-3 py-1.5 text-sm font-semibold transition ${exam === e ? "bg-cyan-500 text-black" : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/10"}`}>
                {e}
              </button>
            ))}
          </div>
        </div>

        {loading && (
          <div className="text-center py-20 text-white/40">
            <div className="text-5xl mb-4 animate-pulse">🎯</div>
            <p>Loading today's challenge...</p>
          </div>
        )}

        {challenge && !loading && (
          <div className="space-y-6">
            {/* Topic badge */}
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-cyan-500/20 border border-cyan-500/30 px-3 py-1 text-sm text-cyan-300">
                📚 {challenge.topic}
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/50">
                +{challenge.xpReward} XP
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/50 capitalize">
                {challenge.difficulty}
              </span>
            </div>

            {/* Question */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="prose prose-invert max-w-none text-lg leading-relaxed">
                <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                  {challenge.question}
                </ReactMarkdown>
              </div>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {Object.entries(challenge.options || {}).map(([key, value]) => {
                let style = "border border-white/10 bg-white/[0.03] hover:bg-white/10";
                if (submitted) {
                  if (key === challenge.answer) style = "border border-green-500 bg-green-500/20";
                  else if (key === selected) style = "border border-red-500 bg-red-500/20";
                  else style = "border border-white/5 bg-white/[0.02] opacity-50";
                } else if (selected === key) {
                  style = "border border-cyan-500 bg-cyan-500/20";
                }
                return (
                  <button key={key} onClick={() => !submitted && setSelected(key)}
                    className={`w-full rounded-xl p-4 text-left transition ${style}`}>
                    <span className="font-bold text-cyan-400 mr-3">{key})</span>
                    <span className="text-white/90">{value as string}</span>
                  </button>
                );
              })}
            </div>

            {/* Hint */}
            {!submitted && (
              <button onClick={() => setShowHint(!showHint)}
                className="text-sm text-yellow-400/70 hover:text-yellow-400 transition">
                {showHint ? "Hide hint" : "💡 Show hint"}
              </button>
            )}
            {showHint && !submitted && (
              <div className="rounded-xl border border-yellow-500/20 bg-yellow-950/20 p-4 text-yellow-200 text-sm">
                {challenge.hint}
              </div>
            )}

            {/* Submit / Result */}
            {!submitted ? (
              <button onClick={() => selected && setSubmitted(true)} disabled={!selected}
                className="w-full rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 py-4 font-bold text-black disabled:opacity-40 transition">
                Submit Answer
              </button>
            ) : (
              <div className={`rounded-2xl border p-6 ${isCorrect ? "border-green-500/30 bg-green-950/20" : "border-red-500/30 bg-red-950/20"}`}>
                <p className="text-xl font-bold mb-3">
                  {isCorrect ? "🎉 Correct! +50 XP" : `❌ Incorrect — Answer: ${challenge.answer}`}
                </p>
                <div className="prose prose-invert prose-sm max-w-none">
                  <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                    {challenge.explanation}
                  </ReactMarkdown>
                </div>
              </div>
            )}

            <button onClick={() => loadChallenge()}
              className="w-full rounded-xl border border-white/10 py-3 text-white/50 hover:text-white text-sm transition">
              🔄 Generate New Challenge
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
