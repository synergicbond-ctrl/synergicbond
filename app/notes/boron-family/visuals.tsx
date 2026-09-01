import type { ReactNode } from "react";

/* ------------------------------------------------------------------------- *
 * Original schematic re-draws of the Boron-Family structural figures.
 * Connectivity and coordination only — computed geometry, nothing traced.
 * ------------------------------------------------------------------------- */

function Frame({ title, caption, children }: { title: string; caption: string; children: ReactNode }) {
  return (
    <figure className="overflow-hidden rounded-lg border border-cyan-300/15 bg-[#080d19] shadow-2xl shadow-black/25">
      <div className="border-b border-white/10 px-5 py-4 sm:px-7">
        <p className="text-[11px] font-black uppercase tracking-[.18em] text-cyan-300">Boron-family visual atlas</p>
        <h3 className="mt-1 text-lg font-black text-white sm:text-xl">{title}</h3>
      </div>
      <div className="overflow-x-auto p-4 sm:p-6">{children}</div>
      <figcaption className="border-t border-white/10 px-5 py-3 text-sm leading-6 text-slate-400 sm:px-7">{caption}</figcaption>
    </figure>
  );
}

const COL = {
  B: "#7cc4ff",
  Bfill: "#12243a",
  N: "#5fd39b",
  Nfill: "#12291f",
  O: "#f6c667",
  Ofill: "#2a2410",
  Cl: "#8fe3a6",
  H: "#f4e2b0",
  Al: "#9db8ff",
  Alfill: "#161d33",
  metal: "#e58f8f",
  amber: "#e3b341",
  red: "#ff775d",
  green: "#50dc7b",
} as const;

function Atom({ x, y, label, stroke, fill, r = 15 }: { x: number; y: number; label: string; stroke: string; fill: string; r?: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill={fill} stroke={stroke} strokeWidth="2.4" />
      <text x={x} y={y + 4.5} textAnchor="middle" fontSize={r > 13 ? 12.5 : 10.5} fontWeight="800" fill="#eef6ff">
        {label}
      </text>
    </g>
  );
}

function Bond({ x1, y1, x2, y2, color = "#9fb2c4", w = 3, dash }: { x1: number; y1: number; x2: number; y2: number; color?: string; w?: number; dash?: string }) {
  return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth={w} strokeDasharray={dash} strokeLinecap="round" />;
}

function Svg({ children, w = 520, h = 300 }: { children: ReactNode; w?: number; h?: number }) {
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="mx-auto block h-auto w-full max-w-[560px]" role="img">
      {children}
    </svg>
  );
}

/* ---------------------------- individual figures -------------------------- */

function IcosahedronB12() {
  const cx = 260;
  const cy = 150;
  const outer = 100;
  const inner = 52;
  const pent = (r: number, off: number) =>
    Array.from({ length: 5 }, (_, i) => {
      const a = ((i * 72 + off - 90) * Math.PI) / 180;
      return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
    });
  const O = pent(outer, 0);
  const I = pent(inner, 36);
  const top = { x: cx, y: cy - 132 };
  const bot = { x: cx, y: cy + 132 };
  return (
    <Svg>
      {O.map((p, i) => (
        <Bond key={`o${i}`} x1={p.x} y1={p.y} x2={O[(i + 1) % 5].x} y2={O[(i + 1) % 5].y} color={COL.B} w={2.4} />
      ))}
      {I.map((p, i) => (
        <Bond key={`i${i}`} x1={p.x} y1={p.y} x2={I[(i + 1) % 5].x} y2={I[(i + 1) % 5].y} color={COL.B} w={2.4} dash="5 4" />
      ))}
      {O.map((p, i) => (
        <g key={`b${i}`}>
          <Bond x1={p.x} y1={p.y} x2={top.x} y2={top.y} color="#3f5a74" w={1.8} />
          <Bond x1={p.x} y1={p.y} x2={bot.x} y2={bot.y} color="#3f5a74" w={1.8} />
          <Bond x1={p.x} y1={p.y} x2={I[i].x} y2={I[i].y} color="#3f5a74" w={1.8} />
          <Bond x1={p.x} y1={p.y} x2={I[(i + 4) % 5].x} y2={I[(i + 4) % 5].y} color="#3f5a74" w={1.8} />
        </g>
      ))}
      {[top, bot, ...O, ...I].map((p, i) => (
        <Atom key={i} x={p.x} y={p.y} label="B" stroke={COL.B} fill={COL.Bfill} r={12} />
      ))}
      <text x={cx} y={cy + 4} textAnchor="middle" fontSize="12" fontWeight="800" fill="#8fa4b4">
        B₁₂
      </text>
      <text x={430} y={130} textAnchor="middle" fontSize="12.5" fill="#c9d6df">12 vertices</text>
      <text x={430} y={150} textAnchor="middle" fontSize="12.5" fill="#c9d6df">20 faces</text>
      <text x={430} y={176} textAnchor="middle" fontSize="11.5" fill="#8fa4b4">two pentagons</text>
      <text x={430} y={192} textAnchor="middle" fontSize="11.5" fill="#8fa4b4">staggered 36°</text>
    </Svg>
  );
}

function BoricAcidUnits() {
  return (
    <Svg h={260}>
      {/* B(OH)3 trigonal planar */}
      <g>
        <Bond x1={95} y1={130} x2={95} y2={70} color={COL.O} />
        <Bond x1={95} y1={130} x2={45} y2={162} color={COL.O} />
        <Bond x1={95} y1={130} x2={145} y2={162} color={COL.O} />
        <Atom x={95} y={130} label="B" stroke={COL.B} fill={COL.Bfill} />
        <Atom x={95} y={62} label="OH" stroke={COL.O} fill={COL.Ofill} />
        <Atom x={40} y={168} label="OH" stroke={COL.O} fill={COL.Ofill} />
        <Atom x={150} y={168} label="OH" stroke={COL.O} fill={COL.Ofill} />
        <text x={95} y={218} textAnchor="middle" fontSize="12" fill="#c9d6df">B(OH)₃ — trigonal, sp²</text>
      </g>
      {/* [B(OH)4]- tetrahedral */}
      <g>
        <Bond x1={300} y1={125} x2={300} y2={65} color={COL.O} />
        <Bond x1={300} y1={125} x2={250} y2={150} color={COL.O} />
        <Bond x1={300} y1={125} x2={350} y2={150} color={COL.O} />
        <Bond x1={300} y1={125} x2={300} y2={180} color={COL.O} />
        <Atom x={300} y={125} label="B" stroke={COL.B} fill={COL.Bfill} />
        <Atom x={300} y={58} label="OH" stroke={COL.O} fill={COL.Ofill} />
        <Atom x={244} y={156} label="HO" stroke={COL.O} fill={COL.Ofill} />
        <Atom x={356} y={156} label="OH" stroke={COL.O} fill={COL.Ofill} />
        <Atom x={300} y={188} label="OH" stroke={COL.O} fill={COL.Ofill} />
        <text x={300} y={222} textAnchor="middle" fontSize="12" fill="#c9d6df">[B(OH)₄]⁻ — tetrahedral, sp³</text>
      </g>
      {/* borax anion cartoon */}
      <g transform="translate(430,120)">
        <Bond x1={-40} y1={0} x2={0} y2={-34} color="#9fb2c4" />
        <Bond x1={0} y1={-34} x2={40} y2={0} color="#9fb2c4" />
        <Bond x1={-40} y1={0} x2={0} y2={0} color="#9fb2c4" />
        <Bond x1={0} y1={0} x2={40} y2={0} color="#9fb2c4" />
        <Bond x1={-40} y1={0} x2={0} y2={34} color="#9fb2c4" />
        <Bond x1={0} y1={34} x2={40} y2={0} color="#9fb2c4" />
        <Atom x={-40} y={0} label="B" stroke={COL.B} fill={COL.Bfill} r={12} />
        <Atom x={0} y={-34} label="B" stroke={COL.B} fill={COL.Bfill} r={12} />
        <Atom x={40} y={0} label="B" stroke={COL.B} fill={COL.Bfill} r={12} />
        <Atom x={0} y={0} label="O" stroke={COL.O} fill={COL.Ofill} r={10} />
        <Atom x={0} y={34} label="B" stroke={COL.B} fill={COL.Bfill} r={12} />
        <text x={0} y={62} textAnchor="middle" fontSize="11.5" fill="#c9d6df">[B₄O₅(OH)₄]²⁻</text>
        <text x={0} y={78} textAnchor="middle" fontSize="10.5" fill="#8fa4b4">2 trigonal + 2 tetrahedral B</text>
      </g>
    </Svg>
  );
}

function CisDiolChelate() {
  return (
    <Svg h={230}>
      <text x={110} y={40} textAnchor="middle" fontSize="12" fill="#8fa4b4">cis-diol + [B(OH)₄]⁻</text>
      <Bond x1={70} y1={95} x2={70} y2={150} color="#9fb2c4" />
      <Atom x={70} y={90} label="C" stroke="#b9c6d4" fill="#1b2430" r={13} />
      <Atom x={70} y={155} label="C" stroke="#b9c6d4" fill="#1b2430" r={13} />
      <Bond x1={70} y1={90} x2={120} y2={78} color={COL.O} />
      <Bond x1={70} y1={155} x2={120} y2={168} color={COL.O} />
      <Atom x={128} y={74} label="O" stroke={COL.O} fill={COL.Ofill} r={11} />
      <Atom x={128} y={172} label="O" stroke={COL.O} fill={COL.Ofill} r={11} />
      <Bond x1={128} y1={74} x2={185} y2={123} color={COL.B} />
      <Bond x1={128} y1={172} x2={185} y2={123} color={COL.B} />
      <Bond x1={185} y1={123} x2={235} y2={100} color={COL.O} />
      <Bond x1={185} y1={123} x2={235} y2={146} color={COL.O} />
      <Atom x={185} y={123} label="B" stroke={COL.B} fill={COL.Bfill} />
      <Atom x={243} y={96} label="OH" stroke={COL.O} fill={COL.Ofill} r={11} />
      <Atom x={243} y={150} label="OH" stroke={COL.O} fill={COL.Ofill} r={11} />
      <text x={330} y={118} textAnchor="middle" fontSize="12" fill="#c9d6df">five-membered</text>
      <text x={330} y={136} textAnchor="middle" fontSize="12" fill="#c9d6df">O–B–O chelate</text>
      <text x={260} y={210} textAnchor="middle" fontSize="11" fill="#8fa4b4">removes [B(OH)₄]⁻ ⇒ apparent acidity of H₃BO₃ rises</text>
    </Svg>
  );
}

