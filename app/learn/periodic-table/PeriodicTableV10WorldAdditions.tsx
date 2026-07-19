"use client";

import React from "react";

const C = {
  bg: "#0a1622",
  grid: "#0d1c2b",
  surface: "#122232",
  surface2: "#182b3e",
  border: "#24405c",
  soft: "#1c3049",
  text: "#eef3f8",
  dim: "#c3d1dd",
  faint: "#91a9bc",
  gold: "#e8b84b",
  cyan: "#5fd4ea",
  blue: "#7fb2e5",
  coral: "#e8896b",
  green: "#7fd9b8",
  violet: "#c9a4e0",
  serif: "Georgia, 'Iowan Old Style', 'Times New Roman', serif",
  sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  mono: "'SFMono-Regular', Consolas, 'Liberation Mono', monospace",
} as const;

type Datum = { label: string; value: number; note?: string };

type ChartProps = {
  title: string;
  subtitle?: string;
  data: Datum[];
  unit: string;
  color?: string;
  mode?: "magnitude" | "signed";
  compact?: boolean;
};

function Panel({ children, accent = C.cyan }: { children: React.ReactNode; accent?: string }) {
  return (
    <section
      data-periodicity-v9="true"
      style={{
        minWidth: 0,
        overflow: "hidden",
        margin: "22px 0",
        border: `1px solid ${C.border}`,
        borderTop: `3px solid ${accent}`,
        borderRadius: 18,
        padding: "clamp(16px, 2.6vw, 26px)",
        background: `linear-gradient(145deg, ${C.surface2}, ${C.surface} 58%, ${C.grid})`,
        boxShadow: "0 22px 58px rgba(0,0,0,.22)",
      }}
    >
      {children}
    </section>
  );
}

function Title({ kicker, children, accent = C.cyan }: { kicker: string; children: React.ReactNode; accent?: string }) {
  return (
    <header style={{ marginBottom: 16, minWidth: 0 }}>
      <div
        style={{
          color: accent,
          font: `800 11px/1.2 ${C.sans}`,
          letterSpacing: 1.35,
          textTransform: "uppercase",
          marginBottom: 7,
        }}
      >
        {kicker}
      </div>
      <h2
        style={{
          margin: 0,
          color: C.text,
          font: `700 clamp(23px, 3vw, 34px)/1.16 ${C.serif}`,
          overflowWrap: "anywhere",
        }}
      >
        {children}
      </h2>
    </header>
  );
}

function Lead({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        margin: "0 0 16px",
        maxWidth: 980,
        color: C.dim,
        font: `400 14px/1.7 ${C.sans}`,
        overflowWrap: "anywhere",
      }}
    >
      {children}
    </p>
  );
}

function ChartGrid({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 330px), 1fr))",
        gap: 14,
        margin: "14px 0 18px",
        minWidth: 0,
      }}
    >
      {children}
    </div>
  );
}

