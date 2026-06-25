"use client";

import { useState } from "react";

const graphNodes = [
  { id: "physical", label: "Physical Chemistry", color: "text-blue-600 bg-blue-50 border-blue-200" },
  { id: "organic", label: "Organic Chemistry", color: "text-rose-600 bg-rose-50 border-rose-200" },
  { id: "inorganic", label: "Inorganic Chemistry", color: "text-amber-600 bg-amber-50 border-amber-200" },
];

export default function SyllabusGraph() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-6">
      <div className="text-center max-w-xl mx-auto space-y-2">
        <h2 className="text-2xl font-black text-slate-800 dark:text-slate-100">Syllabus Knowledge Graph</h2>
        <p className="text-xs text-slate-500 dark:text-slate-400">Explore the interconnected web of reactions, mechanisms, and physical laws powering the curriculum.</p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 py-6">
        {graphNodes.map((node) => (
          <button
            key={node.id}
            onClick={() => setActiveCategory(activeCategory === node.id ? null : node.id)}
            className={`px-6 py-4 rounded-2xl font-extrabold border-2 text-sm transition-all shadow-sm w-full md:w-64 text-center ${
              activeCategory === node.id 
                ? "border-indigo-600 ring-4 ring-indigo-50 dark:ring-indigo-950 scale-105" 
                : "border-transparent " + node.color
            }`}
          >
            {node.label}
          </button>
        ))}
      </div>

      {activeCategory && (
        <div className="p-6 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl animate-fadeIn space-y-3">
          <h3 className="font-bold text-sm text-indigo-700 dark:text-indigo-400 uppercase tracking-wider">Node Expansion: {activeCategory}</h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            {activeCategory === "physical" 
              ? "Nodes hydrate states, thermodynamic laws, and equilibrium parameters mapping directly to numerical calculation engines."
              : activeCategory === "organic" 
              ? "Nodes traverse arrow-pushing mechanisms, electrophilic/nucleophilic attacks, stereochemical outcomes, and name reactions."
              : "Nodes isolate periodic trends, d-block anomalies, coordination compounds, and salt analysis exceptions."}
          </p>
        </div>
      )}
    </div>
  );
}
