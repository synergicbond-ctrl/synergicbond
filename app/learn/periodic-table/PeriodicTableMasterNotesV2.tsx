"use client";

/* eslint-disable react/no-unescaped-entities, @typescript-eslint/no-unused-vars */

import React, { useMemo, useState } from "react";

/* =============================================================================
   PERIODIC TABLE & PERIODIC PROPERTIES — MASTER NOTES
   Original educational synthesis for Synergic Bond.
   The chapter reorganises standard chemistry concepts in fresh language,
   adds original diagrams and newly written worked examples, and avoids
   reproducing reference layouts, distinctive wording or branded artwork.
   ========================================================================== */

// -----------------------------------------------------------------------------
// Design tokens
// -----------------------------------------------------------------------------
const T = {
  bg: "#0a1622",
  bgGrid: "#0d1c2b",
  surface: "#122232",
  surface2: "#182b3e",
  border: "#24405c",
  borderSoft: "#1c3049",
  text: "#eef3f8",
  textDim: "#8fa8bf",
  textFaint: "#5f7a92",
  gold: "#e8b84b",
  cyan: "#5fd4ea",
  s: "#7fb2e5",
  p: "#e8896b",
  d: "#7fd9b8",
  f: "#c9a4e0",
  danger: "#e8896b",
  ok: "#7fd9b8",
  serif: "Georgia, 'Iowan Old Style', 'Times New Roman', serif",
  mono: "'JetBrains Mono','SF Mono','Courier New', ui-monospace, monospace",
  sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
};

const blockColor = (b: string) =>
  b === "s" ? T.s : b === "p" ? T.p : b === "d" ? T.d : b === "f" ? T.f : T.textDim;

// -----------------------------------------------------------------------------
// Generic primitives
// -----------------------------------------------------------------------------
export function Card({
  children,
  accent,
  style,
}: {
  children: React.ReactNode;
  accent?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        background: T.surface,
        border: `1px solid ${T.border}`,
        borderTop: accent ? `3px solid ${accent}` : `1px solid ${T.border}`,
        borderRadius: 12,
        padding: "18px 20px",
        marginBottom: 16,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function H2({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h2
      id={id}
      style={{
        fontFamily: T.serif,
        fontSize: 26,
        fontWeight: 700,
        color: T.gold,
        margin: "6px 0 14px",
        paddingBottom: 10,
        borderBottom: `2px solid ${T.border}`,
        scrollMarginTop: 90,
      }}
    >
      {children}
    </h2>
  );
}

export function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3
      style={{
        fontFamily: T.serif,
        fontSize: 18.5,
        fontWeight: 700,
        color: T.text,
        margin: "22px 0 10px",
      }}
    >
      {children}
    </h3>
  );
}

export function P({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily: T.sans, fontSize: 14.5, lineHeight: 1.7, color: T.text, margin: "0 0 12px" }}>
      {children}
    </p>
  );
}

export function Formula({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: T.mono,
        fontSize: 15,
        color: T.cyan,
        background: T.bgGrid,
        border: `1px solid ${T.borderSoft}`,
        borderRadius: 8,
        padding: "10px 14px",
        margin: "10px 0",
        display: "inline-block",
      }}
    >
      {children}
    </div>
  );
}

export function Callout({
  kind = "note",
  title,
  children,
}: {
  kind?: "note" | "warn" | "exception";
  title?: string;
  children: React.ReactNode;
}) {
  const map = {
    note: { color: T.cyan, label: title ?? "Note" },
    warn: { color: T.p, label: title ?? "Limitation" },
    exception: { color: T.gold, label: title ?? "Exception" },
  } as const;
  const c = map[kind];
  return (
    <div
      style={{
        borderLeft: `3px solid ${c.color}`,
        background: "rgba(255,255,255,0.02)",
        borderRadius: "0 8px 8px 0",
        padding: "10px 14px",
        margin: "12px 0",
      }}
    >
      <div style={{ fontFamily: T.sans, fontSize: 11, fontWeight: 700, letterSpacing: 0.5, textTransform: "uppercase", color: c.color, marginBottom: 4 }}>
        {c.label}
      </div>
      <div style={{ fontFamily: T.sans, fontSize: 13.8, lineHeight: 1.6, color: T.text }}>{children}</div>
    </div>
  );
}

