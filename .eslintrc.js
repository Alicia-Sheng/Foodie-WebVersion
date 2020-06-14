module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off'
  },
  parser: "babel-eslint",
  plugins: ['react'],
  extends: ['eslint:recommended', 'plugin:react/recommended'],
};
