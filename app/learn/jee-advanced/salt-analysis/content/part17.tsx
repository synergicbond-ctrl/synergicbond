import { SaltAnalysisArticle } from "../SaltAnalysisArticle";

export const metadata = {
  part: 17,
  title: "Complete Decision Flows and Rapid Revision",
  chapter: "Salt Analysis",
  exam: "JEE Advanced",
};

const content = String.raw`
## 37. Compact Decision Flow for an Unknown Anion

1. **Add dilute acid to a fresh portion.**
   - Effervescence, no reducing action: carbonate/bicarbonate.
   - Rotten-egg gas: sulphide.
   - Pungent reducing gas: sulphite.
   - Pungent gas + sulphur turbidity: thiosulphate.
   - Brown fumes: nitrite.

2. **If no decisive gas, test a fresh aqueous portion.**
   - Acidified $\mathrm{AgNO_3}$: halides.
   - Acidified $\mathrm{BaCl_2}$: sulphate.
   - Ammonium molybdate: phosphate.
   - Calcium chloride + acid solubility: oxalate/fluoride distinctions.
   - Ester/turmeric/gel tests: acetate/borate/silicate.

3. **Use a second independent confirmation.**

4. **Check interferences before reporting.**

---

## 38. Compact Decision Flow for an Unknown Cation

1. Test $\mathrm{NH_4^+}$ on the original sample.
2. Add dilute HCl: Group I chlorides.
3. Pass $\mathrm{H_2S}$ in acidic filtrate: Group II sulphides.
4. Remove $\mathrm{H_2S}$; add $\mathrm{NH_4Cl/NH_4OH}$: Group III hydroxides.
5. Pass $\mathrm{H_2S}$ in ammoniacal medium: Group IV sulphides.
6. Add ammonium carbonate under buffered conditions: Ba/Sr/Ca.
7. Test final filtrate for Mg/Na/K.

At every stage:

- ensure complete precipitation;
- filter before adding the next reagent;
- wash the precipitate;
- retain both precipitate and filtrate until identification is secure.

[FIGURE:master-analytical-algorithm]

---

## 39. Rapid Revision Tables

### 39.1 Characteristic gas tests

| Gas | Formation clue | Confirmation |
|---|---|---|
| $\mathrm{CO_2}$ | Carbonate + acid | Limewater milky; no KMnO₄ decolourisation |
| $\mathrm{SO_2}$ | Sulphite + acid | Acidified KMnO₄ decolourised |
| $\mathrm{H_2S}$ | Sulphide + acid | Lead acetate black |
| $\mathrm{NH_3}$ | Ammonium + NaOH | Red litmus blue; HCl fumes |
| $\mathrm{NO_2}$ | Nitrite acidification/nitrate + Cu | Brown gas |
| HCl | Chloride + conc. H₂SO₄ | White fumes with NH₃ |

### 39.2 Most diagnostic precipitate colours

| Colour | Compound |
|---|---|
| White curdy | AgCl |
| Cream | AgBr |
| Yellow | AgI, CdS, PbI₂, PbCrO₄ |
| Black | CuS, PbS, HgS, NiS, CoS |
| Orange | $\mathrm{Sb_2S_3}$ |
| Reddish brown | $\mathrm{Fe(OH)_3}$ |
| Grey-green | $\mathrm{Cr(OH)_3}$ |
| Rose red | $\mathrm{Ni(DMG)_2}$ |
| Flesh/buff | MnS |

### 39.3 Oxidation-state colour conversions

| Conversion | Colour change |
|---|---|
| $\mathrm{CrO_4^{2-}\rightleftharpoons Cr_2O_7^{2-}}$ | Yellow $\rightleftharpoons$ orange |
| $\mathrm{Cr(VI)\rightarrow Cr^{3+}}$ | Orange/yellow $\rightarrow$ green |
| $\mathrm{MnO_4^-\rightarrow Mn^{2+}}$ | Purple $\rightarrow$ nearly colourless |
| $\mathrm{MnO_4^-\rightarrow MnO_2}$ | Purple $\rightarrow$ brown ppt |
| $\mathrm{MnO_4^-\rightarrow MnO_4^{2-}}$ | Purple $\rightarrow$ green |

---

## 68. Mnemonics and Memory Maps

Mnemonics are revision aids, not substitutes for equations.

### 68.1 Dilute-acid anions: SCANTS

**S C A N T S**

- **S** – Sulphide, $\mathrm{S^{2-}}$: $\mathrm{H_2S}$, rotten-egg smell
- **C** – Carbonate/bicarbonate: $\mathrm{CO_2}$, brisk effervescence
- **A** – Acetate: acetic-acid/vinegar clue
- **N** – Nitrite: NO/$\mathrm{NO_2}$ and brown fumes
- **T** – Thiosulphate: $\mathrm{SO_2}$ + sulphur turbidity
- **S** – Sulphite/bisulphite: $\mathrm{SO_2}$ without sulphur turbidity

### 68.2 Cation groups

| Group | Ions | Mnemonic |
|---|---|---|
| I | Ag, Pb, Hg(I) | **A Pretty Heavy** chloride group |
| II-A | Cu, Cd, Bi, Hg(II), Pb | **Cute Cadets Bring Heavy Plates** |
| II-B | As, Sb, Sn | **A Smart Student** dissolves in yellow ammonium sulphide |
| III | Fe, Al, Cr | **Iron–Aluminium–Chrome** hydroxides |
| IV | Ni, Co, Mn, Zn | **Nice Cobalt Men use Zinc** |
| V | Ba, Sr, Ca | **Ba–Sr–Ca: carbonate trio** |
| VI | Mg, Na, K | **My Naughty Kid** remains in filtrate |

### 68.3 Group I separation

**“Lead likes Heat; Silver likes Ammonia; Mercury turns Black.”**

- hot water removes $\mathrm{PbCl_2}$;
- ammonia dissolves AgCl;
- ammonia blackens $\mathrm{Hg_2Cl_2}$.

### 68.4 Silver halides

**“White–Cream–Yellow; Dilute–Concentrated–Never.”**

- AgCl white, dissolves in dilute ammonia;
- AgBr cream, partly in concentrated ammonia;
- AgI yellow, not in ammonia.

### 68.5 Sulphide colours

**“Black crowd; As–Cd–Sn(IV) yellow; Sb orange; Mn flesh; Zn white; Sn(II) brown.”**

### 68.6 Alkaline-earth flames

**“Calcium Brick, Strontium Crimson, Barium Apple.”**

### 68.7 Group III in excess NaOH

**“Iron stays; Aluminium dissolves; Chromium dissolves then turns yellow on oxidation.”**

### 68.8 Permanganate products

**“Acid clears, neutral browns, base greens.”**

- acid $\rightarrow\mathrm{Mn^{2+}}$;
- neutral $\rightarrow\mathrm{MnO_2}$;
- strong base $\rightarrow\mathrm{MnO_4^{2-}}$.

### 68.9 Chromate–dichromate

**“Acid makes Orange; Alkali makes Yellow.”**

### 68.10 Halide reducing power

**“I before Br before Cl”** in reducing strength:

$$\mathrm{I^->Br^->Cl^-}$$

Iodide reduces concentrated sulphuric acid most strongly.

---

## 74. High-Level JEE Traps and Contradictions

1. **“All nitrates are soluble” does not mean nitrate can never be detected by precipitation.** Nitrate is confirmed by redox/complex formation, not nitrate precipitation.
2. **“All ammonium salts are soluble” does not mean ammonium never gives a precipitate.** Complex anions such as cobaltinitrite, chloroplatinate and hydrogen tartrate can precipitate ammonium under suitable conditions.
3. **Pb²⁺ belongs to both Groups I and II.** Moderate PbCl₂ solubility leaves lead for PbS precipitation.
4. **Ag⁺ should not normally reach Group II.** If AgCl is not fully removed, black Ag₂S can appear later.
5. **Al³⁺ and Cr³⁺ with soluble sulphide give hydroxides, not stable sulphides**, because sulphide hydrolyses strongly.
6. **Fe³⁺ with acidic H₂S gives sulphur and Fe²⁺**, not Fe₂S₃.
7. **A yellow precipitate is not a unique result.** At least eight common yellow precipitates exist.
8. **A white precipitate with Ba²⁺ does not prove sulphate.** Correct prior acidification is essential.
9. **A brown ring is not automatically nitrate.** Nitrite can also generate NO.
10. **AgBr language varies.** It is much less soluble than AgCl, dissolving significantly only in concentrated ammonia.
11. **AgI is insoluble in ammonia but can dissolve in cyanide or thiosulphate under suitable complexing conditions.**
12. **Excess chlorine water can erase the iodide result** by oxidising iodine to iodate.
13. **The white CuI precipitate may be invisible** because iodine/triiodide is dark; thiosulphate reveals it.
14. **Carbonate and sulphite both make limewater milky.** Only sulphite reduces acidified oxidants.
15. **Sulphite and thiosulphate both decolourise iodine.** Only thiosulphate gives sulphur turbidity with dilute acid.
16. **ZnS precipitation with H₂S may be incomplete** unless generated acidity is buffered.
17. **MnS is unusually acid-soluble**, even in acetic acid; NiS and CoS resist dilute non-oxidising acid.
18. **Mg does form carbonate and hydroxide.** It remains in the Group V filtrate because conditions suppress precipitation, not because these compounds do not exist.
19. **Flame colour is an emission property, not the ordinary colour of the salt.**
20. **Borax-bead colour does not preserve the original oxidation state.** The flame may oxidise or reduce the ion.
21. **Cr³⁺ may appear green or violet.** Ligand environment and hydration history matter.
22. **CoCl₂ is not always blue.** Hydrated cobalt(II) chloride is pink; anhydrous/chloro-complex forms are blue.
23. **ZnO yellow-hot/white-cold is reversible** and does not indicate a permanent chemical conversion.
24. **Permanganate does not always become Mn²⁺.** Medium controls the product.
25. **Chromate/dichromate interconversion is an equilibrium**, not a redox reaction; chromium remains +6.
26. **Acidifying a test after the wrong precipitate has formed is not equivalent to acidifying before reagent addition.**
27. **“Insoluble” is concentration-dependent.** Selective precipitation requires comparing ionic products, not memorising absolute labels.
28. **A precipitate dissolving in excess reagent may indicate complex formation or amphoterism.** These mechanisms are not identical.
29. **Testing ammonium or nitrate after introducing those ions gives a guaranteed false result.**
30. **Colours of mixed precipitates are dominated by the darkest component.** Separation must precede visual identification.

---

## 76. Additional Mnemonics

### 76.1 General solubility

**“NAG always dissolves”**

- **N**itrates
- **A**mmonium salts
- **G**roup-1/alkali-metal salts

Then learn the named exceptions: $\mathrm{Li_3PO_4}$, $\mathrm{Li_2CO_3}$, moderately soluble $\mathrm{NaHCO_3}$ and sparingly soluble $\mathrm{KClO_4}$.

### 76.2 Insoluble halides

**“Silver, Lead, Mercury-one stop the halides.”**

Ag⁺, Pb²⁺ and $\mathrm{Hg_2^{2+}}$ form the major insoluble chlorides/bromides/iodides.

### 76.3 Insoluble sulphates

**“Ba–Sr–Pb block sulphate; Ca partly waits.”**

BaSO₄, SrSO₄ and PbSO₄ are strongly insoluble; CaSO₄ is sparingly soluble.

### 76.4 Group reagents

**“Cl, S-acid, OH-buffer, S-base, CO₃, then none.”**

1. dilute HCl;
2. H₂S in acid;
3. NH₄Cl/NH₄OH;
4. H₂S in base;
5. ammonium carbonate;
6. individual tests.

### 76.5 Group II colours

**“Copper crowd Black; Cadmium Yellow; Antimony Orange; Tin changes Brown to Yellow.”**

### 76.6 Amphoteric hydroxides

**“ZAP-Cr-Sn”**

Zn, Al, Pb, Cr and Sn hydroxides dissolve in strong base under suitable conditions.

### 76.7 Group IV acid solubility

**“Mn and Zn move into acid; Ni and Co stay.”**

### 76.8 Brown-ring sequence

**“Reduce, Bind, Ring.”**

Nitrate is reduced to NO; NO binds Fe²⁺; the nitrosyl complex forms the brown ring.

### 76.9 Thiosulphate

**“Thio gives Two: SO₂ + S.”**

### 76.10 Group I

**“Hot Lead, Ammonia Silver, Black Mercury.”**

---
`;

export default function SaltAnalysisPart17() {
  return <SaltAnalysisArticle metadata={metadata} content={content} />;
}
