"use client";

import { useMemo, useState } from "react";
import { Stage, type CameraPose, type StageAtom, type StageBond, type StagePoly, type V3 } from "./_stage";
import { C, CORNERS, EDGE_CENTRES, cubeEdges } from "./_geom";
import { Btn, Chapter, Derivation, Facts, KeyIdea, Narration, P, Rich, Slider, Tabs, Tex, Traps, Worked, useTour } from "./_ui";

/* ------------------------------------------------ tolerance factor lab */

function ToleranceLab() {
  const [rA, setRA] = useState(1.44);
  const [rB, setRB] = useState(0.605);
  const rO = 1.4;
  const t = (rA + rO) / (Math.SQRT2 * (rB + rO));
  const verdict =
    t > 1.0 ? "t > 1: A is too big, so the B ion rattles and the cell tends to hexagonal stacking (BaNiO₃ type)"
    : t >= 0.9 ? "0.9 ≤ t ≤ 1: ideal, cubic perovskite (SrTiO₃)"
    : t >= 0.71 ? "0.71 ≤ t < 0.9: A is a little small, so the BO₆ octahedra tilt (GdFeO₃ type)"
    : "t < 0.71: A is too small, so the ilmenite structure is preferred";
  const pct = Math.max(0, Math.min(100, ((t - 0.6) / 0.6) * 100));
  return (
    <div className="space-y-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
      <div className="text-sm font-bold tracking-[0.12em] text-[var(--accent)]">TOLERANCE-FACTOR LAB (r(O²⁻) = 1.40 Å)</div>
      <div className="grid gap-4 md:grid-cols-2">
        <Slider label="Radius of A (big cation)" value={rA} onChange={setRA} min={0.8} max={1.9} step={0.01} unit=" Å" show={`${rA.toFixed(2)} Å`} />
        <Slider label="Radius of B (small cation)" value={rB} onChange={setRB} min={0.4} max={0.9} step={0.005} unit=" Å" show={`${rB.toFixed(3)} Å`} />
      </div>
      <div className="relative h-4 rounded-full bg-gradient-to-r from-[#7c3aed] via-[#16a34a] to-[#ea580c]">
        <div className="absolute top-[-4px] h-6 w-1.5 rounded bg-white shadow" style={{ left: `calc(${pct}% - 3px)` }} />
      </div>
      <div className="text-lg font-bold text-[var(--foreground)]">
        <Tex ex={`t=\\dfrac{r_A+r_O}{\\sqrt2\\,(r_B+r_O)}=${t.toFixed(3)}`} />
      </div>
      <p className="text-[15px] leading-7 text-[var(--text-muted)]">{verdict}</p>
      <p className="text-sm text-[var(--text-muted)]">Try SrTiO₃ (1.44, 0.605), BaTiO₃ (1.61, 0.605) and CaTiO₃ (1.34, 0.605).</p>
    </div>
  );
}

/* ----------------------------------------------------- Euler / C60 lab */

function FullereneLab() {
  const [h, setH] = useState(20);
  const p = 12;
  const V = 20 + 2 * h;
  const E = 30 + 3 * h;
  const F = p + h;
  const names: Record<number, string> = { 0: "C₂₀", 20: "C₆₀ (buckminsterfullerene)", 25: "C₇₀", 30: "C₈₀" };
  return (
    <div className="space-y-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
      <div className="text-sm font-bold tracking-[0.12em] text-[var(--accent)]">FULLERENE CAGE COUNTER</div>
      <Slider label="Hexagonal faces" value={h} onChange={setH} min={0} max={40} step={1} show={`${h}`} />
      <Facts
        cols={4}
        items={[
          ["Pentagons", `${p} (always)`],
          ["Carbon atoms V", `${V}`],
          ["C–C bonds E", `${E}`],
          ["Faces F", `${F}`],
        ]}
      />
      <p className="text-[15px] leading-7 text-[var(--text-muted)]">
        <Tex ex={`V-E+F=${V}-${E}+${F}=${V - E + F}`} /> every time. {names[h] ? `This is ${names[h]}.` : `This cage is C${V}.`} Drag the slider: the number of pentagons never changes, only the hexagons grow.
      </p>
    </div>
  );
}

/* --------------------------------------------- perovskite built in 3D */

