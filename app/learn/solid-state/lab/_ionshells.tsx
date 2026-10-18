"use client";

import { useMemo, useState } from "react";
import { plainDist } from "./_dist";
import { Tabs } from "./_ui";

type V3 = [number, number, number];
type Struct = "nacl" | "cscl" | "zns";
type Site = { p: V3; anion: boolean };

const CATION = "#f2b13f";
const ANION = "#2fbfae";

const NAMES: Record<Struct, { tab: string; title: string; cation: string; anion: string; ref: string }> = {
  nacl: { tab: "NaCl (rock salt)", title: "Rock salt, 6 : 6", cation: "Na⁺", anion: "Cl⁻", ref: "Cl⁻ at a corner" },
  cscl: { tab: "CsCl", title: "Caesium chloride, 8 : 8", cation: "Cs⁺", anion: "Cl⁻", ref: "Cl⁻ at a corner" },
  zns: { tab: "Zinc blende", title: "Zinc blende, 4 : 4", cation: "Zn²⁺", anion: "S²⁻", ref: "S²⁻ at a corner" },
};

/** All ions within reach of the cell edge, as fractional coordinates; the reference anion sits at the origin. */
function sites(kind: Struct, reach: number): Site[] {
  const out: Site[] = [];
  const R = Math.ceil(reach) + 1;
  const add = (x: number, y: number, z: number, anion: boolean) => {
    if (Math.hypot(x, y, z) <= reach + 1e-6) out.push({ p: [x, y, z], anion });
  };
  for (let i = -R; i <= R; i++) for (let j = -R; j <= R; j++) for (let k = -R; k <= R; k++) {
    if (kind === "cscl") {
      add(i, j, k, true);
      add(i + 0.5, j + 0.5, k + 0.5, false);
      continue;
    }
    const fcc: V3[] = [[0, 0, 0], [0.5, 0.5, 0], [0.5, 0, 0.5], [0, 0.5, 0.5]];
    for (const f of fcc) {
      add(i + f[0], j + f[1], k + f[2], true);
      if (kind === "nacl") add(i + f[0] + 0.5, j + f[1], k + f[2], false);
      else add(i + f[0] + 0.25, j + f[1] + 0.25, k + f[2] + 0.25, false);
    }
  }
  return out;
}

const fr = (x: number) => {
  const q = Math.round(Math.abs(x) * 4);
  const s = x < 0 ? "−" : "";
  if (q % 4 === 0) return `${s}${q / 4}`;
  if (q % 4 === 2) return `${s}${q === 2 ? "" : Math.floor(q / 4)}½`;
  const w = Math.floor(q / 4);
  return `${s}${w === 0 ? "" : w}${q % 4 === 1 ? "¼" : "¾"}`;
};

function place(p: V3, anion: boolean, kind: Struct): string {
  const a = p.map((x) => Math.abs(x));
  const halves = a.filter((x) => Math.abs((x * 2) % 2 - 1) < 1e-9).length;
  const quarters = a.filter((x) => Math.abs((x * 4) % 2 - 1) < 1e-9).length;
  const co = `(${p.map(fr).join(", ")})`;
  const inCell = a.every((x) => x <= 1 + 1e-9);
  const where = inCell ? "" : " of a neighbouring cell";
  if (quarters > 0) return `Tetrahedral hole${where} ${co}`;
  if (anion) {
    if (halves === 0) {
      const s = [...a].sort((x, y) => y - x).join(",");
      return s === "1,0,0" ? "Next corner along an edge" : s === "1,1,0" ? "Corner across a face diagonal" : s === "1,1,1" ? "Corner across the body diagonal" : `Corner${where} ${co}`;
    }
    return `Face centre${where} ${co}`;
  }
  if (kind === "cscl") return `Body centre${where} ${co}`;
  return halves === 3 ? `Body centre${where} ${co}` : `Edge centre${where} ${co}`;
}

const SHELL_COLORS = ["#f2b13f", "#2fbfae", "#e8607a", "#4c9be8", "#9a84e6", "#52c98a", "#f08b4d", "#d86cc2"];

