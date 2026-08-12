"use client";

import { useState } from "react";
import { Search, Mic, Zap } from "lucide-react";

const quickTopics = [
  "Atomic Structure", "Chemical Bonding", "Thermodynamics",
  "Equilibrium", "Organic Chemistry", "Electrochemistry",
];

type SpeechRecognitionResultEvent = {
  results: {
    [index: number]: {
      [index: number]: {
        transcript: string;
      };
    };
  };
};

type SpeechRecognitionInstance = {
  lang: string;
  onstart: () => void;
  onend: () => void;
  onresult: (event: SpeechRecognitionResultEvent) => void;
  start: () => void;
};

type SpeechRecognitionConstructor = new () => SpeechRecognitionInstance;

type SpeechRecognitionWindow = Window & typeof globalThis & {
  webkitSpeechRecognition?: SpeechRecognitionConstructor;
  SpeechRecognition?: SpeechRecognitionConstructor;
};

export default function HeroSearch() {
  const [query, setQuery] = useState("");
  const [listening, setListening] = useState(false);

  function startVoice() {
    if (typeof window === "undefined") return;
    const speechWindow = window as SpeechRecognitionWindow;
    const SR = speechWindow.webkitSpeechRecognition || speechWindow.SpeechRecognition;
    if (!SR) { alert("Voice search not supported in this browser."); return; }
    const recognition = new SR();
    recognition.lang = "en-IN";
    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);
    recognition.onresult = (e) => {
      const transcript = e.results[0]?.[0]?.transcript;
      if (transcript) setQuery(transcript);
    };
    recognition.start();
  }

  return (
    <div className="mx-auto w-full max-w-5xl mt-10">

      {/* Live metrics ticker */}
      <div className="flex items-center justify-center gap-2 mb-5 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] w-fit mx-auto">
        <Zap className="h-3.5 w-3.5 text-cyan-400 flex-shrink-0" />
        <p className="text-[11px] font-semibold text-white/60">
          <span className="text-cyan-400 font-bold">LIVE:</span>{" "}
          14,250+ Students Online
          <span className="mx-2 text-white/20">|</span>
          Next Mock Challenge in{" "}
          <span className="text-amber-400 font-bold">2h 15m</span>
        </p>
        <span className="relative flex h-2 w-2 flex-shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
        </span>
      </div>

      {/* Search box */}
      <div className="rounded-2xl border border-white/[0.08] bg-[#111827] p-6 shadow-[0_0_40px_rgba(34,211,238,0.05)]">

        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-xl bg-cyan-500/10 p-2.5">
            <Search className="h-5 w-5 text-cyan-300" />
          </div>
          <div className="text-left">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-cyan-300">
              AI Chemistry Engine
            </p>
            <h2 className="text-xl font-bold text-white">
              Search the Chemistry Universe
            </h2>
          </div>
        </div>

        <p className="mb-5 text-sm text-white/40">
          Concepts • Reactions • Mechanisms • Formulas • PYQs • AI Explanations
        </p>

        <div className="flex flex-col gap-3 md:flex-row">
          <div className="relative flex-1">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Atomic Structure, Thermodynamics..."
              className="w-full rounded-xl border border-white/[0.08] bg-black/40 px-5 py-3.5 pr-12 text-sm text-white placeholder-white/30 outline-none transition focus:border-cyan-400/50"
            />
            <button
              onClick={startVoice}
              title="Voice search"
              className={`absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg transition-all ${
                listening
                  ? "text-cyan-400 bg-cyan-400/10 shadow-[0_0_12px_rgba(34,211,238,0.5)] animate-pulse"
                  : "text-white/30 hover:text-white/70"
              }`}
            >
              <Mic className="h-4 w-4" />
            </button>
          </div>

          <button className="rounded-xl bg-gradient-to-r from-cyan-400 to-sky-500 px-7 py-3.5 text-sm font-semibold text-black shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5">
            Ask AI →
          </button>
        </div>

        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {quickTopics.map((topic) => (
            <button
              key={topic}
              onClick={() => setQuery(topic)}
              className="rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 text-xs text-white/50 transition hover:border-cyan-400/30 hover:bg-cyan-500/10 hover:text-white"
            >
              {topic}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
