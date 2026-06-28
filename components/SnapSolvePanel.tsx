"use client";

import { useState } from "react";
import SnapSolveUpload, { type SnapSolveInput } from "@/components/SnapSolveUpload";
import SnapSolveResult from "@/components/SnapSolveResult";
import type { SnapSolveResponse } from "@/lib/snapSolveTypes";

// Single orchestrator for the Snap & Solve surface — owns the execution flow
// so /control-center and /snap-solve share one implementation (no disconnected
// duplicate state). The child components stay purely presentational.
export default function SnapSolvePanel() {
  const [activeSolution, setActiveSolution] = useState<SnapSolveResponse | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(input: SnapSolveInput) {
    setIsProcessing(true);
    setError(null);
    setActiveSolution(null);
    try {
      const res = await fetch("/api/snap-solve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });
      const data = await res.json();
      if (data.error) {
        setError(data.error);
      } else {
        setActiveSolution(data as SnapSolveResponse);
      }
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Network error — please try again.");
    } finally {
      setIsProcessing(false);
    }
  }

  return (
    <div className="grid gap-5 lg:grid-cols-2 lg:items-start">
      <SnapSolveUpload onSubmit={handleSubmit} isProcessing={isProcessing} error={error} />

      {activeSolution ? (
        <SnapSolveResult data={activeSolution} />
      ) : (
        <div className="flex min-h-44 flex-col items-center justify-center rounded-2xl border border-white/[0.06] bg-[#111827]/50 p-6 text-center text-white/25">
          <div className="text-4xl">💡</div>
          <p className="mt-2 text-sm">Your structured solution will appear here</p>
        </div>
      )}
    </div>
  );
}
