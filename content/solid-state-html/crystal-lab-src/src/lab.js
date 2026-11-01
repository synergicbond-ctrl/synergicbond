// Crystal Lab 3D — Solid State. Bundled into one offline HTML file (three.js r165).
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
import { ConvexGeometry } from "three/examples/jsm/geometries/ConvexGeometry.js";

// ───────────────────────────── chemistry (standard textbook values) ─────────────────────────────
const R2 = Math.SQRT2, R3 = Math.sqrt(3), HC = Math.sqrt(8 / 3);
const COL = { metal: 0x2f7fd6, anion: 0x2fa046, cation: 0x8a3fa6, zn: 0xc3ccd6, s: 0xe0b020, carbon: 0x7d8796 };
const corners = []; for (const x of [0, 1]) for (const y of [0, 1]) for (const z of [0, 1]) corners.push([x, y, z]);
const faces = [[.5, .5, 0], [.5, .5, 1], [.5, 0, .5], [.5, 1, .5], [0, .5, .5], [1, .5, .5]];
const edges = []; for (const a of [0, 1]) for (const b of [0, 1]) { edges.push([.5, a, b], [a, .5, b], [a, b, .5]); }
const fccPts = [[0, 0, 0], [.5, .5, 0], [.5, 0, .5], [0, .5, .5]];
const tet4 = [[.25, .25, .25], [.75, .75, .25], [.75, .25, .75], [.25, .75, .75]];
const tet8 = []; for (const x of [.25, .75]) for (const y of [.25, .75]) for (const z of [.25, .75]) tet8.push([x, y, z]);

const S = {
  sc: { name: "Simple cubic", sub: "Atoms at the 8 corners only", atoms: corners.map((p) => ({ p, k: "metal" })), basis: [{ p: [0, 0, 0], k: "metal" }],
    Z: "1", CN: "6", poly: "octahedron", pf: Math.PI / 6, rel: "a = 2r", rT: { metal: .5 }, ex: "Po (α-polonium)", centre: [0, 0, 0] },
  bcc: { name: "Body-centred cubic", sub: "Corners + one atom at the body centre", atoms: [...corners.map((p) => ({ p, k: "metal" })), { p: [.5, .5, .5], k: "metal" }],
    basis: [{ p: [0, 0, 0], k: "metal" }, { p: [.5, .5, .5], k: "metal" }], Z: "2", CN: "8", poly: "cube", pf: R3 * Math.PI / 8, rel: "√3 a = 4r (body diagonal)", rT: { metal: R3 / 4 }, ex: "Na, K, Cr, Fe (α)", centre: [.5, .5, .5] },
  fcc: { name: "Face-centred cubic (ccp)", sub: "Corners + the 6 face centres", atoms: [...corners, ...faces].map((p) => ({ p, k: "metal" })),
    basis: fccPts.map((p) => ({ p, k: "metal" })), Z: "4", CN: "12", poly: "cuboctahedron", pf: Math.PI / (3 * R2), rel: "√2 a = 4r (face diagonal)", rT: { metal: R2 / 4 }, ex: "Cu, Ag, Au, Al", centre: [.5, .5, 0], voids: true },
  hcp: { name: "Hexagonal close packed", sub: "ABAB… stacking — the hexagonal prism (3 primitive cells)", hex: true,
    Z: "6 per hexagonal prism", CN: "12", poly: "anticuboctahedron", pf: Math.PI / (3 * R2), rel: "a = 2r, c/a = √(8/3) ≈ 1.633", rT: { metal: .5 }, ex: "Mg, Zn, Ti, Co", voids: true },
  nacl: { name: "Rock salt (NaCl)", sub: "Cl⁻ in fcc; Na⁺ in every octahedral void", ionic: true,
    atoms: [...[...corners, ...faces].map((p) => ({ p, k: "anion" })), ...[...edges, [.5, .5, .5]].map((p) => ({ p, k: "cation" }))],
    basis: fccPts.flatMap((p) => [{ p, k: "anion" }, { p: [p[0] + .5, p[1], p[2]], k: "cation" }]),
    Z: "4 NaCl units", CN: "6 : 6", poly: "octahedron", pf: null, rel: "a = 2(r⁺ + r⁻)", ratio: "r⁺/r⁻ = 0.414 – 0.732 (octahedral)",
    rT: { anion: .5 / 1.56, cation: .5 * .56 / 1.56 }, ex: "NaCl, KCl, MgO, AgCl", centre: [.5, .5, .5], centreKind: "cation", names: { anion: "Cl⁻", cation: "Na⁺" } },
  cscl: { name: "Caesium chloride (CsCl)", sub: "Cl⁻ at the corners, Cs⁺ at the body centre", ionic: true,
    atoms: [...corners.map((p) => ({ p, k: "anion" })), { p: [.5, .5, .5], k: "cation" }], basis: [{ p: [0, 0, 0], k: "anion" }, { p: [.5, .5, .5], k: "cation" }],
    Z: "1 CsCl unit", CN: "8 : 8", poly: "cube", pf: null, rel: "√3 a = 2(r⁺ + r⁻)", ratio: "r⁺/r⁻ ≥ 0.732 (cubic)",
    rT: { anion: (R3 / 2) / 1.92, cation: (R3 / 2) * .92 / 1.92 }, ex: "CsCl, CsBr, CsI", centre: [.5, .5, .5], centreKind: "cation", names: { anion: "Cl⁻", cation: "Cs⁺" } },
  zns: { name: "Zinc blende (ZnS)", sub: "S²⁻ in fcc; Zn²⁺ in half the tetrahedral voids", ionic: true,
    atoms: [...[...corners, ...faces].map((p) => ({ p, k: "s" })), ...tet4.map((p) => ({ p, k: "zn" }))],
    basis: fccPts.flatMap((p) => [{ p, k: "s" }, { p: [p[0] + .25, p[1] + .25, p[2] + .25], k: "zn" }]),
    Z: "4 ZnS units", CN: "4 : 4", poly: "tetrahedron", pf: null, rel: "√3 a = 4(r⁺ + r⁻)", ratio: "r⁺/r⁻ = 0.225 – 0.414 (tetrahedral)",
    rT: { s: (R3 / 4) / 1.33, zn: (R3 / 4) * .33 / 1.33 }, ex: "ZnS, CuCl, CdS, HgS", centre: [.25, .25, .25], centreKind: "zn", names: { s: "S²⁻", zn: "Zn²⁺" } },
  diamond: { name: "Diamond cubic", sub: "fcc + 4 of the 8 tetrahedral voids, all carbon",
    atoms: [...[...corners, ...faces].map((p) => ({ p, k: "carbon" })), ...tet4.map((p) => ({ p, k: "carbon" }))],
    basis: fccPts.flatMap((p) => [{ p, k: "carbon" }, { p: [p[0] + .25, p[1] + .25, p[2] + .25], k: "carbon" }]),
    Z: "8", CN: "4", poly: "tetrahedron", pf: R3 * Math.PI / 16, rel: "√3 a = 8r", rT: { carbon: R3 / 8 }, ex: "C (diamond), Si, Ge", centre: [.25, .25, .25] },
};
// position-in-cell colours (used by Positions and Atom sharing)
const SITE = {
  corner: { col: 0x2f7fd6, name: "corner", css: "#2f7fd6", tag: "C" },
  edge: { col: 0xc62839, name: "edge centre", css: "#c62839", tag: "E" },
  face: { col: 0x2fa046, name: "face centre", css: "#2fa046", tag: "F" },
  body: { col: 0xe0a91c, name: "body centre", css: "#e0a91c", tag: "B" },
  inside: { col: 0x8a3fa6, name: "inside (tetrahedral site)", css: "#8a3fa6", tag: "T" },
  hexinside: { col: 0x8a3fa6, name: "inside (middle layer)", css: "#8a3fa6", tag: "I" },
};
const ORDER = ["sc", "bcc", "fcc", "hcp", "nacl", "cscl", "zns", "diamond"];
const MODES = [["pos", "Positions"], ["view", "Structure"], ["grow", "Crystallise"], ["share", "Atom sharing (Z)"], ["pack", "Packing"], ["voids", "Voids"], ["cn", "Coordination"], ["plane", "Miller planes"]];
const BASE_R = { metal: .13, anion: .14, cation: .1, zn: .09, s: .13, carbon: .1 };
const frac = (x) => (Math.abs(x - 1) < 1e-9 ? "1" : Math.abs(x - .5) < 1e-9 ? "½" : Math.abs(x - .25) < 1e-9 ? "¼" : Math.abs(x - .125) < 1e-9 ? "⅛" : Math.abs(x - 1 / 6) < 1e-9 ? "⅙" : x.toFixed(2));
const nb = (p) => p.filter((v) => v === 0 || v === 1).length;
const fmt = (v) => (Math.abs(v - Math.round(v)) < 1e-9 ? String(Math.round(v)) : v.toFixed(3).replace(/0+$/, ""));

