/**
 * This config is for hybrid react-native + react-native-web apps.
 */
module.exports = {
  extends: [
    './shared/core.js',
    './shared/typescript.js',
    './shared/react.js',
    './shared/native.js',
    './shared/prettier.js',
  ],
  overrides: [
    {
      files: ['*.web.*'],
      env: {
        browser: true,
      },
    },
  ],
};
