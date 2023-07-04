import React from "react";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { FaTelegram, FaYoutube } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="max-lg:hidden fixed md:left-10 xl:left-20 top-[46%] transform -translate-y-1/2 ">
      <div className="flex flex-col justify-between gap-7">
        <a
          href="https://github.com/vasylmiskiv"
          rel="noreferrer"
          target="_blank"
        >
          <AiOutlineGithub className="hover:text-teal-500" size={40} />
        </a>

        <a
          href="https://www.linkedin.com/in/vasylmiskiv/"
          rel="noreferrer"
          target="_blank"
        >
          <AiOutlineLinkedin className="hover:text-teal-500" size={40} />
        </a>

        <a href="https://t.me/vmiskiv" rel="noreferrer" target="_blank">
          <FaTelegram className="hover:text-teal-500" size={36} />
        </a>

        <a
          href="https://www.youtube.com/@VasylMiskiv/streams"
          rel="noreferrer"
          target="_blank"
        >
          <FaYoutube className="hover:text-teal-500" size={37} />
        </a>
      </div>
    </div>
  );
};

export default Socials;
