import Link from "next/link";
import ExamSyllabus from "@/components/syllabus/ExamSyllabus";

const tools = [
  { icon: "📘", label: "AI Notes", desc: "JEE Advanced depth — mechanisms, derivations", href: "/notes?exam=JEE Advanced&difficulty=jee_advanced", color: "border-cyan-700 hover:border-cyan-500" },
  { icon: "📝", label: "Assignments", desc: "Multi-correct, numerical, matrix-match", href: "/assignment?exam=JEE Advanced&difficulty=hard", color: "border-cyan-700 hover:border-cyan-500" },
  { icon: "🧪", label: "Quiz", desc: "JEE Main pattern +4/-1", href: "/quiz?exam=JEE Main", color: "border-cyan-700 hover:border-cyan-500" },
  { icon: "📋", label: "Mock Exam", desc: "Full JEE Advanced paper with partial marking", href: "/exam?exam=JEE Advanced", color: "border-cyan-700 hover:border-cyan-500" },
  { icon: "🤖", label: "AI Tutor", desc: "Deep conceptual doubts solved instantly", href: "/tutor?exam=JEE Advanced", color: "border-cyan-700 hover:border-cyan-500" },
  { icon: "👁️", label: "Vision AI", desc: "Upload mechanism image — get full analysis", href: "/tutor?tab=vision", color: "border-cyan-700 hover:border-cyan-500" },
];

// Syllabus is rendered from the master-syllabus SSOT (see ExamSyllabus) —
// the old hardcoded topic list drifted from the official documents.

export default function JEEPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="border-b border-white/10 bg-gradient-to-b from-cyan-950/30 to-black px-6 py-16 text-center">
        <div className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">Advanced Chemistry</div>
        <h1 className="text-5xl font-black tracking-tight mb-4">JEE Chemistry</h1>
        <p className="text-zinc-400 max-w-xl mx-auto text-lg">
          Mechanisms, numerical problems, advanced concepts and rigorous problem solving for JEE Main & Advanced.
        </p>
        <div className="flex gap-3 justify-center mt-6 flex-wrap">
          <span className="px-3 py-1 rounded-full border border-cyan-700 text-cyan-300 text-sm">JEE Main: +4/-1</span>
          <span className="px-3 py-1 rounded-full border border-cyan-700 text-cyan-300 text-sm">JEE Advanced: Partial Marking</span>
          <span className="px-3 py-1 rounded-full border border-cyan-700 text-cyan-300 text-sm">Multi-correct Questions</span>
          <span className="px-3 py-1 rounded-full border border-cyan-700 text-cyan-300 text-sm">Numerical Answer Type</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-2">Your AI Tools for JEE</h2>
          <p className="text-zinc-500 mb-6">Pre-configured for JEE Advanced level</p>
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

        <ExamSyllabus
          exams={["JEE MAIN", "JEE ADVANCED"]}
          heading="JEE Syllabus (Main + Advanced)"
          blurb="Chapter tags show which paper covers each chapter"
        />
      </div>
    </main>
  );
}
