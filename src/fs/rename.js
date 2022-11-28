import { readdir, rename as renameFile } from 'node:fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

const rename = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const dirPath = path.resolve(__dirname, 'files');
  const filePath = path.resolve(__dirname, 'files', 'wrongFilename.txt');
  const renameFilePath = path.resolve(__dirname, 'files', 'properFilename.md');
  
  try {
    const files = await readdir(dirPath);

    if (!files.includes('wrongFilename.txt') || files.includes('properFilename.md')) {
      throw Error();
    }
    try {
      renameFile(filePath, renameFilePath);
    } catch(err) {
      throw Error();
    }
  } catch(err) {
    throw Error('FS operation failed');
  }
};

await rename();
