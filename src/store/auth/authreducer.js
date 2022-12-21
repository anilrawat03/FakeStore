import { SetUserlogin } from "../../services/Authservice";
import { login, User_Authorize } from "./authactiontype";
export const Authreducer = (state = { message: "", token: null }, action) => {
    switch (action.type) {
        case login:
            return { ...state, message: 'login successfully', token: action.payload }
            break;
        default:
            return { ...state }
            break;
    }
}

export const Isuserauthorize = (state = { isauthorize:false }, action) => {
    switch (action.type) {
        case User_Authorize:
            
            return { ...state, isauthorize: true };
            break;
        default:
            return { ...state,isauthorize:action.payload }
            break;
    }
}
