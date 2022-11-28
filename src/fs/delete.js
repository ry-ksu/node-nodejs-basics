import { rm } from 'node:fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

const remove = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.resolve(__dirname, 'files', 'fileToRemove.txt');

  try {
    await rm(filePath);
  } catch(err) {
    throw Error('FS operation failed');
  }
};

await remove();
