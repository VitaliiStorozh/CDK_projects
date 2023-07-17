import { Amplify, Auth } from 'aws-amplify';
import { type CognitoUser } from '@aws-amplify/auth';
import { CognitoIdentityClient } from '@aws-sdk/client-cognito-identity';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-providers';

const awsRegion = 'us-east-1';
const userPoolId = 'us-east-1_Rq1PFN5SA';
const userPoolWebClientId = '5hc8jucshl5s6vmfedkl5a7qem';
const identityPoolId = 'us-east-1:d09d0ab0-c30e-486b-97bf-4e9f4b769fa8';

Amplify.configure({
  Auth: {
    region: awsRegion,
    userPoolId: userPoolId,
    userPoolWebClientId: userPoolWebClientId,
    identityPoolId: identityPoolId,
    authenticationFlowType: 'USER_PASSWORD_AUTH',
  },
});

export class AuthService {
  public async login(userName: string, password: string) {
    return (await Auth.signIn(userName, password)) as CognitoUser;
  }

  public async generateTemporaryCredentials(user: CognitoUser) {
    const jwtToken = user.getSignInUserSession().getIdToken().getJwtToken();
    const cognitoIdentityPool = `cognito-idp.${awsRegion}.amazonaws.com/${userPoolId}`;
    const cognitoIdentity = new CognitoIdentityClient({
      credentials: fromCognitoIdentityPool({
        identityPoolId: identityPoolId,
        logins: {
          [cognitoIdentityPool]: jwtToken,
        },
      }),
    });
    const credentials = await cognitoIdentity.config.credentials();
    return credentials;
  }
}
