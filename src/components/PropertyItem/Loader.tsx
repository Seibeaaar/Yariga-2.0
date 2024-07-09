import { useContext } from "react";
import { Skeleton } from "@mui/material";
import { COLORS } from "@/constants/styling";
import { ThemeContext } from "@/customization/Theme";

const PropertyItemLoader = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  const background = isDarkTheme
    ? COLORS["secondary-dark"]
    : COLORS["secondary-light"];
  return (
    <div className="w-[48.5%] h-[125px] flex gap-[16px] mb-[36px]">
      <Skeleton sx={{ background }} variant="rectangular" width={200} height={125} />
      <div className="flex flex-col justify-between">
        <Skeleton sx={{ background }} variant="rectangular" width={56} height={30} />
        <Skeleton width={200} sx={{ background }} variant="text" />
        <Skeleton sx={{ background }} variant="text" />
        <Skeleton sx={{ background }} variant="text" />
      </div>
    </div>
  );
};

export default PropertyItemLoader;
