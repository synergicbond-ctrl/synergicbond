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
| Gravity separation / hydraulic washing | Density difference | Heavy oxide/carbonate ores with lighter gangue |
| Magnetic separation | Difference in magnetic behaviour | One component magnetic, the other non-magnetic |
| Froth flotation | Difference in surface wettability | Mainly sulphide ores |
| Leaching | Selective chemical solubility | Bauxite, Au/Ag cyanide processes and other selective systems |

## 4. Gravity Separation / Hydraulic Washing

**Principle:** separation is based mainly on the difference in **specific gravity/density** of ore particles and gangue.

It is most useful when:
- the valuable mineral is appreciably denser than gangue,
- particles are sufficiently liberated,
- the ore does not dissolve/react undesirably with water.

![Gravity separation on a shaking table](/notes/metallurgy/reference/gravity-separation.webp)

### Shaking / Wilfley-type table idea
Finely divided ore is fed onto an inclined, continuously vibrating table with riffles/barriers. Water flows across the surface.

- **Heavier particles** remain close to the riffles and move along a different path.
- **Lighter gangue** is more readily carried away by water.
- The source sketch shows an inclined vibrating table and adjustable barriers; this is preserved in the redrawn diagram.

**Additional role of water:** wet operation suppresses dust, improving the working environment.

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
