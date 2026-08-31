import type { ReactNode } from "react";

/* ------------------------------------------------------------------------- *
 * Original schematic structural figures for the Carbon Family chapter.
 * Connectivity, coordination and geometry only — computed, nothing traced.
 * ------------------------------------------------------------------------- */

function Frame({ title, caption, children }: { title: string; caption: string; children: ReactNode }) {
  return (
    <figure className="overflow-hidden rounded-lg border border-cyan-300/15 bg-[#080d19] shadow-2xl shadow-black/25">
      <div className="border-b border-white/10 px-5 py-4 sm:px-7">
        <p className="text-[11px] font-black uppercase tracking-[.18em] text-cyan-300">Carbon-family visual atlas</p>
        <h3 className="mt-1 text-lg font-black text-white sm:text-xl">{title}</h3>
      </div>
      <div className="overflow-x-auto p-4 sm:p-6">{children}</div>
      <figcaption className="border-t border-white/10 px-5 py-3 text-sm leading-6 text-slate-400 sm:px-7">{caption}</figcaption>
    </figure>
  );
}

const COL = {
  C: "#8fb7d9",
  Cfill: "#12212f",
  O: "#f2a48c",
  Ofill: "#2c1a14",
  Si: "#c9a45f",
  Sifill: "#241d10",
  Sn: "#a7b7e8",
  Snfill: "#16192c",
  Pb: "#c8b3d8",
  Pbfill: "#1f1826",
  H: "#efe0b6",
  Fe: "#e58f8f",
  bond: "#8798a8",
  amber: "#e3b341",
  red: "#ff8f5e",
  green: "#5fd39b",
} as const;

function Atom({ x, y, label, stroke, fill, r = 15, fs }: { x: number; y: number; label: string; stroke: string; fill: string; r?: number; fs?: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill={fill} stroke={stroke} strokeWidth="2.2" />
      <text x={x} y={y + 4} textAnchor="middle" fontSize={fs ?? (r > 13 ? 12 : 10)} fontWeight="800" fill="#eef6ff">
        {label}
      </text>
    </g>
  );
}

function Bond({ x1, y1, x2, y2, color = COL.bond, w = 3, dash }: { x1: number; y1: number; x2: number; y2: number; color?: string; w?: number; dash?: string }) {
  return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth={w} strokeDasharray={dash} strokeLinecap="round" />;
}

function T({ x, y, children, fill = "#c9d6df", size = 12, anchor = "middle" as const, weight = 600 }: { x: number; y: number; children: ReactNode; fill?: string; size?: number; anchor?: "start" | "middle" | "end"; weight?: number }) {
  return (
    <text x={x} y={y} textAnchor={anchor} fontSize={size} fontWeight={weight} fill={fill}>
      {children}
    </text>
  );
}

function Svg({ children, w = 560, h = 320 }: { children: ReactNode; w?: number; h?: number }) {
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="mx-auto block h-auto w-full max-w-[600px]" role="img">
      {children}
    </svg>
  );
}

/* =========================== PART 1 — trend ribbon ======================== */

function TrendRibbon() {
  const els = ["C", "Si", "Ge", "Sn", "Pb"];
  return (
    <Svg h={260}>
      {els.map((e, i) => (
        <g key={e}>
          <rect x={40 + i * 100} y={70} width={70} height={44} rx={9} fill="#132433" stroke={COL.C} strokeWidth="2" />
          <T x={75 + i * 100} y={97} size={15} weight={800} fill="#eef6ff">{e}</T>
        </g>
      ))}
      <Bond x1={40} y1={150} x2={520} y2={150} color="#33506c" w={2} />
      <T x={40} y={172} anchor="start" size={11.5}>+4 most stable ────────────▶ +2 most stable (inert-pair effect)</T>
      <T x={40} y={198} anchor="start" size={11.5}>non-metal ── metalloid ──────────▶ metal</T>
      <T x={40} y={224} anchor="start" size={11.5}>catenation: C ≫ Si &gt; Ge ≈ Sn ≫ Pb</T>
      <T x={40} y={48} anchor="start" size={12} fill={COL.amber} weight={800}>IE₁: C &gt; Si &gt; Ge &gt; Pb &gt; Sn  (note Pb &gt; Sn)</T>
    </Svg>
  );
}

/* =========================== PART 2 — catenation ========================= */

function CatenationBars() {
  const data: [string, number][] = [["C–C", 348], ["Si–Si", 297], ["Ge–Ge", 260], ["Sn–Sn", 240]];
  return (
    <Svg h={260}>
      {data.map(([k, v], i) => (
        <g key={k}>
          <rect x={70 + i * 115} y={210 - v * 0.5} width={64} height={v * 0.5} rx={5} fill={COL.C} opacity={0.85} />
          <T x={102 + i * 115} y={230} size={12} weight={800}>{k}</T>
          <T x={102 + i * 115} y={200 - v * 0.5} size={11.5} fill={COL.amber}>{v}</T>
        </g>
      ))}
      <T x={280} y={30} size={12.5} fill="#c9d6df">M–M bond enthalpy / kJ mol⁻¹ — the real driver of catenation</T>
      <T x={280} y={250} size={11} fill="#8fa4b4">Pb–Pb is negligible; lead is treated as non-catenating.</T>
    </Svg>
  );
}

