import { SaltAnalysisArticle } from "../SaltAnalysisArticle";

export const metadata = {
  part: 3,
  title: "Anion Strategy and Carbonate System",
  chapter: "Salt Analysis",
  exam: "JEE Advanced",
};

const content = String.raw`
## 5. Anion Analysis: Master Classification

Anions cannot be separated into perfectly rigid groups like cations. A practical classification is based on their reaction with dilute or concentrated acids and their behaviour in solution.

[FIGURE:acid-radical-map]

### 5.1 Anions giving gases with dilute acid

| Anion | Main gas/product | Key observation |
|---|---|---|
| $\mathrm{CO_3^{2-}}$, $\mathrm{HCO_3^-}$ | $\mathrm{CO_2}$ | Colourless gas; limewater milky |
| $\mathrm{S^{2-}}$ | $\mathrm{H_2S}$ | Rotten-egg gas; lead acetate black |
| $\mathrm{SO_3^{2-}}$ | $\mathrm{SO_2}$ | Decolourises acidified oxidants |
| $\mathrm{S_2O_3^{2-}}$ | $\mathrm{SO_2+S}$ | Gas plus yellow sulphur turbidity |
| $\mathrm{NO_2^-}$ | $\mathrm{NO/NO_2}$ | Brown fumes develop in air |
| $\mathrm{CN^-}$ | HCN | Highly toxic; not tested casually |

[VISUAL:anion-gas-flow]

### 5.2 Anions commonly tested with concentrated sulphuric acid

Primarily halides and nitrate:

- $\mathrm{Cl^-}$: HCl fumes;
- $\mathrm{Br^-}$: HBr plus partial oxidation to brown $\mathrm{Br_2}$;
- $\mathrm{I^-}$: HI is strongly reducing; violet iodine and reduction products of $\mathrm{H_2SO_4}$;
- $\mathrm{NO_3^-}$: nitric acid may be liberated; copper turnings give $\mathrm{NO_2}$ on heating.

### 5.3 Anions mainly identified by solution reactions

$\mathrm{SO_4^{2-}}$, $\mathrm{PO_4^{3-}}$, $\mathrm{BO_3^{3-}/B_4O_7^{2-}}$, $\mathrm{C_2O_4^{2-}}$, $\mathrm{CH_3COO^-}$, $\mathrm{F^-}$, silicate, chromate, dichromate, manganate, and permanganate.

---

## 6. Carbonate and Hydrogen Carbonate

### 6.1 Dilute-acid test

$$\mathrm{CO_3^{2-}+2H^+\rightarrow CO_2\uparrow+H_2O}$$

$$\mathrm{HCO_3^-+H^+\rightarrow CO_2\uparrow+H_2O}$$

Pass the gas through limewater:

$$\mathrm{Ca(OH)_2+CO_2\rightarrow CaCO_3\downarrow+H_2O}$$

On prolonged passage:

$$\mathrm{CaCO_3+CO_2+H_2O\rightarrow Ca(HCO_3)_2(aq)}$$

Thus milkiness disappears in excess $\mathrm{CO_2}$.

### 6.2 Carbonate versus hydrogen carbonate

With magnesium sulphate at room temperature:

- carbonate gives immediate white $\mathrm{MgCO_3}$ precipitate;
- bicarbonate gives no immediate precipitate, but gives precipitate on boiling because bicarbonate decomposes.

$$\mathrm{Mg^{2+}+CO_3^{2-}\rightarrow MgCO_3\downarrow}$$

### 6.3 JEE distinctions

- $\mathrm{CO_2}$ does **not** decolourise acidified $\mathrm{KMnO_4}$; $\mathrm{SO_2}$ does.
- Both $\mathrm{CO_2}$ and $\mathrm{SO_2}$ can turn limewater milky. Use an oxidant test to distinguish them.
- Excess $\mathrm{CO_2}$ clears $\mathrm{CaCO_3}$ by soluble bicarbonate formation.

---

## 45. Detailed Gas Identification Network

### Carbon dioxide versus sulphur dioxide

Both gases are colourless and both can turn limewater milky:

$$\mathrm{Ca(OH)_2+CO_2\rightarrow CaCO_3\downarrow+H_2O}$$

$$\mathrm{Ca(OH)_2+SO_2\rightarrow CaSO_3\downarrow+H_2O}$$

Only $\mathrm{SO_2}$ rapidly decolourises acidified permanganate and turns acidified dichromate green. Both precipitates may dissolve in excess gas through soluble hydrogen salts, so limewater behaviour alone is not decisive.

### Hydrogen sulphide versus sulphur dioxide

Both are produced from sulphur anions by dilute acid. $\mathrm{H_2S}$ blackens lead acetate paper by PbS; $\mathrm{SO_2}$ does not. $\mathrm{H_2S}$ can reduce sulphur dioxide to sulphur:

$$\mathrm{2H_2S+SO_2\rightarrow3S\downarrow+2H_2O}$$

This reaction explains sulphur deposition when the gases meet.

### Nitric oxide versus nitrogen dioxide

NO is colourless and becomes brown on contact with oxygen. $\mathrm{NO_2}$ is already brown and dimerises on cooling:

$$\mathrm{2NO_2\rightleftharpoons N_2O_4}$$

The forward reaction is exothermic, so cooling lightens the brown colour. Nitrite acidification can produce both NO and $\mathrm{NO_2}$; nitrate with copper and concentrated acid mainly gives $\mathrm{NO_2}$.

### Ammonia versus ammonium chloride fumes

Ammonia is a colourless basic gas. It turns moist red litmus blue. When it meets HCl, solid $\mathrm{NH_4Cl}$ aerosol forms as dense white fumes. The white cloud is not gaseous ammonium chloride molecules at room conditions; it is a fine solid dispersion.

---
`;

export default function SaltAnalysisPart03() {
  return <SaltAnalysisArticle metadata={metadata} content={content} />;
}
