"use client";

import { useState } from "react";

const ACTION_PROMPTS: Record<string, string> = {
  simple: "Explain this chapter in the simplest possible terms, as if teaching a student who has never seen chemistry before. Use analogies.",
  ncert: "Give me the complete NCERT-aligned explanation of this chapter's core concepts, covering everything in the NCERT textbook.",
  neet: "What are the most important NEET-focused topics in this chapter? List the most common question types, key facts to memorize, and numerical patterns.",
  jee: "Explain this chapter for JEE Advanced level. Cover advanced derivations, multi-concept problems, and subtle concepts that appear in JEE Advanced.",
  mistakes: "What are the most common mistakes students make in this chapter? List the top 5 errors with explanations of why they happen and how to avoid them.",
  trick: "Give me the best memory tricks, mnemonics, and shortcuts for this chapter to help remember formulas and concepts under exam pressure.",
  viva: "Give me 5 important viva/interview questions about this chapter with model answers that demonstrate deep understanding.",
  challenge: "Give me one challenging JEE Advanced level problem from this chapter with a detailed step-by-step solution.",
};

export default function AiTutorBox({ chapter, concepts }: { chapter: string; concepts: string[] }) {
  const [response, setResponse] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [activeAction, setActiveAction] = useState<string | null>(null);

  const triggerAction = async (actionType: string) => {
    setLoading(true);
    setActiveAction(actionType);
    setResponse("");

    const prompt = ACTION_PROMPTS[actionType] ?? `Explain ${chapter}.`;

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: prompt,
          chapterId: chapter,
          history: [],
        }),
      });

      if (!res.ok || !res.body) {
        setResponse("Failed to get response. Please try again.");
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let full = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        full += decoder.decode(value, { stream: true });
        setResponse(full);
      }
    } catch (err) {
      setResponse("Error connecting to AI tutor. Please try again.");
    } finally {
      setLoading(false);
      setActiveAction(null);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 space-y-4 animate-fadeIn">
      <div>
        <h3 className="text-xl font-black text-slate-800 dark:text-slate-50">Syllabus-Grounded AI Tutor</h3>
        <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5">Targeting: {chapter}</p>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {[
          { key: "simple", label: "Explain Simply", color: "indigo" },
          { key: "ncert", label: "Explain NCERT", color: "indigo" },
          { key: "neet", label: "Target NEET", color: "indigo" },
          { key: "jee", label: "Target JEE Adv", color: "indigo" },
        ].map(({ key, label }) => (
          <button
            key={key}
            onClick={() => triggerAction(key)}
            disabled={loading}
            className={`p-3 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl text-[11px] font-bold text-indigo-700 dark:text-indigo-400 hover:border-indigo-300 transition text-left disabled:opacity-50 ${activeAction === key ? "border-indigo-400 bg-indigo-50 dark:bg-indigo-950/20" : ""}`}
          >
            {activeAction === key && loading ? "Loading..." : label}
          </button>
        ))}

        <button
          onClick={() => triggerAction("mistakes")}
          disabled={loading}
          className={`p-3 bg-amber-50/40 dark:bg-amber-950/10 border border-amber-100 dark:border-amber-900 rounded-xl text-[11px] font-bold text-amber-800 dark:text-amber-400 hover:border-amber-300 transition text-left col-span-2 disabled:opacity-50 ${activeAction === "mistakes" && loading ? "opacity-50" : ""}`}
        >
          {activeAction === "mistakes" && loading ? "Loading..." : "Common Mistakes"}
        </button>

        <button
          onClick={() => triggerAction("trick")}
          disabled={loading}
          className={`p-3 bg-rose-50/40 dark:bg-rose-950/10 border border-rose-100 dark:border-rose-900 rounded-xl text-[11px] font-bold text-rose-800 dark:text-rose-400 hover:border-rose-300 transition text-left col-span-2 disabled:opacity-50`}
        >
          {activeAction === "trick" && loading ? "Loading..." : "Memory Trick"}
        </button>

        <button
          onClick={() => triggerAction("viva")}
          disabled={loading}
          className="p-3 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl text-[11px] font-bold hover:border-slate-300 transition text-left disabled:opacity-50"
        >
          {activeAction === "viva" && loading ? "Loading..." : "5 Viva Questions"}
        </button>

        <button
          onClick={() => triggerAction("challenge")}
          disabled={loading}
          className="p-3 bg-emerald-50 dark:bg-emerald-950/10 border border-emerald-200 dark:border-emerald-800 rounded-xl text-[11px] font-bold text-emerald-800 dark:text-emerald-300 hover:border-emerald-400 transition text-left disabled:opacity-50"
        >
          {activeAction === "challenge" && loading ? "Loading..." : "Challenge Me"}
        </button>
      </div>

      {loading && !response && (
        <div className="text-center py-4 text-xs font-bold text-indigo-600 animate-pulse">
          Generating response...
        </div>
      )}

      {response && (
        <div className="p-4 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-700 dark:text-slate-300 text-xs font-medium leading-relaxed whitespace-pre-line animate-fadeIn">
          {response}
          {loading && <span className="animate-pulse">▊</span>}
        </div>
      )}
    </div>
  );
}
