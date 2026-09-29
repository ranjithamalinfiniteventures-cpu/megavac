#!/usr/bin/env python3
"""Pack the Quaternius CC0 characters and animations into compact GLBs for HOVERLINE.

Inputs (unzipped from quaternius.itch.io, CC0):
  UBC = "Universal Base Characters[Standard]"   (Superhero_Male/Female_FullBody.gltf + textures)
  UAL = "Universal Animation Library[Standard]" (UAL1_Standard.glb)
Outputs in hoverboard/assets/rider/:
  body_male.glb, body_female.glb  body + eyes + brows, skin (dark) and normal maps as 1024 JPEG
  skin_male_light.jpg, skin_female_light.jpg  alternate skin tone
  anims.glb  only the clips the rider uses, no meshes
Usage: python3 tools/build_rider_assets.py <UBC dir> <UAL dir>
"""
import io, json, pathlib, struct, sys
from PIL import Image

OUT = pathlib.Path(__file__).resolve().parent.parent / 'assets' / 'rider'
KEEP_ATTR = {'POSITION', 'NORMAL', 'TEXCOORD_0', 'JOINTS_0', 'WEIGHTS_0'}
KEEP_CLIPS = {'Idle_Loop', 'Crouch_Idle_Loop'}


def jpeg(path, size=1024, q=86):
    im = Image.open(path).convert('RGB')
    if im.width > size: im = im.resize((size, size), Image.LANCZOS)
    b = io.BytesIO(); im.save(b, 'JPEG', quality=q, optimize=True); return b.getvalue()


def repack(g, bins, images):
    """Keep only what meshes/skins/animations reference; embed images; return GLB bytes."""
    used_acc = set()
    for m in g.get('meshes', []):
        for p in m['primitives']:
            p['attributes'] = {k: v for k, v in p['attributes'].items() if k in KEEP_ATTR}
            used_acc.update(p['attributes'].values())
            if 'indices' in p: used_acc.add(p['indices'])
            p.pop('targets', None)
    for s in g.get('skins', []):
        if 'inverseBindMatrices' in s: used_acc.add(s['inverseBindMatrices'])
    for a in g.get('animations', []):
        for smp in a['samplers']: used_acc.update([smp['input'], smp['output']])
    out, views, acc_map, accs = bytearray(), [], {}, []
    for i in sorted(used_acc):
        a = dict(g['accessors'][i]); bv = g['bufferViews'][a['bufferView']]
        data = bins[bv.get('buffer', 0)][bv.get('byteOffset', 0): bv.get('byteOffset', 0) + bv['byteLength']]
        while len(out) % 4: out.append(0)
        nv = {'buffer': 0, 'byteOffset': len(out), 'byteLength': len(data)}
        if 'byteStride' in bv: nv['byteStride'] = bv['byteStride']
        if 'target' in bv: nv['target'] = bv['target']
        out += data; views.append(nv); a['bufferView'] = len(views) - 1
        acc_map[i] = len(accs); accs.append(a)
    for m in g.get('meshes', []):
        for p in m['primitives']:
            p['attributes'] = {k: acc_map[v] for k, v in p['attributes'].items()}
            if 'indices' in p: p['indices'] = acc_map[p['indices']]
    for s in g.get('skins', []):
        if 'inverseBindMatrices' in s: s['inverseBindMatrices'] = acc_map[s['inverseBindMatrices']]
    for a in g.get('animations', []):
        for smp in a['samplers']: smp['input'], smp['output'] = acc_map[smp['input']], acc_map[smp['output']]
    new_images = []
    for img in images:
        while len(out) % 4: out.append(0)
        views.append({'buffer': 0, 'byteOffset': len(out), 'byteLength': len(img)}); out += img
        new_images.append({'bufferView': len(views) - 1, 'mimeType': 'image/jpeg'})
    g['accessors'], g['bufferViews'] = accs, views
    if new_images or 'images' in g: g['images'] = new_images
    while len(out) % 4: out.append(0)
    g['buffers'] = [{'byteLength': len(out)}]
    js = json.dumps(g, separators=(',', ':')).encode()
    while len(js) % 4: js += b' '
    return (struct.pack('<III', 0x46546C67, 2, 12 + 8 + len(js) + 8 + len(out)) +
            struct.pack('<II', len(js), 0x4E4F534A) + js + struct.pack('<II', len(out), 0x004E4942) + bytes(out))


