import type { ReactNode } from "react";

/* Static textbook figures for the derivations. Pure SVG, drawn from real coordinates. */

const TEAL = "#2fbfae";
const GOLD = "#f2b13f";
const BLUE = "#4c9be8";
const ROSE = "#e8607a";
const INK = "#06100f";
const SERIF = "ui-serif, Georgia, 'Times New Roman', serif";

function Fig({ caption, label, children, w = 360, h = 260 }: { caption: string; label: string; children: ReactNode; w?: number; h?: number }) {
  return (
    <figure className="overflow-hidden rounded-xl border border-white/10" style={{ background: "radial-gradient(120% 90% at 50% 15%, #17433f 0%, #0c1f1e 55%, #060f0f 100%)" }}>
      <svg viewBox={`0 0 ${w} ${h}`} role="img" aria-label={label} className="block h-auto w-full">
        {children}
      </svg>
      <figcaption className="border-t border-white/10 px-3 py-2 text-xs leading-5 text-[var(--text-muted)]">{caption}</figcaption>
    </figure>
  );
}

function Ball({ x, y, r, c, o = 1, dashed = false }: { x: number; y: number; r: number; c: string; o?: number; dashed?: boolean }) {
  return (
    <g opacity={o}>
      <circle cx={x} cy={y} r={r} fill={dashed ? "none" : c} fillOpacity={dashed ? 0 : 0.88} stroke={dashed ? "#fff" : INK} strokeWidth={dashed ? 1.6 : 1.2} strokeDasharray={dashed ? "4 3" : undefined} />
      {!dashed && <ellipse cx={x - r * 0.3} cy={y - r * 0.35} rx={r * 0.28} ry={r * 0.18} fill="#fff" opacity={0.35} />}
    </g>
  );
}

function T({ x, y, children, size = 15, anchor = "middle", color = "#f4f1e8", italic = true, rotate }: { x: number; y: number; children: ReactNode; size?: number; anchor?: "start" | "middle" | "end"; color?: string; italic?: boolean; rotate?: number }) {
  return (
    <text x={x} y={y} fontSize={size} fill={color} textAnchor={anchor} fontFamily={SERIF} fontStyle={italic ? "italic" : "normal"} transform={rotate ? `rotate(${rotate} ${x} ${y})` : undefined}>
      {children}
    </text>
  );
}

function Seg({ a, b, c = "#fff", w = 2, dash, o = 1 }: { a: [number, number]; b: [number, number]; c?: string; w?: number; dash?: string; o?: number }) {
  return <line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={c} strokeWidth={w} strokeDasharray={dash} opacity={o} strokeLinecap="round" />;
}

/** A dimension line with end ticks and a label offset to one side. */
function Dim({ a, b, label, off = 14, size = 15 }: { a: [number, number]; b: [number, number]; label: ReactNode; off?: number; size?: number }) {
  const dx = b[0] - a[0];
  const dy = b[1] - a[1];
  const len = Math.hypot(dx, dy);
  const nx = -dy / len;
  const ny = dx / len;
  const ox = nx * off;
  const oy = ny * off;
  const mx = (a[0] + b[0]) / 2 + nx * (off + 8);
  const my = (a[1] + b[1]) / 2 + ny * (off + 8) + 4;
  return (
    <g>
      <Seg a={[a[0] + ox, a[1] + oy]} b={[b[0] + ox, b[1] + oy]} c="#ffd37a" w={1.6} />
      <Seg a={[a[0] + ox * 0.5, a[1] + oy * 0.5]} b={[a[0] + ox * 1.25, a[1] + oy * 1.25]} c="#ffd37a" w={1.4} />
      <Seg a={[b[0] + ox * 0.5, b[1] + oy * 0.5]} b={[b[0] + ox * 1.25, b[1] + oy * 1.25]} c="#ffd37a" w={1.4} />
      <T x={mx} y={my} size={size} color="#ffd37a">
        {label}
      </T>
    </g>
  );
}

/* ---------------------------------------------------------------- contact */

