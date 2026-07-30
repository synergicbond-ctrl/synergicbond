import type { ReactNode } from "react";

export const metadata = {
  title: "Liquid Solutions | JEE Advanced Chemistry | Synergic Bond",
  description:
    "Comprehensive JEE Advanced notes on Henry's law, Raoult's law, vapour-liquid equilibrium, distillation, colligative properties, osmosis and the van't Hoff factor.",
};

type Accent = "cyan" | "violet" | "amber" | "emerald" | "rose";

type CardProps = {
  title?: string;
  children: ReactNode;
  accent?: Accent;
  className?: string;
};

type SectionProps = {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
};

const cls = (...names: Array<string | false | undefined>) => names.filter(Boolean).join(" ");

function Section({ id, number, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="ls-section">
      <div className="ls-section-heading">
        <span className="ls-section-number">{number}</span>
        <div>
          <p className="ls-eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
        </div>
      </div>
      {children}
    </section>
  );
}

function Card({ title, children, accent = "cyan", className }: CardProps) {
  return (
    <article className={cls("ls-card", `ls-card-${accent}`, className)}>
      {title ? <h3>{title}</h3> : null}
      {children}
    </article>
  );
}

function FormulaCard({ title, children, accent = "violet" }: CardProps) {
  return (
    <div className={cls("ls-formula-card", `ls-card-${accent}`)}>
      {title ? <p className="ls-formula-label">{title}</p> : null}
      <div className="ls-formula">{children}</div>
    </div>
  );
}

function WorkedExample({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="ls-example">
      <div className="ls-example-head">
        <span>EXAMPLE {number}</span>
        <h3>{title}</h3>
      </div>
      <div className="ls-example-body">{children}</div>
    </article>
  );
}

function KeyPoint({ children, tone = "cyan" }: { children: ReactNode; tone?: Accent }) {
  return <div className={cls("ls-keypoint", `ls-keypoint-${tone}`)}>{children}</div>;
}

function Eq({ children }: { children: ReactNode }) {
  return <span className="ls-inline-eq">{children}</span>;
}

function DataTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: Array<Array<ReactNode>>;
}) {
  return (
    <div className="ls-table-wrap">
      <table className="ls-table">
        <thead>
          <tr>{headers.map((h) => <th key={h}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AxisArrow({ id }: { id: string }) {
  return (
    <defs>
      <marker id={id} markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0,0 L0,6 L7,3 z" fill="currentColor" />
      </marker>
    </defs>
  );
}

function SolutionParticlesFigure() {
  return (
    <svg viewBox="0 0 720 330" role="img" aria-label="Homogeneous solution at molecular scale" className="ls-svg">
      <defs>
        <linearGradient id="beakerFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.30" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0.14" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <rect x="54" y="36" width="430" height="245" rx="28" fill="none" stroke="#94a3b8" strokeWidth="4" />
      <path d="M70 128 Q270 116 468 128 L468 260 Q270 280 70 260 Z" fill="url(#beakerFill)" />
      {[
        [100,158],[148,206],[204,150],[256,224],[314,176],[370,232],[430,156],[120,246],[230,254],[350,140],[420,240]
      ].map(([x,y],i)=><circle key={`s${i}`} cx={x} cy={y} r="10" fill="#38bdf8" opacity="0.95" />)}
      {[
        [132,176],[184,236],[242,184],[294,248],[342,208],[398,190],[452,220],[276,148]
      ].map(([x,y],i)=><circle key={`u${i}`} cx={x} cy={y} r="7" fill="#fbbf24" filter="url(#glow)" />)}
      <line x1="506" y1="102" x2="458" y2="158" stroke="#38bdf8" strokeWidth="3" />
      <text x="520" y="94" fill="#cbd5e1" fontSize="22" fontWeight="700">solvent particles</text>
      <line x1="506" y1="190" x2="402" y2="190" stroke="#fbbf24" strokeWidth="3" />
      <text x="520" y="185" fill="#f8fafc" fontSize="22" fontWeight="700">solute particles</text>
      <text x="520" y="231" fill="#94a3b8" fontSize="18">uniform molecular distribution</text>
      <text x="520" y="258" fill="#94a3b8" fontSize="18">single macroscopic phase</text>
    </svg>
  );
}

function HenryFigure() {
  return (
    <svg viewBox="0 0 760 360" role="img" aria-label="Henry law graph and gas dissolution under pressure" className="ls-svg">
      <AxisArrow id="henryArrow" />
      <g transform="translate(48,34)" color="#94a3b8">
        <line x1="44" y1="260" x2="332" y2="260" stroke="currentColor" strokeWidth="3" markerEnd="url(#henryArrow)" />
        <line x1="44" y1="260" x2="44" y2="22" stroke="currentColor" strokeWidth="3" markerEnd="url(#henryArrow)" />
        <line x1="44" y1="260" x2="306" y2="54" stroke="#22d3ee" strokeWidth="5" />
        {[0,1,2,3,4].map(i => <circle key={i} cx={80+i*52} cy={232-i*41} r="7" fill="#a78bfa" />)}
        <text x="280" y="246" fill="#cbd5e1" fontSize="18">mole fraction, x</text>
        <text x="-4" y="34" fill="#cbd5e1" fontSize="18">p</text>
        <text x="174" y="100" fill="#22d3ee" fontSize="22" fontWeight="700">p = Kₕx</text>
        <text x="178" y="128" fill="#94a3b8" fontSize="16">slope = Kₕ</text>
      </g>
      <g transform="translate(446,42)">
        <rect x="18" y="24" width="246" height="264" rx="18" fill="#0f172a" stroke="#64748b" strokeWidth="3" />
        <rect x="34" y="156" width="214" height="112" rx="10" fill="#0ea5e9" opacity="0.20" />
        <rect x="34" y="92" width="214" height="16" rx="8" fill="#cbd5e1" />
        <path d="M74 62 v28 M142 62 v28 M210 62 v28" stroke="#fbbf24" strokeWidth="4" markerEnd="url(#henryArrow)" color="#fbbf24" />
        {[66,102,134,178,214].map((x,i)=><circle key={i} cx={x} cy={132+(i%2)*30} r="7" fill="#f472b6" />)}
        {[62,90,120,150,182,216,236].map((x,i)=><circle key={i} cx={x} cy={188+(i%3)*28} r="6" fill="#f472b6" />)}
        <text x="56" y="18" fill="#f8fafc" fontSize="18" fontWeight="700">higher pressure</text>
        <text x="62" y="318" fill="#94a3b8" fontSize="17">more gas in liquid</text>
      </g>
    </svg>
  );
}

function RaoultFigure() {
  return (
    <svg viewBox="0 0 760 390" role="img" aria-label="Raoult law pressure composition graph" className="ls-svg">
      <AxisArrow id="raoultArrow" />
      <g transform="translate(82,42)" color="#94a3b8">
        <line x1="20" y1="286" x2="600" y2="286" stroke="currentColor" strokeWidth="3" markerEnd="url(#raoultArrow)" />
        <line x1="20" y1="286" x2="20" y2="18" stroke="currentColor" strokeWidth="3" markerEnd="url(#raoultArrow)" />
        <line x1="20" y1="226" x2="570" y2="58" stroke="#22d3ee" strokeWidth="5" />
        <line x1="20" y1="226" x2="570" y2="286" stroke="#f472b6" strokeWidth="4" />
        <line x1="20" y1="286" x2="570" y2="58" stroke="#fbbf24" strokeWidth="4" />
        <text x="544" y="322" fill="#cbd5e1" fontSize="18">xᴮ →</text>
        <text x="-12" y="20" fill="#cbd5e1" fontSize="18">P</text>
        <text x="30" y="214" fill="#f472b6" fontSize="18">pᴬ</text>
        <text x="520" y="270" fill="#fbbf24" fontSize="18">pᴮ</text>
        <text x="330" y="118" fill="#22d3ee" fontSize="20" fontWeight="700">Ptotal</text>
        <text x="-2" y="316" fill="#94a3b8" fontSize="16">pure A</text>
        <text x="526" y="316" fill="#94a3b8" fontSize="16">pure B</text>
        <circle cx="310" cy="137" r="8" fill="#a78bfa" />
        <line x1="310" y1="137" x2="310" y2="286" stroke="#64748b" strokeDasharray="7 7" />
      </g>
    </svg>
  );
}

function DeviationsFigure() {
  return (
    <svg viewBox="0 0 820 380" role="img" aria-label="Positive and negative deviations from Raoult law" className="ls-svg">
      <AxisArrow id="devArrow" />
      {[0,1].map(panel => {
        const ox=panel*400+28;
        return <g key={panel} transform={`translate(${ox},36)`} color="#94a3b8">
          <line x1="42" y1="268" x2="350" y2="268" stroke="currentColor" strokeWidth="3" markerEnd="url(#devArrow)" />
          <line x1="42" y1="268" x2="42" y2="24" stroke="currentColor" strokeWidth="3" markerEnd="url(#devArrow)" />
          <line x1="42" y1="222" x2="326" y2="72" stroke="#64748b" strokeWidth="3" strokeDasharray="8 8" />
          {panel===0 ? (
            <path d="M42 222 C128 104 238 68 326 72" fill="none" stroke="#f472b6" strokeWidth="6" />
          ) : (
            <path d="M42 222 C132 248 236 178 326 72" fill="none" stroke="#22d3ee" strokeWidth="6" />
          )}
          <text x="78" y="18" fill="#f8fafc" fontSize="21" fontWeight="800">{panel===0?"Positive deviation":"Negative deviation"}</text>
          <text x="98" y="300" fill="#94a3b8" fontSize="16">composition</text>
          <text x="8" y="36" fill="#94a3b8" fontSize="16">P</text>
          <text x="118" y={panel===0?94:244} fill={panel===0?"#f472b6":"#22d3ee"} fontSize="17">observed</text>
          <text x="180" y="150" fill="#94a3b8" fontSize="15">ideal line</text>
        </g>
      })}
    </svg>
  );
}

function PhaseEnvelopeFigure() {
  return (
    <svg viewBox="0 0 800 430" role="img" aria-label="Pressure composition phase envelope and lever rule" className="ls-svg">
      <AxisArrow id="phaseArrow" />
      <g transform="translate(84,42)" color="#94a3b8">
        <line x1="30" y1="310" x2="650" y2="310" stroke="currentColor" strokeWidth="3" markerEnd="url(#phaseArrow)" />
        <line x1="30" y1="310" x2="30" y2="20" stroke="currentColor" strokeWidth="3" markerEnd="url(#phaseArrow)" />
        <path d="M30 242 C200 220 420 134 620 54" fill="none" stroke="#fbbf24" strokeWidth="5" />
        <path d="M30 242 C194 274 414 205 620 54" fill="none" stroke="#22d3ee" strokeWidth="5" />
        <path d="M30 242 C194 274 414 205 620 54 L620 54 C420 134 200 220 30 242 Z" fill="#8b5cf6" opacity="0.12" />
        <line x1="248" y1="218" x2="482" y2="218" stroke="#f472b6" strokeWidth="4" />
        <line x1="248" y1="218" x2="248" y2="310" stroke="#64748b" strokeDasharray="7 7" />
        <line x1="376" y1="218" x2="376" y2="310" stroke="#a78bfa" strokeDasharray="7 7" />
        <line x1="482" y1="218" x2="482" y2="310" stroke="#64748b" strokeDasharray="7 7" />
        <circle cx="248" cy="218" r="7" fill="#22d3ee" />
        <circle cx="376" cy="218" r="8" fill="#a78bfa" />
        <circle cx="482" cy="218" r="7" fill="#fbbf24" />
        <text x="192" y="176" fill="#fbbf24" fontSize="18" fontWeight="700">bubble curve</text>
        <text x="390" y="264" fill="#22d3ee" fontSize="18" fontWeight="700">dew curve</text>
        <text x="270" y="201" fill="#f8fafc" fontSize="17">liquid + vapour</text>
        <text x="188" y="348" fill="#cbd5e1" fontSize="17">y</text>
        <text x="366" y="348" fill="#a78bfa" fontSize="17">z</text>
        <text x="476" y="348" fill="#fbbf24" fontSize="17">x</text>
        <text x="20" y="344" fill="#94a3b8" fontSize="16">0</text>
        <text x="610" y="344" fill="#94a3b8" fontSize="16">1</text>
        <text x="260" y="388" fill="#cbd5e1" fontSize="18">overall composition →</text>
        <text x="-2" y="32" fill="#cbd5e1" fontSize="18">P</text>
      </g>
    </svg>
  );
}

function TxYFigure() {
  return (
    <svg viewBox="0 0 760 370" role="img" aria-label="Temperature composition bubble and dew curves" className="ls-svg">
      <AxisArrow id="txyArrow" />
      <g transform="translate(88,40)" color="#94a3b8">
        <line x1="30" y1="270" x2="600" y2="270" stroke="currentColor" strokeWidth="3" markerEnd="url(#txyArrow)" />
        <line x1="30" y1="270" x2="30" y2="18" stroke="currentColor" strokeWidth="3" markerEnd="url(#txyArrow)" />
        <path d="M30 56 C190 98 410 188 574 236" fill="none" stroke="#f472b6" strokeWidth="5" />
        <path d="M30 56 C176 156 402 246 574 236" fill="none" stroke="#22d3ee" strokeWidth="5" />
        <path d="M30 56 C190 98 410 188 574 236 C402 246 176 156 30 56 Z" fill="#06b6d4" opacity="0.10" />
        <text x="228" y="112" fill="#f472b6" fontSize="18">dew curve</text>
        <text x="240" y="224" fill="#22d3ee" fontSize="18">bubble curve</text>
        <text x="238" y="170" fill="#f8fafc" fontSize="17">two phases</text>
        <text x="238" y="306" fill="#cbd5e1" fontSize="17">mole fraction of B →</text>
        <text x="-2" y="30" fill="#cbd5e1" fontSize="18">T</text>
        <text x="32" y="38" fill="#cbd5e1" fontSize="15">T°A</text>
        <text x="548" y="226" fill="#cbd5e1" fontSize="15">T°B</text>
      </g>
    </svg>
  );
}

function DistillationFigure() {
  return (
    <svg viewBox="0 0 900 390" role="img" aria-label="Simple distillation apparatus" className="ls-svg">
      <defs>
        <linearGradient id="flaskLiquid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#a78bfa" stopOpacity="0.55" />
          <stop offset="1" stopColor="#06b6d4" stopOpacity="0.28" />
        </linearGradient>
        <marker id="flowArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#fbbf24" /></marker>
      </defs>
      <g transform="translate(30,22)">
        <path d="M145 94 L145 136 Q86 154 82 242 Q78 324 188 330 Q298 324 294 242 Q290 154 231 136 L231 94" fill="none" stroke="#cbd5e1" strokeWidth="5" />
        <path d="M98 234 Q188 202 278 234 L282 282 Q188 324 94 282 Z" fill="url(#flaskLiquid)" />
        <rect x="132" y="54" width="112" height="46" rx="10" fill="#0f172a" stroke="#64748b" strokeWidth="4" />
        <path d="M188 54 V20" stroke="#cbd5e1" strokeWidth="5" />
        <path d="M244 76 H360" stroke="#cbd5e1" strokeWidth="7" />
        <path d="M360 58 L674 198" stroke="#64748b" strokeWidth="26" strokeLinecap="round" />
        <path d="M360 58 L674 198" stroke="#cbd5e1" strokeWidth="6" strokeLinecap="round" />
        <path d="M388 70 L636 180" stroke="#fbbf24" strokeWidth="4" markerEnd="url(#flowArrow)" />
        <path d="M674 198 L716 217" stroke="#cbd5e1" strokeWidth="7" />
        <path d="M706 220 L706 322 L822 322 L822 220" fill="#0ea5e9" fillOpacity="0.16" stroke="#cbd5e1" strokeWidth="4" />
        <path d="M724 278 Q764 268 804 278 L804 310 L724 310 Z" fill="#22d3ee" opacity="0.34" />
        <path d="M133 346 Q188 370 245 346" fill="none" stroke="#f97316" strokeWidth="6" />
        <path d="M160 350 Q188 330 216 350" fill="none" stroke="#fbbf24" strokeWidth="5" />
        <text x="76" y="372" fill="#94a3b8" fontSize="17">less volatile enriched residue</text>
        <text x="532" y="66" fill="#cbd5e1" fontSize="17">water-cooled condenser</text>
        <text x="700" y="360" fill="#94a3b8" fontSize="17">volatile-rich distillate</text>
        <text x="128" y="260" fill="#f8fafc" fontSize="18" fontWeight="700">A + B</text>
      </g>
    </svg>
  );
}

function AzeotropeFigure() {
  return (
    <svg viewBox="0 0 820 380" role="img" aria-label="Minimum and maximum boiling azeotropes" className="ls-svg">
      <AxisArrow id="azArrow" />
      {[0,1].map(panel => {
        const ox=panel*405+20;
        return <g key={panel} transform={`translate(${ox},34)`} color="#94a3b8">
          <line x1="40" y1="272" x2="360" y2="272" stroke="currentColor" strokeWidth="3" markerEnd="url(#azArrow)" />
          <line x1="40" y1="272" x2="40" y2="24" stroke="currentColor" strokeWidth="3" markerEnd="url(#azArrow)" />
          {panel===0 ? (
            <>
              <path d="M40 220 C142 70 254 62 338 108" fill="none" stroke="#f472b6" strokeWidth="5" />
              <path d="M40 220 C142 142 252 104 338 108" fill="none" stroke="#22d3ee" strokeWidth="5" />
              <circle cx="215" cy="76" r="9" fill="#fbbf24" />
              <text x="72" y="18" fill="#f8fafc" fontSize="20" fontWeight="800">Minimum-boiling</text>
              <text x="100" y="318" fill="#94a3b8" fontSize="16">positive deviation</text>
            </>
          ) : (
            <>
              <path d="M40 82 C142 116 254 248 338 154" fill="none" stroke="#f472b6" strokeWidth="5" />
              <path d="M40 82 C142 186 252 276 338 154" fill="none" stroke="#22d3ee" strokeWidth="5" />
              <circle cx="214" cy="242" r="9" fill="#fbbf24" />
              <text x="78" y="18" fill="#f8fafc" fontSize="20" fontWeight="800">Maximum-boiling</text>
              <text x="100" y="318" fill="#94a3b8" fontSize="16">negative deviation</text>
            </>
          )}
          <line x1="215" y1={panel===0?76:242} x2="215" y2="272" stroke="#fbbf24" strokeDasharray="7 7" />
          <text x="205" y="298" fill="#fbbf24" fontSize="16">xaz</text>
        </g>
      })}
    </svg>
  );
}

function VapourLoweringFigure() {
  return (
    <svg viewBox="0 0 760 340" role="img" aria-label="Nonvolatile solute lowers solvent escape rate" className="ls-svg">
      <defs><marker id="escapeArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#22d3ee" /></marker></defs>
      {[0,1].map(panel => <g key={panel} transform={`translate(${panel*360+34},34)`}>
        <rect x="18" y="60" width="300" height="220" rx="20" fill="#0f172a" stroke="#64748b" strokeWidth="3" />
        <path d="M34 166 Q168 154 302 166 L302 264 Q168 278 34 264 Z" fill="#0ea5e9" opacity="0.20" />
        {[54,88,124,160,198,236,274].map((x,i)=><circle key={i} cx={x} cy={196+(i%2)*34} r="8" fill="#38bdf8" />)}
        {panel===1 && [96,176,258].map((x,i)=><circle key={i} cx={x} cy={166+(i%2)*44} r="12" fill="#fbbf24" />)}
        {[82,154,230].slice(0,panel===0?3:2).map((x,i)=><path key={i} d={`M${x} 158 C${x-8} 126 ${x+8} 106 ${x} 78`} fill="none" stroke="#22d3ee" strokeWidth="4" markerEnd="url(#escapeArrow)" />)}
        <text x="76" y="30" fill="#f8fafc" fontSize="20" fontWeight="800">{panel===0?"Pure solvent, p°":"Solution, p < p°"}</text>
        <text x="70" y="310" fill="#94a3b8" fontSize="16">{panel===0?"more solvent surface sites":"solute blocks some surface sites"}</text>
      </g>)}
    </svg>
  );
}

function OstwaldWalkerFigure() {
  return (
    <svg viewBox="0 0 900 330" role="img" aria-label="Ostwald Walker dynamic method" className="ls-svg">
      <defs><marker id="airArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#fbbf24" /></marker></defs>
      <path d="M24 74 H852" stroke="#fbbf24" strokeWidth="4" markerEnd="url(#airArrow)" />
      {[90,330,570].map((x,i)=><g key={i} transform={`translate(${x},82)`}>
        <rect x="0" y="0" width="180" height="180" rx="22" fill="#0f172a" stroke="#64748b" strokeWidth="4" />
        <path d="M18 96 Q90 88 162 96 L162 160 Q90 170 18 160 Z" fill={i===2?"#334155":"#0ea5e9"} opacity={i===2?.55:.22} />
        <path d="M28 -8 V132" stroke="#cbd5e1" strokeWidth="5" />
        <path d="M152 18 V-8" stroke="#cbd5e1" strokeWidth="5" />
        <circle cx="68" cy="118" r="8" fill="#38bdf8" /><circle cx="112" cy="136" r="8" fill="#38bdf8" />
        <text x="26" y="205" fill="#cbd5e1" fontSize="17">{i===0?"solution (p)":i===1?"pure solvent (p°)":"anhydrous absorber"}</text>
      </g>)}
      <text x="20" y="44" fill="#f8fafc" fontSize="18" fontWeight="700">dry air</text>
      <text x="716" y="306" fill="#94a3b8" fontSize="16">mass gains encode p and p° − p</text>
    </svg>
  );
}

function BoilingElevationFigure() {
  return (
    <svg viewBox="0 0 760 360" role="img" aria-label="Elevation of boiling point graph" className="ls-svg">
      <AxisArrow id="bpArrow" />
      <g transform="translate(86,36)" color="#94a3b8">
        <line x1="34" y1="278" x2="610" y2="278" stroke="currentColor" strokeWidth="3" markerEnd="url(#bpArrow)" />
        <line x1="34" y1="278" x2="34" y2="18" stroke="currentColor" strokeWidth="3" markerEnd="url(#bpArrow)" />
        <path d="M90 250 C210 228 338 164 470 56" fill="none" stroke="#22d3ee" strokeWidth="5" />
        <path d="M126 260 C254 246 390 192 526 82" fill="none" stroke="#f472b6" strokeWidth="5" />
        <line x1="34" y1="130" x2="576" y2="130" stroke="#fbbf24" strokeWidth="3" strokeDasharray="9 7" />
        <line x1="382" y1="130" x2="382" y2="278" stroke="#22d3ee" strokeDasharray="7 7" />
        <line x1="466" y1="130" x2="466" y2="278" stroke="#f472b6" strokeDasharray="7 7" />
        <path d="M382 300 H466" stroke="#a78bfa" strokeWidth="4" />
        <text x="397" y="326" fill="#a78bfa" fontSize="18">ΔTᵦ</text>
        <text x="500" y="122" fill="#fbbf24" fontSize="17">Pexternal</text>
        <text x="250" y="82" fill="#22d3ee" fontSize="17">pure solvent</text>
        <text x="382" y="226" fill="#f472b6" fontSize="17">solution</text>
        <text x="350" y="300" fill="#cbd5e1" fontSize="16">T°ᵦ</text>
        <text x="456" y="300" fill="#cbd5e1" fontSize="16">Tᵦ</text>
      </g>
    </svg>
  );
}

function FreezingDepressionFigure() {
  return (
    <svg viewBox="0 0 760 360" role="img" aria-label="Depression of freezing point chemical potential graph" className="ls-svg">
      <AxisArrow id="fpArrow" />
      <g transform="translate(82,36)" color="#94a3b8">
        <line x1="34" y1="278" x2="610" y2="278" stroke="currentColor" strokeWidth="3" markerEnd="url(#fpArrow)" />
        <line x1="34" y1="278" x2="34" y2="18" stroke="currentColor" strokeWidth="3" markerEnd="url(#fpArrow)" />
        <line x1="92" y1="54" x2="544" y2="242" stroke="#fbbf24" strokeWidth="5" />
        <line x1="118" y1="82" x2="548" y2="244" stroke="#22d3ee" strokeWidth="5" />
        <line x1="150" y1="120" x2="552" y2="246" stroke="#f472b6" strokeWidth="5" />
        <circle cx="204" cy="101" r="7" fill="#22d3ee" />
        <circle cx="251" cy="151" r="7" fill="#f472b6" />
        <line x1="204" y1="101" x2="204" y2="278" stroke="#22d3ee" strokeDasharray="7 7" />
        <line x1="251" y1="151" x2="251" y2="278" stroke="#f472b6" strokeDasharray="7 7" />
        <path d="M204 304 H251" stroke="#a78bfa" strokeWidth="4" />
        <text x="210" y="330" fill="#a78bfa" fontSize="18">ΔT𝒇</text>
        <text x="412" y="182" fill="#fbbf24" fontSize="17">solid solvent</text>
        <text x="410" y="215" fill="#22d3ee" fontSize="17">liquid solvent</text>
        <text x="414" y="250" fill="#f472b6" fontSize="17">solution</text>
        <text x="180" y="299" fill="#cbd5e1" fontSize="15">T𝒇</text>
        <text x="242" y="299" fill="#cbd5e1" fontSize="15">T°𝒇</text>
      </g>
    </svg>
  );
}

function OsmosisFigure() {
  return (
    <svg viewBox="0 0 820 390" role="img" aria-label="Osmosis through semipermeable membrane" className="ls-svg">
      <defs><marker id="osmArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#22d3ee" /></marker></defs>
      <g transform="translate(70,34)">
        <path d="M72 20 V292 Q72 326 106 326 H574 Q608 326 608 292 V20" fill="none" stroke="#94a3b8" strokeWidth="5" />
        <rect x="82" y="158" width="516" height="156" fill="#0ea5e9" opacity="0.14" />
        <rect x="328" y="94" width="24" height="220" rx="9" fill="#a78bfa" opacity="0.75" />
        <path d="M112 198 H316" stroke="#22d3ee" strokeWidth="5" markerEnd="url(#osmArrow)" />
        {[118,158,204,254].map((x,i)=><circle key={i} cx={x} cy={224+(i%2)*42} r="8" fill="#38bdf8" />)}
        {[400,438,486,536].map((x,i)=><circle key={i} cx={x} cy={208+(i%2)*50} r="8" fill="#38bdf8" />)}
        {[414,470,550].map((x,i)=><circle key={i} cx={x} cy={262-(i%2)*42} r="14" fill="#fbbf24" />)}
        <path d="M376 158 V80 H578 V158" fill="#0ea5e9" opacity="0.16" stroke="#64748b" strokeWidth="3" />
        <line x1="584" y1="80" x2="584" y2="158" stroke="#f472b6" strokeWidth="4" />
        <text x="88" y="350" fill="#cbd5e1" fontSize="18">pure solvent / dilute side</text>
        <text x="414" y="350" fill="#cbd5e1" fontSize="18">concentrated solution</text>
        <text x="276" y="70" fill="#a78bfa" fontSize="17" fontWeight="700">SPM</text>
        <text x="596" y="120" fill="#f472b6" fontSize="18">h</text>
        <text x="394" y="54" fill="#f8fafc" fontSize="18" fontWeight="700">osmotic rise</text>
      </g>
    </svg>
  );
}

function VantHoffFigure() {
  return (
    <svg viewBox="0 0 820 300" role="img" aria-label="Particle count changes in dissociation and association" className="ls-svg">
      {[0,1,2].map(panel => <g key={panel} transform={`translate(${panel*270+22},30)`}>
        <rect x="0" y="0" width="238" height="216" rx="24" fill="#0f172a" stroke="#64748b" strokeWidth="3" />
        <text x="26" y="32" fill="#f8fafc" fontSize="19" fontWeight="800">{panel===0?"No change: i = 1":panel===1?"Dissociation: i > 1":"Association: i < 1"}</text>
        {panel===0 && [[58,84],[118,128],[178,88]].map(([x,y],i)=><g key={i}><circle cx={x-8} cy={y} r="10" fill="#22d3ee"/><circle cx={x+8} cy={y} r="10" fill="#fbbf24"/></g>)}
        {panel===1 && [[52,86],[112,126],[174,82]].flatMap(([x,y],i)=>[
          <circle key={`a${i}`} cx={x-16} cy={y} r="10" fill="#22d3ee"/>,
          <circle key={`b${i}`} cx={x+16} cy={y+18} r="10" fill="#fbbf24"/>
        ])}
        {panel===2 && [[74,98],[154,132]].map(([x,y],i)=><g key={i}>
          <circle cx={x-15} cy={y} r="10" fill="#22d3ee"/><circle cx={x} cy={y} r="10" fill="#fbbf24"/><circle cx={x+15} cy={y} r="10" fill="#22d3ee"/>
        </g>)}
        <text x="38" y="188" fill="#94a3b8" fontSize="16">effective solute particles</text>
      </g>)}
    </svg>
  );
}

const navItems = [
  ["basics", "Foundations"],
  ["henry", "Gas solubility"],
  ["raoult", "Raoult law"],
  ["ideal", "Ideal & non-ideal"],
  ["vle", "VLE diagrams"],
  ["distillation", "Distillation"],
  ["colligative", "Colligative properties"],
  ["vapour-lowering", "Vapour-pressure lowering"],
  ["boiling", "Boiling-point elevation"],
  ["freezing", "Freezing-point depression"],
  ["osmosis", "Osmosis"],
  ["abnormal", "van’t Hoff factor"],
  ["revision", "Rapid revision"],
] as const;

export default function LiquidSolutionsJEEAdvanced() {
  return (
    <main className="ls-page">
      <style>{`
        :root {
          color-scheme: dark;
          --ls-bg: #050816;
          --ls-panel: rgba(15, 23, 42, 0.78);
          --ls-panel-strong: rgba(15, 23, 42, 0.94);
          --ls-border: rgba(148, 163, 184, 0.20);
          --ls-text: #e5eefb;
          --ls-muted: #9fb0c8;
          --ls-cyan: #22d3ee;
          --ls-violet: #a78bfa;
          --ls-amber: #fbbf24;
          --ls-emerald: #34d399;
          --ls-rose: #f472b6;
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        .ls-page {
          min-height: 100vh;
          color: var(--ls-text);
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          line-height: 1.66;
          background:
            radial-gradient(circle at 13% 2%, rgba(34,211,238,.13), transparent 28rem),
            radial-gradient(circle at 88% 13%, rgba(167,139,250,.12), transparent 30rem),
            radial-gradient(circle at 50% 92%, rgba(244,114,182,.08), transparent 34rem),
            linear-gradient(180deg, #050816 0%, #071020 55%, #050816 100%);
          position: relative;
          overflow-x: hidden;
        }
        .ls-page::before {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: .20;
          background-image:
            linear-gradient(rgba(148,163,184,.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148,163,184,.12) 1px, transparent 1px);
          background-size: 42px 42px;
          mask-image: linear-gradient(to bottom, black, transparent 85%);
        }
        .ls-shell { width: min(1180px, calc(100% - 32px)); margin: 0 auto; position: relative; z-index: 1; }
        .ls-hero { padding: 72px 0 42px; }
        .ls-kicker { margin: 0 0 14px; color: var(--ls-cyan); font-size: 13px; font-weight: 850; letter-spacing: .16em; text-transform: uppercase; }
        .ls-hero h1 { margin: 0; max-width: 980px; font-size: clamp(42px, 7vw, 86px); line-height: .98; letter-spacing: -.055em; font-weight: 900; }
        .ls-hero h1 span { background: linear-gradient(90deg, #e2f7ff, #67e8f9 42%, #c4b5fd 78%, #f9a8d4); -webkit-background-clip: text; color: transparent; }
        .ls-hero-copy { max-width: 820px; margin: 26px 0 0; color: #b8c5d8; font-size: clamp(17px, 2vw, 21px); }
        .ls-hero-meta { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 28px; }
        .ls-pill { border: 1px solid var(--ls-border); background: rgba(15,23,42,.70); padding: 8px 13px; border-radius: 999px; color: #cbd5e1; font-size: 13px; font-weight: 700; }
        .ls-nav { position: sticky; top: 0; z-index: 30; backdrop-filter: blur(18px); background: rgba(5,8,22,.76); border-block: 1px solid rgba(148,163,184,.14); }
        .ls-nav-inner { display: flex; gap: 9px; overflow-x: auto; scrollbar-width: none; padding: 12px 0; }
        .ls-nav-inner::-webkit-scrollbar { display: none; }
        .ls-nav a { flex: 0 0 auto; color: #b6c3d5; text-decoration: none; border: 1px solid rgba(148,163,184,.18); border-radius: 999px; padding: 8px 12px; font-size: 13px; font-weight: 750; transition: .2s ease; }
        .ls-nav a:hover { color: #fff; border-color: rgba(34,211,238,.55); background: rgba(34,211,238,.08); }
        .ls-content { padding: 26px 0 110px; }
        .ls-section { scroll-margin-top: 78px; margin-top: 66px; }
        .ls-section-heading { display: grid; grid-template-columns: 54px 1fr; gap: 18px; align-items: start; margin-bottom: 24px; }
        .ls-section-number { display: grid; place-items: center; width: 52px; height: 52px; border-radius: 16px; border: 1px solid rgba(34,211,238,.30); background: linear-gradient(145deg, rgba(34,211,238,.16), rgba(167,139,250,.10)); color: #cffafe; font-weight: 900; }
        .ls-eyebrow { margin: 1px 0 3px; color: var(--ls-cyan); font-size: 12px; letter-spacing: .15em; text-transform: uppercase; font-weight: 850; }
        .ls-section h2 { margin: 0; font-size: clamp(30px, 4vw, 48px); line-height: 1.1; letter-spacing: -.035em; }
        .ls-section h3 { margin: 0 0 10px; font-size: 20px; line-height: 1.3; letter-spacing: -.015em; }
        .ls-section p { color: #c4d0e0; margin: 0 0 13px; }
        .ls-lead { font-size: 18px; color: #d6e1ef !important; max-width: 980px; }
        .ls-grid-2, .ls-grid-3, .ls-grid-4 { display: grid; gap: 16px; }
        .ls-grid-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .ls-grid-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        .ls-grid-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
        .ls-card, .ls-example, .ls-figure, .ls-table-wrap {
          border: 1px solid var(--ls-border);
          border-radius: 24px;
          background: linear-gradient(145deg, rgba(15,23,42,.90), rgba(9,15,30,.78));
          box-shadow: 0 18px 60px rgba(0,0,0,.24), inset 0 1px 0 rgba(255,255,255,.025);
        }
        .ls-card { padding: 22px; position: relative; overflow: hidden; }
        .ls-card::before { content:""; position:absolute; inset:0 auto auto 0; width:100%; height:3px; opacity:.82; }
        .ls-card-cyan::before { background: linear-gradient(90deg, var(--ls-cyan), transparent); }
        .ls-card-violet::before { background: linear-gradient(90deg, var(--ls-violet), transparent); }
        .ls-card-amber::before { background: linear-gradient(90deg, var(--ls-amber), transparent); }
        .ls-card-emerald::before { background: linear-gradient(90deg, var(--ls-emerald), transparent); }
        .ls-card-rose::before { background: linear-gradient(90deg, var(--ls-rose), transparent); }
        .ls-card ul, .ls-card ol, .ls-example ul, .ls-example ol { margin: 8px 0 0; padding-left: 22px; color: #c6d2e2; }
        .ls-card li, .ls-example li { margin: 7px 0; }
        .ls-formula-card { border: 1px solid var(--ls-border); border-radius: 19px; background: rgba(15,23,42,.88); padding: 15px 18px; margin: 14px 0; overflow-x: auto; }
        .ls-formula-label { margin: 0 0 5px !important; color: #91a3bb !important; font-size: 11px; font-weight: 850; letter-spacing: .13em; text-transform: uppercase; }
        .ls-formula { color: #f8fafc; font-family: "SF Mono", ui-monospace, Menlo, Monaco, Consolas, monospace; font-size: clamp(16px, 2vw, 21px); white-space: normal; letter-spacing: -.02em; }
        .ls-inline-eq { display: inline-block; color: #f8fafc; font-family: "SF Mono", ui-monospace, Menlo, Monaco, Consolas, monospace; padding: 1px 5px; border-radius: 7px; background: rgba(99,102,241,.13); }
        .ls-keypoint { border-radius: 18px; padding: 15px 18px; margin: 16px 0; border: 1px solid; font-weight: 650; color: #dbe7f6; }
        .ls-keypoint-cyan { border-color: rgba(34,211,238,.28); background: rgba(34,211,238,.08); }
        .ls-keypoint-violet { border-color: rgba(167,139,250,.28); background: rgba(167,139,250,.08); }
        .ls-keypoint-amber { border-color: rgba(251,191,36,.28); background: rgba(251,191,36,.08); }
        .ls-keypoint-emerald { border-color: rgba(52,211,153,.28); background: rgba(52,211,153,.08); }
        .ls-keypoint-rose { border-color: rgba(244,114,182,.28); background: rgba(244,114,182,.08); }
        .ls-figure { padding: 14px; margin: 18px 0; overflow: hidden; }
        .ls-svg { width: 100%; height: auto; display: block; font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", sans-serif; }
        .ls-example { margin: 18px 0; overflow: hidden; }
        .ls-example-head { padding: 17px 20px 14px; border-bottom: 1px solid var(--ls-border); background: linear-gradient(90deg, rgba(167,139,250,.10), rgba(34,211,238,.05)); }
        .ls-example-head span { color: var(--ls-violet); font-size: 11px; font-weight: 900; letter-spacing: .14em; }
        .ls-example-head h3 { margin: 3px 0 0; font-size: 19px; }
        .ls-example-body { padding: 20px; }
        .ls-example-body > p:last-child { margin-bottom: 0; }
        .ls-given { display: flex; gap: 8px; flex-wrap: wrap; margin: 8px 0 12px; }
        .ls-given span { border: 1px solid rgba(148,163,184,.18); background: rgba(2,6,23,.45); border-radius: 10px; padding: 5px 9px; color: #d6e1ef; font-family: "SF Mono", ui-monospace, monospace; font-size: 13px; }
        .ls-steps { counter-reset: step; list-style: none; padding: 0 !important; margin-top: 14px !important; }
        .ls-steps li { position: relative; padding: 0 0 0 36px; min-height: 26px; }
        .ls-steps li::before { counter-increment: step; content: counter(step); position: absolute; left: 0; top: 1px; width: 24px; height: 24px; display:grid; place-items:center; border-radius: 8px; color:#cffafe; background:rgba(34,211,238,.14); border:1px solid rgba(34,211,238,.22); font-size:12px; font-weight:850; }
        .ls-answer { color: #d9f99d !important; font-weight: 850; }
        .ls-table-wrap { overflow-x: auto; margin: 18px 0; }
        .ls-table { width: 100%; border-collapse: collapse; min-width: 650px; }
        .ls-table th, .ls-table td { padding: 13px 15px; border-bottom: 1px solid rgba(148,163,184,.13); text-align: left; vertical-align: top; }
        .ls-table th { color: #e2e8f0; background: rgba(30,41,59,.72); font-size: 12px; letter-spacing: .07em; text-transform: uppercase; }
        .ls-table td { color: #c5d2e3; }
        .ls-table tr:last-child td { border-bottom: 0; }
        .ls-mini-title { margin: 24px 0 10px; color: #f8fafc; font-size: 22px; letter-spacing: -.02em; }
        .ls-symbol { color: var(--ls-amber); font-family: "SF Mono", ui-monospace, monospace; font-weight: 800; }
        .ls-separator { height: 1px; margin: 26px 0; background: linear-gradient(90deg, transparent, rgba(148,163,184,.32), transparent); }
        .ls-revision-grid { display:grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap:14px; }
        .ls-check { margin:0; padding:0; list-style:none; }
        .ls-check li { position:relative; padding-left:28px; margin:9px 0; color:#c6d2e2; }
        .ls-check li::before { content:"✓"; position:absolute; left:0; color:var(--ls-emerald); font-weight:900; }
        .ls-footer-note { margin-top: 44px; padding: 20px; border: 1px solid rgba(34,211,238,.20); border-radius: 20px; background: rgba(34,211,238,.05); color: #bcd0e3; }
        @media (max-width: 900px) {
          .ls-grid-3, .ls-grid-4 { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .ls-revision-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 680px) {
          .ls-shell { width: min(100% - 22px, 1180px); }
          .ls-hero { padding-top: 48px; }
          .ls-grid-2, .ls-grid-3, .ls-grid-4 { grid-template-columns: 1fr; }
          .ls-section { margin-top: 50px; }
          .ls-section-heading { grid-template-columns: 44px 1fr; gap: 12px; }
          .ls-section-number { width:44px; height:44px; border-radius:13px; }
          .ls-card, .ls-example-body { padding: 17px; }
          .ls-figure { padding: 4px; border-radius: 18px; }
          .ls-table th, .ls-table td { padding: 11px 12px; }
        }
        @media print {
          .ls-page { background:#fff; color:#111827; }
          .ls-page::before, .ls-nav { display:none; }
          .ls-card, .ls-example, .ls-figure, .ls-table-wrap, .ls-formula-card { box-shadow:none; background:#fff; border-color:#cbd5e1; break-inside:avoid; }
          .ls-section p, .ls-card li, .ls-example li, .ls-table td { color:#334155; }
          .ls-section h2, .ls-section h3, .ls-formula { color:#111827; }
        }
      `}</style>

      <header className="ls-hero">
        <div className="ls-shell">
          <p className="ls-kicker">JEE Advanced • Physical Chemistry • Master Chapter</p>
          <h1><span>Liquid Solutions</span></h1>
          <p className="ls-hero-copy">
            A rigorous, diagram-rich treatment of solution thermodynamics, vapour–liquid equilibrium,
            distillation and colligative properties—built for multi-concept JEE Advanced problems.
          </p>
          <div className="ls-hero-meta">
            <span className="ls-pill">Complete theory + derivations</span>
            <span className="ls-pill">30 altered worked examples</span>
            <span className="ls-pill">Inline SVG figures</span>
            <span className="ls-pill">JEE traps and limiting cases</span>
          </div>
        </div>
      </header>

      <nav className="ls-nav" aria-label="Chapter navigation">
        <div className="ls-shell ls-nav-inner">
          {navItems.map(([href,label]) => <a key={href} href={`#${href}`}>{label}</a>)}
        </div>
      </nav>

      <div className="ls-shell ls-content">
        <Section id="basics" number="01" eyebrow="Language of solutions" title="Foundations, classification and concentration">
          <p className="ls-lead">
            A solution is a homogeneous phase containing two or more chemical species. The component present
            in the larger proportion is usually called the solvent; more fundamentally, the solvent is the
            component that fixes the physical state of the final solution.
          </p>
          <div className="ls-figure"><SolutionParticlesFigure /></div>

          <div className="ls-grid-3">
            <Card title="Solute and solvent" accent="cyan">
              <p>Both words describe roles, not intrinsic identities. Water is the solvent in dilute aqueous ethanol, but ethanol can be the solvent in a water-poor mixture.</p>
            </Card>
            <Card title="Homogeneity" accent="violet">
              <p>Composition is uniform on a macroscopic scale. Molecular fluctuations still occur, but no visible interface separates components.</p>
            </Card>
            <Card title="Physical state" accent="amber">
              <p>A solution may be solid, liquid or gaseous. Alloys, liquid mixtures and air are standard examples.</p>
            </Card>
          </div>

          <h3 className="ls-mini-title">Nine combinations of physical states</h3>
          <DataTable
            headers={["Solvent", "Solute", "Representative solution"]}
            rows={[
              ["Solid", "Solid", "Brass, bronze and substitutional alloys"],
              ["Solid", "Liquid", "Amalgams: mercury distributed in a metal"],
              ["Solid", "Gas", "Hydrogen absorbed in palladium"],
              ["Liquid", "Solid", "NaCl or glucose in water"],
              ["Liquid", "Liquid", "Ethanol in water; benzene–toluene"],
              ["Liquid", "Gas", "CO₂ in carbonated water"],
              ["Gas", "Solid", "Camphor or iodine vapour dispersed in air"],
              ["Gas", "Liquid", "Water droplets or volatile-liquid vapour in air"],
              ["Gas", "Gas", "Air and other homogeneous gas mixtures"],
            ]}
          />

          <h3 className="ls-mini-title">Concentration terms used throughout the chapter</h3>
          <div className="ls-grid-3">
            <FormulaCard title="Mole fraction" accent="cyan">xᵢ = nᵢ / Σnⱼ, &nbsp; Σxᵢ = 1</FormulaCard>
            <FormulaCard title="Molarity" accent="violet">C = nsolute / Vsolution(L)</FormulaCard>
            <FormulaCard title="Molality" accent="amber">m = nsolute / msolvent(kg)</FormulaCard>
            <FormulaCard title="Mass percent" accent="emerald">% w/w = (msolute / msolution) × 100</FormulaCard>
            <FormulaCard title="Volume percent" accent="rose">% v/v = (Vsolute / Vsolution) × 100</FormulaCard>
            <FormulaCard title="Parts per million" accent="cyan">ppm = mass fraction × 10⁶</FormulaCard>
          </div>
          <KeyPoint tone="amber">
            <strong>Temperature sensitivity:</strong> molarity changes when volume changes with temperature; molality, mole fraction and mass percent do not.
          </KeyPoint>
        </Section>

        <Section id="henry" number="02" eyebrow="Gas in liquid" title="Solubility of gases and Henry’s law">
          <p className="ls-lead">
            At equilibrium, dissolution and escape of gas molecules continue at equal rates. The equilibrium
            amount depends on gas–solvent affinity, gas partial pressure and temperature.
          </p>
          <div className="ls-figure"><HenryFigure /></div>

          <div className="ls-grid-3">
            <Card title="Nature of gas and solvent" accent="cyan">
              <p>“Like dissolves like” is a useful first filter. Polar or reactive gases such as NH₃ and HCl are far more soluble in water than non-polar gases.</p>
              <p>Noble-gas solubility in water generally rises from He to Xe because polarizability increases.</p>
            </Card>
            <Card title="Pressure" accent="violet">
              <p>Increasing the gas partial pressure raises the collision frequency at the liquid surface and therefore raises the equilibrium dissolved amount.</p>
            </Card>
            <Card title="Temperature" accent="rose">
              <p>Dissolution of most gases is exothermic. Heating therefore shifts equilibrium toward the gas phase and lowers solubility.</p>
            </Card>
          </div>

          <FormulaCard title="Henry’s law" accent="cyan">pᵢ = Kₕ,ᵢ xᵢ</FormulaCard>
          <p>
            Here <Eq>pᵢ</Eq> is the partial pressure of gas <em>i</em> above the solution and <Eq>xᵢ</Eq> is its mole fraction in the liquid.
            A larger <Eq>Kₕ</Eq> means a smaller dissolved mole fraction at the same pressure, hence lower solubility.
          </p>

          <div className="ls-grid-2">
            <Card title="Valid regime" accent="emerald">
              <ul>
                <li>Dilute dissolved gas</li>
                <li>Low to moderate pressure</li>
                <li>Gas behaves nearly ideally</li>
                <li>No chemical reaction, ionisation or association in the solvent</li>
              </ul>
            </Card>
            <Card title="Temperature relation" accent="amber">
              <p>For exothermic dissolution, <Eq>Kₕ</Eq> increases with temperature. A van’t Hoff form may be written for a concentration-based equilibrium constant:</p>
              <FormulaCard>ln(K₂/K₁) = −ΔHsol/R · (1/T₂ − 1/T₁)</FormulaCard>
            </Card>
          </div>

          <WorkedExample number="2.1" title="Mass of nitrogen dissolved under pressure">
            <p>Find the mass of N₂ dissolved in 600 g water at 298 K when its partial pressure is 6.0 bar. Take <Eq>Kₕ = 5.00 × 10⁴ bar</Eq>.</p>
            <div className="ls-given"><span>p = 6.0 bar</span><span>Kₕ = 5.00 × 10⁴ bar</span><span>mwater = 600 g</span></div>
            <ol className="ls-steps">
              <li><Eq>xN₂ = p/Kₕ = 6/(5.00×10⁴) = 1.20×10⁻⁴</Eq>.</li>
              <li><Eq>nwater = 600/18 = 33.333 mol</Eq>.</li>
              <li>Using <Eq>x = ng/(ng + nwater)</Eq>, <Eq>ng = x nwater/(1−x) = 4.000×10⁻³ mol</Eq>.</li>
              <li><Eq>mN₂ = 4.000×10⁻³ × 28 = 0.112 g</Eq>.</li>
            </ol>
            <p className="ls-answer">Answer: 0.112 g N₂.</p>
          </WorkedExample>

          <WorkedExample number="2.2" title="Composition of two gases dissolved from a mixture">
            <p>A gas mixture contains 18.0% O₂ and 82.0% N₂ by volume at a total pressure of 12.0 bar. At the same temperature, <Eq>Kₕ(O₂)=45 kbar</Eq> and <Eq>Kₕ(N₂)=90 kbar</Eq>. Find the molar ratio of dissolved O₂ to N₂.</p>
            <ol className="ls-steps">
              <li><Eq>pO₂ = 0.18×12 = 2.16 bar</Eq>; <Eq>pN₂ = 9.84 bar</Eq>.</li>
              <li>For a common large solvent amount, dissolved moles are proportional to liquid mole fractions.</li>
              <li><Eq>nO₂/nN₂ = (pO₂/Kₕ,O₂)/(pN₂/Kₕ,N₂)</Eq>.</li>
              <li><Eq>= (2.16/45000)/(9.84/90000) = 0.439</Eq>.</li>
            </ol>
            <p className="ls-answer">Answer: n(O₂) : n(N₂) = 0.439 : 1.</p>
          </WorkedExample>

          <WorkedExample number="2.3" title="Why the volume of dissolved gas can be pressure-independent">
            <p>Show that for a very large amount of liquid at fixed temperature, the volume of gas dissolved, when measured at the same pressure at which dissolution occurs, is independent of that pressure.</p>
            <ol className="ls-steps">
              <li>For a dilute solution, <Eq>xgas ≈ ngas/nsolvent</Eq>.</li>
              <li>Henry’s law gives <Eq>p = Kₕ ngas/nsolvent</Eq>, so <Eq>ngas = p nsolvent/Kₕ</Eq>.</li>
              <li>At the same pressure, <Eq>Vgas = ngasRT/p</Eq>.</li>
              <li>Substitution gives <Eq>Vgas = nsolventRT/Kₕ</Eq>, which contains no pressure term.</li>
            </ol>
            <p className="ls-answer">The result requires dilute solution, fixed temperature and a practically unchanged solvent amount.</p>
          </WorkedExample>
        </Section>

        <Section id="raoult" number="03" eyebrow="Volatile liquids" title="Dalton’s law, Raoult’s law and vapour composition">
          <p className="ls-lead">
            In a binary liquid mixture, each component contributes a partial vapour pressure. Dalton’s law adds
            those partial pressures; Raoult’s law connects each partial pressure to liquid composition.
          </p>
          <div className="ls-figure"><RaoultFigure /></div>

          <FormulaCard title="Binary ideal solution" accent="violet">
            pᴬ = xᴬp°ᴬ, &nbsp; pᴮ = xᴮp°ᴮ, &nbsp; P = pᴬ + pᴮ = xᴬp°ᴬ + xᴮp°ᴮ
          </FormulaCard>
          <FormulaCard title="Vapour composition" accent="cyan">
            yᴬ = pᴬ/P = xᴬp°ᴬ/P, &nbsp; yᴮ = xᴮp°ᴮ/P
          </FormulaCard>
          <FormulaCard title="Dew-pressure relation" accent="amber">
            1/Pdew = yᴬ/p°ᴬ + yᴮ/p°ᴮ
          </FormulaCard>

          <KeyPoint tone="cyan">
            The vapour is richer in the more volatile component—the one having the larger pure vapour pressure at that temperature.
          </KeyPoint>

          <WorkedExample number="3.1" title="Total pressure and vapour composition">
            <p>An ideal solution contains 2.00 mol A and 3.00 mol B. At the chosen temperature, <Eq>p°A=360 torr</Eq> and <Eq>p°B=180 torr</Eq>. Calculate partial pressures, total pressure and vapour composition.</p>
            <ol className="ls-steps">
              <li><Eq>xA=2/5=0.400</Eq>, <Eq>xB=0.600</Eq>.</li>
              <li><Eq>pA=0.400×360=144 torr</Eq>.</li>
              <li><Eq>pB=0.600×180=108 torr</Eq>.</li>
              <li><Eq>P=252 torr</Eq>.</li>
              <li><Eq>yA=144/252=0.5714</Eq>, <Eq>yB=0.4286</Eq>.</li>
            </ol>
            <p className="ls-answer">The vapour is enriched in A because p°A &gt; p°B.</p>
          </WorkedExample>

          <WorkedExample number="3.2" title="Determine pure vapour pressures from two measurements">
            <p>Five moles of A and three moles of B form an ideal solution with total pressure 64 kPa. After adding 2 mol B, the pressure becomes 68 kPa. Find <Eq>p°A</Eq> and <Eq>p°B</Eq>.</p>
            <ol className="ls-steps">
              <li>First mixture: <Eq>(5/8)p°A + (3/8)p°B = 64</Eq>, so <Eq>5p°A+3p°B=512</Eq>.</li>
              <li>Second mixture: <Eq>(5/10)p°A+(5/10)p°B=68</Eq>, so <Eq>p°A+p°B=136</Eq>.</li>
              <li>Substitute <Eq>p°A=136−p°B</Eq> into the first equation.</li>
              <li><Eq>5(136−p°B)+3p°B=512</Eq> gives <Eq>p°B=84 kPa</Eq>.</li>
              <li><Eq>p°A=52 kPa</Eq>.</li>
            </ol>
            <p className="ls-answer">Answer: p°A = 52 kPa; p°B = 84 kPa.</p>
          </WorkedExample>

          <WorkedExample number="3.3" title="Liquid and vapour compositions are not equal">
            <p>For an ideal solution, <Eq>xB=0.350</Eq>, <Eq>p°A=40 kPa</Eq> and <Eq>p°B=80 kPa</Eq>. Find total pressure and <Eq>yB</Eq>.</p>
            <ol className="ls-steps">
              <li><Eq>xA=0.650</Eq>.</li>
              <li><Eq>P=0.650×40+0.350×80=54.0 kPa</Eq>.</li>
              <li><Eq>yB=pB/P=(0.350×80)/54=0.5185</Eq>.</li>
            </ol>
            <p className="ls-answer">Answer: P = 54.0 kPa and yB = 0.519.</p>
          </WorkedExample>

          <WorkedExample number="3.4" title="Recover both pure vapour pressures from x, y and P">
            <p>At equilibrium, <Eq>xA=0.450</Eq>, <Eq>yA=0.300</Eq> and <Eq>P=72.0 kPa</Eq>. Find the pure vapour pressures.</p>
            <ol className="ls-steps">
              <li><Eq>pA=yAP=0.300×72=21.6 kPa</Eq>.</li>
              <li><Eq>p°A=pA/xA=21.6/0.450=48.0 kPa</Eq>.</li>
              <li><Eq>pB=0.700×72=50.4 kPa</Eq>, while <Eq>xB=0.550</Eq>.</li>
              <li><Eq>p°B=50.4/0.550=91.64 kPa</Eq>.</li>
            </ol>
            <p className="ls-answer">Answer: p°A = 48.0 kPa; p°B = 91.6 kPa.</p>
          </WorkedExample>
        </Section>

        <Section id="ideal" number="04" eyebrow="Molecular interpretation" title="Ideal solutions, deviations and excess functions">
          <p className="ls-lead">
            A thermodynamically ideal solution obeys Raoult’s law for every component over the complete composition
            range. Its molecules mix randomly because unlike and like intermolecular interactions are nearly equivalent.
          </p>

          <div className="ls-grid-2">
            <Card title="Ideal-solution conditions" accent="emerald">
              <ul>
                <li>A–A ≈ B–B ≈ A–B interaction strengths</li>
                <li><Eq>ΔHmix = 0</Eq> and <Eq>ΔVmix = 0</Eq></li>
                <li><Eq>ΔUmix = 0</Eq> for condensed phases at ordinary pressure</li>
                <li><Eq>ΔSmix &gt; 0</Eq>, therefore <Eq>ΔGmix &lt; 0</Eq></li>
                <li>No association, dissociation or chemical reaction</li>
              </ul>
            </Card>
            <Card title="Common near-ideal pairs" accent="cyan">
              <ul>
                <li>Benzene + toluene</li>
                <li>n-Hexane + n-heptane</li>
                <li>Methanol + ethanol (approximate)</li>
                <li>CCl₄ + SiCl₄</li>
                <li>Structurally similar haloalkanes</li>
              </ul>
            </Card>
          </div>

          <div className="ls-figure"><DeviationsFigure /></div>
          <DataTable
            headers={["Feature", "Positive deviation", "Negative deviation"]}
            rows={[
              ["Relative A–B attraction", "Weaker than average of A–A and B–B", "Stronger than average"],
              ["Observed vapour pressure", "Above Raoult line", "Below Raoult line"],
              ["ΔHmix", "> 0 (endothermic)", "< 0 (exothermic)"],
              ["ΔVmix", "> 0, usually expansion", "< 0, usually contraction"],
              ["Boiling tendency", "Lower boiling; may form minimum-boiling azeotrope", "Higher boiling; may form maximum-boiling azeotrope"],
              ["Examples", "Ethanol–water; acetone–CS₂", "Chloroform–acetone; HNO₃–water"],
            ]}
          />

          <KeyPoint tone="violet">
            The sign of deviation is governed by escaping tendency, not by polarity labels alone. Compare the newly formed A–B interactions with the interactions broken during mixing.
          </KeyPoint>

          <WorkedExample number="4.1" title="Identify deviation from calorimetric data">
            <p>A mixture contracts by 1.8 cm³ per mole of solution and releases 2.6 kJ mol⁻¹ on mixing. Predict the sign of deviation from Raoult’s law.</p>
            <ol className="ls-steps">
              <li>Contraction means molecules pack more efficiently after mixing.</li>
              <li>Heat release means A–B attractions formed are stronger than the average attractions broken.</li>
              <li>Stronger A–B attraction lowers molecular escaping tendency.</li>
            </ol>
            <p className="ls-answer">Prediction: negative deviation from Raoult’s law.</p>
          </WorkedExample>
        </Section>

        <Section id="vle" number="05" eyebrow="Two-phase equilibrium" title="Bubble point, dew point, phase envelopes and lever rule">
          <p className="ls-lead">
            At a fixed temperature, compression of a vapour mixture first produces liquid at the dew pressure.
            Continued compression increases the liquid fraction until the last bubble disappears at the bubble pressure.
          </p>
          <div className="ls-figure"><PhaseEnvelopeFigure /></div>

          <div className="ls-grid-2">
            <Card title="Dew point" accent="cyan">
              <p>The system is initially all vapour. The first infinitesimal liquid drop appears at:</p>
              <FormulaCard>1/Pdew = Σ(yᵢ/p°ᵢ)</FormulaCard>
              <p>Its composition is <Eq>xᵢ = yᵢPdew/p°ᵢ</Eq>.</p>
            </Card>
            <Card title="Bubble point" accent="amber">
              <p>The system is initially all liquid. The first infinitesimal vapour bubble appears at:</p>
              <FormulaCard>Pbubble = Σ(xᵢp°ᵢ)</FormulaCard>
              <p>Its composition is <Eq>yᵢ = xᵢp°ᵢ/Pbubble</Eq>.</p>
            </Card>
          </div>

          <FormulaCard title="Lever rule at a fixed P and T" accent="violet">
            nᵥ/nₗ = (z − x)/(y − z) &nbsp; or &nbsp; vapour fraction β = (z − x)/(y − x)
          </FormulaCard>
          <p>Here <Eq>z</Eq> is the overall mole fraction, <Eq>x</Eq> the liquid composition and <Eq>y</Eq> the vapour composition of the same chosen component.</p>

          <WorkedExample number="5.1" title="Dew pressure and first-drop composition">
            <p>A vapour contains <Eq>yA=0.400</Eq>. At the temperature of interest, <Eq>p°A=0.500 atm</Eq> and <Eq>p°B=0.800 atm</Eq>. Find the pressure and composition of the first liquid drop.</p>
            <ol className="ls-steps">
              <li><Eq>1/Pdew = 0.400/0.500 + 0.600/0.800 = 1.55 atm⁻¹</Eq>.</li>
              <li><Eq>Pdew = 0.6452 atm</Eq>.</li>
              <li><Eq>xA = yAP/p°A = 0.400×0.6452/0.500 = 0.5161</Eq>.</li>
              <li><Eq>xB=0.4839</Eq>. The first liquid is richer in less volatile A.</li>
            </ol>
            <p className="ls-answer">Answer: Pdew = 0.645 atm; xA(first drop) = 0.516.</p>
          </WorkedExample>

          <WorkedExample number="5.2" title="Amount of each phase by the lever rule">
            <p>For the same liquids, a system at <Eq>P=0.700 atm</Eq> has overall composition <Eq>zA=0.280</Eq>. Determine equilibrium liquid and vapour compositions and phase fractions.</p>
            <ol className="ls-steps">
              <li>Bubble equation: <Eq>0.700=xA(0.500)+(1−xA)(0.800)</Eq>.</li>
              <li><Eq>xA=(0.800−0.700)/(0.800−0.500)=0.3333</Eq>.</li>
              <li><Eq>yA=xAp°A/P=0.3333×0.500/0.700=0.2381</Eq>.</li>
              <li><Eq>β=(z−x)/(y−x)=(0.280−0.3333)/(0.2381−0.3333)=0.560</Eq>.</li>
              <li>Liquid fraction <Eq>=1−β=0.440</Eq>.</li>
            </ol>
            <p className="ls-answer">Answer: 56.0% vapour and 44.0% liquid by moles.</p>
          </WorkedExample>

          <WorkedExample number="5.3" title="Repeated condensation enrichment">
            <p>An equimolar liquid of A and B is equilibrated. Its vapour is withdrawn, completely condensed, and that condensate is used as the liquid feed for the next identical stage. If <Eq>p°B/p°A=1.80</Eq>, find the mole fraction of B in the third condensate.</p>
            <ol className="ls-steps">
              <li>At each equilibrium vaporisation, <Eq>yB/yA=(xB/xA)(p°B/p°A)</Eq>. Complete condensation preserves that vapour composition as the next liquid feed.</li>
              <li><Eq>(xB/xA)₃=(yB/yA)initial(p°B/p°A)³=1×1.80³=5.832</Eq>.</li>
              <li><Eq>xB=5.832/(1+5.832)=0.8536</Eq>.</li>
            </ol>
            <p className="ls-answer">Answer: xB = 0.854 in the third condensate.</p>
          </WorkedExample>

          <div className="ls-figure"><TxYFigure /></div>
          <KeyPoint tone="amber">
            In a <Eq>T–x–y</Eq> diagram at fixed pressure, the lower curve is the bubble curve and the upper curve is the dew curve. Below the bubble curve the system is liquid; above the dew curve it is vapour.
          </KeyPoint>

          <WorkedExample number="5.4" title="Normal boiling point from Clausius–Clapeyron">
            <p>A pure liquid has vapour pressure 0.600 atm at 300 K and <Eq>ΔHvap=30.0 kJ mol⁻¹</Eq>. Estimate its normal boiling point, assuming ΔHvap is constant.</p>
            <ol className="ls-steps">
              <li>At the normal boiling point <Eq>P₂=1.000 atm</Eq>.</li>
              <li><Eq>ln(P₂/P₁)=−ΔHvap/R(1/T₂−1/T₁)</Eq>.</li>
              <li><Eq>ln(1/0.600)=30000/8.314(1/300−1/T₂)</Eq>.</li>
              <li>Solving gives <Eq>T₂=313.3 K</Eq>.</li>
            </ol>
            <p className="ls-answer">Answer: normal boiling point ≈ 313.3 K (40.2 °C).</p>
          </WorkedExample>
        </Section>

        <Section id="distillation" number="06" eyebrow="Separation science" title="Distillation, steam distillation and azeotropes">
          <p className="ls-lead">
            Distillation separates liquids by repeatedly creating a vapour richer in the more volatile component
            and then condensing that vapour. Efficiency is controlled by relative volatility and the number of equilibrium stages.
          </p>
          <div className="ls-figure"><DistillationFigure /></div>

          <div className="ls-grid-3">
            <Card title="Simple distillation" accent="cyan">
              <p>Useful when one component is nonvolatile or when normal boiling points differ substantially. The distillate is richer in the more volatile component.</p>
            </Card>
            <Card title="Fractional distillation" accent="violet">
              <p>A fractionating column creates many evaporation–condensation stages and is preferred for close-boiling miscible liquids.</p>
            </Card>
            <Card title="Vacuum distillation" accent="amber">
              <p>Lowering external pressure lowers boiling temperature. It protects high-boiling substances that decompose near their normal boiling points.</p>
            </Card>
          </div>

          <h3 className="ls-mini-title">Steam distillation</h3>
          <p>
            For two immiscible liquids, each exerts its own pure vapour pressure. Boiling begins when
            <Eq>p°water + p°organic = Pexternal</Eq>, often well below either normal boiling point.
          </p>
          <FormulaCard title="Mass ratio in steam distillate" accent="emerald">
            morganic/mwater = (p°organic Morganic)/(p°water Mwater)
          </FormulaCard>

          <WorkedExample number="6.1" title="Composition of a steam distillate">
            <p>An immiscible organic liquid of molar mass 123 g mol⁻¹ is steam-distilled at a temperature where its vapour pressure is 120 torr and water vapour pressure is 640 torr. Find the mass percent of organic liquid in the distillate.</p>
            <ol className="ls-steps">
              <li><Eq>morg/mwater=(120×123)/(640×18)=1.28125</Eq>.</li>
              <li>Take water mass as 1 unit, then organic mass is 1.28125 units.</li>
              <li><Eq>mass % organic=1.28125/(1+1.28125)×100=56.16%</Eq>.</li>
            </ol>
            <p className="ls-answer">Answer: 56.2% by mass organic liquid.</p>
          </WorkedExample>

          <h3 className="ls-mini-title">Azeotropes</h3>
          <p>
            At the azeotropic composition, liquid and vapour compositions are identical: <Eq>xᵢ=yᵢ</Eq>.
            The mixture boils at constant composition and cannot be split into pure components by ordinary distillation.
          </p>
          <div className="ls-figure"><AzeotropeFigure /></div>
          <DataTable
            headers={["Deviation", "Azeotrope", "Vapour pressure", "Boiling point"]}
            rows={[
              ["Large positive", "Minimum-boiling", "Maximum at xaz", "Lower than both pure components"],
              ["Large negative", "Maximum-boiling", "Minimum at xaz", "Higher than both pure components"],
              ["Small deviation", "Usually none", "No interior extremum", "Complete separation may remain possible"],
            ]}
          />
          <KeyPoint tone="rose">
            On either side of an azeotrope, distillation drives one product toward the azeotrope—not through it. The azeotropic composition is a distillation boundary.
          </KeyPoint>
        </Section>

        <Section id="colligative" number="07" eyebrow="Particle counting" title="Colligative properties: one framework, four manifestations">
          <p className="ls-lead">
            For a dilute ideal solution containing a nonvolatile solute, colligative properties depend on the number
            of independently moving solute particles. The chemical identity of the solute enters only through particle count or non-ideality.
          </p>
          <div className="ls-grid-4">
            <Card title="Relative lowering of vapour pressure" accent="cyan"><p><Eq>(p°−p)/p°</Eq></p></Card>
            <Card title="Elevation of boiling point" accent="amber"><p><Eq>ΔTᵦ</Eq></p></Card>
            <Card title="Depression of freezing point" accent="violet"><p><Eq>ΔT𝒇</Eq></p></Card>
            <Card title="Osmotic pressure" accent="rose"><p><Eq>π</Eq></p></Card>
          </div>
          <FormulaCard title="Dilute-solution proportionality" accent="emerald">
            colligative effect ∝ number of solute particles ∝ effective concentration
          </FormulaCard>
          <KeyPoint tone="amber">
            The absolute vapour pressure, boiling point and freezing point are not themselves colligative properties. Their changes relative to the pure solvent are.
          </KeyPoint>
        </Section>

        <Section id="vapour-lowering" number="08" eyebrow="First colligative property" title="Lowering and relative lowering of vapour pressure">
          <p className="ls-lead">
            A nonvolatile solute reduces the mole fraction and surface availability of solvent. At equilibrium, the solvent
            vapour pressure therefore falls below that of the pure solvent at the same temperature.
          </p>
          <div className="ls-figure"><VapourLoweringFigure /></div>

          <FormulaCard title="Raoult law for a nonvolatile solute" accent="cyan">
            p = xsolvent p°
          </FormulaCard>
          <FormulaCard title="Lowering and relative lowering" accent="violet">
            p°−p = xsolute p°; &nbsp; (p°−p)/p° = xsolute
          </FormulaCard>
          <p>For a dilute solution, <Eq>xsolute ≈ nsolute/nsolvent</Eq>, so relative lowering gives a direct molar-mass method.</p>

          <WorkedExample number="8.1" title="Vapour pressure of a concentrated glucose solution">
            <p>A 12.0% w/w glucose solution has 12.0 g glucose in 100 g solution. At 25 °C, the vapour pressure of water is 23.76 torr. Find the solution vapour pressure.</p>
            <ol className="ls-steps">
              <li><Eq>nwater=88/18=4.8889 mol</Eq>; <Eq>nglucose=12/180=0.06667 mol</Eq>.</li>
              <li><Eq>xwater=4.8889/(4.8889+0.06667)=0.98655</Eq>.</li>
              <li><Eq>p=xwaterp°=0.98655×23.76=23.44 torr</Eq>.</li>
            </ol>
            <p className="ls-answer">Answer: p = 23.44 torr; lowering = 0.320 torr.</p>
          </WorkedExample>

          <WorkedExample number="8.2" title="Solute mass required for a specified relative lowering">
            <p>How much sucrose, M = 342 g mol⁻¹, must be dissolved in 400 g water so that the relative lowering of vapour pressure is exactly 1.50%?</p>
            <ol className="ls-steps">
              <li><Eq>xsolute=0.0150</Eq> and <Eq>nwater=400/18=22.222 mol</Eq>.</li>
              <li><Eq>0.0150=n/(n+22.222)</Eq>.</li>
              <li><Eq>n=0.33841 mol</Eq>.</li>
              <li><Eq>mass=0.33841×342=115.74 g</Eq>.</li>
            </ol>
            <p className="ls-answer">Answer: 115.7 g sucrose.</p>
          </WorkedExample>

          <h3 className="ls-mini-title">Experimental determination</h3>
          <div className="ls-grid-2">
            <Card title="Static manometric method" accent="violet">
              <p>Pure solvent and solution are connected to a differential manometer. At the same temperature:</p>
              <FormulaCard>p°−p = ρgh</FormulaCard>
            </Card>
            <Card title="Ostwald–Walker dynamic method" accent="cyan">
              <p>Dry air passes successively through solution, pure solvent and an absorber. Mass changes are proportional to <Eq>p</Eq>, <Eq>p°−p</Eq> and <Eq>p°</Eq>.</p>
            </Card>
          </div>
          <div className="ls-figure"><OstwaldWalkerFigure /></div>

          <WorkedExample number="8.3" title="Molar mass from the dynamic method">
            <p>Dry air loses 0.200 g of solvent while passing through a solution and the final absorber gains 0.206 g in total. The solution contains 9.00 g solute in 90.0 g water. Find the solute molar mass.</p>
            <ol className="ls-steps">
              <li><Eq>p/p°=0.200/0.206=0.970874=xwater</Eq>.</li>
              <li><Eq>xsolute=1−0.970874=0.029126</Eq>.</li>
              <li><Eq>nsolute/nwater=xsolute/xwater=0.03000</Eq>.</li>
              <li><Eq>nwater=90/18=5.00 mol</Eq>, hence <Eq>nsolute=0.150 mol</Eq>.</li>
              <li><Eq>M=9.00/0.150=60.0 g mol⁻¹</Eq>.</li>
            </ol>
            <p className="ls-answer">Answer: 60.0 g mol⁻¹.</p>
          </WorkedExample>
        </Section>

        <Section id="boiling" number="09" eyebrow="Second colligative property" title="Elevation of boiling point">
          <p className="ls-lead">
            A liquid boils when its vapour pressure equals external pressure. Because a nonvolatile solute lowers
            vapour pressure at every temperature, the solution must be heated to a higher temperature to boil.
          </p>
          <div className="ls-figure"><BoilingElevationFigure /></div>

          <FormulaCard title="Molal relation" accent="amber">ΔTᵦ = Kᵦm</FormulaCard>
          <FormulaCard title="Ebullioscopic constant" accent="violet">
            Kᵦ = R(T°ᵦ)²Msolvent / (1000 ΔHvap)
          </FormulaCard>
          <p>
            Use <Eq>Msolvent</Eq> in g mol⁻¹ when the factor 1000 is present, and keep the energy unit of <Eq>R</Eq> consistent with <Eq>ΔHvap</Eq>.
          </p>

          <WorkedExample number="9.1" title="Derive Kᵦ of water from thermodynamic data">
            <p>Estimate Kᵦ for water using <Eq>T°ᵦ=373.15 K</Eq>, <Eq>M=18.015 g mol⁻¹</Eq> and <Eq>ΔHvap=40.65 kJ mol⁻¹</Eq>.</p>
            <ol className="ls-steps">
              <li>Use <Eq>R=8.314 J mol⁻¹ K⁻¹</Eq> and <Eq>ΔHvap=40650 J mol⁻¹</Eq>.</li>
              <li><Eq>Kᵦ=8.314×(373.15)²×18.015/(1000×40650)</Eq>.</li>
              <li><Eq>Kᵦ=0.513 K kg mol⁻¹</Eq>.</li>
            </ol>
            <p className="ls-answer">Answer: approximately 0.513 K kg mol⁻¹.</p>
          </WorkedExample>

          <WorkedExample number="9.2" title="Boiling point of an aqueous urea solution">
            <p>Calculate the boiling point of an 8.00% w/w urea solution. Take <Eq>Kᵦ(water)=0.512 K kg mol⁻¹</Eq>.</p>
            <ol className="ls-steps">
              <li>In 100 g solution: urea = 8.00 g, water = 92.0 g = 0.0920 kg.</li>
              <li><Eq>nurea=8/60=0.13333 mol</Eq>.</li>
              <li><Eq>m=0.13333/0.0920=1.449 mol kg⁻¹</Eq>.</li>
              <li><Eq>ΔTᵦ=0.512×1.449=0.742 K</Eq>.</li>
            </ol>
            <p className="ls-answer">Answer: 100.742 °C at 1 atm.</p>
          </WorkedExample>

          <WorkedExample number="9.3" title="Glucose needed for a target boiling point">
            <p>How much glucose must be dissolved in 250 g water to raise its boiling point to 101.30 °C? Use <Eq>Kᵦ=0.512</Eq>.</p>
            <ol className="ls-steps">
              <li><Eq>ΔTᵦ=1.30 K</Eq>.</li>
              <li><Eq>m=1.30/0.512=2.539 mol kg⁻¹</Eq>.</li>
              <li>Moles glucose <Eq>=2.539×0.250=0.6348 mol</Eq>.</li>
              <li>Mass <Eq>=0.6348×180=114.3 g</Eq>.</li>
            </ol>
            <p className="ls-answer">Answer: 114.3 g glucose.</p>
          </WorkedExample>

          <WorkedExample number="9.4" title="Fraction of solvent evaporated during boiling">
            <p>A solution initially contains 3.00 mol nonvolatile solute in 1.20 kg water. It is boiled until its boiling point reaches 104.0 °C. Find the percentage of water evaporated. Use <Eq>Kᵦ=0.512</Eq>.</p>
            <ol className="ls-steps">
              <li><Eq>ΔTᵦ=4.00 K</Eq>, so final molality <Eq>m=4/0.512=7.8125</Eq>.</li>
              <li>Final solvent mass <Eq>=nsolute/m=3/7.8125=0.384 kg</Eq>.</li>
              <li>Water evaporated <Eq>=1.20−0.384=0.816 kg</Eq>.</li>
              <li>Percentage evaporated <Eq>=0.816/1.20×100=68.0%</Eq>.</li>
            </ol>
            <p className="ls-answer">Answer: 68.0% of the water evaporates.</p>
          </WorkedExample>
        </Section>

        <Section id="freezing" number="10" eyebrow="Third colligative property" title="Depression of freezing point">
          <p className="ls-lead">
            At the freezing point, chemical potential of solid solvent equals that of liquid solvent. A solute lowers
            the chemical potential of the liquid solvent but is normally excluded from the pure solid lattice; equilibrium therefore occurs at a lower temperature.
          </p>
          <div className="ls-figure"><FreezingDepressionFigure /></div>

          <FormulaCard title="Molal relation" accent="cyan">ΔT𝒇 = K𝒇m</FormulaCard>
          <FormulaCard title="Cryoscopic constant" accent="violet">
            K𝒇 = R(T°𝒇)²Msolvent / (1000 ΔHfus)
          </FormulaCard>
          <KeyPoint tone="emerald">
            The derivation assumes dilute ideal behaviour and formation of pure solid solvent. If the solute enters the solid phase or forms a compound, the simple equation fails.
          </KeyPoint>

          <WorkedExample number="10.1" title="Freezing point of ethylene glycol solution">
            <p>Find the freezing point when 15.0 g ethylene glycol, M = 62.0 g mol⁻¹, is dissolved in 300 g water. Take <Eq>K𝒇=1.86 K kg mol⁻¹</Eq>.</p>
            <ol className="ls-steps">
              <li><Eq>n=15/62=0.24194 mol</Eq>.</li>
              <li><Eq>m=0.24194/0.300=0.80645 mol kg⁻¹</Eq>.</li>
              <li><Eq>ΔT𝒇=1.86×0.80645=1.50 K</Eq>.</li>
            </ol>
            <p className="ls-answer">Answer: freezing point = −1.50 °C.</p>
          </WorkedExample>

          <WorkedExample number="10.2" title="Molar mass from freezing-point depression">
            <p>A 2.50 g nonelectrolyte dissolved in 75.0 g benzene lowers its freezing point by 0.800 K. For benzene, <Eq>K𝒇=5.12 K kg mol⁻¹</Eq>. Find molar mass.</p>
            <ol className="ls-steps">
              <li><Eq>m=ΔT𝒇/K𝒇=0.800/5.12=0.15625 mol kg⁻¹</Eq>.</li>
              <li>Solvent mass = 0.0750 kg, so moles solute <Eq>=0.15625×0.0750=0.0117188 mol</Eq>.</li>
              <li><Eq>M=2.50/0.0117188=213.3 g mol⁻¹</Eq>.</li>
            </ol>
            <p className="ls-answer">Answer: 213 g mol⁻¹.</p>
          </WorkedExample>
        </Section>

        <Section id="osmosis" number="11" eyebrow="Fourth colligative property" title="Osmosis, osmotic pressure and reverse osmosis">
          <p className="ls-lead">
            Diffusion is spontaneous motion down a concentration gradient. Osmosis is the net passage of solvent
            through a semipermeable membrane from lower solute activity toward higher solute activity.
          </p>
          <div className="ls-figure"><OsmosisFigure /></div>

          <div className="ls-grid-2">
            <Card title="Semipermeable membrane" accent="violet">
              <p>It permits solvent transfer but blocks solute on the experimental timescale. Real selectivity arises from molecular-size exclusion, solution–diffusion or both.</p>
            </Card>
            <Card title="Osmotic pressure, π" accent="rose">
              <p>The minimum pressure that must be applied to the solution to prevent net osmosis. A greater pressure drives reverse osmosis.</p>
            </Card>
          </div>

          <FormulaCard title="van’t Hoff equation for dilute solutions" accent="rose">
            πV = nRT; &nbsp; π = CRT
          </FormulaCard>
          <FormulaCard title="Two solutions with a common solvent" accent="cyan">
            Δπ = |C₁−C₂|RT
          </FormulaCard>
          <p>Osmotic pressure is exceptionally useful for macromolecules because it remains measurable at very low molar concentration and can be measured near room temperature.</p>

          <WorkedExample number="11.1" title="Osmotic pressure of glucose solution">
            <p>Find the osmotic pressure of 7.20% w/v glucose solution at 27 °C. Use <Eq>R=0.082057 L atm mol⁻¹ K⁻¹</Eq>.</p>
            <ol className="ls-steps">
              <li>7.20% w/v means 72.0 g glucose per litre.</li>
              <li><Eq>C=(72.0/180)=0.400 mol L⁻¹</Eq>.</li>
              <li><Eq>π=CRT=0.400×0.082057×300=9.847 atm</Eq>.</li>
            </ol>
            <p className="ls-answer">Answer: 9.85 atm.</p>
          </WorkedExample>

          <WorkedExample number="11.2" title="Pressure needed to stop osmosis between two solutions">
            <p>A 0.120 M urea solution and a 0.0350 M glucose solution are separated by an ideal membrane at 300 K. On which side should pressure be applied, and how much?</p>
            <ol className="ls-steps">
              <li>Both are nonelectrolytes, so compare molar concentrations directly.</li>
              <li>Solvent moves toward the 0.120 M urea side.</li>
              <li><Eq>Δπ=(0.120−0.0350)×0.082057×300=2.092 atm</Eq>.</li>
            </ol>
            <p className="ls-answer">Apply 2.09 atm excess pressure to the urea-solution side.</p>
          </WorkedExample>

          <WorkedExample number="11.3" title="Molar mass of a polymer by osmometry">
            <p>A 1.25 g polymer sample is dissolved to make 250 mL solution. At 300 K its osmotic pressure is 0.00410 atm. Find its molar mass.</p>
            <ol className="ls-steps">
              <li><Eq>πV=(w/M)RT</Eq>.</li>
              <li><Eq>M=wRT/(πV)</Eq>.</li>
              <li><Eq>M=1.25×0.082057×300/(0.00410×0.250)</Eq>.</li>
              <li><Eq>M=3.00×10⁴ g mol⁻¹</Eq>.</li>
            </ol>
            <p className="ls-answer">Answer: approximately 3.00 × 10⁴ g mol⁻¹.</p>
          </WorkedExample>

          <WorkedExample number="11.4" title="Mixing two solutions using osmotic pressures">
            <p>400 mL of a solution with osmotic pressure 6.0 atm is mixed with 600 mL of another solution with osmotic pressure 9.0 atm at the same temperature. Assume additive volumes and ideal behaviour. Find the final osmotic pressure.</p>
            <ol className="ls-steps">
              <li>At fixed temperature, moles of solute are proportional to <Eq>πV</Eq>.</li>
              <li><Eq>πfinal=(π₁V₁+π₂V₂)/(V₁+V₂)</Eq>.</li>
              <li><Eq>=(6.0×0.400+9.0×0.600)/1.000=7.80 atm</Eq>.</li>
            </ol>
            <p className="ls-answer">Answer: 7.80 atm.</p>
          </WorkedExample>
        </Section>

        <Section id="abnormal" number="12" eyebrow="Association and dissociation" title="Abnormal colligative properties and the van’t Hoff factor">
          <p className="ls-lead">
            If a solute dissociates, more particles are produced and the colligative effect increases. If particles associate,
            fewer independent entities remain and the effect decreases. The van’t Hoff factor measures this change.
          </p>
          <div className="ls-figure"><VantHoffFigure /></div>

          <FormulaCard title="Definition" accent="violet">
            i = observed colligative property / theoretical nonelectrolyte value = normal molar mass / observed molar mass
          </FormulaCard>
          <FormulaCard title="Dissociation into ν particles" accent="cyan">
            i = 1 + α(ν−1); &nbsp; α = (i−1)/(ν−1)
          </FormulaCard>
          <FormulaCard title="Association of n monomers into one n-mer" accent="amber">
            i = 1 − α(1−1/n); &nbsp; α = (1−i)/(1−1/n)
          </FormulaCard>
          <KeyPoint tone="rose">
            Electrolyte <Eq>i</Eq> approaches the stoichiometric particle count only at very high dilution. Ion pairing and long-range electrostatic interactions lower measured values at finite concentration.
          </KeyPoint>

          <DataTable
            headers={["Solute process", "Particle effect", "Expected i"]}
            rows={[
              ["Nonelectrolyte, no association", "No change", "1"],
              ["NaCl → Na⁺ + Cl⁻", "Two ions ideally", "approaches 2"],
              ["CaCl₂ → Ca²⁺ + 2Cl⁻", "Three ions ideally", "approaches 3"],
              ["Al₂(SO₄)₃ → 2Al³⁺ + 3SO₄²⁻", "Five ions ideally", "approaches 5"],
              ["2 CH₃COOH ⇌ (CH₃COOH)₂", "Dimerisation", "between 0.5 and 1"],
            ]}
          />

          <WorkedExample number="12.1" title="Freezing-point depression with partial dissociation">
            <p>A 0.100 m CaCl₂ solution is 75.0% dissociated. Calculate its freezing-point depression in water.</p>
            <ol className="ls-steps">
              <li>CaCl₂ gives <Eq>ν=3</Eq> particles on complete dissociation.</li>
              <li><Eq>i=1+α(ν−1)=1+0.750×2=2.50</Eq>.</li>
              <li><Eq>ΔT𝒇=iK𝒇m=2.50×1.86×0.100=0.465 K</Eq>.</li>
            </ol>
            <p className="ls-answer">Answer: ΔT𝒇 = 0.465 K.</p>
          </WorkedExample>

          <WorkedExample number="12.2" title="Association of benzoic acid in benzene">
            <p>Benzoic acid dimerises in benzene. If 60.0% of monomer units associate, find the van’t Hoff factor.</p>
            <ol className="ls-steps">
              <li>For dimerisation, <Eq>n=2</Eq>.</li>
              <li><Eq>i=1−α(1−1/2)</Eq>.</li>
              <li><Eq>i=1−0.600/2=0.700</Eq>.</li>
            </ol>
            <p className="ls-answer">Answer: i = 0.700.</p>
          </WorkedExample>

          <WorkedExample number="12.3" title="Boiling point with partial dimerisation">
            <p>9.00 g acetic acid is dissolved in 50.0 g benzene. The degree of dimerisation is 0.600. Take <Eq>Kᵦ(benzene)=2.60 K kg mol⁻¹</Eq> and normal boiling point 80.10 °C. Find the solution boiling point.</p>
            <ol className="ls-steps">
              <li>Initial molality <Eq>m=(9/60)/(0.0500)=3.00 m</Eq>.</li>
              <li>For dimerisation, <Eq>i=1−α/2=1−0.600/2=0.700</Eq>.</li>
              <li>Effective molality <Eq>=im=0.700×3.00=2.10 m</Eq>.</li>
              <li><Eq>ΔTᵦ=2.60×2.10=5.46 K</Eq>.</li>
              <li>Boiling point <Eq>=80.10+5.46=85.56 °C</Eq>.</li>
            </ol>
            <p className="ls-answer">Answer: 85.56 °C.</p>
          </WorkedExample>

          <WorkedExample number="12.4" title="Rank freezing points of equimolal solutions">
            <p>Rank the freezing points of 0.100 m aqueous solutions of urea, NaCl, CaCl₂ and AlCl₃, assuming complete dissociation.</p>
            <ol className="ls-steps">
              <li><Eq>ΔT𝒇=iK𝒇m</Eq>; all solutions have the same <Eq>K𝒇</Eq> and <Eq>m</Eq>.</li>
              <li>Ideal factors: urea 1, NaCl 2, CaCl₂ 3, AlCl₃ 4.</li>
              <li>Larger <Eq>i</Eq> means larger depression and therefore a lower freezing point.</li>
            </ol>
            <p className="ls-answer">Highest to lowest freezing point: urea &gt; NaCl &gt; CaCl₂ &gt; AlCl₃.</p>
          </WorkedExample>
        </Section>

        <Section id="revision" number="13" eyebrow="Exam-ready synthesis" title="Rapid revision matrix and JEE Advanced traps">
          <div className="ls-revision-grid">
            <Card title="Core equations" accent="cyan">
              <ul className="ls-check">
                <li><Eq>p=Kₕx</Eq></li>
                <li><Eq>pᵢ=xᵢp°ᵢ</Eq>; <Eq>P=Σpᵢ</Eq></li>
                <li><Eq>yᵢ=xᵢp°ᵢ/P</Eq></li>
                <li><Eq>1/Pdew=Σ(yᵢ/p°ᵢ)</Eq></li>
                <li><Eq>(p°−p)/p°=xsolute</Eq></li>
                <li><Eq>ΔTᵦ=iKᵦm</Eq>; <Eq>ΔT𝒇=iK𝒇m</Eq></li>
                <li><Eq>π=iCRT</Eq></li>
              </ul>
            </Card>
            <Card title="Graph logic" accent="violet">
              <ul className="ls-check">
                <li>P–x total line is linear only for an ideal liquid composition plot.</li>
                <li>P–y relation is curved even for ideal solutions.</li>
                <li>In P–x–y: above bubble curve is liquid; below dew curve is vapour.</li>
                <li>In T–x–y: below bubble curve is liquid; above dew curve is vapour.</li>
                <li>At an azeotrope, x = y and bubble/dew curves meet at an interior extremum.</li>
              </ul>
            </Card>
            <Card title="Units that frequently cost marks" accent="amber">
              <ul className="ls-check">
                <li>Convert solvent mass to kilograms for molality.</li>
                <li>Use kelvin in gas and van’t Hoff equations.</li>
                <li>Match pressure units in Henry’s law.</li>
                <li>Match joules or calories consistently in Kᵦ/K𝒇 derivations.</li>
                <li>Percent w/v means grams per 100 mL solution, not solvent.</li>
              </ul>
            </Card>
            <Card title="Conceptual traps" accent="rose">
              <ul className="ls-check">
                <li>A larger Henry constant means lower gas solubility.</li>
                <li>The more volatile component enriches the vapour, not necessarily the liquid.</li>
                <li>Small deviation does not automatically create an azeotrope.</li>
                <li>Colligative properties count effective particles; use i when association/dissociation occurs.</li>
                <li>Osmotic pressure is applied to the more concentrated side to stop osmosis.</li>
              </ul>
            </Card>
          </div>

          <h3 className="ls-mini-title">One-page comparison</h3>
          <DataTable
            headers={["Property", "Exact/primary relation", "Dilute working form", "Best molar-mass range"]}
            rows={[
              ["Relative VP lowering", "(p°−p)/p°=xsolute", "≈ nsolute/nsolvent", "Small molecules"],
              ["Boiling elevation", "Thermodynamic via μ equality", "ΔTᵦ=iKᵦm", "Small to medium solutes"],
              ["Freezing depression", "Thermodynamic via μ equality", "ΔT𝒇=iK𝒇m", "Small to medium solutes"],
              ["Osmotic pressure", "πV=inRT", "π=iCRT", "Excellent for polymers/biomolecules"],
            ]}
          />

          <div className="ls-footer-note">
            <strong>Final strategy:</strong> first identify the equilibrium being tested, then choose the composition basis
            (x, y or z), then write the governing law before substituting numbers. Most difficult liquid-solution questions
            are bookkeeping problems disguised as thermodynamics.
          </div>
        </Section>
      </div>
    </main>
  );
}
