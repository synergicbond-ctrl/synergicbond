"use client";

import { MessageSquare } from "lucide-react";

// WEEK 15 — persistent feedback / bug-report entry point for the beta.
// Dispatches `beta-feedback-open`; BetaTracker (mounted globally) owns the
// modal and the submission flow — nothing is duplicated here.
export default function FeedbackButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("beta-feedback-open"))}
      className="fixed bottom-3 left-3 z-[110] flex items-center gap-1.5 rounded-full border border-white/15 bg-[#111827]/95 px-3 py-2 text-[11px] font-bold text-white/70 shadow-lg backdrop-blur transition hover:border-cyan-400/40 hover:text-white"
      aria-label="Send feedback or report a bug"
    >
      <MessageSquare className="h-3.5 w-3.5 text-cyan-300" />
      <span className="hidden sm:inline">Feedback</span>
    </button>
  );
}
