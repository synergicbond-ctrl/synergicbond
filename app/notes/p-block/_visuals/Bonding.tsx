import { Frame, Formula } from "./Frame";
import { VIZ, formulaRuns } from "./theme";

/* ------------------------------------------------------------------ */
/* OrbitalDiagram — box-and-arrow orbital occupancy.                   */
/*                                                                     */
/* The chapter's sources lean on this constantly ("promote one 5p      */
/* electron to 5d", "three unpaired electrons form three bonds"). The  */
/* component draws a labelled row of orbital boxes per sub-shell, with */
/* explicit up/down spin arrows, so a promotion can be shown as two    */
/* rows side by side rather than described in prose.                   */
/* ------------------------------------------------------------------ */
export interface OrbitalShell {
  /** Sub-shell label, e.g. "2s", "3p", "3d". */
  label: string;
  /** One entry per orbital: 0 = empty, 1 = single up, 2 = paired. */
  boxes: (0 | 1 | 2)[];
  /** Ring these boxes to call out where the action is. */
  mark?: boolean;
}

export interface OrbitalRow {
  /** Row caption, e.g. "ground state" or "excited state". */
  title: string;
  shells: OrbitalShell[];
  /** Short conclusion printed to the right, e.g. "3 unpaired -> 3 bonds". */
  note?: string;
}

export function OrbitalDiagram({
  caption,
  describe,
  rows,
  w = 620,
}: {
  caption: string;
  describe?: string;
  rows: OrbitalRow[];
  w?: number;
}) {
  const boxW = 22;
  const boxH = 26;
  const gap = 3;
  const rowH = 74;
  const labelW = 118;
  const h = rows.length * rowH + 26;

  const shellWidth = (s: OrbitalShell) => s.boxes.length * boxW + (s.boxes.length - 1) * gap;

  const arrow = (x: number, y: number, dir: "up" | "down", colour: string) => {
    const top = dir === "up" ? y - 8 : y + 8;
    const bottom = dir === "up" ? y + 8 : y - 8;
    const headY = dir === "up" ? y - 8 + 4 : y + 8 - 4;
    return (
      <g>
        <line x1={x} y1={bottom} x2={x} y2={top} stroke={colour} strokeWidth={1.7} strokeLinecap="round" />
        <path
          d={`M${x - 3},${headY} L${x},${top} L${x + 3},${headY}`}
          fill="none"
          stroke={colour}
          strokeWidth={1.7}
          strokeLinejoin="round"
        />
      </g>
    );
  };

  return (
    <Frame caption={caption} describe={describe} w={w} h={h} maxWidth={w}>
      {rows.map((row, ri) => {
        const yTop = 18 + ri * rowH;
        const yMid = yTop + boxH / 2 + 12;
        let x = labelW;
        return (
          <g key={ri}>
            <text
              x={14}
              y={yMid + 4}
              fontSize={VIZ.font.label}
              fontWeight={800}
              fill={VIZ.accent}
              fontFamily="ui-sans-serif, system-ui, sans-serif"
            >
              {row.title}
            </text>
            {row.shells.map((shell, si) => {
              const sw = shellWidth(shell);
              const startX = x;
              x += sw + 26;
              return (
                <g key={si}>
                  {shell.mark ? (
                    <rect
                      x={startX - 5}
                      y={yMid - boxH / 2 - 5}
                      width={sw + 10}
                      height={boxH + 10}
                      rx={7}
                      fill={VIZ.accentSoft}
                    />
                  ) : null}
                  {shell.boxes.map((occ, bi) => {
                    const bx = startX + bi * (boxW + gap);
                    return (
                      <g key={bi}>
                        <rect
                          x={bx}
                          y={yMid - boxH / 2}
                          width={boxW}
                          height={boxH}
                          rx={3}
                          fill="none"
                          stroke={VIZ.frame}
                          strokeWidth={1.3}
                        />
                        {occ >= 1 ? arrow(bx + (occ === 2 ? boxW * 0.33 : boxW / 2), yMid, "up", VIZ.atomText) : null}
                        {occ === 2 ? arrow(bx + boxW * 0.67, yMid, "down", VIZ.atomText) : null}
                      </g>
                    );
                  })}
                  <text
                    x={startX + sw / 2}
                    y={yMid + boxH / 2 + 15}
                    fontSize={VIZ.font.small}
                    fill="#93a7bd"
                    textAnchor="middle"
                    fontFamily="ui-sans-serif, system-ui, sans-serif"
                  >
                    {shell.label}
                  </text>
                </g>
              );
            })}
            {row.note ? (
              <text
                x={w - 14}
                y={yMid + 4}
                fontSize={VIZ.font.small}
                fill={VIZ.good}
                textAnchor="end"
                fontWeight={650}
                fontFamily="ui-sans-serif, system-ui, sans-serif"
              >
                {row.note}
              </text>
            ) : null}
          </g>
        );
      })}
    </Frame>
  );
}

