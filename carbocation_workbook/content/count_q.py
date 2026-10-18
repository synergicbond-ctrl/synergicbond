from .common import *
from .lg import S
from engine import shifts


def _tbl(rows):
    t = "<table><tr><th>Item</th><th>?</th><th>Reason</th></tr>"
    for lab, yn, why in rows:
        t += f"<tr><td>{lab}</td><td><b>{yn}</b></td><td>{why}</td></tr>"
    return t + "</table>"


def _check(items, truth, fn):
    for (lab, smi), t in zip(items, truth):
        got = fn(smi)
        assert got == t, f"classifier disagrees with hand answer for {lab} {smi}: {got} vs {t}"


def best_path(smi, maxdepth=4):
    """Minimum number of 1,2-shifts that leads to the highest-index cation reachable (BFS)."""
    from collections import deque
    seen = {chem.canon(smi, stereo=False): 0}
    sc = {}
    def S_(s):
        from rdkit import Chem
        m = Chem.AddHs(chem.parse(s))
        ci = shifts._cation_centre(m)
        return shifts.score(m, ci) - 0.1 * shifts._ring_strain(Chem.RemoveHs(m, sanitize=False))
    q = deque([(smi, 0)])
    sc[chem.canon(smi, stereo=False)] = S_(smi)
    while q:
        s, d = q.popleft()
        if d >= maxdepth:
            continue
        for o in shifts.enumerate_shifts(s):
            if not o["favourable"]:
                continue
            if o["product"] not in seen:
                seen[o["product"]] = d + 1
                sc[o["product"]] = S_(o["product"])
                q.append((o["product"], d + 1))
    top = max(sc.values())
    return min(seen[k] for k, v in sc.items() if v == top), top


