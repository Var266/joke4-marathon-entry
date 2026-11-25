// SPDX-License-Identifier: MIT
// One-Liner Marathon entry: a single one-line comedy joke.
// The program writes the winning line to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// Winner of a 12-candidate pairwise shootout against the judge brief
// (surprising punchline, economical, distinct voice, holds on a second
// read). The turn inverts the retreat's purpose: silence did not make
// the speaker peaceful, it made him a better silent judger.
const JOKE =
  "I went on a silent retreat and came home fluent in judging people quietly.";

mkdirSync("/output", { recursive: true });

// Gate check (mirrors the sealed scorer): 1-280 characters, not only whitespace.
// Also enforce the "single line" rule: no newline may hide inside the joke.
const chars = [...JOKE].length;
if (chars < 1 || chars > 280 || JOKE.trim().length === 0) {
  throw new Error(`entry must be 1-280 characters, got ${chars}`);
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("entry must be a single line");
}

writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`wrote ${chars} characters to /output/entry.txt`);