function MetricBars({ title, subtitle, data, unit, color = C.cyan, mode = "magnitude", compact = false }: ChartProps) {
  const absMax = Math.max(1, ...data.map((d) => Math.abs(d.value)));
  const minHeight = compact ? 146 : 178;
  return (
    <figure
      style={{
        margin: 0,
        minWidth: 0,
        overflow: "hidden",
        border: `1px solid ${C.soft}`,
        borderRadius: 14,
        padding: "14px 14px 12px",
        background: "rgba(6,17,28,.56)",
      }}
    >
      <figcaption style={{ marginBottom: 11, minWidth: 0 }}>
        <div style={{ color: C.text, font: `750 15px/1.35 ${C.sans}`, overflowWrap: "anywhere" }}>{title}</div>
        {subtitle ? (
          <div style={{ color: C.faint, font: `400 11.5px/1.45 ${C.sans}`, marginTop: 3, overflowWrap: "anywhere" }}>
            {subtitle}
          </div>
        ) : null}
      </figcaption>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${data.length}, minmax(34px, 1fr))`,
          alignItems: "end",
          gap: data.length > 10 ? 5 : 8,
          minHeight,
          padding: "20px 2px 0",
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {data.map((d, index) => {
          const height = Math.max(8, Math.round((Math.abs(d.value) / absMax) * (compact ? 92 : 118)));
          const positive = d.value >= 0;
          const barColor = mode === "signed" ? (positive ? C.coral : C.green) : color;
          return (
            <div
              key={`${title}-${d.label}-${index}`}
              title={`${d.label}: ${d.value > 0 && mode === "signed" ? "+" : ""}${d.value} ${unit}${d.note ? ` — ${d.note}` : ""}`}
              style={{
                minWidth: data.length > 10 ? 34 : 42,
                display: "grid",
                gridTemplateRows: "28px 1fr 24px",
                alignItems: "end",
                justifyItems: "center",
              }}
            >
              <span
                style={{
                  color: C.dim,
                  font: `650 ${data.length > 10 ? 9.5 : 10.5}px/1 ${C.mono}`,
                  whiteSpace: "nowrap",
                }}
              >
                {d.value > 0 && mode === "signed" ? "+" : ""}{d.value}
              </span>
              <div
                aria-hidden="true"
                style={{
                  width: "clamp(16px, 72%, 42px)",
                  height,
                  borderRadius: "8px 8px 2px 2px",
                  border: `1px solid ${barColor}`,
                  background: `linear-gradient(180deg, ${barColor}, ${barColor}22)`,
                  boxShadow: `0 0 18px ${barColor}20`,
                }}
              />
              <span
                style={{
                  color: C.text,
                  font: `750 ${data.length > 10 ? 10 : 11}px/1 ${C.mono}`,
                  whiteSpace: "nowrap",
                }}
              >
                {d.label}
              </span>
            </div>
          );
        })}
      </div>
      <div style={{ textAlign: "right", color: C.faint, font: `500 10px/1.2 ${C.sans}`, marginTop: 6 }}>{unit}</div>
    </figure>
  );
}

function FormulaCard({ title, formula, children, accent = C.gold }: { title: string; formula: React.ReactNode; children: React.ReactNode; accent?: string }) {
  return (
    <div
      style={{
        minWidth: 0,
        border: `1px solid ${accent}66`,
        borderRadius: 14,
        padding: "15px 16px",
        background: `${accent}0d`,
        overflow: "hidden",
      }}
    >
      <div style={{ color: accent, font: `800 12px/1.3 ${C.sans}`, letterSpacing: .45, textTransform: "uppercase" }}>{title}</div>
      <div
        style={{
          margin: "10px 0",
          color: C.text,
          font: `700 clamp(15px, 2.1vw, 20px)/1.45 ${C.mono}`,
          overflowX: "auto",
          overflowY: "hidden",
          whiteSpace: "nowrap",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {formula}
      </div>
      <div style={{ color: C.dim, font: `400 13px/1.62 ${C.sans}`, overflowWrap: "anywhere" }}>{children}</div>
    </div>
  );
}

function ReasoningSteps({ steps, accent = C.gold }: { steps: { title: string; body: string }[]; accent?: string }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 210px), 1fr))",
        gap: 10,
        margin: "12px 0 18px",
      }}
    >
      {steps.map((step, i) => (
        <div key={step.title} style={{ minWidth: 0, border: `1px solid ${C.soft}`, borderRadius: 12, padding: 13, background: "rgba(255,255,255,.018)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <span style={{ flex: "0 0 auto", width: 24, height: 24, borderRadius: 8, display: "grid", placeItems: "center", color: accent, border: `1px solid ${accent}77`, font: `800 11px ${C.mono}` }}>{i + 1}</span>
            <strong style={{ color: C.text, font: `750 13.5px/1.3 ${C.sans}`, overflowWrap: "anywhere" }}>{step.title}</strong>
          </div>
          <div style={{ color: C.dim, font: `400 12.5px/1.58 ${C.sans}`, overflowWrap: "anywhere" }}>{step.body}</div>
        </div>
      ))}
    </div>
  );
}

function CompactTable({ columns, rows, accent = C.green }: { columns: string[]; rows: React.ReactNode[][]; accent?: string }) {
  return (
    <div style={{ width: "100%", maxWidth: "100%", overflowX: "auto", WebkitOverflowScrolling: "touch", margin: "12px 0 18px" }}>
      <table style={{ width: "100%", minWidth: 640, borderCollapse: "collapse", fontFamily: C.sans, tableLayout: "fixed" }}>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column} style={{ padding: "9px 11px", textAlign: "left", color: accent, borderBottom: `2px solid ${accent}`, fontSize: 11, letterSpacing: .55, textTransform: "uppercase", whiteSpace: "normal", overflowWrap: "anywhere" }}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} style={{ background: ri % 2 ? "rgba(255,255,255,.018)" : "transparent" }}>
              {row.map((cell, ci) => (
                <td key={ci} style={{ padding: "9px 11px", color: ci === 0 ? C.text : C.dim, borderBottom: `1px solid ${C.soft}`, fontSize: 12.5, lineHeight: 1.45, verticalAlign: "top", whiteSpace: "normal", overflowWrap: "anywhere" }}>
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



export function V9TelluricScrewSVG() {
  const points = [
    { x: 400, y: 86, label: "H", dx: 16, dy: -12 },
    { x: 480, y: 118, label: "Li", dx: 16, dy: -8 },
    { x: 550, y: 170, label: "Be", dx: 16, dy: -6 },
    { x: 578, y: 232, label: "B", dx: 16, dy: -6 },
    { x: 546, y: 292, label: "C", dx: 16, dy: -6 },
    { x: 472, y: 334, label: "N", dx: 16, dy: -6 },
    { x: 382, y: 350, label: "O", dx: 16, dy: -8 },
    { x: 292, y: 328, label: "F", dx: 14, dy: -8 },
    { x: 224, y: 276, label: "Na", dx: 14, dy: -8 },
    { x: 210, y: 214, label: "Mg", dx: 14, dy: -8 },
    { x: 250, y: 154, label: "Al", dx: 14, dy: -8 },
    { x: 322, y: 112, label: "Si", dx: 14, dy: -8 },
  ] as const;
  return (
    <svg viewBox="0 0 800 500" role="img" aria-labelledby="screw-v9-title screw-v9-desc" data-visual-version="telluric-screw-v9" style={{ width: "100%", height: "auto", display: "block", overflow: "hidden", borderRadius: 18 }}>
      <title id="screw-v9-title">Chancourtois telluric screw</title>
      <desc id="screw-v9-desc">Elements placed by increasing atomic weight on a helix around a cylinder, showing recurrence of related elements along vertical directions.</desc>
      <defs>
        <linearGradient id="screw-v9-body" x1="0" x2="1"><stop offset="0" stopColor="#10263b"/><stop offset=".5" stopColor="#1b3a52"/><stop offset="1" stopColor="#10263b"/></linearGradient>
        <filter id="screw-v9-glow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <rect width="800" height="500" rx="24" fill={C.grid} stroke={C.border}/>
      <text x="400" y="36" textAnchor="middle" fill={C.text} fontFamily={C.serif} fontWeight="700" fontSize="24">Chancourtois’ telluric screw</text>
      <ellipse cx="400" cy="82" rx="212" ry="46" fill="#1b3a52" stroke={C.cyan} strokeWidth="1.6" opacity=".88"/>
      <rect x="188" y="82" width="424" height="278" rx="42" fill="url(#screw-v9-body)" stroke={C.border} strokeWidth="2"/>
      <ellipse cx="400" cy="360" rx="212" ry="46" fill={C.bg} stroke={C.cyan} strokeWidth="1.6"/>
      <line x1="400" x2="400" y1="88" y2="358" stroke={C.faint} strokeDasharray="8 10" opacity=".75"/>
      <path d="M400 86 C540 96 610 164 578 232 C546 300 472 346 382 350 C292 354 210 300 210 220 C210 142 292 94 400 86 C520 78 594 142 578 232 C560 328 472 382 382 376 C288 370 218 316 210 220" fill="none" stroke={C.gold} strokeWidth="7" strokeLinecap="round" filter="url(#screw-v9-glow)"/>
      {points.map((point) => (
        <g key={point.label}>
          <circle cx={point.x} cy={point.y} r="7" fill={C.cyan} stroke={C.bg} strokeWidth="2"/>
          <text x={point.x + point.dx} y={point.y + point.dy} fill={C.text} fontFamily={C.sans} fontSize="15" fontWeight="800">{point.label}</text>
        </g>
      ))}
      <rect x="76" y="415" width="648" height="54" rx="13" fill={C.surface} stroke={C.border}/>
      <text x="400" y="437" textAnchor="middle" fill={C.cyan} fontFamily={C.sans} fontSize="13" fontWeight="800">Increasing atomic weight follows the helix</text>
      <text x="400" y="457" textAnchor="middle" fill={C.dim} fontFamily={C.sans} fontSize="12">Elements recurring near one vertical line often show related chemistry.</text>
    </svg>
  );
}

export function V9AtomicVolumeSVG() {
  const data: ReadonlyArray<{
    e: string;
    m: number;
    v: number;
    peak?: boolean;
  }> = [
    { e: "K", m: 39.098, v: 45.36, peak: true }, { e: "Ca", m: 40.078, v: 26.02 },
    { e: "Sc", m: 44.956, v: 15.04 }, { e: "Ti", m: 47.867, v: 10.62 },
    { e: "V", m: 50.942, v: 8.49 }, { e: "Cr", m: 51.996, v: 7.27 },
    { e: "Mn", m: 54.938, v: 7.53 }, { e: "Fe", m: 55.845, v: 7.09 },
    { e: "Co", m: 58.933, v: 6.65 }, { e: "Ni", m: 58.693, v: 6.59 },
    { e: "Cu", m: 63.546, v: 7.09 }, { e: "Zn", m: 65.38, v: 9.17 },
    { e: "Ga", m: 69.723, v: 11.80 }, { e: "Ge", m: 72.63, v: 13.64 },
    { e: "As", m: 74.922, v: 13.08 }, { e: "Se", m: 78.971, v: 16.42 },
    { e: "Br", m: 79.904, v: 25.75 }, { e: "Rb", m: 85.468, v: 55.86, peak: true },
    { e: "Sr", m: 87.62, v: 33.19 },
  ];
  const w = 940, h = 530, left = 78, right = 34, top = 68, bottom = 122;
  const xMin = 38, xMax = 90, yMax = 60;
  const x = (m: number) => left + ((m - xMin) / (xMax - xMin)) * (w - left - right);
  const y = (v: number) => top + (1 - v / yMax) * (h - top - bottom);
  const period4 = data.slice(0, 17);
  const period5 = data.slice(17);
  const path = (points: readonly (typeof data)[number][]) => points.map((p, i) => `${i ? "L" : "M"} ${x(p.m).toFixed(1)} ${y(p.v).toFixed(1)}`).join(" ");
  const yTicks = [0,10,20,30,40,50,60];
  const xTicks = [40,50,60,70,80,90];
  const krX = x(83.798);
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      role="img"
      aria-labelledby="meyer-v9-title meyer-v9-desc"
      data-visual-version="atomic-volume-v9"
      style={{ width: "100%", height: "auto", display: "block", overflow: "hidden", borderRadius: 18 }}
    >
      <title id="meyer-v9-title">Quantitative atomic-volume curve from potassium to strontium</title>
      <desc id="meyer-v9-desc">Two separate condensed-phase curve segments show potassium and rubidium as local maxima. Krypton is omitted because it is gaseous at room temperature.</desc>
      <defs>
        <linearGradient id="meyer-v9-line" x1="0" x2="1"><stop offset="0" stopColor={C.gold}/><stop offset=".58" stopColor={C.cyan}/><stop offset="1" stopColor={C.green}/></linearGradient>
      </defs>
      <rect width={w} height={h} rx="24" fill={C.grid} stroke={C.border}/>
      <text x={left} y="32" fill={C.text} fontFamily={C.serif} fontSize="20" fontWeight="700">Atomic volume: one verified Meyer-curve segment</text>
      <text x={w-right} y="32" textAnchor="end" fill={C.faint} fontFamily={C.sans} fontSize="12">Vₘ=M/ρ · condensed-phase values</text>
      {yTicks.map(t => <g key={`yv9-${t}`}><line x1={left} x2={w-right} y1={y(t)} y2={y(t)} stroke={C.soft} strokeDasharray={t ? "4 8" : undefined}/><text x={left-13} y={y(t)+4} textAnchor="end" fill={C.faint} fontFamily={C.mono} fontSize="11">{t}</text></g>)}
      {xTicks.map(t => <g key={`xv9-${t}`}><line x1={x(t)} x2={x(t)} y1={top} y2={h-bottom} stroke={C.soft} opacity=".42"/><text x={x(t)} y={h-bottom+22} textAnchor="middle" fill={C.faint} fontFamily={C.mono} fontSize="11">{t}</text></g>)}
      <line x1={left} x2={left} y1={top} y2={h-bottom} stroke={C.dim}/><line x1={left} x2={w-right} y1={h-bottom} y2={h-bottom} stroke={C.dim}/>
      <path d={path(period4)} fill="none" stroke="url(#meyer-v9-line)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d={path(period5)} fill="none" stroke="url(#meyer-v9-line)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1={krX} x2={krX} y1={top+18} y2={h-bottom-8} stroke={C.coral} strokeDasharray="4 7" strokeWidth="1.6"/>
      <rect x={krX-72} y={h-bottom-54} width="144" height="36" rx="9" fill={C.bg} stroke={`${C.coral}99`}/>
      <text x={krX} y={h-bottom-39} textAnchor="middle" fill={C.coral} fontFamily={C.sans} fontSize="11" fontWeight="800">Kr: curve break</text>
      <text x={krX} y={h-bottom-25} textAnchor="middle" fill={C.dim} fontFamily={C.sans} fontSize="10">gas at 20 °C</text>
      {data.map((p,i) => <g key={`pt-v9-${p.e}`}><circle cx={x(p.m)} cy={y(p.v)} r={p.peak ? 7 : 4.5} fill={p.peak ? C.cyan : C.dim} stroke={C.bg} strokeWidth="2"/>{p.peak ? <circle cx={x(p.m)} cy={y(p.v)} r="12" fill="none" stroke={C.cyan} strokeWidth="1.5" opacity=".75"/> : null}<text x={x(p.m)} y={h-bottom+42+(i%2)*16} textAnchor="middle" fill={p.peak ? C.cyan : C.dim} fontFamily={C.mono} fontSize={p.peak?"12":"10"} fontWeight={p.peak?"800":"600"} transform={`rotate(-48 ${x(p.m)} ${h-bottom+42+(i%2)*16})`}>{p.e}</text></g>)}
      <g><line x1={x(data[0].m)+8} y1={y(data[0].v)+8} x2={x(data[0].m)+54} y2={y(data[0].v)+36} stroke={C.cyan}/><text x={x(data[0].m)+58} y={y(data[0].v)+41} fill={C.cyan} fontFamily={C.sans} fontSize="12" fontWeight="800">K: 45.4 cm³ mol⁻¹</text></g>
      <g><line x1={x(data[17].m)-8} y1={y(data[17].v)+8} x2={x(data[17].m)-54} y2={y(data[17].v)+36} stroke={C.cyan}/><text x={x(data[17].m)-58} y={y(data[17].v)+41} textAnchor="end" fill={C.cyan} fontFamily={C.sans} fontSize="12" fontWeight="800">Rb: 55.9 cm³ mol⁻¹</text></g>
      <text x={(left+w-right)/2} y={h-22} textAnchor="middle" fill={C.dim} fontFamily={C.sans} fontSize="14" fontWeight="700">relative atomic mass, M / g mol⁻¹</text>
      <text x="22" y={(top+h-bottom)/2} textAnchor="middle" fill={C.dim} fontFamily={C.sans} fontSize="14" fontWeight="700" transform={`rotate(-90 22 ${(top+h-bottom)/2})`}>atomic volume, Vₘ / cm³ mol⁻¹</text>
    </svg>
  );
}

export function V9TrendCompassSVG() {
  return (
    <svg viewBox="0 0 780 390" role="img" aria-labelledby="trend-v9-title trend-v9-desc" data-visual-version="trend-compass-v9" style={{ width: "100%", height: "auto", display: "block", overflow: "hidden", borderRadius: 18 }}>
      <title id="trend-v9-title">Direction of major periodic trends</title>
      <desc id="trend-v9-desc">Atomic size and metallic character increase down and to the left. Ionisation enthalpy, electronegativity and nonmetallic character increase up and to the right.</desc>
      <defs><marker id="trend-v9-gold" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10Z" fill={C.gold}/></marker><marker id="trend-v9-cyan" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10Z" fill={C.cyan}/></marker></defs>
      <rect width="780" height="390" rx="24" fill={C.grid} stroke={C.border}/>
      <text x="390" y="38" textAnchor="middle" fill={C.text} fontFamily={C.serif} fontWeight="700" fontSize="24">Direction of major periodic trends</text>
      <rect x="188" y="76" width="420" height="238" rx="18" fill={C.surface} stroke={C.border}/>
      {[0,1,2,3,4].map(i => <line key={`tv-${i}`} x1={220+i*88} x2={220+i*88} y1="104" y2="286" stroke={C.soft}/>)}
      {[0,1,2,3].map(i => <line key={`th-${i}`} x1="220" x2="576" y1={112+i*54} y2={112+i*54} stroke={C.soft}/>)}
      <path d="M244 264 C330 225 430 166 556 102" fill="none" stroke={C.gold} strokeWidth="7" markerEnd="url(#trend-v9-gold)"/>
      <path d="M550 118 C453 171 350 226 236 278" fill="none" stroke={C.cyan} strokeWidth="7" markerEnd="url(#trend-v9-cyan)"/>
      <g><rect x="438" y="70" width="254" height="56" rx="12" fill={C.bg} stroke={`${C.gold}99`}/><text x="454" y="92" fill={C.gold} fontFamily={C.sans} fontWeight="800" fontSize="12">UP + RIGHT</text><text x="454" y="111" fill={C.dim} fontFamily={C.sans} fontSize="11">IE, EN, non-metallic character ↑</text></g>
      <g><rect x="84" y="266" width="270" height="56" rx="12" fill={C.bg} stroke={`${C.cyan}99`}/><text x="100" y="288" fill={C.cyan} fontFamily={C.sans} fontWeight="800" fontSize="12">DOWN + LEFT</text><text x="100" y="307" fill={C.dim} fontFamily={C.sans} fontSize="11">atomic size, metallic character ↑</text></g>
      <g><circle cx="102" cy="142" r="48" fill={C.surface} stroke={C.cyan}/><text x="102" y="136" textAnchor="middle" fill={C.cyan} fontFamily={C.mono} fontWeight="800" fontSize="14">DOWN</text><text x="102" y="157" textAnchor="middle" fill={C.dim} fontFamily={C.sans} fontSize="10">new shell dominates</text></g>
      <g><circle cx="682" cy="246" r="48" fill={C.surface} stroke={C.gold}/><text x="682" y="240" textAnchor="middle" fill={C.gold} fontFamily={C.mono} fontWeight="800" fontSize="14">ACROSS</text><text x="682" y="261" textAnchor="middle" fill={C.dim} fontFamily={C.sans} fontSize="10">Zeff dominates</text></g>
      <text x="390" y="360" textAnchor="middle" fill={C.faint} fontFamily={C.sans} fontSize="12">Local electronic-configuration special cases can interrupt these broad directions.</text>
    </svg>
  );
}

const period2Radius: Datum[] = [
  { label: "Li", value: 152 }, { label: "Be", value: 111 }, { label: "B", value: 88 },
  { label: "C", value: 77 }, { label: "N", value: 74 }, { label: "O", value: 66 }, { label: "F", value: 64 },
];
const period3Radius: Datum[] = [
  { label: "Na", value: 186 }, { label: "Mg", value: 160 }, { label: "Al", value: 143 },
  { label: "Si", value: 117 }, { label: "P", value: 110 }, { label: "S", value: 104 }, { label: "Cl", value: 99 },
];
const group1Radius: Datum[] = [
  { label: "Li", value: 152 }, { label: "Na", value: 186 }, { label: "K", value: 231 }, { label: "Rb", value: 244 }, { label: "Cs", value: 262 },
];
const group17Radius: Datum[] = [
  { label: "F", value: 64 }, { label: "Cl", value: 99 }, { label: "Br", value: 114 }, { label: "I", value: 133 }, { label: "At", value: 140 },
];
const radius3d: Datum[] = [
  { label: "Sc", value: 164 }, { label: "Ti", value: 147 }, { label: "V", value: 134 }, { label: "Cr", value: 129 }, { label: "Mn", value: 137 },
  { label: "Fe", value: 126 }, { label: "Co", value: 125 }, { label: "Ni", value: 125 }, { label: "Cu", value: 128 }, { label: "Zn", value: 137 },
];
const radius4d: Datum[] = [
  { label: "Y", value: 182 }, { label: "Zr", value: 160 }, { label: "Nb", value: 147 }, { label: "Mo", value: 140 }, { label: "Tc", value: 135 },
  { label: "Ru", value: 134 }, { label: "Rh", value: 134 }, { label: "Pd", value: 137 }, { label: "Ag", value: 144 }, { label: "Cd", value: 152 },
];
const radius5d: Datum[] = [
  { label: "La", value: 188 }, { label: "Hf", value: 159 }, { label: "Ta", value: 147 }, { label: "W", value: 141 }, { label: "Re", value: 137 },
  { label: "Os", value: 135 }, { label: "Ir", value: 136 }, { label: "Pt", value: 139 }, { label: "Au", value: 144 }, { label: "Hg", value: 155 },
];
const ln3Radius: Datum[] = [
  { label: "La", value: 106 }, { label: "Ce", value: 103 }, { label: "Pr", value: 101 }, { label: "Nd", value: 99 }, { label: "Pm", value: 98 },
  { label: "Sm", value: 96 }, { label: "Eu", value: 95 }, { label: "Gd", value: 94 }, { label: "Tb", value: 92 }, { label: "Dy", value: 91 },
  { label: "Ho", value: 89 }, { label: "Er", value: 88 }, { label: "Tm", value: 87 }, { label: "Yb", value: 86 },
];

export function V9RadiusSourcePanel() {
  return (
    <Panel accent={C.blue}>
      <Title kicker="Readable data atlas" accent={C.blue}>Atomic radius: period, family and block-wise bars</Title>
      <Lead>
        These bars keep each comparison inside one radius convention. Values are rounded reference values in picometres; atomic, covalent, metallic, van der Waals and ionic radii must never be mixed in one ranking without an explicit label.
      </Lead>
      <ChartGrid>
        <MetricBars title="Period 2" subtitle="Reference atomic/covalent-size sequence" data={period2Radius} unit="pm" color={C.blue} />
        <MetricBars title="Period 3" subtitle="Reference atomic/covalent-size sequence" data={period3Radius} unit="pm" color={C.cyan} />
        <MetricBars title="Group 1" subtitle="Size increases down the family" data={group1Radius} unit="pm" color={C.gold} />
        <MetricBars title="Group 17" subtitle="Size increases down the family" data={group17Radius} unit="pm" color={C.coral} />
      </ChartGrid>

      <h3 style={{ color: C.text, font: `700 20px/1.3 ${C.serif}`, margin: "22px 0 8px" }}>d- and f-block, separated period-wise</h3>
      <Lead>
        Across a transition series the fall is steep at first, then becomes shallow because added d electrons partly screen the increasing nuclear charge. The near equality of corresponding 4d and 5d radii is a direct consequence of lanthanide contraction.
      </Lead>
      <ChartGrid>
        <MetricBars title="3d metallic radii" data={radius3d} unit="pm" color={C.blue} compact />
        <MetricBars title="4d metallic radii" data={radius4d} unit="pm" color={C.green} compact />
        <MetricBars title="5d metallic radii" data={radius5d} unit="pm" color={C.violet} compact />
        <MetricBars title="Ln³⁺ ionic radii" subtitle="Steady lanthanide contraction" data={ln3Radius} unit="pm" color={C.gold} compact />
      </ChartGrid>
    </Panel>
  );
}

const iePeriod2: Datum[] = [
  { label: "Li", value: 520 }, { label: "Be", value: 899 }, { label: "B", value: 801 }, { label: "C", value: 1086 },
  { label: "N", value: 1402 }, { label: "O", value: 1314 }, { label: "F", value: 1681 }, { label: "Ne", value: 2080 },
];
const ieGroup1: Datum[] = [
  { label: "Li", value: 520 }, { label: "Na", value: 496 }, { label: "K", value: 419 }, { label: "Rb", value: 403 }, { label: "Cs", value: 376 },
];
const ieGroup2: Datum[] = [
  { label: "Be", value: 900 }, { label: "Mg", value: 738 }, { label: "Ca", value: 590 }, { label: "Sr", value: 550 }, { label: "Ba", value: 503 },
];
const ieG13: Datum[] = [
  { label: "B", value: 801 }, { label: "Al", value: 578 }, { label: "Ga", value: 579 }, { label: "In", value: 558 }, { label: "Tl", value: 589 },
];
const ieG14: Datum[] = [
  { label: "C", value: 1086 }, { label: "Si", value: 787 }, { label: "Ge", value: 762 }, { label: "Sn", value: 709 }, { label: "Pb", value: 716 },
];
const ieG15: Datum[] = [
  { label: "N", value: 1402 }, { label: "P", value: 1012 }, { label: "As", value: 947 }, { label: "Sb", value: 834 }, { label: "Bi", value: 703 },
];
const ieG16: Datum[] = [
  { label: "O", value: 1314 }, { label: "S", value: 1000 }, { label: "Se", value: 941 }, { label: "Te", value: 869 }, { label: "Po", value: 812 },
];
const ieG17: Datum[] = [
  { label: "F", value: 1681 }, { label: "Cl", value: 1251 }, { label: "Br", value: 1140 }, { label: "I", value: 1008 },
];
const ieG18: Datum[] = [
  { label: "He", value: 2372 }, { label: "Ne", value: 2081 }, { label: "Ar", value: 1521 }, { label: "Kr", value: 1351 }, { label: "Xe", value: 1170 },
];
const ie3d: Datum[] = [
  { label: "Sc", value: 631 }, { label: "Ti", value: 658 }, { label: "V", value: 651 }, { label: "Cr", value: 653 }, { label: "Mn", value: 717 },
  { label: "Fe", value: 763 }, { label: "Co", value: 760 }, { label: "Ni", value: 737 }, { label: "Cu", value: 746 }, { label: "Zn", value: 906 },
];
const ie4d: Datum[] = [
  { label: "Y", value: 600 }, { label: "Zr", value: 640 }, { label: "Nb", value: 652 }, { label: "Mo", value: 684 }, { label: "Tc", value: 702 },
  { label: "Ru", value: 710 }, { label: "Rh", value: 720 }, { label: "Pd", value: 804 }, { label: "Ag", value: 731 }, { label: "Cd", value: 868 },
];
const ie5d: Datum[] = [
  { label: "Hf", value: 659 }, { label: "Ta", value: 761 }, { label: "W", value: 770 }, { label: "Re", value: 760 }, { label: "Os", value: 840 },
  { label: "Ir", value: 880 }, { label: "Pt", value: 870 }, { label: "Au", value: 890 }, { label: "Hg", value: 1007 },
];
const ieLn: Datum[] = [
  { label: "La", value: 538 }, { label: "Ce", value: 534 }, { label: "Pr", value: 527 }, { label: "Nd", value: 533 }, { label: "Pm", value: 540 },
  { label: "Sm", value: 545 }, { label: "Eu", value: 547 }, { label: "Gd", value: 593 }, { label: "Tb", value: 566 }, { label: "Dy", value: 574 },
  { label: "Ho", value: 581 }, { label: "Er", value: 589 }, { label: "Tm", value: 597 }, { label: "Yb", value: 603 }, { label: "Lu", value: 524 },
];
const ieAn: Datum[] = [
  { label: "Ac", value: 499 }, { label: "Th", value: 587 }, { label: "Pa", value: 568 }, { label: "U", value: 598 },
  { label: "Np", value: 605 }, { label: "Pu", value: 585 }, { label: "Am", value: 578 }, { label: "Cm", value: 581 },
];

export function V9IonizationSourcePanel() {
  return (
    <Panel accent={C.gold}>
      <Title kicker="Derivation + bars" accent={C.gold}>Ionisation enthalpy: why the trend appears</Title>
      <ReasoningSteps
        accent={C.gold}
        steps={[
          { title: "Define one isolated step", body: "X(g) → X⁺(g) + e⁻. Electron removal is endothermic, so every ionisation enthalpy is positive." },
          { title: "Start from attraction", body: "A useful qualitative model is IE ∝ Z_eff/r: stronger effective nuclear charge and smaller electron–nucleus distance raise IE." },
          { title: "Correct the simple model", body: "Shielding, penetration, subshell energy, pairing and exchange stability explain local dips such as Be>B and N>O." },
          { title: "Follow successive removal", body: "IE₁<IE₂<IE₃… because the residual ion is increasingly positive. A giant jump marks entry into an inner closed shell." },
        ]}
      />
      <FormulaCard title="Working relation — not an exact hydrogen-like equation" formula={<>IE ↑ when Z<sub>eff</sub> ↑, radius ↓, shielding ↓ and penetration ↑</>}>
        Across a period, increasing effective nuclear charge usually dominates. Down a group, a new shell and greater shielding usually dominate. Configuration effects create the scientifically important special cases.
      </FormulaCard>

      <ChartGrid>
        <MetricBars title="Period 2 IE₁" subtitle="Be>B and N>O are visible local special cases" data={iePeriod2} unit="kJ mol⁻¹" color={C.gold} />
        <MetricBars title="Group 1 IE₁" subtitle="The valence ns¹ electron is progressively farther from the nucleus" data={ieGroup1} unit="kJ mol⁻¹" color={C.cyan} />
      </ChartGrid>

      <h3 style={{ color: C.text, font: `700 20px/1.3 ${C.serif}`, margin: "22px 0 8px" }}>Groups 1–2 and 13–18</h3>
      <Lead>Rounded first-ionisation values make irregular heavy-member behaviour visible instead of forcing a false smooth arrow.</Lead>
      <ChartGrid>
        <MetricBars title="Group 1" data={ieGroup1} unit="kJ mol⁻¹" color={C.blue} compact />
        <MetricBars title="Group 2" data={ieGroup2} unit="kJ mol⁻¹" color={C.cyan} compact />
        <MetricBars title="Group 13" data={ieG13} unit="kJ mol⁻¹" color={C.coral} compact />
        <MetricBars title="Group 14" data={ieG14} unit="kJ mol⁻¹" color={C.gold} compact />
        <MetricBars title="Group 15" data={ieG15} unit="kJ mol⁻¹" color={C.green} compact />
        <MetricBars title="Group 16" data={ieG16} unit="kJ mol⁻¹" color={C.violet} compact />
        <MetricBars title="Group 17" data={ieG17} unit="kJ mol⁻¹" color={C.coral} compact />
        <MetricBars title="Group 18" data={ieG18} unit="kJ mol⁻¹" color={C.violet} compact />
      </ChartGrid>

      <h3 style={{ color: C.text, font: `700 20px/1.3 ${C.serif}`, margin: "22px 0 8px" }}>d- and f-block, period-wise</h3>
      <Lead>Transition and inner-transition values are irregular because ns, (n−1)d and (n−2)f levels are close in energy; the bars show the data rather than inventing a monotonic rule.</Lead>
      <ChartGrid>
        <MetricBars title="3d series IE₁" data={ie3d} unit="kJ mol⁻¹" color={C.blue} compact />
        <MetricBars title="4d series IE₁" data={ie4d} unit="kJ mol⁻¹" color={C.green} compact />
        <MetricBars title="5d series IE₁" data={ie5d} unit="kJ mol⁻¹" color={C.violet} compact />
        <MetricBars title="Lanthanoids IE₁" data={ieLn} unit="kJ mol⁻¹" color={C.gold} compact />
        <MetricBars title="Early actinoids IE₁" subtitle="Representative rounded values; heavy-member values are less certain" data={ieAn} unit="kJ mol⁻¹" color={C.coral} compact />
      </ChartGrid>

      <h3 style={{ color: C.text, font: `700 20px/1.3 ${C.serif}`, margin: "22px 0 8px" }}>Molecular first-ionisation examples</h3>
      <CompactTable
        columns={["Molecule", "Gas-phase process", "IE / kJ mol⁻¹", "Why it is useful"]}
        rows={[
          ["CO", "CO(g) → CO⁺(g)+e⁻", "1352", "Shows that molecular orbital energies, not atomic IE alone, control molecular ionisation."],
          ["NO", "NO(g) → NO⁺(g)+e⁻", "894", "Removing the antibonding electron is comparatively easier."],
          ["O₂", "O₂(g) → O₂⁺(g)+e⁻", "1164", "Electron is removed from an antibonding π* orbital."],
          ["N₂", "N₂(g) → N₂⁺(g)+e⁻", "1502", "Strong bonding and low-lying occupied orbitals raise the value."],
        ]}
        accent={C.gold}
      />
    </Panel>
  );
}

const egeG1: Datum[] = [
  { label: "Li", value: -60 }, { label: "Na", value: -53 }, { label: "K", value: -48 }, { label: "Rb", value: -47 }, { label: "Cs", value: -46 },
];
const egeG13: Datum[] = [
  { label: "B", value: -27 }, { label: "Al", value: -43 }, { label: "Ga", value: -29 }, { label: "In", value: -29 }, { label: "Tl", value: -19 },
];
const egeG14: Datum[] = [
  { label: "C", value: -122 }, { label: "Si", value: -134 }, { label: "Ge", value: -119 }, { label: "Sn", value: -107 }, { label: "Pb", value: -35 },
];
const egeG15: Datum[] = [
  { label: "N", value: 7, note: "endothermic" }, { label: "P", value: -72 }, { label: "As", value: -78 }, { label: "Sb", value: -103 }, { label: "Bi", value: -91 },
];
const egeG16: Datum[] = [
  { label: "O", value: -141 }, { label: "S", value: -200 }, { label: "Se", value: -195 }, { label: "Te", value: -190 }, { label: "Po", value: -174 },
];
const egeG17: Datum[] = [
  { label: "F", value: -328 }, { label: "Cl", value: -349 }, { label: "Br", value: -325 }, { label: "I", value: -295 }, { label: "At", value: -270 },
];
const pairMagnitude: Datum[] = [
  { label: "B", value: 27 }, { label: "Al", value: 43 }, { label: "C", value: 122 }, { label: "Si", value: 134 },
  { label: "N", value: 7 }, { label: "P", value: 72 }, { label: "O", value: 141 }, { label: "S", value: 200 },
  { label: "F", value: 328 }, { label: "Cl", value: 349 },
];

export function V9ElectronGainSourcePanel() {
  return (
    <Panel accent={C.green}>
      <Title kicker="Sign convention + derivation" accent={C.green}>Electron gain enthalpy and electron affinity</Title>
      <ChartGrid>
        <FormulaCard
          title="Thermodynamic relation"
          accent={C.green}
          formula={<>Δ<sub>eg</sub>H(T) ≈ −EA(0 K) − (5/2)RT</>}
        >
          This form applies when electron affinity EA is quoted as a positive 0 K energy release for X(g)+e⁻→X⁻(g), and the gaseous species are treated as ideal monatomic particles. At 298 K, (5/2)RT≈6.2 kJ mol⁻¹. Some tables define EA directly as −Δ<sub>eg</sub>H at the same temperature; in that convention, do not subtract the correction again.
        </FormulaCard>
        <FormulaCard title="Why the 5RT/2 correction appears" accent={C.cyan} formula={<>ΔH<sub>thermal</sub> = H(X⁻) − H(X) − H(e⁻) = −(5/2)RT</>}>
          A monatomic ideal-gas particle carries translational enthalpy 5RT/2. The reactant side contains two gaseous particles, X and e⁻, while the product side contains one, X⁻.
        </FormulaCard>
      </ChartGrid>

      <ReasoningSteps
        accent={C.green}
        steps={[
          { title: "Attraction favours gain", body: "Larger Z_eff and a suitable valence orbital stabilise the incoming electron, making ΔegH more negative." },
          { title: "Crowding opposes gain", body: "A very compact 2p shell can produce strong electron–electron repulsion; this is why Cl is more exothermic than F and S more exothermic than O." },
          { title: "Configuration matters", body: "Filled ns², half-filled np³ and closed-shell noble-gas configurations resist electron addition." },
          { title: "Successive gain changes sign", body: "Adding an electron to an anion is strongly endothermic because the incoming electron is repelled by a negatively charged species." },
        ]}
      />

      <h3 style={{ color: C.text, font: `700 20px/1.3 ${C.serif}`, margin: "22px 0 8px" }}>Group-wise bars</h3>
      <Lead>Negative bars represent exothermic electron gain; coral bars represent endothermic gain. Group 2 and group 18 are best treated qualitatively because electron attachment begins a higher-energy subshell or new shell and tabulations are convention-sensitive.</Lead>
      <ChartGrid>
        <MetricBars title="Group 1 ΔegH₁" data={egeG1} unit="kJ mol⁻¹" mode="signed" compact />
        <MetricBars title="Group 13 ΔegH₁" data={egeG13} unit="kJ mol⁻¹" mode="signed" compact />
        <MetricBars title="Group 14 ΔegH₁" data={egeG14} unit="kJ mol⁻¹" mode="signed" compact />
        <MetricBars title="Group 15 ΔegH₁" data={egeG15} unit="kJ mol⁻¹" mode="signed" compact />
        <MetricBars title="Group 16 ΔegH₁" data={egeG16} unit="kJ mol⁻¹" mode="signed" compact />
        <MetricBars title="Group 17 ΔegH₁" data={egeG17} unit="kJ mol⁻¹" mode="signed" compact />
      </ChartGrid>

      <h3 style={{ color: C.text, font: `700 20px/1.3 ${C.serif}`, margin: "22px 0 8px" }}>Second-period versus third-period congeners</h3>
      <Lead>The third-period member is often more exothermic than the second-period member because its larger 3p orbital reduces interelectronic crowding.</Lead>
      <MetricBars title="Magnitude |ΔegH₁|" subtitle="Compare each adjacent pair: B/Al, C/Si, N/P, O/S, F/Cl" data={pairMagnitude} unit="kJ mol⁻¹" color={C.green} compact />
      <CompactTable
        columns={["Pair", "Observed order", "Reason"]}
        rows={[
          ["Al / B", "Al more exothermic than B", "The larger 3p region reduces crowding relative to compact 2p."],
          ["Si / C", "Si slightly more exothermic than C", "Attraction remains effective while 3p pairing repulsion is lower."],
          ["P / N", "P more exothermic than N", "N has a compact, especially stable half-filled 2p³ arrangement."],
          ["S / O", "S more exothermic than O", "The incoming electron experiences less repulsion in the larger 3p shell."],
          ["Cl / F", "Cl more exothermic than F", "Cl gives the best balance of strong attraction and manageable crowding."],
        ]}
        accent={C.green}
      />

      <div style={{ border: `1px solid ${C.coral}66`, borderRadius: 13, padding: 14, background: `${C.coral}0d`, color: C.dim, font: `400 13px/1.62 ${C.sans}` }}>
        <strong style={{ color: C.coral }}>d/f-block caution:</strong> electron-gain values are small, irregular and often uncertain for heavy or radioactive elements because d, f and s levels are close in energy. The existing period-wise tables are retained, but no artificial smooth d/f EGE curve is drawn.
      </div>
    </Panel>
  );
}

function V10WaterDipoleSVG() {
  const w = 760;
  const h = 390;
  const ox = 380;
  const oy = 118;
  const leftH = { x: 212, y: 286 };
  const rightH = { x: 548, y: 286 };
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      role="img"
      aria-labelledby="water-dipole-v10-title water-dipole-v10-desc"
      data-visual-version="water-dipole-v10"
      style={{ width: "100%", height: "auto", display: "block", overflow: "hidden", borderRadius: 16 }}
    >
      <title id="water-dipole-v10-title">Vector addition of the two oxygen-hydrogen bond moments in water</title>
      <desc id="water-dipole-v10-desc">Two equal oxygen-hydrogen bond dipoles point toward oxygen. Their horizontal components cancel and their vertical components add to give the molecular dipole moment.</desc>
      <defs>
        <marker id="water-arrow-v10" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto">
          <path d="M0 0 L9 4.5 L0 9 Z" fill={C.cyan} />
        </marker>
        <marker id="water-result-v10" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto">
          <path d="M0 0 L9 4.5 L0 9 Z" fill={C.gold} />
        </marker>
      </defs>
      <rect width={w} height={h} rx="22" fill={C.grid} stroke={C.border} />
      <text x="28" y="34" fill={C.text} fontFamily={C.serif} fontSize="20" fontWeight="700">Water: bond moments add as vectors</text>
      <text x="28" y="56" fill={C.faint} fontFamily={C.sans} fontSize="12">H–O–H angle ≈ 104.5° · symmetry cancels the sideways components</text>

      <line x1={ox} y1={oy} x2={leftH.x} y2={leftH.y} stroke={C.dim} strokeWidth="4" strokeLinecap="round" />
      <line x1={ox} y1={oy} x2={rightH.x} y2={rightH.y} stroke={C.dim} strokeWidth="4" strokeLinecap="round" />
      <circle cx={ox} cy={oy} r="24" fill={C.coral} stroke={C.bg} strokeWidth="3" />
      <circle cx={leftH.x} cy={leftH.y} r="17" fill={C.blue} stroke={C.bg} strokeWidth="3" />
      <circle cx={rightH.x} cy={rightH.y} r="17" fill={C.blue} stroke={C.bg} strokeWidth="3" />
      <text x={ox} y={oy + 6} textAnchor="middle" fill={C.bg} fontFamily={C.sans} fontSize="18" fontWeight="900">O</text>
      <text x={leftH.x} y={leftH.y + 5} textAnchor="middle" fill={C.bg} fontFamily={C.sans} fontSize="15" fontWeight="900">H</text>
      <text x={rightH.x} y={rightH.y + 5} textAnchor="middle" fill={C.bg} fontFamily={C.sans} fontSize="15" fontWeight="900">H</text>

      <line x1={leftH.x + 30} y1={leftH.y - 30} x2={ox - 24} y2={oy + 24} stroke={C.cyan} strokeWidth="3" markerEnd="url(#water-arrow-v10)" />
      <line x1={rightH.x - 30} y1={rightH.y - 30} x2={ox + 24} y2={oy + 24} stroke={C.cyan} strokeWidth="3" markerEnd="url(#water-arrow-v10)" />
      <text x="246" y="220" fill={C.cyan} fontFamily={C.mono} fontSize="13">μOH</text>
      <text x="488" y="220" fill={C.cyan} fontFamily={C.mono} fontSize="13">μOH</text>

      <line x1={ox} y1={oy - 8} x2={ox} y2="76" stroke={C.gold} strokeWidth="4" markerEnd="url(#water-result-v10)" />
      <line x1={ox} y1={oy + 2} x2={ox} y2="286" stroke={C.gold} strokeDasharray="6 7" opacity=".48" />
      <text x={ox + 18} y="80" fill={C.gold} fontFamily={C.mono} fontSize="13" fontWeight="800">molecular μ</text>

      <path d="M 329 170 A 72 72 0 0 1 431 170" fill="none" stroke={C.violet} strokeWidth="2" />
      <text x={ox} y="188" textAnchor="middle" fill={C.violet} fontFamily={C.mono} fontSize="13">104.5°</text>

      <rect x="76" y="320" width="608" height="46" rx="12" fill={C.surface} stroke={C.border} />
      <text x={w / 2} y="340" textAnchor="middle" fill={C.text} fontFamily={C.mono} fontSize="13" fontWeight="800">μ(H₂O) = 2 μOH cos(104.5°/2)</text>
      <text x={w / 2} y="358" textAnchor="middle" fill={C.dim} fontFamily={C.sans} fontSize="11.5">Using μ(H₂O)≈1.85 D gives μOH≈1.51 D in this simple vector model.</text>
    </svg>
  );
}

export function V9ElectronegativitySourcePanel() {
  const paulingRows: React.ReactNode[][] = [
    ["Hydrogen", "H 2.2"],
    ["Period 2", "Li 1.0 · Be 1.6 · B 2.0 · C 2.5 · N 3.0 · O 3.4 · F 4.0"],
    ["Period 3", "Na 0.9 · Mg 1.3 · Al 1.6 · Si 1.9 · P 2.2 · S 2.6 · Cl 3.2"],
    ["Period 4 selected", "K 0.8 · Ca 1.0 · Ga 1.8 · Ge 2.0 · As 2.2 · Se 2.6 · Br 3.0"],
    ["Period 5 selected", "Rb 0.8 · Sr 0.9 · In 1.8 · Sn 2.0 · Sb 2.1 · Te 2.1 · I 2.7"],
  ];

  return (
    <Panel accent={C.violet}>
      <Title kicker="Quantitative electronegativity scales" accent={C.violet}>Electronegativity: bond attraction, bond polarity and four useful scales</Title>
      <Lead>
        Electronegativity is the relative ability of an atom in a bonded environment to attract shared electron density. It is not the same as electron gain enthalpy of an isolated gaseous atom, and it is not measured as a unique property of a free atom. Different scales use different physical inputs but broadly agree on periodic trends.
      </Lead>

      <ChartGrid>
        <FormulaCard title="Bond polarity" accent={C.cyan} formula={<>A<sup>δ+</sup>—B<sup>δ−</sup> when χ<sub>B</sub> &gt; χ<sub>A</sub></>}>
          The larger the electronegativity difference, the larger the expected bond polarity. The relation is continuous; no single Δχ value gives an absolute universal ionic–covalent boundary.
        </FormulaCard>
        <FormulaCard title="Pauling excess bond energy" accent={C.gold} formula={<>Δ<sub>AB</sub> = E(A—B) − ½[E(A—A)+E(B—B)]</>}>
          A heteronuclear bond is often stronger than the arithmetic mean of the two homonuclear bond energies. Pauling associated this extra stabilisation with bond polarity.
        </FormulaCard>
      </ChartGrid>

      <ChartGrid>
        <FormulaCard title="Pauling difference equation" accent={C.gold} formula={<>|χ<sub>A</sub>−χ<sub>B</sub>| = 0.102[Δ<sub>AB</sub>/(kJ mol⁻¹)]<sup>1/2</sup></>}>
          Use average single-bond energies in the same units. Hydrogen is assigned χ=2.20 to set the scale. The equation gives an electronegativity difference; one reference value is needed to obtain individual values.
        </FormulaCard>
        <FormulaCard title="Worked relation" accent={C.cyan} formula={<>Δ<sub>AB</sub> = 96 kJ mol⁻¹ ⇒ |Δχ| ≈ 0.102√96 ≈ 1.00</>}>
          This does not by itself identify which atom is more electronegative; chemical direction, known reference values or the bond dipole supplies that information.
        </FormulaCard>
      </ChartGrid>

      <div style={{ margin: "14px 0 18px", minWidth: 0 }}>
        <V10WaterDipoleSVG />
      </div>

      <h3 style={{ color: C.text, font: `700 20px/1.3 ${C.serif}`, margin: "22px 0 8px" }}>Selected Pauling electronegativities</h3>
      <Lead>
        Values below follow a commonly used modern tabulation. School tables sometimes round O to 3.5 and Cl to 3.0; use one internally consistent table for numerical work.
      </Lead>
      <CompactTable columns={["Set", "Values"]} rows={paulingRows} accent={C.violet} />

      <h3 style={{ color: C.text, font: `700 20px/1.3 ${C.serif}`, margin: "24px 0 8px" }}>How the major scales are constructed</h3>
      <ChartGrid>
        <FormulaCard title="Allred–Rochow" accent={C.violet} formula={<>χ<sub>AR</sub> = 0.359(Z<sub>eff</sub>/r<sub>cov</sub>²) + 0.744</>}>
          Use r<sub>cov</sub> in ångström. The scale is based on the electrostatic attraction exerted by effective nuclear charge on bonding electron density near the covalent radius. A plot against Z<sub>eff</sub>/r<sub>cov</sub>² is linear with slope 0.359 and intercept 0.744.
        </FormulaCard>
        <FormulaCard title="Allen" accent={C.cyan} formula={<>χ<sub>Allen</sub> = 0.169⟨E<sub>i,val</sub>⟩/eV</>}>
          The scale uses the average ionisation energy of the valence-shell electrons of the ground-state free atom. It connects electronegativity directly to valence-electron binding energies.
        </FormulaCard>
        <FormulaCard title="Nagle" accent={C.green} formula={<>χ<sub>N</sub> = 1.66[n(4πɛ₀ Å³/α)]<sup>1/3</sup> + 0.37</>}>
          Here α is atomic polarisability and n is the number of valence electrons used by the model. Larger polarisability lowers the predicted electronegativity; the scale links electron-cloud deformability with electron attraction.
        </FormulaCard>
      </ChartGrid>

      <ReasoningSteps
        accent={C.violet}
        steps={[
          { title: "Across a period", body: "Z_eff rises while covalent radius generally falls, so electronegativity increases toward the halogens." },
          { title: "Down a group", body: "Bonding electrons are farther from the nucleus and more shielded, so electronegativity usually decreases." },
          { title: "Charge and hybridisation", body: "Positive oxidation state and greater s character usually increase the attraction for shared electrons: C(sp) > C(sp²) > C(sp³)." },
          { title: "Scale and environment", body: "Values are model-dependent and can vary with oxidation state, coordination, hybridisation and the chosen scale; compare like with like." },
        ]}
      />

      <ChartGrid>
        <FormulaCard title="Why combustion products are strongly stabilised" accent={C.coral} formula={<>C—H / C—C + O=O → C=O and O—H bonds</>}>
          Large electronegativity differences in C—O and O—H bonds contribute to strong polar bonding in CO₂ and H₂O. This helps rationalise the large exothermicity of hydrocarbon combustion, although the full enthalpy change depends on all bonds broken and formed, molecular structure and physical states.
        </FormulaCard>
        <FormulaCard title="Do not confuse the quantities" accent={C.gold} formula={<>χ ≠ IE ≠ Δ<sub>eg</sub>H</>}>
          Ionisation enthalpy concerns electron removal from an isolated gaseous species; electron gain enthalpy concerns electron addition to an isolated gaseous atom; electronegativity describes attraction within a bond.
        </FormulaCard>
      </ChartGrid>
    </Panel>
  );
}

function FactCard({ title, bullets, accent }: { title: string; bullets: string[]; accent: string }) {
  return (
    <article style={{ minWidth: 0, border: `1px solid ${accent}55`, borderRadius: 14, padding: 15, background: `${accent}0b` }}>
      <h3 style={{ margin: "0 0 9px", color: accent, font: `750 17px/1.3 ${C.serif}`, overflowWrap: "anywhere" }}>{title}</h3>
      <ul style={{ margin: 0, paddingLeft: 18, display: "grid", gap: 7 }}>
        {bullets.map((bullet) => (
          <li key={bullet} style={{ color: C.dim, font: `400 12.8px/1.55 ${C.sans}`, overflowWrap: "anywhere" }}>{bullet}</li>
        ))}
      </ul>
    </article>
  );
}

export function V9SpecialSourcePanel() {
  return (
    <Panel accent={C.coral}>
      <Title kicker="Consolidated special-case revision" accent={C.coral}>Anomalous behaviour of Li and Be</Title>
      <Lead>
        Lithium and beryllium are much smaller than the remaining members of their groups. Their high charge density, high ionisation enthalpy and strong polarising power produce chemistry that cannot be predicted by a simple down-group arrow.
      </Lead>
      <ChartGrid>
        <FactCard
          title="Lithium versus the other alkali metals"
          accent={C.blue}
          bullets={[
            "Li compounds have greater covalent character because Li⁺ is exceptionally small and strongly polarising.",
            "Lithium forms Li₃N directly with nitrogen; the heavier alkali metals do not form stable normal nitrides so readily.",
            "Li₂CO₃ and LiOH decompose on strong heating, whereas the heavier-group analogues are generally more thermally stable.",
            "LiF, Li₂CO₃ and Li₃PO₄ are comparatively sparingly soluble because compact lattices offset hydration.",
            "Lithium resembles magnesium diagonally: nitride formation, carbonate decomposition and selected covalent tendencies are similar.",
          ]}
        />
        <FactCard
          title="Beryllium versus the other alkaline-earth metals"
          accent={C.gold}
          bullets={[
            "Be compounds are predominantly covalent; BeCl₂ is polymeric and electron-deficient rather than a simple ionic salt.",
            "BeO and Be(OH)₂ are amphoteric, while the basic character of group-2 oxides and hydroxides increases down the group.",
            "Be forms tetrahedral complexes such as [BeF₄]²⁻ because of its small size and high charge density.",
            "A protective oxide film and high ionisation enthalpy make Be much less reactive toward water.",
            "Beryllium resembles aluminium diagonally in amphoterism, covalent halides, complex formation and oxide-film passivation.",
          ]}
        />
      </ChartGrid>

      <h3 style={{ color: C.text, font: `700 20px/1.3 ${C.serif}`, margin: "24px 0 8px" }}>Consequences of lanthanide contraction</h3>
      <ChartGrid>
        <FactCard title="Unexpectedly small radii" accent={C.violet} bullets={["Ln³⁺ radii decrease steadily because 4f electrons shield poorly.", "Post-lanthanide 5d atoms and ions are smaller than a simple new-shell argument predicts."]} />
        <FactCard title="4d/5d chemical twins" accent={C.green} bullets={["Zr≈Hf, Nb≈Ta and Mo≈W in size.", "Corresponding pairs show closely similar coordination chemistry and are difficult to separate."]} />
        <FactCard title="High density after the lanthanides" accent={C.gold} bullets={["Large nuclear mass is packed into unexpectedly small atomic volumes.", "Hf, Ta, W, Re, Os, Ir, Pt and Au therefore have high densities."]} />
        <FactCard title="Greater nobility and electron affinity" accent={C.coral} bullets={["Contraction and relativistic stabilisation contribute to the unusually high electron affinity and nobility of Au.", "Gold can form auride anions, Au⁻, with very electropositive partners."]} />
        <FactCard title="Y occurs with lanthanides" accent={C.cyan} bullets={["Y³⁺ has a size and charge/radius ratio close to heavy Ln³⁺ ions.", "This similarity explains the frequent association of yttrium with lanthanide minerals."]} />
        <FactCard title="Small differences hinder separation" accent={C.blue} bullets={["Adjacent Ln³⁺ ions differ only slightly in radius and have the same common +3 charge.", "Their chemical properties are therefore very similar, making separation difficult."]} />
      </ChartGrid>
    </Panel>
  );
}

function V10CohesiveEnergySVG() {
  const w = 900;
  const h = 430;
  const left = 70;
  const right = 26;
  const top = 54;
  const bottom = 74;
  const labels = ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  const curves = [
    { name: "3d", color: C.blue, values: [42, 63, 90, 78, 58, 72, 65, 54, 30, 12] },
    { name: "4d", color: C.green, values: [48, 70, 96, 88, 70, 84, 78, 66, 40, 16] },
    { name: "5d", color: C.gold, values: [56, 78, 94, 100, 88, 90, 84, 72, 48, 14] },
  ] as const;
  const x = (i: number) => left + (i / (labels.length - 1)) * (w - left - right);
  const y = (v: number) => top + (1 - v / 110) * (h - top - bottom);
  const path = (values: readonly number[]) => values.map((v, i) => `${i ? "L" : "M"} ${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(" ");
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      role="img"
      aria-labelledby="cohesive-v10-title cohesive-v10-desc"
      data-visual-version="cohesive-landscape-v10"
      style={{ width: "100%", height: "auto", display: "block", overflow: "hidden", borderRadius: 16 }}
    >
      <title id="cohesive-v10-title">Qualitative cohesive-energy landscape across the transition series</title>
      <desc id="cohesive-v10-desc">Three labelled curves show broad maxima near groups five and six and minima near group twelve. The graphic is a trend map, not a numerical dataset.</desc>
      <rect width={w} height={h} rx="22" fill={C.grid} stroke={C.border} />
      <text x="28" y="34" fill={C.text} fontFamily={C.serif} fontSize="21" fontWeight="700">Transition-series cohesive-energy landscape</text>
      <text x="28" y="54" fill={C.faint} fontFamily={C.sans} fontSize="12">Law-based schematic · use tabulated enthalpies for numerical comparison</text>
      {[0, 25, 50, 75, 100].map((v) => (
        <g key={`cohesive-grid-${v}`}>
          <line x1={left} x2={w - right} y1={y(v)} y2={y(v)} stroke={C.soft} strokeDasharray="4 8" />
          <text x={left - 12} y={y(v) + 4} textAnchor="end" fill={C.faint} fontFamily={C.mono} fontSize="11">{v}</text>
        </g>
      ))}
      <line x1={left} x2={left} y1={top} y2={h - bottom} stroke={C.dim} strokeWidth="1.5" />
      <line x1={left} x2={w - right} y1={h - bottom} y2={h - bottom} stroke={C.dim} strokeWidth="1.5" />
      {labels.map((label, i) => (
        <g key={`cohesive-x-${label}`}>
          <line x1={x(i)} x2={x(i)} y1={h - bottom} y2={h - bottom + 6} stroke={C.dim} />
          <text x={x(i)} y={h - bottom + 24} textAnchor="middle" fill={C.dim} fontFamily={C.mono} fontSize="12">{label}</text>
        </g>
      ))}
      {curves.map((curve) => (
        <g key={curve.name}>
          <path d={path(curve.values)} fill="none" stroke={curve.color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          {curve.values.map((v, i) => <circle key={`${curve.name}-${i}`} cx={x(i)} cy={y(v)} r="4.5" fill={curve.color} stroke={C.bg} strokeWidth="2" />)}
          <text x={w - right - 8} y={y(curve.values[curve.values.length - 1]) - 8} textAnchor="end" fill={curve.color} fontFamily={C.mono} fontSize="13" fontWeight="800">{curve.name}</text>
        </g>
      ))}
      <rect x={x(2) - 40} y={top + 6} width={x(3) - x(2) + 80} height="54" rx="12" fill={`${C.gold}14`} stroke={`${C.gold}88`} />
      <text x={(x(2) + x(3)) / 2} y={top + 27} textAnchor="middle" fill={C.gold} fontFamily={C.sans} fontSize="12" fontWeight="800">broad maximum region</text>
      <text x={(x(2) + x(3)) / 2} y={top + 44} textAnchor="middle" fill={C.dim} fontFamily={C.sans} fontSize="11">groups 5–6</text>
      <text x={(left + w - right) / 2} y={h - 22} textAnchor="middle" fill={C.dim} fontFamily={C.sans} fontSize="14" fontWeight="700">group number</text>
      <text x="20" y={(top + h - bottom) / 2} textAnchor="middle" fill={C.dim} fontFamily={C.sans} fontSize="14" fontWeight="700" transform={`rotate(-90 20 ${(top + h - bottom) / 2})`}>relative cohesive tendency</text>
    </svg>
  );
}

function V10JaffeHinzeSVG() {
  const w = 820;
  const h = 360;
  const left = 74;
  const right = 34;
  const top = 48;
  const bottom = 64;
  const x = (q: number) => left + ((q + 1) / 2) * (w - left - right);
  const y = (chi: number) => top + (1 - (chi - 1) / 5) * (h - top - bottom);
  const lines = [
    { name: "soft centre", a: 2.8, b: 0.8, color: C.green },
    { name: "intermediate", a: 3.2, b: 1.4, color: C.cyan },
    { name: "hard centre", a: 3.7, b: 2.1, color: C.coral },
  ] as const;
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      role="img"
      aria-labelledby="jaffe-v10-title jaffe-v10-desc"
      data-visual-version="jaffe-hinze-v10"
      style={{ width: "100%", height: "auto", display: "block", overflow: "hidden", borderRadius: 16 }}
    >
      <title id="jaffe-v10-title">Charge-dependent electronegativity in the Jaffe-Hinze form</title>
      <desc id="jaffe-v10-desc">Three schematic straight lines illustrate chi equals a plus b q. Larger b gives stronger response to charge and smaller charge capacity.</desc>
      <rect width={w} height={h} rx="22" fill={C.grid} stroke={C.border} />
      <text x="28" y="32" fill={C.text} fontFamily={C.serif} fontSize="20" fontWeight="700">Charge-dependent electronegativity</text>
      <text x="28" y="52" fill={C.faint} fontFamily={C.sans} fontSize="12">Olympiad schematic · χ(q)=a+bq · slope b measures response to charge</text>
      {[1, 2, 3, 4, 5, 6].map((v) => <line key={`j-grid-${v}`} x1={left} x2={w - right} y1={y(v)} y2={y(v)} stroke={C.soft} strokeDasharray="4 8" />)}
      {[-1, -0.5, 0, 0.5, 1].map((q) => (
        <g key={`j-x-${q}`}>
          <line x1={x(q)} x2={x(q)} y1={top} y2={h - bottom} stroke={q === 0 ? C.violet : C.soft} strokeDasharray={q === 0 ? "5 6" : "3 10"} />
          <text x={x(q)} y={h - bottom + 22} textAnchor="middle" fill={C.dim} fontFamily={C.mono} fontSize="11">{q}</text>
        </g>
      ))}
      <line x1={left} x2={left} y1={top} y2={h - bottom} stroke={C.dim} strokeWidth="1.5" />
      <line x1={left} x2={w - right} y1={h - bottom} y2={h - bottom} stroke={C.dim} strokeWidth="1.5" />
      {lines.map((line, index) => {
        const y1 = y(line.a - line.b);
        const y2 = y(line.a + line.b);
        return (
          <g key={line.name}>
            <line x1={x(-1)} y1={y1} x2={x(1)} y2={y2} stroke={line.color} strokeWidth="4" strokeLinecap="round" />
            <circle cx={x(0)} cy={y(line.a)} r="5" fill={line.color} stroke={C.bg} strokeWidth="2" />
            <text x={x(0.72)} y={y(line.a + line.b * 0.72) - 8 - index * 3} fill={line.color} fontFamily={C.sans} fontSize="12" fontWeight="800">{line.name}</text>
          </g>
        );
      })}
      <text x={(left + w - right) / 2} y={h - 18} textAnchor="middle" fill={C.dim} fontFamily={C.sans} fontSize="13" fontWeight="700">net charge, q</text>
      <text x="18" y={(top + h - bottom) / 2} textAnchor="middle" fill={C.dim} fontFamily={C.sans} fontSize="13" fontWeight="700" transform={`rotate(-90 18 ${(top + h - bottom) / 2})`}>electronegativity, χ(q)</text>
    </svg>
  );
}

