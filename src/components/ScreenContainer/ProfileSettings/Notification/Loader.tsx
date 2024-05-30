import { useContext } from "react";
import { Skeleton } from "@mui/material";
import { COLORS } from "@/constants/styling";
import { ThemeContext } from "@/customization/Theme";

const NotificationLoader = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  const background = isDarkTheme
    ? COLORS["secondary-dark"]
    : COLORS["secondary-light"];

  return (
    <div className="flex gap-[10px] w-full">
      <Skeleton
        variant="rectangular"
        width={38}
        height={38}
        sx={{ background }}
      />
      <div className="flex-grow">
        <Skeleton
          sx={{
            background,
          }}
          variant="text"
        />
        <Skeleton
          sx={{
            background,
          }}
          variant="text"
        />
        <Skeleton
          sx={{
            background,
          }}
          variant="text"
        />
      </div>
    </div>
  );
};

export default NotificationLoader;
