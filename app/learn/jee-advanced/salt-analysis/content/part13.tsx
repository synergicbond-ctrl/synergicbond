import { SaltAnalysisArticle } from "../SaltAnalysisArticle";

export const metadata = {
  part: 13,
  title: "Groups V and VI: Alkaline Earths, Magnesium, Ammonium and Alkali Metals",
  chapter: "Salt Analysis",
  exam: "JEE Advanced",
};

const content = String.raw`
# Groups V and VI: Alkaline Earths, Magnesium, Ammonium and Alkali Metals

## 1. Removal of Group IV reagent

Before Group V precipitation, remove residual hydrogen sulphide or ammonium sulphide by acidification and boiling as specified. Otherwise:

- metal sulphides may continue to precipitate;
- sulphide may consume oxidants;
- ammonium sulphide changes pH and carbonate equilibria.

The filtrate should contain mainly:

$$
\mathrm{Ba^{2+},Sr^{2+},Ca^{2+},Mg^{2+},Na^+,K^+}
$$

plus ammonium introduced by group reagents.

## 2. Group V precipitation

Add ammonium chloride, ammonia and ammonium carbonate under controlled conditions.

$$
\mathrm{Ba^{2+}+CO_3^{2-}\rightarrow BaCO_3\downarrow}
$$

$$
\mathrm{Sr^{2+}+CO_3^{2-}\rightarrow SrCO_3\downarrow}
$$

$$
\mathrm{Ca^{2+}+CO_3^{2-}\rightarrow CaCO_3\downarrow}
$$

All are white.

### 2.1 Why magnesium remains in solution

The statement “magnesium carbonate is soluble” is an oversimplification. Selectivity arises from:

- controlled carbonate concentration;
- ammonium-ion suppression of ammonia ionisation;
- avoidance of excessive hydroxide;
- relative $K_{sp}$ values;
- complexation and bicarbonate/carbonate equilibria;
- reagent concentration and temperature.

If the solution is too strongly alkaline, Mg(OH)$_2$ or basic magnesium carbonate may contaminate the Group V precipitate.

### 2.2 Why ammonium salts are present

NH$_4$Cl/NH$_3$ buffer the solution and control both:

$$
[\mathrm{OH^-}]
$$

and:

$$
[\mathrm{CO_3^{2-}}]
$$

because carbonate is protonated as bicarbonate when acidity rises.

## 3. Separation of Ba, Sr and Ca

[VISUAL:group-v-separation]

Several classical schemes exist. One common sequence uses chromate for barium and sulphate for strontium, leaving calcium.

### 3.1 Dissolve the carbonate precipitate

Use acetic acid:

$$
\mathrm{MCO_3+2CH_3COOH\rightarrow M^{2+}+2CH_3COO^-+CO_2+H_2O}
$$

Acetic acid provides a weakly acidic medium suitable for selective chromate precipitation.

### 3.2 Barium as chromate

Add potassium chromate in acetate-buffered solution:

$$
\mathrm{Ba^{2+}+CrO_4^{2-}\rightarrow BaCrO_4\downarrow}
$$

Yellow barium chromate forms.

Why not strongly acidic solution? Chromate converts to dichromate/hydrogen chromate and free $[\mathrm{CrO_4^{2-}}]$ falls, increasing solubility.

Filter off BaCrO$_4$.

### 3.3 Strontium as sulphate

To the filtrate, add a soluble sulphate under specified conditions:

$$
\mathrm{Sr^{2+}+SO_4^{2-}\rightarrow SrSO_4\downarrow}
$$

White strontium sulphate forms. Calcium sulphate is more soluble and much remains in solution under controlled reagent concentration.

Filter.

### 3.4 Calcium as oxalate

Add ammonium oxalate:

$$
\mathrm{Ca^{2+}+C_2O_4^{2-}\rightarrow CaC_2O_4\downarrow}
$$

White calcium oxalate forms.

It is insoluble in acetic acid but dissolves in strong mineral acid.

## 4. Alternative Ba-Sr-Ca separation with selective sulphates

Solubility order:

$$
\mathrm{BaSO_4<SrSO_4<CaSO_4}
$$

in qualitative terms of solubility.

Fractional precipitation can separate them if sulphate concentration is carefully controlled. However, simple addition of a large excess may precipitate more than one ion. JEE questions may provide $K_{sp}$ values and ask for the concentration interval.

## 5. Barium tests

### 5.1 Sulphate

$$
\mathrm{Ba^{2+}+SO_4^{2-}\rightarrow BaSO_4\downarrow}
$$

Dense white precipitate, extremely insoluble in dilute acids.

### 5.2 Chromate

$$
\mathrm{Ba^{2+}+CrO_4^{2-}\rightarrow BaCrO_4\downarrow}
$$

Yellow precipitate, acid-sensitive compared with BaSO$_4$.

### 5.3 Flame test

Apple-green flame.

### 5.4 Sodium rhodizonate

Barium forms a coloured rhodizonate spot under controlled conditions. Strontium and lead can interfere.

## 6. Strontium tests

### 6.1 Sulphate

$$
\mathrm{Sr^{2+}+SO_4^{2-}\rightarrow SrSO_4\downarrow}
$$

White precipitate, less insoluble than BaSO$_4$.

### 6.2 Flame test

Crimson/scarlet red flame.

### 6.3 Chromate

Strontium chromate is more soluble than barium chromate, allowing barium separation in an acetate-buffered medium.

## 7. Calcium tests

### 7.1 Ammonium oxalate

$$
\mathrm{Ca^{2+}+C_2O_4^{2-}\rightarrow CaC_2O_4\downarrow}
$$

White precipitate.

### 7.2 Flame test

Brick-red/orange-red flame.

### 7.3 Calcium sulphate

Calcium sulphate is only sparingly soluble. At high sulphate concentration or high calcium concentration, it may precipitate and spoil Sr/Ca separation.

### 7.4 Calcium fluoride

$$
\mathrm{Ca^{2+}+2F^-\rightarrow CaF_2\downarrow}
$$

White precipitate; fluoride is an interfering radical in the cation scheme.

## 8. Magnesium: Group VI

The Group V filtrate contains magnesium, sodium and potassium.

### 8.1 Magnesium hydroxide

$$
\mathrm{Mg^{2+}+2OH^-\rightarrow Mg(OH)_2\downarrow}
$$

White precipitate, insoluble in excess NaOH but soluble in acids. Ammonium salts suppress its formation.

### 8.2 Magnesia mixture / phosphate test

In ammoniacal solution containing NH$_4$Cl:

$$
\mathrm{Mg^{2+}+NH_4^++PO_4^{3-}\rightarrow MgNH_4PO_4\downarrow}
$$

White crystalline precipitate.

On ignition:

$$
\mathrm{2MgNH_4PO_4\xrightarrow{\Delta}Mg_2P_2O_7+2NH_3+H_2O}
$$

### 8.3 Cobalt nitrate test

Ignited MgO gives a pink mass with cobalt nitrate under suitable conditions. This is less specific than the phosphate test.

### 8.4 Magnesium with 8-hydroxyquinoline

Magnesium can form a precipitated chelate in alkaline medium. Calcium and other metals must be controlled.

## 9. Ammonium ion

Test ammonium on the original salt before adding any ammonium reagent.

### 9.1 Sodium hydroxide test

$$
\mathrm{NH_4^++OH^-\rightarrow NH_3\uparrow+H_2O}
$$

Ammonia:

- turns moist red litmus blue;
- forms white fumes with HCl:
$$
\mathrm{NH_3+HCl\rightarrow NH_4Cl}
$$

### 9.2 Nessler's reagent

Nessler's reagent is alkaline potassium tetraiodomercurate(II), $\mathrm{K_2[HgI_4]}$. Ammonia gives a yellow-brown colour or brown precipitate of a mercury-amido-iodide species.

A commonly simplified product is written:

$$
\mathrm{HgO\cdot Hg(NH_2)I}
$$

The exact polymeric composition is complex.

Mercury-containing reagent is hazardous and the test is conceptual here.

### 9.3 Sodium cobaltinitrite-type tests

Ammonium can form sparingly soluble cobaltinitrite salts similar to potassium under suitable conditions. Distinguishing NH$_4^+$ from K$^+$ requires prior removal or decomposition of ammonium.

## 10. Sodium ion

### 10.1 Flame test

Intense golden-yellow flame corresponding mainly to the sodium D-lines near 589 nm.

The test is extremely sensitive, so contamination is common.

### 10.2 Uranyl zinc acetate test

Sodium forms a yellow crystalline triple acetate with uranyl zinc acetate under specified conditions. The formula is often represented in hydrated complex form. This is a more specific precipitation test than flame colour but involves uranium reagents.

### 10.3 Sodium pyroantimonate

Sodium can give a white crystalline precipitate with potassium pyroantimonate in concentrated neutral/alkaline solution. Other ions and concentration strongly affect the test.

## 11. Potassium ion

### 11.1 Flame test

Lilac/violet flame. Observe through cobalt glass to suppress sodium yellow light.

### 11.2 Sodium cobaltinitrite

Potassium gives a yellow precipitate of potassium sodium cobaltinitrite, often represented as:

$$
\mathrm{K_2Na[Co(NO_2)_6]}
$$

The exact composition depends on conditions.

Ammonium gives related precipitates and must be removed.

### 11.3 Perchlorate test

$$
\mathrm{K^++ClO_4^-\rightarrow KClO_4\downarrow}
$$

White potassium perchlorate is sparingly soluble, especially in cold concentrated solutions and alcohol-containing media.

### 11.4 Tetraphenylborate

$$
\mathrm{K^++B(C_6H_5)_4^-\rightarrow KB(C_6H_5)_4\downarrow}
$$

White precipitate. Ammonium and several organic cations interfere.

## 12. Lithium ion

Although not always included in the classical Group VI scheme, lithium is important for JEE.

- crimson-red flame;
- Li$_2$CO$_3$ is sparingly soluble relative to Na/K carbonates;
- LiF and Li$_3$PO$_4$ have limited solubility;
- LiNO$_3$ decomposes to Li$_2$O, NO$_2$ and O$_2$, unlike Na/K nitrates;
- Li$_2$CO$_3$ decomposes on heating.

These anomalies follow the small size and high polarising power of Li$^+$.

## 13. Flame-colour comparison

[FIGURE:flame-emission-spectrum]

[VISUAL:flame-colors]

| Ion | Colour | Masking/confirmation issue |
|---|---|---|
| Li$^+$ | Crimson | Sr also red; compare spectrum/other tests |
| Na$^+$ | Golden yellow | Strong contaminant |
| K$^+$ | Lilac | Use cobalt glass |
| Ca$^{2+}$ | Brick red | Less crimson than Sr |
| Sr$^{2+}$ | Scarlet/crimson | Can be confused with Li |
| Ba$^{2+}$ | Apple green | Copper may give blue-green |
| Cu$^{2+}$ | Blue-green | Depends on volatile halide formation |

> **Mnemonic — telling the two "red" flames apart:** Li$^+$ and Sr$^{2+}$ are the pair students confuse most, because both are commonly described as "crimson red." Anchor it by group: Li is in Group 1 (period 2, small ion) and gives the *purer, brighter* crimson; Sr is in Group 2 (period 5, larger ion) and gives a *deeper, more scarlet* red closer to Ca's brick-red neighbour. If in doubt in a real test, the question will supply a wavelength or spectrum, not just a colour name — use that instead of guessing from memory.

## 14. Fractional precipitation example

Suppose Ba$^{2+}$ and Sr$^{2+}$ are each initially $0.010\ \mathrm{M}$ and sulfate is added.

Precipitation begins when:

$$
[\mathrm{SO_4^{2-}}]=\frac{K_{sp}}{[\mathrm{M^{2+}}]}
$$

Because $K_{sp}(\mathrm{BaSO_4})$ is much smaller, barium sulphate begins first. At the sulfate concentration where SrSO$_4$ begins, the remaining Ba$^{2+}$ concentration is:

$$
[\mathrm{Ba^{2+}}]=\frac{K_{sp}(\mathrm{BaSO_4})}{[\mathrm{SO_4^{2-}}]_{\mathrm{Sr\ onset}}}
$$

This calculation determines whether separation is analytically useful.

## 15. Complete Group V/VI flow

1. Add ammonium carbonate buffer: precipitate BaCO$_3$, SrCO$_3$, CaCO$_3$.
2. Filter.
3. Dissolve precipitate in acetic acid.
4. Precipitate BaCrO$_4$ in acetate medium.
5. Filter.
6. Precipitate SrSO$_4$ under controlled sulfate concentration.
7. Filter.
8. Precipitate CaC$_2$O$_4$ with ammonium oxalate.
9. Group V filtrate: test Mg as MgNH$_4$PO$_4$.
10. Test Na and K by flame and specific precipitation.
11. Ammonium must have been tested before group reagents were introduced.

## 16. JEE Advanced traps

1. Group V selectivity is due to buffer-controlled ion concentrations, not absolute solubility slogans.
2. Strongly acidic medium suppresses chromate and can dissolve BaCrO$_4$.
3. Excess sulfate can precipitate calcium sulphate and spoil Sr/Ca separation.
4. NH$_4^+$ interferes with potassium tests.
5. Sodium contamination can mask every flame colour.
6. MgNH$_4$PO$_4$ requires ammonia plus NH$_4$Cl; too much hydroxide gives Mg(OH)$_2$.
7. Li nitrate and carbonate decompose differently from Na/K analogues.
8. Calcium oxalate is insoluble in acetic acid, while calcium carbonate dissolves with CO$_2$.
9. Barium chromate is yellow; barium sulphate is white and much more acid-resistant.
`;

export default function SaltAnalysisPart13() {
  return <SaltAnalysisArticle metadata={metadata} content={content} />;
}
