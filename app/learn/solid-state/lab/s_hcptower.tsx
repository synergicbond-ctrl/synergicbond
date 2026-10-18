"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Stage, type CameraPose, type StageAtom, type StageBond, type StageLine, type StagePoly, type V3 } from "./_stage";
import { C, SQ3, hcpCell } from "./_geom";
import { Btn, Narration, Rich, Slider } from "./_ui";

type Kind = "A" | "B" | "small" | "big";
type Level = { n: number; label: string; h: string; kind: Kind; say: string };

/** Nine levels of the hexagonal box, from the floor (height 0) to the roof (height h). */
const LEVELS: Level[] = [
  { n: 0, label: "Layer A", h: "0", kind: "A", say: "**Ground floor: layer A.** Seven balls packed like a flower: one in the middle, six around it. The holes live in the gaps between layers, so there is nothing to count here. Press **Next** to ride up." },
  { n: 1, label: "Small holes", h: "h/8", kind: "small", say: "**Level h/8: 3 small holes** (pink). Each sits in a little pocket: **3 balls of layer A below it and 1 ball of layer B above it**. Four balls around one hole make a tiny pyramid. A small hole can hold a ball up to **0.225** times the size of the big balls." },
  { n: 2, label: "Big holes", h: "2h/8", kind: "big", say: "**Level 2h/8: 3 big holes** (white). Each one has **3 balls of layer A under it and 3 balls of layer B over it**, turned against each other: 6 balls, like two pyramids glued base to base. A big hole holds a ball up to **0.414** times the size of the big balls." },
  { n: 3, label: "Small holes", h: "3h/8", kind: "small", say: "**Level 3h/8: 3 small holes.** One sits right above the middle ball of layer A (pink, in the centre). The other six sit on the corners and are shared by 3 boxes each, so they count only ⅓ each: 1 + 6 × ⅓ = **3**." },
  { n: 4, label: "Layer B", h: "4h/8", kind: "B", say: "**Middle floor: layer B.** Three balls (gold) rest in the dips of layer A, like oranges stacked in a shop. We are exactly halfway: height h/2." },
  { n: 5, label: "Small holes", h: "5h/8", kind: "small", say: "**Level 5h/8: 3 small holes**, the mirror image of level 3h/8, now just above layer B: 1 in the middle + 6 corners × ⅓ = **3**." },
  { n: 6, label: "Big holes", h: "6h/8", kind: "big", say: "**Level 6h/8: 3 big holes** between layer B and the top layer A: again 3 balls under and 3 over, 6 in all." },
  { n: 7, label: "Small holes", h: "7h/8", kind: "small", say: "**Level 7h/8: 3 small holes** just under the roof, the mirror image of level h/8: 3 balls of layer B below, 1 ball of layer A above." },
  { n: 8, label: "Layer A", h: "h", kind: "A", say: "**Roof: layer A again**, an exact copy of the floor. Add it all up: **12 small holes** and **6 big holes** for the 6 balls of the box. That is **2 small + 1 big for every ball**." },
];

const KIND_COL: Record<Kind, string> = { A: "#8fc7ff", B: "#ffc65a", small: "#ff6f8a", big: "#ffffff" };

