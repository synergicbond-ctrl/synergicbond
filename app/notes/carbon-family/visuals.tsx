import type { ReactNode } from "react";

/** This file renders as a Server Component (no "use client"), so React
 * hooks/context (useId, createContext/useContext) aren't available here.
 * Each figure instead passes its own component name as a namespace so its
 * glow filter gets a document-unique id — plain, deterministic, and safe for
 * a page that renders several of these figures' separate <svg> roots
 * together (multiple figures per chapter "part" share one DOM, so a bare
 * literal id like "cfGlow" would collide across them). */
function glowUrl(ns: string) {
  return `url(#cfGlow-${ns})`;
}

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

function Svg({ children, w = 560, h = 320, glowNs }: { children: ReactNode; w?: number; h?: number; glowNs: string }) {
  return (
    // aria-hidden: this figure's title+caption are already real, visible text right next to it
    // via the Frame wrapper every caller uses — role="img" with no name here would just announce
    // a redundant, unlabelled "image" to screen readers instead of the adjacent text.
    <svg viewBox={`0 0 ${w} ${h}`} className="mx-auto block h-auto w-full max-w-[600px]" aria-hidden="true">
      <defs>
        <filter id={`cfGlow-${glowNs}`} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="3.4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {children}
    </svg>
  );
}

/** Small checklist-row insight panel, reused across the elevated Group 14 figures
 * for the same "derive the number, don't just state it" density as Fullerene's
 * cage-algorithm panel — kept generic so each figure supplies its own rows/tone. */
/** Fixed 40px row pitch (label line + note line, comfortably spaced) — callers must
 * size their panel's `h` as `44 + rows.length * 40` or taller, never smaller. */
function InsightPanel({
  x, y, w, heading, tone, rows,
}: { x: number; y: number; w: number; heading: string; tone: string; rows: { label: string; value?: string; note: string }[] }) {
  const rowH = 40;
  const h = 44 + rows.length * rowH;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="18" fill="#08111c" stroke={tone} strokeOpacity=".35" />
      <T x={x + 20} y={y + 30} size={11.5} weight={800} fill={tone} anchor="start">{heading}</T>
      {rows.map((r, i) => {
        const ry = y + 56 + i * rowH;
        return (
          <g key={r.label}>
            <circle cx={x + 24} cy={ry - 5} r="3.2" fill={tone} />
            <T x={x + 38} y={ry} size={12} weight={800} fill="#e7eef7" anchor="start">{r.label}</T>
            {r.value ? <T x={x + w - 20} y={ry} size={12.5} weight={900} fill={COL.amber} anchor="end">{r.value}</T> : null}
            <T x={x + 38} y={ry + 17} size={10} fill="#8fa4b4" anchor="start">{r.note}</T>
          </g>
        );
      })}
    </g>
  );
}

/* =========================== PART 1 — trend ribbon ======================== */

function TrendRibbon() {
  const glow = glowUrl("TrendRibbon");
  const els: { s: string; note: string }[] = [
    { s: "C", note: "+4 only" },
    { s: "Si", note: "+4 only" },
    { s: "Ge", note: "+4 usual" },
    { s: "Sn", note: "+2 rising" },
    { s: "Pb", note: "+2 favoured" },
  ];
  return (
    <Svg w={620} h={400} glowNs="TrendRibbon">
      <rect x="8" y="8" width="604" height="384" rx="20" fill="#060c14" stroke="#1c2c3d" />
      <T x={310} y={38} size={12.5} weight={800} fill="#e7eef7">Group 14 — one trend line, four consequences</T>
      <Bond x1={70} y1={100} x2={550} y2={100} color="#2a4257" w={2} />
      <path d="M550 100 l-10 -6 l0 12 z" fill="#2a4257" />
      {els.map((e, i) => {
        const x = 70 + i * 120;
        return (
          <g key={e.s} filter={glow}>
            <circle cx={x} cy={100} r={22} fill="#132433" stroke={COL.C} strokeWidth="2" />
            <text x={x} y={106} textAnchor="middle" fontSize="15" fontWeight="800" fill="#eef6ff">{e.s}</text>
          </g>
        );
      })}
      {els.map((e, i) => (
        <T key={`n${e.s}`} x={70 + i * 120} y={138} size={10} fill={i >= 3 ? COL.amber : "#7b93a8"}>{e.note}</T>
      ))}
      <InsightPanel
        x={30} y={162} w={560} heading="WHAT MOVES TOGETHER DOWN THE GROUP" tone={COL.green}
        rows={[
          { label: "Oxidation state", note: "+4 stability falls, +2 rises (inert-pair effect) — Pb²⁺ is the endpoint" },
          { label: "Character", note: "non-metal → metalloid → metal, tracking the same shielding trend" },
          { label: "Catenation", note: "C ≫ Si > Ge ≈ Sn ≫ Pb, set by falling M–M bond enthalpy" },
        ]}
      />
      <rect x="30" y="352" width="560" height="30" rx="9" fill={COL.amber} fillOpacity=".08" stroke={COL.amber} strokeOpacity=".4" />
      <T x={310} y={372} size={10} fill={COL.amber}>anomaly: IE₁ order is C &gt; Si &gt; Ge &gt; Pb &gt; Sn — Pb exceeds Sn from poor d/f shielding</T>
    </Svg>
  );
}

/* =========================== PART 2 — catenation ========================= */

function CatenationBars() {
  const glow = glowUrl("CatenationBars");
  const data: [string, number][] = [["C–C", 348], ["Si–Si", 297], ["Ge–Ge", 260], ["Sn–Sn", 240]];
  const scale = 0.42;
  const baseline = 260;
  return (
    <Svg w={600} h={330} glowNs="CatenationBars">
      <rect x="8" y="8" width="584" height="314" rx="20" fill="#060c14" stroke="#1c2c3d" />
      <T x={300} y={38} size={12.5} weight={800} fill="#e7eef7">Catenation tracks M–M bond enthalpy, not group position</T>
      <Bond x1={64} y1={baseline} x2={536} y2={baseline} color="#2a4257" w={2} />
      {data.map(([k, v], i) => {
        const x = 100 + i * 110;
        const barH = v * scale;
        return (
          <g key={k}>
            <rect x={x - 32} y={baseline - barH} width={64} height={barH} rx={6} fill={i === 0 ? COL.amber : COL.C} opacity={i === 0 ? 0.95 : 0.7} filter={glow} />
            <T x={x} y={baseline - barH - 12} size={13} weight={900} fill={i === 0 ? COL.amber : "#c9d6df"}>{v}</T>
            <T x={x} y={baseline + 22} size={12} weight={800}>{k}</T>
          </g>
        );
      })}
      <T x={470} y={70} size={10} fill={COL.amber} anchor="end">C–C ≈ C–O — this is why carbon catenates</T>
      <rect x="30" y="292" width="540" height="26" rx="8" fill={COL.red} fillOpacity=".08" stroke={COL.red} strokeOpacity=".4" />
      <T x={300} y={310} size={10.5} fill={COL.red}>Pb–Pb bond enthalpy is negligible — lead is treated as non-catenating</T>
    </Svg>
  );
}

/* =========================== PART 3 — allotropes ========================= */

