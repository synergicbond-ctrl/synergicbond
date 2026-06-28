"use client";

import { useState } from "react";
import SnapSolveUpload from "@/components/SnapSolveUpload";
import SnapSolveResult from "@/components/SnapSolveResult";
import type { SnapSolveResponse } from "@/lib/snapSolveTypes";

export default function SnapSolvePage() {
  const [activeSolution, setActiveSolution] = useState<SnapSolveResponse | null>(null);

  return (
    <main className="min-h-screen bg-black text-white px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight">📸 Snap &amp; Solve</h1>
          <p className="mt-2 text-white/60">Photo or text of any chemistry/physics problem → AI solves it step by step</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2 lg:items-start">
          <SnapSolveUpload onUploadSuccess={(data) => setActiveSolution(data)} />

          {activeSolution ? (
            <SnapSolveResult data={activeSolution} />
          ) : (
            <div className="flex min-h-44 flex-col items-center justify-center rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 text-center text-white/25">
              <div className="text-4xl">💡</div>
              <p className="mt-2 text-sm">Your structured solution will appear here</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
