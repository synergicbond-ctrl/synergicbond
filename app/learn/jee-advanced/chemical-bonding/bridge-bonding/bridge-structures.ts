// Bridge Bonding — hand-authored SVG structure figures, dark-theme flat style
// matching the rest of the site (see dipole-structures.ts for the established
// convention: rounded card, flat-fill atom circles, hairline bonds).
//
// Colour convention specific to this chapter, layered on top of the shared
// palette: bridge bonds are colour-coded by electron count so the distinction
// is visible at a glance —
//   AMBER = 3c-2e (electron-deficient bridge: H or alkyl, no lone pair)
//   TEAL  = 3c-4e (donor bridge: halide / lone-pair donor) — reuses the site's
//           existing lone-pair cyan, since a 3c-4e bridge literally *is* a
//           donated lone pair.

const BG = "#07131f";
const BORDER = "#213449";
const LINE = "#d3dbe6";
export const AMBER = "#f4a94f";
export const TEAL = "#76dce8";

type Pt = { x: number; y: number };

const ELEMENT: Record<string, { fill: string; text: string }> = {
  H: { fill: "#1c2b3a", text: "#d3dbe6" },
  B: { fill: "#e8a06b", text: "#241505" },
  Al: { fill: "#7fb3e0", text: "#0b1420" },
  Be: { fill: "#b98be0", text: "#1c0b2b" },
  Ga: { fill: "#c9a0dc", text: "#1c0b2b" },
  In: { fill: "#f48fb1", text: "#2b0b18" },
  Tl: { fill: "#9aa0a6", text: "#0b1420" },
  Cl: { fill: "#5fd382", text: "#053014" },
  F: { fill: "#8be28b", text: "#0b1420" },
  Br: { fill: "#c9915a", text: "#241505" },
  I: { fill: "#8b6fd9", text: "#fff" },
  Fe: { fill: "#e0954b", text: "#241505" },
  Li: { fill: "#d896e0", text: "#1c0b2b" },
  N: { fill: "#6fb3d9", text: "#0b1420" },
  C: { fill: "#3a4a5c", text: "#d3dbe6" },
  Mg: { fill: "#4fd1c5", text: "#0b1420" },
};

function fontFor(r: number) {
  if (r >= 15) return 13;
  if (r >= 12) return 11;
  if (r >= 10) return 10;
  return 9;
}

function atomEl(x: number, y: number, r: number, sym: string, label?: string) {
  const c = ELEMENT[sym] ?? { fill: "#3a4a5c", text: "#d3dbe6" };
  const t = label ?? sym;
  return `<circle cx="${x}" cy="${y}" r="${r}" fill="${c.fill}" stroke="${LINE}" stroke-width="1.4"/><text x="${x}" y="${y + fontFor(r) * 0.36}" font-size="${fontFor(r)}" text-anchor="middle" fill="${c.text}">${t}</text>`;
}

function group(x: number, y: number, label: string) {
  const w = Math.max(30, label.length * 8.4 + 12);
  const h = 21;
  return `<rect x="${x - w / 2}" y="${y - h / 2}" width="${w}" height="${h}" rx="5" fill="#16222f" stroke="#3a4f63" stroke-width="1.2"/><text x="${x}" y="${y + 4}" font-size="11" text-anchor="middle" fill="${LINE}">${label}</text>`;
}

function bond(x1: number, y1: number, x2: number, y2: number, color = LINE, width = 2.2) {
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${width}" stroke-linecap="round"/>`;
}

function dash(x1: number, y1: number, x2: number, y2: number, color: string, width = 2.6) {
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${width}" stroke-dasharray="5,4" stroke-linecap="round"/>`;
}

function dots(x: number, y: number, ux: number, uy: number, color: string) {
  const px = -uy, py = ux, g = 6;
  return `<circle cx="${x + px * g}" cy="${y + py * g}" r="2.1" fill="${color}"/><circle cx="${x - px * g}" cy="${y - py * g}" r="2.1" fill="${color}"/>`;
}

function card(w: number, h: number, inner: string, title?: string) {
  const t = title
    ? `<text x="${w / 2}" y="22" font-size="13" font-weight="bold" text-anchor="middle" fill="${LINE}">${title}</text>`
    : "";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}">
