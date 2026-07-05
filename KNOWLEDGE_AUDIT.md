# PHASE 2: KNOWLEDGE CORE AUDIT

**Date**: 2026-06-30  
**Auditor**: Content Verification  
**Status**: PARTIAL — 98/455 entities (21% coverage)

---

## Executive Summary

**Current State**: Only ~21% of planned knowledge core is implemented. Must expand to 455+ entities before PYQ cross-linking is complete.

| Module | Count | Target | Coverage | Status |
|--------|-------|--------|----------|--------|
| **Reagents** | 31 | 150+ | 21% | ⚠️ PARTIAL |
| **Exceptions** | 47 | 250+ | 19% | ⚠️ PARTIAL |
| **Orders** | 20 | 150+ | 13% | ⚠️ PARTIAL |
| **Reactions** | 0 | 200+ | 0% | ❌ MISSING |
| **Total** | 98 | 750+ | 13% | ⚠️ PARTIAL |

---

## 1. Reagents Audit

**File**: `lib/chemistry/reagents.ts` (1,229 lines)  
**Count**: 31 entries  
**Target**: 150+ high-yield reagents

### Current Coverage

**Categories Implemented**:
| Category | Count | Examples |
|----------|-------|----------|
| Reducing Agents | 5 | LAH, NaBH₄, DIBAL-H, B₂H₆, Birch system |
| Oxidising Agents | 8 | KMnO₄, OsO₄, PCC, Jones, K₂Cr₂O₇, HIO₄ |
| Halogenating Agents | 3 | NBS, Cl₂/Br₂, mCPBA |
| Catalysts | 4 | Pd/C, Lindlar, AlCl₃, POCl₃/pyridine |
| Named Reaction Systems | 8 | Grignard, Clemmensen, Wolff-Kishner, Luche, etc. |
| Protecting Groups | 3 | Tosylate, Lucas reagent, others |

**Missing Categories** (High ROI):
- [ ] Acid catalysts (H₂SO₄, H₃PO₄, TfOH, etc.) — 10+ needed
- [ ] Base catalysts (NaOH, Et₃N, DBU, etc.) — 8+ needed
- [ ] Coupling reagents (EDC, DCC, TBAF, etc.) — 15+ needed
- [ ] Protecting group removers — 10+ needed
- [ ] Photocatalysts (TiO₂, Ru(bpy)₃²⁺, etc.) — 5+ needed
- [ ] Reductants for specific functional groups — 15+ needed
- [ ] Oxidants for green chemistry — 10+ needed

### Field Completeness

**Required Fields** (per schema):
- ✅ id, name, formula, category
- ✅ definition, mechanism, conditions, selectivity
- ✅ exceptions, relatedConcepts, examRelevance, ncertReferences
- ✅ memoryTriggers, reactionIds, reagentIds

**Status**: ✅ All implemented reagents have complete fields

### Gaps

1. **Low coverage** — Only 31 of 150+ needed
2. **Missing reactions linkage** — `reactionIds` array is populated but `lib/chemistry/reactions/` doesn't exist
3. **No reagent-to-reagent combinations** — Complex reagent mixtures (e.g., DCC/HOBt, RuCl₃/NMO) not represented

**Status**: ⚠️ PARTIAL — Needs 119+ more entries

---

## 2. Exceptions Audit

**File**: `lib/chemistry/exceptions.ts` (1,324 lines)  
**Count**: 47 entries  
**Target**: 250+ high-yield exceptions

### Current Coverage by Block

| Block | Count | Examples |
|-------|-------|----------|
| **Periodic Table** | 10 | IE(O<N), EA(Cl>F), HF anomalies, etc. |
| **Chemical Bonding** | 3 | BF₃ backbonding, PCl₅ shape, SF₆ |
| **Organic** | 14 | Vinyl halides, aniline basicity, markovnikov, etc. |
| **d-Block** | 5 | Cr, Cu electronic exceptions |
| **p-Block** | 5 | NO₂ dimer, PCl₅ dissociation, H₂O₂ |
| **Physical** | 10 | Real gas behavior, colligative properties, etc. |

