/* eslint-disable @typescript-eslint/no-var-requires */
const postcssImport = require(`postcss-import`);
const postcssPresetEnv = require(`postcss-preset-env`);
const tailwindcss = require(`tailwindcss`);

export default {
    plugins: [
        postcssImport,
        tailwindcss,
        postcssPresetEnv({
            features: {
                [`nesting-rules`]: {
                    noIsPseudoSelector: false
                }
            }
        })
    ]
};
