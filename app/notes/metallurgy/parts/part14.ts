const content = String.raw`
# Part 14 — Zinc — Calamine/Sphalerite, Roasting, Vaporisation & Refining

> **Complete-source reconstruction:** theory is preserved at full teaching depth; diagrams are used only where they explain mechanism, apparatus, phase movement or decision logic.


> **Scope:** Source pages 61–63.

# C. Zinc

Important ores:
- **calamine:** $ZnCO_3$,
- **zinc blende / sphalerite:** $ZnS$.

## 2. Zinc blende route — concentration and roasting
The source shows selective/double froth flotation when PbS is present, followed by roasting.

$$2ZnS+3O_2\rightarrow2ZnO+2SO_2$$

At lower/particular roasting conditions $ZnSO_4$ may form. High-temperature roasting decomposes sulphate:
$$2ZnSO_4\xrightarrow{\Delta}2ZnO+2SO_2+O_2$$

This is why roasting conditions are selected to obtain ZnO before reduction.

## 5. Electrorefining zinc
Acidified $ZnSO_4$ electrolyte is used. Industrial electrode details vary; the source illustrates zinc deposition on a removable sheet.

Cathode:
$$Zn^{2+}+2e^-\rightarrow Zn$$

Anode:
$$Zn\rightarrow Zn^{2+}+2e^-$$

> **Correction to source page 63:** deposited Zn does not simply dissolve in the acidic electrolyte while the cathode is operating, because the imposed cathodic potential drives reduction/deposition. The handwritten $Zn+H_2SO_4\rightarrow ZnSO_4+H_2$ equation is a separate chemical reaction, not the intended cathode process.

---

![Zinc extraction flow](/notes/metallurgy/reference/carbon-reduction.webp)


## Zinc details restored from pages 61–63
### Calamine route
$$ZnCO_3\xrightarrow{\Delta}ZnO+CO_2$$

### Zinc blende / sphalerite route
Ore $ZnS$ often contains PbS and siliceous gangue. The source describes **double/selective flotation** because PbS and ZnS have different flotation behaviour; depressant/activator control is used to obtain ZnS concentrate.

### Roasting condition
$$2ZnS+3O_2\rightarrow2ZnO+2SO_2$$
At unsuitable lower conditions ZnSO$_4$ can form. Heating above roughly 800–900°C in the classroom scheme decomposes sulphate:
$$2ZnSO_4\rightarrow2ZnO+2SO_2+O_2$$

### High-temperature smelting
Source operating range is approximately $1300–1400^\circ C$.
$$ZnO+C\rightarrow Zn(g)+CO$$
Zn boils near 907°C, so zinc leaves as vapour with volatile impurities such as Cd and is condensed.

### Why excess coke helps
$$C+CO_2\rightarrow2CO$$
consumes CO$_2$ that could reoxidise Zn and maintains strongly reducing conditions. At these high temperatures the source correctly rejects simple $ZnO+CO\rightarrow Zn+CO_2$ as the preferred overall route under its Ellingham interpretation.

### Spelter and refining sequence
Crude/spelter Zn contains Cd, Fe, Pb etc.
- At ~800°C, more volatile Cd can be preferentially removed.
- Around/above Zn boiling point, Zn is distilled away from high-boiling Fe/Pb and condensed.
- Electrolytic refining/electrowinning can give $99.99\%$ Zn.
The handwritten cathode note mentions Al sheet as a practical substrate because deposited Zn can be stripped; modern electrolytic zinc commonly uses Al cathode sheets.

`;
export default content;
