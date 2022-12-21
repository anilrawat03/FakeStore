import {configureStore} from '@reduxjs/toolkit';
import rootSaga from './rootsaga';
import rootReducer from './rootreducer';
import createSagaMiddleware from 'redux-saga';
let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
 const store = configureStore({
    reducer:rootReducer,
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(middleware),
  })
// running the sagas
sagaMiddleware.run(rootSaga);

export default store;
