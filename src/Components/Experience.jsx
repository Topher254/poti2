import React from 'react';
import { Building, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "Nuricha Technologies",
      period: "May 2024 - September 2024",
      description: "Contributed to the development of web applications using JavaScript, React.js, and Tailwind CSS.",
      isCurrent: false
    },
    {
      title: "Frontend Developer",
      company: "Invata Engineering",
      period: "July 2023 - December 2023",
      description: "Contributed to the development of the company website.",
      isCurrent: false
    },
    {
      title: "Radio Section Intern",
      company: "Kenya Broadcasting Corporation (KBC)",
      period: "May - August 2023",
      description: "Supported engineering operations, gaining hands-on experience in maintaining and troubleshooting technical equipment. Assisted in the setup and calibration of broadcasting equipment, ensuring optimal performance for radio broadcasts. Collaborated with engineering team members to address technical issues and implement solutions.",
      isCurrent: false
    },
    {
      title: "Telecommunications Intern",
      company: "Kenya Power Lighting Company (KPLC)",
      period: "May - July 2022",
      description: "Supported telecommunications and IT operations, gaining hands-on experience in network management and technology deployment. Assisted in the installation, configuration, and maintenance of telecommunications equipment and systems. Participated in network monitoring and troubleshooting activities to ensure optimal performance and reliability.",
      isCurrent: false
    }
  ];

  return (
    <div className="bg-black min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-white">Professional </span>
            <span className="text-purple-500">Experience</span>
          </h1>
          <p className="text-gray-400 text-lg">
            A journey through diverse roles in technology and telecommunications
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-700"></div>

          {/* Experience items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-4 w-4 h-4 bg-purple-500 rounded-full border-4 border-black"></div>

                {/* Content card */}
                <div className="ml-16 bg-gray-800 rounded-lg p-6">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center mb-2 md:mb-0">
                      <h3 className="text-white text-xl font-semibold mr-3">
                        {exp.title}
                      </h3>
                      {exp.isCurrent && (
                        <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs font-medium">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.period}
                    </div>
                  </div>

                  {/* Company */}
                  <div className="flex items-center mb-4">
                    <Building className="w-4 h-4 text-gray-400 mr-2" />
                    <span className="text-gray-300">{exp.company}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed">
                    {exp.description}
                  </p>
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