export function ContactFig({ kind }: { kind: "sc" | "bcc" | "fcc" }) {
  if (kind === "sc") {
    const s = 100;
    const x0 = 130;
    const y0 = 70;
    const r = s / 2;
    const corners: [number, number][] = [[x0, y0], [x0 + s, y0], [x0, y0 + s], [x0 + s, y0 + s]];
    return (
      <Fig label="Simple cubic: atoms touch along the cell edge" caption="Face of a simple cubic cell. Neighbouring corner atoms touch along the edge, so a = 2r.">
        {corners.map(([x, y], i) => (
          <Ball key={i} x={x} y={y} r={r} c={TEAL} o={0.6} />
        ))}
        <rect x={x0} y={y0} width={s} height={s} fill="none" stroke="#fff" strokeWidth={2} />
        <Seg a={[x0, y0 + s]} b={[x0 + s, y0 + s]} c={GOLD} w={4} />
        <Dim a={[x0, y0 + s + r]} b={[x0 + s, y0 + s + r]} label="a = 2r" off={10} />
      </Fig>
    );
  }
  if (kind === "fcc") {
    const s = 140;
    const x0 = 110;
    const y0 = 52;
    const r = (s * Math.SQRT2) / 4;
    const cx = x0 + s / 2;
    const cy = y0 + s / 2;
    return (
      <Fig label="Face-centred cubic: atoms touch along the face diagonal" caption="One face of an FCC cell. The face-centre atom touches the two corner atoms along the diagonal, which carries four radii: √2·a = 4r.">
        {[[x0, y0], [x0 + s, y0], [x0, y0 + s], [x0 + s, y0 + s]].map(([x, y], i) => (
          <Ball key={i} x={x} y={y} r={r} c={TEAL} o={0.75} />
        ))}
        <Ball x={cx} y={cy} r={r} c={GOLD} />
        <rect x={x0} y={y0} width={s} height={s} fill="none" stroke="#fff" strokeWidth={2} />
        <Seg a={[x0, y0 + s]} b={[x0 + s, y0]} c="#fff" w={2.4} dash="6 4" />
        <T x={x0 + s + 8} y={y0 + 6} anchor="start" size={15}>
          √2·a = 4r
        </T>
        <Dim a={[x0, y0 + s + r * 0.2]} b={[x0 + s, y0 + s + r * 0.2]} label="a" off={18} />
      </Fig>
    );
  }
  const a = 110;
  const w = a * Math.SQRT2;
  const x0 = 360 / 2 - w / 2;
  const y0 = 70;
  const r = (a * Math.sqrt(3)) / 4;
  const cx = x0 + w / 2;
  const cy = y0 + a / 2;
  return (
    <Fig label="Body-centred cubic: atoms touch along the body diagonal" caption="Section of a BCC cell through the body diagonal (a rectangle √2·a by a). The centre atom touches the two corner atoms along the diagonal: √3·a = 4r.">
      {[[x0, y0], [x0 + w, y0], [x0, y0 + a], [x0 + w, y0 + a]].map(([x, y], i) => (
        <Ball key={i} x={x} y={y} r={r} c={TEAL} o={0.75} />
      ))}
      <Ball x={cx} y={cy} r={r} c={ROSE} />
      <rect x={x0} y={y0} width={w} height={a} fill="none" stroke="#fff" strokeWidth={2} />
      <Seg a={[x0, y0 + a]} b={[x0 + w, y0]} c="#fff" w={2.4} dash="6 4" />
      <T x={cx + 6} y={y0 - 14} size={15}>
        √3·a = 4r
      </T>
      <Dim a={[x0, y0 + a]} b={[x0 + w, y0 + a]} label="√2·a" off={22} />
      <Dim a={[x0, y0]} b={[x0, y0 + a]} label="a" off={-22} />
    </Fig>
  );
}

/* ----------------------------------------------------------- radius ratio */

function cabinet(x0: number, y0: number, s: number, d: number) {
  return (i: number, j: number, k: number): [number, number] => [x0 + i * s + k * d, y0 - j * s - k * d * 0.7];
}

