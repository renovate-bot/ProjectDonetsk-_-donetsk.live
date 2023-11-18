import type { Config } from 'tailwindcss';

const config: Config = {
    mode: `jit`,
    content: [
        `./src/**/*.{js,ts,svelte}`
    ],
    prefix: `tw-`,
    theme: {
        extend: {}
    },
    plugins: []
};

export default config;
