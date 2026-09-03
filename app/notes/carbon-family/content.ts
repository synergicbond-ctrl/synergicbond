// The Carbon Family (Group 14) — JEE Advanced master notes.
//
// Independently written for SYNERGIC BOND. This is a synthesis of the
// standard, non-proprietary body of Group 14 inorganic chemistry that is
// common to the Class XI syllabus and to every general reference in the
// field. It contains no verbatim text, tables, problem sets or figures
// copied from any single source; the section structure, the ordering
// system ("increasing / decreasing / note" blocks), the MOT LENS / JEE
// TRAP / REDOX ANCHOR framing, the derived tools and every practice
// question are original to this chapter. Physical data are standard
// reference constants; where editions differ, the Class XI syllabus value
// is used.

export const CARBON_FAMILY_MASTER_MARKDOWN = String.raw`

# 1. p-Block foundation and the place of Group 14

## 1.1 Periodic-table framework

In the p-block the differentiating electron enters an outermost p orbital. The inner electronic core is not identical for all members of a group: filled d and f subshells appear in the heavier members and shield the nuclear charge poorly, so effective nuclear charge, size, ionisation enthalpy and chemical behaviour all show irregular jumps. For a p-block element the group (maximum) oxidation state equals the total number of valence s and p electrons; other common states differ from it by two, because an ns² pair is either used together or left unused. In the boron, carbon and nitrogen families the group oxidation state is most stable for the lighter members, and the state two units lower becomes progressively more stable down the group — the pattern traditionally called the **inert-pair effect**.

Non-metallic character decreases down a group, so heavier members are more metallic. This shows in the oxides: non-metal oxides are acidic or neutral, and increasingly metallic oxides become amphoteric and finally basic.

## 1.2 First-member anomaly, covalence and pi bonding

The first member of a p-block group differs sharply from the rest for four linked reasons: its **very small size**, its **high ionisation enthalpy**, its **high electronegativity**, and — the decisive one — the n = 2 valence shell has **only 2s and 2p orbitals, no d**. Almost every "carbon is special" fact traces to one of three consequences.

**Consequence 1 — maximum covalence is 4** (one 2s + three 2p, eight electrons around the atom). CCl₄ exists; a hypothetical "CCl₆²⁻" does not, because carbon has no fifth or sixth valence orbital to use. The heavier congeners have empty, energetically accessible nd orbitals and reach six: **[SiF₆]²⁻, [GeCl₆]²⁻, [Sn(OH)₆]²⁻, [PbCl₆]²⁻**. This one difference governs the whole "CCl₄ inert / SiCl₄ hydrolyses" contrast (§18.1) and the "N(CH₃)₃ pyramidal / N(SiH₃)₃ planar" contrast (§19.2).

**Consequence 2 — strong pπ–pπ multiple bonding.** Two 2p orbitals on adjacent period-2 atoms are compact and similar in size, so their sideways (π) overlap integral is large: carbon forms **C=C, C≡C, C=O, C=S, C≡N** readily. A 3p (or larger) orbital is diffuse and node-bearing; sideways overlap between two large p orbitals, or between a large 3p and a compact 2p, is poor, so silicon and the heavier atoms **avoid pπ–pπ** and instead build **single-bonded catenated or three-dimensional networks** (with some pπ–dπ character). The textbook illustration: **CO₂ is a discrete linear O=C=O molecule; SiO₂ is a giant covalent network of Si–O single bonds** — different physical states from the same stoichiometry.

**Consequence 3 — an exceptionally strong homonuclear bond.** Small atoms with no inner-shell repulsion between the bonded cores give short, strong single bonds. The **C–C bond (≈ 348 kJ mol⁻¹) is about as strong as C–O (≈ 358) and stronger than C–Cl (≈ 328)** — so carbon has no energetic reason to prefer an oxide or halide over a C–C chain, and **catenation is unlimited**. Down the group M–M bond enthalpy collapses (Si–Si ≈ 297, Ge–Ge ≈ 260, Sn–Sn ≈ 240 kJ mol⁻¹) while M–O stays strong (**Si–O ≈ 452**), so catenation dies out and oxide/network chemistry takes over (§5.2).

> **Key Point:** Carbon cannot expand its octet and has a maximum covalence of four. In a tetravalent compound it has exactly eight electrons around it and **no low-lying vacant orbital**, so it is "electron precise" — it neither donates nor accepts an extra pair. Silicon, with empty 3d orbitals just above the valence level, is **not** electron precise: it can accept a lone pair into a five- or six-coordinate transition state. This is the single reason CCl₄ is not hydrolysed while SiCl₄ hydrolyses instantly.

## 1.3 Group 14 master data

| Property | C | Si | Ge | Sn | Pb |
|:--|:--:|:--:|:--:|:--:|:--:|
| Atomic number | 6 | 14 | 32 | 50 | 82 |
| Atomic mass / g mol⁻¹ | 12.01 | 28.09 | 72.60 | 118.71 | 207.2 |
| Ground-state configuration | [He] 2s²2p² | [Ne] 3s²3p² | [Ar] 3d¹⁰4s²4p² | [Kr] 4d¹⁰5s²5p² | [Xe] 4f¹⁴5d¹⁰6s²6p² |
| Covalent radius / pm | 77 | 118 | 122 | 140 | 146 |
| Ionic radius M⁴⁺ / pm | – | 40 | 53 | 69 | 78 |
| Ionic radius M²⁺ / pm | – | – | 73 | 118 | 119 |
| ΔᵢH₁ / kJ mol⁻¹ | 1086 | 786 | 761 | 708 | 715 |
| ΔᵢH₂ / kJ mol⁻¹ | 2352 | 1577 | 1537 | 1411 | 1450 |
| ΔᵢH₃ / kJ mol⁻¹ | 4620 | 3228 | 3300 | 2942 | 3081 |
| ΔᵢH₄ / kJ mol⁻¹ | 6220 | 4354 | 4409 | 3929 | 4082 |
| Sum ΔᵢH₁₋₄ / kJ mol⁻¹ | 14278 | 9945 | 10037 | 8990 | 9328 |
| Electronegativity (Pauling) | 2.5 | 1.8 | 1.8 | 1.8 | 1.9 |
| Density / g cm⁻³ | 3.51 (diamond); 2.22 (graphite) | 2.34 | 5.32 | 7.26 | 11.34 |
| Melting point / K | 4373 | 1693 | 1218 | 505 | 600 |
| Boiling point / K | – | 3550 | 3123 | 2896 | 2024 |
| Electrical resistivity / Ω cm (293 K) | 10¹⁴–10¹⁶ (diamond) | 50 | 50 | 10⁻⁵ | 2×10⁻⁵ |

*Covalent radii (Å), useful for order questions: C 0.77, Si 1.17, Ge 1.22, Sn 1.40, Pb 1.46.*

**Reading the irregular steps.** Effective nuclear charge on the outer electron rises down the group even though a shell is added, because the newly interposed core electrons shield badly:

| Step | Interposed core | Shielding quality | Size increase |
|:--|:--|:--|:--|
| C → Si | 8 (a full 2p³ + 3s) — a normal Ne core | good | **large** (77 → 118 pm) |
| Si → Ge | + **3d¹⁰** (first transition series) | poor (d-block contraction) | **small** (118 → 122 pm) |
| Sn → Pb | + **4f¹⁴** (the lanthanoids) *and* 5d¹⁰ | very poor (lanthanoid contraction) | **small** (140 → 146 pm) |

The same poor d/f shielding is why ΔᵢH rises Sn → Pb (§3.2), why Ge and Pb electronegativities do not fall as expected (§3.3), and why the +2 state gains ground down the group (§4.2).

## 1.4 Occurrence, abundance and isotopes

| Element | Crustal abundance (by mass) | Free / native | Principal combined forms |
|:--|:--|:--|:--|
| **C** | ≈ 0.02 % (17th) | graphite, diamond, coal | metal **carbonates** (limestone, dolomite, magnesite), **hydrocarbons** (petroleum, natural gas, coal), atmospheric **CO₂** (≈ 0.03 % by volume), dissolved HCO₃⁻ in the oceans, all living matter |
| **Si** | **27.7 %** (2nd, after O 45.5 %) | never free | **silica** — sand, quartz, flint, agate, opal; **silicates and aluminosilicates** — feldspar, mica, clay, asbestos, zeolite (the bulk of the crust and mantle) |
| **Ge** | ≈ 1.5 ppm (54th) | none | trace substituent in **zinc sulphide ores** and in **coal ash / flue dust** (the main commercial source) |
| **Sn** | ≈ 2 ppm | rare native metal | **cassiterite SnO₂** (the only important ore); stannite Cu₂FeSnS₄ |
| **Pb** | ≈ 14 ppm | rare native metal | **galena PbS** (chief ore); anglesite PbSO₄; cerussite PbCO₃; pyromorphite Pb₅(PO₄)₃Cl |

**Isotopes — the examinable points.**

| Element | Stable isotopes | Notes |
|:--|:--|:--|
| C | ¹²C (98.9 %), ¹³C (1.1 %) | ¹²C is the atomic-mass standard (exactly 12); ¹³C is the NMR-active nucleus; radioactive **¹⁴C** (trace, t½ ≈ 5730 y) is made continuously in the upper atmosphere |
| Si | ²⁸Si (92.2 %), ²⁹Si (4.7 %), ³⁰Si (3.1 %) | ²⁸Si is being adopted as a mass/kilogram standard (the "silicon sphere") |
| Sn | **ten** stable isotopes (¹¹²–¹²⁴Sn) | **the largest number of stable isotopes of any element** — a consequence of Z = 50 being a "magic number" |
| Pb | ²⁰⁴, ²⁰⁶, ²⁰⁷, ²⁰⁸Pb | ²⁰⁶Pb, ²⁰⁷Pb, ²⁰⁸Pb are the stable **end-products of the ²³⁸U, ²³⁵U and ²³²Th decay series** — so the Pb isotope ratio of a rock dates it (U–Pb dating); the atomic mass of lead varies slightly with its geological source |

> **JEE TRAP:** Metallic character *increases* down Group 14 (C, Si non-metals; Ge metalloid; Sn, Pb metals) — the opposite of the trend across a period. Ultrapure Si and Ge are the classic **semiconductors**; doping with a Group 15 element (extra electron) gives **n-type**, with a Group 13 element (electron hole) gives **p-type**.

## 1.5 Radiocarbon dating — the method and the arithmetic

**Formation.** Cosmic-ray secondary neutrons in the upper atmosphere convert ¹⁴N to radioactive ¹⁴C:

¹⁴₇N + ¹₀n [upper atmosphere] ⟶ ¹⁴₆C + ¹₁H

**Uptake.** The ¹⁴C is oxidised to ¹⁴CO₂, mixed through the atmosphere, fixed by photosynthesis and passed along every food chain, so a **living** organism holds its ¹⁴C : ¹²C ratio at the (roughly constant) atmospheric value — an activity of about **15.3 disintegrations per minute per gram of carbon**.

**Decay.** At death, intake stops. The ¹⁴C decays by β⁻ emission back to ¹⁴N:

¹⁴₆C ⟶ ¹⁴₇N + ⁰₋₁e   (t½ = 5730 y; take **5770 y** for this syllabus)

**Age from activity.** First-order decay: $A = A_0 e^{-\lambda t}$ with $\lambda = \dfrac{\ln 2}{t_{1/2}}$, so

$$t = \frac{t_{1/2}}{\ln 2}\,\ln\!\frac{A_0}{A} = \frac{2.303\,t_{1/2}}{0.693}\,\log\frac{A_0}{A}$$

- Activity fallen to **½** of modern → **one half-life** ≈ 5730 y.
- Activity fallen to **¼** → **two half-lives** ≈ 11 460 y.
- A worked case: a wooden sample gives 7.65 dis min⁻¹ g⁻¹ against a modern 15.3 → $A_0/A = 2$ → t = one half-life ≈ **5730 y**.

**Limits.** Works only on **once-living carbonaceous** material; useless on ordinary inorganic rock (no biological ¹⁴C uptake). The practical ceiling is about **50 000 y** (≈ 9 half-lives — the residual activity becomes too small to measure); recent fossil-fuel CO₂ (dead carbon) and 20th-century bomb ¹⁴C both perturb the modern reference.

# 2. Group 14 identity and electronic configuration

Carbon is a typical non-metal that forms an astonishing range of compounds — an entire branch of chemistry. Silicon is the backbone of mineral chemistry and of the electronics industry. Germanium is a metalloid bridge (a genuine semiconductor, valued before ultrapure silicon was available). Tin and lead are soft, low-melting metals known since antiquity; lead sheet is said to have lined the floor of the Hanging Gardens of Babylon to stop water escaping.

## 2.1 Electronic configurations, valence state and oxidation states

| Element | Z / atomic mass | Ground-state configuration | Core type | Valence shell | Common oxidation states |
|:--:|:--:|:--:|:--|:--:|:--:|
| C | 6 / 12.011 | [He] 2s² 2p² | noble gas | 2s² 2p² | −4, −3 … +2, **+4** |
| Si | 14 / 28.086 | [Ne] 3s² 3p² | noble gas | 3s² 3p² | **+4**, (+2 at high T) |
| Ge | 32 / 72.63 | [Ar] **3d¹⁰** 4s² 4p² | pseudo-noble-gas (+ d¹⁰) | 4s² 4p² | **+4**, +2 (reducing) |
| Sn | 50 / 118.71 | [Kr] **4d¹⁰** 5s² 5p² | pseudo-noble-gas (+ d¹⁰) | 5s² 5p² | **+2**, **+4** (both common) |
| Pb | 82 / 207.2 | [Xe] **4f¹⁴ 5d¹⁰** 6s² 6p² | + f¹⁴ + d¹⁰ | 6s² 6p² | **+2**, +4 (oxidising) |

- **C and Si** have clean noble-gas cores. **Ge and Sn** carry an extra filled d¹⁰; **Pb** carries 4f¹⁴ *and* 5d¹⁰. These d and (especially) f electrons **shield the nuclear charge poorly**, and that single fact drives the irregular radius trend (§1.3, §3.1), the rise in ΔᵢH from Sn to Pb (§3.2), and the growing stability of the +2 state (§4.2).

**Valence state and the +4 oxidation state.** The ground state ns²np² has only **two unpaired electrons**, so it would be divalent. To become tetravalent (as in CH₄, SiF₄), one ns electron is **promoted** to the empty np orbital: ns²np² → ns¹np³, giving four unpaired electrons in a set of **sp³ hybrids**. The promotion costs energy, but it is more than repaid by forming **two extra bonds** (four strong M–X bonds instead of two). Down the group the ns–np gap widens (the ns level sinks relative to np — most sharply at Pb, from relativistic contraction of the 6s orbital), the promotion cost rises, and the M–X bonds that must repay it get weaker — so the divalent (+2) state becomes competitive and finally dominant (§4.2).

> **JEE TRAP:** Group 14 "other oxidation states" are **+2 and −4**. Carbon's negative states (−4 in CH₄ and in the methanide carbides Be₂C, Al₄C₃; −3, −2, −1 in longer hydrocarbons) are real and examinable; **Si, Ge, Sn and Pb do not form negative oxidation states** — SiH₄ is written with H as δ⁻ only because EN(H) > EN(Si), not because Si is −4 in any ionic sense.

## 2.2 Discovery and the place in history

| Element | Known since | Note |
|:--|:--|:--|
| **C** | prehistory (charcoal, soot); diamond antiquity | recognised as an element by Lavoisier (1789); ¹⁴C dating (Libby, Nobel 1960); fullerenes (1985, Nobel 1996) |
| **Sn, Pb** | prehistory | **Bronze Age** = Cu + Sn alloy; Roman plumbing (*plumbum* → "plumber", symbol Pb) and lead cosmetics/wine sweeteners (chronic poisoning) |
| **Si** | isolated 1824 (Berzelius, by K reduction of K₂SiF₆) | the second most abundant element took until the 19th century to isolate because SiO₂/silicates are so stable |
| **Ge** | 1886 (Winkler) | Mendeleev had **predicted it as "eka-silicon"** in 1871 (density, oxide formula, chloride b.p.) — a landmark confirmation of the periodic law |

# 3. Atomic and physical properties — data and complete orders

## 3.1 Atomic and ionic radii

A new shell is added at each step, but the increase is very uneven. **C → Si** is a large jump. **Si → Ge** is small because Ge follows the first transition series and the intervening **3d¹⁰** electrons shield the extra nuclear charge poorly (d-block contraction). **Sn → Pb** is also small because Pb follows the lanthanoids and the **4f¹⁴** electrons shield even more poorly (lanthanoid contraction). No normal C⁴⁺, Si⁴⁺, Ge⁴⁺ ions exist in solution — the M⁴⁺ radii are for crystal use only.

| Element | Covalent radius / pm | M⁴⁺ radius / pm | M²⁺ radius / pm | Interpretation |
|:--:|:--:|:--:|:--:|----|
| C | 77 | – | – | very small; no real C⁴⁺ or C²⁺ |
| Si | 118 | 40 | – | large C→Si jump |
| Ge | 122 | 53 | 73 | small Si→Ge step (3d¹⁰ shielding) |
| Sn | 140 | 69 | 118 | – |
| Pb | 146 | 78 | 119 | small Sn→Pb step (4f¹⁴ shielding) |

> **Covalent (atomic) radius** — Increasing order: C < Si < Ge < Sn < Pb
> Decreasing order: Pb > Sn > Ge > Si > C
> Note: the *order* is regular; what is irregular is the *size of each step* — a large C→Si jump, then small Si→Ge and Sn→Pb steps because of d-block and lanthanoid contraction.

> **M⁴⁺ ionic radius** (crystal values; no free aqueous M⁴⁺) — Increasing order: Si⁴⁺ (40) < Ge⁴⁺ (53) < Sn⁴⁺ (69) < Pb⁴⁺ (78 pm)
> Note: even the largest, Pb⁴⁺, is tiny and enormously polarising, so a bare M⁴⁺ salt is never formed — every M(IV) compound is covalent (§4.1).

> **M²⁺ ionic radius** — Increasing order: Ge²⁺ (73) < Sn²⁺ (118) < Pb²⁺ (119 pm)
> Note: Sn²⁺ and Pb²⁺ are large, low-charge ions, so their salts (SnF₂, PbCl₂, Pb(NO₃)₂, PbSO₄) *can* be genuinely ionic — the +2 state is where Group 14 ionic chemistry lives.

> **Ionic potential (z/r)** — for M²⁺: Ge²⁺ > Sn²⁺ ≈ Pb²⁺; for M⁴⁺ all values are huge. Note: high z/r → strong polarisation of anions → covalency and cationic hydrolysis; this is why aqueous Sn⁴⁺/Pb⁴⁺ exist only as hydroxo/oxo species and why even Sn²⁺ solutions are acidic and need excess acid to stop them going cloudy.

> **Shielding efficiency of one electron within a shell** — Increasing order: f < d < p < s
> Decreasing order: s > p > d > f
> Note: an s electron penetrates close to the nucleus and shields well; d and especially f electrons are held out in lobes and shield poorly. Poor d/f shielding raises the effective nuclear charge on the valence electrons and is why Ge and Pb are barely larger than Si and Sn, and why their outer electrons are held unexpectedly tightly.

## 3.2 Ionisation enthalpy

| Element | ΔᵢH₁ | ΔᵢH₂ | ΔᵢH₃ | ΔᵢH₄ | Sum ΔᵢH₁₋₄ |
|:--:|:--:|:--:|:--:|:--:|:--:|
| C | 1086 | 2352 | 4620 | 6220 | 14278 |
| Si | 786 | 1577 | 3228 | 4354 | 9945 |
| Ge | 761 | 1537 | 3300 | 4409 | 10037 |
| Sn | 708 | 1411 | 2942 | 3929 | 8990 |
| Pb | 715 | 1450 | 3081 | 4082 | 9328 |

*Representative kJ mol⁻¹ values.*

> **Individual ionisation enthalpies — the four decreasing orders (read them off the table):**
> - ΔᵢH₁: **C > Si > Ge > Pb > Sn**
> - ΔᵢH₂: **C > Si > Ge > Pb > Sn**
> - ΔᵢH₃: **C > Ge > Si > Pb > Sn**
> - ΔᵢH₄: **C > Ge > Si > Pb > Sn**
> - Sum ΔᵢH₁₋₄: **C ≫ Ge > Si > Pb > Sn**
>
> Increasing order of ΔᵢH₁: Sn < Pb < Ge < Si < C.
> Note: two irregularities break the "decreases down the group" expectation. (i) **Sn → Pb rises** at every ionisation: the 4f¹⁴ and 5d¹⁰ electrons of Pb shield the 6s/6p electrons poorly, so Zₑff on them is high — this is why **Pb > Sn** throughout. (ii) From ΔᵢH₃ onward **Ge overtakes Si**: the third and fourth electrons of Ge come out against the poorly shielding 3d¹⁰ core (which Si does not have), so Ge's later ionisations — and therefore the **sum** — cost more than Si's. The old "Pb before Si in the sum" ranking is wrong: Si (9945) > Pb (9328).

> **Sum of the first four ionisation enthalpies** — Decreasing order: **C ≫ Ge > Si > Pb > Sn**
> Note: For every element the sum is enormous (**≈ 9 000–14 300 kJ mol⁻¹**). Compare that with the lattice enthalpy of a hypothetical ionic "MCl₄" (a small M⁴⁺ plus 4 Cl⁻ would give at most ~5 000–6 000 kJ mol⁻¹) or the hydration enthalpy of M⁴⁺ (~−4 000 to −6 000 kJ mol⁻¹): the four-electron cost is never repaid, so **a free M⁴⁺ ion is never formed and every M(IV) compound is covalent**.

**The IE pattern in one look.** Each successive electron is pulled from a more positive ion, so IE₁ < IE₂ < IE₃ < IE₄ for every element (roughly IE₂ ≈ 2× IE₁, IE₃ ≈ 4× IE₁). There is **no huge jump** between IE₄ and IE₅ of the type seen at the end of a valence shell (Group 1 shows it after IE₁, Group 2 after IE₂) — because after four electrons Group 14 has emptied only its np and ns, not broken into a noble-gas core.

> **Electron gain enthalpy ΔₑgH** (kJ mol⁻¹, more negative = more favourable) — C ≈ −122, Si ≈ **−134**, Ge ≈ −119, Sn ≈ −107, Pb ≈ −35.
> Order (most to least exothermic): **Si > C > Ge > Sn > Pb**. Note: Si releases *more* energy than C on adding an electron because the small 2p sub-shell of carbon is already crowded (electron–electron repulsion), exactly the C-vs-Si anomaly seen in Groups 15–17. Pb's value is small — consistent with its reluctance to reach −4 or +4 and its preference for +2.

> **JEE TRAP:** "ΔᵢH decreases regularly down Group 14" is **wrong** on two counts: (i) Sn → Pb *rises* at every ionisation; (ii) from ΔᵢH₃ onward Ge exceeds Si. "How many Group 14 elements have ΔᵢH₁ higher than Pb?" → **3** (C, Si, Ge).

## 3.3 Electronegativity and metallic character

| Element | Pauling electronegativity | Character |
|:--:|:--:|----|
| C | 2.5 | non-metal |
| Si | 1.8 | non-metal |
| Ge | 1.8 | metalloid |
| Sn | 1.8 | soft metal |
| Pb | 1.9 | soft metal |

> **Electronegativity** — Decreasing order: C (2.5) > Pb (1.9) ≳ Si ≈ Ge ≈ Sn (1.8)
> Increasing order: Si ≈ Ge ≈ Sn < Pb < C.
> Note: falls sharply C → Si, then stays almost flat (a slight rise to Pb). Size increase down the group would lower EN steadily, but the poorly shielding d/f cores hold the heavier atoms' bonding electrons about as tightly, so the two effects cancel. The **C–Si electronegativity gap (0.7)** is what makes Si–H polarised **Siδ⁺–Hδ⁻** (reverse of Cδ⁻–Hδ⁺) — the root of silane reactivity (§17.2).

> **Metallic / electropositive character** — Increasing order: **C < Si < Ge < Sn < Pb**
> Note: shows up in every layer of the chemistry — structure (covalent 3-D network → close-packed metal lattice), appearance (dull → lustrous), mechanical/electrical behaviour (brittle insulator → malleable conductor), and reactions (no cation → genuine M²⁺ salts; acidic oxide CO₂/SiO₂ → amphoteric SnO/SnO₂/PbO → almost basic; no reaction with acid → dissolves in acid). C and Si are non-metals, Ge is a **metalloid** (a true semiconductor: σ rises with T, opposite to a metal), Sn and Pb are metals.

> **Nature of the dioxide MO₂** — acidic strength decreasing: **CO₂ > SiO₂ > GeO₂ > SnO₂ > PbO₂** (CO₂, SiO₂, GeO₂ acidic; SnO₂, PbO₂ amphoteric). Nature of the monoxide MO: CO neutral; GeO acidic (weakly, tending amphoteric); SnO, PbO amphoteric. Note: for a given element the **higher oxide is the more acidic** (CO₂ > CO; PbO₂ > PbO) — the metal is in a higher, more polarising oxidation state.

## 3.4 Physical state, allotropy, melting and boiling points

1. **C, Si, Ge and α-Sn** all take the **diamond-type covalent network** (each atom sp³, four neighbours). Melting it means breaking strong M–M covalent bonds, so the melting points are very high and fall as the bond weakens: C (m.p. ≈ 4373 K — **the highest of any element**, as graphite/diamond) > Si (1693) > Ge (1218). **Pb** and (above 13 °C) **Sn** are close-packed **metals** held only by metallic bonding, so they melt far lower (505–600 K).
2. **Ge and Sn(grey) expand on freezing** (like water, Ga, Bi): the open diamond-type solid is less dense than the liquid, so solid Ge floats on molten Ge.
3. **Allotropy of tin** — three forms:
   - **α-tin (grey)**, diamond-type, non-metallic, stable **below 13.2 °C**;
   - **β-tin (white)**, tetragonal, metallic, the ordinary form, stable 13.2–161 °C;
   - **γ-tin (brittle, rhombic)** above 161 °C.
   The α ⇌ β change is slow but real: in prolonged cold, white tin crumbles to grey powder — **"tin pest" / "tin disease"** (blamed for failed organ pipes and Scott's Antarctic fuel cans). Traces of Bi or Sb suppress it.
4. **Allotropy of carbon** is covered in full in Section 7 (diamond, graphite, fullerenes, amorphous forms) — the richest allotropy of any element.
5. Silicon and germanium have only the one (diamond-type) crystal form under ordinary pressure; **Pb has only the metallic (fcc) form**.

| Element | Density / g cm⁻³ | m.p. / K | b.p. / K |
|:--:|:--:|:--:|:--:|
| C | 3.51 (diamond) | 4373 | – (sublimes) |
| Si | 2.34 | 1693 | 3550 |
| Ge | 5.32 | 1218 | 3123 |
| Sn | 7.26 | 505 | 2896 |
| Pb | 11.34 | 600 | 2024 |

> **Melting point** — Decreasing order: **C > Si > Ge > Pb > Sn**
> Explanation: C, Si and Ge are **covalent three-dimensional networks** — to melt them you must break strong M–M covalent bonds, and that bond strength falls C → Si → Ge as the atoms enlarge and orbital overlap worsens, so the m.p. falls in the same order (about 4373 → 1693 → 1218 K). Sn and Pb are **metals** held only by metallic bonding, so their m.p. collapses to a far lower band (~505–600 K); within that band **Pb > Sn** because lead's metallic (cohesive) bonding is a little stronger than that of white tin. Net order: C > Si > Ge ≫ Pb > Sn.

> **Boiling point** — Decreasing order: Si > Ge > Sn > Pb
> Explanation: Boiling pulls the atoms completely apart into the gas, so b.p. tracks the **atomisation (cohesive) energy**, which decreases **smoothly** down the group as the covalent/metallic bonding weakens — hence the regular Si (3550) > Ge (3123) > Sn (2896) > Pb (2024) K. There is no m.p.-style inversion here because no change of bonding *type* interrupts the trend (carbon is left out — graphite has no ordinary b.p., it sublimes near 4100 K).

> **Density** — Increasing order: Si < C(graphite) < C(diamond) < Ge < Sn < Pb
> Note: Density rises down the group as atomic mass grows faster than volume; graphite is less dense than diamond because its sheets are widely spaced (340 pm).

# 4. Oxidation states, bonding and the inert-pair effect

## 4.1 The +4 state and why its compounds are covalent

The configuration ns²np² gives the group oxidation state **+4**. Carbon and silicon are almost always +4; germanium prefers +4; and yet **every M(IV) compound is covalent** — there is no ionic M⁴⁺ salt anywhere in the group. Three arguments, all energetic:

1. **The ionisation cost is prohibitive.** ΔᵢH₁ + ΔᵢH₂ + ΔᵢH₃ + ΔᵢH₄ is ≈ 9 000–14 300 kJ mol⁻¹ (§3.2). No lattice enthalpy (a small, highly charged M⁴⁺ with four anions would give at best ~5 000–6 000 kJ mol⁻¹) and no hydration enthalpy (~−4 000 to −6 000 kJ mol⁻¹ for M⁴⁺) can repay it. So the four electrons are **shared, not transferred**.
2. **Fajans' rules point the same way.** A putative M⁴⁺ would be small and 4+ charged → enormous polarising power; its partner anions are polarisable → the "ionic" bond is pulled over to covalent. High charge, small cation, large anion — all three Fajans factors favour covalency, most strongly for the +4 state.
3. **The electronegativity gap is too small.** Group 14 EN values (1.8–2.5) sit close to those of common bonding partners (Cl 3.0, O 3.5, H 2.1), so the difference rarely exceeds the ~1.7–2 needed for appreciable ionic character.

**Making the four bonds.** The ground state ns²np² has two unpaired electrons. Promotion ns²np² → ns¹np³ (one s electron into the empty p orbital) gives **four unpaired electrons** and, after sp³ hybridisation, a **regular tetrahedron**. The promotion energy is small compared with the energy released by forming **two additional M–X bonds**, so tetravalency is favourable — for carbon and silicon, overwhelmingly so.

**Aqueous M(IV).** Because M⁴⁺ cannot exist free, "Sn⁴⁺(aq)" and "Pb⁴⁺(aq)" are really **hydroxo / hydrated-oxide species** — [Sn(OH)₆]²⁻ in base, SnO₂·xH₂O (metastannic/α-stannic acid) from strong acid; Si(IV) in water is SiO₂·xH₂O or [SiF₆]²⁻, never [Si(H₂O)₆]⁴⁺.

> **MOT LENS — the isoelectronic C/O linear species.** Several linear molecules and ions built from C, O and N recur through this chapter and share a common MO description:
> - **CO** — isoelectronic with N₂ (14 valence electrons): σ2s² σ*2s² π2p⁴ σ2p², **bond order 3**, with a σ lone pair on carbon and a small lone pair on oxygen. The carbon lone pair, in a weakly antibonding σ orbital, is the electron pair that makes CO a ligand.
> - **CO₂** — linear, carbon **sp**. Two localised σ(C–O), plus a **3-centre 4-electron π system** delocalised over O–C–O (two filled π MOs). Each C–O bond has effective order 2; the observed length (115 pm) lies between C=O (122) and C≡O (113).
> - **C₂²⁻ (acetylide ion)** — isoelectronic with N₂ and CO, [–C≡C–]²⁻, **bond order 3**; the C–C stretch is close to that of N₂.
> - **CO₃²⁻ (carbonate)** — trigonal planar, carbon **sp²**, one delocalised π MO spread over all four atoms; three equivalent C–O bonds of order ≈ 1.33.
> - **CO₄⁴⁻ does not exist** — carbon is too small to hold four O and cannot expand its octet — whereas **SiO₄⁴⁻** is the foundation of silicate chemistry. This is the same size/orbital argument that makes NO₃⁻ planar 3-coordinate while PO₄³⁻ is tetrahedral 4-coordinate.

## 4.2 The +2 state and the inert-pair effect

Down the group the valence **ns² pair takes progressively less part in bonding** and stays behind as a non-bonding "lone pair" on the atom in its lower (+2) oxidation state. This is the **inert-pair effect** — a name for the *observation*, not the *cause*.

**The energetics.** Going from M(II) to M(IV) means unpairing and reorganising the ns² pair and forming **two extra M–X bonds**. It is favourable only if those two bond energies exceed the reorganisation cost. Down the group:

- the **M–X bond enthalpy falls steadily** (larger, more diffuse orbitals; longer, weaker bonds);
- the **ns → np promotion / reorganisation cost stays high** and, for the 6th period, actually *rises* — the **6s orbital is contracted and stabilised by relativistic effects** (inner electrons in a high-Z atom move fast enough for relativistic mass increase to shrink the s orbitals), so the 6s² pair of lead is held especially tightly.

So the "extra two bonds" stop paying for themselves. The crossover is between Ge and Pb.

| M–Cl bond | Mean bond enthalpy / kJ mol⁻¹ (representative) | Consequence |
|:--:|:--:|:--|
| C–Cl | ≈ 327 | +4 is the only state |
| Si–Cl | ≈ 381 | +4 only |
| Ge–Cl | ≈ 340 | +4 dominant; GeCl₂ known but disproportionates on heating (GeCl₂ → Ge + GeCl₄) |
| Sn–Cl | ≈ 315 | **both** SnCl₂ and SnCl₄ stable and common; SnCl₂ is a mild reductant |
| Pb–Cl | ≈ 244 | PbCl₂ is the stable chloride; PbCl₄ is an unstable yellow oil that decomposes to PbCl₂ + Cl₂ near room T |

**Row-by-row.**

- **C** — +4 only. C(II) exists only as CO (stabilised by π back-bonding), the carbenes, and isocyanides — all with special bonding, never a simple C²⁺.
- **Si** — +4 only under ordinary conditions. SiF₂ and SiCl₂ are generated at high temperature and trapped cold; they polymerise on warming.
- **Ge** — +4 strongly preferred; **Ge(II) is a reducing agent** (Ge²⁺ → Ge⁴⁺). GeO and GeX₂ exist but are easily oxidised.
- **Sn** — the balance point. Sn(II) and Sn(IV) are both everyday; **Sn(II) is a moderate reducing agent** (E°(Sn⁴⁺/Sn²⁺) ≈ +0.15 V) — the basis of the whole §20 reaction map.
- **Pb** — **+2 is normal and stable; Pb(IV) is a powerful oxidising agent** (E°(Pb⁴⁺/Pb²⁺) ≈ +1.7 V; PbO₂, Pb₃O₄, PbCl₄, Pb(OAc)₄ all oxidise). PbBr₄ and PbI₄ do not exist at all (§4.3).

> **Stability of the +2 state** — Increasing order: **C < Si < Ge < Sn < Pb**
> **Stability of the +4 state** — Increasing order: **Pb < Sn < Ge < Si ≈ C**
> Note: the two orders are exact mirror images. The crossover: GeX₄ ≫ GeX₂ but PbX₂ ≫ PbX₄.

> **"Inert pair" is partly a misnomer.** The 6s² pair of Pb is *not chemically inert* — it is stereochemically active (it makes gas-phase PbCl₂ bent, SnCl₂ bent) and it is given up readily as a reductant when M is Ge or Sn. What is "inert" is only its reluctance to be *promoted and bonded* in the heaviest members. Prefer the bond-energy / promotion-energy argument in an answer.

> **REDOX ANCHOR (predicts most reactions in Sections 20–21):** **Ge(II) reducing · Sn(II) reducing · Pb(IV) / PbO₂ oxidising** · Tl(III) oxidising (the Group 13 analogue). The two half-reactions **Sn²⁺ → Sn⁴⁺** and **Pb⁴⁺ → Pb²⁺** appear again and again — memorise them and most of the tin and lead chemistry follows.

> **MOT LENS — SnCl₂ is bent.** Gas-phase SnCl₂ is V-shaped (∠Cl–Sn–Cl ≈ 95°): Sn(II) keeps a stereochemically active lone pair in an sp²-type orbital, so the two Sn–Cl bonds are pushed together (VSEPR: AX₂E). SnCl₄, by contrast, is regular tetrahedral (AX₄). The lone pair is also why Sn(II) is a good reductant — it is readily given up as Sn goes to +4.

## 4.3 Why PbI₄ does not exist — two equivalent arguments

**Redox argument.** Pb(IV) is a strong oxidant (E° ≈ +1.7 V); I⁻ is an easily oxidised reductant (E°(I₂/I⁻) = +0.54 V). Put them together and an internal electron transfer is spontaneous: **4 e⁻ move from I⁻ to Pb(IV)**, giving

PbI₄ ⟶ PbI₂ + I₂

so the compound relaxes to Pb(II) the instant it might form.

**Thermochemical argument.** Forming PbI₄ from PbI₂ + I₂ would need: (unpair + promote the Pb 6s² pair) + (Pb–I bond-making energy for two extra bonds) − (I–I bond broken). The **Pb–I bond is weak** (large, diffuse orbitals; poor size match) and the **6s promotion cost is high** (relativistic stabilisation), so the two extra Pb–I bonds cannot pay for the promotion — ΔH for PbI₂ + I₂ → PbI₄ comes out **positive**. Pb stays +2.

**The halide series for Pb(IV):**

| Halide | Exists? | Why |
|:--:|:--:|:--|
| PbF₄ | **yes** | Pb–F bonds are strong enough (small F, large lattice/bond energy) to repay promotion; F⁻ is not oxidisable |
| PbCl₄ | **marginally** | yellow oil, needs cold conc. HCl saturated with Cl₂; decomposes to PbCl₂ + Cl₂ near room T; stabilised only as [PbCl₆]²⁻ |
| PbBr₄ | **no** | Pb–Br too weak; Br⁻ oxidised by Pb(IV) |
| PbI₄ | **no** | Pb–I weakest; I⁻ most easily oxidised → PbI₂ + I₂ |

> **JEE TRAP:** "which Group 14 tetrahalide does not exist and why" → **PbI₄**, and the self-consistent products are **PbI₂ + I₂**. Extend the logic: it is the *combination* of a weak M–X bond and an oxidisable X⁻ with a strongly oxidising M(IV) — the same reasoning rules out TlI₃ as true Tl(III) (it is Tl⁺I₃⁻).

# 5. Anomalous behaviour of carbon; the C → Si → rest gradation

## 5.1 How carbon differs from the rest of its group

Carbon is a non-metal that forms strong pπ–pπ multiple bonds and catenates without limit. Silicon and carbon then differ from Ge, Sn, Pb (which follow a completed d¹⁰ shell), and Ge–Sn–Pb form a graded metallic series.

| Feature | Carbon | Si, Ge, Sn, Pb |
|:--|:--|:--|
| Classification | non-metal, covalent network | Si non-metal; Ge metalloid; Sn, Pb metals |
| Maximum covalence | 4 (octet cannot expand) | 4 and **6** (d orbitals available) |
| Multiple bonding | strong pπ–pπ (C=C, C≡C, C=O, C≡N) | weak/absent pπ–pπ; **pπ–dπ** instead |
| Catenation | extensive — chains, rings, cages | limited; **negligible for Pb** |
| Higher oxide | CO₂ — discrete linear gas | SiO₂ — 3-D single-bonded network solid |
| Tetrahalide + water | CCl₄ resists | SiCl₄ … PbCl₄ hydrolyse readily |
| Hydride reactivity | alkanes almost inert | silanes pyrophoric, hydrolysed by trace base |
| Aqueous M⁴⁺ | none | none (Si(IV) as SiO₂·xH₂O, Sn/Pb as hydroxo/aquo complexes) |

## 5.2 Catenation — read it from the bond enthalpies

**Catenation** = the self-linking of like atoms into chains, rings and cages. Its extent tracks two things: how strong the M–M bond is, and how strong it is *relative to* the M–O and M–H bonds that compete for the same atom.

| Bond | Enthalpy / kJ mol⁻¹ (representative) | Bond | Enthalpy / kJ mol⁻¹ |
|:--|:--:|:--|:--:|
| **C–C** | ≈ **348** | **Si–Si** | ≈ 297 |
| C–H | ≈ 413 | Si–H | ≈ 318 |
| C–O | ≈ 358 | **Si–O** | ≈ **452** |
| C–Cl | ≈ 327 | Si–Cl | ≈ 381 |

| M | M–M enthalpy | How far catenation runs |
|:--:|:--:|:--|
| C | ≈ 348 | **effectively unlimited** — every hydrocarbon; the basis of organic chemistry |
| Si | ≈ 297 | silanes to roughly Si₈; catenated halides run somewhat further (pπ–dπ help) |
| Ge | ≈ 260 | germanes to about Ge₅ |
| Sn | ≈ 240 | barely — only Sn₂H₆ beyond the monomer |
| Pb | ≈ 155 | none |

**Why carbon and not silicon:**

1. **Absolute strength.** C–C (348) is strong; it weakens fast down the group as the atoms enlarge and the shared cores start to repel.
2. **Relative strength — the decisive point.** For carbon, **C–C (348) ≈ C–O (358) ≈ C–H (413)**, so a C atom has *no thermodynamic incentive* to swap a C–C bond for a C–O bond — long carbon skeletons survive in the presence of oxygen. For silicon, **Si–O (452) ≫ Si–Si (297)**: an Si–Si bond in contact with any oxygen source is replaced by the much stronger Si–O. That is why long silanes do not exist, why silicon's stable form is the **SiO₂ network and the silicates**, and why silicones are **–Si–O–Si–** chains, not –Si–Si– chains.
3. **Kinetic vulnerability.** The larger Si atom (and its accessible d orbitals) leaves the Si–Si bond open to nucleophilic attack; silanes are hydrolysed by a trace of base, alkanes are not (§17.2).

> **Catenation tendency** — Decreasing order: **C ≫ Si > Ge ≈ Sn ≫ Pb** (Pb: essentially none).
> Note: it is **not** simply "carbon is small". State it as *strong C–C bond, comparable in strength to C–O and C–H, that weakens down the group while M–O stays strong*.

## 5.3 Multiple bonding — why carbon has π and silicon does not

Carbon forms **C=C, C≡C, C=O, C=S, C≡N** as a matter of course; the whole of unsaturated organic chemistry depends on it. Silicon and the heavier atoms form true pπ–pπ multiple bonds **only as fragile, kinetically-protected laboratory curiosities** (the disilene Mes₂Si=SiMes₂, isolable only with huge shielding groups). Why:

- A **2p orbital** is compact and node-free in its radial part; two of them on adjacent atoms give a large **π overlap integral**, so a strong second (and third) bond forms.
- A **3p orbital** is larger and radially node-bearing; sideways overlap of two 3p orbitals — or of a 3p with a 2p — is small and partly cancelling. The π "bond" that results is too weak to compete with two σ bonds to different partners.

So the heavier atoms do one of two things instead: (i) form **more σ single bonds** by polymerising (SiO₂, silicates, silicones), or (ii) use **pπ–dπ** bonding — a filled p (or lone-pair) orbital on N/O/F donates *into* an empty d orbital on Si/Ge (§19).

| Carbon (pπ–pπ) | Silicon (σ networks / pπ–dπ) |
|:--|:--|
| CO₂ — discrete linear O=C=O molecule | SiO₂ — 3-D network of Si–O single bonds (§13) |
| CO₃²⁻ — discrete trigonal-planar ion | "SiO₃²⁻" exists only as **infinite chains and rings** in the pyroxenes and cyclosilicates (§14) |
| (CH₃)₃N pyramidal, strongly basic | N(SiH₃)₃ **planar**, very weak base — N lone pair donated into Si 3d (§19.2) |
| ketone R₂C=O stable | "R₂Si=O" cannot form — the silanols condense to **–Si–O–Si–** silicone (§16) |
| C=S in CS₂, thioketones | Si=S unknown; SiS₂ is a chain of edge-sharing SiS₄ tetrahedra |

## 5.4 Diagonal relationship

Carbon's diagonal partner is not in its own group; the classic Group 13/14 diagonal link is **B ↔ Si**.

**Why the diagonal link exists.** Moving one place *down* a group increases size and lowers electronegativity; moving one place *right* along the next period increases nuclear charge and raises electronegativity. Down-and-right, these two changes roughly cancel, so B and Si end up with a similar **atomic size, electronegativity and — most importantly — charge/radius ratio (ionic potential)**. Similar polarising power means similar bonding, so the two elements behave alike:

- Both are **non-metals** that form no simple cation (no B³⁺, no Si⁴⁺); their chemistry is entirely covalent.
- **Acidic, polymeric, network oxides** — B₂O₃ and SiO₂ are both glass-formers.
- Their oxoacids are **weak and condense** on heating: H₃BO₃ → polyborates; Si(OH)₄ → polysilicic acids and silicates.
- **Volatile covalent halides that are readily hydrolysed:** BCl₃ + 3H₂O → H₃BO₃ + 3HCl; SiCl₄ + 4H₂O → Si(OH)₄ + 4HCl. (Carbon's CCl₄ is *not* hydrolysed — the contrast that shows C is the odd one out.)
- **Volatile, flammable, spontaneously-hydrolysing hydrides** — boranes and silanes — unlike the inert alkanes.
- Hard, high-melting **binary compounds with strong 3-D covalent lattices:** B₄C, BN, SiC, Si₃N₄.

Within Group 14, carbon stands apart as the first-row anomaly and Ge–Sn–Pb form the graded metallic series; the useful diagonal comparison is with **boron**, not with any Group 14 element.

# 6. Elemental chemical reactivity — conditions included

At room temperature all five elements are **fairly unreactive** — strong covalent networks (C, Si, Ge) or protective oxide films (Sn, Pb) get in the way. On heating, the free-element reactivity **rises down the group**, and the product increasingly reflects the **+2** state rather than +4. Within the allotropes, **diamond is nearly inert; graphite and amorphous carbon are far more reactive** (open sheets, reactive edge carbons).

> **General reactivity of the free element** — Increasing order: C(diamond) < C(graphite) ≈ Si < Ge < Sn < Pb.
> Note: this is the *element's* reactivity; the *accessibility of the +4 product* runs the opposite way (easy for C–Sn, impossible for Pb beyond PbO/PbF₄).

## 6.1 Air, oxygen and nitrogen

Diamond is unattacked by air; graphite and amorphous carbon burn above about 700 °C. Si and Ge burn only on strong heating. Sn burns with a bright white flame to SnO₂; Pb forms a surface film of PbO, then (on prolonged heating in air) the mixed oxide Pb₃O₄.

**Carbon in oxygen:**

C(s) + O₂(g) [excess air, Δ] ⟶ CO₂(g)   Δ_cH ≈ −393 kJ mol⁻¹

2C(s) + O₂(g) [limited air, Δ] ⟶ 2CO(g)   Δ_cH ≈ −111 kJ mol⁻¹ per CO

- Complete combustion → CO₂; a restricted air supply → the poisonous, colourless **CO** — the mechanism behind every faulty-heater and blocked-flue poisoning (§9.2).
- **Hot conc. HNO₃** oxidises graphite (attack at the sheet edges) all the way to **mellitic acid, C₆(COOH)₆**; a strong KClO₃/HNO₃ mixture gives **graphite oxide** (§7.5).

**Carbon with other non-metals:**

C(s) + 2S(g) [≈ 900 °C] ⟶ CS₂(g)   (industrial route now uses CH₄ + S, §11)

C(s) + 2H₂(g) [≈ 1200 K, Ni catalyst] ⟶ CH₄(g)   (equilibrium; the basis of catalytic methanation)

3C(s) + CaO(s) [≈ 2000–2200 °C, electric furnace] ⟶ CaC₂(s) + CO(g)

C(s) + Si(s) [≈ 2500 °C] ⟶ SiC(s)   (carborundum, §8.4)

Many metals and metal oxides give **carbides** on heating with carbon (§8); this is also the reducing action exploited throughout metallurgy (C or CO reduces oxides of metals below Al in the reactivity series).

**Silicon in oxygen and nitrogen:**

Si(s) + O₂(g) [≈ 1173 K] ⟶ SiO₂(s)   (a thin, self-protecting oxide layer forms first)

3Si(s) + 2N₂(g) [≈ 1673 K] ⟶ Si₃N₄(s)

Silicon nitride, Si₃N₄, is a hard, thermal-shock-resistant ceramic (turbine blades, cutting tools, bearings). Silicon does **not** react with hydrogen directly.

**Germanium** burns to GeO₂ on strong heating; it does not fix nitrogen.

**Tin and lead in air:**

Sn(s) + O₂(g) [strong heating, bright white flame] ⟶ SnO₂(s)

2Pb(s) + O₂(g) [warm air] ⟶ 2PbO(s)

6PbO(s) + O₂(g) [≈ 350–450 °C, air] ⟶ 2Pb₃O₄(s)

- **Lead stops at Pb(II)/mixed oxide** — no PbO₂ forms directly from the metal, because Pb(IV) is disfavoured (§4.2).
- A clean lead surface tarnishes at once in moist air (a grey PbO/basic-carbonate film); this coherent film is what makes lead corrosion-resistant.

> **Reactivity toward O₂** — Increasing order (free element): C(diamond) < Si < Ge < C(graphite/amorphous) < Sn < Pb
> Note: the dioxide MO₂ is the product for C, Si, Ge, Sn; **lead gives only PbO / Pb₃O₄** because Pb(IV) is disfavoured.

## 6.2 Water and steam

| Element | Cold water | Steam / hot water |
|:--|:--|:--|
| **C** | no reaction | red-hot coke + steam → **water gas** CO + H₂ (§9.1) |
| **Si** | no reaction (a self-protecting SiO₂ skin) | slowly attacked at red heat: Si + 2H₂O(g) → SiO₂ + 2H₂ |
| **Ge** | no reaction | no reaction |
| **Sn** | no reaction | **attacked by steam** |
| **Pb** | no reaction (protective film) | no reaction |

**Tin with steam:**

Sn(s) + 2H₂O(g) [steam, Δ] ⟶ SnO₂(s) + 2H₂(g)

**Lead and water — plumbosolvency.** Pb is thermodynamically able to reduce H⁺, but a coherent surface film (PbO, then basic carbonate 2PbCO₃·Pb(OH)₂, or PbSO₄ in hard/sulphate-bearing water) normally blocks the reaction. **Soft, well-aerated, slightly acidic water** dissolves that film and slowly takes lead into solution as Pb(HCO₃)₂ / Pb²⁺ — the reason old lead service pipes are a public-health problem and lead plumbing is banned. Hard water is *protective* because CaSO₄/CaCO₃ help seal the pipe with insoluble lead salts.

> **Ordinary conditions:** C, Si, Ge, Pb inert to water; only **Sn + steam → SnO₂ + H₂**. Carbon + steam (red-hot) is the industrial water-gas reaction, not a "corrosion".

## 6.3 Acids

| Element | Dilute non-oxidising acid | Hot concentrated / oxidising acid |
|:--|:--|:--|
| C | no reaction | hot conc. HNO₃ oxidises graphite → mellitic acid C₆(COOH)₆ |
| Si | no reaction (even conc. HCl/HNO₃) | attacked by **HF** (and HF/HNO₃): SiO₂/Si + HF → SiF₄ / H₂SiF₆ |
| Ge | no reaction | dissolves in hot conc. H₂SO₄ and in HNO₃ |
| Sn | dil. HCl slow; dil. HNO₃ dissolves it | hot conc. HNO₃ → metastannic acid; hot conc. H₂SO₄ → Sn(SO₄)₂ |
| Pb | dil. HCl slow (PbCl₂ coat); dil. HNO₃ readily → Pb(NO₃)₂ | **passivated by H₂SO₄** (PbSO₄ film); does not dissolve in conc. HCl |

**Carbon with hot conc. oxidising acid:**

C(graphite) + 4HNO₃(conc.) [hot] ⟶ CO₂ + 4NO₂ + 2H₂O   (amorphous carbon; graphite edges → mellitic acid)

**Silicon — only HF attacks it:**

Si(s) + 4HF(aq) ⟶ SiF₄(g) + 2H₂(g)

Si(s) + 6HF(aq) [with HNO₃ present] ⟶ H₂[SiF₆](aq) + ...   (HNO₃ oxidises, HF complexes the Si)

**Germanium:**

Ge(s) + 4HNO₃(conc.) [hot] ⟶ GeO₂·xH₂O + 4NO₂ + 2H₂O

**Tin:**

Sn(s) + 2HCl(conc.) [hot] ⟶ SnCl₂ + H₂   (Sn → +2 with a non-oxidising acid)

4Sn(s) + 10HNO₃(dil., cold) ⟶ 4Sn(NO₃)₂ + NH₄NO₃ + 3H₂O   (dilute, cold → **ionic Sn(II)** nitrate, no gas)

Sn(s) + 4HNO₃(conc.) [hot] ⟶ SnO₂·xH₂O↓ (metastannic acid) + 4NO₂ + H₂O   (hot conc. → **covalent Sn(IV)** hydrated oxide)

Sn(s) + 2H₂SO₄(conc.) [hot] ⟶ SnSO₄ + SO₂ + 2H₂O   (further oxidised to Sn(SO₄)₂ in excess hot acid)

**Lead:**

3Pb(s) + 8HNO₃(dil.) ⟶ 3Pb(NO₃)₂ + 2NO + 4H₂O

Pb(s) + 2HCl(dil.) ⟶ PbCl₂↓ + H₂   (very slow — an insoluble PbCl₂ coat stops it)

Pb + H₂SO₄ → **no sustained reaction** — an insoluble PbSO₄ skin passivates the metal (why lead-lined vessels and lead-acid battery plates survive sulphuric acid).

> **JEE TRAP:** three passivation cases to keep straight — **Al** by cold conc. HNO₃ (oxide film); **Pb** by any H₂SO₄ (PbSO₄ film); **Pb** by dil. HCl (PbCl₂ coat). And the **Sn(II) vs Sn(IV)** switch: cold dilute HNO₃ → ionic Sn(NO₃)₂; hot concentrated HNO₃ → covalent metastannic acid.

## 6.4 Alkalis

- **C** — no reaction with alkali (fused NaOH slowly attacks it in air, but this is oxidation by O₂, not an acid–base reaction).
- **Si** — attacked by **hot aqueous or fused NaOH**, giving off H₂ (the alkali strips the protective SiO₂ film, exposing fresh Si):

Si(s) + 2NaOH(aq) + H₂O(l) [hot] ⟶ Na₂SiO₃(aq) + 2H₂(g)

- **Ge** — attacked by fused alkali / alkaline oxidisers → germanates.
- **Sn, Pb** — dissolve **slowly in cold, rapidly in hot** alkali; both metals are **amphoteric** (they also dissolve in acid, §6.3):

Sn(s) + 2NaOH(aq) + 2H₂O(l) [hot] ⟶ Na₂[Sn(OH)₄](aq) + H₂(g)   (stannite, Sn II)

Pb(s) + 2NaOH(aq) + 2H₂O(l) [hot] ⟶ Na₂[Pb(OH)₄](aq) + H₂(g)   (plumbite, Pb II)

> **Amphoteric elements of Group 14:** **Sn and Pb** dissolve in *both* acid and base. Si dissolves in base (and HF) but not ordinary acid — it is acidic-leaning. C and Ge(metal) are essentially unreactive to both.

## 6.5 Halogens

| Element | With F₂ | With Cl₂ / Br₂ | With I₂ | Product |
|:--|:--|:--|:--|:--|
| C(graphite) | 500 °C → graphite fluoride (CF)ₙ / intercalate | — | — | not simple CX₄ |
| Si | room T → SiF₄ | on warming → SiX₄ | on warming → SiI₄ | **SiX₄** (volatile, tetrahedral) |
| Ge | → GeF₄ | → GeX₄ | → GeI₄ (orange) | **GeX₄** |
| Sn | on warming → SnF₄ | cold → SnX₄ | on warming → SnI₄ (orange) | **SnX₄** |
| Pb | cold → **PbF₂** | hot → **PbCl₂** | → **PbI₂** | **PbX₂ only** — never PbX₄ directly |

Si(s) + 2Cl₂(g) [Δ] ⟶ SiCl₄(l)

Sn(s) + 2Cl₂(g) [dry, molten Sn] ⟶ SnCl₄(l)

Pb(s) + Cl₂(g) [hot] ⟶ PbCl₂(s)

> **Reactivity toward halogens** rises down the group, but the accessible **product** falls: MX₄ for C(as a fluoride)–Si–Ge–Sn, only **MX₂ for lead** — a direct read-out of the inert-pair effect. SnI₄ and GeI₄ are **orange** (halide-to-metal charge transfer), an exception to "main-group halides are colourless" (§18.1).

## 6.6 Hydrogen, carbon and other non-metals

**Hydrogen.** No Group 14 element gives a stable hydride by direct combination with H₂ — the hydrides are all made indirectly (§17). Carbon and hydrogen reach a slow equilibrium over Ni near 1200 K (C + 2H₂ ⇌ CH₄), used industrially in methanation.

**Carbon and silicon:**

Si(s) + C(s) [≈ 2500 °C] ⟶ SiC(s)   (carborundum)

SiO₂(s) + 3C(s) [2000–2500 °C, excess coke] ⟶ SiC(s) + 2CO(g)   (the actual industrial route, §8.4)

**Carbon with metals and metal oxides** → carbides (§8) and, in metallurgy, the reduced metal + CO/CO₂.

**Calcium carbide:**

CaO(s) + 3C(s) [≈ 2000–2200 °C, electric furnace; strongly endothermic] ⟶ CaC₂(s) + CO(g)

**Carbon with sulphur:**

C(s) + 2S(g) [≈ 900 °C] ⟶ CS₂(g)

**Silicon with metals** → **silicides** (Mg₂Si, Ca₂Si, FeSi, CaSi₂ …), some salt-like (Mg₂Si hydrolyses to silanes, §17.1), some interstitial and refractory.

# 7. Allotropes of carbon

Carbon has the **richest allotropy of any element** because it can bond in three different hybridisation states: **sp³** (diamond — 3-D network), **sp²** (graphite — sheets; fullerenes and nanotubes — curved sheets), and **sp** (carbyne, –C≡C–C≡C–, only marginally characterised). Add the disordered forms (coke, charcoal, carbon black) and carbon has more forms than the rest of the group put together.

| Allotrope | Hybridisation | Dimensionality | Discovered |
|:--|:--:|:--|:--|
| **diamond** | sp³ | 3-D network | antiquity |
| **graphite** (α ABAB, β ABCABC) | sp² | 2-D sheets | antiquity |
| **lonsdaleite** (hexagonal diamond) | sp³ | 3-D | meteorites, 1967 |
| **fullerenes** (C₆₀, C₇₀ …) | sp² (pyramidalised) | 0-D molecules | 1985 (Kroto, Smalley, Curl — Nobel 1996) |
| **carbon nanotubes** | sp² | 1-D | 1991 |
| **graphene** (one graphite sheet) | sp² | 2-D | 2004 (Nobel 2010) |

## 7.1 Diamond

**Structure.** Each carbon is **sp³**, σ-bonded to **four** others at 109.5°; **C–C = 154 pm** — an ordinary single bond, but repeated rigidly in every direction. The lattice is **cubic**: an fcc array of carbon with a second carbon in **half the tetrahedral holes** (the same arrangement as ZnS sphalerite with one kind of atom), giving **8 atoms per unit cell**. Six-membered rings run through the crystal in the chair conformation. The whole crystal is one giant covalent molecule. Lonsdaleite is the rarer hexagonal (wurtzite-type) packing of the same tetrahedra.

**Properties — and their causes:**

| Property | Value | Cause |
|:--|:--|:--|
| hardness | Mohs **10** (hardest natural solid) | strong C–C bonds in *every* direction; no easy slip plane |
| melting point | ≈ 4400 K (sublimes/graphitises) | melting = breaking the covalent network, not intermolecular forces |
| electrical | **insulator**, ρ 10¹⁴–10¹⁶ Ω cm; band gap **≈ 5.5 eV** | all four valence electrons are in localised σ bonds — no mobile carriers |
| thermal conductivity | **higher than copper** | heat carried by lattice vibrations (phonons) through the very stiff, light lattice |
| density | 3.51 g cm⁻³ | efficient tetrahedral packing |
| optical | transparent, refractive index **2.42**, high dispersion | wide band gap (no visible absorption); the "fire" of cut gems |
| chemical | extremely inert | no reactive site; burns only above ~900 °C in O₂ to pure CO₂ |

- **Impurity colours:** most natural stones carry trace **N** (yellowish "Cape" series); **B** gives semiconducting **blue** diamonds; plastic deformation gives pink/brown; radiation damage gives green.

**Making diamond from graphite** (ΔG > 0 at 1 atm, so pressure is needed):

C(graphite) [≈ 1800 K, ≈ 6 GPa (60 000 atm), molten-metal solvent catalyst; HPHT] ⟶ C(diamond)

Modern **chemical vapour deposition (CVD)** grows diamond films from a CH₄/H₂ plasma at *low* pressure — the atomic H etches away any sp² carbon as it forms, leaving only sp³.

> **JEE TRAP:** diamond is covalent yet melts higher than most ionic solids — because melting means breaking the 3-D **C–C covalent** network. Contrast: it is an **electrical insulator** but the **best thermal conductor** known — electrons are locked in bonds (no electrical conduction) while the rigid light lattice carries heat superbly.

## 7.2 Graphite

**Structure.** Infinite flat **hexagonal sheets**; each carbon **sp²**, forming three σ bonds to its neighbours at 120°. The **fourth (2p_z) electron** on every carbon enters a **π system delocalised over the whole sheet** — the sheet is effectively one enormous fused-benzene aromatic. **In-plane C–C = 141.5 pm** (between a single 154 and a double 134 — bond order ≈ 1⅓); **interlayer spacing = 340 pm**, more than twice the covalent radius, so the sheets are held only by **van der Waals / weak π–π forces**. Stacking: **α-graphite ABAB…** (hexagonal, the common form), **β-graphite ABCABC…** (rhombohedral); grinding converts α → β, heating to ~1300 K restores β → α.

**Properties — and their causes:**

| Property | Behaviour | Cause |
|:--|:--|:--|
| mechanical | soft, greasy, marks paper (Mohs 1–2) | sheets slip over one another on the weak interlayer forces — a **dry lubricant** even in vacuum/hot machinery where oil fails |
| electrical | **conducts** (a semimetal, zero band gap) — in-plane conductivity ≈ 10³× the perpendicular value | the delocalised π electrons are mobile *within* a sheet, blocked *between* sheets |
| thermal | good conductor in-plane | same π electrons + phonons |
| density | 2.22 g cm⁻³ (< diamond) | the widely spaced sheets waste volume |
| chemistry | **more reactive than diamond** — burns from ~700 °C; oxidised by hot HNO₃; intercalates | reactive edge/π carbons; open galleries between sheets |
| thermodynamics | **the stable allotrope at 1 atm**: Δ_fH°(graphite) ≡ 0; Δ_fH°(diamond) = +1.90, Δ_fH°(C₆₀) = +38.1 kJ mol⁻¹ | diamond survives only kinetically — a huge activation barrier to rebonding |

> **Electrical conductivity:** graphite ≫ diamond. **Thermal conductivity:** diamond > graphite. **Thermodynamic stability at 1 atm:** graphite > diamond > C₆₀.

> **Key Point — uses of graphite:** dry lubricant for hot/vacuum machinery; **electrodes** (steel arc furnaces, Al electrolysis, batteries); pencil "lead" (graphite + clay); inert **crucibles**; **neutron moderator** in reactors (slows neutrons without absorbing them); as **carbon fibre** in composites (aircraft, sports goods).

## 7.3 Fullerenes

**Preparation.** Strike an **electric arc between graphite electrodes in ~100 torr of He**; the vaporised carbon condenses to a soot containing a few % fullerenes. Extract the soot with toluene → a **wine-red solution**; separate by chromatography → **C₆₀** (mustard/magenta crystals, the major product) and **C₇₀** (red-brown), with smaller amounts of C₇₆, C₈₄ …. Only **even** vertex counts occur; the smallest possible is C₂₀ (all-pentagon dodecahedron), the practical range runs to ~C₃₅₀.

**C₆₀ — buckminsterfullerene ("bucky ball"):**

1. A **truncated icosahedron**: **20 hexagons + 12 pentagons**, **60 vertices** (one C each), **90 edges**. Same shape as a football.
2. Every carbon is **sp²** and three-coordinate, but the cage curvature forces a slight **pyramidalisation** (≈ 11.6° off planar), so the "aromatic" π system is strained and the double bonds are somewhat reactive.
3. **Two distinct C–C bonds:** the **[6,6] bond** shared by two hexagons is short (**≈ 138 pm**, more double-bond) and the **[6,5] bond** shared by a hexagon and a pentagon is longer (**≈ 145 pm**, more single-bond). The double bonds lie only on [6,6] edges — none inside a pentagon (that would be an unstable "double bond in a five-ring").
4. **Isolated-pentagon rule:** every pentagon is surrounded entirely by hexagons; two fused pentagons are strongly destabilising. C₆₀ is the smallest fullerene that satisfies this.
5. Fullerenes are **discrete molecules** — soluble in benzene, toluene, CS₂ (unlike the diamond and graphite lattices). They are the **only molecular allotrope of carbon** and the only one with **no dangling bonds** at a surface.

**Chemistry of C₆₀:**

- **A good electron acceptor** — it takes up to **six electrons reversibly** (C₆₀⁻ … C₆₀⁶⁻) at readily accessible potentials.
- **Fulleride superconductors:** K₃C₆₀ (each C₆₀ gets 3 e⁻ into a half-filled band) is superconducting below **18 K**; Rb₃C₆₀ below 28 K; Cs₃C₆₀ (under pressure) up to 38 K.
- **Addition across the reactive [6,6] double bonds** — hydrogenation (C₆₀H₃₆), halogenation (C₆₀F₄₈), OsO₄ (cis-diol), Diels–Alder, [2+2] with benzyne; forms **η²** transition-metal complexes, e.g. [(Ph₃P)₂Pt(η²-C₆₀)].
- **Endohedral fullerenes** M@C₆₀ trap a metal atom or small molecule *inside* the cage.
- Structurally related: **carbon nanotubes** (a rolled graphene sheet, metallic or semiconducting depending on the roll angle) and **graphene** (a single isolated graphite sheet).

> **Stability order (Δ_fH°, 1 atm):** graphite (0) > diamond (+1.90) > C₆₀ (+38.1 kJ mol⁻¹). Per-carbon strain energy in C₆₀ ≈ 0.4 eV.

> **DERIVED TOOL — fullerene topology.** For any closed fullerene Cₙ with every C three-coordinate:
> - pentagons P = **12** (always)
> - hexagons H = **n/2 − 10** → C₆₀: 20; C₇₀: 25; C₈₄: 32
> - C–C edges E = **3n/2** → C₆₀: **90**
> - faces F = **n/2 + 2** → C₆₀: 32 (Euler check: 60 − 90 + 32 = 2 ✓)

## 7.4 Amorphous / impure carbon

| Form | Origin | Use |
|:--|:--|:--|
| **Coke** | high-T carbonisation of coal without air | metallurgical **reducing agent**, fuel |
| **Charcoal** | strong heating of wood without air | fuel; feedstock for activated carbon |
| **Activated charcoal** | steam-activated charcoal, huge surface area | **adsorbs poisonous gases and odours**; decolourising; gas masks; water filters; air-conditioning odour control |
| **Carbon black / lamp black** | incomplete combustion of hydrocarbons | **tyre filler**, black pigment (inks, paints) |
| **Gas carbon** | deposited in coal-gas retorts | electrodes, arc-lamp rods |

> **Key Point:** Carbon black, coke and charcoal are all **impure microcrystalline forms of graphite (or fullerene)** — not separate allotropes.

## 7.5 Graphite intercalation, oxide and fluoride

Because graphite sheets are far apart and weakly held, atoms, ions and molecules can slip between them.

- **Donor (reducing) intercalation:** heating graphite with an alkali-metal vapour (K, Rb, Cs) forms coloured, non-stoichiometric compounds such as C₈K, C₂₄K and so on. Each metal atom transfers an electron to the sheets, **adding charge carriers** to the delocalised π system, so the electrical resistance **falls below** that of pure graphite.
- **Acceptor (oxidising) intercalation:** halogens and Lewis-acidic halides (FeCl₃, AlCl₃) remove π-electron density and create mobile **positive holes** — again the in-plane conductivity can rise.
- **Graphite oxide:** vigorous oxidation (a hot oxidising acid mixture, or permanganate in sulphuric acid) attaches –OH and –O– groups to the sheets. Carbon is dragged toward sp³, the π delocalisation is broken, the layers pucker and spread apart, and the material becomes a pale, **electrically insulating** solid.
- **Graphite fluoride, (CF)ₙ:** direct fluorination at high temperature gives buckled, sp³-type carbon layers. It is **non-conducting**, extremely unreactive and has a very low coefficient of friction (a solid lubricant).

> **JEE TRAP:** Intercalation that keeps flat sp² sheets can conduct **better** than graphite; covalent oxidation/fluorination (which pulls carbon toward tetrahedral σ bonding) **destroys** the mobile π system and the conductivity.

# 8. Carbides

A **carbide** is a binary compound of carbon with an element of **equal or lower electronegativity** — so the metals, boron and silicon. Compounds of carbon with N, P, O, S and the halogens are *not* called carbides. Carbides are made by heating the element or its oxide with carbon (or a hydrocarbon) at ≈ 2000 °C. Three structural classes, told apart by **what happens on hydrolysis**:

| Class | Bonding | Example | Water / dilute acid |
|:--|:--|:--|:--|
| **salt-like (ionic)** | C anions + s-/p-block cations | CaC₂, Al₄C₃ | **hydrolyses** → a hydrocarbon |
| **interstitial (metallic)** | C atoms in metal-lattice holes | TiC, WC, Fe₃C | **inert** (no hydrolysis) |
| **covalent (network)** | C in a giant covalent lattice | SiC, B₄C | **inert** (attacked only by harsh reagents) |

## 8.1 Salt-like carbides — the hydrolysis fingerprint

The carbon in a salt-like carbide is present as one of three discrete anions; the **gas released on hydrolysis identifies which**:

| Anion | Name | Isoelectronic with | Carbides | Hydrolysis gas |
|:--|:--|:--|:--|:--|
| **C⁴⁻** | methanide (a lone C) | — | **Be₂C, Al₄C₃** | **CH₄** |
| **C₂²⁻** | acetylide / dicarbide [–C≡C–]²⁻ | N₂, CO, CN⁻ (b.o. 3) | CaC₂, SrC₂, BaC₂; Na₂C₂, K₂C₂; Cu₂C₂, Ag₂C₂ (explosive); LnC₂ | **HC≡CH** (ethyne) |
| **C₃⁴⁻** | (a bent [C=C=C]⁴⁻ unit) | CO₂, N₃⁻ | **Mg₂C₃** | **CH₃–C≡CH** (propyne) |

**Balanced hydrolyses:**

Be₂C(s) + 4H₂O(l) ⟶ 2Be(OH)₂(s) + CH₄(g)

Al₄C₃(s) + 12H₂O(l) ⟶ 4Al(OH)₃(s) + 3CH₄(g)

CaC₂(s) + 2H₂O(l) ⟶ Ca(OH)₂(aq) + C₂H₂(g)

Mg₂C₃(s) + 4H₂O(l) ⟶ 2Mg(OH)₂(s) + C₃H₄(g)  (propyne)

- **Ionic acetylides** (Group 1, 2) contain the [C≡C]²⁻ ion — isoelectronic with N₂, C–C stretch close to that of N₂. **Covalent acetylides** (Cu₂C₂, Ag₂C₂) are shock-sensitive explosives (a hazard when C₂H₂ meets copper alloys).
- CaC₂ is not colourless because of lattice defects — pure CaC₂ is white, technical CaC₂ grey-black.

> **JEE TRAP:** Be₂C and Al₄C₃ are the **only common methanides** — "Al₄C₃ gives methane" is a standard identification. The written 4Al³⁺·3C⁴⁻ is a formal fiction (a 4− point charge is unreal); the real structure has C in distorted octahedral holes. In A–R format: "Mg₂C₃ is a C₃-type carbide" (true) *because* "it contains a three-carbon anion" (true, and it explains it) → mark (A).

## 8.2 Calcium carbide — the "acetylene from coal" chemistry

**Manufacture** (electrothermal, in an electric-arc furnace):

CaO(s) + 3C(s) [≈ 2000–2200 °C; Δ_rH ≈ +466 kJ mol⁻¹, strongly endothermic] ⟶ CaC₂(l) + CO(g)

**Hydrolysis to ethyne** (the old feedstock for the whole acetylene-based organic industry, and still used for **oxy-acetylene welding**, ≈ 3300 °C flame):

CaC₂(s) + 2H₂O(l) ⟶ Ca(OH)₂(s) + C₂H₂(g)

**Nitrogen fixation → calcium cyanamide** (the "Frank–Caro" process, a route to fixed nitrogen before Haber):

CaC₂(s) + N₂(g) [≈ 1000–1100 °C] ⟶ CaNCN(s) + C(s)

- **CaNCN ("nitrolim")** — a slow-release nitrogenous fertiliser: in the soil it hydrolyses through cyanamide H₂NCN and urea to NH₃. It is also the industrial precursor of **melamine, dicyandiamide and thiourea**.
- The **cyanamide ion NCN²⁻** is linear and isoelectronic with CO₂ and N₃⁻.

## 8.3 Interstitial (metallic) carbides

- Formed by the **transition metals** (and some lanthanoids/actinoids): carbon atoms sit in the **octahedral holes** of a close-packed metal lattice.
- **Hägg's rule:** when the metallic radius exceeds roughly 130 pm the holes are big enough to take carbon with little lattice distortion, and simple phases like **MC** (rock-salt structure: NbC, TiC, ZrC, TaC) and **M₂C** (Mo₂C, W₂C) form. Smaller metals (Cr, Mn, Fe, Co, Ni) give more complex, distorted carbides — **Fe₃C (cementite)**, Cr₃C₂, Mn₃C.
- The carbon **donates electrons into the metal band** and pins the layers together, so relative to the parent metal:

| Property | Change | Why |
|:--|:--:|:--|
| metallic lustre | **unchanged** | metal band still full/conducting |
| electrical & thermal conductivity | **unchanged** (often slightly better) | electrons still delocalised |
| hardness | **greatly increased** (TiC, WC near diamond) | C atoms lock the slip planes |
| melting point | **very high** — **TaC ≈ 3985 °C** (one of the highest known) | extra M–C bonding |
| density | **increased** | holes filled |
| malleability / ductility | **decreased** | slip is blocked |
| chemical reactivity | **very low** — do **not** hydrolyse; slowly attacked only by hot conc. HF/HNO₃ or fused oxidising alkali | strong, saturated bonding |

- **Uses:** **WC** (bonded with Co, "cemented carbide") for cutting tools and drill bits; **TiC / TaC** in rocket nozzles and armour; **Fe₃C** is the hard phase that makes steel strong (its amount and distribution set the mechanical properties).

> **JEE TRAP:** for interstitial carbides — lustre and conductivity **unchanged**; hardness, m.p. and density **up**; ductility **down**. "No chemical bond is present" is a slogan, not physics — there is genuine M–C bonding.

## 8.4 Covalent (network) carbides — SiC and B₄C

**Silicon carbide (carborundum):**

SiO₂(s) + 3C(s) [2000–2500 °C, Acheson electric furnace, excess coke] ⟶ SiC(s) + 2CO(g)

Si(s) + C(s) [≈ 2500 °C] ⟶ SiC(s)

- **Structure:** a giant covalent lattice like diamond, but with **alternating Si and C**, each atom sp³ and bonded to **four of the other kind** (β-SiC = zinc-blende; α-SiC = wurtzite; over 250 stacking **polytypes** are known).
- **Properties:** **Mohs 9.5**, second only to diamond; infusible (sublimes ~2700 °C); a **wide-band-gap semiconductor** (used in high-power/high-temperature electronics and blue LEDs); pale yellow when pure, blue-black in commercial grade (Fe, Al impurities).
- **Chemically almost inert** — no ordinary acid attacks it; it succumbs only to fused alkali + oxidiser, or hot HF/HNO₃, or Cl₂:

2SiC(s) + 4NaOH(l) + 3O₂(g) [fused, air] ⟶ 2Na₂SiO₃(s) + 2CO(g) + 2H₂O(g)

SiC(s) + 2Cl₂(g) [≈ 1000 °C] ⟶ SiCl₄(g) + C(s)

- **Uses:** grinding wheels and abrasives, refractory bricks and kiln furniture, car brake discs and clutch plates, bulletproof ceramic plates, heating elements ("Globar"), semiconductor substrates.

**Boron carbide, B₄C:**

2B₂O₃(s) + 7C(s) [≈ 2500 °C, electric furnace] ⟶ B₄C(s) + 6CO(g)

- Written **B₄C** for exams; the real phase is boron-rich and variable (≈ B₄C to B₁₀·₅C), built from **B₁₂ icosahedra** linked by C–B–C chains.
- **Harder than SiC** (Mohs ~9.5–10), very light (2.52 g cm⁻³), and a strong **neutron absorber** (¹⁰B) → tank/body armour, blast nozzles, and **reactor control rods / shielding**.

# 9. Oxides of carbon — carbon monoxide

Carbon forms **more oxides than any other Group 14 element**: the two important ones — **CO** and **CO₂** — plus the linear suboxide **C₃O₂**, the higher suboxide **C₁₂O₉** (anhydride of mellitic acid), disputed C₅O₂, and non-stoichiometric **graphite oxide**. All of them are **molecular** (or, for graphite oxide, layered) — the direct consequence of carbon's strong **pπ–pπ** bonding to oxygen. Contrast Si → Pb, whose only oxides are the network solid SiO₂ and the ionic-lattice monoxides/dioxides.

## 9.1 Carbon monoxide — preparation

**Direct oxidation of carbon in limited air:**

2C(s) + O₂(g) [limited O₂, Δ] ⟶ 2CO(g)   Δ_fH°(CO) = −110.5 kJ mol⁻¹

**The Boudouard equilibrium** governs how much CO vs CO₂ a carbon/O₂ system holds:

C(s) + CO₂(g) ⇌ 2CO(g)   Δ_rH ≈ +172 kJ mol⁻¹ (endothermic, +Δn_gas)

- **High temperature** (> ~1000 K) and **low pressure** push it right → **CO dominates** (the blast-furnace tuyère zone, producer gas).
- **Low temperature** → CO₂ dominates. This is why a car exhaust or a stove makes CO only when the burn is hot and air-starved.

**Small scale — dehydration of methanoic (formic) acid:**

HCOOH(l) [conc. H₂SO₄, ≈ 373 K; H₂SO₄ removes water] ⟶ CO(g) + H₂O

**From oxalic acid** (gives a CO + CO₂ mixture; pass through KOH to remove the CO₂):

H₂C₂O₄(s) [conc. H₂SO₄, Δ] ⟶ CO(g) + CO₂(g) + H₂O

**From potassium hexacyanoferrate(II)** — a clean CO source with no gaseous by-product:

K₄[Fe(CN)₆](s) + 6H₂SO₄(conc.) + 6H₂O [Δ] ⟶ 2K₂SO₄ + FeSO₄ + 3(NH₄)₂SO₄ + 6CO(g)

> **JEE TRAP:** with K₄[Fe(CN)₆] the acid must be **concentrated** H₂SO₄. **Dilute** acid liberates the far more poisonous **HCN** instead — full CO only comes via the 6HCN → 6HCOOH → 6CO sequence that concentrated acid drives.

**Industrial fuel gases:**

C(s) + H₂O(g) [red-hot coke, ≈ 1000 °C; Δ_rH ≈ +131 kJ mol⁻¹] ⟶ CO(g) + H₂(g)   — **water gas / synthesis gas**

2C(s) + O₂(g) + 4N₂(g) [air over red-hot coke; overall exothermic] ⟶ 2CO(g) + 4N₂(g)   — **producer gas**

| Fuel gas | Made from | Composition (approx.) | Calorific value | Note |
|:--|:--|:--|:--:|:--|
| **water gas** | steam + red-hot coke | CO + H₂ (1 : 1) | **high** | endothermic — the coke cools, so a hot air-blast is alternated with the steam-blast |
| **producer gas** | air (+ a little steam) + coke | ~25 % CO, ~4 % CO₂, **~70 % N₂** | **low** | the N₂ is dead ballast; used where cheap bulk heat is enough |
| **coal gas** ("town gas") | destructive distillation of coal | CO + H₂ + CH₄ + CO₂ | high | historic domestic gas; displaced by natural gas |

> **Calorific value** — Decreasing order: **water gas > coal gas > producer gas**.
> Note: water gas = CO + H₂; producer gas = CO + N₂; coal gas = CO + H₂ + CH₄. Interchanging them is a classic mistake.

- **Water-gas shift** (raises the H₂ fraction for ammonia synthesis): CO + H₂O(g) [Fe₂O₃/Cr₂O₃, ~700 K] ⇌ CO₂ + H₂.
- Synthesis gas → **methanol** (CO + 2H₂ → CH₃OH, Cu/ZnO), → **hydrocarbons** (Fischer–Tropsch, Co/Fe), → **aldehydes** (hydroformylation / oxo process, RCH=CH₂ + CO + H₂ → RCH₂CH₂CHO).

## 9.2 CO — structure, properties, detection, toxicity

**Physical / chemical character**

- Colourless, odourless, tasteless gas; **very slightly soluble** in water; **b.p. −191 °C**.
- A **neutral oxide** — forms no salt with dilute acid or alkali (but see §9.4: with *molten* NaOH under pressure it does give sodium methanoate, so "neutral" is a room-temperature statement).
- **Burns in air with a blue flame:** 2CO + O₂ → 2CO₂, Δ_cH ≈ −283 kJ mol⁻¹ — CO is itself a fuel (the blue "flicker" over a coke fire or gas hob).
- Thermodynamically a **reducing agent**, not an oxidising one: CO wants to pick up the missing oxygen and become CO₂.

> **MOT LENS — the CO molecule.** Isoelectronic with N₂ (14 valence e⁻); the filled MOs (with s–p mixing) are …(1π)⁴(3σ)², giving **one σ + two π bonds, bond order 3**. Consequences:
> - **C–O = 112.8 pm** — *shorter* than a C=O double bond (122 pm), consistent with the triple bond, and the **highest bond dissociation energy of any molecule** (1072 kJ mol⁻¹).
> - The **HOMO (3σ)** is **essentially non-bonding, very slightly antibonding**, and concentrated **on carbon** — the "carbon lone pair" that makes CO a σ-donor ligand.
> - **Dipole moment is tiny (≈ 0.11 D) and points C(δ−)→O(δ+)** — the reverse of the electronegativity guess, because that carbon-centred lone pair swamps the O-ward bond polarity.

**Detection**

CO(g) + PdCl₂(aq) + H₂O ⟶ CO₂(g) + Pd↓ (black) + 2HCl   — a black stain of finely divided Pd (used in CO detector papers)

- CO **burns with a blue flame** and **reduces** an ammoniacal AgNO₃ or a hot CuO tube (→ Cu + CO₂).
- **Absorbed** by ammoniacal or acidified Cu(I) chloride: Cu₂Cl₂ + 2CO + 2H₂O → 2[CuCl(CO)(H₂O)] — the basis of CO removal in gas analysis.

**Estimation** — quantitative oxidation by iodine pentoxide, then iodometric titration of the I₂:

5CO(g) + I₂O₅(s) [warm] ⟶ 5CO₂(g) + I₂ ;   I₂ + 2S₂O₃²⁻ ⟶ 2I⁻ + S₄O₆²⁻

**Toxicity**

CO binds the Fe(II) of haemoglobin to give **carboxyhaemoglobin**, a complex **≈ 200–250 times more stable** than the oxygen complex, so even a small partial pressure of CO ties up most of the haemoglobin and blocks O₂ transport → headache, confusion, cherry-red skin, unconsciousness, death. It is odourless, so there is no warning.

- **Antidote: carbogen** (95 % O₂ + 5 % CO₂). The high O₂ partial pressure displaces CO from haemoglobin by mass action; the 5 % CO₂ stimulates the respiratory centre to breathe faster and clear the CO sooner. Pure O₂ (or hyperbaric O₂) is used clinically.

## 9.3 CO as a reducing agent and as a ligand

### Reduction of metal oxides (the heart of pyrometallurgy)

Fe₂O₃(s) + 3CO(g) [blast furnace, 500–900 K "indirect-reduction" zone] ⟶ 2Fe(s/l) + 3CO₂(g)

ZnO(s) + CO(g) [≳ 1400 K; Zn distils off as vapour] ⟶ Zn(g) + CO₂(g)

CuO(s) + CO(g) [gentle warming] ⟶ Cu(s) + CO₂(g)

- CO reduces the oxides of all metals **below aluminium** in the reactivity/Ellingham order — Fe, Zn, Pb, Cu, Ni, Sn … — but **not** the oxides of Na, K, Ca, Mg, Al, whose M–O bond is too strong. That single fact is why iron is smelted with coke but aluminium must be electrolysed.
- **Ellingham view:** the C + ½O₂ → CO line slopes *downward* with temperature (Δn_gas = +1), so above a crossover temperature CO becomes a better oxygen-scavenger than the metal — carbon can then pull the oxygen out of the ore.

### Metal carbonyls

CO uses its carbon lone pair to bond to **low-oxidation-state (often zero) transition metals**:

Ni(s) + 4CO(g) [50–80 °C, 1 atm; Mond process] ⟶ Ni(CO)₄(g)   — and, at ~180 °C, the reverse, depositing 99.99 % pure Ni

Fe(s) + 5CO(g) [≈ 200 °C, 200 atm] ⟶ Fe(CO)₅(l)

2Fe(CO)₅ [uv] ⟶ Fe₂(CO)₉(s) + CO

CrCl₃ + 6CO + 2Al [AlCl₃, benzene, reductive carbonylation] ⟶ Cr(CO)₆ + 2AlCl₃   (a reductive route; Na also works)

| Carbonyl | Geometry | M–M / bridges | Valence electrons at M |
|:--|:--|:--|:--:|
| Ni(CO)₄ | tetrahedral | — | 18 |
| Fe(CO)₅ | trigonal bipyramid | — | 18 |
| Cr(CO)₆ | octahedral | — | 18 |
| Mn₂(CO)₁₀ | two octahedra, staggered | 1 Mn–Mn, no bridge | 18 each |
| Fe₂(CO)₉ | two Fe | 1 Fe–Fe + **3 bridging CO** | 18 each |
| Co₂(CO)₈ (solid) | two Co | 1 Co–Co + **2 bridging CO** | 18 each |
| **V(CO)₆** | octahedral | — | **17 (the exception)** — too crowded to dimerise; paramagnetic; easily reduced to [V(CO)₆]⁻ (18e) |

- **The 18-electron (effective-atomic-number) rule:** a stable carbonyl usually gives the metal the electron count of the next noble gas. Odd-electron metals (Mn, Co) reach 18 by forming an **M–M bond** (each M shares one electron) → the dimers Mn₂(CO)₁₀, Co₂(CO)₈.

> **MOT LENS — synergic M–CO bonding.** Two donations act together and reinforce each other:
> 1. **σ-donation** M ← C≡O: the carbon lone pair (the 3σ HOMO of CO) donates into an empty metal orbital.
> 2. **π back-donation** M → C≡O: a filled metal **dπ** orbital donates into the empty CO **π\*** (antibonding).
>
> Back-donation *strengthens* the M–C bond and *weakens* the internal C–O bond, so **ν(CO) drops** on coordination: **2143 cm⁻¹ in free CO → ≈ 2000 cm⁻¹ (terminal) → ≈ 1800 cm⁻¹ (bridging)**. The more electron-rich the metal (low oxidation state, or an added negative charge), the more back-donation and the lower ν(CO): free CO 2143 > Ni(CO)₄ 2060 > [Co(CO)₄]⁻ 1890 > [Fe(CO)₄]²⁻ 1790 cm⁻¹.
>
> BF₃ (no d electrons → no π back-bonding) forms only a **weak** OC→BF₃ adduct; low-valent transition metals form **strong** M–CO bonds where both σ and π operate.
>
> **σ-donor order:** CN⁻ > CO > NO⁺. **π-acceptor order (reverse):** NO⁺ > CO > CN⁻. CN⁻ is the better σ-donor (it is negatively charged) but the poorer π-acceptor.
>
> **Fe₂(CO)₉:** 6 terminal + 3 bridging CO + 1 Fe–Fe bond. Each bridging CO touches two Fe, so total **Fe–C bonds = 6 + 2×3 = 12**. (An integer-answer favourite — also count the σ framework: 12 Fe–C + 9 C–O + 1 Fe–Fe = 22.)

## 9.4 Other reactions of CO

CO(g) + ½O₂(g) [spark / hot surface] ⟶ CO₂(g)

CO(g) + S(g) [Δ] ⟶ COS(g)   (carbonyl sulphide — linear, like CO₂)

CO(g) + Cl₂(g) [activated charcoal or light] ⟶ COCl₂(g)   — **phosgene**

CO(g) + NaOH(s) [≈ 200 °C, ~10 atm] ⟶ HCOONa(s)   (sodium methanoate — the reason "CO is neutral" is only a mild statement)

CO(g) + 2H₂(g) [Cu/ZnO/Al₂O₃, ~250 °C, 50–100 atm] ⟶ CH₃OH(l)

**Phosgene, COCl₂** — trigonal planar (C sp²), b.p. 8 °C, **extremely toxic** (a WWI chemical weapon; it hydrolyses slowly in the lungs to HCl):

COCl₂ + H₂O ⟶ CO₂ + 2HCl

COCl₂ + 2NH₃ ⟶ CO(NH₂)₂ (urea) + 2NH₄Cl   (written also as +4NH₃ → urea + 2NH₄Cl)

COCl₂ + 2ROH ⟶ (RO)₂CO (a dialkyl carbonate) + 2HCl

Industrially phosgene is made in bulk for **isocyanates** (R–N=C=O) → **polyurethanes** and **polycarbonates**.

# 10. Carbon dioxide, carbonic acid, carbonates and hydrogencarbonates

## 10.1 CO₂ — preparation and recovery

**Laboratory:**

CaCO₃ + 2HCl [dilute] ⟶ CaCl₂ + CO₂ + H₂O

**Industrial / commercial sources:**

C + O₂ [excess air, Δ] ⟶ CO₂

CH₄ + 2O₂ [Δ] ⟶ CO₂ + 2H₂O

CaCO₃ [strong heat, lime kiln] ⟶ CaO + CO₂

C₆H₁₂O₆ [yeast, anaerobic; brewery] ⟶ 2C₂H₅OH + 2CO₂

CO + H₂O(g) [by-product of H₂ / ammonia manufacture] ⇌ CO₂ + H₂

**Recovery / scrubbing of a CO₂ stream:**

Na₂CO₃ + CO₂ + H₂O [cool] ⇌ 2NaHCO₃

2HOCH₂CH₂NH₂ + CO₂ + H₂O [30–60 °C ⇌ 100–150 °C; Girbotol process, ethanolamine] ⇌ (HOCH₂CH₂NH₃)₂CO₃

## 10.2 CO₂ — structure, properties, uses

**Physical character**

- Colourless, odourless, faintly acid-tasting gas; **≈ 1.5× denser than air** (M = 44); does not burn and does not support ordinary combustion (but burning Mg *does* continue in CO₂: 2Mg + CO₂ → 2MgO + C).
- **No liquid phase at 1 atm.** The phase diagram: **triple point 5.11 atm, −56.6 °C**; below 5.11 atm solid sublimes straight to gas. **Solid CO₂ ("dry ice")** sublimes at **−78.5 °C** (1 atm) — a refrigerant that leaves no liquid residue (ice cream, frozen transport, laboratory cold baths, stage fog).
- **Supercritical CO₂** (above **31 °C and 73 atm**) — a tunable, non-toxic, non-flammable **green solvent**: decaffeinating coffee, extracting hops and flavours, dry-cleaning, and as a reaction medium.
- **Solubility:** ~0.9 volume per volume of water at 25 °C, 1 atm (Henry's law — more under pressure, hence carbonated drinks). A clathrate hydrate **CO₂·~6H₂O** forms near 0 °C under ~10–50 atm.

**Structure**

Linear **O=C=O** (D_∞h), carbon **sp** hybridised. The two sp hybrids make the σ framework; the two unhybridised carbon 2p orbitals overlap the perpendicular oxygen 2p orbitals to give **two 3-centre–4-electron π systems** (one in each of the two planes). Net result:

- both C–O bonds **exactly equal**, length **116 pm** (between C=O 122 and C≡O 113 — effective bond order ≈ 2);
- **zero dipole moment** (the two bond dipoles cancel — a standard "why is CO₂ non-polar but SO₂ polar" question);
- resonance shorthand: ⁻O–C≡O⁺ ↔ O=C=O ↔ ⁺O≡C–O⁻.

> **MOT LENS — why CO₂ is a molecule but SiO₂ is a solid.** Carbon's compact 2p orbitals overlap oxygen 2p efficiently → strong **pπ–pπ** C=O bonds → the octet is satisfied in a small **discrete O=C=O molecule**, held to its neighbours only by weak dispersion forces (hence a gas). Silicon's diffuse 3p gives poor π overlap, so silicon instead forms **four Si–O σ single bonds** and polymerises into the 3-D SiO₂ network — one giant molecule, m.p. ~1983 K (§13). Same stoichiometry, opposite physical state, one cause.

**Biogeochemistry**

- **Photosynthesis** (endothermic; stores solar energy): 6CO₂ + 6H₂O [hν, chlorophyll] ⟶ C₆H₁₂O₆ + 6O₂ ; **respiration / combustion** run it backwards.
- **The carbonate–silicate cycle** locks atmospheric CO₂ into limestone (CaCO₃) over geological time; volcanism returns it.
- **Greenhouse effect:** CO₂ (and CH₄, H₂O, N₂O, CFCs) absorbs outgoing infrared and re-radiates it, warming the surface. Atmospheric CO₂ has risen from ~0.028 % (pre-industrial) to ~0.042 % from fossil-fuel burning and limestone calcination for cement — the driver of current climate change. **Carbon capture** (amine scrubbing, §10.1) and storage/utilisation are active responses.

> **Key Point — uses of CO₂:** carbonating drinks; **fire extinguishers** (heavy, inert — blankets the fuel and excludes O₂; *not* for burning metals or electrical fires vs water though); **dry ice** refrigerant; **supercritical-CO₂** extraction/solvent; manufacture of **urea** (2NH₃ + CO₂ → NH₂CONH₂ + H₂O) and of **Na₂CO₃** (Solvay ammonia–soda); inert/modified atmosphere packaging; a **plant growth booster** in greenhouses; the working fluid in some gas-cooled reactors.

## 10.3 Carbonic acid, carbonates and hydrogencarbonates

### 10.3.1 The equilibria

CO₂(aq) + H₂O ⇌ H₂CO₃(aq)   — only **~0.2 %** of dissolved CO₂ is actually hydrated to H₂CO₃

H₂CO₃ + H₂O ⇌ HCO₃⁻ + H₃O⁺   K_a1(apparent) ≈ 4.3×10⁻⁷ (pK ≈ 6.4)

HCO₃⁻ + H₂O ⇌ CO₃²⁻ + H₃O⁺   K_a2 ≈ 4.8×10⁻¹¹ (pK ≈ 10.3)

- Because most "H₂CO₃" is really loosely hydrated CO₂, the **true** K_a1 of the H₂CO₃ molecule is ~2×10⁻⁴ (a much stronger acid than the apparent value suggests).
- **H₂CO₃ is a weak dibasic acid** → two salt series: normal **carbonates CO₃²⁻** and acid **hydrogencarbonates HCO₃⁻**.
- **Blood buffer:** the CO₂/HCO₃⁻ pair (with the lungs venting CO₂ and the kidneys adjusting HCO₃⁻) holds arterial pH in a narrow band around **7.4** — the physiologically vital carbonate buffer.

CO₂ + 2NaOH(excess) ⟶ Na₂CO₃ + H₂O   ;   CO₂(excess) + NaOH ⟶ NaHCO₃

### 10.3.2 Structure and bonding

> **MOT LENS — CO₃²⁻.** Trigonal planar (D₃h), carbon **sp²**. Three σ(C–O) from the sp² hybrids; the leftover carbon 2p_z overlaps all three oxygen p orbitals to give **one delocalised π MO over all four atoms** (a 4-centre–6-electron π system, one bonding pair in it). All three C–O bonds are **identical**, length ≈ 129 pm, **bond order ≈ 1⅓**.
> **HCO₃⁻** keeps the planar CO₃ skeleton but one O now carries H; two C–O bonds are equivalent (~1.5) and the C–OH bond is a longer single bond. Solid hydrogencarbonates contain **H-bonded HCO₃⁻ dimers or chains**.
> **"CO₄⁴⁻" does not exist** — carbon is too small for four O and cannot expand its octet — whereas **SiO₄⁴⁻** is the basis of all silicate chemistry. Exactly the NO₃⁻ (planar, 3-coordinate) vs PO₄³⁻ (tetrahedral, 4-coordinate) contrast.

### 10.3.3 Solubility

- **Soluble:** all Group 1 carbonates (Li₂CO₃ only sparingly) and (NH₄)₂CO₃.
- **Insoluble / sparingly soluble:** Group 2 and most heavy-metal carbonates — CaCO₃, BaCO₃, PbCO₃, ZnCO₃, MgCO₃.
- **All hydrogencarbonates are soluble.** Solid HCO₃⁻ salts exist only for **Group 1 (except Li) and NH₄⁺** — a smaller/more-polarising cation cannot support the H-bonded HCO₃⁻ network; "Ca(HCO₃)₂" and "Mg(HCO₃)₂" exist only in solution (they are temporary hardness).
- **Ag₂CO₃ is pale yellow** (strong Ag⁺ → O polarisation) though most silver salts are white.

### 10.3.4 Thermal stability — the polarising-power argument

A carbonate decomposes when the cation can pull an O²⁻ out of the planar CO₃²⁻ ion (leaving CO₂):  **MCO₃ → MO + CO₂**.

- A **small, highly charged cation** (high ionic potential) polarises CO₃²⁻ strongly → the carbonate is **less stable**, decomposes at **lower** temperature.
- A **large, low-charge cation** barely disturbs CO₃²⁻ → the carbonate is **more stable**.

| Carbonate | Approx. decomposition T | Trend |
|:--|:--:|:--|
| Li₂CO₃ | ~1300 °C (Group 1 anomaly — decomposes; the rest of Group 1 do not) | small Li⁺, diagonal to Mg |
| BeCO₃ | < 100 °C | tiny Be²⁺ → very unstable |
| MgCO₃ | ~540 °C | |
| CaCO₃ | ~900 °C | **stability increases down Group 2** |
| SrCO₃ | ~1290 °C | as cation grows and z/r falls |
| BaCO₃ | ~1360 °C | |

- **Na₂CO₃ and K₂CO₃ melt without decomposing** (~850–900 °C) — the large +1 cations do not polarise CO₃²⁻ enough.
- **All hydrogencarbonates decompose on gentle heating:** 2NaHCO₃ → Na₂CO₃ + CO₂ + H₂O (baking, fire extinguishers, antacids); Ca(HCO₃)₂ → CaCO₃ + CO₂ + H₂O (kettle fur, stalactites, boiling out temporary hardness).

### 10.3.5 The limewater test

Ca(OH)₂(aq) + CO₂(g) ⟶ CaCO₃↓ (white, milky) + H₂O

CaCO₃(s) + CO₂(g) + H₂O(l) [excess CO₂] ⟶ Ca(HCO₃)₂(aq) (clear again)

> **DETECTION TRAP:** CO₂ turns limewater (or baryta water) **milky**; **excess CO₂ clears** it as soluble Ca(HCO₃)₂ — a two-stage response that is itself diagnostic. **SO₂ also turns limewater milky** (CaSO₃) — tell them apart with acidified **KMnO₄ or K₂Cr₂O₇**, which SO₂ decolourises (green Cr³⁺ / colourless Mn²⁺) and CO₂ does not.

### 10.3.6 Sodium carbonate — the Solvay (ammonia–soda) process in outline

NH₃ + CO₂ + H₂O ⟶ NH₄HCO₃ ;   NH₄HCO₃ + NaCl ⟶ **NaHCO₃↓** + NH₄Cl   (NaHCO₃ least soluble, crystallises out)

2NaHCO₃ [Δ] ⟶ Na₂CO₃ + CO₂ + H₂O   (CO₂ recycled)

2NH₄Cl + Ca(OH)₂ [Δ] ⟶ 2NH₃↑ + CaCl₂ + 2H₂O   (NH₃ recycled; CaCl₂ is the only waste)

Solid Na₂CO₃ crystallises as the **decahydrate Na₂CO₃·10H₂O (washing soda)**, which **effloresces** in dry air to the monohydrate and finally to the anhydrous "soda ash".

> **MOT LENS — CO₃²⁻.** Trigonal planar, carbon **sp²**; the three σ(C–O) bonds use the sp² hybrids, and the perpendicular carbon 2p orbital forms **one delocalised π MO over all four atoms** containing one bonding electron pair. All three C–O bonds are equivalent, order ≈ 1.33 (between single and double). **CO₄⁴⁻ does not exist** — carbon is too small and cannot expand its octet — even though **SiO₄⁴⁻** underlies all silicate chemistry. Same argument: NO₃⁻ (planar, 3-coordinate) vs PO₄³⁻ (tetrahedral, 4-coordinate).

## 10.4 Carbon suboxide, C₃O₂

HOOC–CH₂–COOH (malonic acid) [P₄O₁₀, about 150 °C] ⟶ O=C=C=C=O + 2H₂O

- Linear, foul-smelling gas, b.p. about **6 °C**; stable at very low temperature, polymerises to yellow and then red-purple solids on warming.

C₃O₂ + 2HCl ⟶ CH₂(COCl)₂

C₃O₂ + 2NH₃ ⟶ CH₂(CONH₂)₂

**C₁₂O₉** (the anhydride of mellitic acid, C₆(COOH)₆) is another stable suboxide; C₅O₂ reports are disputed.

# 11. Carbon disulphide and sulphides of carbon

## 11.1 Preparation and character of CS₂

**Modern route** (from natural gas):

CH₄(g) + 4S(g) [≈ 600 °C, silica-gel or Al₂O₃ catalyst] ⟶ CS₂(g) + 2H₂S(g)

**Older route:**

C(s) + 2S(g) [≈ 850–900 °C, electric furnace] ⟶ CS₂(g)

- **CS₂** — colourless, very volatile, refractive liquid; **b.p. 46 °C**, density 1.26. **Dangerously flammable** — flash point −30 °C, autoignition ~90 °C (a hot steam pipe will light it), and it burns with a blue flame to CO₂ + SO₂.
- **Toxic** — a cumulative poison attacking the central and peripheral nervous system (a recognised industrial hazard of the old viscose plants).
- Pure CS₂ has a mild ethereal smell; the technical liquid stinks of organosulphur impurities.
- **Structure:** linear **S=C=S**, carbon sp, isoelectronic and isostructural with CO₂ — but the larger, more polarisable sulphur makes CS₂ a **much better ligand and π-acceptor**, and far more reactive, than CO₂.

## 11.2 Reactions of CS₂

**With alkali → thiocarbonate + carbonate** (a disproportionation of the C–S system):

3CS₂(l) + 6NaOH(aq) ⟶ Na₂CO₃(aq) + 2Na₂CS₃(aq) + 3H₂O

**With a metal hydrogensulphide → trithiocarbonate:**

CS₂ + Na₂S ⟶ Na₂CS₃   (the salt of thiocarbonic acid H₂CS₃, a red oil)

**With ammonia / amines → dithiocarbamates:**

CS₂ + 2NH₃ ⟶ NH₄[H₂N–CS₂]   (ammonium dithiocarbamate; R₂NH gives R₂N–CS₂⁻, ligands and vulcanisation accelerators; the Zn salt "ziram" is a fungicide)

**With an alkoxide / cellulose in alkali → xanthate** (the viscose reaction):

RO⁻ + CS₂ ⟶ RO–CS–S⁻   (an O-alkyl xanthate)

cellulose–OH + NaOH + CS₂ ⟶ cellulose–O–CS–SNa (sodium cellulose xanthate)

- The orange xanthate dissolves in dilute NaOH to **"viscose"**; forcing it through a spinneret into acid **regenerates cellulose** as **rayon** fibre, or through a slit as **cellophane** film.
- Potassium ethyl xanthate is the standard **froth-flotation collector** for sulphide ores.

**With chlorine → carbon tetrachloride:**

CS₂(l) + 3Cl₂(g) [FeCl₃ or I₂ catalyst] ⟶ CCl₄(l) + S₂Cl₂(l)

**Electric arc through CS₂ → carbon subsulphide** C₃S₂ (S=C=C=C=S), a red liquid that polymerises like C₃O₂.

**Uses:** manufacture of **viscose rayon and cellophane** (historically the largest use), **CCl₄** and other organosulphur chemicals, a **solvent for sulphur, P₄, iodine, fats and rubber**, and the sulphur carrier in **cold (solution) vulcanisation** of thin rubber goods.

> **Comprehension link:** CS₂ + NaOH → Na₂CO₃ + Na₂CS₃. The anions CO₃²⁻ and CS₃²⁻ are **both trigonal planar** and both salts are ionic — but they have **different valence-electron counts** (S has more than O), so CO₃²⁻ and CS₃²⁻ are **not isoelectronic**. (A common "which statement is wrong" trap.)

# 12. Silicon — preparation, purification and reactivity

## 12.1 Extraction — metallurgical-grade silicon

**Carbothermic reduction** of silica with high-purity coke in a submerged-arc electric furnace:

SiO₂(s) + 2C(s) [≈ 1800–2000 °C, electric furnace] ⟶ Si(l) + 2CO(g)

- A **slight excess of SiO₂** is kept in the charge — an excess of carbon would form the very stable carbide instead: SiO₂ + 3C → SiC + 2CO, and SiC + SiO₂ → 2Si + 2CO reverses it only at higher T.
- The product is **metallurgical-grade silicon (~98–99 %)** — good enough for alloys but a billion times too impure for electronics.
- **Ferrosilicon** (silica + scrap iron + coke) is made the same way as a **deoxidiser** for steel and the source of the "silicon steels".

## 12.2 Purification to semiconductor grade

Electronic silicon must be **≈ 99.999999999 % (11-nines)** pure — a few impurity atoms per 10¹⁰ Si. The route has three stages.

**(1) Chemical purification via a volatile hydride — the Siemens process.** Crude Si is converted to **trichlorosilane** (b.p. 32 °C), which is repeatedly fractionally distilled and then decomposed on a hot silicon rod:

Si(s) + 3HCl(g) [≈ 300 °C] ⟶ SiHCl₃(g) + H₂(g)

SiHCl₃(g) + H₂(g) [hot Si rod, ≈ 1100 °C; CVD] ⟶ Si(s) + 3HCl(g)   — deposits **polycrystalline "polysilicon"**

(SiCl₄ + 2H₂ → Si + 4HCl and Na₂[SiF₆] + 4Na → Si + 6NaF are alternative reductions.)

**(2) Zone refining** removes the last traces of dissolved impurity:

- A short **molten zone** is moved slowly along a polysilicon bar (radio-frequency heating).
- For almost every impurity the **distribution coefficient k = (conc. in solid)/(conc. in liquid) < 1**, so the impurity stays preferentially in the *liquid* zone and is **dragged to one end** of the bar, which is cut off.
- Several passes in a controlled atmosphere give ultrapure silicon. (Same principle purifies Ge, Ga, B, and many organics.)

**(3) Single-crystal growth — the Czochralski process.** A seed crystal is dipped into molten ultrapure silicon and withdrawn slowly while rotating; a **single crystal ingot** (up to 300 mm diameter) grows on the seed, which is then sawn into the wafers used to make chips. A controlled dose of B or P is added to the melt to set the wafer's p- or n-type doping.

## 12.3 Physical properties

| Property | Value |
|:--|:--|
| structure | **diamond-type** covalent lattice (each Si sp³, 4 neighbours) |
| appearance | dark grey, metallic lustre, brittle, very hard |
| m.p. / b.p. | ≈ 1687 K / ≈ 3538 K (open lattice → **expands on freezing**) |
| electrical | intrinsic **semiconductor**, band gap ≈ **1.1 eV** (conductivity rises with T and with doping) |
| isotopes | ²⁸Si (92.2 %), ²⁹Si (4.7 %), ³⁰Si (3.1 %) |

## 12.4 Chemical reactivity

Silicon is **unreactive at room temperature** toward air, water and acids — a self-limiting SiO₂ skin protects it. It reacts only with **F₂** (cold), and with everything else only on **strong heating** or with **alkali / HF**.

Si(s) + O₂(g) [≈ 1173 K] ⟶ SiO₂(s)

3Si(s) + 2N₂(g) [≈ 1673 K] ⟶ Si₃N₄(s)

Si(s) + 2H₂O(g) [red heat] ⟶ SiO₂(s) + 2H₂(g)

Si(s) + 2F₂(g) [room temperature, spontaneous — ignites] ⟶ SiF₄(g)

Si(s) + 2X₂(g) [X = Cl, Br, I; on warming] ⟶ SiX₄

Si(s) + C(s) [≈ 2500 °C] ⟶ SiC(s)

Si(s) + 2NaOH(aq) + H₂O(l) [hot alkali strips the SiO₂ skin] ⟶ Na₂SiO₃(aq) + 2H₂(g)

3Si(s) + 4HNO₃ + 18HF ⟶ 3H₂[SiF₆] + 4NO + 8H₂O   — the only acid attack (HNO₃ oxidises, HF dissolves the oxide)

> **Key Point — uses of silicon:** ultrapure single-crystal Si → **transistors, integrated circuits, photovoltaic cells, detectors**; **ferrosilicon** (steel deoxidiser; corrosion- and acid-resistant "duriron"; grain-oriented **electrical steel** for transformer cores); silicon–bronze, Al–Si (piston) and Mg–Si alloys; the starting material for **silicones** (§16) and fumed silica.

# 13. Silicon dioxide (silica)

## 13.1 Structure — and why it is a solid, not a gas

- SiO₂ is a **giant three-dimensional covalent network**: every silicon is **sp³** and bonded to **four O**; every O **bridges two Si** (Si–O–Si angle ≈ 144°). The whole crystal is one macromolecule — there is no "SiO₂ molecule".
- **Si–O ≈ 161 pm**, shorter than the sum of covalent radii — partial **pπ–dπ** (O lone pair → empty Si 3d) shortens and strengthens it. This strong, abundant Si–O bond is why silica melts near **1983 K** and is chemically almost inert.
- **Crystalline polymorphs** — all built of the same corner-linked SiO₄ tetrahedra, differing only in how the tetrahedra are tilted and linked:

| Polymorph | Stable range (1 atm) | Note |
|:--|:--|:--|
| **α-quartz** | < 573 °C | the everyday form; helical tetrahedra → **chiral** (left- and right-handed crystals); **piezoelectric** |
| β-quartz | 573–870 °C | α ⇌ β is a fast, reversible "displacive" change |
| tridymite | 870–1470 °C | |
| cristobalite | 1470–1723 °C | Si arranged like C in diamond, O in between |
| molten SiO₂ | > 1723 °C | very **viscous** melt (network survives partly) → quenches to a **glass** |

- **Vitreous (fused) silica** — the quenched melt, a random Si–O network. **Near-zero thermal-expansion coefficient** (survives being heated red-hot and plunged into water), transmits **UV** → prism/lens optics, crucibles, high-temperature ware.
- **Silica gel** — amorphous, highly porous hydrated SiO₂ (~4 % H₂O); large surface area → **desiccant** (the sachets), chromatographic stationary phase, catalyst support.
- **Kieselguhr / diatomaceous earth** — fossil-diatom SiO₂ powder → filter aid, mild abrasive (toothpaste), and the absorbent that made nitroglycerine safe to handle as **dynamite**.
- **Fumed silica** — flame-hydrolysis of SiCl₄ → ultrafine powder used as a **thixotropic thickener** and reinforcing filler (in silicone rubber, §16).

> **MOT LENS — CO₂ molecular, SiO₂ network (the chapter's signature contrast).**
> - Carbon's compact 2p overlaps O 2p well → strong **pπ–pπ** C=O → the octet is satisfied in a small **discrete O=C=O** molecule → **gas**.
> - Silicon's diffuse 3p gives poor π overlap → silicon forms **four Si–O σ single bonds** (reinforced by O→Si pπ–dπ) and **polymerises** into a 3-D lattice → one giant molecule → **high-melting solid**.
> - Same cause: CO₃²⁻ is a discrete planar ion, but "SiO₃²⁻" exists only as the **infinite chains and rings** of the pyroxenes and cyclosilicates (§14).

## 13.2 Reactions of silica

**Acidic oxide — reacts with base, not with ordinary acid:**

SiO₂(s) + 2NaOH(l) [fused] ⟶ Na₂SiO₃(s) + H₂O(g)

SiO₂(s) + Na₂CO₃(l) [fused] ⟶ Na₂SiO₃(s) + CO₂(g)   (SiO₂ displaces the volatile CO₂ from its salt at high T)

SiO₂(s) + CaO(s) [Δ] ⟶ CaSiO₃(s)   (slag formation — SiO₂ is the "acid" flux that carries away basic gangue in a blast furnace)

3SiO₂ + Ca₃(PO₄)₂ [high T] ⟶ 3CaSiO₃ + P₂O₅↑

**The one acid that attacks it — HF (used to etch glass):**

SiO₂(s) + 4HF(aq) ⟶ SiF₄(g) + 2H₂O

SiO₂(s) + 6HF(conc.) ⟶ H₂[SiF₆](aq) + 2H₂O

SiF₄(g) + 2H₂O ⟶ SiO₂·2H₂O (Si(OH)₄) + 4HF   (SiF₄ re-hydrolyses on contact with a water drop)

SiO₂(s) + 2F₂(g) ⟶ SiF₄(g) + O₂(g)

> **Practical consequences of "SiO₂ is acidic":** ground-glass stoppers **seize** in bottles of strong alkali (the alkali slowly dissolves the contact film); **NaOH is stored in plastic**, not glass; **HF is kept in polythene** (it eats glass); glassware is permanently frosted by HF vapour.

> **QUALITATIVE SILICATE / BORATE-type TEST:** warm the solid with **CaF₂ + conc. H₂SO₄** → HF generated *in situ* attacks any silica/silicate to volatile **SiF₄**; a drop of water held at the tube mouth deposits a **white gelatinous ring of hydrated silica** — the confirmatory test for a silicate.

> **Key Point — uses of silica:** sand → mortar, concrete, glass; **quartz crystal oscillators** → watches, radio/TV frequency control (piezoelectricity); **fused-silica** optics and crucibles; **silica gel** desiccant and chromatography; **kieselguhr** filter aid and dynamite absorbent; **fumed silica** thickener/filler; silica bricks for furnace roofs.

# 14. Silicates — the full seven-class structural system

**About 95% of the Earth's crust** is silica, silicates and aluminosilicate clays. The three most abundant crustal elements (O, Si, Al) make up about **81%** — four of every five atoms.

## 14.1 The one building block and the master rule

- Base unit: the **SiO₄⁴⁻ tetrahedron** — silicon sp³, ∠O–Si–O ≈ 109.5°, Si–O ≈ 162 pm.
- Classification depends **only** on how many of the four corner (bridging) oxygens each tetrahedron **shares** with its neighbours. The negative charge on the anion framework is balanced by external cations.

> **DERIVED FORMULA.** If each tetrahedron shares **x** of its 4 corners:
> - effective O per Si = **4 − x/2**
> - charge per Si = **−(4 − x)**
> This generates nearly every silicate formula:
> x = 0 → SiO₄⁴⁻ · x = 1 → Si₂O₇⁶⁻ · x = 2 → (SiO₃²⁻)ₙ · x = 3 → (Si₂O₅²⁻)ₙ · x = 4 → SiO₂ (neutral).

**Soluble silicate ("water glass"):**

Na₂CO₃ + SiO₂ [about 1400 °C, electric furnace] ⟶ Na₂SiO₃ + CO₂

Na₂SiO₃ dissolves in hot water under pressure as **"water glass"** (about Na₂Si₂O₅·6H₂O) — adhesive for paper/cardboard, detergent builder (keeps pH high so grease saponifies), fireproofing, egg preservative, and the source of silica gel. It must not be used in hard water (Ca²⁺ → insoluble CaSiO₃).

## 14.2 Master classification table

| Corners shared / Si | Class | Repeat / discrete anion | Charge per Si | Type minerals |
|:--:|:--|:--:|:--:|:--|
| 0 | **Ortho / neso**silicate | SiO₄⁴⁻ (island) | −4 | forsterite/olivine (Mg,Fe)₂SiO₄; zircon ZrSiO₄; phenacite Be₂SiO₄; willemite Zn₂SiO₄; garnets; topaz |
| 1 | **Pyro / soro**silicate | Si₂O₇⁶⁻ (dimer) | −3 | thortveitite Sc₂Si₂O₇; hemimorphite Zn₄(OH)₂Si₂O₇·H₂O |
| 2 (ring) | **Cyclic** silicate | (SiₙO₃ₙ)²ⁿ⁻; n = 3, 4, 6 | −2 | benitoite BaTiSi₃O₉; beryl Be₃Al₂Si₆O₁₈; tourmaline; cordierite |
| 2 (chain) | **Pyroxene** — single chain (inosilicate) | (SiO₃)ₙ²ⁿ⁻ | −2 | enstatite MgSiO₃; diopside CaMg(SiO₃)₂; spodumene LiAl(SiO₃)₂ (Li ore); jadeite NaAl(SiO₃)₂; wollastonite Ca₃(SiO₃)₃ |
| 2½ (alternate 2 & 3) | **Amphibole** — double chain (inosilicate) | (Si₄O₁₁)ₙ⁶ⁿ⁻ | −3 per 2 Si | tremolite Ca₂Mg₅(Si₄O₁₁)₂(OH)₂; hornblende; crocidolite ("blue asbestos") Na₂Fe₃²⁺Fe₂³⁺(Si₄O₁₁)₂(OH)₂ |
| 3 | **Sheet / phyllo**silicate | (Si₂O₅)ₙ²ⁿ⁻ | −2 per 2 Si | talc; pyrophyllite; kaolinite; micas (muscovite, biotite); chrysotile |
| 4 | **Framework / tecto**silicate | (SiO₂)ₙ neutral | 0 | quartz; feldspars; zeolites; ultramarines (last two need Al) |

## 14.3 Ortho- and pyrosilicates

- **Orthosilicates** contain discrete SiO₄⁴⁻ tetrahedra held together only by cation–oxygen bonds. Structure depends on cation coordination number: Zn/Be are 4-coordinate (willemite, phenacite); Mg is 6-coordinate (forsterite); Zr is 8-coordinate (zircon). SiO₄⁴⁻ is the conjugate base of very weak **orthosilicic acid Si(OH)₄**, so orthosilicate minerals occur only with cations that give highly insoluble salts.
- **Pyrosilicates** — exactly one shared corner → Si₂O₇⁶⁻; only a handful of minerals. Some (epidote, vesuvianite) contain **both** SiO₄⁴⁻ and Si₂O₇⁶⁻ units.

## 14.4 Cyclic (ring) silicates

- Two shared O per tetrahedron closes a ring: **(SiₙO₃ₙ)²ⁿ⁻**. Common cases: 3-membered Si₃O₉⁶⁻ (benitoite BaTiSi₃O₉) and 6-membered Si₆O₁₈¹²⁻ (**beryl** Be₃Al₂Si₆O₁₈); 4- and 8-membered rings also occur.
- In beryl the stacked Si₆O₁₈ rings enclose **open channels** along the c-axis that can host Na⁺, Li⁺, Cs⁺, He, H₂O. **Emerald** = beryl + 1–2% Cr³⁺/V³⁺ (green); **aquamarine** = Fe-tinted beryl (blue-green).

## 14.5 Chain silicates — pyroxenes and amphiboles

- **Pyroxene (single chain):** two shared O per tetrahedron, repeat unit SiO₃²⁻, chain formula **(SiO₃)ₙ²ⁿ⁻**. The repeat length varies — every 2nd tetrahedron in enstatite/diopside, every 3rd in wollastonite (which is a **chain**, not a ring, despite its Si₃O₉ empirical unit). Parallel chains are bonded sideways through the cations, so pyroxenes **cleave along the chains at about 87°/93°**.
- **Amphibole (double chain):** two pyroxene chains cross-linked by extra shared oxygens; alternate tetrahedra share 2 and 3 corners → repeat **Si₄O₁₁⁶⁻**, chain formula **(Si₄O₁₁)ₙ⁶ⁿ⁻**. **OH⁻** groups sit in the ring cavities and belong to the cation part of the formula. Amphibole **cleavage angles are about 56°/124°** — a diagnostic difference from pyroxenes.

> **NOTE — same empirical formula, different structure.** A cyclic silicate and a single-chain silicate share the empirical formula **(SiO₃)ₙ²ⁿ⁻** — both are formal polymers of the metasilicate ion SiO₃²⁻. The ring is finite; the pyroxene chain is infinite. Single + double chain silicates together are the **inosilicates**.

## 14.6 Sheet silicates — clays, talc, micas, asbestos

- Three shared O per tetrahedron → infinite two-dimensional sheet, repeat Si₂O₅²⁻, sheet formula **(Si₂O₅)ₙ²ⁿ⁻**. Strong bonding **within** a sheet, weak forces **between** sheets → these minerals cleave into thin flakes, exactly like graphite.
- **Building principle:** a silicate sheet condenses with a hydroxide sheet — **gibbsite** Al(OH)₃ or **brucite** Mg(OH)₂ — by sharing apical oxygens.

| Layer type | Mineral | Comment |
|:--|:--|:--|
| 1 : 1 (one tetrahedral + one octahedral sheet) | **kaolinite**, balanced unit **Al₂Si₂O₅(OH)₄** (China clay) | electrically neutral layers, held together by hydrogen bonds |
| 2 : 1 (octahedral sheet between two tetrahedral) | **pyrophyllite** Al₂(OH)₂(Si₂O₅)₂; **talc** Mg₃(OH)₂(Si₂O₅)₂ | layers electrically neutral → talc is extremely soft and slippery (Mohs 1; soapstone) |
| 2 : 1 with Al-for-Si substitution | **micas** — muscovite KAl₂(AlSi₃O₁₀)(OH)₂ (colourless); biotite K(Mg,Fe)₃(AlSi₃O₁₀)(OH)₂ (dark); lepidolite (Li) | substitution makes the layers negative; interlayer **K⁺** clamps them → harder than talc, still cleaves into elastic transparent sheets |
| 2 : 1 swelling clays | **montmorillonite / bentonite / Fuller's earth**; **vermiculite** (Mg + Al substitution in talc) | low layer charge → take up interlayer water and exchangeable cations → swelling, ion exchange, thixotropy |
| rolled 1 : 1 | **chrysotile** Mg₃(OH)₄Si₂O₅ ("white asbestos") | sheet mismatch rolls the layers into fibrous tubes — structurally different from amphibole ("blue") asbestos |

> **SAFETY / EXAM NOTE:** the examinable point is structural — **chrysotile is a sheet silicate; crocidolite is a double-chain (amphibole) silicate**. Inhaled asbestos dust is a serious carcinogen; historical uses are context, not recommendations.

## 14.7 Framework silicates — feldspars, zeolites, ultramarines

- Sharing all four corners gives neutral **(SiO₂)ₙ**. Replacing framework Si⁴⁺ by **Al³⁺** (as an AlO₄⁵⁻ tetrahedron) puts −1 on the framework per substitution, balanced by cations (Na⁺, K⁺, Ca²⁺, Ba²⁺) in the cavities → **aluminosilicates**. Only large cations fit the framework cavities; Fe³⁺, Cr³⁺, Mn²⁺ (common in chain/sheet silicates) are excluded.

**Feldspars** — the most abundant rock-forming minerals (two thirds of igneous rock; granite = feldspar + mica + quartz):

| Class | Members |
|:--|:--|
| Orthoclase feldspars | orthoclase K[AlSi₃O₈]; celsian Ba[Al₂Si₂O₈] |
| Plagioclase feldspars (albite–anorthite solid solution) | albite Na[AlSi₃O₈] ⇌ anorthite Ca[Al₂Si₂O₈] |

Orthoclases are more symmetrical because K⁺ and Ba²⁺ fit the lattice exactly; the smaller Na⁺ and Ca²⁺ distort it (plagioclase).

**Zeolites** are open-framework aluminosilicates — treated in full in §14.8. Their frameworks enclose a regular system of molecule-sized cages and channels, which makes them ion exchangers, molecular sieves and shape-selective catalysts.

**Ultramarines** — coloured aluminosilicates with **no water** but enclosed anions (Cl⁻, SO₄²⁻, polysulphide S₂⁻/S₃⁻). Lapis lazuli's blue is due to the polysulphide radical anion.

| Ultramarine | Formula |
|:--|:--|
| ultramarine (blue) | Na₈[(AlSiO₄)₆]S₂ |
| sodalite | Na₈[(AlSiO₄)₆]Cl₂ |
| nosean | Na₈[(AlSiO₄)₆]SO₄ |

> **JEE TRAP:** All silicates trace back to corner-sharing SiO₄⁴⁻ tetrahedra sharing **1, 2, 3 or 4** oxygens per silicon. Isomorphous Al-for-Si substitution converts a neutral framework into a charged aluminosilicate. A ring and a single chain have the **same** empirical formula; a sheet silicate cleaves like graphite because bonding within a sheet is strong but between sheets is weak.

## 14.8 Zeolites — the open-framework aluminosilicates

Feldspars are *dense* frameworks — every cavity is filled, nothing can move through. **Zeolites** are frameworks built so openly that a connected system of **cages and channels of molecular dimensions (about 3–10 Å)** runs right through the crystal. The exchangeable cations and the "zeolitic" water sit loosely in those voids. This one structural difference — *porosity* — is the source of every zeolite application.

The name is from Greek *zeo* (to boil) + *lithos* (stone): the first zeolite (stilbite, A. Cronstedt, 1756) froths and "boils" as its water is driven off on the blowpipe.

### 14.8.1 Framework, formula and the aluminium rule

- The framework is built **only** from corner-sharing **(Si,Al)O₄ tetrahedra** — every oxygen bridges two tetrahedral centres, exactly as in quartz, so the framework itself is 3-D and, for the SiO₂ part, neutral.
- Each **AlO₄** tetrahedron replaces an SiO₄ and puts **−1** on the framework (Al is +3, Si is +4). That charge is neutralised by **exchangeable cations** — Na⁺, K⁺, Ca²⁺, Mg²⁺ — held electrostatically in the cavities, not bonded into the framework.
- **General formula:** **Mₓ/ₙ[(AlO₂)ₓ(SiO₂)ᵧ]·wH₂O**, where M is a cation of charge n; x = number of Al (= framework charge), y = number of Si, w = zeolitic water.
- **Löwenstein's (aluminium-avoidance) rule:** two AlO₄ tetrahedra are **never** joined through the same oxygen — there is no Al–O–Al linkage. An Al must always have Si as each of its four neighbours. Consequence: **Si/Al ≥ 1** in every zeolite; the Al-richest zeolites (A, X) sit exactly at Si/Al = 1 with strictly alternating Si and Al.

> **Key Point — dehydration is reversible.** Heating a zeolite drives off the zeolitic water **without collapsing the framework**, leaving an evacuated pore network. Cool it in moist air and the water returns. An ordinary salt hydrate cannot do this — its lattice reorganises when the water leaves. This reversible, framework-preserving dehydration is what makes a zeolite a re-usable desiccant and adsorbent.

### 14.8.2 How the pores are built — cages and windows

Zeolite frameworks are described by stacking a few **secondary building units**: 4-rings, 6-rings, the **double-4-ring (D4R)**, the **double-6-ring (D6R)**, and the **sodalite cage (β-cage)** — a truncated octahedron of 24 tetrahedra with 6 four-rings and 8 six-rings.

| Zeolite (framework type) | How the cages link | Window (ring size) | Free aperture | Typical Si/Al |
|:--|:--|:--:|:--:|:--:|
| **Zeolite A** (LTA) | sodalite cages joined through **D4R** → large α-cage | 8-membered | ≈ 4.1 Å (Na form) | 1 |
| **Faujasite — zeolite X / Y** (FAU) | sodalite cages joined through **D6R** → large supercage | 12-membered | ≈ 7.4 Å | X: 1–1.5 · Y: 1.5–3 |
| **ZSM-5** (MFI) | 5-ring chains → intersecting straight + zig-zag channels | 10-membered | ≈ 5.5 Å | ≫ 10 (up to ∞) |
| **Chabazite, natrolite, mordenite** (natural) | various | 8- or 12-ring | 3.7–7 Å | 1–5 |

- **The window, not the cavity, sets the size cut-off.** An 8-ring aperture (≈ 4 Å) admits H₂O, CO₂, NH₃, straight-chain alkanes; a 10-ring (≈ 5.5 Å) admits benzene and p-xylene; a 12-ring (≈ 7.4 Å) admits branched and cyclic molecules.
- **The exchange cation fine-tunes the aperture.** In zeolite A the K⁺ form ("**3A**", ≈ 3 Å) is tighter than the Na⁺ form ("**4A**", ≈ 4 Å), which is tighter than the Ca²⁺ form ("**5A**", ≈ 5 Å — two Na⁺ replaced by one Ca²⁺, so a site is vacated and the window opens).

> **Aperture of zeolite A** — Increasing order: 3A (K⁺) < 4A (Na⁺) < 5A (Ca²⁺)
> Note: fewer / smaller / higher-charge cations near the 8-ring → wider effective window.

### 14.8.3 Ion exchange and water softening

The framework cations are mobile and **stoichiometrically exchangeable** with cations in a contacting solution. Selectivity depends on cation charge, hydrated size and the framework Si/Al ratio.

**Base-exchange softening (Permutit process):**

Na₂Z(s) + Ca²⁺(aq) [hard water percolating through the bed] ⟶ CaZ(s) + 2Na⁺(aq)

Na₂Z(s) + Mg²⁺(aq) ⟶ MgZ(s) + 2Na⁺(aq)

**Regeneration (back-washing with brine):**

CaZ(s) + 2Na⁺(aq) [10% NaCl, large excess drives the equilibrium back] ⟶ Na₂Z(s) + Ca²⁺(aq)

- The bed removes **both** temporary and permanent hardness (unlike lime–soda, which needs different treatment for each) and gives water of near-zero hardness.
- Natural exchangers: **natrolite** Na₂[Al₂Si₃O₁₀]·2H₂O, **clinoptilolite** (used to strip **NH₄⁺** from sewage and **¹³⁷Cs⁺ / ⁹⁰Sr²⁺** from nuclear waste liquor because it holds those large low-charge cations tightly).
- Modern synthetic **zeolite A** is the **detergent "builder"** that replaced sodium tripolyphosphate: it sequesters the wash-water Ca²⁺/Mg²⁺ that would otherwise scum the surfactant, without the phosphate that caused lake eutrophication.

> **JEE TRAP:** zeolite softening is **ion exchange**, not precipitation — no sludge is formed, and the resin/bed is regenerated, not consumed. It exchanges cations only; anions (Cl⁻, SO₄²⁻) pass straight through, so Permutit-softened water is not de-ionised.

### 14.8.4 Molecular sieves — separation by size

A dehydrated zeolite adsorbs any molecule small enough to pass its windows and **completely excludes** larger ones — a sieve with pores of exact, uniform, sub-nanometre size. Adsorption is strong (the pore walls polarise the guest) yet fully reversible on heating or evacuation.

| Sieve (cation form) | Admits | Excludes | Use |
|:--|:--|:--|:--|
| **3A** (K–A) | H₂O only | almost everything else | drying reactive gases and solvents where even O₂/N₂ uptake is unwanted |
| **4A** (Na–A) | H₂O, CO₂, H₂S, SO₂, C₂H₆ | C₃H₈ and larger | general gas/solvent drying; CO₂ scrub |
| **5A** (Ca–A) | *n*-alkanes | iso- and cyclo-alkanes, benzene | **separating straight- from branched-chain hydrocarbons** to raise petrol octane; O₂/N₂ separation (N₂ held more strongly → pressure-swing adsorption gives 90–95% O₂ for medical use) |
| **13X** (Na–X) | most molecules up to ≈ 8 Å | large branched / polycyclic species | bulk drying, CO₂ removal from air ahead of cryogenic O₂ plants, sweetening (H₂S/mercaptan removal) from natural gas |

> **Key Point:** a molecular sieve works because the pore diameter is **fixed and uniform** — silica gel and activated alumina adsorb water too, but their pores are a broad range of sizes, so they cannot *sieve*. Only a crystalline zeolite gives a sharp size cut-off.

### 14.8.5 Shape-selective catalysis

Exchanging the cations for **H⁺** (via NH₄⁺ exchange then calcination: NH₄–Z → H–Z + NH₃↑) leaves a proton on a bridging **Si–O(H)–Al** oxygen. This is a **strong Brønsted acid site** — comparable to concentrated H₂SO₄ — anchored inside a pore. Because catalysis then happens *only* inside the channels, the pore geometry selects the chemistry three ways:

1. **Reactant selectivity** — only feed molecules that fit the pore reach the acid sites.
2. **Product selectivity** — only products small enough to diffuse back out are collected; bulkier ones stay trapped and crack further.
3. **Transition-state selectivity** — reactions whose transition state is too bulky for the cavity simply do not occur.

**ZSM-5 (10-ring, high-silica, strongly acidic) — the workhorse:**

CH₃OH [H–ZSM-5, about 400 °C; methanol-to-gasoline] ⟶ hydrocarbons (C₅–C₁₁, gasoline range) + H₂O

- The route runs CH₃OH ⇌ CH₃OCH₃ → light alkenes → aromatics + alkanes; the 5.5 Å pore caps the aromatic product near **1,2,4,5-tetramethylbenzene (durene)** and stops coke-forming polycyclics, so the catalyst stays active far longer than an amorphous acid.
- **Xylene isomerisation / toluene disproportionation → p-xylene:** *para*-xylene is slimmer than the *ortho* and *meta* isomers and diffuses out of the 10-ring channel far faster, so the product is enriched in the *para* isomer well beyond its equilibrium share.
- **Ethylbenzene** (benzene + ethene) and **cumene** (benzene + propene) are made over acidic zeolites, replacing AlCl₃ / H₃PO₄.

**Zeolite Y (12-ring, dealuminated "USY") — fluid catalytic cracking (FCC):** the acidic component of the FCC catalyst that turns heavy petroleum fractions into petrol and diesel. It replaced amorphous silica–alumina and gives more gasoline with much less coke.

> **Key Point — why a solid acid beats a liquid acid:** a zeolite catalyst is **filtered off** (no neutralisation, no acid waste), is **non-corrosive**, is **regenerated** by burning off coke in air, is **thermally stable** to ~600–800 °C, and is **shape-selective** — none of which H₂SO₄, HF or AlCl₃ can offer.

### 14.8.6 Where zeolites sit among the silicates

| Silicate class | Framework | Porosity | Behaviour |
|:--|:--|:--|:--|
| **sheet** (mica, clay) | 2-D layers | between layers only | swelling / cleaving / cation exchange *at surfaces* |
| **feldspar** | 3-D, dense | none | inert rock-former |
| **zeolite** | 3-D, open | continuous molecular channels | ion exchange, sieving, catalysis |

> **JEE TRAP:** clays (**sheet** silicates) and zeolites (**framework** silicates) are both cation exchangers, but for different structural reasons — clays exchange the loosely held interlayer cations between the sheets; zeolites exchange the cations sitting in the framework cavities. A feldspar, though also a framework aluminosilicate, exchanges nothing because it has no open channels.

# 15. Glass and cement — the two man-made silicates

## 15.1 What glass is

- Glass is an **amorphous solid** — a **supercooled liquid** frozen with no long-range order. It has **no fixed formula and no sharp melting point**: it *softens* over a temperature range (the working range), which is exactly what lets it be blown, drawn and moulded.
- A **glass-former** oxide (SiO₂, B₂O₃, P₂O₅, GeO₂) makes a random covalent network on cooling. Pure fused silica is superb but needs a working temperature ~1700 °C.
- **Network modifiers** (Na₂O, K₂O, CaO, MgO, BaO, PbO) each donate an O²⁻ that **breaks one Si–O–Si bridge** into two "non-bridging" Si–O⁻ …M⁺ ends. Fewer bridges → the network softens and the working temperature drops.
- **Intermediates** (Al₂O₃, ZnO) can act either way and are used to tune durability.
- **Alkali alone** (only Na₂O or K₂O + SiO₂) gives a **water-soluble** glass ("water glass", §14.1); **CaO** is added to make it insoluble and weather-resistant.

## 15.2 The common glasses

| Glass | Oxide family | Batch | Character | Use |
|:--|:--|:--|:--|:--|
| **soda-lime (crown)** | Na₂O·CaO·6SiO₂ | Na₂CO₃ + CaCO₃ + SiO₂ (carbonates → oxides + CO₂ on fusion) | cheap, easy-working, moderate durability | ~90 % of all glass — windows (float process), bottles, jars, cheap labware |
| **potash (hard) glass** | K₂O·CaO·SiO₂ | K₂CO₃ replacing Na₂CO₃ | **higher softening point** | combustion tubing, older chemical glassware |
| **lead (flint) glass** | K₂O·PbO·SiO₂ | add PbO (or Pb₃O₄) | **high refractive index and dispersion**, dense, soft, "rings" | optical lenses and prisms, "crystal" tableware, radiation-shielding windows |
| **borosilicate (Pyrex, Borosil)** | Na₂O·B₂O₃·Al₂O₃·SiO₂ | add borax/B₂O₃, low alkali | **very low thermal-expansion coefficient**, chemically resistant | labware, ovenware, telescope mirror blanks, pharma vials |
| **fused-silica (quartz) glass** | ~100 % SiO₂ | melt pure silica | **near-zero expansion**, transmits **UV**, service to ~1000 °C | UV cuvettes, halogen-lamp envelopes, semiconductor furnace tubes, optical fibre |
| **aluminosilicate** | Al₂O₃·CaO·SiO₂ | high alumina | very high softening point, chemically tough | halogen-lamp glass, cookware, some display cover glass |

> **Why Pyrex survives thermal shock:** thermal-shock resistance ∝ (strength) / (expansion coefficient × Young's modulus). B₂O₃ and low alkali give borosilicate an expansion coefficient about **⅓ that of soda-lime**, so a steep temperature gradient sets up much smaller internal stresses — it does not crack when heated unevenly.

## 15.3 Colour, and finishing the melt

- **Colouring agents** (transition-metal oxides / colloids dissolved in the melt): Fe³⁺ yellow-brown; Fe²⁺ pale blue-green; Fe²⁺+Fe³⁺ bottle-green; **Co²⁺ deep blue**; Cu²⁺ blue-green; Cr³⁺ green; Mn³⁺ purple; Ni brown-purple; **colloidal Cu → ruby red**; **colloidal Au → "purple of Cassius"**; CdS/CdSe → yellow-to-red; U compounds → fluorescent yellow-green ("vaseline glass").
- **Decolourisers** (a trace of Mn³⁺ or Se, or Co) mask the green Fe²⁺ tint by adding the complementary colour.
- **Fining agents** (small additions such as a sulphate or nitrate) release gas that sweeps the fine bubbles ("seeds") out of the melt.
- **Opacifiers** (a fluoride, SnO₂, Caₓ(PO₄)ᵧ) throw a fine crystalline dispersion → translucent **opal glass**.
- **Toughened / laminated / photochromic / self-cleaning** glasses are surface or additive modifications of ordinary soda-lime glass.

> **JEE TRAP:** the two great **man-made silicates are glass and cement**. Glass is a *solution* (no formula, no melting point, isotropic, conchoidal fracture) that sets by *cooling*; cement sets by *hydration* — a chemical reaction with water.

## 15.4 Portland cement

**Raw mix.** Limestone (CaCO₃) + clay/shale (aluminosilicate) — supplying **CaO, SiO₂, Al₂O₃, Fe₂O₃** in roughly the ratio 62 : 22 : 8 : 3 % — plus a little gypsum added *after* firing.

**Manufacture (the dry process).** The ground slurry passes down a **rotary kiln** to ≈ 1450 °C:

- 100–500 °C — water driven off;
- ~900 °C — **CaCO₃ → CaO + CO₂** (calcination);
- 1300–1450 °C — the oxides react in a partly molten "clinkering" zone to give hard grey **cement clinker** nodules.

The clinker is ground with **~3–5 % gypsum, CaSO₄·2H₂O** → grey powder, **Portland cement**.

**The four clinker phases** (cement chemists' shorthand: C = CaO, S = SiO₂, A = Al₂O₃, F = Fe₂O₃):

| Phase | Formula | Cement notation | Role |
|:--|:--|:--:|:--|
| tricalcium silicate ("alite") | 3CaO·SiO₂ | **C₃S** (≈ 50 %) | the main strength-giver; hydrates fast → **early strength** |
| dicalcium silicate ("belite") | 2CaO·SiO₂ | **C₂S** (≈ 25 %) | hydrates slowly → **late strength** (gains for months) |
| tricalcium aluminate | 3CaO·Al₂O₃ | **C₃A** (≈ 10 %) | flash-sets with water — **gypsum is added to slow it down** |
| tetracalcium aluminoferrite | 4CaO·Al₂O₃·Fe₂O₃ | **C₄AF** (≈ 8 %) | gives the grey colour; little strength |

**Setting and hardening (hydration).** On mixing with water the calcium silicates react:

2(3CaO·SiO₂) + 6H₂O ⟶ 3CaO·2SiO₂·3H₂O ("**C–S–H gel**") + 3Ca(OH)₂

- The **C–S–H gel** is a nanoporous, interlocking calcium-silicate-hydrate — it is what glues the aggregate together and carries almost all the strength.
- The free **Ca(OH)₂** keeps the pore water at pH ≈ 13, which passivates the steel reinforcement.
- **C₃A + gypsum → ettringite** (a calcium sulpho-aluminate) — a controlled early reaction that stops the aluminate from flash-setting.
- **"Setting" ≠ "drying":** cement hardens *by reacting with water*, so it will set and gain strength **under water** (indeed it must be kept damp — "curing" — for weeks).

**Special cements:** high-alumina (rapid, refractory), Portland-pozzolana (fly ash / slag replaces some clinker — cheaper, more durable), white cement (low Fe₂O₃), sulphate-resisting (low C₃A).

> **JEE points on cement:** (i) the shorthand **C₃S, C₂S, C₃A, C₄AF**; (ii) **gypsum retards the flash set** of C₃A; (iii) hydration gives **C–S–H gel + Ca(OH)₂**; (iv) it sets by **hydration**, not evaporation; (v) both glass and cement rest on the **SiO₄ tetrahedron** — glass a random silicate network, cement a hydrated calcium-silicate gel.

# 16. Silicones

Silicones (poly**siloxanes**) are synthetic polymers with an inorganic **–Si–O–Si–O–** backbone and organic groups (usually **–CH₃**, sometimes **–C₆H₅** or **–H**) on every silicon. The name is a historical misnomer: R₂SiO looks formally like a ketone R₂CO ("silicoketone" → "silicone"), but there is **no Si=O** — the unit is part of a chain.

## 16.1 Step 1 — the chlorosilanes

**Rochow (Müller–Rochow) direct process** — the industrial route:

2CH₃Cl(g) + Si(s) [Cu catalyst, ≈ 570 K] ⟶ (CH₃)₂SiCl₂  (major)  + MeSiCl₃ + Me₃SiCl + Me₄Si + MeSiHCl₂  (minor)

**Grignard route** — to make aryl or mixed chlorosilanes, or in the lab:

SiCl₄ + CH₃MgCl ⟶ CH₃SiCl₃ + MgCl₂  (and stepwise on to Me₂SiCl₂, Me₃SiCl, Me₄Si)

The mixed methylchlorosilanes boil within a few degrees of one another (~55–70 °C), so the plant's key operation is a very efficient **fractional-distillation train** that separates Me₂SiCl₂ (the bulk product) from Me₃SiCl and MeSiCl₃.

## 16.2 Step 2 — hydrolysis, and the functionality rule

Each Si–Cl hydrolyses to Si–OH, and the silanols then **condense** (lose H₂O) into Si–O–Si links:

R₂SiCl₂ + 2H₂O ⟶ R₂Si(OH)₂ + 2HCl ;   n R₂Si(OH)₂ [−(n−1)H₂O] ⟶ [–R₂Si–O–]ₙ

**The number of Si–Cl bonds (the "functionality") fixes what the monomer can build:**

| Monomer | Cl / OH | Functionality | Role |
|:--|:--:|:--:|:--|
| **R₃SiCl** | 1 | **1** | **chain end-cap** — after one link it is "dead"; two of them give hexamethyldisiloxane |
| **R₂SiCl₂** | 2 | **2** | **linear chain builder** (also cyclic 3-, 4-, 5-, 6-siloxanes) — the backbone unit |
| **RSiCl₃** | 3 | **3** | **cross-link / branch point** → ladder and 3-D network resins |
| **SiCl₄** | 4 | 4 | fully cross-linked SiO₂-like network |

> **The single most examined idea:** the **mole ratio R₃SiCl : R₂SiCl₂ : RSiCl₃** in the feed sets the product.
> - **more R₃SiCl** → shorter chains → thinner **oils**;
> - **almost all R₂SiCl₂** → long linear chains → **greases and gums** (→ rubber after cross-linking);
> - **more RSiCl₃ / SiCl₄** → dense cross-linking → hard **resins**.

> **JEE TRAP:** R₂Si(OH)₂ does **not** dehydrate to a "silicon ketone" R₂Si=O — silicon does not form stable pπ–pπ bonds (§5.3). The silanols condense to the **polymeric siloxane** instead (bond preference: Si–O–Si single bonds, never Si=O — the same reason SiO₂ is a network, not "O=Si=O"). RSiCl₃ hydrolysed alone → a **cross-linked 3-D network silicone resin**.

## 16.3 Why the properties are what they are

- The **Si–O backbone bond is very strong (~450–500 kJ mol⁻¹)** and the Si–C bond is strong too → **thermal stability and oxidation resistance** to ~250 °C (far beyond a hydrocarbon polymer).
- The backbone is **very flexible** (wide, easily bent Si–O–Si angle, low rotational barrier) → the material stays rubbery down to about **−90 °C** and its viscosity barely changes with temperature (a good **hydraulic / damping fluid**).
- The **methyl groups point outward** and shield the polar backbone, so the surface behaves like a hydrocarbon → **water-repellent (hydrophobic)** and **low surface tension** (→ release agent, anti-foam, spreads to a thin film).
- **Electrically insulating**, chemically inert, **physiologically inert and non-toxic** (medical grade).

## 16.4 Forms and uses

| Form | Made from | Use |
|:--|:--|:--|
| **fluids / oils** | short-to-medium linear chains | hydraulic and heat-transfer fluids, damping fluids, brake fluid, water-repellent sprays for masonry/textiles, car and shoe polish, cosmetics, **anti-foaming agents** (sewage plants, fermenters, frying oils), release agents for moulds |
| **greases** | oil + fumed-silica or soap thickener | high- and low-temperature lubrication (vacuum, aerospace, o-rings) |
| **elastomers (silicone rubber)** | long dimethylsiloxane gum + fumed-silica reinforcement, then lightly cross-linked | seals, gaskets, tubing, baking moulds, keypads, **medical implants and prostheses**; stays elastic **≈ −90 °C to +250 °C** — a far wider range than natural rubber |
| **resins** | RSiCl₃-rich, highly cross-linked | high-temperature electrical varnishes and laminates, weatherproof paints, encapsulants |

> **Key Point:** silicones are the practical demonstration of "silicon does σ, not π" — a flexible Si–O single-bonded chain, tunable from a thin oil to a hard resin purely by the **R₃/R₂/R₁ chlorosilane ratio**.

# 17. Hydrides of Group 14

The hydrides **MₙH₂ₙ₊₂** run from the endless catenated carbon series (all of organic chemistry) to a single barely-real PbH₄. The stark contrast between **inert alkanes** and **pyrophoric, hydrolysable silanes** is one of the clean tests of "why carbon is different".

## 17.1 Silanes

- Saturated series **SiₙH₂ₙ₊₂**. Straight and branched chains are known only to about **Si₈H₁₈** — Si–Si catenation is weak (§5.2) and the chains are attacked before they can grow. There are **no** silicon analogues of alkenes, alkynes or aromatics (no stable Si=Si, Si≡Si; §5.3).

**Preparation:**

2Mg(s) + Si(s) [Δ, no air] ⟶ Mg₂Si(s)   (a salt-like silicide)

Mg₂Si(s) + H₂SO₄(dil.) [or HCl] ⟶ **a mixture** of silanes (mainly SiH₄, then Si₂H₆, Si₃H₈, Si₄H₁₀ …) + MgSO₄

SiCl₄(l) + LiAlH₄ [dry ether, low T] ⟶ SiH₄(g) + LiCl + AlCl₃   — **clean, single-product, high-yield** (the preferred lab route)

Si₂Cl₆ + 6LiH ⟶ Si₂H₆ + 6LiCl

## 17.2 Why silanes are so much more reactive than alkanes

| | Alkane C–H | Silane Si–H |
|:--|:--|:--|
| **bond polarity** | C(δ−)–H(δ+) (EN: C 2.5 > H 2.1) | **Si(δ+)–H(δ−)** (EN: Si 1.8 < H 2.1) — **reversed** |
| **electrophilic site** | none | **Si** — open to attack by any nucleophile (OH⁻, H₂O) |
| **size of central atom** | small, well shielded | large — easy for a reagent to approach |
| **vacant d orbitals** | none | present — allow a low-energy 5-coordinate transition state |
| **result** | inert to air, water, dilute acid/base | **pyrophoric**, explodes with Cl₂, strong reducing agent, hydrolysed by a trace of base |

SiH₄(g) + 2O₂(g) [ignites in air] ⟶ SiO₂(s) + 2H₂O

Si₂H₆(g) + (4+n)H₂O [trace OH⁻ — even the alkali leached from glass is enough] ⟶ 2SiO₂·nH₂O + 7H₂(g)

SiH₄ + 4Cl₂ [explosive] ⟶ SiCl₄ + 4HCl

SiH₄ reduces AgNO₃ → Ag, KMnO₄ → MnO₂, and forms **[SiH₃]⁻** with KH — a nucleophilic silyl anion.

**Hydrosilylation** — the industrial reaction that couples silanes into the silicone/organosilicon world:

RCH=CH₂ + HSiCl₃ [Pt (Speier / Karstedt) catalyst] ⟶ RCH₂CH₂SiCl₃   (syn addition, B/Si at the terminal C)

> **JEE TRAP (assertion–reason):** "Silane is more reactive than methane" (true) / "both C and Si are sp³ in their hydrides" (true) — but the second statement **does not explain** the first. The real causes are the **reversed Si–H polarity** and **silicon's accessible d orbitals**. → mark (B).

## 17.3 Trends down the group

| Hydride series | Longest chain | Stability / reactivity |
|:--|:--|:--|
| CₙH₂ₙ₊₂ | unlimited | thermally robust, inert to water/acid/base |
| SiₙH₂ₙ₊₂ | ~Si₈ | pyrophoric, hydrolysed by base, strong reductants |
| GeₙH₂ₙ₊₂ | ~Ge₅ | less volatile and flammable; **not** hydrolysed by water or dilute acid/base (Ge–H less polar) |
| Sn: **SnH₄** (+ trace Sn₂H₆) | Sn₂ | thermally unstable (decomposes to Sn + H₂ near room T), strongly reducing |
| Pb: **PbH₄** | none | barely detected, made only in trace amounts electrochemically |

> **Thermal stability of MH₄** — Decreasing: **CH₄ ≫ SiH₄ > GeH₄ > SnH₄ > PbH₄**.
> Note: tracks the **falling M–H bond enthalpy** (C–H ≈ 413, Si–H ≈ 318, Ge–H ≈ 288, Sn–H ≈ 253 kJ mol⁻¹). Carbon's hydrides are a class apart — strong C–H *and* strong C–C.

> **Reducing power of MH₄** — Increasing: CH₄ ≪ SiH₄ < GeH₄ < SnH₄ < PbH₄ (opposite trend — the weaker the M–H bond, the more easily H is given up).

> **Boiling points of the tetrahydrides** — CH₄ (−161) < SiH₄ (−112) < GeH₄ (−88) < SnH₄ (−52 °C): a smooth rise with molar mass (dispersion forces); **no H-bonding anomaly** because none of C, Si, Ge, Sn is electronegative enough — contrast NH₃, H₂O, HF.

# 18. Halides of Group 14

## 18.1 Tetrahalides MX₄

- **All sixteen MX₄ are known except PbBr₄ and PbI₄** (§4.3). Almost all are **covalent, tetrahedral (sp³), volatile** liquids or gases — CF₄, SiF₄, CO... CCl₄ (b.p. 77 °C), SiCl₄ (57 °C), SnCl₄ (114 °C), GeCl₄ (83 °C).
- **Ionic exceptions: SnF₄ and PbF₄** — 3-D fluorine-bridged lattices, high-melting solids (SnF₄ sublimes ~705 °C; PbF₄ m.p. ~600 °C). Small F⁻ and strong M–F bonds tip them ionic.
- **Preparation:** direct halogenation of the element (§6.5); SiCl₄ from SiO₂ + C + Cl₂; CCl₄ from CS₂ + Cl₂.

| Property | Trend down the group | Reason |
|:--|:--|:--|
| covalent character | fairly constant (all covalent, SnF₄/PbF₄ aside) | small EN differences |
| **M–X bond enthalpy** | **falls** | larger, more diffuse orbitals |
| **thermal / oxidative stability** | **CX₄ > SiX₄ > GeX₄ > SnX₄ > PbX₄** | weaker M–X + inert-pair effect (PbX₄ decomposes to PbX₂ + X₂) |
| **ease of hydrolysis** | **CX₄ ≪ SiX₄ < GeX₄ < SnX₄ < PbX₄** | the heavier atom accepts the water lone pair more readily |

**Hydrolysis:**

SiCl₄(l) + 4H₂O(l) ⟶ Si(OH)₄ + 4HCl   (fumes in moist air; violent with liquid water)

SnCl₄ + 2H₂O ⟶ SnO₂·xH₂O + 4HCl   (suppressed by excess HCl → keeps SnCl₄ in solution)

SiF₄ + 2HF ⟶ H₂[SiF₆]   (SiF₄ hydrolysis stops here — the fluoro-complex is stable)

> **MOT LENS — SiCl₄ hydrolyses, CCl₄ does not.** A water O lone pair attacks Si into a **5-coordinate trigonal-bipyramidal transition state** (using a Si 3d orbital); HCl leaves, Si inverts, and four such steps give Si(OH)₄ — an SN2-at-silicon pathway. **Carbon has no accessible d orbital and cannot exceed four bonds, so there is no low-energy pathway**: CCl₄ is kinetically inert to water and only superheated steam forces CCl₄ + H₂O → COCl₂ + 2HCl. This is the cleanest single demonstration of the "carbon cannot expand its octet" rule.

> **[SiF₆]²⁻ exists but [SiCl₆]²⁻ does not:** (i) six large Cl⁻ cannot pack around the small Si; (ii) the Si–Cl → Si donor bond is far weaker than Si–F. (The same for [SnCl₆]²⁻ which *does* form — Sn is bigger.) The stability of [SiF₆]²⁻ is what lets HF dissolve glass.

**Charge-transfer colour:** SnI₄ and GeI₄ are **orange** (dark red as solids) — an I⁻ → M(IV) charge-transfer absorption reaching into the visible because the iodine and metal orbital energies are close. The chlorides and bromides are colourless. A standard "exception to *p*-block halides are colourless".

**PbI₄ / PbBr₄ do not exist** — Pb(IV) oxidises Br⁻ / I⁻ (§4.3); "PbBr₄" and "PbI₄" collapse to PbX₂ + X₂.

## 18.2 Catenated silicon halides

Heating SiX₄ with silicon gives catenated halides Si₂X₆, Si₃X₈ and higher. These Si–Si chains run **longer than the corresponding silanes** because pπ–dπ donation from filled halogen p orbitals into silicon d orbitals stabilises the chain (the chlorides reach further than the bromides, and the fluorides further still).

SiCl₄ + Si [Δ] ⟶ Si₂Cl₆ + higher SiₙCl₂ₙ₊₂

## 18.3 Dihalides MX₂

- **Stability rises sharply down the group** (the inert-pair effect, §4.2): **CX₂ ≪ SiX₂ < GeX₂ < SnX₂ < PbX₂** — the exact mirror of the MX₄ order.
- **CX₂** — only the fleeting carbenes (:CCl₂ etc.), never isolable.
- **SiX₂, GeX₂** — SiF₂ is made at high T and trapped cold, then polymerises; **GeCl₂ disproportionates on warming** (2GeCl₂ → Ge + GeCl₄) — Ge(II) still wants to be Ge(IV).
- **SnX₂** — genuine, stable solids. **SnCl₂** (white) partially hydrolyses in water to basic **Sn(OH)Cl** (why its solution goes cloudy and needs excess acid + a tin bar, §20.2); it is a **bent** molecule in the gas (∠Cl–Sn–Cl ≈ 95°, lone pair active) and a good **reducing agent** (§20.3). SnX₂ form halide complexes **[SnX₃]⁻**.
- **PbX₂** — all four are stable, and are the **normal** lead halides (PbF₂, PbCl₂, PbBr₂, PbI₂ — the last three sparingly soluble, PbI₂ a bright yellow "golden rain" precipitate). Made simply from **Pb²⁺(aq) + X⁻(aq)**.

> **Stability of MX₂** — Increasing: **CX₂ ≪ SiX₂ < GeX₂ < SnX₂ < PbX₂**.
> **Stability of MX₄** — the reverse: CX₄ > SiX₄ > GeX₄ > SnX₄ > PbX₄.
> Net: **GeX₄ ≫ GeX₂** (Ge(II) reducing / disproportionates) but **PbX₂ ≫ PbX₄** (Pb(IV) oxidising) — the crossover between Ge and Pb.

## 18.4 Carbon halides and fluorocarbons

CS₂ + 3Cl₂ [FeCl₃ catalyst] ⟶ CCl₄ + S₂Cl₂

CCl₄ + 2HF [SbCl₅/SbF₃ catalyst] ⟶ CCl₂F₂ + 2HCl (a Freon)

CCl₄ + H₂O [superheated steam only] ⟶ COCl₂ + 2HCl

- **CF₄** — exceptionally inert. **C₂F₄** polymerises under pressure to **PTFE (Teflon)**, (–CF₂–CF₂–)ₙ — chemically inert, low-friction, an electrical insulator, and stable to about 300 °C. Uses: non-stick cookware coating, gaskets, laboratory ware, razor-blade coating.

CHCl₃ + 2HF [SbF₃Cl₂ catalyst] ⟶ CHClF₂ [heat, −HCl] ⟶ CF₂=CF₂ [polymerise, high T + pressure] ⟶ (CF₂–CF₂)ₙ

- **Freons / CFCs** (CFCl₃, CF₂Cl₂, CF₃Cl) — unreactive, non-toxic refrigerants and aerosol propellants, but potent greenhouse gases and **ozone destroyers**:

CF₂Cl₂ [UV, upper atmosphere] ⟶ CF₂Cl• + Cl•

Cl• + O₃ [rapid] ⟶ ClO• + O₂

ClO• + O• ⟶ Cl• + O₂

**overall: 2O₃ ⟶ 3O₂** (Cl• is a catalyst — one radical destroys thousands of O₃ molecules before it is removed)

## 18.5 Cyanides and cyanates

CN⁻ is the major carbon-based ligand; this sits outside the Group 14 core but is useful for Advanced linkage.

Na + NH₃ ⟶ NaNH₂ + ½H₂

NaNH₂ + C [high T; Castner process] ⟶ NaCN + H₂

CH₄ + NH₃ [about 1200 °C, Pt] ⟶ HCN + 3H₂

4Au + 8CN⁻ + O₂ + 2H₂O [cyanide leaching of gold ore] ⟶ 4[Au(CN)₂]⁻ + 4OH⁻

(CN)₂ + 2OH⁻ [alkaline disproportionation, like a halogen] ⟶ CN⁻ + NCO⁻ + H₂O

- **HCN** — extremely poisonous, weakly acidic; its high boiling point comes from H-bonded association. Like CO, CN⁻ is a σ-donor / π-acceptor: the negative charge makes it a **stronger** σ-donor but a **weaker** π-acceptor than CO.
- **Isoelectronic pair:** NCO⁻ (cyanate) and CO₂ — both linear, N=C=O and O=C=O.

# 19. Complexes and internal pπ–dπ bonding

## 19.1 Coordination-number expansion 4 → 6

Carbon (2nd period) has a maximum of eight valence electrons and **cannot** exceed covalence 4, so carbon compounds are electron-precise and do not act as donors or acceptors. Si, Ge, Sn, Pb use energetically accessible d orbitals to reach coordination number 6:

SiF₄ + 2F⁻ ⟶ [SiF₆]²⁻ (sp³d², octahedral)

GeCl₄ + 2Cl⁻ ⟶ [GeCl₆]²⁻

SnCl₄ + 2Cl⁻ ⟶ [SnCl₆]²⁻

The heavier tetrahalides hydrolyse for the same reason — the central atom accepts a lone pair from water (Section 18.1). **[SiF₆]²⁻, [GeCl₆]²⁻ and [Sn(OH)₆]²⁻** are standard examples where the central atom is sp³d².

## 19.2 Trisilylamine vs trimethylamine — the classic MOT case

> **MOT LENS — N(SiH₃)₃ is planar; N(CH₃)₃ is pyramidal.**
> - In **N(CH₃)₃** nitrogen is **sp³**: three σ N–C bonds plus one lone pair → **pyramidal**. The localised lone pair makes trimethylamine a good donor (basic).
> - In **N(SiH₃)₃** nitrogen uses **sp²** for the three σ N–Si bonds; the "lone pair" now sits in a pure **p orbital perpendicular to the planar NSi₃ skeleton** and is donated into the empty **3d orbitals on silicon (pπ–dπ)**. This π delocalisation (i) flattens the molecule to **planar**, (ii) shortens the N–Si bonds, and (iii) removes the donor lone pair — so **N(SiH₃)₃ is a very weak base**.
> - Carbon has no 3d orbital, so pπ–dπ is impossible in N(CH₃)₃ — hence it stays pyramidal. About **200 compounds** are now thought to contain pπ–dπ bonds (also SiF₄, the silicon halides, siloxanes, SiO₂ itself).
> - The same picture explains why **(SiH₃)₂O is almost linear at oxygen** while (CH₃)₂O is bent, and why silyl compounds are consistently poorer donors than their carbon analogues.

## 19.3 Lead(IV) acetate — a selective Pb(IV) oxidant

Pb₃O₄ + 8CH₃COOH [glacial] ⟶ Pb(CH₃COO)₄ + 2Pb(CH₃COO)₂ + 4H₂O

Colourless, moisture-sensitive solid; a selective oxidant in organic chemistry, especially for the **oxidative cleavage of 1,2-diols (glycols)** into two carbonyl compounds (cf. periodic acid; used in carbohydrate structure determination).

# 20. Tin — metallurgy and reaction map

## 20.1 Occurrence, extraction and refining of tin

**Ore.** The only important ore is **cassiterite (tin stone), SnO₂**. The deposits also carry wolframite (Fe,Mn)WO₄, and sulphides of Fe, Cu and Pb.

**Concentration** (SnO₂ is dense, 7.0 g cm⁻³):

1. **Gravity separation** — hydraulic washing / shaking tables float off the lighter siliceous gangue.
2. **Magnetic separation** — removes the magnetic wolframite.
3. **Roasting** in a current of air (reverberatory furnace) — burns off S and As as SO₂ and As₂O₃, and converts sulphide impurities (FeS, CuS) to oxides that are later leached out with acid.

**Reduction (smelting).** The concentrated, roasted ore is mixed with **powdered anthracite/coke** and a little **limestone flux** and heated in a reverberatory (or electric-arc) furnace at ≈ 1200–1400 °C:

SnO₂(s) + 2C(s) [≈ 1300 °C] ⟶ Sn(l) + 2CO(g)

- Iron oxide is reduced along with the tin and dissolves in it as an Fe–Sn alloy (**"hardhead"**), which is skimmed off and re-smelted.
- Slag = CaSiO₃ / FeSiO₃.

**Refining** of the crude "block tin":

| Method | How | Removes |
|:--|:--|:--|
| **Liquation** | crude tin heated on a sloping hearth just above its m.p. (232 °C); molten Sn drains away | higher-melting Fe, Cu, W (left as "dross") |
| **Poling / boiling** | molten tin stirred with **green (wet) wood poles**; the steam churns the melt and floats oxide impurities to the top as skimmable scum | dissolved oxide impurities |
| **Electrolytic refining** | impure-Sn anode, pure-Sn cathode; electrolyte **H₂SiF₆ (or SnSO₄ + H₂SO₄)** + a cresol-sulphonic acid additive | everything → **99.99 % Sn**; anode mud yields Ag, Au, Bi, Sb |

## 20.2 Oxides SnO and SnO₂

- **SnO** grey; **SnO₂** white. **Both amphoteric.**

SnC₂O₄ [Δ, absence of air] ⟶ SnO + CO₂ + CO

SnC₂O₄ + O₂ [Δ, air] ⟶ SnO₂ + 2CO₂

Sn(OH)₂ [Δ, absence of air] ⟶ SnO + H₂O

SnCl₂ + 2KOH ⟶ Sn(OH)₂ + 2KCl

Sn + O₂ [strong heat] ⟶ SnO₂

**Amphoteric character:**

SnO + H₂SO₄ ⟶ SnSO₄ + H₂O

SnO + 2NaOH [cold] ⟶ Na₂[Sn(OH)₄]

2SnO + 2NaOH [hot; disproportionation] ⟶ Na₂SnO₃ + Sn + H₂O

SnO₂ + 2H₂SO₄ [hot concentrated — the **only** acid that dissolves SnO₂; not HCl, HNO₃ or even aqua regia] ⟶ Sn(SO₄)₂ + 2H₂O

SnO₂ + 2NaOH + 2H₂O ⟶ Na₂[Sn(OH)₆]

## 20.3 SnCl₂ / SnCl₄ and the preservation trick

Sn + 2HCl [hot concentrated] ⟶ SnCl₂ + H₂

SnCl₂·2H₂O [Δ] ⟶ Sn(OH)Cl + HCl (so anhydrous SnCl₂ cannot be obtained this way)

SnCl₄ + 4H₂O ⟶ Sn(OH)₄↓ (white) + 4HCl (fumes) (hydrolysis; suppressed by adding HCl)

**Why a piece of tin metal is kept in SnCl₂ solution:** air slowly oxidises Sn(II) to Sn(IV), and the added tin reduces it straight back:

6SnCl₂ + 2H₂O + O₂ [standing in air] ⟶ 2SnCl₄ + 4Sn(OH)Cl↓

SnCl₄ + Sn ⟶ 2SnCl₂

SnCl₄ + 2HCl ⟶ H₂[SnCl₆] (hexachlorostannic(IV) acid)

SnCl₄ + 2NH₄Cl ⟶ (NH₄)₂[SnCl₆] ("**pink salt**", a calico-printing mordant)

- SnCl₄·5H₂O = "**butter of tin**" (mordant); 5 water molecules.
- Making SnCl₄: Sn + 2Cl₂ (excess, dry, molten Sn); 2HgCl₂ + SnCl₂ → SnCl₄ + Hg₂Cl₂; Sn + aqua regia.

## 20.4 Sn(II) as a reducing agent — the named set

SnCl₂ + 2FeCl₃ ⟶ SnCl₄ + 2FeCl₂

SnCl₂ + 2CuCl₂ ⟶ SnCl₄ + 2CuCl↓ (white)

SnCl₂ + 2HgCl₂ ⟶ SnCl₄ + Hg₂Cl₂↓ (white)

SnCl₂(excess) + Hg₂Cl₂ ⟶ SnCl₄ + 2Hg↓ (grey/black)

2Bi(OH)₃ + 3Na₂[Sn(OH)₄] ⟶ 2Bi↓ (black) + 3Na₂[Sn(OH)₆]

SnCl₂ + 2PhNO₂ + 6HCl [reduction of nitro to amine] ⟶ 2PhNH₂ + SnCl₄ + 2H₂O + ...

K₂Cr₂O₇ + 3SnCl₂ + 14HCl ⟶ 2CrCl₃ + 3SnCl₄ + 2KCl + 7H₂O

SnCl₂ + I₂ ⟶ SnCl₂I₂ (used to estimate tin)

> **ANALYTICAL TRAP (SnCl₂ + HgCl₂):** limited SnCl₂ → white Hg₂Cl₂; **excess** SnCl₂ → grey/black Hg metal. Same chemistry underlies **"purple of Cassius"** — SnCl₂ reduces AuCl₃ to colloidal gold carried on hydrated tin(IV) oxide, a purple pigment and a test for Au(III).

## 20.5 Other tin facts

Sn + 2S [with NH₄Cl, Δ] ⟶ SnS₂ ("**mosaic gold**" — golden flaky solid, a bronzing pigment)

- **Sn²⁺ vs Sn⁴⁺ test:** Sn²⁺ gives brown/black SnS with H₂S, reduces HgCl₂, and gives a Prussian-blue colour with Fe³⁺/K₃[Fe(CN)₆]; Sn⁴⁺ gives yellow SnS₂ with H₂S.
- **α-Sn (grey, diamond structure) ⇌ β-Sn (white, metallic)** at 13.2 °C ("tin pest").

# 21. Lead — metallurgy, mixed oxides and Pb(IV) oxidation

## 21.1 Occurrence, extraction and refining of lead

**Ore.** Chief ore **galena, PbS** (usually **argentiferous** — it carries recoverable silver); also cerussite PbCO₃ and anglesite PbSO₄.

**Concentration.** **Froth flotation** — galena is *the* textbook flotation ore (pine oil frother + a xanthate/ethyl-collector; the sulphide surface goes to the froth, the siliceous gangue sinks).

**Roasting** (partial, in a current of air, on a sinter machine):

2PbS(s) + 3O₂(g) [Δ] ⟶ 2PbO(s) + 2SO₂(g)

PbS(s) + 2O₂(g) [Δ] ⟶ PbSO₄(s)

Roasting is **stopped when about two-thirds of the PbS is converted**, leaving a PbS + PbO + PbSO₄ mixture.

**Self-reduction (the "roast–reaction" / air-reduction process).** The air is cut off and the temperature raised; the **remaining PbS reduces its own oxide and sulphate**:

PbS(s) + 2PbO(s) [Δ] ⟶ 3Pb(l) + SO₂(g)

PbS(s) + PbSO₄(s) [Δ] ⟶ 2Pb(l) + 2SO₂(g)

- A little **carbon (coke) reduction** also runs in a blast/ore hearth: PbO + C → Pb + CO.
- The crude product is **"base bullion"** — lead containing Cu, Ag, Au, Bi, Sb, As, Sn, Zn.

**Refining of base bullion** — a sequence, each step removing one group of impurities:

| Step | Process | Removes | How it works |
|:--:|:--|:--|:--|
| 1 | **Liquation** (softening bed) | Cu (as dross / matte) | gently melt on a sloping hearth; Pb runs off, higher-melting Cu compounds stay |
| 2 | **Air oxidation ("softening")** | As, Sb, Sn | blow air through molten Pb; these oxidise to a skimmed slag (As₂O₃, Sb₂O₃, SnO₂) |
| 3 | **Desilverisation — Parkes process** | **Ag, Au** | stir in molten **Zn**; Ag/Au are far more soluble in Zn than in Pb → they rise in a **Zn–Ag crust** that is skimmed; the crust is distilled to recover Zn, leaving Ag–Pb → cupelled to silver. (Older **Pattinson process** = fractional crystallisation: pure Pb crystallises first, enriching the melt in Ag.) |
| 4 | **Debismuthising — Kroll–Betterton process** | **Bi** | add **Ca + Mg**; high-melting Ca₃Bi₂ / Mg₃Bi₂ float off as dross |
| 5 | **Electrolytic refining — Betts process** | everything → **99.99 %+ Pb** | anode = impure Pb, cathode = pure Pb, electrolyte = **PbSiF₆ + H₂SiF₆** (lead fluorosilicate) with gelatin; anode mud (Ag, Au, Bi, Sb, Cu) is worked up separately |

## 21.2 The four oxides

| Oxide | Colour / identity | Notes |
|:--|:--|:--|
| **PbO** | massicot (yellow) / litharge (red) | amphoteric; Pb(II). Fusing and cooling powdered yellow PbO gives red litharge. |
| **PbO₂** | dark brown | Pb(IV); amphoteric but a strong oxidant |
| **Pb₂O₃** | reddish-yellow (sesquioxide) | mixed oxide **PbO·PbO₂** |
| **Pb₃O₄** | bright red ("red lead", "minium", "sindoor") | mixed oxide **2PbO·PbO₂** |

## 21.3 Preparation

2Pb(NO₃)₂ [Δ] ⟶ 2PbO + 4NO₂ + O₂

PbCO₃ [Δ] ⟶ PbO + CO₂

PbO₂ / Pb₃O₄ / Pb₂O₃ [above 600 °C] ⟶ PbO + O₂

6PbO + O₂ [about 350 °C ⇌ 500 °C] ⇌ 2Pb₃O₄

2PbO + NaOCl [limited, hot alkaline solution] ⟶ Pb₂O₃ + NaCl

Pb₃O₄ + 4HNO₃ [cold dilute] ⟶ 2Pb(NO₃)₂ + PbO₂↓ + 2H₂O

Pb(CH₃COO)₂ + Ca(OCl)Cl + H₂O [excess bleaching powder removed by stirring with HNO₃] ⟶ PbO₂↓ (dark brown) + CaCl₂ + 2CH₃COOH

PbO can be reduced back to the metal:

PbO + C [Δ] ⟶ Pb + CO

PbO + H₂ [Δ] ⟶ Pb + H₂O

## 21.4 Mixed-oxide proof and PbO amphoterism

> **MIXED-OXIDE PROOF:** dilute HNO₃ dissolves only the **PbO** part of Pb₃O₄ / Pb₂O₃, leaving insoluble **brown PbO₂**.
> Pb₃O₄ + 4HNO₃ → 2Pb(NO₃)₂ + PbO₂↓ + 2H₂O confirms **Pb₃O₄ = 2PbO·PbO₂**.
> Pb₂O₃ + 2HNO₃ → Pb(NO₃)₂ + PbO₂↓ + H₂O confirms **Pb₂O₃ = PbO·PbO₂**.

PbO + 2HNO₃ ⟶ Pb(NO₃)₂ + H₂O

PbO + 2HCl ⟶ PbCl₂ + H₂O

PbO + 2NaOH + H₂O ⟶ Na₂[Pb(OH)₄]

## 21.5 PbO₂ — amphoteric but a powerful oxidant

PbO₂ + 4HCl [hot] ⟶ PbCl₂ + Cl₂ + 2H₂O

PbO₂ + 4HCl [ice-cold, saturated with Cl₂] ⟶ PbCl₄ + 2H₂O

PbCl₄ + 2HCl ⟶ H₂[PbCl₆]

2PbO₂ + 2H₂SO₄ [hot concentrated] ⟶ 2PbSO₄ + O₂ + 2H₂O

PbO₂ + 2NaOH + 2H₂O ⟶ Na₂[Pb(OH)₆]

PbO₂ + SO₂ [spontaneous] ⟶ PbSO₄

PbO₂ + H₂C₂O₄ + 2HNO₃ ⟶ Pb(NO₃)₂ + 2CO₂ + 2H₂O

5PbO₂ + 2Mn(NO₃)₂ + 6HNO₃ ⟶ 5Pb(NO₃)₂ + 2HMnO₄ + 2H₂O (colourless → purple; the classic test for Mn²⁺)

> **CORE REDOX IDEA:** Pb(IV) oxidises any oxidisable anion.
> - **with HCl** → Cl₂ (Cl⁻ oxidised)
> - **with hot concentrated H₂SO₄** → O₂ (water/oxide oxidised)
> - **with HNO₃** → no reaction (NO₃⁻ cannot be oxidised, Pb is already at its highest state) — so PbO₂ **survives** the HNO₃ test as the brown residue.
> The Mn(II) → MnO₄⁻ and oxalate oxidation tests must be done in **HNO₃**, not HCl or H₂SO₄, or the Pb(IV) is consumed by the acid's anion first.

## 21.6 Lead(IV) chloride and tetraethyllead

- PbCl₄ — yellow oil; exists only in cold concentrated Cl⁻; decomposes to PbCl₂ + Cl₂ on warming; stabilised as H₂[PbCl₆] or (NH₄)₂[PbCl₆].

4Na–Pb (alloy, 10% Na) + 4C₂H₅Cl [vapour] ⟶ Pb(C₂H₅)₄ + 4NaCl

**Tetraethyllead** — historic petrol "anti-knock" additive; a toxic, now-banned organolead compound. Treat as historical chemistry, not a current use.

> **PbX₂ vs PbX₄ stability** — PbX₂ ≫ PbX₄ for every halogen. PbF₄ is the most stable PbX₄ (strong Pb–F bonds); PbCl₄ needs cold excess Cl⁻; PbBr₄ and PbI₄ do not exist (Pb(IV) oxidises Br⁻/I⁻).

# 22. Uses of Group 14 elements and their compounds

## 22.1 Carbon and its allotropes

> **Key Point:** **Diamond** — abrasive for sharpening tools, rock drills, dies for drawing wire, jewellery (1 carat = 200 mg). **Graphite** — dry lubricant for hot machinery, electrodes for batteries and industrial electrolysis, pencil "lead", inert crucibles, neutron moderator, and — as graphite fibre in plastic composites — sports goods and aircraft parts. **Activated charcoal** — adsorbs poisonous gases and odours; water filters; air-conditioning odour control; gas masks. **Carbon black** — filler in automobile tyres, black pigment in inks. **Coke** — fuel and metallurgical reducing agent. **Fullerenes** — molecular electronics research (K₃C₆₀ superconductor), catalysis, drug-delivery cages.

## 22.2 Silicon, silica and silicates

> **Key Point:** **Ultrapure silicon** — transistors, diodes, solar cells, computer chips. **Ferrosilicon / silicon steel** — deoxidiser in steelmaking; acid-resistant and electrical (transformer-core) steels. **Sand** — mortar, cement, and glass. **Quartz** — optical lenses/prisms (UV-transparent), piezoelectric oscillators and clocks. **Silica gel** — desiccant, catalyst support, chromatography. **Kieselguhr** — filtration aid, absorbent for nitroglycerine (dynamite). **Sodium silicate (water glass)** — adhesive, detergent builder, fireproofing. **Zeolites** — water softeners (Permutit base-exchange), detergent builders (replacing phosphates), molecular sieves (3A/4A/5A/13X: drying, n-/iso-alkane separation, O₂ from air), and shape-selective solid-acid catalysts (H-ZSM-5 for methanol → gasoline and p-xylene; zeolite Y for catalytic cracking) — see §14.8. **Ceramics, bricks, cement, glass** are all silicate materials.

## 22.3 Silicones

> **Key Point:** water-repellent coatings for masonry and fabrics; car and shoe polish; transformer dielectric and hydraulic fluids; high- and low-temperature lubricants and greases; anti-foaming agents in sewage treatment, fermentation and cooking-oil frying; sealants; electrical insulation; and — because they are physiologically inert — surgical and cosmetic implants. Silicone rubber stays elastic from about −90 °C to +250 °C.

## 22.4 Tin and lead

> **Key Point:** **Tin** — tin-plating steel (food cans — tin is non-toxic and protects the iron), solder, bronze and pewter, SnO₂ glazes/opacifiers, "pink salt" and "butter of tin" dyeing mordants, mosaic gold (SnS₂) pigment. **Lead** — **lead–acid storage batteries** (Pb / PbO₂ electrodes in H₂SO₄), **radiation shielding** (X-ray aprons, γ-ray casks), cable sheathing, solder, "red lead" Pb₃O₄ anti-rust primer, litharge in lead "crystal" glass and glazes. The historic uses (lead pipes, **tetraethyllead** petrol additive, white-lead PbCO₃·Pb(OH)₂ paint, lead water tanks) are all abandoned because of cumulative **lead poisoning** (anaemia — Pb²⁺ blocks haem synthesis; nephropathy; neurotoxicity, especially in children).

## 22.5 Alloys of tin and lead

Tin and lead are soft, low-melting and un-reactive — ideal alloying metals.

| Alloy | Approximate composition | Property / use |
|:--|:--|:--|
| **soft solder** | Sn 50 / Pb 50 (or 60/40) | low, *narrow* melting range (~183–190 °C, near the 62 % Sn eutectic) → joining electrical and plumbing work (now largely **lead-free**: Sn–Ag–Cu) |
| **plumber's solder** | Sn 33 / Pb 67 | *wide* pasteable melting range → wiped joints |
| **bronze** | Cu ~90 / **Sn ~10** | hard, castable, corrosion-resistant → bearings, bells, statuary, coins (the Bronze Age) |
| **gun-metal** | Cu 88 / Sn 10 / Zn 2 | tough, machinable → valves, gears, marine fittings |
| **pewter** | **Sn ~90** / Sb / Cu (formerly Sn/Pb) | soft, workable, low-melting → tableware, ornaments |
| **Babbitt (white) metal** | Sn ~90 / Sb ~7 / Cu ~3 | hard antifriction crystals in a soft matrix → machine **bearings** |
| **type metal** | **Pb ~82 / Sb ~15 / Sn ~3** | *expands slightly on freezing* → sharp cast letters for printing |
| **fusible alloys** — Wood's (Bi 50 / Pb 25 / Sn 12.5 / Cd 12.5, m.p. 70 °C), Rose's (Bi/Pb/Sn, ~98 °C) | Bi-rich, very low melting | fire-sprinkler links, electrical fuses, low-temperature baths, dental/anatomical casts |
| **terne / tin-plate / solder-coat** | Sn (± Pb) surface layer on steel | corrosion-protective coatings |

> **JEE point:** two alloys that **expand on solidifying** (so they fill a mould sharply) are **type metal** (Pb–Sb–Sn) and Bi-rich fusible alloys — the same anomaly as water, Ga, Ge and grey tin.

# 23. p-Block overview and Group 14 connections

## 23.1 First-member anomaly across the block

B, C, N, O, F are all small, have unusually high ionisation enthalpy and electronegativity for their group, and **have no valence d orbital** (n = 2). Every anomaly traces to one of three consequences:

1. **Maximum covalency is capped at 4.** CCl₄ exists but "CCl₆²⁻" does not; NF₅, OF₆ are unknown, while PCl₆⁻, SF₆, [SiF₆]²⁻ exist for the heavier congeners.
2. **Strong pπ–pπ multiple bonding** is possible only for period-2 atoms (C=C, C≡C, N≡N, O=O, C=O). Heavier congeners avoid it and form single-bonded catenated or network structures — CO₂ molecular, SiO₂ network.
3. First members form **unusually strong homonuclear bonds** (the strong C–C bond drives catenation) except F–F and O–O, which are weakened by lone-pair repulsion.

## 23.2 Inert-pair effect across the heavier p-block

Down heavier p-block groups the valence ns² pair resists bonding and stays as a lone pair on the atom in its lower oxidation state, so **lower oxidation states become progressively more stable down a group**: Tl(I) > Tl(III); **Pb(II) > Pb(IV)**; Bi(III) > Bi(V). Consequences: PbO₂ and Tl³⁺ are strong oxidising agents (they "want" to fall to Pb²⁺ / Tl⁺). The cause is poor shielding by the inner d/f electrons plus relativistic contraction of the 6s orbital for the sixth-period elements.

## 23.3 Complete high-yield orders (memorise)

1. Covalent radius: **C < Si < Ge < Sn < Pb**.
2. First ionisation enthalpy: **C > Si > Ge > Pb > Sn**.
3. Electronegativity: **C > Si ≈ Ge ≈ Sn ≈ Pb**.
4. Metallic / electropositive character: **C < Si < Ge < Sn < Pb**.
5. Melting point: **C > Si > Ge > Pb > Sn**.
6. Catenation: **C ≫ Si > Ge ≈ Sn ≫ Pb**.
7. Stability of +2: **C < Si < Ge < Sn < Pb**; stability of +4: **Pb < Sn < Ge < Si ≈ C**.
8. Acidic strength of MO₂: **CO₂ > SiO₂ > GeO₂ > SnO₂ > PbO₂**.
9. Nature of MO: CO neutral; GeO acidic; SnO, PbO amphoteric.
10. Stability of MX₄: **CX₄ > SiX₄ > GeX₄ > SnX₄ > PbX₄**; of MX₂: the reverse.
11. Thermal stability of MH₄: **CH₄ ≫ SiH₄ > GeH₄ > SnH₄ > PbH₄**.
12. Reducing power: **Sn(II)**, Ge(II); oxidising power: **Pb(IV) / PbO₂**.

## 23.4 Important structures — recall gallery

1. **Diamond:** sp³, C–C 154 pm, 3-D network, six-membered chair rings.
2. **Graphite:** sp², sheets 141.5 pm apart internally, 340 pm between; delocalised π; ABAB (α) / ABCABC (β).
3. **C₆₀:** 20 hexagons + 12 pentagons, 60 vertices, 90 C–C edges, all C sp².
4. **CO:** linear, bond order 3, lone pair on C.
5. **CO₂:** linear, sp on C, two 3-centre-4-electron π systems, 115 pm, zero dipole.
6. **CO₃²⁻:** trigonal planar, sp², one delocalised π MO over 4 atoms.
7. **SiO₄⁴⁻:** regular tetrahedron, the silicate building block.
8. **SiO₂:** each Si sp³ to 4 O, each O bridging 2 Si, 3-D network of 8-membered rings.
9. **Silicone:** –Si–O–Si–O– chain, R groups on Si; R₂SiCl₂ builds, R₃SiCl caps, RSiCl₃ cross-links.
10. **[SiF₆]²⁻:** octahedral, sp³d²; **SnCl₂:** bent (95°), lone pair; **SnCl₄:** tetrahedral.
11. **N(SiH₃)₃:** planar (pπ–dπ); **N(CH₃)₃:** pyramidal.
12. **Fe₂(CO)₉:** 6 terminal + 3 bridging CO, one Fe–Fe bond, 12 Fe–C bonds.
13. **Pb₃O₄:** 2PbO·PbO₂; **Pb₂O₃:** PbO·PbO₂ — both proven by HNO₃ leaving brown PbO₂.

# 24. One-page reaction networks

## 24.1 Carbon / CO / CO₂

C ─(limited O₂)→ CO ─(O₂)→ CO₂ ─(Ca(OH)₂)→ CaCO₃ ─(excess CO₂ + H₂O)→ Ca(HCO₃)₂

CO ─(Cl₂, sunlight)→ COCl₂ ─(H₂O)→ CO₂ + HCl ; COCl₂ ─(NH₃)→ urea

CO ─(S)→ COS ; CO ─(metal oxide, Δ)→ metal + CO₂ ; CO ─(Ni, Δ)→ Ni(CO)₄ ; CO ─(I₂O₅)→ CO₂ + I₂

HCOOH ─(conc. H₂SO₄)→ CO ; K₄[Fe(CN)₆] ─(conc. H₂SO₄)→ CO

CaCO₃ ─(Δ)→ CaO + CO₂ ; C₆H₁₂O₆ ─(yeast)→ C₂H₅OH + CO₂

## 24.2 Silicon

SiO₂ ─(C, high T)→ Si ─(Cl₂)→ SiCl₄ ─(H₂O)→ Si(OH)₄ / SiO₂·xH₂O

Si ─(C, 2500 °C)→ SiC ; Si ─(2NaOH + H₂O)→ Na₂SiO₃ + H₂ ; Si ─(2F₂)→ SiF₄ ─(2HF)→ H₂[SiF₆]

SiCl₄ ─(LiAlH₄)→ SiH₄ ; Si ─(N₂, 1673 K)→ Si₃N₄

R₂SiCl₂ ─(H₂O)→ R₂Si(OH)₂ ─(condensation)→ silicone

SiO₂ ─(Na₂CO₃, fused)→ Na₂SiO₃ (water glass) ─(acid)→ silica gel

## 24.3 Tin

Sn ─(hot conc. HCl)→ SnCl₂ ─(Fe³⁺, Cu²⁺, Hg²⁺, Cr₂O₇²⁻)→ SnCl₄

Sn ─(hot conc. HNO₃)→ metastannic acid (SnO₂·xH₂O)

SnO ─(acid)→ Sn²⁺ ; SnO ─(cold NaOH)→ [Sn(OH)₄]²⁻ ; SnO₂ ─(NaOH/H₂O)→ [Sn(OH)₆]²⁻

Sn ─(S, NH₄Cl, Δ)→ SnS₂ (mosaic gold) ; SnCl₂ ─(AuCl₃)→ purple of Cassius

## 24.4 Lead

PbO ─(O₂, 350 °C)→ Pb₃O₄ ─(>500 °C)→ PbO + O₂

Pb₃O₄ ─(dil. HNO₃)→ Pb(NO₃)₂ + PbO₂↓

PbO₂ ─(HCl)→ PbCl₂ + Cl₂ ; PbO₂ ─(hot conc. H₂SO₄)→ PbSO₄ + O₂ ; PbO₂ ─(HNO₃)→ no reaction

Pb₃O₄ ─(glacial CH₃COOH)→ Pb(OAc)₄ ─(1,2-diol)→ 2 carbonyl compounds

# 25. JEE Advanced traps and derived tools

1. **ΔᵢH₁** order is C > Si > Ge > **Pb > Sn** — not a smooth decrease. "How many Group 14 elements have ΔᵢH₁ > Pb?" → **3**.
2. The size jump is large **C → Si**, small **Si → Ge** (3d¹⁰ shielding) and **Sn → Pb** (4f¹⁴ shielding).
3. Down the group **+2 stability rises**; read the redox role — **Sn(II) reducing, Pb(IV) oxidising**.
4. **CCl₄ resists hydrolysis** (no d orbital, no 5-coordinate pathway); **SiCl₄ hydrolyses instantly** via a 5-coordinate transition state.
5. **PbI₄ does not exist** → the self-consistent products are **PbI₂ + I₂**. PbBr₄ also unknown; PbF₄ is known.
6. **SnF₄ and PbF₄** are ionic high-melting solids — exceptions to "MX₄ is a volatile covalent liquid".
7. **Diamond** is kinetically stable but **thermodynamically less stable than graphite** (Δ_fH° diamond +1.90 kJ mol⁻¹, C₆₀ +38.1).
8. Graphite conducts **within** sheets; the weak interlayer contact does **not** conduct perpendicular. Conductivity graphite > diamond; thermal conductivity diamond > graphite.
9. **Fullerene Cₙ:** 12 pentagons always; hexagons **n/2 − 10**; C–C edges **3n/2**. C₆₀ → 90 C–C bonds, 20 hexagons.
10. **Intercalation** (donor or acceptor) can raise graphite's conductivity; **graphite oxide / fluoride lose it** — the π system is destroyed.
11. **Carbide hydrolysis identifies the anion:** CH₄ ⇒ C⁴⁻ (Be₂C, Al₄C₃); C₂H₂ ⇒ C₂²⁻; propyne ⇒ C₃ unit (Mg₂C₃).
12. **Interstitial carbides:** metallic lustre and conductivity **unchanged**; hardness and density **up**; malleability and ductility **down**.
13. **CO neutral, CO₂ acidic;** dioxide acidity falls down the group; **GeO acidic**, SnO/PbO amphoteric, CO neutral.
14. **CO₂ into limewater:** milky first, **clears in excess** (Ca(HCO₃)₂). SO₂ also does this — separate with acidified KMnO₄.
15. **Water gas = CO + H₂; producer gas = CO + N₂; coal gas = CO + H₂ + CH₄.** Calorific value: water gas > producer gas.
16. **M–CO bond** needs **both** σ-donation and π back-donation; back-donation weakens C–O and **lowers its IR stretching frequency**.
17. **Fe₂(CO)₉:** count each bridging CO twice → **12** Fe–C bonds; 6 terminal + 3 bridging.
18. **SiO₄⁴⁻ tetrahedral; CO₃²⁻ planar; CO₄⁴⁻ does not exist.** Silicate charge shortcut: x shared O per Si ⇒ O:Si = 4 − x/2, charge/Si = −(4 − x).
19. **Cyclic and single-chain silicates share the formula (SiO₃)ₙ²ⁿ⁻** — ring finite, chain infinite. Wollastonite Ca₃(SiO₃)₃ is a **chain**, not a ring.
20. **R₃SiCl** stopper · **R₂SiCl₂** builder · **RSiCl₃** cross-linker. R₂Si(OH)₂ condenses — it does **not** give R₂Si=O.
21. **Silanes ≫ alkanes in reactivity;** Si is **δ+** in Si–H because EN(Si) < EN(H); silanes are pyrophoric and hydrolysed by trace base.
22. **[SiF₆]²⁻ exists, [SiCl₆]²⁻ does not** — Cl⁻ too large + weak Si–Cl donor interaction.
23. **N(SiH₃)₃ planar** (N sp², p-lone pair → Si 3d, pπ–dπ, weak base); **N(CH₃)₃ pyramidal** (no d orbital on C, good base).
24. **Pb₂O₃ = PbO·PbO₂; Pb₃O₄ = 2PbO·PbO₂** — proven by dilute HNO₃ leaving brown PbO₂.
25. **PbO₂:** with HCl → Cl₂; with hot conc. H₂SO₄ → O₂; with HNO₃ → no reaction (survives as brown solid). Mn²⁺ and oxalate tests need HNO₃.
26. **α/β graphite:** ABAB vs ABCABC. Heating β → α; grinding α → β.
27. **SnI₄ and GeI₄ are orange** — charge-transfer absorption; an exception to "main-group halides are colourless".
28. **Catenation** is driven by the **high C–C bond enthalpy** (348 kJ mol⁻¹), not merely "carbon is small".
29. **A piece of Sn** is kept in SnCl₂ solution because air oxidises Sn(II); Sn + SnCl₄ → 2SnCl₂ regenerates it.
30. **GeX₄ > GeX₂** in stability, but **PbX₂ > PbX₄** — the inert-pair crossover sits between Ge and Pb.
31. **SnO₂ dissolves only in hot concentrated H₂SO₄** — not in HCl, HNO₃, or aqua regia.
32. **Mosaic gold** is SnS₂; **butter of tin** is SnCl₄·5H₂O; **pink salt** is (NH₄)₂[SnCl₆]; **purple of Cassius** is colloidal Au on hydrated SnO₂.
33. **¹⁴C half-life** — use **5770 y** for this syllabus (the modern accepted value is 5730 y).
34. Expanded covalence and hydrolysis at Si/Ge/Sn/Pb are explained by the **empty valence d orbitals** that carbon lacks — keep to that one picture in an answer rather than mixing bonding models.
35. **Zeolite = open framework aluminosilicate.** Löwenstein's rule (no Al–O–Al) ⇒ Si/Al ≥ 1. Water leaves reversibly without framework collapse. Permutit softening is **ion exchange** (regenerated with brine), not precipitation. The **window** ring-size, tuned by the exchange cation (3A < 4A < 5A), sets the molecular-sieve cut-off. The H-form has a strong **Si–O(H)–Al** Brønsted site → shape-selective catalysis (H-ZSM-5: methanol → gasoline, p-xylene; zeolite Y: catalytic cracking).

# 26. Ultra-fast final revision

**C** — small, electron-precise +4, pπ–pπ multiple bonds, catenation, three allotropes (diamond, graphite, fullerene). **Si** — network SiO₂, seven silicate classes, silicones, silanes, hydrolysable SiCl₄, semiconductor. **Ge** — metalloid bridge, +4 stable (GeX₄ > GeX₂), liquid expands on freezing. **Sn** — +2 and +4, **Sn²⁺ reducing**, SnO/SnO₂ amphoteric, tin pest, mosaic gold. **Pb** — +2 dominant, **Pb⁴⁺/PbO₂ oxidising**, mixed oxides, strong passivation.

| Recall trigger | Answer |
|:--|:--|
| ΔᵢH₁ order | C > Si > Ge > Pb > Sn |
| Dioxide acidity | CO₂ > SiO₂ > GeO₂ > SnO₂ > PbO₂ |
| Catenation | C ≫ Si > Ge ≈ Sn; Pb nil |
| Stable Pb state | +2 |
| Strong reductant | Sn(II) |
| Strong oxidant | Pb(IV) / PbO₂ |
| Non-hydrolysed tetrahalide | CCl₄ (normal conditions) |
| Absent tetrahalide | PbI₄ (→ PbI₂ + I₂) |
| Ionic MX₄ | SnF₄, PbF₄ |
| Fullerene pentagons | 12 (always) |
| C₆₀ C–C bonds | 90 |
| Silicate base unit | SiO₄⁴⁻ tetrahedron |
| Silicone chain builder | R₂SiCl₂ |
| Carbide → propyne | Mg₂C₃ |
| Carbide → CH₄ | Be₂C, Al₄C₃ |
| CO₂ test | limewater milky, clears in excess |
| CO antidote | carbogen (95% O₂ + 5% CO₂) |
| Graphite C–C in-sheet / interlayer | 141.5 pm / 340 pm |
| Diamond C–C | 154 pm |
| ¹⁴C half-life | 5770 y |
| Blood buffer pH | 7.26–7.42 |
| Planar silyl amine | N(SiH₃)₃ (pπ–dπ) |
| Only acid that dissolves SnO₂ | hot conc. H₂SO₄ |
| Fe₂(CO)₉ Fe–C bonds | 12 |

# 27. Chapter review questions (with worked answers)

Attempt each before reading the answer.

**27.1** State the hybridisation of carbon in (a) CO₃²⁻, (b) diamond, (c) graphite, (d) CO₂, (e) C₆₀.
**Answer:** (a) sp²; (b) sp³; (c) sp²; (d) sp; (e) sp².

**27.2** Write the resonance structures of CO₃²⁻ and HCO₃⁻, and give the C-O bond order in each.
**Answer:** CO₃²⁻ has three equivalent resonance structures, so all three C-O bonds are equal with bond order 4/3 approximately 1.33. HCO₃⁻ has two equivalent structures involving the two non-protonated oxygens (bond order about 1.5 there) plus one long C-OH single bond.

**27.3** Explain why CCl₄ is not hydrolysed by water but SiCl₄ is.
**Answer:** Silicon has accessible empty 3d orbitals, so it can expand its coordination number to 5 and accept a lone pair from water in a low-energy trigonal-bipyramidal transition state; repeated attack gives Si(OH)₄. Carbon has no valence d orbital and cannot exceed covalence 4, so no such pathway exists and CCl₄ is kinetically inert.

**27.4** Why is [SiF₆]²⁻ known but not [SiCl₆]²⁻?
**Answer:** Six large chloride ions cannot be packed around the small Si⁴⁺, and the Si-Cl donor interaction is much weaker than Si-F.

**27.5** Rationalise: (a) PbCl₄ is less stable than PbCl₂; (b) PbCl₄ forms from Pb(IV) and Cl₂ only in the cold; (c) PbI₄ does not exist.
**Answer:** All follow from the inert-pair effect - lead strongly prefers +2. (a) The Pb-Cl bond energy from four bonds barely repays the cost of promoting the 6s² pair. (b) Warming drives PbCl₄ to PbCl₂ + Cl₂. (c) I⁻ is a reductant, so Pb(IV) oxidises it and PbI₂ + I₂ form instead.

**27.6** Classify as acidic, basic, neutral or amphoteric: CO, SiO₂, CO₂, SnO₂, PbO₂, GeO₂, GeO, SnO, PbO.
**Answer:** CO neutral; CO₂, SiO₂, GeO₂ acidic; GeO acidic; SnO₂, PbO₂, SnO, PbO amphoteric.

**27.7** Explain the large decrease in ionisation enthalpy from C to Si.
**Answer:** The atomic size jumps from 77 pm to 118 pm, which more than offsets the increased nuclear charge, so the outer electron in silicon is far less tightly held.

**27.8** Give one industrial and one laboratory preparation each of CO and CO₂.
**Answer:** CO - industrial: steam over red-hot coke (water gas); laboratory: HCOOH with conc. H₂SO₄. CO₂ - industrial: heating limestone; laboratory: CaCO₃ + dilute HCl.

**27.9** What happens when (a) silicon is heated with methyl chloride and copper; (b) silica is treated with HF; (c) CO is heated with ZnO; (d) hydrated alumina is treated with NaOH?
**Answer:** (a) methylchlorosilanes form, chiefly (CH₃)₂SiCl₂ (Rochow process); (b) SiO₂ + 4HF gives SiF₄ + 2H₂O; (c) ZnO + CO gives Zn + CO₂; (d) Al(OH)₃ + NaOH gives Na[Al(OH)₄].

**27.10** Why is diamond used as an abrasive and graphite as a lubricant?
**Answer:** Diamond's rigid three-dimensional covalent network makes it the hardest known material. Graphite's sheets are held only by weak van der Waals forces and slide over one another.

**27.11** A closed fullerene has 84 carbon atoms. How many pentagons, hexagons and C-C bonds does it contain?
**Answer:** Pentagons = 12 (always); hexagons = 84/2 - 10 = 32; C-C bonds = 3 x 84 / 2 = 126.

**27.12** Count the Fe-C bonds in Fe₂(CO)₉.
**Answer:** 6 terminal CO + 3 bridging CO; each bridge makes two Fe-C contacts, so 6 + 2 x 3 = 12.

**27.13** 2.24 L of CO₂ at STP is passed through 100 mL of 1 M Ca(OH)₂. What is the final composition?
**Answer:** n(CO₂) = 0.1 mol and n(Ca(OH)₂) = 0.1 mol - an exact 1:1 ratio - so all the CO₂ forms 0.1 mol CaCO₃, which precipitates; there is no excess CO₂, so the milkiness does not clear.

**27.14** A carbide X on hydrolysis gives a gas that decolourises bromine water and gives a red precipitate with ammoniacal Cu₂Cl₂. Identify the carbon unit and an example carbide.
**Answer:** The gas is ethyne (C₂H₂), so the unit is the acetylide ion C₂²⁻; an example carbide is CaC₂.

**27.15** Explain why SiO₂ is a high-melting solid whereas CO₂ is a gas.
**Answer:** Carbon forms strong ppi-ppi C=O double bonds, giving discrete O=C=O molecules held only by weak dispersion forces. Silicon's diffuse 3p orbitals overlap poorly, so silicon forms four Si-O single sigma bonds and polymerises into a three-dimensional network with a very large lattice enthalpy.

**27.16** Write balanced equations for dilute and for hot concentrated HNO₃ acting on tin, and give the oxidation state of tin in each product.
**Answer:** 4Sn + 10HNO₃(dil.) gives 4Sn(NO₃)₂ + NH₄NO₃ + 3H₂O - Sn(II). Sn + 4HNO₃(hot conc.) gives SnO₂.xH₂O (metastannic acid) + 4NO₂ + H₂O - Sn(IV).

**27.17** How is the composition of a silicone polymer controlled during manufacture?
**Answer:** By the ratio of the chlorosilanes hydrolysed: R₃SiCl caps a chain end, R₂SiCl₂ extends the linear chain, RSiCl₃ introduces a cross-link. Raising the R₃SiCl fraction shortens the chains; raising the RSiCl₃ fraction stiffens the resin.

**27.18** Will Pb₃O₄ dissolve completely in dilute HNO₃? Give a reason.
**Answer:** No. Pb₃O₄ = 2PbO.PbO₂; dilute HNO₃ dissolves only the PbO part as Pb(NO₃)₂ and leaves brown PbO₂ undissolved, because NO₃⁻ cannot be oxidised by Pb(IV).

**27.19** Why does a tin(II) chloride solution always contain a piece of tin metal?
**Answer:** Atmospheric O₂ slowly oxidises Sn²⁺ to Sn⁴⁺; the tin metal reduces it straight back (SnCl₄ + Sn gives 2SnCl₂), keeping the solution as Sn(II).

**27.20** Explain why N(SiH₃)₃ is planar but N(CH₃)₃ is pyramidal.
**Answer:** In N(SiH₃)₃ nitrogen is sp²; its lone pair sits in a pure p orbital and is donated into empty silicon 3d orbitals (ppi-dpi), which flattens the molecule and makes it a weak base. Carbon has no 3d orbital, so N(CH₃)₃ keeps its sp³ lone pair and stays pyramidal.

**27.21** 12 g of graphite is burned in a limited air supply so that only CO forms. What volume of CO at STP is produced?
**Answer:** n(C) = 1 mol, so n(CO) = 1 mol and V = 22.4 L.

**27.22** What is carbogen and why is it used for CO poisoning?
**Answer:** A mixture of 95% O₂ + 5% CO₂. The high O₂ partial pressure displaces CO from haemoglobin by mass action; the CO₂ stimulates the respiratory centre to raise the breathing rate.

**27.23** Distinguish chrysotile asbestos from crocidolite asbestos structurally.
**Answer:** Chrysotile is a sheet (phyllo)silicate in which sheet mismatch rolls the layers into fibrous tubes; crocidolite is a double-chain (amphibole) silicate. Both are fibrous, but the silicate framework differs.

**27.24** Why does SnCl₂ give a white precipitate with HgCl₂ that turns grey when more SnCl₂ is added?
**Answer:** Limited SnCl₂ reduces HgCl₂ to white Hg₂Cl₂; excess SnCl₂ reduces Hg₂Cl₂ further to grey/black metallic mercury.

**27.25** Arrange CH₄, SiH₄, GeH₄, SnH₄, PbH₄ in order of increasing thermal stability and explain.
**Answer:** PbH₄ < SnH₄ < GeH₄ < SiH₄ << CH₄. The M-H bond weakens and the M-H overlap worsens as the atom grows; carbon's small size and strong C-H bond put CH₄ in a class of its own.

**27.26** A soluble salt X gives an alkaline solution, swells to a glassy mass on heating, and on adding conc. H₂SO₄ deposits white crystals of a weak, soapy-feeling acid Y. Identify X and Y, and name the Group 14 analogue.
**Answer:** X = borax Na₂B₄O₇.10H₂O and Y = boric acid H₃BO₃ (a Group 13 link). The exact Group 14 analogue is sodium silicate, which gives silicic acid on acidification.

**27.27** Why is graphite oxide non-conducting while C₈K conducts better than graphite?
**Answer:** C₈K is a donor intercalate - potassium gives up an electron to the graphite conduction band, adding carriers, and the flat sp² sheets are preserved. Graphite oxide carries C-OH and C-O-C groups that rehybridise carbon toward sp³ and break the delocalised pi system.

**27.28** Write the reaction of PbO₂ with (a) hot HCl, (b) hot conc. H₂SO₄, (c) HNO₃, and explain the pattern.
**Answer:** (a) PbO₂ + 4HCl gives PbCl₂ + Cl₂ + 2H₂O; (b) 2PbO₂ + 2H₂SO₄ gives 2PbSO₄ + O₂ + 2H₂O; (c) no reaction. Pb(IV) oxidises Cl⁻ to Cl₂ and oxide/water to O₂, but NO₃⁻ cannot be oxidised, so PbO₂ is inert to HNO₃ and survives as the brown residue.

**27.29** How many of these are planar or linear: CO₃²⁻, COCl₂, SiO₄⁴⁻, C₃O₂, CS₂, HCO₃⁻?
**Answer:** 5 - CO₃²⁻ planar, COCl₂ planar, C₃O₂ linear, CS₂ linear, HCO₃⁻ has a planar CO₃ skeleton; SiO₄⁴⁻ is a regular tetrahedron, not planar.

**27.30** Explain why the first ionisation enthalpy of lead is greater than that of tin.
**Answer:** Lead follows the lanthanoids; the poorly shielding 4f¹⁴ (and 5d¹⁰) electrons let the effective nuclear charge felt by the 6p electron rise, so it is held more tightly than the 5p electron of tin - the same d/f-contraction effect that keeps Pb barely larger than Sn.


# 28. Chapter coverage checklist

Use this as a last-night revision sweep — for each line, recall the reasoning, not just the fact. Every point is developed earlier in the chapter (section numbers in brackets).

## 28.1 Trends and the anomaly

- Electron configuration ns²np²; group oxidation state +4; the +2 state and its rise down the group [2, 4].
- Uneven size increase: big C→Si jump, small Si→Ge (d-block contraction) and Sn→Pb (lanthanoid contraction) steps [3.1].
- ΔᵢH₁ order **C > Si > Ge > Pb > Sn** — and why Pb > Sn [3.2].
- Electronegativity and metallic/electropositive character down the group [3.3].
- Physical state, allotropy, melting and boiling point orders; density [3.4].
- Why every M(IV) compound is covalent — sum of the first four ionisation enthalpies [4.1].
- Inert-pair effect: cause, and its redox consequence (Sn(II) reducing, Pb(IV) oxidising) [4.2].
- Why PbI₄ does not exist — the energetics argument → PbI₂ + I₂ [4.3].
- The three roots of carbon's anomaly: covalence capped at 4, strong pπ–pπ, strong C–C bond [5.1–5.3].
- Catenation tracks the M–M bond enthalpy; the B ↔ Si diagonal link [5.2, 5.4].

## 28.2 The elements and the allotropes

- Element reactivity toward air, water/steam, acids, alkalis, halogens, and other non-metals — with conditions [6].
- Diamond: structure, hardness, insulator, thermal conductivity, C–C 154 pm, synthesis [7.1].
- Graphite: sheet structure, 141.5 pm in-plane vs 340 pm between, anisotropic conduction, thermodynamically the stable allotrope, α/β stacking [7.2].
- Fullerenes: preparation, C₆₀ topology (12 pentagons always, hexagons n/2 − 10, edges 3n/2), reactivity [7.3].
- Coke, charcoal, activated charcoal, carbon black, gas carbon — all impure microcrystalline forms [7.4].
- Graphite intercalation (conductivity up), graphite oxide and fluoride (conductivity destroyed) [7.5].

## 28.3 Carbon compounds

- Carbides: the three classes; hydrolysis identifies the carbon anion (CH₄ / C₂H₂ / propyne); interstitial-carbide property changes [8].
- CO: preparations (including from methanoic acid and from the hexacyanoferrate(II)); water / producer / coal gas; detection and estimation; the MO picture and bond order 3; toxicity and carbogen [9.1, 9.2].
- CO as a reducing agent (blast furnace) and as a ligand — synergic σ-donation + π back-donation; C–O stretch drops on coordination; Fe₂(CO)₉ has 12 Fe–C bonds [9.3].
- COCl₂, COS, CS₂, C₃O₂; CS₂ → xanthate → viscose rayon [9.4, 11].
- CO₂: linear structure, zero dipole, resonance; carbonic acid, the blood buffer, the greenhouse effect; uses [10.1, 10.2].
- Carbonates and hydrogencarbonates: two salt series, solubility, thermal-stability trend, the limewater test (clears in excess CO₂) [10.3].
- CO₃²⁻ is planar and CO₄⁴⁻ cannot exist; contrast SiO₄⁴⁻ [10.3].

## 28.4 Silicon, silica and the silicates

- Silicon: metallurgical-grade extraction; purification to 11-nines (Siemens trichlorosilane → polysilicon; zone refining and its k < 1 argument; Czochralski single-crystal ingot); reactivity — inert except to F₂, hot alkali and HF [12].
- Silica: the giant network, polymorphs, vitreous silica, silica gel, kieselguhr, piezoelectricity; why SiO₂ is a solid but CO₂ a gas; reactions with HF and with fused alkali [13].
- The silicate master rule: classification by shared corners per SiO₄ tetrahedron; O:Si = 4 − x/2, charge/Si = −(4 − x) [14.1].
- The seven classes with type minerals: ortho, pyro, cyclic, single chain, double chain, sheet, framework [14.2–14.7].
- A ring and a single chain share the empirical formula (SiO₃)ₙ²ⁿ⁻; pyroxene vs amphibole cleavage angles [14.4, 14.5].
- Sheet silicates: 1:1 vs 2:1 layers, Al-for-Si substitution and interlayer cations, swelling clays, chrysotile vs crocidolite [14.6].
- Framework silicates: aluminosilicates, feldspars (dense), ultramarines [14.7].
- **Zeolites in depth:** framework + general formula + Löwenstein's rule; cages and windows (zeolite A, faujasite X/Y, ZSM-5); reversible dehydration; ion exchange and the Permutit softening cycle; molecular sieves 3A/4A/5A/13X; H-form Brønsted acidity and the three shape-selectivities; MTG and FCC [14.8].
- Water glass — preparation and uses [14.1].

## 28.5 Glass, silicones, hydrides, halides, complexes

- Glass: supercooled solution (no formula, no m.p.); glass-formers vs **network modifiers** (break Si–O–Si bridges); the families (soda-lime, potash, lead/flint, borosilicate, fused-silica, aluminosilicate) with batch and use; why Pyrex resists thermal shock (low α); colouring/decolourising/fining/opacifying agents [15.1–15.3].
- **Portland cement:** raw mix (limestone + clay), rotary-kiln clinkering, grinding with gypsum; the four phases **C₃S / C₂S / C₃A / C₄AF**; hydration → **C–S–H gel + Ca(OH)₂**; gypsum retards the C₃A flash-set; sets by hydration, not drying [15.4].
- Silicones: Rochow direct process → chlorosilanes; hydrolysis + condensation; the **functionality rule** (R₃SiCl caps → oils, R₂SiCl₂ builds → gums/rubber, RSiCl₃ cross-links → resins) set by the chlorosilane ratio; why no Si=O; property→cause list (strong flexible Si–O, outward CH₃); oils/greases/elastomers/resins and their uses; silicone rubber −90 to +250 °C [16].
- Silanes: preparation; why they are far more reactive than alkanes (reversed Si–H polarity, accessible d orbitals); thermal-stability order down the group [17].
- Tetrahalides: all MX₄ except PbI₄; SnF₄ and PbF₄ are ionic solids; the SiCl₄ vs CCl₄ hydrolysis mechanism; charge-transfer colour of SnI₄/GeI₄; catenated silicon halides [18.1, 18.2].
- Dihalides: stability rises down the group; bent gas-phase SnCl₂ [18.3].
- Fluorocarbons: PTFE; the Freon–ozone catalytic cycle [18.4].
- Cyanides and cyanates as carbon-based ligands; isoelectronic NCO⁻ / CO₂ [18.5].
- Coordination-number expansion 4 → 6 for the heavier elements ([SiF₆]²⁻, [GeCl₆]²⁻, [Sn(OH)₆]²⁻) [19.1].
- N(SiH₃)₃ planar vs N(CH₃)₃ pyramidal — the pπ–dπ explanation [19.2].
- Lead(IV) acetate — a selective oxidant, glycol cleavage [19.3].

## 28.6 Tin and lead

- **Metallurgy of tin:** cassiterite → gravity + magnetic concentration → roast → carbon reduction (SnO₂ + 2C → Sn + 2CO; "hardhead" Fe–Sn); refining by liquation, poling, electrolysis (H₂SiF₆) [20.1].
- **Metallurgy of lead:** galena → froth flotation → partial roast (stop at ⅔) → **self-reduction** (PbS + 2PbO → 3Pb + SO₂; PbS + PbSO₄ → 2Pb + 2SO₂); base-bullion refining — liquation (Cu), air oxidation (As/Sb/Sn), **Parkes** desilverisation (Zn), **Betterton** debismuthising (Ca/Mg), **Betts** electrolysis (PbSiF₆) [21.1].

- SnO / SnO₂ — both amphoteric; preparations and reactions [20.2].
- SnCl₂ and SnCl₄ — hydrolysis, why anhydrous SnCl₂ cannot be got by evaporation, why a tin bar is kept in the solution; hexachlorostannate, pink salt, butter of tin [20.3].
- Sn(II) as a reducing agent — the full named set (Fe³⁺, Cu²⁺, Hg²⁺, Cr₂O₇²⁻, Bi(III), nitro → amine); purple of Cassius; mosaic gold [20.4, 20.5].
- The four lead oxides; PbO amphoterism; the mixed-oxide proof for Pb₃O₄ and Pb₂O₃ (dilute HNO₃ leaves brown PbO₂) [21.2–21.4].
- PbO₂: amphoteric but strongly oxidising — HCl → Cl₂, hot conc. H₂SO₄ → O₂, HNO₃ → no reaction; the Mn²⁺ → MnO₄⁻ test must use HNO₃ [21.5].
- PbCl₄ and tetraethyllead as historical chemistry [21.6].

## 28.7 Synthesis and revision layers

- Uses of every element and compound; the **alloys** of tin and lead (solder, bronze, pewter, Babbitt, type metal, fusible alloys) [22].
- p-block first-member anomaly and inert-pair effect across the whole block; the complete high-yield order set; the structure recall gallery [23].
- One-page reaction networks for carbon, silicon, tin and lead [24].
- The JEE-trap list and the derived tools (fullerene topology, the silicate charge shortcut) [25].
- The ultra-fast final-revision table [26].
- The 30 worked review questions [27].

`;
