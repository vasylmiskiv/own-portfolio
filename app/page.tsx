import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import ExperienceSection from "./components/ExperienceSection";

const Home = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 max-sm:px-8 md:max-w-5xl">
      <HeroSection />
      <ExperienceSection />
      <ProjectSection />
      <AboutSection />
    </div>
  );
};

export default Home;
