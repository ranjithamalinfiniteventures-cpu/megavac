#!/usr/bin/env bash
# Builds spider-city/dist/spider-city.html: one self-contained file with three.js, the game
# code, styles and the Bebas Neue font (SIL Open Font License) inlined. No network needed to play.
# Building needs network once, to fetch three.js, esbuild and the font.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT

(cd "$WORK" && npm init -y >/dev/null && npm install --silent three@0.160.0 esbuild@0.20.2 >/dev/null)
curl -sS "https://fonts.gstatic.com/s/bebasneue/v16/JTUSjIg69CK48gW7PXoo9Wlhyw.woff2" -o "$WORK/bebas.woff2"

"$WORK/node_modules/.bin/esbuild" "$ROOT/spider-city/js/main.js" --bundle --format=esm --minify --target=es2020 \
  --outfile="$WORK/game.js" --log-level=warning \
  "--alias:three/addons=$WORK/node_modules/three/examples/jsm" \
  "--alias:three=$WORK/node_modules/three/build/three.module.js"

mkdir -p "$ROOT/spider-city/dist"
python3 - "$ROOT/spider-city/index.html" "$WORK/game.js" "$WORK/bebas.woff2" "$ROOT/spider-city/dist/spider-city.html" <<'PY'
import base64, re, sys
src, js_path, font_path, out = sys.argv[1:]
html = open(src).read()
js = open(js_path).read().replace('</script', '<\\/script')
font = base64.b64encode(open(font_path, 'rb').read()).decode()
# font: drop the Google Fonts links, embed the face
html = re.sub(r'<link rel="preconnect"[^>]*>\n?', '', html)
html = re.sub(r'<link rel="stylesheet" href="https://fonts.googleapis.com[^>]*>\n?', '', html)
html = html.replace('<style>', "<style>\n  @font-face { font-family: 'Bebas Neue'; font-weight: 400; font-display: swap; "
                    f"src: url(data:font/woff2;base64,{font}) format('woff2'); }}", 1)
# scripts: replace the import map + module entry with the bundled game, keep the error reporter first
start = html.index('<script type="importmap">')
tag = '<script type="module" src="js/main.js"></script>'
end = html.index(tag) + len(tag)
rest = html[end:]
err = rest[rest.index('<script>'):rest.index('</script>') + 9]
html = html[:start] + err + '\n<script type="module">\n' + js + '\n</script>\n' + rest.replace(err, '')
html = html.replace('<meta name="viewport" content="width=device-width, initial-scale=1">',
                    '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">')
for host in ('unpkg.com', 'fonts.googleapis', 'fonts.gstatic', 'jsdelivr', 'cdnjs'):
    assert host not in html, host
open(out, 'w').write(html)
print(f'wrote {out} ({len(html) // 1024} KB)')
PY