function V10SpinOrbitSVG() {
  const w = 820;
  const h = 330;
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      role="img"
      aria-labelledby="spin-orbit-v10-title spin-orbit-v10-desc"
      data-visual-version="spin-orbit-v10"
      style={{ width: "100%", height: "auto", display: "block", overflow: "hidden", borderRadius: 16 }}
    >
      <title id="spin-orbit-v10-title">Spin-orbit splitting of a heavy p subshell</title>
      <desc id="spin-orbit-v10-desc">An unsplit p level is shown separating into a lower p one-half level that holds two electrons and an upper p three-halves level that holds four electrons.</desc>
      <defs>
        <marker id="so-arrow-v10" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto">
          <path d="M0 0 L9 4.5 L0 9 Z" fill={C.violet} />
        </marker>
      </defs>
      <rect width={w} height={h} rx="22" fill={C.grid} stroke={C.border} />
      <text x="28" y="34" fill={C.text} fontFamily={C.serif} fontSize="20" fontWeight="700">Heavy-atom p-subshell splitting</text>
      <text x="28" y="55" fill={C.faint} fontFamily={C.sans} fontSize="12">Olympiad enrichment · strongest for high-Z atoms and superheavy-element chemistry</text>
      <line x1="150" x2="310" y1="180" y2="180" stroke={C.cyan} strokeWidth="6" strokeLinecap="round" />
      <text x="230" y="160" textAnchor="middle" fill={C.cyan} fontFamily={C.mono} fontSize="16" fontWeight="900">np</text>
      <text x="230" y="206" textAnchor="middle" fill={C.dim} fontFamily={C.sans} fontSize="12">without explicit spin–orbit splitting</text>
      <line x1="340" x2="455" y1="180" y2="180" stroke={C.violet} strokeWidth="3" markerEnd="url(#so-arrow-v10)" />
      <line x1="510" x2="700" y1="116" y2="116" stroke={C.coral} strokeWidth="6" strokeLinecap="round" />
      <line x1="510" x2="700" y1="238" y2="238" stroke={C.green} strokeWidth="6" strokeLinecap="round" />
      <text x="605" y="94" textAnchor="middle" fill={C.coral} fontFamily={C.mono} fontSize="16" fontWeight="900">np₃/₂</text>
      <text x="605" y="142" textAnchor="middle" fill={C.dim} fontFamily={C.sans} fontSize="12">capacity 4 · less penetrating</text>
      <text x="605" y="216" textAnchor="middle" fill={C.green} fontFamily={C.mono} fontSize="16" fontWeight="900">np₁/₂</text>
      <text x="605" y="264" textAnchor="middle" fill={C.dim} fontFamily={C.sans} fontSize="12">capacity 2 · more contracted and stabilised</text>
      <line x1="742" x2="742" y1="244" y2="110" stroke={C.gold} strokeWidth="2.5" markerEnd="url(#so-arrow-v10)" />
      <text x="762" y="184" textAnchor="middle" fill={C.gold} fontFamily={C.sans} fontSize="11" fontWeight="800" transform="rotate(-90 762 184)">energy increases</text>
    </svg>
  );
}

