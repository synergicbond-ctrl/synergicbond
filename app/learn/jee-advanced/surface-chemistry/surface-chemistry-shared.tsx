"use client";

import type { ReactNode } from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { SURFACE_CHEMISTRY_PARTS } from "./part-metadata";

export type Tone = "cyan" | "violet" | "amber" | "emerald" | "rose" | "slate";
const tones: Record<Tone, string> = {
  cyan: "border-cyan-400/25 bg-cyan-400/[0.055]",
  violet: "border-violet-400/25 bg-violet-400/[0.055]",
  amber: "border-amber-400/25 bg-amber-400/[0.055]",
  emerald: "border-emerald-400/25 bg-emerald-400/[0.055]",
  rose: "border-rose-400/25 bg-rose-400/[0.055]",
  slate: "border-white/10 bg-slate-950/70",
};

export function K({ children }: { children: string }) { return <InlineMath math={children} />; }
export function KB({ children }: { children: string }) { return <BlockMath math={children} />; }

export function Card({ title, children, tone="slate", label }: { title: string; children: ReactNode; tone?: Tone; label?: string }) {
  return <article className={`rounded-3xl border p-5 sm:p-6 ${tones[tone]}`}>
    {label && <div className="mb-3 text-[11px] font-black uppercase tracking-[.18em] text-cyan-300">{label}</div>}
    <h3 className="text-xl font-bold tracking-tight text-white">{title}</h3>
    <div className="mt-3 space-y-3 text-[15px] leading-7 text-slate-300">{children}</div>
  </article>;
}

export function FormulaCard({ title, children, note }: { title: string; children: ReactNode; note?: ReactNode }) {
  return <div className="overflow-hidden rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-cyan-300/[.08] via-slate-950/85 to-violet-400/[.07]">
    <div className="border-b border-white/10 px-5 py-3 text-xs font-black uppercase tracking-[.18em] text-cyan-200">{title}</div>
    <div className="overflow-x-auto px-4 py-5 text-slate-100 sm:px-6">{children}</div>
    {note && <div className="border-t border-white/10 px-5 py-3 text-sm leading-6 text-slate-400">{note}</div>}
  </div>;
}

export function Section({ index, eyebrow, title, intro, children }: { index: string; eyebrow: string; title: string; intro: ReactNode; children: ReactNode }) {
  return <section className="border-t border-white/[.08] py-14">
    <header className="mb-8 grid gap-4 lg:grid-cols-[88px_1fr]">
      <div className="text-5xl font-black tracking-[-.06em] text-white/[.12]">{index}</div>
      <div><p className="text-xs font-black uppercase tracking-[.22em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-[-.035em] text-white sm:text-4xl">{title}</h2>
      <div className="mt-4 max-w-5xl text-base leading-8 text-slate-300">{intro}</div></div>
    </header>
    <div className="space-y-6">{children}</div>
  </section>;
}

export function DataTable({ headers, rows }: { headers: ReactNode[]; rows: ReactNode[][] }) {
 return <div className="overflow-x-auto rounded-2xl border border-white/10"><table className="min-w-full border-collapse text-left text-sm">
  <thead className="bg-white/[.055] text-slate-100"><tr>{headers.map((h,i)=><th key={i} className="border-b border-white/10 px-4 py-3">{h}</th>)}</tr></thead>
  <tbody className="divide-y divide-white/[.075] text-slate-300">{rows.map((r,i)=><tr key={i}>{r.map((c,j)=><td key={j} className="px-4 py-3 align-top leading-6">{c}</td>)}</tr>)}</tbody>
 </table></div>;
}

export function Trap({ children }: { children: ReactNode }) {
 return <div className="rounded-2xl border border-rose-400/25 bg-rose-400/[.065] px-4 py-3 text-sm leading-6 text-rose-100"><b className="mr-2 uppercase tracking-[.13em] text-rose-300">JEE trap</b>{children}</div>;
}
export function Key({ children }: { children: ReactNode }) {
 return <div className="rounded-2xl border border-amber-300/25 bg-amber-300/[.06] px-4 py-3 text-sm leading-6 text-amber-50"><b className="mr-2 uppercase tracking-[.13em] text-amber-200">Key idea</b>{children}</div>;
}

