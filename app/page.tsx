import Image from "next/image";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-4 max-sm:px-8 md:max-w-5xl">
      <HeroSection />
    </div>
  );
}
