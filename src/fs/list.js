import { readdir } from 'node:fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const dirPath = path.resolve(__dirname, 'files');

  try {
    console.log(await readdir(dirPath));
  } catch(err) {
    throw Error('FS operation failed');
  }
};

await list();
