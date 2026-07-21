const content = String.raw`
# Part 6 — Extraction of Lead, Copper & Zinc

> **Scope:** Source pages 56–63.

# A. Lead from Galena ($PbS$)

The source presents two broad routes:
- **carbon/smelting route** for less pure or more gangue-rich concentrates,
- **self-reduction route** after partial roasting for high-grade sulphide concentrate.

## 1. Concentration
Galena may be associated with $ZnS$ and siliceous gangue. Froth flotation is used; in classical selective flotation, cyanide depresses $ZnS$ so $PbS$ can be floated selectively.

## 2. Roasting
Important competing reactions include:
$$2PbS+3O_2\rightarrow2PbO+2SO_2$$
$$PbS+2O_2\rightarrow PbSO_4$$

Silica can trap Pb as lead silicate if conditions are unfavourable. Basic additives/flux control slag chemistry.

## 3. Self-reduction reactions
$$2PbO+PbS\rightarrow3Pb+SO_2$$
$$PbSO_4+PbS\rightarrow2Pb+2SO_2$$

The source also shows carbothermic conversion of $PbSO_4$ back toward sulphide/lead-bearing intermediates under reducing conditions; the exact furnace network is complex, so the two equations above are the key JEE reactions.

## 4. Slag formation
Iron oxide/silica or CaO/silica systems remove gangue:
$$FeO+SiO_2\rightarrow FeSiO_3$$
$$CaO+SiO_2\rightarrow CaSiO_3$$

## 5. Refining lead
Classical sequence from the source:
- softening/oxidative treatment removes easily oxidised impurities,
- Parkes process removes Ag using Zn,
- electrorefining for high purity.

---

# B. Copper from Chalcopyrite ($CuFeS_2$)

![Copper extraction flow](/notes/metallurgy/copper-flow.svg)

Chalcopyrite is commonly treated conceptually as a mixed Cu–Fe sulphide system; older notes often represent matte chemistry using $Cu_2S$ and $FeS$ components.

## 1. Concentration — froth flotation
Siliceous gangue is removed and a sulphide concentrate is obtained.

## 2. Partial roasting
Iron sulphide is preferentially oxidised:
$$2FeS+3O_2\rightarrow2FeO+2SO_2$$

Copper sulphide is less readily oxidised under controlled roasting, so much of it remains as $Cu_2S$-type material.

Some copper oxide can form but can be reconverted through sulphide exchange; the source uses:
$$Cu_2O+FeS\rightarrow Cu_2S+FeO$$

This explains why the roasted product contains mainly copper sulphide plus FeO/remaining FeS rather than large amounts of Cu₂O.

## 3. Smelting — formation of matte
Roasted concentrate is heated with silica flux. FeO enters slag:
$$FeO+SiO_2\rightarrow FeSiO_3(l)$$

The molten **matte** contains mainly $Cu_2S$ and remaining $FeS$.

> Carbon here is primarily a fuel; direct carbothermic reduction of sulphides is not the desired extraction step.

## 4. Bessemerisation / converting
Air/oxygen is blown through matte with silica flux.

### Stage 1 — remove FeS
$$2FeS+3O_2\rightarrow2FeO+2SO_2$$
$$FeO+SiO_2\rightarrow FeSiO_3\;(slag)$$

Slag is removed.

### Stage 2 — partial oxidation of copper sulphide
$$2Cu_2S+3O_2\rightarrow2Cu_2O+2SO_2$$

Then air is stopped and **self-reduction** occurs:
$$2Cu_2O+Cu_2S\rightarrow6Cu+SO_2$$

The product is **blister copper**. Dissolved $SO_2$ escaping during cooling produces a blistered surface.

## 5. Refining copper
### Poling
Removes/reduces oxide and oxidisable impurities.

### Electrorefining
Anode: impure Cu  
Cathode: pure Cu starter sheet  
Electrolyte: acidified $CuSO_4$

$$Cu\rightarrow Cu^{2+}+2e^-$$
$$Cu^{2+}+2e^-\rightarrow Cu$$

Noble impurities such as Ag/Au collect in anode mud.

---

# C. Zinc

Important ores:
- **calamine:** $ZnCO_3$,
- **zinc blende / sphalerite:** $ZnS$.

## 1. Calamine route
Calcination:
$$ZnCO_3\xrightarrow{\Delta}ZnO+CO_2$$

## 2. Zinc blende route — concentration and roasting
The source shows selective/double froth flotation when PbS is present, followed by roasting.

$$2ZnS+3O_2\rightarrow2ZnO+2SO_2$$

At lower/particular roasting conditions $ZnSO_4$ may form. High-temperature roasting decomposes sulphate:
$$2ZnSO_4\xrightarrow{\Delta}2ZnO+2SO_2+O_2$$

This is why roasting conditions are selected to obtain ZnO before reduction.

## 3. Smelting / carbothermic reduction
At high furnace temperature:
$$ZnO+C\rightarrow Zn(g)+CO$$

Another equilibrium representation:
$$2ZnO+C\rightleftharpoons2Zn(g)+CO_2$$

The furnace operates well above Zn’s boiling point, so Zn leaves as vapour and is condensed.

### Why excess coke and high temperature help
$CO_2$ can reoxidise Zn under some conditions. Excess hot carbon consumes $CO_2$:
$$C+CO_2\rightarrow2CO$$

The strongly endothermic reaction is favoured at high temperature and helps maintain reducing conditions.

The source correctly warns that the simple gas reduction:
$$ZnO+CO\rightarrow Zn+CO_2$$

is not the preferred thermodynamic route under the relevant high-temperature Ellingham conditions.

## 4. Spelter and distillation
Crude condensed zinc (“spelter”) contains Cd, Pb, Fe and other impurities. Fractional distillation exploits large volatility differences, especially the lower boiling point of Cd and high volatility of Zn relative to Pb/Fe.

## 5. Electrorefining zinc
Acidified $ZnSO_4$ electrolyte is used. Industrial electrode details vary; the source illustrates zinc deposition on a removable sheet.

Cathode:
$$Zn^{2+}+2e^-\rightarrow Zn$$

Anode:
$$Zn\rightarrow Zn^{2+}+2e^-$$

> **Correction to source page 63:** deposited Zn does not simply dissolve in the acidic electrolyte while the cathode is operating, because the imposed cathodic potential drives reduction/deposition. The handwritten $Zn+H_2SO_4\rightarrow ZnSO_4+H_2$ equation is a separate chemical reaction, not the intended cathode process.

---

## 6. Three-Metal Comparison

| Metal | Main ore | Key concentration | Decisive metal-forming step | Characteristic product/refining |
|---|---|---|---|---|
| Pb | $PbS$ galena | Froth flotation | Self-reduction and/or smelting | Parkes desilverisation + electrorefining |
| Cu | $CuFeS_2$ chalcopyrite | Froth flotation | Converter self-reduction $Cu_2O+Cu_2S$ | Blister Cu → poling → electrorefining |
| Zn | $ZnS$, $ZnCO_3$ | Flotation / gravity as appropriate | $ZnO+C$ at high T gives Zn vapour | Distillation / electrorefining |

### JEE unifying insight
All three are “carbon-period” metals in many textbook flowcharts, but **the role of carbon is not identical**:
- Pb can be formed through sulphide/oxide self-reduction.
- Cu sulphide metallurgy avoids direct C reduction and uses matte/converting chemistry.
- ZnO is carbothermically reduced at high temperature and Zn is recovered as vapour.
`;
export default content;