export function V10ElectronegativityApplicationsPanel() {
  return (
    <Panel accent={C.cyan}>
      <Title kicker="Applications without overloading the core" accent={C.cyan}>What electronegativity can explain—and what it cannot decide alone</Title>
      <Lead>
        Electronegativity connects bond polarity with structure and reactivity, but it must be combined with geometry, orbital energies, lattice effects and the chemical environment. The applications below are arranged as short reasoning blocks rather than dense prose.
      </Lead>
      <ChartGrid>
        <FormulaCard title="Bond polarity and partial charge" accent={C.cyan} formula={<>Δχ ↑ ⇒ expected bond polarity ↑</>}>
          Electronegativity difference predicts the direction of electron-density displacement. Molecular geometry still decides whether individual bond dipoles cancel or reinforce.
        </FormulaCard>
        <FormulaCard title="Pauling bond-length correction" accent={C.gold} formula={<>r<sub>AB</sub> ≈ r<sub>A</sub>+r<sub>B</sub>−c|χ<sub>A</sub>−χ<sub>B</sub>|</>}>
          A polar bond may be shorter than a simple sum of covalent radii. The empirical constant depends on the radius and electronegativity conventions used.
        </FormulaCard>
        <FormulaCard title="Oxide acidity across period 3" accent={C.coral} formula={<>Na₂O &lt; MgO &lt; Al₂O₃ &lt; SiO₂ &lt; P₄O₁₀ &lt; SO₃ &lt; Cl₂O₇</>}>
          Increasing electronegativity and oxidation state shift bonding from ionic/basic toward covalent/acidic. Amphoteric oxides occupy the intermediate region.
        </FormulaCard>
        <FormulaCard title="A—O—H cleavage" accent={C.green} formula={<>highly electronegative A favours O—H ionisation</>}>
          When A withdraws electron density strongly, the O—H bond becomes more protonic. With electropositive A, cleavage is better described as release of hydroxide from an ionic hydroxide.
        </FormulaCard>
      </ChartGrid>
      <ChartGrid>
        <FactCard title="Colour and charge-transfer tendency" accent={C.violet} bullets={[
          "Large, polarisable anions such as I⁻ and S²⁻ often lower charge-transfer energies relative to compact Cl⁻.",
          "The familiar AgCl → AgBr → AgI colour deepening is better described through electronic structure and polarisation than by a single percentage-ionic-character cutoff.",
          "Electronegativity is one input; band gaps, lattice structure and orbital energies complete the explanation.",
        ]} />
        <FactCard title="Binary-compound naming" accent={C.blue} bullets={[
          "The more electronegative partner is usually written and named as the negative component: ICl is iodine monochloride.",
          "OF₂ is oxygen difluoride because F is more electronegative than O; Cl₂O is chlorine monoxide because O is more electronegative than Cl.",
          "Conventional names and established formula order still take precedence in standard nomenclature.",
        ]} />
        <FactCard title="Modern hypervalency caution" accent={C.gold} bullets={[
          "Compounds such as PF₅, SF₆ and XeF₄ do not require literal promotion into low-lying vacant d orbitals as a modern bonding explanation.",
          "Polarity, multicentre bonding, ligand electronegativity and molecular-orbital descriptions are more reliable.",
          "Therefore electronegativity helps explain bond polarity but does not by itself prove d-orbital participation.",
        ]} />
      </ChartGrid>
    </Panel>
  );
}

