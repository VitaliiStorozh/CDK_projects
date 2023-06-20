import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from 'aws-lambda';

async function handler(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {

  let message: string;

  switch (event.httpMethod) {
    case 'GET':
         message = 'GET request received';
            break;
    case 'POST':
            message = 'POST request received';
            break;
    default:
        return {
            statusCode: 400,
            body: 'Bad request'
        };
  }
  const response: APIGatewayProxyResult = {
    statusCode: 200,
    body: JSON.stringify(message),
  };
  console.log('event: ', event);

  return response;
}

export { handler };
