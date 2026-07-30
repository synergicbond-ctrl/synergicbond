import { SaltAnalysisArticle } from "../SaltAnalysisArticle";

export const metadata = {
  part: 13,
  title: "Groups V and VI: Alkaline Earths and Alkali Metals",
  chapter: "Salt Analysis",
  exam: "JEE Advanced",
};

const content = String.raw`
## 28. Group V — Barium, Strontium, Calcium

Add ammonium carbonate in the presence of $\mathrm{NH_4Cl}$ and $\mathrm{NH_4OH}$:

$$\mathrm{M^{2+}+CO_3^{2-}\rightarrow MCO_3\downarrow}$$

where $\mathrm{M^{2+}=Ba^{2+},Sr^{2+},Ca^{2+}}$.

### 28.1 Why magnesium does not precipitate

The buffer and ammonium salts keep effective $[\mathrm{CO_3^{2-}}]$ and $[\mathrm{OH^-}]$ controlled. Under these conditions, the ionic product for magnesium carbonate/basic carbonate is not sufficiently exceeded, while the less soluble Ba/Sr/Ca carbonates precipitate.

### 28.2 Separation and confirmations

Convert carbonates to soluble chlorides/acetates before individual tests.

#### Barium

$$\mathrm{Ba^{2+}+CrO_4^{2-}\rightarrow BaCrO_4\downarrow}$$

Yellow $\mathrm{BaCrO_4}$ forms in acetic-acid-buffered conditions. Flame: apple green.

#### Strontium

$$\mathrm{Sr^{2+}+SO_4^{2-}\rightarrow SrSO_4\downarrow}$$

White $\mathrm{SrSO_4}$; flame: crimson.

#### Calcium

$$\mathrm{Ca^{2+}+C_2O_4^{2-}\rightarrow CaC_2O_4\downarrow}$$

White calcium oxalate; flame: brick red.

[VISUAL:group-v-separation]

### 28.3 Selective chromate logic

In acetic acid, chromate concentration is reduced by conversion toward dichromate. Because $\mathrm{BaCrO_4}$ is least soluble among the relevant alkaline-earth chromates, barium precipitates preferentially while calcium largely remains in solution; strontium behaviour is intermediate and condition-dependent.

---

## 29. Group VI — Magnesium, Sodium, Potassium

## 29.1 Magnesium

In ammoniacal solution, disodium hydrogen phosphate gives white crystalline magnesium ammonium phosphate:

$$\mathrm{Mg^{2+}+NH_4^++HPO_4^{2-}+OH^-\rightarrow MgNH_4PO_4\downarrow+H_2O}$$

Ammonium chloride prevents premature $\mathrm{Mg(OH)_2}$ precipitation.

## 29.2 Sodium

- intense golden-yellow flame;
- uranyl zinc acetate reagent gives a yellow crystalline precipitate in classical analysis.

The flame test is highly sensitive but contamination is common.

## 29.3 Potassium

- lilac flame, best seen through cobalt glass;
- sodium cobaltinitrite gives yellow potassium sodium cobaltinitrite/cobaltinitrite precipitate:

$$\mathrm{3K^+ +[Co(NO_2)_6]^{3-}\rightarrow K_3[Co(NO_2)_6]\downarrow}$$

### Ammonium interference

$\mathrm{NH_4^+}$ has size and precipitation behaviour similar to $\mathrm{K^+}$ with several complex reagents. Therefore potassium tests using cobaltinitrite, perchlorate, or chloroplatinate can be unreliable unless ammonium has been removed. In a Group VI filtrate already containing ammonium salts from earlier reagents, flame spectroscopy is especially valuable.

---

## 53. Alkaline-Earth Separation in Detail

After precipitating Ba, Sr and Ca as carbonates, dissolve the washed precipitate in acetic acid. The weak acid provides a controlled medium.

Add potassium chromate. $\mathrm{BaCrO_4}$ precipitates preferentially. Strong mineral acid would convert too much chromate into dichromate and prevent complete barium precipitation; strongly alkaline conditions could reduce selectivity.

After removing barium, sulphate precipitates strontium more readily than calcium because $\mathrm{SrSO_4}$ is less soluble than $\mathrm{CaSO_4}$. Concentration, temperature and reagent amount must be controlled because calcium sulphate is not highly soluble and can contaminate the precipitate.

Finally, ammonium oxalate gives calcium oxalate:

$$\mathrm{Ca^{2+}+C_2O_4^{2-}\rightarrow CaC_2O_4\downarrow}$$

Flame tests provide independent support, but mixtures cause overlap. Barium gives apple green, strontium crimson and calcium brick red. Sodium contamination can mask all three.

Solubility trends cannot be predicted from lattice energy alone. Hydration enthalpy and crystal structure also matter. For alkaline-earth sulphates, solubility generally decreases down the group; for hydroxides it generally increases. JEE questions often combine these trends with the analytical scheme.

---

## 89. Named Tests for Alkali and Alkaline-Earth Ions

### 89.1 Uranyl-zinc-acetate test for sodium

**Named test:** uranyl zinc acetate test. Sodium gives yellow crystalline sodium zinc uranyl acetate of variable hydrated composition. The reagent and glassware must be free of sodium contamination.

### 89.2 Potassium cobaltinitrite test

**Named test:** sodium cobaltinitrite/hexanitritocobaltate test. Potassium gives yellow $\mathrm{K_3[Co(NO_2)_6]}$ or a sodium-potassium double salt. Ammonium gives an analogous precipitate and must be absent.

### 89.3 Potassium perchlorate test

$$\mathrm{K^+ +ClO_4^-\rightarrow KClO_4\downarrow}$$

Ammonium perchlorate is much more soluble under comparable classical-test conditions, helping distinguish K⁺ from $\mathrm{NH_4^+}$.

### 89.4 Potassium chloroplatinate test

$$\mathrm{2K^+ +[PtCl_6]^{2-}\rightarrow K_2[PtCl_6]\downarrow}$$

Yellow potassium chloroplatinate forms. Ammonium also gives a yellow chloroplatinate.

### 89.5 Nessler's test for ammonium

**Named test:** Nessler's test. Ammonia with alkaline tetraiodomercurate(II) gives yellow-brown to brown basic amido-mercury iodide.

### 89.6 Magnesium magnesia-mixture-type confirmation

Magnesium in ammoniacal solution gives crystalline $\mathrm{MgNH_4PO_4}$ with hydrogen phosphate.

### 89.7 Sodium rhodizonate test for barium

**Named spot test:** sodium rhodizonate gives a red-brown barium rhodizonate spot under controlled pH. Strontium and lead can interfere; reagent acidity is critical.

### 89.8 Gypsum/microscope test for calcium

Classical microscopy can identify calcium through characteristic crystals of calcium sulphate or related derivatives. For JEE, the oxalate precipitate and brick-red flame are more important.

---
`;

export default function SaltAnalysisPart13() {
  return <SaltAnalysisArticle metadata={metadata} content={content} />;
}
