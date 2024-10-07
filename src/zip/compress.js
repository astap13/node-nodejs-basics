import {join} from 'path'
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import {
    createReadStream,
    createWriteStream,
} from 'node:fs';

const compress = async () => {
    const filePath = join('src', 'zip', 'files', 'fileToCompress.txt');
    const zipFilePath = join('src', 'zip', 'files', 'archive.gz')

    const gzip = createGzip();
    const source = createReadStream(filePath);
    const destination = createWriteStream(zipFilePath);

pipeline(source, gzip, destination, (err) => {
    if (err) {
        console.error(err);
        process.exitCode = 1;
    }
});
};

await compress();