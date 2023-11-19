import pkg from '../package.json';

import type { UserConfig } from 'vite';

import { svelte } from '@sveltejs/vite-plugin-svelte';

const config: UserConfig = {
    plugins: [
        svelte()
    ],

    define: {
        APP_VERSION: JSON.stringify(`${pkg.version}`)
    }
};

export default config;
