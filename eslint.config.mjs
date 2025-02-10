import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { FlatCompat } from '@eslint/eslintrc'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import importPlugin from 'eslint-plugin-import'
import prettier from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  {
    ignores: ['src/app/**/*.css', 'src/core/**/*.css', '.next/**/*'],
  },
  ...compat.extends('next', 'next/core-web-vitals', 'prettier'),
  {
    plugins: {
      react,
      prettier,
      '@typescript-eslint': typescriptEslint,
      import: importPlugin,
    },
    rules: {
      'import/no-unresolved': 'error',
      'import/default': 'error',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal'],
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  },
]

export default eslintConfig
