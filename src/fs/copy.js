import { mkdir, readdir, copyFile } from 'node:fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const folderPath = path.resolve(__dirname, 'files');
  const copyFolderPath = path.resolve(__dirname, 'files_copy');
  
  try {
    const files = await readdir(folderPath);
    await mkdir(copyFolderPath);

    files.forEach((file) => {
      try{
        copyFile(
          path.resolve(__dirname, 'files', file),
          path.resolve(__dirname, 'files_copy', file),
        )
      } catch(err) {
        throw Error;
      }
    });

  } catch(err) {
    throw Error('FS operation failed');
  }
};

copy();
