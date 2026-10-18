#!/bin/sh
# Bundles game.js + three.js into a single self-contained index.html (no network needed).
# Needs: npm i three@0.160.0 esbuild@0.20.2 (NODE_MODULES points at that install)
set -e
cd "$(dirname "$0")"
NM=${NODE_MODULES:-node_modules}
NODE_PATH=$NM $NM/.bin/esbuild game.js --bundle --minify --format=iife --log-level=warning --outfile=.game.bundle.js
python3 -c "import sys;t=open('template.html').read();b=open('.game.bundle.js').read().replace('</script','<\\\\/script');open('index.html','w').write(t.replace('/*__GAME__*/',b))"
rm .game.bundle.js
