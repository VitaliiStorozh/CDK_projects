import { handler } from '../src/services/spaces/handler';

process.env.AWS_REGION = 'us-east-1';
process.env.TABLE_NAME = 'SpaceTable-0e727129acdb';

handler(
  {
    httpMethod: 'GET',
    // body: JSON.stringify({
    //   location: 'Dublin',
    // }),
  } as any,
  {} as any
);
