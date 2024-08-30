import prettierPlugin from 'eslint-plugin-prettier';
import eslintJs from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';

const { configs: eslintRecommended } = eslintJs;

export default [
  {
    ignores: ['node_modules/**'],
  },
  eslintRecommended.recommended,
  prettierConfig,
  {
    files: ['**/*.js', '**/*.mjs'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        node: true,
        __dirname: 'readonly',
        require: 'readonly',
        module: 'readonly',
        process: 'readonly',
        console: 'readonly',
      },
    },
    plugins: {
      prettier: prettierPlugin,
      import: importPlugin,
    },
    rules: {
      'prettier/prettier': 'warn',
      'import/no-unresolved': 'error',
      'no-unused-vars': 'off',
      'no-console': 'off',
    },
  },
];
