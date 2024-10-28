import dayjs from 'dayjs';

export
const handler = async (event: any) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
    timeNow: dayjs().format('YYYY-MM-DD HH:mm:ss'),
  };
  return response;
};