/* =========================== PART 3 — allotropes ========================= */

function Diamond() {
  const c = { x: 150, y: 160 };
  const v = [
    { x: 150, y: 95 },
    { x: 95, y: 200 },
    { x: 205, y: 200 },
    { x: 150, y: 220 },
  ];
  return (
    <g>
      {v.map((p, i) => (
        <Bond key={i} x1={c.x} y1={c.y} x2={p.x} y2={p.y} color={COL.C} w={3} />
      ))}
      {v.map((p, i) => (
        <Atom key={i} x={p.x} y={p.y} label="C" stroke={COL.C} fill={COL.Cfill} r={13} />
      ))}
      <Atom x={c.x} y={c.y} label="C" stroke={COL.C} fill={COL.Cfill} r={15} />
      <T x={150} y={255} size={12}>Diamond — sp³, C–C 1.54 Å, 3-D network</T>
      <T x={150} y={273} size={11} fill="#8fa4b4">giant covalent · insulator · hardest</T>
    </g>
  );
}

function Graphite() {
  const hex = (cx: number, cy: number) =>
    Array.from({ length: 6 }, (_, i) => {
      const a = ((i * 60 - 30) * Math.PI) / 180;
      return { x: cx + 26 * Math.cos(a), y: cy + 26 * Math.sin(a) };
    });
  const layer = (y: number, color: string) =>
    [0, 1, 2].map((k) => {
      const pts = hex(360 + k * 45, y);
      return (
        <g key={`${y}-${k}`}>
          {pts.map((p, i) => (
            <Bond key={i} x1={p.x} y1={p.y} x2={pts[(i + 1) % 6].x} y2={pts[(i + 1) % 6].y} color={color} w={2.4} />
          ))}
        </g>
      );
    });
  return (
    <g>
      {layer(110, COL.C)}
      {layer(175, "#4f6f8c")}
      {layer(240, COL.C)}
      <Bond x1={470} y1={110} x2={470} y2={240} color="#3a5a74" w={1.6} dash="4 4" />
      <T x={520} y={178} size={11} fill="#8fa4b4">3.35 Å</T>
      <T x={400} y={280} size={12}>Graphite — sp², ABAB layers, C–C 1.42 Å</T>
      <T x={400} y={298} size={11} fill="#8fa4b4">delocalised π in-plane · soft · conducts in-plane</T>
    </g>
  );
}

function AllotropeStack() {
  return (
    <Svg h={310}>
      <Diamond />
      <Graphite />
    </Svg>
  );
}

function Fullerene() {
  const cx = 175;
  const cy = 155;
  const pent = (r: number, off: number) =>
    Array.from({ length: 5 }, (_, i) => {
      const a = ((i * 72 + off - 90) * Math.PI) / 180;
      return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
    });
  const inner = pent(40, 0);
  const mid = pent(88, 36);
  const outer = pent(120, 0);
  return (
    <Svg h={300}>
      {inner.map((p, i) => (
        <Bond key={`i${i}`} x1={p.x} y1={p.y} x2={inner[(i + 1) % 5].x} y2={inner[(i + 1) % 5].y} color={COL.amber} w={2.6} />
      ))}
      {inner.map((p, i) => (
        <Bond key={`s${i}`} x1={p.x} y1={p.y} x2={mid[i].x} y2={mid[i].y} color={COL.C} w={2} />
      ))}
      {mid.map((p, i) => (
        <Bond key={`m${i}`} x1={p.x} y1={p.y} x2={outer[i].x} y2={outer[i].y} color={COL.C} w={2} />
      ))}
      {mid.map((p, i) => (
        <Bond key={`mm${i}`} x1={p.x} y1={p.y} x2={outer[(i + 1) % 5].x} y2={outer[(i + 1) % 5].y} color={COL.C} w={2} />
      ))}
      {outer.map((p, i) => (
        <Bond key={`o${i}`} x1={p.x} y1={p.y} x2={outer[(i + 1) % 5].x} y2={outer[(i + 1) % 5].y} color={COL.C} w={2} />
      ))}
      {[...inner, ...mid, ...outer].map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={5} fill={COL.Cfill} stroke={COL.C} strokeWidth={1.8} />
      ))}
      <T x={410} y={110} size={12.5} fill="#c9d6df">C₆₀ buckminsterfullerene</T>
      <T x={410} y={135} size={11.5} fill="#8fa4b4">12 pentagons + 20 hexagons</T>
      <T x={410} y={157} size={11.5} fill="#8fa4b4">all C three-coordinate, sp²</T>
      <T x={410} y={179} size={11.5} fill="#8fa4b4">90 C–C edges · faces = n/2 + 2</T>
      <T x={410} y={205} size={11.5} fill={COL.amber}>hexagons for Cₙ = n/2 − 10</T>
      <T x={175} y={295} size={11} fill="#8fa4b4">central pentagon highlighted; discrete molecular cage</T>
    </Svg>
  );
}

