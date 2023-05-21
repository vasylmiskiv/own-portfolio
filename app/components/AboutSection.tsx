import { SKILLS } from "../constants/constants";

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center  font-bold text-4xl">About Me</h1>
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
            <p className="text-lg">graduation</p>
            <br />
            <p className="text-lg text-justify">
              I have a passion for sports, techno music, fitness, chess, books,
              traveling, learning new technologies and applying them to real
              projects. I am always seeking new experiences and love to keep
              myself engaged and learning new things.
            </p>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              My Skills
            </h1>
            <div className="flex flex-wrap flex-row justify-center md:justify-start max-sm:justify-between">
              {SKILLS.map((skill, i) => (
                <p
                  key={i}
                  className="bg-gray-200 px-4 rounded-lg py-2 mr-2 m-2 text-gray-500 cursor-pointer hover:bg-gray-300 max-sm:px-3"
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
