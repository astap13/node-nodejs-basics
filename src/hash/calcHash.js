import { createReadStream } from "node:fs";
import { join } from "path";
import { createHash } from "node:crypto";

const calculateHash = () => {
  const filePath = join("src", "hash", "files", "fileToCalculateHashFor.txt");

  const hash = createHash('sha256');

  const fileStream = createReadStream(filePath);

  fileStream.on('data', (chunk) => {
    hash.update(chunk);
  });

  fileStream.on('end', () => {
    const fileHash = hash.digest('hex');
    console.log(fileHash);
  });

  fileStream.on('error', (err) => {
    console.error("Error reading file:", err.message);
  });
};

calculateHash();
