"use client";

import { useState } from "react";
import { Quote, Play, Star } from "lucide-react";

type Persona = "all" | "scholars" | "educators" | "parents";

const testimonials = [
  {
    persona: "scholars" as const,
    quote: "The multicolor notes made inorganic chemistry finally click. KMnO₄ in purple, Cu²⁺ in blue — I stopped confusing reactions. Jumped 40 marks in 3 months.",
    name: "Ananya S.",
    role: "JEE Advanced AIR 312",
    location: "Maharashtra, India",
    hasVideo: true,
  },
  {
    persona: "scholars" as const,
    quote: "Snap & Solve saved me during late-night doubt sessions. Just photograph the problem, get a full mechanism. It's like having a tutor at 2 AM.",
    name: "Rohan K.",
    role: "NEET 685/720",
    location: "Tamil Nadu, India",
    hasVideo: false,
  },
  {
    persona: "educators" as const,
    quote: "I recommend SYNERGIC BOND to all my students. The exception vault alone covers edge cases most textbooks skip. Pedagogically sound and exam-accurate.",
    name: "Dr. Marcus V.",
    role: "AP Chemistry Educator",
    location: "California, USA",
    hasVideo: true,
  },
  {
    persona: "educators" as const,
    quote: "The AI tutor explains mechanisms the way I would in class — step by step, with arrow pushing. Rare to see this depth in an automated tool.",
    name: "Prof. Sunita R.",
    role: "Chemistry Faculty",
    location: "Delhi, India",
    hasVideo: false,
  },
  {
    persona: "parents" as const,
    quote: "My daughter finally enjoys studying chemistry. The gamified streaks keep her consistent without me nagging. Worth every rupee.",
    name: "Vikram M.",
    role: "Parent of JEE Aspirant",
    location: "Gujarat, India",
    hasVideo: false,
  },
  {
    persona: "parents" as const,
    quote: "As a parent abroad, finding India-level chemistry prep was hard. This platform bridged that gap perfectly for my son's Olympiad prep.",
    name: "Priya N.",
    role: "Parent of Olympiad Student",
    location: "Singapore",
    hasVideo: true,
  },
];

const filters: { id: Persona; label: string }[] = [
  { id: "all", label: "Show All" },
  { id: "scholars", label: "Scholars" },
  { id: "educators", label: "Educators" },
  { id: "parents", label: "Parents" },
];

export default function Testimonials() {
  const [filter, setFilter] = useState<Persona>("all");
  const shown = filter === "all" ? testimonials : testimonials.filter((t) => t.persona === filter);

  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <div className="mb-8 text-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.4em] text-cyan-300">
          Success Stories
        </p>
        <h2 className="text-3xl font-black md:text-4xl text-white">
          Trusted by Rankers Worldwide
        </h2>
      </div>

      {/* Persona filter */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-full bg-[#111827] border border-white/[0.06] p-1 gap-1">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                filter === f.id ? "bg-cyan-500 text-black" : "text-gray-400 hover:text-white"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {shown.map((t, i) => (
          <div
            key={i}
            className="rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/[0.06] p-6 flex flex-col" style={{ backgroundColor: "#111827", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)" }}
          >
            <div className="flex items-center justify-between mb-4">
              <Quote className="h-6 w-6 text-cyan-400/40" />
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="h-3 w-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>

            <p className="text-sm text-white/70 leading-relaxed flex-1 mb-5">"{t.quote}"</p>

            {t.hasVideo && (
              <div className="relative rounded-xl bg-black/40 border border-white/[0.06] h-20 mb-4 flex items-center justify-center group cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10" />
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-cyan-500/30 transition">
                  <Play className="h-4 w-4 text-white fill-white ml-0.5" />
                </div>
                <span className="absolute bottom-1.5 left-2 text-[9px] text-white/40 font-medium">Video Testimonial</span>
              </div>
            )}

            <div className="border-t border-white/[0.06] pt-4">
              <p className="text-sm font-bold text-white">{t.name}</p>
              <p className="text-xs text-cyan-400 mt-0.5">{t.role}</p>
              <p className="text-xs text-gray-500 mt-0.5">📍 {t.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
