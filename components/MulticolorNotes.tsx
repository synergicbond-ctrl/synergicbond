"use client";

import { useState, useEffect } from "react";
import { Clock, Sparkles } from "lucide-react";

// Real-world chemical compound color map
const COMPOUND_COLORS: Record<string, string> = {
  "KMnO₄": "#A855F7", "KMnO4": "#A855F7",
  "Cu²⁺": "#38BDF8", "Cu2+": "#38BDF8",
  "Cr₂O₇²⁻": "#FB923C", "Cr2O7": "#FB923C",
  "Fe³⁺": "#FBBF24", "Fe2+": "#34D399",
  "Ni²⁺": "#22C55E", "Co²⁺": "#F472B6",
  "I₂": "#7C3AED", "Br₂": "#B45309", "Cl₂": "#A3E635",
};

function colorize(text: string) {
  // Split on known compounds and wrap them in their real colors
  const pattern = new RegExp(`(${Object.keys(COMPOUND_COLORS).map(k => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "g");
  return text.split(pattern).map((part, i) => {
    const color = COMPOUND_COLORS[part];
    return color
      ? <span key={i} style={{ color, fontWeight: 700 }}>{part}</span>
      : <span key={i}>{part}</span>;
  });
}

function fmt(s: number) {
  const h = String(Math.floor(s / 3600)).padStart(2, "0");
  const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
  const sec = String(s % 60).padStart(2, "0");
  return `${h}:${m}:${sec}`;
}

export default function MulticolorNotes() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="rounded-3xl bg-[#111827] border border-white/[0.06] p-6 md:p-8">
      {/* Focus timer */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-cyan-400" />
          <span className="text-sm font-bold text-white">High-Retention Notes</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
          <span className="text-[11px] font-bold text-white/50 tracking-wide">SESSION FOCUS TIME</span>
          <span className="text-sm font-black font-mono text-cyan-300 tabular-nums">{fmt(seconds)}</span>
        </div>
      </div>

      {/* Color legend */}
      <div className="flex flex-wrap gap-3 mb-6 text-[11px]">
        <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-cyan-400" /><span className="text-white/50">Formulas</span></span>
        <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-red-500" /><span className="text-white/50">Exceptions / Warnings</span></span>
        <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full" style={{ background: "#A855F7" }} /><span className="text-white/50">KMnO₄</span></span>
        <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full" style={{ background: "#38BDF8" }} /><span className="text-white/50">Cu²⁺</span></span>
        <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full" style={{ background: "#FB923C" }} /><span className="text-white/50">Cr₂O₇²⁻</span></span>
      </div>

      {/* Example multicolor note */}
      <div className="space-y-5 text-sm leading-relaxed">
        <div>
          <h3 className="text-lg font-black text-cyan-300 mb-2">⚗️ Redox in Acidic Medium</h3>
          <p className="text-white/70">
            In acidic solution, {colorize("KMnO₄")} acts as a powerful oxidizing agent, getting reduced from Mn⁷⁺ to Mn²⁺ (colorless). Similarly, {colorize("Cr₂O₇²⁻")} is reduced to green Cr³⁺.
          </p>
        </div>

        {/* Formula block */}
        <div className="rounded-xl bg-cyan-500/5 border border-cyan-500/20 px-4 py-3">
          <p className="text-cyan-300 font-mono font-semibold">MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O &nbsp;&nbsp;(E° = +1.51 V)</p>
        </div>

        <div>
          <h3 className="text-lg font-black text-cyan-300 mb-2">🧪 Transition Metal Ion Colors</h3>
          <p className="text-white/70">
            {colorize("Cu²⁺")} solutions appear sky blue due to d-d transitions. {colorize("Fe³⁺")} gives a yellow tint, while {colorize("Ni²⁺")} is green and {colorize("Co²⁺")} is pink.
          </p>
        </div>

        {/* Warning / exception box */}
        <div className="rounded-xl bg-red-500/5 border border-red-500/30 px-4 py-3">
          <p className="text-red-400 font-bold text-xs uppercase tracking-wider mb-1">⚠️ High-Yield Exception</p>
          <p className="text-white/70">
            Cr and Cu show anomalous configurations: Cr = [Ar]3d⁵4s¹ and Cu = [Ar]3d¹⁰4s¹ — half-filled and fully-filled d-orbitals give extra stability. <span className="text-red-400 font-semibold">This is a guaranteed exam trap.</span>
          </p>
        </div>

        <div>
          <h3 className="text-lg font-black text-cyan-300 mb-2">💧 Precipitate Identification</h3>
          <div className="rounded-xl border border-dashed border-white/15 px-4 py-3 text-white/70">
            Adding NaOH to {colorize("Cu²⁺")} gives a pale blue precipitate of Cu(OH)₂. With {colorize("Fe³⁺")}, a reddish-brown Fe(OH)₃ precipitate forms.
          </div>
        </div>
      </div>
    </div>
  );
}
