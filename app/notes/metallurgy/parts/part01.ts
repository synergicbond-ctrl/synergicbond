const content = String.raw`
# Part 1 — Foundations & Concentration of Ores

> **Scope:** Source pages 1–10. Every academically useful point is retained, but OCR errors and scientifically inaccurate wording are corrected.

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

![General metallurgy flowchart](/notes/metallurgy/metallurgy-flow.svg)

A useful master sequence is:

1. **Crushing and grinding** — liberate ore particles from gangue.
2. **Concentration / beneficiation / ore dressing** — remove as much gangue as practical.
3. **Conversion to a suitable compound** — often oxide formation by calcination or roasting.
4. **Reduction / metal winning** — convert the compound to the elemental metal.
5. **Refining** — remove residual impurities to obtain the required purity.

Different ores may skip, combine or reorder these steps. For example, noble metals may be leached directly, while very electropositive metals require electrolysis of molten salts.

---

## 3. Concentration of Ores — Choosing the Method

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

![Gravity separation on a shaking table](/notes/metallurgy/gravity-separation.svg)

### Shaking / Wilfley-type table idea
Finely divided ore is fed onto an inclined, continuously vibrating table with riffles/barriers. Water flows across the surface.

- **Heavier particles** remain close to the riffles and move along a different path.
- **Lighter gangue** is more readily carried away by water.
- The source sketch shows an inclined vibrating table and adjustable barriers; this is preserved in the redrawn diagram.

**Additional role of water:** wet operation suppresses dust, improving the working environment.

---

## 5. Magnetic Separation

**Principle:** either the ore or the gangue must respond differently to a magnetic field.

![Magnetic separation conveyor](/notes/metallurgy/magnetic-separation.svg)

A crushed ore is carried on a conveyor over a magnetic pulley/roller:
- magnetic particles remain attracted longer and fall nearer the roller,
- non-magnetic particles follow a different trajectory and are collected separately.

### Classic example: cassiterite
Cassiterite $SnO_2$ may contain magnetic wolframite-type impurities, commonly represented as $(Fe,Mn)WO_4$. Magnetic separation helps remove these impurities during tin-ore concentration.

> **Exam trap:** the useful component need not itself be magnetic. Separation works whenever **one fraction is sufficiently more magnetic than the other**.

---

## 6. Froth Flotation — Core Principle

Froth flotation is primarily used for **sulphide ores**.

**Principle:** it exploits selective differences in **wettability**:
- sulphide mineral particles are made preferentially **oil/collector-wet (hydrophobic)**,
- gangue is preferentially **water-wet (hydrophilic)**.

Air bubbles carry hydrophobic mineral particles upward into a froth that can be skimmed off.

![Froth flotation cell](/notes/metallurgy/froth-flotation.svg)

### Main components in the source notes

| Component | Function |
|---|---|
| Water | Creates slurry/pulp and carries hydrophilic gangue |
| Pine oil / eucalyptus-type frother | Produces and maintains a workable froth |
| Xanthate collector, e.g. sodium ethyl xanthate | Adsorbs on many sulphide surfaces and increases hydrophobicity |
| Cresol / aniline-type froth stabiliser in classical descriptions | Improves froth persistence |
| Air | Bubbles transport hydrophobic ore particles to the surface |

### Why pine oil works as a frother
A frother lowers interfacial tension sufficiently to help form a stable dispersion of bubbles. It does **not** replace the collector: collector and frother have different roles.

### Collector orientation — xanthate concept
A collector molecule has:
- a polar/ionic end that interacts with the mineral surface,
- a non-polar hydrocarbon group that prefers the non-aqueous/air side.

Once adsorbed, the mineral surface becomes more hydrophobic and attaches more easily to air bubbles.

> **Better language than the handwritten “like attracts like”:** non-polar groups favour the low-polarity air/oil environment, while polar/ionic groups interact with the mineral/water interface. The useful result is selective bubble attachment.

### Froth junction idea from the source diagram
At points where bubbles meet, thin liquid films remain. Collectors coat mineral particles; frothers/stabilisers help prevent premature bubble coalescence. This allows the mineral-loaded froth to be removed before collapse.

---

## 7. Activators — Improving Flotation

An **activator** modifies a mineral surface so that a collector can adsorb more effectively.

### Example: malachite-type copper mineral
The source uses malachite, approximately $Cu_2CO_3(OH)_2$, to illustrate **sulphidisation**. A sulphide reagent such as $Na_2S$ can create a sulphide-rich copper surface, which then interacts more strongly with xanthate collectors.

This demonstrates an important general rule:

> A non-sulphide mineral can sometimes be floated after suitable chemical surface activation.

### Activation of $ZnS$ by $CuSO_4$
Zinc sulphide often floats less readily than copper sulphides under comparable conditions. $Cu^{2+}$ can activate the $ZnS$ surface by forming a copper-rich sulphide-like surface layer, improving xanthate adsorption.

A simplified surface-exchange representation is:

$$ZnS(s) + Cu^{2+}(aq) \rightarrow CuS_{surface} + Zn^{2+}(aq)$$

The actual mineral-surface chemistry is more complex than a bulk stoichiometric precipitation reaction, but this representation captures the JEE-level concept.

---

## 8. Depressants — Selective Flotation

A **depressant** prevents one mineral from floating while allowing another to float.

### Separation of $PbS$ and $ZnS$
In classical JEE metallurgy, **NaCN** is described as depressing $ZnS$ during separation of galena ($PbS$) and zinc blende ($ZnS$). It alters the zinc-mineral surface/complexes metal species so that collector action on $ZnS$ is suppressed, while $PbS$ remains floatable.

> **Safety/science note:** cyanide chemistry is highly toxic and industrial flotation practice is tightly controlled. The website note presents the textbook principle, not an operational procedure.

---

## 9. Chemical Concentration — Leaching

**Leaching** means selectively dissolving the desired component (or sometimes an impurity) from a solid using a suitable liquid reagent.

The basic logic is:

$$\text{Powdered ore} + \text{selective leachant} \rightarrow \text{solution of desired species} + \text{insoluble residue}$$

Important examples developed later in the chapter:
- **Bayer process:** caustic leaching of bauxite to obtain soluble aluminate species.
- **Cyanide process:** formation of soluble dicyano complexes of Au/Ag under oxidising conditions.

---

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
`;
export default content;
