import SnapSolvePanel from "@/components/SnapSolvePanel";

export const metadata = {
  title: "Control Center · Snap & Solve",
  description: "Snap a photo or type any chemistry/physics problem and get a structured, step-by-step AI solution.",
};

export default function ControlCenterPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-300 mb-2">AI Lab · Control Center</p>
          <h1 className="text-3xl md:text-4xl font-black">📸 Snap &amp; Solve</h1>
          <p className="mt-2 max-w-2xl text-sm text-white/55">
            Snap a photo of a problem or type it out — the AI classifies it, reads it, and returns a
            clean step-by-step solution with the high-yield exceptions that matter for your exam.
          </p>
        </div>

        <SnapSolvePanel />
      </div>
    </main>
  );
}
