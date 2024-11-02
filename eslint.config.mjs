import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  {files: ["**/*.{mjs,cjs,ts,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    rules: {
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
  }
];