import React from 'react';
import { Code, Wifi } from 'lucide-react';

const Technologies = () => {
  return (
    <div className="bg-black  p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-purple-500">Technologies</span>
            <span className="text-white"> & Skills</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Dual expertise in software development and telecommunications/networking
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 rounded-lg p-8 hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="flex items-center mb-6">
              <div className="bg-purple-600 p-3 rounded-lg mr-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-white text-xl font-semibold">Software Development</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="bg-gray-700 text-gray-300 px-3 py-2 rounded text-sm">React.js</span>
              <span className="bg-gray-700 text-gray-300 px-3 py-2 rounded text-sm">JavaScript (ES6+)</span>
              <span className="bg-gray-700 text-gray-300 px-3 py-2 rounded text-sm">Node.js</span>
              <span className="bg-gray-700 text-gray-300 px-3 py-2 rounded text-sm">Express.js</span>
              <span className="bg-gray-700 text-gray-300 px-3 py-2 rounded text-sm">Python</span>
              <span className="bg-gray-700 text-gray-300 px-3 py-2 rounded text-sm">Tailwind CSS</span>
              <span className="bg-gray-700 text-gray-300 px-3 py-2 rounded text-sm">MongoDB</span>
              <span className="bg-gray-700 text-gray-300 px-3 py-2 rounded text-sm">PostgreSQL</span>
              <span className="bg-gray-700 text-gray-300 px-3 py-2 rounded text-sm">Git & GitHub</span>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-8 hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="flex items-center mb-6">
              <div className="bg-purple-600 p-3 rounded-lg mr-4">
                <Wifi className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-white text-xl font-semibold">Networking & Telecom</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="bg-gray-700 text-gray-300 px-3 py-2 rounded text-sm">RF Testing (RSRP, RSRQ, SINR)</span>
              <span className="bg-gray-700 text-gray-300 px-3 py-2 rounded text-sm">Fiber Optic Splicing & OTDR</span>
              <span className="bg-gray-700 text-gray-300 px-3 py-2 rounded text-sm">Cisco Networking (CCNA)</span>
              <span className="bg-gray-700 text-gray-300 px-3 py-2 rounded text-sm">IP Networking & VLANs</span>
              <span className="bg-gray-700 text-gray-300 px-3 py-2 rounded text-sm">Drive Testing </span>
              <span className="bg-gray-700 text-gray-300 px-3 py-2 rounded text-sm">MPBN</span>
              <span className="bg-gray-700 text-gray-300 px-3 py-2 rounded text-sm">Linux Shell Scripting</span>
              <span className="bg-gray-700 text-gray-300 px-3 py-2 rounded text-sm">Network Security (SSH, ACLs)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;