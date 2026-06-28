import SnapSolvePanel from "@/components/SnapSolvePanel";

export const metadata = {
  title: "Snap & Solve · Synergic Bond",
  description: "Photo or text of any chemistry/physics problem → structured step-by-step AI solution.",
};

export default function SnapSolvePage() {
  return (
    <main className="min-h-screen bg-black text-white px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight">📸 Snap &amp; Solve</h1>
          <p className="mt-2 text-white/60">Photo or text of any chemistry/physics problem → AI solves it step by step</p>
        </div>

        <SnapSolvePanel />
      </div>
    </main>
  );
}
