import {login,ADD_REQUEST_Login_Request,User_Authorize} from './authactiontype';



export const loginRequestAction=(data)=>
{
    return {
        type:ADD_REQUEST_Login_Request,
        payload:data
    };
}

export const loginAction=(data)=>{
return {
    type:login,
    payload:data
}
}

export const IsuserauthorizeAction=(data)=>{
    return {
        type:User_Authorize,
        payload:data
    }
    }