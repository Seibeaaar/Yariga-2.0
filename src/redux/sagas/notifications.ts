import { getNotificationsRequest } from "@/api/notifications";
import { put, takeLatest, call } from "redux-saga/effects";
import { GET_ALL_NOTIFICATIONS } from "../actions/notifications";
import {
  setGetNotificationsError,
  setGetNotificationsPending,
  setNotifications,
} from "../reducers/notifications";
import { Notification } from "@/types/notification";
import { generateErrorMesaage } from "@/utils/redux";

function* getNotificationsSaga(): Generator<unknown, void, Notification[]> {
  try {
    setGetNotificationsPending(true);
    setGetNotificationsError(null);

    const notifications = yield call(getNotificationsRequest);
    yield put(setNotifications(notifications));
  } catch (e) {
    setGetNotificationsError(generateErrorMesaage(e));
  } finally {
    setGetNotificationsPending(false);
  }
}

export default function* () {
  yield takeLatest(GET_ALL_NOTIFICATIONS, getNotificationsSaga);
}
