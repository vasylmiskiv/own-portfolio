import { SKILLS, LINKS } from "../constants/constants";

import { ImLoop } from "react-icons/im";
import { HiOutlineDownload } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";
import { useState } from "react";

const AboutSection = () => {
  const [typeCv, setTypeCv] = useState("link");

  const handleChangeLinkType = () => {
    setTypeCv(typeCv === "link" ? "download" : "link");
  };

  return (
    <section id="about">
      <div className="py-20 md:px-7 md:py-52">
        <h1 className="text-center font-bold text-4xl select-none">About Me</h1>
        <div className="w-6 md:mb-14 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></div>
        <div className="flex items-stretch justify-center md:space-x-8 max-sm:flex-col">
          <div className="md:w-1/2 max-sm:mb-16">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me
            </h1>
            <p className="text-lg text-justify">
              Hi, my name is Vasyl and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> full-stack
              developer from Kyiv.
            </p>
            <br />
            <p className="mb-16 text-lg text-justify">
              I have a passion for programming, sports, business, chess, books,
              techno music, traveling, learning new technologies and applying
              them to real projects. I am always seeking new experiences and
              love to keep myself engaged and learning new things.
            </p>
            <div className="flex justify-center items-center gap-5">
              {typeCv === "link" ? (
                <a
                  className="inline-block gap-2 bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-4 rounded-lg duration-200 cursor-pointer"
                  href={LINKS.linkCv}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex gap-3 items-center">
                    <div>Open CV Link</div>
                    <FiArrowUpRight size={18} />
                  </div>
                </a>
              ) : (
                <a
                  className="inline-block gap-2 bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-4 rounded-lg duration-200 cursor-pointer"
                  href="/documents/Vasyl_Miskiv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Vasyl Miskiv.pdf"
                >
                  <div className="flex gap-3 items-center">
                    <div>Download CV</div>
                    <HiOutlineDownload size={18} className="mb-1" />
                  </div>
                </a>
              )}
              <div className="p-1">
                <ImLoop
                  className="text-gray-500 hover:text-gray-700 duration-200 cursor-pointer dark:text-gray-400 dark:hover:text-gray-200"
                  onClick={handleChangeLinkType}
                />
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              My Skills
            </h1>
            <div className="flex flex-wrap flex-row justify-center xl:justify-start max-sm:justify-center">
              {SKILLS.map((skill, i) => (
                <p
                  key={i}
                  className="bg-gray-200 px-4 rounded-lg py-2 mr-2 m-2 text-gray-600 cursor-pointer hover:bg-gray-300 max-sm:px-3 max-sm:text-sm"
                >
                  {skill.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
