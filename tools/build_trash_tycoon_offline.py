"""Build a single, fully offline HTML file for Trash Tycoon 3D.

Everything is inlined: three.js (converted from an ES module to a classic
script that sets window.THREE) and the Fredoka font as a data URI. The result
opens straight from disk (file://) with no network access.

Usage: python3 tools/build_trash_tycoon_offline.py
Output: trash-tycoon/dist/TrashTycoon3D.html
"""
import base64
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parent.parent / 'trash-tycoon'
OUT = ROOT / 'dist' / 'TrashTycoon3D.html'


def three_as_classic_script():
    src = (ROOT / 'three.module.min.js').read_text(encoding='utf-8')
    m = re.search(r'export\s*\{([^}]*)\}\s*;?\s*$', src)
    if not m or 'import ' in src[:200]:
        raise SystemExit('unexpected three.module.min.js layout')
    pairs = []
    for item in m.group(1).split(','):
        parts = item.strip().split(' as ')
        local, name = (parts[0], parts[-1])
        pairs.append(f'{name.strip()}:{local.strip()}')
    body = src[:m.start()] + 'window.THREE=Object.freeze({' + ','.join(pairs) + '});'
    if '</script' in body.lower():
        raise SystemExit('three.js source contains a closing script tag')
    return '(function(){' + body + '})();'


def font_face():
    data = base64.b64encode((ROOT / 'fonts' / 'Fredoka-latin.woff2').read_bytes()).decode()
    return ("<style>@font-face{font-family:'Fredoka';font-style:normal;font-weight:300 700;font-display:block;"
            f"src:url(data:font/woff2;base64,{data}) format('woff2')}}</style>\n")


def main():
    html = (ROOT / 'index.html').read_text(encoding='utf-8')
    # Google Fonts links -> embedded font
    html, n = re.subn(r'<link rel="preconnect"[^>]*>\n|<link rel="stylesheet" href="https://fonts\.googleapis\.com[^>]*>\n', '', html)
    if n != 3:
        raise SystemExit(f'expected 3 font links, found {n}')
    html = html.replace('<style>\n', font_face() + '<style>\n', 1)
    # three.js: importmap + ES import -> inline classic script + global
    importmap = '<script type="importmap">{"imports":{"three":"./three.module.min.js"}}</script>\n'
    if importmap not in html or "import * as THREE from 'three';" not in html:
        raise SystemExit('index.html layout changed; update this script')
    html = html.replace(importmap, '<script>' + three_as_classic_script() + '</script>\n')
    html = html.replace("import * as THREE from 'three';", 'const THREE = window.THREE;')
    for bad in ('https://', 'http://'):
        hits = [m.start() for m in re.finditer(re.escape(bad), html)]
        # links in comments/strings that are never fetched are fine; report them for review
        for h in hits:
            print('note: URL text at', h, html[h:h + 70].split('"')[0])
    OUT.parent.mkdir(exist_ok=True)
    OUT.write_text(html, encoding='utf-8')
    print(f'wrote {OUT} ({OUT.stat().st_size / 1024:.0f} KB)')


if __name__ == '__main__':
    main()
