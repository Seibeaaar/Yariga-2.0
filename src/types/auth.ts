import { Profile, USER_ROLE } from "./profile";

export type LoginData = {
  email: string;
  password: string;
};

export type SignUpData = LoginData & {
  firstName: string;
  lastName: string;
};

export type AuthRequestResponse = {
  profile: Profile;
  token: string;
};

export type GoogleAuthResponse = AuthRequestResponse & {
  isNew: boolean;
}

export type ProfileCompletionRequest = {
  role: USER_ROLE;
  taxNumber?: string;
  dateOfBirth: string;
};