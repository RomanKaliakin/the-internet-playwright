import pluginJs from '@eslint/js';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintPluginPrettier.configs.recommended, // use eslint-plugin-prettier to enforce Prettier rules
  {
    rules: {
      'prettier/prettier': ['error', { singleQuote: true }], // enforce Prettier formatting
    },
  },
];
