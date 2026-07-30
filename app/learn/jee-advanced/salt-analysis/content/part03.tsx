import { SaltAnalysisArticle } from "../SaltAnalysisArticle";

export const metadata = {
  part: 3,
  title: "Acid-Radical Strategy: Carbonate, Bicarbonate, Sulphite and Bisulphite",
  chapter: "Salt Analysis",
  exam: "JEE Advanced",
};

const content = String.raw`
# Acid-Radical Strategy: Carbonate, Bicarbonate, Sulphite and Bisulphite

[FIGURE:acid-radical-map]

## 1. Classification of acid radicals

There is no perfectly rigid group separation for anions comparable to the cation scheme. A useful analytical classification is based on the type of evidence produced.

### Class I: radicals giving volatile products with acids

#### Class IA: action of dilute non-oxidising acid

Common members:

$$
\mathrm{CO_3^{2-},\ HCO_3^-,\ SO_3^{2-},\ HSO_3^-,\ S^{2-},\ S_2O_3^{2-},\ NO_2^-,\ CH_3COO^-}
$$

#### Class IB: action of concentrated sulphuric acid

Includes the Class IA radicals and additional radicals such as:

$$
\mathrm{Cl^-,\ Br^-,\ I^-,\ NO_3^-,\ C_2O_4^{2-},\ F^-,\ borate}
$$

Concentrated sulphuric acid is not preferred as the first test for Class IA because it is strongly dehydrating and, in concentrated form, oxidising. It may alter the expected volatile product.

### Class II: radicals identified mainly in solution

- **Class IIA:** precipitation reactions, for example $\mathrm{SO_4^{2-}}$, $\mathrm{PO_4^{3-}}$, $\mathrm{CrO_4^{2-}}$.
- **Class IIB:** oxidation-reduction reactions, for example permanganate, manganate, chromate and dichromate.

This classification guides the order of testing but is not absolute. Chromate, for example, gives both precipitation and redox evidence.

## 2. General action of dilute acid

Use dilute HCl or dilute $\mathrm{H_2SO_4}$ on a fresh portion, chosen so that the acid does not introduce the ion being tested later.

| Radical | Main product | Preliminary observation |
|---|---|---|
| $\mathrm{CO_3^{2-}}$, $\mathrm{HCO_3^-}$ | $\mathrm{CO_2}$ | Colourless, odourless gas; effervescence |
| $\mathrm{SO_3^{2-}}$, $\mathrm{HSO_3^-}$ | $\mathrm{SO_2}$ | Colourless gas with choking/burning-sulphur odour; reducing |
| $\mathrm{S^{2-}}$ | $\mathrm{H_2S}$ | Colourless gas; blackens lead acetate paper |
| $\mathrm{S_2O_3^{2-}}$ | $\mathrm{SO_2+S}$ | Gas plus white/yellow sulphur turbidity |
| $\mathrm{NO_2^-}$ | $\mathrm{NO/NO_2}$ | Brown fumes under suitable conditions |
| $\mathrm{CH_3COO^-}$ | $\mathrm{CH_3COOH}$ | Vinegar-like odour on warming |

Do not identify a radical solely from odour. Confirm the gas chemically.

## 3. Carbonate and bicarbonate

### 3.1 Acid reaction

$$
\mathrm{CO_3^{2-}+H^+\rightarrow HCO_3^-}
$$

$$
\mathrm{HCO_3^-+H^+\rightarrow H_2CO_3\rightarrow CO_2\uparrow+H_2O}
$$

Overall:

$$
\mathrm{CO_3^{2-}+2H^+\rightarrow CO_2+H_2O}
$$

For bicarbonate:

$$
\mathrm{HCO_3^-+H^+\rightarrow CO_2+H_2O}
$$

Carbonate often shows brisker initial effervescence at comparable concentration because each carbonate ion consumes two protons and can ultimately release one molecule of carbon dioxide. Rate alone is not a safe distinction.

### 3.2 Lime-water test

Pass the gas through lime water:

$$
\mathrm{Ca(OH)_2+CO_2\rightarrow CaCO_3\downarrow+H_2O}
$$

Milky white turbidity forms. With excess carbon dioxide:

$$
\mathrm{CaCO_3+CO_2+H_2O\rightarrow Ca(HCO_3)_2(aq)}
$$

The turbidity dissolves.

Baryta water may be used similarly:

$$
\mathrm{Ba(OH)_2+CO_2\rightarrow BaCO_3\downarrow+H_2O}
$$

### 3.3 Why lime water does not by itself distinguish $\mathrm{CO_2}$ from $\mathrm{SO_2}$

Sulphur dioxide also forms a white sulphite precipitate:

$$
\mathrm{Ca(OH)_2+SO_2\rightarrow CaSO_3\downarrow+H_2O}
$$

and excess $\mathrm{SO_2}$ can dissolve it as bisulphite:

$$
\mathrm{CaSO_3+SO_2+H_2O\rightarrow Ca(HSO_3)_2(aq)}
$$

Therefore the gas must be tested for reducing action.

### 3.4 Distinguishing $\mathrm{CO_2}$ and $\mathrm{SO_2}$ with oxidising agents

Carbon dioxide contains carbon in its maximum common oxidation state, +4, and does not decolourise ordinary acidic oxidising agents.

Sulphur dioxide is reducing.

Acidified permanganate:

$$
\mathrm{2MnO_4^-+5SO_2+2H_2O\rightarrow2Mn^{2+}+5SO_4^{2-}+4H^+}
$$

Purple colour is discharged.

Acidified dichromate:

$$
\mathrm{Cr_2O_7^{2-}+3SO_2+2H^+\rightarrow2Cr^{3+}+3SO_4^{2-}+H_2O}
$$

Orange changes to green.

Bromine water:

$$
\mathrm{SO_2+Br_2+2H_2O\rightarrow H_2SO_4+2HBr}
$$

Red-brown colour disappears.

Iodine solution:

$$
\mathrm{SO_2+I_2+2H_2O\rightarrow H_2SO_4+2HI}
$$

Iodine colour disappears.

### 3.5 Phenolphthalein distinction between carbonate and bicarbonate

Carbonate hydrolyses strongly:

$$
\mathrm{CO_3^{2-}+H_2O\rightleftharpoons HCO_3^-+OH^-}
$$

Bicarbonate is amphiprotic and its solution is much less alkaline. Therefore:

- carbonate solution generally gives a pink colour with phenolphthalein;
- bicarbonate solution remains colourless under ordinary test conditions.

This distinction depends on concentration and should be supported by a precipitation test.

### 3.6 Precipitation distinction

Bicarbonates of most metals are soluble in water, whereas normal carbonates are commonly insoluble.

With $\mathrm{CaCl_2}$, $\mathrm{SrCl_2}$ or $\mathrm{BaCl_2}$ at room temperature:

$$
\mathrm{M^{2+}+CO_3^{2-}\rightarrow MCO_3\downarrow}
$$

A carbonate gives immediate white precipitate. A bicarbonate does not normally precipitate immediately in cold dilute solution. On boiling:

$$
\mathrm{2HCO_3^-\xrightarrow{\Delta}CO_3^{2-}+CO_2+H_2O}
$$

The newly formed carbonate then precipitates.

### 3.7 Carbonate precipitate atlas

| Reagent | Product with carbonate | Colour |
|---|---|---|
| $\mathrm{CaCl_2}$ | $\mathrm{CaCO_3}$ | White |
| $\mathrm{SrCl_2}$ | $\mathrm{SrCO_3}$ | White |
| $\mathrm{BaCl_2}$ | $\mathrm{BaCO_3}$ | White |
| $\mathrm{AgNO_3}$ | $\mathrm{Ag_2CO_3}$ | Pale yellow/cream |
| $\mathrm{Hg_2(NO_3)_2}$ | $\mathrm{Hg_2CO_3}$ | Yellow, unstable on heating |
| $\mathrm{CuSO_4}$ | Basic copper carbonate | Green |
| $\mathrm{Pb(CH_3COO)_2}$ | Basic lead carbonate under hydrolytic conditions | White |
| $\mathrm{MgCl_2}$ | Basic magnesium carbonate on suitable treatment | White |

### 3.8 Carbonate and bicarbonate present together

A rigorous separation uses an excess precipitating reagent that removes carbonate while leaving bicarbonate in the filtrate.

#### Method using $\mathrm{CaCl_2}$, $\mathrm{SrCl_2}$ or $\mathrm{BaCl_2}$

1. Add excess cold reagent.
2. Filter the normal carbonate precipitate.
3. Heat the filtrate or make conditions suitable for bicarbonate conversion.
4. Reprecipitation of carbonate confirms bicarbonate in the original mixture.

Reactions:

$$
\mathrm{M^{2+}+CO_3^{2-}\rightarrow MCO_3\downarrow}
$$

$$
\mathrm{2HCO_3^-\xrightarrow{\Delta}CO_3^{2-}+CO_2+H_2O}
$$

$$
\mathrm{M^{2+}+CO_3^{2-}\rightarrow MCO_3\downarrow}
$$

#### Method using excess silver nitrate

Carbonate gives $\mathrm{Ag_2CO_3}$ directly:

$$
\mathrm{2Ag^++CO_3^{2-}\rightarrow Ag_2CO_3\downarrow}
$$

After filtration, bicarbonate in the filtrate decomposes on heating and may ultimately give brown-black $\mathrm{Ag_2O}$ through unstable silver carbonate:

$$
\mathrm{2HCO_3^-\xrightarrow{\Delta}CO_3^{2-}+CO_2+H_2O}
$$

$$
\mathrm{2Ag^++CO_3^{2-}\rightarrow Ag_2CO_3\downarrow}
$$

$$
\mathrm{Ag_2CO_3\xrightarrow{\Delta}Ag_2O+CO_2}
$$

Ammonia is unsuitable at this stage because both $\mathrm{Ag_2CO_3}$ and $\mathrm{Ag_2O}$ dissolve by forming $\mathrm{[Ag(NH_3)_2]^+}$.

#### Why some reagents are unsuitable

Reagents forming basic carbonates may themselves generate bicarbonate or consume carbonate with release of $\mathrm{H^+}$. The filtrate can no longer reveal whether bicarbonate was originally present. Examples include unsuitable use of $\mathrm{HgCl_2}$, $\mathrm{MgCl_2}$, $\mathrm{ZnCl_2}$, $\mathrm{CuCl_2}$ or lead acetate for a rigorous mixture distinction.

## 4. Sulphite and bisulphite

### 4.1 Acid reaction

$$
\mathrm{SO_3^{2-}+2H^+\rightarrow SO_2\uparrow+H_2O}
$$

$$
\mathrm{HSO_3^-+H^+\rightarrow SO_2\uparrow+H_2O}
$$

The gas has reducing properties and gives the oxidising-agent tests described above.

### 4.2 Distinction by alkalinity

Sulphite hydrolyses:

$$
\mathrm{SO_3^{2-}+H_2O\rightleftharpoons HSO_3^-+OH^-}
$$

Its solution is distinctly alkaline.

Bisulphite is much less alkaline and is commonly acidic to weakly acidic depending on concentration and counter-ion. Litmus behaviour should be interpreted carefully because commercial “bisulphite” solutions can contain metabisulphite and dissolved $\mathrm{SO_2}$.

### 4.3 Distinction by precipitation

Normal sulphites of many metals are insoluble, while bisulphites are generally soluble.

$$
\mathrm{M^{2+}+SO_3^{2-}\rightarrow MSO_3\downarrow}
$$

Reagents such as $\mathrm{CaCl_2}$, $\mathrm{SrCl_2}$, $\mathrm{BaCl_2}$, lead acetate and silver nitrate can precipitate sulphite but not an equivalent cold dilute bisulphite solution immediately.

### 4.4 Oxidation with hydrogen peroxide

$$
\mathrm{SO_3^{2-}+H_2O_2\rightarrow SO_4^{2-}+H_2O}
$$

$$
\mathrm{HSO_3^-+H_2O_2\rightarrow HSO_4^-+H_2O}
$$

The final acid-base behaviour differs because oxidation of bisulphite can produce acidic hydrogen sulphate, while oxidation of sulphite produces sulphate under comparable conditions.

### 4.5 Silver nitrate behaviour

Sulphite can form a white precipitate:

$$
\mathrm{2Ag^++SO_3^{2-}\rightarrow Ag_2SO_3\downarrow}
$$

The precipitate may dissolve in excess sulphite through complex formation. On heating, reduction to metallic silver can occur because sulphite is a reducing agent. This multi-stage behaviour is more informative than precipitate colour alone.

## 5. Alkaline nitroprusside distinction

Under specified alkaline conditions, sulphur dioxide/sulphite can react with nitroprusside reagents to give characteristic colours, while carbon dioxide/carbonate does not give the same response. Such tests are sensitive to reagent preparation and pH, so JEE questions usually focus on the underlying distinction: $\mathrm{SO_2}$ is reducing; $\mathrm{CO_2}$ is not.

## 6. Interferences in the carbonate-sulphite system

### 6.1 Both gases turn lime water milky

Resolve with an oxidising agent.

### 6.2 Thiosulphate also produces sulphur dioxide

Thiosulphate is recognised by simultaneous sulphur turbidity:

$$
\mathrm{S_2O_3^{2-}+2H^+\rightarrow S\downarrow+SO_2\uparrow+H_2O}
$$

### 6.3 Sulphide may reduce oxidants

Remove or distinguish $\mathrm{H_2S}$ by lead acetate paper or cadmium salt before using redox tests for $\mathrm{SO_2}$.

### 6.4 Nitrite can interfere with redox reagents

Nitrite can both oxidise and reduce depending on the reagent and medium. It must be tested on a separate portion.

## 7. Decision flow

[FIGURE:solubility-decision-tree-a]

1. Add dilute non-oxidising acid to a fresh portion.
2. Colourless gas with effervescence: consider $\mathrm{CO_2}$ or $\mathrm{SO_2}$.
3. Pass through lime water: white turbidity confirms one or both.
4. Test gas with acidified permanganate/dichromate:
   - no change: $\mathrm{CO_2}$;
   - decolourisation/reduction: $\mathrm{SO_2}$.
5. For carbonate/bicarbonate:
   - phenolphthalein;
   - cold alkaline-earth chloride;
   - boil filtrate for bicarbonate.
6. For sulphite/bisulphite:
   - solution alkalinity;
   - normal sulphite precipitation;
   - oxidation product and final acidity.

## 8. JEE Advanced traps

1. Excess $\mathrm{CO_2}$ and excess $\mathrm{SO_2}$ can both clear lime-water turbidity.
2. Acidified $\mathrm{KMnO_4}$ distinguishes $\mathrm{SO_2}$ from $\mathrm{CO_2}$, but not necessarily sulphite from every other reducing gas.
3. A cold precipitate with $\mathrm{CaCl_2}$ supports carbonate; precipitation only after boiling supports bicarbonate.
4. Ammonia can dissolve silver carbonate/oxide and destroy an intended separation.
5. Basic-carbonate-forming reagents may generate bicarbonate during the test.
6. Smell is never a complete identification.
7. When both carbonate and sulphite are present, both give gas with dilute acid; use redox behaviour and separate portions.
`;

export default function SaltAnalysisPart03() {
  return <SaltAnalysisArticle metadata={metadata} content={content} />;
}
