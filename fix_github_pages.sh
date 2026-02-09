#!/bin/bash
# ============================================================================
#  🔧 FIX GITHUB PAGES PATHS
#  Run from your repo root:
#    chmod +x fix_github_pages.sh && ./fix_github_pages.sh
#    git add . && git commit -m "fix: use relative paths" && git push
# ============================================================================

echo "🔧 Fixing paths..."

if [ ! -d "docs" ]; then
  echo "❌ 'docs/' not found. Run from repo root."
  exit 1
fi

count=0

# For each HTML file, replace /system-design-mastery/ with correct relative path
find docs/ -name "*.html" -type f | sort | while read -r file; do
  # Get depth relative to docs/
  rel="${file#docs/}"
  depth=$(echo "$rel" | tr -cd '/' | wc -c)
  
  # Build prefix: depth 0 = "", depth 1 = "../", depth 2 = "../../"
  prefix=""
  for ((i=0; i<depth; i++)); do
    prefix="../${prefix}"
  done
  
  # Single replacement: /system-design-mastery/ → relative prefix
  sed -i "s|/system-design-mastery/|${prefix}|g" "$file"
  
  echo "  ✅ ${file} (prefix: '${prefix:-root}')"
done

echo ""
echo "🎉 Done! Now run:"
echo "  git add . && git commit -m 'fix: relative paths' && git push"