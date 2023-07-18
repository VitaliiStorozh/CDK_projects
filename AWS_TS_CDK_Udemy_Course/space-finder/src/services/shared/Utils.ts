import { randomUUID } from 'crypto';
import { JsonError } from './Validator';
import exp = require('constants');
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export function createRandomId() {
  return randomUUID();
}

export function addCorsHeaders(arg: APIGatewayProxyResult) {
  if (!arg.headers) {
    arg.headers = {};
  }
  arg.headers['Access-Control-Allow-Origin'] = '*';
  arg.headers['Access-Control-Allow-Credentials'] = 'true';
  arg.headers['Access-Control-Allow-Headers'] = '*';
  arg.headers['Access-Control-Allow-Methods'] = '*';
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
