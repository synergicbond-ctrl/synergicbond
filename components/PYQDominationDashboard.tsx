"use client";

import React, { useState } from "react";
import { ALL_PYQ_QUESTIONS } from "@/lib/pyq";
import { 
  Target, 
  AlertTriangle, 
  Layers, 
  Flame, 
  CheckCircle2, 
  Sparkles, 
  AlertCircle
} from "lucide-react";

// Chapter categories
const physicalChapters = [
  "Some Basic Concepts",
  "Atomic Structure",
  "Chemical Bonding",
  "States of Matter",
  "Thermodynamics",
  "Equilibrium",
  "Redox Reactions",
  "Electrochemistry",
  "Chemical Kinetics",
  "Surface Chemistry",
  "Solutions",
  "Solid State",
  "Nuclear Chemistry",
];

const inorganicChapters = [
  "Periodic Table",
  "s-Block Elements",
  "p-Block Elements",
  "d and f Block Elements",
  "Coordination Compounds",
  "Hydrogen",
  "Metallurgy",
  "Qualitative Analysis",
];

const organicChapters = [
  "General Organic Chemistry",
  "Hydrocarbons",
  "Haloalkanes and Haloarenes",
  "Alcohols Phenols Ethers",
  "Aldehydes Ketones",
  "Carboxylic Acids",
  "Amines",
  "Biomolecules",
  "Polymers",
  "Chemistry in Everyday Life",
];

