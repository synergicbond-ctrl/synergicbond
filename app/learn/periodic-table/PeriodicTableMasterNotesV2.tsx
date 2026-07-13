"use client";
import { InteractivePeriodicTableV16 } from "./InteractivePeriodicTableV16";

/* eslint-disable react/no-unescaped-entities, react/jsx-key, @typescript-eslint/no-unused-vars */

import React, { useMemo, useState } from "react";
import * as katex from "katex";
import { ElectronegativityFactorsApplicationsV14 } from "./PeriodicTableElectronegativityV14Additions";
import { SectionElectronegativityV12 } from "./PeriodicTableElectronegativityV12";
import {
  V9TelluricScrewSVG,
  V9AtomicVolumeSVG,
  V9TrendCompassSVG,
  V9RadiusSourcePanel,
  V9IonizationSourcePanel,
  V9ElectronGainSourcePanel,
  V9ElectronegativitySourcePanel,
  V9SpecialSourcePanel,
  V10ElectronegativityApplicationsPanel,
  V10CohesiveAndMeltingPanel,
  V10SecondaryPeriodicityPanel,
  V10OlympiadEnrichmentPanel,
} from "./PeriodicTableV10WorldAdditions";
import PeriodicTableDeepAdditions from "./PeriodicTableDeepAdditions";


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
  textDim: "#c3d1dd",
  textFaint: "#91a9bc",
  gold: "#e8b84b",
  cyan: "#5fd4ea",
  s: "#7fb2e5",
  p: "#e8896b",
  d: "#7fd9b8",
  f: "#c9a4e0",
  danger: "#e8896b",
  ok: "#7fd9b8",
  serif: "Georgia, 'Iowan Old Style', 'Times New Roman', serif",
  mono: "'SFMono-Regular',Consolas,'Liberation Mono',monospace",
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
    <div className="lessonCard periodicityCard"
      style={{
        background: T.surface,
        border: `1px solid ${T.border}`,
        borderTop: accent ? `3px solid ${accent}` : `1px solid ${T.border}`,
        borderRadius: 12,
        padding: "18px 20px",
        marginBottom: 16,
        minWidth: 0,
        maxWidth: "100%",
        overflowWrap: "anywhere",
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
    <div className="formulaBox"
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
        maxWidth: "100%",
        overflowX: "auto",
        overflowY: "hidden",
        verticalAlign: "middle",
        WebkitOverflowScrolling: "touch",
      }}
    >
      {children}
    </div>
  );
}


export function MathBlock({ tex, label }: { tex: string; label?: string }) {
  const html = katex.renderToString(tex, {
    throwOnError: false,
    displayMode: true,
    output: "htmlAndMathml",
    strict: "warn",
    trust: false,
  });
  return (
    <div
      className="sb-katex-block"
      aria-label={tex}
      style={{
        background: "linear-gradient(135deg, rgba(95,212,234,0.08), rgba(232,184,75,0.04))",
        border: `1px solid ${T.border}`,
        borderLeft: `4px solid ${T.cyan}`,
        borderRadius: 10,
        padding: "12px 16px",
        margin: "12px 0",
        overflowX: "auto",
      }}
    >
      {label ? <div style={{ color: T.textDim, fontSize: 11.5, fontWeight: 800, marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 }}>{label}</div> : null}
      <div style={{ color: T.text, fontSize: 18 }} dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

export function MathInline({ tex }: { tex: string }) {
  const html = katex.renderToString(tex, {
    throwOnError: false,
    displayMode: false,
    output: "htmlAndMathml",
    strict: "warn",
    trust: false,
  });
  return <span className="sb-katex-inline" aria-label={tex} style={{ color: T.cyan, fontWeight: 700 }} dangerouslySetInnerHTML={{ __html: html }} />;
}

export function DefinitionBox({ term, children }: { term: string; children: React.ReactNode }) {
  return (
    <div style={{ background: "rgba(127,217,184,0.07)", border: `1px solid ${T.d}66`, borderRadius: 12, padding: "14px 16px", margin: "12px 0" }}>
      <div style={{ fontFamily: T.sans, fontSize: 11, fontWeight: 900, letterSpacing: 0.7, textTransform: "uppercase", color: T.d, marginBottom: 6 }}>NCERT-aligned definition</div>
      <div style={{ fontFamily: T.serif, fontSize: 18, fontWeight: 800, color: T.text, marginBottom: 5 }}>{term}</div>
      <div style={{ fontFamily: T.sans, fontSize: 14.2, lineHeight: 1.7, color: T.text }}>{children}</div>
    </div>
  );
}

export function RelationBox({ title, relations }: { title: string; relations: React.ReactNode[] }) {
  return (
    <div style={{ background: "rgba(232,184,75,0.06)", border: `1px solid ${T.gold}66`, borderRadius: 12, padding: "14px 16px", margin: "12px 0" }}>
      <div style={{ fontFamily: T.serif, color: T.gold, fontWeight: 800, fontSize: 17, marginBottom: 9 }}>{title}</div>
      <div style={{ display: "grid", gap: 7 }}>
        {relations.map((r, i) => <div key={i} style={{ fontFamily: T.sans, color: T.text, fontSize: 14, lineHeight: 1.6, paddingLeft: 14, position: "relative" }}><span style={{ position: "absolute", left: 0, color: T.gold }}>•</span>{r}</div>)}
      </div>
    </div>
  );
}

export function StudentNote({ heading, children, accent = T.cyan }: { heading: string; children: React.ReactNode; accent?: string }) {
  return (
    <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderTop: `3px solid ${accent}`, borderRadius: 12, padding: "16px 18px", margin: "14px 0" }}>
      <div style={{ fontFamily: T.serif, color: T.text, fontWeight: 800, fontSize: 18, marginBottom: 8 }}>{heading}</div>
      <div style={{ fontFamily: T.sans, color: T.text, fontSize: 14, lineHeight: 1.7 }}>{children}</div>
    </div>
  );
}


export function FactorStudyCard({
  number,
  title,
  relation,
  explanation,
  examples,
  special,
  accent = T.cyan,
}: {
  number: number | string;
  title: string;
  relation?: React.ReactNode;
  explanation: React.ReactNode;
  examples: { label: string; body: React.ReactNode }[];
  special?: React.ReactNode;
  accent?: string;
}) {
  return (
    <div
      style={{
        background: "linear-gradient(145deg, rgba(255,255,255,0.028), rgba(255,255,255,0.01))",
        border: `1px solid ${T.border}`,
        borderLeft: `4px solid ${accent}`,
        borderRadius: 14,
        padding: "16px 18px",
        margin: "14px 0",
      }}
     className="periodicityFactorCard">
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
        <div style={{ width: 30, height: 30, borderRadius: 9, display: "grid", placeItems: "center", background: `${accent}18`, border: `1px solid ${accent}66`, color: accent, fontFamily: T.mono, fontSize: 12, fontWeight: 900, flexShrink: 0 }}>{number}</div>
        <div style={{ fontFamily: T.serif, color: T.text, fontSize: 18, fontWeight: 800 }}>{title}</div>
      </div>
      {relation ? <div style={{ fontFamily: T.mono, color: accent, fontSize: 13.5, fontWeight: 800, lineHeight: 1.55, marginBottom: 8 }}>{relation}</div> : null}
      <div style={{ fontFamily: T.sans, color: T.text, fontSize: 14, lineHeight: 1.72 }}>{explanation}</div>
      <div style={{ marginTop: 11, borderTop: `1px dashed ${T.borderSoft}`, paddingTop: 10 }}>
        <div style={{ fontFamily: T.sans, color: accent, fontSize: 10.5, fontWeight: 900, letterSpacing: 0.7, textTransform: "uppercase", marginBottom: 7 }}>Examples and direct applications</div>
        <div style={{ display: "grid", gap: 7 }}>
          {examples.map((example) => (
            <div key={example.label} style={{ display: "grid", gridTemplateColumns: "minmax(90px,0.26fr) minmax(0,0.74fr)", gap: 10, alignItems: "start" }}>
              <div style={{ fontFamily: T.mono, color: accent, fontSize: 11.5, fontWeight: 800 }}>{example.label}</div>
              <div style={{ fontFamily: T.sans, color: T.textDim, fontSize: 13.2, lineHeight: 1.6 }}>{example.body}</div>
            </div>
          ))}
        </div>
      </div>
      {special ? <div style={{ marginTop: 11, padding: "9px 11px", borderRadius: 9, background: `${T.gold}10`, border: `1px solid ${T.gold}44`, color: T.text, fontFamily: T.sans, fontSize: 13, lineHeight: 1.6 }}><b style={{ color: T.gold }}>Special case:</b> {special}</div> : null}
    </div>
  );
}