function Part3Visual() {
  return (
    <>
      <Frame title="Diamond and graphite — the two extended lattices" caption="Diamond: every carbon sp³-hybridised and bonded to four others in a rigid three-dimensional net. Graphite: sp² sheets with an in-plane delocalised π system and weak van der Waals stacking (ABAB in α-graphite). Graphite is thermodynamically favoured at ordinary conditions; diamond persists kinetically.">
        <AllotropeStack />
      </Frame>
      <Frame title="C₆₀ — topology is the exam target" caption="A closed cage of 12 five-membered and 20 six-membered rings. For any closed fullerene Cₙ with three-coordinate carbon: pentagons are always 12, hexagons = n/2 − 10, C–C edges = 3n/2, faces = n/2 + 2. Fullerenes dissolve in organic solvents because they are discrete molecules, unlike diamond and graphite.">
        <Fullerene />
      </Frame>
    </>
  );
}

/* =========================== PART 5 — carbides =========================== */

function CarbideMap() {
  return (
    <Svg h={280}>
      <T x={280} y={28} size={13} fill="#c9d6df" weight={800}>Hydrolysis identifies the carbon unit</T>
      {[
        ["Be₂C, Al₄C₃", "methanide C⁴⁻", "→ CH₄", COL.green],
        ["CaC₂, BaC₂", "acetylide C₂²⁻", "→ HC≡CH", COL.amber],
        ["Mg₂C₃", "allylenide C₃⁴⁻", "→ CH₃–C≡CH", COL.red],
      ].map(([a, b, c, col], i) => (
        <g key={i}>
          <rect x={40} y={55 + i * 60} width={150} height={40} rx={7} fill="#132433" stroke={col as string} strokeWidth="1.8" />
          <T x={115} y={80 + i * 60} size={12} weight={800}>{a}</T>
          <T x={250} y={80 + i * 60} size={12} fill="#c9d6df">{b}</T>
          <T x={430} y={80 + i * 60} size={13} fill={col as string} weight={800}>{c}</T>
        </g>
      ))}
      <T x={280} y={262} size={11} fill="#8fa4b4">Interstitial carbides (TiC, WC) — metallic, very hard, high-melting; covalent SiC, B₄C — inert networks.</T>
    </Svg>
  );
}

/* =========================== PART 6 — carbon oxides ====================== */

function COxides() {
  return (
    <Svg h={280}>
      {/* CO2 linear */}
      <Bond x1={70} y1={80} x2={120} y2={80} color={COL.O} w={4} />
      <Bond x1={70} y1={86} x2={120} y2={86} color={COL.O} w={4} />
      <Bond x1={150} y1={80} x2={200} y2={80} color={COL.O} w={4} />
      <Bond x1={150} y1={86} x2={200} y2={86} color={COL.O} w={4} />
      <Atom x={60} y={83} label="O" stroke={COL.O} fill={COL.Ofill} />
      <Atom x={135} y={83} label="C" stroke={COL.C} fill={COL.Cfill} />
      <Atom x={210} y={83} label="O" stroke={COL.O} fill={COL.Ofill} />
      <T x={135} y={120} size={11.5}>CO₂ — linear O=C=O, acidic</T>

      {/* carbonate trigonal planar */}
      <Bond x1={135} y1={200} x2={135} y2={155} color={COL.O} w={3} />
      <Bond x1={135} y1={200} x2={98} y2={225} color={COL.O} w={3} />
      <Bond x1={135} y1={200} x2={172} y2={225} color={COL.O} w={3} />
      <Atom x={135} y={200} label="C" stroke={COL.C} fill={COL.Cfill} />
      <Atom x={135} y={148} label="O" stroke={COL.O} fill={COL.Ofill} r={13} />
      <Atom x={92} y={231} label="O" stroke={COL.O} fill={COL.Ofill} r={13} />
      <Atom x={178} y={231} label="O" stroke={COL.O} fill={COL.Ofill} r={13} />
      <T x={135} y={262} size={11.5}>CO₃²⁻ — trigonal planar, delocalised π</T>

      {/* CO synergic bonding */}
      <Atom x={360} y={110} label="M" stroke={COL.Fe} fill="#2a1414" />
      <Atom x={430} y={110} label="C" stroke={COL.C} fill={COL.Cfill} />
      <Atom x={500} y={110} label="O" stroke={COL.O} fill={COL.Ofill} />
      <Bond x1={378} y1={110} x2={412} y2={110} color="#c9d6df" w={3} />
      <Bond x1={448} y1={104} x2={482} y2={104} color={COL.O} w={3} />
      <Bond x1={448} y1={116} x2={482} y2={116} color={COL.O} w={3} />
      <path d="M378 128 q52 34 104 0" fill="none" stroke={COL.green} strokeWidth={2.4} markerEnd="" />
      <T x={430} y={165} size={11} fill={COL.green}>M dπ → CO π*  (back-donation)</T>
      <path d="M412 92 q-20 -22 -40 0" fill="none" stroke={COL.amber} strokeWidth={2.4} />
      <T x={430} y={78} size={11} fill={COL.amber}>C lone pair → M  (σ)</T>
      <T x={430} y={200} size={11.5}>CO — synergic σ-donation + π back-bonding</T>
      <T x={430} y={220} size={10.5} fill="#8fa4b4">back-donation strengthens M–C, weakens C–O</T>
    </Svg>
  );
}