export default function PYQDominationDashboard() {
  const [activeTab, setActiveTab] = useState<"status" | "gaps" | "roadmap">("status");
  const [selectedSub, setSelectedSub] = useState<"all" | "physical" | "inorganic" | "organic">("all");

  // Calculate live statistics
  const neetCount = ALL_PYQ_QUESTIONS.filter((q) => q.exam === "NEET").length;
  const jmCount = ALL_PYQ_QUESTIONS.filter((q) => q.exam === "JEE Main").length;
  const jaCount = ALL_PYQ_QUESTIONS.filter((q) => q.exam === "JEE Advanced").length;

  const targets = {
    NEET: 500,
    "JEE Main": 500,
    "JEE Advanced": 300,
  };

  const currentCounts = {
    NEET: neetCount,
    "JEE Main": jmCount,
    "JEE Advanced": jaCount,
  };

  const getChapterData = (chapterName: string) => {
    const qs = ALL_PYQ_QUESTIONS.filter((q) => q.chapter === chapterName);
    const neet = qs.filter((q) => q.exam === "NEET").length;
    const jm = qs.filter((q) => q.exam === "JEE Main").length;
    const ja = qs.filter((q) => q.exam === "JEE Advanced").length;
    const years = Array.from(new Set(qs.map((q) => q.year))).sort((a, b) => b - a);

    return {
      name: chapterName,
      total: qs.length,
      neet,
      jm,
      ja,
      years,
    };
  };

  const physicalData = physicalChapters.map(getChapterData);
  const inorganicData = inorganicChapters.map(getChapterData);
  const organicData = organicChapters.map(getChapterData);

  const allChaptersData = [...physicalData, ...inorganicData, ...organicData];

  // Gaps calculation
  const zeroChapters = allChaptersData.filter((c) => c.total === 0);
  const lowChapters = allChaptersData.filter((c) => c.total > 0 && c.total < 20);

  const getSyllabusCategory = (name: string) => {
    if (physicalChapters.includes(name)) return "Physical";
    if (inorganicChapters.includes(name)) return "Inorganic";
    return "Organic";
  };

  return (
    <section className="mx-auto mt-24 max-w-7xl px-6" id="pyq-domination">
      {/* Section Header */}
      <div className="text-center md:text-left mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-300">
          <Sparkles className="h-3.5 w-3.5" />
          System Health Monitor
        </div>
        <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tight text-white">
          PHASE: <span className="bg-gradient-to-r from-red-400 via-pink-500 to-violet-500 bg-clip-text text-transparent">PYQ DOMINATION</span>
        </h2>
        <p className="mt-4 text-lg text-white/60 max-w-2xl">
          Real-time tracking, gap analysis, and target tracking for our chemistry database expansion.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid gap-8 lg:grid-cols-[250px_1fr]">
        
        {/* Navigation Sidebar */}
        <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 border-b lg:border-b-0 lg:border-r border-white/10 lg:pr-6">
          <button
            onClick={() => setActiveTab("status")}
            className={`flex items-center gap-3 w-full px-4 py-3 rounded-2xl text-left font-bold transition-all ${
              activeTab === "status"
                ? "bg-gradient-to-r from-cyan-500/25 to-sky-500/5 border border-cyan-400/30 text-cyan-300"
                : "text-white/60 hover:text-white hover:bg-white/[0.02]"
            }`}
          >
            <Target className="h-5 w-5 animate-pulse" />
            <span>Target Progress</span>
          </button>
          
          <button
            onClick={() => setActiveTab("gaps")}
            className={`flex items-center gap-3 w-full px-4 py-3 rounded-2xl text-left font-bold transition-all ${
              activeTab === "gaps"
                ? "bg-gradient-to-r from-cyan-500/25 to-sky-500/5 border border-cyan-400/30 text-cyan-300"
                : "text-white/60 hover:text-white hover:bg-white/[0.02]"
            }`}
          >
            <AlertTriangle className="h-5 w-5" />
            <span>Gap Analysis</span>
          </button>
          
          <button
            onClick={() => setActiveTab("roadmap")}
            className={`flex items-center gap-3 w-full px-4 py-3 rounded-2xl text-left font-bold transition-all ${
              activeTab === "roadmap"
                ? "bg-gradient-to-r from-cyan-500/25 to-sky-500/5 border border-cyan-400/30 text-cyan-300"
                : "text-white/60 hover:text-white hover:bg-white/[0.02]"
            }`}
          >
            <Layers className="h-5 w-5" />
            <span>Roadmap</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="min-h-[400px]">
          
          {/* TAB 1: Target Progress */}
          {activeTab === "status" && (
            <div className="space-y-8 animate-fadeIn">
              
              {/* Progress Summary Cards */}
              <div className="grid gap-6 md:grid-cols-3">
                
                {/* NEET Card */}
                <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 hover:border-emerald-500/20 transition duration-300">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">NEET Target</span>
                    <span className="text-xs text-white/50">{Math.round((neetCount / 500) * 100)}% Complete</span>
                  </div>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-4xl font-black text-white">{neetCount}</span>
                    <span className="text-white/40">/ 500</span>
                  </div>
                  <div className="mt-4 h-2 w-full rounded-full bg-white/5 overflow-hidden">
                    <div 
                      className="h-full bg-emerald-500 transition-all duration-1000"
                      style={{ width: `${Math.min((neetCount / 500) * 100, 100)}%` }}
                    />
                  </div>
                  <p className="mt-4 text-xs text-white/50 leading-relaxed">
                    Need **+{targets.NEET - currentCounts.NEET}** verified PYQs to hit min target.
                  </p>
                </div>

                {/* JEE Main Card */}
                <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 hover:border-cyan-500/20 transition duration-300">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase">JEE Main Target</span>
                    <span className="text-xs text-white/50">{Math.round((jmCount / 500) * 100)}% Complete</span>
                  </div>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-4xl font-black text-white">{jmCount}</span>
                    <span className="text-white/40">/ 500</span>
                  </div>
                  <div className="mt-4 h-2 w-full rounded-full bg-white/5 overflow-hidden">
                    <div 
                      className="h-full bg-cyan-500 transition-all duration-1000"
                      style={{ width: `${Math.min((jmCount / 500) * 100, 100)}%` }}
                    />
                  </div>
                  <p className="mt-4 text-xs text-white/50 leading-relaxed">
                    Need **+{targets["JEE Main"] - currentCounts["JEE Main"]}** verified PYQs to hit min target.
                  </p>
                </div>

                {/* JEE Advanced Card */}
                <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 hover:border-violet-500/20 transition duration-300">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold tracking-widest text-violet-400 uppercase">JEE Advanced Target</span>
                    <span className="text-xs text-white/50">{Math.round((jaCount / 300) * 100)}% Complete</span>
                  </div>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-4xl font-black text-white">{jaCount}</span>
                    <span className="text-white/40">/ 300</span>
                  </div>
                  <div className="mt-4 h-2 w-full rounded-full bg-white/5 overflow-hidden">
                    <div 
                      className="h-full bg-violet-500 transition-all duration-1000"
                      style={{ width: `${Math.min((jaCount / 300) * 100, 100)}%` }}
                    />
                  </div>
                  <p className="mt-4 text-xs text-white/50 leading-relaxed">
                    Need **+{targets["JEE Advanced"] - currentCounts["JEE Advanced"]}** verified PYQs to hit min target.
                  </p>
                </div>

              </div>

              {/* Total Compliance Banner */}
              <div className="rounded-3xl border border-white/5 bg-gradient-to-r from-violet-500/10 via-cyan-500/5 to-transparent p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Flame className="h-5 w-5 text-amber-400" />
                    Overall Database Coverage
                  </h3>
                  <p className="mt-2 text-sm text-white/60">
                    Total questions: **{ALL_PYQ_QUESTIONS.length}** / 1,300 targets. Needs **+1,200** total verified questions.
                  </p>
                </div>
                <div className="text-left md:text-right">
                  <div className="text-3xl font-black text-white">{ALL_PYQ_QUESTIONS.length}</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 mt-1">Verified Chemistry PYQs</div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: Gap Analysis */}
          {activeTab === "gaps" && (
            <div className="space-y-6 animate-fadeIn">
              
              {/* Gap Summary Badges */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-red-500/10 bg-red-500/5 p-5 flex items-start gap-4">
                  <AlertCircle className="h-6 w-6 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white">Critical Gaps ({zeroChapters.length} Chapters)</h4>
                    <p className="mt-1 text-xs text-white/60">Chapters containing exactly zero questions in the current database.</p>
                  </div>
                </div>
                <div className="rounded-2xl border border-amber-500/10 bg-amber-500/5 p-5 flex items-start gap-4">
                  <AlertTriangle className="h-6 w-6 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white">Weak Coverage ({lowChapters.length} Chapters)</h4>
                    <p className="mt-1 text-xs text-white/60">Chapters with less than 20 questions in the current database.</p>
                  </div>
                </div>
              </div>

              {/* Sub-Filters */}
              <div className="flex gap-2 border-b border-white/10 pb-4">
                {(["all", "physical", "inorganic", "organic"] as const).map((sub) => (
                  <button
                    key={sub}
                    onClick={() => setSelectedSub(sub)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition ${
                      selectedSub === sub
                        ? "bg-white/10 text-white"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {sub}
                  </button>
                ))}
              </div>

              {/* Chapter-wise detailed breakdown list */}
              <div className="grid gap-3 max-h-[450px] overflow-y-auto pr-2 custom-scrollbar">
                {allChaptersData
                  .filter((c) => {
                    if (selectedSub === "all") return true;
                    return getSyllabusCategory(c.name).toLowerCase() === selectedSub;
                  })
                  .map((chap) => {
                    const category = getSyllabusCategory(chap.name);
                    const isZero = chap.total === 0;
                    const isLow = chap.total > 0 && chap.total < 20;

                    return (
                      <div 
                        key={chap.name}
                        className={`rounded-2xl border p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition bg-white/[0.01] ${
                          isZero 
                            ? "border-red-500/20 hover:bg-red-500/[0.02]" 
                            : isLow 
                            ? "border-amber-500/20 hover:bg-amber-500/[0.02]" 
                            : "border-white/10 hover:bg-white/[0.03]"
                        }`}
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                              category === "Physical" ? "bg-cyan-500/10 text-cyan-400" :
                              category === "Inorganic" ? "bg-amber-500/10 text-amber-400" :
                              "bg-violet-500/10 text-violet-400"
                            }`}>
                              {category}
                            </span>
                            <h4 className="font-bold text-white text-sm sm:text-base">{chap.name}</h4>
                          </div>
                          
                          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/50">
                            <span>NEET: **{chap.neet}**</span>
                            <span>JEE Main: **{chap.jm}**</span>
                            <span>JEE Advanced: **{chap.ja}**</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 justify-between sm:justify-end">
                          {isZero ? (
                            <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full bg-red-500/15 text-red-400 border border-red-500/20">
                              Zero Questions
                            </span>
                          ) : isLow ? (
                            <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/20">
                              {chap.total} / 20 Questions
                            </span>
                          ) : (
                            <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
                              Covered ({chap.total})
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
              </div>

            </div>
          )}

          {/* TAB 3: Roadmap */}
          {activeTab === "roadmap" && (
            <div className="space-y-8 animate-fadeIn">
              
              <div className="relative border-l-2 border-cyan-400/20 ml-4 space-y-8 py-2">
                
                {/* Phase A */}
                <div className="relative pl-8">
                  <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-cyan-400 border-4 border-[#0B0F19]" />
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Phase A</span>
                    <span className="text-xs bg-cyan-400/10 text-cyan-300 px-2 py-0.5 rounded">High Priority</span>
                  </div>
                  <h4 className="mt-2 text-lg font-bold text-white">Top 100 Highest-Priority PYQs</h4>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">
                    Focus on **NEET (60)** and **JEE Main (40)** high-yield chapters (e.g. Hydrocarbons, p-Block, d/f Block, Electrochemistry).
                  </p>
                </div>

                {/* Phase B */}
                <div className="relative pl-8">
                  <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-violet-400 border-4 border-[#0B0F19]" />
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-violet-400 uppercase tracking-widest">Phase B</span>
                    <span className="text-xs bg-violet-400/10 text-violet-300 px-2 py-0.5 rounded">Gap Elimination</span>
                  </div>
                  <h4 className="mt-2 text-lg font-bold text-white">Next 200 PYQs</h4>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">
                    Target zero-question chapters (Solid State, States of Matter, Metallurgy, Hydrogen) and introduce core JEE Advanced questions.
                  </p>
                </div>

                {/* Phase C */}
                <div className="relative pl-8">
                  <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-emerald-400 border-4 border-[#0B0F19]" />
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Phase C</span>
                    <span className="text-xs bg-emerald-400/10 text-emerald-300 px-2 py-0.5 rounded">Bulk Expansion</span>
                  </div>
                  <h4 className="mt-2 text-lg font-bold text-white">Next 500 PYQs</h4>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">
                    Complete year-wise coverage for years 2020–2024 across all three exams to build comprehensive breadth.
                  </p>
                </div>

                {/* Phase D */}
                <div className="relative pl-8">
                  <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-amber-400 border-4 border-[#0B0F19]" />
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Phase D</span>
                    <span className="text-xs bg-amber-400/10 text-amber-300 px-2 py-0.5 rounded">Deep History</span>
                  </div>
                  <h4 className="mt-2 text-lg font-bold text-white">Remaining 400 PYQs</h4>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">
                    Fill the final historical gaps down to 2015 to satisfy the strict target counts: **500 NEET**, **500 JEE Main**, and **300 JEE Advanced**.
                  </p>
                </div>

              </div>

              {/* Quality Banner */}
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-white text-sm">Strict Quality Compliance</h5>
                  <p className="mt-1 text-xs text-white/50 leading-relaxed">
                    All additions must map 11 dimensions (Formula, Reagent, NCERT Line, Year, Exam Tag) with zero AI-generated placeholders or guessed years.
                  </p>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
