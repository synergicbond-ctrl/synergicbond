import Link from "next/link";
import { 
  Sparkles, Globe, Heart, Compass, Cpu, Target, 
  GraduationCap, Microscope, BookOpen, Layers
} from "lucide-react";

export const metadata = {
  title: "Our Mission & Vision — SYNERGIC BOND",
  description:
    "Democratizing quality chemistry education through advanced technology, adaptive learning, and student-first accessibility.",
};

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white selection:bg-cyan-500/30">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 md:py-20 space-y-16">
        
        {/* ── HEADER: The Grand Mission ─────────────────────────────────── */}
        <header className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/10 px-4 py-1.5 text-cyan-300 text-xs font-bold tracking-wider uppercase">
            <Heart className="h-3.5 w-3.5 text-cyan-400 animate-pulse" /> Student-First Education
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-none bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent">
            Democratizing Quality Chemistry Education
          </h1>
          <p className="max-w-2xl mx-auto text-white/60 text-sm md:text-base leading-relaxed">
            We believe that high-quality, conceptual chemistry instruction is a fundamental right. 
            By blending pedagogical expertise with intelligent technology, we are building 
            an accessible ecosystem for every chemistry student worldwide.
          </p>
        </header>

        {/* ── A. OUR MISSION & B. WHY WE EXIST ────────────────────────── */}
        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/[0.08] bg-[#111827] p-6 md:p-8 space-y-3">
            <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/25">
              <Compass className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-black text-white">Our Mission</h2>
            <p className="text-xs text-white/55 leading-relaxed">
              Every student deserves access to world-class chemistry instruction, regardless of 
              geography, school infrastructure, or economic background. We maintain robust 
              free-tier modules, including visual reference utilities and essential learning chapters, 
              ensuring that core educational resources remain open to all.
            </p>
          </div>

          <div className="rounded-3xl border border-white/[0.08] bg-[#111827] p-6 md:p-8 space-y-3">
            <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-purple-500/10 text-purple-300 border border-purple-500/25">
              <GraduationCap className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-black text-white">Why We Exist</h2>
            <p className="text-xs text-white/55 leading-relaxed">
              Traditional classrooms often struggle to provide personalized pace and deep 
              conceptual clarity. We exist to bridge this gap. By offering student-first, 
              concept-driven study paths that replace rote memorization with visualization, 
              we cultivate lifelong learning outcomes and scientific curiosity.
            </p>
          </div>
        </section>

        {/* ── C. TECHNOLOGY FOR EDUCATION ─────────────────────────────────── */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-black text-white flex items-center justify-center gap-2">
              <Cpu className="h-6 w-6 text-cyan-400" /> Technology for Education
            </h2>
            <p className="text-xs text-white/50 max-w-xl mx-auto">
              Our pedagogical engines utilize artificial intelligence to design adaptive learning loops.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="p-5 rounded-2xl border border-white/[0.05] bg-black/20 space-y-2">
              <h3 className="text-sm font-bold text-cyan-300">Intelligent Doubt Solving</h3>
              <p className="text-xs text-white/50 leading-relaxed">
                Instant explanation engines trained to break down complex physical chemistry equations 
                and organic synthesis steps.
              </p>
            </div>
            <div className="p-5 rounded-2xl border border-white/[0.05] bg-black/20 space-y-2">
              <h3 className="text-sm font-bold text-violet-300">Personalized Pathways</h3>
              <p className="text-xs text-white/50 leading-relaxed">
                Adaptive study plans that identify conceptual weak areas and recommend tailored practice modules.
              </p>
            </div>
            <div className="p-5 rounded-2xl border border-white/[0.05] bg-black/20 space-y-2">
              <h3 className="text-sm font-bold text-emerald-300">Smart Revision Systems</h3>
              <p className="text-xs text-white/50 leading-relaxed">
                Retrieval practice tools that track performance trends to suggest high-impact revision chapters.
              </p>
            </div>
          </div>
        </section>

        {/* ── D. THE FUTURE WE ARE BUILDING ────────────────────────────── */}
        <section className="rounded-3xl border border-white/[0.08] bg-[#111827] p-6 md:p-8 space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-black text-white flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-yellow-400" /> The Future We Are Building
            </h2>
            <p className="text-xs text-white/50">
              Our engineering roadmap leverages next-generation technologies to change how chemistry is learned:
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 text-xs">
            <div className="flex gap-3">
              <span className="text-cyan-400 font-bold font-mono">01</span>
              <div>
                <h4 className="font-bold text-white">AI Chemistry Tutor & Companion</h4>
                <p className="text-white/50 mt-0.5">An interactive conversation partner for step-by-step molecular mechanics.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-cyan-400 font-bold font-mono">02</span>
              <div>
                <h4 className="font-bold text-white">Intelligent Learning Analytics</h4>
                <p className="text-white/50 mt-0.5">Concept-by-concept mastery maps detailing exact readiness metrics.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-cyan-400 font-bold font-mono">03</span>
              <div>
                <h4 className="font-bold text-white">Interactive Simulations & Virtual Labs</h4>
                <p className="text-white/50 mt-0.5">A sandbox to experiment with atomic configurations and reaction kinetics safely.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-cyan-400 font-bold font-mono">04</span>
              <div>
                <h4 className="font-bold text-white">Multimodal Board Evaluation</h4>
                <p className="text-white/50 mt-0.5">AI-powered grading of subjective worksheets mapped directly to board schemes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── E. IMPACT WE WANT TO CREATE ─────────────────────────────────── */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-black text-white flex items-center justify-center gap-2">
              <Globe className="h-6 w-6 text-cyan-400" /> Impact We Want to Create
            </h2>
            <p className="text-xs text-white/50 max-w-xl mx-auto">
              Our core objective is geographic and systemic reach, supporting:
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-4 text-center">
            <div className="p-4 rounded-xl border border-white/[0.04] bg-white/[0.02]">
              <span className="block text-sm font-bold text-white">School Boards</span>
              <span className="block text-[10px] text-white/40 mt-1">Class 11 &amp; 12</span>
            </div>
            <div className="p-4 rounded-xl border border-white/[0.04] bg-white/[0.02]">
              <span className="block text-sm font-bold text-white">JEE &amp; NEET</span>
              <span className="block text-[10px] text-white/40 mt-1">Entrance Aspirants</span>
            </div>
            <div className="p-4 rounded-xl border border-white/[0.04] bg-white/[0.02]">
              <span className="block text-sm font-bold text-white">Olympiads</span>
              <span className="block text-[10px] text-white/40 mt-1">Advanced Chemistry</span>
            </div>
            <div className="p-4 rounded-xl border border-white/[0.04] bg-white/[0.02]">
              <span className="block text-sm font-bold text-white">Rural &amp; Towns</span>
              <span className="block text-[10px] text-white/40 mt-1">Unrestricted Access</span>
            </div>
          </div>
        </section>

        {/* ── SUSTAINING THE MISSION ──────────────────────────────────────── */}
        <section className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-[#111827] to-[#0f1d3a] p-8 text-center space-y-4">
          <div className="absolute inset-0">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
          </div>
          <div className="relative space-y-2">
            <h2 className="text-xl md:text-2xl font-black text-white">Join the Educational Mission</h2>
            <p className="text-xs text-white/60 max-w-lg mx-auto">
              Our Pro subscriptions fund ongoing server compute, AI tokens, and keep free chapters
              fully open for students from small-towns and government schools.
            </p>
          </div>
          <div className="relative pt-2">
            <Link
              href="/pricing"
              className="inline-block rounded-xl bg-cyan-500 text-black px-6 py-3 text-sm font-bold hover:bg-cyan-400 transition"
            >
              Explore Pro Plans →
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