function Peroxoborate() {
  return (
    <Svg h={230}>
      <text x={260} y={34} textAnchor="middle" fontSize="12" fill="#8fa4b4">
        Na₂[(HO)₂B(µ-O–O)₂B(OH)₂]·6H₂O
      </text>
      <Atom x={200} y={80} label="O" stroke={COL.O} fill={COL.Ofill} r={11} />
      <Atom x={260} y={70} label="O" stroke={COL.O} fill={COL.Ofill} r={11} />
      <Atom x={200} y={170} label="O" stroke={COL.O} fill={COL.Ofill} r={11} />
      <Atom x={260} y={180} label="O" stroke={COL.O} fill={COL.Ofill} r={11} />
      <Bond x1={200} y1={80} x2={260} y2={70} color="#f39b9b" w={3.4} />
      <Bond x1={200} y1={170} x2={260} y2={180} color="#f39b9b" w={3.4} />
      <Atom x={150} y={125} label="B" stroke={COL.B} fill={COL.Bfill} />
      <Atom x={310} y={125} label="B" stroke={COL.B} fill={COL.Bfill} />
      <Bond x1={150} y1={125} x2={200} y2={80} color="#9fb2c4" />
      <Bond x1={150} y1={125} x2={200} y2={170} color="#9fb2c4" />
      <Bond x1={310} y1={125} x2={260} y2={70} color="#9fb2c4" />
      <Bond x1={310} y1={125} x2={260} y2={180} color="#9fb2c4" />
      <Bond x1={150} y1={125} x2={100} y2={100} color={COL.O} />
      <Bond x1={150} y1={125} x2={100} y2={150} color={COL.O} />
      <Bond x1={310} y1={125} x2={360} y2={100} color={COL.O} />
      <Bond x1={310} y1={125} x2={360} y2={150} color={COL.O} />
      <Atom x={92} y={96} label="HO" stroke={COL.O} fill={COL.Ofill} r={11} />
      <Atom x={92} y={154} label="HO" stroke={COL.O} fill={COL.Ofill} r={11} />
      <Atom x={368} y={96} label="OH" stroke={COL.O} fill={COL.Ofill} r={11} />
      <Atom x={368} y={154} label="OH" stroke={COL.O} fill={COL.Ofill} r={11} />
      <text x={260} y={214} textAnchor="middle" fontSize="11" fill="#8fa4b4">
        two genuine O–O peroxo bridges · both B tetrahedral · releases H₂O₂
      </text>
    </Svg>
  );
}

function BF3Planar() {
  return (
    <Svg h={250}>
      <ellipse cx={200} cy={70} rx={16} ry={30} fill="#7cc4ff22" stroke={COL.B} strokeWidth="1.6" />
      <ellipse cx={200} cy={190} rx={16} ry={30} fill="#7cc4ff22" stroke={COL.B} strokeWidth="1.6" />
      <text x={200} y={40} textAnchor="middle" fontSize="10.5" fill="#8fa4b4">vacant B 2p ⟂ plane</text>
      <Bond x1={200} y1={130} x2={200} y2={80} color={COL.B} />
      <Bond x1={200} y1={130} x2={140} y2={172} color={COL.B} />
      <Bond x1={200} y1={130} x2={260} y2={172} color={COL.B} />
      <Atom x={200} y={130} label="B" stroke={COL.B} fill={COL.Bfill} />
      <Atom x={200} y={92} label="F" stroke={COL.O} fill={COL.Ofill} />
      <Atom x={132} y={178} label="F" stroke={COL.O} fill={COL.Ofill} />
      <Atom x={268} y={178} label="F" stroke={COL.O} fill={COL.Ofill} />
      <text x={200} y={232} textAnchor="middle" fontSize="12" fill="#c9d6df">trigonal planar; sp² at B; zero dipole</text>
      <text x={410} y={110} textAnchor="middle" fontSize="11.5" fill="#c9d6df">F→B π donation</text>
      <text x={410} y={130} textAnchor="middle" fontSize="11" fill="#8fa4b4">B–F ≈ 130 pm (free)</text>
      <text x={410} y={148} textAnchor="middle" fontSize="11" fill="#8fa4b4">≈ 138–143 pm in [BF₄]⁻</text>
    </Svg>
  );
}

function Diborane() {
  return (
    <Svg h={260}>
      <Atom x={200} y={70} label="H" stroke="#f39b9b" fill="#2a1414" r={13} />
      <Atom x={200} y={190} label="H" stroke="#f39b9b" fill="#2a1414" r={13} />
      <Atom x={150} y={130} label="B" stroke={COL.B} fill={COL.Bfill} />
      <Atom x={250} y={130} label="B" stroke={COL.B} fill={COL.Bfill} />
      <Bond x1={150} y1={130} x2={200} y2={70} color="#f39b9b" w={3.2} />
      <Bond x1={250} y1={130} x2={200} y2={70} color="#f39b9b" w={3.2} />
      <Bond x1={150} y1={130} x2={200} y2={190} color="#f39b9b" w={3.2} />
      <Bond x1={250} y1={130} x2={200} y2={190} color="#f39b9b" w={3.2} />
      <Bond x1={150} y1={130} x2={100} y2={95} color={COL.B} />
      <Bond x1={150} y1={130} x2={100} y2={165} color={COL.B} />
      <Bond x1={250} y1={130} x2={300} y2={95} color={COL.B} />
      <Bond x1={250} y1={130} x2={300} y2={165} color={COL.B} />
      <Atom x={92} y={90} label="H" stroke={COL.H} fill="#2a2410" r={13} />
      <Atom x={92} y={170} label="H" stroke={COL.H} fill="#2a2410" r={13} />
      <Atom x={308} y={90} label="H" stroke={COL.H} fill="#2a2410" r={13} />
      <Atom x={308} y={170} label="H" stroke={COL.H} fill="#2a2410" r={13} />
      <text x={200} y={236} textAnchor="middle" fontSize="11.5" fill="#c9d6df">
        4 terminal B–H (2c–2e) · 2 B–H–B bridges (3c–2e)
      </text>
      <text x={200} y={252} textAnchor="middle" fontSize="10.5" fill="#8fa4b4">bridging H lie above/below the B₂H₄ plane</text>
    </Svg>
  );
}

function Borazine() {
  const cx = 160;
  const cy = 130;
  const R = 66;
  const v = Array.from({ length: 6 }, (_, i) => {
    const a = ((i * 60 - 90) * Math.PI) / 180;
    return { x: cx + R * Math.cos(a), y: cy + R * Math.sin(a), isB: i % 2 === 0 };
  });
  return (
    <Svg h={260}>
      {v.map((p, i) => (
        <Bond key={i} x1={p.x} y1={p.y} x2={v[(i + 1) % 6].x} y2={v[(i + 1) % 6].y} color="#9fb2c4" />
      ))}
      {v.map((p, i) => {
        const a = Math.atan2(p.y - cy, p.x - cx);
        const hx = p.x + 30 * Math.cos(a);
        const hy = p.y + 30 * Math.sin(a);
        return (
          <g key={`h${i}`}>
            <Bond x1={p.x} y1={p.y} x2={hx} y2={hy} color="#6b7c8d" w={2} />
            <Atom x={hx} y={hy} label="H" stroke={COL.H} fill="#2a2410" r={11} />
            <Atom x={p.x} y={p.y} label={p.isB ? "B" : "N"} stroke={p.isB ? COL.B : COL.N} fill={p.isB ? COL.Bfill : COL.Nfill} />
          </g>
        );
      })}
      <text x={cx} y={cy + 108} textAnchor="middle" fontSize="11.5" fill="#c9d6df">borazine B₃N₃H₆</text>
      {/* h-BN fragment */}
      <g transform="translate(330,60)">
        {[0, 1].map((row) =>
          [0, 1, 2].map((col) => {
            const x = col * 44 + (row % 2) * 22;
            const y = row * 40;
            const isB = (row + col) % 2 === 0;
            return <Atom key={`${row}-${col}`} x={x} y={y} label={isB ? "B" : "N"} stroke={isB ? COL.B : COL.N} fill={isB ? COL.Bfill : COL.Nfill} r={11} />;
          }),
        )}
        {[0, 1].map((row) =>
          [0, 1].map((col) => {
            const x1 = col * 44 + (row % 2) * 22;
            const x2 = (col + 1) * 44 + (row % 2) * 22;
            return <Bond key={`hb${row}-${col}`} x1={x1} y1={row * 40} x2={x2} y2={row * 40} color="#6b7c8d" w={2} />;
          }),
        )}
        {[0, 1, 2].map((col) => (
          <Bond key={`vb${col}`} x1={col * 44} y1={0} x2={col * 44 + 22} y2={40} color="#6b7c8d" w={2} />
        ))}
        <text x={44} y={78} textAnchor="middle" fontSize="11" fill="#c9d6df">layered h-BN</text>
        <text x={44} y={94} textAnchor="middle" fontSize="10" fill="#8fa4b4">“white graphite”, insulator</text>
      </g>
    </Svg>
  );
}

function BorohydrideBridges() {
  return (
    <Svg h={230}>
      {/* Al(BH4)3 */}
      <g transform="translate(140,120)">
        <Atom x={0} y={0} label="Al" stroke={COL.Al} fill={COL.Alfill} r={17} />
        {[0, 120, 240].map((deg, i) => {
          const a = ((deg - 90) * Math.PI) / 180;
          const bx = 62 * Math.cos(a);
          const by = 62 * Math.sin(a);
          const h1 = { x: bx * 0.55 + 10 * Math.cos(a + 1.4), y: by * 0.55 + 10 * Math.sin(a + 1.4) };
          const h2 = { x: bx * 0.55 + 10 * Math.cos(a - 1.4), y: by * 0.55 + 10 * Math.sin(a - 1.4) };
          return (
            <g key={i}>
              <Bond x1={0} y1={0} x2={h1.x} y2={h1.y} color="#f39b9b" w={2.4} />
              <Bond x1={0} y1={0} x2={h2.x} y2={h2.y} color="#f39b9b" w={2.4} />
              <Bond x1={h1.x} y1={h1.y} x2={bx} y2={by} color="#f39b9b" w={2.4} />
              <Bond x1={h2.x} y1={h2.y} x2={bx} y2={by} color="#f39b9b" w={2.4} />
              <Atom x={h1.x} y={h1.y} label="H" stroke={COL.H} fill="#2a2410" r={9} />
              <Atom x={h2.x} y={h2.y} label="H" stroke={COL.H} fill="#2a2410" r={9} />
              <Atom x={bx} y={by} label="B" stroke={COL.B} fill={COL.Bfill} r={12} />
            </g>
          );
        })}
        <text x={0} y={104} textAnchor="middle" fontSize="11" fill="#c9d6df">Al(BH₄)₃ — three η²-BH₄</text>
      </g>
      {/* polymeric AlH3 bridge */}
      <g transform="translate(370,120)">
        {[-70, 0, 70].map((x, i) => (
          <Atom key={i} x={x} y={0} label="Al" stroke={COL.Al} fill={COL.Alfill} r={15} />
        ))}
        <Atom x={-35} y={-34} label="H" stroke={COL.H} fill="#2a2410" r={10} />
        <Atom x={35} y={-34} label="H" stroke={COL.H} fill="#2a2410" r={10} />
        <Bond x1={-70} y1={0} x2={-35} y2={-34} color="#f39b9b" w={2.4} />
        <Bond x1={0} y1={0} x2={-35} y2={-34} color="#f39b9b" w={2.4} />
        <Bond x1={0} y1={0} x2={35} y2={-34} color="#f39b9b" w={2.4} />
        <Bond x1={70} y1={0} x2={35} y2={-34} color="#f39b9b" w={2.4} />
        <text x={0} y={44} textAnchor="middle" fontSize="11" fill="#c9d6df">(AlH₃)ₙ — Al–H–Al bridges</text>
      </g>
    </Svg>
  );
}

