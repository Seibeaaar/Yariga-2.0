import { all } from 'redux-saga/effects';
import profileSagas from './profile';
import authSagas from './auth';

export default function* rootSaga() {
    yield all([
        authSagas(),
        profileSagas()
    ]);
}