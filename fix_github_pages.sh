#!/bin/bash
# ============================================================================
#  🔧 FIX ALL PATHS (macOS + Linux compatible)
#  Run from your repo root (where README.md is):
#
#  chmod +x fix_paths_mac.sh
#  ./fix_paths_mac.sh
#  git add . && git commit -m "fix: CSS and link paths" && git push
# ============================================================================

echo "🔧 Fixing all paths in docs/..."

if [ ! -d "docs" ]; then
  echo "❌ 'docs/' folder not found. Run from repo root."
  exit 1
fi

# Detect OS for sed compatibility
if [[ "$OSTYPE" == "darwin"* ]]; then
  SED_CMD="sed -i ''"
  echo "🍎 Detected macOS — using BSD sed"
else
  SED_CMD="sed -i"
  echo "🐧 Detected Linux — using GNU sed"
fi

count=0

find docs/ -name "*.html" -type f | sort | while read -r file; do
  # Get depth relative to docs/
  rel="${file#docs/}"
  depth=$(echo "$rel" | tr -cd '/' | wc -c)

  # Build prefix: depth 0 = "", depth 1 = "../", depth 2 = "../../"
  prefix=""
  for ((i=0; i<depth; i++)); do
    prefix="../${prefix}"
  done

  # macOS sed needs -i '' (with space), Linux needs just -i
  if [[ "$OSTYPE" == "darwin"* ]]; then
    sed -i '' "s|/system-design-mastery/|${prefix}|g" "$file"
  else
    sed -i "s|/system-design-mastery/|${prefix}|g" "$file"
  fi

  count=$((count + 1))
  echo "  ✅ ${file} → prefix: '${prefix:-.}'"
done

echo ""
echo "🎉 Fixed all HTML files!"
echo ""
echo "Now run:"
echo "  git add . && git commit -m 'fix: relative paths' && git push"
echo ""
echo "Then wait 1-2 min and hard refresh (Ctrl+Shift+R):"
echo "  https://ashish-bisht.github.io/all_about_system_design/"