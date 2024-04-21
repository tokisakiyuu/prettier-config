import organizeImports from 'prettier-plugin-organize-imports'

export default {
    "useTabs": false,
    "semi": false,
    "singleQuote": true,
    "jsxSingleQuote": false,
    "quoteProps": "as-needed",
    "bracketSpacing": true,
    "arrowParens": "avoid",
    "trailingComma": "all",
    "plugins": [organizeImports]
  }
  