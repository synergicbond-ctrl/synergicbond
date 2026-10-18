"use client";

import { useMemo, useState } from "react";
import { Stage, type CameraPose, type StageAtom, type StageBond, type V3 } from "./_stage";
import { C, cubeEdges } from "./_geom";
import { Btn, Narration, Rich, Tabs, useTour } from "./_ui";

type CnKind = "sc" | "bcc" | "fcc" | "hcp";

type Group = { name: string; color: string };
type Nb = { off: V3; g: number };
type Def = {
  title: string;
  cn: number;
  focus: V3;
  groups: Group[];
  nbs: Nb[];
  dist: string;
  cube: boolean;
  cam: CameraPose;
  intro: string;
  outro: string;
};

function build(kind: CnKind): Def {
  if (kind === "sc") {
    const nbs: Nb[] = [];
    for (const ax of [0, 1, 2]) for (const s of [-1, 1]) {
      const o: V3 = [0, 0, 0];
      o[ax] = 2 * s;
      // focus is the (+,+,+) corner of the cube; offsets of -2 stay inside this cube
      nbs.push({ off: o, g: s < 0 ? 0 : 1 });
    }
    nbs.sort((a, b) => a.g - b.g);
    return {
      title: "Simple cubic",
      cn: 6,
      focus: [1, 1, 1],
      groups: [{ name: "inside this cube (along the 3 edges)", color: C.rose }, { name: "in the 3 neighbouring cubes", color: C.blue }],
      nbs,
      dist: "a",
      cube: true,
      cam: { key: "cn-sc", az: 0.75, el: 0.4, dist: 11 },
      intro: "Take **one corner atom** of a simple cubic lattice (gold). Count the atoms that touch it. Each one is exactly **one edge a** away.",
      outro: "**CN = 6**: ±x, ±y, ±z. Three of them are other corners of this cube; the other three belong to the cubes that share this corner. Simple cubic is the loosest packing, only 6 contacts.",
    };
  }
  if (kind === "bcc") {
    const nbs: Nb[] = [];
    for (const z of [1, -1]) for (const x of [-1, 1]) for (const y of [-1, 1]) nbs.push({ off: [x, y, z], g: z > 0 ? 0 : 1 });
    return {
      title: "Body-centred cubic",
      cn: 8,
      focus: [0, 0, 0],
      groups: [{ name: "the 4 top corners", color: C.violet }, { name: "the 4 bottom corners", color: C.teal }],
      nbs,
      dist: "√3a/2",
      cube: true,
      cam: { key: "cn-bcc", az: 0.7, el: 0.4, dist: 11 },
      intro: "Take the **body-centre atom** (gold). It touches the atoms at the **corners of its cube**, each at a distance of half the body diagonal, **√3a/2**.",
      outro: "**CN = 8**: 4 corners on the top face and 4 on the bottom face. The next six atoms (the centres of the 6 neighbouring cubes) are only 15% farther at distance a, so BCC is sometimes quoted as 8 + 6.",
    };
  }
  if (kind === "fcc") {
    const nbs: Nb[] = [];
    for (const y of [-1, 1]) for (const z of [-1, 1]) nbs.push({ off: [0, y, z], g: 0 });
    for (const y of [-1, 1]) nbs.push({ off: [-1, y, 0], g: 1 });
    for (const z of [-1, 1]) nbs.push({ off: [-1, 0, z], g: 1 });
    for (const y of [-1, 1]) nbs.push({ off: [1, y, 0], g: 2 });
    for (const z of [-1, 1]) nbs.push({ off: [1, 0, z], g: 2 });
    return {
      title: "Face-centred cubic",
      cn: 12,
      focus: [1, 0, 0],
      groups: [
        { name: "the 4 corners of its own face", color: C.violet },
        { name: "the 4 face centres inside the cube", color: C.green },
        { name: "the 4 face centres of the next cube", color: C.blue },
      ],
      nbs,
      dist: "a/√2",
      cube: true,
      cam: { key: "cn-fcc", az: 0.55, el: 0.35, dist: 12.5, target: [0.6, 0, 0] },
      intro: "Take a **face-centre atom** (gold) on the right-hand face. Its nearest atoms lie along the **face diagonals**, at **a/√2**, in three groups of four.",
      outro: "**CN = 12**: 4 in its own face + 4 inside this cube + 4 in the next cube. Seen layer by layer it is **6 in its own close-packed layer + 3 above + 3 below**: the same 12 as in HCP.",
    };
  }
  // hcp: middle-layer atom, 6 in plane, 3 above, 3 below (a = 2, layer gap = a*sqrt(2/3))
  const h = 2 * Math.sqrt(2 / 3);
  const nbs: Nb[] = [];
  for (let k = 0; k < 6; k++) nbs.push({ off: [2 * Math.cos((k * Math.PI) / 3), 0, 2 * Math.sin((k * Math.PI) / 3)], g: 0 });
  for (const phi of [Math.PI / 2, (7 * Math.PI) / 6, (11 * Math.PI) / 6]) nbs.push({ off: [(2 / Math.sqrt(3)) * Math.cos(phi), h, (2 / Math.sqrt(3)) * Math.sin(phi)], g: 1 });
  for (const phi of [Math.PI / 2, (7 * Math.PI) / 6, (11 * Math.PI) / 6]) nbs.push({ off: [(2 / Math.sqrt(3)) * Math.cos(phi), -h, (2 / Math.sqrt(3)) * Math.sin(phi)], g: 2 });
  return {
    title: "Hexagonal close packed",
    cn: 12,
    focus: [0, 0, 0],
    groups: [{ name: "its own layer (hexagon of 6)", color: C.green }, { name: "the 3 in the layer above", color: C.violet }, { name: "the 3 in the layer below", color: C.blue }],
    nbs,
    dist: "a",
    cube: false,
    cam: { key: "cn-hcp", az: 0.6, el: 0.5, dist: 10.5 },
    intro: "Take an atom in the **middle layer** (gold). In its own close-packed layer it touches **6** atoms around it, at the corners of a hexagon.",
    outro: "**CN = 12**: 6 in its own layer + 3 in the layer above (sitting in the dips) + 3 in the layer below. The two layers above and below are directly over each other (ABA), which is the only difference from FCC.",
  };
}