<rect x="1" y="1" width="${w - 2}" height="${h - 2}" rx="14" fill="${BG}" stroke="${BORDER}" stroke-width="1.5"/>
${t}${inner}
</svg>`;
}

// ── generic M2X6 bridged-dimer template ─────────────────────────────────────
function bridgedDimer(opts: {
  w?: number; h?: number;
  M: string; Mlabel?: string;
  Tsym: string; Tlabel: string; Tgroup?: boolean;
  Bsym: string; Blabel: string; Bgroup?: boolean;
  bridgeColor: string;
  lonePairs?: boolean;
}) {
  const w = opts.w ?? 340, h = opts.h ?? 230;
  const cx = w / 2, cy = h / 2 + 8;
  const ML: Pt = { x: cx - 55, y: cy }, MR: Pt = { x: cx + 55, y: cy };
  const Ttl: Pt = { x: cx - 122, y: cy - 68 }, Tbl: Pt = { x: cx - 122, y: cy + 68 };
  const Ttr: Pt = { x: cx + 122, y: cy - 68 }, Tbr: Pt = { x: cx + 122, y: cy + 68 };
  const Bt: Pt = { x: cx, y: cy - 60 }, Bb: Pt = { x: cx, y: cy + 60 };

  let s = "";
  s += bond(ML.x, ML.y, Ttl.x, Ttl.y) + bond(ML.x, ML.y, Tbl.x, Tbl.y);
  s += bond(MR.x, MR.y, Ttr.x, Ttr.y) + bond(MR.x, MR.y, Tbr.x, Tbr.y);
  s += dash(ML.x, ML.y, Bt.x, Bt.y, opts.bridgeColor) + dash(MR.x, MR.y, Bt.x, Bt.y, opts.bridgeColor);
  s += dash(ML.x, ML.y, Bb.x, Bb.y, opts.bridgeColor) + dash(MR.x, MR.y, Bb.x, Bb.y, opts.bridgeColor);
  if (opts.lonePairs) s += dots(Bt.x, Bt.y, 1, 0, opts.bridgeColor) + dots(Bb.x, Bb.y, 1, 0, opts.bridgeColor);

  s += atomEl(ML.x, ML.y, 16, opts.M, opts.Mlabel) + atomEl(MR.x, MR.y, 16, opts.M, opts.Mlabel);
  const drawT = (p: Pt) => (opts.Tgroup ? group(p.x, p.y, opts.Tlabel) : atomEl(p.x, p.y, 13, opts.Tsym, opts.Tlabel));
  const drawB = (p: Pt) => (opts.Bgroup ? group(p.x, p.y, opts.Blabel) : atomEl(p.x, p.y, 11, opts.Bsym, opts.Blabel));
  s += drawT(Ttl) + drawT(Tbl) + drawT(Ttr) + drawT(Tbr);
  s += drawB(Bt) + drawB(Bb);
  return card(w, h, s);
}

export const BRIDGE_STRUCTURES: Record<string, { svg: string; caption: string }> = {
  b2h6: {
    svg: bridgedDimer({ M: "B", Tsym: "H", Tlabel: "Hₜ", Bsym: "H", Blabel: "Hβ", bridgeColor: AMBER }),
    caption: "B₂H₆ — 4 terminal 2c–2e B–H bonds + 2 B–H–B 3c–2e bridges (D₂h). Gold = 3c–2e electron-deficient bridge.",
  },
  b2cl4: {
    svg: (() => {
      const w = 300, h = 190, y = 95;
      let s = bond(115, y, 185, y, LINE, 3.4);
      const pts: [Pt, string][] = [
        [{ x: 60, y: 50 }, "Cl"], [{ x: 60, y: 140 }, "Cl"],
        [{ x: 240, y: 50 }, "Cl"], [{ x: 240, y: 140 }, "Cl"],
      ];
      s += bond(115, y, 60, 50) + bond(115, y, 60, 140);
      s += bond(185, y, 240, 50) + bond(185, y, 240, 140);
      for (const [p, sym] of pts) s += atomEl(p.x, p.y, 13, sym, sym);
      s += atomEl(115, y, 15, "B") + atomEl(185, y, 15, "B");
      return card(w, h, s);
    })(),
    caption: "B₂Cl₄: staggered, a direct 2c–2e B–B bond — NOT a bridged structure.",
  },
  "bf3-resonance": {
    svg: (() => {
      const w = 380, h = 190;
      const mk = (cx: number, doubled: boolean) => {
        const B: Pt = { x: cx, y: 100 };
        const Ftop: Pt = { x: cx, y: 40 }, Fl: Pt = { x: cx - 55, y: 145 }, Fr: Pt = { x: cx + 55, y: 145 };
        let s = doubled
          ? bond(cx - 2, 52, cx - 2, 88) + bond(cx + 2, 52, cx + 2, 88)
          : bond(B.x, B.y, Ftop.x, Ftop.y);
        s += bond(B.x, B.y, Fl.x, Fl.y) + bond(B.x, B.y, Fr.x, Fr.y);
        s += atomEl(B.x, B.y, 14, "B") + atomEl(Ftop.x, Ftop.y, 12, "F") + atomEl(Fl.x, Fl.y, 12, "F") + atomEl(Fr.x, Fr.y, 12, "F");
        return s;
      };
      let s = mk(95, false);
      s += `<text x="190" y="105" font-size="24" text-anchor="middle" fill="${LINE}">↔</text>`;
      s += mk(285, true);
      s += `<text x="95" y="180" font-size="11" text-anchor="middle" fill="${LINE}">BF₃</text>`;
      s += `<text x="285" y="180" font-size="10" text-anchor="middle" fill="${LINE}">pπ–pπ resonance form</text>`;
      return card(w, h, s);
    })(),
    caption: "All B–F bonds are equivalent: d(B–F) ≈ 131 pm vs ≈152 pm for a pure single bond — strong F→B pπ donation relieves boron's electron deficiency without bridging.",
  },
  al2cl6: {
    svg: bridgedDimer({ M: "Al", Tsym: "Cl", Tlabel: "Clₜ", Bsym: "Cl", Blabel: "Clβ", bridgeColor: TEAL, lonePairs: true }),
    caption: "Al₂Cl₆: two μ-Cl bridges; Al approximately tetrahedral. Teal = 3c–4e donor bridge (dots mark the donated lone pair).",
  },
  al2br6: {
    svg: bridgedDimer({ M: "Al", Tsym: "Br", Tlabel: "Brₜ", Bsym: "Br", Blabel: "Brβ", bridgeColor: TEAL, lonePairs: true }),
    caption: "Al₂Br₆: two μ-Br bridges; Al approximately tetrahedral.",
  },
  "alf3-network": {
    svg: (() => {
      const w = 340, h = 340, cx = w / 2, cy = h / 2;
      let s = "";
      for (let k = 0; k < 6; k++) {
        const a = (Math.PI / 3) * k - Math.PI / 2;
        const fx = cx + Math.cos(a) * 62, fy = cy + Math.sin(a) * 62;
        const ax = cx + Math.cos(a) * 140, ay = cy + Math.sin(a) * 140;
        s += dash(cx, cy, fx, fy, TEAL) + dash(fx, fy, ax, ay, TEAL, 1.8);
        s += atomEl(fx, fy, 11, "F");
        s += `<text x="${ax}" y="${ay + 4}" font-size="11" text-anchor="middle" fill="${LINE}" opacity="0.7">Al</text>`;
      }
      s += atomEl(cx, cy, 16, "Al");
      return card(w, h, s);
    })(),
    caption: "AlF₃(s): AlF₆ octahedron, CN(Al) = 6 — corner-sharing 3-D network (contrast the BeF₄ tetrahedron, CN(Be) = 4). Fluoride always pushes the structure to a higher-CN ionic network.",
  },
  alh3: {
    svg: bridgedDimer({ M: "Al", Tsym: "H", Tlabel: "H", Bsym: "H", Blabel: "Hβ", bridgeColor: AMBER }),
    caption: "Condensed AlH₃: local fragment of the six-coordinate AlH₆ network. An isolated AlH₃ molecule is a trigonal-planar electron-deficient model; the true solid is this bridged network.",
  },
  "al-bh4-3": {
    svg: (() => {
      const w = 360, h = 360, cx = w / 2, cy = h / 2 + 10;
      let s = "";
      const angles = [-90, 30, 150];
      for (const deg of angles) {
        const a = (deg * Math.PI) / 180;
        const Bp: Pt = { x: cx + Math.cos(a) * 130, y: cy + Math.sin(a) * 130 };
        const h1: Pt = { x: cx + Math.cos(a) * 62 + Math.sin(a) * 16, y: cy + Math.sin(a) * 62 - Math.cos(a) * 16 };
        const h2: Pt = { x: cx + Math.cos(a) * 62 - Math.sin(a) * 16, y: cy + Math.sin(a) * 62 + Math.cos(a) * 16 };
        s += dash(cx, cy, h1.x, h1.y, AMBER) + dash(cx, cy, h2.x, h2.y, AMBER);
        s += dash(Bp.x, Bp.y, h1.x, h1.y, AMBER) + dash(Bp.x, Bp.y, h2.x, h2.y, AMBER);
        s += atomEl(h1.x, h1.y, 9, "H", "Hβ") + atomEl(h2.x, h2.y, 9, "H", "Hβ");
        const t1: Pt = { x: Bp.x + Math.cos(a + 0.55) * 46, y: Bp.y + Math.sin(a + 0.55) * 46 };
        const t2: Pt = { x: Bp.x + Math.cos(a - 0.55) * 46, y: Bp.y + Math.sin(a - 0.55) * 46 };
        s += bond(Bp.x, Bp.y, t1.x, t1.y) + bond(Bp.x, Bp.y, t2.x, t2.y);
        s += atomEl(t1.x, t1.y, 10, "H", "Hₜ") + atomEl(t2.x, t2.y, 10, "H", "Hₜ");
        s += atomEl(Bp.x, Bp.y, 13, "B");
      }
      s += atomEl(cx, cy, 16, "Al");
      return card(w, h, s);
    })(),
    caption: "Al(BH₄)₃: three bidentate BH₄ groups; six Al⋯H contacts, no direct Al–B bond. Each B–H–Al linkage is a 3c–2e bridge.",
  },
  al2me6: {
    svg: bridgedDimer({ M: "Al", Tsym: "C", Tlabel: "CH₃", Tgroup: true, Bsym: "C", Blabel: "CH₃β", Bgroup: true, bridgeColor: AMBER }),
    caption: "Al₂(CH₃)₆: two μ-CH₃ bridges; ∠Al–Cβ–Al ≈ 75°. Gold = 3c–2e (bridging carbon has no lone pair, unlike bridging Cl).",
  },
  al2ph6: {
    svg: bridgedDimer({ M: "Al", Tsym: "C", Tlabel: "Ph", Tgroup: true, Bsym: "C", Blabel: "Cβ", bridgeColor: AMBER }),
    caption: "Al₂Ph₆: two η¹-phenyl bridges through ipso carbons. Not simply Al₂Me₆ with CH₃ replaced by Ph — the phenyl-ring orientation and π interaction are part of the real structure.",
  },
  ga2cl6: {
    svg: bridgedDimer({ M: "Ga", Tsym: "Cl", Tlabel: "Clₜ", Bsym: "Cl", Blabel: "Clβ", bridgeColor: TEAL, lonePairs: true }),
    caption: "Ga₂Cl₆: isostructural with Al₂Cl₆ — two μ-Cl (3c–4e) bridges.",
  },
  ga2h6: {
    svg: bridgedDimer({ M: "Ga", Tsym: "H", Tlabel: "Hₜ", Bsym: "H", Blabel: "Hβ", bridgeColor: AMBER }),
    caption: "Ga₂H₆ (digallane): 4 terminal 2c–2e Ga–H bonds + 2 Ga–H–Ga 3c–2e bridges — structurally analogous to B₂H₆ but thermally far less stable.",
  },
  game3: {
    svg: (() => {
      const w = 260, h = 230, cx = w / 2, cy = 120;
      let s = bond(cx, cy, cx, 50) + bond(cx, cy, cx - 75, 165) + bond(cx, cy, cx + 75, 165);
      s += group(cx, 40, "CH₃") + group(cx - 80, 178, "CH₃") + group(cx + 80, 178, "CH₃");
      s += atomEl(cx, cy, 15, "Ga");
      return card(w, h, s);
    })(),
    caption: "GaMe₃: monomeric, trigonal planar — unlike Al₂Me₆, it does NOT dimerise. Weaker Ga Lewis acidity ⇒ no 3c–2e bridge.",
  },
  in2cl6: {
    svg: bridgedDimer({ M: "In", Tsym: "Cl", Tlabel: "Clₜ", Bsym: "Cl", Blabel: "Clβ", bridgeColor: TEAL, lonePairs: true }),
    caption: "In₂Cl₆: two μ-Cl (3c–4e) bridges — the vapour-phase dimer; the solid is an extended CN(In) = 6 layered lattice, as for AlCl₃(s).",
  },
  tli3: {
    svg: (() => {
      const w = 340, h = 180, y = 90;
      let s = dash(70, y, 145, y, TEAL) + dash(145, y, 220, y, TEAL);
      s += atomEl(70, y, 15, "I") + atomEl(145, y, 15, "I") + atomEl(220, y, 15, "I");
      s += atomEl(295, y, 16, "Tl", "Tl⁺");
      s += `<text x="145" y="35" font-size="11" text-anchor="middle" fill="${LINE}">I₃⁻ (linear — itself a 3c–4e system!)</text>`;
      return card(w, h, s);
    })(),
    caption: "Solid “TlI₃” is really Tl⁺[I–I–I]⁻ — an ionic Tl(I) triiodide, NOT a covalent Tl(III) iodide. One of the most repeated JEE traps.",
  },
  beh2: {
    svg: (() => {
      const w = 460, h = 210, y = 105;
      let s = bond(60, y, 120, y) + bond(120, y, 180, y);
      s += atomEl(60, y, 11, "H") + atomEl(120, y, 15, "Be") + atomEl(180, y, 11, "H");
      s += `<text x="120" y="175" font-size="11" text-anchor="middle" fill="${LINE}">isolated BeH₂: linear</text>`;

      const xs = [270, 350, 430];
      for (let i = 0; i < xs.length; i++) {
        const x = xs[i];
        if (i === 0) {
          s += bond(x, y, x - 45, y - 45) + atomEl(x - 45, y - 45, 10, "H");
          s += bond(x, y, x - 45, y + 45) + atomEl(x - 45, y + 45, 10, "H");
        }
        if (i === xs.length - 1) {
          s += bond(x, y, x + 45, y - 45) + atomEl(x + 45, y - 45, 10, "H");
          s += bond(x, y, x + 45, y + 45) + atomEl(x + 45, y + 45, 10, "H");
        }
        if (i < xs.length - 1) {
          const nx = xs[i + 1];
          const top = { x: (x + nx) / 2, y: y - 42 }, bot = { x: (x + nx) / 2, y: y + 42 };
          s += dash(x, y, top.x, top.y, AMBER) + dash(nx, y, top.x, top.y, AMBER);
          s += dash(x, y, bot.x, bot.y, AMBER) + dash(nx, y, bot.x, bot.y, AMBER);
          s += atomEl(top.x, top.y, 9, "H", "Hβ") + atomEl(bot.x, bot.y, 9, "H", "Hβ");
        }
      }
      for (const x of xs) s += atomEl(x, y, 15, "Be");
      s += `<text x="350" y="175" font-size="11" text-anchor="middle" fill="${LINE}">polymeric BeH₂: Be–H–Be 3c–2e bridges</text>`;
      return card(w, h, s);
    })(),
    caption: "BeH₂ — an isolated molecule is linear; the real substance is a 3c–2e Be–H–Be bridged polymer with local Be ≈ tetrahedral.",
  },
  becl2: {
    svg: (() => {
      const w = 560, h = 210, y = 105;
      let s = "";
      const Be1 = { x: 60, y }, Be2 = { x: 160, y };
      s += bond(Be1.x, y, 20, y) + atomEl(20, y, 11, "Cl");
      s += bond(Be2.x, y, 200, y) + atomEl(200, y, 11, "Cl");
      const t = { x: 110, y: y - 42 }, b = { x: 110, y: y + 42 };
      s += dash(Be1.x, y, t.x, t.y, TEAL) + dash(Be2.x, y, t.x, t.y, TEAL);
      s += dash(Be1.x, y, b.x, b.y, TEAL) + dash(Be2.x, y, b.x, b.y, TEAL);
      s += atomEl(t.x, t.y, 10, "Cl", "Clβ") + atomEl(b.x, b.y, 10, "Cl", "Clβ");
      s += atomEl(Be1.x, y, 14, "Be") + atomEl(Be2.x, y, 14, "Be");
      s += `<text x="110" y="175" font-size="10" text-anchor="middle" fill="${LINE}">Be₂Cl₄(g): vapour dimer</text>`;

      const xs = [300, 370, 440, 510];
      for (let i = 0; i < xs.length; i++) {
        const x = xs[i];
        if (i === 0) { s += bond(x, y, x - 40, y - 40) + atomEl(x - 40, y - 40, 10, "Cl"); s += bond(x, y, x - 40, y + 40) + atomEl(x - 40, y + 40, 10, "Cl"); }
        if (i === xs.length - 1) { s += bond(x, y, x + 40, y - 40) + atomEl(x + 40, y - 40, 10, "Cl"); s += bond(x, y, x + 40, y + 40) + atomEl(x + 40, y + 40, 10, "Cl"); }
        if (i < xs.length - 1) {
          const nx = xs[i + 1];
          const top = { x: (x + nx) / 2, y: y - 40 }, bot = { x: (x + nx) / 2, y: y + 40 };
          s += dash(x, y, top.x, top.y, TEAL) + dash(nx, y, top.x, top.y, TEAL);
          s += dash(x, y, bot.x, bot.y, TEAL) + dash(nx, y, bot.x, bot.y, TEAL);
          s += atomEl(top.x, top.y, 9, "Cl") + atomEl(bot.x, bot.y, 9, "Cl");
        }
      }
      for (const x of xs) s += atomEl(x, y, 14, "Be");
      s += `<text x="405" y="175" font-size="10" text-anchor="middle" fill="${LINE}">BeCl₂(s): edge-sharing BeCl₄ chain</text>`;
      return card(w, h, s, undefined);
    })(),
    caption: "The vapour dimer and the solid are distinct. Solid BeCl₂ is a chain of edge-sharing BeCl₄ tetrahedra; a flat rhombic chain is only a connectivity shorthand.",
  },
  "bef2-network": {
    svg: (() => {
      const w = 340, h = 340, cx = w / 2, cy = h / 2;
      let s = "";
      const angles = [-45, 45, 135, 225];
      for (const deg of angles) {
        const a = (deg * Math.PI) / 180;
        const fx = cx + Math.cos(a) * 60, fy = cy + Math.sin(a) * 60;
        const bx = cx + Math.cos(a) * 138, by = cy + Math.sin(a) * 138;
        s += dash(cx, cy, fx, fy, TEAL) + dash(fx, fy, bx, by, TEAL, 1.8);
        s += atomEl(fx, fy, 11, "F");
        s += `<text x="${bx}" y="${by + 4}" font-size="11" text-anchor="middle" fill="${LINE}" opacity="0.7">Be</text>`;
      }
      s += atomEl(cx, cy, 16, "Be");
      return card(w, h, s);
    })(),
    caption: "BeF₂(s): local BeF₄ tetrahedron — every F bridges to another Be, giving a 3-D corner-sharing network. Never draw solid BeF₂ as linear F–Be–F.",
  },
  beme2: {
    svg: (() => {
      const w = 460, h = 190, y = 100;
      const xs = [80, 170, 260, 350];
      let s = "";
      for (let i = 0; i < xs.length - 1; i++) {
        const x = xs[i], nx = xs[i + 1];
        const top = { x: (x + nx) / 2, y: y - 42 }, bot = { x: (x + nx) / 2, y: y + 42 };
        s += dash(x, y, top.x, top.y, AMBER) + dash(nx, y, top.x, top.y, AMBER);
        s += dash(x, y, bot.x, bot.y, AMBER) + dash(nx, y, bot.x, bot.y, AMBER);
        s += group(top.x, top.y, "CH₃") + group(bot.x, bot.y, "CH₃");
      }
      for (const x of xs) s += atomEl(x, y, 14, "Be");
      return card(w, h, s);
    })(),
    caption: "Polymeric Be(CH₃)₂: all methyl groups bridging (Be–C–Be)ₙ — a fully electron-deficient 3c–2e chain.",
  },
  "be-bh4-2": {
    svg: (() => {
      const w = 420, h = 180, y = 90;
      const B1 = { x: 60, y }, Be = { x: 210, y }, B2 = { x: 360, y };
      let s = "";
      s += bond(B1.x, y, 20, y - 40) + atomEl(20, y - 40, 10, "H", "Hₜ");
      s += bond(B1.x, y, 20, y + 40) + atomEl(20, y + 40, 10, "H", "Hₜ");
      s += bond(B2.x, y, 400, y - 40) + atomEl(400, y - 40, 10, "H", "Hₜ");
      s += bond(B2.x, y, 400, y + 40) + atomEl(400, y + 40, 10, "H", "Hₜ");
      const t1 = { x: 135, y: y - 40 }, b1 = { x: 135, y: y + 40 };
      const t2 = { x: 285, y: y - 40 }, b2 = { x: 285, y: y + 40 };
      s += dash(B1.x, y, t1.x, t1.y, AMBER) + dash(Be.x, y, t1.x, t1.y, AMBER) + atomEl(t1.x, t1.y, 9, "H", "Hβ");
      s += dash(B1.x, y, b1.x, b1.y, AMBER) + dash(Be.x, y, b1.x, b1.y, AMBER) + atomEl(b1.x, b1.y, 9, "H", "Hβ");
      s += dash(Be.x, y, t2.x, t2.y, AMBER) + dash(B2.x, y, t2.x, t2.y, AMBER) + atomEl(t2.x, t2.y, 9, "H", "Hβ");
      s += dash(Be.x, y, b2.x, b2.y, AMBER) + dash(B2.x, y, b2.x, b2.y, AMBER) + atomEl(b2.x, b2.y, 9, "H", "Hβ");
      s += atomEl(B1.x, y, 13, "B") + atomEl(Be.x, y, 15, "Be") + atomEl(B2.x, y, 13, "B");
      return card(w, h, s);
    })(),
    caption: "Be(BH₄)₂: two bidentate BH₄ groups; four Be⋯H contacts, no direct Be–B bond.",
  },
  "beh2-nme3": {
    svg: (() => {
      const w = 380, h = 220, y = 100;
      const ML = { x: 140, y }, MR = { x: 240, y };
      let s = "";
      s += bond(ML.x, y, 80, y) + atomEl(80, y, 11, "H");
      s += bond(MR.x, y, 300, y) + atomEl(300, y, 11, "H");
      s += bond(ML.x, y, 95, y + 65) + group(85, y + 82, "NMe₃");
      s += bond(MR.x, y, 285, y + 65) + group(295, y + 82, "NMe₃");
      const t = { x: 190, y: y - 45 }, b = { x: 190, y: y + 35 };
      s += dash(ML.x, y, t.x, t.y, AMBER) + dash(MR.x, y, t.x, t.y, AMBER) + atomEl(t.x, t.y, 10, "H", "Hβ");
      s += atomEl(ML.x, y, 14, "Be") + atomEl(MR.x, y, 14, "Be");
      void b;
      return card(w, h, s);
    })(),
    caption: "(BeH₂·NMe₃)₂: each Be has one terminal H, shares a bridging H with the other Be, and accepts one donor pair from NMe₃.",
  },
  "be-nme2-trimer": {
    svg: (() => {
      const w = 560, h = 200, y = 95;
      const xs = [90, 190, 290];
      let s = "";
      s += bond(xs[0], y, 30, y) + group(20, y, "NMe₂");
      s += bond(xs[2], y, 350, y) + group(360, y, "NMe₂");
      for (let i = 0; i < xs.length - 1; i++) {
        const x = xs[i], nx = xs[i + 1];
        const top = { x: (x + nx) / 2, y: y - 42 }, bot = { x: (x + nx) / 2, y: y + 42 };
        s += dash(x, y, top.x, top.y, TEAL) + dash(nx, y, top.x, top.y, TEAL);
        s += dash(x, y, bot.x, bot.y, TEAL) + dash(nx, y, bot.x, bot.y, TEAL);
        s += group(top.x, top.y, "NMe₂") + group(bot.x, bot.y, "NMe₂");
      }
      for (const x of xs) s += atomEl(x, y, 14, "Be");
      s += bond(470, y, 440, y) + bond(470, y, 500, y);
      s += group(428, y, "R₂N") + atomEl(470, y, 13, "Be") + group(512, y, "NR₂");
      s += `<text x="470" y="150" font-size="9" text-anchor="middle" fill="${LINE}">sterically protected monomer</text>`;
      return card(w, h, s);
    })(),
    caption: "[Be(NMe₂)₂]₃: four bridging + two terminal NMe₂ groups. Greater steric bulk lowers the aggregation number, ultimately giving monomeric diamides.",
  },
  "organoberyllium-motifs": {
    svg: (() => {
      const w = 760, h = 190, y = 95;
      let s = "";
      const panel1 = 140, panel2 = 380, panel3 = 610;
      // [R2BeH]2^2- : amber H bridge
      {
        const L = panel1 - 35, R = panel1 + 35;
        s += bond(L, y, L - 55, y - 40) + group(L - 65, y - 48, "R");
        s += bond(L, y, L - 55, y + 40) + group(L - 65, y + 48, "R");
        s += bond(R, y, R + 55, y - 40) + group(R + 65, y - 48, "R");
        s += bond(R, y, R + 55, y + 40) + group(R + 65, y + 48, "R");
        const t = { x: panel1, y: y - 38 };
        s += dash(L, y, t.x, t.y, AMBER) + dash(R, y, t.x, t.y, AMBER) + atomEl(t.x, t.y, 10, "H");
        s += atomEl(L, y, 13, "Be") + atomEl(R, y, 13, "Be");
        s += `<text x="${panel1}" y="165" font-size="10" text-anchor="middle" fill="${LINE}">[R₂BeH]₂²⁻</text>`;
      }
      // R2BeD2 : no bridge, 4-coordinate monomer
      {
        const cx = panel2;
        s += bond(cx, y, cx - 45, y - 45) + group(cx - 60, y - 55, "R");
        s += bond(cx, y, cx - 45, y + 45) + group(cx - 60, y + 55, "R");
        s += bond(cx, y, cx + 45, y - 45) + group(cx + 60, y - 55, "D");
        s += bond(cx, y, cx + 45, y + 45) + group(cx + 60, y + 55, "D");
        s += atomEl(cx, y, 13, "Be");
        s += `<text x="${cx}" y="165" font-size="10" text-anchor="middle" fill="${LINE}">R₂BeD₂ (donor-saturated)</text>`;
      }
      // X-bridged donor adduct : teal X bridge
      {
        const L = panel3 - 35, R = panel3 + 35;
        s += bond(L, y, L - 55, y) + group(L - 68, y, "D");
        s += bond(R, y, R + 55, y) + group(R + 68, y, "D");
        const t = { x: panel3, y: y - 38 }, b = { x: panel3, y: y + 38 };
        s += dash(L, y, t.x, t.y, TEAL) + dash(R, y, t.x, t.y, TEAL) + atomEl(t.x, t.y, 10, "H", "X");
        s += dash(L, y, b.x, b.y, TEAL) + dash(R, y, b.x, b.y, TEAL) + atomEl(b.x, b.y, 10, "H", "X");
        s += atomEl(L, y, 13, "Be") + atomEl(R, y, 13, "Be");
        s += `<text x="${panel3}" y="165" font-size="10" text-anchor="middle" fill="${LINE}">X-bridged donor adduct</text>`;
      }
      return card(w, h, s);
    })(),
    caption: "Three organoberyllium motifs side by side: a hydride-bridged dimer (3c–2e), a donor-saturated four-coordinate monomer (no bridge), and a halide-bridged donor adduct (3c–4e). See the full motif table for all five variants.",
  },
  grignard: {
    svg: (() => {
      const w = 380, h = 220, y = 105;
      const ML = { x: 140, y }, MR = { x: 240, y };
      let s = "";
      s += bond(ML.x, y, 85, y - 55) + group(70, y - 68, "R");
      s += bond(ML.x, y, 85, y + 55) + group(70, y + 68, "OEt₂");
      s += bond(MR.x, y, 295, y - 55) + group(310, y - 68, "R");
      s += bond(MR.x, y, 295, y + 55) + group(310, y + 68, "OEt₂");
      const t = { x: 190, y: y - 48 }, b = { x: 190, y: y + 48 };
      s += dash(ML.x, y, t.x, t.y, TEAL) + dash(MR.x, y, t.x, t.y, TEAL) + atomEl(t.x, t.y, 9, "H", "Xβ");
      s += dash(ML.x, y, b.x, b.y, TEAL) + dash(MR.x, y, b.x, b.y, TEAL) + atomEl(b.x, b.y, 9, "H", "Xβ");
      s += atomEl(ML.x, y, 15, "Mg") + atomEl(MR.x, y, 15, "Mg");
      return card(w, h, s);
    })(),
    caption: "[RMgX(OEt₂)]₂: halide-bridged Grignard dimer (Schlenk equilibrium). The bridging halide behaves as a 3c–4e donor bridge, exactly as in Be₂Cl₄ and Al₂Cl₆.",
  },
  i2cl6: {
    svg: bridgedDimer({ M: "I", Tsym: "Cl", Tlabel: "Clₜ", Bsym: "Cl", Blabel: "Clβ", bridgeColor: TEAL, lonePairs: true }),
    caption: "I₂Cl₆: planar dimer — two μ-Cl (3c–4e) bridges + four terminal Cl atoms.",
  },
  "fecl-dimers": {
    svg: (() => {
      const w = 520, h = 210, y = 100;
      let s = "";
      const ML = { x: 100, y }, MR = { x: 210, y };
      s += bond(ML.x, y, 45, y - 40) + atomEl(45, y - 40, 10, "Cl");
      s += bond(ML.x, y, 45, y + 40) + atomEl(45, y + 40, 10, "Cl");
      s += bond(MR.x, y, 265, y - 40) + atomEl(265, y - 40, 10, "Cl");
      s += bond(MR.x, y, 265, y + 40) + atomEl(265, y + 40, 10, "Cl");
      const t1 = { x: 155, y: y - 42 }, b1 = { x: 155, y: y + 42 };
      s += dash(ML.x, y, t1.x, t1.y, TEAL) + dash(MR.x, y, t1.x, t1.y, TEAL) + atomEl(t1.x, t1.y, 9, "Cl", "Clβ");
      s += dash(ML.x, y, b1.x, b1.y, TEAL) + dash(MR.x, y, b1.x, b1.y, TEAL) + atomEl(b1.x, b1.y, 9, "Cl", "Clβ");
      s += atomEl(ML.x, y, 14, "Fe") + atomEl(MR.x, y, 14, "Fe");
      s += `<text x="155" y="175" font-size="9" text-anchor="middle" fill="${LINE}">Fe₂Cl₆: non-planar dimer (vapour)</text>`;

      const ML2 = { x: 340, y }, MR2 = { x: 450, y };
      s += bond(ML2.x, y, 285, y) + atomEl(285, y, 10, "Cl");
      s += bond(MR2.x, y, 505, y) + atomEl(505, y, 10, "Cl");
      const t2 = { x: 395, y: y - 42 }, b2 = { x: 395, y: y + 42 };
      s += dash(ML2.x, y, t2.x, t2.y, TEAL) + dash(MR2.x, y, t2.x, t2.y, TEAL) + atomEl(t2.x, t2.y, 9, "Cl", "Clβ");
      s += dash(ML2.x, y, b2.x, b2.y, TEAL) + dash(MR2.x, y, b2.x, b2.y, TEAL) + atomEl(b2.x, b2.y, 9, "Cl", "Clβ");
      s += atomEl(ML2.x, y, 14, "Fe") + atomEl(MR2.x, y, 14, "Fe");
      s += `<text x="395" y="175" font-size="9" text-anchor="middle" fill="${LINE}">Fe₂Cl₄: doubly bridged FeCl₂ motif</text>`;
      return card(w, h, s);
    })(),
    caption: "FeCl₃ can form non-planar Fe₂Cl₆ in the vapour; FeCl₂ can form doubly bridged Fe₂Cl₄ motifs. Transition-metal bonding should not be reduced to literal main-group hybridisation pictures.",
  },
  "lich3-cubane": {
    svg: (() => {
      const w = 320, h = 320;
      const s0 = 80, d = 34, cx = 130, cy = 165;
      const front: Pt[] = [{ x: cx - s0, y: cy - s0 }, { x: cx + s0, y: cy - s0 }, { x: cx + s0, y: cy + s0 }, { x: cx - s0, y: cy + s0 }];
      const back: Pt[] = front.map((p) => ({ x: p.x + d, y: p.y - d }));
      let s = "";
      for (let i = 0; i < 4; i++) {
        s += dash(front[i].x, front[i].y, front[(i + 1) % 4].x, front[(i + 1) % 4].y, AMBER, 3);
        s += dash(back[i].x, back[i].y, back[(i + 1) % 4].x, back[(i + 1) % 4].y, AMBER, 2);
        s += bond(front[i].x, front[i].y, back[i].x, back[i].y, "#4a5c6e", 1.6);
      }
      const labelsF = ["CH₃", "Li", "CH₃", "Li"];
      const labelsB = ["Li", "CH₃", "Li", "CH₃"];
      front.forEach((p, i) => (s += labelsF[i] === "Li" ? atomEl(p.x, p.y, 14, "Li") : group(p.x, p.y, labelsF[i])));
      back.forEach((p, i) => (s += labelsB[i] === "Li" ? atomEl(p.x, p.y, 14, "Li") : group(p.x, p.y, labelsB[i])));
      return card(w, h, s);
    })(),
    caption: "[LiCH₃]₄: cubane-type Li₄C₄ core, Li and CH₃ on alternate vertices. Each CH₃ bridges three Li atoms (μ₃), coloured gold as an electron-deficient multicentre framework.",
  },
  borazine: {
    svg: (() => {
      const w = 300, h = 300, cx = w / 2, cy = h / 2;
      const R = 70;
      const pts: Pt[] = [];
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 3) * i - Math.PI / 2;
        pts.push({ x: cx + R * Math.cos(a), y: cy + R * Math.sin(a) });
      }
      const labels = ["B", "N", "B", "N", "B", "N"];
      let s = "";
      for (let i = 0; i < 6; i++) s += bond(pts[i].x, pts[i].y, pts[(i + 1) % 6].x, pts[(i + 1) % 6].y, "#4a5c6e", 2.6);
      pts.forEach((p, i) => {
        const out = { x: cx + (p.x - cx) * 1.5, y: cy + (p.y - cy) * 1.5 };
        s += bond(p.x, p.y, out.x, out.y, "#4a5c6e", 1.8);
        s += atomEl(out.x, out.y, 9, "H");
        s += atomEl(p.x, p.y, 14, labels[i]);
      });
      return card(w, h, s);
    })(),
    caption: "Borazine B₃N₃H₆ — “inorganic benzene”, formed from B₂H₆ + NH₃ on heating. The B–N bond is polar (Bδ+, Nδ−), so borazine reacts unlike true benzene.",
  },
};
