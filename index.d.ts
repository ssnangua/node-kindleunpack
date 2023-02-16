import { PromiseWithChild } from "child_process";

/**
 * UnpackOptions
 */
export declare interface UnpackOptions {
  /**
   * use HDImages to overwrite lower resolution versions, if present
   */
  use_hd?: boolean;
  i?: boolean;
  /**
   * split combination mobis into older mobi and mobi KF8 ebooks
   */
  split_combos?: boolean;
  s?: boolean;
  /**
   * path to a `.apnx` file that contains real page numbers associated with an azw3 ebook
   */
  apnx_file?: string;
  p?: string;
  /**
   * specify EPUB version to unpack to: `2`, `3` or `A` (for automatic) or `F` for Force to EPUB2, default is `2`
   */
  epub_version?: 2 | 3 | "2" | "3" | "A" | "F";
  /**
   * write raw data to the output folder
   */
  write_raw?: boolean;
  r?: boolean;
  /**
   * dump headers and other debug info to output and extra files
   */
  dump?: boolean;
  d?: boolean;
}

/**
 * unpack Amazon / Kindlegen generated ebooks
 * @param ebookFile - path to the desired Kindle/MobiPocket ebook
 * @param outputDir - output directory (default: ".")
 * @param options   - UnpackOptions
 */
export declare function unpack(
  ebookFile: string,
  outputDir?: string,
  options?: UnpackOptions | string
): PromiseWithChild<{ stdout: string; stderr: string }>;
