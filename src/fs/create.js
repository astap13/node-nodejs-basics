import { access, writeFile } from "node:fs/promises";
import { join } from "path";

const create = async () => {
    const filePath = join("src", "fs", "files", "fresh.txt");
    try {
      await access(filePath);
      throw new Error("FS operation failed");
    } catch (error) {
      if (error.code !== "ENOENT") {
        throw error;
      }
      await writeFile(filePath, "I am fresh and young");
      console.log("FS operation succeed");
    }
};
await create();
