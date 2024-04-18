import { loginRequest, signUpRequest } from "@/api/auth";
import { takeLatest, put, call } from "redux-saga/effects";
import { authPending, authError, setProfile } from "../reducers/profile";
import { LoginData, SignUpData } from "@/types/auth";
import { AuthRequestResponse } from "@/types/auth";
import { LOGIN_REQUEST, SIGN_UP_REQUEST } from "../actions/profile";
import { PayloadAction } from "@reduxjs/toolkit";

function* loginSaga(
  action: PayloadAction<LoginData>,
): Generator<unknown, void, AuthRequestResponse> {
  try {
    yield put(authPending(true));
    const { payload } = action;
    const { profile, token } = yield call(loginRequest, payload);
    yield put(setProfile(profile));
    localStorage.setItem("token", token);
  } catch (e) {
    yield put(authError(e));
  } finally {
    yield put(authPending(false));
  }
}

function* signUpSaga(
  action: PayloadAction<SignUpData>
): Generator<unknown, void, AuthRequestResponse> {
  try {
    yield put(authPending(true));
    const { payload } = action;
    const { profile, token } = yield call(signUpRequest, payload);
    yield put(setProfile(profile));
    localStorage.setItem("token", token);
  } catch (e) {
    yield put(authError(e));
  } finally {
    yield put(authPending(false));
  }
}

export default function* () {
  yield takeLatest(LOGIN_REQUEST, loginSaga)
  yield takeLatest(SIGN_UP_REQUEST, signUpSaga)
}
