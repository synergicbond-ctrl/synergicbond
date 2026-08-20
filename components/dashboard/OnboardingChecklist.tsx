import Link from "next/link";

// WEEK 15 — student onboarding. Completion states come from REAL activity
// counts the dashboard already queried (study sessions / test results /
// saved chapters) — never simulated. Rendered only while the student is new
// (the dashboard hides it once every step is done).
export interface OnboardingState {
  hasStudied: boolean;
  hasTested: boolean;
  hasSaved: boolean;
}

const STEPS = [
  {
    key: "study",
    done: (s: OnboardingState) => s.hasStudied,
    label: "Read your first free chapter",
    desc: "GOC, Mole Concept & Periodic Table are fully unlocked",
    href: "/notes",
    cta: "Open notes",
  },
  {
    key: "snap",
    // Snap usage isn't persisted per-user yet, so this step never fakes a
    // checkmark — it stays an invitation.
    done: () => false,
    label: "Try Snap & Solve on a real problem",
    desc: "Photograph any chemistry question — 5 free solves a day",
    href: "/snap-solve",
    cta: "Snap a problem",
  },
  {
    key: "test",
    done: (s: OnboardingState) => s.hasTested,
    label: "Take your first practice test",
    desc: "Real PYQ-built chapter tests — results feed your analytics",
    href: "/tests",
    cta: "Browse tests",
  },
] as const;

export function OnboardingChecklist({ state }: { state: OnboardingState }) {
  return (
    <section className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
      <h2 className="text-sm font-bold uppercase tracking-wider text-[var(--accent)]">🚀 Getting started</h2>
      <p className="mt-1 text-xs text-white/50">
        Three steps to see what SYNERGIC BOND can do — all free.
      </p>
      <div className="mt-4 space-y-2.5">
        {STEPS.map((step) => {
          const done = step.done(state);
          return (
            <div
              key={step.key}
              className={`flex items-center gap-3 rounded-lg border px-3.5 py-3 ${
                done ? "border-[var(--accent)]/25 bg-[var(--accent)]/[0.06]" : "border-white/[0.08] bg-white/[0.03]"
              }`}
            >
              <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-black ${
                done ? "bg-[var(--accent)]/25 text-[var(--accent)]" : "bg-white/[0.06] text-white/40"
              }`}>
                {done ? "✓" : "•"}
              </span>
              <span className="min-w-0 flex-1">
                <span className={`block text-sm font-semibold ${done ? "text-[var(--accent)] line-through decoration-[var(--accent)]/40" : "text-white"}`}>
                  {step.label}
                </span>
                <span className="block text-[11px] text-white/45">{step.desc}</span>
              </span>
              {!done && (
                <Link
                  href={step.href}
                  className="shrink-0 rounded-lg border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-2.5 py-1.5 text-[11px] font-bold text-[var(--accent)] transition hover:bg-[var(--accent)]/20"
                >
                  {step.cta}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
