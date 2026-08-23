import { Frame } from "./Frame";
import { VIZ } from "./theme";

export interface MOLevel {
  /** Orbital label, e.g. "π*2p", "σ2p". Rendered as-is, so pass real symbols. */
  label: string;
  /** Energy in arbitrary units — larger is higher up the diagram. */
  energy: number;
  /** Electrons in this level: 0, 1 or 2. For a degenerate pair use `degenerate`. */
  electrons: number;
  /** A degenerate pair (e.g. the two π*2p) drawn side by side. */
  degenerate?: { electrons: number };
  /** Antibonding levels get the warn colour and a dashed tie line. */
  anti?: boolean;
  /** Call this level out — the electron that decides the answer. */
  mark?: boolean;
}

export interface MODiagramProps {
  caption: string;
  describe?: string;
  /** Left/right atomic-orbital column headers, e.g. "N" and "O". */
  left: string;
  right: string;
  centre?: string;
  levels: MOLevel[];
  /** Short conclusions printed under the diagram, e.g. bond order. */
  results?: string[];
  w?: number;
  h?: number;
}

/**
 * A molecular-orbital energy diagram. Built for the cases where MO theory does
 * real work in this chapter: O2's paramagnetism, NO's half bond and its
 * contraction on ionisation, and the delocalised π systems.
 */
export function MODiagram({
  caption, describe, left, right, centre = "MO", levels, results = [], w = 560, h = 420,
}: MODiagramProps) {
  const padTop = 40, padBottom = results.length ? 58 : 30;
  const plotH = h - padTop - padBottom;
  const energies = levels.map((l) => l.energy);
  const lo = Math.min(...energies), hi = Math.max(...energies);
  const span = hi - lo || 1;
  const yOf = (e: number) => padTop + plotH - ((e - lo) / span) * plotH;

  const cx = w / 2;
  const lvlW = 54;

  const electronPair = (x: number, y: number, n: number, colour: string) => {
    if (n <= 0) return null;
    const positions = n === 1 ? [0] : [-7, 7];
    return positions.map((dx, i) => (
      <g key={i}>
        {/* up arrow for first, down for second — spin explicit */}
        <line x1={x + dx} y1={y + 7} x2={x + dx} y2={y - 7} stroke={colour} strokeWidth={1.7} strokeLinecap="round" />
        <path
          d={i === 1 ? `M${x + dx - 3},${y + 3} L${x + dx},${y + 7} L${x + dx + 3},${y + 3}` : `M${x + dx - 3},${y - 3} L${x + dx},${y - 7} L${x + dx + 3},${y - 3}`}
          fill="none" stroke={colour} strokeWidth={1.7} strokeLinejoin="round"
        />
      </g>
    ));
  };

  return (
    <Frame caption={caption} describe={describe} w={w} h={h} maxWidth={w}>
      {/* column headers */}
      <text x={44} y={24} fontSize={VIZ.font.title} fontWeight={800} fill={VIZ.atomText} textAnchor="middle" fontFamily="ui-sans-serif, system-ui, sans-serif">{left}</text>
      <text x={cx} y={24} fontSize={VIZ.font.title} fontWeight={800} fill={VIZ.accent} textAnchor="middle" fontFamily="ui-sans-serif, system-ui, sans-serif">{centre}</text>
      <text x={w - 44} y={24} fontSize={VIZ.font.title} fontWeight={800} fill={VIZ.atomText} textAnchor="middle" fontFamily="ui-sans-serif, system-ui, sans-serif">{right}</text>

      {/* energy axis */}
      <line x1={18} y1={padTop - 8} x2={18} y2={padTop + plotH + 8} stroke={VIZ.frame} strokeWidth={1.2} />
      <path d={`M14,${padTop - 4} L18,${padTop - 11} L22,${padTop - 4}`} fill="none" stroke={VIZ.frame} strokeWidth={1.2} />
      <text x={11} y={padTop + plotH / 2} fontSize={VIZ.font.small} fill="#93a7bd" textAnchor="middle" transform={`rotate(-90 11 ${padTop + plotH / 2})`} fontFamily="ui-sans-serif, system-ui, sans-serif">energy</text>

      {levels.map((l, i) => {
        const y = yOf(l.energy);
        const colour = l.anti ? VIZ.warn : VIZ.good;
        const isDeg = !!l.degenerate;
        const slots = isDeg ? [cx - lvlW * 0.62, cx + lvlW * 0.62] : [cx];
        return (
          <g key={i}>
            {l.mark ? (
              <rect x={cx - lvlW * 1.35} y={y - 20} width={lvlW * 2.7} height={40} rx={8} fill={VIZ.accentSoft} />
            ) : null}
            {slots.map((sx, j) => (
              <g key={j}>
                <line
                  x1={sx - lvlW / 2} y1={y} x2={sx + lvlW / 2} y2={y}
                  stroke={colour} strokeWidth={VIZ.stroke.base} strokeLinecap="round"
                />
                {electronPair(sx, y, j === 0 ? l.electrons : l.degenerate!.electrons, VIZ.atomText)}
              </g>
            ))}
            <text
              x={cx + lvlW * (isDeg ? 1.45 : 0.75)} y={y + 4}
              fontSize={VIZ.font.label} fill={colour} fontWeight={700} textAnchor="start"
              fontFamily="ui-sans-serif, system-ui, sans-serif"
            >
              {l.label}
            </text>
          </g>
        );
      })}

      {results.length ? (
        <g>
          <line x1={24} y1={h - padBottom + 16} x2={w - 24} y2={h - padBottom + 16} stroke={VIZ.frame} strokeWidth={1} />
          {results.map((r, i) => (
            <text
              key={i} x={cx} y={h - padBottom + 34 + i * 15}
              fontSize={VIZ.font.label} fill={VIZ.accent} textAnchor="middle" fontWeight={650}
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
