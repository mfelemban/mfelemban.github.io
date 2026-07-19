#!/usr/bin/env bash
# Add, commit, and push site changes to GitHub.
#
# Usage:
#     scripts/deploy.sh "commit message"
#     scripts/deploy.sh              # uses a default timestamped message

set -euo pipefail

cd "$(dirname "$0")/.."

if [[ -z "$(git status --porcelain)" ]]; then
    echo "Nothing to commit — working tree is clean."
    exit 0
fi

msg="${1:-Update site $(date '+%Y-%m-%d %H:%M')}"

git add -A
git status --short
git commit -m "$msg"
git push origin main

echo "Pushed to GitHub."
