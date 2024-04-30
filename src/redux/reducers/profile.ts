import { Profile } from "@/types/profile";
import { createSlice } from "@reduxjs/toolkit";

type ProfileInitialState = {
  profile: Profile | null;
  profilePicturePending: boolean;
  profilePictureError: string | null;
  setPreferencesPending: boolean;
  setPreferencesError: string | null;
};

const initialState: ProfileInitialState = {
  profile: null,
  profilePicturePending: false,
  profilePictureError: null,
  setPreferencesError: null,
  setPreferencesPending: false
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: (state, { payload }) => {
      state.profile = payload;
    },
    profilePicturePending: (state, { payload }) => {
      state.profilePicturePending = payload;
    },
    profilePictureError: (state, { payload }) => {
      state.profilePictureError = payload;
    },
    setPreferencesPending: (state, { payload }) => {
      state.setPreferencesPending = payload
    },
    setPreferencesError: (state, { payload }) => {
      state.setPreferencesError = payload;
    }
  },
});

export const {
  setProfile,
  profilePictureError,
  profilePicturePending,
  setPreferencesError,
  setPreferencesPending
} = profileSlice.actions;

export default profileSlice.reducer;