function Al2Cl6() {
  return (
    <Svg h={240}>
      <Atom x={260} y={72} label="Cl" stroke={COL.Cl} fill="#12291f" />
      <Atom x={260} y={168} label="Cl" stroke={COL.Cl} fill="#12291f" />
      <Atom x={195} y={120} label="Al" stroke={COL.Al} fill={COL.Alfill} r={17} />
      <Atom x={325} y={120} label="Al" stroke={COL.Al} fill={COL.Alfill} r={17} />
      <Bond x1={195} y1={120} x2={260} y2={72} color="#9fb2c4" w={3.2} />
      <Bond x1={195} y1={120} x2={260} y2={168} color="#9fb2c4" w={3.2} />
      <Bond x1={325} y1={120} x2={260} y2={72} color="#9fb2c4" w={3.2} />
      <Bond x1={325} y1={120} x2={260} y2={168} color="#9fb2c4" w={3.2} />
      <Bond x1={195} y1={120} x2={135} y2={82} color={COL.Cl} />
      <Bond x1={195} y1={120} x2={135} y2={158} color={COL.Cl} />
      <Bond x1={325} y1={120} x2={385} y2={82} color={COL.Cl} />
      <Bond x1={325} y1={120} x2={385} y2={158} color={COL.Cl} />
      <Atom x={126} y={76} label="Cl" stroke={COL.Cl} fill="#12291f" />
      <Atom x={126} y={164} label="Cl" stroke={COL.Cl} fill="#12291f" />
      <Atom x={394} y={76} label="Cl" stroke={COL.Cl} fill="#12291f" />
      <Atom x={394} y={164} label="Cl" stroke={COL.Cl} fill="#12291f" />
      <text x={260} y={216} textAnchor="middle" fontSize="11.5" fill="#c9d6df">
        two µ-Cl bridges · each Al ≈ tetrahedral · 2 AlCl₃ ⇌ Al₂Cl₆
      </text>
    </Svg>
  );
}

function Al2Me6() {
  return (
    <Svg h={220}>
      <Atom x={260} y={64} label="CH₃" stroke={COL.O} fill={COL.Ofill} r={17} />
      <Atom x={260} y={156} label="CH₃" stroke={COL.O} fill={COL.Ofill} r={17} />
      <Atom x={190} y={110} label="Al" stroke={COL.Al} fill={COL.Alfill} r={17} />
      <Atom x={330} y={110} label="Al" stroke={COL.Al} fill={COL.Alfill} r={17} />
      <Bond x1={190} y1={110} x2={260} y2={64} color="#9fb2c4" w={3} />
      <Bond x1={190} y1={110} x2={260} y2={156} color="#9fb2c4" w={3} />
      <Bond x1={330} y1={110} x2={260} y2={64} color="#9fb2c4" w={3} />
      <Bond x1={330} y1={110} x2={260} y2={156} color="#9fb2c4" w={3} />
      <Bond x1={190} y1={110} x2={128} y2={78} color="#6b7c8d" w={2.4} />
      <Bond x1={190} y1={110} x2={128} y2={142} color="#6b7c8d" w={2.4} />
      <Bond x1={330} y1={110} x2={392} y2={78} color="#6b7c8d" w={2.4} />
      <Bond x1={330} y1={110} x2={392} y2={142} color="#6b7c8d" w={2.4} />
      <Atom x={118} y={72} label="CH₃" stroke="#8fa4b4" fill="#1b2430" r={15} />
      <Atom x={118} y={148} label="CH₃" stroke="#8fa4b4" fill="#1b2430" r={15} />
      <Atom x={402} y={72} label="CH₃" stroke="#8fa4b4" fill="#1b2430" r={15} />
      <Atom x={402} y={148} label="CH₃" stroke="#8fa4b4" fill="#1b2430" r={15} />
      <text x={260} y={202} textAnchor="middle" fontSize="11.5" fill="#c9d6df">
        Al₂(CH₃)₆ — 2 bridging + 4 terminal CH₃; Al–C–Al 3-centre bonds
      </text>
    </Svg>
  );
}

function AluminateRing() {
  const cx = 200;
  const cy = 135;
  const R = 92;
  const n = 12;
  const pts = Array.from({ length: n }, (_, i) => {
    const a = ((i * 360) / n - 90) * (Math.PI / 180);
    return { x: cx + R * Math.cos(a), y: cy + R * Math.sin(a), isAl: i % 2 === 0 };
  });
  return (
    <Svg h={300}>
      {pts.map((p, i) => (
        <Bond key={i} x1={p.x} y1={p.y} x2={pts[(i + 1) % n].x} y2={pts[(i + 1) % n].y} color="#9fb2c4" w={2.2} />
      ))}
      {pts.map((p, i) => {
        const a = Math.atan2(p.y - cy, p.x - cx);
        return (
          <g key={`a${i}`}>
            {p.isAl ? (
              <>
                <Bond x1={p.x} y1={p.y} x2={p.x + 24 * Math.cos(a - 0.4)} y2={p.y + 24 * Math.sin(a - 0.4)} color={COL.O} w={2} />
                <Bond x1={p.x} y1={p.y} x2={p.x + 24 * Math.cos(a + 0.4)} y2={p.y + 24 * Math.sin(a + 0.4)} color={COL.O} w={2} />
                <Atom x={p.x + 30 * Math.cos(a - 0.4)} y={p.y + 30 * Math.sin(a - 0.4)} label="O" stroke={COL.O} fill={COL.Ofill} r={8} />
                <Atom x={p.x + 30 * Math.cos(a + 0.4)} y={p.y + 30 * Math.sin(a + 0.4)} label="O" stroke={COL.O} fill={COL.Ofill} r={8} />
              </>
            ) : null}
            <Atom x={p.x} y={p.y} label={p.isAl ? "Al" : "O"} stroke={p.isAl ? COL.Al : COL.O} fill={p.isAl ? COL.Alfill : COL.Ofill} r={p.isAl ? 13 : 10} />
          </g>
        );
      })}
      <text x={cx} y={cy} textAnchor="middle" fontSize="11" fill="#8fa4b4">Ca₉[Al₆O₁₈]</text>
      <text x={cx} y={cy + 150} textAnchor="middle" fontSize="11.5" fill="#c9d6df">
        six corner-sharing AlO₄ tetrahedra → 12-membered Al–O ring
      </text>
    </Svg>
  );
}

function AlChelate() {
  const cx = 200;
  const cy = 130;
  return (
    <Svg h={250}>
      <Atom x={cx} y={cy} label="Al" stroke={COL.Al} fill={COL.Alfill} r={18} />
      {Array.from({ length: 6 }, (_, i) => {
        const a = ((i * 60 - 90) * Math.PI) / 180;
        const x = cx + 90 * Math.cos(a);
        const y = cy + 90 * Math.sin(a);
        return (
          <g key={i}>
            <Bond x1={cx} y1={cy} x2={x} y2={y} color={COL.O} w={2} dash="5 4" />
            <Atom x={x} y={y} label="O" stroke={COL.O} fill={COL.Ofill} r={11} />
          </g>
        );
      })}
      {[0, 1, 2].map((i) => {
        const a1 = ((i * 120 - 90) * Math.PI) / 180;
        const a2 = ((i * 120 - 30) * Math.PI) / 180;
        return (
          <Bond
            key={i}
            x1={cx + 90 * Math.cos(a1)}
            y1={cy + 90 * Math.sin(a1)}
            x2={cx + 90 * Math.cos(a2)}
            y2={cy + 90 * Math.sin(a2)}
            color="#6b7c8d"
            w={2.4}
          />
        );
      })}
      <text x={cx} y={cy + 150} textAnchor="middle" fontSize="11.5" fill="#c9d6df">
        Al(acac)₃ / [Al(ox)₃]³⁻ / Al(oxine)₃ — 3 bidentate ligands, octahedral (CN 6)
      </text>
    </Svg>
  );
}

function B2Cl4() {
  return (
    <Svg h={210}>
      <Atom x={210} y={110} label="B" stroke={COL.B} fill={COL.Bfill} />
      <Atom x={310} y={110} label="B" stroke={COL.B} fill={COL.Bfill} />
      <Bond x1={210} y1={110} x2={310} y2={110} color={COL.B} w={3.4} />
      <Bond x1={210} y1={110} x2={150} y2={72} color={COL.Cl} />
      <Bond x1={210} y1={110} x2={150} y2={148} color={COL.Cl} />
      <Bond x1={310} y1={110} x2={370} y2={150} color={COL.Cl} />
      <Bond x1={310} y1={110} x2={370} y2={72} color={COL.Cl} />
      <Atom x={142} y={66} label="Cl" stroke={COL.Cl} fill="#12291f" />
      <Atom x={142} y={154} label="Cl" stroke={COL.Cl} fill="#12291f" />
      <Atom x={378} y={66} label="Cl" stroke={COL.Cl} fill="#12291f" />
      <Atom x={378} y={154} label="Cl" stroke={COL.Cl} fill="#12291f" />
      <text x={260} y={190} textAnchor="middle" fontSize="11.5" fill="#c9d6df">
        B₂Cl₄ — genuine B–B bond; non-eclipsed (gas/liquid), planar in the solid
      </text>
    </Svg>
  );
}

