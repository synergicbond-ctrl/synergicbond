"use client";

import { useState } from "react";
import {
  ALL_PYQ_QUESTIONS,
  getByReagent,
  getByReaction,
  getByException,
  filterPYQ,
} from "@/lib/pyq";
import type { PYQQuestion } from "@/lib/pyq";
import { DIFFICULTY_BADGE, EXAM_BADGE } from "./uiHelpers";

type LinkKind = "reaction" | "reagent" | "exception" | "formula" | "ncert" | "concept";

const LINK_LABEL: Record<LinkKind, string> = {
  reaction: "Reaction",
  reagent: "Reagent",
  exception: "Exception",
  formula: "Formula",
  ncert: "NCERT",
  concept: "Concept",
};

const LINK_CHIP_CLASS: Record<LinkKind, string> = {
  reaction: "bg-orange-900/30 text-orange-300 hover:bg-orange-900/50",
  reagent: "bg-sky-900/30 text-sky-300 hover:bg-sky-900/50",
  exception: "bg-red-900/30 text-red-300 hover:bg-red-900/50",
  formula: "bg-purple-900/30 text-purple-300 hover:bg-purple-900/50",
  ncert: "bg-emerald-900/30 text-emerald-300 hover:bg-emerald-900/50",
  concept: "bg-cyan-900/30 text-cyan-300 hover:bg-cyan-900/50",
};

function getLinkedQuestions(kind: LinkKind, value: string, excludeId: string): PYQQuestion[] {
  let results: PYQQuestion[];
  switch (kind) {
    case "reaction":
      results = getByReaction(ALL_PYQ_QUESTIONS, value);
      break;
    case "reagent":
      results = getByReagent(ALL_PYQ_QUESTIONS, value);
      break;
    case "exception":
      results = getByException(ALL_PYQ_QUESTIONS, value);
      break;
    case "concept":
      results = filterPYQ(ALL_PYQ_QUESTIONS, { concept: value });
      break;
    case "formula":
      results = ALL_PYQ_QUESTIONS.filter((q) => q.formulas.includes(value));
      break;
    case "ncert":
      results = ALL_PYQ_QUESTIONS.filter((q) => q.ncertLines.includes(value));
      break;
  }
  return results.filter((q) => q.id !== excludeId).slice(0, 6);
}

function LinkChip({
  kind,
  value,
  active,
  onToggle,
}: {
  kind: LinkKind;
  value: string;
  active: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className={`px-2 py-1 rounded text-xs font-medium transition ${LINK_CHIP_CLASS[kind]} ${
        active ? "ring-1 ring-cyan-400" : ""
      }`}
      title={`See other PYQs linked to this ${LINK_LABEL[kind].toLowerCase()}`}
    >
      {value}
    </button>
  );
}

export default function QuestionCard({
  question,
  compact = false,
}: {
  question: PYQQuestion;
  compact?: boolean;
}) {
  const [revealed, setRevealed] = useState(false);
  const [activeLink, setActiveLink] = useState<{ kind: LinkKind; value: string } | null>(null);

  const toggleLink = (kind: LinkKind, value: string) => {
    setActiveLink((prev) => (prev && prev.kind === kind && prev.value === value ? null : { kind, value }));
  };

  const linkedQuestions = activeLink ? getLinkedQuestions(activeLink.kind, activeLink.value, question.id) : [];

  const chipGroups: Array<{ kind: LinkKind; values: string[] }> = [
    { kind: "concept", values: question.concepts },
    { kind: "reaction", values: question.reactions },
    { kind: "reagent", values: question.reagents },
    { kind: "exception", values: question.exceptions },
    { kind: "formula", values: question.formulas },
    { kind: "ncert", values: question.ncertLines },
  ];

  return (
    <div className="border border-white/10 rounded-lg p-4 md:p-6 space-y-3 hover:border-white/20 transition">
      {/* Meta */}
      <div className="flex flex-wrap gap-2 text-xs">
        <span className={`px-2 py-1 rounded font-semibold ${EXAM_BADGE[question.exam] ?? "bg-white/5"}`}>
          {question.exam}
        </span>
        <span className="bg-white/5 px-2 py-1 rounded">{question.year}</span>
        {!compact && <span className="bg-white/5 px-2 py-1 rounded">{question.chapter}</span>}
        <span className={`px-2 py-1 rounded font-semibold ${DIFFICULTY_BADGE[question.difficulty]}`}>
          {question.difficulty}
        </span>
        {question.ncertDirect && (
          <span className="bg-purple-900/40 text-purple-400 px-2 py-1 rounded">NCERT Direct</span>
        )}
        {question.trending && (
          <span className="bg-cyan-900/40 text-cyan-300 px-2 py-1 rounded">Trending</span>
        )}
      </div>

      {/* Question */}
      <p className="text-white font-medium leading-relaxed">{question.question}</p>

      {/* Options */}
      {question.options && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {Object.entries(question.options).map(([key, val]) => {
            const isCorrect = revealed && key === question.answer;
            return (
              <div
                key={key}
                className={`p-3 rounded-lg text-sm border transition ${
                  isCorrect
                    ? "bg-green-900/30 border-green-600 text-green-300 font-semibold"
                    : "bg-white/[0.03] border-white/10 text-white/70"
                }`}
              >
                <span className="font-bold mr-2">{key}.</span>
                {val}
              </div>
            );
          })}
        </div>
      )}

      {/* Explanation + knowledge linking */}
      {revealed && (
        <div className="bg-indigo-950/40 border border-indigo-800 rounded-lg p-4 text-sm text-slate-300 space-y-3">
          <div>
            <span className="font-bold text-indigo-400">Explanation:</span>
            <p className="mt-2">{question.explanation}</p>
          </div>

          <div className="space-y-2">
            {chipGroups.map(
              ({ kind, values }) =>
                values.length > 0 && (
                  <div key={kind} className="flex flex-wrap items-center gap-1.5">
                    <span className="text-xs font-semibold text-white/40 mr-1">{LINK_LABEL[kind]}:</span>
                    {values.map((v) => (
                      <LinkChip
                        key={`${kind}-${v}`}
                        kind={kind}
                        value={v}
                        active={activeLink?.kind === kind && activeLink.value === v}
                        onToggle={() => toggleLink(kind, v)}
                      />
                    ))}
                  </div>
                )
            )}
          </div>

          {activeLink && (
            <div className="border border-cyan-900/50 bg-cyan-950/20 rounded-lg p-3 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-cyan-300">
                  🔗 Other PYQs linked via {LINK_LABEL[activeLink.kind].toLowerCase()} &ldquo;{activeLink.value}&rdquo;
                </span>
                <button
                  onClick={() => setActiveLink(null)}
                  className="text-xs text-white/40 hover:text-white/70"
                >
                  ✕
                </button>
              </div>
              {linkedQuestions.length === 0 ? (
                <p className="text-xs text-white/40">No other questions found for this tag.</p>
              ) : (
                <ul className="space-y-1.5">
                  {linkedQuestions.map((lq) => (
                    <li key={lq.id} className="text-xs text-white/60 border-l-2 border-cyan-700/50 pl-2">
                      <span className="text-cyan-400 font-semibold">
                        {lq.exam} {lq.year}
                      </span>{" "}
                      · {lq.chapter} — {lq.question.slice(0, 90)}
                      {lq.question.length > 90 ? "…" : ""}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      )}

      <button
        onClick={() => setRevealed((r) => !r)}
        className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition"
      >
        {revealed ? "Hide" : "Reveal Answer & Explanation"}
      </button>
    </div>
  );
}
