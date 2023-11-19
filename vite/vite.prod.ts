import common from './vite.common';

import { mergeConfig, type UserConfig } from 'vite';

const config: UserConfig = {
    resolve: {
        dedupe: [`svelte`]
    },

    build: {
        manifest: `manifest.json`,
        rollupOptions: {
            output: {
                entryFileNames: `assets/[name].js`
            }
        }
    },

    define: {
        API_URL: JSON.stringify(`/api`)
    }
};

export default mergeConfig(common, config);