function Fe2CO9() {
  return (
    <Svg h={280}>
      <Atom x={230} y={140} label="Fe" stroke={COL.Fe} fill="#2a1414" r={17} />
      <Atom x={340} y={140} label="Fe" stroke={COL.Fe} fill="#2a1414" r={17} />
      <Bond x1={247} y1={140} x2={323} y2={140} color={COL.Fe} w={3} />
      {[110, 140, 170].map((y, i) => (
        <g key={i}>
          <Bond x1={285} y1={y} x2={247} y2={140} color={COL.amber} w={2.4} />
          <Bond x1={285} y1={y} x2={323} y2={140} color={COL.amber} w={2.4} />
          <circle cx={285} cy={y} r={6} fill={COL.Ofill} stroke={COL.O} strokeWidth={2} />
        </g>
      ))}
      <T x={285} y={95} size={10.5} fill={COL.amber}>3 bridging CO</T>
      {[[190, 90], [175, 140], [190, 190]].map(([x, y], i) => (
        <g key={i}>
          <Bond x1={230} y1={140} x2={x} y2={y} color="#c9d6df" w={2.2} />
          <circle cx={x} cy={y} r={5} fill={COL.Cfill} stroke={COL.C} strokeWidth={1.8} />
        </g>
      ))}
      {[[380, 90], [395, 140], [380, 190]].map(([x, y], i) => (
        <g key={i}>
          <Bond x1={340} y1={140} x2={x} y2={y} color="#c9d6df" w={2.2} />
          <circle cx={x} cy={y} r={5} fill={COL.Cfill} stroke={COL.C} strokeWidth={1.8} />
        </g>
      ))}
      <T x={285} y={235} size={12}>Fe₂(CO)₉ — 6 terminal + 3 bridging CO, one Fe–Fe bond</T>
      <T x={285} y={255} size={11} fill="#8fa4b4">count a bridge twice → Fe–C bonds = 6 + 2×3 = 12</T>
    </Svg>
  );
}

function Part6Visual() {
  return (
    <>
      <Frame title="Carbon–oxygen bonding at a glance" caption="CO₂ is a linear molecule with two equivalent C=O bonds; CO₃²⁻ is trigonal planar with a delocalised π system spread over three equivalent C–O bonds. CO binds transition metals synergically: σ-donation from the carbon lone pair plus π back-donation from filled metal d orbitals into CO π* — the reason metal carbonyls are stable and the C–O stretch drops on coordination.">
        <COxides />
      </Frame>
      <Frame title="Fe₂(CO)₉ — bridging vs terminal carbonyls" caption="Six terminal CO groups (three on each iron) and three CO groups bridging the Fe–Fe bond. When counting metal–carbon bonds, each bridging CO contributes two M–C contacts, so the total is 6 + 2×3 = 12.">
        <Fe2CO9 />
      </Frame>
    </>
  );
}

/* =========================== PART 8 — silicates ========================== */

function tetra(cx: number, cy: number, s = 26, color: string = COL.Si, key?: string | number) {
  const a = { x: cx, y: cy - s };
  const b = { x: cx - s * 0.87, y: cy + s * 0.5 };
  const c = { x: cx + s * 0.87, y: cy + s * 0.5 };
  return (
    <g key={key}>
      <path d={`M${a.x} ${a.y} L${b.x} ${b.y} L${c.x} ${c.y} Z`} fill={color} opacity={0.28} stroke={color} strokeWidth={2} />
      <circle cx={cx} cy={cy - 2} r={3.5} fill={color} />
      {[a, b, c].map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={5} fill={COL.Ofill} stroke={COL.O} strokeWidth={1.8} />
      ))}
    </g>
  );
}

