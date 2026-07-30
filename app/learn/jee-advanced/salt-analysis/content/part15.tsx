import { SaltAnalysisArticle } from "../SaltAnalysisArticle";

export const metadata = {
  part: 15,
  title: "Observation Atlas, False Positives and Solubility Patterns",
  chapter: "Salt Analysis",
  exam: "JEE Advanced",
};

const content = String.raw`
## 33. Observation-to-Inference Master Table

| Observation | Most likely inference | Necessary confirmation |
|---|---|---|
| Gas turns limewater milky | $\mathrm{CO_2}$ or $\mathrm{SO_2}$ | Acidified permanganate/dichromate |
| Rotten-egg gas; lead paper black | $\mathrm{H_2S}$ | Nitroprusside |
| Gas + sulphur turbidity on acidification | Thiosulphate | Iodine/AgNO₃ behaviour |
| Brown fumes after acidification | Nitrite or nitrate under stronger conditions | Separate specific test |
| White AgNO₃ ppt soluble in dilute NH₃ | Chloride | Reprecipitation with acid |
| Cream AgNO₃ ppt partly soluble in conc. NH₃ | Bromide | Oxidation + organic layer |
| Yellow AgNO₃ ppt insoluble in conc. NH₃ | Iodide | Violet organic layer |
| White Ba salt ppt insoluble in acid | Sulphate | Repeat under acidified conditions |
| Canary-yellow ammonium molybdate ppt | Phosphate | Magnesia mixture |
| Brown ring at acid interface | Nitrate/nitrite-related NO formation | Remove nitrite and repeat |
| Deep blue with excess NH₃ | Copper(II) | CuS/ferrocyanide |
| Blood red with SCN⁻ | Iron(III) | Ferrocyanide test |
| Rose-red DMG precipitate | Nickel(II) | Conditions must be ammoniacal |
| Purple solution after strong oxidation | Permanganate from manganese | Redox controls |
| Golden spangles on cooling | Lead iodide | Other lead confirmation |

---

## 34. Common False Positives and How to Prevent Them

1. **Testing chloride after using HCl**  
   Use a fresh sample or prepare the solution without chloride.

2. **Testing nitrate after using nitric acid**  
   A nitrate introduced during preparation makes the result meaningless.

3. **Testing ammonium after adding ammonium salts**  
   Always test $\mathrm{NH_4^+}$ first.

4. **Calling every limewater-milky gas carbon dioxide**  
   $\mathrm{SO_2}$ also produces turbidity; test reducing behaviour.

5. **Calling every white barium precipitate sulphate**  
   Acidify first; carbonate, sulphite, phosphate, and oxalate can interfere.

6. **Using old ferrous sulphate in the brown-ring test**  
   Oxidised $\mathrm{Fe^{3+}}$ cannot generate the required nitrosyl ferrous complex effectively.

7. **Adding too much chlorine water to iodide**  
   Iodine is further oxidised to iodate and the violet organic-layer colour disappears.

8. **Mistaking sodium contamination for sodium in the sample**  
   Clean the wire repeatedly and compare a blank.

9. **Ignoring adsorption/co-precipitation**  
   Wash and digest precipitates; use controlled reagent addition.

10. **Relying on colour alone**  
    Colour is preliminary. Confirm using an independent chemical reaction.

---

## 35. Solubility and Separation Patterns Worth Memorising

### Silver halides

$$\mathrm{AgCl\ (dil.\ NH_3\ soluble)>AgBr\ (conc.\ NH_3,\ limited)>AgI\ (insoluble)}$$

### Group I chlorides

- $\mathrm{PbCl_2}$: dissolves in hot water;
- $\mathrm{AgCl}$: dissolves in ammonia;
- $\mathrm{Hg_2Cl_2}$: blackens with ammonia.

### Group III hydroxides in excess NaOH

- $\mathrm{Fe(OH)_3}$: insoluble;
- $\mathrm{Al(OH)_3}$: dissolves as aluminate;
- $\mathrm{Cr(OH)_3}$: dissolves and can be oxidised to yellow chromate.

### Group IV sulphides in dilute acid

- MnS and ZnS: dissolve more readily;
- NiS and CoS: remain resistant.

### Alkaline-earth confirmations

- Ba: chromate, apple-green flame;
- Sr: sulphate, crimson flame;
- Ca: oxalate, brick-red flame.

---

## 61. Colour Atlas of Common Salts and Ions

Colour is a preliminary clue. Hydration, crystal field, oxidation state, particle size and ligand environment may change the observed colour, so every colour clue must be confirmed chemically.

### 61.1 Common coloured salts and solids

| Substance | Usual colour | Important change or remark |
|---|---|---|
| $\mathrm{CuSO_4\cdot5H_2O}$ | Blue | Becomes white anhydrous $\mathrm{CuSO_4}$ on heating |
| $\mathrm{CuCl_2\cdot2H_2O}$ | Blue-green/green | Concentrated chloride can produce yellow-green chloro complexes |
| $\mathrm{FeSO_4\cdot7H_2O}$ | Pale green | Surface becomes yellow-brown on oxidation |
| $\mathrm{FeCl_3\cdot6H_2O}$ | Yellow-brown | Aqueous colour depends on hydrolysis and chloride |
| $\mathrm{CoCl_2\cdot6H_2O}$ | Pink | Anhydrous $\mathrm{CoCl_2}$ is blue |
| $\mathrm{NiSO_4\cdot6H_2O}$ | Green | Ni(II) solutions are usually green |
| $\mathrm{KMnO_4}$ | Dark purple, nearly black crystals | Purple solution |
| $\mathrm{K_2MnO_4}$ | Green | Stable mainly in strongly alkaline medium |
| $\mathrm{K_2CrO_4}$ | Yellow | Acid gives orange dichromate |
| $\mathrm{K_2Cr_2O_7}$ | Orange | Alkali gives yellow chromate |
| $\mathrm{Ag_2CrO_4}$ | Brick red | Dissolves in acid/ammonia under suitable conditions |
| $\mathrm{PbCrO_4}$ | Chrome yellow | Lead confirmation |
| $\mathrm{BaCrO_4}$ | Yellow | Barium confirmation |
| $\mathrm{PbI_2}$ | Bright yellow | Golden plates/spangles crystallise on cooling |
| $\mathrm{HgI_2}$ | Scarlet red | A yellow polymorph is stable at higher temperature; rubbing yellow form can restore red |
| $\mathrm{Cu_2O}$ | Red | Copper(I) oxide |
| $\mathrm{CuO}$ | Black | Copper(II) oxide |
| $\mathrm{Fe_2O_3}$ | Reddish brown | Ferric oxide |
| $\mathrm{Fe_3O_4}$ | Black | Mixed-valence oxide |
| $\mathrm{PbO}$ | Yellow/red polymorphs | Colour depends on form and temperature |
| $\mathrm{Pb_3O_4}$ | Orange-red | Red lead |
| $\mathrm{MnO_2}$ | Brown-black | Common neutral-medium permanganate product |
| $\mathrm{Cr_2O_3}$ | Green | Chromium(III) oxide |
| $\mathrm{ZnO}$ | White cold, yellow hot | Reversible defect-related colour change |

### 61.2 Colours of important aqueous ions and complexes

| Species | Colour |
|---|---|
| Hydrated $\mathrm{Cu^{2+}}$ | Blue |
| $\mathrm{[Cu(NH_3)_4]^{2+}}$ | Deep royal blue |
| Hydrated $\mathrm{Fe^{2+}}$ | Pale green |
| Hydrated $\mathrm{Fe^{3+}}$ | Yellow to yellow-brown |
| $\mathrm{Fe^{3+}+SCN^-}$ complex | Blood red |
| Hydrated $\mathrm{Co^{2+}}$ | Pink |
| $\mathrm{[CoCl_4]^{2-}}$ | Blue |
| $\mathrm{[Co(SCN)_4]^{2-}}$ | Deep blue |
| Hydrated $\mathrm{Ni^{2+}}$ | Green |
| Hydrated $\mathrm{Cr^{3+}}$ | Green or violet, depending on ligand/history |
| $\mathrm{CrO_4^{2-}}$ | Yellow |
| $\mathrm{Cr_2O_7^{2-}}$ | Orange |
| $\mathrm{CrO_5}$ in ether | Intense blue |
| $\mathrm{MnO_4^-}$ | Purple |
| $\mathrm{MnO_4^{2-}}$ | Green |
| $\mathrm{Mn^{2+}}$ | Very pale pink, often appears colourless |
| $\mathrm{[Fe(H_2O)_5(NO)]^{2+}}$ | Brown |

### 61.3 Common colourless ions

$\mathrm{Al^{3+}}$, $\mathrm{Zn^{2+}}$, $\mathrm{Mg^{2+}}$, $\mathrm{Ca^{2+}}$, $\mathrm{Sr^{2+}}$, $\mathrm{Ba^{2+}}$, $\mathrm{Ag^+}$, $\mathrm{Pb^{2+}}$, $\mathrm{Na^+}$, $\mathrm{K^+}$ and $\mathrm{NH_4^+}$ usually give colourless aqueous solutions because they have no partially filled $d$-orbital transition in their common analytical form.

---

## 62. Complete Precipitate-Colour Atlas

### 62.1 Hydroxides with NaOH or NH₄OH

| Cation | Main precipitate | Colour | Behaviour in excess NaOH | Behaviour in excess NH₃ |
|---|---|---|---|---|
| $\mathrm{Cu^{2+}}$ | $\mathrm{Cu(OH)_2}$ | Light blue | Insoluble | Dissolves, deep-blue complex |
| $\mathrm{Fe^{2+}}$ | $\mathrm{Fe(OH)_2}$ | Dirty green | Insoluble | Insoluble; turns brown in air |
| $\mathrm{Fe^{3+}}$ | $\mathrm{Fe(OH)_3}$ | Reddish brown | Insoluble | Insoluble |
| $\mathrm{Al^{3+}}$ | $\mathrm{Al(OH)_3}$ | White gelatinous | Soluble as aluminate | Generally insoluble |
| $\mathrm{Cr^{3+}}$ | $\mathrm{Cr(OH)_3}$ | Grey-green | Soluble as hydroxo complex | Limited dissolution depending on conditions |
| $\mathrm{Zn^{2+}}$ | $\mathrm{Zn(OH)_2}$ | White | Soluble as zincate | Soluble as ammine |
| $\mathrm{Pb^{2+}}$ | $\mathrm{Pb(OH)_2}$ | White | Soluble as hydroxoplumbate | Insoluble |
| $\mathrm{Ni^{2+}}$ | $\mathrm{Ni(OH)_2}$ | Green | Insoluble | Dissolves in large excess/complexing conditions |
| $\mathrm{Co^{2+}}$ | $\mathrm{Co(OH)_2}$ | Blue initially; may turn pink/brown | Insoluble | Complex/oxidation behaviour |
| $\mathrm{Mn^{2+}}$ | $\mathrm{Mn(OH)_2}$ | White to very pale pink | Insoluble | Insoluble; browns rapidly in air |
| $\mathrm{Mg^{2+}}$ | $\mathrm{Mg(OH)_2}$ | White | Insoluble | Suppressed by ammonium buffer |
| $\mathrm{Bi^{3+}}$ | $\mathrm{Bi(OH)_3}$ | White | Insoluble | Insoluble |

### 62.2 Sulphides

| Colour family | Sulphides |
|---|---|
| Black | $\mathrm{Ag_2S}$, PbS, HgS, CuS, NiS, CoS, FeS; $\mathrm{Bi_2S_3}$ is brownish black |
| Yellow | $\mathrm{CdS}$, $\mathrm{As_2S_3}$, $\mathrm{As_2S_5}$, $\mathrm{SnS_2}$ |
| Orange | $\mathrm{Sb_2S_3}$, $\mathrm{Sb_2S_5}$ |
| Brown | SnS |
| Buff/flesh | MnS |
| White | ZnS |

**Unique cues**

- CdS is the important yellow sulphide that remains insoluble in yellow ammonium sulphide.
- MnS is the buff sulphide and dissolves even in acetic acid.
- SnS is brown; $\mathrm{SnS_2}$ is yellow.
- A black sulphide mixture cannot be identified by colour alone.

### 62.3 Silver salts

| Anion | Silver salt | Colour |
|---|---|---|
| $\mathrm{Cl^-}$ | AgCl | White, curdy |
| $\mathrm{Br^-}$ | AgBr | Cream/pale yellow |
| $\mathrm{I^-}$ | AgI | Yellow |
| $\mathrm{CO_3^{2-}}$ | $\mathrm{Ag_2CO_3}$ | Pale yellow |
| $\mathrm{PO_4^{3-}}$ | $\mathrm{Ag_3PO_4}$ | Yellow |
| $\mathrm{CrO_4^{2-}}$ | $\mathrm{Ag_2CrO_4}$ | Brick red |
| $\mathrm{S^{2-}}$ | $\mathrm{Ag_2S}$ | Black |
| $\mathrm{AsO_4^{3-}}$ | $\mathrm{Ag_3AsO_4}$ | Chocolate brown |
| $\mathrm{AsO_3^{3-}}$ | $\mathrm{Ag_3AsO_3}$ | Yellow |

### 62.4 Frequently confused yellow precipitates

AgI, CdS, $\mathrm{PbI_2}$, $\mathrm{PbCrO_4}$, $\mathrm{BaCrO_4}$, $\mathrm{Ag_3PO_4}$, $\mathrm{As_2S_3}$ and $\mathrm{SnS_2}$ are all described as yellow. Their group, reagent, solubility and follow-up reaction—not “yellow” alone—identify them.

---
`;

export default function SaltAnalysisPart15() {
  return <SaltAnalysisArticle metadata={metadata} content={content} />;
}
