const content = String.raw`
# Part 16 — Steelmaking, Alloy Control & Heat Treatment

> **Complete-source reconstruction:** theory is preserved at full teaching depth; diagrams are used only where they explain mechanism, apparatus, phase movement or decision logic.


> **Scope:** Source pages 67–71.

# 4. From Pig Iron to Wrought Iron / Steel

The common idea is **oxidative refining**:
- oxidise excess C, Si, Mn, P and other impurities,
- transfer oxides to gas/slag,
- then add controlled alloying elements/carbon to obtain the required steel.

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

# 8. Heat Treatment of Steel

# 9. Case Hardening

Goal: **hard wear-resistant surface + tough/ductile core**.

## 10. One-Page Iron Logic

$\text{Iron ore}\rightarrow\text{oxide preparation}\rightarrow\text{blast furnace}\rightarrow\text{pig iron}$

$\text{pig iron}\xrightarrow{\text{oxidative refining}}\text{low-impurity iron/steel melt}\xrightarrow{\text{controlled C + alloying + heat treatment}}\text{engineering steel}$

This sequence links extraction metallurgy with materials science—exactly the connection the source’s final pages are trying to build.




## Steelmaking details restored from pages 67–71
### Puddling
Historical oxidising treatment with iron-oxide-rich lining/charge. Impurities C/Si/Mn/S are oxidised; Fe oxide participates as oxygen carrier.

### Bessemerisation
Air blown through molten iron.
- **Basic/Thomas process:** basic CaO/MgO/dolomite lining permits P removal as phosphate slag:
$$3CaO+P_2O_5\rightarrow Ca_3(PO_4)_2$$
Thomas slag was used historically as fertiliser.
- **Acid Bessemer:** silica lining only for low-P feed; cannot remove phosphorus effectively.

### Open-hearth process
Historical slower oxidation/refining with better compositional control than early Bessemer.

### LD / basic oxygen
High-purity O$_2$ replaces air → faster refining and much less nitrogen pickup, improving weldability/quality compared with air-blown processes.

### Carbon-content classes shown in source
| Class | Approx. carbon mass % in source |
|---|---:|
| Mild steel | 0.15–0.30% |
| Medium-carbon steel | 0.30–0.60% |
| High-carbon steel | 0.60–0.80% |
| Tool steel | 0.80–1.4% |
Modern classifications vary somewhat; treat these as classroom ranges.

### Spiegeleisen / ferroalloy correction step
Source describes addition of C–Mn-bearing alloy after over-oxidation to restore desired C/Mn and deoxidise/condition steel. Ferroalloys (ferromanganese, ferrosilicon, ferrochrome) provide more homogeneous alloy addition than elemental powders.

### Blast-furnace by-products
- $CaSiO_3$-rich slag → cement/aggregate/ballast uses.
- Top gas source composition: roughly N$_2$ 58%, CO 25%, CO$_2$ 10%, H$_2$ ~6.5% (illustrative). CO + H$_2$ give fuel value; gas is cleaned and reused for heating.

## Heat treatments — source conditions retained
### Annealing
Heat steel to suitable austenitising/recrystallisation range (source classroom sketch ~700–800°C), then **slow cool** → softer, more workable steel; magnetic/electrical applications may use specially annealed low-carbon alloys.

### Quenching / hardening
Heat to appropriate temperature then cool rapidly in water/oil/brine → hard but brittle martensitic structure.

### Tempering
Reheat hardened steel to a lower temperature (source ~200–300°C classroom range), then controlled cooling → reduces brittleness while retaining useful hardness.

### Case hardening / carburising
Low-carbon steel surface is enriched in carbon at high temperature, then quenched → hard case + tough core.

### Cyaniding / carbonitriding-type historical salt bath
C/N-containing species diffuse into surface; modern safety/industrial practice is tightly controlled due cyanide hazard.

### Nitriding
Source: steel containing Al-type nitride-forming elements, heated around 500–550°C in NH$_3$; hard nitrides form at surface. Used for wear-resistant components and drilling/machinery parts.

`;
export default content;
