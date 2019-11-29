import * as actionTypes from '../actions/actionsTypes'
import { logoutSaga, checkAuthTimeoutSaga } from './auth'
import { takeEvery } from 'redux-saga/effects'


export function* watchAuth() {
    yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
    yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
}