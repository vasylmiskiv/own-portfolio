import Image from "next/image";
import { Link } from "react-scroll/modules";

import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section id="hero">
      <div className="flex flex-col text-center pt-32 pb-20 md:px-7 md:pb-40 md:pt-40 items-center justify-center md:flex-row md:space-x-20">
        <div className="max-sm:px-5 md:w-1/3">
          <Image
            src="/profile-photo.jpg"
            width={350}
            height={350}
            alt="profile-photo"
            className={`mx-auto mb-10 rounded-xl border border-gray-200 pointer-events-none select-none dark:border-none`}
          />
        </div>
        <div className="md:w-3/5">
          <h1 className="mb-5 text-3xl md:text-5xl font-bold select-none">
            Hi there, I&#39;m Vasyl
          </h1>
          <p className="mb-10 text-lg text-justify md:text-xl dark:text-neutral-200 select-none">
            I am a{" "}
            <span className="text-teal-500 font-bold">
              full-stack developer{" "}
            </span>
            with more than 2 years of commercial experience. I am specializing
            in the development of single-page and full-stack web applications. I
            am passionate about taking on new challenges and working on
            interesting projects. Let's collaborate to bring innovative ideas to
            life!
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
            <button className="learn-more" id="button-projects">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Projects</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-row justify-center">
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
