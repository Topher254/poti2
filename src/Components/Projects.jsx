import React from "react";
import { PROJECTS } from "../constraints";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="bg-slate-800 text-neutral-300 py-[2em] px-[2em] md:px-[10em]">
      <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.2 }}
        className="text-xl flex justify-center py-2 font-semibold text-yellow-600"
      >
        Projects
      </motion.h1>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {" "}
        {/* Move grid-cols-3 here */}
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="items-center mx-[2em] shadow-sm p-2 shadow-yellow-900 rounded-md flex flex-col"
          >
            <motion.h2
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.1 }}
              className="text-yellow-700 my-2 font-semibold pl-1 "
            >
              {project.title}
            </motion.h2>
            <img
              alt="image"
              src={project.image}
              className="rounded-md min-w-full p-2 "
            />

            <a
              href={project.link}
              className="text-sm text-blue-500 hover:cursor-pointer hover:text-blue-400  my-3 flex items-center"
            >
              <FiExternalLink className="mr-1" />
              {project.link}
            </a>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