export function DataTable({
  columns,
  rows,
  accent = T.gold,
}: {
  columns: string[];
  rows: (string | number)[][];
  accent?: string;
}) {
  return (
    <div style={{ overflowX: "auto", margin: "12px 0" }}>
      <table style={{ borderCollapse: "collapse", width: "100%", fontFamily: T.mono, fontSize: 13 }}>
        <thead>
          <tr>
            {columns.map((c, i) => (
              <th
                key={i}
                style={{
                  textAlign: "left",
                  padding: "8px 12px",
                  borderBottom: `2px solid ${accent}`,
                  color: accent,
                  fontFamily: T.sans,
                  fontSize: 11.5,
                  letterSpacing: 0.4,
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, ri) => (
            <tr key={ri} style={{ background: ri % 2 ? "rgba(255,255,255,0.015)" : "transparent" }}>
              {r.map((cell, ci) => (
                <td
                  key={ci}
                  style={{
                    padding: "7px 12px",
                    borderBottom: `1px solid ${T.borderSoft}`,
                    color: ci === 0 ? T.text : T.textDim,
                    fontWeight: ci === 0 ? 700 : 400,
                    whiteSpace: "nowrap",
                  }}
                >
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

export function ElementChip({ symbol, color, z }: { symbol: string; color: string; z?: number }) {
  return (
    <span
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minWidth: 34,
        height: 34,
        padding: "0 6px",
        borderRadius: 6,
        border: `1.5px solid ${color}`,
        color,
        fontFamily: T.mono,
        fontSize: 12.5,
        fontWeight: 700,
        marginRight: 6,
        marginBottom: 6,
        background: "rgba(255,255,255,0.02)",
        lineHeight: 1,
      }}
    >
      {symbol}
      {z && <span style={{ fontSize: 8, opacity: 0.7, marginTop: 1 }}>{z}</span>}
    </span>
  );
}

export function Timeline({
  items,
}: {
  items: { year: string; who: string; what: string }[];
}) {
  return (
    <div style={{ position: "relative", paddingLeft: 22, margin: "14px 0" }}>
      <div style={{ position: "absolute", left: 5, top: 4, bottom: 4, width: 2, background: T.border }} />
      {items.map((it, i) => (
        <div key={i} style={{ position: "relative", marginBottom: 16 }}>
          <div
            style={{
              position: "absolute",
              left: -22,
              top: 4,
              width: 11,
              height: 11,
              borderRadius: "50%",
              background: T.gold,
              border: `2px solid ${T.bg}`,
            }}
          />
          <div style={{ fontFamily: T.mono, fontSize: 12.5, color: T.gold, fontWeight: 700 }}>{it.year} — {it.who}</div>
          <div style={{ fontFamily: T.sans, fontSize: 13.8, color: T.text, lineHeight: 1.55 }}>{it.what}</div>
        </div>
      ))}
    </div>
  );
}


export function SectionIntro({
  eyebrow,
  title,
  summary,
  accent = T.gold,
}: {
  eyebrow: string;
  title: string;
  summary: string;
  accent?: string;
}) {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        border: `1px solid ${T.border}`,
        borderRadius: 18,
        padding: "24px 24px 22px",
        marginBottom: 20,
        background: `linear-gradient(135deg, ${T.surface2} 0%, ${T.surface} 58%, ${T.bgGrid} 100%)`,
        boxShadow: "0 22px 70px rgba(0,0,0,0.24)",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: 220,
          height: 220,
          right: -70,
          top: -110,
          borderRadius: "50%",
          background: accent,
          opacity: 0.09,
          filter: "blur(2px)",
        }}
      />
      <div style={{ position: "relative" }}>
        <div
          style={{
            color: accent,
            fontFamily: T.sans,
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: 1.4,
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          {eyebrow}
        </div>
        <h1
          style={{
            fontFamily: T.serif,
            fontSize: "clamp(26px, 4vw, 42px)",
            lineHeight: 1.08,
            margin: "0 0 12px",
            color: T.text,
            maxWidth: 820,
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontFamily: T.sans,
            fontSize: 14.5,
            lineHeight: 1.72,
            color: T.textDim,
            margin: 0,
            maxWidth: 880,
          }}
        >
          {summary}
        </p>
      </div>
    </div>
  );
}

export function ConceptGrid({
  items,
  columns = 3,
}: {
  items: { title: string; body: string; accent?: string; tag?: string }[];
  columns?: number;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, minmax(${columns >= 3 ? 220 : 280}px, 1fr))`,
        gap: 12,
        margin: "12px 0 18px",
      }}
    >
      {items.map((item) => {
        const accent = item.accent ?? T.cyan;
        return (
          <div
            key={item.title}
            style={{
              border: `1px solid ${T.borderSoft}`,
              borderRadius: 12,
              padding: "14px 15px",
              background: "linear-gradient(180deg, rgba(255,255,255,0.025), rgba(255,255,255,0.008))",
              minHeight: 112,
            }}
          >
            {item.tag && (
              <div style={{ fontFamily: T.mono, color: accent, fontSize: 10.5, fontWeight: 800, marginBottom: 5 }}>
                {item.tag}
              </div>
            )}
            <div style={{ fontFamily: T.serif, color: T.text, fontSize: 16.5, fontWeight: 700, marginBottom: 6 }}>
              {item.title}
            </div>
            <div style={{ fontFamily: T.sans, color: T.textDim, fontSize: 13.2, lineHeight: 1.55 }}>
              {item.body}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function WorkedExample({
  number,
  title,
  question,
  reasoning,
  answer,
  accent = T.gold,
}: {
  number: number | string;
  title: string;
  question: string;
  reasoning: string[];
  answer: string;
  accent?: string;
}) {
  return (
    <div
      style={{
        border: `1px solid ${T.border}`,
        borderRadius: 14,
        padding: "16px 18px",
        background: T.surface,
        marginBottom: 14,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 9 }}>
        <div
          style={{
            width: 30,
            height: 30,
            borderRadius: 9,
            display: "grid",
            placeItems: "center",
            background: `${accent}18`,
            border: `1px solid ${accent}66`,
            color: accent,
            fontFamily: T.mono,
            fontWeight: 800,
            fontSize: 12,
            flexShrink: 0,
          }}
        >
          {number}
        </div>
        <div style={{ fontFamily: T.serif, color: T.text, fontSize: 17, fontWeight: 700 }}>{title}</div>
      </div>
      <div
        style={{
          fontFamily: T.sans,
          fontSize: 13.7,
          lineHeight: 1.62,
          color: T.text,
          borderLeft: `3px solid ${accent}`,
          paddingLeft: 12,
          marginBottom: 10,
        }}
      >
        {question}
      </div>
      <ol style={{ margin: "0 0 10px", paddingLeft: 22, display: "grid", gap: 5 }}>
        {reasoning.map((step, i) => (
          <li key={i} style={{ fontFamily: T.sans, fontSize: 13.2, lineHeight: 1.55, color: T.textDim }}>
            {step}
          </li>
        ))}
      </ol>
      <div
        style={{
          borderRadius: 9,
          padding: "9px 11px",
          background: `${accent}11`,
          color: T.text,
          fontFamily: T.mono,
          fontSize: 13,
          lineHeight: 1.55,
        }}
      >
        <b style={{ color: accent }}>Answer:</b> {answer}
      </div>
    </div>
  );
}

export function ChapterHero() {
  return (
    <div
      className="chapterHero"
      style={{
        position: "relative",
        overflow: "hidden",
        margin: "22px 28px 8px",
        border: `1px solid ${T.border}`,
        borderRadius: 22,
        background: "linear-gradient(135deg, #10263b 0%, #0c1928 44%, #111a2d 100%)",
        padding: "26px 28px",
        boxShadow: "0 30px 90px rgba(0,0,0,0.28)",
      }}
    >
      <div style={{ position: "absolute", inset: 0, opacity: 0.24, backgroundImage: "linear-gradient(rgba(95,212,234,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(95,212,234,0.08) 1px, transparent 1px)", backgroundSize: "34px 34px" }} />
      <div style={{ position: "absolute", width: 340, height: 340, borderRadius: "50%", background: T.cyan, filter: "blur(90px)", opacity: 0.12, right: -80, top: -170 }} />
      <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: T.gold, filter: "blur(100px)", opacity: 0.1, left: -120, bottom: -220 }} />
      <div style={{ position: "relative", display: "grid", gridTemplateColumns: "minmax(0,1.4fr) minmax(250px,0.6fr)", gap: 24, alignItems: "center" }} className="heroGrid">
        <div>
          <div style={{ fontFamily: T.sans, color: T.cyan, fontSize: 11, fontWeight: 800, letterSpacing: 1.6, textTransform: "uppercase", marginBottom: 10 }}>
            Synergic Bond · Inorganic Chemistry
          </div>
          <h1 style={{ fontFamily: T.serif, color: T.text, fontSize: "clamp(32px,5vw,58px)", lineHeight: 0.98, margin: "0 0 14px", maxWidth: 760 }}>
            Periodic Table &amp; Periodic Properties
          </h1>
          <p style={{ fontFamily: T.sans, color: T.textDim, fontSize: 14.5, lineHeight: 1.7, margin: 0, maxWidth: 760 }}>
            A concept-first chapter for Boards, NEET, JEE Main and JEE Advanced: classification, electronic configuration, effective nuclear charge, size, ionization enthalpy, electron gain enthalpy, electronegativity, chemical periodicity, special relationships and original worked examples.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 }}>
            {["13 concept modules", "Original responsive SVGs", "Worked reasoning", "Exception-first revision"].map((x, i) => (
              <span key={x} style={{ border: `1px solid ${i % 2 ? T.gold + "55" : T.cyan + "55"}`, background: "rgba(255,255,255,0.025)", borderRadius: 999, padding: "6px 10px", fontFamily: T.sans, color: T.textDim, fontSize: 11.5 }}>
                {x}
              </span>
            ))}
          </div>
        </div>
        <ChapterHeroSVG />
      </div>
    </div>
  );
}


// -----------------------------------------------------------------------------
// SVG Diagrams
// -----------------------------------------------------------------------------
export function RadialDistributionSVG() {
  // Qualitative RDF curves for 3s, 3p, 3d
  const w = 460, h = 220, pad = 36;
  const curve = (peak: number, spread: number, amp: number) => {
    let d = `M ${pad} ${h - pad}`;
    for (let x = 0; x <= 100; x++) {
      const xx = pad + (x / 100) * (w - 2 * pad);
      const t = x / 100;
      const y = amp * Math.exp(-Math.pow((t - peak) / spread, 2)) * (1 + 0.15 * Math.sin(t * 18));
      d += ` L ${xx} ${h - pad - y}`;
    }
    return d;
  };
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: "100%", maxWidth: 460, background: T.bgGrid, borderRadius: 10, border: `1px solid ${T.borderSoft}` }}>
      <line x1={pad} y1={h - pad} x2={w - pad} y2={h - pad} stroke={T.textFaint} strokeWidth={1} />
      <line x1={pad} y1={pad} x2={pad} y2={h - pad} stroke={T.textFaint} strokeWidth={1} />
      <path d={curve(0.14, 0.09, 95)} stroke={T.s} strokeWidth={2} fill="none" />
      <path d={curve(0.32, 0.11, 78)} stroke={T.p} strokeWidth={2} fill="none" />
      <path d={curve(0.55, 0.14, 60)} stroke={T.d} strokeWidth={2} fill="none" />
      <text x={pad + 18} y={h - pad - 100} fill={T.s} fontSize={12} fontFamily={T.mono}>3s</text>
      <text x={pad + 70} y={h - pad - 85} fill={T.p} fontSize={12} fontFamily={T.mono}>3p</text>
      <text x={pad + 150} y={h - pad - 68} fill={T.d} fontSize={12} fontFamily={T.mono}>3d</text>
      <text x={w / 2 - 40} y={h - 8} fill={T.textDim} fontSize={11} fontFamily={T.sans}>distance from nucleus (r) →</text>
      <text x={10} y={pad - 6} fill={T.textDim} fontSize={11} fontFamily={T.sans}>P(r)</text>
    </svg>
  );
}

export function AtomicVolumeSVG() {
  const w = 480, h = 220, pad = 40;
  const pts = [
    [0, 25], [8, 90], [16, 45], [24, 20], [32, 95], [40, 55], [48, 22],
    [56, 88], [64, 60], [72, 28], [80, 70], [88, 50], [96, 30], [100, 92],
  ];
  const path = pts
    .map(([x, y], i) => `${i === 0 ? "M" : "L"} ${pad + (x / 100) * (w - 2 * pad)} ${h - pad - (y / 100) * (h - 2 * pad)}`)
    .join(" ");
  const peaks = [1, 4, 9, 13];
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: "100%", maxWidth: 480, background: T.bgGrid, borderRadius: 10, border: `1px solid ${T.borderSoft}` }}>
      <line x1={pad} y1={h - pad} x2={w - pad} y2={h - pad} stroke={T.textFaint} strokeWidth={1} />
      <line x1={pad} y1={pad} x2={pad} y2={h - pad} stroke={T.textFaint} strokeWidth={1} />
      <path d={path} stroke={T.gold} strokeWidth={2} fill="none" />
      {pts.map(([x, y], i) => (
        <circle key={i} cx={pad + (x / 100) * (w - 2 * pad)} cy={h - pad - (y / 100) * (h - 2 * pad)} r={peaks.includes(i) ? 4 : 2.4}
          fill={peaks.includes(i) ? T.cyan : T.textDim} />
      ))}
      <text x={pad + 4} y={38} fill={T.cyan} fontSize={11} fontFamily={T.sans}>peaks = alkali metals</text>
      <text x={w / 2 - 70} y={h - 8} fill={T.textDim} fontSize={11} fontFamily={T.sans}>atomic mass (increasing) →</text>
      <text x={8} y={pad - 8} fill={T.textDim} fontSize={11} fontFamily={T.sans}>atomic volume</text>
    </svg>
  );
}

export function DBlockRadiusChartSVG() {
  const elems = ["Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn"];
  const vals3d = [162, 147, 134, 127, 127, 126, 124, 124, 124, 138];
  const vals4d = [182, 160, 147, 140, 135, 134, 134, 137, 144, 152];
  const vals5d = [188, 159, 147, 141, 137, 135, 136, 139, 144, 155];
  const w = 520, h = 260, pad = 44;
  const min = 110, max = 200;
  const xFor = (i: number) => pad + (i / (elems.length - 1)) * (w - 2 * pad);
  const yFor = (v: number) => h - pad - ((v - min) / (max - min)) * (h - 2 * pad);
  const pathFor = (vals: number[]) => vals.map((v, i) => `${i === 0 ? "M" : "L"} ${xFor(i)} ${yFor(v)}`).join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: "100%", maxWidth: 520, background: T.bgGrid, borderRadius: 10, border: `1px solid ${T.borderSoft}` }}>
      <line x1={pad} y1={h - pad} x2={w - pad} y2={h - pad} stroke={T.textFaint} strokeWidth={1} />
      <line x1={pad} y1={pad} x2={pad} y2={h - pad} stroke={T.textFaint} strokeWidth={1} />
      <path d={pathFor(vals3d)} stroke={T.s} strokeWidth={2} fill="none" />
      <path d={pathFor(vals4d)} stroke={T.d} strokeWidth={2} fill="none" />
      <path d={pathFor(vals5d)} stroke={T.f} strokeWidth={2} fill="none" strokeDasharray="4 3" />
      {elems.map((e, i) => (
        <text key={e} x={xFor(i) - 7} y={h - pad + 16} fill={T.textDim} fontSize={10.5} fontFamily={T.mono}>{e}</text>
      ))}
      <text x={w - pad - 90} y={pad + 10} fill={T.s} fontSize={11} fontFamily={T.mono}>● 3d series</text>
      <text x={w - pad - 90} y={pad + 24} fill={T.d} fontSize={11} fontFamily={T.mono}>● 4d series</text>
      <text x={w - pad - 90} y={pad + 38} fill={T.f} fontSize={11} fontFamily={T.mono}>- - 5d series</text>
      <text x={8} y={pad - 10} fill={T.textDim} fontSize={11} fontFamily={T.sans}>radius / pm</text>
    </svg>
  );
}

export function MoseleyPlotSVG() {
  const w = 320, h = 200, pad = 36;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: "100%", maxWidth: 320, background: T.bgGrid, borderRadius: 10, border: `1px solid ${T.borderSoft}` }}>
      <line x1={pad} y1={h - pad} x2={w - pad} y2={h - pad} stroke={T.textFaint} strokeWidth={1} />
      <line x1={pad} y1={pad} x2={pad} y2={h - pad} stroke={T.textFaint} strokeWidth={1} />
      <line x1={pad} y1={h - pad} x2={w - pad} y2={pad} stroke={T.gold} strokeWidth={2} />
      <text x={w / 2 - 55} y={h - 8} fill={T.textDim} fontSize={11} fontFamily={T.sans}>atomic number (Z) →</text>
      <text x={8} y={pad - 8} fill={T.textDim} fontSize={11} fontFamily={T.sans}>√ν</text>
    </svg>
  );
}


export function ChapterHeroSVG() {
  const cells = [
    ["H", 1, 1, 1, T.s], ["He", 2, 1, 6, T.f],
    ["Li", 3, 2, 1, T.s], ["Be", 4, 2, 2, T.s], ["B", 5, 2, 3, T.p], ["C", 6, 2, 4, T.p], ["N", 7, 2, 5, T.p], ["O", 8, 2, 6, T.p],
    ["Na", 11, 3, 1, T.s], ["Mg", 12, 3, 2, T.s], ["Al", 13, 3, 3, T.p], ["Si", 14, 3, 4, T.p], ["P", 15, 3, 5, T.p], ["Cl", 17, 3, 6, T.p],
  ] as const;
  return (
    <svg viewBox="0 0 390 280" role="img" aria-label="Stylised periodic table with periodic trend arrows" style={{ width: "100%", maxWidth: 390, justifySelf: "end" }}>
      <defs>
        <linearGradient id="chapterHeroBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#122f47" />
          <stop offset="1" stopColor="#0a1422" />
        </linearGradient>
        <filter id="chapterHeroGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#000" floodOpacity="0.35" />
        </filter>
        <marker id="chapterHeroArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#e8b84b" />
        </marker>
      </defs>
      <rect x="8" y="8" width="374" height="264" rx="28" fill="url(#chapterHeroBg)" stroke="#2c4f6f" />
      <g filter="url(#chapterHeroGlow)">
        {cells.map(([sym, z, r, c, color]) => {
          const x = 40 + (c - 1) * 48;
          const y = 38 + (r - 1) * 56;
          return (
            <g key={sym}>
              <rect x={x} y={y} width="40" height="46" rx="8" fill="#101f2f" stroke={color} strokeWidth="1.4" />
              <text x={x + 5} y={y + 11} fill="#8097aa" fontSize="7" fontFamily={T.mono}>{z}</text>
              <text x={x + 20} y={y + 30} fill={color} fontSize="16" fontWeight="800" textAnchor="middle" fontFamily={T.mono}>{sym}</text>
            </g>
          );
        })}
      </g>
      <path d="M 55 226 C 125 222, 225 208, 330 148" fill="none" stroke={T.gold} strokeWidth="3" markerEnd="url(#chapterHeroArrow)" />
      <text x="185" y="252" fill={T.textDim} fontSize="11" textAnchor="middle" fontFamily={T.sans}>electronegativity and ionization enthalpy increase</text>
      <path d="M 352 190 L 352 64" fill="none" stroke={T.cyan} strokeWidth="2.5" markerEnd="url(#chapterHeroArrow)" opacity="0.7" />
      <text x="366" y="132" fill={T.cyan} fontSize="10" textAnchor="middle" transform="rotate(-90 366 132)" fontFamily={T.sans}>atomic size decreases</text>
    </svg>
  );
}

export function PositionDecoderSVG() {
  const boxes = [
    { x: 28, y: 38, w: 160, h: 64, title: "Highest n", body: "Period number", color: T.cyan },
    { x: 222, y: 38, w: 160, h: 64, title: "Last subshell", body: "Block", color: T.f },
    { x: 28, y: 138, w: 160, h: 64, title: "Valence count", body: "Group for s/p", color: T.gold },
    { x: 222, y: 138, w: 160, h: 64, title: "(n−1)d + ns", body: "Group for d", color: T.d },
  ];
  return (
    <svg viewBox="0 0 410 248" role="img" aria-label="Electronic configuration position decoder" style={{ width: "100%", maxWidth: 520, background: T.bgGrid, border: `1px solid ${T.borderSoft}`, borderRadius: 14 }}>
      <defs>
        <marker id="positionArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill="#8fa8bf" />
        </marker>
      </defs>
      <text x="205" y="24" fill={T.text} fontFamily={T.serif} fontSize="17" fontWeight="700" textAnchor="middle">Read the configuration in four moves</text>
      {boxes.map((b) => (
        <g key={b.title}>
          <rect x={b.x} y={b.y} width={b.w} height={b.h} rx="12" fill="#122232" stroke={b.color} />
          <text x={b.x + b.w / 2} y={b.y + 25} fill={b.color} fontFamily={T.mono} fontWeight="800" fontSize="13" textAnchor="middle">{b.title}</text>
          <text x={b.x + b.w / 2} y={b.y + 47} fill={T.textDim} fontFamily={T.sans} fontSize="12" textAnchor="middle">{b.body}</text>
        </g>
      ))}
      <path d="M188 70 L222 70" stroke={T.textDim} strokeWidth="1.5" markerEnd="url(#positionArrow)" />
      <path d="M302 102 L302 138" stroke={T.textDim} strokeWidth="1.5" markerEnd="url(#positionArrow)" />
      <path d="M222 170 L188 170" stroke={T.textDim} strokeWidth="1.5" markerEnd="url(#positionArrow)" />
      <text x="205" y="229" fill={T.textFaint} fontFamily={T.sans} fontSize="11" textAnchor="middle">Example: [Ar] 3d⁵ 4s¹ → period 4, d-block, group 6</text>
    </svg>
  );
}

export function TrendCompassSVG() {
  return (
    <svg viewBox="0 0 520 320" role="img" aria-label="Periodic trend direction map" style={{ width: "100%", maxWidth: 620, background: T.bgGrid, border: `1px solid ${T.borderSoft}`, borderRadius: 14 }}>
      <defs>
        <marker id="trendGoldArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill="#e8b84b" />
        </marker>
        <marker id="trendCyanArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill="#5fd4ea" />
        </marker>
      </defs>
      <rect x="120" y="58" width="280" height="200" rx="18" fill="#102131" stroke="#2a4662" />
      {[0,1,2,3,4].map(i => <line key={`v${i}`} x1={140+i*60} y1="78" x2={140+i*60} y2="238" stroke="#21384f" />)}
      {[0,1,2,3].map(i => <line key={`h${i}`} x1="140" y1={88+i*45} x2="380" y2={88+i*45} stroke="#21384f" />)}
      <text x="260" y="43" fill={T.text} fontFamily={T.serif} fontSize="19" fontWeight="700" textAnchor="middle">Direction of major periodic trends</text>
      <path d="M150 228 C220 210 315 150 382 82" fill="none" stroke={T.gold} strokeWidth="5" markerEnd="url(#trendGoldArrow)" />
      <text x="286" y="164" fill={T.gold} fontFamily={T.sans} fontSize="12" fontWeight="800" transform="rotate(-28 286 164)">IE, EN, non-metallic character ↑</text>
      <path d="M374 94 C305 142 218 208 146 236" fill="none" stroke={T.cyan} strokeWidth="5" markerEnd="url(#trendCyanArrow)" />
      <text x="243" y="205" fill={T.cyan} fontFamily={T.sans} fontSize="12" fontWeight="800" transform="rotate(-28 243 205)">atomic size, metallic character ↑</text>
      <g>
        <circle cx="70" cy="98" r="37" fill="#122232" stroke={T.cyan} />
        <text x="70" y="91" fill={T.cyan} fontFamily={T.mono} fontSize="13" fontWeight="800" textAnchor="middle">DOWN</text>
        <text x="70" y="109" fill={T.textDim} fontFamily={T.sans} fontSize="10.5" textAnchor="middle">new shell dominates</text>
      </g>
      <g>
        <circle cx="450" cy="220" r="37" fill="#122232" stroke={T.gold} />
        <text x="450" y="213" fill={T.gold} fontFamily={T.mono} fontSize="13" fontWeight="800" textAnchor="middle">ACROSS</text>
        <text x="450" y="231" fill={T.textDim} fontFamily={T.sans} fontSize="10.5" textAnchor="middle">Zeff dominates</text>
      </g>
    </svg>
  );
}

export function IonizationLandscapeSVG() {
  const pts = [
    [30, 204, "Li"], [75, 116, "Be"], [120, 150, "B"], [165, 102, "C"], [210, 68, "N"], [255, 91, "O"], [300, 50, "F"], [345, 28, "Ne"],
    [390, 212, "Na"], [435, 132, "Mg"], [480, 165, "Al"], [525, 119, "Si"], [570, 83, "P"], [615, 105, "S"], [660, 62, "Cl"], [705, 38, "Ar"],
  ] as const;
  const path = pts.map(([x,y],i)=>`${i===0?"M":"L"} ${x} ${y}`).join(" ");
  return (
    <svg viewBox="0 0 740 250" role="img" aria-label="First ionization enthalpy across periods two and three" style={{ width: "100%", background: T.bgGrid, border: `1px solid ${T.borderSoft}`, borderRadius: 14 }}>
      <line x1="22" y1="220" x2="720" y2="220" stroke={T.textFaint} />
      <line x1="22" y1="20" x2="22" y2="220" stroke={T.textFaint} />
      <path d={path} fill="none" stroke={T.gold} strokeWidth="3" />
      {pts.map(([x,y,label],i)=>(
        <g key={`${label}-${i}`}>
          <circle cx={x} cy={y} r="4" fill={i<8?T.cyan:T.p} />
          <text x={x} y={y-9} fill={T.textDim} fontFamily={T.mono} fontSize="9.5" textAnchor="middle">{label}</text>
        </g>
      ))}
      <line x1="345" y1="18" x2="345" y2="222" stroke="#2a4662" strokeDasharray="4 4" />
      <text x="184" y="240" fill={T.cyan} fontFamily={T.sans} fontSize="11" textAnchor="middle">Period 2</text>
      <text x="535" y="240" fill={T.p} fontFamily={T.sans} fontSize="11" textAnchor="middle">Period 3</text>
      <text x="34" y="16" fill={T.textDim} fontFamily={T.sans} fontSize="10.5">first ionization enthalpy</text>
    </svg>
  );
}

export function ElectronGainSVG() {
  const atoms = [
    { x: 95, label: "F", cloud: 38, note: "very compact", color: T.s },
    { x: 250, label: "Cl", cloud: 52, note: "best balance", color: T.d },
    { x: 405, label: "Br", cloud: 64, note: "larger", color: T.p },
  ];
  return (
    <svg viewBox="0 0 500 230" role="img" aria-label="Why chlorine has more negative electron gain enthalpy than fluorine" style={{ width: "100%", maxWidth: 580, background: T.bgGrid, border: `1px solid ${T.borderSoft}`, borderRadius: 14 }}>
      <defs>
        <marker id="electronGainArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill="#e8b84b" />
        </marker>
      </defs>
      <text x="250" y="26" fill={T.text} fontFamily={T.serif} fontSize="17" fontWeight="700" textAnchor="middle">Incoming electron: attraction versus crowding</text>
      {atoms.map((a) => (
        <g key={a.label}>
          <circle cx={a.x} cy="122" r={a.cloud} fill={`${a.color}12`} stroke={a.color} strokeWidth="1.4" />
          <circle cx={a.x} cy="122" r="11" fill={a.color} opacity="0.8" />
          <text x={a.x} y="127" fill="#07111f" fontFamily={T.mono} fontSize="12" fontWeight="900" textAnchor="middle">{a.label}</text>
          <path d={`M ${a.x-72} 83 L ${a.x-a.cloud-4} 106`} stroke={T.gold} strokeWidth="2" markerEnd="url(#electronGainArrow)" />
          <text x={a.x} y="198" fill={T.textDim} fontFamily={T.sans} fontSize="11" textAnchor="middle">{a.note}</text>
        </g>
      ))}
      <text x="250" y="216" fill={T.gold} fontFamily={T.mono} fontSize="11.5" textAnchor="middle">magnitude: Cl &gt; F &gt; Br &gt; I</text>
    </svg>
  );
}

export function ElectronegativitySpectrumSVG() {
  const bonds = [
    { x: 25, w: 120, label: "Covalent", d: "small Δχ", color: T.d },
    { x: 155, w: 160, label: "Polar covalent", d: "moderate Δχ", color: T.gold },
    { x: 325, w: 150, label: "Strong ionic tendency", d: "large Δχ", color: T.p },
  ];
  return (
    <svg viewBox="0 0 500 180" role="img" aria-label="Bond polarity spectrum based on electronegativity difference" style={{ width: "100%", maxWidth: 620, background: T.bgGrid, border: `1px solid ${T.borderSoft}`, borderRadius: 14 }}>
      <defs>
        <linearGradient id="enSpectrum" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={T.d} />
          <stop offset="0.52" stopColor={T.gold} />
          <stop offset="1" stopColor={T.p} />
        </linearGradient>
      </defs>
      <text x="250" y="27" fill={T.text} fontFamily={T.serif} fontSize="17" fontWeight="700" textAnchor="middle">Electronegativity difference is a continuum</text>
      <rect x="25" y="55" width="450" height="28" rx="14" fill="url(#enSpectrum)" opacity="0.92" />
      {[25,137.5,250,362.5,475].map((x,i)=><line key={x} x1={x} y1="84" x2={x} y2="94" stroke={T.textDim} />)}
      {["0","0.5","1.0","1.5","2.0+"].map((t,i)=><text key={t} x={25+i*112.5} y="108" fill={T.textDim} fontFamily={T.mono} fontSize="10" textAnchor="middle">{t}</text>)}
      {bonds.map(b=>(
        <g key={b.label}>
          <text x={b.x+b.w/2} y="135" fill={b.color} fontFamily={T.sans} fontSize="12" fontWeight="800" textAnchor="middle">{b.label}</text>
          <text x={b.x+b.w/2} y="154" fill={T.textDim} fontFamily={T.sans} fontSize="10.5" textAnchor="middle">{b.d}</text>
        </g>
      ))}
      <text x="250" y="174" fill={T.textFaint} fontFamily={T.sans} fontSize="10" textAnchor="middle">These boundaries are descriptive, not absolute laws.</text>
    </svg>
  );
}

export function OxideTrendSVG() {
  const items = [
    { x: 32, label: "Na₂O", type: "strongly basic", color: T.s },
    { x: 118, label: "MgO", type: "basic", color: T.d },
    { x: 204, label: "Al₂O₃", type: "amphoteric", color: T.gold },
    { x: 290, label: "SiO₂", type: "weakly acidic", color: T.p },
    { x: 376, label: "P₄O₁₀", type: "acidic", color: T.p },
    { x: 462, label: "SO₃", type: "strongly acidic", color: T.danger },
  ];
  return (
    <svg viewBox="0 0 550 190" role="img" aria-label="Change in oxide character across period three" style={{ width: "100%", background: T.bgGrid, border: `1px solid ${T.borderSoft}`, borderRadius: 14 }}>
      <defs>
        <linearGradient id="oxideGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={T.s} />
          <stop offset="0.48" stopColor={T.gold} />
          <stop offset="1" stopColor={T.danger} />
        </linearGradient>
      </defs>
      <text x="275" y="26" fill={T.text} fontFamily={T.serif} fontSize="17" fontWeight="700" textAnchor="middle">Period 3 oxides: ionic/basic → covalent/acidic</text>
      <rect x="28" y="54" width="494" height="10" rx="5" fill="url(#oxideGradient)" />
      {items.map((it) => (
        <g key={it.label}>
          <circle cx={it.x+20} cy="88" r="18" fill={`${it.color}18`} stroke={it.color} />
          <text x={it.x+20} y="92" fill={it.color} fontFamily={T.mono} fontSize="10.5" fontWeight="800" textAnchor="middle">{it.label}</text>
          <text x={it.x+20} y="126" fill={T.textDim} fontFamily={T.sans} fontSize="9.5" textAnchor="middle">{it.type}</text>
        </g>
      ))}
      <text x="95" y="166" fill={T.s} fontFamily={T.sans} fontSize="11.5" textAnchor="middle">metallic character</text>
      <text x="455" y="166" fill={T.p} fontFamily={T.sans} fontSize="11.5" textAnchor="middle">non-metallic character</text>
    </svg>
  );
}

export function DiagonalBridgeSVG() {
  const pairs = [
    { a: "Li", b: "Mg", y: 58, color: T.s },
    { a: "Be", b: "Al", y: 119, color: T.gold },
    { a: "B", b: "Si", y: 180, color: T.p },
  ];
  return (
    <svg viewBox="0 0 460 235" role="img" aria-label="Diagonal relationships between period two and period three" style={{ width: "100%", maxWidth: 560, background: T.bgGrid, border: `1px solid ${T.borderSoft}`, borderRadius: 14 }}>
      <defs>
        <marker id="diagArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" fill="#8fa8bf" />
        </marker>
      </defs>
      <text x="230" y="26" fill={T.text} fontFamily={T.serif} fontSize="17" fontWeight="700" textAnchor="middle">Diagonal similarity from comparable charge density</text>
      {pairs.map((p, i) => (
        <g key={p.a}>
          <rect x="60" y={p.y-22} width="70" height="44" rx="11" fill="#122232" stroke={p.color} />
          <text x="95" y={p.y+6} fill={p.color} fontFamily={T.mono} fontWeight="900" fontSize="17" textAnchor="middle">{p.a}</text>
          <rect x="330" y={p.y-22} width="70" height="44" rx="11" fill="#122232" stroke={p.color} />
          <text x="365" y={p.y+6} fill={p.color} fontFamily={T.mono} fontWeight="900" fontSize="17" textAnchor="middle">{p.b}</text>
          <path d={`M 132 ${p.y-9} C 205 ${p.y-45}, 255 ${p.y+45}, 328 ${p.y+9}`} fill="none" stroke={p.color} strokeWidth="2" markerEnd="url(#diagArrow)" />
        </g>
      ))}
      <text x="230" y="221" fill={T.textFaint} fontFamily={T.sans} fontSize="10.5" textAnchor="middle">Similarity is selective, not identity: compare polarization, covalency and oxide behaviour.</text>
    </svg>
  );
}

export function ContractionSVG() {
  const pts4f = [
    [45,78],[75,84],[105,91],[135,97],[165,103],[195,109],[225,114],[255,120],[285,124],[315,129],[345,134],[375,139],[405,143],[435,147],
  ] as const;
  const pts5d = [[70,188],[140,179],[210,174],[280,169],[350,166],[420,164]] as const;
  const line=(pts: readonly (readonly number[])[])=>pts.map((p,i)=>`${i===0?"M":"L"} ${p[0]} ${p[1]}`).join(" ");
  return (
    <svg viewBox="0 0 500 235" role="img" aria-label="Lanthanide contraction and similarity of 4d and 5d radii" style={{ width: "100%", maxWidth: 620, background: T.bgGrid, border: `1px solid ${T.borderSoft}`, borderRadius: 14 }}>
      <text x="250" y="25" fill={T.text} fontFamily={T.serif} fontSize="17" fontWeight="700" textAnchor="middle">Poor 4f shielding produces steady contraction</text>
      <path d={line(pts4f)} stroke={T.f} strokeWidth="3" fill="none" />
      {pts4f.map((p,i)=><circle key={i} cx={p[0]} cy={p[1]} r="3" fill={T.f} />)}
      <text x="50" y="62" fill={T.f} fontFamily={T.mono} fontSize="11">La → Lu</text>
      <path d={line(pts5d)} stroke={T.d} strokeWidth="3" fill="none" />
      {pts5d.map((p,i)=><circle key={i} cx={p[0]} cy={p[1]} r="3" fill={T.d} />)}
      <text x="50" y="207" fill={T.d} fontFamily={T.mono} fontSize="11">Zr≈Hf, Nb≈Ta, Mo≈W</text>
      <path d="M80 156 C180 142 325 145 432 150" fill="none" stroke={T.gold} strokeDasharray="5 5" />
      <text x="255" y="158" fill={T.gold} fontFamily={T.sans} fontSize="10.5" textAnchor="middle">4d and 5d radii become unusually similar</text>
    </svg>
  );
}

export function IsoelectronicSVG() {
  const ions = [
    { label: "N³⁻", z: 7, r: 146, color: T.f },
    { label: "O²⁻", z: 8, r: 138, color: T.p },
    { label: "F⁻", z: 9, r: 133, color: T.s },
    { label: "Ne", z: 10, r: 126, color: T.textDim },
    { label: "Na⁺", z: 11, r: 102, color: T.gold },
    { label: "Mg²⁺", z: 12, r: 72, color: T.d },
    { label: "Al³⁺", z: 13, r: 54, color: T.cyan },
  ];
  return (
    <svg viewBox="0 0 600 210" role="img" aria-label="Isoelectronic series decreases in radius as nuclear charge increases" style={{ width: "100%", background: T.bgGrid, border: `1px solid ${T.borderSoft}`, borderRadius: 14 }}>
      <text x="300" y="24" fill={T.text} fontFamily={T.serif} fontSize="17" fontWeight="700" textAnchor="middle">All have 10 electrons; proton number decides the size</text>
      {ions.map((it,i)=>{
        const x=52+i*82;
        const rr=18+(it.r-54)/8;
        return (
          <g key={it.label}>
            <circle cx={x} cy="103" r={rr} fill={`${it.color}18`} stroke={it.color} />
            <circle cx={x} cy="103" r="7" fill={it.color} />
            <text x={x} y="158" fill={it.color} fontFamily={T.mono} fontSize="12" fontWeight="800" textAnchor="middle">{it.label}</text>
            <text x={x} y="175" fill={T.textDim} fontFamily={T.sans} fontSize="9.5" textAnchor="middle">Z={it.z}</text>
          </g>
        );
      })}
      <text x="300" y="200" fill={T.gold} fontFamily={T.mono} fontSize="11.5" textAnchor="middle">N³⁻ &gt; O²⁻ &gt; F⁻ &gt; Ne &gt; Na⁺ &gt; Mg²⁺ &gt; Al³⁺</text>
    </svg>
  );
}


/* =============================================================================
   SECTION 1 DATA — History & Classification
   ========================================================================== */
const timelineData = [
  { year: "1789", who: "A. Lavoisier", what: "First split of elements into metals and non-metals based on lustre and conductivity." },
  { year: "~1815", who: "W. Prout", what: "Prout's hypothesis — atomic weights are whole-number multiples of hydrogen's weight." },
  { year: "1817–29", who: "J. W. Döbereiner", what: "Law of Triads — groups of three similar elements where the middle atomic weight ≈ mean of the other two." },
  { year: "1850", who: "M. Pettenkofer", what: "Rule of integral multiples — atomic weights of similar elements differ by whole-number multiples of ~8." },
  { year: "1862", who: "A. B. de Chancourtois", what: "Telluric helix (vis tellurique) — first explicit use of periodicity, elements wound on a 16-unit spiral." },
  { year: "1864–66", who: "J. Newlands", what: "Law of Octaves — every 8th element (by atomic weight) repeats in properties, like musical notes." },
  { year: "1869", who: "L. Meyer", what: "Atomic-volume curve — showed physical periodicity by plotting atomic volume vs atomic weight." },
  { year: "1869–71", who: "D. Mendeleev", what: "Periodic table arranged by atomic weight; left gaps and correctly predicted properties of undiscovered elements." },
  { year: "1913", who: "H. Moseley", what: "Showed atomic number (not weight) is the true periodic basis → the Modern Periodic Law." },
  { year: "20th c.", who: "Rang & Werner", what: "Long-form (extended) periodic table — the 18-group layout used universally today." },
];

const triads = [
  { name: "Alkali-metal triad", a: "Li (7)", b: "Na (23)", c: "K (39)", mean: "(7+39)/2 = 23 ✓" },
  { name: "Alkaline-earth triad", a: "Ca (40)", b: "Sr (88)", c: "Ba (137)", mean: "(40+137)/2 = 88.5 ≈ 88" },
  { name: "Halogen triad", a: "Cl (35.5)", b: "Br (80)", c: "I (127)", mean: "(35.5+127)/2 = 81.25 ≈ 80" },
  { name: "Chalcogen triad", a: "S (32)", b: "Se (79)", c: "Te (128)", mean: "(32+128)/2 = 80 ≈ 79" },
];

const ekaPredictions = [
  { predicted: "Eka-boron", found: "Scandium", sym: "Sc", year: "1879" },
  { predicted: "Eka-aluminium", found: "Gallium", sym: "Ga", year: "1875" },
  { predicted: "Eka-silicon", found: "Germanium", sym: "Ge", year: "1886" },
  { predicted: "Eka-manganese", found: "Technetium", sym: "Tc", year: "1937" },
];

const ekaSiliconCompare = [
  { prop: "Atomic weight", predicted: "~72", measured: "72.6" },
  { prop: "Density", predicted: "~5.5 g/cm³", measured: "5.36 g/cm³" },
  { prop: "Oxide formula", predicted: "EsO₂", measured: "GeO₂" },
  { prop: "Chloride", predicted: "EsCl₄, volatile liquid", measured: "GeCl₄, b.p. ~84 °C" },
];

const mendeleevDemerits = [
  { title: "Uncertain position of hydrogen", body: "H resembles alkali metals (loses 1 e⁻ → H⁺) and halogens (1 e⁻ short of noble-gas shell → H⁻) equally; Mendeleev could not place it firmly in either family." },
  { title: "No place for isotopes", body: "Isotopes of one element have different atomic weights, so a strictly weight-ordered table would need separate slots — but they are chemically the same element." },
  { title: "Anomalous pairs (weight order broken)", body: "To keep similar elements together he sometimes placed a heavier element before a lighter one: Ar(39.9) before K(39.1); Co(58.9) before Ni(58.7); Te(127.6) before I(126.9); Th(232) before Pa(231)." },
  { title: "Similar elements split apart", body: "Chemically alike elements landed in different groups — e.g. platinum (group VIII) and gold (group IB), despite their similar chemistry." },
  { title: "Dissimilar elements forced together", body: "Alkali metals (Li, Na, K…) and coinage metals (Cu, Ag, Au) were both dumped into Group I, sharing only an outer ns¹ configuration despite very different reactivity." },
  { title: "No explanation for periodicity", body: "The table described that properties repeat but gave no reason why — the true cause (recurring valence-shell configurations) was unknown until atomic structure was understood." },
];

const pBlockFamilies = [
  { name: "Boron family", group: "13 (IIIA)", members: "B, Al, Ga, In, Tl, Nh", config: "ns² np¹" },
  { name: "Carbon family", group: "14 (IVA)", members: "C, Si, Ge, Sn, Pb, Fl", config: "ns² np²" },
  { name: "Nitrogen family (pnictogens)", group: "15 (VA)", members: "N, P, As, Sb, Bi, Mc", config: "ns² np³" },
  { name: "Oxygen family (chalcogens)", group: "16 (VIA)", members: "O, S, Se, Te, Po, Lv", config: "ns² np⁴" },
  { name: "Halogens", group: "17 (VIIA)", members: "F, Cl, Br, I, At, Ts", config: "ns² np⁵" },
  { name: "Noble gases", group: "18 (zero)", members: "He, Ne, Ar, Kr, Xe, Rn, Og", config: "ns² np⁶" },
];

const dSeriesSpans = [
  { series: "3d series", period: "4th", span: "Sc (21) → Zn (30)" },
  { series: "4d series", period: "5th", span: "Y (39) → Cd (48)" },
  { series: "5d series", period: "6th", span: "La (57), Hf (72) → Hg (80)" },
  { series: "6d series", period: "7th", span: "Ac (89), Rf (104) → Cn (112)" },
];

const periodsTable = [
  { p: "1", n: "1", sub: "1s", count: "2", range: "H(1)–He(2)", note: "Shortest period" },
  { p: "2", n: "2", sub: "2s,2p", count: "8", range: "Li(3)–Ne(10)", note: "Short period" },
  { p: "3", n: "3", sub: "3s,3p", count: "8", range: "Na(11)–Ar(18)", note: "Short period" },
  { p: "4", n: "4", sub: "4s,3d,4p", count: "18", range: "K(19)–Kr(36)", note: "Long period" },
  { p: "5", n: "5", sub: "5s,4d,5p", count: "18", range: "Rb(37)–Xe(54)", note: "Long period" },
  { p: "6", n: "6", sub: "6s,4f,5d,6p", count: "32", range: "Cs(55)–Rn(86)", note: "Longest period" },
  { p: "7", n: "7", sub: "7s,5f,6d,7p", count: "32", range: "Fr(87)–Og(118)", note: "Longest period" },
];

const groupFamilyNames = [
  { g: "1 (IA)", name: "Alkali metals", members: "Li, Na, K, Rb, Cs, Fr (H placed here but not an alkali metal)" },
  { g: "2 (IIA)", name: "Alkaline-earth metals", members: "Be, Mg, Ca, Sr, Ba, Ra" },
  { g: "3–12", name: "Transition metals", members: "d-block; includes coinage & most noble metals" },
  { g: "15 (VA)", name: "Pnictogens", members: "N, P, As, Sb, Bi" },
  { g: "16 (VIA)", name: "Chalcogens", members: "O, S, Se, Te, Po" },
  { g: "17 (VIIA)", name: "Halogens", members: "F, Cl, Br, I, At" },
  { g: "18 (0)", name: "Noble / inert gases", members: "He, Ne, Ar, Kr, Xe, Rn" },
];

const oldNewGroups = {
  old: ["IA", "IIA", "IIIB", "IVB", "VB", "VIB", "VIIB", "VIII (×3)", "IB", "IIB", "IIIA", "IVA", "VA", "VIA", "VIIA", "0"],
  new: ["1", "2", "3", "4", "5", "6", "7", "8,9,10", "11", "12", "13", "14", "15", "16", "17", "18"],
};

const geochemClasses = [
  { cls: "Siderophiles", affinity: "Iron-loving", where: "Dissolve in molten iron — Earth's metallic core", eg: "Fe, Ni, Au, Pt" },
  { cls: "Chalcophiles", affinity: "Sulphide-loving", where: "Bond with sulphur — sulphide ores", eg: "Cu, Zn, Pb, Hg" },
  { cls: "Lithophiles", affinity: "Stone/rock-loving", where: "Bond with O in silicates — crust & mantle", eg: "Na, K, Al, Si" },
  { cls: "Atmophiles", affinity: "Vapour/gas-loving", where: "Stay as gases — the atmosphere", eg: "N, O, noble gases, H" },
];

const nomenclatureRoots = [
  { digit: "0", root: "nil", letter: "n" }, { digit: "1", root: "un", letter: "u" },
  { digit: "2", root: "bi", letter: "b" }, { digit: "3", root: "tri", letter: "t" },
  { digit: "4", root: "quad", letter: "q" }, { digit: "5", root: "pent", letter: "p" },
  { digit: "6", root: "hex", letter: "h" }, { digit: "7", root: "sept", letter: "s" },
  { digit: "8", root: "oct", letter: "o" }, { digit: "9", root: "enn", letter: "e" },
];

const systematicNames = [
  { z: 101, sys: "Unnilunium (Unu)", official: "Mendelevium", sym: "Md" },
  { z: 102, sys: "Unnilbium (Unb)", official: "Nobelium", sym: "No" },
  { z: 103, sys: "Unniltrium (Unt)", official: "Lawrencium", sym: "Lr" },
  { z: 104, sys: "Unnilquadium (Unq)", official: "Rutherfordium", sym: "Rf" },
  { z: 105, sys: "Unnilpentium (Unp)", official: "Dubnium", sym: "Db" },
  { z: 106, sys: "Unnilhexium (Unh)", official: "Seaborgium", sym: "Sg" },
  { z: 107, sys: "Unnilseptium (Uns)", official: "Bohrium", sym: "Bh" },
  { z: 108, sys: "Unniloctium (Uno)", official: "Hassium", sym: "Hs" },
  { z: 109, sys: "Unnilennium (Une)", official: "Meitnerium", sym: "Mt" },
  { z: 110, sys: "Ununnillium (Uun)", official: "Darmstadtium", sym: "Ds" },
  { z: 111, sys: "Unununnium (Uuu)", official: "Roentgenium", sym: "Rg" },
  { z: 112, sys: "Ununbium (Uub)", official: "Copernicium", sym: "Cn" },
  { z: 113, sys: "Ununtrium (Uut)", official: "Nihonium", sym: "Nh" },
  { z: 114, sys: "Ununquadium (Uuq)", official: "Flerovium", sym: "Fl" },
  { z: 115, sys: "Ununpentium (Uup)", official: "Moscovium", sym: "Mc" },
  { z: 116, sys: "Ununhexium (Uuh)", official: "Livermorium", sym: "Lv" },
  { z: 117, sys: "Ununseptium (Uus)", official: "Tennessine", sym: "Ts" },
  { z: 118, sys: "Ununoctium (Uuo)", official: "Oganesson", sym: "Og" },
];

const schemesSummary = [
  { scheme: "Lavoisier", basis: "Appearance", idea: "Metals vs non-metals", flaw: "No place for metalloids" },
  { scheme: "Prout", basis: "Atomic weight", idea: "Weights are multiples of H", flaw: "Many weights aren't whole numbers" },
  { scheme: "Döbereiner", basis: "Atomic weight", idea: "Triads; middle = mean of ends", flaw: "Only a few triads possible" },
  { scheme: "Chancourtois", basis: "Atomic weight", idea: "Helix; 16-unit vertical families", flaw: "Works only for light elements" },
  { scheme: "Newlands", basis: "Atomic weight", idea: "Every 8th element repeats", flaw: "Breaks after Ca; no gaps left" },
  { scheme: "Lothar Meyer", basis: "Atomic weight", idea: "Atomic-volume curve repeats", flaw: "Physical only; no predictions" },
  { scheme: "Mendeleev", basis: "Atomic weight", idea: "Table + predicted gaps", flaw: "Anomalous pairs; H & isotopes" },
  { scheme: "Moseley / Modern", basis: "Atomic number", idea: "Properties periodic in Z", flaw: "— (current basis)" },
];

/* Mini periodic table grid data: [symbol, Z, period(row), group(col), block] */
type PTEntry = [string, number, number, number, "s" | "p" | "d" | "f"];
const ptEntries: PTEntry[] = [
  ["H", 1, 1, 1, "s"], ["He", 2, 1, 18, "s"],
  ["Li", 3, 2, 1, "s"], ["Be", 4, 2, 2, "s"], ["B", 5, 2, 13, "p"], ["C", 6, 2, 14, "p"], ["N", 7, 2, 15, "p"], ["O", 8, 2, 16, "p"], ["F", 9, 2, 17, "p"], ["Ne", 10, 2, 18, "p"],
  ["Na", 11, 3, 1, "s"], ["Mg", 12, 3, 2, "s"], ["Al", 13, 3, 13, "p"], ["Si", 14, 3, 14, "p"], ["P", 15, 3, 15, "p"], ["S", 16, 3, 16, "p"], ["Cl", 17, 3, 17, "p"], ["Ar", 18, 3, 18, "p"],
  ["K", 19, 4, 1, "s"], ["Ca", 20, 4, 2, "s"], ["Sc", 21, 4, 3, "d"], ["Ti", 22, 4, 4, "d"], ["V", 23, 4, 5, "d"], ["Cr", 24, 4, 6, "d"], ["Mn", 25, 4, 7, "d"], ["Fe", 26, 4, 8, "d"], ["Co", 27, 4, 9, "d"], ["Ni", 28, 4, 10, "d"], ["Cu", 29, 4, 11, "d"], ["Zn", 30, 4, 12, "d"], ["Ga", 31, 4, 13, "p"], ["Ge", 32, 4, 14, "p"], ["As", 33, 4, 15, "p"], ["Se", 34, 4, 16, "p"], ["Br", 35, 4, 17, "p"], ["Kr", 36, 4, 18, "p"],
  ["Rb", 37, 5, 1, "s"], ["Sr", 38, 5, 2, "s"], ["Y", 39, 5, 3, "d"], ["Zr", 40, 5, 4, "d"], ["Nb", 41, 5, 5, "d"], ["Mo", 42, 5, 6, "d"], ["Tc", 43, 5, 7, "d"], ["Ru", 44, 5, 8, "d"], ["Rh", 45, 5, 9, "d"], ["Pd", 46, 5, 10, "d"], ["Ag", 47, 5, 11, "d"], ["Cd", 48, 5, 12, "d"], ["In", 49, 5, 13, "p"], ["Sn", 50, 5, 14, "p"], ["Sb", 51, 5, 15, "p"], ["Te", 52, 5, 16, "p"], ["I", 53, 5, 17, "p"], ["Xe", 54, 5, 18, "p"],
  ["Cs", 55, 6, 1, "s"], ["Ba", 56, 6, 2, "s"], ["La", 57, 6, 3, "f"], ["Hf", 72, 6, 4, "d"], ["Ta", 73, 6, 5, "d"], ["W", 74, 6, 6, "d"], ["Re", 75, 6, 7, "d"], ["Os", 76, 6, 8, "d"], ["Ir", 77, 6, 9, "d"], ["Pt", 78, 6, 10, "d"], ["Au", 79, 6, 11, "d"], ["Hg", 80, 6, 12, "d"], ["Tl", 81, 6, 13, "p"], ["Pb", 82, 6, 14, "p"], ["Bi", 83, 6, 15, "p"], ["Po", 84, 6, 16, "p"], ["At", 85, 6, 17, "p"], ["Rn", 86, 6, 18, "p"],
  ["Fr", 87, 7, 1, "s"], ["Ra", 88, 7, 2, "s"], ["Ac", 89, 7, 3, "f"], ["Rf", 104, 7, 4, "d"], ["Db", 105, 7, 5, "d"], ["Sg", 106, 7, 6, "d"], ["Bh", 107, 7, 7, "d"], ["Hs", 108, 7, 8, "d"], ["Mt", 109, 7, 9, "d"], ["Ds", 110, 7, 10, "d"], ["Rg", 111, 7, 11, "d"], ["Cn", 112, 7, 12, "d"], ["Nh", 113, 7, 13, "p"], ["Fl", 114, 7, 14, "p"], ["Mc", 115, 7, 15, "p"], ["Lv", 116, 7, 16, "p"], ["Ts", 117, 7, 17, "p"], ["Og", 118, 7, 18, "p"],
];
const lanthanides: PTEntry[] = [
  ["Ce", 58, 9, 4, "f"], ["Pr", 59, 9, 5, "f"], ["Nd", 60, 9, 6, "f"], ["Pm", 61, 9, 7, "f"], ["Sm", 62, 9, 8, "f"], ["Eu", 63, 9, 9, "f"], ["Gd", 64, 9, 10, "f"], ["Tb", 65, 9, 11, "f"], ["Dy", 66, 9, 12, "f"], ["Ho", 67, 9, 13, "f"], ["Er", 68, 9, 14, "f"], ["Tm", 69, 9, 15, "f"], ["Yb", 70, 9, 16, "f"], ["Lu", 71, 9, 17, "f"],
];
const actinides: PTEntry[] = [
  ["Th", 90, 10, 4, "f"], ["Pa", 91, 10, 5, "f"], ["U", 92, 10, 6, "f"], ["Np", 93, 10, 7, "f"], ["Pu", 94, 10, 8, "f"], ["Am", 95, 10, 9, "f"], ["Cm", 96, 10, 10, "f"], ["Bk", 97, 10, 11, "f"], ["Cf", 98, 10, 12, "f"], ["Es", 99, 10, 13, "f"], ["Fm", 100, 10, 14, "f"], ["Md", 101, 10, 15, "f"], ["No", 102, 10, 16, "f"], ["Lr", 103, 10, 17, "f"],
];
const allPtEntries = [...ptEntries, ...lanthanides, ...actinides];

export function MiniPeriodicTable() {
  return (
    <div style={{ overflowX: "auto", padding: "10px 0" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(18, 30px)", gridTemplateRows: "repeat(10, 30px)", gap: 2, minWidth: 560 }}>
        {allPtEntries.map(([sym, z, row, col, block]) => (
          <div
            key={sym}
            style={{
              gridRow: row === 9 ? 9 : row === 10 ? 10 : row,
              gridColumn: col,
              background: "rgba(255,255,255,0.03)",
              border: `1px solid ${blockColor(block)}`,
              borderRadius: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: T.mono,
              fontSize: 9.5,
              color: blockColor(block),
              lineHeight: 1,
              position: "relative",
            }}
            title={`${sym} (Z=${z})`}
          >
            <span style={{ fontSize: 6.5, position: "absolute", top: 1, left: 2, opacity: 0.6 }}>{z}</span>
            <span style={{ fontWeight: 700 }}>{sym}</span>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 16, marginTop: 10, flexWrap: "wrap" }}>
        {(["s", "p", "d", "f"] as const).map((b) => (
          <div key={b} style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: T.sans, fontSize: 11.5, color: T.textDim }}>
            <span style={{ width: 12, height: 12, borderRadius: 3, border: `1.5px solid ${blockColor(b)}`, display: "inline-block" }} />
            {b}-block
          </div>
        ))}
      </div>
    </div>
  );
}

/* =============================================================================
   SECTION 1 — History & Classification (renderer)
   ========================================================================== */
export function SectionHistory() {
  return (
    <div>
      <SectionIntro
        eyebrow="How periodic classification evolved"
        title="From Isolated Facts to the Modern Periodic Law"
        summary="The periodic table emerged through a sequence of increasingly powerful classification schemes. Each proposal captured part of the repeating pattern; atomic number and recurring valence configurations finally supplied the correct basis and explanation."
        accent={T.gold}
      />
      <H2 id="history">1 · Why Classification Became Necessary</H2>
      <P>
        As the number of known elements grew, memorising each element separately became impractical. Chemists therefore searched for a fundamental ordering variable that would bring chemically similar elements together and make properties recur at regular intervals. A successful classification had to organise known elements, expose trends and predict the behaviour of elements not yet discovered.
      </P>
      <Timeline items={timelineData} />

      <H2>2 · Early Attempts</H2>
      <H3>Lavoisier: metals and non-metals</H3>
      <DataTable columns={["Class", "Typical observations"]} rows={[
        ["Metals", "lustrous, conducting, malleable; many oxides basic"],
        ["Non-metals", "generally poor conductors; many oxides acidic"],
      ]} />
      <Callout kind="warn">The split was too broad and could not accommodate metalloids or reveal detailed family relationships.</Callout>

      <H3>Prout and Pettenkofer: numerical patterns in atomic weights</H3>
      <P>
        Prout proposed that atomic weights were whole-number multiples of hydrogen. More accurate measurements and the later understanding of isotopes showed that ordinary atomic weights need not be whole numbers. Pettenkofer noticed that several related elements differed by integral multiples of roughly eight, but this was only a limited pattern rather than a general law.
      </P>

      <H3>Döbereiner's triads</H3>
      <P>
        In a triad of chemically similar elements arranged by increasing atomic weight, the middle atomic weight was approximately the arithmetic mean of the other two.
      </P>
      <DataTable columns={["Triad", "First", "Middle", "Last", "Mean check"]} rows={triads.map(t => [t.name, t.a, t.b, t.c, t.mean])} />
      <Callout kind="warn">Only a small fraction of the known elements could be fitted into convincing triads.</Callout>

      <H3>Chancourtois' telluric screw</H3>
      <P>
        Elements were placed by increasing atomic weight on a helix around a cylinder. Elements appearing vertically above one another often showed similar chemistry, making this one of the earliest explicit geometric demonstrations of periodicity. The scheme worked mainly for lighter elements and attracted little attention because its original publication did not present the chemical pattern clearly.
      </P>

      <H3>Newlands' law of octaves</H3>
      <P>
        Newlands observed that, for lighter elements arranged by increasing atomic weight, every eighth element often resembled the first, analogous to the repetition of a musical note after an octave.
      </P>
      <Callout kind="warn">
        The pattern failed beyond calcium, left no systematic gaps for undiscovered elements and sometimes forced unlike elements into the same position.
      </Callout>

      <H2>3 · Lothar Meyer's Atomic-Volume Curve</H2>
      <P>
        Meyer plotted atomic volume—approximately molar mass divided by density—against atomic weight. The repeating peaks and valleys demonstrated that a physical property changes periodically. Alkali metals appeared near major peaks, transition metals near broad minima and halogens on rising sections before the next alkali-metal maximum.
      </P>
      <AtomicVolumeSVG />
      <Callout kind="note">The curve demonstrated periodicity visually, but Mendeleev's table became more influential because it organised chemical relationships and made testable predictions.</Callout>

      <H2>4 · Mendeleev's Periodic Law and Predictive Table</H2>
      <Formula>Properties of the elements are periodic functions of their atomic weights.</Formula>
      <P>
        Mendeleev arranged elements primarily by increasing atomic weight while giving chemical similarity priority when the two conflicted. He left gaps rather than forcing every known element into a continuous sequence and used neighbouring trends to predict the properties of missing elements.
      </P>
      <Card accent={T.gold}>
        <div style={{ fontFamily: T.serif, color: T.gold, fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Major achievements</div>
        <ul style={{ margin: 0, paddingLeft: 20, display: "grid", gap: 7 }}>
          <li style={{ color: T.text, fontFamily: T.sans, fontSize: 13.7, lineHeight: 1.55 }}>Brought chemically similar elements into families and made comparative study practical.</li>
          <li style={{ color: T.text, fontFamily: T.sans, fontSize: 13.7, lineHeight: 1.55 }}>Left deliberate gaps and predicted the existence and properties of several undiscovered elements.</li>
          <li style={{ color: T.text, fontFamily: T.sans, fontSize: 13.7, lineHeight: 1.55 }}>Used periodic placement to correct doubtful atomic weights and valencies.</li>
          <li style={{ color: T.text, fontFamily: T.sans, fontSize: 13.7, lineHeight: 1.55 }}>Allowed the noble gases to be added later without destroying the basic arrangement.</li>
        </ul>
        <DataTable columns={["Predicted name", "Element discovered", "Symbol", "Year"]} rows={ekaPredictions.map(e => [e.predicted, e.found, e.sym, e.year])} />
        <div style={{ fontFamily: T.sans, color: T.textDim, fontSize: 12.5, marginTop: 10 }}>Example: predicted eka-silicon compared with germanium</div>
        <DataTable columns={["Property", "Prediction", "Observed for Ge"]} rows={ekaSiliconCompare.map(e => [e.prop, e.predicted, e.measured])} />
      </Card>
      <Card accent={T.p}>
        <div style={{ fontFamily: T.serif, color: T.p, fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Limitations</div>
        <div style={{ display: "grid", gap: 10 }}>
          {mendeleevDemerits.map((d, i) => (
            <div key={d.title}>
              <div style={{ color: T.text, fontFamily: T.sans, fontSize: 13.6, fontWeight: 800 }}>{i + 1}. {d.title}</div>
              <div style={{ color: T.textDim, fontFamily: T.sans, fontSize: 13.2, lineHeight: 1.55 }}>{d.body}</div>
            </div>
          ))}
        </div>
      </Card>

      <H2>5 · Moseley's X-Ray Evidence</H2>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(260px,0.7fr) minmax(0,1.3fr)", gap: 18, alignItems: "center" }} className="twoCol">
        <MoseleyPlotSVG />
        <div>
          <P>
            Characteristic X-ray frequencies from different elements followed a simple linear relationship when the square root of frequency was plotted against atomic number. Atomic weight did not give the same clean sequence. This established nuclear charge, represented by atomic number Z, as the fundamental ordering variable.
          </P>
          <Formula>√ν = a(Z − b)</Formula>
          <Callout kind="note" title="Modern Periodic Law">
            The physical and chemical properties of elements are periodic functions of their atomic numbers.
          </Callout>
        </div>
      </div>
      <P>
        Ordering by atomic number resolves the anomalous pairs of the weight-based table: Ar precedes K because 18 precedes 19, Co precedes Ni because 27 precedes 28, and Te precedes I because 52 precedes 53. Isotopes also occupy one position because they share the same atomic number.
      </P>

      <H2>6 · Cause of Periodicity</H2>
      <P>
        As atomic number increases, electrons fill orbitals in a recurring sequence. Valence-shell configurations therefore repeat after characteristic intervals. Since chemical behaviour is governed mainly by valence electrons, elements with analogous outer configurations appear in the same group and show related properties.
      </P>
      <DataTable columns={["Family", "Recurring outer configuration", "Consequence"]} rows={[
        ["Group 1", "ns¹", "readily forms +1 state; strongly electropositive metals except H"],
        ["Group 2", "ns²", "commonly forms +2 state"],
        ["Group 17", "ns²np⁵", "one electron short of a noble-gas shell"],
        ["Group 18", "ns²np⁶, except He = 1s²", "closed-shell atoms with very high ionization enthalpy"],
      ]} />

      <H2>7 · The Modern Long-Form Table at a Glance</H2>
      <MiniPeriodicTable />
      <DataTable columns={["Feature", "Modern table"]} rows={[
        ["Ordering basis", "increasing atomic number"],
        ["Periods", "7 horizontal rows"],
        ["Groups", "18 vertical columns"],
        ["Blocks", "s, p, d and f according to the differentiating subshell"],
        ["Displayed f block", "lanthanoids and actinoids are shown below to keep the table compact"],
        ["Known elements", "118, ending with oganesson"],
      ]} />
      <Callout kind="note" title="Next module">
        The exact method for obtaining period, group and block from an electronic configuration is developed separately in “Configuration & Position” to avoid repetition.
      </Callout>
    </div>
  );
}

/* =============================================================================
   SECTION 2 — Atomic Radius (data + renderer)
   ========================================================================== */
const alkaliMetallicRadii = [
  { el: "Li", r: 152 }, { el: "Na", r: 186 }, { el: "K", r: 227 }, { el: "Rb", r: 248 }, { el: "Cs", r: 265 },
];
const boronFamilyRadii = [
  { el: "B", r: 88 }, { el: "Al", r: 143 }, { el: "Ga", r: 135 }, { el: "In", r: 167 }, { el: "Tl", r: 170 },
];
const carbonFamilyRadii = [
  { el: "C", r: 77 }, { el: "Si", r: 118 }, { el: "Ge", r: 122 }, { el: "Sn", r: 140 }, { el: "Pb", r: 146 },
];
const nitrogenFamilyRadii = [
  { el: "N", r: 70 }, { el: "P", r: 110 }, { el: "As", r: 121 }, { el: "Sb", r: 141 }, { el: "Bi", r: 148 },
];
const dBlock3dRadii = [
  { el: "Sc", r: 162 }, { el: "Ti", r: 147 }, { el: "V", r: 134 }, { el: "Cr", r: 127 }, { el: "Mn", r: 127 },
  { el: "Fe", r: 126 }, { el: "Co", r: 124 }, { el: "Ni", r: 124 }, { el: "Cu", r: 124 }, { el: "Zn", r: 138 },
];
const metallicRadiiTable = [
  { series: "3d", vals: "Sc 164 · Ti 147 · V 134 · Cr 129 · Mn 137 · Fe 126 · Co 125 · Ni 125 · Cu 128 · Zn 137" },
  { series: "4d", vals: "Y 182 · Zr 160 · Nb 147 · Mo 140 · Tc 135 · Ru 134 · Rh 134 · Pd 137 · Ag 144 · Cd 152" },
  { series: "5d", vals: "La 188 · Hf 159 · Ta 147 · W 141 · Re 137 · Os 135 · Ir 136 · Pt 139 · Au 144 · Hg 155" },
];
const covalentRadiiTable = [
  { series: "3d", vals: "Sc 144 · Ti 132 · V 122 · Cr 117 · Mn 117 · Fe 117 · Co 116 · Ni 115 · Cu 117 · Zn 125" },
  { series: "4d", vals: "Y 162 · Zr 145 · Nb 134 · Mo 129 · Ru 124 · Rh 125 · Pd 128 · Ag 134 · Cd 141" },
  { series: "5d", vals: "La 169 · Hf 144 · Ta 134 · W 130 · Re 128 · Os 126 · Ir 126 · Pt 129 · Au 134 · Hg 144" },
];
const chemicalTwins = [
  { pair: "Zr / Hf", r: "145 / 144" }, { pair: "Nb / Ta", r: "134 / 134" },
  { pair: "Mo / W", r: "129 / 130" }, { pair: "Tc / Re", r: "114 / 114" },
];
const lanthanideTable = [
  ["57", "La", "187", "106"], ["58", "Ce", "183", "103"], ["59", "Pr", "182", "101"], ["60", "Nd", "181", "99"],
  ["61", "Pm", "181", "98"], ["62", "Sm", "180", "96"], ["63", "Eu", "199", "95"], ["64", "Gd", "180", "94"],
  ["65", "Tb", "178", "92"], ["66", "Dy", "177", "91"], ["67", "Ho", "176", "89"], ["68", "Er", "175", "88"],
  ["69", "Tm", "174", "87"], ["70", "Yb", "173", "86"], ["71", "Lu", "—", "—"],
];

function MiniBarChart({ data, unit = "pm", color = T.gold }: { data: { el: string; r: number }[]; unit?: string; color?: string }) {
  const max = Math.max(...data.map(d => d.r));
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 10, height: 130, margin: "14px 0", padding: "0 4px" }}>
      {data.map((d) => (
        <div key={d.el} style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
          <div style={{ fontFamily: T.mono, fontSize: 11, color: T.textDim, marginBottom: 4 }}>{d.r}</div>
          <div style={{ width: "70%", height: `${(d.r / max) * 90}px`, background: `linear-gradient(180deg, ${color}, transparent)`, border: `1px solid ${color}`, borderRadius: "4px 4px 0 0" }} />
          <div style={{ fontFamily: T.mono, fontSize: 12.5, color: T.text, marginTop: 6, fontWeight: 700 }}>{d.el}</div>
        </div>
      ))}
      <div style={{ position: "absolute" }} />
      <span style={{ display: "none" }}>{unit}</span>
    </div>
  );
}

export function SectionAtomicRadius() {
  return (
    <div>
      <SectionIntro eyebrow="Measuring the size of an electron cloud" title="Atomic and Ionic Radius: Definitions, Trends and Special Cases" summary="An atom has no sharp boundary, so its size is inferred from internuclear distances. The meaning of radius changes with bonding environment, and ionic size depends strongly on charge, electron count and crystal context." accent={T.s} />
      <H2 id="atomic-radius">Atomic Radius — Complete Notes</H2>
      <P>
        An atom has no sharp outer surface because electron density fades gradually with distance. Atomic size is therefore an operational quantity inferred from internuclear distances in molecules, metals or molecular crystals. The appropriate definition depends on the bonding environment: <b>covalent</b>, <b>metallic</b>, <b>van der Waals</b> or <b>ionic</b> radius.
      </P>

      <H3>1 · Covalent Radius</H3>
      <P>Half the internuclear distance between two covalently bonded atoms of the same element (used for H₂, Cl₂, etc.):</P>
      <Formula>r_C = d(A–A) / 2</Formula>
      <P>For a heteronuclear bond A–B, a first estimate is d(A–B) ≈ r_A + r_B. Empirical corrections can account for polarity and the fact that tabulated radii depend on bond order and chemical environment:</P>
      <Formula>Schomaker–Stevenson: d(A–B) = r_A + r_B − 0.09Δχ (Å) &nbsp;|&nbsp; −9Δχ (pm)</Formula>
      <Formula>Pauling (modified by Stevenson): d(A–B) = r_A + r_B − |C₁χ_A − C₂χ_B|</Formula>

      <H3>2 · Metallic Radius</H3>
      <P>Half the internuclear distance between two closest metal atoms in a metallic lattice (metals modelled as
        close-packed spheres of positive nuclei in a "sea" of electrons):</P>
      <Formula>r_M = d(M–M) / 2</Formula>
      <Callout kind="note">Metallic radius &gt; covalent radius for the same element — e.g. K: metallic 2.3 Å vs covalent 2.03 Å.</Callout>

      <H3>3 · van der Waals Radius (Collision Radius)</H3>
      <P>Half the shortest internuclear distance between two non-bonded neighbouring atoms of adjacent molecules
        (or, for monoatomic noble gases, between two atoms at closest approach):</P>
      <Formula>r_vw = d / 2</Formula>
      <Callout kind="note">Order: r_vw &gt; r_metallic &gt; r_covalent. e.g. Cl: covalent = 0.99 Å, van der Waals = 1.80 Å.
        Noble-gas radii are usually quoted as van der Waals radii (Xe, Kr compounds with O/F instead use covalent radii).</Callout>

      <H3>4 · Ionic Radius</H3>
      <P>Measured from the internuclear distance between closest ions in an ionic crystal (depends on crystal structure).</P>
      <DataTable columns={["Species", "Cause", "Effect"]} rows={[
        ["Cation (A⁺)", "Loses e⁻ → Zeff increases", "Smaller than neutral atom"],
        ["Anion (A⁻)", "Gains e⁻ → Zeff decreases, repulsion ↑", "Larger than neutral atom"],
      ]} />
      <Callout kind="note">Size: A⁺ &lt; A &lt; A⁻ (e.g. I⁺ &lt; I &lt; I⁻). Zeff order: A⁻ &lt; A &lt; A⁺.</Callout>

      <H2 id="radius-factors">5 · Factors Affecting Atomic Radius</H2>
      <DataTable columns={["Factor", "Rule"]} rows={[
        ["Effective nuclear charge (Zeff)", "Zeff ∝ 1/radius — higher Zeff ⇒ smaller radius. Across a period: Zeff Li<Be<B<C<N<O<F rises, so radius falls in that order."],
        ["Screening / shielding", "Greater shielding of the valence electron generally increases radius. For orbitals of the same shell, penetration and shielding efficiency follow approximately s > p > d > f."],
        ["Magnitude of negative charge", "More negative charge ⇒ larger radius: N < N⁻ < N²⁻ < N³⁻; O < O⁻ < O²⁻; I < I⁻."],
        ["Magnitude of positive charge", "More positive charge ⇒ smaller radius: Na>Na⁺; Fe²⁺>Fe³⁺; Cu⁺>Cu²⁺; Mn>Mn²⁺>Mn³⁺>Mn⁴⁺>Mn⁵⁺>Mn⁶⁺."],
        ["Bond order", "For the same pair of atoms, higher bond order usually gives a shorter bond: N–N > N=N > N≡N and C–C > C=C > C≡C."],
      ]} />

      <H2 id="radius-trends">6 · Periodic Trends — s & p Block</H2>
      <P>Across a period, radius decreases left→right (Zeff rises). Down a group, radius increases (a new, higher-n shell is added).</P>
      <DataTable columns={["Radius type", "Period-2 order"]} rows={[
        ["van der Waals", "Ne > Li > Be > B > C > N > O > F"],
        ["Covalent", "Li > Be > B > C > N > O > F (noble gas excluded)"],
      ]} />
      <H3>Group Size Data</H3>
      <P>Alkali metal metallic radii (pm):</P>
      <MiniBarChart data={alkaliMetallicRadii} color={T.s} />
      <DataTable columns={["Group", "Order"]} rows={[
        ["Alkaline earths", "Be < Mg < Ca < Sr < Ba < Ra"],
        ["Group 1", "Li < Na < K < Rb < Cs < Fr"],
        ["Halogens", "F < Cl < Br < I"],
        ["Noble gases", "He < Ne < Ar < Kr < Xe < Rn"],
      ]} />
      <H3>Comparing neighbouring s-block families</H3>
      <P>Within a period, the group-2 atom is smaller than the group-1 atom because it has the same occupied shells but greater nuclear charge. Down either group, addition of a new shell increases size.</P>
      <Formula>Within a period: r(group 1) &gt; r(group 2)</Formula>

      <H2 id="radius-exceptions">7 · Special / Anomalous Cases in Groups</H2>
      <P>Boron family radii (pm) — note Ga &lt; Al:</P>
      <MiniBarChart data={boronFamilyRadii} color={T.p} />
      <Callout kind="exception" title="Ga < Al (scandide / d-block contraction)">
        ₃₁Ga = 3d¹⁰4s²4p¹ vs Al = [Ne]3s²3p¹. The filled 3d¹⁰ subshell shields poorly, so Ga's outer electron feels a
        stronger pull → Ga ends up smaller than Al despite being one period below it.
      </Callout>
      <Callout kind="exception" title="In → Tl — only a tiny increase (lanthanide contraction)">
        ₈₁Tl = 4f¹⁴5d¹⁰6s²6p¹ vs In = [Kr]5s²4d¹⁰5p¹. Poor shielding by the filled 4f electrons contracts Tl's size,
        nearly cancelling the expected increase from adding a new shell.
      </Callout>
      <P>Carbon family radii (pm) — small Si→Ge and Sn→Pb gaps:</P>
      <MiniBarChart data={carbonFamilyRadii} color={T.d} />
      <Callout kind="note">Si→Ge gap is small (poor d-shielding in Ge); Sn→Pb gap is small (poor f-shielding in Pb, i.e. lanthanide contraction).</Callout>
      <P>Nitrogen family radii (pm) — small Sb→Bi gap (poor f-shielding in Bi):</P>
      <MiniBarChart data={nitrogenFamilyRadii} color={T.f} />
      <Callout kind="exception" title="Key exceptions to remember">
        (1) Noble gases have the largest sizes as van der Waals radii, but smaller covalent radii where measurable (e.g. Xe).
        (2) Al &gt; Ga (Zeff rises due to poor 3d shielding). (3) Hf ≈ Zr (lanthanide contraction). (4) Sc &lt; Y &lt; La (La has no 4f electron yet).
      </Callout>

      <H2 id="radius-dblock">8 · Transition (d-Block) Elements</H2>
      <P>Across a period, radius first decreases (rising Zeff), then stays nearly constant, then rises again near Cu/Zn
        (growing (n−1)d electron–electron repulsion screens the added nuclear charge).</P>
      <DataTable columns={["Element", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn"]} rows={[["Atomic radius (pm)", ...dBlock3dRadii.map(d => d.r)]]} />
      <DBlockRadiusChartSVG />
      <Callout kind="note">Down a group: r(3d) &lt; r(4d) ≈ r(5d) — the 4d/5d gap nearly closes due to lanthanide contraction, except Y(39) &amp; La(57).</Callout>

      <H3>9 · Metallic & Covalent Radii Data (Reference Tables)</H3>
      <P>Metallic radii, 12-coordination (pm):</P>
      <DataTable columns={["Series", "Values"]} rows={metallicRadiiTable.map(m => [m.series, m.vals])} />
      <P>Covalent radii (pm):</P>
      <DataTable columns={["Series", "Values"]} rows={covalentRadiiTable.map(m => [m.series, m.vals])} />
      <Callout kind="note" title="Reference covalent radii of the 3d series (Å)">
        Sc 1.44 · Ti 1.32 · V 1.22 · Cr 1.17 · Mn 1.17 · Fe 1.17 · Co 1.16 · Ni 1.15 · Cu 1.17 · Zn 1.25
      </Callout>
      <H3>Chemical Twins (4d/5d pairs of near-identical radius)</H3>
      <DataTable columns={["Pair", "Radius (pm)"]} rows={chemicalTwins.map(c => [c.pair, c.r])} />
      <Callout kind="note">Caused by lanthanide contraction — near-equal size gives these pairs very similar chemistry.</Callout>

      <H2 id="radius-fblock">10 · Inner-Transition (f-Block) — Lanthanide Contraction</H2>
      <P>Atomic and ionic radius decrease steadily across the lanthanide series (Zeff rises due to poor f-electron
        shielding) — regular in ions, less regular in atoms. Exceptions: Eu and Yb are larger (stable half-filled
        4f⁷ and fully-filled 4f¹⁴). Special oxidation states to reach half/full 4f: Ce⁴⁺(4f⁰), Eu²⁺(4f⁷), Yb²⁺(4f¹⁴).
        Actinoids show an overall contraction from Th to Lr, but the pattern is less regular because 5f, 6d and 7s energies are close.</P>
      <DataTable columns={["Z", "Ln", "Ln (pm)", "Ln³⁺ (pm)"]} rows={lanthanideTable} />

      <H2 id="ionic-radius">11 · Ionic Radius — Detailed Trends</H2>
      <Formula>Overall order for one element: A⁻ &gt; A &gt; A⁺</Formula>
      <H3>Trend 1 — Down a Group (radius increases with shell number)</H3>
      <DataTable columns={["Series", "Order"]} rows={[
        ["Halide anions", "F⁻ < Cl⁻ < Br⁻ < I⁻"],
        ["Chalcogenide anions", "O²⁻ < S²⁻ < Se²⁻ < Te²⁻"],
        ["Group-1 cations", "H⁺ < Li⁺ < Na⁺ < K⁺ < Rb⁺ < Cs⁺"],
        ["Group-2 cations", "Be²⁺ < Mg²⁺ < Ca²⁺ < Sr²⁺ < Ba²⁺ < Ra²⁺"],
      ]} />
      <H3>Trend 2 — Effect of Charge on the Same Element</H3>
      <DataTable columns={["Rule", "Example"]} rows={[
        ["Cation: charge ↑ ⇒ radius ↓", "Fe²⁺ > Fe³⁺ ; Ti²⁺ > Ti³⁺ > Ti⁴⁺ ; Mn²⁺ > Mn⁴⁺ > Mn⁷⁺"],
        ["Anion: charge ↑ ⇒ radius ↑", "O²⁻ > O⁻ ; S²⁻ > S⁻"],
      ]} />
      <Callout kind="note">The smallest cation of all is H⁺.</Callout>

      <H3>Isoelectronic Species (same electron count; size decreases as Z increases)</H3>
      <IsoelectronicSVG />
      <DataTable columns={["Species", "N³⁻", "O²⁻", "F⁻", "Na⁺", "Mg²⁺", "Al³⁺", "Si⁴⁺"]} rows={[
        ["Electrons", 10, 10, 10, 10, 10, 10, 10],
        ["Protons (Z)", 7, 8, 9, 11, 12, 13, 14],
      ]} />
      <Formula>Radius order: N³⁻ &gt; O²⁻ &gt; F⁻ &gt; Na⁺ &gt; Mg²⁺ &gt; Al³⁺ &gt; Si⁴⁺</Formula>
      <Callout kind="note">
        Other useful isoelectronic sets include S²⁻, Cl⁻, K⁺, Ca²⁺, Sc³⁺ and H⁻, He, Li⁺. Within each set, increasing proton number contracts the shared electron count more strongly.
      </Callout>
      <Callout kind="exception" title="Hydride radius is strongly environment-dependent">
        H⁻ has only one proton holding two electrons and is much more diffuse than a neutral hydrogen atom. Numerical ionic radii depend on the crystal model and coordination number, so avoid treating one quoted H⁻ value as a universal radius.
      </Callout>

      <H2 id="radius-summary">12 · Master Summary of Size Orders</H2>
      <DataTable columns={["Comparison", "Order / Rule"]} rows={[
        ["Four types of radii", "van der Waals > Metallic > Covalent (r_V > r_M > r_C)"],
        ["Atom vs its ions", "Anion (A⁻) > Atom (A) > Cation (A⁺)"],
        ["Zeff vs radius", "Zeff ↑ ⇒ radius ↓ (Zeff ∝ 1/radius)"],
        ["Screening / shielding", "Greater screening ⇒ greater radius; order s > p > d > f"],
        ["Across a period (s,p)", "Radius decreases: Li > Be > B > C > N > O > F"],
        ["van der Waals (period)", "Ne > Li > Be > B > C > N > O > F"],
        ["Down a group (s,p)", "Radius increases: Li < Na < K < Rb < Cs < Fr"],
        ["Alkaline earth group", "Be < Mg < Ca < Sr < Ba < Ra"],
                ["Boron family", "B < Ga < Al < In < Tl (Ga<Al anomaly; In→Tl small rise)"],
        ["Carbon family", "C < Si < Ge < Sn < Pb (poor d-shield Ge; poor f-shield Pb)"],
        ["Nitrogen family", "N < P < As < Sb < Bi (poor f-shield Bi)"],
        ["d-block across period", "Decreases, then ~constant, then increases (Cu, Zn)"],
        ["d-block down a group", "r(3d) < r(4d) ≈ r(5d); exception Sc < Y < La"],
        ["Chemical twins (4d/5d)", "Zr≈Hf, Nb≈Ta, Mo≈W, Tc≈Re (lanthanide contraction)"],
        ["f-block (lanthanoids)", "Radius decreases La→Lu; exceptions Eu, Yb (larger)"],
        ["Bond length vs order", "Bond length ∝ 1/bond order; N–N > N=N > N≡N"],
        ["+ve / −ve charge", "+ve charge ↑ ⇒ radius ↓; −ve charge ↑ ⇒ radius ↑"],
        ["Isoelectronic species", "Higher Z (more protons) ⇒ smaller radius"],
        ["Charge and electron count", "Cations contract; anions expand; exact ionic radii depend on coordination and crystal structure"],
      ]} />
    </div>
  );
}

/* =============================================================================
   SECTION 3 — Effective Nuclear Charge & Slater's Rule
   ========================================================================== */
export function SectionZeffSlater() {
  return (
    <div>
      <SectionIntro
        eyebrow="The net nuclear pull felt by an electron"
        title="Effective Nuclear Charge, Penetration and Slater's Rule"
        summary="Shielding prevents an electron from experiencing the full nuclear charge. Radial penetration explains why electrons in the same principal shell are not equivalent, while Slater's rules give a useful semi-empirical estimate of the shielding constant."
        accent={T.f}
      />
      <H2 id="zeff">1 · Shielding and Effective Nuclear Charge</H2>
      <P>
        A test electron is attracted by the positive nucleus and repelled by every other electron. The combined reduction in nuclear attraction is described by the shielding constant σ. The net charge experienced by the test electron is the effective nuclear charge.
      </P>
      <Formula>Zeff = Z − σ</Formula>
      <ConceptGrid
        items={[
          { title: "Nuclear charge Z", tag: "PROTON COUNT", accent: T.gold, body: "Increases by one from one element to the next and is the ultimate source of attraction." },
          { title: "Shielding constant σ", tag: "ELECTRON REPULSION", accent: T.p, body: "Represents the average screening produced by all other electrons; it is not simply the number of inner electrons." },
          { title: "Effective nuclear charge", tag: "NET ATTRACTION", accent: T.cyan, body: "Controls size, orbital energy, ionization enthalpy and many periodic trends." },
          { title: "Penetration", tag: "NEAR-NUCLEUS PROBABILITY", accent: T.d, body: "An orbital that spends more probability density near the nucleus feels larger Zeff and generally has lower energy." },
        ]}
      />

      <H2>2 · Penetration and Shielding Efficiency</H2>
      <div style={{ display: "grid", gridTemplateColumns: "minmax(300px,0.9fr) minmax(0,1.1fr)", gap: 18, alignItems: "start" }} className="twoCol">
        <RadialDistributionSVG />
        <div>
          <P>
            For orbitals with the same principal quantum number, s orbitals penetrate closest to the nucleus, followed by p, d and f. Greater penetration means the electron itself feels a stronger nuclear attraction. Inner penetrating electrons also screen more effectively than diffuse electrons.
          </P>
          <Formula>Same-shell penetration: s &gt; p &gt; d &gt; f</Formula>
          <Formula>Approximate shielding effectiveness: s &gt; p &gt; d &gt; f</Formula>
          <Callout kind="note">
            First-row 3d orbitals are less radially extended than 4d and 5d orbitals, but they certainly participate in metal–ligand bonding. The difference is relative radial extension, not an absence of covalent bonding.
          </Callout>
        </div>
      </div>

      <H2 id="slater">3 · Slater Grouping</H2>
      <P>Write the electron configuration in the following groups before calculating σ:</P>
      <Formula>(1s) (2s,2p) (3s,3p) (3d) (4s,4p) (4d) (4f) (5s,5p) ...</Formula>
      <P>
        Electrons in groups to the right of the test electron do not contribute to shielding in the Slater approximation. The test electron itself is never counted.
      </P>

      <H3>Rule A · Test electron in ns or np</H3>
      <DataTable columns={["Shielding source", "Contribution per electron"]} rows={[
        ["Other electrons in the same (ns,np) group", "0.35; for 1s, the other electron contributes 0.30"],
        ["Electrons in the (n−1) shell", "0.85"],
        ["Electrons in (n−2) and lower shells", "1.00"],
      ]} accent={T.cyan} />

      <H3>Rule B · Test electron in nd or nf</H3>
      <DataTable columns={["Shielding source", "Contribution per electron"]} rows={[
        ["Other electrons in the same nd or nf group", "0.35"],
        ["Every electron in groups to the left", "1.00"],
        ["Electrons in groups to the right", "0"],
      ]} accent={T.f} />

      <H2>4 · Worked Slater Calculations</H2>
      <WorkedExample
        number="1"
        title="Helium: a two-electron species"
        question="Estimate Zeff for one 1s electron in He."
        reasoning={[
          "The other 1s electron contributes 0.30.",
          "Therefore σ = 0.30.",
          "Zeff = 2 − 0.30.",
        ]}
        answer="Zeff = 1.70."
        accent={T.cyan}
      />
      <WorkedExample
        number="2"
        title="Magnesium: a 3s electron"
        question="Estimate Zeff for a 3s electron in Mg, Z = 12."
        reasoning={[
          "Group Mg as (1s²)(2s²2p⁶)(3s²).",
          "The other 3s electron contributes 1 × 0.35.",
          "Eight electrons in n−1 = 2 contribute 8 × 0.85.",
          "Two 1s electrons contribute 2 × 1.00.",
        ]}
        answer="σ = 0.35 + 6.80 + 2.00 = 9.15; Zeff = 12 − 9.15 = 2.85."
        accent={T.gold}
      />
      <WorkedExample
        number="3"
        title="Chlorine: a 3p electron"
        question="Estimate Zeff for a 3p electron in Cl, Z = 17."
        reasoning={[
          "Group Cl as (1s²)(2s²2p⁶)(3s²3p⁵).",
          "Six other electrons in the 3s/3p group contribute 6 × 0.35.",
          "Eight n−1 electrons contribute 8 × 0.85.",
          "Two lower-shell electrons contribute 2 × 1.00.",
        ]}
        answer="σ = 2.10 + 6.80 + 2.00 = 10.90; Zeff = 17 − 10.90 = 6.10."
        accent={T.p}
      />
      <WorkedExample
        number="4"
        title="Gallium: compare a 3d and a 4p electron"
        question="Use the simplified Slater rules to estimate Zeff for a 3d electron and for the 4p electron in Ga, Z = 31."
        reasoning={[
          "Ga = (1s²)(2s²2p⁶)(3s²3p⁶)(3d¹⁰)(4s²4p¹).",
          "For a 3d test electron: nine other 3d electrons contribute 9 × 0.35, and all 18 electrons to the left contribute 18 × 1.00.",
          "For the 4p test electron: two same-group electrons contribute 2 × 0.35, eighteen n−1 electrons contribute 18 × 0.85, and ten lower-shell electrons contribute 10 × 1.00.",
        ]}
        answer="For 3d: σ = 21.15, Zeff = 9.85. For 4p: σ = 26.00, Zeff = 5.00."
        accent={T.f}
      />
      <WorkedExample
        number="5"
        title="Tin: compare outer and inner electrons"
        question="Estimate Zeff for a 5p electron and a 4d electron in Sn, Z = 50."
        reasoning={[
          "Sn = (1s²)(2s²2p⁶)(3s²3p⁶)(3d¹⁰)(4s²4p⁶)(4d¹⁰)(5s²5p²).",
          "For a 5p electron: 3 × 0.35 + 18 × 0.85 + 28 × 1.00 = 44.35.",
          "For a 4d electron: 9 × 0.35 + 36 × 1.00 = 39.15.",
        ]}
        answer="Zeff(5p) = 5.65; Zeff(4d) = 10.85. Inner electrons experience much larger effective attraction."
        accent={T.d}
      />

      <H2>5 · Periodic Variation of Zeff</H2>
      <DataTable columns={["Movement", "General behaviour", "Consequence"]} rows={[
        ["Across an s/p period", "Zeff rises appreciably", "atomic radius decreases and ionization enthalpy generally rises"],
        ["Across a d series", "Zeff rises more slowly because added d electrons also shield", "radii contract at first, then change only slightly"],
        ["Across an f series", "f electrons shield poorly", "lanthanide or actinide contraction"],
        ["Down a main group", "outer-electron Zeff changes much less than Z itself", "new shells and shielding dominate, so size increases"],
      ]} accent={T.gold} />
      <Callout kind="note" title="Slater values are estimates">
        Zeff is orbital-dependent and cannot be represented by one exact number for an entire atom. Slater's rules are a compact approximation, useful for trends and classroom calculations rather than high-accuracy quantum chemistry.
      </Callout>

      <H2>6 · Limitations of Slater's Rule</H2>
      <DataTable columns={["Limitation", "Why it matters"]} rows={[
        ["Uses fixed empirical coefficients", "real shielding changes continuously with orbital shape and occupancy"],
        ["Treats electrons within a group too uniformly", "s and p orbitals of the same shell have different penetration"],
        ["Poor for f-block details", "cannot reproduce the full pattern of f contraction and heavy-element effects"],
        ["Neglects explicit electron correlation", "multi-electron repulsion is more complex than additive constants"],
        ["Limited relativistic treatment", "heavy atoms require relativistic quantum calculations for accurate orbital energies"],
      ]} accent={T.p} />
    </div>
  );
}

/* =============================================================================
   SECTION 4 — Periodic Properties: Family-wise Orders (s & p block)
   ========================================================================== */
type FamRow = { label: string; order: string; note?: string };
type Fam = { key: string; name: string; elements: string[]; color: string; rows: FamRow[] };

const families: Fam[] = [
  {
    key: "alkali", name: "Group 1 — Alkali Metals", elements: ["Li", "Na", "K", "Rb", "Cs"], color: T.s,
    rows: [
      { label: "Atomic / ionic radius", order: "Li < Na < K < Rb < Cs" },
      { label: "First ionization enthalpy", order: "Li > Na > K > Rb > Cs" },
      { label: "Electronegativity", order: "Li > Na > K > Rb > Cs" },
      { label: "|Hydration enthalpy of M⁺|", order: "Li⁺ > Na⁺ > K⁺ > Rb⁺ > Cs⁺" },
      { label: "Melting point", order: "generally Li > Na > K > Rb > Cs" },
      { label: "Density", order: "generally rises; K is less dense than Na" },
      { label: "Reaction with water", order: "Li < Na < K < Rb < Cs" },
      { label: "Aqueous reducing behaviour", order: "Li is exceptionally strong because Li⁺ is very strongly hydrated", note: "do not rank from gas-phase IE alone" },
    ],
  },
  {
    key: "alkaline-earth", name: "Group 2 — Alkaline-Earth Metals", elements: ["Be", "Mg", "Ca", "Sr", "Ba"], color: T.s,
    rows: [
      { label: "Atomic / ionic radius", order: "Be < Mg < Ca < Sr < Ba" },
      { label: "First ionization enthalpy", order: "Be > Mg > Ca > Sr > Ba (general)" },
      { label: "Electronegativity", order: "Be > Mg > Ca > Sr > Ba" },
      { label: "|Hydration enthalpy of M²⁺|", order: "Be²⁺ > Mg²⁺ > Ca²⁺ > Sr²⁺ > Ba²⁺" },
      { label: "Basicity of oxide / hydroxide", order: "Be < Mg < Ca < Sr < Ba" },
      { label: "Solubility of hydroxides", order: "generally increases down the group" },
      { label: "Solubility of sulfates", order: "generally decreases down the group" },
      { label: "Covalent character of halides", order: "BeX₂ > MgX₂ > CaX₂ > SrX₂ > BaX₂" },
    ],
  },
  {
    key: "boron", name: "Group 13 — Boron Family", elements: ["B", "Al", "Ga", "In", "Tl"], color: T.p,
    rows: [
      { label: "Atomic radius", order: "B < Ga < Al < In < Tl (approx.)", note: "Ga < Al from poor 3d shielding" },
      { label: "First ionization enthalpy", order: "B is highest; Al, Ga, In and Tl are irregular" },
      { label: "Electronegativity", order: "B highest; Ga/In/Tl do not follow a simple monotonic fall" },
      { label: "Stability of +1 state", order: "B < Al < Ga < In < Tl" },
      { label: "Stability of +3 state", order: "decreases toward Tl" },
      { label: "Oxide character", order: "B₂O₃ acidic → Al₂O₃/Ga₂O₃ amphoteric → heavier oxides more basic" },
      { label: "Lewis acidity of trihalides", order: "depends on halogen, back-bonding and structure; avoid one universal order" },
    ],
  },
  {
    key: "carbon", name: "Group 14 — Carbon Family", elements: ["C", "Si", "Ge", "Sn", "Pb"], color: T.p,
    rows: [
      { label: "Atomic radius", order: "C < Si < Ge < Sn ≲ Pb" },
      { label: "First ionization enthalpy", order: "C > Si > Ge > Pb > Sn (approx.)" },
      { label: "Electronegativity", order: "C highest; heavy-member values are close and irregular" },
      { label: "Catenation", order: "C >> Si > Ge ≈ Sn > Pb" },
      { label: "Thermal stability of EH₄", order: "CH₄ > SiH₄ > GeH₄ > SnH₄ > PbH₄" },
      { label: "Stability of +2 state", order: "C < Si < Ge < Sn < Pb" },
      { label: "Metallic character", order: "C < Si < Ge < Sn < Pb" },
    ],
  },
  {
    key: "nitrogen", name: "Group 15 — Pnictogens", elements: ["N", "P", "As", "Sb", "Bi"], color: T.p,
    rows: [
      { label: "Atomic radius", order: "N < P < As < Sb < Bi" },
      { label: "First ionization enthalpy", order: "N > P > As > Sb > Bi (general)" },
      { label: "Electronegativity", order: "N > P > As > Sb ≈ Bi" },
      { label: "Thermal stability of EH₃", order: "NH₃ > PH₃ > AsH₃ > SbH₃ > BiH₃" },
      { label: "Basicity of EH₃", order: "NH₃ > PH₃ > AsH₃ > SbH₃ > BiH₃" },
      { label: "Stability of +3 state", order: "increases down the group" },
      { label: "Stability of +5 state", order: "decreases down the group" },
    ],
  },
  {
    key: "oxygen", name: "Group 16 — Chalcogens", elements: ["O", "S", "Se", "Te", "Po"], color: T.p,
    rows: [
      { label: "Atomic radius", order: "O < S < Se < Te < Po" },
      { label: "First ionization enthalpy", order: "O > S > Se > Te > Po (general)" },
      { label: "Electronegativity", order: "O > S > Se > Te > Po" },
      { label: "First electron gain", order: "S is more exothermic than O; heavier members become less favourable overall" },
      { label: "Thermal stability of H₂E", order: "H₂O > H₂S > H₂Se > H₂Te" },
      { label: "Acid strength of H₂E", order: "H₂O < H₂S < H₂Se < H₂Te" },
      { label: "Reducing character of H₂E", order: "H₂O < H₂S < H₂Se < H₂Te" },
    ],
  },
  {
    key: "halogen", name: "Group 17 — Halogens", elements: ["F", "Cl", "Br", "I"], color: T.p,
    rows: [
      { label: "Atomic radius", order: "F < Cl < Br < I" },
      { label: "First ionization enthalpy", order: "F > Cl > Br > I" },
      { label: "Electronegativity", order: "F > Cl > Br > I" },
      { label: "Magnitude of first electron gain", order: "Cl > F > Br > I" },
      { label: "X–X bond dissociation enthalpy", order: "Cl₂ > Br₂ > F₂ > I₂" },
      { label: "Melting / boiling point", order: "F₂ < Cl₂ < Br₂ < I₂" },
      { label: "Oxidizing power in water", order: "F₂ > Cl₂ > Br₂ > I₂" },
      { label: "Reducing power of halide ion", order: "F⁻ < Cl⁻ < Br⁻ < I⁻" },
      { label: "Acid strength of HX in water", order: "HF < HCl < HBr < HI" },
    ],
  },
  {
    key: "noble", name: "Group 18 — Noble Gases", elements: ["He", "Ne", "Ar", "Kr", "Xe", "Rn"], color: T.f,
    rows: [
      { label: "van der Waals radius", order: "He < Ne < Ar < Kr < Xe < Rn" },
      { label: "First ionization enthalpy", order: "He > Ne > Ar > Kr > Xe > Rn" },
      { label: "Polarizability", order: "He < Ne < Ar < Kr < Xe < Rn" },
      { label: "Melting / boiling point", order: "generally increases down the group" },
      { label: "Ordinary reactivity", order: "very low; Xe forms the widest range of stable compounds" },
      { label: "Electron gain", order: "unfavourable because the next electron enters a new shell" },
    ],
  },
];

export function SectionFamilies() {
  return (
    <div>
      <SectionIntro eyebrow="Exact family orders for rapid revision" title="Family-Wise Property Orders" summary="These compact data cards collect useful group-specific orders after the underlying theory has been developed. Irregular melting points, densities and electron-gain values are treated as data rather than forced into false universal rules." accent={T.cyan} />
      <H2 id="families">Periodic Properties — Family-Wise Orders (s & p Block)</H2>
      <P>High-yield increasing/decreasing orders for s- and p-block families, with irregular properties clearly separated from dependable periodic trends.</P>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16 }}>
        {families.map((f) => (
          <Card key={f.key} accent={f.color}>
            <div style={{ fontFamily: T.serif, fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{f.name}</div>
            <div style={{ display: "flex", flexWrap: "wrap", marginBottom: 4 }}>
              {f.elements.map((e) => <ElementChip key={e} symbol={e} color={f.color} />)}
            </div>
            {f.rows.map((r, i) => (
              <div key={i} style={{ padding: "8px 0", borderBottom: `1px dashed ${T.borderSoft}` }}>
                <div style={{ fontFamily: T.sans, fontSize: 11, fontWeight: 700, color: f.color, textTransform: "uppercase", letterSpacing: 0.4 }}>{r.label}</div>
                <div style={{ fontFamily: T.mono, fontSize: 14, color: T.text }}>{r.order}</div>
                {r.note && <div style={{ fontFamily: T.sans, fontSize: 12, color: T.textDim, fontStyle: "italic" }}>{r.note}</div>}
              </div>
            ))}
          </Card>
        ))}
      </div>
    </div>
  );
}

/* =============================================================================
   SECTION 5 — d-Block (3d Series) Trends & Ion Colours
   ========================================================================== */
const dBlockRows: FamRow[] = [
  { label: "Atomic radius", order: "falls sharply Sc→Cr, changes little through Ni, then rises toward Zn" },
  { label: "Density", order: "generally increases from Sc to Cu; Zn is lower because of its filled d¹⁰ configuration and metallic structure" },
  { label: "First ionization enthalpy", order: "changes irregularly but rises modestly overall; Zn is conspicuously high" },
  { label: "M²⁺/M standard potential", order: "Cu has a positive value; most earlier 3d metals have negative values" },
  { label: "M³⁺/M²⁺ oxidizing tendency", order: "Co³⁺ and Mn³⁺ are strong oxidants; Fe³⁺ is milder and widely stable in water" },
  { label: "Enthalpy of atomization", order: "large near the middle of the series; Zn is unusually low because d electrons do not contribute effectively to metallic bonding" },
  { label: "Hydration of M²⁺", order: "becomes more exothermic as ionic radius contracts, but electronic and structural effects make the exact order irregular" },
  { label: "Common oxidation states", order: "+2 across most of the series; maximum state rises to Mn then falls toward Zn" },
];
const ionColours = [
  { ion: "Sc³⁺", colour: "Colourless", swatch: "transparent" },
  { ion: "Ti³⁺", colour: "Violet", swatch: "#8a4fbf" },
  { ion: "Ti⁴⁺", colour: "Colourless", swatch: "transparent" },
  { ion: "V²⁺", colour: "Violet", swatch: "#7a5fd0" },
  { ion: "V³⁺", colour: "Green", swatch: "#3f8f5a" },
  { ion: "VO²⁺ (V IV)", colour: "Blue", swatch: "#3e6fbf" },
  { ion: "Cr²⁺", colour: "Blue", swatch: "#3e6fbf" },
  { ion: "Cr³⁺", colour: "Violet / green", swatch: "#7861a8" },
  { ion: "Mn²⁺", colour: "Very pale pink", swatch: "#e6a9c4" },
  { ion: "MnO₄²⁻", colour: "Green", swatch: "#3f8f5a" },
  { ion: "MnO₄⁻", colour: "Purple", swatch: "#8a4fbf" },
  { ion: "Fe²⁺", colour: "Pale green", swatch: "#a9d1a0" },
  { ion: "Fe³⁺", colour: "Yellow / brown", swatch: "#c99b36" },
  { ion: "Co²⁺ (aquo)", colour: "Pink", swatch: "#dc8bac" },
  { ion: "Ni²⁺", colour: "Green", swatch: "#3f8f5a" },
  { ion: "Cu²⁺", colour: "Blue", swatch: "#3e6fbf" },
  { ion: "Zn²⁺", colour: "Colourless", swatch: "transparent" },
];

export function SectionDBlockTrends() {
  return (
    <div>
      <SectionIntro eyebrow="Irregular trends in near-degenerate orbitals" title="3d-Series Energetics, Radius and Ion Colours" summary="Transition-metal trends are less regular than s- and p-block trends because 3d and 4s energies are close, multiple oxidation states are accessible and crystal-field effects influence colour and stability." accent={T.d} />
      <H2 id="dblock-trends">3d-Series — Energetics & Ion Colours</H2>
      <Card accent={T.d}>
        <div style={{ display: "flex", flexWrap: "wrap", marginBottom: 8 }}>
          {["Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn"].map((e) => <ElementChip key={e} symbol={e} color={T.d} />)}
        </div>
        {dBlockRows.map((r, i) => (
          <div key={i} style={{ padding: "9px 0", borderBottom: `1px dashed ${T.borderSoft}` }}>
            <div style={{ fontFamily: T.sans, fontSize: 11, fontWeight: 700, color: T.d, textTransform: "uppercase", letterSpacing: 0.4 }}>{r.label}</div>
            <div style={{ fontFamily: T.mono, fontSize: 14, color: T.text }} dangerouslySetInnerHTML={{ __html: r.order }} />
          </div>
        ))}
      </Card>
      <H3>Common Colours of 3d-Series Species</H3>
      <Callout kind="note" title="Colour depends on chemical environment">
        The entries below describe common aqueous or familiar oxo species. Ligand identity, geometry, concentration and oxidation state can change the observed colour; for example aqueous Co²⁺ is pink, while chloride-rich tetrahedral complexes are blue.
      </Callout>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 10 }}>
        {ionColours.map((c) => (
          <div key={c.ion} style={{ display: "flex", alignItems: "center", gap: 10, border: `1px solid ${T.border}`, borderRadius: 10, padding: "8px 10px", background: T.surface }}>
            <span style={{ width: 18, height: 18, borderRadius: "50%", border: `1.5px solid ${T.textDim}`, background: c.swatch, flexShrink: 0 }} />
            <div>
              <div style={{ fontFamily: T.mono, fontSize: 13.5, fontWeight: 700, color: T.text }}>{c.ion}</div>
              <div style={{ fontFamily: T.sans, fontSize: 11.5, color: T.textDim }}>{c.colour}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =============================================================================
   SECTION — Electronic Configuration, Blocks and Position Decoding
   ========================================================================== */
const configurationRules = [
  { title: "Period", body: "The largest principal quantum number n present in the ground-state configuration gives the period. Ions are located from the parent atom, not from the ion configuration.", accent: T.cyan, tag: "HIGHEST n" },
  { title: "Block", body: "The subshell receiving the differentiating electron identifies the s, p, d or f block. Helium is structurally s-block but chemically placed with noble gases.", accent: T.f, tag: "LAST SUBSHELL" },
  { title: "s-block group", body: "ns¹ gives group 1 and ns² gives group 2. Hydrogen is exceptional because its chemistry is not that of an alkali metal.", accent: T.s, tag: "GROUP 1–2" },
  { title: "p-block group", body: "For ns²npˣ, group number = 12 + x, equivalently 10 + total valence electrons. Thus np¹→13 and np⁶→18.", accent: T.p, tag: "GROUP 13–18" },
  { title: "d-block group", body: "For most transition elements, add electrons in (n−1)d and ns. The sum 3–12 gives the IUPAC group number, with configuration anomalies handled from the actual configuration.", accent: T.d, tag: "GROUP 3–12" },
  { title: "f-block", body: "The differentiating electron enters (n−2)f. Lanthanoids belong to period 6 and actinoids to period 7; they are displayed separately only to keep the table compact.", accent: T.f, tag: "INNER TRANSITION" },
];

const positionExamples = [
  ["K: [Ar]4s¹", "Period 4", "s-block", "Group 1"],
  ["N: 1s²2s²2p³", "Period 2", "p-block", "Group 15"],
  ["Cr: [Ar]3d⁵4s¹", "Period 4", "d-block", "Group 6"],
  ["Zn: [Ar]3d¹⁰4s²", "Period 4", "d-block", "Group 12"],
  ["Br: [Ar]3d¹⁰4s²4p⁵", "Period 4", "p-block", "Group 17"],
  ["Tm: [Xe]4f¹³6s²", "Period 6", "f-block", "Lanthanoid"],
];

const commonConfigExceptions = [
  ["Cr", "[Ar] 3d⁵ 4s¹", "half-filled d⁵ stabilization"],
  ["Cu", "[Ar] 3d¹⁰ 4s¹", "filled d¹⁰ stabilization"],
  ["Nb", "[Kr] 4d⁴ 5s¹", "near-degenerate 4d and 5s levels"],
  ["Mo", "[Kr] 4d⁵ 5s¹", "half-filled d⁵ stabilization"],
  ["Ru", "[Kr] 4d⁷ 5s¹", "actual orbital-energy balance"],
  ["Rh", "[Kr] 4d⁸ 5s¹", "actual orbital-energy balance"],
  ["Pd", "[Kr] 4d¹⁰ 5s⁰", "filled d¹⁰ shell"],
  ["Pt", "[Xe] 4f¹⁴ 5d⁹ 6s¹", "relativistic and orbital-energy effects"],
  ["Au", "[Xe] 4f¹⁴ 5d¹⁰ 6s¹", "filled d¹⁰ and relativistic effects"],
];

export function SectionConfiguration() {
  return (
    <div>
      <SectionIntro
        eyebrow="Structure of the long form"
        title="Electronic Configuration as the Address of an Element"
        summary="Every position in the modern periodic table is encoded in the ground-state electronic configuration. Decode the highest shell, the differentiating subshell and the valence-electron count, and the period, block and group follow systematically."
        accent={T.cyan}
      />
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(300px,0.8fr)", gap: 18, alignItems: "start" }} className="twoCol">
        <div>
          <H2 id="configuration">1 · The Four-Step Position Rule</H2>
          <ConceptGrid items={configurationRules} />
        </div>
        <PositionDecoderSVG />
      </div>

      <H3>Worked position decoding</H3>
      <DataTable columns={["Configuration", "Period", "Block", "Position"]} rows={positionExamples} accent={T.cyan} />
      <Callout kind="exception" title="Do not locate an ion from the ion configuration">
        Na⁺ has the configuration of Ne, but sodium remains a period-3, group-1 element. Periodic position belongs to the neutral atom because atomic number, not temporary electron count, defines the element.
      </Callout>

      <H2>2 · Why Periods Have Lengths 2, 8, 8, 18, 18, 32, 32</H2>
      <P>
        A period begins when a new principal shell starts filling and ends when the valence shell reaches a noble-gas arrangement. The length equals twice the number of orbitals that become energetically available during that period.
      </P>
      <DataTable
        columns={["Period", "Subshell sequence", "Orbitals opened", "Maximum electrons", "Observed length"]}
        rows={[
          ["1", "1s", "1", "2", "2"],
          ["2", "2s → 2p", "1 + 3", "8", "8"],
          ["3", "3s → 3p", "1 + 3", "8", "8"],
          ["4", "4s → 3d → 4p", "1 + 5 + 3", "18", "18"],
          ["5", "5s → 4d → 5p", "1 + 5 + 3", "18", "18"],
          ["6", "6s → 4f → 5d → 6p", "1 + 7 + 5 + 3", "32", "32"],
          ["7", "7s → 5f → 6d → 7p", "1 + 7 + 5 + 3", "32", "32"],
        ]}
        accent={T.f}
      />
      <P>
        The sequence follows orbital energies, not simple shell order. That is why 4s fills before 3d in neutral atoms, although 4s electrons are generally removed first when transition-metal cations form.
      </P>

      <H2>3 · Representative, Transition and Inner-Transition Elements</H2>
      <ConceptGrid
        items={[
          { title: "Representative elements", tag: "s + p BLOCK", accent: T.s, body: "Their differentiating electron enters the outermost shell. Group chemistry is strongly controlled by a regular valence-shell pattern." },
          { title: "Transition elements", tag: "d BLOCK", accent: T.d, body: "Atoms or common ions have an incompletely filled d subshell. Variable oxidation states, coloured ions, complex formation and catalysis often follow." },
          { title: "Inner-transition elements", tag: "f BLOCK", accent: T.f, body: "The differentiating electron enters an inner f subshell. Lanthanoids are dominated by +3 chemistry; early actinoids show wider oxidation-state variation." },
          { title: "Noble gases", tag: "GROUP 18", accent: T.gold, body: "Closed-shell atoms with very high ionization enthalpy and generally positive electron gain enthalpy. He is 1s²; the rest end in ns²np⁶." },
        ]}
      />

      <H2>4 · Configuration Exceptions: Use Actual Configurations, Not Memorised Aufbau Alone</H2>
      <P>
        The Aufbau order is a powerful first approximation. In transition and inner-transition atoms, nearby subshells differ only slightly in energy, so exchange energy, pairing, relativistic effects and the final multi-electron balance can produce exceptions.
      </P>
      <DataTable columns={["Element", "Observed ground state", "Main reason"]} rows={commonConfigExceptions} accent={T.gold} />
      <Callout kind="note" title="Exam-safe rule">
        For position and oxidation-state questions, always use the accepted ground-state configuration given in standard data. Avoid inventing a universal “half-filled/full-filled” explanation for every exception; several heavier elements require a more complete orbital-energy explanation.
      </Callout>

      <H2>5 · Special Positions of Hydrogen and Helium</H2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 14 }}>
        <Card accent={T.s}>
          <H3>Hydrogen</H3>
          <P>Configuration 1s¹ resembles group 1, and H can form H⁺. Yet it is a non-metal, exists as H₂, forms H⁻ with electropositive metals and needs one electron for a noble-gas configuration—features reminiscent of group 17.</P>
          <Callout kind="exception">Hydrogen is placed above group 1 for configuration convenience, but it is chemically unique and should not be treated as a normal alkali metal.</Callout>
        </Card>
        <Card accent={T.f}>
          <H3>Helium</H3>
          <P>Configuration 1s² formally belongs to the s block, but its closed shell, monatomic state, very high ionization enthalpy and near-zero ordinary reactivity match the noble gases.</P>
          <Callout kind="note">Chemical behaviour takes priority over the last-subshell label, so He is placed in group 18.</Callout>
        </Card>
      </div>

      <WorkedExample
        number="A"
        title="Locate an element from configuration"
        question="An element has the ground-state configuration [Kr] 4d¹⁰ 5s² 5p³. Find its period, block and group."
        reasoning={[
          "The largest principal quantum number is 5, so the element belongs to period 5.",
          "The differentiating electron is in 5p, so it is a p-block element.",
          "Valence electrons = 5s² + 5p³ = 5; p-block group = 10 + 5 = 15.",
        ]}
        answer="Period 5, p block, group 15; the element is Sb."
        accent={T.cyan}
      />
      <WorkedExample
        number="B"
        title="Find the d-block group"
        question="For [Ar] 3d⁷ 4s², determine the period and group."
        reasoning={[
          "Highest n = 4, hence period 4.",
          "The differentiating subshell is 3d, hence d block.",
          "Group number = 7 d electrons + 2 s electrons = 9.",
        ]}
        answer="Period 4, group 9; the element is cobalt."
        accent={T.d}
      />
    </div>
  );
}

/* =============================================================================
   SECTION — Master Trend Map
   ========================================================================== */
const trendDrivers = [
  { title: "Effective nuclear charge", tag: "Zeff", accent: T.gold, body: "Across a period, nuclear charge rises while added electrons enter the same main shell. Shielding does not fully cancel the extra proton, so the electron cloud contracts." },
  { title: "Number of occupied shells", tag: "n", accent: T.cyan, body: "Down a group, each step introduces a new shell. The larger distance from the nucleus usually dominates over the increase in nuclear charge." },
  { title: "Shielding and penetration", tag: "s > p > d > f", accent: T.f, body: "Penetrating orbitals experience greater nuclear attraction and also shield outer electrons more effectively. Poor d and f shielding generates important anomalies." },
  { title: "Subshell stability", tag: "PAIRING / EXCHANGE", accent: T.d, body: "Filled and half-filled subshells, electron pairing and interelectronic repulsion explain local departures such as Be>B and N>O in ionization enthalpy." },
  { title: "Charge density", tag: "|z| / r", accent: T.p, body: "Small, highly charged ions polarize neighbours strongly, hydrate strongly and often show greater covalent character than a simple ionic model predicts." },
  { title: "Relativistic effects", tag: "HEAVY ATOMS", accent: T.s, body: "In very heavy elements, contraction of s and p orbitals and associated expansion of d and f orbitals influence size, bonding and oxidation-state stability." },
];

export function SectionTrendMap() {
  return (
    <div>
      <SectionIntro
        eyebrow="The logic behind every order"
        title="Master Trend Map: Five Competing Effects, Not Blind Arrows"
        summary="Periodic trends are not separate facts. They are consequences of the competition among effective nuclear charge, shell number, shielding, penetration, electron pairing and charge density. Learn the drivers first; the orders become predictable."
        accent={T.gold}
      />
      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,0.95fr) minmax(340px,1.05fr)", gap: 18, alignItems: "start" }} className="twoCol">
        <div>
          <H2 id="trend-map">1 · The Six Drivers</H2>
          <ConceptGrid items={trendDrivers} columns={2} />
        </div>
        <TrendCompassSVG />
      </div>

      <H2>2 · Normal Direction of Major Properties</H2>
      <DataTable
        columns={["Property", "Across a period →", "Down a group ↓", "Dominant explanation"]}
        rows={[
          ["Atomic / covalent radius", "decreases", "increases", "Zeff across; new shell down"],
          ["Ionic radius for comparable ions", "generally decreases", "increases", "same-shell contraction; shell addition"],
          ["First ionization enthalpy", "generally increases", "generally decreases", "size and Zeff"],
          ["Electron gain enthalpy", "generally becomes more negative", "usually less negative", "attraction versus crowding"],
          ["Electronegativity", "increases", "decreases", "ability of a bonded atom to attract electron density"],
          ["Metallic character", "decreases", "increases", "ease of electron loss"],
          ["Non-metallic character", "increases", "decreases", "electron attraction and gain"],
          ["Basic character of oxides", "decreases", "increases for a group of metals", "ionic character and M–O bond cleavage"],
          ["Acidic character of oxides", "increases", "often decreases within a p-block group", "covalency and oxidation state"],
        ]}
        accent={T.gold}
      />

      <H2>3 · A Reliable Ranking Algorithm</H2>
      <ConceptGrid
        items={[
          { title: "Step 1: classify the comparison", tag: "ATOM / ION / BONDED ATOM", accent: T.cyan, body: "Do not mix atomic radius with ionic radius, electron affinity with electronegativity, or gas-phase reducing power with aqueous reducing power." },
          { title: "Step 2: compare shell number", tag: "PRIMARY SIZE TEST", accent: T.s, body: "A species with an extra occupied shell is usually larger unless a strong contraction effect or very different charge overrides it." },
          { title: "Step 3: compare nuclear charge", tag: "SAME ELECTRON COUNT", accent: T.gold, body: "Within an isoelectronic series, more protons always mean a smaller radius and stronger electron binding." },
          { title: "Step 4: inspect configuration", tag: "LOCAL EXCEPTION TEST", accent: T.d, body: "Check whether removal or addition creates or destroys ns², np³, d⁵ or d¹⁰ stability and whether electron pairing changes." },
          { title: "Step 5: identify the medium", tag: "GAS VS AQUEOUS", accent: T.p, body: "Hydration enthalpy can reverse gas-phase trends. Lithium is the classic example in aqueous redox chemistry." },
          { title: "Step 6: use data only when needed", tag: "FINAL TIE-BREAK", accent: T.f, body: "For irregular d-block orders and exact melting/boiling points, qualitative trends may be insufficient; rely on accepted data rather than forcing a false rule." },
        ]}
      />

      <H2>4 · Normal Trend versus Exception</H2>
      <DataTable
        columns={["Normal expectation", "Important exception", "Reason"]}
        rows={[
          ["IE rises across a period", "Be > B; Mg > Al", "electron removed from higher-energy p orbital in B/Al"],
          ["IE rises across a period", "N > O; P > S", "pairing repulsion in p⁴ makes removal easier"],
          ["Electron gain becomes more favourable across", "Cl more negative than F", "very compact 2p shell of F has stronger electron–electron repulsion"],
          ["Radius decreases steadily across", "Ga is not much larger than Al", "poor shielding by 3d electrons contracts Ga"],
          ["Radius increases down a group", "Zr ≈ Hf", "lanthanide contraction offsets the added shell"],
          ["Heavier p-block element favours high oxidation state", "Tl(I), Pb(II), Bi(III) become more stable", "inert-pair effect stabilizes the lower oxidation state"],
        ]}
        accent={T.p}
      />

      <Callout kind="note" title="Isoelectronic shortcut">
        When electron count is identical, the species with more protons is smaller. The full derivation, graphic and examples appear once in the Atomic & Ionic Radius module.
      </Callout>

    </div>
  );
}


/* =============================================================================
   SECTION — Ionization Enthalpy
   ========================================================================== */
const ieFactors = [
  ["Atomic size", "Larger distance weakens attraction; ionization enthalpy generally falls."],
  ["Effective nuclear charge", "Higher Zeff binds the electron more strongly; ionization enthalpy rises."],
  ["Shielding", "Greater shielding lowers the nuclear pull on the valence electron."],
  ["Penetration", "For the same shell, s electrons are held more strongly than p, then d, then f."],
  ["Electronic configuration", "Filled and half-filled subshells can be unusually stable."],
  ["Charge on species", "Removing an electron from a cation requires more energy; from an anion requires less than from the neutral atom."],
];

export function SectionIonization() {
  return (
    <div>
      <SectionIntro
        eyebrow="Removing electrons from isolated gaseous species"
        title="Ionization Enthalpy: Definition, Successive Values, Trends and Exceptions"
        summary="Ionization enthalpy measures how strongly an isolated gaseous atom or ion holds an electron. It is always endothermic, but the magnitude depends on size, effective nuclear charge, penetration, shielding and the configuration left behind."
        accent={T.gold}
      />
      <H2 id="ionization">1 · Definition and Successive Ionizations</H2>
      <Formula>M(g) → M⁺(g) + e⁻ &nbsp;&nbsp; ΔᵢH₁ &gt; 0</Formula>
      <Formula>M⁺(g) → M²⁺(g) + e⁻ &nbsp;&nbsp; ΔᵢH₂ &gt; ΔᵢH₁</Formula>
      <P>
        The first ionization enthalpy is the enthalpy required to remove the most loosely held electron from one mole of isolated gaseous atoms. Successive values increase because the same nucleus attracts progressively fewer electrons and the species becomes more positively charged.
      </P>
      <Callout kind="note" title="Units and terminology">
        Standard thermochemical notation uses kJ mol⁻¹ and calls the quantity ionization enthalpy. Older problems may quote ionization energy or ionization potential in eV per atom; 1 eV per particle corresponds to about 96.5 kJ mol⁻¹.
      </Callout>
      <DataTable columns={["Factor", "Effect on ionization enthalpy"]} rows={ieFactors} accent={T.gold} />

      <H2>2 · Across a Period</H2>
      <P>
        The first ionization enthalpy normally rises from left to right because atomic size decreases and effective nuclear charge increases. The rise is not smooth: a new p subshell and the onset of pairing create characteristic dips.
      </P>
      <IonizationLandscapeSVG />
      <DataTable
        columns={["Pair", "Observed order", "Configuration argument"]}
        rows={[
          ["Be and B", "Be > B", "Be loses a 2s electron only after breaking stable 2s²; B loses the higher-energy 2p¹ electron."],
          ["Mg and Al", "Mg > Al", "Al loses a 3p¹ electron more easily than Mg loses a 3s electron."],
          ["N and O", "N > O", "N has half-filled 2p³; O has one paired 2p electron with extra repulsion."],
          ["P and S", "P > S", "The same p³ versus p⁴ pairing argument operates in period 3."],
        ]}
        accent={T.p}
      />

      <H2>3 · Down a Group and Heavy-Element Anomalies</H2>
      <P>
        Ionization enthalpy usually decreases down a group because size and shielding increase. The decrease can flatten or reverse when poor d/f shielding and relativistic contraction increase the effective attraction in heavier atoms.
      </P>
      <DataTable
        columns={["Family", "Useful order / observation", "Why it is not perfectly smooth"]}
        rows={[
          ["Group 1", "Li > Na > K > Rb > Cs", "new shells dominate; values become progressively closer"],
          ["Group 2", "Be > Mg > Ca ≳ Sr > Ba", "general fall with minor irregularity from orbital and shielding effects"],
          ["Group 13", "B is highest; Al, Ga, In and Tl show an irregular sequence", "d-block and lanthanide contraction make Ga and Tl unexpectedly compact"],
          ["Group 14", "C > Si > Ge ≳ Pb > Sn (approx.)", "heavy-element contraction and relativistic effects disturb a simple fall"],
          ["Noble gases", "He > Ne > Ar > Kr > Xe > Rn", "closed shells remain difficult to ionize"],
        ]}
        accent={T.cyan}
      />

      <H2>4 · Successive Ionization Enthalpy and Valence</H2>
      <P>
        A very large jump occurs after all valence electrons have been removed. The next electron would come from an inner closed shell, so its removal is dramatically more difficult. This jump is a direct clue to the number of valence electrons and the likely simple cation charge.
      </P>
      <DataTable
        columns={["Pattern", "Inference", "Illustration"]}
        rows={[
          ["IE₂ ≫ IE₁", "one valence electron", "Na: Na⁺ is strongly favoured; Na²⁺ is not"],
          ["IE₃ ≫ IE₂", "two valence electrons", "Mg: Mg²⁺ is favoured"],
          ["IE₄ ≫ IE₃", "three valence electrons", "Al: Al³⁺ is a common simple oxidation state"],
          ["No early giant jump", "transition-metal d electrons are also accessible", "variable oxidation states become possible"],
        ]}
        accent={T.d}
      />

      <H2>5 · Applications and Limits</H2>
      <ConceptGrid
        items={[
          { title: "Metallic character", tag: "LOW IE", accent: T.s, body: "Elements that lose electrons easily are more electropositive and more metallic, although lattice and hydration energies also affect real reactions." },
          { title: "Reducing tendency", tag: "ELECTRON LOSS", accent: T.d, body: "Low gas-phase ionization enthalpy generally favours reducing behaviour. In solution, hydration and atomization can reverse the simple order." },
          { title: "Stable oxidation states", tag: "LARGE JUMP", accent: T.gold, body: "A large successive-ionization jump discourages removal beyond a particular charge and helps identify stable ionic oxidation states." },
          { title: "Bonding character", tag: "IONIC VS COVALENT", accent: T.p, body: "A high sum of ionization enthalpies makes formation of a highly charged cation expensive and can promote covalent bonding instead." },
        ]}
      />
      <Callout kind="exception" title="Lithium in water is not ranked by IE alone">
        Lithium has the highest first ionization enthalpy among alkali metals, yet Li is a very strong reducing agent in aqueous solution because the exceptionally large hydration enthalpy of Li⁺ strongly stabilizes the products.
      </Callout>

      <WorkedExample
        number="D"
        title="Explain a local anomaly"
        question="Why is the first ionization enthalpy of oxygen lower than that of nitrogen?"
        reasoning={[
          "Nitrogen is 1s²2s²2p³, with one electron in each 2p orbital and no pairing.",
          "Oxygen is 1s²2s²2p⁴, so one 2p orbital contains a pair.",
          "Repulsion within the paired orbital makes one oxygen electron easier to remove, while removal from nitrogen destroys a half-filled p³ arrangement.",
        ]}
        answer="IE₁(N) > IE₁(O)."
        accent={T.p}
      />
      <WorkedExample
        number="E"
        title="Use successive ionization data"
        question="An element has successive ionization enthalpies 738, 1451, 7733 and 10540 kJ mol⁻¹. What simple ion is most likely?"
        reasoning={[
          "The first two values are moderate, but the third is dramatically larger.",
          "After two electrons are removed, the next electron belongs to an inner shell.",
          "The atom therefore has two valence electrons.",
        ]}
        answer="A stable M²⁺ ion is expected; the pattern is characteristic of a group-2 element such as Mg."
        accent={T.gold}
      />
      <WorkedExample
        number="F"
        title="Compare second ionization enthalpy"
        question="Which has the larger second ionization enthalpy, Na or Mg?"
        reasoning={[
          "After first ionization, Na⁺ has the closed-shell configuration [Ne].",
          "The second electron from Na⁺ must be removed from the noble-gas core.",
          "After first ionization, Mg⁺ is [Ne]3s¹, so its second electron is still a valence electron.",
        ]}
        answer="IE₂(Na) is much larger than IE₂(Mg)."
        accent={T.cyan}
      />
    </div>
  );
}

/* =============================================================================
   SECTION — Electron Gain Enthalpy
   ========================================================================== */
export function SectionElectronGain() {
  return (
    <div>
      <SectionIntro
        eyebrow="Adding an electron to an isolated gaseous atom"
        title="Electron Gain Enthalpy: Attraction, Crowding and Configuration"
        summary="Electron gain enthalpy records the enthalpy change when an isolated gaseous atom accepts an electron. A negative value means energy is released; a positive value means the incoming electron is energetically unfavourable."
        accent={T.d}
      />
      <H2 id="electron-gain">1 · Definition and Sign Convention</H2>
      <Formula>X(g) + e⁻ → X⁻(g) &nbsp;&nbsp; ΔₑgH₁</Formula>
      <P>
        The first electron gain enthalpy is often negative because nucleus–electron attraction releases energy. The older term electron affinity is frequently reported as the positive magnitude of the released energy, so always inspect the sign convention used in a question.
      </P>
      <Callout kind="warn" title="Do not confuse the terms">
        “More negative electron gain enthalpy” means a more exothermic electron-addition process. If a source quotes electron affinity as a positive released-energy magnitude, the numerical order is reversed in sign but not in physical favourability.
      </Callout>

      <H2>2 · Factors Governing Electron Addition</H2>
      <ConceptGrid
        items={[
          { title: "Nuclear attraction", tag: "Zeff", accent: T.gold, body: "A higher effective nuclear charge pulls the incoming electron more strongly and usually makes addition more exothermic." },
          { title: "Atomic size", tag: "DISTANCE", accent: T.cyan, body: "In a larger atom the incoming electron remains farther from the nucleus, so energy release generally decreases." },
          { title: "Electron–electron repulsion", tag: "CROWDING", accent: T.p, body: "Very compact orbitals can oppose electron addition even when nuclear attraction is strong; F versus Cl is the classic case." },
          { title: "Resulting configuration", tag: "STABILITY", accent: T.d, body: "Addition that completes a subshell can be favourable; addition that begins a new subshell or disrupts half-filled stability can be unfavourable." },
        ]}
      />

      <H2>3 · Periodic Trend and Major Exceptions</H2>
      <P>
        Across a period, the value generally becomes more negative as size decreases and effective nuclear charge rises. Down a group it usually becomes less negative because the incoming electron enters a larger, more shielded shell. The trend is much less regular than ionization enthalpy.
      </P>
      <ElectronGainSVG />
      <DataTable
        columns={["Species / family", "Characteristic behaviour", "Reason"]}
        rows={[
          ["Halogens", "very negative; Cl is more negative than F", "one electron completes np⁶; F suffers intense crowding in compact 2p"],
          ["Chalcogens", "S is more negative than O", "compact 2p shell of O gives greater incoming-electron repulsion"],
          ["Group 15", "N is unusually unfavourable", "incoming electron must pair in a half-filled 2p³ set"],
          ["Group 2", "Be and Mg are near zero or positive", "electron must enter a higher-energy p subshell after stable ns²"],
          ["Noble gases", "positive", "electron would have to occupy the next principal shell"],
          ["Alkali metals", "moderately negative", "addition converts ns¹ to stable ns², but low Zeff and large size limit release"],
        ]}
        accent={T.d}
      />
      <Formula>Common magnitude order for halogens: Cl &gt; F &gt; Br &gt; I</Formula>
      <Formula>Common magnitude order for O/S family start: S &gt; O</Formula>

      <H2>4 · Successive Electron Gain Enthalpies</H2>
      <P>
        Adding an electron to a neutral atom may release energy. Adding a second electron to an already negative ion always requires work because the incoming electron is repelled by the anion.
      </P>
      <Formula>O(g) + e⁻ → O⁻(g) &nbsp;&nbsp; ΔₑgH₁ may be negative</Formula>
      <Formula>O⁻(g) + e⁻ → O²⁻(g) &nbsp;&nbsp; ΔₑgH₂ is positive</Formula>
      <P>
        Stable oxide ions nevertheless exist in crystals because lattice enthalpy and, in solution, hydration enthalpy can more than compensate for the unfavourable second electron-addition step.
      </P>

      <H2>5 · Relation to Oxidizing Power</H2>
      <P>
        A favourable electron gain contributes to oxidizing ability, but it is only one step in a complete thermochemical or electrochemical cycle. Bond dissociation, atomization, hydration, lattice enthalpy and entropy can change the final order. This is why fluorine is the strongest aqueous oxidizing halogen even though chlorine has the more negative atomic electron gain enthalpy.
      </P>

      <WorkedExample
        number="G"
        title="Why chlorine beats fluorine in electron gain enthalpy"
        question="Fluorine is smaller and more electronegative than chlorine. Why is electron addition to Cl more exothermic than to F?"
        reasoning={[
          "The incoming electron enters a 2p orbital in F but a more spacious 3p orbital in Cl.",
          "In F, the compact 2p shell already contains seven valence electrons and produces strong electron–electron repulsion.",
          "Chlorine retains strong nuclear attraction while offering enough volume to reduce crowding.",
        ]}
        answer="The magnitude of electron gain enthalpy follows Cl > F despite the higher electronegativity of F."
        accent={T.d}
      />
      <WorkedExample
        number="H"
        title="Predict the sign of the second electron gain enthalpy"
        question="What is the sign of ΔₑgH₂ for formation of S²⁻ from S⁻ in the gas phase?"
        reasoning={[
          "The incoming electron approaches a negatively charged ion.",
          "Electrostatic repulsion must be overcome before the electron can be added.",
          "The process therefore absorbs energy even though S²⁻ may be stabilized in an ionic solid.",
        ]}
        answer="ΔₑgH₂ is positive."
        accent={T.p}
      />
      <WorkedExample
        number="I"
        title="Separate electron gain from electronegativity"
        question="Which statement is meaningful: electron gain enthalpy of Cl(g), or electronegativity of isolated Cl(g)?"
        reasoning={[
          "Electron gain enthalpy is defined for an isolated gaseous atom accepting an electron.",
          "Electronegativity describes attraction for shared electron density by an atom already participating in a bond.",
        ]}
        answer="Electron gain enthalpy of Cl(g) is meaningful; electronegativity is not a property of an isolated free atom."
        accent={T.cyan}
      />
    </div>
  );
}

/* =============================================================================
   SECTION — Electronegativity
   ========================================================================== */
export function SectionElectronegativity() {
  return (
    <div>
      <SectionIntro
        eyebrow="Attraction for shared electron density"
        title="Electronegativity: Scales, Trends, Hybridization and Applications"
        summary="Electronegativity is a relative property of a bonded atom, not a directly measured energy of a free atom. It depends on effective nuclear charge, size, oxidation state, hybridization and the chemical environment."
        accent={T.cyan}
      />
      <H2 id="electronegativity">1 · Meaning and Periodic Variation</H2>
      <P>
        In a covalent bond A–B, the more electronegative atom draws the bonding electron pair closer to itself and acquires partial negative charge. Electronegativity generally rises across a period and falls down a group. Fluorine is the highest on the Pauling scale.
      </P>
      <ElectronegativitySpectrumSVG />
      <Callout kind="note" title="Relative, not absolute">
        Electronegativity has no universal unit and no single exact value independent of bonding. Different scales use different physical models but give broadly similar trends.
      </Callout>

      <H2>2 · Important Scales</H2>
      <DataTable
        columns={["Scale", "Core idea", "Useful expression / note"]}
        rows={[
          ["Pauling", "extra stabilization of a heteronuclear bond", "derived from bond energies; F assigned 4.0"],
          ["Mulliken", "average tendency to lose and gain an electron", "χᴹ ≈ (IE + EA)/2 when both are in eV"],
          ["Allred–Rochow", "electrostatic attraction at covalent radius", "χ depends approximately on Zeff / r²"],
        ]}
        accent={T.cyan}
      />
      <Callout kind="warn" title="Use formulas with their stated units">
        Different textbooks use slightly different constants and calibrations for conversion between scales. In numerical problems, use the exact expression and units supplied in the question.
      </Callout>

      <H2>3 · Factors Affecting Electronegativity</H2>
      <ConceptGrid
        items={[
          { title: "Effective nuclear charge", tag: "Zeff ↑ ⇒ χ ↑", accent: T.gold, body: "A stronger net nuclear pull attracts shared electron density more strongly." },
          { title: "Covalent radius", tag: "r ↓ ⇒ χ ↑", accent: T.cyan, body: "A compact valence shell places bonding electrons nearer the nucleus." },
          { title: "Oxidation state", tag: "MORE POSITIVE ⇒ χ ↑", accent: T.p, body: "For the same element, a higher positive oxidation state generally increases electron-attracting power." },
          { title: "Hybridization", tag: "s CHARACTER ↑ ⇒ χ ↑", accent: T.d, body: "An orbital with more s character keeps electron density closer to the nucleus: sp > sp² > sp³." },
          { title: "Charge", tag: "CATION > ATOM > ANION", accent: T.f, body: "Positive charge contracts the electron cloud and raises attraction for bonding density; negative charge does the opposite." },
          { title: "Substituent environment", tag: "INDUCTIVE EFFECT", accent: T.s, body: "Electron-withdrawing groups can raise the effective electronegativity of an atom within a molecule." },
        ]}
      />
      <Formula>For carbon hybrid orbitals: χ(sp) &gt; χ(sp²) &gt; χ(sp³)</Formula>

      <H2>4 · Applications</H2>
      <DataTable
        columns={["Application", "How electronegativity helps", "Caution"]}
        rows={[
          ["Bond polarity", "larger Δχ gives larger bond dipole tendency", "molecular shape decides the net dipole moment"],
          ["Ionic character", "large Δχ increases ionic contribution", "bonding is a continuum; no universal sharp boundary"],
          ["Acid–base character of oxides", "greater non-metallic character and high oxidation state favour acidic oxides", "structure and solvent also matter"],
          ["Oxidation number assignment", "bonding electrons are formally assigned to the more electronegative atom", "oxidation number is bookkeeping, not actual charge"],
          ["Bond direction", "δ⁺ and δ⁻ are assigned from relative χ", "do not confuse polarity with bond strength"],
          ["Organic acidity", "greater s character stabilizes negative charge", "resonance, induction and solvation may dominate"],
        ]}
        accent={T.gold}
      />

      <H2>5 · Representative Orders</H2>
      <DataTable
        columns={["Set", "Order", "Reason"]}
        rows={[
          ["Period 2", "Li < Be < B < C < N < O < F", "Zeff rises and size falls"],
          ["Halogens", "F > Cl > Br > I", "size and shielding increase down the group"],
          ["Carbon hybridization", "sp > sp² > sp³", "s character places bonding density nearer the nucleus"],
          ["Same central atom", "higher oxidation state generally has higher χ", "greater positive charge contracts and polarizes the valence shell"],
          ["Common Pauling values", "F > O > Cl ≳ N > Br > I ≈ S > C ≈ H", "use exact values only when provided"],
        ]}
        accent={T.cyan}
      />

      <WorkedExample
        number="J"
        title="Rank carbon atoms by hybridization"
        question="Arrange the electronegativity of carbon in HC≡CH, H₂C=CH₂ and H₃C–CH₃."
        reasoning={[
          "The carbon hybridizations are sp, sp² and sp³ respectively.",
          "s character is 50%, about 33% and 25%.",
          "More s character keeps the hybrid orbital closer to the nucleus and increases electronegativity.",
        ]}
        answer="C(sp) > C(sp²) > C(sp³)."
        accent={T.d}
      />
      <WorkedExample
        number="K"
        title="Polarity versus molecular dipole"
        question="CO₂ contains polar C=O bonds. Why is the molecule non-polar?"
        reasoning={[
          "Oxygen is more electronegative than carbon, so each C=O bond has a dipole.",
          "CO₂ is linear and the two equal bond dipoles point in opposite directions.",
          "Vector cancellation gives zero net molecular dipole moment.",
        ]}
        answer="Polar bonds do not guarantee a polar molecule; geometry controls the vector sum."
        accent={T.cyan}
      />
      <WorkedExample
        number="L"
        title="Predict bond polarity"
        question="Which bond is expected to be more polar: H–F or H–Cl?"
        reasoning={[
          "Fluorine is more electronegative than chlorine.",
          "The electronegativity difference from hydrogen is therefore larger for H–F.",
        ]}
        answer="H–F has the larger bond polarity, though bond strength and acidity in water require additional factors."
        accent={T.gold}
      />
    </div>
  );
}


/* =============================================================================
   SECTION — Chemical Periodicity
   ========================================================================== */
export function SectionChemicalPeriodicity() {
  return (
    <div>
      <SectionIntro
        eyebrow="From atomic trends to chemical behaviour"
        title="Chemical Periodicity: Valency, Oxidation States, Oxides, Hydrides and Ionic Energetics"
        summary="Atomic trends become chemically useful only when they are connected to bond formation, oxidation state, oxide character, hydride stability, lattice enthalpy, hydration and polarizing power."
        accent={T.p}
      />

      <H2 id="chemical-periodicity">1 · Valency Across a Representative Period</H2>
      <P>
        The number of valence electrons rises from one to eight across a main-group period. With respect to hydrogen, the classical covalency usually rises from 1 to 4 and then falls from 3 to 0 because atoms tend to complete an octet by sharing the smaller of the numbers v and 8−v.
      </P>
      <DataTable
        columns={["Group", "Valence configuration", "Typical simple valency", "Representative hydride"]}
        rows={[
          ["1", "ns¹", "1", "LiH / NaH"],
          ["2", "ns²", "2", "BeH₂ / MgH₂"],
          ["13", "ns²np¹", "3", "BH₃ units / B₂H₆"],
          ["14", "ns²np²", "4", "CH₄ / SiH₄"],
          ["15", "ns²np³", "3", "NH₃ / PH₃"],
          ["16", "ns²np⁴", "2", "H₂O / H₂S"],
          ["17", "ns²np⁵", "1", "HF / HCl"],
          ["18", "closed shell", "0 in ordinary compounds", "—"],
        ]}
        accent={T.p}
      />

      <H2>2 · Oxidation States in the p Block</H2>
      <P>
        The maximum positive oxidation state of a main-group element often equals its group number minus 10. Negative oxidation states are common when an element is more electronegative than its bonding partner. Down groups 13–16, lower oxidation states become increasingly stable because the ns² pair is less available for bonding.
      </P>
      <DataTable
        columns={["Group", "Maximum positive state", "Important lower state", "Down-group tendency"]}
        rows={[
          ["13", "+3", "+1", "+1 becomes increasingly stable; Tl(I) is especially important"],
          ["14", "+4", "+2", "+2 becomes more stable from Sn to Pb"],
          ["15", "+5", "+3", "+3 becomes more stable from Sb to Bi"],
          ["16", "+6", "+4", "higher states become less stable in the heavier members"],
          ["17", "+7 except F", "+1, +3, +5", "F shows only −1 in ordinary compounds because it lacks accessible d orbitals and is most electronegative"],
        ]}
        accent={T.gold}
      />
      <Callout kind="exception" title="Maximum oxidation state is not the same as maximum covalency">
        Oxidation state is formal electron bookkeeping, whereas covalency counts shared electron pairs or bonds. Modern bonding descriptions do not require literal use of vacant d orbitals to explain hypervalent main-group molecules.
      </Callout>

      <H2>3 · Metallic and Non-metallic Character</H2>
      <ConceptGrid
        items={[
          { title: "Across a period", tag: "METAL → METALLOID → NON-METAL", accent: T.gold, body: "Ionization enthalpy and electronegativity rise, so electron loss becomes harder and electron sharing/gain becomes more important." },
          { title: "Down a group", tag: "METALLIC CHARACTER ↑", accent: T.s, body: "Larger size and lower ionization enthalpy favour electron loss. In group 14, for example, C is non-metallic, Si/Ge are metalloids and Sn/Pb are metals." },
          { title: "Transition region", tag: "METALLOIDS", accent: T.d, body: "B, Si, Ge, As, Sb and Te lie near the zig-zag boundary and show mixed conductivity and oxide behaviour." },
          { title: "Electropositive extremes", tag: "LOW IE", accent: T.cyan, body: "Alkali metals are strongly electropositive, while halogens are strongly electron-attracting. Noble gases are closed-shell rather than simply 'most non-metallic'." },
        ]}
      />

      <H2>4 · Oxides Across a Period</H2>
      <P>
        As metallic character decreases and oxidation state rises across a period, oxide bonding changes from predominantly ionic to increasingly covalent. Ionic oxides readily furnish O²⁻ or OH⁻ in water and are basic; covalent oxides often form oxyacids and are acidic. Intermediate oxides may be amphoteric.
      </P>
      <OxideTrendSVG />
      <DataTable
        columns={["Oxide", "Character", "Illustrative reaction"]}
        rows={[
          ["Na₂O", "strongly basic", "Na₂O + H₂O → 2NaOH"],
          ["MgO", "basic", "MgO + 2HCl → MgCl₂ + H₂O"],
          ["Al₂O₃", "amphoteric", "reacts with both acids and strong bases"],
          ["SiO₂", "acidic network oxide", "SiO₂ + 2NaOH → Na₂SiO₃ + H₂O"],
          ["P₄O₁₀", "acidic", "P₄O₁₀ + 6H₂O → 4H₃PO₄"],
          ["SO₃", "strongly acidic", "SO₃ + H₂O → H₂SO₄"],
          ["Cl₂O₇", "strongly acidic", "Cl₂O₇ + H₂O → 2HClO₄"],
        ]}
        accent={T.p}
      />
      <Formula>For one element, higher oxidation state usually gives a more acidic oxide: CrO &lt; Cr₂O₃ &lt; CrO₃</Formula>
      <Callout kind="note" title="Common amphoteric oxides">
        BeO, Al₂O₃, ZnO, SnO, SnO₂, PbO and PbO₂ are frequent examples. Amphoterism depends on the reaction medium and should be demonstrated by actual acid/base reactions.
      </Callout>

      <H2>5 · Hydrides: Bonding, Stability and Acid–Base Trends</H2>
      <DataTable
        columns={["Family", "General hydride", "Key down-group trend"]}
        rows={[
          ["Group 14", "EH₄", "thermal stability falls: CH₄ > SiH₄ > GeH₄ > SnH₄; reducing character rises"],
          ["Group 15", "EH₃", "basicity generally falls: NH₃ > PH₃ > AsH₃ > SbH₃; thermal stability falls"],
          ["Group 16", "H₂E", "acid strength rises: H₂O < H₂S < H₂Se < H₂Te; bond strength falls"],
          ["Group 17", "HX", "acid strength in water rises: HF < HCl < HBr < HI; H–X bond strength falls"],
        ]}
        accent={T.d}
      />
      <P>
        HF is a weak acid in water relative to HCl, HBr and HI despite fluorine's high electronegativity because the H–F bond is exceptionally strong and extensive hydrogen bonding affects the solution chemistry.
      </P>

      <H2>6 · Lattice Enthalpy, Hydration Enthalpy and Solubility</H2>
      <P>
        The stability of an ionic solid depends strongly on electrostatic attraction between gaseous ions. A simple model predicts that lattice enthalpy magnitude increases with ionic charge and decreases with interionic distance. Hydration enthalpy is released when gaseous ions become surrounded by water molecules and similarly grows with charge density.
      </P>
      <Formula>|U| ∝ |z⁺z⁻| / (r⁺ + r⁻)</Formula>
      <Formula>|ΔHₕyd| generally increases with |charge| / ionic radius</Formula>
      <DataTable
        columns={["Comparison", "Expected magnitude order", "Reason"]}
        rows={[
          ["Al³⁺, Mg²⁺, Na⁺", "Al³⁺ > Mg²⁺ > Na⁺ hydration", "charge density rises strongly"],
          ["Li⁺, Na⁺, K⁺, Rb⁺, Cs⁺", "Li⁺ > Na⁺ > K⁺ > Rb⁺ > Cs⁺ hydration", "ionic size increases down the group"],
          ["NaF, NaCl, NaBr, NaI", "NaF > NaCl > NaBr > NaI lattice magnitude", "anion size increases"],
          ["MgO and NaF", "MgO much larger", "product of ionic charges is 4 versus 1"],
        ]}
        accent={T.cyan}
      />
      <Callout kind="exception" title="Solubility is a competition">
        A large lattice enthalpy opposes dissolution, while large hydration enthalpy favours it. Entropy and crystal structure also matter, so solubility cannot be predicted from a single radius trend alone.
      </Callout>

      <H2>7 · Polarization and Fajans-Type Reasoning</H2>
      <ConceptGrid
        items={[
          { title: "Polarizing power of cation", tag: "SMALL + HIGH CHARGE", accent: T.gold, body: "A compact highly charged cation strongly distorts the electron cloud of a neighbouring anion and increases covalent character." },
          { title: "Polarizability of anion", tag: "LARGE + HIGH CHARGE", accent: T.p, body: "A diffuse anion is more easily distorted. I⁻ is more polarizable than F⁻; S²⁻ is more polarizable than O²⁻." },
          { title: "Pseudo-noble-gas cations", tag: "d¹⁰ CORE", accent: T.f, body: "Cations such as Cu⁺ and Ag⁺ can polarize more strongly than similarly sized noble-gas-core ions because d electrons shield imperfectly." },
          { title: "Consequence", tag: "COVALENCY ↑", accent: T.d, body: "Greater polarization often lowers melting point, decreases water solubility and favours molecular or polymeric structures, but each comparison needs context." },
        ]}
      />

      <WorkedExample
        number="M"
        title="Rank oxide acidity"
        question="Arrange Na₂O, Al₂O₃ and SO₃ in increasing acidic character."
        reasoning={[
          "Na is highly metallic, so Na₂O is strongly ionic and basic.",
          "Al₂O₃ lies near the metal–non-metal boundary and is amphoteric.",
          "S is a non-metal in a high oxidation state; SO₃ is covalent and strongly acidic.",
        ]}
        answer="Na₂O < Al₂O₃ < SO₃ in acidic character."
        accent={T.p}
      />
      <WorkedExample
        number="N"
        title="Compare hydration enthalpy"
        question="Which has the larger magnitude of hydration enthalpy: Mg²⁺ or Ca²⁺?"
        reasoning={[
          "Both ions have the same charge.",
          "Mg²⁺ is smaller because it has one fewer occupied shell.",
          "Its higher charge density gives stronger ion–dipole attraction to water.",
        ]}
        answer="|ΔHhydr(Mg²⁺)| > |ΔHhydr(Ca²⁺)|."
        accent={T.cyan}
      />
      <WorkedExample
        number="O"
        title="Use polarization to compare covalency"
        question="Which is expected to have greater covalent character, LiF or LiI?"
        reasoning={[
          "The cation is the same in both salts.",
          "I⁻ is much larger and more polarizable than F⁻.",
          "Li⁺ distorts the diffuse electron cloud of I⁻ more strongly.",
        ]}
        answer="LiI has greater covalent character than LiF."
        accent={T.gold}
      />
    </div>
  );
}

/* =============================================================================
   SECTION — Special Relationships and Advanced Effects
   ========================================================================== */
export function SectionSpecialEffects() {
  return (
    <div>
      <SectionIntro
        eyebrow="Why simple vertical trends sometimes fail"
        title="Special Relationships: Second-Period Anomalies, Diagonal Similarity and Contraction Effects"
        summary="The first member of a group often behaves differently from the rest. Small size, high charge density, strong multiple bonding, poor d/f shielding and heavy-atom relativistic effects create the most important advanced exceptions."
        accent={T.f}
      />

      <H2 id="special-effects">1 · Why Second-Period Elements Are Anomalous</H2>
      <ConceptGrid
        items={[
          { title: "Very small size", tag: "HIGH CHARGE DENSITY", accent: T.cyan, body: "Li, Be, B, C, N, O and F polarize or attract electron density more strongly than their heavier congeners." },
          { title: "High ionization enthalpy and electronegativity", tag: "STRONG BONDS", accent: T.gold, body: "The first-row non-metals form particularly strong bonds to H and often show extensive hydrogen bonding." },
          { title: "No low-energy d subshell in the valence shell", tag: "OCTET RESTRICTION", accent: T.p, body: "B, C, N, O and F cannot expand their valence shell in the simple octet-model sense used for heavier congeners." },
          { title: "Efficient pπ–pπ overlap", tag: "MULTIPLE BONDING", accent: T.d, body: "Compact 2p orbitals form strong C=C, C≡C, N≡N, C=O and N=O multiple bonds; heavier p orbitals overlap less effectively." },
          { title: "Strong catenation for carbon", tag: "C–C STRENGTH", accent: T.s, body: "Carbon combines small size, strong C–C bonds and versatile hybridization, producing uniquely extensive chain and ring chemistry." },
          { title: "Hydrogen bonding", tag: "N, O, F", accent: T.f, body: "Small highly electronegative atoms create strong intermolecular hydrogen bonds, raising boiling points and changing solubility." },
        ]}
      />

      <H2>2 · Diagonal Relationship</H2>
      <P>
        Moving right across a period decreases size and increases electronegativity, while moving down a group increases size and decreases electronegativity. A diagonal move partly balances these changes, giving selected similarities between Li–Mg, Be–Al and B–Si.
      </P>
      <DiagonalBridgeSVG />
      <DataTable
        columns={["Pair", "Important similarities", "Important differences"]}
        rows={[
          ["Li and Mg", "form nitrides; carbonates decompose on heating; fluorides are sparingly soluble; chlorides show appreciable covalency", "Li remains monovalent and much more strongly hydrated"],
          ["Be and Al", "amphoteric oxides/hydroxides; covalent halides; complex formation; protective oxide films", "Be is smaller, divalent and far more toxic; Al is trivalent and metallic"],
          ["B and Si", "hard semiconducting solids; acidic oxides; covalent halides hydrolyse; many polymeric oxygen compounds", "B is electron-deficient and forms boranes; Si readily forms extended silicate networks"],
        ]}
        accent={T.f}
      />
      <Formula>Ionic potential / charge density indicator: φ ≈ |charge| / radius</Formula>
      <Callout kind="note" title="Selective resemblance">
        A diagonal relationship predicts clusters of similarities, not complete identity. Always compare the specific property asked.
      </Callout>

      <H2>3 · Lanthanide Contraction</H2>
      <P>
        From La to Lu, protons are added to the nucleus while electrons enter 4f orbitals. Because 4f electrons shield one another poorly, effective nuclear charge rises steadily and atomic/ionic radii decrease gradually across the series.
      </P>
      <ContractionSVG />
      <DataTable
        columns={["Consequence", "Explanation / example"]}
        rows={[
          ["Very similar lanthanoid chemistry", "Ln³⁺ radii change gradually, making separation difficult"],
          ["4d–5d pairs have similar radii", "Zr≈Hf, Nb≈Ta and Mo≈W because 5d atoms are contracted after the lanthanoids"],
          ["Basicity of Ln(OH)₃ decreases", "smaller Ln³⁺ has greater polarizing power and stronger Ln–O interaction"],
          ["Density and hardness generally rise", "mass increases while size contracts"],
          ["Complex-forming tendency generally rises", "charge density of Ln³⁺ increases from La³⁺ to Lu³⁺"],
        ]}
        accent={T.f}
      />

      <H2>4 · Actinide Contraction and 5f Participation</H2>
      <P>
        Actinoid radii also decrease across the series because 5f electrons shield poorly. The contraction is less smooth because 5f, 6d and 7s levels are close in energy and relativistic effects are stronger. Early actinoids show broader oxidation-state chemistry because 5f electrons can participate in bonding more readily than deeply buried 4f electrons.
      </P>
      <DataTable
        columns={["Feature", "Lanthanoids", "Actinoids"]}
        rows={[
          ["Differentiating subshell", "4f", "5f"],
          ["Typical oxidation state", "+3 dominates", "+3 common, but +4 to +7 important for early members"],
          ["Bonding involvement", "4f largely core-like", "5f more spatially extended, especially early in series"],
          ["Contraction", "fairly regular", "less regular and often stronger"],
          ["Radioactivity", "mostly non-radioactive except Pm", "all radioactive"],
        ]}
        accent={T.p}
      />

      <H2>5 · Inert-Pair Effect</H2>
      <P>
        In heavy p-block elements, the outer ns² pair becomes less available for bonding. Poor shielding by intervening d and f electrons, relativistic stabilization of the s orbital and bond-energy considerations collectively make the oxidation state two units below the group maximum increasingly stable.
      </P>
      <DataTable
        columns={["Group", "Higher state", "Lower state stabilized down group", "Typical illustration"]}
        rows={[
          ["13", "+3", "+1", "Tl(I) more stable than Tl(III)"],
          ["14", "+4", "+2", "Pb(II) more stable than Pb(IV); Pb(IV) compounds are often oxidizing"],
          ["15", "+5", "+3", "Bi(III) more stable than Bi(V)"],
          ["16", "+6", "+4", "Po(IV) favoured relative to Po(VI)"],
        ]}
        accent={T.gold}
      />
      <Callout kind="warn" title="Do not reduce the inert-pair effect to one slogan">
        “The s pair is inert” is a useful result, not a complete microscopic explanation. Relative bond strengths, lattice or solvation energies and relativistic orbital stabilization decide whether a particular compound is stable.
      </Callout>

      <H2>6 · Relativistic Effects in Heavy Elements</H2>
      <P>
        Electrons close to a very heavy nucleus move at a significant fraction of the speed of light. Relativistic mass increase contracts and stabilizes s and p₁/₂ orbitals; indirect shielding changes can expand d and f orbitals. These effects help explain the colour of gold, the liquidity of mercury and unusual oxidation-state patterns in the 5d and 6p elements.
      </P>
      <ConceptGrid
        items={[
          { title: "6s contraction", tag: "Au, Hg, Pb", accent: T.gold, body: "Strong stabilization of 6s contributes to the inert-pair effect and changes bonding energies." },
          { title: "5d expansion", tag: "HEAVIER d BLOCK", accent: T.d, body: "More radially available 5d orbitals support strong metal–ligand bonding and high oxidation states in elements such as W, Re, Os and Pt." },
          { title: "Gold colour", tag: "VISIBLE ABSORPTION", accent: T.p, body: "Relativistic changes reduce the 5d–6s energy gap so gold absorbs blue light and reflects yellow-red light." },
          { title: "Mercury liquidity", tag: "WEAK Hg–Hg BONDING", accent: T.cyan, body: "Relativistic 6s stabilization weakens metallic bonding enough to contribute to mercury's low melting point." },
        ]}
      />

      <WorkedExample
        number="P"
        title="Explain Zr–Hf similarity"
        question="Why are zirconium and hafnium much closer in size than a simple down-group trend predicts?"
        reasoning={[
          "Hf follows the fourteen lanthanoids in period 6.",
          "Poor shielding by 4f electrons raises effective nuclear charge across the lanthanoid series.",
          "The resulting lanthanide contraction almost cancels the size increase expected on moving from Zr to Hf.",
        ]}
        answer="Zr and Hf have nearly equal radii and therefore very similar chemistry."
        accent={T.f}
      />
      <WorkedExample
        number="Q"
        title="Choose the more stable heavy p-block state"
        question="Which is generally more stable in ordinary chemistry: Pb²⁺ or Pb⁴⁺?"
        reasoning={[
          "Lead is a heavy group-14 element.",
          "The 6s² pair is relatively reluctant to participate in bonding.",
          "Using only the two 6p electrons gives the lower +2 oxidation state.",
        ]}
        answer="Pb²⁺ is generally more stable; Pb(IV) compounds often act as oxidizing agents and are reduced to Pb(II)."
        accent={T.gold}
      />
      <WorkedExample
        number="R"
        title="Identify a second-period anomaly"
        question="Why does nitrogen form strong N≡N multiple bonding whereas heavier group-15 elements favour single-bonded structures?"
        reasoning={[
          "Compact 2p orbitals on nitrogen overlap efficiently side-on.",
          "Strong pπ–pπ overlap produces a very strong triple bond.",
          "Larger 3p, 4p and 5p orbitals overlap less effectively, so P, As and Sb favour single bonds and extended structures.",
        ]}
        answer="The exceptional efficiency of 2p–2p π overlap makes N≡N uniquely strong."
        accent={T.d}
      />
    </div>
  );
}


/* =============================================================================
   SECTION — Original Worked Example Workshop
   ========================================================================== */
const workshopExamples = [
  {
    number: "S", title: "Atom, cation and anion size", accent: T.cyan,
    question: "Arrange Cl⁺, Cl and Cl⁻ in increasing radius.",
    reasoning: [
      "All have the same nucleus, so proton number is fixed.",
      "Removing an electron reduces repulsion and increases attraction per remaining electron.",
      "Adding an electron increases repulsion and lowers attraction per electron.",
    ],
    answer: "Cl⁺ < Cl < Cl⁻.",
  },
  {
    number: "T", title: "Covalent, metallic and van der Waals radius", accent: T.s,
    question: "For the same element, which is normally largest: covalent radius, metallic radius or van der Waals radius?",
    reasoning: [
      "Covalent radius is measured between bonded atoms with substantial electron-density overlap.",
      "Metallic radius refers to neighbouring atoms in a metallic lattice and is usually larger than covalent radius.",
      "van der Waals radius describes closest non-bonded contact and therefore has the least overlap.",
    ],
    answer: "van der Waals radius > metallic radius > covalent radius, when all three are meaningful for the element.",
  },
  {
    number: "U", title: "Bond order and bond length", accent: T.d,
    question: "Arrange C–C, C=C and C≡C in decreasing bond length.",
    reasoning: [
      "Higher bond order places more electron density between nuclei.",
      "The nuclei are held more strongly and approach more closely.",
    ],
    answer: "C–C > C=C > C≡C in bond length.",
  },
  {
    number: "V", title: "Isoelectronic cations", accent: T.gold,
    question: "Arrange K⁺, Ca²⁺ and Sc³⁺ in decreasing ionic radius.",
    reasoning: [
      "Each species has 18 electrons.",
      "Their proton numbers are 19, 20 and 21.",
      "More protons contract the same electron cloud more strongly.",
    ],
    answer: "K⁺ > Ca²⁺ > Sc³⁺.",
  },
  {
    number: "W", title: "First ionization enthalpy in period 3", accent: T.p,
    question: "Arrange Mg, Al, P and S in increasing first ionization enthalpy.",
    reasoning: [
      "Across period 3, the broad trend is increasing ionization enthalpy.",
      "Al is lower than Mg because the electron removed from Al is 3p¹ rather than 3s.",
      "S is lower than P because S has a paired 3p electron whereas P is half-filled 3p³.",
    ],
    answer: "Al < Mg < S < P.",
  },
  {
    number: "X", title: "Electron gain enthalpy exception", accent: T.d,
    question: "Choose the most exothermic first electron-addition process among O, F, S and Cl.",
    reasoning: [
      "Halogens are generally more favourable than chalcogens because addition completes np⁶.",
      "Cl is more favourable than F because its 3p shell is less crowded than F's compact 2p shell.",
      "S is more favourable than O for the same crowding reason but remains below Cl.",
    ],
    answer: "Cl has the most negative electron gain enthalpy of the four.",
  },
  {
    number: "Y", title: "Electronegativity and oxidation state", accent: T.cyan,
    question: "For the same central element, which is expected to attract bonding electron density more strongly: Fe²⁺ or Fe³⁺?",
    reasoning: [
      "A higher positive oxidation state corresponds to a more electron-deficient centre.",
      "Its effective attraction for ligand electron density is generally greater.",
    ],
    answer: "Fe³⁺ has the greater effective electronegativity / Lewis acidity.",
  },
  {
    number: "Z", title: "Hydride acidity", accent: T.p,
    question: "Arrange H₂O, H₂S, H₂Se and H₂Te in increasing acid strength.",
    reasoning: [
      "Down group 16, the H–E bond becomes longer and weaker.",
      "The larger conjugate-base anion also disperses negative charge more effectively.",
      "Bond-strength weakening dominates the fall in electronegativity down the group.",
    ],
    answer: "H₂O < H₂S < H₂Se < H₂Te.",
  },
  {
    number: "AA", title: "Oxide character and oxidation state", accent: T.gold,
    question: "For chromium oxides CrO, Cr₂O₃ and CrO₃, predict the increase in acidic character.",
    reasoning: [
      "The chromium oxidation states are +2, +3 and +6.",
      "Higher oxidation state increases polarization of O and makes the oxide more covalent.",
      "Low-state CrO is basic, Cr₂O₃ is amphoteric and CrO₃ is acidic.",
    ],
    answer: "CrO < Cr₂O₃ < CrO₃ in acidic character.",
  },
  {
    number: "AB", title: "Aqueous reducing power of alkali metals", accent: T.s,
    question: "Why can Li be a stronger reducing agent in water than a simple ionization-enthalpy comparison suggests?",
    reasoning: [
      "Oxidation in water includes atomization, ionization and hydration of the cation.",
      "Li has a high ionization enthalpy, which opposes oxidation.",
      "However, Li⁺ has exceptionally large hydration enthalpy because of its very small radius.",
      "The hydration gain can dominate the overall free-energy change.",
    ],
    answer: "The strong hydration of Li⁺ makes formation of aqueous Li⁺ highly favourable, so gas-phase IE alone gives the wrong intuition.",
  },
  {
    number: "AC", title: "Slater-rule setup", accent: T.f,
    question: "For a 3p electron in chlorine, which electrons contribute 0.35, 0.85 and 1.00 to the shielding constant in the standard Slater grouping?",
    reasoning: [
      "Write Cl as (1s²)(2s²2p⁶)(3s²3p⁵).",
      "Other electrons in the same (3s,3p) group contribute 0.35 each.",
      "Electrons in the n−1 shell, here 2s²2p⁶, contribute 0.85 each.",
      "Electrons in still lower shells, here 1s², contribute 1.00 each.",
    ],
    answer: "Six same-group electrons at 0.35, eight n−1 electrons at 0.85 and two lower-shell electrons at 1.00.",
  },
  {
    number: "AD", title: "Diagonal relationship", accent: T.f,
    question: "Why are BeO and Al₂O₃ both amphoteric although Be and Al are in different groups?",
    reasoning: [
      "Be²⁺ and Al³⁺ have relatively high charge density and strong polarizing power.",
      "A diagonal move from Be to Al partly balances size and charge trends.",
      "Their oxides lie between strongly ionic basic oxides and strongly covalent acidic oxides.",
    ],
    answer: "Comparable charge density and polarization give Be–Al diagonal similarity, including amphoteric oxides and hydroxides.",
  },
];

export function SectionWorkshop() {
  return (
    <div>
      <SectionIntro
        eyebrow="Original application set"
        title="Worked Example Workshop: From Rules to Multi-Factor Reasoning"
        summary="These examples are newly written and arranged by concept. Each solution identifies the controlling variable instead of relying on memorised arrows, so the same method transfers to unfamiliar questions."
        accent={T.d}
      />
      <H2 id="workshop">Mixed Worked Examples</H2>
      <P>
        Before ranking any set, label the species, count shells and electrons, compare nuclear charge, inspect the configuration and note the physical medium. Exact numerical d-block orders should be treated as data rather than forced into an oversimplified trend.
      </P>
      {workshopExamples.map((ex) => (
        <WorkedExample key={ex.number} {...ex} />
      ))}

      <H2>High-Yield Comparison Matrix</H2>
      <DataTable
        columns={["Question asks for", "First comparison", "Second comparison", "Common trap"]}
        rows={[
          ["Atomic / ionic radius", "shell count", "Z for isoelectronic species", "mixing atom and ion radii"],
          ["Ionization enthalpy", "size and Zeff", "subshell / pairing stability", "assuming a perfectly smooth period"],
          ["Electron gain enthalpy", "resulting configuration", "crowding and size", "equating it directly with electronegativity"],
          ["Electronegativity", "bonded-atom environment", "Zeff, radius, hybridization", "assigning a value to an isolated atom"],
          ["Reducing power in water", "complete redox cycle", "hydration and atomization", "using gas-phase IE alone"],
          ["Solubility of ionic solid", "lattice enthalpy", "hydration + entropy", "using only ionic size"],
          ["Covalent character", "cation polarizing power", "anion polarizability", "assuming all metal–nonmetal bonds are purely ionic"],
          ["Oxide acidity", "metallic character", "oxidation state", "ignoring amphoteric behaviour"],
        ]}
        accent={T.d}
      />

      <H2>Final One-Page Logic Chain</H2>
      <ConceptGrid
        items={[
          { title: "Across a period", tag: "Zeff ↑", accent: T.gold, body: "radius ↓ → IE generally ↑ → EN ↑ → metallic character ↓ → oxide acidity ↑" },
          { title: "Down a group", tag: "SHELLS ↑", accent: T.cyan, body: "radius ↑ → IE generally ↓ → EN ↓ → metallic character ↑; heavy-element contractions may interrupt" },
          { title: "Isoelectronic series", tag: "ELECTRONS FIXED", accent: T.p, body: "higher Z → smaller radius → stronger electron binding" },
          { title: "Successive ionization", tag: "GIANT JUMP", accent: T.s, body: "jump after n electrons → n valence electrons removed before core exposure" },
          { title: "Electron addition", tag: "ATTRACTION − REPULSION", accent: T.d, body: "favourability depends on Zeff, size, crowding and resulting configuration" },
          { title: "Ionic energetics", tag: "CHARGE DENSITY", accent: T.f, body: "small/high-charge ions give large lattice and hydration magnitudes and stronger polarization" },
        ]}
      />
    </div>
  );
}


/* =============================================================================
   MAIN APP — Navigation shell
   ========================================================================== */
type NavKey =
  | "history"
  | "configuration"
  | "map"
  | "radius"
  | "ionization"
  | "electronGain"
  | "electronegativity"
  | "zeff"
  | "chemistry"
  | "special"
  | "families"
  | "dblock"
  | "workshop";

const NAV: { key: NavKey; label: string; group: string }[] = [
  { key: "history", label: "History & Modern Law", group: "Foundations" },
  { key: "configuration", label: "Configuration & Position", group: "Foundations" },
  { key: "map", label: "Master Trend Map", group: "Foundations" },
  { key: "radius", label: "Atomic & Ionic Radius", group: "Core Periodic Trends" },
  { key: "ionization", label: "Ionization Enthalpy", group: "Core Periodic Trends" },
  { key: "electronGain", label: "Electron Gain Enthalpy", group: "Core Periodic Trends" },
  { key: "electronegativity", label: "Electronegativity", group: "Core Periodic Trends" },
  { key: "zeff", label: "Zeff & Slater's Rule", group: "Core Periodic Trends" },
  { key: "chemistry", label: "Chemical Periodicity", group: "Advanced Connections" },
  { key: "special", label: "Special Relationships", group: "Advanced Connections" },
  { key: "families", label: "Family-Wise Orders", group: "Reference Data" },
  { key: "dblock", label: "3d-Series & Ion Colours", group: "Reference Data" },
  { key: "workshop", label: "Worked Example Workshop", group: "Practice" },
];

export default function PeriodicTableMasterNotes() {
  const [active, setActive] = useState<NavKey>("configuration");

  const groups = useMemo(() => {
    const g: Record<string, typeof NAV> = {};
    NAV.forEach((n) => {
      g[n.group] = g[n.group] || [];
      g[n.group].push(n);
    });
    return g;
  }, []);

  const renderSection = () => {
    switch (active) {
      case "history": return <SectionHistory />;
      case "configuration": return <SectionConfiguration />;
      case "map": return <SectionTrendMap />;
      case "radius": return <SectionAtomicRadius />;
      case "ionization": return <SectionIonization />;
      case "electronGain": return <SectionElectronGain />;
      case "electronegativity": return <SectionElectronegativity />;
      case "zeff": return <SectionZeffSlater />;
      case "chemistry": return <SectionChemicalPeriodicity />;
      case "special": return <SectionSpecialEffects />;
      case "families": return <SectionFamilies />;
      case "dblock": return <SectionDBlockTrends />;
      case "workshop": return <SectionWorkshop />;
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: `radial-gradient(1400px 700px at 8% -10%, #12283b 0%, ${T.bg} 55%), ${T.bg}`, color: T.text, fontFamily: T.sans }}>
      <style>{`
        .mobileTabs { display: none; }
        @media (max-width: 900px) {
          .notesSidebar { display: none !important; }
          .notesShell { display: block !important; }
          .notesMain { padding: 22px 15px 70px !important; }
          .mobileTabs { display: flex; overflow-x: auto; gap: 8px; padding: 10px 14px; position: sticky; top: 57px; z-index: 15; background: rgba(10,22,34,0.96); border-bottom: 1px solid #24405c; backdrop-filter: blur(12px); }
          .mobileTabs button { flex: 0 0 auto; }
          .chapterHero { margin: 14px 14px 6px !important; padding: 22px 18px !important; }
          .heroGrid, .twoCol { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          .chapterHero h1 { font-size: 34px !important; }
        }
      `}</style>
      {/* Top bar (mobile) */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px", borderBottom: `1px solid ${T.border}`, position: "sticky", top: 0, background: T.bg, zIndex: 20 }}>
        <div style={{ fontFamily: T.serif, fontWeight: 700, color: T.gold, fontSize: 17 }}>
          Periodic<span style={{ color: T.text }}>Properties</span>
        </div>
      </div>

      <ChapterHero />
      <div className="mobileTabs" aria-label="Periodic table notes sections">
        {NAV.map((n) => (
          <button
            key={n.key}
            onClick={() => setActive(n.key)}
            style={{
              border: `1px solid ${active === n.key ? T.gold : T.border}`,
              background: active === n.key ? "rgba(232,184,75,0.12)" : T.surface,
              color: active === n.key ? T.gold : T.textDim,
              borderRadius: 999,
              padding: "7px 10px",
              fontFamily: T.sans,
              fontSize: 11.5,
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            {n.label}
          </button>
        ))}
      </div>

      <div className="notesShell" style={{ display: "flex", maxWidth: 1280, margin: "0 auto" }}>
        {/* Sidebar */}
        <aside
          className="notesSidebar"
          style={{
            width: 250,
            flexShrink: 0,
            borderRight: `1px solid ${T.border}`,
            padding: "24px 14px",
            position: "sticky",
            top: 57,
            height: "calc(100vh - 57px)",
            overflowY: "auto",
          }}
        >
          <div style={{ fontFamily: T.serif, fontSize: 13, color: T.textDim, marginBottom: 18, lineHeight: 1.5 }}>
            JEE Inorganic Chemistry<br />
            <span style={{ color: T.cyan }}>Synergic Bond</span>
          </div>
          {Object.entries(groups).map(([group, items]) => (
            <div key={group} style={{ marginBottom: 20 }}>
              <div style={{ fontFamily: T.sans, fontSize: 10.5, fontWeight: 700, letterSpacing: 0.6, textTransform: "uppercase", color: T.textFaint, marginBottom: 8, paddingLeft: 10 }}>
                {group}
              </div>
              {items.map((n) => (
                <button
                  key={n.key}
                  onClick={() => setActive(n.key)}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    padding: "9px 10px",
                    borderRadius: 8,
                    border: "none",
                    background: active === n.key ? "rgba(232,184,75,0.12)" : "transparent",
                    color: active === n.key ? T.gold : T.textDim,
                    fontFamily: T.sans,
                    fontSize: 13.5,
                    fontWeight: active === n.key ? 700 : 500,
                    cursor: "pointer",
                    marginBottom: 2,
                    borderLeft: active === n.key ? `2px solid ${T.gold}` : "2px solid transparent",
                  }}
                >
                  {n.label}
                </button>
              ))}
            </div>
          ))}
        </aside>

        {/* Content */}
        <main className="notesMain" style={{ flex: 1, minWidth: 0, padding: "32px 28px 80px" }}>{renderSection()}</main>
      </div>

      <footer style={{ borderTop: `1px solid ${T.border}`, padding: "20px 18px", textAlign: "center", fontFamily: T.sans, fontSize: 11.5, color: T.textFaint }}>Synergic Bond · Original periodic-table learning notes · Theory, diagrams, examples and revision data in one chapter.</footer>
    </div>
  );
}
