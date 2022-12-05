import path from 'path';
import { appendFile } from 'node:fs/promises';
import {fileURLToPath} from 'url';
import { stdin, stdout } from 'process';

const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.resolve(__dirname, 'files', 'fileToWrite.txt');

  stdout.write(`Please, enter the text for add to 'files/fileToWrite.txt': \n`);

  stdin.on('data', (data) => {
    try {
      appendFile(filePath, data);
    } catch(err) {
      throw err;
    }
  });
};

await write();