"use client";

import { useState } from "react";
import { masterSyllabus } from "@/lib/masterSyllabus";

const EXAMS = ["JEE Main", "JEE Advanced", "NEET", "GATE", "NSEC", "INChO", "IChO"];
const DIFFICULTIES = [
  { value: "ncert", label: "NCERT" },
  { value: "jee_main", label: "JEE Main" },
  { value: "jee_advanced", label: "JEE Advanced" },
  { value: "gate", label: "GATE" },
  { value: "nsec", label: "NSEC" },
  { value: "incho", label: "INChO" },
  { value: "icho", label: "IChO" },
];
const LANGUAGES = [
  { value: "english", label: "English" },
  { value: "hinglish", label: "Hinglish" },
  { value: "hindi", label: "हिंदी" },
];

export default function NotesPage() {
  const [topic, setTopic] = useState("");
  const [chapterId, setChapterId] = useState("");
  const [examType, setExamType] = useState("JEE Main");
  const [difficulty, setDifficulty] = useState("jee_main");
  const [language, setLanguage] = useState("english");
  const [loading, setLoading] = useState(false);
  const [notes, setNotes] = useState("");
  const [error, setError] = useState("");
  const [cached, setCached] = useState(false);

  async function generateNotes() {
    if (!topic && !chapterId) return;
    setLoading(true);
    setError("");
    setNotes("");

    try {
      const res = await fetch("/api/notes/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, chapterId, examType, difficulty, language }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setNotes(data.content);
      setCached(data.cached);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white p-6 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">AI Notes Generator</h1>
        <p className="text-zinc-400">Generate exam-focused chemistry notes for any topic, at any difficulty level.</p>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-8">
        <div className="grid gap-4 md:grid-cols-2">
          {/* Topic Input */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-zinc-300 mb-2">Topic / Query</label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder='e.g. "SN2 Mechanism", "Electrochemistry revision", "Surface chemistry NEET"'
              className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500 transition"
            />
          </div>

          {/* Or select chapter */}
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">Or Select Chapter</label>
            <select
              value={chapterId}
              onChange={(e) => setChapterId(e.target.value)}
              className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition"
            >
              <option value="">— Select Chapter —</option>
              {masterSyllabus.map((ch) => (
                <option key={ch.id} value={ch.id}>
                  {ch.title} ({ch.category})
                </option>
              ))}
            </select>
          </div>

          {/* Exam Type */}
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">Exam</label>
            <select
              value={examType}
              onChange={(e) => setExamType(e.target.value)}
              className="w-full bg-black border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition"
            >
              {EXAMS.map((e) => <option key={e}>{e}</option>)}
            </select>
          </div>

          {/* Difficulty */}
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">Difficulty Level</label>
            <div className="flex flex-wrap gap-2">
              {DIFFICULTIES.map((d) => (
                <button
                  key={d.value}
                  onClick={() => setDifficulty(d.value)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition ${
                    difficulty === d.value
                      ? "bg-cyan-500 border-cyan-500 text-black"
                      : "border-zinc-700 text-zinc-400 hover:border-zinc-500"
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>

          {/* Language */}
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">Language</label>
            <div className="flex gap-2">
              {LANGUAGES.map((l) => (
                <button
                  key={l.value}
                  onClick={() => setLanguage(l.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium border transition ${
                    language === l.value
                      ? "bg-violet-600 border-violet-600 text-white"
                      : "border-zinc-700 text-zinc-400 hover:border-zinc-500"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={generateNotes}
          disabled={loading || (!topic && !chapterId)}
          className="mt-6 w-full bg-cyan-500 hover:bg-cyan-400 disabled:bg-zinc-700 disabled:text-zinc-500 text-black font-semibold py-3 rounded-xl transition text-base"
        >
          {loading ? "Generating Notes..." : "Generate Notes"}
        </button>
      </div>

      {/* Error */}
      {error && (
        <div className="bg-red-950 border border-red-800 text-red-300 rounded-xl p-4 mb-6">
          {error}
        </div>
      )}

      {/* Notes Output */}
      {notes && (
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          {cached && (
            <div className="text-xs text-cyan-400 mb-4 flex items-center gap-1">
              ⚡ Loaded from your saved notes
            </div>
          )}
          <div
            className="prose prose-invert max-w-none text-zinc-200 leading-relaxed"
            style={{ whiteSpace: "pre-wrap", fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif" }}
          >
            {notes}
          </div>
        </div>
      )}
    </main>
  );
}
