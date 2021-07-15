//* [Linting ESLint] https://eslint.org/

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended' /* https://github.com/typescript-eslint/typescript-eslint#readme */,
    // 'airbnb-base' /* https://github.com/airbnb/javascript */,
    'prettier',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: ['.eslintrc.js', 'dist/', 'node_modules/'],
  rules: {
    '@typescript-eslint/interface-name-prefix':
      'off' /* https://github.com/bradzacher/eslint-plugin-typescript/blob/master/docs/rules/interface-name-prefix.md */,
    '@typescript-eslint/explicit-function-return-type':
      'off' /* https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md */,
    '@typescript-eslint/explicit-module-boundary-types':
      'off' /* https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md */,
    '@typescript-eslint/no-explicit-any':
      'off' /* https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md */,
  },
}
