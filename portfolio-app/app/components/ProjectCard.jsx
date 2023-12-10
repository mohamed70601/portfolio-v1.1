import React from "react";
import { RiExternalLinkFill } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, previewUrl, githubUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            target="_blank"
            href={previewUrl}
            className="h-14 w-14 border-2 relative mr-2 border-stone-400 hover:border-white group/link"
          >
            <RiExternalLinkFill className="h-10 w-10 text-stone-400 cursor-pointer group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </Link>
          <Link
            target="_blank"
            href={githubUrl}
            className="h-14 w-14 border-2 relative border-stone-400 hover:border-white group/link"
          >
            <BsGithub className="h-10 w-10 text-stone-400 cursor-pointer group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </Link>
        </div>
      </div>
      <div className="text-black bg-gradient-to-r from-neutral-300 to-stone-400 border-2 border-white">
        <h5 className="text-xl font-semibold ml-2 mb-2 pt-2 px-2">{title}</h5>
        <p className="px-2 pb-3 ml-2"> {description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
