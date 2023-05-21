"use client";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { useTheme } from "next-themes";

import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  const { theme } = useTheme();

  return (
    <section id="home">
      <div className="flex flex-col text-center pt-40 pb-28 items-center justify-center md:py-48 md:flex-row md:space-x-20">
        <div className="max-sm:px-5 md:w-1/3">
          <Image
            src="/profile-photo.png"
            width={350}
            height={350}
            alt="profile-photo"
            className={`mx-auto mb-10 rounded-full ${
              theme === "light" ? `border border-gray-300` : `border-none`
            } unselectable-image pointer-events-none select-none`}
          />
        </div>
        <div className="md:w-3/5">
          <h1 className="mb-5 text-5xl font-bold">Hi there, I&#39;m Vasyl</h1>
          <p className="mb-10 text-lg text-justify md:text-xl">
            I am a{" "}
            <span className="text-green-800 font-bold">
              full-stack developer{" "}
            </span>
            with 2 years of commercial experience. I am specializing in the
            development of single-page and full-stack web applications. I am
            passionate about taking on new challenges and working on interesting
            projects. Let's collaborate to bring innovative ideas to life!
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-8 py-4 rounded-lg bg-green-700 cursor-pointer transition-all duration-200 hover:bg-green-800"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <Link
          to="about"
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