function CnView({ kind }: { kind: CnKind }) {
  const def = useMemo(() => build(kind), [kind]);
  const N = def.nbs.length;
  const tour = useTour(N, 900);
  const step = tour.step;
  const hexAt = (k: number): V3 => def.nbs[k].off;
  const f = def.focus;
  const pos = (k: number): V3 => [f[0] + hexAt(k)[0], f[1] + hexAt(k)[1], f[2] + hexAt(k)[2]];
  const dNb = Math.hypot(...def.nbs[0].off);
  const r = dNb * 0.24;
  const atoms: StageAtom[] = [{ id: "focus", p: f, r: r * 1.15, color: C.gold, glow: true }];
  const bonds: StageBond[] = [];
  for (let k = 0; k < step; k++) {
    const gcol = def.groups[def.nbs[k].g].color;
    atoms.push({ id: `n${k}`, p: pos(k), r, color: gcol, from: f, glow: k === step - 1 });
    bonds.push({ id: `b${k}`, a: f, b: pos(k), r: 0.05, color: k === step - 1 ? "#fff1b8" : gcol });
  }
  const cubeLines = useMemo(() => (def.cube ? cubeEdges("cn", 1, [0, 0, 0], true, 0.55) : []), [def.cube]);
  const counts = def.groups.map((_, gi) => def.nbs.slice(0, step).filter((n) => n.g === gi).length);
  const last = step > 0 ? def.groups[def.nbs[step - 1].g] : null;
  const say =
    step === 0
      ? def.intro
      : step < N
        ? `Neighbour **${step}**: one of **${last?.name}**. Running count = **${step}**.`
        : def.outro;
  return (
    <div className="space-y-3">
      <Stage atoms={atoms} bonds={bonds} lines={cubeLines} camera={def.cam} autoRotate={step === N} floorY={kind === "hcp" ? -2.6 : -2.2} height={460} label={`Animation: counting the coordination number of ${def.title}`} hint="drag to look around" />
      <div className="grid gap-3 sm:grid-cols-[auto_minmax(0,1fr)]">
        <div className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--background)] px-5 py-3">
          <div className="text-xs font-bold tracking-[0.14em] text-[var(--accent)]">NEIGHBOURS</div>
          <div className="font-mono text-4xl font-bold text-[var(--foreground)]">{step}<span className="text-xl text-[var(--text-muted)]"> / {N}</span></div>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm">
          {def.groups.map((g, i) => (
            <span key={g.name} className="inline-flex items-center gap-2 text-[var(--text-muted)]">
              <span className="inline-block h-3 w-3 rounded-full" style={{ background: g.color }} />
              {g.name}: <b className="text-[var(--foreground)]">{counts[i]}</b>
            </span>
          ))}
        </div>
      </div>
      <Narration k={`${kind}-${step}`}>
        <Rich text={say} />
      </Narration>
      <div className="flex flex-wrap items-center gap-3">
        <Btn primary onClick={tour.play}>▶ Count the neighbours</Btn>
        <Btn onClick={() => tour.set(Math.max(0, step - 1))}>◀ Back</Btn>
        <Btn onClick={() => tour.set(Math.min(N, step + 1))}>Next ▶</Btn>
        <span className="text-sm text-[var(--text-muted)]">
          Contact distance: <b className="text-[var(--foreground)]">{def.dist}</b> = 2r
        </span>
      </div>
    </div>
  );
}

