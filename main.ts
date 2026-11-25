// One Line, One Laugh: Roast Your Fridge — make.fun bounty entry.
// The program writes one line to /output/entry.txt: a roast of the
// entrant's own fridge. The fridge brags about a "quick chill" button
// that takes forty minutes, and the punchline redefines "quick" on a
// glacier's timescale — a specific, recognisable detail with the twist
// landing in the last few words.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My fridge has a \"quick chill\" button that takes forty minutes, which is quick only if you're a glacier.";

// The gate only accepts UTF-8 text of 1 to 200 characters, not only
// whitespace, as a single line: refuse to write anything that would fail it.
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.trim() === "" ||
  LINE.includes("\n")
) {
  throw new Error(`entry line fails the gate: ${LINE.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
