"""Structure + curved-arrow scheme renderer (RDKit geometry, own SVG overlay).

Conventions (kept identical across the whole book):
  bond length 26 px, bond width 1.5 px, atom label 13.5 px, C059 (Century
  Schoolbook) for every label, black structures, dark-red curved arrows
  (electron-pair = full head, single-electron = half head), black reaction
  arrows.  Structures are never scaled.
"""
import math
import re
from rdkit import Chem
from rdkit.Chem import rdDepictor
from rdkit.Chem.Draw import rdMolDraw2D
from PIL import ImageFont

from . import chem

FONT_FILE = "/usr/share/fonts/opentype/urw-base35/C059-Roman.otf"
FONT_BOLD = "/usr/share/fonts/opentype/urw-base35/C059-Bold.otf"
FAM = "C059, 'Century Schoolbook', 'Century Schoolbook L', serif"
BOND = 26.0
LW = 1.5
FS = 13.5
ARROW_COL = "#b3121f"
INK = "#000000"
PAD = 13

_fcache = {}
LAST_ROWS = 1


def tw(text, size=FS, bold=False):
    key = (size, bold)
    if key not in _fcache:
        _fcache[key] = ImageFont.truetype(FONT_BOLD if bold else FONT_FILE, int(round(size * 4)))
    plain = re.sub(r"[_^]\{([^}]*)\}", r"\1", text)
    plain = re.sub(r"[_^](.)", r"\1", plain)
    return _fcache[key].getlength(plain) / 4.0


def rich(text, x, y, size=FS, anchor="middle", fill=INK, weight="normal", style="normal"):
    """SVG <text> with _{sub} / ^{sup} markup (dy based, renderer independent)."""
    toks = re.split(r"([_^]\{[^}]*\}|[_^].)", text)
    parts = []
    for t in toks:
        if not t:
            continue
        if t[0] in "_^":
            body = t[2:-1] if t[1] == "{" else t[1]
            dy = size * 0.28 if t[0] == "_" else -size * 0.42
            parts.append(f'<tspan dy="{dy:.1f}" font-size="{size*0.72:.1f}">{_esc(body)}</tspan>'
                         f'<tspan dy="{-dy:.1f}" font-size="{size:.1f}"></tspan>')
        else:
            parts.append(f"<tspan>{_esc(t)}</tspan>")
    return (f'<text x="{x:.1f}" y="{y:.1f}" font-family="{FAM}" font-size="{size}" '
            f'text-anchor="{anchor}" fill="{fill}" font-weight="{weight}" font-style="{style}">'
            + "".join(parts) + "</text>")


def _esc(s):
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


