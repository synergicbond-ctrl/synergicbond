import Link from "next/link";

export const metadata = {
  title: "Support — SYNERGIC BOND",
  description:
    "Support the mission to build the complete chemistry learning platform. Go Pro, or contribute directly (from ₹100).",
};

// Week 12 — honest Support page (replaces the old /donate mock-up, which showed
// a fabricated fundraising bar and dead payment buttons).
//
// • "Go Pro" is the LIVE way to support today — it uses the existing, working
//   Razorpay checkout on /pricing (payment infra untouched, per roadmap).
// • Direct one-time contributions (min ₹100) are shown but clearly labelled
//   as opening soon: enabling them needs a founder decision (Razorpay payment
//   link or a dedicated contribution order route). No fake checkout.

const CONTRIBUTION_TIERS = [
  { amount: "₹100", note: "Fuels one student's free chapter access" },
  { amount: "₹250", note: "Supports verified content authoring" },
  { amount: "₹500", note: "Backs the free Snap & Solve quota" },
];

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 md:py-14">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.4em] text-cyan-300">Support</p>
        <h1 className="text-3xl font-black md:text-4xl">Keep Chemistry Free for the Next Student</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60">
          SYNERGIC BOND keeps one full chapter per branch of chemistry — notes, PYQs, tests, formulas
          and AI — free for every student, forever. Built by an 18-year JEE Advanced chemistry
          faculty. Your support pays for the verified content, the AI compute and the free tier.
        </p>

        {/* Live path — Pro subscription via the existing checkout */}
        <section className="mt-8 rounded-2xl border border-cyan-400/25 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-6">
          <h2 className="text-lg font-black">The most direct way to support: go Pro</h2>
          <p className="mt-1.5 text-sm text-white/60">
            ₹149/month or ₹999/year — you unlock every chapter and reference library, and you
            fund the free tier for students who can&apos;t pay.
          </p>
          <Link
            href="/pricing"
            className="mt-4 inline-block rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2.5 text-sm font-bold text-black transition hover:opacity-90"
          >
            See Pro plans →
          </Link>
        </section>

        {/* Direct contributions — honest coming-soon (needs founder payment link) */}
        <section className="mt-6 rounded-2xl border border-white/[0.08] bg-[#111827] p-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-lg font-black">One-time contribution</h2>
            <span className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white/55">
              Checkout opening soon
            </span>
          </div>
          <p className="mt-1.5 text-sm text-white/60">
            Contributions start at ₹100. Direct checkout is being wired up — until then, going Pro is
            the way to contribute.
          </p>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {CONTRIBUTION_TIERS.map((t) => (
              <div
                key={t.amount}
                className="cursor-not-allowed rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 text-center opacity-70"
                aria-disabled="true"
              >
                <p className="text-2xl font-black text-white/80">{t.amount}</p>
                <p className="mt-1 text-[11px] leading-snug text-white/45">{t.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What support funds — real platform facts only */}
        <section className="mt-6 rounded-2xl border border-white/[0.08] bg-[#111827] p-6">
          <h2 className="text-lg font-black">Where it goes</h2>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li className="flex gap-2"><span className="text-cyan-400">•</span> Free flagship chapters — General Organic Chemistry, Mole Concept, Periodic Table — stay fully unlocked for everyone.</li>
            <li className="flex gap-2"><span className="text-cyan-400">•</span> The daily free Snap &amp; Solve quota and its AI compute.</li>
            <li className="flex gap-2"><span className="text-cyan-400">•</span> Hand-verified notes, PYQ intelligence and test content — authored, never scraped.</li>
          </ul>
        </section>

        {/* Direct contact */}
        <section className="mt-6 rounded-2xl border border-white/[0.08] bg-[#111827] p-6 text-center">
          <h2 className="text-lg font-black">Need help or have a question?</h2>
          <p className="mt-1.5 text-sm text-white/60">Write to us — a real person reads every mail.</p>
          <a href="mailto:hello@synergicbond.com"
            className="mt-3 inline-block rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-5 py-2.5 text-sm font-black text-cyan-300 transition hover:bg-cyan-500/20">
            hello@synergicbond.com
          </a>
        </section>
      </div>
    </main>
  );
}
