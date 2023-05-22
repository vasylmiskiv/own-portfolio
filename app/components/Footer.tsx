import React from "react";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <hr className="w-full h-0.5 mx-auto mt-8 border-0"></hr>
      <div className="mx-auto p-4 flex flex-col text-center md:flex-row md:justify-between">
        <div className="mb-5 flex flex-row items-center justify-center space-x-5">
          <a
            href="https://github.com/vasylmiskiv"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointe"
              size={30}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/vasylmiskiv/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer"
              size={30}
            />
          </a>
        </div>
        <div className="mb-5 flex flex-row items-center justify-center space-x-1">
          © {new Date().getFullYear()} Vasyl Miskiv
          <a href="/" className="hover:underline"></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
