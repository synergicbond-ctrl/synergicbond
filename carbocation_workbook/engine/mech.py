"""Mechanism DSL: start species + electron-pair arrows per step -> validated scheme."""
from rdkit import Chem
from . import chem
from .draw import Frag, Arrow, Plus, Txt, Br, Gap, scheme, tw

LOG = []   # verification records


class A:
    """Electron-pair curved arrow.  src: ('b',i,j) | ('lp',i);  snk: ('nb',i,j) | ('lp',i)."""

    def __init__(self, src, snk, bend=0.45, p0=None, p1=None, rad=False):
        self.src, self.snk, self.bend, self.p0, self.p1, self.rad = src, snk, bend, p0, p1, rad

    def pair(self):
        return (self.src, self.snk)

    def draw(self):
        s, k = self.src, self.snk
        if s[0] == "b":
            frm = ("b", s[1], s[2])
        else:
            frm = ("lp", s[1]) + tuple(s[2:])
        if k[0] == "nb":
            others = [x for x in k[1:3] if x not in (s[1:3] if s[0] == "b" else (s[1],))]
            tgt = others[0] if others else k[2]
            to = ("a", tgt)
        else:
            if s[0] == "b" and k[1] in s[1:3]:
                other = s[2] if s[1] == k[1] else s[1]
                to = ("lpend", k[1], other)
            else:
                to = ("a", k[1])
        d = {"from": frm, "to": to, "bend": self.bend, "radical": self.rad}
        if self.p0:
            d["p0"] = self.p0
        if self.p1:
            d["p1"] = self.p1
        return d


class St:
    def __init__(self, arrows, cond="", kind="rxn", add=None, drop=None, expect=None,
                 carbanions=(), hydrides=(), stereo=False, above=None, show=None):
        self.arrows = arrows if isinstance(arrows, (list, tuple)) else [arrows]
        self.cond, self.kind, self.add, self.drop = cond, kind, add, drop
        self.expect, self.carbanions, self.hydrides, self.stereo = expect, carbanions, hydrides, stereo
        self.above = above
        self.show = show


def _drop(mol, maps):
    frags = Chem.GetMolFrags(mol, asMols=True, sanitizeFrags=False)
    keep = [f for f in frags if not any(a.GetAtomMapNum() in maps for a in f.GetAtoms())]
    if not keep:
        return None
    out = keep[0]
    for f in keep[1:]:
        out = Chem.CombineMols(out, f)
    return out


def mech(mid, start, steps, expect_final=None, final_stereo=False, width=337, label=None, lps=None,
         final_label=None, notes=None, gap=6, rot=0, flip=False, bracket_last=False):
    """Build and validate a mechanism scheme.  Returns dict(svg,w,h,ok)."""
    cur = chem.parse(start)
    ok, msgs = True, []
    items, prev, narrows = [], None, 0
    lp_extra = lps or {}
    for si, st in enumerate(steps):
        smi = Chem.MolToSmiles(cur, canonical=False)
        if st.add:
            smi = smi + "." + st.add
        react = chem.parse(smi)
        pairs = [a.pair() for a in st.arrows]
        try:
            prod = chem.push_mol(react, pairs, st.carbanions, st.hydrides)
        except Exception as e:  # noqa
            ok = False
            msgs.append(f"step {si+1}: {e}")
            LOG.append(dict(id=mid, ok=False, msg="; ".join(msgs)))
            raise
        shown = _drop(prod, set(st.drop)) if st.drop else prod
        if st.show is not None:
            sh = chem.parse(st.show)
            if chem.canon(sh, stereo=False) != chem.canon(shown, stereo=False):
                raise AssertionError(f"{mid}: step {si+1} 'show' does not match arrow product")
            shown = sh
        if st.expect is not None:
            if chem.canon(shown, stereo=st.stereo) != chem.canon(st.expect, stereo=st.stereo):
                ok = False
                msgs.append(f"step {si+1}: expected {chem.canon(st.expect, stereo=st.stereo)} got {chem.canon(shown, stereo=st.stereo)}")
        # lone pairs for lp sources
        lpl = []
        for a in st.arrows:
            if a.src[0] == "lp" and not any(l[0] == a.src[1] for l in lpl):
                lpl.append((a.src[1],) + tuple(a.src[2:]))
        for k, v in (lp_extra.get(si, []) if isinstance(lp_extra, dict) else []):
            pass
        for l in (lp_extra.get(si, []) if isinstance(lp_extra, dict) else []):
            if not any(x[0] == l[0] for x in lpl):
                lpl.append(l)
        f = Frag(Chem.MolToSmiles(react, canonical=False), arrows=[a.draw() for a in st.arrows], lps=lpl,
                 coords_from=prev, rot=rot if si == 0 else 0, flip=flip if si == 0 else False)
        items.append(f)
        items.append(Arrow(st.kind, st.cond, st.above or ""))
        prev = f
        narrows += len(st.arrows)
        cur = shown
    smi = Chem.MolToSmiles(cur, canonical=False)
    fl = Frag(smi, coords_from=prev, label=final_label, bracket=bracket_last)
    items.append(fl)
    if expect_final is not None:
        if chem.canon(cur, stereo=final_stereo) != chem.canon(expect_final, stereo=final_stereo):
            ok = False
            msgs.append(f"final: expected {chem.canon(expect_final, stereo=final_stereo)} got {chem.canon(cur, stereo=final_stereo)}")
    svg, w, h = scheme(items, width=width)
    from . import draw as _d
    rows_n = _d.LAST_ROWS
    LOG.append(dict(id=mid, ok=ok, msg="; ".join(msgs) or "ok", steps=len(steps), arrows=narrows,
                    final=chem.canon(cur)))
    if not ok:
        raise AssertionError(f"{mid}: " + "; ".join(msgs))
    return dict(svg=svg, w=w, h=h, ok=ok, rows=rows_n, args=(start, steps, expect_final, label, lps, final_label, notes, gap, rot, flip, bracket_last))


def row(items, width=337):
    svg, w, h = scheme(items, width=width)
    return dict(svg=svg, w=w, h=h)


def structs(pairs, width=337, gap=14, labels=True):
    """Row of labelled structures: pairs = [(label, smiles_or_Frag)]"""
    items = []
    for i, (lab, s) in enumerate(pairs):
        f = s if isinstance(s, Frag) else Frag(s, label=lab if labels else None)
        if isinstance(s, Frag) and lab:
            f.label = lab
        items.append(f)
        items.append(Gap(gap))
    svg, w, h = scheme(items[:-1], width=width, gap=0)
    return dict(svg=svg, w=w, h=h)