function CubeWire({ P }: { P: (i: number, j: number, k: number) => [number, number] }) {
  const edges: [[number, number, number], [number, number, number]][] = [];
  for (const j of [0, 1]) for (const k of [0, 1]) edges.push([[0, j, k], [1, j, k]]);
  for (const i of [0, 1]) for (const k of [0, 1]) edges.push([[i, 0, k], [i, 1, k]]);
  for (const i of [0, 1]) for (const j of [0, 1]) edges.push([[i, j, 0], [i, j, 1]]);
  return (
    <g>
      {edges.map(([p, q], n) => (
        <Seg key={n} a={P(...p)} b={P(...q)} c="#fff" w={1.2} o={0.45} />
      ))}
    </g>
  );
}

export function RadiusFig({ kind }: { kind: "tri" | "tet" | "oct" | "cub" }) {
  if (kind === "tri") {
    const R = 40;
    const cx = 180;
    const cy = 150;
    const rc = (2 * R) / Math.sqrt(3);
    const v = [0, 1, 2].map((i) => [cx + rc * Math.cos(-Math.PI / 2 + (i * 2 * Math.PI) / 3), cy + rc * Math.sin(-Math.PI / 2 + (i * 2 * Math.PI) / 3)] as [number, number]);
    return (
      <Fig label="Triangular hole: three anions around a cation" caption="Three anions touch each other (side 2r₋). The cation at the centroid touches all three, so its distance to each centre is r₊ + r₋ = 2r₋/√3.">
        {v.map(([x, y], i) => (
          <Ball key={i} x={x} y={y} r={R} c={TEAL} o={0.8} />
        ))}
        <Ball x={cx} y={cy} r={(rc - R) * 1} c={GOLD} />
        <Seg a={v[0]} b={v[1]} c="#fff" w={1.6} dash="5 4" />
        <Seg a={v[1]} b={v[2]} c="#fff" w={1.6} dash="5 4" />
        <Seg a={v[2]} b={v[0]} c="#fff" w={1.6} dash="5 4" />
        <Seg a={[cx, cy]} b={v[1]} c={GOLD} w={2.4} />
        <T x={cx + 38} y={cy + 30} size={14} color="#ffd37a">
          r₊ + r₋
        </T>
        <T x={cx} y={cy + 100} size={14}>
          side = 2r₋
        </T>
      </Fig>
    );
  }
  if (kind === "oct") {
    const R = 46;
    const s = 2 * R;
    const cx = 180;
    const cy = 128;
    const c: [number, number][] = [[cx - R, cy - R], [cx + R, cy - R], [cx + R, cy + R], [cx - R, cy + R]];
    const rp = Math.SQRT2 * R - R;
    return (
      <Fig label="Octahedral hole: square section through four anions" caption="Section of an octahedral hole. The four anions touch along the sides (side 2r₋); the cation touches them along the diagonal: √2·2r₋ = 2(r₊ + r₋).">
        {c.map(([x, y], i) => (
          <Ball key={i} x={x} y={y} r={R} c={TEAL} o={0.8} />
        ))}
        <Ball x={cx} y={cy} r={rp} c={GOLD} />
        <rect x={cx - R} y={cy - R} width={s} height={s} fill="none" stroke="#fff" strokeWidth={1.6} strokeDasharray="5 4" />
        <Seg a={c[0]} b={c[2]} c={GOLD} w={2.6} />
        <T x={cx - 100} y={cy + 6} size={14} color="#ffd37a" anchor="end">
          2(r₊ + r₋)
        </T>
        <Dim a={[cx - R, cy + R + R]} b={[cx + R, cy + R + R]} label="2r₋" off={6} />
      </Fig>
    );
  }
  if (kind === "tet") {
    const s = 110;
    const P = cabinet(90, 205, s, 60);
    const tetra: [number, number, number][] = [[0, 0, 0], [1, 1, 0], [1, 0, 1], [0, 1, 1]];
    const pairs: [number, number][] = [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]];
    const cen = P(0.5, 0.5, 0.5);
    return (
      <Fig label="Tetrahedral hole: four anions on alternate corners of a cube" caption="Four anions sit on alternate corners of a cube of edge b. They touch along face diagonals (√2·b = 2r₋); the cation at the centre touches them along half the body diagonal (√3·b/2 = r₊ + r₋).">
        <CubeWire P={P} />
        {pairs.map(([i, j], n) => (
          <Seg key={n} a={P(...tetra[i])} b={P(...tetra[j])} c={TEAL} w={1.6} dash="5 4" />
        ))}
        {tetra.map((p, i) => {
          const [x, y] = P(...p);
          return <Ball key={i} x={x} y={y} r={17} c={TEAL} o={0.85} />;
        })}
        <Seg a={P(0, 0, 0)} b={cen} c={GOLD} w={2.4} />
        <Ball x={cen[0]} y={cen[1]} r={7} c={GOLD} />
        <T x={cen[0] + 16} y={cen[1] + 24} size={13} color="#ffd37a" anchor="start">
          √3·b/2
        </T>
        <T x={P(0.5, 0, 0)[0]} y={P(0.5, 0, 0)[1] + 28} size={14}>
          edge b
        </T>
      </Fig>
    );
  }
  const s = 110;
  const P = cabinet(90, 205, s, 60);
  const corners: [number, number, number][] = [];
  for (const i of [0, 1]) for (const j of [0, 1]) for (const k of [0, 1]) corners.push([i, j, k]);
  const cen = P(0.5, 0.5, 0.5);
  return (
    <Fig label="Cubic hole: eight anions at the corners of a cube" caption="Eight anions touch along the edges (edge 2r₋). The cation at the centre touches them along half of the body diagonal: √3·2r₋ = 2(r₊ + r₋).">
      <CubeWire P={P} />
      {corners.map((p, i) => {
        const [x, y] = P(...p);
        return <Ball key={i} x={x} y={y} r={14} c={TEAL} o={0.85} />;
      })}
      <Seg a={P(0, 0, 0)} b={P(1, 1, 1)} c={GOLD} w={2.4} />
      <Ball x={cen[0]} y={cen[1]} r={9} c={GOLD} />
      <T x={cen[0] - 20} y={cen[1] - 24} size={13} color="#ffd37a" anchor="end">
        body diagonal
      </T>
    </Fig>
  );
}

