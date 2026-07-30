import { SaltAnalysisArticle } from "../SaltAnalysisArticle";

export const metadata = {
  part: 9,
  title: "Group I: Silver, Lead and Mercury(I)",
  chapter: "Salt Analysis",
  exam: "JEE Advanced",
};

const content = String.raw`
## 24. Group I — Silver, Lead(II), Mercury(I)

### 24.1 Group precipitation

$$\mathrm{Ag^++Cl^-\rightarrow AgCl\downarrow}\quad\text{white}$$

$$\mathrm{Pb^{2+}+2Cl^-\rightarrow PbCl_2\downarrow}\quad\text{white}$$

$$\mathrm{Hg_2^{2+}+2Cl^-\rightarrow Hg_2Cl_2\downarrow}\quad\text{white}$$

Use **dilute**, not concentrated, HCl. Excess chloride can form soluble chloro-complexes of some ions.

### 24.2 Separation with hot water

$\mathrm{PbCl_2}$ is appreciably soluble in hot water, whereas $\mathrm{AgCl}$ and $\mathrm{Hg_2Cl_2}$ are not.

Hot-water extract: test for lead.

#### Lead confirmations

$$\mathrm{Pb^{2+}+CrO_4^{2-}\rightarrow PbCrO_4\downarrow}\quad\text{yellow}$$

$$\mathrm{Pb^{2+}+2I^-\rightarrow PbI_2\downarrow}\quad\text{yellow}$$

$\mathrm{PbI_2}$ dissolves in hot water and crystallises as golden spangles on cooling.

### 24.3 Separation of silver and mercury(I) with ammonia

Silver chloride dissolves:

$$\mathrm{AgCl+2NH_3\rightarrow[Ag(NH_3)_2]^++Cl^-}$$

Mercury(I) chloride gives a black mixture:

$$\mathrm{Hg_2Cl_2+2NH_3\rightarrow Hg\downarrow+HgNH_2Cl\downarrow+NH_4Cl}$$

The blackening confirms $\mathrm{Hg_2^{2+}}$.

Acidify the silver-containing filtrate:

$$\mathrm{[Ag(NH_3)_2]^+ +Cl^-+2H^+\rightarrow AgCl\downarrow+2NH_4^+}$$

[VISUAL:group-i-separation]

### 24.4 Why Pb appears again in Group II

$\mathrm{PbCl_2}$ is not completely precipitated in dilute HCl because its solubility is not negligible. Residual $\mathrm{Pb^{2+}}$ later forms extremely insoluble PbS in Group II.

---

## 49. Group I Separation as an Equilibrium Problem

The three Group I chlorides are separated by three unrelated properties:

1. temperature-dependent solubility of $\mathrm{PbCl_2}$;
2. complex formation of $\mathrm{Ag^+}$ with ammonia;
3. redox/disproportionation-like reaction of $\mathrm{Hg_2^{2+}}$ with ammonia.

Hot water extracts lead because dissolution of $\mathrm{PbCl_2}$ is strongly favoured on heating. The extract must be tested while hot or kept from cooling prematurely. Golden $\mathrm{PbI_2}$ crystals on cooling are striking but a second lead test, such as $\mathrm{PbCrO_4}$, strengthens the conclusion.

Ammonia removes silver from the residue as soluble diamminesilver(I). Acidification converts ligand $\mathrm{NH_3}$ into $\mathrm{NH_4^+}$, lowering free ammonia and breaking the complex. AgCl returns.

Mercury(I) contains the dimeric ion $\mathrm{Hg_2^{2+}}$ with an Hg–Hg bond. Ammonia produces finely divided metallic Hg and white $\mathrm{HgNH_2Cl}$; their mixture appears black. Writing only “black mercury salt” misses the chemistry.

Adding too much concentrated HCl during group precipitation can lower the free metal-ion concentration through chloro complexes. Conversely, too little chloride leaves precipitation incomplete. The analytical instruction “add dilute HCl dropwise until complete precipitation” encodes both constraints.

---
`;

export default function SaltAnalysisPart09() {
  return <SaltAnalysisArticle metadata={metadata} content={content} />;
}
