import path from 'path';
import fs from 'fs';
import {fileURLToPath} from 'url';
import { stdout } from 'process';

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.resolve(__dirname, 'files', 'fileToRead.txt');

  let data = '';
  const readableStream = fs.createReadStream(filePath, 'utf-8');

  readableStream.on('data', (chunk) => (data += chunk));
  readableStream.on('end', () => stdout.write(data));
  readableStream.on('error', (error) => stdout.write(`Error ${error.message}`));
};

await read();