const PV_STEPS = [
  "An empty cell: a cube of edge **a**. We will build **ABO₃** (CaTiO₃, SrTiO₃, BaTiO₃) inside it.",
  "**B cations (small, gold)** go on the **8 corners**. Each corner is shared by 8 cells: $8\\times\\tfrac18=1$ B per cell.",
  "**Oxide ions (blue)** go on the **12 edge centres**. Each is shared by 4 cells: $12\\times\\tfrac14=3$ O per cell.",
  "**The A cation (big, violet)** fills the **cube centre**, wholly inside the cell: 1 A. The formula is **A₁B₁O₃ = ABO₃**.",
  "**Every B sits in an octahedron of 6 O.** Take the corner B: 3 oxide ions are in this cell and 3 in the neighbouring cells (faint). Coordination number of B = **6**.",
  "**A touches 12 oxide ions**, the 12 edge centres, all at the same distance $a\\sqrt2/2$. Coordination number of A = **12**. This contact is what the tolerance factor measures.",
];

function PerovskiteLab() {
  const tour = useTour(5, 4200);
  const step = tour.step;
  const bGold = C.gold, oBlue = C.blue, aViolet = C.violet;
  const focusB: V3 = [1, 1, 1];
  const octO: V3[] = [[0, 1, 1], [1, 0, 1], [1, 1, 0], [2, 1, 1], [1, 2, 1], [1, 1, 2]];
  const atoms: StageAtom[] = [
    ...CORNERS.map((p, i) => ({ id: `b${i}`, p, r: 0.27, color: bGold, scale: step >= 1 ? 1 : 0, opacity: step >= 4 && !(p[0] === 1 && p[1] === 1 && p[2] === 1) ? 0.35 : 1, from: [p[0] * 2, p[1] * 2, p[2] * 2] as V3 })),
    ...EDGE_CENTRES.map((p, i) => ({ id: `o${i}`, p, r: 0.34, color: oBlue, scale: step >= 2 ? 1 : 0, opacity: step === 4 && !octO.some((q) => q[0] === p[0] && q[1] === p[1] && q[2] === p[2]) ? 0.3 : 1, from: [p[0] * 2.2, p[1] * 2.2, p[2] * 2.2] as V3 })),
    { id: "a", p: [0, 0, 0], r: 0.52, color: aViolet, scale: step >= 3 ? 1 : 0, opacity: step === 4 ? 0.4 : 1, from: [0, 3, 0], glow: step === 5 },
    ...octO.filter((q) => q.some((c) => Math.abs(c) > 1.001)).map((q, i) => ({ id: `g${i}`, p: q, r: 0.34, color: oBlue, scale: step === 4 ? 1 : 0, opacity: 0.5, glow: true })),
  ];
  const bonds: StageBond[] = [
    ...(step === 4 ? octO.map((q, i) => ({ id: `bo${i}`, a: focusB, b: q, r: 0.045, color: C.white })) : []),
    ...(step === 5 ? EDGE_CENTRES.map((q, i) => ({ id: `ao${i}`, a: [0, 0, 0] as V3, b: q, r: 0.04, color: C.white })) : []),
  ];
  const polys: StagePoly[] = [];
  if (step === 4) polys.push({ id: "oct", verts: octO, faces: [[0, 1, 4], [0, 4, 2], [0, 2, 5], [0, 5, 1], [3, 1, 4], [3, 4, 2], [3, 2, 5], [3, 5, 1]].map((f) => f), color: bGold, opacity: 0.22 });
  const edges = useMemo(() => cubeEdges("pv", 1, [0, 0, 0], true, 0.6), []);
  const cams: CameraPose[] = [
    { key: "pv0", az: 0.7, el: 0.4, dist: 9 }, { key: "pv1", az: 0.7, el: 0.4, dist: 9 }, { key: "pv2", az: 0.9, el: 0.35, dist: 9.2 },
    { key: "pv3", az: 0.6, el: 0.45, dist: 9.4 }, { key: "pv4", az: 0.65, el: 0.35, dist: 10.5, target: [1, 1, 1] }, { key: "pv5", az: 0.8, el: 0.4, dist: 9.4 },
  ];
  return (
    <div className="space-y-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-5">
      <div className="text-sm font-bold tracking-[0.14em] text-[var(--accent)]">BUILD A PEROVSKITE CELL</div>
      <Stage atoms={atoms} bonds={bonds} lines={edges} polys={polys} camera={cams[step]} autoRotate={step === 0 || step === 3} floorY={-2.2} height={470} label="Animation: building the ABO3 perovskite unit cell" hint="drag to look around" />
      <Narration k={step}>
        <Rich text={PV_STEPS[step]} />
      </Narration>
      <div className="flex flex-wrap items-center gap-3">
        <Btn primary onClick={tour.play}>▶ Build the cell</Btn>
        <Btn onClick={() => tour.set(Math.max(0, step - 1))}>◀ Back</Btn>
        <Btn onClick={() => tour.set(Math.min(5, step + 1))}>Next ▶</Btn>
        <span className="text-sm text-[var(--text-muted)]">Step {step + 1} of 6</span>
        <div className="ml-auto flex gap-3 text-sm">
          <span className="rounded-lg border border-[var(--border)] px-3 py-1.5">A <b className="font-mono">{step >= 3 ? 1 : 0}</b></span>
          <span className="rounded-lg border border-[var(--border)] px-3 py-1.5">B <b className="font-mono">{step >= 1 ? 1 : 0}</b></span>
          <span className="rounded-lg border border-[var(--border)] px-3 py-1.5">O <b className="font-mono">{step >= 2 ? 3 : 0}</b></span>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------- spinel: filling the holes */

function SpinelLab() {
  const [kind, setKind] = useState<"normal" | "inverse">("normal");
  const tour = useTour(4, 3200);
  const step = tour.step;
  const W = 640, H = 330;
  const oX = [95, 245, 395, 545];
  const tX = Array.from({ length: 8 }, (_, i) => 40 + i * 76);
  const oc = [105, 255, 405, 555];
  const slotsT = tX.map((x) => ({ x, y: 150 }));
  const slotsO = oc.map((x) => ({ x, y: 250 }));
  type Ion = { id: string; kind: "A" | "B"; slot: { x: number; y: number } };
  const ions: Ion[] = kind === "normal"
    ? [{ id: "A", kind: "A", slot: slotsT[3] }, { id: "B1", kind: "B", slot: slotsO[0] }, { id: "B2", kind: "B", slot: slotsO[2] }]
    : [{ id: "B0", kind: "B", slot: slotsT[3] }, { id: "A", kind: "A", slot: slotsO[0] }, { id: "B2", kind: "B", slot: slotsO[2] }];
  const shown = (i: number) => step >= 1 + i;
  const says = [
    "**One formula unit AB₂O₄** has **4 O²⁻** ions in a cubic close-packed array. Close packing gives **4 octahedral** and **8 tetrahedral** holes for these 4 oxide ions (squares and triangles below). Only **3 of the 12** holes are occupied by cations.",
    kind === "normal" ? "**A²⁺ goes into a tetrahedral hole**: 1 of the 8 (one-eighth filled)." : "**A B³⁺ ion goes into the tetrahedral hole**: 1 of the 8 (one-eighth filled). In an inverse spinel it is B, not A, that takes the tetrahedral site.",
    kind === "normal" ? "**The first B³⁺ goes into an octahedral hole**: 1 of the 4." : "**The A²⁺ ion goes into an octahedral hole**: 1 of the 4. In an inverse spinel A²⁺ is octahedral.",
    kind === "normal" ? "**The second B³⁺ goes into another octahedral hole**: 2 of the 4 (one-half filled). **Normal spinel: A[B₂]O₄**, e.g. MgAl₂O₄, ZnFe₂O₄." : "**The second B³⁺ goes into another octahedral hole.** Octahedral holes now hold A and B. **Inverse spinel: B[AB]O₄**, e.g. Fe₃O₄ = Fe³⁺[Fe²⁺Fe³⁺]O₄, NiFe₂O₄.",
    "**Summary.** Cations fill **1/8 of the tetrahedral** and **1/2 of the octahedral** holes in both forms. They differ only in **who sits where**, which is decided by crystal-field stabilisation (Ni²⁺ d⁸ prefers octahedral sites) and decides whether the solid is ferrimagnetic.",
  ];
  const col = (k: "A" | "B") => (k === "A" ? "#f2b13f" : "#9a84e6");
  return (
    <div className="space-y-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-5">
      <div className="flex flex-wrap items-center gap-3">
        <div className="text-sm font-bold tracking-[0.14em] text-[var(--accent)]">SPINEL: WHO FILLS WHICH HOLE</div>
        <div className="ml-auto"><Tabs label="Spinel type" value={kind} onChange={(v) => { setKind(v); tour.set(4); }} items={[["normal", "Normal A[B₂]O₄"], ["inverse", "Inverse B[AB]O₄"]] as const} /></div>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Spinel: 4 oxide ions with 8 tetrahedral and 4 octahedral holes; cations fill 1 and 2 of them" className="w-full rounded-xl border border-white/10" style={{ background: "radial-gradient(120% 90% at 50% 15%, #17433f 0%, #0c1f1e 55%, #060f0f 100%)" }}>
        <text x={14} y={22} fill="#b8cbc7" fontSize={13}>4 O²⁻ in a close-packed array</text>
        {oX.map((x, i) => <circle key={i} cx={x} cy={62} r={30} fill="#4c9be8" stroke="#0a1b2e" strokeWidth={2} />)}
        {oX.map((x, i) => <text key={`t${i}`} x={x} y={67} textAnchor="middle" fill="#fff" fontSize={13} fontWeight={700}>O²⁻</text>)}
        <text x={14} y={128} fill="#b8cbc7" fontSize={13}>8 tetrahedral holes (1 of 8 filled)</text>
        {slotsT.map((s, i) => <polygon key={i} points={`${s.x},${s.y - 17} ${s.x - 17},${s.y + 14} ${s.x + 17},${s.y + 14}`} fill="none" stroke="#e8607a" strokeWidth={2} strokeDasharray="4 3" />)}
        <text x={14} y={222} fill="#b8cbc7" fontSize={13}>4 octahedral holes (2 of 4 filled)</text>
        {slotsO.map((s, i) => <rect key={i} x={s.x - 18} y={s.y - 18} width={36} height={36} fill="none" stroke="#e8e8e0" strokeWidth={2} strokeDasharray="4 3" />)}
        {ions.map((ion, i) => {
          const on = shown(i);
          return (
            <g key={ion.id} style={{ transform: `translate(${ion.slot.x}px, ${on ? ion.slot.y : ion.slot.y - 150}px)`, opacity: on ? 1 : 0, transition: "transform 900ms cubic-bezier(.2,.8,.2,1), opacity 400ms" }}>
              <circle r={14} fill={col(ion.kind)} stroke="#0a0a0a" strokeWidth={2} />
              <text y={5} textAnchor="middle" fontSize={12} fontWeight={800} fill="#10110f">{ion.kind}</text>
            </g>
          );
        })}
        <text x={W - 14} y={H - 12} textAnchor="end" fill="#b8cbc7" fontSize={12}>Tetrahedral {step >= 1 ? 1 : 0}/8 filled · Octahedral {Math.max(0, Math.min(2, step - 1))}/4 filled</text>
      </svg>
      <Narration k={`${kind}-${step}`}>
        <Rich text={says[Math.min(step, 4)]} />
      </Narration>
      <div className="flex flex-wrap items-center gap-3">
        <Btn primary onClick={tour.play}>▶ Fill the holes</Btn>
        <Btn onClick={() => tour.set(Math.max(0, step - 1))}>◀ Back</Btn>
        <Btn onClick={() => tour.set(Math.min(4, step + 1))}>Next ▶</Btn>
        <span className="text-sm text-[var(--text-muted)]">Step {Math.min(step, 4) + 1} of 5</span>
      </div>
    </div>
  );
}

/* --------------------------------------------------------------- chapter */

export function WestChapter() {
  return (
    <Chapter
      id="depth"
      n="PART 8"
      title="Going deeper: defect chemistry and structure types"
      lead="Extra depth in the style of a university solid-state course: the notation chemists use for defects, how doping is balanced, when a perovskite is stable, how spinels split their cations, and why only some rotation symmetries exist."
    >
      <P t="Everything in this part is original working in the same spirit as a university course (for example A. R. West, “Solid State Chemistry and its Applications”). The ideas are standard; the wording, numbers and figures here are our own. Use them to answer unfamiliar questions: the reasoning, not the memorising, is what the JEE Advanced paper rewards." />

      <h3 className="pt-2 text-2xl font-bold text-[var(--foreground)]">1. Writing defects: Kröger–Vink notation</h3>
      <P t="A defect is written as a symbol with a **subscript** (the site it sits on) and a **superscript** (its **effective charge**, measured against what the perfect lattice has there). A dot • means one unit of effective positive charge, a prime ′ means one unit of negative charge, and × means neutral. The letter $V$ stands for a vacancy and the subscript $i$ for an interstitial position." />
      <div className="overflow-x-auto">
        <table className="w-full min-w-[620px] max-w-4xl text-sm">
          <thead className="text-left text-[11px] uppercase tracking-[0.1em] text-[var(--text-muted)]">
            <tr><th className="py-2 pr-4">Symbol</th><th className="py-2 pr-4">Meaning</th><th className="py-2">Why that charge</th></tr>
          </thead>
          <tbody>
            {[
              ["V_Na′", "Vacancy on a Na⁺ site", "An empty Na⁺ site has 1 unit of positive charge missing, so it is −1 compared with the perfect crystal"],
              ["V_Cl•", "Vacancy on a Cl⁻ site", "Removing a −1 ion leaves +1 compared with the perfect crystal"],
              ["Ag_i•", "Ag⁺ squeezed into an interstitial site", "The interstitial position is empty in the perfect lattice, so an Ag⁺ there is +1"],
              ["Na_Na^×, Cl_Cl^×", "Normal ions on their own sites", "No change, so neutral"],
              ["Sr_Na•", "Sr²⁺ on a Na⁺ site", "+2 where +1 is expected, so +1"],
              ["Y_Zr′", "Y³⁺ on a Zr⁴⁺ site", "+3 where +4 is expected, so −1"],
              ["V_O••", "Oxygen vacancy in an oxide", "Removing O²⁻ leaves +2"],
              ["e′, h•", "A free electron and a hole", "Electron −1, hole +1"],
            ].map(([a, b, c]) => (
              <tr key={a} className="border-t border-[var(--border)]">
                <td className="py-2 pr-4 font-mono font-semibold text-[var(--foreground)]">{a}</td>
                <td className="py-2 pr-4 text-[var(--text-muted)]">{b}</td>
                <td className="py-2 text-[var(--text-muted)]">{c}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <KeyIdea title="Three rules for writing a defect reaction">
        {"**Mass balance** (same atoms each side), **charge balance** (the effective charges add to zero) and **site balance** (the ratio of cation to anion sites must stay as in the perfect crystal; a vacancy counts as a site). A perfect lattice creating defects from nothing is written as null → …"}
      </KeyIdea>
      <div className="grid gap-4 md:grid-cols-2">
        <Worked
          q="Write the Schottky defect in NaCl and the Frenkel defect in AgCl in Kröger–Vink notation."
          steps={["Schottky: both vacancies appear at once, nothing else changes: $\\text{null}\\rightarrow V_{\\mathrm{Na}}'+V_{\\mathrm{Cl}}^{\\bullet}$. Effective charges: $-1+1=0$.", "Frenkel in AgCl: a silver ion leaves its site and goes into an interstitial position: $\\mathrm{Ag}_{\\mathrm{Ag}}^{\\times}\\rightarrow \\mathrm{Ag}_i^{\\bullet}+V_{\\mathrm{Ag}}'$. Effective charges: $+1-1=0$."]}
          answer="Each defect pair is overall neutral, as stoichiometric defects must be"
        />
        <Worked
          q="Write the reaction when SrCl₂ dissolves in NaCl, and the reaction when CaO dissolves in ZrO₂."
          steps={["NaCl host: one Sr²⁺ goes onto a Na⁺ site (+1), and to keep the cation:anion site ratio at 1:1 one Na⁺ site is left empty (−1): $\\mathrm{SrCl_2}\\xrightarrow{\\mathrm{NaCl}}\\mathrm{Sr}_{\\mathrm{Na}}^{\\bullet}+V_{\\mathrm{Na}}'+2\\mathrm{Cl}_{\\mathrm{Cl}}^{\\times}$.", "ZrO₂ host: Ca²⁺ on a Zr⁴⁺ site is −2, balanced by one oxygen vacancy (+2): $\\mathrm{CaO}\\xrightarrow{\\mathrm{ZrO_2}}\\mathrm{Ca}_{\\mathrm{Zr}}''+V_{\\mathrm{O}}^{\\bullet\\bullet}+\\mathrm{O}_{\\mathrm{O}}^{\\times}$."]}
          answer="Each dopant is balanced by one vacancy, which is why doped solids conduct ions"
        />
      </div>

      <h3 className="pt-4 text-2xl font-bold text-[var(--foreground)]">2. Solid solutions and doping with a different charge</h3>
      <P t="A **solid solution** is a crystal where a second substance dissolves in the host without changing its structure. If the two ions have the same charge and similar size (Hume-Rothery: radii within about 15 %), they mix freely, as in Al₂O₃–Cr₂O₃ (ruby). If the charges differ (**aliovalent** substitution), the crystal must compensate, either by making **vacancies or interstitials (ionic compensation)** or by **changing the oxidation state of another ion or creating electrons/holes (electronic compensation)**." />
      <Derivation
        no="8.1"
        title="Composition of yttria-stabilised zirconia (ZrO₂ with Y₂O₃)"
        given="Zirconia ZrO2 is doped so that a fraction x of the zirconium sites hold Y3+ ions. The fluorite structure keeps all cation sites occupied."
        find="The formula of the solid solution and the fraction of oxygen sites that are empty."
        steps={[
          { say: "Write the cation content: $x$ of the cations are Y$^{3+}$ and $1-x$ are Zr$^{4+}$, so the total positive charge per formula unit is:", tex: "(1-x)\\times 4 + x\\times 3 = 4 - x" },
          { say: "The oxygen sites carry $\\mathrm{O^{2-}}$. Let $y$ be the number of oxide ions per formula unit; the crystal is neutral when:", tex: "2y = 4 - x \;\\Rightarrow\; y = 2 - \\frac{x}{2}" },
          { say: "Out of the two oxygen sites per cation, $x/2$ are therefore vacant. As a fraction of all oxygen sites:", tex: "\\text{vacant fraction} = \\frac{x/2}{2} = \\frac{x}{4}" },
        ]}
        result="\mathrm{Zr}_{1-x}\mathrm{Y}_{x}\mathrm{O}_{2-x/2};\qquad \text{fraction of vacant O sites} = \dfrac{x}{4}"
        note="For x = 0.2 the formula is Zr0.8Y0.2O1.9 and 5 % of the oxygen sites are empty. Those vacancies let O²⁻ ions hop, so the solid is an oxide-ion conductor used in fuel cells and oxygen sensors."
      />
      <div className="grid gap-4 md:grid-cols-2">
        <Worked
          q="Li₂O dissolves in NiO and Ni²⁺ ions are partly oxidised to Ni³⁺ to keep neutrality. Find the formula in terms of the fraction of Li."
          steps={["Let the formula be $\\mathrm{Li}_x\\mathrm{Ni}^{2+}_{1-2x}\\mathrm{Ni}^{3+}_{x}\\mathrm{O}$.", "Positive charge: $x+2(1-2x)+3x = 2$, which equals the O²⁻ charge, so the formula balances for every $x$.", "Each Li⁺ (replacing Ni²⁺) is balanced by one Ni³⁺ (a hole on nickel), so the solid becomes a **p-type** semiconductor."]}
          answer="Li_xNi_(1−x)O with x Ni³⁺ ions: electronic compensation"
        />
        <Worked
          q="Which compensation mechanism is likely when CaCl₂ dissolves in NaCl, and what happens to the density?"
          steps={["Ca²⁺ replaces Na⁺ and brings one extra positive charge, so a Na⁺ site is left empty: cation vacancies.", "The total mass falls (a Na⁺ and Cl⁻ leave per two lattice sites while a heavier Ca²⁺ enters), and the cell volume hardly changes.", "Measuring density therefore tells which mechanism operates: vacancies lower the measured density below the 'no-vacancy' prediction."]}
          answer="Ionic compensation by cation vacancies; density is lower than predicted for interstitials"
        />
      </div>
      <Traps items={[
        "A vacancy is not 'nothing': it carries an effective charge, so a V_Na′ attracts a V_Cl• and they can form pairs.",
        "Doping with a LOWER charge cation (Ca²⁺ in ZrO₂) gives anion vacancies; doping with a HIGHER charge cation (Sr²⁺ in NaCl) gives cation vacancies.",
        "Solid solutions change the cell size smoothly with composition (Vegard's law), unlike mixtures of two phases, which give two sets of diffraction lines.",
      ]} />

      <h3 className="pt-4 text-2xl font-bold text-[var(--foreground)]">3. Perovskites and the tolerance factor</h3>
      <P t="The perovskite family ABO₃ (CaTiO₃, SrTiO₃, BaTiO₃) has a large cation A in the centre of a cube, a small cation B at its corners, and oxygen at the edge centres, so each B is inside an octahedron of six O. The structure is only stable if the ions fit together, and the *tolerance factor* says whether they do." />
      <Derivation
        no="8.2"
        title="The Goldschmidt tolerance factor"
        given="An ideal cubic perovskite ABO3 of edge a with A at the cube centre, B at the corners and O at the edge centres. All ions touch their neighbours."
        find="The ratio t that measures how well the ions fit together."
        steps={[
          { say: "B and O touch along a cell edge. B is at a corner, O at an edge centre, so the edge holds one B–O contact on each side:", tex: "a = 2\\,(r_B + r_O)" },
          { say: "A sits at the cube centre. It touches the nearest O, at an edge centre, which is half a face diagonal away:", tex: "\\frac{a\\sqrt2}{2}= r_A + r_O \;\\Rightarrow\; a\\sqrt2 = 2\\,(r_A+r_O)" },
          { say: "Divide the second relation by the first. If the ions fit perfectly the ratio is exactly one; the departure from one is the tolerance factor:", tex: "t=\\frac{r_A+r_O}{\\sqrt2\\,(r_B+r_O)}" },
          { say: "Real structures are stable cubic for $0.9\\le t\\le1.0$. Smaller $t$ means A is too small and the octahedra tilt; larger $t$ means A is too big and layers stack hexagonally." },
        ]}
        result="t = \dfrac{r_A+r_O}{\sqrt{2}\,(r_B+r_O)}"
        note="Worked check, SrTiO₃ (r_Sr = 1.44 Å, r_Ti = 0.605 Å, r_O = 1.40 Å): t = 2.84 / (1.414 × 2.005) = 1.00, ideal cubic."
      />
      <PerovskiteLab />
      <ToleranceLab />
      <KeyIdea title="Why BaTiO₃ is ferroelectric">
        {"For BaTiO₃ $t$ is slightly above 1: the Ti⁴⁺ ion is a little too small for its octahedral hole, so it sits off-centre. Two or more off-centre positions of equal energy give a permanent **electric dipole** that can be reversed by a field: this is **ferroelectricity**, and it is why BaTiO₃ is used in capacitors."}
      </KeyIdea>

      <h3 className="pt-4 text-2xl font-bold text-[var(--foreground)]">4. Spinels: two ways to fill the holes</h3>
      <P t="The spinel AB₂O₄ (MgAl₂O₄, Fe₃O₄, ZnFe₂O₄) is built from a **cubic close-packed array of O²⁻**. For each O²⁻ there is one octahedral void and two tetrahedral voids, so a formula unit with four O has **4 octahedral and 8 tetrahedral voids**. Only **one tetrahedral and two octahedral** voids per formula unit are occupied: one-eighth of the tetrahedral and one-half of the octahedral voids." />
      <Derivation
        no="8.3"
        title="Counting the cations in a spinel cell"
        given="Spinel AB2O4 with O2− in ccp. One unit cell holds 8 formula units, i.e. 32 oxide ions."
        find="Where the 8 A and 16 B cations sit in a unit cell of 8 formula units."
        steps={[
          { say: "In a ccp array of $N$ ions there are $N$ octahedral and $2N$ tetrahedral voids. With $N=32$:", tex: "\\text{octahedral}=32,\\qquad \\text{tetrahedral}=64" },
          { say: "The cell holds 8 formula units, hence $8$ A and $16$ B cations, $24$ in total, filling $24$ of the $96$ voids." },
          { say: "**Normal spinel:** all 8 A (M²⁺) in tetrahedral voids and all 16 B (M³⁺) in octahedral voids:", tex: "\\frac{8}{64}=\\frac18\\ \\text{of tetrahedral},\\qquad \\frac{16}{32}=\\frac12\\ \\text{of octahedral}" },
          { say: "**Inverse spinel:** the 8 A ions and 8 of the B ions go in the octahedral voids; the other 8 B ions go in tetrahedral voids. Written $\\mathrm{B}[\\mathrm{AB}]\\mathrm{O_4}$ (tetrahedral ion first, octahedral ions in brackets)." },
        ]}
        result="\text{normal: } \mathrm{A}[\mathrm{B}_2]\mathrm{O}_4 ;\qquad \text{inverse: } \mathrm{B}[\mathrm{AB}]\mathrm{O}_4"
        note="Which form wins depends on crystal-field stabilisation energy: ions with a large preference for octahedral sites (Ni²⁺ d⁸, Cr³⁺ d³) push themselves into octahedral voids, forcing Fe³⁺ (d⁵, no preference) into the tetrahedral holes."
      />
      <SpinelLab />
      <div className="grid gap-4 md:grid-cols-2">
        <Worked
          q="Fe₃O₄ is an inverse spinel. Write its cation arrangement and estimate its magnetic moment per formula unit (spin only)."
          steps={["Inverse spinel: $\\mathrm{Fe^{3+}}[\\mathrm{Fe^{2+}Fe^{3+}}]\\mathrm{O_4}$.", "Fe³⁺ (d⁵, 5 unpaired) in the tetrahedral hole is antiparallel to the Fe³⁺ in an octahedral hole: their moments cancel exactly.", "Only Fe²⁺ (d⁶, high spin, 4 unpaired) survives: moment $=\\sqrt{4\\times6}\\approx4.9\\,\\mu_B$ by the spin-only formula, or about 4 μ_B in the ordered ferrimagnet."]}
          answer="Fe³⁺[Fe²⁺Fe³⁺]O₄; net moment comes from Fe²⁺ only (ferrimagnetic)"
        />
        <Worked
          q="Is ZnFe₂O₄ normal or inverse? Why?"
          steps={["Zn²⁺ is d¹⁰, so it has no crystal-field preference and also bonds with sp³-like covalency, favouring the tetrahedral site.", "Fe³⁺ is high-spin d⁵ and has zero crystal-field stabilisation in either site, so it goes where Zn²⁺ does not want to be: octahedral.", "Result: Zn²⁺ tetrahedral, Fe³⁺ octahedral."]}
          answer="Normal spinel: Zn[Fe₂]O₄"
        />
      </div>

      <h3 className="pt-4 text-2xl font-bold text-[var(--foreground)]">5. Fullerenes: carbon cages and their voids</h3>
      <P t="Buckminsterfullerene **C₆₀** is a hollow ball of 60 carbon atoms, each bonded to three others (sp² with some strain). The molecules pack in a face-centred cubic array, and like any close-packed solid they leave **octahedral** and **tetrahedral** voids that metal atoms can fill." />
      <Derivation
        no="8.4"
        title="Why every fullerene has exactly 12 pentagons"
        given="A closed cage of V carbon atoms (vertices), E bonds (edges) and F faces, all faces being pentagons or hexagons, and each atom bonded to exactly three others."
        find="The number of pentagons, and the numbers of hexagons, bonds and faces in C60."
        steps={[
          { say: "Euler's rule for any closed polyhedron without holes:", tex: "V - E + F = 2" },
          { say: "Each atom has three bonds and every bond has two ends, so $3V=2E$, i.e. $V=\\tfrac23E$. Let $p$ be the pentagons and $h$ the hexagons, so $F=p+h$. Count bond-sides: every bond borders two faces:", tex: "5p + 6h = 2E" },
          { say: "Substitute $V=\\tfrac23E$ into Euler's rule to get $F=2+\\tfrac13E$, and multiply by 6:", tex: "6p + 6h = 12 + 2E" },
          { say: "Subtract $5p+6h=2E$ from this:", tex: "p = 12" },
          { say: "For C60: $V=60$, so $E=\\tfrac32\\times60=90$ and $F=2+30=32$. Hence $h=32-12=20$." },
        ]}
        result="p = 12 \text{ pentagons always};\quad \mathrm{C_{60}}: 12\text{ pentagons} + 20\text{ hexagons},\ E=90,\ F=32"
        note="The 12 pentagons are what bend the flat graphite sheet into a ball. This is a good way to answer any 'how many pentagons/hexagons' question."
      />
      <FullereneLab />
      <div className="grid gap-4 md:grid-cols-2">
        <Worked
          q="C₆₀ molecules form an fcc lattice. How many octahedral and tetrahedral voids does one unit cell have, and what formula results if alkali atoms fill them all?"
          steps={["fcc cell: $4$ C₆₀ molecules, so $4$ octahedral and $8$ tetrahedral voids.", "Fill all with M: $12$ M per $4$ C₆₀, i.e. $\\mathrm{M_3C_{60}}$.", "K₃C₆₀ and Rb₃C₆₀ are superconductors (Tc about 18 K and 29 K): the alkali atoms donate electrons into the C₆₀ band."]}
          answer="4 octahedral + 8 tetrahedral voids; M₃C₆₀ when all are filled"
        />
        <Worked
          q="How many σ bonds and how many π bonds (in one Kekulé structure) does C₆₀ have?"
          steps={["Edges: $E=90$ C–C connections, so there are $90$ σ bonds.", "Each carbon has three σ bonds and one electron in a p orbital; 60 such electrons pair up as 30 π bonds.", "The 20 hexagons carry the double bonds in an alternating pattern; the pentagon edges are single."]}
          answer="90 σ bonds and 30 π bonds"
        />
      </div>

      <h3 className="pt-4 text-2xl font-bold text-[var(--foreground)]">6. Why crystals have only 2-, 3-, 4- and 6-fold axes</h3>
      <Derivation
        no="8.5"
        title="The crystallographic restriction"
        given="A lattice in a plane with two neighbouring points A and B separated by the shortest lattice distance t. Suppose the lattice has an n-fold rotation axis through every point (angle θ = 360°/n)."
        find="Which values of n are possible."
        steps={[
          { say: "Rotate B about A by $+\\theta$ to get $B'$. Rotate A about B by $-\\theta$ to get $A'$. Because the lattice has the axis everywhere, $A'$ and $B'$ are also lattice points." },
          { say: "$A'B'$ is parallel to $AB$. Resolve along $AB$: its length is $t$ minus the two projections, each $t\\cos\\theta$:", tex: "A'B' = t - 2t\\cos\\theta = t\\,(1-2\\cos\\theta)" },
          { say: "$A'B'$ is a lattice vector parallel to $AB$, so it must be a whole-number multiple of the shortest distance $t$ (or zero). Call the integer $m$:", tex: "1 - 2\\cos\\theta = m \;\\Rightarrow\; \\cos\\theta=\\frac{1-m}{2}" },
          { say: "Since $-1\\le\\cos\\theta\\le1$ the integer $m$ runs from $-1$ to $3$:", tex: "\\cos\\theta=1,\\ \\tfrac12,\\ 0,\\ -\\tfrac12,\\ -1\\ \\Rightarrow\\ \\theta=360^\\circ,\\,60^\\circ,\\,90^\\circ,\\,120^\\circ,\\,180^\\circ" },
        ]}
        result="n = 1,\ 2,\ 3,\ 4,\ 6 \text{ only}"
        note="Five-fold axes cannot tile a plane (pentagons leave gaps). They do appear in quasicrystals, which have order but no repeating unit cell, and in the C60 molecule, which is not a lattice."
      />
      <Facts
        cols={4}
        items={[
          ["Rotation axes allowed", "1, 2, 3, 4, 6"],
          ["Crystal systems", "7"],
          ["Bravais lattices", "14"],
          ["Point groups", "32"],
        ]}
      />
    </Chapter>
  );
}
