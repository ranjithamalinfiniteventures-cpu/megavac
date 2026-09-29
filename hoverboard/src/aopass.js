// Screen-space ambient occlusion from the depth buffer alone (no extra scene render).
// AO is traced at half resolution, then a depth-aware blur upsamples it while it is
// applied, so creases, tree bases, board/road contact and tunnel mouths darken softly
// without the grain a single noisy pass leaves behind.
import * as THREE from 'three';
import { Pass, FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js';

const VERT = `varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }`;
const VIEWPOS = `
  uniform sampler2D tDepth; uniform mat4 uInvProj;
  vec3 viewPos(vec2 uv){ float d = texture2D(tDepth, uv).x; vec4 v = uInvProj * vec4(uv * 2. - 1., d * 2. - 1., 1.); return v.xyz / v.w; }`;

export class AOPass extends Pass {
  constructor(camera, { radius = 0.9, strength = 0.8, maxDist = 90 } = {}) {
    super();
    this.camera = camera;
    this.aoRT = new THREE.WebGLRenderTarget(1, 1, { type: THREE.UnsignedByteType, format: THREE.RGBAFormat, depthBuffer: false });
    this.aoMat = new THREE.ShaderMaterial({
      uniforms: { tDepth: { value: null }, uProj: { value: new THREE.Matrix4() }, uInvProj: { value: new THREE.Matrix4() }, uRadius: { value: radius }, uMax: { value: maxDist }, uTexel: { value: new THREE.Vector2() } },
      vertexShader: VERT,
      fragmentShader: VIEWPOS + `
        uniform mat4 uProj; uniform float uRadius, uMax; uniform vec2 uTexel; varying vec2 vUv;
        void main(){
          float d = texture2D(tDepth, vUv).x;
          if (d >= 0.99999) { gl_FragColor = vec4(1.); return; }
          vec3 P = viewPos(vUv);
          if (-P.z > uMax) { gl_FragColor = vec4(1.); return; }
          // normal from neighbouring depths (pick the smaller step on each axis to respect edges)
          vec3 px = viewPos(vUv + vec2(uTexel.x, 0.)) - P, nx = P - viewPos(vUv - vec2(uTexel.x, 0.));
          vec3 py = viewPos(vUv + vec2(0., uTexel.y)) - P, ny = P - viewPos(vUv - vec2(0., uTexel.y));
          vec3 N = normalize(cross(abs(px.z) < abs(nx.z) ? px : nx, abs(py.z) < abs(ny.z) ? py : ny));
          // Alchemy / SAO estimator: occluders count by how far they rise above the surface,
          // so flat ground at grazing angles contributes nothing (no banding)
          float ign = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
          float rad = uRadius * (1.0 + (-P.z) * 0.02), occ = 0.0;
          vec2 rUV = vec2(uProj[0][0], uProj[1][1]) * 0.5 * rad / -P.z;
          const int NS = 12;
          for (int i = 0; i < NS; i++) {
            float fi = (float(i) + 0.5) / float(NS);
            float a = float(i) * 2.39996 + ign * 6.2832;
            vec2 suv = vUv + vec2(cos(a), sin(a)) * rUV * sqrt(fract(fi + ign * 0.618));
            vec3 v = viewPos(suv) - P;
            float vv = dot(v, v);
            occ += max(0.0, dot(v, N) - 0.015 * (-P.z) * 0.1) / (vv + 0.02) * max(0.0, 1.0 - vv / (rad * rad));
          }
          float ao = clamp(1.0 - 1.6 * occ / float(NS), 0.0, 1.0);
          ao = mix(ao, 1.0, smoothstep(uMax * 0.4, uMax, -P.z));
          gl_FragColor = vec4(ao, ao, ao, 1.);
        }`,
      depthTest: false, depthWrite: false,
    });
    this.compMat = new THREE.ShaderMaterial({
      uniforms: { tDiffuse: { value: null }, tAO: { value: null }, tDepth: { value: null }, uInvProj: { value: new THREE.Matrix4() }, uTexel: { value: new THREE.Vector2() }, uStrength: { value: strength } },
      vertexShader: VERT,
      fragmentShader: VIEWPOS + `
        uniform sampler2D tDiffuse, tAO; uniform vec2 uTexel; uniform float uStrength; varying vec2 vUv;
        void main(){
          vec4 col = texture2D(tDiffuse, vUv);
          float z0 = viewPos(vUv).z, sum = 0.0, wsum = 0.0;
          // 4x4 depth-aware blur across the half-res AO (texel = one AO texel)
          for (int y = -1; y <= 2; y++) for (int x = -1; x <= 2; x++) {
            vec2 o = (vec2(float(x), float(y)) - 0.5) * uTexel;
            float z = viewPos(vUv + o * 0.5).z;
            float w = 1.0 / (1e-3 + abs(z - z0) * 4.0 / max(-z0, 1.0));
            sum += texture2D(tAO, vUv + o).r * w; wsum += w;
          }
          float ao = sum / wsum;
          gl_FragColor = vec4(col.rgb * mix(1.0, ao * ao, uStrength), col.a);
        }`,
      depthTest: false, depthWrite: false,
    });
    this.quad = new FullScreenQuad(this.aoMat);
  }
  setSize(w, h) {
    const aw = Math.max(1, w >> 1), ah = Math.max(1, h >> 1);
    this.aoRT.setSize(aw, ah);
    this.aoMat.uniforms.uTexel.value.set(1 / w, 1 / h);
    this.compMat.uniforms.uTexel.value.set(1 / aw, 1 / ah);
  }
  render(renderer, writeBuffer, readBuffer) {
    const cam = this.camera, depth = readBuffer.depthTexture;
    this.aoMat.uniforms.tDepth.value = this.compMat.uniforms.tDepth.value = depth;
    this.aoMat.uniforms.uProj.value.copy(cam.projectionMatrix);
    this.aoMat.uniforms.uInvProj.value.copy(cam.projectionMatrixInverse);
    this.compMat.uniforms.uInvProj.value.copy(cam.projectionMatrixInverse);
    renderer.setRenderTarget(this.aoRT);
    this.quad.material = this.aoMat; this.quad.render(renderer);
    this.compMat.uniforms.tDiffuse.value = readBuffer.texture;
    this.compMat.uniforms.tAO.value = this.aoRT.texture;
    renderer.setRenderTarget(this.renderToScreen ? null : writeBuffer);
    this.quad.material = this.compMat; this.quad.render(renderer);
  }
}
