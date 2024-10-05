import { createReadStream } from 'node:fs';
import { join } from 'path';

const read = async () => {
    const filePath = join('src', 'streams', 'files', 'fileToRead.txt');

    const fileStream = createReadStream(filePath, { encoding: 'utf-8' });
  
    fileStream.on("data", (chunk) => {
        process.stdout.write(chunk);
      });
    
      fileStream.on("error", () => {
        throw new Error("Stream operation failed");
      });
};

await read();