def body(ubc, sex):
    base = ubc / 'Base Characters'
    g = json.loads((base / 'Godot - UE' / f'Superhero_{sex}_FullBody.gltf').read_text())
    binp = base / 'Godot - UE' / g['buffers'][0]['uri']
    tex = base / 'Textures'
    skin = {'Male': 'T_Superhero_Male_Dark.png', 'Female': 'T_Superhero_Female_Dark_BaseColor.png'}[sex]
    files = [skin, f'T_Superhero_{sex}_Normal.png', 'T_Eye_Brown.png', {'Male': 'T_Hair_1_BaseColor.png', 'Female': 'T_Hair_2_BaseColor.png'}[sex]]
    imgs = [jpeg(tex / files[0]), jpeg(tex / 'Normals Unity - Godot' / files[1], q=90), jpeg(tex / files[2], 256), jpeg(tex / files[3], 512)]
    # simple materials: body (skin + normal), eyes, brows; the game restyles the body anyway
    g['textures'] = [{'source': i} for i in range(4)]
    g.pop('samplers', None)
    mats = {'body': {'name': 'body', 'pbrMetallicRoughness': {'baseColorTexture': {'index': 0}, 'metallicFactor': 0, 'roughnessFactor': 0.6}, 'normalTexture': {'index': 1}},
            'eyes': {'name': 'eyes', 'pbrMetallicRoughness': {'baseColorTexture': {'index': 2}, 'metallicFactor': 0, 'roughnessFactor': 0.2}},
            'hair': {'name': 'brows', 'pbrMetallicRoughness': {'baseColorTexture': {'index': 3}, 'metallicFactor': 0, 'roughnessFactor': 0.8}, 'alphaMode': 'MASK', 'alphaCutoff': 0.4}}
    old = g['materials']; g['materials'] = [mats['body'], mats['eyes'], mats['hair']]
    for m in g['meshes']:
        for p in m['primitives']:
            n = old[p['material']]['name']
            p['material'] = 1 if 'Eye' in n else 2 if 'Hair' in n else 0
    (OUT / f'body_{sex.lower()}.glb').write_bytes(repack(g, [binp.read_bytes()], imgs))
    light = {'Male': 'T_Superhero_Male_Ligh.png', 'Female': 'T_Superhero_Female_Light_BaseColor.png'}[sex]
    (OUT / f'skin_{sex.lower()}_light.jpg').write_bytes(jpeg(tex / light))


def anims(ual):
    b = (ual / 'Unreal-Godot' / 'UAL1_Standard.glb').read_bytes()
    jl = struct.unpack('<I', b[12:16])[0]; g = json.loads(b[20:20 + jl])
    bl = struct.unpack('<I', b[20 + jl:24 + jl])[0]; binb = b[28 + jl: 28 + jl + bl]
    g['animations'] = [a for a in g['animations'] if a['name'] in KEEP_CLIPS]
    for n in g['nodes']: n.pop('mesh', None); n.pop('skin', None)
    for k in ('meshes', 'skins', 'materials', 'textures', 'images', 'samplers'): g.pop(k, None)
    (OUT / 'anims.glb').write_bytes(repack(g, [binb], []))


if __name__ == '__main__':
    ubc, ual = pathlib.Path(sys.argv[1]), pathlib.Path(sys.argv[2])
    OUT.mkdir(parents=True, exist_ok=True)
    body(ubc, 'Male'); body(ubc, 'Female'); anims(ual)
    for f in sorted(OUT.iterdir()): print(f.name, f.stat().st_size // 1024, 'KB')
