import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Forty years he mended nets no one thanked him for; " +
  "this morning his grandson hauled the season's biggest " +
  "catch in on his grandfather's line.";

// The gate wants 1 to 240 characters of real text, one line.
if (line.length < 1 || line.length > 240 || line.trim() !== line) {
  throw new Error(`entry line out of bounds: ${line.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(line);