// model space: cubic cell is [0,1]^3, z up. World: a cube of edge A centred at the origin, y up.
const A = 2.2;
const isHex = (s) => !!S[s].hex;
const unit = (s) => (isHex(s) ? 1.25 : A); // world length of the lattice parameter a
function toWorld(q, s) { // q already centred in model units of a
  const u = unit(s);
  return new THREE.Vector3(q[0] * u, q[2] * u, -q[1] * u);
}
function hcpCell() {
  const out = [];
  for (const z of [0, HC]) {
    for (let k = 0; k < 6; k++) out.push({ q: [Math.cos(k * Math.PI / 3), Math.sin(k * Math.PI / 3), z - HC / 2], k: "metal", share: 1 / 6, role: "corner", site: "corner" });
    out.push({ q: [0, 0, z - HC / 2], k: "metal", share: .5, role: "face", site: "face" });
  }
  for (let k = 0; k < 3; k++) { const t = Math.PI / 2 + k * 2 * Math.PI / 3; out.push({ q: [Math.cos(t) / R3, Math.sin(t) / R3, 0], k: "metal", share: 1, role: "inside", site: "hexinside" }); }
  return out;
}
function cellAtoms(s) {
  if (isHex(s)) return hcpCell();
  return S[s].atoms.map((a) => {
    const n = nb(a.p), body = a.p.every((v) => v === .5);
    const site = ["inside", "face", "edge", "corner"][n] === "inside" ? (body ? "body" : "inside") : ["inside", "face", "edge", "corner"][n];
    return { q: [a.p[0] - .5, a.p[1] - .5, a.p[2] - .5], k: a.k, share: [1, .5, .25, .125][n], role: ["inside", "face", "edge", "corner"][n], site, p: a.p };
  });
}
function latticePoints(s, range) { // fractional points of the extended lattice
  const d = S[s], pts = [];
  if (d.hex) {
    const basis = [[0, 0, 0], [1 / 3, 2 / 3, .5]];
    for (let i = -range; i <= range; i++) for (let j = -range; j <= range; j++) for (let k = -1; k <= 1; k++) for (const b of basis) {
      const f = [i + b[0], j + b[1], k + b[2]];
      pts.push({ q: [f[0] - f[1] / 2, f[1] * R3 / 2, f[2] * HC], k: "metal" });
    }
    return pts;
  }
  for (let i = -range; i <= range; i++) for (let j = -range; j <= range; j++) for (let k = -range; k <= range; k++) for (const b of d.basis) pts.push({ q: [b.p[0] + i, b.p[1] + j, b.p[2] + k], k: b.k });
  return pts;
}
function neighbours(s) {
  const d = S[s];
  const pts = latticePoints(s, d.hex ? 2 : 1);
  let centre, ck;
  if (d.hex) { centre = [1 / 3 - 1 / 3, 2 / 3 * R3 / 2, HC / 2]; centre = [1 / 3 - (2 / 3) / 2, (2 / 3) * R3 / 2, HC / 2]; ck = "metal"; }
  else { centre = d.centre; ck = d.centreKind || d.basis[0].k; }
  const dist = (u, v) => Math.hypot(u[0] - v[0], u[1] - v[1], u[2] - v[2]);
  const others = pts.filter((x) => dist(x.q, centre) > 1e-6 && (!d.ionic || x.k !== ck));
  const m = Math.min(...others.map((x) => dist(x.q, centre)));
  const nn = others.filter((x) => Math.abs(dist(x.q, centre) - m) < 1e-4);
  const shift = d.hex ? [0, 0, -HC / 2] : [-.5, -.5, -.5];
  const mv = (q) => [q[0] + shift[0], q[1] + shift[1], q[2] + shift[2]];
  return { centre: { q: mv(centre), k: ck }, nn: nn.map((x) => ({ q: mv(x.q), k: x.k })), d: m };
}
function supercell(s) { // 2×2×2 block (cubic) or a 2-layer hex patch, for the crystallise scene
  const d = S[s];
  if (d.hex) {
    const pts = latticePoints(s, 2).filter((x) => Math.hypot(x.q[0], x.q[1]) < 1.9 && x.q[2] >= -1e-6 && x.q[2] <= 2 * HC + 1e-6);
    return pts.map((x) => ({ q: [x.q[0], x.q[1], x.q[2] - HC], k: x.k }));
  }
  const pts = latticePoints(s, 2).filter((x) => x.q.every((v) => v >= -1e-6 && v <= 2 + 1e-6));
  const seen = new Set(), out = [];
  for (const x of pts) { const key = x.q.map((v) => v.toFixed(3)).join(","); if (!seen.has(key)) { seen.add(key); out.push({ q: [(x.q[0] - 1) / 2, (x.q[1] - 1) / 2, (x.q[2] - 1) / 2], k: x.k }); } }
  return out;
}

