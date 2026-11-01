import { defineConfig } from 'oxlint'

/**
 * @module oxlint.config.ts
 * @description Oxlint configuration for the application source code.
 *
 * For more information regarding Oxlint:
 * @see https://oxc.rs/docs/guide/introduction.html
 *
 * For more information on Oxlint configuration options:
 * @see https://oxc.rs/docs/guide/usage/linter/config-file-reference.html
 *
 * For more information on available rules:
 * @see https://oxc.rs/docs/guide/usage/linter/rules.html
 */
export default defineConfig({
  categories: {
    correctness: 'error',
  },
  ignorePatterns: ['node_modules', 'dist'],
  options: {
    typeAware: true,
    typeCheck: true,
  },
  plugins: ['react', 'typescript'],
  rules: {
    'typescript/no-unnecessary-type-assertion': 'warn',
    'typescript/prefer-nullish-coalescing': 'warn',
    'typescript/prefer-optional-chain': 'warn',
    'typescript/consistent-type-imports': ['warn', { prefer: 'type-imports' }],
    'typescript/no-non-null-assertion': 'warn',
    'typescript/no-explicit-any': 'warn',

    'react/rules-of-hooks': 'error',
    'react/only-export-components': ['warn', { allowConstantExport: true }],

    'react/exhaustive-deps': 'warn',
    'react/jsx-no-target-blank': 'off',
    'react/no-unescaped-entities': 'off',
    'react/react-in-jsx-scope': 'off',

    'no-var': 'error',
    'prefer-const': 'error',
    'no-eval': 'error',
    'no-new-func': 'error',
    'no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    eqeqeq: ['error', 'always'],
  },
})