class Frag:
    """One drawn species.  smiles may carry atom maps (used for arrows)."""

    def __init__(self, smiles, arrows=None, label=None, lps=None, dashed=None,
                 notes=None, bracket=False, charge_note=None, rot=0, flip=False,
                 coords_from=None, wedge=True, hl=None, cnotes=None, free_dash=None, wedges=None):
        self.smiles = smiles
        self.arrows = arrows or []
        self.label = label
        self.lps = lps or []      # [(map, angle_deg or None, n_pairs)]
        self.dashed = dashed or []  # [(mapA, mapB)] partial bonds
        self.notes = notes or []  # [(map, text, dx, dy)]
        self.bracket = bracket
        self.rot = rot
        self.flip = flip
        self.coords_from = coords_from
        self.hl = hl or []
        self.wedges = wedges or []   # [(from_map, to_map, 'w'|'h')] explicit wedge/hash bonds
        self.cnotes = cnotes or []   # [([maps], text, dx, dy)] text at centroid
        self._render()

    # ---- geometry -------------------------------------------------------
    def _render(self):
        m = chem.parse(self.smiles)
        # explicit H on hetero atoms are drawn as implicit (OH2+, NH3+) unless an arrow uses them
        used = set()
        for ar in self.arrows:
            for key in ("from", "to"):
                sp = ar[key]
                used |= {sp[1]} | ({sp[2]} if sp[0] in ("b", "lpend") else set())
        rw = Chem.RWMol(m)
        drop = []
        for a in rw.GetAtoms():
            if a.GetAtomicNum() == 1 and a.GetDegree() == 1 and a.GetAtomMapNum() not in used:
                nb = a.GetNeighbors()[0]
                if nb.GetAtomicNum() != 6 and nb.GetAtomicNum() != 1:
                    drop.append((a.GetIdx(), nb.GetIdx()))
        for hi, ni in sorted(drop, reverse=True):
            nb = rw.GetAtomWithIdx(ni)
            nb.SetNumExplicitHs(nb.GetNumExplicitHs() + 1)
            nb.SetNoImplicit(True)
            rw.RemoveAtom(hi)
        m = rw.GetMol()
        m.UpdatePropertyCache(strict=False)
        maps = {a.GetAtomMapNum(): a.GetIdx() for a in m.GetAtoms() if a.GetAtomMapNum()}
        self.maps = maps
        dm = Chem.Mol(m)
        for a in dm.GetAtoms():
            a.SetAtomMapNum(0)
        cm = {}
        if self.coords_from is not None:
            from rdkit.Geometry import Point2D
            for mp, i in maps.items():
                if mp in self.coords_from.units:
                    x, y = self.coords_from.units[mp]
                    cm[i] = Point2D(x, y)
        if cm:
            rdDepictor.SetPreferCoordGen(False)
            rdDepictor.Compute2DCoords(dm, coordMap=cm, canonOrient=False)
            rdDepictor.SetPreferCoordGen(True)
            cf0 = dm.GetConformer()
            ls = []
            for b in dm.GetBonds():
                p1, p2 = cf0.GetAtomPosition(b.GetBeginAtomIdx()), cf0.GetAtomPosition(b.GetEndAtomIdx())
                ls.append(math.hypot(p1.x - p2.x, p1.y - p2.y))
            if ls and (max(ls) / max(min(ls), 1e-6) > 1.3):
                rdDepictor.Compute2DCoords(dm)
        else:
            rdDepictor.SetPreferCoordGen(True)
            rdDepictor.Compute2DCoords(dm)
        if self.rot or self.flip:
            conf = dm.GetConformer()
            th = math.radians(self.rot)
            for i in range(dm.GetNumAtoms()):
                p = conf.GetAtomPosition(i)
                x, y = p.x, p.y
                if self.flip:
                    x = -x
                conf.SetAtomPosition(i, (x * math.cos(th) - y * math.sin(th),
                                         x * math.sin(th) + y * math.cos(th), 0))
        self._arrange_components(dm, maps)
        if self.wedges:
            rw2 = Chem.RWMol(dm)
            for a, b, t in self.wedges:
                ia, ib = maps[a], maps[b]
                bd = rw2.GetBondBetweenAtoms(ia, ib)
                if bd.GetBeginAtomIdx() != ia:
                    bt = bd.GetBondType()
                    rw2.RemoveBond(ia, ib)
                    rw2.AddBond(ia, ib, bt)
                    bd = rw2.GetBondBetweenAtoms(ia, ib)
                bd.SetBondDir(Chem.BondDir.BEGINWEDGE if t == "w" else Chem.BondDir.BEGINDASH)
            for at in rw2.GetAtoms():
                at.SetChiralTag(Chem.ChiralType.CHI_UNSPECIFIED)
            dm = rw2.GetMol()
            dm.UpdatePropertyCache(strict=False)
        else:
            Chem.WedgeMolBonds(dm, dm.GetConformer())
        cf = dm.GetConformer()
        self.units = {mp: (cf.GetAtomPosition(i).x, cf.GetAtomPosition(i).y) for mp, i in maps.items()}
        W = 900
        d = rdMolDraw2D.MolDraw2DSVG(W, W)
        o = d.drawOptions()
        o.fixedBondLength = BOND
        o.bondLineWidth = LW
        o.baseFontSize = 0.55
        o.useBWAtomPalette()
        o.clearBackground = False
        o.padding = 0.0
        o.additionalAtomLabelPadding = 0.12
        o.multipleBondOffset = 0.14
        o.fixedFontSize = int(FS)
        o.explicitMethyl = False
        o.annotationFontScale = 0.6
        try:
            o.fontFile = FONT_FILE
        except Exception:
            pass
        hl = {maps[k] for k in self.hl if k in maps}
        if hl:
            d.DrawMolecule(dm, highlightAtoms=list(hl), highlightAtomColors={i: (1, 0.92, 0.6) for i in hl})
        else:
            d.DrawMolecule(dm)
        d.FinishDrawing()
        svg = d.GetDrawingText()
        inner = svg.split("<!-- END OF HEADER -->", 1)[1].rsplit("</svg>", 1)[0]
        self.pos = {}
        xs, ys = [], []
        for i in range(dm.GetNumAtoms()):
            p = d.GetDrawCoords(i)
            self.pos[i] = (p.x, p.y)
            xs.append(p.x)
            ys.append(p.y)
        # bounding box from glyph/path coordinates (more reliable than atoms)
        nums = []
        for dd in re.findall(r"\sd='([^']*)'", inner):
            dd = re.sub(r"[A-Za-z]", " ", dd)
            vals = [float(v) for v in re.findall(r"-?\d+\.?\d*", dd)]
            nums += [(vals[k], vals[k + 1]) for k in range(0, len(vals) - 1, 2)]
        bx = [float(a) for a, b in nums] or xs
        by = [float(b) for a, b in nums] or ys
        # symbols drawn as paths use 'd' with 'M x,y' too; cover charges via pad
        x0, x1 = min(min(bx), min(xs)), max(max(bx), max(xs))
        y0, y1 = min(min(by), min(ys)), max(max(by), max(ys))
        # drop the full-canvas clipping noise possibly emitted by RDKit
        self.x0, self.y0 = x0 - PAD, y0 - PAD
        self.w = (x1 - x0) + 2 * PAD
        self.h = (y1 - y0) + 2 * PAD
        self.inner = inner
        self.w_struct = self.w
        if self.label:
            self.w = max(self.w, tw(self.label, 12, True) + 8)
        self.mol = dm
        self.elem = {i: dm.GetAtomWithIdx(i).GetSymbol() for i in range(dm.GetNumAtoms())}


    def _arrange_components(self, dm, maps):
        comps = Chem.GetMolFrags(dm)
        if len(comps) < 2:
            return
        from rdkit.Geometry import Point3D
        cf = dm.GetConformer()
        comp_of = {}
        for ci, c in enumerate(comps):
            for i in c:
                comp_of[i] = ci
        U = BOND / 1.5   # px per unit -> invert for offsets: we work in units
        def pos(i):
            p = cf.GetAtomPosition(i)
            return (p.x, p.y)
        def centroid_nb(i):
            a = dm.GetAtomWithIdx(i)
            vx = vy = 0.0
            for nb in a.GetNeighbors():
                px, py = pos(nb.GetIdx())
                x, y = pos(i)
                vx += px - x; vy += py - y
            n = math.hypot(vx, vy)
            if n < 1e-6:
                # use molecule-centroid direction
                cx = sum(pos(k)[0] for k in comps[comp_of[i]]) / len(comps[comp_of[i]])
                cy = sum(pos(k)[1] for k in comps[comp_of[i]]) / len(comps[comp_of[i]])
                x, y = pos(i)
                vx, vy = x - cx, y - cy
                n = math.hypot(vx, vy)
                if n < 1e-6:
                    return (1.0, 0.0)
                return (vx / n, vy / n)
            return (-vx / n, -vy / n)
        def maps_of(spec):
            if spec[0] == "b":
                return [spec[1], spec[2]]
            return [spec[1]]
        placed = {0}
        order = list(range(1, len(comps)))
        # main component stays; others are moved next to it (or to the already placed ones)
        for ci in order:
            moved = False
            for ar in self.arrows:
                fa = [maps[m] for m in maps_of(ar["from"]) if m in maps]
                ta = [maps[m] for m in maps_of(ar["to"]) if m in maps]
                for src_atoms, snk_atoms in ((fa, ta), (ta, fa)):
                    ins = [i for i in src_atoms if comp_of[i] == ci]
                    outs = [i for i in snk_atoms if comp_of[i] in placed]
                    if ins and outs and not moved:
                        a_c, a_m = ins[0], outs[0]
                        donor_in_main = (src_atoms is ta)  # swapped: ta = donor? see below
                        # direction: from main atom outward
                        if ar["from"][0] == "lp" and maps.get(ar["from"][1]) == a_m:
                            ang = ar["from"][2] if len(ar["from"]) > 2 else None
                            d = centroid_nb(a_m) if ang is None else (math.cos(math.radians(ang)), math.sin(math.radians(ang)))
                        elif ar["from"][0] == "b" and (maps.get(ar["from"][1]) in (a_m,) or maps.get(ar["from"][2]) in (a_m,)):
                            d = centroid_nb(a_m)
                        else:
                            d = centroid_nb(a_m)
                        mx, my = pos(a_m)
                        tx, ty = mx + d[0] * 2.6, my + d[1] * 2.6
                        cx0, cy0 = pos(a_c)
                        dx, dy = tx - cx0, ty - cy0
                        for k in comps[ci]:
                            x, y = pos(k)
                            cf.SetAtomPosition(k, Point3D(x + dx, y + dy, 0))
                        moved = True
            if not moved:
                # default: to the right of everything placed so far
                xs = [pos(k)[0] for c in placed for k in comps[c]]
                ys = [pos(k)[1] for c in placed for k in comps[c]]
                x0 = min(pos(k)[0] for k in comps[ci])
                dx = max(xs) + 2.4 - x0
                dy = (sum(ys) / len(ys)) - (sum(pos(k)[1] for k in comps[ci]) / len(comps[ci]))
                for k in comps[ci]:
                    x, y = pos(k)
                    cf.SetAtomPosition(k, Point3D(x + dx, y + dy, 0))
            placed.add(ci)

    # ---- overlay helpers ------------------------------------------------
    def P(self, mp):
        i = self.maps[mp]
        return self.pos[i]

    def _label_r(self, mp):
        i = self.maps[mp]
        el = self.elem[i]
        a = self.mol.GetAtomWithIdx(i)
        if el == "C" and a.GetDegree() > 0 and a.GetFormalCharge() == 0 and a.GetNumRadicalElectrons() == 0:
            return 2.0
        return 8.5

    def anchor(self, spec, toward=None):
        k = spec[0]
        if k == "a":
            x, y = self.P(spec[1])
            if toward is not None:
                dx, dy = toward[0] - x, toward[1] - y
                n = math.hypot(dx, dy) or 1
                r = self._label_r(spec[1])
                return (x + dx / n * r, y + dy / n * r)
            return (x, y)
        if k == "b":
            (x1, y1), (x2, y2) = self.P(spec[1]), self.P(spec[2])
            return ((x1 + x2) / 2, (y1 + y2) / 2)
        if k == "lp":
            return self.lp_pos(spec[1], spec[2] if len(spec) > 2 else None)
        if k == "lpend":
            x, y = self.P(spec[1])
            ox, oy = self.P(spec[2])
            dx, dy = x - ox, y - oy
            n = math.hypot(dx, dy) or 1
            R = self._label_r(spec[1]) + 9
            return (x + dx / n * R, y + dy / n * R)
        if k == "pt":
            x, y = self.P(spec[1])
            return (x + spec[2], y + spec[3])
        if k == "xy":
            return (spec[1], spec[2])
        raise ValueError(spec)

    def lp_dir(self, mp):
        i = self.maps[mp]
        x, y = self.pos[i]
        vx = vy = 0.0
        a = self.mol.GetAtomWithIdx(i)
        for nb in a.GetNeighbors():
            px, py = self.pos[nb.GetIdx()]
            vx += px - x
            vy += py - y
        n = math.hypot(vx, vy)
        if n < 1e-6:
            return (0.0, -1.0)
        return (-vx / n, -vy / n)

    def lp_pos(self, mp, ang=None):
        x, y = self.P(mp)
        if ang is None:
            dx, dy = self.lp_dir(mp)
        else:
            dx, dy = math.cos(math.radians(ang)), -math.sin(math.radians(ang))
        r = 14.5 if self.elem[self.maps[mp]] != "C" else 8
        return (x + dx * r, y + dy * r)

    def lone_pair_svg(self):
        s = []
        for lp in self.lps:
            mp = lp[0]
            ang = lp[1] if len(lp) > 1 else None
            n = lp[2] if len(lp) > 2 else 1
            x, y = self.P(mp)
            base = None
            if ang is None:
                dx, dy = self.lp_dir(mp)
                base = math.atan2(-dy, dx)
            else:
                base = math.radians(ang)
            spread = math.radians(0 if n == 1 else 70)
            for k in range(n):
                a = base + (k - (n - 1) / 2) * spread * (2 if n == 2 else 1) / (1 if n == 1 else 1) if n > 1 else base
                r = 11.5
                cx, cy = x + r * math.cos(a), y - r * math.sin(a)
                nx, ny = -math.sin(a), -math.cos(a)  # perpendicular (screen)
                for sgn in (-1, 1):
                    s.append(f'<circle cx="{cx + sgn*2.2*nx:.1f}" cy="{cy + sgn*2.2*ny:.1f}" r="1.25" fill="{INK}"/>')
        return "".join(s)

    def arrows_svg(self):
        out = []
        for ar in self.arrows:
            src, snk = ar["from"], ar["to"]
            hook = ar.get("radical", False)
            tgt_c = self.anchor(snk)
            src_c = self.anchor(src)
            p0 = self.anchor(src, toward=tgt_c) if src[0] == "a" else src_c
            p1 = self.anchor(snk, toward=src_c) if snk[0] == "a" else tgt_c
            if "p0" in ar:
                p0 = (p0[0] + ar["p0"][0], p0[1] + ar["p0"][1])
            if "p1" in ar:
                p1 = (p1[0] + ar["p1"][0], p1[1] + ar["p1"][1])
            out.append(curved(p0, p1, ar.get("bend", 0.45), hook, ar.get("col", ARROW_COL)))
        return "".join(out)

    def dashed_svg(self):
        s = []
        for a, b in self.dashed:
            (x1, y1), (x2, y2) = self.P(a), self.P(b)
            s.append(f'<line x1="{x1:.1f}" y1="{y1:.1f}" x2="{x2:.1f}" y2="{y2:.1f}" stroke="{INK}" '
                     f'stroke-width="1.3" stroke-dasharray="3.2,3"/>')
        return "".join(s)

    def notes_svg(self):
        s = []
        for mps, text, dx, dy in self.cnotes:
            pts = [self.P(m) for m in mps]
            x = sum(p[0] for p in pts) / len(pts)
            y = sum(p[1] for p in pts) / len(pts)
            s.append(rich(text, x + dx, y + dy, size=13))
        for mp, text, dx, dy in self.notes:
            x, y = self.P(mp)
            s.append(rich(text, x + dx, y + dy, size=11.5))
        return "".join(s)

    def group(self, ox, oy):
        """SVG group placed with its bbox top-left at (ox, oy)."""
        ox_s = ox + (self.w - self.w_struct) / 2
        g = [f'<g transform="translate({ox_s - self.x0:.2f},{oy - self.y0:.2f})">',
             self.inner, self.dashed_svg(), self.lone_pair_svg(), self.arrows_svg(), self.notes_svg(), "</g>"]
        if self.bracket:
            g.append(bracket_svg(ox_s, oy, self.w_struct, self.h))
        if self.label:
            g.append(rich(self.label, ox + self.w / 2, oy + self.h + 12, size=12, weight="bold"))
        return "".join(g)


