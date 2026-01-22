const prettier = require('eslint-plugin-prettier/recommended')
const eslintConfigPrettier = require('eslint-config-prettier/flat')

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
      files: ['**/*.ts', '**/*.tsx']
    },

    {
      files: ['**/*.ts'],
      rules: {
        '@typescript-eslint/space-before-function-paren': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-magic-numbers': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        'eslint-comments/require-description': 'off',
        'no-console': 'off',
        'prettier/prettier': 'error'
      }
    }
  ]
})()
