import getConfig from "next/config"


export const getAssetPath = (path) => {
    const { assetPrefix } = getConfig().publicRuntimeConfig;
    return `${assetPrefix}${path}`;
}
