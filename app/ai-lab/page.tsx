import AILabHub from "@/components/ai-lab/AILabHub";

export const metadata = {
  title: "AI Lab — SYNERGIC BOND",
  description:
    "Snap & Solve, AI Tutor, Doubt Solver, Study Planner and Revision Generator — every AI-assisted chemistry tool in one place.",
};

export default function AILabPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 md:py-12">
        <AILabHub />
      </div>
    </main>
  );
}
