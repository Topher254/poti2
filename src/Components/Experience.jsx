import React from "react";
import { EXPERIENCES } from "../constraints";
import { motion } from "framer-motion";


const Experience = () => {
  return (
    <div className="bg-slate-800 text-white px-[2em] md:px-[10em]">
    
    <motion.h2
    whileInView={{opacity:1,x:0}}
    initial={{opacity:0,x:-100}}
    transition={{duration:1.1}}
    className="text-yellow-600 flex justify-center 
    py-6  text-2xl tracking-tight text-transparent">
        Experience
      </motion.h2>
      <div className="">
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className=" flex justify-between ">
            <motion.div
            whileInView={{opacity:1,x:0}}
            initial={{x:-100,opacity:0}}
            animate={{y:2,opacity:1}}
            transition={{duration:1.1}}

            className='flex min-w-[50%] '>
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>
            <motion.div
            whileInView={{opacity:1,x:0}}
            initial={{
              x: 100,
              opacity: 0,
            }}
            transition={{duration:1.2}}
           
            
            className="">
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
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
