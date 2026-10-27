"use client";

import { useMemo, useState } from "react";
import { Stage, type StageAtom, type StageBond, type StageLine, type StagePoly, type V3 } from "./_stage";
import { C, cubeEdges, hexPrismEdges, ionicStructures, polyhedra, wurtziteCell, type IonicKey } from "./_geom";
import { RadiusFig } from "./_figs";
import { IonShells } from "./_ionshells";
import { Btn, Chapter, Derivation, Facts, KeyIdea, Narration, P, Rich, Slider, Tabs, Traps, Worked, useTour, type DerivStep } from "./_ui";

/* ---------------------------------------------------- radius ratio */

const DERIV: Record<string, { title: string; steps: DerivStep[]; result: string }> = {
  lin: {
    title: "Coordination number 2 (linear)",
    steps: [
      { say: "Two anions sit on opposite sides of the cation. This is the arrangement for a very small cation." },
      { say: "Once $r_+/r_-$ rises above $0.155$ the cation can touch three anions without them overlapping, so three-fold coordination takes over. The linear arrangement is therefore the one for the smallest ratios." },
    ],
    result: "\\dfrac{r_+}{r_-} < 0.155",
  },
  tri: {
    title: "Coordination number 3 (trigonal planar)",
    steps: [
      { say: "Three anions touch one another and the central cation. Their centres form an equilateral triangle of side $2r_-$, with the cation at its centroid." },
      { say: "In an equilateral triangle of side $s$ the centroid is $s/\\sqrt3$ from each vertex. Cation and anion touch, so that distance is $r_+ + r_-$:", tex: "r_+ + r_- = \\frac{2r_-}{\\sqrt3}" },
      { say: "Rearrange:", tex: "\\frac{r_+}{r_-} = \\frac{2}{\\sqrt3} - 1" },
    ],
    result: "\\dfrac{r_+}{r_-} = 0.155",
  },
  tet: {
    title: "Coordination number 4 (tetrahedral)",
    steps: [
      { say: "Put the four anions on alternate corners of a cube of edge $b$ and the cation at the cube's centre. Anions touch along face diagonals:", tex: "\\sqrt2\\,b = 2r_-" },
      { say: "The cation touches each anion along half of a body diagonal:", tex: "r_+ + r_- = \\frac{\\sqrt3}{2}\\,b" },
      { say: "Substitute $b = \\sqrt2\\,r_-$:", tex: "r_+ + r_- = \\frac{\\sqrt3}{2}\\sqrt2\\,r_- = \\sqrt{\\tfrac32}\\,r_-" },
    ],
    result: "\\dfrac{r_+}{r_-} = \\sqrt{\\tfrac32} - 1 = 0.225",
  },
  oct: {
    title: "Coordination number 6 (octahedral)",
    steps: [
      { say: "Cut the octahedron through the cation and four anions. The four anions form a square of side $2r_-$ (they touch along its sides) with the cation at the centre." },
      { say: "The diagonal of the square passes through the cation and two anions, so it equals $2(r_+ + r_-)$. Also the diagonal of a square of side $2r_-$ is $\\sqrt2\\times2r_-$:", tex: "\\sqrt2\\,(2r_-) = 2(r_+ + r_-)" },
      { say: "Divide by 2:", tex: "r_+ + r_- = \\sqrt2\\,r_-" },
    ],
    result: "\\dfrac{r_+}{r_-} = \\sqrt2 - 1 = 0.414",
  },
  cub: {
    title: "Coordination number 8 (cubic)",
    steps: [
      { say: "Eight anions at the corners of a cube touch along its edges, so the edge is $2r_-$. The cation sits at the body centre." },
      { say: "The body diagonal of the cube passes through the cation and two corner anions, so it equals $2(r_+ + r_-)$. For an edge $2r_-$ it is also $\\sqrt3\\times2r_-$:", tex: "\\sqrt3\\,(2r_-) = 2(r_+ + r_-)" },
      { say: "Divide by 2:", tex: "r_+ + r_- = \\sqrt3\\,r_-" },
    ],
    result: "\\dfrac{r_+}{r_-} = \\sqrt3 - 1 = 0.732",
  },
};