export function V10CohesiveAndMeltingPanel() {
  return (
    <Panel accent={C.gold}>
      <Title kicker="Data-rich physical periodicity" accent={C.gold}>Melting point, atomisation enthalpy and cohesive energy</Title>
      <Lead>
        Melting and boiling points reflect packing, structure and the strength of interparticle attraction. For metals, standard enthalpy of atomisation is often a clearer measure of cohesive strength than melting point alone because crystal structure and entropy also affect the phase transition.
      </Lead>
      <div style={{ margin: "14px 0 18px", minWidth: 0 }}><V10CohesiveEnergySVG /></div>
      <ChartGrid>
        <FactCard title="Representative elements" accent={C.cyan} bullets={[
          "Across an s/p period, the broad melting-point maximum occurs near Group 14 where strong extended covalent networks are possible.",
          "B, C and Si have high melting points because of giant covalent structures; molecular N₂, O₂, F₂ and noble gases melt at far lower temperatures.",
          "Down the halogens, stronger London dispersion forces raise melting and boiling points as size and polarisability increase.",
        ]} />
        <FactCard title="Transition series" accent={C.green} bullets={[
          "Cohesive strength is irregular but usually largest near the middle-left of a d series where several d and s electrons can support metallic bonding.",
          "Group 12 metals have filled d shells and comparatively weak metallic cohesion; Hg is the extreme case because its relativistically stabilised 6s² pair contributes poorly.",
          "The broad overlap tendency is 5d > 4d > 3d, but exact element-by-element orders require data.",
        ]} />
        <FactCard title="Lanthanoids" accent={C.violet} bullets={[
          "4f electrons are deeply buried and contribute little directly to metal–metal bonding.",
          "Eu and Yb show pronounced cohesive minima because their stable 4f⁷ and 4f¹⁴ cores favour effectively divalent metallic states with only two 6s electrons available.",
          "Ce, Gd and Lu can show relatively stronger cohesion when a 5d electron participates more effectively.",
        ]} />
        <FactCard title="Signature special cases" accent={C.coral} bullets={[
          "Ga melts near body temperature because its crystal and bonding pattern are unusually weak for a metal in its neighbourhood.",
          "Hg is liquid at room temperature because relativistic 6s stabilisation suppresses ordinary metallic cohesion.",
          "Au remains strongly cohesive because its half-filled 6s-derived band and relativistically expanded 5d orbitals support bonding, despite its chemical nobility.",
        ]} />
      </ChartGrid>
    </Panel>
  );
}

