"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MessageSquare, X } from "lucide-react";
import { submitBetaFeedback, trackBetaEvent } from "@/lib/betaAnalyticsClient";

const FEEDBACK_DONE_KEY = "sb_beta_feedback_submitted";
const SOLVE_COUNT_KEY = "sb_beta_solve_count";

function eventForPath(pathname: string) {
  if (pathname === "/dashboard") return "dashboard_visit";
  if (pathname === "/learn") return "learn_visit";
  if (pathname === "/pyq") return "pyq_visit";
  if (pathname === "/periodic-table") return "periodic_table_visit";
  return null;
}

export default function BetaTracker() {
  const pathname = usePathname();
  const [showFeedback, setShowFeedback] = useState(false);
  const [rating, setRating] = useState(5);
  const [mostUsefulFeature, setMostUsefulFeature] = useState("Snap & Solve");
  const [biggestIssue, setBiggestIssue] = useState("");
  const [wouldRecommend, setWouldRecommend] = useState(true);
  const [triggerReason, setTriggerReason] = useState<"solves" | "time" | "manual">("manual");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    trackBetaEvent("session_start");

    const startedAt = Date.now();
    let sent = false;
    const endSession = () => {
      if (sent) return;
      sent = true;
      trackBetaEvent("session_end", {
        durationSeconds: Math.max(1, Math.round((Date.now() - startedAt) / 1000)),
      });
    };

    window.addEventListener("pagehide", endSession);
    return () => {
      window.removeEventListener("pagehide", endSession);
      endSession();
    };
  }, []);

  useEffect(() => {
    const event = eventForPath(pathname);
    if (event) trackBetaEvent(event);
  }, [pathname]);

  useEffect(() => {
    if (window.localStorage.getItem(FEEDBACK_DONE_KEY) === "true") return;

    const maybeShowForSolves = () => {
      const solves = Number(window.localStorage.getItem(SOLVE_COUNT_KEY) || "0");
      if (solves >= 3) {
        setTriggerReason("solves");
        setShowFeedback(true);
      }
    };

    const timer = window.setTimeout(() => {
      if (window.localStorage.getItem(FEEDBACK_DONE_KEY) !== "true") {
        setTriggerReason("time");
        setShowFeedback(true);
      }
    }, 600_000);

    window.addEventListener("beta-solve-completed", maybeShowForSolves);
    maybeShowForSolves();

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("beta-solve-completed", maybeShowForSolves);
    };
  }, []);

  async function handleSubmit() {
    setSaving(true);
    try {
      await submitBetaFeedback({
        rating,
        mostUsefulFeature,
        biggestIssue,
        wouldRecommend,
        triggerReason,
      });
      window.localStorage.setItem(FEEDBACK_DONE_KEY, "true");
      setShowFeedback(false);
    } catch {
      setSaving(false);
    }
  }

  if (!showFeedback) return null;

  return (
    <div className="fixed inset-x-3 bottom-3 z-[120] mx-auto max-w-md rounded-2xl border border-white/10 bg-slate-950 p-4 text-white shadow-2xl sm:right-4 sm:left-auto sm:mx-0">
      <button
        type="button"
        aria-label="Close feedback"
        onClick={() => setShowFeedback(false)}
        className="absolute right-3 top-3 text-white/45 hover:text-white"
      >
        <X className="h-4 w-4" />
      </button>
      <div className="flex items-center gap-2 pr-8">
        <MessageSquare className="h-4 w-4 text-cyan-300" />
        <h2 className="text-sm font-bold">Quick beta feedback</h2>
      </div>

      <div className="mt-4 space-y-3">
        <label className="block text-xs font-semibold text-white/65">
          Rating
          <select
            value={rating}
            onChange={(event) => setRating(Number(event.target.value))}
            className="mt-1 w-full rounded-lg border border-white/10 bg-black px-3 py-2 text-sm text-white"
          >
            {[5, 4, 3, 2, 1].map((value) => (
              <option key={value} value={value}>{value}</option>
            ))}
          </select>
        </label>

        <label className="block text-xs font-semibold text-white/65">
          Most useful feature
          <input
            value={mostUsefulFeature}
            onChange={(event) => setMostUsefulFeature(event.target.value)}
            className="mt-1 w-full rounded-lg border border-white/10 bg-black px-3 py-2 text-sm text-white"
          />
        </label>

        <label className="block text-xs font-semibold text-white/65">
          Biggest issue
          <textarea
            value={biggestIssue}
            onChange={(event) => setBiggestIssue(event.target.value)}
            className="mt-1 min-h-20 w-full rounded-lg border border-white/10 bg-black px-3 py-2 text-sm text-white"
          />
        </label>

        <label className="flex items-center justify-between gap-3 text-xs font-semibold text-white/65">
          Would recommend?
          <input
            type="checkbox"
            checked={wouldRecommend}
            onChange={(event) => setWouldRecommend(event.target.checked)}
            className="h-4 w-4"
          />
        </label>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={saving}
          className="w-full rounded-lg bg-cyan-400 px-3 py-2 text-sm font-bold text-black disabled:opacity-60"
        >
          {saving ? "Saving..." : "Send feedback"}
        </button>
      </div>
    </div>
  );
}
