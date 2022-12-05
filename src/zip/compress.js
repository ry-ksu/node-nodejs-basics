import { createGzip } from 'zlib';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
import { promisify } from 'util';

const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const sourcePath = path.resolve(__dirname, 'files', 'fileToCompress.txt');
  const destinationPath = path.resolve(__dirname, 'files', 'archive.gz');

  const pipe = promisify(pipeline);

  const doGzip = async (input, output) => {
    const gzip = createGzip();
    const source = createReadStream(input);
    const destination = createWriteStream(output);
    await pipe(source, gzip, destination);
  }

  try {
    doGzip(sourcePath, destinationPath)
  } catch(err) {
    throw new Error(err);
  }
};

await compress();
