import type { ReactNode } from "react";

function Frame({ title, caption, children }: { title: string; caption: string; children: ReactNode }) {
  return (
    <figure className="overflow-hidden rounded-3xl border border-violet-300/15 bg-[#080d19] shadow-2xl shadow-black/25">
      <div className="border-b border-white/10 px-5 py-4 sm:px-7">
        <p className="text-[11px] font-black uppercase tracking-[.18em] text-violet-300">P-block visual atlas</p>
        <h3 className="mt-1 text-xl font-black text-white sm:text-2xl">{title}</h3>
      </div>
      <div className="overflow-x-auto p-4 sm:p-6">{children}</div>
      <figcaption className="border-t border-white/10 px-5 py-3 text-sm leading-6 text-slate-400 sm:px-7">{caption}</figcaption>
    </figure>
  );
}

// --- geometry helpers ------------------------------------------------------
function polar(cx: number, cy: number, r: number, deg: number) {
  const rad = ((deg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

type Ligand = { label: string; angleDeg: number; dist?: number; lone?: boolean };

/** Generic central-atom VSEPR shape: central atom with labelled ligands and lone-pair lobes
 * placed at explicit angles around it. Coordinates are computed, not copied from any source. */
function VseprShape({
  cx = 300,
  cy = 210,
  centralLabel,
  ligands,
  geometryLabel,
  angleLabel,
  color = "#57d4ec",
}: {
  cx?: number;
  cy?: number;
  centralLabel: string;
  ligands: Ligand[];
  geometryLabel: string;
  angleLabel?: string;
  color?: string;
}) {
  return (
    <g>
      {ligands.map((l, i) => {
        const p = polar(cx, cy, l.dist ?? 120, l.angleDeg);
        if (l.lone) {
          return (
            <g key={i}>
              <ellipse cx={(cx + p.x) / 2} cy={(cy + p.y) / 2} rx="20" ry="12"
                transform={`rotate(${l.angleDeg} ${(cx + p.x) / 2} ${(cy + p.y) / 2})`}
                fill="#fde68a33" stroke="#fde68a" strokeWidth="2" strokeDasharray="4 3" />
              <text x={p.x} y={p.y} textAnchor="middle" fill="#fde68a" fontSize="12" fontWeight="800">lp</text>
            </g>
          );
        }
        return (
          <g key={i}>
            <line x1={cx} y1={cy} x2={p.x} y2={p.y} stroke={color} strokeWidth="4" />
            <circle cx={p.x} cy={p.y} r="22" fill="#122232" stroke={color} strokeWidth="2.5" />
            <text x={p.x} y={p.y + 5} textAnchor="middle" fill="#eaf7fb" fontSize="15" fontWeight="800">{l.label}</text>
          </g>
        );
      })}
      <circle cx={cx} cy={cy} r="26" fill="#3a2059" stroke="#e879f9" strokeWidth="3" />
      <text x={cx} y={cy + 6} textAnchor="middle" fill="#ffeaff" fontSize="16" fontWeight="900">{centralLabel}</text>
      <text x={cx} y={cy + 70} textAnchor="middle" fill="#c9d6df" fontSize="14" fontWeight="800">{geometryLabel}</text>
      {angleLabel ? <text x={cx} y={cy + 90} textAnchor="middle" fill="#8fa4b4" fontSize="12.5">{angleLabel}</text> : null}
    </g>
  );
}

function ShapeCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0c1725] p-3">
      <svg viewBox="0 0 600 320" className="w-full">
        <rect width="600" height="320" rx="20" fill="#0a1220" />
        {children}
      </svg>
      <p className="mt-1 text-center text-xs font-bold text-slate-400">{title}</p>
    </div>
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
      <svg viewBox="0 0 1040 380" className="min-w-[780px] w-full" role="img" aria-label="P-block groups 13 to 18 overview">
        <rect width="1040" height="380" rx="28" fill="#070d18" />
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
        <rect x="150" y="336" width="740" height="34" rx="10" fill="#422052" stroke="#e879f9" />
        <text x="520" y="359" textAnchor="middle" fill="#fff0ff" fontSize="13.5" fontWeight="800">First-member anomaly: small size + no vacant d-orbitals + higher electronegativity + pπ–pπ bonding</text>
      </svg>
    </Frame>
  );
}

// ============================================================================
// PART 2 — Group 13: trends & bonding (electron deficiency)
// ============================================================================
function B12IcosahedronVisual() {
  // Icosahedron as a top pole + upper pentagon + lower pentagon (rotated 36°) + bottom pole —
  // 12 vertices, 30 edges, the standard wireframe schematic for this cage.
  const cx = 300, cyTop = 60, cyUp = 130, cyLow = 220, cyBot = 290;
  const rUp = 90, rLow = 90;
  const upper = Array.from({ length: 5 }, (_, i) => polar(cx, cyUp, rUp, i * 72));
  const lower = Array.from({ length: 5 }, (_, i) => polar(cx, cyLow, rLow, i * 72 + 36));
  const top = { x: cx, y: cyTop };
  const bottom = { x: cx, y: cyBot };
  const ring = (pts: { x: number; y: number }[]) => pts.map((p, i) => `${p.x},${p.y}${i === pts.length - 1 ? "" : " "}`).join("L");
  return (
    <ShapeCard title="B₁₂ icosahedron — 12 vertices, 20 triangular faces, 30 edges (the building block of every boron allotrope)">
      <g stroke="#57d4ec" strokeWidth="1.75" fill="none" opacity="0.85">
        <path d={`M ${ring(upper)} Z`} />
        <path d={`M ${ring(lower)} Z`} />
        {upper.map((p, i) => <line key={`t${i}`} x1={top.x} y1={top.y} x2={p.x} y2={p.y} />)}
        {lower.map((p, i) => <line key={`b${i}`} x1={bottom.x} y1={bottom.y} x2={p.x} y2={p.y} />)}
        {upper.map((p, i) => {
          const l1 = lower[i];
          const l2 = lower[(i + 4) % 5];
          return <g key={`z${i}`}><line x1={p.x} y1={p.y} x2={l1.x} y2={l1.y} /><line x1={p.x} y1={p.y} x2={l2.x} y2={l2.y} /></g>;
        })}
      </g>
      {[top, ...upper, ...lower, bottom].map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="9" fill="#3a2059" stroke="#e879f9" strokeWidth="2" />
      ))}
      <text x={cx} y="20" textAnchor="middle" fill="#fde68a" fontSize="11" fontWeight="800">two bonding environments: 1.72 Å (short) and 2.02 Å (long)</text>
    </ShapeCard>
  );
}

function BoronLatticeVisual() {
  // Simplified schematic: each icosahedron drawn as a compact vertex cluster,
  // linked to neighbouring clusters by the two bonding environments from Fig. above.
  const clusters = [
    { cx: 140, cy: 160 }, { cx: 300, cy: 100 }, { cx: 460, cy: 160 }, { cx: 300, cy: 230 },
  ];
  const links: [number, number, "short" | "long"][] = [[0, 1, "short"], [1, 2, "long"], [0, 3, "long"], [2, 3, "short"], [1, 3, "short"]];
  return (
    <ShapeCard title="β-rhombohedral boron lattice — each icosahedron links to 12 neighbours (schematic)">
      <g strokeWidth="2.5">
        {links.map(([a, b, kind], i) => (
          <line key={i} x1={clusters[a].cx} y1={clusters[a].cy} x2={clusters[b].cx} y2={clusters[b].cy}
            stroke={kind === "short" ? "#57d4ec" : "#fde68a"} strokeDasharray={kind === "long" ? "5 4" : undefined} />
        ))}
      </g>
      {clusters.map((c, ci) => (
        <g key={ci}>
          {Array.from({ length: 6 }, (_, k) => {
            const v = polar(c.cx, c.cy, 22, k * 60);
            return <circle key={k} cx={v.x} cy={v.y} r="6" fill="#3a2059" stroke="#e879f9" strokeWidth="1.5" />;
          })}
          <text x={c.cx} y={c.cy + 42} textAnchor="middle" fill="#8fa4b4" fontSize="10">B₁₂</text>
        </g>
      ))}
      <text x="300" y="20" textAnchor="middle" fill="#c9d6df" fontSize="11">— 1.72 Å (short, direct)   ┄ 2.02 Å (long, to a separate icosahedron)</text>
      <text x="300" y="300" textAnchor="middle" fill="#c9d6df" fontSize="11">giant covalent lattice → extreme hardness, very high melting point</text>
    </ShapeCard>
  );
}