export function HcpTower() {
  const R = 0.62;
  const cell = useMemo(() => hcpCell(R), []);
  const { a, c } = cell;
  const q = a / SQ3;
  const [lv, setLv] = useState(0);
  const [pull, setPull] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [around, setAround] = useState(true);
  const [real, setReal] = useState(false);
  const lvRef = useRef(0);
  useEffect(() => {
    lvRef.current = lv;
  });
  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => {
      if (lvRef.current >= LEVELS.length - 1) {
        setPlaying(false);
        return;
      }
      setLv(lvRef.current + 1);
    }, 4200);
    return () => window.clearInterval(id);
  }, [playing]);

  const L = LEVELS[lv];
  const stretch = 1 + 1.3 * pull;
  const rb = real ? R : R * 0.72;
  const Y = (y: number): number => y * stretch;
  const pol = (rad: number, deg: number): [number, number] => [rad * Math.cos((deg * Math.PI) / 180), rad * Math.sin((deg * Math.PI) / 180)];
  const bPos = [30, 150, 270].map((d) => pol(q, d));
  const oPos = [90, 210, 330].map((d) => pol(q, d));
  const corners = [0, 60, 120, 180, 240, 300].map((d) => pol(a, d));

  /** Holes at each level, as [x, y, z, isSharedCorner] */
  const holesAt = (n: number): { p: V3; shared: boolean }[] => {
    const y = (n / 8 - 0.5) * c;
    if (n === 1 || n === 7) return bPos.map(([x, z]) => ({ p: [x, y, z] as V3, shared: false }));
    if (n === 3 || n === 5) return [{ p: [0, y, 0] as V3, shared: false }, ...corners.map(([x, z]) => ({ p: [x, y, z] as V3, shared: true }))];
    if (n === 2 || n === 6) return oPos.map(([x, z]) => ({ p: [x, y, z] as V3, shared: false }));
    return [];
  };

  const balls: { id: string; p: V3; layer: "A" | "B" | "T" }[] = [
    ...cell.corner.map((p, i) => ({ id: `c${i}`, p, layer: (i < 6 ? "A" : "T") as "A" | "T" })),
    { id: "fa", p: cell.face[0], layer: "A" as const },
    { id: "ft", p: cell.face[1], layer: "T" as const },
    ...cell.inner.map((p, i) => ({ id: `b${i}`, p, layer: "B" as const })),
  ];
  const extra = [90, 210, 330].map((d, i) => { const [ex, ez] = pol(2 * q, d); return { id: `x${i}`, p: [ex, 0, ez] as V3 }; });
  const dist = (m: V3, n: V3) => Math.hypot(m[0] - n[0], m[1] - n[1], m[2] - n[2]);

  const here = holesAt(lv);
  const focus = here.length ? here[0].p : null;
  const want = L.kind === "big" ? 6 : 4;
  const pool = [...balls.map((b) => ({ id: b.id, p: b.p })), ...extra];
  const near = focus ? [...pool].sort((m, n) => dist(m.p, focus) - dist(n.p, focus)).slice(0, want) : [];
  const nearIds = new Set(near.map((n) => n.id));

  const isHole = L.kind === "small" || L.kind === "big";
  const holeCol = L.kind === "big" ? "#ffffff" : C.rose;
  const atoms: StageAtom[] = [
    ...balls.map((b) => {
      const lit = around && nearIds.has(b.id);
      const layerLit = (L.kind === "A" && ((lv === 0 && b.layer === "A") || (lv === 8 && b.layer === "T"))) || (L.kind === "B" && b.layer === "B");
      const col = b.layer === "B" ? C.gold : C.blue;
      const op = isHole ? (lit ? 1 : 0) : layerLit ? 1 : 0.1;
      return { id: b.id, p: [b.p[0], Y(b.p[1]), b.p[2]] as V3, r: rb, color: col, opacity: op, glow: layerLit };
    }),
    ...extra.map((x) => ({ id: x.id, p: [x.p[0], Y(x.p[1]), x.p[2]] as V3, r: rb, color: C.gold, scale: around && nearIds.has(x.id) ? 1 : 0, opacity: 1 })),
    // the other holes of this level: small markers so all 3 can be counted
    ...here.slice(1).map((h, i) => ({ id: `m${lv}-${i}`, p: [h.p[0], Y(h.p[1]), h.p[2]] as V3, r: 0.1, color: holeCol, glow: true, opacity: 0.9, from: [h.p[0], Y(h.p[1]) - 0.5, h.p[2]] as V3 }) as StageAtom),
    // the hole under study, drawn at its true size relative to the balls
    ...here.slice(0, 1).map((h, i) => ({ id: `n${lv}-${i}`, p: [h.p[0], Y(h.p[1]), h.p[2]] as V3, r: (L.kind === "big" ? 0.414 : 0.2247) * R, color: holeCol, glow: true, from: [h.p[0], Y(h.p[1]) - 0.7, h.p[2]] as V3 }) as StageAtom),
  ];
  const holeBonds: StageBond[] = [];
  if (isHole && around && focus) near.forEach((n, i) => holeBonds.push({ id: `hb${lv}-${i}`, a: [focus[0], Y(focus[1]), focus[2]], b: [n.p[0], Y(n.p[1]), n.p[2]], r: 0.018, color: holeCol, opacity: 0.8 }));

  const lines: StageLine[] = useMemo(() => {
    const out: StageLine[] = [];
    const H = (c / 2) * stretch;
    for (let k = 0; k < 6; k++) {
      const [x0, z0] = pol(a, k * 60);
      const [x1, z1] = pol(a, (k + 1) * 60);
      out.push({ id: `bt${k}`, a: [x0, -H, z0], b: [x1, -H, z1], opacity: 0.4 });
      out.push({ id: `tp${k}`, a: [x0, H, z0], b: [x1, H, z1], opacity: 0.4 });
      out.push({ id: `vt${k}`, a: [x0, -H, z0], b: [x0, H, z0], opacity: 0.2, dashed: true });
    }
    return out;
  }, [a, c, stretch]);

  const polys: StagePoly[] = [];
  const shapeLines: StageLine[] = [];
  const slabY = Y((lv / 8 - 0.5) * c);
  const ring = [0, 1, 2, 3, 4, 5].map((k) => { const [x, z] = pol(a * 1.18, k * 60); return [x, slabY, z] as V3; });
  polys.push({ id: "slab", verts: [[0, slabY, 0] as V3, ...ring], faces: [[0, 1, 2], [0, 2, 3], [0, 3, 4], [0, 4, 5], [0, 5, 6], [0, 6, 1]], color: KIND_COL[L.kind], opacity: isHole ? 0.08 : 0.2 });
  if (around && focus && near.length) {
    const vs = near.map((n) => [n.p[0], Y(n.p[1]), n.p[2]] as V3);
    const edge = 2 * R * 1.02 * stretch * 1.4;
    const faces: number[][] = [];
    for (let i = 0; i < vs.length; i++) for (let j = i + 1; j < vs.length; j++) for (let k = j + 1; k < vs.length; k++) {
      if (dist(vs[i], vs[j]) < edge && dist(vs[j], vs[k]) < edge && dist(vs[i], vs[k]) < edge) faces.push([i, j, k]);
    }
    for (let i = 0; i < vs.length; i++) for (let j = i + 1; j < vs.length; j++) if (dist(vs[i], vs[j]) < edge) shapeLines.push({ id: `se${lv}-${i}-${j}`, a: vs[i], b: vs[j], color: holeCol, opacity: 0.95 });
    if (faces.length) polys.push({ id: "shape", verts: vs, faces, color: holeCol, opacity: 0.28 });
  }

  const camera: CameraPose = isHole && focus
    ? { key: `lv${lv}-${pull > 0.5 ? 1 : 0}`, az: 0.55 + lv * 0.42, el: 0.28, dist: (L.kind === "big" ? 9.5 : 8.4) + 4 * pull, target: [focus[0], Y(focus[1]), focus[2]] }
    : { key: `lv${lv}-${pull > 0.5 ? 1 : 0}`, az: 0.55 + lv * 0.42, el: L.kind === "A" || L.kind === "B" ? 0.75 : 0.3, dist: 8.6 + 5 * pull, target: [0, slabY * 0.85, 0] };
  const tot = LEVELS.filter((l) => l.n <= lv).reduce((t, l) => ({ small: t.small + (l.kind === "small" ? 3 : 0), big: t.big + (l.kind === "big" ? 3 : 0) }), { small: 0, big: 0 });
  const rows = [...LEVELS].reverse();

  return (
    <div className="space-y-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-5">
      <div>
        <div className="text-sm font-bold tracking-[0.14em] text-[var(--accent)]">3D HOLE ELEVATOR</div>
        <p className="mt-1 max-w-3xl text-[15px] leading-7 text-[var(--text-muted)]">
          Ride up through the hexagonal box one level at a time. The balls are drawn a little smaller than real so you can see inside; use the true-size button to make them touch. At each hole level only the balls that touch the hole are shown, joined into the little pyramid (small hole) or double pyramid (big hole). A glass floor marks where you are. <b className="text-rose-300">Pink</b> = small hole, <b className="text-white">white</b> = big hole. The ruler on the right is the same picture as the textbook drawing of &ldquo;Location of voids in HCP&rdquo;.
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_250px]">
        <div className="space-y-3">
          <Stage atoms={atoms} bonds={holeBonds} lines={[...lines, ...shapeLines]} polys={polys} camera={camera} autoRotate={!playing && lv === 0} floorY={-2.9 * stretch} height={540} label={`Hole elevator: level ${L.h} (${L.label}) of the HCP cell`} hint="drag to look around" />
          <Narration k={lv}>
            <Rich text={L.say} />
          </Narration>
        </div>
        <div className="space-y-3">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-2.5">
            <div className="mb-1.5 px-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--text-muted)]">Height ruler (tap a level)</div>
            <div className="relative">
              {rows.map((r) => {
                const on = r.n === lv;
                const seen = r.n <= lv;
                const holes = r.kind === "small" || r.kind === "big";
                return (
                  <button key={r.n} type="button" onClick={() => { setPlaying(false); setLv(r.n); }} aria-label={`Go to level ${r.h}: ${r.label}`} aria-current={on} className={`flex w-full items-center gap-2 rounded-lg border px-2 py-1.5 text-left text-[13px] transition ${on ? "border-[var(--accent)] bg-[var(--accent)]/15" : "border-transparent hover:bg-white/5"} ${seen ? "" : "opacity-50"}`}>
                    <span className="inline-block h-3.5 w-3.5 shrink-0 rounded-full border border-black/40" style={{ background: KIND_COL[r.kind] }} />
                    <span className="w-9 shrink-0 font-mono text-xs text-[var(--text-muted)]">{r.h}</span>
                    <span className="flex-1 font-semibold text-[var(--foreground)]">{r.label}</span>
                    {holes && <span className="font-mono text-xs font-bold text-[var(--foreground)]">×3</span>}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-3 text-center">
              <div className="text-[10px] uppercase tracking-[0.12em] text-[var(--text-muted)]">Small holes</div>
              <div className="font-mono text-3xl font-black text-rose-300">{tot.small}<span className="text-sm font-semibold text-[var(--text-muted)]"> / 12</span></div>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--background)] p-3 text-center">
              <div className="text-[10px] uppercase tracking-[0.12em] text-[var(--text-muted)]">Big holes</div>
              <div className="font-mono text-3xl font-black text-white">{tot.big}<span className="text-sm font-semibold text-[var(--text-muted)]"> / 6</span></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Btn primary onClick={() => { setLv(0); setPlaying(true); }}>▶ Ride the elevator</Btn>
        <Btn onClick={() => { setPlaying(false); setLv((v) => Math.max(0, v - 1)); }}>▼ Down</Btn>
        <Btn onClick={() => { setPlaying(false); setLv((v) => Math.min(LEVELS.length - 1, v + 1)); }}>▲ Up</Btn>
        <Btn onClick={() => setReal((v) => !v)}>{real ? "Shrink the balls (see inside)" : "Show true size (touching balls)"}</Btn>
        <Btn onClick={() => setAround((v) => !v)}>{around ? "Hide the surrounding balls" : "Show the surrounding balls"}</Btn>
        <div className="min-w-[220px] flex-1">
          <Slider label="Pull the layers apart" value={pull} onChange={setPull} min={0} max={1} step={0.05} show={pull === 0 ? "closed" : `${Math.round(pull * 100)} %`} />
        </div>
      </div>
    </div>
  );
}