/* ------------------------------------------------------------------ voids */

export function VoidFig({ kind }: { kind: "oct" | "tet" }) {
  if (kind === "oct") {
    const a = 200;
    const R = a / (2 * Math.SQRT2);
    const r = a / 2 - R;
    const y = 100;
    const xl = 80;
    const xr = xl + a;
    const xm = xl + a / 2;
    return (
      <Fig label="Octahedral void on a cell edge" caption="Along a cell edge: corner atom, octahedral void, corner atom. The void touches both atoms, so a = 2R + 2r. With a = 2√2·R this gives r = (√2 − 1)R.">
        <Ball x={xl} y={y} r={R} c={TEAL} o={0.85} />
        <Ball x={xr} y={y} r={R} c={TEAL} o={0.85} />
        <Ball x={xm} y={y} r={r} c="#fff" dashed />
        <Seg a={[xl, y]} b={[xr, y]} c="#fff" w={1.4} dash="4 4" />
        <T x={xl + R / 2 + 2} y={y - 6} size={13}>
          R
        </T>
        <T x={xm} y={y - 36} size={13} color="#ffd37a">
          r
        </T>
        <Dim a={[xl, y + R + 4]} b={[xr, y + R + 4]} label="a = 2R + 2r" off={14} />
        <T x={180} y={225} size={13} color="#b8cbc7" italic={false}>
          edge of the FCC cell
        </T>
      </Fig>
    );
  }
  const s = 130;
  const P = cabinet(90, 200, s, 70);
  const t = P(0.25, 0.25, 0.25);
  const c0 = P(0, 0, 0);
  const cen = P(0.5, 0.5, 0.5);
  return (
    <Fig label="Tetrahedral void on the body diagonal of an FCC cell" caption="The tetrahedral void lies a quarter of the way along a body diagonal. Its distance from the corner atom is √3·a/4, and the corner atom touches it: R + r = √3·a/4.">
      <CubeWire P={P} />
      <Seg a={c0} b={P(1, 1, 1)} c="#fff" w={1.4} dash="4 4" />
      <Ball x={c0[0]} y={c0[1]} r={22} c={TEAL} o={0.85} />
      <Ball x={t[0]} y={t[1]} r={9} c="#fff" dashed />
      <Seg a={c0} b={t} c={GOLD} w={3} />
      <Ball x={cen[0]} y={cen[1]} r={3} c="#fff" />
      <T x={t[0] + 18} y={t[1] - 12} size={13} color="#ffd37a" anchor="start">
        R + r = √3·a/4
      </T>
      <T x={c0[0] - 4} y={c0[1] + 32} size={13}>
        corner atom
      </T>
    </Fig>
  );
}

