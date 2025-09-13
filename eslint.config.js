import antfu from '@antfu/eslint-config'
import globals from 'globals'

export default antfu({
  formatters: true,
  unocss: true,
  react: true,
}, {
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
})
