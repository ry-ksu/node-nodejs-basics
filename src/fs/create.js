import { writeFile } from 'node:fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.resolve(__dirname, 'files', 'fresh.txt');
  
  writeFile(filePath, 'I am fresh and young', { flag: 'wx' })
    .catch(() => {
      throw new Error('FS operation failed')
    }
  );

};

await create();
