import { SaltAnalysisArticle } from "../SaltAnalysisArticle";

export const metadata = {
  part: 8,
  title: "Original Solution, Group Scheme and Ammonium",
  chapter: "Salt Analysis",
  exam: "JEE Advanced",
};

const content = String.raw`
## 21. Preparation of the Original Solution

Use the mildest suitable solvent:

1. distilled water;
2. dilute HCl;
3. dilute $\mathrm{HNO_3}$;
4. aqua regia for exceptionally resistant samples.

### Key restrictions

- If $\mathrm{Ag^+}$, $\mathrm{Pb^{2+}}$, or $\mathrm{Hg_2^{2+}}$ is suspected, adding HCl directly can precipitate Group I chlorides; this is acceptable only when beginning Group I analysis.
- Nitric acid oxidises $\mathrm{Fe^{2+}}$ to $\mathrm{Fe^{3+}}$, $\mathrm{Sn^{2+}}$ to $\mathrm{Sn^{4+}}$, and sulphide to sulphur/sulphate; do not use it when the original oxidation state matters.
- Aqua regia introduces both chloride and strong oxidising conditions.

---

## 22. Classical Cation Group Scheme

> Group numbers vary between books. The reagent and ions below define the scheme used here.

| Group | Group reagent/condition | Ions commonly included | Precipitated as |
|---|---|---|---|
| 0 | NaOH, heat | $\mathrm{NH_4^+}$ | $\mathrm{NH_3}$ gas |
| I | dilute HCl | $\mathrm{Ag^+,Pb^{2+},Hg_2^{2+}}$ | Chlorides |
| II | $\mathrm{H_2S}$ in dilute HCl | $\mathrm{Cu^{2+},Cd^{2+},Bi^{3+},Hg^{2+},Pb^{2+},As^{3+/5+},Sb^{3+/5+},Sn^{2+/4+}}$ | Sulphides |
| III | $\mathrm{NH_4Cl+NH_4OH}$ | $\mathrm{Fe^{3+},Al^{3+},Cr^{3+}}$ | Hydroxides |
| IV | $\mathrm{H_2S}$ or $(\mathrm{NH_4})_2S$ in ammoniacal medium | $\mathrm{Ni^{2+},Co^{2+},Mn^{2+},Zn^{2+}}$ | Sulphides |
| V | $(\mathrm{NH_4})_2CO_3$ in presence of $\mathrm{NH_4Cl/NH_4OH}$ | $\mathrm{Ba^{2+},Sr^{2+},Ca^{2+}}$ | Carbonates |
| VI | No common group precipitant | $\mathrm{Mg^{2+},Na^+,K^+}$ | Individual tests |

[VISUAL:cation-groups]

[FIGURE:cation-separation-waterfall]

### Essential order principle

If an earlier-group ion is not completely removed, it may precipitate again later:

- residual $\mathrm{Ag^+}$ gives $\mathrm{Ag_2S}$ in Group II;
- residual Group II metal gives sulphide in alkaline Group IV;
- residual $\mathrm{Zn^{2+}}$ can give $\mathrm{ZnCO_3}$ in Group V.

Therefore complete precipitation and filtration are essential.

---

## 23. Group 0 — Ammonium

Warm the original salt with NaOH:

$$\mathrm{NH_4^+ + OH^-\rightarrow NH_3\uparrow+H_2O}$$

Ammonia:

- has a pungent smell;
- turns moist red litmus blue;
- forms dense white fumes with HCl;
- turns Nessler's reagent yellow-brown to brown at low/higher concentration.

Simplified Nessler reaction:

$$\mathrm{NH_3+2[HgI_4]^{2-}+3OH^-\rightarrow HgO\cdot Hg(NH_2)I\downarrow+7I^-+2H_2O}$$

**Test ammonium before adding ammonium salts** such as $\mathrm{NH_4Cl}$, $\mathrm{NH_4OH}$, or $(\mathrm{NH_4})_2CO_3$ during group analysis.

---
`;

export default function SaltAnalysisPart08() {
  return <SaltAnalysisArticle metadata={metadata} content={content} />;
}
