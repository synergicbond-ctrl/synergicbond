const content = String.raw`
# Part 5 — Extraction & Refining of Aluminium

> **Scope:** Source pages 49–55.

## 1. Bauxite — Real Composition vs Textbook Shorthand
Bauxite is not a single pure hydrate with fixed formula. It is a heterogeneous ore rich in aluminium hydroxide minerals (gibbsite, boehmite, diaspore) with impurities such as $Fe_2O_3$, $SiO_2$ and $TiO_2$.

The handwritten notation $Al_2O_3\cdot2H_2O$ is a useful older shorthand for hydrated alumina but should not be treated as a unique bauxite formula.

### “Red” and “white” bauxite in the source
- **Red bauxite:** significant iron oxide gives reddish-brown colour.
- **Silica-rich / pale bauxite:** lower Fe but more silica; needs different beneficiation because silica dissolves in strong alkali.

---

# 2. Bayer Process — Purification of Bauxite

![Bayer process flow](/notes/metallurgy/bayer-process.svg)

Modern alumina refining is based on caustic digestion.

## Step 1 — digestion in NaOH
Aluminium hydroxide dissolves as aluminate species. A convenient ionic representation is:

$$Al(OH)_3+OH^-\rightarrow[Al(OH)_4]^-$$

Iron oxide and TiO₂ remain largely in the insoluble residue (“red mud”) under Bayer conditions.

### Why silica is troublesome
Silica can react with alkali:
$$SiO_2+2OH^-\rightarrow SiO_3^{2-}+H_2O$$

and can form sodium aluminosilicate products, consuming caustic and alumina. This explains the source statement that strongly silica-rich ore is unsuitable for the simplest Bayer treatment.

## Step 2 — clarification
Insoluble residue is separated from the sodium aluminate liquor.

## Step 3 — precipitation of $Al(OH)_3$
Lowering causticity and seeding the solution promotes:

$$[Al(OH)_4]^-\rightarrow Al(OH)_3\downarrow+OH^-$$

### Why dilution / CO₂ helps in the textbook model
Dilution lowers hydroxide concentration. Carbon dioxide neutralises hydroxide:
$$CO_2+2OH^-\rightarrow CO_3^{2-}+H_2O$$

This shifts aluminate toward precipitation.

### Function of seeding
Fine $Al(OH)_3$ crystals provide nucleation surfaces, accelerating controlled crystal growth and reducing induction time.

> Strong mineral acid addition is not the preferred textbook strategy because excessive acid can redissolve amphoteric $Al(OH)_3$ as $Al^{3+}$.

## Step 4 — calcination
$$2Al(OH)_3\xrightarrow{\Delta}Al_2O_3+3H_2O$$

The product is purified **alumina**.

---

# 3. Hall Process — Historical Alkali Fusion Route

The source retains a classical Hall-type purification scheme:
- bauxite fused with $Na_2CO_3$,
- sodium aluminate becomes water-soluble,
- insoluble impurities are filtered,
- $Al(OH)_3$ precipitated and calcined.

A simplified representation:
$$Al_2O_3+Na_2CO_3\rightarrow2NaAlO_2+CO_2$$

Silica also reacts:
$$SiO_2+Na_2CO_3\rightarrow Na_2SiO_3+CO_2$$

Therefore silica-rich bauxite causes contamination/loss, matching the source warning.

---

# 4. Serpek Process — Silica-Rich Bauxite (Historical Textbook Route)

The source presents Serpek’s process as:

$$Al_2O_3+3C+N_2\rightarrow2AlN+3CO$$

Silica is carbothermically removed at high temperature; the chemistry depends on furnace conditions.

Aluminium nitride is hydrolysed:
$$AlN+3H_2O\rightarrow Al(OH)_3+NH_3$$

Then:
$$2Al(OH)_3\xrightarrow{\Delta}Al_2O_3+3H_2O$$

This is historically important for exams, though the Bayer process dominates modern alumina production.

---

# 5. Hall–Héroult Process — Electrolytic Reduction of Alumina

![Hall-Héroult cell](/notes/metallurgy/hall-heroult.svg)

Aluminium is too electropositive to be produced by aqueous electrolysis or ordinary carbon reduction. $Al_2O_3$ is dissolved in a molten fluoride bath and electrolysed.

### Cell construction
- carbon-lined steel shell acts as **cathode**,
- consumable graphite/carbon blocks act as **anodes**,
- electrolyte is a cryolite-rich fluoride melt containing dissolved alumina; CaF₂ may be added to adjust operating properties.

> The source gives 60% cryolite, 20% CaF₂, 20% alumina as a teaching mixture. Industrial bath composition is not fixed at these exact percentages; treat them as historical classroom values, not a universal specification.

### Why cryolite ($Na_3AlF_6$) / CaF₂ are used
- lower operating/melting temperature compared with pure alumina,
- dissolve alumina,
- improve ionic conductivity and bath fluidity.

Cathode half-reaction:
$$Al^{3+}+3e^-\rightarrow Al(l)$$

At the anode, oxide species are discharged; oxygen reacts with carbon:
$$2O^{2-}\rightarrow O_2+4e^-$$
$$C+O_2\rightarrow CO_2$$

A commonly used net representation is:
$$2Al_2O_3+3C\rightarrow4Al+3CO_2$$

Some CO can also form depending on conditions.

### Why carbon anodes are consumed
Oxygen generated from alumina oxidises carbon to CO₂/CO, so anodes must be replaced periodically.

### Coke/carbon cover on bath
The source notes a surface carbon layer that:
- reduces radiative heat loss,
- helps shield the hot bath/interface from air.

### Important electrochemical trap
In an **aqueous** aluminium salt, water/H⁺ is reduced before $Al^{3+}$, so Al cannot be plated from ordinary aqueous solution. Hence molten-salt electrolysis is essential.

---

# 6. Why Not Use Molten $AlCl_3$ Simply?
Anhydrous $AlCl_3$ is molecular/covalent and highly volatile (sublimes readily), making it unsuitable as a simple high-temperature ionic electrolyte on its own. Industrial aluminium production therefore uses alumina dissolved in molten fluorides.

---

# 7. Hoopes Process — Electrolytic Refining of Aluminium

![Hoopes three-layer cell](/notes/metallurgy/hoopes.svg)

Hoopes refining uses three molten layers separated by density:

1. **Bottom anode layer:** impure Al alloyed with a heavier metal (classically Cu) so it is denser.
2. **Middle electrolyte:** molten fluoride mixture containing aluminium fluoride species; density adjusted to lie between the two metal layers.
3. **Top cathode layer:** pure molten Al.

At the anode:
$$Al\rightarrow Al^{3+}+3e^-$$

At the cathode:
$$Al^{3+}+3e^-\rightarrow Al$$

Pure aluminium accumulates in the top layer.

### Why density adjustment matters
The entire process depends on maintaining three stable, immiscible/stratified layers. The source mentions $BaF_2$ as a density-adjusting component in the electrolyte.

### Why cover the furnace?
To reduce oxidation and contamination of the hot aluminium/electrolyte system.

---

## 8. JEE Master Comparison

| Stage | Process | Key chemistry |
|---|---|---|
| Ore purification | Bayer | Amphoteric dissolution as aluminate; precipitate $Al(OH)_3$ |
| Alternative historical purification | Hall alkali fusion | Sodium aluminate formation |
| Silica-rich historical route | Serpek | $AlN$ formation then hydrolysis |
| Metal production | Hall–Héroult | Molten fluoride electrolysis of dissolved alumina |
| Metal refining | Hoopes | Three-layer electrolytic transfer of Al |

> **Authoritative cross-check:** modern bauxite → alumina uses the Bayer process, followed by Hall–Héroult electrolytic aluminium production. This sequence is the industrial backbone and should be prioritised over historical side routes.
`;
export default content;
