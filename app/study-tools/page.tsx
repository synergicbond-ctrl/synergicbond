import Navbar from "@/components/Navbar";
import MulticolorNotes from "@/components/MulticolorNotes";
import WeaknessRoadmap from "@/components/WeaknessRoadmap";

export const metadata = {
  title: "Study Tools — SYNERGIC BOND",
  description: "Multicolor high-retention notes, focus timer, and personalized 3-day weakness recovery roadmap.",
};

export default function StudyToolsPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <Navbar />
      <div className="mx-auto max-w-5xl px-6 py-12 space-y-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-300 mb-2">Study Workspace</p>
          <h1 className="text-4xl font-black">Smart Study Tools</h1>
          <p className="mt-2 text-white/50 text-sm">
            High-retention multicolor notes, a live focus timer, and an adaptive 3-day recovery roadmap.
          </p>
        </div>

        <MulticolorNotes />
        <WeaknessRoadmap />
      </div>
    </main>
  );
}
