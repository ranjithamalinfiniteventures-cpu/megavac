"""Build the single-file web-game upload, excluding development files."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
root = Path(__file__).resolve().parents[1]
out = root / 'release'
out.mkdir(exist_ok=True)
zip_path = out / 'megavac-crazygames.zip'
with ZipFile(zip_path, 'w', ZIP_DEFLATED) as archive:
    archive.write(root / 'prototype' / 'feel.html', 'index.html')
    for audio in ['music.m4a', 'music.mp3']:
        audio_file = root / 'prototype' / audio
        if audio_file.exists():
            archive.write(audio_file, audio)
print(f"{zip_path} ({zip_path.stat().st_size / (1024*1024):.2f} MB)")
