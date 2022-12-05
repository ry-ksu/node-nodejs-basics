import { createGunzip } from 'zlib';
import { pipeline } from 'stream';
import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
import { promisify } from 'util';

const decompress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const source = path.resolve(__dirname, 'files', 'archive.gz');
  const destination = path.resolve(__dirname, 'files', 'fileToCompress.txt');

  const pipe = promisify(pipeline);

  const doGunzip = async (input, output) => {
    const unGzip = createGunzip();
    const source = createReadStream(input);
    const destination = createWriteStream(output);
    await pipe(source, unGzip, destination);
  }

  try {
    await doGunzip(source,destination)
  } catch(err) {
    throw new Error(err);
  }
};

await decompress();
