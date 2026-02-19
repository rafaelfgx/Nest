import eslint from "@eslint/js";
import eslintTypescript from "typescript-eslint";
import eslintPrettier from "eslint-config-prettier";
import globals from "globals";

export default [
    {
        ignores: ["*.mjs", "node_modules", "coverage", "dist", "test"]
    },
    eslint.configs.recommended,
    ...eslintTypescript.configs.strict,
    ...eslintTypescript.configs.stylistic,
    eslintPrettier,
    {
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.jest
            },
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname
            }
        }
    },
    {
        rules: {
            "@typescript-eslint/no-extraneous-class": "off"
        }
    }
];
