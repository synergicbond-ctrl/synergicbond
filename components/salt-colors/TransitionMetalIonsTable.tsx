"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

// Standalone educational table — kept separate from the Colour of Compounds
// database on purpose (aquated first-row transition-metal ion colours).
const IONS: { ion: string; colour: string }[] = [
  { ion: "Sc³⁺", colour: "Colourless" },
  { ion: "Ti⁴⁺", colour: "Colourless" },
  { ion: "Ti³⁺", colour: "Purple" },
  { ion: "V⁴⁺", colour: "Blue" },
  { ion: "V³⁺", colour: "Green" },
  { ion: "V²⁺", colour: "Violet" },
  { ion: "Cr³⁺", colour: "Violet" },
  { ion: "Mn³⁺", colour: "Violet" },
  { ion: "Cr²⁺", colour: "Blue" },
  { ion: "Mn²⁺", colour: "Pink" },
  { ion: "Fe³⁺", colour: "Yellow" },
  { ion: "Fe²⁺", colour: "Green" },
  { ion: "Co³⁺ / Co²⁺", colour: "Blue-Pink" },
  { ion: "Ni²⁺", colour: "Green" },
  { ion: "Cu²⁺", colour: "Blue" },
  { ion: "Zn²⁺", colour: "Colourless" },
];

function dotBackground(colour: string): string {
  const s = colour.toLowerCase();
  if (s.includes("blue-pink")) return "linear-gradient(135deg, #2563eb 0 50%, #f472b6 50% 100%)";
  if (s.includes("colourless")) return "#cbd5e1";
  if (s.includes("purple") || s.includes("violet")) return "#a855f7";
  if (s.includes("blue")) return "#2563eb";
  if (s.includes("green")) return "#22c55e";
  if (s.includes("pink")) return "#f472b6";
  if (s.includes("yellow")) return "#fde047";
  return "#94a3b8";
}

export default function TransitionMetalIonsTable() {
  const [q, setQ] = useState("");
  const query = q.trim().toLowerCase();

  const rows = useMemo(
    () => (query ? IONS.filter((r) => r.ion.toLowerCase().includes(query) || r.colour.toLowerCase().includes(query)) : IONS),
    [query],
  );

  return (
    <section className="mb-8">
      <h2 className="text-lg font-black text-cyan-300 mb-1">⚗️ Colours of Some of the First Row (Aquated) Transition Metal Ions</h2>
      <p className="text-xs text-white/45 mb-3">Aqueous ion colours — a separate quick-reference for the 3d series.</p>

      {/* Search */}
      <div className="relative mb-3 max-w-xs">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-white/35" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search ion or colour…"
          className="w-full rounded-xl border border-white/10 bg-[#111827] py-2 pl-9 pr-3 text-sm text-white placeholder-white/30 outline-none focus:border-cyan-400/40"
        />
      </div>

      <div className="overflow-x-auto rounded-2xl border border-white/[0.06]">
        <table className="w-full text-sm min-w-[360px]">
          <thead>
            <tr className="bg-white/[0.04] text-[10px] font-bold uppercase tracking-wider text-white/50">
              <th className="w-10 px-4 py-2.5" />
              <th className="text-left px-3 py-2.5">Ion</th>
              <th className="text-left px-3 py-2.5">Colour</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.ion} className={i % 2 ? "bg-[#111827]" : "bg-[#0e1421]"}>
                <td className="px-4 py-2.5">
                  <span className="block h-4 w-4 rounded-full border border-white/20" style={{ background: dotBackground(r.colour) }} />
                </td>
                <td className="px-3 py-2.5 font-mono font-bold text-cyan-300">{r.ion}</td>
                <td className="px-3 py-2.5 text-white/80">{r.colour}</td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={3} className="px-4 py-6 text-center text-sm text-white/40">No matching ion.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
