module.exports = {
  root: true,
  extends: ['@react-native-community', 'standard'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'prettier/prettier': 0,
    'jsx-quotes': ['error', 'prefer-single']
  }
}
