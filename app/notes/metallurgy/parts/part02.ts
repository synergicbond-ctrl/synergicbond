const content = String.raw`
# Part 2 — Froth Flotation, Activators, Depressants & Leaching

> **Complete-source reconstruction:** theory is preserved at full teaching depth; diagrams are used only where they explain mechanism, apparatus, phase movement or decision logic.


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

![Froth flotation cell](/notes/metallurgy/froth-flotation.svg)

![Collector, activator and depressant chemistry](/notes/metallurgy/froth-chemistry.svg)


## Full reagent logic from the source
### Frother
Pine oil (and classical aromatic frothers/stabilisers mentioned in older texts) lowers surface tension and helps create a persistent froth. **Frother ≠ collector.**

### Collector — sodium ethyl xanthate idea
A xanthate has a polar sulphur-containing head that binds/adsorbs on suitable mineral surfaces and a hydrocarbon group that makes the surface more hydrophobic. The particle then attaches more readily to an air bubble.

### Activator examples retained
1. **Sulphidisation of oxide/carbonate Cu minerals:** a sulphide reagent such as $Na_2S$ produces a sulphide-like surface on a mineral such as malachite $Cu_2CO_3(OH)_2$, allowing xanthate adsorption.
2. **Activation of ZnS:** $CuSO_4$ can activate sphalerite by creating a Cu-rich surface; the collector then adsorbs more effectively.

### Depressant example retained — PbS/ZnS separation
When galena $PbS$ contains $ZnS$, a cyanide depressant can suppress ZnS flotation so PbS rises preferentially. The source represents complex formation schematically as:
$$Zn^{2+}+4CN^-\rightleftharpoons[Zn(CN)_4]^{2-}$$
The practical surface chemistry is more complex than a single bulk-solution equation; for JEE the key idea is **selective depression of ZnS**.

### Why bubbles carry ore
Hydrophobic particles attach at the air–water interface because this lowers the energetic penalty of contact with water. Froth stability must be enough for collection but not so high that separation becomes impossible.

## Leaching — chemical concentration
**Definition:** a suitable reagent selectively dissolves the desired metal/mineral or selectively dissolves impurity, followed by filtration and recovery.

Source examples:
- Bayer-type alkaline leaching of bauxite.
- Cyanide leaching of Au/Ag in the presence of oxygen.
- Low-grade copper ores can be leached to a soluble Cu salt and the metal recovered by displacement/electrowinning.

`;
export default content;
