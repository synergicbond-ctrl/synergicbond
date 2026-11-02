#!/usr/bin/env python3
"""Writes the human-readable evidence documents from the machine evidence (run from the repository root).

Reads : docs/solid-state-textbook/{ledger.json, ledger-items.csv, ledger-structure.csv, animations.json, placement-report.json, verification.json}
Writes: docs/solid-state-textbook/{ledger-summary.md, animation-map.md, chemistry-audit.md, verification-summary.md}
"""
import csv, json, pathlib, collections

D = pathlib.Path("docs/solid-state-textbook")
ledger = json.loads((D / "ledger.json").read_text())
anims = json.loads((D / "animations.json").read_text())
ver = json.loads((D / "verification.json").read_text())

# ------------------------------------------------------------------ ledger summary
rows = list(csv.DictReader(open(D / "ledger-items.csv", encoding="utf-8")))
count = collections.Counter(r["status"] for r in rows)
out = ["# Content-preservation ledger", "",
       "Every string in the original data files (`app/learn/solid-state/parts/part01-23.tsx` and `master/_content.ts`, including text written between JSX tags) "
       "was compared with the finished textbook **inside its own section** (`part-NN` for the parts, `master` for the Master notes). Maths is compared through its LaTeX.", "",
       f"**{len(rows)} source items checked.**", ""]
out += ["| Status | Items | Meaning |", "|---|---:|---|",
        f"| preserved | {count['preserved']} | found verbatim in its own section |",
        f"| preserved-after-correction | {count['preserved-after-correction']} | the *source* is corrupted; the textbook has the corrected form (listed below) |",
        f"| metadata | {count.get('metadata', 0)} | hub-card text, not chapter body (now also included as the Master overview) |",
        f"| formatting | {count['formatting']} | styling class lists in the source files, not content |",
        f"| omission | {count.get('omission', 0)} | **genuinely missing from the textbook** |", ""]
out += ["## Per source file", "", "| Source | Items | Preserved | Corrected | Metadata | Formatting | Omissions |", "|---|---:|---:|---:|---:|---:|---:|"]
for r in ledger["report"]:
    out.append(f"| {r['id']} | {r['items']} | {r['preserved']} | {r['corrected']} | {r['metadata']} | {r['formatting']} | {r['omission']} |")
out += ["", "## Source encoding defect (documented, source files not modified)", "",
        "The Master data file (`app/learn/solid-state/master/_content.ts`) contains the literal text `\\u0007lpha` where `\\alpha` was intended, and `\\u0007pprox` where `\\approx` was intended "
        "(a control-character escape replaced the backslash and the first letter). On the website this renders as broken maths. The textbook uses the correct symbols. "
        "Each affected item, before and after:", "", "| Line | Field | Original (source) | Corrected (textbook) |", "|---:|---|---|---|"]
for r in ledger["report"]:
    for n in r["notes"]:
        if "before" in n:
            out.append(f"| {n['line']} | {n['key']} | `{n['before'].replace('|', '/')}` | `{n['after'].replace('|', '/')}` |")
out += ["", "A ready-to-apply patch for the website source is in `source-encoding-fix.patch` (not applied: the original Master files are preserved until you approve).", "",
        "## Structure per section", "", "The textbook must hold at least as many tables, diagrams/figures and worked-example labels as the source has blocks.", "",
        "| Section | Source tables | HTML tables | Source diagrams | HTML figures/svg/pre | Source examples | HTML example labels | Result |", "|---|---:|---:|---:|---|---:|---:|---|"]
for r in csv.DictReader(open(D / "ledger-structure.csv", encoding="utf-8")):
    out.append("| " + " | ".join(r.values()) + " |")
(D / "ledger-summary.md").write_text("\n".join(out) + "\n", encoding="utf-8")

# ------------------------------------------------------------------ animation map
motion = {m["mode"]: m for m in ver.get("motion", [])}
tested = {l["id"]: l for l in ver.get("labs", [])}
out = ["# Animation map", "",
       f"{len(anims)} animations, placed after the theory under their heading and before any worked example in the same section "
       "(`placement`/`placedBeforeExample` come from the placement script). The 3D views are the **original Three.js Crystal Lab, unchanged**; "
       "the small 2D models (defects, packing bars, radius ratio, density) are new and are labelled as such.", "",
       "| # | Kind | View | Under heading | Placement | Before worked example | Loaded in browser |", "|---:|---|---|---|---|---|---|"]
