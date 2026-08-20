"use client";

import { useEffect, useState } from "react";

type Props = {
  chapterId: string;
  children: React.ReactNode;
};

const previewLineWidths = ["78%", "92%", "84%", "96%", "73%"];

export function PaywallGate({ chapterId, children }: Props) {
  const [access, setAccess] = useState<"loading" | "allowed" | "blocked">("loading");
  const [reason, setReason] = useState("");

  useEffect(() => {
    fetch(`/api/content/access?chapterId=${chapterId}`)
      .then((r) => r.json())
      .then((d) => {
        setAccess(d.access ? "allowed" : "blocked");
        setReason(d.reason || "");
      })
      .catch(() => setAccess("allowed")); // fail open — don't block on error
  }, [chapterId]);

  if (access === "loading") {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-6 h-6 border-2 border-[var(--accent)] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (access === "allowed") {
    return <>{children}</>;
  }

  // BLOCKED — show paywall
  return (
    <div className="min-h-[60vh] flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        {/* Blurred preview hint */}
        <div className="relative mb-8 rounded-lg overflow-hidden">
          <div className="blur-sm opacity-30 pointer-events-none select-none bg-[var(--surface)] p-6 rounded-lg text-left">
            <h3 className="text-[var(--foreground)] font-bold mb-2">Chapter Content</h3>
            <p className="text-[var(--text-muted)] text-sm">This chapter contains comprehensive notes, formulas, reactions, mechanisms, practice questions, and PYQ analysis...</p>
            <div className="mt-4 space-y-2">
              {previewLineWidths.map((width, i) => (
                <div key={i} className="h-3 bg-[var(--surface-2)] rounded" style={{ width }} />
              ))}
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/60 to-transparent" />
        </div>

        {/* Lock Icon */}
        <div className="w-16 h-16 bg-[var(--surface)] border border-[var(--border)] rounded-lg flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">🔒</span>
        </div>

        <h2 className="text-2xl font-bold text-[var(--foreground)] mb-2">
          {reason === "not_logged_in" ? "Login to Continue" : "Unlock with Pro"}
        </h2>
        <p className="text-[var(--text-muted)] mb-6 text-sm leading-relaxed">
          {reason === "not_logged_in"
            ? "Create a free account to access 2 chapters per subject and 10 AI messages per day."
            : "Upgrade to SYNERGIC BOND Pro to unlock every chapter, unlimited AI tutor, full mock exams, and more."}
        </p>

        {reason === "not_logged_in" ? (
          <div className="flex flex-col gap-3">
            <a
              href="/auth/signup"
              className="w-full bg-[var(--accent)] hover:opacity-90 text-[var(--background)] font-semibold py-3 rounded-lg transition text-center"
            >
              Create Free Account
            </a>
            <a
              href="/auth/signin"
              className="w-full border border-[var(--border)] hover:border-[var(--accent)]/50 text-[var(--foreground)] py-3 rounded-lg transition text-center text-sm"
            >
              Already have an account? Sign In
            </a>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <a
              href="/pricing"
              className="w-full bg-[var(--accent)] hover:opacity-90 text-[var(--background)] font-semibold py-3 rounded-lg transition text-center"
            >
              Upgrade to Pro — ₹149/month
            </a>
            <div className="text-xs text-[var(--text-muted)]">
              ✅ Every chapter &nbsp;·&nbsp; ✅ Unlimited AI tutor &nbsp;·&nbsp; ✅ Full mock exams
            </div>
          </div>
        )}

        {/* Free chapters note */}
        <div className="mt-6 bg-[var(--surface)] border border-[var(--border)] rounded-lg p-4 text-left">
          <div className="text-xs font-semibold text-[var(--text-muted)] mb-2 uppercase tracking-wider">Free Chapters (no login needed)</div>
          <div className="text-xs text-[var(--text-muted)] leading-relaxed">
            Mole Concept · Atomic Structure · GOC · Hydrocarbons · Periodic Table · Chemical Bonding · Intro to Spectroscopy · Gravimetric Analysis
          </div>
        </div>
      </div>
    </div>
  );
}