function RadiusRatio() {
  const polys = useMemo(() => polyhedra(), []);
  const [ratio, setRatio] = useState(0.35);
  const [forced, setForced] = useState<string | null>(null);
  const limits = polys.map((p) => 2 / p.k - 1);
  let auto = 0;
  for (let i = 0; i < polys.length; i++) if (ratio >= limits[i] - 1e-9) auto = i;
  const idx = forced ? polys.findIndex((p) => p.key === forced) : auto;
  const P = polys[idx];
  const R = 0.5;
  const dist = (1 + ratio) * R;
  const gap = P.k * (1 + ratio) - 2;
  const ok = gap >= -1e-9;
  const scaled = P.verts.map((v) => [v[0] * dist, v[1] * dist, v[2] * dist] as V3);
  const atoms: StageAtom[] = [
    { id: "cat", p: [0, 0, 0], r: ratio * R, color: C.gold, glow: !ok },
    ...scaled.map((p, i) => ({ id: `an${i}`, p, r: R, color: ok ? C.teal : C.rose, opacity: 0.62 })),
  ];
  const polysDraw: StagePoly[] = P.faces.length ? [{ id: `poly-${P.key}`, verts: scaled, faces: P.faces, color: ok ? C.steel : C.rose, opacity: 0.12 }] : [];
  const bonds: StageBond[] = P.key === "lin" ? [{ id: "lin", a: scaled[0], b: scaled[1], r: 0.02, color: "#ffffff" }] : [];
  const verdict = ok
    ? forced !== null && idx !== auto
      ? "Possible, but a different coordination number fits this ratio better."
      : "Stable: the cation touches every anion and the anions are clear of one another."
    : "Impossible: the anions would overlap. The cation is too small to hold this many neighbours, so the structure falls to a lower coordination number.";

  return (
    <div className="space-y-5">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <div className="space-y-3">
          <Stage atoms={atoms} bonds={bonds} polys={polysDraw} camera={{ key: "rr", az: 0.7, el: 0.35, dist: 5.6 }} autoRotate floorY={-1.2} height={420} label={`${P.name} arrangement of ${P.cn} anions around a cation, radius ratio ${ratio.toFixed(3)}`} />
          <Slider label="Radius ratio r₊ / r₋" value={ratio} onChange={(v) => { setForced(null); setRatio(v); }} min={0.05} max={1} step={0.005} show={ratio.toFixed(3)} />
          <div className="relative h-3 overflow-hidden rounded-full bg-white/10" aria-hidden>
            {limits.slice(1).map((l, i) => (
              <span key={i} className="absolute top-0 h-full w-px bg-white/45" style={{ left: `${((l - 0.05) / 0.95) * 100}%` }} />
            ))}
            <span className="absolute top-0 h-full w-1.5 -translate-x-1/2 rounded bg-[var(--accent)]" style={{ left: `${((ratio - 0.05) / 0.95) * 100}%` }} />
          </div>
        </div>
        <div className="space-y-4">
          <Tabs label="Coordination number" value={P.key} onChange={(k) => setForced(k)} items={polys.map((p) => [p.key, `CN ${p.cn}`] as const)} />
          <Narration k={`${P.key}-${ok}`}>
            <div className="font-bold">
              {P.name}, coordination number {P.cn}
            </div>
            <div className="mt-1 text-[var(--text-muted)]">
              <Rich text={verdict} />
            </div>
          </Narration>
          <Facts items={[["Textbook range", P.range], ["Lower limit", (2 / P.k - 1).toFixed(3)], ["Anion–anion gap", `${(gap * R).toFixed(3)} r₋`], ["Example", P.example]]} />
        </div>
      </div>
      <Derivation
        key={P.key}
        no={`4.${["lin", "tri", "tet", "oct", "cub"].indexOf(P.key) + 1}`}
        title={DERIV[P.key].title}
        given={`A cation of radius $r_+$ surrounded by ${P.cn} anions of radius $r_-$. The anions touch the cation, and in the limiting case they also touch one another.`}
        find="The limiting radius ratio $r_+/r_-$ at which this arrangement is just stable."
        figure={P.key === "lin" ? undefined : <RadiusFig kind={P.key as "tri" | "tet" | "oct" | "cub"} />}
        steps={DERIV[P.key].steps}
        result={DERIV[P.key].result}
      />
    </div>
  );
}

/* ------------------------------------------------ ionic crystal explorer */

const KEYS: readonly (readonly [IonicKey, string])[] = [
  ["nacl", "NaCl"],
  ["cscl", "CsCl"],
  ["zns", "Zinc blende"],
  ["wurtzite", "Wurtzite"],
  ["caf2", "CaF₂"],
  ["li2o", "Li₂O"],
];

