"use client";

import { ThemeProvider } from "next-themes";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import ExperienceSection from "./components/ExperienceSection";
import Container from "./components/Container";
import Socials from "./components/Socials";

const Home = () => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="relative">
        <Header />
        <Container>
          <HeroSection />
          <ExperienceSection />
          <ProjectSection />
          <AboutSection />
        </Container>
        <Socials />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Home;
