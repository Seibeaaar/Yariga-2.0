/// <reference types="vite-plugin-svgr/client" />
import SearchIcon from "@/assets/icons/Search.svg?react";

const Searchbar = () => {
  return (
    <div className="rounded-[8px] flex-grow bg-bg-light dark:bg-bg-dark p-[10px] flex items-center gap-[10px] fill-secondary-light dark:fill-secondary-dark max-w-[405px]">
      <SearchIcon width={16} height={16} fill="inherit" />
      <input className="outline-none border-none bg-transparent flex-grow" placeholder="Search properties & landlords" />
    </div>
  );
};

export default Searchbar;
