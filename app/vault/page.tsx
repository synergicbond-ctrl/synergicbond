"use client";

import Navbar from "@/components/Navbar";

export default function VaultPage() {
  const sections = [
    {
      title: "📚 Formula Vault",
      description: "Important formulas across chemistry.",
    },

    {
      title: "⚛️ Named Reactions",
      description: "Organic chemistry reactions in one place.",
    },

    {
      title: "🧠 Important Exceptions",
      description: "Frequently tested exceptions.",
    },

    {
      title: "⚡ Quick Facts",
      description: "High-yield exam facts.",
    },

    {
      title: "🎯 Mechanisms",
      description: "Reaction mechanisms and shortcuts.",
    },

    {
      title: "🏆 Must Revise",
      description: "High-priority concepts.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-bold mb-4">

          🏛️ Chemistry Vault

        </h1>

        <p className="text-white/60 mb-14">

          Your permanent chemistry knowledge base.

        </p>

        <div className="grid md:grid-cols-3 gap-6">

          {sections.map((section) => (

            <div
              key={section.title}
              className="border border-white/10 rounded-2xl p-8 hover:border-white/30 transition"
            >

              <h2 className="text-2xl font-bold mb-4">

                {section.title}

              </h2>

              <p className="text-white/60">

                {section.description}

              </p>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}