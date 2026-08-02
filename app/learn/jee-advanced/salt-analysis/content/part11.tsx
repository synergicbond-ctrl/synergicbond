import { SaltAnalysisArticle } from "../SaltAnalysisArticle";

export const metadata = {
  part: 11,
  title: "Group III Cations: Iron, Aluminium and Chromium",
  chapter: "Salt Analysis",
  exam: "JEE Advanced",
};

const content = String.raw`
# Group III Cations: Iron, Aluminium and Chromium

## 1. Group reagent and buffer control

After removing Group II sulphides and expelling residual $\mathrm{H_2S}$, add solid or concentrated ammonium chloride followed by aqueous ammonia.

The buffer equilibrium is:

$$
\mathrm{NH_3+H_2O\rightleftharpoons NH_4^++OH^-}
$$

The common ion $\mathrm{NH_4^+}$ suppresses ammonia ionisation. The controlled hydroxide concentration precipitates the low-solubility hydroxides:

$$
\mathrm{Fe^{3+}+3OH^-\rightarrow Fe(OH)_3\downarrow}
$$

$$
\mathrm{Al^{3+}+3OH^-\rightarrow Al(OH)_3\downarrow}
$$

$$
\mathrm{Cr^{3+}+3OH^-\rightarrow Cr(OH)_3\downarrow}
$$

while helping to keep Mg, Mn, Zn, Ni and Co in solution.

### 1.1 Precipitate colours

| Ion | Hydroxide | Colour |
|---|---|---|
| $\mathrm{Fe^{3+}}$ | Fe(OH)$_3$ | Reddish brown |
| $\mathrm{Al^{3+}}$ | Al(OH)$_3$ | White gelatinous |
| $\mathrm{Cr^{3+}}$ | Cr(OH)$_3$ | Grey-green/green |

A mixed precipitate may appear brown-green and cannot be identified by colour alone.

### 1.2 Why $\mathrm{NH_4Cl}$ must be added first

If ammonia is added without ammonium chloride:

- $[\mathrm{OH^-}]$ becomes too large;
- Mg(OH)$_2$ may precipitate;
- Mn(OH)$_2$ may precipitate and oxidise;
- Zn(OH)$_2$ may precipitate;
- mixed precipitates carry ions by adsorption.

## 2. Interfering acid radicals

Phosphate, borate, oxalate, fluoride, silicate and arsenate can precipitate or complex cations in the Group III medium.

Examples:

$$
\mathrm{3Ca^{2+}+2PO_4^{3-}\rightarrow Ca_3(PO_4)_2\downarrow}
$$

$$
\mathrm{Al^{3+}+6F^-\rightleftharpoons[AlF_6]^{3-}}
$$

A Group III precipitate formed without prior removal of interfering radicals may contain later-group ions or may fail to contain aluminium because fluoride has masked it.

## 3. Separation of Fe, Al and Cr

[VISUAL:group-iii-separation]

A standard conceptual separation uses excess sodium hydroxide plus an oxidant.

### 3.1 Treat with excess NaOH

Ferric hydroxide remains insoluble:

$$
\mathrm{Fe(OH)_3(s)}
$$

Aluminium hydroxide dissolves as aluminate:

$$
\mathrm{Al(OH)_3+OH^-\rightarrow[Al(OH)_4]^-}
$$

Chromium(III) hydroxide is amphoteric and can dissolve:

$$
\mathrm{Cr(OH)_3+3OH^-\rightleftharpoons[Cr(OH)_6]^{3-}}
$$

However, Cr(III) dissolution may be slow and incomplete. Oxidation in alkaline medium converts chromium(III) to soluble yellow chromate.

### 3.2 Oxidation of chromium in alkaline medium

With hydrogen peroxide:

$$
\mathrm{2Cr(OH)_3+3H_2O_2+4OH^-\rightarrow2CrO_4^{2-}+8H_2O}
$$

The exact stoichiometric representation may vary with hydroxo species, but the analytical change is:

- green/grey Cr(III) hydroxide;
- yellow Cr(VI) chromate solution.

After treatment:

- residue: Fe(OH)$_3$;
- filtrate: aluminate and chromate.

[FIGURE:chromate-dichromate-redox]

### 3.3 Separate aluminium from chromate

Acidify carefully and then make the solution ammoniacal under controlled conditions:

$$
\mathrm{[Al(OH)_4]^-+H^+\rightarrow Al(OH)_3\downarrow+H_2O}
$$

Chromate remains in solution in suitable alkaline-to-neutral conditions. Alternatively, precipitate chromate selectively as yellow lead or barium chromate after separating aluminium.

## 4. Iron chemistry

Iron commonly occurs as Fe(II) or Fe(III). The classical Group III hydroxide group is usually discussed for Fe(III), but oxidation state must be established.

### 4.1 Fe(III) with thiocyanate

$$
\mathrm{Fe^{3+}+SCN^-\rightleftharpoons[FeSCN]^{2+}}
$$

A blood-red complex forms. In reality, several thiocyanato complexes coexist.

Interferences:

- fluoride and phosphate strongly complex Fe(III) and suppress the colour;
- reducing agents convert Fe(III) to Fe(II);
- nitrite and strong oxidants may alter reagent chemistry.

### 4.2 Fe(III) with ferrocyanide

$$
\mathrm{4Fe^{3+}+3[Fe(CN)_6]^{4-}\rightarrow Fe_4[Fe(CN)_6]_3\downarrow}
$$

Prussian blue forms.

### 4.3 Fe(II) with ferricyanide

$$
\mathrm{3Fe^{2+}+2[Fe(CN)_6]^{3-}\rightarrow Fe_3[Fe(CN)_6]_2\downarrow}
$$

Turnbull's blue forms. Modern structural descriptions show strong similarity between Prussian and Turnbull blues, but the classical reagent logic remains useful.

### 4.4 Fe(II) with ferrocyanide

A pale or white precipitate forms initially, which turns blue on oxidation.

### 4.5 Fe(III) with hydroxide

$$
\mathrm{Fe^{3+}+3OH^-\rightarrow Fe(OH)_3\downarrow}
$$

Reddish-brown gelatinous precipitate, insoluble in excess NaOH and ammonia.

### 4.6 Reduction and oxidation

$$
\mathrm{Fe^{3+}+e^-\rightleftharpoons Fe^{2+}}
$$

Reducing agents include Sn(II), iodide and sulphite. Oxidants include permanganate, dichromate, chlorine and nitric acid.

A nitrate-based dissolution can oxidise Fe(II) to Fe(III), so the original oxidation state may be lost.

## 5. Aluminium chemistry

### 5.1 Aluminium hydroxide

$$
\mathrm{Al^{3+}+3OH^-\rightarrow Al(OH)_3\downarrow}
$$

White gelatinous precipitate.

Dissolution in acid:

$$
\mathrm{Al(OH)_3+3H^+\rightarrow Al^{3+}+3H_2O}
$$

Dissolution in excess base:

$$
\mathrm{Al(OH)_3+OH^-\rightarrow[Al(OH)_4]^-}
$$

Ammonia usually does not dissolve Al(OH)$_3$ because it does not supply enough hydroxide to form aluminate strongly.

### 5.2 Reprecipitation from aluminate

Careful acidification:

$$
\mathrm{[Al(OH)_4]^-+H^+\rightarrow Al(OH)_3\downarrow+H_2O}
$$

Excess acid dissolves the precipitate:

$$
\mathrm{Al(OH)_3+3H^+\rightarrow Al^{3+}+3H_2O}
$$

Thus the acid must be added carefully.

### 5.3 Aluminon test

Aluminium forms a red lake with aluminon in ammoniacal medium, often adsorbed on aluminium hydroxide. Fe(III) and Cr(III) must be removed first because they produce coloured interferences.

### 5.4 Cobalt nitrate test

Ignite aluminium compound to alumina, moisten with cobalt nitrate and heat:

$$
\mathrm{CoO+Al_2O_3\rightarrow CoAl_2O_4}
$$

Blue cobalt aluminate forms.

### 5.5 Fluoride masking

$$
\mathrm{Al^{3+}+6F^-\rightleftharpoons[AlF_6]^{3-}}
$$

The stable fluoro-complex can prevent aluminium hydroxide precipitation.

## 6. Chromium chemistry

Chromium shows several oxidation states; Cr(III) and Cr(VI) dominate classical analysis.

### 6.1 Chromium(III) hydroxide

$$
\mathrm{Cr^{3+}+3OH^-\rightarrow Cr(OH)_3\downarrow}
$$

Grey-green precipitate.

It dissolves in acid:

$$
\mathrm{Cr(OH)_3+3H^+\rightarrow Cr^{3+}+3H_2O}
$$

and in strong base as hydroxo-complex:

$$
\mathrm{Cr(OH)_3+3OH^-\rightleftharpoons[Cr(OH)_6]^{3-}}
$$

### 6.2 Oxidation to chromate

Alkaline hydrogen peroxide or another oxidant converts Cr(III) to chromate:

$$
\mathrm{2Cr(OH)_3+3H_2O_2+4OH^-\rightarrow2CrO_4^{2-}+8H_2O}
$$

Yellow solution.

### 6.3 Lead chromate test

$$
\mathrm{Pb^{2+}+CrO_4^{2-}\rightarrow PbCrO_4\downarrow}
$$

Yellow precipitate.

### 6.4 Barium chromate test

$$
\mathrm{Ba^{2+}+CrO_4^{2-}\rightarrow BaCrO_4\downarrow}
$$

Yellow precipitate, acid-sensitive compared with BaSO$_4$.

### 6.5 Peroxide test

Acidified chromate/dichromate gives a transient blue peroxo species extractable into an organic layer.

### 6.6 Reduction of chromate

In acid:

$$
\mathrm{Cr_2O_7^{2-}+14H^++6e^-\rightarrow2Cr^{3+}+7H_2O}
$$

The orange solution becomes green.

## 7. Group III separation flow

1. Add NH$_4$Cl and NH$_3$: precipitate Fe(OH)$_3$, Al(OH)$_3$, Cr(OH)$_3$.
2. Wash precipitate.
3. Add excess NaOH and H$_2$O$_2$:
   - Fe(OH)$_3$ remains;
   - Al enters solution as aluminate;
   - Cr enters solution as chromate.
4. Confirm Fe in residue with SCN$^-$ or ferrocyanide after dissolution.
5. Separate Al from chromate:
   - reprecipitate Al(OH)$_3$ under controlled pH;
   - chromate remains yellow.
6. Confirm Al with aluminon or cobalt nitrate.
7. Confirm Cr as PbCrO$_4$, BaCrO$_4$ or peroxide-blue species.

## 8. Precipitate colours and solubility

| Substance | Colour | Excess NaOH | Excess NH$_3$ | Acid |
|---|---|---|---|---|
| Fe(OH)$_3$ | Reddish brown | Insoluble | Insoluble | Soluble |
| Al(OH)$_3$ | White | Soluble | Insoluble | Soluble |
| Cr(OH)$_3$ | Grey-green | Soluble slowly/conditionally | Mostly insoluble | Soluble |
| PbCrO$_4$ | Yellow | Dissolves in strong base | Insoluble | Dissolves under suitable strong acid |
| BaCrO$_4$ | Yellow | Limited | Insoluble | Acid-sensitive |

## 9. Amphoterism versus complex formation

[FIGURE:amphoterism-vs-complexation]

Al(OH)$_3$ dissolves in NaOH by forming an anionic hydroxo species. This is amphoterism.

Cu(OH)$_2$ dissolves in ammonia by forming a cationic ammine complex. This is complex formation, not amphoterism.

Cr(OH)$_3$ may show both hydroxo-complex formation and oxidation to chromate. A yellow solution after H$_2$O$_2$/NaOH indicates oxidation, not just dissolution.

## 10. JEE Advanced traps

1. Fe(OH)$_3$ is not amphoteric under ordinary Group III conditions.
2. Al(OH)$_3$ dissolves in NaOH but not appreciably in ammonia.
3. Cr(OH)$_3$ dissolution in base may be slow; oxidation to chromate gives a clear yellow solution.
4. Fluoride can mask aluminium and iron.
5. Phosphate can precipitate later-group cations in Group III conditions.
6. SCN$^-$ red colour is suppressed by strong complexing ligands such as fluoride.
7. Nitric acid preparation can destroy information about Fe(II).
8. A green chromium solution may be Cr(III), manganate, nickel or a mixture; use chemistry, not colour alone.
9. Prussian blue and Turnbull's blue classical formulas differ, but their solid-state structures are closely related.
10. Reprecipitation of Al(OH)$_3$ requires controlled acidification; excess acid redissolves it.
`;

export default function SaltAnalysisPart11() {
  return <SaltAnalysisArticle metadata={metadata} content={content} />;
}
