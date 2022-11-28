import { createReadStream } from 'node:fs';
import path from 'path';
import {fileURLToPath} from 'url';

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.resolve(__dirname, 'files', 'fileToRead.txt');
  let data = '';

  const readableStream = createReadStream(filePath, 'utf-8');

  readableStream.on('data', (chunk) => (data += chunk));
  readableStream.on('end', () => console.log(data));
  readableStream.on('error', () => {
    throw Error('FS operation failed');
  })
};

await read();
