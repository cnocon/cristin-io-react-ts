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
    // 'airbnb-typescript/base',
    'airbnb-typescript',
    'plugin:prettier/recommended',
    'prettier',
  ],
  ignorePatterns: ['.eslintrc.js'], // Ignore itself to prevent TS errors
  plugins: ['prettier'],
  rules: {
    'one-var': 'off',
    'import/prefer-default-export': 'off',
    'prettier/prettier': 'error',
  },
}
