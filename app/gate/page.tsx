import Link from "next/link";

const tools = [
  { icon: "📘", label: "AI Notes", desc: "GATE-level depth with derivations", href: "/notes?exam=GATE&difficulty=gate" },
  { icon: "📝", label: "Assignments", desc: "MCQ + Numerical Answer Type (NAT)", href: "/assignment?exam=GATE&difficulty=hard" },
  { icon: "🧪", label: "Quiz", desc: "GATE pattern +1/+2 marks questions", href: "/quiz?exam=GATE" },
  { icon: "📋", label: "Mock Exam", desc: "Full GATE Chemistry mock paper", href: "/exam?exam=GATE" },
  { icon: "🤖", label: "AI Tutor", desc: "Graduate-level chemistry explained", href: "/tutor?exam=GATE" },
  { icon: "📊", label: "Formula Vault", desc: "All GATE formulas in one place", href: "/vault/formulas" },
];

const topics = [
  { label: "Physical Chemistry", items: ["Quantum Chemistry", "Statistical Thermodynamics", "Chemical Kinetics", "Electrochemistry", "Group Theory", "Spectroscopy"] },
  { label: "Organic Chemistry", items: ["Reaction Mechanisms", "Stereochemistry", "Heterocyclic Chemistry", "Polymer Chemistry", "Photochemistry", "Pericyclic Reactions"] },
  { label: "Inorganic Chemistry", items: ["Symmetry & Group Theory", "Organometallic Chemistry", "Bioinorganic Chemistry", "Solid State Chemistry", "Nuclear Chemistry"] },
];

export default function GATEPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-white">
      <div className="bg-[var(--surface)] border-b border-[var(--border)] px-6 py-16 text-center">
        <div className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-3">Engineering Chemistry</div>
        <h1 className="text-5xl font-black tracking-tight mb-4">GATE Chemistry</h1>
        <p className="text-zinc-400 max-w-xl mx-auto text-lg">
          Graduate-level chemistry for GATE — higher studies, M.Sc. entrance, research positions.
        </p>
        <div className="flex gap-3 justify-center mt-6 flex-wrap">
          <span className="px-3 py-1 rounded-full border border-[var(--border)] text-[var(--text-muted)] text-sm">MCQ: +1/+2 marks</span>
          <span className="px-3 py-1 rounded-full border border-[var(--border)] text-[var(--text-muted)] text-sm">NAT: Numerical Answer</span>
          <span className="px-3 py-1 rounded-full border border-[var(--border)] text-[var(--text-muted)] text-sm">Graduate Level</span>
          <span className="px-3 py-1 rounded-full border border-[var(--border)] text-[var(--text-muted)] text-sm">3 Hour Exam</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-2">Your AI Tools for GATE</h2>
          <p className="text-zinc-500 mb-6">Pre-configured for GATE Chemistry level</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {tools.map((t) => (
              <Link key={t.label} href={t.href}
                className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5 transition group">
                <div className="text-3xl mb-3">{t.icon}</div>
                <div className="font-bold text-white group-hover:text-[var(--accent)] transition">{t.label}</div>
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
              <div key={cat.label} className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5">
                <div className="font-bold text-[var(--accent)] mb-3">{cat.label}</div>
                <div className="space-y-2">
                  {cat.items.map((topic) => (
                    <Link key={topic} href={`/notes?topic=${encodeURIComponent(topic)}&exam=GATE&difficulty=gate`}
                      className="flex items-center justify-between text-sm text-zinc-300 hover:text-[var(--accent)] hover:bg-white/5 px-3 py-2 rounded-lg transition">
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
