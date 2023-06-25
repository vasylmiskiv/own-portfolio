"use client";

import { Link } from "react-scroll/modules";
import { useTheme } from "next-themes";
import { NAV_ITEMS } from "../constants/constants";
import { useEffect, useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [navbar, setNavbar] = useState(false);

  let isLight = theme === "light" ? true : false;

  useEffect(() => {
    if (!theme) {
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    isLight = !isLight;
    setTheme(newTheme);

    if (navbar) {
      setNavbar(false);
    }
  };

  return (
    <header
      className={`w-full fixed mx-auto backdrop-blur-sm px-6 shadow-lg top-0 z-50 sm:px-20 dark:bg-[#161B22]`}
    >
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between md:py-1">
            <div className="py-5 md:py-5">
              <Link
                to="hero"
                spy={true}
                smooth={true}
                duration={500}
                className="text-2xl font-extrabold text-teal-500 cursor-pointer"
              >
                Vasyl Miskiv
              </Link>
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
                activeClass="text-teal-500"
                spy={true}
                smooth={true}
                onClick={() => setNavbar(!navbar)}
                className="block lg:inline-block text-black-800 cursor-pointer font-semibold hover:text-teal-500 max-sm:font-semibold hover:duration-300"
              >
                {item.label}
              </Link>
            ))}
            <label className="switch">
              <input
                type="checkbox"
                checked={isLight}
                onChange={() => toggleTheme()}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
