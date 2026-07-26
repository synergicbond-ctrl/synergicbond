import { Frame } from "./Frame";
import { Formula, } from "./Frame";
import { VIZ, elementColour, formulaRuns } from "./theme";

export interface Atom {
  id: string;
  el: string;
  x: number;
  y: number;
  /** Formal charge shown as a superscript badge, e.g. "+" or "2-". */
  charge?: string;
  /** Number of lone pairs to draw, placed on the given side. */
  lp?: number;
  lpAt?: "n" | "s" | "e" | "w" | "ne" | "nw" | "se" | "sw";
  /** Highlight this atom (central atom, site of attack). */
  mark?: boolean;
}

export interface Bond {
  a: string;
  b: string;
  /** 1, 2, 3 for σ/double/triple. 1.5 draws a solid + dashed pair. */
  order?: number;
  /** dashed = partial/bridge/H-bond; bold = coming toward viewer. */
  style?: "solid" | "dashed" | "bold";
  /** Small label sat on the bond, e.g. a bond length. */
  label?: string;
}

export interface MoleculeDiagramProps {
  caption: string;
  describe?: string;
  atoms: Atom[];
  bonds: Bond[];
  /** Free-floating annotations (angles, notes). */
  notes?: { x: number; y: number; text: string; tone?: "accent" | "warn" | "bad" | "good" | "plain" }[];
  w?: number;
  h?: number;
}

const TONE = {
  accent: VIZ.accent,
  warn: VIZ.warn,
  bad: VIZ.bad,
  good: VIZ.good,
  plain: "#93a7bd",
};

const ATOM_R = 15;

function offsetsFor(dir: NonNullable<Atom["lpAt"]>) {
  const d = 22;
  const map: Record<string, [number, number]> = {
    n: [0, -d], s: [0, d], e: [d, 0], w: [-d, 0],
    ne: [d * 0.72, -d * 0.72], nw: [-d * 0.72, -d * 0.72],
    se: [d * 0.72, d * 0.72], sw: [-d * 0.72, d * 0.72],
  };
  return map[dir] ?? map.n;
}

/**
 * A general 2-D structural formula: atoms at authored coordinates, bonds of any
 * order, lone pairs, formal charges and free annotations. Deliberately not a
 * chemistry engine — geometry is authored so it can be made *correct* for the
 * point being taught (e.g. a genuinely 90° angle where that is the argument).
 */
export function MoleculeDiagram({
  caption, describe, atoms, bonds, notes = [], w = 520, h = 300,
}: MoleculeDiagramProps) {
  const at = (id: string) => atoms.find((a) => a.id === id);

  return (
    <Frame caption={caption} describe={describe} w={w} h={h}>
      {/* bonds first so atom discs sit on top of the line ends */}
      {bonds.map((bd, i) => {
        const A = at(bd.a); const B = at(bd.b);
        if (!A || !B) return null;
        const dx = B.x - A.x, dy = B.y - A.y;
        const len = Math.hypot(dx, dy) || 1;
        const ux = dx / len, uy = dy / len;
        // stop the line short of each atom disc
        const x1 = A.x + ux * ATOM_R, y1 = A.y + uy * ATOM_R;
        const x2 = B.x - ux * ATOM_R, y2 = B.y - uy * ATOM_R;
        const nx = -uy, ny = ux;
        const order = bd.order ?? 1;
        const dash = bd.style === "dashed" ? "5 4" : undefined;
        const width = bd.style === "bold" ? VIZ.stroke.thick : VIZ.stroke.base;
        const lines: number[][] = [];
        if (order === 1 || order === 1.5) lines.push([0]);
        if (order === 2) lines.push([-3.2], [3.2]);
        if (order === 3) lines.push([-4.6], [0], [4.6]);
        if (order === 1.5) lines.push([3.6]);
        return (
          <g key={i}>
            {lines.map((o, j) => (
              <line
                key={j}
                x1={x1 + nx * o[0]} y1={y1 + ny * o[0]}
                x2={x2 + nx * o[0]} y2={y2 + ny * o[0]}
                stroke={VIZ.bond}
                strokeWidth={width}
                strokeLinecap="round"
                strokeDasharray={order === 1.5 && j === lines.length - 1 ? "5 4" : dash}
              />
            ))}
            {bd.label ? (
              <text
                x={(x1 + x2) / 2 + nx * 13} y={(y1 + y2) / 2 + ny * 13 + 3.5}
                fontSize={VIZ.font.small} fill={TONE.plain} textAnchor="middle"
                fontFamily="ui-sans-serif, system-ui, sans-serif"
              >
                {bd.label}
              </text>
            ) : null}
          </g>
        );
      })}

      {/* lone pairs */}
      {atoms.map((a) =>
        a.lp
          ? Array.from({ length: a.lp }).map((_, k) => {
              const [ox, oy] = offsetsFor(a.lpAt ?? "n");
              const spread = (k - (a.lp! - 1) / 2) * 13;
              const px = a.x + ox + (oy === 0 ? 0 : spread);
              const py = a.y + oy + (ox === 0 ? 0 : spread);
              return (
                <g key={`${a.id}-lp-${k}`}>
                  <circle cx={px - 3.2} cy={py} r={2.1} fill={VIZ.violet} />
                  <circle cx={px + 3.2} cy={py} r={2.1} fill={VIZ.violet} />
                </g>
              );
            })
          : null
      )}

      {/* atoms */}
      {atoms.map((a) => (
        <g key={a.id}>
          {a.mark ? <circle cx={a.x} cy={a.y} r={ATOM_R + 5} fill={VIZ.accentSoft} /> : null}
          <circle cx={a.x} cy={a.y} r={ATOM_R} fill={VIZ.surface} stroke={elementColour(a.el)} strokeWidth={VIZ.stroke.thin} />
          <text
            x={a.x} y={a.y + 5} fontSize={VIZ.font.atom} fontWeight={800}
            fill={elementColour(a.el)} textAnchor="middle"
            fontFamily="ui-sans-serif, system-ui, sans-serif"
          >
            {a.el}
          </text>
          {a.charge ? (
            <text
              x={a.x + ATOM_R - 1} y={a.y - ATOM_R + 5} fontSize={VIZ.font.sub + 1}
              fontWeight={800} fill={VIZ.accent} textAnchor="start"
              fontFamily="ui-sans-serif, system-ui, sans-serif"
            >
              {a.charge}
            </text>
          ) : null}
        </g>
      ))}

      {/* notes */}
      {notes.map((n, i) => (
        <text
          key={i} x={n.x} y={n.y} fontSize={VIZ.font.label}
          fill={TONE[n.tone ?? "plain"]} textAnchor="middle" fontWeight={600}
          fontFamily="ui-sans-serif, system-ui, sans-serif"
        >
          {n.text}
        </text>
      ))}
    </Frame>
  );
}