function SilicateAtlas() {
  return (
    <Svg h={430} w={620}>
      <T x={310} y={22} size={13} weight={800} fill="#c9d6df">Seven silicate classes — corners shared per SiO₄ tetrahedron</T>

      {/* 0 shared - ortho */}
      {tetra(70, 80, 26, COL.Si, "o0")}
      <T x={70} y={125} size={10.5}>0 → SiO₄⁴⁻</T>
      <T x={70} y={140} size={9.5} fill="#8fa4b4">ortho (olivine)</T>

      {/* 1 shared - pyro */}
      {tetra(190, 80, 26, COL.Si, "py0")}
      {tetra(232, 80, 26, COL.Si, "py1")}
      <T x={211} y={125} size={10.5}>1 → Si₂O₇⁶⁻</T>
      <T x={211} y={140} size={9.5} fill="#8fa4b4">pyro (thortveitite)</T>

      {/* 2 shared - cyclic ring */}
      {tetra(360, 70, 20, COL.Si, "cy0")}
      {tetra(392, 92, 20, COL.Si, "cy1")}
      {tetra(360, 114, 20, COL.Si, "cy2")}
      {tetra(328, 92, 20, COL.Si, "cy3")}
      <T x={360} y={140} size={10.5}>2 → (SiₙO₃ₙ)²ⁿ⁻ ring</T>
      <T x={360} y={155} size={9.5} fill="#8fa4b4">cyclic (beryl Si₆O₁₈)</T>

      {/* 2 shared - single chain */}
      {[0, 1, 2, 3].map((k) => tetra(490 + k * 30, k % 2 ? 90 : 72, 18, COL.Si, `sc${k}`))}
      <T x={535} y={140} size={10.5}>2 → (SiO₃)ₙ²ⁿ⁻ chain</T>
      <T x={535} y={155} size={9.5} fill="#8fa4b4">pyroxene (diopside)</T>

      {/* double chain */}
      {[0, 1, 2, 3, 4].map((k) => tetra(70 + k * 26, k % 2 ? 250 : 232, 16, COL.Si, `dcA${k}`))}
      {[0, 1, 2, 3, 4].map((k) => tetra(70 + k * 26, k % 2 ? 286 : 304, 16, COL.Si, `dcB${k}`))}
      <T x={130} y={335} size={10.5}>2.5 → (Si₄O₁₁)ₙ⁶ⁿ⁻</T>
      <T x={130} y={350} size={9.5} fill="#8fa4b4">amphibole (tremolite)</T>

      {/* sheet */}
      {[0, 1, 2, 3].flatMap((r) => [0, 1, 2, 3].map((c) => tetra(300 + c * 24 + (r % 2 ? 12 : 0), 232 + r * 24, 13, COL.Si, `sh${r}-${c}`)))}
      <T x={340} y={345} size={10.5}>3 → (Si₂O₅)ₙ²ⁿ⁻ sheet</T>
      <T x={340} y={360} size={9.5} fill="#8fa4b4">phyllo (talc, mica, clay)</T>

      {/* framework */}
      {[0, 1, 2].flatMap((r) => [0, 1, 2].map((c) => tetra(470 + c * 26, 232 + r * 26, 12, r % 2 ? "#4f6f8c" : COL.Si, `fw${r}-${c}`)))}
      <T x={512} y={330} size={10.5}>4 → (SiO₂)ₙ neutral</T>
      <T x={512} y={345} size={9.5} fill="#8fa4b4">tecto (quartz, feldspar, zeolite)</T>

      <T x={310} y={400} size={10.5} fill={COL.amber}>x corners shared per Si → O:Si = 4 − x/2 · charge/Si = −(4 − x)</T>
      <T x={310} y={418} size={9.5} fill="#8fa4b4">apex dot = Si · open circles = O · shaded triangle = one SiO₄ tetrahedron</T>
    </Svg>
  );
}

function SiO4Unit() {
  return (
    <Svg h={250}>
      <Bond x1={200} y1={130} x2={200} y2={70} color={COL.O} w={3} />
      <Bond x1={200} y1={130} x2={150} y2={165} color={COL.O} w={3} />
      <Bond x1={200} y1={130} x2={250} y2={165} color={COL.O} w={3} />
      <Bond x1={200} y1={130} x2={200} y2={185} color={COL.O} w={3} dash="4 3" />
      <Atom x={200} y={130} label="Si" stroke={COL.Si} fill={COL.Sifill} r={16} />
      <Atom x={200} y={62} label="O" stroke={COL.O} fill={COL.Ofill} />
      <Atom x={144} y={171} label="O" stroke={COL.O} fill={COL.Ofill} />
      <Atom x={256} y={171} label="O" stroke={COL.O} fill={COL.Ofill} />
      <Atom x={200} y={193} label="O" stroke={COL.O} fill={COL.Ofill} />
      <T x={370} y={110} size={12} fill="#c9d6df">SiO₄⁴⁻</T>
      <T x={370} y={132} size={11} fill="#8fa4b4">regular tetrahedron</T>
      <T x={370} y={152} size={11} fill="#8fa4b4">∠O–Si–O ≈ 109.5°</T>
      <T x={370} y={172} size={11} fill="#8fa4b4">Si–O ≈ 1.62 Å</T>
      <T x={200} y={230} size={11}>every silicate is built by corner-sharing these units</T>
    </Svg>
  );
}

function Part8Visual() {
  return (
    <>
      <Frame title="The SiO₄ tetrahedron — the one building block" caption="Silicon is tetrahedrally surrounded by four oxygens. Silicates differ only in how many of the four corner oxygens are shared with neighbouring tetrahedra. Sharing zero corners gives the isolated SiO₄⁴⁻ ion; sharing all four gives neutral SiO₂.">
        <SiO4Unit />
      </Frame>
      <Frame title="Seven silicate classes from one sharing rule" caption="From isolated ions to infinite frameworks: ortho (0 shared) → pyro (1) → cyclic ring and single chain (2) → double chain amphibole (2.5) → sheet (3) → three-dimensional framework (4). The number of shared corners fixes both the oxygen-to-silicon ratio and the charge per silicon.">
        <SilicateAtlas />
      </Frame>
    </>
  );
}

/* =========================== PART 9 — silicones ========================= */

