import fs from 'fs';
const html = fs.readFileSync('dist/404.html', 'utf8');
const robots = html.match(/<meta\s+name=["']robots["'][^>]*>/i);
const canon = html.match(/<link\s+rel=["']canonical["'][^>]*>/i);
console.log('Robots tag:', robots ? robots[0] : 'NONE');
console.log('Canonical tag:', canon ? canon[0] : 'NONE (CORRECT)');

