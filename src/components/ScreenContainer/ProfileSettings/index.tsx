import { useState, useEffect, MouseEvent as ReactMouseEvent } from "react";
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import { RootState } from "@/redux";
import { getFullName, getInitials, getRoleTitle } from "@/utils/profile";
import SettingsPopup from "./SettingsPopup";

const ProfileSettings = () => {
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const { profile } = useSelector((state: RootState) => state.profile);

  useEffect(() => {
    const clickListener = () => {
      if (showSettings) {
        setShowSettings(false);
      }
    };
    window.addEventListener("click", clickListener);

    return () => {
      window.removeEventListener("click", clickListener);
    };
  }, [showSettings]);

  if (!profile) return null;

  const toggleSettingsPopup = (e: ReactMouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setShowSettings(!showSettings);
  }

  return (
    <div
      onClick={toggleSettingsPopup}
      className="flex relative cursor-pointer items-center gap-[10px]"
    >
      <SettingsPopup visible={showSettings} />
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
  );
};

export default ProfileSettings;
