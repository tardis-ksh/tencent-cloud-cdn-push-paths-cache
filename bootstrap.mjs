import child_process from 'child_process';

const baseConfig = {
	stdio: 'inherit', cwd: process.cwd()
};

// 环境默认不含有 pnpm
child_process.execSync('corepack enable', baseConfig);
child_process.execSync('pnpm init', baseConfig);
child_process.execSync('pnpm i @tardis-ksh/tencent @actions/core -S --no-audit --no-progress', baseConfig);

import('./index.mjs');
