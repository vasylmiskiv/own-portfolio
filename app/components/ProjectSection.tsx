import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import { PROJECTS } from "../constants/constants";
import SlideUp from "./SlideUp";

const ProjectSection = () => {
  return (
    <section id="projects" className="md:px-7 pt-16 pb-2 md:pt-40 md:pb-2">
      <h1 className="text-center font-bold text-4xl select-none">
        My Projects
      </h1>
      <div className="w-6 md:mb-10 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></div>
      <div className="mb-10 text-gray-500 text-sm md:w-1/2 text-right ml-auto">
        *All links work fine. Need to wait a couple of minutes because these
        projects were deployed on free platforms.
      </div>
      <div className="flex flex-col">
        {PROJECTS.map((project, i) => (
          <div key={i}>
            <SlideUp offset="-400px 0px -400px 0px">
              <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 py-14 md:py-20 rounded-lg md:flex-row md:space-x-12">
                <div className="md:w-1/2 shadow-lg overflow-hidden rounded-xl max-sm:mb-6">
                  <Link href={project.link} target="_blank">
                    <Image
                      src={project.image}
                      alt="project"
                      width={1200}
                      height={1200}
                      className="transition-transform duration-500 transform scale-100 hover:scale-105"
                    />
                  </Link>
                </div>
                <div className="flex flex-col justify-between md:w-1/2">
                  <div>
                    <div className="mb-5 font-bold  transition-all duration-200 cursor-pointer text-2xl dark:text-neutral-200 hover:text-teal-500 dark:hover:text-teal-500">
                      {project.name}
                    </div>
                    <p className="mb-10">{project.description}</p>
                  </div>
                  <div className="flex flex-row justify-end space-x-4 mr-auto">
                    <Link href={project.github} target="_blank">
                      <BsGithub
                        size={25}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                    <Link href={project.link} target="_blank">
                      <BsArrowUpRightSquare
                        size={25}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              {PROJECTS[PROJECTS.length - 1] !== project && (
                <div className="h-[1px] bg-gray-200"></div>
              )}
            </SlideUp>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
