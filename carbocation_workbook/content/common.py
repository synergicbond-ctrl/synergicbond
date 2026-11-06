import sys, pathlib
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))
from engine.mech import mech, A, St, row, structs, LOG
from engine.draw import Frag, Arrow, Plus, Txt, Br, Gap, scheme, rich, tw
from engine.book import Book, Q
from engine import chem

HP = "[H+:90]"            # proton
OH2 = "[OH2:92]"          # water used as base / nucleophile
HB = "[H:90][Br:91]"
HCl = "[H:90][Cl:91]"


def ex(eid, title, start, steps, final=None, text="", width=337, **kw):
    """Build a validated mechanism cell; widen to full page width when it cannot fit one row in a column."""
    d = mech(eid, start, steps, expect_final=final, width=width, **kw)
    span = 1
    if width == 337 and d["rows"] > 1:
        d = mech(eid + "'", start, steps, expect_final=final, width=680, **kw)
        span = 2
    elif width == 680:
        span = 2
    return dict(title=f"{eid}  {title}", fig=d, text=text, span=span)


def one(frag_smiles, label=None, width=337, **kw):
    f = Frag(frag_smiles, label=label, **kw)
    svg, w, h = scheme([f], width=width)
    return dict(svg=svg, w=w, h=h)


def Ph(m, para=None, ortho=None, meta=None):
    """Kekulé phenyl, ipso atom map m, ring maps m..m+5 (ipso, o, m, p, m', o').
    para/ortho/meta: substituent SMILES fragments to replace H on p / o / m positions."""
    def atom(k, sub):
        return f"[C:{m+k}]({sub})" if sub else f"[CH:{m+k}]"
    o = ortho or ""
    mt = meta or ""
    return (f"[C:{m}]1=[CH:{m+1}][CH:{m+2}]=" + (f"[C:{m+3}]({para})" if para else f"[CH:{m+3}]") +
            f"[CH:{m+4}]=[CH:{m+5}]1")


def vstack(figs, gap=8):
    """Stack several figure dicts (svg strings) vertically."""
    import re
    W = max(f["w"] for f in figs)
    y = 0
    parts = []
    for f in figs:
        inner = re.sub(r"^<svg[^>]*>", "", f["svg"]).rsplit("</svg>", 1)[0]
        parts.append(f'<g transform="translate(0,{y})">{inner}</g>')
        y += f["h"] + gap
    H = y - gap
    svg = (f'<svg xmlns="http://www.w3.org/2000/svg" width="{W:.0f}" height="{H:.0f}" viewBox="0 0 {W:.1f} {H:.1f}" '
           f'class="scheme">' + "".join(parts) + "</svg>")
    return dict(svg=svg, w=W, h=H)


def cell(eid, title, fig, text="", span=1):
    return dict(title=f"{eid}  {title}", fig=fig, text=text, span=span)
