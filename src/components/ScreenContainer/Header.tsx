import { useSelector } from "react-redux";
import { RootState } from "@/redux";
import Searchbar from "./Searchbar";
import ProfileSettings from "./ProfileSettings";

const Header = () => {
  const { profile } = useSelector((state: RootState) => state.profile);

  if (!profile) return null;

  return (
    <div className="bg-white flex items-center justify-between dark:bg-black py-[12px] px-[20px] h-[70px]">
      <Searchbar />
      <div className="flex items-center gap-[16px]">
        <ProfileSettings />
      </div>
    </div>
  );
};

export default Header;
