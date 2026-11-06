"""SVG/HTML -> PNG/PDF via Playwright Chromium (same renderer as the book)."""
from playwright.sync_api import sync_playwright
import pathlib

CHROME = "/opt/pw-browsers/chromium-1194/chrome-linux/chrome"


def launch(p):
    return p.chromium.launch(executable_path=CHROME, args=["--no-sandbox"])


def svg_to_png(svg, out, scale=2.0, bg="white"):
    import re
    w = float(re.search(r'width="([\d.]+)"', svg).group(1)); h = float(re.search(r'height="([\d.]+)"', svg).group(1))
    html = f'<html><body style="margin:0;background:{bg}">{svg}</body></html>'
    with sync_playwright() as p:
        b = launch(p)
        pg = b.new_page(viewport={"width": int(w) + 2, "height": int(h) + 2}, device_scale_factor=scale)
        pg.set_content(html)
        pg.screenshot(path=out, clip={"x": 0, "y": 0, "width": w, "height": h})
        b.close()
