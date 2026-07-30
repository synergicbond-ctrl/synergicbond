import { SaltAnalysisArticle } from "../SaltAnalysisArticle";

export const metadata = {
  part: 17,
  title: "Master Decision Flows, Error Analysis and Rapid Revision",
  chapter: "Salt Analysis",
  exam: "JEE Advanced",
};

const content = String.raw`
# Master Decision Flows, Error Analysis and Rapid Revision

[FIGURE:master-analytical-algorithm]

## 1. Complete analytical architecture

### Stage A — original observations

1. Record colour, texture and hydration.
2. Test solubility in cold and hot water.
3. Reserve separate portions before adding any reagent.
4. Perform safe preliminary heating and flame/bead tests where relevant.

### Stage B — acid radicals

1. Dilute-acid volatile-radical test.
2. Confirm each gas chemically.
3. Test halides on a fresh nitric-acidified portion.
4. Test nitrate only after nitrite and ammonium issues are resolved.
5. Test sulphate after destroying carbonate, sulphite and thiosulphate.
6. Test phosphate, borate, oxalate, fluoride and silicate.
7. Record interfering radicals for removal before cation analysis.

### Stage C — basic radicals

1. Test ammonium on original solid.
2. Prepare original solution.
3. Remove interfering radicals.
4. Group I: dilute HCl.
5. Group II: H$_2$S in dilute HCl.
6. Group III: NH$_4$Cl then NH$_3$.
7. Group IV: ammoniacal H$_2$S/(NH$_4$)$_2$S.
8. Group V: ammonium carbonate buffer.
9. Group VI: individual Mg, Na and K tests.

## 2. Dilute-acid anion flow

### Observation: no gas

Consider sulphate, phosphate, oxalate, borate, fluoride, silicate, chromate, permanganate and other Class II radicals. Continue with solution tests.

### Observation: colourless gas with effervescence

Test with lime water.

- no reducing action: CO$_2$;
- acidified KMnO$_4$ decolourised: SO$_2$;
- blackens lead acetate: H$_2$S;
- sulphur turbidity plus SO$_2$: thiosulphate.

### Observation: brown fumes

Consider nitrite. Confirm by azo-dye or starch-iodide test on a fresh portion.

### Observation: volatile acid odour on warming

Consider acetate or formate. Use ester formation and reducing behaviour to distinguish.

## 3. Carbonate/bicarbonate flow

1. Confirm CO$_2$.
2. Add phenolphthalein:
   - pink: carbonate favoured;
   - colourless: bicarbonate possible.
3. Add cold CaCl$_2$/BaCl$_2$ to fresh neutral solution:
   - immediate precipitate: carbonate;
   - no immediate precipitate: bicarbonate possible.
4. Boil:
   - precipitation after boiling confirms bicarbonate conversion.
5. If both may be present:
   - precipitate carbonate cold;
   - filter;
   - heat filtrate;
   - reprecipitation confirms bicarbonate.

## 4. Sulphite/thiosulphate/sulphide flow

1. Acidify.
2. H$_2$S: lead acetate black; nitroprusside violet.
3. SO$_2$ only: sulphite/bisulphite.
4. SO$_2$ plus sulphur: thiosulphate.
5. Distinguish sulphite from bisulphite by alkalinity and normal-sulphite precipitation.
6. Oxidise sulphite to sulphate, then confirm acid-resistant BaSO$_4$ if required.

## 5. Halide flow

1. Use fresh solution; acidify with dilute HNO$_3$.
2. Add AgNO$_3$.
3. White curdy:
   - dissolves in dilute NH$_3$;
   - chloride.
4. Cream:
   - partly soluble in concentrated NH$_3$;
   - bromide.
5. Yellow:
   - insoluble in NH$_3$;
   - iodide.
6. Confirm Br/I by chlorine-water organic-layer test.
7. Confirm chloride by chromyl chloride test on a dry fresh portion.

## 6. Nitrate/nitrite flow

1. Nitrite:
   - acid gives NO/NO$_2$;
   - azo-dye positive;
   - decolourises acidified KMnO$_4$.
2. Remove nitrite.
3. Brown-ring test for nitrate.
4. Alternative: Devarda's alloy after proving ammonium absent.

## 7. Group I cation flow

1. Dilute HCl gives white precipitate.
2. Boil precipitate with water.
3. Hot filtrate:
   - PbCrO$_4$ yellow or PbI$_2$ yellow;
   - Pb$^{2+}$.
4. Residue + NH$_3$:
   - black residue: Hg(I);
   - clear filtrate: Ag ammine.
5. Acidify filtrate:
   - AgCl reprecipitates.

## 8. Group II flow

1. Pass H$_2$S in dilute HCl.
2. Treat precipitate with yellow ammonium sulphide.
3. Insoluble residue: IIA.
4. Soluble thio-complex filtrate: IIB.
5. IIA:
   - HgS resistant;
   - Pb as sulphate/chromate;
   - Bi by oxychloride/stannite;
   - Cu by deep-blue ammine;
   - Cd by yellow CdS.
6. IIB:
   - arsenic yellow sulphide, relatively HCl-resistant;
   - antimony orange sulphide;
   - tin brown SnS or yellow SnS$_2$ and HgCl$_2$ reduction test.

## 9. Group III flow

1. Remove H$_2$S.
2. Add NH$_4$Cl, then NH$_3$.
3. Mixed Fe/Al/Cr hydroxides.
4. Add excess NaOH + H$_2$O$_2$:
   - residue Fe(OH)$_3$;
   - filtrate aluminate + chromate.
5. Fe confirmation: SCN$^-$ or ferrocyanide.
6. Reprecipitate Al(OH)$_3$ under controlled pH.
7. Confirm Al with aluminon/cobalt nitrate.
8. Confirm chromate with Pb$^{2+}$ or peroxide-blue test.

## 10. Group IV flow

1. Precipitate NiS, CoS, MnS, ZnS in ammoniacal sulphide.
2. Dilute HCl:
   - residue NiS + CoS;
   - filtrate Mn$^{2+}$ + Zn$^{2+}$.
3. Mn/Zn:
   - NaOH + oxidant;
   - MnO$_2$ residue;
   - zincate filtrate.
4. Mn to purple permanganate.
5. Zn as white ZnS or green cobalt-nitrate mass.
6. Ni with DMG red.
7. Co with thiocyanate blue.

## 11. Group V/VI flow

1. Ammonium carbonate buffer precipitates Ba/Sr/Ca carbonates.
2. Dissolve in acetic acid.
3. Ba as yellow BaCrO$_4$.
4. Sr as white SrSO$_4$.
5. Ca as white CaC$_2$O$_4$.
6. Filtrate:
   - Mg as MgNH$_4$PO$_4$;
   - Na yellow flame;
   - K lilac flame/cobaltinitrite.
7. NH$_4^+$ was tested before the entire group scheme.

## 12. Error-analysis table

| Error | Immediate consequence | False inference |
|---|---|---|
| HCl used before chloride test | Chloride introduced | False Cl$^-$ positive |
| HNO$_3$ used before nitrate test | Nitrate introduced | False NO$_3^-$ positive |
| H$_2$SO$_4$ used before sulphate test | Sulphate introduced | False SO$_4^{2-}$ positive |
| NH$_4$Cl added before ammonium test | Ammonium introduced | False NH$_4^+$ positive |
| No filtration after Group I | Chlorides react in later steps | Mixed/incorrect Group II precipitate |
| Group II not sufficiently acidic | ZnS, MnS, NiS, CoS may co-precipitate | Group II contamination |
| NH$_4$Cl omitted in Group III | Mg/Zn/Mn hydroxides co-precipitate | False Group III |
| H$_2$S not removed before Group III | Sulphides continue to form | Dark contaminated precipitate |
| Interfering radicals not removed | Phosphates/borates/oxalates precipitate | False cation groups |
| Excess chlorine in layer test | I$_2$ over-oxidised | Iodide missed |
| Brown-ring layers mixed | Heat/NO loss | Weak or absent ring |
| Too much sample in borax bead | Opaque dark bead | Colour unreadable |
| Sodium-contaminated wire | Yellow masks all | False Na$^+$ |
| Old FeSO$_4$ in brown-ring test | Fe(II) oxidised | False negative |
| Strong acid in DMG test | Ligand protonated | Ni missed |

## 13. How to solve an unknown-sequence question

Use this five-step method.

### Step 1: identify the chemical operation

Is it precipitation, dissolution, redox, complexation, gas evolution or heating?

### Step 2: write the net ionic equation

Ignore spectator ions unless they control pH or complexation.

### Step 3: track the phase

Mark every species as precipitate, filtrate, gas, organic layer or residue.

### Step 4: track oxidation state

Especially for Fe, Cr, Mn, Sn, As, Sb, Cu, Hg, sulphur and nitrogen.

### Step 5: check reagent contamination

Ask whether the reagent itself introduced the ion later “detected.”

## 14. Rapid redox map

| Conversion | Reagent/condition |
|---|---|
| Fe$^{2+}\rightarrow$ Fe$^{3+}$ | HNO$_3$, Cl$_2$, KMnO$_4$ |
| Fe$^{3+}\rightarrow$ Fe$^{2+}$ | SnCl$_2$, I$^-$, SO$_2$ |
| Cr$^{3+}\rightarrow$ CrO$_4^{2-}$ | H$_2$O$_2$/NaOH |
| Cr$_2$O$_7^{2-}\rightarrow$ Cr$^{3+}$ | Reducing agent in acid |
| Mn$^{2+}\rightarrow$ MnO$_4^-$ | BiO$_3^-$ in HNO$_3$ |
| MnO$_4^-\rightarrow$ Mn$^{2+}$ | Reducing agent in acid |
| MnO$_4^-\rightarrow$ MnO$_2$ | Reducing agent neutral/alkaline |
| Sn$^{4+}\rightarrow$ Sn$^{2+}$ | Fe/Zn |
| Hg$^{2+}\rightarrow$ Hg$_2^{2+}\rightarrow$ Hg | Sn$^{2+}$ |
| I$^-\rightarrow$ I$_2$ | Cl$_2$, Fe$^{3+}$, Cu$^{2+}$ |
| S$_2$O$_3^{2-}\rightarrow$ S$_4$O$_6^{2-}$ | I$_2$ |
| SO$_3^{2-}\rightarrow$ SO$_4^{2-}$ | KMnO$_4$, Cr$_2$O$_7^{2-}$ |

## 15. Rapid complex map

| Metal | Ligand | Complex / effect |
|---|---|---|
| Ag$^+$ | NH$_3$ | [Ag(NH$_3$)$_2$]$^+$; dissolves AgCl |
| Cu$^{2+}$ | NH$_3$ | Deep-blue [Cu(NH$_3$)$_4$]$^{2+}$ |
| Zn$^{2+}$ | OH$^-$ | [Zn(OH)$_4$]$^{2-}$ |
| Al$^{3+}$ | OH$^-$ | [Al(OH)$_4$]$^-$ |
| Hg$^{2+}$ | I$^-$ | [HgI$_4$]$^{2-}$ |
| Pb$^{2+}$ | I$^-$ | [PbI$_4$]$^{2-}$ under excess iodide |
| Fe$^{3+}$ | SCN$^-$ | Blood-red thiocyanate complexes |
| Co$^{2+}$ | SCN$^-$ | Blue [Co(SCN)$_4$]$^{2-}$ |
| Ni$^{2+}$ | DMG | Red neutral chelate precipitate |
| As/Sb/Sn sulphides | S$^{2-}$/polysulphide | Soluble thio salts |

## 16. Final one-minute checklist

- Separate portions?
- Correct acid?
- Correct pH?
- Filtered?
- Interference removed?
- Free-ion concentration considered?
- Excess reagent complex?
- Oxidation state tracked?
- Observation plus confirmation?
- Reagent contamination excluded?
`;

export default function SaltAnalysisPart17() {
  return <SaltAnalysisArticle metadata={metadata} content={content} />;
}
