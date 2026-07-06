"use client";

import Link from "next/link";
import { Sparkles, Camera, ArrowUpRight } from "lucide-react";

export default function FloatingCTAs() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Ask Chemistry AI Button */}
      <Link
        href="/doubt-solver"
        className="group relative flex items-center gap-2.5 rounded-full border border-cyan-400/30 bg-[#0B0F19]/90 px-5 py-3 text-xs font-bold text-white shadow-[0_8px_30px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-[#111827] hover:shadow-[0_10px_35px_rgba(34,211,238,0.25)]"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
        </span>
        <Sparkles className="h-4 w-4 text-cyan-300 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
        <span className="tracking-wide">Ask Chemistry AI</span>
        <ArrowUpRight className="h-3.5 w-3.5 text-cyan-400/70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>

      {/* Snap & Solve Button */}
      <Link
        href="/snap-solve"
        className="group relative flex items-center gap-2.5 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 px-5 py-3 text-xs font-extrabold text-black shadow-[0_8px_30px_rgba(0,187,249,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,187,249,0.5)] hover:brightness-110"
      >
        <Camera className="h-4 w-4 text-black transition-transform duration-300 group-hover:scale-110" />
        <span className="tracking-wide">Snap &amp; Solve</span>
      </Link>
    </div>
  );
}
