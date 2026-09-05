export const HYDROLYSIS_MASTER_MARKDOWN = String.raw`
## Notation and scope

1.  E is the electrophilic central element; X is a leaving group; Nu is H₂O or OH⁻.

2.  A and D are limiting associative and dissociative paths. Iₐ and I_d are concerted interchange paths with greater associative or dissociative character.

3.  ‘Hydrolysis’ is used in two senses: cleavage/substitution by water, and deprotonation of a coordinated aqua ligand in aqueous cation chemistry. These must not be mixed.

4.  Equations show the dominant or exam-standard products. Real aqueous products may be hydrated, oligomeric, condensed, pH-dependent or kinetically trapped.

# 1 Master mental model

## 1.1 What hydrolysis actually asks

Hydrolysis is not a single mechanism. It is a product-forming reaction in which water (or OH⁻ generated from water) supplies a nucleophilic oxygen, a proton, or both. The central exam task is to identify what water is doing in the rate-controlling event and which stable sink removes the products.

| **Question** | **Diagnostic** |
|----|----|
| **Where is the electrophile?** | Locate δ⁺ centres, polarized π systems and low-energy acceptor orbitals. |
| **Can coordination increase?** | If yes, A/Iₐ attack may be accessible; if crowded or electronically blocked, D/I_d may dominate. |
| **What leaves?** | X⁻, HX after proton transfer, hydride as H₂, carbanion as RH, or an oxo/bridging group after addition–elimination. |
| **Is redox hidden?** | Assign oxidation states before and after; NCl₃ and XeF₂/XeF₄ are classic traps. |
| **What drives completion?** | Strong E–O bonds, HX solvation, precipitation, condensation, complexation or gas evolution. |
| **What does the medium change?** | H⁺/OH⁻ catalysis, nucleophile strength, leaving-group protonation, speciation and solubility. |

## 1.2 Thermodynamics is not rate

ΔG° = ΔH° - TΔS°

k = (k_B T / h) exp(ΔS‡ / R) exp(-ΔH‡ / RT)

A negative ΔG° says products are favoured at equilibrium; it does not say the activation barrier is small. This is the central reason CCl₄ can persist in water while SiCl₄ fumes and reacts rapidly with moisture. The supplied AKD extract even gives hydrolysis of CCl₄ as thermodynamically favourable, yet kinetically blocked under ordinary conditions.

| **Species** | **Thermodynamic direction** | **Kinetic reality** | **Why** |
|----|----|----|----|
| **CCl₄** | Hydrolysis products are favourable | Essentially inert in ordinary water | Short C–Cl bonds, shielded C, poor access to a low-barrier substitution pathway. |
| **SiCl₄** | Hydrolysis/condensation favourable | Rapid; fumes in moist air | Accessible electrophilic Si, viable hypercoordinate pathway, proton relay and strong Si–O formation. |

**JEE elimination rule.** Never select ‘fast’ merely because the reaction is exothermic, gives a strong bond, or has negative ΔG°. First ask whether the proposed elementary pathway has an accessible transition state.

## 1.3 The six-factor hydrolysis scorecard

| **Factor** | **Faster when…** | **Typical illustration** |
|----|----|----|
| **Electrophilicity / Lewis acidity** | E is more electron-poor and has a lower-energy acceptor | SnCl₄ \> SnCl₂; BCl₃ \> BF₃ in the standard JEE comparison. |
| **Orbital access** | Nu can overlap with an acceptor or σ\*(E–X) | SiCl₄ accessible; CCl₄ strongly shielded. |
| **Sterics and electrostatics** | Approach to E is open and not repelled by ligand lone pairs | SF₆ is crowded and kinetically inert. |
| **Leaving-group pathway** | X⁻ is stable or can be protonated to HX | Chlorides commonly hydrolyse more readily than corresponding fluorides. |
| **Product sink** | Strong E–O bonds, precipitation, condensation or gas evolution pull the process | Silica condensation; H₂ from hydrides; insoluble hydroxides. |
| **Medium / catalysis** | OH⁻ strengthens attack or H⁺ assists leaving-group protonation | SiH₄: base-catalysed; BH₄⁻: acid-catalysed and pH-dependent. |

![A decision tree for predicting hydrolysis before memorising any equation.](/notes/hydrolysis/orig1_decision_tree.svg)

# 2 Lewis structures and molecular-orbital view

## 2.1 Start with electron bookkeeping

5.  Draw the Lewis structure and mark formal charges, lone pairs, multiple bonds and expanded-octet representations.

6.  Assign bond polarity from electronegativity, but do not treat δ⁺/δ⁻ labels as a complete mechanism.

7.  Identify the donor: usually n(O) of H₂O/OH⁻. Identify the acceptor: a central-atom LUMO, σ\*(E–X), or π\* orbital.

8.  After attack, test whether proton transfer converts a poor leaving group into HX, H₂, RH or another stable neutral product.

9.  Finally, redraw the Lewis structure of the oxoacid. Only hydrogens on O normally determine basicity; P–H hydrogens do not.

![Lewis structures and geometry cues used throughout this chapter.](/notes/hydrolysis/orig2_lewis_gallery.svg)

![General donor–acceptor picture for hydrolytic substitution.](/notes/hydrolysis/orig3_donor_acceptor_mo.svg)

## 2.2 Why σ\*(E–X) matters

Donation from the water lone pair into an acceptor with σ\*(E–X) character simultaneously makes an E–O interaction and weakens E–X. The rate improves when the acceptor is low in energy, has appreciable amplitude at E, and is geometrically reachable. This single idea unifies many ‘vacant orbital’, ‘Lewis acid’, ‘bond polarity’ and ‘steric’ explanations used separately in coaching notes.

n(O of H₂O/OH⁻) → σ\*(E–X) → Nu···E···X

**MOT takeaway.** The incoming lone pair does not need a pre-existing empty 3d orbital labelled ‘sp³d’. Mixing into the molecular acceptor orbital and multicentre bonding can accommodate a five-coordinate geometry without assigning decisive 3d occupancy.

**How to read the arrows.** A full-headed curved arrow transfers an electron pair from a lone pair or bond. A straight reaction arrow relates reactants and products. A double dagger identifies a transition state; dashed bonds alone do not prove one. Brackets enclose a species or a charge and do not, by themselves, establish an intermediate.

## 2.3 Hypercoordination and 3-centre–4-electron bonding

For a nearly linear Nu–E–X segment, three atomic combinations generate bonding, largely nonbonding and antibonding molecular orbitals. Four electrons occupy the bonding and nonbonding levels: a 3c–4e description. Each axial contact has a bond order smaller than one, which is exactly what is needed while the entering bond forms and the leaving bond breaks.

| **Model** | **What it communicates well** | **Limitation** |
|----|----|----|
| **Lewis / arrow pushing** | Electron-pair source, attacked atom, proton transfer and products | Does not quantify orbital energies or charge redistribution. |
| **JEE hybridization shorthand** | Geometry: TBP for five-coordinate, octahedral for six-coordinate | sp³d/sp³d² labels should not be read as proof of occupied d hybrids. |
| **MO / 3c–4e** | Delocalized Nu–E–X bonding, weakened leaving bond and hypervalency | A qualitative picture; real solvent clusters and multiple pathways can matter. |

## 2.4 The d-orbital issue: exam language versus modern language

| **Older / common exam explanation** | **Preferred modern explanation** |
|----|----|
| **‘Si uses vacant 3d orbitals; carbon has no d orbitals.’** | Si is larger and more accessible, its acceptor orbitals/hypercoordinate states are more favourable, and Nu donation into molecular acceptor/σ\* orbitals lowers the barrier. Carbon is smaller and shielded; its analogous path is much higher in energy. |
| **‘Five-coordinate means sp³d hybridization.’** | Five-coordinate geometry can be described by delocalized multicentre MOs. d functions may improve calculations, but large occupied 3d hybrids are not required. |
| **‘pπ–dπ backbonding controls B–X or Si–X trends.’** | For B–X, ligand p donation into the vacant boron p orbital is meaningful, although reorganization and bond-energy effects also matter. For heavier-centre hypervalency, ionic/negative-hyperconjugative and multicentre descriptions are safer than literal d bonding. |

**Evidence check.** J. D. Lee (5th ed.) and older Greenwood passages use the vacant-d account. Housecroft–Sharpe explicitly notes that this traditional explanation has been challenged. IUPAC’s hypervalency definition uses a 3c–4e molecular-orbital description, and Reed–Schleyer found ionic bonding/negative hyperconjugation dominant over d-orbital participation.

## 2.5 Lewis acidity is useful—but not a universal rate law

A stronger Lewis acid often accepts the water lone pair more readily, but hydrolysis rate is a property of a complete pathway. Steric access, solvation, bond rupture, proton transfer, secondary complexation and phase matter. Therefore, use Lewis acidity as one scorecard term, not as an automatic ranking machine.

| **Comparison** | **High-yield conclusion** | **Necessary caveat** |
|----|----|----|
| **BX₃** | JEE order: BF₃ \< BCl₃ \< BBr₃ \< BI₃ | The familiar ‘backbonding only’ story is incomplete; Lewis acidity depends on base and medium. |
| **SiX₄** | JEE materials often use SiF₄ \> SiCl₄ \> SiBr₄ \> SiI₄ for initial associative tendency | Extent and isolated products differ; SiF₄ gives fluorosilicate trapping and partial net hydrolysis. |
| **SnCl₄ vs SnMe₄** | SnCl₄ hydrolyses far more readily | Methyl donation lowers electrophilicity and Sn–C cleavage needs protonolysis; simple oxidation-state comparison is insufficient. |

# 3 Mechanism families

## 3.1 A, D and I pathways

| **Path** | **Rate-controlling picture** | **Intermediate?** | **Favoured by** | **Hydrolysis example** |
|----|----|----|----|----|
| **A** | E–Nu bond formation precedes E–X rupture | Higher coordination number | Accessible Lewis-acidic centre; modest crowding | SiCl₄ as the JEE limiting model |
| **D** | E–X rupture precedes Nu capture | Lower coordination number | Good leaving group; stabilized cation/fragment; polar solvent | CCl₄ only under drastic conditions as a limiting picture |
| **Iₐ** | Concerted, bond formation more advanced | No isolable intermediate | Same factors as A, but no minimum on energy surface | Many real substitutions at Si/P |
| **I_d** | Concerted, bond rupture more advanced | No isolable intermediate | Leaving-group stabilization; weaker dependence on Nu | Solvolysis with strong dissociative character |

**Terminology trap.** A and D are two-step limiting mechanisms with intermediates. I is a one-step interchange through a transition state. ‘SN2’ is often used loosely for A/Iₐ in JEE material; do not assume a stable five-coordinate intermediate exists in every case.

| **Evidence** | **Associative character** | **Dissociative character** |
|----|----|----|
| **Rate law** | Rate increases strongly with nucleophile concentration | Rate is weakly dependent or independent of nucleophile |
| **Activation entropy** | Usually more negative: two partners become organised | Often less negative or positive: bond cleavage increases disorder |
| **Steric effect** | Crowding strongly slows attack | Crowding may assist bond rupture |
| **Stereochemical clue** | Backside/constrained attack may give inversion | A free or long-lived fragment can allow scrambling |

## 3.2 Addition–elimination

Addition–elimination is a useful formal classification in the supplied JEE notes. Nucleophilic attack and leaving-group loss can occur in separate steps or in a coupled event. For hypervalent sulfur and phosphorus, do not automatically transfer the carbonyl tetrahedral-intermediate picture: the coordination number, charges and retained oxo bonds must be counted explicitly.


**Full mechanism (SOCl₂ and SO₂Cl₂).** Water's oxygen lone pair adds
directly to S while, in the same concerted step, one S–Cl bond breaks
heterolytically and Cl⁻ departs — this is addition and elimination
happening together, not through an isolable tetrahedral intermediate (unlike
carbonyl addition–elimination in organic chemistry, hence the "do not
automatically transfer" warning above). The resulting S–OH₂⁺ then loses a
proton to solvent, and the S=O π bond re-forms as SO₂ is released. Figure D2
draws this explicitly for SOCl₂ (→ SO₂ + 2HCl); SO₂Cl₂ needs one further,
identical attack at its remaining Cl to reach H₂SO₄ + 2HCl overall — each
round replacing one Cl by OH via the same addition–elimination step, ending
with the usual proton bookkeeping between the S–OH₂⁺-type intermediate and
solvent.

![Figure D2. SOCl₂/SO₂Cl₂: concerted addition–elimination at S — Cl⁻ leaves as water adds.](/notes/hydrolysis/d2_socl2_addelim.svg)

SO₂Cl₂ + 2H₂O → H₂SO₄ + 2HCl

POCl₃ + 3H₂O → H₃PO₄ + 3HCl

H₂SO₅ + H₂O → H₂SO₄ + H₂O₂

Caro’s acid (H₂SO₅) and Marshall’s acid (H₂S₂O₈) are especially useful because an O–O linkage is converted into H₂O₂ after addition–elimination. For Marshall’s acid: H₂S₂O₈ + 2H₂O → 2H₂SO₄ + H₂O₂.


**Mechanism (O–O peroxide cleavage).** Unlike the S–Cl/S=O chemistry above,
the reactive site in Caro's and Marshall's acid is the weak internal O–O
bond, not S. A water lone pair performs a direct nucleophilic attack on the
inner peroxide oxygen; the O–O bond breaks heterolytically, with both
electrons leaving on the *outer* oxygen, which departs as part of H₂O₂ while
the inner oxygen becomes a new S–OH. Figure D3 shows this explicitly for
H–O–O–SO₂–OH (Caro's acid) giving H₂SO₄ + H₂O₂; the same O–O cleavage in the
central bridge of H₂S₂O₈ (two –SO₃H units linked by O–O) gives 2H₂SO₄
overall, written conventionally as H₂S₂O₈ + 2H₂O → 2H₂SO₄ + H₂O₂. By
contrast, pyrosulfuric acid H₂S₂O₇ has an S–O–S bridge (no O–O bond at all),
so its hydrolysis is ordinary bridge cleavage — attack at one S, the bridging
oxygen leaves with the other –SO₃H fragment — giving 2H₂SO₄ with no peroxide
released.

![Figure D3. Caro's/Marshall's acid: nucleophilic attack directly at the O–O bond releases H₂O₂.](/notes/hydrolysis/d3_h2so5_oo_cleavage.svg)

## 3.3 Addition without a leaving group

If the electrophile is an anhydride-like oxide, water can add without expelling another ligand. Proton rearrangement gives the oxoacid.

SO₃ + H₂O → H₂SO₄

N₂O₅ + H₂O → 2HNO₃

CO₂ + H₂O ⇌ H₂CO₃


**Full mechanism.** Unlike every substitution covered so far, there is no
leaving group here: a water lone pair adds directly to the electrophilic
central atom (S in SO₃, N in N₂O₅, C in CO₂) while, in the same step, a π
electron pair from one of the existing double bonds shifts onto that oxygen
to accept the newly forming O–H's proton — a single concerted
addition/proton-shift, shown explicitly for SO₃ in Figure D1. N₂O₅ hydrates
by the identical addition mechanism at either electrophilic N to give
2HNO₃. CO₂ follows the same addition step, but the resulting H₂CO₃
equilibrium lies overwhelmingly toward dissolved CO₂(aq) rather than the
acid — the mechanism is identical, only the position of equilibrium differs.

![Figure D1. Anhydride-type addition (SO₃, N₂O₅, CO₂): no leaving group, a single addition/proton-shift step.](/notes/hydrolysis/d1_so3_addition.svg)

## 3.4 Push–pull / proton-assisted cleavage

A nucleophile pushes electron density into E while a protonic site pulls a hydridic or carbanionic leaving group away. The cyclic proton relay avoids release of a naked H⁻ or R⁻. This explains why E–H and E–R bonds can hydrolyse when the bond polarization is Eδ+–Hδ− or Eδ+–Rδ−.

SiH₄ + 2H₂O → SiO₂ + 4H₂ (OH⁻-catalysed)

**Mechanism.** OH⁻ (present even in "pure" water at trace level, and
readily generated by alkali leached from glassware) attacks the accessible,
electrophilic Si directly, exactly as it attacks Si in SiCl₄; simultaneously
one Si–H bond — polarised Siδ+–Hδ− and therefore hydridic — is pushed off as
H⁻, which is far too reactive to exist free and instantly deprotonates a
solvent water molecule to give H₂ and regenerate the OH⁻ catalyst. Figure B4
draws both arrows on the same diagram. CH₄ cannot do this: the C–H bond has
negligible hydridic character and carbon offers no accessible attack
trajectory, so methane simply does not hydrolyse under comparable conditions.
Four repetitions at each Si–H give SiO₂·2H₂O + 4H₂ overall.

![Figure B4. SiH₄ hydrolysis: base-catalysed push–pull attack at one Si–H.](/notes/hydrolysis/b4_sih4_pushpull.svg)

Al₂(CH₃)₆ + 6H₂O → 2Al(OH)₃ + 6CH₄

BH₄⁻ + 4H₂O → B(OH)₄⁻ + 4H₂

**Bond-polarity discriminator.** C–H in CH₄ is not sufficiently hydridic and carbon is difficult to attack; Si–H is polarized Siδ+–Hδ− and base-catalysed attack at Si couples to H₂ formation. Si–C in silicones is far more resistant because protonolysis of the methyl group is not comparably favourable under ordinary conditions.

## 3.5 Redox hydrolysis

Water participates, but oxidation states change. Always perform an oxidation-state audit instead of trusting the label ‘hydrolysis’.


**Full arrow-pushing mechanism and why it is secretly redox.** Curly arrows
alone make NCl₃ look like an ordinary substitution: a water oxygen lone pair
attacks one Cl (which carries a partial positive charge here because it is
bonded to the *more* electronegative N — the reverse polarity of a normal
N–Cl bond elsewhere), while the N–Cl bonding electrons retreat fully onto N.
Repeating this three times, then letting N pick up three H⁺ from the medium,
gives NH₃ + 3HOCl. Figure C4 draws this explicitly and then runs the
oxidation-state audit alongside it: N goes from +3 to −3 (a 6-electron gain)
while each of the three Cl goes from −1 to +1 (a 2-electron loss, ×3) — the
electron count balances exactly, confirming that this substitution-looking
sequence is, overall, an internal redox reaction. NF₃ cannot follow this
path at all under ordinary conditions: the N–F bond is far stronger and more
kinetically shielded, so no accessible low-barrier pathway exists (2NF₃ +
3H₂O → N₂O₃ + 6HF only under drastic, non-exam conditions).

![Figure C4. NCl₃ hydrolysis: full curly-arrow mechanism plus the oxidation-state audit proving it is redox.](/notes/hydrolysis/c4_ncl3_redox.svg)

| **Reaction** | **Redox audit** |
|----|----|
| **XeF₂ + H₂O → Xe + 2HF + ½O₂** | Xe: +2 → 0; O: −2 → 0. |
| **3XeF₄ + 6H₂O → 2Xe + XeO₃ + 12HF + 3/2 O₂** | Some Xe(+4) is reduced to Xe(0); water oxygen is oxidized. |
| **NCl₃ + 3H₂O → NH₃ + 3HOCl** | Formal N: +3 → −3; Cl: −1 → +1. Overall reaction is redox even if a JEE mechanism draws attack at Cl. |

## 3.6 Mixed mechanisms

One compound may use more than one elementary motif. PCl₅ undergoes hydrolytic substitution to POCl₃ and then addition–elimination to H₃PO₄. P₄O₁₀ hydration opens P–O–P bridges stepwise; cyclic/condensed phosphates undergo ring or chain cleavage after attack at P.

PCl₅ + H₂O → POCl₃ + 2HCl

POCl₃ + 3H₂O → H₃PO₄ + 3HCl

P₄O₁₀ + 6H₂O → 4H₃PO₄

# 4 Systematic hydrolysis chemistry

## 4.1 Group 13: boron, aluminium and gallium

### Boron trihalides

BX₃ is trigonal planar with an empty boron-centred acceptor orbital. Water attacks B, proton transfer converts X into HX, and substitution repeats. The standard JEE trend is BF₃ \< BCl₃ \< BBr₃ \< BI₃. BF₃ is exceptional because strong B–F bonding and fluoride capture form BF₄⁻, so net hydrolysis is partial.

BCl₃ + 3H₂O → B(OH)₃ + 3HCl

4BF₃ + 3H₂O → B(OH)₃ + 3HBF₄

**Step-by-step mechanism (BX₃, general).** (1) A water lone pair attacks the empty
2p orbital on trigonal-planar B, forming a fourth B–O bond and pushing B toward
tetrahedral geometry in the transition state. (2) The B–X bond anti to the new
B–O bond weakens (electron density flows into it) and X⁻ departs, regenerating
trigonal-planar geometry at B — now as X₂B–OH. (3) A second water repeats the
attack at the remaining electrophilic B, and (4) a third repeat gives B(OH)₃ +
3HX overall. Figure A1 shows step 1 in full curly-arrow detail, with the
five-coordinate-like transition state drawn in brackets exactly as for silicon
(Figure 4) — except boron only ever reaches a *four*-coordinate transition
state (3 groups + incoming Nu), never five, because B has one fewer valence
orbital than Si.

![Figure A1. BCl₃ hydrolysis: full curly-arrow mechanism for the first of three identical substitution steps.](/notes/hydrolysis/a1_bcl3_step.svg)

**BF₃ is the exception, not a different mechanism.** The first substitution
step is identical to BCl₃'s. What changes is the fate of the *leaving group*:
F⁻/HF is a much better ligand for a second, still-electrophilic BF₃ molecule
than Cl⁻ is for BCl₃, so a competing (non-hydrolytic) Lewis acid–base
reaction — F⁻ + BF₃ → BF₄⁻ — intercepts three-quarters of the boron centres
before they can be hydrolysed further. Figure A2 traces this fluoride-capture
cycle explicitly.

![Figure A2. Why BF₃ hydrolysis is stoichiometrically partial: the competing F⁻-capture equilibrium.](/notes/hydrolysis/a2_bf3_trap.svg)

**Partial does not mean random.** The HF produced by hydrolysis is trapped by unreacted BF₃ as HBF₄/BF₄⁻. Stoichiometrically, only one of four BF₃ units becomes boric acid in the net equation.

### Borohydride and boranes

BH₄⁻ hydrolysis is strongly pH-dependent. Acid accelerates H₂ release; in neutral or alkaline conditions the rate depends on catalyst and surface. Replacement of B–H by B–OH reduces the remaining hydride character and can slow later steps. Boranes generally hydrolyse to boric acid/borate and H₂, but kinetic stability varies strongly with cluster structure.

B₄H₁₀ + 12H₂O → 4B(OH)₃ + 11H₂

**Mechanism (BH₄⁻ and boranes).** Unlike BX₃, boron in BH₄⁻ is already
tetrahedral and has no empty orbital to accept a nucleophile directly — so the
first step is instead proton delivery *to* a hydridic B–H bond (push–pull,
not simple nucleophilic attack at B). Under acid catalysis, H₃O⁺ protonates a
B–H bond; the H–H electrons that form leave as H₂ gas while the resulting
three-coordinate boron species (transiently electron-deficient, akin to BH₃)
is immediately re-attacked by water at boron. Four repetitions replace all
four hydrides and release 4H₂, giving B(OH)₄⁻ overall. Figure A3 shows the
first proton-transfer step explicitly. Boranes such as B₂H₆/B₄H₁₀ hydrolyse
by the same hydridic-proton-transfer logic at each terminal/bridging B–H,
ending at boric acid + H₂; the polyhedral cluster bonding of larger boranes
can slow individual steps kinetically without changing this basic motif.

![Figure A3. BH₄⁻ hydrolysis: the acid-catalysed proton-transfer step at one hydridic B–H.](/notes/hydrolysis/a3_bh4_pushpull.svg)

### Al/Ga alkyls and halides

Electron-deficient Al–C and Ga–C bonds are protonolyzed through a cyclic push–pull transition state. In contrast, a methyl group attached to silicon is not an equally good leaving group, helping explain the water resistance of silicones.

R₃Ga + 3H₂O → Ga(OH)₃ + 3RH

**Mechanism (Al–C / Ga–C protonolysis).** The Al–C (or Ga–C) bond is
polarised Alδ+–Cδ−, so a water molecule coordinates to Al through its oxygen
lone pair (Al is Lewis-acidic and electron-deficient in these electron-poor
alkyls) while, in the same four-membered cyclic transition state, one of its
O–H bonds delivers a proton to the departing methyl carbon. Three arrows
describe it fully: O-lone-pair → Al, Al–C bond electrons → C, and the C
lone pair (as it forms) → the migrating H⁺ of the coordinated water,
releasing CH₄ and leaving Al–OH. Figure A4 draws this transition state
explicitly; six repetitions convert Al₂(CH₃)₆ completely to 2Al(OH)₃ + 6CH₄.
R₃Ga hydrolyses by the identical cyclic mechanism to Ga(OH)₃ + 3RH — only the
Lewis-acidic metal centre changes.

![Figure A4. Al–C protonolysis: the four-membered cyclic transition state.](/notes/hydrolysis/a4_al_c_protonolysis.svg)

**Beryllium chloride: an amphoteric bridge to Group 2.** BeCl₂ hydrolyses by
ordinary substitution at the small, highly polarising Be²⁺ centre —
Be attacked by water, Cl⁻ displaced, twice over — but because Be(OH)₂ is
amphoteric, excess hydroxide does not stop there: two more OH⁻ ligands add to
Be as a Lewis acid, giving the soluble tetrahedral beryllate ion
[Be(OH)₄]²⁻. This is mechanistically the same amphoteric-hydroxide pattern
seen for Al(OH)₃ in Section 4.7, extended down to a Group 2 element because
of Be's unusually high charge density.

BeCl₂ + 2H₂O → Be(OH)₂↓ + 2HCl

Be(OH)₂ + 2OH⁻ → [Be(OH)₄]²⁻

![Figure A5. BeCl₂: hydrolysis in water versus amphoteric dissolution in excess alkali.](/notes/hydrolysis/h1_becl2_amphoteric.svg)

## 4.2 Group 14: the carbon–silicon contrast

### CCl₄ versus SiCl₄

| **Test** | **CCl₄** | **SiCl₄** |
|----|----|----|
| **Lewis/electrophilic centre** | C is polarized δ⁺ but compact and shielded | Si is larger, accessible and strongly electrophilic |
| **Accepting Nu** | Five-coordinate attack has a high barrier | Hypercoordinate attack/transition states are viable |
| **Leaving group / proton relay** | C–Cl rupture is difficult in this geometry | Si–Cl weakening and HCl transfer can be coupled |
| **Product sink** | CO₂/COCl₂ favourable but kinetically inaccessible | Strong Si–O formation and condensation to hydrated silica |
| **Observed** | No ordinary reaction; superheated steam gives COCl₂ | Rapid hydrolysis; fumes in moist air |

CCl₄ + H₂O —superheated steam→ COCl₂ + 2HCl

SiCl₄ + 4H₂O → Si(OH)₄ + 4HCl


**The barrier, quantified.** Figure B1 draws the two free-energy profiles
side by side on the same energy scale: both reactions are thermodynamically
downhill, but CCl₄'s transition state (five-coordinate, built from a small,
shielded carbon with no accessible d/diffuse acceptor orbital) lies far
higher than SiCl₄'s (built from a larger, electronically and sterically
accessible silicon). This is the figure the textbook's ΔG°-vs-ΔG‡ warning
(Section 1.2) is illustrating concretely.

![Figure B1. CCl₄ vs SiCl₄: the activation-barrier comparison that explains why one is inert and the other fumes in moist air.](/notes/hydrolysis/b1_ccl4_sicl4_profile.svg)

**Full mechanism in neutral water.** The hydroxide-attack picture (Figure 4)
is a charge-balanced teaching model; in ordinary neutral water the incoming
nucleophile is H₂O itself, and every step needs an explicit proton-transfer
partner. Figure B2 completes the picture: (1) a water lone pair attacks Si
through a five-coordinate transition state exactly as in Figure 4, but the
incoming ligand is neutral H₂O, not HO⁻; (2) the leaving Cl⁻ is solvated;
(3) the newly formed Si–OH₂⁺ still carries an acidic proton, which a second,
external water molecule removes, regenerating H₃O⁺ and leaving neutral
Cl₃Si–OH. Three further identical rounds give Si(OH)₄ + 4HCl, which
condenses further (Si(OH)₄ → SiO₂·nH₂O) as already noted.

![Figure B2. SiCl₄ + H₂O (neutral water): the full two-part mechanism — attack, then proton relay to a second water.](/notes/hydrolysis/b2_sicl4_neutral_mechanism.svg)

Si(OH)₄ → SiO₂·nH₂O + (2 - n)H₂O (condensation)

Ignatov and co-workers studied gas-phase SiCl₄ hydrolysis computationally. Their results distinguish a four-membered cyclic pathway at high temperature from pathways assisted by water clusters. These results show why solvent participation and proton transfer matter; they do not establish one universal mechanism for bulk aqueous hydrolysis. The formal hydroxide-attack scheme in Figure 4 illustrates electron bookkeeping rather than reproducing that gas-phase calculation.

### Silicon tetrafluoride and halide trends

SiF₄ reacts with water but HF/F⁻ strongly complexes unreacted SiF₄ to [SiF₆]²⁻. The result is partial net hydrolysis, unlike the simple complete-substitution picture often drawn for SiCl₄.

3SiF₄ + 4H₂O → Si(OH)₄ + 2H₂SiF₆

**Mechanism.** The first (hydrolytic) step is ordinary associative
substitution at Si, identical in curly-arrow terms to SiCl₄'s. What is new is
a *second*, purely Lewis acid–base step running in parallel: the F⁻ (or HF)
released is captured by unreacted SiF₄, which is still strongly Lewis-acidic
toward small, hard F⁻, forming octahedral [SiF₆]²⁻. This competing capture
consumes three of every four SiF₄ molecules before they can be hydrolysed,
which is why net hydrolysis is only partial — exactly the same stoichiometric
logic as BF₃'s fluoride trap in Section 4.1, applied at Si instead of B.

![Figure B3. SiF₄ partial hydrolysis: the competing [SiF₆]²⁻-forming step.](/notes/hydrolysis/b3_sif4_trap.svg)

**Order caveat.** If a question explicitly invokes the supplied JEE convention, use SiF₄ \> SiCl₄ \> SiBr₄ \> SiI₄ for Lewis-acid/initial associative tendency. Do not use that order to claim identical extent, product distribution or conditions.

### Hydrides, carbides and organosilicon

SiH₄ is base-catalytically hydrolysed through attack at Si plus proton transfer to hydridic H. CH₄ lacks this polarity and accessible pathway. Pure silanes may appear stable in rigorously pure water, but traces of alkali from glass can catalyse rapid hydrolysis—a condition-dependence emphasized by Greenwood–Earnshaw.

| **Compound** | **Hydrolysis product(s)** | **Recognition rule**           |
|--------------|---------------------------|--------------------------------|
| **Be₂C**     | CH₄ + Be(OH)₂             | Methanide C⁴⁻ → CH₄            |
| **Al₄C₃**    | CH₄ + Al(OH)₃             | Methanide C⁴⁻ → CH₄            |
| **CaC₂**     | C₂H₂ + Ca(OH)₂            | Acetylide C₂²⁻ → ethyne        |
| **Mg₂C₃**    | C₃H₄ + Mg(OH)₂            | Allylenide-type C₃⁴⁻ → propyne |


**Mechanism.** Every entry in this table is a simple Brønsted acid–base
protonation — there is no electrophilic centre, leaving group, or curly-arrow
substitution in the covalent sense, because the C–metal interaction is
essentially ionic. Each lone pair on the carbanion (C⁴⁻, [C≡C]²⁻, or the
allylenide-type [C≡C–CH₂]⁴⁻ unit) simply abstracts H⁺ directly from a
surrounding water molecule, one proton at a time, until the fully protonated
hydrocarbon is released. Figure B5 lays out all three cases together and
shows why the *identity of the carbanion alone* — not any mechanistic
difference — fixes which hydrocarbon comes off: a mononuclear C⁴⁻ always
gives CH₄ (methanide, e.g. Al₄C₃, Be₂C), a C≡C triple-bonded dicarbide always
gives ethyne (acetylide, CaC₂), and the three-carbon allylenide/propynide-type
unit in Mg₂C₃ gives propyne.

![Figure B5. Carbanion identity fixes the hydrocarbon released on protonation of ionic carbides.](/notes/hydrolysis/b5_carbide_protonation.svg)

### Chlorosilanes and silicones

Hydrolysis of R₂SiCl₂ gives R₂Si(OH)₂, and silanol condensation gives Si–O–Si chains or rings. Monofunctional R₃SiCl caps a chain; difunctional R₂SiCl₂ builds chains; trifunctional RSiCl₃ introduces cross-links. The organic groups face outward and supply water repellency, while the strong flexible Si–O–Si backbone gives thermal and oxidative stability.

**Mechanism.** Every Si–Cl in R_nSiCl_(4−n) hydrolyses by the same
associative substitution as SiCl₄ (attack at Si, Cl⁻ leaves, proton relay to
solvent) to give the corresponding silanol R_nSi(OH)_(4−n). The silanol
Si–OH groups then undergo a *second*, distinct step — condensation — in
which one Si–OH oxygen attacks a neighbouring Si (displacing another OH⁻ or,
under acid catalysis, H₂O) to build an Si–O–Si linkage, releasing H₂O.
Figure B6 lays out how many condensation partners each silicon has available
(set directly by how many Cl/OH groups it started with) and therefore what
network results: one OH left free per Si (R₃SiCl) can only cap a chain end;
two (R₂SiCl₂) build linear or cyclic chains; three (RSiCl₃) branch into a
cross-linked three-dimensional network.

![Figure B6. From R_nSiCl_(4−n) to silicone architecture: hydrolysis then condensation, and how R-group count sets the network dimensionality.](/notes/hydrolysis/b6_silicone_condensation.svg)

## 4.3 Group 15: attack-site and product traps

### NF₃, NCl₃ and PCl₃ are not analogous

| **Species** | **Dominant result** | **Reasoning** |
|----|----|----|
| **NF₃** | No ordinary hydrolysis; drastic conditions: 2NF₃ + 3H₂O → N₂O₃ + 6HF | Strong N–F bonds, shielded small N and high kinetic barrier. |
| **NCl₃** | NCl₃ + 3H₂O → NH₃ + 3HOCl | Product pattern corresponds to OH at Cl and H at N; overall redox audit is essential. |
| **PCl₃** | PCl₃ + 3H₂O → H₃PO₃ + 3HCl | Attack at P, sequential substitution, then tautomeric P=O/P–H form. |

**Oxyacid basicity.** H₃PO₃ is best written HP(O)(OH)₂ and is dibasic. H₃PO₂ is H₂P(O)(OH) and is monobasic. Count O–H groups, not total hydrogen atoms.


**Full mechanism (PCl₃ → H₃PO₃, and by the identical route AsCl₃ → H₃AsO₃).**
Water attacks the electrophilic P (or As), exactly as it attacks B or Si — a
lone pair donates into a P-centred acceptor orbital while a P–Cl bond weakens
and Cl⁻ departs, with proton transfer converting Cl into HCl. Three
repetitions replace all three halogens, giving the unstable trigonal-pyramidal
P(OH)₃ (P(III), with a stereochemically active lone pair on P — directly
analogous to As(OH)₃, which *is* the stable, isolated form for arsenic).
For phosphorus specifically, P(OH)₃ then tautomerises: the P lone pair forms
a new P–H bond while one O–H's electrons shift to make the thermodynamically
much more stable P=O double bond, giving HP(O)(OH)₂ — H₃PO₃. Figure C1 shows
both the substitution step and this tautomerisation explicitly, and makes
the basicity rule visually obvious: only the two remaining O–H groups can
ionise (the new P–H bond is not acidic), so H₃PO₃ is dibasic, not tribasic,
even though it has three hydrogens in its molecular formula.

![Figure C1. PCl₃ hydrolysis followed by P(III)→P(V)-type tautomerisation — the structural origin of H₃PO₃'s dibasicity.](/notes/hydrolysis/c1_pcl3_tautomer.svg)

### PCl₅, heavier trichlorides and phosphorus networks

PCl₅ + 4H₂O → H₃PO₄ + 5HCl (excess water)

AsCl₃ + 3H₂O → H₃AsO₃ + 3HCl

SbCl₃ + H₂O → SbOCl↓ + 2HCl

**Mechanism.** The first step — nucleophilic attack at Sb (or Bi), Cl⁻
leaving — is identical to any Group 13/14/15 halide substitution already
covered. What is distinctive here is what happens to the resulting
Cl₂M–OH intermediate: rather than being attacked a second and third time to
give the idealised M(OH)₃, the increasingly metallic/ionic character down
the group favours *intramolecular condensation* — the M–OH oxygen's lone
pair displaces a second Cl⁻ directly (an intramolecular version of the
condensation step in Figure B6), forming an M=O/M–O–Cl linkage and
precipitating the insoluble oxychloride. Figure C3 traces this competing
pathway explicitly.

![Figure C3. SbCl₃/BiCl₃: why hydrolysis stalls at the insoluble oxychloride instead of reaching M(OH)₃.](/notes/hydrolysis/c3_sboci_bioci.svg)

BiCl₃ + H₂O → BiOCl↓ + 2HCl

The Sb/Bi oxychlorides are a high-yield ‘partial hydrolysis’ pattern: as metallic/ionic character increases, condensation/dehydration and insoluble oxyhalide formation compete with an idealized M(OH)₃ product. P₄O₁₀ and P₄S₁₀ hydrolyse by cleavage of bridging links; condensed phosphates undergo chain shortening, and cyclic phosphates can ring-open.


**Mechanism.** Each bridging P–O–P oxygen in the P₄O₁₀ cage (and the
analogous P–S–P bridge in P₄S₁₀) is opened by the same associative attack
already familiar from PCl₃/PCl₅: a water lone pair adds to one bridgehead P,
and the P–O(bridge)–P linkage breaks heterolytically with the electron pair
staying on the departing bridging oxygen (or sulfur), which is then
protonated to give a second P–OH (or P–SH → after further steps, H₂S).
Figure C5 shows one bridge opening explicitly; the same step repeated at all
six bridges of P₄O₁₀ gives 4H₃PO₄, and at all six bridges of P₄S₁₀ gives
4H₃PO₄ + 10H₂S. Condensed (chain or ring) phosphates hydrolyse by identical
attack at a chain/ring phosphorus, shortening the chain or opening the ring
one P–O–P bond at a time.

![Figure C5. P₄O₁₀ hydration: stepwise nucleophilic opening of each bridging P–O–P bond.](/notes/hydrolysis/c5_p4o10_bridge.svg)

**PCl₅ end-to-end: a two-mechanism, two-step energy profile.** PCl₅'s
hydrolysis is the textbook case of a single compound changing mechanism
partway through (Section 3.6). Figure C2 draws the complete reaction
coordinate: step 1 is ordinary substitution at P (limited water; POCl₃ +
HCl is isolable, matching a well-defined intermediate energy minimum); step
2 is addition–elimination at P (excess water; water adds to the P=O centre
of POCl₃, then a Cl⁻ collapses out, exactly as for SOCl₂ in Section 3.2) —
repeated three more times to reach H₃PO₄ + 3HCl. The two mechanisms have
different transition-state character (‡₁ is associative substitution, ‡₂ is
addition–elimination), which is exactly why POCl₃ can be isolated as a
stable species under limited water but not under excess water.

![Figure C2. PCl₅ → POCl₃ → H₃PO₄: the two-step, two-mechanism free-energy profile.](/notes/hydrolysis/c2_pcl5_profile.svg)

P₄S₁₀ + 16H₂O → 4H₃PO₄ + 10H₂S

P₄ + 3OH⁻ + 3H₂O → PH₃ + 3H₂PO₂⁻

### Saline nitrides and phosphides

Mg₃N₂ + 6H₂O → 3Mg(OH)₂ + 2NH₃

Ca₃P₂ + 6H₂O → 3Ca(OH)₂ + 2PH₃


**Mechanism.** N³⁻ and P³⁻ are among the strongest Brønsted bases that
appear in this course — no electrophile, leaving group, or curly-arrow
substitution is needed at all. Each anion lone pair abstracts H⁺ directly
from a water molecule, one proton at a time, until the fully protonated
hydride (NH₃ or PH₃) is released; Figure H2 draws this explicitly for both
ions side by side with the counter-cation hydroxide product.

![Figure H2. Saline nitride/phosphide hydrolysis: direct protonation of an extremely basic anion (no covalent substitution involved).](/notes/hydrolysis/h2_saline_nitride.svg)

**P₄ in hot alkali: disproportionation, not substitution.** P₄ + 3OH⁻ +
3H₂O → PH₃ + 3H₂PO₂⁻ looks superficially like a hydrolysis equation but is
mechanistically a disproportionation: some P(0) atoms are reduced to P(−3)
in PH₃ (a 3-electron gain each) while others are oxidised to P(+1) in
hypophosphite H₂PO₂⁻ (a 1-electron loss each), with OH⁻ acting as the
nucleophile that attacks the oxidised phosphorus centres. Figure H3 shows
the electron bookkeeping.

![Figure H3. P₄ disproportionation in hot alkali: simultaneous P(0)→P(−3) reduction and P(0)→P(+1) oxidation.](/notes/hydrolysis/h3_p4_disproportionation.svg)

These are protonation reactions of very basic anions. Do not generalize them to covalent or interstitial nitrides/carbides, which may resist water or give different products.

## 4.4 Group 16: oxides, oxyhalides, peroxoacids and fluorides

| **Class** | **Representative reaction** | **Mechanistic label** |
|----|----|----|
| **Acid anhydride** | SO₃ + H₂O → H₂SO₄ | Addition |
| **Thionyl halide** | SOCl₂ + H₂O → SO₂ + 2HCl | Addition–elimination / collapse |
| **Sulfuryl halide** | SO₂Cl₂ + 2H₂O → H₂SO₄ + 2HCl | Addition–elimination |
| **Peroxoacid** | H₂SO₅ + H₂O → H₂SO₄ + H₂O₂ | Addition–elimination / O–O cleavage |
| **Tetrafluoride** | SF₄ + 2H₂O → SO₂ + 4HF | Substitution then collapse |
| **Hexafluoride** | SF₆ + H₂O → no ordinary reaction | Kinetically inert |

SF₆ is a classic warning against ‘expanded octet means reactive’. Strong S–F bonds, octahedral shielding and an inaccessible attack trajectory create a high barrier. Down the group, larger centres make hydrolysis easier: a useful qualitative order is TeF₆ \> SeF₆ ≫ SF₆, with product speciation depending on water and conditions.

SeF₆ + 4H₂O → H₂SeO₄ + 6HF

TeF₆ + 6H₂O → Te(OH)₆ + 6HF


**Mechanism and the seesaw-vs-octahedral contrast.** SF₄'s seesaw (C₂ᵥ)
shape leaves one face of S sterically and electronically open (the
equatorial lone pair pushes the axial/equatorial F's out of the way of an
incoming nucleophile): water attacks that open face, one F is substituted
for OH, and this is repeated — but instead of stopping at a stable
tetra-substituted species, HF elimination between adjacent S–F/S–OH groups
generates the far more stable S=O bond, so overall the seesaw collapses
straight to SO₂ + 4HF. SF₆'s octahedral (Oₕ) cage, by contrast, has *no*
comparably open face — every trajectory to S is blocked both sterically (six
tightly packed F) and electronically (no accessible low-energy acceptor
orbital reachable without severe distortion), so despite hydrolysis being
thermodynamically favourable, the activation barrier is prohibitive under
ordinary conditions. Figure D4 draws both structures and their contrasting
outcomes together. Down the group, larger, more polarisable and more
accessible central atoms erode this kinetic protection: SeF₆ and especially
TeF₆ hydrolyse by the same substitution logic that works for SF₄ (successive
F/OH exchange, without needing the special HF-elimination step since Se/Te
retain octahedral E(OH)₆-type products), giving the order TeF₆ > SeF₆ ≫ SF₆.

![Figure D4. SF₄ (open, reactive) vs SF₆ (shielded, inert): the structural origin of the kinetic contrast.](/notes/hydrolysis/d4_sf4_sf6.svg)

**Other mixed oxyhalides (CrO₂Cl₂, SOF₄).** These hydrolyse by the identical
addition–elimination motif as SOCl₂/SO₂Cl₂ — water adds at the central atom
(Cr or S) while a halide leaves — only the surviving oxo groups and the
identity of the final oxoacid differ: CrO₂Cl₂ (chromyl chloride) + 2H₂O →
H₂CrO₄ + 2HCl; SOF₄ + H₂O → (after successive substitution of the remaining
S–F bonds) H₂SO₄ + 4HF.

![Figure H4. CrO₂Cl₂ and SOF₄: the same addition–elimination motif as SOCl₂/SO₂Cl₂, applied to a different central atom/halide combination.](/notes/hydrolysis/h4_mixed_oxyhalides.svg)

## 4.5 Interhalogens

In AXₙ, A is usually the larger, less electronegative central atom. Formal hydrolysis replaces A–X bonds by A–OH/oxo groups and produces HX. The product oxidation state of A is usually retained unless a separate redox step occurs.

| **Species** | **Exam-standard equation** | **Trap** |
|----|----|----|
| **BrCl** | BrCl + H₂O → HOBr + HCl | Not HBr + HOCl: OH goes to the less electronegative Br centre. |
| **ClF₃** | ClF₃ + 2H₂O → HClO₂ + 3HF | Central Cl remains +3. |
| **BrF₅** | BrF₅ + 3H₂O → HBrO₃ + 5HF | Central Br remains +5. |
| **IF₇** | IF₇ + 6H₂O → H₅IO₆ + 7HF | Orthoperiodic acid is the hydrated product. |


**Mechanism and the full attack-site rule.** In every interhalogen AXₙ, A is
the larger, less electronegative atom and therefore carries the greater
share of positive formal charge (even though the A–X bond dipole may look
counter-intuitive at first glance, as in Br–Cl). Water's oxygen lone pair
always attacks A, an A–X bond weakens and X⁻ departs as HX after proton
transfer — the same substitution logic as every other central-atom attack in
this chapter — and this is simply repeated at A as many times as there are
X ligands (with elimination of water where an A=O bond is more stable than
two A–OH groups). Because A itself is never the site of electron loss/gain
in this substitution, its oxidation state is unchanged from reactant to
product: Cl stays +3 throughout ClF₃ → HClO₂, Br stays +5 throughout BrF₅ →
HBrO₃, and I stays +7 throughout IF₇ → H₅IO₆. Figure E1 lays out all four
worked cases together with this attack-site/oxidation-state pattern made
explicit.

![Figure E1. Interhalogen hydrolysis: attack always at the larger, less electronegative A; oxidation state of A is conserved throughout.](/notes/hydrolysis/e1_interhalogens.svg)

## 4.6 Xenon fluorides

XeF₂ and XeF₄ undergo redox hydrolysis; XeF₆ gives XeO₃ with xenon remaining in +6. Product recognition is easier after oxidation-state bookkeeping than after hybridization arguments.

XeF₂ + H₂O → Xe + 2HF + ½O₂

3XeF₄ + 6H₂O → 2Xe + XeO₃ + 12HF + 3/2 O₂


**Full mechanism and electron bookkeeping (XeF₂).** Nucleophilic attack at
the linear, electron-rich Xe(+2) centre proceeds exactly like any other
central-atom substitution: a water lone pair attacks Xe, one Xe–F bond
weakens and F⁻ departs as HF, giving an unstable Xe–OH intermediate.
Because Xe–OH is not a stable resting state, two such units combine and
collapse with loss of O₂: overall, two oxygens (each formally O(−II) in the
Xe–OH intermediate) are oxidised to O₂ (O(0)) while the corresponding Xe
centres are reduced from Xe(+2) to Xe(0) — a two-electron transfer per Xe,
balanced by the two-electron oxidation of the O₂ pair. Figure F1 draws the
substitution step and the electron audit side by side. XeF₄ undergoes the
identical initial substitution at Xe(+4), but disproportionates on
collapse: part of the Xe(+4) is fully reduced to Xe(0) (mirroring XeF₂)
while the rest survives as Xe(+4) in XeO₃ — so, again, it is *water's*
oxygen that is oxidised to O₂, not a change in the surviving Xe(+4) centre.

![Figure F1. XeF₂ hydrolysis: substitution at Xe followed by the redox collapse that releases O₂.](/notes/hydrolysis/f1_xef2_redox.svg)

XeF₆ + 3H₂O → XeO₃ + 6HF


**Mechanism — and why XeF₆ is not redox.** XeF₆ undergoes the same
substitution at Xe as XeF₂/XeF₄ — water lone pair attacks Xe, F⁻ departs as
HF — repeated across all six Xe–F bonds. The key difference is that Xe stays
at +6 throughout: three of the six resulting Xe–OH groups condense
(intramolecular dehydration, losing 3H₂O) to form three Xe=O bonds, giving
pyramidal XeO₃ directly, with no unstable Xe–OH intermediate needing to
disproportionate the way XeF₂'s and XeF₄'s do. Figure F2 draws the full
substitution/dehydration sequence.

![Figure F2. XeF₆ hydrolysis: complete substitution and dehydration to XeO₃, with no Xe oxidation-state change.](/notes/hydrolysis/f2_xef6.svg)

## 4.7 Hydrolysis of hydrated cations and salts

Aqua-ion hydrolysis is Brønsted acidity of a coordinated water molecule, not replacement of a metal–ligand bond by OH. The metal withdraws electron density from coordinated H₂O, polarizing O–H and enabling proton transfer to bulk water.

[M(H₂O)₆]ⁿ⁺ + H₂O ⇌ [M(H₂O)₅(OH)]⁽ⁿ⁻¹⁾⁺ + H₃O⁺


**Full mechanism.** This is a Brønsted proton-transfer equilibrium, not a
substitution at the metal — the metal–oxygen coordinate bond is never broken.
The cationic metal centre withdraws electron density through the
coordination bond, polarising a coordinated O–H bond (Mδ+←Oδ−–Hδ+); a bulk
water molecule's lone pair then removes that proton directly, with the O–H
electron pair remaining on the coordinated oxygen (now stabilised as part of
a metal-bound hydroxide). Figure G1 draws both the inductive polarisation
and the intermolecular proton-transfer arrow explicitly. Higher metal
charge and smaller radius increase the polarisation and hence the acidity —
Figure G2 compares the resulting free-energy profiles for [Fe(H₂O)₆]³⁺
(pKa ≈ 2.2, low barrier) against [Fe(H₂O)₆]²⁺ (pKa ≈ 9.5, higher barrier),
making quantitative the qualitative "higher charge density → stronger
hydrolysis" trend.

![Figure G1. Aqua-ion acidity: the metal polarises a coordinated O–H; a bulk-water lone pair removes the proton.](/notes/hydrolysis/g1_aqua_ion_proton_transfer.svg)

![Figure G2. Fe³⁺(aq) vs Fe²⁺(aq): charge density lowers the proton-transfer barrier and shifts the equilibrium toward the conjugate-base aqua-hydroxo ion.](/notes/hydrolysis/g2_fe3_fe2_profile.svg)

| **Trend** | **Interpretation** | **Examples** |
|----|----|----|
| **Higher charge and smaller radius** | Greater charge density; stronger O–H polarization | Fe³⁺ \> Fe²⁺; Al³⁺ appreciable; Mg²⁺ weaker |
| **Low-charge large ions** | Little polarization of coordinated water | Na⁺, K⁺ salts are essentially non-hydrolysing |
| **Anion of weak acid** | A⁻ accepts H⁺ from water, generating OH⁻ | CO₃²⁻, CN⁻, CH₃COO⁻ solutions are basic |
| **Cation of weak base** | BH⁺ donates H⁺ to water | NH₄⁺ solutions are acidic |

**Charge density—not oxidation state alone.** Higher oxidation state often increases aqua-ion acidity, but radius, covalency, coordination, ligand identity and precipitation also matter. ‘More charge = more hydrolysis’ is a trend, not an unconditional law.

## 4.8 Salt-hydrolysis equations and pH formulas

For JEE ionic-equilibrium problems, hydrolysis constants are equilibrium expressions, not mechanism labels. Treat salts of weak acids/bases separately from covalent main-group hydrolysis.


**Mechanism.** These, too, are simple Brønsted proton-transfer equilibria —
no covalent bond at the "hydrolysing" atom is made or broken. For a salt of
a weak acid, A⁻'s own lone pair removes H⁺ directly from a water molecule,
leaving OH⁻ behind (solution turns basic). For a salt of a weak base, BH⁺'s
N–H (or equivalent) bond is polarised enough that a water lone pair can
remove that proton, generating H₃O⁺ (solution turns acidic). Figure G3
draws both proton transfers explicitly, alongside the corresponding
Kₕ = Kw/Ka or Kw/Kb relations used in the pH formulas below.

![Figure G3. Salt hydrolysis: direct Brønsted proton transfer for a weak-acid anion (top) and a weak-base cation (bottom).](/notes/hydrolysis/g3_salt_hydrolysis.svg)

| **Salt type** | **Hydrolysis relation** | **Useful approximation at concentration C** |
|----|----|----|
| **Strong base + weak acid (A⁻)** | A⁻ + H₂O ⇌ HA + OH⁻; Kₕ = K_w/K_a | [OH⁻] ≈ √(KₕC); pH = 7 + ½(pK_a + log C) at 25 °C |
| **Weak base + strong acid (BH⁺)** | BH⁺ + H₂O ⇌ B + H₃O⁺; Kₕ = K_w/K_b | [H⁺] ≈ √(KₕC); pH = 7 − ½(pK_b + log C) at 25 °C |
| **Weak acid + weak base** | Both ions react with water | pH ≈ 7 + ½(pK_a − pK_b) at 25 °C |
| **Strong acid + strong base** | No appreciable acid–base hydrolysis | pH ≈ 7 at 25 °C, ignoring activity effects |

**Approximation check.** The square-root formulas assume dilute solution, small fractional hydrolysis and ideal activities. For polyprotic ions, very dilute solutions, or appreciable hydrolysis, write the complete charge and mass balances.

# 5 Master tables

## 5.1 Product-prediction reaction bank

| **Reactant** | **Condition** | **Products** | **Exam note** |
|----|----|----|----|
| **CCl₄** | superheated steam | COCl₂ + 2HCl | Partial; ordinary water gives no reaction |
| **SiCl₄** | excess H₂O | Si(OH)₄ / hydrated SiO₂ + HCl | Rapid; condensation follows |
| **SiF₄** | H₂O | Si(OH)₄ + H₂SiF₆ | Partial net hydrolysis |
| **BF₃** | H₂O | B(OH)₃ + HBF₄ | Partial through fluoride capture |
| **BCl₃** | H₂O | B(OH)₃ + HCl | Complete in excess water |
| **PCl₃** | H₂O | H₃PO₃ + HCl | Product dibasic |
| **PCl₅** | limited H₂O | POCl₃ + HCl | One-step partial hydrolysis |
| **PCl₅** | excess H₂O | H₃PO₄ + HCl | Overall complete hydrolysis |
| **AsCl₃** | H₂O | H₃AsO₃ + HCl | No P-like tautomer needed |
| **SbCl₃ / BiCl₃** | H₂O | SbOCl / BiOCl + HCl | Insoluble oxychloride |
| **NF₃** | ordinary H₂O | No reaction | Kinetic inertness |
| **NCl₃** | H₂O | NH₃ + HOCl | Overall redox |
| **SOCl₂** | H₂O | SO₂ + HCl | Rapid collapse |
| **SO₂Cl₂** | H₂O | H₂SO₄ + HCl | Addition–elimination |
| **SO₃** | H₂O | H₂SO₄ | Addition |
| **H₂SO₅** | H₂O | H₂SO₄ + H₂O₂ | Peroxoacid cleavage |
| **P₄O₁₀** | H₂O | H₃PO₄ | Bridge cleavage |
| **P₄S₁₀** | H₂O | H₃PO₄ + H₂S | P–S cleavage |
| **SF₄** | H₂O | SO₂ + HF | Hydrolyses |
| **SF₆** | H₂O | No ordinary reaction | Very high kinetic barrier |
| **XeF₂** | H₂O | Xe + HF + O₂ | Redox |
| **XeF₄** | H₂O | Xe + XeO₃ + HF + O₂ | Redox/disproportionation |
| **XeF₆** | H₂O | XeO₃ + HF | No Xe oxidation-state change |
| **BrCl** | H₂O | HOBr + HCl | OH attaches to Br |
| **SiH₄** | trace OH⁻ | SiO₂ + H₂ | Base-catalysed push–pull |
| **BH₄⁻** | H₂O/H⁺ | borate/boric acid + H₂ | Strong pH dependence |
| **Al₄C₃** | H₂O | Al(OH)₃ + CH₄ | Methanide |
| **CaC₂** | H₂O | Ca(OH)₂ + C₂H₂ | Acetylide |
| **Mg₂C₃** | H₂O | Mg(OH)₂ + C₃H₄ | Propyne |
| **Mg₃N₂** | H₂O | Mg(OH)₂ + NH₃ | Saline nitride |
| **Ca₃P₂** | H₂O | Ca(OH)₂ + PH₃ | Saline phosphide |
| **BeCl₂** | H₂O | Be(OH)₂ + HCl | Excess OH⁻ gives [Be(OH)₄]²⁻ |
| **AlCl₃** | H₂O | hydrated Al(OH)₃/acidic solution | Aqua-ion hydrolysis; speciation is pH-dependent |
| **SnCl₄** | H₂O | hydrated SnO₂ + HCl | Much more readily hydrolysed than SnMe₄ |
| **Al₂(CH₃)₆** | H₂O | Al(OH)₃ + CH₄ | Al–C protonolysis |
| **R₃Ga** | H₂O | Ga(OH)₃ + 3RH | Ga–C protonolysis |
| **B₂H₆** | H₂O | B(OH)₃ + H₂ | Hydrogen evolution; condition-dependent rate |
| **N₂O₃** | H₂O | HNO₂ | Acid anhydride hydration |
| **N₂O₅** | H₂O | HNO₃ | Acid anhydride hydration |
| **SO₂** | H₂O | H₂SO₃(aq) | Equilibrium; dissolved SO₂ species |
| **CO₂** | H₂O | H₂CO₃(aq) | Equilibrium, not complete conversion |
| **H₂S₂O₈** | H₂O | H₂SO₄ + H₂O₂ | Marshall’s acid; O–O cleavage |
| **H₂S₂O₇** | H₂O | 2H₂SO₄ | Pyrosulfuric acid bridge cleavage |
| **CrO₂Cl₂** | H₂O | H₂CrO₄ + HCl | Addition–elimination |
| **SOF₄** | H₂O | H₂SO₄ + HF | Mixed oxo-fluoride hydrolysis |
| **SeF₆** | H₂O | H₂SeO₄ + HF | Slow/limited relative to TeF₆ |
| **TeF₆** | H₂O | Te(OH)₆ + HF | Readily hydrolysed |
| **ClF₃** | H₂O | HClO₂ + HF | Cl retains +3 |
| **BrF₅** | H₂O | HBrO₃ + HF | Br retains +5 |
| **IF₇** | H₂O | H₅IO₆ + HF | Hydrated orthoperiodic acid |
| **R₃SiCl** | H₂O | R₃SiOH + HCl | Silanol; chain-stopping unit |
| **R₂SiCl₂** | H₂O | R₂Si(OH)₂ + HCl | Condenses to linear/cyclic silicone |
| **P₄** | hot alkali/H₂O | PH₃ + H₂PO₂⁻ | Disproportionation |
| **Be(O₂CCH₃)₂** | limited H₂O | basic Be₄O acetate + CH₃CO₂H | Partial hydrolysis/cluster formation |

## 5.2 Trend bank—with labels

| **Trend** | **Status** | **Use** |
|----|----|----|
| **SiCl₄ ≫ CCl₄** | Robust | Kinetic accessibility of attack/hypercoordination; not thermodynamic sign alone. |
| **BF₃ \< BCl₃ \< BBr₃ \< BI₃** | JEE-standard | Lewis acidity/hydrolysis tendency of boron trihalides; state medium caveat. |
| **SiF₄ \> SiCl₄ \> SiBr₄ \> SiI₄** | Source/JEE convention | Initial associative/Lewis-acid tendency only; do not infer extent. |
| **SnCl₄ \> SnCl₂ and SnCl₄ ≫ SnMe₄** | Robust qualitative | Higher electrophilicity; methyl donation and C–Sn cleavage penalty. |
| **NCl₃ ≫ NF₃** | Robust | Strong N–F bonds and kinetic shielding make NF₃ inert. |
| **PCl₃ \> PF₃** | Robust qualitative | P–F is stronger and PF₃ is less readily hydrolysed. |
| **TeF₆ \> SeF₆ ≫ SF₆** | Qualitative | Larger central atoms are more accessible; products/conditions differ. |
| **Fe³⁺ aqua ion \> Fe²⁺ aqua ion** | Robust | Higher charge density gives stronger coordinated-water acidity. |

## 5.3 Oxyacid formula, structure and basicity

| **Formula** | **Useful Lewis form** | **Basicity** | **Hydrolytic source** |
|----|----|----|----|
| **H₃PO₂** | H₂P(O)(OH) | 1 | Alkaline P₄ gives H₂PO₂⁻ |
| **H₃PO₃** | HP(O)(OH)₂ | 2 | PCl₃ hydrolysis |
| **H₃PO₄** | P(O)(OH)₃ | 3 | PCl₅/POCl₃/P₄O₁₀ hydrolysis |
| **H₃AsO₃** | As(OH)₃ | 3 (weak) | AsCl₃ hydrolysis |
| **H₅IO₆** | I(O)(OH)₅ | 5 formal OH groups | IF₇ hydrolysis |

![Structural counting rule for the basicity of phosphorus oxyacids.](/notes/hydrolysis/orig19_oxyacid_basicity.svg)

| **Acid** | **O–H groups / basicity** | **P–H bonds** | **Reducing behaviour** |
|----|----|----|----|
| **H₃PO₂** | 1 / monobasic | 2 | Strong reducing agent |
| **H₃PO₃** | 2 / dibasic | 1 | Reducing agent |
| **H₃PO₄** | 3 / tribasic | 0 | Not reducing under ordinary conditions |

**Two independent counts.** O–H groups control acid basicity. P–H bonds are the structural clue for reducing character. Do not use total hydrogen count for either conclusion.

# 6 Forty high-yield JEE traps

**TRAP 01 Negative ΔG° means rapid hydrolysis.**

**Fix:** ΔG° controls equilibrium; ΔG‡ controls rate. CCl₄ is the standard counterexample.

**TRAP 02 A vacant d orbital is required for hydrolysis.**

**Fix:** Water donates into a molecular acceptor/σ\* orbital. d-orbital language is a historical/JEE shortcut, not a necessity.

**TRAP 03 Five-coordinate automatically proves sp³d bonding.**

**Fix:** Geometry does not prove localized hybridization. Use hypercoordinate/3c–4e MO language for explanation.

**TRAP 04 The strongest E–X bond always gives the slowest hydrolysis.**

**Fix:** Only bonds significantly broken in the rate-controlling transition state determine the barrier; attack, solvation and proton relay may dominate.

**TRAP 05 Lewis-acid strength alone fixes every hydrolysis order.**

**Fix:** It is one factor. Sterics, leaving group, secondary complexation, solvent and product sinks can reverse or complicate a trend.

**TRAP 06 BF₃ does not hydrolyse.**

**Fix:** It undergoes partial net hydrolysis because HF/F⁻ traps unreacted BF₃ as BF₄⁻/HBF₄.

**TRAP 07 SiF₄ gives only Si(OH)₄ and HF.**

**Fix:** Secondary formation of H₂SiF₆/[SiF₆]²⁻ changes the net stoichiometry.

**TRAP 08 SiCl₄ gives a stable bottle of molecular Si(OH)₄ in water.**

**Fix:** Si(OH)₄ is a useful formal product; condensation gives hydrated silica/siloxanes.

**TRAP 09 CCl₄ never hydrolyses under any condition.**

**Fix:** It is inert ordinarily, but superheated steam can give COCl₂ + 2HCl.

**TRAP 10 PCl₃ hydrolysis gives H₃PO₄.**

**Fix:** P remains +3 and gives H₃PO₃; PCl₅/POCl₃ gives H₃PO₄.

**TRAP 11 H₃PO₃ is tribasic because it has three H atoms.**

**Fix:** Write HP(O)(OH)₂: only two O–H hydrogens are acidic.

**TRAP 12 NCl₃ and PCl₃ hydrolyse analogously.**

**Fix:** NCl₃ gives NH₃ + HOCl; PCl₃ gives H₃PO₃ + HCl. Attack-site/electron-flow and redox bookkeeping differ.

**TRAP 13 NCl₃ hydrolysis is not redox because water is merely added.**

**Fix:** Formal N changes +3→−3 and Cl changes −1→+1 in NH₃ + HOCl.

**TRAP 14 SF₆ hydrolyses readily because sulfur can expand its octet.**

**Fix:** SF₆ is extraordinarily inert due to strong S–F bonds, octahedral shielding and a high kinetic barrier.

**TRAP 15 XeF₂ and XeF₄ undergo only substitution.**

**Fix:** Their hydrolysis is redox and produces Xe(0) and O₂.

**TRAP 16 XeF₆ hydrolysis reduces xenon.**

**Fix:** Xe remains +6 in XeO₃; this is not the same redox pattern as XeF₂/XeF₄.

**TRAP 17 BrCl + H₂O gives HBr + HOCl.**

**Fix:** Br is the less electronegative central/electrophilic atom: products are HOBr + HCl.

**TRAP 18 SiH₄ behaves like CH₄ in water.**

**Fix:** SiH₄ is base-catalytically hydrolysed because Si–H is Siδ+–Hδ− and attack at Si can couple to H₂ formation.

**TRAP 19 Si–C hydrolyses as readily as Si–Cl.**

**Fix:** Protonolysis of methyl is not as favourable; Si–C bonds help make silicones water-resistant.

**TRAP 20 All carbides give methane.**

**Fix:** Product depends on the carbon anion: methanide→CH₄, acetylide→C₂H₂, Mg₂C₃-type→C₃H₄.

**TRAP 21 Every nitride gives NH₃ with water.**

**Fix:** Saline nitrides do; covalent/interstitial nitrides need not.

**TRAP 22 Every molecular halide hydrolyses completely.**

**Fix:** Kinetic inertness, fluoride complexation, oxyhalide precipitation and limited water can produce no/partial hydrolysis.

**TRAP 23 Aqua-ion hydrolysis means OH⁻ substitutes a water ligand.**

**Fix:** It commonly means deprotonation of coordinated H₂O, forming H₃O⁺ and a hydroxido complex.

**TRAP 24 Higher oxidation state always guarantees faster hydrolysis.**

**Fix:** Often it raises Lewis acidity, but radius, covalency, coordination and mechanism can dominate.

**TRAP 25 Hydrolysis is necessarily redox.**

**Fix:** Most are acid–base/substitution/addition processes; check oxidation states rather than assuming.

**TRAP 26 Oxyacid basicity equals total hydrogen count.**

**Fix:** Count ionizable O–H groups; E–H bonds usually do not donate ordinary acidic protons.

**TRAP 27 Partial hydrolysis means each molecule loses only some X groups.**

**Fix:** It may instead mean only a fraction of molecules are hydrolysed because HX is trapped by unreacted reagent, as in BF₃/SiF₄.

**TRAP 28 Water always attacks the central atom.**

**Fix:** Interhalogens and NCl₃-type cases can involve attack at a surrounding atom; carbonyl/oxo systems use π\* addition.

**TRAP 29 The first drawn product is the isolated final product.**

**Fix:** Tautomerization, condensation, precipitation, complexation and redox decomposition can alter it.

**TRAP 30 A textbook SN2 label proves one water molecule is in the transition state.**

**Fix:** Real mechanisms can contain water clusters and proton relays; ‘SN2-like’ is often only a topology label.

**TRAP 31 Hydrolysis conditions do not affect the product.**

**Fix:** Limited/excess water, steam, acid, base and temperature can change the product: PCl₅ and CCl₄ are classic examples.

**TRAP 32 SOCl₂ hydrolysis stops at isolable H₂SO₃.**

**Fix:** The formal acid collapses; the usual observed products are SO₂ + 2HCl.

**TRAP 33 BeCl₂ always precipitates Be(OH)₂ in alkali.**

**Fix:** Excess OH⁻ dissolves amphoteric Be(OH)₂ as [Be(OH)₄]²⁻.

**TRAP 34 Heating AlCl₃·6H₂O gives anhydrous AlCl₃.**

**Fix:** Strong aqua-ion hydrolysis leads toward oxide/oxyhydroxide with HCl loss; anhydrous AlCl₃ requires non-aqueous preparation.

**TRAP 35 Hydration and hydrolysis are identical.**

**Fix:** Hydration is association with water; hydrolysis changes bonding/speciation through substitution, proton transfer, addition or redox.

**TRAP 36 If no precipitate forms, no hydrolysis occurred.**

**Fix:** Products may remain soluble, gaseous, condensed or complexed; precipitation is only one possible sink.

**TRAP 37 A fluoride must hydrolyse faster because F⁻ is stable.**

**Fix:** Very strong E–F bonds, shielding and fluoride complexation can slow or limit hydrolysis; judge the whole pathway.

**TRAP 38 All hexafluorides behave like SF₆.**

**Fix:** Central-atom size matters: TeF₆ hydrolyses readily while SF₆ is exceptionally inert.

**TRAP 39 In a salt-pH problem Kₕ is always K_w/K_a.**

**Fix:** For BH⁺ salts Kₕ = K_w/K_b; for A⁻ salts Kₕ = K_w/K_a; weak-acid/weak-base salts require both.

**TRAP 40 The square-root pH formula is exact.**

**Fix:** It assumes dilute ideal solution and small hydrolysis; verify the approximation for concentrated or strongly hydrolysed salts.

# 7 Worked prediction examples

## Example 1. CCl₄ versus SiCl₄

Both are polarized and hydrolysis is thermodynamically favourable. The decisive difference is activation: Si is larger, more accessible and supports lower-barrier hypercoordinate/proton-relay pathways; CCl₄ is shielded and lacks a comparably accessible acceptor trajectory. Prediction: SiCl₄ rapid; CCl₄ no ordinary reaction.

## Example 2. BF₃ versus BCl₃

Both accept a water lone pair at B. BCl₃ hydrolyses completely to B(OH)₃ + HCl. BF₃ has stronger B–F bonding and the HF/F⁻ product complexes unreacted BF₃. Prediction: partial net BF₃ hydrolysis, 4BF₃ + 3H₂O → B(OH)₃ + 3HBF₄.

## Example 3. PCl₃ product and basicity

Attack/substitution at P replaces Cl by OH. The first Lewis picture P(OH)₃ tautomerizes to HP(O)(OH)₂. Therefore the product is H₃PO₃ and basicity is 2, not 3.

## Example 4. NCl₃ versus PCl₃

Do not use group similarity alone. NCl₃ gives NH₃ + HOCl and is formally redox; PCl₃ gives H₃PO₃ + HCl without changing P(+3). Product identity reveals different electron flow.

## Example 5. SF₄ versus SF₆

SF₄ has an accessible, lower-coordinate reactive surface and hydrolyses to SO₂/H₂SO₃ + HF. SF₆ has strong S–F bonds and an octahedrally shielded S centre. Prediction: SF₄ reacts; SF₆ is inert under ordinary conditions.

## Example 6. XeF₂, XeF₄ and XeF₆

Audit oxidation states. Xe(+2) and Xe(+4) partially reduce to Xe(0), so O₂ appears. Xe(+6) remains +6 in XeO₃; no O₂ is required in the standard equation.

## Example 7. Identify carbide gas

Translate the anion before balancing: C⁴⁻ accepts four protons to CH₄; C₂²⁻ accepts two to C₂H₂; C₃⁴⁻ accepts four to C₃H₄. Thus Al₄C₃→CH₄, CaC₂→C₂H₂, Mg₂C₃→C₃H₄.

## Example 8. Which aqua ion is more acidic: Fe³⁺ or Fe²⁺?

Same element means similar size, but +3 gives much higher charge density and stronger O–H polarization. [Fe(H₂O)₆]³⁺ hydrolyses more extensively and acidifies water more strongly.

## Example 9. PCl₅ with one equivalent versus excess water

One H₂O replaces two Cl equivalents as POCl₃ forms, releasing 2HCl. With three additional H₂O, POCl₃ gives H₃PO₄ + 3HCl. Always read the reagent amount.

## Example 10. SiH₄ versus CH₄

Nucleophilic attack is favoured at Siδ+; proton transfer to Hδ− releases H₂. Carbon in CH₄ is not comparably electrophilic and C–H has the opposite/weak polarity for this pathway. Prediction: base-catalysed SiH₄ hydrolysis; no CH₄ reaction.

## Example 11. BrCl hydrolysis

Cl is more electronegative, so Br is the electrophilic/central end. Replace Br–Cl by Br–OH and protonate Cl⁻: BrCl + H₂O → HOBr + HCl.

## Example 12. BH₄⁻ and pH

Hydride combines with protonic hydrogen to form H₂. Acid provides an efficient pull and accelerates hydrolysis; alkaline solution stabilizes BH₄⁻ unless catalysed. Products are boric acid in acid or borate in base, plus four H₂ per BH₄⁻.

## Example 13. SO₂Cl₂ hydrolysis

The net transformation replaces two S–Cl groups by S–OH and gives H₂SO₄ + 2HCl. The supplied exam notes classify this as addition–elimination. Do not call an addition species tetrahedral without counting ligands: adding one ligand to four-coordinate sulfur gives five-coordinate sulfur. A stepwise intermediate requires evidence beyond the product equation.

## Example 14. Caro’s versus Marshall’s acid

Both contain peroxide character. H₂SO₅ + H₂O gives H₂SO₄ + H₂O₂; H₂S₂O₈ first gives H₂SO₅ + H₂SO₄ and then a second water gives another H₂SO₄ + H₂O₂.

## Example 15. SiF₄ partial hydrolysis

Write hydrolysis and trapping separately. SiF₄ makes Si(OH)₄ + HF, but remaining SiF₄ captures HF/F⁻ as H₂SiF₆; net: 3SiF₄ + 4H₂O → Si(OH)₄ + 2H₂SiF₆.

## Example 16. BeCl₂ in excess alkali

Initial hydrolysis can form Be(OH)₂, but amphoterism dominates in excess OH⁻: Be(OH)₂ + 2OH⁻ → [Be(OH)₄]²⁻. State the medium before naming the final product.

## Example 17. Silicone functionality

R₃SiCl gives one silanol function and terminates chains; R₂SiCl₂ gives two functions and builds chains/rings; RSiCl₃ gives three functions and cross-links the network.

## Example 18. Hydrolysis of a weak-acid salt

For A⁻ at formal concentration C, Kₕ = K_w/K_a and [OH⁻] ≈ √(KₕC). Convert to pOH, then pH. This is ionic hydrolysis, not nucleophilic substitution at a covalent centre.

## Example 19. ClF₃ product

F is terminal and more electronegative; Cl remains +3. Replacing three Cl–F links by oxo/OH equivalents gives HClO₂ + 3HF after balancing water.

## Example 20. AlCl₃·6H₂O on heating

The highly polarising Al³⁺ ion acidifies coordinated water. Heating encourages hydrolysis/condensation and HCl loss rather than clean removal of six intact water molecules to anhydrous AlCl₃.

# 8 Original JEE-style practice

**Practice rule.** Attempt the questions without the reaction bank. Mark the attacked atom, likely path, oxidation-state change and final sink before choosing an option.

**Q1** Which observation best demonstrates kinetic rather than thermodynamic control?

> \(A\) SO₃ forms H₂SO₄ with water
>
> \(B\) CCl₄ persists in water although hydrolysis products are thermodynamically favoured
>
> \(C\) BF₃ forms BF₄⁻
>
> \(D\) Mg₃N₂ releases NH₃

**Q2** The most defensible modern description of the first hydrolytic attack on SiCl₄ is:

> \(A\) occupation of a pure Si 3d orbital forming an obligatory sp³d intermediate
>
> \(B\) donation of n(O) into a molecular acceptor/σ\*(Si–Cl) with hypercoordinate character
>
> \(C\) homolysis of O–H before collision
>
> \(D\) oxidation of Si(+4) to Si(+6)

**Q3** One mole of PCl₅ is treated first with one mole of water, then with excess water. The successive P products are:

> \(A\) PCl₃, H₃PO₃
>
> \(B\) POCl₃, H₃PO₄
>
> \(C\) H₃PO₃, H₃PO₄
>
> \(D\) P₂O₅, H₃PO₄

**Q4** Which equation is incorrect?

> \(A\) BrCl + H₂O → HOBr + HCl
>
> \(B\) XeF₆ + 3H₂O → XeO₃ + 6HF
>
> \(C\) PCl₃ + 3H₂O → H₃PO₄ + 3HCl
>
> \(D\) SOCl₂ + H₂O → SO₂ + 2HCl

**Q5** Which species undergoes redox during the stated hydrolysis?

> \(A\) XeF₂
>
> \(B\) XeF₆
>
> \(C\) SO₂Cl₂
>
> \(D\) PCl₃

**Q6** The gas from hydrolysis of Mg₂C₃ is predominantly:

> \(A\) CH₄
>
> \(B\) C₂H₂
>
> \(C\) C₃H₄
>
> \(D\) C₂H₄

**Q7** Which pair is correctly matched?

> \(A\) SF₆—rapid ordinary hydrolysis
>
> \(B\) BF₃—complete hydrolysis with no fluoride complex
>
> \(C\) BiCl₃—BiOCl precipitate
>
> \(D\) CCl₄—rapid room-temperature hydrolysis

**Q8** The basicity of the hydrolysis product of PCl₃ is:

> \(A\) 1
>
> \(B\) 2
>
> \(C\) 3
>
> \(D\) 4

**Q9** Select all correct statements about hydrolysis.

> \(A\) A negative ΔG° guarantees a large rate constant
>
> \(B\) A/Iₐ pathways are helped by an accessible electrophilic centre
>
> \(C\) gas evolution can drive completion
>
> \(D\) Lewis acidity is never relevant

**Q10** Select all correct statements.

> \(A\) SiF₄ can show partial net hydrolysis due to [SiF₆]²⁻ formation
>
> \(B\) NCl₃ and PCl₃ give the same type of product
>
> \(C\) SF₆ inertness is kinetic
>
> \(D\) Si–C is generally more hydrolytically resistant than Si–Cl

**Q11** Select all redox-hydrolysis cases.

> \(A\) XeF₂
>
> \(B\) XeF₄
>
> \(C\) XeF₆ → XeO₃
>
> \(D\) NCl₃ → NH₃ + HOCl

**Q12** Select all compounds that liberate a hydride-derived H₂ or protonated anion gas on hydrolysis.

> \(A\) BH₄⁻
>
> \(B\) SiH₄
>
> \(C\) Ca₃P₂
>
> \(D\) Mg₃N₂

**Q13** Assertion: SiCl₄ hydrolyses rapidly whereas CCl₄ does not under ordinary conditions. Reason: Si permits a lower-barrier hypercoordinate/proton-relay pathway and is less sterically shielded at the central atom.

> \(A\) Both true; reason explains assertion
>
> \(B\) Both true; reason does not explain
>
> \(C\) Assertion true, reason false
>
> \(D\) Assertion false, reason true

**Q14** Assertion: H₃PO₃ is dibasic. Reason: its useful Lewis form is HP(O)(OH)₂.

> \(A\) Both true; reason explains assertion
>
> \(B\) Both true; reason does not explain
>
> \(C\) Assertion true, reason false
>
> \(D\) Both false

**Q15** Assertion: XeF₆ hydrolysis is redox because XeO₃ is formed. Reason: xenon is +6 in both XeF₆ and XeO₃.

> \(A\) Both true; reason explains
>
> \(B\) Assertion true, reason false
>
> \(C\) Assertion false, reason true
>
> \(D\) Both false

**Q16** Integer: how many HCl molecules are produced per PCl₅ in complete hydrolysis to H₃PO₄?

**Q17** Integer: how many moles of H₂ are produced per mole of BH₄⁻ in complete hydrolysis?

**Q18** Integer: among CCl₄, SiCl₄, SF₆, PCl₃, XeF₂ and BF₃, how many show appreciable ordinary-water reaction or partial hydrolysis under standard JEE assumptions?

**Q19** Which sequence correctly describes hydrolysis of PCl₃?

> \(A\) PCl₃ → P(OH)₃ → HP(O)(OH)₂
>
> \(B\) PCl₃ → POCl₃ → H₃PO₄
>
> \(C\) PCl₃ → PH₃ + HOCl
>
> \(D\) PCl₃ → P₂O₅

**Q20** Which reagent-product pair demonstrates peripheral-atom attack and internal redox?

> \(A\) SiCl₄ → Si(OH)₄
>
> \(B\) NCl₃ → NH₃ + HOCl
>
> \(C\) PCl₅ → POCl₃
>
> \(D\) SO₃ → H₂SO₄

**Q21** Which statement about partial hydrolysis is correct?

> \(A\) It always means one X remains on every molecule
>
> \(B\) It may arise because HX traps unreacted reagent
>
> \(C\) It excludes complex-ion formation
>
> \(D\) It is independent of water amount

**Q22** Select all compounds whose ordinary hydrolysis can be classified mainly as addition–elimination.

> \(A\) SO₂Cl₂
>
> \(B\) POCl₃
>
> \(C\) SO₃
>
> \(D\) H₂SO₅

**Q23** Select all correctly matched products.

> \(A\) Al₄C₃—CH₄
>
> \(B\) CaC₂—C₂H₂
>
> \(C\) Mg₂C₃—C₃H₄
>
> \(D\) Mg₃N₂—N₂

**Q24** Which gives the most extensively hydrolysed aqua ion, other factors being comparable?

> \(A\) Na⁺
>
> \(B\) Mg²⁺
>
> \(C\) Fe²⁺
>
> \(D\) Fe³⁺

**Q25** The structural reason H₃PO₂ is monobasic is:

> \(A\) it contains one hydrogen
>
> \(B\) it contains one P–O bond
>
> \(C\) it contains one O–H bond and two P–H bonds
>
> \(D\) phosphorus is +1

**Q26** A silicone feed rich in RSiCl₃ rather than R₂SiCl₂ produces:

> \(A\) less hydrolysis
>
> \(B\) more chain ends only
>
> \(C\) a more cross-linked, harder network
>
> \(D\) only cyclic trimers

**Q27** Which balanced equation is correct for Marshall’s acid?

> \(A\) H₂S₂O₈ + H₂O → 2H₂SO₄
>
> \(B\) H₂S₂O₈ + 2H₂O → 2H₂SO₄ + H₂O₂
>
> \(C\) H₂S₂O₈ → SO₃ + H₂O
>
> \(D\) H₂S₂O₈ + H₂O → H₂SO₅

**Q28** Assertion: TeF₆ hydrolyses more readily than SF₆. Reason: the larger Te centre is less sterically shielded and more accessible to water.

> \(A\) Both true; reason explains
>
> \(B\) Both true; reason does not explain
>
> \(C\) Assertion true, reason false
>
> \(D\) Both false

**Q29** A 0.10 M salt of a weak acid has pKₐ = 5.0 at 25 °C. Using the small-hydrolysis approximation, its pH is closest to:

> \(A\) 5.0
>
> \(B\) 7.0
>
> \(C\) 9.0
>
> \(D\) 11.0

**Q30** Integer: how many O–H groups are present in the useful Lewis structures of H₃PO₂, H₃PO₃ and H₃PO₄ combined?

## Answers and explanations

**Q1: B**

The products may be favourable, but the pathway can still have a prohibitive activation barrier.

**Q2: B**

This captures donor–acceptor overlap and hypercoordination without requiring literal 3d hybridization.

**Q3: B**

Limited water gives POCl₃ + 2HCl; excess water then gives H₃PO₄ + 3HCl.

**Q4: C**

PCl₃ gives H₃PO₃, not H₃PO₄.

**Q5: A**

Xe changes +2→0 and water oxygen gives O₂. Xe remains +6 in XeF₆→XeO₃.

**Q6: C**

Mg₂C₃ is the characteristic C₃H₄/propyne-producing carbide.

**Q7: C**

BiCl₃ hydrolysis commonly precipitates BiOCl. The other statements ignore kinetic or complexation facts.

**Q8: B**

H₃PO₃ = HP(O)(OH)₂, so two O–H protons are ionizable.

**Q9: B, C**

Accessible attack favours A/Iₐ. Gas evolution is a product sink. ΔG° does not determine rate, and Lewis acidity often matters.

**Q10: A, C, D**

NCl₃ and PCl₃ have different products and electron flow.

**Q11: A, B, D**

XeF₆→XeO₃ retains Xe(+6); the others involve oxidation-state changes.

**Q12: A, B, C, D**

BH₄⁻/SiH₄ release H₂; phosphide gives PH₃; nitride gives NH₃.

**Q13: A**

Both accessibility and favourable hypercoordinate/proton-relay pathways lower the SiCl₄ barrier.

**Q14: A**

Two OH groups give two acidic hydrogens; P–H is not counted.

**Q15: C**

Formation of an oxide is not automatically redox; Xe remains +6.

**Q16: 5**

PCl₅ + 4H₂O → H₃PO₄ + 5HCl.

**Q17: 4**

Each of four hydridic H atoms ultimately forms one H₂ molecule.

**Q18: 4**

SiCl₄, PCl₃, XeF₂ and BF₃ react/partially hydrolyse; CCl₄ and SF₆ are ordinarily inert.

**Q19: A**

Substitution first gives P(OH)₃ as a Lewis form; tautomerisation gives HP(O)(OH)₂.

**Q20: B**

The exam model attacks peripheral Cl, and the products require N(+3→−3) and Cl(−1→+1).

**Q21: B**

BF₃ and SiF₄ show that product HF/F⁻ can capture unreacted fluoride, changing the net extent.

**Q22: A, B, D**

SO₂Cl₂, POCl₃ and H₂SO₅ undergo addition followed by leaving-group loss; SO₃ is simple addition.

**Q23: A, B, C**

The nitride gives NH₃, not N₂. The carbide gas follows the carbon anion.

**Q24: D**

Fe³⁺ has the greatest charge density and polarises coordinated O–H bonds most strongly.

**Q25: C**

Only an O–H proton counts toward normal acid basicity; P–H hydrogens do not.

**Q26: C**

Trifunctional RSiCl₃ forms three silanol sites and therefore increases network cross-linking.

**Q27: B**

One O–O unit emerges as H₂O₂ while the two sulfur centres become H₂SO₄.

**Q28: A**

The size/accessibility trend explains why the heavier hexafluoride hydrolyses more readily.

**Q29: C**

pH = 7 + ½(pKₐ + log C) = 7 + ½(5 − 1) = 9.0.

**Q30: 6**

The three acids contain 1, 2 and 3 O–H groups respectively.
`;
