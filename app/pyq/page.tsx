"use client";

import { useState } from "react";
import { PYQ_DB_STATS } from "@/lib/pyq";
import PYQSearchTab from "@/components/pyq/PYQSearchTab";
import PYQChaptersTab from "@/components/pyq/PYQChaptersTab";
import PYQTopicsTab from "@/components/pyq/PYQTopicsTab";
import PYQTrendsTab from "@/components/pyq/PYQTrendsTab";
import PYQPredictionsTab from "@/components/pyq/PYQPredictionsTab";
import PYQDashboardTab from "@/components/pyq/PYQDashboardTab";
import NEETChemistryPYQEngine from "@/components/pyq/NEETChemistryPYQEngine";

type Tab = "neet-chemistry" | "search" | "chapters" | "topics" | "trends" | "predictions" | "dashboard";

const TABS: Array<{ key: Tab; label: string; icon: string }> = [
  { key: "neet-chemistry", label: "NEET Chemistry", icon: "🧪" },
  { key: "search", label: "Search", icon: "🔍" },
  { key: "chapters", label: "Chapters", icon: "📖" },
  { key: "topics", label: "Topics", icon: "🧩" },
  { key: "trends", label: "Trends", icon: "📈" },
  { key: "predictions", label: "Predict", icon: "🎯" },
  { key: "dashboard", label: "Dashboard", icon: "📊" },
];

export default function PYQPage() {
  const [tab, setTab] = useState<Tab>("neet-chemistry");

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold">📚 PYQ Intelligence</h1>
          <p className="text-white/60">
            {PYQ_DB_STATS.total}+ verified or review-tagged records across the legacy intelligence layer, plus a
            separate official-source NEET Chemistry practice engine.
          </p>
          <p className="max-w-4xl rounded-lg border border-amber-400/20 bg-amber-400/10 px-4 py-3 text-sm text-amber-100">
            Synergic Bond is an independent educational platform. It is not affiliated with, endorsed by, or sponsored by NTA, CBSE, NEET, JEE, or any examination authority.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 md:gap-2 border-b border-white/10 overflow-x-auto no-scrollbar">
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`px-3 md:px-4 py-3 text-sm md:text-base font-semibold border-b-2 whitespace-nowrap transition ${
                tab === t.key
                  ? "border-cyan-500 text-white"
                  : "border-transparent text-white/50 hover:text-white/70"
              }`}
            >
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {tab === "neet-chemistry" && <NEETChemistryPYQEngine />}
        {tab === "search" && <PYQSearchTab />}
        {tab === "chapters" && <PYQChaptersTab />}
        {tab === "topics" && <PYQTopicsTab />}
        {tab === "trends" && <PYQTrendsTab />}
        {tab === "predictions" && <PYQPredictionsTab />}
        {tab === "dashboard" && <PYQDashboardTab />}
      </div>
    </main>
  );
}