function BF3BackBondingVisual() {
  const positions: [number, number, number][] = [0, 120, 240].map((deg, i) => [deg, i, 0] as [number, number, number]);
  return (
    <ShapeCard title="BF₃ back-bonding — one π bond delocalised over all three B–F bonds (bond order 1.33)">
      {positions.map(([deg], i) => {
        const cx = 130 + i * 175, cy = 165;
        const dblIndex = i; // which B–F bond carries the "formal" double bond in this resonance structure
        return (
          <g key={i}>
            {[0, 120, 240].map((a, li) => {
              const p = polar(cx, cy, 65, a);
              const isDouble = li === dblIndex;
              return (
                <g key={li}>
                  <line x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="#57d4ec" strokeWidth={isDouble ? 5 : 3} />
                  {isDouble ? <line x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="#0a1220" strokeWidth="1.5" strokeDasharray="1 3" /> : null}
                  <circle cx={p.x} cy={p.y} r="16" fill="#122232" stroke="#57d4ec" strokeWidth="2" />
                  <text x={p.x} y={p.y + 4} textAnchor="middle" fill="#eaf7fb" fontSize="12" fontWeight="800">F</text>
                </g>
              );
            })}
            <circle cx={cx} cy={cy} r="20" fill="#3a2059" stroke="#e879f9" strokeWidth="2.5" />
            <text x={cx} y={cy + 5} textAnchor="middle" fill="#ffeaff" fontSize="13" fontWeight="900">B</text>
            {i < 2 ? <text x={cx + 87} y={cy + 4} fill="#c9d6df" fontSize="18" fontWeight="800">⇌</text> : null}
          </g>
        );
      })}
      <text x="300" y="270" textAnchor="middle" fill="#c9d6df" fontSize="11.5">3 equivalent resonance structures ≡ one 4-centre π MO — all 3 B–F bonds equal (130 pm)</text>
    </ShapeCard>
  );
}


function Group13TrendMapVisual() {
  const rows = [
    ["Atomic radius", "B < Ga < Al < In < Tl", "Ga contracts because 3d¹⁰ shields poorly"],
    ["IE₁", "In < Al < Ga < Tl < B", "B is exceptionally small; Ga/Tl are contracted"],
    ["Electronegativity", "Al < Ga < In < Tl < B", "d/f contraction reverses a simple down-group fall"],
    ["+1 stability", "Ga < In < Tl", "inert-pair effect increases down the group"],
    ["Oxide acidity", "B₂O₃ > Al₂O₃ > Ga₂O₃ > In₂O₃", "metallic character increases down the group"],
  ];
  return (
    <ShapeCard title="Master Group 13 orders — observation, anomaly and cause">
      <g transform="translate(28,42)">
        {rows.map((r, i) => {
          const y = i * 48;
          return (
            <g key={r[0]}>
              <rect x="0" y={y} width="544" height="39" rx="9" fill={i % 2 ? "#0d1b2a" : "#122232"} stroke="#24405c" />
              <text x="14" y={y + 16} fill="#fde68a" fontSize="11" fontWeight="900">{r[0]}</text>
              <text x="14" y={y + 31} fill="#eaf7fb" fontSize="12" fontWeight="800">{r[1]}</text>
              <text x="260" y={y + 25} fill="#9fb2c1" fontSize="10.5">{r[2]}</text>
            </g>
          );
        })}
      </g>
    </ShapeCard>
  );
}

function InertPairEnergyVisual() {
  return (
    <ShapeCard title="Inert-pair effect — why +1 becomes stable down Group 13">
      <defs>
        <marker id="g13-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#57d4ec" /></marker>
      </defs>
      <g transform="translate(40,36)">
        {[0,1,2,3,4].map((i) => {
          const x=40+i*108;
          const gap=[52,56,72,66,94][i];
          const label=["B","Al","Ga","In","Tl"][i];
          return <g key={label}>
            <line x1={x} y1="200" x2={x+55} y2="200" stroke="#e879f9" strokeWidth="4" />
            <text x={x+28} y="222" textAnchor="middle" fill="#f4d7ff" fontSize="12" fontWeight="900">ns²</text>
            <line x1={x} y1={200-gap} x2={x+55} y2={200-gap} stroke="#57d4ec" strokeWidth="4" />
            <text x={x+28} y={188-gap} textAnchor="middle" fill="#dff8ff" fontSize="12" fontWeight="900">np</text>
            <line x1={x+28} y1="190" x2={x+28} y2={210-gap} stroke="#57d4ec" strokeWidth="2" markerEnd="url(#g13-arrow)" />
            <text x={x+28} y="260" textAnchor="middle" fill="#eaf7fb" fontSize="13" fontWeight="900">{label}</text>
          </g>;
        })}
        <text x="270" y="285" textAnchor="middle" fill="#fde68a" fontSize="12" fontWeight="800">larger ns–np separation → ns² pair harder to use → +1 state stabilised</text>
      </g>
    </ShapeCard>
  );
}

function Part2Visual() {
  return (
    <Frame title="Electron deficiency and elemental boron's cage structure" caption="Every Group 13 element has only 3 valence electrons for 4 orbitals (one s + three p) — trihalides and trialkyls are electron-deficient, a vacant p-orbital making them strong Lewis acids. Elemental boron itself is built from B₁₂ icosahedra covalently linked into a rigid lattice, the structural reason for its extreme hardness and high melting point.">
      <div className="grid gap-4 sm:grid-cols-2">
        <ShapeCard title="BF₃ — trigonal planar, sp² B, empty pz orbital (strong Lewis acid)">
          <VseprShape cx={220} cy={170} centralLabel="B" geometryLabel="Trigonal planar" angleLabel="∠F–B–F = 120°"
            ligands={[
              { label: "F", angleDeg: 0 }, { label: "F", angleDeg: 120 }, { label: "F", angleDeg: 240 },
            ]} />
          <ellipse cx="220" cy="90" rx="14" ry="34" fill="none" stroke="#fde68a" strokeWidth="2" strokeDasharray="3 3" />
          <text x="220" y="50" textAnchor="middle" fill="#fde68a" fontSize="12" fontWeight="800">empty p</text>
        </ShapeCard>
        <ShapeCard title="Group 13 valence count: 3 electrons, 4 orbitals available">
          <g transform="translate(300,160)">
            {["s", "px", "py", "pz"].map((o, i) => (
              <g key={o} transform={`translate(${i * 90 - 135},0)`}>
                <rect x="-30" y="-20" width="60" height="40" rx="8" fill={i === 3 ? "#211235" : "#173247"} stroke={i === 3 ? "#fde68a" : "#57d4ec"} strokeDasharray={i === 3 ? "4 3" : undefined} />
                <text textAnchor="middle" y="6" fill={i === 3 ? "#fde68a" : "#eaf7fb"} fontSize="14" fontWeight="800">{o}</text>
                {i < 3 ? <circle cx="0" cy="34" r="5" fill="#e879f9" /> : <text y="34" textAnchor="middle" fill="#8fa4b4" fontSize="11">vacant</text>}
              </g>
            ))}
          </g>
          <text x="300" y="260" textAnchor="middle" fill="#c9d6df" fontSize="13" fontWeight="700">3 electrons fill s + 2p → 1 p-orbital stays empty</text>
        </ShapeCard>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Group13TrendMapVisual />
        <InertPairEnergyVisual />
      </div>
      <div className="mt-4">
        <BF3BackBondingVisual />
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <B12IcosahedronVisual />
        <BoronLatticeVisual />
      </div>
    </Frame>
  );
}

// ============================================================================
// PART 3 — Borax, boric acid, BF3, diborane, alums
// ============================================================================
function DiboraneVisual() {
  return (
    <ShapeCard title="B₂H₆ — two 3-centre-2-electron (banana) bonds through bridging H">
      <g transform="translate(300,170)">
        {[[-90, 0], [90, 0]].map(([dx], i) => (
          <circle key={i} cx={dx} cy="0" r="24" fill="#3a2059" stroke="#e879f9" strokeWidth="3" />
        ))}
        <text x="-90" y="6" textAnchor="middle" fill="#ffeaff" fontSize="15" fontWeight="900">B</text>
        <text x="90" y="6" textAnchor="middle" fill="#ffeaff" fontSize="15" fontWeight="900">B</text>
        {/* terminal H's, normal 2c-2e bonds */}
        {[[-150, -70], [-150, 70], [150, -70], [150, 70]].map(([x, y], i) => (
          <g key={i}>
            <line x1={x > 0 ? 90 : -90} y1="0" x2={x} y2={y} stroke="#57d4ec" strokeWidth="3.5" />
            <circle cx={x} cy={y} r="16" fill="#122232" stroke="#57d4ec" strokeWidth="2" />
            <text x={x} y={y + 5} textAnchor="middle" fill="#eaf7fb" fontSize="12.5" fontWeight="800">H</text>
          </g>
        ))}
        {/* bridging H's, 3c-2e banana bonds */}
        {[-1, 1].map((s) => (
          <g key={s}>
            <path d={`M -90 0 Q 0 ${s * 90} 90 0`} fill="none" stroke="#fde68a" strokeWidth="3.5" strokeDasharray="1 0" />
            <circle cx="0" cy={s * 62} r="16" fill="#211235" stroke="#fde68a" strokeWidth="2.5" />
            <text x="0" y={s * 62 + 5} textAnchor="middle" fill="#fde68a" fontSize="12.5" fontWeight="800">H</text>
          </g>
        ))}
        <text x="0" y="-118" textAnchor="middle" fill="#fde68a" fontSize="12" fontWeight="800">bridging H = 3c–2e bond</text>
      </g>
    </ShapeCard>
  );
}

