#!/usr/bin/env python3
"""
Chemistry chapter audit pipeline.

Works through the chapter queue in docs/chemistry-chapters-audit/MASTER_AUDIT.md,
and for each pending chapter shells out to `claude -p` (headless Claude Code) to:
  1. locate the chapter's source file (DOCX/PDF/ZIP under ~/Downloads or ~/Documents),
  2. audit the live /notes or /learn route against it section-by-section,
  3. fix real gaps only (missing content, factual errors, branding leaks, raw LaTeX,
     duplicate sections) without touching access gates or protected corrections,
  4. update the MASTER_AUDIT.md status row for that chapter,
  5. commit on a fresh branch and open a PR against main via `gh pr create`.

Nothing is merged or deployed automatically -- PRs sit for manual review, matching
the repo's existing feature-branch + PR workflow. Safe to re-run: chapters already
marked Done / Audited, clean in MASTER_AUDIT.md are skipped.

Usage:
    python3 scripts/audit_pipeline.py                 # dry run: show the queue, do nothing
    python3 scripts/audit_pipeline.py --run            # actually process the queue
    python3 scripts/audit_pipeline.py --run --limit 1  # just the next chapter
    python3 scripts/audit_pipeline.py --run --chapters "Chemical Kinetics,Gaseous State"
    python3 scripts/audit_pipeline.py --run --max-budget-usd 3 --model sonnet
"""

import argparse
import datetime
import json
import re
import subprocess
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[1]
MASTER_AUDIT_PATH = REPO_ROOT / "docs" / "chemistry-chapters-audit" / "MASTER_AUDIT.md"
LOG_DIR = REPO_ROOT / "scripts" / "audit-logs"

# A status counts as "pending" only if it explicitly signals unfinished work.
# Everything else (Done, Audited clean, Fixed, Gaps closed, Gap fixed, ...) is
# treated as already resolved for this chapter.
PENDING_KEYWORDS = ("partial", "not started", "not yet", "todo", "pending")

ROW_RE = re.compile(r"^\|\s*\d+\s*\|\s*(?P<name>.+?)\s*\|\s*\*\*(?P<status>.+?)\*\*\s*\|")


def sh(cmd, cwd=REPO_ROOT, check=True, capture=False):
    result = subprocess.run(
        cmd, cwd=cwd, shell=isinstance(cmd, str),
        text=True,
        capture_output=capture,
    )
    if check and result.returncode != 0:
        raise RuntimeError(f"command failed ({result.returncode}): {cmd}")
    return result


def slugify(name):
    return re.sub(r"-+", "-", re.sub(r"[^a-z0-9]+", "-", name.lower())).strip("-")


def parse_queue():
    text = MASTER_AUDIT_PATH.read_text()
    chapters = []
    for line in text.splitlines():
        m = ROW_RE.match(line)
        if not m:
            continue
        name, status = m.group("name"), m.group("status")
        status_lc = status.lower()
        pending = any(k in status_lc for k in PENDING_KEYWORDS)
        chapters.append({"name": name, "status": status, "pending": pending})
    return chapters


def ensure_clean_tree():
    result = sh(["git", "status", "--porcelain"], capture=True)
    if result.stdout.strip():
        raise RuntimeError(
            "Working tree is not clean. Commit or stash changes before running "
            "the audit pipeline (it needs to switch branches safely)."
        )


def build_prompt(chapter_name):
    return f"""You are running one step of an unattended chemistry content audit.
Follow AI_START_HERE.md and AGENTS.md ground rules exactly -- do not weaken access
gates, do not delete or shorten chemistry content, do not regress any protected
correction listed under AI_HANDOFF/.

Chapter to audit: "{chapter_name}"

1. Locate this chapter's founder-supplied source file (DOCX/PDF/ZIP) under
   ~/Downloads or ~/Documents, per the conventions described in
   docs/chemistry-chapters-audit/SOURCE_COVERAGE.md.
2. Find the live route(s) for this chapter (check lib/notes/chapterCatalog.ts and
   app/notes/ or app/learn/jee-advanced/ for the matching page).
3. Walk the live content section-by-section against the source and record, per
   source statement: preserved / corrected / expanded / duplicated / missing /
   unclear.
4. Fix only real, verified gaps: missing source content, factual/scientific
   errors, branding/watermark leaks, raw LaTeX rendering as visible text,
   duplicated sections, orphaned assets. Do not invent content the source doesn't
   support. Do not touch anything outside this chapter's files.
5. Update the status row for "{chapter_name}" in
   docs/chemistry-chapters-audit/MASTER_AUDIT.md with what you actually did,
   following the existing table's format and level of detail.
6. Run `npx tsc --noEmit` and `npm run lint` scoped to files you touched; fix any
   errors you introduced.
7. Commit your changes with a clear message.
8. Push the current branch and open a PR into main with `gh pr create` (fill in a
   real title and body summarizing findings and fixes). Do NOT merge it.
9. As your final line of output, print exactly:
   AUDIT_RESULT: {{"chapter": "{chapter_name}", "pr_url": "<url or null>", "summary": "<one sentence>"}}
   with valid JSON on that one line.

If the source file cannot be found, or the chapter turns out to need no changes,
skip step 7-8, do not open a PR, and still print the AUDIT_RESULT line (pr_url:
null) explaining why.
"""


