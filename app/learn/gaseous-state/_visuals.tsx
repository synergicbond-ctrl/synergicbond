"use client";

import React from "react";

export const ParticlePressureSVG = () => (
  <svg className="figureSvg" viewBox="0 0 760 330" role="img" aria-label="Gas molecules colliding with the walls of a container">
    <defs>
      <marker id="arrowCyan" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
        <path d="M0 0 L8 4 L0 8 Z" fill="currentColor" />
      </marker>
      <linearGradient id="boxGlow" x1="0" x2="1">
        <stop offset="0" stopColor="#14213d" />
        <stop offset="1" stopColor="#0b1325" />
      </linearGradient>
    </defs>
    <rect x="48" y="42" width="390" height="240" rx="22" fill="url(#boxGlow)" stroke="#6ee7f9" strokeWidth="3" />
    {[
      [92, 86, 152, 113], [171, 75, 227, 126], [278, 86, 350, 72], [350, 142, 407, 111],
      [92, 188, 145, 154], [175, 206, 235, 165], [269, 188, 325, 226], [346, 239, 405, 205],
      [125, 242, 170, 225], [250, 126, 284, 151],
    ].map(([x1, y1, x2, y2], i) => (
      <g key={i}>
        <circle cx={x1} cy={y1} r="9" fill="#f8fafc" opacity="0.96" />
        <line x1={x1 + 10} y1={y1} x2={x2} y2={y2} stroke={i % 2 ? "#a78bfa" : "#22d3ee"} strokeWidth="3" markerEnd="url(#arrowCyan)" />
      </g>
    ))}
    <line x1="438" y1="162" x2="540" y2="162" stroke="#fb7185" strokeWidth="5" markerEnd="url(#arrowCyan)" />
    <text x="495" y="140" fill="#fb7185" fontSize="23" fontWeight="700">momentum transfer</text>
    <text x="495" y="186" fill="#dbeafe" fontSize="22">pressure = force / area</text>
    <text x="495" y="225" fill="#94a3b8" fontSize="18">rapid elastic wall collisions</text>
  </svg>
);

export const ManometerSVG = () => (
  <svg className="figureSvg" viewBox="0 0 900 410" role="img" aria-label="Open-end and closed-end manometers">
    <defs>
      <linearGradient id="mercury" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#f59e0b" />
        <stop offset="1" stopColor="#b45309" />
      </linearGradient>
    </defs>
    <g transform="translate(30 20)">
      <text x="155" y="24" fill="#e2e8f0" fontSize="22" fontWeight="700">Open-end manometer</text>
      <path d="M110 90 V300 Q110 342 152 342 H250 Q292 342 292 300 V70" fill="none" stroke="#cbd5e1" strokeWidth="14" strokeLinecap="round" />
      <path d="M110 230 V300 Q110 326 150 326 H252 Q278 326 278 300 V160" fill="none" stroke="url(#mercury)" strokeWidth="12" strokeLinecap="round" />
      <line x1="305" y1="160" x2="305" y2="230" stroke="#22d3ee" strokeWidth="3" />
      <line x1="293" y1="160" x2="320" y2="160" stroke="#22d3ee" strokeWidth="3" />
      <line x1="293" y1="230" x2="320" y2="230" stroke="#22d3ee" strokeWidth="3" />
      <text x="326" y="202" fill="#22d3ee" fontSize="22">h</text>
      <text x="42" y="120" fill="#f0abfc" fontSize="20">gas</text>
      <line x1="75" y1="128" x2="110" y2="128" stroke="#f0abfc" strokeWidth="3" />
      <text x="247" y="56" fill="#86efac" fontSize="18">atmosphere</text>
      <text x="46" y="380" fill="#dbeafe" fontSize="18">Pgas = Patm ± ρgh</text>
    </g>
    <g transform="translate(480 20)">
      <text x="110" y="24" fill="#e2e8f0" fontSize="22" fontWeight="700">Closed-end manometer</text>
      <path d="M110 90 V300 Q110 342 152 342 H250 Q292 342 292 300 V70" fill="none" stroke="#cbd5e1" strokeWidth="14" strokeLinecap="round" />
      <path d="M110 250 V300 Q110 326 150 326 H252 Q278 326 278 300 V150" fill="none" stroke="url(#mercury)" strokeWidth="12" strokeLinecap="round" />
      <rect x="263" y="58" width="30" height="28" rx="10" fill="#0f172a" stroke="#cbd5e1" strokeWidth="4" />
      <line x1="305" y1="150" x2="305" y2="250" stroke="#22d3ee" strokeWidth="3" />
      <line x1="293" y1="150" x2="320" y2="150" stroke="#22d3ee" strokeWidth="3" />
      <line x1="293" y1="250" x2="320" y2="250" stroke="#22d3ee" strokeWidth="3" />
      <text x="326" y="207" fill="#22d3ee" fontSize="22">h</text>
      <text x="43" y="120" fill="#f0abfc" fontSize="20">gas</text>
      <text x="38" y="380" fill="#dbeafe" fontSize="18">Pgas = ρgh (vacuum above Hg)</text>
    </g>
  </svg>
);