function BoraxVisual() {
  return (
    <ShapeCard title="Borax anion [B₄O₅(OH)₄]²⁻ — 2 sp³ (tetrahedral) + 2 sp² (triangular) boron">
      <g transform="translate(300,175)">
        {/* two BO4 tetrahedra drawn as diamonds, two BO3 triangles */}
        {[-150, -50].map((x, i) => (
          <g key={i} transform={`translate(${x},0)`}>
            <polygon points="0,-46 34,0 0,46 -34,0" fill="#173247" stroke="#57d4ec" strokeWidth="2.5" />
            <text y="6" textAnchor="middle" fill="#eaf7fb" fontSize="13" fontWeight="900">B</text>
            <text y="-52" textAnchor="middle" fill="#8fa4b4" fontSize="10.5">sp³ BO₄⁻</text>
          </g>
        ))}
        {[50, 150].map((x, i) => (
          <g key={i} transform={`translate(${x},0)`}>
            <polygon points="0,-30 30,22 -30,22" fill="#4b1d60" stroke="#e879f9" strokeWidth="2.5" />
            <text y="10" textAnchor="middle" fill="#ffeaff" fontSize="13" fontWeight="900">B</text>
            <text y="-38" textAnchor="middle" fill="#8fa4b4" fontSize="10.5">sp² BO₃</text>
          </g>
        ))}
        <line x1="-116" y1="0" x2="20" y2="0" stroke="#fde68a" strokeWidth="2" strokeDasharray="2 3" />
        <line x1="20" y1="0" x2="120" y2="0" stroke="#fde68a" strokeWidth="2" strokeDasharray="2 3" />
        <line x1="-50" y1="46" x2="50" y2="22" stroke="#fde68a" strokeWidth="2" strokeDasharray="2 3" />
        <text x="0" y="-70" textAnchor="middle" fill="#c9d6df" fontSize="11.5">bridging O links alternate sp³ and sp² boron</text>
      </g>
    </ShapeCard>
  );
}

function Al2Cl6Visual() {
  return (
    <ShapeCard title="Al₂Cl₆ — two 3-centre-4-electron (Cl lone pair donated) bridges, unlike diborane's 3c-2e">
      <g transform="translate(300,170)">
        {[[-90, 0], [90, 0]].map(([dx], i) => (
          <circle key={i} cx={dx} cy="0" r="24" fill="#173247" stroke="#57d4ec" strokeWidth="3" />
        ))}
        <text x="-90" y="6" textAnchor="middle" fill="#eaf7fb" fontSize="15" fontWeight="900">Al</text>
        <text x="90" y="6" textAnchor="middle" fill="#eaf7fb" fontSize="15" fontWeight="900">Al</text>
        {/* terminal Cl, normal 2c-2e, 206 pm */}
        {[[-150, -70], [-150, 70], [150, -70], [150, 70]].map(([x, y], i) => (
          <g key={i}>
            <line x1={x > 0 ? 90 : -90} y1="0" x2={x} y2={y} stroke="#57d4ec" strokeWidth="3.5" />
            <circle cx={x} cy={y} r="16" fill="#122232" stroke="#57d4ec" strokeWidth="2" />
            <text x={x} y={y + 5} textAnchor="middle" fill="#eaf7fb" fontSize="12.5" fontWeight="800">Cl</text>
          </g>
        ))}
        {/* bridging Cl, 3c-4e, 221 pm, lone pair donated */}
        {[-1, 1].map((s) => (
          <g key={s}>
            <path d={`M -90 0 Q 0 ${s * 90} 90 0`} fill="none" stroke="#fde68a" strokeWidth="3.5" />
            <circle cx="0" cy={s * 62} r="16" fill="#211235" stroke="#fde68a" strokeWidth="2.5" />
            <text x="0" y={s * 62 + 5} textAnchor="middle" fill="#fde68a" fontSize="12.5" fontWeight="800">Cl</text>
          </g>
        ))}
        <text x="0" y="-118" textAnchor="middle" fill="#fde68a" fontSize="12" fontWeight="800">bridging Cl (221 pm) donates a lone pair — 3c-4e</text>
        <text x="0" y="130" textAnchor="middle" fill="#c9d6df" fontSize="11.5">terminal Al–Cl = 206 pm, shorter than the bridge</text>
      </g>
    </ShapeCard>
  );
}

function Al2Me6Visual() {
  return (
    <ShapeCard title="Al₂(CH₃)₆ — bridging methyl carbon has no spare lone pair, so the bridge is 3c-2e (like diborane)">
      <g transform="translate(300,170)">
        {[[-90, 0], [90, 0]].map(([dx], i) => (
          <circle key={i} cx={dx} cy="0" r="24" fill="#173247" stroke="#57d4ec" strokeWidth="3" />
        ))}
        <text x="-90" y="6" textAnchor="middle" fill="#eaf7fb" fontSize="15" fontWeight="900">Al</text>
        <text x="90" y="6" textAnchor="middle" fill="#eaf7fb" fontSize="15" fontWeight="900">Al</text>
        {[[-150, -70], [-150, 70], [150, -70], [150, 70]].map(([x, y], i) => (
          <g key={i}>
            <line x1={x > 0 ? 90 : -90} y1="0" x2={x} y2={y} stroke="#57d4ec" strokeWidth="3.5" />
            <circle cx={x} cy={y} r="18" fill="#122232" stroke="#57d4ec" strokeWidth="2" />
            <text x={x} y={y + 5} textAnchor="middle" fill="#eaf7fb" fontSize="11.5" fontWeight="800">CH₃</text>
          </g>
        ))}
        {[-1, 1].map((s) => (
          <g key={s}>
            <path d={`M -90 0 Q 0 ${s * 90} 90 0`} fill="none" stroke="#e879f9" strokeWidth="3.5" />
            <circle cx="0" cy={s * 62} r="18" fill="#211235" stroke="#e879f9" strokeWidth="2.5" />
            <text x="0" y={s * 62 + 5} textAnchor="middle" fill="#ffeaff" fontSize="11.5" fontWeight="800">CH₃</text>
          </g>
        ))}
        <text x="0" y="-118" textAnchor="middle" fill="#e879f9" fontSize="12" fontWeight="800">bridging CH₃ shares its one C–Al bonding pair — 3c-2e</text>
        <text x="0" y="130" textAnchor="middle" fill="#c9d6df" fontSize="11.5">contrast Al₂Cl₆: Cl&apos;s spare lone pair makes that bridge 3c-4e instead</text>
      </g>
    </ShapeCard>
  );
}

function BorazineVisual() {
  const cx = 300, cy = 170, r = 90;
  const pts = Array.from({ length: 6 }, (_, i) => polar(cx, cy, r, i * 60));
  return (
    <ShapeCard title="Borazine B₃N₃H₆ — 'inorganic benzene,' alternating B and N around the ring">
      <g>
        {pts.map((p, i) => {
          const next = pts[(i + 1) % 6];
          return <line key={i} x1={p.x} y1={p.y} x2={next.x} y2={next.y} stroke="#57d4ec" strokeWidth="2.5" />;
        })}
        {pts.map((p, i) => {
          const isB = i % 2 === 0;
          const h = polar(cx, cy, r + 42, i * 60);
          return (
            <g key={i}>
              <line x1={p.x} y1={p.y} x2={h.x} y2={h.y} stroke="#8fa4b4" strokeWidth="2" />
              <text x={h.x} y={h.y + 4} textAnchor="middle" fill="#8fa4b4" fontSize="11" fontWeight="700">H</text>
              <circle cx={p.x} cy={p.y} r="18" fill={isB ? "#3a2059" : "#173247"} stroke={isB ? "#e879f9" : "#57d4ec"} strokeWidth="2.5" />
              <text x={p.x} y={p.y + 5} textAnchor="middle" fill={isB ? "#ffeaff" : "#eaf7fb"} fontSize="13" fontWeight="900">{isB ? "B" : "N"}</text>
            </g>
          );
        })}
        <text x={cx} y="30" textAnchor="middle" fill="#c9d6df" fontSize="12">isoelectronic with benzene (30 valence e⁻) — but only ~36% as aromatic</text>
      </g>
    </ShapeCard>
  );
}

function TetrahedralAnionsVisual() {
  return (
    <ShapeCard title="[BF₄]⁻ and [MH₄]⁻ (M = B, Al) — both simple tetrahedral ions">
      <VseprShape cx={175} cy={190} centralLabel="B" geometryLabel="[BF₄]⁻" angleLabel="tetrahedral, 109.5°"
        ligands={[
          { label: "F", angleDeg: 45, dist: 95 }, { label: "F", angleDeg: 135, dist: 95 },
          { label: "F", angleDeg: 225, dist: 95 }, { label: "F", angleDeg: 315, dist: 95 },
        ]} />
      <VseprShape cx={430} cy={190} centralLabel="M" geometryLabel="[MH₄]⁻" angleLabel="tetrahedral, 109.5°"
        ligands={[
          { label: "H", angleDeg: 45, dist: 95 }, { label: "H", angleDeg: 135, dist: 95 },
          { label: "H", angleDeg: 225, dist: 95 }, { label: "H", angleDeg: 315, dist: 95 },
        ]} />
      <text x="300" y="290" textAnchor="middle" fill="#c9d6df" fontSize="11.5">LiAlH₄ (M = Al) is the stronger reducing agent — Al–H is more hydridic than B–H</text>
    </ShapeCard>
  );
}