def bracket_svg(x, y, w, h):
    t = 5
    return (f'<path d="M{x+t},{y} L{x},{y} L{x},{y+h} L{x+t},{y+h}" fill="none" stroke="{INK}" stroke-width="1.1"/>'
            f'<path d="M{x+w-t},{y} L{x+w},{y} L{x+w},{y+h} L{x+w-t},{y+h}" fill="none" stroke="{INK}" stroke-width="1.1"/>')


def curved(p0, p1, bend=0.45, hook=False, col=ARROW_COL, w=1.35):
    """Quadratic curved arrow.  bend>0 curves to the left of the p0->p1 direction."""
    (x0, y0), (x1, y1) = p0, p1
    dx, dy = x1 - x0, y1 - y0
    L = math.hypot(dx, dy) or 1
    mx, my = (x0 + x1) / 2, (y0 + y1) / 2
    nx, ny = dy / L, -dx / L   # left normal in screen coords (y down)
    cx, cy = mx + nx * bend * L, my + ny * bend * L
    # tangent at end
    tx, ty = x1 - cx, y1 - cy
    tl = math.hypot(tx, ty) or 1
    tx, ty = tx / tl, ty / tl
    hl = 6.5
    bx, by = x1 - tx * hl, y1 - ty * hl
    px, py = -ty, tx
    path = f'<path d="M{x0:.1f},{y0:.1f} Q{cx:.1f},{cy:.1f} {bx:.1f},{by:.1f}" fill="none" stroke="{col}" stroke-width="{w}" stroke-linecap="round"/>'
    if hook:
        head = (f'<path d="M{bx:.1f},{by:.1f} L{x1:.1f},{y1:.1f} M{x1:.1f},{y1:.1f} L{x1 - tx*hl*0.9 + px*3.2:.1f},{y1 - ty*hl*0.9 + py*3.2:.1f}" '
                f'fill="none" stroke="{col}" stroke-width="{w}"/>')
        path = f'<path d="M{x0:.1f},{y0:.1f} Q{cx:.1f},{cy:.1f} {x1:.1f},{y1:.1f}" fill="none" stroke="{col}" stroke-width="{w}" stroke-linecap="round"/>'
        head = (f'<path d="M{x1:.1f},{y1:.1f} L{x1 - tx*7 + px*3.6:.1f},{y1 - ty*7 + py*3.6:.1f}" fill="none" stroke="{col}" stroke-width="{w}"/>')
    else:
        head = (f'<path d="M{x1:.1f},{y1:.1f} L{bx + px*3.4:.1f},{by + py*3.4:.1f} L{bx - px*3.4:.1f},{by - py*3.4:.1f} Z" fill="{col}"/>')
    return path + head


