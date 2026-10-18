"""Chemistry validation helpers: electron-pushing applier, balance checks.

Every curved arrow drawn in the book is stored as data (source, sink) on
atom-mapped SMILES.  `push` applies the arrows to the reactant graph and
returns the product graph, which must equal the product that is drawn.
Hence an arrow that does not lead from the drawn reactant to the drawn
product fails the build.
"""
from rdkit import Chem
from rdkit import RDLogger
from rdkit.Chem.rdMolDescriptors import CalcMolFormula

RDLogger.DisableLog("rdApp.*")

# charge (as a function of total bond order b, hydrogens counted as atoms)
_RULE = {
    7: lambda b: b - 3, 15: lambda b: (b - 3) if b <= 4 else 0,   # N, P (P(V) neutral)
    8: lambda b: b - 2, 16: lambda b: (b - 2) if b <= 3 else 0,   # O, S (hypervalent S(IV/VI) neutral)
    9: lambda b: b - 1, 17: lambda b: b - 1, 35: lambda b: b - 1, 53: lambda b: b - 1,
    5: lambda b: 3 - b, 13: lambda b: 3 - b, 26: lambda b: 3 - b, 31: lambda b: 3 - b,  # B, Al, Fe, Ga: 4-coord = -1
    30: lambda b: 2 - b, 80: lambda b: (2 - b) if b <= 2 else (b - 2), 12: lambda b: 2 - b,                      # Zn, Hg, Mg
    47: lambda b: 1 - b, 3: lambda b: 1 - b, 11: lambda b: 1 - b, 19: lambda b: 1 - b,   # Ag, Li, Na, K
    14: lambda b: 4 - b,                                                              # Si (silylium b=3 -> +1)
    51: lambda b: 5 - b, 50: lambda b: 4 - b, 22: lambda b: 4 - b,                     # Sb(V), Sn(IV), Ti(IV)
}


ALLOW_RADICAL = [False]


def parse(smi):
    """Parse (atom-mapped) SMILES (str or Mol); Kekulé form is kept (no aromaticity flags)."""
    if not isinstance(smi, str):
        return Chem.Mol(smi)
    m = Chem.MolFromSmiles(smi, sanitize=False)
    if m is None:
        raise ValueError("bad SMILES: " + smi)
    m.UpdatePropertyCache(strict=False)
    Chem.SanitizeMol(m, Chem.SANITIZE_ALL ^ Chem.SANITIZE_PROPERTIES ^ Chem.SANITIZE_SETAROMATICITY, catchErrors=False)
    m.UpdatePropertyCache(strict=True)
    if not ALLOW_RADICAL[0]:
        for a in m.GetAtoms():
            if a.GetNumRadicalElectrons():
                raise ValueError(f"unintended radical on {a.GetSymbol()}:{a.GetAtomMapNum()} in {smi}")
    return m


def canon(smi_or_mol, stereo=True):
    m = parse(smi_or_mol)
    for a in m.GetAtoms():
        a.SetAtomMapNum(0)
    m = Chem.AddHs(m)
    m = Chem.RemoveHs(m)
    Chem.SanitizeMol(m)
    if not stereo:
        Chem.RemoveStereochemistry(m)
    parts = sorted(Chem.MolToSmiles(m, isomericSmiles=stereo).split("."))
    return ".".join(parts)


def formula_charge(smi):
    m = Chem.AddHs(parse(smi))
    return CalcMolFormula(m, abbreviateHIsotopes=False), Chem.GetFormalCharge(m)


def balanced(lhs, rhs):
    """lhs, rhs: lists of SMILES; compare combined element counts and charge."""
    def tally(lst):
        cnt, ch = {}, 0
        for s in lst:
            m = Chem.AddHs(parse(s))
            ch += Chem.GetFormalCharge(m)
            for a in m.GetAtoms():
                cnt[a.GetSymbol()] = cnt.get(a.GetSymbol(), 0) + 1
        return cnt, ch
    return tally(lhs) == tally(rhs)


def push_mol(smi, arrows, carbanions=(), hydrides=(), radicals=()):
    """Like push() but returns the mapped product Mol (mapped H atoms kept explicit)."""
    return _push(smi, arrows, carbanions, hydrides, radicals)


def push(smi, arrows, carbanions=(), hydrides=(), stereo=False, radicals=()):
    """Apply electron-pair arrows to atom-mapped reactant SMILES.

    Arrow = (src, snk).  src: ('b', i, j) bond pair | ('lp', i) lone pair.
    snk: ('nb', i, j) new/increased bond i-j | ('lp', i) pair stays on atom i
    (leaving group departure).  Atom ids are atom-map numbers.
    Returns canonical product SMILES (maps removed).
    """
    out = _push(smi, arrows, carbanions, hydrides, radicals)
    return canon(out, stereo=stereo)


