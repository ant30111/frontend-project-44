import js from "@eslint/js";
import globals from "globals";
import stylistic from "@stylistic/eslint-plugin";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: {
      js,
      "@stylistic": stylistic,
    },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      "@stylistic/semi": ["error", "always"],
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/indent": ["error", 2],
    },
  },
]);
