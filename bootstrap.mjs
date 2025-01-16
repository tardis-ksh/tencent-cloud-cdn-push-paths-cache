import child_process from 'child_process';

// 环境默认不含有 pnpm
child_process.execSync('corepack enable', { stdio: 'inherit', cwd: process.cwd() });
child_process.execSync('pnpm install', { stdio: 'inherit', cwd: process.cwd() });

import('./index.mjs');
