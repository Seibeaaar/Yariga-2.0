import { all } from "redux-saga/effects";
import profileSagas from "./profile";
import authSagas from "./auth";
import notificationsSaga from "./notifications";
import ownPropertiesSaga from './property/own';

export default function* rootSaga() {
  yield all([
    authSagas(),
    profileSagas(),
    notificationsSaga(),
    ownPropertiesSaga()
  ]);
}
