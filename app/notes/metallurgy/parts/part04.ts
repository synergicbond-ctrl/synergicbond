const content = String.raw`
# Part 4 — Extraction of Tin & Magnesium

> **Scope:** Source pages 44–48.

# A. Extraction of Tin from Cassiterite

## 1. Ore and impurities
Principal ore: **cassiterite**, $SnO_2$.

The source lists:
- silica/silicates,
- sulphides of Fe and Cu,
- wolframite-type magnetic impurity $(Fe,Mn)WO_4$.

## 2. Concentration sequence

![Tin extraction flow](/notes/metallurgy/tin-flow.svg)

### Step 1 — gravity separation / levigation
Crushed ore is washed to remove lighter earthy gangue.

### Step 2 — controlled roasting
Sulphide impurities are oxidised; where soluble sulphates form, they can be removed by hot-water washing. The valuable $SnO_2$ remains largely unchanged.

A generic sulphide oxidation is:
$$MS+2O_2\rightarrow MSO_4$$

The exact product depends on the sulphide and roasting conditions.

### Step 3 — magnetic separation
Magnetic wolframite-type material is removed from non-magnetic cassiterite concentrate.

The concentrated product is traditionally called **black tin**.

## 3. Smelting
Concentrated $SnO_2$ is heated with coke and a basic flux such as limestone.

Important reactions:

$$C+O_2\rightarrow CO_2$$
$$C+CO_2\rightarrow2CO$$

Reduction can be represented by:
$$SnO_2+2C\rightarrow Sn+2CO$$

and/or stepwise through $SnO$ with carbon/CO depending on conditions.

Flux formation:
$$CaCO_3\rightarrow CaO+CO_2$$
$$CaO+SiO_2\rightarrow CaSiO_3$$

### Tin loss into slag
Tin(II) oxide can react with silica:
$$SnO+SiO_2\rightarrow SnSiO_3$$

This causes tin loss in the slag. Re-smelting with a stronger basic flux converts silicate gangue toward calcium silicate and recovers more tin.

## 4. Refining of tin
The source sequence is:
1. **liquation** — low-melting Sn drains away from higher-melting impurities,
2. **poling** — removes oxidisable impurities and recovers oxidised Sn,
3. **electrorefining** — very high purity.

A suitable Sn(II)-containing acidic electrolyte is used in textbook descriptions; exact industrial electrolyte composition varies.

---

# B. Extraction of Magnesium

The source organises Mg extraction in three major steps:
1. preparation of hydrated $MgCl_2\cdot6H_2O$,
2. conversion to **anhydrous $MgCl_2$** without hydrolysis,
3. fused-salt electrolysis.

## 1. Preparation of $MgCl_2\cdot6H_2O$

### From carnallite
Carnallite is a natural double salt, approximately:
$$KCl\cdot MgCl_2\cdot6H_2O$$

Fractional crystallisation exploits solubility differences so KCl-rich material and MgCl₂-rich liquor can be separated; concentration/crystallisation yields $MgCl_2\cdot6H_2O$.

### Dow seawater route
Seawater contains dissolved $Mg^{2+}$ salts. Lime is added:

$$Mg^{2+}+2OH^-\rightarrow Mg(OH)_2\downarrow$$

or, using lime explicitly:
$$MgCl_2+Ca(OH)_2\rightarrow Mg(OH)_2\downarrow+CaCl_2$$

The precipitate is filtered and treated with HCl:
$$Mg(OH)_2+2HCl\rightarrow MgCl_2+2H_2O$$

Crystallisation gives hydrated magnesium chloride.

> **Scientific correction:** the source’s “65 ppm MgCl₂” is not a reliable composition statement for seawater. Seawater contains magnesium at the order of **grams of Mg²⁺ per litre**, varying with salinity; do not memorise 65 ppm.

## 2. Why direct heating of $MgCl_2\cdot6H_2O$ fails
Hydrated MgCl₂ undergoes **hydrolysis** during dehydration:

$$MgCl_2+H_2O\rightleftharpoons MgOHCl+HCl$$

and further heating can produce $MgO$. Thus simple heating does not cleanly yield anhydrous $MgCl_2$.

### Remedy
Dehydrate in a **dry HCl atmosphere** so hydrolysis is suppressed and HCl loss is countered.

### Alternative chlorination route
A textbook route is:
$$MgCO_3\xrightarrow{\Delta}MgO+CO_2$$

then carbothermic chlorination:
$$MgO+C+Cl_2\rightarrow MgCl_2+CO$$

Analogous chlorination principles apply to other refractory oxides; the source mentions BeCl₂/AlCl₃ preparation analogies.

## 3. Electrolysis of fused $MgCl_2$

![Magnesium fused-salt electrolysis](/notes/metallurgy/magnesium-cell.svg)

A molten mixture of anhydrous $MgCl_2$ with alkali/alkaline-earth chlorides is electrolysed.

Cathode:
$$Mg^{2+}+2e^-\rightarrow Mg(l)$$

Anode:
$$2Cl^-\rightarrow Cl_2(g)+2e^-$$

### Why add NaCl / other chlorides?
- lowers the working melting temperature of the bath,
- improves fluidity and practical conductivity,
- reduces energy demand.

### Why Mg floats
Molten Mg is less dense than the molten salt bath, so it collects at the top and can be separated.

### Why exclude air?
Hot Mg oxidises readily. The source shows the cell covered with a protective reducing/inert gas atmosphere (historically coal-gas-type protection) to limit oxidation/burning.

> **Correction:** pure $MgCl_2$ melts near $714^\circ C$, not $1200^\circ C$ as one handwritten annotation implies. Electrolyte mixtures are chosen to operate efficiently at lower practical temperatures.
`;
export default content;
