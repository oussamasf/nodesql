module.exports = {
  extends: ["eslint:recommended", "plugin:import/recommended", "prettier", "plugin:prettier/recommended"],
  plugins: ["import", "prettier"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    node: true,
    commonjs: true,
    es6: true,
  },
  rules: {
    "prettier/prettier": "error",
    "import/no-unresolved": [2, { commonjs: true, amd: true }],
    "import/named": 2,
    "import/namespace": 2,
    "import/default": 2,
    "import/export": 2,

    quotes: ["warn", "double"],
    "no-console": "warn",
    semi: ["error", "always"],
    "comma-spacing": ["warn", { before: false, after: true }],
    "semi-spacing": ["error", { before: false, after: true }],
    "key-spacing": ["error", { beforeColon: false, afterColon: true }],
    "switch-colon-spacing": ["error", { after: true, before: false }],
    "object-curly-spacing": ["error", "always", { objectsInObjects: true }],
    "multiline-ternary": ["error", "always-multiline"],
    "arrow-body-style": ["error", "as-needed"],
    "no-empty": "error",
    "no-unused-vars": ["error", { vars: "all", args: "after-used", ignoreRestSiblings: false }],
    "no-undef": "error",
    curly: ["error", "multi-or-nest", "consistent"],
  },
};
