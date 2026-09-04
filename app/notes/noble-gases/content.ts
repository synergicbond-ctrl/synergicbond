// The Noble Gases (Group 18) — JEE Advanced master notes.
//
// Independently written for SYNERGIC BOND. A synthesis of the standard,
// non-proprietary body of Group 18 inorganic chemistry common to the Class XI–XII
// syllabus and every general reference (NCERT, J. D. Lee, Greenwood & Earnshaw,
// Ananya Ganguly, Allen). No verbatim text, tables or figures are copied from any
// single source; the section structure, the "increasing / decreasing / note"
// ordering system, the Key Point / JEE TRAP / MOT LENS framing, the schematic
// figures and every derived tool are original to this chapter. Physical data are
// standard reference constants; where editions differ the Class XI–XII value is used.

export const NOBLE_GASES_MASTER_MARKDOWN = String.raw`
# 1. p-Block foundation and the place of Group 18

## 1.1 Periodic-table framework

Group 18 sits at the right-hand edge of the p-block. Its members — helium (He), neon (Ne),
argon (Ar), krypton (Kr), xenon (Xe) and the radioactive radon (Rn) — are the **only
elements that are monatomic gases at room temperature** and were, until 1962, believed to
form **no chemical compounds at all**. They are the reference point for the whole of
bonding theory: a **completely filled valence shell** (He 1s², the rest ns² np⁶) is the
"target" every other atom is trying to reach by gaining, losing or sharing electrons.

Three ideas run through the chapter:

- **Inertness is a matter of degree, and it decreases down the group.** He, Ne, Ar form no
  true compounds; Kr forms one difluoride; **Xe has a real, if small, chemistry**; Rn is
  too radioactive to study in bulk. The reason is that **ionisation enthalpy falls** and
  **polarisability rises** down the group.
- **The only force between the atoms is the London (dispersion) force**, which strengthens
  with atomic size — so melting and boiling points, though all very low, rise steadily from
  He to Rn.
- **Xenon chemistry is almost entirely with fluorine and oxygen** — the two most
  electronegative elements — and is a clean showcase of **VSEPR** (XeF₂ linear, XeF₄ square
  planar, XeF₆ distorted octahedral, XeO₃ pyramidal, XeO₄ tetrahedral).

## 1.2 Why they were called "inert", and why that name was dropped

Ramsay's original name was **inert gases**. After the synthesis of xenon compounds (1962)
this was changed to **noble gases** (by analogy with the "noble" metals Au, Pt — reluctant,
not incapable, of reacting). "Rare gases" is also used, though argon (0.93 % of air) is not
rare and helium is abundant in the universe (the second most abundant element after
hydrogen).

> **Key Point:** The extreme unreactivity of Group 18 comes from **three** properties that
> all follow from the filled valence shell: (i) **the highest ionisation enthalpy in each
> period** — an electron cannot be removed to form a cation; (ii) **a large positive
> electron gain enthalpy** — an electron will not add to form an anion; (iii) **no
> unpaired electrons and no partly filled orbital** — there is nothing with which to form a
> covalent bond under ordinary conditions. Compound formation becomes possible only when
> ΔᵢH has fallen far enough (Kr, Xe, Rn) for a ferocious oxidiser (F₂, PtF₆, O₂F₂) to
> strip or share an electron.

## 1.3 Group 18 master data

| Property | He | Ne | Ar | Kr | Xe | Rn |
|:--|:--:|:--:|:--:|:--:|:--:|:--:|
| Atomic number | 2 | 10 | 18 | 36 | 54 | 86 |
| Atomic mass / g mol⁻¹ | 4.00 | 20.18 | 39.95 | 83.80 | 131.29 | 222 |
| Ground-state configuration | **1s²** | [He] 2s²2p⁶ | [Ne] 3s²3p⁶ | [Ar] 3d¹⁰4s²4p⁶ | [Kr] 4d¹⁰5s²5p⁶ | [Xe] 4f¹⁴5d¹⁰6s²6p⁶ |
| Atomic (van der Waals) radius / pm | 120 | 160 | 190 | 200 | 220 | — |
| **ΔᵢH₁ / kJ mol⁻¹** | **2372** | 2080 | 1520 | 1351 | **1170** | 1037 |
| ΔₑgH / kJ mol⁻¹ (all positive) | +48 | +116 | +96 | +96 | +77 | +68 |
| Electronegativity (where defined) | — | — | — | 3.0 | 2.6 | — |
| Density (STP) / g L⁻¹ | 0.18 | 0.90 | 1.78 | 3.74 | 5.89 | 9.73 |
| **Melting point / K** | — (2.0 at 26 atm) | 24.6 | 83.8 | 115.9 | 161.4 | 202 |
| **Boiling point / K** | **4.2** | 27.1 | 87.3 | 119.8 | 165.0 | 211 |
| ΔvapH / kJ mol⁻¹ | 0.08 | 1.71 | 6.52 | 9.05 | 12.62 | 18.1 |
| Critical temperature / K | 5.2 | 44.4 | 150.9 | 209.4 | 289.7 | 377 |
| Solubility in water / cm³ per L (293 K) | 8.6 | 10.5 | 33.6 | 59.4 | 108.1 | 230 |
| Abundance in dry air / % by volume | 5.24 × 10⁻⁴ | 1.82 × 10⁻³ | **0.934** | 1.14 × 10⁻⁴ | 8.7 × 10⁻⁶ | ~10⁻¹⁸ |

**Reading the irregular steps.** The van der Waals radius, ΔᵢH and polarisability all
change less than expected between Ne → Ar (before the 3d block is filled) and then more
smoothly; the d-block and f-block contractions damp the size increases at Ar → Kr and
Xe → Rn, so **Rn is only a little larger than Xe** and its ΔᵢH is held up.

## 1.4 Occurrence, isolation and isotopes


![Fig. Isolation of the noble gases by fractional distillation of liquid air.](/notes/noble-gases/ng_distillation.svg)

**Occurrence.**

| Gas | Where it is found |
|:--|:--|
| **He** | ~24 % by mass of the universe (formed in the Big Bang and in stars); on Earth it is **trapped in natural gas** (up to 7 %, from α-decay of U/Th in the crust) — the **main commercial source**; also in radioactive minerals (cleveite, monazite); it escapes Earth's gravity, so atmospheric He is only 5 ppm |
| **Ne, Ar, Kr, Xe** | in the **atmosphere**; obtained as by-products of the **fractional distillation of liquid air** |
| **Ar** | by far the most abundant (0.93 % of air) — mostly **⁴⁰Ar from the β-decay of ⁴⁰K** in rocks (the basis of **K–Ar dating**) |
| **Rn** | continuously produced by α-decay of radium in the ²³⁸U series: ²²⁶Ra → ²²²Rn + ⁴He (t½ of ²²²Rn = 3.82 d); a **natural radioactive hazard** in basements and mines built on granite |

**Isolation.**

1. **Helium** — from natural gas by liquefying out the hydrocarbons and other gases (He
   has the lowest b.p. of anything, so it is the last to condense); final purification over
   activated charcoal at 77 K.
2. **Ne, Ar, Kr, Xe** — **fractional distillation of liquid air** (after CO₂ and H₂O
   removal). The crude "noble-gas" fraction is separated: **Ne** (b.p. 27 K) with the N₂
   overhead; **Kr and Xe** (b.p. 120, 165 K) in the O₂-rich bottoms; **Ar** (b.p. 87 K,
   between N₂ and O₂) as a side stream, purified by removing residual O₂ (over hot Cu) and
   N₂ (over hot Mg or Ca, forming Mg₃N₂ / Ca₃N₂).
3. **Historical — Ramsay & Rayleigh (1894–1898)** — remove O₂, then N₂ (repeated sparking
   with excess O₂ over alkali: N₂ + O₂ → 2 NO → HNO₃), then CO₂ and water; the residue is
   argon (+ traces of Ne, Kr, Xe, He), separated later by low-temperature adsorption on
   charcoal.

**Isotopes.**

| Gas | Stable isotopes | Notes |
|:--|:--|:--|
| He | ⁴He (99.9998 %), ³He (trace) | ⁴He from α-decay; **³He** (extremely rare on Earth, more common in lunar regolith and the solar wind) is a coolant to milli-kelvin temperatures and a proposed fusion fuel; **liquid ⁴He below 2.18 K is a superfluid** (helium-II) |
| Ne | ²⁰Ne (90.5 %), ²¹Ne, ²²Ne | the **first evidence for isotopes of a stable element** — J. J. Thomson & Aston separated ²⁰Ne and ²²Ne by their parabola in a mass spectrograph (1913) |
| Ar | **⁴⁰Ar (99.6 %)**, ³⁶Ar, ³⁸Ar | ⁴⁰Ar is **radiogenic** (from ⁴⁰K, t½ 1.25 Gy) — this is why Ar's atomic mass (39.95) exceeds K's (39.10): the **Ar–K anomalous pair** (like Te–I and Co–Ni) |
| Kr | six stable isotopes | ⁸⁶Kr defined the metre (1960–1983); ⁸⁵Kr (β⁻, t½ 10.8 y) is a leak-detection and dating tracer |
| Xe | **nine stable isotopes** — the most of any element with a "simple" nucleus | ¹²⁹Xe (from ¹²⁹I decay) and fission-produced Xe isotopes are used in cosmochemistry and reactor monitoring; hyperpolarised ¹²⁹Xe is an MRI contrast agent for lung imaging |
| Rn | no stable isotope | ²²²Rn (α, 3.82 d) is the health hazard and the earthquake/volcano precursor being studied |

> **JEE TRAP:** The **Ar–K anomalous pair** — argon (39.95) is heavier than potassium
> (39.10) but comes *before* it. The cause is **radiogenic ⁴⁰Ar** dominating natural argon.
> Mendeleev's periodic table (by properties) and Moseley's atomic-number law both put Ar
> before K correctly. (The other anomalous pairs: Co–Ni, Te–I.)


# 2. Group 18 identity and electronic configuration

The discovery of the noble gases is one of the great episodes of chemistry. **Helium** was
seen first in the Sun (Janssen and Lockyer, 1868, a new yellow spectral line during a solar
eclipse) — 27 years before it was found on Earth (Ramsay, 1895, from uranium ore).
**Argon** came from a discrepancy Lord Rayleigh could not explain: nitrogen isolated from
air was denser (1.2572 g L⁻¹) than nitrogen made from ammonia (1.2506) — the difference was
a new, heavier, unreactive gas (Rayleigh & Ramsay, 1894). Ramsay and Travers then
fractionally distilled liquid air to find **neon, krypton and xenon** (1898). **Radon** was
found in the decay of radium (Dorn, 1900). Ramsay received the 1904 Nobel Prize in
Chemistry (and Rayleigh the Physics Prize the same year) "for the discovery of the inert
gaseous elements... and their place in the periodic system" — a whole **new group** added
to the table without disturbing the rest.

## 2.1 Electronic configurations, ionisation and electron gain

| Element | Z | Ground-state configuration | Valence shell | ΔᵢH₁ / kJ mol⁻¹ | ΔₑgH / kJ mol⁻¹ |
|:--:|:--:|:--:|:--:|:--:|:--:|
| He | 2 | **1s²** | 1s² (duplet) | 2372 | +48 |
| Ne | 10 | [He] 2s² 2p⁶ | 2s² 2p⁶ | 2080 | +116 |
| Ar | 18 | [Ne] 3s² 3p⁶ | 3s² 3p⁶ | 1520 | +96 |
| Kr | 36 | [Ar] 3d¹⁰ 4s² 4p⁶ | 4s² 4p⁶ | 1351 | +96 |
| Xe | 54 | [Kr] 4d¹⁰ 5s² 5p⁶ | 5s² 5p⁶ | 1170 | +77 |
| Rn | 86 | [Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶ | 6s² 6p⁶ | 1037 | +68 |

- Every valence shell is **completely filled and spherically symmetric** → maximum
  stability, zero net electron affinity for bonding, no magnetic moment.
- **He is the only noble gas that is not ns² np⁶** — it is 1s² (a "duplet"). It is placed
  in Group 18 (not Group 2) because its **chemical behaviour** (totally inert, monatomic
  gas) matches the noble gases, not the alkaline earths.

**The one number that matters: ΔᵢH₁.** The whole of noble-gas chemistry is a story of this
falling:

- **He, Ne (2372, 2080)** — nothing oxidises them.
- **Ar (1520)** — HArF has been made, but only isolated in a solid-argon matrix at 8 K.
- **Kr (1351)** — KrF₂ exists (endothermic).
- **Xe (1170)** — a real chemistry, because ΔᵢH₁(Xe) ≈ ΔᵢH₁(O₂) = 1175 kJ mol⁻¹ (the key
  observation that led Bartlett to try Xe + PtF₆).
- **Rn (1037)** — should react even more easily than Xe, but its intense radioactivity
  (and 3.8-day half-life) makes bulk chemistry impossible; RnF₂ is inferred from tracer
  work.

## 2.2 Discovery timeline

| Year | Event |
|:--|:--|
| 1785 | **Cavendish** notices ~1/120 of "phlogisticated air" that will not react with anything |
| 1868 | **Janssen / Lockyer** — the helium D₃ line in the solar chromosphere |
| 1894 | **Rayleigh & Ramsay** — argon, from the density anomaly of atmospheric N₂ |
| 1895 | **Ramsay** — helium released on heating cleveite (a uranium mineral) |
| 1898 | **Ramsay & Travers** — neon, krypton and xenon by fractional distillation of liquid air |
| 1900 | **Dorn** — radon ("radium emanation") |
| 1904 | Ramsay (Chemistry) and Rayleigh (Physics) Nobel Prizes |
| 1962 | **Neil Bartlett** — Xe⁺[PtF₆]⁻, the first noble-gas compound |
| 1962 | Claassen, Selig & Malm — XeF₄ by direct combination of Xe and F₂ |
| 2000 | Räsänen — **HArF**, the first (matrix-isolated) argon compound |


# 3. Atomic and physical properties — data and complete orders

## 3.1 Atomic radii

Noble-gas "atomic radii" are **van der Waals radii** (there are no covalent bonds to
measure), so the values are **large** — a noble-gas atom looks bigger than the halogen atom
just before it (compare Ne 160 pm vs F 64 pm — but F's *covalent* radius; Ne's van der
Waals radius vs F's van der Waals radius ~147 pm is a fairer comparison).

| Element | He | Ne | Ar | Kr | Xe |
|:--:|:--:|:--:|:--:|:--:|:--:|
| van der Waals radius / pm | 120 | 160 | 190 | 200 | 220 |

> **Atomic (van der Waals) radius** — Increasing order: **He < Ne < Ar < Kr < Xe**
> Note: increases regularly down the group as principal quantum shells are added.
> The values are **larger than the covalent radii of the neighbouring halogens** because
> there is no bonding to pull the electron cloud in — a point examiners like ("why do noble
> gases have comparatively large atomic sizes?").

## 3.2 Ionisation enthalpy

| Element | ΔᵢH₁ / kJ mol⁻¹ |
|:--:|:--:|
| He | 2372 |
| Ne | 2080 |
| Ar | 1520 |
| Kr | 1351 |
| Xe | 1170 |
| Rn | 1037 |

> **ΔᵢH₁** — Decreasing order: **He > Ne > Ar > Kr > Xe > Rn**
> Increasing order: Rn < Xe < Kr < Ar < Ne < He.
> Note: **the highest first ionisation enthalpy of any element in each period** (helium's
> 2372 kJ mol⁻¹ is the largest of all). It **decreases smoothly** down the group as the
> atom enlarges and the outer electrons are better screened. This decrease is **the reason
> Xe (and Kr, Rn) have a chemistry while He, Ne, Ar do not** — ΔᵢH₁(Xe) has fallen to
> ≈ ΔᵢH₁(O₂), so the same super-oxidiser (PtF₆) that ionises O₂ can ionise Xe.

## 3.3 Electron gain enthalpy

| Element | He | Ne | Ar | Kr | Xe | Rn |
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| ΔₑgH / kJ mol⁻¹ | +48 | +116 | +96 | +96 | +77 | +68 |

> **Electron gain enthalpy** — all **large and positive** (endothermic).
> Note: adding an electron would have to go into the **next, empty shell** (a much higher
> energy level), against a filled, well-shielded core — strongly unfavourable. So the noble
> gases **do not form anions**. |ΔₑgH| is largest for Ne and then decreases (bigger atom,
> the extra electron less strongly repelled by the compact core).

## 3.4 Melting and boiling points, enthalpy of vaporisation


![Fig. Noble-gas trends — b.p. rises, ionisation enthalpy falls.](/notes/noble-gases/ng_trends.svg)

| Element | m.p. / K | b.p. / K | ΔvapH / kJ mol⁻¹ |
|:--:|:--:|:--:|:--:|
| He | — (2.0 at 26 atm) | 4.2 | 0.08 |
| Ne | 24.6 | 27.1 | 1.71 |
| Ar | 83.8 | 87.3 | 6.52 |
| Kr | 115.9 | 119.8 | 9.05 |
| Xe | 161.4 | 165.0 | 12.62 |
| Rn | 202 | 211 | 18.1 |

> **Melting & boiling point** — Increasing order: **He < Ne < Ar < Kr < Xe < Rn**
> Explanation: the **only** attractive force between the atoms is the **London (dispersion)
> force**, which depends on **polarisability**, which increases with **atomic size and
> number of electrons**. So the forces strengthen — and m.p./b.p. rise — monotonically down
> the group. All the values are very low (the whole family boils below room temperature)
> because dispersion forces between spherical, non-polar atoms are weak.

> **Helium's boiling point (4.2 K) is the lowest of any substance.** He cannot be
> solidified by cooling alone — it needs ~26 atm of external pressure (the zero-point
> energy of the tiny He atom is comparable to its interatomic attraction).

> **Enthalpy of vaporisation, critical temperature, and adsorption on charcoal** — all
> increase in the same order **He < Ne < Ar < Kr < Xe < Rn** (stronger dispersion forces).
> The rising **ease of adsorption on activated charcoal** at low temperature is used to
> separate the heavier noble gases (Dewar's method).

## 3.5 Solubility, polarisability, density

> **Solubility in water** — Increasing order: **He < Ne < Ar < Kr < Xe < Rn**
> Note: the larger, more polarisable atoms interact more strongly (dispersion) with water,
> so they dissolve more. Xenon is appreciably soluble — enough to be a **general
> anaesthetic** at 1 atm.

> **Polarisability** — Increasing order: **He < Ne < Ar < Kr < Xe < Rn**
> Note: the electron cloud gets larger and more loosely held. This is why **Xe and Rn are
> the ones that react** (a polarisable electron cloud can be distorted and partly
> transferred to F or O), and why Xe is the best noble-gas anaesthetic (it perturbs
> membrane proteins by dispersion binding).

> **Density (STP)** — Increasing order: **He (0.18) < Ne < Ar < Kr < Xe < Rn (9.73 g L⁻¹)**
> Note: rises with atomic mass. Helium is the second-lightest gas (after H₂); argon is
> denser than air; radon is the densest gas known.

## 3.6 A few more physical facts worth knowing

- Noble gases give **characteristic bright line-emission spectra** in a discharge tube —
  He pale peach/yellow, **Ne orange-red** ("neon signs"), Ar lilac/pale blue, Kr
  whitish-green, Xe blue-white. Neon's colour is so intense that "neon sign" became the
  generic term even for tubes filled with other gases.
- **Helium diffuses** through rubber, PVC and even soft glass (small atom, no
  intermolecular sticking) — a nuisance for party balloons and a tool for leak detection.
- **Liquid ⁴He below the λ-point (2.18 K)** becomes **helium-II**, a **superfluid**: zero
  viscosity, it flows through microscopic pores, climbs container walls as a "Rollin film",
  and has near-infinite thermal conductivity (no bubbling on boiling).


# 4. Chemical behaviour — why the noble gases are unreactive, and how xenon breaks the rule

## 4.1 The three reasons for inertness (state all three)

1. **Completely filled valence shell** (He 1s², rest ns² np⁶) — no half-filled or empty
   low-lying orbital to form a bond with; no unpaired electron.
2. **Very high ionisation enthalpy** — the highest in each period — so a **cation cannot
   form** under chemical conditions.
3. **Large positive electron gain enthalpy** — an electron will not add (it would go into
   the next shell), so an **anion cannot form**.

Add: any hypothetical noble-gas compound has a **large positive enthalpy of formation**
(bond energies to Xe/Kr are small, and the promotion/ionisation cost is huge), so
thermodynamics is against compound formation for the light members.

## 4.2 Clathrate compounds — trapped, not bonded


![Fig. Clathrate cage — physical trapping, not a bond.](/notes/noble-gases/ng_clathrate.svg)

**Ar, Kr and Xe** (not He or Ne — too small to be held) can be **physically caged** inside
cavities of a host lattice:

- **β-quinol (hydroquinone) clathrates** — crystallise quinol from benzene under a few atm
  of the gas; the gas atom sits in a hydrogen-bonded cage of quinol molecules, ~3 quinol
  per trapped atom. Warming or dissolving the quinol releases the gas.
- **Gas hydrates (clathrate hydrates)** — Ar·6H₂O, Kr·6H₂O, Xe·6H₂O — the gas atom occupies
  a cavity in an ice-like water framework.

**No chemical bond is formed** — the gas is held only by **van der Waals forces**, and the
composition is **non-stoichiometric** (it depends on the pressure of gas during
crystallisation). Clathrates are used to **store, transport and separate** the heavier
noble gases, and ⁸⁵Kr-quinol clathrates serve as compact radioactive sources.

## 4.3 Bartlett's discovery (1962) — the reasoning, step by step


![Fig. Bartlett's reasoning that led to the first noble-gas compound.](/notes/noble-gases/ng_bartlett.svg)

1. Bartlett was studying **platinum hexafluoride, PtF₆**, an extraordinarily powerful
   oxidising/fluorinating agent.
2. He found that PtF₆ **oxidises molecular oxygen**: O₂ + PtF₆ → **O₂⁺[PtF₆]⁻** (an
   orange-red solid — the dioxygenyl cation).
3. For this to happen, PtF₆ must be able to remove an electron from O₂ — i.e. it can
   overcome the **first ionisation enthalpy of O₂, 1175 kJ mol⁻¹**.
4. Bartlett noticed that **ΔᵢH₁(Xe) = 1170 kJ mol⁻¹ ≈ ΔᵢH₁(O₂)**, and that Xe⁺ and O₂⁺
   would have similar sizes.
5. He therefore mixed **Xe gas with PtF₆ vapour** at room temperature and obtained a
   **red solid**, which he formulated as **Xe⁺[PtF₆]⁻** (later shown to be a mixture,
   mainly **[XeF]⁺[PtF₆]⁻** and **[XeF]⁺[Pt₂F₁₁]⁻**, with some Xe[PtF₆]₂).

This ended the belief that the noble gases were absolutely inert and immediately opened up
the chemistry of xenon — and, more cautiously, of krypton and radon — **with fluorine and
oxygen**.

## 4.4 The gradation of reactivity down the group

> **Ease of compound formation / chemical reactivity** — Increasing order:
> **He ≈ Ne ≈ Ar (essentially nil) < Kr < Xe < Rn**
> Reason: **ΔᵢH₁ falls** and **polarisability rises** down the group, so the heavier,
> larger atoms can have an electron partly removed or shared by a sufficiently powerful
> electronegative partner (F, O). He and Ne never react; Ar gives only matrix-isolated
> HArF; Kr gives KrF₂; Xe has a genuine chemistry; Rn should react even more readily but is
> too radioactive to handle.


# 5. Compounds of xenon


![Fig. Xenon fluorides — VSEPR shapes.](/notes/noble-gases/ng_xef.svg)

## 5.1 Xenon fluorides — preparation


![Fig. Preparation of xenon difluoride.](/notes/noble-gases/ng_prepxef2.svg)

Direct combination of Xe and F₂ under different conditions gives three fluorides; the
product is set by the **Xe : F₂ ratio, temperature and pressure**.

| Fluoride | Conditions (Xe : F₂) | Equation | ΔfH° / kJ mol⁻¹ |
|:--|:--|:--|:--:|
| **XeF₂** | 673 K, 1 bar, **Xe in large excess** (2 : 1) | Xe + F₂ → XeF₂ | −164 |
| **XeF₄** | 873 K, 6 bar, **1 : 5** | Xe + 2 F₂ → XeF₄ | −267 |
| **XeF₆** | 573 K, **60–70 bar**, **1 : 20** | Xe + 3 F₂ → XeF₆ | −338 |

Also: **XeF₄ + O₂F₂ →(143 K) XeF₆ + O₂** (a low-temperature route);
photochemical: **Xe + F₂ →(sunlight, 1 bar, RT) XeF₂** (a lecture-demonstration synthesis).

All three are **colourless crystalline solids** that **sublime readily at 298 K**; all are
**powerful fluorinating and oxidising agents** and are **hydrolysed** (increasingly
vigorously XeF₂ < XeF₄ < XeF₆).

## 5.2 Reactions of the xenon fluorides

**Hydrolysis:**

2 XeF₂ + 2 H₂O → 2 Xe + 4 HF + O₂          (slow)
6 XeF₄ + 12 H₂O → 4 Xe + 2 XeO₃ + 24 HF + 3 O₂          (partial disproportionation)
XeF₆ + 3 H₂O → **XeO₃** + 6 HF          (complete hydrolysis)
XeF₆ + H₂O → **XeOF₄** + 2 HF          (partial — one step)
XeF₆ + 2 H₂O → **XeO₂F₂** + 4 HF          (partial — two steps)

> **None of the XeF₆ hydrolyses is a redox reaction** — xenon stays in the **+6** state in
> XeO₃, XeOF₄ and XeO₂F₂.

**As an oxidising / fluorinating agent (XeF₂ is a clean, mild, "F⁺ or 2e⁻" reagent):**

XeF₂ + H₂ → Xe + 2 HF
XeF₂ + 2 HCl → Xe + 2 HF + Cl₂
XeF₂ + 2 Ce³⁺ + ... → Xe + 2 Ce⁴⁺ + 2 F⁻
XeF₄ + Pt → Xe + PtF₄
XeF₄ + 2 SF₄ → Xe + 2 SF₆
2 XeF₂ + 2 Co²⁺ ... → 2 Xe + 2 Co³⁺F ...  (oxidises Co(II)→Co(III), Ag(I)→Ag(II), Br⁻→Br₂)
C₆H₆ + XeF₂ → C₆H₅F + Xe + HF   (aromatic fluorination in organic synthesis)

**With fluoride-ion ACCEPTORS (strong Lewis acids) → fluorocations:**

XeF₂ + PF₅ → [XeF]⁺[PF₆]⁻
XeF₂ + SbF₅ → [XeF]⁺[SbF₆]⁻   (and [Xe₂F₃]⁺[SbF₆]⁻)
XeF₄ + SbF₅ → [XeF₃]⁺[SbF₆]⁻
XeF₆ + AsF₅ → [XeF₅]⁺[AsF₆]⁻

**With fluoride-ion DONORS (alkali-metal fluorides) → fluoroanions:**

XeF₆ + MF → M⁺[XeF₇]⁻          (M = Na, K, Rb, Cs)
2 M[XeF₇] →(Δ) M₂[XeF₈] + XeF₆          (the octafluoroxenate(VI) ion — square antiprismatic,
   thermally the most stable Xe compound; the Cs⁺ and Rb⁺ salts survive to ~670 K)

## 5.3 Xenon–oxygen compounds


![Fig. Xenon-oxygen compounds (hydrolysis of XeF6 — not redox).](/notes/noble-gases/ng_xeo.svg)

| Compound | Xe ox. state | Made from | Properties |
|:--|:--:|:--|:--|
| **XeO₃** | **+6** | hydrolysis of XeF₄ or XeF₆ | colourless, deliquescent, **dangerously explosive** solid; a weak acid ("xenic acid") and strong oxidiser in solution; in alkali → xenate HXeO₄⁻ → disproportionates to perxenate + Xe |
| **XeO₄** | **+8** | Ba₂XeO₆ + cold conc. H₂SO₄ | pale-yellow, **highly explosive** gas; tetrahedral |
| **XeOF₄** | +6 | partial hydrolysis of XeF₆ | colourless, stable, volatile **liquid**; square pyramidal |
| **XeO₂F₂** | +6 | partial hydrolysis of XeF₆ | colourless solid; see-saw |
| **perxenates** Na₄XeO₆, Ba₂XeO₆ | **+8** | 2 XeO₃ + 4 NaOH → Na₄XeO₆ + Xe + O₂ + 2 H₂O | colourless salts; **among the strongest oxidisers known** — oxidise Mn²⁺ → MnO₄⁻ instantly, no catalyst |

## 5.4 Structures of xenon compounds — the VSEPR showcase


![Fig. XeF5- (pentagonal planar) and [XeF8]2- (square antiprism).](/notes/noble-gases/ng_xef5.svg)

| Species | Bond pairs | Lone pairs | Steric no. | Hybrid. | Shape |
|:--|:--:|:--:|:--:|:--:|:--|
| **XeF₂** | 2 | **3** | 5 | sp³d | **linear** |
| **XeF₄** | 4 | **2** | 6 | sp³d² | **square planar** |
| **XeF₆** | 6 | **1** | 7 | sp³d³ | **distorted octahedral** (fluxional) |
| **XeO₃** | 3 | 1 | 4 | sp³ | **trigonal pyramidal** |
| **XeO₄** | 4 | 0 | 4 | sp³ | **tetrahedral** |
| **XeOF₄** | 5 | 1 | 6 | sp³d² | **square pyramidal** |
| **XeO₂F₂** | 4 | 1 | 5 | sp³d | **see-saw** |
| **XeF₅⁻** | 5 | 2 | 7 | sp³d³ | **pentagonal planar** |
| **[XeF₈]²⁻** | 8 | 1 (inactive) | 9 | — | **square antiprism** |
| **[XeF]⁺** | 1 | 3 | 4 | sp³ | **linear** |

**Lone-pair placement (why these shapes):** in a trigonal bipyramid (steric no. 5) lone
pairs take the **equatorial** sites → XeF₂ linear, XeO₂F₂ see-saw, [XeF]⁺ linear. In an
octahedron (steric no. 6) a single lone pair caps a face (XeOF₄ square pyramidal; XeF₆
distorted), and **two** lone pairs go **trans** → XeF₄ square planar. In [XeF₈]²⁻ the lone
pair is **stereochemically inactive** (buried in an s-type orbital).

## 5.5 A note on the bonding in XeF₂

The linear F–Xe–F unit is best described by a **three-centre four-electron (3c–4e) bond**:
one 5p orbital of Xe overlaps with a 2p orbital of each F to give a bonding, a non-bonding
and an antibonding MO; the **four electrons** fill the bonding and non-bonding MOs. This
gives an **Xe–F bond order of ½** and places substantial **negative charge on the F atoms**
(consistent with XeF₂ being a source of "F⁻" and being attacked by Lewis acids at F). The
older **sp³d hybrid** picture is a convenient bookkeeping model but overstates the role of
the high-lying 5d orbitals.


# 6. Compounds of the other noble gases

| Gas | Chemistry |
|:--|:--|
| **Helium** | **no neutral compounds**. Only weakly bound gas-phase ions and excimers: He₂⁺, HeH⁺ (the first molecular ion to form in the early universe), He₂* (an excited-state excimer). No He compound is stable at ordinary conditions. |
| **Neon** | **no compounds at all** — the least reactive element known; not even a stable ion beyond Ne⁺ in a discharge. |
| **Argon** | **HArF** (argon fluorohydride) — made by photolysis of HF in a solid argon matrix at ~8 K (Räsänen, 2000); decomposes above ~27 K. The **only** neutral argon "compound", and only under matrix isolation. |
| **Krypton** | **KrF₂** — a colourless, volatile solid made by passing an **electric discharge** (or UV) through Kr + F₂ at ~85 K. It is **endothermic (ΔfH ≈ +60 kJ mol⁻¹)**, thermally unstable above 250 K, and an even **stronger oxidising/fluorinating agent than XeF₂** (it oxidises Au → AuF₅, Xe → XeF₆, O₂ → O₂⁺). Salts such as **[KrF]⁺[SbF₆]⁻** and **[Kr₂F₃]⁺[AsF₆]⁻** are known. |
| **Radon** | **RnF₂** and a few complex fluorides are inferred from **radiotracer** experiments (Rn + F₂ or Rn + halogen fluorides). Rn is more reactive than Xe (lowest ΔᵢH₁ in the group) but cannot be studied in bulk — ²²²Rn (t½ 3.8 d) is intensely α-radioactive and self-heating. |

> **Order of ease of compound formation** — **Ne < He < Ar < Kr < Xe < Rn**
> (He is placed above Ne here only because HeH⁺-type species exist; for *neutral compounds*
> the order is Ne ≈ He ≈ Ar (none) < Kr (one) < Xe (many) < Rn.)


# 7. Uses of the noble gases

## 7.1 Helium

- **Lifting gas** — meteorological and research balloons, airships, blimps and party
  balloons: non-inflammable (safer than H₂) with ~92 % of hydrogen's lifting power.
- **Breathing-gas diluent** — **"heliox"** (He + O₂) for deep-sea divers and for patients
  with airway obstruction: He is far **less soluble in blood** than N₂, so it avoids
  **nitrogen narcosis** and greatly reduces **decompression sickness ("the bends")**; its
  low density also makes breathing easier through a narrowed airway (and gives the
  "Donald Duck" voice).
- **Cryogenics** — **liquid helium (4.2 K)** is the coldest practical refrigerant: it cools
  the **superconducting magnets** of **MRI scanners, NMR spectrometers and particle
  accelerators (LHC)**, and is the working fluid of dilution refrigerators for
  low-temperature physics.
- **Inert shield gas** — arc welding of reactive metals (Al, Mg, Ti, stainless steel);
  atmosphere for growing ultrapure Si and Ge single crystals; **purge and pressurising
  gas** for liquid-fuelled rockets.
- **Leak detection** (mass-spectrometer sniffers — He passes through the smallest leaks);
  **carrier gas** in gas chromatography; component of gas-cooled nuclear reactors; deep
  space-observatory instrument cooling.

## 7.2 Neon

- **"Neon" signs and lamps** — the intense **orange-red glow** of a neon discharge; the
  first and still the archetypal display lighting (other colours use Ar/Hg or coloured
  glass).
- **High-voltage indicators, pilot and warning lamps, voltage stabilisers, lightning
  arresters**; the **helium–neon (He–Ne) laser** (red, 632.8 nm — long the standard
  laboratory and barcode-scanner laser).
- **Cryogenic refrigerant** — liquid neon (b.p. 27 K) has an enormous **refrigerating
  capacity per unit volume** (~40× that of liquid helium, ~3× liquid hydrogen), used where
  a compact cryogen between the He and N₂ ranges is needed.
- Wavemeters and spark-gap tubes; plasma displays.

## 7.3 Argon

- **Inert atmosphere** — the workhorse: **filling incandescent and fluorescent bulbs**
  (with ~10 % N₂) to stop the hot tungsten filament oxidising and evaporating (prolongs
  bulb life); **shielding gas** for MIG/TIG **arc welding**; blanket gas in the production
  of **Ti, Zr, U** and in growing **Si/Ge crystals**; **laboratory glove boxes and Schlenk
  lines** for air-sensitive compounds.
- **Metallurgy** — argon–oxygen decarburisation (**AOD**) in stainless-steel making;
  degassing molten aluminium.
- **Analytical** — plasma gas in **ICP-OES / ICP-MS**; fill gas for **Geiger–Müller** and
  proportional counters.
- **Insulation** — the fill gas in high-performance **double- and triple-glazed windows**
  (lower thermal conductivity than air).
- **Preservation** — blanketing wine, and protecting historic documents (the US
  Declaration of Independence and Constitution are sealed under argon).
- **Ar-ion lasers** (blue-green); **argon plasma coagulation** in surgery.

## 7.4 Krypton and xenon

- **Lighting** — high-efficiency, long-life **incandescent and fluorescent lamps** (Kr
  reduces filament evaporation still further than Ar); **photographic electronic flash
  tubes and stroboscopes**; **high-intensity discharge (HID) "xenon" arc lamps** for
  cinema projection, lighthouses, searchlights, **car headlamps**, and solar simulators;
  **excimer lasers** (ArF 193 nm, KrF 248 nm, XeCl 308 nm — used in photolithography and
  LASIK eye surgery).
- **Xenon as a general anaesthetic** — rapid onset and recovery, non-toxic,
  non-teratogenic, environmentally benign, cardioprotective (its high cost limits use).
- **Ion propulsion** — **xenon is the standard propellant** for Hall-effect and gridded
  ion thrusters on deep-space probes and station-keeping satellites (Dawn, BepiColombo,
  Starlink) — high atomic mass, easily ionised, easily stored as a dense liquid.
- **Medical imaging** — ¹³³Xe for lung-ventilation and cerebral-blood-flow studies;
  **hyperpolarised ¹²⁹Xe MRI** of the lungs; ⁸¹ᵐKr for lung ventilation.
- The **metre was defined** (1960–1983) by a wavelength of the ⁸⁶Kr spectral line.

## 7.5 Radon

- Formerly sealed in gold "seeds" and needles for the **radiotherapy of tumours** (now
  replaced by ¹²⁵I, ¹⁹²Ir and external beams).
- **Radioactive tracer** for leak-testing pipelines and studying atmospheric transport;
  monitored as an **earthquake and volcanic-eruption precursor** (Rn emanation from rock
  changes before seismic events).
- Chiefly of interest today as a **health hazard** — the second leading cause of lung
  cancer after smoking; homes on granite/uraniferous ground are tested and ventilated.


# 8. Consolidated group-trend table ("the orders")

| Property (He → Rn unless stated) | Trend / order | Reason (one line) |
|:--|:--|:--|
| Atomic (van der Waals) radius | **increases**: He < Ne < Ar < Kr < Xe | extra principal shells added |
| Ionisation enthalpy ΔᵢH₁ | **decreases**: He > Ne > Ar > Kr > Xe > Rn | larger atom, better screening (still the highest in each period) |
| Electron gain enthalpy | large **positive** throughout; \|ΔₑgH\| largest for Ne | an added electron must enter the next empty shell |
| Melting & boiling point | **increase**: He < Ne < Ar < Kr < Xe < Rn | dispersion forces strengthen with size/polarisability |
| Enthalpy of vaporisation, critical temperature | **increase** down the group | stronger dispersion forces |
| Density (STP) | **increases**: He < Ne < Ar < Kr < Xe < Rn | atomic mass rises faster than atomic volume |
| Solubility in water | **increases**: He < Ne < Ar < Kr < Xe < Rn | larger, more polarisable atoms bind water better (dispersion) |
| Polarisability | **increases** down the group | electron cloud larger, more loosely held |
| Adsorption on activated charcoal (low T) | **increases** down the group | stronger physisorption for larger atoms |
| Chemical reactivity / ease of compound formation | **increases**: He ≈ Ne ≈ Ar (nil) < Kr < Xe < Rn | ΔᵢH falls, polarisability rises — F/O can then oxidise the atom |
| Ability to form clathrates | He, Ne — none; then **Ar < Kr < Xe** | atom must be big enough to be trapped, small enough to fit the cage |
| Abundance in dry air | **Ar ≫ Ne > He > Kr > Xe** (not a group trend) | Ar boosted by radiogenic ⁴⁰Ar from ⁴⁰K |


# 9. JEE-Advanced traps and derived tools

## 9.1 Traps

1. **Helium is 1s², not ns²np⁶** — it is placed in Group 18 by chemical behaviour, not
   configuration.
2. **The highest ΔᵢH₁ of all elements is helium's (2372 kJ mol⁻¹)**; the group trend is a
   **smooth decrease** He → Rn.
3. **ΔᵢH₁(Xe) ≈ ΔᵢH₁(O₂) ≈ 1170 kJ mol⁻¹** — the observation that made Bartlett try
   Xe + PtF₆. The first noble-gas compound was **Xe⁺[PtF₆]⁻** (1962).
4. **Only Xe (and to a small extent Kr, Rn) forms compounds** — and **only with F and O**
   (the two most electronegative elements). No true He, Ne, Ar compound (HArF only in a
   matrix at 8 K).
5. **VSEPR shapes:** XeF₂ **linear** (3 lp), XeF₄ **square planar** (2 lp), XeF₆
   **distorted octahedral** (1 lp), XeO₃ **pyramidal**, XeO₄ **tetrahedral**, XeOF₄
   **square pyramidal**, XeO₂F₂ **see-saw**, XeF₅⁻ **pentagonal planar**, [XeF₈]²⁻
   **square antiprism** (lone pair stereochemically **inactive**).
6. **Hydrolysis of XeF₆ is NOT redox** — Xe stays +6 (XeO₃, XeOF₄, XeO₂F₂). Only
   **XeF₄ hydrolysis** involves disproportionation (Xe(+4) → Xe(0) + Xe(+6)).
7. **XeF₂ is the mildest, XeF₆ the strongest** fluorinating agent of the three; **KrF₂ is
   stronger still** (it fluorinates Xe → XeF₆ and O₂ → O₂⁺).
8. **XeF₄ is one of the few square-planar molecules** (with ICl₄⁻, [PtCl₄]²⁻,
   [AuCl₄]⁻) — a favourite "identify the shape" item.
9. **Perxenate (XeO₆⁴⁻, Xe +8)** oxidises Mn²⁺ → MnO₄⁻ **without a catalyst** (unlike
   NaBiO₃, which also does it but is Bi(V)); it is among the strongest oxidisers known.
10. **Ar–K anomalous pair** (Ar 39.95 > K 39.10) — because natural Ar is mostly radiogenic
    **⁴⁰Ar** from ⁴⁰K decay.
11. **Clathrates are physical, not chemical** — no bond, non-stoichiometric, He and Ne
    cannot form them.
12. **He cannot be solidified by cooling alone** (needs ~26 atm); **liquid He below 2.18 K
    is a superfluid**; **He has the lowest b.p. of any substance (4.2 K)**.
13. **Xe is the standard ion-thruster propellant** and a **general anaesthetic** — both
    consequences of its large mass and high polarisability (easy to ionise; binds
    membrane proteins by dispersion).
14. **"Neon" light is orange-red**; other tube colours are argon/mercury or dyed glass.
15. Noble gases have **comparatively large atomic radii** — because the value quoted is a
    **van der Waals radius** (no bonding contraction), not a covalent radius.

## 9.2 Derived tools

> **The ΔᵢH₁ ladder predicts the chemistry.** Compare ΔᵢH₁ of the noble gas with that of a
> known "oxidisable" species: PtF₆ oxidises anything with ΔᵢH₁ ≲ 1180 kJ mol⁻¹ (it does
> O₂, 1175). So it does **Xe (1170)** but not **Ar (1520)**. This single comparison tells
> you where noble-gas chemistry "switches on" (Kr–Xe–Rn) and off (He–Ne–Ar).

> **VSEPR for a central atom with lone pairs — the two placement rules.**
> (i) In a **trigonal bipyramid** (steric no. 5), lone pairs go **equatorial** (more room,
> only two 90° neighbours) → XeF₂ linear, XeO₂F₂ see-saw, [XeF]⁺ linear.
> (ii) In an **octahedron** (steric no. 6), a single lone pair caps one face (XeF₆
> distorted; XeOF₄ square pyramidal); **two** lone pairs go **trans** → **XeF₄ square
> planar**.

> **"Hydrolysis of a fluoride/oxofluoride is redox only if the oxidation state changes."**
> XeF₆ + H₂O → XeO₃ / XeOF₄ / XeO₂F₂ — all Xe(+6), **not redox**. XeF₄ + H₂O →
> Xe + XeO₃ — Xe goes 0 and +6, **disproportionation**. Apply the same check to
> interhalogen and phosphorus-halide hydrolyses.

> **"Down a p-block group the reluctant thing becomes willing."** Inert-pair effect (13–16):
> the ns² pair, reluctant at the top, is *given up* at the bottom (Tl⁺, Pb²⁺, Bi³⁺).
> Group 18: the *whole atom*, inert at the top (He), becomes *reactive* at the bottom
> (Xe, Rn). Same underlying cause — **falling ionisation enthalpy and rising
> polarisability**.


# 10. Ultra-fast final revision

- **Config He 1s²; rest ns²np⁶** → filled valence shell → **monatomic, colourless,
  odourless, tasteless gases**; oxidation state 0.
- **Inert because:** (i) filled shell / no unpaired e⁻, (ii) **highest ΔᵢH₁** in each
  period, (iii) **large positive ΔₑgH**.
- **ΔᵢH₁ order He > Ne > Ar > Kr > Xe > Rn**; **b.p. the reverse** (He lowest, **4.2 K** —
  lowest of any substance); **Ar is the most abundant** in air (0.934 %).
- **All physical properties (radius, b.p., ΔvapH, density, solubility, polarisability,
  charcoal adsorption) increase He → Rn** — dispersion forces strengthen with size.
- **Isolation:** fractional distillation of liquid air (Ne, Ar, Kr, Xe); **He from natural
  gas**; **Rn from Ra decay**. Historical: Ramsay–Rayleigh (remove O₂, then N₂ as
  NO/HNO₃).
- **Clathrates** (Ar, Kr, Xe in β-quinol / gas hydrates) — **physically trapped, not
  bonded**, non-stoichiometric; **He, Ne too small**.
- **Bartlett 1962:** ΔᵢH₁(Xe) ≈ ΔᵢH₁(O₂) (1170 ≈ 1175) → **Xe + PtF₆ → Xe⁺[PtF₆]⁻**, the
  first noble-gas compound.
- **XeF₂** (linear, 3 lp, sp³d) · **XeF₄** (square planar, 2 lp, sp³d²) · **XeF₆**
  (distorted octahedral, 1 lp, sp³d³). Prep by Xe + F₂ at different ratios/T/P.
- **XeO₃** (pyramidal, explosive, Xe +6) · **XeO₄** (tetrahedral, Xe +8) · **XeOF₄**
  (square pyramidal) · **XeO₂F₂** (see-saw). **Perxenate XeO₆⁴⁻ (Xe +8)** — one of the
  strongest oxidisers; oxidises Mn²⁺ → MnO₄⁻.
- **XeF₆ + 3 H₂O → XeO₃ + 6 HF** (complete); **+ H₂O → XeOF₄** (partial) — **not redox**.
  **XeF₄ + H₂O → Xe + XeO₃** — disproportionation.
- **XeF₂ + PF₅ → [XeF]⁺[PF₆]⁻** (F⁻ acceptor); **XeF₆ + MF → M[XeF₇]** (F⁻ donor).
- **KrF₂** is the only Kr compound (endothermic, made by discharge, stronger oxidiser than
  XeF₂). **HArF** only in a matrix. **No He, Ne compounds.** **RnF₂** by tracer work only.
- **Uses:** **He** — balloons, cryogenics/MRI, heliox diving, leak detection; **Ne** —
  signs, He–Ne laser; **Ar** — light bulbs, welding, inert atmosphere, ICP; **Kr/Xe** —
  flash & HID lamps, excimer lasers, Xe anaesthetic, **Xe ion thrusters**; **Rn** —
  (old) radiotherapy, earthquake precursor, health hazard.


# 11. Chapter review questions (with worked answers)

**Q1.** Give three reasons why the noble gases are chemically so unreactive.
*A.* (i) They have a **completely filled valence shell** (He 1s², rest ns²np⁶) with no
unpaired electron and no low-lying vacant orbital available for bonding. (ii) They have the
**highest ionisation enthalpy** in their period, so a cation cannot form chemically.
(iii) They have a **large positive electron gain enthalpy** (the added electron would enter
the next shell), so an anion cannot form.

**Q2.** Why does xenon form compounds while argon does not?
*A.* Compound formation needs a partner electronegative enough to remove or share an
electron. That becomes possible only when the noble gas's **ionisation enthalpy is low
enough**. Down the group ΔᵢH₁ falls (Ar 1520 → Xe 1170 kJ mol⁻¹) and polarisability rises.
**ΔᵢH₁(Xe) ≈ ΔᵢH₁(O₂)**, so the same super-oxidiser (PtF₆) that ionises O₂ can ionise Xe.
Argon's ΔᵢH₁ is still far too high, so no reagent oxidises it under ordinary conditions.

**Q3.** Describe how Neil Bartlett was led to prepare the first noble-gas compound.
*A.* Bartlett found that PtF₆ oxidises O₂: O₂ + PtF₆ → O₂⁺[PtF₆]⁻, which means PtF₆ can
overcome ΔᵢH₁(O₂) = 1175 kJ mol⁻¹. He noticed **ΔᵢH₁(Xe) = 1170 kJ mol⁻¹ ≈ ΔᵢH₁(O₂)**, and
that Xe⁺ and O₂⁺ are similarly sized. He therefore reacted Xe with PtF₆ at room temperature
and obtained a red solid, **Xe⁺[PtF₆]⁻** (1962).

**Q4.** Using VSEPR, predict and explain the shapes of XeF₂, XeF₄ and XeF₆.
*A.* **XeF₂** — Xe has 2 bond pairs + **3 lone pairs** (steric no. 5, sp³d). The three lone
pairs occupy the roomier **equatorial** sites of a trigonal bipyramid, leaving the two F
atoms axial → **linear**. **XeF₄** — 4 bp + **2 lp** (steric no. 6, sp³d²); the two lone
pairs go **trans** (axial) to minimise repulsion → **square planar**. **XeF₆** — 6 bp +
**1 lp** (steric no. 7, sp³d³); the single lone pair distorts the octahedron (it pushes
out through a face) → **distorted (capped) octahedral**, and the molecule is fluxional.

**Q5.** Give equations for the complete and the partial hydrolysis of XeF₆, and state
whether either is a redox reaction.
*A.* Complete: **XeF₆ + 3 H₂O → XeO₃ + 6 HF**. Partial: **XeF₆ + H₂O → XeOF₄ + 2 HF** (and
**XeF₆ + 2 H₂O → XeO₂F₂ + 4 HF**). In every product xenon is **+6**, unchanged from XeF₆ —
so **none of these is a redox reaction**; they are simple substitutions of F by O.

**Q6.** What are clathrate compounds of the noble gases? Why do helium and neon not form
them?
*A.* Clathrates are **cage compounds** in which a noble-gas atom is **physically trapped**
(no chemical bond) inside a cavity of a host lattice — e.g. **β-quinol** or an ice-like
**gas hydrate** (Ar·6H₂O). They are **non-stoichiometric**. **He and Ne are too small** to
be held by the cage — they simply escape — so only **Ar, Kr and Xe** form clathrates.

**Q7.** Account for the trend in boiling points of the noble gases.
*A.* **He < Ne < Ar < Kr < Xe < Rn** (4.2 → 211 K). The only attraction between the atoms
is the **London dispersion force**, which increases with **polarisability**, i.e. with the
**size and number of electrons** of the atom. So the forces — and the boiling points —
rise steadily down the group. All the values are very low because dispersion forces between
small, spherical, non-polar atoms are weak.

**Q8.** Why is the atomic radius of a noble gas larger than that of the preceding halogen?
*A.* The radius quoted for a noble gas is a **van der Waals radius** (there is no covalent
bond to measure), whereas the halogen's is usually a **covalent radius**. A covalent radius
is measured to the *shared* electron density between two bonded atoms and is therefore
smaller; a van der Waals radius is measured to the *edge* of the un-bonded electron cloud.
Comparing like with like, the noble-gas atom is only slightly larger.

**Q9.** Why is KrF₂ endothermic and thermally unstable, whereas XeF₂ is exothermic and
stable at room temperature?
*A.* The **Kr–F bond is weaker** than the Xe–F bond (Kr's ΔᵢH₁ is higher, 1351 vs 1170 kJ
mol⁻¹, and its electron cloud is less polarisable, so it shares electrons with F less
readily). The energy released on forming two Kr–F bonds does **not** offset the energy cost
of engaging Kr's electrons, so **ΔfH(KrF₂) is positive (≈ +60 kJ mol⁻¹)** and the compound
decomposes above ~250 K. For Xe the more polarisable, lower-ΔᵢH atom forms stronger Xe–F
bonds → **ΔfH(XeF₂) ≈ −164 kJ mol⁻¹**, stable.

**Q10.** Complete and balance: (i) Xe + 2 F₂ →(873 K, 6 bar); (ii) XeF₄ + H₂O →;
(iii) 2 XeO₃ + 4 NaOH →; (iv) XeF₂ + PF₅ →; (v) XeF₆ + RbF →.
*A.* (i) XeF₄; (ii) 6 XeF₄ + 12 H₂O → 4 Xe + 2 XeO₃ + 24 HF + 3 O₂; (iii) Na₄XeO₆ + Xe +
O₂ + 2 H₂O; (iv) [XeF]⁺[PF₆]⁻; (v) Rb[XeF₇] (→ Rb₂[XeF₈] + XeF₆ on heating).

**Q11.** Why is the atomic mass of argon (39.95) greater than that of potassium (39.10),
even though argon has the smaller atomic number?
*A.* Natural argon is ~**99.6 % ⁴⁰Ar**, which is **radiogenic** — produced by the
electron-capture decay of ⁴⁰K in rocks over geological time. This heavy isotope dominates,
raising Ar's average atomic mass above K's. The periodic table is ordered by **atomic
number** (Moseley), which correctly puts Ar (18) before K (19); Mendeleev had already put
them in this order on chemical grounds.

**Q12.** Why is xenon used as a propellant in ion thrusters and as a general anaesthetic?
*A.* Both uses exploit xenon's **large mass and high polarisability**. In an **ion
thruster**, Xe is easily ionised (low ΔᵢH₁), stored compactly as a dense liquid, chemically
inert (won't corrode the engine), and its **high atomic mass** gives a large momentum
change (thrust) per ion accelerated. As an **anaesthetic**, its polarisable electron cloud
lets it bind — purely by **dispersion (van der Waals) forces** — to hydrophobic pockets of
neural membrane proteins (NMDA receptors), producing anaesthesia without any chemical
reaction, hence no metabolites and no toxicity.


# 12. Chapter coverage checklist

- [ ] Group 18 framework; "inert" → "noble"; He is 1s² and placed by behaviour
- [ ] The **three** reasons for inertness (filled shell / high ΔᵢH / +ve ΔₑgH); reactivity
      increases down the group
- [ ] Master data table; van der Waals radii; the ΔᵢH₁ ladder and what it predicts
- [ ] Occurrence (He in natural gas; Ar the most abundant; radiogenic ⁴⁰Ar; Rn from Ra)
- [ ] Isolation — fractional distillation of liquid air (+ removal of O₂/N₂ for Ar);
      He from natural gas; Ramsay–Rayleigh historical method
- [ ] Isotopes — Ne (first isotope evidence), Ar–K anomalous pair, Xe (9 isotopes),
      hyperpolarised ¹²⁹Xe, ²²²Rn hazard
- [ ] All property **orders** with reasons: atomic radius, **ΔᵢH₁ (He highest of all
      elements)**, ΔₑgH (positive), m.p./b.p., ΔvapH, density, solubility, polarisability,
      charcoal adsorption — all increase He → Rn (dispersion forces)
- [ ] Helium special facts: lowest b.p. (4.2 K), cannot be solidified by cooling,
      superfluid He-II below 2.18 K, diffuses through solids
- [ ] Discovery timeline (Cavendish → Janssen/Lockyer → Rayleigh/Ramsay → Travers →
      Dorn → Bartlett 1962)
- [ ] Clathrate compounds — β-quinol, gas hydrates; physical trapping, non-stoichiometric;
      He/Ne excluded
- [ ] Bartlett's discovery — the O₂⁺[PtF₆]⁻ clue, ΔᵢH₁(Xe) ≈ ΔᵢH₁(O₂), Xe⁺[PtF₆]⁻
- [ ] Xe fluorides — preparation (ratio/T/P for XeF₂, XeF₄, XeF₆), properties, hydrolysis,
      oxidising/fluorinating reactions, fluorocations and fluoroanions
- [ ] Xe–oxygen compounds — XeO₃ (pyramidal, explosive), XeO₄ (+8, tetrahedral), XeOF₄,
      XeO₂F₂, perxenates (Xe +8, super-oxidiser, Mn²⁺ → MnO₄⁻)
- [ ] **VSEPR shapes** of XeF₂ / XeF₄ / XeF₆ / XeO₃ / XeO₄ / XeOF₄ / XeO₂F₂ / XeF₅⁻ /
      [XeF₈]²⁻ — with lone-pair placement rules
- [ ] Hydrolysis of XeF₆ is NOT redox; XeF₄ hydrolysis IS (disproportionation)
- [ ] Other noble gases — KrF₂ (endothermic, discharge, stronger oxidiser), HArF (matrix
      only), no He/Ne compounds, RnF₂ (tracer)
- [ ] Uses — He (balloons, cryogenics/MRI, heliox, leak detection); Ne (signs, He–Ne
      laser, cryogen); Ar (bulbs, welding, inert atmosphere, ICP, insulation); Kr/Xe
      (flash & HID lamps, excimer lasers, Xe anaesthetic & ion thrusters); Rn
      (radiotherapy, precursor, hazard)
- [ ] Consolidated order table; JEE traps; the ΔᵢH₁ ladder and VSEPR tools; ultra-fast
      revision


# 13. NCERT Class XII, Unit 7 — complete reaction & preparation ledger

*Every equation, preparation and named condition from NCERT Unit 7 "The p-Block Elements"
(Group 18 portion, §7.23), grouped by topic. Section numbers in [ ] point to where each
item is developed in these notes.*

## 13.1 NCERT §7.23 — Group 18: general [§1–§4]

- Six elements: **He, Ne, Ar, Kr, Xe, Rn** — all gases, chemically unreactive → "noble
  gases".
- Configuration **ns² np⁶** except He (**1s²**); closed-shell → inactive.
- Occurrence: all except Rn occur in the atmosphere (~1 % by volume of dry air, **argon the
  major part**); He and sometimes Ne occur in minerals of radioactive origin (pitchblende,
  monazite, cleveite); main commercial source of **He is natural gas**; **Xe and Rn are the
  rarest**; Rn is obtained as a decay product of ²²⁶Ra:

      ²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He

- Table 7.12 data: ΔᵢH₁ (kJ mol⁻¹) He 2372, Ne 2080, Ar 1520, Kr 1351, Xe 1170, Rn 1037;
  ΔₑgH all positive; atomic radius increases He → Rn; densities and b.p. increase down the
  group; He has the lowest b.p. (**4.2 K**) of any known substance; He diffuses through
  rubber, glass and plastics.
- **Reasons for inertness:** (i) completely filled ns² np⁶ valence shell (He 1s²);
  (ii) high ionisation enthalpy and more positive electron gain enthalpy.
- Example 7.20: Group 18 elements are called noble gases — completely filled valence shell,
  react with only a few elements under certain conditions.
- Example 7.21: noble gases have very low boiling points — monatomic, only weak dispersion
  forces.

## 13.2 NCERT — Bartlett's discovery [§4.3]

    O₂ + PtF₆ → O₂⁺[PtF₆]⁻          (Bartlett, 1962 — a red compound)
    Xe + PtF₆ → Xe⁺[PtF₆]⁻          (ΔᵢH₁ of O₂ ≈ ΔᵢH₁ of Xe ≈ 1170 kJ mol⁻¹)

- Compounds of krypton are fewer — only **KrF₂** has been studied in detail. Compounds of
  radon (e.g. RnF₂) have been identified only by radiotracer technique. **No true compounds
  of Ar, Ne or He are yet known.**

## 13.3 NCERT — Xenon–fluorine compounds [§5.1, §5.2]

    Xe(g) + F₂(g)  --673 K, 1 bar, Xe in excess--> XeF₂(s)
    Xe(g) + 2F₂(g) --873 K, 7 bar, Xe : F₂ = 1 : 5--> XeF₄(s)
    Xe(g) + 3F₂(g) --573 K, 60–70 bar, Xe : F₂ = 1 : 20--> XeF₆(s)
    XeF₄ + O₂F₂ --143 K--> XeF₆ + O₂

    2XeF₂(s) + 2H₂O(l) → 2Xe(g) + 4HF(aq) + O₂(g)          (hydrolysis of XeF₂)

    XeF₂ + PF₅ → [XeF]⁺[PF₆]⁻
    XeF₄ + SbF₅ → [XeF₃]⁺[SbF₆]⁻
    XeF₆ + MF → M⁺[XeF₇]⁻          (M = Na, K, Rb, Cs)

- XeF₂, XeF₄, XeF₆ are colourless crystalline solids that sublime at 298 K; **powerful
  fluorinating agents**; readily hydrolysed even by traces of water.

## 13.4 NCERT — Xenon–oxygen compounds [§5.3]

    6XeF₄ + 12H₂O → 4Xe + 2XeO₃ + 24HF + 3O₂
    XeF₆ + 3H₂O → XeO₃ + 6HF                    (complete hydrolysis)
    XeF₆ + H₂O → XeOF₄ + 2HF                    (partial hydrolysis)
    XeF₆ + 2H₂O → XeO₂F₂ + 4HF                  (partial hydrolysis)

- **XeO₃** — colourless explosive solid, pyramidal molecular structure.
- **XeOF₄** — colourless volatile liquid, square-pyramidal molecular structure.
- Example 7.22: hydrolysis of XeF₆ to XeOF₄ / XeO₂F₂ is **not** a redox reaction — the
  oxidation state of every element is unchanged.

## 13.5 NCERT — Structures (Fig 7.9) [§5.4]

    XeF₂  : linear (sp³d; 3 lone pairs on Xe, equatorial)
    XeF₄  : square planar (sp³d²; 2 lone pairs, axial)
    XeF₆  : distorted octahedral (sp³d³; 1 lone pair) — 7 electron pairs
    XeOF₄ : square pyramidal
    XeO₃  : pyramidal

## 13.6 NCERT — Uses [§7]

- **Helium** — non-inflammable and light, so used to fill balloons for meteorological
  observations; in gas-cooled nuclear reactors; **liquid He (b.p. 4.2 K)** as a cryogenic
  agent for low-temperature experiments, and to produce and sustain the superconducting
  magnets of modern **NMR spectrometers and MRI systems**; a diluent for oxygen in modern
  diving apparatus (very low solubility in blood).
- **Neon** — discharge tubes and fluorescent bulbs for advertisement displays; neon bulbs
  used in botanical gardens and greenhouses.
- **Argon** — provides an inert atmosphere in high-temperature metallurgical processes
  (arc welding of metals and alloys) and for filling electric bulbs; in the laboratory for
  handling air-sensitive substances.
- Xenon and krypton — light bulbs designed for special purposes.
- Intext 7.32: He is used in diving apparatus because of its very low solubility in blood.
- Intext 7.33: XeF₆ + H₂O → XeO₂F₂ + HF (balance: XeF₆ + 2H₂O → XeO₂F₂ + 4HF).
- Intext 7.34: chemistry of Rn is difficult to study — radioactive, very short half-life.

## 13.7 Content in these notes that goes beyond NCERT Unit 7

Added from J. D. Lee / Greenwood / Ananya Ganguly for JEE-Advanced completeness:

- **Discovery timeline** (Cavendish 1785; Janssen/Lockyer 1868; Rayleigh & Ramsay 1894;
  Ramsay & Travers 1898; Dorn 1900) and the Nobel Prizes of 1904 [§2.2].
- **Isolation** — full fractional-distillation scheme; He from natural gas; the historical
  Ramsay–Rayleigh method (remove O₂, then N₂ as NO → HNO₃) [§1.4].
- **Clathrate compounds** — β-quinol and gas-hydrate cages; physical trapping, not
  bonding; He and Ne too small to be trapped [§4.2].
- **Isotopes** — Ne (first isotope evidence, Thomson/Aston); the **Ar–K anomalous pair**
  (radiogenic ⁴⁰Ar); Xe's nine isotopes; hyperpolarised ¹²⁹Xe MRI [§1.4].
- **KrF₂** in detail (endothermic, made by discharge, stronger fluorinating agent than
  XeF₂; [KrF]⁺ salts); **HArF** (matrix isolation, 8 K) [§6].
- **XeO₄ (Xe +8), perxenates XeO₆⁴⁻** — one of the strongest oxidisers, oxidises Mn²⁺ →
  MnO₄⁻ without a catalyst; **[XeF₈]²⁻** (square antiprism, stereochemically inactive lone
  pair); XeF₅⁻ (pentagonal planar) [§5.3, §5.4].
- **Bonding in XeF₂** as a 3-centre-4-electron bond [§5.5].
- **The full "orders" table** — every physical property increasing He → Rn, with the
  dispersion-force reasoning [§8].
- **Extended uses** — heliox and airway medicine; He–Ne and excimer (ArF, KrF, XeCl)
  lasers; **xenon ion thrusters** and xenon **anaesthesia**; Ar in ICP-MS, double glazing
  and document preservation; ⁸⁵Kr and ¹³³Xe medical/industrial tracers; Rn as an
  earthquake precursor and indoor-air hazard [§7].


# 14. Extended reaction set for problem-solving (question-bank layer)

*The specific reactions and micro-facts that JEE-Advanced question banks test on Group 18,
one level below the NCERT core.*

## 14.1 Preparation of the xenon fluorides — the exact conditions

| Fluoride | Xe : F₂ | Conditions | Equation |
|:--|:--:|:--|:--|
| **XeF₂** | 2 : 1 (Xe excess) | 673 K, 1 bar (Ni tube) | Xe + F₂ → XeF₂ |
| **XeF₄** | 1 : 5 | 873 K, 6–7 bar | Xe + 2 F₂ → XeF₄ |
| **XeF₆** | 1 : 20 (F₂ excess) | 573 K, **60–70 bar** | Xe + 3 F₂ → XeF₆ |

Also:  Xe + F₂ --sunlight, 1 bar, RT--> XeF₂  (photochemical) ;
XeF₄ + O₂F₂ --143 K--> XeF₆ + O₂.
All three are **colourless crystalline solids**, sublime at 298 K, **powerful fluorinating
agents**, hydrolysed by traces of water (XeF₂ < XeF₄ < XeF₆).

> **"Which diagram is correct for Xe?"** — the one showing **Xe + F₂ (1 : 20) → XeF₆** and
> **XeF₆ + H₂O → hydrolysis products** (XeO₃ / XeOF₄ / XeO₂F₂). Wrong diagrams: 2 : 1 →
> XeF₆; XeF₆ + SiO₂ (that is a *reaction with* glass, not a preparation); XeF₄ → XeF₆ by F₂.

## 14.2 Hydrolysis of the xenon fluorides

    2 XeF₂ + 2 H₂O → 2 Xe + 4 HF + O₂                       (slow)
    6 XeF₄ + 12 H₂O → 4 Xe + 2 XeO₃ + 24 HF + 3 O₂          (partial disproportionation:
                                                             Xe(IV) → Xe(0) + Xe(VI))
    XeF₆ + 3 H₂O → XeO₃ + 6 HF                              (complete hydrolysis)
    XeF₆ + H₂O → XeOF₄ + 2 HF                               (partial — 1 step)
    XeF₆ + 2 H₂O → XeO₂F₂ + 4 HF                            (partial — 2 steps)
    2 XeF₆ + SiO₂ → 2 XeOF₄ + SiF₄                          (why XeF₆ is NOT stored in glass)

- **Hydrolysis of XeF₆ is NOT a redox reaction** — Xe stays **+6** in XeO₃, XeOF₄, XeO₂F₂
  (just F replaced by O). **Only XeF₄ hydrolysis** involves disproportionation.
- **XeO₃** is a **colourless, deliquescent, dangerously explosive** solid.
- "Which Xe compound does **not** give explosive XeO₃ on **complete** hydrolysis?" →
  **XeF₂** (it just gives Xe + HF + O₂). XeF₄ and XeF₆ both give XeO₃.

## 14.3 XeF₂/XeF₄/XeF₆ as fluoride-ion donors and acceptors

**Acceptors (react with strong Lewis acids — fluorocations):**

    XeF₂ + PF₅ → [XeF]⁺[PF₆]⁻          ;  XeF₂ + SbF₅ → [XeF]⁺[SbF₆]⁻ (and [Xe₂F₃]⁺[SbF₆]⁻)
    XeF₄ + SbF₅ → [XeF₃]⁺[SbF₆]⁻       ;  XeF₆ + AsF₅ → [XeF₅]⁺[AsF₆]⁻
    XeF₆ + PF₅ → [XeF₅]⁺[PF₆]⁻         ;  XeF₆ + SbF₅ → [XeF₅]⁺[SbF₆]⁻

**Donors (react with alkali-metal fluorides — fluoroanions):**

    XeF₆ + CsF → Cs⁺[XeF₇]⁻            ;  2 Cs[XeF₇] --Δ--> Cs₂[XeF₈] + XeF₆
    (XeF₄ does NOT react with NaF — it is neither a good F⁻ donor nor acceptor toward NaF;
     "XeF₄ acts as a fluoride donor with SbF₅" is the correct statement, giving [XeF₃]⁺[SbF₆]⁻.)

> **"In which reaction does XeF₆ act as a fluoride *acceptor*?"** → **XeF₆ + CsF →
> Cs[XeF₇]** (XeF₆ accepts F⁻). In XeF₆ + AsF₅/SbF₅/PF₅ it *donates* F⁻ (acts as a base).

## 14.4 Xenon–oxygen compounds and perxenates (Xe +8)

    2 XeO₃ + 4 NaOH → Na₄XeO₆ + Xe + O₂ + 2 H₂O            (xenate disproportionates → perxenate)
    XeO₃ + OH⁻ → HXeO₄⁻ (xenate) ;  2 HXeO₄⁻ + 2 OH⁻ → XeO₆⁴⁻ (perxenate) + Xe + O₂ + 2 H₂O
    Ba₂XeO₆ + 2 H₂SO₄ (cold, conc.) → 2 BaSO₄ + XeO₄↑ + 2 H₂O     (XeO₄ — explosive gas, Xe +8)
    Na₄XeO₆ + 2 Mn²⁺ + ... → 2 MnO₄⁻ + ...      (perxenate oxidises Mn²⁺ → MnO₄⁻ **without a
                                                catalyst** — even stronger than NaBiO₃)

## 14.5 Structures (VSEPR) — the "same lone pairs / same shape" questions

| Species | bond pairs | lone pairs on Xe | hybrid | shape |
|:--|:--:|:--:|:--:|:--|
| XeF₂ | 2 | **3** | sp³d | **linear** |
| XeF₄ | 4 | **2** | sp³d² | **square planar** |
| XeF₆ | 6 | **1** | sp³d³ | distorted octahedral (fluxional) |
| XeO₃ | 3 | 1 | sp³ | pyramidal |
| XeO₄ | 4 | 0 | sp³ | tetrahedral |
| XeOF₄ | 5 | 1 | sp³d² | square pyramidal |
| XeO₂F₂ | 4 | 1 | sp³d | see-saw |
| XeF₅⁻ | 5 | 2 | sp³d³ | pentagonal planar |
| [XeF₈]²⁻ | 8 | 1 (inactive) | — | square antiprism |
| [XeF]⁺ | 1 | 3 | sp³ | linear |

- **XeF₂ has 3 lone pairs on Xe — the same as the central I of I₃⁻** (I₃⁻: 2 bond pairs +
  3 lone pairs, linear). So "which Xe compound has the same number of lone pairs on the
  central atom as I₃⁻?" → **XeF₂**.
- **XeF₄ is square planar** — one of the few (with ICl₄⁻, [PtCl₄]²⁻, [AuCl₄]⁻).
- Xenon compounds formed on XeF₆ hydrolysis (XeO₃, XeOF₄, XeO₂F₂) **differ** in
  hybridisation, shape and number of lone pairs — they are **not** all planar, not all
  oxofluorides, not all non-polar.

## 14.6 Compounds of the other noble gases

    Kr + F₂ --electric discharge / UV, 85 K--> KrF₂   (colourless solid; **ΔfH positive**,
      unstable > 250 K; a **stronger** fluorinating/oxidising agent than XeF₂ — it oxidises
      Au → AuF₅, Xe → XeF₆, O₂ → O₂⁺); salts [KrF]⁺[SbF₆]⁻, [Kr₂F₃]⁺[AsF₆]⁻.
    HF --UV, solid-Ar matrix, 8 K--> HArF     (the only neutral Ar "compound"; decomposes > 27 K)
    Rn + F₂ → RnF₂     (known only from radiotracer work — Rn too radioactive for bulk study)
    No neutral compounds of **He or Ne** — only gas-phase ions (HeH⁺, He₂⁺).

    Ease of compound formation:  He ≈ Ne ≈ Ar (essentially none) < Kr (one) < Xe (many) < Rn

## 14.7 Physical-property orders (the "which does NOT follow the order" trap)

For **He < Ne < Ar < Kr < Xe < Rn** — the following **increase** (all governed by London
dispersion forces, which rise with size/polarisability):

- atomic (van der Waals) radius
- **boiling point, melting point**, enthalpy of vaporisation, critical temperature
- **density**
- **solubility in water** ("increases due to increase in *instantaneous dipole–induced
  dipole* interaction")
- **polarisability**
- **ease of liquefaction**
- **adsorption on activated charcoal** (→ the basis of separating the noble gases:
  "adsorption and desorption on charcoal", Dewar's method)

The one that runs the **other way** (He > Ne > Ar > Kr > Xe > Rn):

- **ionisation enthalpy** (highest for He — the largest ΔᵢH₁ of any element)

> So in "select the property that does NOT follow He < Ne < Ar < Kr < Xe", the answer is
> **ionisation energy** (it decreases in that direction).

## 14.8 Isolation and a few facts examiners use

- **Fractional distillation of liquid air** gives Ne, Ar, Kr, Xe; Ar is purified by
  removing O₂ (hot Cu) and N₂ (hot Mg / Ca → Mg₃N₂ / Ca₃N₂). **He is from natural gas**
  (accumulated α-decay He; He has the lowest b.p., condenses last). **Rn from Ra decay**:
  ²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He.
- **Ramsay–Rayleigh (historical):** remove O₂, then N₂ by repeated sparking with excess O₂
  over alkali (N₂ + O₂ → 2 NO → HNO₃), then CO₂ and moisture → residual argon.
- **Bartlett 1962:** ΔᵢH₁(Xe) = 1170 ≈ ΔᵢH₁(O₂) = 1175 kJ mol⁻¹, and PtF₆ oxidises O₂ to
  O₂⁺[PtF₆]⁻ → so PtF₆ should oxidise Xe → **Xe⁺[PtF₆]⁻** (first noble-gas compound).
- **Clathrates** (β-quinol, gas hydrates) form with **Ar, Kr, Xe** — **He and Ne are too
  small** to be trapped; a clathrate is **physical** caging (no bond), non-stoichiometric.
  "All noble gases can be stored by clathrate formation" is **false**.
- **He cannot be solidified by cooling alone** (needs ~26 atm); liquid He below 2.18 K is a
  **superfluid**; He **diffuses through rubber, glass and plastics** ("higher degree of
  diffusibility").
- **Ar is the most abundant** noble gas in air (0.934 %) — mostly radiogenic **⁴⁰Ar** from
  ⁴⁰K, which is why Ar (39.95) is heavier than K (39.10): the **Ar–K anomalous pair**.
`;
