import { rename as fsRename } from "node:fs";
import { access } from "node:fs/promises";
import { join } from "path";

const rename = async () => {
  const wrongFilePath = join("src", "fs", "files", "wrongFilename.txt");
  const properFilePath = join("src", "fs", "files", "properFilename.md");
  try {
    await access(properFilePath);
    throw new Error("FS operation failed");
  } catch (error) {
    if (error.code !== "ENOENT") {
      throw error;
    }
    fsRename(wrongFilePath, properFilePath, (err) => {
      if (err) {
        throw new Error("FS operation failed");
      }
    });
  }
};

await rename();
