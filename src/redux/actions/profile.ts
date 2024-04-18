import { LoginData, SignUpData } from "@/types/auth";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const VERIFY_EMAIL_REQUEST = "EMAIL_VERIFY_REQUEST";

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
  payload: id
});