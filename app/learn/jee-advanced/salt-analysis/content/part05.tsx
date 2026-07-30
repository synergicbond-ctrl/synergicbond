import { SaltAnalysisArticle } from "../SaltAnalysisArticle";

export const metadata = {
  part: 5,
  title: "Nitrite, Nitrate and Halide Analysis",
  chapter: "Salt Analysis",
  exam: "JEE Advanced",
};

const content = String.raw`
## 10. Nitrite

### 10.1 Acidification

$$\mathrm{2NO_2^-+2H^+\rightarrow NO+NO_2+H_2O}$$

Colourless NO becomes brown in air:

$$\mathrm{2NO+O_2\rightarrow2NO_2}$$

### 10.2 KI-starch test

In acid medium, nitrite oxidises iodide:

$$\mathrm{2NO_2^-+2I^-+4H^+\rightarrow I_2+2NO+2H_2O}$$

Iodine gives blue colour with starch.

### 10.3 Permanganate

Nitrite is oxidised to nitrate and decolourises acidified permanganate:

$$\mathrm{5NO_2^-+2MnO_4^-+6H^+\rightarrow5NO_3^-+2Mn^{2+}+3H_2O}$$

### 10.4 Griess test

Nitrite diazotises sulphanilic acid in acidic medium; coupling with an aromatic amine gives a pink/red azo dye. This is highly sensitive.

**Critical interference:** nitrite interferes with nitrate tests. Remove it first, commonly using sulfamic acid:

$$\mathrm{HNO_2+NH_2SO_3H\rightarrow N_2\uparrow+H_2SO_4+H_2O}$$

---

## 11. Nitrate

## 11.1 Brown-ring test

Add freshly prepared $\mathrm{FeSO_4}$ solution, then carefully layer concentrated $\mathrm{H_2SO_4}$ down the side of the tube.

Reduction:

$$\mathrm{NO_3^-+3Fe^{2+}+4H^+\rightarrow NO+3Fe^{3+}+2H_2O}$$

Complex formation:

$$\mathrm{[Fe(H_2O)_6]^{2+}+NO\rightarrow[Fe(H_2O)_5(NO)]^{2+}+H_2O}$$

A brown ring of nitrosyl ferrous complex forms at the interface.

**Conditions and traps**

- Use freshly prepared $\mathrm{FeSO_4}$; old solution contains oxidised $\mathrm{Fe^{3+}}$.
- Do not shake after layering; the ring must form at the interface.
- Nitrite can also produce NO and interfere.
- Strong oxidants can oxidise $\mathrm{Fe^{2+}}$ before complex formation.

[FIGURE:brown-ring-phenomenon]

## 11.2 Copper-turnings test

Heating nitrate with concentrated $\mathrm{H_2SO_4}$ liberates $\mathrm{HNO_3}$, which oxidises copper:

$$\mathrm{Cu+4HNO_3(conc.)\rightarrow Cu(NO_3)_2+2NO_2\uparrow+2H_2O}$$

Brown $\mathrm{NO_2}$ fumes and a blue copper(II) solution are observed.

## 11.3 Devarda's alloy test

In strongly alkaline medium, Devarda's alloy reduces nitrate to ammonia:

$$\mathrm{3NO_3^-+8Al+5OH^-+18H_2O\rightarrow3NH_3+8[Al(OH)_4]^-}$$

The evolved ammonia turns moist red litmus blue.

**Not unique unless nitrite and ammonium are absent.** Test ammonium on the original sample before adding nitrogen-containing reagents.

---

## 12. Halides: Chloride, Bromide, Iodide

## 12.1 Silver nitrate test

Acidify the aqueous solution with dilute $\mathrm{HNO_3}$, then add $\mathrm{AgNO_3}$.

| Ion | Precipitate | Colour | Behaviour with ammonia |
|---|---|---|---|
| $\mathrm{Cl^-}$ | AgCl | White, curdy | Soluble in dilute $\mathrm{NH_3}$ |
| $\mathrm{Br^-}$ | AgBr | Cream/pale yellow | Sparingly soluble in concentrated $\mathrm{NH_3}$ |
| $\mathrm{I^-}$ | AgI | Yellow | Insoluble in concentrated $\mathrm{NH_3}$ |

[FIGURE:silver-nitrate-matrix]

$$\mathrm{Ag^+ + X^-\rightarrow AgX\downarrow}$$

Solubility order:

$$\mathrm{AgCl>AgBr>AgI}$$

and:

$$K_{sp}(\mathrm{AgCl})>K_{sp}(\mathrm{AgBr})>K_{sp}(\mathrm{AgI})$$

### Why nitric acid is used

HCl would introduce chloride. Sulphuric acid can introduce sulphate precipitates with some ions. Dilute nitric acid removes interfering carbonate/sulphite without adding a halide:

$$\mathrm{CO_3^{2-}+2H^+\rightarrow CO_2+H_2O}$$

### Photochemical behaviour

Silver halides darken in light due to formation of metallic silver:

$$\mathrm{2AgX\xrightarrow{h\nu}2Ag+X_2}$$

## 12.2 Concentrated sulphuric acid test

### Chloride

$$\mathrm{NaCl+H_2SO_4\rightarrow NaHSO_4+HCl\uparrow}$$

HCl gives dense white fumes with ammonia:

$$\mathrm{NH_3+HCl\rightarrow NH_4Cl}$$

### Bromide

First HBr forms, then concentrated sulphuric acid oxidises it:

$$\mathrm{2HBr+H_2SO_4\rightarrow Br_2+SO_2+2H_2O}$$

Observation: steamy acid fumes and brown bromine vapour.

### Iodide

HI is a stronger reducing agent and reduces sulphuric acid to several products:

$$\mathrm{8HI+H_2SO_4\rightarrow4I_2+H_2S+4H_2O}$$

Intermediate reduction products $\mathrm{SO_2}$ and S may also occur. Violet iodine vapours/black iodine and reducing products are observed.

Reducing power:

$$\mathrm{I^->Br^->Cl^-}$$

## 12.3 Oxidation and organic-layer test

Chlorine water oxidises bromide and iodide:

$$\mathrm{Cl_2+2Br^-\rightarrow2Cl^-+Br_2}$$

$$\mathrm{Cl_2+2I^-\rightarrow2Cl^-+I_2}$$

On shaking with an immiscible organic solvent:

- $\mathrm{Br_2}$: orange/brown organic layer;
- $\mathrm{I_2}$: violet organic layer.

With **excess** chlorine water, iodine may be further oxidised to colourless iodate, so the violet colour can disappear:

$$\mathrm{I_2+5Cl_2+6H_2O\rightarrow2IO_3^-+10Cl^-+12H^+}$$

This disappearance is a classic JEE observation.

[FIGURE:halide-layer-test]

## 12.4 Chromyl chloride test for chloride

Heat a dry chloride with solid $\mathrm{K_2Cr_2O_7}$ and concentrated $\mathrm{H_2SO_4}$. Deep red vapours of chromyl chloride form:

$$\mathrm{4NaCl+K_2Cr_2O_7+6H_2SO_4\rightarrow2CrO_2Cl_2\uparrow+4NaHSO_4+2KHSO_4+3H_2O}$$

Absorb vapours in NaOH:

$$\mathrm{CrO_2Cl_2+4OH^-\rightarrow CrO_4^{2-}+2Cl^-+2H_2O}$$

The yellow chromate solution gives:

$$\mathrm{Pb^{2+}+CrO_4^{2-}\rightarrow PbCrO_4\downarrow}$$

yellow lead chromate.

**Limitations**

- Bromides and iodides do not give the chromyl chloride test.
- Fluorides do not give it because $\mathrm{CrO_2F_2}$ is not produced under the ordinary test conditions in the same diagnostic manner.
- Chlorides of $\mathrm{Hg^{2+}}$, $\mathrm{Ag^+}$, $\mathrm{Pb^{2+}}$, $\mathrm{Sn^{2+}/Sn^{4+}}$, and $\mathrm{Sb^{3+}}$ may be unsuitable or unreliable because they are non-ionic, sparingly soluble, or undergo competing reactions.

---

## 46. Expanded Halide Separation in Mixtures

When chloride, bromide and iodide occur together, a single silver nitrate test produces mixed precipitates whose colours overlap. Selective oxidation is more informative.

Add chlorine water gradually and shake with an organic solvent. Iodide is oxidised first because $\mathrm{I^-}$ is the strongest reducing halide:

$$\mathrm{Cl_2+2I^-\rightarrow2Cl^-+I_2}$$

The organic layer becomes violet. Continued addition oxidises bromide, producing orange bromine. In still greater excess, iodine is oxidised to iodate and its violet colour disappears. Interpretation must therefore follow the **order of colour changes**, not only the final colour.

Selective precipitation and ammonia treatment provide another route. Add $\mathrm{AgNO_3}$ under nitric-acid conditions, filter, and treat with dilute ammonia. AgCl dissolves. Concentrated ammonia dissolves much of AgBr, whereas AgI remains. Acidifying each ammine filtrate reprecipitates the corresponding silver halide.

Oxidising contaminants such as nitrite, chlorate and dichromate can liberate halogens without chlorine water. Reducing contaminants such as sulphite and thiosulphate can consume liberated halogen. Therefore these species must be identified or removed before interpreting an organic-layer test.

Chromyl chloride is a special confirmation for many ionic chlorides, not a universal test for every chlorine-containing compound. Covalent chlorides, insoluble chlorides and compounds that hydrolyse or undergo redox reactions may not respond normally.

---

## 47. Expanded Nitrogen-Anion Analysis

Ammonium, nitrite and nitrate can interfere with one another because all may ultimately produce ammonia, NO or $\mathrm{NO_2}$ under different conditions.

The correct sequence is:

1. Test ammonium directly with NaOH before adding any ammonium reagent.
2. Test nitrite using Griess reagent or acidified iodide-starch.
3. Destroy nitrite with sulfamic acid.
4. Test the treated portion for nitrate by the brown-ring or Devarda method.

In the brown-ring test, nitrate is not “complexed directly.” It is first reduced to NO by $\mathrm{Fe^{2+}}$. NO then coordinates to another ferrous centre. Excessive heating, shaking or mixing with concentrated acid destroys the sharp interface and may oxidise the complex.

Devarda's alloy contains aluminium with copper and zinc. Aluminium is the principal reducing metal in alkaline solution. Nitrate nitrogen changes from +5 to −3:

$$\mathrm{NO_3^-+8e^-+9H_2O\rightarrow NH_3+9OH^-}$$

Aluminium supplies electrons while forming aluminate. Because nitrite can also be reduced and pre-existing ammonium also gives ammonia, the test is meaningful only after controlling both interferences.

Nitrate is thermally stable in alkali-metal nitrates with different products:

$$\mathrm{2NaNO_3\xrightarrow{\Delta}2NaNO_2+O_2}$$

but many heavy-metal nitrates give metal oxide, $\mathrm{NO_2}$ and $\mathrm{O_2}$. Thermal behaviour can support, but should not replace, a wet confirmation.

---

## 81. Complete Nitrite Named-Test Series

### 81.1 Brown-fume test

Cold dilute acid produces nitrous acid, which decomposes:

$$\mathrm{2HNO_2\rightarrow NO+NO_2+H_2O}$$

NO becomes brown $\mathrm{NO_2}$ in air.

### 81.2 Nitrite brown-ring test

Nitrite directly generates NO in mild acid and forms the nitrosyl ferrous complex with $\mathrm{FeSO_4}$. Unlike the nitrate procedure, concentrated sulphuric acid is unnecessary. This similarity is why nitrite interferes with the nitrate brown-ring test.

### 81.3 KI-starch test

$$\mathrm{2NO_2^-+2I^-+4H^+\rightarrow I_2+2NO+2H_2O}$$

Iodine turns starch deep blue.

### 81.4 Acidified permanganate test

$$\mathrm{5NO_2^-+2MnO_4^-+6H^+\rightarrow5NO_3^-+2Mn^{2+}+3H_2O}$$

Purple colour disappears.

### 81.5 Ammonium-chloride destruction

On boiling with excess ammonium ion:

$$\mathrm{NH_4^+ + NO_2^-\rightarrow N_2\uparrow+2H_2O}$$

This removes nitrite without introducing a strong oxidant.

### 81.6 Urea test

Acidified nitrite decomposes urea:

$$\mathrm{CO(NH_2)_2+2HNO_2\rightarrow CO_2+2N_2+3H_2O}$$

### 81.7 Thiourea test

Thiourea reacts with nitrous acid through a more complex redox/decomposition sequence, giving nitrogenous gases and sulphur-containing products. It is used for nitrite destruction/detection under acetic-acid conditions.

### 81.8 Sulfamic-acid test

$$\mathrm{NH_2SO_3H+HNO_2\rightarrow N_2\uparrow+H_2SO_4+H_2O}$$

This clean, rapid reaction is preferred for removing nitrite before nitrate analysis.

### 81.9 Griess-Ilosvay reaction

Nitrous acid diazotises sulphanilic acid:

$$\mathrm{ArNH_2+HNO_2+H^+\rightarrow ArN_2^++2H_2O}$$

The diazonium ion couples with $\alpha$-naphthylamine or a modern coupling amine to form a pink/red azo dye.

**Named reaction:** diazotisation followed by azo coupling.

### 81.10 Indole test

Acidified nitrite nitrosates/oxidises indole to a red product. Ferric ion can interfere and is masked by tartrate when required.

---

## 82. Complete Nitrate Named-Test Series

### 82.1 Brown-ring test

**Named test:** Brown-ring test.  
**Reagents:** fresh $\mathrm{FeSO_4}$ and concentrated $\mathrm{H_2SO_4}$.

$$\mathrm{NO_3^-+3Fe^{2+}+4H^+\rightarrow NO+3Fe^{3+}+2H_2O}$$

$$\mathrm{Fe^{2+}+NO+5H_2O\rightarrow[Fe(H_2O)_5(NO)]^{2+}}$$

### 82.2 Devarda's-alloy test

**Named test:** Devarda reduction.  
**Reagent:** Cu-Al-Zn alloy in strong alkali.  
**Product:** ammonia.

$$\mathrm{3NO_3^-+8Al+5OH^-+18H_2O\rightarrow3NH_3+8[Al(OH)_4]^-}$$

### 82.3 Copper-turnings test

Concentrated nitric acid generated from nitrate oxidises Cu to blue $\mathrm{Cu^{2+}}$ with brown $\mathrm{NO_2}$:

$$\mathrm{Cu+4HNO_3\rightarrow Cu(NO_3)_2+2NO_2+2H_2O}$$

### 82.4 Reduction-to-nitrite test

Nitrate is reduced with zinc or a suitable mild reducing system to nitrite, which is then identified by Griess reagent:

$$\mathrm{NO_3^-+2H^++2e^-\rightarrow NO_2^-+H_2O}$$

This indirect test is sensitive but any original nitrite must first be removed or measured separately.

### 82.5 Diphenylamine test

In strongly acidic medium, nitrate/other oxidants oxidise diphenylamine to a deep blue quinoid product.

**Limitation:** chlorate, bromate, dichromate, permanganate, nitrite and other oxidants also respond. It is sensitive but not specific.

### 82.6 Brucine test

Nitrate in concentrated sulphuric acid gives a yellow-to-red colour with brucine through nitration/oxidation products.

**Limitation:** hazardous concentrated acid and poor specificity make it a supporting classical test, not the preferred JEE confirmation.

---

## 84. Complete Halide Named-Test Series

### 84.1 Manganese-dioxide test

Heat a halide with $\mathrm{MnO_2}$ and concentrated sulphuric acid:

$$\mathrm{MnO_2+4H^++2X^-\rightarrow Mn^{2+}+X_2+2H_2O}$$

- chloride: greenish-yellow $\mathrm{Cl_2}$;
- bromide: red-brown $\mathrm{Br_2}$;
- iodide: violet iodine/black deposit.

### 84.2 Silver-nitrate and ammonia test

**Named analytical sequence:** acidified silver nitrate followed by ammonia-solubility differentiation.

### 84.3 Chromyl-chloride test

**Named test for chloride:** chromyl-chloride test. Red $\mathrm{CrO_2Cl_2}$ vapour is absorbed in alkali, forming yellow chromate, then confirmed as yellow $\mathrm{PbCrO_4}$.

### 84.4 Layer test

**Named test for Br⁻ and I⁻:** layer test. Chlorine water liberates halogen, extracted into an immiscible organic solvent:

- bromine: red/orange-brown layer;
- iodine: violet layer.

Excess chlorine can convert bromine partly to pale BrCl-type interhalogen colour under some conditions and oxidise iodine fully to iodate.

### 84.5 Fluorescein-eosin test

**Named test for bromine/bromide:** fluorescein test. Bromination of fluorescein produces red eosin.

### 84.6 Fuchsin test

Free bromine restores/produces a blue-violet brominated dye from appropriately decolourised fuchsin reagent.

### 84.7 Copper-sulphate test for iodide

$$\mathrm{2Cu^{2+}+4I^-\rightarrow2CuI\downarrow+I_2}$$

Thiosulphate removes iodine and exposes white CuI.

### 84.8 Mercuric-chloride test for iodide

$$\mathrm{Hg^{2+}+2I^-\rightarrow HgI_2\downarrow}$$

Scarlet $\mathrm{HgI_2}$ dissolves in excess iodide:

$$\mathrm{HgI_2+2I^-\rightarrow[HgI_4]^{2-}}$$

### 84.9 Catalytic Ce(IV) test for iodide

Iodide catalyses certain Ce(IV)-mediated oxidation reactions, accelerating disappearance of yellow Ce(IV) colour. The test is sensitive but catalytic poisons and other reducing ions interfere.

---
`;

export default function SaltAnalysisPart05() {
  return <SaltAnalysisArticle metadata={metadata} content={content} />;
}
