import { all, takeEvery } from 'redux-saga/effects';

import authsaga from './auth/authsaga';
import productsaga from './products/productsaga';

export default function* rootSaga() {
    return yield all([
        authsaga,
        productsaga
    ]);
}
