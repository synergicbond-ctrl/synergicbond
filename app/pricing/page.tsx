"use client";

import { useState } from "react";
import { track } from "@vercel/analytics";
import PaymentGateway from "@/components/PaymentGateway";
import StudentDetailsForm from "@/components/StudentDetailsForm";

type ProgramOption = {
  key: string;
  name: string;
  price: number;
  desc: string;
  features: string[];
  boardSelect?: boolean;
};

export default function PricingPage() {
  const [payOpen, setPayOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [selectedKey, setSelectedKey] = useState<string>("");
  const [selectedName, setSelectedName] = useState<string>("");
  const [selectedAmount, setSelectedAmount] = useState<string>("");
  
  // Board states for Class 11 / Class 12
  const [class11Board, setClass11Board] = useState<string>("cbse");
  const [class12Board, setClass12Board] = useState<string>("isc");

  const FREE_FEATURES = [
    "3 complete free chapters — General Organic Chemistry, Mole Concept & Periodic Table: notes, PYQs, tests, formulas, AI, mechanisms — no restrictions",
    "Preview of reference library — Formula Cards, Reagents, Important Orders, Compound Colours",
    "Periodic Table, Trends Explorer & Named Reactions",
    "5 Snap & Solve solutions per day",
    "Step-by-step solutions in English, Hindi & Hinglish",
    "No credit card required",
  ];

  const PROGRAMS: ProgramOption[] = [
    {
      key: "class-11",
      name: "Class 11 Chemistry",
      price: 499,
      desc: "Full Class 11 organic, physical & inorganic chemistry curriculum.",
      features: [
        "All Class 11 chapters unlocked",
        "Chapter-wise detailed notes & formulas",
        "NCERT Hub & revision cards",
        "Class 11 PYQs & mock test bank",
        "AI Tutor (English, Hindi & Hinglish)",
        "365 days access (locks after expiry)",
      ],
      boardSelect: true,
    },
    {
      key: "class-12",
      name: "Class 12 Chemistry",
      price: 699,
      desc: "Complete Class 12 organic, physical & inorganic board syllabus.",
      features: [
        "All Class 12 chapters unlocked",
        "Board examiner AI answer evaluation",
        "Investigatory practical project templates",
        "Class 12 PYQs & mock board exams",
        "AI Tutor assistance",
        "365 days access (locks after expiry)",
      ],
      boardSelect: true,
    },
    {
      key: "neet",
      name: "NEET Chemistry",
      price: 999,
      desc: "High-yield chemistry prep engineered for NEET UG aspirants.",
      features: [
        "Complete NEET chemistry syllabus",
        "NCERT-exemplar & MCQ banks",
        "NEET-pattern full mock tests",
        "Mistake journal & weak topic analysis",
        "AI tutor and instant support",
        "365 days access (locks after expiry)",
      ],
    },
    {
      key: "jee-main",
      name: "JEE Main Chemistry",
      price: 1099,
      desc: "Comprehensive prep targeting JEE Main chemistry syllabus.",
      features: [
        "Entire JEE Main chemistry syllabus",
        "Advanced MCQ practice modules",
        "JEE Main pattern mock exams",
        "Spaced-revision queue & analytics",
        "Formula/named reaction libraries",
        "365 days access (locks after expiry)",
      ],
    },
    {
      key: "jee-advanced",
      name: "JEE Advanced Chemistry",
      price: 1499,
      desc: "Rigorous physical, organic & inorganic modules for JEE Advanced.",
      features: [
        "Full JEE Advanced curriculum",
        "Mechanism Visualizer access",
        "Multi-concept and numerical PYQs",
        "Mistake analysis & Readiness reports",
        "18+ year faculty-verified explanations",
        "365 days access (locks after expiry)",
      ],
    },
  ];

  function handleBuy(prog: ProgramOption) {
    let resolvedKey = prog.key;
    let resolvedName = prog.name;
    
    if (prog.key === "class-11") {
      resolvedKey = `${class11Board}:class-11`;
      resolvedName = `${class11Board.toUpperCase()} Class 11 Chemistry`;
    } else if (prog.key === "class-12") {
      resolvedKey = `${class12Board}:class-12`;
      resolvedName = `${class12Board.toUpperCase()} Class 12 Chemistry`;
    }

    track("upgrade_click", { programKey: resolvedKey });
    setSelectedKey(resolvedKey);
    setSelectedName(resolvedName);
    setSelectedAmount(`₹${prog.price}`);
    setDetailsOpen(true);
  }

  return (
    <main className="min-h-screen bg-black text-white p-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Simple, Program-Based Pricing
        </h1>
        <p className="text-zinc-400 text-base max-w-2xl mx-auto">
          Get complete annual access to your specific chemistry exam program. No recurring monthly bills, no bundled bloat — pay only for what you study.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {/* Free Plan */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-7 flex flex-col justify-between">
          <div>
            <div className="mb-6">
              <div className="text-sm font-semibold text-zinc-400 uppercase tracking-wide mb-2">Free Plan</div>
              <div className="text-4xl font-bold">₹0</div>
              <div className="text-zinc-500 text-xs mt-1">Free forever — no credit card needed</div>
            </div>
            <div className="space-y-3 mb-8">
              {FREE_FEATURES.map((f) => (
                <div key={f} className="flex items-start gap-3 text-xs text-zinc-300">
                  <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                  {f}
                </div>
              ))}
            </div>
          </div>
          <a
            href="/auth/signup"
            className="block w-full text-center border border-zinc-700 hover:border-zinc-500 text-white py-3 rounded-xl transition text-xs font-bold"
          >
            Get Started Free
          </a>
        </div>

        {/* Paid Programs */}
        {PROGRAMS.map((p) => (
          <div key={p.key} className="bg-zinc-900 border border-white/[0.08] rounded-3xl p-7 flex flex-col justify-between hover:border-cyan-500/30 transition">
            <div>
              <div className="mb-5">
                <div className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-2">{p.name}</div>
                <div className="flex items-end gap-2">
                  <div className="text-4xl font-black">₹{p.price}</div>
                  <div className="text-zinc-500 text-xs mb-1">/ year</div>
                </div>
                <p className="text-zinc-400 text-xs mt-2 leading-relaxed">{p.desc}</p>
              </div>

              {/* Board Selector for School Boards */}
              {p.boardSelect && (
                <div className="mb-5 bg-black/40 border border-white/5 rounded-xl p-3">
                  <span className="text-[10px] uppercase font-bold text-white/50 block mb-2">Select Syllabus Track</span>
                  <div className="grid grid-cols-3 gap-1.5">
                    {["cbse", "isc", "state-boards"].map((b) => {
                      const currentBoard = p.key === "class-11" ? class11Board : class12Board;
                      const setBoard = p.key === "class-11" ? setClass11Board : setClass12Board;
                      const active = currentBoard === b;
                      return (
                        <button
                          key={b}
                          onClick={() => setBoard(b)}
                          className={`py-1 rounded text-[10px] font-extrabold uppercase transition ${
                            active 
                              ? "bg-cyan-500 text-black" 
                              : "bg-white/5 text-white/50 border border-white/5 hover:bg-white/10"
                          }`}
                        >
                          {b === "state-boards" ? "State" : b}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="space-y-3 mb-6">
                {p.features.map((f) => (
                  <div key={f} className="flex items-start gap-3 text-xs text-zinc-300">
                    <span className="text-cyan-400 mt-0.5 flex-shrink-0">✓</span>
                    {f}
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleBuy(p)}
              className="block w-full text-center bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 rounded-xl transition text-xs hover:-translate-y-0.5"
            >
              Unlock {p.name} →
            </button>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Common Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "What is an annual program subscription?",
              a: "Unlike monthly memberships, program subscriptions grant you exactly 365 days of full access to a specific exam or board curriculum. Once the year expires, content will be locked unless you choose to renew it.",
            },
            {
              q: "Can I subscribe to multiple programs?",
              a: "Yes! You can add as many programs (e.g. CBSE Class 11 and NEET) to your account as you need from your student dashboard at any time.",
            },
            {
              q: "What exactly is free?",
              a: "One flagship chapter per branch of chemistry — General Organic Chemistry (organic), Mole Concept (physical) and Periodic Table (inorganic) — remains 100% unlocked for everyone. No credit card is required to use the free plan.",
            },
            {
              q: "Can I get a refund if I choose the wrong program?",
              a: "No. All program subscription additions and renewals are completely final and non-refundable. Please verify your selected syllabus track before checking out.",
            },
            {
              q: "Does my progress get deleted after expiry?",
              a: "No. Your streak, quiz history, mistake journal, and stats remain securely saved. They will be immediately accessible again when you renew your program access.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-zinc-400 text-xs leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </div>

      <StudentDetailsForm
        open={detailsOpen}
        onClose={() => setDetailsOpen(false)}
        onComplete={() => {
          setDetailsOpen(false);
          setPayOpen(true);
        }}
      />

      <PaymentGateway
        open={payOpen}
        onClose={() => setPayOpen(false)}
        programKey={selectedKey}
        plan={selectedName}
        amount={selectedAmount}
        period="year"
      />
    </main>
  );
}