/* ------------------------------------------------------------------ */
/* MulticentreBond — a dedicated bridge diagram.                       */
/*                                                                     */
/* Built because the chapter needs to distinguish bridges that look    */
/* identical on paper but are electronically different: diborane's     */
/* 3-centre 2-electron B-H-B, the 4-electron lone-pair bridge in       */
/* Al2Cl6, and the 3-centre 4-electron sigma systems of I3- and XeF2.  */
/* The electron count is drawn, not asserted.                          */
/* ------------------------------------------------------------------ */
export interface BridgeSpec {
  /** Left and right terminal atoms of the bridge. */
  left: string;
  right: string;
  /** The bridging atom(s). Two entries draws a double bridge. */
  bridge: string[];
  /** Electrons held in each bridge — 2 for 3c-2e, 4 for a lone-pair bridge. */
  electronsPerBridge: 2 | 4;
  /** Terminal substituents drawn on the outside of each end atom. */
  terminals?: { left: string[]; right: string[] };
  /** Bond lengths to annotate, e.g. { bridge: "1.33 A", terminal: "1.19 A" }. */
  lengths?: { bridge?: string; terminal?: string };
}

export function MulticentreBond({
  caption,
  describe,
  spec,
  results = [],
  w = 560,
}: {
  caption: string;
  describe?: string;
  spec: BridgeSpec;
  /** Short conclusions printed under the drawing. */
  results?: string[];
  w?: number;
}) {
  const h = 250 + (results.length ? results.length * 16 + 14 : 0);
  const cx = w / 2;
  const cy = 112;
  const sep = 96; // left/right atom separation from centre
  const bridgeOffset = spec.bridge.length > 1 ? 42 : 0;

  const lx = cx - sep;
  const rx = cx + sep;

  const atom = (x: number, y: number, label: string, size = 17) => (
    <g>
      <circle cx={x} cy={y} r={size} fill={VIZ.surface} stroke={VIZ.frame} strokeWidth={1.3} />
      <Formula parts={formulaRuns(label)} x={x} y={y + 5} size={14} fill={VIZ.atomText} />
    </g>
  );

  return (
    <Frame caption={caption} describe={describe} w={w} h={h} maxWidth={w}>
      {/* the delocalised bridge clouds, drawn first so bonds sit on top */}
      {spec.bridge.map((_, i) => {
        const by = cy + (spec.bridge.length > 1 ? (i === 0 ? -bridgeOffset : bridgeOffset) : 0);
        return (
          <path
            key={`cloud-${i}`}
            d={`M${lx + 14},${cy} Q${cx},${by + (by < cy ? -26 : by > cy ? 26 : -30)} ${rx - 14},${cy}
                Q${cx},${by + (by < cy ? 12 : by > cy ? -12 : 2)} ${lx + 14},${cy} Z`}
            fill={spec.electronsPerBridge === 2 ? VIZ.accentSoft : VIZ.violetSoft}
            stroke={spec.electronsPerBridge === 2 ? VIZ.accent : VIZ.violet}
            strokeWidth={1.2}
            strokeDasharray="4 3"
          />
        );
      })}

      {/* bridging atoms + electron dots */}
      {spec.bridge.map((b, i) => {
        const by = cy + (spec.bridge.length > 1 ? (i === 0 ? -bridgeOffset : bridgeOffset) : 0);
        const dotY = by + (by <= cy ? -20 : 20);
        return (
          <g key={`bridge-${i}`}>
            <line x1={lx + 15} y1={cy} x2={cx - 15} y2={by} stroke={VIZ.bond} strokeWidth={VIZ.stroke.thin} />
            <line x1={cx + 15} y1={by} x2={rx - 15} y2={cy} stroke={VIZ.bond} strokeWidth={VIZ.stroke.thin} />
            {atom(cx, by, b, 15)}
            {Array.from({ length: spec.electronsPerBridge }).map((_, d) => (
              <circle
                key={d}
                cx={cx - (spec.electronsPerBridge === 2 ? 5 : 12) + d * 9}
                cy={dotY}
                r={2.6}
                fill={spec.electronsPerBridge === 2 ? VIZ.accent : VIZ.violet}
              />
            ))}
          </g>
        );
      })}

      {/* end atoms */}
      {atom(lx, cy, spec.left)}
      {atom(rx, cy, spec.right)}

      {/* terminal substituents */}
      {(spec.terminals?.left ?? []).map((t, i, arr) => {
        const spread = 34;
        const ty = cy - ((arr.length - 1) * spread) / 2 + i * spread;
        const tx = lx - 52;
        return (
          <g key={`tl-${i}`}>
            <line x1={lx - 16} y1={cy} x2={tx + 13} y2={ty} stroke={VIZ.bond} strokeWidth={VIZ.stroke.base} />
            {atom(tx, ty, t, 13)}
          </g>
        );
      })}
      {(spec.terminals?.right ?? []).map((t, i, arr) => {
        const spread = 34;
        const ty = cy - ((arr.length - 1) * spread) / 2 + i * spread;
        const tx = rx + 52;
        return (
          <g key={`tr-${i}`}>
            <line x1={rx + 16} y1={cy} x2={tx - 13} y2={ty} stroke={VIZ.bond} strokeWidth={VIZ.stroke.base} />
            {atom(tx, ty, t, 13)}
          </g>
        );
      })}

      {/* length annotations */}
      {spec.lengths?.bridge ? (
        <text
          x={cx}
          y={cy + bridgeOffset + 48}
          fontSize={VIZ.font.small}
          fill={spec.electronsPerBridge === 2 ? VIZ.accent : VIZ.violet}
          textAnchor="middle"
          fontWeight={650}
          fontFamily="ui-sans-serif, system-ui, sans-serif"
        >
          bridge {spec.lengths.bridge}
        </text>
      ) : null}
      {spec.lengths?.terminal ? (
        <text
          x={cx}
          y={cy + bridgeOffset + 66}
          fontSize={VIZ.font.small}
          fill="#93a7bd"
          textAnchor="middle"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
        >
          terminal {spec.lengths.terminal}
        </text>
      ) : null}

      {/* electron-count legend */}
      <text
        x={14}
        y={22}
        fontSize={VIZ.font.small}
        fill={spec.electronsPerBridge === 2 ? VIZ.accent : VIZ.violet}
        fontWeight={700}
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        {spec.electronsPerBridge === 2
          ? "each bridge holds 2 electrons — 3-centre 2-electron"
          : "each bridge holds 4 electrons — lone-pair donation"}
      </text>

      {results.length ? (
        <g>
          <line x1={24} y1={h - results.length * 16 - 20} x2={w - 24} y2={h - results.length * 16 - 20} stroke={VIZ.frame} strokeWidth={1} />
          {results.map((r, i) => (
            <text
              key={i}
              x={cx}
              y={h - results.length * 16 + i * 16}
              fontSize={VIZ.font.label}
              fill={VIZ.accent}
              textAnchor="middle"
              fontWeight={650}
              fontFamily="ui-sans-serif, system-ui, sans-serif"
            >
              {r}
            </text>
          ))}
        </g>
      ) : null}
    </Frame>
  );
}