/** Convenience wrapper: a row of small labelled structures. */
export function StructureGallery({
  caption, describe, items, w = 640,
}: {
  caption: string;
  describe?: string;
  items: { label: string; sub?: string; atoms: Atom[]; bonds: Bond[] }[];
  w?: number;
}) {
  const cols = Math.min(items.length, 3);
  const cellW = w / cols;
  const cellH = 175;
  const rows = Math.ceil(items.length / cols);
  const h = rows * cellH + 12;

  return (
    <Frame caption={caption} describe={describe} w={w} h={h} maxWidth={w}>
      {items.map((it, idx) => {
        const cx = (idx % cols) * cellW;
        const cy = Math.floor(idx / cols) * cellH;
        const at = (id: string) => it.atoms.find((a) => a.id === id);
        return (
          <g key={idx} transform={`translate(${cx},${cy})`}>
            {it.bonds.map((bd, i) => {
              const A = at(bd.a); const B = at(bd.b);
              if (!A || !B) return null;
              const dx = B.x - A.x, dy = B.y - A.y;
              const len = Math.hypot(dx, dy) || 1;
              const ux = dx / len, uy = dy / len;
              const nx = -uy, ny = ux;
              const order = bd.order ?? 1;
              const offs = order === 2 ? [-2.8, 2.8] : order === 3 ? [-4, 0, 4] : [0];
              return offs.map((o, j) => (
                <line
                  key={`${i}-${j}`}
                  x1={A.x + ux * 12 + nx * o} y1={A.y + uy * 12 + ny * o}
                  x2={B.x - ux * 12 + nx * o} y2={B.y - uy * 12 + ny * o}
                  stroke={VIZ.bond} strokeWidth={VIZ.stroke.thin} strokeLinecap="round"
                  strokeDasharray={bd.style === "dashed" ? "4 3" : undefined}
                />
              ));
            })}
            {it.atoms.map((a) => (
              <g key={a.id}>
                <circle cx={a.x} cy={a.y} r={11.5} fill={VIZ.surface} stroke={elementColour(a.el)} strokeWidth={1.2} />
                <text x={a.x} y={a.y + 4} fontSize={11.5} fontWeight={800} fill={elementColour(a.el)} textAnchor="middle" fontFamily="ui-sans-serif, system-ui, sans-serif">{a.el}</text>
              </g>
            ))}
            <Formula parts={formulaRuns(it.label)} x={cellW / 2} y={cellH - 26} size={13.5} fill={VIZ.accent} />
            {it.sub ? (
              <text x={cellW / 2} y={cellH - 10} fontSize={VIZ.font.small} fill="#93a7bd" textAnchor="middle" fontFamily="ui-sans-serif, system-ui, sans-serif">{it.sub}</text>
            ) : null}
          </g>
        );
      })}
    </Frame>
  );
}