/* -------------------- trend charts & concept diagrams -------------------- */

function Bars({ data, unit, note }: { data: { k: string; v: number; tag?: string }[]; unit: string; note: string }) {
  const max = Math.max(...data.map((d) => d.v));
  const W = 520;
  const bw = 62;
  const gap = (W - 60 - data.length * bw) / (data.length - 1);
  return (
    <Svg h={250}>
      {data.map((d, i) => {
        const x = 40 + i * (bw + gap);
        const hgt = (d.v / max) * 150;
        return (
          <g key={d.k}>
            <rect x={x} y={200 - hgt} width={bw} height={hgt} rx={4} fill={COL.B} opacity={0.28} stroke={COL.B} strokeWidth={1.6} />
            <text x={x + bw / 2} y={200 - hgt - 8} textAnchor="middle" fontSize="11.5" fontWeight="800" fill="#cfe7ff">
              {d.v}
            </text>
            <text x={x + bw / 2} y={218} textAnchor="middle" fontSize="13" fontWeight="800" fill="#eef6ff">
              {d.k}
            </text>
            {d.tag ? (
              <text x={x + bw / 2} y={234} textAnchor="middle" fontSize="9.5" fill={COL.amber ?? "#e3b341"}>
                {d.tag}
              </text>
            ) : null}
          </g>
        );
      })}
      <text x={W / 2} y={20} textAnchor="middle" fontSize="11.5" fill="#8fa4b4">
        {unit}
      </text>
      <text x={W / 2} y={248} textAnchor="middle" fontSize="10.5" fill="#8fa4b4">
        {note}
      </text>
    </Svg>
  );
}

function CovalenceCap() {
  return (
    <Svg h={230}>
      <g>
        <Bond x1={130} y1={120} x2={130} y2={70} color={COL.O} />
        <Bond x1={130} y1={120} x2={85} y2={150} color={COL.O} />
        <Bond x1={130} y1={120} x2={175} y2={150} color={COL.O} />
        <Bond x1={130} y1={120} x2={130} y2={170} color={COL.O} />
        <Atom x={130} y={120} label="B" stroke={COL.B} fill={COL.Bfill} />
        {[[130, 62], [78, 156], [182, 156], [130, 178]].map(([x, y], i) => (
          <Atom key={i} x={x} y={y} label="F" stroke={COL.O} fill={COL.Ofill} r={12} />
        ))}
        <text x={130} y={210} textAnchor="middle" fontSize="12" fill="#c9d6df">[BF₄]⁻ — max covalence 4 (2s + 2p only)</text>
      </g>
      <g transform="translate(250,0)">
        <Atom x={130} y={120} label="Al" stroke={COL.Al} fill={COL.Alfill} r={17} />
        {[0, 60, 120, 180, 240, 300].map((deg, i) => {
          const a = ((deg - 90) * Math.PI) / 180;
          const x = 130 + 60 * Math.cos(a);
          const y = 120 + 60 * Math.sin(a);
          return (
            <g key={i}>
              <Bond x1={130} y1={120} x2={x} y2={y} color={COL.O} w={2} />
              <Atom x={x} y={y} label="F" stroke={COL.O} fill={COL.Ofill} r={11} />
            </g>
          );
        })}
        <text x={130} y={210} textAnchor="middle" fontSize="12" fill="#c9d6df">[AlF₆]³⁻ — CN 6 from Al onward</text>
      </g>
    </Svg>
  );
}

function LewisAdduct() {
  return (
    <Svg h={210}>
      <Bond x1={110} y1={110} x2={110} y2={62} color={COL.O} />
      <Bond x1={110} y1={110} x2={68} y2={140} color={COL.O} />
      <Bond x1={110} y1={110} x2={152} y2={140} color={COL.O} />
      <Atom x={110} y={110} label="B" stroke={COL.B} fill={COL.Bfill} />
      {[[110, 54], [60, 146], [160, 146]].map(([x, y], i) => (
        <Atom key={i} x={x} y={y} label="F" stroke={COL.O} fill={COL.Ofill} r={11} />
      ))}
      <text x={110} y={186} textAnchor="middle" fontSize="11" fill="#c9d6df">planar BF₃ (sp²)</text>
      <text x={260} y={110} textAnchor="middle" fontSize="20" fontWeight="900" fill={COL.amber ?? "#e3b341"}>+ :NH₃ →</text>
      <g transform="translate(320,0)">
        <Bond x1={110} y1={112} x2={110} y2={60} color={COL.N} />
        <Bond x1={110} y1={112} x2={68} y2={92} color={COL.O} />
        <Bond x1={110} y1={112} x2={152} y2={92} color={COL.O} />
        <Bond x1={110} y1={112} x2={110} y2={160} color={COL.O} />
        <Atom x={110} y={112} label="B" stroke={COL.B} fill={COL.Bfill} />
        <Atom x={110} y={52} label="N" stroke={COL.N} fill={COL.Nfill} />
        {[[62, 86], [158, 86], [110, 168]].map(([x, y], i) => (
          <Atom key={i} x={x} y={y} label="F" stroke={COL.O} fill={COL.Ofill} r={11} />
        ))}
        <text x={110} y={190} textAnchor="middle" fontSize="11" fill="#c9d6df">tetrahedral F₃B←NH₃ (sp³)</text>
      </g>
    </Svg>
  );
}

function OxideTrend() {
  const items = [
    { k: "B₂O₃", t: "acidic", c: COL.red },
    { k: "Al₂O₃", t: "amphoteric", c: COL.amber },
    { k: "Ga₂O₃", t: "amphoteric", c: COL.amber },
    { k: "In₂O₃", t: "weakly amph. → basic", c: COL.green },
    { k: "Tl₂O", t: "strongly basic", c: COL.green },
  ];
  return (
    <Svg h={190}>
      <line x1={40} y1={100} x2={480} y2={100} stroke="#3f5a74" strokeWidth={2} />
      {items.map((it, i) => {
        const x = 60 + i * 95;
        return (
          <g key={it.k}>
            <circle cx={x} cy={100} r={7} fill={it.c ?? "#888"} />
            <text x={x} y={78} textAnchor="middle" fontSize="13" fontWeight="800" fill="#eef6ff">
              {it.k}
            </text>
            <text x={x} y={128} textAnchor="middle" fontSize="10" fill="#c9d6df">
              {it.t}
            </text>
          </g>
        );
      })}
      <text x={40} y={165} fontSize="11" fill={COL.red ?? "#f66"}>← acidic</text>
      <text x={480} y={165} textAnchor="end" fontSize="11" fill={COL.green ?? "#5d5"}>basic →</text>
      <text x={260} y={30} textAnchor="middle" fontSize="11.5" fill="#8fa4b4">non-metal → metal down Group 13</text>
    </Svg>
  );
}

function AquoIons() {
  return (
    <Svg h={220}>
      <g transform="translate(20,0)">
        <Atom x={120} y={110} label="Al" stroke={COL.Al} fill={COL.Alfill} r={17} />
        {[0, 60, 120, 180, 240, 300].map((deg, i) => {
          const a = ((deg - 90) * Math.PI) / 180;
          const x = 120 + 62 * Math.cos(a);
          const y = 110 + 62 * Math.sin(a);
          return (
            <g key={i}>
              <Bond x1={120} y1={110} x2={x} y2={y} color={COL.O} w={2} dash="4 3" />
              <Atom x={x} y={y} label="OH₂" stroke={COL.O} fill={COL.Ofill} r={13} />
            </g>
          );
        })}
        <text x={120} y={200} textAnchor="middle" fontSize="11.5" fill="#c9d6df">[Al(H₂O)₆]³⁺ octahedral (acidic)</text>
      </g>
      <text x={300} y={112} textAnchor="middle" fontSize="16" fontWeight="900" fill={COL.amber ?? "#e3b341"}>+ OH⁻ ⇌</text>
      <g transform="translate(360,0)">
        <Bond x1={110} y1={112} x2={110} y2={60} color={COL.O} />
        <Bond x1={110} y1={112} x2={66} y2={92} color={COL.O} />
        <Bond x1={110} y1={112} x2={154} y2={92} color={COL.O} />
        <Bond x1={110} y1={112} x2={110} y2={162} color={COL.O} />
        <Atom x={110} y={112} label="Al" stroke={COL.Al} fill={COL.Alfill} />
        {[[110, 52], [58, 86], [162, 86], [110, 170]].map(([x, y], i) => (
          <Atom key={i} x={x} y={y} label="OH" stroke={COL.O} fill={COL.Ofill} r={11} />
        ))}
        <text x={110} y={200} textAnchor="middle" fontSize="11.5" fill="#c9d6df">[Al(OH)₄]⁻ tetrahedral (alkaline)</text>
      </g>
    </Svg>
  );
}

function DiagonalBSi() {
  const rows = [
    ["Oxide", "B₂O₃ acidic, glassy", "SiO₂ acidic, network"],
    ["Halide", "BCl₃ covalent, hydrolyses", "SiCl₄ covalent, hydrolyses"],
    ["Hydride", "boranes, readily hydrolysed", "silanes, hydrolyse (slower)"],
    ["Acid", "H₃BO₃ very weak (pKa≈9.2)", "silicic acid very weak"],
    ["Fluoro ion", "[BF₄]⁻", "[SiF₆]²⁻"],
    ["z/r (formal)", "≈ 0.073 e pm⁻¹", "≈ 0.074 e pm⁻¹"],
  ];
  return (
    <Svg h={260}>
      <text x={175} y={22} textAnchor="middle" fontSize="13" fontWeight="900" fill={COL.B}>Boron</text>
      <text x={410} y={22} textAnchor="middle" fontSize="13" fontWeight="900" fill={COL.green}>Silicon</text>
      {rows.map((r, i) => {
        const y = 40 + i * 34;
        return (
          <g key={r[0]}>
            <rect x={10} y={y} width={500} height={30} rx={5} fill={i % 2 ? "#0d1826" : "#101d2d"} stroke="#1f3447" />
            <text x={20} y={y + 20} fontSize="10.5" fontWeight="800" fill={COL.amber ?? "#e3b341"}>
              {r[0]}
            </text>
            <text x={100} y={y + 20} fontSize="11" fill="#dce8f2">
              {r[1]}
            </text>
            <text x={300} y={y + 20} fontSize="11" fill="#dce8f2">
              {r[2]}
            </text>
          </g>
        );
      })}
    </Svg>
  );
}

