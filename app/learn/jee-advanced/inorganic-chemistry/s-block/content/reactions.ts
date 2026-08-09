import { md, visual, type SBlockSection } from "./types";

export const REACTIONS_SECTIONS: SBlockSection[] = [
  {
    id: "oxygen-chemistry",
    label: "9. Oxides, Peroxides, Superoxides & Ozonides",
    blocks: [
      md(String.raw`
## 9.1 Identify the oxygen species first

| Ion | Formula | O oxidation state | O–O bond order | Magnetic behaviour |
|---|---|---:|---:|---|
| Oxide | $\mathrm{O^{2-}}$ | −2 | — | diamagnetic |
| Peroxide | $\mathrm{O_2^{2-}}$ | −1 | 1 | diamagnetic |
| Superoxide | $\mathrm{O_2^-}$ | −1/2 | 1.5 | paramagnetic |
| Ozonide | $\mathrm{O_3^-}$ | −1/3 average | delocalised | paramagnetic |

The peroxide ion, $\mathrm{O_2^{2-}}$, has 18 valence electrons; filling the molecular-orbital diagram to that count gives a filled $\pi^*$ set and bond order 1 — all electrons paired, diamagnetic. The superoxide ion has one fewer electron (17), leaving one unpaired electron in a $\pi^*$ orbital: bond order 1.5, paramagnetic.

## 9.2 Product formed on combustion in excess oxygen

$$\mathrm{4Li+O_2\rightarrow2Li_2O}\qquad\mathrm{2Na+O_2\rightarrow Na_2O_2}\qquad\mathrm{K+O_2\rightarrow KO_2}\ \ (\text{also Rb, Cs})$$

This is **cation–anion size matching**: small $\mathrm{Li^+}$ stabilises the compact $\mathrm{O^{2-}}$ ion; large $\mathrm{K^+}$, $\mathrm{Rb^+}$ and $\mathrm{Cs^+}$ stabilise the diffuse superoxide ion. These are the *characteristic major* products in excess oxygen, not a claim that no other oxygen compound of these metals can ever be prepared under other conditions.

`),
      visual("oxygen-species"),
      md(String.raw`
## 9.3 Sodium oxide and sodium peroxide

Pure $\mathrm{Na_2O}$ is made under controlled oxygen supply, or by reducing the peroxide with more sodium: $\mathrm{Na_2O_2+2Na\rightarrow2Na_2O}$. It is a white, ionic, basic oxide: $\mathrm{Na_2O+H_2O\rightarrow2NaOH}$.

$\mathrm{Na_2O_2}$ (pale yellow, diamagnetic) is the characteristic combustion product in excess $\mathrm{O_2}$:

$$\mathrm{Na_2O_2+2H_2O\rightarrow2NaOH+H_2O_2}\ (\text{cold})\qquad 2\mathrm{Na_2O_2+2CO_2\rightarrow2Na_2CO_3+O_2}$$
$$\mathrm{Na_2O_2+CO\rightarrow Na_2CO_3}\qquad\mathrm{Na_2O_2+H_2SO_4\ (cold,\ dilute)\rightarrow Na_2SO_4+H_2O_2}$$

With hot, concentrated acid the liberated $\mathrm{H_2O_2}$ itself decomposes, so the product mix shifts toward $\mathrm{O_2}$ rather than isolable peroxide. $\mathrm{Na_2O_2}$ is used industrially to bleach wood pulp, paper, cotton and linen, and reacts violently with reducing agents (Al powder, sulfur, organics) — it must never be handled as an inert oxidant.

## 9.4 Potassium superoxide

$$\mathrm{K+O_2\rightarrow KO_2}$$

$\mathrm{KO_2}$ is yellow-orange and paramagnetic.

$$\mathrm{2KO_2+2H_2O\rightarrow2KOH+H_2O_2+O_2}\qquad 4\mathrm{KO_2+2CO_2\rightarrow2K_2CO_3+3O_2}$$

It both removes carbon dioxide **and** releases oxygen — a genuinely dual-purpose reaction that makes it valuable in submarines, spacecraft and breathing apparatus. Four moles of $\mathrm{KO_2}$ release three moles of $\mathrm{O_2}$ while absorbing two moles of $\mathrm{CO_2}$.

## 9.5 The full potassium oxygen family

Under controlled conditions potassium forms an unusually complete set of oxygen-rich solids:

| Compound | Oxygen species | Typical description |
|---|---|---|
| $\mathrm{K_2O}$ | oxide | white to pale yellow |
| $\mathrm{K_2O_2}$ | peroxide | white |
| $\mathrm{K_2O_3}$ | "sesquioxide" (mixed oxide/superoxide-like species) | red solid |
| $\mathrm{KO_2}$ | superoxide | bright yellow to orange |
| $\mathrm{KO_3}$ | ozonide | orange-red |

Passing measured amounts of oxygen through a blue solution of potassium in liquid ammonia can step through this family; the exact product depends on the oxygen supply. Dry powdered KOH reacting with ozone at low temperature gives potassium ozonide, $\mathrm{KO_3}$ — a highly reactive, paramagnetic solid, not an ordinary combustion product.

## 9.6 Group 2 oxides and peroxides

Combustion normally gives the simple oxide:

$$\mathrm{2Mg+O_2\rightarrow2MgO}\qquad \mathrm{2Ca+O_2\rightarrow2CaO}$$

The heavier metals can additionally stabilise a peroxide, and the *ease* of forming one this way is itself a graded trend, not an all-or-nothing property: $\mathrm{BaO_2}$ forms directly from $\mathrm{BaO}$ and air near $500^\circ\mathrm{C}$ ($\mathrm{2BaO+O_2\rightleftharpoons2BaO_2}$); $\mathrm{SrO_2}$ needs higher pressure and temperature to form the same way; $\mathrm{CaO_2}$ cannot be made by direct oxidation at all and instead requires $\mathrm{Ca(OH)_2+H_2O_2}$ followed by dehydration; crude $\mathrm{MgO_2}$ is likewise only accessible via the hydrogen-peroxide route; and **no peroxide of beryllium is known**. This gradient — direct-air formation → high-pressure formation → $\mathrm{H_2O_2}$-only route → no known compound — is a compact illustration of how stabilising a large, diffuse peroxide anion gets progressively harder as the cation shrinks and its charge density rises, the same size-matching logic from Section 9.2 running in reverse.

> **JEE trap.** $\mathrm{KO_2}$'s potassium remains $+1$; the fractional oxidation state ($-\tfrac12$) belongs entirely to oxygen, not to the metal.

**Worked example 9.1.** *A yellow solid is paramagnetic and produces both $\mathrm{H_2O_2}$ and $\mathrm{O_2}$ with water. Identify it.* The paramagnetism and dual product identify a superoxide; the standard answer is $\mathrm{KO_2}$.
`),
    ],
  },
  {
    id: "reaction-atlas",
    label: "10. General Reaction Atlas of the Metals",
    blocks: [
      md(String.raw`
## 10.1 With water

$$\mathrm{2M+2H_2O\rightarrow2MOH+H_2}\ \ (\text{Group 1})\qquad \mathrm{M+2H_2O\rightarrow M(OH)_2+H_2}\ \ (\text{Group 2})$$

Conditions are essential to state: Be does not react (protective oxide film); Mg is slow with cold water but reacts with hot water and readily with steam ($\mathrm{Mg+H_2O(g)\rightarrow MgO+H_2}$); Ca, Sr and Ba react with cold water, rate increasing down the group.

## 10.2 With hydrogen, nitrogen and halogens

$$\mathrm{2M+H_2\rightarrow2MH}\ (\text{Group 1, saline hydride})\qquad\mathrm{6Li+N_2\rightarrow2Li_3N}\ (\text{lithium only, in Group 1})$$
$$\mathrm{3M+N_2\rightarrow M_3N_2}\ (\text{all of Group 2, on heating})\qquad\mathrm{2M+X_2\rightarrow2MX\ /\ M+X_2\rightarrow MX_2}$$

Magnesium is unusual in burning in nitrogen as readily as in oxygen — a burning magnesium ribbon leaves both MgO and some $\mathrm{Mg_3N_2}$, which is why the ash of burnt magnesium can smell faintly of ammonia when dampened.

## 10.3 With sulfur, acids and proton donors

$$\mathrm{2Na+S\rightarrow Na_2S}\qquad\mathrm{Ca+S\rightarrow CaS}$$

With excess sulfur, alkali metals form polysulfides $\mathrm{M_2S_n}$ (Section 11). With dilute acids the reaction is generally too violent to use as a routine metal-dissolution method for the alkali metals; Mg and Ca dissolve cleanly ($\mathrm{Mg+2HCl\rightarrow MgCl_2+H_2}$) while Be can be passivated depending on the acid.

Alkali metals remove the acidic hydrogen from alcohols, ammonia and terminal alkynes:

$$\mathrm{2Na+2ROH\rightarrow2RONa+H_2}\qquad\mathrm{2Na+2NH_3\rightarrow2NaNH_2+H_2}\qquad\mathrm{2Na+2HC{\equiv}CH\rightarrow2NaC{\equiv}CH+H_2}$$

## 10.4 With alkali: beryllium's amphoteric-metal reaction

Be is the s-block metal that dissolves in strong aqueous alkali — a genuinely metal-like amphoteric reaction with no Group 1 counterpart:

$$\mathrm{Be+2OH^-+2H_2O\rightarrow[Be(OH)_4]^{2-}+H_2}$$

> **JEE trap.** "All Group 2 metals react with water" ignores Be. "Mg reacts readily with cold water" ignores its passivation. "All s-block metals react with NaOH" is false — this is a beryllium-specific reaction.
`),
      visual("reaction-atlas"),
    ],
  },
  {
    id: "nitrides-carbides",
    label: "11. Nitrides, Carbides, Sulphides & Polysulphides",
    blocks: [
      md(String.raw`
## 11.1 Nitrides

The important ionic nitrides are $\mathrm{Li_3N}$, $\mathrm{Be_3N_2}$, $\mathrm{Mg_3N_2}$ and $\mathrm{Ca_3N_2}$. General hydrolysis liberates ammonia:

$$\mathrm{M_3N_2+6H_2O\rightarrow3M(OH)_2+2NH_3}\qquad(\text{Group 2})\qquad\mathrm{Li_3N+3H_2O\rightarrow3LiOH+NH_3}$$

Ammonia evolution on hydrolysis is the standard identification test for a nitride.

## 11.2 Carbides: methanide versus acetylide

| Carbide type | Example | Carbon unit | Hydrolysis product |
|---|---|---|---|
| Methanide | $\mathrm{Be_2C}$ | formal $\mathrm{C^{4-}}$, isolated carbon | $\mathrm{CH_4}$ |
| Acetylide | $\mathrm{CaC_2}$ | $\mathrm{C_2^{2-}}$, a $\mathrm{C{\equiv}C}$ unit | $\mathrm{C_2H_2}$ |

$$\mathrm{Be_2C+4H_2O\rightarrow2Be(OH)_2+CH_4}\qquad\mathrm{CaC_2+2H_2O\rightarrow Ca(OH)_2+C_2H_2}$$

Calcium carbide is manufactured in an electric furnace: $\mathrm{CaO+3C\rightarrow CaC_2+CO}$. The gas released on hydrolysis is the diagnostic test that distinguishes the two carbide classes — this is a favourite JEE identification-chain step. The acetylide's ethyne can be confirmed with ammoniacal $\mathrm{AgNO_3}$, which gives a white precipitate of silver acetylide, $\mathrm{Ag{-}C{\equiv}C{-}Ag}$.

`),
      visual("carbide"),
      md(String.raw`
## 11.3 Sulphides and polysulphides

Normal sulfides hydrolyse to basic solutions, because $\mathrm{S^{2-}}$ is itself a fairly strong base:

$$\mathrm{S^{2-}+H_2O\rightleftharpoons HS^-+OH^-}\qquad\mathrm{Na_2S+2HCl\rightarrow2NaCl+H_2S}\ (\text{on acidification})$$

Alkali-metal sulfides dissolve additional sulfur to give polysulfides:

$$\mathrm{Na_2S+(n-1)S\rightarrow Na_2S_n}$$

The polysulfide anions are zig-zag chains ($\mathrm{S_2^{2-}}$, $\mathrm{S_3^{2-}}$ and longer homologues); their variable chain length is why polysulfide solutions can show a range of colours and a degree of redox complexity. Sulfide is also readily air-oxidised to thiosulfate, which connects s-block sulfide chemistry directly to a standard volumetric-analysis reaction:

$$\mathrm{2Na_2S+2O_2+H_2O\rightarrow Na_2S_2O_3+2NaOH}\qquad\mathrm{2Na_2S_2O_3+I_2\rightarrow Na_2S_4O_6+2NaI}$$

the classic iodometric titration, here reached from the sulfide side rather than the more commonly taught route.

> **JEE focus.** The gas evolved on hydrolysis identifies the anion class: ammonia identifies a nitride, methane a methanide carbide, ethyne an acetylide carbide, and (on acidification, not hydrolysis) a rotten-egg-smelling gas identifies a sulfide.

**Worked example 11.1.** *A solid gives a rotten-egg-smelling gas with dilute acid, and a strongly basic solution in water. Identify the anion.* $\mathrm{S^{2-}}$ — the gas is $\mathrm{H_2S}$, and hydrolysis of the sulfide ion produces $\mathrm{OH^-}$.

## 11.4 Calcium cyanamide: fixing atmospheric nitrogen through a carbide

Calcium carbide itself reacts with nitrogen, not just water — at high temperature it takes up $\mathrm{N_2}$ to give calcium cyanamide, an industrially real alternative to the Haber process for turning atmospheric nitrogen into a usable nitrogen source:

$$\mathrm{CaC_2+N_2\xrightarrow{1100^\circ\mathrm{C}}CaNCN+C}$$

$\mathrm{CaNCN}$ (containing the linear cyanamide ion $\mathrm{[N{=}C{=}N]^{2-}}$, isoelectronic with $\mathrm{CO_2}$) hydrolyses only slowly, over months in soil, to $\mathrm{CaCO_3}$ and ammonia — which is exactly why it is used as a **slow-release** nitrogenous fertiliser, resistant to being washed away by rain in a way that more soluble nitrate fertilisers are not. Downstream, cyanamide chemistry feeds into urea and thiourea manufacture and, via dicyanamide pyrolysis, into melamine — a real link from s-block inorganic chemistry to major industrial organic products.

The heavier alkaline earths do not follow the same path: $\mathrm{BaC_2+N_2}$ instead gives the cyanide $\mathrm{Ba(CN)_2}$, not a cyanamide — a specific, testable contrast rather than a universal Group 2 reaction.

> **JEE trap.** Not every metal carbide reacting with $\mathrm{N_2}$ gives the same class of nitrogen-containing product — $\mathrm{Ca}$ gives a cyanamide, $\mathrm{Ba}$ gives a cyanide. Check the specific metal before assuming the pattern generalises.
`),
    ],
  },
  {
    id: "hydrides",
    label: "12. Hydrides: Saline, Covalent & Complex",
    blocks: [
      md(String.raw`
Hydrogen forms three structurally distinct families of hydride with s-block metals, all built around the same hydride ion role but with very different bonding.

`),
      visual("hydride-family"),
      md(String.raw`
## 12.1 Saline (ionic) hydrides

Group 1 metals, and the heavier Group 2 metals, form ionic hydrides containing $\mathrm{H^-}$:

$$\mathrm{2Na+H_2\rightarrow2NaH}\qquad\mathrm{Ca+H_2\rightarrow CaH_2}$$

These are high-melting crystalline solids and powerful bases/reducing agents. For comparable structures, lattice stability *decreases* as the cation grows — the smaller cation binds $\mathrm{H^-}$ more strongly:

$$\mathrm{LiH>NaH>KH>RbH>CsH}\qquad\mathrm{CaH_2>SrH_2>BaH_2}$$

Hydrolysis is stoichiometrically informative: $\mathrm{NaH+H_2O\rightarrow NaOH+H_2}$ (1 mol $\mathrm{H_2}$ per mol hydride), but $\mathrm{CaH_2+2H_2O\rightarrow Ca(OH)_2+2H_2}$ (2 mol $\mathrm{H_2}$ per mol hydride) — calcium hydride ("hydrolith") is used as a portable, compact hydrogen source and as a drying agent precisely because of this 1:2 stoichiometry.

**Proof that hydrogen is genuinely $-1$ in these compounds:** electrolysis of a molten saline hydride liberates hydrogen gas at the *anode*: $\mathrm{2H^-\rightarrow H_2+2e^-}$. Oxidation occurring at the anode is direct experimental proof of an anionic hydrogen species.

## 12.2 Covalent hydrides of Be and Mg

$\mathrm{BeH_2}$ and $\mathrm{MgH_2}$ have substantial covalent character. $\mathrm{BeH_2}$ is polymeric with bridging hydrogen atoms (three-centre two-electron bonds, the same electron-deficient bonding motif as $\mathrm{BeCl_2}$ and diborane) and must be made indirectly, e.g. by hydride transfer from a complex hydride to a beryllium halide.

## 12.3 Complex hydrides

$$\mathrm{4LiH+AlCl_3\rightarrow LiAlH_4+3LiCl}\qquad\mathrm{NaH+B(OCH_3)_3\rightarrow NaBH_4+3NaOCH_3}$$

$\mathrm{LiAlH_4}$ and $\mathrm{NaBH_4}$ are hydride-donor reagents for organic reduction. $\mathrm{LiAlH_4}$ is the more powerful and less selective of the two: it reduces aldehydes, ketones, carboxylic acids, esters and acid chlorides, reacts violently with water (used only in dry ether), and also reduces several inorganic halides by hydride transfer — $\mathrm{BCl_3\rightarrow B_2H_6}$, $\mathrm{PCl_3\rightarrow PH_3}$, $\mathrm{SiCl_4\rightarrow SiH_4}$. $\mathrm{NaBH_4}$ is milder and more selective, typically reducing only aldehydes and ketones, and can even be crystallised from cold water — a striking contrast with $\mathrm{LiAlH_4}$'s violent water reaction. It does hydrolyse, just slowly and controllably rather than violently:

$$\mathrm{BH_4^-+2H_2O\rightarrow BO_2^-+4H_2}$$

Four moles of hydrogen released per mole of borohydride makes this a genuine hydrogen-storage/generation reaction in its own right, independent of $\mathrm{NaBH_4}$'s use as a reducing agent.

> **JEE trap.** In a metal hydride, hydrogen is $-1$; in water it is $+1$. Their reaction to give $\mathrm{H_2}$ is simultaneously an acid–base reaction (hydride as a Brønsted base) and an internal redox equalisation of hydrogen's own oxidation state.
`),
    ],
  },
  {
    id: "liquid-ammonia",
    label: "13. Liquid Ammonia, Crown Ethers & Organometallics",
    blocks: [
      md(String.raw`
## 13.1 Dissolution in liquid ammonia

Alkali metals — and, under suitable conditions, Ca, Sr and Ba from Group 2 — dissolve directly in liquid ammonia:

$$\mathrm{M+(x+y)NH_3\rightarrow[M(NH_3)_x]^++[e(NH_3)_y]^-}$$

The electron occupies a solvent cavity of its own: a **solvated electron**, not a metal-centred species.

`),
      visual("solvated-electron"),
      md(String.raw`
## 13.2 Dilute versus concentrated solutions

| Property | Dilute solution | Concentrated solution |
|---|---|---|
| Colour | deep blue | bronze / copper-coloured, metallic lustre |
| Magnetic behaviour | paramagnetic | falls sharply; effectively diamagnetic/metal-like |
| Conductivity | high, ionic + electronic | approaches true metallic conductivity |
| Dominant species | solvated electrons | paired/interacting electrons, metal-ion clusters |

The blue colour is essentially **independent of which metal is dissolved**, because the light-absorbing species is the solvated electron itself, not the metal cation — the cation is colourless.

## 13.3 Decomposition and reducing power

On standing, especially with trace catalytic impurities (Fe, Pt), the solution slowly converts to metal amide:

$$\mathrm{2M+2NH_3\rightarrow2MNH_2+H_2}$$

Solvated electrons are exceptionally powerful reducing agents — strong enough to reduce aromatic rings, a reaction (dissolving-metal reduction) that would be impossible in water, since water would simply be reduced by the electrons before any organic substrate could react. Concrete named examples: $\mathrm{Bi+Na/NH_3\rightarrow Na_3Bi}$ (Bi: $0\rightarrow-3$), $\mathrm{S+Na/NH_3\rightarrow Na_2S}$ (S: $0\rightarrow-2$), and $[\mathrm{Ni(CN)_4}]^{2-}+2e^-\rightarrow[\mathrm{Ni(CN)_4}]^{4-}$ (Ni: $+2\rightarrow0$) — an unusually low, electron-rich oxidation state stabilised only because the reduction happens in this exceptionally reducing medium.

## 13.4 Crown ethers, cryptands, alkalides and electrides

| Crown ether | Best size match |
|---|---|
| 12-crown-4 | $\mathrm{Li^+}$ |
| 15-crown-5 | $\mathrm{Na^+}$ |
| 18-crown-6 (as dibenzo-18-crown-6) | $\mathrm{K^+}$ |

Selectivity comes from cavity size, donor geometry and desolvation energy. Cryptands (three-dimensional analogues with additional nitrogen donors, e.g. cryptand-222) encapsulate the cation even more completely, forming highly stable cryptates — Pedersen, Lehn and Cram shared the 1987 Nobel Prize in Chemistry for this area.

Sufficiently strong cation encapsulation can stabilise genuinely unusual salts: an **alkalide**, whose anion is a bare alkali-metal anion such as golden-yellow $\mathrm{Na^-}$ (e.g. $[\mathrm{Na(cryptand\text{-}222)}]^+\mathrm{Na}^-$, stable only below about $-10^\circ\mathrm{C}$); or an **electride**, whose "anion" is simply a trapped electron in a solvent-free cavity (a black, paramagnetic solid). These are advanced but genuinely real compounds — striking evidence that oxidation state and "ion identity" depend on the whole stabilising environment, not on the element alone.

## 13.5 Organolithium and heavier organoalkali compounds

$$\mathrm{R{-}X+2Li\rightarrow RLi+LiX}$$

Organolithium reagents are strongly polar (not fully ionic) and are frequently associated as tetramers or hexamers rather than existing as simple monomers — e.g. $(\mathrm{LiCH_3})_4$ is a tetrahedral cluster held together by multicentre Li–C bonding, not a classical two-electron bond. They act as very strong bases and nucleophiles: they add to carbonyl compounds, react with $\mathrm{CO_2}$ to give a carboxylic acid after work-up, and participate in metal–halogen exchange.

Heavier organoalkali compounds (Na, K, Rb, Cs), typically made from an organomercury precursor ($2\mathrm{K}+\mathrm{HgR_2}\rightarrow\mathrm{Hg}+2\mathrm{KR}$), are markedly more ionic, extremely reactive, and pyrophoric — reacting with almost everything except saturated hydrocarbons and $\mathrm{N_2}$.

## 13.6 Grignard reagents: organomagnesium chemistry

Group 2's organometallic chemistry is dominated by one of the most useful reagent classes in the whole of chemistry. Victor Grignard won the 1912 Nobel Prize in Chemistry for it, and Grignard reagents remain a standard route to alcohols, aldehydes, ketones, carboxylic acids, esters, amides and alkenes.

$$\mathrm{Mg+RBr\xrightarrow{\text{dry ether}}RMgBr}$$

Preparation needs strictly anhydrous conditions; a fresh magnesium surface is often passivated by a thin oxide film, so the reaction can need a crystal of iodine or a moment of gentle warming to initiate — after which it proceeds smoothly. Reactivity of the halide follows $\mathrm{R\text{-}I>R\text{-}Br>R\text{-}Cl}$, and alkyl Grignards are generally more reactive than aryl ones.

The reagent is not simply "$\mathrm{R^-Mg^{2+}Br^-}$" in solution — X-ray structures of solids such as $\mathrm{PhMgBr\cdot2Et_2O}$ show a genuinely tetrahedral magnesium centre, coordinated by the halide, the organic group, and two ether oxygen atoms donated by the solvent. The solvent is not just an inert medium; it is a ligand.

Beyond the standard carbonyl-addition reactions, two less commonly quoted reactions are worth knowing: Grignards insert directly into $\mathrm{O_2}$ to give, after aqueous work-up, a primary alcohol ($\mathrm{RMgBr+O_2\rightarrow ROMgBr\xrightarrow{H_3O^+}ROH}$), and react with elemental sulfur to give a thiol or sulfide. Grignards are also a standard transmetalation route to other main-group organometallics, including organosilicon precursors to silicone polymers ($\mathrm{SiCl_4\rightarrow}$ chlorosilanes) and, within Group 2 itself, organoberyllium compounds such as $\mathrm{MeBeCl}$ (from $\mathrm{BeMe_2+BeCl_2}$).

Reactivity of the whole Group 2 organometallic family actually *increases* down the group — $\mathrm{Ca}$, $\mathrm{Sr}$ and $\mathrm{Ba}$ organometallics are considerably more reactive than the comparatively tame, synthetically tractable Grignard reagent — the opposite of the "smaller and more polarising reacts more violently" intuition that governs most of this chapter, and worth noting precisely because it runs against the grain.

> **JEE trap.** The blue liquid-ammonia solution is *not* "sodium ions dissolved in ammonia." The cation is colourless throughout; the solvated electron is responsible for both the colour and most of the conductivity.
`),
    ],
  },
  {
    id: "halides",
    label: "14. Halides: Bonding, Structures & Hydrolysis",
    blocks: [
      md(String.raw`
## 14.1 General preparation

$$\mathrm{M_2O+2HX\rightarrow2MX+H_2O}\qquad\mathrm{MO+2HX\rightarrow MX_2+H_2O}\qquad\mathrm{M_2CO_3+2HX\rightarrow2MX+CO_2+H_2O}$$

Direct combination of the elements is also strongly exothermic and a valid preparative route.

## 14.2 Covalent-character orders (Fajans' rule)

$$\mathrm{LiF<LiCl<LiBr<LiI}\qquad(\text{covalent character, fixed cation, varying anion})$$
$$\mathrm{CsCl<NaCl<LiCl}\qquad(\text{covalent character, fixed anion, varying cation})$$
$$\mathrm{BaCl_2<MgCl_2<BeCl_2}$$

Small, highly charged cations paired with large, polarisable anions favour covalency — this single rule generates most of the halide-property orders in this chapter.

## 14.3 Crystal lattice types

Most alkali halides adopt the **NaCl structure** (6:6 coordination, interpenetrating face-centred-cubic arrays, octahedral coordination of each ion). $\mathrm{CsCl}$, $\mathrm{CsBr}$ and $\mathrm{CsI}$ specifically adopt the **CsCl structure** (8:8 coordination, simple cubic packing with the counter-ion body-centred) — this switch happens only for the caesium halides, not rubidium, because it is the radius-ratio of that specific ion pair that favours 8-coordination.

`),
      visual("halide-lattice"),
      md(String.raw`
## 14.4 Beryllium chloride: a phase-dependent structure

Solid $\mathrm{BeCl_2}$ is a chloride-bridged chain polymer (Be approximately tetra-coordinate). The vapour contains a bridged $\mathrm{Be_2Cl_4}$ dimer at moderate temperature, and a linear, two-coordinate monomer only at high temperature. **Always specify the phase** before assigning a geometry or hybridisation to $\mathrm{BeCl_2}$ — this is one of the most commonly tested phase-dependent structures in the whole chapter.

## 14.5 Solubility, hydrates and hydrolysis

- Alkali halides are generally water-soluble; $\mathrm{LiF}$ (exceptional lattice enthalpy for its size) is the major exception.
- Lithium halides become progressively more soluble in organic donor solvents from fluoride toward iodide, tracking rising covalent character.
- Group 2 fluorides are much less soluble than the corresponding chlorides, because the small, hard $\mathrm{F^-}$ gives an especially strong lattice.
- $\mathrm{BeCl_2}$, $\mathrm{MgCl_2}$ and $\mathrm{CaCl_2}$ are hygroscopic; anhydrous $\mathrm{CaCl_2}$ is a common laboratory drying agent, but it is unsuitable for drying substances (ammonia, many alcohols) that form isolable addition compounds with it.

Heating a hydrated Group 2 chloride does **not** cleanly give the anhydrous salt, because the strongly polarising cation promotes hydrolysis of its own coordinated water:

$$\mathrm{MgCl_2\cdot6H_2O\xrightarrow{\Delta}Mg(OH)Cl+HCl+5H_2O}\xrightarrow{\Delta}\mathrm{MgO+HCl}$$

Anhydrous $\mathrm{MgCl_2}$ is instead prepared by suppressing this hydrolysis — heating in a stream of dry HCl gas, or via an ammonium-chloride double-salt route.

## 14.6 Polyhalides

$$\mathrm{I^-+I_2\rightleftharpoons I_3^-}\qquad\mathrm{KBr+ICl\rightarrow K[BrICl]}\qquad\mathrm{KI+I_2\rightarrow K[I_3]}\qquad\mathrm{KF+BrF_3\rightarrow K[BrF_4]}$$

Large cations stabilise large polyhalide anions; bonding is delocalised, typically described with a three-centre four-electron model.

**Worked example 14.1.** *Why is $\mathrm{LiI}$ far more soluble in an organic solvent than $\mathrm{LiF}$?* $\mathrm{I^-}$ is much more polarisable than $\mathrm{F^-}$, so $\mathrm{LiI}$ has substantially more covalent character; $\mathrm{LiF}$'s behaviour is instead dominated by an exceptionally strong, compact ionic lattice.
`),
      visual("becl2"),
    ],
  },
  {
    id: "hydroxides",
    label: "15. Hydroxides: Basicity & Solubility",
    blocks: [
      md(String.raw`
## 15.1 Formation

$$\mathrm{M_2O+H_2O\rightarrow2MOH}\qquad\mathrm{MO+H_2O\rightarrow M(OH)_2}\qquad\mathrm{2M+2H_2O\rightarrow2MOH+H_2}\qquad\mathrm{M+2H_2O\rightarrow M(OH)_2+H_2}$$

## 15.2 Basic strength and solubility

$$\mathrm{LiOH<NaOH<KOH<RbOH<CsOH}\qquad(\text{basic strength, Group 1})$$

For Group 2, basic character rises from Be to Ba; $\mathrm{Be(OH)_2}$ is amphoteric (Section 19), $\mathrm{Mg(OH)_2}$ is only weakly soluble, and $\mathrm{Ba(OH)_2}$ is strongly basic and appreciably soluble:

$$\mathrm{Mg(OH)_2<Ca(OH)_2<Sr(OH)_2<Ba(OH)_2}\qquad(\text{solubility, rising — lattice enthalpy falls faster than hydration enthalpy})$$

## 15.3 Thermal stability

$$\mathrm{2LiOH\xrightarrow{\Delta}Li_2O+H_2O}\qquad\mathrm{M(OH)_2\xrightarrow{\Delta}MO+H_2O}$$

Group 1 hydroxides other than LiOH are comparatively heat-stable under normal laboratory heating. Group 2 hydroxide thermal stability increases down the group, mirroring the carbonate trend in Section 16.

## 15.4 Reactions worth memorising as a set

Sodium hydrogencarbonate and sodium hydroxide cannot coexist in appreciable concentration, because hydroxide simply removes the acidic proton:

$$\mathrm{NaHCO_3+NaOH\rightarrow Na_2CO_3+H_2O}$$

Carbon dioxide absorption is ratio-dependent — this single fact underlies a large fraction of "identify the product" JEE questions:

$$\mathrm{2NaOH+CO_2\ (limited)\rightarrow Na_2CO_3+H_2O}\qquad\mathrm{NaOH+CO_2\ (excess)\rightarrow NaHCO_3}$$

Hydroxides also dissolve amphoteric oxides/metals by forming an oxo-anion complex:

$$\mathrm{2NaOH+Zn+2H_2O\rightarrow Na_2[Zn(OH)_4]+H_2}\qquad\mathrm{Al_2O_3+2OH^-+3H_2O\rightarrow2[Al(OH)_4]^-}$$

> **JEE trap.** The product of $\mathrm{CO_2+OH^-}$ depends entirely on the mole ratio — never write "carbonate" or "hydrogencarbonate" as a reflex answer without checking which reagent is limiting.
`),
    ],
  },
];
