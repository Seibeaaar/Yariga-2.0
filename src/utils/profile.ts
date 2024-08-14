import { Profile, USER_ROLE } from "@/types/profile";
import { PropertyOwner } from "@/types/property";

export const getFullName = (profile: Profile | PropertyOwner) =>
  `${profile.firstName} ${profile.lastName}`;

export const getInitials = (profile: Profile | PropertyOwner) =>
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
