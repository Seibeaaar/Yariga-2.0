import { Profile } from "@/types/profile";
import { createSlice } from "@reduxjs/toolkit";

type ProfileInitialState = {
  authPending: boolean;
  authError: string | null;
  profile: Profile | null;
  emailVerificationPending: boolean;
  emailVerificationError: string | null;
  emailVerificationSuccessful: boolean;
  profileCompletePending: boolean;
  profileCompleteError: string | null;
  profilePicturePending: boolean;
  profilePictureError: string | null;
};

const initialState: ProfileInitialState = {
  authPending: false,
  authError: null,
  profile: null,
  emailVerificationError: null,
  emailVerificationPending: false,
  emailVerificationSuccessful: false,
  profileCompletePending: false,
  profileCompleteError: null,
  profilePicturePending: false,
  profilePictureError: null
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    authPending: (state, { payload }) => {
      state.authPending = payload;
    },
    authError: (state, { payload }) => {
      state.authError = payload;
    },
    setProfile: (state, { payload }) => {
      state.profile = payload;
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
      state.profileCompletePending = payload
    },
    profileCompleteError: (state, { payload }) => {
      state.profileCompleteError = payload;
    },
    profilePicturePending: (state, { payload }) => {
      state.profilePicturePending = payload;
    },
    profilePictureError: (state, { payload }) => {
      state.profilePictureError = payload;
    }
  },
});

export const {
  authPending,
  authError,
  setProfile,
  emailVerificationError,
  emailVerificationPending,
  emailVerificationSuccessful,
  profileCompleteError,
  profileCompletePending,
  profilePictureError,
  profilePicturePending
} = profileSlice.actions;

export default profileSlice.reducer;
