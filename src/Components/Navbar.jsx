import { GithubLogo, LinkedinLogo, PhoneCall, TwitterLogo } from "phosphor-react";
import React from "react";
import { FaGithub, FaLinkedin, FaReact, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="bg-slate-800 text-white  items-center py-6">
      <div className="flex justify-between px-[10em] ">
      <div>
        <h1 className="text-xl">SR</h1>
        </div>
        <div className="flex text-neutral-300">
            
           <FaGithub size={20} className="m-1 hover:cursor-pointer"/>
          <FaXTwitter size={20} className="m-1 hover:cursor-pointer"/>
          <FaLinkedin size={20} className="m-1 hover:cursor-pointer"/>
          <FaWhatsapp size={20} className="m-1 hover:cursor-pointer"/>
         
           </div>
      </div>
    </div>
  );
};

export default Navbar;
