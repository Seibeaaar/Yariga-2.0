import instance from ".";
import { LoginData, SignUpData, AuthRequestResponse, ProfileCompletionRequest } from "@/types/auth";
import { Profile } from "@/types/profile";

export const loginRequest = async (
  data: LoginData,
): Promise<AuthRequestResponse> => {
  const result = await instance.post("/auth/login", data);
  return result.data;
};

export const signUpRequest = async (
  data: SignUpData,
): Promise<AuthRequestResponse> => {
  const result = await instance.post("/auth/signUp", data);
  return result.data;
};

export const emailVerificationRequest = async (
  id: string
): Promise<Profile> => {
  const result = await instance.post(`/verification/email/${id}`);
  return result.data;
}

export const completeProfileRequest = async (
  data: ProfileCompletionRequest,
): Promise<Profile> => {
  const result = await instance.post("/auth/complete", data);
  return result.data;
};
