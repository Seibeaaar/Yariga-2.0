import PropertyBuyerIcon from "@/assets/icons/PropertyBuyer.svg";
import PropertySellerIcon from "@/assets/icons/PropertySeller.svg";
import { USER_ROLE } from "@/types/profile";

export type OnboardingRoleOption = {
  role: USER_ROLE;
  title: string;
  image: string;
};

export const ONBOARDING_ROLE_OPTIONS: OnboardingRoleOption[] = [
  {
    role: USER_ROLE.Landlord,
    title: "Sell and/or rent out properties",
    image: PropertySellerIcon,
  },
  {
    role: USER_ROLE.Tenant,
    title: "Find a perfect property for your needs",
    image: PropertyBuyerIcon,
  },
];

export const ROLE_NAME_BY_TYPE = {
  [USER_ROLE.Landlord] : 'Landlord',
  [USER_ROLE.Tenant]: 'Tenant'
}

export const ACCEPTED_AVATAR_FORMATS = ["png", "jpeg", "jpg", "webp"];
