#!/bin/bash
# ============================================================================
#  🔧 FIX ALL PATHS — Run from your repo root (where README.md is)
#
#  chmod +x fix_paths.sh
#  ./fix_paths.sh
#  git add . && git commit -m "fix: CSS and link paths" && git push
# ============================================================================

echo "🔧 Fixing all paths in docs/..."

if [ ! -d "docs" ]; then
  echo "❌ 'docs/' folder not found. Make sure you're in the repo root."
  exit 1
fi

find docs/ -name "*.html" -type f | sort | while read -r file; do
  # Get depth relative to docs/
  rel="${file#docs/}"
  depth=$(echo "$rel" | tr -cd '/' | wc -c)

  # Build prefix: depth 0 = "", depth 1 = "../", depth 2 = "../../"
  prefix=""
  for ((i=0; i<depth; i++)); do
    prefix="../${prefix}"
  done

  # Replace ALL occurrences of /system-design-mastery/ with relative prefix
  sed -i "s|/system-design-mastery/|${prefix}|g" "$file"

  echo "  ✅ ${file} → prefix: '${prefix:-.}'"
done

echo ""
echo "🎉 Done! Now run:"
echo "  git add . && git commit -m 'fix: relative paths for CSS and links' && git push"
echo ""
echo "Then wait 1-2 min and hard refresh (Ctrl+Shift+R) your site:"
echo "  https://ashish-bisht.github.io/all_about_system_design/"