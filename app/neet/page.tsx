import Link from "next/link";
import ExamSyllabus from "@/components/syllabus/ExamSyllabus";

const tools = [
  { icon: "📘", label: "AI Notes", desc: "NCERT-aligned notes for any topic", href: "/notes?exam=NEET&difficulty=ncert", color: "border-cyan-700 hover:border-cyan-500" },
  { icon: "📝", label: "Assignments", desc: "NEET-pattern MCQ practice sets", href: "/assignment?exam=NEET&difficulty=medium", color: "border-cyan-700 hover:border-cyan-500" },
  { icon: "🧪", label: "Quiz", desc: "Chapter-wise NEET MCQs +4/-1", href: "/quiz?exam=NEET", color: "border-cyan-700 hover:border-cyan-500" },
  { icon: "📋", label: "Mock Exam", desc: "Full NEET mock paper — 180 questions", href: "/exam?exam=NEET", color: "border-cyan-700 hover:border-cyan-500" },
  { icon: "🤖", label: "AI Tutor", desc: "Ask any NCERT doubt in Hindi/English", href: "/tutor?exam=NEET", color: "border-cyan-700 hover:border-cyan-500" },
  { icon: "🔁", label: "Revision", desc: "5-min rapid revision for NEET", href: "/revision?exam=NEET", color: "border-cyan-700 hover:border-cyan-500" },
];

// Syllabus renders from the master-syllabus SSOT (see ExamSyllabus). The old
// hardcoded list had drifted (it still showed s-Block, which the rationalized
// NEET syllabus dropped).

export default function NEETPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <div className="border-b border-white/10 bg-gradient-to-b from-cyan-950/30 to-black px-6 py-16 text-center">
        <div className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">NCERT Mastery</div>
        <h1 className="text-5xl font-black tracking-tight mb-4">NEET Chemistry</h1>
        <p className="text-zinc-400 max-w-xl mx-auto text-lg">
          Complete NCERT-based preparation with AI guidance, PYQs, revision, and unlimited practice.
        </p>
        <div className="flex gap-3 justify-center mt-6 flex-wrap">
          <span className="px-3 py-1 rounded-full border border-cyan-700 text-cyan-300 text-sm">+4 / -1 Marking</span>
          <span className="px-3 py-1 rounded-full border border-cyan-700 text-cyan-300 text-sm">180 Questions</span>
          <span className="px-3 py-1 rounded-full border border-cyan-700 text-cyan-300 text-sm">NCERT Level</span>
          <span className="px-3 py-1 rounded-full border border-cyan-700 text-cyan-300 text-sm">Hindi / Hinglish / English</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* AI Tools */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-2">Your AI Tools for NEET</h2>
          <p className="text-zinc-500 mb-6">All tools pre-set to NEET difficulty — no configuration needed</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {tools.map((t) => (
              <Link key={t.label} href={t.href}
                className={`bg-zinc-900 border ${t.color} rounded-2xl p-5 transition group`}>
                <div className="text-3xl mb-3">{t.icon}</div>
                <div className="font-bold text-white group-hover:text-cyan-300 transition">{t.label}</div>
                <div className="text-zinc-500 text-sm mt-1">{t.desc}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Chapters — SSOT-driven */}
        <ExamSyllabus
          exams={["NEET"]}
          heading="NEET Syllabus — Chapter by Chapter"
          blurb="Rationalized NTA syllabus"
        />
      </div>
    </main>
  );
}
