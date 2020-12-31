const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', {
  encoding: 'utf8',
});

readStream.on('data', (chunk) => {
  console.log('------ New Chunk \n \n --------- New Chunk');
  console.log(chunk);
});

function x(x) {
  return x;
}
