"use client";

import Navbar from "@/components/Navbar";
import { masterSyllabus } from "@/lib/masterSyllabus";

export default function DashboardPage() {
  const totalChapters = masterSyllabus.length;

  const physical = masterSyllabus.filter(
    (c) => c.category === "physical"
  ).length;

  const inorganic = masterSyllabus.filter(
    (c) => c.category === "inorganic"
  ).length;

  const organic = masterSyllabus.filter(
    (c) => c.category === "organic"
  ).length;

  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-bold mb-4">
          📊 Dashboard
        </h1>

        <p className="text-white/60 mb-12">
          Your Chemistry Command Center
        </p>

        <div className="grid md:grid-cols-4 gap-6 mb-12">

          <div className="border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl font-bold">
              {totalChapters}
            </h2>

            <p className="text-white/60">
              Total Chapters
            </p>
          </div>

          <div className="border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl font-bold">
              {physical}
            </h2>

            <p className="text-white/60">
              Physical Chemistry
            </p>
          </div>

          <div className="border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl font-bold">
              {inorganic}
            </h2>

            <p className="text-white/60">
              Inorganic Chemistry
            </p>
          </div>

          <div className="border border-white/10 rounded-2xl p-6">
            <h2 className="text-3xl font-bold">
              {organic}
            </h2>

            <p className="text-white/60">
              Organic Chemistry
            </p>
          </div>

        </div>

        <div className="border border-white/10 rounded-2xl p-8">

          <h2 className="text-2xl font-bold mb-6">
            🎯 Coming Soon
          </h2>

          <ul className="space-y-3 text-white/70">

            <li>🔥 Study streak</li>

            <li>📈 Weak chapters</li>

            <li>⭐ Strong chapters</li>

            <li>📝 Adaptive tests</li>

            <li>🏆 Performance analytics</li>

          </ul>

        </div>

      </div>

    </main>
  );
}