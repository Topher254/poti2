import React from "react";
import { PROJECTS } from "../constraints";
import project1 from "../assets/invata.jpeg";
import project2 from "../assets/jgusa.jpeg";
import project3 from "../assets/topeats.jpeg";
import { CgWebsite } from "react-icons/cg";
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
  return (
    <div className="bg-slate-800 text-neutral-300 py-[2em] px-[2em] md:px-[10em]">
      <h1 className="text-xl flex justify-center py-2 font-semibold text-yellow-600">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Move grid-cols-3 here */}
        {PROJECTS.map((project, index) => (
          <div key={index} className="items-center mx-[2em] shadow-sm p-2 shadow-yellow-900 rounded-md flex flex-col">
          <h2 className="text-yellow-700 my-2 font-semibold pl-1 ">{project.title}</h2>
          <img alt="image" src={project.image} className="rounded-md min-w-full p-2"/>
        
            <a href={project.link}  className="text-sm text-blue-500 hover:cursor-pointer my-3 flex items-center"><FiExternalLink className="mr-1"/>{project.link}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