function Diamond({ glow }: { glow: string }) {
  const c = { x: 150, y: 160 };
  const v = [
    { x: 150, y: 95 },
    { x: 95, y: 200 },
    { x: 205, y: 200 },
    { x: 150, y: 220 },
  ];
  return (
    <g>
      <g filter={glow}>
        {v.map((p, i) => (
          <Bond key={i} x1={c.x} y1={c.y} x2={p.x} y2={p.y} color={COL.C} w={3} />
        ))}
      </g>
      {v.map((p, i) => (
        <Atom key={i} x={p.x} y={p.y} label="C" stroke={COL.C} fill={COL.Cfill} r={13} />
      ))}
      <Atom x={c.x} y={c.y} label="C" stroke={COL.C} fill={COL.Cfill} r={15} />
      <T x={150} y={255} size={12}>Diamond — sp³, C–C 1.54 Å, 3-D network</T>
      <T x={150} y={273} size={11} fill="#8fa4b4">giant covalent · insulator · hardest</T>
    </g>
  );
}

function Graphite({ glow }: { glow: string }) {
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
      <g filter={glow}>
        {layer(110, COL.C)}
        {layer(175, "#4f6f8c")}
        {layer(240, COL.C)}
      </g>
      <Bond x1={470} y1={110} x2={470} y2={240} color="#3a5a74" w={1.6} dash="4 4" />
      <T x={520} y={178} size={11} fill="#8fa4b4">3.35 Å</T>
      <T x={400} y={280} size={12}>Graphite — sp², ABAB layers, C–C 1.42 Å</T>
      <T x={400} y={298} size={11} fill="#8fa4b4">delocalised π in-plane · soft · conducts in-plane</T>
    </g>
  );
}

function AllotropeStack() {
  const glow = glowUrl("AllotropeStack");
  return (
    <Svg h={310} glowNs="AllotropeStack">
      <Diamond glow={glow} />
      <Graphite glow={glow} />
    </Svg>
  );
}

function Fullerene() {
  const cx = 195;
  const cy = 236;
  const pent = (r: number, off: number) =>
    Array.from({ length: 5 }, (_, i) => {
      const a = ((i * 72 + off - 90) * Math.PI) / 180;
      return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
    });
  const inner = pent(42, 0);
  const mid = pent(92, 36);
  const outer = pent(124, 0);
  // one representative [6,6] (fusing two hexagons, shorter) and [6,5] (hexagon/pentagon edge) bond, picked
  // off the outer ring so a real leader line can point at each — not a generic label. Both sit on the
  // right-hand side of the cage, well clear of the title above, so their leader labels never crowd it.
  const sixSix = { p1: outer[1], p2: mid[1] };
  const sixFive = { p1: mid[2], p2: outer[2] };
  const rows = [
    ["Pentagons", "12", "fixed by Euler's theorem — every closed sp² cage has exactly 12"],
    ["Hexagons", "n/2 − 10 = 20", "the only part that grows with cage size"],
    ["C–C edges", "3n/2 = 90", "each C is 3-connected, so edges = 3n/2"],
    ["Faces", "n/2 + 2 = 32", "Euler: V − E + F = 2 → 60 − 90 + F = 2"],
  ] as const;
  return (
    <Svg w={940} h={460} glowNs="Fullerene">
      <defs>
        <filter id="fullereneGlow-Fullerene" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="4.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect x="8" y="8" width="410" height="444" rx="22" fill="#060c14" stroke="#1c2c3d" />
      <T x={213} y={40} size={13} weight={800} fill="#e7eef7">C₆₀ · buckminsterfullerene</T>
      <g filter="url(#fullereneGlow-Fullerene)">
        {inner.map((p, i) => (
          <Bond key={`i${i}`} x1={p.x} y1={p.y} x2={inner[(i + 1) % 5].x} y2={inner[(i + 1) % 5].y} color={COL.amber} w={2.4} />
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
          <Bond key={`o${i}`} x1={p.x} y1={p.y} x2={outer[(i + 1) % 5].x} y2={outer[(i + 1) % 5].y} color="#9fc8e8" w={2.6} />
        ))}
      </g>
      {[...inner, ...mid, ...outer].map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={5} fill={COL.Cfill} stroke={COL.C} strokeWidth={1.8} />
      ))}
      {/* [6,6] and [6,5] bond call-outs, each anchored to a real bond via a leader line to a fixed
          label slot — kept well clear of both the title above and the caption below. */}
      <Bond x1={(sixSix.p1.x + sixSix.p2.x) / 2} y1={(sixSix.p1.y + sixSix.p2.y) / 2} x2={392} y2={150} color="#9fc8e8" w={1.2} dash="3 3" />
      <T x={396} y={148} size={10.5} fill="#9fc8e8" anchor="end">[6,6] fused bond</T>
      <T x={396} y={163} size={9.5} fill="#7b93a8" anchor="end">≈138 pm · more double-bond</T>
      <Bond x1={(sixFive.p1.x + sixFive.p2.x) / 2} y1={(sixFive.p1.y + sixFive.p2.y) / 2} x2={392} y2={330} color={COL.C} w={1.2} dash="3 3" />
      <T x={396} y={328} size={10.5} fill={COL.C} anchor="end">[6,5] fused bond</T>
      <T x={396} y={343} size={9.5} fill="#7b93a8" anchor="end">≈145 pm · single-bond only</T>
      <T x={213} y={438} size={10.5} fill="#7b93a8">all 60 vertices equivalent · discrete molecular cage, not a lattice</T>

      <rect x="452" y="8" width="480" height="444" rx="22" fill="#08111c" stroke="#2a3c2f" />
      <T x={476} y={44} size={11.5} weight={800} fill={COL.green} anchor="start">CAGE ALGORITHM — fixed once n = 60</T>
      {rows.map(([label, value, note], i) => {
        const y = 84 + i * 84;
        return (
          <g key={label}>
            <rect x="476" y={y - 24} width="20" height="20" rx="5" fill="none" stroke={COL.green} strokeWidth="2" />
            <path d={`M481 ${y - 15} l3 5 l7 -9`} stroke={COL.green} strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <T x={506} y={y - 8} size={13} weight={800} fill="#e7eef7" anchor="start">{label}</T>
            <T x={906} y={y - 8} size={14} weight={900} fill={COL.amber} anchor="end">{value}</T>
            <T x={506} y={y + 14} size={10.5} fill="#8fa4b4" anchor="start">{note}</T>
            {i < rows.length - 1 ? <Bond x1={476} y1={y + 34} x2={906} y2={y + 34} color="#1c2c22" w={1} /> : null}
          </g>
        );
      })}
      <rect x="476" y="404" width="430" height="34" rx="10" fill={COL.amber} fillOpacity=".08" stroke={COL.amber} strokeOpacity=".5" />
      <T x={691} y={426} size={10.5} fill={COL.amber} anchor="middle">reactive site: [6,6] pyramidalisation strain drives addition chemistry (e.g. K₃C₆₀)</T>
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
  const glow = glowUrl("CarbideMap");
  const rows = [
    ["Be₂C, Al₄C₃", "methanide", "C⁴⁻", "→ CH₄", COL.green],
    ["CaC₂, BaC₂", "acetylide", "C₂²⁻", "→ HC≡CH", COL.amber],
    ["Mg₂C₃", "allylenide", "C₃⁴⁻", "→ CH₃–C≡CH", COL.red],
  ] as const;
  return (
    <Svg w={600} h={410} glowNs="CarbideMap">
      <rect x="8" y="8" width="584" height="394" rx="20" fill="#060c14" stroke="#1c2c3d" />
      <T x={300} y={36} size={12.5} weight={800} fill="#e7eef7">Hydrolysis gas reveals the carbon anion</T>
      {rows.map(([source, name, anion, gas, col], i) => {
        const y = 60 + i * 60;
        return (
          <g key={source}>
            <rect x={44} y={y} width={168} height={42} rx={9} fill="#132433" stroke={col} strokeWidth="1.8" filter={glow} />
            <T x={128} y={y + 26} size={12} weight={800}>{source}</T>
            <T x={228} y={y + 18} size={10.5} fill="#8fa4b4" anchor="start">{name}</T>
            <T x={228} y={y + 34} size={12} fill="#c9d6df" weight={800} anchor="start">{anion}</T>
            <path d={`M330 ${y + 21} H400`} stroke={col} strokeWidth="2" />
            <path d={`M400 ${y + 21} l-9 -5 l0 10 z`} fill={col} />
            <T x={412} y={y + 26} size={13.5} fill={col} weight={900} anchor="start">{gas}</T>
          </g>
        );
      })}
      <InsightPanel
        x={30} y={258} w={540} heading="NOT ALL CARBIDES HYDROLYSE" tone={COL.C}
        rows={[
          { label: "Interstitial (TiC, WC)", note: "metallic, very hard, high-melting — hydrolytically inert" },
          { label: "Covalent (SiC, B₄C)", note: "extended network solids — hydrolytically inert" },
        ]}
      />
    </Svg>
  );
}

