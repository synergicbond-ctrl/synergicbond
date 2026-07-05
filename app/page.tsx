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
    <main className="min-h-screen bg-[#0B0F19] text-white selection:bg-cyan-500/30 font-sans antialiased overflow-x-hidden">

      {/* ── 1. HERO SECTION (Stunning Glow, Visual Cards) ──────────────── */}
      <section className="relative overflow-hidden border-b border-white/[0.06] bg-gradient-to-b from-[#111827]/40 via-transparent to-transparent pt-24 pb-28 px-4 sm:px-6">
        {/* Futuristic glowing backdrop */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/4 top-1/4 h-[350px] w-[350px] rounded-full bg-cyan-500/[0.08] blur-[120px] animate-pulse" />
          <div className="absolute right-1/4 top-1/3 h-[350px] w-[350px] rounded-full bg-violet-500/[0.08] blur-[120px]" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-cyan-500/[0.03] blur-[150px] pointer-events-none" />
        </div>
        
        <div className="relative mx-auto max-w-5xl text-center space-y-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-950/40 px-5 py-2 text-[11px] font-bold tracking-[0.2em] text-cyan-300 uppercase shadow-[0_0_20px_rgba(6,182,212,0.15)]">
            AI POWERED CHEMISTRY PLATFORM
          </div>
          
          <div className="space-y-6">
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tight leading-none filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
              <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                SYNERGIC BOND
              </span>
            </h1>
            <p className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight text-white/95">
              The Chemistry Operating System
            </p>
            <p className="text-xs sm:text-sm md:text-base font-bold text-white/40 tracking-[0.3em] uppercase">
              Search &bull; Learn &bull; Practice &bull; Master
            </p>
          </div>
          
          <p className="max-w-3xl mx-auto text-white/70 text-sm sm:text-base md:text-lg leading-relaxed pt-2">
            Synergic Bond is a complete Chemistry learning ecosystem for Boards, JEE, NEET and Olympiads — combining verified content, AI tutoring, PYQs, smart practice, mock tests and visual learning tools.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link href="/programs" className="rounded-xl bg-cyan-500 px-7 py-4 text-sm font-bold text-black hover:bg-cyan-400 hover:scale-[1.03] active:scale-95 transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
              Start Learning
            </Link>
            <Link href="#programs" className="rounded-xl border border-white/10 bg-white/[0.02] px-7 py-4 text-sm font-bold text-white/80 hover:bg-white/[0.06] hover:border-white/20 active:scale-95 transition-all duration-300 backdrop-blur-md">
              Explore Programs
            </Link>
          </div>

          {/* Floating UI Elements Mockup Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-10">
            <div className="p-5 rounded-2xl border border-cyan-400/20 bg-cyan-950/20 backdrop-blur-md text-left space-y-2 hover:border-cyan-400/40 transition duration-300">
              <div className="flex items-center gap-2 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                <Brain className="h-4 w-4" /> AI Doubt Solver
              </div>
              <p className="text-xs text-white/60">"Explain the exception of inert pair effect in Group 14..."</p>
            </div>
            <div className="p-5 rounded-2xl border border-purple-400/20 bg-purple-950/20 backdrop-blur-md text-left space-y-2 hover:border-purple-400/40 transition duration-300">
              <div className="flex items-center gap-2 text-purple-300 text-xs font-bold uppercase tracking-wider">
                <FileText className="h-4 w-4" /> Visual Notes
              </div>
              <p className="text-xs text-white/60">Meticulously authored notes &amp; worked derivations.</p>
            </div>
            <div className="p-5 rounded-2xl border border-emerald-400/20 bg-emerald-950/20 backdrop-blur-md text-left space-y-2 hover:border-emerald-400/40 transition duration-300">
              <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <Target className="h-4 w-4" /> Active PYQs
              </div>
              <p className="text-xs text-white/60">JEE &amp; NEET previous years with detailed explanations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. TRUST / IMPACT STRIP ───────────────────────────────────── */}
      <section className="bg-black/40 border-b border-white/[0.06] py-8 backdrop-blur-xl">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <span className="block text-[10px] font-bold text-white/40 uppercase tracking-widest">Curriculum Scope</span>
              <span className="block text-sm font-black text-cyan-400">Boards, JEE, NEET, Olympiads</span>
            </div>
            <div className="space-y-1">
              <span className="block text-[10px] font-bold text-white/40 uppercase tracking-widest">AI Evaluation</span>
              <span className="block text-sm font-black text-cyan-400">24/7 Instant Solver</span>
            </div>
            <div className="space-y-1">
              <span className="block text-[10px] font-bold text-white/40 uppercase tracking-widest">Study Content</span>
              <span className="block text-sm font-black text-cyan-400">Chapter-wise Notes</span>
            </div>
            <div className="space-y-1">
              <span className="block text-[10px] font-bold text-white/40 uppercase tracking-widest">Practice Layer</span>
              <span className="block text-sm font-black text-cyan-400">PYQs + Custom Mocks</span>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 space-y-28">

        {/* ── 3. WHO IT IS FOR ─────────────────────────────────────────── */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-black text-white">Targeted Prep for Every Exam Path</h2>
            <p className="text-xs sm:text-sm text-white/50 max-w-xl mx-auto">
              Select your specific curriculum to launch our unified learning systems.
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "CBSE Students", text: "Class 11 & 12 school board preparation mapped directly to NCERT textbooks.", href: "/dashboard/cbse/class-12", label: "CBSE Dashboard" },
              { title: "ISC Students", text: "Comprehensive Class 11 & 12 ISC board theory, named reactions, and practicals.", href: "/dashboard/icse/class-12", label: "ISC Dashboard" },
              { title: "JEE Main Aspirants", text: "Focused single-correct questions, numerical answers, and speed diagnostics.", href: "/programs/jee-main", label: "JEE Main Hub" },
              { title: "JEE Advanced Aspirants", text: "Multi-correct MCQs, column matching, comprehensions, and IIT-level challenges.", href: "/programs/jee-advanced", label: "JEE Advanced Hub" },
              { title: "NEET Aspirants", text: "Inorganic memory tricks, organic mechanisms, and assertion-reason pools.", href: "/programs/neet", label: "NEET Hub" },
              { title: "Olympiad Learners", text: "University-level depth for NSEC, INChO, and IChO tracks.", href: "/programs/olympiad", label: "Olympiad Hub" }
            ].map((p, i) => (
              <div key={i} className="p-6 rounded-3xl border border-white/[0.08] bg-[#111827]/60 hover:bg-[#111827] hover:border-cyan-400/30 hover:scale-[1.02] transition-all duration-300 space-y-4 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-lg font-black text-white">{p.title}</h3>
                  <p className="text-xs text-white/60 leading-relaxed">{p.text}</p>
                </div>
                <Link href={p.href} className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-300 hover:text-cyan-400 transition w-fit">
                  Go to {p.label} <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ── 4. LEARNING ECOSYSTEM ───────────────────────────────────── */}
        <section className="space-y-10 relative">
          <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-violet-500/[0.04] blur-3xl pointer-events-none" />
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-black text-white">The Unified Learning Ecosystem</h2>
            <p className="text-xs sm:text-sm text-white/50">Four interconnected pillars designed for Chemistry mastery.</p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {/* Study */}
            <div className="p-6 rounded-3xl border border-white/[0.06] bg-[#111827]/50 hover:bg-[#111827] hover:border-cyan-500/20 hover:scale-[1.02] transition-all duration-300 space-y-4">
              <div className="text-cyan-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="h-4 w-4 text-cyan-400" /> Study
              </div>
              <ul className="text-xs text-white/60 space-y-2.5">
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> Detailed Theory Notes</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> Short Revision Notes</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> Pure Formula Sheets</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> NCERT Highlights</li>
              </ul>
            </div>
            {/* Practice */}
            <div className="p-6 rounded-3xl border border-white/[0.06] bg-[#111827]/50 hover:bg-[#111827] hover:border-emerald-500/20 hover:scale-[1.02] transition-all duration-300 space-y-4">
              <div className="text-emerald-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <PenTool className="h-4 w-4 text-emerald-400" /> Practice
              </div>
              <ul className="text-xs text-white/60 space-y-2.5">
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Chapter Practice</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Verified PYQ Center</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Standard Mock Tests</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Custom Exam Gen</li>
              </ul>
            </div>
            {/* AI */}
            <div className="p-6 rounded-3xl border border-white/[0.06] bg-[#111827]/50 hover:bg-[#111827] hover:border-purple-500/20 hover:scale-[1.02] transition-all duration-300 space-y-4">
              <div className="text-purple-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Cpu className="h-4 w-4 text-purple-400" /> AI OS
              </div>
              <ul className="text-xs text-white/60 space-y-2.5">
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-purple-400" /> AI doubt solver</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-purple-400" /> Snap &amp; Solve OCR</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-purple-400" /> Multimodal grading</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-purple-400" /> Adaptive queues</li>
              </ul>
            </div>
            {/* Visual */}
            <div className="p-6 rounded-3xl border border-white/[0.06] bg-[#111827]/50 hover:bg-[#111827] hover:border-amber-500/20 hover:scale-[1.02] transition-all duration-300 space-y-4">
              <div className="text-amber-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Atom className="h-4 w-4 text-amber-400" /> Visual
              </div>
              <ul className="text-xs text-white/60 space-y-2.5">
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-amber-400" /> Interactive Table</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-amber-400" /> Molecule Explorer</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-amber-400" /> Reagent &amp; reactions</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-amber-400" /> Color vaults</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── 5. NOTES-FIRST SECTION (High-Premium Card) ────────────────── */}
        <section className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-[#111827] to-[#0f1d3a] p-8 md:p-10 space-y-6">
          <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-cyan-500/5 to-transparent pointer-events-none" />
          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-[10px] font-bold border border-cyan-500/20 uppercase tracking-wider">
                <FileText className="h-3 w-3" /> Academically Structured
              </span>
              <h2 className="text-3xl font-black text-white leading-tight">Verified Chapter Notes Center</h2>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                Synergic Bond is built around strict, verified curriculum notes. Access detailed theory, step-wise derivations, worked examples, NCERT-direct callouts, and quick revision sheets, designed by senior faculty.
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs text-white/60 pt-2">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> Short Revision Notes
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> Step-by-Step Derivations
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> Pure Formula Sheets
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> NCERT Highlights
                </div>
              </div>
            </div>
            
            <div className="shrink-0 flex flex-col items-center justify-center gap-2 p-6 rounded-2xl bg-black/40 border border-white/[0.06] text-center w-full md:w-64 backdrop-blur-md">
              <span className="text-[10px] font-bold text-white/40 uppercase tracking-wider">Visual Library</span>
              <span className="text-3xl font-black text-white">100% Free</span>
              <span className="text-[10px] text-white/50">Core chapters always unlocked</span>
              <Link href="/notes" className="mt-4 w-full text-center rounded-xl bg-cyan-500 px-4 py-3 text-xs font-bold text-black hover:bg-cyan-400 hover:scale-[1.02] transition-all duration-300 shadow-[0_4px_16px_rgba(6,182,212,0.25)]">
                Open Notes Explorer &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* ── 6. AI CHEMISTRY TUTOR SECTION ───────────────────────────── */}
        <section className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-[10px] font-bold border border-purple-500/20 uppercase tracking-wider">
              <Brain className="h-3 w-3" /> Generative AI Integration
            </span>
            <h2 className="text-3xl font-black text-white">Your 24/7 Intelligent Chemistry Coach</h2>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
              Stuck on a tricky coordination chemistry mechanism or a thermodynamic calculation? Our AI Tutor acts as a personal coach, offering step-by-step solutions, conceptual breakdown hints, and detailed grading of subjective worksheets.
            </p>
            <div className="grid gap-3 pt-2 text-xs text-white/70">
              <div className="flex gap-2">
                <span className="text-purple-400 font-bold">✓</span> Real-time doubt-solving with LaTeX math support.
              </div>
              <div className="flex gap-2">
                <span className="text-purple-400 font-bold">✓</span> Evaluation report highlighting strengths and weaknesses.
              </div>
            </div>
          </div>
          
          <div className="p-6 rounded-3xl border border-white/[0.08] bg-[#111827]/70 backdrop-blur-md space-y-4">
            <h3 className="text-xs font-bold text-white/40 uppercase tracking-wider">Ask AI Tutor</h3>
            <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.06] text-xs space-y-2">
              <p className="text-purple-300 font-bold">Student Query:</p>
              <p className="text-white/60 font-mono">Why is electron gain enthalpy of fluorine less negative than chlorine?</p>
            </div>
            <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-500/20 text-xs space-y-2">
              <p className="text-emerald-300 font-bold">AI Coach Explanation:</p>
              <p className="text-white/70 leading-relaxed">
                Due to the compact size of the fluorine atom, there is strong inter-electronic repulsion in its relatively small 2p subshell. Incoming electrons experience repulsion, making the enthalpy change less negative than that of chlorine (which has a larger 3p subshell).
              </p>
            </div>
          </div>
        </section>

        {/* ── 7. PROGRAMS SECTION (Horizontal Visual Grid) ─────────────── */}
        <section id="programs" className="space-y-8 relative">
          <div className="absolute left-0 bottom-0 h-48 w-48 rounded-full bg-cyan-500/[0.03] blur-3xl pointer-events-none" />
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-black text-white">Explore Our Programs</h2>
            <p className="text-xs sm:text-sm text-white/50 max-w-xl mx-auto">
              Direct access to exam hubs. Slugs mapped to master syllabus.
            </p>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {[
              { board: "SCHOOL BOARDS", name: "CBSE Class 11", href: "/dashboard/cbse/class-11" },
              { board: "SCHOOL BOARDS", name: "CBSE Class 12", href: "/dashboard/cbse/class-12" },
              { board: "SCHOOL BOARDS", name: "ISC Class 11", href: "/dashboard/icse/class-11" },
              { board: "SCHOOL BOARDS", name: "ISC Class 12", href: "/dashboard/icse/class-12" },
              { board: "COMPETITIVE", name: "NEET Prep", href: "/programs/neet" },
              { board: "COMPETITIVE", name: "JEE Main Prep", href: "/programs/jee-main" },
              { board: "COMPETITIVE", name: "JEE Advanced Prep", href: "/programs/jee-advanced" },
              { board: "COMPETITIVE", name: "Olympiad Prep", href: "/programs/olympiad" }
            ].map((p, i) => (
              <Link key={i} href={p.href} className="p-5 rounded-2xl border border-white/[0.06] bg-[#111827]/40 hover:bg-[#111827] hover:border-cyan-400/30 hover:scale-[1.03] transition-all duration-300 text-center space-y-1 block">
                <span className="block text-[9px] font-bold text-white/45 tracking-widest">{p.board}</span>
                <span className="block text-sm font-black text-white">{p.name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── 8. WHY STUDENTS CHOOSE SYNERGIC BOND ───────────────────────── */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-black text-white">Why Students Choose Synergic Bond</h2>
            <p className="text-xs sm:text-sm text-white/50">Designed around deep academic outcomes.</p>
          </div>
          
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {[
              { title: "Chemistry-Only Focus", desc: "We do not generalize. By focusing solely on chemistry, we build extreme depth in atomic structures, organic pathways, and complex equations." },
              { title: "AI Chemistry Tutor", desc: "Personalized step-by-step doubt-solving and grading feedback available 24/7." },
              { title: "Chapter-wise Notes", desc: "Verified detailed theory, short notes, formula sheets, and derivations in one place." },
              { title: "PYQs & Mock Tests", desc: "Real previous year questions and timed exam simulations to build test readiness." },
              { title: "Board + Entrance Preparation", desc: "Aligning school-board descriptive answers alongside competitive objective question formats." },
              { title: "Visual Learning Tools", desc: "Interactive visual aids including periodic tables, reagent lists, and compound colors." }
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-2xl border border-white/[0.06] bg-[#111827]/50 hover:bg-[#111827] hover:border-cyan-500/20 transition-all duration-300 space-y-2">
                <h3 className="text-sm font-bold text-white">{item.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
            <div className="p-6 rounded-2xl border border-cyan-500/20 bg-cyan-950/20 sm:col-span-2 md:col-span-3 text-center space-y-1">
              <h3 className="text-sm font-bold text-cyan-300">Affordable Access</h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Sustaining high-quality preparatory tools at a low cost for students nationwide.
              </p>
            </div>
          </div>
        </section>

        {/* ── 9. STUDENT IMPACT / TESTIMONIALS ─────────────────────────── */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-black text-white">Humble Student Feedback</h2>
            <p className="text-xs sm:text-sm text-white/50">Real experiences from independent learners using our platform.</p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { quote: "Quality chemistry guidance is not always available in smaller cities. The platform gave me access to organized learning resources that I could use from home.", name: "Rohan S.", tag: "Small-Town Student" },
              { quote: "Managing Board exams and entrance preparation together was overwhelming. Having both preparation paths organized in one place saved time and reduced confusion.", name: "Anjali K.", tag: "Board + NEET Prep" },
              { quote: "I wanted to strengthen my chemistry concepts at my own pace. The structured notes and practice tools helped me learn independently.", name: "Vikram M.", tag: "Self Learner" }
            ].map((t, i) => (
              <div key={i} className="p-6 rounded-2xl border border-white/[0.06] bg-[#111827]/40 backdrop-blur-md space-y-4 flex flex-col justify-between">
                <p className="text-xs text-white/70 italic leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="border-t border-white/[0.06] pt-3">
                  <span className="block text-xs font-bold text-white">{t.name}</span>
                  <span className="block text-[10px] text-white/40">{t.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 10. FINAL CTA (Stunning Gradient Overlay) ───────────────── */}
        <section className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-[#111827] to-[#0f1d3a] p-10 text-center space-y-6">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-56 w-56 rounded-full bg-cyan-500/10 blur-[100px]" />
          </div>
          
          <div className="relative space-y-3 max-w-lg mx-auto">
            <h2 className="text-2xl md:text-3xl font-black text-white leading-tight">Start Mastering Chemistry Today</h2>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
              Chemistry education should be organized, visual, intelligent and accessible. Join the mission to learn chemistry conceptually.
            </p>
          </div>
          
          <div className="relative flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link href="/programs" className="rounded-xl bg-cyan-500 px-6 py-3 text-xs font-bold text-black hover:bg-cyan-400 hover:scale-[1.03] transition-all duration-300 shadow-[0_4px_16px_rgba(6,182,212,0.25)]">
              Start Learning
            </Link>
            <Link href="#programs" className="rounded-xl border border-white/10 bg-white/[0.02] px-6 py-3 text-xs font-bold text-white/80 hover:bg-white/[0.06] transition-all duration-300">
              View Programs
            </Link>
            <Link href="/pricing" className="rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-6 py-3 text-xs font-bold text-cyan-300 hover:bg-cyan-500/20 transition-all duration-300">
              Explore Pro Plans
            </Link>
          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}
