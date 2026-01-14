import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import prettier from "eslint-config-prettier";

export default defineConfig([
  // Next.js core rules
  ...nextVitals,

  // Disable ESLint rules that conflict with Prettier
  prettier,

  // Ignore build artifacts
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "dist/**",
    "node_modules/**",
    "next-env.d.ts"
  ])
]);
