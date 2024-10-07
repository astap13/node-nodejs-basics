import { join } from "path";
import { createGunzip } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";

const decompress = async () => {
  const zipFilePath = join("src", "zip", "files", "archive.gz");
  const decomFilePath = join("src", "zip", "files", "fileDecompressed.txt");

  const gunzip = createGunzip();
  const source = createReadStream(zipFilePath);
  const destination = createWriteStream(decomFilePath);

  pipeline(source, gunzip, destination, (err) => {
    if (err) {
      console.error(err);
      process.exitCode = 1;
    }
  });
};

await decompress();