export function Callout({
  kind = "note",
  title,
  children,
}: {
  kind?: "note" | "warn" | "special";
  title?: string;
  children: React.ReactNode;
}) {
  const map = {
    note: { color: T.cyan, label: title ?? "Note" },
    warn: { color: T.p, label: title ?? "Limitation" },
    special: { color: T.gold, label: title ?? "Special case" },
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
  rows: React.ReactNode[][];
  accent?: string;
}) {
  return (
    <div style={{ overflowX: "auto",
        maxWidth: "100%",
        WebkitOverflowScrolling: "touch", margin: "12px 0" }} className="periodicityTableHost">
      <table style={{ borderCollapse: "collapse", width: "100%", fontFamily: T.sans, fontSize: 13.5 }}>
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
                  whiteSpace: "normal",
                  overflowWrap: "anywhere",
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
                    color: T.text,
                    fontWeight: ci === 0 ? 700 : 400,
                    whiteSpace: ci === 0 ? "nowrap" : "normal",
                    lineHeight: 1.55,
                    minWidth: ci === 0 ? 145 : 120,
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
    <div className="sectionIntro periodicitySectionIntro"
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
    <div className="conceptGrid periodicityConceptGrid"
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
    <div className="workedExample periodicityWorkedExample"
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
      className="chapterHero" data-periodicity-version="v10-world-reference-rebuild"
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
            Classification of Elements and Periodicity in Properties
          </h1>
          <p style={{ fontFamily: T.sans, color: T.textDim, fontSize: 14.5, lineHeight: 1.7, margin: 0, maxWidth: 760 }}>
            A world-reference chapter for Boards, NEET, JEE Main, JEE Advanced and Olympiad study: NCERT-first definitions, complete historical development, electronic classification, effective nuclear charge, radii, ionization and electron-gain data, electronegativity scales, chemical periodicity, thermochemical cycles, block-wise tables and original worked examples.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 }}>
            {["16 student-note modules", "Replayable verified SVGs", "Worked reasoning", "Special-case revision"].map((x, i) => (
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



export function MotionFigure({
  children,
  title,
  status,
  note,
}: {
  children: React.ReactNode;
  title: string;
  status: "Data-backed quantitative" | "Law-based schematic" | "Calculated orbital model";
  note: string;
}) {
  const [run, setRun] = useState(0);
  return (
    <figure style={{ margin: "0 0 16px" }}>
      <div key={run} className="sb-animate" style={{ width: "100%" }}>{children}</div>
      <figcaption style={{ display: "flex", gap: 10, alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", marginTop: 8 }}>
        <div style={{ minWidth: 240, flex: 1 }}>
          <div style={{ color: T.d, fontFamily: T.sans, fontSize: 10.5, fontWeight: 900, letterSpacing: 0.65, textTransform: "uppercase" }}>✓ {status}</div>
          <div style={{ color: T.text, fontFamily: T.serif, fontSize: 14.5, fontWeight: 800, marginTop: 2 }}>{title}</div>
          <div style={{ color: T.textDim, fontFamily: T.sans, fontSize: 11.5, lineHeight: 1.55, marginTop: 2 }}>{note}</div>
        </div>
        <button type="button" onClick={() => setRun((v) => v + 1)} style={{ border: `1px solid ${T.cyan}66`, background: "rgba(95,212,234,0.08)", color: T.cyan, borderRadius: 999, padding: "6px 10px", fontSize: 11, fontWeight: 800, cursor: "pointer" }} aria-label={`Replay animation: ${title}`}>
          ↻ Replay animation
        </button>
      </figcaption>
    </figure>
  );
}

// -----------------------------------------------------------------------------
// SVG Diagrams
// -----------------------------------------------------------------------------
export function RadialDistributionSVG() {
  const w = 560, h = 300, left = 52, right = 22, top = 30, bottom = 48;
  const factorial = (n: number) => Array.from({ length: Math.max(0, n) }, (_, i) => i + 1).reduce((a, b) => a * b, 1);
  const probability = (r: number, l: 0 | 1 | 2) => {
    const n = 3;
    const rho = (2 * r) / n;
    const laguerre = l === 0 ? 0.5 * (rho * rho - 6 * rho + 6) : l === 1 ? 4 - rho : 1;
    const norm = Math.pow(2 / n, 1.5) * Math.sqrt(factorial(n - l - 1) / (2 * n * factorial(n + l)));
    const R = norm * Math.exp(-rho / 2) * Math.pow(rho, l) * laguerre;
    return r * r * R * R;
  };
  const rs = Array.from({ length: 241 }, (_, i) => (i / 240) * 24);
  const series = [
    { key: "3s", l: 0 as const, color: T.s, nodes: [1.90, 7.10] },
    { key: "3p", l: 1 as const, color: T.p, nodes: [6.00] },
    { key: "3d", l: 2 as const, color: T.d, nodes: [] as number[] },
  ].map((item) => {
    const raw = rs.map((r) => probability(r, item.l));
    const max = Math.max(...raw);
    return { ...item, values: raw.map((v) => v / max) };
  });
  const x = (r: number) => left + (r / 24) * (w - left - right);
  const y = (v: number) => top + (1 - v) * (h - top - bottom);
  const path = (values: number[]) => values.map((v, i) => `${i === 0 ? "M" : "L"} ${x(rs[i]).toFixed(2)} ${y(v).toFixed(2)}`).join(" ");
  return (
    <MotionFigure title="Hydrogenic 3s, 3p and 3d radial-probability distributions" status="Calculated orbital model" note="Each curve is calculated from the hydrogenic radial wavefunction and normalized to its own maximum. Node positions are quantitative in units of a₀; the figure compares penetration and radial nodes, not multielectron orbital energies.">
      <svg viewBox={`0 0 ${w} ${h}`} role="img" aria-label="Calculated hydrogenic radial probability curves for 3s 3p and 3d" style={{ width: "100%", maxWidth: 760, background: T.bgGrid, borderRadius: 12, border: `1px solid ${T.borderSoft}` }}>
        {[0, 0.25, 0.5, 0.75, 1].map((v) => <g key={v}><line x1={left} y1={y(v)} x2={w-right} y2={y(v)} stroke={T.borderSoft} strokeWidth="1" /><text x={left-10} y={y(v)+4} textAnchor="end" fill={T.textFaint} fontSize="10">{v.toFixed(2)}</text></g>)}
        {[0, 4, 8, 12, 16, 20, 24].map((v) => <g key={v}><line x1={x(v)} y1={top} x2={x(v)} y2={h-bottom} stroke={T.borderSoft} strokeWidth="1" /><text x={x(v)} y={h-bottom+18} textAnchor="middle" fill={T.textFaint} fontSize="10">{v}</text></g>)}
        <line x1={left} y1={h-bottom} x2={w-right} y2={h-bottom} stroke={T.textFaint} />
        <line x1={left} y1={top} x2={left} y2={h-bottom} stroke={T.textFaint} />
        {series.map((ser, si) => <g key={ser.key}>
          <path className="sb-path" pathLength="1" d={path(ser.values)} stroke={ser.color} strokeWidth="2.8" fill="none" style={{ animationDelay: `${si * 0.45}s` }} />
          {ser.nodes.map((node) => <g key={node}><line x1={x(node)} y1={h-bottom} x2={x(node)} y2={h-bottom-18} stroke={ser.color} strokeDasharray="3 3" /><text x={x(node)} y={h-bottom-23} textAnchor="middle" fill={ser.color} fontSize="9.5">node</text></g>)}
        </g>)}
        <g transform={`translate(${w-126} ${top+10})`}>{series.map((ser, i) => <g key={ser.key} transform={`translate(0 ${i*20})`}><line x1="0" y1="0" x2="22" y2="0" stroke={ser.color} strokeWidth="3" /><text x="30" y="4" fill={T.text} fontSize="11.5">{ser.key}</text></g>)}</g>
        <text x={(left+w-right)/2} y={h-10} textAnchor="middle" fill={T.textDim} fontSize="11.5">distance from nucleus, r / a₀</text>
        <text x="15" y={(top+h-bottom)/2} textAnchor="middle" transform={`rotate(-90 15 ${(top+h-bottom)/2})`} fill={T.textDim} fontSize="11.5">normalized radial probability, P(r)</text>
      </svg>
    </MotionFigure>
  );
}


export function AtomicVolumeSVG() {
  return <V9AtomicVolumeSVG />;
}

export function DBlockRadiusChartSVG() {
  const data = [
    { e: "Sc", r: 164 }, { e: "Ti", r: 147 }, { e: "V", r: 135 }, { e: "Cr", r: 129 }, { e: "Mn", r: 137 },
    { e: "Fe", r: 126 }, { e: "Co", r: 125 }, { e: "Ni", r: 125 }, { e: "Cu", r: 128 }, { e: "Zn", r: 137 },
  ];
  const w = 700, h = 330, left = 58, right = 24, top = 34, bottom = 58;
  const min = 118, max = 170;
  const x = (i: number) => left + (i / (data.length - 1)) * (w - left - right);
  const y = (v: number) => top + (1 - (v - min) / (max - min)) * (h - top - bottom);
  const d = data.map((p, i) => `${i ? "L" : "M"} ${x(i)} ${y(p.r)}`).join(" ");
  return (
    <MotionFigure title="Metallic radii across the first transition series" status="Data-backed quantitative" note="The plotted values are the NCERT 3d-series metallic radii in pm. The x-axis uses the correct element labels Sc–Zn; 4d and 5d comparisons are kept in separate tables rather than being falsely labelled with 3d symbols.">
      <svg viewBox={`0 0 ${w} ${h}`} role="img" aria-label="NCERT metallic radii of Sc Ti V Cr Mn Fe Co Ni Cu Zn" style={{ width: "100%", maxWidth: 820, background: T.bgGrid, borderRadius: 12, border: `1px solid ${T.borderSoft}` }}>
        {[120, 130, 140, 150, 160, 170].map((v) => <g key={v}><line x1={left} y1={y(v)} x2={w-right} y2={y(v)} stroke={T.borderSoft}/><text x={left-10} y={y(v)+4} textAnchor="end" fill={T.textFaint} fontSize="10.5">{v}</text></g>)}
        <line x1={left} y1={h-bottom} x2={w-right} y2={h-bottom} stroke={T.textFaint}/><line x1={left} y1={top} x2={left} y2={h-bottom} stroke={T.textFaint}/>
        <path className="sb-path" pathLength="1" d={d} stroke={T.d} strokeWidth="3" fill="none" />
        {data.map((p, i) => <g key={p.e} className="sb-point" style={{ animationDelay: `${0.25+i*0.08}s` }}><circle cx={x(i)} cy={y(p.r)} r="5" fill={T.d}><title>{`${p.e}: ${p.r} pm`}</title></circle><text x={x(i)} y={h-bottom+19} textAnchor="middle" fill={T.text} fontSize="11">{p.e}</text><text x={x(i)} y={y(p.r)-10} textAnchor="middle" fill={T.textDim} fontSize="9.5">{p.r}</text></g>)}
        <text x={(left+w-right)/2} y={h-10} textAnchor="middle" fill={T.textDim} fontSize="11.5">first transition series</text><text x="17" y={(top+h-bottom)/2} textAnchor="middle" transform={`rotate(-90 17 ${(top+h-bottom)/2})`} fill={T.textDim} fontSize="11.5">metallic radius / pm</text>
      </svg>
    </MotionFigure>
  );
}


export function MoseleyPlotSVG() {
  const points = Array.from({ length: 21 }, (_, i) => ({ z: 10 + i * 2, y: 5.2 + i * 0.72 }));
  const w = 520, h = 300, left = 58, right = 26, top = 30, bottom = 54;
  const x = (z: number) => left + ((z - 8) / 46) * (w-left-right);
  const y = (v: number) => top + (1 - (v - 4) / 17) * (h-top-bottom);
  return (
    <MotionFigure title="Moseley's law: √ν varies linearly with atomic number" status="Law-based schematic" note="The straight-line relationship is the verified scientific content. The points are a clean schematic for one characteristic X-ray series, not a claim to reproduce a particular experimental dataset.">
      <svg viewBox={`0 0 ${w} ${h}`} role="img" aria-label="Schematic straight line plot of square root X ray frequency against atomic number" style={{ width: "100%", maxWidth: 620, background: T.bgGrid, borderRadius: 12, border: `1px solid ${T.borderSoft}` }}>
        <line x1={left} y1={h-bottom} x2={w-right} y2={h-bottom} stroke={T.textFaint}/><line x1={left} y1={top} x2={left} y2={h-bottom} stroke={T.textFaint}/>
        <path className="sb-path" pathLength="1" d={`M ${x(points[0].z)} ${y(points[0].y)} L ${x(points.at(-1)!.z)} ${y(points.at(-1)!.y)}`} stroke={T.gold} strokeWidth="3" fill="none" />
        {points.map((p,i)=><circle key={p.z} className="sb-point" style={{animationDelay:`${0.2+i*0.045}s`}} cx={x(p.z)} cy={y(p.y)} r="3.6" fill={T.cyan}><title>{`Z = ${p.z}`}</title></circle>)}
        <text x={(left+w-right)/2} y={h-12} textAnchor="middle" fill={T.textDim} fontSize="11.5">atomic number, Z</text><text x="17" y={(top+h-bottom)/2} textAnchor="middle" transform={`rotate(-90 17 ${(top+h-bottom)/2})`} fill={T.textDim} fontSize="11.5">√ν</text>
        <text x={w-210} y={top+24} fill={T.gold} fontSize="12" fontWeight="800">√ν = a(Z − b)</text>
      </svg>
    </MotionFigure>
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
  return <V9TrendCompassSVG />;
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
  return <InteractivePeriodicTableV16 />;
}

/* =============================================================================
   SECTION 1 — History & Classification (renderer)
   ========================================================================== */
export function SectionHistory() {
  return (
    <>
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
            <MathBlock tex={String.raw`\text{Properties of the elements are periodic functions of their atomic weights.}`} />
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
                <MathBlock tex={String.raw`\sqrt{\nu}=a(Z-b)`} />
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
      <div
        data-integration="SectionHistory-periodicity-generated-corpus-phd-v9"
        style={{ marginTop: 34 }}
      >
        <PeriodicTableDeepAdditions topic="history" />
      </div>
    </>
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

function SectionAtomicRadiusLegacyV9() {
  return (
    <div>
      <SectionIntro eyebrow="Measuring the size of an electron cloud" title="Atomic and Ionic Radius: Definitions, Trends and Special Cases" summary="An atom has no sharp boundary, so its size is inferred from internuclear distances. The meaning of radius changes with bonding environment, and ionic size depends strongly on charge, electron count and crystal context." accent={T.s} />
      <H2 id="atomic-radius">Atomic Radius — Complete Notes</H2>
      <P>
        An atom has no sharp outer surface because electron density fades gradually with distance. Atomic size is therefore an operational quantity inferred from internuclear distances in molecules, metals or molecular crystals. The appropriate definition depends on the bonding environment: <b>covalent</b>, <b>metallic</b>, <b>van der Waals</b> or <b>ionic</b> radius.
      </P>

      <H3>1 · Covalent Radius</H3>
      <P>Half the internuclear distance between two covalently bonded atoms of the same element (used for H₂, Cl₂, etc.):</P>
      <MathBlock tex={String.raw`r_{\mathrm{cov}}=\frac{d(A-A)}{2}`} />
      <P>For a heteronuclear bond A–B, a first estimate is d(A–B) ≈ r_A + r_B. Empirical corrections can account for polarity and the fact that tabulated radii depend on bond order and chemical environment:</P>
      <MathBlock tex={String.raw`d(A-B)=r_A+r_B-0.09\,\Delta\chi\;(\text{Å})=r_A+r_B-9\,\Delta\chi\;(\mathrm{pm})`} label="Schomaker–Stevenson relation" />
      <MathBlock tex={String.raw`d(A-B)=r_A+r_B-\left|C_1\chi_A-C_2\chi_B\right|`} label="Pauling–Stevenson form" />

      <H3>2 · Metallic Radius</H3>
      <P>Half the internuclear distance between two closest metal atoms in a metallic lattice (metals modelled as
        close-packed spheres of positive nuclei in a "sea" of electrons):</P>
      <MathBlock tex={String.raw`r_{\mathrm{metallic}}=\frac{d(M-M)}{2}`} />
      <Callout kind="note">Metallic radius &gt; covalent radius for the same element — e.g. K: metallic 2.3 Å vs covalent 2.03 Å.</Callout>

      <H3>3 · van der Waals Radius (Collision Radius)</H3>
      <P>Half the shortest internuclear distance between two non-bonded neighbouring atoms of adjacent molecules
        (or, for monoatomic noble gases, between two atoms at closest approach):</P>
      <MathBlock tex={String.raw`r_{\mathrm{vdW}}=\frac{d}{2}`} />
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
      <MathBlock tex={String.raw`r(\mathrm{Group\ 1})>r(\mathrm{Group\ 2})\quad\text{within the same period}`} />

      <H2 id="radius-special-cases">7 · Special / Anomalous Cases in Groups</H2>
      <P>Boron family radii (pm) — note Ga &lt; Al:</P>
      <MiniBarChart data={boronFamilyRadii} color={T.p} />
      <Callout kind="special" title="Ga < Al (scandide / d-block contraction)">
        ₃₁Ga = 3d¹⁰4s²4p¹ vs Al = [Ne]3s²3p¹. The filled 3d¹⁰ subshell shields poorly, so Ga's outer electron feels a
        stronger pull → Ga ends up smaller than Al despite being one period below it.
      </Callout>
      <Callout kind="special" title="In → Tl — only a tiny increase (lanthanide contraction)">
        ₈₁Tl = 4f¹⁴5d¹⁰6s²6p¹ vs In = [Kr]5s²4d¹⁰5p¹. Poor shielding by the filled 4f electrons contracts Tl's size,
        nearly cancelling the expected increase from adding a new shell.
      </Callout>
      <P>Carbon family radii (pm) — small Si→Ge and Sn→Pb gaps:</P>
      <MiniBarChart data={carbonFamilyRadii} color={T.d} />
      <Callout kind="note">Si→Ge gap is small (poor d-shielding in Ge); Sn→Pb gap is small (poor f-shielding in Pb, i.e. lanthanide contraction).</Callout>
      <P>Nitrogen family radii (pm) — small Sb→Bi gap (poor f-shielding in Bi):</P>
      <MiniBarChart data={nitrogenFamilyRadii} color={T.f} />
      <Callout kind="special" title="Key special cases to remember">
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
        shielding) — regular in ions, less regular in atoms. Special cases: Eu and Yb are larger (stable half-filled
        4f⁷ and fully-filled 4f¹⁴). Special oxidation states to reach half/full 4f: Ce⁴⁺(4f⁰), Eu²⁺(4f⁷), Yb²⁺(4f¹⁴).
        Actinoids show an overall contraction from Th to Lr, but the pattern is less regular because 5f, 6d and 7s energies are close.</P>
      <DataTable columns={["Z", "Ln", "Ln (pm)", "Ln³⁺ (pm)"]} rows={lanthanideTable} />

      <H2 id="ionic-radius">11 · Ionic Radius — Detailed Trends</H2>
      <MathBlock tex={String.raw`r(A^-)>r(A)>r(A^+)`} label="same element" />
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
      <MathBlock tex={String.raw`\mathrm{N^{3-}>O^{2-}>F^->Na^+>Mg^{2+}>Al^{3+}>Si^{4+}}`} label="isoelectronic radius order" />
      <Callout kind="note">
        Other useful isoelectronic sets include S²⁻, Cl⁻, K⁺, Ca²⁺, Sc³⁺ and H⁻, He, Li⁺. Within each set, increasing proton number contracts the shared electron count more strongly.
      </Callout>
      <Callout kind="special" title="Hydride radius is strongly environment-dependent">
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
        ["d-block down a group", "r(3d) < r(4d) ≈ r(5d); special case Sc < Y < La"],
        ["Chemical twins (4d/5d)", "Zr≈Hf, Nb≈Ta, Mo≈W, Tc≈Re (lanthanide contraction)"],
        ["f-block (lanthanoids)", "Radius decreases La→Lu; special cases Eu, Yb (larger)"],
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
    <>
      <div>
            <SectionIntro
              eyebrow="The actual nuclear attraction experienced by each electron"
              title="Effective Nuclear Charge, Shielding, Penetration and Slater's Rules — Complete Notes"
              summary="This module develops effective nuclear charge from first principles, explains every factor with multiple examples, applies Slater's rules to s-, p- and d-electrons, and connects Zeff with radius, ionization enthalpy, electron gain enthalpy, electronegativity and chemical behaviour."
              accent={T.f}
            />

            <H2 id="zeff">1 · Definition, Meaning and Governing Relation</H2>
            <DefinitionBox term="Effective nuclear charge">
              Effective nuclear charge is the net positive nuclear attraction experienced by a particular electron in a multi-electron atom after allowing for shielding by the remaining electrons. It is orbital-dependent; different electrons in the same atom can experience different effective nuclear charges.
            </DefinitionBox>
            <MathBlock tex={String.raw`Z_{\mathrm{eff}}=Z-\sigma`} label="Central relation" />
            <DataTable
              columns={["Symbol", "Meaning", "Important note"]}
              rows={[
                ["Z", "actual nuclear charge = number of protons", "fixed for a given element"],
                ["σ", "shielding or screening constant", "depends on electron distribution and the orbital being examined"],
                ["Zeff", "net attraction experienced by the selected electron", "always less than Z in an ordinary multi-electron atom"],
              ]}
              accent={T.f}
            />
            <Callout kind="note" title="Do not assign one Zeff to the whole atom">
              A 3d electron and a 4s electron in iron do not experience the same shielding or penetration. Effective nuclear charge must always be attached to a specified electron or orbital.
            </Callout>

            <H2>2 · Factors Controlling Effective Nuclear Charge</H2>
            <FactorStudyCard
              number="1"
              title="Magnitude of the actual nuclear charge"
              relation={<MathInline tex={String.raw`Z\uparrow\Rightarrow Z_{\mathrm{eff}}\uparrow\quad(\text{when shielding does not rise equally})`} />}
              explanation="Each additional proton increases the attractive force exerted by the nucleus. Across a period, the added electron usually enters the same principal shell, so shielding rises only slightly while Z rises by one at every step. The net result is a steady rise in effective nuclear charge."
              examples={[
                { label: "Li → F", body: "Valence electrons remain in n = 2 while proton number rises from 3 to 9; the outer cloud contracts strongly." },
                { label: "Na → Cl", body: "The 3s/3p valence shell is common to the period; increasing Z dominates the small increase in same-shell screening." },
                { label: "Isoelectronic", body: <><MathInline tex={String.raw`\mathrm{O^{2-}>F^->Na^+>Mg^{2+}>Al^{3+}}`} /> in radius because the same ten electrons are pulled by progressively larger Z.</> },
                { label: "Cations", body: <><MathInline tex={String.raw`\mathrm{Fe^{3+}}`} /> binds its remaining electrons more strongly than <MathInline tex={String.raw`\mathrm{Fe^{2+}}`} /> because the electron count is smaller for the same nucleus.</> },
              ]}
              accent={T.gold}
            />
            <FactorStudyCard
              number="2"
              title="Number and position of shielding electrons"
              relation={<MathInline tex={String.raw`\sigma\uparrow\Rightarrow Z_{\mathrm{eff}}\downarrow`} />}
              explanation="Electrons between the nucleus and the selected electron repel it and partially screen nuclear attraction. Inner-shell electrons shield much more efficiently than electrons in the same shell because they spend more time between the nucleus and the outer electron."
              examples={[
                { label: "Li 2s", body: "The 1s² core screens the 2s electron strongly; it therefore feels much less than the full nuclear charge +3." },
                { label: "Na 3s", body: "Ten core electrons shield the valence electron, making sodium easy to ionize despite Z = 11." },
                { label: "K vs Na", body: "K has more protons, but its 4s electron is screened by three occupied inner shells; shell addition and shielding dominate." },
                { label: "Ga", body: "The filled 3d¹⁰ subshell shields the 4p electron imperfectly, so Ga is more contracted than a simple down-group rule predicts." },
              ]}
              special="Same-shell electrons do shield one another, but less efficiently than inner-shell electrons. Shielding is therefore not equal to a simple count of all other electrons."
              accent={T.p}
            />
            <FactorStudyCard
              number="3"
              title="Penetration of the selected orbital"
              relation={<MathInline tex={String.raw`\text{penetration: }s>p>d>f`} />}
              explanation="A penetrating orbital has appreciable electron density close to the nucleus. Such an electron passes inside the screening cloud more often and experiences greater effective nuclear attraction. For the same principal shell, orbital energy normally follows the opposite order."
              examples={[
                { label: "Be vs B", body: "A 2s electron penetrates more than a 2p electron; therefore the electron removed from B(2p¹) is less tightly held than that from Be(2s²)." },
                { label: "Mg vs Al", body: "Al loses a 3p electron more readily than Mg loses a 3s electron for the same penetration reason." },
                { label: "Orbital energy", body: <><MathInline tex={String.raw`E(ns)<E(np)<E(nd)<E(nf)`} /> in a many-electron atom of the same n, because penetration decreases.</> },
                { label: "Transition ions", body: "Once 3d occupation begins, 4s electrons are generally removed first because the energetic ordering changes after electron occupation and ion formation." },
              ]}
              accent={T.d}
            />
            <FactorStudyCard
              number="4"
              title="Principal shell and average distance from the nucleus"
              relation={<MathInline tex={String.raw`n\uparrow\Rightarrow r_{\mathrm{avg}}\uparrow\Rightarrow Z_{\mathrm{eff}}\text{ felt at the valence region generally weakens}`} />}
              explanation="A valence electron in a higher principal shell is farther from the nucleus and is screened by more inner shells. Even when the calculated Zeff changes only moderately, the electrostatic attraction falls strongly because distance increases."
              examples={[
                { label: "Group 1", body: <><MathInline tex={String.raw`\mathrm{Li>Na>K>Rb>Cs}`} /> in first ionization enthalpy; the valence electron moves to successively higher shells.</> },
                { label: "Halogens", body: "Atomic radius increases F → Cl → Br → I although nuclear charge rises, because each step adds an occupied shell." },
                { label: "Hydrides", body: "H–X bond length increases down group 17 because the valence orbital of X becomes larger and more diffuse." },
                { label: "Noble gases", body: "Polarizability increases He → Rn because the outer electron cloud becomes larger and more easily distorted." },
              ]}
              accent={T.s}
            />
            <FactorStudyCard
              number="5"
              title="Shielding efficiency of s, p, d and f electrons"
              relation={<MathInline tex={String.raw`\text{shielding efficiency (approx.)}:s>p>d>f`} />}
              explanation="More penetrating electrons are better positioned between the nucleus and outer electrons and therefore shield them more effectively. d and especially f electrons are poor shields; this produces important contraction effects."
              examples={[
                { label: "d contraction", body: "Poor shielding by 3d electrons makes Ga only slightly larger—and often quoted smaller—than Al." },
                { label: "Lanthanoid", body: "Poor 4f shielding causes a steady contraction from La to Lu and makes Zr and Hf nearly equal in size." },
                { label: "Actinoid", body: "Poor 5f shielding contributes to actinoid contraction, although the pattern is less regular because 5f, 6d and 7s energies are close." },
                { label: "Tl / Pb / Bi", body: "Poor d and f shielding and relativistic stabilization increase the attraction on the outer ns² pair, contributing to the inert-pair effect." },
              ]}
              accent={T.f}
            />
            <FactorStudyCard
              number="6"
              title="Charge and electron count of the species"
              relation={<MathInline tex={String.raw`\text{same nucleus: }Z_{\mathrm{eff}}(\text{cation})>Z_{\mathrm{eff}}(\text{atom})>Z_{\mathrm{eff}}(\text{anion})`} />}
              explanation="Removing electrons reduces electron–electron repulsion and screening; adding electrons increases both. Therefore cations contract and anions expand relative to the parent atom."
              examples={[
                { label: "Chlorine", body: <><MathInline tex={String.raw`r(\mathrm{Cl^+})<r(\mathrm{Cl})<r(\mathrm{Cl^-})`} />.</> },
                { label: "Iron", body: <><MathInline tex={String.raw`r(\mathrm{Fe^{3+}})<r(\mathrm{Fe^{2+}})`} /> because the same nucleus attracts fewer electrons more strongly.</> },
                { label: "Oxygen", body: <><MathInline tex={String.raw`r(\mathrm{O^{2-}})>r(\mathrm{O^-})>r(\mathrm{O})`} /> because repulsion rises with added electrons.</> },
                { label: "Successive IE", body: <><MathInline tex={String.raw`IE_1<IE_2<IE_3<\cdots`} /> because every successive electron is removed from an increasingly positive species.</> },
              ]}
              accent={T.cyan}
            />
            <FactorStudyCard
              number="7"
              title="Electron–electron repulsion and orbital occupancy"
              relation={<MathInline tex={String.raw`\text{pairing repulsion}\uparrow\Rightarrow\text{selected electron is held less tightly}`} />}
              explanation="Zeff is an average one-electron idea. Actual removal and addition energies also depend on how electrons occupy orbitals, including pairing repulsion and exchange stabilization."
              examples={[
                { label: "N vs O", body: "O has one paired 2p orbital; repulsion makes one electron easier to remove, so IE₁(O) < IE₁(N)." },
                { label: "P vs S", body: "The same p³ versus p⁴ pairing effect gives IE₁(S) < IE₁(P)." },
                { label: "N electron gain", body: "Adding an electron to N forces pairing in a half-filled 2p³ set, making electron gain unfavourable." },
                { label: "Cr / Cu", body: "Near-degenerate 3d and 4s levels and exchange/pairing energies help produce [Ar]3d⁵4s¹ and [Ar]3d¹⁰4s¹ configurations." },
              ]}
              accent={T.gold}
            />

            <H2>3 · Penetration and Radial Distribution</H2>
            <div style={{ display: "grid", gridTemplateColumns: "minmax(300px,0.9fr) minmax(0,1.1fr)", gap: 18, alignItems: "start" }} className="twoCol">
              <RadialDistributionSVG />
              <div>
                <P>Penetration is judged from the probability of finding an electron close to the nucleus. Radial nodes do not prevent an s orbital from penetrating; inner lobes of an s orbital can place significant probability inside p, d or f distributions.</P>
                <MathBlock tex={String.raw`\text{same }n:\quad s>p>d>f\quad\text{in penetration and shielding efficiency}`} />
                <MathBlock tex={String.raw`\text{same }n:\quad E_s<E_p<E_d<E_f\quad\text{in a many-electron atom}`} />
              </div>
            </div>

            <H2 id="slater">4 · Slater Grouping and Rules</H2>
            <MathBlock tex={String.raw`(1s)\,(2s,2p)\,(3s,3p)\,(3d)\,(4s,4p)\,(4d)\,(4f)\,(5s,5p)\cdots`} label="Write the configuration in Slater groups" />
            <H3>For an ns or np test electron</H3>
            <DataTable columns={["Shielding electrons", "Contribution per electron", "Illustration"]} rows={[
              ["other electrons in the same (ns,np) group", "0.35", "for a 3p electron, other 3s and 3p electrons each count 0.35"],
              ["other electron in 1s", "0.30", "special 1s coefficient"],
              ["electrons in shell (n−1)", "0.85", "2s²2p⁶ screens a 3s/3p electron by 8 × 0.85"],
              ["electrons in (n−2) and lower shells", "1.00", "1s² screens a 3s/3p electron by 2 × 1.00"],
            ]} accent={T.cyan} />
            <H3>For an nd or nf test electron</H3>
            <DataTable columns={["Shielding electrons", "Contribution per electron", "Illustration"]} rows={[
              ["other electrons in the same nd or nf group", "0.35", "nine companion 3d electrons screen a 3d test electron by 9 × 0.35"],
              ["all electrons in groups to the left", "1.00", "1s through 3p electrons fully count for a 3d test electron"],
              ["electrons in groups to the right", "0", "4s electrons are not counted for a 3d test electron in the simplified rule"],
            ]} accent={T.f} />

            <H2>5 · Slater Calculations — From Basic to JEE Advanced</H2>
            <WorkedExample number="Z1" title="Helium 1s electron" question="Estimate Zeff for one 1s electron of He." reasoning={["Only the other 1s electron shields the test electron.", "For 1s, its contribution is 0.30.", "Zeff = 2 − 0.30."]} answer="Zeff = 1.70." accent={T.cyan} />
            <WorkedExample number="Z2" title="Lithium 2s electron" question="Estimate Zeff for the valence electron of Li." reasoning={["Li = (1s²)(2s¹).", "There is no same-group companion electron.", "The two 1s electrons contribute 2 × 0.85 = 1.70."]} answer="Zeff = 3 − 1.70 = 1.30." accent={T.s} />
            <WorkedExample number="Z3" title="Carbon 2p electron" question="Estimate Zeff for one 2p electron in C." reasoning={["C = (1s²)(2s²2p²).", "Three other n = 2 electrons contribute 3 × 0.35 = 1.05.", "Two 1s electrons contribute 2 × 0.85 = 1.70."]} answer="σ = 2.75; Zeff = 6 − 2.75 = 3.25." accent={T.gold} />
            <WorkedExample number="Z4" title="Sodium 3s electron" question="Estimate Zeff for the 3s electron of Na." reasoning={["Na = (1s²)(2s²2p⁶)(3s¹).", "Eight n−1 electrons contribute 8 × 0.85 = 6.80.", "Two n−2 electrons contribute 2 × 1.00 = 2.00."]} answer="σ = 8.80; Zeff = 11 − 8.80 = 2.20." accent={T.cyan} />
            <WorkedExample number="Z5" title="Chlorine 3p electron" question="Estimate Zeff for one 3p electron of Cl." reasoning={["Cl = (1s²)(2s²2p⁶)(3s²3p⁵).", "Six same-group electrons contribute 6 × 0.35 = 2.10.", "Eight n−1 electrons contribute 6.80 and two lower electrons contribute 2.00."]} answer="σ = 10.90; Zeff = 17 − 10.90 = 6.10." accent={T.p} />
            <WorkedExample number="Z6" title="Potassium 4s electron" question="Estimate Zeff for the 4s electron of K." reasoning={["K = [Ar]4s¹.", "Eight n−1 (3s,3p) electrons contribute 6.80.", "Ten n−2 and lower electrons contribute 10.00."]} answer="σ = 16.80; Zeff = 19 − 16.80 = 2.20." accent={T.s} />
            <WorkedExample number="Z7" title="Iron: 3d electron" question="Estimate Zeff for one 3d electron in Fe, [Ar]3d⁶4s²." reasoning={["Five other 3d electrons contribute 5 × 0.35 = 1.75.", "All 18 electrons in groups to the left contribute 18.00.", "The 4s electrons to the right are not counted for this test electron."]} answer="σ = 19.75; Zeff(3d) = 26 − 19.75 = 6.25." accent={T.d} />
            <WorkedExample number="Z8" title="Iron: 4s electron" question="Estimate Zeff for one 4s electron in Fe using the simplified ns/np rule." reasoning={["One other 4s electron contributes 0.35.", "Fourteen electrons in the n−1 shell (3s²3p⁶3d⁶) contribute 14 × 0.85 = 11.90.", "Ten lower-shell electrons contribute 10.00."]} answer="σ = 22.25; Zeff(4s) = 3.75. The estimate helps show why the outer 4s electron is more weakly held." accent={T.d} />
            <WorkedExample number="Z9" title="Gallium 4p electron" question="Estimate Zeff for the 4p electron in Ga." reasoning={["Ga = (1s²)(2s²2p⁶)(3s²3p⁶)(3d¹⁰)(4s²4p¹).", "Two same-group 4s electrons contribute 0.70.", "Eighteen n−1 electrons contribute 15.30; ten lower electrons contribute 10.00."]} answer="σ = 26.00; Zeff = 31 − 26.00 = 5.00." accent={T.f} />

            <H2>6 · Approximate Valence-Electron Zeff Across Period 2</H2>
            <DataTable columns={["Element", "Li", "Be", "B", "C", "N", "O", "F", "Ne"]} rows={[
              ["Slater Zeff", "1.30", "1.95", "2.60", "3.25", "3.90", "4.55", "5.20", "5.85"],
              ["Broad result", "largest radius", "contracts", "contracts", "contracts", "high IE", "pairing special case", "highest EN", "closed shell"],
            ]} accent={T.gold} />

            <H2>7 · Applications of Effective Nuclear Charge</H2>
            <DataTable columns={["Application", "How Zeff is used", "Example"]} rows={[
              ["Atomic radius", "greater Zeff contracts electrons in the same shell", "Li > Be > B > C > N > O > F"],
              ["Ionic radius", "same electron count plus larger Z gives smaller ion", "O²⁻ > F⁻ > Na⁺ > Mg²⁺ > Al³⁺"],
              ["Ionization enthalpy", "greater attraction increases electron-removal energy", "IE generally rises across a period"],
              ["Electron gain enthalpy", "greater attraction can make electron addition more exothermic", "trend becomes more negative toward halogens, subject to crowding"],
              ["Electronegativity", "stronger attraction for valence density raises χ", "F > Cl > Br > I"],
              ["d- and f-block contraction", "poor d/f shielding permits Zeff to rise", "Ga contraction; La→Lu contraction; Zr≈Hf"],
              ["Acidity and polarizing power", "small high-Zeff cations polarize anions strongly", "Al³⁺ compounds are more covalent and acidic than Na⁺ compounds"],
              ["Orbital energy", "greater Zeff stabilizes and lowers an orbital", "penetrating s orbitals lie below p orbitals of the same n"],
            ]} accent={T.cyan} />

            <H2>8 · Limitations — Where the Simple Zeff Model Fails</H2>
            <DataTable columns={["Limitation", "Why the model is incomplete", "Practical rule"]} rows={[
              ["Zeff is not directly observable as one unique number", "it depends on the chosen orbital and the computational definition", "state the method, such as Slater, when quoting a number"],
              ["Fixed coefficients are empirical", "real shielding changes continuously with radial distribution", "use Slater values for trends, not high-precision prediction"],
              ["Electron correlation is simplified", "electrons do not repel one another as independent average clouds", "pairing and exchange effects must be discussed separately"],
              ["Poor heavy-element treatment", "relativistic effects strongly alter 6s, 6p, 5d and 4f/5f orbitals", "use measured data or relativistic calculations for heavy atoms"],
              ["Chemical environment is omitted", "oxidation state, ligands and bonding change orbital populations", "atomic Slater Zeff is not automatically the Zeff inside every compound"],
              ["No single-property prediction", "radius, IE and reactivity also depend on distance, configuration and medium", "combine Zeff with shell number, pairing, hydration and bonding"],
            ]} accent={T.p} />
          </div>
      <div
        data-integration="SectionZeffSlater-periodicity-generated-corpus-phd-v9"
        style={{ marginTop: 34 }}
      >
        <PeriodicTableDeepAdditions topic="zeff" />
      </div>
    </>
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
      { label: "Aqueous reducing behaviour", order: "Li is unusually strong because Li⁺ is very strongly hydrated", note: "do not rank from gas-phase IE alone" },
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
    <>
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
      <div
        data-integration="SectionFamilies-periodicity-generated-corpus-phd-v9"
        style={{ marginTop: 34 }}
      >
        <PeriodicTableDeepAdditions topic="families" />
      </div>
    </>
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
    <>
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
                    <div style={{ fontFamily: T.sans, fontSize: 13.5, fontWeight: 700, color: T.text }}>{c.ion}</div>
                    <div style={{ fontFamily: T.sans, fontSize: 11.5, color: T.textDim }}>{c.colour}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
      <div
        data-integration="SectionDBlockTrends-periodicity-generated-corpus-phd-v9"
        style={{ marginTop: 34 }}
      >
        <PeriodicTableDeepAdditions topic="dblock" />
      </div>
    </>
  );
}

/* =============================================================================
   SECTION — Electronic Configuration, Blocks and Position Decoding
   ========================================================================== */
const configurationRules = [
  { title: "Period", body: "The largest principal quantum number n present in the ground-state configuration gives the period. Ions are located from the parent atom, not from the ion configuration.", accent: T.cyan, tag: "HIGHEST n" },
  { title: "Block", body: "The subshell receiving the differentiating electron identifies the s, p, d or f block. Helium is structurally s-block but chemically placed with noble gases.", accent: T.f, tag: "LAST SUBSHELL" },
  { title: "s-block group", body: "ns¹ gives group 1 and ns² gives group 2. Hydrogen is a special case because its chemistry is not that of an alkali metal.", accent: T.s, tag: "GROUP 1–2" },
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

const commonConfigSpecialCases = [
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

export function SectionConfigurationOverview() {
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
      <Callout kind="special" title="Do not locate an ion from the ion configuration">
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

      <H2>4 · Configuration Special Cases: Use Actual Configurations, Not Memorised Aufbau Alone</H2>
      <P>
        The Aufbau order is a powerful first approximation. In transition and inner-transition atoms, nearby subshells differ only slightly in energy, so exchange energy, pairing, relativistic effects and the final multi-electron balance can produce special cases.
      </P>
      <DataTable columns={["Element", "Observed ground state", "Main reason"]} rows={commonConfigSpecialCases} accent={T.gold} />
      <Callout kind="note" title="Exam-safe rule">
        For position and oxidation-state questions, always use the accepted ground-state configuration given in standard data. Avoid inventing a universal “half-filled/full-filled” explanation for every special case; several heavier elements require a more complete orbital-energy explanation.
      </Callout>

      <H2>5 · Special Positions of Hydrogen and Helium</H2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 14 }}>
        <Card accent={T.s}>
          <H3>Hydrogen</H3>
          <P>Configuration 1s¹ resembles group 1, and H can form H⁺. Yet it is a non-metal, exists as H₂, forms H⁻ with electropositive metals and needs one electron for a noble-gas configuration—features reminiscent of group 17.</P>
          <Callout kind="special">Hydrogen is placed above group 1 for configuration convenience, but it is chemically unique and should not be treated as a normal alkali metal.</Callout>
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
   ELECTRONIC CONFIGURATION — IN-DEPTH MOBILE-FIRST ADDITION
   Integrated from the verified professional notes supplied for this chapter.
   Student-facing content only: theory, derivations, tables, examples and uses.
   ========================================================================== */

const ecCapacityRows = [
  ["s", "0", "1", "2"],
  ["p", "1", "3", "6"],
  ["d", "2", "5", "10"],
  ["f", "3", "7", "14"],
];

const ecPBoxRows = [
  ["p¹", "[↑][ ][ ]", "1", "0", "partly occupied"],
  ["p²", "[↑][↑][ ]", "2", "0", "partly occupied"],
  ["p³", "[↑][↑][↑]", "3", "0", "exactly half-filled"],
  ["p⁴", "[↑↓][↑][↑]", "2", "1", "pairing begins"],
  ["p⁵", "[↑↓][↑↓][↑]", "1", "2", "one vacancy remains"],
  ["p⁶", "[↑↓][↑↓][↑↓]", "0", "3", "completely filled"],
];

const ecPairingRows = [
  ["p¹", "[↑][ ][ ]", "0", "1"],
  ["p²", "[↑][↑][ ]", "0", "2"],
  ["p³", "[↑][↑][↑]", "0", "3"],
  ["p⁴", "[↑↓][↑][↑]", "1", "2"],
  ["p⁵", "[↑↓][↑↓][↑]", "2", "1"],
  ["p⁶", "[↑↓][↑↓][↑↓]", "3", "0"],
  ["d⁴", "[↑][↑][↑][↑][ ]", "0", "4"],
  ["d⁵", "[↑][↑][↑][↑][↑]", "0", "5"],
  ["d⁶", "[↑↓][↑][↑][↑][↑]", "1", "4"],
  ["d⁸", "[↑↓][↑↓][↑↓][↑][↑]", "3", "2"],
  ["d¹⁰", "[↑↓][↑↓][↑↓][↑↓][↑↓]", "5", "0"],
];

const ecPExchangeRows = [
  ["p¹", "1", "0", "0", "0", "0"],
  ["p²", "2", "0", "0", "1", "−K"],
  ["p³", "3", "0", "0", "3", "−3K"],
  ["p⁴", "3", "1", "1", "3", "P − 3K"],
  ["p⁵", "3", "2", "2", "4", "2P − 4K"],
  ["p⁶", "3", "3", "3", "6", "3P − 6K"],
];

const ecDExchangeRows = [
  ["d¹", "1 single", "1", "0", "0", "0", "0"],
  ["d²", "2 singles", "2", "0", "0", "1", "−K"],
  ["d³", "3 singles", "3", "0", "0", "3", "−3K"],
  ["d⁴", "4 singles", "4", "0", "0", "6", "−6K"],
  ["d⁵", "5 singles", "5", "0", "0", "10", "−10K"],
  ["d⁶", "1 pair + 4 singles", "5", "1", "1", "10", "P − 10K"],
  ["d⁷", "2 pairs + 3 singles", "5", "2", "2", "11", "2P − 11K"],
  ["d⁸", "3 pairs + 2 singles", "5", "3", "3", "13", "3P − 13K"],
  ["d⁹", "4 pairs + 1 single", "5", "4", "4", "16", "4P − 16K"],
  ["d¹⁰", "5 pairs", "5", "5", "5", "20", "5P − 20K"],
];

const ecSpecialRows = [
  ["Cr, 24", "[Ar] 3d⁴ 4s²", "[Ar] 3d⁵ 4s¹", "near-degenerate 3d/4s; lower total energy"],
  ["Cu, 29", "[Ar] 3d⁹ 4s²", "[Ar] 3d¹⁰ 4s¹", "filled 3d subshell and total-energy balance"],
  ["Nb, 41", "[Kr] 4d³ 5s²", "[Kr] 4d⁴ 5s¹", "close 4d/5s energies"],
  ["Mo, 42", "[Kr] 4d⁴ 5s²", "[Kr] 4d⁵ 5s¹", "close 4d/5s energies"],
  ["Ru, 44", "[Kr] 4d⁶ 5s²", "[Kr] 4d⁷ 5s¹", "actual orbital-energy balance"],
  ["Rh, 45", "[Kr] 4d⁷ 5s²", "[Kr] 4d⁸ 5s¹", "actual orbital-energy balance"],
  ["Pd, 46", "[Kr] 4d⁸ 5s²", "[Kr] 4d¹⁰ 5s⁰", "closed 4d subshell; empty 5s"],
  ["Ag, 47", "[Kr] 4d⁹ 5s²", "[Kr] 4d¹⁰ 5s¹", "filled 4d subshell"],
  ["Pt, 78", "[Xe] 4f¹⁴ 5d⁸ 6s²", "[Xe] 4f¹⁴ 5d⁹ 6s¹", "orbital and relativistic effects"],
  ["Au, 79", "[Xe] 4f¹⁴ 5d⁹ 6s²", "[Xe] 4f¹⁴ 5d¹⁰ 6s¹", "filled 5d and relativistic effects"],
  ["Rg, 111", "[Rn] 5f¹⁴ 6d⁹ 7s²", "[Rn] 5f¹⁴ 6d¹⁰ 7s¹", "commonly tabulated predicted configuration"],
];

const ecFBlockRows = [
  ["La, 57", "[Xe] 5d¹ 6s²", "5d occupation before regular 4f sequence"],
  ["Ce, 58", "[Xe] 4f¹ 5d¹ 6s²", "mixed 4f/5d occupation"],
  ["Gd, 64", "[Xe] 4f⁷ 5d¹ 6s²", "4f⁷ plus one 5d electron"],
  ["Ac, 89", "[Rn] 6d¹ 7s²", "5f⁰"],
  ["Th, 90", "[Rn] 6d² 7s²", "5f⁰"],
  ["Pa, 91", "[Rn] 5f² 6d¹ 7s²", "mixed 5f/6d occupation"],
  ["U, 92", "[Rn] 5f³ 6d¹ 7s²", "mixed 5f/6d occupation"],
  ["Np, 93", "[Rn] 5f⁴ 6d¹ 7s²", "mixed 5f/6d occupation"],
  ["Cm, 96", "[Rn] 5f⁷ 6d¹ 7s²", "5f⁷ plus one 6d electron"],
];

const ecIonRows = [
  ["Mg → Mg⁺ → Mg²⁺", "12 → 11 → 10", "[Ne]3s² → [Ne]3s¹ → [Ne]"],
  ["Al → Al⁺ → Al²⁺ → Al³⁺", "13 → 12 → 11 → 10", "[Ne]3s²3p¹ → [Ne]3s² → [Ne]3s¹ → [Ne]"],
  ["Fe → Fe²⁺ → Fe³⁺", "26 → 24 → 23", "[Ar]3d⁶4s² → [Ar]3d⁶ → [Ar]3d⁵"],
  ["Cr → Cr⁺ → Cr²⁺ → Cr³⁺", "24 → 23 → 22 → 21", "[Ar]3d⁵4s¹ → [Ar]3d⁵ → [Ar]3d⁴ → [Ar]3d³"],
  ["Cu → Cu⁺ → Cu²⁺", "29 → 28 → 27", "[Ar]3d¹⁰4s¹ → [Ar]3d¹⁰ → [Ar]3d⁹"],
  ["N → N³⁻", "7 → 10", "1s²2s²2p³ → 1s²2s²2p⁶ = [Ne]"],
  ["O → O⁻ → O²⁻", "8 → 9 → 10", "1s²2s²2p⁴ → 2p⁵ → 2p⁶"],
  ["Cl → Cl⁻", "17 → 18", "[Ne]3s²3p⁵ → [Ar]"],
];

const ecIsoelectronicRows = [
  ["N³⁻", "7 + 3", "10", "[Ne]"],
  ["O²⁻", "8 + 2", "10", "[Ne]"],
  ["F⁻", "9 + 1", "10", "[Ne]"],
  ["Ne", "10", "10", "[Ne]"],
  ["Na⁺", "11 − 1", "10", "[Ne]"],
  ["Mg²⁺", "12 − 2", "10", "[Ne]"],
  ["Al³⁺", "13 − 3", "10", "[Ne]"],
];

const ecMagneticRows = [
  ["N", "2p³", "[↑][↑][↑]", "3", "paramagnetic"],
  ["O", "2p⁴", "[↑↓][↑][↑]", "2", "paramagnetic"],
  ["F⁻", "2p⁶", "[↑↓][↑↓][↑↓]", "0", "diamagnetic"],
  ["Fe²⁺ (free ion)", "3d⁶", "[↑↓][↑][↑][↑][↑]", "4", "paramagnetic"],
  ["Fe³⁺ (free ion)", "3d⁵", "[↑][↑][↑][↑][↑]", "5", "paramagnetic"],
  ["Cu⁺", "3d¹⁰", "five paired d orbitals", "0", "diamagnetic"],
  ["Cu²⁺", "3d⁹", "four pairs + one single", "1", "paramagnetic"],
];

export function OrbitalBoxStrip({
  label,
  boxes,
  accent = T.cyan,
}: {
  label: string;
  boxes: string[];
  accent?: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 9,
        flexWrap: "wrap",
        margin: "8px 0",
      }}
    >
      <span style={{ minWidth: 44, color: accent, fontFamily: T.mono, fontWeight: 800 }}>{label}</span>
      <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
        {boxes.map((box, index) => (
          <span
            key={`${label}-${index}`}
            style={{
              width: 42,
              minHeight: 32,
              display: "grid",
              placeItems: "center",
              border: `1.5px solid ${accent}`,
              borderRadius: 7,
              background: `${accent}10`,
              color: T.text,
              fontFamily: T.mono,
              fontSize: 15,
              fontWeight: 800,
            }}
          >
            {box}
          </span>
        ))}
      </div>
    </div>
  );
}

export function ElectronicConfigurationDeepDive() {
  const jumpLinks = [
    ["ec-foundations", "Foundations"],
    ["ec-rules", "Filling rules"],
    ["ec-capacity", "Capacity"],
    ["ec-energy", "Orbital energy"],
    ["ec-ions", "Atoms & ions"],
    ["ec-stability", "Half/filled"],
    ["ec-pairing", "Pairing"],
    ["ec-exchange", "Exchange"],
    ["ec-special", "Special ground states"],
    ["ec-applications", "Applications"],
    ["ec-revision", "Rapid revision"],
  ];

  return (
    <section data-ec-deep-dive="periodicity-mobile-ec-v13" style={{ marginTop: 26 }}>
      <SectionIntro
        eyebrow="Electronic configuration · complete in-depth module"
        title="From Orbital Filling to Chemical Prediction"
        summary="This extended module develops electronic configuration from first principles, distinguishes filling order from actual orbital energy, explains pairing and exchange counting, treats chromium and copper correctly, lists important special ground states, and applies configuration to ions, size, magnetism, oxidation-state reasoning and periodic position."
        accent={T.f}
      />

      <nav
        className="ecJumpNav"
        aria-label="Electronic configuration section links"
        style={{
          display: "flex",
          gap: 8,
          overflowX: "auto",
          padding: "4px 2px 12px",
          marginBottom: 10,
          scrollbarWidth: "thin",
        }}
      >
        {jumpLinks.map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            style={{
              flex: "0 0 auto",
              textDecoration: "none",
              border: `1px solid ${T.border}`,
              background: T.surface,
              color: T.textDim,
              borderRadius: 999,
              padding: "8px 11px",
              fontFamily: T.sans,
              fontSize: 11.5,
              fontWeight: 800,
              whiteSpace: "nowrap",
            }}
          >
            {label}
          </a>
        ))}
      </nav>

      <Card accent={T.cyan}>
        <H2 id="ec-foundations">1 · Meaning and Ways of Representation</H2>
        <P>
          <b style={{ color: T.cyan }}>Electronic configuration</b> is the distribution of electrons among the shells,
          subshells and orbitals of an atom or ion. A term such as 3p⁴ identifies the principal shell
          (<i>n</i> = 3), the subshell (<i>p</i>) and the number of electrons in that subshell (4).
        </P>
        <DataTable
          columns={["Representation", "Sodium, Z = 11"]}
          rows={[
            ["Expanded configuration", "1s² 2s² 2p⁶ 3s¹"],
            ["Noble-gas configuration", "[Ne] 3s¹"],
            ["Orbital-box form", "1s[↑↓] 2s[↑↓] 2p[↑↓][↑↓][↑↓] 3s[↑]"],
            ["Shell distribution", "2, 8, 1"],
          ]}
          accent={T.cyan}
        />
        <Callout kind="note" title="Reliable writing sequence">
          Count the electrons, choose the filling sequence, apply Pauli and Hund, check the observed ground state where
          close-energy subshells are involved, and only then abbreviate the inner core with a noble-gas symbol.
        </Callout>
      </Card>

      <Card accent={T.gold}>
        <H2 id="ec-rules">2 · Principles Governing the Ground-State Arrangement</H2>
        <H3>Aufbau principle and the Madelung guide</H3>
        <P>
          In the ground state, electrons occupy available orbitals in the arrangement that minimises the
          <b style={{ color: T.gold }}> total energy of the atom</b>, while obeying Pauli exclusion and Hund&apos;s rule.
          For introductory prediction, the Madelung rule orders orbitals by <i>n</i> + ℓ.
        </P>
        <Formula>Larger (n + ℓ) → later filling; for equal (n + ℓ), larger n → later filling</Formula>
        <DataTable
          columns={["Orbital", "n", "ℓ", "n + ℓ", "Predicted order comment"]}
          rows={[
            ["2s", "2", "0", "2", "first among these"],
            ["2p", "2", "1", "3", "before 3s because n is smaller"],
            ["3s", "3", "0", "3", "after 2p"],
            ["3p", "3", "1", "4", "before 4s because n is smaller"],
            ["4s", "4", "0", "4", "after 3p"],
            ["3d", "3", "2", "5", "after 4s in the usual filling sequence"],
          ]}
          accent={T.gold}
        />
        <Formula>
          1s &lt; 2s &lt; 2p &lt; 3s &lt; 3p &lt; 4s &lt; 3d &lt; 4p &lt; 5s &lt; 4d &lt; 5p &lt; 6s &lt; 4f &lt; 5d &lt; 6p &lt; 7s &lt; 5f &lt; 6d &lt; 7p
        </Formula>
        <Callout kind="warn" title="Scientific limitation">
          The (n + ℓ) rule is a filling heuristic, not a universal orbital-energy law. Cross-shell ordering changes
          with nuclear charge, electron population and ion formation.
        </Callout>
        <H3>Pauli exclusion principle</H3>
        <P>
          No two electrons in one atom can possess the same four quantum numbers
          (<i>n</i>, ℓ, <i>m</i><sub>ℓ</sub>, <i>m</i><sub>s</sub>). One orbital therefore holds at most two electrons,
          and the two spin projections must be opposite.
        </P>
        <Formula>1s² → (1, 0, 0, +½) and (1, 0, 0, −½)</Formula>
        <H3>Hund&apos;s rule of maximum multiplicity</H3>
        <P>
          Within degenerate orbitals, electrons occupy separate orbitals with parallel spins before pairing begins.
          Reversing every arrow gives an equivalent diagram, and left-to-right box placement is only a drawing choice.
        </P>
        <OrbitalBoxStrip label="p⁴" boxes={["↑↓", "↑", "↑"]} accent={T.p} />
        <Formula>Spin multiplicity: M = 2S + 1</Formula>
        <P>
          For p⁴ in its Hund arrangement, two electrons are unpaired, so <i>S</i> = 1 and <i>M</i> = 3:
          the spin multiplicity is triplet.
        </P>
      </Card>

      <Card accent={T.d}>
        <H2 id="ec-capacity">3 · Orbitals, Subshells and Electron Capacity</H2>
        <DataTable
          columns={["Subshell", "ℓ", "Number of orbitals, 2ℓ + 1", "Maximum electrons, 2(2ℓ + 1)"]}
          rows={ecCapacityRows}
          accent={T.d}
        />
        <div style={{ display: "grid", gap: 8, marginTop: 12 }}>
          <Formula>Orbitals in a subshell = 2ℓ + 1</Formula>
          <Formula>Maximum electrons in a subshell = 2(2ℓ + 1)</Formula>
          <Formula>Subshells in the nth shell = n</Formula>
          <Formula>Orbitals in the nth shell = n²</Formula>
          <Formula>Maximum electrons in the nth shell = 2n²</Formula>
        </div>
      </Card>

      <Card accent={T.s}>
        <H2 id="ec-energy">4 · Orbital Energy: One-Electron and Multi-Electron Species</H2>
        <H3>Hydrogen-like species</H3>
        <P>
          H, He⁺, Li²⁺ and Be³⁺ contain one electron. In the non-relativistic Coulomb model, energy depends only on
          <i> n</i>; orbitals with the same <i>n</i> are degenerate.
        </P>
        <Formula>E<sub>n</sub> = −13.6 Z²/n² eV</Formula>
        <Formula>1s &lt; 2s = 2p &lt; 3s = 3p = 3d &lt; 4s = 4p = 4d = 4f</Formula>
        <H3>Multi-electron atoms and ions</H3>
        <P>
          Electron–electron repulsion, shielding and penetration remove hydrogen-like degeneracy. For orbitals within
          one principal shell, the usual penetration-based order is approximately:
        </P>
        <Formula>ns &lt; np &lt; nd &lt; nf</Formula>
        <P>
          Cross-shell order is not fixed. The 4s subshell may be populated before 3d in a neutral atom, but common
          transition-metal cations normally lose 4s electrons before 3d electrons because the relative orbital energies
          have changed after occupation.
        </P>
      </Card>

      <Card accent={T.p}>
        <H2 id="ec-ions">5 · Writing Configurations of Neutral Atoms and Ions</H2>
        <H3>Neutral atoms</H3>
        <DataTable
          columns={["Species", "Ground-state electronic configuration"]}
          rows={[
            ["Mn", "[Ar] 3d⁵ 4s²"],
            ["Fe", "[Ar] 3d⁶ 4s²"],
            ["P", "[Ne] 3s² 3p³"],
            ["O", "[He] 2s² 2p⁴"],
          ]}
          accent={T.p}
        />
        <H3>Cations: remove from the occupied subshell with highest n first</H3>
        <P>
          For common transition-metal ions, remove <i>ns</i> electrons before (<i>n</i> − 1)d electrons. The order used
          to write a neutral configuration is not automatically the order of ionisation.
        </P>
        <DataTable columns={["Sequence", "Electron count", "Configuration sequence"]} rows={ecIonRows.slice(0, 5)} accent={T.gold} />
        <H3>Anions: add to the lowest available orbital</H3>
        <P>Add electrons one at a time while maintaining Pauli exclusion and Hund&apos;s rule at every stage.</P>
        <DataTable columns={["Sequence", "Electron count", "Configuration sequence"]} rows={ecIonRows.slice(5)} accent={T.d} />
      </Card>

      <Card accent={T.f}>
        <H2 id="ec-stability">6 · Half-Filled and Completely Filled Subshells</H2>
        <P>
          Half-filled and completely filled subshells often appear in favourable ground-state arrangements.
          Their behaviour reflects the combined influence of orbital energies, pairing cost, exchange, shielding,
          penetration and electron correlation. Visual symmetry is useful, but it is not an independent universal law.
        </P>
        <DataTable
          columns={["Subshell", "Half-filled form", "Completely filled form", "Box pattern"]}
          rows={[
            ["p", "p³", "p⁶", "p³: [↑][↑][↑] · p⁶: [↑↓][↑↓][↑↓]"],
            ["d", "d⁵", "d¹⁰", "d⁵: five singles · d¹⁰: five pairs"],
            ["f", "f⁷", "f¹⁴", "f⁷: seven singles · f¹⁴: seven pairs"],
          ]}
          accent={T.f}
        />
        <DataTable columns={["Configuration", "Orbital boxes", "Unpaired e⁻", "Pairs", "Description"]} rows={ecPBoxRows} accent={T.p} />
      </Card>

      <Card accent={T.gold}>
        <H2 id="ec-pairing">7 · Pairing Energy: Meaning and Correct Counting</H2>
        <P>
          Pairing energy, <i>P</i>, is the positive energetic cost associated with placing a second electron in an
          already occupied orbital. It reflects added interelectronic repulsion and loss of some exchange advantage.
        </P>
        <Formula>Pairing contribution = N<sub>pair</sub> × P</Formula>
        <P>
          <b style={{ color: T.gold }}>N<sub>pair</sub></b> counts doubly occupied orbitals—not electrons.
          Three doubly occupied orbitals mean N<sub>pair</sub> = 3 and six paired electrons. The value of <i>P</i>
          is not identical for every atom, ion, subshell or chemical environment.
        </P>
        <DataTable columns={["Configuration", "Hund distribution", "Npair", "Unpaired e⁻"]} rows={ecPairingRows} accent={T.gold} />
      </Card>

      <Card accent={T.cyan}>
        <H2 id="ec-exchange">8 · Exchange Stabilisation: Derivation and Complete Counting</H2>
        <P>
          Exchange stabilisation is associated with same-spin electron pairs in different orbitals of the same
          degenerate subshell. In the elementary model, every possible same-spin pair contributes one exchange pair.
        </P>
        <Formula>N<sub>exchange</sub> = C(n↑, 2) + C(n↓, 2)</Formula>
        <Formula>N<sub>exchange</sub> = n↑(n↑ − 1)/2 + n↓(n↓ − 1)/2</Formula>
        <Formula>E<sub>approx</sub> = N<sub>pair</sub>P − N<sub>exchange</sub>K</Formula>
        <Callout kind="warn" title="Do not over-interpret">
          This expression is qualitative bookkeeping, not exact total atomic energy. Actual energy also includes
          orbital terms, Coulomb repulsion, unequal exchange integrals, correlation and relativistic contributions.
        </Callout>
        <H3>Complete pⁿ exchange table</H3>
        <DataTable columns={["pⁿ", "n↑", "n↓", "Npair", "Nexchange", "Approximate term"]} rows={ecPExchangeRows} accent={T.p} />
        <H3>Complete dⁿ exchange table</H3>
        <DataTable columns={["dⁿ", "Hund distribution", "n↑", "n↓", "Npair", "Nexchange", "Approximate term"]} rows={ecDExchangeRows} accent={T.d} />
        <WorkedExample
          number="A"
          title="Exchange count for 3d⁴"
          question="Find the pairing count, exchange count and elementary bookkeeping term for the Hund arrangement of 3d⁴."
          reasoning={[
            "Hund distribution is [↑][↑][↑][↑][ ].",
            "No orbital is doubly occupied, so Npair = 0.",
            "n↑ = 4 and n↓ = 0.",
            "Nexchange = 4(4 − 1)/2 + 0 = 6.",
          ]}
          answer="Eapprox = 0P − 6K = −6K."
          accent={T.cyan}
        />
        <WorkedExample
          number="B"
          title="Exchange count for 3d⁸"
          question="Find the pairing count, exchange count and elementary bookkeeping term for 3d⁸."
          reasoning={[
            "Hund distribution is [↑↓][↑↓][↑↓][↑][↑].",
            "Three orbitals are doubly occupied, so Npair = 3.",
            "n↑ = 5 and n↓ = 3.",
            "Nexchange = 5(5 − 1)/2 + 3(3 − 1)/2 = 10 + 3 = 13.",
          ]}
          answer="Eapprox = 3P − 13K."
          accent={T.d}
        />
      </Card>

      <Card accent={T.p}>
        <H2 id="ec-special">9 · Correct Interpretation of Special Ground-State Configurations</H2>
        <P>
          Do not declare p³ absolutely &quot;more stable&quot; than p⁴ or d⁵ absolutely &quot;more stable&quot; than d⁶
          without qualification. The safe statement is relative stabilisation within a comparable sequence.
        </P>
        <DataTable
          columns={["Comparison", "Elementary bookkeeping", "Safe conclusion"]}
          rows={[
            ["p³ vs p⁴", "p³: −3K; p⁴: P − 3K", "The fourth electron begins pairing; p³ is locally favourable."],
            ["d⁵ vs d⁶", "d⁵: −10K; d⁶: P − 10K", "The sixth d electron begins pairing; d⁵ is locally favourable."],
            ["d⁹ vs d¹⁰", "d⁹: 4P − 16K; d¹⁰: 5P − 20K", "Completion adds a pair and four exchanges; total energy decides."],
          ]}
          accent={T.p}
        />
        <Callout kind="note" title="High-value check">
          A half-filled label is not universal. W is [Xe] 4f¹⁴ 5d⁴ 6s², not 5d⁵ 6s¹; Tc is [Kr] 4d⁵ 5s².
        </Callout>
        <H3>Chromium, Z = 24</H3>
        <DataTable
          columns={["Model", "Configuration", "3d boxes", "Valence pairs", "d exchanges"]}
          rows={[
            ["Simple prediction", "[Ar] 3d⁴ 4s²", "[↑][↑][↑][↑][ ]", "1 (4s²)", "C(4,2) = 6"],
            ["Observed ground state", "[Ar] 3d⁵ 4s¹", "[↑][↑][↑][↑][↑]", "0", "C(5,2) = 10"],
          ]}
          accent={T.cyan}
        />
        <P>
          Moving one 4s electron into 3d removes the 4s pair and raises the elementary d exchange count from 6 to 10.
          The exact ground state follows from the complete total-energy balance—not exchange counting alone.
        </P>
        <H3>Copper, Z = 29</H3>
        <DataTable
          columns={["Model", "Configuration", "3d boxes", "Total valence pairs", "d exchanges"]}
          rows={[
            ["Simple prediction", "[Ar] 3d⁹ 4s²", "[↑↓][↑↓][↑↓][↑↓][↑]", "5", "16"],
            ["Observed ground state", "[Ar] 3d¹⁰ 4s¹", "[↑↓][↑↓][↑↓][↑↓][↑↓]", "5", "20"],
          ]}
          accent={T.gold}
        />
        <P>
          Copper keeps five total valence pairs, but completing 3d raises the d exchange count from 16 to 20.
          Actual 3d/4s energies and electron correlation are also essential.
        </P>
        <Callout kind="warn" title="No invented numerical total energy">
          Terms such as −6K or −10K are qualitative. Do not present them as measured aggregate energies without P, K
          and the orbital-energy difference.
        </Callout>
        <H3>Important special ground states</H3>
        <DataTable columns={["Element", "Simple prediction", "Ground-state configuration", "Reason / status"]} rows={ecSpecialRows} accent={T.f} />
        <H3>Selected f-block configurations</H3>
        <DataTable columns={["Element", "Ground-state configuration", "Memory cue"]} rows={ecFBlockRows} accent={T.f} />
        <Callout kind="note" title="Compact memory chains">
          d-block: Cr–Cu | Nb–Mo–Ru–Rh–Pd–Ag | Pt–Au | Rg*. f-block: La–Ce–Gd | Ac–Th–Pa–U–Np–Cm.
          Learn the actual configuration first; use the chain only for recall.
        </Callout>
      </Card>

      <Card accent={T.d}>
        <H2 id="ec-applications">10 · Applications of Electronic Configuration</H2>
        <H3>Electron count for ions</H3>
        <Formula>Electrons in a cation = Z − positive charge</Formula>
        <Formula>Electrons in an anion = Z + magnitude of negative charge</Formula>
        <H3>Isoelectronic species and ionic radius</H3>
        <P>
          Isoelectronic species have the same electron count and configuration but different nuclear charge. Within a
          simple isoelectronic series, greater Z attracts the same cloud more strongly and generally gives smaller radius.
        </P>
        <DataTable columns={["Species", "Electron calculation", "Total e⁻", "Configuration"]} rows={ecIsoelectronicRows} accent={T.d} />
        <Formula>N³⁻ &gt; O²⁻ &gt; F⁻ &gt; Ne &gt; Na⁺ &gt; Mg²⁺ &gt; Al³⁺ (decreasing radius)</Formula>
        <H3>Paired, unpaired and magnetic electrons</H3>
        <DataTable columns={["Species", "Outer configuration", "Orbital pattern", "Unpaired e⁻", "Nature"]} rows={ecMagneticRows} accent={T.cyan} />
        <Formula>μ<sub>so</sub> = √[n(n + 2)] BM</Formula>
        <Callout kind="warn" title="Coordination-compound caution">
          Ligand-field splitting can change the number of unpaired electrons. A free-ion Hund diagram must not be
          transferred blindly to every complex.
        </Callout>
        <H3>Configuration-based deductions</H3>
        <ul style={{ margin: "8px 0 0", paddingLeft: 22, display: "grid", gap: 7, color: T.textDim, lineHeight: 1.65 }}>
          <li>Valence configuration helps predict oxidation states and bonding tendencies.</li>
          <li>Noble-gas configurations rationalise simple ions such as Na⁺, Mg²⁺, F⁻ and O²⁻.</li>
          <li>Unpaired-electron count predicts magnetic behaviour and the spin-only moment.</li>
          <li>Isoelectronic comparison combines electron count with nuclear charge to predict size order.</li>
          <li>Transition-metal ions must be written after removing ns electrons.</li>
          <li>The neutral atom—not its temporary ion—determines permanent periodic-table position.</li>
        </ul>
      </Card>

      <Card accent={T.gold}>
        <H2 id="ec-revision">11 · Highest-Priority Revision Capsule</H2>
        <div style={{ display: "grid", gap: 9 }}>
          {[
            "The (n + ℓ) rule predicts a common filling order; it is not a universal orbital-energy law.",
            "For equal (n + ℓ), the orbital with smaller n fills first.",
            "One orbital contains at most two electrons with opposite spin projections.",
            "Degenerate orbitals are singly occupied with parallel spins before pairing.",
            "Orbitals in a subshell = 2ℓ + 1; maximum electrons = 2(2ℓ + 1).",
            "Orbitals in the nth shell = n²; maximum electrons = 2n².",
            "Common transition-metal cations lose ns electrons before (n − 1)d electrons.",
            "Cr = [Ar] 3d⁵ 4s¹; Cu = [Ar] 3d¹⁰ 4s¹.",
            "Pd = [Kr] 4d¹⁰ 5s⁰; Pt = [Xe] 4f¹⁴ 5d⁹ 6s¹.",
            "Tc = [Kr] 4d⁵ 5s²; Ce = [Xe] 4f¹ 5d¹ 6s².",
            "Nexchange = C(n↑,2) + C(n↓,2); it counts same-spin pairs, not exact energy.",
            "Npair counts doubly occupied orbitals; paired electrons = 2Npair.",
            "μso = √[n(n + 2)] BM; the square root is essential.",
            "A d⁵ species has five unpaired electrons only when high spin is allowed.",
            "In an isoelectronic series, radius generally decreases as nuclear charge increases.",
          ].map((line, index) => (
            <div
              key={line}
              style={{
                display: "grid",
                gridTemplateColumns: "30px minmax(0,1fr)",
                gap: 10,
                alignItems: "start",
                border: `1px solid ${T.borderSoft}`,
                borderRadius: 10,
                padding: "10px 12px",
                background: index % 2 ? `${T.cyan}08` : `${T.gold}08`,
              }}
            >
              <span style={{ color: index % 2 ? T.cyan : T.gold, fontFamily: T.mono, fontWeight: 900 }}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span style={{ color: T.text, fontFamily: T.sans, fontSize: 13.5, lineHeight: 1.6 }}>{line}</span>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}

export function SectionConfiguration() {
  return (
    <>
      <div>
            <SectionConfigurationOverview />
            <ElectronicConfigurationDeepDive />
          </div>
      <div
        data-integration="SectionConfiguration-periodicity-generated-corpus-phd-v9"
        style={{ marginTop: 34 }}
      >
        <PeriodicTableDeepAdditions topic="configuration" />
      </div>
    </>
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
    <>
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
                { title: "Step 4: inspect configuration", tag: "LOCAL SPECIAL-CASE TEST", accent: T.d, body: "Check whether removal or addition creates or destroys ns², np³, d⁵ or d¹⁰ stability and whether electron pairing changes." },
                { title: "Step 5: identify the medium", tag: "GAS VS AQUEOUS", accent: T.p, body: "Hydration enthalpy can reverse gas-phase trends. Lithium is the classic example in aqueous redox chemistry." },
                { title: "Step 6: use data only when needed", tag: "FINAL TIE-BREAK", accent: T.f, body: "For irregular d-block orders and exact melting/boiling points, qualitative trends may be insufficient; rely on accepted data rather than forcing a false rule." },
              ]}
            />

            <H2>4 · Normal Trend versus Special Case</H2>
            <DataTable
              columns={["Normal expectation", "Important special case", "Reason"]}
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
      <div
        data-integration="SectionTrendMap-periodicity-generated-corpus-phd-v9"
        style={{ marginTop: 34 }}
      >
        <PeriodicTableDeepAdditions topic="map" />
      </div>
    </>
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

function SectionIonizationLegacyV9() {
  return (
    <div>
      <SectionIntro
        eyebrow="Energy required for electron removal"
        title="Ionization Enthalpy — Complete Theory, Factors, IE₁–IE₄ Data, Applications and Solved Examples"
        summary="Ionization enthalpy is developed here as a quantitative property of isolated gaseous atoms and ions. Every controlling factor is followed by multiple examples, successive-ionization data, special cases, applications and limitations of simple trend rules."
        accent={T.gold}
      />

      <H2 id="ionization">1 · NCERT-Aligned Definition and Successive Processes</H2>
      <DefinitionBox term="First ionization enthalpy">
        First ionization enthalpy is the enthalpy required to remove the most loosely bound electron from one mole of isolated gaseous atoms in their ground state to form one mole of gaseous unipositive ions.
      </DefinitionBox>
      <MathBlock tex={String.raw`\mathrm{X(g)\rightarrow X^+(g)+e^-}\qquad \Delta_iH_1>0`} />
      <MathBlock tex={String.raw`\mathrm{X^+(g)\rightarrow X^{2+}(g)+e^-}\qquad \Delta_iH_2>\Delta_iH_1`} />
      <MathBlock tex={String.raw`\mathrm{X^{2+}(g)\rightarrow X^{3+}(g)+e^-}\qquad \Delta_iH_3>\Delta_iH_2`} />
      <RelationBox title="Meaning of the defining words" relations={[
        <React.Fragment key="isolated"><b>Isolated:</b> neighbouring atoms, bonds, lattice forces and solvent interactions are excluded.</React.Fragment>,
        <React.Fragment key="gaseous"><b>Gaseous:</b> atomization or sublimation energy is not mixed with the electron-removal step.</React.Fragment>,
        <React.Fragment key="ground"><b>Ground state:</b> all elements are compared from their lowest-energy electronic state.</React.Fragment>,
        <React.Fragment key="molar"><b>Enthalpy:</b> values are quoted per mole, normally in kJ mol⁻¹; all ionization enthalpies are positive.</React.Fragment>,
      ]} />
      <MathBlock tex={String.raw`\Delta_iH_1<\Delta_iH_2<\Delta_iH_3<\Delta_iH_4<\cdots`} label="General successive-ionization order" />

      <H2>2 · Factors Affecting Ionization Enthalpy</H2>
      <FactorStudyCard
        number="1"
        title="Effective nuclear charge"
        relation={<MathInline tex={String.raw`Z_{\mathrm{eff}}\uparrow\Rightarrow \Delta_iH\uparrow`} />}
        explanation="A larger net nuclear attraction binds the selected electron more strongly. Across a period, Z rises while the added electrons enter the same principal shell; shielding does not compensate fully, so first ionization enthalpy usually rises."
        examples={[
          { label: "Li → Ne", body: "The broad increase ends at the closed-shell maximum Ne." },
          { label: "Na → Ar", body: "The same trend repeats in period 3, with local dips at Al and S." },
          { label: "Isoelectronic", body: <><MathInline tex={String.raw`\mathrm{Na^+}`} /> is harder to ionize than Ne because its larger Z attracts the same ten-electron cloud more strongly.</> },
          { label: "Cation charge", body: <><MathInline tex={String.raw`IE(\mathrm{Fe^{2+}\rightarrow Fe^{3+}})>IE(\mathrm{Fe^+\rightarrow Fe^{2+}})`} /> in general because positive charge rises.</> },
        ]}
        accent={T.gold}
      />
      <FactorStudyCard
        number="2"
        title="Atomic size and distance of the valence electron"
        relation={<MathInline tex={String.raw`r\uparrow\Rightarrow \Delta_iH\downarrow`} />}
        explanation="Electrostatic attraction falls rapidly as the average nucleus–electron distance increases. Down a group, the valence electron occupies a higher shell and is therefore easier to remove."
        examples={[
          { label: "Group 1", body: <><MathInline tex={String.raw`\mathrm{Li>Na>K>Rb>Cs}`} /> in IE₁.</> },
          { label: "Group 17", body: <><MathInline tex={String.raw`\mathrm{F>Cl>Br>I}`} /> in IE₁.</> },
          { label: "Group 18", body: <><MathInline tex={String.raw`\mathrm{He>Ne>Ar>Kr>Xe>Rn}`} /> in IE₁.</> },
          { label: "Na vs Mg", body: "Mg is smaller within period 3 and therefore has higher IE₁ than Na." },
        ]}
        accent={T.cyan}
      />
      <FactorStudyCard
        number="3"
        title="Shielding or screening by inner electrons"
        relation={<MathInline tex={String.raw`\sigma\uparrow\Rightarrow \Delta_iH\downarrow`} />}
        explanation="Core electrons reduce the nuclear attraction felt by a valence electron. Down a group, more filled inner shells are introduced and shielding usually outweighs the increase in Z."
        examples={[
          { label: "Na", body: "The 3s electron is screened by a [Ne] core and is removed at only about 496 kJ mol⁻¹." },
          { label: "K", body: "The 4s electron is even more strongly screened and has a lower IE₁ than Na." },
          { label: "Ga", body: "Poor screening by 3d¹⁰ prevents the expected large fall from Al to Ga; IE₁(Ga) is slightly greater than IE₁(Al)." },
          { label: "Tl", body: "Poor 4f/5d shielding and relativistic 6s stabilization raise IE₁ relative to a simple down-group prediction." },
        ]}
        accent={T.p}
      />
      <FactorStudyCard
        number="4"
        title="Penetration and subshell type"
        relation={<MathInline tex={String.raw`\text{same }n:\quad IE(ns)>IE(np)>IE(nd)>IE(nf)\text{, broadly}`} />}
        explanation="A penetrating s electron spends more time close to the nucleus and is less shielded than a p, d or f electron of the same principal shell. An electron in a newly started p subshell can therefore be easier to remove than an s electron from the preceding element."
        examples={[
          { label: "Be / B", body: <><MathInline tex={String.raw`IE_1(\mathrm{Be})>IE_1(\mathrm{B})`} /> because B loses 2p¹ while Be loses a 2s electron.</> },
          { label: "Mg / Al", body: <><MathInline tex={String.raw`IE_1(\mathrm{Mg})>IE_1(\mathrm{Al})`} /> because Al loses 3p¹.</> },
          { label: "Zn / Ga", body: "Ga begins 4p occupation after Zn; the 4p electron is easier to remove than a compact filled-shell electron would be." },
          { label: "Transition ions", body: "4s electrons are generally lost before 3d electrons when transition-metal cations form." },
        ]}
        accent={T.d}
      />
      <FactorStudyCard
        number="5"
        title="Stable half-filled and fully filled subshells"
        relation={<MathInline tex={String.raw`\text{extra stability of }ns^2,\ np^3,\ d^5,\ d^{10}\Rightarrow\Delta_iH\text{ may rise}`} />}
        explanation="Symmetrical occupancy, exchange energy and reduced pairing can make particular configurations unusually stable. Removing an electron that destroys such a configuration requires additional energy; removal that creates a stable configuration may be easier."
        examples={[
          { label: "N / O", body: <><MathInline tex={String.raw`IE_1(\mathrm{N})>IE_1(\mathrm{O})`} /> because N has half-filled 2p³ while O has paired 2p⁴.</> },
          { label: "P / S", body: <><MathInline tex={String.raw`IE_1(\mathrm{P})>IE_1(\mathrm{S})`} /> for the analogous 3p³/3p⁴ reason.</> },
          { label: "Be / Li", body: "Be has a stable 2s² subshell and a much higher IE₁ than Li." },
          { label: "Zn", body: "The filled 3d¹⁰4s² arrangement contributes to the relatively high IE₁ of Zn among 3d elements." },
        ]}
        accent={T.f}
      />
      <FactorStudyCard
        number="6"
        title="Electron pairing and interelectronic repulsion"
        relation={<MathInline tex={String.raw`\text{pairing repulsion}\uparrow\Rightarrow\Delta_iH\downarrow\text{ for the paired electron}`} />}
        explanation="When two electrons occupy the same orbital, their mutual repulsion makes either one easier to remove. This effect can outweigh the increase in nuclear charge across a period."
        examples={[
          { label: "O", body: "The fourth 2p electron pairs, so O has lower IE₁ than N." },
          { label: "S", body: "The fourth 3p electron pairs, so S has lower IE₁ than P." },
          { label: "p⁴ ions", body: "Removal from p⁴ produces the comparatively stable p³ state and is often facilitated." },
          { label: "d series", body: "Irregular ionization energies arise partly from changes in d-electron pairing and exchange stabilization." },
        ]}
        accent={T.p}
      />
      <FactorStudyCard
        number="7"
        title="Charge on the species and successive ionization"
        relation={<MathInline tex={String.raw`q^+\uparrow\Rightarrow\Delta_iH\uparrow`} />}
        explanation="After each electron is removed, the remaining electrons experience a stronger attraction from the same nucleus. A very large jump occurs when all valence electrons have been removed and the next electron must come from an inner closed shell."
        examples={[
          { label: "Na", body: <><MathInline tex={String.raw`IE_2\gg IE_1`} /> because Na⁺ is [Ne].</> },
          { label: "Mg", body: <><MathInline tex={String.raw`IE_3\gg IE_2`} /> because Mg²⁺ is [Ne].</> },
          { label: "Al", body: <><MathInline tex={String.raw`IE_4\gg IE_3`} /> because Al³⁺ is [Ne].</> },
          { label: "C", body: "The giant jump appears after IE₄, consistent with four valence electrons." },
        ]}
        accent={T.gold}
      />
      <FactorStudyCard
        number="8"
        title="Relativistic and contraction effects in heavy atoms"
        relation={<MathInline tex={String.raw`\text{orbital contraction and stabilization}\Rightarrow\Delta_iH\text{ may exceed a simple trend}`} />}
        explanation="In heavy atoms, relativistic stabilization of ns and np₁/₂ orbitals and poor d/f shielding can raise ionization enthalpy or flatten the expected decrease down a group."
        examples={[
          { label: "Tl", body: "IE₁(Tl) is higher than IE₁(In), contrary to a smooth decrease down group 13." },
          { label: "Pb", body: "The 6s² pair is stabilized, helping Pb(II) become more stable than Pb(IV)." },
          { label: "Au", body: "Relativistic 6s stabilization contributes to gold's high electronegativity and unusual chemistry." },
          { label: "Hg", body: "Strong 6s stabilization weakens Hg–Hg metallic bonding and contributes to mercury's low melting point." },
        ]}
        accent={T.f}
      />

      <H2>3 · First, Second and Third Ionization-Enthalpy Data</H2>
      <P>Values below are rounded reference values in kJ mol⁻¹. Exact values vary slightly among data compilations; use the values supplied in an examination when numerical precision is required.</P>
      <DataTable
        columns={["Element", "Configuration", "IE₁", "IE₂", "IE₃", "Main inference"]}
        rows={[
          ["H", "1s¹", "1312", "—", "—", "one-electron atom"],
          ["He", "1s²", "2372", "5251", "—", "closed shell; very high IE₁"],
          ["Li", "[He]2s¹", "520", "7298", "11815", "giant jump after IE₁"],
          ["Be", "[He]2s²", "900", "1757", "14849", "giant jump after IE₂"],
          ["B", "[He]2s²2p¹", "801", "2427", "3660", "2p electron gives lower IE₁ than Be"],
          ["C", "[He]2s²2p²", "1086", "2353", "4621", "four valence electrons"],
          ["N", "[He]2s²2p³", "1402", "2856", "4578", "half-filled p³ raises IE₁"],
          ["O", "[He]2s²2p⁴", "1314", "3388", "5301", "pairing lowers IE₁ below N"],
          ["F", "[He]2s²2p⁵", "1681", "3374", "6050", "high Zeff and small radius"],
          ["Ne", "[He]2s²2p⁶", "2081", "3952", "6122", "closed-shell maximum"],
          ["Na", "[Ne]3s¹", "496", "4562", "6910", "giant jump after IE₁"],
          ["Mg", "[Ne]3s²", "738", "1451", "7733", "giant jump after IE₂"],
          ["Al", "[Ne]3s²3p¹", "578", "1817", "2745", "3p electron lowers IE₁"],
          ["Si", "[Ne]3s²3p²", "787", "1577", "3232", "four valence electrons"],
          ["P", "[Ne]3s²3p³", "1012", "1907", "2914", "half-filled p³"],
          ["S", "[Ne]3s²3p⁴", "1000", "2252", "3357", "pairing lowers IE₁ below P"],
          ["Cl", "[Ne]3s²3p⁵", "1251", "2298", "3822", "high electron attraction"],
          ["Ar", "[Ne]3s²3p⁶", "1521", "2666", "3931", "closed-shell maximum"],
          ["K", "[Ar]4s¹", "419", "3052", "4420", "giant jump after IE₁"],
          ["Ca", "[Ar]4s²", "590", "1145", "4912", "giant jump after IE₂"],
        ]}
        accent={T.gold}
      />

      <H2>4 · Giant-Jump Method for Group and Valency</H2>
      <DataTable columns={["Element", "IE₁", "IE₂", "IE₃", "IE₄", "Largest early jump", "Conclusion"]} rows={[
        ["Na", "496", "4562", "6910", "9543", "IE₁ → IE₂", "one valence electron; Na⁺ favoured"],
        ["Mg", "738", "1451", "7733", "10543", "IE₂ → IE₃", "two valence electrons; Mg²⁺ favoured"],
        ["Al", "578", "1817", "2745", "11577", "IE₃ → IE₄", "three valence electrons; Al³⁺ favoured"],
        ["Si", "787", "1577", "3232", "4356", "jump occurs after IE₄", "four valence electrons"],
      ]} accent={T.cyan} />
      <Callout kind="special" title="Successive IE is better than IE₁ for identifying valence count">
        First ionization enthalpy alone only measures the easiest electron removal. The position of the giant jump reveals how many valence electrons can be removed before the noble-gas core is reached.
      </Callout>

      <H2>5 · Periodic Trends and High-Yield Special Cases</H2>
      <DataTable columns={["Comparison", "Observed order", "Complete cause"]} rows={[
        ["Second period", "Li < B < Be < C < O < N < F < Ne", "overall Zeff rise with dips at B (2p start) and O (pairing)"],
        ["Third period", "Na < Al < Mg < Si < S < P < Cl < Ar", "overall rise with dips at Al and S"],
        ["Be and B", "Be > B", "2s penetration and stable 2s² versus higher-energy 2p¹"],
        ["Mg and Al", "Mg > Al", "3p¹ electron of Al is easier to remove"],
        ["N and O", "N > O", "half-filled 2p³ versus paired 2p⁴"],
        ["P and S", "P > S", "half-filled 3p³ versus paired 3p⁴"],
        ["Group 13", "B > Tl > Ga ≳ Al > In", "d/f shielding and relativistic effects disturb the simple fall"],
        ["Na IE₂ vs Mg IE₂", "Na ≫ Mg", "Na⁺ is [Ne], while Mg⁺ still has a 3s valence electron"],
      ]} accent={T.p} />

      <H2>6 · Applications of Ionization Enthalpy</H2>
      <DataTable columns={["Application", "Use", "Example"]} rows={[
        ["Metallic character", "low IE favours electron loss and electropositive behaviour", "Cs is more metallic than Li"],
        ["Reducing tendency in gas phase", "low IE facilitates oxidation of the atom", "K loses an electron more readily than Na"],
        ["Stable oxidation states", "a giant jump limits further electron removal", "Mg²⁺ is common; Mg³⁺ is not"],
        ["Group determination", "jump after n removals indicates n valence electrons", "IE₃ ≫ IE₂ identifies a group-2 pattern"],
        ["Ionic versus covalent bonding", "very high total IE makes formation of a highly charged cation expensive", "C⁴⁺ is not a normal simple ion; carbon forms covalent bonds"],
        ["Born–Haber cycles", "successive IE terms are included in lattice-formation energetics", "formation of MgCl₂ requires IE₁ + IE₂ of Mg"],
        ["Reactivity of s-block metals", "low IE contributes to vigorous oxidation", "reactivity generally increases Li → Cs"],
        ["Photoelectron spectra", "electron binding energies identify subshells and configurations", "large core/valence energy separation reveals shell structure"],
      ]} accent={T.d} />

      <H2>7 · Limitations — What Ionization Enthalpy Alone Cannot Predict</H2>
      <DataTable columns={["Incorrect shortcut", "Why it fails", "Needed additional factor"]} rows={[
        ["Lowest IE means strongest aqueous reducing agent", "hydration enthalpy can reverse the order", "complete electrode or thermochemical cycle; Li is the classic case"],
        ["Lower IE always means faster reaction", "kinetic barriers and surface films may dominate", "activation energy and physical state"],
        ["IE alone predicts ionic-compound stability", "lattice enthalpy and electron gain terms are equally important", "Born–Haber cycle"],
        ["IE follows a perfectly smooth periodic curve", "subshell start, pairing, poor shielding and relativistic effects create local changes", "actual configuration and data"],
        ["First IE gives every oxidation state", "later electrons can be d or core electrons with very different energies", "successive IE plus bond/lattice/solvation energies"],
        ["Atomic IE equals bond ionization energy", "molecules reorganize and bonds break when ionized", "molecular orbital and spectroscopic data"],
      ]} accent={T.p} />

      <H2>8 · Solved Examples</H2>
      <WorkedExample number="I1" title="Be–B order" question="Why is IE₁(Be) greater than IE₁(B)?" reasoning={["Be is 1s²2s²; B is 1s²2s²2p¹.", "A 2p electron is less penetrating and more shielded than a 2s electron.", "Removal from B also leaves the stable 2s² configuration."]} answer="IE₁(Be) > IE₁(B)." accent={T.gold} />
      <WorkedExample number="I2" title="N–O order" question="Why is IE₁(O) lower than IE₁(N)?" reasoning={["N has the half-filled 2p³ arrangement.", "O has one paired 2p orbital.", "Pairing repulsion makes one O electron easier to remove."]} answer="IE₁(N) > IE₁(O)." accent={T.p} />
      <WorkedExample number="I3" title="Na versus Mg second IE" question="Compare IE₂ of Na and Mg." reasoning={["Na⁺ = [Ne], so IE₂ removes a core electron.", "Mg⁺ = [Ne]3s¹, so IE₂ removes a valence electron.", "Core-electron removal requires far more energy."]} answer="IE₂(Na) ≫ IE₂(Mg)." accent={T.cyan} />
      <WorkedExample number="I4" title="Identify a group from data" question="IE values are 590, 1145, 4912 and 6491 kJ mol⁻¹. Identify the likely group." reasoning={["The giant jump is between IE₂ and IE₃.", "Two electrons are removable before a core is reached.", "The atom has two valence electrons."]} answer="Group 2; the values are characteristic of Ca." accent={T.d} />
      <WorkedExample number="I5" title="Order in period 3" question="Arrange Al, Mg, S and P in increasing IE₁." reasoning={["Al has a removable 3p¹ electron and is lowest.", "Mg has stable 3s² but lies left of P and S.", "S is below P because of pairing in 3p⁴."]} answer="Al < Mg < S < P." accent={T.gold} />
      <WorkedExample number="I6" title="Cation formation" question="Why is Al³⁺ common but Al⁴⁺ not a normal simple ion?" reasoning={["Al has three valence electrons.", "After three removals, Al³⁺ has the [Ne] configuration.", "IE₄ removes a core electron and is extremely large."]} answer="The giant jump after IE₃ stabilizes the +3 limit for simple ionic formation." accent={T.p} />
      <WorkedExample number="I7" title="Aqueous reducing power" question="Why can Li be a very strong reducing agent in water despite its high IE₁?" reasoning={["IE refers to gas-phase electron removal.", "Li⁺ is very small and is hydrated special caseally strongly.", "The hydration term strongly stabilizes the products."]} answer="A complete aqueous thermodynamic cycle, not IE₁ alone, controls reducing strength." accent={T.cyan} />
      <WorkedExample number="I8" title="Closed-shell maximum" question="Why are noble gases local maxima in IE₁?" reasoning={["Their valence shells are completely filled.", "They have compact, stable configurations and high effective attraction.", "Removal destroys a closed shell."]} answer="Noble gases possess the highest IE₁ values in their periods." accent={T.f} />
    </div>
  );
}


/* =============================================================================
   SECTION — Electron Gain Enthalpy
   ========================================================================== */
function SectionElectronGainLegacyV9() {
  return (
    <div>
      <SectionIntro
        eyebrow="Energy change when an isolated atom accepts an electron"
        title="Electron Gain Enthalpy — Complete Theory, Data, Factors, Applications and Solved Examples"
        summary="This module distinguishes electron gain enthalpy from electron affinity and electronegativity, explains every controlling factor with several examples, includes NCERT reference data, successive electron-addition steps, special cases and the limits of simple periodic rules."
        accent={T.d}
      />

      <H2 id="electron-gain">1 · Definition, Sign and Thermodynamic Convention</H2>
      <DefinitionBox term="Electron gain enthalpy">
        Electron gain enthalpy is the enthalpy change accompanying the addition of an electron to one mole of isolated gaseous atoms in their ground state to form one mole of gaseous anions.
      </DefinitionBox>
      <MathBlock tex={String.raw`\mathrm{X(g)+e^-\rightarrow X^-(g)}\qquad \Delta_{eg}H_1`} />
      <DataTable columns={["Sign", "Meaning", "Illustration"]} rows={[
        ["negative", "electron addition releases energy; process is exothermic", "Cl(g) + e⁻ → Cl⁻(g)"],
        ["positive", "energy must be supplied; process is endothermic", "noble-gas electron addition"],
        ["more negative", "electron addition is thermodynamically more favourable for the isolated atom", "Cl is more negative than F"],
      ]} accent={T.d} />
      <Callout kind="warn" title="Electron affinity and electron gain enthalpy may use opposite signs">
        In the common electron-affinity convention, released energy is written as a positive magnitude. In thermodynamic electron-gain-enthalpy notation, the same exothermic process has a negative sign. Always check the convention before comparing numbers.
      </Callout>
      <MathBlock tex={String.raw`\Delta_{eg}H\approx -A_e\quad\text{(sign comparison; temperature convention may add a correction)}`} />

      <H2>2 · Factors Affecting Electron Gain Enthalpy</H2>
      <FactorStudyCard
        number="1"
        title="Effective nuclear charge"
        relation={<MathInline tex={String.raw`Z_{\mathrm{eff}}\uparrow\Rightarrow \Delta_{eg}H\text{ generally becomes more negative}`} />}
        explanation="A stronger net positive attraction stabilizes the incoming electron. Across a period, effective nuclear charge generally rises, so electron addition tends to become more exothermic toward the halogens."
        examples={[
          { label: "Na → Cl", body: "The broad trend becomes more negative from the electropositive metal toward chlorine." },
          { label: "C vs F", body: "F attracts an incoming electron much more strongly and reaches a closed shell." },
          { label: "Halogens", body: "Their high Zeff and ns²np⁵ configuration make the first electron addition strongly exothermic." },
          { label: "Noble gases", body: "Despite high Z, the incoming electron must enter a new shell; configuration overrides the simple Zeff argument." },
        ]}
        accent={T.gold}
      />
      <FactorStudyCard
        number="2"
        title="Atomic size and distance of the incoming electron"
        relation={<MathInline tex={String.raw`r\uparrow\Rightarrow |\Delta_{eg}H|\text{ generally decreases}`} />}
        explanation="In a larger atom, the incoming electron occupies a region farther from the nucleus. Nuclear attraction is weaker, so electron addition usually releases less energy down a group."
        examples={[
          { label: "Cl → I", body: <><MathInline tex={String.raw`|\Delta_{eg}H|:\ \mathrm{Cl>Br>I}`} />.</> },
          { label: "S → Te", body: "The magnitude generally falls as the valence p shell becomes larger." },
          { label: "Group 1", body: <><MathInline tex={String.raw`\mathrm{Li>Na>K>Rb>Cs}`} /> in magnitude of first electron gain enthalpy.</> },
          { label: "Special pair", body: "F and O do not follow the simple small-size argument because their compact 2p orbitals are too crowded." },
        ]}
        accent={T.cyan}
      />
      <FactorStudyCard
        number="3"
        title="Shielding by inner electrons"
        relation={<MathInline tex={String.raw`\sigma\uparrow\Rightarrow\text{incoming electron feels less attraction}`} />}
        explanation="Core electrons shield the incoming electron from the nucleus. Down a group, additional inner shells increase screening and usually make electron gain less exothermic."
        examples={[
          { label: "Li vs Na", body: "Na has a larger [Ne] core and a less negative value than Li." },
          { label: "Cl vs Br", body: "Br has an extra filled shell; its electron gain is less exothermic than Cl." },
          { label: "Cs", body: "Strong shielding and large size make its electron gain only moderately exothermic." },
          { label: "d/f effects", body: "Poor d/f shielding can increase Zeff and create deviations in heavier p-block elements." },
        ]}
        accent={T.p}
      />
      <FactorStudyCard
        number="4"
        title="Subshell and electronic configuration produced"
        relation={<MathInline tex={String.raw`\text{formation of a stable subshell}\Rightarrow\Delta_{eg}H\text{ more negative}`} />}
        explanation="Electron addition is favourable when it completes a valence subshell, but unfavourable when it begins a higher-energy subshell or disturbs a half-filled arrangement."
        examples={[
          { label: "Halogens", body: <><MathInline tex={String.raw`ns^2np^5+e^-\rightarrow ns^2np^6`} /> gives a noble-gas configuration.</> },
          { label: "Group 1", body: <><MathInline tex={String.raw`ns^1+e^-\rightarrow ns^2`} /> gives a filled s subshell, so values are moderately negative.</> },
          { label: "Group 2", body: "Be and Mg already have ns²; the added electron must enter np, making the process near zero or positive." },
          { label: "Noble gases", body: "A closed shell is followed by occupation of the next principal shell, so electron gain is positive." },
        ]}
        accent={T.f}
      />
      <FactorStudyCard
        number="5"
        title="Electron–electron repulsion and orbital crowding"
        relation={<MathInline tex={String.raw`\text{crowding}\uparrow\Rightarrow\Delta_{eg}H\text{ becomes less negative}`} />}
        explanation="The incoming electron is repelled by electrons already present in the target orbital. Very compact 2p orbitals can therefore accept an electron less favourably than the larger 3p orbitals below them."
        examples={[
          { label: "F vs Cl", body: <><MathInline tex={String.raw`\Delta_{eg}H(\mathrm{Cl})<\Delta_{eg}H(\mathrm{F})`} />; chlorine is more exothermic.</> },
          { label: "O vs S", body: <><MathInline tex={String.raw`\Delta_{eg}H(\mathrm{S})<\Delta_{eg}H(\mathrm{O})`} /> for the same compact-2p reason.</> },
          { label: "N", body: "The incoming electron must pair in a half-filled 2p³ set, so electron gain is positive or only weakly favourable depending on convention/data." },
          { label: "P", body: "3p orbitals are more spacious than 2p, but pairing still makes P less favourable than S and Cl." },
        ]}
        accent={T.gold}
      />
      <FactorStudyCard
        number="6"
        title="Charge already present on the species"
        relation={<MathInline tex={String.raw`\mathrm{X^-(g)+e^-\rightarrow X^{2-}(g)}\quad\Delta_{eg}H_2>0`} />}
        explanation="The second electron approaches a negatively charged ion and must overcome strong electrostatic repulsion. Hence the second electron gain enthalpy is always positive for an isolated gaseous monoanion."
        examples={[
          { label: "O²⁻", body: "Formation of gaseous O²⁻ from O⁻ requires energy even though oxide is stable in crystals." },
          { label: "S²⁻", body: "The second electron-addition step is endothermic; lattice energy stabilizes sulfide salts." },
          { label: "N³⁻", body: "Second and third electron additions are highly endothermic in the gas phase." },
          { label: "Ionic solids", body: "Large lattice enthalpy can compensate positive successive electron-gain terms." },
        ]}
        accent={T.p}
      />
      <FactorStudyCard
        number="7"
        title="Spin arrangement, pairing and exchange stabilization"
        relation={<MathInline tex={String.raw`p^3\text{ half-filled stability opposes electron addition}`} />}
        explanation="Hund-rule arrangements have additional exchange stabilization. Adding an electron may force pairing and reduce this stability, so the measured trend is not a smooth function of Z or radius."
        examples={[
          { label: "N", body: "2p³ is half-filled; the fourth electron must pair, giving an unfavourable value." },
          { label: "P", body: "3p³ also resists pairing, so its value is much less negative than S or Cl." },
          { label: "C", body: "Addition gives 2p³, a half-filled product, so C has a fairly favourable electron gain." },
          { label: "Si", body: "Addition gives 3p³, contributing to a more negative value than Al or P." },
        ]}
        accent={T.d}
      />

      <H2>3 · NCERT Reference Data</H2>
      <DataTable columns={["Family", "Element", "ΔegH₁ / kJ mol⁻¹", "Interpretation"]} rows={[
        ["Group 1", "H", "−73", "moderately exothermic"],
        ["Group 1", "Li", "−60", "ns¹ → ns²"],
        ["Group 1", "Na", "−53", "less exothermic down group"],
        ["Group 1", "K", "−48", "larger and more shielded"],
        ["Group 1", "Rb", "−47", "small change"],
        ["Group 1", "Cs", "−46", "smallest magnitude in listed group"],
        ["Group 16", "O", "−141", "compact 2p crowding"],
        ["Group 16", "S", "−200", "more exothermic than O"],
        ["Group 16", "Se", "−195", "magnitude begins to fall"],
        ["Group 16", "Te", "−190", "larger size"],
        ["Group 16", "Po", "−174", "large and strongly shielded"],
        ["Group 17", "F", "−328", "strongly exothermic but less than Cl"],
        ["Group 17", "Cl", "−349", "most negative listed value"],
        ["Group 17", "Br", "−325", "less negative down group"],
        ["Group 17", "I", "−295", "larger radius"],
        ["Group 17", "At", "−270", "estimated/representative heavy value"],
        ["Group 18", "He", "+48", "electron enters a new shell"],
        ["Group 18", "Ne", "+116", "strongly unfavourable"],
        ["Group 18", "Ar", "+96", "unfavourable"],
        ["Group 18", "Kr", "+96", "unfavourable"],
        ["Group 18", "Xe", "+77", "unfavourable but less positive down group"],
        ["Group 18", "Rn", "+68", "unfavourable"],
      ]} accent={T.d} />
      <DataTable columns={["Element", "Li", "Be", "B", "C", "N", "O", "F", "Ne"]} rows={[
        ["Period-2 ΔegH₁", "−60", "+48", "−27", "−122", "+31", "−141", "−328", "+116"],
      ]} accent={T.cyan} />
      <DataTable columns={["Element", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar"]} rows={[
        ["Period-3 ΔegH₁", "−53", "+48", "−44", "−134", "−72", "−200", "−349", "+96"],
      ]} accent={T.gold} />

      <H2>4 · First, Second and Third Electron-Gain Steps</H2>
      <MathBlock tex={String.raw`\mathrm{O(g)+e^-\rightarrow O^-(g)}\qquad \Delta_{eg}H_1<0`} />
      <MathBlock tex={String.raw`\mathrm{O^-(g)+e^-\rightarrow O^{2-}(g)}\qquad \Delta_{eg}H_2>0`} />
      <MathBlock tex={String.raw`\mathrm{N^{2-}(g)+e^-\rightarrow N^{3-}(g)}\qquad \Delta_{eg}H_3>0\ \text{and very large}`} />
      <RelationBox title="Why multiply charged anions still exist" relations={[
        <React.Fragment key="lattice">In an ionic crystal, large lattice enthalpy stabilizes ions such as <MathInline tex={String.raw`\mathrm{O^{2-}}`} />, <MathInline tex={String.raw`\mathrm{S^{2-}}`} /> and <MathInline tex={String.raw`\mathrm{N^{3-}}`} />.</React.Fragment>,
        <React.Fragment key="hydration">In aqueous solution, hydration enthalpy can also stabilize charged ions.</React.Fragment>,
        <React.Fragment key="cycle">The stability of a compound is decided by the complete thermochemical cycle, not by one gas-phase electron-addition step.</React.Fragment>,
      ]} />

      <H2>5 · Applications</H2>
      <DataTable columns={["Application", "How electron gain enthalpy helps", "Example / caution"]} rows={[
        ["Tendency to form anions", "a more negative first value favours gaseous anion formation", "halogens readily form X⁻"],
        ["Oxidizing behaviour", "favourable electron uptake contributes to oxidizing power", "full bond/hydration cycle is still required"],
        ["Born–Haber cycles", "electron-gain terms enter ionic-solid formation enthalpy", "formation of O²⁻ requires both ΔegH₁ and positive ΔegH₂"],
        ["Periodic classification", "large negative values identify strongly electron-attracting p-block families", "groups 16 and 17"],
        ["Configuration analysis", "sign and magnitude reveal stable or crowded subshells", "Be/Mg, N/P and noble gases"],
        ["Comparison with IE", "together they form the basis of Mulliken electronegativity", "χM ≈ (IE + EA)/2 using a consistent sign convention"],
        ["Ionic-compound feasibility", "combined with IE and lattice enthalpy it estimates stability", "NaCl formation is favourable despite separate energy costs"],
        ["Redox thermodynamics", "electron addition is one part of reduction", "F₂ versus Cl₂ requires X–X bond and hydration terms"],
      ]} accent={T.d} />

      <H2>6 · Limitations — Where a Simple Electron-Gain Rule Fails</H2>
      <DataTable columns={["Incorrect shortcut", "Why it fails", "Correct treatment"]} rows={[
        ["Smallest atom must have the most negative value", "compact orbitals can create severe electron repulsion", "Cl is more negative than F; S more negative than O"],
        ["More negative value means strongest oxidizing element in every medium", "bond breaking, hydration and entropy are omitted", "F₂ is strongest aqueous halogen oxidant despite Cl atom having more negative ΔegH"],
        ["Electron gain enthalpy equals electronegativity", "one is a measurable gas-phase enthalpy; the other is a bonded-atom scale", "keep the concepts separate"],
        ["First value predicts stable dianions", "second electron addition to an anion is endothermic", "include lattice or hydration stabilization"],
        ["Trend is perfectly smooth", "configuration and pairing create strong local changes", "inspect ns², np³ and np⁶ states"],
        ["A tabulated atomic value applies inside every compound", "bonding environment changes electron distribution", "use molecular/solid-state energetics for compounds"],
      ]} accent={T.p} />

      <H2>7 · Solved Examples</H2>
      <WorkedExample number="E1" title="Cl versus F" question="Why is electron gain by Cl more exothermic than by F?" reasoning={["Both additions complete an np⁶ shell.", "F accepts the electron into a compact 2p orbital with strong repulsion.", "Cl accepts it into a more spacious 3p orbital while retaining strong nuclear attraction."]} answer="ΔegH(Cl) is more negative than ΔegH(F)." accent={T.d} />
      <WorkedExample number="E2" title="S versus O" question="Which has the more negative first electron gain enthalpy, O or S?" reasoning={["O is smaller, which normally favours electron gain.", "However, the incoming electron enters the crowded 2p shell of O.", "The larger 3p shell of S has less interelectronic repulsion."]} answer="S has the more negative value." accent={T.gold} />
      <WorkedExample number="E3" title="Second electron addition" question="Predict the sign of ΔegH₂ for O⁻(g) + e⁻ → O²⁻(g)." reasoning={["The electron approaches a negatively charged ion.", "Strong electrostatic repulsion must be overcome.", "The isolated gaseous process requires energy."]} answer="ΔegH₂ is positive." accent={T.p} />
      <WorkedExample number="E4" title="Most and least negative" question="Among P, S, Cl and F, identify the most and least negative first electron gain enthalpy." reasoning={["Across period 3 the value generally becomes more negative P → S → Cl.", "Cl is more negative than F because 3p is less crowded than 2p.", "P resists pairing in the half-filled 3p³ set."]} answer="Most negative: Cl; least negative: P." accent={T.cyan} />
      <WorkedExample number="E5" title="Noble gas sign" question="Why is ΔegH₁ of Ne positive?" reasoning={["Ne already has a closed 2s²2p⁶ shell.", "The incoming electron must enter the n = 3 shell.", "The product is higher in energy and poorly stabilized."]} answer="Electron addition to Ne is endothermic; ΔegH₁ is positive." accent={T.f} />
      <WorkedExample number="E6" title="Be and Mg" question="Why are the first electron gain enthalpies of Be and Mg near zero or positive?" reasoning={["Both atoms have stable ns² configurations.", "The incoming electron must begin the higher-energy np subshell.", "The gain in nuclear attraction is not enough to offset the energetic cost."]} answer="Electron addition is weakly favourable or unfavourable." accent={T.gold} />
      <WorkedExample number="E7" title="F₂ versus Cl₂ oxidizing power" question="Why is F₂ the stronger aqueous oxidant although Cl has the more negative atomic ΔegH?" reasoning={["Atomic ΔegH describes X(g), not X₂(aq).", "The redox process includes X–X bond dissociation and hydration of X⁻.", "The very favourable hydration of F⁻ makes the complete aqueous reduction of F₂ more favourable."]} answer="Oxidizing power is a full thermodynamic-cycle property." accent={T.cyan} />
      <WorkedExample number="E8" title="Formation of MgO" question="Does the positive second electron gain enthalpy of oxygen prevent MgO formation?" reasoning={["Formation of O²⁻(g) includes a positive ΔegH₂.", "MgO releases very large lattice enthalpy when Mg²⁺ and O²⁻ form the crystal.", "The complete Born–Haber cycle is favourable."]} answer="No. Lattice stabilization compensates for the positive second electron-gain step." accent={T.d} />
    </div>
  );
}


/* =============================================================================
   SECTION — Electronegativity
   ========================================================================== */
function SectionElectronegativityLegacyV9() {
  return (
    <div>
      <SectionIntro
        eyebrow="Attraction exerted by a bonded atom on shared electron density"
        title="Electronegativity — Complete Scales, Factors, Data, Applications, Limitations and Examples"
        summary="Electronegativity is treated as a bonded-atom property rather than a free-atom energy. The module develops Pauling, Mulliken and Allred–Rochow ideas, explains every controlling factor with several examples, and applies electronegativity to polarity, oxidation state, acidity, bonding and organic effects."
        accent={T.cyan}
      />

      <H2 id="electronegativity">1 · NCERT-Aligned Definition and Essential Features</H2>
      <DefinitionBox term="Electronegativity">
        Electronegativity is a qualitative measure of the ability of an atom in a chemical compound to attract the shared electron pair or bonding electron density towards itself.
      </DefinitionBox>
      <DataTable columns={["Feature", "Electronegativity", "Contrast"]} rows={[
        ["Species considered", "atom already present in a bond", "IE and electron gain enthalpy refer to isolated gaseous species"],
        ["Nature", "relative and scale-dependent", "not a directly measurable thermodynamic quantity"],
        ["Units", "dimensionless on common scales", "IE and ΔegH are in kJ mol⁻¹"],
        ["Constancy", "changes with oxidation state, hybridization and bonding partner", "not one immutable number for an element"],
        ["Highest common value", "F = 4.0 on the Pauling scale", "noble-gas values are often omitted in elementary tables"],
      ]} accent={T.cyan} />
      <ElectronegativitySpectrumSVG />

      <H2>2 · Major Electronegativity Scales and Equations</H2>
      <H3>Pauling scale — bond-energy method</H3>
      <MathBlock tex={String.raw`\Delta=D_{A-B}-\sqrt{D_{A-A}D_{B-B}}`} label="Extra heteronuclear bond stabilization" />
      <MathBlock tex={String.raw`|\chi_A-\chi_B|=0.102\sqrt{\Delta}\quad\text{when bond energies are in kJ mol}^{-1}`} />
      <P>The numerical constant changes with the energy unit. Pauling fixed fluorine at 4.0 and generated relative values from bond-energy differences.</P>
      <H3>Mulliken scale — average electron-removal and electron-gain tendency</H3>
      <MathBlock tex={String.raw`\chi_M=\frac{IE+EA}{2}`} label="Use IE and electron affinity in the same energy unit, commonly eV" />
      <Callout kind="warn" title="Sign convention">
        In the Mulliken expression, EA is normally the positive energy released on electron attachment. If thermodynamic electron gain enthalpy is used, convert the sign consistently before substitution.
      </Callout>
      <H3>Allred–Rochow scale — electrostatic attraction at the covalent radius</H3>
      <MathBlock tex={String.raw`\chi_{AR}=0.359\frac{Z_{\mathrm{eff}}}{r_{\mathrm{cov}}^2}+0.744\qquad(r_{\mathrm{cov}}\text{ in \AA})`} />
      <DataTable columns={["Scale", "Physical basis", "Strength", "Limitation"]} rows={[
        ["Pauling", "bond-energy stabilization", "directly useful for bond polarity", "requires bond-energy data and calibration"],
        ["Mulliken", "average of ionization and electron-attachment tendencies", "links atomic energy data to χ", "gas-phase values and sign conventions must be consistent"],
        ["Allred–Rochow", "electrostatic attraction using Zeff and covalent radius", "shows χ ∝ Zeff/r² clearly", "depends on chosen radius and approximate Zeff"],
      ]} accent={T.gold} />

      <H2>3 · Factors Affecting Electronegativity</H2>
      <FactorStudyCard
        number="1"
        title="Effective nuclear charge"
        relation={<MathInline tex={String.raw`Z_{\mathrm{eff}}\uparrow\Rightarrow\chi\uparrow`} />}
        explanation="A bonded atom with a greater net nuclear attraction pulls the shared electron cloud more strongly. Across a period, Zeff generally rises and is the main reason electronegativity increases."
        examples={[
          { label: "Period 2", body: <><MathInline tex={String.raw`\mathrm{Li<Be<B<C<N<O<F}`} />.</> },
          { label: "Period 3", body: <><MathInline tex={String.raw`\mathrm{Na<Mg<Al<Si<P<S<Cl}`} />.</> },
          { label: "C vs N", body: "N is more electronegative because it has larger Zeff in the same n = 2 shell." },
          { label: "Al³⁺", body: "High effective attraction makes Al³⁺ a strong Lewis acid toward ligand electron pairs." },
        ]}
        accent={T.gold}
      />
      <FactorStudyCard
        number="2"
        title="Covalent radius and bond distance"
        relation={<MathInline tex={String.raw`r_{\mathrm{cov}}\downarrow\Rightarrow\chi\uparrow`} />}
        explanation="A small atom holds bonding electron density closer to the nucleus. Down a group, radius and shielding rise, so electronegativity generally decreases."
        examples={[
          { label: "Halogens", body: <><MathInline tex={String.raw`\mathrm{F>Cl>Br>I}`} />.</> },
          { label: "Chalcogens", body: <><MathInline tex={String.raw`\mathrm{O>S>Se>Te}`} />.</> },
          { label: "Group 1", body: <><MathInline tex={String.raw`\mathrm{Li>Na>K\approx Rb>Cs}`} />.</> },
          { label: "H–X polarity", body: "H–F is more polar than H–Cl because F is smaller and more electronegative." },
        ]}
        accent={T.cyan}
      />
      <FactorStudyCard
        number="3"
        title="Shielding and number of occupied shells"
        relation={<MathInline tex={String.raw`\sigma\uparrow,\ n\uparrow\Rightarrow\chi\downarrow`} />}
        explanation="Inner electrons reduce the attraction exerted on bonding density. Each new shell places the valence region farther from the nucleus and increases screening."
        examples={[
          { label: "F → I", body: "Additional shells and shielding lower electronegativity down group 17." },
          { label: "O → Te", body: "The same effect lowers electronegativity down group 16." },
          { label: "Na vs Li", body: "Na has a new n = 3 shell and is less electronegative than Li." },
          { label: "Ga", body: "Poor 3d shielding keeps Ga relatively electronegative and compact compared with a simple down-group prediction." },
        ]}
        accent={T.p}
      />
      <FactorStudyCard
        number="4"
        title="Oxidation state of the same element"
        relation={<MathInline tex={String.raw`\text{positive oxidation state}\uparrow\Rightarrow\chi\uparrow\text{ generally}`} />}
        explanation="A more positively charged or electron-deficient centre attracts ligand electron density more strongly. This is closely related to Lewis acidity and polarizing power."
        examples={[
          { label: "Fe", body: <><MathInline tex={String.raw`\mathrm{Fe^{3+}>Fe^{2+}}`} /> in effective electron-attracting power.</> },
          { label: "Sn", body: "Sn(IV) is more electron-attracting and more strongly polarizing than Sn(II)." },
          { label: "Cl oxides", body: "Chlorine in +7 oxidation state in Cl₂O₇ strongly withdraws electron density and gives a strongly acidic oxide." },
          { label: "Mn", body: "Mn(VII) in permanganate is strongly electron-deficient compared with Mn(II)." },
        ]}
        special="Oxidation-state effects are environment-dependent; a single tabulated elemental Pauling value cannot represent every compound."
        accent={T.gold}
      />
      <FactorStudyCard
        number="5"
        title="Hybridization and percentage s character"
        relation={<MathInline tex={String.raw`\chi(sp)>\chi(sp^2)>\chi(sp^3)`} />}
        explanation="s orbitals penetrate closer to the nucleus than p orbitals. A hybrid orbital with more s character holds its bonding electron density nearer the nucleus and behaves as more electronegative."
        examples={[
          { label: "Carbon", body: "C(sp) in an alkyne is more electronegative than C(sp²) in an alkene and C(sp³) in an alkane." },
          { label: "C–H acidity", body: <><MathInline tex={String.raw`\mathrm{HC\equiv CH>H_2C{=}CH_2>H_3C-CH_3}`} /> in acidity because the conjugate carbon has increasing s character.</> },
          { label: "Bond length", body: "Greater s character also contracts the hybrid orbital, helping make sp bonds shorter." },
          { label: "Lone pairs", body: "A lone pair in an orbital with more s character is held closer and can show altered basicity." },
        ]}
        accent={T.d}
      />
      <FactorStudyCard
        number="6"
        title="Formal charge and ionic charge"
        relation={<MathInline tex={String.raw`\chi(\text{cation})>\chi(\text{neutral atom})>\chi(\text{anion})`} />}
        explanation="Positive charge contracts the electron cloud and increases attraction for additional electron density. Negative charge expands the cloud and increases electron–electron repulsion."
        examples={[
          { label: "Ammonium", body: "The positively charged N in NH₄⁺ withdraws electron density more strongly than neutral amine nitrogen." },
          { label: "Carbanion", body: "A negatively charged carbon centre is less electronegative and more electron-releasing than neutral carbon." },
          { label: "Fe ions", body: "Fe³⁺ has greater Lewis acidity than Fe²⁺." },
          { label: "O species", body: "O⁻ is less electron-attracting than neutral O in a comparable environment." },
        ]}
        accent={T.f}
      />
      <FactorStudyCard
        number="7"
        title="Nature of bonded atoms and substituent environment"
        relation={<MathInline tex={String.raw`\chi\text{ is environment-dependent, not a fixed atomic constant}`} />}
        explanation="Electron-withdrawing or electron-donating groups alter the electron density and effective attraction at a bonded atom. Electronegativity equalization also shifts charge until chemical potentials become more compatible."
        examples={[
          { label: "CF₃ group", body: "Three F atoms withdraw electron density strongly and make adjacent centres more electron-poor." },
          { label: "CH₃ group", body: "Alkyl groups usually release electron density inductively relative to strongly electronegative substituents." },
          { label: "Acids", body: "ClCH₂COOH is stronger than CH₃COOH because Cl withdraws electron density and stabilizes the conjugate base." },
          { label: "Multiple F", body: "The −I effect generally increases with the number and proximity of fluorine substituents." },
        ]}
        accent={T.p}
      />
      <FactorStudyCard
        number="8"
        title="d/f contraction and relativistic effects"
        relation={<MathInline tex={String.raw`\text{contraction}\Rightarrow r\downarrow\Rightarrow\chi\uparrow\text{ relative to a simple down-group rule}`} />}
        explanation="Poor d/f shielding and relativistic stabilization can make heavy atoms smaller or more electron-attracting than expected."
        examples={[
          { label: "Ga", body: "Ga is not dramatically less electronegative than Al because 3d shielding is poor." },
          { label: "Au", body: "Gold has unusually high electronegativity for a metal, aided by relativistic 6s stabilization." },
          { label: "Pb", body: "Relativistic 6s stabilization contributes to the inert-pair effect and oxidation-state behaviour." },
          { label: "Zr / Hf", body: "Lanthanoid contraction gives nearly equal radii and very similar electronegativities/chemistry." },
        ]}
        accent={T.f}
      />

      <H2>4 · NCERT Pauling-Scale Data</H2>
      <DataTable columns={["Period 2", "Li", "Be", "B", "C", "N", "O", "F"]} rows={[
        ["Pauling χ", "1.0", "1.5", "2.0", "2.5", "3.0", "3.5", "4.0"],
      ]} accent={T.cyan} />
      <DataTable columns={["Period 3", "Na", "Mg", "Al", "Si", "P", "S", "Cl"]} rows={[
        ["Pauling χ", "0.9", "1.2", "1.5", "1.8", "2.1", "2.5", "3.0"],
      ]} accent={T.gold} />
      <DataTable columns={["Group", "Top → bottom", "Pauling values"]} rows={[
        ["Group 1", "Li, Na, K, Rb, Cs", "1.0, 0.9, 0.8, 0.8, 0.7"],
        ["Group 17", "F, Cl, Br, I, At", "4.0, 3.0, 2.8, 2.5, 2.2"],
      ]} accent={T.p} />
      <Callout kind="note" title="Values are approximate and scale-specific">
        Modern tables may quote slightly different decimals, such as C = 2.55 or Cl = 3.16. Use one consistent scale within a calculation and use the values supplied in the problem when provided.
      </Callout>

      <H2>5 · Applications of Electronegativity</H2>
      <H3>Bond polarity and partial charge</H3>
      <MathBlock tex={String.raw`\mathrm{H^{\delta+}-F^{\delta-}}\qquad \chi_F>\chi_H`} />
      <H3>Approximate percentage ionic character</H3>
      <MathBlock tex={String.raw`\%\,\text{ionic character}\approx\left(1-e^{-0.25(\Delta\chi)^2}\right)\times100`} />
      <DataTable columns={["Application", "Use", "Example / caution"]} rows={[
        ["Bond polarity", "assign δ⁺ and δ⁻ and estimate bond-dipole direction", "Hδ⁺–Clδ⁻"],
        ["Molecular polarity", "combine bond dipoles as vectors", "CO₂ has polar bonds but zero net dipole; H₂O does not"],
        ["Ionic character", "larger Δχ generally means greater ionic contribution", "LiF is more ionic than LiI"],
        ["Oxidation-number assignment", "bond electrons are formally assigned to the more electronegative atom", "O is +2 in OF₂ because F is more electronegative"],
        ["Acidic/basic oxide character", "high χ and high oxidation state favour covalent acidic oxides", "Na₂O basic; Al₂O₃ amphoteric; SO₃ acidic"],
        ["Hydride acidity", "electronegativity controls acidity across a period, while bond strength dominates down a group", "CH₄ < NH₃ < H₂O < HF across period 2"],
        ["Inductive effect", "electron-withdrawing substituents stabilize nearby negative charge", "ClCH₂COOH stronger than CH₃COOH"],
        ["Lewis acidity", "small positively charged high-χ centres accept electron pairs", "AlCl₃ and BF₃"],
        ["Bond type prediction", "Δχ gives a first estimate of covalent/polar/ionic character", "boundaries are descriptive, not absolute"],
        ["Metallic character", "low χ correlates with electron loss and metallic behaviour", "Cs strongly metallic; F strongly non-metallic"],
      ]} accent={T.cyan} />

      <H2>6 · Limitations — What Electronegativity Cannot Decide Alone</H2>
      <DataTable columns={["Limitation", "Why it matters", "Example"]} rows={[
        ["Not directly measurable", "values depend on the chosen scale and calibration", "Pauling, Mulliken and Allred–Rochow numbers differ"],
        ["Not constant for an element", "oxidation state, hybridization and bonding partner change the value", "C(sp) > C(sp²) > C(sp³)"],
        ["Does not determine molecular dipole alone", "geometry controls vector addition", "CO₂ non-polar; H₂O polar"],
        ["Does not give bond strength", "a polar bond may be strong or weak depending on overlap and bond order", "H–F is both polar and strong; HI is less polar but much weaker"],
        ["Does not sharply classify bond type", "ionic and covalent descriptions form a continuum", "AlCl₃ has major covalent character despite metal + non-metal"],
        ["Does not equal electron gain enthalpy", "χ concerns bonded electron density; ΔegH concerns isolated atoms", "F has highest χ, while Cl has more negative atomic ΔegH"],
        ["Noble-gas values are context-sensitive", "ordinary closed-shell atoms rarely form bonds", "Xe values depend strongly on compound and scale"],
        ["Reactivity needs complete energetics and kinetics", "bond energies, solvation and activation barriers also matter", "F₂/Cl₂ oxidizing behaviour cannot be ranked from χ alone"],
      ]} accent={T.p} />

      <H2>7 · Solved Examples</H2>
      <WorkedExample number="EN1" title="Hybridization order" question="Arrange the electronegativity of carbon in HC≡CH, H₂C=CH₂ and H₃C–CH₃." reasoning={["The hybridizations are sp, sp² and sp³.", "s character is 50%, about 33% and 25%.", "Greater s character holds electron density closer to the nucleus."]} answer="C(sp) > C(sp²) > C(sp³)." accent={T.d} />
      <WorkedExample number="EN2" title="Bond polarity" question="Which bond is more polar: H–F or H–Cl?" reasoning={["F has higher electronegativity than Cl.", "The electronegativity difference from H is therefore larger for H–F."]} answer="H–F is more polar." accent={T.cyan} />
      <WorkedExample number="EN3" title="Polar bonds but non-polar molecule" question="Why is CO₂ non-polar?" reasoning={["Each C=O bond is polar toward O.", "CO₂ is linear.", "The two equal bond-dipole vectors cancel."]} answer="Net dipole moment is zero despite polar bonds." accent={T.gold} />
      <WorkedExample number="EN4" title="Oxidation number in OF₂" question="Find the oxidation number of oxygen in OF₂." reasoning={["F is more electronegative than O and is assigned −1.", "Two F atoms contribute −2 in total.", "The neutral molecule requires oxygen to be +2."]} answer="Oxidation number of O = +2." accent={T.p} />
      <WorkedExample number="EN5" title="Acid strength by induction" question="Why is ClCH₂COOH stronger than CH₃COOH?" reasoning={["Cl withdraws electron density through the σ framework.", "The carboxylate conjugate base is stabilized.", "Greater conjugate-base stabilization increases acidity."]} answer="The −I effect of chlorine increases acid strength." accent={T.cyan} />
      <WorkedExample number="EN6" title="Ionic character" question="Which has greater covalent character, LiF or LiI?" reasoning={["The cation is the same.", "I⁻ is larger and more polarizable than F⁻.", "Li⁺ distorts I⁻ more strongly, increasing covalent character."]} answer="LiI is more covalent; LiF has greater ionic character." accent={T.gold} />
      <WorkedExample number="EN7" title="Oxide character" question="Arrange Na₂O, Al₂O₃ and SO₃ in increasing acidic character." reasoning={["Na is strongly electropositive, so Na₂O is basic.", "Al₂O₃ is amphoteric.", "S is more electronegative and in a high oxidation state, so SO₃ is acidic."]} answer="Na₂O < Al₂O₃ < SO₃." accent={T.p} />
      <WorkedExample number="EN8" title="Pauling ionic-character estimate" question="Estimate the qualitative ionic character when Δχ increases from 0.5 to 2.0." reasoning={["The exponential Pauling expression increases with (Δχ)².", "A fourfold increase in Δχ produces a much larger ionic contribution.", "The relation remains approximate and does not create a sharp boundary."]} answer="The bond with Δχ = 2.0 has much greater ionic character." accent={T.d} />
    </div>
  );
}


/* =============================================================================
   SECTION — Chemical Periodicity
   ========================================================================== */
export function SectionChemicalPeriodicity() {
  return (
    <>
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
            <Callout kind="special" title="Maximum oxidation state is not the same as maximum covalency">
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
            <MathBlock tex={String.raw`\mathrm{CrO<Cr_2O_3<CrO_3}\quad\text{in acidic character}`} />
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
              HF is a weak acid in water relative to HCl, HBr and HI despite fluorine's high electronegativity because the H–F bond is unusually strong and extensive hydrogen bonding affects the solution chemistry.
            </P>

            <H2>6 · Lattice Enthalpy, Hydration Enthalpy and Solubility</H2>
            <P>
              The stability of an ionic solid depends strongly on electrostatic attraction between gaseous ions. A simple model predicts that lattice enthalpy magnitude increases with ionic charge and decreases with interionic distance. Hydration enthalpy is released when gaseous ions become surrounded by water molecules and similarly grows with charge density.
            </P>
            <MathBlock tex={String.raw`|U|\propto\frac{|z_+z_-|}{r_++r_-}`} />
            <MathBlock tex={String.raw`|\Delta H_{\mathrm{hyd}}|\text{ generally increases with }\frac{|z|}{r_{\mathrm{ion}}}`} />
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
            <Callout kind="special" title="Solubility is a competition">
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
      <div
        data-integration="SectionChemicalPeriodicity-periodicity-generated-corpus-phd-v9"
        style={{ marginTop: 34 }}
      >
        <PeriodicTableDeepAdditions topic="chemistry" />
      </div>
    </>
  );
}

/* =============================================================================
   SECTION — Special Relationships and Advanced Effects
   ========================================================================== */
function SectionSpecialEffectsLegacyV9() {
  return (
    <div>
      <SectionIntro
        eyebrow="Why simple vertical trends sometimes fail"
        title="Special Relationships: Second-Period Anomalies, Diagonal Similarity and Contraction Effects"
        summary="The first member of a group often behaves differently from the rest. Small size, high charge density, strong multiple bonding, poor d/f shielding and heavy-atom relativistic effects create the most important advanced special cases."
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
      <MathBlock tex={String.raw`\phi\approx\frac{|z|}{r_{\mathrm{ion}}}`} label="ionic potential / charge-density indicator" />
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
        answer="The unusually effective of 2p–2p π overlap makes N≡N uniquely strong."
        accent={T.d}
      />
    </div>
  );
}



/* =============================================================================
   SECTION — Complete Student Notebook (NCERT-aligned + JEE Advanced enrichment)
   ========================================================================== */
export function SectionStudentNotebook() {
  return (
    <div>
      <SectionIntro
        eyebrow="Write-ready theory, equations, data and applications"
        title="Complete Student Notebook: Classification of Elements and Periodicity in Properties"
        summary="This module is arranged exactly in the order in which a student can prepare handwritten notes: definition, governing relation, explanation, data table, special case, application and solved example. Definitions follow the NCERT meaning; advanced data and reasoning are added in original language for JEE Advanced."
        accent={T.gold}
      />

      <Callout kind="note" title="How to copy these notes">
        Write every green definition first, then the equation, then the trend with its cause. Put every gold special case in a margin box. Numerical values are reference data; learn the reason before memorising the order.
      </Callout>

      <H2 id="notebook-core-definitions">1 · Core Definitions</H2>
      <DefinitionBox term="Classification of elements">
        Classification is the systematic arrangement of elements into groups so that elements with related physical and chemical behaviour are studied together and recurring trends become visible.
      </DefinitionBox>
      <DefinitionBox term="Periodicity">
        Periodicity is the recurrence of similar physical and chemical properties at regular intervals when elements are arranged in increasing atomic number. The recurrence originates from the repetition of similar valence-shell electronic configurations.
      </DefinitionBox>
      <DefinitionBox term="Modern periodic law">
        The physical and chemical properties of elements are periodic functions of their atomic numbers.
      </DefinitionBox>
      <DefinitionBox term="Atomic radius">
        Because an isolated atom has no sharp boundary, atomic size is estimated from internuclear distances in bonded or condensed states. For non-metals the covalent radius is used; for metals the metallic radius is used.
      </DefinitionBox>
      <DefinitionBox term="Ionic radius">
        Ionic radius is an effective radius assigned to an ion from measured internuclear distances between neighbouring cations and anions in an ionic crystal. Its value depends on charge, coordination number and crystal environment.
      </DefinitionBox>
      <DefinitionBox term="Ionization enthalpy">
        Ionization enthalpy is the enthalpy required to remove the most loosely bound electron from an isolated gaseous atom in its ground state. It is always positive for electron removal.
      </DefinitionBox>
      <DefinitionBox term="Electron gain enthalpy">
        Electron gain enthalpy is the enthalpy change when an isolated gaseous atom accepts an electron to form a gaseous anion. A negative value means that energy is released.
      </DefinitionBox>
      <DefinitionBox term="Electronegativity">
        Electronegativity is a qualitative measure of the ability of an atom in a chemical compound to attract the shared electron pair towards itself. It is not a directly measurable property of an isolated atom.
      </DefinitionBox>

      <H2 id="notebook-history">2 · Historical Development: Complete Note Sequence</H2>
      <DataTable
        columns={["Scientist / scheme", "Basis", "Main observation", "Contribution", "Failure / limitation"]}
        rows={[
          ["Lavoisier", "metallic character", "elements divided broadly into metals and non-metals", "first simple chemical classification", "could not place metalloids or reveal detailed family relationships"],
          ["Döbereiner", "atomic weight and similar properties", "middle member of a triad had atomic weight close to the mean of the other two", "showed a numerical relation inside chemical families", "worked for only a small number of elements"],
          ["de Chancourtois", "increasing atomic weight on a cylinder", "similar elements appeared vertically on a telluric helix", "first geometrical display of periodic recurrence", "chemical meaning was not communicated clearly and the scheme mainly fitted lighter elements"],
          ["Newlands", "increasing atomic weight", "every eighth element often resembled the first", "introduced the law of octaves", "worked mainly up to calcium; no gaps were left for undiscovered elements; unlike elements were sometimes grouped"],
          ["Lothar Meyer", "atomic weight versus physical properties", "atomic volume and several physical properties varied periodically", "gave strong graphical evidence for periodicity", "did not provide a powerful predictive table or detailed chemical placement"],
          ["Mendeleev", "atomic weight with chemical similarity", "properties recurred periodically and gaps could be left", "systematic table, predictions and correction of doubtful data", "could not explain isotopes, anomalous pairs, hydrogen or the electronic cause of periodicity"],
          ["Moseley", "atomic number", "X-ray frequency established atomic number as the fundamental ordering variable", "resolved mass-order anomalies and produced modern periodic law", "electronic structure was still needed to explain the detailed recurrence"],
        ]}
        accent={T.gold}
      />

      <H3>Lothar Meyer: theory, relation, observations and significance</H3>
      <MathBlock tex={String.raw`\text{Atomic volume}=\frac{\text{molar mass}}{\text{density}}`} label="Definition used in the curve" />
      <RelationBox
        title="What the atomic-volume curve shows"
        relations={[
          <>Alkali metals such as <MathInline tex={String.raw`\mathrm{Li,Na,K,Rb,Cs}`} /> lie near major peaks because their atoms have large volumes.</>,
          <>Alkaline-earth metals lie on descending branches after the alkali-metal peaks.</>,
          <>Halogens lie on ascending branches immediately before the next alkali-metal maximum.</>,
          <>Transition elements occupy broad minima because their atomic volumes change only gradually across a series.</>,
          <>Within a period, atomic volume generally falls to a broad minimum and then rises; down a family it increases.</>,
          <>Melting point, boiling point, density and thermal expansion also display periodic variation.</>,
        ]}
      />
      <StudentNote heading="Why Meyer was important" accent={T.d}>
        Meyer demonstrated periodicity through measurable physical data. Mendeleev became more influential because he converted periodicity into a chemical classification system, deliberately left gaps and predicted properties of missing elements.
      </StudentNote>

      <H3>Mendeleev: law, construction, merits and failures</H3>
      <DefinitionBox term="Mendeleev periodic law">
        The physical and chemical properties of elements are periodic functions of their atomic weights.
      </DefinitionBox>
      <DataTable
        columns={["Merit", "Detailed meaning", "Representative illustration"]}
        rows={[
          ["Systematic study", "elements with similar chemistry were brought into the same vertical family", "alkali metals, halogens and chalcogens became easier to compare"],
          ["Prediction of missing elements", "gaps were retained and approximate properties were inferred from neighbouring elements", "eka-boron → scandium; eka-aluminium → gallium; eka-silicon → germanium; eka-manganese → technetium"],
          ["Correction of doubtful atomic masses", "chemical valency and group behaviour were used to reconsider incorrect atomic-mass assignments", "beryllium was placed with group 2 rather than group 13"],
          ["Priority to properties", "strict mass order was reversed when chemical similarity demanded it", "tellurium before iodine; cobalt before nickel"],
          ["Accommodation of noble gases", "a new zero group could be inserted without disturbing the established families", "He, Ne, Ar, Kr, Xe and Rn"],
        ]}
        accent={T.d}
      />
      <DataTable
        columns={["Failure / limitation", "Why the old table could not solve it", "Modern resolution"]}
        rows={[
          ["Position of hydrogen", "hydrogen resembles both alkali metals and halogens", "treated as a special case because of its unique 1s¹ configuration"],
          ["Isotopes", "isotopes have different masses but essentially the same chemistry", "same atomic number gives one position"],
          ["Anomalous mass pairs", "Ar–K, Co–Ni and Te–I violate increasing atomic-mass order", "atomic number restores the correct sequence"],
          ["Rare-earth placement", "lanthanoids and actinoids could not be accommodated cleanly", "f-block is shown separately while preserving periodic relationships"],
          ["No explanation of recurrence", "atomic weight alone did not explain why properties repeat", "valence-shell electronic configurations provide the cause"],
        ]}
        accent={T.p}
      />

      <H2 id="notebook-modern-table">3 · Modern Periodic Table and Electronic Basis</H2>
      <MathBlock tex={String.raw`\text{Period number}=\text{highest principal quantum number }(n)\text{ in the ground-state configuration}`} />
      <DataTable
        columns={["Block", "General outer configuration", "Groups / location", "Characteristic idea"]}
        rows={[
          ["s-block", <MathInline tex={String.raw`ns^{1-2}`} />, "groups 1 and 2", "electropositive metals; low ionization enthalpy; mainly +1 or +2 ions"],
          ["p-block", <MathInline tex={String.raw`ns^2np^{1-6}`} />, "groups 13 to 18", "metals, metalloids and non-metals; wide oxidation-state chemistry"],
          ["d-block", <MathInline tex={String.raw`(n-1)d^{1-10}ns^{0-2}`} />, "groups 3 to 12", "variable oxidation states, coloured ions, magnetism and catalysis"],
          ["f-block", <MathInline tex={String.raw`(n-2)f^{1-14}(n-1)d^{0-1}ns^2`} />, "lanthanoids and actinoids", "inner-transition elements; gradual contraction and closely related chemistry"],
        ]}
        accent={T.cyan}
      />
      <RelationBox
        title="Number of elements in a period"
        relations={[
          <>Each orbital holds two electrons.</>,
          <><MathInline tex={String.raw`s,p,d,f`} /> subshells contain 1, 3, 5 and 7 orbitals, so they hold 2, 6, 10 and 14 electrons.</>,
          <>Period 1 has 2 elements; periods 2 and 3 have 8 each; periods 4 and 5 have 18 each; periods 6 and 7 can contain 32 each.</>,
        ]}
      />
      <Callout kind="special" title="Hydrogen and helium">
        Hydrogen is a special case: its <MathInline tex={String.raw`1s^1`} /> configuration resembles group 1, while its ability to gain one electron resembles group 17. Helium has an s-block configuration <MathInline tex={String.raw`1s^2`} />, but its complete valence shell and inert behaviour justify placement in group 18.
      </Callout>

      <H2 id="notebook-radius">4 · Atomic, Covalent, Metallic, van der Waals and Ionic Radii</H2>
      <MathBlock tex={String.raw`r_{\mathrm{covalent}}=\frac{1}{2}d(A-A)`} label="Homonuclear single bond" />
      <MathBlock tex={String.raw`r_{\mathrm{metallic}}=\frac{1}{2}d(M-M)`} label="Nearest neighbours in a metal crystal" />
      <MathBlock tex={String.raw`r_{\mathrm{vdW}}=\frac{1}{2}d_{\mathrm{closest\ nonbonded\ contact}}`} />
      <RelationBox
        title="Fundamental size relations"
        relations={[
          <><MathInline tex={String.raw`r_{\mathrm{vdW}}>r_{\mathrm{metallic}}>r_{\mathrm{covalent}}`} /> when the three quantities are meaningful for the same element.</>,
          <><MathInline tex={String.raw`r(\mathrm{cation})<r(\mathrm{atom})<r(\mathrm{anion})`} /> for the same nucleus.</>,
          <>Across a period: effective nuclear charge rises while the principal shell remains the same, so radius generally decreases.</>,
          <>Down a group: a new principal shell is added and shielding rises, so radius generally increases.</>,
          <>In an isoelectronic series, radius decreases as nuclear charge increases.</>,
        ]}
      />
      <MathBlock tex={String.raw`\mathrm{O^{2-}>F^->Na^+>Mg^{2+}>Al^{3+}}`} label="Isoelectronic order: ten electrons" />
      <MathBlock tex={String.raw`\mathrm{S^{2-}>Cl^->K^+>Ca^{2+}>Sc^{3+}}`} label="Isoelectronic order: eighteen electrons" />

      <H3>NCERT atomic-radius data</H3>
      <DataTable
        columns={["Series", "Atomic radii / pm"]}
        rows={[
          ["Period 2", <MathInline tex={String.raw`\mathrm{Li\ 152>Be\ 111>B\ 88>C\ 77>N\ 74>O\ 66>F\ 64}`} />],
          ["Period 3", <MathInline tex={String.raw`\mathrm{Na\ 186>Mg\ 160>Al\ 143>Si\ 117>P\ 110>S\ 104>Cl\ 99}`} />],
          ["Group 1", <MathInline tex={String.raw`\mathrm{Li\ 152<Na\ 186<K\ 231<Rb\ 244<Cs\ 262}`} />],
          ["Group 17", <MathInline tex={String.raw`\mathrm{F\ 64<Cl\ 99<Br\ 114<I\ 133<At\ 140}`} />],
        ]}
        accent={T.gold}
      />

      <H3>Representative covalent-radius data / Å</H3>
      <DataTable
        columns={["Family", "Values", "Important special case"]}
        rows={[
          ["Group 13", "B 0.80; Al 1.43; Ga 1.35; In 1.67; Tl 1.70", "Ga is smaller than Al because 3d electrons shield poorly; In → Tl increase is small because of lanthanoid contraction"],
          ["Group 14", "C 0.77; Si 1.17; Ge 1.22; Sn 1.41; Pb 1.44", "Sn and Pb are close because of lanthanoid contraction and relativistic effects"],
          ["Group 15", "N 0.74; P 1.10; As 1.21; Sb 1.41; Bi 1.52", "the increase is not perfectly uniform"],
          ["Group 16", "O 0.66; S 1.04; Se 1.14; Te 1.37", "O is unusually small because it uses the compact n = 2 shell"],
          ["Group 17", "F 0.64; Cl 0.99; Br 1.14; I 1.33", "size increases down the family"],
        ]}
        accent={T.cyan}
      />
      <Callout kind="special" title="Noble-gas radius">
        Noble gases are monatomic and normally do not form covalent bonds. Their quoted atomic radii are usually van der Waals radii and must not be compared directly with covalent radii of neighbouring elements.
      </Callout>

      <H2 id="notebook-ionization">5 · Ionization Enthalpy: IE₁, IE₂, IE₃ and the Giant Jump</H2>
      <MathBlock tex={String.raw`\mathrm{X(g)\rightarrow X^+(g)+e^-}\qquad \Delta_iH_1>0`} />
      <MathBlock tex={String.raw`\mathrm{X^+(g)\rightarrow X^{2+}(g)+e^-}\qquad \Delta_iH_2>\Delta_iH_1`} />
      <MathBlock tex={String.raw`\mathrm{X^{2+}(g)\rightarrow X^{3+}(g)+e^-}\qquad \Delta_iH_3>\Delta_iH_2`} />
      <RelationBox
        title="Factors controlling ionization enthalpy"
        relations={[
          <>Smaller atomic radius and larger effective nuclear charge increase ionization enthalpy.</>,
          <>Greater shielding decreases ionization enthalpy.</>,
          <>For electrons in the same shell, penetration and attraction generally follow <MathInline tex={String.raw`s>p>d>f`} />.</>,
          <>Removal that destroys a half-filled or completely filled stable subshell is relatively difficult.</>,
          <>Down a group, increased distance and shielding usually outweigh increased nuclear charge, so IE decreases.</>,
        ]}
      />
      <H3>First ionization enthalpy of the second period / kJ mol⁻¹</H3>
      <DataTable
        columns={["Li", "Be", "B", "C", "N", "O", "F", "Ne"]}
        rows={[[520, 899, 801, 1086, 1402, 1314, 1681, 2080]]}
        accent={T.gold}
      />
      <Callout kind="special" title="B–Be and O–N special cases">
        <MathInline tex={String.raw`\mathrm{IE_1(B)<IE_1(Be)}`} /> because the electron removed from B is a more shielded 2p electron, while Be loses a penetrating 2s electron. <MathInline tex={String.raw`\mathrm{IE_1(O)<IE_1(N)}`} /> because O contains one paired 2p electron with extra repulsion, whereas N has the stable half-filled <MathInline tex={String.raw`2p^3`} /> arrangement.
      </Callout>
      <H3>Successive ionization data and valence-electron diagnosis / kJ mol⁻¹</H3>
      <DataTable
        columns={["Element", "IE₁", "IE₂", "IE₃", "IE₄", "First giant jump", "Inference"]}
        rows={[
          ["Na", 496, 4562, 6910, 9543, "after IE₁", <MathInline tex={String.raw`\mathrm{Na\rightarrow Na^+}`} />],
          ["Mg", 738, 1451, 7733, 10542, "after IE₂", <MathInline tex={String.raw`\mathrm{Mg\rightarrow Mg^{2+}}`} />],
          ["Al", 578, 1817, 2745, 11577, "after IE₃", <MathInline tex={String.raw`\mathrm{Al\rightarrow Al^{3+}}`} />],
          ["Si", 787, 1577, 3232, 4356, "after IE₄ (IE₅ ≈ 16091)", "four valence electrons"],
        ]}
        accent={T.d}
      />
      <MathBlock tex={String.raw`\text{A large jump after }\mathrm{IE_n}\Rightarrow n\text{ valence electrons were removed before a core electron was reached}`} />
      <DataTable
        columns={["Group 13 element", "B", "Al", "Ga", "In", "Tl"]}
        rows={[["IE₁ / kJ mol⁻¹", 801, 577, 579, 558, 589]]}
        accent={T.p}
      />
      <Callout kind="special" title="Irregular group-13 order">
        Poor shielding by d and f electrons and relativistic contraction prevent a smooth decrease. Therefore, exact d-block and heavy p-block ionization orders must be treated as data, not forced into a simple arrow.
      </Callout>

      <H2 id="notebook-electron-gain">6 · Electron Gain Enthalpy: Sign, Data and Special Cases</H2>
      <MathBlock tex={String.raw`\mathrm{X(g)+e^-\rightarrow X^-(g)}\qquad \Delta_{eg}H_1`} />
      <MathBlock tex={String.raw`\mathrm{X^-(g)+e^-\rightarrow X^{2-}(g)}\qquad \Delta_{eg}H_2>0`} />
      <P>The second electron is added to an already negative ion, so electrostatic repulsion must be overcome. Thus the second electron gain enthalpy is positive even when the dianion is stable inside a crystal lattice.</P>
      <DataTable
        columns={["Family", "Electron gain enthalpy / kJ mol⁻¹"]}
        rows={[
          ["Group 1", "H −73; Li −60; Na −53; K −48; Rb −47; Cs −46"],
          ["Group 16", "O −141; S −200; Se −195; Te −190; Po −174"],
          ["Group 17", "F −328; Cl −349; Br −325; I −295; At −270"],
          ["Group 18", "He +48; Ne +116; Ar +96; Kr +96; Xe +77; Rn +68"],
        ]}
        accent={T.d}
      />
      <Callout kind="special" title="Why Cl is more exothermic than F, and S more exothermic than O">
        In F and O the incoming electron enters a compact 2p shell, where electron–electron repulsion is large. The 3p shell of Cl and S is more spacious, so addition is more exothermic despite the larger atomic size.
      </Callout>
      <RelationBox
        title="Do not confuse electron gain enthalpy with oxidizing power"
        relations={[
          <>Electron gain enthalpy is one gas-phase atomic step.</>,
          <>Aqueous oxidizing strength also depends on bond dissociation, atomization, hydration, entropy and electrode potential.</>,
          <>Therefore <MathInline tex={String.raw`\mathrm{F_2}`} /> is the strongest aqueous oxidizing halogen even though atomic Cl has the more negative electron gain enthalpy.</>,
        ]}
      />

      <H2 id="notebook-electronegativity">7 · Electronegativity: Scales, Equations and Applications</H2>
      <DataTable
        columns={["Scale", "Physical basis", "Equation / relation", "Use"]}
        rows={[
          ["Pauling", "extra stabilization of a heteronuclear bond", <MathInline tex={String.raw`|\chi_A-\chi_B|\propto\sqrt{\Delta}`} />, "bond polarity and relative values; F = 4.0"],
          ["Mulliken", "average of ionization energy and electron affinity", <MathInline tex={String.raw`\chi_M=\frac{IE+EA}{2}`} />, "use IE and EA in eV per atom"],
          ["Allred–Rochow", "electrostatic attraction at covalent radius", <MathInline tex={String.raw`\chi_{AR}=0.359\frac{Z_{eff}}{r^2}+0.744`} />, "r in Å; relates χ to effective nuclear charge and size"],
        ]}
        accent={T.cyan}
      />
      <H3>NCERT Pauling values</H3>
      <DataTable
        columns={["Series", "Electronegativity order and values"]}
        rows={[
          ["Period 2", "Li 1.0 < Be 1.5 < B 2.0 < C 2.5 < N 3.0 < O 3.5 < F 4.0"],
          ["Period 3", "Na 0.9 < Mg 1.2 < Al 1.5 < Si 1.8 < P 2.1 < S 2.5 < Cl 3.0"],
          ["Group 1", "Li 1.0 > Na 0.9 > K 0.8 ≈ Rb 0.8 > Cs 0.7"],
          ["Group 17", "F 4.0 > Cl 3.0 > Br 2.8 > I 2.5 > At 2.2"],
        ]}
        accent={T.gold}
      />
      <MathBlock tex={String.raw`\%\,\text{ionic character}\approx16\Delta\chi+3.5(\Delta\chi)^2`} label="Hannay–Smith relation" />
      <RelationBox
        title="Major applications of electronegativity"
        relations={[
          <>Predict the direction of bond polarization and assign <MathInline tex={String.raw`\delta^+`} /> and <MathInline tex={String.raw`\delta^-`} />.</>,
          <>Estimate the relative ionic character of a bond.</>,
          <>Assign oxidation numbers by giving the shared pair formally to the more electronegative atom.</>,
          <>Compare acidic/basic character of oxides and hydroxides.</>,
          <>Compare effective electronegativity with hybridization: <MathInline tex={String.raw`\chi(\mathrm{sp})>\chi(\mathrm{sp^2})>\chi(\mathrm{sp^3})`} />.</>,
          <>Predict bond type cautiously; molecular geometry, lattice energy and polarization can modify the simple Δχ prediction.</>,
        ]}
      />
      <MathBlock tex={String.raw`\mathrm{Na_2O<MgO<Al_2O_3<SiO_2<P_4O_{10}<SO_3<Cl_2O_7}`} label="Acidic character generally increases across period 3" />
      <Callout kind="special" title="Electronegativity is environment-dependent">
        An element does not possess one exact electronegativity in every compound. Oxidation state, hybridization, substituents and the bonded partner modify its effective value.
      </Callout>

      <H2 id="notebook-aqueous-mobility">8 · Conductivity and Mobility of Ions in Aqueous Solution</H2>
      <DefinitionBox term="Ionic mobility">
        Ionic mobility is the drift velocity acquired by an ion per unit electric field. In water it depends on charge, solvation, hydrated radius, viscosity, temperature and ion–solvent interactions.
      </DefinitionBox>
      <MathBlock tex={String.raw`u_i=\frac{v_i}{E}\qquad\text{and}\qquad \lambda_i^0=|z_i|Fu_i`} />
      <RelationBox
        title="Bare radius versus hydrated radius"
        relations={[
          <>A small, high-charge ion has high charge density and attracts a thick, strongly bound hydration shell.</>,
          <>Therefore the smallest bare ion may behave as the largest hydrated species and move more slowly through water.</>,
          <>For ions of the same charge, hydration enthalpy magnitude generally decreases as bare ionic radius increases.</>,
        ]}
      />
      <DataTable
        columns={["Series in water", "Hydration strength", "Hydrated size", "Mobility / limiting conductivity trend"]}
        rows={[
          ["Alkali-metal ions", <MathInline tex={String.raw`\mathrm{Li^+>Na^+>K^+>Rb^+>Cs^+}`} />, <MathInline tex={String.raw`\mathrm{Li^+>Na^+>K^+>Rb^+\approx Cs^+}`} />, <MathInline tex={String.raw`\mathrm{Li^+<Na^+<K^+<Rb^+\approx Cs^+}`} />],
          ["Alkaline-earth ions", <MathInline tex={String.raw`\mathrm{Mg^{2+}>Ca^{2+}>Sr^{2+}>Ba^{2+}}`} />, "decreases from Mg²⁺ to Ba²⁺", <MathInline tex={String.raw`\mathrm{Mg^{2+}<Ca^{2+}<Sr^{2+}<Ba^{2+}}`} />],
          ["Halide ions", <MathInline tex={String.raw`\mathrm{F^->Cl^->Br^->I^-}`} />, "decreases from F⁻ to I⁻", <MathInline tex={String.raw`\mathrm{F^-<Cl^-<Br^-\approx I^-}`} />],
        ]}
        accent={T.f}
      />
      <Callout kind="special" title="Why aqueous reducing power is not predicted from IE alone">
        Gas-phase ionization favours the heavier alkali metals, but the very large hydration enthalpy of <MathInline tex={String.raw`\mathrm{Li^+}`} /> strongly stabilizes the aqueous product. Therefore a complete thermochemical cycle is required; a single periodic property is insufficient.
      </Callout>

      <H2 id="notebook-chemical-reactivity">9 · Chemical Reactivity, Oxides, Hydrides and Energetic Relations</H2>
      <RelationBox
        title="Across a representative period"
        relations={[
          <>Metallic character decreases and non-metallic character increases.</>,
          <>Oxides change broadly from basic → amphoteric → acidic.</>,
          <>Highest oxidation state in the main group generally follows the number of valence electrons up to group 17.</>,
          <>Reducing character of elements generally decreases while oxidizing character increases.</>,
        ]}
      />
      <MathBlock tex={String.raw`\mathrm{Na_2O\ (basic)\rightarrow MgO\ (basic)\rightarrow Al_2O_3\ (amphoteric)\rightarrow SiO_2,P_4O_{10},SO_3,Cl_2O_7\ (acidic)}`} />
      <DataTable
        columns={["Property", "Down a group", "Reason"]}
        rows={[
          ["Hydration enthalpy magnitude", "decreases", "ionic radius increases and charge density falls"],
          ["Lattice enthalpy magnitude for analogous salts", "generally decreases", "interionic distance increases"],
          ["Acidity of binary hydrides", "generally increases", "E–H bond becomes longer and weaker"],
          ["Thermal stability of many covalent hydrides", "generally decreases", "E–H bond strength decreases"],
          ["Basicity of metallic oxides / hydroxides", "generally increases", "metallic and ionic character increase"],
        ]}
        accent={T.p}
      />
      <MathBlock tex={String.raw`\mathrm{HF<HCl<HBr<HI}`} label="Acid strength in water" />
      <Callout kind="special" title="HF is a weak hydrohalic acid">
        The high electronegativity of fluorine alone does not control aqueous acidity. The H–F bond is unusually strong and extensive hydrogen bonding affects ionization.
      </Callout>

      <H2 id="notebook-family-data">10 · Family-wise Reference Orders</H2>
      <DataTable
        columns={["Family", "Important orders", "Reason / note"]}
        rows={[
          ["Alkali metals", "IE: Li > Na > K > Rb > Cs; radius: Li < Na < K < Rb < Cs; hydration: Li⁺ > Na⁺ > K⁺ > Rb⁺ > Cs⁺", "aqueous reducing power needs the complete hydration cycle"],
          ["Alkaline earth metals", "radius: Be < Mg < Ca < Sr < Ba; hydration: Be²⁺ > Mg²⁺ > Ca²⁺ > Sr²⁺ > Ba²⁺", "Be compounds are unusually covalent because Be²⁺ is very small"],
          ["Group 13", "IE₁: B > Tl > Ga ≳ Al > In; radius: B < Ga < Al < In < Tl", "d- and f-block contraction disturb smooth trends"],
          ["Group 14", "IE₁: C > Si > Ge > Sn > Pb; radius: C < Si < Ge < Sn < Pb", "inert-pair effect increases down the group"],
          ["Group 15", "IE₁: N > P > As > Sb > Bi; radius increases down the group", "N is unusually small and forms strong pπ–pπ multiple bonds"],
          ["Group 16", "EGE magnitude: S > Se > Te > Po > O; EN: O > S > Se > Te > Po", "O is compact; electron addition suffers high 2p crowding"],
          ["Group 17", "IE: F > Cl > Br > I; EGE magnitude: Cl > F > Br > I; EN: F > Cl > Br > I", "F is most electronegative, but Cl has the most exothermic atomic electron addition"],
          ["Noble gases", "IE decreases He → Rn; size, melting point, boiling point and polarizability increase down the group", "electron gain enthalpy is positive because the next electron enters a new shell"],
        ]}
        accent={T.gold}
      />

      <H2 id="notebook-special-cases">11 · High-Yield Special Cases and Their Causes</H2>
      <DataTable
        columns={["Observed special case", "Correct explanation"]}
        rows={[
          [<MathInline tex={String.raw`\mathrm{Ga<Al}`} />, "poor shielding by filled 3d electrons increases effective nuclear attraction in Ga"],
          [<MathInline tex={String.raw`\mathrm{Zr\approx Hf}`} />, "lanthanoid contraction makes 5d Hf nearly the same size as 4d Zr"],
          [<MathInline tex={String.raw`\mathrm{IE_1(B)<IE_1(Be)}`} />, "2p electron of B is easier to remove than the penetrating 2s electron of Be"],
          [<MathInline tex={String.raw`\mathrm{IE_1(O)<IE_1(N)}`} />, "paired-electron repulsion in O versus half-filled 2p³ stability of N"],
          [<MathInline tex={String.raw`\Delta_{eg}H(\mathrm{Cl})<\Delta_{eg}H(\mathrm{F})`} />, "electron addition to compact F 2p shell suffers greater crowding"],
          ["Li is a powerful aqueous reducing agent", "large hydration enthalpy of Li⁺ stabilizes the product"],
          ["Al₂O₃ and BeO are amphoteric", "high charge density and polarization give intermediate ionic/covalent behaviour"],
          ["Second-period elements differ strongly from heavier congeners", "small size, high electronegativity, absence of low-energy d orbitals and strong pπ–pπ bonding"],
        ]}
        accent={T.p}
      />

      <H2 id="notebook-worked-examples">12 · Worked Examples for Student Notes</H2>
      <WorkedExample
        number="N1"
        title="Identify valence electrons from successive IE"
        question="The first four ionization enthalpies are 738, 1451, 7733 and 10542 kJ mol⁻¹. Predict the group and stable simple ion."
        reasoning={[
          "The large jump occurs between IE₂ and IE₃.",
          "Two valence electrons are removed before a core electron is reached.",
          "The element belongs to group 2 and preferentially forms M²⁺.",
        ]}
        answer="Group 2; the data are characteristic of Mg and the stable ion is Mg²⁺."
        accent={T.gold}
      />
      <WorkedExample
        number="N2"
        title="Radius of an isoelectronic series"
        question="Arrange O²⁻, F⁻, Na⁺, Mg²⁺ and Al³⁺ in decreasing radius."
        reasoning={[
          "All five species contain ten electrons.",
          "Nuclear charge increases from O (Z = 8) to Al (Z = 13).",
          "For a fixed electron count, higher nuclear charge contracts the cloud.",
        ]}
        answer="O²⁻ > F⁻ > Na⁺ > Mg²⁺ > Al³⁺."
        accent={T.cyan}
      />
      <WorkedExample
        number="N3"
        title="Bare ion versus hydrated ion"
        question="Why does Li⁺ move more slowly than K⁺ in water although bare Li⁺ is smaller?"
        reasoning={[
          "Li⁺ has much higher charge density.",
          "It binds water molecules much more strongly and carries a larger hydration shell.",
          "The effective hydrated radius is therefore larger and its mobility is lower.",
        ]}
        answer="In water: mobility Li⁺ < K⁺ because hydrated size, not bare crystal radius alone, controls motion."
        accent={T.f}
      />
      <WorkedExample
        number="N4"
        title="Electron gain enthalpy and oxidizing power"
        question="Why can F₂ be a stronger oxidizing agent in water even though Cl has more negative atomic electron gain enthalpy?"
        reasoning={[
          "Electron gain enthalpy refers to isolated gaseous atoms.",
          "Oxidation by X₂ includes X–X bond breaking and hydration of X⁻.",
          "The unusually favourable hydration of F⁻ and the complete electrode cycle make F₂ the stronger aqueous oxidant.",
        ]}
        answer="Aqueous oxidizing strength is a complete thermodynamic-cycle property, not an atomic-EGE ranking."
        accent={T.d}
      />
      <WorkedExample
        number="N5"
        title="Oxide character across a period"
        question="Classify Na₂O, Al₂O₃ and SO₃ as basic, amphoteric or acidic."
        reasoning={[
          "Na is strongly electropositive, so Na₂O is highly ionic and basic.",
          "Al³⁺ has high charge density, giving Al₂O₃ intermediate amphoteric behaviour.",
          "S in a high oxidation state forms a covalent oxide that produces an acid with water.",
        ]}
        answer="Na₂O basic; Al₂O₃ amphoteric; SO₃ acidic."
        accent={T.p}
      />

      <H2 id="notebook-final-relations">13 · Final Relation Sheet</H2>
      <DataTable
        columns={["Change", "Direct effect", "Common consequence"]}
        rows={[
          [<MathInline tex={String.raw`Z_{eff}\uparrow`} />, <MathInline tex={String.raw`r\downarrow`} />, "IE and electronegativity generally increase"],
          ["Number of shells ↑", <MathInline tex={String.raw`r\uparrow`} />, "IE and electronegativity generally decrease"],
          ["Positive charge ↑ for isoelectronic species", <MathInline tex={String.raw`r\downarrow`} />, "hydration and polarizing power increase"],
          ["Negative charge ↑ for same nucleus", <MathInline tex={String.raw`r\uparrow`} />, "electron–electron repulsion increases"],
          ["Cation charge density ↑", "polarizing power ↑", "covalent character in its compounds increases"],
          ["Anion size / polarizability ↑", "distortion ↑", "covalent character increases"],
          ["Bond order ↑", "bond length ↓", "bond strength usually increases"],
          ["Hydration enthalpy magnitude ↑", "aqueous ion stabilization ↑", "can reverse a gas-phase trend"],
        ]}
        accent={T.cyan}
      />

      <Callout kind="note" title="Final exam rule">
        Never rank a property by one arrow alone. First identify the species and physical medium; then compare shell number, electron count, nuclear charge, shielding, subshell stability, hydration and lattice effects. Use exact numerical data where d- and f-block behaviour is irregular.
      </Callout>
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
    number: "X", title: "Electron gain enthalpy special case", accent: T.d,
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
      "However, Li⁺ has unusually large hydration enthalpy because of its very small radius.",
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
    <>
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
      <div
        data-integration="SectionWorkshop-periodicity-generated-corpus-phd-v9"
        style={{ marginTop: 34 }}
      >
        <PeriodicTableDeepAdditions topic="workshop" />
      </div>
    </>
  );
}



/* =============================================================================
   SECTION — BLOCK-WISE NUMERICAL DATA ATLAS
   ========================================================================== */

const groupDataRows: React.ReactNode[][] = [
  ["Group 1", <MathInline tex={String.raw`ns^1`} />, "H, Li, Na, K, Rb, Cs, Fr", "+1; H also −1", "radius increases; IE and EN decrease", "strongly electropositive metals; Li shows strong hydration effects"],
  ["Group 2", <MathInline tex={String.raw`ns^2`} />, "Be, Mg, Ca, Sr, Ba, Ra", "+2", "radius increases; IE and EN decrease", "Be is strongly polarising; hydroxide basicity generally increases downward"],
  ["Group 13", <MathInline tex={String.raw`ns^2np^1`} />, "B, Al, Ga, In, Tl", "+3 and +1", "irregular size/IE because of d- and f-contraction", "+1 state becomes more stable downward"],
  ["Group 14", <MathInline tex={String.raw`ns^2np^2`} />, "C, Si, Ge, Sn, Pb", "+4, +2 and −4", "metallic character increases downward", "+2 state becomes more stable downward"],
  ["Group 15", <MathInline tex={String.raw`ns^2np^3`} />, "N, P, As, Sb, Bi", "−3, +3, +5", "radius increases; IE and EN generally decrease", "+3 state becomes more stable; +5 becomes less stable downward"],
  ["Group 16", <MathInline tex={String.raw`ns^2np^4`} />, "O, S, Se, Te, Po", "−2, +2, +4, +6", "electron gain is strongly favourable but O is a special case", "hydride acidity and reducing strength increase downward"],
  ["Group 17", <MathInline tex={String.raw`ns^2np^5`} />, "F, Cl, Br, I, At", "−1; positive states except F", "radius increases; IE and EN decrease", "Cl has the most exothermic first electron gain among the family"],
  ["Group 18", <MathInline tex={String.raw`ns^2np^6`} />, "He, Ne, Ar, Kr, Xe, Rn", "0; Xe/Kr form compounds", "very high IE; positive first electron gain enthalpy", "van der Waals radius and polarizability increase downward"],
];


const mainGroupPhysicalRows: React.ReactNode[][] = [
  ["Group 1", "Li < Na < K < Rb < Cs", "Li > Na > K > Rb > Cs", "H −73; Li −60; Na −53; K −48; Rb −47; Cs −46", "Li 1.0; Na 0.9; K 0.8; Rb 0.8; Cs 0.7"],
  ["Group 2", "Be < Mg < Ca < Sr < Ba", "Be > Mg > Ca > Sr > Ba", "small or positive/weakly negative because addition begins an np subshell", "Be > Mg > Ca ≈ Sr > Ba"],
  ["Group 13", "B < Ga < Al < In < Tl (approx.)", "B highest; Al/Ga/In/Tl irregular", "irregular; no smooth group order", "B highest; heavier members close and irregular"],
  ["Group 14", "C < Si < Ge < Sn ≲ Pb", "C > Si > Ge ≳ Pb > Sn (approx.)", "moderately exothermic but irregular", "C highest; Si, Ge, Sn and Pb close"],
  ["Group 15", "N < P < As < Sb < Bi", "N > P > As > Sb > Bi", "N is unusually unfavourable because np³ is half-filled", "N > P > As > Sb ≈ Bi"],
  ["Group 16", "O < S < Se < Te < Po", "O > S > Se > Te > Po", "O −141; S −200; Se −195; Te −190; Po −174", "O > S > Se > Te > Po"],
  ["Group 17", "F < Cl < Br < I < At", "F > Cl > Br > I", "F −328; Cl −349; Br −325; I −295; At −270", "F 4.0; Cl 3.0; Br 2.8; I 2.5; At 2.2"],
  ["Group 18", "van der Waals radius increases downward", "He > Ne > Ar > Kr > Xe > Rn", "He +48; Ne +116; Ar +96; Kr +96; Xe +77; Rn +68", "usually not assigned in elementary Pauling tables"],
];

const mainGroupChemicalRows: React.ReactNode[][] = [
  ["Group 1", "+1", "MH", "M₂O / peroxides / superoxides", "hydroxide basicity and water reactivity increase downward", "Li forms nitride and shows strong diagonal similarity with Mg"],
  ["Group 2", "+2", "MH₂", "MO", "hydroxide basicity generally increases; sulfate solubility decreases", "BeO and Be(OH)₂ are amphoteric and Be compounds are highly covalent"],
  ["Group 13", "+3, +1", "EH₃ units; B₂H₆ important", "E₂O₃", "acidic B₂O₃ → amphoteric Al₂O₃/Ga₂O₃ → more basic heavier oxides", "inert-pair effect stabilises Tl(I)"],
  ["Group 14", "+4, +2, −4", "EH₄", "EO₂ and EO", "EO₂ becomes less acidic/more amphoteric downward", "catenation: C ≫ Si > Ge ≈ Sn > Pb"],
  ["Group 15", "−3, +3, +5", "EH₃", "E₂O₃ and E₂O₅", "hydride basicity and thermal stability decrease downward", "+3 state gains stability; +5 state loses stability"],
  ["Group 16", "−2, +2, +4, +6", "H₂E", "EO₂ and EO₃", "hydride acidity and reducing character increase downward", "O cannot show +6; sulfur and heavier members show expanded oxidation-state chemistry"],
  ["Group 17", "−1; +1,+3,+5,+7 except F", "HX", "X₂O, X₂O₃, X₂O₅, X₂O₇", "HX acidity: HF < HCl < HBr < HI", "F shows only −1 in ordinary compounds and is the strongest electronegative element"],
  ["Group 18", "0; positive states mainly Xe/Kr", "no stable ordinary hydride series", "XeO₃, XeO₄ and xenon oxofluorides", "reactivity increases downward as IE falls and polarizability rises", "Xe forms the widest range of compounds"],
];

const dSeriesConfigurations: React.ReactNode[][] = [
  ["3d series · period 4", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn"],
  ["Outer configuration", "3d¹4s²", "3d²4s²", "3d³4s²", "3d⁵4s¹", "3d⁵4s²", "3d⁶4s²", "3d⁷4s²", "3d⁸4s²", "3d¹⁰4s¹", "3d¹⁰4s²"],
  ["4d series · period 5", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd"],
  ["Outer configuration", "4d¹5s²", "4d²5s²", "4d⁴5s¹", "4d⁵5s¹", "4d⁶5s¹", "4d⁷5s¹", "4d⁸5s¹", "4d¹⁰5s⁰", "4d¹⁰5s¹", "4d¹⁰5s²"],
  ["5d series · period 6", "La", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg"],
  ["Outer configuration", "5d¹6s²", "5d²6s²", "5d³6s²", "5d⁴6s²", "5d⁵6s²", "5d⁶6s²", "5d⁷6s²", "5d⁹6s¹", "5d¹⁰6s¹", "5d¹⁰6s²"],
  ["6d series · period 7", "Ac", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn"],
  ["Outer configuration", "6d¹7s²", "6d²7s²", "6d³7s²", "6d⁴7s²", "6d⁵7s²", "6d⁶7s²", "6d⁷7s²", "6d⁸7s²", "6d¹⁰7s¹", "6d¹⁰7s²"],
];

const firstTransitionDataRows: React.ReactNode[][] = [
  ["Atomic number", 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  ["M", "3d¹4s²", "3d²4s²", "3d³4s²", "3d⁵4s¹", "3d⁵4s²", "3d⁶4s²", "3d⁷4s²", "3d⁸4s²", "3d¹⁰4s¹", "3d¹⁰4s²"],
  ["M⁺", "3d¹4s¹", "3d²4s¹", "3d³4s¹", "3d⁵", "3d⁵4s¹", "3d⁶4s¹", "3d⁷4s¹", "3d⁸4s¹", "3d¹⁰", "3d¹⁰4s¹"],
  ["M²⁺", "3d¹", "3d²", "3d³", "3d⁴", "3d⁵", "3d⁶", "3d⁷", "3d⁸", "3d⁹", "3d¹⁰"],
  ["M³⁺", "[Ar]", "3d¹", "3d²", "3d³", "3d⁴", "3d⁵", "3d⁶", "3d⁷", "—", "—"],
  ["ΔₐH° / kJ mol⁻¹", 326, 473, 515, 397, 281, 416, 425, 430, 339, 126],
  ["IE₁ / kJ mol⁻¹", 631, 656, 650, 653, 717, 762, 758, 736, 745, 906],
  ["IE₂ / kJ mol⁻¹", 1235, 1309, 1414, 1592, 1509, 1561, 1644, 1752, 1958, 1734],
  ["IE₃ / kJ mol⁻¹", 2393, 2657, 2833, 2990, 3260, 2962, 3243, 3402, 3556, 3837],
  ["Metallic radius M / pm", 164, 147, 135, 129, 137, 126, 125, 125, 128, 137],
  ["Ionic radius M²⁺ / pm", "—", "—", 79, 82, 82, 77, 74, 70, 73, 75],
  ["Ionic radius M³⁺ / pm", 73, 67, 64, 62, 65, 65, 61, 60, "—", "—"],
  ["E°(M²⁺/M) / V", "—", -1.63, -1.18, -0.90, -1.18, -0.44, -0.28, -0.25, "+0.34", -0.76],
  ["E°(M³⁺/M²⁺) / V", "—", -0.37, -0.26, -0.41, "+1.57", "+0.77", "+1.97", "—", "—", "—"],
  ["Density / g cm⁻³", 3.43, 4.1, 6.07, 7.19, 7.21, 7.8, 8.7, 8.9, 8.9, 7.1],
];

const transitionThermochemicalRows: React.ReactNode[][] = [
  ["Ti", 469, 656, 1309, -1866, -1.63],
  ["V", 515, 650, 1414, -1895, -1.18],
  ["Cr", 398, 653, 1592, -1925, -0.90],
  ["Mn", 279, 717, 1509, -1862, -1.18],
  ["Fe", 418, 762, 1561, -1998, -0.44],
  ["Co", 427, 758, 1644, -2079, -0.28],
  ["Ni", 431, 736, 1752, -2121, -0.25],
  ["Cu", 339, 745, 1958, -2121, "+0.34"],
  ["Zn", 130, 906, 1734, -2059, -0.76],
];

const transitionOxideRows: React.ReactNode[][] = [
  ["+7", "—", "—", "—", "—", "Mn₂O₇", "—", "—", "—", "—", "—"],
  ["+6", "—", "—", "—", "CrO₃", "—", "—", "—", "—", "—", "—"],
  ["+5", "—", "—", "V₂O₅", "—", "—", "—", "—", "—", "—", "—"],
  ["+4", "—", "TiO₂", "V₂O₄", "CrO₂", "MnO₂", "—", "—", "—", "—", "—"],
  ["+3", "Sc₂O₃", "Ti₂O₃", "V₂O₃", "Cr₂O₃", "Mn₂O₃", "Fe₂O₃", "—", "—", "—", "—"],
  ["Mixed", "—", "—", "—", "—", "Mn₃O₄", "Fe₃O₄", "Co₃O₄", "—", "—", "—"],
  ["+2", "—", "TiO", "VO", "(CrO)", "MnO", "FeO", "CoO", "NiO", "CuO", "ZnO"],
  ["+1", "—", "—", "—", "—", "—", "—", "—", "—", "Cu₂O", "—"],
];

const magneticMomentRows: React.ReactNode[][] = [
  ["Sc³⁺", "3d⁰", 0, "0", "0"],
  ["Ti³⁺", "3d¹", 1, "1.73", "1.75"],
  ["Ti²⁺", "3d²", 2, "2.84", "2.76"],
  ["V²⁺", "3d³", 3, "3.87", "3.86"],
  ["Cr²⁺", "3d⁴", 4, "4.90", "4.80"],
  ["Mn²⁺", "3d⁵", 5, "5.92", "5.96"],
  ["Fe²⁺", "3d⁶", 4, "4.90", "5.3–5.5"],
  ["Co²⁺", "3d⁷", 3, "3.87", "4.4–5.2"],
  ["Ni²⁺", "3d⁸", 2, "2.84", "2.9–3.4"],
  ["Cu²⁺", "3d⁹", 1, "1.73", "1.8–2.2"],
  ["Zn²⁺", "3d¹⁰", 0, "0", "0"],
];

const lanthanoidRows: React.ReactNode[][] = [
  [57, "Lanthanum", "La", "5d¹6s²", "5d¹", "4f⁰", "—", 187, 106],
  [58, "Cerium", "Ce", "4f¹5d¹6s²", "4f²", "4f¹", "4f⁰", 183, 103],
  [59, "Praseodymium", "Pr", "4f³6s²", "4f³", "4f²", "4f¹", 182, 101],
  [60, "Neodymium", "Nd", "4f⁴6s²", "4f⁴", "4f³", "4f²", 181, 99],
  [61, "Promethium", "Pm", "4f⁵6s²", "4f⁵", "4f⁴", "—", 181, 98],
  [62, "Samarium", "Sm", "4f⁶6s²", "4f⁶", "4f⁵", "—", 180, 96],
  [63, "Europium", "Eu", "4f⁷6s²", "4f⁷", "4f⁶", "—", 199, 95],
  [64, "Gadolinium", "Gd", "4f⁷5d¹6s²", "4f⁷5d¹", "4f⁷", "—", 180, 94],
  [65, "Terbium", "Tb", "4f⁹6s²", "4f⁹", "4f⁸", "4f⁷", 178, 92],
  [66, "Dysprosium", "Dy", "4f¹⁰6s²", "4f¹⁰", "4f⁹", "4f⁸", 177, 91],
  [67, "Holmium", "Ho", "4f¹¹6s²", "4f¹¹", "4f¹⁰", "—", 176, 89],
  [68, "Erbium", "Er", "4f¹²6s²", "4f¹²", "4f¹¹", "—", 175, 88],
  [69, "Thulium", "Tm", "4f¹³6s²", "4f¹³", "4f¹²", "—", 174, 87],
  [70, "Ytterbium", "Yb", "4f¹⁴6s²", "4f¹⁴", "4f¹³", "—", 173, 86],
  [71, "Lutetium", "Lu", "4f¹⁴5d¹6s²", "4f¹⁴5d¹", "4f¹⁴", "—", "—", "—"],
];

const actinoidRows: React.ReactNode[][] = [
  [89, "Actinium", "Ac", "6d¹7s²", "5f⁰", "—", 111, "—"],
  [90, "Thorium", "Th", "6d²7s²", "5f¹", "5f⁰", "—", 99],
  [91, "Protactinium", "Pa", "5f²6d¹7s²", "5f²", "5f¹", "—", 96],
  [92, "Uranium", "U", "5f³6d¹7s²", "5f³", "5f²", 103, 93],
  [93, "Neptunium", "Np", "5f⁴6d¹7s²", "5f⁴", "5f³", 101, 92],
  [94, "Plutonium", "Pu", "5f⁶7s²", "5f⁵", "5f⁴", 100, 90],
  [95, "Americium", "Am", "5f⁷7s²", "5f⁶", "5f⁵", 99, 89],
  [96, "Curium", "Cm", "5f⁷6d¹7s²", "5f⁷", "5f⁶", 99, 88],
  [97, "Berkelium", "Bk", "5f⁹7s²", "5f⁸", "5f⁷", 98, 87],
  [98, "Californium", "Cf", "5f¹⁰7s²", "5f⁹", "5f⁸", 98, 86],
  [99, "Einsteinium", "Es", "5f¹¹7s²", "5f¹⁰", "5f⁹", "—", "—"],
  [100, "Fermium", "Fm", "5f¹²7s²", "5f¹¹", "5f¹⁰", "—", "—"],
  [101, "Mendelevium", "Md", "5f¹³7s²", "5f¹²", "5f¹¹", "—", "—"],
  [102, "Nobelium", "No", "5f¹⁴7s²", "5f¹³", "5f¹²", "—", "—"],
  [103, "Lawrencium", "Lr", "5f¹⁴6d¹7s²", "5f¹⁴", "5f¹³", "—", "—"],
];

const actinoidOxidationRows: React.ReactNode[][] = [
  ["Ac", "+3"], ["Th", "+3, +4"], ["Pa", "+3, +4, +5"], ["U", "+3, +4, +5, +6"],
  ["Np", "+3, +4, +5, +6, +7"], ["Pu", "+3, +4, +5, +6, +7"], ["Am", "+3, +4, +5, +6"],
  ["Cm", "+3, +4"], ["Bk", "+3, +4"], ["Cf", "+3, +4"], ["Es", "+3"], ["Fm", "+3"],
  ["Md", "+3"], ["No", "+3"], ["Lr", "+3"],
];

export function SectionBlockDataAtlas() {
  return (
    <div>
      <SectionIntro
        eyebrow="NCERT numerical reference organised for note-making"
        title="Block-Wise and Group-Wise Data Atlas"
        summary="This module puts main-group families first, then arranges d-block data period-wise and f-block data series-wise. Numerical tables are kept separate from theory so students can copy, compare and revise without mixing unlike quantities."
        accent={T.d}
      />

      <Callout kind="note" title="How to read the atlas">
        Every quantity keeps its original unit. A dash means that the cited table does not report a value; it does not automatically mean that the species cannot exist. Trends should be inferred only after comparing the complete row and the electronic configuration.
      </Callout>

      <H2 id="main-group-atlas">1 · Main-Group Families: Groups 1, 2 and 13–18</H2>
      <DataTable columns={["Group", "Valence configuration", "Members", "Important oxidation states", "Dominant trend", "High-yield note"]} rows={groupDataRows} accent={T.s} />
      <H3>Family-by-family physical-property sheet</H3>
      <DataTable columns={["Group", "Radius order", "IE₁ order", "First electron-gain data / behaviour", "Electronegativity"]} rows={mainGroupPhysicalRows} accent={T.cyan} />
      <H3>Family-by-family chemical-property sheet</H3>
      <DataTable columns={["Group", "Oxidation states", "Hydride pattern", "Oxide pattern", "Down-group relation", "Special case"]} rows={mainGroupChemicalRows} accent={T.p} />

      <H3>NCERT atomic-radius data used for direct comparison</H3>
      <DataTable columns={["Set", "Li", "Be", "B", "C", "N", "O", "F"]} rows={[["Period 2 radius / pm", 152, 111, 88, 77, 74, 66, 64]]} accent={T.cyan} />
      <DataTable columns={["Set", "Na", "Mg", "Al", "Si", "P", "S", "Cl"]} rows={[["Period 3 radius / pm", 186, 160, 143, 117, 110, 104, 99]]} accent={T.cyan} />
      <DataTable columns={["Family", "Member-wise atomic radius / pm"]} rows={[
        ["Group 1", "Li 152; Na 186; K 231; Rb 244; Cs 262"],
        ["Group 17", "F 64; Cl 99; Br 114; I 133; At 140"],
      ]} accent={T.cyan} />
      <RelationBox title="Direct radius relations" relations={[
        <><MathInline tex={String.raw`r_{\mathrm{cation}}<r_{\mathrm{atom}}<r_{\mathrm{anion}}`} /></>,
        <><MathInline tex={String.raw`\mathrm{O^{2-}>F^->Na^+>Mg^{2+}}`} /> for the ten-electron isoelectronic series.</>,
        <>NCERT illustrations: <MathInline tex={String.raw`r(\mathrm{F^-})=136\,pm`} />, <MathInline tex={String.raw`r(\mathrm{F})=64\,pm`} />, <MathInline tex={String.raw`r(\mathrm{Na^+})=95\,pm`} /> and <MathInline tex={String.raw`r(\mathrm{Na})=186\,pm`} />.</>,
      ]} />

      <H3>First electron-gain enthalpy: numerical family data</H3>
      <DataTable columns={["Group", "Values / kJ mol⁻¹"]} rows={[
        ["Group 1", "H −73; Li −60; Na −53; K −48; Rb −47; Cs −46"],
        ["Group 16", "O −141; S −200; Se −195; Te −190; Po −174"],
        ["Group 17", "F −328; Cl −349; Br −325; I −295; At −270"],
        ["Group 18", "He +48; Ne +116; Ar +96; Kr +96; Xe +77; Rn +68"],
      ]} accent={T.p} />
      <Callout kind="special" title="Special cases visible in the numbers">
        Chlorine is more exothermic than fluorine, and sulfur is more exothermic than oxygen, because addition to the compact 2p shell produces stronger electron–electron repulsion. Noble-gas values are positive because the incoming electron must enter the next principal shell.
      </Callout>

      <H3>Pauling electronegativity data</H3>
      <DataTable columns={["Set", "Values"]} rows={[
        ["Period 2", "Li 1.0; Be 1.5; B 2.0; C 2.5; N 3.0; O 3.5; F 4.0"],
        ["Period 3", "Na 0.9; Mg 1.2; Al 1.5; Si 1.8; P 2.1; S 2.5; Cl 3.0"],
        ["Group 1", "Li 1.0; Na 0.9; K 0.8; Rb 0.8; Cs 0.7"],
        ["Group 17", "F 4.0; Cl 3.0; Br 2.8; I 2.5; At 2.2"],
      ]} accent={T.gold} />

      <H2 id="d-block-atlas">2 · d-Block Data, Arranged Period-Wise</H2>
      <P>
        The d block contains four horizontal series. Their general outer configuration is <MathInline tex={String.raw`(n-1)d^{1-10}ns^{0-2}`} />. The actual configuration must be used for Nb, Mo, Ru, Rh, Pd, Pt, Au and related elements because the d and s levels are close in energy.
      </P>
      <DataTable columns={["Series / row", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]} rows={dSeriesConfigurations} accent={T.d} />

      <H3>Complete first-transition-series reference table</H3>
      <DataTable columns={["Property", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn"]} rows={firstTransitionDataRows} accent={T.d} />
      <Callout kind="note" title="Why the 3d rows are irregular">
        Added nuclear charge, d-electron shielding, exchange stabilization, pairing, atomization, successive ionization and hydration all contribute simultaneously. Therefore, exact 3d numerical orders should be learnt from the data table rather than forced into one smooth arrow.
      </Callout>

      <H3>Thermochemical cycle for formation of aqueous M²⁺</H3>
      <MathBlock tex={String.raw`\Delta H^\circ_{\mathrm{overall}}=\Delta_aH^\circ+\Delta_iH_1^\circ+\Delta_iH_2^\circ+\Delta_{hyd}H^\circ(\mathrm{M^{2+}})`} label="Energy balance controlling M²⁺/M electrode potential" />
      <DataTable columns={["Metal", "ΔₐH°", "IE₁", "IE₂", "ΔhydH°(M²⁺)", "E°(M²⁺/M) / V"]} rows={transitionThermochemicalRows} accent={T.cyan} />
      <ConceptGrid items={[
        { title: "Copper", tag: "POSITIVE E°", accent: T.gold, body: "Cu has E° = +0.34 V. The energy needed to form Cu²⁺(aq) is not fully compensated by hydration, so Cu does not liberate H₂ from ordinary non-oxidising acids." },
        { title: "Manganese", tag: "d⁵ STABILITY", accent: T.p, body: "Mn²⁺ is 3d⁵ and unusually stable; this contributes to the strongly negative M²⁺/M value and the oxidising behaviour of Mn³⁺." },
        { title: "Zinc", tag: "d¹⁰ STABILITY", accent: T.s, body: "Zn²⁺ is 3d¹⁰. Its low atomization enthalpy and filled d shell contribute to its distinctive electrode potential." },
        { title: "Nickel", tag: "HYDRATION", accent: T.d, body: "The strongly negative hydration enthalpy helps stabilise Ni²⁺(aq), so a complete thermochemical cycle is essential." },
      ]} />

      <H3>Oxides of 3d metals arranged by oxidation number</H3>
      <DataTable columns={["Oxidation number", "G3", "G4", "G5", "G6", "G7", "G8", "G9", "G10", "G11", "G12"]} rows={transitionOxideRows} accent={T.p} />
      <Callout kind="note">
        The highest oxidation state rises from Sc toward Mn and then falls. High oxidation-state oxides such as <MathInline tex={String.raw`\mathrm{V_2O_5,CrO_3,Mn_2O_7}`} /> are more covalent and acidic, whereas low oxidation-state oxides such as <MathInline tex={String.raw`\mathrm{MnO,FeO,CoO,NiO}`} /> are predominantly basic. <MathInline tex={String.raw`\mathrm{Mn_3O_4,Fe_3O_4,Co_3O_4}`} /> are mixed-valence oxides.
      </Callout>

      <H3>Magnetic moments of common aqueous 3d ions</H3>
      <MathBlock tex={String.raw`\mu_{so}=\sqrt{n(n+2)}\ \mathrm{BM}`} label="Spin-only magnetic moment" />
      <DataTable columns={["Ion", "d configuration", "Unpaired e⁻", "Calculated / BM", "Observed / BM"]} rows={magneticMomentRows} accent={T.f} />
      <WorkedExample number="DA" title="Magnetic moment of Mn²⁺" question="Calculate the spin-only magnetic moment of a divalent ion of atomic number 25." reasoning={[
        "Z = 25 is Mn: [Ar]3d⁵4s².",
        "Mn²⁺ loses the two 4s electrons and becomes 3d⁵.",
        "A high-spin 3d⁵ ion has five unpaired electrons.",
      ]} answer="μ = √[5(5+2)] = √35 = 5.92 BM." accent={T.f} />
      <Callout kind="special" title="Calculated and observed values need not match exactly">
        The spin-only expression neglects orbital contribution. Departures are particularly visible for Fe²⁺, Co²⁺, Ni²⁺ and Cu²⁺, and the measured value also depends on ligand field, geometry and temperature.
      </Callout>

      <H2 id="f-block-atlas">3 · f-Block Data, Arranged Series-Wise</H2>
      <P>
        Period 6 contains the 4f series (lanthanoids), while period 7 contains the 5f series (actinoids). Their general configurations are represented by <MathInline tex={String.raw`[\mathrm{Xe}]4f^{1-14}5d^{0-1}6s^2`} /> and <MathInline tex={String.raw`[\mathrm{Rn}]5f^{1-14}6d^{0-1}7s^2`} /> respectively.
      </P>

      <H3>Period 6: lanthanum and lanthanoids</H3>
      <DataTable columns={["Z", "Name", "Symbol", "Ln configuration", "Ln²⁺", "Ln³⁺", "Ln⁴⁺", "Ln radius / pm", "Ln³⁺ radius / pm"]} rows={lanthanoidRows} accent={T.f} />
      <RelationBox title="Lanthanoid contraction" relations={[
        <>The <MathInline tex={String.raw`\mathrm{Ln^{3+}}`} /> radius falls fairly regularly from La³⁺ 106 pm toward the heavier ions because one 4f electron shields another 4f electron poorly.</>,
        <>Eu has a larger metallic radius in the table because the stable half-filled 4f⁷ arrangement changes metallic bonding.</>,
        <>The cumulative contraction makes Zr and Hf nearly equal in radius and contributes to their close occurrence and difficult separation.</>,
        <>As Ln³⁺ radius decreases, charge density and complex-forming tendency generally increase, while the basicity of Ln(OH)₃ generally decreases.</>,
      ]} />

      <H3>Period 7: actinium and actinoids</H3>
      <DataTable columns={["Z", "Name", "Symbol", "M configuration", "M³⁺", "M⁴⁺", "r(M³⁺) / pm", "r(M⁴⁺) / pm"]} rows={actinoidRows} accent={T.p} />
      <H3>Observed oxidation states of actinium and actinoids</H3>
      <DataTable columns={["Element", "Reported oxidation states"]} rows={actinoidOxidationRows} accent={T.gold} />
      <ConceptGrid items={[
        { title: "Early actinoids", tag: "MANY OXIDATION STATES", accent: T.p, body: "The 5f, 6d and 7s levels are close in energy, so Th through Pu display several oxidation states." },
        { title: "Later actinoids", tag: "+3 DOMINATES", accent: T.f, body: "As 5f orbitals contract and become less available for bonding, the +3 state becomes increasingly dominant." },
        { title: "Actinoid contraction", tag: "5f SHIELDING", accent: T.cyan, body: "Poor shielding by 5f electrons produces a progressive decrease in M³⁺ and M⁴⁺ radii, though the pattern is less smooth than in lanthanoids." },
        { title: "Radioactivity", tag: "ALL ACTINOIDS", accent: T.gold, body: "Every actinoid is radioactive; many later members are available only in very small synthetic quantities, so some physical data remain unreported." },
      ]} />

      <H2>4 · What Must Be Memorised and What Must Be Derived</H2>
      <DataTable columns={["Derive from configuration/trend", "Memorise as data"]} rows={[
        ["period, block and approximate group", "exact 3d atomization, IE₂/IE₃ and electrode-potential values"],
        ["isoelectronic radius order", "specific ionic radii and observed magnetic moments"],
        ["direction of radius, IE and EN in a normal group", "O/S and F/Cl electron-gain numerical special cases"],
        ["spin-only moment from unpaired electrons", "observed moment ranges when orbital contribution is important"],
        ["highest oxidation state rises toward Mn", "complete oxide matrix and mixed oxides"],
        ["lanthanoid/actinoid contraction from poor f shielding", "individual f-block configurations and tabulated radii"],
      ]} accent={T.d} />
    </div>
  );
}

/* =============================================================================
   WORLD REFERENCE COMPENDIUM — exhaustive student-note synthesis
   ========================================================================== */
export function TelluricScrewSVG() {
  return <V9TelluricScrewSVG />;
}

export function BornHaberNaClSVG() {
  const levels = [
    { y: 258, label: "Na(s) + ½Cl₂(g)", note: "reference state" },
    { y: 218, label: "Na(g) + ½Cl₂(g)", note: "sublimation" },
    { y: 166, label: "Na⁺(g) + e⁻ + ½Cl₂(g)", note: "IE₁" },
    { y: 112, label: "Na⁺(g) + Cl(g) + e⁻", note: "½ bond dissociation" },
    { y: 70, label: "Na⁺(g) + Cl⁻(g)", note: "electron gain" },
    { y: 286, label: "NaCl(s)", note: "lattice formation" },
  ];
  return (
    <MotionFigure title="Born–Haber energy cycle for NaCl" status="Law-based schematic" note="Animated arrows reveal the Hess-law path step by step. Energy levels are conceptual unless numerical enthalpies are supplied beside the cycle.">
    <svg viewBox="0 0 620 320" role="img" aria-label="Original Born Haber cycle for sodium chloride" style={{ width: "100%", height: "auto", display: "block" }}>
      <defs><marker id="bh-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill={T.cyan} /></marker></defs>
      <rect x="12" y="12" width="596" height="296" rx="18" fill="#0d1c2b" stroke={T.border} />
      <line x1="72" y1="284" x2="72" y2="40" stroke={T.textFaint} strokeWidth="2" markerEnd="url(#bh-arrow)" />
      <text x="30" y="46" fill={T.textDim} fontSize="12" transform="rotate(-90 30 46)">enthalpy</text>
      {levels.slice(0, 5).map((l, i) => <g key={l.label}><line x1="120" y1={l.y} x2="438" y2={l.y} stroke={i === 4 ? T.gold : T.cyan} strokeWidth="2" /><text x="128" y={l.y - 8} fill={T.text} fontSize="13" fontWeight="750">{l.label}</text><text x="450" y={l.y + 4} fill={T.textDim} fontSize="11">{l.note}</text></g>)}
      <line x1="120" y1="286" x2="438" y2="286" stroke={T.p} strokeWidth="3" />
      <text x="128" y="278" fill={T.text} fontSize="13" fontWeight="800">NaCl(s)</text>
      <path className="sb-path" pathLength="1" d="M438 70 C520 82 520 254 438 286" fill="none" stroke={T.gold} strokeWidth="3" markerEnd="url(#bh-arrow)" />
      <text x="500" y="178" fill={T.gold} fontSize="12" textAnchor="middle">large lattice</text><text x="500" y="194" fill={T.gold} fontSize="12" textAnchor="middle">enthalpy release</text>
      <path className="sb-path" pathLength="1" d="M100 258 L100 218" stroke={T.cyan} strokeWidth="2" markerEnd="url(#bh-arrow)" />
      <path className="sb-path" pathLength="1" d="M100 218 L100 166" stroke={T.cyan} strokeWidth="2" markerEnd="url(#bh-arrow)" />
      <path className="sb-path" pathLength="1" d="M100 166 L100 112" stroke={T.cyan} strokeWidth="2" markerEnd="url(#bh-arrow)" />
      <path className="sb-path" pathLength="1" d="M100 112 L100 70" stroke={T.cyan} strokeWidth="2" markerEnd="url(#bh-arrow)" />
      <path className="sb-path" pathLength="1" d="M88 258 C50 270 50 286 120 286" fill="none" stroke={T.p} strokeWidth="2" markerEnd="url(#bh-arrow)" />
    </svg>
    </MotionFigure>
  );
}

export function HydrationMobilitySVG() {
  const waters = (cx: number, cy: number, r: number, count: number) => Array.from({ length: count }, (_, i) => {
    const a = (2 * Math.PI * i) / count;
    return { x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r, a };
  });
  return (
    <MotionFigure title="Hydration shell and aqueous mobility" status="Law-based schematic" note="The animation visualises solvent orientation and the inverse relation between hydrated size and mobility. Shell sizes are explanatory, not crystallographic measurements.">
    <svg viewBox="0 0 620 250" role="img" aria-label="Original comparison of strongly and weakly hydrated ions" style={{ width: "100%", height: "auto", display: "block" }}>
      <rect x="12" y="12" width="596" height="226" rx="18" fill="#0d1c2b" stroke={T.border} />
      {[{ cx: 178, ion: "Li⁺", shell: 78, count: 10, caption: "strong hydration · large hydrated radius" }, { cx: 445, ion: "Cs⁺", shell: 54, count: 7, caption: "weak hydration · smaller hydrated shell" }].map((g) => <g key={g.ion}>
        <circle cx={g.cx} cy="112" r={g.shell} fill="rgba(95,212,234,0.055)" stroke={T.cyan} strokeDasharray="5 5" />
        <circle cx={g.cx} cy="112" r={g.ion === "Li⁺" ? 24 : 38} fill={g.ion === "Li⁺" ? T.s : T.gold} opacity="0.92" />
        <text x={g.cx} y="118" textAnchor="middle" fill="#07131e" fontSize="16" fontWeight="900">{g.ion}</text>
        {waters(g.cx, 112, g.shell - 10, g.count).map((w, i) => <g key={i} className="sb-water" style={{ animationDelay: `${i * 0.08}s` }} transform={`translate(${w.x} ${w.y}) rotate(${(w.a * 180) / Math.PI + 90})`}><ellipse rx="15" ry="8" fill="#e8f7ff" opacity="0.92" /><text x="0" y="4" textAnchor="middle" fill="#123" fontSize="7" fontWeight="800">H₂O</text></g>)}
        <text x={g.cx} y="218" textAnchor="middle" fill={T.textDim} fontSize="11.5">{g.caption}</text>
      </g>)}
      <path d="M278 112 L342 112" stroke={T.gold} strokeWidth="3" markerEnd="url(#bh-arrow)" />
      <text x="310" y="98" textAnchor="middle" fill={T.gold} fontSize="11">mobility in water</text>
      <text x="310" y="132" textAnchor="middle" fill={T.gold} fontSize="11">Li⁺ &lt; Cs⁺</text>
    </svg>
    </MotionFigure>
  );
}

const worldIeRows = [
  ["Group 1", "Li 520", "Na 496", "K 419", "Rb 403", "Cs 376", "general decrease; Li is strongest hydrated reducer in water"],
  ["Group 2", "Be 899", "Mg 738", "Ca 590", "Sr 550", "Ba 503", "Ra about 509; slight rise reflects relativistic effects"],
  ["Group 13", "B 801", "Al 577", "Ga 579", "In 558", "Tl 589", "B > Tl > Ga ≈ Al > In; d/f shielding disturbs monotonicity"],
  ["Group 14", "C 1086", "Si 787", "Ge 762", "Sn 709", "Pb 716", "Pb > Sn is a post-lanthanoid special case"],
  ["Group 15", "N 1402", "P 1012", "As 947", "Sb 835", "Bi 703", "half-filled np³ gives relatively high values"],
  ["Group 16", "O 1314", "S 1000", "Se 941", "Te 869", "Po 812", "O < N, S < P and Se < As because paired p electrons are easier to remove"],
  ["Group 17", "F 1681", "Cl 1251", "Br 1140", "I 1008", "At about 930", "high values; halogens prefer electron gain"],
  ["Group 18", "He 2372", "Ne 2081", "Ar 1521", "Kr 1351", "Xe 1170", "Rn about 1037; closed shells are maxima of their periods"],
];

const worldEgeRows = [
  ["1", "H −73", "Li −60", "Na −53", "K −48", "Rb −47", "Cs −46"],
  ["2", "Be positive/small", "Mg positive/small", "Ca slightly negative", "Sr slightly negative", "Ba slightly negative", "ns² stability makes addition unfavourable"],
  ["13", "B about −27", "Al about −44", "Ga about −30 to −36", "In about −30 to −34", "Tl about −20 to −30", "small and irregular"],
  ["14", "C about −122", "Si about −134", "Ge about −116", "Sn about −121", "Pb much less negative", "incoming electron produces np³ half-filled state"],
  ["15", "N positive", "P about −72", "As about −78", "Sb about −101", "Bi about −91 to −101", "np³ resists addition; N is the clearest case"],
  ["16", "O −141", "S −200", "Se −195", "Te −190", "Po −174", "S is more negative than O because 3p is roomier than compact 2p"],
  ["17", "F −328", "Cl −349", "Br −325", "I −295", "At about −270", "Cl is the most negative among common main-group values"],
  ["18", "He +48", "Ne +116", "Ar +96", "Kr +96", "Xe +77", "Rn +68", "addition enters a new shell and is endothermic"],
];

const worldEnRows = [
  ["Group 1", "Li 1.0", "Na 0.9", "K 0.8", "Rb 0.8", "Cs 0.7"],
  ["Group 2", "Be 1.5", "Mg 1.2", "Ca 1.0", "Sr 1.0", "Ba 0.9"],
  ["Group 13", "B 2.0", "Al 1.5", "Ga 1.6-1.8", "In 1.7", "Tl 1.8-2.0"],
  ["Group 14", "C 2.5", "Si 1.8", "Ge 2.0", "Sn 1.8", "Pb 1.9-2.3"],
  ["Group 15", "N 3.0", "P 2.1", "As 2.0-2.2", "Sb 1.9-2.1", "Bi 1.9-2.0"],
  ["Group 16", "O 3.5", "S 2.5-2.6", "Se 2.4-2.6", "Te 2.1", "Po about 2.0"],
  ["Group 17", "F 4.0", "Cl 3.0-3.2", "Br 2.8-3.0", "I 2.5-2.7", "At about 2.2"],
];

export function SectionWorldReference() {
  return (
    <div>
      <SectionIntro
        eyebrow="NCERT-first · JEE Advanced depth · source-complete synthesis"
        title="NCERT-First Reference Compendium: Complete Student-Writable Notes"
        summary="This is the full theory layer of the chapter. Definitions and core data follow NCERT first; advanced relations, factor-wise examples, historical detail, block-wise data and cross-chapter applications are added only after reconciliation with the primary framework. Every relation is explained, every factor carries examples, and disputed or convention-dependent claims are labelled carefully."
        accent={T.gold}
      />

      <StudentNote heading="How a student should use this module" accent={T.gold}>
        Read each numbered subsection once as theory, copy the boxed definition and relation into your notebook, then learn the data tables only after understanding the cause. A trend is never memorised as an arrow alone: write the controlling competition between shell number, effective nuclear charge, shielding, penetration, electronic stability, interelectronic repulsion and thermochemical stabilization.
      </StudentNote>

      <StudentNote heading="Scientific visual trust system" accent={T.d}>
        Every repaired scientific figure now states what kind of evidence it represents. <strong>Data-backed quantitative</strong> figures carry numerical axes, units and point tooltips. <strong>Calculated orbital model</strong> figures are generated from equations and state their normalization. <strong>Law-based schematic</strong> figures explain a relation but are explicitly not numerical datasets. Use the replay control to watch the mechanism or trend build in sequence. Any SVG without one of these visible badges is decorative or qualitative and must not be used to read numerical values.
      </StudentNote>
      <DataTable columns={["Repaired V7 visual", "Verification status", "New student value"]} rows={[
        ["Lothar Meyer atomic-volume curve", "Data-backed quantitative", "real axes and units; labelled Li, Na, K, Rb, Cs peaks; point tooltips; replayable curve"],
        ["3d metallic-radius graph", "Data-backed quantitative", "NCERT values for Sc-Zn; correct labels; no false 4d/5d labels"],
        ["3s/3p/3d radial probability", "Calculated orbital model", "hydrogenic equations, correct radial-node count and node positions"],
        ["Moseley plot", "Law-based schematic", "linear √ν-Z relation clearly separated from experimental data"],
        ["Born-Haber cycle", "Law-based schematic", "animated Hess-law path with formation/dissociation sign caution"],
        ["Hydration and mobility", "Law-based schematic", "animated solvent orientation and hydrated-radius/mobility distinction"],
      ]} accent={T.d} />

      <H2 id="wr-history">1 · Complete Genesis of Periodic Classification</H2>
      <P>
        Periodic classification developed because the growing list of elements could no longer be studied as isolated facts. A useful classification had to place chemically related elements together, reveal recurrence, correct doubtful measurements and predict unknown behaviour. Cannizzaro's interpretation of Avogadro's hypothesis and the careful atomic-mass work of Stas helped provide reliable atomic weights before the mature periodic systems of 1869.
      </P>
      <DataTable columns={["Scientist / scheme", "Basis", "Central observation", "Achievement", "Limitation or special caution"]} rows={[
        ["Lavoisier", "broad physical character", "metals and non-metals", "first useful broad division", "too coarse for families and metalloids"],
        ["Prout", "atomic weight relative to H", "many weights near integral multiples of H", "encouraged quantitative comparison", "isotopic abundance makes ordinary atomic weights non-integral"],
        ["Döbereiner", "triads", "middle atomic weight roughly equals mean of the other two; properties intermediate", "Li-Na-K, Ca-Sr-Ba and Cl-Br-I illustrated family resemblance", "worked for only a limited set"],
        ["de Chancourtois", "telluric screw", "elements on an atomic-weight helix recur vertically", "one of the earliest geometric demonstrations of periodicity", "presentation was geological and the chemical meaning was not widely recognised"],
        ["Newlands", "law of octaves", "every eighth lighter element resembles the first", "clear recurrence up to Ca; later honoured with the Davy Medal", "no gaps and forced placements beyond Ca"],
        ["Lothar Meyer", "atomic-weight plots", "atomic volume, melting point and boiling point vary periodically", "powerful graphical evidence and an early near-modern table", "less predictive than Mendeleev's chemical table"],
        ["Mendeleev", "atomic weight plus chemical similarity", "properties and compound formulae recur periodically", "systematic table, gaps, predictions and corrected data", "mass anomalies, isotopes and H were unresolved"],
        ["Moseley", "atomic number", "characteristic X-ray frequency identifies nuclear charge", "established the modern ordering variable", "electronic configuration is still needed to explain recurrence"],
      ]} accent={T.gold} />

      <H3>de Chancourtois' telluric screw</H3>
      <div style={{ maxWidth: 680, margin: "0 auto 18px" }}><TelluricScrewSVG /></div>
      <P>
        The elements were wrapped around a cylinder in increasing atomic weight. A vertical line intersected elements at intervals close to the atomic weight of oxygen, so chemically related species could recur above one another. It was an important visual precursor to the periodic table even though it did not become a practical chemical classification.
      </P>

      <H3>Lothar Meyer's atomic-volume curve: complete observations</H3>
      <DefinitionBox term="Atomic volume">
        In the historical Meyer plot, atomic volume was treated approximately as molar mass divided by density. It is a molar-volume concept, not the modern covalent or metallic radius of a single atom.
      </DefinitionBox>
      <MathBlock tex={String.raw`V_m\approx\frac{M}{\rho}`} label="historical atomic-volume relation" />
      <RelationBox title="What different parts of the curve represent" relations={[
        <>Alkali metals such as Li, Na, K, Rb and Cs occupy prominent maxima because their metallic structures have large molar volumes.</>,
        <>Alkaline-earth metals such as Be, Mg, Ca, Sr and Ba commonly occur on descending portions after the alkali-metal peaks.</>,
        <>Transition metals occupy broad minima where atomic volume is comparatively small; many metalloids lie in lower or intermediate regions.</>,
        <>Halogens occur on ascending portions that lead toward the next alkali-metal maximum.</>,
        <>Elements with similar chemistry repeatedly occupy corresponding portions of successive waves; the length of the wave changes as longer periods begin.</>,
      ]} />
      <AtomicVolumeSVG />
      <Callout kind="note" title="Conclusion">
        The curve supplied visual evidence that physical properties recur periodically with atomic weight. It did not by itself furnish the broad chemical organisation and successful quantitative predictions that made Mendeleev's system dominant.
      </Callout>

      <H3>Mendeleev's table: construction, characteristics, merits and failures</H3>
      <DefinitionBox term="Mendeleev periodic law">
        The properties of the elements are periodic functions of their atomic weights.
      </DefinitionBox>
      <DataTable columns={["Feature", "Mendeleev table"]} rows={[
        ["Known elements at the time", "about 63; noble gases were not yet known"],
        ["Rows", "horizontal periods or series; the mature short form contained seven periods"],
        ["Columns", "eight traditional groups, usually divided into A and B subgroups"],
        ["Group VIII", "three horizontal triads of nine elements in the old short form"],
        ["Main rule", "increasing atomic weight, but similarity of properties was given priority when necessary"],
        ["Family evidence", "empirical formulae and properties of oxides, hydrides and halides"],
      ]} accent={T.gold} />
      <RelationBox title="Major merits" relations={[
        <>All known elements were organised into families, making comparative study possible.</>,
        <>Blank positions were deliberately retained for undiscovered elements; eka-boron, eka-aluminium, eka-silicon and eka-manganese were later associated with Sc, Ga, Ge and Tc.</>,
        <>Predicted properties of eka-aluminium and eka-silicon agreed strikingly with gallium and germanium, including approximate mass, density and formulae of oxide and chloride.</>,
        <>Doubtful atomic weights and valencies could be reconsidered from chemical placement. The working relation used historically was <MathInline tex={String.raw`\text{atomic weight}=\text{equivalent weight}\times\text{valency}`} />.</>,
        <>Noble gases could later be introduced as a new family without destroying the arrangement.</>,
      ]} />
      <DataTable columns={["Predicted element", "Discovered element", "Representative prediction", "Observed value / result"]} rows={[
        ["eka-aluminium", "Ga", "atomic weight about 68; density about 5.9 g cm⁻³; E₂O₃ and ECl₃", "about 70; 5.94 g cm⁻³; Ga₂O₃ and GaCl₃"],
        ["eka-silicon", "Ge", "atomic weight about 72; density about 5.5 g cm⁻³; EO₂ and volatile ECl₄", "72.6; 5.36 g cm⁻³; GeO₂ and GeCl₄"],
        ["eka-boron", "Sc", "position below B with a trivalent oxide", "Sc forms Sc₂O₃ and is predominantly +3"],
        ["eka-manganese", "Tc", "missing member below Mn", "Tc was identified later as a radioactive element"],
      ]} accent={T.cyan} />
      <RelationBox title="Failures and unresolved placements" relations={[
        <>Hydrogen resembles Group 1 through <MathInline tex={String.raw`1s^1`} /> and <MathInline tex={String.raw`\mathrm{H^+}`} />, but also resembles Group 17 by needing one electron and forming <MathInline tex={String.raw`\mathrm{H^-}`} />.</>,
        <>Isotopes have different masses but identical chemical positions, which a strict mass-based law cannot explain.</>,
        <>Anomalous mass pairs include Ar-K, Co-Ni and Te-I; the order of chemical similarity contradicts increasing atomic weight.</>,
        <>Related elements sometimes appeared in separated subgroups, while dissimilar elements such as alkali metals and coinage metals shared the old Group I.</>,
        <>The table did not explain why properties repeat, because electron shells and atomic number were unknown.</>,
      ]} />

      <H3>Moseley's work and the Modern Periodic Law</H3>
      <P>
        Characteristic X-rays are produced when high-energy electrons create inner-shell vacancies and outer electrons fall into them. Moseley found that the square root of the characteristic frequency varies linearly with atomic number, not with relative atomic mass.
      </P>
      <MathBlock tex={String.raw`\sqrt{\nu}=a(Z-b)`} label="Moseley relation" />
      <MoseleyPlotSVG />
      <DefinitionBox term="Modern Periodic Law">
        The physical and chemical properties of the elements are periodic functions of their atomic numbers.
      </DefinitionBox>
      <P>
        Atomic number is the nuclear charge and fixes the number of electrons in a neutral atom. As electrons enter shells and subshells in a recurring sequence, analogous valence-shell configurations return at intervals; chemical properties therefore recur.
      </P>

      <H2 id="wr-classification">2 · Complete Modern Classification, Nomenclature and Position</H2>
      <DataTable columns={["Bohr-style class", "Definition / configuration", "Examples", "Important note"]} rows={[
        ["Representative or normal elements", "s- and p-block elements with differentiating electron in the outermost shell", "Groups 1, 2 and 13-18", "include metals, metalloids and non-metals"],
        ["Inert or noble-gas elements", "closed valence shell; He = 1s², others = ns²np⁶", "He to Og", "very high ionization enthalpy; ordinary electronegativity is generally not assigned"],
        ["Transition elements", "atom or common ion has an incomplete d subshell", "Sc-Cu, Y-Ag, Hf-Au", "Zn, Cd and Hg are d-block elements but not transition elements by the strict incomplete-d definition"],
        ["Inner-transition elements", "differentiating electron enters (n−2)f", "lanthanoids and actinoids", "shown separately only to keep the long table compact"],
      ]} accent={T.cyan} />
      <DataTable columns={["Block", "General differentiating configuration", "Groups / series", "Maximum capacity"]} rows={[
        ["s", "ns¹-²", "Groups 1-2; He is placed in Group 18 by chemistry", "2 electrons"],
        ["p", "ns²np¹-⁶", "Groups 13-18", "6 electrons"],
        ["d", "(n−1)d¹-¹⁰ns⁰-²", "Groups 3-12", "10 electrons"],
        ["f", "(n−2)f¹-¹⁴(n−1)d⁰-¹ns²", "lanthanoid and actinoid series", "14 electrons"],
      ]} accent={T.d} />
      <RelationBox title="Period and group from configuration" relations={[
        <>The highest principal quantum number present gives the period.</>,
        <>For s block, group equals the number of ns electrons: ns¹ → Group 1, ns² → Group 2.</>,
        <>For p block, group = 10 + total valence electrons: ns²np¹ → 13 through ns²np⁶ → 18.</>,
        <>For d block, group is usually <MathInline tex={String.raw`(n-1)d+ns`} /> electron count, giving Groups 3-12.</>,
        <>The f block belongs to periods 6 and 7; placement in Group 3 is a conventional representation and detailed La/Lu or Ac/Lr placement depends on table convention.</>,
      ]} />

      <H3>Old A/B notation and present IUPAC numbering</H3>
      <P>
        Older American and European conventions used A and B labels differently, creating ambiguity. Modern IUPAC numbering uses Groups 1-18 and should be preferred. When an older question uses IA, IIA, IIIA-VIIIA or IB-IIB, first identify the convention from the accompanying table rather than memorising a single universal A/B mapping.
      </P>

      <H3>Systematic temporary naming of superheavy elements</H3>
      <DataTable columns={["Digit", "Root", "Digit", "Root", "Digit", "Root"]} rows={[
        ["0", "nil", "1", "un", "2", "bi"], ["3", "tri", "4", "quad", "5", "pent"], ["6", "hex", "7", "sept", "8", "oct"], ["9", "enn", "suffix", "ium", "symbol", "first letters of roots"],
      ]} accent={T.f} />
      <P>
        The roots are concatenated and followed by “ium”; repeated letters may be contracted. These names were temporary placeholders and were replaced after official naming. Examples include unnilunium for Z = 101 in the historical scheme and ununbium for Z = 112 before copernicium was adopted.
      </P>

      <H3>Other useful classifications</H3>
      <DataTable columns={["Classification", "Meaning", "Representative examples"]} rows={[
        ["Goldschmidt siderophiles", "iron-loving; prefer metallic Fe phases", "Fe, Co, Ni and platinum-group tendencies"],
        ["Chalcophiles", "sulphide-loving; concentrate in sulphide minerals", "Cu, Ag, Zn, Cd, Hg, Pb"],
        ["Lithophiles", "stone-loving; form stable oxides/silicates", "Li, Na, Mg, Al, Si, Ca"],
        ["Atmophiles", "volatile or gas-loving", "H, N, noble gases and volatile compounds"],
        ["Typical elements", "third-period representative elements that display familiar group trends", "Na, Mg, Al, Si, P, S, Cl"],
        ["Platinum-group metals", "two triads in Groups 8-10", "Ru, Rh, Pd, Os, Ir, Pt"],
        ["Post-transition metals", "soft p-block metals after d block", "Ga, In, Tl, Sn, Pb, Bi; lists vary by convention"],
      ]} accent={T.p} />
      <Callout kind="special" title="Seaborg's actinide concept">
        Placing the 5f series beneath the lanthanoids explained the organisation of elements 89-103 and led to the modern actinoid row. The actual ground-state configurations of Ac, Th and Lr contain d-electron subtleties, but their chemistry aligns them with the actinoid series.
      </Callout>

      <H2 id="wr-valency">3 · Valence, Oxidation State and Formula Periodicity</H2>
      <DefinitionBox term="Valency">
        Valency is the combining capacity of an atom. For representative elements it is often related to the number of valence electrons or to the number needed to complete an octet, but oxidation state and covalency are more precise ideas for many compounds.
      </DefinitionBox>
      <DataTable columns={["Valence electrons", "1", "2", "3", "4", "5", "6", "7", "8"]} rows={[
        ["Typical valency with H", "1", "2", "3", "4", "3", "2", "1", "0"],
        ["Second-period hydride", "LiH", "BeH₂", "BH₃/B₂H₆", "CH₄", "NH₃", "H₂O", "HF", "—"],
        ["Highest oxide in period 3", "Na₂O", "MgO", "Al₂O₃", "SiO₂", "P₄O₁₀", "SO₃", "Cl₂O₇", "—"],
      ]} accent={T.gold} />
      <Callout kind="note">
        Oxidation state is a formal electron-bookkeeping charge. Covalency counts shared electron pairs around the atom. In <MathInline tex={String.raw`[\mathrm{AlCl(H_2O)_5}]^{2+}`} />, Al has oxidation state +3 but covalency 6.
      </Callout>

      <H2 id="wr-zeff">4 · Screening, Penetration and Effective Nuclear Charge</H2>
      <DefinitionBox term="Screening or shielding effect">
        Inner and same-shell electrons repel a chosen electron and reduce the full nuclear attraction that it experiences. The reduction is expressed by the shielding constant <MathInline tex={String.raw`\sigma`} />.
      </DefinitionBox>
      <DefinitionBox term="Effective nuclear charge">
        Effective nuclear charge is the net positive charge experienced by a specified electron after electronic shielding is considered.
      </DefinitionBox>
      <MathBlock tex={String.raw`Z_{\mathrm{eff}}=Z-\sigma`} label="effective nuclear charge" />
      <RelationBox title="Penetration, shielding and orbital energy" relations={[
        <>For orbitals with the same principal quantum number, penetration generally follows <MathInline tex={String.raw`s>p>d>f`} />.</>,
        <>An s electron spends more time close to the nucleus and is therefore both more strongly attracted and more effective at shielding outer electrons.</>,
        <>The rough same-shell shielding effectiveness is commonly written <MathInline tex={String.raw`s>p>d>f`} />, while the ability of inner shells to shield an outer electron is much greater.</>,
        <>Across a representative period, nuclear charge rises by one but same-shell shielding rises only partly, so <MathInline tex={String.raw`Z_{\mathrm{eff}}`} /> increases strongly.</>,
        <>Across a d series, each added d electron partially screens the extra proton; <MathInline tex={String.raw`Z_{\mathrm{eff}}`} /> still increases, but more slowly.</>,
      ]} />

      <H3>Slater rules: write, group, count</H3>
      <DataTable columns={["Testing electron", "Same group", "n−1 shell", "n−2 and lower", "Electrons to the right"]} rows={[
        ["1s", "other 1s contributes 0.30", "—", "—", "0"],
        ["ns or np", "each other electron in same (ns,np) group contributes 0.35", "each contributes 0.85", "each contributes 1.00", "0"],
        ["nd or nf", "each other electron in same d/f group contributes 0.35", "all groups to the left contribute 1.00", "included at 1.00", "0"],
      ]} accent={T.cyan} />
      <WorkedExample number="Z1" title="He 1s electron" question="Estimate Zeff for one 1s electron in He." reasoning={["Z = 2.", "The other 1s electron contributes 0.30.", "σ = 0.30."]} answer="Zeff = 2 − 0.30 = 1.70." accent={T.cyan} />
      <WorkedExample number="Z2" title="Na 3s electron" question="Estimate Zeff for the 3s electron of Na." reasoning={["Configuration: (1s²)(2s²2p⁶)(3s¹).", "Same group: 0.", "n−1 shell: 8 × 0.85 = 6.80; lower shell: 2 × 1.00 = 2.00."]} answer="σ = 8.80; Zeff ≈ 11 − 8.80 = 2.20." accent={T.cyan} />
      <WorkedExample number="Z3" title="Cl 3p electron" question="Estimate Zeff for a 3p electron of Cl." reasoning={["Same 3s/3p group excluding the test electron: 6 × 0.35 = 2.10.", "Second shell: 8 × 0.85 = 6.80.", "First shell: 2 × 1.00 = 2.00."]} answer="σ = 10.90; Zeff ≈ 17 − 10.90 = 6.10." accent={T.cyan} />
      <WorkedExample number="Z4" title="Fe 3d electron" question="Estimate Zeff for a 3d electron of Fe." reasoning={["Configuration grouped as (1s²)(2s²2p⁶)(3s²3p⁶)(3d⁶)(4s²).", "Five other 3d electrons contribute 5 × 0.35 = 1.75.", "All 18 electrons in groups to the left contribute 18."]} answer="σ = 19.75; Zeff ≈ 26 − 19.75 = 6.25." accent={T.cyan} />
      <Callout kind="special" title="Limitation of Slater's rules">
        Slater values are screening estimates, not exact quantum-mechanical charges. For f electrons the simple counting scheme can predict nearly constant values and misses contraction, relativistic effects and detailed radial distributions. Clementi-Raimondi self-consistent-field values are more refined and orbital-specific.
      </Callout>
      <DataTable columns={["Species / orbital", "Representative Zeff", "Interpretation"]} rows={[
        ["Li 2s", "about 1.28 (refined value)", "outer electron is strongly screened by 1s²"],
        ["C 2p", "about 3.14", "Zeff has risen across period 2"],
        ["F 2p", "about 5.10", "strong attraction produces small radius and high IE"],
        ["Na 3s", "about 2.51 refined; 2.20 by simple Slater estimate", "method dependence must be stated"],
        ["Cl 3p", "about 6.12 refined; 6.10 by simple Slater estimate", "close agreement in this case is fortuitously good"],
      ]} accent={T.f} />
      <RelationBox title="Charge and isoelectronic orders" relations={[
        <>For the same element, increasing positive charge raises attraction per remaining electron: <MathInline tex={String.raw`\mathrm{N^+>N>N^-}`} /> in effective nuclear attraction.</>,
        <>Within an isoelectronic series, larger Z means larger <MathInline tex={String.raw`Z_{\mathrm{eff}}`} /> and smaller radius: <MathInline tex={String.raw`\mathrm{N^{3-}>O^{2-}>F^->Na^+>Mg^{2+}>Al^{3+}>Si^{4+}}`} /> in radius.</>,
        <>The ionic-potential idea <MathInline tex={String.raw`\phi=|z|/r`} /> helps rationalise diagonal relationships, hydration, polarising power and covalent character.</>,
      ]} />

      <H2 id="wr-radius">5 · Atomic, Covalent, Metallic, van der Waals and Ionic Radii</H2>
      <DefinitionBox term="Covalent radius">
        Half the internuclear distance between two identical atoms joined by a single covalent bond.
      </DefinitionBox>
      <DefinitionBox term="Metallic radius">
        Half the distance between the nuclei of two adjacent metal atoms in the metallic crystal.
      </DefinitionBox>
      <DefinitionBox term="van der Waals radius">
        Half the closest internuclear distance between two non-bonded atoms in neighbouring molecules or atoms in a molecular crystal.
      </DefinitionBox>
      <RelationBox title="Core radius relations" relations={[
        <>For the same atom under comparable conditions, <MathInline tex={String.raw`r_{\mathrm{vdW}}>r_{\mathrm{metallic}}\gtrsim r_{\mathrm{covalent}}`} />; exact comparison depends on bonding environment.</>,
        <>Cations are smaller than their atoms because electron loss reduces repulsion and may remove an entire shell.</>,
        <>Anions are larger than their atoms because added electrons increase electron-electron repulsion and reduce attraction per electron.</>,
        <>For one element, higher positive charge gives a smaller cation; higher negative charge generally gives a larger anion.</>,
      ]} />
      <DataTable columns={["Period 2 atom", "Li", "Be", "B", "C", "N", "O", "F"]} rows={[["Atomic radius / pm", "152", "111", "88", "77", "74", "66", "64"]]} accent={T.s} />
      <DataTable columns={["Period 3 atom", "Na", "Mg", "Al", "Si", "P", "S", "Cl"]} rows={[["Atomic radius / pm", "186", "160", "143", "117", "110", "104", "99"]]} accent={T.s} />
      <DataTable columns={["Family", "Top to bottom numerical sequence / pm", "Order"]} rows={[
        ["Group 1", "Li 152, Na 186, K 231, Rb 244, Cs 262", "Li < Na < K < Rb < Cs"],
        ["Group 17", "F 64, Cl 99, Br 114, I 133, At about 140", "F < Cl < Br < I < At"],
      ]} accent={T.gold} />
      <RelationBox title="Special radius patterns" relations={[
        <>Across a normal s/p period, radius falls because increasing <MathInline tex={String.raw`Z_{\mathrm{eff}}`} /> contracts the same valence shell.</>,
        <>Across a d series, radius falls initially, becomes nearly constant near the middle and may rise slightly near the end because d-electron shielding and pairing increasingly offset Z.</>,
        <>Ga is not appreciably larger than Al because filled 3d electrons shield poorly; similarly Tl is close to In because 4f and 5d shielding is poor.</>,
        <>The 4d and 5d congeners are often nearly equal in radius because lanthanoid contraction offsets the added shell, for example Zr and Hf.</>,
        <>Lanthanoid metallic radii generally contract, but Eu and Yb are larger because stable 4f⁷ and 4f¹⁴ configurations weaken metallic bonding in the divalent-like metal.</>,
      ]} />
      <WorkedExample number="R1" title="Isoelectronic radius" question="Arrange N³⁻, O²⁻, F⁻, Na⁺, Mg²⁺ and Al³⁺ by decreasing radius." reasoning={["All species contain ten electrons.", "Nuclear charge rises from 7 to 13.", "Greater nuclear charge contracts the same electron cloud."]} answer="N³⁻ > O²⁻ > F⁻ > Na⁺ > Mg²⁺ > Al³⁺." accent={T.s} />
      <WorkedExample number="R2" title="Same element, different charge" question="Arrange Fe²⁺ and Fe³⁺ by radius." reasoning={["Fe³⁺ has one fewer electron.", "The same nucleus attracts fewer electrons.", "Repulsion is reduced and attraction per electron increases."]} answer="r(Fe³⁺) < r(Fe²⁺)." accent={T.s} />

      <H2 id="wr-ie">6 · Ionization Enthalpy: Complete Theory, Data, Factors and Applications</H2>
      <DefinitionBox term="First ionization enthalpy">
        The enthalpy required to remove the most loosely bound electron from one mole of isolated gaseous atoms in their ground state.
      </DefinitionBox>
      <MathBlock tex={String.raw`\mathrm{X(g)\rightarrow X^+(g)+e^-}\qquad \Delta_iH_1>0`} label="first ionization" />
      <MathBlock tex={String.raw`\mathrm{X^+(g)\rightarrow X^{2+}(g)+e^-}\qquad \Delta_iH_2>\Delta_iH_1`} label="successive ionization" />
      <P>
        Successive ionization enthalpies increase because each electron is removed from an increasingly positive species. A very large jump occurs after all valence electrons have been removed and the next electron belongs to a closed inner shell. This jump is one of the strongest tools for finding valence-electron count and stable oxidation states.
      </P>
      <DataTable columns={["Element", "IE₁ / eV", "IE₂ / eV", "IE₃ / eV", "IE₄ / eV", "Jump", "Valence e⁻"]} rows={[
        ["Na", "5.14", "47.3", "71.6", "98.9", "after IE₁", "1"],
        ["Mg", "7.65", "15.0", "80.1", "109", "after IE₂", "2"],
        ["Al", "5.99", "18.8", "28.4", "120", "after IE₃", "3"],
        ["Ge", "7.90", "15.9", "34.2", "45.7", "IE₅ is the giant jump", "4"],
      ]} accent={T.gold} />

      <H3>Factor 1: atomic size and shell number</H3>
      <FactorStudyCard number="1" title="Distance of the removable electron" relation={<MathInline tex={String.raw`\Delta_iH\text{ generally increases as }r\text{ decreases}`} />} explanation="An outer electron farther from the nucleus experiences weaker electrostatic attraction. Adding a new shell usually lowers first ionization enthalpy." examples={[
        { label: "Group 1", body: <>Li 520 &gt; Na 496 &gt; K 419 &gt; Rb 403 &gt; Cs 376 kJ mol⁻¹.</> },
        { label: "Group 17", body: <>F 1681 &gt; Cl 1251 &gt; Br 1140 &gt; I 1008.</> },
        { label: "Period 2", body: <>Li is the minimum and Ne the maximum because radius contracts across the shell.</> },
        { label: "Cation", body: <>IE of Na⁺ is enormous compared with Na because Na⁺ is smaller and closed-shell.</> },
      ]} special="Size is not the only variable; shielding, orbital type and configuration can reverse a simple radius prediction." accent={T.s} />

      <H3>Factor 2: effective nuclear charge</H3>
      <FactorStudyCard number="2" title="Net nuclear attraction" relation={<MathInline tex={String.raw`\Delta_iH\uparrow\text{ as }Z_{\mathrm{eff}}\uparrow`} />} explanation="Within the same shell, an increase in nuclear charge that is not fully cancelled by shielding holds the electron more strongly." examples={[
        { label: "Period 2", body: <>The broad rise Li → Ne is controlled by increasing Zeff.</> },
        { label: "Period 3", body: <>The broad rise Na → Ar has the same cause.</> },
        { label: "Isoelectronic", body: <>Removing an electron from Al³⁺ is much harder than from Na⁺ because Z is larger.</> },
        { label: "d block", body: <>IE₁ changes only moderately across a series because added d electrons partly shield added protons.</> },
      ]} accent={T.cyan} />

      <H3>Factor 3: shielding and penetration</H3>
      <FactorStudyCard number="3" title="Orbital penetration" relation={<MathInline tex={String.raw`s>p>d>f\quad\text{penetration}`} />} explanation="For the same principal shell, a more penetrating orbital has lower energy and its electron is more difficult to remove." examples={[
        { label: "Be > B", body: <>Be loses a penetrating 2s electron only after B's higher-energy 2p electron is considered; therefore IE₁(Be) &gt; IE₁(B).</> },
        { label: "Mg > Al", body: <>The 3p electron of Al is removed more easily than the 3s electron of Mg.</> },
        { label: "Ga ≳ Al", body: <>Poor shielding by 3d electrons raises Zeff in Ga and prevents the expected large fall.</> },
        { label: "Tl > In", body: <>Poor shielding by 4f and 5d electrons plus relativistic stabilization raises Tl's value.</> },
      ]} accent={T.d} />

      <H3>Factor 4: half-filled and completely filled subshell stability</H3>
      <FactorStudyCard number="4" title="Exchange and symmetry stabilization" explanation="Configurations such as p³, d⁵, f⁷ and filled p⁶, d¹⁰, f¹⁴ possess extra stability; removal that destroys them is relatively difficult, while removal that creates them may be easier." examples={[
        { label: "N > O", body: <>N is 2p³; O is 2p⁴ with one paired electron, so IE₁(N) &gt; IE₁(O).</> },
        { label: "P > S", body: <>The same p³ versus p⁴ relation operates in period 3.</> },
        { label: "Zn > Cu for IE₁", body: <>Zn has 3d¹⁰4s²; removing an electron from its filled 4s pair is harder than removing Cu's single 4s electron.</> },
        { label: "Cu > Zn for IE₂", body: <>Cu⁺ is 3d¹⁰ and strongly resists a second ionization; Zn⁺ becomes 3d¹⁰ after losing its second electron.</> },
      ]} accent={T.p} />

      <H3>Factor 5: charge on the species</H3>
      <FactorStudyCard number="5" title="Successive ionization" relation={<MathInline tex={String.raw`\Delta_iH_1<\Delta_iH_2<\Delta_iH_3<\cdots`} />} explanation="Positive charge contracts the electron cloud and increases attraction. Negative charge makes electron removal easier." examples={[
        { label: "Na", body: <>IE₂ ≫ IE₁ because Na⁺ is [Ne].</> },
        { label: "Mg", body: <>IE₃ ≫ IE₂ because Mg²⁺ is [Ne].</> },
        { label: "Al", body: <>IE₄ ≫ IE₃ because Al³⁺ is [Ne].</> },
        { label: "Anion", body: <>The energy required to detach an electron from Cl⁻ equals the magnitude of the electron gain step for Cl, with opposite sign convention.</> },
      ]} accent={T.gold} />

      <H3>Factor 6: molecular and thermochemical environment</H3>
      <FactorStudyCard number="6" title="Gas-phase IE is not the whole reaction" explanation="Ionization enthalpy is defined for isolated gaseous species. Real oxidation, aqueous reduction and solid formation also involve atomization, bond breaking, electron gain, hydration, lattice enthalpy and entropy." examples={[
        { label: "Li in water", body: <>Li has the highest IE₁ among alkali metals but is the strongest aqueous reducing agent because Li⁺ hydration is exceptionally favourable.</> },
        { label: "Cu", body: <>Cu has moderate IE but positive E°(Cu²⁺/Cu) because atomization + ionization are not compensated enough by hydration.</> },
        { label: "MgO", body: <>Two ionizations of Mg are costly, but very large MgO lattice enthalpy stabilises the solid.</> },
        { label: "AlCl₃", body: <>High charge density and polarization introduce strong covalent character; simple IE arguments alone are insufficient.</> },
      ]} accent={T.f} />

      <DataTable columns={["Family", "Member 1", "Member 2", "Member 3", "Member 4", "Member 5", "Interpretation"]} rows={worldIeRows} accent={T.gold} />
      <RelationBox title="Applications of ionization enthalpy" relations={[
        <>Low IE generally corresponds to metallic/electropositive character and ease of cation formation.</>,
        <>A giant jump after IEₙ identifies n valence electrons and favours the +n oxidation state.</>,
        <>Reducing character in the gas phase generally rises as IE falls; in water hydration and electrode potential must also be included.</>,
        <>IE helps compare bond polarity, oxide character and the feasibility of ionic compounds only when combined with EGE and lattice enthalpy.</>,
        <>Photoelectron spectroscopy and successive ionizations reveal shell and subshell structure.</>,
      ]} />

      <H2 id="wr-ege">7 · Electron Gain Enthalpy and Electron Affinity</H2>
      <DefinitionBox term="Electron gain enthalpy">
        The enthalpy change when an electron is added to one mole of isolated gaseous atoms to form isolated gaseous anions. It can be negative or positive.
      </DefinitionBox>
      <MathBlock tex={String.raw`\mathrm{X(g)+e^-\rightarrow X^-(g)}\qquad \Delta_{eg}H_1`} label="first electron gain" />
      <MathBlock tex={String.raw`\mathrm{X^-(g)+e^-\rightarrow X^{2-}(g)}\qquad \Delta_{eg}H_2>0\ \text{for ordinary atoms}`} label="second electron gain" />
      <P>
        Electron affinity is often reported as the positive magnitude of energy released, whereas NCERT uses electron gain enthalpy with thermodynamic sign. Thus an exothermic attachment has negative <MathInline tex={String.raw`\Delta_{eg}H`} /> but positive conventional electron affinity. Always inspect the sign convention of the table.
      </P>
      <DataTable columns={["Step", "Representative value", "Reason"]} rows={[
        ["F + e⁻ → F⁻", "ΔegH₁ ≈ −328 kJ mol⁻¹", "exothermic formation of a closed shell"],
        ["N + e⁻ → N⁻", "small positive value", "2p³ half-filled stability is disturbed"],
        ["O + e⁻ → O⁻", "−141", "first addition is exothermic"],
        ["O⁻ + e⁻ → O²⁻", "+844", "electron is forced onto an anion against repulsion"],
        ["S + e⁻ → S⁻", "−200", "larger 3p orbital accommodates the electron better than O 2p"],
        ["S⁻ + e⁻ → S²⁻", "+590", "second attachment is endothermic"],
      ]} accent={T.p} />

      <H3>Factors affecting electron gain enthalpy - with maximum examples</H3>
      <FactorStudyCard number="1" title="Atomic size" explanation="For comparable configurations, a smaller atom attracts an incoming electron more strongly, but very compact orbitals can introduce severe electron-electron repulsion." examples={[
        { label: "Normal group trend", body: <>Magnitude generally becomes smaller down a group as size increases.</> },
        { label: "Cl versus Br versus I", body: <>|ΔegH| decreases Cl &gt; Br &gt; I.</> },
        { label: "F versus Cl", body: <>Cl is more negative than F because compact F 2p has greater repulsion.</> },
        { label: "O versus S", body: <>S is more negative than O for the same reason.</> },
      ]} accent={T.s} />
      <FactorStudyCard number="2" title="Effective nuclear charge" explanation="Increasing Zeff across a period generally makes electron attachment more exothermic." examples={[
        { label: "Li to F", body: <>The broad trend becomes more negative toward the halogen.</> },
        { label: "Na to Cl", body: <>Period 3 shows the same broad pattern.</> },
        { label: "Group 1 vs 17", body: <>Halogens have much larger magnitudes than alkali metals.</> },
        { label: "Isoelectronic anions", body: <>A stronger nucleus stabilises the gained electron more effectively.</> },
      ]} accent={T.cyan} />
      <FactorStudyCard number="3" title="Shielding" explanation="Greater shielding reduces the attraction of the incoming electron." examples={[
        { label: "Down Group 1", body: <>Li −60, Na −53, K −48, Rb −47, Cs −46 kJ mol⁻¹.</> },
        { label: "Down Group 17", body: <>After Cl, magnitude decreases through Br and I.</> },
        { label: "Heavy p block", body: <>d/f shielding creates irregular values in Ga-In-Tl and Pb-Bi-Po regions.</> },
        { label: "Noble gases", body: <>The incoming electron must enter a new shell and shielding is high, giving positive values.</> },
      ]} accent={T.d} />
      <FactorStudyCard number="4" title="Electronic configuration" explanation="Attachment that completes a subshell is favoured; attachment that disturbs a filled or half-filled arrangement is disfavoured." examples={[
        { label: "Group 17", body: <>np⁵ → np⁶ is strongly favourable.</> },
        { label: "Group 1", body: <>ns¹ → ns² is modestly favourable.</> },
        { label: "Group 2", body: <>ns² → ns²np¹ starts a higher-energy p orbital and is weak or endothermic for Be and Mg.</> },
        { label: "Group 15", body: <>np³ → np⁴ destroys half-filled stability; N is especially unfavourable.</> },
      ]} accent={T.p} />
      <FactorStudyCard number="5" title="Orbital receiving the electron" relation={<MathInline tex={String.raw`s>p>d>f\quad\text{penetration}`} />} explanation="A more penetrating low-energy orbital can stabilise an incoming electron better, but occupancy and repulsion must be considered." examples={[
        { label: "C versus N", body: <>C gains into 2p² → 2p³ and is favoured; N gains into paired 2p⁴ and is disfavoured.</> },
        { label: "Si versus P", body: <>Si is more exothermic than P for the same reason.</> },
        { label: "Alkali vs alkaline earth", body: <>ns¹ accepts into ns²; ns² must begin np¹.</> },
        { label: "Transition metals", body: <>Near-degenerate d and s levels produce small, irregular affinities.</> },
      ]} accent={T.f} />
      <FactorStudyCard number="6" title="Charge on the accepting species" explanation="Adding an electron to a neutral atom may be exothermic; adding the next electron to an anion is opposed by Coulomb repulsion." examples={[
        { label: "O", body: <>ΔegH₁ = −141 but ΔegH₂ = +844 kJ mol⁻¹.</> },
        { label: "S", body: <>ΔegH₁ = −200 but ΔegH₂ ≈ +590.</> },
        { label: "Oxide formation", body: <>The positive second EGE is paid back by lattice enthalpy in MgO, CaO and related solids.</> },
        { label: "Born-Haber", body: <>Both first and second electron-gain terms must be included explicitly for O²⁻ or S²⁻ salts.</> },
      ]} accent={T.gold} />
      <DataTable columns={["Group", "Member 1", "Member 2", "Member 3", "Member 4", "Member 5", "Key cause"]} rows={worldEgeRows} accent={T.p} />
      <RelationBox title="Applications and limitations" relations={[
        <>EGE helps compare oxidising tendency, but bond dissociation, hydration, lattice and electrode terms may dominate actual reactions.</>,
        <>The halogen with the most negative atomic EGE is Cl, but F₂ can still be the stronger oxidant because F-F bond and hydration terms differ.</>,
        <>A positive second EGE does not prevent stable M₂O or MO solids; lattice stabilization is decisive.</>,
        <>EGE belongs to isolated gaseous atoms and must not be confused with electronegativity of a bonded atom.</>,
      ]} />

      <H2 id="wr-en">8 · Electronegativity: Scales, Factors, Data and Applications</H2>
      <DefinitionBox term="Electronegativity">
        The tendency of an atom in a chemical compound to attract the shared electron pair toward itself. It is relative, dimensionless and depends on bonding environment.
      </DefinitionBox>
      <MathBlock tex={String.raw`|\chi_A-\chi_B|=0.102\sqrt{\Delta_{AB}}\quad(\Delta\text{ in kJ mol}^{-1})`} label="Pauling bond-energy relation" />
      <MathBlock tex={String.raw`\chi_M=\frac{IE+EA}{2}\quad\text{when both are in eV}`} label="Mulliken absolute electronegativity" />
      <MathBlock tex={String.raw`\chi_{AR}=0.359\frac{Z_{\mathrm{eff}}}{r_{\mathrm{cov}}^2}+0.744\quad(r\text{ in Å})`} label="Allred-Rochow relation" />
      <DataTable columns={["Scale", "Physical basis", "Strength", "Limitation"]} rows={[
        ["Pauling", "extra stabilization of heteronuclear bond relative to homonuclear bonds", "widely used chemical scale", "depends on bond-energy data and reference convention"],
        ["Mulliken", "mean of gas-phase IE and electron affinity", "direct energy interpretation", "atomic gas data do not capture every bonded environment"],
        ["Allred-Rochow", "electrostatic attraction at covalent radius", "connects Zeff and size", "requires model-dependent Zeff and radius"],
      ]} accent={T.cyan} />

      <H3>Factors affecting electronegativity - with multiple examples under each factor</H3>
      <FactorStudyCard number="1" title="Effective nuclear charge" explanation="A higher net nuclear attraction pulls a bonding pair more strongly." examples={[
        { label: "Across period 2", body: <>Li 1.0 &lt; Be 1.5 &lt; B 2.0 &lt; C 2.5 &lt; N 3.0 &lt; O 3.5 &lt; F 4.0.</> },
        { label: "Across period 3", body: <>Na 0.9 &lt; Mg 1.2 &lt; Al 1.5 &lt; Si 1.8 &lt; P 2.1 &lt; S 2.5 &lt; Cl 3.0.</> },
        { label: "Positive oxidation state", body: <>Fe³⁺ is more electron-attracting than Fe²⁺ in comparable bonding environments.</> },
        { label: "Cation sequence", body: <>For the same element, electron-attracting power rises with positive charge.</> },
      ]} accent={T.cyan} />
      <FactorStudyCard number="2" title="Atomic/covalent radius" explanation="A bonding pair closer to the nucleus is attracted more strongly." examples={[
        { label: "Halogens", body: <>F &gt; Cl &gt; Br &gt; I.</> },
        { label: "Alkali metals", body: <>Li &gt; Na &gt; K ≈ Rb &gt; Cs.</> },
        { label: "Chalcogens", body: <>O &gt; S ≈ Se &gt; Te &gt; Po.</> },
        { label: "Diagonal relation", body: <>Li and Mg have comparable charge density and show selected chemical resemblance.</> },
      ]} accent={T.s} />
      <FactorStudyCard number="3" title="Charge and oxidation state" explanation="Positive charge contracts the valence region; negative charge expands it. Electronegativity therefore rises with oxidation state for the same element." examples={[
        { label: "Carbon", body: <>Electron-attracting tendency rises qualitatively C⁻ &lt; C &lt; C⁺ &lt; C²⁺ &lt; C⁴⁺.</> },
        { label: "Oxygen", body: <>A positively polarised O centre is more electron-withdrawing than a negatively charged oxide O²⁻.</> },
        { label: "Metal ions", body: <>Al³⁺ polarises ligands more strongly than Mg²⁺ or Na⁺.</> },
        { label: "Oxides", body: <>Higher oxidation-state oxides are generally more covalent and acidic: MnO &lt; Mn₂O₃ &lt; MnO₂ &lt; Mn₂O₇ in acidity.</> },
      ]} accent={T.p} />
      <FactorStudyCard number="4" title="Hybridization and s character" relation={<MathInline tex={String.raw`sp>sp^2>sp^3\quad\text{electronegativity of carbon}`} />} explanation="An orbital with greater s character lies closer to the nucleus, so the atom attracts shared electrons more strongly." examples={[
        { label: "Carbon", body: <>C(sp) &gt; C(sp²) &gt; C(sp³).</> },
        { label: "Acidity", body: <>HC≡CH is more acidic than H₂C=CH₂, which is more acidic than CH₃-CH₃.</> },
        { label: "Bond polarization", body: <>A substituent attached to sp carbon experiences a stronger −I effect than on sp³ carbon.</> },
        { label: "Approximate values", body: <>Some teaching scales use about 3.25 for sp, 2.75 for sp² and 2.5 for sp³ carbon.</> },
      ]} accent={T.d} />
      <FactorStudyCard number="5" title="Bond order and local bonding" explanation="Multiple bonding changes orbital composition and electron density; the same element can have different electronegativity in different bonds." examples={[
        { label: "C-C", body: <>C in C≡C is more electronegative than in C=C and C-C.</> },
        { label: "N", body: <>Nitrogen in nitrile and imine environments differs from amine nitrogen.</> },
        { label: "Resonance", body: <>Delocalisation can alter partial charges and effective electron attraction.</> },
        { label: "Formal charge", body: <>A positively charged atom withdraws more strongly than its neutral form.</> },
      ]} accent={T.f} />
      <FactorStudyCard number="6" title="Substituent and inductive environment" explanation="Electronegativity is not an immutable number for an atom inside every molecule. Electron-withdrawing groups increase positive character on adjacent atoms; electron-releasing groups reduce it." examples={[
        { label: "C-F vs C-I", body: <>Carbon bonded to F becomes more δ⁺ than carbon bonded to I.</> },
        { label: "Haloacids", body: <>Electron-withdrawing halogens stabilise conjugate bases through −I effect.</> },
        { label: "CF₃ group", body: <>Three F atoms produce a much stronger −I effect than one F atom.</> },
        { label: "Alkyl groups", body: <>Alkyl groups are weakly electron-releasing relative to H in many organic comparisons.</> },
      ]} accent={T.gold} />
      <DataTable columns={["Family", "Top", "Second", "Middle", "Lower", "Bottom"]} rows={worldEnRows} accent={T.cyan} />
      <RelationBox title="Applications of electronegativity" relations={[
        <>Bond polarity and direction of dipole: the more electronegative atom carries <MathInline tex={String.raw`\delta^-`} />.</>,
        <>Approximate ionic character can be estimated from <MathInline tex={String.raw`\%\,ionic\approx16\Delta\chi+3.5(\Delta\chi)^2`} />, but no sharp universal ionic/covalent boundary exists.</>,
        <>Across a period, increasing electronegativity changes oxides from basic through amphoteric to acidic.</>,
        <>Hydride acidity across period 2 follows broadly <MathInline tex={String.raw`\mathrm{CH_4<NH_3<H_2O<HF}`} />.</>,
        <>For A-O-H species, whether A-O or O-H cleavage is favoured can be rationalised by comparing bond polarities and central-atom electronegativity.</>,
        <>Electronegativity helps discuss inductive effect, group electronegativity, nucleophilic attack paths, HSAB matching and ligand-field trends, but those applications require their own models.</>,
      ]} />
      <Callout kind="special" title="Do not confuse EN with EGE">
        Fluorine is the most electronegative element on the Pauling scale, whereas chlorine has the more negative first electron gain enthalpy. Electronegativity describes a bonded atom; EGE describes addition to an isolated gaseous atom.
      </Callout>

      <H2 id="wr-chemistry">9 · Chemical Periodicity: Oxides, Hydrides, Oxyacids and Hydroxides</H2>
      <DataTable columns={["Movement", "Hydracid acidity", "Oxyacid acidity", "Oxide acidity", "Metallic character"]} rows={[
        ["left → right in a period", "generally increases for comparable hydrides", "generally increases with central oxidation state and EN", "increases: basic → amphoteric → acidic", "decreases"],
        ["down a group", "often increases as E-H bond weakens, e.g. HF < HCl < HBr < HI", "often decreases for comparable highest oxyacids when central EN falls", "basicity generally increases", "increases"],
      ]} accent={T.p} />
      <RelationBox title="Oxide orders" relations={[
        <><MathInline tex={String.raw`\mathrm{Li_2O<BeO<B_2O_3<CO_2<N_2O_5}`} /> in acidity across period 2.</>,
        <><MathInline tex={String.raw`\mathrm{Na_2O<MgO<Al_2O_3<SiO_2<P_4O_{10}<SO_3<Cl_2O_7}`} /> in acidity across period 3.</>,
        <><MathInline tex={String.raw`\mathrm{N_2O<NO<N_2O_3<N_2O_4<N_2O_5}`} /> broadly rises in acidity with oxidation state.</>,
        <><MathInline tex={String.raw`\mathrm{MnO<Mn_2O_3<MnO_2<Mn_2O_7}`} /> shows the same transition-metal principle.</>,
      ]} />
      <DataTable columns={["Class", "Representative oxides"]} rows={[
        ["basic", "Na₂O, MgO, CaO, MnO, FeO, CuO"],
        ["amphoteric", "BeO, Al₂O₃, ZnO, Ga₂O₃, Cr₂O₃, SnO, SnO₂, PbO, PbO₂, As₂O₃, Sb₂O₃, MnO₂"],
        ["acidic", "B₂O₃, CO₂, SiO₂, P₄O₁₀, SO₃, Cl₂O₇, CrO₃, V₂O₅, Mn₂O₇"],
        ["neutral", "CO, NO, N₂O and H₂O in ordinary acid-base oxide classification"],
      ]} accent={T.gold} />
      <DefinitionBox term="Amphoteric oxide/hydroxide">
        A substance that reacts with both acids and bases. Amphoteric does not mean neutral; it means dual acid-base reactivity.
      </DefinitionBox>
      <MathBlock tex={String.raw`\mathrm{Na_2O+H_2O\rightarrow2NaOH\qquad Cl_2O_7+H_2O\rightarrow2HClO_4}`} label="extreme oxides of period 3" />
      <RelationBox title="Oxyacid strength comparisons" relations={[
        <>For the same central atom and similar structure, more terminal O atoms and higher oxidation state usually increase acid strength: <MathInline tex={String.raw`\mathrm{HClO<HClO_2<HClO_3<HClO_4}`} />.</>,
        <>Examples: <MathInline tex={String.raw`\mathrm{HNO_2<HNO_3}`} /> and <MathInline tex={String.raw`\mathrm{H_2SO_3<H_2SO_4}`} />.</>,
        <>When comparing different central atoms in the same oxidation state and analogous structure, higher electronegativity generally increases acidity.</>,
        <>For phosphorus oxyacids, acid strength and basicity depend on the number of ionisable P-OH groups and P-H bonds; a simple oxidation-state arrow alone is unsafe.</>,
      ]} />
      <H3>Predicting whether M-O-H behaves as acid or base</H3>
      <P>
        If the M-O bond is highly ionic, cleavage gives <MathInline tex={String.raw`\mathrm{M^++OH^-}`} /> and the hydroxide behaves as a base. If M strongly withdraws electron density, the O-H bond is weakened and proton release gives acidic behaviour.
      </P>
      <DataTable columns={["Species", "Dominant polarisation", "Behaviour"]} rows={[
        ["Cs-O-H", "Cs-O is strongly ionic", "CsOH is a strong base"],
        ["Al-O-H", "intermediate and strongly polarised", "Al(OH)₃ is amphoteric"],
        ["Cl-O-H", "Cl withdraws through O", "hypochlorous/oxoacids release H⁺"],
      ]} accent={T.d} />

      <H2 id="wr-lattice">10 · Lattice Enthalpy, Hydration, Mobility, Conductivity and Born-Haber Cycles</H2>
      <DefinitionBox term="Lattice enthalpy of formation">
        The enthalpy change when one mole of an ionic solid forms from its constituent gaseous ions. It is negative for lattice formation. Some books instead define lattice dissociation enthalpy as the positive enthalpy required to separate the solid into gaseous ions; always state the convention.
      </DefinitionBox>
      <MathBlock tex={String.raw`\mathrm{Na^+(g)+Cl^-(g)\rightarrow NaCl(s)}\qquad \Delta_{latt}H<0`} label="lattice formation" />
      <MathBlock tex={String.raw`|U|\propto\frac{|z_+z_-|}{r_++r_-}`} label="simple electrostatic dependence" />
      <RelationBox title="Factors affecting lattice enthalpy" relations={[
        <>Higher ionic charges increase attraction very strongly: MgO has much larger lattice magnitude than NaCl.</>,
        <>Smaller ions shorten interionic distance: for a fixed cation, fluoride salts generally have larger lattice magnitude than chloride, bromide and iodide analogues.</>,
        <>Crystal structure, coordination number, polarization and covalency modify the simple charge/radius relation.</>,
        <>For LiX, the small Li⁺ ion strongly favours LiF by distance, while increasing covalency toward LiI complicates direct solubility predictions.</>,
      ]} />

      <DefinitionBox term="Hydration enthalpy">
        The enthalpy released when one mole of isolated gaseous ions becomes surrounded and stabilised by water molecules. Its magnitude increases with ionic charge density.
      </DefinitionBox>
      <HydrationMobilitySVG />
      <DataTable columns={["Series", "Bare ionic radius", "Hydration magnitude", "Hydrated radius", "Mobility / limiting molar conductivity in water"]} rows={[
        ["Li⁺ → Cs⁺", "increases", "decreases", "generally decreases because Li⁺ carries the strongest water shell", "generally increases: Li⁺ < Na⁺ < K⁺ < Rb⁺ < Cs⁺"],
        ["Be²⁺ → Ba²⁺", "increases", "decreases", "strongest for Be²⁺ and Mg²⁺", "mobility generally rises down the group"],
        ["F⁻ → I⁻", "increases", "decreases", "F⁻ is most strongly hydrated", "mobility generally increases toward I⁻"],
      ]} accent={T.cyan} />
      <RelationBox title="Solubility competition" relations={[
        <>Separating the ionic lattice is endothermic; hydrating the released ions is exothermic.</>,
        <>A salt tends to dissolve when hydration and entropy together compensate lattice dissociation.</>,
        <>High lattice enthalpy does not automatically mean insoluble, and high hydration does not automatically mean soluble; the complete Gibbs-energy balance is required.</>,
        <>LiF is sparingly soluble because its compact lattice is exceptionally strong despite strong hydration, while CsI has a weaker lattice and weaker hydration.</>,
      ]} />

      <H3>Born-Haber cycle for NaCl</H3>
      <BornHaberNaClSVG />
      <MathBlock tex={String.raw`\Delta_fH^\circ=\Delta_{sub}H+IE_1+\tfrac12D(\mathrm{Cl_2})+\Delta_{eg}H+\Delta_{latt}H`} label="Hess-law equation for NaCl formation" />
      <DataTable columns={["Term", "Meaning", "Sign in the forward NaCl formation cycle"]} rows={[
        ["ΔsubH", "Na(s) → Na(g)", "positive"],
        ["IE₁", "Na(g) → Na⁺(g) + e⁻", "positive"],
        ["½D(Cl₂)", "½Cl₂(g) → Cl(g)", "positive"],
        ["ΔegH", "Cl(g) + e⁻ → Cl⁻(g)", "negative"],
        ["ΔlattH", "Na⁺(g) + Cl⁻(g) → NaCl(s)", "large negative"],
        ["ΔfH°", "Na(s) + ½Cl₂(g) → NaCl(s)", "measured overall value"],
      ]} accent={T.gold} />
      <Callout kind="note">
        The Born-Haber cycle is not a separate physical path followed by atoms; it is a Hess-law bookkeeping cycle. It can be rearranged to estimate lattice enthalpy, electron affinity or another inaccessible term from measured quantities.
      </Callout>

      <H2 id="wr-blocks">11 · d- and f-Block Theory that Explains the Data Tables</H2>
      <DefinitionBox term="Transition element">
        An element whose atom or a commonly occurring ion has an incompletely filled d subshell.
      </DefinitionBox>
      <RelationBox title="Why Zn, Cd and Hg need careful wording" relations={[
        <>Their atoms are d-block because the differentiating electron belongs to d filling in the series.</>,
        <>The atoms have <MathInline tex={String.raw`d^{10}s^2`} /> and their common +2 ions have <MathInline tex={String.raw`d^{10}`} />; neither has an incomplete d subshell.</>,
        <>Therefore they are not transition elements under the strict definition, although they are placed in the d block.</>,
        <>Cu is a transition element because Cu²⁺ is 3d⁹ even though Cu atom is 3d¹⁰4s¹.</>,
      ]} />
      <H3>Radial extension and bonding</H3>
      <P>
        The 3d orbitals are relatively contracted and lie inside the radial maxima of 4s and 4p; 4d and 5d orbitals are more radially extended and participate more strongly in covalent metal-ligand bonding. In the f block, 4f orbitals are deeply buried and ligand-insensitive, whereas 5f orbitals of early actinoids are more extended and can participate appreciably in bonding.
      </P>
      <RelationBox title="Consequences of lanthanoid contraction" relations={[
        <>Progressive decrease of Ln³⁺ radii and decreasing basicity of Ln(OH)₃.</>,
        <>Close similarity of 4d and 5d pairs such as Zr-Hf, Nb-Ta and Mo-W.</>,
        <>High density and higher ionization tendency changes among post-lanthanoid 5d elements.</>,
        <>Difficulty separating lanthanoids because adjacent Ln³⁺ ions differ only slightly in size.</>,
        <>Y³⁺ has a comparable size and charge density to heavy lanthanoids, explaining its frequent occurrence with them.</>,
        <>Relativistic and contraction effects help produce the high electron affinity and chemical nobility of Au.</>,
      ]} />
      <RelationBox title="Actinoid contraction and variable oxidation states" relations={[
        <>Poor shielding by 5f electrons contracts actinoid atoms and ions across the series.</>,
        <>The 5f, 6d and 7s levels are close in early actinoids, giving +3 to +7 states.</>,
        <>As 5f orbitals contract in later members, +3 becomes progressively dominant and lanthanoid-like behaviour increases.</>,
        <>All actinoids are radioactive; scarcity and radioactivity limit experimental precision for the heaviest members.</>,
      ]} />
      <Callout kind="note" title="Use the separate Block-Wise Data Atlas">
        The exact period-wise configurations, 3d atomization/IE/radius/electrode data, oxide matrix, magnetic moments, lanthanoid configurations and actinoid oxidation states are tabulated in the dedicated atlas module. This theory section explains why those numbers are irregular instead of repeating the same tables.
      </Callout>

      <H2 id="wr-special">12 · High-Yield Special Relationships and Verified Facts</H2>
      <DataTable columns={["Topic", "Reliable statement", "Reason / caution"]} rows={[
        ["Diagonal relationship", "Li-Mg, Be-Al and B-Si show selected similarities", "similar charge density and electronegativity; not identity of all properties"],
        ["Gaseous elements near room conditions", "H₂, N₂, O₂, F₂, Cl₂ and He, Ne, Ar, Kr, Xe, Rn", "11 gases when radon is included"],
        ["Liquid elements near room temperature", "Hg is a liquid metal; Br₂ is a liquid non-metal", "Cs and Fr are solids near ordinary room temperature, not liquids"],
        ["Metalloids", "commonly B, Si, Ge, As, Sb and Te; lists may include Po/At by convention", "avoid claiming a single universally fixed boundary"],
        ["Hardest natural material", "diamond is the standard textbook answer", "hardness depends on scale and sample"],
        ["Densest element", "Os and Ir are extremely close; Os is commonly quoted as densest", "this is density, not highest atomic mass"],
        ["Highest electronegativity", "F", "Pauling scale"],
        ["Most negative common first EGE", "Cl", "compact F 2p causes extra repulsion"],
        ["Largest common alkali cation", "Cs⁺ among stable common ions", "Fr⁺ data are limited by radioactivity"],
        ["Hydrogen size", "depends on covalent, metallic, van der Waals or bare-proton convention", "avoid an unqualified 'smallest element/cation' statement"],
      ]} accent={T.gold} />
      <DataTable columns={["Relationship", "Order / relation", "Use"]} rows={[
        ["Shielding / penetration", "s > p > d > f", "Zeff, IE, EN and orbital energy"],
        ["Cation radius", "M⁺ > M²⁺ > M³⁺ for same element", "charge density and hydration"],
        ["Isoelectronic radius", "radius decreases as Z increases", "fast ordering questions"],
        ["Hydrated alkali mobility", "Li⁺ < Na⁺ < K⁺ < Rb⁺ < Cs⁺", "conductivity in aqueous solution"],
        ["Halogen EGE magnitude", "Cl > F > Br > I", "atomic electron attachment"],
        ["Halogen EN", "F > Cl > Br > I", "bond polarity"],
        ["Hydrogen-halide bond length", "HF < HCl < HBr < HI", "size of halogen"],
        ["Hydrogen-halide acidity in water", "HF < HCl < HBr < HI", "bond weakening dominates down group"],
      ]} accent={T.cyan} />

      <H2 id="wr-audit">13 · Final Integration Map: What to Derive, What to Learn and What to Check</H2>
      <DataTable columns={["Category", "Derive logically", "Memorise / consult data", "Always state"]} rows={[
        ["History", "why atomic number fixes anomalies", "dates, named schemes and eka predictions", "basis and limitation of each scheme"],
        ["Position", "period/group/block from configuration", "special actual configurations such as Cr, Cu, Nb, Mo, Pd, Pt, Au", "ground state versus common ion"],
        ["Radius", "normal period/group and isoelectronic trends", "exact pm values and Ga/Al, In/Tl, Eu/Yb cases", "type of radius"],
        ["Ionization", "factor competition and giant jump", "exact family and d-block values", "gas-phase species and charge"],
        ["Electron gain", "sign from exo/endothermic addition", "Cl/F, S/O and noble-gas numbers", "EGE sign convention versus EA magnitude"],
        ["Electronegativity", "direction from Zeff and radius", "scale-specific values", "scale and bonded environment"],
        ["Lattice/hydration", "charge-density relations", "specific enthalpy values", "formation versus dissociation convention"],
        ["d/f block", "contraction and electronic causes", "exact tables", "strict transition definition"],
      ]} accent={T.f} />
      <Callout kind="note" title="Quality rule for every future update">
        No numerical order is added merely because it appears in a secondary sheet. It is first reconciled with the NCERT convention, the property definition, the physical state, the charge and the measurement scale. Contradictory data are either corrected or explicitly labelled as convention-dependent.
      </Callout>
    </div>
  );
}



/* PERIODICITY_WORLD_V10_SECTION_WRAPPERS */
export function SectionAtomicRadius() {
  return (
    <>
      <><SectionAtomicRadiusLegacyV9 /><V9RadiusSourcePanel /></>
      <div
        data-integration="SectionAtomicRadius-periodicity-generated-corpus-phd-v9"
        style={{ marginTop: 34 }}
      >
        <PeriodicTableDeepAdditions topic="radius" />
      </div>
    </>
  );
}

export function SectionIonization() {
  return (
    <>
      <><SectionIonizationLegacyV9 /><V9IonizationSourcePanel /></>
      <div
        data-integration="SectionIonization-periodicity-generated-corpus-phd-v9"
        style={{ marginTop: 34 }}
      >
        <PeriodicTableDeepAdditions topic="ionization" />
      </div>
    </>
  );
}

export function SectionElectronGain() {
  return (
    <>
      <><SectionElectronGainLegacyV9 /><V9ElectronGainSourcePanel /></>
      <div
        data-integration="SectionElectronGain-periodicity-generated-corpus-phd-v9"
        style={{ marginTop: 34 }}
      >
        <PeriodicTableDeepAdditions topic="electronGain" />
      </div>
    </>
  );
}

export function SectionElectronegativity() {
  return (
    <>
      <>
            <SectionElectronegativityV12 />
            <ElectronegativityFactorsApplicationsV14 />
          </>
      <div
        data-integration="SectionElectronegativity-periodicity-generated-corpus-phd-v9"
        style={{ marginTop: 34 }}
      >
        <PeriodicTableDeepAdditions topic="electronegativity" />
      </div>
    </>
  );
}

/* Legacy implementation retained for source comparison; not rendered. */
function SectionElectronegativityLegacy() {
  return <><SectionElectronegativityLegacyV9 /><V9ElectronegativitySourcePanel /><V10ElectronegativityApplicationsPanel /></>;
}

export function SectionSpecialEffects() {
  return (
    <>
      <><SectionSpecialEffectsLegacyV9 /><V9SpecialSourcePanel /><V10SecondaryPeriodicityPanel /><V10CohesiveAndMeltingPanel /><V10OlympiadEnrichmentPanel /></>
      <div
        data-integration="SectionSpecialEffects-periodicity-generated-corpus-phd-v9"
        style={{ marginTop: 34 }}
      >
        <PeriodicTableDeepAdditions topic="special" />
      </div>
    </>
  );
}

/* =============================================================================
   MAIN APP — Navigation shell
   ========================================================================== */
type NavKey =
  | "compendium"
  | "notebook"
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
  | "atlas"
  | "workshop";

const NAV: { key: NavKey; label: string; group: string }[] = [
  { key: "compendium", label: "NCERT-First Reference Compendium", group: "Start Here" },
  { key: "notebook", label: "Rapid Student Notebook", group: "Start Here" },
  { key: "history", label: "History & Modern Law", group: "Foundations" },
  { key: "configuration", label: "Electronic Configuration", group: "Foundations" },
  { key: "map", label: "Master Trend Map", group: "Foundations" },
  { key: "radius", label: "Atomic & Ionic Radius", group: "Core Periodic Trends" },
  { key: "ionization", label: "Ionization Enthalpy · Full Notes", group: "Core Periodic Trends" },
  { key: "electronGain", label: "Electron Gain Enthalpy · Full Notes", group: "Core Periodic Trends" },
  { key: "electronegativity", label: "Electronegativity · Full Notes", group: "Core Periodic Trends" },
  { key: "zeff", label: "Zeff & Slater · Full Notes", group: "Core Periodic Trends" },
  { key: "chemistry", label: "Chemical Periodicity", group: "Advanced Connections" },
  { key: "special", label: "Special Relationships", group: "Advanced Connections" },
  { key: "families", label: "Family-Wise Orders", group: "Reference Data" },
  { key: "dblock", label: "3d-Series & Ion Colours", group: "Reference Data" },
  { key: "atlas", label: "Block-Wise Data Atlas", group: "Reference Data" },
  { key: "workshop", label: "Worked Example Workshop", group: "Practice" },
];

const PERIODICITY_READING_LAYOUT_V15_CSS = `
.periodicityContentShell {
  width: min(1120px, calc(100% - 64px));
  margin-inline: auto;
  padding: 30px 0 104px;
  box-sizing: border-box;
  overflow-x: clip;
}
.periodicityContentShell > * { max-width: 100%; min-width: 0; }
.periodicityContentShell :where(h1, h2, h3, h4) {
  text-wrap: balance;
}
.periodicityContentShell :where(p, li) {
  max-width: 78ch;
  text-wrap: pretty;
}
.periodicitySectionIntro :where(p, li) { max-width: 86ch; }
.periodicityCard,
.periodicityFactorCard,
.periodicitySectionIntro,
.periodicityWorkedExample {
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}
.periodicityConceptGrid { width: 100%; max-width: 100%; min-width: 0; }
.periodicityTableHost {
  width: 100%;
  max-width: 100%;
  overflow-x: auto !important;
  overscroll-behavior-inline: contain;
  -webkit-overflow-scrolling: touch;
}
.periodicityTableHost table { min-width: 700px; }
.periodicityContentShell .katex-display,
.periodicityContentShell [class*="formula" i] {
  max-width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  overscroll-behavior-inline: contain;
  -webkit-overflow-scrolling: touch;
}
.periodicityContentShell svg { max-width: 100%; height: auto; }
.periodicityBottomNav {
  width: min(1120px, calc(100% - 64px));
  margin-inline: auto;
  padding: 22px 0 36px;
  display: flex;
  justify-content: space-between;
  gap: 12px;
  box-sizing: border-box;
  border-top: 1px solid rgba(95, 212, 234, 0.22);
}
.periodicityBottomNav button {
  min-height: 46px;
  padding: 10px 15px;
  border-radius: 12px;
  border: 1px solid #24405c;
  background: linear-gradient(135deg, #182b3e, #122232);
  color: #eef3f8;
  font: 800 13px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  cursor: pointer;
}
.periodicityBottomNav button:first-child { color: #5fd4ea; border-color: rgba(95,212,234,.5); }
.periodicityBottomNav button:last-child { color: #e8b84b; border-color: rgba(232,184,75,.5); }

@media (min-width: 1500px) {
  .periodicityContentShell,
  .periodicityBottomNav { width: min(1080px, calc(100% - 160px)); }
}

@media (max-width: 1100px) {
  .periodicityContentShell,
  .periodicityBottomNav { width: calc(100% - 40px); }
  .periodicityContentShell { padding-top: 22px; }
}

@media (max-width: 900px) {
  .periodicityContentShell,
  .periodicityBottomNav { width: calc(100% - 32px); }
  .periodicityContentShell { padding: 18px 0 88px; }
  .periodicitySectionIntro,
  .periodicityCard,
  .periodicityFactorCard,
  .periodicityWorkedExample { padding: 16px !important; border-radius: 15px !important; }
  .periodicityConceptGrid { grid-template-columns: 1fr !important; gap: 12px !important; }
  .periodicityFactorCard > div,
  .periodicityWorkedExample > div { min-width: 0; }
  .periodicityFactorCard div[style*="grid-template-columns"] { grid-template-columns: 1fr !important; }
}

@media (max-width: 600px) {
  .periodicityContentShell,
  .periodicityBottomNav { width: calc(100% - 26px); }
  .periodicityContentShell { padding: 14px 0 82px; }
  .periodicitySectionIntro,
  .periodicityCard,
  .periodicityFactorCard,
  .periodicityWorkedExample { padding: 14px 13px !important; }
  .periodicityContentShell h1 { font-size: clamp(1.8rem, 8vw, 2.35rem) !important; line-height: 1.08 !important; }
  .periodicityContentShell h2 { font-size: clamp(1.35rem, 6.3vw, 1.8rem) !important; line-height: 1.15 !important; }
  .periodicityContentShell p,
  .periodicityContentShell li { max-width: none; font-size: 15px !important; line-height: 1.68 !important; }
  .periodicityTableHost table { min-width: 640px; }
  .periodicityBottomNav { display: grid; grid-template-columns: 1fr; padding: 18px 0 30px; }
  .periodicityBottomNav button { width: 100%; }
}
`;

export default function PeriodicTableMasterNotes() {
  const [active, setActive] = useState<NavKey>("history");

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
      case "compendium": return <SectionWorldReference />;
      case "notebook": return <SectionStudentNotebook />;
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
      case "atlas": return <SectionBlockDataAtlas />;
      case "workshop": return <SectionWorkshop />;
    }
  };

  return (
    <div
      data-layout-version="periodicity-top-nav-v14"
      style={{
        minHeight: "100vh",
        background: T.bg,
        color: T.text,
      }}
    >
      <header
        style={{
          width: "100%",
          borderBottom: `1px solid ${T.border}`,
          background: `linear-gradient(180deg, ${T.surface2}, ${T.bg})`,
          padding: "clamp(18px, 3vw, 34px) clamp(14px, 3vw, 42px)",
        }}
      >
        <div
          style={{
            maxWidth: 1560,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "baseline",
              justifyContent: "space-between",
              gap: 10,
              marginBottom: 18,
            }}
          >
            <div>
              <div
                style={{
                  color: T.text,
                  fontFamily: T.serif,
                  fontSize: "clamp(1.35rem, 2.4vw, 2rem)",
                  fontWeight: 900,
                }}
              >
                JEE Inorganic Chemistry
              </div>
              <div
                style={{
                  marginTop: 4,
                  color: T.cyan,
                  fontFamily: T.sans,
                  fontSize: "clamp(.95rem, 1.4vw, 1.08rem)",
                  fontWeight: 750,
                }}
              >
                Classification of Elements and Periodicity in Properties
              </div>
            </div>
            <div
              style={{
                color: T.gold,
                fontFamily: T.mono,
                fontSize: 12,
                fontWeight: 900,
                letterSpacing: ".1em",
              }}
            >
              TOP CHAPTER NAVIGATION
            </div>
          </div>

          <nav
            aria-label="Periodic table chapter sections"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 9,
              alignItems: "center",
            }}
          >
            {NAV.filter(
              (item) =>
                item.key !== "compendium" &&
                item.key !== "notebook" &&
                item.key !== "map",
            ).map((item) => {
              const selected = active === item.key;
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => {
                    setActive(item.key);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  style={{
                    border: `1px solid ${selected ? T.gold : T.border}`,
                    borderLeft: `4px solid ${selected ? T.gold : T.cyan}`,
                    borderRadius: 13,
                    padding: "10px 13px",
                    background: selected
                      ? "rgba(232,184,75,.15)"
                      : "rgba(18,34,50,.9)",
                    color: selected ? T.gold : T.textDim,
                    fontFamily: T.sans,
                    fontSize: "clamp(.82rem, 1.1vw, .96rem)",
                    fontWeight: selected ? 900 : 700,
                    lineHeight: 1.25,
                    cursor: "pointer",
                    boxShadow: selected
                      ? "0 8px 24px rgba(232,184,75,.12)"
                      : "none",
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      <main
        style={{
          width: "100%",
          minWidth: 0,
        }}
      >
        <>
          <span data-release="periodicity-mobile-ec-v13r2" hidden />
          <main className="periodicityContentShell" data-layout-version="periodicity-reading-layout-v15">
          <style>{PERIODICITY_READING_LAYOUT_V15_CSS}</style>
          {renderSection()}
        </main>
          <nav className="bottomPageNav" aria-label="Page return controls">
            <button
              type="button"
              onClick={() => {
                if (typeof window !== "undefined" && window.history.length > 1) {
                  window.history.back();
                } else if (typeof window !== "undefined") {
                  window.location.assign("/learn/periodic-table");
                }
              }}
            >
              ← Back / Return
            </button>
            <button
              type="button"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              ↑ Back to top
            </button>
          </nav>
          <style>{`/* V13R2: mobile-first reading and bottom navigation */
.notesSidebar { display: none !important; }
.notesShell {
  display: block !important;
  width: 100% !important;
  max-width: 1500px !important;
  margin: 0 auto !important;
}
.notesMain {
  width: 100% !important;
  max-width: 1500px !important;
  margin: 0 auto !important;
  padding: 28px 24px 92px !important;
}
.mobileTabs {
  display: flex !important;
  overflow-x: auto !important;
  overscroll-behavior-inline: contain;
  gap: 8px;
  padding: 10px 14px;
  position: sticky;
  top: 57px;
  z-index: 15;
  background: rgba(10, 22, 34, 0.96);
  border-bottom: 1px solid #24405c;
  backdrop-filter: blur(12px);
  scrollbar-width: thin;
}
.mobileTabs button { flex: 0 0 auto; min-height: 40px; }
.tableScroll {
  max-width: 100%;
  overflow-x: auto !important;
  -webkit-overflow-scrolling: touch;
  border-radius: 10px;
}
.tableScroll::after {
  content: "Swipe horizontally for the full table →";
  display: none;
  padding: 7px 10px 2px;
  color: #8fa8bf;
  font-size: 10.5px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
.tableScroll table { min-width: 680px; }
.formulaBox {
  max-width: 100% !important;
  overflow-x: auto !important;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}
.bottomPageNav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin: 30px auto 0;
  padding: 20px 0 2px;
  width: 100%;
  border-top: 1px solid #24405c;
}
.bottomPageNav button {
  min-height: 46px;
  border: 1px solid #24405c;
  border-radius: 12px;
  padding: 10px 15px;
  background: linear-gradient(135deg, #182b3e, #122232);
  color: #eef3f8;
  font: 800 13px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  cursor: pointer;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.18);
}
.bottomPageNav button:first-child {
  color: #5fd4ea;
  border-color: rgba(95, 212, 234, 0.5);
}
.bottomPageNav button:last-child {
  color: #e8b84b;
  border-color: rgba(232, 184, 75, 0.5);
}

@media (max-width: 900px) {
  .notesMain { padding: 20px 15px 78px !important; }
  .chapterHero { margin: 12px 12px 6px !important; padding: 20px 16px !important; }
  .heroGrid, .twoCol { grid-template-columns: 1fr !important; }
  .sectionIntro { padding: 19px 16px 18px !important; border-radius: 15px !important; }
  .lessonCard, .workedExample { padding: 15px 14px !important; border-radius: 14px !important; }
  .conceptGrid { grid-template-columns: 1fr !important; gap: 11px !important; }
  .tableScroll::after { display: block; }
  .ecJumpNav { margin-inline: -2px; }
}

@media (max-width: 560px) {
  .notesMain { padding-inline: 13px !important; }
  .chapterHero h1 { font-size: 31px !important; line-height: 1.04 !important; }
  .sectionIntro h1 { font-size: 27px !important; line-height: 1.08 !important; }
  .lessonCard, .workedExample { padding: 14px 13px !important; }
  .tableScroll table { min-width: 640px; }
  .bottomPageNav { display: grid; grid-template-columns: 1fr; }
  .bottomPageNav button { width: 100%; }
}`}</style>
        </>
      </main>
    </div>
  );
}
