import { createWriteStream } from "node:fs";
import { join } from "path";

const write = async () => {
  const filePath = join("src", "streams", "files", "fileToWrite.txt");

  const fileStream = createWriteStream(filePath, { encoding: "utf-8" });

  fileStream.on("error", (err) => {
    throw new Error("Stream operation failed: " + err.message);
  });

  process.stdin.pipe(fileStream);
};

await write();
