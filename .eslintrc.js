module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'eslint-config-airbnb-base',
  ],
  ignorePatterns: [
    'node_modules/*',
    'dist/*',
    'webpack.config.js',
  ],
};
