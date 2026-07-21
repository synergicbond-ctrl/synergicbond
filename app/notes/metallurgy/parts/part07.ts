const content = String.raw`
# Part 7 — Ellingham Diagram — Full Thermodynamic Treatment

> **Complete-source reconstruction:** theory is preserved at full teaching depth; diagrams are used only where they explain mechanism, apparatus, phase movement or decision logic.


> **Scope:** Source pages 33–39. Full Ellingham-diagram theory, line slopes, phase changes, reduction criteria, carbon/CO/H₂ logic and limitations are retained and corrected.

# 9. Ellingham Diagram — Thermodynamic Backbone of Metallurgy

![Ellingham diagram principle](/notes/metallurgy/reference/ellingham.webp)

An Ellingham diagram plots approximately:

$$\Delta G^\circ \text{ for oxide formation versus } T$$

For a general oxidation:
$$M+\frac12O_2\rightarrow MO$$

Using:
$$\Delta G^\circ=\Delta H^\circ-T\Delta S^\circ$$

the slope of a line is approximately $-\Delta S^\circ$.

### Why most metal-oxide lines slope upward
Gas-phase $O_2$ is consumed to form condensed oxide, so entropy usually decreases:
$$\Delta S^\circ<0\Rightarrow -\Delta S^\circ>0$$
Hence a positive slope is common.

### Carbon lines
For:
$$C+O_2\rightarrow CO_2$$

the gas mole count changes little, so $\Delta S^\circ$ is relatively small and the line is nearly flat.

For:
$$2C+O_2\rightarrow2CO$$

gas moles increase, so $\Delta S^\circ$ is positive and the line has a **negative slope**.

### Zero-line crossing
Where an oxide-formation line crosses $\Delta G^\circ=0$, oxide formation ceases to be thermodynamically favourable under standard-state assumptions above that temperature; the reverse decomposition becomes favourable in the idealised sense.

The source uses Ag₂O and HgO to illustrate comparatively low thermal stability. Exact decomposition behaviour depends on oxygen pressure and kinetics, so handwritten temperatures should not be treated as universal constants.

### Kinks / slope changes
A sudden slope change commonly reflects a **phase transition** (melting, boiling or allotropy) of a reactant/product, because entropy changes discontinuously.

### Reduction criterion
At a given temperature, a reducing agent can reduce a metal oxide when oxidation of the reducing agent gives a sufficiently more negative $\Delta G^\circ$.

Graphically: the oxidation line of the reducing agent lies **below** the oxide-formation line of the metal being reduced at that temperature.

For aluminothermy:
$$Fe_2O_3+2Al\rightarrow Al_2O_3+2Fe$$

$$\Delta G^\circ_{rxn}=\Delta G^\circ_f(Al_2O_3)-\Delta G^\circ_f(Fe_2O_3)$$

A negative value means thermodynamic feasibility.

> **Critical JEE distinction:** Ellingham predicts **thermodynamic feasibility**, not reaction rate, mechanism, phase separation, reagent cost or industrial profitability.

### Why carbon becomes powerful at high temperature
The downward-sloping CO-formation line crosses many metal-oxide lines as temperature rises. This is why carbon/CO can reduce many oxides at sufficiently high temperature.

The source highlights the approximate $\sim700^\circ C$ region where the relative preference for CO vs $CO_2$ formation changes. Use the diagram qualitatively rather than memorising one universal crossing temperature.

### Hydrogen
Hydrogen can reduce oxides whose formation lines lie above the $H_2/H_2O$ line under the chosen conditions, e.g. oxides such as CuO and PbO are readily reduced. Feasibility varies with temperature and steam/hydrogen partial pressures.

---


![Thermodynamic reduction selection](/notes/metallurgy/reference/reduction-spectrum.webp)


## Ellingham details restored from source pages 33–39
### Definition
An Ellingham diagram plots standard Gibbs free-energy change for formation of oxides (or analogous compounds) against temperature.
$$\Delta G^\circ=\Delta H^\circ-T\Delta S^\circ$$
Slope $=-\Delta S^\circ$.

### Why most metal→oxide lines rise
For
$$M(s)+\frac12O_2(g)\rightarrow MO(s)$$
oxygen gas is consumed, so $\Delta S^\circ<0$ and slope is positive.

### Carbon lines
- $C+O_2\rightarrow CO_2$: gas moles roughly unchanged → slope near zero in idealised treatment.
- $2C+O_2\rightarrow2CO$: gas moles increase → $\Delta S^\circ>0$ → negative slope.

### Zero-line intercept / thermal decomposition
Where an oxide-formation line crosses $\Delta G^\circ=0$, formation ceases to be spontaneous under standard-state assumptions; above that temperature thermal decomposition becomes feasible. Classroom source examples:
- $Ag_2O$ around $300^\circ C$
- $HgO$ around $400^\circ C$ (approximate teaching values; decomposition depends on conditions).

### Kinks and slope changes
A melting/boiling/phase transition changes entropy, so the Ellingham slope changes suddenly. Source examples mark Hg boiling near $356^\circ C$ and Mg boiling near $1091^\circ C$ (older note rounded higher).

### Reduction criterion
At a given $T$, an element/reaction represented by a **lower oxidation line** has greater oxygen affinity and can thermodynamically reduce an oxide whose formation line lies above it, provided kinetics/activities are favourable.

### Source comparison examples
- Al can reduce many oxides such as $Fe_2O_3$ thermodynamically.
- Mg vs Al oxide stability can switch relative interpretation with temperature/phase changes.
- Carbon becomes increasingly useful at high T because the $C\rightarrow CO$ line slopes downward.

### CO vs CO₂ preference in carbothermic reduction
The source uses the intersection of carbon oxidation lines near the Boudouard crossover (often taught around 700–710°C as a simplified guide):
- higher T favours CO formation,
- lower T makes CO$_2$ relatively more important.
This is an equilibrium trend, not a universal sharp switch for every furnace.

### Hydrogen
Only oxides whose formation line lies above the $H_2/H_2O$ line are reducible by H$_2$ at that temperature. Examples often include CuO/PbO and some Zn/Fe oxides depending on T and gas ratio.

## Limitations of Ellingham diagrams
1. They are thermodynamic, not kinetic: a feasible reaction may be slow.
2. Standard-state lines do not automatically include real activities, partial pressures, slag chemistry or mass transfer.
3. They do not choose the most economical industrial process.
4. Carbides/intermetallics/volatile products may alter the actual route.
5. Phase changes and non-standard gas ratios shift practical conditions.

`;
export default content;
