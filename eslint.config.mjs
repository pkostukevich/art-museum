import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  {files: ["**/*.{ts,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    }
  },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    ignores: ["config-overrides.js", "webpack.config.js", "jest.config.ts"],
  },
  {
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "@typescript-eslint/explicit-function-return-type": "error", 
      "@typescript-eslint/no-unused-vars": [
        "error",
          { argsIgnorePattern: "^_" }, 
        ],
      "@typescript-eslint/typedef": [
        "error",
          {
            parameter: true, 
            propertyDeclaration: true,
            variableDeclaration: true,
            memberVariableDeclaration: true,
            variableDeclarationIgnoreFunction: true,
          },
        ],
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-var-requires": "off",
      "react/prop-types": "off"
    },
  },
];