function HbnVisual() {
  const rows = 2, cols = 3, dx = 78, dy = 68;
  const cells: { x: number; y: number }[] = [];
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) cells.push({ x: 130 + c * dx * 1.5 + (r % 2 ? dx * 0.75 : 0), y: 90 + r * dy });
  return (
    <ShapeCard title="Hexagonal boron nitride — alternating B/N hexagons, layers stack eclipsed (unlike graphite)">
      <g stroke="#57d4ec" strokeWidth="1.75" opacity="0.9">
        {cells.map((p, i) => {
          const hex = Array.from({ length: 6 }, (_, k) => polar(p.x, p.y, 38, k * 60));
          return <polygon key={i} points={hex.map((h) => `${h.x},${h.y}`).join(" ")} fill="none" />;
        })}
      </g>
      {cells.flatMap((p, ci) =>
        Array.from({ length: 6 }, (_, k) => {
          const v = polar(p.x, p.y, 38, k * 60);
          const isB = (ci + k) % 2 === 0;
          return (
            <circle key={`${ci}-${k}`} cx={v.x} cy={v.y} r="9" fill={isB ? "#3a2059" : "#173247"} stroke={isB ? "#e879f9" : "#57d4ec"} strokeWidth="1.5" />
          );
        })
      )}
      <text x="300" y="230" textAnchor="middle" fill="#c9d6df" fontSize="11.5">soft, slippery lubricant (&quot;white graphite&quot;) — an electrical insulator, unlike graphite</text>
    </ShapeCard>
  );
}

function CbnVisual() {
  // Cubic BN (borazon): zinc-blende-type network — each B tetrahedrally bonded to 4 N and vice versa.
  const cx = 300, cy = 165;
  const corners = [
    { x: cx - 110, y: cy - 70, label: "N" }, { x: cx + 20, y: cy - 100, label: "N" },
    { x: cx + 110, y: cy - 20, label: "N" }, { x: cx - 20, y: cy + 90, label: "N" },
  ];
  return (
    <ShapeCard title="Cubic boron nitride (borazon) — diamond-like sp³ network, second-hardest known material">
      {corners.map((c, i) => (
        <line key={i} x1={cx} y1={cy} x2={c.x} y2={c.y} stroke="#57d4ec" strokeWidth="3" />
      ))}
      <circle cx={cx} cy={cy} r="20" fill="#3a2059" stroke="#e879f9" strokeWidth="2.5" />
      <text x={cx} y={cy + 5} textAnchor="middle" fill="#ffeaff" fontSize="13" fontWeight="900">B</text>
      {corners.map((c, i) => (
        <g key={i}>
          <circle cx={c.x} cy={c.y} r="16" fill="#173247" stroke="#57d4ec" strokeWidth="2" />
          <text x={c.x} y={c.y + 4} textAnchor="middle" fill="#eaf7fb" fontSize="12" fontWeight="800">{c.label}</text>
        </g>
      ))}
      <text x="300" y="280" textAnchor="middle" fill="#c9d6df" fontSize="11.5">every B tetrahedrally bonded to 4 N (and vice versa) — unlike diamond, stable toward hot iron</text>
    </ShapeCard>
  );
}

function CageClassificationVisual() {
  const cages = [
    { label: "closo", n: 6, missing: 0 },
    { label: "nido", n: 6, missing: 1 },
    { label: "arachno", n: 6, missing: 2 },
  ];
  return (
    <ShapeCard title="closo / nido / arachno — a complete deltahedron vs one or two vertices removed">
      {cages.map((cage, ci) => {
        const cx = 110 + ci * 190, cy = 170, r = 65;
        const pts = Array.from({ length: cage.n }, (_, i) => polar(cx, cy, r, i * (360 / cage.n)));
        const shown = pts.slice(0, cage.n - cage.missing);
        return (
          <g key={cage.label}>
            <polygon points={shown.map((p) => `${p.x},${p.y}`).join(" ")} fill="#173247" fillOpacity="0.4" stroke="#57d4ec" strokeWidth="2" />
            {shown.map((p, i) => <circle key={i} cx={p.x} cy={p.y} r="8" fill="#3a2059" stroke="#e879f9" strokeWidth="1.75" />)}
            {pts.slice(cage.n - cage.missing).map((p, i) => (
              <circle key={`m${i}`} cx={p.x} cy={p.y} r="8" fill="none" stroke="#8fa4b4" strokeWidth="1.5" strokeDasharray="2 2" />
            ))}
            <text x={cx} y={cy + 100} textAnchor="middle" fill="#eaf7fb" fontSize="13" fontWeight="800">{cage.label}</text>
            <text x={cx} y={cy + 116} textAnchor="middle" fill="#8fa4b4" fontSize="10.5">{cage.missing === 0 ? "complete cage" : `${cage.missing} vertex${cage.missing > 1 ? "es" : ""} removed`}</text>
          </g>
        );
      })}
    </ShapeCard>
  );
}


function HalideLogicVisual() {
  return (
    <ShapeCard title="Halide decision map — back bonding, Lewis acidity and hydrolysis">
      <defs>
        <marker id="hal-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#57d4ec" /></marker>
      </defs>
      <g transform="translate(35,44)">
        <rect x="0" y="55" width="125" height="58" rx="12" fill="#3a2059" stroke="#e879f9" />
        <text x="62" y="78" textAnchor="middle" fill="#ffeaff" fontSize="13" fontWeight="900">BX₃</text>
        <text x="62" y="98" textAnchor="middle" fill="#d8c7e6" fontSize="10.5">sp², empty p</text>
        <line x1="126" y1="84" x2="218" y2="84" stroke="#57d4ec" strokeWidth="2.5" markerEnd="url(#hal-arrow)" />
        <rect x="222" y="25" width="150" height="58" rx="12" fill="#122232" stroke="#57d4ec" />
        <text x="297" y="48" textAnchor="middle" fill="#eaf7fb" fontSize="12" fontWeight="900">back donation strong</text>
        <text x="297" y="68" textAnchor="middle" fill="#fde68a" fontSize="11">BF₃: weakest acid</text>
        <rect x="222" y="108" width="150" height="58" rx="12" fill="#122232" stroke="#57d4ec" />
        <text x="297" y="131" textAnchor="middle" fill="#eaf7fb" fontSize="12" fontWeight="900">back donation weak</text>
        <text x="297" y="151" textAnchor="middle" fill="#fde68a" fontSize="11">BI₃: strongest acid</text>
        <line x1="375" y1="54" x2="468" y2="54" stroke="#57d4ec" strokeWidth="2.5" markerEnd="url(#hal-arrow)" />
        <line x1="375" y1="137" x2="468" y2="137" stroke="#57d4ec" strokeWidth="2.5" markerEnd="url(#hal-arrow)" />
        <rect x="472" y="25" width="95" height="58" rx="12" fill="#173247" stroke="#57d4ec" />
        <text x="520" y="49" textAnchor="middle" fill="#eaf7fb" fontSize="11" fontWeight="900">adduct</text>
        <text x="520" y="67" textAnchor="middle" fill="#c9d6df" fontSize="10">BF₄⁻ / F₃B←L</text>
        <rect x="472" y="108" width="95" height="58" rx="12" fill="#173247" stroke="#57d4ec" />
        <text x="520" y="132" textAnchor="middle" fill="#eaf7fb" fontSize="11" fontWeight="900">hydrolysis</text>
        <text x="520" y="150" textAnchor="middle" fill="#c9d6df" fontSize="10">H₃BO₃ + HX</text>
        <text x="285" y="220" textAnchor="middle" fill="#fde68a" fontSize="12" fontWeight="900">Lewis acidity: BF₃ &lt; BCl₃ &lt; BBr₃ &lt; BI₃</text>
      </g>
    </ShapeCard>
  );
}

function Part3Visual() {
  return (
    <Frame title="Boron's signature structures" caption="Diborane's electron-deficient bridge, borax's mixed sp²/sp³ boron framework, boric acid's planar H-bonded sheets, and the halide, hydride and cage structures covered in Parts 9–15.">
      <div className="mb-4">
        <HalideLogicVisual />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <DiboraneVisual />
        <BoraxVisual />
      </div>
      <div className="mt-4">
        <ShapeCard title="H₃BO₃ (boric acid) — planar BO₃ unit, sheets held by H-bonds → flaky, soap-like feel">
          <g transform="translate(300,170)">
            <polygon points="0,-40 35,20 -35,20" fill="#173247" stroke="#57d4ec" strokeWidth="2.5" />
            <text y="4" textAnchor="middle" fill="#eaf7fb" fontSize="13" fontWeight="900">B</text>
            {[[0, -40], [35, 20], [-35, 20]].map(([x, y], i) => (
              <g key={i}>
                <circle cx={x * 1.7} cy={y * 1.7} r="13" fill="#122232" stroke="#57d4ec" strokeWidth="2" />
                <text x={x * 1.7} y={y * 1.7 + 4} textAnchor="middle" fill="#eaf7fb" fontSize="11" fontWeight="800">OH</text>
                <line x1={x * 0.55} y1={y * 0.55} x2={x * 1.5} y2={y * 1.5} stroke="#57d4ec" strokeWidth="2.5" />
              </g>
            ))}
            <text y="80" textAnchor="middle" fill="#c9d6df" fontSize="12">acts as a Lewis acid: B(OH)₃ + 2H₂O ⇌ [B(OH)₄]⁻ + H₃O⁺ (not proton donor)</text>
          </g>
        </ShapeCard>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Al2Cl6Visual />
        <Al2Me6Visual />
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <TetrahedralAnionsVisual />
        <BorazineVisual />
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <HbnVisual />
        <CbnVisual />
      </div>
      <div className="mt-4">
        <CageClassificationVisual />
      </div>
    </Frame>
  );
}

