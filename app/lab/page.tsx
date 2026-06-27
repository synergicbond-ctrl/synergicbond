"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Volume2, FlaskConical, Beaker, Droplet, RotateCcw } from "lucide-react";

type Reagent = {
  name: string;
  color: string;
  label: string;
};

// Real-world compound colors
const reagents: Reagent[] = [
  { name: "KMnO₄",   color: "#8E24AA", label: "Permanganate (Purple)" },
  { name: "Cu²⁺",    color: "#29B6F6", label: "Copper Sulphate (Sky Blue)" },
  { name: "K₂Cr₂O₇", color: "#FB8C00", label: "Dichromate (Orange)" },
  { name: "Phenolphthalein", color: "#EC407A", label: "Endpoint (Pink)" },
];

const captions = {
  english: "System: 'Slowly deliver the titrant dropwise until a permanent color change persists.'",
  hinglish: "System: 'Burette se drop-by-drop solution add karo jab tak light pink color permanent na ho jaye.'",
};

export default function LabPage() {
  const [solution, setSolution] = useState<string>("transparent");
  const [activeReagent, setActiveReagent] = useState<string>("");
  const [caption, setCaption] = useState<string>(captions.english);
  const [lang, setLang] = useState<"english" | "hinglish">("english");

  function addReagent(r: Reagent) {
    setSolution(r.color);
    setActiveReagent(r.name);
  }

  function reset() {
    setSolution("transparent");
    setActiveReagent("");
  }

  function speak(which: "english" | "hinglish") {
    setLang(which);
    setCaption(captions[which]);
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const text = which === "hinglish"
      ? "Burette se drop by drop solution add karo jab tak light pink color permanent na ho jaye."
      : "Slowly deliver the titrant dropwise until a permanent color change persists.";
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = which === "hinglish" ? "hi-IN" : "en-IN";
    utter.rate = 0.9;
    window.speechSynthesis.speak(utter);
  }

  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <Navbar />
      <div className="mx-auto max-w-5xl px-6 py-12">

        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
            <FlaskConical className="h-3.5 w-3.5 text-purple-400" />
            <span className="text-xs font-bold text-purple-300 tracking-wide">VIRTUAL LAB</span>
          </div>
          <h1 className="text-4xl font-black md:text-5xl">Practical Simulator</h1>
          <p className="mt-3 text-white/50 text-sm">
            Acid-Base Titration &amp; Transition Metal Indicator Analysis
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">

          {/* Lab bench */}
          <div className="rounded-3xl bg-[#111827] border border-white/[0.06] p-8 flex flex-col items-center justify-center min-h-[380px]">
            {/* Beaker */}
            <div className="relative">
              {/* Burette drip */}
              <div className="absolute left-1/2 -top-16 -translate-x-1/2 flex flex-col items-center">
                <div className="w-2 h-14 rounded-b-full bg-white/10 border-x border-white/10" />
                <Droplet className="h-3 w-3 text-cyan-400 animate-bounce" style={{ animationDuration: "1.5s" }} />
              </div>

              {/* Beaker body */}
              <svg width="160" height="180" viewBox="0 0 160 180">
                <defs>
                  <clipPath id="beakerClip">
                    <path d="M40 20 L40 130 Q40 160 80 160 Q120 160 120 130 L120 20 Z" />
                  </clipPath>
                </defs>
                {/* Liquid */}
                <rect
                  x="40" y="70" width="80" height="90"
                  clipPath="url(#beakerClip)"
                  fill={solution === "transparent" ? "rgba(255,255,255,0.04)" : solution}
                  style={{ transition: "fill 0.8s ease" }}
                />
                {/* Liquid surface shimmer */}
                {solution !== "transparent" && (
                  <ellipse cx="80" cy="72" rx="40" ry="4" fill="rgba(255,255,255,0.25)" clipPath="url(#beakerClip)" />
                )}
                {/* Glass outline */}
                <path d="M40 20 L40 130 Q40 160 80 160 Q120 160 120 130 L120 20"
                  fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
                <line x1="35" y1="20" x2="125" y2="20" stroke="rgba(255,255,255,0.25)" strokeWidth="2" />
                {/* Measurement marks */}
                <line x1="110" y1="50" x2="120" y2="50" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                <line x1="110" y1="90" x2="120" y2="90" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                <line x1="110" y1="130" x2="120" y2="130" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              </svg>

              {activeReagent && (
                <div className="absolute -right-4 top-1/2 text-xs font-bold px-2 py-1 rounded-lg bg-black/60" style={{ color: solution }}>
                  {activeReagent}
                </div>
              )}
            </div>

            <p className="mt-6 text-sm text-white/40 flex items-center gap-2">
              <Beaker className="h-4 w-4" />
              {activeReagent ? `Solution: ${reagents.find(r => r.name === activeReagent)?.label}` : "Add a reagent to begin"}
            </p>
          </div>

          {/* Controls */}
          <div className="space-y-4">
            {/* Reagent buttons */}
            <div className="rounded-2xl bg-[#111827] border border-white/[0.06] p-5">
              <h3 className="text-sm font-bold mb-3">Add Reagent</h3>
              <div className="grid grid-cols-2 gap-2">
                {reagents.map((r) => (
                  <button
                    key={r.name}
                    onClick={() => addReagent(r)}
                    className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-black/30 px-3 py-2.5 text-xs font-semibold transition hover:-translate-y-0.5 hover:border-white/20"
                  >
                    <span className="h-3 w-3 rounded-full flex-shrink-0" style={{ background: r.color }} />
                    <span className="text-white/80 truncate">{r.name}</span>
                  </button>
                ))}
              </div>
              <button
                onClick={reset}
                className="flex items-center justify-center gap-1.5 w-full mt-3 text-xs text-white/40 hover:text-white border border-white/[0.06] rounded-xl py-2 transition"
              >
                <RotateCcw className="h-3 w-3" /> Reset Beaker
              </button>
            </div>

            {/* Audio console */}
            <div className="rounded-2xl bg-[#111827] border border-white/[0.06] p-5">
              <h3 className="text-sm font-bold mb-3">Audio Guide</h3>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => speak("english")}
                  className={`flex items-center justify-center gap-1.5 rounded-xl px-3 py-2.5 text-xs font-semibold transition ${
                    lang === "english" ? "bg-cyan-500 text-black" : "bg-black/30 border border-white/[0.08] text-white/70"
                  }`}
                >
                  <Volume2 className="h-3.5 w-3.5" /> English
                </button>
                <button
                  onClick={() => speak("hinglish")}
                  className={`flex items-center justify-center gap-1.5 rounded-xl px-3 py-2.5 text-xs font-semibold transition ${
                    lang === "hinglish" ? "bg-cyan-500 text-black" : "bg-black/30 border border-white/[0.08] text-white/70"
                  }`}
                >
                  <Volume2 className="h-3.5 w-3.5" /> Hinglish
                </button>
              </div>
            </div>

            {/* Subtitle / caption */}
            <div className="rounded-2xl bg-black/40 border border-cyan-500/20 p-4">
              <p className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider mb-1.5">Live Caption</p>
              <p className="text-sm text-white/70 leading-relaxed italic">{caption}</p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