// ───────────────────────────── renderer, scene, look ─────────────────────────────
const stage = document.getElementById("stage");
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
renderer.toneMapping = THREE.NeutralToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.localClippingEnabled = true;
stage.prepend(renderer.domElement);
renderer.domElement.setAttribute("aria-label", "Rotatable 3D model of the selected crystal structure");
renderer.domElement.setAttribute("role", "img");
renderer.domElement.tabIndex = 0;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x040606);
scene.fog = new THREE.Fog(0x040606, 14, 30);
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
camera.position.set(4.3, 2.9, 5.2);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; controls.dampingFactor = 0.07;
controls.minDistance = 3.2; controls.maxDistance = 14;
controls.autoRotate = true; controls.autoRotateSpeed = 0.35;
controls.target.set(0, 0, 0);

const key = new THREE.DirectionalLight(0xffffff, 2.3);
key.position.set(5, 9, 6); key.castShadow = true;
key.shadow.mapSize.set(2048, 2048); key.shadow.camera.near = 1; key.shadow.camera.far = 30;
key.shadow.camera.left = -6; key.shadow.camera.right = 6; key.shadow.camera.top = 6; key.shadow.camera.bottom = -6; key.shadow.radius = 6; key.shadow.bias = -0.0004;
scene.add(key);
const rim = new THREE.DirectionalLight(0xbfd8ff, 0.45); rim.position.set(-7, 3, -6); scene.add(rim);
const fill = new THREE.HemisphereLight(0xffffff, 0x1a1f22, 0.9); scene.add(fill);

// floor: soft shadow catcher + a faint gold halo
const FLOOR_Y = -2.15;
const floor = new THREE.Mesh(new THREE.CircleGeometry(9, 64), new THREE.ShadowMaterial({ opacity: 0.42 }));
floor.rotation.x = -Math.PI / 2; floor.position.y = FLOOR_Y; floor.receiveShadow = true; scene.add(floor);
const haloTex = (() => { const c = document.createElement("canvas"); c.width = c.height = 256; const g = c.getContext("2d"); const gr = g.createRadialGradient(128, 128, 0, 128, 128, 128); gr.addColorStop(0, "rgba(220,226,232,0.10)"); gr.addColorStop(0.5, "rgba(220,226,232,0.03)"); gr.addColorStop(1, "rgba(0,0,0,0)"); g.fillStyle = gr; g.fillRect(0, 0, 256, 256); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; })();
const halo = new THREE.Mesh(new THREE.CircleGeometry(6.5, 64), new THREE.MeshBasicMaterial({ map: haloTex, transparent: true, depthWrite: false }));
halo.rotation.x = -Math.PI / 2; halo.position.y = FLOOR_Y + 0.002; scene.add(halo);

// drifting dust for depth
const dust = (() => {
  const n = 380, g = new THREE.BufferGeometry(), pos = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { pos[i * 3] = (Math.random() - .5) * 26; pos[i * 3 + 1] = Math.random() * 12 - 3; pos[i * 3 + 2] = (Math.random() - .5) * 26; }
  g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  const m = new THREE.PointsMaterial({ size: 0.035, color: 0xf6efdf, transparent: true, opacity: 0.35, depthWrite: false });
  const p = new THREE.Points(g, m); p.visible = false; return p; // off: twinkling points tire the eyes
})();

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.12, 0.3, 0.96);
composer.addPass(bloom);
composer.addPass(new OutputPass());

// ───────────────────────────── atoms (instanced, morphing) ─────────────────────────────
const MAX = 220;
const sphere = new THREE.SphereGeometry(1, 48, 32);
const atomMat = new THREE.MeshPhongMaterial({ shininess: 80, specular: new THREE.Color(0x6a6a6a), side: THREE.FrontSide });
atomMat.onBeforeCompile = (sh) => { sh.fragmentShader = sh.fragmentShader.replace("#include <dithering_fragment>", "#include <dithering_fragment>\n if (!gl_FrontFacing) { gl_FragColor.rgb = mix(gl_FragColor.rgb * 0.30, vec3(0.89,0.70,0.25) * 0.55, 0.35); }"); };
const atoms = new THREE.InstancedMesh(sphere, atomMat, MAX);
atoms.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
atoms.castShadow = true; atoms.receiveShadow = true; atoms.frustumCulled = false;
scene.add(atoms);
const glowMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.0, blending: THREE.AdditiveBlending, depthWrite: false });
const glow = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 24, 16), glowMat, MAX);
glow.frustumCulled = false; glow.instanceMatrix.setUsage(THREE.DynamicDrawUsage); scene.add(glow);
const slot = Array.from({ length: MAX }, () => ({ pos: new THREE.Vector3(), tgt: new THREE.Vector3(), r: 0, tr: 0, col: new THREE.Color(0x37c8f4), tcol: new THREE.Color(0x37c8f4), delay: 0, glow: 0, tglow: 0, alpha: 1, info: null }));
const dummy = new THREE.Object3D();
for (let i = 0; i < MAX; i++) { atoms.setColorAt(i, slot[i].col); glow.setColorAt(i, slot[i].col); }

// cell frame (glowing edges)
const frameMat = new THREE.LineBasicMaterial({ color: 0xf6efdf, transparent: true, opacity: 0.55 });
let frame = null;
function buildFrame(s) {
  if (frame) { scene.remove(frame); frame.geometry.dispose(); }
  const segs = [];
  if (isHex(s)) {
    const ring = (z) => Array.from({ length: 6 }, (_, k) => toWorld([Math.cos(k * Math.PI / 3), Math.sin(k * Math.PI / 3), z], s));
    const lo = ring(-HC / 2), hi = ring(HC / 2);
    for (let k = 0; k < 6; k++) segs.push(lo[k], lo[(k + 1) % 6], hi[k], hi[(k + 1) % 6], lo[k], hi[k]);
  } else {
    const v = corners.map((p) => toWorld([p[0] - .5, p[1] - .5, p[2] - .5], s));
    for (let i = 0; i < 8; i++) for (let j = i + 1; j < 8; j++) if (corners[i].reduce((a, x, k) => a + Math.abs(x - corners[j][k]), 0) === 1) segs.push(v[i], v[j]);
  }
  frame = new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(segs), frameMat);
  scene.add(frame);
}

