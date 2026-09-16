import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));

function filesIn(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? filesIn(file) : [file];
  });
}

// Windows may preserve different casing on disk than Git will deploy to Linux.
let trackedFiles = [];
try {
  trackedFiles = execFileSync("git", ["ls-files", "-z", "--", "public"], {
    cwd: root,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  }).split("\0").filter(Boolean);
} catch {
  console.warn("Git filenames unavailable; checking exact filenames on disk.");
}

const trackedByName = new Map(trackedFiles.map((file) => [file.toLowerCase(), file]));
const publicFiles = filesIn(path.join(root, "public")).map((file) => {
  const relative = path.relative(root, file).split(path.sep).join("/");
  return trackedByName.get(relative.toLowerCase()) ?? relative;
});
const urls = publicFiles.map((file) => file.slice("public".length));
const exactUrls = new Set(urls);
const urlsByName = new Map(urls.map((url) => [url.toLowerCase(), url]));
const errors = new Set();
let checked = 0;

for (const file of filesIn(path.join(root, "src"))) {
  if (!/\.(?:[cm]?[jt]sx?|css|json)$/.test(file)) continue;
  const source = readFileSync(file, "utf8");
  for (const match of source.matchAll(/\/images\/[^\s"'`<>?#)]+\.(?:png|jpe?g|webp|avif|gif|svg|ico)\b/gi)) {
    const url = match[0];
    checked += 1;
    if (exactUrls.has(url) && existsSync(path.join(root, "public", url))) continue;
    const expected = urlsByName.get(url.toLowerCase());
    const reason = expected ? `use ${expected} (case-sensitive)` : "file is missing";
    errors.add(`${path.relative(root, file)}: ${url} — ${reason}`);
  }
}

if (errors.size) {
  console.error(`Image path check failed:\n${[...errors].join("\n")}`);
  process.exitCode = 1;
} else {
  console.log(`Checked ${checked} image references: all files exist with deployment-safe casing.`);
}
