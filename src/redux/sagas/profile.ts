import { takeLatest, put, call } from "redux-saga/effects";
import {
  SET_CLIENT_PREFERENCES,
  UPLOAD_PROFILE_PICTURE,
} from "../actions/profile";
import {
  setProfile,
  profilePicturePending,
  profilePictureError,
  setPreferencesPending,
  setPreferencesError,
} from "../reducers/profile";
import { PayloadAction } from "@reduxjs/toolkit";
import { ClientPreferences, Profile } from "@/types/profile";
import {
  setClientPreferencesRequest,
  uploadProfilePictureRequest,
} from "@/api/profile";

import { generateErrorMesaage } from "@/utils/redux";

function* profilePictureSaga(
  action: PayloadAction<FormData>,
): Generator<unknown, void, Profile> {
  try {
    yield put(profilePictureError(null));
    yield put(profilePicturePending(true));
    const profile = yield call(uploadProfilePictureRequest, action.payload);
    yield put(setProfile(profile));
  } catch (e) {
    yield put(profilePictureError(generateErrorMesaage(e)));
  } finally {
    yield put(profilePicturePending(false));
  }
}

function* setPreferencesSaga(
  action: PayloadAction<ClientPreferences>,
): Generator<unknown, void, Profile> {
  try {
    yield put(setPreferencesError(null));
    yield put(setPreferencesPending(true));

    const profile = yield call(setClientPreferencesRequest, action.payload);
    yield put(setProfile(profile));
  } catch (e) {
    yield put(setPreferencesError(generateErrorMesaage(e)));
  } finally {
    yield put(setPreferencesPending(false));
  }
}

export default function* () {
  yield takeLatest(UPLOAD_PROFILE_PICTURE, profilePictureSaga);
  yield takeLatest(SET_CLIENT_PREFERENCES, setPreferencesSaga);
}
