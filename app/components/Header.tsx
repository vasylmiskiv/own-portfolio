"use client";

import { Link } from "react-scroll/modules";
import { useTheme } from "next-themes";
import { NAV_ITEMS } from "../constants/constants";
import { useEffect, useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { FaTelegram, FaYoutube } from "react-icons/fa";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isLight, setIsLight] = useState("");

  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    if (!theme) {
      setTheme("light");
    } else {
      setIsLight(theme);
    }
  }, []);

  const toggleTheme = () => {
    let changedTheme = isLight === "light" ? "dark" : "light";

    setIsLight(changedTheme);
    setTheme(changedTheme);
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
          className={`flex justify-self-center pb-3 mt-5 md:block md:pb-0 md:mt-0  ${
            navbar ? `block relative pb-8 mt-0` : `hidden`
          }`}
        >
          <div className="w-full items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
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
                checked={isLight === "light"}
                onChange={() => toggleTheme()}
              />
              <span className="slider"></span>
            </label>

            <div className="bg-gray-200 dark:bg-gray-800 h-[1px]"></div>

            <div className="md:hidden flex justify-center gap-8 px-2">
              <a
                href="https://github.com/vasylmiskiv"
                rel="noreferrer"
                target="_blank"
              >
                <AiOutlineGithub
                  className="hover:text-teal-500 hover:duration-200"
                  size={33}
                />
              </a>

              <a
                href="https://www.linkedin.com/in/vasylmiskiv/"
                rel="noreferrer"
                target="_blank"
              >
                <AiOutlineLinkedin
                  className="hover:-translate-y-1 transition-transform cursor-pointer"
                  size={33}
                />
              </a>

              <a href="https://t.me/vmiskiv" rel="noreferrer" target="_blank">
                <FaTelegram
                  className="mt-[3px] hover:-translate-y-1 transition-transform cursor-pointer"
                  size={28}
                />
              </a>

              <a
                href="https://www.youtube.com/@VasylMiskiv/streams"
                rel="noreferrer"
                target="_blank"
              >
                <FaYoutube
                  className="mt-[3px] hover:-translate-y-1 transition-transform cursor-pointer"
                  size={28}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
