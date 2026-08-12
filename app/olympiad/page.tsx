import Link from "next/link";

const tools = [
  { icon: "📘", label: "AI Notes", desc: "INChO/IChO level — university depth", href: "/notes?exam=INChO&difficulty=incho", color: "border-violet-700 hover:border-violet-500" },
  { icon: "📝", label: "Assignments", desc: "Olympiad-style problems with full solutions", href: "/assignment?exam=INChO&difficulty=hard", color: "border-violet-700 hover:border-violet-500" },
  { icon: "🧪", label: "Quiz", desc: "NSEC pattern questions", href: "/quiz?exam=NSEC", color: "border-violet-700 hover:border-violet-500" },
  { icon: "📋", label: "Mock Exam", desc: "INChO / IChO mock paper", href: "/exam?exam=INChO", color: "border-violet-700 hover:border-violet-500" },
  { icon: "🤖", label: "AI Tutor", desc: "University-level chemistry explained", href: "/tutor?exam=INChO", color: "border-violet-700 hover:border-violet-500" },
  { icon: "👁️", label: "Mechanism Solver", desc: "Upload synthesis problem — get solution", href: "/tutor?tab=vision", color: "border-violet-700 hover:border-violet-500" },
];

const topics = [
  { label: "Theoretical Chemistry", items: ["Quantum Mechanics", "Spectroscopy (IR/NMR/MS)", "Chemical Thermodynamics", "Reaction Kinetics", "Electroanalytical Methods"] },
  { label: "Organic Synthesis", items: ["Retrosynthesis", "Asymmetric Synthesis", "Protecting Groups", "Cascade Reactions", "Natural Product Synthesis"] },
  { label: "Inorganic & Analytical", items: ["Group Theory & Symmetry", "Organometallics", "Bioinorganic Chemistry", "Gravimetric Analysis", "Chromatography"] },
];

export default function OlympiadPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="border-b border-white/10 bg-gradient-to-b from-violet-950/30 to-black px-6 py-16 text-center">
        <div className="text-xs font-bold uppercase tracking-widest text-violet-400 mb-3">International Level</div>
        <h1 className="text-5xl font-black tracking-tight mb-4">Chemistry Olympiad</h1>
        <p className="text-zinc-400 max-w-xl mx-auto text-lg">
          NSEC → INChO → IChO preparation. Advanced theoretical and practical chemistry beyond JEE.
        </p>
        <div className="flex gap-3 justify-center mt-6 flex-wrap">
          <span className="px-3 py-1 rounded-full border border-violet-700 text-violet-300 text-sm">NSEC</span>
          <span className="px-3 py-1 rounded-full border border-violet-700 text-violet-300 text-sm">INChO</span>
          <span className="px-3 py-1 rounded-full border border-violet-700 text-violet-300 text-sm">IChO</span>
          <span className="px-3 py-1 rounded-full border border-violet-700 text-violet-300 text-sm">USNCO</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-2">Your AI Tools for Olympiad</h2>
          <p className="text-zinc-500 mb-6">University-level content — hardest difficulty</p>
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
          <h2 className="text-2xl font-bold mb-2">Olympiad Topics</h2>
          <p className="text-zinc-500 mb-2">Advanced focus areas beyond the JEE syllabus.</p>
          {/* Honest state: a verified chapter-wise NSEC/INChO/IChO syllabus mapping is not
              authored yet — do not fake one. The JEE Advanced syllabus is the foundation. */}
          <p className="text-zinc-500 mb-6 text-sm">
            Chapter-wise Olympiad syllabus mapping is coming soon. Foundation: the{" "}
            <Link href="/jee" className="text-violet-300 font-semibold hover:text-violet-200">complete JEE Advanced syllabus →</Link>
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {topics.map((cat) => (
              <div key={cat.label} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
                <div className="font-bold text-violet-400 mb-3">{cat.label}</div>
                <div className="space-y-2">
                  {cat.items.map((topic) => (
                    <Link key={topic} href={`/notes?topic=${encodeURIComponent(topic)}&exam=INChO&difficulty=incho`}
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
