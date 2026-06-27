"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Will I get all global test series based on the latest revised syllabus?",
    a: "Yes. Every test series — NEET, JEE Main/Advanced, GATE, and international exams — is mapped to the latest official revised syllabus and updated each session. New patterns are added within days of any board announcement.",
  },
  {
    q: "How does the multicolor visualization system help retention?",
    a: "Our engine color-codes chemistry by meaning: formulas in deep cyan, exceptions in warning crimson, and compounds in their real-world colors (KMnO₄ in violet, Cu²⁺ in sky blue). This visual encoding leverages memory science to dramatically improve recall under exam pressure.",
  },
  {
    q: "Can droppers utilize the adaptive 3-day recovery roadmap?",
    a: "Absolutely. Droppers benefit most. Submit your weak topics and the engine generates a personalized 3-day plan — Day 1 core theory, Day 2 flashcards & exceptions, Day 3 adaptive practice & mock drills. It rebuilds weak chapters fast.",
  },
  {
    q: "Is SYNERGIC BOND free to use?",
    a: "Core features — notes, search, daily challenges and the knowledge vault — are free. AI-powered tools (Snap & Solve, AI Tutor) run on a generous daily free-credit system, with an optional PRO tier for unlimited access and national rank analytics.",
  },
  {
    q: "Which exams and languages are supported?",
    a: "We cover NEET, JEE, GATE, INChO and major international exams (AP, MCAT, A-Levels, IB, Abitur). The platform supports English, Hindi, Hinglish, Spanish, Arabic, French and German.",
  },
  {
    q: "Who builds the content — is it just AI?",
    a: "Content is authored and verified by Prof. Mritunjay Shukla, an 18+ year chemistry faculty member, JEE Advanced expert, author and patent holder. AI accelerates delivery, but pedagogy comes from real expert experience.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <div className="mb-10 text-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.4em] text-cyan-300">
          FAQ
        </p>
        <h2 className="text-4xl font-black text-white">Frequently Asked Questions</h2>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              className="rounded-2xl bg-[#111827] border border-white/[0.06] overflow-hidden transition"
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex items-center justify-between w-full px-5 py-4 text-left"
              >
                <span className={`text-sm font-semibold pr-4 transition ${isOpen ? "text-white" : "text-gray-300"}`}>
                  {faq.q}
                </span>
                <ChevronDown
                  className={`h-4 w-4 flex-shrink-0 text-cyan-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className="grid transition-all duration-300 ease-in-out"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-4 text-sm text-gray-400 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