function SiliconeFunctionality() {
  return (
    <Svg h={300}>
      <T x={280} y={26} size={13} weight={800} fill="#c9d6df">Chlorosilane functionality controls the polymer</T>
      {[
        ["R₃SiCl", "R₃Si–OH", "chain stopper / end-cap", COL.green],
        ["R₂SiCl₂", "R₂Si(OH)₂", "linear chain builder", COL.amber],
        ["RSiCl₃", "RSi(OH)₃", "cross-linker / 3-D resin", COL.red],
      ].map(([a, b, c, col], i) => (
        <g key={i}>
          <rect x={40} y={50 + i * 55} width={120} height={38} rx={7} fill="#132433" stroke={col as string} strokeWidth="1.8" />
          <T x={100} y={74 + i * 55} size={12.5} weight={800}>{a}</T>
          <T x={210} y={74 + i * 55} size={12} fill="#c9d6df">─(+H₂O)→ {b}</T>
          <T x={420} y={74 + i * 55} size={12} fill={col as string} weight={700}>{c}</T>
        </g>
      ))}
      {/* siloxane backbone */}
      {[0, 1, 2, 3].map((k) => (
        <g key={k}>
          <Atom x={90 + k * 110} y={250} label="Si" stroke={COL.Si} fill={COL.Sifill} r={13} />
          {k < 3 && <Atom x={145 + k * 110} y={250} label="O" stroke={COL.O} fill={COL.Ofill} r={11} />}
          {k < 3 && <Bond x1={103 + k * 110} y1={250} x2={134 + k * 110} y2={250} />}
          {k < 3 && <Bond x1={156 + k * 110} y1={250} x2={187 + k * 110} y2={250} />}
          <Bond x1={90 + k * 110} y1={237} x2={90 + k * 110} y2={218} color="#7f8fa0" w={2} />
          <Bond x1={90 + k * 110} y1={263} x2={90 + k * 110} y2={282} color="#7f8fa0" w={2} />
        </g>
      ))}
      <T x={280} y={205} size={11} fill="#8fa4b4">…–Si–O–Si–O– siloxane backbone (strong Si–O ≈ 452 kJ mol⁻¹); R groups point outward → water-repellent</T>
    </Svg>
  );
}

/* =========================== PART 10 — silanes ========================== */

function SilanevsAlkane() {
  return (
    <Svg h={230}>
      <Atom x={140} y={110} label="C" stroke={COL.C} fill={COL.Cfill} r={18} />
      <Atom x={210} y={110} label="H" stroke={COL.H} fill="#2a2410" r={13} />
      <Bond x1={158} y1={110} x2={197} y2={110} w={3} />
      <T x={140} y={150} size={11} fill={COL.red}>δ−</T>
      <T x={210} y={150} size={11} fill={COL.green}>δ+</T>
      <T x={175} y={185} size={11.5}>C–H : EN(C 2.5) &gt; EN(H 2.1)</T>

      <Atom x={380} y={110} label="Si" stroke={COL.Si} fill={COL.Sifill} r={18} />
      <Atom x={450} y={110} label="H" stroke={COL.H} fill="#2a2410" r={13} />
      <Bond x1={398} y1={110} x2={437} y2={110} w={3} />
      <T x={380} y={150} size={11} fill={COL.green}>δ+</T>
      <T x={450} y={150} size={11} fill={COL.red}>δ−</T>
      <T x={415} y={185} size={11.5}>Si–H : EN(Si 1.8) &lt; EN(H 2.1)</T>
      <T x={280} y={30} size={12.5} fill="#c9d6df">Polarity is reversed — Si is electrophilic</T>
      <T x={280} y={210} size={11} fill="#8fa4b4">so silanes are pyrophoric, hydrolysed by trace base, and strong reductants</T>
    </Svg>
  );
}

/* =========================== PART 11 — halides ========================== */

function HalideGeometry() {
  return (
    <Svg h={250}>
      {/* SiF6 octahedral */}
      <Atom x={130} y={120} label="Si" stroke={COL.Si} fill={COL.Sifill} r={15} />
      {[[130, 60], [130, 180], [75, 120], [185, 120], [95, 90], [165, 150]].map(([x, y], i) => (
        <g key={i}>
          <Bond x1={130} y1={120} x2={x} y2={y} w={2.4} />
          <circle cx={x} cy={y} r={10} fill="#12261c" stroke={COL.green} strokeWidth={2} />
          <text x={x} y={y + 3.5} textAnchor="middle" fontSize={9} fontWeight={800} fill="#eef6ff">F</text>
        </g>
      ))}
      <T x={130} y={218} size={11}>[SiF₆]²⁻ octahedral — stable</T>
      <T x={130} y={234} size={9.5} fill="#8fa4b4">[SiCl₆]²⁻ not favoured: Cl too large</T>

      {/* SnCl2 bent */}
      <Atom x={360} y={110} label="Sn" stroke={COL.Sn} fill={COL.Snfill} r={15} />
      <Bond x1={360} y1={110} x2={315} y2={150} w={2.6} />
      <Bond x1={360} y1={110} x2={405} y2={150} w={2.6} />
      <Atom x={310} y={156} label="Cl" stroke={COL.green} fill="#12261c" r={12} />
      <Atom x={410} y={156} label="Cl" stroke={COL.green} fill="#12261c" r={12} />
      <T x={360} y={90} size={10} fill={COL.amber}>lone pair</T>
      <T x={360} y={205} size={11}>SnCl₂ — bent (≈ 95°), Sn(II) lone pair</T>
      <T x={360} y={221} size={9.5} fill="#8fa4b4">reducing; SnCl₄ is tetrahedral, covalent, fuming</T>
    </Svg>
  );
}

/* =========================== PART 13 — lead oxides ====================== */

