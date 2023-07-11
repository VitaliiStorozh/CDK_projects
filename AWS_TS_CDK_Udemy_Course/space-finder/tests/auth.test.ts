import {AuthService} from "./AuthService";


async function testAuth(){
    const service = new AuthService();
    const loginRequest = await service.login('vvstor', 'J-LzxT6ngpptcus');
    console.log(loginRequest);
    }

testAuth();