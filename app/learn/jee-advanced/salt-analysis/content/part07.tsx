import { SaltAnalysisArticle } from "../SaltAnalysisArticle";

export const metadata = {
  part: 7,
  title: "Borate, Fluoride, Silicate and Coloured Oxoanions",
  chapter: "Salt Analysis",
  exam: "JEE Advanced",
};

const content = String.raw`
## 17. Borate

### 17.1 Turmeric paper

Acidify the borate; boric acid turns turmeric paper reddish brown. Addition of alkali changes the spot to greenish/blue-black.

### 17.2 Alcohol flame test

Heat with methanol/ethanol and concentrated sulphuric acid to form volatile trialkyl borate:

$$\mathrm{H_3BO_3+3CH_3OH\rightleftharpoons B(OCH_3)_3+3H_2O}$$

The vapour burns with a green-edged flame.

**Interference:** copper and barium salts can also impart green shades. Extracting/producing the volatile ester helps distinguish borate.

### 17.3 Silver nitrate

Concentrated borax solution may give white silver metaborate:

$$\mathrm{Ag^+ + BO_2^-\rightarrow AgBO_2\downarrow}$$

---

## 18. Fluoride and Silicate

## 18.1 Fluoride

With calcium chloride:

$$\mathrm{Ca^{2+}+2F^-\rightarrow CaF_2\downarrow}$$

White $\mathrm{CaF_2}$ is sparingly soluble.

On treatment with concentrated sulphuric acid, HF is liberated:

$$\mathrm{CaF_2+H_2SO_4\rightarrow CaSO_4+2HF}$$

HF attacks glass:

$$\mathrm{SiO_2+4HF\rightarrow SiF_4+2H_2O}$$

$$\mathrm{SiF_4+2HF\rightarrow H_2SiF_6}$$

This reaction is studied theoretically; HF is exceptionally hazardous.

## 18.2 Silicate

Acidification gives gelatinous silicic acid:

$$\mathrm{SiO_3^{2-}+2H^+\rightarrow H_2SiO_3\downarrow}$$

On heating:

$$\mathrm{H_2SiO_3\rightarrow SiO_2+H_2O}$$

Silica with fluoride and acid can form volatile $\mathrm{SiF_4}$, which gives a white deposit/gel of silica on hydrolysis:

$$\mathrm{3SiF_4+2H_2O\rightarrow2H_2SiF_6+SiO_2\downarrow}$$

---

## 19. Chromate, Dichromate, Manganate, Permanganate

## 19.1 Chromate-dichromate equilibrium

$$\mathrm{2CrO_4^{2-}+2H^+\rightleftharpoons Cr_2O_7^{2-}+H_2O}$$

- chromate: yellow;
- dichromate: orange;
- acid shifts toward dichromate;
- alkali shifts toward chromate.

Important precipitates:

$$\mathrm{Pb^{2+}+CrO_4^{2-}\rightarrow PbCrO_4\downarrow}\quad\text{yellow}$$

$$\mathrm{2Ag^++CrO_4^{2-}\rightarrow Ag_2CrO_4\downarrow}\quad\text{brick red}$$

$$\mathrm{Ba^{2+}+CrO_4^{2-}\rightarrow BaCrO_4\downarrow}\quad\text{yellow}$$

Acidified dichromate oxidises reducing agents and changes orange $\mathrm{Cr(VI)}$ to green $\mathrm{Cr^{3+}}$.

[FIGURE:chromate-dichromate-redox]

## 19.2 Manganate and permanganate

- $\mathrm{MnO_4^{2-}}$: green;
- $\mathrm{MnO_4^-}$: purple.

In acid, manganate disproportionates:

$$\mathrm{3MnO_4^{2-}+4H^+\rightarrow2MnO_4^-+MnO_2\downarrow+2H_2O}$$

Permanganate reduction products depend on medium:

| Medium | Main product |
|---|---|
| Strongly acidic | $\mathrm{Mn^{2+}}$ |
| Neutral/weakly alkaline | $\mathrm{MnO_2}$ |
| Strongly alkaline | $\mathrm{MnO_4^{2-}}$ |

---

## 20. Interfering Anions

### 20.1 Why they interfere

Phosphate, borate, fluoride, oxalate, silicate, and arsenate can precipitate cations of later groups when the solution is made ammoniacal for Group III. The resulting precipitate may be mistaken for hydroxides or may carry cations into the wrong group.

[FIGURE:interfering-radicals-sabotage]

### 20.2 Removal by carbonate extraction

A standard approach is to boil the salt with concentrated sodium carbonate:

$$\mathrm{MX+Na_2CO_3\rightarrow MCO_3\downarrow+Na\text{-salt of the anion}}$$

The cation remains in the residue as carbonate/hydroxide, while interfering anions enter the filtrate as soluble sodium salts. This **sodium carbonate extract** is useful for anion testing.

[FIGURE:soda-extract-pipeline]

### 20.3 Removal before cation analysis

One classical approach:

1. Add concentrated $\mathrm{HNO_3}$ and evaporate to near dryness to oxidise/removal susceptible species.
2. Add concentrated HCl and evaporate to remove nitrate.
3. Treat the residue with dilute HCl and filter off insoluble material such as silica.

The exact method depends on the suspected anion. A method must not remove or introduce the cation being sought.

---

## 71. Complete Acid-Radical Test Matrix

| Anion | Preliminary test | Confirmatory test | Key observation | Major interference/precaution |
|---|---|---|---|---|
| $\mathrm{CO_3^{2-}}$ | Dilute acid | Limewater; MgSO₄; phenolphthalein | CO₂; limewater milky; immediate MgCO₃ | SO₂ also clouds limewater |
| $\mathrm{HCO_3^-}$ | Dilute acid | MgSO₄ on boiling; phenolphthalein | CO₂; no immediate MgCO₃; colourless indicator | Mixed carbonate changes result |
| $\mathrm{SO_3^{2-}}$ | Dilute acid | Acidified KMnO₄/dichromate; BaSO₃ acid solubility | SO₂; oxidant decolourised | Thiosulphate also reduces oxidants |
| $\mathrm{HSO_3^-}$ | Dilute acid | Same as sulphite | SO₂ | Distinguish by acid-base composition, not gas alone |
| $\mathrm{S^{2-}}$ | Dilute acid | Lead acetate; alkaline nitroprusside | H₂S; black PbS; violet complex | Do not acidify with oxidising HNO₃ |
| $\mathrm{S_2O_3^{2-}}$ | Dilute acid | Iodine; AgNO₃ darkening | SO₂ + S turbidity | Sulphite decolourises iodine but gives no sulphur |
| $\mathrm{NO_2^-}$ | Dilute acid | Griess; KI-starch; KMnO₄ | Brown fumes/red azo/blue starch | Must be removed before nitrate tests |
| $\mathrm{NO_3^-}$ | Conc. acid/copper support | Brown ring; Devarda | Brown ring; NH₃ after reduction | Nitrite, ammonium and oxidants interfere |
| $\mathrm{Cl^-}$ | Conc. H₂SO₄ gives HCl | AgCl/NH₃; chromyl chloride | White AgCl; deep-red CrO₂Cl₂ | Never use HCl to prepare test solution |
| $\mathrm{Br^-}$ | Conc. H₂SO₄ gives Br₂ | AgBr; layer; fluorescein | Cream AgBr; orange/red organic layer | Chlorine and iodine affect dye tests |
| $\mathrm{I^-}$ | Conc. H₂SO₄ gives I₂/H₂S etc. | AgI; layer; CuI after thiosulphate | Yellow AgI; violet organic layer | Excess chlorine destroys I₂ colour |
| $\mathrm{SO_4^{2-}}$ | No gas with dilute acid | Acidified BaCl₂ | White BaSO₄ insoluble in acid | Acidify before adding Ba²⁺ |
| $\mathrm{PO_4^{3-}}$ | Solution test | Ammonium molybdate; magnesia mixture | Canary yellow / white crystalline | Arsenate may imitate molybdate test |
| $\mathrm{BO_3^{3-}/B_4O_7^{2-}}$ | Alkaline solution | Turmeric; volatile ester flame | Reddish-brown turmeric; green flame | Cu/Ba flame interference |
| $\mathrm{C_2O_4^{2-}}$ | Heating may give CO/CO₂ | CaC₂O₄; warm acidified KMnO₄ | White ppt; decolourisation on warming | Reaction has induction period |
| $\mathrm{CH_3COO^-}$ | Dilute acid gives vinegar clue | Ester test; FeCl₃ support | Fruity ester; red ferric complex | Smell is not sole evidence |
| $\mathrm{HCOO^-}$ | Acid/heating gives reducing products | HgCl₂ reduction | White calomel then grey Hg | Other reducing anions interfere |
| $\mathrm{F^-}$ | CaF₂ | Glass etching/SiF₄ chemistry | White CaF₂; glass attacked | HF hazard; use theoretical treatment |
| $\mathrm{SiO_3^{2-}}$ | Acidification | Silicic-acid gel; fluoride conversion | Gelatinous H₂SiO₃/SiO₂ | Phosphate gels/precipitates may confuse |
| $\mathrm{CrO_4^{2-}}$ | Yellow solution | Pb²⁺/Ag⁺/Ba²⁺ precipitates | Yellow/brick-red precipitates | pH controls chromate/dichromate |
| $\mathrm{Cr_2O_7^{2-}}$ | Orange solution | H₂O₂ blue CrO₅; reduction to Cr³⁺ | Blue ether layer; orange to green | CrO₅ is unstable |
| $\mathrm{MnO_4^{2-}}$ | Green solution | Acid disproportionation | Purple MnO₄⁻ + brown MnO₂ | Stable mainly at high pH |
| $\mathrm{MnO_4^-}$ | Purple solution | Medium-dependent reduction | Mn²⁺/MnO₂/manganate | Reducing contaminants rapidly discharge colour |

---

## 85. Sulphate, Borate and Phosphate Named Tests

### 85.1 Acidified barium-chloride test

**Named confirmation for sulphate:** acidify first, then add $\mathrm{BaCl_2}$.

### 85.2 Lead-acetate test for sulphate

$$\mathrm{Pb^{2+}+SO_4^{2-}\rightarrow PbSO_4\downarrow}$$

$\mathrm{PbSO_4}$ dissolves in concentrated ammonium acetate through acetate complexation/medium effects.

### 85.3 Mercuric-nitrate test for sulphate

Mercuric nitrate can give a white basic mercuric sulphate/mercuric sulphate precipitate under controlled conditions. Chloride and other precipitating anions interfere.

### 85.4 KMnO₄-BaSO₄ adsorption test

**Named adsorption test:** precipitate BaSO₄ in the presence of dilute permanganate. Fresh BaSO₄ adsorbs $\mathrm{MnO_4^-}$ and becomes pink/violet; the colour is not easily removed by washing.

### 85.5 Turmeric-paper test for borate

**Named test:** turmeric-paper test. Acidified borate produces a reddish-brown borocurcumin complex (rosocyanine). Alkali changes it to greenish-blue/black.

### 85.6 Methyl-borate flame test

**Named reaction/test:** esterification of boric acid with methanol:

$$\mathrm{H_3BO_3+3CH_3OH\rightleftharpoons B(OCH_3)_3+3H_2O}$$

Volatile methyl borate burns with a green-edged flame.

### 85.7 Bromothymol-blue/polyol test for boric acid

Boric acid is a weak Lewis acid. Addition of glycerol or mannitol forms a chelated borate ester complex that releases protons more readily, increasing apparent acidity. Bromothymol blue or phenolphthalein can show the pH change.

**Named principle:** polyol complexation of boric acid.

### 85.8 Magnesia-mixture test for phosphate

**Named test:** magnesia-mixture test.

$$\mathrm{Mg^{2+}+NH_4^++PO_4^{3-}\rightarrow MgNH_4PO_4\downarrow}$$

### 85.9 Ammonium-molybdate test for phosphate

**Named test:** canary-yellow phosphomolybdate test. Nitric-acid medium and warming produce ammonium phosphomolybdate. Arsenate gives a related precipitate, commonly more slowly/under stronger heating.

### 85.10 Cobalt-nitrate test for phosphate

On charcoal, phosphates treated with cobalt nitrate can give a blue mass. Aluminate and silicate can give related blue shades, so it is a preliminary supporting test.

---

## 86. Chromate, Dichromate, Manganate and Permanganate Named Reactions

### 86.1 Chromate-dichromate interconversion

**Named equilibrium:** chromate-dichromate equilibrium.

$$\mathrm{2CrO_4^{2-}+2H^+\rightleftharpoons Cr_2O_7^{2-}+H_2O}$$

This is acid-base condensation, not redox.

### 86.2 Peroxochromate test

**Named test:** chromyl-peroxide/peroxochromate test. Acidified dichromate with cold $\mathrm{H_2O_2}$ forms intense blue $\mathrm{CrO_5}$, extracted into ether/amyl alcohol.

$$\mathrm{Cr_2O_7^{2-}+4H_2O_2+2H^+\rightarrow2CrO_5+5H_2O}$$

### 86.3 Chromate precipitation tests

- $\mathrm{PbCrO_4}$: yellow;
- $\mathrm{BaCrO_4}$: yellow;
- $\mathrm{Ag_2CrO_4}$: brick red.

### 86.4 Manganate disproportionation

**Named reaction:** disproportionation of manganate in acid/neutralisation:

$$\mathrm{3MnO_4^{2-}+4H^+\rightarrow2MnO_4^-+MnO_2+2H_2O}$$

Mn(VI) becomes Mn(VII) and Mn(IV).

### 86.5 Alkaline conversion of permanganate

Hot concentrated alkali can reduce/disproportionate permanganate toward green manganate in the presence of suitable reducing conditions:

$$\mathrm{MnO_4^-+e^-\rightarrow MnO_4^{2-}}$$

### 86.6 Thermal decomposition of permanganate

$$\mathrm{2KMnO_4\xrightarrow{\Delta}K_2MnO_4+MnO_2+O_2}$$

Green water-soluble manganate and brown-black insoluble $\mathrm{MnO_2}$ are produced.

---
`;

export default function SaltAnalysisPart07() {
  return <SaltAnalysisArticle metadata={metadata} content={content} />;
}
