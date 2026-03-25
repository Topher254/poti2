import React from 'react';
import { Wifi, Book, Award, Network } from 'lucide-react';

const NetworkingPage = () => {
  const skills = [
    "RF Testing (RSRP, RSRQ, SINR) & Drive Testing",
    "Fiber Optic Splicing & OTDR Testing",
    "IP Networking (VLANs, Routing, Switching)",
    "Network Security (SSH, ACLs)",
    "Linux Shell Scripting & Automation",
    "TEMS Investigation & SSV"
  ];

  const certs = [
    {
      title: "Cisco Certified Network Associate (CCNA)",
      status: "Completed"
    },
    {
      title: "Cisco Certified DevNet Associate (DevNet)",
      status: "In Progress"
    }
  ];

  return (
    <div className="bg-black min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-purple-500">Networking</span>
            <span className="text-white"> & Telecommunications</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Building a solid foundation in network infrastructure, RF engineering, and Cisco technologies.
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg p-8 mb-12">
          <h2 className="text-white text-2xl font-semibold mb-4 flex items-center gap-2">
            <Network className="w-6 h-6 text-purple-500" /> My Path
          </h2>
          <p className="text-gray-400 leading-relaxed">
            My journey started with a BSc in Telecommunication and Information Engineering at JKUAT, where I gained a deep understanding of RF principles, fiber optics, and IP networks. 
            I reinforced this knowledge through industrial attachments at KBC (broadcast transmission) and KPLC (fiber splicing, structured cabling). 
            Currently, I am deepening my expertise with Cisco certifications and hands‑on drive testing at Afrotel Engineering Group.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-white text-xl font-semibold mb-4 flex items-center gap-2">
              <Wifi className="w-5 h-5 text-purple-500" /> Technical Skills
            </h2>
            <ul className="space-y-2">
              {skills.map((skill, i) => (
                <li key={i} className="text-gray-400 flex items-start gap-2">
                  <span className="text-purple-500 mt-1">•</span> {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-white text-xl font-semibold mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-purple-500" /> Certifications
            </h2>
            <ul className="space-y-3">
              {certs.map((cert, i) => (
                <li key={i} className="text-gray-400">
                  <span className="font-medium text-white">{cert.title}</span> – {cert.status}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-lg p-6 text-center border border-gray-700">
          <p className="text-gray-400 italic">
            "I believe strong networks are the backbone of the digital world. My goal is to combine software and networking expertise to build smarter, more resilient infrastructure."
          </p>
          <p className="text-gray-500 text-sm mt-2">– Sarota Raphael</p>
        </div>
      </div>
    </div>
  );
};

export default NetworkingPage;