/* ------------------------------------------------------------------ */
/* ThermalMap — decomposition / transition temperatures on one axis.   */
/*                                                                     */
/* For the carbonate stability series, the sulphur allotrope           */
/* transitions, and the lead-oxide decompositions, where the point is  */
/* the ordering and the spacing rather than any single number.         */
/* ------------------------------------------------------------------ */
export function ThermalMap({
  caption,
  describe,
  unit = "°C",
  entries,
  w = 600,
}: {
  caption: string;
  describe?: string;
  unit?: string;
  entries: { species: string; temperature: number; note?: string; tone?: "good" | "warn" | "bad" | "accent" }[];
  w?: number;
}) {
  const padL = 128;
  const padR = 74;
  const rowH = 34;
  const h = entries.length * rowH + 52;
  const plotW = w - padL - padR;
  const temps = entries.map((e) => e.temperature);
  const lo = Math.min(0, ...temps);
  const hi = Math.max(...temps);
  const span = hi - lo || 1;
  const xOf = (t: number) => padL + ((t - lo) / span) * plotW;
  const tone = { good: VIZ.good, warn: VIZ.warn, bad: VIZ.bad, accent: VIZ.accent } as const;

  return (
    <Frame caption={caption} describe={describe} w={w} h={h} maxWidth={w}>
      {/* axis */}
      <line x1={padL} y1={h - 26} x2={padL + plotW} y2={h - 26} stroke={VIZ.frame} strokeWidth={1.2} />
      {[lo, hi].map((t, i) => (
        <text
          key={i}
          x={xOf(t)}
          y={h - 11}
          fontSize={VIZ.font.small}
          fill="#93a7bd"
          textAnchor="middle"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
        >
          {t} {unit}
        </text>
      ))}
      {entries.map((e, i) => {
        const y = 26 + i * rowH;
        const c = tone[e.tone ?? "accent"];
        return (
          <g key={i}>
            <Formula parts={formulaRuns(e.species)} x={padL - 14} y={y + 5} size={13} fill={VIZ.atomText} anchor="end" />
            <line x1={padL} y1={y} x2={xOf(e.temperature)} y2={y} stroke={c} strokeWidth={VIZ.stroke.base} strokeLinecap="round" />
            <circle cx={xOf(e.temperature)} cy={y} r={4.4} fill={c} />
            <text
              x={xOf(e.temperature) + 10}
              y={y + 4}
              fontSize={VIZ.font.small}
              fill={c}
              fontWeight={700}
              fontFamily="ui-sans-serif, system-ui, sans-serif"
            >
              {e.temperature}
            </text>
            {e.note ? (
              <text
                x={padL + 6}
                y={y - 9}
                fontSize={VIZ.font.small}
                fill="#93a7bd"
                fontFamily="ui-sans-serif, system-ui, sans-serif"
              >
                {e.note}
              </text>
            ) : null}
          </g>
        );
      })}
    </Frame>
  );
}

