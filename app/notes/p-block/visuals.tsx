import type { ReactNode } from "react";

function Frame({ title, caption, children }: { title: string; caption: string; children: ReactNode }) {
  return (
    <figure className="overflow-hidden rounded-lg border border-violet-300/15 bg-[#080d19] shadow-2xl shadow-black/25">
      <div className="border-b border-white/10 px-5 py-4 sm:px-7">
        <p className="text-[11px] font-black uppercase tracking-[.18em] text-violet-300">P-block visual atlas</p>
        <h3 className="mt-1 text-xl font-black text-white sm:text-2xl">{title}</h3>
      </div>
      <div className="overflow-x-auto p-4 sm:p-6">{children}</div>
      <figcaption className="border-t border-white/10 px-5 py-3 text-sm leading-6 text-slate-400 sm:px-7">{caption}</figcaption>
    </figure>
  );
}

// ============================================================================
// PART 1 — P-block map, trends & first-element anomaly
// ============================================================================
function Part1Visual() {
  const groups = [
    { g: "13", el: "B · Al · Ga · In · Tl" },
    { g: "14", el: "C · Si · Ge · Sn · Pb" },
    { g: "15", el: "N · P · As · Sb · Bi" },
    { g: "16", el: "O · S · Se · Te · Po" },
    { g: "17", el: "F · Cl · Br · I · At" },
    { g: "18", el: "He · Ne · Ar · Kr · Xe · Rn" },
  ];
  return (
    <Frame title="The six groups of the p-block" caption="Groups 13–18 fill the p-subshell (np¹ to np⁶). The first member of every group (B, C, N, O, F, He/Ne) is anomalous: small size, no d-orbitals, high electronegativity and a tendency to multiple bonding that heavier congeners lack.">
      <svg viewBox="0 0 1040 440" className="min-w-[780px] w-full" role="img" aria-label="P-block groups 13 to 18 overview">
        <rect width="1040" height="440" rx="28" fill="#070d18" />
        <text x="520" y="42" textAnchor="middle" fill="#f6efff" fontSize="24" fontWeight="800">np¹ → np⁶ across Groups 13–18</text>
        {groups.map((row, i) => {
          const y = 70 + i * 50;
          return (
            <g key={row.g}>
              <rect x="70" y={y} width="900" height="40" rx="10" fill={i % 2 === 0 ? "#101d2d" : "#0c1725"} stroke="#24405c" />
              <rect x="80" y={y + 6} width="70" height="28" rx="8" fill="#4b1d60" stroke="#e879f9" />
              <text x="115" y={y + 25} textAnchor="middle" fill="#ffeaff" fontSize="14" fontWeight="900">{row.g}</text>
              <text x="450" y={y + 25} textAnchor="middle" fill="#d7e2ea" fontSize="14.5" fontWeight="700">{row.el}</text>
            </g>
          );
        })}
        {/* Sits BELOW the six group rows (last row spans y 320-360); at y=336 it overlapped Group 18. */}
        <rect x="150" y="382" width="740" height="34" rx="10" fill="#422052" stroke="#e879f9" />
        <text x="520" y="405" textAnchor="middle" fill="#fff0ff" fontSize="13.5" fontWeight="800">First-member anomaly: small size + no vacant d-orbitals + higher electronegativity + pπ–pπ bonding</text>
      </svg>
    </Frame>
  );
}

// ============================================================================
// PART 20 — JEE Advanced synthesis & revision
// ============================================================================
function Part20Visual() {
  const rows = [
    ["Group 13", "electron-deficient, Lewis acidic", "BF₃, B₂H₆, Al₂Cl₆"],
    ["Group 14", "inert-pair effect grows down group", "Sn²⁺ reducing, Pb⁴⁺ oxidising"],
    ["Group 15", "N: pπ–pπ only; P onward: pπ–dπ / catenation", "N₂ vs P₄"],
    ["Group 16", "catenation strongest at S; oxoacid family from H₂SO₄", "S₈, oleum"],
    ["Group 17", "central-atom VSEPR gives every interhalogen shape", "ClF₃, BrF₅, IF₇"],
    ["Group 18", "Xe compounds only with F/O; shape by VSEPR again", "XeF₂ → XeO₃"],
  ];
  return (
    <Frame title="P-block master synthesis" caption="Every group's chemistry reduces to one governing idea. Walking into the exam with these six one-liners recovers most structural and reactivity questions even under time pressure.">
      <svg viewBox="0 0 1080 420" className="min-w-[820px] w-full" role="img" aria-label="P-block master comparison table">
        <rect width="1080" height="420" rx="28" fill="#070d18" />
        <rect x="60" y="50" width="960" height="48" rx="14" fill="#18273a" />
        <text x="160" y="80" textAnchor="middle" fill="#9db2c2" fontSize="14" fontWeight="800">Group</text>
        <text x="500" y="80" textAnchor="middle" fill="#9db2c2" fontSize="14" fontWeight="800">Governing idea</text>
        <text x="880" y="80" textAnchor="middle" fill="#9db2c2" fontSize="14" fontWeight="800">Signature example</text>
        {rows.map((row, i) => {
          const y = 108 + i * 50;
          return (
            <g key={row[0]}>
              <rect x="60" y={y} width="960" height="42" rx="10" fill={i % 2 === 0 ? "#0c1725" : "#101d2d"} stroke="#1f3447" />
              <text x="160" y={y + 27} textAnchor="middle" fill="#f5d0fe" fontSize="15" fontWeight="900">{row[0]}</text>
              <text x="500" y={y + 27} textAnchor="middle" fill="#d7e2ea" fontSize="13" fontWeight="700">{row[1]}</text>
              <text x="880" y={y + 27} textAnchor="middle" fill="#b7f3ff" fontSize="13.5" fontWeight="800">{row[2]}</text>
            </g>
          );
        })}
      </svg>
    </Frame>
  );
}

// ============================================================================
// Parts 2-19 (Groups 13-18) no longer render here — every group now has its
// own dedicated deep-dive chapter, and [part]/page.tsx redirects each of
// those lesson numbers there before this component would ever be reached
// (see deepDiveFor in ./_chapter). Their old per-part visuals (VseprShape,
// ShapeCard, siTetra/silicateGlyph and 16 PartNVisual components) were dead
// code for every visitor already — removed rather than left as an
// unreachable landmine, matching the same standard applied to
// carbon-family's Part8Visual in this same cleanup pass.
// ============================================================================
export function PBlockVisual({ part }: { part: number }) {
  switch (part) {
    case 1: return <Part1Visual />;
    case 20: return <Part20Visual />;
    default: return null;
  }
}
