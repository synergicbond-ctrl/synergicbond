"use client";

import type { ComponentType, ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import { DBlockInlineVisuals } from "../DBlockInlineVisuals";

type VisualProps = { className?: string };
type PageBlock = { id: string; label: string; visual: string; markdown: string };

const cx = (...classes: Array<string | false | null | undefined>) => classes.filter(Boolean).join(" ");

function VisualFrame({ title, caption, children }: { title: string; caption: string; children: ReactNode }) {
  return (
    <figure className="my-8 overflow-hidden rounded-3xl border border-cyan-400/20 bg-[#071321] shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
      <div className="border-b border-white/10 px-5 py-4 sm:px-7">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">Scientific visual</p>
        <h3 className="mt-1 text-xl font-black text-white sm:text-2xl">{title}</h3>
      </div>
      <div className="overflow-x-auto p-4 sm:p-7">{children}</div>
      <figcaption className="border-t border-white/10 bg-white/[0.025] px-5 py-3 text-sm leading-6 text-slate-400 sm:px-7">
        {caption}
      </figcaption>
    </figure>
  );
}


function PeriodicDMap(_: VisualProps) {
  const elements = ["Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg"];
  return (
    <VisualFrame title="Where the d-block sits" caption="The central ten-column region is defined by progressive filling of a penultimate d subshell. Group 12 belongs to the block, although its common chemistry does not satisfy the transition-element test.">
      <svg viewBox="0 0 980 410" className="min-w-[760px] w-full" role="img" aria-label="Simplified periodic table with d-block highlighted">
        <rect width="980" height="410" rx="24" fill="#081827"/>
        <text x="490" y="38" textAnchor="middle" fill="#e9fbff" fontSize="24" fontWeight="800">Periodic architecture of the d-block</text>
        <g transform="translate(58 78)">
          {Array.from({length:18}).map((_,c)=><text key={c} x={c*48+21} y="-12" textAnchor="middle" fill="#7893a8" fontSize="12">{c+1}</text>)}
          {[0,1,2,3].map((r)=><g key={r}>
            {Array.from({length:18}).map((_,c)=>{
              const inD = r>=1 && c>=2 && c<=11;
              const fill = inD ? (c===11 ? "#392f55" : "#0e4f65") : (c<2 ? "#17314a" : "#1d2634");
              return <rect key={c} x={c*48} y={r*62} width="42" height="50" rx="7" fill={fill} stroke={inD ? "#55d8ef" : "#33465a"} strokeWidth={inD?2:1}/>;
            })}
          </g>)}
          {elements.map((el,i)=>{
            const row=Math.floor(i/10)+1, col=(i%10)+2;
            return <text key={el} x={col*48+21} y={row*62+31} textAnchor="middle" fill={i%10===9?"#d9c8ff":"#f1fcff"} fontSize="15" fontWeight="800">{el}</text>
          })}
          <path d="M96 270 H575" stroke="#56d7ef" strokeWidth="3" markerEnd="url(#p1arrow)"/>
          <defs><marker id="p1arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#56d7ef"/></marker></defs>
          <text x="335" y="300" textAnchor="middle" fill="#9cecff" fontSize="16" fontWeight="700">Groups 3–12: differentiating electron enters (n−1)d</text>
          <rect x="590" y="266" width="250" height="58" rx="14" fill="#231d37" stroke="#b69aff"/>
          <text x="715" y="290" textAnchor="middle" fill="#e7dcff" fontSize="15" fontWeight="800">Group 12</text>
          <text x="715" y="312" textAnchor="middle" fill="#bba9d8" fontSize="13">d-block, usually not transition</text>
        </g>
      </svg>
    </VisualFrame>
  );
}

function EnergyOrderVisual(_: VisualProps) {
  return (
    <VisualFrame title="Why 4s fills first but empties first" caption="The ordering of 4s and 3d is not fixed. In the neutral atom 4s is initially competitive, but after 3d occupation and ion formation the 3d set is stabilised relative to 4s.">
      <svg viewBox="0 0 980 410" className="min-w-[760px] w-full" role="img" aria-label="Energy ordering of 4s and 3d orbitals before and after d-electron occupation">
        <rect width="980" height="410" rx="24" fill="#081827"/>
        <text x="245" y="48" textAnchor="middle" fill="#e9fbff" fontSize="22" fontWeight="800">Before substantial 3d occupation</text>
        <text x="735" y="48" textAnchor="middle" fill="#e9fbff" fontSize="22" fontWeight="800">In the atom and its cation</text>
        <path d="M75 330 V90 M565 330 V90" stroke="#547088" strokeWidth="2"/>
        <text x="35" y="100" fill="#7893a8" fontSize="14" transform="rotate(-90 35 100)">Energy</text>
        <line x1="125" y1="170" x2="360" y2="170" stroke="#f2b84b" strokeWidth="5"/>
        <text x="375" y="176" fill="#ffd88a" fontSize="18" fontWeight="800">4s</text>
        <line x1="125" y1="210" x2="360" y2="210" stroke="#55d8ef" strokeWidth="5"/>
        <text x="375" y="216" fill="#9cecff" fontSize="18" fontWeight="800">3d</text>
        <path d="M450 205 C500 120,520 120,550 205" fill="none" stroke="#b69aff" strokeWidth="4" markerEnd="url(#p1arrow2)"/>
        <defs><marker id="p1arrow2" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#b69aff"/></marker></defs>
        <line x1="625" y1="155" x2="860" y2="155" stroke="#55d8ef" strokeWidth="5"/>
        <text x="875" y="161" fill="#9cecff" fontSize="18" fontWeight="800">3d</text>
        <line x1="625" y1="245" x2="860" y2="245" stroke="#f2b84b" strokeWidth="5"/>
        <text x="875" y="251" fill="#ffd88a" fontSize="18" fontWeight="800">4s</text>
        <text x="245" y="280" textAnchor="middle" fill="#b8c7d4" fontSize="15">4s is filled before 3d in the Aufbau sequence.</text>
        <text x="735" y="280" textAnchor="middle" fill="#b8c7d4" fontSize="15">On ionisation, ns electrons are removed first.</text>
        <rect x="172" y="315" width="636" height="48" rx="13" fill="#0d2437" stroke="#31536d"/>
        <text x="490" y="345" textAnchor="middle" fill="#dcecf7" fontSize="15" fontWeight="700">Do not treat orbital-energy order as a permanent ladder; it changes with occupancy and charge.</text>
      </svg>
    </VisualFrame>
  );
}

function ClassificationDecision(_: VisualProps) {
  return (
    <VisualFrame title="Classification decision tree" caption="The decisive test is electronic, not merely positional. Apply it to the neutral atom and to chemically meaningful oxidation states.">
      <svg viewBox="0 0 980 430" className="min-w-[760px] w-full" role="img" aria-label="Decision tree separating d-block elements from transition elements">
        <rect width="980" height="430" rx="24" fill="#081827"/>
        <rect x="330" y="40" width="320" height="66" rx="18" fill="#103149" stroke="#55d8ef" strokeWidth="2"/>
        <text x="490" y="68" textAnchor="middle" fill="#e9fbff" fontSize="18" fontWeight="800">Is the differentiating electron placed in d?</text>
        <text x="490" y="91" textAnchor="middle" fill="#aac3d5" fontSize="13">Position test</text>
        <path d="M490 106 V145 M490 145 H230 V175 M490 145 H750 V175" stroke="#3f6079" strokeWidth="3"/>
        <text x="320" y="138" fill="#8ee9fa" fontSize="14" fontWeight="800">YES</text>
        <text x="675" y="138" fill="#f7a9a9" fontSize="14" fontWeight="800">NO</text>
        <rect x="90" y="175" width="280" height="72" rx="17" fill="#0e4f65" stroke="#55d8ef"/>
        <text x="230" y="205" textAnchor="middle" fill="#f3fdff" fontSize="18" fontWeight="800">d-block element</text>
        <text x="230" y="230" textAnchor="middle" fill="#b4dbe5" fontSize="13">Now apply the chemical test</text>
        <rect x="610" y="175" width="280" height="72" rx="17" fill="#2b2438" stroke="#6e5c85"/>
        <text x="750" y="207" textAnchor="middle" fill="#e7dcff" fontSize="18" fontWeight="800">Not a d-block element</text>
        <path d="M230 247 V285" stroke="#3f6079" strokeWidth="3"/>
        <rect x="75" y="285" width="310" height="72" rx="17" fill="#14324a" stroke="#b69aff"/>
        <text x="230" y="313" textAnchor="middle" fill="#f5efff" fontSize="16" fontWeight="800">Atom or common ion has incomplete d?</text>
        <text x="230" y="338" textAnchor="middle" fill="#c5b8d9" fontSize="13">Chemical definition</text>
        <path d="M385 321 H505 M75 321 H30" stroke="#3f6079" strokeWidth="3"/>
        <rect x="505" y="285" width="200" height="72" rx="17" fill="#164b36" stroke="#66e2a8"/>
        <text x="605" y="313" textAnchor="middle" fill="#e8fff4" fontSize="16" fontWeight="800">Transition element</text>
        <text x="605" y="338" textAnchor="middle" fill="#b9efd4" fontSize="13">Cu, Ag, Au, Pd qualify</text>
        <rect x="720" y="285" width="205" height="72" rx="17" fill="#3a2f23" stroke="#f2b84b"/>
        <text x="822" y="313" textAnchor="middle" fill="#fff4d6" fontSize="16" fontWeight="800">Not transition</text>
        <text x="822" y="338" textAnchor="middle" fill="#e9d29f" fontSize="13">Zn, Cd, Hg: d10 throughout</text>
        <text x="490" y="400" textAnchor="middle" fill="#91a9ba" fontSize="14">A filled d shell in the neutral atom does not automatically exclude an element; examine accessible ions.</text>
      </svg>
    </VisualFrame>
  );
}


const VISUALS: Record<string, ComponentType<VisualProps>> = {
  "periodic": PeriodicDMap,
  "energy": EnergyOrderVisual,
  "decision": ClassificationDecision,
};

const PAGES: PageBlock[] = [
{
  id: "position",
  label: "Position, meaning and scope",
  visual: "periodic",
  markdown: String.raw`# Definition and classification of d-block elements

The **d-block** occupies the broad central region of the periodic table between the strongly electropositive s-block and the predominantly covalent p-block. Its members belong mainly to Groups 3–12. During the construction of each long period, the differentiating electron enters a d subshell belonging to the shell immediately inside the outermost shell. Thus the characteristic filling pattern is not an outer-shell expansion, but a **penultimate-shell expansion**.

For a period containing outer principal quantum number $n$, the differentiating subshell is $(n-1)d$. This gives four rows:

| Series | Subshell filled | Conventional span | Outer shell involved |
|---|---|---|---|
| First transition series | $3d$ | Sc to Zn | $4s$ |
| Second transition series | $4d$ | Y to Cd | $5s$ |
| Third transition series | $5d$ | La/Hf to Hg | $6s$ |
| Fourth transition series | $6d$ | Ac/Rf to Cn | $7s$ |

The third row needs careful wording. Lanthanum is commonly shown at the beginning because its outer configuration contains $5d^1 6s^2$, while the fourteen lanthanoids intervene before hafnium. In most chemical discussions of the regular 5d sequence, the comparison begins with Hf and continues to Hg.

## Why the word “transition” was used

Historically these metals were said to bridge the chemistry of the s-block and p-block. That description is useful but not a definition. They are metals like the s-block elements, yet many of their compounds show covalency, complex formation and directional bonding more typical of the p-block. Their properties also change gradually across a row rather than jumping sharply from one group to the next.

The central position therefore explains the name, but **electronic structure decides the classification**.

> **Core distinction:** every transition element considered here lies in the d-block, but every d-block element is not necessarily a transition element.

## The modern chemical test

A transition element is an element whose atom has an incomplete d subshell, or which forms at least one chemically meaningful ion with an incomplete d subshell. This definition immediately separates *position* from *behaviour*. A metal may sit in Group 12 because its differentiating electron entered d, yet fail the transition test if its atom and stable ions remain $d^{10}$.

The definition also explains why the chemistry of the block is dominated by d-electron count. Partly filled d orbitals produce variable oxidation states, magnetic moments, ligand-field colour, complex formation and several kinds of catalytic behaviour.`,
},
{
  id: "classification",
  label: "d-block versus transition element",
  visual: "decision",
  markdown: String.raw`# Applying the definition correctly

## Group 12: present in the block, excluded from the transition class

Zinc, cadmium and mercury possess the outer configurations:

$$
\mathrm{Zn:[Ar]\,3d^{10}4s^2,\quad Cd:[Kr]\,4d^{10}5s^2,\quad Hg:[Xe]\,4f^{14}5d^{10}6s^2}
$$

Their overwhelmingly important oxidation state is $+2$. Removal of the two ns electrons gives $\mathrm{Zn^{2+}}$, $\mathrm{Cd^{2+}}$ and $\mathrm{Hg^{2+}}$, all with $d^{10}$ configurations. Since neither the atoms nor their ordinary stable ions contain an incomplete d shell, their chemistry lacks many characteristic transition features. Their ions are commonly diamagnetic and their simple compounds do not obtain colour from d–d excitation.

They remain **d-block elements** because of their position and differentiating-electron history. Their chemistry is studied with the transition metals because they terminate the 3d, 4d and 5d rows and reveal how properties collapse when the d shell becomes full.

## Why copper, silver, gold and palladium are different

A neutral copper atom is $3d^{10}4s^1$ and a neutral silver atom is $4d^{10}5s^1$. If one looked only at the neutral d shell, both might appear excluded. Their common oxidation chemistry resolves the issue:

- $\mathrm{Cu^{2+}}$ is $3d^9$.
- $\mathrm{Ag^{2+}}$, though less common, is $4d^9$.
- $\mathrm{Au^{3+}}$ is $5d^8$.
- $\mathrm{Pd^{2+}}$ is $4d^8$, even though Pd itself is $4d^{10}5s^0$.

Therefore each forms at least one ion with an incomplete d subshell and satisfies the transition-element definition.

## Scandium: a useful boundary case

Scandium has $\mathrm{[Ar]\,3d^1 4s^2}$ in the atom, so it qualifies immediately. Its dominant ion $\mathrm{Sc^{3+}}$ is $d^0$ and many scandium compounds are colourless and diamagnetic. This shows why classification is not a checklist requiring every transition property. The atom itself already passes the electronic test.

## Common classification errors

| Incorrect shortcut | Why it fails | Correct method |
|---|---|---|
| “Groups 3–12 are transition elements.” | Group 12 commonly remains $d^{10}$. | Apply the incomplete-d test. |
| “A $d^{10}$ atom can never be transition.” | Cu, Ag, Au and Pd form incomplete-d ions. | Examine atom **and** significant ions. |
| “Every transition ion must be coloured.” | $d^0$, $d^{10}$ and some forbidden transitions may be colourless or weak. | Colour is a property, not the definition. |
| “Sc is not transition because $\mathrm{Sc^{3+}}$ is $d^0$.” | Neutral Sc is $d^1$. | One qualifying atom or ion is sufficient. |

> The definition is deliberately broad enough to include elements whose transition character appears only in selected oxidation states.`,
},
{
  id: "general-config",
  label: "General electronic configuration",
  visual: "energy",
  markdown: String.raw`# General electronic configuration

The compact outer configuration is written as

$$
\mathrm{(n-1)d^{1-10}ns^{0-2}}
$$

The expression is a **range**, not a rule that every atom must possess two ns electrons. The d and ns levels are so close in energy that small changes in exchange energy, pairing, shielding, relativistic effects and electron–electron repulsion can change the observed ground state.

## Complete first-row configurations

| Element | Atomic number | Ground-state outer configuration | d count in atom |
|---|---:|---|---:|
| Sc | 21 | $3d^1 4s^2$ | 1 |
| Ti | 22 | $3d^2 4s^2$ | 2 |
| V | 23 | $3d^3 4s^2$ | 3 |
| Cr | 24 | $3d^5 4s^1$ | 5 |
| Mn | 25 | $3d^5 4s^2$ | 5 |
| Fe | 26 | $3d^6 4s^2$ | 6 |
| Co | 27 | $3d^7 4s^2$ | 7 |
| Ni | 28 | $3d^8 4s^2$ | 8 |
| Cu | 29 | $3d^{10}4s^1$ | 10 |
| Zn | 30 | $3d^{10}4s^2$ | 10 |

Chromium and copper are the familiar departures from a simple Aufbau prediction. Writing Cr as $3d^4 4s^2$ or Cu as $3d^9 4s^2$ would place two electrons in 4s while leaving a particularly useful d distribution one electron short. Promotion of one 4s electron yields $d^5$ for Cr and $d^{10}$ for Cu.

The school-level explanation invokes extra stability of half-filled and fully filled subshells. At JEE Advanced level, treat this as a summary of several contributions:

1. **Exchange stabilisation:** parallel-spin electrons in different degenerate orbitals permit favourable exchange interactions.
2. **Reduced pairing:** the $d^5$ arrangement places one electron in each d orbital before pairing.
3. **Small 3d–4s separation:** only a modest energetic rearrangement is needed.
4. **Electron correlation:** the energy of a real multielectron atom is not obtained by adding fixed one-electron orbital energies.

Half-filled stability is therefore not a magical independent rule. It wins only when the energy gained exceeds the promotion and reorganisation costs.

## The first important caution

The printed order $4s$ before $3d$ in the Aufbau sequence does not mean 4s remains lower for every atom and ion. Orbital energies depend on occupancy. Once d electrons are present, the 3d set is stabilised strongly and the 4s electrons become the first to be removed during ion formation.`,
},
{
  id: "heavy-series",
  label: "4d and 5d configurations",
  visual: "",
  markdown: String.raw`# Configurations of the heavier series

The second and third rows show more deviations because their d and ns energy levels are even more competitive. A configuration table is more reliable than a single mnemonic.

## Second transition series

| Element | Outer configuration | Important comment |
|---|---|---|
| Y | $4d^1 5s^2$ | regular beginning |
| Zr | $4d^2 5s^2$ | regular |
| Nb | $4d^4 5s^1$ | one 5s electron |
| Mo | $4d^5 5s^1$ | half-filled d set |
| Tc | $4d^5 5s^2$ or commonly tabulated $4d^6 5s^1$ depending on convention/source precision | close levels; use the adopted data table consistently |
| Ru | $4d^7 5s^1$ | rearranged |
| Rh | $4d^8 5s^1$ | rearranged |
| Pd | $4d^{10}5s^0$ | completely empty 5s |
| Ag | $4d^{10}5s^1$ | coinage-metal pattern |
| Cd | $4d^{10}5s^2$ | filled-shell terminus |

The supplied examination table uses $4d^6 5s^1$ for Tc and $4d^7 5s^1$ for Ru. Very close configurations can be represented differently in older references because experimental term assignments and shorthand conventions have evolved. For the website, one internally consistent modern table should be used and source differences should not be mixed in a single row.

## Third transition series

| Element | Outer configuration | Important comment |
|---|---|---|
| La | $5d^1 6s^2$ | precedes lanthanoid filling |
| Hf | $5d^2 6s^2$ | close size match with Zr |
| Ta | $5d^3 6s^2$ | regular |
| W | $5d^4 6s^2$ | unlike simple Cr analogy |
| Re | $5d^5 6s^2$ | half-filled d set with two 6s electrons |
| Os | $5d^6 6s^2$ | regular heavy-row pattern |
| Ir | $5d^7 6s^2$ | regular |
| Pt | $5d^9 6s^1$ | rearranged |
| Au | $5d^{10}6s^1$ | filled d shell in atom |
| Hg | $5d^{10}6s^2$ | filled-shell terminus |

Relativistic contraction of 6s and related shifts in 5d energies become important in this row. A simple “half-filled or full” rule is therefore insufficient to derive every configuration.

## Fourth transition series

The 6d row extends through the superheavy elements. Its chemistry is experimentally limited and affected strongly by relativity and radioactivity. For JEE purposes, knowing the existence and placement of the row is sufficient; detailed prediction of every superheavy configuration is not a reliable application of elementary rules.`,
},
{
  id: "ions",
  label: "Ion formation and d-electron count",
  visual: "energy",
  markdown: String.raw`# Formation of transition-metal ions

## The removal rule

For a neutral first-row atom written as $3d^x4s^y$, remove the $4s$ electrons before removing $3d$ electrons. Thus:

$$
\mathrm{Fe:[Ar]\,3d^6 4s^2}
$$

$$
\mathrm{Fe^{2+}:[Ar]\,3d^6,\qquad Fe^{3+}:[Ar]\,3d^5}
$$

This is not a contradiction of Aufbau filling. Filling order describes the route by which the neutral atom is assembled from lower atomic numbers. Ionisation describes the energies in the already occupied atom, where the 3d set has become lower and more strongly bound than 4s.

## Fast d-count method

For the common transition elements, a useful counting relation is

$$
d\text{-electron count} \approx \text{group number} - \text{oxidation state}
$$

Examples:

- $\mathrm{Ti^{3+}}$: group 4 minus 3 gives $d^1$.
- $\mathrm{Cr^{3+}}$: group 6 minus 3 gives $d^3$.
- $\mathrm{Mn^{2+}}$: group 7 minus 2 gives $d^5$.
- $\mathrm{Fe^{3+}}$: group 8 minus 3 gives $d^5$.
- $\mathrm{Co^{2+}}$: group 9 minus 2 gives $d^7$.
- $\mathrm{Ni^{2+}}$: group 10 minus 2 gives $d^8$.
- $\mathrm{Cu^{2+}}$: group 11 minus 2 gives $d^9$.

This shortcut counts metal d electrons after formal oxidation. It should not be used blindly for organometallic species whose electron accounting requires ligand classification, metal–metal bonds or non-innocent ligands.

## High-yield ionic configurations

| Ion | Configuration | Immediate inference |
|---|---|---|
| $\mathrm{Sc^{3+}}$ | $d^0$ | colourless by d–d mechanism, diamagnetic |
| $\mathrm{Ti^{3+}}$ | $d^1$ | one unpaired electron |
| $\mathrm{V^{2+}}$ | $d^3$ | three unpaired electrons in weak fields |
| $\mathrm{Cr^{3+}}$ | $d^3$ | especially important stable state |
| $\mathrm{Mn^{2+}}$ | $d^5$ | half-filled, high-spin in common aqua salts |
| $\mathrm{Fe^{2+}}$ | $d^6$ | field-dependent spin state |
| $\mathrm{Fe^{3+}}$ | $d^5$ | high-spin in many simple salts |
| $\mathrm{Co^{2+}}$ | $d^7$ | commonly paramagnetic |
| $\mathrm{Ni^{2+}}$ | $d^8$ | geometry can control pairing |
| $\mathrm{Cu^{+}}$ | $d^{10}$ | diamagnetic; often unstable in water |
| $\mathrm{Cu^{2+}}$ | $d^9$ | one unpaired electron; Jahn–Teller effects later |
| $\mathrm{Zn^{2+}}$ | $d^{10}$ | diamagnetic and not a transition ion |

> Always determine oxidation state first, then d count, then use geometry and ligand strength to discuss spin or colour.`,
},
{
  id: "properties",
  label: "Why incomplete d shells matter",
  visual: "",
  markdown: String.raw`# Electronic origin of characteristic properties

A partly filled d shell is not merely a classification label. The d orbitals extend far enough from the nucleus to interact with ligands and neighbouring metal atoms, while remaining close enough in energy to permit several competing electronic arrangements.

## Variable oxidation state

The ns and $(n-1)d$ electrons can be similar in energy. Different numbers of these electrons may participate in bonding, so adjacent oxidation states often differ by one unit. The available range is widest near the centre of a transition row.

## Complex formation

Transition-metal ions commonly have high charge density and orbitals of suitable energy and symmetry to accept electron pairs from ligands. The resulting metal–ligand interactions split the d levels and control geometry, colour, spin and reactivity.

## Colour

In a free ion the five d orbitals are degenerate. In a ligand field they separate into sets of different energy. Absorption of visible light may promote an electron between these sets. The observed colour is complementary to the principal absorbed colour. Intensely coloured $d^0$ oxoanions such as chromate and permanganate require a different explanation—charge transfer.

## Magnetism

Unpaired d electrons produce paramagnetism. Their number gives the first estimate of spin-only magnetic moment:

$$
\mu_{\mathrm{so}}=\sqrt{n(n+2)}\ \mathrm{BM}
$$

The bulk metals Fe, Co and Ni can show ferromagnetic ordering, which is not the same as the paramagnetism of an isolated hydrated ion.

## Catalysis and metal–metal bonding

Accessible oxidation states allow a metal to shuttle electrons during a catalytic cycle. Surface d orbitals also adsorb reactants and weaken bonds. In heavier transition elements, strong d overlap favours metal–metal bonds and cluster formation.

## Horizontal similarity

Across a transition row, added electrons enter an inner d subshell while the outer ns shell changes less dramatically. Consequently neighbouring elements often resemble one another more than neighbouring p-block elements do. This gradual variation is a defining feature of transition chemistry.`,
},
{
  id: "summary",
  label: "Classification and configuration atlas",
  visual: "decision",
  markdown: String.raw`# Compact atlas for revision

## Three questions that solve most classification problems

1. **Where is the element?** If the differentiating electron enters d, it belongs to the d-block.
2. **Does the atom contain incomplete d?** If yes, it is a transition element.
3. **If the atom is $d^{10}$, does an important ion become $d^1$ to $d^9$?** If yes, it still qualifies.

## Final classification table

| Species or element | d-block? | Transition element? | Reason |
|---|---|---|---|
| Sc | Yes | Yes | atom is $3d^1$ |
| Ti | Yes | Yes | atom and ions have incomplete d |
| Cu | Yes | Yes | $\mathrm{Cu^{2+}}$ is $d^9$ |
| Ag | Yes | Yes | accessible Ag oxidation states include incomplete d |
| Au | Yes | Yes | $\mathrm{Au^{3+}}$ is $d^8$ |
| Pd | Yes | Yes | $\mathrm{Pd^{2+}}$ is $d^8$ |
| Zn | Yes | No in ordinary classification | atom and $\mathrm{Zn^{2+}}$ are $d^{10}$ |
| Cd | Yes | No in ordinary classification | atom and $\mathrm{Cd^{2+}}$ are $d^{10}$ |
| Hg | Yes | No in ordinary classification | atom and common ions do not display normal incomplete-d transition chemistry |

## Configuration checkpoints

- General range: $(n-1)d^{1-10}ns^{0-2}$.
- Cr: $3d^5 4s^1$.
- Cu: $3d^{10}4s^1$.
- Pd: $4d^{10}5s^0$.
- Pt: $5d^9 6s^1$.
- Au: $5d^{10}6s^1$.
- Ionisation removes ns before $(n-1)d$.
- The group-number shortcut gives d count for many simple ions.

## Precision statements

Do not say “d orbitals are always vacant and accept lone pairs.” Occupied d orbitals participate in bonding too, and modern metal–ligand bonding includes donation, electrostatic interaction and often back-donation.

Do not say “half-filled shells are always more stable.” They may be favoured when exchange and pairing advantages exceed other energy changes.

Do not say “transition elements are coloured.” Colour belongs to a specified species in a specified environment, not automatically to the element name.

> **Part 1 conclusion:** the periodic position tells us where the d-block lies; the incomplete-d criterion tells us which of its elements are truly transition elements; changing orbital energies explain both anomalous atoms and the configurations of their ions.`,
}
];

const markdownComponents = {
  h1: (props: any) => <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl" {...props} />,
  h2: (props: any) => <h3 className="mt-10 border-l-4 border-cyan-400 pl-4 text-2xl font-black text-white" {...props} />,
  h3: (props: any) => <h4 className="mt-8 text-xl font-extrabold text-cyan-200" {...props} />,
  p: (props: any) => <p className="mt-4 text-[1.02rem] leading-8 text-slate-200" {...props} />,
  strong: (props: any) => <strong className="font-extrabold text-white" {...props} />,
  em: (props: any) => <em className="text-cyan-100" {...props} />,
  ul: (props: any) => <ul className="mt-4 space-y-2 pl-6 text-slate-200 marker:text-cyan-300" {...props} />,
  ol: (props: any) => <ol className="mt-4 space-y-2 pl-6 text-slate-200 marker:font-bold marker:text-amber-300" {...props} />,
  li: (props: any) => <li className="leading-7" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="my-6 rounded-2xl border border-amber-300/20 bg-amber-300/[0.07] px-5 py-4 text-amber-50 shadow-inner" {...props} />
  ),
  table: (props: any) => (
    <div className="my-7 overflow-x-auto rounded-2xl border border-white/10">
      <table className="min-w-full border-collapse text-left text-sm text-slate-200" {...props} />
    </div>
  ),
  thead: (props: any) => <thead className="bg-cyan-400/10 text-cyan-100" {...props} />,
  th: (props: any) => <th className="whitespace-nowrap border-b border-r border-white/10 px-4 py-3 font-black last:border-r-0" {...props} />,
  td: (props: any) => <td className="border-b border-r border-white/10 px-4 py-3 align-top leading-6 last:border-r-0" {...props} />,
  code: (props: any) => <code className="rounded bg-white/10 px-1.5 py-0.5 text-cyan-100" {...props} />,
  hr: () => <hr className="my-10 border-white/10" />,
};