def _push(smi, arrows, carbanions=(), hydrides=(), radicals=()):
    m = Chem.AddHs(parse(smi))
    rw = Chem.RWMol(m)
    idx = {a.GetAtomMapNum(): a.GetIdx() for a in rw.GetAtoms() if a.GetAtomMapNum()}
    touched = set()
    order = {}  # (min,max)-> float order

    def bo(i, j):
        b = rw.GetBondBetweenAtoms(i, j)
        return b.GetBondTypeAsDouble() if b else 0.0

    def setbo(i, j, v):
        b = rw.GetBondBetweenAtoms(i, j)
        if v <= 0:
            if b:
                rw.RemoveBond(i, j)
            return
        t = {1.0: Chem.BondType.SINGLE, 2.0: Chem.BondType.DOUBLE, 3.0: Chem.BondType.TRIPLE}[v]
        if b:
            b.SetBondType(t)
        else:
            rw.AddBond(i, j, t)

    for src, snk in arrows:
        if src[0] == "b":
            i, j = idx[src[1]], idx[src[2]]
            if bo(i, j) < 1:
                raise ValueError(f"arrow source bond {src} absent in {smi}")
            setbo(i, j, bo(i, j) - 1)
            touched |= {i, j}
        elif src[0] == "lp":
            touched.add(idx[src[1]])
        if snk[0] == "nb":
            i, j = idx[snk[1]], idx[snk[2]]
            if bo(i, j) >= 3:
                raise ValueError("bond order >3")
            setbo(i, j, bo(i, j) + 1)
            touched |= {i, j}
        elif snk[0] == "lp":
            touched.add(idx[snk[1]])

    for i in touched:
        a = rw.GetAtomWithIdx(i)
        a.SetChiralTag(Chem.ChiralType.CHI_UNSPECIFIED)   # stereo of changed centres is never inherited
        a.SetNumExplicitHs(0)
        a.SetNoImplicit(True)
        b = int(sum(bd.GetBondTypeAsDouble() for bd in a.GetBonds()))
        z = a.GetAtomicNum()
        mp = a.GetAtomMapNum()
        if z in _RULE:
            a.SetFormalCharge(_RULE[z](b))
            if z in (9, 17, 35, 53) and b == 0:
                a.SetFormalCharge(-1)
        elif z == 6:
            if b == 4:
                a.SetFormalCharge(0)
            elif b == 3:
                a.SetFormalCharge(-1 if mp in carbanions else 1)
            elif b == 2:
                a.SetFormalCharge(0)  # carbene / vinyl-type; callers must check
            else:
                raise ValueError(f"carbon with {b} bonds")
        elif z == 1:
            a.SetFormalCharge(-1 if mp in hydrides else (1 if b == 0 else 0))
    out = rw.GetMol()
    try:
        out.UpdatePropertyCache(strict=True)
    except Exception as e:  # noqa
        raise ValueError("invalid valence after push: " + str(e))
    ps = Chem.RemoveHsParameters()
    ps.removeMapped = False
    out = Chem.RemoveHs(out, ps, sanitize=False)
    out.UpdatePropertyCache(strict=False)
    return out


def check_step(reactant, product, arrows, extra_lhs=(), extra_rhs=(),
               carbanions=(), hydrides=(), stereo=False):
    """Return (ok, message).  reactant/product may be '.'-joined smiles."""
    try:
        got = push(reactant, arrows, carbanions, hydrides, stereo=stereo)
    except Exception as e:  # noqa
        return False, f"push failed: {e}"
    want = canon(product, stereo=stereo)
    if got != want:
        return False, f"arrows give {got} but drawn product is {want}"
    if not balanced([reactant] + list(extra_lhs), [product] + list(extra_rhs)):
        return False, "atom/charge imbalance"
    return True, "ok"


