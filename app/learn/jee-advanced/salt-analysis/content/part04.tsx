import { SaltAnalysisArticle } from "../SaltAnalysisArticle";

export const metadata = {
  part: 4,
  title: "Sulphur-Containing Acid Radicals",
  chapter: "Salt Analysis",
  exam: "JEE Advanced",
};

const content = String.raw`
## 7. Sulphite

### 7.1 Dilute-acid test

$$\mathrm{SO_3^{2-}+2H^+\rightarrow SO_2\uparrow+H_2O}$$

$\mathrm{SO_2}$ is colourless with a pungent, suffocating smell.

### 7.2 Reducing tests

Acidified permanganate is decolourised:

$$\mathrm{5SO_2+2MnO_4^-+2H_2O\rightarrow5SO_4^{2-}+4H^++2Mn^{2+}}$$

Acidified dichromate changes orange to green:

$$\mathrm{3SO_2+Cr_2O_7^{2-}+2H^+\rightarrow3SO_4^{2-}+2Cr^{3+}+H_2O}$$

### 7.3 Barium salt test

$$\mathrm{Ba^{2+}+SO_3^{2-}\rightarrow BaSO_3\downarrow}$$

$\mathrm{BaSO_3}$ dissolves in dilute mineral acid with evolution of $\mathrm{SO_2}$:

$$\mathrm{BaSO_3+2H^+\rightarrow Ba^{2+}+SO_2+H_2O}$$

This distinguishes it from acid-insoluble $\mathrm{BaSO_4}$.

---

## 8. Thiosulphate

### 8.1 Acid decomposition

$$\mathrm{S_2O_3^{2-}+2H^+\rightarrow SO_2\uparrow+S\downarrow+H_2O}$$

Observation: pungent gas and a milky/yellow turbidity due to sulphur.

### 8.2 Silver nitrate

Initially:

$$\mathrm{2Ag^+ + S_2O_3^{2-}\rightarrow Ag_2S_2O_3\downarrow}$$

The precipitate rapidly darkens through decomposition to black $\mathrm{Ag_2S}$:

$$\mathrm{Ag_2S_2O_3\rightarrow Ag_2S\downarrow+SO_3}$$

### 8.3 Iodine consumption

$$\mathrm{2S_2O_3^{2-}+I_2\rightarrow S_4O_6^{2-}+2I^-}$$

This reaction is quantitative and underlies iodometric titration.

**Distinction from sulphite:** both reduce iodine/permanganate, but thiosulphate gives sulphur turbidity on acidification.

---

## 9. Sulphide

### 9.1 Dilute-acid test

$$\mathrm{S^{2-}+2H^+\rightarrow H_2S\uparrow}$$

### 9.2 Lead acetate confirmation

$$\mathrm{Pb^{2+}+S^{2-}\rightarrow PbS\downarrow}$$

Black PbS forms.

### 9.3 Sodium nitroprusside

In alkaline solution, sulphide produces a violet/purple colour with sodium nitroprusside:

$$\mathrm{[Fe(CN)_5NO]^{2-}+S^{2-}\rightarrow[Fe(CN)_5NOS]^{4-}}$$

### 9.4 Oxidation-state reasoning

Sulphur in $\mathrm{S^{2-}}$ is at its minimum common oxidation state, so sulphide behaves only as a reducing agent in ordinary reactions.

---

## 48. Expanded Sulphur-Anion Network

Sulphide, sulphite, thiosulphate and sulphate represent sulphur at −2, +4, average +2, and +6 oxidation states respectively. Their redox behaviour follows these states.

- $\mathrm{S^{2-}}$ is strongly reducing.
- $\mathrm{SO_3^{2-}}$ is usually reducing but can also be oxidised to sulphate.
- $\mathrm{S_2O_3^{2-}}$ undergoes both redox and disproportionation chemistry.
- $\mathrm{SO_4^{2-}}$ is comparatively redox-inert under routine analysis.

Thiosulphate contains two nonequivalent sulphur atoms. One is sulphane-like and one sulphate-like; assigning +2 to each is only an average. This structural difference explains formation of tetrathionate with iodine:

$$\mathrm{2S_2O_3^{2-}\rightarrow S_4O_6^{2-}+2e^-}$$

With strong oxidants, thiosulphate may be oxidised beyond tetrathionate to sulphate. With acid, unstable thiosulphuric acid decomposes into sulphur dioxide, sulphur and water.

Sulphite forms temporary addition compounds with aldehydes and can bleach certain dyes by reduction. Its bleaching differs from chlorine bleaching: reducing bleach may be reversed by aerial oxidation, whereas oxidative destruction of a chromophore is usually permanent.

For sulphate, acidify before adding barium ion. If a precipitate already formed before acidification, dissolving it afterwards is less reliable because occluded or transformed precipitates can persist. Correct reagent order is part of the test.

---

## 79. Named Sulphide Tests

### 79.1 Sodium nitroprusside test

**Reagent:** freshly prepared sodium nitroprusside in alkaline medium.  
**Observation:** violet/purple colour due to thionitroprusside.

$$\mathrm{[Fe(CN)_5NO]^{2-}+S^{2-}\rightarrow[Fe(CN)_5NOS]^{4-}}$$

**Trap:** Passing $\mathrm{H_2S}$ into neutral nitroprusside does not necessarily give the colour because $[\mathrm{S^{2-}}]$ is too low. Make the solution alkaline.

### 79.2 Lead acetate paper test

$$\mathrm{Pb(CH_3COO)_2+H_2S\rightarrow PbS\downarrow+2CH_3COOH}$$

Moist lead acetate paper becomes black. The paper must be moist to absorb the gas. Other sulphur species that generate $\mathrm{H_2S}$ under the test conditions also respond.

### 79.3 Cadmium acetate test

$$\mathrm{Cd^{2+}+H_2S\rightarrow CdS\downarrow+2H^+}$$

Yellow CdS is formed. This is useful when black lead sulphide is visually unsuitable.

### 79.4 Silver-foil test

Hydrogen sulphide tarnishes clean silver:

$$\mathrm{4Ag+2H_2S+O_2\rightarrow2Ag_2S+2H_2O}$$

A black film appears. Ordinary sulphur contamination can also tarnish silver, so a blank is helpful.

### 79.5 Methylene-blue test

In acid solution, $\mathrm{H_2S}$ reacts with $p$-aminodimethylaniline in the presence of an oxidant such as $\mathrm{Fe^{3+}}$ to form methylene blue. The exact multistep oxidation/coupling equation is usually represented schematically:

$$\mathrm{H_2S+p\text{-}aminodimethylaniline\xrightarrow[Fe^{3+}]{acid}methylene\ blue}$$

This is a highly sensitive test for soluble sulphide/$\mathrm{H_2S}$.

### 79.6 Iodine-azide test

Normally, azide and iodine react slowly. Sulphide catalyses rapid nitrogen evolution:

$$\mathrm{2N_3^-+I_2\rightarrow3N_2\uparrow+2I^-}$$

**Observation:** colourless nitrogen gas and discharge of iodine colour.  
**Interferences:** thiocyanate and thiosulphate can produce similar effects; they must be absent.

---

## 80. Named Thiosulphate Tests

### 80.1 Acid-decomposition test

$$\mathrm{S_2O_3^{2-}+2H^+\rightarrow SO_2\uparrow+S\downarrow+H_2O}$$

This is the quickest distinction from sulphite: thiosulphate gives sulphur turbidity.

### 80.2 Iodine test

$$\mathrm{2S_2O_3^{2-}+I_2\rightarrow S_4O_6^{2-}+2I^-}$$

Iodine colour disappears without immediate sulphate formation under mild conditions.

### 80.3 Ferric-chloride test

Ferric ion initially forms a transient violet thiosulphato complex. It then oxidises thiosulphate and is reduced to ferrous ion, so the colour disappears:

$$\mathrm{2Fe^{3+}+2S_2O_3^{2-}\rightarrow2Fe^{2+}+S_4O_6^{2-}}$$

**Observation sequence:** violet $\rightarrow$ colourless/pale green.

### 80.4 KCN followed by FeCl₃ test

Thiosulphate reacts with cyanide to form thiocyanate:

$$\mathrm{S_2O_3^{2-}+CN^-\rightarrow SO_3^{2-}+SCN^-}$$

Ferric ion then gives a blood-red thiocyanate complex:

$$\mathrm{Fe^{3+}+SCN^-\rightleftharpoons[FeSCN]^{2+}}$$

This is a specific classical route for thiosulphate after interfering thiocyanate has been excluded. Cyanide makes it a theoretical, controlled-laboratory test.

### 80.5 Tris(ethylenediamine)nickel(II) nitrate test

$\mathrm{[Ni(en)_3]^{2+}}$ gives a characteristic crystalline precipitate with thiosulphate under specified concentration conditions. This is less common in JEE questions but appears in comprehensive qualitative-analysis tables.

### 80.6 Blue-ring test

Layer a thiosulphate/ammonium molybdate mixture over concentrated sulphuric acid. A blue ring develops at the junction because reduced molybdenum blue species form.

**Precautions**

- keep the interface undisturbed;
- use small quantities;
- sulphite and other reducing agents may interfere;
- concentrated acid makes the test hood-only.

---
`;

export default function SaltAnalysisPart04() {
  return <SaltAnalysisArticle metadata={metadata} content={content} />;
}
