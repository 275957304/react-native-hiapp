module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: [
    'standard',
    'plugin:react/recommended'
  ],
  plugins: [
    'react',
    'react-native'
  ],
  rules: {
    'semi': [2, 'never'],
    'comma-dangle': 0,
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'space-before-function-paren': 0,
    'no-new': 0,
    'handle-callback-err': 0,
    'react/prop-types': 0,
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2
  },
  globals: {
    storage: true
  }
}