function PbO2Fork() {
  return (
    <Svg h={250}>
      <Atom x={280} y={60} label="PbO₂" stroke={COL.Pb} fill={COL.Pbfill} r={24} />
      {[
        ["+ hot HCl", "PbCl₂ + Cl₂", -170, COL.green],
        ["+ hot conc. H₂SO₄", "PbSO₄ + O₂", 0, COL.amber],
        ["+ HNO₃", "no reaction — stays brown", 175, COL.red],
      ].map(([r, p, dx, col], i) => (
        <g key={i}>
          <Bond x1={280} y1={84} x2={280 + (dx as number) * 0.6} y2={150} color={col as string} w={2.4} />
          <T x={280 + (dx as number)} y={168} size={11.5} fill={col as string} weight={800}>{r}</T>
          <T x={280 + (dx as number)} y={188} size={11} fill="#c9d6df">{p}</T>
        </g>
      ))}
      <T x={280} y={222} size={11} fill="#8fa4b4">Pb(IV) is a strong oxidant: any oxidisable anion (Cl⁻, and in H₂SO₄ the O) is oxidised; NO₃⁻ cannot be, so PbO₂ survives.</T>
    </Svg>
  );
}

function MixedOxide() {
  return (
    <Svg h={210}>
      <rect x={90} y={70} width={150} height={60} rx={9} fill="#132433" stroke={COL.Pb} strokeWidth={2} />
      <T x={165} y={100} size={13} weight={800}>Pb₃O₄</T>
      <T x={165} y={118} size={10} fill="#8fa4b4">= 2PbO·PbO₂ (red lead)</T>
      <Bond x1={240} y1={100} x2={320} y2={100} w={2.4} />
      <T x={300} y={90} size={10} fill={COL.amber}>+ HNO₃</T>
      <T x={430} y={85} size={12} fill="#c9d6df">2 Pb(NO₃)₂  (PbO part dissolves)</T>
      <T x={430} y={112} size={12} fill={COL.red}>+ PbO₂↓  (brown residue, Pb(IV) part)</T>
      <T x={300} y={175} size={11} fill="#8fa4b4">selective acid attack proves the mixed-oxide composition</T>
    </Svg>
  );
}

/* ===================== PART 16 — pπ–dπ / trisilylamine ================= */

function Trisilylamine() {
  return (
    <Svg h={300} w={600}>
      {/* N(CH3)3 pyramidal */}
      <T x={150} y={26} size={12.5} fill="#c9d6df" weight={800}>N(CH₃)₃ — pyramidal</T>
      <Atom x={150} y={120} label="N" stroke={COL.green} fill="#12291f" r={15} />
      <Bond x1={150} y1={120} x2={95} y2={165} w={2.4} />
      <Bond x1={150} y1={120} x2={205} y2={165} w={2.4} />
      <Bond x1={150} y1={120} x2={150} y2={185} w={2.4} />
      {[[90, 172], [210, 172], [150, 193]].map(([x, y], i) => (
        <Atom key={i} x={x} y={y} label="CH₃" stroke={COL.C} fill={COL.Cfill} r={13} fs={8.5} />
      ))}
      <Bond x1={150} y1={120} x2={150} y2={82} color={COL.amber} w={3} dash="3 3" />
      <T x={150} y={72} size={10} fill={COL.amber}>lone pair (sp³)</T>
      <T x={150} y={230} size={10.5} fill="#8fa4b4">N is sp³ · lone pair localised · good donor (basic)</T>

      {/* N(SiH3)3 planar */}
      <T x={440} y={26} size={12.5} fill="#c9d6df" weight={800}>N(SiH₃)₃ — planar</T>
      <Atom x={440} y={140} label="N" stroke={COL.green} fill="#12291f" r={15} />
      {[[380, 110], [500, 110], [440, 200]].map(([x, y], i) => (
        <g key={i}>
          <Bond x1={440} y1={140} x2={x} y2={y} w={2.4} />
          <Atom x={x} y={y} label="SiH₃" stroke={COL.Si} fill={COL.Sifill} r={13} fs={8.5} />
        </g>
      ))}
      <ellipse cx={440} cy={110} rx={16} ry={9} fill="none" stroke={COL.amber} strokeWidth={2} />
      <ellipse cx={440} cy={170} rx={16} ry={9} fill="none" stroke={COL.amber} strokeWidth={2} />
      <T x={440} y={95} size={9.5} fill={COL.amber}>N p orbital → empty Si 3d (pπ–dπ)</T>
      <T x={440} y={245} size={10.5} fill="#8fa4b4">N is sp² · p-lone pair delocalised onto Si · weak base</T>
      <T x={300} y={285} size={10.5} fill={COL.red}>carbon has no 3d orbital, so pπ–dπ is impossible → N(CH₃)₃ stays pyramidal</T>
    </Svg>
  );
}

/* =============================== registry =============================== */

type Fig = { id: string; el: ReactNode };

