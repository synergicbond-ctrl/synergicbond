#!/bin/bash
# Run on your Mac:  bash ~/Downloads/organize_html_files.sh          (dry run: shows what it would do)
#                   bash ~/Downloads/organize_html_files.sh --go     (does it)
# Puts the project HTML/PDF/zip files into  ~/Downloads/HTML FILES  and moves byte-identical duplicates
# into  HTML FILES/_duplicates  (nothing is permanently deleted; delete that folder yourself when happy).
set -u
GO=0; [ "${1:-}" = "--go" ] && GO=1
SRC="$HOME/Downloads"
DEST="$SRC/HTML FILES"
run() { if [ $GO -eq 1 ]; then "$@"; else echo "[dry-run] $*"; fi; }

echo "Source: $SRC"; echo "Destination: $DEST"
run mkdir -p "$DEST" "$DEST/_duplicates" "$DEST/_old_versions"

# 1) unpack the zips you downloaded from the chat (flat, no sub-folders)
for z in "$SRC"/HTML_FILES_last2months.zip "$SRC"/HTML_FILES_all.zip; do
  [ -f "$z" ] && { echo "Unpacking $z"; run unzip -oj -q "$z" -d "$DEST"; }
done

# 2) move the project files that are loose in Downloads
for f in "$SRC"/REACTION_INTERMEDIATES_*.html "$SRC"/REACTION_INTERMEDIATES_*.pdf \
         "$SRC"/REACTION_INTERMEDIATES_*.docx "$SRC"/reaction_intermediates_sources.zip \
         "$SRC"/solid-state-offline.html "$SRC"/Solid-State-Textbook-Offline.pdf; do
  [ -f "$f" ] && { echo "Move: $(basename "$f")"; run mv -n "$f" "$DEST/"; }
done
# older work-in-progress version of the carbocation book: keep, but out of the way
for f in "$SRC"/CARBOCATION_ADVANCED_MASTER_WIP_offline.html; do
  [ -f "$f" ] && { echo "Old version -> _old_versions: $(basename "$f")"; run mv -n "$f" "$DEST/_old_versions/"; }
done

# 3) duplicates inside HTML FILES (same content = same checksum): keep the first, move the rest
if [ -d "$DEST" ]; then
  tmp=$(mktemp)
  find "$DEST" -maxdepth 1 -type f ! -name ".DS_Store" -exec shasum {} + 2>/dev/null | sort > "$tmp"
  prev=""
  while read -r sum path; do
    path="${path# }"
    if [ "$sum" = "$prev" ]; then echo "Duplicate -> _duplicates: $(basename "$path")"; run mv -n "$path" "$DEST/_duplicates/"; fi
    prev="$sum"
  done < "$tmp"
  rm -f "$tmp"
fi
[ $GO -eq 1 ] && echo "Done. Check: $DEST" || echo "Dry run only. Run again with --go to apply."
