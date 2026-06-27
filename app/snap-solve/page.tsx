"use client";

import { useState, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export default function SnapSolvePage() {
  const [image, setImage] = useState<string | null>(null);
  const [solution, setSolution] = useState("");
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
    setSolution("");
    setError("");
    try {
      const res = await fetch("/api/snap-solve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageBase64: image, language }),
      });
      const data = await res.json();
      if (data.error) setError(data.error);
      else setSolution(data.solution);
    } catch (e: any) {
      setError(e.message);
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
                  <p className="text-white/70">Click or drag & drop</p>
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
              <button onClick={() => { setImage(null); setSolution(""); }}
                className="w-full rounded-xl border border-white/10 py-2 text-sm text-white/50 hover:text-white transition">
                Clear & try another
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
            {solution && (
              <div className="prose prose-invert prose-sm max-w-none">
                <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                  {solution}
                </ReactMarkdown>
              </div>
            )}
            {!solution && !loading && !error && (
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
