import common from './vite.common';

import { mergeConfig, type UserConfig } from 'vite';

const config: UserConfig = {
    server: {
        port: 3000,
        strictPort: true
    },
    preview: {
        port: 3000,
        strictPort: true
    },

    define: {
        API_URL: JSON.stringify(`http://localhost:8080/api`)
    }
};

export default mergeConfig(common, config);
