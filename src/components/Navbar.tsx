/// <reference types="vite-plugin-svgr/client" />
import { useState } from "react";
import Logo from "@/assets/icons/Logo.svg";

import { NAV_LINKS } from "@/constants/navigation";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  return (
    <section
      className={`bg-white overflow-hidden transition-all dark:bg-black px-[20px] py-[15px] ${collapsed ? "w-[76px]" : "w-[250px]"} h-screen overflow-hidden`}
    >
      <div
        onClick={() => setCollapsed(!collapsed)}
        className="flex items-center cursor-pointer gap-[14px]"
      >
        <img src={Logo} className="w-[36px] h-[36px]" alt="Logo" />
        {!collapsed ? (
          <h3 className="font-bold text-2xl text-primary-light dark:text-primary-dark">
            Yariga
          </h3>
        ) : null}
      </div>
      <nav className="mt-[36px]">
        {NAV_LINKS.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              to={link.route}
              className={`transition-all cursor-pointer flex items-center gap-[10px] rounded-[12px] ${collapsed ? "p-[6px] mt-[24px]" : "p-[16px] mt-[6px]"} text-secondary-light dark:text-secondary-dark hover:bg-primary hover:text-primary-dark dark:hover:text-primary-dark fill-secondary-light hover:fill-primary-dark dark:fill-secondary-dark dark:hover:fill-primary-dark`}
            >
              <Icon width={24} height={24} fill="inherit" />
              {!collapsed ? (
                <p className="text-inherit font-semibold text-normal">
                  {link.text}
                </p>
              ) : null}
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default Navbar;
