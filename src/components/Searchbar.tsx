/// <reference types="vite-plugin-svgr/client" />
import SearchIcon from "@/assets/icons/Search.svg?react";
import { Close } from "@mui/icons-material";
import { KeyboardEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { searchProperty } from "@/redux/actions/property";
import { setInitialSearch } from "@/redux/reducers/property";
import { AppDispatch } from "@/redux";

const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [focused, setFocused] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  const onEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      dispatch(setInitialSearch(false));
      dispatch(searchProperty(searchQuery));
    }
  };

  const clearSearchQuery = () => setSearchQuery("");

  return (
    <div
      className={`rounded-[8px] max-w-[50%] mr-auto flex-grow bg-bg-light dark:bg-bg-dark p-[10px] flex items-center gap-[10px] fill-secondary-light dark:fill-secondary-dark border ${focused ? "border-primary" : "border-transparent"}`}
    >
      <SearchIcon width={16} height={16} fill="inherit" />
      <input
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
        onKeyDown={onEnterPress}
        className="outline-none border-none bg-transparent flex-grow text-base"
        placeholder="Search properties"
      />
      <div
        className={`cursor-pointer text-secondary-light dark:text-secondary-dark ${searchQuery ? "opacity-100" : "opacity-0"}`}
        onClick={clearSearchQuery}
      >
        <Close
          sx={{
            width: 16,
            height: 16,
          }}
          color="inherit"
        />
      </div>
    </div>
  );
};

export default Searchbar;
