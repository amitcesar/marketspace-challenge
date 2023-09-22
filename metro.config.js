/* eslint-disable no-undef */
// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

module.exports = (async () => {
   const {
      resolver: { sourceExts , assetExts},
   } = config;

   return {
      ...config,
      transformer: {
         babelTransformerPath: require.resolve("react-native-svg-transformer")
       },
      resolver: {
         ...config.resolver,
         assetExts: assetExts.filter((ext) => ext !== "svg"),
         sourceExts: [...sourceExts, 'mjs', 'svg'],
      },
   };
})();