function IonicExplorer() {
  const defs = useMemo(() => ionicStructures(), []);
  const [key, setKey] = useState<IonicKey>("nacl");
  const [slice, setSlice] = useState(false);
  const def = defs[key];
  const tour = useTour(def.stages.length, 2800);
  const step = tour.step;
  const hex = def.cell === "hex";
  const w = useMemo(() => wurtziteCell(1.5), []);

  const atoms: StageAtom[] = [];
  const bonds: StageBond[] = [];
  const polys: StagePoly[] = [];
  def.stages.forEach((st, i) => {
    // once the small ions are in, make the framework glassy so the interior shows (solid again when sliced)
    const glassy = i === 0 && step >= 2 && !slice;
    st.atoms.forEach((a) => atoms.push({ ...a, scale: i < step ? 1 : 0, opacity: glassy ? 0.4 : 1, from: a.from ?? ([a.p[0] * 2.3, a.p[1] * 2.3, a.p[2] * 2.3] as V3) }));
    st.bonds?.forEach((b) => bonds.push({ ...b, scale: i < step ? 1 : 0, opacity: i < step ? 1 : 0 }));
    st.polys?.forEach((p) => polys.push({ ...p, opacity: i < step ? p.opacity : 0 }));
  });
  const lines: StageLine[] = useMemo(() => (hex ? hexPrismEdges("wp", w.a, w.c) : cubeEdges("ic")), [hex, w]);
  const say = step === 0 ? `An empty ${hex ? "hexagonal" : "cubic"} cell. Press **Build** to watch ${def.formula} assemble.` : def.stages[step - 1].say;

  return (
    <div className="space-y-5">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <div className="space-y-3">
          <Stage atoms={atoms} bonds={bonds} polys={polys} lines={lines} clip={slice && !hex && step > 0 ? 1.0005 : null} camera={{ key: `ion-${key}`, az: 0.7, el: 0.42, dist: hex ? 9 : 9.6 }} autoRotate floorY={hex ? -2.2 : -1.9} height={450} label={`${def.name} (${def.formula}) crystal structure`} />
          <Narration k={`${key}-${step}-${slice}`}>
            <Rich text={say} />
          </Narration>
        </div>
        <div className="space-y-4">
          <Tabs label="Structure" value={key} onChange={(k) => { setKey(k); tour.set(defs[k].stages.length); setSlice(false); }} items={KEYS} />
          <div className="flex flex-wrap gap-2">
            <Btn primary onClick={tour.play}>
              ▶ Build
            </Btn>
            {!hex && <Btn onClick={() => setSlice((s) => !s)}>{slice ? "Show whole ions" : "✂ Slice to the cell"}</Btn>}
          </div>
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
            <div className="text-lg font-black text-[var(--foreground)]">
              {def.name} <span className="font-normal text-[var(--text-muted)]">({def.formula})</span>
            </div>
            <dl className="mt-3 space-y-1.5 text-sm">
              <div className="flex justify-between gap-3">
                <dt className="text-[var(--text-muted)]">Cations per cell</dt>
                <dd className="text-right font-mono text-[var(--foreground)]">{def.count.cation}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-[var(--text-muted)]">Anions per cell</dt>
                <dd className="text-right font-mono text-[var(--foreground)]">{def.count.anion}</dd>
              </div>
              <div className="flex justify-between gap-3 border-t border-[var(--border)] pt-1.5">
                <dt className="text-[var(--text-muted)]">Formula units, Z</dt>
                <dd className="text-right font-mono font-bold text-[var(--accent)]">{def.count.z}</dd>
              </div>
            </dl>
          </div>
          <Facts items={[["Coordination", def.cn], ["r₊/r₋", def.ratio], ["Contact", def.edge], ["Examples", def.examples]]} />
          <p className="text-sm leading-6 text-[var(--text-muted)]">{def.note}</p>
          <p className="text-xs leading-5 text-[var(--text-muted)]">Ions are drawn smaller than their true size so the whole structure stays visible; contact relations are in the table above.</p>
        </div>
      </div>
    </div>
  );
}

/* --------------------------------------------------------------- chapter */