/* =========================== PART 6 — carbon oxides ====================== */

function COxides() {
  const glow = glowUrl("COxides");
  return (
    <Svg w={600} h={300} glowNs="COxides">
      <rect x="8" y="8" width="584" height="284" rx="20" fill="#060c14" stroke="#1c2c3d" />
      <rect x="26" y="26" width="220" height="248" rx="14" fill="#0a1420" stroke="#233247" />
      <g filter={glow}>
        {/* CO2 linear */}
        <Bond x1={70} y1={90} x2={120} y2={90} color={COL.O} w={4} />
        <Bond x1={70} y1={96} x2={120} y2={96} color={COL.O} w={4} />
        <Bond x1={150} y1={90} x2={200} y2={90} color={COL.O} w={4} />
        <Bond x1={150} y1={96} x2={200} y2={96} color={COL.O} w={4} />
      </g>
      <Atom x={60} y={93} label="O" stroke={COL.O} fill={COL.Ofill} />
      <Atom x={135} y={93} label="C" stroke={COL.C} fill={COL.Cfill} />
      <Atom x={210} y={93} label="O" stroke={COL.O} fill={COL.Ofill} />
      <T x={135} y={130} size={11.5}>CO₂ — linear O=C=O, acidic</T>

      {/* carbonate trigonal planar */}
      <g filter={glow}>
        <Bond x1={135} y1={215} x2={135} y2={170} color={COL.O} w={3} />
        <Bond x1={135} y1={215} x2={98} y2={240} color={COL.O} w={3} />
        <Bond x1={135} y1={215} x2={172} y2={240} color={COL.O} w={3} />
      </g>
      <Atom x={135} y={215} label="C" stroke={COL.C} fill={COL.Cfill} />
      <Atom x={135} y={163} label="O" stroke={COL.O} fill={COL.Ofill} r={13} />
      <Atom x={92} y={246} label="O" stroke={COL.O} fill={COL.Ofill} r={13} />
      <Atom x={178} y={246} label="O" stroke={COL.O} fill={COL.Ofill} r={13} />
      <T x={135} y={268} size={10.5}>CO₃²⁻ — trigonal planar, delocalised π</T>

      {/* CO synergic bonding */}
      <rect x="270" y="26" width="304" height="248" rx="14" fill="#0a1420" stroke="#233247" />
      <T x={422} y={50} size={11.5} weight={800} fill="#e7eef7">CO — synergic σ-donation + π back-bonding</T>
      <g filter={glow}>
        <Atom x={330} y={140} label="M" stroke={COL.Fe} fill="#2a1414" />
        <Atom x={400} y={140} label="C" stroke={COL.C} fill={COL.Cfill} />
        <Atom x={470} y={140} label="O" stroke={COL.O} fill={COL.Ofill} />
        <Bond x1={348} y1={140} x2={382} y2={140} color="#c9d6df" w={3} />
        <Bond x1={418} y1={134} x2={452} y2={134} color={COL.O} w={3} />
        <Bond x1={418} y1={146} x2={452} y2={146} color={COL.O} w={3} />
      </g>
      <path d="M348 158 q52 34 104 0" fill="none" stroke={COL.green} strokeWidth={2.4} />
      <T x={400} y={210} size={11} fill={COL.green}>M dπ → CO π* (back-donation)</T>
      <path d="M382 122 q-20 -22 -40 0" fill="none" stroke={COL.amber} strokeWidth={2.4} />
      <T x={400} y={92} size={11} fill={COL.amber}>C lone pair → M (σ)</T>
      <rect x="300" y="228" width="244" height="34" rx="9" fill={COL.green} fillOpacity=".08" stroke={COL.green} strokeOpacity=".4" />
      <T x={422} y={249} size={10} fill={COL.green}>back-donation strengthens M–C, weakens C–O</T>
    </Svg>
  );
}

function Fe2CO9() {
  const glow = glowUrl("Fe2CO9");
  return (
    <Svg w={600} h={360} glowNs="Fe2CO9">
      <rect x="8" y="8" width="584" height="344" rx="20" fill="#060c14" stroke="#1c2c3d" />
      <T x={300} y={38} size={12.5} weight={800} fill="#e7eef7">Two coordination environments, one Fe–Fe bond</T>
      <g filter={glow}>
        <Atom x={245} y={160} label="Fe" stroke={COL.Fe} fill="#2a1414" r={17} />
        <Atom x={355} y={160} label="Fe" stroke={COL.Fe} fill="#2a1414" r={17} />
        <Bond x1={262} y1={160} x2={338} y2={160} color={COL.Fe} w={3} />
        {[130, 160, 190].map((y, i) => (
          <g key={i}>
            <Bond x1={300} y1={y} x2={262} y2={160} color={COL.amber} w={2.4} />
            <Bond x1={300} y1={y} x2={338} y2={160} color={COL.amber} w={2.4} />
            <circle cx={300} cy={y} r={6} fill={COL.Ofill} stroke={COL.O} strokeWidth={2} />
          </g>
        ))}
        {[[205, 110], [190, 160], [205, 210]].map(([x, y], i) => (
          <g key={i}>
            <Bond x1={245} y1={160} x2={x} y2={y} color="#c9d6df" w={2.2} />
            <circle cx={x} cy={y} r={5} fill={COL.Cfill} stroke={COL.C} strokeWidth={1.8} />
          </g>
        ))}
        {[[395, 110], [410, 160], [395, 210]].map(([x, y], i) => (
          <g key={i}>
            <Bond x1={355} y1={160} x2={x} y2={y} color="#c9d6df" w={2.2} />
            <circle cx={x} cy={y} r={5} fill={COL.Cfill} stroke={COL.C} strokeWidth={1.8} />
          </g>
        ))}
      </g>
      <T x={300} y={112} size={10.5} fill={COL.amber}>3 bridging CO</T>
      <InsightPanel
        x={30} y={244} w={540} heading="COUNTING THE Fe–C BONDS" tone={COL.amber}
        rows={[{ label: "6 terminal + 3 bridging CO, one Fe–Fe bond", note: "each bridge counts twice → Fe–C bonds = 6 + 2×3 = 12" }]}
      />
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

/** Plain helper (not a component) — takes the glow filter url as a parameter
 * from its caller rather than computing it itself. */
function tetra(cx: number, cy: number, s = 26, color: string = COL.Si, key: string | number | undefined, glow: string) {
  const a = { x: cx, y: cy - s };
  const b = { x: cx - s * 0.87, y: cy + s * 0.5 };
  const c = { x: cx + s * 0.87, y: cy + s * 0.5 };
  return (
    <g key={key} filter={glow}>
      <path d={`M${a.x} ${a.y} L${b.x} ${b.y} L${c.x} ${c.y} Z`} fill={color} opacity={0.28} stroke={color} strokeWidth={2} />
      <circle cx={cx} cy={cy - 2} r={3.5} fill={color} />
      {[a, b, c].map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={5} fill={COL.Ofill} stroke={COL.O} strokeWidth={1.8} />
      ))}
    </g>
  );
}

