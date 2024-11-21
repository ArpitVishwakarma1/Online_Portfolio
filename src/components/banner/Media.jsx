import React from "react";
import { FaInstagram, FaLinkedinIn, FaReact, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiNodedotjs, SiMongodb } from "react-icons/si";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8 xl:gap-16 justify-between">
      {/* Social Media Links */}
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4 text-white">
          Find me in
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a
              href="https://www.instagram.com/v_arpit1704/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://github.com/ArpitVishwakarma1?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://www.linkedin.com/in/arpit-vishwakarma17/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </span>
        </div>
      </div>

      {/* Skills Section */}
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4 text-white">
          Best skills on
        </h2>
        <div className="flex gap-4 flex-wrap">
          <span className="bannerIcon" aria-label="React">
            <FaReact />
          </span>
          <span className="bannerIcon" aria-label="JavaScript">
            <SiJavascript />
          </span>
          <span className="bannerIcon" aria-label="Tailwind CSS">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon" aria-label="Node.js">
            <SiNodedotjs />
          </span>
          <span className="bannerIcon" aria-label="MongoDB">
            <SiMongodb />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
