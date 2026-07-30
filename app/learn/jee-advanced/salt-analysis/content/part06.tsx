import { SaltAnalysisArticle } from "../SaltAnalysisArticle";

export const metadata = {
  part: 6,
  title: "Sulphate, Phosphate, Oxalate and Acetate",
  chapter: "Salt Analysis",
  exam: "JEE Advanced",
};

const content = String.raw`
## 13. Sulphate

Acidify with dilute HCl and add $\mathrm{BaCl_2}$:

$$\mathrm{Ba^{2+}+SO_4^{2-}\rightarrow BaSO_4\downarrow}$$

The white precipitate is insoluble in dilute HCl and dilute $\mathrm{HNO_3}$.

### Why acidification is essential

Barium carbonate, sulphite, phosphate, and oxalate may also be white. Their precipitates dissolve or react in acid, while $\mathrm{BaSO_4}$ remains insoluble.

### Lead acetate

$$\mathrm{Pb^{2+}+SO_4^{2-}\rightarrow PbSO_4\downarrow}$$

White $\mathrm{PbSO_4}$ dissolves in concentrated ammonium acetate due to soluble lead acetate/complex formation. This distinguishes it from some other lead salts.

---

## 14. Phosphate

## 14.1 Ammonium molybdate test

Acidify with nitric acid, add ammonium molybdate, and warm. A canary-yellow precipitate of ammonium phosphomolybdate forms.

A simplified representation is:

$$\mathrm{PO_4^{3-}+12MoO_4^{2-}+24H^+ +3NH_4^+\rightarrow (NH_4)_3[PMo_{12}O_{40}]\downarrow+12H_2O}$$

## 14.2 Magnesia-mixture test

In ammoniacal medium:

$$\mathrm{Mg^{2+}+NH_4^++PO_4^{3-}\rightarrow MgNH_4PO_4\downarrow}$$

White crystalline $\mathrm{MgNH_4PO_4}$ forms.

On ignition:

$$\mathrm{2MgNH_4PO_4\xrightarrow{\Delta}Mg_2P_2O_7+2NH_3+H_2O}$$

## 14.3 Silver nitrate

$$\mathrm{3Ag^++PO_4^{3-}\rightarrow Ag_3PO_4\downarrow}$$

Silver phosphate is yellow and dissolves in nitric acid and ammonia.

**Interference:** phosphate precipitates cations from later analytical groups in ammoniacal medium and must be removed before systematic cation analysis.

---

## 15. Oxalate

### 15.1 Calcium chloride

$$\mathrm{Ca^{2+}+C_2O_4^{2-}\rightarrow CaC_2O_4\downarrow}$$

White calcium oxalate is insoluble in acetic acid but soluble in mineral acids.

### 15.2 Permanganate test

Warm acidified permanganate is decolourised:

$$\mathrm{5C_2O_4^{2-}+2MnO_4^-+16H^+\rightarrow10CO_2+2Mn^{2+}+8H_2O}$$

The reaction is slow initially and becomes faster because $\mathrm{Mn^{2+}}$ acts as an autocatalyst.

**JEE cue:** Heating is required; chloride-containing acid should be avoided because chloride may be oxidised by permanganate under strong conditions.

---

## 16. Acetate

### 16.1 Ester test

Warm the salt with ethanol and concentrated sulphuric acid:

$$\mathrm{CH_3COOH+C_2H_5OH\rightleftharpoons CH_3COOC_2H_5+H_2O}$$

Ethyl acetate has a pleasant fruity odour.

### 16.2 Ferric chloride

Neutral ferric chloride gives a deep red colour due to ferric acetate/acetato complexes. On boiling, a reddish-brown basic ferric acetate precipitate may form.

### 16.3 Cacodyl oxide test

Historically, acetate heated with arsenic trioxide forms foul-smelling cacodyl oxide. Because arsenic compounds are extremely toxic, this test is of theoretical interest only and should not be performed in routine teaching laboratories.

---

## 65. Missing Acid-Radical Tests

### 65.1 Carbonate versus bicarbonate by phenolphthalein

Carbonate solution is sufficiently alkaline by hydrolysis to turn phenolphthalein pink:

$$\mathrm{CO_3^{2-}+H_2O\rightleftharpoons HCO_3^-+OH^-}$$

Bicarbonate solution is much less alkaline and generally remains colourless with phenolphthalein under the specified dilute conditions. This is a supporting test; concentration and mixed carbonate/bicarbonate systems affect the result.

### 65.2 Formate

Formate is reducing. With mercuric chloride, mercury(II) is reduced through calomel to grey mercury:

$$\mathrm{2HgCl_2+HCOO^-+H^+\rightarrow Hg_2Cl_2\downarrow+CO_2+2HCl}$$

On further reduction:

$$\mathrm{Hg_2Cl_2+HCOO^-+H^+\rightarrow2Hg\downarrow+CO_2+2HCl}$$

This distinguishes formate from acetate, which is confirmed more characteristically by ester formation.

### 65.3 Bromide by fluorescein

Oxidise bromide to bromine. Bromine converts yellow fluorescein on filter paper into red eosin/tetrabromofluorescein. Chlorine may bleach the reagent and iodine may produce confusing red-violet iodinated material, so the test is performed under controlled conditions after separating interferences.

### 65.4 Bromide by fuchsin

Free bromine can convert decolourised fuchsin reagent into a blue/violet brominated dye. The test detects liberated bromine, not bromide directly.

### 65.5 Iodide with copper(II)

Copper(II) oxidises iodide:

$$\mathrm{2Cu^{2+}+4I^-\rightarrow2CuI\downarrow+I_2}$$

CuI is white, but brown $\mathrm{I_3^-}$ can mask it. Add thiosulphate:

$$\mathrm{I_2+2S_2O_3^{2-}\rightarrow2I^-+S_4O_6^{2-}}$$

The iodine colour disappears and white CuI becomes visible.

### 65.6 Sulphate by permanganate adsorption

When $\mathrm{BaSO_4}$ is precipitated in the presence of dilute permanganate under controlled conditions, the precipitate may adsorb $\mathrm{MnO_4^-}$ and appear pink/violet. The colour resists ordinary washing because it is associated with adsorption on the freshly formed precipitate. This is a supporting adsorption test, not a replacement for the acidified barium test.

### 65.7 Nitrite confirmations beyond the basic set

- Griess reagent: pink/red azo dye.
- Acidified KI-starch: blue due to liberated iodine.
- Acidified permanganate: decolourised.
- Urea/sulfamic acid: nitrite destroyed with evolution of nitrogen.
- Indole reagent: red product under specified acidic conditions.

---

## 83. Acetate, Formate and Oxalate: Full Reaction Set

### 83.1 Neutral ferric-chloride comparison

| Anion | Initial FeCl₃ observation | On boiling |
|---|---|---|
| Acetate | Deep red ferric acetate/acetato complex | Reddish-brown basic ferric acetate precipitate |
| Formate | Red coloration | Basic ferric salt may form |
| Oxalate | Yellow/green ferrioxalate complex | Remains complexed under suitable conditions |

The reagent does not by itself distinguish all three; follow-up tests are required.

### 83.2 Esterification

Acetate:

$$\mathrm{CH_3COOH+C_2H_5OH\rightleftharpoons CH_3COOC_2H_5+H_2O}$$

Formate:

$$\mathrm{HCOOH+C_2H_5OH\rightleftharpoons HCOOC_2H_5+H_2O}$$

Ethyl acetate and ethyl formate have pleasant odours. Oxalate can form diethyl oxalate under stronger conditions; smell alone is not a safe distinction.

### 83.3 Cacodyl-oxide test

**Named test for acetate:** cacodyl-oxide test. Acetate heated with $\mathrm{As_2O_3}$ can form cacodyl oxide, historically recognised by an extremely offensive odour. Because volatile arsenic compounds are highly toxic, this is theory only.

### 83.4 Mercury(II)-formate test

**Named test for formate:** mercuric-chloride/formate reduction. White calomel forms, then grey mercury:

$$\mathrm{2HgCl_2+HCOOH\rightarrow Hg_2Cl_2\downarrow+CO_2+2HCl}$$

$$\mathrm{Hg_2Cl_2+HCOOH\rightarrow2Hg\downarrow+CO_2+2HCl}$$

### 83.5 Manganese(II)-oxalate test

Oxalate gives a pale precipitate with $\mathrm{Mn^{2+}}$ under controlled conditions:

$$\mathrm{Mn^{2+}+C_2O_4^{2-}\rightarrow MnC_2O_4\downarrow}$$

On suitable oxidation, the precipitate/oxalate reduces permanganate.

### 83.6 Permanganate-oxalate reaction

$$\mathrm{5C_2O_4^{2-}+2MnO_4^-+16H^+\rightarrow10CO_2+2Mn^{2+}+8H_2O}$$

**Named kinetic feature:** autocatalysis by $\mathrm{Mn^{2+}}$.

---
`;

export default function SaltAnalysisPart06() {
  return <SaltAnalysisArticle metadata={metadata} content={content} />;
}
