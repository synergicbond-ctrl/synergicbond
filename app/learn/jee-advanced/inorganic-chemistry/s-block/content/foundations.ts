import { md, visual, type SBlockSection } from "./types";

export const FOUNDATIONS_SECTIONS: SBlockSection[] = [
  {
    id: "foundations",
    label: "1. Foundations of the s-Block",
    blocks: [
      md(String.raw`
The s-block contains the most electropositive metals in the periodic table: the alkali metals of Group 1 and the alkaline-earth metals of Group 2. Their differentiating electron enters the outermost $s$ orbital, and because $s$ orbitals are spherical and grow steadily larger down a group, their chemistry is governed less by orbital shape or variable oxidation state (as in the $d$-block) and more by five interacting quantities: **atomic/ionic size, ionisation enthalpy, hydration enthalpy, lattice enthalpy and polarising power**. Almost every trend and every "exception" in this chapter reduces to a competition between two or more of these five.

## 1.1 Family overview

| Feature | Group 1: alkali metals | Group 2: alkaline-earth metals |
|---|---|---|
| General valence configuration | $ns^1$ | $ns^2$ |
| Dominant oxidation state | +1 | +2 |
| Ordinary cation | $\mathrm{M^+}$ | $\mathrm{M^{2+}}$ |
| Metallic character | very high | high |
| Electrons donated to the metallic "sea" | one per atom | two per atom |
| Typical bonding in common salts | mainly ionic | ionic, with greater covalent character for small cations |
| First-member exception | lithium | beryllium |

Hydrogen and helium both have $s$-orbital valence configurations but are **not** treated as ordinary members of either family. Hydrogen's chemistry (ionic $\mathrm{H^-}$, covalent $\mathrm{H_2}$, and a solitary proton $\mathrm{H^+}$) is unique enough that it is covered as its own chapter. Helium is placed with the noble gases because a filled $1s^2$ shell gives noble-gas chemistry, not alkaline-earth chemistry — **block assignment describes the differentiating orbital; group placement reflects total chemistry.**

## 1.2 Why Group 1 and Group 2 behave differently

- Group 1 contributes **one** electron per atom to metallic bonding; Group 2 can contribute **two**. Group 2 metals are consequently harder, denser and (mostly) higher-melting.
- $\mathrm{M^{2+}}$ has a much higher charge density than $\mathrm{M^+}$ of similar size, so hydration enthalpy and lattice enthalpy are far larger for Group 2 salts — this is the single biggest reason Group 2 chemistry "feels" different from Group 1.
- The smallest cations, $\mathrm{Li^+}$ and $\mathrm{Be^{2+}}$, polarise neighbouring anions strongly (Fajans' rule). Their compounds show increased covalent character, hydrolysis and complex formation compared with the rest of their own group.
- Ordinary $\mathrm{M^+}$ and $\mathrm{M^{2+}}$ ions are closed-shell (noble-gas configuration) and diamagnetic; colour in an s-block compound almost always comes from the anion (a radical oxygen species, a coloured complex anion), from lattice defects, or from an impurity — essentially never from the cation itself.

## 1.3 Six principles that control s-block chemistry

1. **Effective nuclear attraction and shell number** control atomic size and ionisation enthalpy.
2. **Charge density** ($z/r$, or more precisely $z^2/r$ for energetics) controls hydration, polarising power, hydrolysis and complex formation.
3. **Lattice enthalpy versus hydration enthalpy** controls dissolution and precipitation — most solubility trends in this chapter are this one competition in disguise.
4. **Fajans' rule** (small, highly charged cation + large, polarisable anion → covalency) explains most first-member anomalies and covalent-character orders.
5. **Cation–anion size matching** controls which of oxide, peroxide, superoxide or ozonide is stabilised, and which of the NaCl or CsCl lattice type is adopted.
6. **Thermodynamics and kinetics must be kept separate.** A reaction can have a large thermodynamic driving force yet proceed slowly because of a surface oxide film, a high melting point, or an activation barrier — and JEE Advanced deliberately tests this distinction.

> **Core reasoning rule.** Before memorising an order, identify which of the six principles above is dominant for that specific question: lattice enthalpy vs hydration enthalpy, ionisation cost vs hydration release, or cation polarisation vs anion stability. Most "trick" questions are really just asking you to identify the right competition.

## 1.4 Analytical conventions used throughout this chapter

- State the physical phase whenever structure or product depends on it (gas/liquid/solid) — several JEE traps hinge on exactly this (e.g. $\mathrm{BeCl_2}$'s structure, aqueous vs molten NaCl electrolysis).
- For electrode potentials, the reduction convention $\mathrm{M^{n+}+ne^-\rightarrow M}$ is used throughout.
- Hydration enthalpies are negative (exothermic); "hydration enthalpy increases" is ambiguous between the signed value and its magnitude, so this chapter always says "magnitude of hydration enthalpy" when comparing strength.
- Flame colour identifies an emitting metal species but is a screening test, not a unique confirmatory one.
- Cement, bleaching powder and similar industrial materials are multiphase mixtures, not single molecular compounds — do not force a single formula onto them.
`),
      visual("position"),
    ],
  },
  {
    id: "position-config",
    label: "2. Position, Configuration & Occurrence",
    blocks: [
      md(String.raw`
## 2.1 Element-wise configurations

| Element | Configuration | Element | Configuration |
|---|---|---|---|
| Li | $[\mathrm{He}]2s^1$ | Be | $[\mathrm{He}]2s^2$ |
| Na | $[\mathrm{Ne}]3s^1$ | Mg | $[\mathrm{Ne}]3s^2$ |
| K | $[\mathrm{Ar}]4s^1$ | Ca | $[\mathrm{Ar}]4s^2$ |
| Rb | $[\mathrm{Kr}]5s^1$ | Sr | $[\mathrm{Kr}]5s^2$ |
| Cs | $[\mathrm{Xe}]6s^1$ | Ba | $[\mathrm{Xe}]6s^2$ |
| Fr | $[\mathrm{Rn}]7s^1$ | Ra | $[\mathrm{Rn}]7s^2$ |

## 2.2 Why +1 and +2 dominate

For an alkali metal, removing one electron produces a noble-gas core; the second ionisation enthalpy would have to break into that core, so $\mathrm{M^{2+}}$ is never an ordinary oxidation state for Group 1.

For Group 2, the extra energetic cost of removing a second $ns$ electron is more than repaid by the much greater lattice and hydration stabilisation that a $2+$ ion earns. Formation of $\mathrm{M^{3+}}$ would mean breaking into a noble-gas core and is energetically prohibitive.

> **JEE trap.** "The second ionisation enthalpy of Group 2 is low" is **false** — it is high. What is true is that formation of $\mathrm{M^{2+}}$ is still favoured once the *complete* thermochemical cycle (ionisation + lattice/hydration) is considered.

## 2.3 Occurrence and abundance

The metals are too reactive to occur free in nature.

- Sodium and potassium are abundant as halides, in sea water and brines, and in aluminosilicate minerals (feldspars, micas).
- Magnesium and calcium are major crustal elements. Key minerals: magnesite $\mathrm{MgCO_3}$, dolomite $\mathrm{CaCO_3\cdot MgCO_3}$, carnallite $\mathrm{KCl\cdot MgCl_2\cdot6H_2O}$, limestone/marble/chalk $\mathrm{CaCO_3}$, gypsum $\mathrm{CaSO_4\cdot2H_2O}$, and fluorite $\mathrm{CaF_2}$.
- Lithium occurs mainly in the mineral spodumene, $\mathrm{LiAl(SiO_3)_2}$; beryllium in beryl, $\mathrm{Be_3Al_2Si_6O_{18}}$ (the source mineral of the gemstones emerald and aquamarine).
- Rubidium and caesium are comparatively rare and occur mixed with other alkali minerals; strontium and barium occur as their sulfates (celestite, barite) and carbonates (strontianite, witherite).
- Francium and radium are radioactive and occur only in trace, transient quantities from natural decay chains; their chemistry is inferred by extrapolating periodic trends rather than from bulk study.

## 2.4 General physical character

Alkali metals are silvery (tarnishing rapidly in air), very soft (cuttable with a knife), and low-melting. Group 2 metals are harder, generally denser and higher-melting, because each atom donates two valence electrons to a smaller cation core, giving stronger metallic bonding.

Because simple $\mathrm{M^+}$ and $\mathrm{M^{2+}}$ ions have noble-gas configurations with no unpaired $d$ electrons, their salts are normally colourless or white — coloured s-block compounds are coloured because of the **anion**, not the cation.
`),
    ],
  },
  {
    id: "group1-data",
    label: "3. Group 1: Quantitative Data & Trends",
    blocks: [
      md(String.raw`
The table below is the core Group 1 data set. Small variations between different sources are common (radius convention, temperature); always use values supplied in a specific numerical problem when one is given.

| Property | Li | Na | K | Rb | Cs | Fr |
|---|---:|---:|---:|---:|---:|---:|
| Atomic number | 3 | 11 | 19 | 37 | 55 | 87 |
| Atomic mass / g mol⁻¹ | 6.94 | 22.99 | 39.10 | 85.47 | 132.91 | (223) |
| First IE / kJ mol⁻¹ | 520 | 496 | 419 | 403 | 376 | ~375 |
| Hydration enthalpy of M⁺ / kJ mol⁻¹ | −506 | −406 | −330 | −310 | −276 | — |
| Metallic radius / pm | 152 | 186 | 227 | 248 | 265 | — |
| Ionic radius M⁺ / pm | 76 | 102 | 138 | 152 | 167 | ~180 |
| Melting point / K | 454 | 371 | 336 | 312 | 302 | — |
| Boiling point / K | 1615 | 1156 | 1032 | 961 | 944 | — |
| Density / g cm⁻³ | 0.53 | 0.97 | 0.86 | 1.53 | 1.90 | — |
| E°(M⁺/M) / V | −3.04 | −2.71 | −2.93 | −2.93 | −2.92 | — |

## 3.1 Direct orders

- Atomic and ionic radii: $\mathrm{Li<Na<K<Rb<Cs}$.
- First ionisation enthalpy: $\mathrm{Li>Na>K>Rb>Cs}$.
- Magnitude of hydration enthalpy: $\mathrm{Li^+>Na^+>K^+>Rb^+>Cs^+}$.
- Melting and boiling points: generally decrease down the group.
- Softness and electropositive character: increase down the group.

## 3.2 The density anomaly

The broad trend is increasing density, but **potassium is less dense than sodium**:

$$\mathrm{Li<K<Na<Rb<Cs}$$

Going from Na to K, atomic volume increases proportionally more than atomic mass, so density (mass/volume) dips. Li, Na and K are all less dense than water, though their vigorous reaction prevents a quiet flotation demonstration.

## 3.3 Metallic bonding and why melting points fall

Down the group, the cation core grows larger while still only one electron per atom is delocalised into the "electron sea." Attraction between the ion core and the delocalised electrons weakens, so melting point, atomisation enthalpy and hardness all fall, and softness increases.

**Worked example 3.1.** *Why does potassium melt below sodium, although K has a larger nuclear charge?* The extra electron shell in K increases atomic radius and shielding far more than the extra nuclear charge strengthens attraction. The valence electron cloud is more diffuse, so metallic bonding is weaker despite the larger nuclear charge — nuclear charge alone never predicts a periodic trend; charge, shielding and distance must be considered together.

## 3.4 Bare radius versus hydrated radius

Bare-ion size and hydrated-ion size run in *opposite* directions. $\mathrm{Li^+}$ is the smallest bare ion but, being the most strongly hydrated, drags the largest solvation shell through solution. Consequently, **ionic mobility in water increases** $\mathrm{Li^+<Na^+<K^+<Rb^+<Cs^+}$ — the reverse of the bare-radius order.

> **JEE trap.** "The smallest bare ion moves fastest through water" is unreliable, because the hydration shell moves with the ion.
`),
      visual("trends"),
    ],
  },
  {
    id: "group2-data",
    label: "4. Group 2: Quantitative Data & Trends",
    blocks: [
      md(String.raw`
| Property | Be | Mg | Ca | Sr | Ba | Ra |
|---|---:|---:|---:|---:|---:|---:|
| Atomic number | 4 | 12 | 20 | 38 | 56 | 88 |
| Atomic mass / g mol⁻¹ | 9.01 | 24.31 | 40.08 | 87.62 | 137.33 | 226.03 |
| First IE / kJ mol⁻¹ | 899 | 738 | 590 | 550 | 503 | 509 |
| Second IE / kJ mol⁻¹ | 1757 | 1450 | 1145 | 1064 | 965 | 979 |
| Hydration enthalpy of M²⁺ / kJ mol⁻¹ | −2494 | −1921 | −1577 | −1443 | −1305 | — |
| Metallic radius / pm | 111 | 160 | 197 | 215 | 222 | — |
| Ionic radius M²⁺ / pm | 31 | 72 | 100 | 118 | 135 | 148 |
| Melting point / K | 1560 | 924 | 1124 | 1062 | 1002 | 973 |
| Boiling point / K | 2745 | 1363 | 1767 | 1655 | 2078 | ~1973 |
| Density / g cm⁻³ | 1.84 | 1.74 | 1.55 | 2.63 | 3.59 | ~5.5 |
| E°(M²⁺/M) / V | −1.97 | −2.36 | −2.84 | −2.89 | −2.92 | −2.92 |
| Flame colour | none | none | brick red | crimson | apple green | — |

## 4.1 Key comparisons with Group 1 (same period)

- Group 2 atoms and ions are smaller than their Group 1 neighbours.
- $\mathrm{IE_1}$ of Group 2 is higher than the Group 1 element in the same period.
- Hydration enthalpy magnitude of $\mathrm{M^{2+}}$ is much greater than $\mathrm{M^+}$.
- Group 2 metals are harder and (mostly) higher-melting.
- Group 2 compounds are more highly hydrated, and often more covalent, than the corresponding Group 1 compound.

A useful cross-group ionisation comparison:

$$\mathrm{IE_1(alkali)<IE_1(alkaline\ earth)}\qquad\qquad \mathrm{IE_2(alkali)>IE_2(alkaline\ earth)}$$

The second inequality holds because the alkali metal's second electron would have to be pulled from a noble-gas core, while Group 2's second electron is a genuine valence electron.

## 4.2 Melting point, boiling point and density are *not* smoothly monotonic

Unlike Group 1, Group 2 does not show a clean, single-direction sequence for m.p., b.p. or density — different crystal structures and packing efficiencies compete with the simple size effect. Quote the actual comparison the data supports rather than inventing a neat monotonic order.

## 4.3 Hydrate-forming tendency

Because $\mathrm{M^{2+}}$ ions are strongly hydrated, chlorides and nitrates commonly crystallise as hydrates, and the tendency falls down the group as charge density falls:

$$\mathrm{MgCl_2\cdot6H_2O,\quad CaCl_2\cdot6H_2O,\quad BaCl_2\cdot2H_2O}$$
`),
    ],
  },
  {
    id: "periodic-orders",
    label: "5. Periodic Orders: Size, Ionisation & Basicity",
    blocks: [
      md(String.raw`
## 5.1 Size and ionisation, restated as physical causes

| Property down a group | Direction | Physical cause |
|---|---|---|
| Atomic radius | increases | a new shell is added |
| Ionic radius | increases | a new shell is added |
| First ionisation enthalpy | decreases | shielding and distance outweigh the rising nuclear charge |
| Electronegativity | decreases | the valence electron is held less tightly |
| Electropositive character | increases | electron loss becomes easier |

## 5.2 "Reactivity" must always name the reaction

A bare claim that "X is more reactive than Y" is close to meaningless in this chapter unless the reaction is specified:

- With **water**, observed vigour generally increases down each group.
- In **aqueous reduction thermodynamics**, Li is the strongest Group 1 reducing agent (Section 7).
- In **gas-phase electron loss**, Cs is easiest to ionise.
- **Oxide basicity** increases down Group 2.
- **Thermal stability** of carbonates and nitrates generally increases down Group 2.

## 5.3 Basicity of oxides and hydroxides

As cation size increases down a group, polarising power falls and the M–O bond becomes more ionic, so basic character rises:

$$\mathrm{BeO<MgO<CaO<SrO<BaO}\qquad\qquad \mathrm{Be(OH)_2<Mg(OH)_2<Ca(OH)_2<Sr(OH)_2<Ba(OH)_2}$$

$\mathrm{BeO}$ and $\mathrm{Be(OH)_2}$ are **amphoteric** — beryllium is a qualitatively different first member, not merely "the weakest base in the group" (Section 19).

## 5.4 Water-reaction map

| Metal | Behaviour under ordinary teaching conditions |
|---|---|
| Li | reacts steadily with cold water |
| Na | vigorous; often melts into a mobile ball |
| K | very vigorous; the liberated hydrogen may ignite |
| Rb, Cs | explosively violent |
| Be | no reaction — protected by a coherent oxide film |
| Mg | very slow with cold water; faster with hot water; reacts readily with steam |
| Ca, Sr, Ba | react with cold water, rate increasing down the group |

> **JEE trap.** A more negative electrode potential does **not** guarantee a faster visible reaction. Observed rate depends on melting point, oxide-film passivation, surface renewal and activation barrier — not on thermodynamics alone (Section 7 develops this fully for lithium).
`),
    ],
  },
  {
    id: "hydration-lattice",
    label: "6. Hydration, Lattice Enthalpy & Solubility",
    blocks: [
      md(String.raw`
## 6.1 Hydration enthalpy

Hydration enthalpy is the enthalpy change when one mole of gaseous ions is hydrated in water. It is exothermic, and its magnitude grows with charge density:

$$|\Delta H_{hyd}|\propto\frac{z^2}{r}$$

$\mathrm{Be^{2+}}$ is therefore enormously more hydrated than $\mathrm{Ba^{2+}}$, and $\mathrm{Li^+}$ more than $\mathrm{Cs^+}$.

## 6.2 Lattice enthalpy

For ions of similar structure, the electrostatic (Madelung) contribution scales approximately as:

$$U\propto\frac{|z_+z_-|}{r_++r_-}$$

Small, highly charged ions give a large lattice enthalpy — a Group 2 salt usually has a much larger lattice enthalpy than the analogous Group 1 salt.

## 6.3 Dissolution is a competition, not a single number

$$\Delta H_{sol}=\Delta H_{lattice\ separation}+\Delta H_{hydration}$$

Entropy also contributes, so enthalpy alone cannot predict every individual solubility — but for *trend* questions (which is what JEE actually asks), comparing how the lattice and hydration terms change down a group is the right method.

## 6.4 Group 2 hydroxides versus sulfates: opposite trends from the same competition

- **Hydroxide solubility rises** from Mg to Ba: lattice enthalpy falls faster than hydration enthalpy as the cation grows (the small $\mathrm{OH^-}$ anion means lattice enthalpy is very sensitive to cation size).
- **Sulfate solubility falls** from Mg to Ba: the large $\mathrm{SO_4^{2-}}$ anion means lattice enthalpy barely changes with cation size, while hydration enthalpy of the cation weakens sharply — so dissolution becomes progressively less favourable.

$$\mathrm{Mg(OH)_2<Ca(OH)_2<Sr(OH)_2<Ba(OH)_2}\quad\text{(solubility, rising)}$$
$$\mathrm{MgSO_4>CaSO_4>SrSO_4>BaSO_4}\quad\text{(solubility, falling)}$$

Beryllium is left out of both simple sequences and treated separately, because hydrolysis and covalency dominate its chemistry (Section 19).

## 6.5 High-yield solubility facts

- Most alkali-metal salts are soluble, but **LiF, Li₂CO₃ and Li₃PO₄ are sparingly soluble** — the recurring lithium exception.
- Group 2 carbonates are insoluble/sparingly soluble and are precipitated by carbonate ion.
- $\mathrm{BeSO_4}$ and $\mathrm{MgSO_4}$ are soluble; $\mathrm{BaSO_4}$ is famously insoluble (its use in X-ray imaging in Section 25 depends on this).
- Group 2 fluorides are much less soluble than the corresponding chlorides, because the small, hard $\mathrm{F^-}$ gives an especially strong lattice — do not force one universal cross-halide solubility order without checking the specific anion.

**Worked example 6.1.** *Why can $\mathrm{BaSO_4}$ be swallowed for X-ray imaging, when soluble barium salts are poisonous?* Its exceptionally small solubility product means negligible $\mathrm{Ba^{2+}}$ reaches body fluids. Toxicity is a property of the soluble, dissociated ion, not of the element itself.
`),
    ],
  },
  {
    id: "electrode-potentials",
    label: "7. Electrode Potentials & Reducing Power",
    blocks: [
      md(String.raw`
## 7.1 The complete aqueous cycle

$E^\circ(\mathrm{M^+/M})$ is the reverse of a three-stage oxidation pathway:

$$\mathrm{M(s)\rightarrow M(g)}\qquad\text{atomisation (endothermic)}$$
$$\mathrm{M(g)\rightarrow M^+(g)+e^-}\qquad\text{ionisation (endothermic)}$$
$$\mathrm{M^+(g)\rightarrow M^+(aq)}\qquad\text{hydration (strongly exothermic)}$$

For lithium, the exceptionally favourable hydration of the tiny $\mathrm{Li^+}$ ion outweighs its relatively high atomisation and ionisation costs, so:

$$E^\circ(\mathrm{Li^+/Li})\approx-3.04\text{ V}$$

— making **lithium the strongest aqueous reducing agent in Group 1**, even though caesium has the *lowest* first ionisation enthalpy.

## 7.2 Gas phase versus aqueous phase: four different questions, four different answers

| Question | Correct controlling quantity | Winner |
|---|---|---|
| Easiest atom to ionise in the gas phase | first ionisation enthalpy | Cs |
| Most electropositive alkali metal | tendency to lose an electron | Cs |
| Strongest reducing agent *in water* | the complete E° cycle above | Li |
| Fastest *visible* reaction with water | kinetics, surface behaviour, melting point | generally Cs/Rb side |

**Worked example 7.1.** Given $E^\circ(\mathrm{Li^+/Li})=-3.04\text{ V}$ and $E^\circ(\mathrm{Na^+/Na})=-2.71\text{ V}$, which metal reduces water more strongly, thermodynamically? **Lithium** — the more negative reduction potential means oxidation of Li is more thermodynamically favourable under standard aqueous conditions. This does **not** predict that a piece of Li reacts faster than a piece of Na; it answers a driving-force question, not a rate question.

## 7.3 Group 2 reducing power

Standard reduction potentials become more negative from Be toward Ba overall, so reducing character generally increases down the group. Beryllium is the anomaly: its strong metallic bonding and protective oxide film suppress reaction, despite $\mathrm{Be^{2+}}$ having the most favourable hydration term of the whole group.
`),
      visual("energy-cycle"),
    ],
  },
  {
    id: "flame-spectroscopy",
    label: "8. Flame Colours & Spectroscopy",
    blocks: [
      md(String.raw`
## 8.1 Origin of flame colour

Flame heat excites an outer electron to a higher energy level; on relaxation, a photon of characteristic energy (and therefore characteristic wavelength/colour) is emitted:

$$\Delta E=h\nu=\frac{hc}{\lambda}$$

Because each element's energy-level spacing is unique, the emitted wavelengths form a fingerprint.

| Ion/metal | Observed flame colour | Strong emission line |
|---|---|---:|
| Li | crimson red | 670.8 nm |
| Na | intense yellow | 589.0/589.6 nm (D-lines) |
| K | violet/lilac | 766.5 nm |
| Rb | red-violet | ~780 nm |
| Cs | blue-violet | 455.5 nm |
| Ca | brick red | — |
| Sr | crimson red | — |
| Ba | apple green | — |
| Be, Mg | no characteristic colour | — |

Be and Mg hold their valence electrons too strongly for an ordinary flame to populate a visible-emitting excited state efficiently — this is a direct, testable consequence of their high ionisation enthalpies.

The emitting species is not always a free metal atom, either. Sodium's yellow line is the genuine $3s^1\rightarrow3p^1$ transition of atomic sodium formed transiently in the flame. Lithium's crimson line, by contrast, arises from a short-lived **LiOH molecular species** present in the flame, not from a simple atomic Li transition — different elements can owe their flame colour to different kinds of emitting species, even though the practical test (heat a sample, watch the colour) looks identical for both.

## 8.2 Cobalt-glass test

Sodium's emission is exceptionally intense and easily masks a simultaneous potassium signal. Cobalt-blue glass selectively absorbs the sodium yellow region, letting the fainter potassium lilac colour be seen.

## 8.3 Identification limits

- Li and Sr can both appear crimson — flame colour alone cannot separate them (see Worked example 20.1 later in this chapter).
- Trace sodium contamination is extremely common and can swamp a genuine test.
- Flame tests are **screening** tests; a confirmatory wet chemical test or spectroscopy is needed for certainty.
- The colour belongs to the emitting metal species, not to whichever counter-ion happens to be present.

## 8.4 Photoelectric effect

Low ionisation enthalpy makes K, Rb and especially Cs useful photoemissive materials: light of sufficient energy ejects the weakly-held valence electron entirely from the metal surface (as opposed to merely exciting it, as in a flame test).

> **JEE trap.** Flame emission is *excitation then relaxation*; the photoelectric effect is *complete ejection*. They are related by "how weakly is the outer electron held," but they are not the same process and should never be described interchangeably.

**Worked example 8.1.** *A sample gives a violet flame only after viewing through cobalt glass. What is the likely cation, and why was the glass necessary?* $\mathrm{K^+}$; the glass suppresses the intense yellow emission of trace $\mathrm{Na^+}$ that would otherwise mask the fainter potassium line.
`),
      visual("flame"),
    ],
  },
];