function OxStateMap() {
  return (
    <Svg h={230}>
      {["B", "Al", "Ga", "In", "Tl"].map((el, i) => {
        const x = 60 + i * 100;
        const p3 = [96, 88, 70, 46, 20][i];
        const p1 = [4, 12, 30, 54, 80][i];
        return (
          <g key={el}>
            <rect x={x - 26} y={60} width={52} height={p3} rx={4} fill={COL.B} opacity={0.3} stroke={COL.B} strokeWidth={1.4} />
            <rect x={x - 26} y={60 + p3} width={52} height={p1} rx={4} fill={COL.amber ?? "#e3b341"} opacity={0.35} stroke={COL.amber ?? "#e3b341"} strokeWidth={1.4} />
            <text x={x} y={186} textAnchor="middle" fontSize="13" fontWeight="800" fill="#eef6ff">
              {el}
            </text>
          </g>
        );
      })}
      <rect x={430} y={62} width={12} height={12} fill={COL.B} opacity={0.35} />
      <text x={448} y={72} fontSize="11" fill="#cfe7ff">+3 state</text>
      <rect x={430} y={82} width={12} height={12} fill={COL.amber ?? "#e3b341"} opacity={0.4} />
      <text x={448} y={92} fontSize="11" fill="#f0dca8">+1 state</text>
      <text x={230} y={210} textAnchor="middle" fontSize="11" fill="#8fa4b4">
        inert-pair effect: +1 grows, +3 shrinks down the group; Tl(I) dominant
      </text>
      <text x={230} y={40} textAnchor="middle" fontSize="11.5" fill="#8fa4b4">relative stability of oxidation states</text>
    </Svg>
  );
}

/** A small B12 icosahedron centred at (cx,cy); `s` scales it. */
function MiniIcosa({ cx, cy, s = 1, dim = false }: { cx: number; cy: number; s?: number; dim?: boolean }) {
  const outer = 34 * s;
  const inner = 18 * s;
  const cap = 46 * s;
  const stroke = dim ? "#3f5a74" : COL.B;
  const pent = (r: number, off: number) =>
    Array.from({ length: 5 }, (_, i) => {
      const a = ((i * 72 + off - 90) * Math.PI) / 180;
      return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
    });
  const O = pent(outer, 0);
  const I = pent(inner, 36);
  const top = { x: cx, y: cy - cap };
  const bot = { x: cx, y: cy + cap };
  const r = 5 * s;
  return (
    <g opacity={dim ? 0.5 : 1}>
      {O.map((p, i) => (
        <Bond key={`o${i}`} x1={p.x} y1={p.y} x2={O[(i + 1) % 5].x} y2={O[(i + 1) % 5].y} color={stroke} w={1.7 * s} />
      ))}
      {I.map((p, i) => (
        <Bond key={`i${i}`} x1={p.x} y1={p.y} x2={I[(i + 1) % 5].x} y2={I[(i + 1) % 5].y} color={stroke} w={1.5 * s} dash="4 3" />
      ))}
      {O.map((p, i) => (
        <g key={`b${i}`}>
          <Bond x1={p.x} y1={p.y} x2={top.x} y2={top.y} color="#3f5a74" w={1.2 * s} />
          <Bond x1={p.x} y1={p.y} x2={bot.x} y2={bot.y} color="#3f5a74" w={1.2 * s} />
          <Bond x1={p.x} y1={p.y} x2={I[i].x} y2={I[i].y} color="#3f5a74" w={1.2 * s} />
          <Bond x1={p.x} y1={p.y} x2={I[(i + 4) % 5].x} y2={I[(i + 4) % 5].y} color="#3f5a74" w={1.2 * s} />
        </g>
      ))}
      {[top, bot, ...O, ...I].map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={r} fill={COL.Bfill} stroke={stroke} strokeWidth={1.6} />
      ))}
    </g>
  );
}

/** Pentagonal-pyramid construction of the B12 icosahedron. */
function IcosaFromPyramids() {
  return (
    <Svg h={220}>
      {/* top pyramid */}
      {(() => {
        const cx = 70, cy = 120, apex = { x: cx, y: cy - 48 };
        const ring = Array.from({ length: 5 }, (_, i) => {
          const a = ((i * 72 - 90) * Math.PI) / 180;
          return { x: cx + 30 * Math.cos(a), y: cy + 14 * Math.sin(a) };
        });
        return (
          <g>
            {ring.map((p, i) => (
              <Bond key={i} x1={p.x} y1={p.y} x2={ring[(i + 1) % 5].x} y2={ring[(i + 1) % 5].y} color={COL.B} w={2} dash="4 3" />
            ))}
            {ring.map((p, i) => <Bond key={`a${i}`} x1={p.x} y1={p.y} x2={apex.x} y2={apex.y} color="#3f5a74" w={1.6} />)}
            {[apex, ...ring].map((p, i) => <circle key={i} cx={p.x} cy={p.y} r={5} fill={COL.Bfill} stroke={COL.B} strokeWidth={1.8} />)}
            <text x={cx} y={cy + 44} textAnchor="middle" fontSize="10.5" fill="#8fa4b4">apex + 5-ring</text>
          </g>
        );
      })()}
      <text x={140} y={124} textAnchor="middle" fontSize="20" fill={COL.amber}>+</text>
      {/* staggered belt: two pentagons rotated 36 deg */}
      {(() => {
        const cx = 210, cy = 110;
        const p = (r: number, off: number) => Array.from({ length: 5 }, (_, i) => {
          const a = ((i * 72 + off - 90) * Math.PI) / 180;
          return { x: cx + r * Math.cos(a), y: cy + 16 * Math.sin(a) + (off ? 26 : -26) };
        });
        const a = p(30, 0), b = p(30, 36);
        return (
          <g>
            {a.map((q, i) => <Bond key={`a${i}`} x1={q.x} y1={q.y} x2={a[(i + 1) % 5].x} y2={a[(i + 1) % 5].y} color={COL.B} w={2} />)}
            {b.map((q, i) => <Bond key={`b${i}`} x1={q.x} y1={q.y} x2={b[(i + 1) % 5].x} y2={b[(i + 1) % 5].y} color={COL.B} w={2} />)}
            {a.map((q, i) => <Bond key={`x${i}`} x1={q.x} y1={q.y} x2={b[i].x} y2={b[i].y} color="#3f5a74" w={1.4} />)}
            {[...a, ...b].map((q, i) => <circle key={i} cx={q.x} cy={q.y} r={5} fill={COL.Bfill} stroke={COL.B} strokeWidth={1.8} />)}
            <text x={cx} y={cy + 54} textAnchor="middle" fontSize="10.5" fill="#8fa4b4">staggered belt · 36°</text>
          </g>
        );
      })()}
      <text x={290} y={124} textAnchor="middle" fontSize="20" fill={COL.amber}>+</text>
      {/* bottom pyramid */}
      {(() => {
        const cx = 350, cy = 110, apex = { x: cx, y: cy + 48 };
        const ring = Array.from({ length: 5 }, (_, i) => {
          const a = ((i * 72 - 90) * Math.PI) / 180;
          return { x: cx + 30 * Math.cos(a), y: cy + 14 * Math.sin(a) };
        });
        return (
          <g>
            {ring.map((p, i) => (
              <Bond key={i} x1={p.x} y1={p.y} x2={ring[(i + 1) % 5].x} y2={ring[(i + 1) % 5].y} color={COL.B} w={2} dash="4 3" />
            ))}
            {ring.map((p, i) => <Bond key={`a${i}`} x1={p.x} y1={p.y} x2={apex.x} y2={apex.y} color="#3f5a74" w={1.6} />)}
            {[apex, ...ring].map((p, i) => <circle key={i} cx={p.x} cy={p.y} r={5} fill={COL.Bfill} stroke={COL.B} strokeWidth={1.8} />)}
          </g>
        );
      })()}
      <text x={418} y={124} textAnchor="middle" fontSize="20" fill={COL.amber}>=</text>
      <MiniIcosa cx={468} cy={110} s={1.15} />
      <text x={210} y={205} textAnchor="middle" fontSize="11" fill="#8fa4b4">
        two pentagonal pyramids sharing a staggered pentagonal belt → 12 vertices, 20 triangular faces
      </text>
    </Svg>
  );
}

/** alpha-rhombohedral boron: icosahedra joined by inter-icosahedral B-B bonds. */
function AlphaRhombLattice() {
  const centres = [
    { x: 120, y: 80 }, { x: 260, y: 60 }, { x: 400, y: 80 },
    { x: 190, y: 175 }, { x: 330, y: 175 }, { x: 260, y: 250 },
  ];
  const links: [number, number][] = [[0, 1], [1, 2], [0, 3], [1, 3], [1, 4], [2, 4], [3, 4], [3, 5], [4, 5]];
  return (
    <Svg h={280}>
      {links.map(([a, b], i) => (
        <Bond key={i} x1={centres[a].x} y1={centres[a].y} x2={centres[b].x} y2={centres[b].y} color={COL.amber} w={2.2} dash="1 5" />
      ))}
      {centres.map((c, i) => <MiniIcosa key={i} cx={c.x} cy={c.y} s={0.72} dim={i > 0} />)}
      <text x={260} y={272} textAnchor="middle" fontSize="11" fill="#8fa4b4">
        each B₁₂ has 6 nearest-neighbour icosahedra · dotted = 2c–2e inter-icosahedral B–B bonds
      </text>
    </Svg>
  );
}

/* -------- new figures for the forensic rebuild (inline placement) -------- */

function Level({ x, y, w = 90, label, electrons = 0, color = "#9fb2c4" }: { x: number; y: number; w?: number; label?: string; electrons?: number; color?: string }) {
  return (
    <g>
      <line x1={x} y1={y} x2={x + w} y2={y} stroke={color} strokeWidth={3} strokeLinecap="round" />
      {label ? <text x={x + w + 8} y={y + 4} fontSize="11" fill="#c9d6df">{label}</text> : null}
      {Array.from({ length: electrons }).map((_, i) => (
        <text key={i} x={x + w / 2 + (i - (electrons - 1) / 2) * 12} y={y - 6} fontSize="13" textAnchor="middle" fill={COL.amber}>↑{i % 2 ? "" : "↓"}</text>
      ))}
    </g>
  );
}