def stereo(smi, want):
    """Return mapped SMILES of the stereoisomer whose CIP labels at the given map numbers equal `want`
    (dict map -> 'R'|'S').  Used so that every wedge/dash drawing is tied to an explicit descriptor."""
    from rdkit.Chem.EnumerateStereoisomers import EnumerateStereoisomers
    from rdkit.Chem import rdCIPLabeler
    m = Chem.MolFromSmiles(smi, sanitize=False)
    m.UpdatePropertyCache(strict=False)
    Chem.SanitizeMol(m, Chem.SANITIZE_ALL ^ Chem.SANITIZE_PROPERTIES ^ Chem.SANITIZE_SETAROMATICITY)
    hits = []
    for iso in EnumerateStereoisomers(m):
        rdCIPLabeler.AssignCIPLabels(iso)
        ok = True
        for a in iso.GetAtoms():
            mp = a.GetAtomMapNum()
            if mp in want:
                if not a.HasProp("_CIPCode") or a.GetProp("_CIPCode") != want[mp]:
                    ok = False
        if ok:
            hits.append(Chem.MolToSmiles(iso, canonical=False))
    if len(hits) != 1:
        raise ValueError(f"stereo(): {len(hits)} matches for {want} in {smi}")
    return hits[0]


def faces(smi, ring_maps, subs, seed=7):
    """Return +1/-1 for each (ring_map, substituent_map): side of the mean ring plane (3D embed).
    Equal signs = cis (same face), opposite = trans.  Independent check on stereo drawings."""
    import numpy as np
    from rdkit.Chem import AllChem
    m = Chem.AddHs(parse(smi))
    if AllChem.EmbedMolecule(m, randomSeed=seed) != 0:
        raise ValueError("embed failed")
    idx = {a.GetAtomMapNum(): a.GetIdx() for a in m.GetAtoms() if a.GetAtomMapNum()}
    conf = m.GetConformer()
    P = lambda i: np.array(list(conf.GetAtomPosition(i)))
    R = np.array([P(idx[k]) for k in ring_maps])
    c = R.mean(axis=0)
    u, s, vt = np.linalg.svd(R - c)
    n = vt[2]
    out = []
    for rm, sm in subs:
        v = P(idx[sm]) - P(idx[rm])
        out.append(1 if float(np.dot(v, n)) > 0 else -1)
    return out


import contextlib


@contextlib.contextmanager
def allow_radicals():
    """Temporarily accept open-shell SMILES (radicals, carbenes, nitrenes, radical ions)."""
    old = ALLOW_RADICAL[0]
    ALLOW_RADICAL[0] = True
    try:
        yield
    finally:
        ALLOW_RADICAL[0] = old


def pick_rel(smi, ring_maps, subs, cis=True):
    """Stereoisomer of a mapped ring SMILES whose two substituents are cis (same face) or trans.
    subs = [(ring_map, substituent_map), (ring_map, substituent_map)]; verified by a 3D embedding."""
    from rdkit.Chem.EnumerateStereoisomers import EnumerateStereoisomers
    m = Chem.MolFromSmiles(smi, sanitize=False)
    m.UpdatePropertyCache(strict=False)
    Chem.SanitizeMol(m, Chem.SANITIZE_ALL ^ Chem.SANITIZE_PROPERTIES ^ Chem.SANITIZE_SETAROMATICITY)
    found = []
    for iso in EnumerateStereoisomers(m):
        s = Chem.MolToSmiles(iso, canonical=False)
        f = faces(s, ring_maps, subs)
        if (f[0] == f[1]) == cis:
            found.append(s)
    if not found:
        raise ValueError("no isomer found")
    return found[0]


def ring_wedges(smi, ring_maps, subs):
    """Wedge/hash assignment ('w'/'h') for ring substituents from a 3D embedding of a stereo-defined SMILES."""
    f = faces(smi, ring_maps, subs)
    return [(rm, sm, "w" if sg > 0 else "h") for (rm, sm), sg in zip(subs, f)]


def pick_geom(smi, test, seed=11):
    """Stereoisomer of a mapped SMILES for which test(positions_by_map) is True (3D embedded)."""
    import numpy as np
    from rdkit.Chem import AllChem
    from rdkit.Chem.EnumerateStereoisomers import EnumerateStereoisomers
    m0 = Chem.MolFromSmiles(smi, sanitize=False)
    m0.UpdatePropertyCache(strict=False)
    Chem.SanitizeMol(m0, Chem.SANITIZE_ALL ^ Chem.SANITIZE_PROPERTIES ^ Chem.SANITIZE_SETAROMATICITY)
    hits = []
    for iso in EnumerateStereoisomers(m0):
        s = Chem.MolToSmiles(iso, canonical=False)
        m = Chem.AddHs(parse(s))
        if AllChem.EmbedMolecule(m, randomSeed=seed) != 0:
            continue
        conf = m.GetConformer()
        pos = {a.GetAtomMapNum(): np.array(list(conf.GetAtomPosition(a.GetIdx()))) for a in m.GetAtoms() if a.GetAtomMapNum()}
        if test(pos):
            hits.append(s)
    if not hits:
        raise ValueError("pick_geom: no isomer satisfies the test")
    return hits[0]
