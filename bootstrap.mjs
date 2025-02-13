import child_process from 'child_process';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
console.log(__dirname, '__dirname', process.cwd());
console.log(import.meta);

const depsFile = 'package.json';
const baseConfig = {
	stdio: 'inherit', cwd: process.cwd()
};

/**
 * 环境默认不含有 pnpm
 * 启用 corepack pnpm（node -v: v20.18.2 in actions）：https://github.com/pnpm/pnpm/issues/9029
*/
child_process.execSync('npm i pnpm -g', baseConfig);

if (!(await fs.readFile(path.resolve(depsFile)))) {
	child_process.execSync('pnpm init', baseConfig);
}

child_process.execSync('pnpm i @tardis-ksh/tencent @actions/core -S', baseConfig);

import('./index.mjs');