function BF3FourCentreMO() {
  return (
    <Svg h={260}>
      <text x={260} y={20} textAnchor="middle" fontSize="12" fill="#8fa4b4">four-centre π interaction in BF₃ — one delocalised bonding π-MO, not three B=F double bonds</text>
      {/* fragment orbitals */}
      <Level x={40} y={70} w={70} label="empty B 2pᵤ" color={COL.B} />
      <Level x={400} y={150} w={70} label="filled F 2p π-set" color={COL.O} electrons={0} />
      <text x={435} y={172} fontSize="10" fill="#8fa4b4">(3 combinations)</text>
      {/* MO ladder centre */}
      <Level x={210} y={45} w={100} label="π*  (antibonding)" color={COL.red} />
      <Level x={210} y={110} w={100} label="2 × non-bonding" color="#9fb2c4" electrons={4} />
      <Level x={210} y={190} w={100} label="π  (4-centre bonding)" color={COL.green} electrons={2} />
      {/* correlation lines */}
      <Bond x1={110} y1={70} x2={210} y2={45} color={COL.B} w={1} dash="3 3" />
      <Bond x1={110} y1={70} x2={210} y2={190} color={COL.B} w={1} dash="3 3" />
      <Bond x1={400} y1={150} x2={310} y2={110} color={COL.O} w={1} dash="3 3" />
      <Bond x1={400} y1={150} x2={310} y2={190} color={COL.O} w={1} dash="3 3" />
      <text x={260} y={240} textAnchor="middle" fontSize="10.5" fill="#8fa4b4">net: partial π character shared over B + 3F → shorter B–F, weaker Lewis acidity toward hard donors</text>
    </Svg>
  );
}

function ThreeCentreMO() {
  return (
    <Svg h={230}>
      <text x={260} y={18} textAnchor="middle" fontSize="12" fill="#8fa4b4">B–H–B bridge: 3 orbitals → 3 MOs, only the lowest filled (2 electrons / 3 centres)</text>
      <Level x={200} y={50} w={120} label="σ*  antibonding (empty)" color={COL.red} />
      <Level x={200} y={110} w={120} label="≈ non-bonding (empty)" color="#9fb2c4" />
      <Level x={200} y={175} w={120} label="σ  bonding (2 e⁻)" color={COL.green} electrons={2} />
      {/* atomic orbitals */}
      <Atom x={70} y={130} label="B" stroke={COL.B} fill={COL.Bfill} r={13} />
      <Atom x={130} y={130} label="H" stroke={COL.H} fill="#241f10" r={11} />
      <text x={100} y={165} textAnchor="middle" fontSize="10" fill="#8fa4b4">B  ·  H  ·  B</text>
      <Atom x={100} y={95} label="B" stroke={COL.B} fill={COL.Bfill} r={13} />
      <Bond x1={143} y1={130} x2={200} y2={175} color="#3f5a74" w={1} dash="3 3" />
      <text x={400} y={205} textAnchor="middle" fontSize="10.5" fill="#8fa4b4">⇒ each B–H segment has bond order well below 1</text>
    </Svg>
  );
}

function polygon(cx: number, cy: number, r: number, n: number, rot = -90) {
  return Array.from({ length: n }, (_, i) => {
    const a = ((i * 360) / n + rot) * (Math.PI / 180);
    return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
  });
}

function Cage({ cx, cy, n, r, label }: { cx: number; cy: number; n: number; r: number; label: string }) {
  const p = polygon(cx, cy, r, n);
  return (
    <g>
      {p.map((a, i) => p.slice(i + 1).map((b, j) => (
        <Bond key={`${i}-${j}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} color="#3f5a74" w={1} />
      )))}
      {p.map((a, i) => (
        <g key={i}>
          <Bond x1={a.x} y1={a.y} x2={a.x + (a.x - cx) * 0.5} y2={a.y + (a.y - cy) * 0.5} color={COL.Cl} w={1.6} />
          <circle cx={a.x} cy={a.y} r={5} fill={COL.Bfill} stroke={COL.B} strokeWidth={1.8} />
        </g>
      ))}
      <text x={cx} y={cy + r + 24} textAnchor="middle" fontSize="11" fontWeight="700" fill="#c9d6df">{label}</text>
    </g>
  );
}

function LowerBoronHalides() {
  return (
    <div className="space-y-3">
      <B2Cl4 />
      <Svg h={170}>
        <Cage cx={95} cy={80} n={4} r={30} label="B₄Cl₄ (closo)" />
        <Cage cx={260} cy={80} n={8} r={36} label="B₈Cl₈" />
        <Cage cx={430} cy={80} n={9} r={36} label="B₉Cl₉" />
        <text x={260} y={158} textAnchor="middle" fontSize="10.5" fill="#8fa4b4">subhalide (BCl)ₙ cages — electron-deficient multicentre B–B framework, not localised single bonds</text>
      </Svg>
    </div>
  );
}

function borazineRing(cx: number, cy: number, r: number) {
  const p = polygon(cx, cy, r, 6, -90);
  // even index = B, odd = N
  return p.map((pt, i) => ({ ...pt, el: i % 2 === 0 ? "B" : "N" }));
}

function BorazineMO() {
  const ring = borazineRing(160, 120, 55);
  return (
    <Svg h={250}>
      <text x={260} y={18} textAnchor="middle" fontSize="12" fill="#8fa4b4">borazine — N→B π donation makes the ring π-system polar (unlike benzene)</text>
      {ring.map((a, i) => (
        <Bond key={i} x1={a.x} y1={a.y} x2={ring[(i + 1) % 6].x} y2={ring[(i + 1) % 6].y} color="#6b7f92" w={2.4} />
      ))}
      {ring.map((a, i) => (
        <Atom key={i} x={a.x} y={a.y} label={a.el} stroke={a.el === "B" ? COL.B : COL.N} fill={a.el === "B" ? COL.Bfill : COL.Nfill} r={13} />
      ))}
      {/* N lone-pair donation arrows toward adjacent B */}
      {ring.filter((a) => a.el === "N").map((n, i) => {
        const b = ring[(ring.indexOf(n) + 1) % 6];
        return <Bond key={i} x1={n.x} y1={n.y} x2={b.x} y2={b.y} color={COL.green} w={1.4} dash="2 4" />;
      })}
      <text x={160} y={205} textAnchor="middle" fontSize="10" fill="#8fa4b4">δ⁻ on N · δ⁺ on B · dotted = lone-pair π donation</text>
      {/* charge-separated contributor */}
      <g transform="translate(330,45)">
        {borazineRing(0, 60, 45).map((a, i, arr) => (
          <g key={i}>
            <Bond x1={a.x} y1={a.y} x2={arr[(i + 1) % 6].x} y2={arr[(i + 1) % 6].y} color="#6b7f92" w={2} />
            <Atom x={a.x} y={a.y} label={a.el === "B" ? "B⁻" : "N⁺"} stroke={a.el === "B" ? COL.B : COL.N} fill={a.el === "B" ? COL.Bfill : COL.Nfill} r={13} />
          </g>
        ))}
        <text x={0} y={125} textAnchor="middle" fontSize="10.5" fill="#8fa4b4">important charge-separated contributor</text>
      </g>
    </Svg>
  );
}

function MiniBorazine({ cx, cy, r, bLabel, nLabel, title }: { cx: number; cy: number; r: number; bLabel: string; nLabel: string; title: string }) {
  const ring = borazineRing(cx, cy, r);
  return (
    <g>
      {ring.map((a, i) => (
        <Bond key={i} x1={a.x} y1={a.y} x2={ring[(i + 1) % 6].x} y2={ring[(i + 1) % 6].y} color="#6b7f92" w={2} />
      ))}
      {ring.map((a, i) => {
        const sub = a.el === "B" ? bLabel : nLabel;
        const ox = (a.x - cx) * 0.85;
        const oy = (a.y - cy) * 0.85;
        return (
          <g key={i}>
            <Bond x1={a.x} y1={a.y} x2={a.x + ox} y2={a.y + oy} color="#8fa4b4" w={1.2} />
            <text x={a.x + ox * 1.5} y={a.y + oy * 1.5 + 3} textAnchor="middle" fontSize="9" fill="#c9d6df">{sub}</text>
            <Atom x={a.x} y={a.y} label={a.el} stroke={a.el === "B" ? COL.B : COL.N} fill={a.el === "B" ? COL.Bfill : COL.Nfill} r={10} />
          </g>
        );
      })}
      <text x={cx} y={cy + r + 30} textAnchor="middle" fontSize="10" fontWeight="700" fill="#c9d6df">{title}</text>
    </g>
  );
}

function BorazineDerivatives() {
  return (
    <Svg h={240}>
      <MiniBorazine cx={90} cy={95} r={40} bLabel="Cl" nLabel="H" title="B-trichloroborazine" />
      <MiniBorazine cx={250} cy={95} r={40} bLabel="CH₃" nLabel="H" title="B-trimethylborazine" />
      <MiniBorazine cx={410} cy={95} r={40} bLabel="Cl" nLabel="H₂" title="+3HCl adduct (Cl→B, H→N)" />
      <g transform="translate(250,175)">
        <text x={0} y={-8} textAnchor="middle" fontSize="10.5" fill="#8fa4b4">borazine–Cr(CO)₃: ring η⁶-bound to Cr(CO)₃ through its π system</text>
        <ellipse cx={0} cy={12} rx={46} ry={12} fill="none" stroke="#6b7f92" strokeWidth={2} />
        <Bond x1={0} y1={20} x2={0} y2={40} color="#8fa4b4" w={1.4} dash="3 3" />
        <Atom x={0} y={50} label="Cr" stroke={COL.metal} fill="#2a1414" r={12} />
        {[-18, 0, 18].map((dx, i) => <text key={i} x={dx} y={72} textAnchor="middle" fontSize="9" fill="#c9d6df">CO</text>)}
      </g>
    </Svg>
  );
}

function Deltahedron({ cx, cy, n, r, open, label, formula }: { cx: number; cy: number; n: number; r: number; open: number; label: string; formula: string }) {
  const p = polygon(cx, cy, r, n);
  return (
    <g>
      {p.map((a, i) => p.slice(i + 1).map((b, j) => {
        const isOpen = i >= n - open || i + 1 + j >= n - open;
        return <Bond key={`${i}-${j}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} color={isOpen ? "#33465a" : "#5a7a9a"} w={isOpen ? 1 : 1.6} dash={isOpen ? "3 4" : undefined} />;
      }))}
      {p.map((a, i) => <circle key={i} cx={a.x} cy={a.y} r={5} fill={COL.Bfill} stroke={COL.B} strokeWidth={1.8} />)}
      <text x={cx} y={cy + r + 20} textAnchor="middle" fontSize="11" fontWeight="700" fill="#c9d6df">{label}</text>
      <text x={cx} y={cy + r + 36} textAnchor="middle" fontSize="10" fill="#8fa4b4">{formula}</text>
    </g>
  );
}