def audit_chapter(chapter_name, args):
    date = datetime.date.today().isoformat()
    slug = slugify(chapter_name)
    branch = f"audit/{slug}-{date}"
    log_path = LOG_DIR / f"{slug}-{date}.log"
    LOG_DIR.mkdir(parents=True, exist_ok=True)

    print(f"\n=== {chapter_name} -> branch {branch} ===")

    sh(["git", "checkout", "main"])
    sh(["git", "pull", "--ff-only"])
    sh(["git", "checkout", "-b", branch])

    prompt = build_prompt(chapter_name)
    cmd = [
        "claude", "-p", prompt,
        "--model", args.model,
        "--permission-mode", "acceptEdits",
        "--allowedTools",
        "Read", "Edit", "Write", "Grep", "Glob", "TodoWrite",
        "Bash(git *)", "Bash(gh *)", "Bash(npm run lint*)", "Bash(npx tsc*)",
        "--max-budget-usd", str(args.max_budget_usd),
        "--output-format", "text",
    ]

    with open(log_path, "w") as log_file:
        proc = subprocess.run(cmd, cwd=REPO_ROOT, stdout=subprocess.PIPE,
                               stderr=subprocess.STDOUT, text=True)
        log_file.write(proc.stdout)

    result = {"chapter": chapter_name, "branch": branch, "log": str(log_path),
              "pr_url": None, "ok": proc.returncode == 0}

    match = re.search(r"AUDIT_RESULT:\s*(\{.*\})", proc.stdout)
    if match:
        try:
            parsed = json.loads(match.group(1))
            result["pr_url"] = parsed.get("pr_url")
            result["summary"] = parsed.get("summary")
        except json.JSONDecodeError:
            pass

    leftover = sh(["git", "status", "--porcelain"], capture=True).stdout.strip()
    if leftover:
        sh(["git", "stash", "push", "-u", "-m", f"audit-pipeline leftover: {chapter_name}"])
        result["note"] = "uncommitted changes were stashed for manual review"

    sh(["git", "checkout", "main"])
    return result


def notify(title, message):
    try:
        subprocess.run(
            ["osascript", "-e", f'display notification "{message}" with title "{title}"'],
            check=False,
        )
    except FileNotFoundError:
        pass


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--run", action="store_true", help="actually process the queue (default is dry-run)")
    parser.add_argument("--chapters", help="comma-separated chapter names to process, overriding the parsed queue")
    parser.add_argument("--limit", type=int, default=1, help="max chapters to process this run (default 1)")
    parser.add_argument("--model", default="sonnet", help="model alias/name to pass to claude (default sonnet)")
    parser.add_argument("--max-budget-usd", type=float, default=5.0, help="per-chapter spend cap (default 5.0)")
    args = parser.parse_args()

    all_chapters = parse_queue()

    if args.chapters:
        wanted = {c.strip().lower() for c in args.chapters.split(",")}
        queue = [c for c in all_chapters if c["name"].lower() in wanted]
    else:
        queue = [c for c in all_chapters if c["pending"]]

    queue = queue[: args.limit]

    print("Pending chapters (from MASTER_AUDIT.md):")
    for c in all_chapters:
        mark = "PENDING" if c["pending"] else "done"
        print(f"  [{mark:7}] {c['name']} -- {c['status']}")

    if not queue:
        print("\nNothing to do.")
        return

    print(f"\nThis run would process {len(queue)} chapter(s): {', '.join(c['name'] for c in queue)}")

    if not args.run:
        print("\nDry run only -- pass --run to actually execute. Each chapter opens its own PR for you to review.")
        return

    ensure_clean_tree()

    results = []
    for chapter in queue:
        try:
            results.append(audit_chapter(chapter["name"], args))
        except Exception as exc:
            results.append({"chapter": chapter["name"], "ok": False, "error": str(exc)})
            sh(["git", "checkout", "main"], check=False)

    summary_path = LOG_DIR / f"run-{datetime.datetime.now():%Y%m%d-%H%M%S}.json"
    summary_path.write_text(json.dumps(results, indent=2))

    print("\n=== Run summary ===")
    for r in results:
        pr = r.get("pr_url") or "(no PR)"
        print(f"  {r['chapter']}: {'ok' if r.get('ok') else 'FAILED'} -- {pr}")
    print(f"Full summary: {summary_path}")

    notify("Chemistry audit pipeline", f"Processed {len(results)} chapter(s) -- check terminal for PR links")


if __name__ == "__main__":
    main()
