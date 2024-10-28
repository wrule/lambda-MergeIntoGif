import { Jimp } from 'jimp';
import { GifFrame, GifCodec } from 'gifwrap';

export default
async function picListToGif(pics: Buffer[], delayCentisecs = 20, w = 100, h = 100) {
  const frames = await Promise.all(pics.map(async (pic) => {
    const jip = await Jimp.read(pic);
    jip.resize({ w, h });
    jip.quantize({ colors: 256 });
    return new GifFrame(jip.bitmap, { delayCentisecs });
  }));
  const gif = await new GifCodec().encodeGif(frames, { loops: 0 });
  return gif.buffer;
}
