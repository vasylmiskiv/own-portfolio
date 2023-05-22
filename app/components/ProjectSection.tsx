import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import { PROJECTS } from "../constants/constants";
import SlideUp from "./SlideUp";

const ProjectSection = () => {
  return (
    <section id="projects" className="pt-16 pb-2 md:py-20">
      <h1 className="text-center font-bold text-4xl">Projects</h1>
      <div className="w-6 md:mb-10 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></div>
      <div className="flex flex-col space-y-20 md:space-y-28">
        {PROJECTS.map((project, i) => (
          <div key={i}>
            <SlideUp offset="-300px 0px -300px 0px">
              <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:p-6 rounded-lg md:flex-row md:space-x-12">
                <div className="md:w-1/2 mb-10 md:mb-0 shadow-lg overflow-hidden rounded-xl">
                  <Link href={project.link} target="_blank">
                    <Image
                      src={project.image}
                      alt="project"
                      width={700}
                      height={700}
                      className="w-full h-full object-cover transition-transform duration-500 transform scale-100 hover:scale-105"
                    />
                  </Link>
                </div>
                <div className="md:w-1/2 my-5 flex flex-col justify-between">
                  <div>
                    <div className="mb-5 md:text-2xl font-bold">
                      {project.name}
                    </div>
                    <p>{project.description}</p>
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
            </SlideUp>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