export default function DBlockPart01() {
  return (
    <main className="min-h-screen bg-[#050b14] text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_34%),linear-gradient(135deg,#07111f,#0b1a2c_55%,#10142a)] px-6 py-9 shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:px-10 sm:py-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-cyan-200">
              D-block • Part 1
            </span>
            <span className="rounded-full border border-violet-300/30 bg-violet-300/10 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-violet-200">
              JEE Advanced Theory
            </span>
          </div>
          <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-6xl">Definition, Classification and Electronic Configuration</h1>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">A rigorous foundation for deciding what belongs to the d-block, what qualifies as a transition element, and how near-degenerate ns and (n−1)d orbitals generate the configurations used throughout the chapter.</p>
          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4"><p className="text-xs font-black uppercase tracking-wider text-cyan-300">Format</p><p className="mt-1 font-bold">Source-grounded original notes</p></div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4"><p className="text-xs font-black uppercase tracking-wider text-amber-300">Focus</p><p className="mt-1 font-bold">Cause → trend → exception</p></div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4"><p className="text-xs font-black uppercase tracking-wider text-violet-300">Assessment</p><p className="mt-1 font-bold">Theory only; questions later</p></div>
          </div>
        </header>

        <nav className="sticky top-2 z-20 mt-5 overflow-x-auto rounded-2xl border border-white/10 bg-[#07111f]/95 p-2 shadow-xl backdrop-blur">
          <div className="flex min-w-max gap-2">
            {PAGES.map((page, index) => (
              <a key={page.id} href={`#${page.id}`} className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-bold text-slate-300 transition hover:border-cyan-300/40 hover:text-white">
                {index + 1}. {page.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="mt-6 space-y-7">
          {PAGES.map((page, index) => {
            const Visual = page.visual ? VISUALS[page.visual] : undefined;
            return (
              <section id={page.id} key={page.id} className="scroll-mt-24 rounded-[2rem] border border-white/10 bg-[#081321] px-5 py-8 shadow-[0_22px_70px_rgba(0,0,0,0.24)] print:break-after-page sm:px-9 sm:py-10">
                <div className="mb-6 flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-cyan-300 text-sm font-black text-slate-950">{index + 1}</span>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Part 1 • Study page</p>
                    <p className="font-bold text-slate-200">{page.label}</p>
                  </div>
                </div>
                <ReactMarkdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]} components={markdownComponents}>
                  {page.markdown}
                </ReactMarkdown>
                <DBlockInlineVisuals
                  part={1}
                  pageId={page.id}
                  label={page.label}
                  markdown={page.markdown}
                />
                {Visual ? <Visual /> : null}
              </section>
            );
          })}
        </div>


        <footer className="mt-8 rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 text-sm leading-6 text-slate-400">
          This file contains theory, tables, equations and original scientific visuals only. Practice questions and detailed solutions are intentionally reserved for the later assessment phase.
        </footer>
      </div>
    </main>
  );
}
