import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const vaultSections = [
  { title: "Favorite Chapters", icon: "⭐", desc: "Your pinned and most-accessed curriculum modules.", link: "/vault/favorites" },
  { title: "Saved Concepts", icon: "📌", desc: "Deep-dive micro-nodes and mechanisms you bookmarked.", link: "/vault/concepts" },
  { title: "Formula Vault", icon: "📚", desc: "Centralized physical constants, derivations, and tricks.", link: "/vault/formulas" },
  { title: "Named Reactions", icon: "⚛️", desc: "Arrow-pushing pathways, reagents, and name reactions.", link: "/vault/reactions" },
  { title: "Important Exceptions", icon: "🧠", desc: "NCERT anomalies, d-block quirks, and periodic exceptions.", link: "/vault/exceptions" },
  { title: "Quick Facts", icon: "⚡", desc: "High-yield, rapid-recall, exam-agnostic data points.", link: "/vault/facts" },
];

export default function KnowledgeVault() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-12 max-w-7xl mx-auto space-y-12">
      <nav className="flex justify-between items-center border-b border-slate-800 pb-4">
        <div>
          <Link href="/" className="text-xs font-black tracking-widest text-indigo-400 uppercase">Synergic Bond</Link>
          <h1 className="text-4xl font-extrabold tracking-tight mt-1 flex items-center gap-3">
            🏛️ Knowledge Vault
          </h1>
          <p className="text-xs text-slate-400 mt-2">Your personal chemistry memory bank.</p>
        </div>
        <ThemeToggle />
      </nav>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {vaultSections.map((section, idx) => (
          <div 
            key={idx} 
            className="p-8 bg-slate-900/50 border border-slate-800 rounded-3xl hover:border-indigo-500/50 transition duration-300 space-y-4"
          >
            <span className="text-4xl block">{section.icon}</span>
            <h3 className="font-extrabold text-lg tracking-tight">{section.title}</h3>
            <p className="text-xs text-slate-400 leading-relaxed h-10">{section.desc}</p>
            <Link 
              href={section.link} 
              className="inline-block text-[10px] font-extrabold tracking-widest uppercase text-indigo-400 hover:text-indigo-300"
            >
              Access Vault →
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}
