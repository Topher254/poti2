import React from 'react';
import { Globe, Code, Wifi, Settings } from 'lucide-react';

const Technologies = () => {
    return (
        <div className="bg-black min-h-screen p-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-6">
                        <span className="text-purple-500">Technologies</span>
                        <span className="text-white"> & Skills</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A comprehensive toolkit spanning Full-Stack development, telecommunications,
                        and engineering expertise
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Frontend Development */}
                    <div className="bg-gray-800 rounded-lg p-8 hover:scale-105 transition-all duration-300 cursor-pointer">
                        <div className="flex items-center mb-6">
                            <div className="bg-purple-600 p-3 rounded-lg mr-4">
                                <Globe className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-white text-xl font-semibold hover:scale-105 transition-all duration-300">Full-Stack Development</h2>
                        </div>
                        <div className="space-y-4">
                            <div className="flex flex-wrap gap-3">
                                <span className="bg-gray-700 text-gray-300 px-3 py-2 rounded text-sm">React.js</span>
                                <span className="bg-gray-700 text-gray-300 px-3 py-2 rounded text-sm">JavaScript</span>
                                <span className="bg-gray-700 text-gray-300 px-3 py-2 rounded text-sm">Node.js</span>
                                <span className="bg-gray-700 text-gray-300 px-3 py-2 rounded text-sm">Express.js</span>
                                <span className="bg-gray-700 text-gray-300 px-3 py-2 rounded text-sm">MongoDB</span>
                                <span className="bg-gray-700 text-gray-300 px-3 py-2 rounded text-sm">PostgreSQL</span>
                                <span className="bg-gray-700 text-gray-300 px-3 py-2 rounded text-sm">MySQL</span>
                                <span className="bg-gray-700 text-gray-300 px-3 py-2 rounded text-sm">Prisma ORM</span>
                                <span className="bg-gray-700 text-gray-300 px-3 py-2 rounded text-sm">Tailwind CSS</span>
                                <span className="bg-gray-700 text-gray-300 px-3 py-2 rounded text-sm">HTML5</span>
                                <span className="bg-gray-700 text-gray-300 px-3 py-2 rounded text-sm">CSS3</span>

                            </div>

                            <div className="flex flex-wrap gap-3">
                            </div>
                        </div>
                    </div>

                    {/* Development Tools */}
                    <div className="bg-gray-800 rounded-lg p-8 hover:scale-105 transition-all duration-300 cursor-pointer">
                        <div className="flex items-center mb-6">
                            <div className="bg-purple-600 p-3 rounded-lg mr-4">
                                <Code className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-white text-xl font-semibold ">Development Tools</h2>
                        </div>
                        <div className="space-y-4">
                            <div className="flex flex-wrap gap-3">
                                <span className="bg-gray-700 text-gray-300 px-3 py-2 rounded text-sm">Git & GitHub</span>
                                <span className="bg-gray-700 text-gray-300 px-3 py-2 rounded text-sm">VS Code</span>
                                <span className="bg-gray-700 text-gray-300 px-3 py-2 rounded text-sm">npm/yarn</span>
                                <span className="bg-gray-700 text-gray-300 px-3 py-2 rounded text-sm">Vite</span>
                            </div>
                        </div>
                    </div>

                    {/* Telecommunications */}
                    <div className="bg-gray-800 rounded-lg p-8 hover:scale-105 transition-all duration-300 cursor-pointer">
                        <div className="flex items-center mb-6">
                            <div className="bg-purple-600 p-3 rounded-lg mr-4">
                                <Wifi className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-white text-xl font-semibold">Telecommunications</h2>
                        </div>
                        <div className="space-y-4">
                            <div className="flex flex-wrap gap-3">
                                <span className="bg-gray-700 text-gray-300 px-3 py-2 rounded text-sm">Network Management</span>
                                <span className="bg-gray-700 text-gray-300 px-3 py-2 rounded text-sm">Broadcasting Equipment</span>
                                <span className="bg-gray-700 text-gray-300 px-3 py-2 rounded text-sm">AI</span>
                                <span className="bg-gray-700 text-gray-300 px-3 py-2 rounded text-sm">Fiber Splicing</span>
                                <span className="bg-gray-700 text-gray-300 px-3 py-2 rounded text-sm">Wireless Systems</span>
                                <span className="bg-gray-700 text-gray-300 px-3 py-2 rounded text-sm">SCADA Systems</span>
                                <span className="bg-gray-700 text-gray-300 px-3 py-2 rounded text-sm">IP Telephony</span>
                                <span className="bg-gray-700 text-gray-300 px-3 py-2 rounded text-sm">RF Systems</span>
                                <span className="bg-gray-700 text-gray-300 px-3 py-2 rounded text-sm">Project Management</span>


                            </div>

                            <div className="flex flex-wrap gap-3">
                            </div>
                        </div>
                    </div>

                    {/* Engineering Tools */}
                    <div className="bg-gray-800 rounded-lg p-8 hover:scale-105 transition-all duration-300 cursor-pointer">
                        <div className="flex items-center mb-6">
                            <div className="bg-purple-600 p-3 rounded-lg mr-4">
                                <Settings className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-white text-xl font-semibold ">Engineering Tools</h2>
                        </div>
                        <div className="space-y-4">
                            <div className="flex flex-wrap gap-3">
                                <span className="bg-gray-700 text-gray-300 px-3 py-2 rounded text-sm">System Troubleshooting</span>
                                <span className="bg-gray-700 text-gray-300 px-3 py-2 rounded text-sm">Equipment Calibration</span>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <span className="bg-gray-700 text-gray-300 px-3 py-2 rounded text-sm">Technical Documentation</span>
                                <span className="bg-gray-700 text-gray-300 px-3 py-2 rounded text-sm">Quality Assurance</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Technologies;