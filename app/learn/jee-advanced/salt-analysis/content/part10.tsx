import { SaltAnalysisArticle } from "../SaltAnalysisArticle";

export const metadata = {
  part: 10,
  title: "Group II Cations: Acidic Sulphide Group",
  chapter: "Salt Analysis",
  exam: "JEE Advanced",
};

const content = String.raw`
# Group II Cations: Acidic Sulphide Group

[FIGURE:metal-sulfide-spectrum]

## 1. Group reagent and chemical basis

After removing Group I chlorides, acidify the filtrate with dilute HCl and pass hydrogen sulphide.

The high $[\mathrm{H^+}]$ suppresses ionisation of $\mathrm{H_2S}$:

$$
\mathrm{H_2S\rightleftharpoons H^++HS^-}
$$

$$
\mathrm{HS^-\rightleftharpoons H^++S^{2-}}
$$

Only sulphides with very low $K_{sp}$ precipitate at the resulting low $[\mathrm{S^{2-}}]$.

Classical Group II ions include:

- copper subgroup, IIA: $\mathrm{Hg^{2+},Pb^{2+},Bi^{3+},Cu^{2+},Cd^{2+}}$;
- arsenic subgroup, IIB: arsenic, antimony and tin in relevant oxidation states.

The sulphide colours provide useful clues but are not sufficient for final identification.

| Ion | Sulphide | Colour |
|---|---|---|
| $\mathrm{Hg^{2+}}$ | HgS | Black |
| $\mathrm{Pb^{2+}}$ | PbS | Black |
| $\mathrm{Bi^{3+}}$ | Bi$_2$S$_3$ | Brown-black |
| $\mathrm{Cu^{2+}}$ | CuS | Black |
| $\mathrm{Cd^{2+}}$ | CdS | Yellow |
| As(III) | As$_2$S$_3$ | Yellow |
| As(V) | As$_2$S$_5$ | Yellow |
| Sb(III) | Sb$_2$S$_3$ | Orange |
| Sb(V) | Sb$_2$S$_5$ | Orange/yellow-orange |
| Sn(II) | SnS | Brown/black |
| Sn(IV) | SnS$_2$ | Yellow |

## 2. Separation into Group IIA and IIB

Treat the washed Group II sulphide precipitate with yellow ammonium sulphide, which contains sulphide and polysulphide.

### 2.1 Group IIA sulphides

HgS, PbS, Bi$_2$S$_3$, CuS and CdS remain largely insoluble in the classical treatment.

### 2.2 Group IIB sulphides

Arsenic, antimony and tin sulphides dissolve by forming soluble thio salts.

Simplified equations:

$$
\mathrm{As_2S_3+3S^{2-}\rightarrow2AsS_3^{3-}}
$$

$$
\mathrm{Sb_2S_3+3S^{2-}\rightarrow2SbS_3^{3-}}
$$

$$
\mathrm{SnS_2+S^{2-}\rightarrow SnS_3^{2-}}
$$

Yellow ammonium sulphide can oxidise lower sulphides, especially tin(II) sulphide, toward higher thio species.

Filter:

- residue: Group IIA;
- filtrate: thio salts of Group IIB.

Acidifying the Group IIB filtrate reprecipitates the sulphides:

$$
\mathrm{2AsS_3^{3-}+6H^+\rightarrow As_2S_3\downarrow+3H_2S}
$$

## 3. Group IIA separation

A traditional separation uses differences in solubility in nitric acid, sulphuric acid, ammonia, cyanide or other complexing media. JEE questions often isolate one or two steps rather than requiring the complete laboratory scheme.

A practical conceptual route is:

1. digest the IIA sulphides with dilute nitric acid;
2. HgS remains resistant;
3. Pb, Bi, Cu and Cd enter solution under oxidising conditions;
4. convert lead to insoluble sulphate;
5. separate bismuth by hydrolysis or hydroxide precipitation;
6. separate copper and cadmium by complexation and sulphide precipitation.

### 3.1 Mercury(II): HgS

HgS is black and extremely insoluble. It resists dilute nitric acid but dissolves in aqua regia or suitable sulphide/chlorinating mixtures.

A simplified aqua-regia dissolution is:

$$
\mathrm{3HgS+2HNO_3+6HCl\rightarrow3HgCl_2+3S+2NO+4H_2O}
$$

Actual products depend on reagent ratio and oxidation of sulphur.

#### Confirmatory test with stannous chloride

Mercury(II) is reduced first to mercury(I chloride:

$$
\mathrm{2HgCl_2+SnCl_2\rightarrow Hg_2Cl_2\downarrow+SnCl_4}
$$

White $\mathrm{Hg_2Cl_2}$ forms.

With excess stannous chloride:

$$
\mathrm{Hg_2Cl_2+SnCl_2\rightarrow2Hg\downarrow+SnCl_4}
$$

The precipitate becomes grey/black metallic mercury.

This white-to-grey sequence is highly characteristic.

#### Iodide test

$$
\mathrm{Hg^{2+}+2I^-\rightarrow HgI_2\downarrow}
$$

Scarlet red $\mathrm{HgI_2}$ dissolves in excess iodide:

$$
\mathrm{HgI_2+2I^-\rightarrow[HgI_4]^{2-}}
$$

A colourless complex forms.

### 3.2 Lead(II): PbS

Black lead sulphide dissolves in hot dilute nitric acid with oxidation of sulphide. Lead enters solution and may be precipitated as sulphate:

$$
\mathrm{Pb^{2+}+SO_4^{2-}\rightarrow PbSO_4\downarrow}
$$

White PbSO$_4$ can be dissolved in ammonium acetate:

$$
\mathrm{PbSO_4+2CH_3COO^-\rightleftharpoons Pb(CH_3COO)_2(aq)+SO_4^{2-}}
$$

The lead solution is confirmed by:

$$
\mathrm{Pb^{2+}+CrO_4^{2-}\rightarrow PbCrO_4\downarrow}
$$

yellow, or:

$$
\mathrm{Pb^{2+}+2I^-\rightarrow PbI_2\downarrow}
$$

yellow golden crystals after hot-water recrystallisation.

Lead may have appeared in Group I as PbCl$_2$; a residual amount can still appear in Group II as PbS.

### 3.3 Bismuth(III): Bi$_2$S$_3$

Bismuth sulphide is brown-black and dissolves in nitric acid, producing Bi(III).

#### Hydrolysis test

Bismuth chloride hydrolyses on dilution:

$$
\mathrm{BiCl_3+H_2O\rightleftharpoons BiOCl\downarrow+2HCl}
$$

White $\mathrm{BiOCl}$ dissolves in concentrated HCl and reprecipitates on dilution.

#### Stannite reduction

Alkaline stannite reduces bismuth(III) to black metallic bismuth:

$$
\mathrm{2Bi^{3+}+3Sn^{2+}\rightarrow2Bi\downarrow+3Sn^{4+}}
$$

In strongly alkaline media, tin species are hydroxo complexes; the net redox relation is the important point.

#### Thiourea test

Bismuth forms a yellow complex with thiourea in acidic solution under suitable conditions. Other soft metal ions can interfere.

### 3.4 Copper(II): CuS

Copper sulphide is black and dissolves in oxidising acids.

#### Ammonia complex

Adding ammonia first precipitates pale blue copper hydroxide:

$$
\mathrm{Cu^{2+}+2OH^-\rightarrow Cu(OH)_2\downarrow}
$$

Excess ammonia dissolves it:

$$
\mathrm{Cu(OH)_2+4NH_3\rightleftharpoons[Cu(NH_3)_4]^{2+}+2OH^-}
$$

A deep royal-blue solution forms.

#### Potassium ferrocyanide

$$
\mathrm{2Cu^{2+}+[Fe(CN)_6]^{4-}\rightarrow Cu_2[Fe(CN)_6]\downarrow}
$$

A chocolate-brown precipitate forms.

#### Iodide test

Copper(II) oxidises iodide:

$$
\mathrm{2Cu^{2+}+4I^-\rightarrow2CuI\downarrow+I_2}
$$

White CuI and iodine appear. Excess thiosulphate removes iodine but may also complex copper species.

#### Metallic displacement

Iron displaces copper:

$$
\mathrm{Fe+Cu^{2+}\rightarrow Fe^{2+}+Cu}
$$

A reddish-brown copper coating forms on iron.

### 3.5 Cadmium(II): CdS

Cadmium sulphide is yellow.

#### Sulphide confirmation

In a controlled acidic or ammoniacal solution:

$$
\mathrm{Cd^{2+}+H_2S\rightarrow CdS\downarrow+2H^+}
$$

The bright yellow precipitate is characteristic but arsenic sulphides are also yellow, hence subgroup separation matters.

#### Hydroxide and ammonia

$$
\mathrm{Cd^{2+}+2OH^-\rightarrow Cd(OH)_2\downarrow}
$$

White cadmium hydroxide can dissolve in excess ammonia through ammine-complex formation:

$$
\mathrm{Cd^{2+}+4NH_3\rightleftharpoons[Cd(NH_3)_4]^{2+}}
$$

## 4. Copper-cadmium separation by cyanide complexation

[FIGURE:copper-cadmium-separation]

Classically, cyanide forms very stable complexes with copper(I), while cadmium sulphide can still be precipitated after carefully controlled treatment.

Conceptually:

1. cyanide complexes copper and lowers free copper-ion concentration;
2. copper sulphide precipitation is suppressed;
3. hydrogen sulphide precipitates yellow CdS.

This separation is chemically elegant but uses highly toxic cyanide and is studied only as a theoretical classical method.

A JEE problem may test:

$$
K_{\mathrm{conditional}}=K_{sp}\times\frac{1}{1+\beta[L]^p}
$$

A large complex-formation term reduces free metal ion and raises apparent solubility.

## 5. Group IIB: arsenic, antimony and tin

After reprecipitating the sulphides from yellow ammonium sulphide, separation uses selective dissolution in concentrated HCl and oxidation-state-specific reactions.

### 5.1 Arsenic sulphides

As$_2$S$_3$ and As$_2$S$_5$ are yellow and dissolve in yellow ammonium sulphide.

They are relatively less soluble in concentrated HCl than antimony and tin sulphides under classical conditions, allowing arsenic separation.

#### Ammonium molybdate

After oxidation to arsenate, arsenic can give a yellow arsenomolybdate precipitate in nitric acid.

#### Magnesia mixture

Arsenate gives magnesium ammonium arsenate:

$$
\mathrm{Mg^{2+}+NH_4^++AsO_4^{3-}\rightarrow MgNH_4AsO_4\downarrow}
$$

#### Marsh and Gutzeit principles

Classical tests generate arsine, $\mathrm{AsH_3}$, and produce arsenic mirrors or stains. Arsine is extremely toxic; the reactions are studied historically and conceptually only.

### 5.2 Antimony sulphides

Sb$_2$S$_3$ is orange; Sb$_2$S$_5$ is orange/yellow-orange. They dissolve in yellow ammonium sulphide and in concentrated HCl under suitable conditions.

#### Metallic deposition

Iron or zinc can reduce antimony ions to black antimony:

$$
\mathrm{2Sb^{3+}+3Fe\rightarrow2Sb\downarrow+3Fe^{2+}}
$$

#### Water hydrolysis

Antimony chloride can hydrolyse to white antimony oxychloride:

$$
\mathrm{SbCl_3+H_2O\rightleftharpoons SbOCl\downarrow+2HCl}
$$

The precipitate dissolves in concentrated HCl.

### 5.3 Tin sulphides

- SnS: brown/black, tin(II);
- SnS$_2$: yellow, tin(IV).

Yellow ammonium sulphide can oxidise Sn(II) sulphide to soluble thiostannate.

#### Mercury chloride test for Sn(II)

Tin(II) reduces Hg(II):

$$
\mathrm{2HgCl_2+SnCl_2\rightarrow Hg_2Cl_2\downarrow+SnCl_4}
$$

white calomel forms.

With excess Sn(II):

$$
\mathrm{Hg_2Cl_2+SnCl_2\rightarrow2Hg\downarrow+SnCl_4}
$$

grey mercury forms.

This is also the mercury test; context determines which species is being identified.

#### Reduction of Sn(IV) to Sn(II)

Metallic iron or zinc can reduce Sn(IV), after which the HgCl$_2$ test confirms Sn(II).

#### Sulphide colours

$$
\mathrm{Sn^{2+}+H_2S\rightarrow SnS\downarrow+2H^+}
$$

brown/black.

$$
\mathrm{Sn^{4+}+2H_2S\rightarrow SnS_2\downarrow+4H^+}
$$

yellow.

## 6. Arsenic-antimony-tin separation logic

A simplified reasoning scheme:

1. dissolve the Group IIB sulphides in yellow ammonium sulphide;
2. acidify to reprecipitate;
3. treat with concentrated HCl:
   - arsenic sulphide remains more resistant;
   - antimony and tin enter solution;
4. separate arsenic residue and confirm after oxidation;
5. reduce antimony to metal while keeping tin in solution under specified conditions, or use selective sulphide precipitation;
6. convert tin to a known oxidation state and confirm with HgCl$_2$.

Exact laboratory protocols vary. JEE questions normally specify reagents and ask for products or reasoning.

## 7. Sulphide solubility table

| Sulphide | Dilute HCl | Dilute HNO$_3$ | Yellow $(NH_4)_2S_x$ | Conc. HCl |
|---|---|---|---|---|
| HgS | Insoluble | Resistant | Generally insoluble in Group IIA treatment | Resistant; aqua regia dissolves |
| PbS | Dissolves/oxidises under suitable acid conditions | Dissolves oxidatively | Insoluble | Dissolves under strong conditions |
| Bi$_2$S$_3$ | Dissolves in acid | Dissolves | Insoluble | Soluble |
| CuS | Resistant to dilute non-oxidising acid | Dissolves oxidatively | Insoluble | Limited/condition-dependent |
| CdS | Dissolves in stronger acid more readily | Dissolves | Insoluble | Soluble |
| As$_2$S$_3$ | Resistant | Oxidised | Soluble | Relatively resistant |
| Sb$_2$S$_3$ | Soluble in conc. HCl | Oxidised | Soluble | Soluble |
| SnS/SnS$_2$ | Soluble under suitable conditions | Oxidised | Soluble, especially polysulphide | Soluble |

The table is qualitative; concentration, temperature and oxidation state matter.

## 8. Analytical colour atlas

[FIGURE:precision-confirmatory-tests]

| Observation | Likely inference after correct separation |
|---|---|
| Black sulphide insoluble in yellow ammonium sulphide and aqua-regia soluble | Hg(II) |
| Yellow sulphide in IIA fraction | Cd(II) |
| Deep-blue ammonia complex | Cu(II) |
| White oxychloride on dilution of acidic chloride solution | Bi(III) or Sb(III); distinguish by reduction/other tests |
| Yellow sulphide in IIB, HCl-resistant | Arsenic |
| Orange sulphide in IIB | Antimony |
| Brown SnS versus yellow SnS$_2$ | Tin oxidation state clue |
| White then grey with HgCl$_2$ | Sn(II) reducing Hg(II), or Hg confirmation depending on sample context |

## 9. JEE Advanced traps

1. Group II sulphides precipitate in acidic medium because their $K_{sp}$ values are exceptionally low.
2. Yellow ammonium sulphide separates by thio-complex formation, not merely by colour.
3. CdS and arsenic sulphides are both yellow; subgroup separation resolves them.
4. HgCl$_2$ with SnCl$_2$ gives a white-to-grey sequence; the same chemistry can identify mercury or tin depending on which reagent is the unknown.
5. CuI formation releases iodine because Cu(II) oxidises iodide while being reduced to Cu(I).
6. Pb may remain after Group I and reappear as PbS.
7. Bismuth and antimony both form oxychlorides on hydrolysis.
8. Excess ligand can prevent precipitation by lowering free metal-ion concentration.
9. Oxidising acids may change Sn(II) to Sn(IV) and As(III) to As(V).
10. Classical cyanide and arsine tests are hazardous and are theoretical only.
`;

export default function SaltAnalysisPart10() {
  return <SaltAnalysisArticle metadata={metadata} content={content} />;
}