export function IonShells() {
  const [kind, setKind] = useState<Struct>("nacl");
  const nm = NAMES[kind];
  const shells = useMemo(() => {
    const all = sites(kind, 2.01);
    const map = new Map<string, { d16: number; anion: boolean; pts: V3[] }>();
    for (const s of all) {
      const d16 = Math.round((s.p[0] ** 2 + s.p[1] ** 2 + s.p[2] ** 2) * 16);
      if (d16 === 0) continue;
      const k = `${d16}-${s.anion}`;
      const e = map.get(k) ?? { d16, anion: s.anion, pts: [] };
      e.pts.push(s.p);
      map.set(k, e);
    }
    return [...map.values()].sort((a, b) => a.d16 - b.d16 || Number(b.anion) - Number(a.anion)).slice(0, 6);
  }, [kind]);

  const cell: Site[] = useMemo(() => {
    const out: Site[] = [];
    const inside = (p: V3) => p.every((x) => x >= -1e-9 && x <= 1 + 1e-9);
    for (const s of sites(kind, 1.8)) if (inside(s.p)) out.push(s);
    return out;
  }, [kind]);

  const proj = (q: V3): [number, number] => [70 + 150 * (q[0] + 0.5 * q[2]), 215 - 150 * (q[1] + 0.34 * q[2])];
  const edges: [V3, V3][] = [];
  for (const a of [0, 1]) for (const b of [0, 1]) edges.push([[0, a, b], [1, a, b]], [[a, 0, b], [a, 1, b]], [[a, b, 0], [a, b, 1]]);
  const shellOf = (p: V3, anion: boolean) => {
    const d16 = Math.round((p[0] ** 2 + p[1] ** 2 + p[2] ** 2) * 16);
    return shells.findIndex((s) => s.d16 === d16 && s.anion === anion);
  };

  return (
    <div className="space-y-5">
      <Tabs label="Structure" value={kind} onChange={setKind} items={(Object.keys(NAMES) as Struct[]).map((k) => [k, NAMES[k].tab] as const)} />
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <div className="overflow-x-auto rounded-xl border border-[var(--border)]">
          <table className="w-full min-w-[560px] text-sm">
            <thead className="bg-[var(--surface)] text-left text-[11px] uppercase tracking-[0.1em] text-[var(--text-muted)]">
              <tr>
                <th className="px-3 py-2">Shell</th>
                <th className="px-3 py-2">Ion</th>
                <th className="px-3 py-2">Number</th>
                <th className="px-3 py-2">Distance</th>
                <th className="px-3 py-2">Where it sits ({nm.ref})</th>
              </tr>
            </thead>
            <tbody>
              {shells.map((s, i) => (
                <tr key={`${s.d16}-${s.anion}`} className="border-t border-[var(--border)]">
                  <td className="px-3 py-1.5 font-mono">
                    <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full align-middle" style={{ background: SHELL_COLORS[i % SHELL_COLORS.length] }} />
                    {i + 1}
                  </td>
                  <td className="px-3 py-1.5 font-semibold" style={{ color: s.anion ? ANION : CATION }}>{s.anion ? nm.anion : nm.cation}</td>
                  <td className="px-3 py-1.5 font-mono font-bold text-[var(--foreground)]">{s.pts.length}</td>
                  <td className="px-3 py-1.5 text-[var(--foreground)]">
                    <span className="font-mono text-base font-bold">{plainDist(s.d16, 4)}</span> <span className="ml-1 font-mono text-xs text-[var(--text-muted)]">≈ {(Math.sqrt(s.d16) / 4).toFixed(3)} a</span>
                  </td>
                  <td className="px-3 py-1.5 text-[var(--text-muted)]">
                    {place([...s.pts].sort((p, q) => q[0] + q[1] + q[2] - (p[0] + p[1] + p[2]))[0], s.anion, kind)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <svg viewBox="0 0 330 250" role="img" aria-label={`Positions of the ions in one ${nm.title} cell, numbered by neighbour shell`} className="w-full rounded-xl border border-white/10" style={{ background: "radial-gradient(120% 90% at 50% 15%, #17433f 0%, #0c1f1e 55%, #060f0f 100%)" }}>
          {edges.map(([a, b], i) => {
            const [x1, y1] = proj(a), [x2, y2] = proj(b);
            const back = a[2] === 1 || b[2] === 1;
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#cfe5e1" strokeOpacity={back ? 0.28 : 0.6} strokeWidth={1.4} strokeDasharray={back ? "4 4" : undefined} />;
          })}
          {[...cell].sort((a, b) => b.p[2] - a.p[2]).map((s, i) => {
            const [x, y] = proj(s.p);
            const origin = s.p[0] + s.p[1] + s.p[2] === 0;
            const si = origin ? -1 : shellOf(s.p, s.anion);
            return (
              <g key={i} opacity={origin || si >= 0 ? 1 : 0.3}>
                <circle cx={x} cy={y} r={origin ? 10 : s.anion ? 8.5 : 7.5} fill={origin ? "#f4f1e8" : SHELL_COLORS[Math.max(si, 0) % SHELL_COLORS.length]} stroke={s.anion ? ANION : CATION} strokeWidth={origin ? 1.3 : 2.4} />
                <text x={x} y={y + 3.6} textAnchor="middle" fontSize={10} fontWeight={800} fill="#06100f">{origin ? "0" : si >= 0 ? si + 1 : ""}</text>
              </g>
            );
          })}
          <text x={70} y={238} textAnchor="middle" fontSize={10.5} fill="#f4f1e8" fontFamily="ui-serif, Georgia, serif" fontStyle="italic">reference ion</text>
          <text x={236} y={242} textAnchor="middle" fontSize={10.5} fill="#b8cbc7">teal ring = anion, gold ring = cation</text>
        </svg>
      </div>
      <p className="text-xs leading-5 text-[var(--text-muted)]">
        The reference ion is an {nm.anion} at one corner of the cell. Each row groups all ions at the same distance. The numbers inside the cube show which shell every ion in this cell belongs to; ions in neighbouring cells are described by their coordinates in units of the edge a.
      </p>
    </div>
  );
}
