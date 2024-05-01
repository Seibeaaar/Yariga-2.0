import { ClientPreferences } from "@/types/profile";

export const UPLOAD_PROFILE_PICTURE = 'UPLOAD_PROFILE_PICTURE';

export const SET_CLIENT_PREFERENCES = 'SET_CLIENT_PREFERENCES';

export const uploadProfilePicture = (payload: FormData) => ({
  type: UPLOAD_PROFILE_PICTURE,
  payload
});

export const setClientPreferences = (payload: ClientPreferences) => ({
  type: SET_CLIENT_PREFERENCES,
  payload
})