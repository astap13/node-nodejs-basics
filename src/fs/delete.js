import { unlink } from "node:fs/promises";
import { access } from "node:fs/promises";
import { join } from "path";

const remove = async () => {
  const filePath = join("src", "fs", "files", "fileToRemove.txt");
  try {
    await access(filePath);
    await unlink(filePath, (error) => {
      if (error) throw new Error("FS operation failed");
    });
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    } else {
      throw new Error("FS operation failed");
    }
  }
};

await remove();
