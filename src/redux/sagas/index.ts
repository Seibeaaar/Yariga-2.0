import { all } from 'redux-saga/effects';
import profileSagas from './profile';

export default function* rootSaga() {
    yield all([
        profileSagas()
    ]);
}