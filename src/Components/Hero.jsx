import React from "react";
import { HERO_CONTENT } from "../constraints";
import image from "../assets/image1.jpeg";

const Hero = () => {
  return (
    <div className="bg-slate-800  text-white pt-8 px-6 md:px-[10em] py-[2em] flex flex-col md:grid md:grid-cols-2 justify-between items-center ">
      <div className=''>
        <h1 className=" text-4xl  text-neutral-300">Sarota Raphael</h1>
        <p className=" my-3 bg-gradient-to-r from-pink-300 via-slate-300 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent">
          Developer
        </p>
        <p className="text-neutral-400">{HERO_CONTENT}</p>
      </div>
      <div className="flex justify-center">
      <img src={image} className="max-w-full shadow-sm shadow-slate-400 rounded-sm "/>
      </div>
    </div>
  );
};

export default Hero;
