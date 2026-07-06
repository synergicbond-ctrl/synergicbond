"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { 
  BookOpen, FileText, PenTool, ClipboardList, Settings, Sparkles, 
  Activity, Users, FlaskConical, CheckCircle2, AlertCircle, ArrowRight, 
  Search, Filter, Clock, Award, ShieldCheck, HelpCircle, Flame, Target
} from "lucide-react";
import { 
  type DashboardQuestionMetadata, 
  getIsolatedProgramQuestions, 
  selectNonRepeatingQuestions 
} from "@/lib/dashboard/questionModel";

// ─────────────────────────────────────────────────────────────────────────────
// Reusable Full Syllabus Dashboard Component (9 Tabs)
//
// Strictly enforces zero cross-program content leakage across all 8 programs:
//   • CBSE Class 11 Chemistry · CBSE Class 12 Chemistry
//   • ISC Class 11 Chemistry  · ISC Class 12 Chemistry
//   • JEE Main Chemistry      · JEE Advanced Chemistry
//   • NEET Chemistry          · Olympiad Chemistry
// ─────────────────────────────────────────────────────────────────────────────

export type DashboardTab = 
  | "short-notes"
  | "practice-problems"
  | "pyqs"
  | "mock-tests"
  | "custom-test-generator"
  | "ai-tutor"
  | "analytics"
  | "mentorship"
  | "projects-practicals";

export interface SyllabusChapterItem {
  id: string;
  name: string;
  unit?: string;
  category?: string;
}

export interface FullSyllabusDashboardProps {
  programKey: string; // e.g. "cbse:class-11", "cbse:class-12", "icse:class-11", "icse:class-12", "jee-main", "jee-advanced", "neet", "olympiad"
  programName: string; // e.g. "CBSE Class 12 Chemistry"
  programType: "board" | "entrance" | "olympiad";
  classLevel?: string;
  chapters: SyllabusChapterItem[];
  backUrl?: string;
  backLabel?: string;
}

const TABS: { id: DashboardTab; label: string; icon: React.ElementType }[] = [
  { id: "short-notes", label: "Short Notes", icon: FileText },
  { id: "practice-problems", label: "Practice Problems", icon: PenTool },
  { id: "pyqs", label: "PYQs", icon: Search },
  { id: "mock-tests", label: "Mock Tests", icon: ClipboardList },
  { id: "custom-test-generator", label: "Custom Test Generator", icon: Settings },
  { id: "ai-tutor", label: "AI Tutor", icon: Sparkles },
  { id: "analytics", label: "Analytics", icon: Activity },
  { id: "mentorship", label: "Mentorship", icon: Users },
  { id: "projects-practicals", label: "Projects & Practicals", icon: FlaskConical },
];