const CN_ROWS: [string, string, string, string][] = [
  ["Simple cubic", "6", "a = 2r", "52.4%"],
  ["Body-centred cubic", "8", "√3a/2 = 2r", "68.0%"],
  ["Face-centred cubic (ccp)", "12", "a/√2 = 2r", "74.0%"],
  ["Hexagonal close packed", "12", "a = 2r", "74.0%"],
  ["Diamond (for comparison)", "4", "√3a/4", "34.0%"],
];

export function CoordinationLab() {
  const [kind, setKind] = useState<CnKind>("sc");
  return (
    <div className="space-y-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-5">
      <div>
        <div className="text-sm font-bold tracking-[0.14em] text-[var(--accent)]">COUNT THE COORDINATION NUMBER</div>
        <p className="mt-1 max-w-3xl text-[15px] leading-7 text-[var(--text-muted)]">
          Press the button and watch the neighbours of one atom appear <b>one by one</b>. The counter climbs to <b>6</b> in SC, <b>8</b> in BCC and <b>12</b> in FCC and HCP. Dashed lines show the cube.
        </p>
      </div>
      <Tabs label="Lattice" value={kind} onChange={setKind} items={[["sc", "SC · 6"], ["bcc", "BCC · 8"], ["fcc", "FCC / CCP · 12"], ["hcp", "HCP · 12"]] as const} />
      <CnView key={kind} kind={kind} />
      <div className="overflow-x-auto rounded-xl border border-[var(--border)]">
        <table className="w-full text-left text-sm">
          <thead className="bg-[var(--background)] text-xs tracking-[0.1em] text-[var(--text-muted)]">
            <tr>
              <th className="px-3 py-2">Structure</th>
              <th className="px-3 py-2">CN</th>
              <th className="px-3 py-2">Atoms touch along</th>
              <th className="px-3 py-2">Packing</th>
            </tr>
          </thead>
          <tbody>
            {CN_ROWS.map(([a, b, c, d]) => (
              <tr key={a} className="border-t border-[var(--border)]">
                <td className="px-3 py-2 font-bold text-[var(--foreground)]">{a}</td>
                <td className="px-3 py-2 font-mono text-[var(--accent)]">{b}</td>
                <td className="px-3 py-2 text-[var(--text-muted)]">{c}</td>
                <td className="px-3 py-2 text-[var(--text-muted)]">{d}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
