import Link from "next/link";

const tools = [
  { icon: "📘", label: "AI Notes", desc: "INChO/IChO level — university depth", href: "/notes?exam=INChO&difficulty=incho" },
  { icon: "📝", label: "Assignments", desc: "Olympiad-style problems with full solutions", href: "/assignment?exam=INChO&difficulty=hard" },
  { icon: "🧪", label: "Quiz", desc: "NSEC pattern questions", href: "/quiz?exam=NSEC" },
  { icon: "📋", label: "Mock Exam", desc: "INChO / IChO mock paper", href: "/exam?exam=INChO" },
  { icon: "🤖", label: "AI Tutor", desc: "University-level chemistry explained", href: "/tutor?exam=INChO" },
  { icon: "👁️", label: "Mechanism Solver", desc: "Upload synthesis problem — get solution", href: "/tutor?tab=vision" },
];

const topics = [
  { label: "Theoretical Chemistry", items: ["Quantum Mechanics", "Spectroscopy (IR/NMR/MS)", "Chemical Thermodynamics", "Reaction Kinetics", "Electroanalytical Methods"] },
  { label: "Organic Synthesis", items: ["Retrosynthesis", "Asymmetric Synthesis", "Protecting Groups", "Cascade Reactions", "Natural Product Synthesis"] },
  { label: "Inorganic & Analytical", items: ["Group Theory & Symmetry", "Organometallics", "Bioinorganic Chemistry", "Gravimetric Analysis", "Chromatography"] },
];

export default function OlympiadPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="border-b border-[var(--border)] bg-[var(--surface)] px-6 py-16 text-center">
        <div className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-3">International Level</div>
        <h1 className="text-5xl font-black tracking-tight mb-4">Chemistry Olympiad</h1>
        <p className="text-[var(--text-muted)] max-w-xl mx-auto text-lg">
          NSEC → INChO → IChO preparation. Advanced theoretical and practical chemistry beyond JEE.
        </p>
        <div className="flex gap-3 justify-center mt-6 flex-wrap">
          <span className="px-3 py-1 rounded-full border border-[var(--border)] text-[var(--text-muted)] text-sm">NSEC</span>
          <span className="px-3 py-1 rounded-full border border-[var(--border)] text-[var(--text-muted)] text-sm">INChO</span>
          <span className="px-3 py-1 rounded-full border border-[var(--border)] text-[var(--text-muted)] text-sm">IChO</span>
          <span className="px-3 py-1 rounded-full border border-[var(--border)] text-[var(--text-muted)] text-sm">USNCO</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-2">Your AI Tools for Olympiad</h2>
          <p className="text-[var(--text-muted)] mb-6">University-level content — hardest difficulty</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {tools.map((t) => (
              <Link key={t.label} href={t.href}
                className="bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--border-strong)] rounded-lg p-5 transition group">
                <div className="text-3xl mb-3">{t.icon}</div>
                <div className="font-bold text-[var(--foreground)] group-hover:text-[var(--accent)] transition">{t.label}</div>
                <div className="text-[var(--text-muted)] text-sm mt-1">{t.desc}</div>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Olympiad Topics</h2>
          <p className="text-[var(--text-muted)] mb-2">Advanced focus areas beyond the JEE syllabus.</p>
          {/* Honest state: a verified chapter-wise NSEC/INChO/IChO syllabus mapping is not
              authored yet — do not fake one. The JEE Advanced syllabus is the foundation. */}
          <p className="text-[var(--text-muted)] mb-6 text-sm">
            Chapter-wise Olympiad syllabus mapping is coming soon. Foundation: the{" "}
            <Link href="/jee" className="text-[var(--accent)] font-semibold hover:underline">complete JEE Advanced syllabus →</Link>
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {topics.map((cat) => (
              <div key={cat.label} className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-5">
                <div className="font-bold text-[var(--text-muted)] mb-3">{cat.label}</div>
                <div className="space-y-2">
                  {cat.items.map((topic) => (
                    <Link key={topic} href={`/notes?topic=${encodeURIComponent(topic)}&exam=INChO&difficulty=incho`}
                      className="flex items-center justify-between text-sm text-[var(--foreground)] hover:text-white hover:bg-white/5 px-3 py-2 rounded-lg transition">
                      <span>{topic}</span>
                      <span className="text-[var(--text-muted)]">→</span>
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