function SilicateAtlas() {
  const glow = glowUrl("SilicateAtlas");
  return (
    <Svg h={430} w={620} glowNs="SilicateAtlas">
      <rect x="8" y="8" width="604" height="414" rx="20" fill="#060c14" stroke="#1c2c3d" />
      <T x={310} y={30} size={13} weight={800} fill="#e7eef7">Seven silicate classes — corners shared per SiO₄ tetrahedron</T>

      {/* 0 shared - ortho */}
      {tetra(70, 80, 26, COL.Si, "o0", glow)}
      <T x={70} y={125} size={10.5}>0 → SiO₄⁴⁻</T>
      <T x={70} y={140} size={9.5} fill="#8fa4b4">ortho (olivine)</T>

      {/* 1 shared - pyro */}
      {tetra(190, 80, 26, COL.Si, "py0", glow)}
      {tetra(232, 80, 26, COL.Si, "py1", glow)}
      <T x={211} y={125} size={10.5}>1 → Si₂O₇⁶⁻</T>
      <T x={211} y={140} size={9.5} fill="#8fa4b4">pyro (thortveitite)</T>

      {/* 2 shared - cyclic ring */}
      {tetra(360, 70, 20, COL.Si, "cy0", glow)}
      {tetra(392, 92, 20, COL.Si, "cy1", glow)}
      {tetra(360, 114, 20, COL.Si, "cy2", glow)}
      {tetra(328, 92, 20, COL.Si, "cy3", glow)}
      <T x={360} y={140} size={10.5}>2 → (SiₙO₃ₙ)²ⁿ⁻ ring</T>
      <T x={360} y={155} size={9.5} fill="#8fa4b4">cyclic (beryl Si₆O₁₈)</T>

      {/* 2 shared - single chain */}
      {[0, 1, 2, 3].map((k) => tetra(490 + k * 30, k % 2 ? 90 : 72, 18, COL.Si, `sc${k}`, glow))}
      <T x={535} y={140} size={10.5}>2 → (SiO₃)ₙ²ⁿ⁻ chain</T>
      <T x={535} y={155} size={9.5} fill="#8fa4b4">pyroxene (diopside)</T>

      {/* double chain */}
      {[0, 1, 2, 3, 4].map((k) => tetra(70 + k * 26, k % 2 ? 250 : 232, 16, COL.Si, `dcA${k}`, glow))}
      {[0, 1, 2, 3, 4].map((k) => tetra(70 + k * 26, k % 2 ? 286 : 304, 16, COL.Si, `dcB${k}`, glow))}
      <T x={130} y={335} size={10.5}>2.5 → (Si₄O₁₁)ₙ⁶ⁿ⁻</T>
      <T x={130} y={350} size={9.5} fill="#8fa4b4">amphibole (tremolite)</T>

      {/* sheet */}
      {[0, 1, 2, 3].flatMap((r) => [0, 1, 2, 3].map((c) => tetra(300 + c * 24 + (r % 2 ? 12 : 0), 232 + r * 24, 13, COL.Si, `sh${r}-${c}`, glow)))}
      <T x={340} y={345} size={10.5}>3 → (Si₂O₅)ₙ²ⁿ⁻ sheet</T>
      <T x={340} y={360} size={9.5} fill="#8fa4b4">phyllo (talc, mica, clay)</T>

      {/* framework */}
      {[0, 1, 2].flatMap((r) => [0, 1, 2].map((c) => tetra(470 + c * 26, 232 + r * 26, 12, r % 2 ? "#4f6f8c" : COL.Si, `fw${r}-${c}`, glow)))}
      <T x={512} y={330} size={10.5}>4 → (SiO₂)ₙ neutral</T>
      <T x={512} y={345} size={9.5} fill="#8fa4b4">tecto (quartz, feldspar, zeolite)</T>

      <rect x="30" y="378" width="560" height="34" rx="10" fill={COL.amber} fillOpacity=".08" stroke={COL.amber} strokeOpacity=".45" />
      <T x={310} y={399} size={10.5} fill={COL.amber}>x corners shared per Si → O:Si = 4 − x/2  ·  charge/Si = −(4 − x)</T>
      <T x={310} y={418} size={9.5} fill="#7b93a8">apex dot = Si · open circles = O · shaded triangle = one SiO₄ tetrahedron</T>
    </Svg>
  );
}

