"use client";

import { useState } from "react";
import SnapSolveUpload from "@/components/SnapSolveUpload";
import SnapSolveResult from "@/components/SnapSolveResult";
import type { SnapSolveResponse } from "@/lib/snapSolveTypes";

export default function ControlCenterPage() {
  // Local state coordinator — owns the active solution pipeline (SSOT).
  const [activeSolution, setActiveSolution] = useState<SnapSolveResponse | null>(null);

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

        {/* Root grid framework matrix */}
        <div className="grid gap-5 lg:grid-cols-2 lg:items-start">
          <SnapSolveUpload onUploadSuccess={(data) => setActiveSolution(data)} />

          {activeSolution ? (
            <SnapSolveResult data={activeSolution} />
          ) : (
            <div className="flex min-h-44 flex-col items-center justify-center rounded-2xl border border-white/[0.06] bg-[#111827]/50 p-6 text-center text-white/25">
              <div className="text-4xl">💡</div>
              <p className="mt-2 text-sm">Your structured solution will appear here</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
