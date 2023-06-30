import { handler } from '../src/services/spaces/handler';

process.env.AWS_REGION = 'us-east-1';
process.env.TABLE_NAME = 'SpaceTable-0e727129acdb';

handler(
  {
    httpMethod: 'GET',
    queryStringParameters: {
      id: 'ad0c8a11-cf98-4191-b843-baeb4b6ebbe6',
    },
    // body: JSON.stringify({
    //   location: 'Dublin',
    // }),
  } as any,
  {} as any
);
