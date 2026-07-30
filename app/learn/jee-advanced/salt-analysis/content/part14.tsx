import { SaltAnalysisArticle } from "../SaltAnalysisArticle";

export const metadata = {
  part: 14,
  title: "Amphoterism, Complexation, Masking and Analytical Selectivity",
  chapter: "Salt Analysis",
  exam: "JEE Advanced",
};

const content = String.raw`
# Amphoterism, Complexation, Masking and Analytical Selectivity

## 1. Why precipitates dissolve in excess reagent

A precipitate can disappear for several chemically different reasons:

1. **acid-base neutralisation**;
2. **amphoteric hydroxo-complex formation**;
3. **ammine or other ligand-complex formation**;
4. **redox conversion to a soluble oxidation state**;
5. **conversion into a soluble thio salt**;
6. **formation of a soluble species through excess precipitating ion**.

The phrase “soluble in excess” is incomplete unless the new species is identified.

[FIGURE:amphoterism-vs-complexation]

## 2. Amphoteric hydroxides

An amphoteric hydroxide reacts with both acid and strong base.

### 2.1 Aluminium hydroxide

Acid:

$$
\mathrm{Al(OH)_3+3H^+\rightarrow Al^{3+}+3H_2O}
$$

Base:

$$
\mathrm{Al(OH)_3+OH^-\rightarrow[Al(OH)_4]^-}
$$

### 2.2 Zinc hydroxide

Acid:

$$
\mathrm{Zn(OH)_2+2H^+\rightarrow Zn^{2+}+2H_2O}
$$

Base:

$$
\mathrm{Zn(OH)_2+2OH^-\rightarrow[Zn(OH)_4]^{2-}}
$$

### 2.3 Lead hydroxide

$$
\mathrm{Pb(OH)_2+2OH^-\rightleftharpoons[Pb(OH)_4]^{2-}}
$$

The exact hydroxo species depends on concentration.

### 2.4 Chromium(III) hydroxide

$$
\mathrm{Cr(OH)_3+3OH^-\rightleftharpoons[Cr(OH)_6]^{3-}}
$$

In oxidising alkali, chromium(III) is converted to chromate:

$$
\mathrm{2Cr(OH)_3+3H_2O_2+4OH^-\rightarrow2CrO_4^{2-}+8H_2O}
$$

### 2.5 Tin and antimony hydroxides

Tin(II/IV) and antimony(III/V) form amphoteric oxides/hydroxides and soluble hydroxo or oxo species in strong base. Oxidation state changes often accompany classical separations.

## 3. Hydroxide-solubility comparison

| Hydroxide | Acid | Excess NaOH | Excess NH$_3$ | Main interpretation |
|---|---|---|---|---|
| Al(OH)$_3$ | Soluble | Soluble | Insoluble | Amphoteric |
| Zn(OH)$_2$ | Soluble | Soluble | Soluble | Amphoteric + ammine complex |
| Pb(OH)$_2$ | Soluble | Soluble | Usually not a strong ammine test | Amphoteric |
| Cr(OH)$_3$ | Soluble | Conditional/slow; oxidisable | Usually insoluble | Amphoteric/redox |
| Cu(OH)$_2$ | Soluble | Insoluble | Soluble, deep blue | Ammine complex, not amphoterism |
| Ni(OH)$_2$ | Soluble | Insoluble | Can dissolve by complexation | Ammine complex |
| Fe(OH)$_3$ | Soluble | Insoluble | Insoluble | Basic hydroxide |
| Mg(OH)$_2$ | Soluble | Insoluble | Suppressed by NH$_4^+$ buffer | Basic hydroxide |

## 4. Ammine complexes

### 4.1 Silver

$$
\mathrm{Ag^++2NH_3\rightleftharpoons[Ag(NH_3)_2]^+}
$$

Consequences:

- AgCl dissolves in dilute ammonia;
- AgBr dissolves only in concentrated ammonia to a limited extent;
- AgI remains;
- acid destroys the complex and reprecipitates AgCl.

### 4.2 Copper

$$
\mathrm{Cu^{2+}+4NH_3\rightleftharpoons[Cu(NH_3)_4]^{2+}}
$$

Deep blue tetraamminecopper(II) forms.

At first, adding ammonia may produce Cu(OH)$_2$ because ammonia supplies OH$^-$; excess ammonia then dissolves the precipitate by ligand coordination.

### 4.3 Zinc and cadmium

$$
\mathrm{Zn^{2+}+4NH_3\rightleftharpoons[Zn(NH_3)_4]^{2+}}
$$

$$
\mathrm{Cd^{2+}+4NH_3\rightleftharpoons[Cd(NH_3)_4]^{2+}}
$$

Both are colourless $d^{10}$ complexes.

### 4.4 Nickel and cobalt

Nickel and cobalt form ammine complexes with characteristic colours and oxidation behaviour. Cobalt(II) ammines may oxidise to kinetically inert cobalt(III) complexes in air or with oxidants.

## 5. Halide complexes

### 5.1 Iodide complexes

$$
\mathrm{HgI_2+2I^-\rightarrow[HgI_4]^{2-}}
$$

$$
\mathrm{PbI_2+2I^-\rightleftharpoons[PbI_4]^{2-}}
$$

$$
\mathrm{BiI_3+I^-\rightleftharpoons[BiI_4]^-}
$$

A precipitate may first form and then dissolve in excess iodide.

### 5.2 Chloride complexes

High chloride concentration stabilises complexes such as:

$$
\mathrm{CuCl_4^{2-},\ CoCl_4^{2-},\ SnCl_6^{2-},\ HgCl_4^{2-}}
$$

This can change colour and solubility. Cobalt(II), for example, shifts from pink aquo complex toward blue tetrachlorocobaltate(II) in concentrated chloride.

## 6. Cyanide complexes

Cyanide is a strong-field ligand and forms very stable complexes.

Examples:

$$
\mathrm{Ag^++2CN^-\rightarrow[Ag(CN)_2]^-}
$$

$$
\mathrm{Cu^++2CN^-\rightarrow[Cu(CN)_2]^-}
$$

$$
\mathrm{Fe^{2+}+6CN^-\rightarrow[Fe(CN)_6]^{4-}}
$$

$$
\mathrm{Fe^{3+}+6CN^-\rightarrow[Fe(CN)_6]^{3-}}
$$

Analytical consequences:

- metal ions can be masked;
- precipitates dissolve;
- free-ion concentration becomes extremely small;
- redox may accompany complexation, as Cu(II) can oxidise cyanide and become Cu(I).

Cyanide is highly toxic and classical cyanide separations are theoretical only.

## 7. Thiocyanate complexes

### Fe(III)

$$
\mathrm{Fe^{3+}+SCN^-\rightleftharpoons[FeSCN]^{2+}}
$$

Blood red.

### Co(II)

In concentrated thiocyanate and a suitable solvent:

$$
\mathrm{Co^{2+}+4SCN^-\rightleftharpoons[Co(SCN)_4]^{2-}}
$$

Intense blue.

Fluoride can mask Fe(III):

$$
\mathrm{Fe^{3+}+6F^-\rightleftharpoons[FeF_6]^{3-}}
$$

reducing the red thiocyanate interference and allowing cobalt detection.

## 8. Thio complexes

Yellow ammonium sulphide dissolves As, Sb and Sn sulphides.

$$
\mathrm{As_2S_3+3S^{2-}\rightarrow2AsS_3^{3-}}
$$

$$
\mathrm{SnS_2+S^{2-}\rightarrow SnS_3^{2-}}
$$

Acidification reprecipitates sulphide because thio anions are protonated and decompose.

This is not ordinary amphoterism. The ligand is sulphide and the products are thio complexes.

## 9. Conditional solubility product

Suppose a metal ion forms a complex:

$$
\mathrm{M^{n+}+pL\rightleftharpoons ML_p}
$$

with:

$$
\beta_p=\frac{[\mathrm{ML_p}]}{[\mathrm{M^{n+}}][L]^p}
$$

The metal side-reaction coefficient is:

$$
\alpha_M=1+\beta_1[L]+\beta_2[L]^2+\cdots
$$

Total dissolved metal is:

$$
[M]_{\mathrm{total}}=\alpha_M[\mathrm{M^{n+}}]
$$

For a 1:1 precipitate MX:

$$
K_{sp}=[\mathrm{M^{n+}}][\mathrm{X^-}]
$$

The conditional solubility increases approximately by $\alpha_M$ because complexation allows more total metal to dissolve while free metal remains constrained by $K_{sp}$.

This explains why a precipitate may dissolve without changing its intrinsic $K_{sp}$.

## 10. Masking and demasking

### 10.1 Masking

A masking agent binds an interfering ion so it no longer reacts with the analytical reagent.

Examples:

- fluoride masks Fe(III) or Al(III);
- cyanide masks Cu, Ni or Co under appropriate conditions;
- citrate/tartrate can keep metal ions soluble in alkaline solution;
- ammonia masks Ag(I) through ammine formation;
- thiosulphate complexes Ag(I).

### 10.2 Demasking

The complex is destroyed or ligand removed:

- acid protonates ammonia;
- oxidation destroys cyanide under controlled industrial conditions;
- precipitation removes fluoride as CaF$_2$;
- changing pH releases metal from weak organic complexes;
- stronger ligand displaces a weaker one.

## 11. Competing equilibria example: AgCl in ammonia

Dissolution:

$$
\mathrm{AgCl(s)\rightleftharpoons Ag^++Cl^-}
$$

Complexation:

$$
\mathrm{Ag^++2NH_3\rightleftharpoons[Ag(NH_3)_2]^+}
$$

Adding equations:

$$
\mathrm{AgCl+2NH_3\rightleftharpoons[Ag(NH_3)_2]^++Cl^-}
$$

Overall equilibrium:

$$
K=K_{sp}\beta_2
$$

For AgI, much smaller $K_{sp}$ makes $K$ insufficient for visible dissolution in ammonia.

## 12. Redox-complexation coupling

### 12.1 Copper and iodide

$$
\mathrm{2Cu^{2+}+4I^-\rightarrow2CuI\downarrow+I_2}
$$

Cu(II) is reduced to Cu(I), and insoluble CuI removes the product. Redox and precipitation reinforce each other.

### 12.2 Chromium in peroxide/alkali

Cr(OH)$_3$ first participates in acid-base dissolution and is then oxidised to chromate. Yellow colour proves oxidation to Cr(VI), not only amphoterism.

### 12.3 Tin and mercury

Sn(II) reduces Hg(II) to Hg(I) and then Hg(0), producing a two-stage precipitate sequence.

## 13. Selectivity design rules

1. Choose a pH that maximises the target reaction and suppresses competitors.
2. Control free-ion concentration with common ions or buffers.
3. Use complexation to dissolve or mask one component.
4. Use oxidation-state conversion only when the new state is more selectively detected.
5. Filter between operations.
6. Avoid reagent ions that duplicate the analyte.
7. Consider solubility of both precipitate and possible excess-reagent complexes.
8. Use a confirmatory reaction chemically independent of the separation step.

## 14. JEE Advanced traps

1. Dissolution in ammonia does not prove amphoterism.
2. Dissolution in NaOH may be amphoterism or oxidation plus complexation.
3. Excess iodide can dissolve a precipitated iodide.
4. A large formation constant lowers free metal concentration without lowering total dissolved metal.
5. Masking can prevent precipitation even when total metal concentration is high.
6. The product of $K_{sp}$ and a complex formation constant determines overall dissolution tendency.
7. Cu(II) with iodide gives CuI and I$_2$, not CuI$_2$.
8. Thio-salt formation separates Group IIB; it is ligand complexation.
9. Acid can demask ammonia complexes by protonating NH$_3$.
10. Colour changes can arise from ligand substitution without oxidation-state change.
`;

export default function SaltAnalysisPart14() {
  return <SaltAnalysisArticle metadata={metadata} content={content} />;
}
