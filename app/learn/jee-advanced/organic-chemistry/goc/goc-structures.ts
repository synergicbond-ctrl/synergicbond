// General Organic Chemistry — hand-authored SVG structure/mechanism figures,
// dark-theme flat style matching the established site convention (see
// bridge-structures.ts / dipole-structures.ts: rounded card, flat-fill atom
// circles, hairline bonds, curved arrows for electron-pushing mechanisms).
//
// Long descriptive captions are NOT baked into the SVG (SVG <text> does not
// wrap) — they are passed separately to the Figure component's own caption
// prop, which is a normal HTML element and wraps correctly. Only short,
// load-bearing in-diagram labels (atom symbols, "empty p orbital", etc.) are
// drawn inside the SVG itself, and even those go through wrapTitle() to stay
// inside the card at the given width.

const BG = "#07131f";
const BORDER = "#213449";
const LINE = "#d3dbe6";
const ORBITAL = "#b376ff"; // matches --chem-orbital
const BOND_COLOR = "#37c8f4"; // matches --chem-bond
const ARROW = "#f4a94f"; // curved electron-pushing arrows

const ELEMENT: Record<string, { fill: string; text: string }> = {
  C: { fill: "#3a4a5c", text: "#d3dbe6" },
  H: { fill: "#1c2b3a", text: "#d3dbe6" },
  O: { fill: "#e8735f", text: "#1c0b05" },
  N: { fill: "#6fb3d9", text: "#0b1420" },
};

function atomEl(x: number, y: number, r: number, sym: string, label?: string, fontSize = 12) {
  const c = ELEMENT[sym] ?? { fill: "#3a4a5c", text: "#d3dbe6" };
  const t = label ?? sym;
  return `<circle cx="${x}" cy="${y}" r="${r}" fill="${c.fill}" stroke="${LINE}" stroke-width="1.4"/><text x="${x}" y="${y + fontSize * 0.36}" font-size="${fontSize}" text-anchor="middle" fill="${c.text}">${t}</text>`;
}

function bond(x1: number, y1: number, x2: number, y2: number, color = LINE, width = 2.2) {
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${width}" stroke-linecap="round"/>`;
}

/** A proper p-orbital dumbbell: two teardrop lobes meeting at the nucleus, not one stretched ellipse. */
function pOrbital(cx: number, cy: number, lobeLen: number, lobeWidth: number, color = ORBITAL) {
  const top = `M ${cx} ${cy} C ${cx - lobeWidth} ${cy - lobeLen * 0.35}, ${cx - lobeWidth * 0.7} ${cy - lobeLen}, ${cx} ${cy - lobeLen} C ${cx + lobeWidth * 0.7} ${cy - lobeLen}, ${cx + lobeWidth} ${cy - lobeLen * 0.35}, ${cx} ${cy} Z`;
  const bot = `M ${cx} ${cy} C ${cx - lobeWidth} ${cy + lobeLen * 0.35}, ${cx - lobeWidth * 0.7} ${cy + lobeLen}, ${cx} ${cy + lobeLen} C ${cx + lobeWidth * 0.7} ${cy + lobeLen}, ${cx + lobeWidth} ${cy + lobeLen * 0.35}, ${cx} ${cy} Z`;
  return `<path d="${top}" fill="${color}" fill-opacity="0.3" stroke="${color}" stroke-width="1.6"/><path d="${bot}" fill="${color}" fill-opacity="0.3" stroke="${color}" stroke-width="1.6"/>`;
}

/** Word-wraps text into tspans that stay within maxWidth at the given font size (monospace-ish estimate). */
function wrapTitle(x: number, y: number, text: string, maxWidth: number, fontSize: number, color = LINE, lineHeight = 18) {
  const avgChar = fontSize * 0.56;
  const maxChars = Math.max(10, Math.floor(maxWidth / avgChar));
  const words = text.split(" ");
  const lines: string[] = [];
  let current = "";
  for (const w of words) {
    const candidate = current ? `${current} ${w}` : w;
    if (candidate.length > maxChars && current) {
      lines.push(current);
      current = w;
    } else {
      current = candidate;
    }
  }
  if (current) lines.push(current);
  const tspans = lines
    .map((line, i) => `<tspan x="${x}" dy="${i === 0 ? 0 : lineHeight}">${line}</tspan>`)
    .join("");
  return `<text y="${y}" font-size="${fontSize}" text-anchor="middle" fill="${color}">${tspans}</text>`;
}

/** A curved, single-headed electron-pushing arrow between two points, bowing toward (bowX, bowY). */
function curvedArrow(x1: number, y1: number, x2: number, y2: number, bowX: number, bowY: number, color = ARROW) {
  const id = `arrow-${Math.round(x1)}-${Math.round(y1)}-${Math.round(x2)}-${Math.round(y2)}`;
  return `<defs><marker id="${id}" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="${color}"/></marker></defs><path d="M ${x1} ${y1} Q ${bowX} ${bowY} ${x2} ${y2}" fill="none" stroke="${color}" stroke-width="1.8" marker-end="url(#${id})"/>`;
}

function card(width: number, height: number, inner: string) {
  return `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;"><rect x="0" y="0" width="${width}" height="${height}" fill="${BG}" rx="12"/><rect x="0.75" y="0.75" width="${width - 1.5}" height="${height - 1.5}" fill="none" stroke="${BORDER}" stroke-width="1.5" rx="12"/>${inner}</svg>`;
}

