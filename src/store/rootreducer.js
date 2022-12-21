import { combineReducers } from 'redux';
import {Authreducer,Isuserauthorize} from './auth/authreducer';
import {ProductReducer} from './products/productreducer';
export default combineReducers({
    Isuserauthorize,
    Authreducer,
    ProductReducer,
});
