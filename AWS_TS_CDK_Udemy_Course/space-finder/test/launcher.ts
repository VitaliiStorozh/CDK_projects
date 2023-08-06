import { handler } from '../src/services/spaces/handler';

process.env.AWS_REGION = 'us-east-1';
process.env.TABLE_NAME = 'SpaceTable-0e727129acdb';

// handler(
//   {
//     httpMethod: 'GET',
//     // queryStringParameters: {
//     //   id: 'f628baed-b16f-42ba-9e7a-db9257af63f2',
//     // },
//   } as any,
//   {} as any
// );

handler(
  {
    httpMethod: 'POST',
    body: JSON.stringify({
      location: 'Dublin',
    }),
  } as any,
  {} as any
).then(res => console.log(res));

// handler(
//   {
//     httpMethod: 'PUT',
//     queryStringParameters: {
//       id: 'f628baed-b16f-42ba-9e7a-db9257af63f2',
//     },
//     body: JSON.stringify({
//       location: 'Vienna-updated',
//     }),
//   } as any,
//   {} as any
// );
//
// handler(
//   {
//     httpMethod: 'DELETE',
//     queryStringParameters: {
//       id: '925cc782-6252-4f56-8262-cec2d38c8024',
//     },
//   } as any,
//   {} as any
// );
