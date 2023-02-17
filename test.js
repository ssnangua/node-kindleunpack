const { unpack } = require("./index.js");

unpack("test.mobi", "output/ebook1");
unpack("test2.azw3", "output/ebook2", {
  use_hd: false,
  split_combos: false,
  write_raw: false,
  dump: false,
  epub_version: "2",
  apnx_file: "",
}).then(({ stdout }) => {
  console.log(stdout);
});
