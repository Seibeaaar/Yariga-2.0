import { ClientPreferences, Profile } from "@/types/profile";
import instance from ".";

export const uploadProfilePictureRequest = async (
  data: FormData,
): Promise<Profile> => {
  const result = await instance.post("/profile/picture", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return result.data;
};

export const setClientPreferencesRequest = async (
  preferences: ClientPreferences
): Promise<Profile> => {
  const result = await instance.post('/preferences', preferences);
  return result.data
};
