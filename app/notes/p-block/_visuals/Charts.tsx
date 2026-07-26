import { Frame, Formula } from "./Frame";
import { VIZ, formulaRuns } from "./theme";

/* ------------------------------------------------------------------ */
/* OxidationStateMap — a ladder of oxidation states with a species on   */
/* each rung. Used for the nitrogen −III → +V ladder, Pb/Sn, Xe, etc.   */
/* ------------------------------------------------------------------ */
export function OxidationStateMap({
  caption, describe, element, rungs, w = 560,
}: {
  caption: string;
  describe?: string;
  element: string;
  rungs: { state: string; species: string[]; note?: string; tone?: "good" | "warn" | "bad" | "accent" }[];
  w?: number;
}) {
  const rowH = 34;
  const h = rungs.length * rowH + 54;
  const axisX = 78;
  const tone = { good: VIZ.good, warn: VIZ.warn, bad: VIZ.bad, accent: VIZ.accent } as const;

  return (
    <Frame caption={caption} describe={describe} w={w} h={h} maxWidth={w}>
      <text x={16} y={24} fontSize={VIZ.font.title} fontWeight={800} fill={VIZ.accent} fontFamily="ui-sans-serif, system-ui, sans-serif">
        {element} — oxidation states
      </text>
      <line x1={axisX} y1={40} x2={axisX} y2={h - 14} stroke={VIZ.frame} strokeWidth={1.4} />
      {rungs.map((r, i) => {
        const y = 40 + i * rowH + rowH / 2;
        const c = tone[r.tone ?? "accent"];
        return (
          <g key={i}>
            <line x1={axisX - 5} y1={y} x2={axisX + 5} y2={y} stroke={c} strokeWidth={2} />
            <text x={axisX - 12} y={y + 4} fontSize={VIZ.font.label} fontWeight={800} fill={c} textAnchor="end" fontFamily="ui-sans-serif, system-ui, sans-serif">
              {r.state}
            </text>
            {r.species.map((s, j) => (
              <Formula key={j} parts={formulaRuns(s)} x={axisX + 24 + j * 74} y={y + 5} size={13} fill={VIZ.atomText} anchor="start" />
            ))}
            {r.note ? (
              <text x={w - 14} y={y + 4} fontSize={VIZ.font.small} fill="#93a7bd" textAnchor="end" fontFamily="ui-sans-serif, system-ui, sans-serif">
                {r.note}
              </text>
            ) : null}
          </g>
        );
      })}
    </Frame>
  );
}