export const GasLawGraphsSVG = () => (
  <svg className="figureSvg" viewBox="0 0 980 390" role="img" aria-label="Boyle, Charles and Gay-Lussac gas law graphs">
    {[
      { x: 45, title: "Boyle", xLabel: "V", yLabel: "P", path: "M90 80 C110 90 125 120 145 170 C175 230 235 270 290 280" },
      { x: 355, title: "Charles", xLabel: "T / K", yLabel: "V", path: "M400 280 L600 80" },
      { x: 665, title: "Gay-Lussac", xLabel: "T / K", yLabel: "P", path: "M710 280 L910 80" },
    ].map((g, i) => (
      <g key={g.title} transform={`translate(${g.x} 0)`}>
        <text x="125" y="35" fill="#f8fafc" fontSize="22" fontWeight="700">{g.title}</text>
        <line x1="45" y1="300" x2="280" y2="300" stroke="#64748b" strokeWidth="3" />
        <line x1="45" y1="300" x2="45" y2="60" stroke="#64748b" strokeWidth="3" />
        <path d={g.path} fill="none" stroke={i === 0 ? "#fb7185" : "#22d3ee"} strokeWidth="5" />
        <text x="265" y="334" fill="#94a3b8" fontSize="18">{g.xLabel}</text>
        <text x="15" y="70" fill="#94a3b8" fontSize="18">{g.yLabel}</text>
        <text x="82" y="365" fill="#cbd5e1" fontSize="16">{i === 0 ? "T, n constant" : i === 1 ? "P, n constant" : "V, n constant"}</text>
      </g>
    ))}
  </svg>
);

export const MaxwellSVG = () => (
  <svg className="figureSvg" viewBox="0 0 900 390" role="img" aria-label="Maxwell speed distribution at two temperatures">
    <line x1="85" y1="320" x2="835" y2="320" stroke="#64748b" strokeWidth="3" />
    <line x1="85" y1="320" x2="85" y2="45" stroke="#64748b" strokeWidth="3" />
    <path d="M90 320 C125 318 145 290 175 205 C205 120 255 85 315 120 C382 160 425 248 500 293 C590 345 730 319 830 319" fill="none" stroke="#a78bfa" strokeWidth="5" />
    <path d="M90 320 C150 317 195 295 260 244 C330 188 405 165 485 184 C585 208 658 270 735 300 C780 317 810 319 830 319" fill="none" stroke="#22d3ee" strokeWidth="5" />
    <line x1="285" y1="115" x2="285" y2="320" stroke="#a78bfa" strokeWidth="2" strokeDasharray="8 8" />
    <line x1="470" y1="180" x2="470" y2="320" stroke="#22d3ee" strokeWidth="2" strokeDasharray="8 8" />
    <text x="244" y="86" fill="#c4b5fd" fontSize="20" fontWeight="700">T₁</text>
    <text x="503" y="166" fill="#67e8f9" fontSize="20" fontWeight="700">T₂ &gt; T₁</text>
    <text x="765" y="354" fill="#94a3b8" fontSize="18">speed</text>
    <text x="20" y="55" fill="#94a3b8" fontSize="18">fraction</text>
    <text x="205" y="350" fill="#c4b5fd" fontSize="17">u_mp shifts right</text>
    <text x="493" y="350" fill="#67e8f9" fontSize="17">curve broadens and lowers</text>
  </svg>
);

export const CollisionSVG = () => (
  <svg className="figureSvg" viewBox="0 0 900 350" role="img" aria-label="Collision cylinder used to derive collision frequency and mean free path">
    <defs>
      <linearGradient id="tube" x1="0" x2="1">
        <stop offset="0" stopColor="#0f172a" stopOpacity="0.15" />
        <stop offset="0.5" stopColor="#22d3ee" stopOpacity="0.24" />
        <stop offset="1" stopColor="#0f172a" stopOpacity="0.15" />
      </linearGradient>
    </defs>
    <ellipse cx="170" cy="178" rx="72" ry="78" fill="url(#tube)" stroke="#22d3ee" strokeWidth="3" />
    <rect x="170" y="100" width="520" height="156" fill="url(#tube)" stroke="#22d3ee" strokeWidth="3" />
    <ellipse cx="690" cy="178" rx="72" ry="78" fill="#0f172a" fillOpacity="0.5" stroke="#22d3ee" strokeWidth="3" />
    {[230, 300, 370, 455, 530, 605].map((x, i) => (
      <circle key={x} cx={x} cy={i % 2 ? 205 : 145} r="14" fill="#f8fafc" stroke="#a78bfa" strokeWidth="4" />
    ))}
    <circle cx="145" cy="178" r="16" fill="#fb7185" />
    <line x1="165" y1="178" x2="660" y2="178" stroke="#fb7185" strokeWidth="4" strokeDasharray="10 8" />
    <text x="340" y="76" fill="#dbeafe" fontSize="20">swept volume = πd² c̄ Δt</text>
    <text x="290" y="308" fill="#94a3b8" fontSize="18">collision frequency z₁ = √2 πd² n c̄</text>
  </svg>
);