**Missing Topics** (High ROI):
- [ ] **Nomenclature anomalies** — Systematic vs. common names (toluene, aniline, etc.) — 5+ needed
- [ ] **Reactivity inversions** — O vs S nucleophilicity in different solvents — 8+ needed
- [ ] **Stereo inversions** — Walden inversion, pseudo-asymmetric centers — 5+ needed
- [ ] **Complex ion exceptions** — Spin crossover, CFSE anomalies — 10+ needed
- [ ] **Thermodynamic inversions** — Entropy-driven reactions, cold-driven processes — 5+ needed
- [ ] **Kinetic vs. thermodynamic products** — Markovnikov variants, regioisomerism — 10+ needed
- [ ] **Acid-base anomalies** — Lewis vs. Brønsted, amphiprotic species — 8+ needed
- [ ] **Solubility anomalies** — Common ion effect inversions, hydrolysis effects — 10+ needed
- [ ] **Color anomalies** — Charge transfer complexes, d-d transitions — 8+ needed
- [ ] **Hybridization anomalies** — Hypervalent sulfur, expanded octets — 5+ needed

### Field Completeness

**Required Fields**:
- ✅ id, title, category, chapter
- ✅ observation, explanation, deeperReason
- ✅ examRelevance, relatedConcepts, ncertReferences
- ✅ memoryTriggers, verified

**Status**: ✅ All implemented exceptions have complete fields

### Gaps

1. **Low coverage** — 47 of 250+ needed (19%)
2. **Missing cross-links** — No links to reactions that demonstrate the exception
3. **Limited organic scope** — Only 14 entries; needs 60+

**Status**: ⚠️ PARTIAL — Needs 203+ more entries

---

## 3. Orders Audit

**File**: `lib/chemistry/orders/organic.ts` + `lib/chemistry/orders/physical.ts`  
**Count**: 20 entries (10 organic + 10 physical)  
**Target**: 150+ (80 organic, 70 physical, 50 inorganic)

### Organic Orders (10 entries)

| Order | Status | Example |
|-------|--------|---------|
| Cation Stability | ✅ | Benzylic > Allylic > Tertiary > Secondary > Primary > Methyl |
| Carbanion Stability | ✅ | Methyl > Primary > Secondary > Tertiary (opposite to cations) |
| Radical Stability | ✅ | Same as cation order |
| C–H Acidity (pKa) | ✅ | sp C–H (25) > sp² > sp³; DMSO effects |
| Amine Basicity (aqueous) | ✅ | Secondary > Primary > Tertiary >> Aniline |
| Carbonyl Reactivity | ✅ | Acid chloride > Anhydride > Ester >> Amide |
| Carboxylic Acid Acidity | ✅ | Formic > Acetic > Propionic (alkyl = less acidic) |
| SN1 Rate Order | ✅ | Benzylic > Tertiary > Secondary > Primary >> Methyl |
| SN2 Rate Order | ✅ | Methyl > Primary > Secondary >> Tertiary |
| Leaving Group Ability | ✅ | Tosylate > I⁻ > Br⁻ > Cl⁻ >> F⁻ |

**Missing Organic Orders** (70+ needed):
- [ ] Electrophile reactivity (aromatic substitution)
- [ ] Nucleophile strength (various solvents)
- [ ] Regioselectivity rules (Markovnikov variants)
- [ ] Diastereoselectivity precedents
- [ ] Protecting group stability
- [ ] And 65+ more...

### Physical Orders (10 entries)

| Order | Status | Example |
|-------|--------|---------|
| IE₁ (Period 2) | ✅ | Ne > F > N > O > C > Be > B > Li (N–O, B–Be exceptions) |
| EA (Halogens) | ✅ | Cl > F > Br > I (F anomaly) |
| Boiling Points (Group 16 Hydrides) | ✅ | H₂O >> H₂Te > H₂Se > H₂S (H-bonding in H₂O) |
| Lattice Energy (Alkali Halides) | ✅ | LiF > NaF > KF (charge density trend) |
| Hydration Enthalpy (Alkali Cations) | ✅ | Li⁺ > Na⁺ > K⁺ > Rb⁺ > Cs⁺ |
| Oxyacid Strength | ✅ | HClO₄ > HClO₃ > HClO₂ > HClO (oxidation state) |
| Isoelectronic Ionic Radii | ✅ | N³⁻ > O²⁻ > F⁻ > Ne > Na⁺ > Mg²⁺ > Al³⁺ |
| Ionic Conductance | ✅ | H⁺ > OH⁻ > Cs⁺ (Grotthuss mechanism) |
| H–X Bond Energy | ✅ | H–F > H–Cl > H–Br > H–I (inverse to acid strength) |
| Compressibility Factor (Real Gases) | ✅ | Z<1 (attractive), Z>1 (repulsive); H₂/He always Z>1 |

**Missing Physical Orders** (70+ needed):
- [ ] Reduction potential trends
- [ ] Coordination number preferences
- [ ] CFSE ordering
- [ ] Solubility product trends
- [ ] Electrode potential series
- [ ] And 65+ more...

