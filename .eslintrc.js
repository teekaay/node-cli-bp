module.exports = {
  env: {
    browser: false,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaFeatures: {

    },
    sourceType: 'module',
  },
  plugins: [
    'security',
    'ava',
  ],
  rules: {
    'max-len': [1, 120, 2, { ignoreComments: true }],
    'no-unused-vars': [1],
    'no-trailing-spaces': [2],
  },
  extends: [
    'eslint:recommended',
    'plugin:security/recommended'
  ],
  globals: {

  },
};
