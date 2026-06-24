"use client";

import Navbar from "@/components/Navbar";

export default function VaultPage() {
  const vault = [
    "⭐ Favorite Chapters",

    "📌 Saved Concepts",

    "📚 Formula Vault",

    "⚛️ Named Reactions",

    "🧠 Important Exceptions",

    "⚡ Quick Facts",
  ];

  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-bold mb-4">

          🏛️ Knowledge Vault

        </h1>

        <p className="text-white/60 mb-12">

          Your personal chemistry memory bank.

        </p>

        <div className="grid md:grid-cols-3 gap-6">

          {vault.map((item) => (

            <div
              key={item}
              className="border border-white/10 rounded-2xl p-8"
            >

              <h2 className="text-2xl font-bold">

                {item}

              </h2>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}