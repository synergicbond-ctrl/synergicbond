"use client";

import { useState } from "react";
import { Quote, Play, Star, CheckCircle2, Sparkles } from "lucide-react";
import { useT } from "@/lib/i18n";

type Persona = "all" | "scholars" | "educators" | "parents";

const testimonials = [
  {
    persona: "scholars" as const,
    quote: "We are currently compiling peer-reviewed learning outcomes, verified practice score improvements, and algorithmic mastery logs from our beta cohorts. Full case studies will be published here following our official public launch.",
    name: "Verified Scholar Cohorts",
    role: "Beta Program Outcomes",
    program: "JEE & NEET Programs",
    accent: "#3B82F6",
    location: "National Beta Network",
    hasVideo: false,
  },
  {
    persona: "educators" as const,
    quote: "Independent pedagogical reviews and faculty verification reports on our schema-governed AI explanations and exception vault are undergoing peer evaluation and will be published soon.",
    name: "Academic Review Board",
    role: "Faculty Evaluation",
    program: "Curriculum Standards",
    accent: "#10B981",
    location: "Academic Partners",
    hasVideo: false,
  },
  {
    persona: "parents" as const,
    quote: "Parental feedback on gamified consistency tracking, student engagement metrics, and concept mastery dashboards is being documented across our active beta testing families.",
    name: "Beta Testing Families",
    role: "Parental Engagement",
    program: "Student Mastery Tracking",
    accent: "#9B5DE5",
    location: "Community Network",
    hasVideo: false,
  },
];

const filters: { id: Persona; tkey: string }[] = [
  { id: "all", tkey: "testi.all" },
  { id: "scholars", tkey: "testi.scholars" },
  { id: "educators", tkey: "testi.educators" },
  { id: "parents", tkey: "testi.parents" },
];

export default function Testimonials() {
  const { t } = useT();
  const [filter, setFilter] = useState<Persona>("all");
  const shown = filter === "all" ? testimonials : testimonials.filter((x) => x.persona === filter);

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-cyan-300 text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-md shadow-sm">
          <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
          {t("testi.eyebrow")}
        </div>
        <h2 className="text-3xl font-black md:text-5xl text-white tracking-tight drop-shadow-sm">
          {t("testi.title")}
        </h2>
      </div>

      {/* Persona filter with OS glassmorphic styling */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex rounded-full bg-[#0B0F19]/90 border border-white/15 p-1.5 gap-1.5 backdrop-blur-xl shadow-2xl">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                filter === f.id ? "bg-gradient-to-r from-cyan-400 to-sky-500 text-black shadow-lg scale-105" : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              {t(f.tkey)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {shown.map((item, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#111827]/95 to-[#0B0F19]/95 border border-white/15 p-7 flex flex-col justify-between backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:border-white/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
            style={{ boxShadow: `0 10px 30px -15px ${item.accent}33` }}
          >
            {/* Giant decorative quotation mark background */}
            <Quote className="absolute right-4 top-4 h-28 w-28 text-white/[0.03] -z-0 pointer-events-none transform -rotate-12 group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute -left-12 -top-12 h-36 w-36 rounded-full blur-3xl opacity-0 pointer-events-none transition-all duration-500 group-hover:opacity-20 group-hover:scale-150" style={{ background: item.accent }} />

            <div className="relative z-10">
              <div className="flex items-center justify-between gap-3 mb-4">
                {/* Exam program tag distinction */}
                <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border shadow-sm" style={{ background: `${item.accent}1a`, color: item.accent, borderColor: `${item.accent}40` }}>
                  <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: item.accent }} />
                  {item.program}
                </span>

                {/* Star rating glow */}
                <div className="flex gap-1" style={{ filter: "drop-shadow(0 0 6px rgba(251,191,36,0.6))" }}>
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-amber-400 text-amber-400 transition-transform duration-300 hover:scale-125" />
                  ))}
                </div>
              </div>

              {/* Quotation mark typography */}
              <p className="text-base text-white/85 leading-relaxed font-normal mb-6 italic">&ldquo;{item.quote}&rdquo;</p>
            </div>

            <div className="relative z-10">
              {item.hasVideo && (
                <button className="relative rounded-xl bg-black/50 border border-white/10 h-12 mb-5 flex items-center justify-between w-full px-4 group/btn cursor-pointer overflow-hidden transition-all duration-300 hover:border-cyan-400/50 hover:bg-black/70 shadow-inner">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-transparent opacity-50 group-hover/btn:opacity-100 transition-opacity" />
                  <div className="flex items-center gap-3">
                    <div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500/20 border border-cyan-400/40 group-hover/btn:scale-110 group-hover/btn:bg-cyan-500/40 transition">
                      <Play className="h-3.5 w-3.5 text-cyan-300 fill-cyan-300 ml-0.5" />
                    </div>
                    <span className="relative text-xs text-white/80 font-bold group-hover/btn:text-white transition">Watch Video Testimonial</span>
                  </div>
                  <span className="relative text-[10px] text-cyan-400 font-extrabold uppercase tracking-widest opacity-80">0:45</span>
                </button>
              )}

              {/* Verified badge visual hierarchy */}
              <div className="border-t border-white/[0.08] pt-4 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="text-base font-black text-white">{item.name}</p>
                    <span title="Verified User" className="inline-flex items-center">
                      <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" style={{ filter: "drop-shadow(0 0 6px rgba(34,211,238,0.5))" }} />
                    </span>
                  </div>
                  <p className="text-xs font-bold mt-0.5" style={{ color: item.accent }}>{item.role}</p>
                </div>
                <p className="text-xs text-gray-500 font-medium">📍 {item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

