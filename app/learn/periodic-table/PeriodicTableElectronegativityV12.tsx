"use client";

import React, { useMemo, useState } from "react";
import * as katex from "katex";

const T = {
  bg: "#07131f",
  panel: "#0d2030",
  panel2: "#12283b",
  panel3: "#172f45",
  border: "#294a65",
  text: "#f2f7fb",
  dim: "#c1d0dc",
  faint: "#7890a4",
  cyan: "#63d5ea",
  gold: "#f3c45e",
  mint: "#81dfbc",
  coral: "#f09174",
  violet: "#c8a9ea",
  blue: "#8bbcf0",
  red: "#ff7b7b",
  green: "#88e0a2",
  serif: "Georgia, 'Iowan Old Style', 'Times New Roman', serif",
  sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif",
  mono: "'SFMono-Regular', Consolas, 'Liberation Mono', monospace",
};

function MathX({ tex, display = true }: { tex: string; display?: boolean }) {
  const html = useMemo(
    () => katex.renderToString(tex, { throwOnError: false, displayMode: display, output: "htmlAndMathml", strict: "warn", trust: false }),
    [tex, display],
  );
  return (
    <span
      style={{ display: display ? "block" : "inline", maxWidth: "100%", overflowX: display ? "auto" : "visible", paddingBottom: display ? 2 : 0 }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function Hero() {
  return (
    <header style={{ border: `1px solid ${T.border}`, borderRadius: 22, overflow: "hidden", background: `radial-gradient(circle at 88% 12%, ${T.cyan}22, transparent 33%), linear-gradient(145deg, ${T.panel3}, ${T.panel})`, marginBottom: 28 }}>
      <div style={{ padding: "clamp(20px,4vw,38px)" }}>
        <div style={{ color: T.cyan, fontFamily: T.mono, fontWeight: 900, letterSpacing: 1.2, fontSize: 12 }}>ELECTRONEGATIVITY · COMPLETE CONCEPT SYSTEM</div>
        <h1 style={{ margin: "8px 0 10px", color: T.text, fontFamily: T.serif, fontSize: "clamp(34px,5vw,58px)", lineHeight: 1.03 }}>From bond pull to chemical behaviour</h1>
        <p style={{ margin: 0, color: T.dim, fontFamily: T.sans, fontSize: "clamp(15px,2vw,18px)", lineHeight: 1.7, maxWidth: 980 }}>
          A step-by-step chapter that begins with the meaning of electronegativity and builds up to Pauling, Mulliken, Allred–Rochow, charge dependence, periodic trends, applications, worked numericals and JEE Advanced practice.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 }}>
          {["Simple language", "Correct KaTeX", "Animated SVGs", "Data tables", "Worked numericals", "Order questions", "Integer type"].map((x) => (
            <span key={x} style={{ border: `1px solid ${T.cyan}66`, color: T.cyan, borderRadius: 999, padding: "6px 10px", fontFamily: T.sans, fontSize: 12, fontWeight: 800, background: `${T.cyan}0d` }}>{x}</span>
          ))}
        </div>
      </div>
    </header>
  );
}

function SectionTitle({ n, title, lead }: { n: string; title: string; lead?: string }) {
  return (
    <div style={{ margin: "34px 0 14px" }}>
      <div style={{ color: T.cyan, fontFamily: T.mono, fontSize: 11, fontWeight: 900, letterSpacing: 1.3 }}>{n}</div>
      <h2 style={{ color: T.gold, fontFamily: T.serif, fontSize: "clamp(25px,3.3vw,37px)", lineHeight: 1.15, margin: "5px 0 5px" }}>{title}</h2>
      {lead ? <p style={{ color: T.dim, fontFamily: T.sans, fontSize: 14.5, lineHeight: 1.68, margin: 0, maxWidth: 1030 }}>{lead}</p> : null}
    </div>
  );
}

function Panel({ children, accent = T.cyan, style }: { children: React.ReactNode; accent?: string; style?: React.CSSProperties }) {
  return <div style={{ minWidth: 0, overflow: "hidden", border: `1px solid ${T.border}`, borderTop: `3px solid ${accent}`, borderRadius: 15, background: `linear-gradient(180deg,${T.panel2},${T.panel})`, padding: "16px 17px", ...style }}>{children}</div>;
}

function PanelTitle({ children, accent = T.cyan }: { children: React.ReactNode; accent?: string }) {
  return <h3 style={{ color: T.text, fontFamily: T.serif, fontSize: 19, lineHeight: 1.25, margin: "0 0 9px", paddingLeft: 10, borderLeft: `3px solid ${accent}` }}>{children}</h3>;
}

function P({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <p style={{ color: T.text, fontFamily: T.sans, fontSize: 14.15, lineHeight: 1.7, margin: "0 0 11px", ...style }}>{children}</p>;
}

function Grid({ children, min = 285 }: { children: React.ReactNode; min?: number }) {
  return <div style={{ display: "grid", gridTemplateColumns: `repeat(auto-fit,minmax(min(100%,${min}px),1fr))`, gap: 13, alignItems: "stretch" }}>{children}</div>;
}

function Note({ title, children, accent = T.gold }: { title: string; children: React.ReactNode; accent?: string }) {
  return <div style={{ margin: "12px 0", padding: "10px 13px", borderLeft: `3px solid ${accent}`, borderRadius: "0 10px 10px 0", background: `${accent}10` }}><div style={{ color: accent, fontFamily: T.sans, fontSize: 11, fontWeight: 900, letterSpacing: .7, textTransform: "uppercase", marginBottom: 4 }}>{title}</div><div style={{ color: T.text, fontFamily: T.sans, fontSize: 13.6, lineHeight: 1.62 }}>{children}</div></div>;
}

function Bullets({ items }: { items: React.ReactNode[] }) {
  return <ul style={{ margin: "7px 0 0", paddingLeft: 21, display: "grid", gap: 7 }}>{items.map((x, i) => <li key={i} style={{ color: T.dim, fontFamily: T.sans, fontSize: 13.6, lineHeight: 1.6 }}>{x}</li>)}</ul>;
}

function FormulaCard({ title, tex, note, accent = T.cyan }: { title: string; tex: string; note?: React.ReactNode; accent?: string }) {
  return <Panel accent={accent}><div style={{ color: accent, fontFamily: T.sans, fontSize: 12, fontWeight: 900, letterSpacing: .6, textTransform: "uppercase", marginBottom: 6 }}>{title}</div><MathX tex={tex}/>{note ? <div style={{ color: T.dim, fontFamily: T.sans, fontSize: 13.1, lineHeight: 1.55 }}>{note}</div> : null}</Panel>;
}

function TableX({ columns, rows, minWidth = 720, accent = T.cyan }: { columns: string[]; rows: React.ReactNode[][]; minWidth?: number; accent?: string }) {
  return <div style={{ width: "100%", overflowX: "auto", border: `1px solid ${T.border}`, borderRadius: 13, margin: "11px 0" }}><table style={{ width: "100%", minWidth, borderCollapse: "collapse", fontFamily: T.sans, fontSize: 13.1 }}><thead><tr>{columns.map(c => <th key={c} style={{ color: accent, padding: "9px 11px", textAlign: "left", borderBottom: `2px solid ${accent}`, textTransform: "uppercase", fontSize: 11.2, letterSpacing: .5, whiteSpace: "nowrap" }}>{c}</th>)}</tr></thead><tbody>{rows.map((r, ri) => <tr key={ri} style={{ background: ri % 2 ? "rgba(255,255,255,.018)" : "transparent" }}>{r.map((cell, ci) => <td key={ci} style={{ color: ci === 0 ? T.text : T.dim, fontWeight: ci === 0 ? 750 : 450, padding: "8px 11px", borderBottom: `1px solid ${T.border}`, verticalAlign: "top", lineHeight: 1.48 }}>{cell}</td>)}</tr>)}</tbody></table></div>;
}

function ReplayFigure({ title, caption, children }: { title: string; caption: string; children: (run: number) => React.ReactNode }) {
  const [run, setRun] = useState(0);
  return <figure style={{ margin: "13px 0 19px", border: `1px solid ${T.border}`, borderRadius: 16, overflow: "hidden", background: T.bg }}><div key={run}>{children(run)}</div><figcaption style={{ display: "flex", justifyContent: "space-between", gap: 14, alignItems: "center", flexWrap: "wrap", borderTop: `1px solid ${T.border}`, padding: "11px 14px" }}><div><div style={{ color: T.text, fontFamily: T.serif, fontSize: 16, fontWeight: 800 }}>{title}</div><div style={{ color: T.dim, fontFamily: T.sans, fontSize: 12.5, lineHeight: 1.48 }}>{caption}</div></div><button type="button" onClick={() => setRun(v => v + 1)} style={{ border: `1px solid ${T.cyan}88`, color: T.cyan, background: `${T.cyan}10`, borderRadius: 999, padding: "7px 11px", fontFamily: T.sans, fontWeight: 900, cursor: "pointer" }}>↻ Replay</button></figcaption></figure>;
}

function BondPullSVG() {
  return <svg viewBox="0 0 820 330" role="img" aria-labelledby="bp-title bp-desc" style={{ width: "100%", height: "auto", display: "block" }}>
    <title id="bp-title">Bonding electron cloud pulled toward the more electronegative atom</title><desc id="bp-desc">A polar bond A B shows partial positive charge on A, partial negative charge on B and the shared electron cloud shifted toward B.</desc>
    <defs><linearGradient id="bp-cloud" x1="0" x2="1"><stop stopColor={T.coral} stopOpacity=".34"/><stop offset=".62" stopColor={T.cyan} stopOpacity=".86"/></linearGradient><filter id="bp-glow"><feGaussianBlur stdDeviation="7"/></filter><marker id="bp-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10Z" fill={T.gold}/></marker></defs>
    <rect width="820" height="330" fill={T.bg}/><text x="34" y="39" fill={T.text} fontFamily={T.serif} fontSize="25" fontWeight="700">Electronegativity acts only inside a bond</text>
    <circle cx="235" cy="160" r="52" fill={`${T.coral}24`} stroke={T.coral} strokeWidth="3"/><circle cx="585" cy="160" r="52" fill={`${T.cyan}24`} stroke={T.cyan} strokeWidth="3"/>
    <text x="235" y="169" textAnchor="middle" fill={T.text} fontFamily={T.serif} fontSize="35" fontWeight="700">A</text><text x="585" y="169" textAnchor="middle" fill={T.text} fontFamily={T.serif} fontSize="35" fontWeight="700">B</text>
    <ellipse cx="438" cy="160" rx="172" ry="54" fill="url(#bp-cloud)" filter="url(#bp-glow)"><animate attributeName="cx" values="400;450;438" dur="2.4s" repeatCount="indefinite"/></ellipse><ellipse cx="438" cy="160" rx="164" ry="44" fill="url(#bp-cloud)" opacity=".95"/>
    <circle cx="420" cy="151" r="8" fill={T.gold}><animate attributeName="cx" values="400;486;455" dur="2.2s" repeatCount="indefinite"/></circle><circle cx="444" cy="169" r="8" fill={T.gold}><animate attributeName="cx" values="420;512;474" dur="2.2s" begin=".18s" repeatCount="indefinite"/></circle>
    <text x="235" y="93" textAnchor="middle" fill={T.coral} fontFamily={T.sans} fontSize="19" fontWeight="800">δ+</text><text x="585" y="93" textAnchor="middle" fill={T.cyan} fontFamily={T.sans} fontSize="19" fontWeight="800">δ−</text>
    <line x1="370" y1="255" x2="545" y2="255" stroke={T.gold} strokeWidth="4" markerEnd="url(#bp-arrow)"/><text x="458" y="286" textAnchor="middle" fill={T.gold} fontFamily={T.sans} fontSize="15" fontWeight="800">bond dipole points toward the more electronegative atom</text>
  </svg>;
}

function FactorWheelSVG() {
  const items = [
    { a: -90, t: "smaller radius", c: T.cyan }, { a: -30, t: "higher Zₑff", c: T.gold }, { a: 30, t: "positive charge", c: T.coral },
    { a: 90, t: "more s-character", c: T.mint }, { a: 150, t: "less shielding", c: T.violet }, { a: 210, t: "stronger −I groups", c: T.blue },
  ];
  const cx = 410, cy = 210, r = 145;
  return <svg viewBox="0 0 820 430" role="img" aria-labelledby="fw-title fw-desc" style={{ width: "100%", height: "auto", display: "block" }}><title id="fw-title">Factors that increase electronegativity</title><desc id="fw-desc">A central electronegativity dial is surrounded by six factors: smaller radius, higher effective nuclear charge, positive charge, more s character, less shielding and electron withdrawing substituents.</desc><defs><filter id="fw-glow"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter><marker id="fw-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10Z" fill={T.faint}/></marker></defs><rect width="820" height="430" fill={T.bg}/><text x="32" y="36" fill={T.text} fontFamily={T.serif} fontSize="24" fontWeight="700">Six levers that make an atom pull harder</text><circle cx={cx} cy={cy} r="72" fill={`${T.cyan}18`} stroke={T.cyan} strokeWidth="3" filter="url(#fw-glow)"/><text x={cx} y={cy-4} textAnchor="middle" fill={T.cyan} fontFamily={T.serif} fontSize="29" fontWeight="800">χ ↑</text><text x={cx} y={cy+24} textAnchor="middle" fill={T.dim} fontFamily={T.sans} fontSize="13">stronger bond pull</text>{items.map((it, i) => { const a = it.a * Math.PI / 180; const x = cx + r * Math.cos(a), y = cy + r * Math.sin(a); const x2 = cx + 86 * Math.cos(a), y2 = cy + 86 * Math.sin(a); return <g key={it.t}><line x1={x} y1={y} x2={x2} y2={y2} stroke={T.faint} strokeWidth="2" markerEnd="url(#fw-a)"/><circle cx={x} cy={y} r="48" fill={`${it.c}17`} stroke={it.c} strokeWidth="2"><animate attributeName="r" values="46;50;46" dur={`${2.1+i*.15}s`} repeatCount="indefinite"/></circle><text x={x} y={y-3} textAnchor="middle" fill={it.c} fontFamily={T.sans} fontSize="12" fontWeight="850">{it.t.split(" ")[0]}</text><text x={x} y={y+14} textAnchor="middle" fill={T.dim} fontFamily={T.sans} fontSize="11">{it.t.split(" ").slice(1).join(" ")}</text></g>; })}</svg>;
}

function TrendGraphSVG() {
  const data = [
    ["H",1,2.20],["Li",3,.98],["Be",4,1.57],["B",5,2.04],["C",6,2.55],["N",7,3.04],["O",8,3.44],["F",9,3.98],
    ["Na",11,.93],["Mg",12,1.31],["Al",13,1.61],["Si",14,1.90],["P",15,2.19],["S",16,2.58],["Cl",17,3.16],
    ["K",19,.82],["Ca",20,1.00],["Sc",21,1.36],["Ti",22,1.54],["V",23,1.63],["Cr",24,1.66],["Mn",25,1.55],["Fe",26,1.83],["Co",27,1.88],["Ni",28,1.91],["Cu",29,1.90],["Zn",30,1.65],["Ga",31,1.81],["Ge",32,2.01],["As",33,2.18],["Se",34,2.55],["Br",35,2.96],
    ["Rb",37,.82],["Sr",38,.95],["Y",39,1.22],["Zr",40,1.33],["Nb",41,1.60],["Mo",42,2.16],["Tc",43,1.90],["Ru",44,2.20],["Rh",45,2.28],["Pd",46,2.20],["Ag",47,1.93],["Cd",48,1.69],["In",49,1.78],["Sn",50,1.96],["Sb",51,2.05],["Te",52,2.10],["I",53,2.66],
  ] as const;
  const w=920,h=510,l=65,r=28,t=58,b=78; const x=(z:number)=>l+(z/55)*(w-l-r); const y=(v:number)=>t+(1-v/4.2)*(h-t-b); const pts=data.map(d=>`${x(d[1])},${y(d[2])}`).join(" ");
  const labels = new Set(["H","Li","F","Na","Cl","K","Mn","Zn","Br","Rb","Ru","Pd","I"]);
  return <svg viewBox={`0 0 ${w} ${h}`} role="img" aria-labelledby="tg-title tg-desc" style={{ width:"100%",height:"auto",display:"block" }}><title id="tg-title">Pauling electronegativity variation with atomic number</title><desc id="tg-desc">Electronegativity rises strongly across representative-element periods, changes slowly through transition series and drops at the start of a new period.</desc><rect width={w} height={h} fill={T.bg}/><text x="30" y="34" fill={T.text} fontFamily={T.serif} fontSize="24" fontWeight="700">Electronegativity versus atomic number</text>{[0,1,2,3,4].map(v=><g key={v}><line x1={l} x2={w-r} y1={y(v)} y2={y(v)} stroke={T.border} strokeDasharray="5 8"/><text x={l-12} y={y(v)+5} textAnchor="end" fill={T.dim} fontFamily={T.mono} fontSize="12">{v}</text></g>)}{[10,20,30,40,50].map(v=><g key={v}><line x1={x(v)} x2={x(v)} y1={t} y2={h-b} stroke={T.border} opacity=".5"/><text x={x(v)} y={h-b+25} textAnchor="middle" fill={T.dim} fontFamily={T.mono} fontSize="12">{v}</text></g>)}<line x1={l} x2={l} y1={t} y2={h-b} stroke={T.dim} strokeWidth="2"/><line x1={l} x2={w-r} y1={h-b} y2={h-b} stroke={T.dim} strokeWidth="2"/><polyline points={pts} fill="none" stroke={T.cyan} strokeWidth="3.5" strokeLinejoin="round" strokeLinecap="round" pathLength="1" strokeDasharray="1" strokeDashoffset="1"><animate attributeName="stroke-dashoffset" from="1" to="0" dur="1.6s" fill="freeze"/></polyline>{data.map((d,i)=><g key={d[0]}><circle cx={x(d[1])} cy={y(d[2])} r={labels.has(d[0])?5.8:3.7} fill={labels.has(d[0])?T.gold:T.cyan} stroke={T.bg} strokeWidth="1.5"/><title>{`${d[0]}: χP = ${d[2]}`}</title>{labels.has(d[0])?<text x={x(d[1])} y={y(d[2])-(i%2?10:13)} textAnchor="middle" fill={T.gold} fontFamily={T.mono} fontSize="11" fontWeight="800">{d[0]}</text>:null}</g>)}<text x={(l+w-r)/2} y={h-20} textAnchor="middle" fill={T.text} fontFamily={T.sans} fontSize="15" fontWeight="800">atomic number, Z</text><text transform={`translate(19 ${(t+h-b)/2}) rotate(-90)`} textAnchor="middle" fill={T.text} fontFamily={T.sans} fontSize="15" fontWeight="800">Pauling electronegativity, χP</text><g transform="translate(640 72)"><rect width="240" height="78" rx="12" fill={`${T.panel3}ee`} stroke={T.border}/><text x="14" y="24" fill={T.gold} fontFamily={T.sans} fontSize="12" fontWeight="850">Strong rise: s- and p-block periods</text><text x="14" y="45" fill={T.cyan} fontFamily={T.sans} fontSize="12" fontWeight="850">Gentle change: d-block rows</text><text x="14" y="65" fill={T.dim} fontFamily={T.sans} fontSize="11">f-block values stay in a narrow range</text></g></svg>;
}

function AllredGraphSVG() {
  const pts = [[.8,1.03],[1.5,1.28],[2.4,1.58],[3.1,1.86],[4.2,2.25],[5.2,2.62],[6.5,3.08],[7.4,3.42],[8.6,3.82]];
  const w=820,h=430,l=70,r=32,t=62,b=72; const x=(v:number)=>l+(v/9.4)*(w-l-r); const y=(v:number)=>t+(1-v/4.4)*(h-t-b);
  return <svg viewBox={`0 0 ${w} ${h}`} role="img" aria-labelledby="ar-title ar-desc" style={{width:"100%",height:"auto",display:"block"}}><title id="ar-title">Allred Rochow calibration graph</title><desc id="ar-desc">Pauling electronegativity is approximately linear with effective nuclear charge divided by covalent radius squared, with slope 0.359 and intercept 0.744.</desc><rect width={w} height={h} fill={T.bg}/><text x="30" y="34" fill={T.text} fontFamily={T.serif} fontSize="24" fontWeight="700">Allred–Rochow electrostatic calibration</text>{[0,1,2,3,4].map(v=><g key={v}><line x1={l} x2={w-r} y1={y(v)} y2={y(v)} stroke={T.border} strokeDasharray="5 8"/><text x={l-12} y={y(v)+4} textAnchor="end" fill={T.dim} fontFamily={T.mono} fontSize="12">{v}</text></g>)}{[0,2,4,6,8].map(v=><g key={v}><line x1={x(v)} x2={x(v)} y1={t} y2={h-b} stroke={T.border} opacity=".45"/><text x={x(v)} y={h-b+24} textAnchor="middle" fill={T.dim} fontFamily={T.mono} fontSize="12">{v}</text></g>)}<line x1={l} x2={l} y1={t} y2={h-b} stroke={T.dim} strokeWidth="2"/><line x1={l} x2={w-r} y1={h-b} y2={h-b} stroke={T.dim} strokeWidth="2"/><line x1={x(0)} y1={y(.744)} x2={x(9.4)} y2={y(.359*9.4+.744)} stroke={T.gold} strokeWidth="4" pathLength="1" strokeDasharray="1" strokeDashoffset="1"><animate attributeName="stroke-dashoffset" from="1" to="0" dur="1.2s" fill="freeze"/></line>{pts.map((p,i)=><circle key={i} cx={x(p[0])} cy={y(p[1])} r="5" fill={T.cyan} stroke={T.bg} strokeWidth="2"><animate attributeName="r" from="0" to="5" dur=".45s" begin={`${.08*i}s`} fill="freeze"/></circle>)}<text x="520" y="115" fill={T.gold} fontFamily={T.mono} fontSize="15" fontWeight="850">slope ≈ 0.359</text><text x="520" y="138" fill={T.dim} fontFamily={T.mono} fontSize="14">intercept = 0.744</text><text x={(l+w-r)/2} y={h-20} textAnchor="middle" fill={T.text} fontFamily={T.sans} fontSize="15" fontWeight="800">Z* / r²cov  (r in Å)</text><text transform={`translate(20 ${(t+h-b)/2}) rotate(-90)`} textAnchor="middle" fill={T.text} fontFamily={T.sans} fontSize="15" fontWeight="800">Pauling electronegativity, χP</text></svg>;
}

function ChargeDependenceSVG() {
  const w=820,h=430,l=78,r=34,t=62,b=70; const x=(q:number)=>l+((q+1.1)/2.2)*(w-l-r); const y=(v:number)=>t+(1-v/16)*(h-t-b);
  const lines=[{n:"F",a:12.2,b:17.6,c:T.gold},{n:"Cl",a:10.9,b:11.3,c:T.cyan},{n:"I",a:8.1,b:9.15,c:T.violet}];
  return <svg viewBox={`0 0 ${w} ${h}`} role="img" aria-labelledby="cd-title cd-desc" style={{width:"100%",height:"auto",display:"block"}}><title id="cd-title">Charge dependent electronegativity</title><desc id="cd-desc">Straight lines show electronegativity chi equals a plus b q for fluorine chlorine and iodine. Positive charge raises electronegativity and negative charge lowers it.</desc><rect width={w} height={h} fill={T.bg}/><text x="30" y="34" fill={T.text} fontFamily={T.serif} fontSize="24" fontWeight="700">Olympiad extension: χ changes with charge</text>{[0,4,8,12,16].map(v=><g key={v}><line x1={l} x2={w-r} y1={y(v)} y2={y(v)} stroke={T.border} strokeDasharray="5 8"/><text x={l-12} y={y(v)+4} textAnchor="end" fill={T.dim} fontFamily={T.mono} fontSize="12">{v}</text></g>)}{[-1,-.5,0,.5,1].map(v=><g key={v}><line x1={x(v)} x2={x(v)} y1={t} y2={h-b} stroke={T.border} opacity=".45"/><text x={x(v)} y={h-b+24} textAnchor="middle" fill={T.dim} fontFamily={T.mono} fontSize="12">{v}</text></g>)}<line x1={l} x2={l} y1={t} y2={h-b} stroke={T.dim} strokeWidth="2"/><line x1={l} x2={w-r} y1={h-b} y2={h-b} stroke={T.dim} strokeWidth="2"/>{lines.map((ln,i)=><g key={ln.n}><line x1={x(-.65)} y1={y(ln.a+ln.b*(-.65))} x2={x(.2)} y2={y(ln.a+ln.b*(.2))} stroke={ln.c} strokeWidth="4" pathLength="1" strokeDasharray="1" strokeDashoffset="1"><animate attributeName="stroke-dashoffset" from="1" to="0" dur="1s" begin={`${i*.25}s`} fill="freeze"/></line><text x={x(.22)} y={y(ln.a+ln.b*(.2))+4} fill={ln.c} fontFamily={T.mono} fontSize="14" fontWeight="850">{ln.n}</text></g>)}<line x1={x(0)} x2={x(0)} y1={t} y2={h-b} stroke={T.faint} strokeWidth="2" strokeDasharray="7 6"/><text x={x(0)+8} y={t+18} fill={T.dim} fontFamily={T.sans} fontSize="12">neutral atom</text><text x={(l+w-r)/2} y={h-20} textAnchor="middle" fill={T.text} fontFamily={T.sans} fontSize="15" fontWeight="800">charge, q</text><text transform={`translate(20 ${(t+h-b)/2}) rotate(-90)`} textAnchor="middle" fill={T.text} fontFamily={T.sans} fontSize="15" fontWeight="800">χ = a + bq</text></svg>;
}

function KetelaarSVG() {
  return <svg viewBox="0 0 820 480" role="img" aria-labelledby="kt-title kt-desc" style={{width:"100%",height:"auto",display:"block"}}><title id="kt-title">Ketelaar bond triangle</title><desc id="kt-desc">The lower left region represents metallic bonding, lower right covalent bonding and upper region ionic bonding. Bond character depends on both electronegativity difference and mean electronegativity.</desc><defs><linearGradient id="kt-g" x1="0" x2="1"><stop stopColor={T.coral} stopOpacity=".55"/><stop offset=".5" stopColor={T.violet} stopOpacity=".42"/><stop offset="1" stopColor={T.cyan} stopOpacity=".55"/></linearGradient></defs><rect width="820" height="480" fill={T.bg}/><text x="32" y="35" fill={T.text} fontFamily={T.serif} fontSize="24" fontWeight="700">Bond type needs two coordinates, not one cut-off</text><path d="M410 72L100 393H720Z" fill="url(#kt-g)" stroke={T.dim} strokeWidth="2"/><path d="M410 72L410 393M100 393L565 233M720 393L255 233" stroke={T.border} strokeWidth="2" strokeDasharray="7 7"/><text x="410" y="117" textAnchor="middle" fill={T.gold} fontFamily={T.serif} fontSize="27" fontWeight="800">IONIC</text><text x="198" y="367" textAnchor="middle" fill={T.coral} fontFamily={T.serif} fontSize="25" fontWeight="800">METALLIC</text><text x="622" y="367" textAnchor="middle" fill={T.cyan} fontFamily={T.serif} fontSize="25" fontWeight="800">COVALENT</text><circle cx="404" cy="155" r="7" fill={T.gold}/><text x="421" y="160" fill={T.dim} fontFamily={T.sans} fontSize="12">NaCl-like</text><circle cx="612" cy="342" r="7" fill={T.cyan}/><text x="628" y="347" fill={T.dim} fontFamily={T.sans} fontSize="12">Cl₂-like</text><circle cx="210" cy="344" r="7" fill={T.coral}/><text x="126" y="329" fill={T.dim} fontFamily={T.sans} fontSize="12">Na–Na-like</text><text x="410" y="448" textAnchor="middle" fill={T.text} fontFamily={T.sans} fontSize="14" fontWeight="800">mean electronegativity, χ̄  →</text><text transform="translate(45 267) rotate(-90)" textAnchor="middle" fill={T.text} fontFamily={T.sans} fontSize="14" fontWeight="800">electronegativity difference, Δχ  →</text></svg>;
}

function WaterDipoleSVG() {
  return <svg viewBox="0 0 820 370" role="img" aria-labelledby="wd-title wd-desc" style={{width:"100%",height:"auto",display:"block"}}><title id="wd-title">Vector addition of bond dipoles in water</title><desc id="wd-desc">Two oxygen hydrogen bond dipoles add along the angle bisector to produce a net molecular dipole moment.</desc><defs><marker id="wd-g" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10Z" fill={T.gold}/></marker><marker id="wd-c" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10Z" fill={T.cyan}/></marker></defs><rect width="820" height="370" fill={T.bg}/><text x="30" y="35" fill={T.text} fontFamily={T.serif} fontSize="24" fontWeight="700">Electronegativity creates bond dipoles; shape decides the net dipole</text><circle cx="410" cy="110" r="26" fill={`${T.coral}28`} stroke={T.coral} strokeWidth="2"/><circle cx="255" cy="270" r="19" fill={`${T.blue}28`} stroke={T.blue} strokeWidth="2"/><circle cx="565" cy="270" r="19" fill={`${T.blue}28`} stroke={T.blue} strokeWidth="2"/><text x="410" y="118" textAnchor="middle" fill={T.text} fontFamily={T.serif} fontSize="24" fontWeight="800">O</text><text x="255" y="277" textAnchor="middle" fill={T.text} fontFamily={T.serif} fontSize="18">H</text><text x="565" y="277" textAnchor="middle" fill={T.text} fontFamily={T.serif} fontSize="18">H</text><line x1="392" y1="130" x2="269" y2="255" stroke={T.dim} strokeWidth="4"/><line x1="428" y1="130" x2="551" y2="255" stroke={T.dim} strokeWidth="4"/><line x1="278" y1="247" x2="389" y2="134" stroke={T.gold} strokeWidth="4" markerEnd="url(#wd-g)" pathLength="1" strokeDasharray="1" strokeDashoffset="1"><animate attributeName="stroke-dashoffset" from="1" to="0" dur="1s" fill="freeze"/></line><line x1="542" y1="247" x2="431" y2="134" stroke={T.gold} strokeWidth="4" markerEnd="url(#wd-g)" pathLength="1" strokeDasharray="1" strokeDashoffset="1"><animate attributeName="stroke-dashoffset" from="1" to="0" dur="1s" begin=".25s" fill="freeze"/></line><line x1="410" y1="117" x2="410" y2="320" stroke={T.cyan} strokeWidth="5" markerEnd="url(#wd-c)" pathLength="1" strokeDasharray="1" strokeDashoffset="1"><animate attributeName="stroke-dashoffset" from="1" to="0" dur="1s" begin=".7s" fill="freeze"/></line><path d="M354 170A80 80 0 0 1 466 170" fill="none" stroke={T.faint} strokeWidth="2" strokeDasharray="5 5"/><text x="410" y="191" textAnchor="middle" fill={T.dim} fontFamily={T.mono} fontSize="13">104.5°</text><text x="431" y="340" fill={T.cyan} fontFamily={T.sans} fontSize="13" fontWeight="850">μ = 1.85 D</text></svg>;
}

const paulingValues = [
  ["H","2.20"],["Li","0.98"],["Be","1.57"],["B","2.04"],["C","2.55"],["N","3.04"],["O","3.44"],["F","3.98"],
  ["Na","0.93"],["Mg","1.31"],["Al","1.61"],["Si","1.90"],["P","2.19"],["S","2.58"],["Cl","3.16"],
  ["K","0.82"],["Ca","1.00"],["Ga","1.81"],["Ge","2.01"],["As","2.18"],["Se","2.55"],["Br","2.96"],
  ["Rb","0.82"],["Sr","0.95"],["In","1.78"],["Sn","1.96"],["Sb","2.05"],["Te","2.10"],["I","2.66"],
  ["Cs","0.79"],["Ba","0.89"],["Tl","2.04"],["Pb","2.33"],["Bi","2.02"],["Au","2.54"],["Hg","2.00"],
];

const worked = [
  { q: "Calculate χ(H) from E(H–F)=566, E(H–H)=436, E(F–F)=158 kJ mol⁻¹ and χ(F)=4.00.", steps: ["Ecov(H–F)=√(436×158)=262.5 kJ mol⁻¹", "Δ=566−262.5=303.5 kJ mol⁻¹", "|χF−χH|=0.102√303.5=1.78", "χH=4.00−1.78=2.22"] },
  { q: "BCl₃ has ΔfH°=−400.5 kJ mol⁻¹. Estimate |χCl−χB| using the simple thermochemical relation.", steps: ["For three B–Cl bonds: −ΔH=96.5×3×(Δχ)²", "Δχ=√[400.5/(96.5×3)]=1.18"] },
  { q: "For Cl, IE=13.0 eV and EA=4.0 eV. Find Mulliken χ and a Pauling estimate.", steps: ["χM=(13.0+4.0)/2=8.50 eV", "χP≈0.336χM−0.20=2.66"] },
  { q: "For Br, IE=272.3 and EA=77.7 kcal mol⁻¹. Find χM and χP.", steps: ["χM=(272.3+77.7)/(2×23.06)=7.59", "χP≈0.336×7.59−0.20=2.35"] },
  { q: "Estimate χAR of As if r cov=1.20 Å and isolated-atom Z*=6.30.", steps: ["Use Z*−0.35=5.95", "χAR=0.359(5.95)/(1.20)²+0.744≈2.23"] },
  { q: "Use Hanny–Smyth to estimate % ionic character for Δχ=1.4.", steps: ["% ionic=16(1.4)+3.5(1.4)²", "=22.4+6.86=29.26%"] },
  { q: "Predict whether Cs–O–H behaves mainly as an acid or a base using χO=3.44, χH=2.20, χCs=0.79.", steps: ["|χO−χCs|=2.65", "|χO−χH|=1.24", "A–O is more polar, so OH⁻ release is preferred: CsOH is basic"] },
  { q: "Predict the order of acidity: HC≡CH, H₂C=CH₂, CH₃–CH₃.", steps: ["s-character: sp (50%) > sp² (33%) > sp³ (25%)", "χ of carbon follows sp > sp² > sp³", "Acidity: HC≡CH > H₂C=CH₂ > CH₃CH₃"] },
  { q: "Find charge separation in HCl using aH=7.15, bH=12.85, aCl=10.90, bCl=11.30.", steps: ["q=(aCl−aH)/(bCl+bH)", "q=(10.90−7.15)/(11.30+12.85)=0.155", "Approximate ionic character≈15.5%"] },
  { q: "Calculate Δ for HI if χP(H)=2.21 and χP(I)=2.52.", steps: ["Δ=96.5(Δχ)²", "=96.5(0.31)²=9.27 kJ mol⁻¹"] },
  { q: "For AsF₅, EAs–F=484, EAs–As=146, EF–F=155 kJ mol⁻¹. Find χ(As) if χ(F)=4.00.", steps: ["Ecov=√(146×155)=150.4", "Δ=484−150.4=333.6", "Δχ=0.102√333.6=1.86", "χAs≈2.14"] },
  { q: "For AsF₃, EAs–F=406 with the same homonuclear energies. Find χ(As).", steps: ["Δ=406−150.4=255.6", "Δχ=0.102√255.6=1.63", "χAs≈2.37", "The same element can have different effective electronegativity in different environments"] },
];

const orderQuestions = [
  ["χ of carbon orbitals", "C(sp) > C(sp²) > C(sp³)"],
  ["Acidity", "HC≡CH > H₂C=CH₂ > CH₃CH₃"],
  ["Basicity of nitrogen lone pair", "RNH₂ > pyridine > R–C≡N"],
  ["Period 2 electronegativity", "Li < Be < B < C < N < O < F"],
  ["Period 3 electronegativity", "Na < Mg < Al < Si < P < S < Cl"],
  ["Halogens", "F > Cl > Br > I"],
  ["Alkali metals", "Li > Na > K ≈ Rb > Cs"],
  ["Oxide acidity across period 3", "Na₂O < MgO < Al₂O₃ < SiO₂ < P₄O₁₀ < SO₃ < Cl₂O₇"],
  ["Same element, increasing oxidation state", "FeO < Fe₂O₃ in acidic character"],
  ["Oxyacid strength", "HClO < HClO₂ < HClO₃ < HClO₄"],
  ["Hydrogen halide bond polarity", "HF > HCl > HBr > HI"],
  ["Hydrogen halide bond length", "HF < HCl < HBr < HI"],
  ["Group 14 secondary periodicity", "C > Pb > Ge > Sn > Si (using the Pauling values tabulated here)"],
  ["Charge effect", "χ(X⁺) > χ(X) > χ(X⁻)"],
  ["Carbon positive charge series", "χ(C⁴⁺) > χ(C³⁺) > χ(C²⁺) > χ(C⁺) > χ(C)"],
  ["Metallic character", "Cs > Rb > K > Na > Li"],
  ["Nonmetallic character", "F > O > N > C > B"],
  ["d-block trend, first row", "generally Sc → Cu rises slowly, with dips near Mn and Zn"],
];

const integerQuestions = [
  ["How many major factors in the memory rule Small–Strong–Positive–s-rich–Low shielding–−I?", "6"],
  ["How many bond-energy terms (E_A-B, E_A-A, E_B-B) appear inside the geometric-mean Δ formula?", "3"],
  ["How many electrons are used in the valence-shell shielding count for covalently bonded Br?", "7"],
  ["How many O–H bond dipoles add in H₂O?", "2"],
  ["How many variables define the Ketelaar triangle coordinates used here?", "2"],
  ["How many bonds are counted in BCl₃ in the simple thermochemical equation?", "3"],
  ["For Δχ=2.0, integer part of Hanny–Smyth % ionic character?", "46"],
  ["If IE=12 eV and EA=4 eV, χM equals?", "8"],
  ["If χA=4 and χB=2, Δχ equals?", "2"],
  ["Number of valence electrons in F used for normal group classification?", "7"],
  ["Number of p electrons in Cl valence shell?", "5"],
  ["Number of s-character percentage in sp hybrid orbital?", "50"],
];

const calculationQuestions = [
  ["Using Hanny–Smyth, % ionic character for Δχ=1.0", "19.5%"],
  ["Using Hanny–Smyth, % ionic character for Δχ=2.0", "46%"],
  ["χM for IE=10 eV and EA=2 eV", "6 eV"],
  ["χP from χM=8 using 0.336χM−0.20", "2.49"],
  ["Δ for Δχ=1.5", "217.1 kJ mol⁻¹"],
  ["Δχ for Δ=96.5 kJ mol⁻¹", "1.00"],
  ["Δχ for Δ=386 kJ mol⁻¹", "2.00"],
  ["χAR for Z*=5.0 and r=1.0 Å using uncorrected formula", "2.54"],
  ["χAR for Z*=5.0 and r=2.0 Å using uncorrected formula", "1.19"],
  ["Mean electronegativity of HCl using H=2.20, Cl=3.16", "2.68"],
  ["Δχ of HCl", "0.96"],
  ["Δχ of HF using H=2.20, F=3.98", "1.78"],
];

function WorkedExample({ n, q, steps }: { n: number; q: string; steps: string[] }) {
  return <Panel accent={n % 3 === 0 ? T.violet : n % 3 === 1 ? T.cyan : T.gold}><div style={{ color: T.cyan, fontFamily: T.mono, fontWeight: 900, fontSize: 11 }}>WORKED EXAMPLE {String(n).padStart(2,"0")}</div><P style={{ marginTop: 7, fontWeight: 750 }}>{q}</P><ol style={{ margin: 0, paddingLeft: 22, display: "grid", gap: 6 }}>{steps.map((s,i)=><li key={i} style={{ color: T.dim, fontFamily: T.sans, fontSize: 13.2, lineHeight: 1.55 }}>{s}</li>)}</ol></Panel>;
}

function QuestionTable({ title, rows, accent }: { title: string; rows: string[][]; accent: string }) {
  return <Panel accent={accent}><PanelTitle accent={accent}>{title}</PanelTitle><div style={{ display: "grid", gap: 8 }}>{rows.map((r,i)=><div key={i} style={{ display: "grid", gridTemplateColumns: "40px minmax(0,1fr)", gap: 8, paddingBottom: 8, borderBottom: `1px solid ${T.border}` }}><div style={{ color: accent, fontFamily: T.mono, fontWeight: 900 }}>{String(i+1).padStart(2,"0")}</div><div><div style={{ color: T.text, fontFamily: T.sans, fontSize: 13.2, lineHeight: 1.5 }}>{r[0]}</div><div style={{ color: T.mint, fontFamily: T.sans, fontSize: 12.6, lineHeight: 1.45, marginTop: 3 }}><b>Answer:</b> {r[1]}</div></div></div>)}</div></Panel>;
}

export function SectionElectronegativityV12() {
  return <section data-periodicity-section="electronegativity-v12" style={{ color: T.text, fontFamily: T.sans, maxWidth: 1180, margin: "0 auto", padding: "0 clamp(10px,2vw,18px) 44px" }}>
    <Hero/>

    <SectionTitle n="01" title="Meaning: what electronegativity really measures" lead="Electronegativity is the ability of a bonded atom to pull the shared electron pair toward itself. It is a relative, unitless number. It is not the same as ionisation energy or electron affinity."/>
    <Grid>
      <Panel accent={T.cyan}><PanelTitle>Definition in one line</PanelTitle><P><b>Electronegativity, χ,</b> describes how strongly an atom attracts the shared electrons of a covalent bond.</P><Note title="Most important idea">An isolated atom does not have a useful bond electronegativity because there is no shared bond pair to attract. The value depends on the atom’s chemical environment.</Note><MathX tex={String.raw`A^{\delta+}-B^{\delta-}\qquad \chi_B>\chi_A`}/></Panel>
      <Panel accent={T.gold}><PanelTitle>Do not mix these three</PanelTitle><TableX minWidth={570} columns={["Quantity","Meaning","Applies to","Unit"]} rows={[["Electronegativity","Pull on shared bond electrons","Bonded atom","No unit"],["Electron affinity","Energy change when a gaseous atom gains e⁻","Isolated gaseous atom","kJ mol⁻¹ or eV"],["Ionisation energy","Energy required to remove e⁻ from gaseous atom","Isolated gaseous atom","kJ mol⁻¹ or eV"]]}/></Panel>
    </Grid>
    <ReplayFigure title="Electron cloud shift in a polar bond" caption="The shared cloud moves toward the more electronegative atom, creating partial charges and a bond dipole.">{()=><BondPullSVG/>}</ReplayFigure>
    <Note title="Memory line" accent={T.mint}><b>Electronegativity is a bond property; electron affinity and ionisation energy are isolated-atom energy properties.</b></Note>

    <SectionTitle n="02" title="Factors controlling electronegativity" lead="An atom pulls more strongly when its nucleus is effectively stronger and the bonding electrons can come closer to it."/>
    <ReplayFigure title="The six main levers" caption="Read the arrows inward: each listed change generally increases electronegativity.">{()=><FactorWheelSVG/>}</ReplayFigure>
    <Grid>
      <Panel accent={T.cyan}><PanelTitle>1. Atomic radius</PanelTitle><P>Smaller atom → bonding electrons are closer to the nucleus → stronger attraction.</P><MathX tex={String.raw`\chi\ \text{generally increases as}\ r\ \text{decreases}`}/><P><b>Example:</b> F is more electronegative than I because F is much smaller.</P></Panel>
      <Panel accent={T.gold}><PanelTitle>2. Effective nuclear charge</PanelTitle><P>Higher effective nuclear charge, Z<sub>eff</sub>, means a stronger net pull after shielding is considered.</P><MathX tex={String.raw`Z_{\mathrm{eff}}=Z-S`}/><P>Across a period, Z<sub>eff</sub> increases, so χ usually rises.</P></Panel>
      <Panel accent={T.violet}><PanelTitle>3. Shielding</PanelTitle><P>More shielding weakens nuclear attraction. Poor shielding by d and f electrons can cause unusually high χ in post-transition elements.</P><P><b>Examples:</b> χ(Ga) &gt; χ(Al), χ(Pb) is not much lower than χ(Sn).</P></Panel>
      <Panel accent={T.coral}><PanelTitle>4. Charge and oxidation state</PanelTitle><P>A positively charged centre pulls electrons more strongly; a negatively charged centre pulls less strongly.</P><MathX tex={String.raw`\chi(X^{+})>\chi(X)>\chi(X^{-})`}/><P>Therefore the same element can have different effective χ values in different oxidation states.</P></Panel>
      <Panel accent={T.mint}><PanelTitle>5. Hybridisation</PanelTitle><P>An s orbital penetrates closer to the nucleus than a p orbital. More s-character makes the hybrid orbital more electronegative.</P><MathX tex={String.raw`\chi(sp)>\chi(sp^2)>\chi(sp^3)`}/><P>Carbon values are roughly 3.3, 2.8 and 2.5 respectively.</P></Panel>
      <Panel accent={T.blue}><PanelTitle>6. Substituent and bond environment</PanelTitle><P>Electron-withdrawing groups increase positive character and effective χ of the attached centre. Bond order and local geometry also matter because they change orbital character and electron density.</P><P><b>Example:</b> carbon attached to F is more electron-poor than carbon attached to I.</P></Panel>
    </Grid>
    <Note title="One-line mnemonic" accent={T.gold}><b>Small + strong Z<sub>eff</sub> + positive charge + more s-character + low shielding + electron-withdrawing neighbours = higher χ.</b></Note>

    <SectionTitle n="03" title="Periodic trend and data" lead="The strongest rise occurs across the s- and p-block. Transition-metal values rise much more slowly, and f-block values remain in a narrow band."/>
    <ReplayFigure title="Data-backed Pauling trend" caption="Hover points to read values. The curve resets at the start of each new period.">{()=><TrendGraphSVG/>}</ReplayFigure>
    <Grid>
      <Panel accent={T.cyan}><PanelTitle>Across a period</PanelTitle><Bullets items={["Atomic radius falls.","Effective nuclear charge rises.","Therefore χ generally increases from left to right.","Alkali metals are near the minimum; halogens are near the maximum."]}/></Panel>
      <Panel accent={T.gold}><PanelTitle>Down a representative group</PanelTitle><Bullets items={["New shells increase size and shielding.","Therefore χ generally decreases down the group.","The fall is not always smooth because d- and f-contraction disturb the simple pattern."]}/></Panel>
      <Panel accent={T.violet}><PanelTitle>d- and f-block</PanelTitle><Bullets items={["Across a d-series, χ rises slowly rather than sharply.","Mn and Zn show dips in the 3d row.","Lanthanide χ values stay close to about 1.1 on the Allred–Rochow scale.","5d elements can be unexpectedly electronegative because of lanthanide contraction and relativistic effects."]}/></Panel>
    </Grid>
    <Note title="Noble-gas correction" accent={T.coral}>Do not write “electronegativity of all noble gases is zero.” For a noble gas that does not form a bond, ordinary bond electronegativity has no direct physical meaning. Theoretical Mulliken or Allred–Rochow values can still be calculated, and xenon has meaningful values in its compounds.</Note>
    <TableX columns={["Element","χP","Element","χP","Element","χP","Element","χP"]} rows={Array.from({length:Math.ceil(paulingValues.length/4)},(_,i)=>[...(paulingValues[i]??["—","—"]),...(paulingValues[i+10]??["—","—"]),...(paulingValues[i+20]??["—","—"]),...(paulingValues[i+30]??["—","—"])])}/>

    <SectionTitle n="04" title="Pauling scale: the one formula to learn" lead="Pauling connected electronegativity difference with the extra stability of a heteronuclear bond compared with a hypothetical purely covalent bond."/>
    <Grid>
      <FormulaCard title="Step 1 — resonance (extra stabilisation) energy" tex={String.raw`\Delta_{A-B}=E_{A-B}-\sqrt{E_{A-A}\,E_{B-B}}`} note="Geometric-mean covalent reference — this is the version to use; the older arithmetic-mean reference can give an impossible negative Δ for some bonds." accent={T.gold}/>
      <FormulaCard title="Step 2 — electronegativity difference (Δ in kJ mol⁻¹)" tex={String.raw`|\chi_A-\chi_B|=0.102\sqrt{\Delta_{A-B}}`} note="The standard JEE form. (If Δ happens to be given in kcal mol⁻¹, use 0.208√Δ instead — same relation, different unit.)" accent={T.gold}/>
    </Grid>
    <Note title="What each symbol means" accent={T.cyan}>
      <b>E<sub>A−B</sub></b> = measured bond dissociation energy of the real A–B bond. <b>E<sub>A−A</sub>, E<sub>B−B</sub></b> = bond dissociation energies of the homonuclear reference bonds A–A and B–B. <b>Δ<sub>A−B</sub></b> = resonance (ionic-stabilisation) energy — the "extra" bond strength beyond a purely covalent bond. <b>χ<sub>A</sub>, χ<sub>B</sub></b> = Pauling electronegativities of atoms A and B.
    </Note>
    <Note title="Why √Δ, not Δ itself" accent={T.violet}>The partial charge in a polar bond is roughly proportional to Δχ, and electrostatic stabilisation goes as charge², so Δ ∝ (Δχ)². Taking the square root recovers Δχ. It is √Δ, not Δ, that is roughly additive along a chain of bonds: √Δ(A–B) + √Δ(B–C) ≈ √Δ(A–C).</Note>

    <SectionTitle n="05" title="Mulliken scale: average of losing and gaining tendencies" lead="A strongly electronegative atom is difficult to ionise and also favourable toward accepting an electron. Mulliken combines both ideas."/>
    <Grid>
      <FormulaCard title="The one formula to learn (IE and EA in eV per atom)" tex={String.raw`\chi_M=\frac{IE+EA}{2}`} note="If IE and EA are in kJ mol⁻¹, divide the whole expression by 96.5 to convert to eV first." accent={T.gold}/>
      <FormulaCard title="Convert to Pauling scale" tex={String.raw`\chi_P\approx0.336\chi_M-0.20` } accent={T.violet}/>
    </Grid>
    <Note title="What each symbol means" accent={T.cyan}>
      <b>IE</b> = ionisation energy of the atom. <b>EA</b> = electron affinity of the atom (energy released on gaining an electron). <b>χ<sub>M</sub></b> = Mulliken electronegativity; <b>χ<sub>P</sub></b> = its equivalent on the Pauling scale.
    </Note>
    <Note title="Valence-state refinement" accent={T.mint}>The best Mulliken value uses valence-state ionisation energy and valence-state electron affinity. This is why orbital hybridisation matters: a carbon atom in sp, sp² and sp³ states does not have exactly the same electronegativity.</Note>

    <SectionTitle n="06" title="Allred–Rochow scale: electrostatic force at the covalent radius" lead="This scale turns the intuitive idea ‘stronger effective nucleus and smaller radius means stronger pull’ into an equation."/>
    <Grid>
      <FormulaCard title="The one formula to learn (r in Å)" tex={String.raw`\chi_{AR}=0.359\frac{Z^*}{r_{\mathrm{cov}}^2}+0.744` } note="If a problem supplies the isolated-atom Z*, use Z* − 0.35 in the numerator: the incoming bonding electron adds one more same-shell shielding electron. No other variant of this equation is needed." accent={T.gold}/>
    </Grid>
    <Note title="What each symbol means" accent={T.cyan}>
      <b>Z*</b> = effective nuclear charge felt by the bonding electron. <b>r<sub>cov</sub></b> = covalent radius of the atom, in ångström. <b>χ<sub>AR</sub></b> = Allred–Rochow electronegativity. The constants 0.359 and 0.744 are empirical, fitted so this scale tracks the Pauling scale.
    </Note>
    <ReplayFigure title="Why the formula has a slope and an intercept" caption="The empirical line was fitted so that electrostatic values match the Pauling scale as closely as possible.">{()=><AllredGraphSVG/>}</ReplayFigure>
    <Grid>
      <Panel accent={T.cyan}><PanelTitle>Advantages</PanelTitle><Bullets items={["Easy to calculate once Z* and covalent radius are known.","Useful when bond-energy data are missing.","Explains periodic trends through Z* and radius.","Rationalises high χ of post-transition elements after d- and f-contraction."]}/></Panel>
      <Panel accent={T.coral}><PanelTitle>Limitations</PanelTitle><Bullets items={["Reliable covalent radii are not always available.","The chosen radius depends on bonding environment.","It is still an approximate scale, not a directly measured force.","Theoretical noble-gas values need careful interpretation."]}/></Panel>
    </Grid>

    <SectionTitle n="07" title="Environment dependence: charge, oxidation state and hybridisation" lead="A single permanent electronegativity number is a useful shortcut, but a real atom changes its pulling power when its charge and valence state change."/>
    <Grid>
      <Panel accent={T.coral}><PanelTitle>Charge rule</PanelTitle><MathX tex={String.raw`\chi=a+bq`}/><P>Positive q increases χ; negative q decreases χ. The slope b tells how strongly χ responds to charge.</P><MathX tex={String.raw`b=IE-EA=2\eta`}/></Panel>
      <Panel accent={T.mint}><PanelTitle>Polarisability and hardness</PanelTitle><MathX tex={String.raw`b\propto\frac{1}{\text{polarisability}}`}/><P>Small, hard atoms have large b and limited charge capacity. Large, soft atoms have small b and spread charge more easily.</P></Panel>
      <Panel accent={T.gold}><PanelTitle>Hybridisation rule</PanelTitle><TableX minWidth={470} columns={["Carbon state","s-character","Approx. χP"]} rows={[["sp³","25%","2.52"],["sp²","33.3%","2.80"],["sp","50%","3.34"]]}/></Panel>
    </Grid>
    <ReplayFigure title="Jaffé–Hinze charge-dependent electronegativity" caption="Olympiad enrichment only. The neutral value is a; the slope b is larger for small hard atoms such as F.">{()=><ChargeDependenceSVG/>}</ReplayFigure>
    <Note title="Useful crossing idea" accent={T.violet}>Because F has a steeper χ-versus-charge line than Cl, their lines can cross at sufficiently negative charge. This does not mean neutral chlorine is more electronegative than neutral fluorine; it shows that charge state matters.</Note>

    <SectionTitle n="08" title="Electronegativity equalisation and charge separation" lead="When two atoms bond, charge shifts until their effective electronegativities become equal. This gives an approximate way to estimate partial charge."/>
    <Panel accent={T.cyan}><P>For A becoming negative and B becoming positive:</P><MathX tex={String.raw`\chi_A=a_A-b_Aq\qquad \chi_B=a_B+b_Bq`}/><MathX tex={String.raw`\chi_A=\chi_B\quad\Rightarrow\quad q=\frac{a_A-a_B}{b_A+b_B}`}/><P>The method is approximate because it ignores some overlap, exchange and electrostatic contributions, but it gives a useful first estimate.</P></Panel>
    <TableX columns={["Species / orbital","a (eV)","b (eV)","Meaning"]} rows={[["H 1s","7.15","12.85","small, hard"],["C sp³","8.15","11.40","tetrahedral carbon"],["C sp²","8.90","11.50","trigonal carbon"],["C sp","10.40","11.70","linear carbon"],["O p","9.65","15.30","hard electronegative centre"],["F p","12.20","17.60","very hard; steep charge response"],["Cl p","10.90","11.30","more polarisable than F"],["Br p","8.60","10.20","softer"],["I p","8.10","9.15","largest charge capacity"]]}/>

    <SectionTitle n="09" title="Applications: how electronegativity predicts chemistry" lead="Use electronegativity as a guide, not as the only factor. Bond energy, size, solvation, lattice energy, resonance and molecular shape can also control the final result."/>
    <Grid>
      <Panel accent={T.cyan}><PanelTitle>1. Bond polarity and bond type</PanelTitle><P>Small Δχ gives nearly nonpolar covalent bonding. Moderate Δχ gives polar covalent bonding. Large Δχ favours ionic character.</P><MathX tex={String.raw`\Delta\chi=|\chi_A-\chi_B|`}/><Note title="Caution">A single cut-off such as 1.7 is only a classroom guide. Real bond type also depends on mean electronegativity and structure.</Note></Panel>
      <Panel accent={T.gold}><PanelTitle>2. Percentage ionic character</PanelTitle><MathX tex={String.raw`\%\,\text{ionic}=16\Delta\chi+3.5(\Delta\chi)^2`}/><P>This is the modified Hanny–Smyth expression. A second common estimate is Pauling’s exponential form:</P><MathX tex={String.raw`\%\,\text{ionic}=\left(1-e^{-0.25(\Delta\chi)^2}\right)\times100`}/></Panel>
      <Panel accent={T.mint}><PanelTitle>3. Metallic and nonmetallic character</PanelTitle><MathX tex={String.raw`\text{nonmetallic character}\uparrow\ \text{as}\ \chi\uparrow`}/><MathX tex={String.raw`\text{metallic character}\uparrow\ \text{as}\ \chi\downarrow`}/><P>Hence metallic character increases toward the lower-left of the periodic table.</P></Panel>
    </Grid>
    <ReplayFigure title="Ketelaar triangle" caption="Two compounds with the same Δχ can still differ because their mean electronegativity is different.">{()=><KetelaarSVG/>}</ReplayFigure>

    <Grid>
      <Panel accent={T.coral}><PanelTitle>4. Acidic/basic nature of oxides</PanelTitle><P>Across a period, the central atom becomes more electronegative and its oxides change from basic to amphoteric to acidic.</P><MathX tex={String.raw`\mathrm{Na_2O<MgO<Al_2O_3<SiO_2<P_4O_{10}<SO_3<Cl_2O_7}`}/><P>For the same element, higher oxidation state usually gives a more acidic oxide: Fe₂O₃ is more acidic than FeO.</P></Panel>
      <Panel accent={T.violet}><PanelTitle>5. Oxyacid strength</PanelTitle><P>When the number of O–H groups is comparable, a more electron-withdrawing central atom or higher oxidation state stabilises the conjugate base.</P><MathX tex={String.raw`\mathrm{HClO<HClO_2<HClO_3<HClO_4}`}/><P>Do not use oxidation state alone when the number of ionisable O–H groups changes. For phosphorus oxyacids, count P–OH bonds.</P></Panel>
      <Panel accent={T.blue}><PanelTitle>6. A–O–H: acid or base?</PanelTitle><MathX tex={String.raw`|\chi_O-\chi_A|>|\chi_O-\chi_H|\Rightarrow A-O\ \text{breaks: basic}`}/><MathX tex={String.raw`|\chi_O-\chi_A|<|\chi_O-\chi_H|\Rightarrow O-H\ \text{breaks: acidic}`}/><P>Examples: CsOH is basic; HOCl is acidic.</P></Panel>
      <Panel accent={T.cyan}><PanelTitle>7. Bond length correction</PanelTitle><MathX tex={String.raw`r_{A-B}=r_A+r_B-c|\chi_A-\chi_B|`}/><P>Electronegativity difference can shorten a bond compared with a simple sum of covalent radii. This is the Schomaker–Stevenson idea.</P></Panel>
      <Panel accent={T.gold}><PanelTitle>8. Hydrogen bonding</PanelTitle><P>A strongly electronegative atom makes H more δ⁺ and strengthens the electrostatic part of hydrogen bonding.</P><P>Typical donors: O–H, N–H, F–H. Actual strength also depends on geometry and lone-pair availability.</P></Panel>
      <Panel accent={T.mint}><PanelTitle>9. Hybridisation and acidity/basicity</PanelTitle><MathX tex={String.raw`\chi_C(sp)>\chi_C(sp^2)>\chi_C(sp^3)`}/><P>Therefore terminal alkynes are more acidic than alkenes and alkanes. For nitrogen lone pairs, greater χ makes electron donation harder, so basicity falls.</P></Panel>
      <Panel accent={T.coral}><PanelTitle>10. Oxidation number and naming</PanelTitle><P>Assign bonding electrons to the more electronegative atom when calculating oxidation number.</P><P>OF₂ is oxygen difluoride because F is more electronegative than O. ICl is iodine monochloride because Cl is more electronegative than I.</P></Panel>
      <Panel accent={T.violet}><PanelTitle>11. Group electronegativity and inductive effect</PanelTitle><P>A group behaves like one electron-pulling or electron-pushing unit. Both its inherent electronegativity and its charge capacity matter.</P><MathX tex={String.raw`\chi_G=a_G+b_Gq`}/><MathX tex={String.raw`a_G=\frac{\sum n_i a_i}{N}\qquad b_G\approx\frac{\sum n_i b_i}{N^2}`}/><P>Large groups often have smaller b<sub>G</sub>, so they can spread charge better. This helps explain why alkyl groups can be electron-pushing even when their tabulated χ is close to H.</P></Panel>
      <Panel accent={T.blue}><PanelTitle>12. Path of nucleophilic attack</PanelTitle><P>A nucleophile attacks the centre carrying the larger positive character and having a suitable vacant orbital.</P><P>In CH₃I, attack is mainly at carbon. In CF₃I, the highly electron-withdrawing F atoms can make the soft, polarisable iodine centre unusually positive.</P></Panel>
    </Grid>
    <ReplayFigure title="Bond dipoles add as vectors" caption="The two O–H dipoles do not cancel because water is bent. Electronegativity creates the bond dipoles; geometry determines the molecular result.">{()=><WaterDipoleSVG/>}</ReplayFigure>
    <Grid>
      <FormulaCard title="Bond dipole moment" tex={String.raw`\mu=q\,r`} note="q is the separated charge and r is the bond distance. A large electronegativity difference usually increases q, but molecular shape decides whether bond dipoles cancel."/>
      <FormulaCard title="Sanderson stability ratio" tex={String.raw`\chi_S=SR=\frac{ED}{ED_i}=\left(\frac{r_i}{r}\right)^3`} note="A more compact electron cloud has larger average electron density and therefore larger stability-ratio electronegativity." accent={T.gold}/>
      <FormulaCard title="Mean electronegativity" tex={String.raw`\bar\chi=\frac{\chi_A+\chi_B}{2}`} note="Used together with Δχ in the Ketelaar bond triangle." accent={T.mint}/>
    </Grid>
    <TableX columns={["Group","Approx. χG","aG (eV)","bG (eV)","Behaviour"]} rows={[["CH₃","2.30","7.42","3.10","electron-pushing in many σ-bond frameworks"],["C₂H₅","2.32","7.50","1.77","greater charge capacity than CH₃"],["CF₃","3.46","12.85","3.90","strong electron-withdrawing group"],["CCl₃","2.95","10.25","2.90","electron-withdrawing"],["NH₂","2.47","8.10","4.30","context-dependent donor/withdrawer"],["OH","2.81","9.60","7.00","strongly electronegative but limited charge capacity"],["CN","3.30","12.00","6.25","strong electron-withdrawing group"],["CO₂H","3.05","10.70","3.40","electron-withdrawing group"]]}/>
    <Note title="Pair-memory values" accent={T.cyan}>Useful rough pairs: H and P ≈ 2.1; Be and Al ≈ 1.5–1.6; C, S and I ≈ 2.5–2.7; N and Cl ≈ 3.0–3.2. Use the data table for calculations, not the mnemonic.</Note>

    <SectionTitle n="10" title="Scale comparison and high-yield summary" lead="Different scales use different experimental or theoretical inputs, but they mostly agree on the broad periodic pattern."/>
    <TableX columns={["Scale","Core idea","Main equation","Best use","Main limitation"]} rows={[["Pauling","extra heteronuclear bond stabilisation",<MathX key="pauling-equation" display={false} tex={String.raw`\Delta\chi=0.102\sqrt\Delta`}/>,"bond-energy numericals","relative scale; reference choice"],["Mulliken","average of electron loss and gain energies",<MathX key="mulliken-equation" display={false} tex={String.raw`\chi_M=(IE+EA)/2`}/>,"orbital/valence-state interpretation","EA data may be uncertain"],["Allred–Rochow","electrostatic pull at covalent radius",<MathX key="allred-rochow-equation" display={false} tex={String.raw`\chi=0.359Z^*/r^2+0.744`}/>,"periodic trend and Z* reasoning","radius choice"],["Jaffé–Hinze","charge-dependent chemical potential",<MathX key="jaffe-hinze-equation" display={false} tex={String.raw`\chi=a+bq`}/>,"Olympiad charge and hardness problems","requires a and b parameters"],["Sanderson equalisation","charge flows until χ values equal",<MathX key="sanderson-equation" display={false} tex={String.raw`q=(a_A-a_B)/(b_A+b_B)`}/>,"partial-charge estimate","approximate"]]}/>
    <Grid>
      <Panel accent={T.gold}><PanelTitle>Fast memory map</PanelTitle><Bullets items={["Across a period: χ generally increases.","Down a main group: χ generally decreases.","More positive charge: higher χ.","More s-character: higher χ.","Smaller radius and higher Z* raise χ.","Electron affinity is not the same as electronegativity."]}/></Panel>
      <Panel accent={T.coral}><PanelTitle>Common special cases</PanelTitle><Bullets items={["χ(Ga) can exceed χ(Al) because of poor 3d shielding.","5d elements may be more electronegative than expected after lanthanide contraction.","Mn and Zn produce dips in the 3d trend.","Noble-gas χ is not simply zero; interpret only in a bonding context.","The same element can show different χ in different oxidation states or hybridisations."]}/></Panel>
      <Panel accent={T.mint}><PanelTitle>Scope of this chapter</PanelTitle><P>The focus stays on chemically useful bond-energy, ionisation/electron-affinity, electrostatic, charge-dependent and equalisation models used in periodicity and bonding problems.</P></Panel>
    </Grid>

    <SectionTitle n="11" title="Worked examples" lead="Each example shows the smallest correct chain of reasoning. Keep units with every energy value."/>
    <Grid min={330}>{worked.map((w,i)=><WorkedExample key={i} n={i+1} q={w.q} steps={w.steps}/>)}</Grid>

    <SectionTitle n="12" title="Practice bank with answers" lead="Use these as rapid drills. Try each question first, then compare with the visible answer."/>
    <Grid min={360}>
      <QuestionTable title="Correct-order drills" rows={orderQuestions} accent={T.cyan}/>
      <QuestionTable title="Integer-type drills" rows={integerQuestions} accent={T.gold}/>
      <QuestionTable title="Calculation drills" rows={calculationQuestions} accent={T.mint}/>
    </Grid>

    <SectionTitle n="13" title="JEE Advanced mixed questions" lead="The questions below combine scale conversion, trend reasoning and applications. Answers are given immediately after each question so the section remains useful for self-study."/>
    <TableX minWidth={900} columns={["No.","Question","Answer / key idea"]} rows={[
      ["1","Which is more electronegative: carbon in CH₄ or carbon in HC≡CH?","Carbon in HC≡CH; sp has greater s-character."],
      ["2","Why can χ(Ga) exceed χ(Al)?","Poor shielding by filled 3d electrons contracts the valence shell and raises Z* felt by bonding electrons."],
      ["3","Why is χ not an inherent atomic property?","It depends on bonding partner, charge, oxidation state and hybridisation."],
      ["4","Why is F more electronegative than Cl but Cl can have larger electron affinity?","χ is a bonded-atom pull; EA is an isolated-atom energy. Very small F suffers stronger electron–electron repulsion on electron addition."],
      ["5","For Δχ=1.8, estimate % ionic by Hanny–Smyth.","16(1.8)+3.5(1.8)²=40.14%."],
      ["6","Why is CsOH basic but HOCl acidic?","Compare O–Cs and O–H polarity versus O–Cl and O–H polarity; the preferred bond cleavage changes."],
      ["7","Why is C₂H₂ more acidic than C₂H₄?","Its conjugate base holds negative charge in an sp orbital with 50% s-character, closer to the nucleus."],
      ["8","Why does χ rise slowly across a d-series?","Added electrons enter inner d orbitals; size and Z* change less sharply than in a p-block period."],
      ["9","Why do f-block χ values occupy a narrow range?","The f electrons are inner and the outer bonding environment changes only gradually."],
      ["10","What physical idea does b represent in χ=a+bq?","Charge sensitivity / hardness; smaller b means larger polarisability and charge capacity."],
      ["11","Which has larger χ: Fe²⁺ or Fe³⁺?","Fe³⁺, because greater positive charge raises electron-attracting power."],
      ["12","Why can a Pauling value obtained by converting from the Mulliken scale differ slightly from the tabulated one?","Every scale conversion is a fitted approximation based on a particular dataset and scaling choice."],
      ["13","Why does Pauling use the geometric mean for the covalent reference?","It avoids unphysical negative resonance energies found with the arithmetic mean for some bonds."],
      ["14","What is the sign of Δ in a normal polar A–B bond?","Positive, because observed bond energy exceeds the chosen purely covalent reference."],
      ["15","If r doubles at constant Z*, how does the Allred–Rochow force term change?","It becomes one-fourth."],
      ["16","If Z* doubles at constant r, how does the Allred–Rochow force term change?","It doubles."],
      ["17","Why is Au unusually electronegative for a metal?","Lanthanide contraction and relativistic stabilisation of 6s increase its electron-attracting tendency."],
      ["18","Can bond polarity alone give molecular polarity?","No. Bond-dipole vectors can cancel depending on geometry."],
      ["19","Name the key amphoteric oxide in the period-3 sequence.","Al₂O₃; BeO and ZnO are common amphoteric examples from other periods."],
      ["20","Why is a 1.7 Δχ cut-off not a law?","Bond character is continuous and also depends on mean χ, lattice structure, polarisation and environment."],
    ]}/>

    <SectionTitle n="14" title="Error traps to avoid"/>
    <Grid>
      <Panel accent={T.red}><PanelTitle>Wrong: “noble-gas electronegativity is always zero”</PanelTitle><P>Correct statement: for a noble gas that does not form a bond, ordinary bond electronegativity has no direct meaning. Theoretical values can be calculated; Xe has meaningful values in compounds.</P></Panel>
      <Panel accent={T.red}><PanelTitle>Wrong: χAR = 0.359Z*/r² only</PanelTitle><P>The standard fitted equation contains the intercept +0.744. When isolated-atom Z* is used, the numerator commonly becomes Z*−0.35.</P></Panel>
      <Panel accent={T.red}><PanelTitle>Wrong: acidity depends only on electronegativity</PanelTitle><P>Electronegativity is one factor. Bond strength, resonance, solvation, number of O atoms, number of ionisable O–H bonds and structure can change the order.</P></Panel>
      <Panel accent={T.red}><PanelTitle>Wrong: electron affinity = electronegativity</PanelTitle><P>EA is an energy change for a gaseous isolated atom. χ describes a bonded atom and has no unit.</P></Panel>
      <Panel accent={T.red}><PanelTitle>Wrong: every large Δχ bond is 100% ionic</PanelTitle><P>Bond character is continuous. Polarisation and covalency remain important even in many salts.</P></Panel>
      <Panel accent={T.red}><PanelTitle>Wrong: the same χ for every oxidation state</PanelTitle><P>Higher positive oxidation state generally raises effective electronegativity. Hybridisation and substituents also change it.</P></Panel>
    </Grid>
  </section>;
}

export default SectionElectronegativityV12;
