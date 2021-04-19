// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');

const prefix = process.env.ASSET_PREFIX || ''

console.log(`Asset path: ${prefix}`);

module.exports = withNx({
    basePath: prefix,
    assetPrefix: `${prefix}/`,
    nx: {
        // Set this to false if you do not want to use SVGR
        // See: https://github.com/gregberge/svgr
        svgr: true,
    },

    publicRuntimeConfig: {
        assetPrefix: `${prefix}/`,
    },

    sassOptions: {
        includePaths: ['./styles'],
        prependData: `@import "~@site-styles/globals.scss";`,
    }
});