# ---------------------------------------------------------------- schemes
class Arrow:
    """Reaction arrow item.  kind: rxn | eq | res | rev (rxn with both heads)"""

    def __init__(self, kind="rxn", above="", below="", length=None):
        self.kind, self.above, self.below, self.length = kind, above, below, length

    def width(self):
        lines = [l for l in (str(self.above).split("|") + str(self.below).split("|")) if l]
        need = max([tw(l, 12) for l in lines] + [0]) + 14
        return self.length or max(40, need)


class Plus:
    pass


class Txt:
    def __init__(self, s, size=FS, bold=False, italic=False):
        self.s, self.size, self.bold, self.italic = s, size, bold, italic


class Br:
    """Forced row break; optional vertical connector arrow."""

    def __init__(self, down=None):
        self.down = down


class Gap:
    def __init__(self, w=10):
        self.w = w


def _arrow_svg(a, x, yc, w):
    cx0, cx1 = x + 3, x + w - 3
    col = INK
    parts = []
    def head(xt, direction, y, half=None):
        s = 7.5 * direction
        if half is None:
            return f'<path d="M{xt},{y} L{xt - s},{y - 3.6} L{xt - s*0.78},{y} L{xt - s},{y + 3.6} Z" fill="{col}"/>'
        # half (harpoon) head: half = -1 top barb, +1 bottom barb
        return f'<path d="M{xt},{y} L{xt - s},{y + half*4} L{xt - s*0.35},{y} Z" fill="{col}"/>'
    if a.kind in ("rxn", "rev"):
        parts.append(f'<line x1="{cx0}" y1="{yc}" x2="{cx1 - 5}" y2="{yc}" stroke="{col}" stroke-width="1.4"/>')
        parts.append(head(cx1, 1, yc))
        if a.kind == "rev":
            parts.append(head(cx0, -1, yc))
    elif a.kind == "res":
        parts.append(f'<line x1="{cx0 + 4}" y1="{yc}" x2="{cx1 - 4}" y2="{yc}" stroke="{col}" stroke-width="1.2"/>')
        parts.append(head(cx1, 1, yc))
        parts.append(head(cx0, -1, yc))
    elif a.kind == "eq":
        y1, y2 = yc - 2.6, yc + 2.6
        parts.append(f'<line x1="{cx0}" y1="{y1}" x2="{cx1}" y2="{y1}" stroke="{col}" stroke-width="1.3"/>')
        parts.append(f'<path d="M{cx1},{y1} L{cx1 - 8},{y1 - 4.4} L{cx1 - 5},{y1} Z" fill="{col}"/>')
        parts.append(f'<line x1="{cx0}" y1="{y2}" x2="{cx1}" y2="{y2}" stroke="{col}" stroke-width="1.3"/>')
        parts.append(f'<path d="M{cx0},{y2} L{cx0 + 8},{y2 + 4.4} L{cx0 + 5},{y2} Z" fill="{col}"/>')
    ab = [l for l in str(a.above).split("|") if l]
    be = [l for l in str(a.below).split("|") if l]
    for k, l in enumerate(reversed(ab)):
        parts.append(rich(l, x + w / 2, yc - 8 - k * 14, size=12))
    for k, l in enumerate(be):
        parts.append(rich(l, x + w / 2, yc + 17 + k * 14, size=12))
    return "".join(parts)


