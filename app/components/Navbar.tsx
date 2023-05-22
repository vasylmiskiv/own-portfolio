"use client";

import { Link } from "react-scroll/modules";
import { useTheme } from "next-themes";
import { NAV_ITEMS } from "../constants/constants";
import { useState } from "react";
import { RiSunLine, RiMoonFill } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="w-full fixed mx-auto backdrop-blur-sm px-8 shadow-lg top-0 z-50 sm:px-20 border-b">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between md:py-3 max-sm:py-6">
            <div className="md:py-5 md:block">
              <div className="text-2xl font-bold">Vasyl Miskiv</div>
            </div>
            <div className="md:hidden">
              <button className="mt-1" onClick={() => setNavbar(!navbar)}>
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>
        <div
          className={`flex justify-self-center pb-3 mt-5 md:block md:pb-0 md:mt-0 ${
            navbar ? `block relative pb-8 mt-0` : `hidden`
          }`}
        >
          <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {NAV_ITEMS.map((item, i) => (
              <Link
                key={i}
                to={item.page}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => setNavbar(!navbar)}
                className="block lg:inline-block text-black-800 cursor-pointer hover:text-green-800 max-sm:font-semibold"
              >
                {item.label}
              </Link>
            ))}
            {currentTheme === "dark" ? (
              <button
                className="bg-slate-100 px-2 rounded-xl max-sm:absolute right-0 bottom-8"
                onClick={() => setTheme("light")}
              >
                <RiSunLine size={25} color="black" />
              </button>
            ) : (
              <button
                className="bg-slate-100 px-2 rounded-xl max-sm:absolute right-0 bottom-8"
                onClick={() => setTheme("dark")}
              >
                <RiMoonFill size={25} color="black" />
              </button>
            )}
            <div className="flex space-x-5">
              <button>En</button>
              <button>Ukr</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
