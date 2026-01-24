const prettier = require('eslint-plugin-prettier/recommended')
const eslintConfigPrettier = require('eslint-config-prettier/flat')
const drizzlePlugin = require('eslint-plugin-drizzle')

module.exports = (async function config() {
  const { default: love } = await import('eslint-config-love')

  return [
    eslintConfigPrettier,
    prettier,

    {
      ignores: ['node_modules', '.github', '.husky', '.vscode', 'dist', 'build']
    },
    {
      ...love,
      files: ['**/*.ts']
    },
    {
      files: ['**/handlers/*.ts'],
      plugins: {
        drizzle: drizzlePlugin
      },
      rules: {
        'drizzle/enforce-delete-with-where': 'error',
        'drizzle/enforce-update-with-where': 'error',
        ...drizzlePlugin.configs.recommended.rules
      }
    },
    {
      files: ['**/*.ts'],
      rules: {
        '@typescript-eslint/space-before-function-paren': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-magic-numbers': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@eslint-community/eslint-comments/require-description': 'off',
        '@typescript-eslint/prefer-destructuring': 'off',
        'no-console': 'off',
        'prettier/prettier': 'error'
      }
    }
  ]
})()
