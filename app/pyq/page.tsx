"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { PYQ_DB_STATS } from "@/lib/pyq";
import type { PYQExam } from "@/lib/pyq";
import PYQSearchTab from "@/components/pyq/PYQSearchTab";
import PYQChaptersTab from "@/components/pyq/PYQChaptersTab";
import PYQTopicsTab from "@/components/pyq/PYQTopicsTab";
import PYQTrendsTab from "@/components/pyq/PYQTrendsTab";
import PYQPredictionsTab from "@/components/pyq/PYQPredictionsTab";
import PYQDashboardTab from "@/components/pyq/PYQDashboardTab";

type Tab = "search" | "chapters" | "topics" | "trends" | "predictions" | "dashboard";

const TABS: Array<{ key: Tab; label: string; icon: string }> = [
  { key: "search", label: "Search", icon: "🔍" },
  { key: "chapters", label: "Chapters", icon: "📖" },
  { key: "topics", label: "Topics", icon: "🧩" },
  { key: "trends", label: "Trends", icon: "📈" },
  { key: "predictions", label: "Predict", icon: "🎯" },
  { key: "dashboard", label: "Dashboard", icon: "📊" },
];

const VALID_EXAMS: PYQExam[] = ["JEE Main", "JEE Advanced", "NEET"];

export default function PYQPage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-black" />}>
      <PYQPageInner />
    </Suspense>
  );
}

function PYQPageInner() {
  const [tab, setTab] = useState<Tab>("search");
  // Arriving from a program (e.g. PYQ Center under Practice) auto-applies
  // that program's exam filter — same underlying PYQ system, one entry point.
  const searchParams = useSearchParams();
  const initialExam = useMemo<PYQExam | null>(() => {
    const raw = searchParams.get("exam");
    return VALID_EXAMS.find((e) => e === raw) ?? null;
  }, [searchParams]);

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold">📚 PYQ Intelligence</h1>
          <p className="text-white/60">
            {PYQ_DB_STATS.total}+ questions from JEE Main, JEE Advanced & NEET — chapter &amp; topic intelligence,
            trend analytics, prediction engine, and knowledge linking.
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

        {tab === "search" && <PYQSearchTab initialExam={initialExam} />}
        {tab === "chapters" && <PYQChaptersTab />}
        {tab === "topics" && <PYQTopicsTab />}
        {tab === "trends" && <PYQTrendsTab />}
        {tab === "predictions" && <PYQPredictionsTab />}
        {tab === "dashboard" && <PYQDashboardTab />}
      </div>
    </main>
  );
}
