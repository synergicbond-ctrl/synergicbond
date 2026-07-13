"use client";

import React, { useMemo, useState } from "react";
import * as katex from "katex";

const C = {
  bg: "#081521",
  surface: "#102233",
  surface2: "#142a3d",
  border: "#29445f",
  text: "#edf4fa",
  dim: "#b7c8d7",
  faint: "#7890a5",
  cyan: "#5fd4ea",
  gold: "#f1bd4e",
  mint: "#7fd9b8",
  coral: "#ee8c70",
  violet: "#c8a3e4",
  blue: "#80b5e8",
  serif: "Georgia, 'Iowan Old Style', 'Times New Roman', serif",
  sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  mono: "'SFMono-Regular', Consolas, 'Liberation Mono', monospace",
};

function MathX({ tex, display = true }: { tex: string; display?: boolean }) {
  const html = useMemo(
    () =>
      katex.renderToString(tex, {
        throwOnError: false,
        displayMode: display,
        output: "htmlAndMathml",
        strict: "warn",
        trust: false,
      }),
    [tex, display],
  );
  return (
    <span
      style={{ maxWidth: "100%", overflowX: display ? "auto" : "visible", display: display ? "block" : "inline" }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function SectionTitle({ n, title, subtitle }: { n: string; title: string; subtitle?: string }) {
  return (
    <div style={{ margin: "30px 0 14px" }}>
      <div style={{ color: C.cyan, fontFamily: C.mono, fontSize: 11, fontWeight: 800, letterSpacing: 1.2 }}>
        {n}
      </div>
      <h2 style={{ color: C.gold, fontFamily: C.serif, fontSize: "clamp(24px,3.2vw,34px)", lineHeight: 1.14, margin: "5px 0 5px" }}>
        {title}
      </h2>
      {subtitle ? (
        <p style={{ color: C.dim, fontFamily: C.sans, fontSize: 14.2, lineHeight: 1.65, margin: 0, maxWidth: 980 }}>{subtitle}</p>
      ) : null}
    </div>
  );
}

function Panel({ children, accent = C.cyan, style }: { children: React.ReactNode; accent?: string; style?: React.CSSProperties }) {
  return (
    <div
      style={{
        border: `1px solid ${C.border}`,
        borderTop: `3px solid ${accent}`,
        borderRadius: 14,
        background: `linear-gradient(180deg, ${C.surface2} 0%, ${C.surface} 100%)`,
        padding: "16px 17px",
        minWidth: 0,
        overflow: "hidden",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function PanelTitle({ children, accent = C.cyan }: { children: React.ReactNode; accent?: string }) {
  return <h3 style={{ fontFamily: C.serif, color: C.text, fontSize: 18, lineHeight: 1.25, margin: "0 0 9px", borderLeft: `3px solid ${accent}`, paddingLeft: 9 }}>{children}</h3>;
}

function Body({ children }: { children: React.ReactNode }) {
  return <p style={{ color: C.text, fontFamily: C.sans, fontSize: 14.1, lineHeight: 1.68, margin: "0 0 11px" }}>{children}</p>;
}

function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul style={{ margin: "8px 0 0", paddingLeft: 20, display: "grid", gap: 7 }}>
      {items.map((item, index) => (
        <li key={index} style={{ color: C.dim, fontFamily: C.sans, fontSize: 13.5, lineHeight: 1.58 }}>
          {item}
        </li>
      ))}
    </ul>
  );
}

function Grid({ children, min = 260 }: { children: React.ReactNode; min?: number }) {
  return <div style={{ display: "grid", gridTemplateColumns: `repeat(auto-fit,minmax(${min}px,1fr))`, gap: 13, alignItems: "stretch" }}>{children}</div>;
}

function Note({ title, children, accent = C.gold }: { title: string; children: React.ReactNode; accent?: string }) {
  return (
    <div style={{ margin: "12px 0", borderLeft: `3px solid ${accent}`, borderRadius: "0 10px 10px 0", padding: "10px 13px", background: `${accent}10` }}>
      <div style={{ color: accent, fontFamily: C.sans, fontSize: 11, fontWeight: 800, letterSpacing: 0.7, textTransform: "uppercase", marginBottom: 4 }}>{title}</div>
      <div style={{ color: C.text, fontFamily: C.sans, fontSize: 13.6, lineHeight: 1.6 }}>{children}</div>
    </div>
  );
}

function DataTable({ columns, rows, accent = C.cyan }: { columns: string[]; rows: React.ReactNode[][]; accent?: string }) {
  return (
    <div style={{ width: "100%", overflowX: "auto", border: `1px solid ${C.border}`, borderRadius: 12, margin: "11px 0" }}>
      <table style={{ width: "100%", minWidth: 650, borderCollapse: "collapse", fontFamily: C.sans, fontSize: 13.1 }}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column} style={{ color: accent, padding: "9px 11px", textAlign: "left", borderBottom: `2px solid ${accent}`, fontSize: 11.5, letterSpacing: 0.5, textTransform: "uppercase", whiteSpace: "nowrap" }}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} style={{ background: ri % 2 ? "rgba(255,255,255,0.018)" : "transparent" }}>
              {row.map((cell, ci) => (
                <td key={ci} style={{ color: ci === 0 ? C.text : C.dim, fontWeight: ci === 0 ? 700 : 400, padding: "8px 11px", borderBottom: `1px solid ${C.border}`, verticalAlign: "top", lineHeight: 1.45 }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ReplayFigure({ title, note, children }: { title: string; note: string; children: (run: number) => React.ReactNode }) {
  const [run, setRun] = useState(0);
  return (
    <div style={{ border: `1px solid ${C.border}`, borderRadius: 16, overflow: "hidden", background: C.bg, margin: "13px 0 18px" }}>
      <div key={run}>{children(run)}</div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 14, flexWrap: "wrap", padding: "11px 14px", borderTop: `1px solid ${C.border}` }}>
        <div style={{ minWidth: 0 }}>
          <div style={{ color: C.text, fontFamily: C.serif, fontSize: 16, fontWeight: 700 }}>{title}</div>
          <div style={{ color: C.dim, fontFamily: C.sans, fontSize: 12.5, lineHeight: 1.45 }}>{note}</div>
        </div>
        <button type="button" onClick={() => setRun((v) => v + 1)} style={{ border: `1px solid ${C.cyan}88`, borderRadius: 999, padding: "7px 11px", color: C.cyan, background: `${C.cyan}10`, fontFamily: C.sans, fontWeight: 800, cursor: "pointer", whiteSpace: "nowrap" }}>↻ Replay</button>
      </div>
    </div>
  );
}

function PaulingResonanceSVG() {
  return (
    <svg viewBox="0 0 760 330" role="img" aria-labelledby="pauling-title pauling-desc" style={{ width: "100%", height: "auto", display: "block" }}>
      <title id="pauling-title">Pauling covalent ionic resonance energy model</title>
      <desc id="pauling-desc">Energy levels compare a hypothetical purely covalent bond with the observed heteronuclear bond, whose extra stabilization grows with electronegativity difference.</desc>
      <defs>
        <linearGradient id="pr-grad" x1="0" x2="1"><stop stopColor={C.cyan}/><stop offset="1" stopColor={C.gold}/></linearGradient>
        <filter id="pr-glow"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <rect x="0" y="0" width="760" height="330" fill={C.bg}/>
      <text x="32" y="36" fill={C.text} fontFamily={C.serif} fontSize="24" fontWeight="700">Why A–B is stronger than a purely covalent reference</text>
      <line x1="92" y1="98" x2="665" y2="98" stroke={C.faint} strokeWidth="2" strokeDasharray="7 7"/>
      <text x="95" y="82" fill={C.dim} fontFamily={C.sans} fontSize="14">hypothetical 100% covalent reference</text>
      <line x1="92" y1="224" x2="665" y2="224" stroke="url(#pr-grad)" strokeWidth="5" filter="url(#pr-glow)">
        <animate attributeName="x2" from="92" to="665" dur="1.1s" fill="freeze"/>
      </line>
      <text x="95" y="252" fill={C.cyan} fontFamily={C.sans} fontSize="15" fontWeight="700">observed A–B bond</text>
      <line x1="610" y1="105" x2="610" y2="214" stroke={C.gold} strokeWidth="3" markerEnd="url(#pr-arrow)">
        <animate attributeName="y2" from="105" to="214" dur="1s" fill="freeze"/>
      </line>
      <defs><marker id="pr-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill={C.gold}/></marker></defs>
      <text x="622" y="151" fill={C.gold} fontFamily={C.mono} fontSize="17" fontWeight="800">Δ(A–B)</text>
      <text x="622" y="173" fill={C.dim} fontFamily={C.sans} fontSize="12">extra stabilization</text>
      <g transform="translate(158 142)">
        <circle cx="0" cy="0" r="26" fill={`${C.coral}2b`} stroke={C.coral} strokeWidth="2"/>
        <circle cx="186" cy="0" r="26" fill={`${C.blue}2b`} stroke={C.blue} strokeWidth="2"/>
        <text x="0" y="7" textAnchor="middle" fill={C.text} fontFamily={C.serif} fontSize="24" fontWeight="700">A</text>
        <text x="186" y="7" textAnchor="middle" fill={C.text} fontFamily={C.serif} fontSize="24" fontWeight="700">B</text>
        <line x1="29" y1="0" x2="157" y2="0" stroke={C.cyan} strokeWidth="5" strokeLinecap="round"/>
        <circle cx="94" cy="0" r="8" fill={C.gold}><animate attributeName="cx" values="94;126;94" dur="2.2s" repeatCount="indefinite"/></circle>
        <text x="0" y="-38" textAnchor="middle" fill={C.coral} fontFamily={C.sans} fontSize="14">δ+</text>
        <text x="186" y="-38" textAnchor="middle" fill={C.blue} fontFamily={C.sans} fontSize="14">δ−</text>
      </g>
      <text x="32" y="306" fill={C.dim} fontFamily={C.sans} fontSize="13">Greater ionic-resonance contribution → larger Δ(A–B) → larger |χA − χB|.</text>
    </svg>
  );
}

function AllredRochowSVG() {
  const points = [0.6, 1.3, 2.1, 3.1, 4.2, 5.4, 6.7, 8.0, 9.3];
  const w = 760, h = 390, left = 74, right = 30, top = 64, bottom = 74;
  const x = (v: number) => left + (v / 10) * (w - left - right);
  const y = (v: number) => top + (1 - v / 4.5) * (h - top - bottom);
  const line = `M ${x(0)} ${y(0.744)} L ${x(10)} ${y(0.359 * 10 + 0.744)}`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} role="img" aria-labelledby="ar-title ar-desc" style={{ width: "100%", height: "auto", display: "block" }}>
      <title id="ar-title">Allred Rochow calibration graph</title>
      <desc id="ar-desc">A linear graph of electronegativity against the electrostatic index effective nuclear charge divided by covalent radius squared, with slope 0.359 and intercept 0.744.</desc>
      <rect width={w} height={h} fill={C.bg}/>
      <text x="34" y="34" fill={C.text} fontFamily={C.serif} fontSize="24" fontWeight="700">Allred–Rochow electrostatic calibration</text>
      {[0,1,2,3,4].map((v) => <g key={v}><line x1={left} y1={y(v)} x2={w-right} y2={y(v)} stroke={C.border} strokeDasharray="5 7"/><text x={left-17} y={y(v)+5} textAnchor="end" fill={C.dim} fontFamily={C.mono} fontSize="12">{v}</text></g>)}
      {[0,2,4,6,8,10].map((v) => <g key={v}><line x1={x(v)} y1={top} x2={x(v)} y2={h-bottom} stroke={C.border} opacity=".55"/><text x={x(v)} y={h-bottom+24} textAnchor="middle" fill={C.dim} fontFamily={C.mono} fontSize="12">{v}</text></g>)}
      <line x1={left} y1={top} x2={left} y2={h-bottom} stroke={C.dim} strokeWidth="2"/>
      <line x1={left} y1={h-bottom} x2={w-right} y2={h-bottom} stroke={C.dim} strokeWidth="2"/>
      <path d={line} fill="none" stroke={C.gold} strokeWidth="4" strokeLinecap="round" pathLength="1" strokeDasharray="1" strokeDashoffset="1">
        <animate attributeName="stroke-dashoffset" from="1" to="0" dur="1.5s" fill="freeze"/>
      </path>
      {points.map((v, i) => {
        const yy = 0.359 * v + 0.744;
        return <circle key={v} cx={x(v)} cy={y(yy)} r="6" fill={i % 2 ? C.cyan : C.mint} stroke={C.bg} strokeWidth="2"><animate attributeName="r" values="0;7;6" dur=".55s" begin={`${0.18 + i*0.1}s`} fill="freeze"/></circle>;
      })}
      <text x={w-260} y={92} fill={C.gold} fontFamily={C.mono} fontSize="16" fontWeight="800">χAR = 0.359X + 0.744</text>
      <text x={w-260} y={115} fill={C.dim} fontFamily={C.sans} fontSize="12">X = Zeff / (rcov / Å)²</text>
      <text x={(left+w-right)/2} y={h-23} textAnchor="middle" fill={C.text} fontFamily={C.sans} fontSize="15" fontWeight="700">electrostatic index, Zeff / (rcov / Å)²</text>
      <text transform={`translate(22 ${(top+h-bottom)/2}) rotate(-90)`} textAnchor="middle" fill={C.text} fontFamily={C.sans} fontSize="15" fontWeight="700">Allred–Rochow electronegativity, χAR</text>
      <text x="35" y="370" fill={C.faint} fontFamily={C.sans} fontSize="12">Equation-generated calibration plot; slope and intercept are the model constants.</text>
    </svg>
  );
}

function PeriodTrendSVG() {
  const p2 = [{e:"Li",z:3,v:1.0},{e:"Be",z:4,v:1.6},{e:"B",z:5,v:2.0},{e:"C",z:6,v:2.5},{e:"N",z:7,v:3.0},{e:"O",z:8,v:3.4},{e:"F",z:9,v:4.0}];
  const p3 = [{e:"Na",z:11,v:0.9},{e:"Mg",z:12,v:1.3},{e:"Al",z:13,v:1.6},{e:"Si",z:14,v:1.9},{e:"P",z:15,v:2.2},{e:"S",z:16,v:2.6},{e:"Cl",z:17,v:3.2}];
  const w=760,h=380,left=62,right=26,top=48,bottom=66;
  const x=(z:number)=>left+((z-2)/16)*(w-left-right);
  const y=(v:number)=>top+(1-v/4.25)*(h-top-bottom);
  const path=(arr: typeof p2)=>arr.map((p,i)=>`${i?"L":"M"} ${x(p.z)} ${y(p.v)}`).join(" ");
  return <svg viewBox={`0 0 ${w} ${h}`} role="img" aria-labelledby="pt-title pt-desc" style={{width:"100%",height:"auto",display:"block"}}>
    <title id="pt-title">Representative Pauling electronegativity across periods two and three</title>
    <desc id="pt-desc">Two rising line graphs show representative Pauling electronegativity values increasing across period two from lithium to fluorine and period three from sodium to chlorine.</desc>
    <rect width={w} height={h} fill={C.bg}/>
    <text x="30" y="31" fill={C.text} fontFamily={C.serif} fontSize="23" fontWeight="700">Representative Pauling values across periods</text>
    {[0,1,2,3,4].map(v=><g key={v}><line x1={left} y1={y(v)} x2={w-right} y2={y(v)} stroke={C.border} strokeDasharray="5 7"/><text x={left-12} y={y(v)+4} textAnchor="end" fill={C.dim} fontFamily={C.mono} fontSize="12">{v}</text></g>)}
    <line x1={left} y1={top} x2={left} y2={h-bottom} stroke={C.dim} strokeWidth="2"/><line x1={left} y1={h-bottom} x2={w-right} y2={h-bottom} stroke={C.dim} strokeWidth="2"/>
    <path d={path(p2)} fill="none" stroke={C.gold} strokeWidth="4" pathLength="1" strokeDasharray="1" strokeDashoffset="1"><animate attributeName="stroke-dashoffset" from="1" to="0" dur="1.3s" fill="freeze"/></path>
    <path d={path(p3)} fill="none" stroke={C.cyan} strokeWidth="4" pathLength="1" strokeDasharray="1" strokeDashoffset="1"><animate attributeName="stroke-dashoffset" from="1" to="0" dur="1.3s" begin=".25s" fill="freeze"/></path>
    {[...p2.map(p=>({...p,c:C.gold})),...p3.map(p=>({...p,c:C.cyan}))].map((p,i)=><g key={`${p.e}-${p.z}`}><circle cx={x(p.z)} cy={y(p.v)} r="5.5" fill={p.c} stroke={C.bg} strokeWidth="2"/><text x={x(p.z)} y={y(p.v)-11-(i%2)*2} textAnchor="middle" fill={p.c} fontFamily={C.mono} fontSize="11" fontWeight="800">{p.e}</text></g>)}
    <text x={(left+w-right)/2} y={h-20} textAnchor="middle" fill={C.text} fontFamily={C.sans} fontSize="15" fontWeight="700">atomic number, Z</text>
    <text transform={`translate(20 ${(top+h-bottom)/2}) rotate(-90)`} textAnchor="middle" fill={C.text} fontFamily={C.sans} fontSize="15" fontWeight="700">Pauling electronegativity</text>
    <g transform="translate(580 62)"><line x1="0" y1="0" x2="26" y2="0" stroke={C.gold} strokeWidth="4"/><text x="34" y="5" fill={C.dim} fontFamily={C.sans} fontSize="12">Period 2</text><line x1="0" y1="25" x2="26" y2="25" stroke={C.cyan} strokeWidth="4"/><text x="34" y="30" fill={C.dim} fontFamily={C.sans} fontSize="12">Period 3</text></g>
  </svg>;
}

function WaterDipoleSVG() {
  return <svg viewBox="0 0 760 350" role="img" aria-labelledby="wd-title wd-desc" style={{width:"100%",height:"auto",display:"block"}}>
    <title id="wd-title">Vector addition of two oxygen hydrogen bond moments in water</title>
    <desc id="wd-desc">Two equal oxygen hydrogen bond moment vectors separated by 104.5 degrees add to the molecular dipole moment along the angle bisector.</desc>
    <defs><marker id="wd-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill={C.gold}/></marker><marker id="wd-cyan" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 Z" fill={C.cyan}/></marker></defs>
    <rect width="760" height="350" fill={C.bg}/><text x="30" y="33" fill={C.text} fontFamily={C.serif} fontSize="24" fontWeight="700">Bond polarity is a vector: water as a clean example</text>
    <circle cx="380" cy="112" r="24" fill={`${C.coral}38`} stroke={C.coral} strokeWidth="2"/><text x="380" y="119" textAnchor="middle" fill={C.text} fontFamily={C.serif} fontSize="22" fontWeight="700">O</text>
    <circle cx="245" cy="254" r="18" fill={`${C.blue}38`} stroke={C.blue} strokeWidth="2"/><circle cx="515" cy="254" r="18" fill={`${C.blue}38`} stroke={C.blue} strokeWidth="2"/><text x="245" y="260" textAnchor="middle" fill={C.text} fontFamily={C.serif} fontSize="18">H</text><text x="515" y="260" textAnchor="middle" fill={C.text} fontFamily={C.serif} fontSize="18">H</text>
    <line x1="363" y1="130" x2="259" y2="239" stroke={C.dim} strokeWidth="4"/><line x1="397" y1="130" x2="501" y2="239" stroke={C.dim} strokeWidth="4"/>
    <line x1="265" y1="232" x2="360" y2="133" stroke={C.gold} strokeWidth="4" markerEnd="url(#wd-arrow)" pathLength="1" strokeDasharray="1" strokeDashoffset="1"><animate attributeName="stroke-dashoffset" from="1" to="0" dur="1s" fill="freeze"/></line>
    <line x1="495" y1="232" x2="400" y2="133" stroke={C.gold} strokeWidth="4" markerEnd="url(#wd-arrow)" pathLength="1" strokeDasharray="1" strokeDashoffset="1"><animate attributeName="stroke-dashoffset" from="1" to="0" dur="1s" begin=".25s" fill="freeze"/></line>
    <line x1="380" y1="116" x2="380" y2="302" stroke={C.cyan} strokeWidth="5" markerEnd="url(#wd-cyan)" pathLength="1" strokeDasharray="1" strokeDashoffset="1"><animate attributeName="stroke-dashoffset" from="1" to="0" dur="1s" begin=".8s" fill="freeze"/></line>
    <path d="M 334 164 A 66 66 0 0 1 426 164" fill="none" stroke={C.faint} strokeWidth="2" strokeDasharray="5 5"/><text x="380" y="183" textAnchor="middle" fill={C.dim} fontFamily={C.mono} fontSize="13">104.5°</text>
    <text x="113" y="145" fill={C.gold} fontFamily={C.sans} fontSize="13">each O–H bond moment</text><text x="408" y="318" fill={C.cyan} fontFamily={C.sans} fontSize="13" fontWeight="800">net molecular dipole, μ = 1.85 D</text>
  </svg>;
}

function ThermodynamicSVG() {
  const w=760,h=370,left=80,right=36,top=55,bottom=62;
  const x=(q:number)=>left+((q+0.45)/0.9)*(w-left-right);
  const y=(e:number)=>top+(1-e/3.1)*(h-top-bottom);
  const curve=(center:number,offset:number,hardness:number)=>Array.from({length:121},(_,i)=>-0.45+i*(0.9/120)).map((q,i)=>`${i?"L":"M"} ${x(q)} ${y(offset+hardness*(q-center)*(q-center))}`).join(" ");
  const qstar=.14;
  return <svg viewBox={`0 0 ${w} ${h}`} role="img" aria-labelledby="th-title th-desc" style={{width:"100%",height:"auto",display:"block"}}>
    <title id="th-title">Conceptual DFT charge transfer energy and electronegativity equalization</title><desc id="th-desc">Two parabolic energy curves for fragments A and B show chemical potentials as slopes and a common minimum at the equilibrium fractional charge transfer.</desc>
    <rect width={w} height={h} fill={C.bg}/><text x="31" y="32" fill={C.text} fontFamily={C.serif} fontSize="23" fontWeight="700">Thermodynamic view: charge flows until the slopes equalize</text>
    {[0,1,2,3].map(v=><g key={v}><line x1={left} y1={y(v)} x2={w-right} y2={y(v)} stroke={C.border} strokeDasharray="5 7"/><text x={left-15} y={y(v)+4} textAnchor="end" fill={C.dim} fontFamily={C.mono} fontSize="11">{v}</text></g>)}
    <line x1={left} y1={top} x2={left} y2={h-bottom} stroke={C.dim} strokeWidth="2"/><line x1={left} y1={h-bottom} x2={w-right} y2={h-bottom} stroke={C.dim} strokeWidth="2"/>
    <path d={curve(-.12,.55,8.4)} fill="none" stroke={C.gold} strokeWidth="4" pathLength="1" strokeDasharray="1" strokeDashoffset="1"><animate attributeName="stroke-dashoffset" from="1" to="0" dur="1.3s" fill="freeze"/></path>
    <path d={curve(.18,.35,6.4)} fill="none" stroke={C.cyan} strokeWidth="4" pathLength="1" strokeDasharray="1" strokeDashoffset="1"><animate attributeName="stroke-dashoffset" from="1" to="0" dur="1.3s" begin=".2s" fill="freeze"/></path>
    <line x1={x(qstar)} y1={top+16} x2={x(qstar)} y2={h-bottom} stroke={C.mint} strokeWidth="2.5" strokeDasharray="7 7"><animate attributeName="opacity" values="0;1" dur=".8s" begin="1s" fill="freeze"/></line>
    <text x={x(qstar)+8} y={top+34} fill={C.mint} fontFamily={C.mono} fontSize="13" fontWeight="800">q*</text>
    <text x={x(-.23)} y={y(2.35)} fill={C.gold} fontFamily={C.sans} fontSize="13" fontWeight="800">fragment A</text><text x={x(.23)} y={y(2.15)} fill={C.cyan} fontFamily={C.sans} fontSize="13" fontWeight="800">fragment B</text>
    <text x={(left+w-right)/2} y={h-20} textAnchor="middle" fill={C.text} fontFamily={C.sans} fontSize="14" fontWeight="700">fractional electron transfer, q</text><text transform={`translate(22 ${(top+h-bottom)/2}) rotate(-90)`} textAnchor="middle" fill={C.text} fontFamily={C.sans} fontSize="14" fontWeight="700">energy change</text>
  </svg>;
}

const paulingRows: React.ReactNode[][] = [
  ["Period 2", "Li 1.0", "Be 1.6", "B 2.0", "C 2.5", "N 3.0", "O 3.4", "F 4.0"],
  ["Period 3", "Na 0.9", "Mg 1.3", "Al 1.6", "Si 1.9", "P 2.2", "S 2.6", "Cl 3.2"],
  ["Period 4", "K 0.8", "Ca 1.0", "Ga 1.8", "Ge 2.0", "As 2.2", "Se 2.6", "Br 3.0"],
  ["Period 5", "Rb 0.8", "Sr 0.9", "In 1.8", "Sn 2.0", "Sb 2.1", "Te ≈2.1", "I 2.7"],
];

export function SectionElectronegativityV11() {
  return (
    <section data-periodicity-section="electronegativity-v11" style={{ color: C.text, minWidth: 0 }}>
      <div style={{ position: "relative", overflow: "hidden", border: `1px solid ${C.border}`, borderRadius: 20, padding: "25px 24px", background: `linear-gradient(135deg, ${C.surface2}, ${C.bg})`, boxShadow: "0 24px 70px rgba(0,0,0,.24)" }}>
        <div aria-hidden="true" style={{ position: "absolute", width: 280, height: 280, borderRadius: "50%", right: -80, top: -130, background: C.cyan, filter: "blur(80px)", opacity: .14 }}/>
        <div style={{ position: "relative" }}>
          <div style={{ color: C.cyan, fontFamily: C.sans, fontSize: 11, fontWeight: 900, letterSpacing: 1.4, textTransform: "uppercase" }}>Focused source reconstruction · V11</div>
          <h1 style={{ fontFamily: C.serif, color: C.text, fontSize: "clamp(31px,5vw,52px)", lineHeight: 1.02, margin: "8px 0 12px" }}>Electronegativity</h1>
          <p style={{ fontFamily: C.sans, color: C.dim, fontSize: 15, lineHeight: 1.7, margin: 0, maxWidth: 980 }}>
            A bonded-atom property that links periodic trends, bond polarity, thermochemistry, charge transfer, molecular dipoles and acid–base behaviour. This module synthesizes the bond-energy treatment, electrostatic Allred–Rochow model and the modern thermodynamic interpretation, with the scope limited to chemically useful bond-energy, energetic and electrostatic scales.
          </p>
        </div>
      </div>

      <SectionTitle n="01" title="Meaning, scope and the first distinction" subtitle="Electronegativity describes attraction for shared density inside a bond. It is not a directly measured energy of a free isolated atom." />
      <Grid min={290}>
        <Panel accent={C.cyan}>
          <PanelTitle accent={C.cyan}>Definition</PanelTitle>
          <Body>In a covalent bond A–B, the more electronegative atom attracts the shared electron pair more strongly and acquires partial negative charge.</Body>
          <MathX tex="A^{\delta+}-B^{\delta-}\qquad (\chi_B>\chi_A)" />
          <Note title="Environment matters" accent={C.cyan}>The effective electronegativity of sulfur is not identical in H₂S, SF₄ and SF₆ because oxidation state, charge distribution and bonding environment change.</Note>
        </Panel>
        <Panel accent={C.gold}>
          <PanelTitle accent={C.gold}>Do not confuse the terms</PanelTitle>
          <DataTable columns={["Quantity","Defined for","Energetic?" ]} rows={[
            ["Electronegativity","bonded atom in a species","relative model-dependent index"],
            ["Ionization energy","isolated gaseous species losing e⁻","yes"],
            ["Electron affinity","isolated gaseous species gaining e⁻","yes, with stated sign convention"],
          ]} accent={C.gold}/>
        </Panel>
      </Grid>

      <SectionTitle n="02" title="What controls electronegativity?" subtitle="All commonly used scales respond, directly or indirectly, to nuclear pull, distance, charge and the energetic cost of changing electron number." />
      <Grid min={235}>
        {[
          ["Effective nuclear charge","Zeff ↑ ⇒ χ ↑","Stronger net nuclear attraction pulls shared density inward.",C.gold],
          ["Covalent radius","rcov ↓ ⇒ χ ↑","A compact valence shell places the bond pair closer to the nucleus.",C.cyan],
          ["Shielding","shielding ↑ ⇒ χ ↓","Inner-shell screening reduces the pull felt by bonding electrons.",C.mint],
          ["Oxidation state","positive state ↑ ⇒ χ ↑","Electron deficiency contracts the cloud and raises electron-attracting power.",C.coral],
          ["Hybridization","s-character ↑ ⇒ χ ↑","For carbon orbitals: sp > sp² > sp³ because s density penetrates closer to the nucleus.",C.violet],
          ["Substituent environment","inductive effects","Electron-withdrawing groups raise local electron demand; donating groups lower it.",C.blue],
        ].map(([title,tag,body,accent])=><Panel key={String(title)} accent={String(accent)}><div style={{fontFamily:C.mono,color:String(accent),fontSize:11,fontWeight:900,marginBottom:5}}>{tag}</div><PanelTitle accent={String(accent)}>{title}</PanelTitle><Body>{body}</Body></Panel>)}
      </Grid>

      <SectionTitle n="03" title="Pauling scale: bond-energy derivation" subtitle="Pauling connected electronegativity difference with the extra stabilization of a heteronuclear bond relative to a hypothetical purely covalent reference." />
      <ReplayFigure title="Covalent–ionic resonance energy" note="The lower observed A–B level represents extra stabilization, Δ(A–B).">{() => <PaulingResonanceSVG />}</ReplayFigure>
      <Grid min={330}>
        <Panel accent={C.gold}>
          <PanelTitle accent={C.gold}>Levine arithmetic-mean form</PanelTitle>
          <MathX tex="\Delta_{AB}=D(A-B)-\frac12\left[D(A-A)+D(B-B)\right]" />
          <MathX tex="|\chi_A-\chi_B|=0.102\sqrt{\frac{\Delta_{AB}}{\mathrm{kJ\,mol^{-1}}}}" />
          <Body>The factor 0.102 converts the square root of an energy in kJ mol⁻¹ to the Pauling difference. Bond energies must be average single-bond energies under consistent conventions.</Body>
        </Panel>
        <Panel accent={C.cyan}>
          <PanelTitle accent={C.cyan}>Geometric-mean reference</PanelTitle>
          <MathX tex="D_{\mathrm{cov}}(A-B)=\sqrt{D(A-A)D(B-B)}" />
          <MathX tex="\Delta_{AB}=D(A-B)-\sqrt{D(A-A)D(B-B)}" />
          <Body>The geometric mean avoids a negative “extra stabilization” for some highly polar hydrides and is widely used in numerical work. Always follow the convention supplied in the problem.</Body>
        </Panel>
      </Grid>
      <Panel accent={C.mint}>
        <PanelTitle accent={C.mint}>Worked example: H–F from bond energies</PanelTitle>
        <Grid min={250}>
          <div><Body>Given D(H–F) = 566, D(H–H) = 436 and D(F–F) = 158 kJ mol⁻¹:</Body><MathX tex="D_{\mathrm{cov}}(H-F)=\sqrt{436\times158}=262.5\ \mathrm{kJ\,mol^{-1}}" /></div>
          <div><MathX tex="\Delta_{HF}=566-262.5=303.5\ \mathrm{kJ\,mol^{-1}}" /><MathX tex="\chi_F-\chi_H=0.102\sqrt{303.5}=1.77" /></div>
          <div><MathX tex="\chi_H=4.00-1.77=2.23" /><Note title="Result">The calculated value is close to the commonly quoted Pauling value 2.20.</Note></div>
        </Grid>
      </Panel>

      <SectionTitle n="04" title="Mulliken scale and the thermodynamic meaning" subtitle="Mulliken combines the energy needed to remove an electron with the energy released on accepting one. In modern language this is a finite-difference estimate of negative chemical potential." />
      <Grid min={300}>
        <Panel accent={C.mint}>
          <PanelTitle accent={C.mint}>Mulliken absolute electronegativity</PanelTitle>
          <MathX tex="\chi_M=\frac{I+A}{2}" />
          <Body>Here I is ionization energy and A is electron affinity, both in the same per-particle energy unit and with A taken as a positive energy release. If electron-gain enthalpy is used, its sign convention must first be reconciled.</Body>
          <MathX tex="\chi_P\approx0.336\chi_M-0.20" />
        </Panel>
        <Panel accent={C.violet}>
          <PanelTitle accent={C.violet}>Chemical potential and hardness</PanelTitle>
          <MathX tex="\chi=-\mu,\qquad \mu=\left(\frac{\partial E}{\partial N}\right)_{v(\mathbf r)}" />
          <MathX tex="\eta\approx\frac{I-A}{2}" />
          <Body>Electronegativity is the tendency to lower energy by acquiring electron density. Hardness measures resistance to changing electron number; softness is the inverse tendency.</Body>
        </Panel>
      </Grid>
      <ReplayFigure title="Conceptual thermodynamic equalization" note="The minimum defines the approximate fractional charge q* after two fragments interact.">{() => <ThermodynamicSVG />}</ReplayFigure>
      <Panel accent={C.violet}>
        <PanelTitle accent={C.violet}>Charge transfer estimate</PanelTitle>
        <MathX tex="\Delta E(q)\approx-(\chi_A-\chi_B)q+\frac12(\eta_A+\eta_B)q^2" />
        <MathX tex="q^*=\frac{\chi_A-\chi_B}{\eta_A+\eta_B}" />
        <Note title="Model boundary" accent={C.violet}>This quadratic fragment model is useful for understanding direction and resistance to charge transfer. Geometry relaxation, solvation, electrostatic interaction and covalent overlap can shift the real charge.</Note>
      </Panel>

      <SectionTitle n="05" title="Allred–Rochow scale: electrostatic attraction at the covalent radius" subtitle="This scale translates a simple Coulombic idea into a calibrated electronegativity: stronger effective nuclear charge and smaller covalent radius both increase χ." />
      <Grid min={320}>
        <Panel accent={C.coral}>
          <PanelTitle accent={C.coral}>Standard calibrated expression</PanelTitle>
          <MathX tex="\chi_{AR}=0.359\frac{Z_{\mathrm{eff}}}{(r_{\mathrm{cov}}/\AA)^2}+0.744" />
          <Body>Zeff is the effective nuclear charge experienced by a peripheral bonding electron and rcov is in ångström. If rcov is entered in pm, the numerical factor must be changed consistently.</Body>
          <MathX tex="\chi_{AR}\approx0.359\frac{Z_{\mathrm{eff}}-0.35}{(r_{\mathrm{cov}}/\AA)^2}+0.744" />
          <Body>The corrected form is convenient when Zeff is first calculated for the isolated atom by Slater’s rules.</Body>
        </Panel>
        <Panel accent={C.gold}>
          <PanelTitle accent={C.gold}>Why the model is useful</PanelTitle>
          <BulletList items={[
            "Requires Zeff and radius rather than a full thermochemical data set.",
            "Explains the rise across a period as Zeff increases and size contracts.",
            "Rationalizes enhanced electronegativity after d- and f-contraction.",
            "Its main practical uncertainty is the choice and reliability of the covalent radius.",
          ]}/>
        </Panel>
      </Grid>
      <ReplayFigure title="Allred–Rochow graph" note="A direct linear calibration of χAR against the electrostatic index Zeff/rcov².">{() => <AllredRochowSVG />}</ReplayFigure>
      <Panel accent={C.coral}>
        <PanelTitle accent={C.coral}>Worked example: bromine estimate</PanelTitle>
        <Body>Using isolated-atom Zeff = 7.60, the corrected covalent-state value is 7.60 − 0.35 = 7.25. With rcov = 1.20 Å:</Body>
        <MathX tex="\chi_{AR}=0.359\frac{7.25}{(1.20)^2}+0.744\approx2.55" />
        <Note title="Interpretation" accent={C.coral}>The result is close to the usual Pauling value for bromine, but the two scales are not identical and should not be mixed without stating the calibration.</Note>
      </Panel>

      <SectionTitle n="06" title="Periodic trend and representative data" subtitle="Across the s- and p-block portions of a period, Zeff rises while size contracts. Down a representative group, the new shell usually dominates and electronegativity falls." />
      <ReplayFigure title="Period-2 and period-3 trend" note="Rounded representative Pauling values reconstructed as original SVG data.">{() => <PeriodTrendSVG />}</ReplayFigure>
      <DataTable columns={["Set","1","2","3","4","5","6","7"]} rows={paulingRows} accent={C.cyan}/>
      <Note title="Scale and oxidation-state warning" accent={C.gold}>Tables in standard books may differ slightly because of calibration, rounding and the chosen oxidation or valence state. Electronegativity is not a single immutable number for an element.</Note>

      <SectionTitle n="07" title="Bond dipoles and molecular dipoles" subtitle="A polar bond does not guarantee a polar molecule. Bond moments are vectors, so geometry can reinforce or cancel them." />
      <ReplayFigure title="Animated vector addition in H₂O" note="Two equal O–H bond moments add along the H–O–H angle bisector.">{() => <WaterDipoleSVG />}</ReplayFigure>
      <Panel accent={C.cyan}>
        <PanelTitle accent={C.cyan}>Recover the O–H bond moment from the molecular dipole</PanelTitle>
        <MathX tex="\mu_{\mathrm{H_2O}}=2\mu_{\mathrm{OH}}\cos\left(\frac{104.5^\circ}{2}\right)" />
        <MathX tex="\mu_{\mathrm{OH}}=\frac{1.85}{2\cos52.25^\circ}\approx1.51\ \mathrm D" />
        <Body>CO₂ has polar C=O bonds but zero net dipole in its linear equilibrium geometry because the two equal vectors cancel. H₂O is bent, so cancellation is incomplete.</Body>
      </Panel>

      <SectionTitle n="08" title="Detailed chemical applications" subtitle="Electronegativity is most useful when combined with structure, oxidation state, lattice/solvation energetics and orbital reasoning rather than used as a single-number rule." />
      <Grid min={285}>
        <Panel accent={C.gold}><PanelTitle accent={C.gold}>Bond polarity and ionic character</PanelTitle><Body>Larger Δχ generally increases charge separation and ionic contribution, but bond type is continuous. Mean electronegativity and polarizability also matter.</Body><MathX tex="\%\,\mathrm{ionic}\approx\left[1-e^{-0.25(\Delta\chi)^2}\right]\times100" /><Note title="Use carefully">This Pauling-style estimate is empirical, not a universal boundary between ionic and covalent bonds.</Note></Panel>
        <Panel accent={C.mint}><PanelTitle accent={C.mint}>Thermochemistry and bond stabilization</PanelTitle><Body>Polar heteronuclear bonds can gain extra covalent–ionic resonance stabilization. This helps rationalize strongly exothermic formation when strong polar bonds replace weaker or less polar bonds.</Body><Body>Combustion forms strong C=O and O–H bonds; complete reaction energetics still require all bonds, phases and stoichiometry.</Body></Panel>
        <Panel accent={C.coral}><PanelTitle accent={C.coral}>Acidity of hydrides and oxyacids</PanelTitle><Body>For A–H bonds within a comparable structural family, greater χA increases Hδ+ character. For oxyacids, electron-withdrawing substituents stabilize the conjugate base and increase acidity.</Body><Body>Across period 3, oxide character shifts broadly from Na₂O (basic) through Al₂O₃ (amphoteric) to SO₃ and Cl₂O₇ (acidic).</Body></Panel>
        <Panel accent={C.blue}><PanelTitle accent={C.blue}>A–O–H: acid or base cleavage</PanelTitle><Body>If A is highly electronegative, O–H polarization is favored and proton release becomes easier. If A is strongly electropositive, A–O cleavage and hydroxide behavior are favored.</Body><MathX tex="A-O-H+H_2O\rightleftharpoons AO^-+H_3O^+" /><MathX tex="A-O-H+H_2O\rightleftharpoons [A-OH_2]^++OH^-" /></Panel>
        <Panel accent={C.violet}><PanelTitle accent={C.violet}>Hybridization and acidity</PanelTitle><Body>Greater s-character raises the effective electronegativity of carbon and stabilizes negative charge closer to the nucleus.</Body><MathX tex="\chi_C(sp)>\chi_C(sp^2)>\chi_C(sp^3)" /><MathX tex="\mathrm{HC\equiv CH>C_2H_4>C_2H_6}\quad\text{(acidity)}" /></Panel>
        <Panel accent={C.cyan}><PanelTitle accent={C.cyan}>Oxidation number and bond direction</PanelTitle><Body>In formal oxidation-number assignment, bonding electrons are assigned to the more electronegative atom. This is bookkeeping, not a measurement of full ionic charge.</Body><Body>Examples: OF₂ is treated as an oxygen fluoride because F is more electronegative than O; Cl₂O is treated as chlorine oxide because O is more electronegative than Cl.</Body></Panel>
        <Panel accent={C.gold}><PanelTitle accent={C.gold}>Bond length and polar stabilization</PanelTitle><Body>Heteronuclear bonds may be shorter than the sum of tabulated covalent radii because polarity adds stabilization and changes electron density between nuclei.</Body><MathX tex="r_{A-B}\approx r_A+r_B-c|\chi_A-\chi_B|" /><Body>The constant c is empirical and depends on the chosen radius and bond-order convention.</Body></Panel>
        <Panel accent={C.mint}><PanelTitle accent={C.mint}>Hydrogen bonding</PanelTitle><Body>High electronegativity and small size of N, O and F produce strongly polarized X–H bonds and compact lone-pair acceptor sites. Geometry and accessibility remain essential.</Body></Panel>
        <Panel accent={C.coral}><PanelTitle accent={C.coral}>Inductive effect and reactivity</PanelTitle><Body>Electron-withdrawing groups alter local charge, acidity, nucleophilicity and electrophilicity through σ bonds. Group electronegativity alone is not enough; charge capacity and polarizability also influence the response.</Body></Panel>
      </Grid>

      <SectionTitle n="09" title="Worked examples and checks" subtitle="Examples are deliberately visible and stepwise so students can verify units, conventions and assumptions." />
      <Grid min={340}>
        <Panel accent={C.mint}><PanelTitle accent={C.mint}>Example 1 · Mulliken chlorine</PanelTitle><Body>Using I = 13.0 eV and A = 4.0 eV:</Body><MathX tex="\chi_M=\frac{13.0+4.0}{2}=8.5\ \mathrm{eV}" /><MathX tex="\chi_P\approx0.336(8.5)-0.20=2.66" /><Body>The conversion is empirical, so rounded input values do not reproduce every tabulated Pauling value exactly.</Body></Panel>
        <Panel accent={C.gold}><PanelTitle accent={C.gold}>Example 2 · Which bond is more polar?</PanelTitle><Body>Using χ(F)=4.0, χ(H)=2.2, χ(C)=2.5 and χ(Cl)=3.2:</Body><MathX tex="\Delta\chi(H-F)=1.8,\qquad \Delta\chi(C-Cl)=0.7" /><Body>H–F has the larger bond-polarity tendency. Molecular polarity still depends on how all bond vectors combine.</Body></Panel>
        <Panel accent={C.coral}><PanelTitle accent={C.coral}>Example 3 · Oxidation state changes χ</PanelTitle><Body>The same sulfur atom is more electron-withdrawing in a high positive oxidation state than in a low one. Therefore a single tabulated neutral-atom value cannot describe all sulfur compounds.</Body><MathX tex="\chi(S\,\text{in }SF_6)>\chi(S\,\text{in }H_2S)\quad\text{(qualitative)}" /></Panel>
        <Panel accent={C.violet}><PanelTitle accent={C.violet}>Example 4 · Thermodynamic direction of transfer</PanelTitle><Body>If χA &gt; χB, the first-order energy change favors electron density moving from B toward A. Large hardness values reduce the equilibrium amount transferred.</Body><MathX tex="q^*=\frac{\chi_A-\chi_B}{\eta_A+\eta_B}" /></Panel>
      </Grid>

      <SectionTitle n="10" title="High-yield cautions" subtitle="These prevent the most common conceptual and numerical errors." />
      <Grid min={270}>
        {[
          ["Not a free-atom observable","Do not speak of the electronegativity of an isolated gaseous atom in the same sense as ionization energy or electron affinity.",C.cyan],
          ["Sign convention matters","Electron affinity A is often treated as a positive energy release, whereas electron-gain enthalpy for an exothermic process is negative.",C.gold],
          ["No universal ionic cutoff","A numerical Δχ cannot by itself classify every bond; polarization, lattice, environment and structure matter.",C.coral],
          ["Noble-gas values need context","Allred–Rochow-like values can be estimated using orbital radii, but ordinary bond-based electronegativity has limited meaning for an atom that does not form the bond under discussion.",C.violet],
          ["Do not mix scales silently","Pauling, Mulliken and Allred–Rochow values are calibrated differently. State the scale before comparing numbers.",C.mint],
          ["Scope discipline","The section stays with Pauling, Mulliken, Allred–Rochow and thermodynamic charge-transfer ideas; unrelated scale families are omitted.",C.blue],
        ].map(([title,body,accent])=><Panel key={String(title)} accent={String(accent)}><PanelTitle accent={String(accent)}>{title}</PanelTitle><Body>{body}</Body></Panel>)}
      </Grid>
    </section>
  );
}
