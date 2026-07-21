const content = String.raw`
# Part 3 — Ore Formula Bank, Calcination, Roasting & Sintering

> **Complete-source reconstruction:** theory is preserved at full teaching depth; diagrams are used only where they explain mechanism, apparatus, phase movement or decision logic.


## 10. Ore–Mineral Name Bank from the Source

| Formula | Mineral / ore name | Main metal relevance |
|---|---|---|
| $ZnS$ | Zinc blende / sphalerite | Zn |
| $MnO_2$ | Pyrolusite | Mn |
| $MgCO_3\cdot CaCO_3$ | Dolomite | Mg/Ca |
| $FeCr_2O_4$ (often written $FeO\cdot Cr_2O_3$) | Chromite | Cr |
| $Ca_2B_6O_{11}\cdot 5H_2O$ | Colemanite | B compounds |
| $FeCO_3$ | Siderite | Fe |
| $PbSO_4$ | Anglesite | Pb |
| $PbCO_3$ | Cerussite | Pb |
| $Cu_2S$ | Chalcocite / copper glance | Cu |
| $Cu_2Cl(OH)_3$ | Atacamite | Cu |

> **Formula correction:** chromite is best written $FeCr_2O_4$; the older oxide-component notation $FeO\cdot Cr_2O_3$ expresses the same stoichiometry.

## 11. Quick Selection Map

- **Large density difference?** → gravity separation.
- **One component magnetic?** → magnetic separation.
- **Sulphide mineral with surface-wettability contrast?** → froth flotation.
- **Selective soluble complex/compound available?** → leaching.

This selection logic is more useful than memorising isolated methods because JEE Advanced frequently asks *why a process works* rather than only its name.

## 1. Calcination vs Roasting

![Calcination versus roasting](/notes/metallurgy/reference/calcination-roasting.webp)

| Feature | Calcination | Roasting |
|---|---|---|
| Atmosphere | Absence or limited supply of air | Excess air / oxygen |
| Typical ore | Carbonates, hydrated oxides | Sulphides |
| Main change | Thermal decomposition; removal of $CO_2$, $H_2O$, volatile matter | Oxidation of sulphide to oxide/sulphate; $SO_2$ evolves |
| Temperature | Below fusion/sintering range | Below fusion/sintering range |
| Product | Usually porous oxide | Usually porous oxide |

### Typical calcination reactions
$$MCO_3(s) \xrightarrow{\Delta} MO(s)+CO_2(g)$$

$$Al_2O_3\cdot xH_2O \xrightarrow{\Delta} Al_2O_3+xH_2O(g)$$

### Typical roasting reactions
$$2MS+3O_2\rightarrow2MO+2SO_2$$

For iron sulphides and related ores, the actual products depend on temperature, oxygen supply and composition.

### Removal of impurities
- Sulphur can leave as $SO_2$ under oxidising roasting.
- Arsenic and antimony may form volatile oxides such as $As_2O_3$ and $Sb_2O_3$.
- Organic matter is oxidised to $CO_2$ and $H_2O$.
- Hydrated compounds lose water during calcination.

### Why porosity matters
The next reduction step is a heterogeneous reaction. A porous oxide offers a larger accessible surface and allows reducing gases such as CO to penetrate more effectively.

> **Scientific correction from source page 13:** heating is kept **below the temperature at which serious sintering/partial fusion closes the pores**. Sintering means bonding of particles at contact points; excessive sintering decreases porosity rather than producing it.

---



## Source comparison restored in full
### Calcination
- Heating concentrated ore **in absence or limited supply of air**, generally below fusion temperature.
- Typical for carbonates and hydrated ores.
- Removes $CO_2$, water and some volatile impurities.
- Can volatilise elemental/volatile impurities depending on chemistry.

$$MCO_3\xrightarrow{\Delta}MO+CO_2\uparrow$$
$$Al_2O_3\cdot xH_2O\xrightarrow{\Delta}Al_2O_3+xH_2O\uparrow$$

### Roasting
- Heating in a **controlled/excess supply of air or oxygen** below fusion.
- Common for sulphides.
- Oxidises sulphur to $SO_2$; As/Sb may leave as volatile oxides; organic matter becomes $CO_2+H_2O$.

$$2MS+3O_2\rightarrow2MO+2SO_2$$

### Lower oxide → higher oxide
The source notes that roasting can convert a lower oxide to a higher oxidation state, e.g.
$$4FeO+O_2\rightarrow2Fe_2O_3$$

## Why calcined/roasted mass should be porous
Reduction is a heterogeneous solid–gas/solid–solid process. Porosity increases accessible surface and gas diffusion.

### Sintering warning from the source
![Porosity and sintering architecture](/notes/metallurgy/reference/porosity-sintering.webp)

**Sintering** = partial fusion/neck formation at particle contact points followed by solidification. If overheating causes excessive sintering, particles stick and pores close. Therefore roasting/calcination conditions are chosen to remove volatiles **without destroying porosity**.

`;
export default content;