for a in anims:
    t = tested.get(a["id"], {})
    loaded = "yes" if t.get("loaded") and t.get("canvas") else ("n/a (2D model)" if a["kind"].startswith("Small") else "not confirmed")
    out.append(f"| {a['n']} | {a['kind']} | {a['title']} (`{a['ref']}`) | {a['heading']} | {a['placement']} | {'yes' if a['placedBeforeExample'] else 'no'} | {loaded} |")
(D / "animation-map.md").write_text("\n".join(out) + "\n", encoding="utf-8")

# ------------------------------------------------------------------ chemistry audit
fp = ver.get("firstPrinciples", {})
out = ["# Chemistry audit", "",
       "Values below were recomputed from first principles in the test script and compared with what the **live Crystal Lab displays** in each of the placed views.", "",
       "## First-principles values", "", "| Quantity | Computed here |", "|---|---|"]
for k, v in (fp.get("packing") or {}).items():
    out.append(f"| packing fraction, {k} | {v}% |")
for k, v in (fp.get("contact") or {}).items():
    out.append(f"| hard-sphere contact, {k} | {v} |")
out += [f"| fcc voids per cell | {fp.get('fccVoids')} |", f"| hcp voids per hexagonal prism | {fp.get('hcpVoids')} |",
        f"| radius-ratio limits (CN 3, 4, 6, 8) | {', '.join(f'{x:.4f}' for x in (fp.get('radiusRatioLimits') or {}).values())} |",
        f"| density of bcc iron (Z=2, M=55.85, a=287 pm) | {fp.get('densityIron', 0):.3f} g cm⁻³ |", "",
        "## What each placed lab view displays vs the expected value", "", "| Animation | View | Result | Checks |", "|---:|---|---|---|"]
for g in ver.get("geometry", []):
    out.append(f"| {g['id'].replace('anim-', '')} | `{g['hash']}` | {'all correct' if g['ok'] else 'DISCREPANCY'} | {'; '.join(c for c in g['checks'])} |")
w = ver.get("widgets", {})
out += ["", "## The new 2D models", "", f"* density calculator default (iron): `{w.get('densityDefault', 'not run')}`",
        f"* radius-ratio slider: {json.dumps(w.get('radius', {}), ensure_ascii=False)}",
        f"* packing bars: {w.get('packingBars')}", f"* defect descriptions: {json.dumps(w.get('defects', {}), ensure_ascii=False)}"]
(D / "chemistry-audit.md").write_text("\n".join(out) + "\n", encoding="utf-8")

# ------------------------------------------------------------------ verification summary
out = ["# Browser verification", "", f"Engine: {ver.get('engine')}. Run: {ver.get('when')}.", "",
       "## Layout at five widths", "", "| Width | Sideways scroll (px) | Page errors | 3D views | 2D models | Still images load |", "|---:|---:|---:|---:|---:|---|"]
for v in ver.get("viewports", []):
    out.append(f"| {v['width']} | {v['overflow']} | {v['pageErrors']} | {v['labs']} | {v['widgets']} | {'yes' if v['posterOk'] else 'NO'} |")
out += ["", "## Other checks", "", f"* offline (requests to anything but the file itself): {ver.get('offline')}", f"* equations/text: {ver.get('text')}", f"* search: {ver.get('search')}",
        f"* print: {ver.get('print')}", f"* most 3D frames alive at once: {ver.get('maxLiveFrames')} (cap 3)", "",
        "## Controls (one instance per mode; real state changes, not just button presence)", "", "| Mode | fps here | Pause settle (ms) | Step (ms) | Passed | Failed |", "|---|---:|---:|---:|---|---|"]
for m in ver.get("motion", []):
    ok = [k for k, v in m["checks"].items() if v]; bad = [k for k, v in m["checks"].items() if not v]
    out.append(f"| {m['mode']} | {m.get('fpsHere')} | {m.get('settleMsAfterPause')} | {m.get('stepMs')} | {len(ok)} | {'; '.join(bad) or (m.get('error') or '—')} |")
out += ["", "## Failures", ""] + ([f"* **{f['where']}**: {f['what']}" for f in ver.get("failures", [])] or ["None."])
out += ["", "## Summary", "", f"```\n{json.dumps(ver.get('summary'), indent=1)}\n```"]
(D / "verification-summary.md").write_text("\n".join(out) + "\n", encoding="utf-8")
print("wrote ledger-summary.md, animation-map.md, chemistry-audit.md, verification-summary.md")
