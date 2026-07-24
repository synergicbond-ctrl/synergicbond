const content = String.raw`
# Part 1 — Foundations, Ores, Gangue & Physical Concentration

> **Complete-source reconstruction:** theory is preserved at full teaching depth; diagrams are used only where they explain mechanism, apparatus, phase movement or decision logic.

> **Scope:** Source pages 1–4. Every academically useful point is retained, with OCR errors and scientifically inaccurate wording corrected.

## 1. Mineral, Ore, Gangue and Metallurgy

### Mineral
A **mineral** is a naturally occurring substance with a characteristic composition and physical properties. In metallurgy, metallic elements commonly occur in the Earth’s crust as minerals containing oxides, sulphides, carbonates, halides, silicates or other compounds.

### Ore
An **ore** is a naturally occurring mineral deposit from which a metal can be extracted **economically and conveniently** with available technology.

**Key distinction:** every ore contains one or more minerals, but every mineral is not an ore.

**Source example — iron pyrites:** $FeS_2$ (pyrite, “fool’s gold”) contains iron, but it is not normally used as a principal commercial iron ore because its high sulphur content complicates processing and sulphur contamination makes iron brittle. A simplified oxidation route is:

$$4FeS_2 + 11O_2 \rightarrow 2Fe_2O_3 + 8SO_2$$

The oxide can in principle be reduced, but removing sulphur to the required degree is an unnecessary burden compared with hematite/magnetite ores.

**Copper example:** chalcopyrite $CuFeS_2$ is a major copper ore even though it contains iron and sulphur, because copper can be economically concentrated and extracted from it.

### Gangue / Matrix
The unwanted earthy, rocky or mineral impurities associated with an ore are called **gangue** or **matrix**. Common gangue materials include silica, silicates, clay, limestone and unwanted sulphides/oxides.

## 2. The General Metallurgical Route

![General metallurgy flowchart](/notes/metallurgy/reference/universal-framework.webp)

A useful master sequence is:

1. **Crushing and grinding** — liberate ore particles from gangue.
2. **Concentration / beneficiation / ore dressing** — remove as much gangue as practical.
3. **Conversion to a suitable compound** — often oxide formation by calcination or roasting.
4. **Reduction / metal winning** — convert the compound to the elemental metal.
5. **Refining** — remove residual impurities to obtain the required purity.

Different ores may skip, combine or reorder these steps. For example, noble metals may be leached directly, while very electropositive metals require electrolysis of molten salts.

---

## 3. Concentration of Ores — Choosing the Method
![Four pillars of ore beneficiation](/notes/metallurgy/reference/concentration-spectrum.webp)

The method depends on a **physical or chemical difference** between the valuable mineral and the gangue.

| Method | Property exploited | Typical use |
|---|---|---|
| Gravity separation / hydraulic washing | Density difference | Dense mineral with lighter gangue |
| Magnetic separation | Difference in magnetic behaviour | One component magnetic, the other non-magnetic |
| Froth flotation | Difference in surface wettability | Mainly sulphide ores |
| Leaching | Selective chemical solubility | Bauxite, Au/Ag cyanide processes and other selective systems |

## 4. Gravity Separation / Hydraulic Washing / Levigation

### Principle
**Gravity separation** concentrates an ore by exploiting the difference in **density (specific gravity)** between the valuable mineral and gangue. In a moving stream of water, lighter particles are carried away more readily, whereas denser mineral grains settle or remain behind.

> **Core idea:** **denser ore particles → retained / settled; lighter gangue → washed away.**

![Action of flowing water in gravity separation](/notes/metallurgy/reference/gravity-separation/flowing-water-action-dark.webp)

The method is mainly associated in elementary metallurgy with certain **oxide ores**, but oxide character itself is not the deciding principle. The essential requirement is a sufficiently useful difference in **density and settling behaviour** between the valuable mineral and the gangue.

### Hydraulic washing
Finely crushed or powdered ore is treated with a controlled stream of running water.

- **Lighter gangue particles** are washed away more readily.
- **Heavier ore particles** settle or remain behind and are collected as the concentrated fraction.
- Efficient separation requires adequate **liberation**, a useful **density contrast**, and properly controlled **particle size and water flow**.

The source hydraulic-washing description also uses an **upward stream of water**. The upward drag carries fine/light particles more readily, while denser or coarser particles have a greater tendency to settle.

![Hydraulic washing and levigation](/notes/metallurgy/reference/gravity-separation/hydraulic-washing-dark.webp)

### Suitable examples

| Mineral / ore | Formula | Why gravity treatment can work |
|---|---|---|
| Cassiterite | $SnO_2$ | Dense oxide; separable from lighter siliceous gangue |
| Iron oxide ores | e.g. $Fe_2O_3$ | Useful where a sufficient density contrast exists with siliceous gangue |
| Chromite | $FeCr_2O_4$ | Dense mineral amenable to gravity treatment in suitable feeds |

The source specifically illustrates $SnO_2$, $Fe_2O_3$ and $FeCr_2O_4$ being concentrated from **lighter siliceous impurities**.

### Wilfley / shaking-table mechanism
A **Wilfley-type table** is a slightly inclined, continuously vibrating or reciprocating table fitted with raised strips, corrugations or **riffles/barriers**.

![The Wilfley table](/notes/metallurgy/reference/gravity-separation/gravity-wilfley-table-dark.webp)

1. **Feeding:** finely divided ore is fed onto the inclined table.
2. **Water flow:** a controlled cross-flow/current of water moves over the surface.
3. **Vibration:** continuous vibration helps stratify particles and separates them according to their hydraulic behaviour.
4. **Riffle action:** denser particles remain closer to the table surface and are hindered or guided by the riffles; lighter particles are displaced farther by the water.
5. **Separate collection:** heavy mineral and lighter gangue follow different paths and are removed separately.

> **Wilfley table = density difference + water flow + inclination + vibration + riffles.**

![Stratification on a Wilfley table](/notes/metallurgy/reference/gravity-separation/wilfley-stratification-dark.webp)

### Why continuous removal of heavy material is essential
The heavy fraction must be removed continuously or at a suitable rate. If dense material accumulates excessively behind the riffles/barriers, the bed becomes overloaded. Eventually heavy and light particles may begin to pass the barriers together, causing a sharp fall in separation efficiency.

The **height/geometry of barriers and operating conditions** must therefore be adjusted to suit the feed.

### Additional functions of water
Water does more than provide the separating flow:

- it carries away lighter gangue,
- it can wash out some **water-soluble impurities**,
- it **suppresses dust**, improving the working environment.

### Hydraulic classifier concept
A **hydraulic classifier** sends an upward or otherwise controlled stream of water through a bed or suspension of particles. The upward drag acts more effectively on particles that are fine and/or light, while coarse and/or dense particles tend to settle.

![Hydraulic classifier](/notes/metallurgy/reference/gravity-separation/hydraulic-classifier-dark.webp)

Thus hydraulic classification depends on **settling velocity**, which is influenced by:

- density,
- particle size,
- particle shape,
- water-flow velocity.

> **Fine/light particles → carried upward more easily; coarse/dense particles → tend to settle.**

### Gravity separation vs hydraulic classification

| Gravity separation | Hydraulic classification |
|---|---|
| Main emphasis: density / specific-gravity difference | Main emphasis: settling velocity in a fluid |
| Typical device: Wilfley/shaking table | Uses upward or controlled water flow |
| Dense mineral is retained or follows a separate path | Coarse/dense particles settle; fine/light particles are carried farther/upward |

### Factors controlling efficiency
- **Density difference:** a larger useful density contrast generally makes separation easier.
- **Liberation and particle size:** crushing/grinding must free valuable mineral from gangue without producing an unnecessarily difficult ultrafine feed.
- **Water-flow rate:** too low gives poor gangue removal; too high may carry valuable mineral away.
- **Table inclination and vibration:** must be adjusted for proper stratification and transport.
- **Feed rate and riffle loading:** overloading reduces selectivity.

![Factors affecting gravity separation efficiency](/notes/metallurgy/reference/gravity-separation/gravity-efficiency-dark.webp)

> **JEE / NEET exam trap:** do not write “all oxide ores are concentrated by gravity separation.” The correct criterion is a sufficient difference in density/settling behaviour between the valuable mineral and gangue.

---

## 5. Magnetic Separation

**Principle:** either the ore or the gangue must respond differently to a magnetic field.

![Magnetic separation conveyor](/notes/metallurgy/reference/magnetic-separation.webp)

A crushed ore is carried on a conveyor over a magnetic pulley/roller:
- magnetic particles remain attracted longer and fall nearer the roller,
- non-magnetic particles follow a different trajectory and are collected separately.

### Classic example: cassiterite
Cassiterite $SnO_2$ may contain magnetic wolframite-type impurities, commonly represented as $(Fe,Mn)WO_4$. Magnetic separation helps remove these impurities during tin-ore concentration.

> **Exam trap:** the useful component need not itself be magnetic. Separation works whenever **one fraction is sufficiently more magnetic than the other**.

---

![Ore and concentration decision map](/notes/metallurgy/reference/ore-foundations.webp)

## Source-detail restoration
- **Mineral vs ore is economic, not purely chemical.** A mineral may contain a metal yet fail to be an ore if extraction is uneconomic or creates difficult impurities.
- The source uses **pyrite, $FeS_2$ (“fool’s gold”)** to stress this distinction: iron can be obtained in principle after oxidation/reduction, but sulphur removal is a major burden and sulphur makes iron brittle.
- **Gangue / matrix** means the unwanted material accompanying the valuable mineral, not simply “soil”. It may be silica, silicate, clay, carbonate, oxide or another sulphide.
- The complete route in the source is: **beneficiation → calcination/roasting if required → reduction/metal winning → refining**. Crushing/grinding precede concentration because liberation is necessary.
- **Gravity separation:** the source sketch uses an inclined vibrating/flow table with adjustable barriers/riffles. Heavy particles respond differently from lighter particles under water flow; wet processing also suppresses dust.
- **Magnetic separation:** either the ore or the impurity may be magnetic. In cassiterite treatment, magnetic wolframite-type impurity $(Fe,Mn)WO_4$ is removed from non-magnetic $SnO_2$ concentrate.

### Ore/mineral names explicitly appearing in the source
| Name | Formula / representation | Metallurgical relevance |
|---|---|---|
| Pyrite / iron pyrites | $FeS_2$ | Example of mineral not preferred as iron ore |
| Chalcopyrite / copper pyrites | $CuFeS_2$ | Major Cu ore |
| Cassiterite | $SnO_2$ | Tin ore |
| Wolframite | $(Fe,Mn)WO_4$ | Magnetic impurity associated with cassiterite |
| Zinc blende / sphalerite | $ZnS$ | Zinc ore |
| Pyrolusite | $MnO_2$ | Manganese mineral |
| Dolomite | $CaCO_3\cdot MgCO_3$ | Carbonate mineral / flux source |
| Chromite | $FeCr_2O_4$ | Chromium ore |
| Colemanite | $Ca_2B_6O_{11}\cdot5H_2O$ | Boron mineral |
| Siderite | $FeCO_3$ | Iron carbonate ore |
| Anglesite | $PbSO_4$ | Lead mineral |
| Cerussite | $PbCO_3$ | Lead carbonate ore |
| Chalcocite / copper glance | $Cu_2S$ | Copper sulphide mineral |
| Atacamite | $Cu_2Cl(OH)_3$ | Basic copper chloride mineral |

`;
export default content;