// ============================================================================
// PART 4 — Group 14: carbon, silicon & the inert-pair effect
// ============================================================================
function Part4Visual() {
  const rows = [
    { el: "C", stable: "+4 only" },
    { el: "Si", stable: "+4 dominant" },
    { el: "Ge", stable: "+4 > +2" },
    { el: "Sn", stable: "+2 ≈ +4 (Sn²⁺ reducing)" },
    { el: "Pb", stable: "+2 dominant (Pb⁴⁺ oxidising)" },
  ];
  return (
    <Frame title="The inert-pair effect down Group 14" caption="Poor shielding by filled (n−1)d / f orbitals lets the ns² pair resist ionisation for heavier members, so the lower oxidation state (+2) becomes increasingly stable relative to the group state (+4) going down the group.">
      <svg viewBox="0 0 1000 340" className="min-w-[720px] w-full" role="img" aria-label="Inert pair effect down group 14">
        <rect width="1000" height="340" rx="24" fill="#070d18" />
        <text x="500" y="40" textAnchor="middle" fill="#f6efff" fontSize="22" fontWeight="800">+2 stability increases down the group</text>
        {rows.map((r, i) => {
          const y = 70 + i * 48;
          const width = 120 + i * 130;
          return (
            <g key={r.el}>
              <rect x="90" y={y} width="60" height="34" rx="8" fill="#4b1d60" stroke="#e879f9" />
              <text x="120" y={y + 23} textAnchor="middle" fill="#ffeaff" fontSize="15" fontWeight="900">{r.el}</text>
              <rect x="170" y={y + 3} width={width} height="28" rx="8" fill="#173247" stroke="#57d4ec" />
              <text x={185} y={y + 22} fill="#eaf7fb" fontSize="12.5" fontWeight="700">{r.stable}</text>
            </g>
          );
        })}
        <text x="500" y="320" textAnchor="middle" fill="#c9d6df" fontSize="13" fontWeight="700">Consequence: SnCl₂ is reducing, PbO₂ is a strong oxidiser — classic JEE redox pair</text>
      </svg>
    </Frame>
  );
}

// ============================================================================
// PART 5 — Allotropes, carbon oxides & silicon materials
// ============================================================================
function Part5Visual() {
  return (
    <Frame title="Diamond vs graphite — bonding decides the properties" caption="Diamond: every carbon is sp³, tetrahedrally bonded to 4 neighbours in a rigid 3-D network — hardest known natural substance, non-conductor. Graphite: sp² carbon in flat hexagonal sheets, one delocalised electron per atom gives conductivity; weak van der Waals forces between sheets give it lubricant properties.">
      <div className="grid gap-4 sm:grid-cols-2">
        <ShapeCard title="Diamond — sp³ 3-D tetrahedral network">
          <g transform="translate(300,170)" stroke="#57d4ec" strokeWidth="2.5">
            {[[0, -70], [-70, 20], [70, 20], [0, 90]].map(([x, y], i) => (
              <line key={i} x1="0" y1="0" x2={x} y2={y} />
            ))}
            <circle cx="0" cy="0" r="14" fill="#173247" stroke="#57d4ec" />
            {[[0, -70], [-70, 20], [70, 20], [0, 90]].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="12" fill="#122232" stroke="#57d4ec" />
            ))}
          </g>
        </ShapeCard>
        <ShapeCard title="Graphite — sp² hexagonal sheets, weak interlayer forces">
          <g transform="translate(230,150)">
            {[0, 1].map((layer) => (
              <g key={layer} transform={`translate(${layer * 30},${layer * 55})`} opacity={layer === 0 ? 1 : 0.55}>
                {[0, 1, 2].map((c) => (
                  <polygon key={c} points="30,0 60,17 60,51 30,68 0,51 0,17" transform={`translate(${c * 60},0)`}
                    fill="none" stroke="#e879f9" strokeWidth="2.2" />
                ))}
              </g>
            ))}
            <path d="M -10 90 L 20 145" stroke="#fde68a" strokeWidth="2" strokeDasharray="3 3" markerEnd="url(#gap)" />
            <text x="130" y="120" fill="#fde68a" fontSize="11.5" fontWeight="700">weak van der Waals gap → layers slide</text>
          </g>
        </ShapeCard>
      </div>
    </Frame>
  );
}

// ============================================================================
// PART 6 — Silicates, zeolites & silicones
// ============================================================================
function Part6Visual() {
  const forms = [
    { n: "Ortho-silicate", shared: "0 O shared", ex: "SiO₄⁴⁻ (isolated tetrahedron)" },
    { n: "Pyro-silicate", shared: "1 O shared", ex: "Si₂O₇⁶⁻" },
    { n: "Chain (pyroxene)", shared: "2 O shared", ex: "(SiO₃²⁻)ₙ" },
    { n: "Sheet (mica, talc)", shared: "3 O shared", ex: "(Si₂O₅²⁻)ₙ" },
    { n: "3-D framework", shared: "4 O shared", ex: "quartz, feldspar, zeolite" },
  ];
  return (
    <Frame title="The SiO₄ tetrahedron — one building block, five structures" caption="Every silicate is built from corner-sharing SiO₄ tetrahedra. The number of oxygen atoms shared between adjacent tetrahedra (0 → 4) determines whether you get an isolated ion, a chain, a sheet, or a rigid 3-D framework like quartz or a zeolite.">
      <svg viewBox="0 0 1040 380" className="min-w-[760px] w-full" role="img" aria-label="Silicate structural progression">
        <rect width="1040" height="380" rx="24" fill="#070d18" />
        {forms.map((f, i) => {
          const x = 60 + i * 190;
          return (
            <g key={f.n} transform={`translate(${x},70)`}>
              <polygon points="55,0 100,40 80,95 30,95 10,40" fill="#173247" stroke="#57d4ec" strokeWidth="2" opacity={0.9} />
              <circle cx="55" cy="45" r="10" fill="#4b1d60" stroke="#e879f9" />
              <text x="55" y="140" textAnchor="middle" fill="#eaf7fb" fontSize="12.5" fontWeight="800">{f.n}</text>
              <text x="55" y="160" textAnchor="middle" fill="#fde68a" fontSize="11.5" fontWeight="700">{f.shared}</text>
              <text x="55" y="180" textAnchor="middle" fill="#8fa4b4" fontSize="10.5">{f.ex}</text>
              {i < forms.length - 1 ? <path d="M 115 45 H 165" stroke="#d66cff" strokeWidth="3" markerEnd="url(#parr)" /> : null}
            </g>
          );
        })}
        <defs><marker id="parr" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#d66cff" /></marker></defs>
        <text x="520" y="340" textAnchor="middle" fill="#c9d6df" fontSize="13" fontWeight="700">Silicones (R₂SiO)ₙ: same Si–O backbone, organic R groups replace some oxygens — synthetic, water-repellent</text>
      </svg>
    </Frame>
  );
}

// ============================================================================
// PART 7 — Group 15: nitrogen, ammonia & nitrogen oxides
// ============================================================================
function Part7Visual() {
  return (
    <Frame title="NH₃: pyramidal, and why N is different from P onward" caption="Nitrogen's small size and absent d-orbitals let it form strong pπ–pπ bonds (N≡N, N=O) that heavier Group 15 elements cannot — they instead rely on pπ–dπ or catenated single-bond structures.">
      <div className="grid gap-4 sm:grid-cols-2">
        <ShapeCard title="NH₃ — trigonal pyramidal, one lone pair">
          <VseprShape cx={300} cy={175} centralLabel="N" color="#57d4ec" geometryLabel="Trigonal pyramidal (AX₃E)" angleLabel="∠H–N–H ≈ 107°"
            ligands={[
              { label: "H", angleDeg: 200, dist: 105 }, { label: "H", angleDeg: 320, dist: 105 }, { label: "H", angleDeg: 90, dist: 70 },
              { label: "", angleDeg: 0, dist: 95, lone: true },
            ]} />
        </ShapeCard>
        <ShapeCard title="N₂ — triple bond (pπ–pπ), no analogue for P₂ under normal conditions">
          <g transform="translate(300,170)">
            <circle cx="-70" cy="0" r="26" fill="#3a2059" stroke="#e879f9" strokeWidth="3" />
            <circle cx="70" cy="0" r="26" fill="#3a2059" stroke="#e879f9" strokeWidth="3" />
            <text x="-70" y="6" textAnchor="middle" fill="#ffeaff" fontSize="16" fontWeight="900">N</text>
            <text x="70" y="6" textAnchor="middle" fill="#ffeaff" fontSize="16" fontWeight="900">N</text>
            {[-8, 0, 8].map((dy) => <line key={dy} x1="-44" y1={dy} x2="44" y2={dy} stroke="#57d4ec" strokeWidth="3.5" />)}
            <text x="0" y="60" textAnchor="middle" fill="#c9d6df" fontSize="12.5" fontWeight="700">N≡N bond energy ≈ 946 kJ/mol — extremely inert</text>
          </g>
        </ShapeCard>
      </div>
    </Frame>
  );
}

