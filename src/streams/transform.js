import { Transform, pipeline } from 'stream';

const transform = async () => {
  const readable = process.stdin;
  const writable = process.stdout;

  const transform = new Transform({
    transform(chunk, encoding, callback) {
      const chunkStringified = chunk.toString().trim();

      const reverseChunk = chunkStringified.split('').reverse().join('');

      this.push(reverseChunk + '\n');

      callback();
    }
  })

  pipeline(
    readable,
    transform,
    writable,
    err => {
      throw new Error(err);
    }
  )
};

await transform();