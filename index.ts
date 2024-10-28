import dayjs from 'dayjs';
import picListToGif from './picListToGif.js';

export
const handler = async (event: any) => {
  return {
    statusCode: 200,
    now: dayjs().format('YYYY-MM-DD HH:mm:ss.SSS'),
    gif: await picListToGif(event.pics, event.delayCentisecs, event.w, event.h),
  };
}
