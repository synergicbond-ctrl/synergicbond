"""Enumerate 1,2-shifts of a carbocation and classify them (teaching heuristic, used to cross-check counting problems).

A cation C+ may take a substituent s (H, alkyl, aryl, ring bond) from an adjacent sp3 carbon n:
    n-s + C+  ->  n+ + C-s      (new cation at n)
`score` is a crude stability index (substitution + resonance + hetero lone pair - ring strain); a shift is
'favourable' if the product index exceeds the reactant index by >= 1.0.  The index is NOT a quantitative energy;
every problem answer built on it was also checked by hand against textbook reasoning.
"""
from rdkit import Chem
from . import chem

STRAIN = {3: 27.5, 4: 26.5, 5: 6.2, 6: 0.0, 7: 6.2, 8: 9.7}


def _rings(m):
    m = Chem.Mol(m)
    m.UpdatePropertyCache(strict=False)
    return sorted(len(r) for r in Chem.GetSymmSSSR(m))


def _ring_strain(m):
    tot = 0.0
    for n in _rings(m):
        tot += STRAIN.get(n, 12.0 if n > 8 else 0.0)
    return tot


def score(m, ci):
    """index for the cation centre ci (atom index) in mol m (with explicit Hs)."""
    a = m.GetAtomWithIdx(ci)
    heavy = [n for n in a.GetNeighbors() if n.GetAtomicNum() > 1]
    s = float(len(heavy))        # 1 = primary ... 3 = tertiary (methyl cation: 0)
    for n in heavy:
        if n.GetAtomicNum() in (7, 8, 16):
            s += 3.0              # lone-pair donor on the cationic carbon
        if n.GetAtomicNum() == 6:
            for b in n.GetBonds():
                o = b.GetOtherAtom(n)
                if o.GetIdx() == ci:
                    continue
                if b.GetBondType() in (Chem.BondType.DOUBLE, Chem.BondType.TRIPLE) or b.GetIsAromatic():
                    s += 2.0      # allylic/benzylic resonance
                    break
    return s


def _cation_centre(m):
    cs = [a.GetIdx() for a in m.GetAtoms() if a.GetFormalCharge() == 1 and a.GetAtomicNum() == 6]
    if len(cs) != 1:
        raise ValueError("expected exactly one cationic carbon")
    return cs[0]


def enumerate_shifts(smi):
    """Return list of dict(migrating, product, ring_change, delta, favourable) for all 1,2-shifts."""
    m0 = Chem.AddHs(chem.parse(smi))
    ci = _cation_centre(m0)
    base = score(m0, ci) - 0.1 * _ring_strain(Chem.RemoveHs(m0, sanitize=False))
    start_can = chem.canon(smi, stereo=False)
    out, seen = [], set()
    c = m0.GetAtomWithIdx(ci)
    for n in c.GetNeighbors():
        if n.GetAtomicNum() != 6 or n.GetDegree() != 4:
            continue
        ni = n.GetIdx()
        for s in n.GetNeighbors():
            si = s.GetIdx()
            if si == ci:
                continue
            rw = Chem.RWMol(m0)
            rw.RemoveBond(ni, si)
            rw.AddBond(ci, si, Chem.BondType.SINGLE)
            rw.GetAtomWithIdx(ci).SetFormalCharge(0)
            rw.GetAtomWithIdx(ni).SetFormalCharge(1)
            for i in (ci, ni):
                rw.GetAtomWithIdx(i).SetNoImplicit(True)
                rw.GetAtomWithIdx(i).SetNumExplicitHs(0)
            p = rw.GetMol()
            try:
                p.UpdatePropertyCache(strict=True)
            except Exception:
                continue
            ph = Chem.RemoveHs(p, sanitize=False)
            ph.UpdatePropertyCache(strict=False)
            can = chem.canon(ph, stereo=False)
            rings0 = _rings(Chem.RemoveHs(m0, sanitize=False))
            rings1 = _rings(ph)
            new_score = score(p, ni) - 0.1 * _ring_strain(ph)
            kind = "H" if s.GetAtomicNum() == 1 else ("aryl" if s.GetIsAromatic() else "alkyl/ring")
            out.append(dict(migrating=kind, product=can, rings_before=rings0, rings_after=rings1,
                            ring_expansion=(max(rings1 or [0]) > max(rings0 or [0]) and sum(rings1) > sum(rings0) and len(rings1) == len(rings0)),
                            degenerate=(can == start_can), delta=new_score - base, favourable=(new_score - base) >= 1.0))
    # unique by (product)
    uniq = {}
    for o in out:
        if o["product"] not in uniq or o["delta"] > uniq[o["product"]]["delta"]:
            uniq[o["product"]] = o
    return list(uniq.values())


def rearranges(smi):
    return any(o["favourable"] and not o["degenerate"] for o in enumerate_shifts(smi))


def ring_expands(smi):
    return any(o["favourable"] and o["ring_expansion"] for o in enumerate_shifts(smi))
