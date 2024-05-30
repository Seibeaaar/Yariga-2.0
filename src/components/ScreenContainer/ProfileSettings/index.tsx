/// <reference types="vite-plugin-svgr/client" />
import { useState, useEffect, MouseEvent as ReactMouseEvent } from "react";
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import { RootState } from "@/redux";
import { getFullName, getInitials, getRoleTitle } from "@/utils/profile";
import SettingsPopup from "./SettingsPopup";
import NotificationMenu from "./NotificationMenu";

import NotificationIcon from "@/assets/icons/Notification.svg?react";

const ProfileSettings = () => {
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [showNotifications, setShowNotifications] = useState<boolean>(false);
  const { profile: { profile } } = useSelector((state: RootState) => state);

  useEffect(() => {
    const clickListener = () => {
      if (showSettings) {
        setShowSettings(false);
      }
      if (showNotifications) {
        setShowNotifications(false);
      }
    };
    window.addEventListener("click", clickListener);

    return () => {
      window.removeEventListener("click", clickListener);
    };
  }, [showSettings, showNotifications]);

  if (!profile) return null;

  const toggleSettingsPopup = (
    e: ReactMouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.stopPropagation();
    setShowNotifications(false);
    setShowSettings(!showSettings);
  };

  const toggleNotificationMenu = (
    e: ReactMouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.stopPropagation();
    setShowSettings(false);
    setShowNotifications(!showNotifications);
  };

  return (
    <div className="flex items-center gap-[16px]">
      <div className="relative cursor-pointer" onClick={toggleNotificationMenu}>
        <NotificationIcon fill="inherit" width={24} height={24} />
        <div className="absolute bg-danger top-0 right-[2px] rounded w-[7px] h-[7px]" />
      </div>
      <div
        onClick={toggleSettingsPopup}
        className="flex relative cursor-pointer items-center gap-[10px]"
      >
        <SettingsPopup visible={showSettings} />
        <NotificationMenu visible={showNotifications} />
        {profile.profilePicture ? (
          <img
            src={profile.profilePicture}
            className="h-[40px] w-[40px] rounded-[50%]"
            alt="Profile picture"
          />
        ) : (
          <Avatar
            sx={{
              width: 40,
              height: 40,
            }}
          >
            {getInitials(profile)}
          </Avatar>
        )}
        <div>
          <p className="text-sm font-semibold text-primary-light dark:text-primary-dark">
            {getFullName(profile)}
          </p>
          <p className="text-sm font-light text-secondary-light dark:text-secondary-dark">
            {getRoleTitle(profile)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
