const content = String.raw`
# Part 4 — Carbon/CO Reduction, Flux–Slag, Self-Reduction & Thermite

> **Complete-source reconstruction:** theory is preserved at full teaching depth; diagrams are used only where they explain mechanism, apparatus, phase movement or decision logic.


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

![Flux, gangue and slag](/notes/metallurgy/slag-lux-flood.svg)

![Thermite reaction](/notes/metallurgy/thermite.svg)

![Reduction method decision map](/notes/metallurgy/reduction-method-map.svg)


## Carbon reduction — source-specific points
The source lists Fe, Sn, Pb and Zn among metals whose extraction may involve carbon/CO at appropriate temperatures.

### Coke has two functions
1. **Fuel:** $C+O_2\rightarrow CO_2$ (strongly exothermic).
2. **Reducing atmosphere / CO source:** $C+CO_2\rightleftharpoons2CO$ (endothermic).

### Flux selection and Lux–Flood concept
$$\text{Gangue}+\text{Flux}\rightarrow\text{Slag}$$
- Acidic gangue such as $SiO_2$ requires basic flux such as $CaO$.
- Basic oxide gangue can require acidic flux.
- In Lux–Flood language: oxide-ion acceptor = acid; oxide-ion donor = base.

Example:
$$CaO+SiO_2\rightarrow CaSiO_3(l)$$

### Desired slag properties in the source
- fluid at furnace temperature,
- less dense than metal so phases separate,
- chemically able to dissolve targeted gangue,
- can shield molten metal from reoxidation.

## Self-reduction — lead model with parallel reactions
Primary textbook sequence:
$$2PbS+3O_2\rightarrow2PbO+2SO_2$$
$$2PbO+PbS\rightarrow3Pb+SO_2$$
The **true reductant** in the second equation is sulphide sulphur, which is oxidised from $-2$ to $+4$.

A parallel sulphate route may occur during roasting:
$$PbS+2O_2\rightarrow PbSO_4$$
$$PbS+PbSO_4\rightarrow2Pb+2SO_2$$

## Thermite / aluminothermy — retained examples
Representative reductions:
$$Cr_2O_3+2Al\rightarrow2Cr+Al_2O_3$$
$$3Mn_3O_4+8Al\rightarrow9Mn+4Al_2O_3$$
$$Fe_2O_3+2Al\rightarrow2Fe+Al_2O_3$$
The source also lists Ti oxide in the conceptual class, but modern Ti is not commercially produced by simple thermite reduction of $TiO_2$.

### Why Al works
The formation of $Al_2O_3$ is highly exergonic. Once ignited, thermite is strongly self-heating; temperatures can exceed the melting point of the produced metal.

### Ignition mixture shown in the source
A local high-temperature igniter (historically mixtures involving Mg and oxygen-releasing salts/oxides) initiates the thermite charge. This is an **ignition device**, not the main reducing reagent.

## Thermal decomposition
Very unreactive-metal oxides can decompose on heating:
$$2Ag_2O\xrightarrow{\Delta}4Ag+O_2$$
$$2HgO\xrightarrow{\Delta}2Hg+O_2$$

`;
export default content;
