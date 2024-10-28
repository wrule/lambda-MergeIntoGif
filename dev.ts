import { Jimp } from 'jimp';
import { GifFrame, GifUtil, GifCodec } from 'gifwrap';

async function main() {
  const width = 200, height = 100;
  const pic1 = new Jimp({ width: 100, height: 100, color: 0xff00ffff });
  const pic2 = new Jimp({ width: 100, height: 100, color: 0x00ffffff });
  const frame1 = new GifFrame(pic1.bitmap, { delayCentisecs: 50 });
  const frame2 = new GifFrame(pic2.bitmap, { delayCentisecs: 50 });
  GifUtil.write("my-creation.gif", [frame1, frame2], { loops: 0 }).then(gif => {
    console.log("written");
  });
}

main();
