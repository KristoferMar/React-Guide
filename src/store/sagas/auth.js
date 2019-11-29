import { delay } from 'redux-saga/effects'
import { put } from 'redux-saga/effects'

import * as actionTypes from '../actions/actionsTypes'
import * as actions from '../actions/index'

//Sagas are related to actions
export function* logoutSaga(action) {
    //yield means that it will wait for each step to finish.
    yield localStorage.removeItem('token')
    yield localStorage.removeItem('expirationTime')
    yield localStorage.removeItem('userId')
    yield put(actions.logoutSucceed)
}

//Saga code for check auth.
export function* checkAuthTimeoutSaga(action) {
    yield delay(action.expirationTime * 1000);
    yield put(actions.logout())
}