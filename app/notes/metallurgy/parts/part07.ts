const content = String.raw`
# Part 7 — Iron, Steel & Heat Treatment

> **Scope:** Source pages 64–71.

# 1. Iron Ores and Their Preparation

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

## Key furnace reactions

### Combustion near tuyeres
$$C+O_2\rightarrow CO_2$$

### Generation of CO
$$C+CO_2\rightarrow2CO$$

### Indirect reduction — dominant upper/middle-zone logic
$$Fe_2O_3+3CO\rightarrow2Fe+3CO_2$$

Reduction actually proceeds through intermediate oxides ($Fe_3O_4$, FeO) as temperature rises.

### Direct carbon reduction — hotter zones
A simplified form:
$$FeO+C\rightarrow Fe+CO$$

### Flux decomposition
$$CaCO_3\rightarrow CaO+CO_2$$

### Slag
$$CaO+SiO_2\rightarrow CaSiO_3(l)$$

Molten slag, being less dense, floats above molten iron and is tapped separately.

## Furnace zones
The source sketch includes:
- upper preheating/reduction region,
- **bosh** high-temperature reduction zone,
- tuyeres with hot-air blast,
- **hearth** collecting molten pig iron and slag.

Exact temperatures vary continuously; zone values in handwritten notes are approximate teaching ranges.

---

# 3. Why Pig Iron Contains Impurities

At very high temperature, molten iron dissolves carbon and can reduce other oxides in the hearth/bosh region.

Examples from the source:
$$SiO_2+2C\rightarrow Si+2CO$$

$$Mn_3O_4+4C\rightarrow3Mn+4CO$$

Phosphate species can also be reduced under strongly reducing high-temperature conditions, introducing P into iron.

Thus **pig iron** contains appreciable C plus Si, Mn, P, S and other impurities. It is hard/brittle compared with low-carbon wrought iron/steel.

---

# 4. From Pig Iron to Wrought Iron / Steel

The common idea is **oxidative refining**:
- oxidise excess C, Si, Mn, P and other impurities,
- transfer oxides to gas/slag,
- then add controlled alloying elements/carbon to obtain the required steel.

## A. Puddling process — historical
Molten/semimolten iron is stirred in an oxidising furnace. An iron-oxide-rich lining/added oxide oxidises impurities.

Representative reactions:
$$C+Fe_2O_3\rightarrow Fe+CO/CO_2$$
$$Si+O_2\rightarrow SiO_2$$
$$Mn+\frac12O_2\rightarrow MnO$$

Puddling is historically important but obsolete for modern bulk steelmaking.

## B. Bessemer process
Air is blown through molten iron.

Impurities oxidise rapidly:
$$C+O_2\rightarrow CO_2\;(\text{and }CO)$$
$$Si+O_2\rightarrow SiO_2$$
$$Mn+\frac12O_2\rightarrow MnO$$

### Basic Bessemer / Thomas process
For phosphorus-rich iron, a **basic lining** (CaO/MgO/dolomite) permits phosphorus oxide to enter a basic phosphate slag.

A simplified slag product:
$$3CaO+P_2O_5\rightarrow Ca_3(PO_4)_2$$

Thomas slag was historically used as a phosphate fertiliser.

### Acid Bessemer
Silica-rich acidic lining is used only when the impurity chemistry is compatible; it cannot effectively remove high phosphorus because a basic slag is needed.

## C. Open-hearth process — historical
A regenerative furnace oxidises impurities more slowly with better control than early Bessemer practice. It is now largely obsolete.

## D. LD / Basic Oxygen Process
Modern basic oxygen steelmaking blows **high-purity $O_2$**, not air, into molten iron.

Advantages emphasised by the source:
- much faster refining,
- avoids introducing large amounts of atmospheric nitrogen,
- better control of steel quality.

---

# 5. Carbon Content and Steel Classes

Approximate educational ranges (boundaries vary by standard):

| Class | Approx. carbon mass % | General trend |
|---|---:|---|
| Mild / low-carbon steel | ~0.05–0.30% | ductile, weldable |
| Medium-carbon steel | ~0.30–0.60% | higher strength/hardness |
| High-carbon steel | ~0.60–1.0% | hard, wear-resistant |
| Tool/high-carbon speciality steels | often ~0.8–1.5% C plus alloying | cutting/wear applications |

The source’s exact handwritten ranges are retained conceptually but should not be treated as universal specification limits.

---

# 6. Alloy Additions and Deoxidation

The source mentions:
- **spiegeleisen** (historical Fe–Mn–C alloy) to restore Mn/C and assist deoxidation,
- **ferrosilicon** as a Si-bearing deoxidiser/alloy addition,
- **ferrochrome** for Cr addition.

Using ferroalloys rather than pure elements often gives better dissolution, distribution and process control.

---

# 7. Blast-Furnace By-products

## Slag
Calcium-silicate-rich slag is used in construction/cement applications and aggregate/ballast after suitable processing.

## Blast-furnace gas
Contains mainly $N_2$, CO, $CO_2$ and smaller H₂ fractions. It has fuel value because of CO/H₂ and is reused for heating/preheating.

> The source gives one illustrative composition. Actual composition changes with furnace operation; do not memorise a single percentage set as universal.

---

# 8. Heat Treatment of Steel

## Annealing
Steel is heated to a suitable temperature, held, then **slowly cooled**.

Effects depend on composition and cycle, but generally:
- relieves internal stress,
- reduces hardness,
- improves ductility/machinability,
- refines/equilibrates microstructure.

The source associates soft magnetic iron/steel with annealed condition for electromagnet applications.

## Quenching / hardening
Steel is heated into the austenitising range and cooled rapidly in water/oil or another quenchant.

Result:
- high hardness/strength,
- increased brittleness/residual stress if not tempered.

## Tempering
Quenched steel is reheated below the critical transformation range and cooled in a controlled way.

Result:
- reduces brittleness and stress,
- improves toughness,
- adjusts hardness to the application.

> The handwritten “200–300°C” is one tempering range, not the only possible one.

---

# 9. Case Hardening

Goal: **hard wear-resistant surface + tough/ductile core**.

## Carburising
Low-carbon steel is heated in a carbon-rich environment so carbon diffuses into the surface. Subsequent heat treatment produces a hard case.

The source links the hard surface with carbide/cementite ($Fe_3C$) formation; actual hardened microstructure also involves martensite depending on the heat-treatment cycle.

## Cyaniding / related historical salt-bath hardening
The source mentions NaCN and ferrocyanide-type materials as carbon/nitrogen sources. These are historically important but highly toxic; modern notes should state the concept without operational instructions.

## Nitriding
Alloy steel is heated in a nitrogen-supplying atmosphere (classically ammonia) at relatively moderate temperature. Nitrogen diffuses inward and forms very hard alloy nitrides (especially with Al, Cr, Mo, V-containing steels).

Applications: gears, shafts, dies, drilling/wear components.

> **Correction:** nitriding hardness is due to a fine dispersion of alloy nitrides, not simply “the respective nitride” as a single bulk layer.

---

## 10. One-Page Iron Logic

$\text{Iron ore}\rightarrow\text{oxide preparation}\rightarrow\text{blast furnace}\rightarrow\text{pig iron}$

$\text{pig iron}\xrightarrow{\text{oxidative refining}}\text{low-impurity iron/steel melt}\xrightarrow{\text{controlled C + alloying + heat treatment}}\text{engineering steel}$

This sequence links extraction metallurgy with materials science—exactly the connection the source’s final pages are trying to build.
`;
export default content;
