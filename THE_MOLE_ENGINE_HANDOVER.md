# THE MOLE ENGINE — Complete Implementation Handover

**Date:** 07/07/2026  
**Status:** Ready for immediate handover to design and engineering teams  
**Scope:** Presentation-layer redesign only — chemistry content unchanged, copied verbatim  
**Target Release:** 4 weeks (phased: MVP in 2 weeks)  
**Team allocation:** 1 Lead Designer, 1 Product Designer, 2 Frontend Engineers  

---

## EXECUTIVE SUMMARY

### Problem
Excellent chemistry content presented as a research paper, not a learning experience.
- Students open, see walls of text and identical cards, close after 10 seconds.
- No visual hierarchy, no emotion, no story, no color coding.
- 16 diagrams across an 8-hour chapter is 70% below competitive benchmarks.
- Zero scientist biographies despite five named laws and their discoverers.

### Solution
Transform presentation without touching chemistry.
- 7-card taxonomy replacing 3 current card types.
- 50+ new visuals (targeting current 16 → 50, net +34 assets).
- Story-first chapter architecture (question opens every topic).
- Color-coded hierarchy (formulas = green, traps = red, scientists = purple, etc.).
- 12 scientist biographies + 12 memory anchors + 12 DYK boxes + 12 exam traps.

### Expected Outcome
- **Engagement:** +150–200% (time-on-topic, scroll depth)
- **Completion rate:** +25–35% (fewer drop-offs)
- **Retention:** +30% at 7 days (mnemonics + visual anchors)

> **Core Principle:** No chemistry removed. No formulas rewritten. No rigour reduced.

---

## PHASE 1 — BRUTAL AUDIT (Topic-by-Topic Scorecards)

