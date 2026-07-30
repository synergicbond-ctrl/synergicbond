import { SaltAnalysisArticle } from "../SaltAnalysisArticle";

export const metadata = {
  part: 11,
  title: "Group III: Iron, Aluminium and Chromium",
  chapter: "Salt Analysis",
  exam: "JEE Advanced",
};

const content = String.raw`
## 26. Group III — Iron(III), Aluminium, Chromium(III)

Add $\mathrm{NH_4Cl}$, then $\mathrm{NH_4OH}$.

$$\mathrm{Fe^{3+}+3OH^-\rightarrow Fe(OH)_3\downarrow}\quad\text{reddish brown}$$

$$\mathrm{Al^{3+}+3OH^-\rightarrow Al(OH)_3\downarrow}\quad\text{white gelatinous}$$

$$\mathrm{Cr^{3+}+3OH^-\rightarrow Cr(OH)_3\downarrow}\quad\text{grey-green}$$

### 26.1 Function of ammonium chloride

$$\mathrm{NH_4OH\rightleftharpoons NH_4^+ +OH^-}$$

$\mathrm{NH_4Cl}$ supplies the common ion $\mathrm{NH_4^+}$ and suppresses $[\mathrm{OH^-}]$. The remaining concentration is sufficient to precipitate the very insoluble trivalent hydroxides, but not most divalent hydroxides of later groups or $\mathrm{Mg(OH)_2}$.

Without $\mathrm{NH_4Cl}$, Group IV and magnesium hydroxides may contaminate Group III.

[FIGURE:common-ion-balance]

### 26.2 Separation using amphoterism

Add excess NaOH:

$$\mathrm{Al(OH)_3+OH^-\rightarrow[Al(OH)_4]^-}$$

$$\mathrm{Cr(OH)_3+3OH^-\rightarrow[Cr(OH)_6]^{3-}}$$

$\mathrm{Fe(OH)_3}$ remains insoluble.

Oxidise alkaline chromium(III), commonly with $\mathrm{H_2O_2}$:

$$\mathrm{2Cr(OH)_3+3H_2O_2+4OH^-\rightarrow2CrO_4^{2-}+8H_2O}$$

Yellow chromate forms.

[VISUAL:group-iii-separation]

### 26.3 Iron confirmations

With thiocyanate:

$$\mathrm{Fe^{3+}+SCN^-\rightleftharpoons[FeSCN]^{2+}}$$

blood-red colour.

With ferrocyanide:

$$\mathrm{4Fe^{3+}+3[Fe(CN)_6]^{4-}\rightarrow Fe_4[Fe(CN)_6]_3\downarrow}$$

Prussian blue.

Ferrous ion with ferricyanide gives Turnbull's blue:

$$\mathrm{3Fe^{2+}+2[Fe(CN)_6]^{3-}\rightarrow Fe_3[Fe(CN)_6]_2\downarrow}$$

### 26.4 Aluminium confirmations

Acidify aluminate and then add ammonia carefully to reprecipitate white gelatinous $\mathrm{Al(OH)_3}$:

$$\mathrm{[Al(OH)_4]^-+H^+\rightarrow Al(OH)_3\downarrow+H_2O}$$

Aluminon gives a red lake with aluminium hydroxide. Cobalt nitrate on ignition gives blue cobalt aluminate.

### 26.5 Chromium confirmations

Yellow chromate gives:

$$\mathrm{Pb^{2+}+CrO_4^{2-}\rightarrow PbCrO_4\downarrow}$$

Acidified chromate/dichromate with $\mathrm{H_2O_2}$ can form blue $\mathrm{CrO_5}$, extractable into ether:

$$\mathrm{Cr_2O_7^{2-}+4H_2O_2+2H^+\rightarrow2CrO_5+5H_2O}$$

The blue species is unstable.

---

## 51. Iron, Aluminium and Chromium: Complete Separation Logic

After Group III hydroxides precipitate, excess NaOH dissolves aluminium and chromium hydroxides but leaves iron(III) hydroxide. The insoluble fraction is acidified and tested for $\mathrm{Fe^{3+}}$.

The alkaline filtrate contains aluminate and a chromium(III) hydroxo complex. Hydrogen peroxide oxidises chromium(III) to chromate but does not oxidise aluminium:

$$\mathrm{2Cr(OH)_3+3H_2O_2+4OH^-\rightarrow2CrO_4^{2-}+8H_2O}$$

The yellow solution signals chromate. Acidifying converts part of it to orange dichromate; lead or barium ion can precipitate a chromate under controlled conditions.

Aluminium is recovered by carefully lowering pH. Strong acid keeps aluminium as $\mathrm{Al^{3+}}$; controlled acidification of aluminate gives $\mathrm{Al(OH)_3}$. Excess acid redissolves it:

$$\mathrm{[Al(OH)_4]^-+4H^+\rightarrow Al^{3+}+4H_2O}$$

This gives a useful pH window rather than a simple “add acid” instruction.

Iron oxidation state should be established on a fresh portion if both $\mathrm{Fe^{2+}}$ and $\mathrm{Fe^{3+}}$ are possible. Oxidising original-solution preparation destroys that information. Thiocyanate confirms ferric ion; ferricyanide and ferrocyanide tests must be matched carefully to the iron oxidation state.

---
`;

export default function SaltAnalysisPart11() {
  return <SaltAnalysisArticle metadata={metadata} content={content} />;
}
