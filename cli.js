#!/usr/bin/env node

const exec = require("util").promisify(require("child_process").exec);
const path = require("path");

const args = process.argv.slice(2);

const cmd =
  process.platform === "win32"
    ? `"${path.join(__dirname, "dist/kindleunpack.exe")}"`
    : `py ${path.join(__dirname, "lib/kindleunpack.py")}`;

const help = `Usage: kindleunpack [-r -s -d -h -i] [-p APNX_FILE] ebookFile outputDir

Unpack Amazon / Kindlegen generated ebooks.

Arguments:
  ebookFile       path to ebook file
  outputDir       output directory

Options:
  -h, --help      display help for command
  -r              write raw data to the output folder
  -s              split combination mobis into older mobi and mobi KF8 ebooks
  -d              dump headers and other debug info to output and extra files
  -i              use HDImages to overwrite lower resolution versions, if present
  --epub_version= specify EPUB version to unpack to: 2, 3 or A (for automatic) or F for Force to EPUB2, default is 2
  -p              APNX_FILE path to a .apnx file that contains real page numbers associated with an azw3 ebook (optional). Note: many apnx files have arbitrarily assigned page offsets that will confuse KindleUnpack if used`;

if (args.includes("-h") || args.includes("--help")) {
  console.log(help);
} else {
  exec(`${cmd} ${args.join(" ")}`)
    .then(({ stdout, stderr }) => {
      if (stderr) console.error(stderr);
      else console.log(stdout);
    })
    .catch((err) => {
      console.error(err);
    });
}