export function V10SecondaryPeriodicityPanel() {
  const group14IE: Datum[] = [
    { label: "C", value: 10820 },
    { label: "Si", value: 7580 },
    { label: "Ge", value: 7710, note: "4th-period rise" },
    { label: "Sn", value: 6870 },
    { label: "Pb", value: 7160, note: "6th-period rise" },
  ];
  const group14EN: Datum[] = [
    { label: "C", value: 2.60 },
    { label: "Si", value: 1.91 },
    { label: "Ge", value: 2.00 },
    { label: "Sn", value: 1.94 },
    { label: "Pb", value: 2.23 },
  ];
  return (
    <Panel accent={C.coral}>
      <Title kicker="Advanced periodic effect" accent={C.coral}>Secondary periodicity: why a group trend can rise, fall and rise again</Title>
      <Lead>
        Smooth down-group trends are disturbed when a new poorly shielding d or f subshell has just been filled. Increased effective nuclear attraction, orbital penetration and relativistic stabilisation produce local maxima or minima in fourth- and sixth-period post-transition elements.
      </Lead>
      <ChartGrid>
        <MetricBars title="Group 14: IE₁+IE₂ for the ns² pair" subtitle="kJ mol⁻¹ · sum of the first two ionisation enthalpies" data={group14IE} unit="kJ mol⁻¹" color={C.coral} compact />
        <MetricBars title="Group 14 electronegativity" subtitle="scale-dependent values; compare the non-monotonic shape" data={group14EN} unit="" color={C.violet} compact />
      </ChartGrid>
      <ReasoningSteps
        accent={C.coral}
        steps={[
          { title: "Fourth-period post-transition elements", body: "Ga to Br follow a filled 3d¹⁰ shell. Poor 3d shielding produces scandide contraction and higher-than-smooth-trend IE, EGE and electronegativity." },
          { title: "Sixth-period post-lanthanoids", body: "Tl to At experience 4f¹⁴ contraction, 5d shielding effects and relativistic stabilisation, making the deviation generally stronger." },
          { title: "Chemical consequences", body: "Ga and Tl show higher ionisation sums than a smooth interpolation; As(V), Se(VI) and Br(VII) can be less stable than neighbouring group analogues." },
          { title: "Do not call every deviation random", body: "The local hikes recur systematically after low-screening subshells are filled. That repeating non-monotonic pattern is secondary periodicity." },
        ]}
      />
    </Panel>
  );
}

