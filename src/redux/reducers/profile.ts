import { Profile } from "@/types/profile";
import { createSlice } from "@reduxjs/toolkit";

type ProfileInitialState = {
  profile: Profile | null;
  profilePicturePending: boolean;
  profilePictureError: string | null;
};

const initialState: ProfileInitialState = {
  profile: null,
  profilePicturePending: false,
  profilePictureError: null
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
    }
  },
});

export const {
  setProfile,
  profilePictureError,
  profilePicturePending
} = profileSlice.actions;

export default profileSlice.reducer;
