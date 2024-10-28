import { Jimp } from 'jimp';
import { GifFrame, GifCodec } from 'gifwrap';

export default
async function picListToGif(pics: string[], delayCentisecs = 20, w = 100, h = 100) {
  const frames = await Promise.all(pics.map(async (pic) => {
    const jip = await Jimp.read(Buffer.from(pic, 'base64'))
    jip.resize({ w, h });
    jip.quantize({ colors: 256 });
    return new GifFrame(jip.bitmap, { delayCentisecs });
  }));
  const gif = await new GifCodec().encodeGif(frames, { loops: 0 });
  return gif.buffer.toString('base64');
}
