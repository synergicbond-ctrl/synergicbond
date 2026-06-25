"use client";

import { useState } from "react";

export default function AdvancedAITutorPage() {
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([
    { role: "assistant", content: "Hello! I am your SYNERGIC BOND AI Tutor. Ask me any chemistry concept, formula, reaction, or exception from your syllabus, and I will help you master it." }
  ]);
  const [input, setInput] = useState("");
  const [chapterId, setChapterId] = useState("mole-concept");
  const [loading, setLoading] = useState(false);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage,
          chapterId: chapterId,
          history: messages
        })
      });

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply || data.error || "No response received." }]);
    } catch (err) {
      setMessages((prev) => [...prev, { role: "assistant", content: "Error communicating with knowledge graph tutor." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-6 md:p-12 max-w-5xl mx-auto flex flex-col h-[90vh]">
      
      {/* Header & Context Selector */}
      <header className="mb-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900">Syllabus-Grounded AI Tutor</h1>
          <p className="text-slate-600 text-sm mt-0.5">Trained entirely on the NEET/JEE knowledge graph. No hallucinations.</p>
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Targeting:</label>
          <select 
            value={chapterId} 
            onChange={(e) => setChapterId(e.target.value)}
            className="flex-1 md:w-64 p-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-800 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          >
            <option value="mole-concept">Mole Concept & Equivalents</option>
            <option value="atomic-structure">Atomic Structure & Mechanics</option>
            <option value="coordination-compounds">Coordination Compounds</option>
            <option value="hydrocarbons">Hydrocarbons & Aromaticity</option>
          </select>
        </div>
      </header>

      {/* Chat Messages Panel */}
      <div className="flex-1 bg-white rounded-2xl shadow-sm border border-slate-100 p-6 overflow-y-auto space-y-4 flex flex-col">
        {messages.map((m, idx) => (
          <div key={idx} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
              m.role === "user" 
                ? "bg-indigo-600 text-white font-medium rounded-br-none" 
                : "bg-slate-100 text-slate-800 font-medium rounded-bl-none border border-slate-200/60"
            }`}>
              {m.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="max-w-[80%] p-4 rounded-2xl bg-slate-100 border border-slate-200/60 text-slate-500 text-sm flex items-center gap-2 rounded-bl-none">
              <svg className="animate-spin h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Graph context hydrating...
            </div>
          </div>
        )}
      </div>

      {/* Chat Input Field */}
      <form onSubmit={handleSend} className="mt-6 flex gap-3 bg-white p-2 rounded-2xl shadow-sm border border-slate-200">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask e.g., 'Why does Wurtz reaction fail for odd alkanes?' or 'Explain Bohr radius formula'"
          className="flex-1 p-3.5 rounded-xl border-0 focus:outline-none focus:ring-0 text-slate-800 text-sm font-medium"
        />
        <button 
          type="submit" 
          disabled={loading}
          className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-xl transition shadow"
        >
          Send
        </button>
      </form>

    </div>
  );
}