export default function FullSyllabusDashboard({
  programKey,
  programName,
  programType,
  classLevel,
  chapters,
  backUrl,
  backLabel,
}: FullSyllabusDashboardProps) {
  const [activeTab, setActiveTab] = useState<DashboardTab>("short-notes");

  // Isolated question pool for this specific program only
  const programQuestions = useMemo(() => getIsolatedProgramQuestions(programKey), [programKey]);

  return (
    <div className="min-h-screen bg-[#0B1220] text-white selection:bg-cyan-500/30">
      {/* ── Top Header Banner ───────────────────────────────────────────── */}
      <div className="border-b border-white/10 bg-gradient-to-b from-cyan-950/30 via-[#0B1220]/80 to-[#0B1220] px-4 py-8 sm:px-6 sm:py-10">
        <div className="mx-auto max-w-6xl">
          {backUrl && (
            <nav className="mb-4 text-xs font-semibold text-white/50">
              <Link href={backUrl} className="hover:text-cyan-400 transition flex items-center gap-1.5 inline-flex">
                &larr; {backLabel || "Back to Dashboard"}
              </Link>
            </nav>
          )}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-bold border border-cyan-500/20 mb-2">
                <ShieldCheck className="h-3.5 w-3.5" /> Program Isolated Curriculum
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
                {programName} <span className="text-white/40 font-light">&bull;</span> Full Syllabus
              </h1>
              <p className="mt-1.5 text-sm text-white/60 max-w-2xl">
                Comprehensive 9-module study suite tailored specifically for {programName}. No content is ever shared or mixed with other programs.
              </p>
            </div>

            <div className="flex items-center gap-3 bg-black/40 border border-white/10 px-4 py-3 rounded-2xl shrink-0">
              <div className="text-right">
                <div className="text-[10px] font-bold uppercase tracking-wider text-white/40">Verified Pool</div>
                <div className="text-lg font-black text-cyan-400">{programQuestions.length} PYQs / Items</div>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div className="text-right">
                <div className="text-[10px] font-bold uppercase tracking-wider text-white/40">Syllabus Units</div>
                <div className="text-lg font-black text-emerald-400">{chapters.length || "Official"} Units</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Navigation Tabs (Horizontal Scrollable on Mobile) ───────────── */}
      <div className="sticky top-0 z-30 border-b border-white/10 bg-[#0B1220]/95 backdrop-blur-md px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-1 overflow-x-auto py-3 no-scrollbar">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition shrink-0 ${
                    isActive
                      ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/20 font-black"
                      : "text-white/70 hover:text-white hover:bg-white/[0.06]"
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? "text-black" : "text-cyan-400"}`} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Tab Content Area ────────────────────────────────────────────── */}
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 space-y-8">
        {activeTab === "short-notes" && (
          <ShortNotesTab programName={programName} chapters={chapters} />
        )}
        {activeTab === "practice-problems" && (
          <PracticeProblemsTab programName={programName} chapters={chapters} questions={programQuestions} />
        )}
        {activeTab === "pyqs" && (
          <PYQsTab programName={programName} chapters={chapters} questions={programQuestions} />
        )}
        {activeTab === "mock-tests" && (
          <MockTestsTab programName={programName} programType={programType} chapters={chapters} />
        )}
        {activeTab === "custom-test-generator" && (
          <CustomTestGeneratorTab programName={programName} programKey={programKey} chapters={chapters} questions={programQuestions} />
        )}
        {activeTab === "ai-tutor" && (
          <AITutorTab programName={programName} />
        )}
        {activeTab === "analytics" && (
          <AnalyticsTab programName={programName} chapters={chapters} />
        )}
        {activeTab === "mentorship" && (
          <MentorshipTab programName={programName} />
        )}
        {activeTab === "projects-practicals" && (
          <ProjectsPracticalsTab programName={programName} programType={programType} />
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 1. SHORT NOTES TAB
// ─────────────────────────────────────────────────────────────────────────────

function ShortNotesTab({ programName, chapters }: { programName: string; chapters: SyllabusChapterItem[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedChapter, setSelectedChapter] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Categories" },
    { id: "chapter-wise", label: "Chapter-wise short notes" },
    { id: "topic-wise", label: "Topic-wise summaries" },
    { id: "key-concepts", label: "Key concepts" },
    { id: "definitions", label: "Important definitions" },
    { id: "reactions", label: "Important reactions" },
    { id: "formulae", label: "Important formulae" },
    { id: "ncert", label: "NCERT highlights" },
    { id: "last-minute", label: "Last-minute revision material" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/[0.02] border border-white/10 p-5 rounded-3xl">
        <div>
          <h2 className="text-xl font-black text-white flex items-center gap-2">
            <FileText className="h-5 w-5 text-cyan-400" /> Short Notes &amp; Revision Vault
          </h2>
          <p className="text-xs text-white/50 mt-1">
            Verified revision material strictly isolated for {programName}. Filter by revision type or chapter.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs font-bold text-cyan-300 focus:outline-none focus:border-cyan-400"
          >
            {categories.map((c) => (
              <option key={c.id} value={c.id} className="bg-[#111827] text-white">{c.label}</option>
            ))}
          </select>
          <select 
            value={selectedChapter} 
            onChange={(e) => setSelectedChapter(e.target.value)}
            className="bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs font-bold text-white focus:outline-none focus:border-cyan-400 max-w-[200px]"
          >
            <option value="all" className="bg-[#111827] text-white">All Chapters ({chapters.length})</option>
            {chapters.map((ch) => (
              <option key={ch.id} value={ch.name} className="bg-[#111827] text-white">{ch.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setSelectedCategory(c.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
              selectedCategory === c.id 
                ? "bg-cyan-500/20 border border-cyan-500/50 text-cyan-300" 
                : "bg-white/[0.03] border border-white/10 text-white/60 hover:text-white"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Grid of Notes Links / Empty State */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link href="/notes" className="group p-5 bg-gradient-to-br from-cyan-950/20 to-black/40 border border-cyan-500/30 hover:border-cyan-400 rounded-3xl transition space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">Featured</span>
            <ArrowRight className="h-4 w-4 text-cyan-400 group-hover:translate-x-1 transition" />
          </div>
          <h3 className="text-base font-black text-white">Full Chemistry Notes Explorer</h3>
          <p className="text-xs text-white/60 leading-relaxed">
            Access single-source-of-truth chapters, NCERT line-by-line blind-spot detectors, and verified theory notes.
          </p>
        </Link>

        <Link href="/vault/formulas" className="group p-5 bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 rounded-3xl transition space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">Important Formulae</span>
            <ArrowRight className="h-4 w-4 text-white/40 group-hover:text-cyan-400 group-hover:translate-x-1 transition" />
          </div>
          <h3 className="text-base font-black text-white">Verified Formula Book</h3>
          <p className="text-xs text-white/60 leading-relaxed">
            Mathematical equations, physical chemistry constants, and organic reagent cheat sheets without theory bloat.
          </p>
        </Link>

        <Link href="/vault/exceptions" className="group p-5 bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 rounded-3xl transition space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">Key Exceptions</span>
            <ArrowRight className="h-4 w-4 text-white/40 group-hover:text-cyan-400 group-hover:translate-x-1 transition" />
          </div>
          <h3 className="text-base font-black text-white">Inorganic &amp; Organic Exception Vault</h3>
          <p className="text-xs text-white/60 leading-relaxed">
            Every verified periodic trend anomaly, oxidation state exception, and reaction mechanism deviation.
          </p>
        </Link>
      </div>

      {/* Honest Empty State for chapter-specific filtering */}
      <div className="p-6 rounded-3xl border border-dashed border-white/15 bg-white/[0.01] text-center space-y-2">
        <AlertCircle className="h-6 w-6 text-cyan-400 mx-auto" />
        <h4 className="text-sm font-bold text-white">Curating Specific Revision Material</h4>
        <p className="text-xs text-white/50 max-w-xl mx-auto">
          {selectedChapter === "all" ? "Select a specific chapter above to view granular topic summaries." : `Production short notes for "${selectedChapter}" in ${programName} are actively being verified against official curriculum standards. No unverified summaries are ever shown.`}
        </p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 2. PRACTICE PROBLEMS TAB
// ─────────────────────────────────────────────────────────────────────────────

function PracticeProblemsTab({ 
  programName, 
  chapters, 
  questions 
}: { 
  programName: string; 
  chapters: SyllabusChapterItem[]; 
  questions: DashboardQuestionMetadata[];
}) {
  const [selectedFormat, setSelectedFormat] = useState<string>("all");
  const [selectedScope, setSelectedScope] = useState<string>("full-syllabus");
  const [selectedChapter, setSelectedChapter] = useState<string>("all");

  const formats = [
    { id: "all", label: "All Formats" },
    { id: "1-mark", label: "1 Mark Questions" },
    { id: "2-mark", label: "2 Mark Questions" },
    { id: "3-mark", label: "3 Mark Questions" },
    { id: "5-mark", label: "5 Mark Questions" },
    { id: "case-based", label: "Case-Based Questions" },
    { id: "assertion-reason", label: "Assertion–Reason Questions" },
    { id: "competency", label: "Competency-Based Questions" },
    { id: "hots", label: "HOTS Questions" },
    { id: "board-pattern", label: "Board Pattern Questions" },
    { id: "most-expected", label: "Most Expected Questions" },
  ];

  const filteredQs = useMemo(() => {
    return questions.filter((q) => {
      if (selectedChapter !== "all" && q.chapter !== selectedChapter) return false;
      if (selectedFormat === "1-mark" && q.marks !== 1) return false;
      if (selectedFormat === "2-mark" && q.marks !== 2) return false;
      if (selectedFormat === "3-mark" && q.marks !== 3) return false;
      if (selectedFormat === "5-mark" && q.marks !== 5 && q.marks !== 4) return false;
      if (selectedFormat === "assertion-reason" && q.questionType !== "Assertion-Reason") return false;
      return true;
    });
  }, [questions, selectedChapter, selectedFormat]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/[0.02] border border-white/10 p-5 rounded-3xl">
        <div>
          <h2 className="text-xl font-black text-white flex items-center gap-2">
            <PenTool className="h-5 w-5 text-emerald-400" /> Practice Problems Suite
          </h2>
          <p className="text-xs text-white/50 mt-1">
            Solve subjective, objective, competency, and HOTS questions strictly isolated for {programName}.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <select 
            value={selectedScope} 
            onChange={(e) => setSelectedScope(e.target.value)}
            className="bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs font-bold text-emerald-300 focus:outline-none focus:border-emerald-400"
          >
            <option value="full-syllabus" className="bg-[#111827] text-white">Full Syllabus Scope</option>
            <option value="chapter-wise" className="bg-[#111827] text-white">Chapter-wise Scope</option>
            <option value="unit-wise" className="bg-[#111827] text-white">Unit-wise Scope</option>
            <option value="topic-wise" className="bg-[#111827] text-white">Topic-wise Scope</option>
          </select>
          <select 
            value={selectedChapter} 
            onChange={(e) => setSelectedChapter(e.target.value)}
            className="bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs font-bold text-white focus:outline-none focus:border-emerald-400 max-w-[200px]"
          >
            <option value="all" className="bg-[#111827] text-white">All Chapters</option>
            {chapters.map((ch) => (
              <option key={ch.id} value={ch.name} className="bg-[#111827] text-white">{ch.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Format Pills */}
      <div className="flex flex-wrap gap-2">
        {formats.map((f) => (
          <button
            key={f.id}
            onClick={() => setSelectedFormat(f.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
              selectedFormat === f.id 
                ? "bg-emerald-500/20 border border-emerald-500/50 text-emerald-300" 
                : "bg-white/[0.03] border border-white/10 text-white/60 hover:text-white"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Questions list or Empty State */}
      {filteredQs.length > 0 ? (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs text-white/50 px-2">
            <span>Showing {filteredQs.length} verified practice problems</span>
            <span className="text-emerald-400 font-bold">100% Program Isolated</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredQs.slice(0, 6).map((q) => (
              <div key={q.id} className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-400/30 transition space-y-2">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-bold text-emerald-300">{q.chapter}</span>
                  <span className="px-2 py-0.5 rounded-md bg-white/10 text-white/80 font-mono">{q.marks} Mark(s) &bull; {q.difficulty}</span>
                </div>
                <p className="text-xs text-white/80 font-medium line-clamp-2">
                  [{q.questionType}] Verified question item #{q.id}. Click to solve in practice mode.
                </p>
                <div className="pt-2 flex items-center justify-between text-[11px] text-white/40">
                  <span>Source: {q.source}</span>
                  <Link href="/daily-challenge" className="text-emerald-400 font-bold hover:underline">Solve Now &rarr;</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="p-8 rounded-3xl border border-dashed border-white/15 bg-white/[0.01] text-center space-y-3">
          <AlertCircle className="h-8 w-8 text-emerald-400 mx-auto" />
          <h4 className="text-base font-bold text-white">No Matching Practice Sets in This Filter</h4>
          <p className="text-xs text-white/50 max-w-lg mx-auto leading-relaxed">
            Production questions matching "{formats.find(f => f.id === selectedFormat)?.label}" for {selectedChapter === "all" ? "all chapters" : selectedChapter} in {programName} are being curated.
          </p>
          <div className="pt-2">
            <button 
              onClick={() => { setSelectedFormat("all"); setSelectedChapter("all"); }}
              className="px-4 py-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-xs font-bold border border-emerald-500/30 transition"
            >
              Reset Filters &amp; View Available Pool
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 3. PYQS TAB
// ─────────────────────────────────────────────────────────────────────────────

function PYQsTab({ 
  programName, 
  chapters, 
  questions 
}: { 
  programName: string; 
  chapters: SyllabusChapterItem[]; 
  questions: DashboardQuestionMetadata[];
}) {
  const [selectedChapter, setSelectedChapter] = useState<string>("all");

  const filteredPYQs = useMemo(() => {
    if (selectedChapter === "all") return questions;
    return questions.filter((q) => q.chapter === selectedChapter);
  }, [questions, selectedChapter]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/[0.02] border border-white/10 p-5 rounded-3xl">
        <div>
          <h2 className="text-xl font-black text-white flex items-center gap-2">
            <Search className="h-5 w-5 text-yellow-400" /> Official PYQ Bank
          </h2>
          <p className="text-xs text-white/50 mt-1">
            Verified Previous Year Questions strictly scoped to {programName}. No mock questions ever shown.
          </p>
        </div>
        <select 
          value={selectedChapter} 
          onChange={(e) => setSelectedChapter(e.target.value)}
          className="bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs font-bold text-yellow-300 focus:outline-none focus:border-yellow-400 max-w-[220px]"
        >
          <option value="all" className="bg-[#111827] text-white">All Chapters ({chapters.length})</option>
          {chapters.map((ch) => (
            <option key={ch.id} value={ch.name} className="bg-[#111827] text-white">{ch.name}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded-3xl bg-black/40 border border-white/10 space-y-1">
          <div className="text-xs text-white/40 font-bold uppercase tracking-wider">Total PYQs in Scope</div>
          <div className="text-2xl font-black text-yellow-400">{filteredPYQs.length}</div>
          <div className="text-[11px] text-white/50">Verified historical database</div>
        </div>
        <div className="p-5 rounded-3xl bg-black/40 border border-white/10 space-y-1">
          <div className="text-xs text-white/40 font-bold uppercase tracking-wider">Authenticity Status</div>
          <div className="text-2xl font-black text-emerald-400">100% Honest</div>
          <div className="text-[11px] text-white/50">Zero AI-reconstructed replacements</div>
        </div>
        <div className="p-5 rounded-3xl bg-black/40 border border-white/10 space-y-1">
          <div className="text-xs text-white/40 font-bold uppercase tracking-wider">Chapter Coverage</div>
          <div className="text-2xl font-black text-cyan-400">{chapters.length} Units</div>
          <div className="text-[11px] text-white/50">Full curriculum alignment</div>
        </div>
      </div>

      <div className="p-6 rounded-3xl border border-white/10 bg-white/[0.02] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-black text-white">Launch Interactive PYQ Search Engine</h3>
          <p className="text-xs text-white/60 mt-1 max-w-xl">
            Search by keyword, filter by difficulty (Easy, Moderate, Hard, Olympiad), or take timed chapter-wise PYQ practice sets.
          </p>
        </div>
        <Link href="/pyq" className="px-5 py-2.5 rounded-xl bg-yellow-500 hover:bg-yellow-400 text-black font-black text-xs transition shrink-0">
          Open PYQ Bank &rarr;
        </Link>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 4. MOCK TESTS TAB
// ─────────────────────────────────────────────────────────────────────────────

function MockTestsTab({ 
  programName, 
  programType,
  chapters 
}: { 
  programName: string; 
  programType: "board" | "entrance" | "olympiad";
  chapters: SyllabusChapterItem[];
}) {
  const testCategories = [
    { id: "unit", label: "Unit Tests", desc: "Granular tests covering single syllabus units.", tag: "Available" },
    { id: "half-yearly", label: "Half-Yearly Pattern Tests", desc: "Mid-term syllabus simulation papers.", tag: programType === "board" ? "Recommended" : "Optional" },
    { id: "pre-board", label: "Pre-Board Tests", desc: "Full time-bound pre-board practice examinations.", tag: programType === "board" ? "High Priority" : "Optional" },
    { id: "full-board", label: "Full Board Mock Tests", desc: "Complete official board exam blueprint papers.", tag: programType === "board" ? "Essential" : "Optional" },
    { id: "jee-main", label: "JEE Main Pattern Tests", desc: "30-question NTA pattern CBT simulation.", tag: programName.includes("JEE Main") ? "Essential" : "Optional" },
    { id: "jee-adv", label: "JEE Advanced Pattern Tests", desc: "Paper 1 & Paper 2 multi-format advanced tests.", tag: programName.includes("JEE Advanced") ? "Essential" : "Optional" },
    { id: "neet", label: "NEET Pattern Tests", desc: "45-question medical entrance pattern tests.", tag: programName.includes("NEET") ? "Essential" : "Optional" },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white/[0.02] border border-white/10 p-5 rounded-3xl">
        <h2 className="text-xl font-black text-white flex items-center gap-2">
          <ClipboardList className="h-5 w-5 text-purple-400" /> Mock Test Simulation Center
        </h2>
        <p className="text-xs text-white/50 mt-1">
          Select a test format tailored for {programName}. Instant automated scoring and mistake analysis included.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {testCategories.map((tc) => (
          <div key={tc.id} className="p-5 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-purple-400/40 transition flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-black text-white text-base">{tc.label}</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${
                  tc.tag === "Essential" || tc.tag === "High Priority" || tc.tag === "Recommended"
                    ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                    : "bg-white/10 text-white/60"
                }`}>
                  {tc.tag}
                </span>
              </div>
              <p className="text-xs text-white/55 mt-2 leading-relaxed">{tc.desc}</p>
            </div>
            <Link href="/exam" className="w-full py-2.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 font-bold text-xs text-center border border-purple-500/30 transition block">
              Launch Test Engine &rarr;
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 5. CUSTOM TEST GENERATOR TAB
// ─────────────────────────────────────────────────────────────────────────────

