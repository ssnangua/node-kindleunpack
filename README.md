# node-kindleunpack

Simple Node.js wrapper of **[KindleUnpack](https://github.com/kevinhendricks/KindleUnpack)** to unpack Amazon / Kindlegen generated ebooks:

- Kindle Mobi eBook File (`*.mobi`)
- Kindle PRC eBook File (`*.prc`)
- Kindle AZW eBook File (`*.azw`)
- Kindle Version 8 (`*.azw3`)
- Kindle AZW4 Print Replica (`*.azw4`)

## Install

```bash
npm install kindleunpack
```

## Usage

```javascript
const { unpack } = require("kindleunpack");

unpack("test.mobi", "output/ebook1");

unpack("test.azw3", "output/ebook2", {
  use_hd: false,
  split_combos: false,
  apnx_file: "",
  epub_version: "2",
  write_raw: false,
  dump: false,
});
```

### unpack(ebookFile[, outputDir][, options]): Promise

- `ebookFile` string - path to the desired Kindle/MobiPocket ebook
- `outputDir` string (optional) - output directory (default: ".")
- `options` object (optional)
  - `use_hd` boolean (optional) - use HDImages to overwrite lower resolution versions, if present
  - `split_combos` boolean (optional) - split combination mobis into older mobi and mobi KF8 ebooks
  - `apnx_file` string (optional) - path to a `.apnx` file that contains real page numbers associated with an azw3 ebook
  - `epub_version` `2`|`3`|`A`|`F` (optional) - pecify EPUB version to unpack to: `2`, `3` or `A` (for automatic) or `F` for Force to EPUB2, default is `2`
  - `write_raw` boolean (optional) - write raw data to the output folder
  - `dump` boolean (optional) - dump headers and other debug info to output and extra files

Returns `Promise<{ stdout: string; stderr: string }>`

## CLI

```bash
kindleunpack [-r -s -d -h -i] [-p APNX_FILE] ebookFile outputDir
```

### Arguments

- `ebookFile` - path to the desired Kindle/MobiPocket ebook
- `outputDir` - output directory (default: ".")

### Options

- `-i` - use HDImages to overwrite lower resolution versions, if present
- `-s` - split combination mobis into older mobi and mobi KF8 ebooks
- `-r` - write raw data to the output folder
- `-d` - dump headers and other debug info to output and extra files
- `--epub_version=` - specify EPUB version to unpack to: `2`, `3` or `A` (for automatic) or `F` for Force to EPUB2, default is `2`
- `-p APNX_FILE` - path to a `.apnx` file that contains real page numbers associated with an azw3 ebook (optional). Note: many apnx files have arbitrarily assigned page offsets that will confuse KindleUnpack if used

## Development

### Build kindleunpack executable file

```bash
pip3 install -i https://mirrors.aliyun.com/pypi/simple/ pyinstaller
pyinstaller -F "kindleunpack.py"
```
