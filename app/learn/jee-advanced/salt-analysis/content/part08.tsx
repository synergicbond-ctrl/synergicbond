import { SaltAnalysisArticle } from "../SaltAnalysisArticle";

export const metadata = {
  part: 8,
  title: "Original Solution, Soda Extract and the Cation Group Scheme",
  chapter: "Salt Analysis",
  exam: "JEE Advanced",
};

const content = String.raw`
# Original Solution, Soda Extract and the Cation Group Scheme

[FIGURE:soda-extract-pipeline]

## 1. Why a solution is required

Most wet tests depend on free ions. The original solid must therefore be converted into a suitable solution without introducing an ion that invalidates later tests or changing the oxidation state unnecessarily.

The solution used for cation analysis is called the **original solution (O.S.)**. The solution used mainly for anion tests after carbonate treatment is called the **soda extract (S.E.)**.

These are not interchangeable.

## 2. Preparation of the original solution

Use a fresh portion of the salt and try solvents in a logical order.

### 2.1 Water

Begin with distilled water. Note:

- solubility in cold water;
- additional solubility on warming;
- hydrolysis or turbidity;
- colour of the solution;
- pH;
- whether a gas is released.

A clear water solution is preferred because no additional acid has been introduced.

### 2.2 Dilute hydrochloric acid

If the salt is insoluble in water, dilute HCl may dissolve carbonates, sulphides, oxides and hydroxides:

$$
\mathrm{MCO_3+2HCl\rightarrow MCl_2+CO_2+H_2O}
$$

$$
\mathrm{MO+2HCl\rightarrow MCl_2+H_2O}
$$

$$
\mathrm{MS+2HCl\rightarrow MCl_2+H_2S}
$$

Limitations:

- HCl introduces chloride, so the same portion cannot be used to test chloride;
- strong acid can alter oxidation states only indirectly, but sulphide loss and hydrolysis changes matter;
- lead chloride, silver chloride and mercury(I) chloride may precipitate rather than form a clear solution.

### 2.3 Dilute nitric acid

Nitric acid dissolves many metals and sulphides by oxidation, but it can change oxidation states:

- $\mathrm{Fe^{2+}\rightarrow Fe^{3+}}$;
- $\mathrm{Sn^{2+}\rightarrow Sn^{4+}}$;
- sulphide to sulphur or sulphate;
- arsenite to arsenate.

Therefore it is used only when the analytical plan accepts these changes.

### 2.4 Aqua regia

Aqua regia is a powerful oxidising and chlorinating mixture:

$$
\mathrm{HNO_3+3HCl\rightarrow NOCl+Cl_2+2H_2O}
$$

It can dissolve noble metals and very resistant sulphides such as mercury sulphide under suitable conditions. It introduces chloride and strong oxidants, so it is not a routine first choice.

### 2.5 Fusion

Refractory solids may require fusion with sodium carbonate, potassium pyrosulphate or another specified flux. Fusion fundamentally changes the sample and must be followed by a planned separation.

## 3. Soda extract

Soda extract transfers anions of an insoluble salt into soluble sodium salts.

A simplified metathesis is:

$$
\mathrm{MX_2+Na_2CO_3\rightarrow MCO_3\downarrow+2NaX}
$$

Procedure logic:

1. mix a small amount of finely powdered salt with excess sodium carbonate;
2. add distilled water;
3. boil for several minutes;
4. filter;
5. residue contains metal carbonate/basic carbonate/oxide and unreacted solid;
6. filtrate contains soluble sodium salts of many acid radicals.

### 3.1 Why sodium carbonate is used

- most sodium salts are soluble;
- carbonate precipitates many metal cations;
- sodium carbonate is inexpensive and sufficiently basic;
- no foreign heavy-metal ion is introduced.

Other carbonates may produce insoluble salts of the acid radical and fail to transfer it to solution.

### 3.2 Why the soda extract is alkaline

Excess carbonate hydrolyses:

$$
\mathrm{CO_3^{2-}+H_2O\rightleftharpoons HCO_3^-+OH^-}
$$

Many anion tests require neutral or acidic conditions. Therefore a **neutralised soda extract** is prepared.

### 3.3 Neutralisation sequence

A standard conceptual sequence is:

1. acidify carefully with nitric acid;
2. boil to expel $\mathrm{CO_2}$;
3. cool;
4. add ammonia until just alkaline if required;
5. boil to remove excess ammonia;
6. use the final solution for the specified test.

Why nitric acid?

- nitrates are generally soluble;
- chloride and sulphate are not introduced;
- nitrate itself is not tested from soda extract because nitrate would be introduced.

Why remove excess ammonia?

Ammonia forms complexes with silver, copper, nickel and other ions and can alter precipitations.

### 3.4 Radicals not reliably tested from soda extract

- nitrate, because nitric acid may be used for neutralisation;
- carbonate, because sodium carbonate is added;
- cations, because most are left in the residue;
- species whose oxidation state changes during boiling or strong alkalinity.

[FIGURE:soda-extract-pipeline]

## 4. Interfering radicals before cation analysis

Interfering radicals can precipitate cations in the ammoniacal Group III stage.

| Interfering radical | Typical problem |
|---|---|
| $\mathrm{PO_4^{3-}}$ | Precipitates Fe, Al, Cr and later-group phosphates |
| $\mathrm{BO_3^{3-}}$ | Forms insoluble borates |
| $\mathrm{C_2O_4^{2-}}$ | Precipitates Ca and several transition metals |
| $\mathrm{F^-}$ | Complexes Al and Fe; precipitates CaF$_2$ |
| Silicate | Gives gelatinous silica and carries ions |
| Arsenite/arsenate | Gives sulphides with Group II and precipitates in later steps |

The specific removal method must match the radical. There is no single universal treatment.

## 5. Classical cation groups

[FIGURE:cation-separation-waterfall]

The group numbering used here is the common JEE/coaching convention:

| Group | Ions | Group reagent | Main precipitate |
|---|---|---|---|
| Zero/preliminary | $\mathrm{NH_4^+}$ | NaOH on original salt | $\mathrm{NH_3}$ gas |
| I | $\mathrm{Ag^+,Pb^{2+},Hg_2^{2+}}$ | Dilute HCl | Chlorides |
| II | $\mathrm{Hg^{2+},Pb^{2+},Bi^{3+},Cu^{2+},Cd^{2+},As,Sb,Sn}$ | $\mathrm{H_2S}$ in dilute HCl | Sulphides |
| III | $\mathrm{Fe^{3+},Al^{3+},Cr^{3+}}$ | $\mathrm{NH_4Cl+NH_4OH}$ | Hydroxides |
| IV | $\mathrm{Ni^{2+},Co^{2+},Mn^{2+},Zn^{2+}}$ | $\mathrm{H_2S}$ or $(\mathrm{NH_4})_2\mathrm{S}$ in ammoniacal medium | Sulphides |
| V | $\mathrm{Ba^{2+},Sr^{2+},Ca^{2+}}$ | $(\mathrm{NH_4})_2\mathrm{CO_3}$ in ammonium buffer | Carbonates |
| VI | $\mathrm{Mg^{2+},Na^+,K^+}$ | Individual tests after Group V | Phosphate/complex/flame tests |

Ammonium is tested before adding ammonium salts as group reagents.

## 6. Why the reagent order cannot be changed

### 6.1 Group I before Group II

If $\mathrm{H_2S}$ is added first, Group I ions also form sulphides. Their chloride-based separation is lost.

### 6.2 Group II before Group III

Group II sulphides require low $\mathrm{S^{2-}}$ in acid. Making the solution ammoniacal first precipitates additional sulphides and hydroxides.

### 6.3 Group III before Group IV

The ammonium buffer precipitates Fe, Al and Cr hydroxides while leaving Ni, Co, Mn and Zn mostly in solution. If sulphide is added too early in strongly alkaline medium, mixed precipitates result.

### 6.4 Group V after sulphide removal

Residual $\mathrm{H_2S}$ or ammonium sulphide must be removed before adding ammonium carbonate, otherwise later metal sulphides or side reactions may occur.

## 7. Group I precipitation

$$
\mathrm{Ag^++Cl^-\rightarrow AgCl\downarrow}
$$

$$
\mathrm{Pb^{2+}+2Cl^-\rightarrow PbCl_2\downarrow}
$$

$$
\mathrm{Hg_2^{2+}+2Cl^-\rightarrow Hg_2Cl_2\downarrow}
$$

All are white, so separation is based on solubility:

- $\mathrm{PbCl_2}$ dissolves in hot water;
- $\mathrm{AgCl}$ dissolves in ammonia;
- $\mathrm{Hg_2Cl_2}$ reacts with ammonia to give a black mixture.

## 8. Group II precipitation

The filtrate is acidified and saturated with $\mathrm{H_2S}$. Extremely insoluble sulphides precipitate.

Group II is split by yellow ammonium sulphide:

- **Group IIA (copper subgroup):** sulphides insoluble in yellow ammonium sulphide;
- **Group IIB (arsenic subgroup):** sulphides dissolve as thio complexes.

[FIGURE:copper-cadmium-separation]

## 9. Group III precipitation

First remove $\mathrm{H_2S}$, then add $\mathrm{NH_4Cl}$ followed by ammonia.

$$
\mathrm{Fe^{3+}+3OH^-\rightarrow Fe(OH)_3\downarrow}
$$

$$
\mathrm{Al^{3+}+3OH^-\rightarrow Al(OH)_3\downarrow}
$$

$$
\mathrm{Cr^{3+}+3OH^-\rightarrow Cr(OH)_3\downarrow}
$$

Colours:

- $\mathrm{Fe(OH)_3}$: reddish brown;
- $\mathrm{Al(OH)_3}$: white gelatinous;
- $\mathrm{Cr(OH)_3}$: grey-green.

## 10. Group IV precipitation

In ammoniacal sulphide medium:

$$
\mathrm{Ni^{2+}+S^{2-}\rightarrow NiS\downarrow}
$$

$$
\mathrm{Co^{2+}+S^{2-}\rightarrow CoS\downarrow}
$$

$$
\mathrm{Mn^{2+}+S^{2-}\rightarrow MnS\downarrow}
$$

$$
\mathrm{Zn^{2+}+S^{2-}\rightarrow ZnS\downarrow}
$$

Colours:

- NiS: black;
- CoS: black;
- MnS: flesh/pale pink;
- ZnS: white.

## 11. Group V precipitation

After removing sulphide and maintaining an ammonium buffer:

$$
\mathrm{Ba^{2+}+CO_3^{2-}\rightarrow BaCO_3\downarrow}
$$

$$
\mathrm{Sr^{2+}+CO_3^{2-}\rightarrow SrCO_3\downarrow}
$$

$$
\mathrm{Ca^{2+}+CO_3^{2-}\rightarrow CaCO_3\downarrow}
$$

Magnesium remains mainly in the filtrate because carbonate and hydroxide activities are controlled.

## 12. Group VI tests

### Magnesium

$$
\mathrm{Mg^{2+}+NH_4^++PO_4^{3-}\rightarrow MgNH_4PO_4\downarrow}
$$

### Sodium

Intense golden-yellow flame; specific precipitation tests may be used where required.

### Potassium

Lilac flame through cobalt glass; sodium cobaltinitrite gives a yellow precipitate under suitable conditions.

## 13. Ammonium ion must be tested first

Warm the original salt with strong base:

$$
\mathrm{NH_4^++OH^-\rightarrow NH_3\uparrow+H_2O}
$$

Confirm ammonia by:

- moist red litmus turning blue;
- dense white fumes with HCl:
$$
\mathrm{NH_3+HCl\rightarrow NH_4Cl}
$$
- Nessler's reagent, where permitted.

Once $\mathrm{NH_4Cl}$ and ammonia are added as group reagents, ammonium cannot be attributed to the original sample.

## 14. Complete filtration discipline

After each group:

1. confirm precipitation is complete;
2. digest if needed;
3. filter or centrifuge;
4. wash the precipitate;
5. retain both precipitate and filtrate with clear labels;
6. perform subgroup analysis on the precipitate;
7. use the filtrate for the next group.

A common JEE error is to follow the precipitate into the next group instead of the filtrate.

## 15. Group-reagent logic summary

| Reagent condition | Controlled variable | Selective result |
|---|---|---|
| Dilute HCl | Chloride concentration and chloride $K_{sp}$ | Group I chlorides |
| Acidic H$_2$S | Very low $\mathrm{S^{2-}}$ | Group II sulphides |
| NH$_4$Cl + NH$_3$ | Moderate $\mathrm{OH^-}$ | Group III hydroxides |
| Ammoniacal sulphide | High $\mathrm{S^{2-}}$ | Group IV sulphides |
| Ammonium carbonate buffer | Controlled $\mathrm{CO_3^{2-}}$ and $\mathrm{OH^-}$ | Group V carbonates |
| Individual reagents | Specific complex/precipitate/flame | Group VI |

## 16. JEE Advanced traps

1. Test ammonium before adding any ammonium reagent.
2. Chloride test must use a portion not acidified with HCl.
3. Nitrate test must not use a solution prepared with nitric acid.
4. Group II uses acidic $\mathrm{H_2S}$; Group IV uses ammoniacal sulphide.
5. Add $\mathrm{NH_4Cl}$ before ammonia.
6. Remove interfering radicals before Group III.
7. Remove $\mathrm{H_2S}$ before Group III and Group V steps.
8. The soda extract is mainly for anions, not cations.
9. Oxidising dissolution can change Fe(II), Sn(II), sulphide and arsenite.
10. Filtration is part of the chemical separation, not an optional laboratory detail.
`;

export default function SaltAnalysisPart08() {
  return <SaltAnalysisArticle metadata={metadata} content={content} />;
}
