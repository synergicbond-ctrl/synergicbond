import PerformanceView, { GuestPerformanceView } from "@/components/performance/PerformanceView";
import { fetchPerformanceData } from "@/lib/performance/performanceEngine";
import type { PlatformStats } from "@/lib/performance/types";
import { NOTES_ENGINE_STATS } from "@/lib/notesEngine";
import { TEST_ENGINE_STATS } from "@/lib/tests/testEngine";
import { KNOWLEDGE_GRAPH_STATS } from "@/lib/knowledge/graph";

export const metadata = {
  title: "Performance — SYNERGIC BOND",
  description:
    "Exam readiness, weak & strong topics, revision queue and progress summary — computed only from your real tests, mistakes and study sessions.",
};

export default async function PerformancePage() {
  const data = await fetchPerformanceData();

  // Platform-wide counts straight from the SSOT catalogues (real, static).
  const stats: PlatformStats = {
    notesChapters: NOTES_ENGINE_STATS.chapters,
    totalTests: TEST_ENGINE_STATS.totalTests,
    pyqQuestions: TEST_ENGINE_STATS.questionPool,
    linkedChapters: KNOWLEDGE_GRAPH_STATS.linkedChapters,
  };

  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 md:py-12">
        <div className="mb-6">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.4em] text-cyan-300">Performance</p>
          <h1 className="text-3xl font-black md:text-4xl">
            {data ? `${data.name}'s Progress` : "Your Progress"}
          </h1>
          <p className="mt-2 text-sm text-white/55">
            Everything here is computed from your real activity — tests taken, mistakes recorded and
            study sessions logged. No estimates, no fake analytics.
          </p>
        </div>
        {data ? <PerformanceView data={data} stats={stats} /> : <GuestPerformanceView stats={stats} />}
      </div>
    </main>
  );
}
