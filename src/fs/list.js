import { readdir } from "node:fs/promises";
import { access } from "node:fs/promises";
import { join } from "path";

const list = async () => {
  const dirPath = join("src", "fs", "files");
  
  try {
    await access(dirPath);
    
    const files = await readdir(dirPath);
    console.log(files);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.error("Directory not found"); 
    } else {
      console.error("FS operation failed:", error.message);
    }
  }
};

await list();
