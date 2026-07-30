import { SaltAnalysisArticle } from "../SaltAnalysisArticle";

export const metadata = {
  part: 14,
  title: "Amphoterism, Complexes and Analytical Reasoning",
  chapter: "Salt Analysis",
  exam: "JEE Advanced",
};

const content = String.raw`
## 30. High-Yield Amphoteric Species

| Species | Dissolves in acid | Dissolves in excess base | Product in excess base |
|---|---|---|---|
| $\mathrm{Al(OH)_3}$ | Yes | Yes | $\mathrm{[Al(OH)_4]^-}$ |
| $\mathrm{Zn(OH)_2}$ | Yes | Yes | $\mathrm{[Zn(OH)_4]^{2-}}$ |
| $\mathrm{Cr(OH)_3}$ | Yes | Yes | $\mathrm{[Cr(OH)_6]^{3-}}$ |
| $\mathrm{Pb(OH)_2}$ | Yes | Yes | plumbite/hydroxoplumbate |
| $\mathrm{Sn(OH)_2/Sn(OH)_4}$ | Yes | Yes | stannite/stannate species |

**Trap:** Amphoterism alone does not identify a cation; several hydroxides behave similarly. Use oxidation state, colour, and confirmatory reactions.

[FIGURE:amphoterism-vs-complexation]

---

## 31. Essential Complexes and Their Colours

| Ion + ligand | Complex | Observation |
|---|---|---|
| $\mathrm{Cu^{2+}+NH_3}$ | $\mathrm{[Cu(NH_3)_4]^{2+}}$ | Deep blue |
| $\mathrm{Ag^++NH_3}$ | $\mathrm{[Ag(NH_3)_2]^+}$ | Colourless; dissolves AgCl |
| $\mathrm{Co^{2+}+SCN^-}$ | $\mathrm{[Co(SCN)_4]^{2-}}$ | Deep blue |
| $\mathrm{Fe^{3+}+SCN^-}$ | thiocyanatoiron(III) | Blood red |
| $\mathrm{Fe^{2+}+NO}$ | nitrosyl ferrous complex | Brown ring |
| $\mathrm{Ni^{2+}+DMG}$ | $\mathrm{Ni(DMG)_2}$ | Rose-red ppt |
| $\mathrm{Zn^{2+}+NH_3}$ | $\mathrm{[Zn(NH_3)_4]^{2+}}$ | Colourless solution |

Ligand concentration, solvent, acidity, and competing ions can change the observed colour.

---

## 32. “Why” Questions Frequently Asked in JEE

### Why is dilute HCl used for Group I?

It supplies enough $\mathrm{Cl^-}$ to precipitate sparingly soluble chlorides. Very high chloride concentration can form soluble chloro-complexes and reduce precipitation.

### Why is Group II precipitation performed in acidic medium?

Acid suppresses ionisation of $\mathrm{H_2S}$, producing very low $[\mathrm{S^{2-}}]$. Only sulphides with exceptionally low $K_{sp}$ precipitate.

### Why are Group IV sulphides precipitated in basic medium?

Base removes $\mathrm{H^+}$ and increases $[\mathrm{S^{2-}}]$, allowing the relatively more soluble sulphides to precipitate.

### Why is $\mathrm{NH_4Cl}$ added before $\mathrm{NH_4OH}$ in Group III?

The common ion $\mathrm{NH_4^+}$ buffers and lowers $[\mathrm{OH^-}]$, preventing precipitation of later-group hydroxides while allowing Group III hydroxides to form.

### Why must Group II filtrate be boiled?

To remove $\mathrm{H_2S}$, which otherwise precipitates later sulphides or consumes oxidants.

### Why is lead found in both Groups I and II?

$\mathrm{PbCl_2}$ is only moderately insoluble, so precipitation in Group I is incomplete. Residual lead forms much less soluble PbS in Group II.

### Why can a precipitate appear in Group III even when Group III cations are absent?

Possible causes:

- interfering anions precipitating later-group cations;
- insufficient $\mathrm{NH_4Cl}$ causing excessive $[\mathrm{OH^-}]$;
- incomplete removal of earlier groups;
- oxidation/hydrolysis during preparation;
- contamination or adsorption.

### Why are precipitates washed?

Mother liquor contains soluble ions and excess reagent. If not removed, they cause false tests during confirmatory analysis.

### Why is complete precipitation checked?

Add a drop of group reagent to the clear supernatant/filtrate. Any new precipitate indicates incomplete removal.

---

## 54. Masking, Demasking and Selectivity

A masking agent prevents an ion from reacting by binding it in a stable complex. The ion is still present but its free concentration becomes too low for precipitation.

Examples of analytical complexation include:

- ammonia masking silver or zinc through ammine formation;
- cyanide historically complexing several transition metals;
- tartrate/citrate preventing hydroxide precipitation while allowing a selective organic reagent to react;
- fluoride binding certain high-charge metal ions.

The condition for masking is not simply “a complex forms.” The formation constant, ligand concentration, protonation of the ligand and competing equilibria must lower free metal concentration sufficiently.

Demasking releases the ion by destroying or weakening the complex. Acid can protonate ammonia, cyanide or hydroxo ligands. Oxidation can destroy some organic ligands. A competing metal can remove the masking ligand.

In JEE equilibrium problems, combine formation and solubility constants. For:

$$\mathrm{AgCl(s)+2NH_3\rightleftharpoons[Ag(NH_3)_2]^++Cl^-}$$

the overall equilibrium constant is approximately $K_{sp}\beta_2$. Even though $K_{sp}$ is small, a large formation constant $\beta_2$ can make dissolution favourable at high ammonia concentration.

---

## 66. General Cation Reactions Missing from the Short Scheme

### 66.1 Potassium iodide reactions

| Cation | Initial observation | In excess KI |
|---|---|---|
| $\mathrm{Ag^+}$ | Yellow AgI | Insoluble |
| $\mathrm{Pb^{2+}}$ | Yellow $\mathrm{PbI_2}$ | Dissolves as $\mathrm{[PbI_4]^{2-}}$ in sufficiently high iodide |
| $\mathrm{Hg^{2+}}$ | Scarlet $\mathrm{HgI_2}$ | Dissolves as colourless $\mathrm{[HgI_4]^{2-}}$ |
| $\mathrm{Cu^{2+}}$ | White CuI + brown iodine | Iodine removed by thiosulphate reveals CuI |
| $\mathrm{Bi^{3+}}$ | Dark $\mathrm{BiI_3}$ | Orange/yellow iodobismuthate complex in excess iodide |

### 66.2 Ferric ion with hydrogen sulphide

In acidic solution, $\mathrm{Fe^{3+}}$ oxidises $\mathrm{H_2S}$ to sulphur instead of giving stable ferric sulphide:

$$\mathrm{2Fe^{3+}+H_2S\rightarrow2Fe^{2+}+S\downarrow+2H^+}$$

The precipitate is pale sulphur. In strongly sulphide-rich alkaline medium, reduction plus FeS formation can give a black mixture.

### 66.3 Aluminium and chromium with soluble sulphide

They form hydroxides, not stable aqueous aluminium/chromium sulphide precipitates, because sulphide hydrolyses:

$$\mathrm{S^{2-}+H_2O\rightleftharpoons HS^-+OH^-}$$

The generated $\mathrm{OH^-}$ precipitates $\mathrm{Al(OH)_3}$ or $\mathrm{Cr(OH)_3}$.

### 66.4 Partial precipitation of zinc by H₂S

Without adequate buffering, precipitation may be incomplete because formation of ZnS releases acid:

$$\mathrm{Zn^{2+}+H_2S\rightleftharpoons ZnS\downarrow+2H^+}$$

Sodium acetate consumes effective acidity through acetic-acid formation and favours completion:

$$\mathrm{Zn^{2+}+H_2S+2CH_3COO^-\rightarrow ZnS\downarrow+2CH_3COOH}$$

---

## 70. Reagent-Wise Cation Comparison Table

This table is designed for JEE questions that give an unknown ion and a sequence of reagents.

| Ion | NaOH | Excess NaOH | NH₃/NH₄OH | KI | $\mathrm{K_2CrO_4}$ | $\mathrm{H_2S/S^{2-}}$ | Key confirmation |
|---|---|---|---|---|---|---|---|
| Ag⁺ | Brown Ag₂O | Insoluble | Ag₂O/AgCl dissolves as diamminesilver | Yellow AgI, insoluble in excess KI | Brick-red Ag₂CrO₄ | Black Ag₂S, but Group I AgCl should already be removed | AgCl dissolves in NH₃ and reprecipitates with acid |
| Pb²⁺ | White Pb(OH)₂ | Soluble hydroxoplumbate | White, insoluble | Yellow PbI₂; dissolves in excess hot iodide as $\mathrm{[PbI_4]^{2-}}$ | Yellow PbCrO₄ | Black PbS | Golden PbI₂ plates / yellow PbCrO₄ |
| Hg₂²⁺ | Black Hg + HgO-type products | — | Calomel blackens | Green/yellow mercury(I) iodide changing by disproportionation | — | Hg + HgS black | Blackening with NH₃ |
| Hg²⁺ | Yellow HgO | Insoluble | White amido compound/complex behaviour | Scarlet HgI₂; soluble in excess KI as $\mathrm{[HgI_4]^{2-}}$ | — | Black HgS | SnCl₂: white $\rightarrow$ grey |
| Cu²⁺ | Light-blue Cu(OH)₂ | Insoluble | Dissolves deep blue | White CuI + iodine | Dark precipitate/complex conditions | Black CuS | Deep-blue ammine; brown ferrocyanide |
| Cd²⁺ | White Cd(OH)₂ | Usually insoluble in excess NaOH under classical conditions | Soluble in excess ammonia | White CdI₂ remains soluble/no characteristic ppt | Yellow CdCrO₄ under suitable conditions | Yellow CdS | Yellow CdS insoluble in YAS |
| Bi³⁺ | White Bi(OH)₃ | Insoluble | Insoluble | Dark BiI₃; excess iodide gives iodo complex | Yellow bismuth chromate/basic salts | Brown-black Bi₂S₃ | BiOCl hydrolysis / black Bi with SnCl₂ |
| Fe²⁺ | Dirty-green Fe(OH)₂ | Insoluble | Dirty-green; browns in air | No characteristic ppt | Redox possible | Black FeS in alkaline sulphide | Ferricyanide blue; phenanthroline red |
| Fe³⁺ | Reddish-brown Fe(OH)₃ | Insoluble | Insoluble | Oxidises I⁻ to I₂ | Redox | Reduces to Fe²⁺ + S with acidic H₂S | Blood-red SCN⁻; ferrocyanide blue |
| Al³⁺ | White gelatinous Al(OH)₃ | Soluble aluminate | Usually insoluble/partly soluble | No ppt | — | Hydroxide, not stable sulphide | Aluminon lake / cobalt aluminate |
| Cr³⁺ | Grey-green Cr(OH)₃ | Soluble hydroxo complex | Partial/condition-dependent | No ppt | Becomes yellow chromate after oxidation | Hydroxide by sulphide hydrolysis | Yellow chromate after oxidation |
| Ni²⁺ | Green Ni(OH)₂ | Insoluble | Complexes in excess | No characteristic ppt | — | Black NiS | Rosy-red DMG |
| Co²⁺ | Blue/pink Co(OH)₂ | Insoluble | Complex/air oxidation | No characteristic ppt | — | Black CoS | Blue thiocyanate / yellow cobaltinitrite |
| Mn²⁺ | Pale Mn(OH)₂, browns | Insoluble | Insoluble | No ppt | — | Buff MnS | Oxidation to purple permanganate |
| Zn²⁺ | White Zn(OH)₂ | Soluble zincate | Soluble ammine | No ppt | Yellow ZnCrO₄ possible | White ZnS | Rinmann's green / white ZnS |
| Ba²⁺ | No useful ppt at moderate OH⁻ | — | No ppt | No ppt | Yellow BaCrO₄ | — | Apple-green flame |
| Sr²⁺ | No useful ppt | — | No ppt | No ppt | SrCrO₄ only at higher chromate/less acidic conditions | — | Crimson flame; SrSO₄ |
| Ca²⁺ | Little/no ppt under ordinary dilute test | — | No ppt | No ppt | No ppt in selected conditions | — | Brick-red flame; CaC₂O₄ |
| Mg²⁺ | White Mg(OH)₂ | Insoluble | Suppressed by NH₄⁺ buffer | No ppt | — | No stable useful sulphide ppt | MgNH₄PO₄ |

---

## 72. Structural Chemistry Behind the Tests

### 72.1 Thiosulphate

[STRUCTURE:thiosulfate]

$\mathrm{S_2O_3^{2-}}$ is derived conceptually from sulphate by replacing one oxygen with sulphur. The two sulphur atoms are nonequivalent: terminal sulphane sulphur is more reduced, while central sulphur is highly oxidised. The average oxidation number +2 is not the oxidation state of each sulphur atom.

### 72.2 Tetrathionate

[STRUCTURE:tetrathionate]

Iodine oxidises two thiosulphate ions by coupling their terminal sulphur atoms to form an S-S bond in $\mathrm{S_4O_6^{2-}}$.

### 72.3 Chromate and dichromate

[STRUCTURE:chromate-dichromate]

Chromate is tetrahedral. Dichromate consists of two $\mathrm{CrO_4}$ tetrahedra sharing one corner oxygen. Protonation and condensation shift the equilibrium toward dichromate in acid.

### 72.4 Permanganate and manganate

[STRUCTURE:permanganate]

Both $\mathrm{MnO_4^-}$ and $\mathrm{MnO_4^{2-}}$ are tetrahedral. Their intense colours mainly arise from ligand-to-metal charge-transfer transitions, not ordinary weak $d$-$d$ transitions.

### 72.5 Brown-ring complex

[STRUCTURE:brown-ring]

NO binds to ferrous ion in a nitrosyl complex commonly represented as $\mathrm{[Fe(H_2O)_5(NO)]^{2+}}$. The Fe-N-O unit has significant electronic delocalisation; simple assignment as “Fe²⁺ plus neutral NO” is only formal.

### 72.6 Nickel dimethylglyoxime

[STRUCTURE:ni-dmg]

Two deprotonated DMG ligands chelate Ni(II) through nitrogen donors. Strong intramolecular hydrogen bonding stabilises a planar red complex. The coordination environment is square planar and diamagnetic.

### 72.7 Sodium nitroprusside-sulphide product

[STRUCTURE:nitroprusside]

Sulphide adds to the nitrosyl group of $\mathrm{[Fe(CN)_5NO]^{2-}}$, producing a violet thionitroprusside species in alkaline solution. Passing $\mathrm{H_2S}$ into an acidic/neutral reagent does not give the same colour until sufficient sulphide ion is generated by alkalisation.

---

## 75. Additional Reactions from the Reagent Chart

### 75.1 Cyanide complexes and precipitates

$$\mathrm{Ag^+ + CN^-\rightarrow AgCN\downarrow}$$

$$\mathrm{AgCN+CN^-\rightarrow[Ag(CN)_2]^-}$$

$$\mathrm{Zn^{2+}+2CN^-\rightarrow Zn(CN)_2\downarrow}$$

$$\mathrm{Zn(CN)_2+2CN^-\rightarrow[Zn(CN)_4]^{2-}}$$

$$\mathrm{Ni^{2+}+4CN^-\rightarrow[Ni(CN)_4]^{2-}}$$

The square-planar nickel cyanide complex is diamagnetic. Cyanide tests are of theoretical importance only because HCN can be released by acid.

### 75.2 Thiosulphate complexes

$$\mathrm{AgCl+2S_2O_3^{2-}\rightarrow[Ag(S_2O_3)_2]^{3-}+Cl^-}$$

Photography fixer dissolves silver halides through this complex. With insufficient thiosulphate, unstable silver thiosulphate may form and darken to Ag₂S.

### 75.3 Ferrocyanide and ferricyanide precipitates

| Ion | Ferrocyanide, $\mathrm{[Fe(CN)_6]^{4-}}$ | Ferricyanide, $\mathrm{[Fe(CN)_6]^{3-}}$ |
|---|---|---|
| Fe³⁺ | Prussian blue | Brown coloration/complex response |
| Fe²⁺ | Initially pale/white ferrous ferrocyanide, turns blue in air | Turnbull's/Prussian blue |
| Cu²⁺ | Chocolate-brown copper ferrocyanide | Brown/greenish response |
| Zn²⁺ | White zinc ferrocyanide | Yellowish/white zinc ferricyanide |
| Ag⁺ | White silver ferrocyanide | Orange/brown silver ferricyanide |

Modern structural work shows the traditional Prussian-blue and Turnbull-blue products converge to closely related mixed-valence iron cyanide frameworks; exam questions may still use the classical names.

### 75.4 Sulphate, sulphite, carbonate and oxalate reagents for alkaline earths

$$\mathrm{Ba^{2+}+SO_4^{2-}\rightarrow BaSO_4\downarrow}$$

$$\mathrm{Sr^{2+}+SO_4^{2-}\rightarrow SrSO_4\downarrow}$$

$$\mathrm{Ca^{2+}+C_2O_4^{2-}\rightarrow CaC_2O_4\downarrow}$$

BaC₂O₄ is more soluble in acetic acid than Sr/Ca oxalates under selected conditions. SrCrO₄ is also suppressed by acetic acid while BaCrO₄ precipitates, enabling the classical sequence.

### 75.5 Potassium and ammonium precipitations

Potassium:

$$\mathrm{K^+ + ClO_4^-\rightarrow KClO_4\downarrow}$$

Ammonium can give:

$$\mathrm{3NH_4^+ +[Co(NO_2)_6]^{3-}\rightarrow(NH_4)_3[Co(NO_2)_6]\downarrow}$$

$$\mathrm{2NH_4^+ +[PtCl_6]^{2-}\rightarrow(NH_4)_2[PtCl_6]\downarrow}$$

Potassium can give analogous precipitates, explaining mutual interference.

### 75.6 Sodium confirmation

Potassium dihydrogen antimonate can give white crystalline sodium dihydrogen antimonate:

$$\mathrm{Na^+ + H_2SbO_4^-\rightarrow NaH_2SbO_4\downarrow}$$

The solution must be concentrated and appropriately alkaline/neutral; magnesium and other ions can interfere. The golden-yellow flame remains the primary JEE clue.

---
`;

export default function SaltAnalysisPart14() {
  return <SaltAnalysisArticle metadata={metadata} content={content} />;
}
