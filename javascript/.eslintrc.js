//* [Linting ESLint] https://eslint.org/

module.exports = {
  extends: [
    'airbnb-base' /* https://github.com/airbnb/javascript */,
    'plugin:node/recommended',
    'prettier',
  ],
  ignorePatterns: ['.eslintrc.js', 'node_modules/'],
}
