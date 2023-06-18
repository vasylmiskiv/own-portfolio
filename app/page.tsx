"use client";

import { ThemeProvider } from "next-themes";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import ExperienceSection from "./components/ExperienceSection";
import Container from "./components/Container";

const Home = () => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Header />
      <Container>
        <HeroSection />
        <ExperienceSection />
        <ProjectSection />
        <AboutSection />
      </Container>

      <Footer />
    </ThemeProvider>
  );
};

export default Home;
