import React from "react";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200">
      <div className="mx-auto py-5 md:py-3 px-10 xl:p-5 md:max-w-5xl flex flex-col">
        <div className="flex flex-col gap-4 md:flex-row items-center">
          <div className="flex justify-between gap-5">
            <a
              href="https://github.com/vasylmiskiv"
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineGithub
                className="hover:-translate-y-1 transition-transform cursor-pointe"
                size={36}
              />
            </a>

            <a
              href="https://www.linkedin.com/in/vasylmiskiv/"
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineLinkedin
                className="hover:-translate-y-1 transition-transform cursor-pointer"
                size={36}
              />
            </a>

            <a href="https://t.me/vmiskiv" rel="noreferrer" target="_blank">
              <FaTelegram
                className="mt-[3px] hover:-translate-y-1 transition-transform cursor-pointer"
                size={31}
              />
            </a>
          </div>

          <div className="w-full flex flex-col items-center select-none">
            <div>© Vasyl Miskiv</div>
            {new Date().getFullYear()}
          </div>

          <a
            href="mailto:vasylmiskiv@gmail.com"
            className=" hover:text-teal-500 transition-all duration-500"
          >
            vasylmiskiv@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
