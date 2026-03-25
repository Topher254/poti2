import React from 'react';
import { Code, Cpu, BookOpen, Award } from 'lucide-react';

const SoftwarePage = () => {
  const milestones = [
    {
      icon: <Cpu className="w-8 h-8 text-purple-500" />,
      title: "Hardware Foundations",
      description: "Started with Arduino and Raspberry Pi projects, learning to code for embedded systems and IoT.",
      year: "2020-2021"
    },
    {
      icon: <Code className="w-8 h-8 text-purple-500" />,
      title: "Web Development Basics",
      description: "Self‑taught HTML, CSS, JavaScript, and built first interactive websites.",
      year: "2022"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-purple-500" />,
      title: "Power Learn Project (PLP) Certification",
      description: "Completed intensive full‑stack program covering React, Node.js, MongoDB, and modern DevOps practices.",
      year: "2025"
    },
    {
      icon: <Award className="w-8 h-8 text-purple-500" />,
      title: "Full‑Stack Developer",
      description: "Built multiple production‑ready applications (Yelpa, MG Tile & Stone, etc.) and continue to refine skills in AI‑enhanced UI.",
      year: "2024 – Present"
    }
  ];

  return (
    <div className="bg-black min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-purple-500">Software</span>
            <span className="text-white"> Development Journey</span>
          </h1>
          <p className="text-gray-400 text-lg">
            From hardware tinkering to full‑stack engineering – a continuous learning path.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-700 hidden md:block"></div>
          {milestones.map((milestone, idx) => (
            <div key={idx} className={`relative mb-12 flex flex-col md:flex-row ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className="md:w-1/2"></div>
              <div className="md:w-1/2 flex justify-center md:justify-start mb-4 md:mb-0">
                <div className="bg-gray-800 rounded-lg p-6 max-w-md">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-gray-700 p-3 rounded-full">{milestone.icon}</div>
                    <div>
                      <h3 className="text-white text-xl font-semibold">{milestone.title}</h3>
                      <p className="text-gray-500 text-sm">{milestone.year}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoftwarePage;