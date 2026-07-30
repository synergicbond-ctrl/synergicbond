import { SaltAnalysisArticle } from "../SaltAnalysisArticle";

export const metadata = {
  part: 12,
  title: "Group IV: Nickel, Cobalt, Manganese and Zinc",
  chapter: "Salt Analysis",
  exam: "JEE Advanced",
};

const content = String.raw`
## 27. Group IV — Nickel, Cobalt, Manganese, Zinc

In ammoniacal medium, the larger $[\mathrm{S^{2-}}]$ precipitates:

| Ion | Sulphide | Colour |
|---|---|---|
| $\mathrm{Ni^{2+}}$ | NiS | Black |
| $\mathrm{Co^{2+}}$ | CoS | Black |
| $\mathrm{Mn^{2+}}$ | MnS | Flesh/buff |
| $\mathrm{Zn^{2+}}$ | ZnS | White |

### 27.1 Why ammoniacal medium is used

Alkalinity increases ionisation of $\mathrm{H_2S}$ and hence $[\mathrm{S^{2-}}]$. $\mathrm{NH_4Cl/NH_4OH}$ buffer controls $[\mathrm{OH^-}]$ and reduces unwanted hydroxide precipitation.

### 27.2 Nickel

Dimethylglyoxime (DMG) gives a bright rose-red precipitate in ammoniacal medium:

$$\mathrm{Ni^{2+}+2H_2DMG+2OH^-\rightarrow Ni(DMG)_2\downarrow+2H_2O}$$

This is one of the most characteristic tests in salt analysis.

### 27.3 Cobalt

With thiocyanate in suitable solvent/concentrated conditions, cobalt forms a deep blue thiocyanato complex:

$$\mathrm{Co^{2+}+4SCN^-\rightleftharpoons[Co(SCN)_4]^{2-}}$$

Nitrite in acetic acid can produce yellow potassium cobaltinitrite:

$$\mathrm{3K^+ +[Co(NO_2)_6]^{3-}\rightarrow K_3[Co(NO_2)_6]\downarrow}$$

### 27.4 Manganese

Oxidation with sodium bismuthate in nitric acid gives purple permanganate:

$$\mathrm{2Mn^{2+}+5BiO_3^-+14H^+\rightarrow2MnO_4^-+5Bi^{3+}+7H_2O}$$

Alternatively, oxidation may first produce brown/black $\mathrm{MnO_2}$ under milder alkaline conditions.

### 27.5 Zinc

White ZnS:

$$\mathrm{Zn^{2+}+S^{2-}\rightarrow ZnS\downarrow}$$

Zinc hydroxide is amphoteric:

$$\mathrm{Zn^{2+}+2OH^-\rightarrow Zn(OH)_2\downarrow}$$

$$\mathrm{Zn(OH)_2+2OH^-\rightarrow[Zn(OH)_4]^{2-}}$$

It also dissolves in excess ammonia:

$$\mathrm{Zn^{2+}+4NH_3\rightleftharpoons[Zn(NH_3)_4]^{2+}}$$

With potassium ferrocyanide, zinc gives a white precipitate of zinc ferrocyanide.

### 27.6 Useful sulphide-solubility distinction

Fresh MnS and ZnS dissolve in dilute non-oxidising acids, releasing $\mathrm{H_2S}$. NiS and CoS are much more resistant. This permits subgroup separation.

---

## 52. Nickel, Cobalt, Manganese and Zinc: Complete Separation Logic

The black colours of NiS and CoS can mask flesh MnS and white ZnS. Treating the mixed sulphides with dilute non-oxidising acid dissolves MnS and ZnS more readily, leaving NiS and CoS.

In the acid-soluble fraction, add excess NaOH. Zinc hydroxide dissolves as zincate, while manganese hydroxide remains and rapidly oxidises in air:

$$\mathrm{Mn(OH)_2+\tfrac12O_2\rightarrow MnO(OH)+\tfrac12H_2O}$$

The initially pale precipitate becomes brown. Zinc is recovered from zincate by controlled acidification and confirmed as ZnS or zinc ferrocyanide.

Nickel and cobalt require separate complex reactions. In ammoniacal tartrate/citrate conditions, DMG selectively precipitates nickel as the square-planar red chelate. Cobalt remains in solution. Cobalt can then be oxidised and precipitated as cobaltinitrite or extracted as the blue thiocyanato complex.

Strong oxidants convert manganese(II) to permanganate only under suitable acidic conditions. Sodium bismuthate is useful because excess solid reagent can be filtered, leaving purple permanganate in solution. Chloride must be avoided in strongly oxidising acid because it can be oxidised to chlorine and consume reagent.

---

## 88. Named Tests for Groups III and IV Cations

### 88.1 Aluminon lake test

**Named test:** aluminon test/lake test. Aluminium hydroxide adsorbs the red aluminon dye, producing a red lake. Fe³⁺ and Cr³⁺ must be removed or masked because coloured hydroxides interfere.

### 88.2 Thenard's-blue test

**Named test:** Thenard's blue. $\mathrm{Al_2O_3}$ or an aluminium residue treated with cobalt nitrate and ignited gives blue cobalt aluminate:

$$\mathrm{CoO+Al_2O_3\rightarrow CoAl_2O_4}$$

### 88.3 Chromate test for chromium(III)

Oxidise Cr(III) in alkaline medium to yellow chromate, then confirm with lead acetate.

### 88.4 Nickel DMG test

**Named test:** dimethylglyoxime test. Ammoniacal Ni²⁺ gives rosy-red square-planar $\mathrm{Ni(DMG)_2}$.

### 88.5 Cobalt Fischer's-salt test

Oxidise cobalt(II) with nitrite in acetic acid in the presence of K⁺:

$$\mathrm{Co^{2+}\xrightarrow[NO_2^-]{oxidation}[Co(NO_2)_6]^{3-}}$$

$$\mathrm{3K^+ +[Co(NO_2)_6]^{3-}\rightarrow K_3[Co(NO_2)_6]\downarrow}$$

Yellow potassium hexanitritocobaltate(III) is called **Fischer's salt** in classical analysis.

### 88.6 Cobalt thiocyanate test

Deep-blue $\mathrm{[Co(SCN)_4]^{2-}}$ forms in concentrated thiocyanate and a low-water organic medium. Fe³⁺ gives blood-red thiocyanate and must be removed/masked.

### 88.7 Rinmann's-green test

**Named test for zinc:** cobalt-zinc oxide/cobalt zincate gives a green residue on ignition.

### 88.8 Sodium-bismuthate test for manganese

**Named test:** sodium-bismuthate oxidation. Mn²⁺ becomes purple $\mathrm{MnO_4^-}$ in nitric acid.

### 88.9 Persulphate test for manganese

Persulphate oxidises Mn²⁺ to permanganate in acid, commonly catalysed by Ag⁺:

$$\mathrm{2Mn^{2+}+5S_2O_8^{2-}+8H_2O\rightarrow2MnO_4^-+10SO_4^{2-}+16H^+}$$

---
`;

export default function SaltAnalysisPart12() {
  return <SaltAnalysisArticle metadata={metadata} content={content} />;
}
