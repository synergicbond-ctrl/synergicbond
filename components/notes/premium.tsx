"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { renderChemistry } from "@/lib/renderChemistry";

// ─────────────────────────────────────────────────────────────────────────────
// Premium Visual Notes — shared design system (reusable template).
//
// The reference-quality chapter shell + primitives every chapter plugs into:
// dark navy #0B1220, soft glass cards, restrained accents (no neon glow),
// eye-friendly for long sessions, mobile-first. A chapter page = <PremiumNotes>
// wrapping the section primitives below. Chemistry text passes through
// renderChemistry for sub/superscripts.
// ─────────────────────────────────────────────────────────────────────────────

export interface NoteSection {
  id: string;
  label: string;
}

/** Chapter shell: scroll-progress bar + sticky TOC + content column. */

export function Glass({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-lg border border-[var(--border)] bg-[var(--surface)] ${className}`}>{children}</div>;
}

export function Hero({ eyebrow, title, accent, lead, stats }: {
  eyebrow: string; title: string; accent: string; lead: string; stats: { v: string; k: string; tone?: string }[];
}) {
  return (
    <header className="scroll-mt-10">
      <div className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--accent)]">{eyebrow}</div>
      <h1 className="mt-2 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl">
        {title}<span className="text-[var(--accent)]"> {accent}</span>
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/65">{lead}</p>
      <Glass className="mt-6 flex flex-wrap gap-6 p-5">
        {stats.map((s) => (
          <div key={s.k}><div className={`text-2xl font-black ${s.tone ?? "text-[var(--accent)]"}`}>{renderChemistry(s.v)}</div><div className="text-xs text-white/45">{s.k}</div></div>
        ))}
      </Glass>
    </header>
  );
}

export function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-10">
      <div className="mb-5">
        <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--accent)]">{eyebrow}</p>
        <h2 className="mt-1.5 text-2xl font-black tracking-tight text-white sm:text-3xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}

export function FormulaCard({ name, formula, vars }: { name: string; formula: string; vars: { sym: string; mean: string }[] }) {
  return (
    <Glass className="p-5">
      <div className="text-xs font-bold uppercase tracking-wider text-white/40">{name}</div>
      <div className="mt-2 rounded-lg bg-[var(--background)] px-4 py-3 text-center text-xl font-black text-[var(--accent)]">{renderChemistry(formula)}</div>
      <div className="mt-3 space-y-1">
        {vars.map((v) => (
          <div key={v.sym} className="flex items-baseline gap-2 text-sm">
            <span className="min-w-[2.5rem] font-black text-amber-300">{renderChemistry(v.sym)}</span>
            <span className="text-white/60">{v.mean}</span>
          </div>
        ))}
      </div>
    </Glass>
  );
}

export function Step({ n, children }: { n: number; children: ReactNode }) {
  return (
    <div className="flex gap-3">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-500/15 text-sm font-black text-[var(--accent)]">{n}</span>
      <div className="pt-0.5 text-sm leading-relaxed text-white/80">{children}</div>
    </div>
  );
}

/** Coloured emphasis cards: mistake (red), ncert (green), memory (cyan). */
export function CalloutList({ variant, items }: { variant: "mistake" | "ncert"; items: string[] }) {
  const meta = variant === "mistake"
    ? { ring: "border-rose-500/25 bg-rose-500/[0.07]", icon: "⚠", iconCls: "text-rose-400" }
    : { ring: "border-emerald-500/25 bg-emerald-500/[0.07]", icon: "📗", iconCls: "text-emerald-400" };
  return (
    <div className="space-y-3">
      {items.map((t, i) => (
        <div key={i} className={`flex gap-3 rounded-lg border p-4 ${meta.ring}`}>
          <span className={meta.iconCls}>{meta.icon}</span>
          <p className="text-sm text-white/80">{renderChemistry(t)}</p>
        </div>
      ))}
    </div>
  );
}

export function JeeFocus({ items }: { items: { t: string; tag: string }[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((c) => (
        <Glass key={c.t} className="flex items-center justify-between gap-3 p-4">
          <span className="text-sm font-semibold text-white">{c.t}</span>
          <span className="shrink-0 rounded-full border border-amber-400/30 bg-amber-400/10 px-2 py-0.5 text-[10px] font-bold uppercase text-amber-300">{c.tag}</span>
        </Glass>
      ))}
    </div>
  );
}

export function RevisionSheet({ points, ctas }: { points: string[]; ctas?: { href: string; label: string }[] }) {
  return (
    <>
      <Glass className="p-5">
        <div className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
          {points.map((r) => (
            <div key={r} className="flex items-center gap-2 border-b border-white/[0.05] py-1.5 text-sm text-white/75">
              <span className="text-[var(--accent)]">▸</span>{renderChemistry(r)}
            </div>
          ))}
        </div>
      </Glass>
      {ctas && ctas.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-3">
          {ctas.map((c, i) => (
            <Link key={c.href} href={c.href}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${i === 0 ? "border border-cyan-400/40 bg-cyan-500/10 text-[var(--accent)] hover:bg-cyan-500/20" : "border border-white/15 bg-white/[0.04] text-white/80 hover:bg-white/[0.08]"}`}>
              {c.label} →
            </Link>
          ))}
        </div>
      )}
    </>
  );
}