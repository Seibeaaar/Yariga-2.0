import instance from ".";
import { LoginData, SignUpData, AuthRequestResponse } from "@/types/auth";

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
