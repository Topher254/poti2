import React from "react";
import { HERO_CONTENT } from "../constraints";
import image from "../assets/me2.jpeg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="bg-slate-800  text-white pt-8 px-[2em] md:px-[10em] py-[2em] flex flex-col md:grid md:grid-cols-2 justify-between items-center ">
      <motion.div
     
      className=''>
        <motion.h1 
        initial={{
          x: -100,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
          transition: {
            duration: 1,
            ease: "easeInOut",
          },
        }}className=" text-4xl  text-neutral-400">Sarota Raphael</motion.h1>
        <motion.p 
          initial={{
        x: -100,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
        transition: {
          duration: 1.2,
          ease: "easeInOut",
        },
      }} className=" my-3 text-neutral-400 ">BSc Student</motion.p>
        <motion.p 
          initial={{
        x: -100,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
        transition: {
          duration: 1.2,
          ease: "easeInOut",
        },
      }} className="text-neutral-400">{HERO_CONTENT}</motion.p>
      </motion.div>
      <div className="flex justify-center">
      <motion.img 
      initial={{
        x: 100,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
        transition: {
          duration: 1.2,
          ease: "easeInOut",
        },
      }}
      src={image} className="max-w-full   rounded-sm "/>
      </div>
    </div>
  );
};

export default Hero;
