module.exports = {
  env: {
    commonjs: true,
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  globals: {},
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: "module",
  },
  plugins: ["react", "import", "react-hooks"],
  ignorePatterns: ["node_modules/"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-var-requires": 0,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