function BoraneClasses() {
  return (
    <Svg h={230}>
      <text x={260} y={16} textAnchor="middle" fontSize="12" fill="#8fa4b4">open the closo cage by removing vertices → nido → arachno</text>
      <Deltahedron cx={90} cy={95} n={6} r={38} open={0} label="closo" formula="BₙHₙ²⁻ · (n+1) pairs" />
      <Deltahedron cx={255} cy={95} n={6} r={38} open={2} label="nido" formula="BₙHₙ₊₄ · (n+2) pairs" />
      <Deltahedron cx={420} cy={95} n={6} r={38} open={3} label="arachno" formula="BₙHₙ₊₆ · (n+3) pairs" />
      <text x={260} y={210} textAnchor="middle" fontSize="10.5" fill="#8fa4b4">B₂H₆ is the simplest nido-type borane · pyrolysis interconversions are condition-dependent</text>
    </Svg>
  );
}

function FlowBox({ x, y, w, h = 40, text, color = COL.B }: { x: number; y: number; w: number; h?: number; text: string; color?: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={6} fill={color + "22"} stroke={color} strokeWidth={1.4} />
      {text.split("\n").map((ln, i) => (
        <text key={i} x={x + w / 2} y={y + h / 2 + 4 + (i - (text.split("\n").length - 1) / 2) * 12} textAnchor="middle" fontSize="10" fill="#e6eef7">{ln}</text>
      ))}
    </g>
  );
}

function Arrow({ x1, y1, x2, y2, label }: { x1: number; y1: number; x2: number; y2: number; label?: string }) {
  const ang = Math.atan2(y2 - y1, x2 - x1);
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={COL.amber} strokeWidth={1.6} />
      <polygon points={`${x2},${y2} ${x2 - 8 * Math.cos(ang - 0.4)},${y2 - 8 * Math.sin(ang - 0.4)} ${x2 - 8 * Math.cos(ang + 0.4)},${y2 - 8 * Math.sin(ang + 0.4)}`} fill={COL.amber} />
      {label ? <text x={(x1 + x2) / 2} y={(y1 + y2) / 2 - 5} textAnchor="middle" fontSize="9" fill="#8fa4b4">{label}</text> : null}
    </g>
  );
}

function BayerHallHeroult() {
  return (
    <Svg h={320}>
      <text x={260} y={16} textAnchor="middle" fontSize="12" fill="#8fa4b4">Bayer purification → Hall–Héroult electrolysis</text>
      <FlowBox x={20} y={40} w={90} text={"bauxite\nAl₂O₃·xH₂O"} />
      <Arrow x1={110} y1={60} x2={150} y2={60} label="hot conc. NaOH" />
      <FlowBox x={150} y={40} w={110} text={"soluble\nNa[Al(OH)₄]"} color={COL.green} />
      <Arrow x1={205} y1={80} x2={205} y2={110} label="filter Fe₂O₃ / SiO₂" />
      <FlowBox x={150} y={110} w={110} text={"seed with Al(OH)₃\n→ Al(OH)₃ ↓"} />
      <Arrow x1={260} y1={130} x2={300} y2={130} label="calcine ≈1200°C" />
      <FlowBox x={300} y={110} w={90} text={"pure Al₂O₃"} color={COL.O} />
      <Arrow x1={345} y1={150} x2={345} y2={185} />
      {/* cell */}
      <rect x={120} y={185} width={280} height={110} rx={8} fill="#0d1626" stroke={COL.B} strokeWidth={1.4} />
      <text x={260} y={203} textAnchor="middle" fontSize="10" fill="#8fa4b4">Al₂O₃ in molten cryolite Na₃AlF₆ (+ CaF₂, AlF₃) · ≈ 950 °C</text>
      {[150, 230, 310].map((x, i) => <rect key={i} x={x} y={210} width={22} height={30} fill="#241f10" stroke={COL.H} strokeWidth={1} />)}
      <text x={260} y={228} textAnchor="middle" fontSize="9" fill="#f4e2b0">carbon anodes (consumed → CO₂)</text>
      <rect x={135} y={262} width={250} height={22} fill={COL.metal + "33"} stroke={COL.metal} strokeWidth={1.2} />
      <text x={260} y={277} textAnchor="middle" fontSize="9.5" fill="#f0c9c9">molten Al at carbon-lined cathode</text>
      <text x={260} y={312} textAnchor="middle" fontSize="9.5" fill="#8fa4b4">cathode: Al³⁺ + 3e⁻ → Al · anode: 2O²⁻ → O₂ + 4e⁻ ; C + O₂ → CO₂</text>
    </Svg>
  );
}

function AlQualitative() {
  return (
    <Svg h={260}>
      <FlowBox x={200} y={20} w={110} text={"Al³⁺ (aq)"} />
      <Arrow x1={255} y1={40} x2={255} y2={65} label="OH⁻ / NH₃" />
      <FlowBox x={185} y={65} w={140} text={"white gelatinous\nAl(OH)₃ ↓"} color="#9fb2c4" />
      <Arrow x1={200} y1={95} x2={110} y2={135} label="excess NaOH" />
      <Arrow x1={255} y1={105} x2={255} y2={135} label="excess NH₃" />
      <Arrow x1={310} y1={95} x2={400} y2={135} label="aluminon" />
      <FlowBox x={30} y={135} w={150} text={"dissolves →\n[Al(OH)₄]⁻ (colourless)\n≠ Mg²⁺ (stays ↓)"} color={COL.green} />
      <FlowBox x={195} y={135} w={130} text={"no change\n≠ Zn²⁺ → [Zn(NH₃)₄]²⁺"} color={COL.O} />
      <FlowBox x={355} y={135} w={130} text={"red lake\nadsorbed on Al(OH)₃"} color={COL.red} />
      <text x={260} y={245} textAnchor="middle" fontSize="10" fill="#8fa4b4">the excess-NaOH and excess-NH₃ tests together place aluminium unambiguously</text>
    </Svg>
  );
}

/* ---------------------------- inline figure atlas ----------------------- */

const RadiusBars = () => (
  <Bars
    data={[
      { k: "B", v: 88 },
      { k: "Al", v: 143 },
      { k: "Ga", v: 135, tag: "d-block" },
      { k: "In", v: 167 },
      { k: "Tl", v: 170, tag: "4f" },
    ]}
    unit="atomic / metallic radius · pm"
    note="order: B < Ga < Al < In < Tl"
  />
);
const IeBars = () => (
  <Bars
    data={[
      { k: "B", v: 801 },
      { k: "Al", v: 577 },
      { k: "Ga", v: 579 },
      { k: "In", v: 558 },
      { k: "Tl", v: 589 },
    ]}
    unit="IE₁ · kJ mol⁻¹"
    note="order: In < Al < Ga < Tl < B"
  />
);

type Fig = { title: string; caption: string; render: () => ReactNode };

