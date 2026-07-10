"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { BlockMath, InlineMath } from "@/components/math/react-katex";

export type AtomicPartMeta = {
  part: number;
  title: string;
  pages: string;
  href: string;
};

export const atomicPartMeta: AtomicPartMeta[] = [
  { part: 1, title: "Dalton Theory and Cathode Rays", pages: "1-3", href: "/learn/atomic-structure/part01" },
  { part: 2, title: "Determination of e/m and Electron Charge", pages: "4-6", href: "/learn/atomic-structure/part02" },
  { part: 3, title: "Discovery of Proton", pages: "7-9", href: "/learn/atomic-structure/part03" },
  { part: 4, title: "Neutron and Rutherford Scattering", pages: "10-12", href: "/learn/atomic-structure/part04" },
  { part: 5, title: "Rutherford Model Calculations", pages: "13-16", href: "/learn/atomic-structure/part05" },
  { part: 6, title: "Rutherford Scattering Cross Section", pages: "17-19", href: "/learn/atomic-structure/part06" },
  { part: 7, title: "Rutherford Drawbacks and EM Waves", pages: "20-22", href: "/learn/atomic-structure/part07" },
  { part: 8, title: "Wave Terms and Black Body Radiation", pages: "23-25", href: "/learn/atomic-structure/part08" },
  { part: 9, title: "Radiation Laws and Planck Formula", pages: "26-28", href: "/learn/atomic-structure/part09" },
  { part: 10, title: "Rayleigh-Jeans and Planck Quantum Theory", pages: "29-32", href: "/learn/atomic-structure/part10" },
  { part: 11, title: "Photoelectric Effect and Einstein Equation", pages: "33-35", href: "/learn/atomic-structure/part11" },
];

export function AtomicPartShell({
  part,
  title,
  pages,
  children,
}: {
  part: number;
  title: string;
  pages: string;
  children: ReactNode;
}) {
  return (
    <article className="min-h-screen bg-[#0B1220] px-5 py-10 text-white sm:px-6">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/learn/atomic-structure"
          className="inline-flex rounded-lg border border-cyan-400/25 bg-cyan-400/10 px-3 py-1.5 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/15"
        >
          Atomic Structure
        </Link>
        <header className="mt-6 border-b border-white/[0.08] pb-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-cyan-300/75">
            Part {String(part).padStart(2, "0")} · Source pages {pages}
          </p>
          <h1 className="mt-2 text-3xl font-black tracking-tight sm:text-5xl">{title}</h1>
        </header>
        <div className="mt-8 space-y-8">{children}</div>
      </div>
    </article>
  );
}

export function SourcePage({ page, children }: { page: number; children: ReactNode }) {
  return (
    <section className="space-y-4 border-l border-cyan-400/20 pl-4">
      <h2 className="text-sm font-black uppercase tracking-[0.24em] text-cyan-300">Source page {page}</h2>
      {children}
    </section>
  );
}

export function NoteBlock({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <div className="rounded-lg border border-white/[0.08] bg-white/[0.035] p-4 sm:p-5">
      {title ? <h3 className="mb-3 text-lg font-black text-white">{title}</h3> : null}
      <div className="space-y-3 text-sm leading-relaxed text-white/78 sm:text-base">{children}</div>
    </div>
  );
}

export function FormulaLine({ math }: { math: string }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-cyan-400/15 bg-[#07101e] px-4 py-3 text-cyan-100">
      <BlockMath math={math} />
    </div>
  );
}

export function MathText({ math }: { math: string }) {
  return <InlineMath math={math} />;
}

export function BulletList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex gap-3">
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-fuchsia-400" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function DataTable({
  headers,
  rows,
}: {
  headers: ReactNode[];
  rows: ReactNode[][];
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-white/[0.08]">
      <table className="min-w-full text-left text-sm">
        <thead className="bg-white/[0.06] text-white">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="px-4 py-3 font-black">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/[0.06] text-white/75">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-3">
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

export function DiagramBox({ title, children }: { title: string; children: ReactNode }) {
  return (
    <figure className="rounded-lg border border-cyan-400/20 bg-cyan-400/[0.04] p-4">
      <figcaption className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-cyan-200">
        Diagram: {title}
      </figcaption>
      {children}
    </figure>
  );
}

export function AuditComment({
  pages,
  unclear,
  note,
}: {
  pages: string;
  unclear: number;
  note?: string;
}) {
  return (
    <span className="hidden">
      {`Source pages: ${pages}\nCoverage status: audited${note ? ` (${note})` : ""}\nUnclear markers: ${unclear}`}
    </span>
  );
}
