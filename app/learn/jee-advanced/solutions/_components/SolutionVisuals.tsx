"use client";

export function AxisArrow({ id }: { id: string }) {
  return (
    <defs>
      <marker id={id} markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0,0 L0,6 L7,3 z" fill="currentColor" />
      </marker>
    </defs>
  );
}

export function SolutionParticlesFigure() {
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

export function HenryFigure() {
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

export function RaoultFigure() {
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

export function DeviationsFigure() {
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

export function PhaseEnvelopeFigure() {
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

export function TxYFigure() {
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

export function DistillationFigure() {
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

export function AzeotropeFigure() {
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

export function VapourLoweringFigure() {
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

export function OstwaldWalkerFigure() {
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

export function BoilingElevationFigure() {
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

export function FreezingDepressionFigure() {
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

export function OsmosisFigure() {
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

export function VantHoffFigure() {
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