// ── Figure 1: carbocation geometry — sp2 planar carbon, empty p orbital ─────
export const CARBOCATION_STRUCTURE = card(
  520,
  300,
  `
  ${wrapTitle(260, 34, "tert-Butyl cation: sp2, planar, empty p orbital perpendicular", 460, 14)}
  <g transform="translate(260,175)">
    ${bond(0, 0, -85, 48, LINE)}
    ${bond(0, 0, 85, 48, LINE)}
    ${bond(0, 0, 0, -75, LINE)}
    ${pOrbital(0, 0, 78, 13)}
    ${atomEl(0, 0, 19, "C", "C+", 13)}
    ${atomEl(-100, 60, 18, "C", "CH3", 10)}
    ${atomEl(100, 60, 18, "C", "CH3", 10)}
    ${atomEl(0, -92, 18, "C", "CH3", 10)}
    <text x="70" y="-95" font-size="11.5" fill="${ORBITAL}">empty p orbital</text>
  </g>
  `
);
export const CARBOCATION_STRUCTURE_CAPTION =
  "The three methyl groups sit in one plane (sp2, 120 degrees apart); the empty p orbital is perpendicular to that plane, open to attack from either face.";

// ── Figure 2: resonance structures of the allyl cation, with curved arrows ─
export const ALLYL_RESONANCE = card(
  600,
  240,
  `
  ${wrapTitle(300, 34, "Allyl cation: two contributing resonance structures", 560, 14)}
  <g transform="translate(75,140)">
    ${atomEl(0, 0, 17, "C", "C", 11)}
    ${bond(17, 0, 73, 0, BOND_COLOR, 3)}
    ${atomEl(90, 0, 17, "C", "C", 11)}
    ${bond(107, 0, 153, 0, LINE)}
    ${atomEl(170, 0, 17, "C", "C+", 10)}
    ${curvedArrow(90, -24, 30, -24, 60, -50)}
  </g>
  <text x="300" y="148" font-size="26" text-anchor="middle" fill="${LINE}">&#8596;</text>
  <g transform="translate(360,140)">
    ${atomEl(0, 0, 17, "C", "C+", 10)}
    ${bond(17, 0, 63, 0, LINE)}
    ${atomEl(80, 0, 17, "C", "C", 11)}
    ${bond(97, 0, 153, 0, BOND_COLOR, 3)}
    ${atomEl(170, 0, 17, "C", "C", 11)}
  </g>
  `
);
export const ALLYL_RESONANCE_CAPTION =
  "The positive charge and the pi bond swap ends between the two structures; the real molecule is the resonance hybrid — equal C-C bond lengths, charge shared over both terminal carbons.";

// ── Figure 3: hyperconjugation — sigma(C-H) overlapping the empty p orbital ─
export const HYPERCONJUGATION_OVERLAP = card(
  520,
  300,
  `
  ${wrapTitle(260, 34, "Hyperconjugation: sigma(C-H) donating into the empty p orbital", 460, 14)}
  <g transform="translate(280,175)">
    ${pOrbital(0, -10, 68, 11)}
    ${atomEl(0, 0, 20, "C", "C+", 13)}
    ${bond(0, 0, -95, 55, LINE)}
    ${atomEl(-112, 65, 18, "C", "CH", 10)}
    ${bond(-128, 78, -160, 105, LINE, 1.8)}
    ${atomEl(-178, 118, 13, "H", "H", 9)}
    <path d="M -160 105 Q -90 30 -10 -40" fill="none" stroke="${ORBITAL}" stroke-width="1.7" stroke-dasharray="4,4"/>
    <text x="70" y="-80" font-size="11" fill="${ORBITAL}">empty p orbital</text>
  </g>
  `
);
export const HYPERCONJUGATION_OVERLAP_CAPTION =
  "An adjacent sigma(C-H) bond overlaps with the empty p orbital, delocalising electron density into it — the structural picture behind 'no-bond resonance.' More alpha C-H bonds means more stabilisation.";

// ── Figure 4: Huckel aromaticity — benzene's 6 pi electrons in a delocalised ring
export const HUCKEL_BENZENE = card(
  460,
  300,
  `
  ${wrapTitle(230, 34, "Benzene: 6 pi electrons, 4n+2 with n=1 &#8212; aromatic", 420, 14)}
  <g transform="translate(230,185)">
    ${(() => {
      const R = 70;
      const pts: [number, number][] = Array.from({ length: 6 }, (_, i) => {
        const a = (Math.PI / 3) * i - Math.PI / 2;
        return [R * Math.cos(a), R * Math.sin(a)];
      }) as [number, number][];
      let out = "";
      for (let i = 0; i < 6; i++) {
        const [x1, y1] = pts[i];
        const [x2, y2] = pts[(i + 1) % 6];
        out += bond(x1, y1, x2, y2, LINE, 2.2);
      }
      for (const [x, y] of pts) out += atomEl(x, y, 14, "C", "C", 10);
      return out;
    })()}
    <circle cx="0" cy="0" r="42" fill="none" stroke="${ORBITAL}" stroke-width="2.4"/>
    <text x="0" y="5" font-size="15" text-anchor="middle" fill="${ORBITAL}">6&#960;</text>
  </g>
  `
);
export const HUCKEL_BENZENE_CAPTION =
  "Cyclic, fully conjugated, planar, and 4n+2 pi electrons (n=1) — all four Huckel conditions satisfied at once.";
