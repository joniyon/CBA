// Generates React icon components from raw SVGs.
// Source:  public/icons-src/*.svg  ->  Output: components/icons/*.tsx
// Uses @svgr/cli (declared in devDependencies). Icons use currentColor so
// they inherit color from your tokens.
import { execSync } from "node:child_process";

execSync(
  [
    "npx @svgr/cli",
    "--typescript",
    "--icon",
    '--replace-attr-values "#000=currentColor"',
    "--out-dir components/icons",
    "public/icons-src",
  ].join(" "),
  { stdio: "inherit" }
);
console.log("icon components generated into components/icons");
