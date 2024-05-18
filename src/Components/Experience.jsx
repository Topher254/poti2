import React from "react";
import { EXPERIENCES } from "../constraints";

const Experience = () => {
  return (
    <div className="bg-slate-800 text-white px-[2em] md:px-[10em]">
      <h2 className="text-yellow-600 flex justify-center py-6 bg-gradient-to-r from-pink-300 via-slate-300 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent">
        Experience
      </h2>
      <div className="">
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className=" flex justify-between ">
            <div className='flex min-w-[50%] '>
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </div>
            <div className="">
              <h6 className="font-semibold pb-3 text-md pr-2">
                {experience.role} - 
                <span className="text-sm text-yellow-700 text-md pl-1">
                  {experience.company}
                </span>
              </h6>
              <p className="text-sm text-neutral-300">{experience.description}</p>
              {experience.technologies.map((tech, index) => (
                <span key={index} className="text-yellow-700 py-2">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
