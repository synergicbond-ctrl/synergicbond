/**
 * S-BLOCK NOTES - VISUAL ENHANCED VERSION
 * Original content with multi-color formatting & image support
 * High-quality diagrams and colored highlights for better retention
 */

import { md, visual, type SBlockSection } from "./types";

export const VISUAL_ENHANCED_NOTES: SBlockSection[] = [
  {
    id: "fundamentals-visual",
    label: "1. Understanding the s-Block: Visual Guide",
    blocks: [
      md(String.raw`
## 🎯 What Makes the s-Block Unique?

The s-block is governed by **five competing factors**:

| Factor | Impact | Example |
|--------|--------|---------|
| **Atomic radius** ⬆️ | Ionization ⬇️, reactivity ⬆️ | Li smallest, Cs largest |
| **Ionization energy** | Ease of removing electrons | Group 1 easier than Group 2 |
| **Hydration energy** | How strongly water stabilizes ions | Li⁺ most strongly hydrated |
| **Lattice energy** | Crystal stability | Smaller cations = higher lattice energy |
| **Polarizing power** | How much the cation distorts anions | Li⁺ & Be²⁺ extremely high |

### 🔴 The Competition That Matters

Sometimes **one factor dominates** (simple trend). Other times, **two factors fight** (complex trend):

- **Solubility of NaOH**: Hydration energy wins → soluble
- **Solubility of BaSO₄**: Lattice energy wins → insoluble
- **Basicity of Group 2 hydroxides**: Charge density drives hydrolysis → weaker base than expected

**Master insight**: Ask "which factor dominates here?" for every question.

### 🟢 Group 1 vs Group 2 at a Glance

**Group 1 (M⁺)**
- Single valence electron
- Weak metallic bonding
- Low lattice energies
- Chemistry driven by *size effects*

**Group 2 (M²⁺)**
- Two valence electrons
- Strong metallic bonding
- High lattice/hydration energies
- Chemistry driven by *charge density*

**Lithium & Beryllium Exception**: Unusually **small**, **high charge density** → polarize everything around them → covalent character, reduced solubility, different reaction patterns.
`),
      visual("periodic-competition"),
    ],
  },
  {
    id: "group1-visual",
    label: "2. Group 1: Trends and Reactivity",
    blocks: [
      md(String.raw`
## 📊 Size and Property Trends

**Key numbers to remember:**

| Element | Atomic Radius (pm) | Melting Point (°C) | Density (g/cm³) |
|---------|--------------------|--------------------|-----------------|
| **Li** ⭐ | 152 | **181** | 0.53 (anomaly: lowest) |
| Na | 186 | 98 | 0.97 |
| K | 227 | 63 | 0.86 (anomaly: K < Na!) |
| Rb | 248 | 39 | 1.53 |
| Cs | 265 | 28.5 | 1.90 |

**Why the anomalies?**
- Li: Small size creates strong metallic bonding
- K: Atomic volume grows faster than atomic mass

## 🌊 Reactions with Water

$$\color{red}{\\text{2M + 2H₂O → 2MOH + H₂↑}}$$

**Increasing violence down the group:**
- Li: Gentle (stays solid, reacts slowly)
- Na: Vigorous (melts, spreads, hydrogen ignites)
- K, Rb, Cs: Explosive (violent, pink flame from combustion)

**Critical distinction**:
- **Thermodynamics** (E°): Li⁺/Li = -3.05V (most negative) → Li is strongest reducing agent
- **Kinetics** (what actually happens): K reacts faster because it melts easily

This is **the** trap question JEE asks repeatedly.

## ⚛️ Oxygen Species

**How to tell them apart:**

| Species | Formula | Color | Magnetic | Key Test |
|---------|---------|-------|----------|----------|
| **Oxide** | Li₂O, Na₂O | White | Diamagnetic | Reacts with H₂O to give base |
| **Peroxide** 🟡 | Na₂O₂ | **Pale yellow** | Diamagnetic | Gives H₂O₂ with dilute acid |
| **Superoxide** 🟠 | KO₂ | **Orange** | **Paramagnetic** | Gives both O₂ and H₂O₂ with water |

**Memory aid**: Bigger cations → larger, more complex oxygen species (size matching)

- Li⁺, Na⁺ (small) → prefer small O²⁻ (oxide)
- K⁺, Rb⁺, Cs⁺ (large) → prefer larger O₂²⁻ or O₂⁻ (peroxide/superoxide)
`),
      visual("oxygen-species-comparison"),
    ],
  },
  {
    id: "group2-visual",
    label: "3. Group 2: The +2 Kingdom",
    blocks: [
      md(String.raw`
## 📈 Why Always +2?

**Ionization energies (kJ/mol):**

| Element | IE₁ | IE₂ | IE₃ |
|---------|-----|-----|-----|
| Be | 899 | 1757 | **14,847** ⬆️ |
| Mg | 738 | 1450 | 7,731 ⬆️ |
| Ca | 590 | 1145 | 4,912 ⬆️ |

**Notice**: IE₃ is **enormous** because the third electron breaks the noble-gas core. The M³⁺ state never forms.

## 💪 Charge Density Effects

**Hydration energies** show the dramatic effect of charge density:

- Be²⁺: -2494 kJ/mol (smallest, most polarizing)
- Mg²⁺: -1921 kJ/mol
- Ca²⁺: -1577 kJ/mol
- Sr²⁺: -1443 kJ/mol
- Ba²⁺: -1305 kJ/mol

**Result**:
- Be²⁺ so strongly hydrated → high hydration energy → promotes hydrolysis → acidic solutions
- Ba²⁺ weakly hydrated → solutions less acidic → Ba(OH)₂ is quite soluble

## 🔵 Hydroxide Solubility Paradox

**Trend**: Be(OH)₂ < Mg(OH)₂ < **Ca(OH)₂ ↑** < Sr(OH)₂ < Ba(OH)₂

**Why it seems backward**:
1. Smaller Be²⁺ → higher lattice energy → less soluble ✓
2. But Be²⁺ hydration is so strong → triggers hydrolysis → BeO/Be(OH)₂ precipitate ✓
3. Larger Ba²⁺ → lower lattice energy AND lower hydration → actually soluble despite size!

**Lesson**: Don't assume "smaller = higher hydration = more soluble." Lattice energy often wins.

## 🟡 Beryllium's Anomalies (It's Special)

| Behavior | Be²⁺ | Mg²⁺ | Al³⁺ |
|----------|------|------|------|
| **Hydroxide** | Amphoteric | Basic | Amphoteric |
| **Oxide passivation** | Yes | No | No |
| **Carbide product** | Be₂C → CH₄ | MgC₂ → C₂H₂ | Al₄C₃ → CH₄ |
| **Resembles** | Al more than Mg! | ... | ... |

**The diagonal relationship**: Be behaves more like Al than like Mg!
`),
      visual("beryllium-anomaly-chart"),
    ],
  },
  {
    id: "reactions-visual",
    label: "4. Reactions: Master Organizer",
    blocks: [
      md(String.raw`
## 🔄 Reaction Summary (All Types)

### With Water & Oxygen

$$\\color{blue}{\\text{2M + 2H₂O → 2MOH + H₂↑}} \\quad \\text{(Group 1, increasingly vigorous)}$$

$$\\color{red}{\\text{M + H₂O → M(OH)₂ + H₂↑}} \\quad \\text{(Group 2, less vigorous)}$$

**Oxygen products depend on metal and O₂ availability:**

$$\\begin{array}{c|c|c|c}
\\text{O₂ type} & \\text{Li+O₂} & \\text{Na+O₂} & \\text{K+O₂} \\\\
\\hline
\\text{Product} & \\color{green}{\\text{Li₂O}} & \\color{orange}{\\text{Na₂O₂}} & \\color{red}{\\text{KO₂}} \\\\
\\text{Color} & \\text{White} & \\text{Yellow} & \\text{Orange} \\\\
\\text{Use} & \\text{Base} & \\text{Oxidizer} & \\text{Life support}
\\end{array}$$

### With Halogens

$$\\color{purple}{\\text{2M + X₂ → 2MX}} \\quad \\text{(Ionic halides)}$$

**Covalency increases for lithium halides**: LiI > LiBr > LiCl > LiF (opposite of what size alone predicts!)

Reason: Tiny Li⁺ polarizes large, soft I⁻ so strongly that electron density is pulled toward the metal.

### Special Reactions (Anomalies)

$$\\color{red}{\\text{6Li + N₂ → 2Li₃N}} \\quad \\text{(ONLY Group 1 metal to form nitride!)}$$

$$\\color{blue}{\\text{2Li₃N + 6H₂O → 6LiOH + 2NH₃↑}}$$

Reason: High lattice energy of Li₃N makes formation thermodynamically favorable.

$$\\color{green}{\\text{Be²⁺ + H₂O ⇌ Be(OH)⁺ + H⁺}} \\quad \\text{(Hydrolysis - acidic solution!)}$$

Reason: Extraordinarily high charge density polarizes coordinated water.
`),
      visual("reaction-flowchart"),
    ],
  },
  {
    id: "trends-visual",
    label: "5. Periodic Trends: Master Table",
    blocks: [
      md(String.raw`
## 📊 The Data (Patterns, Not Just Numbers)

### Group 1 Trends

| Property | Direction | Exception | Why |
|----------|-----------|-----------|-----|
| **Atomic radius** | ⬆️ Li→Cs | None | New shell each period |
| **IE₁** | ⬇️ Li→Cs | None | Valence e⁻ farther away |
| **Melting point** | ⬇️ Li→Cs | K < Na (K density anomaly) | Metallic bonding weakens |
| **Density** | ⬆️ Li→Cs | K < Na | Volume grows faster than mass |
| **Hydration magnitude** | ⬇️ Li⁺→Cs⁺ | None | Smaller ions hydrate more |

### Group 2 Trends

| Property | Direction | Exception | Why |
|----------|-----------|-----------|-----|
| **Atomic radius** | ⬆️ Be→Ba | None | New shell each period |
| **IE₁** | ⬇️ Be→Ba | Ra ≈ Ba (lanthanide contraction) | Shielding increases |
| **Melting point** | No clear pattern | Many | Different crystal structures |
| **Hydration magnitude** | ⬇️ Be²⁺→Ba²⁺ | None | Smaller ions hydrate more |
| **Hydroxide solubility** | ⬆️ Be→Ba | None | Decreased lattice energy |
| **Sulfate solubility** | ⬇️ Be→Ba | BeSO₄, MgSO₄ soluble | Lattice energy dominates |

### 🎯 Key Insight: Opposing Trends!

**Hydroxides**: Solubility **increases** ⬆️ (lower lattice energy as cations grow)

**Sulfates**: Solubility **decreases** ⬇️ (large SO₄²⁻ ion → higher lattice energy trumps hydration)

**Why?** The size of the *anion* matters! Small OH⁻ is less lattice-stabilizing. Large SO₄²⁻ is extremely lattice-stabilizing.

This is where weak students fail: they memorize "solubility increases" without asking *which compound*.
`),
      visual("trends-comparison-chart"),
    ],
  },
  {
    id: "industrial-visual",
    label: "6. Industrial Chemistry & Materials",
    blocks: [
      md(String.raw`
## 🏭 Major Processes and Products

### Sodium Chlor-Alkali (NaCl Electrolysis)

$$\\color{red}{\\text{Anode: }} 2\\text{Cl}^- \\to \\text{Cl}_2↑ + 2e^-$$
$$\\color{blue}{\\text{Cathode: }} 2\\text{H}_2\\text{O} + 2e^- \\to \\text{H}_2↑ + 2\\text{OH}^-$$
$$\\color{green}{\\text{Overall: }} \\text{2NaCl + 2H}_2\\text{O} \\to \\text{2NaOH + H}_2↑ + \\text{Cl}_2↑$$

**Annual production**: NaOH: 70+ million tonnes | Cl₂: 50+ million tonnes

### Solvay Process (Na₂CO₃ Production)

$$\\text{Step 1: } \\text{NH}_3 + \\text{CO}_2 + \\text{NaCl} + \\text{H}_2\\text{O} \\to \\text{NaHCO}_3↓ + \\text{NH}_4\\text{Cl}$$
$$\\text{Step 2: } 2\\text{NaHCO}_3 \\xrightarrow{\\Delta} \\text{Na}_2\\text{CO}_3 + \\text{H}_2\\text{O} + \\text{CO}_2↑$$

**Elegant**: Converts cheap limestone into soda ash with ~99% atom economy

### Lime Cycle (CaCO₃ → CaO → Ca(OH)₂ → CaCO₃)

$$\\text{Limestone heating: } \\text{CaCO}_3 \\xrightarrow{\\Delta} \\text{CaO} + \\text{CO}_2↑$$
$$\\text{Slaking: } \\text{CaO + H}_2\\text{O} \\to \\text{Ca(OH)}_2$$
$$\\text{Recarbon.: } \\text{Ca(OH)}_2 + \\text{CO}_2 \\to \\text{CaCO}_3$$

**Application**: Limestone mortar (ancient building material), cement, concrete

### Gypsum → Plaster of Paris

$$\\text{CaSO}_4\\cdot2\\text{H}_2\\text{O} \\xrightarrow{150°C} \\text{CaSO}_4\\cdot\\frac{1}{2}\\text{H}_2\\text{O} + 1.5\\text{H}_2\\text{O}$$

**Rehydration** (plaster setting):
$$\\text{CaSO}_4\\cdot\\frac{1}{2}\\text{H}_2\\text{O} + 1.5\\text{H}_2\\text{O} \\to \\text{CaSO}_4\\cdot2\\text{H}_2\\text{O}$$

---

## 💡 Why These Processes Matter for JEE

- **Chlor-alkali**: Illustrates redox, Faraday's law, industrial scale
- **Solvay**: Shows elegant, atom-efficient synthesis
- **Lime cycle**: Demonstrates equilibrium and practical applications
- **Gypsum**: Shows hydrate formation and water's role in materials

**Expected question format**: "2 moles of CaCO₃ are heated to convert all to CaO. If the gas is passed through Ca(OH)₂ solution, how much CaCO₃ reforms?" (requires tracking CO₂ and understanding equilibria)
`),
      visual("industrial-flowchart"),
    ],
  },
  {
    id: "anomalies-visual",
    label: "7. First-Member Anomalies Explained",
    blocks: [
      md(String.raw`
## 🔴 The Core Cause: High Charge Density

$$\\text{Charge density} = \\frac{\\text{Charge}}{\\text{Volume}} \\propto \\frac{q}{r^3}$$

| Cation | Charge | Radius | Charge Density | Behavior |
|--------|--------|--------|---|----------|
| **Li⁺** | +1 | 76 pm | **Highest in Group 1** | Polarizing, anomalous |
| Na⁺ | +1 | 102 pm | Lower | Normal |
| **Be²⁺** | +2 | 31 pm | **Extremely high** | Highly polarizing, Al-like |
| Mg²⁺ | +2 | 72 pm | Lower | More normal |

**Consequences of high charge density**:

1. ✓ **Polarizes anions** → partial covalency → reduced solubility
2. ✓ **Polarizes water molecules** → hydrolysis → acidic solutions
3. ✓ **Stabilizes compact structures** → Li₃N exists, Li₂CO₃ decomposes
4. ✓ **Forms hydrated salts** → LiCl·2H₂O (vs anhydrous NaCl)

## 🟠 Lithium's Anomalies (One-by-One)

### Physical
- Hardest alkali metal ✗ (should be soft)
- Highest melting point ✗ (should be low)
- Lowest density ✗ (should be light but denser)

**Why?** Small Li⁺ creates strong metallic bonding through effective orbital overlap.

### Chemical
- **LiOH**: Sparingly soluble (not like NaOH, which is highly soluble)
  - Reason: High lattice energy + partial covalency

- **Li₂CO₃**: Decomposes on heating (not like Na₂CO₃, which is stable)
  - Reason: Li⁺ polarizes CO₃²⁻ so strongly that C—O bonds break

- **Li₃N**: Forms with N₂ directly (only Group 1 metal to do so)
  - Reason: Compact, high-lattice-energy Li₃N is thermodynamically favored

- **Lithium halides**: LiI more covalent than LiF (opposite of size trend!)
  - Reason: Tiny Li⁺ polarizes large, soft I⁻ more than small, hard F⁻

## 🔵 Beryllium's Anomalies (Even More Extreme)

### Passivation
- Doesn't react with steam (unlike all other Group 2 metals)
- **Why?** Thin, impermeable BeO layer forms and blocks reaction

### Amphoterism
$$\\text{Be(OH)}_2 + 2\\text{NaOH} \\to \\text{Na}_2[\\text{Be(OH)}_4]$$

- Be(OH)₂ dissolves in excess base (like Al(OH)₃!)
- **Why?** Charge density so high that [Be(OH)₄]²⁻ complex is stabilized

### Covalency
- BeCl₂ is **molecular** and covalent (not ionic!)
- Forms dimers in vapor: (BeCl₂)₂ with bridging Cl atoms

### Resembles Aluminum More Than Magnesium!
| Property | Be | Mg | Al |
|----------|----|----|-----|
| Oxide amphoteric | Yes | No | Yes |
| Hydroxide amphoteric | Yes | No | Yes |
| Diagonal relation | — | — | Yes |

**The diagonal relationship**: Be is to Al what Li is to Mg. A periodic pattern!

---

## 🎯 Master Rule

**Whenever you see a Group 1 or 2 anomaly, ask: Is it driven by charge density?**

Answer is almost always YES.
`),
      visual("charge-density-impact"),
    ],
  },
];
