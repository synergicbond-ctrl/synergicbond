import { SaltAnalysisArticle } from "../SaltAnalysisArticle";

export const metadata = {
  part: 1,
  title: "Foundations, Equilibria and Laboratory Method",
  chapter: "Salt Analysis",
  exam: "JEE Advanced",
};

const content = String.raw`
# Salt Analysis — Foundations, Equilibria and Laboratory Method

> **Purpose of this chapter:** build a complete chemical method for identifying the acid radical and basic radical of an unknown inorganic salt. Every observation must be connected to an equilibrium, a solubility product, a complex-formation reaction, an oxidation-state change, or a thermal decomposition.

[FIGURE:master-analytical-algorithm]

## 1. What is meant by qualitative salt analysis?

An ordinary inorganic salt contains two analytical components:

- the **basic radical**, which is the cation, for example $\mathrm{Ag^+}$, $\mathrm{Cu^{2+}}$, $\mathrm{Fe^{3+}}$, $\mathrm{NH_4^+}$;
- the **acid radical**, which is the anion, for example $\mathrm{Cl^-}$, $\mathrm{CO_3^{2-}}$, $\mathrm{SO_4^{2-}}$, $\mathrm{NO_3^-}$.

Qualitative analysis answers **what is present**. Quantitative analysis answers **how much is present**. JEE Advanced questions usually test the reasoning behind the classical separation rather than asking a student to carry out an unsafe laboratory procedure.

A correct analysis combines:

1. physical examination;
2. preliminary dry tests;
3. preparation of a suitable solution;
4. systematic acid-radical tests on separate portions;
5. removal of interfering radicals where required;
6. systematic cation group separation;
7. subgroup separation;
8. confirmatory tests;
9. cross-checking all observations against possible interferences.

## 2. Five reaction families used throughout the chapter

### 2.1 Ion-exchange and precipitation

A precipitate forms when the ionic product exceeds the solubility product.

For a salt $\mathrm{M_aX_b}$:

$$
\mathrm{M_aX_b(s)\rightleftharpoons aM^{b+}(aq)+bX^{a-}(aq)}
$$

$$
K_{sp}=[\mathrm{M^{b+}}]^a[\mathrm{X^{a-}}]^b
$$

The three cases are:

| Ionic product $Q_{sp}$ | Result |
|---|---|
| $Q_{sp}<K_{sp}$ | Unsaturated; no precipitation |
| $Q_{sp}=K_{sp}$ | Saturated; precipitation is just beginning |
| $Q_{sp}>K_{sp}$ | Supersaturated; precipitation occurs |

Examples:

$$
\mathrm{Ag^+ + Cl^- \rightarrow AgCl(s)}
$$

$$
\mathrm{Ba^{2+}+SO_4^{2-}\rightarrow BaSO_4(s)}
$$

A colour alone is never sufficient. The reagent, medium, solubility in excess reagent, and behaviour toward acid or heat must also agree.

### 2.2 Acid-base displacement

A stronger, non-volatile acid liberates a weaker volatile acid or its decomposition product.

$$
\mathrm{CO_3^{2-}+2H^+\rightarrow H_2CO_3\rightarrow CO_2\uparrow+H_2O}
$$

$$
\mathrm{S^{2-}+2H^+\rightarrow H_2S\uparrow}
$$

$$
\mathrm{SO_3^{2-}+2H^+\rightarrow H_2SO_3\rightarrow SO_2\uparrow+H_2O}
$$

This is why dilute non-oxidising acids are used for the first class of acid radicals.

### 2.3 Complex formation

A sparingly soluble precipitate may dissolve when one ion is converted into a stable soluble complex.

$$
\mathrm{AgCl(s)+2NH_3(aq)\rightleftharpoons[Ag(NH_3)_2]^+(aq)+Cl^-(aq)}
$$

$$
\mathrm{Cu^{2+}+4NH_3\rightleftharpoons[Cu(NH_3)_4]^{2+}}
$$

The measured solubility increases because the free metal-ion concentration decreases. In general:

$$
K_{\mathrm{overall}}=K_{sp}\times\beta
$$

where $\beta$ is the formation constant of the complex. A sufficiently large $\beta$ can drive dissolution even when $K_{sp}$ is very small.

### 2.4 Redox reactions

Redox tests are recognised by a change in oxidation state, often accompanied by a strong colour change.

Examples:

$$
\mathrm{2MnO_4^-+5SO_2+2H_2O\rightarrow2Mn^{2+}+5SO_4^{2-}+4H^+}
$$

$$
\mathrm{Cr_2O_7^{2-}+3SO_2+2H^+\rightarrow2Cr^{3+}+3SO_4^{2-}+H_2O}
$$

Reduction of permanganate from purple $\mathrm{Mn(VII)}$ to nearly colourless $\mathrm{Mn^{2+}}$, or dichromate from orange $\mathrm{Cr(VI)}$ to green $\mathrm{Cr^{3+}}$, is analytically useful.

### 2.5 Thermal decomposition

Many salts give characteristic gases, colours, or residues on heating.

Examples:

$$
\mathrm{2Pb(NO_3)_2\xrightarrow{\Delta}2PbO+4NO_2\uparrow+O_2\uparrow}
$$

$$
\mathrm{2NaNO_3\xrightarrow{\Delta}2NaNO_2+O_2\uparrow}
$$

$$
\mathrm{CuCO_3\xrightarrow{\Delta}CuO+CO_2\uparrow}
$$

Thermal behaviour is a preliminary clue, not a final identification.

## 3. Selective precipitation and group separation

The cation scheme depends on choosing conditions under which one group precipitates while later groups remain in solution.

### 3.1 Why acidic hydrogen sulphide precipitates Group II

Hydrogen sulphide ionises in two stages:

$$
\mathrm{H_2S\rightleftharpoons H^+ + HS^-}
$$

$$
\mathrm{HS^-\rightleftharpoons H^+ + S^{2-}}
$$

Combining the equilibria gives approximately:

$$
[\mathrm{S^{2-}}]=\frac{K_{a1}K_{a2}[\mathrm{H_2S}]}{[\mathrm{H^+}]^2}
$$

In dilute HCl, the high $[\mathrm{H^+}]$ suppresses both ionisations. The sulphide-ion concentration becomes very small, so only sulphides with extremely low $K_{sp}$ precipitate. These include the classical Group II sulphides.

A hundredfold increase in $[\mathrm{H^+}]$ lowers $[\mathrm{S^{2-}}]$ by approximately $10^4$, provided dissolved $\mathrm{H_2S}$ remains comparable. This squared dependence is why pH control is so powerful.

### 3.2 Why ammoniacal sulphide precipitates Group IV

In ammoniacal medium, $\mathrm{OH^-}$ consumes $\mathrm{H^+}$ and shifts the hydrogen sulphide equilibria toward $\mathrm{S^{2-}}$. The much larger sulphide-ion concentration allows precipitation of the relatively more soluble sulphides of $\mathrm{Ni^{2+}}$, $\mathrm{Co^{2+}}$, $\mathrm{Mn^{2+}}$, and $\mathrm{Zn^{2+}}$.

[FIGURE:common-ion-balance]

### 3.3 Why $\mathrm{NH_4Cl}$ is added before $\mathrm{NH_4OH}$ in Group III

The pair $\mathrm{NH_4Cl/NH_4OH}$ behaves as an ammonium buffer. The common ion $\mathrm{NH_4^+}$ suppresses ionisation of ammonia:

$$
\mathrm{NH_3+H_2O\rightleftharpoons NH_4^++OH^-}
$$

A controlled, moderate $[\mathrm{OH^-}]$ is sufficient to precipitate:

$$
\mathrm{Fe(OH)_3,\ Al(OH)_3,\ Cr(OH)_3}
$$

but helps keep later-group ions in solution. Adding ammonia without ammonium chloride may precipitate magnesium hydroxide and contaminate the Group III precipitate.

## 4. Competition between precipitation and complex formation

A species precipitates according to free-ion concentrations, not total analytical concentrations.

Suppose:

$$
\mathrm{M^{n+}+pL\rightleftharpoons ML_p^{n+}}
$$

$$
\beta_p=\frac{[\mathrm{ML_p^{n+}}]}{[\mathrm{M^{n+}}][\mathrm{L}]^p}
$$

A large ligand concentration makes free $[\mathrm{M^{n+}}]$ small. Consequences include:

- dissolution of $\mathrm{AgCl}$ in ammonia;
- dissolution of $\mathrm{Cu(OH)_2}$ in excess ammonia;
- prevention of $\mathrm{CuS}$ precipitation after cyanide complex formation in classical Cu-Cd separation;
- dissolution of amphoteric hydroxides in excess $\mathrm{OH^-}$;
- dissolution of several iodides in excess $\mathrm{I^-}$ by iodo-complex formation.

[FIGURE:amphoterism-vs-complexation]

## 5. Coprecipitation, digestion and washing

A fresh precipitate may contain impurities even when the intended reaction is correct.

### 5.1 Surface adsorption

Small particles have large surface area and adsorb ions. The precipitate often adsorbs one of its own lattice ions first and then attracts oppositely charged counter-ions.

### 5.2 Occlusion

Rapid crystal growth may trap pockets of mother liquor inside the solid.

### 5.3 Inclusion

An ion of similar size and charge may replace a lattice ion during crystal growth.

### 5.4 Post-precipitation

A second sparingly soluble substance may slowly deposit on an earlier precipitate.

### 5.5 Digestion

Keeping the precipitate warm in contact with its mother liquor allows small particles to dissolve and redeposit on larger particles. The resulting precipitate is easier to filter and usually purer.

### 5.6 Washing

Washing removes soluble reagent and adsorbed mother liquor. Pure water is not always suitable because it can dissolve or peptise the precipitate. A dilute volatile electrolyte or a small amount of common ion is often preferred.

A classical check for complete precipitation is to add one more drop of group reagent to the clear supernatant. New turbidity means precipitation was incomplete.

## 6. Essential laboratory operations

| Operation | Correct meaning | Why it matters |
|---|---|---|
| Decantation | Pour off liquid from a settled solid | Fast preliminary separation |
| Filtration | Separate precipitate and filtrate through a porous medium | Required before the next group reagent |
| Centrifugation | Accelerate sedimentation by rotation | Useful in semimicro analysis |
| Washing | Remove soluble contaminants from a precipitate | Prevents false tests |
| Digestion | Warm precipitate in mother liquor | Improves particle size and purity |
| Evaporation | Remove solvent without strong decomposition | Concentrates a solution |
| Ignition | Strong heating to constant residue | Converts precipitate to stable weighing form |
| Acidification | Add acid until the required acidity is reached | Controls hydrolysis and sulphide concentration |
| Alkalisation | Add base to the required basicity | Controls hydroxide precipitation and complexes |
| Test on a separate portion | Use a fresh sample aliquot | Prevents reagent carry-over |

Never infer that the next group reagent is added directly to the unfiltered mixture. In a correct systematic scheme, each group precipitate is removed before the filtrate proceeds to the next stage.

## 7. Original sample, stock solution and separate portions

The unknown sample should be divided logically.

1. A small portion is reserved for dry tests.
2. A fresh portion is used for volatile acid-radical tests.
3. A separate portion is used for halide, nitrate, sulphate and other wet anion tests.
4. A fresh portion is used to prepare the original solution for cation analysis.
5. Confirmatory tests are carried out on separated fractions, not on the untreated mixture.

This prevents an added reagent from becoming the ion supposedly being tested. Examples:

- chloride cannot be tested after adding HCl;
- nitrate cannot be tested after acidifying with $\mathrm{HNO_3}$;
- sulphate cannot be tested after adding $\mathrm{H_2SO_4}$;
- ammonium cannot be inferred after adding an ammonium salt as group reagent.

## 8. Interfering radicals

Certain anions precipitate cations under the conditions used for Group III and later groups. Common interfering radicals include:

$$
\mathrm{PO_4^{3-},\ BO_3^{3-},\ C_2O_4^{2-},\ F^-,\ SiO_3^{2-},\ AsO_3^{3-},\ AsO_4^{3-}}
$$

For example, when the solution is made ammoniacal, calcium, barium, magnesium or transition-metal phosphates may precipitate along with Group III hydroxides. This may create a precipitate even when $\mathrm{Fe^{3+}}$, $\mathrm{Al^{3+}}$, and $\mathrm{Cr^{3+}}$ are absent.

The analytical rule is:

> Detect interfering radicals during anion analysis, remove or destroy them by an appropriate standard treatment, and only then begin the cation group separation.

[FIGURE:interfering-radicals-sabotage]

## 9. Analytical evidence hierarchy

Not all observations have equal reliability.

| Level | Evidence | Reliability |
|---|---|---|
| Screening clue | Colour of salt, flame colour, odour, preliminary gas | Low to moderate |
| Group evidence | Precipitation with a group reagent | Moderate |
| Separation evidence | Selective dissolution or reprecipitation | High |
| Specific confirmation | Characteristic complex, redox product, or isolated precipitate | Highest |

A correct answer should combine at least two independent observations where possible.

## 10. Common failure modes in JEE problems

1. **Ignoring the medium.** The same reagent behaves differently in acidic and alkaline solution.
2. **Using total concentration instead of free-ion concentration.**
3. **Forgetting dilution after mixing solutions.**
4. **Assuming every white precipitate is the same substance.**
5. **Forgetting amphoterism or complex formation in excess reagent.**
6. **Failing to filter before adding the next group reagent.**
7. **Using a reagent that introduces the ion being tested.**
8. **Confusing a preliminary test with a confirmatory test.**
9. **Treating smell as a safe or specific test.**
10. **Ignoring oxidation-state conversion during dissolution or heating.**

## 11. Safety and modern interpretation

Classical qualitative analysis includes toxic gases and hazardous compounds. The chemistry is part of the JEE syllabus, but practical execution requires trained supervision, a fume hood, appropriate protective equipment, and regulated waste disposal.

Especially hazardous topics include $\mathrm{H_2S}$, cyanides, arsenic and mercury compounds, chromates, lead salts, concentrated acids, and tests that generate HF. Study the chemistry; do not improvise these tests outside a properly equipped laboratory.

## 12. Foundation checklist

Before moving to individual radicals, make sure you can answer:

- Why does Group II precipitate in acidic $\mathrm{H_2S}$ but Group IV in ammoniacal sulphide?
- Why is $\mathrm{NH_4Cl}$ added before ammonia in Group III?
- How can a complexing ligand dissolve a precipitate?
- Why must every group precipitate be filtered before the next reagent?
- Why are separate portions required for chloride, nitrate, sulphate and ammonium?
- Which anions interfere with cation analysis, and why?
- What is the difference between a screening clue and a confirmatory test?
`;

export default function SaltAnalysisPart01() {
  return <SaltAnalysisArticle metadata={metadata} content={content} />;
}
