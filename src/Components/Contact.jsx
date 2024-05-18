import React from "react";
import { CONTACT } from "../constraints";
import { MapPin, Phone } from "phosphor-react";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="bg-slate-800 text-neutral-300 pb-[1.4em] px-[2em] md:px-[10em]">
      <h1 className="flex justify-center py-4 text-xl font-semibold text-yellow-600">Get in Touch</h1>
      <div className="flex flex-col justify-center items-center">
        <p className="py-1 flex items-center"><MapPin className="mr-1 text-neutral-400" />{CONTACT.address}</p>
        <p className="py-1 flex items-center"><Phone className="mr-1 text-neutral-400" />{CONTACT.phone}</p>
        <p className="py-1 flex items-center"><MdEmail className="mr-1 text-neutral-400" />{CONTACT.email}</p>
      </div>
    </div>
  );
};

export default Contact;
