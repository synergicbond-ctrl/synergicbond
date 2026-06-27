import Link from 'next/link';

export default function VaultDashboard() {
  const vaultSections = [
    { title: "Favorite Chapters", icon: "🌙", desc: "Your pinned and most-accessed curriculum modules.", link: "/chapter" },
    { title: "Saved Concepts", icon: "📌", desc: "Deep-dive micro-nodes and mechanisms you bookmarked.", link: "/vault/concepts" },
    { title: "Formula Vault", icon: "📚", desc: "Centralized physical constants, derivations, and tricks.", link: "/vault/formulas" },
    { title: "Named Reactions", icon: "⚛️", desc: "Arrow-pushing pathways, reagents, and name reactions.", link: "/concept" },
    { title: "Important Exceptions", icon: "🧠", desc: "NCERT anomalies, d-block quirks, and periodic exceptions.", link: "/vault/exceptions" },
    { title: "Quick Facts", icon: "⚡", desc: "High-yield, rapid-recall, exam-agnostic data points.", link: "/vault/facts" },
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">SYNERGIC BOND 🏛️ Knowledge Vault</h1>
      <p className="text-gray-600 mb-8">Your personal chemistry memory bank.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {vaultSections.map((section, index) => (
          <div key={index} className="border p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <div className="text-3xl mb-4">{section.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
            <p className="text-gray-500 text-sm mb-4">{section.desc}</p>
            <Link href={section.link} className="text-blue-600 font-medium hover:underline">
              ACCESS VAULT →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
