"use client";

import { useState } from "react";
import { track } from "@vercel/analytics";
import PaymentGateway from "@/components/PaymentGateway";

type PlanId = "pro_monthly" | "pro_annual";

export default function PricingPage() {
  const [payOpen, setPayOpen] = useState(false);
  const [planId, setPlanId] = useState<PlanId>("pro_monthly");

  const FREE_FEATURES = [
    "5 Snap & Solve solutions per day",
    "Full verified reference — Periodic Trends, Important Orders, Colours, Named Reactions",
    "Step-by-step solutions in English, Hindi & Hinglish",
    "No credit card required",
  ];

  const PRO_FEATURES = [
    "Unlimited Snap & Solve — photograph any problem, get verified steps",
    "Solution history saved to your account",
    "All verified reference content",
    "English, Hindi & Hinglish solutions",
    "Priority solving",
    "Built by an 18-year JEE Advanced chemistry faculty",
  ];

  const isAnnual = planId === "pro_annual";
  const amount = isAnnual ? "₹999" : "₹149";
  const period = isAnnual ? "year" : "month";

  function openCheckout() {
    track("upgrade_click", { plan: planId });
    setPayOpen(true);
  }

  return (
    <main className="min-h-screen bg-black text-white p-6 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Simple, Honest Pricing
        </h1>
        <p className="text-zinc-400 text-lg max-w-xl mx-auto">
          Built by a chemistry teacher with 18+ years of JEE experience. No tricks — just the best chemistry prep available.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {/* Free Plan */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-7">
          <div className="mb-6">
            <div className="text-sm font-semibold text-zinc-400 uppercase tracking-wide mb-2">Free</div>
            <div className="text-4xl font-bold">₹0</div>
            <div className="text-zinc-500 text-sm mt-1">Forever free — no credit card</div>
          </div>
          <div className="space-y-3 mb-8">
            {FREE_FEATURES.map((f) => (
              <div key={f} className="flex items-start gap-3 text-sm text-zinc-300">
                <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                {f}
              </div>
            ))}
          </div>
          <a
            href="/auth/signup"
            className="block w-full text-center border border-zinc-700 hover:border-zinc-500 text-white py-3 rounded-xl transition font-medium"
          >
            Get Started Free
          </a>
        </div>

        {/* Pro Plan */}
        <div className="bg-zinc-900 border border-cyan-700 rounded-2xl p-7 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-cyan-500 text-black text-xs font-bold px-3 py-1 rounded-bl-xl">
            MOST POPULAR
          </div>
          <div className="mb-6">
            <div className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-2">Pro</div>
            {/* Monthly / Annual toggle */}
            <div className="inline-flex rounded-xl border border-zinc-700 p-1 mb-3">
              <button
                onClick={() => setPlanId("pro_monthly")}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${!isAnnual ? "bg-cyan-500 text-black" : "text-zinc-400"}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setPlanId("pro_annual")}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${isAnnual ? "bg-cyan-500 text-black" : "text-zinc-400"}`}
              >
                Annual · save 44%
              </button>
            </div>
            <div className="flex items-end gap-2">
              <div className="text-4xl font-bold">{amount}</div>
              <div className="text-zinc-400 text-sm mb-1">/{period}</div>
            </div>
            <div className="text-zinc-500 text-sm mt-1">
              {isAnnual ? "₹999 billed yearly — best value" : "₹999/year if you go annual"}
            </div>
          </div>
          <div className="space-y-3 mb-8">
            {PRO_FEATURES.map((f) => (
              <div key={f} className="flex items-start gap-3 text-sm text-zinc-200">
                <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
                {f}
              </div>
            ))}
          </div>
          <div className="space-y-3">
            <button
              onClick={openCheckout}
              className="block w-full text-center bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 rounded-xl transition hover:-translate-y-0.5"
            >
              Upgrade to PRO →
            </button>
            <div className="text-center text-xs text-zinc-600">
              Secure checkout · UPI, Cards, NetBanking, PhonePe, GPay, Apple Pay
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-16 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Common Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "What exams does SYNERGIC BOND cover?",
              a: "NEET, JEE Main, JEE Advanced, GATE, NSEC, INChO, and IChO Olympiads. All with difficulty-appropriate content.",
            },
            {
              q: "Can I use it in Hindi or Hinglish?",
              a: "Yes! Our AI tutor responds in English, Hindi (Devanagari), or Hinglish depending on your preference.",
            },
            {
              q: "Is the AI content verified?",
              a: "Yes. All AI responses are grounded in a verified chemistry syllabus built by an 18-year JEE Advanced expert. The AI cannot invent chemistry — it only teaches from verified content.",
            },
            {
              q: "Can I download the notes?",
              a: "Notes are rendered in-browser for security. You can view them anytime on your device but they cannot be downloaded as files.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-zinc-400 text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </div>

      <PaymentGateway
        open={payOpen}
        onClose={() => setPayOpen(false)}
        planId={planId}
        plan="SYNERGIC BOND PRO"
        amount={amount}
        period={period}
      />
    </main>
  );
}
