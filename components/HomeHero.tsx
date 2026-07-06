"use client";

import { useState, useEffect } from "react";
import { useT } from "@/lib/i18n";

export default function HomeHero() {
  const { t } = useT();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#0B0F19] pt-20 pb-16">
      {/* Ambient Radial Depth & Glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div 
          className="absolute left-1/2 top-1/4 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-cyan-500/15 via-sky-500/10 to-transparent blur-[140px] transition-transform duration-1000 ease-out"
          style={{ transform: `translate(-50%, 0) translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}
        />
        <div 
          className="absolute right-1/4 top-10 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-violet-600/15 via-fuchsia-500/10 to-transparent blur-[150px] transition-transform duration-1000 ease-out"
          style={{ transform: `translate(${-mousePos.x * 0.7}px, ${-mousePos.y * 0.7}px)` }}
        />
        <div className="absolute left-10 bottom-10 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[120px]" />
        
        {/* Subtle Chemistry Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Floating Animated Chemistry Background (Orbitals, Molecules, Particles) */}
      <div className="pointer-events-none absolute inset-0 -z-5 flex items-center justify-center overflow-hidden opacity-40">
        {/* Rotating 3D Orbital Rings Illusion */}
        <div 
          className="absolute h-[650px] w-[650px] rounded-full border border-cyan-500/20 border-dashed transition-transform duration-700 ease-out"
          style={{ transform: `rotate(15deg) translate(${mousePos.x}px, ${mousePos.y}px)` }}
        >
          <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
        </div>
        <div 
          className="absolute h-[500px] w-[500px] rounded-full border border-violet-500/20 transition-transform duration-700 ease-out"
          style={{ transform: `rotate(-35deg) scaleY(0.6) translate(${-mousePos.x * 1.2}px, ${-mousePos.y * 1.2}px)` }}
        >
          <div className="absolute top-1/2 -right-1.5 h-3 w-3 -translate-y-1/2 rounded-full bg-violet-400 shadow-[0_0_12px_#a78bfa]" />
        </div>
        <div 
          className="absolute h-[380px] w-[380px] rounded-full border border-sky-400/20 transition-transform duration-700 ease-out"
          style={{ transform: `rotate(65deg) scaleX(0.5) translate(${mousePos.x * 0.8}px, ${-mousePos.y * 0.8}px)` }}
        >
          <div className="absolute -bottom-1.5 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-sky-300 shadow-[0_0_10px_#7dd3fc]" />
        </div>

        {/* Floating Molecular Lattice Nodes */}
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <g className="opacity-30">
            <line x1="20%" y1="30%" x2="28%" y2="22%" stroke="rgba(34,211,238,0.3)" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="20%" cy="30%" r="4" fill="#22d3ee" />
            <circle cx="28%" cy="22%" r="6" fill="#818cf8" />
            <text x="29%" y="21%" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="monospace" fontWeight="bold">sp³</text>
            
            <line x1="80%" y1="25%" x2="73%" y2="35%" stroke="rgba(167,139,250,0.3)" strokeWidth="1" />
            <circle cx="80%" cy="25%" r="5" fill="#c084fc" />
            <circle cx="73%" cy="35%" r="4" fill="#38bdf8" />
            <text x="81%" y="24%" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="monospace" fontWeight="bold">π</text>

            <line x1="15%" y1="75%" x2="25%" y2="68%" stroke="rgba(56,189,248,0.3)" strokeWidth="1" />
            <circle cx="15%" cy="75%" r="5" fill="#38bdf8" />
            <circle cx="25%" cy="68%" r="7" fill="#22d3ee" />
            <text x="13%" y="79%" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="monospace" fontWeight="bold">ΔG°</text>
            
            <line x1="85%" y1="70%" x2="77%" y2="78%" stroke="rgba(34,211,238,0.3)" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="85%" cy="70%" r="6" fill="#818cf8" />
            <circle cx="77%" cy="78%" r="4" fill="#22d3ee" />
            <text x="86%" y="71%" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="monospace" fontWeight="bold">E=mc²</text>
          </g>
        </svg>
      </div>

      {/* Main Content Container with Premium Glassmorphic Depth */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        
        {/* Premium Glassmorphic Badge Pill */}
        <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-400/30 bg-gradient-to-r from-cyan-500/10 via-sky-500/10 to-violet-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-cyan-300 backdrop-blur-md shadow-[0_0_25px_-5px_rgba(34,211,238,0.3)] transition-all duration-300 hover:border-cyan-400/50 hover:scale-[1.02]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
          </span>
          {t("hero.badge")}
        </div>

        {/* Stronger Headline with Refined Typography Scale & Spacing */}
        <h1 className="mt-8 text-5xl font-black leading-[1.02] tracking-[-0.035em] sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="text-white drop-shadow-[0_2px_20px_rgba(255,255,255,0.15)]">{t("hero.headline1")}</span>
          <br />
          <span className="bg-gradient-to-r from-[#00F5D4] via-[#00BBF9] to-[#9B5DE5] bg-clip-text text-transparent drop-shadow-[0_2px_25px_rgba(0,187,249,0.25)]">
            {t("hero.headline2")}
          </span>
        </h1>

        {/* Tagline with Improved Tracking & Contrast */}
        <p className="mx-auto mt-7 max-w-3xl text-lg font-normal leading-relaxed text-white/65 tracking-wide md:text-xl lg:text-2xl drop-shadow-sm">
          {t("hero.tagline")}
        </p>

        {/* Interactive 3D Orbital Cloud Accent Below Tagline */}
        <div className="mt-10 flex justify-center opacity-80">
          <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-2.5 text-xs font-semibold tracking-wider text-white/60 backdrop-blur-sm shadow-lg">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Search • Learn • Practice • Master</span>
            <span className="flex h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
          </div>
        </div>

      </div>
    </section>
  );
}

