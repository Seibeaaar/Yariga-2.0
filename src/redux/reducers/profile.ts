import { Profile } from "@/types/profile";
import { createSlice } from "@reduxjs/toolkit";

type ProfileInitialState = {
  authPending: boolean;
  authError: string | null;
  profile: Profile | null;
};

const initialState: ProfileInitialState = {
  authPending: false,
  authError: null,
  profile: null,
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
  },
});

export const { authPending, authError, setProfile } = profileSlice.actions;

export default profileSlice.reducer;
