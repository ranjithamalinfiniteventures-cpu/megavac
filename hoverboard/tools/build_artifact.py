#!/usr/bin/env python3
"""Stage HOVERLINE for the claude.ai artifact (npm run build first).

Artifact hosting only serves web media types, so binary .glb/.hdr assets ship as
base64 .txt and a small fetch shim in the page decodes them. The page is index.html
without doctype/head/body wrappers and without the CrazyGames SDK tag.
Output: hoverboard/.artifact/ (index.html + files to pass as the artifact's `files`).
"""
import base64, pathlib, re, shutil

root = pathlib.Path(__file__).resolve().parent.parent
out = root / '.artifact'
shutil.rmtree(out, ignore_errors=True); out.mkdir()

html = (root / 'index.html').read_text()
head = re.search(r'<head>(.*?)</head>', html, re.S).group(1)
body = re.search(r'<body>(.*?)</body>', html, re.S).group(1)
head = re.sub(r'<meta[^>]*>\s*', '', head)
body = re.sub(r'<script src="https://sdk\.crazygames\.com[^>]*></script>\s*', '', body)
shim = """<script>
  // Artifact hosting serves only web media types, so the HDR sky and GLB rider ship as base64 text.
  (function () {
    const orig = window.fetch.bind(window);
    window.fetch = async function (input, init) {
      const url = typeof input === 'string' ? input : input.url;
      if (/\\.(hdr|glb)(\\?|$)/.test(url)) {
        const r = await orig(url.replace(/(\\.(hdr|glb))/, '$1.txt'), init);
        const b = atob((await r.text()).trim());
        const u = new Uint8Array(b.length);
        for (let i = 0; i < b.length; i++) u[i] = b.charCodeAt(i);
        return new Response(u.buffer, { status: 200, headers: { 'Content-Type': 'application/octet-stream' } });
      }
      return orig(input, init);
    };
  })();
</script>
"""
body = body.replace('<script type="module" src="dist/game.js"></script>', shim + '<script type="module" src="dist/game.js"></script>')
(out / 'index.html').write_text(head.strip() + '\n' + body.strip() + '\n')

files = {'dist/game.js': root / 'dist/game.js'}
for p in sorted((root / 'assets').rglob('*')):
    if p.is_dir(): continue
    rel = p.relative_to(root).as_posix()
    if p.suffix in ('.glb', '.hdr'):
        dst = out / (rel + '.txt'); dst.parent.mkdir(parents=True, exist_ok=True)
        dst.write_text(base64.b64encode(p.read_bytes()).decode())
        files[rel + '.txt'] = dst
    else:
        files[rel] = p
for k, v in files.items():
    dst = out / k
    if dst != v: dst.parent.mkdir(parents=True, exist_ok=True); shutil.copyfile(v, dst)
print('\n'.join(files))
