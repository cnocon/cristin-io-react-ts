module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  //   env: {
  //     es6: true,
  //     node: true,
  //   },
  extends: [
    'prettier',
    'airbnb-typescript',
    'airbnb-typescript/base',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['.eslintrc.js'], // Ignore itself to prevent TS errors
  plugins: ['prettier', 'eslint-plugin-import'],
  rules: {
    'one-var': 'off',
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    // 'import/no-extraneous-dependencies': 'off',
  },
}