export function Example({ number, title, question, solution, answer }: { number: number; title: string; question: ReactNode; solution: ReactNode; answer: ReactNode }) {
 return <details open={number===1} className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70">
  <summary className="cursor-pointer list-none p-5 sm:p-6"><div className="flex gap-4"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-violet-300/20 bg-violet-400/10 font-bold text-violet-200">{number}</span><div><h3 className="text-xl font-semibold text-white">{title}</h3><div className="mt-2 text-[15px] leading-7 text-slate-200">{question}</div><div className="mt-3 text-xs font-bold uppercase tracking-[.16em] text-cyan-300 group-open:hidden">Open solution</div></div></div></summary>
  <div className="border-t border-white/10 p-5 sm:p-6"><div className="space-y-3 text-[15px] leading-7 text-slate-300">{solution}</div><div className="mt-5 rounded-2xl border border-emerald-400/25 bg-emerald-400/[.065] px-4 py-3 text-emerald-100"><b className="mr-2 uppercase tracking-[.14em] text-emerald-300">Answer</b>{answer}</div></div>
 </details>;
}

export function ParticleFigure({ mode }: { mode: "sorption"|"isotherm"|"micelle"|"double-layer"|"catalysis" }) {
 const frame=<rect x="5" y="5" width="790" height="310" rx="28" fill="#071326" stroke="#334155"/>;
 if(mode==="sorption") return <svg viewBox="0 0 800 320" className="min-w-[620px] w-full">{frame}{[125,400,675].map((x,i)=><g key={x}><path d={`M${x-75} 205 Q${x-65} 90 ${x} 85 Q${x+72} 95 ${x+75} 205 Z`} fill="#0f2139" stroke="#67e8f9"/>{Array.from({length: i===0?16:i===1?30:38}).map((_,j)=>{const edge=i!==1&&j<18; const px=edge?x-72+(j%9)*18:x-55+(j%7)*18; const py=edge?(j<9?92:204):115+Math.floor(j/7)*22; return <circle key={j} cx={px} cy={py} r="4" fill={i===0?"#fbbf24":i===1?"#a78bfa":"#34d399"}/>})}<text x={x} y="260" textAnchor="middle" fill="#e2e8f0" fontSize="18" fontWeight="700">{["Adsorption","Absorption","Sorption"][i]}</text></g>)}</svg>;
 if(mode==="isotherm") return <svg viewBox="0 0 800 320" className="min-w-[620px] w-full">{frame}<line x1="90" y1="255" x2="700" y2="255" stroke="#94a3b8"/><line x1="90" y1="255" x2="90" y2="55" stroke="#94a3b8"/><path d="M90 255 C190 130 300 85 680 80" fill="none" stroke="#67e8f9" strokeWidth="5"/><path d="M90 255 C230 185 400 145 680 130" fill="none" stroke="#a78bfa" strokeWidth="4"/><text x="720" y="265" fill="#e2e8f0">P</text><text x="45" y="70" fill="#e2e8f0">x/m</text><text x="610" y="70" fill="#67e8f9">lower T</text><text x="610" y="125" fill="#a78bfa">higher T</text></svg>;
 if(mode==="micelle") return <svg viewBox="0 0 800 320" className="min-w-[620px] w-full">{frame}<circle cx="400" cy="160" r="90" fill="#0f2139" stroke="#67e8f9" strokeWidth="3"/>{Array.from({length:18}).map((_,i)=>{const a=i*Math.PI*2/18; const x1=400+86*Math.cos(a),y1=160+86*Math.sin(a),x2=400+35*Math.cos(a),y2=160+35*Math.sin(a); return <g key={i}><line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#fbbf24" strokeWidth="4"/><circle cx={x1} cy={y1} r="9" fill="#67e8f9"/></g>})}<text x="400" y="288" textAnchor="middle" fill="#e2e8f0" fontSize="17">hydrophilic heads outside · hydrophobic tails inside</text></svg>;
 if(mode==="double-layer") return <svg viewBox="0 0 800 320" className="min-w-[620px] w-full">{frame}<circle cx="330" cy="155" r="64" fill="#172554" stroke="#a78bfa" strokeWidth="3"/>{Array.from({length:14}).map((_,i)=>{const a=i*2*Math.PI/14;return <text key={i} x={330+82*Math.cos(a)} y={160+82*Math.sin(a)} fill="#67e8f9" fontSize="22">+</text>})}{Array.from({length:18}).map((_,i)=>{const a=i*2*Math.PI/18;return <text key={i} x={330+122*Math.cos(a)} y={160+122*Math.sin(a)} fill="#fda4af" fontSize="20">−</text>})}<text x="520" y="120" fill="#67e8f9" fontSize="17">fixed/Stern layer</text><text x="520" y="170" fill="#fda4af" fontSize="17">diffuse counter-ion layer</text><text x="520" y="220" fill="#e2e8f0" fontSize="17">ζ = potential at slipping plane</text></svg>;
 return <svg viewBox="0 0 800 320" className="min-w-[620px] w-full">{frame}<line x1="80" y1="220" x2="720" y2="220" stroke="#94a3b8" strokeWidth="5"/>{[150,260,370,480,590,700].map(x=><circle key={x} cx={x} cy="220" r="13" fill="#67e8f9"/>)}<circle cx="280" cy="175" r="18" fill="#fbbf24"/><circle cx="360" cy="175" r="18" fill="#a78bfa"/><path d="M280 175 Q320 110 360 175" fill="none" stroke="#f8fafc" strokeWidth="3"/><path d="M400 175 Q460 110 520 175" fill="none" stroke="#34d399" strokeWidth="3"/><text x="400" y="285" textAnchor="middle" fill="#e2e8f0" fontSize="17">adsorption → activation → surface reaction → desorption</text></svg>;
}

export function PartShell({ part, title, description, children }: { part: number; title: string; description: string; children: ReactNode }) {
 const prev=SURFACE_CHEMISTRY_PARTS[part-2], next=SURFACE_CHEMISTRY_PARTS[part];
 return <main className="min-h-screen overflow-x-hidden bg-[#050914] text-slate-100 antialiased">
  <div className="min-h-screen bg-[radial-gradient(circle_at_10%_0%,rgba(34,211,238,.13),transparent_31rem),radial-gradient(circle_at_92%_8%,rgba(139,92,246,.13),transparent_34rem)]">
   <header className="border-b border-white/10"><div className="mx-auto max-w-[1320px] px-4 py-12 sm:px-7 lg:px-10">
    <a href="/learn/jee-advanced/surface-chemistry" className="text-sm font-semibold text-cyan-300">← Surface Chemistry</a>
    <div className="mt-5 inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/[.07] px-3 py-1.5 text-xs font-bold uppercase tracking-[.2em] text-cyan-200">JEE Advanced · Part {String(part).padStart(2,"0")} of 08</div>
    <h1 className="mt-6 max-w-5xl text-4xl font-black tracking-[-.05em] text-white sm:text-6xl">{title}</h1>
    <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">{description}</p>
   </div></header>
   <div className="mx-auto max-w-[1320px] px-4 sm:px-7 lg:px-10">{children}</div>
   <nav className="mx-auto grid max-w-[1320px] gap-4 px-4 pb-16 sm:px-7 md:grid-cols-2 lg:px-10">
    {prev?<a href={`/learn/jee-advanced/surface-chemistry/parts/${prev.slug}`} className="rounded-3xl border border-white/10 bg-slate-950/70 p-5"><span className="text-xs uppercase tracking-widest text-slate-500">Previous</span><div className="mt-2 font-semibold text-white">{prev.title}</div></a>:<div/>}
    {next?<a href={`/learn/jee-advanced/surface-chemistry/parts/${next.slug}`} className="rounded-3xl border border-cyan-300/20 bg-cyan-300/[.05] p-5 text-right"><span className="text-xs uppercase tracking-widest text-cyan-400">Next</span><div className="mt-2 font-semibold text-white">{next.title}</div></a>:<a href="/learn/jee-advanced/surface-chemistry" className="rounded-3xl border border-cyan-300/20 bg-cyan-300/[.05] p-5 text-right"><span className="text-xs uppercase tracking-widest text-cyan-400">Complete</span><div className="mt-2 font-semibold text-white">Return to chapter index</div></a>}
   </nav>
  </div>
 </main>;
}
