import { randomUUID } from 'crypto';
import { JsonError } from './Validator';
import exp = require('constants');
import { APIGatewayProxyEvent } from 'aws-lambda';

export function createRandomId() {
  return randomUUID();
}

export function parseJson(arg: string) {
  try {
    return JSON.parse(arg);
  } catch (error) {
    throw new JsonError(error.message);
  }
}

export function hasAdminGroup(event: APIGatewayProxyEvent) {
  const groups = event.requestContext.authorizer?.claims['cognito:groups'];
  return groups?.includes('admins');
}
