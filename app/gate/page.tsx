import Link from "next/link";

const tools = [
  { icon: "📘", label: "AI Notes", desc: "GATE-level depth with derivations", href: "/notes?exam=GATE&difficulty=gate", color: "border-violet-700 hover:border-violet-500" },
  { icon: "📝", label: "Assignments", desc: "MCQ + Numerical Answer Type (NAT)", href: "/assignment?exam=GATE&difficulty=hard", color: "border-violet-700 hover:border-violet-500" },
  { icon: "🧪", label: "Quiz", desc: "GATE pattern +1/+2 marks questions", href: "/quiz?exam=GATE", color: "border-violet-700 hover:border-violet-500" },
  { icon: "📋", label: "Mock Exam", desc: "Full GATE Chemistry mock paper", href: "/exam?exam=GATE", color: "border-violet-700 hover:border-violet-500" },
  { icon: "🤖", label: "AI Tutor", desc: "Graduate-level chemistry explained", href: "/tutor?exam=GATE", color: "border-violet-700 hover:border-violet-500" },
  { icon: "📊", label: "Formula Vault", desc: "All GATE formulas in one place", href: "/vault/formulas", color: "border-violet-700 hover:border-violet-500" },
];

const topics = [
  { label: "Physical Chemistry", items: ["Quantum Chemistry", "Statistical Thermodynamics", "Chemical Kinetics", "Electrochemistry", "Group Theory", "Spectroscopy"] },
  { label: "Organic Chemistry", items: ["Reaction Mechanisms", "Stereochemistry", "Heterocyclic Chemistry", "Polymer Chemistry", "Photochemistry", "Pericyclic Reactions"] },
  { label: "Inorganic Chemistry", items: ["Symmetry & Group Theory", "Organometallic Chemistry", "Bioinorganic Chemistry", "Solid State Chemistry", "Nuclear Chemistry"] },
];

export default function GATEPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="border-b border-white/10 bg-gradient-to-b from-violet-950/30 to-black px-6 py-16 text-center">
        <div className="text-xs font-bold uppercase tracking-widest text-violet-400 mb-3">Engineering Chemistry</div>
        <h1 className="text-5xl font-black tracking-tight mb-4">GATE Chemistry</h1>
        <p className="text-zinc-400 max-w-xl mx-auto text-lg">
          Graduate-level chemistry for GATE — higher studies, M.Sc. entrance, research positions.
        </p>
        <div className="flex gap-3 justify-center mt-6 flex-wrap">
          <span className="px-3 py-1 rounded-full border border-violet-700 text-violet-300 text-sm">MCQ: +1/+2 marks</span>
          <span className="px-3 py-1 rounded-full border border-violet-700 text-violet-300 text-sm">NAT: Numerical Answer</span>
          <span className="px-3 py-1 rounded-full border border-violet-700 text-violet-300 text-sm">Graduate Level</span>
          <span className="px-3 py-1 rounded-full border border-violet-700 text-violet-300 text-sm">3 Hour Exam</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-2">Your AI Tools for GATE</h2>
          <p className="text-zinc-500 mb-6">Pre-configured for GATE Chemistry level</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {tools.map((t) => (
              <Link key={t.label} href={t.href}
                className={`bg-zinc-900 border ${t.color} rounded-2xl p-5 transition group`}>
                <div className="text-3xl mb-3">{t.icon}</div>
                <div className="font-bold text-white group-hover:text-violet-300 transition">{t.label}</div>
                <div className="text-zinc-500 text-sm mt-1">{t.desc}</div>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">GATE Syllabus</h2>
          <p className="text-zinc-500 mb-6">Click any topic → graduate-level AI notes instantly</p>
          <div className="grid md:grid-cols-3 gap-6">
            {topics.map((cat) => (
              <div key={cat.label} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
                <div className="font-bold text-violet-400 mb-3">{cat.label}</div>
                <div className="space-y-2">
                  {cat.items.map((topic) => (
                    <Link key={topic} href={`/notes?topic=${encodeURIComponent(topic)}&exam=GATE&difficulty=gate`}
                      className="flex items-center justify-between text-sm text-zinc-300 hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition">
                      <span>{topic}</span>
                      <span className="text-zinc-600">→</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
