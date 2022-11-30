import path from 'path';
import {fileURLToPath} from 'url';
import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';
const { createHash } = await import('node:crypto');

const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.resolve(__dirname, 'files', 'fileToCalculateHashFor.txt');

  const hash = createHash('sha256');

  const input = createReadStream(filePath);
  input.pipe(hash).setEncoding('hex').pipe(stdout);
};

await calculateHash();