### Inorganic Orders (0 entries — NOT CREATED)

**Missing Entirely** (50+ needed):
- [ ] d-Block element oxidation states
- [ ] s-Block element reactivity
- [ ] Transition metal stability (various oxidation states)
- [ ] Ligand field strength
- [ ] And 46+ more...

### Field Completeness

**Required Fields**:
- ✅ id, title, category, chapter, property, order, direction
- ✅ explanation, exceptions, relatedConcepts
- ✅ examRelevance, ncertReferences, memoryTriggers, verified

**Status**: ✅ All implemented orders have complete fields

### Gaps

1. **Only 20 of 150+** — Covers key organic/physical but missing vast inorganic scope
2. **No inorganic orders file** — `lib/chemistry/orders/inorganic.ts` must be created
3. **Limited direction coverage** — Only "Increasing/Decreasing/Mixed"; could expand scope

**Status**: ⚠️ PARTIAL — Needs 130+ more entries

---

## 4. Reactions Audit

**File**: `lib/chemistry/reactions/` — **MISSING ENTIRELY**

**Status**: ❌ NOT CREATED

**Blocker Impact**:
- PYQ questions cannot link to reactions
- Knowledge graph is broken
- Cross-links incomplete

**Required**: `lib/chemistry/reactions/index.ts` with 200+ named reactions

**Schema** (proposed):
```typescript
export interface ReactionKnowledge {
  id: string;
  name: string; // "Aldol Condensation"
  mechanism: string; // Step-by-step mechanism
  conditions: string[]; // Temperature, solvent, catalyst
  reagents: string[]; // IDs from REAGENTS
  products: string[];
  exceptions: string[]; // IDs from EXCEPTIONS
  isNamedReaction: boolean;
  category: "Organic" | "Inorganic" | "Physical";
  chapter: PYQChapter;
  examRelevance: ExamFreq;
  ncertReferences: string[];
  pyqIds: string[]; // Questions that use this reaction
}
```

**High-Priority Reactions** (50+ for MVP):
1. Aldol condensation
2. Grignard addition
3. Friedel-Crafts acylation/alkylation
4. Baeyer-Villiger oxidation
5. Wittig reaction
6. Diels-Alder
7. SN1/SN2 substitution
8. E1/E2 elimination
9. Nucleophilic acyl substitution
10. And 40+ more...

**Impact**: 0% coverage, 100% missing

---

## Summary Table

| Module | Count | Target | Coverage | Missing | Status |
|--------|-------|--------|----------|---------|--------|
| Reagents | 31 | 150 | 21% | 119 | ⚠️ PARTIAL |
| Exceptions | 47 | 250 | 19% | 203 | ⚠️ PARTIAL |
| Orders | 20 | 150 | 13% | 130 | ⚠️ PARTIAL |
| Reactions | 0 | 200 | 0% | 200 | ❌ MISSING |
| **TOTAL** | **98** | **750** | **13%** | **652** | ⚠️ PARTIAL |

---

## Critical Blockers

1. **Reactions database missing** — Prevents PYQ cross-linking
2. **Reagents underpopulated** — Only 21% of target
3. **Exceptions underpopulated** — Only 19% of target
4. **Inorganic orders missing** — No coverage for d-block trends

---

## Recommendations (Priority Order)

### P1: Create Reactions Database
**Effort**: 3–4 weeks  
**Impact**: Unblocks PYQ cross-linking, enables knowledge graph

### P2: Expand Reagents to 100+
**Effort**: 1–2 weeks  
**Impact**: More search results, better PYQ coverage

### P3: Expand Exceptions to 150+
**Effort**: 2–3 weeks  
**Impact**: Better student preparation, more PYQ mappings

### P4: Create Inorganic Orders (50+)
**Effort**: 1–2 weeks  
**Impact**: Full periodic table coverage

### P5: Expand Orders to 150+ total
**Effort**: 1–2 weeks  
**Impact**: Comprehensive ordering rules

---

## Verification Evidence

**Reagents**:
```bash
$ grep -o 'id: "[^"]*"' lib/chemistry/reagents.ts | wc -l
31
```

**Exceptions**:
```bash
$ grep -o 'id: "[^"]*"' lib/chemistry/exceptions.ts | wc -l
47
```

**Orders**:
```bash
$ grep -o 'id: "[^"]*"' lib/chemistry/orders/organic.ts | wc -l
10
$ grep -o 'id: "[^"]*"' lib/chemistry/orders/physical.ts | wc -l
10
```

**Reactions**:
```bash
$ ls lib/chemistry/reactions/
# (directory empty)
```
