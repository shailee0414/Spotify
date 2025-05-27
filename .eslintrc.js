// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  ignorePatterns: ['/dist/*', '*/node_modules/*'],
  rules: {
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/prefer-stateless-function': [2, { ignorePureComponents: true }],
    'react/forbid-prop-types': 0,
    'react/destructuring-assignment': 1,
    'react/no-typos': 1,
    'react-native/no-raw-text': 0,
    'react-native/sort-styles': 0,
    'react-native/no-inline-styles': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'import/no-unresolved': 0,
    'no-console': 'error',
    'linebreak-style': 0,
    'prettier/prettier': 'error',
    'arrow-body-style': 0,
    'no-use-before-define': ['error', { variables: false }],
    eqeqeq: 'off',
    'react/require-default-props': 0,
    'react/jsx-no-leaked-render': [
      'error',
      { validStrategies: ['ternary', 'coerce'] },
    ],
    'react/jsx-props-no-spreading': 2,
  },
  extends: ['universe', 'universe/shared/typescript-analysis', 'expo'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.d.ts'],
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  ],
  plugins: [
    'react',
    'import',
    'react-native',
    'prettier',
    '@typescript-eslint',
    'eslint-plugin-no-inline-styles',
    'react-hooks',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  parser: '@typescript-eslint/parser',
};
