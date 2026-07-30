import { SaltAnalysisArticle } from "../SaltAnalysisArticle";

export const metadata = {
  part: 16,
  title: "JEE Advanced Worked Illustrations",
  chapter: "Salt Analysis",
  exam: "JEE Advanced",
};

const content = String.raw`
# JEE Advanced Worked Illustrations

## Illustration 1 — Selective sulphide precipitation

A solution contains $\mathrm{Cu^{2+}}$ and $\mathrm{Zn^{2+}}$. Hydrogen sulphide is passed first in dilute HCl and then after making the filtrate ammoniacal. Explain the sequence.

### Solution

In acid:

$$
[\mathrm{S^{2-}}]\propto\frac{1}{[\mathrm{H^+}]^2}
$$

is very small. CuS has an extremely small $K_{sp}$ and precipitates; ZnS does not precipitate appreciably.

After filtration, ammonia lowers effective acidity and increases $[\mathrm{S^{2-}}]$. ZnS now precipitates.

**Result:** CuS belongs to the acidic sulphide group; ZnS to the ammoniacal sulphide group.

---

## Illustration 2 — Onset of precipitation

A $0.010\ \mathrm{M}$ solution of $\mathrm{Ag^+}$ receives chloride. If $K_{sp}(\mathrm{AgCl})=1.8\times10^{-10}$, find the chloride concentration at which precipitation begins.

### Solution

$$
K_{sp}=[\mathrm{Ag^+}][\mathrm{Cl^-}]
$$

$$
[\mathrm{Cl^-}]=\frac{1.8\times10^{-10}}{1.0\times10^{-2}}
=1.8\times10^{-8}\ \mathrm{M}
$$

---

## Illustration 3 — Fractional precipitation

A solution contains equal concentrations of $\mathrm{Ba^{2+}}$ and $\mathrm{Sr^{2+}}$. Given:

$$
K_{sp}(\mathrm{BaSO_4})\ll K_{sp}(\mathrm{SrSO_4})
$$

which precipitates first on adding sulphate?

### Solution

The required sulphate concentration is:

$$
[\mathrm{SO_4^{2-}}]_{\min}=\frac{K_{sp}}{[\mathrm{M^{2+}}]}
$$

At equal metal-ion concentrations, the smaller $K_{sp}$ requires less sulphate. Therefore BaSO$_4$ precipitates first.

---

## Illustration 4 — Common ion and Group III

Why does adding NH$_4$Cl before NH$_3$ prevent Mg(OH)$_2$ contamination?

### Solution

NH$_4^+$ suppresses:

$$
\mathrm{NH_3+H_2O\rightleftharpoons NH_4^++OH^-}
$$

The lower $[\mathrm{OH^-}]$ is enough for Fe(OH)$_3$, Al(OH)$_3$ and Cr(OH)$_3$ but not usually enough for substantial Mg(OH)$_2$ precipitation.

---

## Illustration 5 — AgCl versus AgI in ammonia

Both silver halides form ammine complexes after dissolution. Why does AgCl dissolve but AgI remain?

### Solution

Overall dissolution is governed by:

$$
K_{\mathrm{overall}}=K_{sp}(\mathrm{AgX})\beta_2
$$

The same $\beta_2$ applies to silver ammine, but $K_{sp}(\mathrm{AgI})$ is far smaller. The overall equilibrium is therefore much less favourable for AgI.

---

## Illustration 6 — Halide mixture

A mixture of bromide and iodide is shaken with an organic solvent while chlorine water is added dropwise. Describe the colour sequence.

### Solution

Iodide is oxidised first:

$$
\mathrm{Cl_2+2I^-\rightarrow2Cl^-+I_2}
$$

The organic layer becomes violet.

Further chlorine oxidises iodine to colourless higher oxidation-state species. Then bromide is oxidised:

$$
\mathrm{Cl_2+2Br^-\rightarrow2Cl^-+Br_2}
$$

The organic layer becomes orange.

---

## Illustration 7 — Carbonate versus sulphite gas

A gas turns lime water milky and clears it in excess. It also decolourises acidified permanganate. Identify the gas.

### Solution

Both CO$_2$ and SO$_2$ can give temporary lime-water turbidity. Decolourisation of acidified permanganate proves reducing behaviour, so the gas is SO$_2$.

---

## Illustration 8 — Thiosulphate

An anion gives sulphur turbidity and a reducing gas with dilute acid. Write the ionic equation.

### Solution

$$
\mathrm{S_2O_3^{2-}+2H^+\rightarrow S\downarrow+SO_2\uparrow+H_2O}
$$

The simultaneous sulphur and SO$_2$ identifies thiosulphate.

---

## Illustration 9 — Nitrite interference

Why must nitrite be removed before the brown-ring test for nitrate?

### Solution

Nitrite forms HNO$_2$ in acid and produces NO/NO$_2$. NO can form nitrosyl complexes with Fe(II), giving a false or ambiguous brown-ring observation.

---

## Illustration 10 — Chromate-dichromate equilibrium

A yellow solution turns orange on acidification and yellow again on adding alkali. Is this redox?

### Solution

No. Chromium remains +6.

$$
\mathrm{2CrO_4^{2-}+2H^+\rightleftharpoons Cr_2O_7^{2-}+H_2O}
$$

It is an acid-base condensation equilibrium.

---

## Illustration 11 — Manganate disproportionation

Green manganate is acidified. Predict the products.

### Solution

$$
\mathrm{3MnO_4^{2-}+4H^+\rightarrow2MnO_4^-+MnO_2\downarrow+2H_2O}
$$

Purple permanganate and brown MnO$_2$ form.

---

## Illustration 12 — Copper and iodide

Why is CuI$_2$ not obtained when iodide is added to Cu(II)?

### Solution

Cu(II) oxidises iodide and is reduced to Cu(I):

$$
\mathrm{2Cu^{2+}+4I^-\rightarrow2CuI\downarrow+I_2}
$$

CuI is stabilised by precipitation, while iodine is liberated.

---

## Illustration 13 — Group I separation

A white Group I precipitate dissolves partly in hot water. The residue blackens with ammonia. Identify the ions.

### Solution

Hot-water-soluble PbCl$_2$ indicates Pb$^{2+}$. Blackening of the residual chloride with ammonia indicates Hg$_2$Cl$_2$, hence Hg(I). If the ammonia filtrate reprecipitates AgCl on acidification, Ag$^+$ is also present.

---

## Illustration 14 — Bismuth versus antimony oxychloride

Both BiCl$_3$ and SbCl$_3$ form white oxychlorides on dilution. How can the ambiguity be resolved?

### Solution

Use prior group/subgroup separation and a second test:

- Bi(III) is in Group IIA and can be reduced by alkaline stannite to black Bi.
- Sb(III) is in Group IIB and its orange sulphide dissolves in yellow ammonium sulphide.

A hydrolysis test alone is not enough.

---

## Illustration 15 — Tin and mercury sequence

SnCl$_2$ is added to HgCl$_2$. Explain the white then grey change.

### Solution

First:

$$
\mathrm{2HgCl_2+SnCl_2\rightarrow Hg_2Cl_2\downarrow+SnCl_4}
$$

White calomel forms.

Then excess Sn(II):

$$
\mathrm{Hg_2Cl_2+SnCl_2\rightarrow2Hg\downarrow+SnCl_4}
$$

Grey metallic mercury forms.

---

## Illustration 16 — Group III amphoterism

A mixed hydroxide precipitate contains Fe(OH)$_3$, Al(OH)$_3$ and Cr(OH)$_3$. It is treated with NaOH and H$_2$O$_2$. What remains?

### Solution

- Fe(OH)$_3$ remains insoluble.
- Al(OH)$_3$ dissolves as aluminate.
- Cr(OH)$_3$ is oxidised to yellow chromate.

Thus the residue is mainly Fe(OH)$_3$ and the filtrate contains aluminate plus chromate.

---

## Illustration 17 — Zinc versus aluminium

Both hydroxides dissolve in NaOH. How does ammonia distinguish them?

### Solution

Zn(OH)$_2$ dissolves in excess ammonia by forming $\mathrm{[Zn(NH_3)_4]^{2+}}$. Al(OH)$_3$ does not appreciably dissolve in ammonia. Therefore ammonia solubility supports zinc.

---

## Illustration 18 — Ni-Co-Mn-Zn sulphides

A Group IV precipitate is treated with dilute HCl. A black residue remains and the filtrate contains two colourless/pale ions. Identify the pairs.

### Solution

NiS and CoS remain as black acid-resistant residue. MnS and ZnS dissolve, giving Mn$^{2+}$ and Zn$^{2+}$ in the filtrate.

---

## Illustration 19 — Nickel confirmation

Why is dimethylglyoxime added in ammoniacal medium?

### Solution

The ligand must be deprotonated sufficiently to chelate Ni(II), but strongly acidic solution suppresses ligand coordination. Ammoniacal medium provides controlled basicity and gives scarlet Ni(DMG)$_2$.

---

## Illustration 20 — Manganese confirmation

A pale solution gives a purple colour after sodium bismuthate in nitric acid. Identify the ion.

### Solution

Mn(II) is oxidised to permanganate:

$$
\mathrm{2Mn^{2+}+5BiO_3^-+14H^+\rightarrow2MnO_4^-+5Bi^{3+}+7H_2O}
$$

The original ion is Mn$^{2+}$.

---

## Illustration 21 — Group V selectivity

Why is Mg$^{2+}$ not intended to precipitate with Ba, Sr and Ca carbonates?

### Solution

The NH$_4$Cl/NH$_3$ buffer controls hydroxide and carbonate activity. Under the chosen conditions, BaCO$_3$, SrCO$_3$ and CaCO$_3$ exceed their solubility limits, while Mg remains mainly soluble. Excess base destroys the selectivity.

---

## Illustration 22 — Calcium oxalate versus carbonate

A white calcium precipitate is insoluble in acetic acid. Which anion is supported?

### Solution

Calcium carbonate dissolves in acetic acid with CO$_2$. Calcium oxalate remains. Therefore oxalate is supported.

---

## Illustration 23 — Devarda nitrate test

Why must ammonium be tested before Devarda's alloy is used for nitrate?

### Solution

Devarda's alloy reduces nitrate to NH$_3$. If NH$_4^+$ was originally present, warming with alkali also gives NH$_3$. The source of ammonia would be ambiguous.

---

## Illustration 24 — Solubility with complexation

A precipitate MX has $K_{sp}=10^{-12}$. Ligand L binds M with $\beta=10^8$ and $[L]=0.10\ \mathrm{M}$ for a 1:1 complex. Estimate the metal side-reaction coefficient.

### Solution

$$
\alpha_M=1+\beta[L]
$$

$$
\alpha_M=1+10^8(0.10)\approx10^7
$$

Total dissolved metal can be about $10^7$ times the free metal concentration. Complexation can therefore dramatically increase apparent solubility.

---

## Illustration 25 — Sulphate confirmation

A white precipitate forms with BaCl$_2$ in neutral solution. Why is sulphate not yet confirmed?

### Solution

Carbonate, sulphite, phosphate, oxalate and chromate can also precipitate barium salts. Acidify a fresh portion with dilute HCl and add BaCl$_2$. Acid-resistant white BaSO$_4$ supports sulphate.

---

## Illustration 26 — Oxalate kinetics

Why does acidified permanganate react slowly with oxalate initially but faster later?

### Solution

The reaction requires warming and is autocatalysed by Mn$^{2+}$, one of its products. As Mn$^{2+}$ accumulates, the rate increases.

---

## Illustration 27 — Zinc oxide colour

A residue is yellow while hot and white after cooling. Does this require a change in oxidation state?

### Solution

No. ZnO shows reversible temperature-dependent defect colour. Zinc remains +2.

---

## Illustration 28 — Cobalt chloride colour

A pink aqueous cobalt(II) solution becomes blue after adding concentrated HCl. Is cobalt oxidised?

### Solution

No. Ligand substitution shifts from hydrated cobalt(II) toward $\mathrm{[CoCl_4]^{2-}}$:

$$
\mathrm{[Co(H_2O)_6]^{2+}+4Cl^-\rightleftharpoons[CoCl_4]^{2-}+6H_2O}
$$

Both contain Co(II).

---

## Illustration 29 — Lead in two groups

Lead was detected as PbCl$_2$ in Group I, yet a black precipitate appears when H$_2$S is passed into the Group I filtrate. Is this contradictory?

### Solution

No. PbCl$_2$ is not completely insoluble. Residual Pb$^{2+}$ passes into the filtrate and forms PbS in Group II.

---

## Illustration 30 — Error in sequence

An analyst adds HCl to a sample and later obtains AgCl with AgNO$_3$. Can chloride be assigned to the original sample?

### Solution

No. HCl introduced chloride. The chloride test must be performed on a separate portion acidified with dilute HNO$_3$, not HCl.
`;

export default function SaltAnalysisPart16() {
  return <SaltAnalysisArticle metadata={metadata} content={content} />;
}
