import React from "react";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

import { FaTelegram, FaYoutube } from "react-icons/fa";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="dark:bg-[#161B22]">
      <Container>
        <div className="mx-auto py-4 md:py-6 px-10 xl:p-5 border-t dark:border-none">
          <div className="flex flex-col gap-5 md:flex-row items-center">
            {/* <div className="flex justify-between gap-5">
              <a
                href="https://github.com/vasylmiskiv"
                rel="noreferrer"
                target="_blank"
              >
                <AiOutlineGithub
                  className="hover:text-teal-500 hover:duration-200"
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

              <a
                href="https://www.youtube.com/@VasylMiskiv/streams"
                rel="noreferrer"
                target="_blank"
              >
                <FaYoutube
                  className="mt-[3px] hover:-translate-y-1 transition-transform cursor-pointer"
                  size={31}
                />
              </a>
            </div> */}

            <div className="w-full flex flex-col gap-4 items-center select-none">
              <a
                href="mailto:vasylmiskiv@gmail.com"
                className="hover:text-teal-500 transition-all duration-400 max-sm:text-sm"
              >
                vasylmiskiv@gmail.com
              </a>
              <div className="max-sm:text-sm">
                © {new Date().getFullYear()} Vasyl Miskiv
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
