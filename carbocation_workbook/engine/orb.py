"""Hand-built SVG orbital / bonding schematics (no chemistry software can draw these)."""
from .draw import rich, FAM, INK, ARROW_COL, tw


def lobe(cx, cy, ang, L=34, W=13, fill="#dfe6f2", stroke="#334", sw=1.1, dash=False):
    d = (f"M0,0 C{L*0.15:.1f},{-W:.1f} {L*0.85:.1f},{-W*0.95:.1f} {L:.1f},0 "
         f"C{L*0.85:.1f},{W*0.95:.1f} {L*0.15:.1f},{W:.1f} 0,0 Z")
    da = ' stroke-dasharray="3,2.5"' if dash else ""
    return (f'<path d="{d}" transform="translate({cx:.1f},{cy:.1f}) rotate({ang:.1f})" fill="{fill}" stroke="{stroke}" '
            f'stroke-width="{sw}"{da}/>')


def line(x1, y1, x2, y2, w=1.5, col=INK, dash=None):
    d = f' stroke-dasharray="{dash}"' if dash else ""
    return f'<line x1="{x1:.1f}" y1="{y1:.1f}" x2="{x2:.1f}" y2="{y2:.1f}" stroke="{col}" stroke-width="{w}"{d} stroke-linecap="round"/>'


def wedge(x1, y1, x2, y2, w=5):
    import math
    dx, dy = x2 - x1, y2 - y1
    n = math.hypot(dx, dy)
    px, py = -dy / n * w / 2, dx / n * w / 2
    return f'<path d="M{x1:.1f},{y1:.1f} L{x2+px:.1f},{y2+py:.1f} L{x2-px:.1f},{y2-py:.1f} Z" fill="{INK}"/>'


def dashwedge(x1, y1, x2, y2, n=6, w=5):
    import math
    out = []
    for k in range(1, n + 1):
        t = k / n
        x, y = x1 + (x2 - x1) * t, y1 + (y2 - y1) * t
        dx, dy = x2 - x1, y2 - y1
        L = math.hypot(dx, dy)
        px, py = -dy / L * w * t / 2, dx / L * w * t / 2
        out.append(f'<line x1="{x-px:.1f}" y1="{y-py:.1f}" x2="{x+px:.1f}" y2="{y+py:.1f}" stroke="{INK}" stroke-width="1.2"/>')
    return "".join(out)


def text(s, x, y, size=12.5, anchor="middle", **k):
    return rich(s, x, y, size=size, anchor=anchor, **k)


def dot(x, y, r=1.6):
    return f'<circle cx="{x:.1f}" cy="{y:.1f}" r="{r}" fill="{INK}"/>'


def wrap(parts, w, h):
    svg = (f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}" class="scheme" font-family="{FAM}">'
           + "".join(parts) + "</svg>")
    return dict(svg=svg, w=w, h=h)


def curved_path(x0, y0, x1, y1, cx, cy, col=ARROW_COL, head=True):
    import math
    tx, ty = x1 - cx, y1 - cy
    tl = math.hypot(tx, ty) or 1
    tx, ty = tx / tl, ty / tl
    bx, by = x1 - tx * 6.5, y1 - ty * 6.5
    px, py = -ty, tx
    s = f'<path d="M{x0:.1f},{y0:.1f} Q{cx:.1f},{cy:.1f} {bx:.1f},{by:.1f}" fill="none" stroke="{col}" stroke-width="1.35"/>'
    if head:
        s += f'<path d="M{x1:.1f},{y1:.1f} L{bx+px*3.4:.1f},{by+py*3.4:.1f} L{bx-px*3.4:.1f},{by-py*3.4:.1f} Z" fill="{col}"/>'
    return s
