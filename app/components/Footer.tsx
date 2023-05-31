import React from "react";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineTwitter,
} from "react-icons/ai";

import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl p-5 sm:px-6 md:max-w-5xl">
      <div className="mb-5 mx-auto flex flex-col justify-around md:items-center text-center md:flex-row md:justify-between">
        <div className="flex flex-row justify-center space-x-5 max-sm:mb-5">
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

        <a
          href="mailto:vasylmiskiv@gmail.com"
          className=" hover:text-teal-500 transition-all duration-500"
        >
          vasylmiskiv@gmail.com
        </a>
      </div>
      <div className="w-full flex flex-col items-center">
        <div>© Vasyl Miskiv</div>
        {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
