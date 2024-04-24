import { takeLatest, put, call } from "redux-saga/effects";
import { UPLOAD_PROFILE_PICTURE } from "../actions/profile";
import { setProfile, profilePicturePending, profilePictureError } from "../reducers/profile";
import { PayloadAction } from "@reduxjs/toolkit";
import { Profile } from "@/types/profile";
import { uploadProfilePictureRequest } from "@/api/profile";

import { generateErrorMesaage } from "@/utils/redux";

function* profilePictureSaga(
  action: PayloadAction<FormData>
): Generator<unknown, void, Profile> {
  try {
    yield put(profilePictureError(null))
    yield put(profilePicturePending(true))
    const profile = yield call(uploadProfilePictureRequest, action.payload)
    yield put(setProfile(profile));
  } catch (e) {
    yield put(profilePictureError(generateErrorMesaage(e)))
  } finally {
    yield put(profilePicturePending(false));
  }
}

export default function* () {
  yield takeLatest(UPLOAD_PROFILE_PICTURE, profilePictureSaga)
}
