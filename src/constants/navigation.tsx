/// <reference types="vite-plugin-svgr/client" />
import DashboardIcon from "@/assets/icons/Dashboard.svg?react";
import MessageIcon from "@/assets/icons/Message.svg?react";
import StarIcon from "@/assets/icons/Star.svg?react";
import ProfileIcon from "@/assets/icons/Profile.svg?react";
import UnionIcon from "@/assets/icons/Union.svg?react";

export const NAV_LINKS = [
  {
    icon: DashboardIcon,
    text: "Dashboard",
    route: "/dashboard",
  },
  {
    icon: UnionIcon,
    text: "Property",
    route: "/properties",
  },
  {
    icon: StarIcon,
    text: "Reviews",
    route: "/reviews",
  },
  {
    icon: MessageIcon,
    text: "Messages",
    route: "/messages",
  },
  {
    icon: ProfileIcon,
    text: "My profile",
    route: "/profile",
  },
];