// clipping walls for the atom-sharing cut
function cellPlanes(s) {
  if (isHex(s)) {
    const u = unit(s), apothem = Math.cos(Math.PI / 6) * u, half = HC / 2 * u, out = [];
    for (let k = 0; k < 6; k++) { const t = Math.PI / 6 + k * Math.PI / 3; const n = new THREE.Vector3(-Math.cos(t), 0, Math.sin(t)); out.push(new THREE.Plane(n, apothem)); }
    out.push(new THREE.Plane(new THREE.Vector3(0, 1, 0), half), new THREE.Plane(new THREE.Vector3(0, -1, 0), half));
    return out;
  }
  const h = A / 2;
  return [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]].map((n) => new THREE.Plane(new THREE.Vector3(...n), h));
}
let clipPlanes = [], clipBase = [];

// bonds and polyhedra
const bondMat = new THREE.MeshPhysicalMaterial({ color: 0xf6efdf, roughness: .3, metalness: .2, emissive: 0xe3b341, emissiveIntensity: .35 });
const bonds = new THREE.InstancedMesh(new THREE.CylinderGeometry(1, 1, 1, 16, 1, true), bondMat, 16);
bonds.frustumCulled = false; bonds.count = 0; scene.add(bonds);
const fx = new THREE.Group(); scene.add(fx); // per-mode extras (polyhedra, planes, voids)
function clearFx() { while (fx.children.length) { const c = fx.children.pop(); c.traverse((o) => { o.geometry?.dispose(); (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => m?.dispose?.()); }); } }
function glass(color, opacity = .16) { return new THREE.MeshPhysicalMaterial({ color, transparent: true, opacity, roughness: .05, metalness: 0, transmission: 0, clearcoat: 1, side: THREE.DoubleSide, depthWrite: false, emissive: color, emissiveIntensity: .25 }); }
function polyhedron(points, color) {
  const geo = new ConvexGeometry(points);
  const mesh = new THREE.Mesh(geo, glass(color, .18));
  const edgesL = new THREE.LineSegments(new THREE.EdgesGeometry(geo, 1), new THREE.LineBasicMaterial({ color, transparent: true, opacity: .95 }));
  const g = new THREE.Group(); g.add(mesh, edgesL); return g;
}

// ───────────────────────────── state & UI ─────────────────────────────
const st = { s: "fcc", mode: "pos", showLabels: true, t0: performance.now(), hkl: [1, 1, 1], temp: 0, dis: 0, ttemp: 0, tdis: 0, phase: "crystal", liquid: [] };
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
if (reduce) controls.autoRotate = false;
const $ = (id) => document.getElementById(id);
const labels = $("labels");
let labelEls = [];

function setTargets() {
  const s = st.s, d = S[s];
  let list;
  if (st.mode === "grow") list = supercell(s).map((a) => ({ ...a, r: (BASE_R[a.k] ?? .12) * .85 }));
  else if (st.mode === "cn") {
    const n = neighbours(s);
    list = [{ ...n.centre, r: (BASE_R[n.centre.k] ?? .12) + .02, centre: true }, ...n.nn.map((x) => ({ ...x, r: BASE_R[x.k] ?? .12, nn: true }))];
    st.nn = n;
  } else list = cellAtoms(s).map((a) => ({ ...a, r: BASE_R[a.k] ?? .12 }));
  if (st.mode === "pack" || st.mode === "share") list.forEach((a) => (a.r = d.rT[a.k] ?? a.r));
  if (st.mode === "pos") list.forEach((a) => (a.r = .085));
  const bySite = st.mode === "pos" || st.mode === "share";
  st.list = list;
  const scaleR = st.mode === "grow" ? .5 : 1;
  for (let i = 0; i < MAX; i++) {
    const sl = slot[i], a = list[i];
    if (a) {
      const q = st.mode === "grow" ? a.q : a.q;
      sl.tgt.copy(toWorld(q, s)); if (st.mode === "grow") sl.tgt.multiplyScalar(1);
      sl.tr = a.r * unit(s) * scaleR; sl.tcol.setHex(bySite && a.site ? SITE[a.site].col : (COL[a.k] ?? COL.metal)); sl.info = a;
      if (sl.r < 1e-4) { sl.pos.copy(sl.tgt).multiplyScalar(0.02); }
      sl.delay = (reduce ? 0 : i * 0.012);
    } else { sl.tr = 0; sl.info = null; }
  }
  if (st.mode === "grow") st.liquid = list.map(() => new THREE.Vector3((Math.random() - .5) * 4.4, (Math.random() - .5) * 4.4, (Math.random() - .5) * 4.4));
  st.t0 = performance.now();
}

function buildModeFx() {
  clearFx(); bonds.count = 0;
  const s = st.s, d = S[s];
  atomMat.clippingPlanes = null; atomMat.side = THREE.FrontSide; atomMat.needsUpdate = true;
  frame.visible = st.mode !== "grow";
  if (st.mode === "share") {
    clipBase = cellPlanes(s);
    clipPlanes = clipBase.map((p) => p.clone());
    atomMat.clippingPlanes = clipPlanes; atomMat.clipShadows = true; atomMat.side = THREE.DoubleSide; atomMat.needsUpdate = true;
  }
  if (st.mode === "voids" && d.voids) {
    if (s === "fcc") {
      // body-centre octahedral void: the octahedron of the 6 face centres
      fx.add(polyhedron(faces.map((p) => toWorld([p[0] - .5, p[1] - .5, p[2] - .5], s)), 0xff775d));
      // the 8 tetrahedral voids: each a corner + its 3 neighbouring face centres
      for (const c of corners) {
        const pts = [c, [.5, .5, c[2]], [.5, c[1], .5], [c[0], .5, .5]].map((p) => toWorld([p[0] - .5, p[1] - .5, p[2] - .5], s));
        fx.add(polyhedron(pts, 0xe3b341));
      }
      for (const p of [...edges, [.5, .5, .5]]) fx.add(voidBall(toWorld([p[0] - .5, p[1] - .5, p[2] - .5], s), 0xff775d, p.join() === ".5,.5,.5" ? .2 : .14));
      for (const p of tet8) fx.add(voidBall(toWorld([p[0] - .5, p[1] - .5, p[2] - .5], s), 0xe3b341, .11));
    } else {
      const r = 1 / R3;
      for (let k = 0; k < 3; k++) { const t = -Math.PI / 2 + k * 2 * Math.PI / 3; for (const z of [-HC / 4, HC / 4]) fx.add(voidBall(toWorld([r * Math.cos(t), r * Math.sin(t), z], s), 0xff775d, .14)); }
      for (let k = 0; k < 3; k++) { const t = Math.PI / 2 + k * 2 * Math.PI / 3; for (const z of [-3 * HC / 8, 3 * HC / 8]) fx.add(voidBall(toWorld([r * Math.cos(t), r * Math.sin(t), z], s), 0xe3b341, .1)); }
      for (const z of [-HC / 8, HC / 8]) fx.add(voidBall(toWorld([0, 0, z], s), 0xe3b341, .1));
      for (let k = 0; k < 6; k++) for (const z of [-HC / 8, HC / 8]) fx.add(voidBall(toWorld([Math.cos(k * Math.PI / 3), Math.sin(k * Math.PI / 3), z], s), 0xe3b341, .1));
    }
  }
  if (st.mode === "cn") {
    const n = st.nn;
    const c = toWorld(n.centre.q, s);
    const pts = n.nn.map((x) => toWorld(x.q, s));
    const poly = polyhedron(pts, ionicPolyColour(d));
    poly.userData.reveal = true; poly.scale.setScalar(0.001); poly.position.copy(c);
    poly.children.forEach((ch) => ch.position.copy(c).multiplyScalar(-1));
    fx.add(poly);
    st.bondEnds = pts.map((p) => ({ a: c.clone(), b: p }));
    bonds.count = pts.length;
  }
  if (st.mode === "plane") buildPlanes();
}
function ionicPolyColour(d) { return d.ionic ? 0xb376ff : 0xe3b341; }
function voidBall(pos, color, r) {
  const m = new THREE.Mesh(new THREE.SphereGeometry(r, 24, 16), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: .85 }));
  m.position.copy(pos); m.userData.pulse = Math.random() * 6; return m;
}