const FIGURES: Record<number, Fig[]> = {
  1: [{ id: "trend", el: <Frame key="t" title="Group 14 trend ribbon" caption="The most examined lines: the +4→+2 stability switch (inert-pair effect), the non-metal→metal drift, the collapse of catenation past carbon, and the irregular first ionisation enthalpy where lead exceeds tin because of poor d/f shielding."><TrendRibbon /></Frame> }],
  3: [{ id: "caten", el: <Frame key="c" title="Catenation follows bond enthalpy" caption="Carbon catenates because the C–C bond is strong (≈ 348 kJ mol⁻¹, close to C–O). Down the group the M–M bond weakens and the atoms grow, so chains shorten rapidly; lead is effectively non-catenating."><CatenationBars /></Frame> }],
  4: [{ id: "p4", el: <Part3Visual key="p4" /> }],
  6: [{ id: "carb", el: <Frame key="c6" title="Carbide hydrolysis map" caption="The gas released on hydrolysis reveals the carbon anion: methanides (Be₂C, Al₄C₃) give methane, acetylides (CaC₂ …) give ethyne, and Mg₂C₃ (a C₃ unit) gives propyne. Interstitial and covalent carbides are hydrolytically inert."><CarbideMap /></Frame> }],
  7: [{ id: "p7", el: <Part6Visual key="p7" /> }],
  8: [{ id: "co2", el: <Frame key="co2" title="Carbon–oxygen bonding at a glance" caption="CO₂ is linear with two equivalent C–O bonds (115 pm); CO₃²⁻ is trigonal planar with a delocalised π system over three equivalent C–O bonds. CO binds metals synergically — σ-donation from the C lone pair plus π back-donation into CO π*."><COxides /></Frame> }],
  10: [{ id: "sio4", el: <Frame key="sio4" title="The SiO₄ tetrahedron — the one building block" caption="Silicon is tetrahedrally surrounded by four oxygens (Si sp³, ∠O–Si–O ≈ 109.5°, Si–O ≈ 162 pm). In silica every corner O is shared between two Si, giving a giant 3-D network — the reason SiO₂ is a solid while CO₂ is a gas."><SiO4Unit /></Frame> }],
  11: [{ id: "atlas", el: <Frame key="atlas" title="Seven silicate classes from one sharing rule" caption="From isolated ions to infinite frameworks: ortho (0 shared) → pyro (1) → cyclic ring and single chain (2) → double-chain amphibole (2½) → sheet (3) → 3-D framework (4). The number of shared corners fixes both the O:Si ratio and the charge per silicon."><SilicateAtlas /></Frame> }],
  13: [{ id: "sili", el: <Frame key="s13" title="Silicone functionality rule" caption="Hydrolysis of a chlorosilane gives a silanol that condenses into an –Si–O–Si– backbone. R₃SiCl end-caps, R₂SiCl₂ builds the linear chain, RSiCl₃ cross-links into a 3-D resin — so the monomer ratio sets chain length and network density."><SiliconeFunctionality /></Frame> }],
  14: [{ id: "sil", el: <Frame key="s14" title="Why silanes out-react alkanes" caption="Because silicon is less electronegative than hydrogen, Si–H is polarised Si(δ+)–H(δ−) — the reverse of C–H. The electrophilic, larger silicon centre is open to nucleophilic and oxygen attack, so silanes ignite in air and hydrolyse in trace base."><SilanevsAlkane /></Frame> }],
  15: [{ id: "hal", el: <Frame key="h15" title="Halide and complex geometry" caption="[SiF₆]²⁻ forms because six small fluorides fit around silicon and Si–F donation is strong; [SiCl₆]²⁻ does not. Sn(II) halides are bent and reducing (stereochemically active lone pair); Sn(IV) halides are tetrahedral, covalent and readily hydrolysed."><HalideGeometry /></Frame> }],
  16: [{ id: "psa", el: <Frame key="psa" title="Internal pπ–dπ bonding: N(SiH₃)₃ vs N(CH₃)₃" caption="Trimethylamine is pyramidal with a localised lone pair (good base). In trisilylamine nitrogen goes sp² and its p-lone pair is donated into empty Si 3d orbitals (pπ–dπ), flattening the molecule to planar and destroying its donor power. Carbon has no accessible d orbital, so N(CH₃)₃ cannot do this."><Trisilylamine /></Frame> }],
  18: [
    { id: "mox", el: <Frame key="m18" title="Pb₃O₄ is a genuine mixed oxide" caption="Dilute nitric acid dissolves the PbO component of red lead and leaves the PbO₂ component as an insoluble brown residue — direct chemical proof that Pb₃O₄ behaves as 2PbO·PbO₂ (and Pb₂O₃ as PbO·PbO₂)."><MixedOxide /></Frame> },
    { id: "fork", el: <Frame key="f18" title="PbO₂ reacts differently with each acid" caption="Lead(IV) oxide is amphoteric but strongly oxidising: with hot HCl it liberates Cl₂, with hot concentrated H₂SO₄ it liberates O₂, and with HNO₃ — whose anion cannot be oxidised — it does not dissolve, which is why it survives as the brown residue in the mixed-oxide test."><PbO2Fork /></Frame> },
  ],
};

export function CarbonFamilyVisual({ part, heroOnly = false }: { part: number; heroOnly?: boolean }) {
  const figs = FIGURES[part];
  if (!figs || figs.length === 0) return null;
  const shown = heroOnly ? figs.slice(0, 1) : figs;
  return (
    <section aria-label={`Carbon family lesson ${part} visual atlas`} className="space-y-5">
      {shown.map((f) => (
        <div key={f.id}>{f.el}</div>
      ))}
    </section>
  );
}
