const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', {
  encoding: 'utf8',
});

const writeStream = fs.createWriteStream('./docs/blog4.txt');

// readStream.on('data', (chunk) => {
//   console.log('------ New Chunk \n \n --------- New Chunk');
//   console.log(chunk);
//   writeStream.write('\nNewChunk\n');
//   writeStream.write(chunk);
// });

// with a pipe from read to write
readStream.pipe(writeStream);
