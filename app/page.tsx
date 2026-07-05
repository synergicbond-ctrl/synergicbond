import Link from "next/link";
import { 
  Sparkles, BookOpen, FileText, Brain, Search, Award, PenTool, 
  HelpCircle, Activity, Users, Target, Compass, Cpu, Clock, 
  ArrowRight, Atom, Quote, GraduationCap, CheckCircle2, ShieldCheck,
  Flame, Table2, FlaskConical, GitBranch, ListOrdered, Palette
} from "lucide-react";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070A13] text-white selection:bg-cyan-500/30 font-sans overflow-x-hidden">

      {/* ── 1. HERO SECTION ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-white/[0.05] bg-gradient-to-b from-[#0e1629] via-[#070A13] to-[#070A13] pt-24 pb-28 px-4 sm:px-6">
        {/* Deep background glow orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -left-10 top-10 h-[450px] w-[450px] rounded-full bg-cyan-500/[0.06] blur-[120px] animate-pulse" />
          <div className="absolute -right-10 top-20 h-[450px] w-[450px] rounded-full bg-violet-600/[0.06] blur-[120px]" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-blue-500/[0.04] blur-[150px]" />
        </div>
        
        <div className="relative mx-auto max-w-5xl text-center space-y-10">
          {/* AI Platform Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-5 py-2 text-[10px] font-extrabold tracking-[0.25em] text-cyan-300 uppercase shadow-[0_0_15px_rgba(6,182,212,0.15)] backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
            AI POWERED CHEMISTRY PLATFORM
          </div>
          
          {/* Classic Branding Titles */}
          <div className="space-y-6">
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tight leading-none">
              <span className="bg-gradient-to-r from-[#FFD000] via-[#FF5E97] to-[#B352E9] bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(255,94,151,0.15)]">
                SYNERGIC BOND
              </span>
            </h1>
            <p className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-white/95">
              The Chemistry Operating System
            </p>
            <p className="text-xs sm:text-sm md:text-base font-extrabold text-cyan-400/80 tracking-[0.3em] uppercase flex items-center justify-center gap-2">
              Search <span className="text-white/20">&bull;</span> Learn <span className="text-white/20">&bull;</span> Practice <span className="text-white/20">&bull;</span> Master
            </p>
          </div>
          
          <p className="max-w-2xl mx-auto text-white/70 text-sm sm:text-base md:text-lg leading-relaxed pt-2">
            Synergic Bond is a complete Chemistry learning ecosystem for Boards, JEE, NEET and Olympiads — combining verified content, AI tutoring, PYQs, smart practice, mock tests and visual learning tools.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link href="/programs" className="rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 text-sm font-bold shadow-[0_0_30px_rgba(6,182,212,0.25)] hover:shadow-[0_0_40px_rgba(6,182,212,0.4)] hover:scale-[1.03] active:scale-95 transition-all duration-300">
              Start Learning
            </Link>
            <Link href="#programs" className="rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 px-8 py-4 text-sm font-bold text-white/80 active:scale-95 transition-all duration-300 backdrop-blur-md">
              Explore Programs
            </Link>
          </div>

          {/* Floating UI Elements Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto pt-10">
            <div className="p-5 rounded-2xl border border-cyan-500/20 bg-cyan-950/10 backdrop-blur-md text-left space-y-3 hover:border-cyan-400/40 transition duration-300 group">
              <div className="flex items-center gap-2 text-cyan-300 text-xs font-black uppercase tracking-wider">
                <Brain className="h-4 w-4 text-cyan-400 group-hover:scale-110 transition" /> AI Doubt Solver
              </div>
              <p className="text-xs text-white/60 leading-relaxed">"Explain the exception of inert pair effect in Group 14..."</p>
            </div>
            <div className="p-5 rounded-2xl border border-purple-500/20 bg-purple-950/10 backdrop-blur-md text-left space-y-3 hover:border-purple-400/40 transition duration-300 group">
              <div className="flex items-center gap-2 text-purple-300 text-xs font-black uppercase tracking-wider">
                <FileText className="h-4 w-4 text-purple-400 group-hover:scale-110 transition" /> Visual Notes
              </div>
              <p className="text-xs text-white/60 leading-relaxed">Meticulously authored notes, exceptions &amp; worked derivations.</p>
            </div>
            <div className="p-5 rounded-2xl border border-emerald-500/20 bg-emerald-950/10 backdrop-blur-md text-left space-y-3 hover:border-emerald-400/40 transition duration-300 group">
              <div className="flex items-center gap-2 text-emerald-300 text-xs font-black uppercase tracking-wider">
                <Target className="h-4 w-4 text-emerald-400 group-hover:scale-110 transition" /> Active PYQs
              </div>
              <p className="text-xs text-white/60 leading-relaxed">JEE &amp; NEET previous years with detailed explanations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. TRUST / IMPACT STRIP ───────────────────────────────────── */}
      <section className="bg-black/40 border-b border-white/[0.05] py-8 backdrop-blur-md">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <span className="block text-[10px] font-extrabold text-white/40 uppercase tracking-widest">Curriculum Scope</span>
              <span className="block text-sm font-black text-cyan-300">Boards, JEE, NEET, Olympiads</span>
            </div>
            <div className="space-y-1">
              <span className="block text-[10px] font-extrabold text-white/40 uppercase tracking-widest">AI Evaluation</span>
              <span className="block text-sm font-black text-violet-300">24/7 Instant Solver</span>
            </div>
            <div className="space-y-1">
              <span className="block text-[10px] font-extrabold text-white/40 uppercase tracking-widest">Study Content</span>
              <span className="block text-sm font-black text-emerald-300">Chapter-wise Notes</span>
            </div>
            <div className="space-y-1">
              <span className="block text-[10px] font-extrabold text-white/40 uppercase tracking-widest">Practice Layer</span>
              <span className="block text-sm font-black text-amber-300">PYQs + Custom Mocks</span>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 space-y-28">

        {/* ── 3. WHO IT IS FOR ─────────────────────────────────────────── */}
        <section className="space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Targeted Prep for Every Exam Path</h2>
            <p className="text-xs sm:text-sm text-white/50 max-w-xl mx-auto">
              Select your specific curriculum to launch our unified learning systems.
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="p-6 rounded-3xl border border-white/[0.06] bg-[#111827]/60 hover:bg-[#111827] hover:border-cyan-400/30 transition-all duration-300 space-y-4 flex flex-col justify-between group">
              <div className="space-y-2">
                <h3 className="text-lg font-black text-white group-hover:text-cyan-300 transition">CBSE Students</h3>
                <p className="text-xs text-white/60 leading-relaxed">Class 11 &amp; 12 school board preparation mapped directly to NCERT textbooks.</p>
              </div>
              <Link href="/dashboard/cbse/class-12" className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 group-hover:translate-x-1 transition-all duration-300">
                Go to CBSE Dashboard <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
            <div className="p-6 rounded-3xl border border-white/[0.06] bg-[#111827]/60 hover:bg-[#111827] hover:border-cyan-400/30 transition-all duration-300 space-y-4 flex flex-col justify-between group">
              <div className="space-y-2">
                <h3 className="text-lg font-black text-white group-hover:text-cyan-300 transition">ISC Students</h3>
                <p className="text-xs text-white/60 leading-relaxed">Comprehensive Class 11 &amp; 12 ISC board theory, named reactions, and practicals.</p>
              </div>
              <Link href="/dashboard/icse/class-12" className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 group-hover:translate-x-1 transition-all duration-300">
                Go to ISC Dashboard <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
            <div className="p-6 rounded-3xl border border-white/[0.06] bg-[#111827]/60 hover:bg-[#111827] hover:border-cyan-400/30 transition-all duration-300 space-y-4 flex flex-col justify-between group">
              <div className="space-y-2">
                <h3 className="text-lg font-black text-white group-hover:text-cyan-300 transition">JEE Main Aspirants</h3>
                <p className="text-xs text-white/60 leading-relaxed">Focused single-correct questions, numerical answers, and speed diagnostics.</p>
              </div>
              <Link href="/programs/jee-main" className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 group-hover:translate-x-1 transition-all duration-300">
                Explore JEE Main Hub <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
            <div className="p-6 rounded-3xl border border-white/[0.06] bg-[#111827]/60 hover:bg-[#111827] hover:border-cyan-400/30 transition-all duration-300 space-y-4 flex flex-col justify-between group">
              <div className="space-y-2">
                <h3 className="text-lg font-black text-white group-hover:text-cyan-300 transition">JEE Advanced Aspirants</h3>
                <p className="text-xs text-white/60 leading-relaxed">Multi-correct MCQs, column matching, comprehensions, and IIT-level challenges.</p>
              </div>
              <Link href="/programs/jee-advanced" className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 group-hover:translate-x-1 transition-all duration-300">
                Explore JEE Advanced Hub <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
            <div className="p-6 rounded-3xl border border-white/[0.06] bg-[#111827]/60 hover:bg-[#111827] hover:border-cyan-400/30 transition-all duration-300 space-y-4 flex flex-col justify-between group">
              <div className="space-y-2">
                <h3 className="text-lg font-black text-white group-hover:text-cyan-300 transition">NEET Aspirants</h3>
                <p className="text-xs text-white/60 leading-relaxed">Inorganic memory tricks, organic mechanisms, and assertion-reason pools.</p>
              </div>
              <Link href="/programs/neet" className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 group-hover:translate-x-1 transition-all duration-300">
                Explore NEET Hub <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
            <div className="p-6 rounded-3xl border border-white/[0.06] bg-[#111827]/60 hover:bg-[#111827] hover:border-cyan-400/30 transition-all duration-300 space-y-4 flex flex-col justify-between group">
              <div className="space-y-2">
                <h3 className="text-lg font-black text-white group-hover:text-cyan-300 transition">Olympiad Learners</h3>
                <p className="text-xs text-white/60 leading-relaxed">University-level depth for NSEC, INChO, and IChO tracks.</p>
              </div>
              <Link href="/programs/olympiad" className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 group-hover:translate-x-1 transition-all duration-300">
                Explore Olympiad Hub <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 4. LEARNING ECOSYSTEM ───────────────────────────────────── */}
        <section className="space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">The Unified Learning Ecosystem</h2>
            <p className="text-xs sm:text-sm text-white/50">Four interconnected pillars designed for Chemistry mastery.</p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {/* Study */}
            <div className="p-6 rounded-3xl border border-white/[0.06] bg-[#111827]/40 hover:bg-[#111827] hover:border-cyan-500/25 transition duration-300 space-y-4">
              <div className="text-cyan-300 text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="h-4.5 w-4.5 text-cyan-400" /> Study
              </div>
              <ul className="text-xs text-white/60 space-y-2.5">
                <li className="flex gap-2"><span className="text-cyan-400">•</span> Detailed Theory Notes</li>
                <li className="flex gap-2"><span className="text-cyan-400">•</span> Short Revision Notes</li>
                <li className="flex gap-2"><span className="text-cyan-400">•</span> Pure Formula Sheets</li>
                <li className="flex gap-2"><span className="text-cyan-400">•</span> NCERT Highlights</li>
              </ul>
            </div>
            {/* Practice */}
            <div className="p-6 rounded-3xl border border-white/[0.06] bg-[#111827]/40 hover:bg-[#111827] hover:border-emerald-500/25 transition duration-300 space-y-4">
              <div className="text-emerald-300 text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5">
                <PenTool className="h-4.5 w-4.5 text-emerald-400" /> Practice
              </div>
              <ul className="text-xs text-white/60 space-y-2.5">
                <li className="flex gap-2"><span className="text-emerald-400">•</span> Chapter Practice</li>
                <li className="flex gap-2"><span className="text-emerald-400">•</span> Verified PYQ Center</li>
                <li className="flex gap-2"><span className="text-emerald-400">•</span> Standard Mock Tests</li>
                <li className="flex gap-2"><span className="text-emerald-400">•</span> Custom Exam Generator</li>
              </ul>
            </div>
            {/* AI */}
            <div className="p-6 rounded-3xl border border-white/[0.06] bg-[#111827]/40 hover:bg-[#111827] hover:border-violet-500/25 transition duration-300 space-y-4">
              <div className="text-violet-300 text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5">
                <Cpu className="h-4.5 w-4.5 text-violet-400" /> AI OS
              </div>
              <ul className="text-xs text-white/60 space-y-2.5">
                <li className="flex gap-2"><span className="text-violet-400">•</span> AI doubt-solving tutor</li>
                <li className="flex gap-2"><span className="text-violet-400">•</span> Snap &amp; Solve OCR</li>
                <li className="flex gap-2"><span className="text-violet-400">•</span> Multimodal grading</li>
                <li className="flex gap-2"><span className="text-violet-400">•</span> Smart adaptive queues</li>
              </ul>
            </div>
            {/* Visual */}
            <div className="p-6 rounded-3xl border border-white/[0.06] bg-[#111827]/40 hover:bg-[#111827] hover:border-amber-500/25 transition duration-300 space-y-4">
              <div className="text-amber-300 text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5">
                <Atom className="h-4.5 w-4.5 text-amber-400" /> Visual
              </div>
              <ul className="text-xs text-white/60 space-y-2.5">
                <li className="flex gap-2"><span className="text-amber-400">•</span> Interactive Periodic Table</li>
                <li className="flex gap-2"><span className="text-amber-400">•</span> Molecule Explorer</li>
                <li className="flex gap-2"><span className="text-amber-400">•</span> Reagents &amp; named reactions</li>
                <li className="flex gap-2"><span className="text-amber-400">•</span> Color &amp; Exception vaults</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 5. NOTES-FIRST SECTION ───────────────────────────────────── */}
        <section className="relative overflow-hidden rounded-3xl border border-cyan-400/25 bg-gradient-to-br from-[#111827] to-[#0a152e] p-8 md:p-10 space-y-6 shadow-2xl">
          <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-cyan-500/5 to-transparent pointer-events-none" />
          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-[10px] font-extrabold border border-cyan-500/20 uppercase tracking-wider">
                <FileText className="h-3.5 w-3.5" /> Academically Structured
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Verified Chapter Notes Center</h2>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Synergic Bond is built around strict, verified curriculum notes. Access detailed theory, steps-wise derivations, worked examples, NCERT-direct callouts, and quick revision sheets, designed by senior faculty.
              </p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-white/60 pt-2">
                <div className="flex gap-2 items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> Short Revision Notes
                </div>
                <div className="flex gap-2 items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> Step-by-Step Derivations
                </div>
                <div className="flex gap-2 items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> Pure Formula Sheets
                </div>
                <div className="flex gap-2 items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> NCERT Highlights
                </div>
              </div>
            </div>
            
            <div className="shrink-0 flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-[#0B0F19]/80 border border-white/[0.08] text-center w-full md:w-64 backdrop-blur-md">
              <span className="text-[10px] font-extrabold text-white/40 uppercase tracking-wider">Visual Library</span>
              <span className="text-3xl font-black text-white">100% Free</span>
              <span className="text-[10px] text-white/50 leading-relaxed">Core chapters always unlocked</span>
              <Link href="/notes" className="mt-2 w-full text-center rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black px-4 py-3 text-xs font-bold transition duration-300 shadow-md">
                Open Notes Explorer &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* ── 6. AI CHEMISTRY TUTOR SECTION ───────────────────────────── */}
        <section className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-5 text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 text-violet-300 text-[10px] font-extrabold border border-violet-500/20 uppercase tracking-wider">
              <Brain className="h-3.5 w-3.5 text-violet-400" /> Generative AI Integration
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Your 24/7 Intelligent Chemistry Coach</h2>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
              Stuck on a tricky coordination chemistry mechanism or a thermodynamic calculation? Our AI Tutor acts as a personal coach, offering step-by-step solutions, conceptual breakdown hints, and detailed grading of subjective worksheets.
            </p>
            <div className="grid gap-3 pt-2 text-xs text-white/70">
              <div className="flex gap-2">
                <span className="text-violet-400 font-bold">✓</span> Real-time doubt-solving with LaTeX math support.
              </div>
              <div className="flex gap-2">
                <span className="text-violet-400 font-bold">✓</span> Evaluation report highlighting strengths and weaknesses.
              </div>
            </div>
          </div>
          
          <div className="p-6 rounded-3xl border border-white/[0.08] bg-[#111827]/40 space-y-4 backdrop-blur-md">
            <h3 className="text-xs font-extrabold text-white/40 uppercase tracking-wider text-left">Ask AI Tutor</h3>
            <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] text-xs space-y-2 text-left">
              <p className="text-violet-300 font-extrabold">Student Query:</p>
              <p className="text-white/70 font-mono">Why is electron gain enthalpy of fluorine less negative than chlorine?</p>
            </div>
            <div className="p-4 rounded-2xl bg-violet-950/20 border border-violet-500/20 text-xs space-y-2 text-left">
              <p className="text-emerald-300 font-extrabold">AI Coach Explanation:</p>
              <p className="text-white/70 leading-relaxed">
                Due to the compact size of the fluorine atom, there is strong inter-electronic repulsion in its relatively small 2p subshell. Incoming electrons experience repulsion, making the enthalpy change less negative than that of chlorine (which has a larger 3p subshell).
              </p>
            </div>
          </div>
        </section>

        {/* ── 7. PROGRAMS SECTION ──────────────────────────────────────── */}
        <section id="programs" className="space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Explore Our Programs</h2>
            <p className="text-xs sm:text-sm text-white/50 max-w-xl mx-auto">
              Direct access to exam hubs. Slugs mapped to master syllabus.
            </p>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            <Link href="/dashboard/cbse/class-11" className="p-5 rounded-2xl border border-white/[0.06] bg-[#111827]/40 hover:bg-[#111827] hover:border-cyan-400/30 transition duration-300 text-center space-y-1 group">
              <span className="block text-[10px] font-extrabold text-white/40 uppercase group-hover:text-cyan-400 transition">SCHOOL BOARDS</span>
              <span className="block text-sm font-black text-white">CBSE Class 11</span>
            </Link>
            <Link href="/dashboard/cbse/class-12" className="p-5 rounded-2xl border border-white/[0.06] bg-[#111827]/40 hover:bg-[#111827] hover:border-cyan-400/30 transition duration-300 text-center space-y-1 group">
              <span className="block text-[10px] font-extrabold text-white/40 uppercase group-hover:text-cyan-400 transition">SCHOOL BOARDS</span>
              <span className="block text-sm font-black text-white">CBSE Class 12</span>
            </Link>
            <Link href="/dashboard/icse/class-11" className="p-5 rounded-2xl border border-white/[0.06] bg-[#111827]/40 hover:bg-[#111827] hover:border-cyan-400/30 transition duration-300 text-center space-y-1 group">
              <span className="block text-[10px] font-extrabold text-white/40 uppercase group-hover:text-cyan-400 transition">SCHOOL BOARDS</span>
              <span className="block text-sm font-black text-white">ISC Class 11</span>
            </Link>
            <Link href="/dashboard/icse/class-12" className="p-5 rounded-2xl border border-white/[0.06] bg-[#111827]/40 hover:bg-[#111827] hover:border-cyan-400/30 transition duration-300 text-center space-y-1 group">
              <span className="block text-[10px] font-extrabold text-white/40 uppercase group-hover:text-cyan-400 transition">SCHOOL BOARDS</span>
              <span className="block text-sm font-black text-white">ISC Class 12</span>
            </Link>
            <Link href="/programs/neet" className="p-5 rounded-2xl border border-white/[0.06] bg-[#111827]/40 hover:bg-[#111827] hover:border-cyan-400/30 transition duration-300 text-center space-y-1 group">
              <span className="block text-[10px] font-extrabold text-white/40 uppercase group-hover:text-cyan-400 transition">COMPETITIVE</span>
              <span className="block text-sm font-black text-white">NEET Prep</span>
            </Link>
            <Link href="/programs/jee-main" className="p-5 rounded-2xl border border-white/[0.06] bg-[#111827]/40 hover:bg-[#111827] hover:border-cyan-400/30 transition duration-300 text-center space-y-1 group">
              <span className="block text-[10px] font-extrabold text-white/40 uppercase group-hover:text-cyan-400 transition">COMPETITIVE</span>
              <span className="block text-sm font-black text-white">JEE Main Prep</span>
            </Link>
            <Link href="/programs/jee-advanced" className="p-5 rounded-2xl border border-white/[0.06] bg-[#111827]/40 hover:bg-[#111827] hover:border-cyan-400/30 transition duration-300 text-center space-y-1 group">
              <span className="block text-[10px] font-extrabold text-white/40 uppercase group-hover:text-cyan-400 transition">COMPETITIVE</span>
              <span className="block text-sm font-black text-white">JEE Advanced Prep</span>
            </Link>
            <Link href="/programs/olympiad" className="p-5 rounded-2xl border border-white/[0.06] bg-[#111827]/40 hover:bg-[#111827] hover:border-cyan-400/30 transition duration-300 text-center space-y-1 group">
              <span className="block text-[10px] font-extrabold text-white/40 uppercase group-hover:text-cyan-400 transition">COMPETITIVE</span>
              <span className="block text-sm font-black text-white">Olympiad Prep</span>
            </Link>
          </div>
        </section>

        {/* ── 8. WHY STUDENTS CHOOSE SYNERGIC BOND ───────────────────────── */}
        <section className="space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Why Students Choose Synergic Bond</h2>
            <p className="text-xs sm:text-sm text-white/50">Designed around deep academic outcomes.</p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="p-6 rounded-3xl border border-white/[0.06] bg-[#111827]/40 hover:bg-[#111827] hover:border-cyan-400/25 transition duration-300 space-y-3">
              <h3 className="text-sm font-bold text-white">Chemistry-Only Focus</h3>
              <p className="text-xs text-white/50 leading-relaxed">
                We do not generalize. By focusing solely on chemistry, we build extreme depth in atomic structures, organic pathways, and complex equations.
              </p>
            </div>
            <div className="p-6 rounded-3xl border border-white/[0.06] bg-[#111827]/40 hover:bg-[#111827] hover:border-cyan-400/25 transition duration-300 space-y-3">
              <h3 className="text-sm font-bold text-white">AI Chemistry Tutor</h3>
              <p className="text-xs text-white/50 leading-relaxed">
                Personalized step-by-step doubt-solving and grading feedback available 24/7.
              </p>
            </div>
            <div className="p-6 rounded-3xl border border-white/[0.06] bg-[#111827]/40 hover:bg-[#111827] hover:border-cyan-400/25 transition duration-300 space-y-3">
              <h3 className="text-sm font-bold text-white">Chapter-wise Notes</h3>
              <p className="text-xs text-white/50 leading-relaxed">
                Verified detailed theory, short notes, formula sheets, and derivations in one place.
              </p>
            </div>
            <div className="p-6 rounded-3xl border border-white/[0.06] bg-[#111827]/40 hover:bg-[#111827] hover:border-cyan-400/25 transition duration-300 space-y-3">
              <h3 className="text-sm font-bold text-white">PYQs &amp; Mock Tests</h3>
              <p className="text-xs text-white/50 leading-relaxed">
                Real previous year questions and timed exam simulations to build test readiness.
              </p>
            </div>
            <div className="p-6 rounded-3xl border border-white/[0.06] bg-[#111827]/40 hover:bg-[#111827] hover:border-cyan-400/25 transition duration-300 space-y-3">
              <h3 className="text-sm font-bold text-white">Board + Entrance Preparation</h3>
              <p className="text-xs text-white/50 leading-relaxed">
                Aligning school-board descriptive answers alongside competitive objective question formats.
              </p>
            </div>
            <div className="p-6 rounded-3xl border border-white/[0.06] bg-[#111827]/40 hover:bg-[#111827] hover:border-cyan-400/25 transition duration-300 space-y-3">
              <h3 className="text-sm font-bold text-white">Visual Learning Tools</h3>
              <p className="text-xs text-white/50 leading-relaxed">
                Interactive visual aids including periodic tables, reagent lists, and compound colors.
              </p>
            </div>
            <div className="p-6 rounded-3xl border border-white/[0.06] bg-[#111827]/40 hover:bg-[#111827] hover:border-cyan-400/25 transition duration-300 space-y-3 sm:col-span-2 md:col-span-3">
              <h3 className="text-sm font-bold text-cyan-300">Affordable Access</h3>
              <p className="text-xs text-white/55 leading-relaxed">
                Sustaining high-quality preparatory tools at a low cost for students nationwide.
              </p>
            </div>
          </div>
        </section>

        {/* ── 9. STUDENT IMPACT / TESTIMONIALS ─────────────────────────── */}
        <section className="space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Humble Student Feedback</h2>
            <p className="text-xs sm:text-sm text-white/50">Real experiences from independent learners using our platform.</p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="p-6 rounded-3xl border border-white/[0.06] bg-[#111827]/40 hover:bg-[#111827] transition duration-300 space-y-4 flex flex-col justify-between">
              <p className="text-xs sm:text-sm text-white/70 italic leading-relaxed">
                "Quality chemistry guidance is not always available in smaller cities. The platform gave me access to organized learning resources that I could use from home."
              </p>
              <div className="border-t border-white/[0.05] pt-3">
                <span className="block text-xs font-bold text-white">Rohan S.</span>
                <span className="block text-[10px] text-white/40">Small-Town Student</span>
              </div>
            </div>
            <div className="p-6 rounded-3xl border border-white/[0.06] bg-[#111827]/40 hover:bg-[#111827] transition duration-300 space-y-4 flex flex-col justify-between">
              <p className="text-xs sm:text-sm text-white/70 italic leading-relaxed">
                "Managing Board exams and entrance preparation together was overwhelming. Having both preparation paths organized in one place saved time and reduced confusion."
              </p>
              <div className="border-t border-white/[0.05] pt-3">
                <span className="block text-xs font-bold text-white">Anjali K.</span>
                <span className="block text-[10px] text-white/40">Board + NEET Prep</span>
              </div>
            </div>
            <div className="p-6 rounded-3xl border border-white/[0.06] bg-[#111827]/40 hover:bg-[#111827] transition duration-300 space-y-4 flex flex-col justify-between">
              <p className="text-xs sm:text-sm text-white/70 italic leading-relaxed">
                "I wanted to strengthen my chemistry concepts at my own pace. The structured notes and practice tools helped me learn independently."
              </p>
              <div className="border-t border-white/[0.05] pt-3">
                <span className="block text-xs font-bold text-white">Vikram M.</span>
                <span className="block text-[10px] text-white/40">Self Learner</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 10. FINAL CTA ───────────────────────────────────────────── */}
        <section className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-[#111827] to-[#0f1d3a] p-10 text-center space-y-8 shadow-2xl">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
          </div>
          
          <div className="relative space-y-3 max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">Start Mastering Chemistry Today</h2>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
              Chemistry education should be organized, visual, intelligent and accessible. Join the mission to learn chemistry conceptually.
            </p>
          </div>
          
          <div className="relative flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link href="/programs" className="rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-3.5 text-xs font-extrabold hover:scale-[1.02] transition-all duration-300 shadow-md">
              Start Learning
            </Link>
            <Link href="#programs" className="rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] px-6 py-3.5 text-xs font-extrabold text-white/80 transition-all duration-300">
              View Programs
            </Link>
            <Link href="/pricing" className="rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-6 py-3.5 text-xs font-extrabold text-cyan-300 hover:bg-cyan-500/20 transition-all duration-300">
              Explore Pro Plans
            </Link>
          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}