// Miller planes: the family h x + k y + l z = n that cuts the cell, swept one by one
function planePolygon([h, k, l], c) {
  const n = [h, k, l], pts = [];
  for (let i = 0; i < 8; i++) for (let j = i + 1; j < 8; j++) {
    const a = corners[i], b = corners[j];
    if (a.reduce((s2, x, q) => s2 + Math.abs(x - b[q]), 0) !== 1) continue;
    const fa = n[0] * a[0] + n[1] * a[1] + n[2] * a[2] - c, fb = n[0] * b[0] + n[1] * b[1] + n[2] * b[2] - c;
    if (Math.abs(fa) < 1e-9) pts.push(a);
    if (fa * fb < 0) { const t = fa / (fa - fb); pts.push([a[0] + t * (b[0] - a[0]), a[1] + t * (b[1] - a[1]), a[2] + t * (b[2] - a[2])]); }
  }
  const uniq = []; for (const p of pts) if (!uniq.some((u) => Math.hypot(u[0] - p[0], u[1] - p[1], u[2] - p[2]) < 1e-6)) uniq.push(p);
  if (uniq.length < 3) return [];
  const cx = uniq.reduce((a, p) => [a[0] + p[0], a[1] + p[1], a[2] + p[2]], [0, 0, 0]).map((v) => v / uniq.length);
  const len = Math.hypot(h, k, l), nu = [h / len, k / len, l / len];
  let u = Math.abs(nu[0]) < .9 ? [1, 0, 0] : [0, 1, 0];
  const dt = u[0] * nu[0] + u[1] * nu[1] + u[2] * nu[2]; u = [u[0] - dt * nu[0], u[1] - dt * nu[1], u[2] - dt * nu[2]];
  const ul = Math.hypot(...u); u = u.map((x) => x / ul);
  const v = [nu[1] * u[2] - nu[2] * u[1], nu[2] * u[0] - nu[0] * u[2], nu[0] * u[1] - nu[1] * u[0]];
  const ang = (p) => Math.atan2((p[0] - cx[0]) * v[0] + (p[1] - cx[1]) * v[1] + (p[2] - cx[2]) * v[2], (p[0] - cx[0]) * u[0] + (p[1] - cx[1]) * u[1] + (p[2] - cx[2]) * u[2]);
  return uniq.sort((p, q) => ang(p) - ang(q));
}
function buildPlanes() {
  const s = st.s; if (isHex(s)) return;
  const [h, k, l] = st.hkl; if (!h && !k && !l) return;
  const lo = Math.min(0, h) + Math.min(0, k) + Math.min(0, l), hi = Math.max(0, h) + Math.max(0, k) + Math.max(0, l);
  st.planes = [];
  for (let c = lo; c <= hi; c++) {
    const poly = planePolygon(st.hkl, c);
    if (poly.length < 3) continue;
    const w = poly.map((p) => toWorld([p[0] - .5, p[1] - .5, p[2] - .5], s));
    const geo = new THREE.BufferGeometry();
    const pos = []; for (let i = 1; i < w.length - 1; i++) pos.push(...w[0].toArray(), ...w[i].toArray(), ...w[i + 1].toArray());
    geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3)); geo.computeVertexNormals();
    const mesh = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: 0xe3b341, transparent: true, opacity: .12, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending }));
    const outline = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(w), new THREE.LineBasicMaterial({ color: 0xe3b341, transparent: true, opacity: .5 }));
    const g = new THREE.Group(); g.add(mesh, outline); g.userData.c = c; fx.add(g); st.planes.push(g);
  }
}

