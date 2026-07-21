const content = String.raw`
# Part 2 — Thermal Treatment, Reduction & Early Refining

> **Scope:** Source pages 11–23. The source comparisons, equations, sketches and questions are preserved in corrected form.

## 1. Calcination vs Roasting

![Calcination versus roasting](/notes/metallurgy/calcination-roasting.svg)

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

## 2. Coal, Coke and Carbon Monoxide

Coal contains carbon plus volatile matter and mineral impurities. Heating suitable coking coal in the absence of air gives **coke** and volatile products (coal gas/tar).

Coke in a furnace may serve two distinct roles:
1. **Fuel** — supplies heat.
2. **Reducing-agent source** — generates CO.

Key reactions:

$$C+O_2\rightarrow CO_2 \qquad \text{(strongly exothermic)}$$

$$C+CO_2\rightleftharpoons2CO \qquad \text{(endothermic; Boudouard reaction)}$$

In many blast-furnace zones, **CO is the chief direct reducing gas**, even though coke is the ultimate carbon source.

---

## 3. Carbon Reduction / Smelting

**Smelting** is high-temperature extraction in which a charge containing ore/oxide, reducing agent and flux is heated so that metal and slag phases can separate.

General forms:

$$MO+C\rightarrow M+CO$$
$$MO+CO\rightarrow M+CO_2$$

The source lists Fe, Sn, Pb and Zn as important textbook examples of carbon-based reduction. The exact mechanism differs strongly among these metals; Zn is obtained as vapour at furnace temperature.

### Flux and slag
A **flux** reacts with gangue to form a fusible **slag**.

$$\text{Gangue}+\text{Flux}\rightarrow\text{Slag}$$

Choice rule:
- acidic gangue (e.g. $SiO_2$) → basic flux (e.g. $CaO$),
- basic gangue (metal oxides) → acidic flux (e.g. $SiO_2$).

Classic reaction:

$$CaO+SiO_2\rightarrow CaSiO_3(l)$$

### Lux–Flood acid–base idea
At high temperature:
- **Lux–Flood acid:** oxide-ion acceptor.
- **Lux–Flood base:** oxide-ion donor.

This is useful for interpreting slag chemistry beyond aqueous Brønsted acid–base ideas.

### Desirable slag properties
A good slag generally:
- melts at a workable temperature,
- is less dense than molten metal and forms a separate layer,
- dissolves/retains gangue and unwanted oxides,
- protects molten metal from excessive reoxidation.

---

## 4. Self-Reduction / Auto-Reduction

Some sulphide ores can supply their own reducing species after **partial oxidation**. No external carbon reducing agent is required in the decisive metal-forming step.

### Lead example
Partial roasting:
$$2PbS+3O_2\rightarrow2PbO+2SO_2$$

Self-reduction:
$$2PbO+PbS\rightarrow3Pb+SO_2$$

A parallel route can involve sulphate:
$$PbS+2O_2\rightarrow PbSO_4$$
$$PbS+PbSO_4\rightarrow2Pb+2SO_2$$

**Oxidation-state insight:** sulphide sulphur is oxidised toward $SO_2$, and $Pb^{2+}$ is reduced to $Pb^0$.

> The handwritten multiple-choice prompt asks for the “true reducing agent” in the self-reduction reaction. At the redox-species level, **sulphide sulphur ($S^{2-}$ in $PbS$)** is the species that is oxidised and therefore acts as the reducing component.

---

## 5. Thermite / Aluminothermic Reduction

![Thermite reaction concept](/notes/metallurgy/thermite.svg)

Aluminium has a very high affinity for oxygen and can reduce certain refractory metal oxides.

Examples:

$$Cr_2O_3+2Al\rightarrow2Cr+Al_2O_3$$

$$3Mn_3O_4+8Al\rightarrow9Mn+4Al_2O_3$$

A common thermite welding reaction is:

$$Fe_2O_3+2Al\rightarrow2Fe+Al_2O_3+\text{large heat}$$

### Why no external fuel is needed after ignition
Formation of $Al_2O_3$ is extremely favourable and strongly exothermic. The reaction mixture reaches a temperature high enough to produce molten iron in welding applications.

### Why not use thermite for bulk iron manufacture?
Aluminium is far more expensive than coke/CO for producing the enormous quantities of iron required commercially.

### Ignition concept retained from source
Thermite requires an ignition system because ordinary heating is insufficient to start it conveniently. Classical demonstrations use a highly exothermic ignition mixture; exact formulations vary and should not be treated as a preparation instruction.

---

## 6. Reduction by Thermal Decomposition

Some less stable metal compounds decompose directly on heating.

Examples used in the source:

$$2Ag_2O\xrightarrow{\Delta}4Ag+O_2$$

$$2HgO\xrightarrow{\Delta}2Hg+O_2$$

Mercury extraction can involve roasting cinnabar followed by decomposition/reduction of mercury oxide:

$$2HgS+3O_2\rightarrow2HgO+2SO_2$$
$$2HgO\rightarrow2Hg+O_2$$

These are examples of **pyrometallurgical** operations because strong heating is central.

---

## 7. Hydrometallurgical Reduction

Hydrometallurgy carries out extraction reactions in aqueous solution. Temperatures are therefore much lower than in pyrometallurgy.

### Cementation / displacement from complexes
For cyanide complexes of Ag/Au, Zn can reduce the noble-metal complex and itself enter solution as a cyanide complex. A representative Ag equation is:

$$2[Ag(CN)_2]^-+Zn\rightarrow2Ag+[Zn(CN)_4]^{2-}$$

Why Zn is preferred over Cu in the textbook logic:
- Zn is sufficiently reducing,
- inexpensive,
- gives fast displacement under suitable conditions.

### Low-grade copper ore concept
A leach solution containing $Cu^{2+}$ can be treated with iron scrap:

$$Fe+Cu^{2+}\rightarrow Fe^{2+}+Cu$$

For sulphate solution:
$$Fe+CuSO_4\rightarrow FeSO_4+Cu$$

---

## 8. Electrometallurgical Reduction

Very electropositive metals such as Na, K, Mg, Ca and Al cannot normally be obtained by ordinary carbon reduction of their stable compounds under convenient commercial conditions. They are produced by **electrolysis of molten salts/oxides**.

### Downs cell — sodium
Molten NaCl contains $Na^+$ and $Cl^-$.

Cathode:
$$Na^++e^-\rightarrow Na$$

Anode:
$$2Cl^-\rightarrow Cl_2+2e^-$$

A CaCl₂-containing molten mixture is used industrially to lower the operating temperature of the electrolyte and improve practical conductivity/flow properties.

> **Eutectic idea:** mixing salts can produce a composition whose melting point is lower than that of either pure component.

---

## 9. Refining — Why Extraction Is Not the End

Crude metal can still contain:
- other metals,
- non-metals (C, S, As, Sb, etc.),
- dissolved gases,
- entrained slag or oxide.

The source divides refining broadly into thermal methods and electrorefining. Actual achievable impurity levels depend on the specific metal/process; treat the handwritten “1%” and “0.01%” figures as illustrative, not universal limits.

## 10. Poling

Poling is a classical refining method used especially for metals such as **Cu and Sn**.

### Stage 1 — selective oxidation
Air is blown through molten impure metal. Impurities with higher oxygen affinity are oxidised preferentially. Non-metallic impurities may form volatile oxides; some target metal also becomes oxidised and forms scum.

### Stage 2 — reduction with green wood / reducing gases
Air is stopped and green wooden poles are introduced/stirred through the melt. Pyrolysis and partial combustion generate reducing gases (CO and hydrocarbons), which reduce some target-metal oxide back to metal.

The result is a balance between:
- oxidation/removal of impurity,
- recovery of metal accidentally oxidised during blowing.
`;
export default content;