export const CompressibilitySVG = () => (
  <svg className="figureSvg" viewBox="0 0 900 390" role="img" aria-label="Compressibility factor as a function of pressure">
    <line x1="90" y1="320" x2="840" y2="320" stroke="#64748b" strokeWidth="3" />
    <line x1="90" y1="320" x2="90" y2="45" stroke="#64748b" strokeWidth="3" />
    <line x1="90" y1="205" x2="840" y2="205" stroke="#f8fafc" strokeWidth="2" strokeDasharray="10 8" />
    <text x="46" y="211" fill="#f8fafc" fontSize="19">1</text>
    <path d="M90 205 C210 192 295 202 390 245 C500 290 620 230 820 90" fill="none" stroke="#22d3ee" strokeWidth="5" />
    <path d="M90 205 C270 190 470 150 820 75" fill="none" stroke="#fb7185" strokeWidth="5" />
    <text x="610" y="270" fill="#67e8f9" fontSize="19">CO₂-like: attraction then repulsion</text>
    <text x="580" y="120" fill="#fda4af" fontSize="19">H₂ / He at ordinary T</text>
    <text x="760" y="354" fill="#94a3b8" fontSize="18">P</text>
    <text x="35" y="60" fill="#94a3b8" fontSize="18">Z</text>
  </svg>
);

export const AndrewsSVG = () => (
  <svg className="figureSvg" viewBox="0 0 920 430" role="img" aria-label="Andrews isotherms and critical point">
    <line x1="80" y1="360" x2="850" y2="360" stroke="#64748b" strokeWidth="3" />
    <line x1="80" y1="360" x2="80" y2="45" stroke="#64748b" strokeWidth="3" />
    <path d="M115 80 C175 90 220 130 260 180 C315 245 405 260 500 260 C630 260 720 300 825 335" fill="none" stroke="#fb7185" strokeWidth="5" />
    <path d="M115 115 C190 125 240 170 305 220 C370 270 460 285 550 300 C670 320 760 333 825 341" fill="none" stroke="#a78bfa" strokeWidth="5" />
    <path d="M115 165 C190 180 235 230 310 275 C410 335 600 340 825 345" fill="none" stroke="#22d3ee" strokeWidth="5" />
    <circle cx="500" cy="260" r="10" fill="#facc15" />
    <text x="515" y="250" fill="#fde68a" fontSize="20">critical point</text>
    <text x="645" y="238" fill="#fda4af" fontSize="18">T &lt; Tc: two-phase plateau</text>
    <text x="645" y="294" fill="#c4b5fd" fontSize="18">T = Tc: inflection</text>
    <text x="645" y="330" fill="#67e8f9" fontSize="18">T &gt; Tc: single phase</text>
    <text x="790" y="396" fill="#94a3b8" fontSize="18">molar volume</text>
    <text x="24" y="60" fill="#94a3b8" fontSize="18">P</text>
  </svg>
);

export const PhaseDomeSVG = () => (
  <svg className="figureSvg" viewBox="0 0 900 390" role="img" aria-label="Liquid-vapour coexistence dome">
    <line x1="90" y1="320" x2="840" y2="320" stroke="#64748b" strokeWidth="3" />
    <line x1="90" y1="320" x2="90" y2="45" stroke="#64748b" strokeWidth="3" />
    <path d="M170 320 C220 260 275 185 360 115 C405 78 438 62 455 60 C475 62 510 82 560 125 C645 200 710 275 760 320" fill="#22d3ee" fillOpacity="0.08" stroke="#22d3ee" strokeWidth="5" />
    <circle cx="455" cy="60" r="10" fill="#facc15" />
    <line x1="270" y1="220" x2="650" y2="220" stroke="#fb7185" strokeWidth="4" strokeDasharray="11 7" />
    <text x="420" y="42" fill="#fde68a" fontSize="20">critical point</text>
    <text x="285" y="205" fill="#fda4af" fontSize="17">coexistence tie line</text>
    <text x="165" y="290" fill="#dbeafe" fontSize="18">liquid</text>
    <text x="700" y="290" fill="#dbeafe" fontSize="18">vapour</text>
    <text x="385" y="280" fill="#67e8f9" fontSize="18">liquid + vapour</text>
    <text x="755" y="354" fill="#94a3b8" fontSize="18">molar volume</text>
    <text x="22" y="60" fill="#94a3b8" fontSize="18">T or P</text>
  </svg>
);

export const BarometricSVG = () => (
  <svg className="figureSvg" viewBox="0 0 900 360" role="img" aria-label="Exponential decrease of pressure with altitude">
    <defs>
      <linearGradient id="sky" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0" stopColor="#0f172a" />
        <stop offset="1" stopColor="#1e3a8a" />
      </linearGradient>
    </defs>
    <rect x="40" y="40" width="350" height="270" rx="24" fill="url(#sky)" />
    <path d="M40 310 L130 235 L210 275 L300 170 L390 310 Z" fill="#334155" />
    <line x1="345" y1="278" x2="345" y2="90" stroke="#f8fafc" strokeWidth="3" />
    <text x="355" y="185" fill="#f8fafc" fontSize="20">h</text>
    <line x1="480" y1="310" x2="840" y2="310" stroke="#64748b" strokeWidth="3" />
    <line x1="480" y1="310" x2="480" y2="55" stroke="#64748b" strokeWidth="3" />
    <path d="M485 85 C540 105 585 145 625 195 C680 260 750 294 830 305" fill="none" stroke="#22d3ee" strokeWidth="5" />
    <text x="697" y="115" fill="#dbeafe" fontSize="20">P(h) = P₀e⁻ᴹᵍʰ⁄ᴿᵀ</text>
    <text x="805" y="344" fill="#94a3b8" fontSize="18">h</text>
    <text x="445" y="70" fill="#94a3b8" fontSize="18">P</text>
  </svg>
);

