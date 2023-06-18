module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'next',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 14,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        printWidth: 86,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'none',
        arrowParens: 'avoid',
        semi: false,
        endOfLine: 'auto',
        parser: 'typescript',
        objectShortHand: true,
        semicolons: false
      }
    ],
    'space-before-function-paren': 'off',
    'comma-dangle': 'off',
    camelcase: 'off',
    'no-use-before-define': 'off',
    'no-undef': 'off',
    '@typescript-eslint/no-use-before-define': ['off'],
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/comma-spacing': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }
    ]
  }
}
