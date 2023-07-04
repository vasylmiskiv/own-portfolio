"use client";

import { Link } from "react-scroll/modules";

import { HiArrowDown } from "react-icons/hi";

import { useWindowSize } from "../hooks/useWindowSize";

const HeroSection = () => {
  const { width } = useWindowSize();

  return (
    <section id="hero">
      <div className="flex flex-col text-center pt-20 pb-40 md:pt-52 md:mb-20 md:pb-10 items-center justify-center max-md:flex-col lg:flex-row lg:gap-32">
        <div className="max-sm:px-5 md:mb-16 max-sm:mb-10">
          <div className="mx-auto mt-12 max-sm:mb-5 md:mb-10 w-[220px] h-[220px] md:w-[250px] md:h-[250px] overflow-hidden rounded-full scale-125 border border-gray-200 pointer-events-none select-none dark:border-none">
            <img
              src="/profile-photo.png"
              alt="profile-photo"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="md:w-4/5 lg:w-3/5">
          <h1 className="mb-5 text-3xl md:text-5xl font-bold select-none">
            Hi there, I&#39;m Vasyl
          </h1>
          <p className="mb-16 text-base text-justify md:text-xl dark:text-neutral-200 select-none">
            I am a{" "}
            <span className="text-teal-500 font-bold">
              full-stack developer{" "}
            </span>
            with over 2.5 years of commercial experience. I am specializing in
            the development of single-page and full-stack web applications. I am
            passionate about taking on new challenges and working on interesting
            projects. Let's collaborate to bring innovative ideas to life!
          </p>
          <Link
            to="projects"
            className=""
            activeClass=""
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <button className="py-3 px-10 font-bold text-white bg-teal-500 uppercase rounded-lg hover:bg-teal-600 duration-300 shadow-lg">
              Projects
            </button>
          </Link>
        </div>
      </div>
      <div className="py-10 flex flex-row justify-center">
        <Link
          to="experience"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