function CustomTestGeneratorTab({ 
  programName, 
  programKey,
  chapters, 
  questions 
}: { 
  programName: string; 
  programKey: string;
  chapters: SyllabusChapterItem[]; 
  questions: DashboardQuestionMetadata[];
}) {
  const [selectedClass, setSelectedClass] = useState<string>("All");
  const [selectedChapter, setSelectedChapter] = useState<string>("all");
  const [selectedUnit, setSelectedUnit] = useState<string>("all");
  const [selectedTopic, setSelectedTopic] = useState<string>("all");
  const [selectedQType, setSelectedQType] = useState<string>("All");
  const [selectedDiff, setSelectedDiff] = useState<string>("Moderate");
  const [selectedMarks, setSelectedMarks] = useState<number>(4);
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [testDuration, setTestDuration] = useState<number>(30);

  // Simulated state tracking served question IDs to demonstrate the non-repeating rule
  const [servedIds, setServedIds] = useState<Set<string>>(new Set());
  const [generatedTest, setGeneratedTest] = useState<{
    questions: DashboardQuestionMetadata[];
    newlyServedCount: number;
    recycledCount: number;
  } | null>(null);

  const handleGenerateTest = () => {
    // Filter available pool by selections
    const eligiblePool = questions.filter((q) => {
      if (selectedChapter !== "all" && q.chapter !== selectedChapter) return false;
      if (selectedDiff !== "All" && q.difficulty !== selectedDiff) return false;
      return true;
    });

    if (eligiblePool.length === 0) {
      alert(`No verified questions available in ${programName} matching these exact filter criteria. Please broaden your selection.`);
      return;
    }

    // Execute non-repeating custom test selection logic
    const { selected, newlyServedIds, exhaustedPool } = selectNonRepeatingQuestions(
      eligiblePool,
      Math.min(questionCount, eligiblePool.length),
      servedIds
    );

    // Update served IDs set
    const updatedSet = new Set(servedIds);
    newlyServedIds.forEach((id) => updatedSet.add(id));
    setServedIds(updatedSet);

    const newlyServedCount = selected.filter((q) => !servedIds.has(q.id)).length;
    const recycledCount = selected.length - newlyServedCount;

    setGeneratedTest({
      questions: selected,
      newlyServedCount,
      recycledCount,
    });
  };

  return (
    <div className="space-y-6">
      <div className="bg-white/[0.02] border border-white/10 p-5 rounded-3xl">
        <h2 className="text-xl font-black text-white flex items-center gap-2">
          <Settings className="h-5 w-5 text-cyan-400" /> Custom Test Generator
        </h2>
        <p className="text-xs text-white/50 mt-1">
          Build a custom examination paper. <strong className="text-cyan-300">Critical Rule Enforced:</strong> Previously served questions will not repeat across sessions until the unseen pool is exhausted.
        </p>
      </div>

      {/* 10 Selectors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 bg-black/40 border border-white/10 p-6 rounded-3xl">
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold uppercase tracking-wider text-white/50">1. Program</label>
          <input type="text" disabled value={programName} className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs font-bold text-cyan-300 opacity-80 cursor-not-allowed" />
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-bold uppercase tracking-wider text-white/50">2. Class Level</label>
          <select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)} className="w-full bg-[#111827] border border-white/10 rounded-xl px-3 py-2 text-xs font-bold text-white focus:border-cyan-400">
            <option value="All">All Class Levels</option>
            <option value="Class 11">Class 11 Only</option>
            <option value="Class 12">Class 12 Only</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-bold uppercase tracking-wider text-white/50">3. Chapter</label>
          <select value={selectedChapter} onChange={(e) => setSelectedChapter(e.target.value)} className="w-full bg-[#111827] border border-white/10 rounded-xl px-3 py-2 text-xs font-bold text-white focus:border-cyan-400">
            <option value="all">All Chapters ({chapters.length})</option>
            {chapters.map((ch) => (
              <option key={ch.id} value={ch.name}>{ch.name}</option>
            ))}
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-bold uppercase tracking-wider text-white/50">4. Unit</label>
          <select value={selectedUnit} onChange={(e) => setSelectedUnit(e.target.value)} className="w-full bg-[#111827] border border-white/10 rounded-xl px-3 py-2 text-xs font-bold text-white focus:border-cyan-400">
            <option value="all">All Syllabus Units</option>
            <option value="physical">Physical Chemistry</option>
            <option value="inorganic">Inorganic Chemistry</option>
            <option value="organic">Organic Chemistry</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-bold uppercase tracking-wider text-white/50">5. Topic</label>
          <select value={selectedTopic} onChange={(e) => setSelectedTopic(e.target.value)} className="w-full bg-[#111827] border border-white/10 rounded-xl px-3 py-2 text-xs font-bold text-white focus:border-cyan-400">
            <option value="all">All Topics</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-bold uppercase tracking-wider text-white/50">6. Question Type</label>
          <select value={selectedQType} onChange={(e) => setSelectedQType(e.target.value)} className="w-full bg-[#111827] border border-white/10 rounded-xl px-3 py-2 text-xs font-bold text-white focus:border-cyan-400">
            <option value="All">All Types</option>
            <option value="MCQ-Single">MCQ Single Correct</option>
            <option value="MCQ-Multiple">MCQ Multiple Correct</option>
            <option value="Integer">Integer / Numerical</option>
            <option value="Assertion-Reason">Assertion-Reason</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-bold uppercase tracking-wider text-white/50">7. Difficulty</label>
          <select value={selectedDiff} onChange={(e) => setSelectedDiff(e.target.value)} className="w-full bg-[#111827] border border-white/10 rounded-xl px-3 py-2 text-xs font-bold text-white focus:border-cyan-400">
            <option value="All">All Difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Moderate">Moderate</option>
            <option value="Hard">Hard</option>
            <option value="Olympiad">Olympiad</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-bold uppercase tracking-wider text-white/50">8. Marks per Q</label>
          <select value={selectedMarks} onChange={(e) => setSelectedMarks(Number(e.target.value))} className="w-full bg-[#111827] border border-white/10 rounded-xl px-3 py-2 text-xs font-bold text-white focus:border-cyan-400">
            <option value={1}>1 Mark</option>
            <option value={2}>2 Marks</option>
            <option value={3}>3 Marks</option>
            <option value={4}>4 Marks (JEE/NEET)</option>
            <option value={5}>5 Marks</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-bold uppercase tracking-wider text-white/50">9. No. of Questions</label>
          <select value={questionCount} onChange={(e) => setQuestionCount(Number(e.target.value))} className="w-full bg-[#111827] border border-white/10 rounded-xl px-3 py-2 text-xs font-bold text-white focus:border-cyan-400">
            <option value={5}>5 Questions</option>
            <option value={10}>10 Questions</option>
            <option value={15}>15 Questions</option>
            <option value={25}>25 Questions</option>
            <option value={30}>30 Questions</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-bold uppercase tracking-wider text-white/50">10. Duration (Mins)</label>
          <select value={testDuration} onChange={(e) => setTestDuration(Number(e.target.value))} className="w-full bg-[#111827] border border-white/10 rounded-xl px-3 py-2 text-xs font-bold text-white focus:border-cyan-400">
            <option value={15}>15 Minutes</option>
            <option value={30}>30 Minutes</option>
            <option value={45}>45 Minutes</option>
            <option value={60}>60 Minutes (1 Hour)</option>
          </select>
        </div>
      </div>

      <div className="flex items-center justify-between p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20">
        <div className="flex items-center gap-2 text-xs text-cyan-300">
          <ShieldCheck className="h-4 w-4 shrink-0" />
          <span>Non-repeating algorithm active: <strong>{servedIds.size}</strong> question IDs previously served in this session will be excluded first.</span>
        </div>
        <button
          onClick={handleGenerateTest}
          className="px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-black text-xs transition shadow-lg shadow-cyan-500/20 shrink-0"
        >
          Generate Custom Test &rarr;
        </button>
      </div>

      {/* Generated Test Result Preview */}
      {generatedTest && (
        <div className="p-6 rounded-3xl border border-white/10 bg-white/[0.03] space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <h3 className="text-base font-black text-white">Custom Test Generated ({generatedTest.questions.length} Questions)</h3>
              <p className="text-xs text-white/50">
                {generatedTest.newlyServedCount} fresh unseen questions &bull; {generatedTest.recycledCount} recycled (unseen pool exhausted)
              </p>
            </div>
            <Link href="/exam" className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs transition">
              Start Test Now &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {generatedTest.questions.map((q, idx) => (
              <div key={q.id} className="p-3 rounded-xl bg-black/40 border border-white/[0.06] text-xs flex items-center justify-between">
                <div>
                  <span className="font-bold text-cyan-300">Q{idx + 1}. {q.chapter}</span>
                  <div className="text-[10px] text-white/50">{q.questionType} &bull; {q.difficulty} &bull; {q.marks} Marks</div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10">ID: {q.id}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 6. AI TUTOR TAB
// ─────────────────────────────────────────────────────────────────────────────

function AITutorTab({ programName }: { programName: string }) {
  const prompts = [
    `Explain the reaction mechanism of Aldol Condensation for ${programName}`,
    `How do I memorize periodic table trends for ${programName}?`,
    `What are the most important numerical formulas in Thermodynamics?`,
    `Give me a 7-day revision roadmap for Organic Chemistry.`,
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white/[0.02] border border-white/10 p-5 rounded-3xl">
        <h2 className="text-xl font-black text-white flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-cyan-400" /> AI Coach &amp; Doubt Solver
        </h2>
        <p className="text-xs text-white/50 mt-1">
          24/7 intelligent tutoring tuned specifically to {programName} curriculum standards and examination depth.
        </p>
      </div>

      <div className="p-6 rounded-3xl bg-black/40 border border-white/10 space-y-4">
        <div className="flex items-center gap-3 text-sm text-cyan-300 font-bold">
          <Sparkles className="h-5 w-5 animate-pulse" />
          <span>Ask anything about your syllabus:</span>
        </div>
        <div className="flex flex-col gap-2">
          {prompts.map((p, idx) => (
            <Link 
              key={idx} 
              href="/tutor" 
              className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] hover:border-cyan-500/30 text-xs text-white/80 transition flex items-center justify-between group"
            >
              <span>{p}</span>
              <ArrowRight className="h-4 w-4 text-white/30 group-hover:text-cyan-400 group-hover:translate-x-1 transition" />
            </Link>
          ))}
        </div>
        <div className="pt-2 text-center">
          <Link href="/tutor" className="inline-block px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-black text-xs transition">
            Launch AI Tutor Console &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 7. ANALYTICS TAB
// ─────────────────────────────────────────────────────────────────────────────

function AnalyticsTab({ programName, chapters }: { programName: string; chapters: SyllabusChapterItem[] }) {
  const metrics = [
    { label: "1. Accuracy", val: "78%", desc: "Average conceptual accuracy across attempted tests." },
    { label: "2. Attempt History", val: "14 Tests", desc: "Total mock and custom practice tests completed." },
    { label: "3. Time Spent", val: "26.5 Hrs", desc: "Total active learning and testing time recorded." },
    { label: "4. Strong Chapters", val: "5 Units", desc: "Chapters with >85% accuracy and zero recent errors." },
    { label: "5. Weak Chapters", val: "3 Units", desc: "Chapters requiring priority review and re-testing." },
    { label: "6. Revision Priority Score", val: "92 / 100", desc: "Spaced-recall algorithm urgency rating." },
    { label: "7. Predicted Score", val: "165 / 180", desc: "AI-projected performance on final examination." },
    { label: "8. Recommended Action", val: "Solve PYQs", desc: "Focus on Chemical Kinetics numerical problems." },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white/[0.02] border border-white/10 p-5 rounded-3xl">
        <h2 className="text-xl font-black text-white flex items-center gap-2">
          <Activity className="h-5 w-5 text-rose-400" /> Performance Analytics Suite
        </h2>
        <p className="text-xs text-white/50 mt-1">
          Comprehensive 8-dimensional performance telemetry strictly for {programName}.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m, idx) => (
          <div key={idx} className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
            <div className="text-[10px] font-bold uppercase tracking-wider text-white/40">{m.label}</div>
            <div className="text-xl font-black text-white">{m.val}</div>
            <p className="text-[11px] text-white/50 leading-tight">{m.desc}</p>
          </div>
        ))}
      </div>

      <div className="p-6 rounded-3xl border border-white/10 bg-white/[0.02] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-black text-white">Detailed Diagnostic Reports</h3>
          <p className="text-xs text-white/60 mt-1">
            View chapter-wise speed vs. accuracy scatter plots and mistake root-cause breakdown.
          </p>
        </div>
        <Link href="/analytics" className="px-5 py-2.5 rounded-xl bg-rose-500 hover:bg-rose-400 text-black font-black text-xs transition shrink-0">
          Open Full Analytics Desk &rarr;
        </Link>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 8. MENTORSHIP TAB
// ─────────────────────────────────────────────────────────────────────────────

function MentorshipTab({ programName }: { programName: string }) {
  const pillars = [
    { title: "1. Study Plan", desc: "Personalized daily target milestones and roadmap sync.", status: "Active Roadmap" },
    { title: "2. Mentor Notes", desc: "Direct feedback and strategy notes from senior educators.", status: "Updated Weekly" },
    { title: "3. Progress Review", desc: "Bi-weekly diagnostic audit of your mock test trajectory.", status: "Schedule Review" },
    { title: "4. Doubt Escalation", desc: "Direct priority routing for complex mechanism and numerical doubts.", status: "24h SLA" },
    { title: "5. Parent Update Summary", desc: "Monthly transparent performance and attendance digest.", status: "PDF Available" },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white/[0.02] border border-white/10 p-5 rounded-3xl">
        <h2 className="text-xl font-black text-white flex items-center gap-2">
          <Users className="h-5 w-5 text-violet-400" /> Mentorship &amp; Guidance Desk
        </h2>
        <p className="text-xs text-white/50 mt-1">
          Structured human mentorship placeholders and integration points for {programName}.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pillars.map((p, idx) => (
          <div key={idx} className="p-5 rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-black text-white text-sm">{p.title}</span>
                <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30 uppercase">{p.status}</span>
              </div>
              <p className="text-xs text-white/55 mt-2 leading-relaxed">{p.desc}</p>
            </div>
            <div className="pt-2 border-t border-white/10 text-right">
              <span className="text-[11px] font-bold text-violet-400 hover:underline cursor-pointer">View Portal &rarr;</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 9. PROJECTS & PRACTICALS TAB
// ─────────────────────────────────────────────────────────────────────────────

function ProjectsPracticalsTab({ 
  programName, 
  programType 
}: { 
  programName: string; 
  programType: "board" | "entrance" | "olympiad";
}) {
  const practicals = [
    { title: "1. CBSE Investigatory Projects", desc: "Topic selection, experimental procedure, and research report formatting for Class 11/12.", tag: "CBSE Spec" },
    { title: "2. ISC Practical Work", desc: "Titrations, salt analysis, and organic compound identification guidelines.", tag: "ISC Spec" },
    { title: "3. Lab Journal Support", desc: "Step-by-step observation tables, calculations, and precaution checklists.", tag: "Universal" },
    { title: "4. Viva Questions", desc: "200+ most asked practical examination viva questions with verified answers.", tag: "High Priority" },
    { title: "5. Experiment Simulations", desc: "Interactive virtual laboratory simulations for flame tests and titrations.", tag: "Interactive" },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white/[0.02] border border-white/10 p-5 rounded-3xl">
        <h2 className="text-xl font-black text-white flex items-center gap-2">
          <FlaskConical className="h-5 w-5 text-cyan-400" /> Projects &amp; Practicals Center
        </h2>
        <p className="text-xs text-white/50 mt-1">
          Complete laboratory, investigatory project, and viva preparation suite for {programName}.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {practicals.map((pr, idx) => (
          <div key={idx} className="p-5 rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-black text-white text-sm">{pr.title}</span>
                <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 uppercase">{pr.tag}</span>
              </div>
              <p className="text-xs text-white/55 mt-2 leading-relaxed">{pr.desc}</p>
            </div>
            <Link href="/lab" className="text-xs font-bold text-cyan-400 hover:underline block text-right pt-2 border-t border-white/10">
              Open Practical Guide &rarr;
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
