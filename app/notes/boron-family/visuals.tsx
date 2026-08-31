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

/* ------------------------------ dispatcher ------------------------------- */

export function BoronFamilyVisual({ part }: { part: number }) {
  switch (part) {
    case 7:
      return (
        <Frame title="Elemental boron — the B₁₂ icosahedron" caption="Crystalline boron is built from B₁₂ icosahedra (12 vertices, 20 faces) — two staggered pentagons capped by an apex atom top and bottom — linked by multicentre intericosahedral B–B bonds.">
          <IcosahedronB12 />
        </Frame>
      );
    case 8:
      return (
        <div className="space-y-6">
          <Frame title="Boric acid and key borate structural units" caption="B(OH)₃ is trigonal planar (sp²); [B(OH)₄]⁻ is tetrahedral (sp³); the borax anion [B₄O₅(OH)₄]²⁻ has two trigonal and two tetrahedral boron centres joined by five bridging O atoms.">
            <BoricAcidUnits />
          </Frame>
          <Frame title="Why cis-diols raise the apparent acidity of boric acid" caption="A cis-diol chelates [B(OH)₄]⁻ through a five-membered O–B–O ring; removing the tetrahydroxyborate shifts B(OH)₃ + 2H₂O ⇌ [B(OH)₄]⁻ + H₃O⁺ to the right, so H₃BO₃ can then be titrated with phenolphthalein.">
            <CisDiolChelate />
          </Frame>
          <Frame title="Sodium peroxoborate — the true dimeric anion" caption="Commercial 'sodium perborate' NaBO₃·4H₂O is the dimeric anion with two genuine O–O peroxo bridges and both boron atoms tetrahedral; warm water releases H₂O₂.">
            <Peroxoborate />
          </Frame>
        </div>
      );
    case 9:
      return (
        <div className="space-y-6">
          <Frame title="BF₃ — trigonal-planar structure and F→B π donation" caption="BF₃ is trigonal planar (sp² B, zero dipole). The vacant B 2p orbital accepts π density from filled F 2p lone pairs, shortening B–F to ≈130 pm; the donation is lost when B becomes tetrahedral in an adduct or [BF₄]⁻ (≈138–143 pm).">
            <BF3Planar />
          </Frame>
          <Frame title="Boron dihalide B₂Cl₄" caption="B₂Cl₄ (from low-pressure electric discharge of BCl₃ over mercury) contains a real B–B bond; it is non-eclipsed in the gas/liquid and more nearly planar in the solid.">
            <B2Cl4 />
          </Frame>
        </div>
      );
    case 10:
      return (
        <div className="space-y-6">
          <Frame title="Diborane B₂H₆ — 3-centre–2-electron bonding" caption="Four terminal B–H bonds are ordinary 2c–2e bonds; the two B–H–B bridges are 3c–2e bonds. The B₂H₄ unit is planar and the bridging H atoms sit above and below that plane.">
            <Diborane />
          </Frame>
          <Frame title="Borazine and hexagonal boron nitride" caption="Borazine B₃N₃H₆ is a planar six-membered ring of alternating B and N; the polar Bδ⁺–Nδ⁻ bonds make it more reactive than benzene. Hexagonal BN ('white graphite') stacks the same alternating framework into insulating 2-D layers.">
            <Borazine />
          </Frame>
          <Frame title="Covalent borohydrides and polymeric aluminium hydride" caption="In covalent metal borohydrides BH₄⁻ bridges the metal through two H atoms (η²). Al(BH₄)₃ is a discrete molecule with six Al–H–B bridges; (AlH₃)ₙ is a polymer held together by Al–H–Al multicentre bridges.">
            <BorohydrideBridges />
          </Frame>
        </div>
      );
    case 11:
      return (
        <div className="space-y-6">
          <Frame title="Al₂Cl₆ — dimeric aluminium chloride" caption="Anhydrous AlCl₃ dimerises through two µ-Cl bridges so that each aluminium is roughly tetrahedral; association is favoured at lower temperature and dissociation increases on heating.">
            <Al2Cl6 />
          </Frame>
          <Frame title="Al₂(CH₃)₆ — electron-deficient alkyl bridges" caption="Dimeric trimethylaluminium has two bridging and four terminal methyl groups; the Al–C–Al bridges are 3-centre–2-electron bonds analogous to the B–H–B bridges of diborane.">
            <Al2Me6 />
          </Frame>
          <Frame title="Tricalcium aluminate — the Al–O ring in Ca₉[Al₆O₁₈]" caption="Six AlO₄ tetrahedra share corners to give a 12-membered Al–O ring; each aluminium also carries two exocyclic O atoms (Ca²⁺ ions and full packing omitted).">
            <AluminateRing />
          </Frame>
          <Frame title="Octahedral aluminium chelates" caption="Three bidentate ligands (acetylacetonate, oxalate or 8-hydroxyquinolinate) fill six coordination sites around Al(III), giving octahedral Al(acac)₃, [Al(ox)₃]³⁻ and Al(oxine)₃.">
            <AlChelate />
          </Frame>
        </div>
      );
    default:
      return null;
  }
}