export const VisualFrame = ({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) => (
  <figure className="visualFrame">
    <div className="visualHeader"><strong>{title}</strong><span>{subtitle}</span></div>
    {children}
  </figure>
);

export const PressureUnitSVG = () => (
  <svg className="figureSvg compactSvg" viewBox="0 0 900 330" role="img" aria-label="Pressure unit conversion ladder">
    <defs><linearGradient id="unitGlow" x1="0" x2="1"><stop offset="0" stopColor="#22d3ee" stopOpacity=".18"/><stop offset="1" stopColor="#a78bfa" stopOpacity=".18"/></linearGradient></defs>
    <rect x="35" y="34" width="830" height="252" rx="28" fill="url(#unitGlow)" stroke="#334155"/>
    {[{x:90,t:"1 atm",s:"101325 Pa"},{x:280,t:"760 torr",s:"760 mm Hg"},{x:470,t:"1.01325 bar",s:"101.325 kPa"},{x:660,t:"1033 cm H₂O",s:"approx. at 4 °C"}].map((a,i)=><g key={a.t}><rect x={a.x} y="95" width="150" height="92" rx="18" fill="#0b1224" stroke={i%2?"#a78bfa":"#22d3ee"}/><text x={a.x+75} y="132" textAnchor="middle" fill="#f8fafc" fontSize="22" fontWeight="700">{a.t}</text><text x={a.x+75} y="163" textAnchor="middle" fill="#94a3b8" fontSize="16">{a.s}</text>{i<3&&<path d={`M${a.x+152} 141 H${a.x+184}`} stroke="#fb7185" strokeWidth="4"/>}</g>)}
    <text x="450" y="245" textAnchor="middle" fill="#cbd5e1" fontSize="18">Choose one pressure unit and the matching numerical value of R.</text>
  </svg>
);

export const InclinedManometerSVG = () => (
  <svg className="figureSvg compactSvg" viewBox="0 0 900 360" role="img" aria-label="Inclined mercury plug and vertical pressure head">
    <defs><marker id="angleArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8Z" fill="#22d3ee"/></marker></defs>
    <line x1="120" y1="290" x2="780" y2="90" stroke="#cbd5e1" strokeWidth="18" strokeLinecap="round"/>
    <line x1="360" y1="217" x2="560" y2="156" stroke="#f59e0b" strokeWidth="28" strokeLinecap="round"/>
    <line x1="360" y1="217" x2="560" y2="217" stroke="#64748b" strokeWidth="2" strokeDasharray="7 7"/>
    <line x1="560" y1="217" x2="560" y2="156" stroke="#22d3ee" strokeWidth="4" markerEnd="url(#angleArrow)"/>
    <text x="580" y="190" fill="#67e8f9" fontSize="22">h = L sin θ</text>
    <path d="M170 290 A85 85 0 0 1 250 264" fill="none" stroke="#a78bfa" strokeWidth="4"/>
    <text x="225" y="275" fill="#c4b5fd" fontSize="22">θ</text>
    <text x="410" y="170" fill="#fbbf24" fontSize="20">liquid plug length L</text>
    <text x="115" y="320" fill="#94a3b8" fontSize="18">gas volume ∝ trapped tube length</text>
  </svg>
);

export const GraphTransformationAtlasSVG = () => {
  const panels = [
    {x:30,y:30,t:"P vs V",p:"M20 140 C38 70 90 45 150 25"},
    {x:235,y:30,t:"P vs 1/V",p:"M20 140 L155 25"},
    {x:440,y:30,t:"PV vs V",p:"M20 80 L155 80"},
    {x:645,y:30,t:"log P vs log V",p:"M20 25 L155 140"},
    {x:30,y:205,t:"V vs T(K)",p:"M20 140 L155 25"},
    {x:235,y:205,t:"V/T vs T",p:"M20 80 L155 80"},
    {x:440,y:205,t:"P vs T(K)",p:"M20 140 L155 25"},
    {x:645,y:205,t:"PT vs T²",p:"M20 140 Q85 125 155 25"}
  ];
  return <svg className="figureSvg" viewBox="0 0 850 390" role="img" aria-label="Eight gas law graph transformations">{panels.map((g,i)=><g key={g.t} transform={`translate(${g.x} ${g.y})`}><rect width="175" height="155" rx="18" fill="#091225" stroke="#25324a"/><line x1="20" y1="140" x2="158" y2="140" stroke="#64748b"/><line x1="20" y1="140" x2="20" y2="20" stroke="#64748b"/><path d={g.p} fill="none" stroke={i%3===0?"#fb7185":i%3===1?"#22d3ee":"#a78bfa"} strokeWidth="4"/><text x="88" y="152" textAnchor="middle" fill="#cbd5e1" fontSize="13">{g.t}</text></g>)}</svg>;
};

export const ContainerTypesSVG = () => (
  <svg className="figureSvg" viewBox="0 0 980 360" role="img" aria-label="Rigid vessel piston balloon and tyre models">
    {[{x:30,t:"Rigid vessel",s:"V fixed",shape:"rect"},{x:270,t:"Piston",s:"P fixed by load",shape:"piston"},{x:520,t:"Thin balloon",s:"P ≈ external",shape:"balloon"},{x:760,t:"Tyre / elastic",s:"P and V vary",shape:"tyre"}].map((q,i)=><g key={q.t} transform={`translate(${q.x} 20)`}><rect x="0" y="0" width="190" height="300" rx="24" fill="#091225" stroke="#26344f"/><text x="95" y="38" textAnchor="middle" fill="#f8fafc" fontSize="20" fontWeight="700">{q.t}</text>{q.shape==="rect"&&<><rect x="55" y="85" width="80" height="120" fill="#0f172a" stroke="#22d3ee" strokeWidth="5"/><circle cx="82" cy="120" r="6" fill="#a78bfa"/><circle cx="110" cy="155" r="6" fill="#fb7185"/></>}{q.shape==="piston"&&<><rect x="50" y="90" width="90" height="125" fill="#0f172a" stroke="#cbd5e1" strokeWidth="4"/><rect x="46" y="115" width="98" height="12" fill="#f59e0b"/><path d="M95 75 V115" stroke="#f59e0b" strokeWidth="6"/><path d="M70 60 H120" stroke="#f59e0b" strokeWidth="10"/></>}{q.shape==="balloon"&&<><ellipse cx="95" cy="145" rx="60" ry="76" fill="#a78bfa" fillOpacity=".18" stroke="#a78bfa" strokeWidth="5"/><path d="M90 220 l-10 25 h30 l-10-25" fill="#a78bfa"/></>}{q.shape==="tyre"&&<><circle cx="95" cy="145" r="65" fill="none" stroke="#fb7185" strokeWidth="28"/><circle cx="95" cy="145" r="24" fill="#091225" stroke="#64748b"/></>}<text x="95" y="265" textAnchor="middle" fill="#94a3b8" fontSize="16">{q.s}</text></g>)}
  </svg>
);

export const MixtureLawsSVG = () => (
  <svg className="figureSvg" viewBox="0 0 940 360" role="img" aria-label="Dalton and Amagat laws visualised">
    <g transform="translate(30 25)"><text x="200" y="25" fill="#f8fafc" fontSize="22" fontWeight="700">Dalton: common V and T</text><rect x="35" y="60" width="330" height="210" rx="24" fill="#0b1224" stroke="#22d3ee"/>{Array.from({length:36}).map((_,i)=><circle key={i} cx={60+(i*47)%285} cy={85+((i*71)%160)} r="7" fill={["#22d3ee","#a78bfa","#fb7185"][i%3]}/>) }<text x="200" y="310" textAnchor="middle" fill="#cbd5e1" fontSize="18">P = P₁ + P₂ + P₃</text></g>
    <g transform="translate(500 25)"><text x="200" y="25" fill="#f8fafc" fontSize="22" fontWeight="700">Amagat: common P and T</text>{[{x:20,w:95,c:"#22d3ee",l:"V₁"},{x:120,w:120,c:"#a78bfa",l:"V₂"},{x:245,w:135,c:"#fb7185",l:"V₃"}].map(a=><g key={a.l}><rect x={a.x} y="85" width={a.w} height="150" fill={a.c} fillOpacity=".18" stroke={a.c}/><text x={a.x+a.w/2} y="165" textAnchor="middle" fill={a.c} fontSize="20">{a.l}</text></g>)}<text x="200" y="310" textAnchor="middle" fill="#cbd5e1" fontSize="18">V = V₁ + V₂ + V₃</text></g>
  </svg>
);

export const VapourEquilibriumSVG = () => (
  <svg className="figureSvg" viewBox="0 0 920 370" role="img" aria-label="Dynamic liquid vapour equilibrium and vapour pressure curve">
    <g transform="translate(30 25)"><rect x="30" y="40" width="360" height="260" rx="28" fill="#0b1224" stroke="#334155"/><path d="M50 215 Q210 190 370 215 V280 H50Z" fill="#22d3ee" fillOpacity=".25" stroke="#22d3ee"/>{Array.from({length:18}).map((_,i)=><circle key={i} cx={75+(i*43)%275} cy={85+((i*61)%105)} r="6" fill="#a78bfa"/>)}<path d="M130 210 C115 175 120 145 145 120" fill="none" stroke="#f59e0b" strokeWidth="4"/><path d="M285 105 C305 140 305 175 288 205" fill="none" stroke="#fb7185" strokeWidth="4"/><text x="100" y="105" fill="#fbbf24" fontSize="17">evaporation</text><text x="275" y="92" fill="#fda4af" fontSize="17">condensation</text><text x="210" y="330" textAnchor="middle" fill="#cbd5e1" fontSize="18">equal rates at dynamic equilibrium</text></g>
    <g transform="translate(490 25)"><line x1="40" y1="290" x2="380" y2="290" stroke="#64748b" strokeWidth="3"/><line x1="40" y1="290" x2="40" y2="35" stroke="#64748b" strokeWidth="3"/><path d="M45 280 C130 270 200 225 250 155 C300 90 335 55 375 38" fill="none" stroke="#fb7185" strokeWidth="5"/><line x1="40" y1="120" x2="380" y2="120" stroke="#22d3ee" strokeDasharray="8 8"/><text x="245" y="105" fill="#67e8f9" fontSize="17">external pressure</text><text x="330" y="320" fill="#94a3b8">T</text><text x="8" y="45" fill="#94a3b8">P*</text><text x="190" y="350" textAnchor="middle" fill="#cbd5e1" fontSize="18">boiling where P*(T) = Pext</text></g>
  </svg>
);

export const RelativeHumiditySVG = () => (
  <svg className="figureSvg compactSvg" viewBox="0 0 900 360" role="img" aria-label="Relative humidity and dew point diagram">
    <line x1="80" y1="300" x2="820" y2="300" stroke="#64748b" strokeWidth="3"/><line x1="80" y1="300" x2="80" y2="40" stroke="#64748b" strokeWidth="3"/>
    <path d="M85 285 C180 278 290 245 390 195 C510 135 650 70 810 45" fill="none" stroke="#22d3ee" strokeWidth="6"/>
    <line x1="80" y1="168" x2="520" y2="168" stroke="#a78bfa" strokeWidth="4"/><line x1="520" y1="168" x2="520" y2="300" stroke="#a78bfa" strokeDasharray="8 8"/><circle cx="520" cy="168" r="8" fill="#a78bfa"/><text x="535" y="155" fill="#c4b5fd" fontSize="18">current vapour pressure</text><line x1="365" y1="168" x2="365" y2="300" stroke="#fb7185" strokeDasharray="8 8"/><circle cx="365" cy="168" r="8" fill="#fb7185"/><text x="280" y="145" fill="#fda4af" fontSize="18">dew point</text><text x="690" y="335" fill="#94a3b8">temperature</text><text x="25" y="55" fill="#94a3b8">water vapour pressure</text>
  </svg>
);

export const EffusionSVG = () => (
  <svg className="figureSvg" viewBox="0 0 940 360" role="img" aria-label="Effusion through a pinhole and selective enrichment">
    <defs><marker id="effArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8Z" fill="#22d3ee"/></marker></defs>
    <rect x="70" y="55" width="420" height="250" rx="35" fill="#0b1224" stroke="#64748b" strokeWidth="4"/>{Array.from({length:30}).map((_,i)=><circle key={i} cx={105+(i*61)%340} cy={85+((i*47)%185)} r={i%2?8:5} fill={i%2?"#a78bfa":"#22d3ee"}/>) }<circle cx="494" cy="180" r="8" fill="#050914" stroke="#f8fafc"/><path d="M505 180 H790" stroke="#22d3ee" strokeWidth="4" markerEnd="url(#effArrow)"/>{Array.from({length:8}).map((_,i)=><circle key={i} cx={550+i*33} cy={165+(i%3)*18} r="5" fill="#22d3ee"/>)}<text x="590" y="80" fill="#f8fafc" fontSize="22" fontWeight="700">molecular flow</text><text x="570" y="245" fill="#cbd5e1" fontSize="18">lighter species is enriched in initial effusate</text><text x="570" y="278" fill="#94a3b8" fontSize="17">r ∝ 1 / √M</text>
  </svg>
);

export const KineticCubeSVG = () => (
  <svg className="figureSvg" viewBox="0 0 900 400" role="img" aria-label="Kinetic theory cubic vessel derivation">
    <defs><marker id="kinArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8Z" fill="#fb7185"/></marker></defs>
    <path d="M180 95 L480 95 L620 165 L320 165 Z M180 95 V300 L320 370 V165 M480 95 V300 L620 370 V165 M180 300 L480 300 L620 370" fill="none" stroke="#64748b" strokeWidth="4"/>
    <circle cx="300" cy="230" r="12" fill="#22d3ee"/><path d="M312 230 H515" stroke="#fb7185" strokeWidth="5" markerEnd="url(#kinArrow)"/><path d="M515 230 H345" stroke="#a78bfa" strokeWidth="4" markerEnd="url(#kinArrow)"/><text x="405" y="212" fill="#fda4af" fontSize="20">+uₓ</text><text x="395" y="260" fill="#c4b5fd" fontSize="20">−uₓ</text><text x="650" y="125" fill="#f8fafc" fontSize="21">Δpₓ = 2muₓ</text><text x="650" y="165" fill="#cbd5e1" fontSize="18">collision interval = 2L/|uₓ|</text><text x="650" y="215" fill="#67e8f9" fontSize="21">PV = ⅓ Nm uᵣₘₛ²</text><text x="650" y="260" fill="#94a3b8" fontSize="18">isotropy: ⟨uₓ²⟩ = ⟨u²⟩/3</text>
  </svg>
);

export const SpeedHierarchySVG = () => (
  <svg className="figureSvg compactSvg" viewBox="0 0 900 330" role="img" aria-label="Most probable average and rms speeds">
    <line x1="90" y1="250" x2="810" y2="250" stroke="#64748b" strokeWidth="4"/><path d="M100 250 C180 245 225 170 300 90 C360 28 440 58 510 125 C585 198 650 240 800 248" fill="none" stroke="#22d3ee" strokeWidth="5"/>
    {[{x:315,l:"uₘₚ",c:"#f59e0b"},{x:355,l:"uₐᵥ",c:"#a78bfa"},{x:395,l:"uᵣₘₛ",c:"#fb7185"}].map(a=><g key={a.l}><line x1={a.x} y1="250" x2={a.x} y2="72" stroke={a.c} strokeWidth="3" strokeDasharray="7 7"/><text x={a.x} y="285" textAnchor="middle" fill={a.c} fontSize="21">{a.l}</text></g>)}<text x="560" y="80" fill="#f8fafc" fontSize="22">uᵣₘₛ &gt; uₐᵥ &gt; uₘₚ</text><text x="560" y="122" fill="#94a3b8" fontSize="18">all scale as √(T/M)</text>
  </svg>
);

export const MaxwellMassTemperatureSVG = () => (
  <svg className="figureSvg" viewBox="0 0 950 390" role="img" aria-label="Maxwell distributions for temperature and molar mass changes">
    <g transform="translate(20 20)"><text x="210" y="25" textAnchor="middle" fill="#f8fafc" fontSize="20" fontWeight="700">Temperature effect</text><line x1="40" y1="300" x2="420" y2="300" stroke="#64748b"/><line x1="40" y1="300" x2="40" y2="50" stroke="#64748b"/><path d="M45 300 C80 295 100 185 155 85 C205 20 260 100 305 205 C345 285 385 299 415 300" fill="none" stroke="#a78bfa" strokeWidth="5"/><path d="M45 300 C120 297 170 250 235 185 C310 112 365 175 415 275" fill="none" stroke="#22d3ee" strokeWidth="5"/><text x="130" y="65" fill="#c4b5fd">T₁</text><text x="330" y="145" fill="#67e8f9">T₂ &gt; T₁</text></g>
    <g transform="translate(505 20)"><text x="210" y="25" textAnchor="middle" fill="#f8fafc" fontSize="20" fontWeight="700">Molar-mass effect at fixed T</text><line x1="40" y1="300" x2="420" y2="300" stroke="#64748b"/><line x1="40" y1="300" x2="40" y2="50" stroke="#64748b"/><path d="M45 300 C80 295 100 180 155 72 C205 18 250 110 285 225 C315 292 370 300 415 300" fill="none" stroke="#fb7185" strokeWidth="5"/><path d="M45 300 C120 297 175 252 245 185 C315 120 365 190 415 278" fill="none" stroke="#22d3ee" strokeWidth="5"/><text x="126" y="58" fill="#fda4af">heavy</text><text x="335" y="150" fill="#67e8f9">light</text></g>
  </svg>
);

export const CollisionFluxSVG = () => (
  <svg className="figureSvg" viewBox="0 0 930 360" role="img" aria-label="Collision cylinder mean free path and wall flux">
    <g transform="translate(25 30)"><ellipse cx="90" cy="155" rx="50" ry="78" fill="#22d3ee" fillOpacity=".12" stroke="#22d3ee"/><rect x="90" y="77" width="310" height="156" fill="#22d3ee" fillOpacity=".08" stroke="#22d3ee"/><ellipse cx="400" cy="155" rx="50" ry="78" fill="#22d3ee" fillOpacity=".08" stroke="#22d3ee"/>{Array.from({length:12}).map((_,i)=><circle key={i} cx={130+(i*59)%250} cy={95+((i*47)%120)} r="7" fill="#a78bfa"/>)}<path d="M70 155 H390" stroke="#fb7185" strokeWidth="4"/><text x="190" y="55" fill="#f8fafc" fontSize="20">collision cylinder: πσ²uΔt</text><text x="175" y="280" fill="#cbd5e1" fontSize="18">λ = kBT/(√2πσ²P)</text></g>
    <g transform="translate(515 30)"><rect x="280" y="45" width="22" height="230" fill="#64748b"/>{Array.from({length:18}).map((_,i)=><g key={i}><circle cx={25+(i*41)%225} cy={70+((i*61)%180)} r="6" fill="#22d3ee"/><path d={`M${31+(i*41)%225} ${70+((i*61)%180)} L${270} ${85+((i*37)%160)}`} stroke="#a78bfa" strokeOpacity=".55"/></g>)}<text x="140" y="25" textAnchor="middle" fill="#f8fafc" fontSize="20">wall molecular flux</text><text x="115" y="315" textAnchor="middle" fill="#cbd5e1" fontSize="18">J = ¼ n uₐᵥ</text></g>
  </svg>
);

export const PotentialCurveSVG = () => (
  <svg className="figureSvg compactSvg" viewBox="0 0 900 360" role="img" aria-label="Intermolecular potential energy curve">
    <line x1="90" y1="220" x2="820" y2="220" stroke="#64748b" strokeWidth="3"/><line x1="110" y1="320" x2="110" y2="40" stroke="#64748b" strokeWidth="3"/>
    <path d="M125 55 C155 70 175 120 205 220 C235 315 295 325 365 275 C455 210 590 207 810 217" fill="none" stroke="#22d3ee" strokeWidth="6"/>
    <line x1="310" y1="220" x2="310" y2="300" stroke="#a78bfa" strokeDasharray="8 8"/><circle cx="310" cy="300" r="7" fill="#a78bfa"/><text x="328" y="320" fill="#c4b5fd" fontSize="18">minimum: equilibrium separation</text><text x="170" y="75" fill="#fda4af" fontSize="18">strong repulsion</text><text x="470" y="270" fill="#67e8f9" fontSize="18">attractive well</text><text x="770" y="250" fill="#94a3b8">r</text><text x="45" y="55" fill="#94a3b8">U(r)</text>
  </svg>
);

export const VirialFamilySVG = () => (
  <svg className="figureSvg" viewBox="0 0 940 380" role="img" aria-label="Compressibility factor families and Boyle temperature">
    <line x1="70" y1="315" x2="870" y2="315" stroke="#64748b" strokeWidth="3"/><line x1="70" y1="315" x2="70" y2="45" stroke="#64748b" strokeWidth="3"/><line x1="70" y1="195" x2="870" y2="195" stroke="#94a3b8" strokeDasharray="8 8"/><text x="35" y="200" fill="#cbd5e1">1</text>
    <path d="M75 195 C210 245 350 258 500 215 C650 170 760 115 860 75" fill="none" stroke="#22d3ee" strokeWidth="5"/><path d="M75 195 C260 190 520 150 860 70" fill="none" stroke="#a78bfa" strokeWidth="5"/><path d="M75 195 C230 145 520 98 860 62" fill="none" stroke="#fb7185" strokeWidth="5"/>
    <text x="700" y="130" fill="#67e8f9">T &lt; Tᴮ</text><text x="700" y="95" fill="#c4b5fd">T = Tᴮ</text><text x="700" y="60" fill="#fda4af">T &gt; Tᴮ</text><text x="825" y="348" fill="#94a3b8">P</text><text x="30" y="55" fill="#94a3b8">Z</text><text x="330" y="350" fill="#cbd5e1" fontSize="18">initial slope changes sign with B(T)</text>
  </svg>
);

export const JouleThomsonSVG = () => (
  <svg className="figureSvg" viewBox="0 0 940 390" role="img" aria-label="Joule Thomson inversion curve">
    <line x1="80" y1="325" x2="860" y2="325" stroke="#64748b" strokeWidth="3"/><line x1="80" y1="325" x2="80" y2="45" stroke="#64748b" strokeWidth="3"/>
    <path d="M120 300 C155 220 235 115 390 75 C545 35 705 105 815 285" fill="none" stroke="#22d3ee" strokeWidth="6"/>
    <text x="405" y="125" fill="#67e8f9" fontSize="20">inversion curve: μJT = 0</text><text x="335" y="240" fill="#c4b5fd" fontSize="22">cooling region</text><text x="655" y="300" fill="#fda4af" fontSize="20">heating region</text><text x="810" y="355" fill="#94a3b8">P</text><text x="40" y="55" fill="#94a3b8">T</text><circle cx="270" cy="205" r="8" fill="#f59e0b"/><path d="M270 205 L360 270" stroke="#f59e0b" strokeWidth="4"/><text x="365" y="286" fill="#fbbf24" fontSize="18">throttling path crosses to lower P at H constant</text>
  </svg>
);

export const PayloadSVG = () => (
  <svg className="figureSvg compactSvg" viewBox="0 0 900 370" role="img" aria-label="Balloon payload force balance">
    <ellipse cx="350" cy="145" rx="150" ry="112" fill="#a78bfa" fillOpacity=".18" stroke="#a78bfa" strokeWidth="5"/><path d="M315 252 L335 290 H365 L385 252" fill="#a78bfa" fillOpacity=".35" stroke="#a78bfa"/><rect x="325" y="290" width="50" height="38" rx="5" fill="#f59e0b"/>
    <path d="M350 120 V35" stroke="#22d3ee" strokeWidth="6"/><path d="M350 250 V340" stroke="#fb7185" strokeWidth="6"/><text x="370" y="55" fill="#67e8f9" fontSize="21">buoyancy = ρair Vg</text><text x="370" y="335" fill="#fda4af" fontSize="21">gas + envelope + payload weight</text><text x="560" y="115" fill="#f8fafc" fontSize="21">mₚ = ρairV − ρgasV − menvelope</text><text x="560" y="165" fill="#94a3b8" fontSize="18">evaluate both gas densities at ambient P and T</text>
  </svg>
);

export const CoverageMapSVG = () => (
  <svg className="figureSvg compactSvg" viewBox="0 0 980 360" role="img" aria-label="Coverage map for all 169 source pages">
    <text x="490" y="35" textAnchor="middle" fill="#f8fafc" fontSize="22" fontWeight="700">Uploaded PDF coverage: pages 1–169</text>
    {[{a:1,b:8,c:"#22d3ee",l:"Pressure"},{a:9,b:26,c:"#a78bfa",l:"Gas laws"},{a:27,b:40,c:"#f59e0b",l:"Effusion / vapour"},{a:41,b:80,c:"#34d399",l:"Kinetic theory"},{a:81,b:103,c:"#fb7185",l:"Real gases"},{a:104,b:122,c:"#60a5fa",l:"Criticality"},{a:123,b:154,c:"#e879f9",l:"Problems"},{a:155,b:169,c:"#64748b",l:"Blank"}].map((s,i)=>{const x=60+(s.a-1)/169*860;const w=(s.b-s.a+1)/169*860;return <g key={s.l}><rect x={x} y="110" width={w} height="85" rx="8" fill={s.c} fillOpacity=".75"/><text x={x+w/2} y="155" textAnchor="middle" fill="#050914" fontSize={w<90?11:15} fontWeight="800">{s.l}</text><text x={x+w/2} y="220" textAnchor="middle" fill={s.c} fontSize="13">{s.a}–{s.b}</text></g>})}
    <text x="490" y="285" textAnchor="middle" fill="#cbd5e1" fontSize="18">All extracted text is retained in the page archive; all major source diagrams are rebuilt as dark SVGs.</text>
  </svg>
);

