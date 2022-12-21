import api, {APIUrls} from '../../services/api';
import { ADD_REQUEST_Login_Request } from './authactiontype';
import { call,all, takeLatest, put } from 'redux-saga/effects';
import { SetUserlogin } from '../../services/Authservice';
import { loginAction } from './authactioncreator';
function* loginUser({payload})
{
    try{
        const loginresponse=yield call(api.post,APIUrls.Auth.login,payload.logindata);
        if(loginresponse)
        {
            console.log("Login response==>",loginresponse);
            SetUserlogin(loginresponse.data.token);
            yield put(loginAction(loginresponse.data));
            payload.navigate('/dashboard')
        }
    } //no
    catch(error)
    {

    }
}

export default all([
    takeLatest(ADD_REQUEST_Login_Request, loginUser),
]);
