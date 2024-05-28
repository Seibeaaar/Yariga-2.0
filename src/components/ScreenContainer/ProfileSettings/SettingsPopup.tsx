/// <reference types="vite-plugin-svgr/client" />
import { ThemeContext } from "@/customization/Theme";
import { FC, useContext, MouseEvent as ReactMouseEvent } from "react";
import { DarkMode, LightMode } from "@mui/icons-material";
import SettingsIcon from "@/assets/icons/Settings.svg?react";
import LogoutIcon from "@/assets/icons/Logout.svg?react";
import ProfileIcon from "@/assets/icons/Profile.svg?react";
import { useNavigate } from "react-router-dom";
import { APP_THEME } from "@/types/customization";

type SettingsPopupProps = {
  visible: boolean;
};

const SettingsPopup: FC<SettingsPopupProps> = ({ visible }) => {
  const { changeTheme, isDarkTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const SETTINGS_ACTIONS = [
    {
      icon: ProfileIcon,
      text: "Profile",
      onClick: () => navigate("/profile"),
    },
    {
      icon: SettingsIcon,
      text: "Settings",
      onClick: () => navigate("/settings"),
    },
    {
      icon: LogoutIcon,
      text: "Logout",
      onClick: () => console.log("Log out"),
    },
  ];

  const onThemeChange = (e: ReactMouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    changeTheme(isDarkTheme ? APP_THEME.Light : APP_THEME.Dark);
  };

  return (
    <div
      className={`rounded-[10px] flex flex-col justify-between fixed top-[72px] w-[192px] right-[20px] bg-white dark:bg-black transition-all overflow-hidden p-[10px] ${visible ? "opacity-1" : "opacity-0"}`}
    >
      {SETTINGS_ACTIONS.map((action) => {
        const Icon = action.icon;
        return (
          <div
            onClick={(e) => {
              e.stopPropagation();
              action.onClick();
            }}
            className="flex h-[42px] px-[10px] items-center gap-[16px] w-full text-secondary-light dark:text-secondary-dark hover:text-primary fill-secondary-light dark:fill-secondary-dark hover:fill-primary dark:hover:fill-primary dark:hover:text-primary"
            key={action.text}
          >
            <Icon width={18} height={18} fill="inherit" />
            <p className="text-sm font-semibold text-inherit">{action.text}</p>
          </div>
        );
      })}
      <div
        onClick={onThemeChange}
        className="flex h-[42px] px-[10px] items-center gap-[16px] w-full text-secondary-light dark:text-secondary-dark hover:text-primary dark:hover:text-primary"
      >
        {isDarkTheme ? (
          <LightMode
            sx={{
              width: 18,
              height: 18,
            }}
            color="inherit"
          />
        ) : (
          <DarkMode
            sx={{
              width: 18,
              height: 18,
            }}
            color="inherit"
          />
        )}
        <p className="text-sm font-semibold text-inherit">
          {`${isDarkTheme ? "Light" : "Dark"}`} mode
        </p>
      </div>
    </div>
  );
};

export default SettingsPopup;