// ───────────────────────────── panel ─────────────────────────────
const bigNum = $("bigNum"), bigCap = $("bigCap"), tally = $("tally");
function setBig(n, cap) { if (bigNum.textContent !== n) bigNum.textContent = n; if (bigCap.textContent !== cap) bigCap.textContent = cap; }
function chips() {
  $("structs").innerHTML = ORDER.map((k) => `<button aria-pressed="${k === st.s}" data-s="${k}">${S[k].name.replace(/ \(.*\)$/, "")}</button>`).join("");
  $("modes").innerHTML = MODES.map(([k, n]) => `<button aria-pressed="${k === st.mode}" data-m="${k}">${n}</button>`).join("");
  $("structs").querySelectorAll("button").forEach((b) => (b.onclick = () => go(b.dataset.s, st.mode)));
  $("modes").querySelectorAll("button").forEach((b) => (b.onclick = () => go(st.s, b.dataset.m)));
}
function go(s, mode) {
  const changed = s !== st.s;
  st.s = s; st.mode = mode;
  if (changed) buildFrame(s);
  setTargets(); buildModeFx(); chips(); panel();
  if (mode === "grow") autoCrystallise();
}
function panel() {
  const d = S[st.s];
  $("title").textContent = d.name; $("subtitle").textContent = d.sub;
  const facts = [["Atoms per cell, Z", d.Z], ["Coordination", `${d.CN} · ${d.poly}`], ["Packing efficiency", d.pf ? `${(d.pf * 100).toFixed(1)}%` : "depends on the ion sizes"], ["Radius relation", d.rel]];
  if (d.ratio) facts.push(["Radius ratio", d.ratio]);
  facts.push(["Examples", d.ex]);
  $("facts").innerHTML = facts.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join("");
  $("hudL").innerHTML = `<b>${d.name}</b>`; $("hudR").textContent = MODES.find((m) => m[0] === st.mode)[1];
  tally.style.display = st.mode === "share" ? "" : "none";
  const c = $("controls"); c.innerHTML = ""; let note = "";
  setBig("", "");
  if (st.mode === "pos") {
    const list = cellAtoms(st.s), sites = {};
    list.forEach((a) => { const key = a.site; sites[key] = sites[key] || { n: 0, share: a.share }; sites[key].n++; });
    const order = ["corner", "edge", "face", "body", "inside", "hexinside"].filter((k2) => sites[k2]);
    const rows = order.map((k2) => `<tr><td><i class="tagdot" style="background:${SITE[k2].css}">${SITE[k2].tag}</i>${SITE[k2].name}</td><td>${sites[k2].n}</td><td>${frac(sites[k2].share)}</td><td>${fmt(sites[k2].n * sites[k2].share)}</td></tr>`).join("");
    const total = order.reduce((a2, k2) => a2 + sites[k2].n * sites[k2].share, 0);
    c.innerHTML = `<table class="sites"><thead><tr><th>Position</th><th>Atoms</th><th>Share</th><th>Counts</th></tr></thead><tbody>${rows}</tbody><tfoot><tr><td>${S[st.s].ionic ? "Total ions in this cell" : "Total in this cell"}</td><td></td><td></td><td>${fmt(total)}</td></tr></tfoot></table>`;
    const row2 = document.createElement("div"); row2.className = "row";
    row2.innerHTML = `<button class="btn" id="lbl">${st.showLabels ? "Hide labels" : "Show labels"}</button>`;
    c.appendChild(row2);
    $("lbl").onclick = () => { st.showLabels = !st.showLabels; panel(); };
    note = "Each colour and letter is one kind of position: C corner, E edge centre, F face centre, B body centre, T tetrahedral site, I inside (hcp middle layer). Drag to turn the cell and check every corner, edge centre, face centre and the body centre.";
    setBig(String(list.length), "atoms drawn in this cell");
  }
  if (st.mode === "view") note = "Every structure is the same box with atoms in different places. Drag to turn it; switch structures and watch the atoms fly to their new sites.";
  if (st.mode === "grow") {
    c.innerHTML = `<div class="row"><button class="btn" id="melt">🔥 Melt</button><button class="btn" id="slow">❄ Cool slowly</button><button class="btn" id="quench">⚡ Quench</button></div>
      <div class="row"><label for="tempR">Temperature</label><input type="range" id="tempR" min="0" max="1" step="0.01" value="${st.ttemp}"></div>`;
    $("melt").onclick = melt; $("slow").onclick = slowCool; $("quench").onclick = quench;
    $("tempR").oninput = (e) => { st.ttemp = +e.target.value; if (st.ttemp > .6) st.tdis = 1; };
    note = "Melt the crystal, then cool it. Cooled slowly, the particles find their lattice sites: long-range order, a crystal. Quenched, they freeze where they are: short-range order only, an amorphous solid.";
  }
  if (st.mode === "share") note = "The cell walls slice every atom: a corner keeps ⅛ (⅙ in the hexagonal prism), an edge ¼, a face ½, an inside atom all of it. The tally adds up what stays inside.";
  if (st.mode === "pack") note = d.pf ? "Spheres swell until neighbours touch along the contact direction; the counter tracks how much of the cell they fill." : "For ionic crystals the filled fraction depends on both radii; the ions swell until anion and cation touch.";
  if (st.mode === "voids") note = st.s === "fcc" ? "fcc: 4 octahedral voids (12 edge centres × ¼ + 1 body centre; the coral octahedron) and 8 tetrahedral voids (the gold tetrahedra) — 1 and 2 per atom."
    : st.s === "hcp" ? "hcp: 6 octahedral and 12 tetrahedral voids per hexagonal prism (8 inside + 12 on the vertical edges × ⅓) — again 1 and 2 per atom." : "Voids are shown for the close-packed structures: choose fcc or hcp.";
  if (st.mode === "voids") setBig(st.s === "fcc" ? "4 + 8" : st.s === "hcp" ? "6 + 12" : "", d.voids ? "octahedral + tetrahedral voids per cell" : "");
  if (st.mode === "cn") note = `Bonds grow to the nearest ${d.ionic ? "ions of opposite charge" : "atoms"}; together they outline the coordination polyhedron — a ${d.poly}.`;
  if (st.mode === "plane") {
    if (isHex(st.s)) note = "Miller planes are drawn for the cubic structures.";
    else {
      c.innerHTML = `<div class="row"><label>h</label><input type="number" min="-3" max="3" value="${st.hkl[0]}" id="h"><label>k</label><input type="number" min="-3" max="3" value="${st.hkl[1]}" id="k"><label>l</label><input type="number" min="-3" max="3" value="${st.hkl[2]}" id="l"></div>
        <div class="row">${[[1, 0, 0], [1, 1, 0], [1, 1, 1], [2, 0, 0], [2, 1, 0], [2, 2, 1]].map((x) => `<button class="btn" data-hkl="${x.join(",")}">(${x.join("")})</button>`).join("")}</div>`;
      const upd = () => { st.hkl = ["h", "k", "l"].map((id) => Math.max(-3, Math.min(3, parseInt($(id).value || "0", 10)))); buildModeFx(); };
      ["h", "k", "l"].forEach((id) => ($(id).oninput = upd));
      c.querySelectorAll("[data-hkl]").forEach((b) => (b.onclick = () => { st.hkl = b.dataset.hkl.split(",").map(Number); ["h", "k", "l"].forEach((id, i) => ($(id).value = st.hkl[i])); buildModeFx(); }));
      note = "A family of parallel planes sweeps through the cell. Each cuts the axes at a/h, a/k, a/l (0 = parallel); neighbouring planes are d = a / √(h² + k² + l²) apart.";
    }
  }
  const row = document.createElement("div"); row.className = "row";
  row.innerHTML = `<button class="btn" id="auto">${controls.autoRotate ? "Pause rotation" : "Rotate"}</button><button class="btn" id="replay">Replay</button>`;
  c.appendChild(row);
  $("auto").onclick = () => { controls.autoRotate = !controls.autoRotate; $("auto").textContent = controls.autoRotate ? "Pause rotation" : "Rotate"; };
  $("replay").onclick = () => { setTargets(); buildModeFx(); if (st.mode === "grow") autoCrystallise(); };
  $("note").textContent = note;
  legend();
}
function legend() {
  const d = S[st.s], kinds = [...new Set((st.list || []).map((a) => a.k))];
  const hex = (n) => "#" + n.toString(16).padStart(6, "0");
  let html = kinds.map((k) => `<span>${d.names ? d.names[k] : k === "carbon" ? "C" : "atom"}<i style="background:${hex(COL[k])}"></i></span>`).join("");
  if (st.mode === "pos" || st.mode === "share") { const sites = [...new Set((st.list || []).map((a) => a.site).filter(Boolean))]; html = sites.map((k2) => `<span>${st.mode === "pos" ? SITE[k2].tag + " · " : ""}${SITE[k2].name}<i style="background:${SITE[k2].css}"></i></span>`).join(""); }
  if (st.mode === "voids" && d.voids) html += `<span>octahedral void<i style="background:#ff775d"></i></span><span>tetrahedral void<i style="background:#e3b341"></i></span>`;
  $("legend").innerHTML = html;
}
// crystallise controls
function melt() { st.ttemp = 1; st.tdis = 1; st.phase = "liquid"; const r = $("tempR"); if (r) r.value = 1; }
let autoTimer = 0;
function autoCrystallise() { melt(); clearTimeout(autoTimer); if (!reduce) autoTimer = setTimeout(slowCool, 1900); }
function slowCool() { st.cool = { mode: "slow", t: performance.now() }; st.phase = "cooling"; }
function quench() { st.cool = { mode: "quench", t: performance.now() }; st.phase = "quench"; }

