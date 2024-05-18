import React from "react";
import { HERO_CONTENT } from "../constraints";
import image from "../assets/me2.jpeg";

const Hero = () => {
  return (
    <div className="bg-slate-800  text-white pt-8 px-[2em] md:px-[10em] py-[2em] flex flex-col md:grid md:grid-cols-2 justify-between items-center ">
      <div className=''>
        <h1 className=" text-4xl  text-neutral-400">Sarota Raphael</h1>
        <p className=" my-3 text-neutral-400 ">BSc Student</p>
        <p className="text-neutral-400">{HERO_CONTENT}</p>
      </div>
      <div className="flex justify-center">
      <img src={image} className="max-w-full   rounded-sm "/>
      </div>
    </div>
  );
};

export default Hero;