function SiO4Unit() {
  const glow = glowUrl("SiO4Unit");
  return (
    <Svg w={560} h={270} glowNs="SiO4Unit">
      <rect x="8" y="8" width="544" height="254" rx="20" fill="#060c14" stroke="#1c2c3d" />
      <g filter={glow}>
        <Bond x1={200} y1={140} x2={200} y2={80} color={COL.O} w={3} />
        <Bond x1={200} y1={140} x2={150} y2={175} color={COL.O} w={3} />
        <Bond x1={200} y1={140} x2={250} y2={175} color={COL.O} w={3} />
        <Bond x1={200} y1={140} x2={200} y2={195} color={COL.O} w={3} dash="4 3" />
      </g>
      <Atom x={200} y={140} label="Si" stroke={COL.Si} fill={COL.Sifill} r={16} />
      <Atom x={200} y={72} label="O" stroke={COL.O} fill={COL.Ofill} />
      <Atom x={144} y={181} label="O" stroke={COL.O} fill={COL.Ofill} />
      <Atom x={256} y={181} label="O" stroke={COL.O} fill={COL.Ofill} />
      <Atom x={200} y={203} label="O" stroke={COL.O} fill={COL.Ofill} />
      <InsightPanel
        x={330} y={50} w={196} heading="SiO₄⁴⁻ GEOMETRY" tone={COL.Si}
        rows={[
          { label: "Shape", value: "tetrahedron", note: "regular, all 4 O equivalent" },
          { label: "∠O–Si–O", value: "≈ 109.5°", note: "ideal tetrahedral angle" },
          { label: "Si–O length", value: "≈ 1.62 Å", note: "shorter than a pure single bond" },
        ]}
      />
      <T x={200} y={240} size={11} fill="#8fa4b4">every silicate class is built by corner-sharing this one unit</T>
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
  const glow = glowUrl("SiliconeFunctionality");
  return (
    <Svg w={600} h={400} glowNs="SiliconeFunctionality">
      <rect x="8" y="8" width="584" height="384" rx="20" fill="#060c14" stroke="#1c2c3d" />
      <T x={300} y={36} size={12.5} weight={800} fill="#e7eef7">Chlorosilane functionality controls the polymer</T>
      {[
        ["R₃SiCl", "R₃Si–OH", "chain stopper / end-cap", COL.green],
        ["R₂SiCl₂", "R₂Si(OH)₂", "linear chain builder", COL.amber],
        ["RSiCl₃", "RSi(OH)₃", "cross-linker / 3-D resin", COL.red],
      ].map(([a, b, c, col], i) => (
        <g key={i}>
          <rect x={40} y={58 + i * 46} width={120} height={36} rx={7} fill="#132433" stroke={col as string} strokeWidth="1.8" filter={glow} />
          <T x={100} y={81 + i * 46} size={12} weight={800}>{a}</T>
          <T x={210} y={81 + i * 46} size={11.5} fill="#c9d6df" anchor="start">─(+H₂O)→ {b}</T>
          <T x={560} y={81 + i * 46} size={11.5} fill={col as string} weight={700} anchor="end">{c}</T>
        </g>
      ))}
      <rect x="30" y="212" width="540" height="76" rx="14" fill="#0a1420" stroke="#233247" />
      {[0, 1, 2, 3].map((k) => (
        <g key={k} filter={glow}>
          <Atom x={100 + k * 130} y={250} label="Si" stroke={COL.Si} fill={COL.Sifill} r={13} />
          {k < 3 && <Atom x={165 + k * 130} y={250} label="O" stroke={COL.O} fill={COL.Ofill} r={11} />}
          {k < 3 && <Bond x1={113 + k * 130} y1={250} x2={154 + k * 130} y2={250} />}
          {k < 3 && <Bond x1={176 + k * 130} y1={250} x2={217 + k * 130} y2={250} />}
        </g>
      ))}
      <InsightPanel
        x={30} y={296} w={540} heading="THE BACKBONE" tone={COL.C}
        rows={[{ label: "…–Si–O–Si–O– siloxane chain", note: "strong Si–O ≈ 452 kJ mol⁻¹; R groups point outward → water-repellent" }]}
      />
    </Svg>
  );
}

/* =========================== PART 10 — silanes ========================== */

function SilanevsAlkane() {
  const glow = glowUrl("SilanevsAlkane");
  return (
    <Svg w={560} h={260} glowNs="SilanevsAlkane">
      <rect x="8" y="8" width="544" height="244" rx="20" fill="#060c14" stroke="#1c2c3d" />
      <T x={280} y={38} size={12.5} weight={800} fill="#e7eef7">Polarity is reversed — Si is electrophilic</T>
      <g filter={glow}>
        <Atom x={140} y={120} label="C" stroke={COL.C} fill={COL.Cfill} r={18} />
        <Atom x={210} y={120} label="H" stroke={COL.H} fill="#2a2410" r={13} />
        <Bond x1={158} y1={120} x2={197} y2={120} w={3} />
        <Atom x={380} y={120} label="Si" stroke={COL.Si} fill={COL.Sifill} r={18} />
        <Atom x={450} y={120} label="H" stroke={COL.H} fill="#2a2410" r={13} />
        <Bond x1={398} y1={120} x2={437} y2={120} w={3} />
      </g>
      <T x={140} y={160} size={11} fill={COL.red}>δ−</T>
      <T x={210} y={160} size={11} fill={COL.green}>δ+</T>
      <T x={175} y={190} size={11}>C–H : EN(C 2.5) &gt; EN(H 2.1)</T>
      <T x={380} y={160} size={11} fill={COL.green}>δ+</T>
      <T x={450} y={160} size={11} fill={COL.red}>δ−</T>
      <T x={415} y={190} size={11}>Si–H : EN(Si 1.8) &lt; EN(H 2.1)</T>
      <rect x="30" y="212" width="500" height="26" rx="8" fill={COL.amber} fillOpacity=".08" stroke={COL.amber} strokeOpacity=".4" />
      <T x={280} y={230} size={10.5} fill={COL.amber}>so silanes are pyrophoric, hydrolysed by trace base, and strong reductants</T>
    </Svg>
  );
}

/* =========================== PART 11 — halides ========================== */

function HalideGeometry() {
  const glow = glowUrl("HalideGeometry");
  return (
    <Svg w={560} h={270} glowNs="HalideGeometry">
      <rect x="8" y="8" width="544" height="254" rx="20" fill="#060c14" stroke="#1c2c3d" />
      <rect x="26" y="24" width="220" height="222" rx="14" fill="#0a1420" stroke="#233247" />
      {/* SiF6 octahedral */}
      <g filter={glow}>
        <Atom x={130} y={130} label="Si" stroke={COL.Si} fill={COL.Sifill} r={15} />
        {[[130, 70], [130, 190], [75, 130], [185, 130], [95, 100], [165, 160]].map(([x, y], i) => (
          <g key={i}>
            <Bond x1={130} y1={130} x2={x} y2={y} w={2.4} />
            <circle cx={x} cy={y} r={10} fill="#12261c" stroke={COL.green} strokeWidth={2} />
            <text x={x} y={y + 3.5} textAnchor="middle" fontSize={9} fontWeight={800} fill="#eef6ff">F</text>
          </g>
        ))}
      </g>
      <T x={136} y={218} size={10.5}>[SiF₆]²⁻ octahedral — stable</T>
      <T x={136} y={234} size={9.5} fill="#8fa4b4">[SiCl₆]²⁻ not favoured: Cl too large</T>

      {/* SnCl2 bent */}
      <rect x="294" y="24" width="228" height="222" rx="14" fill="#0a1420" stroke="#233247" />
      <g filter={glow}>
        <Atom x={408} y={120} label="Sn" stroke={COL.Sn} fill={COL.Snfill} r={15} />
        <Bond x1={408} y1={120} x2={363} y2={160} w={2.6} />
        <Bond x1={408} y1={120} x2={453} y2={160} w={2.6} />
      </g>
      <Atom x={358} y={166} label="Cl" stroke={COL.green} fill="#12261c" r={12} />
      <Atom x={458} y={166} label="Cl" stroke={COL.green} fill="#12261c" r={12} />
      <T x={408} y={98} size={10} fill={COL.amber}>lone pair</T>
      <T x={408} y={218} size={10.5}>SnCl₂ — bent (≈ 95°), Sn(II) lone pair</T>
      <T x={408} y={234} size={9.5} fill="#8fa4b4">reducing; SnCl₄ is tetrahedral, covalent, fuming</T>
    </Svg>
  );
}

/* =========================== PART 13 — lead oxides ====================== */

function PbO2Fork() {
  const glow = glowUrl("PbO2Fork");
  return (
    <Svg w={600} h={320} glowNs="PbO2Fork">
      <rect x="8" y="8" width="584" height="304" rx="20" fill="#060c14" stroke="#1c2c3d" />
      <g filter={glow}>
        <Atom x={300} y={70} label="PbO₂" stroke={COL.Pb} fill={COL.Pbfill} r={26} />
      </g>
      {[
        ["+ hot HCl", "PbCl₂ + Cl₂", -190, COL.green],
        ["+ hot conc. H₂SO₄", "PbSO₄ + O₂", 0, COL.amber],
        ["+ HNO₃", "no reaction — stays brown", 190, COL.red],
      ].map(([r, p, dx, col], i) => (
        <g key={i}>
          <Bond x1={300} y1={96} x2={300 + (dx as number) * 0.6} y2={160} color={col as string} w={2.4} />
          <T x={300 + (dx as number)} y={178} size={11} fill={col as string} weight={800}>{r}</T>
          <T x={300 + (dx as number)} y={196} size={10.5} fill="#c9d6df">{p}</T>
        </g>
      ))}
      <InsightPanel
        x={30} y={216} w={540} heading="WHY THE FORK" tone={COL.Pb}
        rows={[{ label: "Pb(IV) is a strong oxidant", note: "any oxidisable anion (Cl⁻, or the O in H₂SO₄) is oxidised; NO₃⁻ cannot be, so PbO₂ survives" }]}
      />
    </Svg>
  );
}

function MixedOxide() {
  const glow = glowUrl("MixedOxide");
  return (
    <Svg w={600} h={220} glowNs="MixedOxide">
      <rect x="8" y="8" width="584" height="204" rx="20" fill="#060c14" stroke="#1c2c3d" />
      <g filter={glow}>
        <rect x={80} y={70} width={150} height={60} rx={9} fill="#132433" stroke={COL.Pb} strokeWidth={2} />
      </g>
      <T x={155} y={100} size={13} weight={800}>Pb₃O₄</T>
      <T x={155} y={118} size={10} fill="#8fa4b4">= 2PbO·PbO₂ (red lead)</T>
      <path d="M232 100 H300" stroke={COL.amber} strokeWidth="2" />
      <path d="M300 100 l-9 -5 l0 10 z" fill={COL.amber} />
      <T x={266} y={90} size={10} fill={COL.amber}>+ HNO₃</T>
      <T x={420} y={85} size={11.5} fill="#c9d6df">2 Pb(NO₃)₂ (PbO part dissolves)</T>
      <T x={420} y={112} size={11.5} fill={COL.red}>+ PbO₂↓ (brown residue, Pb(IV) part)</T>
      <rect x="30" y="160" width="540" height="30" rx="9" fill={COL.green} fillOpacity=".08" stroke={COL.green} strokeOpacity=".4" />
      <T x={300} y={180} size={10.5} fill={COL.green}>selective acid attack proves the mixed-oxide composition</T>
    </Svg>
  );
}

/* ===================== PART 16 — pπ–dπ / trisilylamine ================= */

function Trisilylamine() {
  const glow = glowUrl("Trisilylamine");
  return (
    <Svg h={340} w={600} glowNs="Trisilylamine">
      <rect x="8" y="8" width="584" height="324" rx="20" fill="#060c14" stroke="#1c2c3d" />
      <rect x="26" y="24" width="248" height="240" rx="14" fill="#0a1420" stroke="#233247" />
      <T x={150} y={50} size={12} fill="#e7eef7" weight={800}>N(CH₃)₃ — pyramidal</T>
      <g filter={glow}>
        <Atom x={150} y={130} label="N" stroke={COL.green} fill="#12291f" r={15} />
        <Bond x1={150} y1={130} x2={95} y2={175} w={2.4} />
        <Bond x1={150} y1={130} x2={205} y2={175} w={2.4} />
        <Bond x1={150} y1={130} x2={150} y2={195} w={2.4} />
      </g>
      {[[90, 182], [210, 182], [150, 203]].map(([x, y], i) => (
        <Atom key={i} x={x} y={y} label="CH₃" stroke={COL.C} fill={COL.Cfill} r={13} fs={8.5} />
      ))}
      <Bond x1={150} y1={130} x2={150} y2={92} color={COL.amber} w={3} dash="3 3" />
      <T x={150} y={82} size={10} fill={COL.amber}>lone pair (sp³)</T>
      <T x={150} y={244} size={10} fill="#8fa4b4">N is sp³ · lone pair localised</T>
      <T x={150} y={258} size={10} fill="#8fa4b4">good donor (basic)</T>

      <rect x="300" y="24" width="280" height="240" rx="14" fill="#0a1420" stroke="#233247" />
      <T x={440} y={50} size={12} fill="#e7eef7" weight={800}>N(SiH₃)₃ — planar</T>
      <g filter={glow}>
        <Atom x={440} y={150} label="N" stroke={COL.green} fill="#12291f" r={15} />
        {[[380, 120], [500, 120], [440, 210]].map(([x, y], i) => (
          <g key={i}>
            <Bond x1={440} y1={150} x2={x} y2={y} w={2.4} />
            <Atom x={x} y={y} label="SiH₃" stroke={COL.Si} fill={COL.Sifill} r={13} fs={8.5} />
          </g>
        ))}
        <ellipse cx={440} cy={120} rx={16} ry={9} fill="none" stroke={COL.amber} strokeWidth={2} />
        <ellipse cx={440} cy={180} rx={16} ry={9} fill="none" stroke={COL.amber} strokeWidth={2} />
      </g>
      <T x={440} y={100} size={9.5} fill={COL.amber}>N p orbital → empty Si 3d (pπ–dπ)</T>
      <T x={440} y={244} size={10} fill="#8fa4b4">N is sp² · lone pair delocalised onto Si</T>
      <T x={440} y={258} size={10} fill="#8fa4b4">weak base</T>
      <rect x="30" y="280" width="540" height="34" rx="10" fill={COL.red} fillOpacity=".08" stroke={COL.red} strokeOpacity=".4" />
      <T x={300} y={302} size={10} fill={COL.red}>carbon has no 3d orbital, so pπ–dπ is impossible → N(CH₃)₃ stays pyramidal</T>
    </Svg>
  );
}

/* ================= extra source-matched structural figures ============= */

function SilicaNetwork() {
  const glow = glowUrl("SilicaNetwork");
  const xs = [90, 180, 270, 360, 450];
  const ys = [70, 145, 220];
  return (
    <Svg h={300} w={560} glowNs="SilicaNetwork">
      <rect x="8" y="8" width="544" height="284" rx="20" fill="#060c14" stroke="#1c2c3d" />
      <T x={280} y={38} size={12.5} weight={800} fill="#e7eef7">Why silica is a solid and CO₂ a gas</T>
      <g filter={glow}>
        {ys.map((y, r) =>
          xs.map((x, c) => (
            <g key={`si-${r}-${c}`}>
              {c < xs.length - 1 && <Bond x1={x + 13} y1={y + 20} x2={xs[c + 1] - 13} y2={y + 20} color={COL.O} w={2.6} />}
              {r < ys.length - 1 && <Bond x1={x} y1={y + 33} x2={x} y2={ys[r + 1] - 13 + 20} color={COL.O} w={2.6} />}
              {c < xs.length - 1 && <circle cx={(x + xs[c + 1]) / 2} cy={y + 20} r={5} fill={COL.Ofill} stroke={COL.O} strokeWidth={1.8} />}
              {r < ys.length - 1 && <circle cx={x} cy={(y + ys[r + 1]) / 2 + 20} r={5} fill={COL.Ofill} stroke={COL.O} strokeWidth={1.8} />}
            </g>
          )),
        )}
      </g>
      {ys.map((y, r) => xs.map((x, c) => <Atom key={`a-${r}-${c}`} x={x} y={y + 20} label="Si" stroke={COL.Si} fill={COL.Sifill} r={13} fs={9.5} />))}
      <rect x="30" y="256" width="500" height="30" rx="9" fill={COL.green} fillOpacity=".08" stroke={COL.green} strokeOpacity=".4" />
      <T x={280} y={276} size={10.5} fill={COL.green}>each Si sp³ bonded to 4 O; each O bridges 2 Si — a giant 3-D network</T>
    </Svg>
  );
}

function ChainSilicates() {
  const glow = glowUrl("ChainSilicates");
  const tri = (cx: number, cy: number, up: boolean, s: number, key: string) => {
    const d = up
      ? `M${cx} ${cy - s} L${cx - s * 0.9} ${cy + s * 0.5} L${cx + s * 0.9} ${cy + s * 0.5} Z`
      : `M${cx} ${cy + s} L${cx - s * 0.9} ${cy - s * 0.5} L${cx + s * 0.9} ${cy - s * 0.5} Z`;
    return <path key={key} d={d} fill={COL.Si} opacity={0.3} stroke={COL.Si} strokeWidth={2} />;
  };
  return (
    <Svg h={350} w={560} glowNs="ChainSilicates">
      <rect x="8" y="8" width="544" height="334" rx="20" fill="#060c14" stroke="#1c2c3d" />
      <T x={280} y={36} size={12.5} weight={800} fill="#e7eef7">Chain silicates — corner-sharing along a line</T>
      <rect x="30" y="52" width="500" height="90" rx="14" fill="#0a1420" stroke="#233247" />
      <g filter={glow}>
        {[0, 1, 2, 3, 4, 5].map((k) => tri(70 + k * 70, 100, k % 2 === 0, 22, `sc${k}`))}
      </g>
      <T x={280} y={130} size={10.5}>Single chain (pyroxene): (SiO₃)ₙ²ⁿ⁻ · diopside CaMg(SiO₃)₂ · cleavage ≈ 87°/93°</T>
      <rect x="30" y="160" width="500" height="120" rx="14" fill="#0a1420" stroke="#233247" />
      <g filter={glow}>
        {[0, 1, 2, 3, 4, 5].map((k) => tri(70 + k * 70, 210, k % 2 === 0, 20, `dcA${k}`))}
        {[0, 1, 2, 3, 4, 5].map((k) => tri(70 + k * 70, 252, k % 2 === 1, 20, `dcB${k}`))}
      </g>
      <T x={280} y={272} size={10.5}>Double chain (amphibole): Si₄O₁₁⁶⁻ · OH in ring cavities · tremolite · cleavage ≈ 56°/124°</T>
      <rect x="30" y="292" width="500" height="30" rx="9" fill={COL.Si} fillOpacity=".08" stroke={COL.Si} strokeOpacity=".4" />
      <T x={280} y={312} size={10} fill={COL.Si}>shaded triangle = one SiO₄ tetrahedron seen end-on · shared corners join neighbours</T>
    </Svg>
  );
}

function FrameworkSilicate() {
  const glow = glowUrl("FrameworkSilicate");
  const pts: Array<[number, number]> = [];
  for (let r = 0; r < 4; r++) for (let c = 0; c < 5; c++) pts.push([90 + c * 90 + (r % 2 ? 45 : 0), 70 + r * 55]);
  return (
    <Svg h={360} w={560} glowNs="FrameworkSilicate">
      <rect x="8" y="8" width="544" height="344" rx="20" fill="#060c14" stroke="#1c2c3d" />
      <T x={280} y={38} size={12.5} weight={800} fill="#e7eef7">3-D framework (tectosilicate): all 4 corners shared</T>
      <g filter={glow}>
        {pts.map(([x, y], i) => (
          <g key={i}>
            {pts.map(([x2, y2], j) => {
              const d = Math.hypot(x - x2, y - y2);
              return j > i && d < 100 ? <Bond key={j} x1={x} y1={y + 14} x2={x2} y2={y2 + 14} color={COL.O} w={2} /> : null;
            })}
          </g>
        ))}
        {pts.map(([x, y], i) => (
          <circle key={`t${i}`} cx={x} cy={y + 14} r={7} fill={i % 7 === 3 ? "#3a5570" : COL.Sifill} stroke={i % 7 === 3 ? "#7cc4ff" : COL.Si} strokeWidth={2} />
        ))}
        <circle cx={270} cy={164} r={12} fill="#2a2410" stroke={COL.amber} strokeWidth={2.4} />
      </g>
      <text x={270} y={168} textAnchor="middle" fontSize={9} fontWeight={800} fill="#eef6ff">K⁺</text>
      <InsightPanel
        x={30} y={260} w={500} heading="CHARGE BALANCE" tone={COL.amber}
        rows={[{ label: "Al³⁺ for Si⁴⁺ → framework charge −1", note: "balanced by a cavity cation — feldspar K[AlSi₃O₈], zeolite (open channels), ultramarine (encloses S₃⁻)" }]}
      />
    </Svg>
  );
}

function COmoDiagram() {
  const lvl = (y: number, label: string, occ: number) => (
    <g>
      <Bond x1={250} y1={y} x2={310} y2={y} color="#c9d6df" w={2.4} />
      <T x={330} y={y + 4} anchor="start" size={10.5} fill="#c9d6df">{label}</T>
      {occ >= 1 && <text x={264} y={y + 4} fontSize={11} fill={COL.amber}>↑</text>}
      {occ >= 2 && <text x={288} y={y + 4} fontSize={11} fill={COL.amber}>↓</text>}
    </g>
  );
  return (
    <Svg h={310} w={560} glowNs="COmoDiagram">
      <rect x="8" y="8" width="544" height="294" rx="20" fill="#060c14" stroke="#1c2c3d" />
      <T x={280} y={34} size={12.5} weight={800} fill="#e7eef7">CO molecular-orbital picture — isoelectronic with N₂</T>
      {/* C AO */}
      <T x={90} y={50} size={11} fill={COL.C}>C 2p</T>
      {[[80, 90], [110, 90], [140, 90]].map(([x, y], i) => <Bond key={i} x1={x - 12} y1={y} x2={x + 12} y2={y} color={COL.C} w={2} />)}
      <T x={90} y={175} size={11} fill={COL.C}>C 2s</T>
      <Bond x1={78} y1={160} x2={102} y2={160} color={COL.C} w={2} />
      {/* O AO */}
      <T x={470} y={70} size={11} fill={COL.O}>O 2p</T>
      {[[450, 110], [480, 110], [510, 110]].map(([x, y], i) => <Bond key={i} x1={x - 12} y1={y} x2={x + 12} y2={y} color={COL.O} w={2} />)}
      <T x={470} y={210} size={11} fill={COL.O}>O 2s</T>
      <Bond x1={458} y1={195} x2={482} y2={195} color={COL.O} w={2} />
      {/* MOs */}
      {lvl(55, "σ*2p — LUMO, accepts M dπ", 0)}
      {lvl(85, "σ2p ← HOMO: lone pair on C", 2)}
      {lvl(115, "π2p (×2)", 4)}
      {lvl(175, "σ*2s", 2)}
      {lvl(205, "σ2s", 2)}
      <T x={280} y={245} size={11.5} fill={COL.green}>bond order = (8 − 2)/2 = 3   ·   one σ + two π</T>
      <T x={280} y={266} size={10.5} fill="#8fa4b4">the C-centred σ HOMO is the ligand lone pair; the empty π* accepts metal back-donation</T>
    </Svg>
  );
}

function GasProcesses() {
  const glow = glowUrl("GasProcesses");
  const rows = [
    ["Water gas", "C + H₂O(g) →", "CO + H₂", "high — both burn", COL.green],
    ["Producer gas", "2C + O₂ + 4N₂ →", "2CO + 4N₂", "low — N₂ is ballast", COL.amber],
    ["Coal gas", "coal, destructive distillation →", "CO + H₂ + CH₄ + CO₂", "moderate–high", COL.C],
  ] as const;
  return (
    <Svg h={310} w={560} glowNs="GasProcesses">
      <rect x="8" y="8" width="544" height="294" rx="20" fill="#060c14" stroke="#1c2c3d" />
      <T x={280} y={36} size={12.5} weight={800} fill="#e7eef7">Three industrial fuel gases from coke</T>
      {rows.map(([name, lhs, rhs, cv, col], i) => {
        const y = 62 + i * 60;
        return (
          <g key={name}>
            <rect x={30} y={y} width={500} height={48} rx={10} fill="#0a1420" stroke={col} strokeOpacity=".5" filter={glow} />
            <T x={44} y={y + 20} anchor="start" size={11.5} weight={800} fill={col}>{name}</T>
            <T x={44} y={y + 38} anchor="start" size={10}>{lhs} <tspan fill={col}>{rhs}</tspan></T>
            <T x={510} y={y + 30} anchor="end" size={9.5} fill="#8fa4b4">{cv}</T>
          </g>
        );
      })}
      <rect x="30" y="252" width="500" height="30" rx="9" fill={COL.red} fillOpacity=".08" stroke={COL.red} strokeOpacity=".4" />
      <T x={280} y={272} size={10} fill={COL.red}>do not interchange: water gas = CO + H₂ · producer gas = CO + N₂</T>
    </Svg>
  );
}

/* =============================== registry =============================== */

type Fig = { id: string; el: ReactNode };

const FIGURES: Record<number, Fig[]> = {
  3: [{ id: "trend", el: <Frame key="t" title="Group 14 trend ribbon" caption="The most examined lines: the +4→+2 stability switch (inert-pair effect), the non-metal→metal drift, the collapse of catenation past carbon, and the irregular first ionisation enthalpy where lead exceeds tin because of poor d/f shielding."><TrendRibbon /></Frame> }],
  5: [{ id: "caten", el: <Frame key="c" title="Catenation follows bond enthalpy" caption="Carbon catenates because the C–C bond is strong (≈ 348 kJ mol⁻¹, close to C–O). Down the group the M–M bond weakens and the atoms grow, so chains shorten rapidly; lead is effectively non-catenating."><CatenationBars /></Frame> }],
  7: [{ id: "p7", el: <Part3Visual key="p7" /> }],
  8: [{ id: "carb", el: <Frame key="c8" title="Carbide hydrolysis map" caption="The gas released on hydrolysis reveals the carbon anion: methanides (Be₂C, Al₄C₃) give methane, acetylides (CaC₂ …) give ethyne, and Mg₂C₃ (a C₃ unit) gives propyne. Interstitial and covalent carbides are hydrolytically inert."><CarbideMap /></Frame> }],
  9: [
    { id: "p9", el: <Part6Visual key="p9" /> },
    { id: "como", el: <Frame key="como" title="CO molecular-orbital picture" caption="CO is isoelectronic with N₂: filling the MOs gives bond order 3 (one σ + two π). The highest occupied orbital is a σ orbital concentrated on carbon — this is the lone pair that lets CO act as a ligand — and the empty π* accepts π back-donation from a metal."><COmoDiagram /></Frame> },
    { id: "gas", el: <Frame key="gas" title="Water gas, producer gas and coal gas" caption="Blowing steam through red-hot coke gives water gas (CO + H₂, high calorific value); blowing air gives producer gas (CO + N₂, low value because the nitrogen is inert ballast); destructive distillation of coal gives coal gas (CO + H₂ + CH₄ + CO₂)."><GasProcesses /></Frame> },
  ],
  10: [{ id: "co2", el: <Frame key="co2" title="Carbon–oxygen bonding at a glance" caption="CO₂ is linear with two equivalent C–O bonds (115 pm); CO₃²⁻ is trigonal planar with a delocalised π system over three equivalent C–O bonds. CO binds metals synergically — σ-donation from the C lone pair plus π back-donation into CO π*."><COxides /></Frame> }],
  13: [
    { id: "sio4", el: <Frame key="sio4" title="The SiO₄ tetrahedron — the one building block" caption="Silicon is tetrahedrally surrounded by four oxygens (Si sp³, ∠O–Si–O ≈ 109.5°, Si–O ≈ 162 pm). In silica every corner O is shared between two Si, giving a giant 3-D network — the reason SiO₂ is a solid while CO₂ is a gas."><SiO4Unit /></Frame> },
    { id: "sinet", el: <Frame key="sinet" title="Silica is a giant 3-D network" caption="A two-dimensional slice of quartz: every silicon (sp³) is joined to four oxygens and every oxygen bridges two silicons through single Si–O σ bonds. Carbon instead forms pπ–pπ double bonds, so CO₂ is a small discrete molecule while SiO₂ is an infinite solid with a very high melting point."><SilicaNetwork /></Frame> },
  ],
  14: [
    { id: "atlas", el: <Frame key="atlas" title="Seven silicate classes from one sharing rule" caption="From isolated ions to infinite frameworks: ortho (0 shared) → pyro (1) → cyclic ring and single chain (2) → double-chain amphibole (2½) → sheet (3) → 3-D framework (4). The number of shared corners fixes both the O:Si ratio and the charge per silicon."><SilicateAtlas /></Frame> },
    { id: "chains", el: <Frame key="chains" title="Chain silicates — pyroxenes and amphiboles" caption="Sharing two corners per tetrahedron gives an infinite single chain (pyroxene, repeat SiO₃²⁻); cross-linking two chains through extra shared oxygens gives a double chain (amphibole, repeat Si₄O₁₁⁶⁻). The different cleavage angles (≈ 90° vs ≈ 56°/124°) tell the two apart in hand specimen."><ChainSilicates /></Frame> },
    { id: "framework", el: <Frame key="framework" title="Framework silicates — feldspars, zeolites, ultramarines" caption="Sharing all four corners gives a neutral SiO₂ framework. Replacing a framework Si⁴⁺ by Al³⁺ puts −1 on the framework, balanced by a cation (Na⁺, K⁺, Ca²⁺) in a cavity. Zeolites have wide channels for ion exchange and molecular sieving; ultramarines trap coloured anions such as S₃⁻."><FrameworkSilicate /></Frame> },
  ],
  16: [{ id: "sili", el: <Frame key="s16" title="Silicone functionality rule" caption="Hydrolysis of a chlorosilane gives a silanol that condenses into an –Si–O–Si– backbone. R₃SiCl end-caps, R₂SiCl₂ builds the linear chain, RSiCl₃ cross-links into a 3-D resin — so the monomer ratio sets chain length and network density."><SiliconeFunctionality /></Frame> }],
  17: [{ id: "sil", el: <Frame key="s17" title="Why silanes out-react alkanes" caption="Because silicon is less electronegative than hydrogen, Si–H is polarised Si(δ+)–H(δ−) — the reverse of C–H. The electrophilic, larger silicon centre is open to nucleophilic and oxygen attack, so silanes ignite in air and hydrolyse in trace base."><SilanevsAlkane /></Frame> }],
  18: [{ id: "hal", el: <Frame key="h18" title="Halide and complex geometry" caption="[SiF₆]²⁻ forms because six small fluorides fit around silicon and Si–F donation is strong; [SiCl₆]²⁻ does not. Sn(II) halides are bent and reducing (stereochemically active lone pair); Sn(IV) halides are tetrahedral, covalent and readily hydrolysed."><HalideGeometry /></Frame> }],
  19: [{ id: "psa", el: <Frame key="psa" title="Internal pπ–dπ bonding: N(SiH₃)₃ vs N(CH₃)₃" caption="Trimethylamine is pyramidal with a localised lone pair (good base). In trisilylamine nitrogen goes sp² and its p-lone pair is donated into empty Si 3d orbitals (pπ–dπ), flattening the molecule to planar and destroying its donor power. Carbon has no accessible d orbital, so N(CH₃)₃ cannot do this."><Trisilylamine /></Frame> }],
  21: [
    { id: "mox", el: <Frame key="m21" title="Pb₃O₄ is a genuine mixed oxide" caption="Dilute nitric acid dissolves the PbO component of red lead and leaves the PbO₂ component as an insoluble brown residue — direct chemical proof that Pb₃O₄ behaves as 2PbO·PbO₂ (and Pb₂O₃ as PbO·PbO₂)."><MixedOxide /></Frame> },
    { id: "fork", el: <Frame key="f21" title="PbO₂ reacts differently with each acid" caption="Lead(IV) oxide is amphoteric but strongly oxidising: with hot HCl it liberates Cl₂, with hot concentrated H₂SO₄ it liberates O₂, and with HNO₃ — whose anion cannot be oxidised — it does not dissolve, which is why it survives as the brown residue in the mixed-oxide test."><PbO2Fork /></Frame> },
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