/* -------------------------------------------------------------------- HCP */

export function HcpFig() {
  const a = 120;
  const A: [number, number] = [38, 168];
  const B: [number, number] = [A[0] + a, A[1]];
  const Cc: [number, number] = [A[0] + a / 2, A[1] - (a * Math.sqrt(3)) / 2];
  const G: [number, number] = [(A[0] + B[0] + Cc[0]) / 3, (A[1] + B[1] + Cc[1]) / 3];
  const lg = a / Math.sqrt(3);
  const h = a * Math.sqrt(2 / 3);
  const Q: [number, number] = [250, 190];
  const R2: [number, number] = [Q[0] + lg, Q[1]];
  const Tp: [number, number] = [Q[0], Q[1] - h];
  return (
    <Fig w={420} h={240} label="Geometry of the regular tetrahedron used for c/a" caption="Left: base of the tetrahedron, an equilateral triangle of side a; its centroid is a/√3 from each vertex. Right: the right triangle formed by the apex height h, the distance a/√3 and the edge a.">
      <polygon points={`${A.join(",")} ${B.join(",")} ${Cc.join(",")}`} fill={TEAL} fillOpacity={0.16} stroke="#fff" strokeWidth={1.8} />
      {[A, B, Cc].map((p, i) => (
        <Ball key={i} x={p[0]} y={p[1]} r={9} c={TEAL} />
      ))}
      <Ball x={G[0]} y={G[1]} r={5} c={GOLD} />
      <Seg a={G} b={A} c={GOLD} w={2.2} />
      <Seg a={G} b={B} c="#fff" w={1.2} dash="4 4" o={0.7} />
      <Seg a={G} b={Cc} c="#fff" w={1.2} dash="4 4" o={0.7} />
      <T x={(G[0] + A[0]) / 2 - 6} y={(G[1] + A[1]) / 2 + 20} size={13} color="#ffd37a">
        a/√3
      </T>
      <T x={(A[0] + B[0]) / 2} y={A[1] + 28} size={14}>
        a
      </T>
      <polygon points={`${Q.join(",")} ${R2.join(",")} ${Tp.join(",")}`} fill={GOLD} fillOpacity={0.12} stroke="#fff" strokeWidth={1.8} />
      <path d={`M${Q[0] + 12} ${Q[1]} V${Q[1] - 12} H${Q[0]}`} fill="none" stroke="#fff" strokeWidth={1.4} />
      <T x={Q[0] + lg / 2} y={Q[1] + 22} size={13} color="#ffd37a">
        a/√3
      </T>
      <T x={Q[0] - 14} y={Q[1] - h / 2} size={14} anchor="end">
        h
      </T>
      <T x={Q[0] + lg / 2 + 16} y={Q[1] - h / 2 - 4} size={14} anchor="start">
        a
      </T>
    </Fig>
  );
}

/* ------------------------------------------------------------ Bragg / hkl */

