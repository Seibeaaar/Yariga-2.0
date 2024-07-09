import { all } from "redux-saga/effects";
import profileSagas from "./profile";
import authSagas from "./auth";
import notificationsSaga from "./notifications";
import ownPropertiesSaga from './property/own';
import searchPropertiesSaga from './property/search';

export default function* rootSaga() {
  yield all([
    authSagas(),
    profileSagas(),
    notificationsSaga(),
    ownPropertiesSaga(),
    searchPropertiesSaga()
  ]);
}
