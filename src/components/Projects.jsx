import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Wifi, Code } from 'lucide-react';
import { fetchRepoDetails, fetchRepoLanguages } from './githubService';
import projectConfig from './projectConfig'

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    const loadProjects = async () => {
      const projectsData = await Promise.all(
        projectConfig.map(async (config) => {
          try {
            const repoData = await fetchRepoDetails(config.githubRepo);
            const languages = await fetchRepoLanguages(config.githubRepo);
            
            // Use technologies from config if present, otherwise combine with languages
            const allTechs = config.technologies 
              ? [...new Set([...config.technologies, ...languages])]
              : languages;
            
            return {
              title: config.title,
              description: config.description,
              technologies: allTechs,
              githubUrl: repoData?.html_url || `https://github.com/${config.githubRepo}`,
              liveUrl: config.liveUrl || repoData?.homepage || '',
              gradientFrom: config.gradientFrom,
              gradientTo: config.gradientTo,
              image: config.image,
              category: config.category || 'software',
            };
          } catch (error) {
            console.error(`Error loading project ${config.title}:`, error);
            return {
              ...config,
              technologies: config.technologies || [],
              githubUrl: `https://github.com/${config.githubRepo}`,
              category: config.category || 'software',
            };
          }
        })
      );
      setProjects(projectsData);
      setLoading(false);
    };

    loadProjects();
  }, []);

  if (loading) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading projects...</div>
      </div>
    );
  }

  const filteredProjects = activeTab === 'all' ? projects : projects.filter(p => p.category === activeTab);

  return (
    <div className="bg-black min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-white">Featured </span>
            <span className="text-purple-500">Projects</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A mix of software applications and telecommunications tools I've built.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-6 py-2 rounded-lg transition-colors ${activeTab === 'all' ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab('software')}
            className={`px-6 py-2 rounded-lg transition-colors ${activeTab === 'software' ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
          >
            <Code className="inline w-4 h-4 mr-2" />
            Software
          </button>
          <button
            onClick={() => setActiveTab('networking')}
            className={`px-6 py-2 rounded-lg transition-colors ${activeTab === 'networking' ? 'bg-purple-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
          >
            <Wifi className="inline w-4 h-4 mr-2" />
            Networking
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <div className="h-48 relative">
                {project.image ? (
                  <>
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                  </>
                ) : (
                  <div className={`h-full w-full bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} flex items-center justify-center`}>
                    <div className="text-white">
                      {project.category === 'networking' ? <Wifi size={48} /> : <Code size={48} />}
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-white text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 5).map((tech, i) => (
                    <span key={i} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">{tech}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded flex items-center justify-center gap-2">
                      <ExternalLink className="w-4 h-4" /> View Live
                    </a>
                  )}
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded flex items-center justify-center">
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;