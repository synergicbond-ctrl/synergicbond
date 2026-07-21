const content = String.raw`
# Part 9 — Extraction & Refining of Tin

> **Complete-source reconstruction:** theory is preserved at full teaching depth; diagrams are used only where they explain mechanism, apparatus, phase movement or decision logic.


> **Scope:** Source pages 44–45.

# A. Extraction of Tin from Cassiterite

![Tin extraction flow](/notes/metallurgy/tin-flow.svg)


## Cassiterite source flow restored
The handwritten notes treat an ore containing only a few percent $SnO_2$ in gangue and list major impurities:
1. silica/silicates,
2. Fe/Cu sulphides,
3. wolframite $(Fe,Mn)WO_4$ (magnetic impurity).

### Concentration sequence
1. **Gravity separation / levigation** enriches heavy cassiterite.
2. **Controlled roasting** converts sulphides to soluble sulphates where possible.
3. **Hot-water washing** removes soluble Fe/Cu sulphates.
4. **Magnetic separation** removes wolframite.
The enriched product is often called **black tin** concentrate.

### Smelting reactions
$$C+O_2\rightarrow CO_2$$
$$C+CO_2\rightarrow2CO$$
$$SnO_2+2C\rightarrow Sn+2CO$$
$$SnO_2+2CO\rightarrow Sn+2CO_2$$
Flux:
$$CaCO_3\rightarrow CaO+CO_2$$
$$CaO+SiO_2\rightarrow CaSiO_3$$

### Tin lost to slag
$SnO/SnO_2$ can react with silica to form tin silicate (source writes $SnSiO_3$ schematically). Slag is re-smelted with carbon/flux to recover tin.

### Refining sequence retained
Crude Sn → **liquation** → **poling** → **electrorefining** when very high purity is required.
Electrolyte can use soluble Sn salts in acidic medium; pure Sn is deposited at cathode.

`;
export default content;
