#!/usr/bin/env bash
# Idempotent Cloud Agent setup: ensure pandoc (pinned to match the production
# Dockerfile) is installed, then render the static site.
set -euo pipefail

cd "$(dirname "$0")/.."

PANDOC_VERSION="3.5"

if ! command -v pandoc >/dev/null 2>&1 || ! pandoc --version | head -1 | grep -q "pandoc ${PANDOC_VERSION}"; then
	echo "Installing pandoc ${PANDOC_VERSION}..."
	tmp_deb="$(mktemp --suffix=.deb)"
	curl -fsSL -o "$tmp_deb" \
		"https://github.com/jgm/pandoc/releases/download/${PANDOC_VERSION}/pandoc-${PANDOC_VERSION}-1-amd64.deb"
	sudo dpkg -i "$tmp_deb"
	rm -f "$tmp_deb"
else
	echo "pandoc ${PANDOC_VERSION} already installed."
fi

pandoc --version | head -1

./scripts/build.sh