// ============================================================================
// PART 8 — Nitrides, ammonia & nitric acid
// ============================================================================
function Part8Visual() {
  return (
    <Frame title="HNO₃ structure — the resonance that explains its oxidising power" caption="Nitric acid's N is sp² with one N=O, one N–O(H), and one N→O (dative), with resonance delocalising charge over both terminal oxygens — this is why dilute and concentrated HNO₃ act as oxidising, not just acidic, reagents.">
      <ShapeCard title="HNO₃ — trigonal planar N, resonance-delocalised terminal O's">
        <g transform="translate(300,175)">
          <circle cx="0" cy="0" r="24" fill="#3a2059" stroke="#e879f9" strokeWidth="3" />
          <text y="6" textAnchor="middle" fill="#ffeaff" fontSize="15" fontWeight="900">N</text>
          <line x1="0" y1="-22" x2="0" y2="-80" stroke="#57d4ec" strokeWidth="3.5" />
          <circle cx="0" cy="-92" r="18" fill="#122232" stroke="#57d4ec" strokeWidth="2" />
          <text x="0" y="-87" textAnchor="middle" fill="#eaf7fb" fontSize="12.5" fontWeight="800">O</text>
          {[-1, 1].map((s) => (
            <g key={s}>
              <line x1="0" y1="0" x2={s * 95} y2="60" stroke="#57d4ec" strokeWidth="3.5" strokeDasharray={s > 0 ? undefined : "1 0"} />
              <circle cx={s * 95} cy="60" r="18" fill="#122232" stroke="#57d4ec" strokeWidth="2" />
              <text x={s * 95} y="65" textAnchor="middle" fill="#eaf7fb" fontSize="12.5" fontWeight="800">O{s > 0 ? "H" : ""}</text>
            </g>
          ))}
          <text x="0" y="120" textAnchor="middle" fill="#fde68a" fontSize="12" fontWeight="700">charge delocalised over the two right-hand oxygens (resonance)</text>
        </g>
      </ShapeCard>
    </Frame>
  );
}

// ============================================================================
// PART 9 — Nitrogen oxides, P allotropes & chlorides
// ============================================================================
function Part9Visual() {
  return (
    <Frame title="White phosphorus P₄ and PCl₅'s two faces" caption="P₄ is a strained tetrahedron (60° bond angles, far from the ideal 109.5°) — this strain is exactly why white phosphorus is so reactive. PCl₅ is trigonal bipyramidal as a gas but ionises to [PCl₄]⁺[PCl₆]⁻ in the solid state.">
      <div className="grid gap-4 sm:grid-cols-2">
        <ShapeCard title="P₄ — tetrahedral, strained 60° P–P–P angles">
          <g transform="translate(300,180)">
            {[[0, -80], [-80, 46], [80, 46]].map(([x, y], i) => (
              <line key={i} x1="0" y1="-10" x2={x} y2={y} stroke="#57d4ec" strokeWidth="3" />
            ))}
            <line x1="-80" y1="46" x2="80" y2="46" stroke="#57d4ec" strokeWidth="3" />
            <line x1="0" y1="-80" x2="-80" y2="46" stroke="#57d4ec" strokeWidth="3" strokeOpacity="0.5" />
            <line x1="0" y1="-80" x2="80" y2="46" stroke="#57d4ec" strokeWidth="3" strokeOpacity="0.5" />
            {[[0, -10], [0, -80], [-80, 46], [80, 46]].map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="17" fill="#3a2059" stroke="#e879f9" strokeWidth="2.5" />
            ))}
            {[[0, -10], [0, -80], [-80, 46], [80, 46]].map(([x, y], i) => (
              <text key={i} x={x} y={y + 5} textAnchor="middle" fill="#ffeaff" fontSize="12.5" fontWeight="900">P</text>
            ))}
            <text x="0" y="115" textAnchor="middle" fill="#fde68a" fontSize="12">∠P–P–P = 60° (vs ideal 109.5°) → highly reactive</text>
          </g>
        </ShapeCard>
        <ShapeCard title="PCl₅: gas (trigonal bipyramidal) vs solid (ionic)">
          <VseprShape cx={220} cy={175} centralLabel="P" geometryLabel="gas: TBP" angleLabel="ax 180° / eq 120°"
            ligands={[
              { label: "Cl", angleDeg: 0, dist: 60 }, { label: "Cl", angleDeg: 120, dist: 95 },
              { label: "Cl", angleDeg: 240, dist: 95 }, { label: "Cl", angleDeg: 90, dist: 95 }, { label: "Cl", angleDeg: 270, dist: 95 },
            ]} />
          <text x="440" y="90" textAnchor="middle" fill="#8fa4b4" fontSize="12" fontWeight="800">solid:</text>
          <text x="440" y="110" textAnchor="middle" fill="#eaf7fb" fontSize="13" fontWeight="800">[PCl₄]⁺ tetrahedral</text>
          <text x="440" y="130" textAnchor="middle" fill="#eaf7fb" fontSize="13" fontWeight="800">[PCl₆]⁻ octahedral</text>
        </ShapeCard>
      </div>
    </Frame>
  );
}

// ============================================================================
// PART 10 — Phosphorus oxoacids (the big basicity-counting one)
// ============================================================================
function Part10Visual() {
  const acids = [
    { name: "H₃PO₂", full: "Hypophosphorous acid", poh: 1, ph: 2, basicity: "Monobasic" },
    { name: "H₃PO₃", full: "Phosphorous acid", poh: 2, ph: 1, basicity: "Dibasic" },
    { name: "H₃PO₄", full: "Phosphoric acid", poh: 3, ph: 0, basicity: "Tribasic" },
  ];
  return (
    <Frame title="Phosphorus oxoacids — basicity = number of P–OH groups" caption="Only the H attached through oxygen (P–OH) is ionisable; H attached directly to P (P–H) never ionises. Counting P–OH bonds directly gives the basicity — the single highest-yield fact in this topic.">
      <div className="grid gap-3 sm:grid-cols-3">
        {acids.map((a) => (
          <ShapeCard key={a.name} title={`${a.name} — ${a.full}`}>
            <g transform="translate(300,150)">
              <circle cx="0" cy="0" r="22" fill="#3a2059" stroke="#e879f9" strokeWidth="3" />
              <text y="6" textAnchor="middle" fill="#ffeaff" fontSize="14" fontWeight="900">P</text>
              {/* P=O always present */}
              <line x1="0" y1="-20" x2="0" y2="-70" stroke="#57d4ec" strokeWidth="3" />
              <circle cx="0" cy="-82" r="15" fill="#122232" stroke="#57d4ec" strokeWidth="2" />
              <text y="-77" x="0" textAnchor="middle" fill="#eaf7fb" fontSize="11" fontWeight="800">O</text>
              {Array.from({ length: a.poh }).map((_, i) => {
                const ang = 40 + i * 45;
                const p = polar(0, 0, 78, ang);
                return (
                  <g key={`oh${i}`}>
                    <line x1="0" y1="0" x2={p.x} y2={p.y} stroke="#57d4ec" strokeWidth="3" />
                    <circle cx={p.x} cy={p.y} r="16" fill="#122232" stroke="#57d4ec" strokeWidth="2" />
                    <text x={p.x} y={p.y + 4} textAnchor="middle" fill="#eaf7fb" fontSize="10.5" fontWeight="800">OH</text>
                  </g>
                );
              })}
              {Array.from({ length: a.ph }).map((_, i) => {
                const ang = 220 + i * 50;
                const p = polar(0, 0, 78, ang);
                return (
                  <g key={`h${i}`}>
                    <line x1="0" y1="0" x2={p.x} y2={p.y} stroke="#fde68a" strokeWidth="3" />
                    <circle cx={p.x} cy={p.y} r="14" fill="#211235" stroke="#fde68a" strokeWidth="2" />
                    <text x={p.x} y={p.y + 4} textAnchor="middle" fill="#fde68a" fontSize="10.5" fontWeight="800">H</text>
                  </g>
                );
              })}
              <text y="115" textAnchor="middle" fill="#c9d6df" fontSize="12.5" fontWeight="800">{a.poh} × P–OH, {a.ph} × P–H</text>
              <text y="135" textAnchor="middle" fill="#fde68a" fontSize="13" fontWeight="900">{a.basicity}</text>
            </g>
          </ShapeCard>
        ))}
      </div>
    </Frame>
  );
}

// ============================================================================
// PART 11 — Group 16: oxygen, ozone & sulphur
// ============================================================================
function Part11Visual() {
  return (
    <Frame title="Ozone's bent shape and resonance" caption="O₃ is bent (~117°, AX₂E1 at the central O) with the extra electron pair delocalised across both terminal oxygens by resonance — the two O–O bonds are identical and intermediate between single and double.">
      <ShapeCard title="O₃ — bent, resonance hybrid of two Lewis structures">
        <g transform="translate(300,170)">
          <VseprShape cx={0} cy={0} centralLabel="O" geometryLabel="" angleLabel=""
            ligands={[{ label: "O", angleDeg: 235, dist: 95 }, { label: "O", angleDeg: 305, dist: 95 }, { label: "", angleDeg: 90, dist: 70, lone: true }]} />
          <text y="90" textAnchor="middle" fill="#c9d6df" fontSize="12.5" fontWeight="700">∠O–O–O ≈ 117°, bond order 1.5 on each side</text>
        </g>
      </ShapeCard>
    </Frame>
  );
}

