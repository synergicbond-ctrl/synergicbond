"use client";

import { useState, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export default function HandwrittenNotesPage() {
  const [image, setImage] = useState<string | null>(null);
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [language, setLanguage] = useState("english");
  const [examType, setExamType] = useState("JEE Main");
  const fileRef = useRef<HTMLInputElement>(null);

  function handleFile(file: File) {
    const reader = new FileReader();
    reader.onload = (e) => setImage(e.target?.result as string);
    reader.readAsDataURL(file);
  }

  async function convert() {
    if (!image) return;
    setLoading(true);
    setNotes("");
    setError("");
    try {
      const res = await fetch("/api/handwritten-notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageBase64: image, language, examType }),
      });
      const data = await res.json();
      if (data.error) setError(data.error);
      else setNotes(data.notes);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  function copyNotes() {
    navigator.clipboard.writeText(notes);
  }

  return (
    <main className="min-h-screen bg-black text-white px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight">✍️ Handwritten Notes Converter</h1>
          <p className="mt-2 text-white/60">Photo of your handwritten notes → Beautiful digital notes with AI</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Upload side */}
          <div className="space-y-4">
            <div onClick={() => fileRef.current?.click()}
              onDrop={(e) => { e.preventDefault(); e.dataTransfer.files[0] && handleFile(e.dataTransfer.files[0]); }}
              onDragOver={(e) => e.preventDefault()}
              className="flex min-h-64 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-white/20 bg-white/[0.03] p-6 text-center hover:border-cyan-500/50 transition">
              {image ? (
                <img src={image} alt="Notes" className="max-h-60 rounded-xl object-contain" />
              ) : (
                <>
                  <div className="text-5xl mb-3">✍️</div>
                  <p className="text-white/70">Click or drag your handwritten notes</p>
                  <p className="text-sm text-white/40 mt-1">Photo, scan, or screenshot</p>
                </>
              )}
              <input ref={fileRef} type="file" accept="image/*" className="hidden"
                onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])} />
            </div>

            {/* Exam type */}
            <div>
              <p className="text-xs text-white/40 mb-2">Exam Context</p>
              <div className="flex flex-wrap gap-2">
                {["NEET", "JEE Main", "JEE Advanced", "GATE", "NSEC"].map((e) => (
                  <button key={e} onClick={() => setExamType(e)}
                    className={`rounded-xl px-3 py-1.5 text-sm font-semibold transition ${examType === e ? "bg-cyan-500 text-black" : "border border-white/10 bg-white/5 hover:bg-white/10"}`}>
                    {e}
                  </button>
                ))}
              </div>
            </div>

            {/* Language */}
            <div>
              <p className="text-xs text-white/40 mb-2">Output Language</p>
              <div className="flex gap-2">
                {["english", "hinglish", "hindi"].map((l) => (
                  <button key={l} onClick={() => setLanguage(l)}
                    className={`flex-1 rounded-xl py-2 text-sm font-semibold capitalize transition ${language === l ? "bg-purple-500 text-white" : "border border-white/10 bg-white/5 hover:bg-white/10"}`}>
                    {l === "hindi" ? "हिंदी" : l}
                  </button>
                ))}
              </div>
            </div>

            <button onClick={convert} disabled={!image || loading}
              className="w-full rounded-2xl bg-gradient-to-r from-purple-500 to-purple-500 py-4 font-bold text-white disabled:opacity-40">
              {loading ? "✨ Converting..." : "✨ Convert to Digital Notes"}
            </button>

            {image && (
              <button onClick={() => { setImage(null); setNotes(""); }}
                className="w-full rounded-xl border border-white/10 py-2 text-sm text-white/40 hover:text-white transition">
                Clear
              </button>
            )}
          </div>

          {/* Output side */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 min-h-64">
            {error && <p className="text-red-400">{error}</p>}
            {loading && (
              <div className="flex flex-col items-center justify-center h-full gap-3 text-white/40">
                <div className="text-4xl animate-pulse">✨</div>
                <p>Converting your notes...</p>
              </div>
            )}
            {notes && (
              <>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-xs text-white/40">Digital Notes</p>
                  <button onClick={copyNotes} className="text-xs text-cyan-400 hover:text-cyan-300 transition">📋 Copy</button>
                </div>
                <div className="prose prose-invert prose-sm max-w-none">
                  <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                    {notes}
                  </ReactMarkdown>
                </div>
              </>
            )}
            {!notes && !loading && !error && (
              <div className="flex flex-col items-center justify-center h-full text-white/20 gap-2">
                <div className="text-4xl">📄</div>
                <p>Digital notes will appear here</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
