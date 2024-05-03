import {
  authViaGoogleRequest,
  completeProfileRequest,
  emailVerificationRequest,
  loginRequest,
  signUpRequest,
} from "@/api/auth";
import { takeLatest, put, call } from "redux-saga/effects";
import {
  authError,
  authPending,
  authViaGoogleError,
  authViaGooglePending,
  emailVerificationError,
  emailVerificationPending,
  emailVerificationSuccessful,
  profileCompleteError,
  profileCompletePending,
} from "../reducers/auth";
import { setProfile } from "../reducers/profile";
import {
  GoogleAuthResponse,
  LoginData,
  ProfileCompletionRequest,
  SignUpData,
} from "@/types/auth";
import { AuthRequestResponse } from "@/types/auth";
import {
  COMPLETE_PROFILE,
  GOOGLE_AUTH,
  LOGIN_REQUEST,
  SIGN_UP_REQUEST,
  VERIFY_EMAIL_REQUEST,
} from "../actions/auth";
import router from "@/router";
import { PayloadAction } from "@reduxjs/toolkit";
import { Profile } from "@/types/profile";

import { generateErrorMesaage } from "@/utils/redux";

function* loginSaga(
  action: PayloadAction<LoginData>,
): Generator<unknown, void, AuthRequestResponse> {
  try {
    yield put(authError(null));
    yield put(authPending(true));
    const { payload } = action;
    const { profile, token } = yield call(loginRequest, payload);

    yield put(setProfile(profile));
    localStorage.setItem("token", token);

    router.navigate('/dashboard');
  } catch (e) {
    yield put(authError(generateErrorMesaage(e)));
  } finally {
    yield put(authPending(false));
  }
}

function* signUpSaga(
  action: PayloadAction<SignUpData>,
): Generator<unknown, void, AuthRequestResponse> {
  try {
    yield put(authError(null));
    yield put(authPending(true));
    const { payload } = action;
    const { profile, token } = yield call(signUpRequest, payload);
    yield put(setProfile(profile));
    localStorage.setItem("token", token);
    router.navigate("/email-sent");
  } catch (e) {
    yield put(authError(generateErrorMesaage(e)));
  } finally {
    yield put(authPending(false));
  }
}

function* emailVerificationSaga(
  action: PayloadAction<string>,
): Generator<unknown, void, Profile> {
  try {
    yield put(emailVerificationSuccessful(false));
    yield put(emailVerificationError(null));

    yield put(emailVerificationPending(true));
    const profile = yield call(emailVerificationRequest, action.payload);
    yield put(emailVerificationSuccessful(true));
    yield put(setProfile(profile));

    router.navigate('/profile-complete');
  } catch (e) {
    yield put(emailVerificationError(generateErrorMesaage(e)));
  } finally {
    yield put(emailVerificationPending(false));
  }
}

function* profileCompleteSaga(
  action: PayloadAction<ProfileCompletionRequest>,
): Generator<unknown, void, Profile> {
  try {
    yield put(profileCompleteError(null));
    yield put(profileCompletePending(true));
    const profile = yield call(completeProfileRequest, action.payload);
    yield put(setProfile(profile));
  } catch (e) {
    yield put(profileCompleteError(generateErrorMesaage(e)));
  } finally {
    yield put(profileCompletePending(false));
  }
}

function* authViaGoogleSaga(
  action: PayloadAction<string>,
): Generator<unknown, void, GoogleAuthResponse> {
  try {
    authViaGooglePending(true);
    authViaGoogleError(null);
    const { profile, token, isNew } = yield call(authViaGoogleRequest, {
      token: action.payload,
    });

    localStorage.setItem("JWT", token);
    yield put(setProfile(profile));

    router.navigate(!isNew ? "/dashboard" : "/email-sent");
  } catch (e) {
    authViaGoogleError(generateErrorMesaage(e));
  } finally {
    authViaGooglePending(false);
  }
}

export default function* () {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
  yield takeLatest(SIGN_UP_REQUEST, signUpSaga);
  yield takeLatest(VERIFY_EMAIL_REQUEST, emailVerificationSaga);
  yield takeLatest(COMPLETE_PROFILE, profileCompleteSaga);
  yield takeLatest(GOOGLE_AUTH, authViaGoogleSaga);
}