export function V10OlympiadEnrichmentPanel() {
  return (
    <Panel accent={C.violet}>
      <Title kicker="Olympiad enrichment—kept outside the core route" accent={C.violet}>Charge-dependent electronegativity, spin–orbit splitting and relativistic chemistry</Title>
      <Lead>
        These models are valuable for advanced problem solving but are not required to understand the core periodic arrows. They are placed here deliberately so the main JEE sequence remains readable.
      </Lead>
      <div style={{ margin: "14px 0 18px", minWidth: 0 }}><V10JaffeHinzeSVG /></div>
      <ChartGrid>
        <FormulaCard title="Jaffé–Hinze form" accent={C.violet} formula={<>χ(q)=a+bq</>}>
          The intercept a is the electronegativity of the chosen neutral valence state. The charge coefficient b measures how rapidly electronegativity changes with net charge. Numerical a and b values depend on the orbital and unit convention.
        </FormulaCard>
        <FormulaCard title="Mulliken connection" accent={C.cyan} formula={<>a≈½(IE+EA), b≈IE−EA</>}>
          Use IE and conventional positive electron affinity in the same per-atom energy unit. In hardness language, a tracks chemical potential magnitude and b is proportional to resistance to charge transfer.
        </FormulaCard>
        <FormulaCard title="Electronegativity equalisation" accent={C.green} formula={<>δ=(a<sub>B</sub>−a<sub>A</sub>)/(b<sub>A</sub>+b<sub>B</sub>)</>}>
          For A<sup>δ+</sup>—B<sup>δ−</sup>, set a<sub>A</sub>+b<sub>A</sub>δ = a<sub>B</sub>−b<sub>B</sub>δ. The result is a model estimate of charge separation, not an exact observable for every molecule.
        </FormulaCard>
      </ChartGrid>
      <div style={{ margin: "22px 0 18px", minWidth: 0 }}><V10SpinOrbitSVG /></div>
      <ChartGrid>
        <FactCard title="What spin–orbit splitting changes" accent={C.violet} bullets={[
          "For a p subshell, coupling gives j=1/2 and j=3/2 levels with capacities 2 and 4 electrons.",
          "The p₁/₂ level penetrates more strongly and is relativistically stabilised relative to p₃/₂ in very heavy atoms.",
          "The separation can affect bonding availability, oxidation-state preferences and superheavy-element chemistry.",
        ]} />
        <FactCard title="Relativistic contraction and expansion" accent={C.gold} bullets={[
          "High-Z s and p₁/₂ orbitals contract and stabilise directly.",
          "Improved inner shielding indirectly destabilises and expands d and f orbitals.",
          "This helps explain Au colour and electron affinity, Hg liquidity, inert-pair trends and 5d/5f bonding behaviour.",
        ]} />
        <FactCard title="4f versus 5f" accent={C.coral} bullets={[
          "Lanthanide 4f orbitals are deeply buried and weakly affected by ligands.",
          "Early-actinide 5f orbitals are more radially extended and can participate in bonding, supporting broader oxidation-state chemistry.",
          "Across the actinide series, 5f contraction gradually makes later members more lanthanide-like.",
        ]} />
      </ChartGrid>
      <ChartGrid>
        <FormulaCard title="Olympiad check 1" accent={C.cyan} formula={<>a<sub>B</sub>−a<sub>A</sub>=2.0, b<sub>A</sub>+b<sub>B</sub>=10</>}>
          The equalisation model gives δ=0.20, corresponding to a 20% charge-separation parameter in this simplified convention.
        </FormulaCard>
        <FormulaCard title="Olympiad check 2" accent={C.gold} formula={<>larger b ⇒ steeper χ(q)</>}>
          A centre with larger b changes electronegativity more strongly when charged and is commonly interpreted as harder and less charge-accommodating.
        </FormulaCard>
      </ChartGrid>
    </Panel>
  );
}