const FIGURES: Record<string, Fig> = {
  "covalence-cap": {
    title: "First-member anomaly — why boron caps at covalence 4",
    caption:
      "A period-2 atom has only 2s + 2p valence orbitals, so boron's maximum covalence is 4 ([BF₄]⁻). From aluminium onward, higher coordination numbers such as 6 ([AlF₆]³⁻) become accessible.",
    render: () => <CovalenceCap />,
  },
  "radii": {
    title: "Atomic / metallic radius across Group 13",
    caption:
      "A new shell is added down the group, but Ga is smaller than Al (poor 3d¹⁰ shielding — d-block contraction) and Tl is only marginally larger than In (4f¹⁴ — lanthanoid contraction). Invariant exam point: Ga < Al.",
    render: () => <RadiusBars />,
  },
  "ie1": {
    title: "First ionisation enthalpy",
    caption:
      "IE₁ falls from B to Al with size, then rises slightly at Ga and again at Tl because poorly shielding d and f electrons hold the outer electrons more tightly.",
    render: () => <IeBars />,
  },
  "lewis-adduct": {
    title: "Electron deficiency → Lewis acidity",
    caption:
      "A trivalent Group 13 centre has only six electrons around it. Accepting a lone pair converts planar sp² BF₃ into a tetrahedral sp³ adduct such as F₃B←NH₃.",
    render: () => <LewisAdduct />,
  },
  "aquo-ions": {
    title: "Aquo ion ⇌ hydroxo ion",
    caption:
      "Heavier Group 13 ions give octahedral [M(H₂O)₆]³⁺ (acidic through hydrolysis) and, in strong alkali, tetrahedral [M(OH)₄]⁻. Boron forms no normal aquated B³⁺ ion.",
    render: () => <AquoIons />,
  },
  "oxide-trend": {
    title: "Oxide / hydroxide character down the group",
    caption:
      "Oxide character tracks metallic character: acidic B₂O₃ → amphoteric Al₂O₃ / Ga₂O₃ → predominantly basic In₂O₃ → strongly basic Tl₂O and TlOH.",
    render: () => <OxideTrend />,
  },
  "diagonal": {
    title: "The boron–silicon diagonal relationship",
    caption:
      "B and Si sit on a periodic-table diagonal and share polarising power (z/r) and covalent, network, weakly acidic behaviour — a set of similarities, not identity (B caps at covalence 4, Si reaches 6).",
    render: () => <DiagonalBSi />,
  },
  "oxstate-map": {
    title: "Group 13 master map — oxidation-state stability",
    caption:
      "Down the group the ns² pair is held back (inert-pair effect): the +1 state becomes progressively more stable while +3 becomes strongly oxidising, so Tl(I) is the dominant thallium state.",
    render: () => <OxStateMap />,
  },
  "icosahedron": {
    title: "Elemental boron — the B₁₂ icosahedron",
    caption:
      "Crystalline boron is built from B₁₂ icosahedra (12 vertices, 20 triangular faces) — two staggered pentagons capped by an apex atom top and bottom — linked by multicentre inter-icosahedral B–B bonds. Multicentre bonding compensates for boron's electron deficiency.",
    render: () => <IcosahedronB12 />,
  },
  "icosa-construction": {
    title: "Construction of the B₁₂ icosahedron from pentagonal pyramids",
    caption:
      "Top pentagonal pyramid (1 apex + 5-ring) + a staggered pentagonal belt (two pentagons offset by 36° about the fivefold axis) + bottom pentagonal pyramid = the 12-vertex icosahedron.",
    render: () => <IcosaFromPyramids />,
  },
  "alpha-rhombohedral": {
    title: "α-rhombohedral boron — a lattice of linked icosahedra",
    caption:
      "B₁₂ units sit on a rhombohedral lattice; neighbouring icosahedra are joined by 2c–2e inter-icosahedral B–B bonds and each icosahedron has six nearest neighbours. The extended 3-D network gives α-boron its extreme hardness and high melting point. β-rhombohedral boron is more complex, built from larger B₈₄ units (central B₁₂ + 12 exterior atoms + an outer B₆₀ cage) with interstitial atoms.",
    render: () => <AlphaRhombLattice />,
  },
  "borate-units": {
    title: "Boric acid and key borate structural units",
    caption:
      "B(OH)₃ is trigonal planar (sp²); [B(OH)₄]⁻ is tetrahedral (sp³); the borax anion [B₄O₅(OH)₄]²⁻ has two trigonal and two tetrahedral boron centres joined by five bridging O atoms.",
    render: () => <BoricAcidUnits />,
  },
  "cis-diol": {
    title: "Why cis-diols raise the apparent acidity of boric acid",
    caption:
      "A cis-diol chelates [B(OH)₄]⁻ through a five-membered O–B–O ring; removing the tetrahydroxyborate shifts B(OH)₃ + 2H₂O ⇌ [B(OH)₄]⁻ + H₃O⁺ to the right, so H₃BO₃ can then be titrated with phenolphthalein.",
    render: () => <CisDiolChelate />,
  },
  "peroxoborate": {
    title: "Sodium peroxoborate — the true dimeric anion",
    caption:
      "Commercial 'sodium perborate' NaBO₃·4H₂O is the dimeric anion [B₂(O₂)₂(OH)₄]²⁻ with two genuine O–O peroxo bridges and both boron atoms tetrahedral; warm water releases H₂O₂.",
    render: () => <Peroxoborate />,
  },
  "bf3": {
    title: "BF₃ — trigonal-planar structure and F→B π donation",
    caption:
      "BF₃ is trigonal planar (sp² B, zero dipole). The vacant B 2p orbital accepts π density from filled F 2p lone pairs, shortening B–F to ≈130 pm; the donation is lost when B becomes tetrahedral in an adduct or [BF₄]⁻ (≈138–143 pm).",
    render: () => <BF3Planar />,
  },
  "bf3-mo": {
    title: "BF₃ — the four-centre π picture (MOT lens)",
    caption:
      "The empty B 2pᵤ orbital combines with the symmetry-matched filled combination of the three F 2p lone pairs to give one delocalised four-centre bonding π-MO (plus non-bonding and antibonding levels). This single delocalised π interaction — not three localised B=F double bonds — is what shortens B–F and weakens BF₃ as a Lewis acid toward hard donors.",
    render: () => <BF3FourCentreMO />,
  },
  "b2cl4-cages": {
    title: "B₂Cl₄ and the lower boron chlorides",
    caption:
      "B₂Cl₄ (low-pressure discharge of BCl₃ over Hg) has a genuine B–B bond — non-eclipsed in gas/liquid, planar in the solid. The subhalides (BCl)ₙ — B₄Cl₄, B₈Cl₈, B₉Cl₉ — are compact closo boron cages whose B–B framework uses multicentre bonding, so cage edges are not ordinary single bonds.",
    render: () => <LowerBoronHalides />,
  },
  "diborane": {
    title: "Diborane B₂H₆ — 3-centre–2-electron bonding",
    caption:
      "Four terminal B–H bonds are ordinary 2c–2e bonds; the two B–H–B bridges are 3c–2e bonds. The B₂H₄ unit is planar and the two bridging H atoms sit one above and one below that plane. Terminal B–H ≈ 119 pm; bridging B–H ≈ 133 pm.",
    render: () => <Diborane />,
  },
  "3c2e-mo": {
    title: "The B–H–B bridge — molecular-orbital view (MOT lens)",
    caption:
      "Three atomic orbitals (B, H, B) combine into three MOs: bonding, approximately non-bonding, and antibonding. Only the lowest (bonding) MO is filled — two electrons spread over three centres. That is why each B–H segment of the bridge has a bond order well below 1 and must not be drawn as a normal single bond.",
    render: () => <ThreeCentreMO />,
  },
  "borazine": {
    title: "Borazine and hexagonal boron nitride",
    caption:
      "Borazine B₃N₃H₆ is a planar six-membered ring of alternating B and N; the polar Bδ⁺–Nδ⁻ bonds make it more reactive than benzene. Hexagonal BN ('white graphite') stacks the same alternating framework into insulating 2-D layers.",
    render: () => <Borazine />,
  },
  "borazine-mo": {
    title: "Borazine π system vs benzene (MOT lens)",
    caption:
      "N donates its lone pair into the empty B 2p orbital, giving π delocalisation around the ring — but the electron density is pulled toward nitrogen, so the ring is polar and a charge-separated contributor (B⁻=N⁺) is important. Unlike benzene, the π electrons are not evenly shared, so borazine readily adds HX across B–N.",
    render: () => <BorazineMO />,
  },
  "borazine-derivatives": {
    title: "Borazine derivatives and complexes",
    caption:
      "B-trichloroborazine (from 3NH₄Cl + 3BCl₃), B-trimethylborazine, the HCl-addition product [H atoms add H→N, Cl→B] and a schematic borazine–Cr(CO)₃ π-complex where the ring binds a metal-carbonyl fragment through its π system.",
    render: () => <BorazineDerivatives />,
  },
  "borane-classes": {
    title: "Borane cluster classification (Wade / Lipscomb)",
    caption:
      "closo BₙHₙ²⁻ (n+1 skeletal pairs) → nido BₙHₙ₊₄ (n+2) → arachno BₙHₙ₊₆ (n+3): removing vertices from the closo deltahedron opens the cage. B₂H₆ is the simplest nido-type member. Pyrolysis interconversions are condition-dependent, not a single clean sequence.",
    render: () => <BoraneClasses />,
  },
  "borohydride-bridges": {
    title: "Covalent borohydrides and polymeric aluminium hydride",
    caption:
      "In covalent metal borohydrides BH₄⁻ bridges the metal through two H atoms (η²). Al(BH₄)₃ is a discrete molecule with six Al–H–B bridges; Be(BH₄)₂ is a chain polymer; (AlH₃)ₙ is a polymer held together by Al–H–Al multicentre bridges.",
    render: () => <BorohydrideBridges />,
  },
  "al2cl6": {
    title: "Al₂Cl₆ — dimeric aluminium chloride",
    caption:
      "Anhydrous AlCl₃ dimerises through two µ-Cl bridges so that each aluminium is roughly tetrahedral; association is favoured at lower temperature and dissociation increases on heating (to monomeric planar AlCl₃ above ≈ 800 °C).",
    render: () => <Al2Cl6 />,
  },
  "al2me6": {
    title: "Al₂(CH₃)₆ — electron-deficient alkyl bridges",
    caption:
      "Dimeric trimethylaluminium has two bridging and four terminal methyl groups; the Al–C–Al bridges are 3-centre–2-electron bonds analogous to the B–H–B bridges of diborane.",
    render: () => <Al2Me6 />,
  },
  "aluminate-ring": {
    title: "Tricalcium aluminate — the Al–O ring in Ca₉[Al₆O₁₈]",
    caption:
      "Six AlO₄ tetrahedra share corners to give a 12-membered Al–O ring; each aluminium also carries two exocyclic O atoms (Ca²⁺ ions and full packing omitted). Ca₃Al₂O₆ × 3 = Ca₉Al₆O₁₈.",
    render: () => <AluminateRing />,
  },
  "al-chelates": {
    title: "Octahedral aluminium chelates",
    caption:
      "Three bidentate ligands (acetylacetonate, oxalate or 8-hydroxyquinolinate) fill six coordination sites around Al(III), giving octahedral Al(acac)₃, [Al(ox)₃]³⁻ and Al(oxine)₃ (the basis of the gravimetric oxine determination of aluminium).",
    render: () => <AlChelate />,
  },
  "bayer-hall": {
    title: "Aluminium extraction — Bayer purification + Hall–Héroult electrolysis",
    caption:
      "Bayer: bauxite → hot conc. NaOH dissolves Al as aluminate, Fe₂O₃/SiO₂ impurities filtered off → seeded Al(OH)₃ precipitation → calcination → pure Al₂O₃. Hall–Héroult: Al₂O₃ dissolved in molten cryolite Na₃AlF₆ (solvent + conductivity; CaF₂/AlF₃ additives), ≈ 950 °C. Cathode: Al³⁺ + 3e⁻ → Al(l). Anode (carbon, consumed): 2O²⁻ → O₂ + 4e⁻, then C + O₂ → CO₂.",
    render: () => <BayerHallHeroult />,
  },
  "al-qual": {
    title: "Aluminium — qualitative analysis flow",
    caption:
      "Al³⁺ + 3OH⁻ → white gelatinous Al(OH)₃. Dissolves in EXCESS NaOH → [Al(OH)₄]⁻ (distinguishes Al³⁺ from Mg²⁺, which does not redissolve). Does NOT dissolve in excess NH₃ (distinguishes Al³⁺ from Zn²⁺, which forms [Zn(NH₃)₄]²⁺). Confirmatory: aluminon gives a red lake adsorbed on Al(OH)₃.",
    render: () => <AlQualitative />,
  },
};

/** Resolve a `::figure KEY::` marker to an inline visual atlas Frame. */
export function boronFigure(key: string): ReactNode {
  const f = FIGURES[key];
  if (!f) return null;
  return (
    <Frame title={f.title} caption={f.caption}>
      {f.render()}
    </Frame>
  );
}

/** Back-compat: the old per-part visual block (used by the dev preview only). */
export function BoronFamilyVisual({ part }: { part: number }) {
  const byPart: Record<number, string[]> = {
    1: ["covalence-cap"],
    3: ["radii", "ie1"],
    4: ["lewis-adduct", "aquo-ions", "oxide-trend"],
    6: ["diagonal"],
    7: ["icosahedron", "icosa-construction", "alpha-rhombohedral"],
    8: ["borate-units", "cis-diol", "peroxoborate"],
    9: ["bf3", "bf3-mo", "b2cl4-cages"],
    10: ["diborane", "3c2e-mo", "borazine", "borazine-mo", "borazine-derivatives", "borane-classes", "borohydride-bridges"],
    11: ["al2cl6", "al2me6", "aluminate-ring", "al-chelates", "bayer-hall", "al-qual"],
    13: ["oxstate-map"],
  };
  const keys = byPart[part];
  if (!keys) return null;
  return <div className="space-y-6">{keys.map((k) => <div key={k}>{boronFigure(k)}</div>)}</div>;
}
