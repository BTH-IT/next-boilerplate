import pluginJs from '@eslint/js';
import pluginImport from 'eslint-plugin-import';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    languageOptions: { globals: globals.browser },
  },
  {
    plugins: {
      import: pluginImport,
    },
    rules: {
      // Code format
      semi: ['error', 'always'],
      quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
      'max-len': ['error', { code: 500 }],
      'brace-style': ['error', '1tbs'],
      'object-curly-spacing': ['error', 'always'],

      // Import rules
      'import/order': ['error', { groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'], 'newlines-between': 'always' }],
      'import/no-duplicates': 'error',
      'import/no-unresolved': 'off',

      // Best practices
      'no-console': 'warn',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'no-multi-spaces': 'error',
      'keyword-spacing': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-arrow-callback': 'error',
      'promise/prefer-await-to-then': 'warn',
      'no-await-in-loop': 'error',

      // TypeScript rules
      '@typescript-eslint/no-explicit-any': 'error',

      // React rules
      'react/react-in-jsx-scope': 'off',
      'react-hooks/exhaustive-deps': 'warn',
      'react/no-did-mount-set-state': 'error',
    },
  }
];
