"use client";

import { useState } from "react";

interface SigFigRule {
  operation: string;
  title: string;
  rule: string;
  example: string;
  expectedAnswer: string;
  color: string;
  bgColor: string;
  borderColor: string;
  details?: string;
}

export default function SigFigDecisionCards() {
  const [selectedRule, setSelectedRule] = useState<string | null>("addition");

  const rules: SigFigRule[] = [
    {
      operation: "addition",
      title: "Addition / Subtraction",
      rule: "Report to the FEWEST DECIMAL PLACES",
      example: "18.0 + 0.2 = ?",
      expectedAnswer: "18.2 (not 18.20)",
      color: "text-blue-700 dark:text-blue-300",
      bgColor: "bg-blue-50 dark:bg-blue-950",
      borderColor: "border-blue-200 dark:border-blue-800",
      details: "Look at decimal places: 18.0 has 1 decimal place, 0.2 has 1 decimal place. Answer must have ≤1 decimal place."
    },
    {
      operation: "multiplication",
      title: "Multiplication / Division",
      rule: "Report to the FEWEST SIG FIGS",
      example: "2.5 × 1.20 = ?",
      expectedAnswer: "3.0 (not 3.00)",
      color: "text-purple-700 dark:text-purple-300",
      bgColor: "bg-purple-50 dark:bg-purple-950",
      borderColor: "border-purple-200 dark:border-purple-800",
      details: "Look at sig figs: 2.5 has 2 sig figs, 1.20 has 3 sig figs. Answer must have ≤2 sig figs."
    }
  ];

  const selectedRuleObj = rules.find(r => r.operation === selectedRule) || rules[0];

  return (
    <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">
          Significant Figures Decision Tree
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          The most common JEE trap: using the wrong rule
        </p>
      </div>

      {/* Decision selector */}
      <div className="grid grid-cols-2 gap-3">
        {rules.map((rule) => (
          <button
            key={rule.operation}
            onClick={() => setSelectedRule(rule.operation)}
            className={`p-4 rounded-xl border-2 transition ${
              selectedRule === rule.operation
                ? `${rule.bgColor} ${rule.borderColor} border-2`
                : "bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-600"
            }`}
          >
            <p className={`text-sm font-bold ${selectedRule === rule.operation ? rule.color : "text-slate-700 dark:text-slate-300"}`}>
              {rule.title.split(" /")[0]}
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
              {rule.operation === "addition" ? "Addition" : "Multiplication"}
            </p>
          </button>
        ))}
      </div>

      {/* Rule detail */}
      <div className={`p-6 rounded-2xl border-2 ${selectedRuleObj.bgColor} ${selectedRuleObj.borderColor}`}>
        <div className="space-y-4">
          <div>
            <h3 className={`text-xl font-bold ${selectedRuleObj.color} mb-2`}>
              {selectedRuleObj.title}
            </h3>
            <p className={`text-sm font-semibold ${selectedRuleObj.color} mb-4 p-3 bg-white dark:bg-slate-800 rounded-lg`}>
              ⚡ {selectedRuleObj.rule}
            </p>
          </div>

          {/* Example */}
          <div className="bg-white dark:bg-slate-800 p-4 rounded-xl space-y-3">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              <span className="font-bold">Example:</span>
            </p>
            <p className="text-lg font-mono font-bold text-slate-900 dark:text-white">
              {selectedRuleObj.example}
            </p>
            <div className={`p-3 rounded-lg ${selectedRuleObj.bgColor}`}>
              <p className={`text-sm font-bold ${selectedRuleObj.color}`}>
                Answer: {selectedRuleObj.expectedAnswer}
              </p>
            </div>
          </div>

          {/* Detailed explanation */}
          {selectedRuleObj.details && (
            <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
              <p className="text-xs text-slate-700 dark:text-slate-300">
                <span className="font-semibold">Step-by-step: </span>{selectedRuleObj.details}
              </p>
            </div>
          )}

          {/* Why this matters */}
          <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 p-4 rounded-lg">
            <p className="text-sm text-red-800 dark:text-red-200">
              <span className="font-bold">🔴 JEE Trap:</span> Using multiplication rule for addition gets you marked wrong. {selectedRuleObj.operation === "addition" ? "18.0 + 0.2 = 18.20 loses points." : "2.5 × 1.20 = 3.00 loses points."}
            </p>
          </div>
        </div>
      </div>

      {/* Quick reference */}
      <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 p-4 rounded-xl">
        <p className="text-sm text-amber-800 dark:text-amber-200">
          <span className="font-bold">💡 Memory Aid:</span> Think &ldquo;fewest wins&rdquo; — whichever number has fewer decimals (or fewer sig figs) limits the answer.
        </p>
      </div>
    </div>
  );
}
