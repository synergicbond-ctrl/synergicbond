// Builds the single-file lab: node content/class10-lab/build.mjs  ->  public/class10-science-lab.html
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const here = dirname(fileURLToPath(import.meta.url)), src = join(here, 'src');
const rd = f => readFileSync(join(src, f), 'utf8');
const data = JSON.stringify(JSON.parse(rd('data.json')));
const files = readdirSync(src);
const pick = re => files.filter(f => re.test(f)).sort();
const js = ['engine.js', ...pick(/^extra.*\.js$/), ...pick(/^scenes.*\.js$/), 'practice.js', 'ui.js'].map(f => `/* ---- ${f} ---- */\n` + rd(f)).join('\n');
let html = rd('template.html');
// function replacers: the data/js contain "$&"-style sequences that String.replace would otherwise interpret
html = html.replace('/*CSS*/', () => rd('style.css')).replace('/*DATA*/', () => `const ACTIVITIES = ${data};\nconst EXTRA = {};`).replace('/*JS*/', () => js);
writeFileSync(join(here, '..', '..', 'public', 'class10-science-lab.html'), html);
console.log('built', (html.length / 1024).toFixed(0) + ' KB');