// ============================================================================
// PART 12 — Oxygen chemistry & sulphur allotropes
// ============================================================================
function Part12Visual() {
  return (
    <Frame title="S₈ — the puckered crown" caption="Both rhombic (α) and monoclinic (β) sulphur are built from the same S₈ ring, puckered into a crown shape to relieve angle strain. The two allotropes differ only in how these S₈ crowns pack together in the crystal.">
      <ShapeCard title="S₈ ring — crown conformation, ∠S–S–S ≈ 105°">
        <g transform="translate(300,170)">
          {Array.from({ length: 8 }).map((_, i) => {
            const ang = i * 45;
            const puck = i % 2 === 0 ? 90 : 70;
            const p = polar(0, 0, puck, ang);
            return <circle key={i} cx={p.x} cy={p.y} r="15" fill="#3a2059" stroke="#e879f9" strokeWidth="2.5" />;
          })}
          {Array.from({ length: 8 }).map((_, i) => {
            const a1 = i * 45, a2 = ((i + 1) % 8) * 45;
            const puck1 = i % 2 === 0 ? 90 : 70, puck2 = (i + 1) % 8 % 2 === 0 ? 90 : 70;
            const p1 = polar(0, 0, puck1, a1), p2 = polar(0, 0, puck2, a2);
            return <line key={i} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke="#57d4ec" strokeWidth="2.5" />;
          })}
          {Array.from({ length: 8 }).map((_, i) => {
            const ang = i * 45;
            const puck = i % 2 === 0 ? 90 : 70;
            const p = polar(0, 0, puck, ang);
            return <text key={i} x={p.x} y={p.y + 4} textAnchor="middle" fill="#ffeaff" fontSize="10.5" fontWeight="900">S</text>;
          })}
          <text y="130" textAnchor="middle" fill="#c9d6df" fontSize="12.5" fontWeight="700">Same S₈ crown in both rhombic and monoclinic sulphur</text>
        </g>
      </ShapeCard>
    </Frame>
  );
}

// ============================================================================
// PART 13 — Sulphur oxoacids & redox logic
// ============================================================================
function Part13Visual() {
  const acids = [
    { n: "H₂SO₃", note: "sulphurous, S: +4" },
    { n: "H₂S₂O₃", note: "thiosulphuric, one O replaced by S" },
    { n: "H₂SO₅", note: "peroxomonosulphuric, one peroxo O–O" },
    { n: "H₂S₂O₇", note: "oleum (pyrosulphuric), S–O–S bridge" },
    { n: "H₂S₂O₈", note: "peroxodisulphuric, –O–O– bridge" },
  ];
  return (
    <Frame title="Naming sulphur oxoacids by what replaces what" caption="Build every sulphur oxoacid from H₂SO₄ by one substitution: swap an O for S (thio-), add a peroxo –O–O– link (peroxo-), or bridge two S centres through O (pyro-) or O–O (peroxodi-).">
      <svg viewBox="0 0 1040 300" className="min-w-[760px] w-full" role="img" aria-label="Sulphur oxoacid family">
        <rect width="1040" height="300" rx="24" fill="#070d18" />
        <text x="520" y="40" textAnchor="middle" fill="#f6efff" fontSize="21" fontWeight="800">Base: H₂SO₄ (tetrahedral S, 2 S=O, 2 S–OH)</text>
        {acids.map((a, i) => {
          const x = 60 + i * 190;
          return (
            <g key={a.n} transform={`translate(${x},90)`}>
              <rect width="160" height="70" rx="14" fill="#173247" stroke="#57d4ec" strokeWidth="2" />
              <text x="80" y="30" textAnchor="middle" fill="#eaf7fb" fontSize="16" fontWeight="900">{a.n}</text>
              <text x="80" y="52" textAnchor="middle" fill="#8fa4b4" fontSize="10.5">{a.note}</text>
            </g>
          );
        })}
      </svg>
    </Frame>
  );
}

// ============================================================================
// PART 14 — SO2, H2SO4, contact process
// ============================================================================
function Part14Visual() {
  return (
    <Frame title="SO₂ bent, SO₃ planar — and how the Contact Process links them" caption="SO₂ (AX₂E1, bent ~119°) is catalytically oxidised to SO₃ (AX₃, trigonal planar) over V₂O₅, then absorbed in H₂SO₄ to form oleum, which is diluted to concentrated sulphuric acid.">
      <div className="grid gap-4 sm:grid-cols-2">
        <ShapeCard title="SO₂ — bent, one lone pair on S">
          <VseprShape cx={300} cy={175} centralLabel="S" geometryLabel="Bent (AX₂E)" angleLabel="≈ 119°"
            ligands={[{ label: "O", angleDeg: 220, dist: 95 }, { label: "O", angleDeg: 320, dist: 95 }, { label: "", angleDeg: 90, dist: 70, lone: true }]} />
        </ShapeCard>
        <ShapeCard title="SO₃ (monomer) — trigonal planar, no lone pair on S">
          <VseprShape cx={300} cy={175} centralLabel="S" geometryLabel="Trigonal planar (AX₃)" angleLabel="120°"
            ligands={[{ label: "O", angleDeg: 0 }, { label: "O", angleDeg: 120 }, { label: "O", angleDeg: 240 }]} />
        </ShapeCard>
      </div>
      <svg viewBox="0 0 1000 90" className="mt-4 min-w-[720px] w-full">
        <text x="500" y="45" textAnchor="middle" fill="#c9d6df" fontSize="14" fontWeight="800">
          S (burn) → SO₂ —[V₂O₅, 720 K, 2 atm]→ SO₃ —[conc. H₂SO₄]→ Oleum (H₂S₂O₇) —[dilute]→ H₂SO₄
        </text>
      </svg>
    </Frame>
  );
}

// ============================================================================
// PART 15 — Group 17: halogens & interhalogens (overview)
// ============================================================================
function Part15Visual() {
  const rows = [
    { formula: "XX′", example: "ClF, BrCl, ICl", shape: "Linear (diatomic)" },
    { formula: "XX′₃", example: "ClF₃, BrF₃, ICl₃", shape: "T-shaped (AX₃E₂)" },
    { formula: "XX′₅", example: "ClF₅, BrF₅, IF₅", shape: "Square pyramidal (AX₅E₁)" },
    { formula: "XX′₇", example: "IF₇", shape: "Pentagonal bipyramidal (AX₇E₀)" },
  ];
  return (
    <Frame title="Interhalogens: one rule for every formula" caption="In every interhalogen the larger, less electronegative halogen is the central atom. VSEPR on the central atom's electron pairs (bond pairs + lone pairs) predicts the shape directly from the formula — no memorisation needed.">
      <svg viewBox="0 0 1000 300" className="min-w-[720px] w-full" role="img" aria-label="Interhalogen formula to shape map">
        <rect width="1000" height="300" rx="24" fill="#070d18" />
        <rect x="60" y="55" width="880" height="50" rx="14" fill="#18273a" />
        <text x="150" y="86" textAnchor="middle" fill="#9db2c2" fontSize="15" fontWeight="800">Formula</text>
        <text x="420" y="86" textAnchor="middle" fill="#9db2c2" fontSize="15" fontWeight="800">Examples</text>
        <text x="740" y="86" textAnchor="middle" fill="#9db2c2" fontSize="15" fontWeight="800">Shape (VSEPR)</text>
        {rows.map((r, i) => {
          const y = 118 + i * 44;
          return (
            <g key={r.formula}>
              <rect x="60" y={y} width="880" height="38" rx="10" fill={i % 2 === 0 ? "#0c1725" : "#101d2d"} stroke="#1f3447" />
              <text x="150" y={y + 25} textAnchor="middle" fill="#f5d0fe" fontSize="16" fontWeight="900">{r.formula}</text>
              <text x="420" y={y + 25} textAnchor="middle" fill="#d7e2ea" fontSize="14">{r.example}</text>
              <text x="740" y={y + 25} textAnchor="middle" fill="#b7f3ff" fontSize="14" fontWeight="700">{r.shape}</text>
            </g>
          );
        })}
      </svg>
    </Frame>
  );
}