def scheme(items, width=680, gap=7, rowgap=26, caption=None):
    """Lay out items left→right, wrapping at `width`.  Returns (svg, w, h)."""
    rows, cur, curw = [], [], 0
    def iw(it):
        if isinstance(it, Frag):
            return it.w
        if isinstance(it, Arrow):
            return it.width()
        if isinstance(it, Plus):
            return 16
        if isinstance(it, Txt):
            return tw(it.s, it.size, it.bold) + 2
        if isinstance(it, Gap):
            return it.w
        return 0
    # an Arrow is kept together with the item that follows it
    units, i = [], 0
    while i < len(items):
        it = items[i]
        if isinstance(it, Arrow) and i + 1 < len(items) and not isinstance(items[i + 1], Br):
            units.append([it, items[i + 1]]); i += 2
        else:
            units.append([it]); i += 1
    for u in units:
        if isinstance(u[0], Br):
            rows.append((cur, u[0])); cur, curw = [], 0
            continue
        w = sum(iw(x) for x in u) + gap * (len(u) - 1)
        if cur and curw + gap + w > width + 0.1:
            rows.append((cur, None)); cur, curw = [], 0
        for x in u:
            cur.append(x)
            curw += (gap if len(cur) > 1 else 0) + iw(x)
    if cur:
        rows.append((cur, None))
    svg, y, maxw = [], 4, 0
    for r, br in rows:
        hs = [it.h + (14 if getattr(it, "label", None) else 0) for it in r if isinstance(it, Frag)]
        rh = max(hs + [30])
        # arrow label headroom
        extra_top = 0
        for it in r:
            if isinstance(it, Arrow):
                extra_top = max(extra_top, 8 + 14 * len([l for l in str(it.above).split("|") if l]) - rh / 2)
        yc = y + max(extra_top, 0) + rh / 2
        rtot = rh + max(extra_top, 0)
        x = 0
        for it in r:
            if isinstance(it, Frag):
                fy = yc - it.h / 2 - (7 if it.label else 0)
                svg.append(it.group(x, fy))
                x += it.w + gap
            elif isinstance(it, Arrow):
                w = it.width()
                svg.append(_arrow_svg(it, x, yc - (7 if any(getattr(i, "label", None) for i in r if isinstance(i, Frag)) else 0), w))
                x += w + gap
            elif isinstance(it, Plus):
                svg.append(rich("+", x + 8, yc + 5, size=16))
                x += 16 + gap
            elif isinstance(it, Txt):
                svg.append(rich(it.s, x + (tw(it.s, it.size, it.bold)) / 2, yc + 4, size=it.size,
                                weight="bold" if it.bold else "normal", style="italic" if it.italic else "normal"))
                x += tw(it.s, it.size, it.bold) + 2 + gap
            elif isinstance(it, Gap):
                x += it.w + gap
        maxw = max(maxw, x - gap)
        y += rtot + rowgap
        if br is not None and br.down:
            pass
    H = y - rowgap + 4
    global LAST_ROWS
    LAST_ROWS = len(rows)
    W = max(maxw, 10)
    body = "".join(svg)
    s = (f'<svg xmlns="http://www.w3.org/2000/svg" width="{W:.0f}" height="{H:.0f}" viewBox="0 0 {W:.1f} {H:.1f}" '
         f'class="scheme" font-family="{FAM}">{body}</svg>')
    return s, W, H


def check_frag_list(frags):
    for f in frags:
        chem.parse(f.smiles)
