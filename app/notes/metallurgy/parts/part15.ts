const content = String.raw`
# Part 15 — Iron — Ore Preparation, Blast Furnace, Bosh & Hearth Chemistry

> **Complete-source reconstruction:** theory is preserved at full teaching depth; diagrams are used only where they explain mechanism, apparatus, phase movement or decision logic.


Major iron-bearing minerals represented in the source:

| Ore/mineral | Formula / approximate representation | Comment |
|---|---|---|
| Hematite | $Fe_2O_3$ | Major high-grade iron ore |
| Magnetite | $Fe_3O_4$ | Magnetic ore |
| Limonite / hydrated iron oxide | variable, often written $Fe_2O_3\cdot xH_2O$ | Hydrated mixture, not one fixed compound |
| Siderite | $FeCO_3$ | Carbonate ore |

After concentration, calcination/roasting converts the charge largely toward oxide suitable for blast-furnace reduction.

Examples:
$$FeCO_3\xrightarrow{\Delta}FeO+CO_2$$
$$4FeO+O_2\rightarrow2Fe_2O_3$$

Hydrated oxide loses water on heating.

The source’s preference for avoiding large FeO content reflects slag chemistry:
$$FeO+SiO_2\rightarrow FeSiO_3$$

which can carry iron into slag.

---

# 2. Blast Furnace — Extraction of Iron

![Blast furnace zones](/notes/metallurgy/blast-furnace.svg)

A classical charge contains:
- iron oxide/sinter/pellets,
- coke,
- limestone/dolomite flux.

The handwritten “8 : 4 : 1 by mass” charge ratio is a classroom simplification, not a universal industrial recipe.

# 3. Why Pig Iron Contains Impurities

At very high temperature, molten iron dissolves carbon and can reduce other oxides in the hearth/bosh region.

Examples from the source:
$$SiO_2+2C\rightarrow Si+2CO$$

$$Mn_3O_4+4C\rightarrow3Mn+4CO$$

Phosphate species can also be reduced under strongly reducing high-temperature conditions, introducing P into iron.

Thus **pig iron** contains appreciable C plus Si, Mn, P, S and other impurities. It is hard/brittle compared with low-carbon wrought iron/steel.

---

![Blast furnace zones](/notes/metallurgy/blast-furnace.svg)


## Source-specific blast-furnace details restored
### Ore preparation
Source classroom composition list:
- hematite $Fe_2O_3$ — major high-grade ore,
- magnetite $Fe_3O_4$,
- limonite/hydrated oxide $Fe_2O_3\cdot xH_2O$,
- siderite $FeCO_3$.
The handwritten percentages are illustrative, not universal ore grades.

Roasting/calcination aims to obtain an oxide charge rich in $Fe_2O_3$ and avoid excessive FeO loss to silicate slag:
$$FeO+SiO_2\rightarrow FeSiO_3$$

### Classroom charge ratio
The source gives roughly **roasted ore : coke : limestone = 8 : 4 : 1 by mass** as a teaching ratio, not a universal industrial recipe.

### Furnace zones and reactions
**Tuyere/combustion region (~1500°C-class):**
$$C+O_2\rightarrow CO_2$$
$$CO_2+C\rightarrow2CO$$

**Upper/middle reduction:**
$Fe_2O_3\rightarrow Fe_3O_4\rightarrow FeO\rightarrow Fe$ mainly by CO.
Overall:
$$Fe_2O_3+3CO\rightarrow2Fe+3CO_2$$

**Flux/slag:**
$$CaCO_3\rightarrow CaO+CO_2$$
$$CaO+SiO_2\rightarrow CaSiO_3$$

### Bosh and hearth impurity pickup
At high temperature carbon dissolves in molten Fe. Once in the hearth, dissolved carbon can reduce other oxides:
$$SiO_2+2C\rightarrow Si+2CO$$
$$Mn_3O_4+4C\rightarrow3Mn+4CO$$
Phosphates can be reduced under strongly reducing conditions, adding P. Pig iron therefore contains C, Si, Mn, P, S and other impurities.

`;
export default content;
