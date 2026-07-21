const content = String.raw`
# Part 10 — Extraction of Magnesium — Carnallite, Seawater & Electrolysis

> **Complete-source reconstruction:** theory is preserved at full teaching depth; diagrams are used only where they explain mechanism, apparatus, phase movement or decision logic.


The source organises Mg extraction in three major steps:
1. preparation of hydrated $MgCl_2\cdot6H_2O$,
2. conversion to **anhydrous $MgCl_2$** without hydrolysis,
3. fused-salt electrolysis.


![Fused magnesium chloride electrolysis](/notes/metallurgy/reference/molten-electrolysis.webp)


## Magnesium route — source details restored
### A. From carnallite
Carnallite $KCl\cdot MgCl_2\cdot6H_2O$ is dissolved and fractionally crystallised: KCl crystallises preferentially under suitable conditions, leaving MgCl$_2$-rich liquor; concentration/crystallisation gives purified $MgCl_2\cdot6H_2O$.

### B. Dow seawater concept
Lime precipitates Mg(OH)$_2$:
$$Mg^{2+}+Ca(OH)_2\rightarrow Mg(OH)_2\downarrow+Ca^{2+}$$
Then:
$$Mg(OH)_2+2HCl\rightarrow MgCl_2+2H_2O$$
The source’s “65 ppm MgCl$_2$” value is not a reliable seawater composition figure; seawater contains much more dissolved Mg$^{2+}$ (order of g L$^{-1}$), so that handwritten number should not be memorised.

### Why simple dehydration fails
Direct heating of hydrated MgCl$_2$ causes hydrolysis:
$$MgCl_2+H_2O\rightleftharpoons MgOHCl+HCl$$
with further formation of MgO. Therefore dehydration is done in dry HCl/HCl-containing atmosphere or by alternative chlorination routes.

### Alternative chlorination idea
$$MgO+C+Cl_2\rightarrow MgCl_2+CO\;(or\ CO_2)$$
Analogous high-temperature chlorination routes exist for other refractory oxides; conditions/products depend on thermodynamics.

### Electrolysis of anhydrous MgCl₂
Source cell uses a molten mixture approximated as MgCl$_2$:NaCl = 4:1 in the classroom sketch.
Cathode:
$$Mg^{2+}+2e^-\rightarrow Mg(l)$$
Anode:
$$2Cl^-\rightarrow Cl_2+2e^-$$

Source design points:
- Mg metal is less dense than the melt and floats.
- NaCl lowers melting point and improves conductivity.
- An inert/reducing cover gas is used to limit oxidation/burning of hot Mg.
- The source mentions coal gas historically; modern practice uses controlled protective atmospheres.

`;
export default content;
