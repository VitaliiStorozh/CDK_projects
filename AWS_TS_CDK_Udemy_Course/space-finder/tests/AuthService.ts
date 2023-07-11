import {Amplify, Auth} from 'aws-amplify'
import {type CognitoUser} from "@aws-amplify/auth";

const awsRegion = 'us-east-1'
const userPoolId = 'us-east-1_Rq1PFN5SA'
const userPoolWebClientId = '5hc8jucshl5s6vmfedkl5a7qem'

Amplify.configure({
    Auth: {
        region: awsRegion,
        userPoolId: userPoolId,
        userPoolWebClientId: userPoolWebClientId,
        authenticationFlowType: 'USER_PASSWORD_AUTH'
    }
})

export class AuthService {
    public async login(userName: string, password: string){
        return await Auth.signIn(userName, password) as CognitoUser;
    }
}