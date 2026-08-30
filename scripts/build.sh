#!/usr/bin/env bash
# Build the static site the same way the production Dockerfile does:
# render README.md (GitHub-flavored Markdown) into a standalone, self-contained
# index.html via pandoc. Kept in sync with ./Dockerfile.
set -euo pipefail

cd "$(dirname "$0")/.."

FILE="${FILE:-README.md}"
UMAMI_SRC="${UMAMI_SRC:-https://umami.kuhree.com/script.js}"
UMAMI_ID="${UMAMI_ID:-4d955c4c-7bc5-48b6-98ad-1a87efee9505}"
TITLE="${TITLE:-Khari (kuhree) Johnson}"
OUTPUT="${OUTPUT:-index.html}"

WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT

cat > "$WORK/style.html" <<EOF
<style> body { max-width: 80ch; margin: 0 auto; } </style>
EOF

cat > "$WORK/scripts.html" <<EOF
<script defer src="${UMAMI_SRC}" data-website-id="${UMAMI_ID}"></script>
EOF

pandoc \
	--standalone \
	--metadata title="${TITLE}" \
	--include-in-header="$WORK/scripts.html" \
	--include-in-header="$WORK/style.html" \
	--css="https://raw.githubusercontent.com/sindresorhus/github-markdown-css/refs/heads/main/github-markdown.css" \
	--embed-resources="true" \
	--from="gfm" \
	--to="html" \
	--output="${OUTPUT}" \
	"${FILE}"

echo "Built ${OUTPUT} from ${FILE} ($(wc -c < "${OUTPUT}") bytes)"