/* ------------------------------------------------------------------ */
/* VisualCaption — a standalone figure note.                           */
/*                                                                     */
/* Used where a diagram needs a source-model disclaimer next to it —   */
/* for instance the two readings of trisilylamine's planarity — so the */
/* examination model and the modern interpretation are never silently  */
/* merged into one picture.                                            */
/* ------------------------------------------------------------------ */
export function VisualCaption({
  kind = "note",
  title,
  body,
}: {
  kind?: "note" | "exam-model" | "modern" | "trap";
  title?: string;
  body: string;
}) {
  const palette = {
    note: { edge: VIZ.frame, ink: "#93a7bd", bg: "rgba(255,255,255,.03)", lead: "Note" },
    "exam-model": { edge: VIZ.warn, ink: VIZ.warn, bg: VIZ.warnSoft, lead: "Examination model" },
    modern: { edge: VIZ.accent, ink: VIZ.accent, bg: VIZ.accentSoft, lead: "Modern interpretation" },
    trap: { edge: VIZ.bad, ink: VIZ.bad, bg: VIZ.badSoft, lead: "JEE trap" },
  }[kind];

  return (
    <div
      className="my-3 rounded-xl px-4 py-3 text-[13px] leading-6"
      style={{ background: palette.bg, border: `1px solid ${palette.edge}` }}
    >
      <span className="font-black uppercase tracking-wide" style={{ color: palette.ink, fontSize: 11 }}>
        {title ?? palette.lead}
      </span>
      <div className="mt-1 text-slate-300">{body}</div>
    </div>
  );
}
