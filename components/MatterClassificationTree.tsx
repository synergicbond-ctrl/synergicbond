"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface TreeNode {
  id: string;
  label: string;
  definition?: string;
  children?: TreeNode[];
  yesPath?: TreeNode;
  noPath?: TreeNode;
  question?: string;
}

interface MatterClassificationTreeProps {
  onNodeSelect?: (node: TreeNode) => void;
}

export default function MatterClassificationTree({ onNodeSelect }: MatterClassificationTreeProps) {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set(["matter"]));

  const toggleNode = (id: string) => {
    const newExpanded = new Set(expandedNodes);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedNodes(newExpanded);
  };

  const isExpanded = (id: string) => expandedNodes.has(id);

  return (
    <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm">
      <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
        Categorizing the Material Universe
      </h2>

      <div className="space-y-4">
        {/* Matter - Root */}
        <div className="flex flex-col">
          <button
            onClick={() => {
              toggleNode("matter");
              onNodeSelect?.({ id: "matter", label: "Matter" });
            }}
            className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-indigo-950 dark:to-indigo-900 border border-indigo-200 dark:border-indigo-800 hover:shadow-md transition"
          >
            <ChevronDown
              size={20}
              className={`text-indigo-600 dark:text-indigo-400 transition-transform ${isExpanded("matter") ? "rotate-180" : ""}`}
            />
            <div className="text-left">
              <h3 className="font-bold text-indigo-700 dark:text-indigo-300">MATTER</h3>
              <p className="text-xs text-indigo-600 dark:text-indigo-400">Anything with mass and volume</p>
            </div>
          </button>

          {isExpanded("matter") && (
            <div className="ml-4 mt-3 border-l-2 border-indigo-200 dark:border-indigo-800 pl-4 space-y-3">
              {/* Pure vs Mixture - Decision point */}
              <div className="text-sm font-semibold text-slate-600 dark:text-slate-400 py-2">
                ❓ Is it uniform throughout?
              </div>

              {/* Left branch: Mixture */}
              <div>
                <button
                  onClick={() => {
                    toggleNode("mixture");
                    onNodeSelect?.({ id: "mixture", label: "MIXTURE" });
                  }}
                  className="flex items-center gap-2 p-3 rounded-xl bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800 hover:shadow-md transition w-full"
                >
                  <ChevronDown
                    size={16}
                    className={`text-orange-600 dark:text-orange-400 transition-transform ${isExpanded("mixture") ? "rotate-180" : ""}`}
                  />
                  <div className="text-left flex-1">
                    <h4 className="font-bold text-orange-700 dark:text-orange-300">No → MIXTURE</h4>
                    <p className="text-xs text-orange-600 dark:text-orange-400">Variable composition</p>
                  </div>
                </button>

                {isExpanded("mixture") && (
                  <div className="ml-4 mt-2 border-l-2 border-orange-200 dark:border-orange-800 pl-3 space-y-2">
                    <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 py-1">
                      Is it visually uniform?
                    </div>
                    <div className="p-3 rounded-lg bg-teal-50 dark:bg-teal-950 border border-teal-200 dark:border-teal-800">
                      <p className="text-sm font-bold text-teal-700 dark:text-teal-300">Yes → Homogeneous Mixture</p>
                      <p className="text-xs text-teal-600 dark:text-teal-400">e.g., salt water, sugar solution</p>
                    </div>
                    <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800">
                      <p className="text-sm font-bold text-red-700 dark:text-red-300">No → Heterogeneous Mixture</p>
                      <p className="text-xs text-red-600 dark:text-red-400">e.g., sand + water, mud, fog</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Right branch: Pure Substance */}
              <div>
                <button
                  onClick={() => {
                    toggleNode("pure");
                    onNodeSelect?.({ id: "pure", label: "PURE SUBSTANCE" });
                  }}
                  className="flex items-center gap-2 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 hover:shadow-md transition w-full"
                >
                  <ChevronDown
                    size={16}
                    className={`text-emerald-600 dark:text-emerald-400 transition-transform ${isExpanded("pure") ? "rotate-180" : ""}`}
                  />
                  <div className="text-left flex-1">
                    <h4 className="font-bold text-emerald-700 dark:text-emerald-300">Yes → PURE SUBSTANCE</h4>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400">Fixed composition</p>
                  </div>
                </button>

                {isExpanded("pure") && (
                  <div className="ml-4 mt-2 border-l-2 border-emerald-200 dark:border-emerald-800 pl-3 space-y-2">
                    <div className="text-xs font-semibold text-slate-600 dark:text-slate-400 py-1">
                      Can it be decomposed?
                    </div>
                    <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800">
                      <p className="text-sm font-bold text-blue-700 dark:text-blue-300">Yes → Compound</p>
                      <p className="text-xs text-blue-600 dark:text-blue-400">2+ elements (e.g., H<sub>2</sub>O, NaCl, C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>)</p>
                    </div>
                    <div className="p-3 rounded-lg bg-purple-50 dark:bg-purple-950 border border-purple-200 dark:border-purple-800">
                      <p className="text-sm font-bold text-purple-700 dark:text-purple-300">No → Element</p>
                      <p className="text-xs text-purple-600 dark:text-purple-400">1 kind of atom only (e.g., O<sub>2</sub>, Fe, Cu)</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <p className="text-xs text-slate-500 dark:text-slate-400 mt-6 italic">
        Tap boxes to expand and explore the classification hierarchy.
      </p>
    </div>
  );
}
