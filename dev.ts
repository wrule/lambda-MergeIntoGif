import fs from 'fs';
import picListToGif from './picListToGif.js';

async function main() {
  const pics = [
    fs.readFileSync('1.jpg'),
    fs.readFileSync('2.jpeg'),
    fs.readFileSync('3.jpeg'),
    fs.readFileSync('4.png'),
    fs.readFileSync('5.jpeg'),
  ];
  const buffer = await picListToGif(pics, 20, 200, 200);
  fs.writeFileSync('1.gif', buffer);
}

main();
