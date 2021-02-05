/* eslint-env node */
module.exports = {
  root: true,
  env: {
    'es6': true,
    'react-native/react-native': true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:jsx-control-statements/recommended',
    '@lacussoft',
  ],
  globals: {
    alert: true,
    console: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: [
    'import',
    'react',
    'react-hooks',
    'react-native',
    'jsx-control-statements',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-use-before-define': 'off',
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-no-undef': [2, { allowGlobals: true }],
    'react/prop-types': 'off',
  },
}
