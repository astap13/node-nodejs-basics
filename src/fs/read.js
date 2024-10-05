import { readFile } from "node:fs/promises";
import { access } from "node:fs/promises";
import { join } from "path";

const read = async () => {
  const filePath = join("src", "fs", "files", "fileToRead.txt");
  try {
    await access(filePath);
    let fileContent = await readFile(filePath, { encoding: "utf-8" });
    console.log(fileContent);
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    } else {
      throw new Error("FS operation failed");
    }
  }
};
await read();
