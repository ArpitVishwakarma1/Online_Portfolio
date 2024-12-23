import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-10 lg:gap-20">
      <div className="flex flex-col gap-3 sm:gap-5">
        <h4 className="text-base sm:text-lg font-normal text-center lgl:text-left">
          WELCOME TO MY WORLD
        </h4>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center lgl:text-left">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">
            Arpit Vishwakarma
          </span>
        </h1>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center lgl:text-left">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-sm sm:text-base font-bodyFont leading-6 tracking-wide text-center lgl:text-left">
          I thrive on turning innovative ideas into digital realities. From
          designing captivating user interfaces to implementing robust backend
          solutions, I am dedicated to delivering high-quality, responsive web
          experiences.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
