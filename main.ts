import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "I joined the gym for the sauna and told everyone it was for the weights — now I pay $40 a month to sit in a hot wooden box and lie about it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
console.log(`wrote ${[...joke].length} characters to /output/entry.txt`);
