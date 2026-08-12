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

export function K({ children }: { children: string }) {
  return <InlineMath math={children} />;
}

export function KB({ children }: { children: string }) {
  return <BlockMath math={children} />;
}

export function Card({
  title,
  children,
  tone = "slate",
  label,
}: {
  title: string;
  children: ReactNode;
  tone?: Tone;
  label?: string;
}) {
  return (
    <article className={`rounded-3xl border p-5 sm:p-6 ${tones[tone]}`}>
      {label && (
        <div className="mb-3 text-[11px] font-black uppercase tracking-[.18em] text-cyan-300">
          {label}
        </div>
      )}
      <h3 className="text-xl font-bold tracking-tight text-white">{title}</h3>
      <div className="mt-3 space-y-3 text-[15px] leading-7 text-slate-300">{children}</div>
    </article>
  );
}

export function FormulaCard({
  title,
  children,
  note,
}: {
  title: string;
  children: ReactNode;
  note?: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-cyan-300/[.08] via-slate-950/85 to-violet-400/[.07]">
      <div className="border-b border-white/10 px-5 py-3 text-xs font-black uppercase tracking-[.18em] text-cyan-200">
        {title}
      </div>
      <div className="overflow-x-auto px-4 py-5 text-slate-100 sm:px-6">{children}</div>
      {note && (
        <div className="border-t border-white/10 px-5 py-3 text-sm leading-6 text-slate-400">
          {note}
        </div>
      )}
    </div>
  );
}

export function Section({
  index,
  eyebrow,
  title,
  intro,
  children,
}: {
  index: string;
  eyebrow: string;
  title: string;
  intro: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-white/[.08] py-14">
      <header className="mb-8 grid gap-4 lg:grid-cols-[88px_1fr]">
        <div className="text-5xl font-black tracking-[-.06em] text-white/[.12]">{index}</div>
        <div>
          <p className="text-xs font-black uppercase tracking-[.22em] text-cyan-300">{eyebrow}</p>
          <h2 className="mt-2 text-3xl font-bold tracking-[-.035em] text-white sm:text-4xl">{title}</h2>
          <div className="mt-4 max-w-5xl text-base leading-8 text-slate-300">{intro}</div>
        </div>
      </header>
      <div className="space-y-6">{children}</div>
    </section>
  );
}

