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
    <main className="min-h-screen bg-[#0B0F19] text-white selection:bg-cyan-500/30 font-sans">

      {/* ── 1. HERO SECTION ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-white/[0.06] bg-gradient-to-b from-[#111827]/50 via-transparent to-transparent pt-20 pb-24 px-4 sm:px-6">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl animate-pulse" />
          <div className="absolute right-1/4 top-1/3 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
        </div>
        
        <div className="relative mx-auto max-w-5xl text-center space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/10 px-4 py-1.5 text-cyan-300 text-xs font-bold tracking-wider uppercase">
            <Atom className="h-4 w-4 animate-spin-slow text-cyan-400" /> Chemistry OS v2.0
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none text-white max-w-4xl mx-auto">
            Master Chemistry with AI, Expert Notes &amp; Exam-Focused Practice
          </h1>
          
          <p className="max-w-3xl mx-auto text-white/70 text-sm sm:text-base md:text-lg leading-relaxed">
            Synergic Bond is a complete Chemistry learning ecosystem for Boards, JEE, NEET and Olympiads — combining verified content, AI tutoring, PYQs, smart practice, mock tests and visual learning tools.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/programs" className="rounded-xl bg-cyan-500 px-6 py-3.5 text-sm font-bold text-black hover:bg-cyan-400 hover:scale-[1.02] active:scale-95 transition shadow-lg shadow-cyan-500/20">
              Start Learning
            </Link>
            <Link href="#programs" className="rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-bold text-white/80 hover:bg-white/[0.08] hover:border-white/20 active:scale-95 transition">
              Explore Programs
            </Link>
          </div>

          {/* Floating UI Elements Mockup Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-8">
            <div className="p-4 rounded-2xl border border-cyan-400/20 bg-cyan-950/20 text-left space-y-2">
              <div className="flex items-center gap-2 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                <Brain className="h-4 w-4" /> AI Doubt Solver
              </div>
              <p className="text-xs text-white/60">"Explain the exception of inert pair effect in Group 14..."</p>
            </div>
            <div className="p-4 rounded-2xl border border-purple-400/20 bg-purple-950/20 text-left space-y-2">
              <div className="flex items-center gap-2 text-purple-300 text-xs font-bold uppercase tracking-wider">
                <FileText className="h-4 w-4" /> Visual Notes
              </div>
              <p className="text-xs text-white/60">Meticulously authored notes &amp; worked derivations.</p>
            </div>
            <div className="p-4 rounded-2xl border border-emerald-400/20 bg-emerald-950/20 text-left space-y-2">
              <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <Target className="h-4 w-4" /> Active PYQs
              </div>
              <p className="text-xs text-white/60">JEE &amp; NEET previous years with detailed explanations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. TRUST / IMPACT STRIP ───────────────────────────────────── */}
      <section className="bg-black/30 border-b border-white/[0.06] py-6">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <span className="block text-xs font-bold text-white/45 uppercase tracking-wider">Curriculum Scope</span>
              <span className="block text-sm font-black text-cyan-400">Boards, JEE, NEET, Olympiads</span>
            </div>
            <div className="space-y-1">
              <span className="block text-xs font-bold text-white/45 uppercase tracking-wider">AI Evaluation</span>
              <span className="block text-sm font-black text-cyan-400">24/7 Instant Solver</span>
            </div>
            <div className="space-y-1">
              <span className="block text-xs font-bold text-white/45 uppercase tracking-wider">Study Content</span>
              <span className="block text-sm font-black text-cyan-400">Chapter-wise Notes</span>
            </div>
            <div className="space-y-1">
              <span className="block text-xs font-bold text-white/45 uppercase tracking-wider">Practice Layer</span>
              <span className="block text-sm font-black text-cyan-400">PYQs + Custom Mocks</span>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 space-y-24">

        {/* ── 3. WHO IT IS FOR ─────────────────────────────────────────── */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-black text-white">Targeted Prep for Every Exam Path</h2>
            <p className="text-xs text-white/50 max-w-xl mx-auto">
              Select your specific curriculum to launch our unified learning systems.
            </p>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="p-6 rounded-3xl border border-white/[0.08] bg-[#111827] space-y-4">
              <h3 className="text-lg font-black text-white">CBSE Students</h3>
              <p className="text-xs text-white/60">Class 11 &amp; 12 school board preparation mapped directly to NCERT textbooks.</p>
              <Link href="/dashboard/cbse/class-12" className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-300 hover:text-cyan-400 transition">
                Go to CBSE Dashboard &rarr;
              </Link>
            </div>
            <div className="p-6 rounded-3xl border border-white/[0.08] bg-[#111827] space-y-4">
              <h3 className="text-lg font-black text-white">ISC Students</h3>
              <p className="text-xs text-white/60">Comprehensive Class 11 &amp; 12 ISC board theory, named reactions, and practicals.</p>
              <Link href="/dashboard/icse/class-12" className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-300 hover:text-cyan-400 transition">
                Go to ISC Dashboard &rarr;
              </Link>
            </div>
            <div className="p-6 rounded-3xl border border-white/[0.08] bg-[#111827] space-y-4">
              <h3 className="text-lg font-black text-white">JEE Main Aspirants</h3>
              <p className="text-xs text-white/60">Focused single-correct questions, numerical answers, and speed diagnostics.</p>
              <Link href="/programs/jee-main" className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-300 hover:text-cyan-400 transition">
                Explore JEE Main Hub &rarr;
              </Link>
            </div>
            <div className="p-6 rounded-3xl border border-white/[0.08] bg-[#111827] space-y-4">
              <h3 className="text-lg font-black text-white">JEE Advanced Aspirants</h3>
              <p className="text-xs text-white/60">Multi-correct MCQs, column matching, comprehensions, and IIT-level challenges.</p>
              <Link href="/programs/jee-advanced" className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-300 hover:text-cyan-400 transition">
                Explore JEE Advanced Hub &rarr;
              </Link>
            </div>
            <div className="p-6 rounded-3xl border border-white/[0.08] bg-[#111827] space-y-4">
              <h3 className="text-lg font-black text-white">NEET Aspirants</h3>
              <p className="text-xs text-white/60">Inorganic memory tricks, organic mechanisms, and assertion-reason pools.</p>
              <Link href="/programs/neet" className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-300 hover:text-cyan-400 transition">
                Explore NEET Hub &rarr;
              </Link>
            </div>
            <div className="p-6 rounded-3xl border border-white/[0.08] bg-[#111827] space-y-4">
              <h3 className="text-lg font-black text-white">Olympiad Learners</h3>
              <p className="text-xs text-white/60">University-level depth for NSEC, INChO, and IChO tracks.</p>
              <Link href="/programs/olympiad" className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-300 hover:text-cyan-400 transition">
                Explore Olympiad Hub &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* ── 4. LEARNING ECOSYSTEM ───────────────────────────────────── */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-black text-white">The Unified Learning Ecosystem</h2>
            <p className="text-xs text-white/50">Four interconnected pillars designed for Chemistry mastery.</p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {/* Study */}
            <div className="p-5 rounded-3xl border border-white/[0.06] bg-[#111827] space-y-4">
              <div className="text-cyan-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                <BookOpen className="h-4 w-4" /> Study
              </div>
              <ul className="text-xs text-white/60 space-y-2">
                <li>• Detailed Theory Notes</li>
                <li>• Short Revision Notes</li>
                <li>• Pure Formula Sheets</li>
                <li>• NCERT Highlights</li>
              </ul>
            </div>
            {/* Practice */}
            <div className="p-5 rounded-3xl border border-white/[0.06] bg-[#111827] space-y-4">
              <div className="text-emerald-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                <PenTool className="h-4 w-4" /> Practice
              </div>
              <ul className="text-xs text-white/60 space-y-2">
                <li>• Chapter Practice</li>
                <li>• Verified PYQ Center</li>
                <li>• Standard Mock Tests</li>
                <li>• Custom Exam Generator</li>
              </ul>
            </div>
            {/* AI */}
            <div className="p-5 rounded-3xl border border-white/[0.06] bg-[#111827] space-y-4">
              <div className="text-violet-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                <Cpu className="h-4 w-4" /> AI OS
              </div>
              <ul className="text-xs text-white/60 space-y-2">
                <li>• AI doubt-solving tutor</li>
                <li>• Snap &amp; Solve OCR</li>
                <li>• Multimodal grading feedback</li>
                <li>• Smart adaptive queues</li>
              </ul>
            </div>
            {/* Visual */}
            <div className="p-5 rounded-3xl border border-white/[0.06] bg-[#111827] space-y-4">
              <div className="text-amber-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                <Atom className="h-4 w-4" /> Visual
              </div>
              <ul className="text-xs text-white/60 space-y-2">
                <li>• Interactive Periodic Table</li>
                <li>• Molecule Explorer</li>
                <li>• Reagent &amp; named reactions</li>
                <li>• Color &amp; Exception vaults</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 5. NOTES-FIRST SECTION ───────────────────────────────────── */}
        <section className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-[#111827] to-[#0f1d3a] p-8 space-y-6">
          <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-cyan-500/5 to-transparent pointer-events-none" />
          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-4 max-w-xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-[10px] font-bold border border-cyan-500/20 uppercase tracking-wider">
                <FileText className="h-3 w-3" /> Academically Structured
              </span>
              <h2 className="text-3xl font-black text-white">Verified Chapter Notes Center</h2>
              <p className="text-xs text-white/70 leading-relaxed">
                Synergic Bond is built around strict, verified curriculum notes. Access detailed theory, steps-wise derivations, worked examples, NCERT-direct callouts, and quick revision sheets, designed by senior faculty.
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs text-white/50 pt-2">
                <div className="flex gap-2">
                  <span className="text-cyan-400 font-bold font-mono">•</span> Short Revision Notes
                </div>
                <div className="flex gap-2">
                  <span className="text-cyan-400 font-bold font-mono">•</span> Step-by-Step Derivations
                </div>
                <div className="flex gap-2">
                  <span className="text-cyan-400 font-bold font-mono">•</span> Pure Formula Sheets
                </div>
                <div className="flex gap-2">
                  <span className="text-cyan-400 font-bold font-mono">•</span> NCERT Highlights
                </div>
              </div>
            </div>
            
            <div className="shrink-0 flex flex-col items-center justify-center gap-2 p-6 rounded-2xl bg-black/40 border border-white/[0.06] text-center w-full md:w-64">
              <span className="text-xs font-bold text-white/40 uppercase tracking-wider">Visual Library</span>
              <span className="text-3xl font-black text-white">100% Free</span>
              <span className="text-[10px] text-white/50">Core chapters always unlocked</span>
              <Link href="/notes" className="mt-4 w-full text-center rounded-xl bg-cyan-500 px-4 py-2.5 text-xs font-bold text-black hover:bg-cyan-400 transition">
                Open Notes Explorer &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* ── 6. AI CHEMISTRY TUTOR SECTION ───────────────────────────── */}
        <section className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 text-violet-300 text-[10px] font-bold border border-violet-500/20 uppercase tracking-wider">
              <Brain className="h-3 w-3" /> Generative AI Integration
            </span>
            <h2 className="text-3xl font-black text-white">Your 24/7 Intelligent Chemistry Coach</h2>
            <p className="text-xs text-white/60 leading-relaxed">
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
          
          <div className="p-6 rounded-3xl border border-white/[0.08] bg-[#111827] space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Ask AI Tutor</h3>
            <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] text-xs space-y-2">
              <p className="text-violet-300 font-bold">Student Query:</p>
              <p className="text-white/60 font-mono">Why is electron gain enthalpy of fluorine less negative than chlorine?</p>
            </div>
            <div className="p-4 rounded-2xl bg-violet-950/20 border border-violet-500/20 text-xs space-y-2">
              <p className="text-emerald-300 font-bold">AI Coach Explanation:</p>
              <p className="text-white/70 leading-relaxed">
                Due to the compact size of the fluorine atom, there is strong inter-electronic repulsion in its relatively small 2p subshell. Incoming electrons experience repulsion, making the enthalpy change less negative than that of chlorine (which has a larger 3p subshell).
              </p>
            </div>
          </div>
        </section>

        {/* ── 7. PROGRAMS SECTION ──────────────────────────────────────── */}
        <section id="programs" className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-black text-white">Explore Our Programs</h2>
            <p className="text-xs text-white/50 max-w-xl mx-auto">
              Direct access to exam hubs. Slugs mapped to master syllabus.
            </p>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            <Link href="/dashboard/cbse/class-11" className="p-5 rounded-2xl border border-white/[0.06] bg-[#111827] hover:border-cyan-400/30 transition text-center space-y-1">
              <span className="block text-xs font-bold text-white/40">SCHOOL BOARDS</span>
              <span className="block text-sm font-black text-white">CBSE Class 11</span>
            </Link>
            <Link href="/dashboard/cbse/class-12" className="p-5 rounded-2xl border border-white/[0.06] bg-[#111827] hover:border-cyan-400/30 transition text-center space-y-1">
              <span className="block text-xs font-bold text-white/40">SCHOOL BOARDS</span>
              <span className="block text-sm font-black text-white">CBSE Class 12</span>
            </Link>
            <Link href="/dashboard/icse/class-11" className="p-5 rounded-2xl border border-white/[0.06] bg-[#111827] hover:border-cyan-400/30 transition text-center space-y-1">
              <span className="block text-xs font-bold text-white/40">SCHOOL BOARDS</span>
              <span className="block text-sm font-black text-white">ISC Class 11</span>
            </Link>
            <Link href="/dashboard/icse/class-12" className="p-5 rounded-2xl border border-white/[0.06] bg-[#111827] hover:border-cyan-400/30 transition text-center space-y-1">
              <span className="block text-xs font-bold text-white/40">SCHOOL BOARDS</span>
              <span className="block text-sm font-black text-white">ISC Class 12</span>
            </Link>
            <Link href="/programs/neet" className="p-5 rounded-2xl border border-white/[0.06] bg-[#111827] hover:border-cyan-400/30 transition text-center space-y-1">
              <span className="block text-xs font-bold text-white/40">COMPETITIVE</span>
              <span className="block text-sm font-black text-white">NEET Prep</span>
            </Link>
            <Link href="/programs/jee-main" className="p-5 rounded-2xl border border-white/[0.06] bg-[#111827] hover:border-cyan-400/30 transition text-center space-y-1">
              <span className="block text-xs font-bold text-white/40">COMPETITIVE</span>
              <span className="block text-sm font-black text-white">JEE Main Prep</span>
            </Link>
            <Link href="/programs/jee-advanced" className="p-5 rounded-2xl border border-white/[0.06] bg-[#111827] hover:border-cyan-400/30 transition text-center space-y-1">
              <span className="block text-xs font-bold text-white/40">COMPETITIVE</span>
              <span className="block text-sm font-black text-white">JEE Advanced Prep</span>
            </Link>
            <Link href="/programs/olympiad" className="p-5 rounded-2xl border border-white/[0.06] bg-[#111827] hover:border-cyan-400/30 transition text-center space-y-1">
              <span className="block text-xs font-bold text-white/40">COMPETITIVE</span>
              <span className="block text-sm font-black text-white">Olympiad Prep</span>
            </Link>
          </div>
        </section>

        {/* ── 8. WHY SYNERGIC BOND IS DIFFERENT ───────────────────────── */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-black text-white">Why Synergic Bond?</h2>
            <p className="text-xs text-white/50">Designed around deep academic outcomes.</p>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="p-5 rounded-2xl border border-white/[0.06] bg-[#111827] space-y-2">
              <h3 className="text-sm font-bold text-white">Chemistry-Only Focus</h3>
              <p className="text-xs text-white/50 leading-relaxed">
                We do not generalize. By focusing solely on chemistry, we build extreme depth in atomic structures, organic pathways, and complex equations.
              </p>
            </div>
            <div className="p-5 rounded-2xl border border-white/[0.06] bg-[#111827] space-y-2">
              <h3 className="text-sm font-bold text-white">Verified Syllabus</h3>
              <p className="text-xs text-white/50 leading-relaxed">
                Curriculums are mapped strictly to official CBSE, ISC, JEE, NEET, and NSEC guidelines, preventing out-of-scope clutter.
              </p>
            </div>
            <div className="p-5 rounded-2xl border border-white/[0.06] bg-[#111827] space-y-2">
              <h3 className="text-sm font-bold text-white">Affordable Access</h3>
              <p className="text-xs text-white/50 leading-relaxed">
                We believe premium conceptual preparation should be highly accessible to students in small towns and villages.
              </p>
            </div>
            <div className="p-5 rounded-2xl border border-white/[0.06] bg-[#111827] space-y-2">
              <h3 className="text-sm font-bold text-white">AI-Powered Learning</h3>
              <p className="text-xs text-white/50 leading-relaxed">
                Our AI engines evaluate subjective scripts, compile error patterns, and auto-grade numerical keyboard inputs.
              </p>
            </div>
            <div className="p-5 rounded-2xl border border-white/[0.06] bg-[#111827] space-y-2">
              <h3 className="text-sm font-bold text-white">Board + Entrance Alignment</h3>
              <p className="text-xs text-white/50 leading-relaxed">
                Saves time and eliminates confusion by providing school-board descriptive notes alongside competitive MCQ pools.
              </p>
            </div>
            <div className="p-5 rounded-2xl border border-white/[0.06] bg-[#111827] space-y-2">
              <h3 className="text-sm font-bold text-white">Visual Concept Learning</h3>
              <p className="text-xs text-white/50 leading-relaxed">
                Leverage interactive visual tools like periodic tables, compound color maps, and named reactions indexes.
              </p>
            </div>
          </div>
        </section>

        {/* ── 9. STUDENT IMPACT / TESTIMONIALS ─────────────────────────── */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-black text-white">Humble Student Feedback</h2>
            <p className="text-xs text-white/50">Real experiences from independent learners using our platform.</p>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="p-5 rounded-2xl border border-white/[0.06] bg-[#111827] space-y-4">
              <p className="text-xs text-white/70 italic leading-relaxed">
                "Quality chemistry guidance is not always available in smaller cities. The platform gave me access to organized learning resources that I could use from home."
              </p>
              <div>
                <span className="block text-xs font-bold text-white">Rohan S.</span>
                <span className="block text-[10px] text-white/40">Small-Town Student</span>
              </div>
            </div>
            <div className="p-5 rounded-2xl border border-white/[0.06] bg-[#111827] space-y-4">
              <p className="text-xs text-white/70 italic leading-relaxed">
                "Managing Board exams and entrance preparation together was overwhelming. Having both preparation paths organized in one place saved time and reduced confusion."
              </p>
              <div>
                <span className="block text-xs font-bold text-white">Anjali K.</span>
                <span className="block text-[10px] text-white/40">Board + NEET Prep</span>
              </div>
            </div>
            <div className="p-5 rounded-2xl border border-white/[0.06] bg-[#111827] space-y-4">
              <p className="text-xs text-white/70 italic leading-relaxed">
                "I wanted to strengthen my chemistry concepts at my own pace. The structured notes and practice tools helped me learn independently."
              </p>
              <div>
                <span className="block text-xs font-bold text-white">Vikram M.</span>
                <span className="block text-[10px] text-white/40">Self Learner</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 10. FINAL CTA ───────────────────────────────────────────── */}
        <section className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-[#111827] to-[#0f1d3a] p-8 text-center space-y-6">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />
          </div>
          
          <div className="relative space-y-2 max-w-lg mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-white">Start Mastering Chemistry Today</h2>
            <p className="text-xs text-white/60 leading-relaxed">
              Chemistry education should be organized, visual, intelligent and accessible. Join the mission to learn chemistry conceptually.
            </p>
          </div>
          
          <div className="relative flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link href="/programs" className="rounded-xl bg-cyan-500 px-5 py-3 text-xs font-bold text-black hover:bg-cyan-400 transition">
              Start Learning
            </Link>
            <Link href="#programs" className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-bold text-white/80 hover:bg-white/[0.08] transition">
              View Programs
            </Link>
            <Link href="/pricing" className="rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-5 py-3 text-xs font-bold text-cyan-300 hover:bg-cyan-500/20 transition">
              Explore Pro Plans
            </Link>
          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}
