#!/usr/bin/env python3
"""Builds tycoon/mega-factory-tycoon.html: the whole game in one file that
needs no network. three.js is bundled into the page script and the Fredoka
font is embedded, so the file plays when opened straight from disk.

Usage: python3 tools/build_tycoon_offline.py
Needs node and npm; three and esbuild are installed into tools/.tycoon-build.
"""
import base64
import pathlib
import re
import subprocess

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / 'tycoon' / 'index.html'
OUT = ROOT / 'tycoon' / 'mega-factory-tycoon.html'
FONT = ROOT / 'tycoon' / 'fonts' / 'fredoka-latin.woff2'
WORK = ROOT / 'tools' / '.tycoon-build'


def install():
    WORK.mkdir(exist_ok=True)
    if not (WORK / 'node_modules' / 'three').exists() or not (WORK / 'node_modules' / '.bin' / 'esbuild').exists():
        (WORK / 'package.json').write_text('{"private": true}\n')
        subprocess.run(['npm', 'install', '--silent', '--no-audit', '--no-fund', 'three@0.160.0', 'esbuild@0.20.2'], cwd=WORK, check=True)


def main():
    install()
    page = SRC.read_text()

    module = re.search(r'<script type="module">\n(.*?)</script>', page, re.S)
    (WORK / 'game.js').write_text(module.group(1))
    subprocess.run(['node_modules/.bin/esbuild', 'game.js', '--bundle', '--minify', '--format=iife', '--target=es2020',
                    '--outfile=game.bundle.js', '--log-level=warning'], cwd=WORK, check=True)
    bundle = (WORK / 'game.bundle.js').read_text().replace('</script', '<\\/script')
    page = page[:module.start()] + '<script>\n' + bundle + '</script>' + page[module.end():]
    page = re.sub(r'<script type="importmap">.*?</script>\n', '', page)

    font = base64.b64encode(FONT.read_bytes()).decode()
    face = ("<style>@font-face{font-family:'Fredoka';font-style:normal;font-weight:500 700;font-display:block;"
            f"src:url(data:font/woff2;base64,{font}) format('woff2')}}</style>\n")
    page = re.sub(r'<link rel="preconnect"[^>]*>\n<link href="https://fonts\.googleapis\.com[^>]*>\n', lambda _: face, page)

    for host in ('unpkg.com', 'googleapis', 'gstatic', 'jsdelivr', 'cdnjs'):
        assert host not in page, f'{host} is still referenced'
    OUT.write_text(page)
    print(f'{OUT.relative_to(ROOT)}: {len(page) // 1024} KB')


if __name__ == '__main__':
    main()
