/**
 * These rules enforce the Hack Reactor Style Guide
 *
 * Visit this repo for more information:
 *   https://github.com/reactorcore/eslint-config-hackreactor
 */

module.exports = {
  extends: 'airbnb',
  rules: {
    "arrow-parens": ["error", "as-needed"],
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    "no-console": ["error", {allow: ["log", "warn", "error"]}],
    "no-plusplus": "off",
  },
  env: {
    browser: true,
    node: true,
  },
};