import React from 'react';
import { Building, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Drive Test and SSV Intern",
      company: "Afrotel Engineering Group",
      period: "Jan 2026 - Present",
      description: "Conduct drive tests and Single Site Verification for LTE sites, collect RF parameters (RSRP, RSRQ, SINR, throughput), support cluster verification, and prepare site acceptance reports.",
      isCurrent: true
    },
    {
      title: "Software Engineering Trainee",
      company: "Nuricha Technologies",
      period: "May-Sep 2024",
      description: "Built responsive web applications using React.js and Tailwind CSS, integrated REST APIs, and explored AI-enhanced UI features.",
      isCurrent: false
    },
    {
      title: "Broadcast Transmission Trainee",
      company: "Kenya Broadcasting Corporation (KBC)",
      period: "May - Aug 2023",
      description: "Monitored IP/fiber studio-to-transmitter links, performed RF signal path testing, supported network connectivity, and gained exposure to satellite uplink/downlink systems.",
      isCurrent: false
    },
    {
      title: "Networking and IT Trainee",
      company: "Kenya Power Lighting Company (KPLC)",
      period: "May - Jul 2022",
      description: "Performed fiber optic fusion splicing and OTDR testing, assisted in structured cabling, supported TCP/IP configurations, and helped document network infrastructure.",
      isCurrent: false
    }
  ];

  return (
    <div className="bg-black min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-white">Professional </span>
            <span className="text-purple-500">Experience</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Telecommunications, networking, and software development roles
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-700"></div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="absolute left-4 w-4 h-4 bg-purple-500 rounded-full border-4 border-black"></div>
                <div className="ml-16 bg-gray-800 rounded-lg p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center mb-2 md:mb-0">
                      <h3 className="text-white text-xl font-semibold mr-3">{exp.title}</h3>
                      {exp.isCurrent && (
                        <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs font-medium">Current</span>
                      )}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.period}
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <Building className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-gray-300">{exp.company}</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;