export function BraggFig() {
  const th = (30 * Math.PI) / 180;
  const u: [number, number] = [Math.cos(th), Math.sin(th)];
  const v: [number, number] = [Math.cos(th), -Math.sin(th)];
  const d = 64;
  const y1 = 80;
  const y2 = y1 + d;
  const P: [number, number] = [200, y1];
  const Q: [number, number] = [200, y2];
  const L = 120;
  const at = (p: [number, number], dir: [number, number], t: number): [number, number] => [p[0] + dir[0] * t, p[1] + dir[1] * t];
  const dotV = (p: [number, number], q: [number, number], dir: [number, number]) => (q[0] - p[0]) * dir[0] + (q[1] - p[1]) * dir[1];
  const A = at(Q, u, dotV(Q, P, u));
  const Cc = at(Q, v, dotV(Q, P, v));
  return (
    <Fig w={380} h={250} label="Bragg reflection from two lattice planes" caption="Two parallel rays reflect from adjacent planes spaced d apart. The lower ray travels the extra distance AQ + QC = 2d sinθ, which must equal a whole number of wavelengths for the reflected waves to reinforce.">
      {[y1, y2, y2 + d].map((y, i) => (
        <g key={i}>
          <Seg a={[24, y]} b={[360, y]} c="#9bb8b3" w={1.6} />
          {[70, 120, 170, 220, 270, 320].map((x) => (
            <Ball key={x} x={x} y={y} r={5} c={BLUE} />
          ))}
        </g>
      ))}
      <Seg a={at(P, u, -L)} b={P} c={TEAL} w={2.4} />
      <Seg a={P} b={at(P, v, L)} c={TEAL} w={2.4} />
      <Seg a={at(Q, u, -L - 30)} b={Q} c={ROSE} w={2.4} />
      <Seg a={Q} b={at(Q, v, L + 30)} c={ROSE} w={2.4} />
      <Seg a={P} b={A} c="#fff" w={1.4} dash="4 3" />
      <Seg a={P} b={Cc} c="#fff" w={1.4} dash="4 3" />
      <Seg a={A} b={Q} c={GOLD} w={4.5} />
      <Seg a={Q} b={Cc} c={GOLD} w={4.5} />
      <T x={A[0] - 14} y={A[1] - 4} size={13} anchor="end" color="#ffd37a">
        d sinθ
      </T>
      <T x={Cc[0] + 14} y={Cc[1] - 4} size={13} anchor="start" color="#ffd37a">
        d sinθ
      </T>
      <T x={P[0] - 6} y={P[1] - 8} size={13} anchor="end">
        P
      </T>
      <T x={Q[0] + 6} y={Q[1] + 16} size={13} anchor="start">
        Q
      </T>
      <T x={A[0] - 4} y={A[1] + 16} size={13} anchor="end">
        A
      </T>
      <T x={Cc[0] + 4} y={Cc[1] + 16} size={13} anchor="start">
        C
      </T>
      <path d={`M${P[0] - 36} ${P[1]} A36 36 0 0 0 ${P[0] - 36 * Math.cos(th)} ${P[1] - 36 * Math.sin(th)}`} fill="none" stroke="#fff" strokeWidth={1.4} />
      <T x={P[0] - 52} y={P[1] - 6} size={13} anchor="end">
        θ
      </T>
      <Dim a={[34, y1]} b={[34, y2]} label="d" off={-6} />
    </Fig>
  );
}

