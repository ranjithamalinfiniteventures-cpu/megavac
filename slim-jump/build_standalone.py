#!/usr/bin/env python3
"""Build slim-jump.html: index.html with Three.js inlined, so the game runs offline from one file.

Usage: python3 slim-jump/build_standalone.py [path/to/three.min.js]
Without a path, three.min.js r158 is downloaded from jsDelivr.
"""
import pathlib
import sys
import urllib.request

HERE = pathlib.Path(__file__).resolve().parent
THREE_URL = "https://cdn.jsdelivr.net/npm/three@0.158.0/build/three.min.js"
TAG = f'<script src="{THREE_URL}"></script>'

if len(sys.argv) > 1:
    three = pathlib.Path(sys.argv[1]).read_text(encoding="utf-8")
else:
    with urllib.request.urlopen(THREE_URL) as r:
        three = r.read().decode("utf-8")

# silence the r150+ deprecation warning; it is the first operand of a comma
# expression, so replace it with a no-op instead of deleting it. Keeps the license header.
first, rest = three.split("\n", 1)
if first.startswith("console.warn(") and first.endswith("),"):
    three = "void 0,\n" + rest
if "</script" in three.lower():
    sys.exit("three.min.js contains a closing script tag; cannot inline safely")

page = (HERE / "index.html").read_text(encoding="utf-8")
if page.count(TAG) != 1:
    sys.exit("expected exactly one Three.js script tag in index.html")
out = page.replace(TAG, "<script>\n" + three + "\n</script>")
# the page's own code must not reach the network (fonts, scripts, images)
if any(k in page.replace(TAG, "") for k in ("http://", "https://", "//fonts.", "@import")):
    sys.exit("index.html still references an online resource")
(HERE / "slim-jump.html").write_text(out, encoding="utf-8")
print(f"wrote {HERE / 'slim-jump.html'} ({len(out.encode()) // 1024} KB)")