// ───────────────────────────── frame loop ─────────────────────────────
const clock = new THREE.Clock();
const tmpQ = new THREE.Quaternion(), up = new THREE.Vector3(0, 1, 0), dir = new THREE.Vector3();
const ease = (t) => (t <= 0 ? 0 : t >= 1 ? 1 : t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
function frameLoop() {
  const dt = Math.min(0.05, clock.getDelta());
  const t = (performance.now() - st.t0) / 1000;
  const s = st.s, d = S[s];
  const k = 1 - Math.exp(-dt * (reduce ? 30 : 7));

  // crystallise physics: temperature drives vibration, disorder blends lattice ↔ liquid
  if (st.mode === "grow") {
    if (st.cool) {
      const ct = (performance.now() - st.cool.t) / 1000;
      if (st.cool.mode === "slow") { const p = Math.min(1, ct / 5.5); st.ttemp = 1 - p; st.tdis = 1 - ease(Math.min(1, ct / 5)); if (p >= 1) { st.cool = null; st.phase = "crystal"; } }
      else { const p = Math.min(1, ct / .45); st.ttemp = 1 - p; if (p >= 1) { st.cool = null; st.phase = "glass"; } }
      const r = $("tempR"); if (r) r.value = st.ttemp;
    }
    st.temp += (st.ttemp - st.temp) * (1 - Math.exp(-dt * 4));
    st.dis += (st.tdis - st.dis) * (1 - Math.exp(-dt * 2.2));
    const order = st.dis < .08 ? "long-range order" : st.temp < .1 && st.dis > .6 ? "short-range order only" : st.temp > .5 ? "no order — liquid" : "ordering…";
    setBig(st.temp > .5 ? "liquid" : st.dis < .08 ? "crystal" : st.temp < .1 && st.dis > .6 ? "amorphous" : "…", `${order} · T = ${(st.temp * 100).toFixed(0)}%`);
  }

  for (let i = 0; i < MAX; i++) {
    const sl = slot[i];
    const started = t > sl.delay;
    let target = sl.tgt;
    if (st.mode === "grow" && sl.info) {
      const L = st.liquid[i];
      const time = performance.now() / 1000;
      const amp = .22 * st.temp + .01;
      target = tmpV.copy(sl.tgt).lerp(L, st.dis).add(tmpW.set(Math.sin(time * 2.6 + i * 1.7), Math.sin(time * 2.2 + i * 2.3), Math.cos(time * 2.4 + i * .9)).multiplyScalar(amp));
    }
    if (started) { sl.pos.lerp(target, st.mode === "grow" ? 1 - Math.exp(-dt * 14) : k); }
    let rT = sl.tr;
    if (st.mode === "pack" && sl.info) rT = (0.04 + (sl.tr / unit(s) - .04) * ease(Math.min(1, (t - .4) / 2.4))) * unit(s);
    sl.r += (rT - sl.r) * k;
    sl.col.lerp(sl.tcol, k);
    // highlight rules
    sl.tglow = 0;
    if (st.mode === "cn" && sl.info?.centre) sl.tglow = .9;
    if (st.mode === "plane" && sl.info && st.activePlane != null && !isHex(s)) {
      const p = sl.info.p; if (p) { const v = st.hkl[0] * p[0] + st.hkl[1] * p[1] + st.hkl[2] * p[2]; if (Math.abs(v - st.activePlane) < 1e-6) sl.tglow = 1; }
    }
    sl.glow += (sl.tglow - sl.glow) * (1 - Math.exp(-dt * 8));
    dummy.position.copy(sl.pos); dummy.scale.setScalar(Math.max(0.0001, sl.r)); dummy.updateMatrix();
    atoms.setMatrixAt(i, dummy.matrix); atoms.setColorAt(i, sl.col);
    dummy.scale.setScalar(Math.max(0.0001, sl.r * 1.22 * (sl.glow > .02 ? 1 : 0))); dummy.updateMatrix();
    glow.setMatrixAt(i, dummy.matrix); glow.setColorAt(i, tmpC.copy(sl.col).multiplyScalar(sl.glow * 0.45));
  }
  atoms.instanceMatrix.needsUpdate = true; atoms.instanceColor.needsUpdate = true;
  glow.instanceMatrix.needsUpdate = true; glow.instanceColor.needsUpdate = true; glowMat.opacity = .35;

  // atom-sharing: walls close in, then the tally runs
  if (st.mode === "share" && clipPlanes.length) {
    const p = ease(Math.min(1, Math.max(0, (t - .6) / 1.8)));
    clipPlanes.forEach((pl, j) => { pl.normal.copy(clipBase[j].normal); pl.constant = clipBase[j].constant + (1 - p) * 6; });
    shareTally(t);
  }
  // packing counter
  if (st.mode === "pack") {
    const g = ease(Math.min(1, Math.max(0, (t - .4) / 2.4)));
    if (d.pf) { const key = d.rT.metal ?? d.rT.carbon; const r = .04 + (key - .04) * g; setBig(`${(d.pf * Math.pow(r / key, 3) * 100).toFixed(1)}%`, g < 1 ? "spheres swelling until they touch…" : `packing efficiency · ${d.rel}`); }
    else setBig(g < 1 ? "…" : "contact", g < 1 ? "ions swelling until anion and cation touch" : `${d.rel} · ${d.ratio}`);
  }
  // coordination: bonds grow, then the polyhedron blooms
  if (st.mode === "cn" && st.bondEnds) {
    st.bondEnds.forEach((b, i) => {
      const p = ease(Math.min(1, Math.max(0, (t - .8 - i * .18) / .5)));
      const end = tmpV.copy(b.a).lerp(b.b, p);
      const len = Math.max(1e-4, b.a.distanceTo(end));
      dir.copy(end).sub(b.a).normalize();
      tmpQ.setFromUnitVectors(up, dir.lengthSq() ? dir : up);
      dummy.position.copy(b.a).lerp(end, .5); dummy.quaternion.copy(tmpQ); dummy.scale.set(.035, len, .035); dummy.updateMatrix();
      bonds.setMatrixAt(i, dummy.matrix); dummy.quaternion.identity();
    });
    bonds.instanceMatrix.needsUpdate = true;
    const n = st.bondEnds.length, shown = Math.min(n, Math.max(0, Math.floor((t - .8) / .18) + 1));
    setBig(String(shown), `nearest neighbours of the glowing ${d.names ? d.names[st.nn.centre.k] : "atom"} · ${d.poly} · distance ${st.nn.d.toFixed(3)} a`);
    const poly = fx.children[0];
    if (poly) { const pp = ease(Math.min(1, Math.max(0, (t - .8 - n * .18) / .9))); poly.scale.setScalar(Math.max(.001, pp)); }
  }
  // voids pulse
  if (st.mode === "voids") fx.children.forEach((o, i) => { if (o.userData.pulse == null) o.scale.setScalar(ease(Math.min(1, Math.max(0, (t - .3 - i * .08) / .6)))); });
  // plane sweep
  if (st.mode === "plane" && st.planes?.length) {
    const n = st.planes.length, idx = Math.floor(t / 2.4) % n;
    st.activePlane = st.planes[idx].userData.c;
    st.planes.forEach((g, i) => { const m0 = g.children[0].material, m1 = g.children[1].material, on = i === idx; m0.opacity += ((on ? .32 : .06) - m0.opacity) * k * .5; m1.opacity += ((on ? .9 : .25) - m1.opacity) * k * .5; });
    const [h, kk, l] = st.hkl, s2 = h * h + kk * kk + l * l;
    setBig(`d = a/${Number.isInteger(Math.sqrt(s2)) ? Math.sqrt(s2) : "√" + s2}`, `(${h} ${kk} ${l}) planes · d = ${(1 / Math.sqrt(s2)).toFixed(3)} a · glowing atoms lie on the lit plane`);
  } else st.activePlane = null;

  dust.rotation.y += dt * .01;
  frameMat.opacity = .6;
  controls.update();
  composer.render();
  updateLabels(t);
  requestAnimationFrame(frameLoop);
}
const tmpV = new THREE.Vector3(), tmpW = new THREE.Vector3(), tmpC = new THREE.Color();

let lastTally = "";
function shareTally(t) {
  const d = S[st.s], list = st.list || [];
  const step = Math.max(0, Math.min(list.length, Math.floor((t - 2.6) / .42) + 1));
  const groups = new Map(), totals = {};
  list.slice(0, step).forEach((a) => { const key = `${a.k}|${a.share}|${a.role}`; groups.set(key, (groups.get(key) || 0) + 1); });
  const lines = [];
  for (const [key, n] of groups) {
    const [kk, share, role] = key.split("|");
    lines.push(`${n} ${role}${n > 1 ? "s" : ""} × ${frac(+share)}${d.names ? " " + d.names[kk] : ""} = ${fmt(n * share)}`);
    totals[kk] = (totals[kk] || 0) + n * share;
  }
  const sum = Object.entries(totals).map(([kk, v]) => `${fmt(v)}${d.names ? " " + d.names[kk] : ""}`).join(" + ") || "0";
  const html = (lines.join("<br>") || "slicing the atoms…") + `<br><span class="hl">Z = ${sum}${step === list.length ? " ✓" : " …"}</span>`;
  if (html !== lastTally) { tally.innerHTML = html; lastTally = html; }
  const tot = Object.values(totals).reduce((a, b) => a + b, 0);
  setBig(step ? fmt(tot) : "", step === list.length ? "atoms that belong to this cell" : step ? "adding each atom's share…" : "the cell walls slice every atom");
}

// share fractions floating over the atoms
function updateLabels(t) {
  const want = st.mode === "share" || (st.mode === "pos" && st.showLabels) ? st.list.length : 0;
  while (labelEls.length < want) { const e = document.createElement("span"); e.className = "lbl"; labels.appendChild(e); labelEls.push(e); }
  const rect = renderer.domElement.getBoundingClientRect();
  labelEls.forEach((e, i) => {
    if (i >= want) { e.style.display = "none"; return; }
    const sl = slot[i]; const step = st.mode === "pos" ? Infinity : Math.floor((t - 2.6) / .42);
    if (i > step) { e.style.display = "none"; return; }
    const v = tmpV.copy(sl.pos).project(camera);
    if (v.z > 1) { e.style.display = "none"; return; }
    e.style.display = "";
    const a = st.list[i];
    const pos = st.mode === "pos";
    e.textContent = pos ? SITE[a.site].tag : frac(a.share);
    e.className = pos ? "lbl tag" : "lbl";
    e.style.background = pos ? SITE[a.site].css : "";
    e.style.transform = `translate(${(v.x * .5 + .5) * rect.width}px, ${(-v.y * .5 + .5) * rect.height}px) translate(-50%, ${st.mode === "pos" ? "-50%" : "-150%"})`;
  });
}

// ───────────────────────────── resize & start ─────────────────────────────
function resize() {
  const w = stage.clientWidth, h = Math.max(480, Math.min(720, w * .72));
  stage.style.height = h + "px";
  renderer.setSize(w, h); composer.setSize(w, h); bloom.setSize(w, h);
  camera.aspect = w / h; camera.updateProjectionMatrix();
}
addEventListener("resize", resize);
renderer.domElement.addEventListener("keydown", (e) => {
  const m = { ArrowLeft: [-.12, 0], ArrowRight: [.12, 0], ArrowUp: [0, -.1], ArrowDown: [0, .1] }[e.key];
  if (!m) return; e.preventDefault();
  const off = camera.position.clone().sub(controls.target); const sph = new THREE.Spherical().setFromVector3(off);
  sph.theta += m[0]; sph.phi = Math.max(.2, Math.min(Math.PI - .2, sph.phi + m[1])); off.setFromSpherical(sph); camera.position.copy(controls.target).add(off);
});
resize(); buildFrame(st.s); setTargets(); buildModeFx(); chips(); panel();
requestAnimationFrame(frameLoop);