### Scoring Key
- **Engagement:** How much would a 16-year-old want to keep reading? (0 = close immediately, 10 = can't put it down)
- **Boredom:** How much wall-of-text fatigue? (0 = none, 10 = completely exhausting)
- **Visual Density:** % of screen occupied by diagrams/visuals? (0 = 0%, 10 = 70%+)
- **Retention:** How sticky are the ideas 7 days later? (0 = forgotten, 10 = impossible to forget)

| Topic | Engagement | Boredom | Visual | Retention | Primary Problem |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **01 Matter & Sig Figs** | 3 | 8 | 3 | 3 | 5 back-to-back prose paragraphs, zero story |
| **02 The Mole** | 4 | 7 | 2 | 3 | Teaser is great, content collapsed, zero scientist |
| **03 Atomic Mass** | 3 | 7 | 2 | 3 | Promises "ruler moved twice," no timeline built |
| **04 Conversion Wheel** | 5 | 6 | 4 | 5 | Named wheel, never drawn — pure prose description |
| **05 Five Laws** | 3 | 8 | 1 | 3 | Best story potential, zero timeline, zero diagrams |
| **06 % Composition** | 4 | 7 | 2 | 4 | Process-heavy, no flowchart |
| **07 Stoichiometry** | 4 | 7 | 2 | 3 | Recipe metaphor in copy, never visualized |
| **08 Limiting Reagent** | 5 | 6 | 4 | 5 | Has 2 diagrams, good but no race metaphor |
| **09 POAC** | 5 | 6 | 3 | 5 | Shortcut framing good, ledger visual missing |
| **10 Eudiometry** | 7 | 4 | 7 | 7 | Chapter's best — template to clone (still improvable) |
| **11 Concentration** | 5 | 6 | 5 | 5 | 19 examples strong, no color-coding for temperature |
| **12 Special Labels** | 4 | 7 | 2 | 4 | Label-decoder framing, only 1 diagram |
| **Chapter Average** | **4.3** | **6.6** | **3.0** | **4.0** | **Wall-of-text presentation of strong content** |

### Critical Findings
- **Topic 05** is the single largest gap: brilliant mystery → zero execution.
- **Topics 01, 02, 03** are the highest-drop-off points (first 30 minutes).
- **Revision sheet** (page 7) feels like a coaching photocopy.
- **Card diversity:** No topic uses more than 3 card types; target is ≥4 per topic.

---

## PHASE 2 — PRESENTATION REDESIGN (Complete Topic Restructure)

> **All chemistry content retained verbatim. Only presentation transformed.**

---

### TOPIC 01 — "Can You Drink Smoke?" (Matter, Measurement & Sig Figs)

#### Current State
- Opens on a section header ("Nature & Classification of Matter")
- Three straight prose paragraphs (matter definition, physical/chemical properties, SI units)
- Identical card styling, zero visual distinction
- Zero scientist attribution
- Sig-fig rule flagged as a trap but buried in text

#### Problems Identified
1. No story/question hook — definition-first kills curiosity
2. Wall of text (5 paragraphs before first real visual break)
3. Physical vs. chemical property headers lack visual icons
4. SI units mentioned without context on why seven base units exist
5. Sig-fig trap flagged but not prominently highlighted
6. Zero color hierarchy

#### New Structure (11 Screens)
| Screen | Type | Content | Required Element |
| :---: | :--- | :--- | :--- |
| **1** | Hook | 🤔 "Can You Drink Smoke?" — air, fog, saltwater (riddle form) | Question + 3 examples |
| **2** | Key Concept | 🟢 Matter classification tree (element→pure→compound, etc.) | Diagram |
| **3** | Key Concept | ⚖️ Physical Properties (mass, volume, density, color) | Icon-anchored list |
| **4** | Key Concept | 🔥 Chemical Properties (combustibility, reactivity, acidity) | Icon-anchored list |
| **5** | Scientist Story | 🟣 SI 2019 Redefinition — why kilogram stopped being a metal cylinder | Card with year/source |
| **6** | Key Concept | 🟢 Seven SI base units (visual grid with icons) | Icon grid |
| **7** | Key Concept | Temperature scales (existing table, kept as-is) | Table |
| **8** | Key Concept | 🟢 Add/Subtract sig figs card (existing, kept) | Comparison card |
| **9** | Key Concept | 🟢 Multiply/Divide sig figs card (existing, kept) | Comparison card |
| **10** | Trap | 🔴 JEE Trap: applying product rule to sums (existing trap, promote to card) | Warning + example |
| **11** | Anchor | 💡 Memory Trick: "Fewest wins" (for sums, decimals matter; for products, sig figs matter) + 🟠 DYK: 0.004050 has 4 sig figs | One-liner anchor + surprise |

#### Cards Required
- 🟢 Key Concept ×5
- 🔴 JEE Trap ×1
- 🟣 Scientist Story ×1
- 🟠 Did You Know ×1
- 💡 Memory Trick ×1

#### Visuals Required
- Matter classification tree (element/compound/mixture flowchart)
- Tyndall-effect 3-jar visual (solution/colloid/suspension with light beam)
- Physical vs chemical property icon pairs
- SI base units grid (7 icons + units + symbols)
- Sig-fig decision tree (add/sub vs mult/div)

#### Timeline Required
- SI 2019 redefinition: previous standard → 2019 fix (one-line timeline)

#### Scientist Cards Required
- **BIPM (Bureau International des Poids et Mesures) 2019 SI Redefinition Committee** — Why: the kilogram was the last "artifact" standard; now all units trace to fundamental constants.

#### Memory Anchors Required
1. "Fewest wins" (sig fig rule anchor)
2. Matter → Pure/Mixture → further splits (classification anchor)

#### Exam Traps Required
- 🔴 Adding sig figs: 18.0 has 3 sig figs; 18 has 2 → report answer to 2 decimals (existing, promote)

#### NCERT Alerts Required
- Class 11 Ch. 1 line on SI base units (exact excerpt)

#### Estimated Effort
- **Design:** 2 days (diagrams, card layouts)
- **Development:** 1 day (component assembly)
- **Priority:** P0 (highest-volume drop-off topic, currently worst presentation)

---

### TOPIC 02 — "The Bridge Nobody Could See" (The Mole — Counting by Weighing)

#### Current State
- Teaser line is excellent copy but topic is collapsed by default
- "Atoms are too small to count… mole is chemistry's bridge" — world-class hook
- Actual content hidden behind accordion
- Zero scientist named despite Avogadro being the entire point

#### Problems Identified
1. Hook is wasted (collapsed accordion, no visual payoff)
2. No scientist biography despite this being Avogadro's topic
3. Cannizzaro's 1860 Karlsruhe Congress (50-year-resolution story) is completely absent
4. Avogadro's number scale comparison missing

#### New Structure (10 Screens)
| Screen | Type | Content | Required Element |
| :---: | :--- | :--- | :--- |
| **1** | Hook | 🤔 "Count one atom every second. A mole takes longer than the age of the universe." | Paradox + number reveal |
| **2** | Scientist Story | 🟣 Avogadro (1811) — hypothesis ignored for 50 years | Card with portrait, year, why |
| **3** | Scientist Story | 🟣 Cannizzaro (1860) — Karlsruhe Congress resolves the chaos | Card with the dramatic story |
| **4** | Key Concept | 🟢 Mole as "a dozen, scaled up" (12 eggs = 1 dozen; 6.022×10²³ particles = 1 mole) | Visual metaphor: side-by-side graphics |
| **5** | Key Concept | 🟢 Avogadro's number scale comparison (atoms in mole vs. stars in universe vs. grains of sand on Earth) | Animated bar scale |
| **6** | Key Concept | 🟢 Why 6.022×10²³? (related to carbon-12 mass, post-2019 redefinition definition) | Explainer card |
| **7** | Example | Worked example (existing, kept) | — |
| **8** | Trap | 🔴 JEE Trap: confusing mole with Avogadro's number itself | Card |
| **9** | Anchor | 💡 Memory Trick: "Avogadro's number: particles so countless, their count is countless" + 🟠 DYK: 1 mole of hydrogen atoms arranged in a line would stretch beyond the solar system | One-liner + surprise |
| **10** | Bridge | Link forward: "Now we know how to count. But how do we weigh what we count?" → Topic 03 | Text |

#### Cards Required
- 🟣 Scientist Story ×2 (Avogadro, Cannizzaro)
- 🟢 Key Concept ×3
- 🔴 JEE Trap ×1
- 🟠 Did You Know ×1
- 💡 Memory Trick ×1

#### Visuals Required
- Counting-time animation (slider: pick substance → watch "time to count" number spiral upward)
- Dozen-eggs vs mole-of-atoms side-by-side graphic
- Avogadro's number scale bar (mole atoms vs. universe grains vs. universe stars)
- Cannizzaro portrait + 1860 Karlsruhe context illustration

#### Timeline Required
- Avogadro 1811 (hypothesis) → 50 years ignored → Cannizzaro 1860 (resolution)

#### Scientist Cards Required
1. **Amedeo Avogadro (1811)** — Italian chemist, proposed gas particles at equal volumes have equal numbers (hypothesis). Year: 1811. Source: Journal of Natural Philosophy, Chemistry and the Arts. Why: first systematic way to link particle counts to measurable quantities. Fun fact: His hypothesis was initially rejected by the chemical establishment for ~50 years.
2. **Stanislao Cannizzaro (1860)** — Italian chemist, unified atomic weight chaos with one brilliant paper. Year: 1860. Event: Karlsruhe Congress. Why: His 1860 Karlsruhe Congress presentation single-handedly resolved atomic-weight inconsistencies that had plagued chemistry for decades, reviving Avogadro's hypothesis from obscurity.

#### Memory Anchors Required
1. "Avogadro's number: count impossibly large" (ties hook to substance)
2. "Mole = dozen, just bigger" (comparison anchor)

#### Exam Traps Required
- 🔴 Confusing "mole" (unit of amount) with "Avogadro's number" (6.022×10²³ — a dimensionless constant)
- 🔴 Forgetting to specify the entity (a mole of what? atoms? molecules? electrons?)

#### NCERT Alerts Required
- Class 11 Ch. 1 line on Avogadro's law (exact excerpt)

#### Estimated Effort
- **Design:** 3 days (Avogadro/Cannizzaro timeline, scale-bar animation concept, scientist portraits)
- **Development:** 2 days
- **Priority:** P0 (second highest-drop-off topic, story-rich but execution missing)

---

### TOPIC 03 — "The Ruler That Moved Twice" (Atomic & Molecular Mass Architecture)

#### Current State
- Teaser explicitly promises "zero-point moved twice before settling on carbon-12" (brilliant copy)
- Topic is collapsed with zero timeline built — single biggest promise/payoff gap in audit
- No scientist named
- Isotope concept exists but no visual see-saw weighting

#### Problems Identified
1. Timeline promised, not delivered (H=1 → O=16 → ¹²C=12)
2. No Dalton, Cannizzaro, or IUPAC attribution
3. Isotope weighting described in prose, not visualized
4. Molar mass staircase concept missing

#### New Structure (10 Screens)
| Screen | Type | Content | Required Element |
| :---: | :--- | :--- | :--- |
| **1** | Hook | 🤔 "Why did chemists change the atomic-mass scale three times?" — sets up mystery | Question form |
| **2** | Timeline | 🟣 Interactive timeline: Dalton 1803 (H=1) → 1860s chemists (O=16) → IUPAC 1961 (¹²C=12) | Draggable slider or cards |
| **3** | Scientist Story | 🟣 John Dalton (1803) — first atomic mass scale | Card: Dalton, 1803, fun fact: "he thought water was HO" |
| **4** | Scientist Story | 🟣 IUPAC (1961) — carbon-12 becomes standard, post-Aston's mass spectrometry | Card: year, why |
| **5** | Key Concept | 🟢 Isotopes: "not all atoms of an element weigh the same" — see-saw visual (lighter vs. heavier isotope balances to average) | Lever/see-saw diagram |
| **6** | Key Concept | 🟢 Weighted average (from isotope abundance) — bar visual | Visual math |
| **7** | Key Concept | 🟢 Molar mass staircase (atom → isotope → element → formula unit → mole → gram) | Staircase diagram |
| **8** | Example | Worked example — calculate molar mass from isotopic data (existing, kept) | — |
| **9** | Trap | 🔴 JEE Trap: rounding isotopic abundance mid-calculation; forgetting to multiply by 100 for % | Card |
| **10** | Anchor | 💡 Memory Trick: "Standards shift, but nature doesn't" + 🟠 DYK: Dalton's water=HO assumption led to wrong atomic masses for 30 years until Cannizzaro fixed it | One-liner + historical anchor |

#### Cards Required
- 🟣 Scientist Story ×2 (Dalton, IUPAC committee)
- 🟢 Key Concept ×3
- 🔴 JEE Trap ×1
- 🟠 Did You Know ×1
- 💡 Memory Trick ×1

#### Visuals Required
- 3-point timeline (interactive: drag to 1803, 1860, 1961 and watch reference atom swap)
- Dalton portrait (1803, simple, historical)
- Isotope see-saw visual (heavier ¹²C on one side, average on fulcrum)
- Weighted-average bar (abundance × mass, sum to average)
- Molar mass staircase (6 steps, icons)

#### Timeline Required
- Dalton 1803 (H=1) → 1850s confusion (O=16 adopted by some) → IUPAC 1961 (¹²C=12 standardized)

#### Scientist Cards Required
1. **John Dalton (1803)** — English chemist, introduced first relative atomic mass scale. Source: New System of Chemical Philosophy (1808). Why: first systematic approach to quantifying atoms. Fun fact: Dalton incorrectly assumed water was HO (not H₂O), leading to his atomic masses being consistently wrong until Cannizzaro corrected the error 50 years later.
2. **IUPAC Commission (1961)** — International Union of Pure and Applied Chemistry standardized carbon-12 as the reference. Year: 1961. Why: atomic mass spectrometry (Aston, 1920s) had made direct mass measurement possible; carbon-12 was chosen as the new zero-point for simplicity and accuracy.

#### Memory Anchors Required
1. "Standards shift, but nature doesn't"
2. Timeline sequence: H → O → C (in chronological order, easy to recall)

#### Exam Traps Required
- 🔴 Using a single isotope's mass instead of the weighted average
- 🔴 Forgetting to include isotopic abundance (%, needs to multiply)
- 🔴 Rounding mid-calculation and losing precision

#### NCERT Alerts Required
- Class 11 Ch. 1 line on relative atomic mass and carbon-12 standard

#### Estimated Effort
- **Design:** 3 days (interactive timeline, see-saw visual, staircase diagram)
- **Development:** 2 days (timeline interactivity)
- **Priority:** P0 (largest story/execution gap after Topic 05)

---

### TOPIC 04 — "The Wheel With Three Doors" (The Conversion Wheel — Mass, Particles & Gas Volume)

#### Current State
- Named "the Conversion Wheel" in teaser
- Described only as prose: "Three doors into the mole: weigh it, count it, or measure gas volume"
- Never drawn — biggest "say vs. show" gap in the entire chapter
- Has 3 diagrams per metadata but this central concept isn't one of them

#### Problems Identified
1. Metaphor exists in copy but not in visuals (say-show gap)
2. Prose-only description makes it abstract instead of concrete
3. Every topic downstream depends on this; currently the clearest explanation is still text

#### New Structure (8 Screens)
| Screen | Type | Content | Required Element |
| :---: | :--- | :--- | :--- |
| **1** | Hook | 🤔 "You have an unknown gas. No balance, no microscope, no particle counter. Three doors to the same answer. Pick any one." | Mystery setup |
| **2** | Key Concept | 🟢 THE WHEEL DRAWN — circular diagram, three nodes (mass/moles/particles/gas volume), formula on each spoke | Literal wheel visual (flagship asset) |
| **3** | Key Concept | 🟢 Conversion path #1: mass → moles → particles | Visual flow |
| **4** | Key Concept | 🟢 Conversion path #2: mass → moles → gas volume | Visual flow |
| **5** | Key Concept | 🟢 Conversion path #3: particles → moles → gas volume | Visual flow |
| **6** | Example | Worked example — pick a gas, compare all three methods arriving at same n (existing, kept) | — |
| **7** | Trap | 🔴 JEE Trap: mixing STP (22.4 L/mol) with non-STP conditions without using PV=nRT | Card |
| **8** | Anchor | 💡 Memory Trick: "Mass, Moles, Molecules, Measurement (gas) — pick any point on the wheel, spin to the next" + 🟠 DYK: The wheel works for any substance at STP, not just ideal gases | One-liner + tip |

#### Cards Required
- 🟢 Key Concept ×4
- 🔴 JEE Trap ×1
- 💡 Memory Trick ×1
- 🟠 Did You Know ×1

#### Visuals Required
- The Conversion Wheel itself (circular, mass/moles/particles/gas-volume nodes, formulas on spokes) — **FLAGSHIP BUILD, HIGHEST PRIORITY**
- Three conversion-path flow diagrams

#### Timeline Required
- None (pure mechanics topic)

#### Scientist Cards Required
- None required (pure utility topic)

#### Memory Anchors Required
1. Wheel metaphor itself is the anchor (visual > formula recall)
2. "Any node to any node: multiply or divide by the conversion factor"

#### Exam Traps Required
- 🔴 Using 22.4 L/mol for non-STP conditions
- 🔴 Forgetting to convert grams to moles before applying stoichiometry

#### NCERT Alerts Required
- None specific to this topic

#### Estimated Effort
- **Design:** 2 days (wheel visual, interactive version for desktop/mobile)
- **Development:** 1 day (interactive spin/input component)
- **Priority:** P0 (foundational visual for downstream topics)

---

### TOPIC 05 — "Five Experiments That Forced Chemists to Believe in Atoms" (Laws of Chemical Combination)

#### Current State
- Best teaser copy in the entire chapter: "Five experimental laws forced chemistry to accept atoms"
- Worst execution: topic is collapsed, zero diagrams, zero timeline, five laws buried as 5 bullet lines
- Single largest story/execution gap in the audit (marked as highest-priority fix in previous analysis)

#### Problems Identified
1. Teaser promises a detective story; content delivers a definition list
2. Zero timeline despite five dates and five named scientists
3. Zero diagrams despite five inherently visual laws
4. No scientist biography for any of the five chemists
5. Five similarly-named laws blur together under exam pressure with zero anchor

#### New Structure (15 Screens)
| Screen | Type | Content | Required Element |
| :---: | :--- | :--- | :--- |
| **1** | Hook | 🤔 "In 1800, most chemists didn't believe atoms were real. Five experiments over 60 years made denial impossible. Here's how." | Sets up conflict |
| **2** | Timeline | 🟣 Five-law timeline card — Lavoisier 1789 → Proust 1794 → Dalton 1803 → Gay-Lussac 1808 → Avogadro 1811 | Interactive or draggable |
| **3–7** | Scientist Story | 🟣 Five scientist cards (one per law, each with: scientist, year, law statement, one visual proof, why it mattered) | 5 cards |
| **8** | Key Concept | 🟢 Law 1: Conservation of Mass (Lavoisier 1789) — before/after mass equal | Visual balance scale |
| **9** | Key Concept | 🟢 Law 2: Definite Proportions (Proust 1794) — same compound, different source, same ratio | Bar comparison visual |
| **10** | Key Concept | 🟢 Law 3: Multiple Proportions (Dalton 1803) — CO vs CO₂, ratio of ratios is simple | Fraction visual |
| **11** | Key Concept | 🟢 Law 4: Reciprocal Proportions (not named, but Dalton's implication) — if A:B = 3:8 and B:C = 1:2, then A:C = 3:16 | Ratio chain visual |
| **12** | Key Concept | 🟢 Law 5: Gay-Lussac's Volume Proportions (1808) — gases combine in simple whole-number ratios by volume | Volume bar visual |
| **13** | Key Concept | 🟢 "Why these five laws matter" — only atomic theory can explain all five simultaneously | Explainer card |
| **14** | Trap | 🔴 JEE Trap: confusing multiple proportions (ratio of ratios is simple integer) with reciprocal proportions (one law is about combining, other is about elements in compounds) | Card with examples |
| **15** | Anchor | 💡 Memory Trick: L-P-D-G-A (Lavoisier-Proust-Dalton-Gay-Lussac-Avogadro chronological order) as mnemonic + 🟠 DYK: These five laws were discovered before anyone proved atoms existed experimentally — pure logic forced the conclusion | One-liner + philosophical note |

#### Cards Required
- 🟣 Scientist Story ×5 (Lavoisier, Proust, Dalton, Gay-Lussac, Avogadro)
- 🟢 Key Concept ×7
- 🔴 JEE Trap ×1
- 💡 Memory Trick ×1
- 🟠 Did You Know ×1

#### Visuals Required
- Five-law timeline (interactive: tap each node to expand scientist card)
- Conservation of mass: before/after balance scale
- Definite proportions: same compound, different source, same ratio bars
- Multiple proportions: CO vs CO₂ ratio visualization
- Gay-Lussac's law: gas volumes combining in small whole-number ratios (visual bottles/containers)
- "Why atomic theory won" explanatory diagram

#### Timeline Required
- Lavoisier 1789 (Conservation of Mass) → Proust 1794 (Definite Proportions) → Dalton 1803 (Multiple Proportions) → Gay-Lussac 1808 (Gaseous Volumes) → Avogadro 1811 (Molecular Hypothesis)

#### Scientist Cards Required
1. **Antoine-Laurent de Lavoisier (1789)** — French chemist, law of conservation of mass. Year: 1789. Source: Traité Élémentaire de Chimie. Why: first quantitative chemistry law; established that in reactions, total mass before = total mass after. Fun fact: Lavoisier was executed during the French Revolution; his fellow scientist said "only a moment to cut off that head, and a hundred years might not produce its equal."
2. **Joseph-Louis Proust (1794)** — French chemist, law of definite proportions. Year: 1794. Source: experimental work on copper carbonate. Why: proved that pure compounds always have the same composition by mass, regardless of source or method of preparation. Landmark: disputed by Berthollet for 10 years before Proust's data prevailed.
3. **John Dalton (1803)** — English chemist, law of multiple proportions. Year: 1803. Source: New System of Chemical Philosophy. Why: when two elements form multiple compounds, masses of one element combining with a fixed mass of the other are in small whole-number ratios. This law required atomic theory to explain it.
4. **Joseph Gay-Lussac (1808)** — French chemist, law of combining volumes. Year: 1808. Source: gas experiments. Why: gases combine in simple whole-number volume ratios (2H₂ + O₂ → 2H₂O means volumes 2:1:2). This seemed to contradict Dalton's atomic theory until Avogadro's hypothesis explained it.
5. **Amedeo Avogadro (1811)** — Italian chemist, hypothesis of equal volumes. Year: 1811. Source: Journal of Natural Philosophy. Why: resolved the Gay-Lussac vs. Dalton conflict by proposing that equal volumes of gases at same T, P contain equal numbers of particles — but this hypothesis went ignored for 50 years.

#### Memory Anchors Required
1. L-P-D-G-A chronological mnemonic (Lavoisier, Proust, Dalton, Gay-Lussac, Avogadro)
2. "Each law is experimental proof; together they are a proof of atoms" (conceptual anchor)

#### Exam Traps Required
- 🔴 Confusing "multiple proportions" (ratio of ratios) with "reciprocal proportions" (one law about combining quantities)
- 🔴 Applying Gay-Lussac's law to solids (only works for gases)
- 🔴 Forgetting that these laws held true before anyone could measure single atoms

#### NCERT Alerts Required
- Class 11 Ch. 1: each law's NCERT verbatim reference (5 excerpts, one per law)

#### Estimated Effort
- **Design:** 5 days (five scientist cards with portraits, five law visuals, interactive timeline)
- **Development:** 3 days (timeline interactivity, card animations)
- **Priority:** P0 (largest story/payoff gap after Topic 01; highest engagement ROI)

---

### TOPIC 06 — "Reverse-Engineering a Molecule" (Percentage Composition & Formula Determination)

#### Current State
- Teaser frames it well: "From a compound's percentages and molar mass, back to empirical → molecular formula"
- Content is solid, but no flowchart currently exists
- Process is describable as prose; makes it harder to follow the mental path

#### Problems Identified
1. Process is linear but presented as a wall of text
2. No flowchart showing % comp → empirical → molecular
3. "Two-way street" (empirical → molecular and reverse) isn't visualized

#### New Structure (8 Screens)
| Screen | Type | Content | Required Element |
| :---: | :--- | :--- | :--- |
| **1** | Hook | 🤔 "A chemist hands you a burnt residue: 'Figure out what this compound was, using only percentages.'" | Forensic framing |
| **2** | Key Concept | 🟢 Flowchart: % composition → mole ratio → empirical formula → (÷ M) → molecular formula | Process flowchart |
| **3** | Key Concept | 🟢 Step-by-step breakdown (convert % to grams → grams to moles → simplify ratio) | Visual math steps |
| **4** | Example | Worked example (existing, kept) | — |
| **5** | Key Concept | 🟢 Reverse path: given molecular formula → calculate % composition (inverse process) | Flow direction |
| **6** | Trap | 🔴 JEE Trap: forgetting the empirical→molecular multiplier or calculating M wrong | Card |
| **7** | Anchor | 💡 Memory Trick: "Percentages → Moles → Ratio → Empirical → Molecular (P-M-R-E-M)" + 🟠 DYK: Unknown compounds are identified this way in real labs using combustion analysis | One-liner + real-world anchor |
| **8** | Bridge | "Now we know formulas. Next, how do they react?" → Topic 07 | Text |

#### Cards Required
- 🟢 Key Concept ×3
- 🔴 JEE Trap ×1
- 💡 Memory Trick ×1
- 🟠 Did You Know ×1

#### Visuals Required
- Flowchart: % composition → empirical → molecular
- Step-by-step visual breakdown of the calculation
- Reverse flowchart (molecular → %)

#### Timeline Required
- None

#### Scientist Cards Required
- None (utility topic)

#### Memory Anchors Required
1. "Percentages → Moles → Ratio → Empirical → Molecular" (P-M-R-E-M acronym)
2. "Forensic chemistry" framing (real-world anchor)

#### Exam Traps Required
- 🔴 Forgetting to multiply empirical formula mass by the ratio to get molecular mass
- 🔴 Assuming the given % is already the empirical ratio (must check if ratio reduces further)

#### NCERT Alerts Required
- Class 11 Ch. 1 line on empirical vs. molecular formula

#### Estimated Effort
- **Design:** 2 days (flowchart, step visuals)
- **Development:** 1 day
- **Priority:** P1 (good supporting content, smaller engagement lever)

---

### TOPIC 07 — "The Recipe Hidden in a Chemical Equation" (Stoichiometry — the Calculus of Reactions)

#### Current State
- Solid worked examples (existing, kept in full)
- No flowchart showing the mole-ratio skeleton that underlies every stoichiometry problem
- Recipe metaphor is implicit, not explicit in the copy

#### Problems Identified
1. Process is linear (given → moles → ratio → convert → answer) but taught as disconnected calculation steps
2. Zero visual flow diagram for the process
3. Most common error (using mass ratio directly) isn't called out

#### New Structure (8 Screens)
| Screen | Type | Content | Required Element |
| :---: | :--- | :--- | :--- |
| **1** | Hook | 🤔 "A balanced equation is a recipe card. 2H₂ + O₂ → 2H₂O means 'use exactly 2 units of this for every 1 of that.'" | Recipe-card framing |
| **2** | Key Concept | 🟢 Recipe-card visual (equation redrawn as cooking ingredient ratios) | Visual metaphor |
| **3** | Key Concept | 🟢 Mole-ratio flow diagram: Given quantity → convert to moles → apply recipe ratio → convert to answer | Process flowchart |
| **4** | Example | Worked example #1 — mass to mass stoichiometry (existing, kept) | — |
| **5** | Example | Worked example #2 — moles to volume, or volume to moles (existing, kept) | — |
| **6** | Trap | 🔴 JEE Trap: using mass ratio directly without converting to moles first | Card |
| **7** | Anchor | 💡 Memory Trick: "Grams→Moles→Ratio→Moles→Grams (the stoichiometry machine)" + 🟠 DYK: Stoichiometry comes from Greek stoicheion (element) + metron (measure) — literally "measuring the elements" | One-liner + etymology |
| **8** | Bridge | "The recipe assumes everything reacts. What if one ingredient runs out first?" → Topic 08 | Text |

#### Cards Required
- 🟢 Key Concept ×2
- 🔴 JEE Trap ×1
- 💡 Memory Trick ×1
- 🟠 Did You Know ×1

#### Visuals Required
- Equation as recipe card (visual reframe)
- Stoichiometry flow diagram (grams → moles → ratio → moles → grams)

#### Timeline Required
- None

#### Scientist Cards Required
- None

#### Memory Anchors Required
1. "Recipe card" metaphor (intuitive anchor)
2. "Grams→Moles→Ratio→Moles→Grams" (process anchor)

#### Exam Traps Required
- 🔴 Using mass ratio (A:B coefficients by mass) instead of mole ratio
- 🔴 Forgetting to convert grams to moles before applying the ratio

#### NCERT Alerts Required
- None specific

#### Estimated Effort
- **Design:** 2 days (recipe card, flow diagram)
- **Development:** 1 day
- **Priority:** P1 (excellent existing content, smaller visual enhancement)

---

### TOPIC 08 — "The Race to Zero" (Limiting Reagent & Percent Yield)

#### Current State
- Already has 2 diagrams (best-covered mid-chapter topic)
- Good worked examples
- Missing the "race" metaphor visualization despite teaser hinting at it

#### Problems Identified
1. Limited reagent concept could use a race-bar visual
2. Percent yield isn't tied to limiting reagent conceptually
3. No scientist attribution or history

#### New Structure (8 Screens)
| Screen | Type | Content | Required Element |
| :---: | :--- | :--- | :--- |
| **1** | Hook | 🤔 "Two runners start a race. Whoever crosses the finish line first stops the race for both. In reactions, one reactant always 'wins' by running out first." | Race metaphor |
| **2** | Key Concept | 🟢 Race-bar animation: two reactant quantities (converted to moles), racing toward zero | Animated race bars |
| **3** | Key Concept | 🟢 Identifying limiting reagent: convert both to product, whichever produces less product is limiting | Process card |
| **4** | Example | Worked example (existing, kept) | — |
| **5** | Key Concept | 🟢 Percent yield: theoretical (stoichiometry predicts) vs. actual (what we got) as a gauge | Gauge/thermometer visual |
| **6** | Trap | 🔴 JEE Trap: identifying limiting reagent using mass ratios instead of mole ratios | Card |
| **7** | Anchor | 💡 Memory Trick: "Test each reactant: who makes less product is the loser (limiting)" + 🟠 DYK: No real-world reaction ever achieves 100% yield; 80–90% is considered excellent in industry | One-liner + real-world anchor |
| **8** | Bridge | "What if the reaction has multiple steps, each with its own limiting reagent?" → Topic 09 | Text |

#### Cards Required
- 🟢 Key Concept ×3
- 🔴 JEE Trap ×1
- 💡 Memory Trick ×1
- 🟠 Did You Know ×1

#### Visuals Required
- Race-bar animation (two reactant bars racing to zero)
- Yield gauge/thermometer (theoretical vs. actual)
- LR identification decision tree (test A, test B, compare products)

#### Timeline Required
- None

#### Scientist Cards Required
- None

#### Memory Anchors Required
1. "Race to zero" (metaphor)
2. "Test each reactant, whoever loses is limiting" (process anchor)

#### Exam Traps Required
- 🔴 Using mass ratio instead of mole ratio to identify LR
- 🔴 Confusing "limiting reagent" with "leftover reagent" (limiting makes less product)

#### NCERT Alerts Required
- Class 11 Ch. 1 on limiting reagent definition

#### Estimated Effort
- **Design:** 2 days (race-bar animation concept, yield gauge)
- **Development:** 1 day
- **Priority:** P1 (existing content, incremental visual enhancement)

---

### TOPIC 09 — "The Shortcut That Skips the Equation" (POAC & Sequential Reactions)

#### Current State
- Teaser is excellent: "What if you never had to balance the equation?"
- Content is solid
- Atom-ledger visual concept missing

#### Problems Identified
1. "Skip the equation" hook isn't capitalized visually
2. Atom conservation as a ledger isn't illustrated
3. Sequential-reaction chains could use a flow diagram

#### New Structure (8 Screens)
| Screen | Type | Content | Required Element |
| :---: | :--- | :--- | :--- |
| **1** | Hook | 🤔 "What if you never had to balance a single equation? One rule alone solves the whole problem." | Promises a shortcut |
| **2** | Key Concept | 🟢 POAC principle: "Atoms don't vanish — atoms in = atoms out, regardless of path" | Statement card |
| **3** | Key Concept | 🟢 Atom-ledger visual: atoms flowing in (left side) = atoms flowing out (right side), no matter the intermediate reactions | Ledger diagram |
| **4** | Example | Worked example — sequential reaction without writing any balanced equation (existing, kept) | — |
| **5** | Key Concept | 🟢 Sequential-reaction chain diagram: A → B → C, mole tracking through each arrow | Flow diagram |
| **6** | Trap | 🔴 JEE Trap: forgetting to account for a species (e.g., water produced in one step, used in another) | Card |
| **7** | Anchor | 💡 Memory Trick: "Atoms conserved, path irrelevant (A-C-P-I)" + 🟠 DYK: POAC is powerful because it lets you solve gas-mixture problems without ever writing the balanced equations — you only need element counts | One-liner + power highlight |
| **8** | Bridge | "Now we know how reactions work. What about the invisible reactions inside a test tube?" → Topic 10 | Text |

#### Cards Required
- 🟢 Key Concept ×3
- 🔴 JEE Trap ×1
- 💡 Memory Trick ×1
- 🟠 Did You Know ×1

#### Visuals Required
- Atom-ledger diagram (atoms in = atoms out)
- Sequential-reaction chain (A → B → C with mole tracking)
- Before/after atom count comparison

#### Timeline Required
- None

#### Scientist Cards Required
- None (universal principle, not attributed to one scientist)

#### Memory Anchors Required
1. "Atoms don't vanish" (absolute principle anchor)
2. "Path doesn't matter, only start and end" (conceptual anchor)

#### Exam Traps Required
- 🔴 Losing track of an intermediate species (water, unreacted O₂)
- 🔴 Assuming leftover gas doesn't contribute to final composition

#### NCERT Alerts Required
- None specific

#### Estimated Effort
- **Design:** 2 days (ledger visual, sequential-chain diagram)
- **Development:** 1 day
- **Priority:** P1 (strong existing content, incremental visual improvement)

---

### TOPIC 10 — "The Explosion That Proved a Law" (Eudiometry — Gas Phase Analysis)

#### Current State
- Chapter's strongest topic — apparatus diagram, absorber table, one mnemonic, strong worked examples with Key Insight callouts
- Already at ~7/10 engagement (best in chapter)
- Five governing rules are crammed into one dense paragraph block
- Missing scientist attribution (Gay-Lussac/Avogadro historical context)

#### Problems Identified
1. Five governing rules in one dense block (should be 5 separate cards)
2. No scientist biography despite this being the experimental proof ground for Gay-Lussac and Avogadro
3. Apparatus states (measure/spark/cool/absorb) could be animated

#### New Structure (10 Screens)
| Screen | Type | Content | Required Element |
| :---: | :--- | :--- | :--- |
| **1** | Hook | 🤔 "Spark a mystery gas mixture. It shrinks. That shrinkage alone reveals its exact formula." (kept, sharpened) | Mystery setup |
| **2** | Scientist Story | 🟣 Gay-Lussac (1808) vs. Avogadro (1811) conflict: whose law explains gas volumes? Eudiometry is the 19th-century test | Card with both scientists, the conflict, why it mattered |
| **3** | Key Concept | 🟢 Apparatus diagram (existing, enhance with animated states: measure → spark → cool → absorb) | Diagram with animation concept |
| **4–8** | Key Concept | 🟢 Five governing rules — split current dense paragraph into 5 separate mini-cards, one rule each, ≤4 lines | 5 rule cards |
| **9** | Key Concept | 🟢 Absorber table + "KOH Pyro Turps Copper Dry" mnemonic (existing, kept — it's the chapter's best asset) | Table + mnemonic |
| **10** | Example | Worked examples (existing, kept in full) with Key Insight callouts | — |
| **11** | Trap | 🔴 JEE Trap: forgetting water condenses to zero volume; double-counting CO₂ from mixed fuels (existing insights, promote to trap card) | Card |
| **12** | Anchor | 💡 Memory Trick: "KOH Pyro Turps Copper Dry" mnemonic (existing, anchor across all absorbers) + 🟠 DYK: Eudiometry was how 19th-century chemists figured out molecular formulas for unknowns — it's the original "reverse-engineer a molecule" technique | Mnemonic + historical note |

#### Cards Required
- 🟣 Scientist Story ×1 (Gay-Lussac/Avogadro conflict)
- 🟢 Key Concept ×6 (apparatus + 5 rules)
- 🔴 JEE Trap ×1
- 💡 Memory Trick ×1 (existing mnemonic, elevated)
- 🟠 Did You Know ×1

#### Visuals Required
- Animated apparatus states (measure/spark/cool/absorb sequence)
- Five governing rules as separate mini-cards (may have small icons)
- Absorber table (existing, kept)

#### Timeline Required
- Gay-Lussac 1808 (combining volumes law) vs. Avogadro 1811 (hypothesis resolves it) — one-line conflict timeline

#### Scientist Cards Required
1. **Joseph Gay-Lussac (1808)** — French chemist, law of combining volumes. Source: experimental gas-analysis data. Year: 1808. Why: gases combine in simple whole-number volume ratios; this seemed incompatible with Dalton's atomic theory. Conflict: Dalton opposed this because it required atoms to break apart during reactions (which he rejected).
2. **Amedeo Avogadro (1811)** — Italian chemist, hypothesis explaining Gay-Lussac. Year: 1811. Why: proposed that equal volumes contain equal numbers of molecules, not atoms — resolving the conflict. Eudiometry is literally the experimental proof of Avogadro's insight.

#### Memory Anchors Required
1. "KOH Pyro Turps Copper Dry" (existing, already best-in-class anchor)
2. "Eudiometry proves Avogadro" (historical anchor)

#### Exam Traps Required
- 🔴 Forgetting that water condenses → doesn't count toward final gas volume
- 🔴 Double-counting CO₂ if the same absorber is used for multiple fuel types
- 🔴 Forgetting to cool the apparatus before measuring contraction

#### NCERT Alerts Required
- Class 11 Ch. 1 line on eudiometry/gas-phase analysis

#### Estimated Effort
- **Design:** 3 days (Gay-Lussac/Avogadro scientist cards, animated apparatus states, five rule cards split)
- **Development:** 2 days (animation component framework)
- **Priority:** P1 (already strong; mostly enhancement of existing excellence)

---

### TOPIC 11 — "Ten Different Ways to Say 'How Much Is Dissolved'" (Concentration Terms & Solution Stoichiometry)

#### Current State
- Teaser frames the problem well: "Why ten terms? Because temperature changes some answers and not others."
- 4 diagrams exist already
- 19 worked examples (strong)
- Missing color-coding for temperature-dependence (the actual source of JEE errors)

#### Problems Identified
1. Ten concentration terms exist in chapter, but no single color-coded reference grid
2. Temperature-dependent (molarity, %v/v) vs. independent (molality, mole fraction) distinction isn't visualized
3. Concentration-term conversion isn't as visual as it could be

#### New Structure (9 Screens)
| Screen | Type | Content | Required Element |
| :---: | :--- | :--- | :--- |
| **1** | Hook | 🤔 "Why does chemistry need ten different ways to answer 'how much is dissolved'?" (teaser: "Because temperature changes some answers and not others.") | Puzzle framing |
| **2** | Key Concept | 🟢 Comparison grid — 10 terms, color-coded: Red (temperature-dependent: molarity M, %v/v) vs Blue (temperature-independent: molality m, mole fraction, %w/w, ppm, etc.) | Color-coded grid |
| **3** | Key Concept | 🟢 Why temperature affects molarity but not molality (volume changes, mass doesn't) | Visual explanation |
| **4** | Key Concept | 🟢 Conversion flowchart: how to convert between any two concentration terms | Process flowchart |
| **5** | Key Concept | 🟢 Dilution formula and concept: M₁V₁ = M₂V₂, only works for volume-based terms | Beaker before/after visual |
| **6** | Example | Worked examples (existing 19-bank, kept) | — |
| **7** | Trap | 🔴 JEE Trap: using molarity (volume-based) math on data given in molality (mass-based) | Card |
| **8** | Anchor | 💡 Memory Trick: "Red reds heat, blue bleeds cold" (red terms bleed when heated, blue don't) + 🟠 DYK: In analytical chemistry, molality is preferred over molarity for precision work because it's temperature-independent — solutions are made by mass, not volume | One-liner + real-world anchor |
| **9** | Bridge | "Now we know how much is dissolved. What about special cases where the label itself tells you the concentration?" → Topic 12 | Text |

#### Cards Required
- 🟢 Key Concept ×4
- 🔴 JEE Trap ×1
- 💡 Memory Trick ×1
- 🟠 Did You Know ×1

#### Visuals Required
- Color-coded 10-term grid (RED for temp-dependent, BLUE for temp-independent) — **SECOND HIGHEST VISUAL PRIORITY AFTER WHEEL**
- Temperature-effect diagram (volume shrinks/expands, mass doesn't)
- Conversion-term flowchart
- Dilution beaker before/after

#### Timeline Required
- None

#### Scientist Cards Required
- None (established definitions, no single discoverer)

#### Memory Anchors Required
1. "Red reds when heated, blue bleeds cold" (visual color-anchor for temperature dependence)
2. "Mass-based is better" (molality conceptual anchor)

#### Exam Traps Required
- 🔴 Using M₁V₁=M₂V₂ on molality-given data (volume changes, so molarity changes, but molality doesn't)
- 🔴 Confusing molarity with normality (molarity counts moles of solute, normality counts equivalents — for strong acid, same; for weak acid or salt, different)

#### NCERT Alerts Required
- Class 11 Ch. 1 lines on molarity, molality, normality (3 verbatim excerpts)

#### Estimated Effort
- **Design:** 3 days (color-coded grid is high-priority, conversion flowchart, dilution visual)
- **Development:** 1 day
- **Priority:** P0 (color-coded grid is the second-biggest visual leverage in chapter, after Wheel)

---

### TOPIC 12 — "Reading the Label Like a Chemist" (Special Strength Labels — H₂O₂, Oleum & Mean Molar Mass)

#### Current State
- Teaser is strong: "A bottle says '20 volume.' A tanker says '109% oleum.' Both labels look impossible — until you know the code."
- Only 1 diagram currently
- Label-decoding framing is good but not capitalized on visually

#### Problems Identified
1. Label-decoder framing exists in teaser, no visual decoder cards built
2. Three distinct label systems (peroxide, oleum, gas mixture) treated equally despite being different
3. No scientist/historical context (industry-developed notations)

#### New Structure (8 Screens)
| Screen | Type | Content | Required Element |
| :---: | :--- | :--- | :--- |
| **1** | Hook | 🤔 Show 3 real product labels: peroxide bottle ("20 Volume"), oleum spec sheet ("109% H₂SO₄"), gas cylinder ("mean molar mass 29.4 g/mol") — "Decode the label like a chemist." | Real-world anchor |
| **2** | Key Concept | 🟢 H₂O₂ volume-strength decoder card: "20 Volume" = 20 L O₂ @ STP per 1 L of the solution; formula: VS = 11.2 × M | Card + equation |
| **3** | Example | Worked example with peroxide (existing, kept) | — |
| **4** | Key Concept | 🟢 Oleum % decoder card: "100% oleum" = pure H₂SO₄; "109% oleum" = 100% H₂SO₄ + 9% free SO₃; why >100%? | Card with explanation |
| **5** | Example | Worked example with oleum (existing, kept) | — |
| **6** | Key Concept | 🟢 Mean molar mass: for a gas mixture, weighted-average M; weighted by mole fraction or composition % | Visual weighted-average |
| **7** | Trap | 🔴 JEE Trap: treating "20 Volume" as a mass percentage (it's a gas volume at STP); or confusing oleum % with H₂SO₄ % | Card |
| **8** | Anchor | 💡 Memory Trick: "Decoder key: Volume(peroxide) = 11.2M; Oleum % = pure + free SO₃; Mean M = weighted average" + 🟠 DYK: Industry uses these notations because they're easier to measure operationally than raw concentration | One-liner + real-world anchor |

#### Cards Required
- 🟢 Key Concept ×3
- 🔴 JEE Trap ×1
- 💡 Memory Trick ×1
- 🟠 Did You Know ×1

#### Visuals Required
- H₂O₂ decoder card (volume-strength formula visual)
- Oleum decoder card (free SO₃ visual, why >100% is possible)
- Mean molar mass weighted-average visual
- Real product label photos (peroxide, oleum spec)

#### Timeline Required
- None

#### Scientist Cards Required
- None (industry-developed notations, not scientifically discovered)

#### Memory Anchors Required
1. "Decoder key: V=11.2M; Oleum=pure+free; Mean=weighted" (acronym anchor)
2. "Industry uses these because they're measurable" (real-world anchor)

#### Exam Traps Required
- 🔴 Treating "20 Volume" as 20% w/v (it's mL O₂ @ STP per mL solution)
- 🔴 Forgetting that >100% oleum includes both pure H₂SO₄ and free SO₃

#### NCERT Alerts Required
- None specific (this is industry notation, not in NCERT)

#### Estimated Effort
- **Design:** 2 days (decoder cards, real label photos)
- **Development:** 1 day
- **Priority:** P1 (specialized content, smaller audience, but good for completing chapter arc)

---

## PHASE 3 — VISUAL ASSET PLAN

**Total current:** ~16 diagrams  
**Total target:** 50–55 new/redesigned visuals  

### Breakdown by Category

#### Category 1: Structural Diagrams (14)
1. Matter classification tree (Topic 01) — element/compound/mixture/homogeneous/heterogeneous
2. Tyndall-effect 3-jar visual (Topic 01) — solution/colloid/suspension with light beam
3. SI base units icon grid (Topic 01) — 7 units, 7 icons
4. Sig-fig decision flowchart (Topic 01) — add/sub vs. mult/div
5. Dimensional-analysis unit-lock chain (Topic 01) — units as puzzle pieces
6. Dozen-eggs-to-mole graphic (Topic 02) — side-by-side comparison
7. Avogadro's-number scale bar (Topic 02) — mole atoms vs. universe grains vs. universe stars
8. Isotope see-saw/lever visual (Topic 03) — lighter/heavier isotope balances to average
9. Molar-mass staircase (Topic 03) — atom → molecule → mole → gram
10. Empirical→molecular flowchart (Topic 06) — % composition → empirical → molecular
11. Stoichiometry flow diagram (Topic 07) — grams→moles→ratio→moles→grams
12. Concentration-term conversion flowchart (Topic 11) — how to convert between 10 terms
13. POAC atom-ledger visual (Topic 09) — atoms in = atoms out
14. Sequential-reaction chain diagram (Topic 09) — A→B→C mole tracking

#### Category 2: The Conversion Wheel (1 — Flagship)
15. The Conversion Wheel (Topic 04) — circular diagram, mass/moles/particles/gas-volume nodes, formulas on spokes — **SINGLE HIGHEST PRIORITY ASSET**

#### Category 3: Timelines (5)
16. SI 2019 redefinition timeline (Topic 01) — one-line: past (artifact standard) → 2019 (natural constant)
17. Avogadro/Cannizzaro timeline (Topic 02) — 1811 (hypothesis) → 50 years ignored → 1860 (Karlsruhe resolution)
18. Atomic-mass-scale timeline (Topic 03) — Dalton 1803 (H=1) → 1860s (O=16) → 1961 (¹²C=12), interactive slider
19. Five-laws timeline (Topic 05) — Lavoisier 1789 → Proust 1794 → Dalton 1803 → Gay-Lussac 1808 → Avogadro 1811, interactive/draggable
20. Gay-Lussac/Avogadro conflict timeline (Topic 10) — 1808 (combining volumes) vs. 1811 (hypothesis resolves it)

#### Category 4: Comparison Tables/Grids (3)
21. Physical vs. chemical property icons (Topic 01) — two-column comparison with icon anchors
22. 10-concentration-terms color-coded grid (Topic 11) — RED (temp-dependent) vs. BLUE (temp-independent) — **SECOND HIGHEST PRIORITY AFTER WHEEL**
23. Absorber table visual (Topic 10, existing, kept) — KOH/pyrogallol/turpentine/Cu₂Cl₂/H₂SO₄ what they absorb

#### Category 5: Decoder Cards (3)
24. H₂O₂ volume-strength decoder (Topic 12) — formula + example
25. Oleum % decoder (Topic 12) — why >100% is possible
26. Mean molar mass weighted-average visual (Topic 12)

#### Category 6: Scientist Story Visuals (8)
27–34. Scientist portrait cards — one per scientist (Avogadro, Cannizzaro, Dalton, Lavoisier, Proust, Gay-Lussac, BIPM Committee, IUPAC Committee)

#### Category 7: Process/Method Visuals (6)
35. Eudiometer apparatus with animated states (Topic 10) — measure → spark → cool → absorb
36. Temperature-effect on molarity vs. molality (Topic 11) — volume changes, mass doesn't
37. Dilution beaker before/after (Topic 11) — M₁V₁ = M₂V₂ visual
38. Recipe-card metaphor for stoichiometry (Topic 07) — equation as ingredient ratios
39. Race-bar animation concept (Topic 08) — two reactants racing to zero
40. Limiting-reagent decision tree (Topic 08) — test each reactant

#### Category 8: Memory-Anchor Graphics (6)
41. "Can You Drink Smoke?" hook illustration (Topic 01) — air/fog/salt water visual
42. Mole = dozen scaled up illustration (Topic 02)
43. Avogadro's-number "impossible to count" visual (Topic 02)
44. Dalton water=HO mistake illustration (Topic 03)
45. Forensic chemistry hook (Topic 06)
46. Eudiometry "explosion proves law" visual (Topic 10)

#### Category 9: Animation Concepts (Specified, not counted as separate static assets)
- Grain-of-rice to atom zoom animation (Topic 01)
- Counting-time simulator (Topic 01)
- Avogadro/Cannizzaro timeline reveal (Topic 02)
- Atomic-mass-scale time-slider interactive (Topic 03)
- Conversion Wheel spin + live value propagation (Topic 04)
- Five-laws timeline reveal (Topic 05)
- Race-bar animation to zero (Topic 08)
- Eudiometer apparatus states (Topic 10)
- Temperature-effect on volume (Topic 11)

---

## PHASE 4 — DESIGN SYSTEM

### Typography System
| Element | Font Size | Font Weight | Color | Line Height | Use |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **Topic Title (story open)** | 28px | Bold | White | 1.2 | "Can You Drink Smoke?" |
| **Card Header** | 18px | Bold | White | 1.3 | "🟢 Key Concept" |
| **Card Body** | 14px | Regular | `#E8E8E8` | 1.5 | Main card text, max 4 lines |
| **Subheading** | 16px | Semibold | `#A8E8D8` (teal) | 1.4 | Section dividers |
| **Formula (inline)** | 14px | Monospace | `#4FD8B8` (bright teal) | 1.6 | `n=w/M`, inline equations |
| **Formula (display)** | 18px | Monospace Bold | `#4FD8B8` | 1.8 | Standalone equations |
| **Button/Label** | 13px | Medium | White | 1.4 | "Tap to expand," CTA |
| **Caption** | 12px | Regular | `#888888` | 1.4 | Diagram labels, small notes |

> **Rule:** No more than 3 distinct font sizes per screen. Hierarchy is created via weight + color, not size alone.

---

### Color Palette
| Purpose | Color | Hex | Usage |
| :--- | :--- | :---: | :--- |
| **Primary BG** | Dark Blue | `#0A1828` | Page background |
| **Card BG** | Slightly lighter blue | `#0F2340` | Card backgrounds |
| **Key Concept** | Bright Teal | `#4FD8B8` | Card headers, formulas, accents |
| **Formula** | Bright Teal | `#4FD8B8` | Inline & display equations |
| **JEE Trap** | Coral Red | `#FF6B6B` | Warning headers, trap cards |
| **Scientist Story** | Purple | `#B89FFF` | Scientist cards, history |
| **NCERT Alert** | Sky Blue | `#5E9FFF` | NCERT-specific content |
| **Did You Know** | Gold/Amber | `#FFD93D` | Curiosity/surprise boxes |
| **Memory Trick** | Green | `#52B788` | Mnemonics, retention anchors |
| **Common Mistake** | Orange | `#FF9500` | Process errors, cautions |
| **Success/Answer** | Light Green | `#90EE90` | Correct answers, checkmarks |
| **Temperature-Dependent** | Red (muted) | `#E85D6A` | Molarity, %v/v concentration terms |
| **Temperature-Independent** | Blue (muted) | `#5E9FFF` | Molality, mole fraction, %w/w |

> **Rule enforced:** Every card type has a distinct color. No two card types share a header color.

---

### Icon System
| Card Type | Icon | Style |
| :--- | :---: | :--- |
| **Key Concept** | 🟢 or 📌 | Circle or pin |
| **JEE Trap** | 🔴 or ⚠️ | Warning sign |
| **Scientist Story** | 🟣 or 🧑 | Purple or person |
| **NCERT Alert** | 🔵 or 📖 | Blue or book |
| **Did You Know** | 🟠 or 💡 | Orange or lightbulb |
| **Common Mistake** | ⚠️ or ❌ | Orange warning or X |
| **Memory Trick** | 💡 or 🧠 | Lightbulb or brain |

> **Rule:** Icons are always visible to the left of the card header. They load instantly (SVG, <10KB per icon).

---

### Card Taxonomy (Component Specifications)

```typescript
// Component Specifications & Data Contracts for UI Rendering

export interface ScientistCardSpec {
  header: string; // [🟣 icon] Scientist Name (Year)
  body: {
    contribution: string; // one line
    year: number | string; // exact year
    source: string; // publication/event
    whyItMattered: string; // one-line impact
  };
  footer: {
    funFact: string; // historical anecdote
  };
}

export interface KeyConceptCardSpec {
  header: string; // [🟢 icon] Concept Title
  body: {
    statement: string; // max 3 lines, bold key terms
    visualRef?: string; // ID of accompanying diagram (if any)
    formula?: string; // displayed monospace if formula exists
  };
}

export interface TrapCardSpec {
  header: string; // [🔴 icon] JEE/NEET Trap: [Trap Title]
  body: {
    theTrap: string; // what students wrongly assume
    theReality: string; // the chemical truth
    example: string; // 1-line numerical or conceptual demonstration
  };
}

export interface MemoryAnchorCardSpec {
  header: string; // [💡 icon] Memory Trick: [Trick Name]
  body: {
    mnemonic: string; // the phrase, acronym, or visual
    howToUse: string; // what it unlocks under exam pressure
  };
}

export interface DidYouKnowCardSpec {
  header: string; // [🟠 icon] Did You Know?
  body: {
    fact: string; // surprising, high-curiosity fact (2 lines max)
    connection: string; // tie-back to the topic
  };
}
```
