import { LoginData, ProfileCompletionRequest, SignUpData } from "@/types/auth";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const VERIFY_EMAIL_REQUEST = "EMAIL_VERIFY_REQUEST";
export const COMPLETE_PROFILE = "COMPLETE_PROFILE";
export const GOOGLE_AUTH = "GOOGLE_AUTH";

export const login = (payload: LoginData) => ({
  type: LOGIN_REQUEST,
  payload,
});

export const signUp = (payload: SignUpData) => ({
  type: SIGN_UP_REQUEST,
  payload,
});

export const verifyEmail = (id: string) => ({
  type: VERIFY_EMAIL_REQUEST,
  payload: id,
});

export const completeProfile = (payload: ProfileCompletionRequest) => ({
  type: COMPLETE_PROFILE,
  payload,
});

export const authViaGoogle = (token: string) => ({
  type: GOOGLE_AUTH,
  payload: token,
});
