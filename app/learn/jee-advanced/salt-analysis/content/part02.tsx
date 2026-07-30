import { SaltAnalysisArticle } from "../SaltAnalysisArticle";

export const metadata = {
  part: 2,
  title: "Preliminary Examination, Heating Effects and Dry Tests",
  chapter: "Salt Analysis",
  exam: "JEE Advanced",
};

const content = String.raw`
# Preliminary Examination, Heating Effects and Dry Tests

> Preliminary tests narrow the possibilities. They do not replace systematic wet analysis. A reliable inference must survive confirmation by a chemically independent test.

## 1. Physical examination of the original salt

Record the following before adding any reagent:

| Feature | Possible indication | Important limitation |
|---|---|---|
| Colourless or white | Many main-group salts; $\mathrm{Zn^{2+}}$, $\mathrm{Al^{3+}}$, $\mathrm{Mg^{2+}}$, $\mathrm{Ca^{2+}}$, $\mathrm{Ba^{2+}}$, alkali ions | Most salts are white; not diagnostic |
| Blue | Hydrated $\mathrm{Cu^{2+}}$ salts | Colour changes with ligand and hydration |
| Pale green | Many $\mathrm{Fe^{2+}}$ salts | Easily oxidised to $\mathrm{Fe^{3+}}$ |
| Yellow or brown | $\mathrm{Fe^{3+}}$, chromate, iodide-containing oxidised mixtures | Several unrelated species are yellow |
| Pink | Hydrated $\mathrm{Co^{2+}}$ or $\mathrm{Mn^{2+}}$ salts | Dilute $\mathrm{Mn^{2+}}$ may appear colourless |
| Green | $\mathrm{Ni^{2+}}$, $\mathrm{Cr^{3+}}$, some $\mathrm{Cu^{2+}}$ salts | Depends strongly on ligand and hydration |
| Purple | Permanganate; some chromium(III) salts | Oxidation state must be confirmed |
| Orange | Dichromate | Chromate-dichromate equilibrium is pH-dependent |
| Black | Metal sulphides or oxides | Many black solids exist |

Other preliminary observations:

- **Crystalline versus amorphous:** may suggest hydration or preparation method but is not specific.
- **Hygroscopic or deliquescent:** common for chlorides such as $\mathrm{CaCl_2}$, $\mathrm{MgCl_2}$, $\mathrm{FeCl_3}$.
- **Efflorescent:** hydrated salts may lose water in dry air.
- **Odour:** never smell directly. Ammonium salts, sulphides, acetates and some halides may give characteristic odours only after treatment.
- **Solubility in water:** helps select the method for preparing the original solution.

## 2. Solubility examination

Use a small portion and add water gradually.

1. Test in cold water.
2. Warm if necessary.
3. Observe whether dissolution is accompanied by hydrolysis, colour change, gas evolution or turbidity.
4. If insoluble, test appropriate dilute acids on a fresh portion.
5. Reserve a separate portion for soda-extract preparation when the anion must be transferred to a soluble sodium salt.

Solubility is not simply “soluble” or “insoluble.” It depends on temperature, pH, complex formation and concentration.

Examples:

- $\mathrm{PbCl_2}$ is sparingly soluble in cold water but appreciably more soluble in hot water.
- $\mathrm{BiCl_3}$ may appear to “dissolve” in concentrated HCl but hydrolyses on dilution to $\mathrm{BiOCl}$.
- $\mathrm{Al(OH)_3}$ is insoluble in water but dissolves in acid and in excess strong base.
- $\mathrm{AgCl}$ dissolves in ammonia by complex formation, not by ordinary hydration.

## 3. Heating in a dry test tube

Heat gently first, then more strongly. Observe:

- condensation of water;
- sublimation;
- colour change;
- gas colour;
- odour only by permitted indirect observation;
- residue colour while hot and after cooling;
- whether the change is reversible.

### 3.1 Water of crystallisation

Hydrated salts may lose water:

$$
\mathrm{CuSO_4\cdot5H_2O\xrightarrow{\Delta}CuSO_4+5H_2O}
$$

Blue hydrated copper(II) sulphate becomes white anhydrous copper(II) sulphate. Addition of water restores the blue hydrated species with heat evolution.

$$
\mathrm{CoCl_2\cdot6H_2O\xrightarrow{\Delta}CoCl_2+6H_2O}
$$

Hydrated cobalt chloride is pink; anhydrous cobalt chloride is blue. The colour depends on hydration and ligand environment.

### 3.2 Hydrolysis during heating

Some hydrated chlorides give basic salts or oxides because the metal ion strongly hydrolyses water.

A simple “water droplets formed” observation therefore does not by itself prove water of crystallisation.

## 4. Heating effects of carbonates and bicarbonates

### 4.1 Alkali-metal carbonates

Most alkali-metal carbonates are thermally stable. Lithium carbonate is the important exception:

$$
\mathrm{Li_2CO_3\xrightarrow{\Delta}Li_2O+CO_2\uparrow}
$$

The difference reflects the high polarising power of small $\mathrm{Li^+}$.

### 4.2 Metal carbonates

Many carbonates decompose to oxides:

$$
\mathrm{MCO_3\xrightarrow{\Delta}MO+CO_2\uparrow}
$$

Examples:

$$
\mathrm{CaCO_3\xrightarrow{\Delta}CaO+CO_2}
$$

$$
\mathrm{CuCO_3\xrightarrow{\Delta}CuO+CO_2}
$$

Copper(II) carbonate or basic copper carbonate gives a black $\mathrm{CuO}$ residue.

### 4.3 Silver and mercury carbonates

Silver carbonate ultimately gives metallic silver:

$$
\mathrm{2Ag_2CO_3\xrightarrow{\Delta}4Ag+2CO_2+O_2}
$$

Mercury compounds may give mercury vapour or oxide decomposition products and are not to be heated casually.

### 4.4 Bicarbonates

Bicarbonates generally decompose on heating:

$$
\mathrm{2MHCO_3\xrightarrow{\Delta}M_2CO_3+CO_2+H_2O}
$$

For alkaline-earth bicarbonates, which usually exist in solution:

$$
\mathrm{M(HCO_3)_2\xrightarrow{\Delta}MCO_3\downarrow+CO_2+H_2O}
$$

This is the basis of temporary hardness removal by boiling.

## 5. Heating effects of nitrates

The product depends strongly on the cation.

### 5.1 Alkali-metal nitrates except lithium

$$
\mathrm{2MNO_3\xrightarrow{\Delta}2MNO_2+O_2}
$$

where $\mathrm{M=Na,K,Rb,Cs}$.

### 5.2 Lithium nitrate and many metal nitrates

$$
\mathrm{4LiNO_3\xrightarrow{\Delta}2Li_2O+4NO_2+O_2}
$$

A general divalent-metal pattern is:

$$
\mathrm{2M(NO_3)_2\xrightarrow{\Delta}2MO+4NO_2+O_2}
$$

Brown $\mathrm{NO_2}$ fumes and a glowing-splint-supporting oxygen component may be observed.

Examples:

$$
\mathrm{2Pb(NO_3)_2\xrightarrow{\Delta}2PbO+4NO_2+O_2}
$$

$$
\mathrm{2Cu(NO_3)_2\xrightarrow{\Delta}2CuO+4NO_2+O_2}
$$

### 5.3 Nitrates of less reactive metals

Silver nitrate can give metal:

$$
\mathrm{2AgNO_3\xrightarrow{\Delta}2Ag+2NO_2+O_2}
$$

### 5.4 Ammonium nitrate

Controlled thermal decomposition:

$$
\mathrm{NH_4NO_3\xrightarrow{\Delta}N_2O+2H_2O}
$$

Strong or uncontrolled heating can be hazardous. This equation is studied conceptually.

## 6. Heating effects of sulphates

### 6.1 Hydrated sulphates

They first lose water. Further heating may decompose the anhydrous sulphate.

### 6.2 Transition-metal sulphates

Typical patterns include:

$$
\mathrm{2FeSO_4\xrightarrow{\Delta}Fe_2O_3+SO_2+SO_3}
$$

Ferrous sulphate crystals first lose water, then the residue becomes brown due to $\mathrm{Fe_2O_3}$ while sulphur oxides evolve.

$$
\mathrm{CuSO_4\xrightarrow{strong\ \Delta}CuO+SO_3}
$$

### 6.3 Sulphates of very unreactive metals

Some can give metal or oxide depending on stability. The exact residue must be inferred from metal reactivity and oxide stability, not memorised as one universal rule.

## 7. Heating effects of chlorides and ammonium salts

### 7.1 Ammonium chloride

$$
\mathrm{NH_4Cl(s)\rightleftharpoons NH_3(g)+HCl(g)}
$$

The vapours recombine on a cooler part of the tube, producing a white sublimate. This is often described as sublimation, though dissociation and recombination occur.

### 7.2 Ammonium carbonate and bicarbonate

They decompose to volatile products, leaving little or no residue.

### 7.3 Metal chlorides

Many are volatile or hydrolyse. Colours may change with hydration. A chloride should not be identified only from volatility.

## 8. Flame test

[FIGURE:flame-emission-spectrum]

### 8.1 Principle

Heat excites electrons to higher energy levels. When they return to lower levels, characteristic wavelengths are emitted.

$$
\Delta E=h\nu=\frac{hc}{\lambda}
$$

### 8.2 Procedure logic

- Clean the wire loop with concentrated HCl until it gives no flame colour.
- Convert the sample into a volatile chloride where appropriate.
- Place a small amount in the non-luminous flame.
- Observe through cobalt glass when sodium contamination may mask potassium.

### 8.3 Important flame colours

| Ion | Flame colour | Notes |
|---|---|---|
| $\mathrm{Li^+}$ | Crimson red | Less persistent than sodium |
| $\mathrm{Na^+}$ | Intense golden yellow | Very sensitive; common contaminant |
| $\mathrm{K^+}$ | Lilac/violet | Viewed through cobalt glass |
| $\mathrm{Ca^{2+}}$ | Brick red | Often described as orange-red |
| $\mathrm{Sr^{2+}}$ | Crimson/scarlet red | More intense red than calcium |
| $\mathrm{Ba^{2+}}$ | Apple green | Barium chloride is sufficiently volatile |
| $\mathrm{Cu^{2+}}$ | Blue-green | Especially with halide formation |

A flame test is usually a screening test because mixtures and sodium contamination can obscure colours.

## 9. Borax bead test

[FIGURE:borax-bead-cross-section]

### 9.1 Chemistry of bead formation

Borax loses water and forms sodium metaborate and boric anhydride:

$$
\mathrm{Na_2B_4O_7\cdot10H_2O\xrightarrow{\Delta}2NaBO_2+B_2O_3+10H_2O}
$$

The glassy $\mathrm{B_2O_3}$ dissolves metal oxides to form coloured metaborates.

A simplified representation is:

$$
\mathrm{MO+B_2O_3\rightarrow M(BO_2)_2}
$$

### 9.2 Oxidising and reducing flame

The observed colour depends on:

- oxidation state of the metal;
- oxidising or reducing flame;
- hot or cold bead;
- amount of sample;
- concentration of coloured species.

### 9.3 Common bead colours

| Ion/oxide system | Oxidising flame | Reducing flame |
|---|---|---|
| Co | Deep blue | Deep blue |
| Cu | Blue-green when hot; blue when cold | Red or opaque due to Cu/Cu$_2$O |
| Cr | Green | Green |
| Fe | Yellow/brown hot; pale on cooling | Bottle green |
| Mn | Violet/amethyst in oxidising bead | Colourless or pale |
| Ni | Brown/reddish-brown | Grey or opaque due to reduced species |

Excess sample may make every bead dark and uninterpretable.

## 10. Microcosmic salt bead test

Microcosmic salt produces sodium ammonium hydrogen phosphate, which on heating gives sodium metaphosphate:

$$
\mathrm{NaNH_4HPO_4\cdot4H_2O\xrightarrow{\Delta}NaPO_3+NH_3+5H_2O}
$$

The metaphosphate dissolves metal oxides to form coloured phosphates. The test is chemically similar to the borax bead test but may give clearer colours for some ions.

## 11. Charcoal cavity test

A salt is mixed with sodium carbonate and heated on charcoal in a reducing flame.

General reduction:

$$
\mathrm{MO+C\rightarrow M+CO}
$$

Possible observations include:

- metallic bead;
- incrustation of volatile oxide;
- colour of incrustation hot and cold;
- malleability or brittleness of the bead.

Examples:

| Metal system | Observation |
|---|---|
| Pb | Soft malleable bead; yellow PbO incrustation hot, pale on cooling |
| Bi | Brittle bead; yellow/orange oxide incrustation |
| Sn | Malleable bead; white oxide incrustation |
| Zn | No stable bead; ZnO incrustation yellow hot, white cold |
| Cd | Brown CdO incrustation |
| Ag | Bright malleable bead; little oxide incrustation |

## 12. Cobalt nitrate test

The residue on charcoal is moistened with cobalt nitrate and reheated. Characteristic mixed oxides may form.

| Oxide | Product/colour |
|---|---|
| $\mathrm{Al_2O_3}$ | Cobalt aluminate, blue |
| $\mathrm{ZnO}$ | Cobalt zincate, green |
| $\mathrm{MgO}$ | Pink mass |
| $\mathrm{SnO_2}$ | Bluish-green under suitable conditions |

The test is affected by contamination and should support, not replace, wet confirmation.

## 13. Fusion tests

Fusion converts an insoluble or unreactive substance into soluble products.

### 13.1 Sodium carbonate fusion

Useful for refractory sulphates, silicates and some oxides.

$$
\mathrm{MSO_4+Na_2CO_3\rightarrow MCO_3+Na_2SO_4}
$$

The soluble sodium salt enters the extract while the metal carbonate remains as residue.

### 13.2 Oxidising fusion

Chromium(III) compounds can be oxidised to chromate with sodium carbonate and an oxidant:

$$
\mathrm{2Cr_2O_3+4Na_2CO_3+3O_2\rightarrow4Na_2CrO_4+4CO_2}
$$

A yellow chromate extract is obtained.

### 13.3 Reducing fusion

Some higher oxidation-state compounds may be reduced to forms suitable for subsequent tests. The reducing agent and possible side products must be considered.

## 14. Dry-test traps

1. Sodium contamination can mask every flame colour.
2. A black residue may be an oxide, metal, or sulphide.
3. Hydrated and anhydrous salts may have different colours.
4. A borax bead colour depends on flame zone and temperature.
5. Heating can change the oxidation state that existed in the original salt.
6. Conc. HCl used to clean a flame-test wire introduces chloride; do not use that portion for chloride analysis.
7. Dry tests are least reliable in mixtures.

## 15. Preliminary-test decision table

| Observation | Possible species | Required confirmation |
|---|---|---|
| Water droplets on heating | Hydrated salt, hydroxide, bicarbonate | Rehydration behaviour; independent ion tests |
| Brown gas on heating | Nitrate/nitrite; bromide with oxidant | Brown-ring or specific nitrite test |
| Gas relights glowing splint | Oxygen from nitrate/chlorate/peroxide | Identify accompanying residue and anion |
| White sublimate | Ammonium chloride or volatile chloride | Ammonium and chloride tests separately |
| Black residue from blue salt | CuO from copper salt | Copper wet tests |
| Yellow hot/white cold residue | ZnO | Zinc wet tests |
| Golden-yellow flame | Sodium | Confirm with a specific sodium reagent if required |
| Lilac flame through cobalt glass | Potassium | Sodium cobaltinitrite or perchlorate test |
`;

export default function SaltAnalysisPart02() {
  return <SaltAnalysisArticle metadata={metadata} content={content} />;
}
