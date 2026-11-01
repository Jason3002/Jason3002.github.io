import { defineConfig } from 'oxfmt'

/**
 * @module oxfmt.config.ts
 * @description Oxfmt configuration for the application source code.
 *
 * For more information regarding Oxfmt:
 * @see https://oxc.rs/docs/guide/usage/formatter.html
 *
 * For more information on Oxfmt configuration options:
 * @see https://oxc.rs/docs/guide/usage/formatter/config-file-reference.html
 */
export default defineConfig({
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'lf',
  htmlWhitespaceSensitivity: 'css',
  jsxSingleQuote: true,
  printWidth: 80,
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  semi: false,
  singleAttributePerLine: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
  sortPackageJson: false,
  ignorePatterns: ['node_modules', 'dist', 'bun.lock'],
})
