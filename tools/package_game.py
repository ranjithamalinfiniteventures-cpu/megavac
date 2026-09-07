"""Build the single-file web-game upload, excluding development files."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
root = Path(__file__).resolve().parents[1]
out = root / 'release'
out.mkdir(exist_ok=True)
with ZipFile(out / 'megavac-crazygames.zip', 'w', ZIP_DEFLATED) as archive:
    archive.write(root / 'prototype' / 'feel.html', 'index.html')
print(out / 'megavac-crazygames.zip')
