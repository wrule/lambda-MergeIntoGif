import fs from 'fs';
import picListToGif from './picListToGif.js';

async function main() {
  const pics = [
    fs.readFileSync('1.jpg').toString('base64'),
    fs.readFileSync('2.jpeg').toString('base64'),
    fs.readFileSync('3.jpeg').toString('base64'),
    fs.readFileSync('4.png').toString('base64'),
    fs.readFileSync('5.jpeg').toString('base64'),
  ];
  const base64 = await picListToGif(pics, 20, 200, 200);
  fs.writeFileSync('1.gif', Buffer.from(base64, 'base64'));
}

main();