/* ------------------------------------------------------------------ */
/* TrendChart — a small line/bar plot for a periodic trend, with the    */
/* anomaly callable out. This is where "explain the exception" lives.   */
/* ------------------------------------------------------------------ */
export function TrendChart({
  caption, describe, yLabel, points, w = 560, h = 260,
}: {
  caption: string;
  describe?: string;
  yLabel: string;
  points: { x: string; y: number; anomaly?: boolean; note?: string }[];
  w?: number;
  h?: number;
}) {
  const padL = 58, padR = 20, padT = 24, padB = 46;
  const plotW = w - padL - padR, plotH = h - padT - padB;
  const ys = points.map((p) => p.y);
  const lo = Math.min(...ys), hi = Math.max(...ys);
  const span = hi - lo || 1;
  const xOf = (i: number) => padL + (points.length === 1 ? plotW / 2 : (i / (points.length - 1)) * plotW);
  const yOf = (v: number) => padT + plotH - ((v - lo) / span) * plotH;

  const path = points.map((p, i) => `${i === 0 ? "M" : "L"}${xOf(i)},${yOf(p.y)}`).join(" ");

  return (
    <Frame caption={caption} describe={describe} w={w} h={h} maxWidth={w}>
      {/* axes */}
      <line x1={padL} y1={padT} x2={padL} y2={padT + plotH} stroke={VIZ.frame} strokeWidth={1.2} />
      <line x1={padL} y1={padT + plotH} x2={padL + plotW} y2={padT + plotH} stroke={VIZ.frame} strokeWidth={1.2} />
      <text x={14} y={padT + plotH / 2} fontSize={VIZ.font.small} fill="#93a7bd" textAnchor="middle" transform={`rotate(-90 14 ${padT + plotH / 2})`} fontFamily="ui-sans-serif, system-ui, sans-serif">
        {yLabel}
      </text>
      {/* gridline at min and max */}
      {[lo, hi].map((v, i) => (
        <g key={i}>
          <line x1={padL} y1={yOf(v)} x2={padL + plotW} y2={yOf(v)} stroke={VIZ.frame} strokeWidth={0.7} strokeDasharray="3 4" />
          <text x={padL - 8} y={yOf(v) + 4} fontSize={VIZ.font.small} fill="#93a7bd" textAnchor="end" fontFamily="ui-sans-serif, system-ui, sans-serif">{v}</text>
        </g>
      ))}
      <path d={path} fill="none" stroke={VIZ.accent} strokeWidth={VIZ.stroke.base} strokeLinejoin="round" />
      {points.map((p, i) => (
        <g key={i}>
          {p.anomaly ? <circle cx={xOf(i)} cy={yOf(p.y)} r={10} fill={VIZ.warnSoft} /> : null}
          <circle cx={xOf(i)} cy={yOf(p.y)} r={4.6} fill={p.anomaly ? VIZ.warn : VIZ.accent} />
          <text x={xOf(i)} y={padT + plotH + 18} fontSize={VIZ.font.label} fill={p.anomaly ? VIZ.warn : VIZ.atomText} textAnchor="middle" fontWeight={700} fontFamily="ui-sans-serif, system-ui, sans-serif">
            {p.x}
          </text>
          {p.note ? (
            <text x={xOf(i)} y={padT + plotH + 34} fontSize={VIZ.font.small} fill={VIZ.warn} textAnchor="middle" fontFamily="ui-sans-serif, system-ui, sans-serif">{p.note}</text>
          ) : null}
        </g>
      ))}
    </Frame>
  );
}

/* ------------------------------------------------------------------ */
/* ProcessFlow — industrial process / decision tree / hydrolysis map.   */
/* Nodes on a grid with labelled arrows. Also serves ReactionNetwork.   */
/* ------------------------------------------------------------------ */
export interface FlowNode {
  id: string;
  text: string;
  col: number;
  row: number;
  tone?: "accent" | "good" | "warn" | "bad" | "plain";
}
export interface FlowEdge {
  from: string;
  to: string;
  label?: string;
  style?: "solid" | "dashed";
}