export function MillerFig() {
  const a = 130;
  const O: [number, number] = [80, 205];
  const X: [number, number] = [O[0] + a / 2, O[1]];
  const Y: [number, number] = [O[0], O[1] - a];
  // foot of the perpendicular from O onto the line XY
  const dx = Y[0] - X[0];
  const dy = Y[1] - X[1];
  const tt = ((O[0] - X[0]) * dx + (O[1] - X[1]) * dy) / (dx * dx + dy * dy);
  const F: [number, number] = [X[0] + tt * dx, X[1] + tt * dy];
  return (
    <Fig label="A (210) plane in a cubic cell and its spacing from the origin" caption="Plane with Miller indices (h k 0) = (2 1 0): intercepts a/h on x and a/k on y. The perpendicular from the origin has length d, the spacing of such planes. Here a = 130 units is the cell edge.">
      <rect x={O[0]} y={O[1] - a} width={a} height={a} fill="none" stroke="#9bb8b3" strokeWidth={1.2} strokeDasharray="4 4" />
      {[0, 1].flatMap((i) => [0, 1].map((j) => <Ball key={`${i}${j}`} x={O[0] + i * a} y={O[1] - j * a} r={5} c={BLUE} />))}
      <Seg a={[O[0] - 14, O[1]]} b={[O[0] + a + 26, O[1]]} c="#fff" w={1.6} />
      <Seg a={[O[0], O[1] + 14]} b={[O[0], O[1] - a - 22]} c="#fff" w={1.6} />
      <T x={O[0] + a + 30} y={O[1] + 5} size={14} anchor="start">
        x
      </T>
      <T x={O[0] + 4} y={O[1] - a - 26} size={14} anchor="start">
        y
      </T>
      <Seg a={X} b={Y} c={GOLD} w={3} />
      <Seg a={O} b={F} c={TEAL} w={2.6} />
      <path d={`M${F[0] - 10} ${F[1] - 4} l 4 -9 l 9 3`} fill="none" stroke="#fff" strokeWidth={1.2} />
      <T x={(O[0] + F[0]) / 2 - 8} y={(O[1] + F[1]) / 2 - 8} size={14} anchor="end" color="#7fe0d6">
        d
      </T>
      <T x={X[0]} y={O[1] + 22} size={13} color="#ffd37a">
        a/h
      </T>
      <T x={O[0] - 12} y={Y[1] + 4} size={13} anchor="end" color="#ffd37a">
        a/k
      </T>
      <path d={`M${O[0] + 30} ${O[1]} A30 30 0 0 0 ${O[0] + 30 * Math.cos(Math.atan2(O[1] - F[1], F[0] - O[0]))} ${O[1] - 30 * Math.sin(Math.atan2(O[1] - F[1], F[0] - O[0]))}`} fill="none" stroke="#fff" strokeWidth={1.2} />
      <T x={O[0] + 44} y={O[1] - 10} size={13} anchor="start">
        α
      </T>
    </Fig>
  );
}

/* ------------------------------------------------------------- Curie law */

export function CurieFig() {
  const lo = 190;
  const hi = 70;
  return (
    <Fig label="Two energy levels of a magnetic moment in a field" caption="In a field B a moment of size μ has energy −μB when aligned and +μB when opposed. The lower level holds more moments, so there is a net magnetisation.">
      <Seg a={[40, 24]} b={[40, 236]} c="#9bb8b3" w={1.4} />
      <T x={32} y={30} size={13} anchor="end">
        E
      </T>
      <Seg a={[80, lo]} b={[250, lo]} c={TEAL} w={4} />
      <Seg a={[80, hi]} b={[250, hi]} c={ROSE} w={4} />
      <Seg a={[80, 130]} b={[250, 130]} c="#9bb8b3" w={1} dash="4 4" />
      <T x={262} y={lo + 5} size={14} anchor="start" color="#7fe0d6">
        −μB
      </T>
      <T x={262} y={hi + 5} size={14} anchor="start" color="#f5a3b3">
        +μB
      </T>
      <T x={86} y={124} size={12} anchor="start" color="#b8cbc7">
        zero
      </T>
      <Dim a={[322, hi]} b={[322, lo]} label="2μB" off={14} />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i} transform={`translate(${100 + i * 28} ${lo - 14})`} stroke={TEAL} strokeWidth={2.6} fill="none" strokeLinecap="round">
          <path d="M0 8 V-8 M-5 -2 L0 -9 L5 -2" />
        </g>
      ))}
      {[0, 1].map((i) => (
        <g key={i} transform={`translate(${100 + i * 28} ${hi - 14})`} stroke={ROSE} strokeWidth={2.6} fill="none" strokeLinecap="round">
          <path d="M0 -8 V8 M-5 2 L0 9 L5 2" />
        </g>
      ))}
      <T x={150} y={lo + 30} size={13}>
        N₊ ∝ e<tspan baselineShift="super" fontSize={10}>+μB/kT</tspan>
      </T>
      <T x={150} y={hi - 32} size={13}>
        N₋ ∝ e<tspan baselineShift="super" fontSize={10}>−μB/kT</tspan>
      </T>
    </Fig>
  );
}
