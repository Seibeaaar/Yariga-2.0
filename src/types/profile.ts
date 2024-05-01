import { PropertyFilters } from "./property";

export type Profile = {
  firstName: string;
  lastName: string;
  email: {
    value: string;
    verified: true;
  };
  role: USER_ROLE;
  dateOfBirth: string;
  profilePicture?: string;
};

export enum USER_ROLE {
  Landlord = "landlord",
  Tenant = "tenant",
}

export type ProfilePictureRequest = {
  picture: BufferSource;
};

export type ClientPreferences = PropertyFilters;
