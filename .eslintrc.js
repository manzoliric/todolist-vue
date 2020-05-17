module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    jest: true
  },
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module"
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/essential",
    "prettier",
    "prettier/vue"
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        trailingComma: "none",
        tabWidth: 2,
        semi: true,
        singleQuote: true,
        arrowParens: "always"
      }
    ],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "comma-dangle": "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "next" }],
    "no-empty": "error",
    "no-var": "error",
    "no-unsafe-finally": "off",
    "no-useless-escape": "off"
  },
  plugins: ["prettier"]
};
