"use client";

import { useRouter } from "next/navigation";
import YouTube from "react-youtube";
import { LINKS } from "../constants/constants";

const SelfPresentation = () => {
  const router = useRouter();

  const opts = {
    height: "415",
    width: "720",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleEnd = () => {
    router.push("/");
  };

  return (
    <section className="">
      <div className="h-screen flex justify-center items-center">
        <YouTube videoId={LINKS.youtubeVideoId} opts={opts} onEnd={handleEnd} />
      </div>
    </section>
  );
};

export default SelfPresentation;
