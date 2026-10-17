"use client";

import { useState } from "react";
import { Chapter, Derivation, Facts, KeyIdea, P, Slider, Tex, Traps, Worked } from "./_ui";

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