export function IonicChapter() {
  return (
    <Chapter id="ionic" n="PART 4" title="Ionic crystals and the radius-ratio rule" lead="Ions pack so that each is surrounded by as many oppositely charged neighbours as it can touch. The ratio of their radii decides how many that is, and therefore which structure forms.">
      <P t="In an ionic crystal the larger ions (usually anions) form the framework and the smaller ions sit in its voids. A small cation that touches too few anions rattles; a large cation that does not fit pushes the anions apart. The best fit is when the cation just touches all its neighbours while the anions just touch each other. That fixes a **limiting radius ratio** for each coordination geometry." />
      <RadiusRatio />
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] max-w-3xl text-sm">
          <thead className="text-left text-[11px] uppercase tracking-[0.1em] text-[var(--text-muted)]">
            <tr>
              <th className="py-2 pr-4">Radius ratio r₊/r₋</th>
              <th className="py-2 pr-4">Coordination no.</th>
              <th className="py-2 pr-4">Geometry</th>
              <th className="py-2">Example</th>
            </tr>
          </thead>
          <tbody className="text-[var(--foreground)]">
            {polyhedra().map((p) => (
              <tr key={p.key} className="border-t border-[var(--border)]">
                <td className="py-2 pr-4 font-mono">{p.range}</td>
                <td className="py-2 pr-4 font-mono">{p.cn}</td>
                <td className="py-2 pr-4">{p.name}</td>
                <td className="py-2">{p.example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <KeyIdea title="How to use the table">
        {"Compute r₊/r₋ (small over large) and read off the coordination number. NaCl: 95/181 = 0.52, so CN 6. CsCl: 169/181 = 0.93, so CN 8. ZnS: 74/184 = 0.40, so CN 4. The rule predicts the right structure for most simple ionic solids; it is a guide, not a law."}
      </KeyIdea>


      <h3 className="pt-4 text-2xl font-bold text-[var(--foreground)]">Beyond eight: larger coordination numbers</h3>
      <P t="The same geometry, applied to higher coordination, gives the lower limits below. Ionic crystals rarely go past 8, but complex ions, intermetallics and the close-packed metals reach 12." />
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] max-w-2xl text-sm">
          <thead className="text-left text-[11px] uppercase tracking-[0.1em] text-[var(--text-muted)]">
            <tr>
              <th className="py-2 pr-4">Geometry around the cation</th>
              <th className="py-2 pr-4">CN</th>
              <th className="py-2">Lower limit of r₊/r₋</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Linear", "2", "—"],
              ["Trigonal planar", "3", "0.155"],
              ["Tetrahedral", "4", "0.225"],
              ["Octahedral", "6", "0.414"],
              ["Trigonal prism", "6", "0.528"],
              ["Pentagonal bipyramid", "7", "0.592"],
              ["Cube", "8", "0.732"],
              ["Dodecahedron (square antiprism)", "8", "0.668"],
              ["Icosahedron", "12", "0.902"],
              ["Cuboctahedron", "12", "1.000"],
            ].map(([a, b, c]) => (
              <tr key={a} className="border-t border-[var(--border)]">
                <td className="py-1.5 pr-4 text-[var(--foreground)]">{a}</td>
                <td className="py-1.5 pr-4 font-mono">{b}</td>
                <td className="py-1.5 font-mono text-[var(--accent)]">{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <KeyIdea title="Temperature and pressure change the coordination number">
          {"**Pressure** squeezes ions closer, so the structure with the **higher** coordination number is favoured: NaCl (6 : 6) turns into the CsCl type (8 : 8) at very high pressure, about 30 GPa. **Heating** expands the lattice and favours the **lower** coordination number: CsCl (8 : 8) changes to the NaCl type (6 : 6) at about 445 °C."}
        </KeyIdea>
        <KeyIdea title="If nothing is given, assume the ideal crystal">
          {"An **ideal** crystal is one in which the cation just touches the anions and the anions just touch each other, so the radius ratio sits at the **limiting** value for its coordination number: 0.414 for NaCl and 0.732 for CsCl. When $r_+/r_-$ is smaller than the limit the anions touch each other and the cation rattles; the edge is then fixed by the anions alone."}
        </KeyIdea>
      </div>
      <Derivation
        no="4.7"
        title="Packing efficiency of an ideal rock-salt crystal"
        given="An ideal NaCl-type crystal: the anions form an FCC lattice and just touch along the face diagonal, while each cation just fits the octahedral void, so $r_+/r_- = 0.414$."
        find="The fraction of the cell volume occupied by the ions."
        steps={[
          { say: "The anions touch along the face diagonal, which carries four anion radii:", tex: "\\sqrt2\\,a = 4r_- \;\\Rightarrow\; a = 2\\sqrt2\\,r_-" },
          { say: "Ions per cell: 4 anions (FCC) and 4 cations (octahedral voids), so $Z = 4$ formula units. The ideal radius ratio gives $r_+ = 0.414\\,r_-$, and:", tex: "V_{\\text{ions}} = 4\\cdot\\tfrac43\\pi\\left(r_-^3 + r_+^3\\right) = \\tfrac{16}{3}\\pi\\,r_-^3\\,(1 + 0.414^3)" },
          { say: "Volume of the cell:", tex: "V_{\\text{cell}} = a^3 = (2\\sqrt2\\,r_-)^3 = 22.63\\,r_-^3" },
          { say: "Divide, using $1 + 0.414^3 = 1.071$:", tex: "\\eta = \\frac{16.755 \\times 1.071}{22.63} = 0.793" },
        ]}
        result="\eta \approx 0.79\;(79\%)"
        note="This is the largest possible packing efficiency of a rock-salt crystal. Any real NaCl-type crystal with $r_+/r_- > 0.414$ has a larger cation, the anions are pushed apart, and the efficiency is lower."
      />

      <h3 className="pt-4 text-2xl font-bold text-[var(--foreground)]">Important ionic structures</h3>
      <P t="Each structure below is built in stages: first the large-ion framework, then the small ions in their holes, then the coordination. Use **Slice to the cell** to see exactly which fraction of every ion belongs to one cell." />
      <IonicExplorer />

      <h3 className="pt-4 text-2xl font-bold text-[var(--foreground)]">Neighbours around an ion, in terms of a</h3>
      <P t="The same neighbour-shell idea works for ionic crystals, with the added question of which kind of ion sits in each shell. The distances are written in terms of the cell edge a, and each row says where the ions sit in the cell: corner, next corner, face centre, edge centre, body centre or tetrahedral hole." />
      <IonShells />

      <h3 className="pt-4 text-2xl font-bold text-[var(--foreground)]">Structure types and the compounds that adopt them</h3>
      <P t="Each structure type is named after one compound (shown in bold). Many other compounds crystallise in the same arrangement." />
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] max-w-3xl text-sm">
          <thead className="text-left text-[11px] uppercase tracking-[0.1em] text-[var(--text-muted)]">
            <tr>
              <th className="py-2 pr-4">Structure</th>
              <th className="py-2">Examples</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Rock salt (NaCl)", "NaCl, KBr, RbI, AgCl, AgBr, MgO, CaO, TiO, FeO, NiO, SnAs, UC, ScN"],
              ["Caesium chloride", "CsCl, TlI, CsAu, CsCN, CuZn, NbO"],
              ["Zinc blende (sphalerite)", "ZnS, CuCl, CdS, HgS, GaP, InAs"],
              ["Wurtzite", "ZnS, ZnO, BeO, MnS, AgI, AlN, SiC, NH₄F"],
              ["Fluorite", "CaF₂, UO₂, HgF₂, LaH₂, PbO₂"],
              ["Antifluorite", "K₂O, K₂S, Li₂O, Na₂O, Na₂Se, Na₂S"],
              ["Nickel arsenide", "NiAs, NiS, FeS, PtSn, CoS"],
              ["Rutile", "TiO₂, MnO₂, SnO₂, WO₂, MgF₂, NiF₂"],
              ["Perovskite", "CaTiO₃ (distorted), SrTiO₃, PbZrO₃, LaFeO₃, LiSrH₃, KMnF₃"],
              ["Spinel", "MgAl₂O₄, ZnFe₂O₄, ZnCr₂S₄"],
            ].map(([a, b]) => (
              <tr key={a} className="border-t border-[var(--border)]">
                <td className="py-1.5 pr-4 font-semibold text-[var(--foreground)]">{a}</td>
                <td className="py-1.5 text-[var(--text-muted)]">{b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-8">
        <Derivation
          no="4.6"
          title="Cell edge from the ionic radii"
          given="Ions are hard spheres. In each structure the cation and anion touch along a definite line of the cell, and the ionic radii are $r_+$ and $r_-$."
          find="The edge $a$ of the NaCl, CsCl and zinc blende cells in terms of $r_+ + r_-$."
          steps={[
            { say: "**NaCl (rock salt).** Along an edge the sequence is anion, cation, anion, so the cation touches the anion on each side. The edge holds one full anion diameter $2r_-$ plus one cation diameter $2r_+$:", tex: "a = 2(r_+ + r_-)" },
            { say: "**CsCl.** The cation at the body centre touches the eight anions at the corners, so the body diagonal carries one cation diameter and two anion radii: $2(r_+ + r_-)$. With body diagonal $\\sqrt3\\,a$:", tex: "\\sqrt3\\,a = 2(r_+ + r_-)" },
            { say: "**Zinc blende.** The cation at $(\\tfrac14,\\tfrac14,\\tfrac14)$ touches the corner anion. That distance is a quarter of the body diagonal:", tex: "r_+ + r_- = \\frac{\\sqrt3}{4}\\,a" },
            { say: "Check with NaCl, $r_+ = 102$ pm and $r_- = 181$ pm:", tex: "a = 2(102 + 181) = 566\\ \\text{pm}" },
          ]}
          result="a_{\text{NaCl}} = 2(r_+ + r_-),\quad a_{\text{CsCl}} = \dfrac{2(r_+ + r_-)}{\sqrt3},\quad a_{\text{ZnS}} = \dfrac{4(r_+ + r_-)}{\sqrt3}"
          note="The measured NaCl edge is 564 pm, so the hard-sphere model is very good here."
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <KeyIdea title="Corundum (Al₂O₃)">
          {"O²⁻ ions are hexagonally close packed. Al³⁺ fills **two-thirds** of the octahedral voids. For N oxide ions there are N octahedral voids, so Al = ⅔N, and Al : O = ⅔N : N = 2 : 3. Each Al³⁺ has coordination 6 and each O²⁻ has 4."}
        </KeyIdea>
        <Traps
          items={[
            "In **fluorite** (CaF₂) the cation coordination is 8 and the anion's is 4. In **anti-fluorite** (Li₂O) they are exchanged: 4 and 8.",
            "**CsCl is not body-centred cubic**: the centre ion differs from the corner ions, so the lattice is simple cubic with a two-ion basis.",
            "Zinc blende and wurtzite are both 4 : 4. They differ in the stacking of the anion layers (ABC against AB).",
            "In an FCC arrangement of N anions, filling **all** tetrahedral voids gives 2N cations (M₂X), and filling **half** gives N (MX).",
          ]}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Worked
          q="NaCl is face-centred cubic with edge 564 pm and molar mass 58.5 g/mol. Calculate its density and the distance between neighbouring Na⁺ and Cl⁻."
          steps={["Z = 4 formula units per cell.", "$\\rho = \\dfrac{4\\times58.5}{(564\\times10^{-10})^3\\times6.022\\times10^{23}} = \\dfrac{234}{1.794\\times10^{-22}\\times6.022\\times10^{23}} = 2.17$ g/cm³.", "Along the edge Cl⁻ – Na⁺ – Cl⁻: $a = 2(r_+ + r_-)$, so the Na–Cl distance is $a/2 = 282$ pm."]}
          answer="2.17 g/cm³; 282 pm"
        />
        <Worked
          q="In CsCl the radii are r(Cs⁺) = 169 pm and r(Cl⁻) = 181 pm. Find the edge length of the cubic cell."
          steps={["Ions touch along the body diagonal: $\\sqrt3\\,a = 2(r_+ + r_-)$.", "$a = \\dfrac{2(169 + 181)}{\\sqrt3} = \\dfrac{700}{1.732} = 404$ pm."]}
          answer="a ≈ 404 pm"
        />
        <Worked
          q="Zinc blende has edge 541 pm. Calculate the Zn–S bond length and the number of ZnS units per cell."
          steps={["S²⁻ is FCC (4 per cell) and Zn²⁺ occupies 4 of the 8 tetrahedral voids, so Z = 4.", "Zn sits a quarter of the way along a body diagonal from a corner S: $d = \\dfrac{\\sqrt3}{4}a = 0.433\\times541 = 234$ pm."]}
          answer="Z = 4; Zn–S = 234 pm"
        />
        <Worked
          q="CaF₂ has edge 546 pm (M = 78 g/mol). Find the density. Why is Z = 4?"
          steps={["Ca²⁺ is FCC: 4 per cell. F⁻ fills all 8 tetrahedral voids: 8 per cell, so Ca : F = 4 : 8 = 1 : 2. Z = 4.", "$\\rho = \\dfrac{4\\times78}{(546\\times10^{-10})^3\\times6.022\\times10^{23}} = \\dfrac{312}{98.0} = 3.18$ g/cm³."]}
          answer="3.18 g/cm³"
        />
      </div>
    </Chapter>
  );
}