export function DataTable({ headers, rows }: { headers: ReactNode[]; rows: ReactNode[][] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/10">
      <table className="min-w-full border-collapse text-left text-sm">
        <thead className="bg-white/[.055] text-slate-100">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="border-b border-white/10 px-4 py-3">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/[.075] text-slate-300">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-3 align-top leading-6">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Trap({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-rose-400/25 bg-rose-400/[.065] px-4 py-3 text-sm leading-6 text-rose-100">
      <b className="mr-2 uppercase tracking-[.13em] text-rose-300">JEE trap</b>
      {children}
    </div>
  );
}

export function Key({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-amber-300/25 bg-amber-300/[.06] px-4 py-3 text-sm leading-6 text-amber-50">
      <b className="mr-2 uppercase tracking-[.13em] text-amber-200">Key idea</b>
      {children}
    </div>
  );
}

export function Example({
  number,
  title,
  question,
  solution,
  answer,
}: {
  number: number;
  title: string;
  question: ReactNode;
  solution: ReactNode;
  answer: ReactNode;
}) {
  return (
    <details open={number === 1} className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70">
      <summary className="cursor-pointer list-none p-5 sm:p-6">
        <div className="flex gap-4">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-violet-300/20 bg-violet-400/10 font-bold text-violet-200">
            {number}
          </span>
          <div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <div className="mt-2 text-[15px] leading-7 text-slate-200">{question}</div>
            <div className="mt-3 text-xs font-bold uppercase tracking-[.16em] text-cyan-300 group-open:hidden">
              Open solution
            </div>
          </div>
        </div>
      </summary>
      <div className="border-t border-white/10 p-5 sm:p-6">
        <div className="space-y-3 text-[15px] leading-7 text-slate-300">{solution}</div>
        <div className="mt-5 rounded-2xl border border-emerald-400/25 bg-emerald-400/[.065] px-4 py-3 text-emerald-100">
          <b className="mr-2 uppercase tracking-[.14em] text-emerald-300">Answer</b>
          {answer}
        </div>
      </div>
    </details>
  );
}

export type SurfaceVisualMode =
  | "interface"
  | "sorption"
  | "potential"
  | "orbitals"
  | "isotherms"
  | "surface-area"
  | "catalyst"
  | "backbonding"
  | "enzyme"
  | "colloid-scale"
  | "colloid-prep"
  | "tyndall"
  | "double-layer"
  | "coagulation"
  | "micelle"
  | "emulsion"
  | "gel"
  | "applications";

const frame = <rect x="5" y="5" width="790" height="350" rx="28" fill="#071326" stroke="#334155" />;

function ArrowHead({ x, y, rotate = 0, fill = "#67e8f9" }: { x: number; y: number; rotate?: number; fill?: string }) {
  return <path d="M-7 -5 L7 0 L-7 5 Z" fill={fill} transform={`translate(${x} ${y}) rotate(${rotate})`} />;
}

export function SurfaceVisual({ mode }: { mode: SurfaceVisualMode }) {
  if (mode === "interface") {
    return (
      <svg viewBox="0 0 800 360" className="min-w-[650px] w-full" role="img" aria-label="Bulk and surface particles with balanced and unbalanced forces">
        {frame}
        <rect x="35" y="180" width="730" height="140" rx="18" fill="#0f2139" />
        <line x1="35" y1="180" x2="765" y2="180" stroke="#22d3ee" strokeWidth="4" />
        {Array.from({ length: 42 }).map((_, index) => {
          const row = Math.floor(index / 14);
          const column = index % 14;
          return <circle key={index} cx={75 + column * 50} cy={205 + row * 45} r="12" fill={row === 0 ? "#f59e0b" : "#31527d"} />;
        })}
        {[0, 1, 2, 3, 4].map((index) => {
          const angle = -140 + index * 70;
          const radians = (angle * Math.PI) / 180;
          const x2 = 400 + 65 * Math.cos(radians);
          const y2 = 205 + 65 * Math.sin(radians);
          return <g key={index}><line x1="400" y1="205" x2={x2} y2={y2} stroke="#fbbf24" strokeWidth="3" /><ArrowHead x={x2} y={y2} rotate={angle} fill="#fbbf24" /></g>;
        })}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((index) => {
          const angle = index * 45;
          const radians = (angle * Math.PI) / 180;
          const x2 = 200 + 42 * Math.cos(radians);
          const y2 = 250 + 42 * Math.sin(radians);
          return <line key={index} x1="200" y1="250" x2={x2} y2={y2} stroke="#64748b" strokeWidth="2" />;
        })}
        <text x="400" y="70" textAnchor="middle" fill="#f8fafc" fontSize="24" fontWeight="700">Surface particles lack neighbours on one side</text>
        <text x="400" y="108" textAnchor="middle" fill="#94a3b8" fontSize="17">residual forces · higher potential energy · active interface</text>
        <text x="405" y="163" fill="#fbbf24" fontSize="17">surface atom</text>
        <text x="118" y="332" fill="#94a3b8" fontSize="16">bulk atom: attractions nearly balanced</text>
      </svg>
    );
  }

  if (mode === "sorption") {
    return (
      <svg viewBox="0 0 800 360" className="min-w-[650px] w-full" role="img" aria-label="Adsorption, absorption and sorption comparison">
        {frame}
        {[135, 400, 665].map((x, index) => (
          <g key={x}>
            <rect x={x - 86} y="95" width="172" height="165" rx="16" fill="#0f2139" stroke={index === 0 ? "#22d3ee" : index === 1 ? "#a78bfa" : "#34d399"} strokeWidth="3" />
            {Array.from({ length: index === 0 ? 30 : index === 1 ? 34 : 48 }).map((_, particleIndex) => {
              const isEdge = index !== 1 && particleIndex < 28;
              const column = particleIndex % 8;
              const row = Math.floor(particleIndex / 8);
              const px = isEdge ? x - 76 + column * 21 : x - 63 + column * 18;
              const py = isEdge ? (row < 2 ? 105 + row * 140 : 125 + (row - 2) * 28) : 118 + row * 28;
              return <circle key={particleIndex} cx={px} cy={py} r="5" fill={index === 0 ? "#22d3ee" : index === 1 ? "#a78bfa" : "#34d399"} />;
            })}
            <text x={x} y="305" textAnchor="middle" fill="#f8fafc" fontSize="20" fontWeight="700">{["Adsorption", "Absorption", "Sorption"][index]}</text>
            <text x={x} y="330" textAnchor="middle" fill="#94a3b8" fontSize="14">{["surface only", "bulk throughout", "surface + bulk"][index]}</text>
          </g>
        ))}
      </svg>
    );
  }

  if (mode === "potential") {
    return (
      <svg viewBox="0 0 800 360" className="min-w-[650px] w-full" role="img" aria-label="Potential energy curves for physisorption and chemisorption">
        {frame}
        <line x1="90" y1="290" x2="730" y2="290" stroke="#94a3b8" />
        <line x1="90" y1="290" x2="90" y2="55" stroke="#94a3b8" />
        <path d="M100 110 C185 115 205 210 275 230 C360 252 415 190 500 125 C565 76 640 92 715 105" fill="none" stroke="#22d3ee" strokeWidth="5" />
        <path d="M100 100 C210 100 250 125 300 130 C350 136 365 75 405 72 C450 70 470 280 535 282 C610 284 635 145 715 115" fill="none" stroke="#f59e0b" strokeWidth="5" />
        <line x1="405" y1="72" x2="405" y2="132" stroke="#fda4af" strokeDasharray="6 6" />
        <text x="185" y="220" fill="#22d3ee" fontSize="17">physisorption well</text>
        <text x="520" y="265" fill="#f59e0b" fontSize="17">chemisorption well</text>
        <text x="420" y="88" fill="#fda4af" fontSize="15">activation barrier</text>
        <text x="650" y="326" fill="#e2e8f0" fontSize="17">distance from surface</text>
        <text x="28" y="80" fill="#e2e8f0" fontSize="17" transform="rotate(-90 28 80)">potential energy</text>
      </svg>
    );
  }

  if (mode === "orbitals") {
    return (
      <svg viewBox="0 0 800 360" className="min-w-[650px] w-full" role="img" aria-label="Molecular orbital interaction between adsorbate and metal surface">
        {frame}
        <text x="125" y="45" fill="#67e8f9" fontSize="18" fontWeight="700">adsorbate orbitals</text>
        <text x="603" y="45" fill="#a78bfa" fontSize="18" fontWeight="700">metal d band</text>
        <line x1="90" y1="120" x2="230" y2="120" stroke="#67e8f9" strokeWidth="5" />
        <line x1="90" y1="235" x2="230" y2="235" stroke="#67e8f9" strokeWidth="5" />
        <text x="45" y="126" fill="#e2e8f0" fontSize="16">LUMO</text>
        <text x="45" y="241" fill="#e2e8f0" fontSize="16">HOMO</text>
        {[115, 145, 175, 205, 235].map((y, index) => <line key={y} x1="560" y1={y} x2="710" y2={y} stroke={index % 2 ? "#c4b5fd" : "#8b5cf6"} strokeWidth="5" />)}
        <path d="M230 235 C325 235 385 180 560 150" fill="none" stroke="#fbbf24" strokeWidth="4" />
        <ArrowHead x={560} y={150} rotate={-10} fill="#fbbf24" />
        <path d="M560 205 C430 205 350 150 230 120" fill="none" stroke="#34d399" strokeWidth="4" />
        <ArrowHead x={230} y={120} rotate={180} fill="#34d399" />
        <text x="315" y="272" fill="#fbbf24" fontSize="17">donation: adsorbate HOMO → metal</text>
        <text x="315" y="92" fill="#34d399" fontSize="17">back-donation: metal d → adsorbate LUMO</text>
        <text x="400" y="325" textAnchor="middle" fill="#94a3b8" fontSize="16">orbital mixing creates bonding states below and antibonding states above the original levels</text>
      </svg>
    );
  }

  if (mode === "isotherms") {
    return (
      <svg viewBox="0 0 800 360" className="min-w-[650px] w-full" role="img" aria-label="Freundlich and Langmuir adsorption isotherms">
        {frame}
        <line x1="75" y1="285" x2="365" y2="285" stroke="#94a3b8" />
        <line x1="75" y1="285" x2="75" y2="70" stroke="#94a3b8" />
        <path d="M75 285 C120 150 205 105 345 92" fill="none" stroke="#22d3ee" strokeWidth="5" />
        <text x="190" y="45" textAnchor="middle" fill="#f8fafc" fontSize="21" fontWeight="700">Freundlich</text>
        <text x="110" y="170" fill="#67e8f9" fontSize="15">empirical, heterogeneous surface</text>
        <line x1="435" y1="285" x2="725" y2="285" stroke="#94a3b8" />
        <line x1="435" y1="285" x2="435" y2="70" stroke="#94a3b8" />
        <path d="M435 285 C505 130 600 100 710 100" fill="none" stroke="#a78bfa" strokeWidth="5" />
        <line x1="440" y1="100" x2="715" y2="100" stroke="#a78bfa" strokeDasharray="6 6" />
        <text x="580" y="45" textAnchor="middle" fill="#f8fafc" fontSize="21" fontWeight="700">Langmuir</text>
        <text x="512" y="170" fill="#c4b5fd" fontSize="15">monolayer saturation</text>
        <text x="365" y="326" fill="#e2e8f0" fontSize="16">equilibrium pressure</text>
        <text x="25" y="120" fill="#e2e8f0" fontSize="16" transform="rotate(-90 25 120)">amount adsorbed</text>
      </svg>
    );
  }

  if (mode === "surface-area") {
    return (
      <svg viewBox="0 0 800 360" className="min-w-[650px] w-full" role="img" aria-label="Surface area increase on subdivision and porosity">
        {frame}
        <rect x="85" y="110" width="150" height="150" rx="12" fill="#172554" stroke="#64748b" strokeWidth="3" />
        <text x="160" y="295" textAnchor="middle" fill="#f8fafc" fontSize="20" fontWeight="700">one cube</text>
        <text x="160" y="322" textAnchor="middle" fill="#94a3b8" fontSize="15">small external area</text>
        {Array.from({ length: 64 }).map((_, index) => {
          const row = Math.floor(index / 8);
          const column = index % 8;
          return <rect key={index} x={390 + column * 35} y={75 + row * 30} width="24" height="20" rx="3" fill={index % 3 === 0 ? "#f59e0b" : "#31527d"} stroke="#0f172a" />;
        })}
        <text x="515" y="325" textAnchor="middle" fill="#f8fafc" fontSize="20" fontWeight="700">subdivided + porous</text>
        <path d="M260 185 L355 185" stroke="#22d3ee" strokeWidth="4" />
        <ArrowHead x={355} y={185} fill="#22d3ee" />
        <text x="307" y="155" textAnchor="middle" fill="#67e8f9" fontSize="16">same mass</text>
        <text x="520" y="50" textAnchor="middle" fill="#fbbf24" fontSize="17">many external faces and internal pore walls</text>
      </svg>
    );
  }

  if (mode === "catalyst") {
    return (
      <svg viewBox="0 0 800 360" className="min-w-[650px] w-full" role="img" aria-label="Heterogeneous catalytic cycle on a surface">
        {frame}
        <line x1="55" y1="245" x2="745" y2="245" stroke="#64748b" strokeWidth="6" />
        {Array.from({ length: 14 }).map((_, index) => <circle key={index} cx={70 + index * 50} cy="245" r="11" fill="#22d3ee" />)}
        <circle cx="145" cy="115" r="16" fill="#f59e0b" />
        <circle cx="205" cy="115" r="16" fill="#a78bfa" />
        <path d="M145 135 L145 220" stroke="#f59e0b" strokeWidth="4" />
        <path d="M205 135 L205 220" stroke="#a78bfa" strokeWidth="4" />
        <path d="M275 190 Q320 120 365 190" fill="none" stroke="#f8fafc" strokeWidth="4" />
        <circle cx="300" cy="200" r="14" fill="#f59e0b" />
        <circle cx="340" cy="200" r="14" fill="#a78bfa" />
        <path d="M425 200 Q475 135 525 200" fill="none" stroke="#34d399" strokeWidth="4" />
        <circle cx="475" cy="198" r="20" fill="#34d399" />
        <path d="M585 195 L650 120" stroke="#34d399" strokeWidth="4" />
        <ArrowHead x={650} y={120} rotate={-50} fill="#34d399" />
        <text x="120" y="310" fill="#94a3b8" fontSize="15">diffusion</text>
        <text x="230" y="310" fill="#94a3b8" fontSize="15">adsorption</text>
        <text x="345" y="310" fill="#94a3b8" fontSize="15">activation</text>
        <text x="470" y="310" fill="#94a3b8" fontSize="15">reaction</text>
        <text x="600" y="310" fill="#94a3b8" fontSize="15">desorption</text>
      </svg>
    );
  }

  if (mode === "backbonding") {
    return (
      <svg viewBox="0 0 800 360" className="min-w-[650px] w-full" role="img" aria-label="Carbon monoxide donation and back bonding on a metal surface">
        {frame}
        <line x1="70" y1="275" x2="730" y2="275" stroke="#64748b" strokeWidth="6" />
        {Array.from({ length: 11 }).map((_, index) => <circle key={index} cx={90 + index * 62} cy="275" r="15" fill="#7c3aed" />)}
        <circle cx="400" cy="140" r="24" fill="#94a3b8" />
        <circle cx="400" cy="85" r="19" fill="#ef4444" />
        <line x1="400" y1="109" x2="400" y2="122" stroke="#f8fafc" strokeWidth="5" />
        <path d="M370 175 C315 190 290 220 270 250" fill="none" stroke="#fbbf24" strokeWidth="4" />
        <ArrowHead x={270} y={250} rotate={130} fill="#fbbf24" />
        <path d="M530 250 C505 215 470 185 430 175" fill="none" stroke="#34d399" strokeWidth="4" />
        <ArrowHead x={430} y={175} rotate={-150} fill="#34d399" />
        <text x="125" y="115" fill="#fbbf24" fontSize="18">CO 5σ donation to empty metal state</text>
        <text x="455" y="115" fill="#34d399" fontSize="18">metal dπ back-donation to CO 2π*</text>
        <text x="400" y="330" textAnchor="middle" fill="#94a3b8" fontSize="16">back-donation weakens C–O while strengthening metal–carbon bonding</text>
      </svg>
    );
  }

  if (mode === "enzyme") {
    return (
      <svg viewBox="0 0 800 360" className="min-w-[650px] w-full" role="img" aria-label="Enzyme substrate complex and product release">
        {frame}
        <path d="M80 250 C70 155 120 90 205 95 C275 100 300 160 265 205 C245 230 210 230 190 208 C170 188 185 155 220 155 L220 95 C155 80 115 150 125 250 Z" fill="#1e3a8a" stroke="#67e8f9" strokeWidth="4" />
        <path d="M310 150 L355 118 L405 150 L390 215 L330 215 Z" fill="#f59e0b" />
        <path d="M420 250 C410 155 460 90 545 95 C615 100 640 160 605 205 C585 230 550 230 530 208 C510 188 525 155 560 155 L560 95 C495 80 455 150 465 250 Z" fill="#1e3a8a" stroke="#a78bfa" strokeWidth="4" />
        <path d="M500 150 L545 118 L595 150 L580 215 L520 215 Z" fill="#f59e0b" />
        <path d="M655 150 L695 125 L730 155 L710 200 L670 200 Z" fill="#34d399" />
        <path d="M290 180 L320 180" stroke="#94a3b8" strokeWidth="3" />
        <ArrowHead x={320} y={180} fill="#94a3b8" />
        <path d="M620 180 L650 180" stroke="#94a3b8" strokeWidth="3" />
        <ArrowHead x={650} y={180} fill="#94a3b8" />
        <text x="170" y="315" textAnchor="middle" fill="#f8fafc" fontSize="18">E + S</text>
        <text x="530" y="315" textAnchor="middle" fill="#f8fafc" fontSize="18">ES complex</text>
        <text x="695" y="315" textAnchor="middle" fill="#f8fafc" fontSize="18">E + P</text>
      </svg>
    );
  }

  if (mode === "colloid-scale") {
    return (
      <svg viewBox="0 0 800 360" className="min-w-[650px] w-full" role="img" aria-label="True solution colloid and suspension particle size comparison">
        {frame}
        <line x1="70" y1="280" x2="730" y2="280" stroke="#94a3b8" strokeWidth="3" />
        <rect x="80" y="80" width="180" height="160" rx="18" fill="#0f2139" stroke="#31527d" />
        <rect x="310" y="80" width="180" height="160" rx="18" fill="#0f2139" stroke="#22d3ee" strokeWidth="3" />
        <rect x="540" y="80" width="180" height="160" rx="18" fill="#0f2139" stroke="#f59e0b" />
        {Array.from({ length: 45 }).map((_, index) => <circle key={index} cx={95 + (index % 9) * 17} cy={100 + Math.floor(index / 9) * 28} r="2" fill="#67e8f9" />)}
        {Array.from({ length: 20 }).map((_, index) => <circle key={index} cx={330 + (index % 5) * 34} cy={105 + Math.floor(index / 5) * 36} r={5 + (index % 3)} fill="#a78bfa" />)}
        {Array.from({ length: 12 }).map((_, index) => <rect key={index} x={560 + (index % 4) * 38} y={105 + Math.floor(index / 4) * 45} width={15 + (index % 3) * 5} height={14 + (index % 2) * 8} rx="4" fill="#f59e0b" />)}
        <text x="170" y="315" textAnchor="middle" fill="#f8fafc" fontSize="19">true solution &lt; 1 nm</text>
        <text x="400" y="315" textAnchor="middle" fill="#f8fafc" fontSize="19">colloid 1–1000 nm</text>
        <text x="630" y="315" textAnchor="middle" fill="#f8fafc" fontSize="19">suspension &gt; 1000 nm</text>
      </svg>
    );
  }

  if (mode === "colloid-prep") {
    return (
      <svg viewBox="0 0 800 360" className="min-w-[650px] w-full" role="img" aria-label="Dispersion and condensation routes to colloids">
        {frame}
        <text x="200" y="48" textAnchor="middle" fill="#67e8f9" fontSize="22" fontWeight="700">Dispersion</text>
        <rect x="75" y="90" width="250" height="190" rx="20" fill="#0f2139" stroke="#22d3ee" />
        {Array.from({ length: 8 }).map((_, index) => <circle key={index} cx={110 + (index % 4) * 58} cy={125 + Math.floor(index / 4) * 85} r="22" fill="#31527d" />)}
        <path d="M170 185 L230 185" stroke="#fbbf24" strokeWidth="4" /><ArrowHead x={230} y={185} fill="#fbbf24" />
        {Array.from({ length: 24 }).map((_, index) => <circle key={index} cx={240 + (index % 6) * 12} cy={130 + Math.floor(index / 6) * 28} r="5" fill="#67e8f9" />)}
        <text x="600" y="48" textAnchor="middle" fill="#a78bfa" fontSize="22" fontWeight="700">Condensation</text>
        <rect x="475" y="90" width="250" height="190" rx="20" fill="#0f2139" stroke="#a78bfa" />
        {Array.from({ length: 24 }).map((_, index) => <circle key={index} cx={500 + (index % 8) * 22} cy={120 + Math.floor(index / 8) * 40} r="3" fill="#c4b5fd" />)}
        <path d="M565 225 L625 225" stroke="#34d399" strokeWidth="4" /><ArrowHead x={625} y={225} fill="#34d399" />
        {Array.from({ length: 5 }).map((_, index) => <circle key={index} cx={625 + (index % 3) * 34} cy={145 + Math.floor(index / 3) * 55} r="15" fill="#a78bfa" />)}
        <text x="200" y="318" textAnchor="middle" fill="#94a3b8" fontSize="16">large particles broken down</text>
        <text x="600" y="318" textAnchor="middle" fill="#94a3b8" fontSize="16">molecules or ions built up</text>
      </svg>
    );
  }

  if (mode === "tyndall") {
    return (
      <svg viewBox="0 0 800 360" className="min-w-[650px] w-full" role="img" aria-label="Tyndall scattering and Brownian movement">
        {frame}
        <rect x="70" y="80" width="295" height="210" rx="20" fill="#0f2139" stroke="#22d3ee" />
        <path d="M85 185 L340 135 L340 235 Z" fill="#67e8f9" opacity="0.35" />
        {Array.from({ length: 22 }).map((_, index) => <circle key={index} cx={145 + (index % 6) * 28} cy={120 + Math.floor(index / 6) * 38} r="5" fill="#f8fafc" />)}
        <text x="218" y="325" textAnchor="middle" fill="#f8fafc" fontSize="19">Tyndall cone</text>
        <rect x="435" y="80" width="295" height="210" rx="20" fill="#0f2139" stroke="#a78bfa" />
        <circle cx="580" cy="185" r="22" fill="#f59e0b" />
        <path d="M470 120 L510 145 L485 175 L535 215 L505 250 L565 235 L605 275 L640 235 L700 250" fill="none" stroke="#c4b5fd" strokeWidth="4" />
        <text x="582" y="325" textAnchor="middle" fill="#f8fafc" fontSize="19">Brownian path</text>
      </svg>
    );
  }

  if (mode === "double-layer") {
    return (
      <svg viewBox="0 0 800 360" className="min-w-[650px] w-full" role="img" aria-label="Electrical double layer and zeta potential">
        {frame}
        <circle cx="315" cy="180" r="72" fill="#172554" stroke="#a78bfa" strokeWidth="3" />
        {Array.from({ length: 16 }).map((_, index) => {
          const angle = (index * Math.PI * 2) / 16;
          return <text key={index} x={315 + 92 * Math.cos(angle)} y={187 + 92 * Math.sin(angle)} fill="#67e8f9" fontSize="23">+</text>;
        })}
        {Array.from({ length: 22 }).map((_, index) => {
          const angle = (index * Math.PI * 2) / 22;
          return <text key={index} x={315 + 135 * Math.cos(angle)} y={187 + 135 * Math.sin(angle)} fill="#fda4af" fontSize="20">−</text>;
        })}
        <circle cx="315" cy="180" r="108" fill="none" stroke="#67e8f9" strokeDasharray="7 7" />
        <line x1="460" y1="105" x2="405" y2="125" stroke="#67e8f9" strokeWidth="3" />
        <line x1="460" y1="180" x2="440" y2="180" stroke="#fda4af" strokeWidth="3" />
        <line x1="460" y1="255" x2="420" y2="230" stroke="#fbbf24" strokeWidth="3" />
        <text x="475" y="110" fill="#67e8f9" fontSize="18">fixed/Stern layer</text>
        <text x="475" y="185" fill="#fda4af" fontSize="18">diffuse counter-ion layer</text>
        <text x="475" y="260" fill="#fbbf24" fontSize="18">slipping plane: zeta potential</text>
      </svg>
    );
  }

  if (mode === "coagulation") {
    return (
      <svg viewBox="0 0 800 360" className="min-w-[650px] w-full" role="img" aria-label="Coagulation of a negatively charged sol by monovalent divalent and trivalent ions">
        {frame}
        {[160, 400, 640].map((x, index) => (
          <g key={x}>
            <circle cx={x} cy="160" r="62" fill="#172554" stroke="#22d3ee" strokeWidth="3" />
            {Array.from({ length: 12 }).map((_, particleIndex) => {
              const angle = (particleIndex * Math.PI * 2) / 12;
              return <text key={particleIndex} x={x + 76 * Math.cos(angle)} y={167 + 76 * Math.sin(angle)} fill="#67e8f9" fontSize="20">−</text>;
            })}
            <circle cx={x + 5} cy="80" r={12 + index * 5} fill={index === 0 ? "#94a3b8" : index === 1 ? "#a78bfa" : "#f59e0b"} />
            <text x={x + 5} y="86" textAnchor="middle" fill="#071326" fontSize="12" fontWeight="700">{index + 1}+</text>
            <text x={x} y="285" textAnchor="middle" fill="#f8fafc" fontSize="19">{["Na⁺", "Ba²⁺", "Al³⁺"][index]}</text>
            <text x={x} y="315" textAnchor="middle" fill="#94a3b8" fontSize="15">{["weak", "stronger", "strongest"][index]} coagulation</text>
          </g>
        ))}
      </svg>
    );
  }

  if (mode === "micelle") {
    return (
      <svg viewBox="0 0 800 360" className="min-w-[650px] w-full" role="img" aria-label="Aqueous micelle with hydrophilic heads and hydrophobic tails">
        {frame}
        <circle cx="400" cy="175" r="95" fill="#0f2139" stroke="#22d3ee" strokeWidth="3" />
        {Array.from({ length: 22 }).map((_, index) => {
          const angle = (index * Math.PI * 2) / 22;
          const x1 = 400 + 93 * Math.cos(angle);
          const y1 = 175 + 93 * Math.sin(angle);
          const x2 = 400 + 35 * Math.cos(angle);
          const y2 = 175 + 35 * Math.sin(angle);
          return <g key={index}><line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f59e0b" strokeWidth="4" /><circle cx={x1} cy={y1} r="9" fill="#67e8f9" /></g>;
        })}
        <circle cx="400" cy="175" r="30" fill="#713f12" />
        <text x="400" y="181" textAnchor="middle" fill="#fde68a" fontSize="14">oil</text>
        <text x="400" y="315" textAnchor="middle" fill="#e2e8f0" fontSize="17">polar heads face water · hydrocarbon tails protect the non-polar core</text>
      </svg>
    );
  }

  if (mode === "emulsion") {
    return (
      <svg viewBox="0 0 800 360" className="min-w-[650px] w-full" role="img" aria-label="Oil in water and water in oil emulsions">
        {frame}
        <rect x="70" y="75" width="290" height="215" rx="22" fill="#082f49" stroke="#22d3ee" />
        {Array.from({ length: 9 }).map((_, index) => <circle key={index} cx={115 + (index % 3) * 90} cy={120 + Math.floor(index / 3) * 65} r="22" fill="#f59e0b" stroke="#fbbf24" />)}
        <text x="215" y="325" textAnchor="middle" fill="#f8fafc" fontSize="20">oil-in-water (O/W)</text>
        <rect x="440" y="75" width="290" height="215" rx="22" fill="#713f12" stroke="#f59e0b" />
        {Array.from({ length: 9 }).map((_, index) => <circle key={index} cx={485 + (index % 3) * 90} cy={120 + Math.floor(index / 3) * 65} r="22" fill="#0ea5e9" stroke="#67e8f9" />)}
        <text x="585" y="325" textAnchor="middle" fill="#f8fafc" fontSize="20">water-in-oil (W/O)</text>
      </svg>
    );
  }

  if (mode === "gel") {
    return (
      <svg viewBox="0 0 800 360" className="min-w-[650px] w-full" role="img" aria-label="Three dimensional gel network trapping liquid">
        {frame}
        {Array.from({ length: 9 }).map((_, row) => <path key={row} d={`M80 ${70 + row * 28} C180 ${35 + row * 28} 265 ${105 + row * 28} 370 ${70 + row * 28} C470 ${35 + row * 28} 560 ${105 + row * 28} 720 ${70 + row * 28}`} fill="none" stroke={row % 2 ? "#a78bfa" : "#22d3ee"} strokeWidth="3" />)}
        {Array.from({ length: 24 }).map((_, index) => <circle key={index} cx={105 + (index % 8) * 82} cy={90 + Math.floor(index / 8) * 80} r="10" fill="#f59e0b" opacity="0.85" />)}
        <text x="400" y="325" textAnchor="middle" fill="#e2e8f0" fontSize="17">solid-like network immobilises a liquid-rich phase</text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 800 360" className="min-w-[650px] w-full" role="img" aria-label="Applications of surface chemistry">
      {frame}
      {[130, 310, 490, 670].map((x, index) => (
        <g key={x}>
          <circle cx={x} cy="150" r="58" fill={index % 2 ? "#172554" : "#0f2139"} stroke={["#22d3ee", "#a78bfa", "#f59e0b", "#34d399"][index]} strokeWidth="3" />
          <text x={x} y="156" textAnchor="middle" fill="#f8fafc" fontSize="36">{["☁", "⚙", "✚", "⌁"][index]}</text>
          <text x={x} y="245" textAnchor="middle" fill="#f8fafc" fontSize="18" fontWeight="700">{["pollution", "catalysis", "medicine", "materials"][index]}</text>
          <text x={x} y="272" textAnchor="middle" fill="#94a3b8" fontSize="13">{["filters & precipitation", "industrial reactors", "adsorbents & colloids", "foams, gels, coatings"][index]}</text>
        </g>
      ))}
    </svg>
  );
}

export function PartShell({
  part,
  title,
  description,
  children,
}: {
  part: number;
  title: string;
  description: string;
  children: ReactNode;
}) {
  const previous = SURFACE_CHEMISTRY_PARTS[part - 2];
  const next = SURFACE_CHEMISTRY_PARTS[part];
  const total = SURFACE_CHEMISTRY_PARTS.length;

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050914] text-slate-100 antialiased">
      <div className="min-h-screen bg-[radial-gradient(circle_at_10%_0%,rgba(34,211,238,.13),transparent_31rem),radial-gradient(circle_at_92%_8%,rgba(139,92,246,.13),transparent_34rem)]">
        <header className="border-b border-white/10">
          <div className="mx-auto max-w-[1320px] px-4 py-12 sm:px-7 lg:px-10">
            <a href="/learn/jee-advanced/surface-chemistry" className="text-sm font-semibold text-cyan-300">
              ← Surface Chemistry
            </a>
            <div className="mt-5 inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/[.07] px-3 py-1.5 text-xs font-bold uppercase tracking-[.2em] text-cyan-200">
              JEE Advanced · Part {String(part).padStart(2, "0")} of {String(total).padStart(2, "0")}
            </div>
            <h1 className="mt-6 max-w-5xl text-4xl font-black tracking-[-.05em] text-white sm:text-6xl">{title}</h1>
            <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">{description}</p>
          </div>
        </header>

        <div className="mx-auto max-w-[1320px] px-4 sm:px-7 lg:px-10">{children}</div>

        <nav className="mx-auto grid max-w-[1320px] gap-4 px-4 pb-16 sm:px-7 md:grid-cols-2 lg:px-10">
          {previous ? (
            <a href={`/learn/jee-advanced/surface-chemistry/parts/${previous.slug}`} className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
              <span className="text-xs uppercase tracking-widest text-slate-500">Previous</span>
              <div className="mt-2 font-semibold text-white">{previous.title}</div>
            </a>
          ) : (
            <div />
          )}
          {next ? (
            <a href={`/learn/jee-advanced/surface-chemistry/parts/${next.slug}`} className="rounded-3xl border border-cyan-300/20 bg-cyan-300/[.05] p-5 text-right">
              <span className="text-xs uppercase tracking-widest text-cyan-400">Next</span>
              <div className="mt-2 font-semibold text-white">{next.title}</div>
            </a>
          ) : (
            <a href="/learn/jee-advanced/surface-chemistry" className="rounded-3xl border border-cyan-300/20 bg-cyan-300/[.05] p-5 text-right">
              <span className="text-xs uppercase tracking-widest text-cyan-400">Complete</span>
              <div className="mt-2 font-semibold text-white">Return to chapter index</div>
            </a>
          )}
        </nav>
      </div>
    </main>
  );
}
