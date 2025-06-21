import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";

export default [
  js.configs.recommended,

  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  },
  {
    files: ["**/*.test.{js,mjs,cjs,jsx}", "**/__tests__/**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.node,
      },
    },
  },
  pluginReact.configs.flat.recommended,
  {
    files: ["webpack.config.js"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];