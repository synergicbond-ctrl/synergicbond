import AboutVision from "@/components/AboutVision";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Sparkles, Target, GraduationCap, Flame, Bot, BookOpen, Microscope, Globe
} from "lucide-react";

export const metadata = {
  title: "Our Story & Mission — SYNERGIC BOND",
  description: "Why SYNERGIC BOND exists — the Chemistry Operating System engineered by 18+ year rank-producing faculty to make you fall in love with chemistry.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white flex flex-col justify-between">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-12 text-center px-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-4xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-1.5 text-cyan-300 text-xs font-bold tracking-wider">
            <Sparkles className="h-3.5 w-3.5" /> OUR STORY &amp; MISSION
          </div>
          <h1 className="text-4xl md:text-7xl font-black leading-tight tracking-tight">
            Democratizing{" "}
            <span className="bg-gradient-to-r from-[#00F5D4] via-[#00BBF9] to-[#9B5DE5] bg-clip-text text-transparent">
              Elite Chemistry
            </span>{" "}
            Education
          </h1>
          <p className="max-w-2xl mx-auto text-white/70 text-sm md:text-base leading-relaxed">
            Chemistry shouldn&apos;t feel like a disconnected maze of rote-memorization traps. We build the Chemistry Operating System (OS) — a structured intelligence layer that connects reactions, reagents, formulas, and PYQ data into one visual, intuitive network.
          </p>
        </div>
      </section>

      {/* The Founder Pedigree Section */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[#111827] to-[#111827]/40 p-8 md:p-12 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 relative">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center p-6 text-center">
              <div className="space-y-4">
                <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-[#00F5D4] to-[#9B5DE5] flex items-center justify-center text-black text-2xl font-black">
                  SB
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-white">18+ Years Pedigree</h3>
                  <p className="text-xs text-white/50">Elite JEE Advanced / NEET Faculty</p>
                </div>
                <div className="pt-2 flex justify-center gap-2">
                  <span className="rounded-full bg-white/[0.05] border border-white/10 px-2 py-0.5 text-[10px] text-cyan-300">50K+ Trained</span>
                  <span className="rounded-full bg-white/[0.05] border border-white/10 px-2 py-0.5 text-[10px] text-purple-300">Top 100 Ranks</span>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-300 uppercase tracking-widest">
              <Flame className="h-4 w-4" /> The Expert Advantage
            </div>
            <h2 className="text-2xl md:text-3xl font-black">Authored by Real Educators, Not Scrapers</h2>
            <p className="text-sm text-white/70 leading-relaxed">
              Every single line of notes, every worked example, and every exam trap listed on SYNERGIC BOND has been hand-authored and double-checked by expert chemistry teachers. We don&apos;t scrape web content or feed raw, unverified AI answers. 
            </p>
            <blockquote className="border-l-2 border-cyan-400 pl-4 py-1 text-xs italic text-white/60">
              &ldquo;We don&apos;t teach you to pass. We engineer the mental models so that chemistry becomes pure intuition, not cramming.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* Trust Pillars: AI + Mentorship */}
      <section className="mx-auto max-w-5xl px-6 py-10 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl md:text-3xl font-black">The Chemistry OS Advantage</h2>
          <p className="text-sm text-white/50">Combining elite human pedagogy with high-yield AI speed.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/[0.06] bg-[#111827] p-6 space-y-3">
            <div className="h-10 w-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-300">
              <Bot className="h-5 w-5" />
            </div>
            <h3 className="font-extrabold text-base text-white">AI-Powered Doubt Solving</h3>
            <p className="text-xs text-white/60 leading-relaxed">
              Our Chemistry Tutor is fine-tuned on core chemistry textbooks and syllabi to give you instant, accurate, step-by-step conceptual breakdowns 24/7.
            </p>
          </div>
          <div className="rounded-2xl border border-white/[0.06] bg-[#111827] p-6 space-y-3">
            <div className="h-10 w-10 rounded-xl bg-purple-500/10 border border-purple-500/25 flex items-center justify-center text-purple-300">
              <Target className="h-5 w-5" />
            </div>
            <h3 className="font-extrabold text-base text-white">Syllabus-Locked Practice</h3>
            <p className="text-xs text-white/60 leading-relaxed">
              No mixed questions. If you prepare for NEET, you get NEET-specific questions. If you prepare for JEE Advanced, you get advanced multi-concept match matrices.
            </p>
          </div>
          <div className="rounded-2xl border border-white/[0.06] bg-[#111827] p-6 space-y-3">
            <div className="h-10 w-10 rounded-xl bg-sky-500/10 border border-sky-500/25 flex items-center justify-center text-sky-300">
              <Globe className="h-5 w-5" />
            </div>
            <h3 className="font-extrabold text-base text-white">Commitment to Impact</h3>
            <p className="text-xs text-white/60 leading-relaxed">
              At least 3 flagship chapters and daily doubt-solving queries are free for every registered user, forever. We also fund reference booklet handouts for needy students.
            </p>
          </div>
        </div>
      </section>

      {/* Trust & Achievements - AboutVision */}
      <AboutVision />

      {/* Conversion Focused Call-to-Action (CTA) Card */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-950/20 via-purple-950/25 to-[#0B0F19] p-8 md:p-12 text-center space-y-6 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-44 h-44 bg-cyan-400/5 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-purple-400/5 rounded-full blur-2xl" />
          
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
            Ready to Master Chemistry?
          </h2>
          <p className="max-w-xl mx-auto text-sm text-white/70 leading-relaxed">
            Unlock the complete Syllabus, Chapter Notes, Reagent Libraries, PYQ predictions, and unlimited Snap &amp; Solve questions. Start learning today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Link
              href="/pricing"
              className="rounded-xl bg-gradient-to-r from-[#00F5D4] to-[#00BBF9] px-6 py-3 text-sm font-bold text-black shadow-lg shadow-cyan-500/20 hover:opacity-90 transition"
            >
              Get Premium Access (Pro) →
            </Link>
            <Link
              href="/programs"
              className="rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold hover:bg-white/[0.08] transition"
            >
              Explore Free Chapters
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