def build(B):
    qs = []
    B.part("Part 7", "Carbocation Rearrangements — Counting Problems (opening section)")
    B.p("Counting problems test whether you can <i>recognise</i> a rearrangement before drawing any mechanism. Rules used (JEE-Advanced level): a carbocation rearranges by a 1,2-H, 1,2-alkyl, 1,2-aryl or ring-bond shift "
        "<b>only if the new cation is more stable</b> (more substituted, conjugated, or less strained) or the new ion is trapped irreversibly; shifts to an equally stable cation (secondary → secondary, tertiary → tertiary) are degenerate or unproductive and are <b>not</b> counted as ‘rearranging’; "
        "tertiary, benzylic and allylic cations do not rearrange to a less stable ion. Primary cations are usually not true intermediates: the shift is concerted with the departure of the leaving group, but for counting purposes such a shift is ‘a rearrangement’. "
        "The answers below were cross-checked with a small shift-enumeration program (every 1,2-shift of every cation was generated and the product classified) and by hand.")
    B.h2("7.1  How many rearrange? How many ring-expand? How many shifts are possible?")
    # Q-A
    items = [("a", "CCC[CH2+]"), ("b", "C[CH+]C"), ("c", "C[C+](C)C"), ("d", "C[CH+]C(C)(C)C"), ("e", "CC(C)(C)[CH2+]"),
             ("f", "[CH+]1CCCCC1"), ("g", "C[C+]1CCCCC1"), ("h", "[CH2+]C1CCC1"), ("i", "[CH2+]c1ccccc1"), ("j", "CC1CCCC[CH+]1")]
    truth = [True, False, False, True, True, False, False, True, False, True]
    _check(items, truth, shifts.rearranges)
    rows = [("a  n-butyl", "Yes", "primary; 1,2-H shift → 2-butyl (secondary)"),
            ("b  isopropyl", "No", "H or CH<sub>3</sub> shift would give a primary cation, or a degenerate secondary one"),
            ("c  tert-butyl", "No", "any shift gives a primary cation"),
            ("d  3,3-dimethylbut-2-yl", "Yes", "1,2-CH<sub>3</sub> shift → tertiary 2,3-dimethylbut-2-yl"),
            ("e  neopentyl", "Yes", "1,2-CH<sub>3</sub> shift → tertiary tert-amyl"),
            ("f  cyclohexyl", "No", "H shift gives another secondary ring cation (degenerate); the ring does not strain-relieve"),
            ("g  1-methylcyclohexyl", "No", "tertiary; shifts lead to less stable ions"),
            ("h  cyclobutylmethyl", "Yes", "ring expansion → cyclopentyl (secondary, strain relief), or H shift → 1-methylcyclobutyl (tertiary)"),
            ("i  benzyl", "No", "resonance-stabilised; a shift would give an unstabilised ion"),
            ("j  2-methylcyclohexyl", "Yes", "1,2-H shift from the ring C–H bearing CH<sub>3</sub> → tertiary 1-methylcyclohexyl")]
    qs.append(Q("R1", "<b>How many</b> of the following carbocations (a–j) will <b>undergo rearrangement</b> by a 1,2-shift to give a more stable carbocation? (Integer answer)",
        S([("a", items[0][1]), ("b", items[1][1]), ("c", items[2][1]), ("d", items[3][1]), ("e", items[4][1]), ("f", items[5][1]), ("g", items[6][1]), ("h", items[7][1]), ("i", items[8][1]), ("j", items[9][1])]),
        "5  (a, d, e, h, j)", _tbl(rows), kind="integer"))
    # Q-B ring expansion
    items = [("a", "[CH2+]C1CCC1"), ("b", "C[CH+]C1CCC1"), ("c", "[CH+]1CCCC1"), ("d", "[CH2+]C1(C)CCC1"), ("e", "[CH2+]C1(C)CCCC1"), ("f", "C[C+]1CCCCC1"), ("g", "[CH+]1CCC1"), ("h", "CC(C)(C)[CH2+]")]
    truth = [True, True, False, True, True, False, False, False]
    _check(items, truth, shifts.ring_expands)
    rows = [("a  cyclobutylmethyl", "Yes", "ring C–C bond migrates to the CH<sub>2</sub><sup>+</sup>: 4 → 5 ring, primary → secondary"),
            ("b  1-cyclobutylethyl", "Yes", "ring bond migrates to the exocyclic cationic carbon: 2-methylcyclopentyl (secondary, ring strain relieved)"),
            ("c  cyclopentyl", "No", "the cation is in the ring; no exocyclic carbon to take a ring bond"),
            ("d  (1-methylcyclobutyl)methyl", "Yes", "ring bond migrates → 1-methylcyclopentyl, a tertiary cation with relief of strain (much better than the methyl-shift alternative)"),
            ("e  (1-methylcyclopentyl)methyl", "Yes", "ring bond migrates → 1-methylcyclohexyl (tertiary, strain-free); the competing methyl shift gives 1-ethylcyclopentyl (also tertiary), so ring expansion is the thermodynamic choice"),
            ("f  1-methylcyclohexyl", "No", "tertiary cation on the ring: expansion impossible"),
            ("g  cyclobutyl", "No", "cation is in the ring (it can ring-contract to cyclopropylcarbinyl, the reverse)"),
            ("h  neopentyl", "No", "no ring: methyl shift is a rearrangement but not a ring expansion")]
    qs.append(Q("R2", "<b>How many</b> of the carbocations (a–h) can undergo <b>ring expansion</b> by a single 1,2-shift to a more stable cation (more substituted and/or less strained)? (Integer answer)",
        S([(l, s) for l, s in items]), "4  (a, b, d, e)", _tbl(rows), kind="integer"))
    # Q-C possible shifts
    sh = shifts.enumerate_shifts("C[CH+]C(C)C")
    nd = [o for o in sh if not o["degenerate"]]
    fav = [o for o in nd if o["favourable"]]
    assert len(nd) == 2 and len(fav) == 1
    qs.append(Q("R3", "The 3-methylbutan-2-yl cation, CH<sub>3</sub>–CH<sup>+</sup>–CH(CH<sub>3</sub>)<sub>2</sub>, can undergo different 1,2-shifts. (i) How many <b>different</b> carbocations (other than the starting ion itself) can be formed by one 1,2-shift of H or CH<sub>3</sub>? (ii) How many of these are <b>more stable</b> than the starting ion? Give (i), (ii).",
        S([("start", "C[CH+]C(C)C")]),
        "(i) 2   (ii) 1",
        "Shifts available: <b>H from C-3</b> → 2-methylbut-2-yl, tertiary (more stable); <b>CH<sub>3</sub> from C-3</b> → regenerates a 3-methylbutan-2-yl cation (degenerate, not a new ion); "
        "<b>H from the CH<sub>3</sub> on C-2</b> → 3-methylbutyl, primary (less stable). Distinct new cations: tertiary and primary = 2; more stable: only the tertiary = 1. (Hydride shift is the productive path, reached through a three-centre transition state with σ(C–H) → p overlap.)", kind="integer"))
    # Q-D steps
    n, top = best_path("CC(C)(C)C[CH2+]")
    assert n == 2
    sf = mech("R4sol", "[CH2+:1][CH:2]([H:7])[C:3]([CH3:4])([CH3:5])[CH3:6]",
        [St(A(('b', 2, 7), ('nb', 7, 1), 0.5), "1,2-H", 'eq', expect="C[CH+]C(C)(C)C"),
         St(A(('b', 3, 4), ('nb', 4, 2), 0.5), "1,2-CH_3", 'eq', expect="C[C+](C)C(C)C")], "C[C+](C)C(C)C", width=680)
    qs.append(Q("R4", "How many 1,2-shifts, at minimum, convert the primary 3,3-dimethylbutyl cation, (CH<sub>3</sub>)<sub>3</sub>C–CH<sub>2</sub>–CH<sub>2</sub><sup>+</sup>, into the <b>most stable</b> carbocation that is reachable? (Integer answer; each hydride, alkyl or ring-bond shift counts one.)",
        S([("start", "CC(C)(C)C[CH2+]")]),
        "2",
        "Step 1: 1,2-hydride shift from the CH<sub>2</sub> next to the quaternary carbon → 3,3-dimethylbut-2-yl (secondary). Step 2: 1,2-methyl shift from the quaternary carbon → 2,3-dimethylbut-2-yl (tertiary, the most stable ion in this manifold). "
        "A direct primary → tertiary shift is impossible because the tertiary centre is two bonds away. (The same cation is the one formed from 3,3-dimethylbutan-2-ol; see R5.)",
        sol_fig=sf, kind="integer"))
    # Q-E alkenes from E1 of 3,3-dimethylbutan-2-ol
    from rdkit import Chem
    def alkenes(cations):
        out = set()
        for c in cations:
            m = Chem.AddHs(chem.parse(c))
            ci = shifts._cation_centre(m)
            for n in m.GetAtomWithIdx(ci).GetNeighbors():
                if n.GetAtomicNum() != 6:
                    continue
                for h in n.GetNeighbors():
                    if h.GetAtomicNum() == 1:
                        rw = Chem.RWMol(m)
                        rw.RemoveBond(n.GetIdx(), h.GetIdx())
                        rw.GetBondBetweenAtoms(n.GetIdx(), ci)
                        rw.GetBondBetweenAtoms(n.GetIdx(), ci).SetBondType(Chem.BondType.DOUBLE)
                        rw.GetAtomWithIdx(ci).SetFormalCharge(0)
                        rw.RemoveAtom(h.GetIdx())
                        q = rw.GetMol()
                        q.UpdatePropertyCache(strict=False)
                        Chem.SanitizeMol(q)
                        out.add(Chem.MolToSmiles(Chem.RemoveHs(q)))
        return out
    al = alkenes(["C[CH+]C(C)(C)C", "C[C+](C)C(C)C"])
    assert len(al) == 3, al
    qs.append(Q("R5", "3,3-Dimethylbutan-2-ol is heated with conc. H<sub>3</sub>PO<sub>4</sub> (E1). How many <b>different alkenes</b> (structural isomers, counting only constitutional isomers, no stereoisomers arise) can be formed from <i>all</i> the carbocations that are intermediates, including the rearranged one? (Integer answer)",
        S([("alcohol", "CC(O)C(C)(C)C")]),
        "3",
        "Unrearranged secondary cation (3,3-dimethylbut-2-yl): loses H<sup>+</sup> only from CH<sub>3</sub> (the other neighbour is quaternary) → <b>3,3-dimethylbut-1-ene</b> (minor). "
        "After the 1,2-CH<sub>3</sub> shift the tertiary 2,3-dimethylbut-2-yl cation loses H<sup>+</sup> from the CH (→ <b>2,3-dimethylbut-2-ene</b>, tetrasubstituted, major) or from a CH<sub>3</sub> (→ <b>2,3-dimethylbut-1-ene</b>). Total 3; the Zaitsev (2,3-dimethylbut-2-ene) dominates.",
        kind="integer"))
    # Q-F amine + HNO2
    items = [("a", "CCCN"), ("b", "Nc1ccccc1"), ("c", "CNC"), ("d", "CC(C)(C)N"), ("e", "NCc1ccccc1"), ("f", "CN(C)C"), ("g", "CNc1ccccc1"), ("h", "NC1CCCCC1")]
    qs.append(Q("R6", "Each compound (a–h) is treated with NaNO<sub>2</sub>/HCl at 0–5 °C, then the solution is allowed to stand. <b>How many</b> of the compounds give a <b>carbocation</b> as an intermediate (free, or as a tight ion pair, formed by loss of N<sub>2</sub>)? (Integer answer)",
        S(items), "4  (a, d, e, h)",
        _tbl([("a  n-propylamine", "Yes", "R–N<sub>2</sub><sup>+</sup> loses N<sub>2</sub> (with 1,2-H shift) → n-propyl/isopropyl cation; mixture of propanols, propene, chloropropanes"),
              ("b  aniline", "No", "ArN<sub>2</sub><sup>+</sup> Cl<sup>−</sup> is stable at 0–5 °C (resonance, sp<sup>2</sup> C–N); the aryl cation forms only on warming"),
              ("c  dimethylamine", "No", "secondary amine → N-nitrosodimethylamine, Me<sub>2</sub>N–N=O"),
              ("d  tert-butylamine", "Yes", "t-Bu–N<sub>2</sub><sup>+</sup> → tert-butyl cation"),
              ("e  benzylamine", "Yes", "PhCH<sub>2</sub>N<sub>2</sub><sup>+</sup> → benzyl cation"),
              ("f  trimethylamine", "No", "tertiary amine: only the ammonium nitrite salt; no diazonium"),
              ("g  N-methylaniline", "No", "secondary arylamine → N-nitroso-N-methylaniline"),
              ("h  cyclohexylamine", "Yes", "c-C<sub>6</sub>H<sub>11</sub>N<sub>2</sub><sup>+</sup> → cyclohexyl cation (and cyclohexene, cyclohexanol, ring-contracted products)")]),
        kind="integer"))
    # Q-G alcohols + HBr rearranged product
    items = [("a", "CCCCO"), ("b", "CCC(C)O"), ("c", "CC(O)C(C)C"), ("d", "CC(C)(C)CO"), ("e", "CC(C)(C)O"), ("f", "CC(O)C(C)(C)C"), ("g", "OCC1CCC1"), ("h", "OC1CCCCC1")]
    qs.append(Q("R7", "Each alcohol (a–h) is heated with conc. HBr. <b>How many</b> give the alkyl bromide (or major product) with a <b>rearranged carbon skeleton or rearranged position of Br</b> through a carbocation or a concerted shift? (Integer answer)",
        S(items), "4  (c, d, f, g)",
        _tbl([("a  butan-1-ol", "No", "primary, unbranched: S<sub>N</sub>2 → 1-bromobutane"),
              ("b  butan-2-ol", "No", "secondary cation (S<sub>N</sub>1/S<sub>N</sub>2 mixture); a shift would give a primary or an identical secondary ion"),
              ("c  3-methylbutan-2-ol", "Yes", "H shift → tertiary → 2-bromo-2-methylbutane"),
              ("d  neopentyl alcohol", "Yes", "concerted CH<sub>3</sub> shift → 2-bromo-2-methylbutane"),
              ("e  tert-butyl alcohol", "No", "tertiary cation"),
              ("f  3,3-dimethylbutan-2-ol", "Yes", "CH<sub>3</sub> shift → tertiary → 2-bromo-2,3-dimethylbutane"),
              ("g  cyclobutylmethanol", "Yes", "ring expansion / rearrangement → bromocyclopentane and 1-bromo-1-methylcyclobutane type products"),
              ("h  cyclohexanol", "No", "secondary ring cation; H shift is degenerate")]),
        kind="integer"))
    # Q-H Friedel-Crafts alkylation of benzene with RCl/AlCl3
    items = [("a", "CCCCl"), ("b", "CC(C)CCl"), ("c", "CCCl"), ("d", "CC(C)(C)Cl"), ("e", "CC(C)(C)CCl"), ("f", "ClCc1ccccc1"), ("g", "CCCCCl"), ("h", "CCC(C)Cl")]
    qs.append(Q("R8", "Benzene is alkylated with each alkyl chloride (a–h) and AlCl<sub>3</sub>. <b>How many</b> give a product in which the carbon skeleton or the point of attachment of the alkyl group <b>differs from the alkyl chloride used</b> (a rearranged product as the major product)? (Integer answer)",
        S(items), "4  (a, b, e, g)",
        _tbl([("a  1-chloropropane", "Yes", "H shift in the R–Cl···AlCl<sub>3</sub> complex → isopropylbenzene (cumene)"),
              ("b  1-chloro-2-methylpropane", "Yes", "H shift → tert-butyl → tert-butylbenzene"),
              ("c  chloroethane", "No", "no more stable cation reachable (ethyl is the only possibility)"),
              ("d  tert-butyl chloride", "No", "tertiary cation, no shift"),
              ("e  1-chloro-2,2-dimethylpropane", "Yes", "CH<sub>3</sub> shift → tert-amyl → (2-methylbutan-2-yl)benzene"),
              ("f  benzyl chloride", "No", "benzylic cation; gives diphenylmethane without rearrangement"),
              ("g  1-chlorobutane", "Yes", "H shift → sec-butyl → sec-butylbenzene as the major component (n-butylbenzene is also formed; the ratio depends on temperature, roughly 2 : 1 in favour of sec-butyl at 0 °C – recalled value)"),
              ("h  2-chlorobutane", "No", "secondary → secondary: the same sec-butyl product")]),
        kind="integer"))
    B.questions(qs, 2)
    return qs
