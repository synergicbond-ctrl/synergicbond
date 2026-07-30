import { SaltAnalysisArticle } from "../SaltAnalysisArticle";

export const metadata = {
  part: 10,
  title: "Group II: Acidic Sulphide Group",
  chapter: "Salt Analysis",
  exam: "JEE Advanced",
};

const content = String.raw`
## 25. Group II — Sulphides in Acidic Medium

Pass $\mathrm{H_2S}$ through the Group I filtrate containing dilute HCl.

### 25.1 Common precipitate colours

| Sulphide | Colour |
|---|---|
| CuS | Black |
| CdS | Yellow |
| PbS | Black |
| HgS | Black |
| $\mathrm{Bi_2S_3}$ | Brown/black |
| $\mathrm{As_2S_3}$ | Yellow |
| $\mathrm{As_2S_5}$ | Yellow |
| $\mathrm{Sb_2S_3}$ | Orange |
| $\mathrm{Sb_2S_5}$ | Orange/yellow |
| SnS | Brown |
| $\mathrm{SnS_2}$ | Yellow |

[FIGURE:metal-sulfide-spectrum]

### 25.2 Subgroup separation by yellow ammonium sulphide

Sulphides of As, Sb, and Sn dissolve in yellow ammonium sulphide by forming soluble thio-complexes. Sulphides of Cu, Cd, Bi, Hg, and Pb remain insoluble.

Typical examples:

$$\mathrm{As_2S_3+3S^{2-}\rightarrow2AsS_3^{3-}}$$

$$\mathrm{SnS_2+S^{2-}\rightarrow SnS_3^{2-}}$$

Acidification reprecipitates the sulphides:

$$\mathrm{2AsS_3^{3-}+6H^+\rightarrow As_2S_3\downarrow+3H_2S}$$

### 25.3 Copper

CuS dissolves in oxidising nitric acid. In ammoniacal solution:

$$\mathrm{Cu^{2+}+4NH_3\rightleftharpoons[Cu(NH_3)_4]^{2+}}$$

The tetraamminecopper(II) complex is deep blue.

With ferrocyanide:

$$\mathrm{2Cu^{2+}+[Fe(CN)_6]^{4-}\rightarrow Cu_2[Fe(CN)_6]\downarrow}$$

chocolate-brown precipitate.

### 25.4 Cadmium

Yellow CdS is the principal confirmation:

$$\mathrm{Cd^{2+}+S^{2-}\rightarrow CdS\downarrow}$$

In a Cu/Cd mixture, complexation and controlled sulphide precipitation are used to prevent black CuS from masking yellow CdS.

[FIGURE:copper-cadmium-separation]

### 25.5 Bismuth

With water, $\mathrm{BiCl_3}$ hydrolyses:

$$\mathrm{BiCl_3+H_2O\rightleftharpoons BiOCl\downarrow+2HCl}$$

White BiOCl dissolves on adding HCl. Tin(II) chloride can reduce bismuth(III) to black bismuth:

$$\mathrm{2Bi^{3+}+3Sn^{2+}\rightarrow2Bi\downarrow+3Sn^{4+}}$$

### 25.6 Mercury(II)

HgS is black and exceptionally insoluble. Tin(II) chloride gives:

$$\mathrm{2HgCl_2+SnCl_2\rightarrow Hg_2Cl_2\downarrow+SnCl_4}$$

white, followed by:

$$\mathrm{Hg_2Cl_2+SnCl_2\rightarrow2Hg\downarrow+SnCl_4}$$

grey/black.

### 25.7 Arsenic

Yellow arsenic sulphide dissolves in yellow ammonium sulphide and reprecipitates on acidification.

In the classical Gutzeit/Marsh family of tests, arsenic compounds produce arsine, which gives a dark arsenic deposit. These tests involve highly toxic arsine and are theoretical in this context.

### 25.8 Antimony

Orange $\mathrm{Sb_2S_3}$:

$$\mathrm{2Sb^{3+}+3S^{2-}\rightarrow Sb_2S_3\downarrow}$$

Metallic iron displaces black antimony from acid solution:

$$\mathrm{2Sb^{3+}+3Fe\rightarrow2Sb\downarrow+3Fe^{2+}}$$

### 25.9 Tin

- SnS: brown;
- $\mathrm{SnS_2}$: yellow.

Mercuric chloride distinguishes $\mathrm{Sn^{2+}}$ by reduction through white $\mathrm{Hg_2Cl_2}$ to grey mercury:

$$\mathrm{2HgCl_2+SnCl_2\rightarrow Hg_2Cl_2+SnCl_4}$$

$$\mathrm{Hg_2Cl_2+SnCl_2\rightarrow2Hg+SnCl_4}$$

### 25.10 Why H₂S is boiled off after Group II

If residual $\mathrm{H_2S}$ remains:

- it consumes oxidants;
- it can precipitate later-group sulphides prematurely when the solution becomes alkaline;
- it interferes with Group III chemistry.

Boil the filtrate until $\mathrm{H_2S}$ is removed, then oxidise $\mathrm{Fe^{2+}}$ to $\mathrm{Fe^{3+}}$ if the scheme requires total iron in Group III.

---

## 50. Group II Subgroups and Thio-Complex Chemistry

The Group II precipitate is commonly divided into:

- copper subgroup: Cu, Cd, Bi, Hg and residual Pb sulphides, insoluble in yellow ammonium sulphide;
- arsenic subgroup: As, Sb and Sn sulphides, soluble through thio-complex formation.

The distinction is Lewis acid-base chemistry. Sulphide-rich species of As, Sb and Sn accept extra sulphide ligands and form anionic thio complexes. Acid protonates sulphide, destroys these complexes and precipitates the neutral sulphides again.

Oxidation state matters. SnS is less readily soluble than $\mathrm{SnS_2}$ in some sulphide reagents; yellow ammonium polysulphide both oxidises Sn(II) and supplies additional sulphur. Similar oxidation effects occur for arsenic and antimony.

Within the insoluble subgroup, nitric acid dissolves several sulphides by oxidising sulphide, but HgS is exceptionally resistant. Aqua regia can dissolve HgS by combining oxidation with chloride-complex formation. Such aggressive treatment changes oxidation states and must be followed by appropriate conditioning before confirmation.

The colour of a mixed sulphide precipitate cannot reveal every ion. A small amount of yellow CdS is hidden by black CuS. Separation must precede colour confirmation. This is a recurring JEE principle: **a characteristic colour is useful only after the chemical environment has been simplified**.

---

## 87. Classical Named Tests for Group II Cations

These tests are included for theory and JEE recognition. Arsine/stibine and mercury/cadmium procedures are hazardous and must not be performed outside a properly equipped laboratory.

### 87.1 Marsh test for arsenic

**Named test:** Marsh test. Nascent hydrogen reduces arsenic compounds to arsine:

$$\mathrm{As^{3+}+6[H]\rightarrow AsH_3+3H^+}$$

Heated arsine decomposes:

$$\mathrm{2AsH_3\xrightarrow{\Delta}2As+3H_2}$$

A black arsenic mirror forms. Antimony can form stibine and a mirror, so solubility/chemical follow-up is necessary.

### 87.2 Gutzeit test

**Named test:** Gutzeit test. Arsine generated from arsenic produces a yellow-to-brown stain on mercuric-bromide/chloride paper. It is more convenient than collecting a mirror but still involves highly toxic arsine.

### 87.3 Bettendorff test for arsenic(III)

**Named test:** Bettendorff test. Stannous chloride in concentrated HCl reduces As(III) to brown/black elemental arsenic:

$$\mathrm{2As^{3+}+3Sn^{2+}\rightarrow2As\downarrow+3Sn^{4+}}$$

### 87.4 Reinsch test

**Named test:** Reinsch test. A clean copper strip placed in an acidified arsenic-containing solution receives a dark arsenic deposit. Antimony and mercury may also deposit; heating/follow-up distinguishes them.

### 87.5 Tin and purple of Cassius

Tin(II) reduces gold(III), producing colloidal gold associated with hydrous tin(IV) oxide—**purple of Cassius**:

$$\mathrm{Au^{3+}+Sn^{2+}\rightarrow Au+Sn^{4+}}$$

Stoichiometry and colloid composition are complex; the purple colour is the analytical observation.

### 87.6 Antimony matchstick/metal-deposition test

Iron or zinc reduces antimony(III) to black Sb:

$$\mathrm{2Sb^{3+}+3Fe\rightarrow2Sb\downarrow+3Fe^{2+}}$$

### 87.7 Bismuth tin(II)-chloride test

$$\mathrm{2Bi^{3+}+3Sn^{2+}\rightarrow2Bi\downarrow+3Sn^{4+}}$$

Black bismuth forms after hydrolysis/alkaline conditioning.

### 87.8 Mercury tin(II)-chloride test

**Named sequence:** white calomel followed by grey mercury:

$$\mathrm{2HgCl_2+SnCl_2\rightarrow Hg_2Cl_2\downarrow+SnCl_4}$$

$$\mathrm{Hg_2Cl_2+SnCl_2\rightarrow2Hg\downarrow+SnCl_4}$$

---
`;

export default function SaltAnalysisPart10() {
  return <SaltAnalysisArticle metadata={metadata} content={content} />;
}
