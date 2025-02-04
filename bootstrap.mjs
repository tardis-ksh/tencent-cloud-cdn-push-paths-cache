import child_process from 'child_process';
import fs from 'fs/promises'
import path from 'path'

const depsFile = 'package.json';
const baseConfig = {
	stdio: 'inherit', cwd: process.cwd()
};

// 环境默认不含有 pnpm
child_process.execSync('la -la', baseConfig);
child_process.execSync('corepack cache clean', baseConfig);
child_process.execSync('corepack', baseConfig);
child_process.execSync('corepack enable --force', baseConfig);

if (!(await fs.readFile(path.resolve(depsFile)))) {
	child_process.execSync('pnpm init', baseConfig);
}

child_process.execSync('pnpm i @tardis-ksh/tencent @actions/core -S --no-audit --no-progress', baseConfig);

import('./index.mjs');