// ============================================================================
// PART 16 — Chlorine, HCl & oxyacids
// ============================================================================
function Part16Visual() {
  const acids = [
    { n: "HOCl", state: "+1", name: "Hypochlorous" },
    { n: "HOClO", state: "+3", name: "Chlorous" },
    { n: "HOClO₂", state: "+5", name: "Chloric" },
    { n: "HOClO₃", state: "+7", name: "Perchloric" },
  ];
  return (
    <Frame title="Chlorine oxoacids: adding O = raising oxidation state" caption="Each extra Cl=O added to the HOCl core raises chlorine's oxidation state by 2 and increases acid strength (more O atoms stabilise the conjugate base by delocalising negative charge) — HClO₄ is the strongest of the four.">
      <svg viewBox="0 0 1000 260" className="min-w-[720px] w-full">
        <rect width="1000" height="260" rx="24" fill="#070d18" />
        {acids.map((a, i) => {
          const x = 90 + i * 220;
          return (
            <g key={a.n} transform={`translate(${x},60)`}>
              <circle cx="0" cy="60" r="20" fill="#3a2059" stroke="#e879f9" strokeWidth="2.5" />
              <text x="0" y="66" textAnchor="middle" fill="#ffeaff" fontSize="13" fontWeight="900">Cl</text>
              <line x1="0" y1="40" x2="0" y2="0" stroke="#57d4ec" strokeWidth="3" />
              <circle cx="0" cy="-12" r="14" fill="#122232" stroke="#57d4ec" strokeWidth="2" />
              <text x="0" y="-7" textAnchor="middle" fill="#eaf7fb" fontSize="10.5" fontWeight="800">OH</text>
              {i >= 1 && <><line x1="20" y1="50" x2="55" y2="30" stroke="#57d4ec" strokeWidth="3" /><circle cx="62" cy="24" r="13" fill="#122232" stroke="#57d4ec" strokeWidth="2" /><text x="62" y="28" textAnchor="middle" fill="#eaf7fb" fontSize="10" fontWeight="800">O</text></>}
              {i >= 2 && <><line x1="-20" y1="50" x2="-55" y2="30" stroke="#57d4ec" strokeWidth="3" /><circle cx="-62" cy="24" r="13" fill="#122232" stroke="#57d4ec" strokeWidth="2" /><text x="-62" y="28" textAnchor="middle" fill="#eaf7fb" fontSize="10" fontWeight="800">O</text></>}
              {i >= 3 && <><line x1="0" y1="80" x2="0" y2="115" stroke="#57d4ec" strokeWidth="3" /><circle cx="0" cy="128" r="13" fill="#122232" stroke="#57d4ec" strokeWidth="2" /><text x="0" y="132" textAnchor="middle" fill="#eaf7fb" fontSize="10" fontWeight="800">O</text></>}
              <text x="0" y="170" textAnchor="middle" fill="#eaf7fb" fontSize="13.5" fontWeight="900">{a.n}</text>
              <text x="0" y="188" textAnchor="middle" fill="#fde68a" fontSize="11.5" fontWeight="700">Cl: {a.state}</text>
              <text x="0" y="204" textAnchor="middle" fill="#8fa4b4" fontSize="10.5">{a.name}</text>
            </g>
          );
        })}
      </svg>
    </Frame>
  );
}

// ============================================================================
// PART 17 — Interhalogens: shapes & hydrolysis (the big VSEPR one)
// ============================================================================
function Part17Visual() {
  return (
    <Frame title="ClF₃, BrF₅, IF₇ — the three interhalogen shapes examiners always ask" caption="T-shaped, square pyramidal and pentagonal bipyramidal are drawn straight from VSEPR: count bond pairs + lone pairs on the central halogen, place lone pairs to minimise 90° repulsions, and the shape follows.">
      <div className="grid gap-4 sm:grid-cols-3">
        <ShapeCard title="ClF₃ — T-shaped (AX₃E₂)">
          <VseprShape cx={300} cy={175} centralLabel="Cl" geometryLabel="T-shaped" angleLabel="∠F–Cl–F ≈ 87.5°"
            ligands={[
              { label: "F", angleDeg: 0, dist: 95 }, { label: "F", angleDeg: 180, dist: 95 }, { label: "F", angleDeg: 270, dist: 95 },
              { label: "", angleDeg: 90, dist: 70, lone: true }, { label: "", angleDeg: 45, dist: 90, lone: true },
            ]} />
        </ShapeCard>
        <ShapeCard title="BrF₅ — square pyramidal (AX₅E₁)">
          <VseprShape cx={300} cy={190} centralLabel="Br" geometryLabel="Square pyramidal" angleLabel="basal ∠ ≈ 84.8°"
            ligands={[
              { label: "F", angleDeg: 0, dist: 90 }, { label: "F", angleDeg: 90, dist: 90 }, { label: "F", angleDeg: 180, dist: 90 }, { label: "F", angleDeg: 270, dist: 90 },
              { label: "F", angleDeg: 90, dist: 40 },
              { label: "", angleDeg: 270, dist: 55, lone: true },
            ]} />
        </ShapeCard>
        <ShapeCard title="IF₇ — pentagonal bipyramidal (AX₇E₀)">
          <VseprShape cx={300} cy={190} centralLabel="I" geometryLabel="Pentagonal bipyramidal" angleLabel="no lone pair"
            ligands={[
              { label: "F", angleDeg: 90, dist: 90 }, { label: "F", angleDeg: 270, dist: 90 },
              { label: "F", angleDeg: 0, dist: 85 }, { label: "F", angleDeg: 72, dist: 85 }, { label: "F", angleDeg: 144, dist: 85 },
              { label: "F", angleDeg: 216, dist: 85 }, { label: "F", angleDeg: 288, dist: 85 },
            ]} />
        </ShapeCard>
      </div>
    </Frame>
  );
}

// ============================================================================
// PART 18 — Group 18: noble gases & xenon (basic shapes)
// ============================================================================
function Part18Visual() {
  return (
    <Frame title="XeF₂ and XeF₄ — the first two xenon shapes" caption="XeF₂ (AX₂E₃) is linear with 3 equatorial lone pairs — isoelectronic with I₃⁻. XeF₄ (AX₄E₂) is square planar with the 2 lone pairs axial, minimising 90° lone-pair/lone-pair repulsion.">
      <div className="grid gap-4 sm:grid-cols-2">
        <ShapeCard title="XeF₂ — linear (AX₂E₃)">
          <VseprShape cx={300} cy={175} centralLabel="Xe" geometryLabel="Linear" angleLabel="180°"
            ligands={[
              { label: "F", angleDeg: 90, dist: 100 }, { label: "F", angleDeg: 270, dist: 100 },
              { label: "", angleDeg: 0, dist: 70, lone: true }, { label: "", angleDeg: 150, dist: 70, lone: true }, { label: "", angleDeg: 210, dist: 70, lone: true },
            ]} />
        </ShapeCard>
        <ShapeCard title="XeF₄ — square planar (AX₄E₂)">
          <VseprShape cx={300} cy={175} centralLabel="Xe" geometryLabel="Square planar" angleLabel="90°, lone pairs axial (trans)"
            ligands={[
              { label: "F", angleDeg: 0, dist: 100 }, { label: "F", angleDeg: 90, dist: 100 }, { label: "F", angleDeg: 180, dist: 100 }, { label: "F", angleDeg: 270, dist: 100 },
              { label: "", angleDeg: 45, dist: 50, lone: true }, { label: "", angleDeg: 225, dist: 50, lone: true },
            ]} />
        </ShapeCard>
      </div>
    </Frame>
  );
}

// ============================================================================
// PART 19 — Xenon fluorides, oxides & hydrolysis
// ============================================================================
function Part19Visual() {
  return (
    <Frame title="XeF₆, XeOF₄, XeO₃ — the three that trip people up" caption="XeF₆ (AX₆E₁) is a distorted octahedron whose lone pair never sits still (fluxional). XeOF₄ (AX₅E₁) is square pyramidal with O at the apex. XeO₃ (AX₃E₁) is pyramidal, isostructural with NH₃ and XeF₃⁺.">
      <div className="grid gap-4 sm:grid-cols-3">
        <ShapeCard title="XeF₆ — distorted octahedral (AX₆E₁)">
          <VseprShape cx={300} cy={190} centralLabel="Xe" geometryLabel="Distorted octahedral" angleLabel="fluxional lone pair"
            ligands={[
              { label: "F", angleDeg: 0, dist: 90 }, { label: "F", angleDeg: 60, dist: 90 }, { label: "F", angleDeg: 120, dist: 90 },
              { label: "F", angleDeg: 180, dist: 90 }, { label: "F", angleDeg: 240, dist: 90 }, { label: "F", angleDeg: 300, dist: 90 },
              { label: "", angleDeg: 90, dist: 45, lone: true },
            ]} />
        </ShapeCard>
        <ShapeCard title="XeOF₄ — square pyramidal (AX₅E₁), O at apex">
          <VseprShape cx={300} cy={190} centralLabel="Xe" geometryLabel="Square pyramidal" angleLabel="O apical, lone pair opposite O"
            ligands={[
              { label: "F", angleDeg: 0, dist: 90 }, { label: "F", angleDeg: 90, dist: 90 }, { label: "F", angleDeg: 180, dist: 90 }, { label: "F", angleDeg: 270, dist: 90 },
              { label: "O", angleDeg: 90, dist: 40 },
              { label: "", angleDeg: 270, dist: 55, lone: true },
            ]} />
        </ShapeCard>
        <ShapeCard title="XeO₃ — pyramidal (AX₃E₁)">
          <VseprShape cx={300} cy={175} centralLabel="Xe" geometryLabel="Trigonal pyramidal" angleLabel="isostructural with NH₃"
            ligands={[
              { label: "O", angleDeg: 200, dist: 100 }, { label: "O", angleDeg: 320, dist: 100 }, { label: "O", angleDeg: 90, dist: 70 },
              { label: "", angleDeg: 0, dist: 90, lone: true },
            ]} />
        </ShapeCard>
      </div>
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
export function PBlockVisual({ part }: { part: number }) {
  switch (part) {
    case 1: return <Part1Visual />;
    case 2: return <Part2Visual />;
    case 3: return <Part3Visual />;
    case 4: return <Part4Visual />;
    case 5: return <Part5Visual />;
    case 6: return <Part6Visual />;
    case 7: return <Part7Visual />;
    case 8: return <Part8Visual />;
    case 9: return <Part9Visual />;
    case 10: return <Part10Visual />;
    case 11: return <Part11Visual />;
    case 12: return <Part12Visual />;
    case 13: return <Part13Visual />;
    case 14: return <Part14Visual />;
    case 15: return <Part15Visual />;
    case 16: return <Part16Visual />;
    case 17: return <Part17Visual />;
    case 18: return <Part18Visual />;
    case 19: return <Part19Visual />;
    case 20: return <Part20Visual />;
    default: return null;
  }
}
