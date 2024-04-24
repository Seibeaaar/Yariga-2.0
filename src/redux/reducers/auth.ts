import { createSlice } from "@reduxjs/toolkit";

type AuthReducerInitialState = {
  authPending: boolean;
  authError: string | null;
  emailVerificationPending: boolean;
  emailVerificationError: string | null;
  emailVerificationSuccessful: boolean;
  profileCompletePending: boolean;
  profileCompleteError: string | null;
};

const initialState: AuthReducerInitialState = {
  authPending: false,
  authError: null,
  emailVerificationError: null,
  emailVerificationPending: false,
  emailVerificationSuccessful: false,
  profileCompletePending: false,
  profileCompleteError: null,
};

export const authSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    authPending: (state, { payload }) => {
      state.authPending = payload;
    },
    authError: (state, { payload }) => {
      state.authError = payload;
    },
    emailVerificationPending: (state, { payload }) => {
      state.emailVerificationPending = payload;
    },
    emailVerificationError: (state, { payload }) => {
      state.emailVerificationError = payload;
    },
    emailVerificationSuccessful: (state, { payload }) => {
      state.emailVerificationSuccessful = payload;
    },
    profileCompletePending: (state, { payload }) => {
      state.profileCompletePending = payload;
    },
    profileCompleteError: (state, { payload }) => {
      state.profileCompleteError = payload;
    }
  },
});

export const {
  authPending,
  authError,
  emailVerificationError,
  emailVerificationPending,
  emailVerificationSuccessful,
  profileCompleteError,
  profileCompletePending,
} = authSlice.actions;

export default authSlice.reducer;
