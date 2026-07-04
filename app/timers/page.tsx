import SmartTimers from "@/components/engine/SmartTimers";

// /timers — Smart Timers: Pomodoro · Deep Work · Exam Simulation · Custom.
// Global tool (linked from every program's Full Syllabus dashboard).

export const metadata = {
  title: "Smart Timers — SYNERGIC BOND",
  description: "Pomodoro, deep-work, exam-simulation and custom timers for focused chemistry study.",
};

export default function TimersPage() {
  return (
    <main className="min-h-screen bg-[#0B1220] text-white">
      <div className="border-b border-white/10 bg-gradient-to-b from-cyan-950/20 to-[#0B1220] px-4 py-8 sm:px-6 sm:py-10">
        <div className="mx-auto max-w-4xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">Focus tools</p>
          <h1 className="text-2xl font-black tracking-tight sm:text-4xl">Smart Timers</h1>
          <p className="mt-2 max-w-2xl text-white/55">Pomodoro blocks, deep-work cycles, exam-pace simulations and custom timers.</p>
        </div>
      </div>
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <SmartTimers />
      </div>
    </main>
  );
}
