const content = String.raw`
# Part 13 — Copper — Chalcopyrite to Blister Copper & Electrolytic Cu

> **Complete-source reconstruction:** theory is preserved at full teaching depth; diagrams are used only where they explain mechanism, apparatus, phase movement or decision logic.


![Copper extraction flow](/notes/metallurgy/reference/copper-self-reduction.webp)

Chalcopyrite is commonly treated conceptually as a mixed Cu–Fe sulphide system; older notes often represent matte chemistry using $Cu_2S$ and $FeS$ components.



![Copper electrorefining](/notes/metallurgy/reference/electrorefining.webp)


## Copper source details restored
### Chalcopyrite constitution
Formula is $CuFeS_2$. The handwritten notes describe it with Cu$_2$S/FeS/FeS$_2$ building-block language; do **not** treat chalcopyrite as a simple mechanical mixture. Oxidation-state model is commonly $Cu^+Fe^{3+}(S^{2-})_2$.

### Roasting logic
Iron sulphide oxidises preferentially because Fe has greater oxygen affinity under these conditions:
$$2FeS+3O_2\rightarrow2FeO+2SO_2$$
Much of Cu remains as Cu$_2$S; a little Cu$_2$O may form. Unreacted FeS can reduce Cu$_2$O back toward Cu$_2$S while itself forming FeO, keeping Cu in sulphide matte.

### Smelting
Coke supplies heat; silica flux removes FeO:
$$FeO+SiO_2\rightarrow FeSiO_3\;(slag)$$
Molten **matte** contains mainly Cu$_2$S + FeS.
The source stresses that direct carbon reduction of sulphides is not the desired route; FeO preferentially enters slag.

### Bessemer/converter stage 1 — iron removal
Air + silica:
$$2FeS+3O_2\rightarrow2FeO+2SO_2$$
$$FeO+SiO_2\rightarrow FeSiO_3$$
Slag is poured off when FeS removal is essentially complete (historical flame observations are qualitative indicators).

### Stage 2 — copper self-reduction
Partial oxidation:
$$2Cu_2S+3O_2\rightarrow2Cu_2O+2SO_2$$
Then:
$$2Cu_2O+Cu_2S\rightarrow6Cu+SO_2$$
Escaping SO$_2$ produces cavities/blisters on cooling → **blister copper**, classically ~98–99% Cu.

### Refining
- Poling reduces dissolved Cu oxides.
- Electrorefining in acidified CuSO$_4$ gives ~99.99% Cu; Ag/Au/Pt report to anode mud.

`;
export default content;