export function ProcessFlow({
  caption, describe, nodes, edges, w = 640, colW = 168, rowH = 84,
}: {
  caption: string;
  describe?: string;
  nodes: FlowNode[];
  edges: FlowEdge[];
  w?: number;
  colW?: number;
  rowH?: number;
}) {
  const maxRow = Math.max(...nodes.map((n) => n.row));
  const h = (maxRow + 1) * rowH + 34;
  const boxW = colW - 30, boxH = 46;
  const cxOf = (n: FlowNode) => 22 + n.col * colW + boxW / 2;
  const cyOf = (n: FlowNode) => 22 + n.row * rowH + boxH / 2;
  const tone = { accent: VIZ.accent, good: VIZ.good, warn: VIZ.warn, bad: VIZ.bad, plain: VIZ.bond } as const;
  const at = (id: string) => nodes.find((n) => n.id === id);

  return (
    <Frame caption={caption} describe={describe} w={w} h={h} maxWidth={w}>
      <defs>
        <marker id="pf-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill={VIZ.bond} />
        </marker>
      </defs>
      {edges.map((e, i) => {
        const A = at(e.from), B = at(e.to);
        if (!A || !B) return null;
        const x1 = cxOf(A), y1 = cyOf(A), x2 = cxOf(B), y2 = cyOf(B);
        const dx = x2 - x1, dy = y2 - y1;
        const len = Math.hypot(dx, dy) || 1;
        const ux = dx / len, uy = dy / len;
        const sx = x1 + ux * (boxW / 2 + 4), sy = y1 + uy * (boxH / 2 + 4);
        const ex = x2 - ux * (boxW / 2 + 10), ey = y2 - uy * (boxH / 2 + 10);
        return (
          <g key={i}>
            <line x1={sx} y1={sy} x2={ex} y2={ey} stroke={VIZ.bond} strokeWidth={VIZ.stroke.thin} markerEnd="url(#pf-arrow)" strokeDasharray={e.style === "dashed" ? "5 4" : undefined} />
            {e.label ? (
              <text x={(sx + ex) / 2} y={(sy + ey) / 2 - 6} fontSize={VIZ.font.small} fill={VIZ.accent} textAnchor="middle" fontWeight={650} fontFamily="ui-sans-serif, system-ui, sans-serif">
                {e.label}
              </text>
            ) : null}
          </g>
        );
      })}
      {nodes.map((n) => {
        const c = tone[n.tone ?? "plain"];
        return (
          <g key={n.id}>
            <rect x={cxOf(n) - boxW / 2} y={cyOf(n) - boxH / 2} width={boxW} height={boxH} rx={9} fill={VIZ.surface} stroke={c} strokeWidth={1.5} />
            <Formula parts={formulaRuns(n.text)} x={cxOf(n)} y={cyOf(n) + 5} size={12.5} fill={c} />
          </g>
        );
      })}
    </Frame>
  );
}

/* ------------------------------------------------------------------ */
/* ComparisonGraphic — two or three columns contrasted row by row.      */
/* For "same formula, different phase", isomerism, exists/does not.     */
/* ------------------------------------------------------------------ */
export function ComparisonGraphic({
  caption, describe, columns, rows, w = 620,
}: {
  caption: string;
  describe?: string;
  columns: { title: string; tone?: "good" | "warn" | "bad" | "accent" }[];
  rows: { label: string; cells: string[] }[];
  w?: number;
}) {
  const labelW = 132;
  const colW = (w - labelW - 28) / columns.length;
  const rowH = 32;
  const h = rows.length * rowH + 66;
  const tone = { good: VIZ.good, warn: VIZ.warn, bad: VIZ.bad, accent: VIZ.accent } as const;

  return (
    <Frame caption={caption} describe={describe} w={w} h={h} maxWidth={w}>
      {columns.map((c, i) => (
        <g key={i}>
          <rect x={14 + labelW + i * colW} y={14} width={colW - 6} height={30} rx={8} fill={tone[c.tone ?? "accent"] + "22"} stroke={tone[c.tone ?? "accent"]} strokeWidth={1.2} />
          <text x={14 + labelW + i * colW + (colW - 6) / 2} y={34} fontSize={VIZ.font.label} fontWeight={800} fill={tone[c.tone ?? "accent"]} textAnchor="middle" fontFamily="ui-sans-serif, system-ui, sans-serif">
            {c.title}
          </text>
        </g>
      ))}
      {rows.map((r, ri) => {
        const y = 56 + ri * rowH;
        return (
          <g key={ri}>
            {ri % 2 === 0 ? <rect x={14} y={y - 12} width={w - 28} height={rowH - 4} rx={6} fill="rgba(255,255,255,.03)" /> : null}
            <text x={18} y={y + 6} fontSize={VIZ.font.small} fill="#93a7bd" fontFamily="ui-sans-serif, system-ui, sans-serif">{r.label}</text>
            {r.cells.map((cell, ci) => (
              <text key={ci} x={14 + labelW + ci * colW + (colW - 6) / 2} y={y + 6} fontSize={VIZ.font.label} fill={VIZ.atomText} textAnchor="middle" fontWeight={620} fontFamily="ui-sans-serif, system-ui, sans-serif">
                {cell}
              </text>
            ))}
          </g>
        );
      })}
    </Frame>
  );
}
