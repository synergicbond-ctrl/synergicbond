import Donation from "@/components/Donation";
import { 
  Sparkles, Globe, Compass, Cpu, Target, Users, BookOpen, Layers, 
  HelpCircle, GraduationCap, AlertCircle, Quote, Eye, ShieldCheck
} from "lucide-react";

export const metadata = {
  title: "Our Mission & Vision — SYNERGIC BOND",
  description:
    "Chemistry education should not depend on your ZIP code. We are building a world-class Chemistry learning ecosystem that is accessible, affordable, and available to every student.",
};

const TESTIMONIALS = [
  {
    quote: "Quality chemistry guidance is not always available in smaller cities. The platform gave me access to organized learning resources that I could use from home.",
    author: "Rohan S.",
    tag: "Small-Town Student"
  },
  {
    quote: "Managing Board exams and entrance preparation together was overwhelming. Having both preparation paths organized in one place saved time and reduced confusion.",
    author: "Anjali K.",
    tag: "Board + Entrance Prep"
  },
  {
    quote: "I wanted to strengthen my chemistry concepts at my own pace. The structured notes and practice tools helped me learn independently.",
    author: "Vikram M.",
    tag: "Self Learner"
  }
];

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white selection:bg-cyan-500/30 font-sans pb-16">
      
      {/* ── SECTION 1: HERO ───────────────────────────────────────────── */}
      <header className="relative overflow-hidden border-b border-white/[0.06] bg-gradient-to-b from-[#111827]/40 to-transparent py-16 md:py-24 px-4 sm:px-6">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute right-10 top-20 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/10 px-4 py-1.5 text-cyan-300 text-xs font-bold tracking-wider uppercase">
            Our Mission &amp; Purpose
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none text-white">
            Chemistry Education Should Not Depend on Your ZIP Code
          </h1>
          <p className="max-w-2xl mx-auto text-white/70 text-sm md:text-base leading-relaxed">
            A student in a metropolitan city and a student in a small town deserve the same opportunity to learn, compete, and succeed.
          </p>
          <p className="max-w-2xl mx-auto text-white/50 text-xs md:text-sm">
            Synergic Bond exists to make high-quality Chemistry education accessible through verified content, intelligent technology, and affordable learning tools. We believe talent is distributed everywhere. Opportunity should be too.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 space-y-16">

        {/* ── SECTION 2: WHY WE EXIST ──────────────────────────────────── */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-cyan-300 font-bold text-xs uppercase tracking-wider">
              <Compass className="h-4.5 w-4.5" /> Why We Exist
            </div>
            <h2 className="text-2xl font-black text-white">Addressing Core Challenges in Student Prep</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="p-5 rounded-2xl border border-white/[0.06] bg-[#111827] space-y-2">
              <h3 className="text-sm font-bold text-white">Limited Access to Experienced Teachers</h3>
              <p className="text-xs text-white/50 leading-relaxed">
                Top-tier pedagogy is often clustered in a few education hubs, leaving millions of students with restricted academic support.
              </p>
            </div>
            <div className="p-5 rounded-2xl border border-white/[0.06] bg-[#111827] space-y-2">
              <h3 className="text-sm font-bold text-white">Expensive Coaching Ecosystems</h3>
              <p className="text-xs text-white/50 leading-relaxed">
                Conventional preparatory institutes charge massive tuition fees, turning quality guidance into a luxury resource.
              </p>
            </div>
            <div className="p-5 rounded-2xl border border-white/[0.06] bg-[#111827] space-y-2">
              <h3 className="text-sm font-bold text-white">Lack of Quality Study Material</h3>
              <p className="text-xs text-white/50 leading-relaxed">
                Many online resources are copy-pasted, inconsistent, or lack verified, single-source-of-truth depth.
              </p>
            </div>
            <div className="p-5 rounded-2xl border border-white/[0.06] bg-[#111827] space-y-2">
              <h3 className="text-sm font-bold text-white">Balancing Boards &amp; Entrance Prep</h3>
              <p className="text-xs text-white/50 leading-relaxed">
                Students are forced to jump between subjective school boards curricula and objective competitive patterns, creating massive cognitive load.
              </p>
            </div>
          </div>
          <div className="p-5 rounded-2xl border border-cyan-500/25 bg-cyan-500/5 text-center text-xs text-cyan-300">
            <strong>The Synergic Bond Solution:</strong> We provide a single, unified Chemistry workspace where Board theory, entrance level numerical cards, and AI-powered feedback live together seamlessly.
          </div>
        </section>

        {/* ── SECTION 3: THE PROBLEM WE ARE TRYING TO SOLVE ────────────── */}
        <section className="rounded-3xl border border-white/[0.08] bg-[#111827] p-6 md:p-8 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider">
              <AlertCircle className="h-4.5 w-4.5" /> The Problem We Are Trying to Solve
            </div>
            <h2 className="text-2xl font-black text-white">The Preparatory Migration Barrier</h2>
          </div>
          <p className="text-xs text-white/60 leading-relaxed">
            Every year, hundreds of thousands of students leave their hometowns and families to live in crowded coaching hubs, incurring high living expenses and mental stress. Those who cannot afford to migrate are left to prepare without access to experienced teachers.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 text-xs text-white/50 border-t border-white/[0.06] pt-4">
            <div className="flex gap-2">
              <span className="text-rose-400 font-bold font-mono">•</span> High geographical and financial preparation barriers.
            </div>
            <div className="flex gap-2">
              <span className="text-rose-400 font-bold font-mono">•</span> Gaps in reliable structured learning tools.
            </div>
          </div>
          <div className="p-5 rounded-2xl border border-white/10 bg-black/30 space-y-2">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider text-center text-xs">Our Mission Statement</h3>
            <p className="text-sm text-center text-white/70 italic">
              "Provide a world-class Chemistry learning ecosystem that is accessible, affordable, and available to every student."
            </p>
          </div>
        </section>

        {/* ── SECTION 4: WHAT WE ARE BUILDING ──────────────────────────── */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-cyan-300 font-bold text-xs uppercase tracking-wider">
              <Cpu className="h-4.5 w-4.5" /> What We Are Building
            </div>
            <h2 className="text-2xl font-black text-white">Educational Technology for Deep Chemistry Learning</h2>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="p-5 rounded-2xl border border-white/[0.05] bg-black/20 space-y-2">
              <h3 className="text-sm font-bold text-cyan-300">AI Chemistry Tutor</h3>
              <p className="text-xs text-white/55 leading-relaxed">
                Step-by-step conceptual chat support capable of detailing reaction pathways, molecular structures, and stoichiometry.
              </p>
            </div>
            <div className="p-5 rounded-2xl border border-white/[0.05] bg-black/20 space-y-2">
              <h3 className="text-sm font-bold text-violet-300">Intelligent Learning Paths</h3>
              <p className="text-xs text-white/55 leading-relaxed">
                Personalized sequences tailored to direct student performance logs, optimizing weak area coverage.
              </p>
            </div>
            <div className="p-5 rounded-2xl border border-white/[0.05] bg-black/20 space-y-2">
              <h3 className="text-sm font-bold text-emerald-300">Smart Revision Systems</h3>
              <p className="text-xs text-white/55 leading-relaxed">
                Retrieval practice tools highlighting essential memory formulas, exceptions, and key takeaways.
              </p>
            </div>
            <div className="p-5 rounded-2xl border border-white/[0.05] bg-black/20 space-y-2">
              <h3 className="text-sm font-bold text-rose-300">Board Answer Evaluation</h3>
              <p className="text-xs text-white/55 leading-relaxed">
                Multimodal AI grading system providing constructive feedback on student-uploaded subjective chemistry scripts.
              </p>
            </div>
            <div className="p-5 rounded-2xl border border-white/[0.05] bg-black/20 space-y-2">
              <h3 className="text-sm font-bold text-amber-300">Virtual Chemistry Labs</h3>
              <p className="text-xs text-white/55 leading-relaxed">
                Simulated lab experiments focusing on salt analysis, compound coloration, and reaction kinetics.
              </p>
            </div>
            <div className="p-5 rounded-2xl border border-white/[0.05] bg-black/20 space-y-2">
              <h3 className="text-sm font-bold text-sky-300">Performance Analytics</h3>
              <p className="text-xs text-white/55 leading-relaxed">
                Concept accuracy trends and preparation metrics tracked automatically as you attempt daily challenges.
              </p>
            </div>
          </div>
        </section>

        {/* ── SECTION 5: WHO WE WANT TO REACH ──────────────────────────── */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-cyan-300 font-bold text-xs uppercase tracking-wider">
              <Users className="h-4.5 w-4.5" /> Who We Want to Reach
            </div>
            <h2 className="text-2xl font-black text-white">Supporting Every Chemistry Learner</h2>
          </div>
          <div className="grid gap-3 grid-cols-2 sm:grid-cols-4 text-center text-xs">
            <div className="p-4 rounded-xl border border-white/[0.06] bg-[#111827] font-semibold text-white/80">Board Students</div>
            <div className="p-4 rounded-xl border border-white/[0.06] bg-[#111827] font-semibold text-white/80">JEE Aspirants</div>
            <div className="p-4 rounded-xl border border-white/[0.06] bg-[#111827] font-semibold text-white/80">NEET Aspirants</div>
            <div className="p-4 rounded-xl border border-white/[0.06] bg-[#111827] font-semibold text-white/80">Olympiad Students</div>
            <div className="p-4 rounded-xl border border-white/[0.06] bg-[#111827] font-semibold text-white/80">Small-Town Students</div>
            <div className="p-4 rounded-xl border border-white/[0.06] bg-[#111827] font-semibold text-white/80">Rural Students</div>
            <div className="p-4 rounded-xl border border-white/[0.06] bg-[#111827] font-semibold text-white/80">Govt School Students</div>
            <div className="p-4 rounded-xl border border-white/[0.06] bg-[#111827] font-semibold text-white/80">Self Learners</div>
          </div>
        </section>

        {/* ── SECTION 6: STUDENT IMPACT STORIES ────────────────────────── */}
        <section className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-cyan-300 font-bold text-xs uppercase tracking-wider">
              <Quote className="h-4.5 w-4.5" /> Impact Stories
            </div>
            <h2 className="text-2xl font-black text-white">Feedback From Independent Students</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="p-5 rounded-2xl border border-white/[0.06] bg-[#111827] flex flex-col justify-between space-y-4">
                <p className="text-xs text-white/70 italic leading-relaxed">"{t.quote}"</p>
                <div>
                  <span className="block text-xs font-bold text-white">{t.author}</span>
                  <span className="block text-[10px] text-white/40 mt-0.5">{t.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 7: LONG-TERM VISION ─────────────────────────────── */}
        <section className="rounded-3xl border border-white/[0.08] bg-[#111827] p-6 md:p-8 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-yellow-400 font-bold text-xs uppercase tracking-wider">
              <Eye className="h-4.5 w-4.5" /> Long-Term Vision
            </div>
            <h2 className="text-2xl font-black text-white">The Future of Science Education</h2>
          </div>
          <ul className="space-y-3 text-xs text-white/70">
            <li className="flex gap-2.5 leading-relaxed">
              <span className="h-2 w-2 shrink-0 rounded-full bg-yellow-400 mt-1.5" />
              <span>Every chemistry student having real-time access to a personal AI companion.</span>
            </li>
            <li className="flex gap-2.5 leading-relaxed">
              <span className="h-2 w-2 shrink-0 rounded-full bg-yellow-400 mt-1.5" />
              <span>Personalized curricula adjusting dynamically to a student&apos;s distinct conceptual weak areas.</span>
            </li>
            <li className="flex gap-2.5 leading-relaxed">
              <span className="h-2 w-2 shrink-0 rounded-full bg-yellow-400 mt-1.5" />
              <span>Advanced educational technology directly complementing high-quality human teaching.</span>
            </li>
            <li className="flex gap-2.5 leading-relaxed">
              <span className="h-2 w-2 shrink-0 rounded-full bg-yellow-400 mt-1.5" />
              <span>Cost and geographic distance completely eliminated as barriers to learning opportunities.</span>
            </li>
          </ul>
        </section>

        {/* ── SECTION 8: SUPPORT THE MISSION ──────────────────────────── */}
        <Donation />

      </div>
    </main>
  );
}
