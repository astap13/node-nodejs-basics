import { cp } from "node:fs";
import { access, mkdir } from "node:fs/promises";
import { join } from "path";

const copy = async () => {
  const srcFolderPath = join("src", "fs", "files");
  const destFolderPath = join("src", "fs", "files_copy");

  try {
    await access(destFolderPath);
    throw new Error('FS operation failed');
  } catch (err) {
    if (err.code === 'ENOENT') {
      await mkdir(destFolderPath, { recursive: true });
    } else {
      throw err;
    }
  }

  cp(srcFolderPath, destFolderPath, { recursive: true }, (err) => {
    if (err) {
      throw new Error('FS operation failed');
    } else {
      console.log('Directory copied successfully');
    }
  });
};

await copy();
