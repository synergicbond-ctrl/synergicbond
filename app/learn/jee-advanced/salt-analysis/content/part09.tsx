import { SaltAnalysisArticle } from "../SaltAnalysisArticle";

export const metadata = {
  part: 9,
  title: "Group I Cations: Silver, Lead and Mercury(I)",
  chapter: "Salt Analysis",
  exam: "JEE Advanced",
};

const content = String.raw`
# Group I Cations: Silver, Lead and Mercury(I)

## 1. Group reagent and precipitation

Add dilute hydrochloric acid to the original solution.

$$
\mathrm{Ag^++Cl^-\rightarrow AgCl\downarrow}
$$

$$
\mathrm{Pb^{2+}+2Cl^-\rightarrow PbCl_2\downarrow}
$$

$$
\mathrm{Hg_2^{2+}+2Cl^-\rightarrow Hg_2Cl_2\downarrow}
$$

All three chlorides are white. Their separation depends on different solubility and complexation behaviour.

### 1.1 Why dilute HCl is used

- enough chloride is supplied to precipitate Group I;
- excessive concentrated chloride can form soluble chloro-complexes, particularly with lead and silver under suitable conditions;
- strong acidity may alter later steps and make washing difficult.

### 1.2 Why precipitation may be incomplete

- solution too hot: $\mathrm{PbCl_2}$ is more soluble;
- insufficient chloride;
- very dilute sample;
- complexing ligands present;
- precipitation not allowed to complete.

Cool before filtration when lead is suspected.

## 2. Group I separation scheme

[VISUAL:group-i-separation]

The mixed precipitate may contain:

$$
\mathrm{AgCl+PbCl_2+Hg_2Cl_2}
$$

### Step 1: hot-water extraction of lead chloride

Treat the precipitate with hot water.

$$
\mathrm{PbCl_2(s)\rightleftharpoons Pb^{2+}(aq)+2Cl^-(aq)}
$$

$\mathrm{PbCl_2}$ dissolves appreciably in hot water, while $\mathrm{AgCl}$ and $\mathrm{Hg_2Cl_2}$ remain.

Filter while hot:

- hot filtrate: $\mathrm{Pb^{2+}}$;
- residue: $\mathrm{AgCl+Hg_2Cl_2}$.

### Step 2: ammonia treatment of the residue

Add aqueous ammonia.

Silver chloride dissolves:

$$
\mathrm{AgCl+2NH_3\rightarrow[Ag(NH_3)_2]^++Cl^-}
$$

Mercury(I) chloride gives a black mixture:

$$
\mathrm{Hg_2Cl_2+2NH_3\rightarrow Hg+HgNH_2Cl+NH_4Cl}
$$

The black/grey material contains metallic mercury and mercuric amidochloride.

Filter:

- ammoniacal filtrate: diamminesilver(I);
- black residue: mercury(I) confirmation.

## 3. Lead confirmation

The hot-water extract contains $\mathrm{Pb^{2+}}$.

### 3.1 Potassium chromate

$$
\mathrm{Pb^{2+}+CrO_4^{2-}\rightarrow PbCrO_4\downarrow}
$$

Yellow lead chromate forms.

Solubility:

- dissolves in strong alkali through hydroxo-complex formation;
- dissolves in suitable nitric-acid conditions;
- can be reprecipitated by restoring the proper chromate concentration and pH.

### 3.2 Potassium iodide

$$
\mathrm{Pb^{2+}+2I^-\rightarrow PbI_2\downarrow}
$$

Bright yellow $\mathrm{PbI_2}$ forms. It dissolves in hot water and recrystallises as golden spangles on cooling.

In excess iodide:

$$
\mathrm{PbI_2+2I^-\rightleftharpoons[PbI_4]^{2-}}
$$

Sufficient iodide can increase solubility.

### 3.3 Sulphuric acid or soluble sulphate

$$
\mathrm{Pb^{2+}+SO_4^{2-}\rightarrow PbSO_4\downarrow}
$$

White lead sulphate forms. It dissolves in ammonium acetate or concentrated acetate medium more readily than $\mathrm{BaSO_4}$.

### 3.4 Hydrogen sulphide

$$
\mathrm{Pb^{2+}+H_2S\rightarrow PbS\downarrow+2H^+}
$$

Black lead sulphide forms. It can be oxidised by nitric acid to sulphate or sulphur depending on conditions.

## 4. Silver confirmation

The ammoniacal filtrate contains $\mathrm{[Ag(NH_3)_2]^+}$.

Acidify with nitric acid:

$$
\mathrm{[Ag(NH_3)_2]^++2H^+\rightarrow Ag^++2NH_4^+}
$$

In the presence of chloride:

$$
\mathrm{Ag^++Cl^-\rightarrow AgCl\downarrow}
$$

White curdy $\mathrm{AgCl}$ reappears.

### 4.1 Potassium chromate

$$
\mathrm{2Ag^++CrO_4^{2-}\rightarrow Ag_2CrO_4\downarrow}
$$

Brick-red silver chromate forms.

### 4.2 Iodide

$$
\mathrm{Ag^++I^-\rightarrow AgI\downarrow}
$$

Yellow $\mathrm{AgI}$ is insoluble in ammonia.

### 4.3 Reduction to silver mirror or metal

Silver ion can be reduced by aldehydes, formate, or suitable reducing agents. In salt analysis, precipitation-complexation is usually preferred because reducing tests are less group-specific.

## 5. Mercury(I) confirmation

The blackening with ammonia is the classic Group I confirmation.

Mercury(I) exists as the dimeric cation:

$$
\mathrm{Hg_2^{2+}}
$$

not as isolated monatomic $\mathrm{Hg^+}$ in ordinary salts.

### 5.1 Disproportionation tendency

Mercury(I) may disproportionate:

$$
\mathrm{Hg_2^{2+}\rightleftharpoons Hg^{2+}+Hg}
$$

Ligands and redox conditions shift this equilibrium.

### 5.2 Iodide reaction

Limited iodide can give mercury(I) iodide:

$$
\mathrm{Hg_2^{2+}+2I^-\rightarrow Hg_2I_2\downarrow}
$$

Excess iodide and disproportionation can generate mercury(II) iodo-complexes and metallic mercury, making the observation more complex.

## 6. Solubility and complexation comparison

| Species | Hot water | Dilute NH$_3$ | Concentrated NH$_3$ | Excess Cl$^-$ | Excess I$^-$ |
|---|---|---|---|---|---|
| $\mathrm{PbCl_2}$ | Appreciably soluble | Little useful dissolution | Some complex effects possible | Chloro-complexes at high chloride | Iodo-complex possible after PbI$_2$ |
| $\mathrm{AgCl}$ | Insoluble | Soluble | Soluble | Can form chloro-complex at very high chloride | AgI forms and is very insoluble |
| $\mathrm{Hg_2Cl_2}$ | Insoluble | Black reaction | Black reaction | Limited | Complex redox/disproportionation |

## 7. Why lead can appear in Group II as well

$\mathrm{PbCl_2}$ is not completely insoluble. Some $\mathrm{Pb^{2+}}$ remains in the Group I filtrate and later precipitates as black $\mathrm{PbS}$ with Group II.

Therefore:

- lead may be detected in both Group I and Group II fractions;
- a small black Group II precipitate does not necessarily mean a new cation;
- the analyst must track incomplete Group I precipitation.

## 8. Photochemical behaviour of silver halides

Silver chloride darkens in light:

$$
\mathrm{2AgCl\xrightarrow{h\nu}2Ag+Cl_2}
$$

The actual solid-state process is complex and may involve defect electrons and silver clusters. Darkening supports silver halide chemistry but is not used as the sole confirmation.

## 9. Group I flowchart

1. Add dilute HCl: white Group I precipitate.
2. Wash precipitate with dilute cold HCl to reduce peptisation and dissolution.
3. Boil with water.
4. Filter hot:
   - filtrate gives yellow $\mathrm{PbCrO_4}$ or $\mathrm{PbI_2}$;
   - residue contains AgCl and Hg$_2$Cl$_2$.
5. Treat residue with ammonia:
   - black residue confirms Hg(I);
   - filtrate contains silver ammine.
6. Acidify silver filtrate with nitric acid:
   - white AgCl reprecipitates.

## 10. Quantitative equilibrium perspective

For a chloride $\mathrm{MCl_n}$, precipitation starts when:

$$
[\mathrm{M^{n+}}][\mathrm{Cl^-}]^n=K_{sp}
$$

If complexation occurs:

$$
\mathrm{M^{n+}+pCl^-\rightleftharpoons MCl_p^{(n-p)+}}
$$

then free $[\mathrm{M^{n+}}]$ is lower. At very high chloride concentration, total solubility can increase after initially decreasing. This produces a common-ion region followed by a complexation region.

## 11. JEE Advanced traps

1. All Group I precipitates are white; colour cannot separate them.
2. Filter the hot-water extraction while hot, or lead chloride may crystallise in the filter.
3. Ammonia dissolves AgCl but blackens Hg$_2$Cl$_2$.
4. Acidifying the silver ammine solution must use an acid that does not introduce a competing precipitating anion.
5. PbCl$_2$ is not completely insoluble; lead can carry into Group II.
6. Excess iodide can dissolve PbI$_2$ through complex formation.
7. Mercury(I) is $\mathrm{Hg_2^{2+}}$, not an ordinary stable monomeric $\mathrm{Hg^+}$.
8. A white chloride precipitate after HCl does not prove silver until lead and mercury(I) are excluded.
`;

export default function SaltAnalysisPart09() {
  return <SaltAnalysisArticle metadata={metadata} content={content} />;
}
