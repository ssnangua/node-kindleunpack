const exec = require("util").promisify(require("child_process").exec);
const fs = require("fs");
const path = require("path");

const cmd =
  process.platform === "win32"
    ? `"${path.join(__dirname, "dist/kindleunpack.exe")}"`
    : `py "${path.join(__dirname, "lib/kindleunpack.py")}"`;

function unpack(ebookFile, outputDir = ".", options = "") {
  if (typeof options === "object" && options) {
    const p = options.p || options.apnx_file;
    const o = [];
    if (options.r || options.write_raw) o.push("-r");
    if (options.s || options.split_combos) o.push("-s");
    if (options.d || options.dump) o.push("-d");
    if (options.i || options.use_hd) o.push("-i");
    if ([2, 3, "2", "3", "A", "F"].includes(options.epub_version))
      o.push(`--epub_version ${options.epub_version}`);
    if (typeof p === "string" && p.trim().length > 0) o.push(`-p "${p}"`);
    options = o.join(" ");
  }
  fs.mkdirSync(outputDir, { recursive: true });
  return exec(`${cmd} ${options || ""} "${ebookFile}" "${outputDir}"`);
}

module.exports = { unpack };
