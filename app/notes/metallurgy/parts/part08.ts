const content = String.raw`
# Part 8 — Silver, Gold, Cyanide Leaching & Parkes Process

> **Complete-source reconstruction:** theory is preserved at full teaching depth; diagrams are used only where they explain mechanism, apparatus, phase movement or decision logic.


The source uses argentite $Ag_2S$.

## 11. Parkes Process — Desilverisation of Lead

Silver-bearing lead is treated with molten Zn.

**Principle:** Ag has much greater affinity/solubility for the Zn-rich phase than for molten Pb.

1. Add Zn to molten argentiferous lead.
2. Ag partitions preferentially into Zn.
3. On cooling, a Zn–Ag-rich crust separates and is removed.
4. Zn is removed/recovered by volatilisation/distillation, leaving Ag-rich residue.
5. Ag is further purified.

The distribution idea can be expressed qualitatively as:
$$K\sim \frac{[Ag]_{Zn\ phase}}{[Ag]_{Pb\ phase}}\gg1$$

---

# 12. Extraction of Gold — Cyanide Route

Low-grade auriferous quartz is crushed and leached with dilute cyanide under aerated conditions. Gold forms dicyanoaurate(I):

$$Au+2CN^-\rightarrow[Au(CN)_2]^-$$

A commonly used overall Elsner-type equation is:
$$4Au+8CN^-+O_2+2H_2O\rightarrow4[Au(CN)_2]^-+4OH^-$$

Zn can precipitate gold:
$$2[Au(CN)_2]^-+Zn\rightarrow2Au+[Zn(CN)_4]^{2-}$$

### Purification sequence represented in the source
The handwritten pages combine several classical operations:
- remove Zn with acid,
- remove Pb by cupellation,
- use borax/borate flux to oxidise and dissolve base-metal impurities such as Cu into slag,
- **parting** to separate Ag from Au using selective acid chemistry,
- final electrorefining to very high purity.

For Cu impurity, a simplified flux logic is:
$$2Cu+O_2\rightarrow2CuO$$
$$CuO+B_2O_3\rightarrow Cu(BO_2)_2$$

The borate enters the slag phase.

> **Source-preservation note:** exact historical reagent sequences vary by process and era. The website keeps the conceptual purification steps without presenting unsafe operating instructions.

![Cyanide process for silver and gold](/notes/metallurgy/cyanide-process.svg)

![Parkes desilverisation](/notes/metallurgy/parkes-process.svg)


## Source-page details restored
### Silver — MacArthur–Forrest cyanide route
Source uses finely powdered argentite $Ag_2S$, dilute cyanide (classroom note ~5% NaCN) and **air/oxygen**.
A standard overall complexation equation is:
$$2Ag_2S+8CN^-+O_2+2H_2O\rightarrow4[Ag(CN)_2]^-+2S+4OH^-$$
Filtration removes insoluble gangue. Zn powder displaces Ag:
$$2[Ag(CN)_2]^-+Zn\rightarrow2Ag+[Zn(CN)_4]^{2-}$$
The source asks whether Cu could be used: thermodynamically displacement is possible in some systems, but Zn is cheaper/more active and is the classical choice.

### Parkes desilverisation of lead
Principle: Ag is much more soluble in liquid Zn than in liquid Pb. Add Zn to molten argentiferous lead; on cooling a Zn–Ag-rich crust separates and floats because of phase/density behaviour. Skim it, then distil Zn (bp ~907–920°C), leaving Ag-rich residue.
The source introduces a **partition/distribution coefficient** idea to express preferential solubility.

### Further Ag purification
- Cupellation removes residual Pb as PbO.
- Electrorefining with impure Ag anode, pure Ag cathode and AgNO$_3$/acidic electrolyte can yield very high purity.

### Gold — cyanide route
The source uses auriferous quartz rock, dilute NaCN (~0.5% in the handwritten classroom scheme) and air/O$_2$.
$$4Au+8CN^-+O_2+2H_2O\rightarrow4[Au(CN)_2]^-+4OH^-$$
Zn precipitates crude Au:
$$2[Au(CN)_2]^-+Zn\rightarrow2Au+[Zn(CN)_4]^{2-}$$

### Purification sequence represented in the source
1. Acid treatment removes Zn and some base metals.
2. Cupellation removes Pb as PbO.
3. Borax treatment converts oxidised Cu impurity to soluble/slag borates.
4. **Parting** with concentrated $H_2SO_4$ dissolves Ag preferentially as $Ag_2SO_4$ while Au remains.
5. Final electrorefining can produce $99.99\%+$ Au.

`;
export default content;
