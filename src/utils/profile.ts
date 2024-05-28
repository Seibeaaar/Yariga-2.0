import { Profile, USER_ROLE } from "@/types/profile";

export const getFullName = (profile: Profile) =>
  `${profile.firstName} ${profile.lastName}`;

export const getInitials = (profile: Profile) =>
  `${profile.firstName[0]}${profile.lastName[0]}`;

export const getRoleTitle = (profile: Profile) => {
  switch (profile.role) {
    case USER_ROLE.Landlord:
      return 'Landlord';
    case USER_ROLE.Tenant:
      return 'Tenant';
    default:
      return 'Unknown';
  }
}
