import instance from ".";
import {
  LoginData,
  SignUpData,
  AuthRequestResponse,
  ProfileCompletionRequest,
  GoogleAuthResponse,
} from "@/types/auth";
import { Profile } from "@/types/profile";
import axios from "axios";

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
  id: string,
): Promise<Profile> => {
  const result = await instance.post(`/verification/email/${id}`);
  return result.data;
};

export const completeProfileRequest = async (
  data: ProfileCompletionRequest,
): Promise<Profile> => {
  const result = await instance.post("/auth/complete", data);
  return result.data;
};

export const authViaGoogleRequest = async (data: {
  token: string;
}): Promise<GoogleAuthResponse> => {
  const result = await axios.post('http://localhost:5001/auth/google', data);
  return result.data;
};
