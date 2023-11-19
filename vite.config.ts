import { defineConfig } from 'vite';

import prodConfig from './vite/vite.prod';
import devConfig from './vite/vite.dev';

export default defineConfig(({ command }) => {
    if (command === `serve`) return devConfig;
    else return prodConfig;
});
