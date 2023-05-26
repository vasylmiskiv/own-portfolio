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
    <footer className="mx-auto max-w-3xl py-8 px-4 sm:px-6 md:max-w-5xl">
      <div className="mx-auto flex flex-col justify-around md:items-center text-center md:flex-row md:justify-between">
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
              className="hover:-translate-y-1 transition-transform cursor-pointer"
              size={32}
            />
          </a>
        </div>
        <div className="flex flex-col items-center justify-center space-x-1">
          <div>© Vasyl Miskiv</div>
          <div> {new Date().getFullYear()}</div>
        </div>
        <a href="mailto:vasylmiskiv@gmail.com" className="hover:underline">
          vasylmiskiv@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
